// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rum.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (m){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
}),keys);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mixins], 0)));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__9808__auto__ = [];
var len__9801__auto___16401 = arguments.length;
var i__9802__auto___16402 = (0);
while(true){
if((i__9802__auto___16402 < len__9801__auto___16401)){
args__9808__auto__.push((arguments[i__9802__auto___16402]));

var G__16403 = (i__9802__auto___16402 + (1));
i__9802__auto___16402 = G__16403;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((2) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9809__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

rum.util.call_all.cljs$lang$applyTo = (function (seq16398){
var G__16399 = cljs.core.first(seq16398);
var seq16398__$1 = cljs.core.next(seq16398);
var G__16400 = cljs.core.first(seq16398__$1);
var seq16398__$2 = cljs.core.next(seq16398__$1);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(G__16399,G__16400,seq16398__$2);
});

