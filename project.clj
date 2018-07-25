(defproject kittenll/antizer "0.5.1"
  :description "Ant Design ClojureScript Wrapper"
  :url "https://github.com/kevindragon/antizer"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [cljsjs/antd "3.7.1-0"]]
  :plugins [[lein-codox "0.10.4"]]
  :codox {:language :clojurescript
          :metadata {:doc/format :markdown}
          :output-path "doc/dist/latest/api"
          :namespaces [antizer.core antizer.reagent antizer.rum]})
