(ns nearby.event-source
  (:require
   [datascript.core :as d]
   [nearby.util.time :as time]
   [nearby.util :as util]))

(defonce *state (atom nil))

(defn new-state [db loop]
  {:es/db               db
   :es/loop             loop
   :es/start            (time/date)
   :es/events           []
   :es/confirmed-events []
   :es/failed-events    []})

(defn dispatch! [event]
  (->> (merge event {:event/uuid          (util/new-uuid)
                     :event/dispatched-at (time/date)})
       (swap! *state update :es/events conj)))

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
      (when-let [db' (safe #(process! db event)
                           (partial fail-event! *state event))]
        (swap! *state assoc  :es/db db')
        (swap! *state update :es/confirmed-events conj event))
      (if (seq (rest events))
        (recur (rest events))
        nil))))

(defn tick! []
  (when-let [events (seq (:es/events @*state))]
    (process-events *state events)
    ;; clear event queue
    (swap! *state assoc :es/events [])))

(defn new-loop! [*state]
  (time/run-periodically tick! time/animation-frame-ms))

(defn new-database [state]
  (merge {:db/start (time/date)}
         state))

(defn start! [initial-state]
  (let [db   (new-database initial-state)
        loop (new-loop! *state)]
    (reset! *state (new-state db loop))
    *state))

(defn stop! []
  (time/clear-timer (:es/loop @*state)))
