(ns nearby.events
  (:require [nearby.event-source :as es]
            [datascript.core :as d]))

(defn new-client [client-data]
  (merge {:db/id       -1
          :client/song ""}
         (select-keys client-data
                      [:client/client-uuid :client/distance
                       :client/longitude :client/latitude])))

(defmethod es/process! :client-join [db event]
  [(new-client event)])

(defmethod es/process! :sync-clients [db event]
  (prn :event event)
  [])

(defmethod es/process! :set-status [db event]
  (if-some [status-id (:e (first (d/datoms db :avet :client/status)))
            ]
    [[:db/add status-id :client/status (:status/value event)]]
    [[:db/add -1 :client/status (:status/value event)]]))
