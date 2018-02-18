goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35774){
var map__35776 = p__35774;
var map__35776__$1 = ((((!((map__35776 == null)))?((((map__35776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35776):map__35776);
var m = map__35776__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35776__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35776__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35781_35817 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35782_35818 = null;
var count__35783_35819 = (0);
var i__35784_35820 = (0);
while(true){
if((i__35784_35820 < count__35783_35819)){
var f_35821 = chunk__35782_35818.cljs$core$IIndexed$_nth$arity$2(null,i__35784_35820);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35821], 0));

var G__35822 = seq__35781_35817;
var G__35823 = chunk__35782_35818;
var G__35824 = count__35783_35819;
var G__35825 = (i__35784_35820 + (1));
seq__35781_35817 = G__35822;
chunk__35782_35818 = G__35823;
count__35783_35819 = G__35824;
i__35784_35820 = G__35825;
continue;
} else {
var temp__5457__auto___35826 = cljs.core.seq(seq__35781_35817);
if(temp__5457__auto___35826){
var seq__35781_35827__$1 = temp__5457__auto___35826;
if(cljs.core.chunked_seq_QMARK_(seq__35781_35827__$1)){
var c__6057__auto___35828 = cljs.core.chunk_first(seq__35781_35827__$1);
var G__35830 = cljs.core.chunk_rest(seq__35781_35827__$1);
var G__35831 = c__6057__auto___35828;
var G__35832 = cljs.core.count(c__6057__auto___35828);
var G__35833 = (0);
seq__35781_35817 = G__35830;
chunk__35782_35818 = G__35831;
count__35783_35819 = G__35832;
i__35784_35820 = G__35833;
continue;
} else {
var f_35834 = cljs.core.first(seq__35781_35827__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35834], 0));

var G__35835 = cljs.core.next(seq__35781_35827__$1);
var G__35836 = null;
var G__35837 = (0);
var G__35838 = (0);
seq__35781_35817 = G__35835;
chunk__35782_35818 = G__35836;
count__35783_35819 = G__35837;
i__35784_35820 = G__35838;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35839 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35839], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35839)))?cljs.core.second(arglists_35839):arglists_35839)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35790_35842 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35791_35843 = null;
var count__35792_35844 = (0);
var i__35793_35845 = (0);
while(true){
if((i__35793_35845 < count__35792_35844)){
var vec__35794_35847 = chunk__35791_35843.cljs$core$IIndexed$_nth$arity$2(null,i__35793_35845);
var name_35848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35794_35847,(0),null);
var map__35797_35849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35794_35847,(1),null);
var map__35797_35850__$1 = ((((!((map__35797_35849 == null)))?((((map__35797_35849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35797_35849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35797_35849):map__35797_35849);
var doc_35851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35797_35850__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35797_35850__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35848], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35852], 0));

if(cljs.core.truth_(doc_35851)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35851], 0));
} else {
}

var G__35854 = seq__35790_35842;
var G__35855 = chunk__35791_35843;
var G__35856 = count__35792_35844;
var G__35857 = (i__35793_35845 + (1));
seq__35790_35842 = G__35854;
chunk__35791_35843 = G__35855;
count__35792_35844 = G__35856;
i__35793_35845 = G__35857;
continue;
} else {
var temp__5457__auto___35859 = cljs.core.seq(seq__35790_35842);
if(temp__5457__auto___35859){
var seq__35790_35860__$1 = temp__5457__auto___35859;
if(cljs.core.chunked_seq_QMARK_(seq__35790_35860__$1)){
var c__6057__auto___35861 = cljs.core.chunk_first(seq__35790_35860__$1);
var G__35863 = cljs.core.chunk_rest(seq__35790_35860__$1);
var G__35864 = c__6057__auto___35861;
var G__35865 = cljs.core.count(c__6057__auto___35861);
var G__35866 = (0);
seq__35790_35842 = G__35863;
chunk__35791_35843 = G__35864;
count__35792_35844 = G__35865;
i__35793_35845 = G__35866;
continue;
} else {
var vec__35802_35867 = cljs.core.first(seq__35790_35860__$1);
var name_35868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35802_35867,(0),null);
var map__35805_35869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35802_35867,(1),null);
var map__35805_35870__$1 = ((((!((map__35805_35869 == null)))?((((map__35805_35869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35805_35869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35805_35869):map__35805_35869);
var doc_35871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35805_35870__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35805_35870__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35868], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35872], 0));

if(cljs.core.truth_(doc_35871)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35871], 0));
} else {
}

var G__35873 = cljs.core.next(seq__35790_35860__$1);
var G__35874 = null;
var G__35875 = (0);
var G__35876 = (0);
seq__35790_35842 = G__35873;
chunk__35791_35843 = G__35874;
count__35792_35844 = G__35875;
i__35793_35845 = G__35876;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35809 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35810 = null;
var count__35811 = (0);
var i__35812 = (0);
while(true){
if((i__35812 < count__35811)){
var role = chunk__35810.cljs$core$IIndexed$_nth$arity$2(null,i__35812);
var temp__5457__auto___35879__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___35879__$1)){
var spec_35880 = temp__5457__auto___35879__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_35880)], 0));
} else {
}

var G__35881 = seq__35809;
var G__35882 = chunk__35810;
var G__35883 = count__35811;
var G__35884 = (i__35812 + (1));
seq__35809 = G__35881;
chunk__35810 = G__35882;
count__35811 = G__35883;
i__35812 = G__35884;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__35809);
if(temp__5457__auto____$1){
var seq__35809__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35809__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__35809__$1);
var G__35887 = cljs.core.chunk_rest(seq__35809__$1);
var G__35888 = c__6057__auto__;
var G__35889 = cljs.core.count(c__6057__auto__);
var G__35890 = (0);
seq__35809 = G__35887;
chunk__35810 = G__35888;
count__35811 = G__35889;
i__35812 = G__35890;
continue;
} else {
var role = cljs.core.first(seq__35809__$1);
var temp__5457__auto___35891__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___35891__$2)){
var spec_35892 = temp__5457__auto___35891__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_35892)], 0));
} else {
}

var G__35893 = cljs.core.next(seq__35809__$1);
var G__35894 = null;
var G__35895 = (0);
var G__35896 = (0);
seq__35809 = G__35893;
chunk__35810 = G__35894;
count__35811 = G__35895;
i__35812 = G__35896;
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
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
