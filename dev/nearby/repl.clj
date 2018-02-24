(ns nearby.repl
  (:require
   [cider.nrepl :as cider]
   [clojure.tools.nrepl.server :as nrepl.server]
   [nearby.server :as nearby.server]
   [refactor-nrepl.middleware :as refactor]
   [shadow.cljs.devtools.api :as shadow.api]
   [shadow.cljs.devtools.server :as shadow.server]
   [clojure.java.io :as io]))

(defn start-repl! []
  (println "[repl] Starting repl on port 6661")
  (nrepl.server/start-server :port 6661
                             :handler (refactor/wrap-refactor
                                       cider/cider-nrepl-handler))
  (spit ".nrepl-port" 6661)
  (println "[repl] Started repl"))

(defn clean-up! []
  (println "[repl] Starting cleanup")
  (do
    ;; remove repl file
    (-> (io/file ".nrepl-port")
        (io/delete-file true))
    ;; stop cljs build
    (shadow.api/stop-worker :dev)
    ;; stop server
    (shadow.server/stop!)
    (println "[repl] Done clean-up!.")))

(defn start-cljs! []
  (println "[repl] Starting cljs build :dev")
  (shadow.server/start!)
  (shadow.api/watch :dev)
  (println "[repl] Done start-cljs!"))

(defn -main [& args]
  (start-repl!)
  (start-cljs!)
  (.addShutdownHook (Runtime/getRuntime) (Thread. clean-up!))
  (nearby.server/start!))
