goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
if(typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if(typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if(typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__6412__auto__ = [];
var len__6405__auto___34009 = arguments.length;
var i__6406__auto___34010 = (0);
while(true){
if((i__6406__auto___34010 < len__6405__auto___34009)){
args__6412__auto__.push((arguments[i__6406__auto___34010]));

var G__34011 = (i__6406__auto___34010 + (1));
i__6406__auto___34010 = G__34011;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((1) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6413__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cDEVTOOLS: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34007){
var G__34008 = cljs.core.first(seq34007);
var seq34007__$1 = cljs.core.next(seq34007);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic(G__34008,seq34007__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
var G__34016 = "WEBSOCKET NOT CONNECTED";
var G__34017 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
return console.warn(G__34016,G__34017);
}
});
if(typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return goog.object.get(goog.dependencies_.written,name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__34024){
var map__34025 = p__34024;
var map__34025__$1 = ((((!((map__34025 == null)))?((((map__34025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34025):map__34025);
var src = map__34025__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34025__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34025__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__5126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__5126__auto__){
return or__5126__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
/**
 * js/eval doesn't get optimized properly, this hack seems to do the trick
 */
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
var node = document.createElement("script");
node.appendChild(document.createTextNode(code));

document.body.appendChild(node);

return document.body.removeChild(node);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34033 = cljs.core.seq(sources);
var chunk__34034 = null;
var count__34035 = (0);
var i__34036 = (0);
while(true){
if((i__34036 < count__34035)){
var map__34037 = chunk__34034.cljs$core$IIndexed$_nth$arity$2(null,i__34036);
var map__34037__$1 = ((((!((map__34037 == null)))?((((map__34037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34037):map__34037);
var src = map__34037__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34037__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34037__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34037__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));

var G__34046 = seq__34033;
var G__34047 = chunk__34034;
var G__34048 = count__34035;
var G__34049 = (i__34036 + (1));
seq__34033 = G__34046;
chunk__34034 = G__34047;
count__34035 = G__34048;
i__34036 = G__34049;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34033);
if(temp__5457__auto__){
var seq__34033__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34033__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__34033__$1);
var G__34053 = cljs.core.chunk_rest(seq__34033__$1);
var G__34054 = c__6057__auto__;
var G__34055 = cljs.core.count(c__6057__auto__);
var G__34056 = (0);
seq__34033 = G__34053;
chunk__34034 = G__34054;
count__34035 = G__34055;
i__34036 = G__34056;
continue;
} else {
var map__34044 = cljs.core.first(seq__34033__$1);
var map__34044__$1 = ((((!((map__34044 == null)))?((((map__34044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34044):map__34044);
var src = map__34044__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34044__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34044__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34044__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));

var G__34058 = cljs.core.next(seq__34033__$1);
var G__34059 = null;
var G__34060 = (0);
var G__34061 = (0);
seq__34033 = G__34058;
chunk__34034 = G__34059;
count__34035 = G__34060;
i__34036 = G__34061;
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
 * stops the running app, loads sources, starts app
 * stop might be async as several node APIs are async
 * start is sync since we don't need to do anything after startup finishes
 */
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(sources){
var vec__34062 = ((cljs.core.seq(shadow.cljs.devtools.client.env.before_load))?(function (){var stop_fn = goog.getObjectByName(shadow.cljs.devtools.client.env.before_load,$CLJS);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (stop_fn){
return (function (done){
(stop_fn.cljs$core$IFn$_invoke$arity$0 ? stop_fn.cljs$core$IFn$_invoke$arity$0() : stop_fn.call(null));

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(stop_fn))
,shadow.cljs.devtools.client.env.before_load], null);
})():((cljs.core.seq(shadow.cljs.devtools.client.env.before_load_async))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.getObjectByName(shadow.cljs.devtools.client.env.before_load_async,$CLJS),shadow.cljs.devtools.client.env.before_load_async], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (done){
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}),null], null)
));
var stop_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34062,(0),null);
var stop_label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34062,(1),null);
if(cljs.core.truth_(stop_label)){
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("app shutdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stop_label], 0));
} else {
}

var G__34067 = ((function (vec__34062,stop_fn,stop_label){
return (function (state){
shadow.cljs.devtools.client.browser.do_js_load(sources);

if(cljs.core.seq(shadow.cljs.devtools.client.env.after_load)){
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("app start",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.env.after_load], 0));
} else {
}

var temp__5457__auto__ = ((cljs.core.seq(shadow.cljs.devtools.client.env.after_load))?goog.getObjectByName(shadow.cljs.devtools.client.env.after_load,$CLJS):null);
if(cljs.core.truth_(temp__5457__auto__)){
var start_fn = temp__5457__auto__;
return (start_fn.cljs$core$IFn$_invoke$arity$1 ? start_fn.cljs$core$IFn$_invoke$arity$1(state) : start_fn.call(null,state));
} else {
return null;
}
});})(vec__34062,stop_fn,stop_label))
;
return (stop_fn.cljs$core$IFn$_invoke$arity$1 ? stop_fn.cljs$core$IFn$_invoke$arity$1(G__34067) : stop_fn.call(null,G__34067));
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__34083 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34083) : callback.call(null,G__34083));
} else {
var G__34086 = shadow.cljs.devtools.client.env.files_url();
var G__34087 = ((function (G__34086){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__34086))
;
var G__34088 = "POST";
var G__34089 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__34090 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34086,G__34087,G__34088,G__34089,G__34090);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34102){
var map__34103 = p__34102;
var map__34103__$1 = ((((!((map__34103 == null)))?((((map__34103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34103):map__34103);
var msg = map__34103__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34103__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__34105 = info;
var map__34105__$1 = ((((!((map__34105 == null)))?((((map__34105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34105):map__34105);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34105__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34105__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__6008__auto__ = ((function (map__34105,map__34105__$1,sources,compiled,map__34103,map__34103__$1,msg,info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34115(s__34116){
return (new cljs.core.LazySeq(null,((function (map__34105,map__34105__$1,sources,compiled,map__34103,map__34103__$1,msg,info){
return (function (){
var s__34116__$1 = s__34116;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__34116__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__34133 = cljs.core.first(xs__6012__auto__);
var map__34133__$1 = ((((!((map__34133 == null)))?((((map__34133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34133):map__34133);
var src = map__34133__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34133__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34133__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__6004__auto__ = ((function (s__34116__$1,map__34133,map__34133__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__34105,map__34105__$1,sources,compiled,map__34103,map__34103__$1,msg,info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34115_$_iter__34117(s__34118){
return (new cljs.core.LazySeq(null,((function (s__34116__$1,map__34133,map__34133__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__34105,map__34105__$1,sources,compiled,map__34103,map__34103__$1,msg,info){
return (function (){
var s__34118__$1 = s__34118;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__34118__$1);
if(temp__5457__auto____$1){
var s__34118__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34118__$2)){
var c__6006__auto__ = cljs.core.chunk_first(s__34118__$2);
var size__6007__auto__ = cljs.core.count(c__6006__auto__);
var b__34121 = cljs.core.chunk_buffer(size__6007__auto__);
if((function (){var i__34119 = (0);
while(true){
if((i__34119 < size__6007__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6006__auto__,i__34119);
cljs.core.chunk_append(b__34121,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34200 = (i__34119 + (1));
i__34119 = G__34200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34121),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34115_$_iter__34117(cljs.core.chunk_rest(s__34118__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34121),null);
}
} else {
var warning = cljs.core.first(s__34118__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34115_$_iter__34117(cljs.core.rest(s__34118__$2)));
}
} else {
return null;
}
break;
}
});})(s__34116__$1,map__34133,map__34133__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__34105,map__34105__$1,sources,compiled,map__34103,map__34103__$1,msg,info))
,null,null));
});})(s__34116__$1,map__34133,map__34133__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__34105,map__34105__$1,sources,compiled,map__34103,map__34103__$1,msg,info))
;
var fs__6005__auto__ = cljs.core.seq(iterys__6004__auto__(warnings));
if(fs__6005__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__6005__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34115(cljs.core.rest(s__34116__$1)));
} else {
var G__34201 = cljs.core.rest(s__34116__$1);
s__34116__$1 = G__34201;
continue;
}
} else {
var G__34202 = cljs.core.rest(s__34116__$1);
s__34116__$1 = G__34202;
continue;
}
} else {
return null;
}
break;
}
});})(map__34105,map__34105__$1,sources,compiled,map__34103,map__34103__$1,msg,info))
,null,null));
});})(map__34105,map__34105__$1,sources,compiled,map__34103,map__34103__$1,msg,info))
;
return iter__6008__auto__(sources);
})()));
var seq__34165_34204 = cljs.core.seq(warnings);
var chunk__34166_34205 = null;
var count__34167_34206 = (0);
var i__34168_34207 = (0);
while(true){
if((i__34168_34207 < count__34167_34206)){
var map__34171_34208 = chunk__34166_34205.cljs$core$IIndexed$_nth$arity$2(null,i__34168_34207);
var map__34171_34209__$1 = ((((!((map__34171_34208 == null)))?((((map__34171_34208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34171_34208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34171_34208):map__34171_34208);
var w_34210 = map__34171_34209__$1;
var msg_34211__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34171_34209__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34171_34209__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34171_34209__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34171_34209__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var G__34173_34215 = ["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34214)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34212),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34213),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34211__$1)].join('');
console.warn(G__34173_34215);

var G__34216 = seq__34165_34204;
var G__34217 = chunk__34166_34205;
var G__34218 = count__34167_34206;
var G__34219 = (i__34168_34207 + (1));
seq__34165_34204 = G__34216;
chunk__34166_34205 = G__34217;
count__34167_34206 = G__34218;
i__34168_34207 = G__34219;
continue;
} else {
var temp__5457__auto___34220 = cljs.core.seq(seq__34165_34204);
if(temp__5457__auto___34220){
var seq__34165_34221__$1 = temp__5457__auto___34220;
if(cljs.core.chunked_seq_QMARK_(seq__34165_34221__$1)){
var c__6057__auto___34222 = cljs.core.chunk_first(seq__34165_34221__$1);
var G__34223 = cljs.core.chunk_rest(seq__34165_34221__$1);
var G__34224 = c__6057__auto___34222;
var G__34225 = cljs.core.count(c__6057__auto___34222);
var G__34226 = (0);
seq__34165_34204 = G__34223;
chunk__34166_34205 = G__34224;
count__34167_34206 = G__34225;
i__34168_34207 = G__34226;
continue;
} else {
var map__34174_34227 = cljs.core.first(seq__34165_34221__$1);
var map__34174_34228__$1 = ((((!((map__34174_34227 == null)))?((((map__34174_34227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34174_34227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34174_34227):map__34174_34227);
var w_34229 = map__34174_34228__$1;
var msg_34230__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34174_34228__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34174_34228__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34174_34228__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34174_34228__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var G__34176_34234 = ["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34233)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34231),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34232),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34230__$1)].join('');
console.warn(G__34176_34234);

var G__34235 = cljs.core.next(seq__34165_34221__$1);
var G__34236 = null;
var G__34237 = (0);
var G__34238 = (0);
seq__34165_34204 = G__34235;
chunk__34166_34205 = G__34236;
count__34167_34206 = G__34237;
i__34168_34207 = G__34238;
continue;
}
} else {
}
}
break;
}

if(shadow.cljs.devtools.client.env.autoload){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__34105,map__34105__$1,sources,compiled,warnings,map__34103,map__34103__$1,msg,info){
return (function (p__34178){
var map__34179 = p__34178;
var map__34179__$1 = ((((!((map__34179 == null)))?((((map__34179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34179):map__34179);
var src = map__34179__$1;
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34179__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34179__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || ((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))));
});})(map__34105,map__34105__$1,sources,compiled,warnings,map__34103,map__34103__$1,msg,info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__34105,map__34105__$1,sources,compiled,warnings,map__34103,map__34103__$1,msg,info){
return (function (p__34186){
var map__34187 = p__34186;
var map__34187__$1 = ((((!((map__34187 == null)))?((((map__34187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34187):map__34187);
var rc = map__34187__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34187__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__5126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__5126__auto__){
return or__5126__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__34105,map__34105__$1,sources,compiled,warnings,map__34103,map__34103__$1,msg,info))
,sources)));
if((cljs.core.empty_QMARK_(warnings)) && (cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,shadow.cljs.devtools.client.browser.do_js_reload);
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34241){
var map__34243 = p__34241;
var map__34243__$1 = ((((!((map__34243 == null)))?((((map__34243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34243):map__34243);
var msg = map__34243__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34243__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34245 = cljs.core.seq(updates);
var chunk__34247 = null;
var count__34248 = (0);
var i__34249 = (0);
while(true){
if((i__34249 < count__34248)){
var path = chunk__34247.cljs$core$IIndexed$_nth$arity$2(null,i__34249);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___34258 = (function (){var G__34251 = ["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join('');
return document.querySelector(G__34251);
})();
if(cljs.core.truth_(temp__5457__auto___34258)){
var node_34259 = temp__5457__auto___34258;
var new_link_34260 = (function (){var G__34252 = document.createElement("link");
G__34252.setAttribute("rel","stylesheet");

G__34252.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34252;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_34260,node_34259);

goog.dom.removeNode(node_34259);
} else {
}

var G__34262 = seq__34245;
var G__34263 = chunk__34247;
var G__34264 = count__34248;
var G__34265 = (i__34249 + (1));
seq__34245 = G__34262;
chunk__34247 = G__34263;
count__34248 = G__34264;
i__34249 = G__34265;
continue;
} else {
var G__34266 = seq__34245;
var G__34267 = chunk__34247;
var G__34268 = count__34248;
var G__34269 = (i__34249 + (1));
seq__34245 = G__34266;
chunk__34247 = G__34267;
count__34248 = G__34268;
i__34249 = G__34269;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34245);
if(temp__5457__auto__){
var seq__34245__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34245__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__34245__$1);
var G__34270 = cljs.core.chunk_rest(seq__34245__$1);
var G__34271 = c__6057__auto__;
var G__34272 = cljs.core.count(c__6057__auto__);
var G__34273 = (0);
seq__34245 = G__34270;
chunk__34247 = G__34271;
count__34248 = G__34272;
i__34249 = G__34273;
continue;
} else {
var path = cljs.core.first(seq__34245__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___34274__$1 = (function (){var G__34254 = ["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join('');
return document.querySelector(G__34254);
})();
if(cljs.core.truth_(temp__5457__auto___34274__$1)){
var node_34275 = temp__5457__auto___34274__$1;
var new_link_34276 = (function (){var G__34255 = document.createElement("link");
G__34255.setAttribute("rel","stylesheet");

G__34255.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34255;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_34276,node_34275);

goog.dom.removeNode(node_34275);
} else {
}

var G__34277 = cljs.core.next(seq__34245__$1);
var G__34278 = null;
var G__34279 = (0);
var G__34280 = (0);
seq__34245 = G__34277;
chunk__34247 = G__34278;
count__34248 = G__34279;
i__34249 = G__34280;
continue;
} else {
var G__34281 = cljs.core.next(seq__34245__$1);
var G__34282 = null;
var G__34283 = (0);
var G__34284 = (0);
seq__34245 = G__34281;
chunk__34247 = G__34282;
count__34248 = G__34283;
i__34249 = G__34284;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34289){
var map__34290 = p__34289;
var map__34290__$1 = ((((!((map__34290 == null)))?((((map__34290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34290):map__34290);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34290__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34290__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__34290,map__34290__$1,id,js){
return (function (){
return eval(js);
});})(map__34290,map__34290__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34294){
var map__34295 = p__34294;
var map__34295__$1 = ((((!((map__34295 == null)))?((((map__34295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34295):map__34295);
var msg = map__34295__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34295__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34295__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34295__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var sources_to_load = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload","reload",863702807),reload))?(function (){var all = cljs.core.butlast(sources);
var self = cljs.core.last(sources);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_),all),self);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload))?sources:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,sources)
));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__34295,map__34295__$1,msg,id,sources,reload){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__34295,map__34295__$1,msg,id,sources,reload))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34298){
var map__34299 = p__34298;
var map__34299__$1 = ((((!((map__34299 == null)))?((((map__34299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34299):map__34299);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34299__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34299__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__34299,map__34299__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__34299,map__34299__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34305){
var map__34306 = p__34305;
var map__34306__$1 = ((((!((map__34306 == null)))?((((map__34306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34306):map__34306);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34306__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34306__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34311){
var map__34312 = p__34311;
var map__34312__$1 = ((((!((map__34312 == null)))?((((map__34312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34312):map__34312);
var msg = map__34312__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34312__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__34314 = type;
var G__34314__$1 = (((G__34314 instanceof cljs.core.Keyword))?G__34314.fqn:null);
switch (G__34314__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "pong":
return null;

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__34316 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__34317 = ((function (G__34316){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__34316))
;
var G__34318 = "POST";
var G__34319 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__34320 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34316,G__34317,G__34318,G__34319,G__34320);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

return shadow.cljs.devtools.client.browser.devtools_msg("connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("disconnected!");

return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
return null;
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___34328 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___34328)){
var s_34329 = temp__5457__auto___34328;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_34329.onclose = ((function (s_34329,temp__5457__auto___34328){
return (function (e){
return null;
});})(s_34329,temp__5457__auto___34328))
;

s_34329.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

shadow.cljs.devtools.client.browser.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
