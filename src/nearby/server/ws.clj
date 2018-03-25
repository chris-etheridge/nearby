(ns nearby.server.ws
  (:require
   [clojure.string :as str]
   [clojure.tools.logging :as logging]
   [immutant.web.async :as web.async]
   [nearby.util :as util]
   [nearby.util.haversine :as haversine]
   [nearby.util.time :as time]))

(defonce *state (atom {:clients {}}))

(def select-values
  (comp vec vals select-keys))

(defn write-socket-data [data]
  ;; TODO: transit
  (pr-str data))

(defn on-open-impl [coords channel]
  (let [uuid    (java.util.UUID/randomUUID)]
    (logging/info "new-client" channel uuid)
    ))

(defn prepare-handlers [{{coords "coords"} :params :as request}]
  {:on-open (partial on-open-impl coords)

   :on-close (fn [channel {:keys [code reason]}]
               (println "CLOSE" channel "REASON" {:code code :reason reason})
               (swap! *state update :clients
                      #(->> (filter (fn [[_ channel]]
                                      (not= channel channel))
                                    %1)
                            (into {}))))

   :on-error (fn [channel throwable]
               (println "ERROR" throwable)
               (web.async/close channel))

   :on-message (fn [channel message]
                 (println "RECV" message))})

(defn handler [request]
  (println "HANDLE!")
  (web.async/as-channel request (prepare-handlers request)))

(comment

  (drop 1 [1 23])




  )
