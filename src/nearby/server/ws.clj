(ns nearby.server.ws
  (:require
   [clojure.string :as str]
   [nearby.logging :as logging]
   [immutant.web.async :as web.async]
   [nearby.util :as util]
   [nearby.util.haversine :as haversine]
   [nearby.util.time :as time]
   [datomic.api :as d]))

;; clients is a store of :client/uuid -> channel
(defonce *state (atom {:clients {}}))

(def select-values
  (comp vec vals select-keys))

(defn write-socket-data [data]
  ;; TODO: transit
  (pr-str data))

(defn calculate-distance [raw-coords]
  (let [[lat lng] (str/split raw-coords #",")
        real-lat (Double/parseDouble lat)
        real-lng (Double/parseDouble lng)]
    ;; TODO: implement this
    ;; XXX max distance in radius in m
    5000
    ))

(defn maybe-create-client [db conn raw-coordinates email]
  (if-let [existing (d/entity db [:client/email email])]
    existing
    (let [new-tx {:db/id               (d/tempid :nearby)
                  :client/uuid         (java.util.UUID/randomUUID)
                  :client/email        email
                  :client/first-active (java.util.Date.)
                  :client/max-distance (calculate-distance raw-coordinates)}
          db-after (-> (d/transact conn [new-tx])
                       deref
                       :db-after)]
      (d/entity db [:client/email email]))))

(defn on-open-impl
  [{{:datomic/keys [db conn]} :nearby/env
            {coords "coords" email "email"} :params
    :as request}
   channel]
  (logging/info :req request)
  (let [client  (maybe-create-client db conn coords email)]
    (logging/info "New client" channel (d/touch client))
    (d/transact conn
                [[:db/add (:db/id client) :client/last-active (java.util.Date.)]])
    (swap! *state assoc-in [:clients (:client/uuid client)] channel)))

(defn prepare-handlers
  [request]
  {:on-open (partial on-open-impl request)

   :on-close (fn [channel {:keys [code reason]}]
               (logging/info "CLOSE" channel "REASON" {:code code :reason reason})
               (swap! *state update :clients
                      #(->> (filter (fn [[_ channel]]
                                      (not= channel channel))
                                    %1)
                            (into {}))))

   :on-error (fn [channel throwable]
               (logging/warn "ERROR" throwable)
               (web.async/close channel))

   :on-message (fn [channel message]
                 (println "RECV" message))})

(defn handler [request]
  (logging/info "HANDLE!" request)
  (web.async/as-channel request (prepare-handlers request)))
