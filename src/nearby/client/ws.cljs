(ns nearby.client.ws
  (:require
   [nearby.client.db :as db]
   [clojure.string :as string]))

;; TODO: actual on-message
(defn on-message [val]
  (db/transact! [{:db/id           -1
                  :message/content (.-data val)}]))

(defn handle-error [e]
  (prn "[ws] error! " e))

(defn on-close [o]
  (prn "[ws] socket closed" o))

;; TODO: config var
(def ws-uri
  "ws://localhost:8080/ws")

(def *socket (atom nil))

(defn on-open [o]
  (prn "[ws] socket opened" o)
  (.send @*socket "hello")
  o)

(defn start! []
  (let [sock (js/WebSocket. ws-uri)]
    (set! js/window.sock sock)
    (prn :sock sock)
    (set! (.-onmessage sock) on-message)
    (set! (.-onopen sock) on-open)
    (set! (.-onerror sock) handle-error)
    (set! (.-onclose sock) on-close)
    (reset! *socket sock)))
