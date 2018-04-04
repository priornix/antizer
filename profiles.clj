{:examples
   {:dependencies [[reagent "0.8.0-alpha2"]
                   [rum "0.11.2"]]
    :plugins [[lein-cljsbuild "1.1.5"]]
    :resource-paths ["examples/resources"]
    :source-paths ["examples/src"]
    :main ^:skip-aot antizer-examples.server
    :cljsbuild
      {:builds
        {:app
          {:source-paths ["examples/src"]
           :compiler
           {:main "antizer-examples.app"
            :asset-path "js/out"
            :output-dir "examples/resources/js/out"
            :output-to "examples/resources/js/app.js"
            :pretty-print false
            :optimizations :advanced}}}}}

 :examples-dist 
   [:examples
     {:cljsbuild
       {:builds
         {:app
          {:compiler
           {:output-to "doc/dist/latest/examples/js/app.js"
            :output-dir "doc/dist/latest/examples/js/out"}}}}}]

 :examples-dev
   [:examples
     {:dependencies [[figwheel-sidecar "0.5.10"]]
      :plugins [[lein-figwheel "0.5.10"]]
      :figwheel {:css-dirs ["examples/resources/css"]}
      :cljsbuild
       {:builds
        {:app
          {:figwheel true
           :compiler
           {:optimizations :none
            :pretty-print true}}}}}]}
