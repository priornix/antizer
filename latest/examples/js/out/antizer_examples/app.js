// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('antizer_examples.app');
goog.require('cljs.core');
goog.require('antizer_examples.reagent');
goog.require('antizer_examples.rum');
antizer_examples.app.init_BANG_ = (function antizer_examples$app$init_BANG_(){
var G__15370 = example;
switch (G__15370) {
case "reagent":
return antizer_examples.reagent.init_BANG_();

break;
case "rum":
return antizer_examples.rum.init_BANG_();

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(example)].join('')));

}
});
cljs.core.enable_console_print_BANG_();
antizer_examples.app.init_BANG_();
