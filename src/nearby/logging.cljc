(ns nearby.logging
  (:require
   [clojure.string :as string]))

(defn cljc-ns [env]
  (or (some-> (:ns env)
              :name)
      *ns*))

(defn log-key [env level]
  (str
   "[" (or (some-> (cljc-ns env)
                   str
                   (string/split #"\.")
                   last)
           "default")
   "] "
   (string/upper-case (name level))))

(def ^:dynamic *log-levels*
  {:root :info})

(defn should-log? [ns level]
  (= level
     (get *log-levels* ns :info)))

(defmacro log [level & args]
  (when (should-log? (cljc-ns &env) level)
    (if (:ns &env) ;; cljs uses &env var
      `(js/console.log ~(log-key &env level) ~@args)
      `(println ~(log-key &env level) ~@args))))

(defmacro info [& args]
  `(nearby.logging/log :info ~@args))

(defmacro warn [& args]
  `(nearby.logging/log :warn ~@args))

(defmacro debug [& args]
  `(nearby.logging/log :debug ~@args))

(defmacro error [& args]
  `(nearby.logging/log :error ~@args))
