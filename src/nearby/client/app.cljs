(ns nearby.client.app
  (:require
   [rum.core :as rum]
   [datascript.core :as d]
   [nearby.event-source :as es]))

(defn current-user-uuid [db]
  (d/q '[:find ?uuid
         :in $
         :where
         [_ :user/client-uuid ?uuid]]
       db))

(rum/defcs client-card
  [local db {:client/keys [client-uuid distance song longitude latitude]}]
  [:.client {:key (str "client-card/" client-uuid)}
   (prn :ACTIVE (current-user-uuid db))
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

(defn es-by-avet [db attr]
  (->> (d/datoms db :avet attr)
       (map #(d/entity db (:e %)))))

(rum/defc event-cards [events k]
  [:.cards
   (for [event events]
     [:.card-content {:key (str "events-" k "/" (hash (:event/uuid event)))}
      [:pre (pr-str event)]])])

(defn active-song [db]
  (d/q '[:find ?song .
         :in $
         :where
         [_ :user/active-song ?song]]
       db))

(rum/defc app < rum/reactive
  [*loop]
  (let [{:es/keys [failed-events confirmed-events db]} (rum/react *loop)]
    (prn :*loop @*loop)
    [:.container
     [:h1.title "Music nearby"]
     (when-let [song (active-song db)]
       [:h3.active-song (str "My active song is " song)])
     (let [status (:v (first (es-by-avet db :app/status)))]
       [:h3
        (case status
          :status/gelocation-loaded "Gelocation acquired."
          :status/loaded            ""
          :status/ws-loaded         "Connected to server, acquiring gelocation ... "
          "Connecting to server ...")])
     [:.panel
      [:h3.panel__title "Confirmed events"]
      [:.panel__content
       (event-cards confirmed-events "confirmed")]]
     [:.panel
      [:h3.panel__title "Failed events"]
      [:.panel__content.failed-events
       (event-cards failed-events "failed")]]
     [:.panel.panel--muted
      [:h3.panel__title "Clients"]
      [:.row.animation.fade-in.panel__content
       (map #(rum/with-key
               (client-card db %)
               (:client/client-uuid %)) (es-by-avet db :client/client-uuid))]]]))
