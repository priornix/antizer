// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('antizer_examples.app');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('antizer_examples.reagent');
goog.require('antizer_examples.rum');
antizer_examples.app.init_BANG_ = (function antizer_examples$app$init_BANG_(){
var G__18354 = example;
switch (G__18354) {
case "reagent":
return antizer_examples.reagent.init_BANG_();

break;
case "rum":
return antizer_examples.rum.init_BANG_();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18354)].join('')));

}
});
cljs.core.enable_console_print_BANG_();
antizer_examples.app.init_BANG_();
