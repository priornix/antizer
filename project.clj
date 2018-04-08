(defproject antizer "3.3.0-0"
  :description "Antizer"
  :url "https://github.com/elvn/antizer"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.10.0-alpha4"]
                 [org.clojure/clojurescript "1.10.238"]
                 [cljsjs/antd "3.3.0-0"]
                 [cljsjs/moment "2.22.0-0"]]
  :plugins [[lein-codox "0.10.3"]]
  :codox {:language :clojurescript
          :metadata {:doc/format :markdown}
          :output-path "doc/dist/latest/api"
          :namespaces [antizer.core antizer.reagent antizer.rum]})
