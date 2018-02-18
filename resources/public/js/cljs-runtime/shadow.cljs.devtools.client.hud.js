goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.browser');
goog.require('cljs.tools.reader');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_url_base()),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__34082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto__,req){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto__,req){
return (function (state_38405){
var state_val_38406 = (state_38405[(1)]);
if((state_val_38406 === (7))){
var state_38405__$1 = state_38405;
var statearr_38407_38433 = state_38405__$1;
(statearr_38407_38433[(2)] = false);

(statearr_38407_38433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (1))){
var state_38405__$1 = state_38405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38405__$1,(2),req);
} else {
if((state_val_38406 === (4))){
var inst_38369 = (state_38405[(7)]);
var inst_38375 = (inst_38369 == null);
var inst_38376 = cljs.core.not(inst_38375);
var state_38405__$1 = state_38405;
if(inst_38376){
var statearr_38408_38434 = state_38405__$1;
(statearr_38408_38434[(1)] = (6));

} else {
var statearr_38409_38435 = state_38405__$1;
(statearr_38409_38435[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (15))){
var state_38405__$1 = state_38405;
var statearr_38410_38436 = state_38405__$1;
(statearr_38410_38436[(2)] = null);

(statearr_38410_38436[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (13))){
var inst_38369 = (state_38405[(7)]);
var state_38405__$1 = state_38405;
var statearr_38411_38437 = state_38405__$1;
(statearr_38411_38437[(2)] = inst_38369);

(statearr_38411_38437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (6))){
var inst_38369 = (state_38405[(7)]);
var inst_38378 = inst_38369.cljs$lang$protocol_mask$partition0$;
var inst_38379 = (inst_38378 & (64));
var inst_38380 = inst_38369.cljs$core$ISeq$;
var inst_38381 = (cljs.core.PROTOCOL_SENTINEL === inst_38380);
var inst_38382 = (inst_38379) || (inst_38381);
var state_38405__$1 = state_38405;
if(cljs.core.truth_(inst_38382)){
var statearr_38412_38438 = state_38405__$1;
(statearr_38412_38438[(1)] = (9));

} else {
var statearr_38413_38439 = state_38405__$1;
(statearr_38413_38439[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (17))){
var inst_38401 = (state_38405[(2)]);
var state_38405__$1 = state_38405;
var statearr_38414_38440 = state_38405__$1;
(statearr_38414_38440[(2)] = inst_38401);

(statearr_38414_38440[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (3))){
var state_38405__$1 = state_38405;
var statearr_38415_38441 = state_38405__$1;
(statearr_38415_38441[(2)] = null);

(statearr_38415_38441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (12))){
var inst_38369 = (state_38405[(7)]);
var inst_38391 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38369);
var state_38405__$1 = state_38405;
var statearr_38416_38442 = state_38405__$1;
(statearr_38416_38442[(2)] = inst_38391);

(statearr_38416_38442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (2))){
var inst_38369 = (state_38405[(7)]);
var inst_38369__$1 = (state_38405[(2)]);
var inst_38370 = (inst_38369__$1 == null);
var state_38405__$1 = (function (){var statearr_38417 = state_38405;
(statearr_38417[(7)] = inst_38369__$1);

return statearr_38417;
})();
if(cljs.core.truth_(inst_38370)){
var statearr_38418_38443 = state_38405__$1;
(statearr_38418_38443[(1)] = (3));

} else {
var statearr_38419_38444 = state_38405__$1;
(statearr_38419_38444[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (11))){
var inst_38386 = (state_38405[(2)]);
var state_38405__$1 = state_38405;
var statearr_38420_38445 = state_38405__$1;
(statearr_38420_38445[(2)] = inst_38386);

(statearr_38420_38445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (9))){
var state_38405__$1 = state_38405;
var statearr_38421_38446 = state_38405__$1;
(statearr_38421_38446[(2)] = true);

(statearr_38421_38446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (5))){
var inst_38403 = (state_38405[(2)]);
var state_38405__$1 = state_38405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38405__$1,inst_38403);
} else {
if((state_val_38406 === (14))){
var inst_38394 = (state_38405[(8)]);
var inst_38394__$1 = (state_38405[(2)]);
var inst_38395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38394__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_38396 = (inst_38395 === (0));
var state_38405__$1 = (function (){var statearr_38422 = state_38405;
(statearr_38422[(8)] = inst_38394__$1);

return statearr_38422;
})();
if(cljs.core.truth_(inst_38396)){
var statearr_38423_38447 = state_38405__$1;
(statearr_38423_38447[(1)] = (15));

} else {
var statearr_38424_38448 = state_38405__$1;
(statearr_38424_38448[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (16))){
var inst_38394 = (state_38405[(8)]);
var inst_38399 = console.warn("file open failed",inst_38394);
var state_38405__$1 = state_38405;
var statearr_38425_38449 = state_38405__$1;
(statearr_38425_38449[(2)] = inst_38399);

(statearr_38425_38449[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (10))){
var state_38405__$1 = state_38405;
var statearr_38426_38450 = state_38405__$1;
(statearr_38426_38450[(2)] = false);

(statearr_38426_38450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (8))){
var inst_38389 = (state_38405[(2)]);
var state_38405__$1 = state_38405;
if(cljs.core.truth_(inst_38389)){
var statearr_38427_38451 = state_38405__$1;
(statearr_38427_38451[(1)] = (12));

} else {
var statearr_38428_38452 = state_38405__$1;
(statearr_38428_38452[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34082__auto__,req))
;
return ((function (switch__33799__auto__,c__34082__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__33800__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__33800__auto____0 = (function (){
var statearr_38429 = [null,null,null,null,null,null,null,null,null];
(statearr_38429[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__33800__auto__);

(statearr_38429[(1)] = (1));

return statearr_38429;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__33800__auto____1 = (function (state_38405){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_38405);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e38430){if((e38430 instanceof Object)){
var ex__33803__auto__ = e38430;
var statearr_38431_38453 = state_38405;
(statearr_38431_38453[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38454 = state_38405;
state_38405 = G__38454;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__33800__auto__ = function(state_38405){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__33800__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__33800__auto____1.call(this,state_38405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__33800__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__33800__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto__,req))
})();
var state__34085__auto__ = (function (){var statearr_38432 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_38432[(6)] = c__34082__auto__);

return statearr_38432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto__,req))
);

return c__34082__auto__;
});
if(typeof shadow.cljs.devtools.client.hud.socket_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.hud.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__38456 = arguments.length;
switch (G__38456) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5461__auto___38458 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5461__auto___38458 == null)){
} else {
var x_38459 = temp__5461__auto___38458;
shadow.dom.remove(x_38459);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (function (){var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
})();
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),shadow.cljs.devtools.client.hud.logo_svg], null)], null));
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var container_el = temp__5461__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__34082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto__,el,container_el,temp__5461__auto__){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto__,el,container_el,temp__5461__auto__){
return (function (state_38472){
var state_val_38473 = (state_38472[(1)]);
if((state_val_38473 === (1))){
var inst_38460 = cljs.core.async.timeout((250));
var state_38472__$1 = state_38472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38472__$1,(2),inst_38460);
} else {
if((state_val_38473 === (2))){
var inst_38462 = (state_38472[(2)]);
var inst_38463 = [el];
var inst_38464 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_38465 = [inst_38464];
var inst_38466 = cljs.core.PersistentHashMap.fromArrays(inst_38463,inst_38465);
var inst_38467 = shadow.animate.start((250),inst_38466);
var state_38472__$1 = (function (){var statearr_38474 = state_38472;
(statearr_38474[(7)] = inst_38462);

return statearr_38474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38472__$1,(3),inst_38467);
} else {
if((state_val_38473 === (3))){
var inst_38469 = (state_38472[(2)]);
var inst_38470 = shadow.dom.remove(container_el);
var state_38472__$1 = (function (){var statearr_38475 = state_38472;
(statearr_38475[(8)] = inst_38469);

return statearr_38475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38472__$1,inst_38470);
} else {
return null;
}
}
}
});})(c__34082__auto__,el,container_el,temp__5461__auto__))
;
return ((function (switch__33799__auto__,c__34082__auto__,el,container_el,temp__5461__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33800__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33800__auto____0 = (function (){
var statearr_38476 = [null,null,null,null,null,null,null,null,null];
(statearr_38476[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33800__auto__);

(statearr_38476[(1)] = (1));

return statearr_38476;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33800__auto____1 = (function (state_38472){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_38472);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e38477){if((e38477 instanceof Object)){
var ex__33803__auto__ = e38477;
var statearr_38478_38480 = state_38472;
(statearr_38478_38480[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38477;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38481 = state_38472;
state_38472 = G__38481;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33800__auto__ = function(state_38472){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33800__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33800__auto____1.call(this,state_38472);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33800__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33800__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto__,el,container_el,temp__5461__auto__))
})();
var state__34085__auto__ = (function (){var statearr_38479 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_38479[(6)] = c__34082__auto__);

return statearr_38479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto__,el,container_el,temp__5461__auto__))
);

return c__34082__auto__;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var el = temp__5461__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var d = temp__5461__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__6008__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__38482(s__38483){
return (new cljs.core.LazySeq(null,(function (){
var s__38483__$1 = s__38483;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__38483__$1);
if(temp__5457__auto__){
var s__38483__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38483__$2)){
var c__6006__auto__ = cljs.core.chunk_first(s__38483__$2);
var size__6007__auto__ = cljs.core.count(c__6006__auto__);
var b__38485 = cljs.core.chunk_buffer(size__6007__auto__);
if((function (){var i__38484 = (0);
while(true){
if((i__38484 < size__6007__auto__)){
var vec__38486 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6006__auto__,i__38484);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38486,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38486,(1),null);
cljs.core.chunk_append(b__38485,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__38489 = "%4d | %s";
var G__38490 = (((1) + idx) + start_idx);
var G__38491 = text;
return goog.string.format(G__38489,G__38490,G__38491);
})()], null));

var G__38498 = (i__38484 + (1));
i__38484 = G__38498;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38485),shadow$cljs$devtools$client$hud$source_line_html_$_iter__38482(cljs.core.chunk_rest(s__38483__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38485),null);
}
} else {
var vec__38492 = cljs.core.first(s__38483__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38492,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38492,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__38495 = "%4d | %s";
var G__38496 = (((1) + idx) + start_idx);
var G__38497 = text;
return goog.string.format(G__38495,G__38496,G__38497);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__38482(cljs.core.rest(s__38483__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6008__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__38500 = arguments.length;
switch (G__38500) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__38502){
var map__38503 = p__38502;
var map__38503__$1 = ((((!((map__38503 == null)))?((((map__38503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38503):map__38503);
var warning = map__38503__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38503__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38503__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38503__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38503__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__38503,map__38503__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__38503,map__38503__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__38505){
var map__38506 = p__38505;
var map__38506__$1 = ((((!((map__38506 == null)))?((((map__38506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38506):map__38506);
var warning = map__38506__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__38508 = source_excerpt;
var map__38508__$1 = ((((!((map__38508 == null)))?((((map__38508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38508):map__38508);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38508__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38508__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38508__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38508__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__5126__auto__ = column;
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__38511){
var map__38512 = p__38511;
var map__38512__$1 = ((((!((map__38512 == null)))?((((map__38512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38512):map__38512);
var msg = map__38512__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38512__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38512__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__38514 = info;
var map__38514__$1 = ((((!((map__38514 == null)))?((((map__38514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38514):map__38514);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__38514,map__38514__$1,sources,map__38512,map__38512__$1,msg,type,info){
return (function (p1__38510_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__38510_SHARP_));
});})(map__38514,map__38514__$1,sources,map__38512,map__38512__$1,msg,type,info))
,sources));
if(cljs.core.not(cljs.core.seq(sources_with_warnings))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["0px","12px","auto","10000","10px 10px 0 10px","0px","absolute","monospace","0px"])], null),(function (){var iter__6008__auto__ = ((function (map__38514,map__38514__$1,sources,sources_with_warnings,map__38512,map__38512__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__38516(s__38517){
return (new cljs.core.LazySeq(null,((function (map__38514,map__38514__$1,sources,sources_with_warnings,map__38512,map__38512__$1,msg,type,info){
return (function (){
var s__38517__$1 = s__38517;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__38517__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__38522 = cljs.core.first(xs__6012__auto__);
var map__38522__$1 = ((((!((map__38522 == null)))?((((map__38522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38522):map__38522);
var src = map__38522__$1;
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38522__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__6004__auto__ = ((function (s__38517__$1,map__38522,map__38522__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__38514,map__38514__$1,sources,sources_with_warnings,map__38512,map__38512__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__38516_$_iter__38518(s__38519){
return (new cljs.core.LazySeq(null,((function (s__38517__$1,map__38522,map__38522__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__38514,map__38514__$1,sources,sources_with_warnings,map__38512,map__38512__$1,msg,type,info){
return (function (){
var s__38519__$1 = s__38519;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__38519__$1);
if(temp__5457__auto____$1){
var s__38519__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38519__$2)){
var c__6006__auto__ = cljs.core.chunk_first(s__38519__$2);
var size__6007__auto__ = cljs.core.count(c__6006__auto__);
var b__38521 = cljs.core.chunk_buffer(size__6007__auto__);
if((function (){var i__38520 = (0);
while(true){
if((i__38520 < size__6007__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6006__auto__,i__38520);
cljs.core.chunk_append(b__38521,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__38524 = (i__38520 + (1));
i__38520 = G__38524;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38521),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__38516_$_iter__38518(cljs.core.chunk_rest(s__38519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38521),null);
}
} else {
var warning = cljs.core.first(s__38519__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__38516_$_iter__38518(cljs.core.rest(s__38519__$2)));
}
} else {
return null;
}
break;
}
});})(s__38517__$1,map__38522,map__38522__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__38514,map__38514__$1,sources,sources_with_warnings,map__38512,map__38512__$1,msg,type,info))
,null,null));
});})(s__38517__$1,map__38522,map__38522__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__38514,map__38514__$1,sources,sources_with_warnings,map__38512,map__38512__$1,msg,type,info))
;
var fs__6005__auto__ = cljs.core.seq(iterys__6004__auto__(warnings));
if(fs__6005__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__6005__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__38516(cljs.core.rest(s__38517__$1)));
} else {
var G__38525 = cljs.core.rest(s__38517__$1);
s__38517__$1 = G__38525;
continue;
}
} else {
return null;
}
break;
}
});})(map__38514,map__38514__$1,sources,sources_with_warnings,map__38512,map__38512__$1,msg,type,info))
,null,null));
});})(map__38514,map__38514__$1,sources,sources_with_warnings,map__38512,map__38512__$1,msg,type,info))
;
return iter__6008__auto__(sources_with_warnings);
})()], null));
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__38526){
var map__38527 = p__38526;
var map__38527__$1 = ((((!((map__38527 == null)))?((((map__38527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38527):map__38527);
var msg = map__38527__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38527__$1,new cljs.core.Keyword(null,"report","report",1394055010));
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","100","20px","0px","absolute","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
});
shadow.cljs.devtools.client.hud.handle_message = (function shadow$cljs$devtools$client$hud$handle_message(msg){
var G__38529 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg);
var G__38529__$1 = (((G__38529 instanceof cljs.core.Keyword))?G__38529.fqn:null);
switch (G__38529__$1) {
case "build-complete":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.hud.ws_connect = (function shadow$cljs$devtools$client$hud$ws_connect(){
var socket = (new WebSocket(shadow.cljs.devtools.client.env.ws_listener_url(new cljs.core.Keyword(null,"browser","browser",828191719))));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.hud.socket_ref,socket);

socket.onmessage = ((function (socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e,shadow.cljs.devtools.client.hud.handle_message);
});})(socket))
;

socket.onopen = ((function (socket){
return (function (e){
return null;
});})(socket))
;

socket.onclose = ((function (socket){
return (function (e){
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.hud.socket_ref,null);
});})(socket))
;

return socket.onerror = ((function (socket){
return (function (e){
return null;
});})(socket))
;
});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___38531 = cljs.core.deref(shadow.cljs.devtools.client.hud.socket_ref);
if(cljs.core.truth_(temp__5457__auto___38531)){
var s_38532 = temp__5457__auto___38531;
s_38532.onclose = ((function (s_38532,temp__5457__auto___38531){
return (function (e){
return null;
});})(s_38532,temp__5457__auto___38531))
;

s_38532.close();
} else {
}

shadow.cljs.devtools.client.hud.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
