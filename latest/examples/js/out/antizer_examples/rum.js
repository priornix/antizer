// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('antizer_examples.rum');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('antizer.rum');
goog.require('antizer_examples.common');
goog.require('rum.core');
antizer_examples.rum.auto_complete = rum.core.build_defcs((function (state){
var data = cljs.core.cst$kw$antizer_DASH_examples$rum_SLASH_data.cljs$core$IFn$_invoke$arity$1(state);
var G__18309 = "div";
var G__18310 = null;
var G__18311 = (function (){var attrs18308 = ["Autocomplete"].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h2",((cljs.core.map_QMARK_(attrs18308))?sablono.interpreter.attributes(attrs18308):null),((cljs.core.map_QMARK_(attrs18308))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18308)], null)));
})();
var G__18312 = sablono.interpreter.interpret(antizer.rum.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"80%"], null),cljs.core.cst$kw$dataSource,cljs.core.deref(data),cljs.core.cst$kw$on_DASH_search,((function (G__18309,G__18310,G__18311,data){
return (function (x){
return cljs.core.reset_BANG_(data,((cljs.core.empty_QMARK_(x))?cljs.core.PersistentVector.EMPTY:cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.iterate(((function (G__18309,G__18310,G__18311,data){
return (function (p1__18307_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18307_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.reverse(p1__18307_SHARP_))].join('');
});})(G__18309,G__18310,G__18311,data))
,x))));
});})(G__18309,G__18310,G__18311,data))
,cljs.core.cst$kw$placeholder,"Enter something"], null)], 0)));
return React.createElement(G__18309,G__18310,G__18311,G__18312);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$antizer_DASH_examples$rum_SLASH_data)], null),"auto-complete");
antizer_examples.rum.avatar = (function antizer_examples$rum$avatar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$avatar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Avatar"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,antizer.rum.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#87d068"], null),cljs.core.cst$kw$icon,"user",cljs.core.cst$kw$class,"va-middle"], null)], 0)),antizer.rum.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#f56a00",cljs.core.cst$kw$background_DASH_color,"#fde3cf"], null),cljs.core.cst$kw$class,"va-middle"], null),"U"], 0)),antizer.rum.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#ffbf00"], null),cljs.core.cst$kw$class,"va-middle"], null),"John"], 0)),antizer.rum.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$count,(10)], null),antizer.rum.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#108ee9"], null),cljs.core.cst$kw$shape,"square",cljs.core.cst$kw$icon,"user"], null)], 0))], 0))], null)], null);
});
antizer_examples.rum.buttons = (function antizer_examples$rum$buttons(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$example_DASH_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Buttons"], null),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"primary"], null),"Primary"], 0)),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Default"], 0)),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"danger"], null),"Warning"], 0)),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"shopping-cart",cljs.core.cst$kw$type,"primary"], null),"With icon"], 0)),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"edit",cljs.core.cst$kw$type,"primary"], null)], 0))], null);
});
antizer_examples.rum.card = (function antizer_examples$rum$card(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Cards"], null),antizer.rum.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Title",cljs.core.cst$kw$bordered,true,cljs.core.cst$kw$class,"card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Not the usual lorem ipsum"], null)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),antizer.rum.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$bordered,true,cljs.core.cst$kw$class,"card-photo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"https://unsplash.it/330/120/?random"], null)], null)], null),antizer.rum.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$span,(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Please rate me"], null)], null)], 0)),antizer.rum.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$span,(12)], null),antizer.rum.rate()], 0))], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),antizer.rum.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"300"], null),cljs.core.cst$kw$cover,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$alt,"example",cljs.core.cst$kw$src,"https://unsplash.it/400/300/?random"], null)], null),cljs.core.cst$kw$actions,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.rum.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"setting"], null)], 0)),antizer.rum.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"edit"], null)], 0)),antizer.rum.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"ellipsis"], null)], 0))], null)], null),antizer.rum.card_meta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$avatar,antizer.rum.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"https://unsplash.it/40/40/?random"], null)], 0)),cljs.core.cst$kw$title,"Card Title",cljs.core.cst$kw$description,"This is the description"], null)], 0))], 0))], null);
});
antizer_examples.rum.carousel = (function antizer_examples$rum$carousel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Carousel"], null),antizer.rum.carousel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$autoplay,true,cljs.core.cst$kw$dots,true], null),(function (){var iter__9404__auto__ = (function antizer_examples$rum$carousel_$_iter__18313(s__18314){
return (new cljs.core.LazySeq(null,(function (){
var s__18314__$1 = s__18314;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18314__$1);
if(temp__5457__auto__){
var s__18314__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18314__$2)){
var c__9402__auto__ = cljs.core.chunk_first(s__18314__$2);
var size__9403__auto__ = cljs.core.count(c__9402__auto__);
var b__18316 = cljs.core.chunk_buffer(size__9403__auto__);
if((function (){var i__18315 = (0);
while(true){
if((i__18315 < size__9403__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9402__auto__,i__18315);
cljs.core.chunk_append(b__18316,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,["https://unsplash.it/400/300/?random=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null)], null));

var G__18317 = (i__18315 + (1));
i__18315 = G__18317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18316),antizer_examples$rum$carousel_$_iter__18313(cljs.core.chunk_rest(s__18314__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18316),null);
}
} else {
var i = cljs.core.first(s__18314__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,["https://unsplash.it/400/300/?random=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null)], null),antizer_examples$rum$carousel_$_iter__18313(cljs.core.rest(s__18314__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9404__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})()], 0))], null);
});
antizer_examples.rum.add_actions_column = (function antizer_examples$rum$add_actions_column(columns,data_atom){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(columns,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Actions",cljs.core.cst$kw$render,(function (p1__18319_SHARP_,p2__18318_SHARP_){
return antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$icon,"delete",cljs.core.cst$kw$type,"danger",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(data_atom,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p2__18318_SHARP_),"id"),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.deref(data_atom)));
})], null)], 0));
})], null));
});
antizer_examples.rum.datatable = rum.core.build_defcs((function (state){
var data = cljs.core.cst$kw$antizer_DASH_examples$rum_SLASH_data.cljs$core$IFn$_invoke$arity$1(state);
var G__18324 = "div";
var G__18325 = null;
var G__18326 = React.createElement("h2",null,"Data Table");
var G__18327 = sablono.interpreter.interpret(antizer.rum.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$columns,antizer_examples.rum.add_actions_column(antizer_examples.common.columns,data),cljs.core.cst$kw$dataSource,cljs.core.deref(data),cljs.core.cst$kw$pagination,antizer_examples.common.pagination,cljs.core.cst$kw$row_DASH_key,"id",cljs.core.cst$kw$row_DASH_selection,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (G__18324,G__18325,G__18326,data){
return (function (p1__18321_SHARP_,p2__18320_SHARP_){
var selected = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p2__18320_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
return antizer.rum.message_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["You have selected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,selected))].join('')], 0));
});})(G__18324,G__18325,G__18326,data))
], null)], null)], 0)));
return React.createElement(G__18324,G__18325,G__18326,G__18327);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(antizer_examples.common.people,cljs.core.cst$kw$antizer_DASH_examples$rum_SLASH_data)], null),"datatable");
antizer_examples.rum.user_form = rum.core.build_defcs((function (state){
var form = antizer.rum.get_form(state);
return sablono.interpreter.interpret(antizer.rum.form.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$layout,"horizontal"], null),antizer.rum.form_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Name"], null)], 0)),antizer.rum.decorate_field.cljs$core$IFn$_invoke$arity$4(form,"name",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rules,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,true], null)], null)], null),antizer.rum.input())], 0)),antizer.rum.form_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Email"], null)], 0)),antizer.rum.decorate_field.cljs$core$IFn$_invoke$arity$4(form,"email",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rules,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,true], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"email"], null)], null)], null),antizer.rum.input())], 0)),antizer.rum.form_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Address"], null)], 0)),antizer.rum.decorate_field.cljs$core$IFn$_invoke$arity$4(form,"address",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$initial_DASH_value,"Some initial value",cljs.core.cst$kw$rules,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,true], null)], null)], null),antizer.rum.input())], 0)),antizer.rum.form_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Years of Experience"], null)], 0)),antizer.rum.decorate_field.cljs$core$IFn$_invoke$arity$4(form,"experience",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rules,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,true], null)], null)], null),antizer.rum.radio_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer.rum.radio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(1)], null),"1-10"], 0)),antizer.rum.radio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(10)], null),"10-30"], 0)),antizer.rum.radio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(30)], null),"30-50"], 0)),antizer.rum.radio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(50)], null),"> 50"], 0))], 0)))], 0)),antizer.rum.form_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Start Date"], null)], 0)),antizer.rum.decorate_field.cljs$core$IFn$_invoke$arity$4(form,"date",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$initial_DASH_value,moment(),cljs.core.cst$kw$rules,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,true], null)], null)], null),antizer.rum.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$format,"MMM Do YYYY"], null)], 0)))], 0)),antizer.rum.form_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Accept Terms?"], null)], 0)),antizer.rum.decorate_field.cljs$core$IFn$_invoke$arity$3(form,"accept-terms",antizer.rum.switch$())], 0)),((cljs.core.not(cljs.core.cst$kw$hide_DASH_buttons_QMARK_.cljs$core$IFn$_invoke$arity$1(state)))?antizer.rum.form_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrapper_DASH_col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,(6)], null)], null),antizer.rum.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$span,(4)], null),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"primary",cljs.core.cst$kw$on_DASH_click,((function (form){
return (function (){
return antizer.rum.validate_fields(form);
});})(form))
], null),"Submit"], 0))], 0)),antizer.rum.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,(1)], null),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (form){
return (function (){
return antizer.rum.reset_fields(form);
});})(form))
], null),"Reset"], 0))], 0))], 0)):null)], 0)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$init,(function (state,props){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0))], 0));
})], null)], null),"user-form");
antizer_examples.rum.form_example = (function antizer_examples$rum$form_example(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Form"], null),antizer.rum.create_form(antizer_examples.rum.user_form)], null);
});
antizer_examples.rum.localization = rum.core.build_defcs((function (state){
var locale = cljs.core.cst$kw$antizer_DASH_examples$rum_SLASH_locale.cljs$core$IFn$_invoke$arity$1(state);
return sablono.interpreter.interpret(antizer.rum.locale_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,antizer.rum.locales(cljs.core.deref(locale))], null),antizer.rum.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Localization"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Choose a language:",antizer.rum.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$default_DASH_value,"en_US",cljs.core.cst$kw$on_DASH_change,((function (locale){
return (function (p1__18328_SHARP_){
return antizer_examples.common.set_locale(p1__18328_SHARP_,locale);
});})(locale))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"10px"], null)], null),antizer.rum.select_option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"en_US"], null),"English"], 0)),antizer.rum.select_option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"es_ES"], null),"Espa\u00F1ol"], 0)),antizer.rum.select_option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"de_DE"], null),"Deutsch"], 0)),antizer.rum.select_option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"ru_RU"], null),"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"], 0)),antizer.rum.select_option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"zh_CN"], null),"\u4E2D\u6587"], 0)),antizer.rum.select_option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"ja_JP"], null),"\u65E5\u672C\u8A9E"], 0)),antizer.rum.select_option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"tlh",cljs.core.cst$kw$disabled,true], null),"Klingon"], 0))], 0))], null),antizer.rum.pagination.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$total,(40),cljs.core.cst$kw$show_DASH_size_DASH_changer,true], null)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),antizer.rum.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$format,"ddd MMM Do YYYY",cljs.core.cst$kw$default_DASH_value,moment(),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"60%"], null),cljs.core.cst$kw$show_DASH_today,false], null)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),antizer.rum.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"60%"], null)], null)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),antizer.rum.calendar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fullscreen,false,cljs.core.cst$kw$default_DASH_value,moment()], null)], 0)),antizer.rum.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$columns,antizer_examples.common.columns], null)], 0))], 0))], 0)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2("en_US",cljs.core.cst$kw$antizer_DASH_examples$rum_SLASH_locale)], null),"localization");
antizer_examples.rum.messages = (function antizer_examples$rum$messages(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$example_DASH_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Messages"], null),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return antizer.rum.message_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Normal message"], 0));
})], null),"Normal"], 0)),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return antizer.rum.message_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Success message"], 0));
})], null),"Success"], 0)),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return antizer.rum.message_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Warning message"], 0));
})], null),"Warning"], 0)),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return antizer.rum.message_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error message"], 0));
})], null),"Error"], 0)),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return antizer.rum.message_loading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This message will disappear in 10 seconds",(10)], 0));
})], null),"Timed"], 0))], null);
});
antizer_examples.rum.modal = rum.core.build_defcs((function (state){
var modal1 = cljs.core.cst$kw$antizer_DASH_examples$rum_SLASH_modal1.cljs$core$IFn$_invoke$arity$1(state);
var modal_form = cljs.core.cst$kw$antizer_DASH_examples$rum_SLASH_modal_DASH_form.cljs$core$IFn$_invoke$arity$1(state);
var G__18331 = "div";
var G__18332 = ({"className": "example-button"});
var G__18333 = React.createElement("h2",null,"Modal");
var G__18334 = sablono.interpreter.interpret(antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (G__18331,G__18332,G__18333,modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_(modal1,true);
});})(G__18331,G__18332,G__18333,modal1,modal_form))
], null),"Modal Dialog"], 0)));
var G__18335 = sablono.interpreter.interpret(antizer.rum.modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$visible,cljs.core.deref(modal1),cljs.core.cst$kw$title,"Title of modal",cljs.core.cst$kw$on_DASH_ok,((function (G__18331,G__18332,G__18333,G__18334,modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_(modal1,false);
});})(G__18331,G__18332,G__18333,G__18334,modal1,modal_form))
,cljs.core.cst$kw$on_DASH_cancel,((function (G__18331,G__18332,G__18333,G__18334,modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_(modal1,false);
});})(G__18331,G__18332,G__18333,G__18334,modal1,modal_form))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Some content 1"], null)], 0)));
var G__18336 = sablono.interpreter.interpret(antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (G__18331,G__18332,G__18333,G__18334,G__18335,modal1,modal_form){
return (function (){
return antizer.rum.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Are you sure?",cljs.core.cst$kw$content,"Some content"], null)], 0));
});})(G__18331,G__18332,G__18333,G__18334,G__18335,modal1,modal_form))
], null),"Confirmation Modal"], 0)));
var G__18337 = sablono.interpreter.interpret(antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (G__18331,G__18332,G__18333,G__18334,G__18335,G__18336,modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_(modal_form,true);
});})(G__18331,G__18332,G__18333,G__18334,G__18335,G__18336,modal1,modal_form))
], null),"Modal Form"], 0)));
var G__18338 = sablono.interpreter.interpret(antizer.rum.modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$visible,cljs.core.deref(modal_form),cljs.core.cst$kw$title,"Modal Form",cljs.core.cst$kw$width,(600),cljs.core.cst$kw$on_DASH_ok,((function (G__18331,G__18332,G__18333,G__18334,G__18335,G__18336,G__18337,modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_(modal_form,false);
});})(G__18331,G__18332,G__18333,G__18334,G__18335,G__18336,G__18337,modal1,modal_form))
,cljs.core.cst$kw$on_DASH_cancel,((function (G__18331,G__18332,G__18333,G__18334,G__18335,G__18336,G__18337,modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_(modal_form,false);
});})(G__18331,G__18332,G__18333,G__18334,G__18335,G__18336,G__18337,modal1,modal_form))
], null),antizer.rum.create_form.cljs$core$IFn$_invoke$arity$variadic(antizer_examples.rum.user_form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_buttons_QMARK_,true], null)], 0))], 0)));
return React.createElement(G__18331,G__18332,G__18333,G__18334,G__18335,G__18336,G__18337,G__18338);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(false,cljs.core.cst$kw$antizer_DASH_examples$rum_SLASH_modal1),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,cljs.core.cst$kw$antizer_DASH_examples$rum_SLASH_modal_DASH_form)], null),"modal");
antizer_examples.rum.notifications = (function antizer_examples$rum$notifications(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$example_DASH_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Notifications"], null),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return antizer.rum.notification_open.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Timed Notification",cljs.core.cst$kw$description,"This notification will close after 4.5 seconds"], null)], 0));
})], null),"Notification"], 0)),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var key = cljs.core.random_uuid();
return antizer.rum.notification_open.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$message,"Popup Notification",cljs.core.cst$kw$duration,(0),cljs.core.cst$kw$btn,antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"primary",cljs.core.cst$kw$on_DASH_click,((function (key){
return (function (){
return antizer.rum.notification_close.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));
});})(key))
], null),"Click to dismiss"], 0)),cljs.core.cst$kw$key,key,cljs.core.cst$kw$description,"This notification will not close until it is dismissed"], null)], 0));
})], null),"Popup Notification"], 0))], null);
});
antizer_examples.rum.progress = rum.core.build_defcs((function (state){
var percent = cljs.core.cst$kw$antizer_DASH_examples$rum_SLASH_percent.cljs$core$IFn$_invoke$arity$1(state);
var operate = ((function (percent){
return (function (operation){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$plus,operation)){
if((cljs.core.deref(percent) < (100))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(percent,cljs.core._PLUS_,(10));
} else {
return null;
}
} else {
if((cljs.core.deref(percent) >= (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(percent,cljs.core._,(10));
} else {
return null;
}
}
});})(percent))
;
var status = (((cljs.core.deref(percent) < (42)))?"exception":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(percent),(100)))?"success":"active"
));
var G__18341 = "div";
var G__18342 = ({"className": "progress"});
var G__18343 = React.createElement("h2",null,"Progress");
var G__18344 = sablono.interpreter.interpret(antizer.rum.progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"circle",cljs.core.cst$kw$percent,cljs.core.deref(percent),cljs.core.cst$kw$status,status], null)], 0)));
var G__18345 = sablono.interpreter.interpret(antizer.rum.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"plus",cljs.core.cst$kw$on_DASH_click,((function (G__18341,G__18342,G__18343,G__18344,percent,operate,status){
return (function (){
return operate(cljs.core.cst$kw$plus);
});})(G__18341,G__18342,G__18343,G__18344,percent,operate,status))
], null)], 0)),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"minus",cljs.core.cst$kw$on_DASH_click,((function (G__18341,G__18342,G__18343,G__18344,percent,operate,status){
return (function (){
return operate(cljs.core.cst$kw$minus);
});})(G__18341,G__18342,G__18343,G__18344,percent,operate,status))
], null)], 0))], 0)));
var G__18346 = sablono.interpreter.interpret(antizer.rum.progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$percent,cljs.core.deref(percent),cljs.core.cst$kw$status,status,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"42%"], null)], null)], 0)));
return React.createElement(G__18341,G__18342,G__18343,G__18344,G__18345,G__18346);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2((50),cljs.core.cst$kw$antizer_DASH_examples$rum_SLASH_percent)], null),"progress");
antizer_examples.rum.timeline = (function antizer_examples$rum$timeline(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Timeline"], null),antizer.rum.timeline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer.rum.timeline_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null),"6th June Project created"], 0)),antizer.rum.timeline_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"blue"], null),"8th June Initial prototype done"], 0)),antizer.rum.timeline_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"green"], null),"20th June Final release"], 0))], 0))], null);
});
antizer_examples.rum.tooltip = (function antizer_examples$rum$tooltip(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$example_DASH_button,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Tooltips and Popups ",antizer.rum.tooltip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,"Found me!"], null),antizer.rum.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"question-circle-o",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,(13)], null)], null)], 0))], 0))], null),antizer.rum.tooltip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,"Tooltip"], null),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tooltip"], 0))], 0)),antizer.rum.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$content,"Dum dee dee dum dee dee dum",cljs.core.cst$kw$title,"Deedee dum"], null),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Popover"], 0))], 0)),antizer.rum.popconfirm.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Are you sure?",cljs.core.cst$kw$on_DASH_confirm,(function (){
return antizer.rum.message_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["You clicked OK"], 0));
}),cljs.core.cst$kw$on_DASH_cancel,(function (){
return antizer.rum.message_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["You clicked Cancel"], 0));
})], null),antizer.rum.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Click to confirm"], 0))], 0))], null);
});
antizer_examples.rum.tree = (function antizer_examples$rum$tree(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Tree"], null),antizer.rum.tree.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$checkable,true,cljs.core.cst$kw$default_DASH_expanded_DASH_keys,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["functional","clr","jvm","javascript","nodejs"], null),cljs.core.cst$kw$default_DASH_checked_DASH_keys,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure","clojure-clr","cljs","lumo","planck"], null)], null),antizer.rum.tree_tree_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Functional Languages",cljs.core.cst$kw$key,"functional"], null),antizer.rum.tree_tree_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"CLR",cljs.core.cst$kw$key,"clr"], null),antizer.rum.tree_tree_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Clojure CLR",cljs.core.cst$kw$key,"clojure-clr"], null)], 0))], 0)),antizer.rum.tree_tree_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Haskell",cljs.core.cst$kw$key,"haskell"], null)], 0)),antizer.rum.tree_tree_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"JVM",cljs.core.cst$kw$key,"jvm"], null),antizer.rum.tree_tree_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Clojure",cljs.core.cst$kw$key,"clojure"], null)], 0)),antizer.rum.tree_tree_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Frege",cljs.core.cst$kw$key,"frege"], null)], 0)),antizer.rum.tree_tree_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Scala",cljs.core.cst$kw$disable_DASH_checkbox,true], null)], 0))], 0)),antizer.rum.tree_tree_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"JavaScript Engine",cljs.core.cst$kw$key,"javascript"], null),antizer.rum.tree_tree_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"ClojureScript",cljs.core.cst$kw$key,"cljs"], null)], 0))], 0)),antizer.rum.tree_tree_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Node.js",cljs.core.cst$kw$key,"nodejs"], null),antizer.rum.tree_tree_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Lumo",cljs.core.cst$kw$key,"lumo"], null)], 0))], 0)),antizer.rum.tree_tree_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Planck",cljs.core.cst$kw$key,"planck"], null)], 0))], 0))], 0))], null);
});
/**
 * Render each example within a bordered box
 */
antizer_examples.rum.render_example = (function antizer_examples$rum$render_example(examples){
return antizer.rum.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$span,(12)], null),(function (){var iter__9404__auto__ = (function antizer_examples$rum$render_example_$_iter__18347(s__18348){
return (new cljs.core.LazySeq(null,(function (){
var s__18348__$1 = s__18348;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18348__$1);
if(temp__5457__auto__){
var s__18348__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18348__$2)){
var c__9402__auto__ = cljs.core.chunk_first(s__18348__$2);
var size__9403__auto__ = cljs.core.count(c__9402__auto__);
var b__18350 = cljs.core.chunk_buffer(size__9403__auto__);
if((function (){var i__18349 = (0);
while(true){
if((i__18349 < size__9403__auto__)){
var example = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9402__auto__,i__18349);
cljs.core.chunk_append(b__18350,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.random_uuid()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box_DASH_content,(example.cljs$core$IFn$_invoke$arity$0 ? example.cljs$core$IFn$_invoke$arity$0() : example.call(null))], null)], null));

var G__18351 = (i__18349 + (1));
i__18349 = G__18351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18350),antizer_examples$rum$render_example_$_iter__18347(cljs.core.chunk_rest(s__18348__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18350),null);
}
} else {
var example = cljs.core.first(s__18348__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.random_uuid()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box_DASH_content,(example.cljs$core$IFn$_invoke$arity$0 ? example.cljs$core$IFn$_invoke$arity$0() : example.call(null))], null)], null),antizer_examples$rum$render_example_$_iter__18347(cljs.core.rest(s__18348__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9404__auto__(examples);
})()], 0));
});
antizer_examples.rum.render_full_row = (function antizer_examples$rum$render_full_row(example){
return antizer.rum.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$span,(24)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.random_uuid()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box_DASH_content,(example.cljs$core$IFn$_invoke$arity$0 ? example.cljs$core$IFn$_invoke$arity$0() : example.call(null))], null)], null)], 0));
});
antizer_examples.rum.content_area = (function antizer_examples$rum$content_area(){
return antizer.rum.layout_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"content-area"], null),antizer.rum.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$gutter,(12)], null),antizer_examples.rum.render_example(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer_examples.rum.carousel,antizer_examples.rum.buttons,antizer_examples.rum.messages,antizer_examples.rum.tooltip,antizer_examples.rum.notifications,antizer_examples.rum.timeline,antizer_examples.rum.tree,antizer_examples.rum.progress], null)),antizer_examples.rum.render_example(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer_examples.rum.card,antizer_examples.rum.auto_complete,antizer_examples.rum.localization,antizer_examples.rum.modal,antizer_examples.rum.avatar], null))], 0)),antizer_examples.rum.render_full_row(antizer_examples.rum.form_example),antizer_examples.rum.render_full_row(antizer_examples.rum.datatable)], 0));
});
antizer_examples.rum.side_menu = (function antizer_examples$rum$side_menu(){
return antizer.rum.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$mode,"inline",cljs.core.cst$kw$theme,cljs.core.cst$kw$dark,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"100%"], null)], null),antizer.rum.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$disabled,true], null),"Menu without icons"], 0)),antizer.rum.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Menu Item"], 0)),antizer.rum.menu_sub_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,"Sub Menu"], null),antizer.rum.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Item 1"], 0)),antizer.rum.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Item 2"], 0))], 0)),antizer.rum.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$disabled,true], null),"Menu with icons"], 0)),antizer.rum.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"s"], null),antizer.rum.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"home"], null)], 0)),"Menu Item"], null)], 0)),antizer.rum.menu_sub_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,antizer.rum.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"setting"], null)], 0)),"Sub Menu"], null)], null),antizer.rum.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"s"], null),antizer.rum.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"user"], null)], 0)),"Item 1"], null)], 0)),antizer.rum.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"s"], null),antizer.rum.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"notification"], null)], 0)),"Item 2"], null)], 0))], 0))], 0));
});
antizer_examples.rum.render_layout = (function antizer_examples$rum$render_layout(){
return antizer.rum.locale_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,antizer.rum.locales("en_US")], null),antizer.rum.layout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer.rum.affix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer.rum.layout_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"banner"], null),antizer.rum.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer.rum.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$span,(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$banner_DASH_header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"layout"], null),"Antizer Rum Example"], null)], 0)),antizer.rum.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$span,(1),cljs.core.cst$kw$offset,(11)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://github.com/priornix/antizer",cljs.core.cst$kw$key,"link"], null),antizer.rum.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"banner-logo",cljs.core.cst$kw$type,"github"], null)], 0))], null)], 0))], 0))], 0))], 0)),antizer.rum.layout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer.rum.layout_sider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer_examples.rum.side_menu()], 0)),antizer.rum.layout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"60%"], null)], null),antizer_examples.rum.content_area()], 0))], 0))], 0))], 0));
});
antizer_examples.rum.init_BANG_ = (function antizer_examples$rum$init_BANG_(){
return rum.core.mount(antizer_examples.rum.render_layout(),document.getElementById("app"));
});
