(ns antizer-examples.app
  (:require [antizer-examples.reagent :as reagent]
            [antizer-examples.rum :as rum]
            [cljsjs.moment]))

(defn init! []
  (case js/example
    "reagent" (reagent/init!)
    "rum" (rum/init!)))

(enable-console-print!)
(init!)
