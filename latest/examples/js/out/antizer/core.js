// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('antizer.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('goog.object');
antizer.core.antd_module = antd;
/**
 * Converts from kebab case to camel case, eg: on-click to onClick
 */
antizer.core.kebab_case__GT_camel_case = (function antizer$core$kebab_case__GT_camel_case(input){
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(input,/-/);
var capitalize = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (words){
return (function (p1__12509_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.upper_case(cljs.core.first(p1__12509_SHARP_)),cljs.core.rest(p1__12509_SHARP_));
});})(words))
,cljs.core.rest(words));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,cljs.core.first(words),capitalize);
});
/**
 * Stringifys all the keys of a cljs hashmap and converts them
 * from kebab case to camel case. If :html-props option is specified, 
 * then rename the html properties values to their dom equivalent
 * before conversion
 */
antizer.core.map_keys__GT_camel_case = (function antizer$core$map_keys__GT_camel_case(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12519 = arguments.length;
var i__7485__auto___12520 = (0);
while(true){
if((i__7485__auto___12520 < len__7484__auto___12519)){
args__7491__auto__.push((arguments[i__7485__auto___12520]));

var G__12521 = (i__7485__auto___12520 + (1));
i__7485__auto___12520 = G__12521;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.core.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.core.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__12512){
var map__12513 = p__12512;
var map__12513__$1 = ((((!((map__12513 == null)))?((((map__12513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12513):map__12513);
var html_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12513__$1,cljs.core.cst$kw$html_DASH_props);
var convert_to_camel = ((function (map__12513,map__12513__$1,html_props){
return (function (p__12515){
var vec__12516 = p__12515;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12516,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12516,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.core.kebab_case__GT_camel_case(cljs.core.name(key)),value], null);
});})(map__12513,map__12513__$1,html_props))
;
return clojure.walk.postwalk(((function (convert_to_camel,map__12513,map__12513__$1,html_props){
return (function (x){
if(cljs.core.map_QMARK_(x)){
var new_map = (cljs.core.truth_(html_props)?clojure.set.rename_keys(x,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$className,cljs.core.cst$kw$for,cljs.core.cst$kw$htmlFor], null)):x);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(convert_to_camel,new_map));
} else {
return x;
}
});})(convert_to_camel,map__12513,map__12513__$1,html_props))
,data);
});

antizer.core.map_keys__GT_camel_case.cljs$lang$maxFixedArity = (1);

antizer.core.map_keys__GT_camel_case.cljs$lang$applyTo = (function (seq12510){
var G__12511 = cljs.core.first(seq12510);
var seq12510__$1 = cljs.core.next(seq12510);
return antizer.core.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic(G__12511,seq12510__$1);
});

antizer.core.get_module_path = (function antizer$core$get_module_path(module_name){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(module_name,/\./);
});
/**
 * Retreives the value of the module's property
 */
antizer.core.get_prop = (function antizer$core$get_prop(module_name,prop){
if(cljs.core.truth_(prop)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antizer.core.antd_module,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(antizer.core.get_module_path(module_name),cljs.core.name(prop)));
} else {
return null;
}
});
/**
 * Calls a javascript function, converting the keys for any arguments 
 * that are hashmaps from kebab case to camel case
 * 
 * * func - the native javascript to be called
 */
antizer.core.call_js_func = (function antizer$core$call_js_func(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12524 = arguments.length;
var i__7485__auto___12525 = (0);
while(true){
if((i__7485__auto___12525 < len__7484__auto___12524)){
args__7491__auto__.push((arguments[i__7485__auto___12525]));

var G__12526 = (i__7485__auto___12525 + (1));
i__7485__auto___12525 = G__12526;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.core.call_js_func.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.core.call_js_func.cljs$core$IFn$_invoke$arity$variadic = (function (func,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(antizer.core.map_keys__GT_camel_case,args)));
});

antizer.core.call_js_func.cljs$lang$maxFixedArity = (1);

antizer.core.call_js_func.cljs$lang$applyTo = (function (seq12522){
var G__12523 = cljs.core.first(seq12522);
var seq12522__$1 = cljs.core.next(seq12522);
return antizer.core.call_js_func.cljs$core$IFn$_invoke$arity$variadic(G__12523,seq12522__$1);
});

/**
 * Calls the ant module function
 */
antizer.core.call_func = (function antizer$core$call_func(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12529 = arguments.length;
var i__7485__auto___12530 = (0);
while(true){
if((i__7485__auto___12530 < len__7484__auto___12529)){
args__7491__auto__.push((arguments[i__7485__auto___12530]));

var G__12531 = (i__7485__auto___12530 + (1));
i__7485__auto___12530 = G__12531;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.core.call_func.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.core.call_func.cljs$core$IFn$_invoke$arity$variadic = (function (module_name,args){
var path = antizer.core.get_module_path(module_name);
var func = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antizer.core.antd_module,path);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,func,args);
});

antizer.core.call_func.cljs$lang$maxFixedArity = (1);

antizer.core.call_func.cljs$lang$applyTo = (function (seq12527){
var G__12528 = cljs.core.first(seq12527);
var seq12527__$1 = cljs.core.next(seq12527);
return antizer.core.call_func.cljs$core$IFn$_invoke$arity$variadic(G__12528,seq12527__$1);
});

