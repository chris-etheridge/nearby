(ns nearby.core
  (:require
   [rum.core :as rum]
   [nearby.client.db :as db]
   [nearby.client.ws :as ws]
   [nearby.event-source :as es]
   [nearby.events :as events]
   [datascript.core :as d]
   [cljs.reader :as edn]))

(enable-console-print!)

(rum/defc app < rum/reactive
  [*loop]
  (let [{:es/keys [failed-events confirmed-events db]} (rum/react *loop)]
    (prn :d db)
    [:.container
     [:h1.title "Music nearby"]
     (let [status (:v (first (reverse (d/datoms db :avet :client/status))))]
       [:h3
        (case status
          :status/gelocation-loaded "Gelocation acquired."
          :status/loaded            ""
          :status/ws-loaded "Connected to server, acquiring gelocation ... "
          "Connecting to server ...")])
     [:.panel
      [:h3.panel__title "Confirmed events"]
      [:.panel__content
       (for [event confirmed-events]
         [:.message-content {:key (str "event/" (hash (:event/uuid event)))}
          [:p (pr-str event)]])]]
     [:.panel
      [:h3.panel__title "Failed events"]
      [:.panel__content
       (for [event failed-events]
         [:.message-content {:key (str "failed-event/" (hash (:event/uuid event)))}
          [:p (pr-str event)]])]]
     [:.panel.panel--muted
      [:h3.panel__title "Clients"]
      [:.row.animation.fade-in.panel__content
       (for [[e v] (map #(vector (:e %) (:v %))
                        (d/datoms db :avet :client/client-uuid))
             :let [{:client/keys [client-uuid distance longitude latitude]} (d/entity db e)]]
         [:.client {:key (str "client/" v)}
          [:.col-5.client__uuid
           [:p client-uuid]]
          [:.col-1.client__distance
           [:p (str distance " km")]]
          [:.col-4
           [:p (str "lng/lat:" longitude "," latitude)]]])]]]))

(defn mount-it! [*loop]
  (->> (js/document.getElementById "app")
       (rum/mount (app *loop))))

(defn ^:export start! [ws-uri]
  (ws/start! ws-uri)
  (mount-it! (es/start! db/conn)))
