(ns nearby.server
  (:gen-class)
  (:require
   [clojure.java.io :as io]
   [clojure.string :as str]
   [compojure.core :as cj]
   [compojure.route :as route]
   [immutant.web :as web]
   [nearby.server.ws :as server.ws]
   [ring.middleware.params :as middleware.params]))

(defonce *web-server (atom nil))

(defn render-index [request template]
  (str/replace template #"\#data\#" (pr-str "/ws")))

(defn index [request]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    (->> (io/file "resources/public/index.html")
                 (slurp)
                 (render-index request))})

(def web-app
  (-> (cj/routes
       (cj/GET "/" [_] index)
       (route/files "/public" {:root "resources/public"})
       (cj/GET "/ws" [_] server.ws/handler))
      middleware.params/wrap-params))

(defn start! []
  (if @*web-server
    (println "Server already running")
    (do
      (println "Starting server on 8080")
      (reset! *web-server (web/run #'web-app {:port 8080})))))

(defn stop! []
  (if-let [stop-args @*web-server]
    (do
      (println "Shutting down server")
      (web/stop stop-args)
      (reset! *web-server nil)
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
    (require '[clojure.tools.namespace.repl])
    (clojure.tools.namespace.repl/refresh)
    (restart!))
  (stop!)
  (start!))
