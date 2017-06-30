(ns antizer.reagent
  (:require [antizer.core :as ant]
            [goog.object :refer [getValueByKeys]]
            [reagent.core :as r])
  (:require-macros [antizer.macros :refer [export-funcs export-props export-form-funcs 
                                           export-reagent-components]]))

(defn create-form
   "Calls Form.create() decorator with the form to be created. form can be
    any hiccup form. Accepts the following options:

    :options - map of Form.create() options. Refer to: 
               https://ant.design/components/form/#Form.create(options) for
               details"
   [form & {:keys [options] :or {options {}}}]
   (r/create-element
     (((getValueByKeys js/antd "Form" "create") (clj->js (ant/map-keys->camel-case options)))
      (r/reactify-component form))))

(defn get-form
  "Returns the `form` created by Form.create(). This function must be called
   from within the `form` component"
  []
  (-> (r/current-component)
      (r/props)
      (js->clj :keywordize-keys true)
      (:form)))

(defn decorate-field
  "Decorate a form field, corresponds to antd's getFieldDecorator() function
   Arguments:

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
     ((field-decorator id params) (r/as-element field)))))

(export-form-funcs)
(export-funcs)
(export-props)
(export-reagent-components)
