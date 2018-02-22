(ns nearby.client.ws
  (:require
   [nearby.client.db :as db]
   [clojure.string :as string]
   [nearby.client.event-source :as es]
   [cljs.reader :as edn]))

;; TODO: actual on-message
(defn on-message-impl [message-obj]
  (let [data (.-data message-obj)]
    (es/dispatch! (assoc (edn/read-string data)
                         :client-ts (js/Date.)))))

(defn handle-error [e]
  (prn "[ws] error! " e))

(defn on-close [o]
  (prn "[ws] socket closed" o))

(def *socket (atom nil))

(defn on-open [o]
  (prn "[ws] socket opened" o)
  o)

(defn start! [ws-uri]
  (let [sock (js/WebSocket. (str "ws://" (.-host js/window.location) ws-uri))]
    (set! js/window.sock sock)
    (prn :sock sock)
    (set! (.-onmessage sock) on-message-impl)
    (set! (.-onopen sock) on-open)
    (set! (.-onerror sock) handle-error)
    (set! (.-onclose sock) on-close)
    (reset! *socket sock)))
