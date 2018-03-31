(ns nearby.db
  (:require [datomic.api :as d]
            [nearby.core :as core]))

(defn start-system! []
  (try
    (let [conn (d/connect core/DB-URI)]
      {:datomic/conn conn
       :datomic/db (d/db conn)})
    (catch Exception e
      (d/create-database core/DB-URI)
      (start-system!))))
