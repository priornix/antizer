// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__16223__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__16220 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__16221 = cljs.core.seq(vec__16220);
var first__16222 = cljs.core.first(seq__16221);
var seq__16221__$1 = cljs.core.next(seq__16221);
var tag = first__16222;
var body = seq__16221__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__16223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16224__i = 0, G__16224__a = new Array(arguments.length -  0);
while (G__16224__i < G__16224__a.length) {G__16224__a[G__16224__i] = arguments[G__16224__i + 0]; ++G__16224__i;}
  args = new cljs.core.IndexedSeq(G__16224__a,0,null);
} 
return G__16223__delegate.call(this,args);};
G__16223.cljs$lang$maxFixedArity = 0;
G__16223.cljs$lang$applyTo = (function (arglist__16225){
var args = cljs.core.seq(arglist__16225);
return G__16223__delegate(args);
});
G__16223.cljs$core$IFn$_invoke$arity$variadic = G__16223__delegate;
return G__16223;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__9404__auto__ = (function sablono$core$update_arglists_$_iter__16226(s__16227){
return (new cljs.core.LazySeq(null,(function (){
var s__16227__$1 = s__16227;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__16227__$1);
if(temp__5457__auto__){
var s__16227__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16227__$2)){
var c__9402__auto__ = cljs.core.chunk_first(s__16227__$2);
var size__9403__auto__ = cljs.core.count(c__9402__auto__);
var b__16229 = cljs.core.chunk_buffer(size__9403__auto__);
if((function (){var i__16228 = (0);
while(true){
if((i__16228 < size__9403__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9402__auto__,i__16228);
cljs.core.chunk_append(b__16229,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__16230 = (i__16228 + (1));
i__16228 = G__16230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16229),sablono$core$update_arglists_$_iter__16226(cljs.core.chunk_rest(s__16227__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16229),null);
}
} else {
var args = cljs.core.first(s__16227__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__16226(cljs.core.rest(s__16227__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9404__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__9808__auto__ = [];
var len__9801__auto___16236 = arguments.length;
var i__9802__auto___16237 = (0);
while(true){
if((i__9802__auto___16237 < len__9801__auto___16236)){
args__9808__auto__.push((arguments[i__9802__auto___16237]));

var G__16238 = (i__9802__auto___16237 + (1));
i__9802__auto___16237 = G__16238;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__9404__auto__ = (function sablono$core$iter__16232(s__16233){
return (new cljs.core.LazySeq(null,(function (){
var s__16233__$1 = s__16233;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__16233__$1);
if(temp__5457__auto__){
var s__16233__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16233__$2)){
var c__9402__auto__ = cljs.core.chunk_first(s__16233__$2);
var size__9403__auto__ = cljs.core.count(c__9402__auto__);
var b__16235 = cljs.core.chunk_buffer(size__9403__auto__);
if((function (){var i__16234 = (0);
while(true){
if((i__16234 < size__9403__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9402__auto__,i__16234);
cljs.core.chunk_append(b__16235,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__16239 = (i__16234 + (1));
i__16234 = G__16239;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16235),sablono$core$iter__16232(cljs.core.chunk_rest(s__16233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16235),null);
}
} else {
var style = cljs.core.first(s__16233__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__16232(cljs.core.rest(s__16233__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9404__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq16231){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16231));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__16240 = goog.dom.getDocument().body;
var G__16241 = (function (){var G__16242 = "script";
var G__16243 = ({"src": src});
return goog.dom.createDom(G__16242,G__16243);
})();
return goog.dom.appendChild(G__16240,G__16241);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to16244 = (function sablono$core$link_to16244(var_args){
var args__9808__auto__ = [];
var len__9801__auto___16247 = arguments.length;
var i__9802__auto___16248 = (0);
while(true){
if((i__9802__auto___16248 < len__9801__auto___16247)){
args__9808__auto__.push((arguments[i__9802__auto___16248]));

var G__16249 = (i__9802__auto___16248 + (1));
i__9802__auto___16248 = G__16249;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to16244.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

sablono.core.link_to16244.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
});

sablono.core.link_to16244.cljs$lang$maxFixedArity = (1);

sablono.core.link_to16244.cljs$lang$applyTo = (function (seq16245){
var G__16246 = cljs.core.first(seq16245);
var seq16245__$1 = cljs.core.next(seq16245);
return sablono.core.link_to16244.cljs$core$IFn$_invoke$arity$variadic(G__16246,seq16245__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to16244);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to16250 = (function sablono$core$mail_to16250(var_args){
var args__9808__auto__ = [];
var len__9801__auto___16257 = arguments.length;
var i__9802__auto___16258 = (0);
while(true){
if((i__9802__auto___16258 < len__9801__auto___16257)){
args__9808__auto__.push((arguments[i__9802__auto___16258]));

var G__16259 = (i__9802__auto___16258 + (1));
i__9802__auto___16258 = G__16259;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to16250.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

sablono.core.mail_to16250.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__16253){
var vec__16254 = p__16253;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16254,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__8522__auto__ = content;
if(cljs.core.truth_(or__8522__auto__)){
return or__8522__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to16250.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to16250.cljs$lang$applyTo = (function (seq16251){
var G__16252 = cljs.core.first(seq16251);
var seq16251__$1 = cljs.core.next(seq16251);
return sablono.core.mail_to16250.cljs$core$IFn$_invoke$arity$variadic(G__16252,seq16251__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to16250);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list16260 = (function sablono$core$unordered_list16260(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__9404__auto__ = (function sablono$core$unordered_list16260_$_iter__16261(s__16262){
return (new cljs.core.LazySeq(null,(function (){
var s__16262__$1 = s__16262;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__16262__$1);
if(temp__5457__auto__){
var s__16262__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16262__$2)){
var c__9402__auto__ = cljs.core.chunk_first(s__16262__$2);
var size__9403__auto__ = cljs.core.count(c__9402__auto__);
var b__16264 = cljs.core.chunk_buffer(size__9403__auto__);
if((function (){var i__16263 = (0);
while(true){
if((i__16263 < size__9403__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9402__auto__,i__16263);
cljs.core.chunk_append(b__16264,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__16265 = (i__16263 + (1));
i__16263 = G__16265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16264),sablono$core$unordered_list16260_$_iter__16261(cljs.core.chunk_rest(s__16262__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16264),null);
}
} else {
var x = cljs.core.first(s__16262__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list16260_$_iter__16261(cljs.core.rest(s__16262__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9404__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list16260);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list16266 = (function sablono$core$ordered_list16266(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__9404__auto__ = (function sablono$core$ordered_list16266_$_iter__16267(s__16268){
return (new cljs.core.LazySeq(null,(function (){
var s__16268__$1 = s__16268;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__16268__$1);
if(temp__5457__auto__){
var s__16268__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16268__$2)){
var c__9402__auto__ = cljs.core.chunk_first(s__16268__$2);
var size__9403__auto__ = cljs.core.count(c__9402__auto__);
var b__16270 = cljs.core.chunk_buffer(size__9403__auto__);
if((function (){var i__16269 = (0);
while(true){
if((i__16269 < size__9403__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9402__auto__,i__16269);
cljs.core.chunk_append(b__16270,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__16271 = (i__16269 + (1));
i__16269 = G__16271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16270),sablono$core$ordered_list16266_$_iter__16267(cljs.core.chunk_rest(s__16268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16270),null);
}
} else {
var x = cljs.core.first(s__16268__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list16266_$_iter__16267(cljs.core.rest(s__16268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9404__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list16266);
/**
 * Create an image element.
 */
sablono.core.image16272 = (function sablono$core$image16272(var_args){
var G__16274 = arguments.length;
switch (G__16274) {
case 1:
return sablono.core.image16272.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image16272.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image16272.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
});

sablono.core.image16272.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image16272.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image16272);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16276_SHARP_,p2__16277_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16276_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__16277_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16278_SHARP_,p2__16279_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16278_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__16279_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__16281 = arguments.length;
switch (G__16281) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__8522__auto__ = value;
if(cljs.core.truth_(or__8522__auto__)){
return or__8522__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field16283 = (function sablono$core$color_field16283(var_args){
var G__16285 = arguments.length;
switch (G__16285) {
case 1:
return sablono.core.color_field16283.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field16283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field16283.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color)].join(''),name__16210__auto__);
});

sablono.core.color_field16283.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.color_field16283.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field16283);

/**
 * Creates a date input field.
 */
sablono.core.date_field16286 = (function sablono$core$date_field16286(var_args){
var G__16288 = arguments.length;
switch (G__16288) {
case 1:
return sablono.core.date_field16286.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field16286.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field16286.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date)].join(''),name__16210__auto__);
});

sablono.core.date_field16286.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.date_field16286.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field16286);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field16289 = (function sablono$core$datetime_field16289(var_args){
var G__16291 = arguments.length;
switch (G__16291) {
case 1:
return sablono.core.datetime_field16289.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field16289.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field16289.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime)].join(''),name__16210__auto__);
});

sablono.core.datetime_field16289.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.datetime_field16289.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field16289);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field16292 = (function sablono$core$datetime_local_field16292(var_args){
var G__16294 = arguments.length;
switch (G__16294) {
case 1:
return sablono.core.datetime_local_field16292.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field16292.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field16292.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__16210__auto__);
});

sablono.core.datetime_local_field16292.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.datetime_local_field16292.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field16292);

/**
 * Creates a email input field.
 */
sablono.core.email_field16295 = (function sablono$core$email_field16295(var_args){
var G__16297 = arguments.length;
switch (G__16297) {
case 1:
return sablono.core.email_field16295.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field16295.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field16295.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email)].join(''),name__16210__auto__);
});

sablono.core.email_field16295.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.email_field16295.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field16295);

/**
 * Creates a file input field.
 */
sablono.core.file_field16298 = (function sablono$core$file_field16298(var_args){
var G__16300 = arguments.length;
switch (G__16300) {
case 1:
return sablono.core.file_field16298.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field16298.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field16298.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file)].join(''),name__16210__auto__);
});

sablono.core.file_field16298.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.file_field16298.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field16298);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field16301 = (function sablono$core$hidden_field16301(var_args){
var G__16303 = arguments.length;
switch (G__16303) {
case 1:
return sablono.core.hidden_field16301.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field16301.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field16301.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden)].join(''),name__16210__auto__);
});

sablono.core.hidden_field16301.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.hidden_field16301.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field16301);

/**
 * Creates a month input field.
 */
sablono.core.month_field16304 = (function sablono$core$month_field16304(var_args){
var G__16306 = arguments.length;
switch (G__16306) {
case 1:
return sablono.core.month_field16304.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field16304.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field16304.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month)].join(''),name__16210__auto__);
});

sablono.core.month_field16304.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.month_field16304.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field16304);

/**
 * Creates a number input field.
 */
sablono.core.number_field16307 = (function sablono$core$number_field16307(var_args){
var G__16309 = arguments.length;
switch (G__16309) {
case 1:
return sablono.core.number_field16307.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field16307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field16307.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number)].join(''),name__16210__auto__);
});

sablono.core.number_field16307.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.number_field16307.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field16307);

/**
 * Creates a password input field.
 */
sablono.core.password_field16310 = (function sablono$core$password_field16310(var_args){
var G__16312 = arguments.length;
switch (G__16312) {
case 1:
return sablono.core.password_field16310.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field16310.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field16310.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password)].join(''),name__16210__auto__);
});

sablono.core.password_field16310.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.password_field16310.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field16310);

/**
 * Creates a range input field.
 */
sablono.core.range_field16313 = (function sablono$core$range_field16313(var_args){
var G__16315 = arguments.length;
switch (G__16315) {
case 1:
return sablono.core.range_field16313.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field16313.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field16313.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range)].join(''),name__16210__auto__);
});

sablono.core.range_field16313.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.range_field16313.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field16313);

/**
 * Creates a search input field.
 */
sablono.core.search_field16316 = (function sablono$core$search_field16316(var_args){
var G__16318 = arguments.length;
switch (G__16318) {
case 1:
return sablono.core.search_field16316.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field16316.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field16316.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search)].join(''),name__16210__auto__);
});

sablono.core.search_field16316.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.search_field16316.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field16316);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field16319 = (function sablono$core$tel_field16319(var_args){
var G__16321 = arguments.length;
switch (G__16321) {
case 1:
return sablono.core.tel_field16319.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field16319.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field16319.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel)].join(''),name__16210__auto__);
});

sablono.core.tel_field16319.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.tel_field16319.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field16319);

/**
 * Creates a text input field.
 */
sablono.core.text_field16322 = (function sablono$core$text_field16322(var_args){
var G__16324 = arguments.length;
switch (G__16324) {
case 1:
return sablono.core.text_field16322.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field16322.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field16322.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text)].join(''),name__16210__auto__);
});

sablono.core.text_field16322.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.text_field16322.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field16322);

/**
 * Creates a time input field.
 */
sablono.core.time_field16325 = (function sablono$core$time_field16325(var_args){
var G__16327 = arguments.length;
switch (G__16327) {
case 1:
return sablono.core.time_field16325.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field16325.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field16325.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time)].join(''),name__16210__auto__);
});

sablono.core.time_field16325.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.time_field16325.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field16325);

/**
 * Creates a url input field.
 */
sablono.core.url_field16328 = (function sablono$core$url_field16328(var_args){
var G__16330 = arguments.length;
switch (G__16330) {
case 1:
return sablono.core.url_field16328.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field16328.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field16328.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url)].join(''),name__16210__auto__);
});

sablono.core.url_field16328.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.url_field16328.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field16328);

/**
 * Creates a week input field.
 */
sablono.core.week_field16331 = (function sablono$core$week_field16331(var_args){
var G__16333 = arguments.length;
switch (G__16333) {
case 1:
return sablono.core.week_field16331.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field16331.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field16331.cljs$core$IFn$_invoke$arity$1 = (function (name__16210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week)].join(''),name__16210__auto__);
});

sablono.core.week_field16331.cljs$core$IFn$_invoke$arity$2 = (function (name__16210__auto__,value__16211__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week)].join(''),name__16210__auto__,value__16211__auto__);
});

sablono.core.week_field16331.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field16331);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box16351 = (function sablono$core$check_box16351(var_args){
var G__16353 = arguments.length;
switch (G__16353) {
case 1:
return sablono.core.check_box16351.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box16351.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box16351.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box16351.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.check_box16351.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box16351.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box16351.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box16351);
/**
 * Creates a radio button.
 */
sablono.core.radio_button16355 = (function sablono$core$radio_button16355(var_args){
var G__16357 = arguments.length;
switch (G__16357) {
case 1:
return sablono.core.radio_button16355.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button16355.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button16355.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button16355.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
});

sablono.core.radio_button16355.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button16355.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button16355.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button16355);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__16359 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__16359);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options16360 = (function sablono$core$select_options16360(coll){
var iter__9404__auto__ = (function sablono$core$select_options16360_$_iter__16361(s__16362){
return (new cljs.core.LazySeq(null,(function (){
var s__16362__$1 = s__16362;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__16362__$1);
if(temp__5457__auto__){
var s__16362__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16362__$2)){
var c__9402__auto__ = cljs.core.chunk_first(s__16362__$2);
var size__9403__auto__ = cljs.core.count(c__9402__auto__);
var b__16364 = cljs.core.chunk_buffer(size__9403__auto__);
if((function (){var i__16363 = (0);
while(true){
if((i__16363 < size__9403__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9402__auto__,i__16363);
cljs.core.chunk_append(b__16364,((cljs.core.sequential_QMARK_(x))?(function (){var vec__16365 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16365,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16365,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16365,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options16360.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options16360.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options16360.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__16371 = (i__16363 + (1));
i__16363 = G__16371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16364),sablono$core$select_options16360_$_iter__16361(cljs.core.chunk_rest(s__16362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16364),null);
}
} else {
var x = cljs.core.first(s__16362__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__16368 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16368,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16368,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16368,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options16360.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options16360.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options16360.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options16360_$_iter__16361(cljs.core.rest(s__16362__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9404__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options16360);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down16372 = (function sablono$core$drop_down16372(var_args){
var G__16374 = arguments.length;
switch (G__16374) {
case 2:
return sablono.core.drop_down16372.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down16372.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down16372.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down16372.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down16372.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down16372.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down16372);
/**
 * Creates a text area element.
 */
sablono.core.text_area16376 = (function sablono$core$text_area16376(var_args){
var G__16378 = arguments.length;
switch (G__16378) {
case 1:
return sablono.core.text_area16376.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area16376.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area16376.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.text_area16376.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__8522__auto__ = value;
if(cljs.core.truth_(or__8522__auto__)){
return or__8522__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area16376.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area16376);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label16380 = (function sablono$core$label16380(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label16380);
/**
 * Creates a submit button.
 */
sablono.core.submit_button16381 = (function sablono$core$submit_button16381(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button16381);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button16382 = (function sablono$core$reset_button16382(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button16382);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to16383 = (function sablono$core$form_to16383(var_args){
var args__9808__auto__ = [];
var len__9801__auto___16393 = arguments.length;
var i__9802__auto___16394 = (0);
while(true){
if((i__9802__auto___16394 < len__9801__auto___16393)){
args__9808__auto__.push((arguments[i__9802__auto___16394]));

var G__16395 = (i__9802__auto___16394 + (1));
i__9802__auto___16394 = G__16395;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to16383.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

sablono.core.form_to16383.cljs$core$IFn$_invoke$arity$variadic = (function (p__16386,body){
var vec__16387 = p__16386;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16387,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16387,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__16390 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__16391 = "_method";
var G__16392 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__16390,G__16391,G__16392) : sablono.core.hidden_field.call(null,G__16390,G__16391,G__16392));
})()], null)),body));
});

sablono.core.form_to16383.cljs$lang$maxFixedArity = (1);

sablono.core.form_to16383.cljs$lang$applyTo = (function (seq16384){
var G__16385 = cljs.core.first(seq16384);
var seq16384__$1 = cljs.core.next(seq16384);
return sablono.core.form_to16383.cljs$core$IFn$_invoke$arity$variadic(G__16385,seq16384__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to16383);
