(ns nearby.server
  (:require
   [immutant.web :as web]
   [clojure.java.io :as io]
   [compojure.route :as route]
   [compojure.core :as cj]
   [immutant.web.middleware :as middleware]

   [nearby.server.ws :as server.ws])
  (:gen-class))

(defonce *server (atom nil))

(defn index [request]
  (println "Received request " (keys request))
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    (slurp (io/file "resources/public/index.html"))})

(defn with-headers [handler headers]
  (fn [request]
    (some-> (handler request)
            (update :headers merge headers))))

(cj/defroutes app
  (cj/GET "/ws" [] server.ws/handler)
  (cj/GET "/" [req] (index req)))

(defn start! []
  (if @*server
    (println "Server already running")
    (do
      (println "Starting server on 8080")
      (reset! *server (web/run #'app {:port 8080})))))

(defn stop! []
  (if-let [stop-args @*server]
    (do
      (println "Shutting down server")
      (web/stop stop-args)
      (reset! *server nil)
      (println "Server shut down"))
    (println "Server not running")))

(defn restart! []
  (println "Restarting ...")
  (stop!)
  (start!)
  (print "Done"))

(defn -main [& args]
  (start!))


(comment
  (do
    (clojure.tools.namespace.repl/refresh)
    (restart!))
  (stop!)
  (start!)
  )
