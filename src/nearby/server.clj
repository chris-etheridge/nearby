(ns nearby.server
  (:gen-class)
  (:require
   [clojure.java.io :as io]
   [compojure.core :as cj]
   [compojure.route :as route]
   [immutant.web :as web]
   [ring.middleware.keyword-params :as middleware.kw]
   [ring.middleware.params :as middleware.params]
   [nearby.server.ws :as server.ws]
   [clojure.string :as str]
   [clojure.edn :as edn]))

(defonce *server (atom nil))

(defn prepare-index [request template]
  (str/replace template #"\#data\#" (pr-str "/ws")))

(defn index [request]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    (->> (io/file "resources/public/index.html")
                 (slurp)
                 (prepare-index request))})

(def web-app
  (-> (cj/routes
       (route/resources "/css/" {:root "public/css"})
       (route/resources "/js/" {:root "public/js"})
       (cj/GET "/" [_] index)
       (cj/GET "/ws" [_] server.ws/handler))
      middleware.kw/wrap-keyword-params
      middleware.params/wrap-params))

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
