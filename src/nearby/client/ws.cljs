(ns nearby.client.ws
  (:require
   [nearby.client.db :as db]
   [clojure.string :as string]
   [nearby.event-source :as es]
   [cljs.reader :as edn]
   [nearby.util :as util]))

;; TODO: this is hacky
(def *ws-client-uuid
  (atom nil))

(defn on-message-impl [message-obj]
  (let [data (edn/read-string (.-data message-obj))]
    (reset! *ws-client-uuid (:client/client-uuid data))
    (es/dispatch! (assoc data :ws/send-client-ts (util/date)))))

(defn handle-error [e]
  (prn "[ws] error! " e))

(defn on-close [o]
  (prn "[ws] socket closed" o))

(defn on-open [o]
  (prn "[ws] socket opened" o)
  o)

(def *geolocation
  (atom nil))

(add-watch *geolocation ::geo
           (fn [& _]
             (prn "[ws] client gelocation: " @*geolocation)))

(defn ws-url [ws-uri lng lat]
  (str "ws://" (.-host (.-location js/window)) ws-uri
       "?coords=" lng "," lat))

(defn setup-navigator-watch! [setup-fn]
  (if-let [nav (aget js/window "navigator")]
    (.getCurrentPosition (.-geolocation nav)
                         (fn [res]
                           (es/dispatch! {:event/action :set-status
                                          :status/value :status/gelocation-loaded})
                           (setup-fn {:lng (.-longitude (.-coords res))
                                      :lat (.-latitude (.-coords res))})
                           (es/dispatch! {:event/action :set-status
                                          :status/value :status/loaded})))
    (prn "[ws] no navigator present")))

(defn heartbeat [socket]
  (when-let [uuid @*ws-client-uuid] ;; only heartbeat once we've got a client
    (.send socket (pr-str {:es/action             :heartbeat
                           :heartbeat/client-uuid uuid
                           :heartbeat/ts          (util/date)}))))

(defn setup-socket! [socket]
  (set! (.-onmessage socket) on-message-impl)
  (set! (.-onopen socket)    on-open)
  (set! (.-onerror socket)   handle-error)
  (set! (.-onclose socket)   on-close)
  (util/run-periodically (partial heartbeat socket) 5000)
  (es/dispatch! {:event/action :set-status
                 :status/value :status/ws-loaded}))

(defn setup! [ws-uri {:keys [lng lat]}]
  (let [sock (js/WebSocket. (ws-url ws-uri lng lat))]
    (prn "[ws] ws-url" (ws-url ws-uri lng lat))
    (setup-socket! sock)))

(defn start! [ws-uri]
  (setup-navigator-watch! (partial setup! ws-uri)))
