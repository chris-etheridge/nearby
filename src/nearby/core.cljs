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
    [:.messages
     [:h1 "Messages"]
     (for [[id msg] (d/q '[:find ?id ?msg
                          :in $
                          :where
                          [?id :message/content ?msg]]
                        db)]
       [:.message-content {:key id}
        [:p (pr-str msg)]])]))

(defn mount-it! [*loop]
  (->> (js/document.getElementById "app")
       (rum/mount (message-component *loop))))

(defn ^:export start! [ws-uri]
  (prn :start-uri ws-uri)
  (db/setup-db!)
  (ws/start! ws-uri)
  (mount-it! (es/start! db/conn)))
