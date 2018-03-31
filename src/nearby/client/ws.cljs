(ns nearby.client.ws
  (:require
   [clojure.string :as string]
   [nearby.event-source :as es]
   [cljs.reader :as edn]
   [nearby.util.time :as time])
  (:require-macros [nearby.logging :as logging]))

(def *set-client?    (atom false))
(def *ws-client-uuid (atom nil))
(def *ws-socket      (atom nil))

(defn on-message-impl [message-obj]
  )

(defn handle-error [e]
  (logging/info "[ws] Socket error! " e))

(defn on-close [o]
  (logging/info "[ws] Socket closed" o))

(defn on-open [o]
  (logging/info "[ws] Socket opened")
  o)

(defn ws-url [ws-uri lng lat email]
  (str "ws://" (.-host (.-location js/window)) ws-uri
       "?coords=" lng "," lat
       "&email=" email))

(defn setup-navigator-watch! [setup-fn]
  (if-let [nav (aget js/window "navigator")]
    (.getCurrentPosition (.-geolocation nav)
                         (fn [res]
                           (logging/info "Got navigator position"
                                         {:lng (.-longitude (.-coords res))
                                          :lat (.-latitude (.-coords res))})
                           (setup-fn {:lng (.-longitude (.-coords res))
                                      :lat (.-latitude (.-coords res))})))
    (logging/info "No navigator present")))

(defn heartbeat [socket]
  )

(def HEARTBEAT-MS (* 1000 30)) ;; every 30s

(defn setup-socket! [socket]
  (logging/info "Setting up socket and heartbeat")
  (reset! *ws-socket socket)
  (set! (.-onmessage socket) on-message-impl)
  (set! (.-onopen socket)    on-open)
  (set! (.-onerror socket)   handle-error)
  (set! (.-onclose socket)   on-close)
  (time/run-periodically (partial heartbeat socket) HEARTBEAT-MS)
  )

(defn setup! [ws-uri user-email {:keys [lng lat]}]
  (let [url  (ws-url ws-uri lng lat user-email)
        sock (js/WebSocket. url)]
    (logging/info "Connecting to" url)
    (setup-socket! sock)))

(defn start! [ws-uri user-email]
  (logging/info "Starting ws with" ws-uri user-email)
  (setup-navigator-watch! (partial setup! ws-uri user-email))
  *ws-socket)
