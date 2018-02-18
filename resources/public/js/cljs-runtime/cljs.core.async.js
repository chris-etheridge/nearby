goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34196 = arguments.length;
switch (G__34196) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34197 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34197 = (function (f,blockable,meta34198){
this.f = f;
this.blockable = blockable;
this.meta34198 = meta34198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34199,meta34198__$1){
var self__ = this;
var _34199__$1 = this;
return (new cljs.core.async.t_cljs$core$async34197(self__.f,self__.blockable,meta34198__$1));
});

cljs.core.async.t_cljs$core$async34197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34199){
var self__ = this;
var _34199__$1 = this;
return self__.meta34198;
});

cljs.core.async.t_cljs$core$async34197.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34197.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34197.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34197.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34198","meta34198",-531665175,null)], null);
});

cljs.core.async.t_cljs$core$async34197.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34197";

cljs.core.async.t_cljs$core$async34197.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async34197");
});

cljs.core.async.__GT_t_cljs$core$async34197 = (function cljs$core$async$__GT_t_cljs$core$async34197(f__$1,blockable__$1,meta34198){
return (new cljs.core.async.t_cljs$core$async34197(f__$1,blockable__$1,meta34198));
});

}

return (new cljs.core.async.t_cljs$core$async34197(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34242 = arguments.length;
switch (G__34242) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34257 = arguments.length;
switch (G__34257) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34286 = arguments.length;
switch (G__34286) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34288 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34288) : fn1.call(null,val_34288));
} else {
cljs.core.async.impl.dispatch.run(((function (val_34288,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34288) : fn1.call(null,val_34288));
});})(val_34288,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34293 = arguments.length;
switch (G__34293) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__6171__auto___34301 = n;
var x_34302 = (0);
while(true){
if((x_34302 < n__6171__auto___34301)){
(a[x_34302] = (0));

var G__34303 = (x_34302 + (1));
x_34302 = G__34303;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__34304 = (i + (1));
i = G__34304;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async34307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34307 = (function (flag,meta34308){
this.flag = flag;
this.meta34308 = meta34308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34309,meta34308__$1){
var self__ = this;
var _34309__$1 = this;
return (new cljs.core.async.t_cljs$core$async34307(self__.flag,meta34308__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34309){
var self__ = this;
var _34309__$1 = this;
return self__.meta34308;
});})(flag))
;

cljs.core.async.t_cljs$core$async34307.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34307.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34307.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34308","meta34308",-176810753,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34307";

cljs.core.async.t_cljs$core$async34307.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async34307");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34307 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34307(flag__$1,meta34308){
return (new cljs.core.async.t_cljs$core$async34307(flag__$1,meta34308));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34307(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34321 = (function (flag,cb,meta34322){
this.flag = flag;
this.cb = cb;
this.meta34322 = meta34322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34323,meta34322__$1){
var self__ = this;
var _34323__$1 = this;
return (new cljs.core.async.t_cljs$core$async34321(self__.flag,self__.cb,meta34322__$1));
});

cljs.core.async.t_cljs$core$async34321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34323){
var self__ = this;
var _34323__$1 = this;
return self__.meta34322;
});

cljs.core.async.t_cljs$core$async34321.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async34321.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34322","meta34322",1425612793,null)], null);
});

cljs.core.async.t_cljs$core$async34321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34321";

cljs.core.async.t_cljs$core$async34321.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async34321");
});

cljs.core.async.__GT_t_cljs$core$async34321 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34321(flag__$1,cb__$1,meta34322){
return (new cljs.core.async.t_cljs$core$async34321(flag__$1,cb__$1,meta34322));
});

}

return (new cljs.core.async.t_cljs$core$async34321(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34324_SHARP_){
var G__34326 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34324_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34326) : fret.call(null,G__34326));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34325_SHARP_){
var G__34327 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34325_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34327) : fret.call(null,G__34327));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5126__auto__ = wport;
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34330 = (i + (1));
i = G__34330;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5126__auto__ = ret;
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__5114__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__5114__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__5114__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__6412__auto__ = [];
var len__6405__auto___34336 = arguments.length;
var i__6406__auto___34337 = (0);
while(true){
if((i__6406__auto___34337 < len__6405__auto___34336)){
args__6412__auto__.push((arguments[i__6406__auto___34337]));

var G__34338 = (i__6406__auto___34337 + (1));
i__6406__auto___34337 = G__34338;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((1) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6413__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34333){
var map__34334 = p__34333;
var map__34334__$1 = ((((!((map__34334 == null)))?((((map__34334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34334):map__34334);
var opts = map__34334__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34331){
var G__34332 = cljs.core.first(seq34331);
var seq34331__$1 = cljs.core.next(seq34331);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34332,seq34331__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34340 = arguments.length;
switch (G__34340) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34082__auto___34386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto___34386){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto___34386){
return (function (state_34364){
var state_val_34365 = (state_34364[(1)]);
if((state_val_34365 === (7))){
var inst_34360 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34366_34387 = state_34364__$1;
(statearr_34366_34387[(2)] = inst_34360);

(statearr_34366_34387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (1))){
var state_34364__$1 = state_34364;
var statearr_34367_34388 = state_34364__$1;
(statearr_34367_34388[(2)] = null);

(statearr_34367_34388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (4))){
var inst_34343 = (state_34364[(7)]);
var inst_34343__$1 = (state_34364[(2)]);
var inst_34344 = (inst_34343__$1 == null);
var state_34364__$1 = (function (){var statearr_34368 = state_34364;
(statearr_34368[(7)] = inst_34343__$1);

return statearr_34368;
})();
if(cljs.core.truth_(inst_34344)){
var statearr_34369_34389 = state_34364__$1;
(statearr_34369_34389[(1)] = (5));

} else {
var statearr_34370_34390 = state_34364__$1;
(statearr_34370_34390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (13))){
var state_34364__$1 = state_34364;
var statearr_34371_34391 = state_34364__$1;
(statearr_34371_34391[(2)] = null);

(statearr_34371_34391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (6))){
var inst_34343 = (state_34364[(7)]);
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34364__$1,(11),to,inst_34343);
} else {
if((state_val_34365 === (3))){
var inst_34362 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34364__$1,inst_34362);
} else {
if((state_val_34365 === (12))){
var state_34364__$1 = state_34364;
var statearr_34372_34392 = state_34364__$1;
(statearr_34372_34392[(2)] = null);

(statearr_34372_34392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (2))){
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34364__$1,(4),from);
} else {
if((state_val_34365 === (11))){
var inst_34353 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
if(cljs.core.truth_(inst_34353)){
var statearr_34373_34393 = state_34364__$1;
(statearr_34373_34393[(1)] = (12));

} else {
var statearr_34374_34394 = state_34364__$1;
(statearr_34374_34394[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (9))){
var state_34364__$1 = state_34364;
var statearr_34375_34395 = state_34364__$1;
(statearr_34375_34395[(2)] = null);

(statearr_34375_34395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (5))){
var state_34364__$1 = state_34364;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34376_34396 = state_34364__$1;
(statearr_34376_34396[(1)] = (8));

} else {
var statearr_34377_34397 = state_34364__$1;
(statearr_34377_34397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (14))){
var inst_34358 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34378_34398 = state_34364__$1;
(statearr_34378_34398[(2)] = inst_34358);

(statearr_34378_34398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (10))){
var inst_34350 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34379_34399 = state_34364__$1;
(statearr_34379_34399[(2)] = inst_34350);

(statearr_34379_34399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (8))){
var inst_34347 = cljs.core.async.close_BANG_(to);
var state_34364__$1 = state_34364;
var statearr_34380_34400 = state_34364__$1;
(statearr_34380_34400[(2)] = inst_34347);

(statearr_34380_34400[(1)] = (10));


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
});})(c__34082__auto___34386))
;
return ((function (switch__33799__auto__,c__34082__auto___34386){
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_34381 = [null,null,null,null,null,null,null,null];
(statearr_34381[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_34381[(1)] = (1));

return statearr_34381;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_34364){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_34364);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34382){if((e34382 instanceof Object)){
var ex__33803__auto__ = e34382;
var statearr_34383_34401 = state_34364;
(statearr_34383_34401[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34382;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34402 = state_34364;
state_34364 = G__34402;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_34364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_34364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto___34386))
})();
var state__34085__auto__ = (function (){var statearr_34384 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_34384[(6)] = c__34082__auto___34386);

return statearr_34384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto___34386))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__34403){
var vec__34404 = p__34403;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34404,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34404,(1),null);
var job = vec__34404;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34082__auto___34698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto___34698,res,vec__34404,v,p,job,jobs,results){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto___34698,res,vec__34404,v,p,job,jobs,results){
return (function (state_34411){
var state_val_34412 = (state_34411[(1)]);
if((state_val_34412 === (1))){
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34411__$1,(2),res,v);
} else {
if((state_val_34412 === (2))){
var inst_34408 = (state_34411[(2)]);
var inst_34409 = cljs.core.async.close_BANG_(res);
var state_34411__$1 = (function (){var statearr_34413 = state_34411;
(statearr_34413[(7)] = inst_34408);

return statearr_34413;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34411__$1,inst_34409);
} else {
return null;
}
}
});})(c__34082__auto___34698,res,vec__34404,v,p,job,jobs,results))
;
return ((function (switch__33799__auto__,c__34082__auto___34698,res,vec__34404,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0 = (function (){
var statearr_34414 = [null,null,null,null,null,null,null,null];
(statearr_34414[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__);

(statearr_34414[(1)] = (1));

return statearr_34414;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1 = (function (state_34411){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_34411);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34415){if((e34415 instanceof Object)){
var ex__33803__auto__ = e34415;
var statearr_34416_34725 = state_34411;
(statearr_34416_34725[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34415;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34726 = state_34411;
state_34411 = G__34726;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = function(state_34411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1.call(this,state_34411);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto___34698,res,vec__34404,v,p,job,jobs,results))
})();
var state__34085__auto__ = (function (){var statearr_34417 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_34417[(6)] = c__34082__auto___34698);

return statearr_34417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto___34698,res,vec__34404,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34418){
var vec__34419 = p__34418;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34419,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34419,(1),null);
var job = vec__34419;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__6171__auto___34746 = n;
var __34747 = (0);
while(true){
if((__34747 < n__6171__auto___34746)){
var G__34422_34749 = type;
var G__34422_34750__$1 = (((G__34422_34749 instanceof cljs.core.Keyword))?G__34422_34749.fqn:null);
switch (G__34422_34750__$1) {
case "compute":
var c__34082__auto___34753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34747,c__34082__auto___34753,G__34422_34749,G__34422_34750__$1,n__6171__auto___34746,jobs,results,process,async){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (__34747,c__34082__auto___34753,G__34422_34749,G__34422_34750__$1,n__6171__auto___34746,jobs,results,process,async){
return (function (state_34435){
var state_val_34436 = (state_34435[(1)]);
if((state_val_34436 === (1))){
var state_34435__$1 = state_34435;
var statearr_34437_34764 = state_34435__$1;
(statearr_34437_34764[(2)] = null);

(statearr_34437_34764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (2))){
var state_34435__$1 = state_34435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34435__$1,(4),jobs);
} else {
if((state_val_34436 === (3))){
var inst_34433 = (state_34435[(2)]);
var state_34435__$1 = state_34435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34435__$1,inst_34433);
} else {
if((state_val_34436 === (4))){
var inst_34425 = (state_34435[(2)]);
var inst_34426 = process(inst_34425);
var state_34435__$1 = state_34435;
if(cljs.core.truth_(inst_34426)){
var statearr_34438_34782 = state_34435__$1;
(statearr_34438_34782[(1)] = (5));

} else {
var statearr_34439_34783 = state_34435__$1;
(statearr_34439_34783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (5))){
var state_34435__$1 = state_34435;
var statearr_34440_34785 = state_34435__$1;
(statearr_34440_34785[(2)] = null);

(statearr_34440_34785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (6))){
var state_34435__$1 = state_34435;
var statearr_34441_34786 = state_34435__$1;
(statearr_34441_34786[(2)] = null);

(statearr_34441_34786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34436 === (7))){
var inst_34431 = (state_34435[(2)]);
var state_34435__$1 = state_34435;
var statearr_34442_34789 = state_34435__$1;
(statearr_34442_34789[(2)] = inst_34431);

(statearr_34442_34789[(1)] = (3));


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
});})(__34747,c__34082__auto___34753,G__34422_34749,G__34422_34750__$1,n__6171__auto___34746,jobs,results,process,async))
;
return ((function (__34747,switch__33799__auto__,c__34082__auto___34753,G__34422_34749,G__34422_34750__$1,n__6171__auto___34746,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0 = (function (){
var statearr_34444 = [null,null,null,null,null,null,null];
(statearr_34444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__);

(statearr_34444[(1)] = (1));

return statearr_34444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1 = (function (state_34435){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_34435);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34448){if((e34448 instanceof Object)){
var ex__33803__auto__ = e34448;
var statearr_34449_34796 = state_34435;
(statearr_34449_34796[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34448;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34802 = state_34435;
state_34435 = G__34802;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = function(state_34435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1.call(this,state_34435);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__;
})()
;})(__34747,switch__33799__auto__,c__34082__auto___34753,G__34422_34749,G__34422_34750__$1,n__6171__auto___34746,jobs,results,process,async))
})();
var state__34085__auto__ = (function (){var statearr_34450 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_34450[(6)] = c__34082__auto___34753);

return statearr_34450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(__34747,c__34082__auto___34753,G__34422_34749,G__34422_34750__$1,n__6171__auto___34746,jobs,results,process,async))
);


break;
case "async":
var c__34082__auto___34806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34747,c__34082__auto___34806,G__34422_34749,G__34422_34750__$1,n__6171__auto___34746,jobs,results,process,async){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (__34747,c__34082__auto___34806,G__34422_34749,G__34422_34750__$1,n__6171__auto___34746,jobs,results,process,async){
return (function (state_34465){
var state_val_34466 = (state_34465[(1)]);
if((state_val_34466 === (1))){
var state_34465__$1 = state_34465;
var statearr_34469_34813 = state_34465__$1;
(statearr_34469_34813[(2)] = null);

(statearr_34469_34813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (2))){
var state_34465__$1 = state_34465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34465__$1,(4),jobs);
} else {
if((state_val_34466 === (3))){
var inst_34463 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34465__$1,inst_34463);
} else {
if((state_val_34466 === (4))){
var inst_34455 = (state_34465[(2)]);
var inst_34456 = async(inst_34455);
var state_34465__$1 = state_34465;
if(cljs.core.truth_(inst_34456)){
var statearr_34474_34818 = state_34465__$1;
(statearr_34474_34818[(1)] = (5));

} else {
var statearr_34476_34819 = state_34465__$1;
(statearr_34476_34819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (5))){
var state_34465__$1 = state_34465;
var statearr_34477_34820 = state_34465__$1;
(statearr_34477_34820[(2)] = null);

(statearr_34477_34820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (6))){
var state_34465__$1 = state_34465;
var statearr_34478_34821 = state_34465__$1;
(statearr_34478_34821[(2)] = null);

(statearr_34478_34821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (7))){
var inst_34461 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
var statearr_34479_34822 = state_34465__$1;
(statearr_34479_34822[(2)] = inst_34461);

(statearr_34479_34822[(1)] = (3));


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
});})(__34747,c__34082__auto___34806,G__34422_34749,G__34422_34750__$1,n__6171__auto___34746,jobs,results,process,async))
;
return ((function (__34747,switch__33799__auto__,c__34082__auto___34806,G__34422_34749,G__34422_34750__$1,n__6171__auto___34746,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0 = (function (){
var statearr_34480 = [null,null,null,null,null,null,null];
(statearr_34480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__);

(statearr_34480[(1)] = (1));

return statearr_34480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1 = (function (state_34465){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_34465);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34481){if((e34481 instanceof Object)){
var ex__33803__auto__ = e34481;
var statearr_34482_34823 = state_34465;
(statearr_34482_34823[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34824 = state_34465;
state_34465 = G__34824;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = function(state_34465){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1.call(this,state_34465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__;
})()
;})(__34747,switch__33799__auto__,c__34082__auto___34806,G__34422_34749,G__34422_34750__$1,n__6171__auto___34746,jobs,results,process,async))
})();
var state__34085__auto__ = (function (){var statearr_34487 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_34487[(6)] = c__34082__auto___34806);

return statearr_34487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(__34747,c__34082__auto___34806,G__34422_34749,G__34422_34750__$1,n__6171__auto___34746,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34422_34750__$1)].join('')));

}

var G__34827 = (__34747 + (1));
__34747 = G__34827;
continue;
} else {
}
break;
}

var c__34082__auto___34828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto___34828,jobs,results,process,async){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto___34828,jobs,results,process,async){
return (function (state_34515){
var state_val_34516 = (state_34515[(1)]);
if((state_val_34516 === (1))){
var state_34515__$1 = state_34515;
var statearr_34519_34829 = state_34515__$1;
(statearr_34519_34829[(2)] = null);

(statearr_34519_34829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (2))){
var state_34515__$1 = state_34515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34515__$1,(4),from);
} else {
if((state_val_34516 === (3))){
var inst_34510 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34515__$1,inst_34510);
} else {
if((state_val_34516 === (4))){
var inst_34491 = (state_34515[(7)]);
var inst_34491__$1 = (state_34515[(2)]);
var inst_34493 = (inst_34491__$1 == null);
var state_34515__$1 = (function (){var statearr_34523 = state_34515;
(statearr_34523[(7)] = inst_34491__$1);

return statearr_34523;
})();
if(cljs.core.truth_(inst_34493)){
var statearr_34524_34830 = state_34515__$1;
(statearr_34524_34830[(1)] = (5));

} else {
var statearr_34525_34831 = state_34515__$1;
(statearr_34525_34831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (5))){
var inst_34495 = cljs.core.async.close_BANG_(jobs);
var state_34515__$1 = state_34515;
var statearr_34528_34832 = state_34515__$1;
(statearr_34528_34832[(2)] = inst_34495);

(statearr_34528_34832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (6))){
var inst_34497 = (state_34515[(8)]);
var inst_34491 = (state_34515[(7)]);
var inst_34497__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34499 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34500 = [inst_34491,inst_34497__$1];
var inst_34501 = (new cljs.core.PersistentVector(null,2,(5),inst_34499,inst_34500,null));
var state_34515__$1 = (function (){var statearr_34529 = state_34515;
(statearr_34529[(8)] = inst_34497__$1);

return statearr_34529;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34515__$1,(8),jobs,inst_34501);
} else {
if((state_val_34516 === (7))){
var inst_34508 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
var statearr_34530_34836 = state_34515__$1;
(statearr_34530_34836[(2)] = inst_34508);

(statearr_34530_34836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (8))){
var inst_34497 = (state_34515[(8)]);
var inst_34503 = (state_34515[(2)]);
var state_34515__$1 = (function (){var statearr_34533 = state_34515;
(statearr_34533[(9)] = inst_34503);

return statearr_34533;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34515__$1,(9),results,inst_34497);
} else {
if((state_val_34516 === (9))){
var inst_34505 = (state_34515[(2)]);
var state_34515__$1 = (function (){var statearr_34534 = state_34515;
(statearr_34534[(10)] = inst_34505);

return statearr_34534;
})();
var statearr_34535_34842 = state_34515__$1;
(statearr_34535_34842[(2)] = null);

(statearr_34535_34842[(1)] = (2));


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
});})(c__34082__auto___34828,jobs,results,process,async))
;
return ((function (switch__33799__auto__,c__34082__auto___34828,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0 = (function (){
var statearr_34536 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34536[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__);

(statearr_34536[(1)] = (1));

return statearr_34536;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1 = (function (state_34515){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_34515);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34540){if((e34540 instanceof Object)){
var ex__33803__auto__ = e34540;
var statearr_34543_34848 = state_34515;
(statearr_34543_34848[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34540;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34849 = state_34515;
state_34515 = G__34849;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = function(state_34515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1.call(this,state_34515);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto___34828,jobs,results,process,async))
})();
var state__34085__auto__ = (function (){var statearr_34544 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_34544[(6)] = c__34082__auto___34828);

return statearr_34544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto___34828,jobs,results,process,async))
);


var c__34082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto__,jobs,results,process,async){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto__,jobs,results,process,async){
return (function (state_34586){
var state_val_34588 = (state_34586[(1)]);
if((state_val_34588 === (7))){
var inst_34582 = (state_34586[(2)]);
var state_34586__$1 = state_34586;
var statearr_34594_34860 = state_34586__$1;
(statearr_34594_34860[(2)] = inst_34582);

(statearr_34594_34860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (20))){
var state_34586__$1 = state_34586;
var statearr_34596_34862 = state_34586__$1;
(statearr_34596_34862[(2)] = null);

(statearr_34596_34862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (1))){
var state_34586__$1 = state_34586;
var statearr_34597_34868 = state_34586__$1;
(statearr_34597_34868[(2)] = null);

(statearr_34597_34868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (4))){
var inst_34549 = (state_34586[(7)]);
var inst_34549__$1 = (state_34586[(2)]);
var inst_34550 = (inst_34549__$1 == null);
var state_34586__$1 = (function (){var statearr_34604 = state_34586;
(statearr_34604[(7)] = inst_34549__$1);

return statearr_34604;
})();
if(cljs.core.truth_(inst_34550)){
var statearr_34605_34870 = state_34586__$1;
(statearr_34605_34870[(1)] = (5));

} else {
var statearr_34606_34871 = state_34586__$1;
(statearr_34606_34871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (15))){
var inst_34564 = (state_34586[(8)]);
var state_34586__$1 = state_34586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34586__$1,(18),to,inst_34564);
} else {
if((state_val_34588 === (21))){
var inst_34577 = (state_34586[(2)]);
var state_34586__$1 = state_34586;
var statearr_34607_34874 = state_34586__$1;
(statearr_34607_34874[(2)] = inst_34577);

(statearr_34607_34874[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (13))){
var inst_34579 = (state_34586[(2)]);
var state_34586__$1 = (function (){var statearr_34610 = state_34586;
(statearr_34610[(9)] = inst_34579);

return statearr_34610;
})();
var statearr_34611_34877 = state_34586__$1;
(statearr_34611_34877[(2)] = null);

(statearr_34611_34877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (6))){
var inst_34549 = (state_34586[(7)]);
var state_34586__$1 = state_34586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34586__$1,(11),inst_34549);
} else {
if((state_val_34588 === (17))){
var inst_34572 = (state_34586[(2)]);
var state_34586__$1 = state_34586;
if(cljs.core.truth_(inst_34572)){
var statearr_34614_34883 = state_34586__$1;
(statearr_34614_34883[(1)] = (19));

} else {
var statearr_34615_34884 = state_34586__$1;
(statearr_34615_34884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (3))){
var inst_34584 = (state_34586[(2)]);
var state_34586__$1 = state_34586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34586__$1,inst_34584);
} else {
if((state_val_34588 === (12))){
var inst_34559 = (state_34586[(10)]);
var state_34586__$1 = state_34586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34586__$1,(14),inst_34559);
} else {
if((state_val_34588 === (2))){
var state_34586__$1 = state_34586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34586__$1,(4),results);
} else {
if((state_val_34588 === (19))){
var state_34586__$1 = state_34586;
var statearr_34630_34889 = state_34586__$1;
(statearr_34630_34889[(2)] = null);

(statearr_34630_34889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (11))){
var inst_34559 = (state_34586[(2)]);
var state_34586__$1 = (function (){var statearr_34631 = state_34586;
(statearr_34631[(10)] = inst_34559);

return statearr_34631;
})();
var statearr_34632_34898 = state_34586__$1;
(statearr_34632_34898[(2)] = null);

(statearr_34632_34898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (9))){
var state_34586__$1 = state_34586;
var statearr_34633_34907 = state_34586__$1;
(statearr_34633_34907[(2)] = null);

(statearr_34633_34907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (5))){
var state_34586__$1 = state_34586;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34639_34911 = state_34586__$1;
(statearr_34639_34911[(1)] = (8));

} else {
var statearr_34640_34912 = state_34586__$1;
(statearr_34640_34912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (14))){
var inst_34564 = (state_34586[(8)]);
var inst_34566 = (state_34586[(11)]);
var inst_34564__$1 = (state_34586[(2)]);
var inst_34565 = (inst_34564__$1 == null);
var inst_34566__$1 = cljs.core.not(inst_34565);
var state_34586__$1 = (function (){var statearr_34644 = state_34586;
(statearr_34644[(8)] = inst_34564__$1);

(statearr_34644[(11)] = inst_34566__$1);

return statearr_34644;
})();
if(inst_34566__$1){
var statearr_34646_34915 = state_34586__$1;
(statearr_34646_34915[(1)] = (15));

} else {
var statearr_34648_34916 = state_34586__$1;
(statearr_34648_34916[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (16))){
var inst_34566 = (state_34586[(11)]);
var state_34586__$1 = state_34586;
var statearr_34649_34917 = state_34586__$1;
(statearr_34649_34917[(2)] = inst_34566);

(statearr_34649_34917[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (10))){
var inst_34556 = (state_34586[(2)]);
var state_34586__$1 = state_34586;
var statearr_34653_34920 = state_34586__$1;
(statearr_34653_34920[(2)] = inst_34556);

(statearr_34653_34920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (18))){
var inst_34569 = (state_34586[(2)]);
var state_34586__$1 = state_34586;
var statearr_34662_34921 = state_34586__$1;
(statearr_34662_34921[(2)] = inst_34569);

(statearr_34662_34921[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (8))){
var inst_34553 = cljs.core.async.close_BANG_(to);
var state_34586__$1 = state_34586;
var statearr_34672_34925 = state_34586__$1;
(statearr_34672_34925[(2)] = inst_34553);

(statearr_34672_34925[(1)] = (10));


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
}
}
}
}
});})(c__34082__auto__,jobs,results,process,async))
;
return ((function (switch__33799__auto__,c__34082__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0 = (function (){
var statearr_34677 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__);

(statearr_34677[(1)] = (1));

return statearr_34677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1 = (function (state_34586){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_34586);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34678){if((e34678 instanceof Object)){
var ex__33803__auto__ = e34678;
var statearr_34683_34928 = state_34586;
(statearr_34683_34928[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34929 = state_34586;
state_34586 = G__34929;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = function(state_34586){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1.call(this,state_34586);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto__,jobs,results,process,async))
})();
var state__34085__auto__ = (function (){var statearr_34685 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_34685[(6)] = c__34082__auto__);

return statearr_34685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto__,jobs,results,process,async))
);

return c__34082__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34933 = arguments.length;
switch (G__34933) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34959 = arguments.length;
switch (G__34959) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34994 = arguments.length;
switch (G__34994) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34082__auto___35085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto___35085,tc,fc){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto___35085,tc,fc){
return (function (state_35027){
var state_val_35028 = (state_35027[(1)]);
if((state_val_35028 === (7))){
var inst_35021 = (state_35027[(2)]);
var state_35027__$1 = state_35027;
var statearr_35030_35087 = state_35027__$1;
(statearr_35030_35087[(2)] = inst_35021);

(statearr_35030_35087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35028 === (1))){
var state_35027__$1 = state_35027;
var statearr_35032_35092 = state_35027__$1;
(statearr_35032_35092[(2)] = null);

(statearr_35032_35092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35028 === (4))){
var inst_35002 = (state_35027[(7)]);
var inst_35002__$1 = (state_35027[(2)]);
var inst_35003 = (inst_35002__$1 == null);
var state_35027__$1 = (function (){var statearr_35039 = state_35027;
(statearr_35039[(7)] = inst_35002__$1);

return statearr_35039;
})();
if(cljs.core.truth_(inst_35003)){
var statearr_35042_35093 = state_35027__$1;
(statearr_35042_35093[(1)] = (5));

} else {
var statearr_35043_35094 = state_35027__$1;
(statearr_35043_35094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35028 === (13))){
var state_35027__$1 = state_35027;
var statearr_35045_35097 = state_35027__$1;
(statearr_35045_35097[(2)] = null);

(statearr_35045_35097[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35028 === (6))){
var inst_35002 = (state_35027[(7)]);
var inst_35008 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35002) : p.call(null,inst_35002));
var state_35027__$1 = state_35027;
if(cljs.core.truth_(inst_35008)){
var statearr_35047_35101 = state_35027__$1;
(statearr_35047_35101[(1)] = (9));

} else {
var statearr_35048_35102 = state_35027__$1;
(statearr_35048_35102[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35028 === (3))){
var inst_35023 = (state_35027[(2)]);
var state_35027__$1 = state_35027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35027__$1,inst_35023);
} else {
if((state_val_35028 === (12))){
var state_35027__$1 = state_35027;
var statearr_35051_35103 = state_35027__$1;
(statearr_35051_35103[(2)] = null);

(statearr_35051_35103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35028 === (2))){
var state_35027__$1 = state_35027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35027__$1,(4),ch);
} else {
if((state_val_35028 === (11))){
var inst_35002 = (state_35027[(7)]);
var inst_35012 = (state_35027[(2)]);
var state_35027__$1 = state_35027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35027__$1,(8),inst_35012,inst_35002);
} else {
if((state_val_35028 === (9))){
var state_35027__$1 = state_35027;
var statearr_35060_35108 = state_35027__$1;
(statearr_35060_35108[(2)] = tc);

(statearr_35060_35108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35028 === (5))){
var inst_35005 = cljs.core.async.close_BANG_(tc);
var inst_35006 = cljs.core.async.close_BANG_(fc);
var state_35027__$1 = (function (){var statearr_35065 = state_35027;
(statearr_35065[(8)] = inst_35005);

return statearr_35065;
})();
var statearr_35066_35112 = state_35027__$1;
(statearr_35066_35112[(2)] = inst_35006);

(statearr_35066_35112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35028 === (14))){
var inst_35019 = (state_35027[(2)]);
var state_35027__$1 = state_35027;
var statearr_35067_35115 = state_35027__$1;
(statearr_35067_35115[(2)] = inst_35019);

(statearr_35067_35115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35028 === (10))){
var state_35027__$1 = state_35027;
var statearr_35068_35116 = state_35027__$1;
(statearr_35068_35116[(2)] = fc);

(statearr_35068_35116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35028 === (8))){
var inst_35014 = (state_35027[(2)]);
var state_35027__$1 = state_35027;
if(cljs.core.truth_(inst_35014)){
var statearr_35069_35124 = state_35027__$1;
(statearr_35069_35124[(1)] = (12));

} else {
var statearr_35070_35125 = state_35027__$1;
(statearr_35070_35125[(1)] = (13));

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
});})(c__34082__auto___35085,tc,fc))
;
return ((function (switch__33799__auto__,c__34082__auto___35085,tc,fc){
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_35075 = [null,null,null,null,null,null,null,null,null];
(statearr_35075[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_35075[(1)] = (1));

return statearr_35075;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_35027){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_35027);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e35077){if((e35077 instanceof Object)){
var ex__33803__auto__ = e35077;
var statearr_35080_35131 = state_35027;
(statearr_35080_35131[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35077;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35132 = state_35027;
state_35027 = G__35132;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_35027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_35027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto___35085,tc,fc))
})();
var state__34085__auto__ = (function (){var statearr_35081 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_35081[(6)] = c__34082__auto___35085);

return statearr_35081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto___35085,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto__){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto__){
return (function (state_35169){
var state_val_35170 = (state_35169[(1)]);
if((state_val_35170 === (7))){
var inst_35165 = (state_35169[(2)]);
var state_35169__$1 = state_35169;
var statearr_35176_35213 = state_35169__$1;
(statearr_35176_35213[(2)] = inst_35165);

(statearr_35176_35213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (1))){
var inst_35148 = init;
var state_35169__$1 = (function (){var statearr_35179 = state_35169;
(statearr_35179[(7)] = inst_35148);

return statearr_35179;
})();
var statearr_35180_35217 = state_35169__$1;
(statearr_35180_35217[(2)] = null);

(statearr_35180_35217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (4))){
var inst_35152 = (state_35169[(8)]);
var inst_35152__$1 = (state_35169[(2)]);
var inst_35153 = (inst_35152__$1 == null);
var state_35169__$1 = (function (){var statearr_35184 = state_35169;
(statearr_35184[(8)] = inst_35152__$1);

return statearr_35184;
})();
if(cljs.core.truth_(inst_35153)){
var statearr_35186_35221 = state_35169__$1;
(statearr_35186_35221[(1)] = (5));

} else {
var statearr_35189_35222 = state_35169__$1;
(statearr_35189_35222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (6))){
var inst_35148 = (state_35169[(7)]);
var inst_35156 = (state_35169[(9)]);
var inst_35152 = (state_35169[(8)]);
var inst_35156__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35148,inst_35152) : f.call(null,inst_35148,inst_35152));
var inst_35157 = cljs.core.reduced_QMARK_(inst_35156__$1);
var state_35169__$1 = (function (){var statearr_35190 = state_35169;
(statearr_35190[(9)] = inst_35156__$1);

return statearr_35190;
})();
if(inst_35157){
var statearr_35191_35226 = state_35169__$1;
(statearr_35191_35226[(1)] = (8));

} else {
var statearr_35192_35228 = state_35169__$1;
(statearr_35192_35228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (3))){
var inst_35167 = (state_35169[(2)]);
var state_35169__$1 = state_35169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35169__$1,inst_35167);
} else {
if((state_val_35170 === (2))){
var state_35169__$1 = state_35169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35169__$1,(4),ch);
} else {
if((state_val_35170 === (9))){
var inst_35156 = (state_35169[(9)]);
var inst_35148 = inst_35156;
var state_35169__$1 = (function (){var statearr_35193 = state_35169;
(statearr_35193[(7)] = inst_35148);

return statearr_35193;
})();
var statearr_35195_35230 = state_35169__$1;
(statearr_35195_35230[(2)] = null);

(statearr_35195_35230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (5))){
var inst_35148 = (state_35169[(7)]);
var state_35169__$1 = state_35169;
var statearr_35197_35231 = state_35169__$1;
(statearr_35197_35231[(2)] = inst_35148);

(statearr_35197_35231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (10))){
var inst_35163 = (state_35169[(2)]);
var state_35169__$1 = state_35169;
var statearr_35202_35232 = state_35169__$1;
(statearr_35202_35232[(2)] = inst_35163);

(statearr_35202_35232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (8))){
var inst_35156 = (state_35169[(9)]);
var inst_35159 = cljs.core.deref(inst_35156);
var state_35169__$1 = state_35169;
var statearr_35203_35233 = state_35169__$1;
(statearr_35203_35233[(2)] = inst_35159);

(statearr_35203_35233[(1)] = (10));


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
});})(c__34082__auto__))
;
return ((function (switch__33799__auto__,c__34082__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33800__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33800__auto____0 = (function (){
var statearr_35204 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35204[(0)] = cljs$core$async$reduce_$_state_machine__33800__auto__);

(statearr_35204[(1)] = (1));

return statearr_35204;
});
var cljs$core$async$reduce_$_state_machine__33800__auto____1 = (function (state_35169){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_35169);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e35205){if((e35205 instanceof Object)){
var ex__33803__auto__ = e35205;
var statearr_35206_35238 = state_35169;
(statearr_35206_35238[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35205;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35239 = state_35169;
state_35169 = G__35239;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33800__auto__ = function(state_35169){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33800__auto____1.call(this,state_35169);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33800__auto____0;
cljs$core$async$reduce_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33800__auto____1;
return cljs$core$async$reduce_$_state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto__))
})();
var state__34085__auto__ = (function (){var statearr_35207 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_35207[(6)] = c__34082__auto__);

return statearr_35207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto__))
);

return c__34082__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto__,f__$1){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto__,f__$1){
return (function (state_35248){
var state_val_35249 = (state_35248[(1)]);
if((state_val_35249 === (1))){
var inst_35243 = cljs.core.async.reduce(f__$1,init,ch);
var state_35248__$1 = state_35248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35248__$1,(2),inst_35243);
} else {
if((state_val_35249 === (2))){
var inst_35245 = (state_35248[(2)]);
var inst_35246 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35245) : f__$1.call(null,inst_35245));
var state_35248__$1 = state_35248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35248__$1,inst_35246);
} else {
return null;
}
}
});})(c__34082__auto__,f__$1))
;
return ((function (switch__33799__auto__,c__34082__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33800__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33800__auto____0 = (function (){
var statearr_35252 = [null,null,null,null,null,null,null];
(statearr_35252[(0)] = cljs$core$async$transduce_$_state_machine__33800__auto__);

(statearr_35252[(1)] = (1));

return statearr_35252;
});
var cljs$core$async$transduce_$_state_machine__33800__auto____1 = (function (state_35248){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_35248);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e35253){if((e35253 instanceof Object)){
var ex__33803__auto__ = e35253;
var statearr_35254_35261 = state_35248;
(statearr_35254_35261[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35253;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35262 = state_35248;
state_35248 = G__35262;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33800__auto__ = function(state_35248){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33800__auto____1.call(this,state_35248);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33800__auto____0;
cljs$core$async$transduce_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33800__auto____1;
return cljs$core$async$transduce_$_state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto__,f__$1))
})();
var state__34085__auto__ = (function (){var statearr_35258 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_35258[(6)] = c__34082__auto__);

return statearr_35258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto__,f__$1))
);

return c__34082__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35268 = arguments.length;
switch (G__35268) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto__){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto__){
return (function (state_35299){
var state_val_35300 = (state_35299[(1)]);
if((state_val_35300 === (7))){
var inst_35281 = (state_35299[(2)]);
var state_35299__$1 = state_35299;
var statearr_35302_35358 = state_35299__$1;
(statearr_35302_35358[(2)] = inst_35281);

(statearr_35302_35358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (1))){
var inst_35273 = cljs.core.seq(coll);
var inst_35274 = inst_35273;
var state_35299__$1 = (function (){var statearr_35304 = state_35299;
(statearr_35304[(7)] = inst_35274);

return statearr_35304;
})();
var statearr_35305_35361 = state_35299__$1;
(statearr_35305_35361[(2)] = null);

(statearr_35305_35361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (4))){
var inst_35274 = (state_35299[(7)]);
var inst_35279 = cljs.core.first(inst_35274);
var state_35299__$1 = state_35299;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35299__$1,(7),ch,inst_35279);
} else {
if((state_val_35300 === (13))){
var inst_35293 = (state_35299[(2)]);
var state_35299__$1 = state_35299;
var statearr_35309_35363 = state_35299__$1;
(statearr_35309_35363[(2)] = inst_35293);

(statearr_35309_35363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (6))){
var inst_35284 = (state_35299[(2)]);
var state_35299__$1 = state_35299;
if(cljs.core.truth_(inst_35284)){
var statearr_35312_35366 = state_35299__$1;
(statearr_35312_35366[(1)] = (8));

} else {
var statearr_35313_35367 = state_35299__$1;
(statearr_35313_35367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (3))){
var inst_35297 = (state_35299[(2)]);
var state_35299__$1 = state_35299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35299__$1,inst_35297);
} else {
if((state_val_35300 === (12))){
var state_35299__$1 = state_35299;
var statearr_35314_35374 = state_35299__$1;
(statearr_35314_35374[(2)] = null);

(statearr_35314_35374[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (2))){
var inst_35274 = (state_35299[(7)]);
var state_35299__$1 = state_35299;
if(cljs.core.truth_(inst_35274)){
var statearr_35315_35377 = state_35299__$1;
(statearr_35315_35377[(1)] = (4));

} else {
var statearr_35317_35378 = state_35299__$1;
(statearr_35317_35378[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (11))){
var inst_35290 = cljs.core.async.close_BANG_(ch);
var state_35299__$1 = state_35299;
var statearr_35320_35381 = state_35299__$1;
(statearr_35320_35381[(2)] = inst_35290);

(statearr_35320_35381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (9))){
var state_35299__$1 = state_35299;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35321_35387 = state_35299__$1;
(statearr_35321_35387[(1)] = (11));

} else {
var statearr_35322_35388 = state_35299__$1;
(statearr_35322_35388[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (5))){
var inst_35274 = (state_35299[(7)]);
var state_35299__$1 = state_35299;
var statearr_35327_35390 = state_35299__$1;
(statearr_35327_35390[(2)] = inst_35274);

(statearr_35327_35390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (10))){
var inst_35295 = (state_35299[(2)]);
var state_35299__$1 = state_35299;
var statearr_35329_35391 = state_35299__$1;
(statearr_35329_35391[(2)] = inst_35295);

(statearr_35329_35391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35300 === (8))){
var inst_35274 = (state_35299[(7)]);
var inst_35286 = cljs.core.next(inst_35274);
var inst_35274__$1 = inst_35286;
var state_35299__$1 = (function (){var statearr_35331 = state_35299;
(statearr_35331[(7)] = inst_35274__$1);

return statearr_35331;
})();
var statearr_35332_35399 = state_35299__$1;
(statearr_35332_35399[(2)] = null);

(statearr_35332_35399[(1)] = (2));


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
});})(c__34082__auto__))
;
return ((function (switch__33799__auto__,c__34082__auto__){
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_35337 = [null,null,null,null,null,null,null,null];
(statearr_35337[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_35337[(1)] = (1));

return statearr_35337;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_35299){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_35299);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e35339){if((e35339 instanceof Object)){
var ex__33803__auto__ = e35339;
var statearr_35344_35400 = state_35299;
(statearr_35344_35400[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35339;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35401 = state_35299;
state_35299 = G__35401;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_35299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_35299);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto__))
})();
var state__34085__auto__ = (function (){var statearr_35349 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_35349[(6)] = c__34082__auto__);

return statearr_35349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto__))
);

return c__34082__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5859__auto__ = (((_ == null))?null:_);
var m__5860__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5860__auto__.call(null,_));
} else {
var m__5860__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5860__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5860__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5860__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5860__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto__.call(null,m,ch));
} else {
var m__5860__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5860__auto__.call(null,m));
} else {
var m__5860__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5860__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35445 = (function (ch,cs,meta35446){
this.ch = ch;
this.cs = cs;
this.meta35446 = meta35446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35447,meta35446__$1){
var self__ = this;
var _35447__$1 = this;
return (new cljs.core.async.t_cljs$core$async35445(self__.ch,self__.cs,meta35446__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35447){
var self__ = this;
var _35447__$1 = this;
return self__.meta35446;
});})(cs))
;

cljs.core.async.t_cljs$core$async35445.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35445.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35445.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35445.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35445.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35445.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35445.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35446","meta35446",195938895,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35445";

cljs.core.async.t_cljs$core$async35445.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async35445");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35445 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35445(ch__$1,cs__$1,meta35446){
return (new cljs.core.async.t_cljs$core$async35445(ch__$1,cs__$1,meta35446));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35445(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34082__auto___35829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto___35829,cs,m,dchan,dctr,done){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto___35829,cs,m,dchan,dctr,done){
return (function (state_35618){
var state_val_35619 = (state_35618[(1)]);
if((state_val_35619 === (7))){
var inst_35614 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35621_35840 = state_35618__$1;
(statearr_35621_35840[(2)] = inst_35614);

(statearr_35621_35840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (20))){
var inst_35514 = (state_35618[(7)]);
var inst_35526 = cljs.core.first(inst_35514);
var inst_35527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35526,(0),null);
var inst_35528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35526,(1),null);
var state_35618__$1 = (function (){var statearr_35622 = state_35618;
(statearr_35622[(8)] = inst_35527);

return statearr_35622;
})();
if(cljs.core.truth_(inst_35528)){
var statearr_35624_35841 = state_35618__$1;
(statearr_35624_35841[(1)] = (22));

} else {
var statearr_35625_35846 = state_35618__$1;
(statearr_35625_35846[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (27))){
var inst_35559 = (state_35618[(9)]);
var inst_35557 = (state_35618[(10)]);
var inst_35564 = (state_35618[(11)]);
var inst_35483 = (state_35618[(12)]);
var inst_35564__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35557,inst_35559);
var inst_35565 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35564__$1,inst_35483,done);
var state_35618__$1 = (function (){var statearr_35632 = state_35618;
(statearr_35632[(11)] = inst_35564__$1);

return statearr_35632;
})();
if(cljs.core.truth_(inst_35565)){
var statearr_35634_35853 = state_35618__$1;
(statearr_35634_35853[(1)] = (30));

} else {
var statearr_35636_35858 = state_35618__$1;
(statearr_35636_35858[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (1))){
var state_35618__$1 = state_35618;
var statearr_35637_35862 = state_35618__$1;
(statearr_35637_35862[(2)] = null);

(statearr_35637_35862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (24))){
var inst_35514 = (state_35618[(7)]);
var inst_35533 = (state_35618[(2)]);
var inst_35534 = cljs.core.next(inst_35514);
var inst_35492 = inst_35534;
var inst_35493 = null;
var inst_35494 = (0);
var inst_35495 = (0);
var state_35618__$1 = (function (){var statearr_35638 = state_35618;
(statearr_35638[(13)] = inst_35495);

(statearr_35638[(14)] = inst_35492);

(statearr_35638[(15)] = inst_35493);

(statearr_35638[(16)] = inst_35533);

(statearr_35638[(17)] = inst_35494);

return statearr_35638;
})();
var statearr_35639_35877 = state_35618__$1;
(statearr_35639_35877[(2)] = null);

(statearr_35639_35877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (39))){
var state_35618__$1 = state_35618;
var statearr_35650_35878 = state_35618__$1;
(statearr_35650_35878[(2)] = null);

(statearr_35650_35878[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (4))){
var inst_35483 = (state_35618[(12)]);
var inst_35483__$1 = (state_35618[(2)]);
var inst_35484 = (inst_35483__$1 == null);
var state_35618__$1 = (function (){var statearr_35652 = state_35618;
(statearr_35652[(12)] = inst_35483__$1);

return statearr_35652;
})();
if(cljs.core.truth_(inst_35484)){
var statearr_35655_35885 = state_35618__$1;
(statearr_35655_35885[(1)] = (5));

} else {
var statearr_35657_35886 = state_35618__$1;
(statearr_35657_35886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (15))){
var inst_35495 = (state_35618[(13)]);
var inst_35492 = (state_35618[(14)]);
var inst_35493 = (state_35618[(15)]);
var inst_35494 = (state_35618[(17)]);
var inst_35510 = (state_35618[(2)]);
var inst_35511 = (inst_35495 + (1));
var tmp35642 = inst_35492;
var tmp35643 = inst_35493;
var tmp35644 = inst_35494;
var inst_35492__$1 = tmp35642;
var inst_35493__$1 = tmp35643;
var inst_35494__$1 = tmp35644;
var inst_35495__$1 = inst_35511;
var state_35618__$1 = (function (){var statearr_35666 = state_35618;
(statearr_35666[(13)] = inst_35495__$1);

(statearr_35666[(18)] = inst_35510);

(statearr_35666[(14)] = inst_35492__$1);

(statearr_35666[(15)] = inst_35493__$1);

(statearr_35666[(17)] = inst_35494__$1);

return statearr_35666;
})();
var statearr_35668_35897 = state_35618__$1;
(statearr_35668_35897[(2)] = null);

(statearr_35668_35897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (21))){
var inst_35537 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35673_35898 = state_35618__$1;
(statearr_35673_35898[(2)] = inst_35537);

(statearr_35673_35898[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (31))){
var inst_35564 = (state_35618[(11)]);
var inst_35568 = done(null);
var inst_35569 = cljs.core.async.untap_STAR_(m,inst_35564);
var state_35618__$1 = (function (){var statearr_35675 = state_35618;
(statearr_35675[(19)] = inst_35568);

return statearr_35675;
})();
var statearr_35678_35899 = state_35618__$1;
(statearr_35678_35899[(2)] = inst_35569);

(statearr_35678_35899[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (32))){
var inst_35559 = (state_35618[(9)]);
var inst_35557 = (state_35618[(10)]);
var inst_35558 = (state_35618[(20)]);
var inst_35556 = (state_35618[(21)]);
var inst_35571 = (state_35618[(2)]);
var inst_35572 = (inst_35559 + (1));
var tmp35670 = inst_35557;
var tmp35671 = inst_35558;
var tmp35672 = inst_35556;
var inst_35556__$1 = tmp35672;
var inst_35557__$1 = tmp35670;
var inst_35558__$1 = tmp35671;
var inst_35559__$1 = inst_35572;
var state_35618__$1 = (function (){var statearr_35687 = state_35618;
(statearr_35687[(9)] = inst_35559__$1);

(statearr_35687[(10)] = inst_35557__$1);

(statearr_35687[(22)] = inst_35571);

(statearr_35687[(20)] = inst_35558__$1);

(statearr_35687[(21)] = inst_35556__$1);

return statearr_35687;
})();
var statearr_35690_35900 = state_35618__$1;
(statearr_35690_35900[(2)] = null);

(statearr_35690_35900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (40))){
var inst_35584 = (state_35618[(23)]);
var inst_35588 = done(null);
var inst_35589 = cljs.core.async.untap_STAR_(m,inst_35584);
var state_35618__$1 = (function (){var statearr_35693 = state_35618;
(statearr_35693[(24)] = inst_35588);

return statearr_35693;
})();
var statearr_35694_35901 = state_35618__$1;
(statearr_35694_35901[(2)] = inst_35589);

(statearr_35694_35901[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (33))){
var inst_35575 = (state_35618[(25)]);
var inst_35577 = cljs.core.chunked_seq_QMARK_(inst_35575);
var state_35618__$1 = state_35618;
if(inst_35577){
var statearr_35697_35902 = state_35618__$1;
(statearr_35697_35902[(1)] = (36));

} else {
var statearr_35698_35903 = state_35618__$1;
(statearr_35698_35903[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (13))){
var inst_35504 = (state_35618[(26)]);
var inst_35507 = cljs.core.async.close_BANG_(inst_35504);
var state_35618__$1 = state_35618;
var statearr_35699_35904 = state_35618__$1;
(statearr_35699_35904[(2)] = inst_35507);

(statearr_35699_35904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (22))){
var inst_35527 = (state_35618[(8)]);
var inst_35530 = cljs.core.async.close_BANG_(inst_35527);
var state_35618__$1 = state_35618;
var statearr_35700_35905 = state_35618__$1;
(statearr_35700_35905[(2)] = inst_35530);

(statearr_35700_35905[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (36))){
var inst_35575 = (state_35618[(25)]);
var inst_35579 = cljs.core.chunk_first(inst_35575);
var inst_35580 = cljs.core.chunk_rest(inst_35575);
var inst_35581 = cljs.core.count(inst_35579);
var inst_35556 = inst_35580;
var inst_35557 = inst_35579;
var inst_35558 = inst_35581;
var inst_35559 = (0);
var state_35618__$1 = (function (){var statearr_35705 = state_35618;
(statearr_35705[(9)] = inst_35559);

(statearr_35705[(10)] = inst_35557);

(statearr_35705[(20)] = inst_35558);

(statearr_35705[(21)] = inst_35556);

return statearr_35705;
})();
var statearr_35706_35906 = state_35618__$1;
(statearr_35706_35906[(2)] = null);

(statearr_35706_35906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (41))){
var inst_35575 = (state_35618[(25)]);
var inst_35591 = (state_35618[(2)]);
var inst_35592 = cljs.core.next(inst_35575);
var inst_35556 = inst_35592;
var inst_35557 = null;
var inst_35558 = (0);
var inst_35559 = (0);
var state_35618__$1 = (function (){var statearr_35707 = state_35618;
(statearr_35707[(9)] = inst_35559);

(statearr_35707[(10)] = inst_35557);

(statearr_35707[(20)] = inst_35558);

(statearr_35707[(21)] = inst_35556);

(statearr_35707[(27)] = inst_35591);

return statearr_35707;
})();
var statearr_35708_35907 = state_35618__$1;
(statearr_35708_35907[(2)] = null);

(statearr_35708_35907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (43))){
var state_35618__$1 = state_35618;
var statearr_35711_35908 = state_35618__$1;
(statearr_35711_35908[(2)] = null);

(statearr_35711_35908[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (29))){
var inst_35600 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35714_35909 = state_35618__$1;
(statearr_35714_35909[(2)] = inst_35600);

(statearr_35714_35909[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (44))){
var inst_35611 = (state_35618[(2)]);
var state_35618__$1 = (function (){var statearr_35715 = state_35618;
(statearr_35715[(28)] = inst_35611);

return statearr_35715;
})();
var statearr_35718_35910 = state_35618__$1;
(statearr_35718_35910[(2)] = null);

(statearr_35718_35910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (6))){
var inst_35547 = (state_35618[(29)]);
var inst_35546 = cljs.core.deref(cs);
var inst_35547__$1 = cljs.core.keys(inst_35546);
var inst_35549 = cljs.core.count(inst_35547__$1);
var inst_35550 = cljs.core.reset_BANG_(dctr,inst_35549);
var inst_35555 = cljs.core.seq(inst_35547__$1);
var inst_35556 = inst_35555;
var inst_35557 = null;
var inst_35558 = (0);
var inst_35559 = (0);
var state_35618__$1 = (function (){var statearr_35720 = state_35618;
(statearr_35720[(9)] = inst_35559);

(statearr_35720[(10)] = inst_35557);

(statearr_35720[(20)] = inst_35558);

(statearr_35720[(29)] = inst_35547__$1);

(statearr_35720[(21)] = inst_35556);

(statearr_35720[(30)] = inst_35550);

return statearr_35720;
})();
var statearr_35721_35911 = state_35618__$1;
(statearr_35721_35911[(2)] = null);

(statearr_35721_35911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (28))){
var inst_35575 = (state_35618[(25)]);
var inst_35556 = (state_35618[(21)]);
var inst_35575__$1 = cljs.core.seq(inst_35556);
var state_35618__$1 = (function (){var statearr_35722 = state_35618;
(statearr_35722[(25)] = inst_35575__$1);

return statearr_35722;
})();
if(inst_35575__$1){
var statearr_35723_35912 = state_35618__$1;
(statearr_35723_35912[(1)] = (33));

} else {
var statearr_35724_35913 = state_35618__$1;
(statearr_35724_35913[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (25))){
var inst_35559 = (state_35618[(9)]);
var inst_35558 = (state_35618[(20)]);
var inst_35561 = (inst_35559 < inst_35558);
var inst_35562 = inst_35561;
var state_35618__$1 = state_35618;
if(cljs.core.truth_(inst_35562)){
var statearr_35727_35914 = state_35618__$1;
(statearr_35727_35914[(1)] = (27));

} else {
var statearr_35729_35915 = state_35618__$1;
(statearr_35729_35915[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (34))){
var state_35618__$1 = state_35618;
var statearr_35733_35916 = state_35618__$1;
(statearr_35733_35916[(2)] = null);

(statearr_35733_35916[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (17))){
var state_35618__$1 = state_35618;
var statearr_35738_35917 = state_35618__$1;
(statearr_35738_35917[(2)] = null);

(statearr_35738_35917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (3))){
var inst_35616 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35618__$1,inst_35616);
} else {
if((state_val_35619 === (12))){
var inst_35542 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35743_35918 = state_35618__$1;
(statearr_35743_35918[(2)] = inst_35542);

(statearr_35743_35918[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (2))){
var state_35618__$1 = state_35618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35618__$1,(4),ch);
} else {
if((state_val_35619 === (23))){
var state_35618__$1 = state_35618;
var statearr_35747_35919 = state_35618__$1;
(statearr_35747_35919[(2)] = null);

(statearr_35747_35919[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (35))){
var inst_35598 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35749_35920 = state_35618__$1;
(statearr_35749_35920[(2)] = inst_35598);

(statearr_35749_35920[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (19))){
var inst_35514 = (state_35618[(7)]);
var inst_35518 = cljs.core.chunk_first(inst_35514);
var inst_35519 = cljs.core.chunk_rest(inst_35514);
var inst_35520 = cljs.core.count(inst_35518);
var inst_35492 = inst_35519;
var inst_35493 = inst_35518;
var inst_35494 = inst_35520;
var inst_35495 = (0);
var state_35618__$1 = (function (){var statearr_35752 = state_35618;
(statearr_35752[(13)] = inst_35495);

(statearr_35752[(14)] = inst_35492);

(statearr_35752[(15)] = inst_35493);

(statearr_35752[(17)] = inst_35494);

return statearr_35752;
})();
var statearr_35754_35921 = state_35618__$1;
(statearr_35754_35921[(2)] = null);

(statearr_35754_35921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (11))){
var inst_35514 = (state_35618[(7)]);
var inst_35492 = (state_35618[(14)]);
var inst_35514__$1 = cljs.core.seq(inst_35492);
var state_35618__$1 = (function (){var statearr_35756 = state_35618;
(statearr_35756[(7)] = inst_35514__$1);

return statearr_35756;
})();
if(inst_35514__$1){
var statearr_35757_35922 = state_35618__$1;
(statearr_35757_35922[(1)] = (16));

} else {
var statearr_35758_35923 = state_35618__$1;
(statearr_35758_35923[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (9))){
var inst_35544 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35760_35924 = state_35618__$1;
(statearr_35760_35924[(2)] = inst_35544);

(statearr_35760_35924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (5))){
var inst_35490 = cljs.core.deref(cs);
var inst_35491 = cljs.core.seq(inst_35490);
var inst_35492 = inst_35491;
var inst_35493 = null;
var inst_35494 = (0);
var inst_35495 = (0);
var state_35618__$1 = (function (){var statearr_35764 = state_35618;
(statearr_35764[(13)] = inst_35495);

(statearr_35764[(14)] = inst_35492);

(statearr_35764[(15)] = inst_35493);

(statearr_35764[(17)] = inst_35494);

return statearr_35764;
})();
var statearr_35765_35925 = state_35618__$1;
(statearr_35765_35925[(2)] = null);

(statearr_35765_35925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (14))){
var state_35618__$1 = state_35618;
var statearr_35766_35926 = state_35618__$1;
(statearr_35766_35926[(2)] = null);

(statearr_35766_35926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (45))){
var inst_35607 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35769_35927 = state_35618__$1;
(statearr_35769_35927[(2)] = inst_35607);

(statearr_35769_35927[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (26))){
var inst_35547 = (state_35618[(29)]);
var inst_35602 = (state_35618[(2)]);
var inst_35603 = cljs.core.seq(inst_35547);
var state_35618__$1 = (function (){var statearr_35772 = state_35618;
(statearr_35772[(31)] = inst_35602);

return statearr_35772;
})();
if(inst_35603){
var statearr_35773_35928 = state_35618__$1;
(statearr_35773_35928[(1)] = (42));

} else {
var statearr_35775_35929 = state_35618__$1;
(statearr_35775_35929[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (16))){
var inst_35514 = (state_35618[(7)]);
var inst_35516 = cljs.core.chunked_seq_QMARK_(inst_35514);
var state_35618__$1 = state_35618;
if(inst_35516){
var statearr_35778_35930 = state_35618__$1;
(statearr_35778_35930[(1)] = (19));

} else {
var statearr_35779_35931 = state_35618__$1;
(statearr_35779_35931[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (38))){
var inst_35595 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35780_35932 = state_35618__$1;
(statearr_35780_35932[(2)] = inst_35595);

(statearr_35780_35932[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (30))){
var state_35618__$1 = state_35618;
var statearr_35785_35933 = state_35618__$1;
(statearr_35785_35933[(2)] = null);

(statearr_35785_35933[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (10))){
var inst_35495 = (state_35618[(13)]);
var inst_35493 = (state_35618[(15)]);
var inst_35503 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35493,inst_35495);
var inst_35504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35503,(0),null);
var inst_35505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35503,(1),null);
var state_35618__$1 = (function (){var statearr_35786 = state_35618;
(statearr_35786[(26)] = inst_35504);

return statearr_35786;
})();
if(cljs.core.truth_(inst_35505)){
var statearr_35787_35934 = state_35618__$1;
(statearr_35787_35934[(1)] = (13));

} else {
var statearr_35788_35935 = state_35618__$1;
(statearr_35788_35935[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (18))){
var inst_35540 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35789_35936 = state_35618__$1;
(statearr_35789_35936[(2)] = inst_35540);

(statearr_35789_35936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (42))){
var state_35618__$1 = state_35618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35618__$1,(45),dchan);
} else {
if((state_val_35619 === (37))){
var inst_35575 = (state_35618[(25)]);
var inst_35584 = (state_35618[(23)]);
var inst_35483 = (state_35618[(12)]);
var inst_35584__$1 = cljs.core.first(inst_35575);
var inst_35585 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35584__$1,inst_35483,done);
var state_35618__$1 = (function (){var statearr_35799 = state_35618;
(statearr_35799[(23)] = inst_35584__$1);

return statearr_35799;
})();
if(cljs.core.truth_(inst_35585)){
var statearr_35800_35937 = state_35618__$1;
(statearr_35800_35937[(1)] = (39));

} else {
var statearr_35801_35938 = state_35618__$1;
(statearr_35801_35938[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (8))){
var inst_35495 = (state_35618[(13)]);
var inst_35494 = (state_35618[(17)]);
var inst_35497 = (inst_35495 < inst_35494);
var inst_35498 = inst_35497;
var state_35618__$1 = state_35618;
if(cljs.core.truth_(inst_35498)){
var statearr_35807_35939 = state_35618__$1;
(statearr_35807_35939[(1)] = (10));

} else {
var statearr_35808_35940 = state_35618__$1;
(statearr_35808_35940[(1)] = (11));

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
});})(c__34082__auto___35829,cs,m,dchan,dctr,done))
;
return ((function (switch__33799__auto__,c__34082__auto___35829,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33800__auto__ = null;
var cljs$core$async$mult_$_state_machine__33800__auto____0 = (function (){
var statearr_35813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35813[(0)] = cljs$core$async$mult_$_state_machine__33800__auto__);

(statearr_35813[(1)] = (1));

return statearr_35813;
});
var cljs$core$async$mult_$_state_machine__33800__auto____1 = (function (state_35618){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_35618);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e35814){if((e35814 instanceof Object)){
var ex__33803__auto__ = e35814;
var statearr_35815_35941 = state_35618;
(statearr_35815_35941[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35814;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35942 = state_35618;
state_35618 = G__35942;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33800__auto__ = function(state_35618){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33800__auto____1.call(this,state_35618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33800__auto____0;
cljs$core$async$mult_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33800__auto____1;
return cljs$core$async$mult_$_state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto___35829,cs,m,dchan,dctr,done))
})();
var state__34085__auto__ = (function (){var statearr_35816 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_35816[(6)] = c__34082__auto___35829);

return statearr_35816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto___35829,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35944 = arguments.length;
switch (G__35944) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto__.call(null,m,ch));
} else {
var m__5860__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto__.call(null,m,ch));
} else {
var m__5860__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5860__auto__.call(null,m));
} else {
var m__5860__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5860__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5860__auto__.call(null,m,state_map));
} else {
var m__5860__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5860__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5860__auto__.call(null,m,mode));
} else {
var m__5860__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5860__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35956 = arguments.length;
var i__6406__auto___35957 = (0);
while(true){
if((i__6406__auto___35957 < len__6405__auto___35956)){
args__6412__auto__.push((arguments[i__6406__auto___35957]));

var G__35958 = (i__6406__auto___35957 + (1));
i__6406__auto___35957 = G__35958;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((3) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6413__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35950){
var map__35951 = p__35950;
var map__35951__$1 = ((((!((map__35951 == null)))?((((map__35951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35951):map__35951);
var opts = map__35951__$1;
var statearr_35953_35959 = state;
(statearr_35953_35959[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__35951,map__35951__$1,opts){
return (function (val){
var statearr_35954_35960 = state;
(statearr_35954_35960[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__35951,map__35951__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_35955_35961 = state;
(statearr_35955_35961[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35946){
var G__35947 = cljs.core.first(seq35946);
var seq35946__$1 = cljs.core.next(seq35946);
var G__35948 = cljs.core.first(seq35946__$1);
var seq35946__$2 = cljs.core.next(seq35946__$1);
var G__35949 = cljs.core.first(seq35946__$2);
var seq35946__$3 = cljs.core.next(seq35946__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35947,G__35948,G__35949,seq35946__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35962 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35962 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35963){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35963 = meta35963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35964,meta35963__$1){
var self__ = this;
var _35964__$1 = this;
return (new cljs.core.async.t_cljs$core$async35962(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35963__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35964){
var self__ = this;
var _35964__$1 = this;
return self__.meta35963;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35962.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35963","meta35963",646142717,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35962.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35962";

cljs.core.async.t_cljs$core$async35962.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async35962");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35962 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35962(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35963){
return (new cljs.core.async.t_cljs$core$async35962(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35963));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35962(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34082__auto___36126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto___36126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto___36126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36066){
var state_val_36067 = (state_36066[(1)]);
if((state_val_36067 === (7))){
var inst_35981 = (state_36066[(2)]);
var state_36066__$1 = state_36066;
var statearr_36068_36127 = state_36066__$1;
(statearr_36068_36127[(2)] = inst_35981);

(statearr_36068_36127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (20))){
var inst_35993 = (state_36066[(7)]);
var state_36066__$1 = state_36066;
var statearr_36069_36128 = state_36066__$1;
(statearr_36069_36128[(2)] = inst_35993);

(statearr_36069_36128[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (27))){
var state_36066__$1 = state_36066;
var statearr_36070_36129 = state_36066__$1;
(statearr_36070_36129[(2)] = null);

(statearr_36070_36129[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (1))){
var inst_35968 = (state_36066[(8)]);
var inst_35968__$1 = calc_state();
var inst_35970 = (inst_35968__$1 == null);
var inst_35971 = cljs.core.not(inst_35970);
var state_36066__$1 = (function (){var statearr_36071 = state_36066;
(statearr_36071[(8)] = inst_35968__$1);

return statearr_36071;
})();
if(inst_35971){
var statearr_36072_36130 = state_36066__$1;
(statearr_36072_36130[(1)] = (2));

} else {
var statearr_36073_36131 = state_36066__$1;
(statearr_36073_36131[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (24))){
var inst_36040 = (state_36066[(9)]);
var inst_36017 = (state_36066[(10)]);
var inst_36026 = (state_36066[(11)]);
var inst_36040__$1 = (inst_36017.cljs$core$IFn$_invoke$arity$1 ? inst_36017.cljs$core$IFn$_invoke$arity$1(inst_36026) : inst_36017.call(null,inst_36026));
var state_36066__$1 = (function (){var statearr_36074 = state_36066;
(statearr_36074[(9)] = inst_36040__$1);

return statearr_36074;
})();
if(cljs.core.truth_(inst_36040__$1)){
var statearr_36075_36132 = state_36066__$1;
(statearr_36075_36132[(1)] = (29));

} else {
var statearr_36076_36133 = state_36066__$1;
(statearr_36076_36133[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (4))){
var inst_35984 = (state_36066[(2)]);
var state_36066__$1 = state_36066;
if(cljs.core.truth_(inst_35984)){
var statearr_36077_36134 = state_36066__$1;
(statearr_36077_36134[(1)] = (8));

} else {
var statearr_36078_36135 = state_36066__$1;
(statearr_36078_36135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (15))){
var inst_36011 = (state_36066[(2)]);
var state_36066__$1 = state_36066;
if(cljs.core.truth_(inst_36011)){
var statearr_36079_36136 = state_36066__$1;
(statearr_36079_36136[(1)] = (19));

} else {
var statearr_36080_36137 = state_36066__$1;
(statearr_36080_36137[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (21))){
var inst_36016 = (state_36066[(12)]);
var inst_36016__$1 = (state_36066[(2)]);
var inst_36017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36016__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36016__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36016__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36066__$1 = (function (){var statearr_36081 = state_36066;
(statearr_36081[(12)] = inst_36016__$1);

(statearr_36081[(10)] = inst_36017);

(statearr_36081[(13)] = inst_36018);

return statearr_36081;
})();
return cljs.core.async.ioc_alts_BANG_(state_36066__$1,(22),inst_36019);
} else {
if((state_val_36067 === (31))){
var inst_36048 = (state_36066[(2)]);
var state_36066__$1 = state_36066;
if(cljs.core.truth_(inst_36048)){
var statearr_36082_36138 = state_36066__$1;
(statearr_36082_36138[(1)] = (32));

} else {
var statearr_36083_36139 = state_36066__$1;
(statearr_36083_36139[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (32))){
var inst_36025 = (state_36066[(14)]);
var state_36066__$1 = state_36066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36066__$1,(35),out,inst_36025);
} else {
if((state_val_36067 === (33))){
var inst_36016 = (state_36066[(12)]);
var inst_35993 = inst_36016;
var state_36066__$1 = (function (){var statearr_36084 = state_36066;
(statearr_36084[(7)] = inst_35993);

return statearr_36084;
})();
var statearr_36085_36140 = state_36066__$1;
(statearr_36085_36140[(2)] = null);

(statearr_36085_36140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (13))){
var inst_35993 = (state_36066[(7)]);
var inst_36000 = inst_35993.cljs$lang$protocol_mask$partition0$;
var inst_36001 = (inst_36000 & (64));
var inst_36002 = inst_35993.cljs$core$ISeq$;
var inst_36003 = (cljs.core.PROTOCOL_SENTINEL === inst_36002);
var inst_36004 = (inst_36001) || (inst_36003);
var state_36066__$1 = state_36066;
if(cljs.core.truth_(inst_36004)){
var statearr_36086_36141 = state_36066__$1;
(statearr_36086_36141[(1)] = (16));

} else {
var statearr_36087_36142 = state_36066__$1;
(statearr_36087_36142[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (22))){
var inst_36025 = (state_36066[(14)]);
var inst_36026 = (state_36066[(11)]);
var inst_36024 = (state_36066[(2)]);
var inst_36025__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36024,(0),null);
var inst_36026__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36024,(1),null);
var inst_36027 = (inst_36025__$1 == null);
var inst_36028 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36026__$1,change);
var inst_36029 = (inst_36027) || (inst_36028);
var state_36066__$1 = (function (){var statearr_36088 = state_36066;
(statearr_36088[(14)] = inst_36025__$1);

(statearr_36088[(11)] = inst_36026__$1);

return statearr_36088;
})();
if(cljs.core.truth_(inst_36029)){
var statearr_36089_36143 = state_36066__$1;
(statearr_36089_36143[(1)] = (23));

} else {
var statearr_36090_36144 = state_36066__$1;
(statearr_36090_36144[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (36))){
var inst_36016 = (state_36066[(12)]);
var inst_35993 = inst_36016;
var state_36066__$1 = (function (){var statearr_36091 = state_36066;
(statearr_36091[(7)] = inst_35993);

return statearr_36091;
})();
var statearr_36092_36145 = state_36066__$1;
(statearr_36092_36145[(2)] = null);

(statearr_36092_36145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (29))){
var inst_36040 = (state_36066[(9)]);
var state_36066__$1 = state_36066;
var statearr_36093_36146 = state_36066__$1;
(statearr_36093_36146[(2)] = inst_36040);

(statearr_36093_36146[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (6))){
var state_36066__$1 = state_36066;
var statearr_36094_36147 = state_36066__$1;
(statearr_36094_36147[(2)] = false);

(statearr_36094_36147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (28))){
var inst_36036 = (state_36066[(2)]);
var inst_36037 = calc_state();
var inst_35993 = inst_36037;
var state_36066__$1 = (function (){var statearr_36095 = state_36066;
(statearr_36095[(15)] = inst_36036);

(statearr_36095[(7)] = inst_35993);

return statearr_36095;
})();
var statearr_36096_36148 = state_36066__$1;
(statearr_36096_36148[(2)] = null);

(statearr_36096_36148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (25))){
var inst_36062 = (state_36066[(2)]);
var state_36066__$1 = state_36066;
var statearr_36097_36149 = state_36066__$1;
(statearr_36097_36149[(2)] = inst_36062);

(statearr_36097_36149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (34))){
var inst_36060 = (state_36066[(2)]);
var state_36066__$1 = state_36066;
var statearr_36098_36150 = state_36066__$1;
(statearr_36098_36150[(2)] = inst_36060);

(statearr_36098_36150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (17))){
var state_36066__$1 = state_36066;
var statearr_36099_36151 = state_36066__$1;
(statearr_36099_36151[(2)] = false);

(statearr_36099_36151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (3))){
var state_36066__$1 = state_36066;
var statearr_36100_36152 = state_36066__$1;
(statearr_36100_36152[(2)] = false);

(statearr_36100_36152[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (12))){
var inst_36064 = (state_36066[(2)]);
var state_36066__$1 = state_36066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36066__$1,inst_36064);
} else {
if((state_val_36067 === (2))){
var inst_35968 = (state_36066[(8)]);
var inst_35973 = inst_35968.cljs$lang$protocol_mask$partition0$;
var inst_35974 = (inst_35973 & (64));
var inst_35975 = inst_35968.cljs$core$ISeq$;
var inst_35976 = (cljs.core.PROTOCOL_SENTINEL === inst_35975);
var inst_35977 = (inst_35974) || (inst_35976);
var state_36066__$1 = state_36066;
if(cljs.core.truth_(inst_35977)){
var statearr_36101_36153 = state_36066__$1;
(statearr_36101_36153[(1)] = (5));

} else {
var statearr_36102_36154 = state_36066__$1;
(statearr_36102_36154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (23))){
var inst_36025 = (state_36066[(14)]);
var inst_36031 = (inst_36025 == null);
var state_36066__$1 = state_36066;
if(cljs.core.truth_(inst_36031)){
var statearr_36103_36155 = state_36066__$1;
(statearr_36103_36155[(1)] = (26));

} else {
var statearr_36104_36156 = state_36066__$1;
(statearr_36104_36156[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (35))){
var inst_36051 = (state_36066[(2)]);
var state_36066__$1 = state_36066;
if(cljs.core.truth_(inst_36051)){
var statearr_36105_36157 = state_36066__$1;
(statearr_36105_36157[(1)] = (36));

} else {
var statearr_36106_36158 = state_36066__$1;
(statearr_36106_36158[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (19))){
var inst_35993 = (state_36066[(7)]);
var inst_36013 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35993);
var state_36066__$1 = state_36066;
var statearr_36107_36159 = state_36066__$1;
(statearr_36107_36159[(2)] = inst_36013);

(statearr_36107_36159[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (11))){
var inst_35993 = (state_36066[(7)]);
var inst_35997 = (inst_35993 == null);
var inst_35998 = cljs.core.not(inst_35997);
var state_36066__$1 = state_36066;
if(inst_35998){
var statearr_36108_36160 = state_36066__$1;
(statearr_36108_36160[(1)] = (13));

} else {
var statearr_36109_36161 = state_36066__$1;
(statearr_36109_36161[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (9))){
var inst_35968 = (state_36066[(8)]);
var state_36066__$1 = state_36066;
var statearr_36110_36162 = state_36066__$1;
(statearr_36110_36162[(2)] = inst_35968);

(statearr_36110_36162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (5))){
var state_36066__$1 = state_36066;
var statearr_36111_36163 = state_36066__$1;
(statearr_36111_36163[(2)] = true);

(statearr_36111_36163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (14))){
var state_36066__$1 = state_36066;
var statearr_36112_36164 = state_36066__$1;
(statearr_36112_36164[(2)] = false);

(statearr_36112_36164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (26))){
var inst_36026 = (state_36066[(11)]);
var inst_36033 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36026);
var state_36066__$1 = state_36066;
var statearr_36113_36165 = state_36066__$1;
(statearr_36113_36165[(2)] = inst_36033);

(statearr_36113_36165[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (16))){
var state_36066__$1 = state_36066;
var statearr_36114_36166 = state_36066__$1;
(statearr_36114_36166[(2)] = true);

(statearr_36114_36166[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (38))){
var inst_36056 = (state_36066[(2)]);
var state_36066__$1 = state_36066;
var statearr_36115_36167 = state_36066__$1;
(statearr_36115_36167[(2)] = inst_36056);

(statearr_36115_36167[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (30))){
var inst_36017 = (state_36066[(10)]);
var inst_36018 = (state_36066[(13)]);
var inst_36026 = (state_36066[(11)]);
var inst_36043 = cljs.core.empty_QMARK_(inst_36017);
var inst_36044 = (inst_36018.cljs$core$IFn$_invoke$arity$1 ? inst_36018.cljs$core$IFn$_invoke$arity$1(inst_36026) : inst_36018.call(null,inst_36026));
var inst_36045 = cljs.core.not(inst_36044);
var inst_36046 = (inst_36043) && (inst_36045);
var state_36066__$1 = state_36066;
var statearr_36116_36168 = state_36066__$1;
(statearr_36116_36168[(2)] = inst_36046);

(statearr_36116_36168[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (10))){
var inst_35968 = (state_36066[(8)]);
var inst_35989 = (state_36066[(2)]);
var inst_35990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35989,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35989,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35989,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35993 = inst_35968;
var state_36066__$1 = (function (){var statearr_36117 = state_36066;
(statearr_36117[(16)] = inst_35992);

(statearr_36117[(7)] = inst_35993);

(statearr_36117[(17)] = inst_35991);

(statearr_36117[(18)] = inst_35990);

return statearr_36117;
})();
var statearr_36118_36169 = state_36066__$1;
(statearr_36118_36169[(2)] = null);

(statearr_36118_36169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (18))){
var inst_36008 = (state_36066[(2)]);
var state_36066__$1 = state_36066;
var statearr_36119_36170 = state_36066__$1;
(statearr_36119_36170[(2)] = inst_36008);

(statearr_36119_36170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (37))){
var state_36066__$1 = state_36066;
var statearr_36120_36171 = state_36066__$1;
(statearr_36120_36171[(2)] = null);

(statearr_36120_36171[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (8))){
var inst_35968 = (state_36066[(8)]);
var inst_35986 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35968);
var state_36066__$1 = state_36066;
var statearr_36121_36172 = state_36066__$1;
(statearr_36121_36172[(2)] = inst_35986);

(statearr_36121_36172[(1)] = (10));


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
}
}
}
}
});})(c__34082__auto___36126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33799__auto__,c__34082__auto___36126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33800__auto__ = null;
var cljs$core$async$mix_$_state_machine__33800__auto____0 = (function (){
var statearr_36122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36122[(0)] = cljs$core$async$mix_$_state_machine__33800__auto__);

(statearr_36122[(1)] = (1));

return statearr_36122;
});
var cljs$core$async$mix_$_state_machine__33800__auto____1 = (function (state_36066){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_36066);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e36123){if((e36123 instanceof Object)){
var ex__33803__auto__ = e36123;
var statearr_36124_36173 = state_36066;
(statearr_36124_36173[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36123;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36174 = state_36066;
state_36066 = G__36174;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33800__auto__ = function(state_36066){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33800__auto____1.call(this,state_36066);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33800__auto____0;
cljs$core$async$mix_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33800__auto____1;
return cljs$core$async$mix_$_state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto___36126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34085__auto__ = (function (){var statearr_36125 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_36125[(6)] = c__34082__auto___36126);

return statearr_36125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto___36126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5859__auto__ = (((p == null))?null:p);
var m__5860__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5860__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5860__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5860__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5859__auto__ = (((p == null))?null:p);
var m__5860__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5860__auto__.call(null,p,v,ch));
} else {
var m__5860__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5860__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36176 = arguments.length;
switch (G__36176) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5859__auto__ = (((p == null))?null:p);
var m__5860__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5860__auto__.call(null,p));
} else {
var m__5860__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5860__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5859__auto__ = (((p == null))?null:p);
var m__5860__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5860__auto__.call(null,p,v));
} else {
var m__5860__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5860__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__36180 = arguments.length;
switch (G__36180) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__5126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__5126__auto__,mults){
return (function (p1__36178_SHARP_){
if(cljs.core.truth_((p1__36178_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36178_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36178_SHARP_.call(null,topic)))){
return p1__36178_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36178_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__5126__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36181 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36182){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36182 = meta36182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36183,meta36182__$1){
var self__ = this;
var _36183__$1 = this;
return (new cljs.core.async.t_cljs$core$async36181(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36182__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36181.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36183){
var self__ = this;
var _36183__$1 = this;
return self__.meta36182;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36181.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36181.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36181.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36181.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36181.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36181.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36181.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36181.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36182","meta36182",-1243560380,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36181";

cljs.core.async.t_cljs$core$async36181.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async36181");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36181 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36181(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36182){
return (new cljs.core.async.t_cljs$core$async36181(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36182));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36181(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34082__auto___36301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto___36301,mults,ensure_mult,p){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto___36301,mults,ensure_mult,p){
return (function (state_36255){
var state_val_36256 = (state_36255[(1)]);
if((state_val_36256 === (7))){
var inst_36251 = (state_36255[(2)]);
var state_36255__$1 = state_36255;
var statearr_36257_36302 = state_36255__$1;
(statearr_36257_36302[(2)] = inst_36251);

(statearr_36257_36302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (20))){
var state_36255__$1 = state_36255;
var statearr_36258_36303 = state_36255__$1;
(statearr_36258_36303[(2)] = null);

(statearr_36258_36303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (1))){
var state_36255__$1 = state_36255;
var statearr_36259_36304 = state_36255__$1;
(statearr_36259_36304[(2)] = null);

(statearr_36259_36304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (24))){
var inst_36234 = (state_36255[(7)]);
var inst_36243 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36234);
var state_36255__$1 = state_36255;
var statearr_36260_36305 = state_36255__$1;
(statearr_36260_36305[(2)] = inst_36243);

(statearr_36260_36305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (4))){
var inst_36186 = (state_36255[(8)]);
var inst_36186__$1 = (state_36255[(2)]);
var inst_36187 = (inst_36186__$1 == null);
var state_36255__$1 = (function (){var statearr_36261 = state_36255;
(statearr_36261[(8)] = inst_36186__$1);

return statearr_36261;
})();
if(cljs.core.truth_(inst_36187)){
var statearr_36262_36306 = state_36255__$1;
(statearr_36262_36306[(1)] = (5));

} else {
var statearr_36263_36307 = state_36255__$1;
(statearr_36263_36307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (15))){
var inst_36228 = (state_36255[(2)]);
var state_36255__$1 = state_36255;
var statearr_36264_36308 = state_36255__$1;
(statearr_36264_36308[(2)] = inst_36228);

(statearr_36264_36308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (21))){
var inst_36248 = (state_36255[(2)]);
var state_36255__$1 = (function (){var statearr_36265 = state_36255;
(statearr_36265[(9)] = inst_36248);

return statearr_36265;
})();
var statearr_36266_36309 = state_36255__$1;
(statearr_36266_36309[(2)] = null);

(statearr_36266_36309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (13))){
var inst_36210 = (state_36255[(10)]);
var inst_36212 = cljs.core.chunked_seq_QMARK_(inst_36210);
var state_36255__$1 = state_36255;
if(inst_36212){
var statearr_36267_36310 = state_36255__$1;
(statearr_36267_36310[(1)] = (16));

} else {
var statearr_36268_36311 = state_36255__$1;
(statearr_36268_36311[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (22))){
var inst_36240 = (state_36255[(2)]);
var state_36255__$1 = state_36255;
if(cljs.core.truth_(inst_36240)){
var statearr_36269_36312 = state_36255__$1;
(statearr_36269_36312[(1)] = (23));

} else {
var statearr_36270_36313 = state_36255__$1;
(statearr_36270_36313[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (6))){
var inst_36234 = (state_36255[(7)]);
var inst_36186 = (state_36255[(8)]);
var inst_36236 = (state_36255[(11)]);
var inst_36234__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36186) : topic_fn.call(null,inst_36186));
var inst_36235 = cljs.core.deref(mults);
var inst_36236__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36235,inst_36234__$1);
var state_36255__$1 = (function (){var statearr_36271 = state_36255;
(statearr_36271[(7)] = inst_36234__$1);

(statearr_36271[(11)] = inst_36236__$1);

return statearr_36271;
})();
if(cljs.core.truth_(inst_36236__$1)){
var statearr_36272_36314 = state_36255__$1;
(statearr_36272_36314[(1)] = (19));

} else {
var statearr_36273_36315 = state_36255__$1;
(statearr_36273_36315[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (25))){
var inst_36245 = (state_36255[(2)]);
var state_36255__$1 = state_36255;
var statearr_36274_36316 = state_36255__$1;
(statearr_36274_36316[(2)] = inst_36245);

(statearr_36274_36316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (17))){
var inst_36210 = (state_36255[(10)]);
var inst_36219 = cljs.core.first(inst_36210);
var inst_36220 = cljs.core.async.muxch_STAR_(inst_36219);
var inst_36221 = cljs.core.async.close_BANG_(inst_36220);
var inst_36222 = cljs.core.next(inst_36210);
var inst_36196 = inst_36222;
var inst_36197 = null;
var inst_36198 = (0);
var inst_36199 = (0);
var state_36255__$1 = (function (){var statearr_36275 = state_36255;
(statearr_36275[(12)] = inst_36196);

(statearr_36275[(13)] = inst_36199);

(statearr_36275[(14)] = inst_36221);

(statearr_36275[(15)] = inst_36197);

(statearr_36275[(16)] = inst_36198);

return statearr_36275;
})();
var statearr_36276_36317 = state_36255__$1;
(statearr_36276_36317[(2)] = null);

(statearr_36276_36317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (3))){
var inst_36253 = (state_36255[(2)]);
var state_36255__$1 = state_36255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36255__$1,inst_36253);
} else {
if((state_val_36256 === (12))){
var inst_36230 = (state_36255[(2)]);
var state_36255__$1 = state_36255;
var statearr_36277_36318 = state_36255__$1;
(statearr_36277_36318[(2)] = inst_36230);

(statearr_36277_36318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (2))){
var state_36255__$1 = state_36255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36255__$1,(4),ch);
} else {
if((state_val_36256 === (23))){
var state_36255__$1 = state_36255;
var statearr_36278_36319 = state_36255__$1;
(statearr_36278_36319[(2)] = null);

(statearr_36278_36319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (19))){
var inst_36186 = (state_36255[(8)]);
var inst_36236 = (state_36255[(11)]);
var inst_36238 = cljs.core.async.muxch_STAR_(inst_36236);
var state_36255__$1 = state_36255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36255__$1,(22),inst_36238,inst_36186);
} else {
if((state_val_36256 === (11))){
var inst_36196 = (state_36255[(12)]);
var inst_36210 = (state_36255[(10)]);
var inst_36210__$1 = cljs.core.seq(inst_36196);
var state_36255__$1 = (function (){var statearr_36279 = state_36255;
(statearr_36279[(10)] = inst_36210__$1);

return statearr_36279;
})();
if(inst_36210__$1){
var statearr_36280_36320 = state_36255__$1;
(statearr_36280_36320[(1)] = (13));

} else {
var statearr_36281_36321 = state_36255__$1;
(statearr_36281_36321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (9))){
var inst_36232 = (state_36255[(2)]);
var state_36255__$1 = state_36255;
var statearr_36282_36322 = state_36255__$1;
(statearr_36282_36322[(2)] = inst_36232);

(statearr_36282_36322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (5))){
var inst_36193 = cljs.core.deref(mults);
var inst_36194 = cljs.core.vals(inst_36193);
var inst_36195 = cljs.core.seq(inst_36194);
var inst_36196 = inst_36195;
var inst_36197 = null;
var inst_36198 = (0);
var inst_36199 = (0);
var state_36255__$1 = (function (){var statearr_36283 = state_36255;
(statearr_36283[(12)] = inst_36196);

(statearr_36283[(13)] = inst_36199);

(statearr_36283[(15)] = inst_36197);

(statearr_36283[(16)] = inst_36198);

return statearr_36283;
})();
var statearr_36284_36323 = state_36255__$1;
(statearr_36284_36323[(2)] = null);

(statearr_36284_36323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (14))){
var state_36255__$1 = state_36255;
var statearr_36288_36324 = state_36255__$1;
(statearr_36288_36324[(2)] = null);

(statearr_36288_36324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (16))){
var inst_36210 = (state_36255[(10)]);
var inst_36214 = cljs.core.chunk_first(inst_36210);
var inst_36215 = cljs.core.chunk_rest(inst_36210);
var inst_36216 = cljs.core.count(inst_36214);
var inst_36196 = inst_36215;
var inst_36197 = inst_36214;
var inst_36198 = inst_36216;
var inst_36199 = (0);
var state_36255__$1 = (function (){var statearr_36289 = state_36255;
(statearr_36289[(12)] = inst_36196);

(statearr_36289[(13)] = inst_36199);

(statearr_36289[(15)] = inst_36197);

(statearr_36289[(16)] = inst_36198);

return statearr_36289;
})();
var statearr_36290_36325 = state_36255__$1;
(statearr_36290_36325[(2)] = null);

(statearr_36290_36325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (10))){
var inst_36196 = (state_36255[(12)]);
var inst_36199 = (state_36255[(13)]);
var inst_36197 = (state_36255[(15)]);
var inst_36198 = (state_36255[(16)]);
var inst_36204 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36197,inst_36199);
var inst_36205 = cljs.core.async.muxch_STAR_(inst_36204);
var inst_36206 = cljs.core.async.close_BANG_(inst_36205);
var inst_36207 = (inst_36199 + (1));
var tmp36285 = inst_36196;
var tmp36286 = inst_36197;
var tmp36287 = inst_36198;
var inst_36196__$1 = tmp36285;
var inst_36197__$1 = tmp36286;
var inst_36198__$1 = tmp36287;
var inst_36199__$1 = inst_36207;
var state_36255__$1 = (function (){var statearr_36291 = state_36255;
(statearr_36291[(12)] = inst_36196__$1);

(statearr_36291[(13)] = inst_36199__$1);

(statearr_36291[(17)] = inst_36206);

(statearr_36291[(15)] = inst_36197__$1);

(statearr_36291[(16)] = inst_36198__$1);

return statearr_36291;
})();
var statearr_36292_36326 = state_36255__$1;
(statearr_36292_36326[(2)] = null);

(statearr_36292_36326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (18))){
var inst_36225 = (state_36255[(2)]);
var state_36255__$1 = state_36255;
var statearr_36293_36327 = state_36255__$1;
(statearr_36293_36327[(2)] = inst_36225);

(statearr_36293_36327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (8))){
var inst_36199 = (state_36255[(13)]);
var inst_36198 = (state_36255[(16)]);
var inst_36201 = (inst_36199 < inst_36198);
var inst_36202 = inst_36201;
var state_36255__$1 = state_36255;
if(cljs.core.truth_(inst_36202)){
var statearr_36294_36328 = state_36255__$1;
(statearr_36294_36328[(1)] = (10));

} else {
var statearr_36295_36329 = state_36255__$1;
(statearr_36295_36329[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__34082__auto___36301,mults,ensure_mult,p))
;
return ((function (switch__33799__auto__,c__34082__auto___36301,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_36296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36296[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_36296[(1)] = (1));

return statearr_36296;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_36255){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_36255);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e36297){if((e36297 instanceof Object)){
var ex__33803__auto__ = e36297;
var statearr_36298_36330 = state_36255;
(statearr_36298_36330[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36297;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36331 = state_36255;
state_36255 = G__36331;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_36255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_36255);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto___36301,mults,ensure_mult,p))
})();
var state__34085__auto__ = (function (){var statearr_36299 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_36299[(6)] = c__34082__auto___36301);

return statearr_36299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto___36301,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__36333 = arguments.length;
switch (G__36333) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36336 = arguments.length;
switch (G__36336) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__36339 = arguments.length;
switch (G__36339) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__34082__auto___36406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto___36406,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto___36406,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36378){
var state_val_36379 = (state_36378[(1)]);
if((state_val_36379 === (7))){
var state_36378__$1 = state_36378;
var statearr_36380_36407 = state_36378__$1;
(statearr_36380_36407[(2)] = null);

(statearr_36380_36407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (1))){
var state_36378__$1 = state_36378;
var statearr_36381_36408 = state_36378__$1;
(statearr_36381_36408[(2)] = null);

(statearr_36381_36408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (4))){
var inst_36342 = (state_36378[(7)]);
var inst_36344 = (inst_36342 < cnt);
var state_36378__$1 = state_36378;
if(cljs.core.truth_(inst_36344)){
var statearr_36382_36409 = state_36378__$1;
(statearr_36382_36409[(1)] = (6));

} else {
var statearr_36383_36410 = state_36378__$1;
(statearr_36383_36410[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (15))){
var inst_36374 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
var statearr_36384_36411 = state_36378__$1;
(statearr_36384_36411[(2)] = inst_36374);

(statearr_36384_36411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (13))){
var inst_36367 = cljs.core.async.close_BANG_(out);
var state_36378__$1 = state_36378;
var statearr_36385_36412 = state_36378__$1;
(statearr_36385_36412[(2)] = inst_36367);

(statearr_36385_36412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (6))){
var state_36378__$1 = state_36378;
var statearr_36386_36413 = state_36378__$1;
(statearr_36386_36413[(2)] = null);

(statearr_36386_36413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (3))){
var inst_36376 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36378__$1,inst_36376);
} else {
if((state_val_36379 === (12))){
var inst_36364 = (state_36378[(8)]);
var inst_36364__$1 = (state_36378[(2)]);
var inst_36365 = cljs.core.some(cljs.core.nil_QMARK_,inst_36364__$1);
var state_36378__$1 = (function (){var statearr_36387 = state_36378;
(statearr_36387[(8)] = inst_36364__$1);

return statearr_36387;
})();
if(cljs.core.truth_(inst_36365)){
var statearr_36388_36414 = state_36378__$1;
(statearr_36388_36414[(1)] = (13));

} else {
var statearr_36389_36415 = state_36378__$1;
(statearr_36389_36415[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (2))){
var inst_36341 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36342 = (0);
var state_36378__$1 = (function (){var statearr_36390 = state_36378;
(statearr_36390[(9)] = inst_36341);

(statearr_36390[(7)] = inst_36342);

return statearr_36390;
})();
var statearr_36391_36416 = state_36378__$1;
(statearr_36391_36416[(2)] = null);

(statearr_36391_36416[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (11))){
var inst_36342 = (state_36378[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36378,(10),Object,null,(9));
var inst_36351 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36342) : chs__$1.call(null,inst_36342));
var inst_36352 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36342) : done.call(null,inst_36342));
var inst_36353 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36351,inst_36352);
var state_36378__$1 = state_36378;
var statearr_36392_36417 = state_36378__$1;
(statearr_36392_36417[(2)] = inst_36353);


cljs.core.async.impl.ioc_helpers.process_exception(state_36378__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (9))){
var inst_36342 = (state_36378[(7)]);
var inst_36355 = (state_36378[(2)]);
var inst_36356 = (inst_36342 + (1));
var inst_36342__$1 = inst_36356;
var state_36378__$1 = (function (){var statearr_36393 = state_36378;
(statearr_36393[(7)] = inst_36342__$1);

(statearr_36393[(10)] = inst_36355);

return statearr_36393;
})();
var statearr_36394_36418 = state_36378__$1;
(statearr_36394_36418[(2)] = null);

(statearr_36394_36418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (5))){
var inst_36362 = (state_36378[(2)]);
var state_36378__$1 = (function (){var statearr_36395 = state_36378;
(statearr_36395[(11)] = inst_36362);

return statearr_36395;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36378__$1,(12),dchan);
} else {
if((state_val_36379 === (14))){
var inst_36364 = (state_36378[(8)]);
var inst_36369 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36364);
var state_36378__$1 = state_36378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36378__$1,(16),out,inst_36369);
} else {
if((state_val_36379 === (16))){
var inst_36371 = (state_36378[(2)]);
var state_36378__$1 = (function (){var statearr_36396 = state_36378;
(statearr_36396[(12)] = inst_36371);

return statearr_36396;
})();
var statearr_36397_36419 = state_36378__$1;
(statearr_36397_36419[(2)] = null);

(statearr_36397_36419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (10))){
var inst_36346 = (state_36378[(2)]);
var inst_36347 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36378__$1 = (function (){var statearr_36398 = state_36378;
(statearr_36398[(13)] = inst_36346);

return statearr_36398;
})();
var statearr_36399_36420 = state_36378__$1;
(statearr_36399_36420[(2)] = inst_36347);


cljs.core.async.impl.ioc_helpers.process_exception(state_36378__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (8))){
var inst_36360 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
var statearr_36400_36421 = state_36378__$1;
(statearr_36400_36421[(2)] = inst_36360);

(statearr_36400_36421[(1)] = (5));


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
});})(c__34082__auto___36406,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33799__auto__,c__34082__auto___36406,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_36401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36401[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_36401[(1)] = (1));

return statearr_36401;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_36378){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_36378);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e36402){if((e36402 instanceof Object)){
var ex__33803__auto__ = e36402;
var statearr_36403_36422 = state_36378;
(statearr_36403_36422[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36402;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36423 = state_36378;
state_36378 = G__36423;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_36378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_36378);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto___36406,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34085__auto__ = (function (){var statearr_36404 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_36404[(6)] = c__34082__auto___36406);

return statearr_36404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto___36406,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36426 = arguments.length;
switch (G__36426) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34082__auto___36480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto___36480,out){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto___36480,out){
return (function (state_36458){
var state_val_36459 = (state_36458[(1)]);
if((state_val_36459 === (7))){
var inst_36438 = (state_36458[(7)]);
var inst_36437 = (state_36458[(8)]);
var inst_36437__$1 = (state_36458[(2)]);
var inst_36438__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36437__$1,(0),null);
var inst_36439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36437__$1,(1),null);
var inst_36440 = (inst_36438__$1 == null);
var state_36458__$1 = (function (){var statearr_36460 = state_36458;
(statearr_36460[(7)] = inst_36438__$1);

(statearr_36460[(9)] = inst_36439);

(statearr_36460[(8)] = inst_36437__$1);

return statearr_36460;
})();
if(cljs.core.truth_(inst_36440)){
var statearr_36461_36481 = state_36458__$1;
(statearr_36461_36481[(1)] = (8));

} else {
var statearr_36462_36482 = state_36458__$1;
(statearr_36462_36482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (1))){
var inst_36427 = cljs.core.vec(chs);
var inst_36428 = inst_36427;
var state_36458__$1 = (function (){var statearr_36463 = state_36458;
(statearr_36463[(10)] = inst_36428);

return statearr_36463;
})();
var statearr_36464_36483 = state_36458__$1;
(statearr_36464_36483[(2)] = null);

(statearr_36464_36483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (4))){
var inst_36428 = (state_36458[(10)]);
var state_36458__$1 = state_36458;
return cljs.core.async.ioc_alts_BANG_(state_36458__$1,(7),inst_36428);
} else {
if((state_val_36459 === (6))){
var inst_36454 = (state_36458[(2)]);
var state_36458__$1 = state_36458;
var statearr_36465_36484 = state_36458__$1;
(statearr_36465_36484[(2)] = inst_36454);

(statearr_36465_36484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (3))){
var inst_36456 = (state_36458[(2)]);
var state_36458__$1 = state_36458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36458__$1,inst_36456);
} else {
if((state_val_36459 === (2))){
var inst_36428 = (state_36458[(10)]);
var inst_36430 = cljs.core.count(inst_36428);
var inst_36431 = (inst_36430 > (0));
var state_36458__$1 = state_36458;
if(cljs.core.truth_(inst_36431)){
var statearr_36467_36485 = state_36458__$1;
(statearr_36467_36485[(1)] = (4));

} else {
var statearr_36468_36486 = state_36458__$1;
(statearr_36468_36486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (11))){
var inst_36428 = (state_36458[(10)]);
var inst_36447 = (state_36458[(2)]);
var tmp36466 = inst_36428;
var inst_36428__$1 = tmp36466;
var state_36458__$1 = (function (){var statearr_36469 = state_36458;
(statearr_36469[(11)] = inst_36447);

(statearr_36469[(10)] = inst_36428__$1);

return statearr_36469;
})();
var statearr_36470_36487 = state_36458__$1;
(statearr_36470_36487[(2)] = null);

(statearr_36470_36487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (9))){
var inst_36438 = (state_36458[(7)]);
var state_36458__$1 = state_36458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36458__$1,(11),out,inst_36438);
} else {
if((state_val_36459 === (5))){
var inst_36452 = cljs.core.async.close_BANG_(out);
var state_36458__$1 = state_36458;
var statearr_36471_36488 = state_36458__$1;
(statearr_36471_36488[(2)] = inst_36452);

(statearr_36471_36488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (10))){
var inst_36450 = (state_36458[(2)]);
var state_36458__$1 = state_36458;
var statearr_36472_36489 = state_36458__$1;
(statearr_36472_36489[(2)] = inst_36450);

(statearr_36472_36489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (8))){
var inst_36438 = (state_36458[(7)]);
var inst_36439 = (state_36458[(9)]);
var inst_36437 = (state_36458[(8)]);
var inst_36428 = (state_36458[(10)]);
var inst_36442 = (function (){var cs = inst_36428;
var vec__36433 = inst_36437;
var v = inst_36438;
var c = inst_36439;
return ((function (cs,vec__36433,v,c,inst_36438,inst_36439,inst_36437,inst_36428,state_val_36459,c__34082__auto___36480,out){
return (function (p1__36424_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36424_SHARP_);
});
;})(cs,vec__36433,v,c,inst_36438,inst_36439,inst_36437,inst_36428,state_val_36459,c__34082__auto___36480,out))
})();
var inst_36443 = cljs.core.filterv(inst_36442,inst_36428);
var inst_36428__$1 = inst_36443;
var state_36458__$1 = (function (){var statearr_36473 = state_36458;
(statearr_36473[(10)] = inst_36428__$1);

return statearr_36473;
})();
var statearr_36474_36490 = state_36458__$1;
(statearr_36474_36490[(2)] = null);

(statearr_36474_36490[(1)] = (2));


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
});})(c__34082__auto___36480,out))
;
return ((function (switch__33799__auto__,c__34082__auto___36480,out){
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_36475 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36475[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_36475[(1)] = (1));

return statearr_36475;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_36458){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_36458);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e36476){if((e36476 instanceof Object)){
var ex__33803__auto__ = e36476;
var statearr_36477_36491 = state_36458;
(statearr_36477_36491[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36476;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36492 = state_36458;
state_36458 = G__36492;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_36458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_36458);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto___36480,out))
})();
var state__34085__auto__ = (function (){var statearr_36478 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_36478[(6)] = c__34082__auto___36480);

return statearr_36478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto___36480,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36494 = arguments.length;
switch (G__36494) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34082__auto___36539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto___36539,out){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto___36539,out){
return (function (state_36518){
var state_val_36519 = (state_36518[(1)]);
if((state_val_36519 === (7))){
var inst_36500 = (state_36518[(7)]);
var inst_36500__$1 = (state_36518[(2)]);
var inst_36501 = (inst_36500__$1 == null);
var inst_36502 = cljs.core.not(inst_36501);
var state_36518__$1 = (function (){var statearr_36520 = state_36518;
(statearr_36520[(7)] = inst_36500__$1);

return statearr_36520;
})();
if(inst_36502){
var statearr_36521_36540 = state_36518__$1;
(statearr_36521_36540[(1)] = (8));

} else {
var statearr_36522_36541 = state_36518__$1;
(statearr_36522_36541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36519 === (1))){
var inst_36495 = (0);
var state_36518__$1 = (function (){var statearr_36523 = state_36518;
(statearr_36523[(8)] = inst_36495);

return statearr_36523;
})();
var statearr_36524_36542 = state_36518__$1;
(statearr_36524_36542[(2)] = null);

(statearr_36524_36542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36519 === (4))){
var state_36518__$1 = state_36518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36518__$1,(7),ch);
} else {
if((state_val_36519 === (6))){
var inst_36513 = (state_36518[(2)]);
var state_36518__$1 = state_36518;
var statearr_36525_36543 = state_36518__$1;
(statearr_36525_36543[(2)] = inst_36513);

(statearr_36525_36543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36519 === (3))){
var inst_36515 = (state_36518[(2)]);
var inst_36516 = cljs.core.async.close_BANG_(out);
var state_36518__$1 = (function (){var statearr_36526 = state_36518;
(statearr_36526[(9)] = inst_36515);

return statearr_36526;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36518__$1,inst_36516);
} else {
if((state_val_36519 === (2))){
var inst_36495 = (state_36518[(8)]);
var inst_36497 = (inst_36495 < n);
var state_36518__$1 = state_36518;
if(cljs.core.truth_(inst_36497)){
var statearr_36527_36544 = state_36518__$1;
(statearr_36527_36544[(1)] = (4));

} else {
var statearr_36528_36545 = state_36518__$1;
(statearr_36528_36545[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36519 === (11))){
var inst_36495 = (state_36518[(8)]);
var inst_36505 = (state_36518[(2)]);
var inst_36506 = (inst_36495 + (1));
var inst_36495__$1 = inst_36506;
var state_36518__$1 = (function (){var statearr_36529 = state_36518;
(statearr_36529[(10)] = inst_36505);

(statearr_36529[(8)] = inst_36495__$1);

return statearr_36529;
})();
var statearr_36530_36546 = state_36518__$1;
(statearr_36530_36546[(2)] = null);

(statearr_36530_36546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36519 === (9))){
var state_36518__$1 = state_36518;
var statearr_36531_36547 = state_36518__$1;
(statearr_36531_36547[(2)] = null);

(statearr_36531_36547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36519 === (5))){
var state_36518__$1 = state_36518;
var statearr_36532_36548 = state_36518__$1;
(statearr_36532_36548[(2)] = null);

(statearr_36532_36548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36519 === (10))){
var inst_36510 = (state_36518[(2)]);
var state_36518__$1 = state_36518;
var statearr_36533_36549 = state_36518__$1;
(statearr_36533_36549[(2)] = inst_36510);

(statearr_36533_36549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36519 === (8))){
var inst_36500 = (state_36518[(7)]);
var state_36518__$1 = state_36518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36518__$1,(11),out,inst_36500);
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
});})(c__34082__auto___36539,out))
;
return ((function (switch__33799__auto__,c__34082__auto___36539,out){
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_36534 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36534[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_36534[(1)] = (1));

return statearr_36534;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_36518){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_36518);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e36535){if((e36535 instanceof Object)){
var ex__33803__auto__ = e36535;
var statearr_36536_36550 = state_36518;
(statearr_36536_36550[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36551 = state_36518;
state_36518 = G__36551;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_36518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_36518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto___36539,out))
})();
var state__34085__auto__ = (function (){var statearr_36537 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_36537[(6)] = c__34082__auto___36539);

return statearr_36537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto___36539,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36553 = (function (f,ch,meta36554){
this.f = f;
this.ch = ch;
this.meta36554 = meta36554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36555,meta36554__$1){
var self__ = this;
var _36555__$1 = this;
return (new cljs.core.async.t_cljs$core$async36553(self__.f,self__.ch,meta36554__$1));
});

cljs.core.async.t_cljs$core$async36553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36555){
var self__ = this;
var _36555__$1 = this;
return self__.meta36554;
});

cljs.core.async.t_cljs$core$async36553.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async36553.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async36553.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36556 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36556 = (function (f,ch,meta36554,_,fn1,meta36557){
this.f = f;
this.ch = ch;
this.meta36554 = meta36554;
this._ = _;
this.fn1 = fn1;
this.meta36557 = meta36557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36558,meta36557__$1){
var self__ = this;
var _36558__$1 = this;
return (new cljs.core.async.t_cljs$core$async36556(self__.f,self__.ch,self__.meta36554,self__._,self__.fn1,meta36557__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36556.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36558){
var self__ = this;
var _36558__$1 = this;
return self__.meta36557;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36556.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36556.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36552_SHARP_){
var G__36559 = (((p1__36552_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36552_SHARP_) : self__.f.call(null,p1__36552_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36559) : f1.call(null,G__36559));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36556.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36554","meta36554",-1780842951,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36553","cljs.core.async/t_cljs$core$async36553",-757762523,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36557","meta36557",-1175684153,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36556.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36556";

cljs.core.async.t_cljs$core$async36556.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async36556");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36556 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36556(f__$1,ch__$1,meta36554__$1,___$2,fn1__$1,meta36557){
return (new cljs.core.async.t_cljs$core$async36556(f__$1,ch__$1,meta36554__$1,___$2,fn1__$1,meta36557));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36556(self__.f,self__.ch,self__.meta36554,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5114__auto__ = ret;
if(cljs.core.truth_(and__5114__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__5114__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36560 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36560) : self__.f.call(null,G__36560));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36553.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36554","meta36554",-1780842951,null)], null);
});

cljs.core.async.t_cljs$core$async36553.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36553";

cljs.core.async.t_cljs$core$async36553.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async36553");
});

cljs.core.async.__GT_t_cljs$core$async36553 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36553(f__$1,ch__$1,meta36554){
return (new cljs.core.async.t_cljs$core$async36553(f__$1,ch__$1,meta36554));
});

}

return (new cljs.core.async.t_cljs$core$async36553(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36561 = (function (f,ch,meta36562){
this.f = f;
this.ch = ch;
this.meta36562 = meta36562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36563,meta36562__$1){
var self__ = this;
var _36563__$1 = this;
return (new cljs.core.async.t_cljs$core$async36561(self__.f,self__.ch,meta36562__$1));
});

cljs.core.async.t_cljs$core$async36561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36563){
var self__ = this;
var _36563__$1 = this;
return self__.meta36562;
});

cljs.core.async.t_cljs$core$async36561.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async36561.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36561.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async36561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36562","meta36562",1241249231,null)], null);
});

cljs.core.async.t_cljs$core$async36561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36561";

cljs.core.async.t_cljs$core$async36561.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async36561");
});

cljs.core.async.__GT_t_cljs$core$async36561 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36561(f__$1,ch__$1,meta36562){
return (new cljs.core.async.t_cljs$core$async36561(f__$1,ch__$1,meta36562));
});

}

return (new cljs.core.async.t_cljs$core$async36561(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36564 = (function (p,ch,meta36565){
this.p = p;
this.ch = ch;
this.meta36565 = meta36565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36566,meta36565__$1){
var self__ = this;
var _36566__$1 = this;
return (new cljs.core.async.t_cljs$core$async36564(self__.p,self__.ch,meta36565__$1));
});

cljs.core.async.t_cljs$core$async36564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36566){
var self__ = this;
var _36566__$1 = this;
return self__.meta36565;
});

cljs.core.async.t_cljs$core$async36564.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36564.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async36564.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async36564.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36564.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36564.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36564.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36565","meta36565",1681974969,null)], null);
});

cljs.core.async.t_cljs$core$async36564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36564";

cljs.core.async.t_cljs$core$async36564.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async36564");
});

cljs.core.async.__GT_t_cljs$core$async36564 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36564(p__$1,ch__$1,meta36565){
return (new cljs.core.async.t_cljs$core$async36564(p__$1,ch__$1,meta36565));
});

}

return (new cljs.core.async.t_cljs$core$async36564(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36568 = arguments.length;
switch (G__36568) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34082__auto___36608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto___36608,out){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto___36608,out){
return (function (state_36589){
var state_val_36590 = (state_36589[(1)]);
if((state_val_36590 === (7))){
var inst_36585 = (state_36589[(2)]);
var state_36589__$1 = state_36589;
var statearr_36591_36609 = state_36589__$1;
(statearr_36591_36609[(2)] = inst_36585);

(statearr_36591_36609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (1))){
var state_36589__$1 = state_36589;
var statearr_36592_36610 = state_36589__$1;
(statearr_36592_36610[(2)] = null);

(statearr_36592_36610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (4))){
var inst_36571 = (state_36589[(7)]);
var inst_36571__$1 = (state_36589[(2)]);
var inst_36572 = (inst_36571__$1 == null);
var state_36589__$1 = (function (){var statearr_36593 = state_36589;
(statearr_36593[(7)] = inst_36571__$1);

return statearr_36593;
})();
if(cljs.core.truth_(inst_36572)){
var statearr_36594_36611 = state_36589__$1;
(statearr_36594_36611[(1)] = (5));

} else {
var statearr_36595_36612 = state_36589__$1;
(statearr_36595_36612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (6))){
var inst_36571 = (state_36589[(7)]);
var inst_36576 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36571) : p.call(null,inst_36571));
var state_36589__$1 = state_36589;
if(cljs.core.truth_(inst_36576)){
var statearr_36596_36613 = state_36589__$1;
(statearr_36596_36613[(1)] = (8));

} else {
var statearr_36597_36614 = state_36589__$1;
(statearr_36597_36614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (3))){
var inst_36587 = (state_36589[(2)]);
var state_36589__$1 = state_36589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36589__$1,inst_36587);
} else {
if((state_val_36590 === (2))){
var state_36589__$1 = state_36589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36589__$1,(4),ch);
} else {
if((state_val_36590 === (11))){
var inst_36579 = (state_36589[(2)]);
var state_36589__$1 = state_36589;
var statearr_36598_36615 = state_36589__$1;
(statearr_36598_36615[(2)] = inst_36579);

(statearr_36598_36615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (9))){
var state_36589__$1 = state_36589;
var statearr_36599_36616 = state_36589__$1;
(statearr_36599_36616[(2)] = null);

(statearr_36599_36616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (5))){
var inst_36574 = cljs.core.async.close_BANG_(out);
var state_36589__$1 = state_36589;
var statearr_36600_36617 = state_36589__$1;
(statearr_36600_36617[(2)] = inst_36574);

(statearr_36600_36617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (10))){
var inst_36582 = (state_36589[(2)]);
var state_36589__$1 = (function (){var statearr_36601 = state_36589;
(statearr_36601[(8)] = inst_36582);

return statearr_36601;
})();
var statearr_36602_36618 = state_36589__$1;
(statearr_36602_36618[(2)] = null);

(statearr_36602_36618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (8))){
var inst_36571 = (state_36589[(7)]);
var state_36589__$1 = state_36589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36589__$1,(11),out,inst_36571);
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
});})(c__34082__auto___36608,out))
;
return ((function (switch__33799__auto__,c__34082__auto___36608,out){
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_36603 = [null,null,null,null,null,null,null,null,null];
(statearr_36603[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_36603[(1)] = (1));

return statearr_36603;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_36589){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_36589);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e36604){if((e36604 instanceof Object)){
var ex__33803__auto__ = e36604;
var statearr_36605_36619 = state_36589;
(statearr_36605_36619[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36604;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36620 = state_36589;
state_36589 = G__36620;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_36589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_36589);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto___36608,out))
})();
var state__34085__auto__ = (function (){var statearr_36606 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_36606[(6)] = c__34082__auto___36608);

return statearr_36606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto___36608,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36622 = arguments.length;
switch (G__36622) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto__){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto__){
return (function (state_36685){
var state_val_36686 = (state_36685[(1)]);
if((state_val_36686 === (7))){
var inst_36681 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
var statearr_36687_36725 = state_36685__$1;
(statearr_36687_36725[(2)] = inst_36681);

(statearr_36687_36725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (20))){
var inst_36651 = (state_36685[(7)]);
var inst_36662 = (state_36685[(2)]);
var inst_36663 = cljs.core.next(inst_36651);
var inst_36637 = inst_36663;
var inst_36638 = null;
var inst_36639 = (0);
var inst_36640 = (0);
var state_36685__$1 = (function (){var statearr_36688 = state_36685;
(statearr_36688[(8)] = inst_36639);

(statearr_36688[(9)] = inst_36640);

(statearr_36688[(10)] = inst_36662);

(statearr_36688[(11)] = inst_36638);

(statearr_36688[(12)] = inst_36637);

return statearr_36688;
})();
var statearr_36689_36726 = state_36685__$1;
(statearr_36689_36726[(2)] = null);

(statearr_36689_36726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (1))){
var state_36685__$1 = state_36685;
var statearr_36690_36727 = state_36685__$1;
(statearr_36690_36727[(2)] = null);

(statearr_36690_36727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (4))){
var inst_36626 = (state_36685[(13)]);
var inst_36626__$1 = (state_36685[(2)]);
var inst_36627 = (inst_36626__$1 == null);
var state_36685__$1 = (function (){var statearr_36691 = state_36685;
(statearr_36691[(13)] = inst_36626__$1);

return statearr_36691;
})();
if(cljs.core.truth_(inst_36627)){
var statearr_36692_36728 = state_36685__$1;
(statearr_36692_36728[(1)] = (5));

} else {
var statearr_36693_36729 = state_36685__$1;
(statearr_36693_36729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (15))){
var state_36685__$1 = state_36685;
var statearr_36697_36730 = state_36685__$1;
(statearr_36697_36730[(2)] = null);

(statearr_36697_36730[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (21))){
var state_36685__$1 = state_36685;
var statearr_36698_36731 = state_36685__$1;
(statearr_36698_36731[(2)] = null);

(statearr_36698_36731[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (13))){
var inst_36639 = (state_36685[(8)]);
var inst_36640 = (state_36685[(9)]);
var inst_36638 = (state_36685[(11)]);
var inst_36637 = (state_36685[(12)]);
var inst_36647 = (state_36685[(2)]);
var inst_36648 = (inst_36640 + (1));
var tmp36694 = inst_36639;
var tmp36695 = inst_36638;
var tmp36696 = inst_36637;
var inst_36637__$1 = tmp36696;
var inst_36638__$1 = tmp36695;
var inst_36639__$1 = tmp36694;
var inst_36640__$1 = inst_36648;
var state_36685__$1 = (function (){var statearr_36699 = state_36685;
(statearr_36699[(8)] = inst_36639__$1);

(statearr_36699[(9)] = inst_36640__$1);

(statearr_36699[(14)] = inst_36647);

(statearr_36699[(11)] = inst_36638__$1);

(statearr_36699[(12)] = inst_36637__$1);

return statearr_36699;
})();
var statearr_36700_36732 = state_36685__$1;
(statearr_36700_36732[(2)] = null);

(statearr_36700_36732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (22))){
var state_36685__$1 = state_36685;
var statearr_36701_36733 = state_36685__$1;
(statearr_36701_36733[(2)] = null);

(statearr_36701_36733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (6))){
var inst_36626 = (state_36685[(13)]);
var inst_36635 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36626) : f.call(null,inst_36626));
var inst_36636 = cljs.core.seq(inst_36635);
var inst_36637 = inst_36636;
var inst_36638 = null;
var inst_36639 = (0);
var inst_36640 = (0);
var state_36685__$1 = (function (){var statearr_36702 = state_36685;
(statearr_36702[(8)] = inst_36639);

(statearr_36702[(9)] = inst_36640);

(statearr_36702[(11)] = inst_36638);

(statearr_36702[(12)] = inst_36637);

return statearr_36702;
})();
var statearr_36703_36734 = state_36685__$1;
(statearr_36703_36734[(2)] = null);

(statearr_36703_36734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (17))){
var inst_36651 = (state_36685[(7)]);
var inst_36655 = cljs.core.chunk_first(inst_36651);
var inst_36656 = cljs.core.chunk_rest(inst_36651);
var inst_36657 = cljs.core.count(inst_36655);
var inst_36637 = inst_36656;
var inst_36638 = inst_36655;
var inst_36639 = inst_36657;
var inst_36640 = (0);
var state_36685__$1 = (function (){var statearr_36704 = state_36685;
(statearr_36704[(8)] = inst_36639);

(statearr_36704[(9)] = inst_36640);

(statearr_36704[(11)] = inst_36638);

(statearr_36704[(12)] = inst_36637);

return statearr_36704;
})();
var statearr_36705_36735 = state_36685__$1;
(statearr_36705_36735[(2)] = null);

(statearr_36705_36735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (3))){
var inst_36683 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36685__$1,inst_36683);
} else {
if((state_val_36686 === (12))){
var inst_36671 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
var statearr_36706_36736 = state_36685__$1;
(statearr_36706_36736[(2)] = inst_36671);

(statearr_36706_36736[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (2))){
var state_36685__$1 = state_36685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36685__$1,(4),in$);
} else {
if((state_val_36686 === (23))){
var inst_36679 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
var statearr_36707_36737 = state_36685__$1;
(statearr_36707_36737[(2)] = inst_36679);

(statearr_36707_36737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (19))){
var inst_36666 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
var statearr_36708_36738 = state_36685__$1;
(statearr_36708_36738[(2)] = inst_36666);

(statearr_36708_36738[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (11))){
var inst_36651 = (state_36685[(7)]);
var inst_36637 = (state_36685[(12)]);
var inst_36651__$1 = cljs.core.seq(inst_36637);
var state_36685__$1 = (function (){var statearr_36709 = state_36685;
(statearr_36709[(7)] = inst_36651__$1);

return statearr_36709;
})();
if(inst_36651__$1){
var statearr_36710_36739 = state_36685__$1;
(statearr_36710_36739[(1)] = (14));

} else {
var statearr_36711_36740 = state_36685__$1;
(statearr_36711_36740[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (9))){
var inst_36673 = (state_36685[(2)]);
var inst_36674 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36685__$1 = (function (){var statearr_36712 = state_36685;
(statearr_36712[(15)] = inst_36673);

return statearr_36712;
})();
if(cljs.core.truth_(inst_36674)){
var statearr_36713_36741 = state_36685__$1;
(statearr_36713_36741[(1)] = (21));

} else {
var statearr_36714_36742 = state_36685__$1;
(statearr_36714_36742[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (5))){
var inst_36629 = cljs.core.async.close_BANG_(out);
var state_36685__$1 = state_36685;
var statearr_36715_36743 = state_36685__$1;
(statearr_36715_36743[(2)] = inst_36629);

(statearr_36715_36743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (14))){
var inst_36651 = (state_36685[(7)]);
var inst_36653 = cljs.core.chunked_seq_QMARK_(inst_36651);
var state_36685__$1 = state_36685;
if(inst_36653){
var statearr_36716_36744 = state_36685__$1;
(statearr_36716_36744[(1)] = (17));

} else {
var statearr_36717_36745 = state_36685__$1;
(statearr_36717_36745[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (16))){
var inst_36669 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
var statearr_36718_36746 = state_36685__$1;
(statearr_36718_36746[(2)] = inst_36669);

(statearr_36718_36746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (10))){
var inst_36640 = (state_36685[(9)]);
var inst_36638 = (state_36685[(11)]);
var inst_36645 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36638,inst_36640);
var state_36685__$1 = state_36685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36685__$1,(13),out,inst_36645);
} else {
if((state_val_36686 === (18))){
var inst_36651 = (state_36685[(7)]);
var inst_36660 = cljs.core.first(inst_36651);
var state_36685__$1 = state_36685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36685__$1,(20),out,inst_36660);
} else {
if((state_val_36686 === (8))){
var inst_36639 = (state_36685[(8)]);
var inst_36640 = (state_36685[(9)]);
var inst_36642 = (inst_36640 < inst_36639);
var inst_36643 = inst_36642;
var state_36685__$1 = state_36685;
if(cljs.core.truth_(inst_36643)){
var statearr_36719_36747 = state_36685__$1;
(statearr_36719_36747[(1)] = (10));

} else {
var statearr_36720_36748 = state_36685__$1;
(statearr_36720_36748[(1)] = (11));

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
}
}
}
}
}
}
});})(c__34082__auto__))
;
return ((function (switch__33799__auto__,c__34082__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33800__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33800__auto____0 = (function (){
var statearr_36721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36721[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33800__auto__);

(statearr_36721[(1)] = (1));

return statearr_36721;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33800__auto____1 = (function (state_36685){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_36685);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e36722){if((e36722 instanceof Object)){
var ex__33803__auto__ = e36722;
var statearr_36723_36749 = state_36685;
(statearr_36723_36749[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36750 = state_36685;
state_36685 = G__36750;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33800__auto__ = function(state_36685){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33800__auto____1.call(this,state_36685);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33800__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33800__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto__))
})();
var state__34085__auto__ = (function (){var statearr_36724 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_36724[(6)] = c__34082__auto__);

return statearr_36724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto__))
);

return c__34082__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36752 = arguments.length;
switch (G__36752) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36755 = arguments.length;
switch (G__36755) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36758 = arguments.length;
switch (G__36758) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34082__auto___36805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto___36805,out){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto___36805,out){
return (function (state_36782){
var state_val_36783 = (state_36782[(1)]);
if((state_val_36783 === (7))){
var inst_36777 = (state_36782[(2)]);
var state_36782__$1 = state_36782;
var statearr_36784_36806 = state_36782__$1;
(statearr_36784_36806[(2)] = inst_36777);

(statearr_36784_36806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (1))){
var inst_36759 = null;
var state_36782__$1 = (function (){var statearr_36785 = state_36782;
(statearr_36785[(7)] = inst_36759);

return statearr_36785;
})();
var statearr_36786_36807 = state_36782__$1;
(statearr_36786_36807[(2)] = null);

(statearr_36786_36807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (4))){
var inst_36762 = (state_36782[(8)]);
var inst_36762__$1 = (state_36782[(2)]);
var inst_36763 = (inst_36762__$1 == null);
var inst_36764 = cljs.core.not(inst_36763);
var state_36782__$1 = (function (){var statearr_36787 = state_36782;
(statearr_36787[(8)] = inst_36762__$1);

return statearr_36787;
})();
if(inst_36764){
var statearr_36788_36808 = state_36782__$1;
(statearr_36788_36808[(1)] = (5));

} else {
var statearr_36789_36809 = state_36782__$1;
(statearr_36789_36809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (6))){
var state_36782__$1 = state_36782;
var statearr_36790_36810 = state_36782__$1;
(statearr_36790_36810[(2)] = null);

(statearr_36790_36810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (3))){
var inst_36779 = (state_36782[(2)]);
var inst_36780 = cljs.core.async.close_BANG_(out);
var state_36782__$1 = (function (){var statearr_36791 = state_36782;
(statearr_36791[(9)] = inst_36779);

return statearr_36791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36782__$1,inst_36780);
} else {
if((state_val_36783 === (2))){
var state_36782__$1 = state_36782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36782__$1,(4),ch);
} else {
if((state_val_36783 === (11))){
var inst_36762 = (state_36782[(8)]);
var inst_36771 = (state_36782[(2)]);
var inst_36759 = inst_36762;
var state_36782__$1 = (function (){var statearr_36792 = state_36782;
(statearr_36792[(7)] = inst_36759);

(statearr_36792[(10)] = inst_36771);

return statearr_36792;
})();
var statearr_36793_36811 = state_36782__$1;
(statearr_36793_36811[(2)] = null);

(statearr_36793_36811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (9))){
var inst_36762 = (state_36782[(8)]);
var state_36782__$1 = state_36782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36782__$1,(11),out,inst_36762);
} else {
if((state_val_36783 === (5))){
var inst_36759 = (state_36782[(7)]);
var inst_36762 = (state_36782[(8)]);
var inst_36766 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36762,inst_36759);
var state_36782__$1 = state_36782;
if(inst_36766){
var statearr_36795_36812 = state_36782__$1;
(statearr_36795_36812[(1)] = (8));

} else {
var statearr_36796_36813 = state_36782__$1;
(statearr_36796_36813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (10))){
var inst_36774 = (state_36782[(2)]);
var state_36782__$1 = state_36782;
var statearr_36797_36814 = state_36782__$1;
(statearr_36797_36814[(2)] = inst_36774);

(statearr_36797_36814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (8))){
var inst_36759 = (state_36782[(7)]);
var tmp36794 = inst_36759;
var inst_36759__$1 = tmp36794;
var state_36782__$1 = (function (){var statearr_36798 = state_36782;
(statearr_36798[(7)] = inst_36759__$1);

return statearr_36798;
})();
var statearr_36799_36815 = state_36782__$1;
(statearr_36799_36815[(2)] = null);

(statearr_36799_36815[(1)] = (2));


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
});})(c__34082__auto___36805,out))
;
return ((function (switch__33799__auto__,c__34082__auto___36805,out){
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_36800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36800[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_36800[(1)] = (1));

return statearr_36800;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_36782){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_36782);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e36801){if((e36801 instanceof Object)){
var ex__33803__auto__ = e36801;
var statearr_36802_36816 = state_36782;
(statearr_36802_36816[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36801;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36817 = state_36782;
state_36782 = G__36817;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_36782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_36782);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto___36805,out))
})();
var state__34085__auto__ = (function (){var statearr_36803 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_36803[(6)] = c__34082__auto___36805);

return statearr_36803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto___36805,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36819 = arguments.length;
switch (G__36819) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34082__auto___36885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto___36885,out){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto___36885,out){
return (function (state_36857){
var state_val_36858 = (state_36857[(1)]);
if((state_val_36858 === (7))){
var inst_36853 = (state_36857[(2)]);
var state_36857__$1 = state_36857;
var statearr_36859_36886 = state_36857__$1;
(statearr_36859_36886[(2)] = inst_36853);

(statearr_36859_36886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (1))){
var inst_36820 = (new Array(n));
var inst_36821 = inst_36820;
var inst_36822 = (0);
var state_36857__$1 = (function (){var statearr_36860 = state_36857;
(statearr_36860[(7)] = inst_36821);

(statearr_36860[(8)] = inst_36822);

return statearr_36860;
})();
var statearr_36861_36887 = state_36857__$1;
(statearr_36861_36887[(2)] = null);

(statearr_36861_36887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (4))){
var inst_36825 = (state_36857[(9)]);
var inst_36825__$1 = (state_36857[(2)]);
var inst_36826 = (inst_36825__$1 == null);
var inst_36827 = cljs.core.not(inst_36826);
var state_36857__$1 = (function (){var statearr_36862 = state_36857;
(statearr_36862[(9)] = inst_36825__$1);

return statearr_36862;
})();
if(inst_36827){
var statearr_36863_36888 = state_36857__$1;
(statearr_36863_36888[(1)] = (5));

} else {
var statearr_36864_36889 = state_36857__$1;
(statearr_36864_36889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (15))){
var inst_36847 = (state_36857[(2)]);
var state_36857__$1 = state_36857;
var statearr_36865_36890 = state_36857__$1;
(statearr_36865_36890[(2)] = inst_36847);

(statearr_36865_36890[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (13))){
var state_36857__$1 = state_36857;
var statearr_36866_36891 = state_36857__$1;
(statearr_36866_36891[(2)] = null);

(statearr_36866_36891[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (6))){
var inst_36822 = (state_36857[(8)]);
var inst_36843 = (inst_36822 > (0));
var state_36857__$1 = state_36857;
if(cljs.core.truth_(inst_36843)){
var statearr_36867_36892 = state_36857__$1;
(statearr_36867_36892[(1)] = (12));

} else {
var statearr_36868_36893 = state_36857__$1;
(statearr_36868_36893[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (3))){
var inst_36855 = (state_36857[(2)]);
var state_36857__$1 = state_36857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36857__$1,inst_36855);
} else {
if((state_val_36858 === (12))){
var inst_36821 = (state_36857[(7)]);
var inst_36845 = cljs.core.vec(inst_36821);
var state_36857__$1 = state_36857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36857__$1,(15),out,inst_36845);
} else {
if((state_val_36858 === (2))){
var state_36857__$1 = state_36857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36857__$1,(4),ch);
} else {
if((state_val_36858 === (11))){
var inst_36837 = (state_36857[(2)]);
var inst_36838 = (new Array(n));
var inst_36821 = inst_36838;
var inst_36822 = (0);
var state_36857__$1 = (function (){var statearr_36869 = state_36857;
(statearr_36869[(7)] = inst_36821);

(statearr_36869[(10)] = inst_36837);

(statearr_36869[(8)] = inst_36822);

return statearr_36869;
})();
var statearr_36870_36894 = state_36857__$1;
(statearr_36870_36894[(2)] = null);

(statearr_36870_36894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (9))){
var inst_36821 = (state_36857[(7)]);
var inst_36835 = cljs.core.vec(inst_36821);
var state_36857__$1 = state_36857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36857__$1,(11),out,inst_36835);
} else {
if((state_val_36858 === (5))){
var inst_36821 = (state_36857[(7)]);
var inst_36825 = (state_36857[(9)]);
var inst_36822 = (state_36857[(8)]);
var inst_36830 = (state_36857[(11)]);
var inst_36829 = (inst_36821[inst_36822] = inst_36825);
var inst_36830__$1 = (inst_36822 + (1));
var inst_36831 = (inst_36830__$1 < n);
var state_36857__$1 = (function (){var statearr_36871 = state_36857;
(statearr_36871[(12)] = inst_36829);

(statearr_36871[(11)] = inst_36830__$1);

return statearr_36871;
})();
if(cljs.core.truth_(inst_36831)){
var statearr_36872_36895 = state_36857__$1;
(statearr_36872_36895[(1)] = (8));

} else {
var statearr_36873_36896 = state_36857__$1;
(statearr_36873_36896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (14))){
var inst_36850 = (state_36857[(2)]);
var inst_36851 = cljs.core.async.close_BANG_(out);
var state_36857__$1 = (function (){var statearr_36875 = state_36857;
(statearr_36875[(13)] = inst_36850);

return statearr_36875;
})();
var statearr_36876_36897 = state_36857__$1;
(statearr_36876_36897[(2)] = inst_36851);

(statearr_36876_36897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (10))){
var inst_36841 = (state_36857[(2)]);
var state_36857__$1 = state_36857;
var statearr_36877_36898 = state_36857__$1;
(statearr_36877_36898[(2)] = inst_36841);

(statearr_36877_36898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36858 === (8))){
var inst_36821 = (state_36857[(7)]);
var inst_36830 = (state_36857[(11)]);
var tmp36874 = inst_36821;
var inst_36821__$1 = tmp36874;
var inst_36822 = inst_36830;
var state_36857__$1 = (function (){var statearr_36878 = state_36857;
(statearr_36878[(7)] = inst_36821__$1);

(statearr_36878[(8)] = inst_36822);

return statearr_36878;
})();
var statearr_36879_36899 = state_36857__$1;
(statearr_36879_36899[(2)] = null);

(statearr_36879_36899[(1)] = (2));


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
});})(c__34082__auto___36885,out))
;
return ((function (switch__33799__auto__,c__34082__auto___36885,out){
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_36880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36880[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_36880[(1)] = (1));

return statearr_36880;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_36857){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_36857);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e36881){if((e36881 instanceof Object)){
var ex__33803__auto__ = e36881;
var statearr_36882_36900 = state_36857;
(statearr_36882_36900[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36881;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36901 = state_36857;
state_36857 = G__36901;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_36857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_36857);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto___36885,out))
})();
var state__34085__auto__ = (function (){var statearr_36883 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_36883[(6)] = c__34082__auto___36885);

return statearr_36883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto___36885,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36903 = arguments.length;
switch (G__36903) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34082__auto___36973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34082__auto___36973,out){
return (function (){
var f__34084__auto__ = (function (){var switch__33799__auto__ = ((function (c__34082__auto___36973,out){
return (function (state_36945){
var state_val_36946 = (state_36945[(1)]);
if((state_val_36946 === (7))){
var inst_36941 = (state_36945[(2)]);
var state_36945__$1 = state_36945;
var statearr_36947_36974 = state_36945__$1;
(statearr_36947_36974[(2)] = inst_36941);

(statearr_36947_36974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36946 === (1))){
var inst_36904 = [];
var inst_36905 = inst_36904;
var inst_36906 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36945__$1 = (function (){var statearr_36948 = state_36945;
(statearr_36948[(7)] = inst_36905);

(statearr_36948[(8)] = inst_36906);

return statearr_36948;
})();
var statearr_36949_36975 = state_36945__$1;
(statearr_36949_36975[(2)] = null);

(statearr_36949_36975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36946 === (4))){
var inst_36909 = (state_36945[(9)]);
var inst_36909__$1 = (state_36945[(2)]);
var inst_36910 = (inst_36909__$1 == null);
var inst_36911 = cljs.core.not(inst_36910);
var state_36945__$1 = (function (){var statearr_36950 = state_36945;
(statearr_36950[(9)] = inst_36909__$1);

return statearr_36950;
})();
if(inst_36911){
var statearr_36951_36976 = state_36945__$1;
(statearr_36951_36976[(1)] = (5));

} else {
var statearr_36952_36977 = state_36945__$1;
(statearr_36952_36977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36946 === (15))){
var inst_36935 = (state_36945[(2)]);
var state_36945__$1 = state_36945;
var statearr_36953_36978 = state_36945__$1;
(statearr_36953_36978[(2)] = inst_36935);

(statearr_36953_36978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36946 === (13))){
var state_36945__$1 = state_36945;
var statearr_36954_36979 = state_36945__$1;
(statearr_36954_36979[(2)] = null);

(statearr_36954_36979[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36946 === (6))){
var inst_36905 = (state_36945[(7)]);
var inst_36930 = inst_36905.length;
var inst_36931 = (inst_36930 > (0));
var state_36945__$1 = state_36945;
if(cljs.core.truth_(inst_36931)){
var statearr_36955_36980 = state_36945__$1;
(statearr_36955_36980[(1)] = (12));

} else {
var statearr_36956_36981 = state_36945__$1;
(statearr_36956_36981[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36946 === (3))){
var inst_36943 = (state_36945[(2)]);
var state_36945__$1 = state_36945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36945__$1,inst_36943);
} else {
if((state_val_36946 === (12))){
var inst_36905 = (state_36945[(7)]);
var inst_36933 = cljs.core.vec(inst_36905);
var state_36945__$1 = state_36945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36945__$1,(15),out,inst_36933);
} else {
if((state_val_36946 === (2))){
var state_36945__$1 = state_36945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36945__$1,(4),ch);
} else {
if((state_val_36946 === (11))){
var inst_36909 = (state_36945[(9)]);
var inst_36913 = (state_36945[(10)]);
var inst_36923 = (state_36945[(2)]);
var inst_36924 = [];
var inst_36925 = inst_36924.push(inst_36909);
var inst_36905 = inst_36924;
var inst_36906 = inst_36913;
var state_36945__$1 = (function (){var statearr_36957 = state_36945;
(statearr_36957[(7)] = inst_36905);

(statearr_36957[(11)] = inst_36925);

(statearr_36957[(8)] = inst_36906);

(statearr_36957[(12)] = inst_36923);

return statearr_36957;
})();
var statearr_36958_36982 = state_36945__$1;
(statearr_36958_36982[(2)] = null);

(statearr_36958_36982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36946 === (9))){
var inst_36905 = (state_36945[(7)]);
var inst_36921 = cljs.core.vec(inst_36905);
var state_36945__$1 = state_36945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36945__$1,(11),out,inst_36921);
} else {
if((state_val_36946 === (5))){
var inst_36909 = (state_36945[(9)]);
var inst_36913 = (state_36945[(10)]);
var inst_36906 = (state_36945[(8)]);
var inst_36913__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36909) : f.call(null,inst_36909));
var inst_36914 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36913__$1,inst_36906);
var inst_36915 = cljs.core.keyword_identical_QMARK_(inst_36906,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36916 = (inst_36914) || (inst_36915);
var state_36945__$1 = (function (){var statearr_36959 = state_36945;
(statearr_36959[(10)] = inst_36913__$1);

return statearr_36959;
})();
if(cljs.core.truth_(inst_36916)){
var statearr_36960_36983 = state_36945__$1;
(statearr_36960_36983[(1)] = (8));

} else {
var statearr_36961_36984 = state_36945__$1;
(statearr_36961_36984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36946 === (14))){
var inst_36938 = (state_36945[(2)]);
var inst_36939 = cljs.core.async.close_BANG_(out);
var state_36945__$1 = (function (){var statearr_36963 = state_36945;
(statearr_36963[(13)] = inst_36938);

return statearr_36963;
})();
var statearr_36964_36985 = state_36945__$1;
(statearr_36964_36985[(2)] = inst_36939);

(statearr_36964_36985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36946 === (10))){
var inst_36928 = (state_36945[(2)]);
var state_36945__$1 = state_36945;
var statearr_36965_36986 = state_36945__$1;
(statearr_36965_36986[(2)] = inst_36928);

(statearr_36965_36986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36946 === (8))){
var inst_36909 = (state_36945[(9)]);
var inst_36905 = (state_36945[(7)]);
var inst_36913 = (state_36945[(10)]);
var inst_36918 = inst_36905.push(inst_36909);
var tmp36962 = inst_36905;
var inst_36905__$1 = tmp36962;
var inst_36906 = inst_36913;
var state_36945__$1 = (function (){var statearr_36966 = state_36945;
(statearr_36966[(7)] = inst_36905__$1);

(statearr_36966[(8)] = inst_36906);

(statearr_36966[(14)] = inst_36918);

return statearr_36966;
})();
var statearr_36967_36987 = state_36945__$1;
(statearr_36967_36987[(2)] = null);

(statearr_36967_36987[(1)] = (2));


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
});})(c__34082__auto___36973,out))
;
return ((function (switch__33799__auto__,c__34082__auto___36973,out){
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_36968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36968[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_36968[(1)] = (1));

return statearr_36968;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_36945){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__(state_36945);
if(cljs.core.keyword_identical_QMARK_(result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e36969){if((e36969 instanceof Object)){
var ex__33803__auto__ = e36969;
var statearr_36970_36988 = state_36945;
(statearr_36970_36988[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36969;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36989 = state_36945;
state_36945 = G__36989;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_36945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_36945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
;})(switch__33799__auto__,c__34082__auto___36973,out))
})();
var state__34085__auto__ = (function (){var statearr_36971 = (f__34084__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34084__auto__.cljs$core$IFn$_invoke$arity$0() : f__34084__auto__.call(null));
(statearr_36971[(6)] = c__34082__auto___36973);

return statearr_36971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34085__auto__);
});})(c__34082__auto___36973,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
