(ns nearby.client.db
  (:require
   [datascript.core :as d]))

(def schema
  {:client/client-uuid {:db/index true}
   :client/status      {:db/index true :db/cardinality :db.cardinality/one}})

(def conn
  (d/create-conn schema))
