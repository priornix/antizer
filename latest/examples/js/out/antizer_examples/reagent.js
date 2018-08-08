// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('antizer_examples.reagent');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('antizer.reagent');
goog.require('antizer_examples.common');
goog.require('reagent.core');
antizer_examples.reagent.auto_complete = (function antizer_examples$reagent$auto_complete(){
var data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
return ((function (data){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,["Autocomplete"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.auto_complete,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"80%"], null),cljs.core.cst$kw$dataSource,cljs.core.deref(data),cljs.core.cst$kw$on_DASH_search,((function (data){
return (function (x){
return cljs.core.reset_BANG_(data,((cljs.core.empty_QMARK_(x))?cljs.core.PersistentVector.EMPTY:cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.iterate(((function (data){
return (function (p1__18289_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18289_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.reverse(p1__18289_SHARP_))].join('');
});})(data))
,x))));
});})(data))
,cljs.core.cst$kw$placeholder,"Enter something"], null)], null)], null);
});
;})(data))
});
antizer_examples.reagent.avatar = (function antizer_examples$reagent$avatar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$avatar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Avatar"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.avatar,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#87d068"], null),cljs.core.cst$kw$icon,"user",cljs.core.cst$kw$class,"va-middle"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.avatar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#f56a00",cljs.core.cst$kw$background_DASH_color,"#fde3cf"], null),cljs.core.cst$kw$class,"va-middle"], null),"U"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.avatar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#ffbf00"], null),cljs.core.cst$kw$class,"va-middle"], null),"John"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.badge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$count,(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.avatar,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#108ee9"], null),cljs.core.cst$kw$shape,"square",cljs.core.cst$kw$icon,"user"], null)], null)], null)], null)], null);
});
antizer_examples.reagent.buttons = (function antizer_examples$reagent$buttons(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$example_DASH_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Buttons"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"primary"], null),"Primary"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,"Default"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"danger"], null),"Warning"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"shopping-cart",cljs.core.cst$kw$type,"primary"], null),"With icon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"edit",cljs.core.cst$kw$type,"primary"], null)], null)], null);
});
antizer_examples.reagent.card = (function antizer_examples$reagent$card(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Cards"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.card,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Title",cljs.core.cst$kw$bordered,true,cljs.core.cst$kw$class,"card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Not the usual lorem ipsum"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.card,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$bordered,true,cljs.core.cst$kw$class,"card-photo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"https://unsplash.it/330/120/?random"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$span,(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Please rate me"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$span,(12)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.rate], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.card,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"300"], null),cljs.core.cst$kw$cover,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$alt,"example",cljs.core.cst$kw$src,"https://unsplash.it/400/300/?random"], null)], null)),cljs.core.cst$kw$actions,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"setting"], null)], null)),reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"edit"], null)], null)),reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"ellipsis"], null)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.card_meta,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$avatar,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.avatar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"https://unsplash.it/40/40/?random"], null)], null)),cljs.core.cst$kw$title,"Card title",cljs.core.cst$kw$description,"This is the description"], null)], null)], null)], null);
});
antizer_examples.reagent.carousel = (function antizer_examples$reagent$carousel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Carousel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.carousel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$autoplay,true,cljs.core.cst$kw$dots,true], null),(function (){var iter__9404__auto__ = (function antizer_examples$reagent$carousel_$_iter__18290(s__18291){
return (new cljs.core.LazySeq(null,(function (){
var s__18291__$1 = s__18291;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18291__$1);
if(temp__5457__auto__){
var s__18291__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18291__$2)){
var c__9402__auto__ = cljs.core.chunk_first(s__18291__$2);
var size__9403__auto__ = cljs.core.count(c__9402__auto__);
var b__18293 = cljs.core.chunk_buffer(size__9403__auto__);
if((function (){var i__18292 = (0);
while(true){
if((i__18292 < size__9403__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9402__auto__,i__18292);
cljs.core.chunk_append(b__18293,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,["https://unsplash.it/400/300/?random=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null)], null));

var G__18294 = (i__18292 + (1));
i__18292 = G__18294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18293),antizer_examples$reagent$carousel_$_iter__18290(cljs.core.chunk_rest(s__18291__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18293),null);
}
} else {
var i = cljs.core.first(s__18291__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,["https://unsplash.it/400/300/?random=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null)], null),antizer_examples$reagent$carousel_$_iter__18290(cljs.core.rest(s__18291__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9404__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})()], null)], null);
});
antizer_examples.reagent.add_actions_column = (function antizer_examples$reagent$add_actions_column(columns,data_atom){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(columns,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Actions",cljs.core.cst$kw$render,(function (p1__18296_SHARP_,p2__18295_SHARP_){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$icon,"delete",cljs.core.cst$kw$type,"danger",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(data_atom,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p2__18295_SHARP_),"id"),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.deref(data_atom)));
})], null)], null));
})], null));
});
antizer_examples.reagent.datatable = (function antizer_examples$reagent$datatable(){
var data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(antizer_examples.common.people);
return ((function (data){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Data Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.table,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$columns,antizer_examples.reagent.add_actions_column(antizer_examples.common.columns,data),cljs.core.cst$kw$dataSource,cljs.core.deref(data),cljs.core.cst$kw$pagination,antizer_examples.common.pagination,cljs.core.cst$kw$row_DASH_key,"id",cljs.core.cst$kw$row_DASH_selection,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (data){
return (function (p1__18298_SHARP_,p2__18297_SHARP_){
var selected = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p2__18297_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["You have selected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,selected))].join('')], 0));
});})(data))
], null)], null)], null)], null);
});
;})(data))
});
antizer_examples.reagent.user_form = (function antizer_examples$reagent$user_form(display_buttons_QMARK_){
return (function (props){
var form = antizer.reagent.get_form();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$layout,"horizontal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Name"], null)], 0)),antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4(form,"name",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rules,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,true], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.input], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Email"], null)], 0)),antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4(form,"email",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rules,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,true], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"email"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.input], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Address"], null)], 0)),antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4(form,"address",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$initial_DASH_value,"Some initial value",cljs.core.cst$kw$rules,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,true], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.input], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Years of Experience"], null)], 0)),antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4(form,"experience",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rules,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,true], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.radio_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.radio,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(1)], null),"1-10"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.radio,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(10)], null),"10-30"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.radio,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(30)], null),"30-50"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.radio,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(50)], null),"> 50"], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Start Date"], null)], 0)),antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4(form,"date",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$initial_DASH_value,moment(),cljs.core.cst$kw$rules,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,true], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.date_picker,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$format,"MMM Do YYYY"], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Accept Terms?"], null)], 0)),antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3(form,"accept-terms",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.switch$], null))], null),(cljs.core.truth_(display_buttons_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrapper_DASH_col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,(6)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$span,(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"primary",cljs.core.cst$kw$on_DASH_click,((function (form){
return (function (){
return antizer.reagent.validate_fields(form);
});})(form))
], null),"Submit"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (form){
return (function (){
return antizer.reagent.reset_fields(form);
});})(form))
], null),"Reset"], null)], null)], null)], null):null)], null);
});
});
antizer_examples.reagent.form_example = (function antizer_examples$reagent$form_example(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Form"], null),antizer.reagent.create_form(antizer_examples.reagent.user_form(true))], null);
});
antizer_examples.reagent.localization = (function antizer_examples$reagent$localization(){
var locale_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("en_US");
return ((function (locale_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.locale_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,antizer.reagent.locales(cljs.core.deref(locale_atom))], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Localization"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Choose a language:",new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$default_DASH_value,"en_US",cljs.core.cst$kw$on_DASH_change,((function (locale_atom){
return (function (p1__18299_SHARP_){
return antizer_examples.common.set_locale(p1__18299_SHARP_,locale_atom);
});})(locale_atom))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"en_US"], null),"English"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"es_ES"], null),"Espa\u00F1ol"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"de_DE"], null),"Deutsch"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"ru_RU"], null),"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"zh_CN"], null),"\u4E2D\u6587"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"ja_JP"], null),"\u65E5\u672C\u8A9E"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"tlh",cljs.core.cst$kw$disabled,true], null),"Klingon"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.pagination,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$total,(40),cljs.core.cst$kw$show_DASH_size_DASH_changer,true], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.date_picker,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$format,"ddd MMM Do YYYY",cljs.core.cst$kw$default_DASH_value,moment(),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"60%"], null),cljs.core.cst$kw$show_DASH_today,false], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.time_picker,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"60%"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.calendar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fullscreen,false,cljs.core.cst$kw$default_DASH_value,moment()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$columns,antizer_examples.common.columns], null)], null)], null)], null);
});
;})(locale_atom))
});
antizer_examples.reagent.messages = (function antizer_examples$reagent$messages(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$example_DASH_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Messages"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Normal message"], 0));
})], null),"Normal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Success message"], 0));
})], null),"Success"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Warning message"], 0));
})], null),"Warning"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error message"], 0));
})], null),"Error"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This message will disappear in 10 seconds",(10)], 0));
})], null),"Timed"], null)], null);
});
antizer_examples.reagent.modal = (function antizer_examples$reagent$modal(){
var modal1 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var modal_form = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (modal1,modal_form){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$example_DASH_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Modal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_(modal1,true);
});})(modal1,modal_form))
], null),"Modal Dialog"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.modal,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$visible,cljs.core.deref(modal1),cljs.core.cst$kw$title,"Title of modal",cljs.core.cst$kw$on_DASH_ok,((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_(modal1,false);
});})(modal1,modal_form))
,cljs.core.cst$kw$on_DASH_cancel,((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_(modal1,false);
});})(modal1,modal_form))
], null),reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Some content 1"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (modal1,modal_form){
return (function (){
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Are you sure?",cljs.core.cst$kw$content,"Some content"], null)], 0));
});})(modal1,modal_form))
], null),"Confirmation Modal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_(modal_form,true);
});})(modal1,modal_form))
], null),"Modal Form"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.modal,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$visible,cljs.core.deref(modal_form),cljs.core.cst$kw$title,"Modal Form",cljs.core.cst$kw$width,(600),cljs.core.cst$kw$on_DASH_ok,((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_(modal_form,false);
});})(modal1,modal_form))
,cljs.core.cst$kw$on_DASH_cancel,((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_(modal_form,false);
});})(modal1,modal_form))
], null),antizer.reagent.create_form(antizer_examples.reagent.user_form(false))], null)], null);
});
;})(modal1,modal_form))
});
antizer_examples.reagent.notifications = (function antizer_examples$reagent$notifications(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$example_DASH_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Notifications"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Timed Notification",cljs.core.cst$kw$description,"This notification will close after 4.5 seconds"], null)], 0));
})], null),"Notification"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var key = cljs.core.random_uuid();
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$message,"Popup Notification",cljs.core.cst$kw$duration,(0),cljs.core.cst$kw$btn,reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"primary",cljs.core.cst$kw$on_DASH_click,((function (key){
return (function (){
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));
});})(key))
], null),"Click to dismiss"], null)),cljs.core.cst$kw$key,key,cljs.core.cst$kw$description,"This notification will not close until it is dismissed"], null)], 0));
})], null),"Popup Notification"], null)], null);
});
antizer_examples.reagent.progress = (function antizer_examples$reagent$progress(){
var percent = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((50));
return ((function (percent){
return (function (){
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$progress,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Progress"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.progress,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"circle",cljs.core.cst$kw$percent,cljs.core.deref(percent),cljs.core.cst$kw$status,status], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"plus",cljs.core.cst$kw$on_DASH_click,((function (operate,status,percent){
return (function (){
return operate(cljs.core.cst$kw$plus);
});})(operate,status,percent))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$icon,"minus",cljs.core.cst$kw$on_DASH_click,((function (operate,status,percent){
return (function (){
return operate(cljs.core.cst$kw$minus);
});})(operate,status,percent))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.progress,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$percent,cljs.core.deref(percent),cljs.core.cst$kw$status,status,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"42%"], null)], null)], null)], null);
});
;})(percent))
});
antizer_examples.reagent.timeline = (function antizer_examples$reagent$timeline(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Timeline"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.timeline,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.timeline_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null),"6th June Project created"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.timeline_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"blue"], null),"8th June Initial prototype done"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.timeline_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"green"], null),"26th June Final Release"], null)], null)], null);
});
antizer_examples.reagent.tooltip = (function antizer_examples$reagent$tooltip(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$example_DASH_button,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Tooltips and Popups ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,"Found me!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"question-circle-o",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,(13)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,"Tooltip"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,"Tooltip"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.popover,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$content,"Dum dee dee dum dee dee dum",cljs.core.cst$kw$title,"Deedee dum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,"Popover"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.popconfirm,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Are you sure?",cljs.core.cst$kw$on_DASH_confirm,(function (){
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["You clicked OK"], 0));
}),cljs.core.cst$kw$on_DASH_cancel,(function (){
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["You clicked Cancel"], 0));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,"Click to confirm"], null)], null)], null);
});
antizer_examples.reagent.tree = (function antizer_examples$reagent$tree(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Tree"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$checkable,true,cljs.core.cst$kw$default_DASH_expanded_DASH_keys,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["functional","clr","jvm","javascript","nodejs"], null),cljs.core.cst$kw$default_DASH_checked_DASH_keys,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure","clojure-clr","cljs","lumo","planck"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Functional Languages",cljs.core.cst$kw$key,"functional"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"CLR",cljs.core.cst$kw$key,"clr"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Clojure CLR",cljs.core.cst$kw$key,"clojure-clr"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Haskell",cljs.core.cst$kw$key,"haskell"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"JVM",cljs.core.cst$kw$key,"jvm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Clojure",cljs.core.cst$kw$key,"clojure"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Frege",cljs.core.cst$kw$key,"frege"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Scala",cljs.core.cst$kw$disable_DASH_checkbox,true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"JavaScript Engine",cljs.core.cst$kw$key,"javascript"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"ClojureScript",cljs.core.cst$kw$key,"cljs"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Node.js",cljs.core.cst$kw$key,"nodejs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Lumo",cljs.core.cst$kw$key,"lumo"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Planck",cljs.core.cst$kw$key,"planck"], null)], null)], null)], null)], null);
});
/**
 * Render each example within a bordered box
 */
antizer_examples.reagent.render_example = (function antizer_examples$reagent$render_example(examples){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$span,(12)], null),(function (){var iter__9404__auto__ = (function antizer_examples$reagent$render_example_$_iter__18300(s__18301){
return (new cljs.core.LazySeq(null,(function (){
var s__18301__$1 = s__18301;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18301__$1);
if(temp__5457__auto__){
var s__18301__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18301__$2)){
var c__9402__auto__ = cljs.core.chunk_first(s__18301__$2);
var size__9403__auto__ = cljs.core.count(c__9402__auto__);
var b__18303 = cljs.core.chunk_buffer(size__9403__auto__);
if((function (){var i__18302 = (0);
while(true){
if((i__18302 < size__9403__auto__)){
var example = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9402__auto__,i__18302);
cljs.core.chunk_append(b__18303,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.random_uuid()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box_DASH_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example], null)], null)], null));

var G__18304 = (i__18302 + (1));
i__18302 = G__18304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18303),antizer_examples$reagent$render_example_$_iter__18300(cljs.core.chunk_rest(s__18301__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18303),null);
}
} else {
var example = cljs.core.first(s__18301__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.random_uuid()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box_DASH_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example], null)], null)], null),antizer_examples$reagent$render_example_$_iter__18300(cljs.core.rest(s__18301__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9404__auto__(examples);
})()], null);
});
antizer_examples.reagent.render_full_row = (function antizer_examples$reagent$render_full_row(example){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$span,(24)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.random_uuid()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box_DASH_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example], null)], null)], null)], null);
});
antizer_examples.reagent.content_area = (function antizer_examples$reagent$content_area(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout_content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"content-area"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$gutter,(12)], null),antizer_examples.reagent.render_example(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer_examples.reagent.carousel,antizer_examples.reagent.buttons,antizer_examples.reagent.messages,antizer_examples.reagent.tooltip,antizer_examples.reagent.notifications,antizer_examples.reagent.timeline,antizer_examples.reagent.tree,antizer_examples.reagent.progress], null)),antizer_examples.reagent.render_example(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer_examples.reagent.card,antizer_examples.reagent.auto_complete,antizer_examples.reagent.localization,antizer_examples.reagent.modal,antizer_examples.reagent.avatar], null)),antizer_examples.reagent.render_full_row(antizer_examples.reagent.form_example),antizer_examples.reagent.render_full_row(antizer_examples.reagent.datatable)], null)], null);
});
antizer_examples.reagent.side_menu = (function antizer_examples$reagent$side_menu(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$mode,"inline",cljs.core.cst$kw$theme,"dark",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$disabled,true], null),"Menu without icons"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,"Menu Item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_sub_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,"Sub Menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,"Item 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,"Item 2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$disabled,true], null),"Menu with Icons"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"home"], null)], null),"Menu Item"], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_sub_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"setting"], null)], null),"Sub Menu"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"user"], null)], null),"Item 1"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"notification"], null)], null),"Item 2"], null))], null)], null)], null);
});
antizer_examples.reagent.render_layout = (function antizer_examples$reagent$render_layout(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.locale_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,antizer.reagent.locales("en_US")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.affix,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout_header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"banner"], null),reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$span,(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$banner_DASH_header,"Antizer Reagent Example"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$span,(1),cljs.core.cst$kw$offset,(11)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/priornix/antizer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"banner-logo",cljs.core.cst$kw$type,"github"], null)], null)], null)], null)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout_sider,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer_examples.reagent.side_menu], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"60%"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer_examples.reagent.content_area], null)], null)], null)], null)], null);
});
});
antizer_examples.reagent.init_BANG_ = (function antizer_examples$reagent$init_BANG_(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer_examples.reagent.render_layout], null),document.getElementById("app"));
});
