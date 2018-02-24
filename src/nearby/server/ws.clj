(ns nearby.server.ws
  (:require
   [clojure.string :as str]
   [nearby.haversine :as haversine]
   [immutant.web.async :as web.async]))

(defonce *state (atom {:clients {}}))

(def select-values
  (comp vec vals select-keys))

(defn maybe-broadcast! [clients message]
  (when (<= 1 (count clients))
    (doseq [[_ {:ws/keys [channel client-uuid longitude latitude]}] clients
            :let  [distance (->> (select-values message [:client/longitude :client/latitude])
                                 (haversine/in-kilometers [longitude latitude]))]
            :when (>= 50 distance)] ;; TODO: config var
      (web.async/send! channel (pr-str ;; TODO: transit encoding
                                (merge message {:client/uuid     (str client-uuid)
                                                :client/distance distance}))))))

(defn new-client [channel uuid coords]
  (let [[lat lng] (str/split coords #",")]
    {:ws/channel     channel
     :ws/client-uuid uuid
     :ws/raw-coords  coords
     :ws/latitude    (Double/parseDouble lat)
     :ws/longitude   (Double/parseDouble lng)}))

(defn client-join-msg [{:ws/keys [latitude longitude client-uuid]}]
  {:event/action     :client-join
   :client/uuid      client-uuid
   :client/latitude  latitude
   :client/longitude longitude})

(defn on-open-impl [coords channel]
  (println "OPEN" channel coords)
  (let [uuid   (java.util.UUID/randomUUID)
        client (new-client channel uuid coords)]
    (swap! *state assoc-in [:clients uuid] client)
    (maybe-broadcast! (:clients @*state) (client-join-msg client))))

(defn prepare-handlers [{{coords "coords"} :params :as request}]
  (prn :prepare coords)
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
