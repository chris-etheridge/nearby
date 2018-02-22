(ns nearby.server
  (:gen-class)
  (:require
   [clojure.java.io :as io]
   [compojure.core :as cj]
   [compojure.route :as route]
   [immutant.web :as web]
   [nearby.server.ws :as server.ws]))

(defonce *server (atom nil))

(defn index [_]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    (slurp (io/file "resources/public/index.html"))})

(def web-app
  (cj/routes
   (route/resources "/js/" {:root "public/js"})
   (cj/GET "/" [_] index)
   (cj/GET "/ws" [_] server.ws/handler)))

(defn start! []
  (if @*server
    (println "Server already running")
    (do
      (println "Starting server on 8080")
      (reset! *server (web/run #'web-app {:port 8080})))))

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

  (println (seq (.getURLs (java.lang.ClassLoader/getSystemClassLoader))))



  )
