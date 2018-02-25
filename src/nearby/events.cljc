(ns nearby.events
  (:require
   [nearby.event-source :as es]
   [datascript.core :as d]))

(defn new-client [client-data]
  (merge {:db/id       -1
          :client/song ""}
         (select-keys client-data
                      [:client/client-uuid :client/distance
                       :client/song
                       :client/longitude :client/latitude])))

(defmethod es/process! :client-join [db event]
  [(new-client event)])

(defmethod es/process! :sync-user [db event]
  (let [uuid (:client/client-uuid event)]
    (if-let [current (d/entity db [:user/client-uuid uuid])]
      []
      [{:db/id            -1
        :user/client-uuid uuid}])))

(defmethod es/process! :set-song [db event]
  (if-let [current (d/q '[:find ?e .
                          :in $
                          :where
                          [?e :client/song _]]
                        db)]
    [[:db/add current :user/active-song (:song/value event)]]
    [{:db/id -1 :user/active-song (:song/value event)}]))

(defmethod es/process! :set-app-status [db event]
  (if-some [status-id (:e (first (d/datoms db :avet :app/status)))]
    [[:db/add status-id :app/status (:status/value event)]]
    [{:db/id -1 :app/status (:status/value event)}]))
