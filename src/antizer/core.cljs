(ns antizer.core
  (:require [clojure.string :as s]
            [clojure.set :refer [rename-keys]]
            [clojure.walk :as w]
            [goog.object :refer [getValueByKeys]]
            [cljsjs.antd]))

(def antd-module js/antd)

(defn kebab-case->camel-case
  "Converts from kebab case to camel case, eg: on-click to onClick"
  [input]
  (let [words (s/split input #"-")
        capitalize (->> (rest words)
                        (map #(apply str (s/upper-case (first %)) (rest %))))]
    (apply str (first words) capitalize)))

(defn map-keys->camel-case 
  "Stringifys all the keys of a cljs hashmap and converts them
   from kebab case to camel case. If :html-props option is specified, 
   then rename the html properties values to their dom equivalent
   before conversion"
  [data & {:keys [html-props]}]
  (let [convert-to-camel (fn [[key value]]
                          [(kebab-case->camel-case (name key)) value])]
    (w/postwalk (fn [x]
                  (if (map? x)
                    (let [new-map (if html-props
                                    (rename-keys x {:class :className :for :htmlFor})
                                    x)]
                      (into {} (map convert-to-camel new-map)))
                    x))
      data)))

(defn get-module-path [module-name]
  (s/split module-name #"\."))

(defn get-prop
  "Retreives the value of the module's property"
  [module-name prop]
  (when prop
    (apply getValueByKeys antd-module (conj (get-module-path module-name) (name prop)))))

(defn call-js-func
  "Calls a javascript function, converting the keys for any arguments 
   that are hashmaps from kebab case to camel case

   * func - the native javascript to be called"
  [func & args]
  (apply func (clj->js (map map-keys->camel-case args))))

(defn call-func
  "Calls the ant module function"
  [module-name & args]
  (let [path (get-module-path module-name)
        func (apply getValueByKeys antd-module path)]
    (apply call-js-func func args)))
