(ns nearby.fixtures
  (:require [datomic.api :as d]
            [nearby.core :as core]))

(def ^:fixture fixture-2018-03-31-initial-schema
  [

   ;; fixture
   {:db/ident :fixture/uuid
    :db/valueType :db.type/uuid
    :db/unique :db.unique/value
    :db/index true
    :db/cardinality :db.cardinality/one}
   {:db/ident :fixture/symbol-name
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident :fixture/datomic-tx
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident :fixture/transacted-at
    :db/valueType :db.type/instant
    :db/cardinality :db.cardinality/one}
   ;; client
   {:db/ident :client/uuid
    :db/valueType :db.type/uuid
    :db/unique :db.unique/value
    :db/index true
    :db/cardianlity :db.cardinality/one}
   {:db/ident :client/email
    :db/valueType :db.type/string
    :db/unique :db.unique/value
    :db/index true
    :db/cardinality :db.cardinality/one}
   {:db/ident :client/current-song
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident :client/max-distance
    :db/valueType :db.type/double
    :db/cardinality :db.cardinality/one}
   {:db/ident       :client/first-active
    :db/valueType   :db.type/instant
    :db/cardinality :db.cardinality/one}
   {:db/ident       :client/last-active
    :db/valueType   :db.type/instant
    :db/cardinality :db.cardinality/one}
   ;; song
   {:db/ident :song/uuid
    :db/unique :db.unique/value
    :db/index true
    :db/valueType :db.type/uuid
    :db/cardinality :db.cardinality/one}
   {:db/ident :song/artists
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many}
   {:db/ident       :song/album
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :song/name
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :song/duration
    :db/valueType   :db.type/long
    :db/cardinality :db.cardinality/one}
   {:db/ident       :song/album-art
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}

   ])

(defn install-fixtures! []
  (d/transact
   (d/connect core/DB-URI)
   fixture-2018-03-31-initial-schema))
