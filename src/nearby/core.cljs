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
  (let [db (:db (rum/react *loop))]
    (prn :db db)
    [:.container
     [:.panel
      [:h1.panel__title "Messages"]
      [:.panel__content
       (for [[id msg] (d/q '[:find ?id ?msg
                             :in $
                             :where
                             [?id :message/content ?msg]]
                           db)]
         [:.message-content {:key id}
          [:p (pr-str msg)]])]]
     [:.panel.panel--muted
      [:h1.panel__title "Clients"]
      [:.panel__content
       (prn :e (map #(vector (:e %) (:v %))
                    (d/datoms db :avet :client/uuid)))
       (for [[e v] (map #(vector (:e %) (:v %))
                        (d/datoms db :avet :client/uuid))]
         [:.client
          [:.client__id
           [:p e]]
          [:.client__uuid
           [:p v]]])]]]))

(defn mount-it! [*loop]
  (->> (js/document.getElementById "app")
       (rum/mount (message-component *loop))))

(defn ^:export start! [ws-uri]
  (prn :start-uri ws-uri)
  (db/setup-db!)
  (ws/start! ws-uri)
  (mount-it! (es/start! db/conn)))
