(ns nearby.client.db
  (:require
   [datascript.core :as d]))

(def schema
  {:client/client-uuid {:db/index true}
   :app/status         {:db/index true :db/cardinality :db.cardinality/one}
   :user/client-uuid    {:db/index true :db/unique :db.unique/value}})

(def conn
  (d/create-conn schema))
