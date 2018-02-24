(ns nearby.client.event-source
  (:require
   [nearby.client.db :as db]
   [datascript.core :as d]))

(defonce *state (atom nil))

(defn new-queue []
  (.-EMPTY PersistentQueue))

(defn new-state [db loop]
  {:es/db     db
   :es/loop   loop
   :es/start  (js/Date.)
   :es/events (new-queue)
   :es/confirmed-events []})

(defn dispatch! [event]
  (swap! *state update :es/events conj event))

(defmulti process!
  (fn [event]
    (:event/action event)))

(defn new-client [client-data]
  (merge {:db/id       -1
          :client/song ""}
         (select-keys client-data
                      [:client/uuid :client/distance
                       :client/longitude :client/latitude])))

(defmethod process! :client-join [event]
  [(new-client event)])

(defmethod process! :sync-clients [event]
  (prn :event event)
  [])

(defn new-loop! [db]
  (js/window.setInterval
   (fn [_]
     (when-let [event (peek (:es/events @*state))]
       (prn :events/recv event)
       (let [tx (process! event)]
         (swap! *state assoc :es/db (:db-after (d/with (:es/db @*state) tx)))
         (swap! *state update :es/events pop)
         (swap! *state update :es/confirmed-events conj event))))
   600))

(defn start! [conn]
  (let [db   (d/db conn)
        loop (new-loop! db)]
    (reset! *state (new-state db loop))
    *state))
