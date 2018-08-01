// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('antizer.reagent');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('antizer.core');
goog.require('goog.object');
goog.require('reagent.core');
/**
 * Calls Form.create() decorator with the form to be created. form can be
 *  any hiccup form. Accepts the following options:
 * 
 *  * :options - map of Form.create() options. Refer to: 
 *               https://ant.design/components/form/#Form.create(options) for
 *               details
 *  * :props - the properties hashmap to be passed to the component. Note that 
 *             the received properties will be in the form of a JavaScript associative map
 */
antizer.reagent.create_form = (function antizer$reagent$create_form(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18113 = arguments.length;
var i__9802__auto___18114 = (0);
while(true){
if((i__9802__auto___18114 < len__9801__auto___18113)){
args__9808__auto__.push((arguments[i__9802__auto___18114]));

var G__18115 = (i__9802__auto___18114 + (1));
i__9802__auto___18114 = G__18115;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__18104){
var map__18105 = p__18104;
var map__18105__$1 = ((((!((map__18105 == null)))?((((map__18105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18105):map__18105);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18105__$1,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18105__$1,cljs.core.cst$kw$props,cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((function (){var G__18110 = reagent.core.reactify_component(form);
var fexpr__18109 = (function (){var G__18112 = cljs.core.clj__GT_js(antizer.core.map_keys__GT_camel_case(options));
var fexpr__18111 = goog.object.getValueByKeys(antd,"Form","create");
return (fexpr__18111.cljs$core$IFn$_invoke$arity$1 ? fexpr__18111.cljs$core$IFn$_invoke$arity$1(G__18112) : fexpr__18111.call(null,G__18112));
})();
return (fexpr__18109.cljs$core$IFn$_invoke$arity$1 ? fexpr__18109.cljs$core$IFn$_invoke$arity$1(G__18110) : fexpr__18109.call(null,G__18110));
})(),cljs.core.clj__GT_js(props));
});

antizer.reagent.create_form.cljs$lang$maxFixedArity = (1);

antizer.reagent.create_form.cljs$lang$applyTo = (function (seq18102){
var G__18103 = cljs.core.first(seq18102);
var seq18102__$1 = cljs.core.next(seq18102);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic(G__18103,seq18102__$1);
});

/**
 * Returns the `form` created by Form.create(). This function must be called
 * from within the `form` component
 */
antizer.reagent.get_form = (function antizer$reagent$get_form(){
return cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(reagent.core.props(reagent.core.current_component()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)));
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
var G__18117 = arguments.length;
switch (G__18117) {
case 3:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3 = (function (form,id,field){
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4(form,id,cljs.core.PersistentArrayMap.EMPTY,field);
});

antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4 = (function (form,id,options,field){
var field_decorator = cljs.core.cst$kw$getFieldDecorator.cljs$core$IFn$_invoke$arity$1(form);
var params = cljs.core.clj__GT_js(antizer.core.map_keys__GT_camel_case(options));
var G__18119 = reagent.core.as_element(field);
var fexpr__18118 = (field_decorator.cljs$core$IFn$_invoke$arity$2 ? field_decorator.cljs$core$IFn$_invoke$arity$2(id,params) : field_decorator.call(null,id,params));
return (fexpr__18118.cljs$core$IFn$_invoke$arity$1 ? fexpr__18118.cljs$core$IFn$_invoke$arity$1(G__18119) : fexpr__18118.call(null,G__18119));
});

antizer.reagent.decorate_field.cljs$lang$maxFixedArity = 4;

antizer.reagent.get_field_decorator = (function antizer$reagent$get_field_decorator(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18160 = arguments.length;
var i__9802__auto___18161 = (0);
while(true){
if((i__9802__auto___18161 < len__9801__auto___18160)){
args__9808__auto__.push((arguments[i__9802__auto___18161]));

var G__18162 = (i__9802__auto___18161 + (1));
i__9802__auto___18161 = G__18162;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic = (function (form__17091__auto__,args__17092__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__18123 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("getFieldDecorator");
return (fexpr__18123.cljs$core$IFn$_invoke$arity$1 ? fexpr__18123.cljs$core$IFn$_invoke$arity$1(form__17091__auto__) : fexpr__18123.call(null,form__17091__auto__));
})(),args__17092__auto__);
});

antizer.reagent.get_field_decorator.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_decorator.cljs$lang$applyTo = (function (seq18121){
var G__18122 = cljs.core.first(seq18121);
var seq18121__$1 = cljs.core.next(seq18121);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic(G__18122,seq18121__$1);
});


antizer.reagent.get_field_error = (function antizer$reagent$get_field_error(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18163 = arguments.length;
var i__9802__auto___18164 = (0);
while(true){
if((i__9802__auto___18164 < len__9801__auto___18163)){
args__9808__auto__.push((arguments[i__9802__auto___18164]));

var G__18165 = (i__9802__auto___18164 + (1));
i__9802__auto___18164 = G__18165;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__17091__auto__,args__17092__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__18126 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("getFieldError");
return (fexpr__18126.cljs$core$IFn$_invoke$arity$1 ? fexpr__18126.cljs$core$IFn$_invoke$arity$1(form__17091__auto__) : fexpr__18126.call(null,form__17091__auto__));
})(),args__17092__auto__);
});

antizer.reagent.get_field_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_error.cljs$lang$applyTo = (function (seq18124){
var G__18125 = cljs.core.first(seq18124);
var seq18124__$1 = cljs.core.next(seq18124);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic(G__18125,seq18124__$1);
});


antizer.reagent.get_fields_error = (function antizer$reagent$get_fields_error(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18166 = arguments.length;
var i__9802__auto___18167 = (0);
while(true){
if((i__9802__auto___18167 < len__9801__auto___18166)){
args__9808__auto__.push((arguments[i__9802__auto___18167]));

var G__18168 = (i__9802__auto___18167 + (1));
i__9802__auto___18167 = G__18168;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__17091__auto__,args__17092__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__18129 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("getFieldsError");
return (fexpr__18129.cljs$core$IFn$_invoke$arity$1 ? fexpr__18129.cljs$core$IFn$_invoke$arity$1(form__17091__auto__) : fexpr__18129.call(null,form__17091__auto__));
})(),args__17092__auto__);
});

antizer.reagent.get_fields_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_error.cljs$lang$applyTo = (function (seq18127){
var G__18128 = cljs.core.first(seq18127);
var seq18127__$1 = cljs.core.next(seq18127);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic(G__18128,seq18127__$1);
});


antizer.reagent.get_fields_value = (function antizer$reagent$get_fields_value(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18169 = arguments.length;
var i__9802__auto___18170 = (0);
while(true){
if((i__9802__auto___18170 < len__9801__auto___18169)){
args__9808__auto__.push((arguments[i__9802__auto___18170]));

var G__18171 = (i__9802__auto___18170 + (1));
i__9802__auto___18170 = G__18171;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__17091__auto__,args__17092__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__18132 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("getFieldsValue");
return (fexpr__18132.cljs$core$IFn$_invoke$arity$1 ? fexpr__18132.cljs$core$IFn$_invoke$arity$1(form__17091__auto__) : fexpr__18132.call(null,form__17091__auto__));
})(),args__17092__auto__);
});

antizer.reagent.get_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_value.cljs$lang$applyTo = (function (seq18130){
var G__18131 = cljs.core.first(seq18130);
var seq18130__$1 = cljs.core.next(seq18130);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__18131,seq18130__$1);
});


antizer.reagent.get_field_value = (function antizer$reagent$get_field_value(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18172 = arguments.length;
var i__9802__auto___18173 = (0);
while(true){
if((i__9802__auto___18173 < len__9801__auto___18172)){
args__9808__auto__.push((arguments[i__9802__auto___18173]));

var G__18174 = (i__9802__auto___18173 + (1));
i__9802__auto___18173 = G__18174;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__17091__auto__,args__17092__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__18135 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("getFieldValue");
return (fexpr__18135.cljs$core$IFn$_invoke$arity$1 ? fexpr__18135.cljs$core$IFn$_invoke$arity$1(form__17091__auto__) : fexpr__18135.call(null,form__17091__auto__));
})(),args__17092__auto__);
});

antizer.reagent.get_field_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_value.cljs$lang$applyTo = (function (seq18133){
var G__18134 = cljs.core.first(seq18133);
var seq18133__$1 = cljs.core.next(seq18133);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic(G__18134,seq18133__$1);
});


antizer.reagent.is_fields_touched = (function antizer$reagent$is_fields_touched(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18175 = arguments.length;
var i__9802__auto___18176 = (0);
while(true){
if((i__9802__auto___18176 < len__9801__auto___18175)){
args__9808__auto__.push((arguments[i__9802__auto___18176]));

var G__18177 = (i__9802__auto___18176 + (1));
i__9802__auto___18176 = G__18177;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__17091__auto__,args__17092__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__18138 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("isFieldsTouched");
return (fexpr__18138.cljs$core$IFn$_invoke$arity$1 ? fexpr__18138.cljs$core$IFn$_invoke$arity$1(form__17091__auto__) : fexpr__18138.call(null,form__17091__auto__));
})(),args__17092__auto__);
});

antizer.reagent.is_fields_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_fields_touched.cljs$lang$applyTo = (function (seq18136){
var G__18137 = cljs.core.first(seq18136);
var seq18136__$1 = cljs.core.next(seq18136);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic(G__18137,seq18136__$1);
});


antizer.reagent.is_field_touched = (function antizer$reagent$is_field_touched(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18178 = arguments.length;
var i__9802__auto___18179 = (0);
while(true){
if((i__9802__auto___18179 < len__9801__auto___18178)){
args__9808__auto__.push((arguments[i__9802__auto___18179]));

var G__18180 = (i__9802__auto___18179 + (1));
i__9802__auto___18179 = G__18180;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__17091__auto__,args__17092__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__18141 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("isFieldTouched");
return (fexpr__18141.cljs$core$IFn$_invoke$arity$1 ? fexpr__18141.cljs$core$IFn$_invoke$arity$1(form__17091__auto__) : fexpr__18141.call(null,form__17091__auto__));
})(),args__17092__auto__);
});

antizer.reagent.is_field_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_touched.cljs$lang$applyTo = (function (seq18139){
var G__18140 = cljs.core.first(seq18139);
var seq18139__$1 = cljs.core.next(seq18139);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic(G__18140,seq18139__$1);
});


antizer.reagent.is_field_validating = (function antizer$reagent$is_field_validating(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18181 = arguments.length;
var i__9802__auto___18182 = (0);
while(true){
if((i__9802__auto___18182 < len__9801__auto___18181)){
args__9808__auto__.push((arguments[i__9802__auto___18182]));

var G__18183 = (i__9802__auto___18182 + (1));
i__9802__auto___18182 = G__18183;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic = (function (form__17091__auto__,args__17092__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__18144 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("isFieldValidating");
return (fexpr__18144.cljs$core$IFn$_invoke$arity$1 ? fexpr__18144.cljs$core$IFn$_invoke$arity$1(form__17091__auto__) : fexpr__18144.call(null,form__17091__auto__));
})(),args__17092__auto__);
});

antizer.reagent.is_field_validating.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_validating.cljs$lang$applyTo = (function (seq18142){
var G__18143 = cljs.core.first(seq18142);
var seq18142__$1 = cljs.core.next(seq18142);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic(G__18143,seq18142__$1);
});


antizer.reagent.reset_fields = (function antizer$reagent$reset_fields(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18184 = arguments.length;
var i__9802__auto___18185 = (0);
while(true){
if((i__9802__auto___18185 < len__9801__auto___18184)){
args__9808__auto__.push((arguments[i__9802__auto___18185]));

var G__18186 = (i__9802__auto___18185 + (1));
i__9802__auto___18185 = G__18186;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__17091__auto__,args__17092__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__18147 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("resetFields");
return (fexpr__18147.cljs$core$IFn$_invoke$arity$1 ? fexpr__18147.cljs$core$IFn$_invoke$arity$1(form__17091__auto__) : fexpr__18147.call(null,form__17091__auto__));
})(),args__17092__auto__);
});

antizer.reagent.reset_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.reset_fields.cljs$lang$applyTo = (function (seq18145){
var G__18146 = cljs.core.first(seq18145);
var seq18145__$1 = cljs.core.next(seq18145);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic(G__18146,seq18145__$1);
});


antizer.reagent.set_fields = (function antizer$reagent$set_fields(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18187 = arguments.length;
var i__9802__auto___18188 = (0);
while(true){
if((i__9802__auto___18188 < len__9801__auto___18187)){
args__9808__auto__.push((arguments[i__9802__auto___18188]));

var G__18189 = (i__9802__auto___18188 + (1));
i__9802__auto___18188 = G__18189;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__17091__auto__,args__17092__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__18150 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("setFields");
return (fexpr__18150.cljs$core$IFn$_invoke$arity$1 ? fexpr__18150.cljs$core$IFn$_invoke$arity$1(form__17091__auto__) : fexpr__18150.call(null,form__17091__auto__));
})(),args__17092__auto__);
});

antizer.reagent.set_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields.cljs$lang$applyTo = (function (seq18148){
var G__18149 = cljs.core.first(seq18148);
var seq18148__$1 = cljs.core.next(seq18148);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic(G__18149,seq18148__$1);
});


antizer.reagent.set_fields_value = (function antizer$reagent$set_fields_value(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18190 = arguments.length;
var i__9802__auto___18191 = (0);
while(true){
if((i__9802__auto___18191 < len__9801__auto___18190)){
args__9808__auto__.push((arguments[i__9802__auto___18191]));

var G__18192 = (i__9802__auto___18191 + (1));
i__9802__auto___18191 = G__18192;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__17091__auto__,args__17092__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__18153 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("setFieldsValue");
return (fexpr__18153.cljs$core$IFn$_invoke$arity$1 ? fexpr__18153.cljs$core$IFn$_invoke$arity$1(form__17091__auto__) : fexpr__18153.call(null,form__17091__auto__));
})(),args__17092__auto__);
});

antizer.reagent.set_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields_value.cljs$lang$applyTo = (function (seq18151){
var G__18152 = cljs.core.first(seq18151);
var seq18151__$1 = cljs.core.next(seq18151);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__18152,seq18151__$1);
});


antizer.reagent.validate_fields = (function antizer$reagent$validate_fields(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18193 = arguments.length;
var i__9802__auto___18194 = (0);
while(true){
if((i__9802__auto___18194 < len__9801__auto___18193)){
args__9808__auto__.push((arguments[i__9802__auto___18194]));

var G__18195 = (i__9802__auto___18194 + (1));
i__9802__auto___18194 = G__18195;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__17091__auto__,args__17092__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__18156 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("validateFields");
return (fexpr__18156.cljs$core$IFn$_invoke$arity$1 ? fexpr__18156.cljs$core$IFn$_invoke$arity$1(form__17091__auto__) : fexpr__18156.call(null,form__17091__auto__));
})(),args__17092__auto__);
});

antizer.reagent.validate_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields.cljs$lang$applyTo = (function (seq18154){
var G__18155 = cljs.core.first(seq18154);
var seq18154__$1 = cljs.core.next(seq18154);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic(G__18155,seq18154__$1);
});


antizer.reagent.validate_fields_and_scroll = (function antizer$reagent$validate_fields_and_scroll(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18196 = arguments.length;
var i__9802__auto___18197 = (0);
while(true){
if((i__9802__auto___18197 < len__9801__auto___18196)){
args__9808__auto__.push((arguments[i__9802__auto___18197]));

var G__18198 = (i__9802__auto___18197 + (1));
i__9802__auto___18197 = G__18198;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((1) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9809__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic = (function (form__17091__auto__,args__17092__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__18159 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("validateFieldsAndScroll");
return (fexpr__18159.cljs$core$IFn$_invoke$arity$1 ? fexpr__18159.cljs$core$IFn$_invoke$arity$1(form__17091__auto__) : fexpr__18159.call(null,form__17091__auto__));
})(),args__17092__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields_and_scroll.cljs$lang$applyTo = (function (seq18157){
var G__18158 = cljs.core.first(seq18157);
var seq18157__$1 = cljs.core.next(seq18157);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic(G__18158,seq18157__$1);
});

antizer.reagent.message_config = (function antizer$reagent$message_config(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18221 = arguments.length;
var i__9802__auto___18222 = (0);
while(true){
if((i__9802__auto___18222 < len__9801__auto___18221)){
args__9808__auto__.push((arguments[i__9802__auto___18222]));

var G__18223 = (i__9802__auto___18222 + (1));
i__9802__auto___18222 = G__18223;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.config",args__17087__auto__);
});

antizer.reagent.message_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_config.cljs$lang$applyTo = (function (seq18199){
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18199));
});


antizer.reagent.message_destroy = (function antizer$reagent$message_destroy(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18224 = arguments.length;
var i__9802__auto___18225 = (0);
while(true){
if((i__9802__auto___18225 < len__9801__auto___18224)){
args__9808__auto__.push((arguments[i__9802__auto___18225]));

var G__18226 = (i__9802__auto___18225 + (1));
i__9802__auto___18225 = G__18226;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_destroy.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.message_destroy.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.destroy",args__17087__auto__);
});

antizer.reagent.message_destroy.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_destroy.cljs$lang$applyTo = (function (seq18200){
return antizer.reagent.message_destroy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18200));
});


antizer.reagent.message_error = (function antizer$reagent$message_error(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18227 = arguments.length;
var i__9802__auto___18228 = (0);
while(true){
if((i__9802__auto___18228 < len__9801__auto___18227)){
args__9808__auto__.push((arguments[i__9802__auto___18228]));

var G__18229 = (i__9802__auto___18228 + (1));
i__9802__auto___18228 = G__18229;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.error",args__17087__auto__);
});

antizer.reagent.message_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_error.cljs$lang$applyTo = (function (seq18201){
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18201));
});


antizer.reagent.message_info = (function antizer$reagent$message_info(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18230 = arguments.length;
var i__9802__auto___18231 = (0);
while(true){
if((i__9802__auto___18231 < len__9801__auto___18230)){
args__9808__auto__.push((arguments[i__9802__auto___18231]));

var G__18232 = (i__9802__auto___18231 + (1));
i__9802__auto___18231 = G__18232;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.info",args__17087__auto__);
});

antizer.reagent.message_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_info.cljs$lang$applyTo = (function (seq18202){
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18202));
});


antizer.reagent.message_loading = (function antizer$reagent$message_loading(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18233 = arguments.length;
var i__9802__auto___18234 = (0);
while(true){
if((i__9802__auto___18234 < len__9801__auto___18233)){
args__9808__auto__.push((arguments[i__9802__auto___18234]));

var G__18235 = (i__9802__auto___18234 + (1));
i__9802__auto___18234 = G__18235;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.loading",args__17087__auto__);
});

antizer.reagent.message_loading.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_loading.cljs$lang$applyTo = (function (seq18203){
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18203));
});


antizer.reagent.message_success = (function antizer$reagent$message_success(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18236 = arguments.length;
var i__9802__auto___18237 = (0);
while(true){
if((i__9802__auto___18237 < len__9801__auto___18236)){
args__9808__auto__.push((arguments[i__9802__auto___18237]));

var G__18238 = (i__9802__auto___18237 + (1));
i__9802__auto___18237 = G__18238;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.success",args__17087__auto__);
});

antizer.reagent.message_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_success.cljs$lang$applyTo = (function (seq18204){
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18204));
});


antizer.reagent.message_warn = (function antizer$reagent$message_warn(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18239 = arguments.length;
var i__9802__auto___18240 = (0);
while(true){
if((i__9802__auto___18240 < len__9801__auto___18239)){
args__9808__auto__.push((arguments[i__9802__auto___18240]));

var G__18241 = (i__9802__auto___18240 + (1));
i__9802__auto___18240 = G__18241;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.warn",args__17087__auto__);
});

antizer.reagent.message_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warn.cljs$lang$applyTo = (function (seq18205){
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18205));
});


antizer.reagent.message_warning = (function antizer$reagent$message_warning(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18242 = arguments.length;
var i__9802__auto___18243 = (0);
while(true){
if((i__9802__auto___18243 < len__9801__auto___18242)){
args__9808__auto__.push((arguments[i__9802__auto___18243]));

var G__18244 = (i__9802__auto___18243 + (1));
i__9802__auto___18243 = G__18244;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.warning",args__17087__auto__);
});

antizer.reagent.message_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warning.cljs$lang$applyTo = (function (seq18206){
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18206));
});


antizer.reagent.modal_confirm = (function antizer$reagent$modal_confirm(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18245 = arguments.length;
var i__9802__auto___18246 = (0);
while(true){
if((i__9802__auto___18246 < len__9801__auto___18245)){
args__9808__auto__.push((arguments[i__9802__auto___18246]));

var G__18247 = (i__9802__auto___18246 + (1));
i__9802__auto___18246 = G__18247;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"Modal.confirm",args__17087__auto__);
});

antizer.reagent.modal_confirm.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_confirm.cljs$lang$applyTo = (function (seq18207){
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18207));
});


antizer.reagent.modal_error = (function antizer$reagent$modal_error(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18248 = arguments.length;
var i__9802__auto___18249 = (0);
while(true){
if((i__9802__auto___18249 < len__9801__auto___18248)){
args__9808__auto__.push((arguments[i__9802__auto___18249]));

var G__18250 = (i__9802__auto___18249 + (1));
i__9802__auto___18249 = G__18250;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"Modal.error",args__17087__auto__);
});

antizer.reagent.modal_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_error.cljs$lang$applyTo = (function (seq18208){
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18208));
});


antizer.reagent.modal_info = (function antizer$reagent$modal_info(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18251 = arguments.length;
var i__9802__auto___18252 = (0);
while(true){
if((i__9802__auto___18252 < len__9801__auto___18251)){
args__9808__auto__.push((arguments[i__9802__auto___18252]));

var G__18253 = (i__9802__auto___18252 + (1));
i__9802__auto___18252 = G__18253;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"Modal.info",args__17087__auto__);
});

antizer.reagent.modal_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_info.cljs$lang$applyTo = (function (seq18209){
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18209));
});


antizer.reagent.modal_success = (function antizer$reagent$modal_success(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18254 = arguments.length;
var i__9802__auto___18255 = (0);
while(true){
if((i__9802__auto___18255 < len__9801__auto___18254)){
args__9808__auto__.push((arguments[i__9802__auto___18255]));

var G__18256 = (i__9802__auto___18255 + (1));
i__9802__auto___18255 = G__18256;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"Modal.success",args__17087__auto__);
});

antizer.reagent.modal_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_success.cljs$lang$applyTo = (function (seq18210){
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18210));
});


antizer.reagent.modal_warning = (function antizer$reagent$modal_warning(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18257 = arguments.length;
var i__9802__auto___18258 = (0);
while(true){
if((i__9802__auto___18258 < len__9801__auto___18257)){
args__9808__auto__.push((arguments[i__9802__auto___18258]));

var G__18259 = (i__9802__auto___18258 + (1));
i__9802__auto___18258 = G__18259;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"Modal.warning",args__17087__auto__);
});

antizer.reagent.modal_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_warning.cljs$lang$applyTo = (function (seq18211){
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18211));
});


antizer.reagent.notification_close = (function antizer$reagent$notification_close(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18260 = arguments.length;
var i__9802__auto___18261 = (0);
while(true){
if((i__9802__auto___18261 < len__9801__auto___18260)){
args__9808__auto__.push((arguments[i__9802__auto___18261]));

var G__18262 = (i__9802__auto___18261 + (1));
i__9802__auto___18261 = G__18262;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.close",args__17087__auto__);
});

antizer.reagent.notification_close.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_close.cljs$lang$applyTo = (function (seq18212){
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18212));
});


antizer.reagent.notification_config = (function antizer$reagent$notification_config(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18263 = arguments.length;
var i__9802__auto___18264 = (0);
while(true){
if((i__9802__auto___18264 < len__9801__auto___18263)){
args__9808__auto__.push((arguments[i__9802__auto___18264]));

var G__18265 = (i__9802__auto___18264 + (1));
i__9802__auto___18264 = G__18265;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.config",args__17087__auto__);
});

antizer.reagent.notification_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_config.cljs$lang$applyTo = (function (seq18213){
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18213));
});


antizer.reagent.notification_destroy = (function antizer$reagent$notification_destroy(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18266 = arguments.length;
var i__9802__auto___18267 = (0);
while(true){
if((i__9802__auto___18267 < len__9801__auto___18266)){
args__9808__auto__.push((arguments[i__9802__auto___18267]));

var G__18268 = (i__9802__auto___18267 + (1));
i__9802__auto___18267 = G__18268;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.destroy",args__17087__auto__);
});

antizer.reagent.notification_destroy.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_destroy.cljs$lang$applyTo = (function (seq18214){
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18214));
});


antizer.reagent.notification_error = (function antizer$reagent$notification_error(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18269 = arguments.length;
var i__9802__auto___18270 = (0);
while(true){
if((i__9802__auto___18270 < len__9801__auto___18269)){
args__9808__auto__.push((arguments[i__9802__auto___18270]));

var G__18271 = (i__9802__auto___18270 + (1));
i__9802__auto___18270 = G__18271;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.error",args__17087__auto__);
});

antizer.reagent.notification_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_error.cljs$lang$applyTo = (function (seq18215){
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18215));
});


antizer.reagent.notification_info = (function antizer$reagent$notification_info(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18272 = arguments.length;
var i__9802__auto___18273 = (0);
while(true){
if((i__9802__auto___18273 < len__9801__auto___18272)){
args__9808__auto__.push((arguments[i__9802__auto___18273]));

var G__18274 = (i__9802__auto___18273 + (1));
i__9802__auto___18273 = G__18274;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.info",args__17087__auto__);
});

antizer.reagent.notification_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_info.cljs$lang$applyTo = (function (seq18216){
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18216));
});


antizer.reagent.notification_open = (function antizer$reagent$notification_open(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18275 = arguments.length;
var i__9802__auto___18276 = (0);
while(true){
if((i__9802__auto___18276 < len__9801__auto___18275)){
args__9808__auto__.push((arguments[i__9802__auto___18276]));

var G__18277 = (i__9802__auto___18276 + (1));
i__9802__auto___18276 = G__18277;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.open",args__17087__auto__);
});

antizer.reagent.notification_open.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_open.cljs$lang$applyTo = (function (seq18217){
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18217));
});


antizer.reagent.notification_success = (function antizer$reagent$notification_success(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18278 = arguments.length;
var i__9802__auto___18279 = (0);
while(true){
if((i__9802__auto___18279 < len__9801__auto___18278)){
args__9808__auto__.push((arguments[i__9802__auto___18279]));

var G__18280 = (i__9802__auto___18279 + (1));
i__9802__auto___18279 = G__18280;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.success",args__17087__auto__);
});

antizer.reagent.notification_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_success.cljs$lang$applyTo = (function (seq18218){
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18218));
});


antizer.reagent.notification_warn = (function antizer$reagent$notification_warn(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18281 = arguments.length;
var i__9802__auto___18282 = (0);
while(true){
if((i__9802__auto___18282 < len__9801__auto___18281)){
args__9808__auto__.push((arguments[i__9802__auto___18282]));

var G__18283 = (i__9802__auto___18282 + (1));
i__9802__auto___18282 = G__18283;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.warn",args__17087__auto__);
});

antizer.reagent.notification_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warn.cljs$lang$applyTo = (function (seq18219){
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18219));
});


antizer.reagent.notification_warning = (function antizer$reagent$notification_warning(var_args){
var args__9808__auto__ = [];
var len__9801__auto___18284 = arguments.length;
var i__9802__auto___18285 = (0);
while(true){
if((i__9802__auto___18285 < len__9801__auto___18284)){
args__9808__auto__.push((arguments[i__9802__auto___18285]));

var G__18286 = (i__9802__auto___18285 + (1));
i__9802__auto___18285 = G__18286;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((0) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__9809__auto__);
});

antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__17087__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.warning",args__17087__auto__);
});

antizer.reagent.notification_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warning.cljs$lang$applyTo = (function (seq18220){
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18220));
});

antizer.reagent.locales = (function antizer$reagent$locales(prop__17089__auto__){
return antizer.core.get_prop("locales",prop__17089__auto__);
});
antizer.reagent.affix = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Affix"], null)));

antizer.reagent.alert = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Alert"], null)));

antizer.reagent.anchor = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Anchor"], null)));

antizer.reagent.anchor_link = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Anchor","Link"], null)));

antizer.reagent.auto_complete = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AutoComplete"], null)));

antizer.reagent.auto_complete_opt_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AutoComplete","OptGroup"], null)));

antizer.reagent.auto_complete_option = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AutoComplete","Option"], null)));

antizer.reagent.avatar = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Avatar"], null)));

antizer.reagent.back_top = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BackTop"], null)));

antizer.reagent.badge = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Badge"], null)));

antizer.reagent.breadcrumb = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Breadcrumb"], null)));

antizer.reagent.breadcrumb_item = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Breadcrumb","Item"], null)));

antizer.reagent.button = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Button"], null)));

antizer.reagent.button_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Button","Group"], null)));

antizer.reagent.calendar = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calendar"], null)));

antizer.reagent.card = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Card"], null)));

antizer.reagent.card_grid = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Card","Grid"], null)));

antizer.reagent.card_meta = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Card","Meta"], null)));

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

antizer.reagent.date_picker_week_picker = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker","WeekPicker"], null)));

antizer.reagent.divider = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Divider"], null)));

antizer.reagent.drawer = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drawer"], null)));

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

antizer.reagent.list = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["List"], null)));

antizer.reagent.list_item = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["List","Item"], null)));

antizer.reagent.list_item_meta = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["List","Item","Meta"], null)));

antizer.reagent.locale_provider = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LocaleProvider"], null)));

antizer.reagent.mention = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mention"], null)));

antizer.reagent.mention_nav = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mention","Nav"], null)));

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

antizer.reagent.radio_button = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio","Button"], null)));

antizer.reagent.radio_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio","Group"], null)));

antizer.reagent.rate = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rate"], null)));

antizer.reagent.row = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Row"], null)));

antizer.reagent.select = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select"], null)));

antizer.reagent.select_opt_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select","OptGroup"], null)));

antizer.reagent.select_option = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select","Option"], null)));

antizer.reagent.slider = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Slider"], null)));

antizer.reagent.spin = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Spin"], null)));

antizer.reagent.steps = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Steps"], null)));

antizer.reagent.steps_step = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Steps","Step"], null)));

antizer.reagent.switch$ = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Switch"], null)));

antizer.reagent.table = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table"], null)));

antizer.reagent.table_column = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table","Column"], null)));

antizer.reagent.table_column_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table","ColumnGroup"], null)));

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
