(ns nearby.client.app
  (:require
   [rum.core :as rum]
   [nearby.event-source :as es]
   [nearby.client.ws :as client.ws]))

(defn start-ws! [email]
  (client.ws/start! "/ws" email))

(rum/defcs  application < (rum/local nil ::value)
  [{*value ::value}]
  [:div
   [:h1 "hello"]
   [:label "Input email"]
   [:input {:type "text"
            :on-change (fn [e]
                         (reset! *value (.-value (.-currentTarget e))))
            :placeholder "email"}]
   [:button
    {:type "button"
     :on-click #(start-ws! @*value)}
    "Start"]])

(defn start! []
  (rum/mount (application)
             (js/document.getElementById "app")))
