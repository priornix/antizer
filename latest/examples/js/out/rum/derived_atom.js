// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__14396 = arguments.length;
switch (G__14396) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__14397 = opts;
var map__14397__$1 = ((((!((map__14397 == null)))?((((map__14397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14397):map__14397);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14397__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14397__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__14399 = cljs.core.count(refs);
switch (G__14399) {
case (1):
var vec__14400 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14400,(0),null);
return ((function (vec__14400,a,G__14399,map__14397,map__14397__$1,ref,check_equals_QMARK_){
return (function (){
var G__14403 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14403) : f.call(null,G__14403));
});
;})(vec__14400,a,G__14399,map__14397,map__14397__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__14404 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14404,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14404,(1),null);
return ((function (vec__14404,a,b,G__14399,map__14397,map__14397__$1,ref,check_equals_QMARK_){
return (function (){
var G__14407 = cljs.core.deref(a);
var G__14408 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14407,G__14408) : f.call(null,G__14407,G__14408));
});
;})(vec__14404,a,b,G__14399,map__14397,map__14397__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__14409 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14409,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14409,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14409,(2),null);
return ((function (vec__14409,a,b,c,G__14399,map__14397,map__14397__$1,ref,check_equals_QMARK_){
return (function (){
var G__14412 = cljs.core.deref(a);
var G__14413 = cljs.core.deref(b);
var G__14414 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14412,G__14413,G__14414) : f.call(null,G__14412,G__14413,G__14414));
});
;})(vec__14409,a,b,c,G__14399,map__14397,map__14397__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__14399,map__14397,map__14397__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});
;})(G__14399,map__14397,map__14397__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__14415 = ref;
cljs.core.reset_BANG_(G__14415,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__14415;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__14397,map__14397__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
});})(map__14397,map__14397__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__14397,map__14397__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
});})(map__14397,map__14397__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__14416_14422 = cljs.core.seq(refs);
var chunk__14417_14423 = null;
var count__14418_14424 = (0);
var i__14419_14425 = (0);
while(true){
if((i__14419_14425 < count__14418_14424)){
var ref_14426__$1 = chunk__14417_14423.cljs$core$IIndexed$_nth$arity$2(null,i__14419_14425);
cljs.core.add_watch(ref_14426__$1,key,watch);

var G__14427 = seq__14416_14422;
var G__14428 = chunk__14417_14423;
var G__14429 = count__14418_14424;
var G__14430 = (i__14419_14425 + (1));
seq__14416_14422 = G__14427;
chunk__14417_14423 = G__14428;
count__14418_14424 = G__14429;
i__14419_14425 = G__14430;
continue;
} else {
var temp__5457__auto___14431 = cljs.core.seq(seq__14416_14422);
if(temp__5457__auto___14431){
var seq__14416_14432__$1 = temp__5457__auto___14431;
if(cljs.core.chunked_seq_QMARK_(seq__14416_14432__$1)){
var c__9453__auto___14433 = cljs.core.chunk_first(seq__14416_14432__$1);
var G__14434 = cljs.core.chunk_rest(seq__14416_14432__$1);
var G__14435 = c__9453__auto___14433;
var G__14436 = cljs.core.count(c__9453__auto___14433);
var G__14437 = (0);
seq__14416_14422 = G__14434;
chunk__14417_14423 = G__14435;
count__14418_14424 = G__14436;
i__14419_14425 = G__14437;
continue;
} else {
var ref_14438__$1 = cljs.core.first(seq__14416_14432__$1);
cljs.core.add_watch(ref_14438__$1,key,watch);

var G__14439 = cljs.core.next(seq__14416_14432__$1);
var G__14440 = null;
var G__14441 = (0);
var G__14442 = (0);
seq__14416_14422 = G__14439;
chunk__14417_14423 = G__14440;
count__14418_14424 = G__14441;
i__14419_14425 = G__14442;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;

