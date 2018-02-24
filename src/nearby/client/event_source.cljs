(ns nearby.client.event-source
  (:require
   [nearby.client.db :as db]
   [datascript.core :as d]))

(defonce *state (atom nil))

(defn new-queue []
  (.-EMPTY PersistentQueue))

(defn new-state [db loop]
  {:db     db
   :loop   loop
   :start  (js/Date.)
   :events (new-queue)})

(defn dispatch! [event]
  (swap! *state update :events conj event))

(defmulti process!
  (fn [event]
    (:event/action event)))

(defn new-client [uuid]
  {:db/id       -1
   :client/uuid uuid
   :client/song ""})

(defmethod process! :client-join [event]
  [(new-client (:client/uuid event))])

(defn new-loop! [db]
  (js/window.setInterval
   (fn [_]
     (when-let [event (peek (:events @*state))]
       (prn :events/recv event)
       (let [tx (process! event)]
         (swap! *state assoc :db (:db-after (d/with (:db @*state) tx)))
         (swap! *state update :events pop))))
   600))

(defn start! [conn]
  (let [db   (d/db conn)
        loop (new-loop! db)]
    (reset! *state (new-state db loop))
    *state))
