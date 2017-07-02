// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args12542 = [];
var len__7484__auto___12573 = arguments.length;
var i__7485__auto___12574 = (0);
while(true){
if((i__7485__auto___12574 < len__7484__auto___12573)){
args12542.push((arguments[i__7485__auto___12574]));

var G__12575 = (i__7485__auto___12574 + (1));
i__7485__auto___12574 = G__12575;
continue;
} else {
}
break;
}

var G__12544 = args12542.length;
switch (G__12544) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12542.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__12545 = opts;
var map__12545__$1 = ((((!((map__12545 == null)))?((((map__12545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12545):map__12545);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12545__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12545__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__12547 = cljs.core.count(refs);
switch (G__12547) {
case (1):
var vec__12548 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12548,(0),null);
return ((function (vec__12548,a,G__12547,map__12545,map__12545__$1,ref,check_equals_QMARK_){
return (function (){
var G__12551 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12551) : f.call(null,G__12551));
});
;})(vec__12548,a,G__12547,map__12545,map__12545__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__12552 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12552,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12552,(1),null);
return ((function (vec__12552,a,b,G__12547,map__12545,map__12545__$1,ref,check_equals_QMARK_){
return (function (){
var G__12555 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__12556 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12555,G__12556) : f.call(null,G__12555,G__12556));
});
;})(vec__12552,a,b,G__12547,map__12545,map__12545__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__12557 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12557,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12557,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12557,(2),null);
return ((function (vec__12557,a,b,c,G__12547,map__12545,map__12545__$1,ref,check_equals_QMARK_){
return (function (){
var G__12560 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__12561 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
var G__12562 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12560,G__12561,G__12562) : f.call(null,G__12560,G__12561,G__12562));
});
;})(vec__12557,a,b,c,G__12547,map__12545,map__12545__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__12547,map__12545,map__12545__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});
;})(G__12547,map__12545,map__12545__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__12563 = ref;
var G__12564_12578 = G__12563;
var G__12565_12579 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12564_12578,G__12565_12579) : cljs.core.reset_BANG_.call(null,G__12564_12578,G__12565_12579));

return G__12563;
})():(function (){var G__12566 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12566) : cljs.core.atom.call(null,G__12566));
})());
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__12545,map__12545__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sink) : cljs.core.deref.call(null,sink)),new_val)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(sink,new_val) : cljs.core.reset_BANG_.call(null,sink,new_val));
} else {
return null;
}
});})(map__12545,map__12545__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__12545,map__12545__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var G__12567 = sink;
var G__12568 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12567,G__12568) : cljs.core.reset_BANG_.call(null,G__12567,G__12568));
});})(map__12545,map__12545__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__12569_12580 = cljs.core.seq(refs);
var chunk__12570_12581 = null;
var count__12571_12582 = (0);
var i__12572_12583 = (0);
while(true){
if((i__12572_12583 < count__12571_12582)){
var ref_12584__$1 = chunk__12570_12581.cljs$core$IIndexed$_nth$arity$2(null,i__12572_12583);
cljs.core.add_watch(ref_12584__$1,key,watch);

var G__12585 = seq__12569_12580;
var G__12586 = chunk__12570_12581;
var G__12587 = count__12571_12582;
var G__12588 = (i__12572_12583 + (1));
seq__12569_12580 = G__12585;
chunk__12570_12581 = G__12586;
count__12571_12582 = G__12587;
i__12572_12583 = G__12588;
continue;
} else {
var temp__4657__auto___12589 = cljs.core.seq(seq__12569_12580);
if(temp__4657__auto___12589){
var seq__12569_12590__$1 = temp__4657__auto___12589;
if(cljs.core.chunked_seq_QMARK_(seq__12569_12590__$1)){
var c__7220__auto___12591 = cljs.core.chunk_first(seq__12569_12590__$1);
var G__12592 = cljs.core.chunk_rest(seq__12569_12590__$1);
var G__12593 = c__7220__auto___12591;
var G__12594 = cljs.core.count(c__7220__auto___12591);
var G__12595 = (0);
seq__12569_12580 = G__12592;
chunk__12570_12581 = G__12593;
count__12571_12582 = G__12594;
i__12572_12583 = G__12595;
continue;
} else {
var ref_12596__$1 = cljs.core.first(seq__12569_12590__$1);
cljs.core.add_watch(ref_12596__$1,key,watch);

var G__12597 = cljs.core.next(seq__12569_12590__$1);
var G__12598 = null;
var G__12599 = (0);
var G__12600 = (0);
seq__12569_12580 = G__12597;
chunk__12570_12581 = G__12598;
count__12571_12582 = G__12599;
i__12572_12583 = G__12600;
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

