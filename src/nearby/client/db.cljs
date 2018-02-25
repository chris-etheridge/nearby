(ns nearby.client.db
  (:require
   [datascript.core :as d]))

(def schema
  {;; ws client
   :client/client-uuid {:db/index true}

   ;; app
   :app/status {:db/index true :db/cardinality :db.cardinality/one}

   ;; user
   :user/client-uuid {:db/index       true :db/unique :db.unique/value
                      :db/cardinality :db.cardinality/one}
   :user/active-song {:db/cardinality :db.cardinality/one} #_ {:db/valueType :db.value/string}})

(def conn
  (d/create-conn schema))
