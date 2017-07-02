// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__12318__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12319__i = 0, G__12319__a = new Array(arguments.length -  0);
while (G__12319__i < G__12319__a.length) {G__12319__a[G__12319__i] = arguments[G__12319__i + 0]; ++G__12319__i;}
  args = new cljs.core.IndexedSeq(G__12319__a,0);
} 
return G__12318__delegate.call(this,args);};
G__12318.cljs$lang$maxFixedArity = 0;
G__12318.cljs$lang$applyTo = (function (arglist__12320){
var args = cljs.core.seq(arglist__12320);
return G__12318__delegate(args);
});
G__12318.cljs$core$IFn$_invoke$arity$variadic = G__12318__delegate;
return G__12318;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12321__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12322__i = 0, G__12322__a = new Array(arguments.length -  0);
while (G__12322__i < G__12322__a.length) {G__12322__a[G__12322__i] = arguments[G__12322__i + 0]; ++G__12322__i;}
  args = new cljs.core.IndexedSeq(G__12322__a,0);
} 
return G__12321__delegate.call(this,args);};
G__12321.cljs$lang$maxFixedArity = 0;
G__12321.cljs$lang$applyTo = (function (arglist__12323){
var args = cljs.core.seq(arglist__12323);
return G__12321__delegate(args);
});
G__12321.cljs$core$IFn$_invoke$arity$variadic = G__12321__delegate;
return G__12321;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
