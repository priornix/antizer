// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('antizer.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return (function (p1__14362_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.upper_case(cljs.core.first(p1__14362_SHARP_)),cljs.core.rest(p1__14362_SHARP_));
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
var args__9808__auto__ = [];
var len__9801__auto___14372 = arguments.length;
var i__9802__auto___14373 = (0);
while(true){
if((i__9802__auto___14373 < len__9801__auto___14372)){
args__9808__auto__.push((arguments[i__9802__auto___14373]));

var G__14374 = (i__9802__auto___14373 + (1));
i__9802__auto___14373 = G__14374;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.core.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.core.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__14365){
var map__14366 = p__14365;
var map__14366__$1 = ((((!((map__14366 == null)))?((((map__14366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14366):map__14366);
var html_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14366__$1,cljs.core.cst$kw$html_DASH_props);
var convert_to_camel = ((function (map__14366,map__14366__$1,html_props){
return (function (p__14368){
var vec__14369 = p__14368;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14369,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14369,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.core.kebab_case__GT_camel_case(cljs.core.name(key)),value], null);
});})(map__14366,map__14366__$1,html_props))
;
return clojure.walk.postwalk(((function (convert_to_camel,map__14366,map__14366__$1,html_props){
return (function (x){
if(cljs.core.map_QMARK_(x)){
var new_map = (cljs.core.truth_(html_props)?clojure.set.rename_keys(x,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$className,cljs.core.cst$kw$for,cljs.core.cst$kw$htmlFor], null)):x);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(convert_to_camel,new_map));
} else {
return x;
}
});})(convert_to_camel,map__14366,map__14366__$1,html_props))
,data);
});

antizer.core.map_keys__GT_camel_case.cljs$lang$maxFixedArity = (1);

antizer.core.map_keys__GT_camel_case.cljs$lang$applyTo = (function (seq14363){
var G__14364 = cljs.core.first(seq14363);
var seq14363__$1 = cljs.core.next(seq14363);
return antizer.core.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic(G__14364,seq14363__$1);
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
var args__9808__auto__ = [];
var len__9801__auto___14377 = arguments.length;
var i__9802__auto___14378 = (0);
while(true){
if((i__9802__auto___14378 < len__9801__auto___14377)){
args__9808__auto__.push((arguments[i__9802__auto___14378]));

var G__14379 = (i__9802__auto___14378 + (1));
i__9802__auto___14378 = G__14379;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.core.call_js_func.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.core.call_js_func.cljs$core$IFn$_invoke$arity$variadic = (function (func,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(antizer.core.map_keys__GT_camel_case,args)));
});

antizer.core.call_js_func.cljs$lang$maxFixedArity = (1);

antizer.core.call_js_func.cljs$lang$applyTo = (function (seq14375){
var G__14376 = cljs.core.first(seq14375);
var seq14375__$1 = cljs.core.next(seq14375);
return antizer.core.call_js_func.cljs$core$IFn$_invoke$arity$variadic(G__14376,seq14375__$1);
});

/**
 * Calls the ant module function
 */
antizer.core.call_func = (function antizer$core$call_func(var_args){
var args__9808__auto__ = [];
var len__9801__auto___14382 = arguments.length;
var i__9802__auto___14383 = (0);
while(true){
if((i__9802__auto___14383 < len__9801__auto___14382)){
args__9808__auto__.push((arguments[i__9802__auto___14383]));

var G__14384 = (i__9802__auto___14383 + (1));
i__9802__auto___14383 = G__14384;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.core.call_func.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.core.call_func.cljs$core$IFn$_invoke$arity$variadic = (function (module_name,args){
var path = antizer.core.get_module_path(module_name);
var func = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antizer.core.antd_module,path);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,func,args);
});

antizer.core.call_func.cljs$lang$maxFixedArity = (1);

antizer.core.call_func.cljs$lang$applyTo = (function (seq14380){
var G__14381 = cljs.core.first(seq14380);
var seq14380__$1 = cljs.core.next(seq14380);
return antizer.core.call_func.cljs$core$IFn$_invoke$arity$variadic(G__14381,seq14380__$1);
});

