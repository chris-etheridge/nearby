(ns nearby.server.ws
  (:require
   [immutant.web.async :as web.async]
   [ring.util.response :as resp]
   [immutant.web :as web]))

(defonce *clients (atom #{}))

(defn broadcast! [clients message]
  (doseq [client clients]
    (web.async/send! client (pr-str message))))

(def handlers
  {:on-open    (fn [channel]
                 (println "OPEN" channel)
                 (swap! *clients conj channel)
                 (broadcast! @*clients {:event/action    :new-message
                                        :event/message (str "Message #" (rand 100))}))

   :on-close   (fn [channel {:keys [code reason]}]
                 (println "CLOSE" channel "REASON" {:code code :reason reason})
                 (swap! *clients disj channel))

   :on-error   (fn [channel throwable]
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
