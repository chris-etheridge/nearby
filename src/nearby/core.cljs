(ns nearby.core
  (:require
   [rum.core :as rum]
   [nearby.client.db :as db]
   [nearby.client.ws :as ws]
   [datascript.core :as d]))

(enable-console-print!)

(rum/defc message-component < rum/reactive
  [*db]
  (let [db (rum/react *db)]
    [:.messages
     [:h1 "Messages"]
     (for [[id msg] (d/q '[:find ?id ?msg
                          :in $
                          :where
                          [?id :message/content ?msg]]
                        db)]
       [:.message-content {:key id}
        [:p msg]])]))

(defn mount-it! []
  (rum/mount (message-component db/*db)
             (js/document.getElementById "app")))

(defn ^:export start! []
  (db/setup-db!)
  (ws/start!)
  (mount-it!))
