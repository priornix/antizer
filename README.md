# antizer

Antizer is a ClojureScript library implementing [Ant Design](https://ant.design/) React components for [Reagent](https://github.com/reagent-project/reagent) and [Rum](https://github.com/tonsky/rum).

Ant Design is an enterprise-class UI design language and React-based implementation with the following features:

* An enterprise-class UI design language for web applications.
* A set of high-quality React components out of the box.
* Extensive API documentation and examples.

## Resources

* [Reagent Demo](https://priornix.github.io/antizer/latest/examples/reagent.html)

* [Rum Demo](https://priornix.github.io/antizer/latest/examples/rum.html)

* [Antizer Documentation](https://priornix.github.io/antizer/latest/)

* [API Documentation](https://priornix.github.io/antizer/latest/api/)

* [Ant Design Component Documentation](https://ant.design/docs/react/introduce)

## Status

All the Ant Design components should be fully functional and production-ready. If you discover any missing or invalid components, please file a ticket.

### Who's Using Antizer

Please let me know if you are using Antizer within your project, and I will gladly add that in here.

## Usage

To use Antizer, add the following to your project.clj:

```clojure
[kittenll/antizer "0.5.0"]
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

It is also necessary to include the Ant Design CSS stylesheet in your HTML page. The CSS files can be obtained from the following classpaths:

* `cljsjs/antd/development/antd.inc.css`
* `cljsjs/antd/production/antd.min.inc.css`

You can also follow the instructions for customization with LESS [here](https://ant.design/docs/react/customize-theme).

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

```bash
lein with-profile +examples-dev figwheel
```

After compilation, open up the respective HTML page in the `examples/resources` folder in your browser.

## Changes

### 0.5.0
* Upgrade cljs to 1.10.238
* Upgrade antd to 3.7.1-0

### 0.2.2
* Updated antd library to [2.12.3](https://ant.design/changelog#2.12.3).
* Fixed resource typo in README.md and documentation.
* Added missing components: Breadcumb.Item.
* Added new component: Input.TextArea.
* Fixed layout issue in examples.
* Added note on DatePicker and Calendar known issues.

### 0.2.1
* Updated antd library to [2.11.2](https://ant.design/changelog#2.11.2).
* Updated instructions for CSS file inclusion.
* Added Avatar component and example.
* Fixed layout and CSS styles for examples.
* Fixed cljsbuild settings for examples.

## Known Issues

#### DatePicker and Calendar date text are not displayed in the correct language when no date value has been set.

This is due to how the moment.js library is being packaged [currently](https://github.com/ant-design/ant-design/issues/4972#issuecomment-281235293). The date values must always be present for the components in order for the date to be displayed correctly. A bug report has been filed with the `antd` library [here](https://github.com/ant-design/ant-design/issues/6712).

Here is a workaround for now:

* Set default-value to a moment object ie: `:default-value (js/moment)` when using the DatePicker or Calendar component.
* Disable the clear date feature by setting `:allow-clear` to `false`.

## Acknowledgement

Thanks to Ant Design, [cljsjs/antd](https://github.com/cljsjs/packages/tree/master/antd), [Reagent](https://github.com/reagent-project/reagent), [Rum](https://github.com/tonsky/rum) and of course [ClojureScript](https://clojurescript.org), without which this project would not be possible.

## License

Copyright © 2017 Michael Lim

Licensed under Eclipse Public License (see LICENSE).
