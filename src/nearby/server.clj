(ns nearby.server
  (:gen-class)
  (:require
   [clojure.java.io :as io]
   [clojure.string :as str]
   [clojure.tools.logging :as logging]
   [compojure.core :as cj]
   [compojure.route :as route]
   [immutant.web :as web]
   [nearby.server.ws :as server.ws]
   [nearby.util.transit :as transit]
   [ring.middleware.params :as middleware.params]))

(defonce *web-server (atom nil))

(defn render-index [request template]
  (str/replace template #"\#data\#"
               (transit/write-transit-str {:config/ws-uri "/ws"})))

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

(defn start! [port]
  (if @*web-server
    (logging/info "[server] Server already running")
    (let [port (or port 8080)]
      (logging/info "[server] Starting server on" port)
      (reset! *web-server (web/run #'web-app {:port port})))))

(defn stop! []
  (if-let [stop-args @*web-server]
    (do
      (logging/info "[server] Shutting down server")
      (web/stop stop-args)
      (reset! *web-server nil)
      (logging/info "[server] Server shut down"))
    (logging/info "[server] Server not running")))

(defn restart! [web-port]
  (logging/info "[server] Restarting server")
  (stop!)
  (start! web-port)
  (logging/info "[server] Done"))

(defn -main [& [web-port]]
  (start! (Integer/parseInt web-port)))

(comment

  (do
    (require '[clojure.tools.namespace.repl])
    (clojure.tools.namespace.repl/refresh)
    (restart! 8080))
  (stop!)
  (start! 8080)
  
  )
