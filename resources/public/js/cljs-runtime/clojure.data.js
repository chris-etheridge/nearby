goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__34443){
var vec__34445 = p__34443;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34445,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34445,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__34470 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34470,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34470,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34470,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__34492 = arguments.length;
switch (G__34492) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__5478__auto__ = cljs.core.count(a);
var y__5479__auto__ = cljs.core.count(b);
return ((x__5478__auto__ > y__5479__auto__) ? x__5478__auto__ : y__5479__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__5859__auto__ = (((x == null))?null:x);
var m__5860__auto__ = (clojure.data.equality_partition[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5860__auto__.call(null,x));
} else {
var m__5860__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__5860__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null)))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__5859__auto__ = (((a == null))?null:a);
var m__5860__auto__ = (clojure.data.diff_similar[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__5860__auto__.call(null,a,b));
} else {
var m__5860__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__5860__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__34627_34686 = clojure.data.equality_partition;
var G__34628_34687 = "null";
var G__34629_34688 = ((function (G__34627_34686,G__34628_34687){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34627_34686,G__34628_34687))
;
goog.object.set(G__34627_34686,G__34628_34687,G__34629_34688);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__34634_34689 = clojure.data.equality_partition;
var G__34635_34690 = "string";
var G__34636_34691 = ((function (G__34634_34689,G__34635_34690){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34634_34689,G__34635_34690))
;
goog.object.set(G__34634_34689,G__34635_34690,G__34636_34691);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__34641_34692 = clojure.data.equality_partition;
var G__34642_34693 = "number";
var G__34643_34694 = ((function (G__34641_34692,G__34642_34693){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34641_34692,G__34642_34693))
;
goog.object.set(G__34641_34692,G__34642_34693,G__34643_34694);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__34650_34695 = clojure.data.equality_partition;
var G__34651_34696 = "array";
var G__34652_34697 = ((function (G__34650_34695,G__34651_34696){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__34650_34695,G__34651_34696))
;
goog.object.set(G__34650_34695,G__34651_34696,G__34652_34697);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__34654_34699 = clojure.data.equality_partition;
var G__34655_34700 = "function";
var G__34656_34701 = ((function (G__34654_34699,G__34655_34700){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34654_34699,G__34655_34700))
;
goog.object.set(G__34654_34699,G__34655_34700,G__34656_34701);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__34663_34704 = clojure.data.equality_partition;
var G__34664_34705 = "boolean";
var G__34665_34706 = ((function (G__34663_34704,G__34664_34705){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34663_34704,G__34664_34705))
;
goog.object.set(G__34663_34704,G__34664_34705,G__34665_34706);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__34673_34710 = clojure.data.equality_partition;
var G__34674_34711 = "_";
var G__34675_34712 = ((function (G__34673_34710,G__34674_34711){
return (function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__34673_34710,G__34674_34711))
;
goog.object.set(G__34673_34710,G__34674_34711,G__34675_34712);
goog.object.set(clojure.data.Diff,"null",true);

var G__34727_34790 = clojure.data.diff_similar;
var G__34728_34791 = "null";
var G__34729_34792 = ((function (G__34727_34790,G__34728_34791){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34727_34790,G__34728_34791))
;
goog.object.set(G__34727_34790,G__34728_34791,G__34729_34792);

goog.object.set(clojure.data.Diff,"string",true);

var G__34730_34793 = clojure.data.diff_similar;
var G__34731_34794 = "string";
var G__34732_34795 = ((function (G__34730_34793,G__34731_34794){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34730_34793,G__34731_34794))
;
goog.object.set(G__34730_34793,G__34731_34794,G__34732_34795);

goog.object.set(clojure.data.Diff,"number",true);

var G__34736_34797 = clojure.data.diff_similar;
var G__34737_34798 = "number";
var G__34738_34799 = ((function (G__34736_34797,G__34737_34798){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34736_34797,G__34737_34798))
;
goog.object.set(G__34736_34797,G__34737_34798,G__34738_34799);

goog.object.set(clojure.data.Diff,"array",true);

var G__34743_34803 = clojure.data.diff_similar;
var G__34744_34804 = "array";
var G__34745_34805 = ((function (G__34743_34803,G__34744_34804){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__34743_34803,G__34744_34804))
;
goog.object.set(G__34743_34803,G__34744_34804,G__34745_34805);

goog.object.set(clojure.data.Diff,"function",true);

var G__34761_34807 = clojure.data.diff_similar;
var G__34762_34808 = "function";
var G__34763_34809 = ((function (G__34761_34807,G__34762_34808){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34761_34807,G__34762_34808))
;
goog.object.set(G__34761_34807,G__34762_34808,G__34763_34809);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__34770_34810 = clojure.data.diff_similar;
var G__34771_34811 = "boolean";
var G__34772_34812 = ((function (G__34770_34810,G__34771_34811){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34770_34810,G__34771_34811))
;
goog.object.set(G__34770_34810,G__34771_34811,G__34772_34812);

goog.object.set(clojure.data.Diff,"_",true);

var G__34779_34814 = clojure.data.diff_similar;
var G__34780_34815 = "_";
var G__34781_34816 = ((function (G__34779_34814,G__34780_34815){
return (function (a,b){
var fexpr__34787 = (function (){var G__34788 = clojure.data.equality_partition(a);
var G__34788__$1 = (((G__34788 instanceof cljs.core.Keyword))?G__34788.fqn:null);
switch (G__34788__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34788__$1)].join('')));

}
})();
return (fexpr__34787.cljs$core$IFn$_invoke$arity$2 ? fexpr__34787.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__34787.call(null,a,b));
});})(G__34779_34814,G__34780_34815))
;
goog.object.set(G__34779_34814,G__34780_34815,G__34781_34816);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
