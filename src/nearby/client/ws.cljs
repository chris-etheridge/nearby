(ns nearby.client.ws
  (:require
   [clojure.string :as string]
   [nearby.event-source :as es]
   [cljs.reader :as edn]
   [nearby.util.time :as time]))

(def *set-client?    (atom false))
(def *ws-client-uuid (atom nil))
(def *ws-socket      (atom nil))

(defn on-message-impl [message-obj]
  )

(defn handle-error [e]
  (prn "[ws] Socket error! " e))

(defn on-close [o]
  (prn "[ws] Socket closed" o))

(defn on-open [o]
  (prn "[ws] Socket opened")
  o)

(defn ws-url [ws-uri lng lat]
  (str "ws://" (.-host (.-location js/window)) ws-uri
       "?coords=" lng "," lat))

(defn setup-navigator-watch! [setup-fn]
  (if-let [nav (aget js/window "navigator")]
    (.getCurrentPosition (.-geolocation nav)
                         (fn [res]
                           (prn "[ws] Got navigator position"
                            {:lng (.-longitude (.-coords res))
                                      :lat (.-latitude (.-coords res))})
                                      ))
    (prn "[ws] No navigator present")))

(defn heartbeat [socket]
  )

(def HEARTBEAT-MS (* 1000 30)) ;; every 30s

(defn setup-socket! [socket]
  (prn "[ws] Setting up socket and heartbeat")
  (reset! *ws-socket socket)
  (set! (.-onmessage socket) on-message-impl)
  (set! (.-onopen socket)    on-open)
  (set! (.-onerror socket)   handle-error)
  (set! (.-onclose socket)   on-close)
  (time/run-periodically (partial heartbeat socket) HEARTBEAT-MS)
  )

(defn setup! [ws-uri {:keys [lng lat]}]
  (let [url  (ws-url ws-uri lng lat)
        sock (js/WebSocket. url)]
    (prn "[ws] Connecting to" url)
    (setup-socket! sock)))

(defn start! [ws-uri]
  (prn "[ws] Starting ws with " ws-uri)
  (setup-navigator-watch! (partial setup! ws-uri))
  *ws-socket)
