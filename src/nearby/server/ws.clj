(ns nearby.server.ws
  (:require
   [clojure.string :as str]
   [immutant.web.async :as web.async]))

(defonce *clients (atom {}))

(defn broadcast! [clients message]
  (doseq [[uuid channel] clients]
    (web.async/send! channel (pr-str
                              (assoc message :client-uuid (str uuid))))))

(defn new-client [channel uuid coords]
  (let [[lat lng] (str/split coords ",")]
    {:ws/channel     channel
     :ws/client-uuid uuid
     :ws/raw-coords  coords
     :ws/latitude    lat
     :ws/longitude   lng}))

(defn client-join-msg [{:ws/keys [lattitude longitude client-uuid]}]
  {:event/action     :client-join
   :client/latitude  latitude
   :client/longitude longitude})

(defn on-open-impl [coords channel]
  (println "OPEN" channel)
  (let [uuid (java.util.UUID/randomUUID)]
    (swap! *clients assoc uuid (new-client channel uuid coords))
    ))

(defn prepare-handlers [{{coords :coords} :params :as request}]
  (prn :prepare coords)
  {:on-open (partial on-open-impl coords)

   :on-close (fn [channel {:keys [code reason]}]
               (println "CLOSE" channel "REASON" {:code code :reason reason})
               (swap! *clients update #(filter
                                        (fn [[uuid channel] clients]
                                          (= channel channel))
                                        %)))

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
