(ns nearby.client.app
  (:require
   [rum.core :as rum]
   [datascript.core :as d]
   [nearby.event-source :as es]))

(defn current-user-uuid [db]
  (:user/client-uuid db))

(rum/defcs client-card
  [local db {:client/keys [client-uuid distance song longitude latitude]}]
  [:.client.xs-p2 {:key (str "client-card/" client-uuid)}
   [:.col-5.client__uuid
    [:p client-uuid]]
   [:.col-1.client__distance
    [:p (str distance " km")]]
   [:.col-4.client__song
    [:.controls
     [:label "My song is: " song]
     [:button {:on-click #(es/dispatch! {:event/action     :set-song
                                         :song/value       song
                                         :user/client-uuid (current-user-uuid db)})}]]]])

(rum/defc event-cards [events k]
  [:.cards
   (for [event events]
     [:.card.xs-p2.card-content {:key (str "events-" k "/" (hash (:event/uuid event)))}
      [:p "Action: " (str (:event/action event))]
      [:div
       [:p "Data: "]
       [:code
        (pr-str (dissoc event
                        :event/dispatched-at :event/uuid
                        :event/action))]]
      [:p.xs-text-6
       "Time: " (str (:event/dispatched-at event))]])])

(defn active-song [db]
  (:user/song db))

(rum/defc app < rum/reactive
  [*loop]
  (let [{:es/keys [failed-events confirmed-events db]} (rum/react *loop)]
    (prn :*loop @*loop)
    [:.container.clearfix.gutters
     [:h1.title "Music nearby"]
     (let [status (:system/app-status db)]
       [:h3
        (case status
          :status/gelocation-loaded "Gelocation acquired."
          :status/loaded            ""
          :status/ws-loaded         "Connected to server, acquiring gelocation ... "
          "Connecting to server ...")])
     [:.panel.col.xs-col-8
      [:h3.panel__title "Clients"]
      [:.row.animation.fade-in.panel__content
       (map #(rum/with-key
               (client-card db %)
               (:client/client-uuid %))
            (:ws/clients db))]]
     [:.panel.col.xs-col-4
      [:h3.panel__title "Confirmed events"]
      [:.panel__content
       (event-cards confirmed-events "confirmed")]
      [:h3.panel__title "Failed events"]
      [:.panel__content.failed-events
       (event-cards failed-events "failed")]]]))
