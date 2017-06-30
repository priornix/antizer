(ns antizer.macros
  (:require [clojure.string :as s]
            [antizer.antd :as antd]))

(def antd-module 'js/antd)

(defn module-name->kebab-case
  "Converts module and sub module names from camel case to kebab case 
   eg: DatePicker to date-picker or Menu.Item to menu-item"
  [input]
  (->> (re-seq #"\w[a-z0-9]*" input)
       (map s/lower-case)
       (s/join "-")))

(def get-symbol-name (comp symbol module-name->kebab-case))

(defn get-module-path [module-name]
  (s/split module-name #"\."))

(defn define-fn [fn-name]
  (let [fn-name (name fn-name)]
    `(defn ~(get-symbol-name fn-name) [& args#]
      (apply antizer.core/call-func ~fn-name args#))))

(defn define-prop [prop-name]
  (let [prop-name (name prop-name)]
    `(defn ~(get-symbol-name prop-name) [prop#]
      (antizer.core/get-prop ~prop-name prop#))))

(defn define-form-funcs [method-name]
  (let [method-name (name method-name)]
    `(defn ~(get-symbol-name method-name) [form# & args#]
       (apply antizer.core/call-js-func ((keyword ~method-name) form#) args#))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; 
;; 
;; Functions for the different react libraries
;; 
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn define-reagent-component [component]
  (let [component (name component)]
    `(def ~(get-symbol-name component)
      (reagent.core/adapt-react-class
        (apply goog.object/getValueByKeys 
          ~antd-module ~(get-module-path component))))))

(defn define-rum-component [component]
  (let [component (name component)]
    `(defn ~(get-symbol-name component) [& args#]
      (apply antizer.rum/adapt-class
        (apply goog.object/getValueByKeys
          ~antd-module ~(get-module-path component)) args#))))

(defmacro export-funcs []
  `(do ~@(map define-fn antd/funcs)))

(defmacro export-props []
  `(do ~@(map define-prop antd/props)))

(defmacro export-form-funcs []
  `(do ~@(map define-form-funcs antd/form-funcs)))

(defmacro export-reagent-components []
  `(do ~@(map define-reagent-component antd/components)))

(defmacro export-rum-components []
  `(do ~@(map define-rum-component antd/components)))

; (defn define-component [component]
;   `(defn ~(get-symbol-name component) [& args#]
;      (apply antizer.core/create-component ~component args#)))

; (defmacro export-antd-components []
;   `(do ~@(map define-component antd/components)))
