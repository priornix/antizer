# antizer

Antizer is a ClojureScript library implementing [Ant Design](https://ant.design/) React components for Reagent and Rum. 

Ant Design is an enterprise-class UI design language and React-based implementation with the following features:

* An enterprise-class UI design language for web applications.
* A set of high-quality React components out of the box.
* Extensive API documentation and examples.

## Resources

Reagent Demo
Rum Demo
Antizer Documentation

## Usage 

To use Antizer, add the following to your project.clj:

```clojure
[antizer "0.2.0"]
```

You would also need to add the ClojureScript React library that you will be using.

For Reagent:
```clojure
[reagent "X.Y.Z"]
```

For Rum:
```clojure
[rum "X.Y.Z"]
```

It is also necessary to add the Ant Design CSS stylesheet to your HTML page. You can either include a precompiled version of the CSS via https://cdnjs.com/libraries/antd[CDN], or follow the instructions for customization with LESS https://ant.design/docs/react/customize-theme[here].

### Quick Example

For Reagent:
```clojure
(require '[antizer.reagent :as ant])
(require '[reagent.core :as r])

(defn render []
  [ant/button {:on-click #(ant/message-info "Hello Reagent!")} "Click me"])

(defn init! []
  (r/render [render] (.-body js/document)))
```

For Rum:
```clojure
(require '[antizer.rum :as ant])
(require '[rum.core :as rum])

(defn render []
  (ant/button {:on-click #(ant/message-info "Hello Rum!")} "Click me"))

(defn init! []
  (rum/mount (render) (.-body js/document)))
```

## Examples

To compile the examples:

```bash
lein with-profile +examples cljsbuild once
```

To compile the examples and enable hot reloading with figwheel:

[source,bash]
```bash
lein with-profile +examples-dev figwheel
```

After compilation, open up the respective HTML page in the `examples/resources` folder in your browser.

## License

Copyright © 2017 Michael Lim

Licensed under Eclipse Public License (see LICENSE).
