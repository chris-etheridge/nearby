(ns nearby.core
  (:require
   [rum.core :as rum]
   [nearby.client.db :as client.db]
   [nearby.client.ws :as client.ws]
   [nearby.client.app :as client.app]
   [nearby.event-source :as es]
   [nearby.events :as events]
   [cljs.reader :as edn]))

(enable-console-print!)

(defn mount-it! [*loop]
  (->> (js/document.getElementById "app")
       (rum/mount (client.app/app *loop))))

(defn ^:export start! [ws-uri]
  (let [*loop   (es/start! client.db/conn)
        socket  (client.ws/start! ws-uri)]
    (swap! *loop assoc :ws/socket socket)
    (mount-it! *loop)))
