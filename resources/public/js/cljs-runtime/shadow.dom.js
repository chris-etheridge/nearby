goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = ((typeof window !== 'undefined')?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__5859__auto__ = (((this$ == null))?null:this$);
var m__5860__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto__.call(null,this$));
} else {
var m__5860__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__5859__auto__ = (((this$ == null))?null:this$);
var m__5860__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto__.call(null,this$));
} else {
var m__5860__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37082 = coll;
var G__37083 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37082,G__37083) : shadow.dom.lazy_native_coll_seq.call(null,G__37082,G__37083));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"shadow.dom/NativeColl");
});

shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$)))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__37093 = arguments.length;
switch (G__37093) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__37096 = arguments.length;
switch (G__37096) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37099 = arguments.length;
switch (G__37099) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37102 = arguments.length;
switch (G__37102) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37105 = arguments.length;
switch (G__37105) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__37106 = document;
var G__37107 = shadow.dom.dom_node(el);
return goog.dom.contains(G__37106,G__37107);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__37108 = shadow.dom.dom_node(parent);
var G__37109 = shadow.dom.dom_node(el);
return goog.dom.contains(G__37108,G__37109);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__37111 = shadow.dom.dom_node(el);
var G__37112 = cls;
return goog.dom.classlist.add(G__37111,G__37112);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__37113 = shadow.dom.dom_node(el);
var G__37114 = cls;
return goog.dom.classlist.remove(G__37113,G__37114);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37116 = arguments.length;
switch (G__37116) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__37117 = shadow.dom.dom_node(el);
var G__37118 = cls;
return goog.dom.classlist.toggle(G__37117,G__37118);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5126__auto__ = !(typeof document !== 'undefined');
if(or__5126__auto__){
return or__5126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37120){if((e37120 instanceof Object)){
var e = e37120;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37120;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5126__auto__ = !(typeof document !== 'undefined');
if(or__5126__auto__){
return or__5126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37121 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37122 = null;
var count__37123 = (0);
var i__37124 = (0);
while(true){
if((i__37124 < count__37123)){
var el = chunk__37122.cljs$core$IIndexed$_nth$arity$2(null,i__37124);
var handler_37131__$1 = ((function (seq__37121,chunk__37122,count__37123,i__37124,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37121,chunk__37122,count__37123,i__37124,el))
;
var G__37125_37132 = el;
var G__37126_37133 = cljs.core.name(ev);
var G__37127_37134 = handler_37131__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37125_37132,G__37126_37133,G__37127_37134) : shadow.dom.dom_listen.call(null,G__37125_37132,G__37126_37133,G__37127_37134));

var G__37135 = seq__37121;
var G__37136 = chunk__37122;
var G__37137 = count__37123;
var G__37138 = (i__37124 + (1));
seq__37121 = G__37135;
chunk__37122 = G__37136;
count__37123 = G__37137;
i__37124 = G__37138;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__37121);
if(temp__5457__auto__){
var seq__37121__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37121__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__37121__$1);
var G__37139 = cljs.core.chunk_rest(seq__37121__$1);
var G__37140 = c__6057__auto__;
var G__37141 = cljs.core.count(c__6057__auto__);
var G__37142 = (0);
seq__37121 = G__37139;
chunk__37122 = G__37140;
count__37123 = G__37141;
i__37124 = G__37142;
continue;
} else {
var el = cljs.core.first(seq__37121__$1);
var handler_37143__$1 = ((function (seq__37121,chunk__37122,count__37123,i__37124,el,seq__37121__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37121,chunk__37122,count__37123,i__37124,el,seq__37121__$1,temp__5457__auto__))
;
var G__37128_37144 = el;
var G__37129_37145 = cljs.core.name(ev);
var G__37130_37146 = handler_37143__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37128_37144,G__37129_37145,G__37130_37146) : shadow.dom.dom_listen.call(null,G__37128_37144,G__37129_37145,G__37130_37146));

var G__37147 = cljs.core.next(seq__37121__$1);
var G__37148 = null;
var G__37149 = (0);
var G__37150 = (0);
seq__37121 = G__37147;
chunk__37122 = G__37148;
count__37123 = G__37149;
i__37124 = G__37150;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37152 = arguments.length;
switch (G__37152) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__37153 = shadow.dom.dom_node(el);
var G__37154 = cljs.core.name(ev);
var G__37155 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37153,G__37154,G__37155) : shadow.dom.dom_listen.call(null,G__37153,G__37154,G__37155));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__37157 = shadow.dom.dom_node(el);
var G__37158 = cljs.core.name(ev);
var G__37159 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__37157,G__37158,G__37159) : shadow.dom.dom_listen_remove.call(null,G__37157,G__37158,G__37159));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37160 = cljs.core.seq(events);
var chunk__37161 = null;
var count__37162 = (0);
var i__37163 = (0);
while(true){
if((i__37163 < count__37162)){
var vec__37164 = chunk__37161.cljs$core$IIndexed$_nth$arity$2(null,i__37163);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37164,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37164,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);

var G__37170 = seq__37160;
var G__37171 = chunk__37161;
var G__37172 = count__37162;
var G__37173 = (i__37163 + (1));
seq__37160 = G__37170;
chunk__37161 = G__37171;
count__37162 = G__37172;
i__37163 = G__37173;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__37160);
if(temp__5457__auto__){
var seq__37160__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37160__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__37160__$1);
var G__37174 = cljs.core.chunk_rest(seq__37160__$1);
var G__37175 = c__6057__auto__;
var G__37176 = cljs.core.count(c__6057__auto__);
var G__37177 = (0);
seq__37160 = G__37174;
chunk__37161 = G__37175;
count__37162 = G__37176;
i__37163 = G__37177;
continue;
} else {
var vec__37167 = cljs.core.first(seq__37160__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37167,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37167,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);

var G__37178 = cljs.core.next(seq__37160__$1);
var G__37179 = null;
var G__37180 = (0);
var G__37181 = (0);
seq__37160 = G__37178;
chunk__37161 = G__37179;
count__37162 = G__37180;
i__37163 = G__37181;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37182 = cljs.core.seq(styles);
var chunk__37183 = null;
var count__37184 = (0);
var i__37185 = (0);
while(true){
if((i__37185 < count__37184)){
var vec__37186 = chunk__37183.cljs$core$IIndexed$_nth$arity$2(null,i__37185);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37186,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37186,(1),null);
var G__37189_37198 = dom;
var G__37190_37199 = cljs.core.name(k);
var G__37191_37200 = (((v == null))?"":v);
goog.style.setStyle(G__37189_37198,G__37190_37199,G__37191_37200);

var G__37201 = seq__37182;
var G__37202 = chunk__37183;
var G__37203 = count__37184;
var G__37204 = (i__37185 + (1));
seq__37182 = G__37201;
chunk__37183 = G__37202;
count__37184 = G__37203;
i__37185 = G__37204;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__37182);
if(temp__5457__auto__){
var seq__37182__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37182__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__37182__$1);
var G__37205 = cljs.core.chunk_rest(seq__37182__$1);
var G__37206 = c__6057__auto__;
var G__37207 = cljs.core.count(c__6057__auto__);
var G__37208 = (0);
seq__37182 = G__37205;
chunk__37183 = G__37206;
count__37184 = G__37207;
i__37185 = G__37208;
continue;
} else {
var vec__37192 = cljs.core.first(seq__37182__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37192,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37192,(1),null);
var G__37195_37209 = dom;
var G__37196_37210 = cljs.core.name(k);
var G__37197_37211 = (((v == null))?"":v);
goog.style.setStyle(G__37195_37209,G__37196_37210,G__37197_37211);

var G__37212 = cljs.core.next(seq__37182__$1);
var G__37213 = null;
var G__37214 = (0);
var G__37215 = (0);
seq__37182 = G__37212;
chunk__37183 = G__37213;
count__37184 = G__37214;
i__37185 = G__37215;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37216_37217 = key;
var G__37216_37218__$1 = (((G__37216_37217 instanceof cljs.core.Keyword))?G__37216_37217.fqn:null);
switch (G__37216_37218__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37220 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5126__auto__ = goog.string.startsWith(ks_37220,"data-");
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return goog.string.startsWith(ks_37220,"aria-");
}
})())){
el.setAttribute(ks_37220,value);
} else {
(el[ks_37220] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__37221 = shadow.dom.dom_node(el);
var G__37222 = cls;
return goog.dom.classlist.contains(G__37221,G__37222);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37223){
var map__37224 = p__37223;
var map__37224__$1 = ((((!((map__37224 == null)))?((((map__37224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37224):map__37224);
var props = map__37224__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37224__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37226 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37226,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37226,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37226,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37229 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37229,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37229;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37231 = arguments.length;
switch (G__37231) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37233){
var vec__37234 = p__37233;
var seq__37235 = cljs.core.seq(vec__37234);
var first__37236 = cljs.core.first(seq__37235);
var seq__37235__$1 = cljs.core.next(seq__37235);
var nn = first__37236;
var first__37236__$1 = cljs.core.first(seq__37235__$1);
var seq__37235__$2 = cljs.core.next(seq__37235__$1);
var np = first__37236__$1;
var nc = seq__37235__$2;
var node = vec__37234;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if(((np == null)) && ((nc == null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37237 = nn;
var G__37238 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37237,G__37238) : create_fn.call(null,G__37237,G__37238));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37239 = nn;
var G__37240 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37239,G__37240) : create_fn.call(null,G__37239,G__37240));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37241 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37241,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37241,(1),null);
var seq__37244_37260 = cljs.core.seq(node_children);
var chunk__37245_37261 = null;
var count__37246_37262 = (0);
var i__37247_37263 = (0);
while(true){
if((i__37247_37263 < count__37246_37262)){
var child_struct_37264 = chunk__37245_37261.cljs$core$IIndexed$_nth$arity$2(null,i__37247_37263);
var children_37265 = shadow.dom.dom_node(child_struct_37264);
if(cljs.core.seq_QMARK_(children_37265)){
var seq__37248_37266 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37265));
var chunk__37250_37267 = null;
var count__37251_37268 = (0);
var i__37252_37269 = (0);
while(true){
if((i__37252_37269 < count__37251_37268)){
var child_37270 = chunk__37250_37267.cljs$core$IIndexed$_nth$arity$2(null,i__37252_37269);
if(cljs.core.truth_(child_37270)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37270);

var G__37271 = seq__37248_37266;
var G__37272 = chunk__37250_37267;
var G__37273 = count__37251_37268;
var G__37274 = (i__37252_37269 + (1));
seq__37248_37266 = G__37271;
chunk__37250_37267 = G__37272;
count__37251_37268 = G__37273;
i__37252_37269 = G__37274;
continue;
} else {
var G__37275 = seq__37248_37266;
var G__37276 = chunk__37250_37267;
var G__37277 = count__37251_37268;
var G__37278 = (i__37252_37269 + (1));
seq__37248_37266 = G__37275;
chunk__37250_37267 = G__37276;
count__37251_37268 = G__37277;
i__37252_37269 = G__37278;
continue;
}
} else {
var temp__5457__auto___37279 = cljs.core.seq(seq__37248_37266);
if(temp__5457__auto___37279){
var seq__37248_37280__$1 = temp__5457__auto___37279;
if(cljs.core.chunked_seq_QMARK_(seq__37248_37280__$1)){
var c__6057__auto___37281 = cljs.core.chunk_first(seq__37248_37280__$1);
var G__37282 = cljs.core.chunk_rest(seq__37248_37280__$1);
var G__37283 = c__6057__auto___37281;
var G__37284 = cljs.core.count(c__6057__auto___37281);
var G__37285 = (0);
seq__37248_37266 = G__37282;
chunk__37250_37267 = G__37283;
count__37251_37268 = G__37284;
i__37252_37269 = G__37285;
continue;
} else {
var child_37286 = cljs.core.first(seq__37248_37280__$1);
if(cljs.core.truth_(child_37286)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37286);

var G__37287 = cljs.core.next(seq__37248_37280__$1);
var G__37288 = null;
var G__37289 = (0);
var G__37290 = (0);
seq__37248_37266 = G__37287;
chunk__37250_37267 = G__37288;
count__37251_37268 = G__37289;
i__37252_37269 = G__37290;
continue;
} else {
var G__37291 = cljs.core.next(seq__37248_37280__$1);
var G__37292 = null;
var G__37293 = (0);
var G__37294 = (0);
seq__37248_37266 = G__37291;
chunk__37250_37267 = G__37292;
count__37251_37268 = G__37293;
i__37252_37269 = G__37294;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37265);
}

var G__37295 = seq__37244_37260;
var G__37296 = chunk__37245_37261;
var G__37297 = count__37246_37262;
var G__37298 = (i__37247_37263 + (1));
seq__37244_37260 = G__37295;
chunk__37245_37261 = G__37296;
count__37246_37262 = G__37297;
i__37247_37263 = G__37298;
continue;
} else {
var temp__5457__auto___37299 = cljs.core.seq(seq__37244_37260);
if(temp__5457__auto___37299){
var seq__37244_37300__$1 = temp__5457__auto___37299;
if(cljs.core.chunked_seq_QMARK_(seq__37244_37300__$1)){
var c__6057__auto___37301 = cljs.core.chunk_first(seq__37244_37300__$1);
var G__37302 = cljs.core.chunk_rest(seq__37244_37300__$1);
var G__37303 = c__6057__auto___37301;
var G__37304 = cljs.core.count(c__6057__auto___37301);
var G__37305 = (0);
seq__37244_37260 = G__37302;
chunk__37245_37261 = G__37303;
count__37246_37262 = G__37304;
i__37247_37263 = G__37305;
continue;
} else {
var child_struct_37306 = cljs.core.first(seq__37244_37300__$1);
var children_37307 = shadow.dom.dom_node(child_struct_37306);
if(cljs.core.seq_QMARK_(children_37307)){
var seq__37254_37308 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37307));
var chunk__37256_37309 = null;
var count__37257_37310 = (0);
var i__37258_37311 = (0);
while(true){
if((i__37258_37311 < count__37257_37310)){
var child_37312 = chunk__37256_37309.cljs$core$IIndexed$_nth$arity$2(null,i__37258_37311);
if(cljs.core.truth_(child_37312)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37312);

var G__37313 = seq__37254_37308;
var G__37314 = chunk__37256_37309;
var G__37315 = count__37257_37310;
var G__37316 = (i__37258_37311 + (1));
seq__37254_37308 = G__37313;
chunk__37256_37309 = G__37314;
count__37257_37310 = G__37315;
i__37258_37311 = G__37316;
continue;
} else {
var G__37317 = seq__37254_37308;
var G__37318 = chunk__37256_37309;
var G__37319 = count__37257_37310;
var G__37320 = (i__37258_37311 + (1));
seq__37254_37308 = G__37317;
chunk__37256_37309 = G__37318;
count__37257_37310 = G__37319;
i__37258_37311 = G__37320;
continue;
}
} else {
var temp__5457__auto___37321__$1 = cljs.core.seq(seq__37254_37308);
if(temp__5457__auto___37321__$1){
var seq__37254_37322__$1 = temp__5457__auto___37321__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37254_37322__$1)){
var c__6057__auto___37323 = cljs.core.chunk_first(seq__37254_37322__$1);
var G__37324 = cljs.core.chunk_rest(seq__37254_37322__$1);
var G__37325 = c__6057__auto___37323;
var G__37326 = cljs.core.count(c__6057__auto___37323);
var G__37327 = (0);
seq__37254_37308 = G__37324;
chunk__37256_37309 = G__37325;
count__37257_37310 = G__37326;
i__37258_37311 = G__37327;
continue;
} else {
var child_37328 = cljs.core.first(seq__37254_37322__$1);
if(cljs.core.truth_(child_37328)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37328);

var G__37329 = cljs.core.next(seq__37254_37322__$1);
var G__37330 = null;
var G__37331 = (0);
var G__37332 = (0);
seq__37254_37308 = G__37329;
chunk__37256_37309 = G__37330;
count__37257_37310 = G__37331;
i__37258_37311 = G__37332;
continue;
} else {
var G__37333 = cljs.core.next(seq__37254_37322__$1);
var G__37334 = null;
var G__37335 = (0);
var G__37336 = (0);
seq__37254_37308 = G__37333;
chunk__37256_37309 = G__37334;
count__37257_37310 = G__37335;
i__37258_37311 = G__37336;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37307);
}

var G__37337 = cljs.core.next(seq__37244_37300__$1);
var G__37338 = null;
var G__37339 = (0);
var G__37340 = (0);
seq__37244_37260 = G__37337;
chunk__37245_37261 = G__37338;
count__37246_37262 = G__37339;
i__37247_37263 = G__37340;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__37341 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__37341);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$)))?true:false):false)){
var seq__37343 = cljs.core.seq(node);
var chunk__37344 = null;
var count__37345 = (0);
var i__37346 = (0);
while(true){
if((i__37346 < count__37345)){
var n = chunk__37344.cljs$core$IIndexed$_nth$arity$2(null,i__37346);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));

var G__37347 = seq__37343;
var G__37348 = chunk__37344;
var G__37349 = count__37345;
var G__37350 = (i__37346 + (1));
seq__37343 = G__37347;
chunk__37344 = G__37348;
count__37345 = G__37349;
i__37346 = G__37350;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__37343);
if(temp__5457__auto__){
var seq__37343__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37343__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__37343__$1);
var G__37351 = cljs.core.chunk_rest(seq__37343__$1);
var G__37352 = c__6057__auto__;
var G__37353 = cljs.core.count(c__6057__auto__);
var G__37354 = (0);
seq__37343 = G__37351;
chunk__37344 = G__37352;
count__37345 = G__37353;
i__37346 = G__37354;
continue;
} else {
var n = cljs.core.first(seq__37343__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));

var G__37355 = cljs.core.next(seq__37343__$1);
var G__37356 = null;
var G__37357 = (0);
var G__37358 = (0);
seq__37343 = G__37355;
chunk__37344 = G__37356;
count__37345 = G__37357;
i__37346 = G__37358;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__37359 = shadow.dom.dom_node(new$);
var G__37360 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__37359,G__37360);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37362 = arguments.length;
switch (G__37362) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37365 = arguments.length;
switch (G__37365) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37368 = arguments.length;
switch (G__37368) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__6412__auto__ = [];
var len__6405__auto___37375 = arguments.length;
var i__6406__auto___37376 = (0);
while(true){
if((i__6406__auto___37376 < len__6405__auto___37375)){
args__6412__auto__.push((arguments[i__6406__auto___37376]));

var G__37377 = (i__6406__auto___37376 + (1));
i__6406__auto___37376 = G__37377;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37371_37378 = cljs.core.seq(nodes);
var chunk__37372_37379 = null;
var count__37373_37380 = (0);
var i__37374_37381 = (0);
while(true){
if((i__37374_37381 < count__37373_37380)){
var node_37382 = chunk__37372_37379.cljs$core$IIndexed$_nth$arity$2(null,i__37374_37381);
fragment.appendChild(shadow.dom._to_dom(node_37382));

var G__37383 = seq__37371_37378;
var G__37384 = chunk__37372_37379;
var G__37385 = count__37373_37380;
var G__37386 = (i__37374_37381 + (1));
seq__37371_37378 = G__37383;
chunk__37372_37379 = G__37384;
count__37373_37380 = G__37385;
i__37374_37381 = G__37386;
continue;
} else {
var temp__5457__auto___37387 = cljs.core.seq(seq__37371_37378);
if(temp__5457__auto___37387){
var seq__37371_37388__$1 = temp__5457__auto___37387;
if(cljs.core.chunked_seq_QMARK_(seq__37371_37388__$1)){
var c__6057__auto___37389 = cljs.core.chunk_first(seq__37371_37388__$1);
var G__37390 = cljs.core.chunk_rest(seq__37371_37388__$1);
var G__37391 = c__6057__auto___37389;
var G__37392 = cljs.core.count(c__6057__auto___37389);
var G__37393 = (0);
seq__37371_37378 = G__37390;
chunk__37372_37379 = G__37391;
count__37373_37380 = G__37392;
i__37374_37381 = G__37393;
continue;
} else {
var node_37394 = cljs.core.first(seq__37371_37388__$1);
fragment.appendChild(shadow.dom._to_dom(node_37394));

var G__37395 = cljs.core.next(seq__37371_37388__$1);
var G__37396 = null;
var G__37397 = (0);
var G__37398 = (0);
seq__37371_37378 = G__37395;
chunk__37372_37379 = G__37396;
count__37373_37380 = G__37397;
i__37374_37381 = G__37398;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

shadow.dom.fragment.cljs$lang$applyTo = (function (seq37370){
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37370));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37399_37413 = cljs.core.seq(scripts);
var chunk__37400_37414 = null;
var count__37401_37415 = (0);
var i__37402_37416 = (0);
while(true){
if((i__37402_37416 < count__37401_37415)){
var vec__37403_37417 = chunk__37400_37414.cljs$core$IIndexed$_nth$arity$2(null,i__37402_37416);
var script_tag_37418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37403_37417,(0),null);
var script_body_37419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37403_37417,(1),null);
eval(script_body_37419);

var G__37420 = seq__37399_37413;
var G__37421 = chunk__37400_37414;
var G__37422 = count__37401_37415;
var G__37423 = (i__37402_37416 + (1));
seq__37399_37413 = G__37420;
chunk__37400_37414 = G__37421;
count__37401_37415 = G__37422;
i__37402_37416 = G__37423;
continue;
} else {
var temp__5457__auto___37424 = cljs.core.seq(seq__37399_37413);
if(temp__5457__auto___37424){
var seq__37399_37425__$1 = temp__5457__auto___37424;
if(cljs.core.chunked_seq_QMARK_(seq__37399_37425__$1)){
var c__6057__auto___37426 = cljs.core.chunk_first(seq__37399_37425__$1);
var G__37427 = cljs.core.chunk_rest(seq__37399_37425__$1);
var G__37428 = c__6057__auto___37426;
var G__37429 = cljs.core.count(c__6057__auto___37426);
var G__37430 = (0);
seq__37399_37413 = G__37427;
chunk__37400_37414 = G__37428;
count__37401_37415 = G__37429;
i__37402_37416 = G__37430;
continue;
} else {
var vec__37406_37431 = cljs.core.first(seq__37399_37425__$1);
var script_tag_37432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37406_37431,(0),null);
var script_body_37433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37406_37431,(1),null);
eval(script_body_37433);

var G__37434 = cljs.core.next(seq__37399_37425__$1);
var G__37435 = null;
var G__37436 = (0);
var G__37437 = (0);
seq__37399_37413 = G__37434;
chunk__37400_37414 = G__37435;
count__37401_37415 = G__37436;
i__37402_37416 = G__37437;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__37409){
var vec__37410 = p__37409;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37410,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37410,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__37438 = shadow.dom.dom_node(el);
var G__37439 = cls;
return goog.dom.getAncestorByClass(G__37438,G__37439);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37441 = arguments.length;
switch (G__37441) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__37442 = shadow.dom.dom_node(el);
var G__37443 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__37442,G__37443);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__37444 = shadow.dom.dom_node(el);
var G__37445 = cljs.core.name(tag);
var G__37446 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__37444,G__37445,G__37446);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__37448 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__37448);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__37449 = shadow.dom.dom_node(dom);
var G__37450 = value;
return goog.dom.forms.setValue(G__37449,G__37450);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37451 = cljs.core.seq(style_keys);
var chunk__37452 = null;
var count__37453 = (0);
var i__37454 = (0);
while(true){
if((i__37454 < count__37453)){
var it = chunk__37452.cljs$core$IIndexed$_nth$arity$2(null,i__37454);
shadow.dom.remove_style_STAR_(el__$1,it);

var G__37455 = seq__37451;
var G__37456 = chunk__37452;
var G__37457 = count__37453;
var G__37458 = (i__37454 + (1));
seq__37451 = G__37455;
chunk__37452 = G__37456;
count__37453 = G__37457;
i__37454 = G__37458;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__37451);
if(temp__5457__auto__){
var seq__37451__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37451__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__37451__$1);
var G__37459 = cljs.core.chunk_rest(seq__37451__$1);
var G__37460 = c__6057__auto__;
var G__37461 = cljs.core.count(c__6057__auto__);
var G__37462 = (0);
seq__37451 = G__37459;
chunk__37452 = G__37460;
count__37453 = G__37461;
i__37454 = G__37462;
continue;
} else {
var it = cljs.core.first(seq__37451__$1);
shadow.dom.remove_style_STAR_(el__$1,it);

var G__37463 = cljs.core.next(seq__37451__$1);
var G__37464 = null;
var G__37465 = (0);
var G__37466 = (0);
seq__37451 = G__37463;
chunk__37452 = G__37464;
count__37453 = G__37465;
i__37454 = G__37466;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18319__auto__,k__18320__auto__){
var self__ = this;
var this__18319__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__18319__auto____$1,k__18320__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18321__auto__,k37468,else__18322__auto__){
var self__ = this;
var this__18321__auto____$1 = this;
var G__37472 = k37468;
var G__37472__$1 = (((G__37472 instanceof cljs.core.Keyword))?G__37472.fqn:null);
switch (G__37472__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37468,else__18322__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18333__auto__,writer__18334__auto__,opts__18335__auto__){
var self__ = this;
var this__18333__auto____$1 = this;
var pr_pair__18336__auto__ = ((function (this__18333__auto____$1){
return (function (keyval__18337__auto__){
return cljs.core.pr_sequential_writer(writer__18334__auto__,cljs.core.pr_writer,""," ","",opts__18335__auto__,keyval__18337__auto__);
});})(this__18333__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__18334__auto__,pr_pair__18336__auto__,"#shadow.dom.Coordinate{",", ","}",opts__18335__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37467){
var self__ = this;
var G__37467__$1 = this;
return (new cljs.core.RecordIter((0),G__37467__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18317__auto__){
var self__ = this;
var this__18317__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18314__auto__){
var self__ = this;
var this__18314__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18323__auto__){
var self__ = this;
var this__18323__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18315__auto__){
var self__ = this;
var this__18315__auto____$1 = this;
var h__5582__auto__ = self__.__hash;
if(!((h__5582__auto__ == null))){
return h__5582__auto__;
} else {
var h__5582__auto____$1 = (function (){var fexpr__37473 = ((function (h__5582__auto__,this__18315__auto____$1){
return (function (coll__18316__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__18316__auto__));
});})(h__5582__auto__,this__18315__auto____$1))
;
return fexpr__37473(this__18315__auto____$1);
})();
self__.__hash = h__5582__auto____$1;

return h__5582__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37469,other37470){
var self__ = this;
var this37469__$1 = this;
return (!((other37470 == null))) && ((this37469__$1.constructor === other37470.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37469__$1.x,other37470.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37469__$1.y,other37470.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37469__$1.__extmap,other37470.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18328__auto__,k__18329__auto__){
var self__ = this;
var this__18328__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__18329__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__18328__auto____$1),self__.__meta),k__18329__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__18329__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18326__auto__,k__18327__auto__,G__37467){
var self__ = this;
var this__18326__auto____$1 = this;
var pred__37474 = cljs.core.keyword_identical_QMARK_;
var expr__37475 = k__18327__auto__;
if(cljs.core.truth_((function (){var G__37477 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__37478 = expr__37475;
return (pred__37474.cljs$core$IFn$_invoke$arity$2 ? pred__37474.cljs$core$IFn$_invoke$arity$2(G__37477,G__37478) : pred__37474.call(null,G__37477,G__37478));
})())){
return (new shadow.dom.Coordinate(G__37467,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37479 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__37480 = expr__37475;
return (pred__37474.cljs$core$IFn$_invoke$arity$2 ? pred__37474.cljs$core$IFn$_invoke$arity$2(G__37479,G__37480) : pred__37474.call(null,G__37479,G__37480));
})())){
return (new shadow.dom.Coordinate(self__.x,G__37467,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__18327__auto__,G__37467),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18331__auto__){
var self__ = this;
var this__18331__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18318__auto__,G__37467){
var self__ = this;
var this__18318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37467,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18324__auto__,entry__18325__auto__){
var self__ = this;
var this__18324__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__18325__auto__)){
return cljs.core._assoc(this__18324__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__18325__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__18325__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__18324__auto____$1,entry__18325__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5852__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"shadow.dom/Coordinate");
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5852__auto__,writer__5853__auto__){
return cljs.core._write(writer__5853__auto__,"shadow.dom/Coordinate");
});

shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37471){
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37471),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37471),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37471,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0))),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__37482 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__37482);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__37483 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__37483);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__37484 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__37484);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18319__auto__,k__18320__auto__){
var self__ = this;
var this__18319__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__18319__auto____$1,k__18320__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18321__auto__,k37486,else__18322__auto__){
var self__ = this;
var this__18321__auto____$1 = this;
var G__37490 = k37486;
var G__37490__$1 = (((G__37490 instanceof cljs.core.Keyword))?G__37490.fqn:null);
switch (G__37490__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37486,else__18322__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18333__auto__,writer__18334__auto__,opts__18335__auto__){
var self__ = this;
var this__18333__auto____$1 = this;
var pr_pair__18336__auto__ = ((function (this__18333__auto____$1){
return (function (keyval__18337__auto__){
return cljs.core.pr_sequential_writer(writer__18334__auto__,cljs.core.pr_writer,""," ","",opts__18335__auto__,keyval__18337__auto__);
});})(this__18333__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__18334__auto__,pr_pair__18336__auto__,"#shadow.dom.Size{",", ","}",opts__18335__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37485){
var self__ = this;
var G__37485__$1 = this;
return (new cljs.core.RecordIter((0),G__37485__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18317__auto__){
var self__ = this;
var this__18317__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18314__auto__){
var self__ = this;
var this__18314__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18323__auto__){
var self__ = this;
var this__18323__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18315__auto__){
var self__ = this;
var this__18315__auto____$1 = this;
var h__5582__auto__ = self__.__hash;
if(!((h__5582__auto__ == null))){
return h__5582__auto__;
} else {
var h__5582__auto____$1 = (function (){var fexpr__37491 = ((function (h__5582__auto__,this__18315__auto____$1){
return (function (coll__18316__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__18316__auto__));
});})(h__5582__auto__,this__18315__auto____$1))
;
return fexpr__37491(this__18315__auto____$1);
})();
self__.__hash = h__5582__auto____$1;

return h__5582__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37487,other37488){
var self__ = this;
var this37487__$1 = this;
return (!((other37488 == null))) && ((this37487__$1.constructor === other37488.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37487__$1.w,other37488.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37487__$1.h,other37488.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37487__$1.__extmap,other37488.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18328__auto__,k__18329__auto__){
var self__ = this;
var this__18328__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__18329__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__18328__auto____$1),self__.__meta),k__18329__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__18329__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18326__auto__,k__18327__auto__,G__37485){
var self__ = this;
var this__18326__auto____$1 = this;
var pred__37492 = cljs.core.keyword_identical_QMARK_;
var expr__37493 = k__18327__auto__;
if(cljs.core.truth_((function (){var G__37495 = new cljs.core.Keyword(null,"w","w",354169001);
var G__37496 = expr__37493;
return (pred__37492.cljs$core$IFn$_invoke$arity$2 ? pred__37492.cljs$core$IFn$_invoke$arity$2(G__37495,G__37496) : pred__37492.call(null,G__37495,G__37496));
})())){
return (new shadow.dom.Size(G__37485,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37497 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__37498 = expr__37493;
return (pred__37492.cljs$core$IFn$_invoke$arity$2 ? pred__37492.cljs$core$IFn$_invoke$arity$2(G__37497,G__37498) : pred__37492.call(null,G__37497,G__37498));
})())){
return (new shadow.dom.Size(self__.w,G__37485,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__18327__auto__,G__37485),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18331__auto__){
var self__ = this;
var this__18331__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18318__auto__,G__37485){
var self__ = this;
var this__18318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37485,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18324__auto__,entry__18325__auto__){
var self__ = this;
var this__18324__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__18325__auto__)){
return cljs.core._assoc(this__18324__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__18325__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__18325__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__18324__auto____$1,entry__18325__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5852__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"shadow.dom/Size");
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5852__auto__,writer__5853__auto__){
return cljs.core._write(writer__5853__auto__,"shadow.dom/Size");
});

shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37489){
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37489),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37489),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37489,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0))),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__37500 = shadow.dom.dom_node(el);
return goog.style.getSize(G__37500);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__6164__auto__ = opts;
var l__6165__auto__ = a__6164__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__6165__auto__)){
var G__37501 = (i + (1));
var G__37502 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37501;
ret = G__37502;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37503){
var vec__37504 = p__37503;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37504,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37504,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37507 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
return encodeURIComponent(G__37507);
})())].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37509 = arguments.length;
switch (G__37509) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__37511_37513 = new_node;
var G__37512_37514 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__37511_37513,G__37512_37514);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__37515_37517 = new_node;
var G__37516_37518 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__37515_37517,G__37516_37518);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37519 = ps;
var G__37520 = (i + (1));
el__$1 = G__37519;
i = G__37520;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__37521 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__37521);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__37522 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__37522);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__37523 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__37523);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37524 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37524,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37524,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37524,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37527_37537 = cljs.core.seq(props);
var chunk__37528_37538 = null;
var count__37529_37539 = (0);
var i__37530_37540 = (0);
while(true){
if((i__37530_37540 < count__37529_37539)){
var vec__37531_37541 = chunk__37528_37538.cljs$core$IIndexed$_nth$arity$2(null,i__37530_37540);
var k_37542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37531_37541,(0),null);
var v_37543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37531_37541,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_37542);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37542),v_37543);

var G__37544 = seq__37527_37537;
var G__37545 = chunk__37528_37538;
var G__37546 = count__37529_37539;
var G__37547 = (i__37530_37540 + (1));
seq__37527_37537 = G__37544;
chunk__37528_37538 = G__37545;
count__37529_37539 = G__37546;
i__37530_37540 = G__37547;
continue;
} else {
var temp__5457__auto___37548 = cljs.core.seq(seq__37527_37537);
if(temp__5457__auto___37548){
var seq__37527_37549__$1 = temp__5457__auto___37548;
if(cljs.core.chunked_seq_QMARK_(seq__37527_37549__$1)){
var c__6057__auto___37550 = cljs.core.chunk_first(seq__37527_37549__$1);
var G__37551 = cljs.core.chunk_rest(seq__37527_37549__$1);
var G__37552 = c__6057__auto___37550;
var G__37553 = cljs.core.count(c__6057__auto___37550);
var G__37554 = (0);
seq__37527_37537 = G__37551;
chunk__37528_37538 = G__37552;
count__37529_37539 = G__37553;
i__37530_37540 = G__37554;
continue;
} else {
var vec__37534_37555 = cljs.core.first(seq__37527_37549__$1);
var k_37556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37534_37555,(0),null);
var v_37557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37534_37555,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_37556);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37556),v_37557);

var G__37558 = cljs.core.next(seq__37527_37549__$1);
var G__37559 = null;
var G__37560 = (0);
var G__37561 = (0);
seq__37527_37537 = G__37558;
chunk__37528_37538 = G__37559;
count__37529_37539 = G__37560;
i__37530_37540 = G__37561;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$)))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37563 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37563,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37563,(1),null);
var seq__37566_37584 = cljs.core.seq(node_children);
var chunk__37568_37585 = null;
var count__37569_37586 = (0);
var i__37570_37587 = (0);
while(true){
if((i__37570_37587 < count__37569_37586)){
var child_struct_37588 = chunk__37568_37585.cljs$core$IIndexed$_nth$arity$2(null,i__37570_37587);
if(!((child_struct_37588 == null))){
if(typeof child_struct_37588 === 'string'){
var text_37589 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37589),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_37588)].join(''));
} else {
var children_37590 = shadow.dom.svg_node(child_struct_37588);
if(cljs.core.seq_QMARK_(children_37590)){
var seq__37572_37591 = cljs.core.seq(children_37590);
var chunk__37574_37592 = null;
var count__37575_37593 = (0);
var i__37576_37594 = (0);
while(true){
if((i__37576_37594 < count__37575_37593)){
var child_37595 = chunk__37574_37592.cljs$core$IIndexed$_nth$arity$2(null,i__37576_37594);
if(cljs.core.truth_(child_37595)){
node.appendChild(child_37595);

var G__37596 = seq__37572_37591;
var G__37597 = chunk__37574_37592;
var G__37598 = count__37575_37593;
var G__37599 = (i__37576_37594 + (1));
seq__37572_37591 = G__37596;
chunk__37574_37592 = G__37597;
count__37575_37593 = G__37598;
i__37576_37594 = G__37599;
continue;
} else {
var G__37600 = seq__37572_37591;
var G__37601 = chunk__37574_37592;
var G__37602 = count__37575_37593;
var G__37603 = (i__37576_37594 + (1));
seq__37572_37591 = G__37600;
chunk__37574_37592 = G__37601;
count__37575_37593 = G__37602;
i__37576_37594 = G__37603;
continue;
}
} else {
var temp__5457__auto___37604 = cljs.core.seq(seq__37572_37591);
if(temp__5457__auto___37604){
var seq__37572_37605__$1 = temp__5457__auto___37604;
if(cljs.core.chunked_seq_QMARK_(seq__37572_37605__$1)){
var c__6057__auto___37606 = cljs.core.chunk_first(seq__37572_37605__$1);
var G__37607 = cljs.core.chunk_rest(seq__37572_37605__$1);
var G__37608 = c__6057__auto___37606;
var G__37609 = cljs.core.count(c__6057__auto___37606);
var G__37610 = (0);
seq__37572_37591 = G__37607;
chunk__37574_37592 = G__37608;
count__37575_37593 = G__37609;
i__37576_37594 = G__37610;
continue;
} else {
var child_37611 = cljs.core.first(seq__37572_37605__$1);
if(cljs.core.truth_(child_37611)){
node.appendChild(child_37611);

var G__37612 = cljs.core.next(seq__37572_37605__$1);
var G__37613 = null;
var G__37614 = (0);
var G__37615 = (0);
seq__37572_37591 = G__37612;
chunk__37574_37592 = G__37613;
count__37575_37593 = G__37614;
i__37576_37594 = G__37615;
continue;
} else {
var G__37616 = cljs.core.next(seq__37572_37605__$1);
var G__37617 = null;
var G__37618 = (0);
var G__37619 = (0);
seq__37572_37591 = G__37616;
chunk__37574_37592 = G__37617;
count__37575_37593 = G__37618;
i__37576_37594 = G__37619;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37590);
}
}

var G__37620 = seq__37566_37584;
var G__37621 = chunk__37568_37585;
var G__37622 = count__37569_37586;
var G__37623 = (i__37570_37587 + (1));
seq__37566_37584 = G__37620;
chunk__37568_37585 = G__37621;
count__37569_37586 = G__37622;
i__37570_37587 = G__37623;
continue;
} else {
var G__37624 = seq__37566_37584;
var G__37625 = chunk__37568_37585;
var G__37626 = count__37569_37586;
var G__37627 = (i__37570_37587 + (1));
seq__37566_37584 = G__37624;
chunk__37568_37585 = G__37625;
count__37569_37586 = G__37626;
i__37570_37587 = G__37627;
continue;
}
} else {
var temp__5457__auto___37628 = cljs.core.seq(seq__37566_37584);
if(temp__5457__auto___37628){
var seq__37566_37629__$1 = temp__5457__auto___37628;
if(cljs.core.chunked_seq_QMARK_(seq__37566_37629__$1)){
var c__6057__auto___37630 = cljs.core.chunk_first(seq__37566_37629__$1);
var G__37631 = cljs.core.chunk_rest(seq__37566_37629__$1);
var G__37632 = c__6057__auto___37630;
var G__37633 = cljs.core.count(c__6057__auto___37630);
var G__37634 = (0);
seq__37566_37584 = G__37631;
chunk__37568_37585 = G__37632;
count__37569_37586 = G__37633;
i__37570_37587 = G__37634;
continue;
} else {
var child_struct_37635 = cljs.core.first(seq__37566_37629__$1);
if(!((child_struct_37635 == null))){
if(typeof child_struct_37635 === 'string'){
var text_37636 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37636),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_37635)].join(''));
} else {
var children_37637 = shadow.dom.svg_node(child_struct_37635);
if(cljs.core.seq_QMARK_(children_37637)){
var seq__37578_37638 = cljs.core.seq(children_37637);
var chunk__37580_37639 = null;
var count__37581_37640 = (0);
var i__37582_37641 = (0);
while(true){
if((i__37582_37641 < count__37581_37640)){
var child_37642 = chunk__37580_37639.cljs$core$IIndexed$_nth$arity$2(null,i__37582_37641);
if(cljs.core.truth_(child_37642)){
node.appendChild(child_37642);

var G__37643 = seq__37578_37638;
var G__37644 = chunk__37580_37639;
var G__37645 = count__37581_37640;
var G__37646 = (i__37582_37641 + (1));
seq__37578_37638 = G__37643;
chunk__37580_37639 = G__37644;
count__37581_37640 = G__37645;
i__37582_37641 = G__37646;
continue;
} else {
var G__37647 = seq__37578_37638;
var G__37648 = chunk__37580_37639;
var G__37649 = count__37581_37640;
var G__37650 = (i__37582_37641 + (1));
seq__37578_37638 = G__37647;
chunk__37580_37639 = G__37648;
count__37581_37640 = G__37649;
i__37582_37641 = G__37650;
continue;
}
} else {
var temp__5457__auto___37651__$1 = cljs.core.seq(seq__37578_37638);
if(temp__5457__auto___37651__$1){
var seq__37578_37652__$1 = temp__5457__auto___37651__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37578_37652__$1)){
var c__6057__auto___37653 = cljs.core.chunk_first(seq__37578_37652__$1);
var G__37654 = cljs.core.chunk_rest(seq__37578_37652__$1);
var G__37655 = c__6057__auto___37653;
var G__37656 = cljs.core.count(c__6057__auto___37653);
var G__37657 = (0);
seq__37578_37638 = G__37654;
chunk__37580_37639 = G__37655;
count__37581_37640 = G__37656;
i__37582_37641 = G__37657;
continue;
} else {
var child_37658 = cljs.core.first(seq__37578_37652__$1);
if(cljs.core.truth_(child_37658)){
node.appendChild(child_37658);

var G__37659 = cljs.core.next(seq__37578_37652__$1);
var G__37660 = null;
var G__37661 = (0);
var G__37662 = (0);
seq__37578_37638 = G__37659;
chunk__37580_37639 = G__37660;
count__37581_37640 = G__37661;
i__37582_37641 = G__37662;
continue;
} else {
var G__37663 = cljs.core.next(seq__37578_37652__$1);
var G__37664 = null;
var G__37665 = (0);
var G__37666 = (0);
seq__37578_37638 = G__37663;
chunk__37580_37639 = G__37664;
count__37581_37640 = G__37665;
i__37582_37641 = G__37666;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37637);
}
}

var G__37667 = cljs.core.next(seq__37566_37629__$1);
var G__37668 = null;
var G__37669 = (0);
var G__37670 = (0);
seq__37566_37584 = G__37667;
chunk__37568_37585 = G__37668;
count__37569_37586 = G__37669;
i__37570_37587 = G__37670;
continue;
} else {
var G__37671 = cljs.core.next(seq__37566_37629__$1);
var G__37672 = null;
var G__37673 = (0);
var G__37674 = (0);
seq__37566_37584 = G__37671;
chunk__37568_37585 = G__37672;
count__37569_37586 = G__37673;
i__37570_37587 = G__37674;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__37675_37681 = shadow.dom._to_svg;
var G__37676_37682 = "string";
var G__37677_37683 = ((function (G__37675_37681,G__37676_37682){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__37675_37681,G__37676_37682))
;
goog.object.set(G__37675_37681,G__37676_37682,G__37677_37683);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__37678_37684 = shadow.dom._to_svg;
var G__37679_37685 = "null";
var G__37680_37686 = ((function (G__37678_37684,G__37679_37685){
return (function (_){
return null;
});})(G__37678_37684,G__37679_37685))
;
goog.object.set(G__37678_37684,G__37679_37685,G__37680_37686);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__6412__auto__ = [];
var len__6405__auto___37689 = arguments.length;
var i__6406__auto___37690 = (0);
while(true){
if((i__6406__auto___37690 < len__6405__auto___37689)){
args__6412__auto__.push((arguments[i__6406__auto___37690]));

var G__37691 = (i__6406__auto___37690 + (1));
i__6406__auto___37690 = G__37691;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((1) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6413__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

shadow.dom.svg.cljs$lang$applyTo = (function (seq37687){
var G__37688 = cljs.core.first(seq37687);
var seq37687__$1 = cljs.core.next(seq37687);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__37688,seq37687__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37693 = arguments.length;
switch (G__37693) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__37694_37709 = shadow.dom.dom_node(el);
var G__37695_37710 = cljs.core.name(event);
var G__37696_37711 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37694_37709,G__37695_37710,G__37696_37711) : shadow.dom.dom_listen.call(null,G__37694_37709,G__37695_37710,G__37696_37711));

if(cljs.core.truth_((function (){var and__5114__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5114__auto__)){
return !(once_or_cleanup === true);
} else {
return and__5114__auto__;
}
})())){
var c__34082__auto___37712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto___37712,buf,chan,event_fn){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto___37712,buf,chan,event_fn){
return (function (state_37701){
var state_val_37702 = (state_37701[(1)]);
if((state_val_37702 === (1))){
var state_37701__$1 = state_37701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37701__$1,(2),once_or_cleanup);
} else {
if((state_val_37702 === (2))){
var inst_37698 = (state_37701[(2)]);
var inst_37699 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37701__$1 = (function (){var statearr_37703 = state_37701;
(statearr_37703[(7)] = inst_37698);

return statearr_37703;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37701__$1,inst_37699);
} else {
return null;
}
}
});})(c__34082__auto___37712,buf,chan,event_fn))
;
return ((function (switch__33799__auto__,c__34082__auto___37712,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33800__auto__ = null;
var shadow$dom$state_machine__33800__auto____0 = (function (){
var statearr_37704 = [null,null,null,null,null,null,null,null];
(statearr_37704[(0)] = shadow$dom$state_machine__33800__auto__);

(statearr_37704[(1)] = (1));

return statearr_37704;
});
var shadow$dom$state_machine__33800__auto____1 = (function (state_37701){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_37701);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e37705){if((e37705 instanceof Object)){
var ex__33803__auto__ = e37705;
var statearr_37706_37713 = state_37701;
(statearr_37706_37713[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37714 = state_37701;
state_37701 = G__37714;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
shadow$dom$state_machine__33800__auto__ = function(state_37701){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33800__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33800__auto____1.call(this,state_37701);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$dom$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33800__auto____0;
shadow$dom$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33800__auto____1;
return shadow$dom$state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto___37712,buf,chan,event_fn))
})();
var state__34085__auto__ = (function (){var statearr_37707 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_37707[(6)] = c__34082__auto___37712);

return statearr_37707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto___37712,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
