(ns nearby.repl
  (:require
   [nearby.server :as nearby.server]
   [cider.nrepl :as cider]
   [clojure.tools.nrepl.server :as nrepl.server]
   [clojure.tools.namespace.repl :as namespace.repl]))

(defn -main [& args]
  (nrepl.server/start-server :port 6661
                             :handler cider/cider-nrepl-handler)
  (spit ".nrepl-port" 6661)
  (println "Started repl on port 6661")
  (nearby.server/start!))
