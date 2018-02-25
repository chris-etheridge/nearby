(ns nearby.event-source
  (:require
   [datascript.core :as d]
   [nearby.util :as util]))

(defonce *state (atom nil))

(defn new-state [db loop]
  {:es/db               db
   :es/loop             loop
   :es/start            (util/date)
   :es/events           []
   :es/confirmed-events []
   :es/failed-events    []})

(defn dispatch! [event]
  (swap! *state update :es/events conj (merge event {:event/uuid          (util/new-uuid)
                                                     :event/dispatched-at (util/date)})))

(defmulti process!
  (fn [db event]
    (:event/action event)))

(defn fail-event! [*state event extra exception]
  (swap! *state update :es/failed-events conj
         (cond-> (merge event {:es/exception-extra exception})
           extra (merge extra)))
  nil)

(defn safe [task fail-task]
  (try
    (task)
    (catch #?(:clj Exception :cljs js/Error) e
      (fail-task e))))

(defn process-events [*state events]
  (loop [events events]
    (let [event (first events)
          db    (:es/db @*state)]
      (when-let [tx (safe #(process! db event)
                          (partial fail-event! *state event {}))]
        (when-let [db' (safe #(:db-after (d/with db tx))
                             (partial fail-event! *state event {:es/tx tx}))]
          (swap! *state assoc  :es/db db')
          (swap! *state update :es/confirmed-events conj event)))
      (if (seq (rest events))
        (recur (rest events))
        nil))))

(defn tick! []
  (when-let [events (seq (:es/events @*state))]
    (process-events *state events)
    ;; clear event queue
    (swap! *state assoc :es/events [])))

(defn new-loop! [*state]
  (util/run-periodically tick! util/animation-frame-ms))

(defn start! [conn]
  (let [db   (d/db conn)
        loop (new-loop! *state)]
    (reset! *state (new-state db loop))
    *state))

(defn stop! []
  (util/clear-timer (:es/loop @*state)))