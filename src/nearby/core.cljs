(ns nearby.core
  (:require
   [rum.core :as rum]
   [nearby.client.ws :as client.ws]
   [nearby.client.app :as client.app]
   [nearby.event-source :as es]
   [nearby.util.transit :as transit]
   [nearby.events :as events]
   [cljs.reader :as edn]
   )
  (:require-macros [nearby.logging :as logging]))

(enable-console-print!)

(defn ^:export start! []
  )
