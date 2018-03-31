(ns nearby.repl
  (:require
   [cider.nrepl :as cider]
   [clojure.java.io :as io]
   [clojure.tools.nrepl.server :as nrepl.server]
   [nearby.server :as nearby.server]
   [refactor-nrepl.middleware :as refactor]
   [shadow.cljs.devtools.api :as shadow.api]
   [shadow.cljs.devtools.server :as shadow.server]
   [nearby.logging :as logging]))

(defn clean-up! [cljs-build]
  (logging/info "Starting clean-up!")
  (do
    ;; remove repl file
    (-> (io/file ".nrepl-port")
        (io/delete-file true))
    ;; stop cljs build
    (shadow.api/stop-worker cljs-build)
    ;; stop cljs server
    (shadow.server/stop!)
    (logging/info "Done clean-up!")))

(defn -main [& [repl-port web-port cljs-build]]
  (let [cljs-build (or (some-> cljs-build keyword) :dev)
        repl-port  (or (some-> repl-port Integer/parseInt) 6661)
        web-port   (or (some-> web-port Integer/parseInt) 8080)]
    ;; start repl
    (logging/info "Starting repl with port" repl-port)
    (nrepl.server/start-server
     :port    repl-port
     :handler (refactor/wrap-refactor cider/cider-nrepl-handler))
    (spit ".nrepl-port" repl-port)
    (logging/info "Done repl.")
    ;; start cljs
    (logging/info "Starting cljs with build" cljs-build)
    (shadow.server/start!)
    (shadow.api/watch cljs-build)
    (logging/info "[]Done cljs")
    ;; start server
    (nearby.server/start! web-port)
    ;; clean up
    (.addShutdownHook
     (Runtime/getRuntime)
     (Thread. (partial clean-up! cljs-build)))))
