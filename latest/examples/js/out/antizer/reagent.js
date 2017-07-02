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
var len__7484__auto___15097 = arguments.length;
var i__7485__auto___15098 = (0);
while(true){
if((i__7485__auto___15098 < len__7484__auto___15097)){
args__7491__auto__.push((arguments[i__7485__auto___15098]));

var G__15099 = (i__7485__auto___15098 + (1));
i__7485__auto___15098 = G__15099;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__15094){
var map__15095 = p__15094;
var map__15095__$1 = ((((!((map__15095 == null)))?((((map__15095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15095):map__15095);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15095__$1,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$1(goog.object.getValueByKeys(antd,"Form","create").call(null,cljs.core.clj__GT_js(antizer.core.map_keys__GT_camel_case(options))).call(null,reagent.core.reactify_component(form)));
});

antizer.reagent.create_form.cljs$lang$maxFixedArity = (1);

antizer.reagent.create_form.cljs$lang$applyTo = (function (seq15092){
var G__15093 = cljs.core.first(seq15092);
var seq15092__$1 = cljs.core.next(seq15092);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic(G__15093,seq15092__$1);
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
var args15100 = [];
var len__7484__auto___15103 = arguments.length;
var i__7485__auto___15104 = (0);
while(true){
if((i__7485__auto___15104 < len__7484__auto___15103)){
args15100.push((arguments[i__7485__auto___15104]));

var G__15105 = (i__7485__auto___15104 + (1));
i__7485__auto___15104 = G__15105;
continue;
} else {
}
break;
}

var G__15102 = args15100.length;
switch (G__15102) {
case 3:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15100.length)].join('')));

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
var len__7484__auto___15133 = arguments.length;
var i__7485__auto___15134 = (0);
while(true){
if((i__7485__auto___15134 < len__7484__auto___15133)){
args__7491__auto__.push((arguments[i__7485__auto___15134]));

var G__15135 = (i__7485__auto___15134 + (1));
i__7485__auto___15134 = G__15135;
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

antizer.reagent.get_field_decorator.cljs$lang$applyTo = (function (seq15107){
var G__15108 = cljs.core.first(seq15107);
var seq15107__$1 = cljs.core.next(seq15107);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic(G__15108,seq15107__$1);
});


antizer.reagent.get_field_error = (function antizer$reagent$get_field_error(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15136 = arguments.length;
var i__7485__auto___15137 = (0);
while(true){
if((i__7485__auto___15137 < len__7484__auto___15136)){
args__7491__auto__.push((arguments[i__7485__auto___15137]));

var G__15138 = (i__7485__auto___15137 + (1));
i__7485__auto___15137 = G__15138;
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

antizer.reagent.get_field_error.cljs$lang$applyTo = (function (seq15109){
var G__15110 = cljs.core.first(seq15109);
var seq15109__$1 = cljs.core.next(seq15109);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic(G__15110,seq15109__$1);
});


antizer.reagent.get_fields_error = (function antizer$reagent$get_fields_error(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15139 = arguments.length;
var i__7485__auto___15140 = (0);
while(true){
if((i__7485__auto___15140 < len__7484__auto___15139)){
args__7491__auto__.push((arguments[i__7485__auto___15140]));

var G__15141 = (i__7485__auto___15140 + (1));
i__7485__auto___15140 = G__15141;
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

antizer.reagent.get_fields_error.cljs$lang$applyTo = (function (seq15111){
var G__15112 = cljs.core.first(seq15111);
var seq15111__$1 = cljs.core.next(seq15111);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic(G__15112,seq15111__$1);
});


antizer.reagent.get_field_value = (function antizer$reagent$get_field_value(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15142 = arguments.length;
var i__7485__auto___15143 = (0);
while(true){
if((i__7485__auto___15143 < len__7484__auto___15142)){
args__7491__auto__.push((arguments[i__7485__auto___15143]));

var G__15144 = (i__7485__auto___15143 + (1));
i__7485__auto___15143 = G__15144;
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

antizer.reagent.get_field_value.cljs$lang$applyTo = (function (seq15113){
var G__15114 = cljs.core.first(seq15113);
var seq15113__$1 = cljs.core.next(seq15113);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic(G__15114,seq15113__$1);
});


antizer.reagent.get_fields_value = (function antizer$reagent$get_fields_value(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15145 = arguments.length;
var i__7485__auto___15146 = (0);
while(true){
if((i__7485__auto___15146 < len__7484__auto___15145)){
args__7491__auto__.push((arguments[i__7485__auto___15146]));

var G__15147 = (i__7485__auto___15146 + (1));
i__7485__auto___15146 = G__15147;
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

antizer.reagent.get_fields_value.cljs$lang$applyTo = (function (seq15115){
var G__15116 = cljs.core.first(seq15115);
var seq15115__$1 = cljs.core.next(seq15115);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__15116,seq15115__$1);
});


antizer.reagent.is_field_touched = (function antizer$reagent$is_field_touched(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15148 = arguments.length;
var i__7485__auto___15149 = (0);
while(true){
if((i__7485__auto___15149 < len__7484__auto___15148)){
args__7491__auto__.push((arguments[i__7485__auto___15149]));

var G__15150 = (i__7485__auto___15149 + (1));
i__7485__auto___15149 = G__15150;
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

antizer.reagent.is_field_touched.cljs$lang$applyTo = (function (seq15117){
var G__15118 = cljs.core.first(seq15117);
var seq15117__$1 = cljs.core.next(seq15117);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic(G__15118,seq15117__$1);
});


antizer.reagent.is_fields_touched = (function antizer$reagent$is_fields_touched(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15151 = arguments.length;
var i__7485__auto___15152 = (0);
while(true){
if((i__7485__auto___15152 < len__7484__auto___15151)){
args__7491__auto__.push((arguments[i__7485__auto___15152]));

var G__15153 = (i__7485__auto___15152 + (1));
i__7485__auto___15152 = G__15153;
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

antizer.reagent.is_fields_touched.cljs$lang$applyTo = (function (seq15119){
var G__15120 = cljs.core.first(seq15119);
var seq15119__$1 = cljs.core.next(seq15119);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic(G__15120,seq15119__$1);
});


antizer.reagent.is_field_validating = (function antizer$reagent$is_field_validating(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15154 = arguments.length;
var i__7485__auto___15155 = (0);
while(true){
if((i__7485__auto___15155 < len__7484__auto___15154)){
args__7491__auto__.push((arguments[i__7485__auto___15155]));

var G__15156 = (i__7485__auto___15155 + (1));
i__7485__auto___15155 = G__15156;
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

antizer.reagent.is_field_validating.cljs$lang$applyTo = (function (seq15121){
var G__15122 = cljs.core.first(seq15121);
var seq15121__$1 = cljs.core.next(seq15121);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic(G__15122,seq15121__$1);
});


antizer.reagent.reset_fields = (function antizer$reagent$reset_fields(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15157 = arguments.length;
var i__7485__auto___15158 = (0);
while(true){
if((i__7485__auto___15158 < len__7484__auto___15157)){
args__7491__auto__.push((arguments[i__7485__auto___15158]));

var G__15159 = (i__7485__auto___15158 + (1));
i__7485__auto___15158 = G__15159;
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

antizer.reagent.reset_fields.cljs$lang$applyTo = (function (seq15123){
var G__15124 = cljs.core.first(seq15123);
var seq15123__$1 = cljs.core.next(seq15123);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic(G__15124,seq15123__$1);
});


antizer.reagent.set_fields = (function antizer$reagent$set_fields(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15160 = arguments.length;
var i__7485__auto___15161 = (0);
while(true){
if((i__7485__auto___15161 < len__7484__auto___15160)){
args__7491__auto__.push((arguments[i__7485__auto___15161]));

var G__15162 = (i__7485__auto___15161 + (1));
i__7485__auto___15161 = G__15162;
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

antizer.reagent.set_fields.cljs$lang$applyTo = (function (seq15125){
var G__15126 = cljs.core.first(seq15125);
var seq15125__$1 = cljs.core.next(seq15125);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic(G__15126,seq15125__$1);
});


antizer.reagent.set_fields_value = (function antizer$reagent$set_fields_value(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15163 = arguments.length;
var i__7485__auto___15164 = (0);
while(true){
if((i__7485__auto___15164 < len__7484__auto___15163)){
args__7491__auto__.push((arguments[i__7485__auto___15164]));

var G__15165 = (i__7485__auto___15164 + (1));
i__7485__auto___15164 = G__15165;
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

antizer.reagent.set_fields_value.cljs$lang$applyTo = (function (seq15127){
var G__15128 = cljs.core.first(seq15127);
var seq15127__$1 = cljs.core.next(seq15127);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__15128,seq15127__$1);
});


antizer.reagent.validate_fields = (function antizer$reagent$validate_fields(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15166 = arguments.length;
var i__7485__auto___15167 = (0);
while(true){
if((i__7485__auto___15167 < len__7484__auto___15166)){
args__7491__auto__.push((arguments[i__7485__auto___15167]));

var G__15168 = (i__7485__auto___15167 + (1));
i__7485__auto___15167 = G__15168;
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

antizer.reagent.validate_fields.cljs$lang$applyTo = (function (seq15129){
var G__15130 = cljs.core.first(seq15129);
var seq15129__$1 = cljs.core.next(seq15129);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic(G__15130,seq15129__$1);
});


antizer.reagent.validate_fields_and_scroll = (function antizer$reagent$validate_fields_and_scroll(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15169 = arguments.length;
var i__7485__auto___15170 = (0);
while(true){
if((i__7485__auto___15170 < len__7484__auto___15169)){
args__7491__auto__.push((arguments[i__7485__auto___15170]));

var G__15171 = (i__7485__auto___15170 + (1));
i__7485__auto___15170 = G__15171;
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

antizer.reagent.validate_fields_and_scroll.cljs$lang$applyTo = (function (seq15131){
var G__15132 = cljs.core.first(seq15131);
var seq15131__$1 = cljs.core.next(seq15131);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic(G__15132,seq15131__$1);
});

antizer.reagent.message_config = (function antizer$reagent$message_config(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15193 = arguments.length;
var i__7485__auto___15194 = (0);
while(true){
if((i__7485__auto___15194 < len__7484__auto___15193)){
args__7491__auto__.push((arguments[i__7485__auto___15194]));

var G__15195 = (i__7485__auto___15194 + (1));
i__7485__auto___15194 = G__15195;
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

antizer.reagent.message_config.cljs$lang$applyTo = (function (seq15172){
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15172));
});


antizer.reagent.message_error = (function antizer$reagent$message_error(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15196 = arguments.length;
var i__7485__auto___15197 = (0);
while(true){
if((i__7485__auto___15197 < len__7484__auto___15196)){
args__7491__auto__.push((arguments[i__7485__auto___15197]));

var G__15198 = (i__7485__auto___15197 + (1));
i__7485__auto___15197 = G__15198;
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

antizer.reagent.message_error.cljs$lang$applyTo = (function (seq15173){
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15173));
});


antizer.reagent.message_info = (function antizer$reagent$message_info(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15199 = arguments.length;
var i__7485__auto___15200 = (0);
while(true){
if((i__7485__auto___15200 < len__7484__auto___15199)){
args__7491__auto__.push((arguments[i__7485__auto___15200]));

var G__15201 = (i__7485__auto___15200 + (1));
i__7485__auto___15200 = G__15201;
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

antizer.reagent.message_info.cljs$lang$applyTo = (function (seq15174){
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15174));
});


antizer.reagent.message_loading = (function antizer$reagent$message_loading(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15202 = arguments.length;
var i__7485__auto___15203 = (0);
while(true){
if((i__7485__auto___15203 < len__7484__auto___15202)){
args__7491__auto__.push((arguments[i__7485__auto___15203]));

var G__15204 = (i__7485__auto___15203 + (1));
i__7485__auto___15203 = G__15204;
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

antizer.reagent.message_loading.cljs$lang$applyTo = (function (seq15175){
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15175));
});


antizer.reagent.message_success = (function antizer$reagent$message_success(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15205 = arguments.length;
var i__7485__auto___15206 = (0);
while(true){
if((i__7485__auto___15206 < len__7484__auto___15205)){
args__7491__auto__.push((arguments[i__7485__auto___15206]));

var G__15207 = (i__7485__auto___15206 + (1));
i__7485__auto___15206 = G__15207;
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

antizer.reagent.message_success.cljs$lang$applyTo = (function (seq15176){
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15176));
});


antizer.reagent.message_warn = (function antizer$reagent$message_warn(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15208 = arguments.length;
var i__7485__auto___15209 = (0);
while(true){
if((i__7485__auto___15209 < len__7484__auto___15208)){
args__7491__auto__.push((arguments[i__7485__auto___15209]));

var G__15210 = (i__7485__auto___15209 + (1));
i__7485__auto___15209 = G__15210;
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

antizer.reagent.message_warn.cljs$lang$applyTo = (function (seq15177){
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15177));
});


antizer.reagent.message_warning = (function antizer$reagent$message_warning(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15211 = arguments.length;
var i__7485__auto___15212 = (0);
while(true){
if((i__7485__auto___15212 < len__7484__auto___15211)){
args__7491__auto__.push((arguments[i__7485__auto___15212]));

var G__15213 = (i__7485__auto___15212 + (1));
i__7485__auto___15212 = G__15213;
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

antizer.reagent.message_warning.cljs$lang$applyTo = (function (seq15178){
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15178));
});


antizer.reagent.modal_confirm = (function antizer$reagent$modal_confirm(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15214 = arguments.length;
var i__7485__auto___15215 = (0);
while(true){
if((i__7485__auto___15215 < len__7484__auto___15214)){
args__7491__auto__.push((arguments[i__7485__auto___15215]));

var G__15216 = (i__7485__auto___15215 + (1));
i__7485__auto___15215 = G__15216;
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

antizer.reagent.modal_confirm.cljs$lang$applyTo = (function (seq15179){
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15179));
});


antizer.reagent.modal_error = (function antizer$reagent$modal_error(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15217 = arguments.length;
var i__7485__auto___15218 = (0);
while(true){
if((i__7485__auto___15218 < len__7484__auto___15217)){
args__7491__auto__.push((arguments[i__7485__auto___15218]));

var G__15219 = (i__7485__auto___15218 + (1));
i__7485__auto___15218 = G__15219;
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

antizer.reagent.modal_error.cljs$lang$applyTo = (function (seq15180){
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15180));
});


antizer.reagent.modal_info = (function antizer$reagent$modal_info(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15220 = arguments.length;
var i__7485__auto___15221 = (0);
while(true){
if((i__7485__auto___15221 < len__7484__auto___15220)){
args__7491__auto__.push((arguments[i__7485__auto___15221]));

var G__15222 = (i__7485__auto___15221 + (1));
i__7485__auto___15221 = G__15222;
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

antizer.reagent.modal_info.cljs$lang$applyTo = (function (seq15181){
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15181));
});


antizer.reagent.modal_success = (function antizer$reagent$modal_success(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15223 = arguments.length;
var i__7485__auto___15224 = (0);
while(true){
if((i__7485__auto___15224 < len__7484__auto___15223)){
args__7491__auto__.push((arguments[i__7485__auto___15224]));

var G__15225 = (i__7485__auto___15224 + (1));
i__7485__auto___15224 = G__15225;
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

antizer.reagent.modal_success.cljs$lang$applyTo = (function (seq15182){
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15182));
});


antizer.reagent.modal_warning = (function antizer$reagent$modal_warning(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15226 = arguments.length;
var i__7485__auto___15227 = (0);
while(true){
if((i__7485__auto___15227 < len__7484__auto___15226)){
args__7491__auto__.push((arguments[i__7485__auto___15227]));

var G__15228 = (i__7485__auto___15227 + (1));
i__7485__auto___15227 = G__15228;
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

antizer.reagent.modal_warning.cljs$lang$applyTo = (function (seq15183){
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15183));
});


antizer.reagent.notification_close = (function antizer$reagent$notification_close(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15229 = arguments.length;
var i__7485__auto___15230 = (0);
while(true){
if((i__7485__auto___15230 < len__7484__auto___15229)){
args__7491__auto__.push((arguments[i__7485__auto___15230]));

var G__15231 = (i__7485__auto___15230 + (1));
i__7485__auto___15230 = G__15231;
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

antizer.reagent.notification_close.cljs$lang$applyTo = (function (seq15184){
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15184));
});


antizer.reagent.notification_config = (function antizer$reagent$notification_config(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15232 = arguments.length;
var i__7485__auto___15233 = (0);
while(true){
if((i__7485__auto___15233 < len__7484__auto___15232)){
args__7491__auto__.push((arguments[i__7485__auto___15233]));

var G__15234 = (i__7485__auto___15233 + (1));
i__7485__auto___15233 = G__15234;
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

antizer.reagent.notification_config.cljs$lang$applyTo = (function (seq15185){
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15185));
});


antizer.reagent.notification_destroy = (function antizer$reagent$notification_destroy(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15235 = arguments.length;
var i__7485__auto___15236 = (0);
while(true){
if((i__7485__auto___15236 < len__7484__auto___15235)){
args__7491__auto__.push((arguments[i__7485__auto___15236]));

var G__15237 = (i__7485__auto___15236 + (1));
i__7485__auto___15236 = G__15237;
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

antizer.reagent.notification_destroy.cljs$lang$applyTo = (function (seq15186){
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15186));
});


antizer.reagent.notification_error = (function antizer$reagent$notification_error(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15238 = arguments.length;
var i__7485__auto___15239 = (0);
while(true){
if((i__7485__auto___15239 < len__7484__auto___15238)){
args__7491__auto__.push((arguments[i__7485__auto___15239]));

var G__15240 = (i__7485__auto___15239 + (1));
i__7485__auto___15239 = G__15240;
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

antizer.reagent.notification_error.cljs$lang$applyTo = (function (seq15187){
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15187));
});


antizer.reagent.notification_info = (function antizer$reagent$notification_info(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15241 = arguments.length;
var i__7485__auto___15242 = (0);
while(true){
if((i__7485__auto___15242 < len__7484__auto___15241)){
args__7491__auto__.push((arguments[i__7485__auto___15242]));

var G__15243 = (i__7485__auto___15242 + (1));
i__7485__auto___15242 = G__15243;
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

antizer.reagent.notification_info.cljs$lang$applyTo = (function (seq15188){
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15188));
});


antizer.reagent.notification_open = (function antizer$reagent$notification_open(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15244 = arguments.length;
var i__7485__auto___15245 = (0);
while(true){
if((i__7485__auto___15245 < len__7484__auto___15244)){
args__7491__auto__.push((arguments[i__7485__auto___15245]));

var G__15246 = (i__7485__auto___15245 + (1));
i__7485__auto___15245 = G__15246;
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

antizer.reagent.notification_open.cljs$lang$applyTo = (function (seq15189){
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15189));
});


antizer.reagent.notification_success = (function antizer$reagent$notification_success(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15247 = arguments.length;
var i__7485__auto___15248 = (0);
while(true){
if((i__7485__auto___15248 < len__7484__auto___15247)){
args__7491__auto__.push((arguments[i__7485__auto___15248]));

var G__15249 = (i__7485__auto___15248 + (1));
i__7485__auto___15248 = G__15249;
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

antizer.reagent.notification_success.cljs$lang$applyTo = (function (seq15190){
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15190));
});


antizer.reagent.notification_warn = (function antizer$reagent$notification_warn(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15250 = arguments.length;
var i__7485__auto___15251 = (0);
while(true){
if((i__7485__auto___15251 < len__7484__auto___15250)){
args__7491__auto__.push((arguments[i__7485__auto___15251]));

var G__15252 = (i__7485__auto___15251 + (1));
i__7485__auto___15251 = G__15252;
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

antizer.reagent.notification_warn.cljs$lang$applyTo = (function (seq15191){
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15191));
});


antizer.reagent.notification_warning = (function antizer$reagent$notification_warning(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15253 = arguments.length;
var i__7485__auto___15254 = (0);
while(true){
if((i__7485__auto___15254 < len__7484__auto___15253)){
args__7491__auto__.push((arguments[i__7485__auto___15254]));

var G__15255 = (i__7485__auto___15254 + (1));
i__7485__auto___15254 = G__15255;
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

antizer.reagent.notification_warning.cljs$lang$applyTo = (function (seq15192){
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15192));
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
