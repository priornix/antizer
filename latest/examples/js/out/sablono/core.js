// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__13192__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__13189 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__13190 = cljs.core.seq(vec__13189);
var first__13191 = cljs.core.first(seq__13190);
var seq__13190__$1 = cljs.core.next(seq__13190);
var tag = first__13191;
var body = seq__13190__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__13192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13193__i = 0, G__13193__a = new Array(arguments.length -  0);
while (G__13193__i < G__13193__a.length) {G__13193__a[G__13193__i] = arguments[G__13193__i + 0]; ++G__13193__i;}
  args = new cljs.core.IndexedSeq(G__13193__a,0);
} 
return G__13192__delegate.call(this,args);};
G__13192.cljs$lang$maxFixedArity = 0;
G__13192.cljs$lang$applyTo = (function (arglist__13194){
var args = cljs.core.seq(arglist__13194);
return G__13192__delegate(args);
});
G__13192.cljs$core$IFn$_invoke$arity$variadic = G__13192__delegate;
return G__13192;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7189__auto__ = (function sablono$core$update_arglists_$_iter__13201(s__13202){
return (new cljs.core.LazySeq(null,(function (){
var s__13202__$1 = s__13202;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13202__$1);
if(temp__4657__auto__){
var s__13202__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13202__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__13202__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__13204 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__13203 = (0);
while(true){
if((i__13203 < size__7188__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__13203);
cljs.core.chunk_append(b__13204,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__13207 = (i__13203 + (1));
i__13203 = G__13207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13204),sablono$core$update_arglists_$_iter__13201(cljs.core.chunk_rest(s__13202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13204),null);
}
} else {
var args = cljs.core.first(s__13202__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__13201(cljs.core.rest(s__13202__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13215 = arguments.length;
var i__7485__auto___13216 = (0);
while(true){
if((i__7485__auto___13216 < len__7484__auto___13215)){
args__7491__auto__.push((arguments[i__7485__auto___13216]));

var G__13217 = (i__7485__auto___13216 + (1));
i__7485__auto___13216 = G__13217;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7189__auto__ = (function sablono$core$iter__13209(s__13210){
return (new cljs.core.LazySeq(null,(function (){
var s__13210__$1 = s__13210;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13210__$1);
if(temp__4657__auto__){
var s__13210__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13210__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__13210__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__13212 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__13211 = (0);
while(true){
if((i__13211 < size__7188__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__13211);
cljs.core.chunk_append(b__13212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__13218 = (i__13211 + (1));
i__13211 = G__13218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13212),sablono$core$iter__13209(cljs.core.chunk_rest(s__13210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13212),null);
}
} else {
var style = cljs.core.first(s__13210__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__13209(cljs.core.rest(s__13210__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq13208){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13208));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__13223 = goog.dom.getDocument().body;
var G__13224 = (function (){var G__13225 = "script";
var G__13226 = ({"src": src});
return goog.dom.createDom(G__13225,G__13226);
})();
return goog.dom.appendChild(G__13223,G__13224);
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
sablono.core.link_to13227 = (function sablono$core$link_to13227(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13230 = arguments.length;
var i__7485__auto___13231 = (0);
while(true){
if((i__7485__auto___13231 < len__7484__auto___13230)){
args__7491__auto__.push((arguments[i__7485__auto___13231]));

var G__13232 = (i__7485__auto___13231 + (1));
i__7485__auto___13231 = G__13232;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to13227.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

sablono.core.link_to13227.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to13227.cljs$lang$maxFixedArity = (1);

sablono.core.link_to13227.cljs$lang$applyTo = (function (seq13228){
var G__13229 = cljs.core.first(seq13228);
var seq13228__$1 = cljs.core.next(seq13228);
return sablono.core.link_to13227.cljs$core$IFn$_invoke$arity$variadic(G__13229,seq13228__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to13227);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to13233 = (function sablono$core$mail_to13233(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13240 = arguments.length;
var i__7485__auto___13241 = (0);
while(true){
if((i__7485__auto___13241 < len__7484__auto___13240)){
args__7491__auto__.push((arguments[i__7485__auto___13241]));

var G__13242 = (i__7485__auto___13241 + (1));
i__7485__auto___13241 = G__13242;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to13233.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

sablono.core.mail_to13233.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__13236){
var vec__13237 = p__13236;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13237,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6409__auto__ = content;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to13233.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to13233.cljs$lang$applyTo = (function (seq13234){
var G__13235 = cljs.core.first(seq13234);
var seq13234__$1 = cljs.core.next(seq13234);
return sablono.core.mail_to13233.cljs$core$IFn$_invoke$arity$variadic(G__13235,seq13234__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to13233);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13243 = (function sablono$core$unordered_list13243(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7189__auto__ = (function sablono$core$unordered_list13243_$_iter__13250(s__13251){
return (new cljs.core.LazySeq(null,(function (){
var s__13251__$1 = s__13251;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13251__$1);
if(temp__4657__auto__){
var s__13251__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13251__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__13251__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__13253 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__13252 = (0);
while(true){
if((i__13252 < size__7188__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__13252);
cljs.core.chunk_append(b__13253,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13256 = (i__13252 + (1));
i__13252 = G__13256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13253),sablono$core$unordered_list13243_$_iter__13250(cljs.core.chunk_rest(s__13251__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13253),null);
}
} else {
var x = cljs.core.first(s__13251__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list13243_$_iter__13250(cljs.core.rest(s__13251__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list13243);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13257 = (function sablono$core$ordered_list13257(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7189__auto__ = (function sablono$core$ordered_list13257_$_iter__13264(s__13265){
return (new cljs.core.LazySeq(null,(function (){
var s__13265__$1 = s__13265;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13265__$1);
if(temp__4657__auto__){
var s__13265__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13265__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__13265__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__13267 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__13266 = (0);
while(true){
if((i__13266 < size__7188__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__13266);
cljs.core.chunk_append(b__13267,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13270 = (i__13266 + (1));
i__13266 = G__13270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13267),sablono$core$ordered_list13257_$_iter__13264(cljs.core.chunk_rest(s__13265__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13267),null);
}
} else {
var x = cljs.core.first(s__13265__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list13257_$_iter__13264(cljs.core.rest(s__13265__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list13257);
/**
 * Create an image element.
 */
sablono.core.image13271 = (function sablono$core$image13271(var_args){
var args13272 = [];
var len__7484__auto___13275 = arguments.length;
var i__7485__auto___13276 = (0);
while(true){
if((i__7485__auto___13276 < len__7484__auto___13275)){
args13272.push((arguments[i__7485__auto___13276]));

var G__13277 = (i__7485__auto___13276 + (1));
i__7485__auto___13276 = G__13277;
continue;
} else {
}
break;
}

var G__13274 = args13272.length;
switch (G__13274) {
case 1:
return sablono.core.image13271.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image13271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13272.length)].join('')));

}
});

sablono.core.image13271.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image13271.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image13271.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image13271);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13279_SHARP_,p2__13280_SHARP_){
return [cljs.core.str(p1__13279_SHARP_),cljs.core.str("["),cljs.core.str(p2__13280_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13281_SHARP_,p2__13282_SHARP_){
return [cljs.core.str(p1__13281_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13282_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6409__auto__ = value;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field13283 = (function sablono$core$color_field13283(var_args){
var args13284 = [];
var len__7484__auto___13351 = arguments.length;
var i__7485__auto___13352 = (0);
while(true){
if((i__7485__auto___13352 < len__7484__auto___13351)){
args13284.push((arguments[i__7485__auto___13352]));

var G__13353 = (i__7485__auto___13352 + (1));
i__7485__auto___13352 = G__13353;
continue;
} else {
}
break;
}

var G__13286 = args13284.length;
switch (G__13286) {
case 1:
return sablono.core.color_field13283.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field13283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13284.length)].join('')));

}
});

sablono.core.color_field13283.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.color_field13283.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.color_field13283.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.color_field13283.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field13283);

/**
 * Creates a date input field.
 */
sablono.core.date_field13287 = (function sablono$core$date_field13287(var_args){
var args13288 = [];
var len__7484__auto___13355 = arguments.length;
var i__7485__auto___13356 = (0);
while(true){
if((i__7485__auto___13356 < len__7484__auto___13355)){
args13288.push((arguments[i__7485__auto___13356]));

var G__13357 = (i__7485__auto___13356 + (1));
i__7485__auto___13356 = G__13357;
continue;
} else {
}
break;
}

var G__13290 = args13288.length;
switch (G__13290) {
case 1:
return sablono.core.date_field13287.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field13287.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13288.length)].join('')));

}
});

sablono.core.date_field13287.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.date_field13287.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.date_field13287.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.date_field13287.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field13287);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13291 = (function sablono$core$datetime_field13291(var_args){
var args13292 = [];
var len__7484__auto___13359 = arguments.length;
var i__7485__auto___13360 = (0);
while(true){
if((i__7485__auto___13360 < len__7484__auto___13359)){
args13292.push((arguments[i__7485__auto___13360]));

var G__13361 = (i__7485__auto___13360 + (1));
i__7485__auto___13360 = G__13361;
continue;
} else {
}
break;
}

var G__13294 = args13292.length;
switch (G__13294) {
case 1:
return sablono.core.datetime_field13291.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field13291.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13292.length)].join('')));

}
});

sablono.core.datetime_field13291.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.datetime_field13291.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.datetime_field13291.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.datetime_field13291.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field13291);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13295 = (function sablono$core$datetime_local_field13295(var_args){
var args13296 = [];
var len__7484__auto___13363 = arguments.length;
var i__7485__auto___13364 = (0);
while(true){
if((i__7485__auto___13364 < len__7484__auto___13363)){
args13296.push((arguments[i__7485__auto___13364]));

var G__13365 = (i__7485__auto___13364 + (1));
i__7485__auto___13364 = G__13365;
continue;
} else {
}
break;
}

var G__13298 = args13296.length;
switch (G__13298) {
case 1:
return sablono.core.datetime_local_field13295.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field13295.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13296.length)].join('')));

}
});

sablono.core.datetime_local_field13295.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.datetime_local_field13295.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.datetime_local_field13295.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.datetime_local_field13295.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field13295);

/**
 * Creates a email input field.
 */
sablono.core.email_field13299 = (function sablono$core$email_field13299(var_args){
var args13300 = [];
var len__7484__auto___13367 = arguments.length;
var i__7485__auto___13368 = (0);
while(true){
if((i__7485__auto___13368 < len__7484__auto___13367)){
args13300.push((arguments[i__7485__auto___13368]));

var G__13369 = (i__7485__auto___13368 + (1));
i__7485__auto___13368 = G__13369;
continue;
} else {
}
break;
}

var G__13302 = args13300.length;
switch (G__13302) {
case 1:
return sablono.core.email_field13299.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field13299.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13300.length)].join('')));

}
});

sablono.core.email_field13299.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.email_field13299.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.email_field13299.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.email_field13299.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field13299);

/**
 * Creates a file input field.
 */
sablono.core.file_field13303 = (function sablono$core$file_field13303(var_args){
var args13304 = [];
var len__7484__auto___13371 = arguments.length;
var i__7485__auto___13372 = (0);
while(true){
if((i__7485__auto___13372 < len__7484__auto___13371)){
args13304.push((arguments[i__7485__auto___13372]));

var G__13373 = (i__7485__auto___13372 + (1));
i__7485__auto___13372 = G__13373;
continue;
} else {
}
break;
}

var G__13306 = args13304.length;
switch (G__13306) {
case 1:
return sablono.core.file_field13303.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field13303.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13304.length)].join('')));

}
});

sablono.core.file_field13303.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.file_field13303.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.file_field13303.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.file_field13303.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field13303);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13307 = (function sablono$core$hidden_field13307(var_args){
var args13308 = [];
var len__7484__auto___13375 = arguments.length;
var i__7485__auto___13376 = (0);
while(true){
if((i__7485__auto___13376 < len__7484__auto___13375)){
args13308.push((arguments[i__7485__auto___13376]));

var G__13377 = (i__7485__auto___13376 + (1));
i__7485__auto___13376 = G__13377;
continue;
} else {
}
break;
}

var G__13310 = args13308.length;
switch (G__13310) {
case 1:
return sablono.core.hidden_field13307.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field13307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13308.length)].join('')));

}
});

sablono.core.hidden_field13307.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.hidden_field13307.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.hidden_field13307.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.hidden_field13307.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field13307);

/**
 * Creates a month input field.
 */
sablono.core.month_field13311 = (function sablono$core$month_field13311(var_args){
var args13312 = [];
var len__7484__auto___13379 = arguments.length;
var i__7485__auto___13380 = (0);
while(true){
if((i__7485__auto___13380 < len__7484__auto___13379)){
args13312.push((arguments[i__7485__auto___13380]));

var G__13381 = (i__7485__auto___13380 + (1));
i__7485__auto___13380 = G__13381;
continue;
} else {
}
break;
}

var G__13314 = args13312.length;
switch (G__13314) {
case 1:
return sablono.core.month_field13311.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field13311.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13312.length)].join('')));

}
});

sablono.core.month_field13311.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.month_field13311.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.month_field13311.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.month_field13311.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field13311);

/**
 * Creates a number input field.
 */
sablono.core.number_field13315 = (function sablono$core$number_field13315(var_args){
var args13316 = [];
var len__7484__auto___13383 = arguments.length;
var i__7485__auto___13384 = (0);
while(true){
if((i__7485__auto___13384 < len__7484__auto___13383)){
args13316.push((arguments[i__7485__auto___13384]));

var G__13385 = (i__7485__auto___13384 + (1));
i__7485__auto___13384 = G__13385;
continue;
} else {
}
break;
}

var G__13318 = args13316.length;
switch (G__13318) {
case 1:
return sablono.core.number_field13315.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field13315.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13316.length)].join('')));

}
});

sablono.core.number_field13315.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.number_field13315.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.number_field13315.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.number_field13315.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field13315);

/**
 * Creates a password input field.
 */
sablono.core.password_field13319 = (function sablono$core$password_field13319(var_args){
var args13320 = [];
var len__7484__auto___13387 = arguments.length;
var i__7485__auto___13388 = (0);
while(true){
if((i__7485__auto___13388 < len__7484__auto___13387)){
args13320.push((arguments[i__7485__auto___13388]));

var G__13389 = (i__7485__auto___13388 + (1));
i__7485__auto___13388 = G__13389;
continue;
} else {
}
break;
}

var G__13322 = args13320.length;
switch (G__13322) {
case 1:
return sablono.core.password_field13319.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field13319.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13320.length)].join('')));

}
});

sablono.core.password_field13319.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.password_field13319.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.password_field13319.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.password_field13319.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field13319);

/**
 * Creates a range input field.
 */
sablono.core.range_field13323 = (function sablono$core$range_field13323(var_args){
var args13324 = [];
var len__7484__auto___13391 = arguments.length;
var i__7485__auto___13392 = (0);
while(true){
if((i__7485__auto___13392 < len__7484__auto___13391)){
args13324.push((arguments[i__7485__auto___13392]));

var G__13393 = (i__7485__auto___13392 + (1));
i__7485__auto___13392 = G__13393;
continue;
} else {
}
break;
}

var G__13326 = args13324.length;
switch (G__13326) {
case 1:
return sablono.core.range_field13323.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field13323.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13324.length)].join('')));

}
});

sablono.core.range_field13323.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.range_field13323.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.range_field13323.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.range_field13323.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field13323);

/**
 * Creates a search input field.
 */
sablono.core.search_field13327 = (function sablono$core$search_field13327(var_args){
var args13328 = [];
var len__7484__auto___13395 = arguments.length;
var i__7485__auto___13396 = (0);
while(true){
if((i__7485__auto___13396 < len__7484__auto___13395)){
args13328.push((arguments[i__7485__auto___13396]));

var G__13397 = (i__7485__auto___13396 + (1));
i__7485__auto___13396 = G__13397;
continue;
} else {
}
break;
}

var G__13330 = args13328.length;
switch (G__13330) {
case 1:
return sablono.core.search_field13327.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field13327.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13328.length)].join('')));

}
});

sablono.core.search_field13327.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.search_field13327.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.search_field13327.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.search_field13327.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field13327);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13331 = (function sablono$core$tel_field13331(var_args){
var args13332 = [];
var len__7484__auto___13399 = arguments.length;
var i__7485__auto___13400 = (0);
while(true){
if((i__7485__auto___13400 < len__7484__auto___13399)){
args13332.push((arguments[i__7485__auto___13400]));

var G__13401 = (i__7485__auto___13400 + (1));
i__7485__auto___13400 = G__13401;
continue;
} else {
}
break;
}

var G__13334 = args13332.length;
switch (G__13334) {
case 1:
return sablono.core.tel_field13331.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field13331.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13332.length)].join('')));

}
});

sablono.core.tel_field13331.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.tel_field13331.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.tel_field13331.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.tel_field13331.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field13331);

/**
 * Creates a text input field.
 */
sablono.core.text_field13335 = (function sablono$core$text_field13335(var_args){
var args13336 = [];
var len__7484__auto___13403 = arguments.length;
var i__7485__auto___13404 = (0);
while(true){
if((i__7485__auto___13404 < len__7484__auto___13403)){
args13336.push((arguments[i__7485__auto___13404]));

var G__13405 = (i__7485__auto___13404 + (1));
i__7485__auto___13404 = G__13405;
continue;
} else {
}
break;
}

var G__13338 = args13336.length;
switch (G__13338) {
case 1:
return sablono.core.text_field13335.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field13335.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13336.length)].join('')));

}
});

sablono.core.text_field13335.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.text_field13335.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.text_field13335.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.text_field13335.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field13335);

/**
 * Creates a time input field.
 */
sablono.core.time_field13339 = (function sablono$core$time_field13339(var_args){
var args13340 = [];
var len__7484__auto___13407 = arguments.length;
var i__7485__auto___13408 = (0);
while(true){
if((i__7485__auto___13408 < len__7484__auto___13407)){
args13340.push((arguments[i__7485__auto___13408]));

var G__13409 = (i__7485__auto___13408 + (1));
i__7485__auto___13408 = G__13409;
continue;
} else {
}
break;
}

var G__13342 = args13340.length;
switch (G__13342) {
case 1:
return sablono.core.time_field13339.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field13339.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13340.length)].join('')));

}
});

sablono.core.time_field13339.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.time_field13339.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.time_field13339.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.time_field13339.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field13339);

/**
 * Creates a url input field.
 */
sablono.core.url_field13343 = (function sablono$core$url_field13343(var_args){
var args13344 = [];
var len__7484__auto___13411 = arguments.length;
var i__7485__auto___13412 = (0);
while(true){
if((i__7485__auto___13412 < len__7484__auto___13411)){
args13344.push((arguments[i__7485__auto___13412]));

var G__13413 = (i__7485__auto___13412 + (1));
i__7485__auto___13412 = G__13413;
continue;
} else {
}
break;
}

var G__13346 = args13344.length;
switch (G__13346) {
case 1:
return sablono.core.url_field13343.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field13343.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13344.length)].join('')));

}
});

sablono.core.url_field13343.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.url_field13343.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.url_field13343.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.url_field13343.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field13343);

/**
 * Creates a week input field.
 */
sablono.core.week_field13347 = (function sablono$core$week_field13347(var_args){
var args13348 = [];
var len__7484__auto___13415 = arguments.length;
var i__7485__auto___13416 = (0);
while(true){
if((i__7485__auto___13416 < len__7484__auto___13415)){
args13348.push((arguments[i__7485__auto___13416]));

var G__13417 = (i__7485__auto___13416 + (1));
i__7485__auto___13416 = G__13417;
continue;
} else {
}
break;
}

var G__13350 = args13348.length;
switch (G__13350) {
case 1:
return sablono.core.week_field13347.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field13347.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13348.length)].join('')));

}
});

sablono.core.week_field13347.cljs$core$IFn$_invoke$arity$1 = (function (name__13176__auto__){
return sablono.core.week_field13347.cljs$core$IFn$_invoke$arity$2(name__13176__auto__,null);
});

sablono.core.week_field13347.cljs$core$IFn$_invoke$arity$2 = (function (name__13176__auto__,value__13177__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__13176__auto__,value__13177__auto__);
});

sablono.core.week_field13347.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field13347);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box13419 = (function sablono$core$check_box13419(var_args){
var args13420 = [];
var len__7484__auto___13423 = arguments.length;
var i__7485__auto___13424 = (0);
while(true){
if((i__7485__auto___13424 < len__7484__auto___13423)){
args13420.push((arguments[i__7485__auto___13424]));

var G__13425 = (i__7485__auto___13424 + (1));
i__7485__auto___13424 = G__13425;
continue;
} else {
}
break;
}

var G__13422 = args13420.length;
switch (G__13422) {
case 1:
return sablono.core.check_box13419.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box13419.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box13419.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13420.length)].join('')));

}
});

sablono.core.check_box13419.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box13419.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box13419.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box13419.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box13419.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6409__auto__ = value;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box13419.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box13419);
/**
 * Creates a radio button.
 */
sablono.core.radio_button13427 = (function sablono$core$radio_button13427(var_args){
var args13428 = [];
var len__7484__auto___13431 = arguments.length;
var i__7485__auto___13432 = (0);
while(true){
if((i__7485__auto___13432 < len__7484__auto___13431)){
args13428.push((arguments[i__7485__auto___13432]));

var G__13433 = (i__7485__auto___13432 + (1));
i__7485__auto___13432 = G__13433;
continue;
} else {
}
break;
}

var G__13430 = args13428.length;
switch (G__13430) {
case 1:
return sablono.core.radio_button13427.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button13427.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button13427.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13428.length)].join('')));

}
});

sablono.core.radio_button13427.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button13427.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button13427.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button13427.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button13427.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__6409__auto__ = value;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button13427.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button13427);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__13436 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__13436);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options13437 = (function sablono$core$select_options13437(coll){
var iter__7189__auto__ = (function sablono$core$select_options13437_$_iter__13456(s__13457){
return (new cljs.core.LazySeq(null,(function (){
var s__13457__$1 = s__13457;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13457__$1);
if(temp__4657__auto__){
var s__13457__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13457__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__13457__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__13459 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__13458 = (0);
while(true){
if((i__13458 < size__7188__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__13458);
cljs.core.chunk_append(b__13459,((cljs.core.sequential_QMARK_(x))?(function (){var vec__13468 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13468,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13468,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13468,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options13437(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__13474 = (i__13458 + (1));
i__13458 = G__13474;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13459),sablono$core$select_options13437_$_iter__13456(cljs.core.chunk_rest(s__13457__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13459),null);
}
} else {
var x = cljs.core.first(s__13457__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__13471 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13471,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13471,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13471,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options13437(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options13437_$_iter__13456(cljs.core.rest(s__13457__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options13437);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down13475 = (function sablono$core$drop_down13475(var_args){
var args13476 = [];
var len__7484__auto___13479 = arguments.length;
var i__7485__auto___13480 = (0);
while(true){
if((i__7485__auto___13480 < len__7484__auto___13479)){
args13476.push((arguments[i__7485__auto___13480]));

var G__13481 = (i__7485__auto___13480 + (1));
i__7485__auto___13480 = G__13481;
continue;
} else {
}
break;
}

var G__13478 = args13476.length;
switch (G__13478) {
case 2:
return sablono.core.drop_down13475.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down13475.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13476.length)].join('')));

}
});

sablono.core.drop_down13475.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down13475.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down13475.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down13475.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down13475);
/**
 * Creates a text area element.
 */
sablono.core.text_area13483 = (function sablono$core$text_area13483(var_args){
var args13484 = [];
var len__7484__auto___13487 = arguments.length;
var i__7485__auto___13488 = (0);
while(true){
if((i__7485__auto___13488 < len__7484__auto___13487)){
args13484.push((arguments[i__7485__auto___13488]));

var G__13489 = (i__7485__auto___13488 + (1));
i__7485__auto___13488 = G__13489;
continue;
} else {
}
break;
}

var G__13486 = args13484.length;
switch (G__13486) {
case 1:
return sablono.core.text_area13483.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area13483.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13484.length)].join('')));

}
});

sablono.core.text_area13483.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area13483.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area13483.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6409__auto__ = value;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area13483.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area13483);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label13491 = (function sablono$core$label13491(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label13491);
/**
 * Creates a submit button.
 */
sablono.core.submit_button13492 = (function sablono$core$submit_button13492(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button13492);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button13493 = (function sablono$core$reset_button13493(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button13493);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to13494 = (function sablono$core$form_to13494(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13504 = arguments.length;
var i__7485__auto___13505 = (0);
while(true){
if((i__7485__auto___13505 < len__7484__auto___13504)){
args__7491__auto__.push((arguments[i__7485__auto___13505]));

var G__13506 = (i__7485__auto___13505 + (1));
i__7485__auto___13505 = G__13506;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to13494.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

sablono.core.form_to13494.cljs$core$IFn$_invoke$arity$variadic = (function (p__13497,body){
var vec__13498 = p__13497;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13498,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13498,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__13501 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__13502 = "_method";
var G__13503 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__13501,G__13502,G__13503) : sablono.core.hidden_field.call(null,G__13501,G__13502,G__13503));
})()], null)),body));
});

sablono.core.form_to13494.cljs$lang$maxFixedArity = (1);

sablono.core.form_to13494.cljs$lang$applyTo = (function (seq13495){
var G__13496 = cljs.core.first(seq13495);
var seq13495__$1 = cljs.core.next(seq13495);
return sablono.core.form_to13494.cljs$core$IFn$_invoke$arity$variadic(G__13496,seq13495__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to13494);
