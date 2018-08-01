// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
var G__16799 = comp.state;
var G__16800 = ":rum/state";
return goog.object.get(G__16799,G__16800);
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__16801 = cljs.core.seq(props);
var chunk__16803 = null;
var count__16804 = (0);
var i__16805 = (0);
while(true){
if((i__16805 < count__16804)){
var vec__16807 = chunk__16803.cljs$core$IIndexed$_nth$arity$2(null,i__16805);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16807,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16807,(1),null);
if(!((v == null))){
var G__16810_16819 = obj;
var G__16811_16820 = cljs.core.name(k);
var G__16812_16821 = cljs.core.clj__GT_js(v);
goog.object.set(G__16810_16819,G__16811_16820,G__16812_16821);

var G__16822 = seq__16801;
var G__16823 = chunk__16803;
var G__16824 = count__16804;
var G__16825 = (i__16805 + (1));
seq__16801 = G__16822;
chunk__16803 = G__16823;
count__16804 = G__16824;
i__16805 = G__16825;
continue;
} else {
var G__16826 = seq__16801;
var G__16827 = chunk__16803;
var G__16828 = count__16804;
var G__16829 = (i__16805 + (1));
seq__16801 = G__16826;
chunk__16803 = G__16827;
count__16804 = G__16828;
i__16805 = G__16829;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__16801);
if(temp__5457__auto__){
var seq__16801__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16801__$1)){
var c__9453__auto__ = cljs.core.chunk_first(seq__16801__$1);
var G__16830 = cljs.core.chunk_rest(seq__16801__$1);
var G__16831 = c__9453__auto__;
var G__16832 = cljs.core.count(c__9453__auto__);
var G__16833 = (0);
seq__16801 = G__16830;
chunk__16803 = G__16831;
count__16804 = G__16832;
i__16805 = G__16833;
continue;
} else {
var vec__16813 = cljs.core.first(seq__16801__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16813,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16813,(1),null);
if(!((v == null))){
var G__16816_16834 = obj;
var G__16817_16835 = cljs.core.name(k);
var G__16818_16836 = cljs.core.clj__GT_js(v);
goog.object.set(G__16816_16834,G__16817_16835,G__16818_16836);

var G__16837 = cljs.core.next(seq__16801__$1);
var G__16838 = null;
var G__16839 = (0);
var G__16840 = (0);
seq__16801 = G__16837;
chunk__16803 = G__16838;
count__16804 = G__16839;
i__16805 = G__16840;
continue;
} else {
var G__16841 = cljs.core.next(seq__16801__$1);
var G__16842 = null;
var G__16843 = (0);
var G__16844 = (0);
seq__16801 = G__16841;
chunk__16803 = G__16842;
count__16804 = G__16843;
i__16805 = G__16844;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect(cljs.core.cst$kw$init,mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_mount,cljs.core.cst$kw$before_DASH_render], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(cljs.core.cst$kw$wrap_DASH_render,mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,render__$1,wrap_render){
return (function (p1__16846_SHARP_,p2__16845_SHARP_){
return (p2__16845_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__16845_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__16846_SHARP_) : p2__16845_SHARP_.call(null,p1__16846_SHARP_));
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_mount,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_remount = rum.util.collect(cljs.core.cst$kw$did_DASH_remount,mixins);
var should_update = rum.util.collect(cljs.core.cst$kw$should_DASH_update,mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_update,cljs.core.cst$kw$before_DASH_render], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_update,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_catch = rum.util.collect(cljs.core.cst$kw$did_DASH_catch,mixins);
var will_unmount = rum.util.collect(cljs.core.cst$kw$will_DASH_unmount,mixins);
var child_context = rum.util.collect(cljs.core.cst$kw$child_DASH_context,mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$class_DASH_properties,mixins));
var static_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$static_DASH_properties,mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
var G__16851_16888 = this$;
var G__16852_16889 = "state";
var G__16853_16890 = ({":rum/state": cljs.core.volatile_BANG_(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(goog.object.get(props,":rum/initial-state"),cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$),init,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))});
goog.object.set(G__16851_16888,G__16852_16889,G__16853_16890);

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_(will_mount)){
} else {
var G__16854_16891 = prototype;
var G__16855_16892 = "componentWillMount";
var G__16856_16893 = ((function (G__16854_16891,G__16855_16892,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
});})(G__16854_16891,G__16855_16892,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__16854_16891,G__16855_16892,G__16856_16893);
}

if(cljs.core.empty_QMARK_(did_mount)){
} else {
var G__16857_16894 = prototype;
var G__16858_16895 = "componentDidMount";
var G__16859_16896 = ((function (G__16857_16894,G__16858_16895,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
});})(G__16857_16894,G__16858_16895,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__16857_16894,G__16858_16895,G__16859_16896);
}

var G__16860_16897 = prototype;
var G__16861_16898 = "componentWillReceiveProps";
var G__16862_16899 = ((function (G__16860_16897,G__16861_16898,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state,goog.object.get(next_props,":rum/initial-state")], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,state,this$,G__16860_16897,G__16861_16898,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__16848_SHARP_,p2__16847_SHARP_){
return (p2__16847_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__16847_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__16848_SHARP_) : p2__16847_SHARP_.call(null,old_state,p1__16848_SHARP_));
});})(old_state,state,this$,G__16860_16897,G__16861_16898,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
});})(G__16860_16897,G__16861_16898,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__16860_16897,G__16861_16898,G__16862_16899);

if(cljs.core.empty_QMARK_(should_update)){
} else {
var G__16863_16900 = prototype;
var G__16864_16901 = "shouldComponentUpdate";
var G__16865_16902 = ((function (G__16863_16900,G__16864_16901,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__8522__auto__ = cljs.core.some(((function (old_state,new_state,this$,G__16863_16900,G__16864_16901,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__16849_SHARP_){
return (p1__16849_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__16849_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__16849_SHARP_.call(null,old_state,new_state));
});})(old_state,new_state,this$,G__16863_16900,G__16864_16901,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__8522__auto__)){
return or__8522__auto__;
} else {
return false;
}
});})(G__16863_16900,G__16864_16901,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__16863_16900,G__16864_16901,G__16865_16902);
}

if(cljs.core.empty_QMARK_(will_update)){
} else {
var G__16866_16903 = prototype;
var G__16867_16904 = "componentWillUpdate";
var G__16868_16905 = ((function (G__16866_16903,G__16867_16904,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
});})(G__16866_16903,G__16867_16904,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__16866_16903,G__16867_16904,G__16868_16905);
}

var G__16869_16906 = prototype;
var G__16870_16907 = "render";
var G__16871_16908 = ((function (G__16869_16906,G__16870_16907,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__16872 = (function (){var G__16875 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__16875) : wrapped_render.call(null,G__16875));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16872,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16872,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(G__16869_16906,G__16870_16907,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__16869_16906,G__16870_16907,G__16871_16908);

if(cljs.core.empty_QMARK_(did_update)){
} else {
var G__16876_16909 = prototype;
var G__16877_16910 = "componentDidUpdate";
var G__16878_16911 = ((function (G__16876_16909,G__16877_16910,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
});})(G__16876_16909,G__16877_16910,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__16876_16909,G__16877_16910,G__16878_16911);
}

if(cljs.core.empty_QMARK_(did_catch)){
} else {
var G__16879_16912 = prototype;
var G__16880_16913 = "componentDidCatch";
var G__16881_16914 = ((function (G__16879_16912,G__16880_16913,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(rum.core.state(this$)),did_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_component_DASH_stack,goog.object.get(info,"componentStack")], null)], 0)));

return this$.forceUpdate();
});})(G__16879_16912,G__16880_16913,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__16879_16912,G__16880_16913,G__16881_16914);
}

var G__16882_16915 = prototype;
var G__16883_16916 = "componentWillUnmount";
var G__16884_16917 = ((function (G__16882_16915,G__16883_16916,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_(will_unmount)){
} else {
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(G__16882_16915,G__16883_16916,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__16882_16915,G__16883_16916,G__16884_16917);

if(cljs.core.empty_QMARK_(child_context)){
} else {
var G__16885_16918 = prototype;
var G__16886_16919 = "getChildContext";
var G__16887_16920 = ((function (G__16885_16918,G__16886_16919,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref(rum.core.state(this$));
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,G__16885_16918,G__16886_16919,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__16850_SHARP_){
return (p1__16850_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16850_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__16850_SHARP_.call(null,state));
});})(state,this$,G__16885_16918,G__16886_16919,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(G__16885_16918,G__16886_16919,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__16885_16918,G__16886_16919,G__16887_16920);
}

rum.core.extend_BANG_(prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_(ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(cljs.core.cst$kw$key_DASH_fn,mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__16921__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__16921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16922__i = 0, G__16922__a = new Array(arguments.length -  0);
while (G__16922__i < G__16922__a.length) {G__16922__a[G__16922__i] = arguments[G__16922__i + 0]; ++G__16922__i;}
  args = new cljs.core.IndexedSeq(G__16922__a,0,null);
} 
return G__16921__delegate.call(this,args);};
G__16921.cljs$lang$maxFixedArity = 0;
G__16921.cljs$lang$applyTo = (function (arglist__16923){
var args = cljs.core.seq(arglist__16923);
return G__16921__delegate(args);
});
G__16921.cljs$core$IFn$_invoke$arity$variadic = G__16921__delegate;
return G__16921;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__16924__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null)});
return React.createElement(class$,props);
};
var G__16924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16925__i = 0, G__16925__a = new Array(arguments.length -  0);
while (G__16925__i < G__16925__a.length) {G__16925__a[G__16925__i] = arguments[G__16925__i + 0]; ++G__16925__i;}
  args = new cljs.core.IndexedSeq(G__16925__a,0,null);
} 
return G__16924__delegate.call(this,args);};
G__16924.cljs$lang$maxFixedArity = 0;
G__16924.cljs$lang$applyTo = (function (arglist__16926){
var args = cljs.core.seq(arglist__16926);
return G__16924__delegate(args);
});
G__16924.cljs$core$IFn$_invoke$arity$variadic = G__16924__delegate;
return G__16924;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__16929__delegate = function (args){
var G__16927 = class$;
var G__16928 = ({":rum/args": args});
return React.createElement(G__16927,G__16928);
};
var G__16929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16930__i = 0, G__16930__a = new Array(arguments.length -  0);
while (G__16930__i < G__16930__a.length) {G__16930__a[G__16930__i] = arguments[G__16930__i + 0]; ++G__16930__i;}
  args = new cljs.core.IndexedSeq(G__16930__a,0,null);
} 
return G__16929__delegate.call(this,args);};
G__16929.cljs$lang$maxFixedArity = 0;
G__16929.cljs$lang$applyTo = (function (arglist__16931){
var args = cljs.core.seq(arglist__16931);
return G__16929__delegate(args);
});
G__16929.cljs$core$IFn$_invoke$arity$variadic = G__16929__delegate;
return G__16929;
})()
;})(class$,_))
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__8522__auto__ = (function (){var and__8510__auto__ = typeof window !== 'undefined';
if(and__8510__auto__){
var or__8522__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__8522__auto__)){
return or__8522__auto__;
} else {
var or__8522__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__8522__auto____$1)){
return or__8522__auto____$1;
} else {
var or__8522__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__8522__auto____$2)){
return or__8522__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__8510__auto__;
}
})();
if(cljs.core.truth_(or__8522__auto__)){
return or__8522__auto__;
} else {
return ((function (or__8522__auto__){
return (function (p1__16932_SHARP_){
return setTimeout(p1__16932_SHARP_,(16));
});
;})(or__8522__auto__))
}
})();
rum.core.batch = (function (){var or__8522__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__8522__auto__)){
return or__8522__auto__;
} else {
var or__8522__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__8522__auto____$1)){
return or__8522__auto____$1;
} else {
return ((function (or__8522__auto____$1,or__8522__auto__){
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
;})(or__8522__auto____$1,or__8522__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__16933 = cljs.core.seq(queue);
var chunk__16935 = null;
var count__16936 = (0);
var i__16937 = (0);
while(true){
if((i__16937 < count__16936)){
var comp = chunk__16935.cljs$core$IIndexed$_nth$arity$2(null,i__16937);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__16939 = seq__16933;
var G__16940 = chunk__16935;
var G__16941 = count__16936;
var G__16942 = (i__16937 + (1));
seq__16933 = G__16939;
chunk__16935 = G__16940;
count__16936 = G__16941;
i__16937 = G__16942;
continue;
} else {
var G__16943 = seq__16933;
var G__16944 = chunk__16935;
var G__16945 = count__16936;
var G__16946 = (i__16937 + (1));
seq__16933 = G__16943;
chunk__16935 = G__16944;
count__16936 = G__16945;
i__16937 = G__16946;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__16933);
if(temp__5457__auto__){
var seq__16933__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16933__$1)){
var c__9453__auto__ = cljs.core.chunk_first(seq__16933__$1);
var G__16947 = cljs.core.chunk_rest(seq__16933__$1);
var G__16948 = c__9453__auto__;
var G__16949 = cljs.core.count(c__9453__auto__);
var G__16950 = (0);
seq__16933 = G__16947;
chunk__16935 = G__16948;
count__16936 = G__16949;
i__16937 = G__16950;
continue;
} else {
var comp = cljs.core.first(seq__16933__$1);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__16951 = cljs.core.next(seq__16933__$1);
var G__16952 = null;
var G__16953 = (0);
var G__16954 = (0);
seq__16933 = G__16951;
chunk__16935 = G__16952;
count__16936 = G__16953;
i__16937 = G__16954;
continue;
} else {
var G__16955 = cljs.core.next(seq__16933__$1);
var G__16956 = null;
var G__16957 = (0);
var G__16958 = (0);
seq__16933 = G__16955;
chunk__16935 = G__16956;
count__16936 = G__16957;
i__16937 = G__16958;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref(rum.core.render_queue);
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_(cljs.core.deref(rum.core.render_queue))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return cljs.core._vreset_BANG_(rum.core.render_queue,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Hydrates server rendered DOM tree with provided component.
 */
rum.core.hydrate = (function rum$core$hydrate(component,node){
return ReactDOM.hydrate(component,node);
});
/**
 * Render `component` in a DOM `node` that might be ouside of current DOM hierarchy
 */
rum.core.portal = (function rum$core$portal(component,node){
return ReactDOM.createPortal(component,node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
var G__16959 = component;
var G__16960 = ({"key": key});
var G__16961 = null;
return React.cloneElement(G__16959,G__16960,G__16961);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
var G__16962 = component;
var G__16963 = ({"ref": ref});
var G__16964 = null;
return React.cloneElement(G__16962,G__16963,G__16964);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
var G__16965 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
return ReactDOM.findDOMNode(G__16965);
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
var G__16966 = rum.core.ref(state,cljs.core.name(key));
return ReactDOM.findDOMNode(G__16966);
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__16968 = arguments.length;
switch (G__16968) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,cljs.core.cst$kw$rum_SLASH_local);
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$will_DASH_mount,(function (state){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
var component = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
});})(local_state,component))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init,(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$rum$reactive_SLASH_key,cljs.core.random_uuid());
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_16970 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__16971 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16971,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16971,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__16974_16986 = cljs.core.seq(old_reactions);
var chunk__16975_16987 = null;
var count__16976_16988 = (0);
var i__16977_16989 = (0);
while(true){
if((i__16977_16989 < count__16976_16988)){
var ref_16990 = chunk__16975_16987.cljs$core$IIndexed$_nth$arity$2(null,i__16977_16989);
if(cljs.core.contains_QMARK_(new_reactions,ref_16990)){
} else {
cljs.core.remove_watch(ref_16990,key);
}

var G__16991 = seq__16974_16986;
var G__16992 = chunk__16975_16987;
var G__16993 = count__16976_16988;
var G__16994 = (i__16977_16989 + (1));
seq__16974_16986 = G__16991;
chunk__16975_16987 = G__16992;
count__16976_16988 = G__16993;
i__16977_16989 = G__16994;
continue;
} else {
var temp__5457__auto___16995 = cljs.core.seq(seq__16974_16986);
if(temp__5457__auto___16995){
var seq__16974_16996__$1 = temp__5457__auto___16995;
if(cljs.core.chunked_seq_QMARK_(seq__16974_16996__$1)){
var c__9453__auto___16997 = cljs.core.chunk_first(seq__16974_16996__$1);
var G__16998 = cljs.core.chunk_rest(seq__16974_16996__$1);
var G__16999 = c__9453__auto___16997;
var G__17000 = cljs.core.count(c__9453__auto___16997);
var G__17001 = (0);
seq__16974_16986 = G__16998;
chunk__16975_16987 = G__16999;
count__16976_16988 = G__17000;
i__16977_16989 = G__17001;
continue;
} else {
var ref_17002 = cljs.core.first(seq__16974_16996__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_17002)){
} else {
cljs.core.remove_watch(ref_17002,key);
}

var G__17003 = cljs.core.next(seq__16974_16996__$1);
var G__17004 = null;
var G__17005 = (0);
var G__17006 = (0);
seq__16974_16986 = G__17003;
chunk__16975_16987 = G__17004;
count__16976_16988 = G__17005;
i__16977_16989 = G__17006;
continue;
}
} else {
}
}
break;
}

var seq__16978_17007 = cljs.core.seq(new_reactions);
var chunk__16979_17008 = null;
var count__16980_17009 = (0);
var i__16981_17010 = (0);
while(true){
if((i__16981_17010 < count__16980_17009)){
var ref_17011 = chunk__16979_17008.cljs$core$IIndexed$_nth$arity$2(null,i__16981_17010);
if(cljs.core.contains_QMARK_(old_reactions,ref_17011)){
} else {
cljs.core.add_watch(ref_17011,key,((function (seq__16978_17007,chunk__16979_17008,count__16980_17009,i__16981_17010,ref_17011,comp,old_reactions,vec__16971,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16970){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__16978_17007,chunk__16979_17008,count__16980_17009,i__16981_17010,ref_17011,comp,old_reactions,vec__16971,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16970))
);
}

var G__17012 = seq__16978_17007;
var G__17013 = chunk__16979_17008;
var G__17014 = count__16980_17009;
var G__17015 = (i__16981_17010 + (1));
seq__16978_17007 = G__17012;
chunk__16979_17008 = G__17013;
count__16980_17009 = G__17014;
i__16981_17010 = G__17015;
continue;
} else {
var temp__5457__auto___17016 = cljs.core.seq(seq__16978_17007);
if(temp__5457__auto___17016){
var seq__16978_17017__$1 = temp__5457__auto___17016;
if(cljs.core.chunked_seq_QMARK_(seq__16978_17017__$1)){
var c__9453__auto___17018 = cljs.core.chunk_first(seq__16978_17017__$1);
var G__17019 = cljs.core.chunk_rest(seq__16978_17017__$1);
var G__17020 = c__9453__auto___17018;
var G__17021 = cljs.core.count(c__9453__auto___17018);
var G__17022 = (0);
seq__16978_17007 = G__17019;
chunk__16979_17008 = G__17020;
count__16980_17009 = G__17021;
i__16981_17010 = G__17022;
continue;
} else {
var ref_17023 = cljs.core.first(seq__16978_17017__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_17023)){
} else {
cljs.core.add_watch(ref_17023,key,((function (seq__16978_17007,chunk__16979_17008,count__16980_17009,i__16981_17010,ref_17023,seq__16978_17017__$1,temp__5457__auto___17016,comp,old_reactions,vec__16971,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16970){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__16978_17007,chunk__16979_17008,count__16980_17009,i__16981_17010,ref_17023,seq__16978_17017__$1,temp__5457__auto___17016,comp,old_reactions,vec__16971,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16970))
);
}

var G__17024 = cljs.core.next(seq__16978_17017__$1);
var G__17025 = null;
var G__17026 = (0);
var G__17027 = (0);
seq__16978_17007 = G__17024;
chunk__16979_17008 = G__17025;
count__16980_17009 = G__17026;
i__16981_17010 = G__17027;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum$reactive_SLASH_refs,new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_16970;
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_17028 = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__16982_17029 = cljs.core.seq(cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__16983_17030 = null;
var count__16984_17031 = (0);
var i__16985_17032 = (0);
while(true){
if((i__16985_17032 < count__16984_17031)){
var ref_17033 = chunk__16983_17030.cljs$core$IIndexed$_nth$arity$2(null,i__16985_17032);
cljs.core.remove_watch(ref_17033,key_17028);

var G__17034 = seq__16982_17029;
var G__17035 = chunk__16983_17030;
var G__17036 = count__16984_17031;
var G__17037 = (i__16985_17032 + (1));
seq__16982_17029 = G__17034;
chunk__16983_17030 = G__17035;
count__16984_17031 = G__17036;
i__16985_17032 = G__17037;
continue;
} else {
var temp__5457__auto___17038 = cljs.core.seq(seq__16982_17029);
if(temp__5457__auto___17038){
var seq__16982_17039__$1 = temp__5457__auto___17038;
if(cljs.core.chunked_seq_QMARK_(seq__16982_17039__$1)){
var c__9453__auto___17040 = cljs.core.chunk_first(seq__16982_17039__$1);
var G__17041 = cljs.core.chunk_rest(seq__16982_17039__$1);
var G__17042 = c__9453__auto___17040;
var G__17043 = cljs.core.count(c__9453__auto___17040);
var G__17044 = (0);
seq__16982_17029 = G__17041;
chunk__16983_17030 = G__17042;
count__16984_17031 = G__17043;
i__16985_17032 = G__17044;
continue;
} else {
var ref_17045 = cljs.core.first(seq__16982_17039__$1);
cljs.core.remove_watch(ref_17045,key_17028);

var G__17046 = cljs.core.next(seq__16982_17039__$1);
var G__17047 = null;
var G__17048 = (0);
var G__17049 = (0);
seq__16982_17029 = G__17046;
chunk__16983_17030 = G__17047;
count__16984_17031 = G__17048;
i__16985_17032 = G__17049;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$rum$reactive_SLASH_refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rum$reactive_SLASH_key], 0));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref(ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__9808__auto__ = [];
var len__9801__auto___17056 = arguments.length;
var i__9802__auto___17057 = (0);
while(true){
if((i__9802__auto___17057 < len__9801__auto___17056)){
args__9808__auto__.push((arguments[i__9802__auto___17057]));

var G__17058 = (i__9802__auto___17057 + (1));
i__9802__auto___17057 = G__17058;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((2) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9809__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__17053){
var map__17054 = p__17053;
var map__17054__$1 = ((((!((map__17054 == null)))?((((map__17054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17054):map__17054);
var options = map__17054__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq17050){
var G__17051 = cljs.core.first(seq17050);
var seq17050__$1 = cljs.core.next(seq17050);
var G__17052 = cljs.core.first(seq17050__$1);
var seq17050__$2 = cljs.core.next(seq17050__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__17051,G__17052,seq17050__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__9808__auto__ = [];
var len__9801__auto___17062 = arguments.length;
var i__9802__auto___17063 = (0);
while(true){
if((i__9802__auto___17063 < len__9801__auto___17062)){
args__9808__auto__.push((arguments[i__9802__auto___17063]));

var G__17064 = (i__9802__auto___17063 + (1));
i__9802__auto___17063 = G__17064;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((2) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9809__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq17059){
var G__17060 = cljs.core.first(seq17059);
var seq17059__$1 = cljs.core.next(seq17059);
var G__17061 = cljs.core.first(seq17059__$1);
var seq17059__$2 = cljs.core.next(seq17059__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__17060,G__17061,seq17059__$2);
});

