// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('antizer.reagent');
goog.require('cljs.core');
goog.require('antizer.core');
goog.require('goog.object');
goog.require('reagent.core');
/**
 * Calls Form.create() decorator with the form to be created. form can be
 *  any hiccup form. Accepts the following options:
 * 
 *  :options - map of Form.create() options. Refer to: 
 *             https://ant.design/components/form/#Form.create(options) for
 *             details
 */
antizer.reagent.create_form = (function antizer$reagent$create_form(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15105 = arguments.length;
var i__7485__auto___15106 = (0);
while(true){
if((i__7485__auto___15106 < len__7484__auto___15105)){
args__7491__auto__.push((arguments[i__7485__auto___15106]));

var G__15107 = (i__7485__auto___15106 + (1));
i__7485__auto___15106 = G__15107;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__15102){
var map__15103 = p__15102;
var map__15103__$1 = ((((!((map__15103 == null)))?((((map__15103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15103):map__15103);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15103__$1,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$1(goog.object.getValueByKeys(antd,"Form","create").call(null,cljs.core.clj__GT_js(antizer.core.map_keys__GT_camel_case(options))).call(null,reagent.core.reactify_component(form)));
});

antizer.reagent.create_form.cljs$lang$maxFixedArity = (1);

antizer.reagent.create_form.cljs$lang$applyTo = (function (seq15100){
var G__15101 = cljs.core.first(seq15100);
var seq15100__$1 = cljs.core.next(seq15100);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic(G__15101,seq15100__$1);
});

/**
 * Returns the `form` created by Form.create(). This function must be called
 * from within the `form` component
 */
antizer.reagent.get_form = (function antizer$reagent$get_form(){
return cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(reagent.core.props(reagent.core.current_component()),cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)));
});
/**
 * Decorate a form field, corresponds to antd's getFieldDecorator() function
 * Arguments:
 * 
 * * form - the `form` object, obtained from `(get-form)`
 * * id - field identifier, supports nested fields format in string format
 * * options - the validation options for the field
 * * field - the input field element that the validation will be applied to
 * 
 * For more information about the validation options, please refer to: 
 * https://ant.design/components/form/#getFieldDecorator(id,-options)-parameters
 */
antizer.reagent.decorate_field = (function antizer$reagent$decorate_field(var_args){
var args15108 = [];
var len__7484__auto___15111 = arguments.length;
var i__7485__auto___15112 = (0);
while(true){
if((i__7485__auto___15112 < len__7484__auto___15111)){
args15108.push((arguments[i__7485__auto___15112]));

var G__15113 = (i__7485__auto___15112 + (1));
i__7485__auto___15112 = G__15113;
continue;
} else {
}
break;
}

var G__15110 = args15108.length;
switch (G__15110) {
case 3:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15108.length)].join('')));

}
});

antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3 = (function (form,id,field){
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4(form,id,cljs.core.PersistentArrayMap.EMPTY,field);
});

antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4 = (function (form,id,options,field){
var field_decorator = cljs.core.cst$kw$getFieldDecorator.cljs$core$IFn$_invoke$arity$1(form);
var params = cljs.core.clj__GT_js(antizer.core.map_keys__GT_camel_case(options));
return (field_decorator.cljs$core$IFn$_invoke$arity$2 ? field_decorator.cljs$core$IFn$_invoke$arity$2(id,params) : field_decorator.call(null,id,params)).call(null,reagent.core.as_element(field));
});

antizer.reagent.decorate_field.cljs$lang$maxFixedArity = 4;

antizer.reagent.get_field_decorator = (function antizer$reagent$get_field_decorator(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15141 = arguments.length;
var i__7485__auto___15142 = (0);
while(true){
if((i__7485__auto___15142 < len__7484__auto___15141)){
args__7491__auto__.push((arguments[i__7485__auto___15142]));

var G__15143 = (i__7485__auto___15142 + (1));
i__7485__auto___15142 = G__15143;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic = (function (form__14108__auto__,args__14109__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("getFieldDecorator").call(null,form__14108__auto__),args__14109__auto__);
});

antizer.reagent.get_field_decorator.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_decorator.cljs$lang$applyTo = (function (seq15115){
var G__15116 = cljs.core.first(seq15115);
var seq15115__$1 = cljs.core.next(seq15115);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic(G__15116,seq15115__$1);
});


antizer.reagent.get_field_error = (function antizer$reagent$get_field_error(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15144 = arguments.length;
var i__7485__auto___15145 = (0);
while(true){
if((i__7485__auto___15145 < len__7484__auto___15144)){
args__7491__auto__.push((arguments[i__7485__auto___15145]));

var G__15146 = (i__7485__auto___15145 + (1));
i__7485__auto___15145 = G__15146;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__14108__auto__,args__14109__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("getFieldError").call(null,form__14108__auto__),args__14109__auto__);
});

antizer.reagent.get_field_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_error.cljs$lang$applyTo = (function (seq15117){
var G__15118 = cljs.core.first(seq15117);
var seq15117__$1 = cljs.core.next(seq15117);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic(G__15118,seq15117__$1);
});


antizer.reagent.get_fields_error = (function antizer$reagent$get_fields_error(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15147 = arguments.length;
var i__7485__auto___15148 = (0);
while(true){
if((i__7485__auto___15148 < len__7484__auto___15147)){
args__7491__auto__.push((arguments[i__7485__auto___15148]));

var G__15149 = (i__7485__auto___15148 + (1));
i__7485__auto___15148 = G__15149;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__14108__auto__,args__14109__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("getFieldsError").call(null,form__14108__auto__),args__14109__auto__);
});

antizer.reagent.get_fields_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_error.cljs$lang$applyTo = (function (seq15119){
var G__15120 = cljs.core.first(seq15119);
var seq15119__$1 = cljs.core.next(seq15119);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic(G__15120,seq15119__$1);
});


antizer.reagent.get_field_value = (function antizer$reagent$get_field_value(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15150 = arguments.length;
var i__7485__auto___15151 = (0);
while(true){
if((i__7485__auto___15151 < len__7484__auto___15150)){
args__7491__auto__.push((arguments[i__7485__auto___15151]));

var G__15152 = (i__7485__auto___15151 + (1));
i__7485__auto___15151 = G__15152;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__14108__auto__,args__14109__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("getFieldValue").call(null,form__14108__auto__),args__14109__auto__);
});

antizer.reagent.get_field_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_value.cljs$lang$applyTo = (function (seq15121){
var G__15122 = cljs.core.first(seq15121);
var seq15121__$1 = cljs.core.next(seq15121);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic(G__15122,seq15121__$1);
});


antizer.reagent.get_fields_value = (function antizer$reagent$get_fields_value(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15153 = arguments.length;
var i__7485__auto___15154 = (0);
while(true){
if((i__7485__auto___15154 < len__7484__auto___15153)){
args__7491__auto__.push((arguments[i__7485__auto___15154]));

var G__15155 = (i__7485__auto___15154 + (1));
i__7485__auto___15154 = G__15155;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__14108__auto__,args__14109__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("getFieldsValue").call(null,form__14108__auto__),args__14109__auto__);
});

antizer.reagent.get_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_value.cljs$lang$applyTo = (function (seq15123){
var G__15124 = cljs.core.first(seq15123);
var seq15123__$1 = cljs.core.next(seq15123);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__15124,seq15123__$1);
});


antizer.reagent.is_field_touched = (function antizer$reagent$is_field_touched(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15156 = arguments.length;
var i__7485__auto___15157 = (0);
while(true){
if((i__7485__auto___15157 < len__7484__auto___15156)){
args__7491__auto__.push((arguments[i__7485__auto___15157]));

var G__15158 = (i__7485__auto___15157 + (1));
i__7485__auto___15157 = G__15158;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__14108__auto__,args__14109__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("isFieldTouched").call(null,form__14108__auto__),args__14109__auto__);
});

antizer.reagent.is_field_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_touched.cljs$lang$applyTo = (function (seq15125){
var G__15126 = cljs.core.first(seq15125);
var seq15125__$1 = cljs.core.next(seq15125);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic(G__15126,seq15125__$1);
});


antizer.reagent.is_fields_touched = (function antizer$reagent$is_fields_touched(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15159 = arguments.length;
var i__7485__auto___15160 = (0);
while(true){
if((i__7485__auto___15160 < len__7484__auto___15159)){
args__7491__auto__.push((arguments[i__7485__auto___15160]));

var G__15161 = (i__7485__auto___15160 + (1));
i__7485__auto___15160 = G__15161;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__14108__auto__,args__14109__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("isFieldsTouched").call(null,form__14108__auto__),args__14109__auto__);
});

antizer.reagent.is_fields_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_fields_touched.cljs$lang$applyTo = (function (seq15127){
var G__15128 = cljs.core.first(seq15127);
var seq15127__$1 = cljs.core.next(seq15127);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic(G__15128,seq15127__$1);
});


antizer.reagent.is_field_validating = (function antizer$reagent$is_field_validating(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15162 = arguments.length;
var i__7485__auto___15163 = (0);
while(true){
if((i__7485__auto___15163 < len__7484__auto___15162)){
args__7491__auto__.push((arguments[i__7485__auto___15163]));

var G__15164 = (i__7485__auto___15163 + (1));
i__7485__auto___15163 = G__15164;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic = (function (form__14108__auto__,args__14109__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("isFieldValidating").call(null,form__14108__auto__),args__14109__auto__);
});

antizer.reagent.is_field_validating.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_validating.cljs$lang$applyTo = (function (seq15129){
var G__15130 = cljs.core.first(seq15129);
var seq15129__$1 = cljs.core.next(seq15129);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic(G__15130,seq15129__$1);
});


antizer.reagent.reset_fields = (function antizer$reagent$reset_fields(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15165 = arguments.length;
var i__7485__auto___15166 = (0);
while(true){
if((i__7485__auto___15166 < len__7484__auto___15165)){
args__7491__auto__.push((arguments[i__7485__auto___15166]));

var G__15167 = (i__7485__auto___15166 + (1));
i__7485__auto___15166 = G__15167;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__14108__auto__,args__14109__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("resetFields").call(null,form__14108__auto__),args__14109__auto__);
});

antizer.reagent.reset_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.reset_fields.cljs$lang$applyTo = (function (seq15131){
var G__15132 = cljs.core.first(seq15131);
var seq15131__$1 = cljs.core.next(seq15131);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic(G__15132,seq15131__$1);
});


antizer.reagent.set_fields = (function antizer$reagent$set_fields(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15168 = arguments.length;
var i__7485__auto___15169 = (0);
while(true){
if((i__7485__auto___15169 < len__7484__auto___15168)){
args__7491__auto__.push((arguments[i__7485__auto___15169]));

var G__15170 = (i__7485__auto___15169 + (1));
i__7485__auto___15169 = G__15170;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__14108__auto__,args__14109__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("setFields").call(null,form__14108__auto__),args__14109__auto__);
});

antizer.reagent.set_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields.cljs$lang$applyTo = (function (seq15133){
var G__15134 = cljs.core.first(seq15133);
var seq15133__$1 = cljs.core.next(seq15133);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic(G__15134,seq15133__$1);
});


antizer.reagent.set_fields_value = (function antizer$reagent$set_fields_value(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15171 = arguments.length;
var i__7485__auto___15172 = (0);
while(true){
if((i__7485__auto___15172 < len__7484__auto___15171)){
args__7491__auto__.push((arguments[i__7485__auto___15172]));

var G__15173 = (i__7485__auto___15172 + (1));
i__7485__auto___15172 = G__15173;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__14108__auto__,args__14109__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("setFieldsValue").call(null,form__14108__auto__),args__14109__auto__);
});

antizer.reagent.set_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields_value.cljs$lang$applyTo = (function (seq15135){
var G__15136 = cljs.core.first(seq15135);
var seq15135__$1 = cljs.core.next(seq15135);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__15136,seq15135__$1);
});


antizer.reagent.validate_fields = (function antizer$reagent$validate_fields(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15174 = arguments.length;
var i__7485__auto___15175 = (0);
while(true){
if((i__7485__auto___15175 < len__7484__auto___15174)){
args__7491__auto__.push((arguments[i__7485__auto___15175]));

var G__15176 = (i__7485__auto___15175 + (1));
i__7485__auto___15175 = G__15176;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__14108__auto__,args__14109__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("validateFields").call(null,form__14108__auto__),args__14109__auto__);
});

antizer.reagent.validate_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields.cljs$lang$applyTo = (function (seq15137){
var G__15138 = cljs.core.first(seq15137);
var seq15137__$1 = cljs.core.next(seq15137);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic(G__15138,seq15137__$1);
});


antizer.reagent.validate_fields_and_scroll = (function antizer$reagent$validate_fields_and_scroll(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15177 = arguments.length;
var i__7485__auto___15178 = (0);
while(true){
if((i__7485__auto___15178 < len__7484__auto___15177)){
args__7491__auto__.push((arguments[i__7485__auto___15178]));

var G__15179 = (i__7485__auto___15178 + (1));
i__7485__auto___15178 = G__15179;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic = (function (form__14108__auto__,args__14109__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("validateFieldsAndScroll").call(null,form__14108__auto__),args__14109__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields_and_scroll.cljs$lang$applyTo = (function (seq15139){
var G__15140 = cljs.core.first(seq15139);
var seq15139__$1 = cljs.core.next(seq15139);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic(G__15140,seq15139__$1);
});

antizer.reagent.message_config = (function antizer$reagent$message_config(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15201 = arguments.length;
var i__7485__auto___15202 = (0);
while(true){
if((i__7485__auto___15202 < len__7484__auto___15201)){
args__7491__auto__.push((arguments[i__7485__auto___15202]));

var G__15203 = (i__7485__auto___15202 + (1));
i__7485__auto___15202 = G__15203;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.config",args__14104__auto__);
});

antizer.reagent.message_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_config.cljs$lang$applyTo = (function (seq15180){
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15180));
});


antizer.reagent.message_error = (function antizer$reagent$message_error(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15204 = arguments.length;
var i__7485__auto___15205 = (0);
while(true){
if((i__7485__auto___15205 < len__7484__auto___15204)){
args__7491__auto__.push((arguments[i__7485__auto___15205]));

var G__15206 = (i__7485__auto___15205 + (1));
i__7485__auto___15205 = G__15206;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.error",args__14104__auto__);
});

antizer.reagent.message_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_error.cljs$lang$applyTo = (function (seq15181){
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15181));
});


antizer.reagent.message_info = (function antizer$reagent$message_info(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15207 = arguments.length;
var i__7485__auto___15208 = (0);
while(true){
if((i__7485__auto___15208 < len__7484__auto___15207)){
args__7491__auto__.push((arguments[i__7485__auto___15208]));

var G__15209 = (i__7485__auto___15208 + (1));
i__7485__auto___15208 = G__15209;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.info",args__14104__auto__);
});

antizer.reagent.message_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_info.cljs$lang$applyTo = (function (seq15182){
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15182));
});


antizer.reagent.message_loading = (function antizer$reagent$message_loading(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15210 = arguments.length;
var i__7485__auto___15211 = (0);
while(true){
if((i__7485__auto___15211 < len__7484__auto___15210)){
args__7491__auto__.push((arguments[i__7485__auto___15211]));

var G__15212 = (i__7485__auto___15211 + (1));
i__7485__auto___15211 = G__15212;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.loading",args__14104__auto__);
});

antizer.reagent.message_loading.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_loading.cljs$lang$applyTo = (function (seq15183){
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15183));
});


antizer.reagent.message_success = (function antizer$reagent$message_success(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15213 = arguments.length;
var i__7485__auto___15214 = (0);
while(true){
if((i__7485__auto___15214 < len__7484__auto___15213)){
args__7491__auto__.push((arguments[i__7485__auto___15214]));

var G__15215 = (i__7485__auto___15214 + (1));
i__7485__auto___15214 = G__15215;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.success",args__14104__auto__);
});

antizer.reagent.message_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_success.cljs$lang$applyTo = (function (seq15184){
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15184));
});


antizer.reagent.message_warn = (function antizer$reagent$message_warn(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15216 = arguments.length;
var i__7485__auto___15217 = (0);
while(true){
if((i__7485__auto___15217 < len__7484__auto___15216)){
args__7491__auto__.push((arguments[i__7485__auto___15217]));

var G__15218 = (i__7485__auto___15217 + (1));
i__7485__auto___15217 = G__15218;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.warn",args__14104__auto__);
});

antizer.reagent.message_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warn.cljs$lang$applyTo = (function (seq15185){
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15185));
});


antizer.reagent.message_warning = (function antizer$reagent$message_warning(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15219 = arguments.length;
var i__7485__auto___15220 = (0);
while(true){
if((i__7485__auto___15220 < len__7484__auto___15219)){
args__7491__auto__.push((arguments[i__7485__auto___15220]));

var G__15221 = (i__7485__auto___15220 + (1));
i__7485__auto___15220 = G__15221;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.warning",args__14104__auto__);
});

antizer.reagent.message_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warning.cljs$lang$applyTo = (function (seq15186){
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15186));
});


antizer.reagent.modal_confirm = (function antizer$reagent$modal_confirm(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15222 = arguments.length;
var i__7485__auto___15223 = (0);
while(true){
if((i__7485__auto___15223 < len__7484__auto___15222)){
args__7491__auto__.push((arguments[i__7485__auto___15223]));

var G__15224 = (i__7485__auto___15223 + (1));
i__7485__auto___15223 = G__15224;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"Modal.confirm",args__14104__auto__);
});

antizer.reagent.modal_confirm.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_confirm.cljs$lang$applyTo = (function (seq15187){
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15187));
});


antizer.reagent.modal_error = (function antizer$reagent$modal_error(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15225 = arguments.length;
var i__7485__auto___15226 = (0);
while(true){
if((i__7485__auto___15226 < len__7484__auto___15225)){
args__7491__auto__.push((arguments[i__7485__auto___15226]));

var G__15227 = (i__7485__auto___15226 + (1));
i__7485__auto___15226 = G__15227;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"Modal.error",args__14104__auto__);
});

antizer.reagent.modal_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_error.cljs$lang$applyTo = (function (seq15188){
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15188));
});


antizer.reagent.modal_info = (function antizer$reagent$modal_info(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15228 = arguments.length;
var i__7485__auto___15229 = (0);
while(true){
if((i__7485__auto___15229 < len__7484__auto___15228)){
args__7491__auto__.push((arguments[i__7485__auto___15229]));

var G__15230 = (i__7485__auto___15229 + (1));
i__7485__auto___15229 = G__15230;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"Modal.info",args__14104__auto__);
});

antizer.reagent.modal_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_info.cljs$lang$applyTo = (function (seq15189){
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15189));
});


antizer.reagent.modal_success = (function antizer$reagent$modal_success(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15231 = arguments.length;
var i__7485__auto___15232 = (0);
while(true){
if((i__7485__auto___15232 < len__7484__auto___15231)){
args__7491__auto__.push((arguments[i__7485__auto___15232]));

var G__15233 = (i__7485__auto___15232 + (1));
i__7485__auto___15232 = G__15233;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"Modal.success",args__14104__auto__);
});

antizer.reagent.modal_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_success.cljs$lang$applyTo = (function (seq15190){
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15190));
});


antizer.reagent.modal_warning = (function antizer$reagent$modal_warning(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15234 = arguments.length;
var i__7485__auto___15235 = (0);
while(true){
if((i__7485__auto___15235 < len__7484__auto___15234)){
args__7491__auto__.push((arguments[i__7485__auto___15235]));

var G__15236 = (i__7485__auto___15235 + (1));
i__7485__auto___15235 = G__15236;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"Modal.warning",args__14104__auto__);
});

antizer.reagent.modal_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_warning.cljs$lang$applyTo = (function (seq15191){
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15191));
});


antizer.reagent.notification_close = (function antizer$reagent$notification_close(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15237 = arguments.length;
var i__7485__auto___15238 = (0);
while(true){
if((i__7485__auto___15238 < len__7484__auto___15237)){
args__7491__auto__.push((arguments[i__7485__auto___15238]));

var G__15239 = (i__7485__auto___15238 + (1));
i__7485__auto___15238 = G__15239;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.close",args__14104__auto__);
});

antizer.reagent.notification_close.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_close.cljs$lang$applyTo = (function (seq15192){
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15192));
});


antizer.reagent.notification_config = (function antizer$reagent$notification_config(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15240 = arguments.length;
var i__7485__auto___15241 = (0);
while(true){
if((i__7485__auto___15241 < len__7484__auto___15240)){
args__7491__auto__.push((arguments[i__7485__auto___15241]));

var G__15242 = (i__7485__auto___15241 + (1));
i__7485__auto___15241 = G__15242;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.config",args__14104__auto__);
});

antizer.reagent.notification_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_config.cljs$lang$applyTo = (function (seq15193){
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15193));
});


antizer.reagent.notification_destroy = (function antizer$reagent$notification_destroy(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15243 = arguments.length;
var i__7485__auto___15244 = (0);
while(true){
if((i__7485__auto___15244 < len__7484__auto___15243)){
args__7491__auto__.push((arguments[i__7485__auto___15244]));

var G__15245 = (i__7485__auto___15244 + (1));
i__7485__auto___15244 = G__15245;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.destroy",args__14104__auto__);
});

antizer.reagent.notification_destroy.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_destroy.cljs$lang$applyTo = (function (seq15194){
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15194));
});


antizer.reagent.notification_error = (function antizer$reagent$notification_error(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15246 = arguments.length;
var i__7485__auto___15247 = (0);
while(true){
if((i__7485__auto___15247 < len__7484__auto___15246)){
args__7491__auto__.push((arguments[i__7485__auto___15247]));

var G__15248 = (i__7485__auto___15247 + (1));
i__7485__auto___15247 = G__15248;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.error",args__14104__auto__);
});

antizer.reagent.notification_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_error.cljs$lang$applyTo = (function (seq15195){
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15195));
});


antizer.reagent.notification_info = (function antizer$reagent$notification_info(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15249 = arguments.length;
var i__7485__auto___15250 = (0);
while(true){
if((i__7485__auto___15250 < len__7484__auto___15249)){
args__7491__auto__.push((arguments[i__7485__auto___15250]));

var G__15251 = (i__7485__auto___15250 + (1));
i__7485__auto___15250 = G__15251;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.info",args__14104__auto__);
});

antizer.reagent.notification_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_info.cljs$lang$applyTo = (function (seq15196){
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15196));
});


antizer.reagent.notification_open = (function antizer$reagent$notification_open(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15252 = arguments.length;
var i__7485__auto___15253 = (0);
while(true){
if((i__7485__auto___15253 < len__7484__auto___15252)){
args__7491__auto__.push((arguments[i__7485__auto___15253]));

var G__15254 = (i__7485__auto___15253 + (1));
i__7485__auto___15253 = G__15254;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.open",args__14104__auto__);
});

antizer.reagent.notification_open.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_open.cljs$lang$applyTo = (function (seq15197){
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15197));
});


antizer.reagent.notification_success = (function antizer$reagent$notification_success(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15255 = arguments.length;
var i__7485__auto___15256 = (0);
while(true){
if((i__7485__auto___15256 < len__7484__auto___15255)){
args__7491__auto__.push((arguments[i__7485__auto___15256]));

var G__15257 = (i__7485__auto___15256 + (1));
i__7485__auto___15256 = G__15257;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.success",args__14104__auto__);
});

antizer.reagent.notification_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_success.cljs$lang$applyTo = (function (seq15198){
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15198));
});


antizer.reagent.notification_warn = (function antizer$reagent$notification_warn(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15258 = arguments.length;
var i__7485__auto___15259 = (0);
while(true){
if((i__7485__auto___15259 < len__7484__auto___15258)){
args__7491__auto__.push((arguments[i__7485__auto___15259]));

var G__15260 = (i__7485__auto___15259 + (1));
i__7485__auto___15259 = G__15260;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.warn",args__14104__auto__);
});

antizer.reagent.notification_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warn.cljs$lang$applyTo = (function (seq15199){
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15199));
});


antizer.reagent.notification_warning = (function antizer$reagent$notification_warning(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15261 = arguments.length;
var i__7485__auto___15262 = (0);
while(true){
if((i__7485__auto___15262 < len__7484__auto___15261)){
args__7491__auto__.push((arguments[i__7485__auto___15262]));

var G__15263 = (i__7485__auto___15262 + (1));
i__7485__auto___15262 = G__15263;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__14104__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.warning",args__14104__auto__);
});

antizer.reagent.notification_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warning.cljs$lang$applyTo = (function (seq15200){
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15200));
});

antizer.reagent.locales = (function antizer$reagent$locales(prop__14106__auto__){
return antizer.core.get_prop("locales",prop__14106__auto__);
});
antizer.reagent.affix = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Affix"], null)));

antizer.reagent.alert = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Alert"], null)));

antizer.reagent.anchor = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Anchor"], null)));

antizer.reagent.anchor_link = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Anchor","Link"], null)));

antizer.reagent.auto_complete = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AutoComplete"], null)));

antizer.reagent.avatar = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Avatar"], null)));

antizer.reagent.back_top = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BackTop"], null)));

antizer.reagent.badge = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Badge"], null)));

antizer.reagent.breadcrumb = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Breadcrumb"], null)));

antizer.reagent.breadcrumb_item = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Breadcrumb","Item"], null)));

antizer.reagent.button = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Button"], null)));

antizer.reagent.button_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Button","Group"], null)));

antizer.reagent.calendar = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calendar"], null)));

antizer.reagent.card = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Card"], null)));

antizer.reagent.carousel = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Carousel"], null)));

antizer.reagent.cascader = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cascader"], null)));

antizer.reagent.checkbox = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Checkbox"], null)));

antizer.reagent.checkbox_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Checkbox","Group"], null)));

antizer.reagent.col = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Col"], null)));

antizer.reagent.collapse = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collapse"], null)));

antizer.reagent.collapse_panel = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collapse","Panel"], null)));

antizer.reagent.date_picker = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker"], null)));

antizer.reagent.date_picker_month_picker = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker","MonthPicker"], null)));

antizer.reagent.date_picker_range_picker = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker","RangePicker"], null)));

antizer.reagent.dropdown = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dropdown"], null)));

antizer.reagent.dropdown_button = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dropdown","Button"], null)));

antizer.reagent.form = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form"], null)));

antizer.reagent.form_item = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form","Item"], null)));

antizer.reagent.icon = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Icon"], null)));

antizer.reagent.input = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input"], null)));

antizer.reagent.input_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","Group"], null)));

antizer.reagent.input_search = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","Search"], null)));

antizer.reagent.input_text_area = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","TextArea"], null)));

antizer.reagent.input_number = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["InputNumber"], null)));

antizer.reagent.layout = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout"], null)));

antizer.reagent.layout_content = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Content"], null)));

antizer.reagent.layout_footer = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Footer"], null)));

antizer.reagent.layout_header = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Header"], null)));

antizer.reagent.layout_sider = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Sider"], null)));

antizer.reagent.locale_provider = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LocaleProvider"], null)));

antizer.reagent.mention = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mention"], null)));

antizer.reagent.menu = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu"], null)));

antizer.reagent.menu_divider = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","Divider"], null)));

antizer.reagent.menu_item = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","Item"], null)));

antizer.reagent.menu_item_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","ItemGroup"], null)));

antizer.reagent.menu_sub_menu = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","SubMenu"], null)));

antizer.reagent.modal = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Modal"], null)));

antizer.reagent.pagination = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pagination"], null)));

antizer.reagent.popconfirm = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Popconfirm"], null)));

antizer.reagent.popover = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Popover"], null)));

antizer.reagent.progress = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Progress"], null)));

antizer.reagent.radio = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio"], null)));

antizer.reagent.radio_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio","Group"], null)));

antizer.reagent.rate = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rate"], null)));

antizer.reagent.row = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Row"], null)));

antizer.reagent.select = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select"], null)));

antizer.reagent.select_option = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select","Option"], null)));

antizer.reagent.select_opt_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select","OptGroup"], null)));

antizer.reagent.slider = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Slider"], null)));

antizer.reagent.spin = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Spin"], null)));

antizer.reagent.steps = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Steps"], null)));

antizer.reagent.steps_step = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Steps","Step"], null)));

antizer.reagent.switch$ = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Switch"], null)));

antizer.reagent.table = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table"], null)));

antizer.reagent.table_column = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table","Column"], null)));

antizer.reagent.tabs = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tabs"], null)));

antizer.reagent.tabs_tab_pane = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tabs","TabPane"], null)));

antizer.reagent.tag = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag"], null)));

antizer.reagent.tag_checkable_tag = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag","CheckableTag"], null)));

antizer.reagent.time_picker = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TimePicker"], null)));

antizer.reagent.timeline = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Timeline"], null)));

antizer.reagent.timeline_item = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Timeline","Item"], null)));

antizer.reagent.tooltip = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tooltip"], null)));

antizer.reagent.transfer = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transfer"], null)));

antizer.reagent.tree = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tree"], null)));

antizer.reagent.tree_select = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TreeSelect"], null)));

antizer.reagent.tree_select_tree_node = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TreeSelect","TreeNode"], null)));

antizer.reagent.tree_tree_node = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tree","TreeNode"], null)));

antizer.reagent.upload = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Upload"], null)));
