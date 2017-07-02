// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect(cljs.core.cst$kw$init,mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_mount,cljs.core.cst$kw$before_DASH_render], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(cljs.core.cst$kw$wrap_DASH_render,mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,render__$1,wrap_render){
return (function (p1__13895_SHARP_,p2__13894_SHARP_){
return (p2__13894_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__13894_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__13895_SHARP_) : p2__13894_SHARP_.call(null,p1__13895_SHARP_));
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_mount,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_remount = rum.util.collect(cljs.core.cst$kw$did_DASH_remount,mixins);
var should_update = rum.util.collect(cljs.core.cst$kw$should_DASH_update,mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_update,cljs.core.cst$kw$before_DASH_render], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_update,cljs.core.cst$kw$after_DASH_render], null),mixins);
var will_unmount = rum.util.collect(cljs.core.cst$kw$will_DASH_unmount,mixins);
var child_context = rum.util.collect(cljs.core.cst$kw$child_DASH_context,mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$class_DASH_properties,mixins));
var G__13909 = cljs.core.clj__GT_js(rum.util.filter_vals(cljs.core.some_QMARK_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$displayName,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$getChildContext,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$componentWillMount],[((cljs.core.empty_QMARK_(did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_(will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = (function (){var G__13910 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13910) : cljs.core.deref.call(null,G__13910));
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([old_state,(next_props[":rum/initial-state"])], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__13897_SHARP_,p2__13896_SHARP_){
return (p2__13896_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__13896_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__13897_SHARP_) : p2__13896_SHARP_.call(null,old_state,p1__13897_SHARP_));
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = (function (){var G__13911 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13911) : cljs.core.deref.call(null,G__13911));
})();
var new_state = (function (){var G__13912 = (next_state[":rum/state"]);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13912) : cljs.core.deref.call(null,G__13912));
})();
var or__6409__auto__ = cljs.core.some(((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__13898_SHARP_){
return (p1__13898_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__13898_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__13898_SHARP_.call(null,old_state,new_state));
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__13913 = (function (){var G__13916 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__13916) : wrapped_render.call(null,G__13916));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13913,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13913,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = (function (){var G__13917 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13917) : cljs.core.deref.call(null,G__13917));
})();
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__13899_SHARP_){
return (p1__13899_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13899_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__13899_SHARP_.call(null,state));
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_(will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((props[":rum/initial-state"]),cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$),init,cljs.core.array_seq([props], 0));
return ({":rum/state": cljs.core.volatile_BANG_(state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_(will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props], 0))));
return React.createClass(G__13909);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(cljs.core.cst$kw$key_DASH_fn,mixins));
var ctor = ((cljs.core.some_QMARK_(key_fn))?((function (class$,key_fn){
return (function() { 
var G__13918__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__13918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13919__i = 0, G__13919__a = new Array(arguments.length -  0);
while (G__13919__i < G__13919__a.length) {G__13919__a[G__13919__i] = arguments[G__13919__i + 0]; ++G__13919__i;}
  args = new cljs.core.IndexedSeq(G__13919__a,0);
} 
return G__13918__delegate.call(this,args);};
G__13918.cljs$lang$maxFixedArity = 0;
G__13918.cljs$lang$applyTo = (function (arglist__13920){
var args = cljs.core.seq(arglist__13920);
return G__13918__delegate(args);
});
G__13918.cljs$core$IFn$_invoke$arity$variadic = G__13918__delegate;
return G__13918;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__13921__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null)});
return React.createElement(class$,props);
};
var G__13921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13922__i = 0, G__13922__a = new Array(arguments.length -  0);
while (G__13922__i < G__13922__a.length) {G__13922__a[G__13922__i] = arguments[G__13922__i + 0]; ++G__13922__i;}
  args = new cljs.core.IndexedSeq(G__13922__a,0);
} 
return G__13921__delegate.call(this,args);};
G__13921.cljs$lang$maxFixedArity = 0;
G__13921.cljs$lang$applyTo = (function (arglist__13923){
var args = cljs.core.seq(arglist__13923);
return G__13921__delegate(args);
});
G__13921.cljs$core$IFn$_invoke$arity$variadic = G__13921__delegate;
return G__13921;
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
var G__13928__delegate = function (args){
var G__13926 = class$;
var G__13927 = ({":rum/args": args});
return React.createElement(G__13926,G__13927);
};
var G__13928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13929__i = 0, G__13929__a = new Array(arguments.length -  0);
while (G__13929__i < G__13929__a.length) {G__13929__a[G__13929__i] = arguments[G__13929__i + 0]; ++G__13929__i;}
  args = new cljs.core.IndexedSeq(G__13929__a,0);
} 
return G__13928__delegate.call(this,args);};
G__13928.cljs$lang$maxFixedArity = 0;
G__13928.cljs$lang$applyTo = (function (arglist__13930){
var args = cljs.core.seq(arglist__13930);
return G__13928__delegate(args);
});
G__13928.cljs$core$IFn$_invoke$arity$variadic = G__13928__delegate;
return G__13928;
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
rum.core.schedule = (function (){var or__6409__auto__ = (function (){var and__6397__auto__ = typeof window !== 'undefined';
if(and__6397__auto__){
var or__6409__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
var or__6409__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__6409__auto____$2)){
return or__6409__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__6397__auto__;
}
})();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return ((function (or__6409__auto__){
return (function (p1__13931_SHARP_){
return setTimeout(p1__13931_SHARP_,(16));
});
;})(or__6409__auto__))
}
})();
rum.core.batch = (function (){var or__6409__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return ((function (or__6409__auto____$1,or__6409__auto__){
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
;})(or__6409__auto____$1,or__6409__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__13938 = cljs.core.seq(queue);
var chunk__13940 = null;
var count__13941 = (0);
var i__13942 = (0);
while(true){
if((i__13942 < count__13941)){
var comp = chunk__13940.cljs$core$IIndexed$_nth$arity$2(null,i__13942);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__13944 = seq__13938;
var G__13945 = chunk__13940;
var G__13946 = count__13941;
var G__13947 = (i__13942 + (1));
seq__13938 = G__13944;
chunk__13940 = G__13945;
count__13941 = G__13946;
i__13942 = G__13947;
continue;
} else {
var G__13948 = seq__13938;
var G__13949 = chunk__13940;
var G__13950 = count__13941;
var G__13951 = (i__13942 + (1));
seq__13938 = G__13948;
chunk__13940 = G__13949;
count__13941 = G__13950;
i__13942 = G__13951;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13938);
if(temp__4657__auto__){
var seq__13938__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13938__$1)){
var c__7220__auto__ = cljs.core.chunk_first(seq__13938__$1);
var G__13952 = cljs.core.chunk_rest(seq__13938__$1);
var G__13953 = c__7220__auto__;
var G__13954 = cljs.core.count(c__7220__auto__);
var G__13955 = (0);
seq__13938 = G__13952;
chunk__13940 = G__13953;
count__13941 = G__13954;
i__13942 = G__13955;
continue;
} else {
var comp = cljs.core.first(seq__13938__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__13956 = cljs.core.next(seq__13938__$1);
var G__13957 = null;
var G__13958 = (0);
var G__13959 = (0);
seq__13938 = G__13956;
chunk__13940 = G__13957;
count__13941 = G__13958;
i__13942 = G__13959;
continue;
} else {
var G__13960 = cljs.core.next(seq__13938__$1);
var G__13961 = null;
var G__13962 = (0);
var G__13963 = (0);
seq__13938 = G__13960;
chunk__13940 = G__13961;
count__13941 = G__13962;
i__13942 = G__13963;
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
var queue = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue));
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue)))){
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
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
var G__13967 = component;
var G__13968 = ({"key": key});
var G__13969 = null;
return React.cloneElement(G__13967,G__13968,G__13969);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
var G__13973 = component;
var G__13974 = ({"ref": ref});
var G__13975 = null;
return React.cloneElement(G__13973,G__13974,G__13975);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
var G__13977 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
return ReactDOM.findDOMNode(G__13977);
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
var G__13979 = rum.core.ref(state,cljs.core.name(key));
return ReactDOM.findDOMNode(G__13979);
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
var args13980 = [];
var len__7484__auto___13983 = arguments.length;
var i__7485__auto___13984 = (0);
while(true){
if((i__7485__auto___13984 < len__7484__auto___13983)){
args13980.push((arguments[i__7485__auto___13984]));

var G__13985 = (i__7485__auto___13984 + (1));
i__7485__auto___13984 = G__13985;
continue;
} else {
}
break;
}

var G__13982 = args13980.length;
switch (G__13982) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13980.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,cljs.core.cst$kw$rum_SLASH_local);
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$will_DASH_mount,(function (state){
var local_state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial) : cljs.core.atom.call(null,initial));
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
var _STAR_reactions_STAR_13987 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__13988 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13988,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13988,(1),null);
var new_reactions = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core._STAR_reactions_STAR_) : cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_));
var key = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__13991_14003 = cljs.core.seq(old_reactions);
var chunk__13992_14004 = null;
var count__13993_14005 = (0);
var i__13994_14006 = (0);
while(true){
if((i__13994_14006 < count__13993_14005)){
var ref_14007 = chunk__13992_14004.cljs$core$IIndexed$_nth$arity$2(null,i__13994_14006);
if(cljs.core.contains_QMARK_(new_reactions,ref_14007)){
} else {
cljs.core.remove_watch(ref_14007,key);
}

var G__14008 = seq__13991_14003;
var G__14009 = chunk__13992_14004;
var G__14010 = count__13993_14005;
var G__14011 = (i__13994_14006 + (1));
seq__13991_14003 = G__14008;
chunk__13992_14004 = G__14009;
count__13993_14005 = G__14010;
i__13994_14006 = G__14011;
continue;
} else {
var temp__4657__auto___14012 = cljs.core.seq(seq__13991_14003);
if(temp__4657__auto___14012){
var seq__13991_14013__$1 = temp__4657__auto___14012;
if(cljs.core.chunked_seq_QMARK_(seq__13991_14013__$1)){
var c__7220__auto___14014 = cljs.core.chunk_first(seq__13991_14013__$1);
var G__14015 = cljs.core.chunk_rest(seq__13991_14013__$1);
var G__14016 = c__7220__auto___14014;
var G__14017 = cljs.core.count(c__7220__auto___14014);
var G__14018 = (0);
seq__13991_14003 = G__14015;
chunk__13992_14004 = G__14016;
count__13993_14005 = G__14017;
i__13994_14006 = G__14018;
continue;
} else {
var ref_14019 = cljs.core.first(seq__13991_14013__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_14019)){
} else {
cljs.core.remove_watch(ref_14019,key);
}

var G__14020 = cljs.core.next(seq__13991_14013__$1);
var G__14021 = null;
var G__14022 = (0);
var G__14023 = (0);
seq__13991_14003 = G__14020;
chunk__13992_14004 = G__14021;
count__13993_14005 = G__14022;
i__13994_14006 = G__14023;
continue;
}
} else {
}
}
break;
}

var seq__13995_14024 = cljs.core.seq(new_reactions);
var chunk__13996_14025 = null;
var count__13997_14026 = (0);
var i__13998_14027 = (0);
while(true){
if((i__13998_14027 < count__13997_14026)){
var ref_14028 = chunk__13996_14025.cljs$core$IIndexed$_nth$arity$2(null,i__13998_14027);
if(cljs.core.contains_QMARK_(old_reactions,ref_14028)){
} else {
cljs.core.add_watch(ref_14028,key,((function (seq__13995_14024,chunk__13996_14025,count__13997_14026,i__13998_14027,ref_14028,comp,old_reactions,vec__13988,dom,next_state,new_reactions,key,_STAR_reactions_STAR_13987){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__13995_14024,chunk__13996_14025,count__13997_14026,i__13998_14027,ref_14028,comp,old_reactions,vec__13988,dom,next_state,new_reactions,key,_STAR_reactions_STAR_13987))
);
}

var G__14029 = seq__13995_14024;
var G__14030 = chunk__13996_14025;
var G__14031 = count__13997_14026;
var G__14032 = (i__13998_14027 + (1));
seq__13995_14024 = G__14029;
chunk__13996_14025 = G__14030;
count__13997_14026 = G__14031;
i__13998_14027 = G__14032;
continue;
} else {
var temp__4657__auto___14033 = cljs.core.seq(seq__13995_14024);
if(temp__4657__auto___14033){
var seq__13995_14034__$1 = temp__4657__auto___14033;
if(cljs.core.chunked_seq_QMARK_(seq__13995_14034__$1)){
var c__7220__auto___14035 = cljs.core.chunk_first(seq__13995_14034__$1);
var G__14036 = cljs.core.chunk_rest(seq__13995_14034__$1);
var G__14037 = c__7220__auto___14035;
var G__14038 = cljs.core.count(c__7220__auto___14035);
var G__14039 = (0);
seq__13995_14024 = G__14036;
chunk__13996_14025 = G__14037;
count__13997_14026 = G__14038;
i__13998_14027 = G__14039;
continue;
} else {
var ref_14040 = cljs.core.first(seq__13995_14034__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_14040)){
} else {
cljs.core.add_watch(ref_14040,key,((function (seq__13995_14024,chunk__13996_14025,count__13997_14026,i__13998_14027,ref_14040,seq__13995_14034__$1,temp__4657__auto___14033,comp,old_reactions,vec__13988,dom,next_state,new_reactions,key,_STAR_reactions_STAR_13987){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__13995_14024,chunk__13996_14025,count__13997_14026,i__13998_14027,ref_14040,seq__13995_14034__$1,temp__4657__auto___14033,comp,old_reactions,vec__13988,dom,next_state,new_reactions,key,_STAR_reactions_STAR_13987))
);
}

var G__14041 = cljs.core.next(seq__13995_14034__$1);
var G__14042 = null;
var G__14043 = (0);
var G__14044 = (0);
seq__13995_14024 = G__14041;
chunk__13996_14025 = G__14042;
count__13997_14026 = G__14043;
i__13998_14027 = G__14044;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum$reactive_SLASH_refs,new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_13987;
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_14045 = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__13999_14046 = cljs.core.seq(cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__14000_14047 = null;
var count__14001_14048 = (0);
var i__14002_14049 = (0);
while(true){
if((i__14002_14049 < count__14001_14048)){
var ref_14050 = chunk__14000_14047.cljs$core$IIndexed$_nth$arity$2(null,i__14002_14049);
cljs.core.remove_watch(ref_14050,key_14045);

var G__14051 = seq__13999_14046;
var G__14052 = chunk__14000_14047;
var G__14053 = count__14001_14048;
var G__14054 = (i__14002_14049 + (1));
seq__13999_14046 = G__14051;
chunk__14000_14047 = G__14052;
count__14001_14048 = G__14053;
i__14002_14049 = G__14054;
continue;
} else {
var temp__4657__auto___14055 = cljs.core.seq(seq__13999_14046);
if(temp__4657__auto___14055){
var seq__13999_14056__$1 = temp__4657__auto___14055;
if(cljs.core.chunked_seq_QMARK_(seq__13999_14056__$1)){
var c__7220__auto___14057 = cljs.core.chunk_first(seq__13999_14056__$1);
var G__14058 = cljs.core.chunk_rest(seq__13999_14056__$1);
var G__14059 = c__7220__auto___14057;
var G__14060 = cljs.core.count(c__7220__auto___14057);
var G__14061 = (0);
seq__13999_14046 = G__14058;
chunk__14000_14047 = G__14059;
count__14001_14048 = G__14060;
i__14002_14049 = G__14061;
continue;
} else {
var ref_14062 = cljs.core.first(seq__13999_14056__$1);
cljs.core.remove_watch(ref_14062,key_14045);

var G__14063 = cljs.core.next(seq__13999_14056__$1);
var G__14064 = null;
var G__14065 = (0);
var G__14066 = (0);
seq__13999_14046 = G__14063;
chunk__14000_14047 = G__14064;
count__14001_14048 = G__14065;
i__14002_14049 = G__14066;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$rum$reactive_SLASH_refs,cljs.core.array_seq([cljs.core.cst$kw$rum$reactive_SLASH_key], 0));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str("\n"),cljs.core.str("*reactions*")].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
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
var args__7491__auto__ = [];
var len__7484__auto___14073 = arguments.length;
var i__7485__auto___14074 = (0);
while(true){
if((i__7485__auto___14074 < len__7484__auto___14073)){
args__7491__auto__.push((arguments[i__7485__auto___14074]));

var G__14075 = (i__7485__auto___14074 + (1));
i__7485__auto___14074 = G__14075;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__14070){
var map__14071 = p__14070;
var map__14071__$1 = ((((!((map__14071 == null)))?((((map__14071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14071):map__14071);
var options = map__14071__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq14067){
var G__14068 = cljs.core.first(seq14067);
var seq14067__$1 = cljs.core.next(seq14067);
var G__14069 = cljs.core.first(seq14067__$1);
var seq14067__$2 = cljs.core.next(seq14067__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__14068,G__14069,seq14067__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__7491__auto__ = [];
var len__7484__auto___14079 = arguments.length;
var i__7485__auto___14080 = (0);
while(true){
if((i__7485__auto___14080 < len__7484__auto___14079)){
args__7491__auto__.push((arguments[i__7485__auto___14080]));

var G__14081 = (i__7485__auto___14080 + (1));
i__7485__auto___14080 = G__14081;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq14076){
var G__14077 = cljs.core.first(seq14076);
var seq14076__$1 = cljs.core.next(seq14076);
var G__14078 = cljs.core.first(seq14076__$1);
var seq14076__$2 = cljs.core.next(seq14076__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__14077,G__14078,seq14076__$2);
});

