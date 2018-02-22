(ns nearby.client.db
  (:require
   [datascript.core :as d]))

(def schema
  {:messages {:db/cardinality :db.cardinality/many}})

(def conn
  (d/create-conn schema))

(def *db (atom nil))

(defn setup-db! []
  (d/transact! conn
               [{:db/id           -1
                 :message/content "The first message!"}
                {:db/id           -2
                 :message/content "And then this message came along.."}]))

(defn transact! [tx]
  (d/transact! conn tx))
