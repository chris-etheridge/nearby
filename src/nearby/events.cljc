(ns nearby.events
  (:require
   [datascript.core :as d]
   [nearby.event-source :as es]))

(defn new-client [client-data]
  (merge {:client/song ""}
         (select-keys client-data
                      [:client/client-uuid :client/distance
                       :client/song
                       :client/longitude :client/latitude])))

(defmethod es/process! :client-join [db event]
  (update db :ws/clients (comp vec conj) (new-client event)))

(defmethod es/process! :sync-user [db event]
  (let [uuid (:client/client-uuid event)]
    (assoc db :user/client-uuid uuid)))

(defmethod es/process! :set-song [db event]
  (assoc db :user/song (:song/value event)))

(defmethod es/process! :set-app-status [db event]
  (assoc db :system/status (:status/value event)))
