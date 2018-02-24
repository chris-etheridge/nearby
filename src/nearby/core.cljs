(ns nearby.core
  (:require
   [rum.core :as rum]
   [nearby.client.db :as db]
   [nearby.client.ws :as ws]
   [nearby.client.event-source :as es]
   [datascript.core :as d]
   [cljs.reader :as edn]))

(enable-console-print!)

(rum/defc message-component < rum/reactive
  [*loop]
  (let [{:es/keys [confirmed-events db]} (rum/react *loop)]
    (prn :e confirmed-events :d db)
    [:.container
     [:.panel
      [:h1.panel__title "Messages"]
      [:.panel__content
       (for [event confirmed-events]
         [:.message-content {:key (str "event/" (hash (:event/uuid event)))}
          [:p (pr-str event)]])]]
     [:.panel.panel--muted
      [:h1.panel__title "Clients"]
      [:.row.animation.fade-in.panel__content
       (for [[e v] (map #(vector (:e %) (:v %))
                        (d/datoms db :avet :client/uuid))
             :let [{:client/keys [uuid distance longitude latitude]} (d/touch (d/entity db e))]]
         [:.client {:key (str "client/" v)}
          [:.col-5.client__uuid
           [:p uuid]]
          [:.col-1.client__distance
           [:p (str distance " km")]]
          [:.col-4
           [:p (str "lng/lat:" longitude "," latitude)]]])]]]))

(defn mount-it! [*loop]
  (->> (js/document.getElementById "app")
       (rum/mount (message-component *loop))))

(defn ^:export start! [ws-uri]
  (prn :start-uri ws-uri)
  (db/setup-db!)
  (ws/start! ws-uri)
  (mount-it! (es/start! db/conn)))
