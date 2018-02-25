(ns nearby.client.ws
  (:require
   [nearby.client.db :as db]
   [clojure.string :as string]
   [nearby.event-source :as es]
   [cljs.reader :as edn]
   [nearby.util :as util]))

(def *set-client?    (atom false))
(def *ws-client-uuid (atom nil))

(defn on-message-impl [message-obj]
  (let [data (edn/read-string (.-data message-obj))]
    (prn :data (:client/client-uuid data))
    (when (= (:event/action data) :sync-user)
      (when-not @*set-client?
        (reset! *set-client? true)
        (reset! *ws-client-uuid (:client/client-uuid data))))
    (es/dispatch! data)))

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
                           (prn "[ws] Got navigator position")
                           (es/dispatch! {:event/action :set-app-status
                                          :status/value :status/gelocation-loaded})
                           (setup-fn {:lng (.-longitude (.-coords res))
                                      :lat (.-latitude (.-coords res))})
                           (es/dispatch! {:event/action :set-app-status
                                          :status/value :status/loaded})))
    (prn "[ws] No navigator present")))

(defn heartbeat [socket]
  (when-let [uuid @*ws-client-uuid] ;; only heartbeat once we've got a client
    (.send socket (pr-str {:es/action             :heartbeat
                           :heartbeat/client-uuid uuid
                           :heartbeat/ts          (util/date)}))))

(defn setup-socket! [socket]
  (prn "[ws] Setting up socket and heartbeat")
  (set! (.-onmessage socket) on-message-impl)
  (set! (.-onopen socket)    on-open)
  (set! (.-onerror socket)   handle-error)
  (set! (.-onclose socket)   on-close)
  (util/run-periodically (partial heartbeat socket) 5000)
  (es/dispatch! {:event/action :set-app-status
                 :status/value :status/ws-loaded}))

(defn setup! [ws-uri {:keys [lng lat]}]
  (let [url  (ws-url ws-uri lng lat)
        sock (js/WebSocket. url)]
    (prn "[ws] Connecting to" url)
    (setup-socket! sock)))

(defn start! [ws-uri]
  (prn "[ws] Starting ws with " ws-uri)
  (setup-navigator-watch! (partial setup! ws-uri)))
