(ns antizer.rum
  (:require [antizer.core :as ant]
            [goog.object :refer [getValueByKeys]]
            [rum.core])
  (:require-macros [antizer.macros 
                    :refer [export-form-funcs export-funcs 
                            export-props export-rum-components]]))

;; adapted from https://github.com/tonsky/rum/issues/20
(defn adapt-class [react-class & args]
  (let [[opts children] (if (map? (first args))
                          [(first args) (rest args)]
                          [{} args])
        type# (first children)
        ;; we have to make sure to check if the children is sequential 
        ;; as a list can be returned, eg: from a (for)
        new-children (if (sequential? type#)
                       [(sablono.interpreter/interpret children)]
                       children)
        ;; convert any options key value to a react element, if
        ;; a valid html element tag is used, using sablono
        vector->react-elems (fn [[key val]]
                              (if (sequential? val)
                                [key (sablono.interpreter/interpret val)]
                                [key val]))
        new-options (into {} (map vector->react-elems opts))]
    (apply js/React.createElement react-class
      ;; sablono html-to-dom-attrs does not work for nested hashmaps
      (clj->js (ant/map-keys->camel-case new-options :html-props true)) 
      new-children)))

(defn create-form
   "Calls Form.create() wrapper with the form to be created. `form` should
    be a `(rum.core/defcs)` component. Accepts the following options:

    * :options - map of Form.create() options. Refer to: 
                 https://ant.design/components/form/#Form.create(options) for
                 details
    * :props - the properties hashmap to be passed to the component during the `:init` 
               stage. Note that the recieved properties will be in the form of a 
               JavaScript associative map"
  [form & {:keys [options props] :or {options {} props {}}}]
  (js/React.createElement
    (((getValueByKeys js/antd "Form" "create") (clj->js (ant/map-keys->camel-case options)))
     (:rum/class (meta form))) (clj->js props)))

(defn get-form
  "Returns the `form` created by Form.create(). This function must be called
   from within the `(rum.core/defcs)` component, while passing in the component's 
   `state`"
  [state]
  (-> (getValueByKeys (:rum/react-component state) "props")
      (js->clj :keywordize-keys true)
      :form))

(defn decorate-field
  "Decorate form field, corresponds to antd's getFieldDecorator() function

   * form - the `form` object, obtained from `(get-form)`
   * id - field identifier, supports nested fields format in string format
   * options - the validation options for the field
   * field - the input field element that the validation will be applied to
   
   For more information about the validation options, please refer to: 
   https://ant.design/components/form/#getFieldDecorator(id,-options)-parameters"
  ([form id field] (decorate-field form id {} field))
  ([form id options field]
   (let [field-decorator (:getFieldDecorator form)
         params (clj->js (ant/map-keys->camel-case options))]
     ((field-decorator id params) field))))

(export-form-funcs)
(export-funcs)
(export-props)
(export-rum-components)
