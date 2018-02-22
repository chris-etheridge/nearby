(ns nearby.server.ws
  (:require [immutant.web.async :as web.async]))

(defonce *clients (atom {}))

(defn broadcast! [clients message]
  (doseq [[uuid channel] clients]
    (web.async/send! channel (-> (assoc message :client-uuid (str uuid))
                                 (pr-str)))))

(defn on-open-impl [channel]
  (println "OPEN" channel)
  (let [uuid (java.util.UUID/randomUUID)]
    (swap! *clients assoc uuid channel)
    (broadcast! @*clients {:event/action :new-client
                           :user/uuid    (str uuid)})))

(def handlers
  {:on-open on-open-impl

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
                 (println "RECV" message)
                 )})

(defn handler [request]
  (println "HANDLE!")
  (web.async/as-channel request handlers))

(comment

  (drop 1 [1 23])




  )
