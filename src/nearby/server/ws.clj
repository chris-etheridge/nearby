(ns nearby.server.ws
  (:require
   [clojure.string :as str]
   [clojure.tools.logging :as logging]
   [immutant.web.async :as web.async]
   [nearby.haversine :as haversine]
   [nearby.util :as util]))

(defonce *state (atom {:clients {}}))

(def select-values
  (comp vec vals select-keys))

(defn write-socket-data [data]
  ;; TODO: transit
  (pr-str data))

(defn calculate-client-distance [{:client/keys [longitude latitude]} client]
  (->> (select-values client [:client/longitude :client/latitude])
       (haversine/in-kilometers [longitude latitude])))

(defn connected-clients-txes [clients requesting-client]
  (when-some [clients (seq clients)]
    (for [{:client/keys [client-uuid longitude latitude] :as client} clients]
      {:client/client-uuid client-uuid
       :client/distance    (calculate-client-distance client requesting-client)
       :client/latitude    latitude
       :client/longitude   longitude})))

(defn snapshot [*state requesting-client]
  {:event/action :sync-user
   :client/client-uuid (:client/client-uuid requesting-client)
   :event/uuid   (java.util.UUID/randomUUID)
   :sync/time    (.getTime (java.util.Date.))
   :db/clients   (connected-clients-txes (vals (:clients *state)) requesting-client)})

(defn maybe-broadcast! [clients message]
  (when (<= 2 (count clients))
    (doseq [[_ {:client/keys [channel client-uuid longitude latitude]}] clients
            :let  [distance (calculate-client-distance {:client/longitude longitude
                                                        :client/latitude  latitude}
                                                       message)]
            :when (>= 50 distance)] ;; TODO: config var
      (web.async/send! channel (write-socket-data
                                (merge message {:client/client-uuid (str client-uuid)
                                                :client/distance    distance}))))))

(defn new-client [channel uuid coords]
  (let [[lng lat] (str/split coords #",")]
    (logging/info :lat lat :lng lng :split)
    {:client/channel     channel
     :client/client-uuid uuid
     :client/raw-coords  coords
     :client/song        (rand-nth ["Pop - Not now"
                                    "Grey - Its too late!"
                                    "Fary - Bring it"])
     :client/latitude    (Double/parseDouble lat)
     :client/longitude   (Double/parseDouble lng)}))

(defn client-join-msg [client]
  (merge (dissoc client :client/channel)
         {:event/action     :client-join
          :event/uuid       (util/new-uuid)}))

(defn on-open-impl [coords channel]
  (let [uuid    (java.util.UUID/randomUUID)
        nclient (new-client channel uuid coords)]
    (logging/info "new-client" nclient)
    (swap! *state assoc-in [:clients uuid] nclient)
    (web.async/send! channel (write-socket-data (snapshot *state nclient)))
    (maybe-broadcast! (:clients @*state) (client-join-msg nclient))))

(defn prepare-handlers [{{coords "coords"} :params :as request}]
  {:on-open (partial on-open-impl coords)

   :on-close (fn [channel {:keys [code reason]}]
               (println "CLOSE" channel "REASON" {:code code :reason reason})
               (swap! *state update :clients
                      #(->> (filter (fn [[_ channel]]
                                      (= channel channel))
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
