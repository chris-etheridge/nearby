goog.provide('shadow.animate');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.object');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('goog.dom.vendor');
goog.require('goog.style');
goog.require('shadow.util');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
var x__5859__auto__ = (((this$ == null))?null:this$);
var m__5860__auto__ = (shadow.animate._animate_from[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto__.call(null,this$));
} else {
var m__5860__auto____$1 = (shadow.animate._animate_from["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
var x__5859__auto__ = (((this$ == null))?null:this$);
var m__5860__auto__ = (shadow.animate._animate_to[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto__.call(null,this$));
} else {
var m__5860__auto____$1 = (shadow.animate._animate_to["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
var x__5859__auto__ = (((this$ == null))?null:this$);
var m__5860__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto__.call(null,this$));
} else {
var m__5860__auto____$1 = (shadow.animate._animate_toggles["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
}
});

/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
var x__5859__auto__ = (((this$ == null))?null:this$);
var m__5860__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto__.call(null,this$));
} else {
var m__5860__auto____$1 = (shadow.animate._animate_timings["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
}
});

/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
var x__5859__auto__ = (((this$ == null))?null:this$);
var m__5860__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto__.call(null,this$));
} else {
var m__5860__auto____$1 = (shadow.animate._animate_delays["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (timings,delays){
return (function (p__38169){
var vec__38170 = p__38169;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38170,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38170,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__5114__auto__ = delay;
if(cljs.core.truth_(and__5114__auto__)){
return (delay > (0));
} else {
return and__5114__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})())].join('');
});})(timings,delays))
,timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((!((animator == null))) && (!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
var x__5859__auto__ = (((animator == null))?null:animator);
var m__5860__auto__ = (shadow.animate.get_duration[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5860__auto__.call(null,animator));
} else {
var m__5860__auto____$1 = (shadow.animate.get_duration["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__5860__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
}
});

/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((!((animator == null))) && (!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
var x__5859__auto__ = (((animator == null))?null:animator);
var m__5860__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5860__auto__.call(null,animator));
} else {
var m__5860__auto____$1 = (shadow.animate.init_BANG_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__5860__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
}
});

/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((!((animator == null))) && (!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
var x__5859__auto__ = (((animator == null))?null:animator);
var m__5860__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5860__auto__.call(null,animator));
} else {
var m__5860__auto____$1 = (shadow.animate.start_BANG_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__5860__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
}
});

/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((!((animator == null))) && (!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
var x__5859__auto__ = (((animator == null))?null:animator);
var m__5860__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5860__auto__.call(null,animator));
} else {
var m__5860__auto____$1 = (shadow.animate.finish_BANG_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__5860__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__6171__auto__ = self__.items.length;
var i__37027__auto__ = (0);
while(true){
if((i__37027__auto__ < n__6171__auto__)){
var map__38188_38197 = (self__.items[i__37027__auto__]);
var map__38188_38198__$1 = ((((!((map__38188_38197 == null)))?((((map__38188_38197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38188_38197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38188_38197):map__38188_38197);
var el_38199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38188_38198__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_38200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38188_38198__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_38199,from_38200);

var G__38201 = (i__37027__auto__ + (1));
i__37027__auto__ = G__38201;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__6171__auto__ = self__.items.length;
var i__37027__auto__ = (0);
while(true){
if((i__37027__auto__ < n__6171__auto__)){
var map__38190_38202 = (self__.items[i__37027__auto__]);
var map__38190_38203__$1 = ((((!((map__38190_38202 == null)))?((((map__38190_38202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38190_38202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38190_38202):map__38190_38202);
var el_38204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38190_38203__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_38205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38190_38203__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_38206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38190_38203__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_38205["transition"] = transition_38206);

goog.style.setStyle(el_38204,to_38205);

var G__38208 = (i__37027__auto__ + (1));
i__37027__auto__ = G__38208;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__6171__auto__ = self__.items.length;
var i__37027__auto__ = (0);
while(true){
if((i__37027__auto__ < n__6171__auto__)){
var map__38194_38209 = (self__.items[i__37027__auto__]);
var map__38194_38210__$1 = ((((!((map__38194_38209 == null)))?((((map__38194_38209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38194_38209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38194_38209):map__38194_38209);
var el_38211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38194_38210__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_38212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38194_38210__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_38212["transition"] = null);

goog.style.setStyle(el_38211,toggles_38212);

var G__38213 = (i__37027__auto__ + (1));
i__37027__auto__ = G__38213;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
});

shadow.animate.Animator.cljs$lang$type = true;

shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator";

shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"shadow.animate/Animator");
});

shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
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
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18319__auto__,k__18320__auto__){
var self__ = this;
var this__18319__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__18319__auto____$1,k__18320__auto__,null);
});

shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18321__auto__,k38215,else__18322__auto__){
var self__ = this;
var this__18321__auto____$1 = this;
var G__38221 = k38215;
var G__38221__$1 = (((G__38221 instanceof cljs.core.Keyword))?G__38221.fqn:null);
switch (G__38221__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38215,else__18322__auto__);

}
});

shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18333__auto__,writer__18334__auto__,opts__18335__auto__){
var self__ = this;
var this__18333__auto____$1 = this;
var pr_pair__18336__auto__ = ((function (this__18333__auto____$1){
return (function (keyval__18337__auto__){
return cljs.core.pr_sequential_writer(writer__18334__auto__,cljs.core.pr_writer,""," ","",opts__18335__auto__,keyval__18337__auto__);
});})(this__18333__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__18334__auto__,pr_pair__18336__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__18335__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38214){
var self__ = this;
var G__38214__$1 = this;
return (new cljs.core.RecordIter((0),G__38214__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18317__auto__){
var self__ = this;
var this__18317__auto____$1 = this;
return self__.__meta;
});

shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18314__auto__){
var self__ = this;
var this__18314__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18323__auto__){
var self__ = this;
var this__18323__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18315__auto__){
var self__ = this;
var this__18315__auto____$1 = this;
var h__5582__auto__ = self__.__hash;
if(!((h__5582__auto__ == null))){
return h__5582__auto__;
} else {
var h__5582__auto____$1 = (function (){var fexpr__38230 = ((function (h__5582__auto__,this__18315__auto____$1){
return (function (coll__18316__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__18316__auto__));
});})(h__5582__auto__,this__18315__auto____$1))
;
return fexpr__38230(this__18315__auto____$1);
})();
self__.__hash = h__5582__auto____$1;

return h__5582__auto____$1;
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38216,other38217){
var self__ = this;
var this38216__$1 = this;
return (!((other38217 == null))) && ((this38216__$1.constructor === other38217.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38216__$1.el,other38217.el)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38216__$1.from,other38217.from)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38216__$1.to,other38217.to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38216__$1.toggles,other38217.toggles)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38216__$1.transition,other38217.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38216__$1.__extmap,other38217.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18328__auto__,k__18329__auto__){
var self__ = this;
var this__18328__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__18329__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__18328__auto____$1),self__.__meta),k__18329__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__18329__auto__)),null));
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18326__auto__,k__18327__auto__,G__38214){
var self__ = this;
var this__18326__auto____$1 = this;
var pred__38234 = cljs.core.keyword_identical_QMARK_;
var expr__38235 = k__18327__auto__;
if(cljs.core.truth_((function (){var G__38237 = new cljs.core.Keyword(null,"el","el",-1618201118);
var G__38238 = expr__38235;
return (pred__38234.cljs$core$IFn$_invoke$arity$2 ? pred__38234.cljs$core$IFn$_invoke$arity$2(G__38237,G__38238) : pred__38234.call(null,G__38237,G__38238));
})())){
return (new shadow.animate.AnimationStep(G__38214,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38239 = new cljs.core.Keyword(null,"from","from",1815293044);
var G__38240 = expr__38235;
return (pred__38234.cljs$core$IFn$_invoke$arity$2 ? pred__38234.cljs$core$IFn$_invoke$arity$2(G__38239,G__38240) : pred__38234.call(null,G__38239,G__38240));
})())){
return (new shadow.animate.AnimationStep(self__.el,G__38214,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38247 = new cljs.core.Keyword(null,"to","to",192099007);
var G__38248 = expr__38235;
return (pred__38234.cljs$core$IFn$_invoke$arity$2 ? pred__38234.cljs$core$IFn$_invoke$arity$2(G__38247,G__38248) : pred__38234.call(null,G__38247,G__38248));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__38214,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38252 = new cljs.core.Keyword(null,"toggles","toggles",1077909479);
var G__38253 = expr__38235;
return (pred__38234.cljs$core$IFn$_invoke$arity$2 ? pred__38234.cljs$core$IFn$_invoke$arity$2(G__38252,G__38253) : pred__38234.call(null,G__38252,G__38253));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__38214,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38254 = new cljs.core.Keyword(null,"transition","transition",765692007);
var G__38255 = expr__38235;
return (pred__38234.cljs$core$IFn$_invoke$arity$2 ? pred__38234.cljs$core$IFn$_invoke$arity$2(G__38254,G__38255) : pred__38234.call(null,G__38254,G__38255));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__38214,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__18327__auto__,G__38214),null));
}
}
}
}
}
});

shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18331__auto__){
var self__ = this;
var this__18331__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18318__auto__,G__38214){
var self__ = this;
var this__18318__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__38214,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18324__auto__,entry__18325__auto__){
var self__ = this;
var this__18324__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__18325__auto__)){
return cljs.core._assoc(this__18324__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__18325__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__18325__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__18324__auto____$1,entry__18325__auto__);
}
});

shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
});

shadow.animate.AnimationStep.cljs$lang$type = true;

shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__5852__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"shadow.animate/AnimationStep");
});

shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__5852__auto__,writer__5853__auto__){
return cljs.core._write(writer__5853__auto__,"shadow.animate/AnimationStep");
});

shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__38218){
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__38218),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__38218),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__38218),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__38218),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__38218),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38218,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0))),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__6008__auto__ = (function shadow$animate$setup_$_iter__38291(s__38292){
return (new cljs.core.LazySeq(null,(function (){
var s__38292__$1 = s__38292;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__38292__$1);
if(temp__5457__auto__){
var s__38292__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38292__$2)){
var c__6006__auto__ = cljs.core.chunk_first(s__38292__$2);
var size__6007__auto__ = cljs.core.count(c__6006__auto__);
var b__38294 = cljs.core.chunk_buffer(size__6007__auto__);
if((function (){var i__38293 = (0);
while(true){
if((i__38293 < size__6007__auto__)){
var vec__38295 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6006__auto__,i__38293);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38295,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38295,(1),null);
cljs.core.chunk_append(b__38294,(function (){
if(((!((adef == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$)))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__38303 = (i__38293 + (1));
i__38293 = G__38303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38294),shadow$animate$setup_$_iter__38291(cljs.core.chunk_rest(s__38292__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38294),null);
}
} else {
var vec__38299 = cljs.core.first(s__38292__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38299,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38299,(1),null);
return cljs.core.cons((function (){
if(((!((adef == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$)))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__38291(cljs.core.rest(s__38292__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6008__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__34082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto__){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto__){
return (function (state_38310){
var state_val_38311 = (state_38310[(1)]);
if((state_val_38311 === (1))){
var inst_38304 = shadow.animate.get_duration(animator);
var inst_38305 = cljs.core.async.timeout(inst_38304);
var state_38310__$1 = state_38310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38310__$1,(2),inst_38305);
} else {
if((state_val_38311 === (2))){
var inst_38307 = (state_38310[(2)]);
var inst_38308 = shadow.animate.finish_BANG_(animator);
var state_38310__$1 = (function (){var statearr_38312 = state_38310;
(statearr_38312[(7)] = inst_38307);

(statearr_38312[(8)] = inst_38308);

return statearr_38312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38310__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});})(c__34082__auto__))
;
return ((function (switch__33799__auto__,c__34082__auto__){
return (function() {
var shadow$animate$continue_BANG__$_state_machine__33800__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__33800__auto____0 = (function (){
var statearr_38313 = [null,null,null,null,null,null,null,null,null];
(statearr_38313[(0)] = shadow$animate$continue_BANG__$_state_machine__33800__auto__);

(statearr_38313[(1)] = (1));

return statearr_38313;
});
var shadow$animate$continue_BANG__$_state_machine__33800__auto____1 = (function (state_38310){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_38310);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e38314){if((e38314 instanceof Object)){
var ex__33803__auto__ = e38314;
var statearr_38315_38317 = state_38310;
(statearr_38315_38317[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38314;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38318 = state_38310;
state_38310 = G__38318;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__33800__auto__ = function(state_38310){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__33800__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__33800__auto____1.call(this,state_38310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$animate$continue_BANG__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__33800__auto____0;
shadow$animate$continue_BANG__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__33800__auto____1;
return shadow$animate$continue_BANG__$_state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto__))
})();
var state__34085__auto__ = (function (){var statearr_38316 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_38316[(6)] = c__34082__auto__);

return statearr_38316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto__))
);

return c__34082__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
shadow.animate.init_BANG_(animator);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__38320 = arguments.length;
switch (G__38320) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if(typeof shadow.animate.t_shadow$animate38321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate38321 = (function (attr,from,to,timing,delay,meta38322){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta38322 = meta38322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate38321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38323,meta38322__$1){
var self__ = this;
var _38323__$1 = this;
return (new shadow.animate.t_shadow$animate38321(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta38322__$1));
});

shadow.animate.t_shadow$animate38321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38323){
var self__ = this;
var _38323__$1 = this;
return self__.meta38322;
});

shadow.animate.t_shadow$animate38321.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate38321.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate38321.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate38321.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate38321.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
});

shadow.animate.t_shadow$animate38321.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
});

shadow.animate.t_shadow$animate38321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta38322","meta38322",-706225738,null)], null);
});

shadow.animate.t_shadow$animate38321.cljs$lang$type = true;

shadow.animate.t_shadow$animate38321.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate38321";

shadow.animate.t_shadow$animate38321.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"shadow.animate/t_shadow$animate38321");
});

shadow.animate.__GT_t_shadow$animate38321 = (function shadow$animate$__GT_t_shadow$animate38321(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta38322){
return (new shadow.animate.t_shadow$animate38321(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta38322));
});

}

return (new shadow.animate.t_shadow$animate38321(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.transition.cljs$lang$maxFixedArity = 5;

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if(typeof shadow.animate.t_shadow$animate38325 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate38325 = (function (attr,from,to,meta38326){
this.attr = attr;
this.from = from;
this.to = to;
this.meta38326 = meta38326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate38325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38327,meta38326__$1){
var self__ = this;
var _38327__$1 = this;
return (new shadow.animate.t_shadow$animate38325(self__.attr,self__.from,self__.to,meta38326__$1));
});

shadow.animate.t_shadow$animate38325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38327){
var self__ = this;
var _38327__$1 = this;
return self__.meta38326;
});

shadow.animate.t_shadow$animate38325.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate38325.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate38325.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate38325.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate38325.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate38325.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate38325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta38326","meta38326",-258096920,null)], null);
});

shadow.animate.t_shadow$animate38325.cljs$lang$type = true;

shadow.animate.t_shadow$animate38325.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate38325";

shadow.animate.t_shadow$animate38325.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"shadow.animate/t_shadow$animate38325");
});

shadow.animate.__GT_t_shadow$animate38325 = (function shadow$animate$toggle_$___GT_t_shadow$animate38325(attr__$1,from__$1,to__$1,meta38326){
return (new shadow.animate.t_shadow$animate38325(attr__$1,from__$1,to__$1,meta38326));
});

}

return (new shadow.animate.t_shadow$animate38325(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__38329 = arguments.length;
switch (G__38329) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if(typeof shadow.animate.t_shadow$animate38330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate38330 = (function (attrs,meta38331){
this.attrs = attrs;
this.meta38331 = meta38331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate38330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38332,meta38331__$1){
var self__ = this;
var _38332__$1 = this;
return (new shadow.animate.t_shadow$animate38330(self__.attrs,meta38331__$1));
});

shadow.animate.t_shadow$animate38330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38332){
var self__ = this;
var _38332__$1 = this;
return self__.meta38331;
});

shadow.animate.t_shadow$animate38330.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate38330.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate38330.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
});

shadow.animate.t_shadow$animate38330.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate38330.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate38330.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate38330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38331","meta38331",-434924255,null)], null);
});

shadow.animate.t_shadow$animate38330.cljs$lang$type = true;

shadow.animate.t_shadow$animate38330.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate38330";

shadow.animate.t_shadow$animate38330.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"shadow.animate/t_shadow$animate38330");
});

shadow.animate.__GT_t_shadow$animate38330 = (function shadow$animate$__GT_t_shadow$animate38330(attrs__$1,meta38331){
return (new shadow.animate.t_shadow$animate38330(attrs__$1,meta38331));
});

}

return (new shadow.animate.t_shadow$animate38330(attrs,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
});

shadow.animate.set_attr.cljs$lang$maxFixedArity = 2;

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if(typeof shadow.animate.t_shadow$animate38334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate38334 = (function (attr,meta38335){
this.attr = attr;
this.meta38335 = meta38335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate38334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38336,meta38335__$1){
var self__ = this;
var _38336__$1 = this;
return (new shadow.animate.t_shadow$animate38334(self__.attr,meta38335__$1));
});

shadow.animate.t_shadow$animate38334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38336){
var self__ = this;
var _38336__$1 = this;
return self__.meta38335;
});

shadow.animate.t_shadow$animate38334.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate38334.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate38334.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate38334.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
});

shadow.animate.t_shadow$animate38334.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate38334.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate38334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta38335","meta38335",-799852194,null)], null);
});

shadow.animate.t_shadow$animate38334.cljs$lang$type = true;

shadow.animate.t_shadow$animate38334.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate38334";

shadow.animate.t_shadow$animate38334.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"shadow.animate/t_shadow$animate38334");
});

shadow.animate.__GT_t_shadow$animate38334 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate38334(attr__$1,meta38335){
return (new shadow.animate.t_shadow$animate38334(attr__$1,meta38335));
});

}

return (new shadow.animate.t_shadow$animate38334(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__6412__auto__ = [];
var len__6405__auto___38341 = arguments.length;
var i__6406__auto___38342 = (0);
while(true){
if((i__6406__auto___38342 < len__6405__auto___38341)){
args__6412__auto__.push((arguments[i__6406__auto___38342]));

var G__38343 = (i__6406__auto___38342 + (1));
i__6406__auto___38342 = G__38343;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5455__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var adef = temp__5455__auto__;
var G__38344 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__38345 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__38346 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__38347 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__38348 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__38349 = cljs.core.rest(transitions__$1);
to = G__38344;
from = G__38345;
toggles = G__38346;
timings = G__38347;
delays = G__38348;
transitions__$1 = G__38349;
continue;
} else {
if(typeof shadow.animate.t_shadow$animate38338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate38338 = (function (transitions,to,from,toggles,timings,delays,temp__5455__auto__,meta38339){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5455__auto__ = temp__5455__auto__;
this.meta38339 = meta38339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate38338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_38340,meta38339__$1){
var self__ = this;
var _38340__$1 = this;
return (new shadow.animate.t_shadow$animate38338(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5455__auto__,meta38339__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate38338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_38340){
var self__ = this;
var _38340__$1 = this;
return self__.meta38339;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate38338.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate38338.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate38338.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate38338.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate38338.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate38338.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate38338.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"meta38339","meta38339",400367369,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate38338.cljs$lang$type = true;

shadow.animate.t_shadow$animate38338.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate38338";

shadow.animate.t_shadow$animate38338.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"shadow.animate/t_shadow$animate38338");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.__GT_t_shadow$animate38338 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function shadow$animate$__GT_t_shadow$animate38338(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5455__auto____$1,meta38339){
return (new shadow.animate.t_shadow$animate38338(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5455__auto____$1,meta38339));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

}

return (new shadow.animate.t_shadow$animate38338(transitions__$1,to,from,toggles,timings,delays,temp__5455__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
});

shadow.animate.combine.cljs$lang$maxFixedArity = (0);

shadow.animate.combine.cljs$lang$applyTo = (function (seq38337){
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38337));
});

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__38351 = arguments.length;
switch (G__38351) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
});

shadow.animate.fade_in.cljs$lang$maxFixedArity = 1;

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__38354 = arguments.length;
switch (G__38354) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
});

shadow.animate.fade_out.cljs$lang$maxFixedArity = 1;

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__38357 = arguments.length;
switch (G__38357) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if(typeof shadow.animate.t_shadow$animate38358 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate38358 = (function (from,to,timing,delay,meta38359){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta38359 = meta38359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate38358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38360,meta38359__$1){
var self__ = this;
var _38360__$1 = this;
return (new shadow.animate.t_shadow$animate38358(self__.from,self__.to,self__.timing,self__.delay,meta38359__$1));
});

shadow.animate.t_shadow$animate38358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38360){
var self__ = this;
var _38360__$1 = this;
return self__.meta38359;
});

shadow.animate.t_shadow$animate38358.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate38358.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate38358.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate38358.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate38358.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate38358.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate38358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta38359","meta38359",2140819721,null)], null);
});

shadow.animate.t_shadow$animate38358.cljs$lang$type = true;

shadow.animate.t_shadow$animate38358.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate38358";

shadow.animate.t_shadow$animate38358.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"shadow.animate/t_shadow$animate38358");
});

shadow.animate.__GT_t_shadow$animate38358 = (function shadow$animate$__GT_t_shadow$animate38358(from__$1,to__$1,timing__$1,delay__$1,meta38359){
return (new shadow.animate.t_shadow$animate38358(from__$1,to__$1,timing__$1,delay__$1,meta38359));
});

}

return (new shadow.animate.t_shadow$animate38358(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_y.cljs$lang$maxFixedArity = 4;

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__38363 = arguments.length;
switch (G__38363) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if(typeof shadow.animate.t_shadow$animate38364 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate38364 = (function (from,to,timing,delay,meta38365){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta38365 = meta38365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate38364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38366,meta38365__$1){
var self__ = this;
var _38366__$1 = this;
return (new shadow.animate.t_shadow$animate38364(self__.from,self__.to,self__.timing,self__.delay,meta38365__$1));
});

shadow.animate.t_shadow$animate38364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38366){
var self__ = this;
var _38366__$1 = this;
return self__.meta38365;
});

shadow.animate.t_shadow$animate38364.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate38364.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate38364.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate38364.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate38364.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate38364.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate38364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta38365","meta38365",-74897798,null)], null);
});

shadow.animate.t_shadow$animate38364.cljs$lang$type = true;

shadow.animate.t_shadow$animate38364.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate38364";

shadow.animate.t_shadow$animate38364.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"shadow.animate/t_shadow$animate38364");
});

shadow.animate.__GT_t_shadow$animate38364 = (function shadow$animate$__GT_t_shadow$animate38364(from__$1,to__$1,timing__$1,delay__$1,meta38365){
return (new shadow.animate.t_shadow$animate38364(from__$1,to__$1,timing__$1,delay__$1,meta38365));
});

}

return (new shadow.animate.t_shadow$animate38364(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_x.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.animate.js.map
