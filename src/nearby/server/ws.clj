(ns nearby.server.ws
  (:require
   [immutant.web.async :as web.async]
   [ring.util.response :as resp]))

(defonce *clients (atom #{}))

(def handlers
  {:on-open    (fn [channel]
                 (println "OPEN" channel)
                 (swap! *clients conj channel))

   :on-close   (fn [channel {:keys [code reason]}]
                 (println "CLOSE" channel "REASON" {:code code :reason reason})
                 (swap! *clients disj channel))

   :on-error   (fn [channel throwable]
                 (println "ERROR" throwable)
                 (web.async/close channel))

   :on-message (fn [channel message]
                 (println "RECV" message)
                 (web.async/send! channel
                                  (str "[recv: " (java.util.Date.) "]" message)))})

(defn handler [request]
  (println "HANDLE!")
  (web.async/as-channel request handlers))
