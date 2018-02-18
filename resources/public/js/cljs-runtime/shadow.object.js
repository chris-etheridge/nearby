goog.provide('shadow.object');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('cljs.core.async.impl.protocols');
goog.require('shadow.util');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

shadow.object._id = (function shadow$object$_id(this$){
if((!((this$ == null))) && (!((this$.shadow$object$IObject$_id$arity$1 == null)))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
var x__5859__auto__ = (((this$ == null))?null:this$);
var m__5860__auto__ = (shadow.object._id[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto__.call(null,this$));
} else {
var m__5860__auto____$1 = (shadow.object._id["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
}
});

shadow.object._type = (function shadow$object$_type(this$){
if((!((this$ == null))) && (!((this$.shadow$object$IObject$_type$arity$1 == null)))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
var x__5859__auto__ = (((this$ == null))?null:this$);
var m__5860__auto__ = (shadow.object._type[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto__.call(null,this$));
} else {
var m__5860__auto____$1 = (shadow.object._type["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
}
});

shadow.object._data = (function shadow$object$_data(this$){
if((!((this$ == null))) && (!((this$.shadow$object$IObject$_data$arity$1 == null)))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
var x__5859__auto__ = (((this$ == null))?null:this$);
var m__5860__auto__ = (shadow.object._data[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto__.call(null,this$));
} else {
var m__5860__auto____$1 = (shadow.object._data["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
}
});

/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((!((this$ == null))) && (!((this$.shadow$object$IObject$_update$arity$2 == null)))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
var x__5859__auto__ = (((this$ == null))?null:this$);
var m__5860__auto__ = (shadow.object._update[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5860__auto__.call(null,this$,update_fn));
} else {
var m__5860__auto____$1 = (shadow.object._update["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5860__auto____$1.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
}
});

shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((!((this$ == null))) && (!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
var x__5859__auto__ = (((this$ == null))?null:this$);
var m__5860__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5860__auto__.call(null,this$,cause));
} else {
var m__5860__auto____$1 = (shadow.object._destroy_BANG_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5860__auto____$1.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__37716 = arguments.length;
switch (G__37716) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
});

shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
});

shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3;

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__5126__auto__ = ((!((obj_or_dom == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$)))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__5126__auto__){
return or__5126__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if(((!((obj == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$)))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if(((!((obj_or_dom == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$)))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5457__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5457__auto__)){
var oid = temp__5457__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5457__auto__)){
var parent_id = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__37722 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__37722;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parent_id,child_ids,instances){
return (function (p1__37723_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__37723_SHARP_);
});})(parent_id,child_ids,instances))
,child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__37725 = arguments.length;
switch (G__37725) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
});

shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
});

shadow.object.tree_seq.cljs$lang$maxFixedArity = 2;

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (type_kw){
return (function (p1__37727_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__37727_SHARP_));
});})(type_kw))
,shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__37728){
var map__37729 = p__37728;
var map__37729__$1 = ((((!((map__37729 == null)))?((((map__37729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37729):map__37729);
var oref = map__37729__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37729__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__37733 = arguments.length;
switch (G__37733) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
});

shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (type_kw){
return (function (p1__37731_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__37731_SHARP_));
});})(type_kw))
,shadow.object.get_siblings(oref));
});

shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2;

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5455__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5455__auto__)){
var obj = temp__5455__auto__;
return obj;
} else {
var temp__5457__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5457__auto__)){
var parent = temp__5457__auto__;
var G__37735 = parent;
dom = G__37735;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__6412__auto__ = [];
var len__6405__auto___37743 = arguments.length;
var i__6406__auto___37744 = (0);
while(true){
if((i__6406__auto___37744 < len__6405__auto___37743)){
args__6412__auto__.push((arguments[i__6406__auto___37744]));

var G__37745 = (i__6406__auto___37744 + (1));
i__6406__auto___37744 = G__37745;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((2) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6413__auto__);
});

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5457__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5457__auto__)){
var reactions_to_trigger = temp__5457__auto__;
var seq__37739 = cljs.core.seq(reactions_to_trigger);
var chunk__37740 = null;
var count__37741 = (0);
var i__37742 = (0);
while(true){
if((i__37742 < count__37741)){
var rfn = chunk__37740.cljs$core$IIndexed$_nth$arity$2(null,i__37742);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));

var G__37746 = seq__37739;
var G__37747 = chunk__37740;
var G__37748 = count__37741;
var G__37749 = (i__37742 + (1));
seq__37739 = G__37746;
chunk__37740 = G__37747;
count__37741 = G__37748;
i__37742 = G__37749;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__37739);
if(temp__5457__auto____$1){
var seq__37739__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37739__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__37739__$1);
var G__37750 = cljs.core.chunk_rest(seq__37739__$1);
var G__37751 = c__6057__auto__;
var G__37752 = cljs.core.count(c__6057__auto__);
var G__37753 = (0);
seq__37739 = G__37750;
chunk__37740 = G__37751;
count__37741 = G__37752;
i__37742 = G__37753;
continue;
} else {
var rfn = cljs.core.first(seq__37739__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));

var G__37754 = cljs.core.next(seq__37739__$1);
var G__37755 = null;
var G__37756 = (0);
var G__37757 = (0);
seq__37739 = G__37754;
chunk__37740 = G__37755;
count__37741 = G__37756;
i__37742 = G__37757;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});

shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2);

shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq37736){
var G__37737 = cljs.core.first(seq37736);
var seq37736__$1 = cljs.core.next(seq37736);
var G__37738 = cljs.core.first(seq37736__$1);
var seq37736__$2 = cljs.core.next(seq37736__$1);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37737,G__37738,seq37736__$2);
});

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__37758_37762 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__37759_37763 = null;
var count__37760_37764 = (0);
var i__37761_37765 = (0);
while(true){
if((i__37761_37765 < count__37760_37764)){
var child_37766 = chunk__37759_37763.cljs$core$IIndexed$_nth$arity$2(null,i__37761_37765);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_37766,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_37766,ev,notify_fn));

var G__37767 = seq__37758_37762;
var G__37768 = chunk__37759_37763;
var G__37769 = count__37760_37764;
var G__37770 = (i__37761_37765 + (1));
seq__37758_37762 = G__37767;
chunk__37759_37763 = G__37768;
count__37760_37764 = G__37769;
i__37761_37765 = G__37770;
continue;
} else {
var temp__5457__auto___37771 = cljs.core.seq(seq__37758_37762);
if(temp__5457__auto___37771){
var seq__37758_37772__$1 = temp__5457__auto___37771;
if(cljs.core.chunked_seq_QMARK_(seq__37758_37772__$1)){
var c__6057__auto___37773 = cljs.core.chunk_first(seq__37758_37772__$1);
var G__37774 = cljs.core.chunk_rest(seq__37758_37772__$1);
var G__37775 = c__6057__auto___37773;
var G__37776 = cljs.core.count(c__6057__auto___37773);
var G__37777 = (0);
seq__37758_37762 = G__37774;
chunk__37759_37763 = G__37775;
count__37760_37764 = G__37776;
i__37761_37765 = G__37777;
continue;
} else {
var child_37778 = cljs.core.first(seq__37758_37772__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_37778,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_37778,ev,notify_fn));

var G__37779 = cljs.core.next(seq__37758_37772__$1);
var G__37780 = null;
var G__37781 = (0);
var G__37782 = (0);
seq__37758_37762 = G__37779;
chunk__37759_37763 = G__37780;
count__37760_37764 = G__37781;
i__37761_37765 = G__37782;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__6412__auto__ = [];
var len__6405__auto___37786 = arguments.length;
var i__6406__auto___37787 = (0);
while(true){
if((i__6406__auto___37787 < len__6405__auto___37786)){
args__6412__auto__.push((arguments[i__6406__auto___37787]));

var G__37788 = (i__6406__auto___37787 + (1));
i__6406__auto___37787 = G__37788;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((2) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6413__auto__);
});

shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
});

shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2);

shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq37783){
var G__37784 = cljs.core.first(seq37783);
var seq37783__$1 = cljs.core.next(seq37783);
var G__37785 = cljs.core.first(seq37783__$1);
var seq37783__$2 = cljs.core.next(seq37783__$1);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37784,G__37785,seq37783__$2);
});

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__6412__auto__ = [];
var len__6405__auto___37792 = arguments.length;
var i__6406__auto___37793 = (0);
while(true){
if((i__6406__auto___37793 < len__6405__auto___37792)){
args__6412__auto__.push((arguments[i__6406__auto___37793]));

var G__37794 = (i__6406__auto___37793 + (1));
i__6406__auto___37793 = G__37794;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((2) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6413__auto__);
});

shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__37795 = shadow.object.get_parent(current);
current = G__37795;
continue;
} else {
return null;
}
break;
}
});

shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2);

shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq37789){
var G__37790 = cljs.core.first(seq37789);
var seq37789__$1 = cljs.core.next(seq37789);
var G__37791 = cljs.core.first(seq37789__$1);
var seq37789__$2 = cljs.core.next(seq37789__$1);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37790,G__37791,seq37789__$2);
});

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__6412__auto__ = [];
var len__6405__auto___37799 = arguments.length;
var i__6406__auto___37800 = (0);
while(true){
if((i__6406__auto___37800 < len__6405__auto___37799)){
args__6412__auto__.push((arguments[i__6406__auto___37800]));

var G__37801 = (i__6406__auto___37800 + (1));
i__6406__auto___37800 = G__37801;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((2) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6413__auto__);
});

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0)))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = ((function (id,data){
return (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});})(id,data))
;
return shadow.object._update(oref,work_fn);
});

shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2);

shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq37796){
var G__37797 = cljs.core.first(seq37796);
var seq37796__$1 = cljs.core.next(seq37796);
var G__37798 = cljs.core.first(seq37796__$1);
var seq37796__$2 = cljs.core.next(seq37796__$1);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37797,G__37798,seq37796__$2);
});

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,((function (child_id,parent_id){
return (function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
});})(child_id,parent_id))
);

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5455__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5455__auto__)){
var custom_remove = temp__5455__auto__;
var G__37802 = this$;
var G__37803 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__37802,G__37803) : custom_remove.call(null,G__37802,G__37803));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__37805 = arguments.length;
switch (G__37805) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
});

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
});

shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2;

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__37807 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__37808 = null;
var count__37809 = (0);
var i__37810 = (0);
while(true){
if((i__37810 < count__37809)){
var vec__37811 = chunk__37808.cljs$core$IIndexed$_nth$arity$2(null,i__37810);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37811,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37811,(1),null);
var ev_def = vec__37811;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0)))].join('');
} else {
}

var handler_37817__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__37807,chunk__37808,count__37809,i__37810,vec__37811,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__37807,chunk__37808,count__37809,i__37810,vec__37811,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__37807,chunk__37808,count__37809,i__37810,handler_37817__$1,vec__37811,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_37817__$1.cljs$core$IFn$_invoke$arity$3 ? handler_37817__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_37817__$1.call(null,oref,e,el));
});})(seq__37807,chunk__37808,count__37809,i__37810,handler_37817__$1,vec__37811,ev,handler,ev_def))
);

var G__37818 = seq__37807;
var G__37819 = chunk__37808;
var G__37820 = count__37809;
var G__37821 = (i__37810 + (1));
seq__37807 = G__37818;
chunk__37808 = G__37819;
count__37809 = G__37820;
i__37810 = G__37821;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__37807);
if(temp__5457__auto__){
var seq__37807__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37807__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__37807__$1);
var G__37822 = cljs.core.chunk_rest(seq__37807__$1);
var G__37823 = c__6057__auto__;
var G__37824 = cljs.core.count(c__6057__auto__);
var G__37825 = (0);
seq__37807 = G__37822;
chunk__37808 = G__37823;
count__37809 = G__37824;
i__37810 = G__37825;
continue;
} else {
var vec__37814 = cljs.core.first(seq__37807__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37814,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37814,(1),null);
var ev_def = vec__37814;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0)))].join('');
} else {
}

var handler_37826__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__37807,chunk__37808,count__37809,i__37810,vec__37814,ev,handler,ev_def,seq__37807__$1,temp__5457__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__37807,chunk__37808,count__37809,i__37810,vec__37814,ev,handler,ev_def,seq__37807__$1,temp__5457__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__37807,chunk__37808,count__37809,i__37810,handler_37826__$1,vec__37814,ev,handler,ev_def,seq__37807__$1,temp__5457__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_37826__$1.cljs$core$IFn$_invoke$arity$3 ? handler_37826__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_37826__$1.call(null,oref,e,el));
});})(seq__37807,chunk__37808,count__37809,i__37810,handler_37826__$1,vec__37814,ev,handler,ev_def,seq__37807__$1,temp__5457__auto__))
);

var G__37827 = cljs.core.next(seq__37807__$1);
var G__37828 = null;
var G__37829 = (0);
var G__37830 = (0);
seq__37807 = G__37827;
chunk__37808 = G__37828;
count__37809 = G__37829;
i__37810 = G__37830;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__37831){
var vec__37832 = p__37831;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37832,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37832,(1),null);
if(cljs.core.truth_((function (){var and__5114__auto__ = event;
if(cljs.core.truth_(and__5114__auto__)){
return handler;
} else {
return and__5114__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__6412__auto__ = [];
var len__6405__auto___37839 = arguments.length;
var i__6406__auto___37840 = (0);
while(true){
if((i__6406__auto___37840 < len__6405__auto___37839)){
args__6412__auto__.push((arguments[i__6406__auto___37840]));

var G__37841 = (i__6406__auto___37840 + (1));
i__6406__auto___37840 = G__37841;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((1) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6413__auto__);
});

shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''))," args: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
var G__37837_37842 = ["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
console.warn(G__37837_37842);
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e37838){if((e37838 instanceof Object)){
var e = e37838;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e37838;

}
}});

shadow.object.define.cljs$lang$maxFixedArity = (1);

shadow.object.define.cljs$lang$applyTo = (function (seq37835){
var G__37836 = cljs.core.first(seq37835);
var seq37835__$1 = cljs.core.next(seq37835);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic(G__37836,seq37835__$1);
});

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__37844 = arguments.length;
switch (G__37844) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
});

shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__37845 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__37845) : shadow.dom.build.call(null,G__37845));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
});

shadow.object.make_dom.cljs$lang$maxFixedArity = 4;

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18319__auto__,k__18320__auto__){
var self__ = this;
var this__18319__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__18319__auto____$1,k__18320__auto__,null);
});

shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18321__auto__,k37848,else__18322__auto__){
var self__ = this;
var this__18321__auto____$1 = this;
var G__37852 = k37848;
var G__37852__$1 = (((G__37852 instanceof cljs.core.Keyword))?G__37852.fqn:null);
switch (G__37852__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37848,else__18322__auto__);

}
});

shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18333__auto__,writer__18334__auto__,opts__18335__auto__){
var self__ = this;
var this__18333__auto____$1 = this;
var pr_pair__18336__auto__ = ((function (this__18333__auto____$1){
return (function (keyval__18337__auto__){
return cljs.core.pr_sequential_writer(writer__18334__auto__,cljs.core.pr_writer,""," ","",opts__18335__auto__,keyval__18337__auto__);
});})(this__18333__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__18334__auto__,pr_pair__18336__auto__,"#shadow.object.Watch{",", ","}",opts__18335__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37847){
var self__ = this;
var G__37847__$1 = this;
return (new cljs.core.RecordIter((0),G__37847__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18317__auto__){
var self__ = this;
var this__18317__auto____$1 = this;
return self__.__meta;
});

shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18314__auto__){
var self__ = this;
var this__18314__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18323__auto__){
var self__ = this;
var this__18323__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18315__auto__){
var self__ = this;
var this__18315__auto____$1 = this;
var h__5582__auto__ = self__.__hash;
if(!((h__5582__auto__ == null))){
return h__5582__auto__;
} else {
var h__5582__auto____$1 = (function (){var fexpr__37853 = ((function (h__5582__auto__,this__18315__auto____$1){
return (function (coll__18316__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__18316__auto__));
});})(h__5582__auto__,this__18315__auto____$1))
;
return fexpr__37853(this__18315__auto____$1);
})();
self__.__hash = h__5582__auto____$1;

return h__5582__auto____$1;
}
});

shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37849,other37850){
var self__ = this;
var this37849__$1 = this;
return (!((other37850 == null))) && ((this37849__$1.constructor === other37850.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37849__$1.key,other37850.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37849__$1.handler,other37850.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37849__$1.__extmap,other37850.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18328__auto__,k__18329__auto__){
var self__ = this;
var this__18328__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__18329__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__18328__auto____$1),self__.__meta),k__18329__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__18329__auto__)),null));
}
});

shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18326__auto__,k__18327__auto__,G__37847){
var self__ = this;
var this__18326__auto____$1 = this;
var pred__37854 = cljs.core.keyword_identical_QMARK_;
var expr__37855 = k__18327__auto__;
if(cljs.core.truth_((function (){var G__37857 = new cljs.core.Keyword(null,"key","key",-1516042587);
var G__37858 = expr__37855;
return (pred__37854.cljs$core$IFn$_invoke$arity$2 ? pred__37854.cljs$core$IFn$_invoke$arity$2(G__37857,G__37858) : pred__37854.call(null,G__37857,G__37858));
})())){
return (new shadow.object.Watch(G__37847,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37859 = new cljs.core.Keyword(null,"handler","handler",-195596612);
var G__37860 = expr__37855;
return (pred__37854.cljs$core$IFn$_invoke$arity$2 ? pred__37854.cljs$core$IFn$_invoke$arity$2(G__37859,G__37860) : pred__37854.call(null,G__37859,G__37860));
})())){
return (new shadow.object.Watch(self__.key,G__37847,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__18327__auto__,G__37847),null));
}
}
});

shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18331__auto__){
var self__ = this;
var this__18331__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18318__auto__,G__37847){
var self__ = this;
var this__18318__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__37847,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18324__auto__,entry__18325__auto__){
var self__ = this;
var this__18324__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__18325__auto__)){
return cljs.core._assoc(this__18324__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__18325__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__18325__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__18324__auto____$1,entry__18325__auto__);
}
});

shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
});

shadow.object.Watch.cljs$lang$type = true;

shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__5852__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"shadow.object/Watch");
});

shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__5852__auto__,writer__5853__auto__){
return cljs.core._write(writer__5853__auto__,"shadow.object/Watch");
});

shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__37851){
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__37851),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__37851),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37851,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
});

shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
});

shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
});

shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
});

shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
});

shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
});

shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return ((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(this$__$1),shadow.object._id(other)));
});

shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null)));
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__37862_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__37862_SHARP_));
});})(this$__$1))
,self__.watches);
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
self__.data = new$;

var seq__37863 = cljs.core.seq(self__.watches);
var chunk__37864 = null;
var count__37865 = (0);
var i__37866 = (0);
while(true){
if((i__37866 < count__37865)){
var map__37867 = chunk__37864.cljs$core$IIndexed$_nth$arity$2(null,i__37866);
var map__37867__$1 = ((((!((map__37867 == null)))?((((map__37867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37867):map__37867);
var watch = map__37867__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37867__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37867__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(shadow.object.alive_QMARK_(this$__$1))){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}

var G__37875 = seq__37863;
var G__37876 = chunk__37864;
var G__37877 = count__37865;
var G__37878 = (i__37866 + (1));
seq__37863 = G__37875;
chunk__37864 = G__37876;
count__37865 = G__37877;
i__37866 = G__37878;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__37863);
if(temp__5457__auto__){
var seq__37863__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37863__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__37863__$1);
var G__37879 = cljs.core.chunk_rest(seq__37863__$1);
var G__37880 = c__6057__auto__;
var G__37881 = cljs.core.count(c__6057__auto__);
var G__37882 = (0);
seq__37863 = G__37879;
chunk__37864 = G__37880;
count__37865 = G__37881;
i__37866 = G__37882;
continue;
} else {
var map__37869 = cljs.core.first(seq__37863__$1);
var map__37869__$1 = ((((!((map__37869 == null)))?((((map__37869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37869):map__37869);
var watch = map__37869__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37869__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37869__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(shadow.object.alive_QMARK_(this$__$1))){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}

var G__37883 = cljs.core.next(seq__37863__$1);
var G__37884 = null;
var G__37885 = (0);
var G__37886 = (0);
seq__37863 = G__37883;
chunk__37864 = G__37884;
count__37865 = G__37885;
i__37866 = G__37886;
continue;
}
} else {
return null;
}
}
break;
}
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__37871_37887 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__37872_37888 = null;
var count__37873_37889 = (0);
var i__37874_37890 = (0);
while(true){
if((i__37874_37890 < count__37873_37889)){
var child_37891 = chunk__37872_37888.cljs$core$IIndexed$_nth$arity$2(null,i__37874_37890);
shadow.object._destroy_BANG_(child_37891,new cljs.core.Keyword(null,"parent","parent",-878878779));

var G__37892 = seq__37871_37887;
var G__37893 = chunk__37872_37888;
var G__37894 = count__37873_37889;
var G__37895 = (i__37874_37890 + (1));
seq__37871_37887 = G__37892;
chunk__37872_37888 = G__37893;
count__37873_37889 = G__37894;
i__37874_37890 = G__37895;
continue;
} else {
var temp__5457__auto___37896 = cljs.core.seq(seq__37871_37887);
if(temp__5457__auto___37896){
var seq__37871_37897__$1 = temp__5457__auto___37896;
if(cljs.core.chunked_seq_QMARK_(seq__37871_37897__$1)){
var c__6057__auto___37898 = cljs.core.chunk_first(seq__37871_37897__$1);
var G__37899 = cljs.core.chunk_rest(seq__37871_37897__$1);
var G__37900 = c__6057__auto___37898;
var G__37901 = cljs.core.count(c__6057__auto___37898);
var G__37902 = (0);
seq__37871_37887 = G__37899;
chunk__37872_37888 = G__37900;
count__37873_37889 = G__37901;
i__37874_37890 = G__37902;
continue;
} else {
var child_37903 = cljs.core.first(seq__37871_37897__$1);
shadow.object._destroy_BANG_(child_37903,new cljs.core.Keyword(null,"parent","parent",-878878779));

var G__37904 = cljs.core.next(seq__37871_37897__$1);
var G__37905 = null;
var G__37906 = (0);
var G__37907 = (0);
seq__37871_37887 = G__37904;
chunk__37872_37888 = G__37905;
count__37873_37889 = G__37906;
i__37874_37890 = G__37907;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_37908 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_37908 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_37908);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
});

shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
});

shadow.object.ObjectRef.cljs$lang$type = true;

shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef";

shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"shadow.object/ObjectRef");
});

shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__37910 = arguments.length;
switch (G__37910) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
});

shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
});

shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3;

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__37913 = arguments.length;
switch (G__37913) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
});

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if(((!((oref == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$)))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,((function (attr__$1){
return (function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
});})(attr__$1))
);
});

shadow.object.bind_change.cljs$lang$maxFixedArity = 4;

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__6412__auto__ = [];
var len__6405__auto___37930 = arguments.length;
var i__6406__auto___37931 = (0);
while(true){
if((i__6406__auto___37931 < len__6405__auto___37930)){
args__6412__auto__.push((arguments[i__6406__auto___37931]));

var G__37932 = (i__6406__auto___37931 + (1));
i__6406__auto___37931 = G__37932;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((2) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6413__auto__);
});

shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_37933 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5455__auto___37934 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5455__auto___37934)){
var dom_37935 = temp__5455__auto___37934;
shadow.dom.set_data(dom_37935,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_37935,dom_events_37933);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_37935], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_37935], 0));
} else {
var temp__5457__auto___37936 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5457__auto___37936)){
var dom_fn_37937 = temp__5457__auto___37936;
var dom_37938 = (function (){var G__37919 = (dom_fn_37937.cljs$core$IFn$_invoke$arity$2 ? dom_fn_37937.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_37937.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__37919) : shadow.dom.build.call(null,G__37919));
})();
shadow.dom.set_data(dom_37938,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_37938], 0));

shadow.object.bind_dom_events(oref,dom_37938,dom_events_37933);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_37938], 0));
} else {
}
}

var temp__5457__auto___37939 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5457__auto___37939)){
var watches_37940 = temp__5457__auto___37939;
var seq__37920_37941 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_37940));
var chunk__37921_37942 = null;
var count__37922_37943 = (0);
var i__37923_37944 = (0);
while(true){
if((i__37923_37944 < count__37922_37943)){
var vec__37924_37945 = chunk__37921_37942.cljs$core$IIndexed$_nth$arity$2(null,i__37923_37944);
var attr_37946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37924_37945,(0),null);
var handler_37947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37924_37945,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_37946,((function (seq__37920_37941,chunk__37921_37942,count__37922_37943,i__37923_37944,vec__37924_37945,attr_37946,handler_37947,watches_37940,temp__5457__auto___37939,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_37947.cljs$core$IFn$_invoke$arity$3 ? handler_37947.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_37947.call(null,oref,old,new$));
});})(seq__37920_37941,chunk__37921_37942,count__37922_37943,i__37923_37944,vec__37924_37945,attr_37946,handler_37947,watches_37940,temp__5457__auto___37939,oid,parent,result_chan,odef,obj,oref))
);

var G__37948 = seq__37920_37941;
var G__37949 = chunk__37921_37942;
var G__37950 = count__37922_37943;
var G__37951 = (i__37923_37944 + (1));
seq__37920_37941 = G__37948;
chunk__37921_37942 = G__37949;
count__37922_37943 = G__37950;
i__37923_37944 = G__37951;
continue;
} else {
var temp__5457__auto___37952__$1 = cljs.core.seq(seq__37920_37941);
if(temp__5457__auto___37952__$1){
var seq__37920_37953__$1 = temp__5457__auto___37952__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37920_37953__$1)){
var c__6057__auto___37954 = cljs.core.chunk_first(seq__37920_37953__$1);
var G__37955 = cljs.core.chunk_rest(seq__37920_37953__$1);
var G__37956 = c__6057__auto___37954;
var G__37957 = cljs.core.count(c__6057__auto___37954);
var G__37958 = (0);
seq__37920_37941 = G__37955;
chunk__37921_37942 = G__37956;
count__37922_37943 = G__37957;
i__37923_37944 = G__37958;
continue;
} else {
var vec__37927_37959 = cljs.core.first(seq__37920_37953__$1);
var attr_37960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37927_37959,(0),null);
var handler_37961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37927_37959,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_37960,((function (seq__37920_37941,chunk__37921_37942,count__37922_37943,i__37923_37944,vec__37927_37959,attr_37960,handler_37961,seq__37920_37953__$1,temp__5457__auto___37952__$1,watches_37940,temp__5457__auto___37939,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_37961.cljs$core$IFn$_invoke$arity$3 ? handler_37961.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_37961.call(null,oref,old,new$));
});})(seq__37920_37941,chunk__37921_37942,count__37922_37943,i__37923_37944,vec__37927_37959,attr_37960,handler_37961,seq__37920_37953__$1,temp__5457__auto___37952__$1,watches_37940,temp__5457__auto___37939,oid,parent,result_chan,odef,obj,oref))
);

var G__37962 = cljs.core.next(seq__37920_37953__$1);
var G__37963 = null;
var G__37964 = (0);
var G__37965 = (0);
seq__37920_37941 = G__37962;
chunk__37921_37942 = G__37963;
count__37922_37943 = G__37964;
i__37923_37944 = G__37965;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
});

shadow.object.create.cljs$lang$maxFixedArity = (2);

shadow.object.create.cljs$lang$applyTo = (function (seq37916){
var G__37917 = cljs.core.first(seq37916);
var seq37916__$1 = cljs.core.next(seq37916);
var G__37918 = cljs.core.first(seq37916__$1);
var seq37916__$2 = cljs.core.next(seq37916__$1);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic(G__37917,G__37918,seq37916__$2);
});

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__37968 = arguments.length;
switch (G__37968) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
});

shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = ((function (attr__$1){
return (function (p1__37966_SHARP_){
var G__37969 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__37966_SHARP_) : node_gen.call(null,p1__37966_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__37969) : shadow.dom.build.call(null,G__37969));
});})(attr__$1))
;
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,((function (attr__$1,node_get,node,bind_key){
return (function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
});})(attr__$1,node_get,node,bind_key))
);

return cljs.core.deref(node);
});

shadow.object.bind_simple.cljs$lang$maxFixedArity = 3;

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = ((function (attr__$1,curval){
return (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});})(attr__$1,curval))
;
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,((function (attr__$1,curval,make_child_fn,child){
return (function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

var G__37971 = new_child;
var G__37972 = new cljs.core.Keyword("dom","entered","dom/entered",506699596);
return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(G__37971,G__37972) : shadow.object.notify_down_BANG_.call(null,G__37971,G__37972));
});})(attr__$1,curval,make_child_fn,child))
);

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__37973_37977 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__37974_37978 = null;
var count__37975_37979 = (0);
var i__37976_37980 = (0);
while(true){
if((i__37976_37980 < count__37975_37979)){
var obj_37981 = chunk__37974_37978.cljs$core$IIndexed$_nth$arity$2(null,i__37976_37980);
var obj_37982__$1 = shadow.object.get_from_dom(obj_37981);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_37982__$1);

var G__37983 = seq__37973_37977;
var G__37984 = chunk__37974_37978;
var G__37985 = count__37975_37979;
var G__37986 = (i__37976_37980 + (1));
seq__37973_37977 = G__37983;
chunk__37974_37978 = G__37984;
count__37975_37979 = G__37985;
i__37976_37980 = G__37986;
continue;
} else {
var temp__5457__auto___37987 = cljs.core.seq(seq__37973_37977);
if(temp__5457__auto___37987){
var seq__37973_37988__$1 = temp__5457__auto___37987;
if(cljs.core.chunked_seq_QMARK_(seq__37973_37988__$1)){
var c__6057__auto___37989 = cljs.core.chunk_first(seq__37973_37988__$1);
var G__37990 = cljs.core.chunk_rest(seq__37973_37988__$1);
var G__37991 = c__6057__auto___37989;
var G__37992 = cljs.core.count(c__6057__auto___37989);
var G__37993 = (0);
seq__37973_37977 = G__37990;
chunk__37974_37978 = G__37991;
count__37975_37979 = G__37992;
i__37976_37980 = G__37993;
continue;
} else {
var obj_37994 = cljs.core.first(seq__37973_37988__$1);
var obj_37995__$1 = shadow.object.get_from_dom(obj_37994);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_37995__$1);

var G__37996 = cljs.core.next(seq__37973_37988__$1);
var G__37997 = null;
var G__37998 = (0);
var G__37999 = (0);
seq__37973_37977 = G__37996;
chunk__37974_37978 = G__37997;
count__37975_37979 = G__37998;
i__37976_37980 = G__37999;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__38002 = arguments.length;
switch (G__38002) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__38000_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__38000_SHARP_);
}));
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = ((function (attr__$1,update_children,coll_dom){
return (function (p__38003){
var vec__38004 = p__38003;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38004,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38004,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,((function (obj,vec__38004,key,val,attr__$1,update_children,coll_dom){
return (function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
});})(obj,vec__38004,key,val,attr__$1,update_children,coll_dom))
);

return obj;
});})(attr__$1,update_children,coll_dom))
;
var seq__38007_38020 = cljs.core.seq((function (){var G__38011 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__38011) : coll_transform.call(null,G__38011));
})());
var chunk__38008_38021 = null;
var count__38009_38022 = (0);
var i__38010_38023 = (0);
while(true){
if((i__38010_38023 < count__38009_38022)){
var item_38024 = chunk__38008_38021.cljs$core$IIndexed$_nth$arity$2(null,i__38010_38023);
shadow.object.dom_enter(coll_dom,make_item_fn(item_38024));

var G__38025 = seq__38007_38020;
var G__38026 = chunk__38008_38021;
var G__38027 = count__38009_38022;
var G__38028 = (i__38010_38023 + (1));
seq__38007_38020 = G__38025;
chunk__38008_38021 = G__38026;
count__38009_38022 = G__38027;
i__38010_38023 = G__38028;
continue;
} else {
var temp__5457__auto___38029 = cljs.core.seq(seq__38007_38020);
if(temp__5457__auto___38029){
var seq__38007_38030__$1 = temp__5457__auto___38029;
if(cljs.core.chunked_seq_QMARK_(seq__38007_38030__$1)){
var c__6057__auto___38031 = cljs.core.chunk_first(seq__38007_38030__$1);
var G__38032 = cljs.core.chunk_rest(seq__38007_38030__$1);
var G__38033 = c__6057__auto___38031;
var G__38034 = cljs.core.count(c__6057__auto___38031);
var G__38035 = (0);
seq__38007_38020 = G__38032;
chunk__38008_38021 = G__38033;
count__38009_38022 = G__38034;
i__38010_38023 = G__38035;
continue;
} else {
var item_38036 = cljs.core.first(seq__38007_38030__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_38036));

var G__38037 = cljs.core.next(seq__38007_38030__$1);
var G__38038 = null;
var G__38039 = (0);
var G__38040 = (0);
seq__38007_38020 = G__38037;
chunk__38008_38021 = G__38038;
count__38009_38022 = G__38039;
i__38010_38023 = G__38040;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,((function (attr__$1,update_children,coll_dom,make_item_fn){
return (function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__5485__auto__ = count_new;
var y__5486__auto__ = count_children;
return ((x__5485__auto__ < y__5486__auto__) ? x__5485__auto__ : y__5486__auto__);
})();
var n__6171__auto___38041 = count_children__$1;
var idx_38042 = (0);
while(true){
if((idx_38042 < n__6171__auto___38041)){
var cn_38043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_38042);
var cc_38044 = shadow.object.get_from_dom(cn_38043);
var ckey_38045 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_38044);
var cval_38046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_38044,item_key);
var vec__38012_38047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_38042);
var nkey_38048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38012_38047,(0),null);
var nval_38049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38012_38047,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_38045,nkey_38048)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_38046,nval_38049))){
} else {
var new_obj_38050 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_38048,nval_38049], null));
shadow.dom.replace_node(cn_38043,new_obj_38050);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_38044);

shadow.object.notify_tree_BANG_(new_obj_38050,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__38051 = (idx_38042 + (1));
idx_38042 = G__38051;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__38015_38052 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__38016_38053 = null;
var count__38017_38054 = (0);
var i__38018_38055 = (0);
while(true){
if((i__38018_38055 < count__38017_38054)){
var item_38056 = chunk__38016_38053.cljs$core$IIndexed$_nth$arity$2(null,i__38018_38055);
shadow.object.dom_enter(coll_dom,make_item_fn(item_38056));

var G__38057 = seq__38015_38052;
var G__38058 = chunk__38016_38053;
var G__38059 = count__38017_38054;
var G__38060 = (i__38018_38055 + (1));
seq__38015_38052 = G__38057;
chunk__38016_38053 = G__38058;
count__38017_38054 = G__38059;
i__38018_38055 = G__38060;
continue;
} else {
var temp__5457__auto___38061 = cljs.core.seq(seq__38015_38052);
if(temp__5457__auto___38061){
var seq__38015_38062__$1 = temp__5457__auto___38061;
if(cljs.core.chunked_seq_QMARK_(seq__38015_38062__$1)){
var c__6057__auto___38063 = cljs.core.chunk_first(seq__38015_38062__$1);
var G__38064 = cljs.core.chunk_rest(seq__38015_38062__$1);
var G__38065 = c__6057__auto___38063;
var G__38066 = cljs.core.count(c__6057__auto___38063);
var G__38067 = (0);
seq__38015_38052 = G__38064;
chunk__38016_38053 = G__38065;
count__38017_38054 = G__38066;
i__38018_38055 = G__38067;
continue;
} else {
var item_38068 = cljs.core.first(seq__38015_38062__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_38068));

var G__38069 = cljs.core.next(seq__38015_38062__$1);
var G__38070 = null;
var G__38071 = (0);
var G__38072 = (0);
seq__38015_38052 = G__38069;
chunk__38016_38053 = G__38070;
count__38017_38054 = G__38071;
i__38018_38055 = G__38072;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
});})(attr__$1,update_children,coll_dom,make_item_fn))
);

return coll_dom;
});

shadow.object.bind_children.cljs$lang$maxFixedArity = 6;

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__5114__auto__ = key;
if(cljs.core.truth_(and__5114__auto__)){
return path;
} else {
return and__5114__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__38073 = "inspect!";
var G__38074 = shadow.object._id(oref);
var G__38075 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref))].join('');
var G__38076 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__38073,G__38074,G__38075,G__38076) : shadow.object.info.call(null,G__38073,G__38074,G__38075,G__38076));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__38077_38095 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__38078_38096 = null;
var count__38079_38097 = (0);
var i__38080_38098 = (0);
while(true){
if((i__38080_38098 < count__38079_38097)){
var vec__38081_38099 = chunk__38078_38096.cljs$core$IIndexed$_nth$arity$2(null,i__38080_38098);
var id_38100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38081_38099,(0),null);
var oref_38101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38081_38099,(1),null);
var G__38084_38102 = "dump";
var G__38085_38103 = id_38100;
var G__38086_38104 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_38101)], 0));
var G__38087_38105 = cljs.core.deref(shadow.object._data(oref_38101));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__38084_38102,G__38085_38103,G__38086_38104,G__38087_38105) : shadow.object.info.call(null,G__38084_38102,G__38085_38103,G__38086_38104,G__38087_38105));

var G__38106 = seq__38077_38095;
var G__38107 = chunk__38078_38096;
var G__38108 = count__38079_38097;
var G__38109 = (i__38080_38098 + (1));
seq__38077_38095 = G__38106;
chunk__38078_38096 = G__38107;
count__38079_38097 = G__38108;
i__38080_38098 = G__38109;
continue;
} else {
var temp__5457__auto___38110 = cljs.core.seq(seq__38077_38095);
if(temp__5457__auto___38110){
var seq__38077_38111__$1 = temp__5457__auto___38110;
if(cljs.core.chunked_seq_QMARK_(seq__38077_38111__$1)){
var c__6057__auto___38112 = cljs.core.chunk_first(seq__38077_38111__$1);
var G__38113 = cljs.core.chunk_rest(seq__38077_38111__$1);
var G__38114 = c__6057__auto___38112;
var G__38115 = cljs.core.count(c__6057__auto___38112);
var G__38116 = (0);
seq__38077_38095 = G__38113;
chunk__38078_38096 = G__38114;
count__38079_38097 = G__38115;
i__38080_38098 = G__38116;
continue;
} else {
var vec__38088_38117 = cljs.core.first(seq__38077_38111__$1);
var id_38118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38088_38117,(0),null);
var oref_38119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38088_38117,(1),null);
var G__38091_38120 = "dump";
var G__38092_38121 = id_38118;
var G__38093_38122 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_38119)], 0));
var G__38094_38123 = cljs.core.deref(shadow.object._data(oref_38119));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__38091_38120,G__38092_38121,G__38093_38122,G__38094_38123) : shadow.object.info.call(null,G__38091_38120,G__38092_38121,G__38093_38122,G__38094_38123));

var G__38124 = cljs.core.next(seq__38077_38111__$1);
var G__38125 = null;
var G__38126 = (0);
var G__38127 = (0);
seq__38077_38095 = G__38124;
chunk__38078_38096 = G__38125;
count__38079_38097 = G__38126;
i__38080_38098 = G__38127;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
