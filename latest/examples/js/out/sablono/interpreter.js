// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('sablono.normalize');
goog.require('sablono.util');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null)))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__9255__auto__ = (((this$ == null))?null:this$);
var m__9256__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__9255__auto__)]);
if(!((m__9256__auto__ == null))){
return (m__9256__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9256__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9256__auto__.call(null,this$));
} else {
var m__9256__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__9256__auto____$1 == null))){
return (m__9256__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9256__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9256__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
}
});

/**
 * Updates the state of the wrapped input element.
 */
sablono.interpreter.update_state = (function sablono$interpreter$update_state(component,next_props,property,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
var G__14511_14514 = next_state;
var G__14512_14515 = next_props;
var G__14513_14516 = ({"onChange": on_change});
goog.object.extend(G__14511_14514,G__14512_14515,G__14513_14516);

goog.object.set(next_state,property,value);

return component.setState(next_state);
});
sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(element,property){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({});
var G__14517_14527 = state;
var G__14518_14528 = props;
var G__14519_14529 = ({"onChange": (function (){var G__14520 = goog.object.get(this$,"onChange");
var G__14521 = this$;
return goog.bind(G__14520,G__14521);
})()});
goog.object.extend(G__14517_14527,G__14518_14528,G__14519_14529);

return state;
})();

return React.Component.call(this$,props);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x14522_14530 = ctor.prototype;
x14522_14530.onChange = ((function (x14522_14530,ctor){
return (function (event){
var this$ = this;
var temp__5457__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5457__auto__)){
var handler = temp__5457__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return sablono.interpreter.update_state(this$,this$.props,property,goog.object.getValueByKeys(event,"target",property));
} else {
return null;
}
});})(x14522_14530,ctor))
;

x14522_14530.componentWillReceiveProps = ((function (x14522_14530,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state",property);
var element_value = (function (){var G__14523 = ReactDOM.findDOMNode(this$);
var G__14524 = property;
return goog.object.get(G__14523,G__14524);
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return sablono.interpreter.update_state(this$,new_props,property,element_value);
} else {
return sablono.interpreter.update_state(this$,new_props,property,goog.object.get(new_props,property));
}
});})(x14522_14530,ctor))
;

x14522_14530.render = ((function (x14522_14530,ctor){
return (function (){
var this$ = this;
var G__14525 = element;
var G__14526 = this$.state;
return React.createElement(G__14525,G__14526);
});})(x14522_14530,ctor))
;


return ctor;
});
sablono.interpreter.lazy_load_wrappers = (function sablono$interpreter$lazy_load_wrappers(){
if(cljs.core.truth_(sablono.interpreter.wrapped_textarea)){
return null;
} else {
sablono.interpreter.wrapped_input = sablono.interpreter.wrap_form_element("input","value");

sablono.interpreter.wrapped_checked = sablono.interpreter.wrap_form_element("input","checked");

sablono.interpreter.wrapped_select = sablono.interpreter.wrap_form_element("select","value");

return sablono.interpreter.wrapped_textarea = sablono.interpreter.wrap_form_element("textarea","value");
}
});
/**
 * Returns true if `type` and `props` are used a controlled input,
 *   otherwise false.
 */
sablono.interpreter.controlled_input_QMARK_ = (function sablono$interpreter$controlled_input_QMARK_(type,props){
var and__8510__auto__ = cljs.core.object_QMARK_(props);
if(and__8510__auto__){
var G__14532 = type;
switch (G__14532) {
case "input":
return (typeof props.checked !== 'undefined') || (typeof props.value !== 'undefined');

break;
case "select":
return typeof props.value !== 'undefined';

break;
case "textarea":
return typeof props.value !== 'undefined';

break;
default:
return false;

}
} else {
return and__8510__auto__;
}
});
/**
 * Returns either `type` or a wrapped element for controlled
 *   inputs.
 */
sablono.interpreter.element_class = (function sablono$interpreter$element_class(type,props){
if(sablono.interpreter.controlled_input_QMARK_(type,props)){
sablono.interpreter.lazy_load_wrappers();

var G__14534 = type;
switch (G__14534) {
case "input":
var G__14535 = (function (){var and__8510__auto__ = cljs.core.object_QMARK_(props);
if(and__8510__auto__){
return props.type;
} else {
return and__8510__auto__;
}
})();
switch (G__14535) {
case "radio":
return sablono.interpreter.wrapped_checked;

break;
case "checkbox":
return sablono.interpreter.wrapped_checked;

break;
default:
return sablono.interpreter.wrapped_input;

}

break;
case "select":
return sablono.interpreter.wrapped_select;

break;
case "textarea":
return sablono.interpreter.wrapped_textarea;

break;
default:
return type;

}
} else {
return type;
}
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__9808__auto__ = [];
var len__9801__auto___14541 = arguments.length;
var i__9802__auto___14542 = (0);
while(true){
if((i__9802__auto___14542 < len__9801__auto___14541)){
args__9808__auto__.push((arguments[i__9802__auto___14542]));

var G__14543 = (i__9802__auto___14542 + (1));
i__9802__auto___14542 = G__14543;
continue;
} else {
}
break;
}

var argseq__9809__auto__ = ((((2) < args__9808__auto__.length))?(new cljs.core.IndexedSeq(args__9808__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9809__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,sablono.interpreter.element_class(type,props),props,children);
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq14538){
var G__14539 = cljs.core.first(seq14538);
var seq14538__$1 = cljs.core.next(seq14538);
var G__14540 = cljs.core.first(seq14538__$1);
var seq14538__$2 = cljs.core.next(seq14538__$1);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(G__14539,G__14540,seq14538__$2);
});

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var temp__5457__auto__ = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5457__auto__)){
var js_attrs = temp__5457__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
js_attrs.className = class$__$1;
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(sablono.interpreter.interpret),x);
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element){
var vec__14545 = sablono.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545,(2),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.interpreter.create_element,type,sablono.interpreter.attributes(attrs),sablono.interpreter.interpret_seq(content));
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
sablono.interpreter.interpret_vec = (function sablono$interpreter$interpret_vec(x){
if(cljs.core.truth_(sablono.util.element_QMARK_(x))){
return sablono.interpreter.element(x);
} else {
return sablono.interpreter.interpret_seq(x);
}
});
goog.object.set(sablono.interpreter.IInterpreter,"null",true);

var G__14548_14554 = sablono.interpreter.interpret;
var G__14549_14555 = "null";
var G__14550_14556 = ((function (G__14548_14554,G__14549_14555){
return (function (this$){
return null;
});})(G__14548_14554,G__14549_14555))
;
goog.object.set(G__14548_14554,G__14549_14555,G__14550_14556);

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

goog.object.set(sablono.interpreter.IInterpreter,"_",true);

var G__14551_14557 = sablono.interpreter.interpret;
var G__14552_14558 = "_";
var G__14553_14559 = ((function (G__14551_14557,G__14552_14558){
return (function (this$){
return this$;
});})(G__14551_14557,G__14552_14558))
;
goog.object.set(G__14551_14557,G__14552_14558,G__14553_14559);

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});
