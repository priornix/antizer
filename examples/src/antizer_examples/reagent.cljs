(ns antizer-examples.reagent
  (:require [clojure.string :as string]
            [antizer.reagent :as ant]
            [antizer-examples.common :as common]
            ;; each language has to be required seperately
            ;; in order for the display to be correct
            [cljsjs.moment]
            [cljsjs.moment.locale.es]
            [cljsjs.moment.locale.de]
            [cljsjs.moment.locale.ja]
            [cljsjs.moment.locale.ru]
            [cljsjs.moment.locale.zh-cn]
            [reagent.core :as r]))

(defn auto-complete []
  (let [data (r/atom [])]
    (fn []
      [:div
        [:h2 (str "Autocomplete")]
        [ant/auto-complete
          ;; we need to use dataSource instead of data-source, see README.MD
          {:style {:width "80%"} :dataSource @data
           :on-search
             (fn [x]
               (reset! data 
                 (take 3 (iterate #(str % (string/reverse %)) x)))) 
           :placeholder "Enter something"}]])))

(defn avatar []
  [:div.avatar
    [:h2 "Avatar"]
    [:div
      [ant/avatar {:style {:background-color "#87d068"} :icon "user" :class "va-middle"}]
      [ant/avatar {:style {:color "#f56a00" :background-color "#fde3cf"} :class "va-middle"} "U"]
      [ant/avatar {:style {:background-color "#ffbf00"} :class "va-middle"} "John"]
      [ant/badge {:count 10} [ant/avatar {:style {:background-color "#108ee9"} :shape "square" :icon "user"}]]]])

(defn buttons []
  [:div.example-button
    [:h2 "Buttons"]
    [ant/button {:type "primary"} "Primary"]
    [ant/button "Default"]
    [ant/button {:type "danger"} "Warning"]
    [ant/button {:icon "shopping-cart" :type "primary"} "With icon"]
    [ant/button {:icon "edit" :type "primary"}]])

(defn card []
  [:div 
    [:h2 "Cards"]
    [ant/card {:title "Title" :bordered true :class "card"}
      [:p "Not the usual lorem ipsum"]] [:br]
    [ant/card {:bordered true :class "card-photo"} 
      [:div [:img {:src "https://unsplash.it/330/120/?random"}]]
      [ant/col {:span 12} [:div [:h3 "Please rate me"]]]
      [ant/col {:span 12} [ant/rate]]]])

(defn carousel []
  [:div
    [:h2 "Carousel"]
    [ant/carousel {:autoplay true :dots true}
      (for [i (range 3)]
        [:div {:key i} [:img {:src (str "https://unsplash.it/400/300/?random=" i)}]])]])

(defn add-actions-column [columns data-atom]
  (conj columns 
    {:title "Actions"
     :render 
       #(r/as-element 
          [ant/button {:icon "delete" :type "danger"
                       :on-click
                        (fn []
                         (reset! data-atom
                           (remove (fn [d] (= (get (js->clj %2) "id") 
                                              (:id d))) @data-atom)))}])})) 

(defn datatable []
  (let [data (r/atom common/people)]
    (fn []
      [:div
        [:h2 "Data Table"] 
        [ant/table 
          {:columns (add-actions-column common/columns data)
           :dataSource @data :pagination common/pagination :row-key "id"
           :row-selection 
              {:on-change
                #(let [selected (js->clj %2 :keywordize-keys true)]
                  (ant/message-info (str "You have selected: " (map :name selected))))}}]])))

(defn user-form [display-buttons?]
  (fn [props]
    (let [form (ant/get-form)]
        [ant/form {:layout "horizontal"}
          [ant/form-item (merge common/form-style {:label "Name"})
            (ant/decorate-field form "name" {:rules [{:required true}]} 
              [ant/input])]
          [ant/form-item (merge common/form-style {:label "Email"})
            (ant/decorate-field form "email" {:rules [{:required true} {:type "email"}]} 
              [ant/input])]
          [ant/form-item (merge common/form-style {:label "Address"})
            (ant/decorate-field form "address" {:initial-value "Some initial value" :rules [{:required true}]} 
              [ant/input])]
          [ant/form-item (merge common/form-style {:label "Years of Experience"})
            (ant/decorate-field form "experience" {:rules [{:required true}]} 
              [ant/radio-group
                [ant/radio {:value 1} "1-10"]
                [ant/radio {:value 10} "10-30"]
                [ant/radio {:value 30} "30-50"]
                [ant/radio {:value 50} "> 50"]])]
          [ant/form-item (merge common/form-style {:label "Start Date"})
            (ant/decorate-field form "date" {:initial-value (js/moment) :rules [{:required true}]} 
              [ant/date-picker {:format "MMM Do YYYY"}])]
          [ant/form-item (merge common/form-style {:label "Accept Terms?"})
            (ant/decorate-field form "accept-terms"
              [ant/switch])]
          (if display-buttons?
            [ant/form-item {:wrapper-col {:offset 6}}
              [ant/col {:span 4}
                [ant/button {:type "primary" :on-click #(ant/validate-fields form)}
                  "Submit"]]
              [ant/col {:offset 1}
                [ant/button {:on-click #(ant/reset-fields form)}
                  "Reset"]]])])))

(defn form-example []
  [:div 
    [:h2 "Form"] 
    (ant/create-form (user-form true))])

(defn localization []
  (let [locale-atom (r/atom "en_US")]
    (fn []
      [ant/locale-provider {:locale (ant/locales @locale-atom)}
        [:div
          [:h2 "Localization"]
          [:span "Choose a language:" 
            [ant/select {:default-value "en_US" :on-change #(common/set-locale %1 locale-atom) :style {:padding "10px"}}
              [ant/select-option {:value "en_US"} "English"]
              [ant/select-option {:value "es_ES"} "Español"]
              [ant/select-option {:value "de_DE"} "Deutsch"]
              [ant/select-option {:value "ru_RU"} "Русский"]
              [ant/select-option {:value "zh_CN"} "中文"]
              [ant/select-option {:value "ja_JP"} "日本語"]
              [ant/select-option {:value "tlh" :disabled true} "Klingon"]]]
          [ant/pagination {:total 40 :show-size-changer true}] [:br]
          [ant/date-picker {:format "ddd MMM Do YYYY" :default-value (js/moment) :style {:width "60%"} :allow-clear false :show-today false}] [:br] [:br]
          [ant/time-picker {:style {:width "60%"}}] [:br] [:br]
          [ant/calendar {:fullscreen false :default-value (js/moment)}]
          [ant/table {:columns common/columns}]]])))

(defn messages []
  [:div.example-button
    [:h2 "Messages"]
    [ant/button {:on-click #(ant/message-info "Normal message")} "Normal"]
    [ant/button {:on-click #(ant/message-success "Success message")} "Success"]
    [ant/button {:on-click #(ant/message-warning "Warning message")} "Warning"]
    [ant/button {:on-click #(ant/message-error "Error message")} "Error"]
    [ant/button {:on-click #(ant/message-loading "This message will disappear in 10 seconds" 10)} "Timed"]])

(defn modal []
  (let [modal1 (r/atom false)
        modal-form (r/atom false)]
    (fn []
      [:div.example-button
        [:h2 "Modal"]
        [ant/button {:on-click #(reset! modal1 true)} "Modal Dialog"]
        [ant/modal {:visible @modal1 :title "Title of modal"
                    :on-ok #(reset! modal1 false) :on-cancel #(reset! modal1 false)} 
          (r/as-element [:p "Some content 1"])]
        [ant/button {:on-click #(ant/modal-confirm {:title "Are you sure?" :content "Some content"})} "Confirmation Modal"]
        [ant/button {:on-click #(reset! modal-form true)} "Modal Form"]
        [ant/modal {:visible @modal-form :title "Modal Form" :width 600
                    :on-ok #(reset! modal-form false) :on-cancel #(reset! modal-form false)} 
          (ant/create-form (user-form false))]]))) 

(defn notifications []
  [:div.example-button
    [:h2 "Notifications"]
    [ant/button {:on-click #(ant/notification-open 
                             {:message "Timed Notification"
                              :description "This notification will close after 4.5 seconds"})} 
      "Notification"]
    [ant/button {:on-click 
                 #(let [key (random-uuid)]
                   (ant/notification-open
                     {:message "Popup Notification"
                      :duration 0
                      :btn (r/as-element
                             [ant/button {:type "primary" 
                                          :on-click (fn [] (ant/notification-close key))} 
                               "Click to dismiss"])
                      :key key
                      :description "This notification will not close until it is dismissed"}))} 
      "Popup Notification"]])

(defn progress []
  (let [percent (r/atom 50)]
    (fn []
      (let [operate (fn [operation]
                      (if (= :plus operation)
                        (if (< @percent 100) (swap! percent + 10))
                        (if (>= @percent 0) (swap! percent - 10))))
            status (cond
                     (< @percent 42) "exception"
                     (= @percent 100) "success" 
                     :else "active")]
        [:div.progress
          [:h2 "Progress"]
          [ant/progress {:type "circle" :percent @percent :status status}]
          [ant/button-group
            [ant/button {:icon "plus" :on-click #(operate :plus)}]
            [ant/button {:icon "minus" :on-click #(operate :minus)}]]
          [ant/progress {:percent @percent :status status
                         :style {:width "42%"}}]]))))

(defn timeline []
  [:div
    [:h2 "Timeline"]
    [ant/timeline
      [ant/timeline-item {:color "red"} "6th June Project created"]
      [ant/timeline-item {:color "blue"} "8th June Initial prototype done"]
      [ant/timeline-item {:color "green"} "26th June Final Release"]]])

(defn tooltip []
  [:div.example-button
    [:h2 "Tooltips and Popups " [ant/tooltip {:title "Found me!"} 
                                  [ant/icon {:type "question-circle-o" :style {:font-size 13}}]]]
    [ant/tooltip {:title "Tooltip"} [ant/button "Tooltip"]]
    [ant/popover {:content "Dum dee dee dum dee dee dum" :title "Deedee dum"} [ant/button "Popover"]]
    [ant/popconfirm {:title "Are you sure?"
                      :on-confirm #(ant/message-success "You clicked OK")
                      :on-cancel #(ant/message-error "You clicked Cancel")}
      [ant/button "Click to confirm"]]])

(defn tree []
  [:div
    [:h2 "Tree"]
    [ant/tree {:checkable true :default-expanded-keys ["functional" "clr" "jvm" "javascript" "nodejs"]
               :default-checked-keys ["clojure" "clojure-clr" "cljs" "lumo" "planck"]}
      [ant/tree-tree-node {:title "Functional Languages" :key "functional"}
        [ant/tree-tree-node {:title "CLR" :key "clr"}
          [ant/tree-tree-node {:title "Clojure CLR" :key "clojure-clr"}]]
        [ant/tree-tree-node {:title "Haskell" :key "haskell"}]
        [ant/tree-tree-node {:title "JVM" :key "jvm"}
          [ant/tree-tree-node {:title "Clojure" :key "clojure"}]
          [ant/tree-tree-node {:title "Frege" :key "frege"}]
          [ant/tree-tree-node {:title "Scala" :disable-checkbox true}]]
        [ant/tree-tree-node {:title "JavaScript Engine" :key "javascript"}
          [ant/tree-tree-node {:title "ClojureScript" :key "cljs"}]]
        [ant/tree-tree-node {:title "Node.js" :key "nodejs"}
          [ant/tree-tree-node {:title "Lumo" :key "lumo"}]]
        [ant/tree-tree-node {:title "Planck" :key "planck"}]]]])

(defn render-example 
  "Render each example within a bordered box"
  [examples]
  ;; we need to generate a different key for each react element
  [ant/col {:span 12}
    (for [example examples]
      [:div.box {:key (random-uuid)}
        [:div.box-content
          [example]]])])

(defn render-full-row [example]
  [ant/col {:span 24}
    [:div.box {:key (random-uuid)}
      [:div.box-content
        [example]]]])

(defn content-area []
  [ant/layout-content {:class "content-area"}
    [ant/row {:gutter 12}
      (render-example [carousel buttons messages timeline tree progress])
      (render-example [card tooltip notifications auto-complete localization modal avatar])
      (render-full-row form-example)
      (render-full-row datatable)]])

(defn side-menu []
  [ant/menu {:mode "inline" :theme "dark" :style {:height "100%"}}
    [ant/menu-item {:disabled true} "Menu without icons"]
    [ant/menu-item "Menu Item"]
    [ant/menu-sub-menu {:title "Sub Menu"}
      [ant/menu-item "Item 1"]
      [ant/menu-item "Item 2"]]
    [ant/menu-item {:disabled true} "Menu with Icons"]
    [ant/menu-item (r/as-element [:span [ant/icon {:type "home"}] "Menu Item"])]
    [ant/menu-sub-menu {:title (r/as-element [:span [ant/icon {:type "setting"}] "Sub Menu"])}
      [ant/menu-item (r/as-element [:span [ant/icon {:type "user"}] "Item 1"])]
      [ant/menu-item (r/as-element [:span [ant/icon {:type "notification"}] "Item 2"])]]])

(defn render-layout [] 
  (fn []
    [ant/locale-provider {:locale (ant/locales "en_US")}
      [ant/layout
        [ant/affix
          [ant/layout-header {:class "banner"}
            (r/as-element
              [ant/row
                [ant/col {:span 12} [:h2.banner-header "Antizer Reagent Example"]]
                [ant/col {:span 1 :offset 11} 
                  [:a {:href "https://github.com/priornix/antizer"} 
                    [ant/icon {:class "banner-logo" :type "github"}]]]])]]
        [ant/layout
          [ant/layout-sider [side-menu]]
          [ant/layout {:style {:width "60%"}} 
            [content-area]]]]]))

(defn init! []
  (r/render [render-layout]
    (js/document.getElementById "app")))
