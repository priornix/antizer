(ns antizer-examples.common)

(def form-style {:label-col {:span 6}
                 :wrapper-col {:span 13}})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Definitions and functions for the datatable
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def pagination {:show-size-changer true 
                 :page-size-options ["5" "10" "20"]
                 :show-total #(str "Total: " % " users")})

(defn comparison [data1 data2 field]
  (compare (get (js->clj data1 :keywordize-keys true) field) 
           (get (js->clj data2 :keywordize-keys true) field)))

;; we need to use dataIndex instead of data-index, see README.md
(def columns [{:title "Name" :dataIndex "name" :sorter #(comparison %1 %2 :name)}
              {:title "Age" :dataIndex "age" :sorter #(comparison %1 %2 :age)}
              {:title "Address" :dataIndex "address" :sorter #(comparison %1 %2 :address)}])

(def people [{:id 1 :name "Tracey Davidson" :age 43 :address "5512 Pockrus Page Rd"}
             {:id 2 :name "Pierre de Wiles" :age 41 :address "358 Fermat's St"}
             {:id 3 :name "Lydia Weaver" :age 23 :address "1251 Fourth St"}
             {:id 4 :name "Willie Reynolds" :age 26 :address "2984 Beechcrest Rd"}
             {:id 5 :name "Richard Perelman" :age 51 :address "2003 Poincaré Ricci Rd"}
             {:id 6 :name "Srinivasa Ramanujan" :age 32 :address "1729 Taxi Cab St"}
             {:id 7 :name "Zoe Cruz" :age 31 :address "8593 Pine Rd"}
             {:id 8 :name "Adam Turing" :age 41 :address "1936 Automata Lane"}])

(defn set-locale [country locale-atom]
  (let [locale-val (if (= country "zh_CN")
                     nil country)]
    (reset! locale-atom locale-val)))

