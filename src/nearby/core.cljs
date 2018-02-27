(ns nearby.core
  (:require
   [rum.core :as rum]
   [nearby.client.db :as client.db]
   [nearby.client.ws :as client.ws]
   [nearby.client.app :as client.app]
   [nearby.event-source :as es]
   [nearby.util.transit :as transit]
   [nearby.events :as events]
   [cljs.reader :as edn]))

(enable-console-print!)

(defn get-initial-state []
  (some-> (js/document.getElementById "init")
          (.-textContent)))

(defn ^:export start! []
  (let [initial-state (get-initial-state)
        initial-state (transit/read-transit-str initial-state)
        *loop   (es/start! initial-state)
        socket  (client.ws/start! (:config/ws-uri initial-state))]
    (swap! *loop assoc :ws/socket socket)
    (->> (js/document.getElementById "app")
         (rum/mount (client.app/app *loop)))))
