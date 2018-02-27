(ns nearby.util)

(defn new-uuid []
  #?(:clj
     (java.util.UUID/randomUUID)
     :cljs
     (random-uuid)))
