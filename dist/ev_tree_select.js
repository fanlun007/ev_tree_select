import { getCurrentScope as kl, onScopeDispose as Ol, unref as g, getCurrentInstance as Ie, onMounted as Pe, nextTick as J, watch as z, ref as P, openBlock as O, createElementBlock as M, createElementVNode as q, warn as Tl, computed as k, inject as ae, toRef as jt, onUnmounted as Nl, isRef as mn, onBeforeUnmount as It, onBeforeMount as $l, provide as Ee, defineComponent as ee, mergeProps as Kt, renderSlot as oe, useAttrs as Il, useSlots as _o, shallowRef as zt, onUpdated as Lo, withDirectives as be, createCommentVNode as j, Fragment as Ue, normalizeClass as _, createBlock as W, withCtx as U, resolveDynamicComponent as Ze, withModifiers as fe, createVNode as pe, toDisplayString as ye, normalizeStyle as Ce, vShow as ht, Transition as $n, reactive as ft, cloneVNode as Pl, Text as Al, Comment as _l, toRefs as Wt, resolveComponent as ue, Teleport as Ll, readonly as Dl, onDeactivated as xl, toRaw as yn, vModelCheckbox as Rn, createTextVNode as ma, toHandlers as Bl, triggerRef as cn, resolveDirective as Ml, renderList as Fn, withKeys as We, vModelText as Kl, createSlots as zl, h as jn } from "vue";
var Rl = typeof global == "object" && global && global.Object === Object && global;
const ya = Rl;
var Fl = typeof self == "object" && self && self.Object === Object && self, jl = ya || Fl || Function("return this")();
const rt = jl;
var Hl = rt.Symbol;
const nt = Hl;
var ba = Object.prototype, Vl = ba.hasOwnProperty, Wl = ba.toString, fn = nt ? nt.toStringTag : void 0;
function ql(e) {
  var t = Vl.call(e, fn), n = e[fn];
  try {
    e[fn] = void 0;
    var o = !0;
  } catch {
  }
  var r = Wl.call(e);
  return o && (t ? e[fn] = n : delete e[fn]), r;
}
var Ul = Object.prototype, Gl = Ul.toString;
function Yl(e) {
  return Gl.call(e);
}
var Ql = "[object Null]", Xl = "[object Undefined]", sr = nt ? nt.toStringTag : void 0;
function un(e) {
  return e == null ? e === void 0 ? Xl : Ql : sr && sr in Object(e) ? ql(e) : Yl(e);
}
function tn(e) {
  return e != null && typeof e == "object";
}
var Jl = "[object Symbol]";
function qn(e) {
  return typeof e == "symbol" || tn(e) && un(e) == Jl;
}
function wa(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var Zl = Array.isArray;
const vt = Zl;
var ei = 1 / 0, ur = nt ? nt.prototype : void 0, dr = ur ? ur.toString : void 0;
function Ca(e) {
  if (typeof e == "string")
    return e;
  if (vt(e))
    return wa(e, Ca) + "";
  if (qn(e))
    return dr ? dr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ei ? "-0" : t;
}
var ti = /\s/;
function ni(e) {
  for (var t = e.length; t-- && ti.test(e.charAt(t)); )
    ;
  return t;
}
var oi = /^\s+/;
function ri(e) {
  return e && e.slice(0, ni(e) + 1).replace(oi, "");
}
function Ht(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var cr = 0 / 0, ai = /^[-+]0x[0-9a-f]+$/i, li = /^0b[01]+$/i, ii = /^0o[0-7]+$/i, si = parseInt;
function fr(e) {
  if (typeof e == "number")
    return e;
  if (qn(e))
    return cr;
  if (Ht(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ht(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ri(e);
  var n = li.test(e);
  return n || ii.test(e) ? si(e.slice(2), n ? 2 : 8) : ai.test(e) ? cr : +e;
}
function ui(e) {
  return e;
}
var di = "[object AsyncFunction]", ci = "[object Function]", fi = "[object GeneratorFunction]", pi = "[object Proxy]";
function Ea(e) {
  if (!Ht(e))
    return !1;
  var t = un(e);
  return t == ci || t == fi || t == di || t == pi;
}
var hi = rt["__core-js_shared__"];
const oo = hi;
var pr = function() {
  var e = /[^.]+$/.exec(oo && oo.keys && oo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function vi(e) {
  return !!pr && pr in e;
}
var gi = Function.prototype, mi = gi.toString;
function qt(e) {
  if (e != null) {
    try {
      return mi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var yi = /[\\^$.*+?()[\]{}|]/g, bi = /^\[object .+?Constructor\]$/, wi = Function.prototype, Ci = Object.prototype, Ei = wi.toString, Si = Ci.hasOwnProperty, ki = RegExp(
  "^" + Ei.call(Si).replace(yi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Oi(e) {
  if (!Ht(e) || vi(e))
    return !1;
  var t = Ea(e) ? ki : bi;
  return t.test(qt(e));
}
function Ti(e, t) {
  return e == null ? void 0 : e[t];
}
function Ut(e, t) {
  var n = Ti(e, t);
  return Oi(n) ? n : void 0;
}
var Ni = Ut(rt, "WeakMap");
const vo = Ni;
function $i(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var Ii = 800, Pi = 16, Ai = Date.now;
function _i(e) {
  var t = 0, n = 0;
  return function() {
    var o = Ai(), r = Pi - (o - n);
    if (n = o, r > 0) {
      if (++t >= Ii)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Li(e) {
  return function() {
    return e;
  };
}
var Di = function() {
  try {
    var e = Ut(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Hn = Di;
var xi = Hn ? function(e, t) {
  return Hn(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Li(t),
    writable: !0
  });
} : ui;
const Bi = xi;
var Mi = _i(Bi);
const Ki = Mi;
var zi = 9007199254740991, Ri = /^(?:0|[1-9]\d*)$/;
function Do(e, t) {
  var n = typeof e;
  return t = t == null ? zi : t, !!t && (n == "number" || n != "symbol" && Ri.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Fi(e, t, n) {
  t == "__proto__" && Hn ? Hn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function xo(e, t) {
  return e === t || e !== e && t !== t;
}
var ji = Object.prototype, Hi = ji.hasOwnProperty;
function Vi(e, t, n) {
  var o = e[t];
  (!(Hi.call(e, t) && xo(o, n)) || n === void 0 && !(t in e)) && Fi(e, t, n);
}
var hr = Math.max;
function Wi(e, t, n) {
  return t = hr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, a = hr(o.length - t, 0), l = Array(a); ++r < a; )
      l[r] = o[t + r];
    r = -1;
    for (var s = Array(t + 1); ++r < t; )
      s[r] = o[r];
    return s[t] = n(l), $i(e, this, s);
  };
}
var qi = 9007199254740991;
function Bo(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qi;
}
function Ui(e) {
  return e != null && Bo(e.length) && !Ea(e);
}
var Gi = Object.prototype;
function Yi(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Gi;
  return e === n;
}
function Qi(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Xi = "[object Arguments]";
function vr(e) {
  return tn(e) && un(e) == Xi;
}
var Sa = Object.prototype, Ji = Sa.hasOwnProperty, Zi = Sa.propertyIsEnumerable, es = vr(function() {
  return arguments;
}()) ? vr : function(e) {
  return tn(e) && Ji.call(e, "callee") && !Zi.call(e, "callee");
};
const Mo = es;
function ts() {
  return !1;
}
var ka = typeof exports == "object" && exports && !exports.nodeType && exports, gr = ka && typeof module == "object" && module && !module.nodeType && module, ns = gr && gr.exports === ka, mr = ns ? rt.Buffer : void 0, os = mr ? mr.isBuffer : void 0, rs = os || ts;
const go = rs;
var as = "[object Arguments]", ls = "[object Array]", is = "[object Boolean]", ss = "[object Date]", us = "[object Error]", ds = "[object Function]", cs = "[object Map]", fs = "[object Number]", ps = "[object Object]", hs = "[object RegExp]", vs = "[object Set]", gs = "[object String]", ms = "[object WeakMap]", ys = "[object ArrayBuffer]", bs = "[object DataView]", ws = "[object Float32Array]", Cs = "[object Float64Array]", Es = "[object Int8Array]", Ss = "[object Int16Array]", ks = "[object Int32Array]", Os = "[object Uint8Array]", Ts = "[object Uint8ClampedArray]", Ns = "[object Uint16Array]", $s = "[object Uint32Array]", re = {};
re[ws] = re[Cs] = re[Es] = re[Ss] = re[ks] = re[Os] = re[Ts] = re[Ns] = re[$s] = !0;
re[as] = re[ls] = re[ys] = re[is] = re[bs] = re[ss] = re[us] = re[ds] = re[cs] = re[fs] = re[ps] = re[hs] = re[vs] = re[gs] = re[ms] = !1;
function Is(e) {
  return tn(e) && Bo(e.length) && !!re[un(e)];
}
function Ps(e) {
  return function(t) {
    return e(t);
  };
}
var Oa = typeof exports == "object" && exports && !exports.nodeType && exports, hn = Oa && typeof module == "object" && module && !module.nodeType && module, As = hn && hn.exports === Oa, ro = As && ya.process, _s = function() {
  try {
    var e = hn && hn.require && hn.require("util").types;
    return e || ro && ro.binding && ro.binding("util");
  } catch {
  }
}();
const yr = _s;
var br = yr && yr.isTypedArray, Ls = br ? Ps(br) : Is;
const Ta = Ls;
var Ds = Object.prototype, xs = Ds.hasOwnProperty;
function Bs(e, t) {
  var n = vt(e), o = !n && Mo(e), r = !n && !o && go(e), a = !n && !o && !r && Ta(e), l = n || o || r || a, s = l ? Qi(e.length, String) : [], i = s.length;
  for (var c in e)
    (t || xs.call(e, c)) && !(l && (c == "length" || r && (c == "offset" || c == "parent") || a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Do(c, i))) && s.push(c);
  return s;
}
function Ms(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Ks = Ms(Object.keys, Object);
const zs = Ks;
var Rs = Object.prototype, Fs = Rs.hasOwnProperty;
function js(e) {
  if (!Yi(e))
    return zs(e);
  var t = [];
  for (var n in Object(e))
    Fs.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Na(e) {
  return Ui(e) ? Bs(e) : js(e);
}
var Hs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Vs = /^\w*$/;
function Ws(e, t) {
  if (vt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || qn(e) ? !0 : Vs.test(e) || !Hs.test(e) || t != null && e in Object(t);
}
var qs = Ut(Object, "create");
const bn = qs;
function Us() {
  this.__data__ = bn ? bn(null) : {}, this.size = 0;
}
function Gs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ys = "__lodash_hash_undefined__", Qs = Object.prototype, Xs = Qs.hasOwnProperty;
function Js(e) {
  var t = this.__data__;
  if (bn) {
    var n = t[e];
    return n === Ys ? void 0 : n;
  }
  return Xs.call(t, e) ? t[e] : void 0;
}
var Zs = Object.prototype, eu = Zs.hasOwnProperty;
function tu(e) {
  var t = this.__data__;
  return bn ? t[e] !== void 0 : eu.call(t, e);
}
var nu = "__lodash_hash_undefined__";
function ou(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = bn && t === void 0 ? nu : t, this;
}
function Vt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Vt.prototype.clear = Us;
Vt.prototype.delete = Gs;
Vt.prototype.get = Js;
Vt.prototype.has = tu;
Vt.prototype.set = ou;
function ru() {
  this.__data__ = [], this.size = 0;
}
function Un(e, t) {
  for (var n = e.length; n--; )
    if (xo(e[n][0], t))
      return n;
  return -1;
}
var au = Array.prototype, lu = au.splice;
function iu(e) {
  var t = this.__data__, n = Un(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : lu.call(t, n, 1), --this.size, !0;
}
function su(e) {
  var t = this.__data__, n = Un(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function uu(e) {
  return Un(this.__data__, e) > -1;
}
function du(e, t) {
  var n = this.__data__, o = Un(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function yt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
yt.prototype.clear = ru;
yt.prototype.delete = iu;
yt.prototype.get = su;
yt.prototype.has = uu;
yt.prototype.set = du;
var cu = Ut(rt, "Map");
const wn = cu;
function fu() {
  this.size = 0, this.__data__ = {
    hash: new Vt(),
    map: new (wn || yt)(),
    string: new Vt()
  };
}
function pu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Gn(e, t) {
  var n = e.__data__;
  return pu(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function hu(e) {
  var t = Gn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function vu(e) {
  return Gn(this, e).get(e);
}
function gu(e) {
  return Gn(this, e).has(e);
}
function mu(e, t) {
  var n = Gn(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function bt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
bt.prototype.clear = fu;
bt.prototype.delete = hu;
bt.prototype.get = vu;
bt.prototype.has = gu;
bt.prototype.set = mu;
var yu = "Expected a function";
function Ko(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(yu);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(r))
      return a.get(r);
    var l = e.apply(this, o);
    return n.cache = a.set(r, l) || a, l;
  };
  return n.cache = new (Ko.Cache || bt)(), n;
}
Ko.Cache = bt;
var bu = 500;
function wu(e) {
  var t = Ko(e, function(o) {
    return n.size === bu && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Cu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Eu = /\\(\\)?/g, Su = wu(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Cu, function(n, o, r, a) {
    t.push(r ? a.replace(Eu, "$1") : o || n);
  }), t;
});
const ku = Su;
function Ou(e) {
  return e == null ? "" : Ca(e);
}
function Yn(e, t) {
  return vt(e) ? e : Ws(e, t) ? [e] : ku(Ou(e));
}
var Tu = 1 / 0;
function zo(e) {
  if (typeof e == "string" || qn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Tu ? "-0" : t;
}
function $a(e, t) {
  t = Yn(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[zo(t[n++])];
  return n && n == o ? e : void 0;
}
function Ke(e, t, n) {
  var o = e == null ? void 0 : $a(e, t);
  return o === void 0 ? n : o;
}
function Ia(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var wr = nt ? nt.isConcatSpreadable : void 0;
function Nu(e) {
  return vt(e) || Mo(e) || !!(wr && e && e[wr]);
}
function Pa(e, t, n, o, r) {
  var a = -1, l = e.length;
  for (n || (n = Nu), r || (r = []); ++a < l; ) {
    var s = e[a];
    t > 0 && n(s) ? t > 1 ? Pa(s, t - 1, n, o, r) : Ia(r, s) : o || (r[r.length] = s);
  }
  return r;
}
function $u(e) {
  var t = e == null ? 0 : e.length;
  return t ? Pa(e, 1) : [];
}
function Iu(e) {
  return Ki(Wi(e, void 0, $u), e + "");
}
function Pu() {
  this.__data__ = new yt(), this.size = 0;
}
function Au(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function _u(e) {
  return this.__data__.get(e);
}
function Lu(e) {
  return this.__data__.has(e);
}
var Du = 200;
function xu(e, t) {
  var n = this.__data__;
  if (n instanceof yt) {
    var o = n.__data__;
    if (!wn || o.length < Du - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new bt(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function $t(e) {
  var t = this.__data__ = new yt(e);
  this.size = t.size;
}
$t.prototype.clear = Pu;
$t.prototype.delete = Au;
$t.prototype.get = _u;
$t.prototype.has = Lu;
$t.prototype.set = xu;
function Bu(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, a = []; ++n < o; ) {
    var l = e[n];
    t(l, n, e) && (a[r++] = l);
  }
  return a;
}
function Mu() {
  return [];
}
var Ku = Object.prototype, zu = Ku.propertyIsEnumerable, Cr = Object.getOwnPropertySymbols, Ru = Cr ? function(e) {
  return e == null ? [] : (e = Object(e), Bu(Cr(e), function(t) {
    return zu.call(e, t);
  }));
} : Mu;
const Fu = Ru;
function ju(e, t, n) {
  var o = t(e);
  return vt(e) ? o : Ia(o, n(e));
}
function Er(e) {
  return ju(e, Na, Fu);
}
var Hu = Ut(rt, "DataView");
const mo = Hu;
var Vu = Ut(rt, "Promise");
const yo = Vu;
var Wu = Ut(rt, "Set");
const bo = Wu;
var Sr = "[object Map]", qu = "[object Object]", kr = "[object Promise]", Or = "[object Set]", Tr = "[object WeakMap]", Nr = "[object DataView]", Uu = qt(mo), Gu = qt(wn), Yu = qt(yo), Qu = qt(bo), Xu = qt(vo), Mt = un;
(mo && Mt(new mo(new ArrayBuffer(1))) != Nr || wn && Mt(new wn()) != Sr || yo && Mt(yo.resolve()) != kr || bo && Mt(new bo()) != Or || vo && Mt(new vo()) != Tr) && (Mt = function(e) {
  var t = un(e), n = t == qu ? e.constructor : void 0, o = n ? qt(n) : "";
  if (o)
    switch (o) {
      case Uu:
        return Nr;
      case Gu:
        return Sr;
      case Yu:
        return kr;
      case Qu:
        return Or;
      case Xu:
        return Tr;
    }
  return t;
});
const $r = Mt;
var Ju = rt.Uint8Array;
const Ir = Ju;
var Zu = "__lodash_hash_undefined__";
function ed(e) {
  return this.__data__.set(e, Zu), this;
}
function td(e) {
  return this.__data__.has(e);
}
function Vn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new bt(); ++t < n; )
    this.add(e[t]);
}
Vn.prototype.add = Vn.prototype.push = ed;
Vn.prototype.has = td;
function nd(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function od(e, t) {
  return e.has(t);
}
var rd = 1, ad = 2;
function Aa(e, t, n, o, r, a) {
  var l = n & rd, s = e.length, i = t.length;
  if (s != i && !(l && i > s))
    return !1;
  var c = a.get(e), d = a.get(t);
  if (c && d)
    return c == t && d == e;
  var v = -1, f = !0, p = n & ad ? new Vn() : void 0;
  for (a.set(e, t), a.set(t, e); ++v < s; ) {
    var u = e[v], h = t[v];
    if (o)
      var m = l ? o(h, u, v, t, e, a) : o(u, h, v, e, t, a);
    if (m !== void 0) {
      if (m)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!nd(t, function(b, S) {
        if (!od(p, S) && (u === b || r(u, b, n, o, a)))
          return p.push(S);
      })) {
        f = !1;
        break;
      }
    } else if (!(u === h || r(u, h, n, o, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), f;
}
function ld(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function id(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var sd = 1, ud = 2, dd = "[object Boolean]", cd = "[object Date]", fd = "[object Error]", pd = "[object Map]", hd = "[object Number]", vd = "[object RegExp]", gd = "[object Set]", md = "[object String]", yd = "[object Symbol]", bd = "[object ArrayBuffer]", wd = "[object DataView]", Pr = nt ? nt.prototype : void 0, ao = Pr ? Pr.valueOf : void 0;
function Cd(e, t, n, o, r, a, l) {
  switch (n) {
    case wd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case bd:
      return !(e.byteLength != t.byteLength || !a(new Ir(e), new Ir(t)));
    case dd:
    case cd:
    case hd:
      return xo(+e, +t);
    case fd:
      return e.name == t.name && e.message == t.message;
    case vd:
    case md:
      return e == t + "";
    case pd:
      var s = ld;
    case gd:
      var i = o & sd;
      if (s || (s = id), e.size != t.size && !i)
        return !1;
      var c = l.get(e);
      if (c)
        return c == t;
      o |= ud, l.set(e, t);
      var d = Aa(s(e), s(t), o, r, a, l);
      return l.delete(e), d;
    case yd:
      if (ao)
        return ao.call(e) == ao.call(t);
  }
  return !1;
}
var Ed = 1, Sd = Object.prototype, kd = Sd.hasOwnProperty;
function Od(e, t, n, o, r, a) {
  var l = n & Ed, s = Er(e), i = s.length, c = Er(t), d = c.length;
  if (i != d && !l)
    return !1;
  for (var v = i; v--; ) {
    var f = s[v];
    if (!(l ? f in t : kd.call(t, f)))
      return !1;
  }
  var p = a.get(e), u = a.get(t);
  if (p && u)
    return p == t && u == e;
  var h = !0;
  a.set(e, t), a.set(t, e);
  for (var m = l; ++v < i; ) {
    f = s[v];
    var b = e[f], S = t[f];
    if (o)
      var A = l ? o(S, b, f, t, e, a) : o(b, S, f, e, t, a);
    if (!(A === void 0 ? b === S || r(b, S, n, o, a) : A)) {
      h = !1;
      break;
    }
    m || (m = f == "constructor");
  }
  if (h && !m) {
    var L = e.constructor, $ = t.constructor;
    L != $ && "constructor" in e && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof $ == "function" && $ instanceof $) && (h = !1);
  }
  return a.delete(e), a.delete(t), h;
}
var Td = 1, Ar = "[object Arguments]", _r = "[object Array]", _n = "[object Object]", Nd = Object.prototype, Lr = Nd.hasOwnProperty;
function $d(e, t, n, o, r, a) {
  var l = vt(e), s = vt(t), i = l ? _r : $r(e), c = s ? _r : $r(t);
  i = i == Ar ? _n : i, c = c == Ar ? _n : c;
  var d = i == _n, v = c == _n, f = i == c;
  if (f && go(e)) {
    if (!go(t))
      return !1;
    l = !0, d = !1;
  }
  if (f && !d)
    return a || (a = new $t()), l || Ta(e) ? Aa(e, t, n, o, r, a) : Cd(e, t, i, n, o, r, a);
  if (!(n & Td)) {
    var p = d && Lr.call(e, "__wrapped__"), u = v && Lr.call(t, "__wrapped__");
    if (p || u) {
      var h = p ? e.value() : e, m = u ? t.value() : t;
      return a || (a = new $t()), r(h, m, n, o, a);
    }
  }
  return f ? (a || (a = new $t()), Od(e, t, n, o, r, a)) : !1;
}
function _a(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !tn(e) && !tn(t) ? e !== e && t !== t : $d(e, t, n, o, _a, r);
}
function Id(e, t) {
  return e != null && t in Object(e);
}
function Pd(e, t, n) {
  t = Yn(t, e);
  for (var o = -1, r = t.length, a = !1; ++o < r; ) {
    var l = zo(t[o]);
    if (!(a = e != null && n(e, l)))
      break;
    e = e[l];
  }
  return a || ++o != r ? a : (r = e == null ? 0 : e.length, !!r && Bo(r) && Do(l, r) && (vt(e) || Mo(e)));
}
function Ad(e, t) {
  return e != null && Pd(e, t, Id);
}
var _d = function() {
  return rt.Date.now();
};
const lo = _d;
var Ld = "Expected a function", Dd = Math.max, xd = Math.min;
function Dr(e, t, n) {
  var o, r, a, l, s, i, c = 0, d = !1, v = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Ld);
  t = fr(t) || 0, Ht(n) && (d = !!n.leading, v = "maxWait" in n, a = v ? Dd(fr(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
  function p(w) {
    var C = o, D = r;
    return o = r = void 0, c = w, l = e.apply(D, C), l;
  }
  function u(w) {
    return c = w, s = setTimeout(b, t), d ? p(w) : l;
  }
  function h(w) {
    var C = w - i, D = w - c, T = t - C;
    return v ? xd(T, a - D) : T;
  }
  function m(w) {
    var C = w - i, D = w - c;
    return i === void 0 || C >= t || C < 0 || v && D >= a;
  }
  function b() {
    var w = lo();
    if (m(w))
      return S(w);
    s = setTimeout(b, h(w));
  }
  function S(w) {
    return s = void 0, f && o ? p(w) : (o = r = void 0, l);
  }
  function A() {
    s !== void 0 && clearTimeout(s), c = 0, o = i = r = s = void 0;
  }
  function L() {
    return s === void 0 ? l : S(lo());
  }
  function $() {
    var w = lo(), C = m(w);
    if (o = arguments, r = this, i = w, C) {
      if (s === void 0)
        return u(i);
      if (v)
        return clearTimeout(s), s = setTimeout(b, t), p(i);
    }
    return s === void 0 && (s = setTimeout(b, t)), l;
  }
  return $.cancel = A, $.flush = L, $;
}
function La(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function Bd(e, t) {
  return wa(t, function(n) {
    return e[n];
  });
}
function xr(e) {
  return e == null ? [] : Bd(e, Na(e));
}
function wo(e, t) {
  return _a(e, t);
}
function Qn(e) {
  return e == null;
}
function Md(e, t, n, o) {
  if (!Ht(e))
    return e;
  t = Yn(t, e);
  for (var r = -1, a = t.length, l = a - 1, s = e; s != null && ++r < a; ) {
    var i = zo(t[r]), c = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (r != l) {
      var d = s[i];
      c = o ? o(d, i, s) : void 0, c === void 0 && (c = Ht(d) ? d : Do(t[r + 1]) ? [] : {});
    }
    Vi(s, i, c), s = s[i];
  }
  return e;
}
function Kd(e, t, n) {
  for (var o = -1, r = t.length, a = {}; ++o < r; ) {
    var l = t[o], s = $a(e, l);
    n(s, l) && Md(a, Yn(l, e), s);
  }
  return a;
}
function zd(e, t) {
  return Kd(e, t, function(n, o) {
    return Ad(e, o);
  });
}
var Rd = Iu(function(e, t) {
  return e == null ? {} : zd(e, t);
});
const Zt = Rd, dt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const a = e == null ? void 0 : e(r);
  if (n === !1 || !a)
    return t == null ? void 0 : t(r);
};
var Br;
const ve = typeof window < "u", Cn = (e) => typeof e == "boolean", et = (e) => typeof e == "number", Fd = (e) => typeof e == "string", io = () => {
};
ve && ((Br = window == null ? void 0 : window.navigator) == null ? void 0 : Br.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function jd(e) {
  return typeof e == "function" ? e() : g(e);
}
function Hd(e) {
  return e;
}
function Ro(e) {
  return kl() ? (Ol(e), !0) : !1;
}
function Vd(e, t = !0) {
  Ie() ? Pe(e) : t ? e() : J(e);
}
function Tt(e) {
  var t;
  const n = jd(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Fo = ve ? window : void 0;
ve && window.document;
ve && window.navigator;
ve && window.location;
function Nt(...e) {
  let t, n, o, r;
  if (Fd(e[0]) ? ([n, o, r] = e, t = Fo) : [t, n, o, r] = e, !t)
    return io;
  let a = io;
  const l = z(() => Tt(t), (i) => {
    a(), i && (i.addEventListener(n, o, r), a = () => {
      i.removeEventListener(n, o, r), a = io;
    });
  }, { immediate: !0, flush: "post" }), s = () => {
    l(), a();
  };
  return Ro(s), s;
}
function Wd(e, t, n = {}) {
  const { window: o = Fo, ignore: r, capture: a = !0, detectIframe: l = !1 } = n;
  if (!o)
    return;
  const s = P(!0);
  let i;
  const c = (f) => {
    o.clearTimeout(i);
    const p = Tt(e), u = f.composedPath();
    !p || p === f.target || u.includes(p) || !s.value || r && r.length > 0 && r.some((h) => {
      const m = Tt(h);
      return m && (f.target === m || u.includes(m));
    }) || t(f);
  }, d = [
    Nt(o, "click", c, { passive: !0, capture: a }),
    Nt(o, "pointerdown", (f) => {
      const p = Tt(e);
      s.value = !!p && !f.composedPath().includes(p);
    }, { passive: !0 }),
    Nt(o, "pointerup", (f) => {
      if (f.button === 0) {
        const p = f.composedPath();
        f.composedPath = () => p, i = o.setTimeout(() => c(f), 50);
      }
    }, { passive: !0 }),
    l && Nt(o, "blur", (f) => {
      var p;
      const u = Tt(e);
      ((p = document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(u != null && u.contains(document.activeElement)) && t(f);
    })
  ].filter(Boolean);
  return () => d.forEach((f) => f());
}
function qd(e, t = !1) {
  const n = P(), o = () => n.value = Boolean(e());
  return o(), Vd(o, t), n;
}
const Co = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Eo = "__vueuse_ssr_handlers__";
Co[Eo] = Co[Eo] || {};
Co[Eo];
var Mr = Object.getOwnPropertySymbols, Ud = Object.prototype.hasOwnProperty, Gd = Object.prototype.propertyIsEnumerable, Yd = (e, t) => {
  var n = {};
  for (var o in e)
    Ud.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Mr)
    for (var o of Mr(e))
      t.indexOf(o) < 0 && Gd.call(e, o) && (n[o] = e[o]);
  return n;
};
function Xn(e, t, n = {}) {
  const o = n, { window: r = Fo } = o, a = Yd(o, ["window"]);
  let l;
  const s = qd(() => r && "ResizeObserver" in r), i = () => {
    l && (l.disconnect(), l = void 0);
  }, c = z(() => Tt(e), (v) => {
    i(), s.value && r && v && (l = new ResizeObserver(t), l.observe(v, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    i(), c();
  };
  return Ro(d), {
    isSupported: s,
    stop: d
  };
}
var Kr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Kr || (Kr = {}));
var Qd = Object.defineProperty, zr = Object.getOwnPropertySymbols, Xd = Object.prototype.hasOwnProperty, Jd = Object.prototype.propertyIsEnumerable, Rr = (e, t, n) => t in e ? Qd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Zd = (e, t) => {
  for (var n in t || (t = {}))
    Xd.call(t, n) && Rr(e, n, t[n]);
  if (zr)
    for (var n of zr(t))
      Jd.call(t, n) && Rr(e, n, t[n]);
  return e;
};
const ec = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Zd({
  linear: Hd
}, ec);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const En = () => {
}, tc = Object.prototype.hasOwnProperty, Sn = (e, t) => tc.call(e, t), So = Array.isArray, Xt = (e) => typeof e == "function", pt = (e) => typeof e == "string", gt = (e) => e !== null && typeof e == "object", nc = Object.prototype.toString, Da = (e) => nc.call(e), so = (e) => Da(e).slice(8, -1), ko = (e) => e === void 0, kn = (e) => typeof Element > "u" ? !1 : e instanceof Element, oc = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
class xa extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function rc(e, t) {
  throw new xa(`[${e}] ${t}`);
}
function we(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = pt(e) ? new xa(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const ac = "utils/dom/style", Ba = (e = "") => e.split(" ").filter((t) => !!t.trim()), lc = (e, t) => {
  !e || !t.trim() || e.classList.add(...Ba(t));
}, uo = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Ba(t));
};
function Oo(e, t = "px") {
  if (!e)
    return "";
  if (pt(e))
    return e;
  if (et(e))
    return `${e}${t}`;
  we(ac, "binding value must be a string or number");
}
function ic(e, t) {
  if (!ve)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((i, c) => i + c.offsetTop, 0), a = r + t.offsetHeight, l = e.scrollTop, s = l + e.clientHeight;
  r < l ? e.scrollTop = r : a > s && (e.scrollTop = a - e.clientHeight);
}
/*! Element Plus Icons Vue v2.0.9 */
var Pt = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, r] of t)
    n[o] = r;
  return n;
}, sc = {
  name: "ArrowUp"
}, uc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, dc = /* @__PURE__ */ q("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), cc = [
  dc
];
function fc(e, t, n, o, r, a) {
  return O(), M("svg", uc, cc);
}
var pc = /* @__PURE__ */ Pt(sc, [["render", fc], ["__file", "arrow-up.vue"]]), hc = {
  name: "CaretRight"
}, vc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gc = /* @__PURE__ */ q("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null, -1), mc = [
  gc
];
function yc(e, t, n, o, r, a) {
  return O(), M("svg", vc, mc);
}
var bc = /* @__PURE__ */ Pt(hc, [["render", yc], ["__file", "caret-right.vue"]]), wc = {
  name: "CircleCheck"
}, Cc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ec = /* @__PURE__ */ q("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Sc = /* @__PURE__ */ q("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), kc = [
  Ec,
  Sc
];
function Oc(e, t, n, o, r, a) {
  return O(), M("svg", Cc, kc);
}
var Tc = /* @__PURE__ */ Pt(wc, [["render", Oc], ["__file", "circle-check.vue"]]), Nc = {
  name: "CircleClose"
}, $c = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ic = /* @__PURE__ */ q("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), Pc = /* @__PURE__ */ q("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Ac = [
  Ic,
  Pc
];
function _c(e, t, n, o, r, a) {
  return O(), M("svg", $c, Ac);
}
var jo = /* @__PURE__ */ Pt(Nc, [["render", _c], ["__file", "circle-close.vue"]]), Lc = {
  name: "Close"
}, Dc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xc = /* @__PURE__ */ q("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), Bc = [
  xc
];
function Mc(e, t, n, o, r, a) {
  return O(), M("svg", Dc, Bc);
}
var Fr = /* @__PURE__ */ Pt(Lc, [["render", Mc], ["__file", "close.vue"]]), Kc = {
  name: "Hide"
}, zc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Rc = /* @__PURE__ */ q("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), Fc = /* @__PURE__ */ q("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), jc = [
  Rc,
  Fc
];
function Hc(e, t, n, o, r, a) {
  return O(), M("svg", zc, jc);
}
var Vc = /* @__PURE__ */ Pt(Kc, [["render", Hc], ["__file", "hide.vue"]]), Wc = {
  name: "Loading"
}, qc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Uc = /* @__PURE__ */ q("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), Gc = [
  Uc
];
function Yc(e, t, n, o, r, a) {
  return O(), M("svg", qc, Gc);
}
var Ma = /* @__PURE__ */ Pt(Wc, [["render", Yc], ["__file", "loading.vue"]]), Qc = {
  name: "View"
}, Xc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Jc = /* @__PURE__ */ q("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), Zc = [
  Jc
];
function ef(e, t, n, o, r, a) {
  return O(), M("svg", Xc, Zc);
}
var tf = /* @__PURE__ */ Pt(Qc, [["render", ef], ["__file", "view.vue"]]);
const Ka = "__epPropKey", se = (e) => e, nf = (e) => gt(e) && !!e[Ka], Jn = (e, t) => {
  if (!gt(e) || nf(e))
    return e;
  const { values: n, required: o, default: r, type: a, validator: l } = e, i = {
    type: a,
    required: !!o,
    validator: n || l ? (c) => {
      let d = !1, v = [];
      if (n && (v = Array.from(n), Sn(e, "default") && v.push(r), d || (d = v.includes(c))), l && (d || (d = l(c))), !d && v.length > 0) {
        const f = [...new Set(v)].map((p) => JSON.stringify(p)).join(", ");
        Tl(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [Ka]: !0
  };
  return Sn(e, "default") && (i.default = r), i;
}, Se = (e) => La(Object.entries(e).map(([t, n]) => [
  t,
  Jn(n, t)
])), To = se([
  String,
  Object,
  Function
]), of = {
  validating: Ma,
  success: Tc,
  error: jo
}, At = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t != null ? t : {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, Zn = (e) => (e.install = En, e), ze = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, he = "update:modelValue", za = "change", Ho = ["", "default", "small", "large"], rf = {
  large: 40,
  default: 32,
  small: 24
}, af = (e) => rf[e || "default"], lf = (e) => ["", ...Ho].includes(e), Ra = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), sf = () => Math.floor(Math.random() * 1e4), uf = (e) => e, df = ["class", "style"], cf = /^on[A-Z]/, ff = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = k(() => ((n == null ? void 0 : n.value) || []).concat(df)), r = Ie();
  return r ? k(() => {
    var a;
    return La(Object.entries((a = r.proxy) == null ? void 0 : a.$attrs).filter(([l]) => !o.value.includes(l) && !(t && cf.test(l))));
  }) : (we("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), k(() => ({})));
}, pf = Symbol(), Vo = Symbol("formContextKey"), On = Symbol("formItemContextKey"), Fa = Symbol("scrollbarContextKey"), Wo = Symbol("popper"), ja = Symbol("popperContent"), Ha = (e) => {
  const t = Ie();
  return k(() => {
    var n, o;
    return (o = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? o : void 0;
  });
}, jr = P();
function In(e, t = void 0) {
  const n = Ie() ? ae(pf, jr) : jr;
  return e ? k(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
const qo = Jn({
  type: String,
  values: Ho,
  required: !1
}), nn = (e, t = {}) => {
  const n = P(void 0), o = t.prop ? n : Ha("size"), r = t.global ? n : In("size"), a = t.form ? { size: void 0 } : ae(Vo, void 0), l = t.formItem ? { size: void 0 } : ae(On, void 0);
  return k(() => o.value || g(e) || (l == null ? void 0 : l.size) || (a == null ? void 0 : a.size) || r.value || "");
}, hf = (e) => {
  const t = Ha("disabled"), n = ae(Vo, void 0);
  return k(() => t.value || g(e) || (n == null ? void 0 : n.disabled) || !1);
}, vf = (e) => ({
  focus: () => {
    var t, n;
    (n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t);
  }
}), Va = "el", gf = "is-", Bt = (e, t, n, o, r) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), r && (a += `--${r}`), a;
}, te = (e) => {
  const t = In("namespace", Va);
  return {
    namespace: t,
    b: (u = "") => Bt(t.value, e, u, "", ""),
    e: (u) => u ? Bt(t.value, e, "", u, "") : "",
    m: (u) => u ? Bt(t.value, e, "", "", u) : "",
    be: (u, h) => u && h ? Bt(t.value, e, u, h, "") : "",
    em: (u, h) => u && h ? Bt(t.value, e, "", u, h) : "",
    bm: (u, h) => u && h ? Bt(t.value, e, u, "", h) : "",
    bem: (u, h, m) => u && h && m ? Bt(t.value, e, u, h, m) : "",
    is: (u, ...h) => {
      const m = h.length >= 1 ? h[0] : !0;
      return u && m ? `${gf}${u}` : "";
    },
    cssVar: (u) => {
      const h = {};
      for (const m in u)
        u[m] && (h[`--${t.value}-${m}`] = u[m]);
      return h;
    },
    cssVarName: (u) => `--${t.value}-${u}`,
    cssVarBlock: (u) => {
      const h = {};
      for (const m in u)
        u[m] && (h[`--${t.value}-${e}-${m}`] = u[m]);
      return h;
    },
    cssVarBlockName: (u) => `--${t.value}-${e}-${u}`
  };
}, Hr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, mf = Symbol("elIdInjection"), Wa = (e) => {
  const t = ae(mf, Hr);
  !ve && t === Hr && we("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = In("namespace", Va);
  return k(() => g(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Uo = () => {
  const e = ae(Vo, void 0), t = ae(On, void 0);
  return {
    form: e,
    formItem: t
  };
}, Go = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = P(!1)), o || (o = P(!1));
  const r = P();
  let a;
  const l = k(() => {
    var s;
    return !!(!e.label && t && t.inputIds && ((s = t.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return Pe(() => {
    a = z([jt(e, "id"), n], ([s, i]) => {
      const c = s != null ? s : i ? void 0 : Wa().value;
      c !== r.value && (t != null && t.removeInputId && (r.value && t.removeInputId(r.value), !(o != null && o.value) && !i && c && t.addInputId(c)), r.value = c);
    }, { immediate: !0 });
  }), Nl(() => {
    a && a(), t != null && t.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: l,
    inputId: r
  };
};
var yf = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const bf = (e) => (t, n) => wf(t, n, g(e)), wf = (e, t, n) => Ke(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var a;
  return `${(a = t == null ? void 0 : t[r]) != null ? a : `{${r}}`}`;
}), Cf = (e) => {
  const t = k(() => g(e).name), n = mn(e) ? e : P(e);
  return {
    lang: t,
    locale: n,
    t: bf(e)
  };
}, eo = () => {
  const e = In("locale");
  return Cf(k(() => e.value || yf));
}, Ef = Jn({
  type: se(Boolean),
  default: null
}), Sf = Jn({
  type: se(Function)
}), kf = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: Ef,
    [n]: Sf
  };
  return {
    useModelToggle: ({
      indicator: l,
      toggleReason: s,
      shouldHideWhenRouteChanges: i,
      shouldProceed: c,
      onShow: d,
      onHide: v
    }) => {
      const f = Ie(), { emit: p } = f, u = f.props, h = k(() => Xt(u[n])), m = k(() => u[e] === null), b = (C) => {
        l.value !== !0 && (l.value = !0, s && (s.value = C), Xt(d) && d(C));
      }, S = (C) => {
        l.value !== !1 && (l.value = !1, s && (s.value = C), Xt(v) && v(C));
      }, A = (C) => {
        if (u.disabled === !0 || Xt(c) && !c())
          return;
        const D = h.value && ve;
        D && p(t, !0), (m.value || !D) && b(C);
      }, L = (C) => {
        if (u.disabled === !0 || !ve)
          return;
        const D = h.value && ve;
        D && p(t, !1), (m.value || !D) && S(C);
      }, $ = (C) => {
        !Cn(C) || (u.disabled && C ? h.value && p(t, !1) : l.value !== C && (C ? b() : S()));
      }, w = () => {
        l.value ? L() : A();
      };
      return z(() => u[e], $), i && f.appContext.config.globalProperties.$route !== void 0 && z(() => ({
        ...f.proxy.$route
      }), () => {
        i.value && l.value && L();
      }), Pe(() => {
        $(u[e]);
      }), {
        hide: L,
        show: A,
        toggle: w,
        hasUpdateHandler: h
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
function Of() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return Ro(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
let Qt = [];
const Vr = (e) => {
  const t = e;
  t.key === ze.esc && Qt.forEach((n) => n(t));
}, Tf = (e) => {
  Pe(() => {
    Qt.length === 0 && document.addEventListener("keydown", Vr), ve && Qt.push(e);
  }), It(() => {
    Qt = Qt.filter((t) => t !== e), Qt.length === 0 && ve && document.removeEventListener("keydown", Vr);
  });
};
let Wr;
const qa = `el-popper-container-${sf()}`, Ua = `#${qa}`, Nf = () => {
  const e = document.createElement("div");
  return e.id = qa, document.body.appendChild(e), e;
}, $f = () => {
  $l(() => {
    !ve || (process.env.NODE_ENV === "test" || !Wr || !document.body.querySelector(Ua)) && (Wr = Nf());
  });
}, If = Se({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), Pf = ({
  showAfter: e,
  hideAfter: t,
  open: n,
  close: o
}) => {
  const { registerTimeout: r } = Of();
  return {
    onOpen: (s) => {
      r(() => {
        n(s);
      }, g(e));
    },
    onClose: (s) => {
      r(() => {
        o(s);
      }, g(t));
    }
  };
}, Ga = Symbol("elForwardRef"), Af = (e) => {
  Ee(Ga, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, _f = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), qr = P(0), Lf = () => {
  const e = In("zIndex", 2e3), t = k(() => e.value + qr.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (qr.value++, t.value)
  };
};
function Df(e) {
  const t = P();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: a, value: l } = e.value;
    if (r == null || a == null)
      return;
    const s = l.slice(0, Math.max(0, r)), i = l.slice(Math.max(0, a));
    t.value = {
      selectionStart: r,
      selectionEnd: a,
      value: l,
      beforeTxt: s,
      afterTxt: i
    };
  }
  function o() {
    if (e.value == null || t.value == null)
      return;
    const { value: r } = e.value, { beforeTxt: a, afterTxt: l, selectionStart: s } = t.value;
    if (a == null || l == null || s == null)
      return;
    let i = r.length;
    if (r.endsWith(l))
      i = r.length - l.length;
    else if (r.startsWith(a))
      i = a.length;
    else {
      const c = a[s - 1], d = r.indexOf(c, s - 1);
      d !== -1 && (i = d + 1);
    }
    e.value.setSelectionRange(i, i);
  }
  return [n, o];
}
var le = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const xf = Se({
  size: {
    type: se([Number, String])
  },
  color: {
    type: String
  }
}), Bf = {
  name: "ElIcon",
  inheritAttrs: !1
}, Mf = /* @__PURE__ */ ee({
  ...Bf,
  props: xf,
  setup(e) {
    const t = e, n = te("icon"), o = k(() => {
      const { size: r, color: a } = t;
      return !r && !a ? {} : {
        fontSize: ko(r) ? void 0 : Oo(r),
        "--color": a
      };
    });
    return (r, a) => (O(), M("i", Kt({
      class: g(n).b(),
      style: g(o)
    }, r.$attrs), [
      oe(r.$slots, "default")
    ], 16));
  }
});
var Kf = /* @__PURE__ */ le(Mf, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const ct = At(Kf);
let qe;
const zf = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Rf = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function Ff(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Rf.map((l) => `${l}:${t.getPropertyValue(l)}`).join(";"), paddingSize: o, borderSize: r, boxSizing: n };
}
function Ur(e, t = 1, n) {
  var o;
  qe || (qe = document.createElement("textarea"), document.body.appendChild(qe));
  const { paddingSize: r, borderSize: a, boxSizing: l, contextStyle: s } = Ff(e);
  qe.setAttribute("style", `${s};${zf}`), qe.value = e.value || e.placeholder || "";
  let i = qe.scrollHeight;
  const c = {};
  l === "border-box" ? i = i + a : l === "content-box" && (i = i - r), qe.value = "";
  const d = qe.scrollHeight - r;
  if (et(t)) {
    let v = d * t;
    l === "border-box" && (v = v + r + a), i = Math.max(v, i), c.minHeight = `${v}px`;
  }
  if (et(n)) {
    let v = d * n;
    l === "border-box" && (v = v + r + a), i = Math.min(v, i);
  }
  return c.height = `${i}px`, (o = qe.parentNode) == null || o.removeChild(qe), qe = void 0, c;
}
const jf = Se({
  id: {
    type: String,
    default: void 0
  },
  size: qo,
  disabled: Boolean,
  modelValue: {
    type: se([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: se([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String,
    default: ""
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: To
  },
  prefixIcon: {
    type: To
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: se([Object, Array, String]),
    default: () => uf({})
  }
}), Hf = {
  [he]: (e) => pt(e),
  input: (e) => pt(e),
  change: (e) => pt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Vf = ["role"], Wf = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"], qf = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"], Uf = {
  name: "ElInput",
  inheritAttrs: !1
}, Gf = /* @__PURE__ */ ee({
  ...Uf,
  props: jf,
  emits: Hf,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = {
      suffix: "append",
      prefix: "prepend"
    }, a = Ie(), l = Il(), s = _o(), i = k(() => {
      const E = {};
      return o.containerRole === "combobox" && (E["aria-haspopup"] = l["aria-haspopup"], E["aria-owns"] = l["aria-owns"], E["aria-expanded"] = l["aria-expanded"]), E;
    }), c = ff({
      excludeKeys: k(() => Object.keys(i.value))
    }), { form: d, formItem: v } = Uo(), { inputId: f } = Go(o, {
      formItemContext: v
    }), p = nn(), u = hf(), h = te("input"), m = te("textarea"), b = zt(), S = zt(), A = P(!1), L = P(!1), $ = P(!1), w = P(!1), C = P(), D = zt(o.inputStyle), T = k(() => b.value || S.value), x = k(() => {
      var E;
      return (E = d == null ? void 0 : d.statusIcon) != null ? E : !1;
    }), B = k(() => (v == null ? void 0 : v.validateState) || ""), ne = k(() => B.value && of[B.value]), Q = k(() => w.value ? tf : Vc), K = k(() => [
      l.style,
      o.inputStyle
    ]), V = k(() => [
      o.inputStyle,
      D.value,
      { resize: o.resize }
    ]), H = k(() => Qn(o.modelValue) ? "" : String(o.modelValue)), N = k(() => o.clearable && !u.value && !o.readonly && !!H.value && (A.value || L.value)), R = k(() => o.showPassword && !u.value && !o.readonly && !!H.value && (!!H.value || A.value)), X = k(() => o.showWordLimit && !!c.value.maxlength && (o.type === "text" || o.type === "textarea") && !u.value && !o.readonly && !o.showPassword), Z = k(() => Array.from(H.value).length), xe = k(() => !!X.value && Z.value > Number(c.value.maxlength)), ke = k(() => !!s.suffix || !!o.suffixIcon || N.value || o.showPassword || X.value || !!B.value && x.value), [Ae, _e] = Df(b);
    Xn(S, (E) => {
      if (!X.value || o.resize !== "both")
        return;
      const G = E[0], { width: me } = G.contentRect;
      C.value = {
        right: `calc(100% - ${me + 15 + 6}px)`
      };
    });
    const ie = () => {
      const { type: E, autosize: G } = o;
      if (!(!ve || E !== "textarea"))
        if (G) {
          const me = gt(G) ? G.minRows : void 0, ce = gt(G) ? G.maxRows : void 0;
          D.value = {
            ...Ur(S.value, me, ce)
          };
        } else
          D.value = {
            minHeight: Ur(S.value).minHeight
          };
    }, Oe = () => {
      const E = T.value;
      !E || E.value === H.value || (E.value = H.value);
    }, Be = (E) => {
      const { el: G } = a.vnode;
      if (!G)
        return;
      const ce = Array.from(G.querySelectorAll(`.${h.e(E)}`)).find((Gt) => Gt.parentNode === G);
      if (!ce)
        return;
      const st = r[E];
      s[st] ? ce.style.transform = `translateX(${E === "suffix" ? "-" : ""}${G.querySelector(`.${h.be("group", st)}`).offsetWidth}px)` : ce.removeAttribute("style");
    }, de = () => {
      Be("prefix"), Be("suffix");
    }, Ye = async (E) => {
      Ae();
      let { value: G } = E.target;
      if (o.formatter && (G = o.parser ? o.parser(G) : G, G = o.formatter(G)), !$.value) {
        if (G === H.value) {
          Oe();
          return;
        }
        n(he, G), n("input", G), await J(), Oe(), _e();
      }
    }, Qe = (E) => {
      n("change", E.target.value);
    }, Xe = (E) => {
      n("compositionstart", E), $.value = !0;
    }, Le = (E) => {
      var G;
      n("compositionupdate", E);
      const me = (G = E.target) == null ? void 0 : G.value, ce = me[me.length - 1] || "";
      $.value = !Ra(ce);
    }, at = (E) => {
      n("compositionend", E), $.value && ($.value = !1, Ye(E));
    }, Lt = () => {
      w.value = !w.value, wt();
    }, wt = async () => {
      var E;
      await J(), (E = T.value) == null || E.focus();
    }, Je = () => {
      var E;
      return (E = T.value) == null ? void 0 : E.blur();
    }, He = (E) => {
      A.value = !0, n("focus", E);
    }, lt = (E) => {
      var G;
      A.value = !1, n("blur", E), o.validateEvent && ((G = v == null ? void 0 : v.validate) == null || G.call(v, "blur").catch((me) => we(me)));
    }, Dt = (E) => {
      L.value = !1, n("mouseleave", E);
    }, Te = (E) => {
      L.value = !0, n("mouseenter", E);
    }, Ve = (E) => {
      n("keydown", E);
    }, Ct = () => {
      var E;
      (E = T.value) == null || E.select();
    }, it = () => {
      n(he, ""), n("change", ""), n("clear"), n("input", "");
    };
    return z(() => o.modelValue, () => {
      var E;
      J(() => ie()), o.validateEvent && ((E = v == null ? void 0 : v.validate) == null || E.call(v, "change").catch((G) => we(G)));
    }), z(H, () => Oe()), z(() => o.type, async () => {
      await J(), Oe(), ie(), de();
    }), Pe(async () => {
      !o.formatter && o.parser && we("ElInput", "If you set the parser, you also need to set the formatter."), Oe(), de(), await J(), ie();
    }), Lo(async () => {
      await J(), de();
    }), t({
      input: b,
      textarea: S,
      ref: T,
      textareaStyle: V,
      autosize: jt(o, "autosize"),
      focus: wt,
      blur: Je,
      select: Ct,
      clear: it,
      resizeTextarea: ie
    }), (E, G) => be((O(), M("div", Kt(g(i), {
      class: [
        E.type === "textarea" ? g(m).b() : g(h).b(),
        g(h).m(g(p)),
        g(h).is("disabled", g(u)),
        g(h).is("exceed", g(xe)),
        {
          [g(h).b("group")]: E.$slots.prepend || E.$slots.append,
          [g(h).bm("group", "append")]: E.$slots.append,
          [g(h).bm("group", "prepend")]: E.$slots.prepend,
          [g(h).m("prefix")]: E.$slots.prefix || E.prefixIcon,
          [g(h).m("suffix")]: E.$slots.suffix || E.suffixIcon || E.clearable || E.showPassword,
          [g(h).bm("suffix", "password-clear")]: g(N) && g(R)
        },
        E.$attrs.class
      ],
      style: g(K),
      role: E.containerRole,
      onMouseenter: Te,
      onMouseleave: Dt
    }), [
      j(" input "),
      E.type !== "textarea" ? (O(), M(Ue, { key: 0 }, [
        j(" prepend slot "),
        E.$slots.prepend ? (O(), M("div", {
          key: 0,
          class: _(g(h).be("group", "prepend"))
        }, [
          oe(E.$slots, "prepend")
        ], 2)) : j("v-if", !0),
        q("div", {
          class: _([g(h).e("wrapper"), g(h).is("focus", A.value)])
        }, [
          j(" prefix slot "),
          E.$slots.prefix || E.prefixIcon ? (O(), M("span", {
            key: 0,
            class: _(g(h).e("prefix"))
          }, [
            q("span", {
              class: _(g(h).e("prefix-inner"))
            }, [
              oe(E.$slots, "prefix"),
              E.prefixIcon ? (O(), W(g(ct), {
                key: 0,
                class: _(g(h).e("icon"))
              }, {
                default: U(() => [
                  (O(), W(Ze(E.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 2)) : j("v-if", !0),
          q("input", Kt({
            id: g(f),
            ref_key: "input",
            ref: b,
            class: g(h).e("inner")
          }, g(c), {
            type: E.showPassword ? w.value ? "text" : "password" : E.type,
            disabled: g(u),
            formatter: E.formatter,
            parser: E.parser,
            readonly: E.readonly,
            autocomplete: E.autocomplete,
            tabindex: E.tabindex,
            "aria-label": E.label,
            placeholder: E.placeholder,
            style: E.inputStyle,
            onCompositionstart: Xe,
            onCompositionupdate: Le,
            onCompositionend: at,
            onInput: Ye,
            onFocus: He,
            onBlur: lt,
            onChange: Qe,
            onKeydown: Ve
          }), null, 16, Wf),
          j(" suffix slot "),
          g(ke) ? (O(), M("span", {
            key: 1,
            class: _(g(h).e("suffix"))
          }, [
            q("span", {
              class: _(g(h).e("suffix-inner"))
            }, [
              !g(N) || !g(R) || !g(X) ? (O(), M(Ue, { key: 0 }, [
                oe(E.$slots, "suffix"),
                E.suffixIcon ? (O(), W(g(ct), {
                  key: 0,
                  class: _(g(h).e("icon"))
                }, {
                  default: U(() => [
                    (O(), W(Ze(E.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : j("v-if", !0)
              ], 64)) : j("v-if", !0),
              g(N) ? (O(), W(g(ct), {
                key: 1,
                class: _([g(h).e("icon"), g(h).e("clear")]),
                onMousedown: fe(g(En), ["prevent"]),
                onClick: it
              }, {
                default: U(() => [
                  pe(g(jo))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : j("v-if", !0),
              g(R) ? (O(), W(g(ct), {
                key: 2,
                class: _([g(h).e("icon"), g(h).e("password")]),
                onClick: Lt
              }, {
                default: U(() => [
                  (O(), W(Ze(g(Q))))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0),
              g(X) ? (O(), M("span", {
                key: 3,
                class: _(g(h).e("count"))
              }, [
                q("span", {
                  class: _(g(h).e("count-inner"))
                }, ye(g(Z)) + " / " + ye(g(c).maxlength), 3)
              ], 2)) : j("v-if", !0),
              g(B) && g(ne) && g(x) ? (O(), W(g(ct), {
                key: 4,
                class: _([
                  g(h).e("icon"),
                  g(h).e("validateIcon"),
                  g(h).is("loading", g(B) === "validating")
                ])
              }, {
                default: U(() => [
                  (O(), W(Ze(g(ne))))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 2)) : j("v-if", !0)
        ], 2),
        j(" append slot "),
        E.$slots.append ? (O(), M("div", {
          key: 1,
          class: _(g(h).be("group", "append"))
        }, [
          oe(E.$slots, "append")
        ], 2)) : j("v-if", !0)
      ], 64)) : (O(), M(Ue, { key: 1 }, [
        j(" textarea "),
        q("textarea", Kt({
          id: g(f),
          ref_key: "textarea",
          ref: S,
          class: g(m).e("inner")
        }, g(c), {
          tabindex: E.tabindex,
          disabled: g(u),
          readonly: E.readonly,
          autocomplete: E.autocomplete,
          style: g(V),
          "aria-label": E.label,
          placeholder: E.placeholder,
          onCompositionstart: Xe,
          onCompositionupdate: Le,
          onCompositionend: at,
          onInput: Ye,
          onFocus: He,
          onBlur: lt,
          onChange: Qe,
          onKeydown: Ve
        }), null, 16, qf),
        g(X) ? (O(), M("span", {
          key: 0,
          style: Ce(C.value),
          class: _(g(h).e("count"))
        }, ye(g(Z)) + " / " + ye(g(c).maxlength), 7)) : j("v-if", !0)
      ], 64))
    ], 16, Vf)), [
      [ht, E.type !== "hidden"]
    ]);
  }
});
var Yf = /* @__PURE__ */ le(Gf, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Qf = At(Yf), Jt = 4, Xf = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, Jf = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Zf = Se({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), ep = /* @__PURE__ */ ee({
  __name: "thumb",
  props: Zf,
  setup(e) {
    const t = e, n = "Thumb", o = ae(Fa), r = te("scrollbar");
    o || rc(n, "can not inject scrollbar context");
    const a = P(), l = P(), s = P({}), i = P(!1);
    let c = !1, d = !1, v = ve ? document.onselectstart : null;
    const f = k(() => Xf[t.vertical ? "vertical" : "horizontal"]), p = k(() => Jf({
      size: t.size,
      move: t.move,
      bar: f.value
    })), u = k(() => a.value[f.value.offset] ** 2 / o.wrapElement[f.value.scrollSize] / t.ratio / l.value[f.value.offset]), h = (C) => {
      var D;
      if (C.stopPropagation(), C.ctrlKey || [1, 2].includes(C.button))
        return;
      (D = window.getSelection()) == null || D.removeAllRanges(), b(C);
      const T = C.currentTarget;
      !T || (s.value[f.value.axis] = T[f.value.offset] - (C[f.value.client] - T.getBoundingClientRect()[f.value.direction]));
    }, m = (C) => {
      if (!l.value || !a.value || !o.wrapElement)
        return;
      const D = Math.abs(C.target.getBoundingClientRect()[f.value.direction] - C[f.value.client]), T = l.value[f.value.offset] / 2, x = (D - T) * 100 * u.value / a.value[f.value.offset];
      o.wrapElement[f.value.scroll] = x * o.wrapElement[f.value.scrollSize] / 100;
    }, b = (C) => {
      C.stopImmediatePropagation(), c = !0, document.addEventListener("mousemove", S), document.addEventListener("mouseup", A), v = document.onselectstart, document.onselectstart = () => !1;
    }, S = (C) => {
      if (!a.value || !l.value || c === !1)
        return;
      const D = s.value[f.value.axis];
      if (!D)
        return;
      const T = (a.value.getBoundingClientRect()[f.value.direction] - C[f.value.client]) * -1, x = l.value[f.value.offset] - D, B = (T - x) * 100 * u.value / a.value[f.value.offset];
      o.wrapElement[f.value.scroll] = B * o.wrapElement[f.value.scrollSize] / 100;
    }, A = () => {
      c = !1, s.value[f.value.axis] = 0, document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", A), w(), d && (i.value = !1);
    }, L = () => {
      d = !1, i.value = !!t.size;
    }, $ = () => {
      d = !0, i.value = c;
    };
    It(() => {
      w(), document.removeEventListener("mouseup", A);
    });
    const w = () => {
      document.onselectstart !== v && (document.onselectstart = v);
    };
    return Nt(jt(o, "scrollbarElement"), "mousemove", L), Nt(jt(o, "scrollbarElement"), "mouseleave", $), (C, D) => (O(), W($n, {
      name: g(r).b("fade"),
      persisted: ""
    }, {
      default: U(() => [
        be(q("div", {
          ref_key: "instance",
          ref: a,
          class: _([g(r).e("bar"), g(r).is(g(f).key)]),
          onMousedown: m
        }, [
          q("div", {
            ref_key: "thumb",
            ref: l,
            class: _(g(r).e("thumb")),
            style: Ce(g(p)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [ht, C.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Gr = /* @__PURE__ */ le(ep, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const tp = Se({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), np = /* @__PURE__ */ ee({
  __name: "bar",
  props: tp,
  setup(e, { expose: t }) {
    const n = e, o = P(0), r = P(0);
    return t({
      handleScroll: (l) => {
        if (l) {
          const s = l.offsetHeight - Jt, i = l.offsetWidth - Jt;
          r.value = l.scrollTop * 100 / s * n.ratioY, o.value = l.scrollLeft * 100 / i * n.ratioX;
        }
      }
    }), (l, s) => (O(), M(Ue, null, [
      pe(Gr, {
        move: o.value,
        ratio: l.ratioX,
        size: l.width,
        always: l.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      pe(Gr, {
        move: r.value,
        ratio: l.ratioY,
        size: l.height,
        vertical: "",
        always: l.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var op = /* @__PURE__ */ le(np, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const rp = Se({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: Boolean,
  wrapStyle: {
    type: se([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
}), ap = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(et)
}, lp = {
  name: "ElScrollbar"
}, ip = /* @__PURE__ */ ee({
  ...lp,
  props: rp,
  emits: ap,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = te("scrollbar");
    let a, l;
    const s = P(), i = P(), c = P(), d = P("0"), v = P("0"), f = P(), p = P(1), u = P(1), h = "ElScrollbar", m = k(() => {
      const w = {};
      return o.height && (w.height = Oo(o.height)), o.maxHeight && (w.maxHeight = Oo(o.maxHeight)), [o.wrapStyle, w];
    }), b = () => {
      var w;
      i.value && ((w = f.value) == null || w.handleScroll(i.value), n("scroll", {
        scrollTop: i.value.scrollTop,
        scrollLeft: i.value.scrollLeft
      }));
    };
    function S(w, C) {
      gt(w) ? i.value.scrollTo(w) : et(w) && et(C) && i.value.scrollTo(w, C);
    }
    const A = (w) => {
      if (!et(w)) {
        we(h, "value must be a number");
        return;
      }
      i.value.scrollTop = w;
    }, L = (w) => {
      if (!et(w)) {
        we(h, "value must be a number");
        return;
      }
      i.value.scrollLeft = w;
    }, $ = () => {
      if (!i.value)
        return;
      const w = i.value.offsetHeight - Jt, C = i.value.offsetWidth - Jt, D = w ** 2 / i.value.scrollHeight, T = C ** 2 / i.value.scrollWidth, x = Math.max(D, o.minSize), B = Math.max(T, o.minSize);
      p.value = D / (w - D) / (x / (w - x)), u.value = T / (C - T) / (B / (C - B)), v.value = x + Jt < w ? `${x}px` : "", d.value = B + Jt < C ? `${B}px` : "";
    };
    return z(() => o.noresize, (w) => {
      w ? (a == null || a(), l == null || l()) : ({ stop: a } = Xn(c, $), l = Nt("resize", $));
    }, { immediate: !0 }), z(() => [o.maxHeight, o.height], () => {
      o.native || J(() => {
        var w;
        $(), i.value && ((w = f.value) == null || w.handleScroll(i.value));
      });
    }), Ee(Fa, ft({
      scrollbarElement: s,
      wrapElement: i
    })), Pe(() => {
      o.native || J(() => {
        $();
      });
    }), Lo(() => $()), t({
      wrap$: i,
      update: $,
      scrollTo: S,
      setScrollTop: A,
      setScrollLeft: L,
      handleScroll: b
    }), (w, C) => (O(), M("div", {
      ref_key: "scrollbar$",
      ref: s,
      class: _(g(r).b())
    }, [
      q("div", {
        ref_key: "wrap$",
        ref: i,
        class: _([
          w.wrapClass,
          g(r).e("wrap"),
          { [g(r).em("wrap", "hidden-default")]: !w.native }
        ]),
        style: Ce(g(m)),
        onScroll: b
      }, [
        (O(), W(Ze(w.tag), {
          ref_key: "resize$",
          ref: c,
          class: _([g(r).e("view"), w.viewClass]),
          style: Ce(w.viewStyle)
        }, {
          default: U(() => [
            oe(w.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      w.native ? j("v-if", !0) : (O(), W(op, {
        key: 0,
        ref_key: "barRef",
        ref: f,
        height: v.value,
        width: d.value,
        always: w.always,
        "ratio-x": u.value,
        "ratio-y": p.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var sp = /* @__PURE__ */ le(ip, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const up = At(sp), dp = [
  "dialog",
  "grid",
  "listbox",
  "menu",
  "tooltip",
  "tree"
], Ya = Se({
  role: {
    type: String,
    values: dp,
    default: "tooltip"
  }
}), cp = {
  name: "ElPopperRoot",
  inheritAttrs: !1
}, fp = /* @__PURE__ */ ee({
  ...cp,
  props: Ya,
  setup(e, { expose: t }) {
    const n = e, o = P(), r = P(), a = P(), l = P(), s = k(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: a,
      referenceRef: l,
      role: s
    };
    return t(i), Ee(Wo, i), (c, d) => oe(c.$slots, "default");
  }
});
var pp = /* @__PURE__ */ le(fp, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const Qa = Se({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), hp = {
  name: "ElPopperArrow",
  inheritAttrs: !1
}, vp = /* @__PURE__ */ ee({
  ...hp,
  props: Qa,
  setup(e, { expose: t }) {
    const n = e, o = te("popper"), { arrowOffset: r, arrowRef: a } = ae(ja, void 0);
    return z(() => n.arrowOffset, (l) => {
      r.value = l;
    }), It(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (l, s) => (O(), M("span", {
      ref_key: "arrowRef",
      ref: a,
      class: _(g(o).e("arrow")),
      "data-popper-arrow": ""
    }, null, 2));
  }
});
var gp = /* @__PURE__ */ le(vp, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const co = "ElOnlyChild", mp = ee({
  name: co,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = ae(Ga), a = _f((o = r == null ? void 0 : r.setForwardRef) != null ? o : En);
    return () => {
      var l;
      const s = (l = t.default) == null ? void 0 : l.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return we(co, "requires exact only one valid child."), null;
      const i = Xa(s);
      return i ? be(Pl(i, n), [[a]]) : (we(co, "no valid child node found"), null);
    };
  }
});
function Xa(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (gt(n))
      switch (n.type) {
        case _l:
          continue;
        case Al:
        case "svg":
          return Yr(n);
        case Ue:
          return Xa(n.children);
        default:
          return n;
      }
    return Yr(n);
  }
  return null;
}
function Yr(e) {
  const t = te("only-child");
  return pe("span", {
    class: t.e("content")
  }, [e]);
}
const Ja = Se({
  virtualRef: {
    type: se(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  onBlur: Function,
  onContextmenu: Function,
  id: String,
  open: Boolean
}), yp = {
  name: "ElPopperTrigger",
  inheritAttrs: !1
}, bp = /* @__PURE__ */ ee({
  ...yp,
  props: Ja,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = ae(Wo, void 0);
    Af(r);
    const a = k(() => s.value ? n.id : void 0), l = k(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = k(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), i = k(() => s.value ? `${n.open}` : void 0);
    let c;
    return Pe(() => {
      z(() => n.virtualRef, (d) => {
        d && (r.value = Tt(d));
      }, {
        immediate: !0
      }), z(() => r.value, (d, v) => {
        c == null || c(), c = void 0, kn(d) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((f) => {
          var p;
          const u = n[f];
          u && (d.addEventListener(f.slice(2).toLowerCase(), u), (p = v == null ? void 0 : v.removeEventListener) == null || p.call(v, f.slice(2).toLowerCase(), u));
        }), c = z([a, l, s, i], (f) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((p, u) => {
            Qn(f[u]) ? d.removeAttribute(p) : d.setAttribute(p, f[u]);
          });
        }, { immediate: !0 })), kn(v) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((f) => v.removeAttribute(f));
      }, {
        immediate: !0
      });
    }), It(() => {
      c == null || c(), c = void 0;
    }), t({
      triggerRef: r
    }), (d, v) => d.virtualTriggering ? j("v-if", !0) : (O(), W(g(mp), Kt({ key: 0 }, d.$attrs, {
      "aria-controls": g(a),
      "aria-describedby": g(l),
      "aria-expanded": g(i),
      "aria-haspopup": g(s)
    }), {
      default: U(() => [
        oe(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var wp = /* @__PURE__ */ le(bp, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]), Ne = "top", Fe = "bottom", je = "right", $e = "left", Yo = "auto", Pn = [Ne, Fe, je, $e], on = "start", Tn = "end", Cp = "clippingParents", Za = "viewport", pn = "popper", Ep = "reference", Qr = Pn.reduce(function(e, t) {
  return e.concat([t + "-" + on, t + "-" + Tn]);
}, []), Qo = [].concat(Pn, [Yo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + on, t + "-" + Tn]);
}, []), Sp = "beforeRead", kp = "read", Op = "afterRead", Tp = "beforeMain", Np = "main", $p = "afterMain", Ip = "beforeWrite", Pp = "write", Ap = "afterWrite", _p = [Sp, kp, Op, Tp, Np, $p, Ip, Pp, Ap];
function ot(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ge(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function rn(e) {
  var t = Ge(e).Element;
  return e instanceof t || e instanceof Element;
}
function Re(e) {
  var t = Ge(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Xo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ge(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Lp(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, a = t.elements[n];
    !Re(a) || !ot(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(l) {
      var s = r[l];
      s === !1 ? a.removeAttribute(l) : a.setAttribute(l, s === !0 ? "" : s);
    }));
  });
}
function Dp(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], a = t.attributes[o] || {}, l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = l.reduce(function(i, c) {
        return i[c] = "", i;
      }, {});
      !Re(r) || !ot(r) || (Object.assign(r.style, s), Object.keys(a).forEach(function(i) {
        r.removeAttribute(i);
      }));
    });
  };
}
var el = { name: "applyStyles", enabled: !0, phase: "write", fn: Lp, effect: Dp, requires: ["computeStyles"] };
function tt(e) {
  return e.split("-")[0];
}
var Rt = Math.max, Wn = Math.min, an = Math.round;
function ln(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (Re(e) && t) {
    var a = e.offsetHeight, l = e.offsetWidth;
    l > 0 && (o = an(n.width) / l || 1), a > 0 && (r = an(n.height) / a || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function Jo(e) {
  var t = ln(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function tl(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Xo(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function mt(e) {
  return Ge(e).getComputedStyle(e);
}
function xp(e) {
  return ["table", "td", "th"].indexOf(ot(e)) >= 0;
}
function _t(e) {
  return ((rn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function to(e) {
  return ot(e) === "html" ? e : e.assignedSlot || e.parentNode || (Xo(e) ? e.host : null) || _t(e);
}
function Xr(e) {
  return !Re(e) || mt(e).position === "fixed" ? null : e.offsetParent;
}
function Bp(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && Re(e)) {
    var o = mt(e);
    if (o.position === "fixed")
      return null;
  }
  var r = to(e);
  for (Xo(r) && (r = r.host); Re(r) && ["html", "body"].indexOf(ot(r)) < 0; ) {
    var a = mt(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function An(e) {
  for (var t = Ge(e), n = Xr(e); n && xp(n) && mt(n).position === "static"; )
    n = Xr(n);
  return n && (ot(n) === "html" || ot(n) === "body" && mt(n).position === "static") ? t : n || Bp(e) || t;
}
function Zo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function vn(e, t, n) {
  return Rt(e, Wn(t, n));
}
function Mp(e, t, n) {
  var o = vn(e, t, n);
  return o > n ? n : o;
}
function nl() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ol(e) {
  return Object.assign({}, nl(), e);
}
function rl(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Kp = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, ol(typeof e != "number" ? e : rl(e, Pn));
};
function zp(e) {
  var t, n = e.state, o = e.name, r = e.options, a = n.elements.arrow, l = n.modifiersData.popperOffsets, s = tt(n.placement), i = Zo(s), c = [$e, je].indexOf(s) >= 0, d = c ? "height" : "width";
  if (!(!a || !l)) {
    var v = Kp(r.padding, n), f = Jo(a), p = i === "y" ? Ne : $e, u = i === "y" ? Fe : je, h = n.rects.reference[d] + n.rects.reference[i] - l[i] - n.rects.popper[d], m = l[i] - n.rects.reference[i], b = An(a), S = b ? i === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, A = h / 2 - m / 2, L = v[p], $ = S - f[d] - v[u], w = S / 2 - f[d] / 2 + A, C = vn(L, w, $), D = i;
    n.modifiersData[o] = (t = {}, t[D] = C, t.centerOffset = C - w, t);
  }
}
function Rp(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !tl(t.elements.popper, r) || (t.elements.arrow = r));
}
var Fp = { name: "arrow", enabled: !0, phase: "main", fn: zp, effect: Rp, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function sn(e) {
  return e.split("-")[1];
}
var jp = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Hp(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: an(t * r) / r || 0, y: an(n * r) / r || 0 };
}
function Jr(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, a = e.variation, l = e.offsets, s = e.position, i = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, p = f === void 0 ? 0 : f, u = l.y, h = u === void 0 ? 0 : u, m = typeof d == "function" ? d({ x: p, y: h }) : { x: p, y: h };
  p = m.x, h = m.y;
  var b = l.hasOwnProperty("x"), S = l.hasOwnProperty("y"), A = $e, L = Ne, $ = window;
  if (c) {
    var w = An(n), C = "clientHeight", D = "clientWidth";
    if (w === Ge(n) && (w = _t(n), mt(w).position !== "static" && s === "absolute" && (C = "scrollHeight", D = "scrollWidth")), w = w, r === Ne || (r === $e || r === je) && a === Tn) {
      L = Fe;
      var T = v && w === $ && $.visualViewport ? $.visualViewport.height : w[C];
      h -= T - o.height, h *= i ? 1 : -1;
    }
    if (r === $e || (r === Ne || r === Fe) && a === Tn) {
      A = je;
      var x = v && w === $ && $.visualViewport ? $.visualViewport.width : w[D];
      p -= x - o.width, p *= i ? 1 : -1;
    }
  }
  var B = Object.assign({ position: s }, c && jp), ne = d === !0 ? Hp({ x: p, y: h }) : { x: p, y: h };
  if (p = ne.x, h = ne.y, i) {
    var Q;
    return Object.assign({}, B, (Q = {}, Q[L] = S ? "0" : "", Q[A] = b ? "0" : "", Q.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", Q));
  }
  return Object.assign({}, B, (t = {}, t[L] = S ? h + "px" : "", t[A] = b ? p + "px" : "", t.transform = "", t));
}
function Vp(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, a = n.adaptive, l = a === void 0 ? !0 : a, s = n.roundOffsets, i = s === void 0 ? !0 : s, c = { placement: tt(t.placement), variation: sn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Jr(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: l, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Jr(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var al = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Vp, data: {} }, Ln = { passive: !0 };
function Wp(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, l = o.resize, s = l === void 0 ? !0 : l, i = Ge(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, Ln);
  }), s && i.addEventListener("resize", n.update, Ln), function() {
    a && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Ln);
    }), s && i.removeEventListener("resize", n.update, Ln);
  };
}
var ll = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Wp, data: {} }, qp = { left: "right", right: "left", bottom: "top", top: "bottom" };
function xn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return qp[t];
  });
}
var Up = { start: "end", end: "start" };
function Zr(e) {
  return e.replace(/start|end/g, function(t) {
    return Up[t];
  });
}
function er(e) {
  var t = Ge(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function tr(e) {
  return ln(_t(e)).left + er(e).scrollLeft;
}
function Gp(e) {
  var t = Ge(e), n = _t(e), o = t.visualViewport, r = n.clientWidth, a = n.clientHeight, l = 0, s = 0;
  return o && (r = o.width, a = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = o.offsetLeft, s = o.offsetTop)), { width: r, height: a, x: l + tr(e), y: s };
}
function Yp(e) {
  var t, n = _t(e), o = er(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, a = Rt(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), l = Rt(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -o.scrollLeft + tr(e), i = -o.scrollTop;
  return mt(r || n).direction === "rtl" && (s += Rt(n.clientWidth, r ? r.clientWidth : 0) - a), { width: a, height: l, x: s, y: i };
}
function nr(e) {
  var t = mt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function il(e) {
  return ["html", "body", "#document"].indexOf(ot(e)) >= 0 ? e.ownerDocument.body : Re(e) && nr(e) ? e : il(to(e));
}
function gn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = il(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ge(o), l = r ? [a].concat(a.visualViewport || [], nr(o) ? o : []) : o, s = t.concat(l);
  return r ? s : s.concat(gn(to(l)));
}
function No(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Qp(e) {
  var t = ln(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function ea(e, t) {
  return t === Za ? No(Gp(e)) : rn(t) ? Qp(t) : No(Yp(_t(e)));
}
function Xp(e) {
  var t = gn(to(e)), n = ["absolute", "fixed"].indexOf(mt(e).position) >= 0, o = n && Re(e) ? An(e) : e;
  return rn(o) ? t.filter(function(r) {
    return rn(r) && tl(r, o) && ot(r) !== "body";
  }) : [];
}
function Jp(e, t, n) {
  var o = t === "clippingParents" ? Xp(e) : [].concat(t), r = [].concat(o, [n]), a = r[0], l = r.reduce(function(s, i) {
    var c = ea(e, i);
    return s.top = Rt(c.top, s.top), s.right = Wn(c.right, s.right), s.bottom = Wn(c.bottom, s.bottom), s.left = Rt(c.left, s.left), s;
  }, ea(e, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function sl(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? tt(o) : null, a = o ? sn(o) : null, l = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, i;
  switch (r) {
    case Ne:
      i = { x: l, y: t.y - n.height };
      break;
    case Fe:
      i = { x: l, y: t.y + t.height };
      break;
    case je:
      i = { x: t.x + t.width, y: s };
      break;
    case $e:
      i = { x: t.x - n.width, y: s };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var c = r ? Zo(r) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (a) {
      case on:
        i[c] = i[c] - (t[d] / 2 - n[d] / 2);
        break;
      case Tn:
        i[c] = i[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return i;
}
function Nn(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, a = n.boundary, l = a === void 0 ? Cp : a, s = n.rootBoundary, i = s === void 0 ? Za : s, c = n.elementContext, d = c === void 0 ? pn : c, v = n.altBoundary, f = v === void 0 ? !1 : v, p = n.padding, u = p === void 0 ? 0 : p, h = ol(typeof u != "number" ? u : rl(u, Pn)), m = d === pn ? Ep : pn, b = e.rects.popper, S = e.elements[f ? m : d], A = Jp(rn(S) ? S : S.contextElement || _t(e.elements.popper), l, i), L = ln(e.elements.reference), $ = sl({ reference: L, element: b, strategy: "absolute", placement: r }), w = No(Object.assign({}, b, $)), C = d === pn ? w : L, D = { top: A.top - C.top + h.top, bottom: C.bottom - A.bottom + h.bottom, left: A.left - C.left + h.left, right: C.right - A.right + h.right }, T = e.modifiersData.offset;
  if (d === pn && T) {
    var x = T[r];
    Object.keys(D).forEach(function(B) {
      var ne = [je, Fe].indexOf(B) >= 0 ? 1 : -1, Q = [Ne, Fe].indexOf(B) >= 0 ? "y" : "x";
      D[B] += x[Q] * ne;
    });
  }
  return D;
}
function Zp(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, a = n.rootBoundary, l = n.padding, s = n.flipVariations, i = n.allowedAutoPlacements, c = i === void 0 ? Qo : i, d = sn(o), v = d ? s ? Qr : Qr.filter(function(u) {
    return sn(u) === d;
  }) : Pn, f = v.filter(function(u) {
    return c.indexOf(u) >= 0;
  });
  f.length === 0 && (f = v);
  var p = f.reduce(function(u, h) {
    return u[h] = Nn(e, { placement: h, boundary: r, rootBoundary: a, padding: l })[tt(h)], u;
  }, {});
  return Object.keys(p).sort(function(u, h) {
    return p[u] - p[h];
  });
}
function eh(e) {
  if (tt(e) === Yo)
    return [];
  var t = xn(e);
  return [Zr(e), t, Zr(t)];
}
function th(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, a = r === void 0 ? !0 : r, l = n.altAxis, s = l === void 0 ? !0 : l, i = n.fallbackPlacements, c = n.padding, d = n.boundary, v = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, u = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, m = t.options.placement, b = tt(m), S = b === m, A = i || (S || !u ? [xn(m)] : eh(m)), L = [m].concat(A).reduce(function(_e, ie) {
      return _e.concat(tt(ie) === Yo ? Zp(t, { placement: ie, boundary: d, rootBoundary: v, padding: c, flipVariations: u, allowedAutoPlacements: h }) : ie);
    }, []), $ = t.rects.reference, w = t.rects.popper, C = /* @__PURE__ */ new Map(), D = !0, T = L[0], x = 0; x < L.length; x++) {
      var B = L[x], ne = tt(B), Q = sn(B) === on, K = [Ne, Fe].indexOf(ne) >= 0, V = K ? "width" : "height", H = Nn(t, { placement: B, boundary: d, rootBoundary: v, altBoundary: f, padding: c }), N = K ? Q ? je : $e : Q ? Fe : Ne;
      $[V] > w[V] && (N = xn(N));
      var R = xn(N), X = [];
      if (a && X.push(H[ne] <= 0), s && X.push(H[N] <= 0, H[R] <= 0), X.every(function(_e) {
        return _e;
      })) {
        T = B, D = !1;
        break;
      }
      C.set(B, X);
    }
    if (D)
      for (var Z = u ? 3 : 1, xe = function(_e) {
        var ie = L.find(function(Oe) {
          var Be = C.get(Oe);
          if (Be)
            return Be.slice(0, _e).every(function(de) {
              return de;
            });
        });
        if (ie)
          return T = ie, "break";
      }, ke = Z; ke > 0; ke--) {
        var Ae = xe(ke);
        if (Ae === "break")
          break;
      }
    t.placement !== T && (t.modifiersData[o]._skip = !0, t.placement = T, t.reset = !0);
  }
}
var nh = { name: "flip", enabled: !0, phase: "main", fn: th, requiresIfExists: ["offset"], data: { _skip: !1 } };
function ta(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function na(e) {
  return [Ne, je, Fe, $e].some(function(t) {
    return e[t] >= 0;
  });
}
function oh(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, a = t.modifiersData.preventOverflow, l = Nn(t, { elementContext: "reference" }), s = Nn(t, { altBoundary: !0 }), i = ta(l, o), c = ta(s, r, a), d = na(i), v = na(c);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: v }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": v });
}
var rh = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: oh };
function ah(e, t, n) {
  var o = tt(e), r = [$e, Ne].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, l = a[0], s = a[1];
  return l = l || 0, s = (s || 0) * r, [$e, je].indexOf(o) >= 0 ? { x: s, y: l } : { x: l, y: s };
}
function lh(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, a = r === void 0 ? [0, 0] : r, l = Qo.reduce(function(d, v) {
    return d[v] = ah(v, t.rects, a), d;
  }, {}), s = l[t.placement], i = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = l;
}
var ih = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: lh };
function sh(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = sl({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var ul = { name: "popperOffsets", enabled: !0, phase: "read", fn: sh, data: {} };
function uh(e) {
  return e === "x" ? "y" : "x";
}
function dh(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, a = r === void 0 ? !0 : r, l = n.altAxis, s = l === void 0 ? !1 : l, i = n.boundary, c = n.rootBoundary, d = n.altBoundary, v = n.padding, f = n.tether, p = f === void 0 ? !0 : f, u = n.tetherOffset, h = u === void 0 ? 0 : u, m = Nn(t, { boundary: i, rootBoundary: c, padding: v, altBoundary: d }), b = tt(t.placement), S = sn(t.placement), A = !S, L = Zo(b), $ = uh(L), w = t.modifiersData.popperOffsets, C = t.rects.reference, D = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, x = typeof T == "number" ? { mainAxis: T, altAxis: T } : Object.assign({ mainAxis: 0, altAxis: 0 }, T), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ne = { x: 0, y: 0 };
  if (w) {
    if (a) {
      var Q, K = L === "y" ? Ne : $e, V = L === "y" ? Fe : je, H = L === "y" ? "height" : "width", N = w[L], R = N + m[K], X = N - m[V], Z = p ? -D[H] / 2 : 0, xe = S === on ? C[H] : D[H], ke = S === on ? -D[H] : -C[H], Ae = t.elements.arrow, _e = p && Ae ? Jo(Ae) : { width: 0, height: 0 }, ie = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : nl(), Oe = ie[K], Be = ie[V], de = vn(0, C[H], _e[H]), Ye = A ? C[H] / 2 - Z - de - Oe - x.mainAxis : xe - de - Oe - x.mainAxis, Qe = A ? -C[H] / 2 + Z + de + Be + x.mainAxis : ke + de + Be + x.mainAxis, Xe = t.elements.arrow && An(t.elements.arrow), Le = Xe ? L === "y" ? Xe.clientTop || 0 : Xe.clientLeft || 0 : 0, at = (Q = B == null ? void 0 : B[L]) != null ? Q : 0, Lt = N + Ye - at - Le, wt = N + Qe - at, Je = vn(p ? Wn(R, Lt) : R, N, p ? Rt(X, wt) : X);
      w[L] = Je, ne[L] = Je - N;
    }
    if (s) {
      var He, lt = L === "x" ? Ne : $e, Dt = L === "x" ? Fe : je, Te = w[$], Ve = $ === "y" ? "height" : "width", Ct = Te + m[lt], it = Te - m[Dt], E = [Ne, $e].indexOf(b) !== -1, G = (He = B == null ? void 0 : B[$]) != null ? He : 0, me = E ? Ct : Te - C[Ve] - D[Ve] - G + x.altAxis, ce = E ? Te + C[Ve] + D[Ve] - G - x.altAxis : it, st = p && E ? Mp(me, Te, ce) : vn(p ? me : Ct, Te, p ? ce : it);
      w[$] = st, ne[$] = st - Te;
    }
    t.modifiersData[o] = ne;
  }
}
var ch = { name: "preventOverflow", enabled: !0, phase: "main", fn: dh, requiresIfExists: ["offset"] };
function fh(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function ph(e) {
  return e === Ge(e) || !Re(e) ? er(e) : fh(e);
}
function hh(e) {
  var t = e.getBoundingClientRect(), n = an(t.width) / e.offsetWidth || 1, o = an(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function vh(e, t, n) {
  n === void 0 && (n = !1);
  var o = Re(t), r = Re(t) && hh(t), a = _t(t), l = ln(e, r), s = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((ot(t) !== "body" || nr(a)) && (s = ph(t)), Re(t) ? (i = ln(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : a && (i.x = tr(a))), { x: l.left + s.scrollLeft - i.x, y: l.top + s.scrollTop - i.y, width: l.width, height: l.height };
}
function gh(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function r(a) {
    n.add(a.name);
    var l = [].concat(a.requires || [], a.requiresIfExists || []);
    l.forEach(function(s) {
      if (!n.has(s)) {
        var i = t.get(s);
        i && r(i);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || r(a);
  }), o;
}
function mh(e) {
  var t = gh(e);
  return _p.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function yh(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function bh(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var oa = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ra() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function or(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, a = r === void 0 ? oa : r;
  return function(l, s, i) {
    i === void 0 && (i = a);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, oa, a), modifiersData: {}, elements: { reference: l, popper: s }, attributes: {}, styles: {} }, d = [], v = !1, f = { state: c, setOptions: function(h) {
      var m = typeof h == "function" ? h(c.options) : h;
      u(), c.options = Object.assign({}, a, c.options, m), c.scrollParents = { reference: rn(l) ? gn(l) : l.contextElement ? gn(l.contextElement) : [], popper: gn(s) };
      var b = mh(bh([].concat(o, c.options.modifiers)));
      return c.orderedModifiers = b.filter(function(S) {
        return S.enabled;
      }), p(), f.update();
    }, forceUpdate: function() {
      if (!v) {
        var h = c.elements, m = h.reference, b = h.popper;
        if (ra(m, b)) {
          c.rects = { reference: vh(m, An(b), c.options.strategy === "fixed"), popper: Jo(b) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(D) {
            return c.modifiersData[D.name] = Object.assign({}, D.data);
          });
          for (var S = 0; S < c.orderedModifiers.length; S++) {
            if (c.reset === !0) {
              c.reset = !1, S = -1;
              continue;
            }
            var A = c.orderedModifiers[S], L = A.fn, $ = A.options, w = $ === void 0 ? {} : $, C = A.name;
            typeof L == "function" && (c = L({ state: c, options: w, name: C, instance: f }) || c);
          }
        }
      }
    }, update: yh(function() {
      return new Promise(function(h) {
        f.forceUpdate(), h(c);
      });
    }), destroy: function() {
      u(), v = !0;
    } };
    if (!ra(l, s))
      return f;
    f.setOptions(i).then(function(h) {
      !v && i.onFirstUpdate && i.onFirstUpdate(h);
    });
    function p() {
      c.orderedModifiers.forEach(function(h) {
        var m = h.name, b = h.options, S = b === void 0 ? {} : b, A = h.effect;
        if (typeof A == "function") {
          var L = A({ state: c, name: m, instance: f, options: S }), $ = function() {
          };
          d.push(L || $);
        }
      });
    }
    function u() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return f;
  };
}
or();
var wh = [ll, ul, al, el];
or({ defaultModifiers: wh });
var Ch = [ll, ul, al, el, ih, nh, ch, Fp, rh], Eh = or({ defaultModifiers: Ch });
const dl = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, aa = (e, t) => {
  for (const n of e)
    if (!Sh(n, t))
      return n;
}, Sh = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, kh = (e) => {
  const t = dl(e), n = aa(t, e), o = aa(t.reverse(), e);
  return [n, o];
}, Oh = (e) => e instanceof HTMLInputElement && "select" in e, kt = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Oh(e) && t && e.select();
  }
};
function la(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Th = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = la(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, a;
      e = la(e, o), (a = (r = e[0]) == null ? void 0 : r.resume) == null || a.call(r);
    }
  };
}, Nh = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (kt(o, t), document.activeElement !== n)
      return;
}, ia = Th(), fo = "focus-trap.focus-after-trapped", po = "focus-trap.focus-after-released", sa = {
  cancelable: !0,
  bubbles: !1
}, ua = "focusAfterTrapped", da = "focusAfterReleased", $h = Symbol("elFocusTrap"), Ih = ee({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ua,
    da,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = P();
    let o, r;
    Tf((p) => {
      e.trapped && !a.paused && t("release-requested", p);
    });
    const a = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, l = (p) => {
      if (!e.loop && !e.trapped || a.paused)
        return;
      const { key: u, altKey: h, ctrlKey: m, metaKey: b, currentTarget: S, shiftKey: A } = p, { loop: L } = e, $ = u === ze.tab && !h && !m && !b, w = document.activeElement;
      if ($ && w) {
        const C = S, [D, T] = kh(C);
        D && T ? !A && w === T ? (p.preventDefault(), L && kt(D, !0), t("focusout-prevented")) : A && [D, C].includes(w) && (p.preventDefault(), L && kt(T, !0), t("focusout-prevented")) : w === C && (p.preventDefault(), t("focusout-prevented"));
      }
    };
    Ee($h, {
      focusTrapRef: n,
      onKeydown: l
    }), z(() => e.focusTrapEl, (p) => {
      p && (n.value = p);
    }, { immediate: !0 }), z([n], ([p], [u]) => {
      p && (p.addEventListener("keydown", l), p.addEventListener("focusin", c), p.addEventListener("focusout", d)), u && (u.removeEventListener("keydown", l), u.removeEventListener("focusin", c), u.removeEventListener("focusout", d));
    });
    const s = (p) => {
      t(ua, p);
    }, i = (p) => t(da, p), c = (p) => {
      const u = g(n);
      if (!u)
        return;
      const h = p.target, m = h && u.contains(h);
      m && t("focusin", p), !a.paused && e.trapped && (m ? r = h : kt(r, !0));
    }, d = (p) => {
      const u = g(n);
      if (!(a.paused || !u))
        if (e.trapped) {
          const h = p.relatedTarget;
          !Qn(h) && !u.contains(h) && setTimeout(() => {
            !a.paused && e.trapped && kt(r, !0);
          }, 0);
        } else {
          const h = p.target;
          h && u.contains(h) || t("focusout", p);
        }
    };
    async function v() {
      await J();
      const p = g(n);
      if (p) {
        ia.push(a);
        const u = document.activeElement;
        if (o = u, !p.contains(u)) {
          const m = new Event(fo, sa);
          p.addEventListener(fo, s), p.dispatchEvent(m), m.defaultPrevented || J(() => {
            let b = e.focusStartEl;
            pt(b) || (kt(b), document.activeElement !== b && (b = "first")), b === "first" && Nh(dl(p), !0), (document.activeElement === u || b === "container") && kt(p);
          });
        }
      }
    }
    function f() {
      const p = g(n);
      if (p) {
        p.removeEventListener(fo, s);
        const u = new Event(po, sa);
        p.addEventListener(po, i), p.dispatchEvent(u), u.defaultPrevented || kt(o != null ? o : document.body, !0), p.removeEventListener(po, s), ia.remove(a);
      }
    }
    return Pe(() => {
      e.trapped && v(), z(() => e.trapped, (p) => {
        p ? v() : f();
      });
    }), It(() => {
      e.trapped && f();
    }), {
      onKeydown: l
    };
  }
});
function Ph(e, t, n, o, r, a) {
  return oe(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Ah = /* @__PURE__ */ le(Ih, [["render", Ph], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const _h = ["fixed", "absolute"], Lh = Se({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: se(Array),
    default: () => []
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: Qo,
    default: "bottom"
  },
  popperOptions: {
    type: se(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: _h,
    default: "absolute"
  }
}), cl = Se({
  ...Lh,
  id: String,
  style: { type: se([String, Array, Object]) },
  className: { type: se([String, Array, Object]) },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: se([String, Array, Object])
  },
  popperStyle: {
    type: se([String, Array, Object])
  },
  referenceEl: {
    type: se(Object)
  },
  triggerTargetEl: {
    type: se(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), Dh = [
  "mouseenter",
  "mouseleave",
  "focus",
  "blur",
  "close"
], ca = (e, t) => {
  const { placement: n, strategy: o, popperOptions: r } = e, a = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: Bh(e)
  };
  return Mh(a, t), Kh(a, r == null ? void 0 : r.modifiers), a;
}, xh = (e) => {
  if (!!ve)
    return Tt(e);
};
function Bh(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t != null ? t : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: o != null ? o : []
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n,
        adaptive: n
      }
    }
  ];
}
function Mh(e, { arrowEl: t, arrowOffset: n }) {
  e.modifiers.push({
    name: "arrow",
    options: {
      element: t,
      padding: n != null ? n : 5
    }
  });
}
function Kh(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t != null ? t : []]);
}
const zh = {
  name: "ElPopperContent"
}, Rh = /* @__PURE__ */ ee({
  ...zh,
  props: cl,
  emits: Dh,
  setup(e, { expose: t, emit: n }) {
    const o = e, { popperInstanceRef: r, contentRef: a, triggerRef: l, role: s } = ae(Wo, void 0), i = ae(On, void 0), { nextZIndex: c } = Lf(), d = te("popper"), v = P(), f = P("first"), p = P(), u = P();
    Ee(ja, {
      arrowRef: p,
      arrowOffset: u
    }), i && (i.addInputId || i.removeInputId) && Ee(On, {
      ...i,
      addInputId: En,
      removeInputId: En
    });
    const h = P(o.zIndex || c()), m = P(!1);
    let b;
    const S = k(() => xh(o.referenceEl) || g(l)), A = k(() => [{ zIndex: g(h) }, o.popperStyle]), L = k(() => [
      d.b(),
      d.is("pure", o.pure),
      d.is(o.effect),
      o.popperClass
    ]), $ = k(() => s && s.value === "dialog" ? "false" : void 0), w = ({ referenceEl: K, popperContentEl: V, arrowEl: H }) => {
      const N = ca(o, {
        arrowEl: H,
        arrowOffset: g(u)
      });
      return Eh(K, V, N);
    }, C = (K = !0) => {
      var V;
      (V = g(r)) == null || V.update(), K && (h.value = o.zIndex || c());
    }, D = () => {
      var K, V;
      const H = { name: "eventListeners", enabled: o.visible };
      (V = (K = g(r)) == null ? void 0 : K.setOptions) == null || V.call(K, (N) => ({
        ...N,
        modifiers: [...N.modifiers || [], H]
      })), C(!1), o.visible && o.focusOnShow ? m.value = !0 : o.visible === !1 && (m.value = !1);
    }, T = () => {
      n("focus");
    }, x = () => {
      f.value = "first", n("blur");
    }, B = (K) => {
      var V;
      o.visible && !m.value && (K.target && (f.value = K.target), m.value = !0, K.relatedTarget && ((V = K.relatedTarget) == null || V.focus()));
    }, ne = () => {
      o.trapping || (m.value = !1);
    }, Q = () => {
      m.value = !1, n("close");
    };
    return Pe(() => {
      let K;
      z(S, (V) => {
        var H;
        K == null || K();
        const N = g(r);
        if ((H = N == null ? void 0 : N.destroy) == null || H.call(N), V) {
          const R = g(v);
          a.value = R, r.value = w({
            referenceEl: V,
            popperContentEl: R,
            arrowEl: g(p)
          }), K = z(() => V.getBoundingClientRect(), () => C(), {
            immediate: !0
          });
        } else
          r.value = void 0;
      }, {
        immediate: !0
      }), z(() => o.triggerTargetEl, (V, H) => {
        b == null || b(), b = void 0;
        const N = g(V || v.value), R = g(H || v.value);
        if (kn(N)) {
          const { ariaLabel: X, id: Z } = Wt(o);
          b = z([s, X, $, Z], (xe) => {
            ["role", "aria-label", "aria-modal", "id"].forEach((ke, Ae) => {
              Qn(xe[Ae]) ? N.removeAttribute(ke) : N.setAttribute(ke, xe[Ae]);
            });
          }, { immediate: !0 });
        }
        kn(R) && ["role", "aria-label", "aria-modal", "id"].forEach((X) => {
          R.removeAttribute(X);
        });
      }, { immediate: !0 }), z(() => o.visible, D, { immediate: !0 }), z(() => ca(o, {
        arrowEl: g(p),
        arrowOffset: g(u)
      }), (V) => {
        var H;
        return (H = r.value) == null ? void 0 : H.setOptions(V);
      });
    }), It(() => {
      b == null || b(), b = void 0;
    }), t({
      popperContentRef: v,
      popperInstanceRef: r,
      updatePopper: C,
      contentStyle: A
    }), (K, V) => (O(), M("div", {
      ref_key: "popperContentRef",
      ref: v,
      style: Ce(g(A)),
      class: _(g(L)),
      tabindex: "-1",
      onMouseenter: V[0] || (V[0] = (H) => K.$emit("mouseenter", H)),
      onMouseleave: V[1] || (V[1] = (H) => K.$emit("mouseleave", H))
    }, [
      pe(g(Ah), {
        trapped: m.value,
        "trap-on-focus-in": !0,
        "focus-trap-el": v.value,
        "focus-start-el": f.value,
        onFocusAfterTrapped: T,
        onFocusAfterReleased: x,
        onFocusin: B,
        onFocusoutPrevented: ne,
        onReleaseRequested: Q
      }, {
        default: U(() => [
          oe(K.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
    ], 38));
  }
});
var Fh = /* @__PURE__ */ le(Rh, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const jh = At(pp), Hh = te("tooltip"), rr = Se({
  ...If,
  ...cl,
  appendTo: {
    type: se([String, Object]),
    default: Ua
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: se(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${Hh.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), fl = Se({
  ...Ja,
  disabled: Boolean,
  trigger: {
    type: se([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: se(Array),
    default: () => [ze.enter, ze.space]
  }
}), Vh = Se({
  openDelay: {
    type: Number
  },
  visibleArrow: {
    type: Boolean,
    default: void 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  showArrow: {
    type: Boolean,
    default: !0
  }
}), ar = Symbol("elTooltip"), Wh = ee({
  name: "ElTooltipContent",
  components: {
    ElPopperContent: Fh
  },
  inheritAttrs: !1,
  props: rr,
  setup(e) {
    const t = P(null), n = P(!1), o = P(!1), r = P(!1), a = P(!1), {
      controlled: l,
      id: s,
      open: i,
      trigger: c,
      onClose: d,
      onOpen: v,
      onShow: f,
      onHide: p,
      onBeforeShow: u,
      onBeforeHide: h
    } = ae(ar, void 0), m = k(() => process.env.NODE_ENV === "test" ? !0 : e.persistent);
    It(() => {
      a.value = !0;
    });
    const b = k(() => g(m) ? !0 : g(i)), S = k(() => e.disabled ? !1 : g(i)), A = k(() => {
      var K;
      return (K = e.style) != null ? K : {};
    }), L = k(() => !g(i)), $ = () => {
      p();
    }, w = () => {
      if (g(l))
        return !0;
    }, C = dt(w, () => {
      e.enterable && g(c) === "hover" && v();
    }), D = dt(w, () => {
      g(c) === "hover" && d();
    }), T = () => {
      var K, V;
      (V = (K = t.value) == null ? void 0 : K.updatePopper) == null || V.call(K), u == null || u();
    }, x = () => {
      h == null || h();
    }, B = () => {
      f(), Q = Wd(k(() => {
        var K;
        return (K = t.value) == null ? void 0 : K.popperContentRef;
      }), () => {
        if (g(l))
          return;
        g(c) !== "hover" && d();
      });
    }, ne = () => {
      e.virtualTriggering || d();
    };
    let Q;
    return z(() => g(i), (K) => {
      K || Q == null || Q();
    }, {
      flush: "post"
    }), {
      ariaHidden: L,
      entering: o,
      leaving: r,
      id: s,
      intermediateOpen: n,
      contentStyle: A,
      contentRef: t,
      destroyed: a,
      shouldRender: b,
      shouldShow: S,
      onClose: d,
      open: i,
      onAfterShow: B,
      onBeforeEnter: T,
      onBeforeLeave: x,
      onContentEnter: C,
      onContentLeave: D,
      onTransitionLeave: $,
      onBlur: ne
    };
  }
});
function qh(e, t, n, o, r, a) {
  const l = ue("el-popper-content");
  return O(), W(Ll, {
    disabled: !e.teleported,
    to: e.appendTo
  }, [
    pe($n, {
      name: e.transition,
      onAfterLeave: e.onTransitionLeave,
      onBeforeEnter: e.onBeforeEnter,
      onAfterEnter: e.onAfterShow,
      onBeforeLeave: e.onBeforeLeave
    }, {
      default: U(() => [
        e.shouldRender ? be((O(), W(l, Kt({
          key: 0,
          id: e.id,
          ref: "contentRef"
        }, e.$attrs, {
          "aria-label": e.ariaLabel,
          "aria-hidden": e.ariaHidden,
          "boundaries-padding": e.boundariesPadding,
          "fallback-placements": e.fallbackPlacements,
          "gpu-acceleration": e.gpuAcceleration,
          offset: e.offset,
          placement: e.placement,
          "popper-options": e.popperOptions,
          strategy: e.strategy,
          effect: e.effect,
          enterable: e.enterable,
          pure: e.pure,
          "popper-class": e.popperClass,
          "popper-style": [e.popperStyle, e.contentStyle],
          "reference-el": e.referenceEl,
          "trigger-target-el": e.triggerTargetEl,
          visible: e.shouldShow,
          "z-index": e.zIndex,
          onMouseenter: e.onContentEnter,
          onMouseleave: e.onContentLeave,
          onBlur: e.onBlur,
          onClose: e.onClose
        }), {
          default: U(() => [
            j(" Workaround bug #6378 "),
            e.destroyed ? j("v-if", !0) : oe(e.$slots, "default", { key: 0 })
          ]),
          _: 3
        }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onBlur", "onClose"])), [
          [ht, e.shouldShow]
        ]) : j("v-if", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter", "onBeforeLeave"])
  ], 8, ["disabled", "to"]);
}
var Uh = /* @__PURE__ */ le(Wh, [["render", qh], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const Gh = (e, t) => So(e) ? e.includes(t) : e === t, Yt = (e, t, n) => (o) => {
  Gh(g(e), t) && n(o);
}, Yh = ee({
  name: "ElTooltipTrigger",
  components: {
    ElPopperTrigger: wp
  },
  props: fl,
  setup(e) {
    const t = te("tooltip"), { controlled: n, id: o, open: r, onOpen: a, onClose: l, onToggle: s } = ae(ar, void 0), i = P(null), c = () => {
      if (g(n) || e.disabled)
        return !0;
    }, d = jt(e, "trigger"), v = dt(c, Yt(d, "hover", a)), f = dt(c, Yt(d, "hover", l)), p = dt(c, Yt(d, "click", (S) => {
      S.button === 0 && s(S);
    })), u = dt(c, Yt(d, "focus", a)), h = dt(c, Yt(d, "focus", l)), m = dt(c, Yt(d, "contextmenu", (S) => {
      S.preventDefault(), s(S);
    })), b = dt(c, (S) => {
      const { code: A } = S;
      e.triggerKeys.includes(A) && (S.preventDefault(), s(S));
    });
    return {
      onBlur: h,
      onContextMenu: m,
      onFocus: u,
      onMouseenter: v,
      onMouseleave: f,
      onClick: p,
      onKeydown: b,
      open: r,
      id: o,
      triggerRef: i,
      ns: t
    };
  }
});
function Qh(e, t, n, o, r, a) {
  const l = ue("el-popper-trigger");
  return O(), W(l, {
    id: e.id,
    "virtual-ref": e.virtualRef,
    open: e.open,
    "virtual-triggering": e.virtualTriggering,
    class: _(e.ns.e("trigger")),
    onBlur: e.onBlur,
    onClick: e.onClick,
    onContextmenu: e.onContextMenu,
    onFocus: e.onFocus,
    onMouseenter: e.onMouseenter,
    onMouseleave: e.onMouseleave,
    onKeydown: e.onKeydown
  }, {
    default: U(() => [
      oe(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}
var Xh = /* @__PURE__ */ le(Yh, [["render", Qh], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const { useModelToggleProps: Jh, useModelToggle: Zh, useModelToggleEmits: ev } = kf("visible"), tv = ee({
  name: "ElTooltip",
  components: {
    ElPopper: jh,
    ElPopperArrow: gp,
    ElTooltipContent: Uh,
    ElTooltipTrigger: Xh
  },
  props: {
    ...Ya,
    ...Jh,
    ...rr,
    ...fl,
    ...Qa,
    ...Vh
  },
  emits: [
    ...ev,
    "before-show",
    "before-hide",
    "show",
    "hide",
    "open",
    "close"
  ],
  setup(e, { emit: t }) {
    $f();
    const n = k(() => (ko(e.openDelay) || we("ElTooltip", "open-delay is about to be deprecated in the next major version, please use `show-after` instead"), e.openDelay || e.showAfter)), o = k(() => (ko(e.visibleArrow) || we("ElTooltip", "`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead"), Cn(e.visibleArrow) ? e.visibleArrow : e.showArrow)), r = Wa(), a = P(null), l = P(null), s = () => {
      var b;
      const S = g(a);
      S && ((b = S.popperInstanceRef) == null || b.update());
    }, i = P(!1), c = P(void 0), { show: d, hide: v, hasUpdateHandler: f } = Zh({
      indicator: i,
      toggleReason: c
    }), { onOpen: p, onClose: u } = Pf({
      showAfter: n,
      hideAfter: jt(e, "hideAfter"),
      open: d,
      close: v
    }), h = k(() => Cn(e.visible) && !f.value);
    Ee(ar, {
      controlled: h,
      id: r,
      open: Dl(i),
      trigger: jt(e, "trigger"),
      onOpen: (b) => {
        p(b);
      },
      onClose: (b) => {
        u(b);
      },
      onToggle: (b) => {
        g(i) ? u(b) : p(b);
      },
      onShow: () => {
        t("show", c.value);
      },
      onHide: () => {
        t("hide", c.value);
      },
      onBeforeShow: () => {
        t("before-show", c.value);
      },
      onBeforeHide: () => {
        t("before-hide", c.value);
      },
      updatePopper: s
    }), z(() => e.disabled, (b) => {
      b && i.value && (i.value = !1);
    });
    const m = () => {
      var b, S;
      const A = (S = (b = l.value) == null ? void 0 : b.contentRef) == null ? void 0 : S.popperContentRef;
      return A && A.contains(document.activeElement);
    };
    return xl(() => i.value && v()), {
      compatShowAfter: n,
      compatShowArrow: o,
      popperRef: a,
      contentRef: l,
      open: i,
      hide: v,
      isFocusInsideContent: m,
      updatePopper: s,
      onOpen: p,
      onClose: u
    };
  }
}), nv = ["innerHTML"], ov = { key: 1 };
function rv(e, t, n, o, r, a) {
  const l = ue("el-tooltip-trigger"), s = ue("el-popper-arrow"), i = ue("el-tooltip-content"), c = ue("el-popper");
  return O(), W(c, {
    ref: "popperRef",
    role: e.role
  }, {
    default: U(() => [
      pe(l, {
        disabled: e.disabled,
        trigger: e.trigger,
        "trigger-keys": e.triggerKeys,
        "virtual-ref": e.virtualRef,
        "virtual-triggering": e.virtualTriggering
      }, {
        default: U(() => [
          e.$slots.default ? oe(e.$slots, "default", { key: 0 }) : j("v-if", !0)
        ]),
        _: 3
      }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
      pe(i, {
        ref: "contentRef",
        "aria-label": e.ariaLabel,
        "boundaries-padding": e.boundariesPadding,
        content: e.content,
        disabled: e.disabled,
        effect: e.effect,
        enterable: e.enterable,
        "fallback-placements": e.fallbackPlacements,
        "hide-after": e.hideAfter,
        "gpu-acceleration": e.gpuAcceleration,
        offset: e.offset,
        persistent: e.persistent,
        "popper-class": e.popperClass,
        "popper-style": e.popperStyle,
        placement: e.placement,
        "popper-options": e.popperOptions,
        pure: e.pure,
        "raw-content": e.rawContent,
        "reference-el": e.referenceEl,
        "trigger-target-el": e.triggerTargetEl,
        "show-after": e.compatShowAfter,
        strategy: e.strategy,
        teleported: e.teleported,
        transition: e.transition,
        "virtual-triggering": e.virtualTriggering,
        "z-index": e.zIndex,
        "append-to": e.appendTo
      }, {
        default: U(() => [
          oe(e.$slots, "content", {}, () => [
            e.rawContent ? (O(), M("span", {
              key: 0,
              innerHTML: e.content
            }, null, 8, nv)) : (O(), M("span", ov, ye(e.content), 1))
          ]),
          e.compatShowArrow ? (O(), W(s, {
            key: 0,
            "arrow-offset": e.arrowOffset
          }, null, 8, ["arrow-offset"])) : j("v-if", !0)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
    ]),
    _: 3
  }, 8, ["role"]);
}
var av = /* @__PURE__ */ le(tv, [["render", rv], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const lv = At(av), Ot = /* @__PURE__ */ new Map();
let fa;
ve && (document.addEventListener("mousedown", (e) => fa = e), document.addEventListener("mouseup", (e) => {
  for (const t of Ot.values())
    for (const { documentHandler: n } of t)
      n(e, fa);
}));
function pa(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : kn(t.arg) && n.push(t.arg), function(o, r) {
    const a = t.instance.popperRef, l = o.target, s = r == null ? void 0 : r.target, i = !t || !t.instance, c = !l || !s, d = e.contains(l) || e.contains(s), v = e === l, f = n.length && n.some((u) => u == null ? void 0 : u.contains(l)) || n.length && n.includes(s), p = a && (a.contains(l) || a.contains(s));
    i || c || d || v || f || p || t.value(o, r);
  };
}
const iv = {
  beforeMount(e, t) {
    Ot.has(e) || Ot.set(e, []), Ot.get(e).push({
      documentHandler: pa(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Ot.has(e) || Ot.set(e, []);
    const n = Ot.get(e), o = n.findIndex((a) => a.bindingFn === t.oldValue), r = {
      documentHandler: pa(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    Ot.delete(e);
  }
}, sv = {
  modelValue: {
    type: Array,
    default: () => []
  },
  disabled: Boolean,
  min: {
    type: Number,
    default: void 0
  },
  max: {
    type: Number,
    default: void 0
  },
  size: qo,
  id: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  fill: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: void 0
  },
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, pl = {
  modelValue: {
    type: [Number, String, Boolean],
    default: () => {
    }
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: qo,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, dn = () => {
  const { form: e, formItem: t } = Uo(), n = ae("CheckboxGroup", {}), o = k(() => n && (n == null ? void 0 : n.name) === "ElCheckboxGroup"), r = k(() => t == null ? void 0 : t.size);
  return {
    isGroup: o,
    checkboxGroup: n,
    elForm: e,
    elFormItemSize: r,
    elFormItem: t
  };
}, uv = (e, { elFormItem: t }) => {
  const { inputId: n, isLabeledByFormItem: o } = Go(e, {
    formItemContext: t
  });
  return {
    isLabeledByFormItem: o,
    groupId: n
  };
}, dv = (e) => {
  const t = P(!1), { emit: n } = Ie(), { isGroup: o, checkboxGroup: r, elFormItem: a } = dn(), l = P(!1);
  return {
    model: k({
      get() {
        var i, c;
        return o.value ? (i = r.modelValue) == null ? void 0 : i.value : (c = e.modelValue) != null ? c : t.value;
      },
      set(i) {
        var c;
        o.value && Array.isArray(i) ? (l.value = r.max !== void 0 && i.length > r.max.value, l.value === !1 && ((c = r == null ? void 0 : r.changeEvent) == null || c.call(r, i))) : (n(he, i), t.value = i);
      }
    }),
    isGroup: o,
    isLimitExceeded: l,
    elFormItem: a
  };
}, cv = (e, t, { model: n }) => {
  const { isGroup: o, checkboxGroup: r } = dn(), a = P(!1), l = nn(r == null ? void 0 : r.checkboxGroupSize, { prop: !0 }), s = k(() => {
    const d = n.value;
    return Da(d) === "[object Boolean]" ? d : Array.isArray(d) ? d.map(yn).includes(e.label) : d != null ? d === e.trueLabel : !!d;
  }), i = nn(k(() => {
    var d;
    return o.value ? (d = r == null ? void 0 : r.checkboxGroupSize) == null ? void 0 : d.value : void 0;
  })), c = k(() => !!(t.default || e.label));
  return {
    isChecked: s,
    focus: a,
    size: l,
    checkboxSize: i,
    hasOwnLabel: c
  };
}, fv = (e, {
  model: t,
  isChecked: n
}) => {
  const { elForm: o, isGroup: r, checkboxGroup: a } = dn(), l = k(() => {
    var i, c;
    const d = (i = a.max) == null ? void 0 : i.value, v = (c = a.min) == null ? void 0 : c.value;
    return !!(d || v) && t.value.length >= d && !n.value || t.value.length <= v && n.value;
  });
  return {
    isDisabled: k(() => {
      var i, c;
      const d = e.disabled || (o == null ? void 0 : o.disabled);
      return (c = r.value ? ((i = a.disabled) == null ? void 0 : i.value) || d || l.value : d) != null ? c : !1;
    }),
    isLimitDisabled: l
  };
}, pv = (e, { model: t }) => {
  function n() {
    Array.isArray(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, hv = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: r,
  isLabeledByFormItem: a
}) => {
  const { elFormItem: l, checkboxGroup: s } = dn(), { emit: i } = Ie();
  function c(u) {
    var h, m;
    return u === e.trueLabel || u === !0 ? (h = e.trueLabel) != null ? h : !0 : (m = e.falseLabel) != null ? m : !1;
  }
  function d(u, h) {
    i("change", c(u), h);
  }
  function v(u) {
    if (n.value)
      return;
    const h = u.target;
    i("change", c(h.checked), u);
  }
  async function f(u) {
    n.value || !o.value && !r.value && a.value && (t.value = c([!1, e.falseLabel].includes(t.value)), await J(), d(t.value, u));
  }
  const p = k(() => {
    var u;
    return ((u = s.validateEvent) == null ? void 0 : u.value) || e.validateEvent;
  });
  return z(() => e.modelValue, () => {
    p.value && (l == null || l.validate("change").catch((u) => we(u)));
  }), {
    handleChange: v,
    onClickRoot: f
  };
}, hl = {
  [he]: (e) => pt(e) || et(e) || Cn(e),
  change: (e) => pt(e) || et(e) || Cn(e)
}, vv = {
  [he]: (e) => So(e),
  change: (e) => So(e)
}, vl = (e, t) => {
  const { model: n, isGroup: o, isLimitExceeded: r, elFormItem: a } = dv(e), { focus: l, size: s, isChecked: i, checkboxSize: c, hasOwnLabel: d } = cv(e, t, {
    model: n
  }), { isDisabled: v } = fv(e, { model: n, isChecked: i }), { inputId: f, isLabeledByFormItem: p } = Go(e, {
    formItemContext: a,
    disableIdGeneration: d,
    disableIdManagement: o
  }), { handleChange: u, onClickRoot: h } = hv(e, {
    model: n,
    isLimitExceeded: r,
    hasOwnLabel: d,
    isDisabled: v,
    isLabeledByFormItem: p
  });
  return pv(e, { model: n }), {
    elFormItem: a,
    inputId: f,
    isLabeledByFormItem: p,
    isChecked: i,
    isDisabled: v,
    isGroup: o,
    checkboxSize: c,
    hasOwnLabel: d,
    model: n,
    handleChange: u,
    onClickRoot: h,
    focus: l,
    size: s
  };
}, gv = ["tabindex", "role", "aria-checked"], mv = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], yv = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], bv = {
  name: "ElCheckbox"
}, wv = /* @__PURE__ */ ee({
  ...bv,
  props: pl,
  emits: hl,
  setup(e) {
    const t = e, n = _o(), {
      inputId: o,
      isLabeledByFormItem: r,
      isChecked: a,
      isDisabled: l,
      checkboxSize: s,
      hasOwnLabel: i,
      model: c,
      handleChange: d,
      onClickRoot: v,
      focus: f
    } = vl(t, n), p = te("checkbox");
    return (u, h) => (O(), W(Ze(!g(i) && g(r) ? "span" : "label"), {
      class: _([
        g(p).b(),
        g(p).m(g(s)),
        g(p).is("disabled", g(l)),
        g(p).is("bordered", u.border),
        g(p).is("checked", g(a))
      ]),
      "aria-controls": u.indeterminate ? u.controls : null,
      onClick: g(v)
    }, {
      default: U(() => [
        q("span", {
          class: _([
            g(p).e("input"),
            g(p).is("disabled", g(l)),
            g(p).is("checked", g(a)),
            g(p).is("indeterminate", u.indeterminate),
            g(p).is("focus", g(f))
          ]),
          tabindex: u.indeterminate ? 0 : void 0,
          role: u.indeterminate ? "checkbox" : void 0,
          "aria-checked": u.indeterminate ? "mixed" : void 0
        }, [
          u.trueLabel || u.falseLabel ? be((O(), M("input", {
            key: 0,
            id: g(o),
            "onUpdate:modelValue": h[0] || (h[0] = (m) => mn(c) ? c.value = m : null),
            class: _(g(p).e("original")),
            type: "checkbox",
            "aria-hidden": u.indeterminate ? "true" : "false",
            name: u.name,
            tabindex: u.tabindex,
            disabled: g(l),
            "true-value": u.trueLabel,
            "false-value": u.falseLabel,
            onChange: h[1] || (h[1] = (...m) => g(d) && g(d)(...m)),
            onFocus: h[2] || (h[2] = (m) => f.value = !0),
            onBlur: h[3] || (h[3] = (m) => f.value = !1)
          }, null, 42, mv)), [
            [Rn, g(c)]
          ]) : be((O(), M("input", {
            key: 1,
            id: g(o),
            "onUpdate:modelValue": h[4] || (h[4] = (m) => mn(c) ? c.value = m : null),
            class: _(g(p).e("original")),
            type: "checkbox",
            "aria-hidden": u.indeterminate ? "true" : "false",
            disabled: g(l),
            value: u.label,
            name: u.name,
            tabindex: u.tabindex,
            onChange: h[5] || (h[5] = (...m) => g(d) && g(d)(...m)),
            onFocus: h[6] || (h[6] = (m) => f.value = !0),
            onBlur: h[7] || (h[7] = (m) => f.value = !1)
          }, null, 42, yv)), [
            [Rn, g(c)]
          ]),
          q("span", {
            class: _(g(p).e("inner"))
          }, null, 2)
        ], 10, gv),
        g(i) ? (O(), M("span", {
          key: 0,
          class: _(g(p).e("label"))
        }, [
          oe(u.$slots, "default"),
          u.$slots.default ? j("v-if", !0) : (O(), M(Ue, { key: 0 }, [
            ma(ye(u.label), 1)
          ], 64))
        ], 2)) : j("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var Cv = /* @__PURE__ */ le(wv, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const Ev = ["name", "tabindex", "disabled", "true-value", "false-value"], Sv = ["name", "tabindex", "disabled", "value"], kv = {
  name: "ElCheckboxButton"
}, Ov = /* @__PURE__ */ ee({
  ...kv,
  props: pl,
  emits: hl,
  setup(e) {
    const t = e, n = _o(), { focus: o, isChecked: r, isDisabled: a, size: l, model: s, handleChange: i } = vl(t, n), { checkboxGroup: c } = dn(), d = te("checkbox"), v = k(() => {
      var f, p, u, h;
      const m = (p = (f = c == null ? void 0 : c.fill) == null ? void 0 : f.value) != null ? p : "";
      return {
        backgroundColor: m,
        borderColor: m,
        color: (h = (u = c == null ? void 0 : c.textColor) == null ? void 0 : u.value) != null ? h : "",
        boxShadow: m ? `-1px 0 0 0 ${m}` : void 0
      };
    });
    return (f, p) => (O(), M("label", {
      class: _([
        g(d).b("button"),
        g(d).bm("button", g(l)),
        g(d).is("disabled", g(a)),
        g(d).is("checked", g(r)),
        g(d).is("focus", g(o))
      ])
    }, [
      f.trueLabel || f.falseLabel ? be((O(), M("input", {
        key: 0,
        "onUpdate:modelValue": p[0] || (p[0] = (u) => mn(s) ? s.value = u : null),
        class: _(g(d).be("button", "original")),
        type: "checkbox",
        name: f.name,
        tabindex: f.tabindex,
        disabled: g(a),
        "true-value": f.trueLabel,
        "false-value": f.falseLabel,
        onChange: p[1] || (p[1] = (...u) => g(i) && g(i)(...u)),
        onFocus: p[2] || (p[2] = (u) => o.value = !0),
        onBlur: p[3] || (p[3] = (u) => o.value = !1)
      }, null, 42, Ev)), [
        [Rn, g(s)]
      ]) : be((O(), M("input", {
        key: 1,
        "onUpdate:modelValue": p[4] || (p[4] = (u) => mn(s) ? s.value = u : null),
        class: _(g(d).be("button", "original")),
        type: "checkbox",
        name: f.name,
        tabindex: f.tabindex,
        disabled: g(a),
        value: f.label,
        onChange: p[5] || (p[5] = (...u) => g(i) && g(i)(...u)),
        onFocus: p[6] || (p[6] = (u) => o.value = !0),
        onBlur: p[7] || (p[7] = (u) => o.value = !1)
      }, null, 42, Sv)), [
        [Rn, g(s)]
      ]),
      f.$slots.default || f.label ? (O(), M("span", {
        key: 2,
        class: _(g(d).be("button", "inner")),
        style: Ce(g(r) ? g(v) : void 0)
      }, [
        oe(f.$slots, "default", {}, () => [
          ma(ye(f.label), 1)
        ])
      ], 6)) : j("v-if", !0)
    ], 2));
  }
});
var gl = /* @__PURE__ */ le(Ov, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const Tv = {
  name: "ElCheckboxGroup"
}, Nv = /* @__PURE__ */ ee({
  ...Tv,
  props: sv,
  emits: vv,
  setup(e, { emit: t }) {
    const n = e, { elFormItem: o } = dn(), { groupId: r, isLabeledByFormItem: a } = uv(n, {
      elFormItem: o
    }), l = nn(), s = te("checkbox"), i = (d) => {
      t(he, d), J(() => {
        t("change", d);
      });
    }, c = k({
      get() {
        return n.modelValue;
      },
      set(d) {
        i(d);
      }
    });
    return Ee("CheckboxGroup", {
      name: "ElCheckboxGroup",
      ...Wt(n),
      modelValue: c,
      checkboxGroupSize: l,
      changeEvent: i
    }), z(() => n.modelValue, () => {
      n.validateEvent && (o == null || o.validate("change").catch((d) => we(d)));
    }), (d, v) => {
      var f;
      return O(), W(Ze(d.tag), {
        id: g(r),
        class: _(g(s).b("group")),
        role: "group",
        "aria-label": g(a) ? void 0 : d.label || "checkbox-group",
        "aria-labelledby": g(a) ? (f = g(o)) == null ? void 0 : f.labelId : void 0
      }, {
        default: U(() => [
          oe(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var ml = /* @__PURE__ */ le(Nv, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const $v = At(Cv, {
  CheckboxButton: gl,
  CheckboxGroup: ml
});
Zn(gl);
Zn(ml);
const yl = Se({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: Ho,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), Iv = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Pv = {
  name: "ElTag"
}, Av = /* @__PURE__ */ ee({
  ...Pv,
  props: yl,
  emits: Iv,
  setup(e, { emit: t }) {
    const n = e, o = nn(), r = te("tag"), a = k(() => {
      const { type: i, hit: c, effect: d, closable: v, round: f } = n;
      return [
        r.b(),
        r.is("closable", v),
        r.m(i),
        r.m(o.value),
        r.m(d),
        r.is("hit", c),
        r.is("round", f)
      ];
    }), l = (i) => {
      t("close", i);
    }, s = (i) => {
      t("click", i);
    };
    return (i, c) => i.disableTransitions ? (O(), M("span", {
      key: 0,
      class: _(g(a)),
      style: Ce({ backgroundColor: i.color }),
      onClick: s
    }, [
      q("span", {
        class: _(g(r).e("content"))
      }, [
        oe(i.$slots, "default")
      ], 2),
      i.closable ? (O(), W(g(ct), {
        key: 0,
        class: _(g(r).e("close")),
        onClick: fe(l, ["stop"])
      }, {
        default: U(() => [
          pe(g(Fr))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : j("v-if", !0)
    ], 6)) : (O(), W($n, {
      key: 1,
      name: `${g(r).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: U(() => [
        q("span", {
          class: _(g(a)),
          style: Ce({ backgroundColor: i.color }),
          onClick: s
        }, [
          q("span", {
            class: _(g(r).e("content"))
          }, [
            oe(i.$slots, "default")
          ], 2),
          i.closable ? (O(), W(g(ct), {
            key: 0,
            class: _(g(r).e("close")),
            onClick: fe(l, ["stop"])
          }, {
            default: U(() => [
              pe(g(Fr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : j("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var _v = /* @__PURE__ */ le(Av, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const Lv = At(_v), Dv = {
  name: "ElCollapseTransition"
}, xv = /* @__PURE__ */ ee({
  ...Dv,
  setup(e) {
    const t = te("collapse-transition"), n = {
      beforeEnter(o) {
        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0;
      },
      enter(o) {
        o.dataset.oldOverflow = o.style.overflow, o.scrollHeight !== 0 ? (o.style.maxHeight = `${o.scrollHeight}px`, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom) : (o.style.maxHeight = 0, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom), o.style.overflow = "hidden";
      },
      afterEnter(o) {
        o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow;
      },
      beforeLeave(o) {
        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.dataset.oldOverflow = o.style.overflow, o.style.maxHeight = `${o.scrollHeight}px`, o.style.overflow = "hidden";
      },
      leave(o) {
        o.scrollHeight !== 0 && (o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0);
      },
      afterLeave(o) {
        o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom;
      }
    };
    return (o, r) => (O(), W($n, Kt({
      name: g(t).b()
    }, Bl(n)), {
      default: U(() => [
        oe(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var Bn = /* @__PURE__ */ le(xv, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);
Bn.install = (e) => {
  e.component(Bn.name, Bn);
};
const Bv = Bn, bl = "ElSelectGroup", no = "ElSelect";
function Mv(e, t) {
  const n = ae(no), o = ae(bl, { disabled: !1 }), r = k(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), a = k(() => n.props.multiple ? v(n.props.modelValue, e.value) : f(e.value, n.props.modelValue)), l = k(() => {
    if (n.props.multiple) {
      const h = n.props.modelValue || [];
      return !a.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = k(() => e.label || (r.value ? "" : e.value)), i = k(() => e.value || e.label || ""), c = k(() => e.disabled || t.groupDisabled || l.value), d = Ie(), v = (h = [], m) => {
    if (r.value) {
      const b = n.props.valueKey;
      return h && h.some((S) => yn(Ke(S, b)) === Ke(m, b));
    } else
      return h && h.includes(m);
  }, f = (h, m) => {
    if (r.value) {
      const { valueKey: b } = n.props;
      return Ke(h, b) === Ke(m, b);
    } else
      return h === m;
  }, p = () => {
    !e.disabled && !o.disabled && (n.hoverIndex = n.optionsArray.indexOf(d.proxy));
  };
  z(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), z(() => e.value, (h, m) => {
    const { remote: b, valueKey: S } = n.props;
    if (Object.is(h, m) || (n.onOptionDestroy(m, d.proxy), n.onOptionCreate(d.proxy)), !e.created && !b) {
      if (S && typeof h == "object" && typeof m == "object" && h[S] === m[S])
        return;
      n.setSelected();
    }
  }), z(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 });
  const { queryChange: u } = yn(n);
  return z(u, (h) => {
    const { query: m } = g(h), b = new RegExp(oc(m), "i");
    t.visible = b.test(s.value) || e.created, t.visible || n.filteredOptionsCount--;
  }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: a,
    isDisabled: c,
    hoverItem: p
  };
}
const Kv = ee({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = te("select"), n = ft({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: r, isDisabled: a, select: l, hoverItem: s } = Mv(e, n), { visible: i, hover: c } = Wt(n), d = Ie().proxy;
    l.onOptionCreate(d), It(() => {
      const f = d.value, { selected: p } = l, h = (l.props.multiple ? p : [p]).some((m) => m.value === d.value);
      J(() => {
        l.cachedOptions.get(f) === d && !h && l.cachedOptions.delete(f);
      }), l.onOptionDestroy(f, d);
    });
    function v() {
      e.disabled !== !0 && n.groupDisabled !== !0 && l.handleOptionSelect(d, !0);
    }
    return {
      ns: t,
      currentLabel: o,
      itemSelected: r,
      isDisabled: a,
      select: l,
      hoverItem: s,
      visible: i,
      hover: c,
      selectOptionClick: v,
      states: n
    };
  }
});
function zv(e, t, n, o, r, a) {
  return be((O(), M("li", {
    class: _([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: t[0] || (t[0] = (...l) => e.hoverItem && e.hoverItem(...l)),
    onClick: t[1] || (t[1] = fe((...l) => e.selectOptionClick && e.selectOptionClick(...l), ["stop"]))
  }, [
    oe(e.$slots, "default", {}, () => [
      q("span", null, ye(e.currentLabel), 1)
    ])
  ], 34)), [
    [ht, e.visible]
  ]);
}
var lr = /* @__PURE__ */ le(Kv, [["render", zv], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const Rv = ee({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ae(no), t = te("select"), n = k(() => e.props.popperClass), o = k(() => e.props.multiple), r = k(() => e.props.fitInputWidth), a = P("");
    function l() {
      var s;
      a.value = `${(s = e.selectWrapper) == null ? void 0 : s.offsetWidth}px`;
    }
    return Pe(() => {
      l(), Xn(e.selectWrapper, l);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function Fv(e, t, n, o, r, a) {
  return O(), M("div", {
    class: _([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ce({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    oe(e.$slots, "default")
  ], 6);
}
var jv = /* @__PURE__ */ le(Rv, [["render", Fv], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function Hv(e) {
  const { t } = eo();
  return ft({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    softFocus: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    isSilentBlur: !1,
    prefixWidth: 11,
    tagInMultiLine: !1
  });
}
const Vv = (e, t, n) => {
  const { t: o } = eo(), r = te("select"), a = P(null), l = P(null), s = P(null), i = P(null), c = P(null), d = P(null), v = P(-1), f = zt({ query: "" }), p = zt(""), { form: u, formItem: h } = Uo(), m = k(() => !e.filterable || e.multiple || !t.visible), b = k(() => e.disabled || (u == null ? void 0 : u.disabled)), S = k(() => {
    const y = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !b.value && t.inputHovering && y;
  }), A = k(() => e.remote && e.filterable ? "" : e.suffixIcon), L = k(() => r.is("reverse", A.value && t.visible)), $ = k(() => e.remote ? 300 : 0), w = k(() => e.loading ? e.loadingText || o("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || o("el.select.noMatch") : t.options.size === 0 ? e.noDataText || o("el.select.noData") : null), C = k(() => Array.from(t.options.values())), D = k(() => Array.from(t.cachedOptions.values())), T = k(() => {
    const y = C.value.filter((I) => !I.created).some((I) => I.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !y;
  }), x = nn(), B = k(() => ["small"].includes(x.value) ? "small" : "default"), ne = k({
    get() {
      return t.visible && w.value !== !1;
    },
    set(y) {
      t.visible = y;
    }
  });
  z([() => b.value, () => x.value, () => u == null ? void 0 : u.size], () => {
    J(() => {
      Q();
    });
  }), z(() => e.placeholder, (y) => {
    t.cachedPlaceHolder = t.currentPlaceholder = y;
  }), z(() => e.modelValue, (y, I) => {
    e.multiple && (Q(), y && y.length > 0 || l.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", K(t.query))), N(), e.filterable && !e.multiple && (t.inputLength = 20), !wo(y, I) && e.validateEvent && (h == null || h.validate("change").catch((F) => we(F)));
  }, {
    flush: "post",
    deep: !0
  }), z(() => t.visible, (y) => {
    var I, F, Y;
    y ? ((F = (I = s.value) == null ? void 0 : I.updatePopper) == null || F.call(I), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, e.multiple ? (Y = l.value) == null || Y.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), K(t.query), !e.multiple && !e.remote && (f.value.query = "", cn(f), cn(p)))) : (l.value && l.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, X(), J(() => {
      l.value && l.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", y);
  }), z(() => t.options.entries(), () => {
    var y, I, F;
    if (!ve)
      return;
    (I = (y = s.value) == null ? void 0 : y.updatePopper) == null || I.call(y), e.multiple && Q();
    const Y = ((F = c.value) == null ? void 0 : F.querySelectorAll("input")) || [];
    Array.from(Y).includes(document.activeElement) || N(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && H();
  }, {
    flush: "post"
  }), z(() => t.hoverIndex, (y) => {
    typeof y == "number" && y > -1 && (v.value = C.value[y] || {}), C.value.forEach((I) => {
      I.hover = v.value === I;
    });
  });
  const Q = () => {
    e.collapseTags && !e.filterable || J(() => {
      var y, I;
      if (!a.value)
        return;
      const F = a.value.$el.querySelector("input"), Y = i.value, ge = af(x.value || (u == null ? void 0 : u.size));
      F.style.height = `${(t.selected.length === 0 ? ge : Math.max(Y ? Y.clientHeight + (Y.clientHeight > ge ? 6 : 0) : 0, ge)) - 2}px`, t.tagInMultiLine = Number.parseFloat(F.style.height) >= ge, t.visible && w.value !== !1 && ((I = (y = s.value) == null ? void 0 : y.updatePopper) == null || I.call(y));
    });
  }, K = async (y) => {
    if (!(t.previousQuery === y || t.isOnComposition)) {
      if (t.previousQuery === null && (typeof e.filterMethod == "function" || typeof e.remoteMethod == "function")) {
        t.previousQuery = y;
        return;
      }
      t.previousQuery = y, J(() => {
        var I, F;
        t.visible && ((F = (I = s.value) == null ? void 0 : I.updatePopper) == null || F.call(I));
      }), t.hoverIndex = -1, e.multiple && e.filterable && J(() => {
        const I = l.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, I) : I, V(), Q();
      }), e.remote && typeof e.remoteMethod == "function" ? (t.hoverIndex = -1, e.remoteMethod(y)) : typeof e.filterMethod == "function" ? (e.filterMethod(y), cn(p)) : (t.filteredOptionsCount = t.optionsCount, f.value.query = y, cn(f), cn(p)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await J(), H());
    }
  }, V = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = l.value.value ? "" : t.cachedPlaceHolder);
  }, H = () => {
    const y = C.value.filter((Y) => Y.visible && !Y.disabled && !Y.states.groupDisabled), I = y.find((Y) => Y.created), F = y[0];
    t.hoverIndex = Qe(C.value, I || F);
  }, N = () => {
    var y;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const F = R(e.modelValue);
      (y = F.props) != null && y.created ? (t.createdLabel = F.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = F.currentLabel, t.selected = F, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const I = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((F) => {
      I.push(R(F));
    }), t.selected = I, J(() => {
      Q();
    });
  }, R = (y) => {
    let I;
    const F = so(y).toLowerCase() === "object", Y = so(y).toLowerCase() === "null", ge = so(y).toLowerCase() === "undefined";
    for (let ut = t.cachedOptions.size - 1; ut >= 0; ut--) {
      const Me = D.value[ut];
      if (F ? Ke(Me.value, e.valueKey) === Ke(y, e.valueKey) : Me.value === y) {
        I = {
          value: y,
          currentLabel: Me.currentLabel,
          isDisabled: Me.isDisabled
        };
        break;
      }
    }
    if (I)
      return I;
    const Et = F ? y.label : !Y && !ge ? y : "", St = {
      value: y,
      currentLabel: Et
    };
    return e.multiple && (St.hitState = !1), St;
  }, X = () => {
    setTimeout(() => {
      const y = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((I) => C.value.findIndex((F) => Ke(F, y) === Ke(I, y)))) : t.hoverIndex = -1 : t.hoverIndex = C.value.findIndex((I) => ce(I) === ce(t.selected));
    }, 300);
  }, Z = () => {
    var y, I;
    xe(), (I = (y = s.value) == null ? void 0 : y.updatePopper) == null || I.call(y), e.multiple && !e.filterable && Q();
  }, xe = () => {
    var y;
    t.inputWidth = (y = a.value) == null ? void 0 : y.$el.getBoundingClientRect().width;
  }, ke = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, K(t.query));
  }, Ae = Dr(() => {
    ke();
  }, $.value), _e = Dr((y) => {
    K(y.target.value);
  }, $.value), ie = (y) => {
    wo(e.modelValue, y) || n.emit(za, y);
  }, Oe = (y) => {
    if (y.target.value.length <= 0 && !Je()) {
      const I = e.modelValue.slice();
      I.pop(), n.emit(he, I), ie(I);
    }
    y.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
  }, Be = (y, I) => {
    const F = t.selected.indexOf(I);
    if (F > -1 && !b.value) {
      const Y = e.modelValue.slice();
      Y.splice(F, 1), n.emit(he, Y), ie(Y), n.emit("remove-tag", I.value);
    }
    y.stopPropagation();
  }, de = (y) => {
    y.stopPropagation();
    const I = e.multiple ? [] : "";
    if (typeof I != "string")
      for (const F of t.selected)
        F.isDisabled && I.push(F.value);
    n.emit(he, I), ie(I), t.visible = !1, n.emit("clear");
  }, Ye = (y, I) => {
    var F;
    if (e.multiple) {
      const Y = (e.modelValue || []).slice(), ge = Qe(Y, y.value);
      ge > -1 ? Y.splice(ge, 1) : (e.multipleLimit <= 0 || Y.length < e.multipleLimit) && Y.push(y.value), n.emit(he, Y), ie(Y), y.created && (t.query = "", K(""), t.inputLength = 20), e.filterable && ((F = l.value) == null || F.focus());
    } else
      n.emit(he, y.value), ie(y.value), t.visible = !1;
    t.isSilentBlur = I, Xe(), !t.visible && J(() => {
      Le(y);
    });
  }, Qe = (y = [], I) => {
    if (!gt(I))
      return y.indexOf(I);
    const F = e.valueKey;
    let Y = -1;
    return y.some((ge, Et) => yn(Ke(ge, F)) === Ke(I, F) ? (Y = Et, !0) : !1), Y;
  }, Xe = () => {
    t.softFocus = !0;
    const y = l.value || a.value;
    y && (y == null || y.focus());
  }, Le = (y) => {
    var I, F, Y, ge, Et;
    const St = Array.isArray(y) ? y[0] : y;
    let ut = null;
    if (St != null && St.value) {
      const Me = C.value.filter((De) => De.value === St.value);
      Me.length > 0 && (ut = Me[0].$el);
    }
    if (s.value && ut) {
      const Me = (ge = (Y = (F = (I = s.value) == null ? void 0 : I.popperRef) == null ? void 0 : F.contentRef) == null ? void 0 : Y.querySelector) == null ? void 0 : ge.call(Y, `.${r.be("dropdown", "wrap")}`);
      Me && ic(Me, ut);
    }
    (Et = d.value) == null || Et.handleScroll();
  }, at = (y) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(y.value, y), t.cachedOptions.set(y.value, y);
  }, Lt = (y, I) => {
    t.options.get(y) === I && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(y));
  }, wt = (y) => {
    y.code !== ze.backspace && Je(!1), t.inputLength = l.value.value.length * 15 + 20, Q();
  }, Je = (y) => {
    if (!Array.isArray(t.selected))
      return;
    const I = t.selected[t.selected.length - 1];
    if (!!I)
      return y === !0 || y === !1 ? (I.hitState = y, y) : (I.hitState = !I.hitState, I.hitState);
  }, He = (y) => {
    const I = y.target.value;
    if (y.type === "compositionend")
      t.isOnComposition = !1, J(() => K(I));
    else {
      const F = I[I.length - 1] || "";
      t.isOnComposition = !Ra(F);
    }
  }, lt = () => {
    J(() => Le(t.selected));
  }, Dt = (y) => {
    t.softFocus ? t.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), n.emit("focus", y));
  }, Te = () => {
    var y;
    t.visible = !1, (y = a.value) == null || y.blur();
  }, Ve = (y) => {
    J(() => {
      t.isSilentBlur ? t.isSilentBlur = !1 : n.emit("blur", y);
    }), t.softFocus = !1;
  }, Ct = (y) => {
    de(y);
  }, it = () => {
    t.visible = !1;
  }, E = (y) => {
    t.visible && (y.preventDefault(), y.stopPropagation(), t.visible = !1);
  }, G = () => {
    var y;
    b.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : t.visible = !t.visible, t.visible && ((y = l.value || a.value) == null || y.focus()));
  }, me = () => {
    t.visible ? C.value[t.hoverIndex] && Ye(C.value[t.hoverIndex], void 0) : G();
  }, ce = (y) => gt(y.value) ? Ke(y.value, e.valueKey) : y.value, st = k(() => C.value.filter((y) => y.visible).every((y) => y.disabled)), Gt = (y) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !st.value) {
      y === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : y === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const I = C.value[t.hoverIndex];
      (I.disabled === !0 || I.states.groupDisabled === !0 || !I.visible) && Gt(y), J(() => Le(v.value));
    }
  };
  return {
    optionsArray: C,
    selectSize: x,
    handleResize: Z,
    debouncedOnInputChange: Ae,
    debouncedQueryChange: _e,
    deletePrevTag: Oe,
    deleteTag: Be,
    deleteSelected: de,
    handleOptionSelect: Ye,
    scrollToOption: Le,
    readonly: m,
    resetInputHeight: Q,
    showClose: S,
    iconComponent: A,
    iconReverse: L,
    showNewOption: T,
    collapseTagSize: B,
    setSelected: N,
    managePlaceholder: V,
    selectDisabled: b,
    emptyText: w,
    toggleLastOptionHitState: Je,
    resetInputState: wt,
    handleComposition: He,
    onOptionCreate: at,
    onOptionDestroy: Lt,
    handleMenuEnter: lt,
    handleFocus: Dt,
    blur: Te,
    handleBlur: Ve,
    handleClearClick: Ct,
    handleClose: it,
    handleKeydownEscape: E,
    toggleMenu: G,
    selectOption: me,
    getValueKey: ce,
    navigateOptions: Gt,
    dropMenuVisible: ne,
    queryChange: f,
    groupQueryChange: p,
    reference: a,
    input: l,
    tooltipRef: s,
    tags: i,
    selectWrapper: c,
    scrollbar: d
  };
}, ha = "ElSelect", Wv = ee({
  name: ha,
  componentName: ha,
  components: {
    ElInput: Qf,
    ElSelectMenu: jv,
    ElOption: lr,
    ElTag: Lv,
    ElScrollbar: up,
    ElTooltip: lv,
    ElIcon: ct
  },
  directives: { ClickOutside: iv },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: lf
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: !1
    },
    teleported: rr.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: [String, Object],
      default: jo
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: [String, Object],
      default: pc
    },
    tagType: { ...yl.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    he,
    za,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = te("select"), o = te("input"), { t: r } = eo(), a = Hv(e), {
      optionsArray: l,
      selectSize: s,
      readonly: i,
      handleResize: c,
      collapseTagSize: d,
      debouncedOnInputChange: v,
      debouncedQueryChange: f,
      deletePrevTag: p,
      deleteTag: u,
      deleteSelected: h,
      handleOptionSelect: m,
      scrollToOption: b,
      setSelected: S,
      resetInputHeight: A,
      managePlaceholder: L,
      showClose: $,
      selectDisabled: w,
      iconComponent: C,
      iconReverse: D,
      showNewOption: T,
      emptyText: x,
      toggleLastOptionHitState: B,
      resetInputState: ne,
      handleComposition: Q,
      onOptionCreate: K,
      onOptionDestroy: V,
      handleMenuEnter: H,
      handleFocus: N,
      blur: R,
      handleBlur: X,
      handleClearClick: Z,
      handleClose: xe,
      handleKeydownEscape: ke,
      toggleMenu: Ae,
      selectOption: _e,
      getValueKey: ie,
      navigateOptions: Oe,
      dropMenuVisible: Be,
      reference: de,
      input: Ye,
      tooltipRef: Qe,
      tags: Xe,
      selectWrapper: Le,
      scrollbar: at,
      queryChange: Lt,
      groupQueryChange: wt
    } = Vv(e, a, t), { focus: Je } = vf(de), {
      inputWidth: He,
      selected: lt,
      inputLength: Dt,
      filteredOptionsCount: Te,
      visible: Ve,
      softFocus: Ct,
      selectedLabel: it,
      hoverIndex: E,
      query: G,
      inputHovering: me,
      currentPlaceholder: ce,
      menuVisibleOnFocus: st,
      isOnComposition: Gt,
      isSilentBlur: y,
      options: I,
      cachedOptions: F,
      optionsCount: Y,
      prefixWidth: ge,
      tagInMultiLine: Et
    } = Wt(a), St = k(() => {
      const De = [n.b()], xt = g(s);
      return xt && De.push(n.m(xt)), e.disabled && De.push(n.m("disabled")), De;
    }), ut = k(() => ({
      maxWidth: `${g(He) - 32}px`,
      width: "100%"
    }));
    Ee(no, ft({
      props: e,
      options: I,
      optionsArray: l,
      cachedOptions: F,
      optionsCount: Y,
      filteredOptionsCount: Te,
      hoverIndex: E,
      handleOptionSelect: m,
      onOptionCreate: K,
      onOptionDestroy: V,
      selectWrapper: Le,
      selected: lt,
      setSelected: S,
      queryChange: Lt,
      groupQueryChange: wt
    })), Pe(() => {
      a.cachedPlaceHolder = ce.value = e.placeholder || r("el.select.placeholder"), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (ce.value = ""), Xn(Le, c), e.remote && e.multiple && A(), J(() => {
        const De = de.value && de.value.$el;
        if (!!De && (He.value = De.getBoundingClientRect().width, t.slots.prefix)) {
          const xt = De.querySelector(`.${o.e("prefix")}`);
          ge.value = Math.max(xt.getBoundingClientRect().width + 5, 30);
        }
      }), S();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(he, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(he, "");
    const Me = k(() => {
      var De, xt;
      return (xt = (De = Qe.value) == null ? void 0 : De.popperRef) == null ? void 0 : xt.contentRef;
    });
    return {
      tagInMultiLine: Et,
      prefixWidth: ge,
      selectSize: s,
      readonly: i,
      handleResize: c,
      collapseTagSize: d,
      debouncedOnInputChange: v,
      debouncedQueryChange: f,
      deletePrevTag: p,
      deleteTag: u,
      deleteSelected: h,
      handleOptionSelect: m,
      scrollToOption: b,
      inputWidth: He,
      selected: lt,
      inputLength: Dt,
      filteredOptionsCount: Te,
      visible: Ve,
      softFocus: Ct,
      selectedLabel: it,
      hoverIndex: E,
      query: G,
      inputHovering: me,
      currentPlaceholder: ce,
      menuVisibleOnFocus: st,
      isOnComposition: Gt,
      isSilentBlur: y,
      options: I,
      resetInputHeight: A,
      managePlaceholder: L,
      showClose: $,
      selectDisabled: w,
      iconComponent: C,
      iconReverse: D,
      showNewOption: T,
      emptyText: x,
      toggleLastOptionHitState: B,
      resetInputState: ne,
      handleComposition: Q,
      handleMenuEnter: H,
      handleFocus: N,
      blur: R,
      handleBlur: X,
      handleClearClick: Z,
      handleClose: xe,
      handleKeydownEscape: ke,
      toggleMenu: Ae,
      selectOption: _e,
      getValueKey: ie,
      navigateOptions: Oe,
      dropMenuVisible: Be,
      focus: Je,
      reference: de,
      input: Ye,
      tooltipRef: Qe,
      popperPaneRef: Me,
      tags: Xe,
      selectWrapper: Le,
      scrollbar: at,
      wrapperKls: St,
      selectTagsStyle: ut,
      nsSelect: n
    };
  }
}), qv = { class: "select-trigger" }, Uv = ["disabled", "autocomplete"], Gv = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function Yv(e, t, n, o, r, a) {
  const l = ue("el-tag"), s = ue("el-tooltip"), i = ue("el-icon"), c = ue("el-input"), d = ue("el-option"), v = ue("el-scrollbar"), f = ue("el-select-menu"), p = Ml("click-outside");
  return be((O(), M("div", {
    ref: "selectWrapper",
    class: _(e.wrapperKls),
    onClick: t[22] || (t[22] = fe((...u) => e.toggleMenu && e.toggleMenu(...u), ["stop"]))
  }, [
    pe(s, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: "bottom-start",
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: U(() => [
        q("div", qv, [
          e.multiple ? (O(), M("div", {
            key: 0,
            ref: "tags",
            class: _(e.nsSelect.e("tags")),
            style: Ce(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (O(), M("span", {
              key: 0,
              class: _([
                e.nsSelect.b("tags-wrapper"),
                { "has-prefix": e.prefixWidth && e.selected.length }
              ])
            }, [
              pe(l, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: t[0] || (t[0] = (u) => e.deleteTag(u, e.selected[0]))
              }, {
                default: U(() => [
                  q("span", {
                    class: _(e.nsSelect.e("tags-text")),
                    style: Ce({ maxWidth: e.inputWidth - 123 + "px" })
                  }, ye(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? (O(), W(l, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: U(() => [
                  e.collapseTagsTooltip ? (O(), W(s, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: e.teleported
                  }, {
                    default: U(() => [
                      q("span", {
                        class: _(e.nsSelect.e("tags-text"))
                      }, "+ " + ye(e.selected.length - 1), 3)
                    ]),
                    content: U(() => [
                      q("div", {
                        class: _(e.nsSelect.e("collapse-tags"))
                      }, [
                        (O(!0), M(Ue, null, Fn(e.selected.slice(1), (u, h) => (O(), M("div", {
                          key: h,
                          class: _(e.nsSelect.e("collapse-tag"))
                        }, [
                          (O(), W(l, {
                            key: e.getValueKey(u),
                            class: "in-tooltip",
                            closable: !e.selectDisabled && !u.isDisabled,
                            size: e.collapseTagSize,
                            hit: u.hitState,
                            type: e.tagType,
                            "disable-transitions": "",
                            style: { margin: "2px" },
                            onClose: (m) => e.deleteTag(m, u)
                          }, {
                            default: U(() => [
                              q("span", {
                                class: _(e.nsSelect.e("tags-text")),
                                style: Ce({
                                  maxWidth: e.inputWidth - 75 + "px"
                                })
                              }, ye(u.currentLabel), 7)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                        ], 2))), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect", "teleported"])) : (O(), M("span", {
                    key: 1,
                    class: _(e.nsSelect.e("tags-text"))
                  }, "+ " + ye(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : j("v-if", !0)
            ], 2)) : j("v-if", !0),
            j(" <div> "),
            e.collapseTags ? j("v-if", !0) : (O(), W($n, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: U(() => [
                q("span", {
                  class: _([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (O(!0), M(Ue, null, Fn(e.selected, (u) => (O(), W(l, {
                    key: e.getValueKey(u),
                    closable: !e.selectDisabled && !u.isDisabled,
                    size: e.collapseTagSize,
                    hit: u.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (h) => e.deleteTag(h, u)
                  }, {
                    default: U(() => [
                      q("span", {
                        class: _(e.nsSelect.e("tags-text")),
                        style: Ce({ maxWidth: e.inputWidth - 75 + "px" })
                      }, ye(u.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            j(" </div> "),
            e.filterable ? be((O(), M("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[1] || (t[1] = (u) => e.query = u),
              type: "text",
              class: _([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: Ce({
                marginLeft: e.prefixWidth && !e.selected.length || e.tagInMultiLine ? `${e.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${e.inputLength / (e.inputWidth - 32)}%`,
                maxWidth: `${e.inputWidth - 42}px`
              }),
              onFocus: t[2] || (t[2] = (...u) => e.handleFocus && e.handleFocus(...u)),
              onBlur: t[3] || (t[3] = (...u) => e.handleBlur && e.handleBlur(...u)),
              onKeyup: t[4] || (t[4] = (...u) => e.managePlaceholder && e.managePlaceholder(...u)),
              onKeydown: [
                t[5] || (t[5] = (...u) => e.resetInputState && e.resetInputState(...u)),
                t[6] || (t[6] = We(fe((u) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[7] || (t[7] = We(fe((u) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[8] || (t[8] = We((...u) => e.handleKeydownEscape && e.handleKeydownEscape(...u), ["esc"])),
                t[9] || (t[9] = We(fe((...u) => e.selectOption && e.selectOption(...u), ["stop", "prevent"]), ["enter"])),
                t[10] || (t[10] = We((...u) => e.deletePrevTag && e.deletePrevTag(...u), ["delete"])),
                t[11] || (t[11] = We((u) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[12] || (t[12] = (...u) => e.handleComposition && e.handleComposition(...u)),
              onCompositionupdate: t[13] || (t[13] = (...u) => e.handleComposition && e.handleComposition(...u)),
              onCompositionend: t[14] || (t[14] = (...u) => e.handleComposition && e.handleComposition(...u)),
              onInput: t[15] || (t[15] = (...u) => e.debouncedQueryChange && e.debouncedQueryChange(...u))
            }, null, 46, Uv)), [
              [Kl, e.query]
            ]) : j("v-if", !0)
          ], 6)) : j("v-if", !0),
          pe(c, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": t[16] || (t[16] = (u) => e.selectedLabel = u),
            type: "text",
            placeholder: e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: _([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = We(fe((u) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = We(fe((u) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              We(fe(e.selectOption, ["stop", "prevent"]), ["enter"]),
              We(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = We((u) => e.visible = !1, ["tab"]))
            ],
            onMouseenter: t[20] || (t[20] = (u) => e.inputHovering = !0),
            onMouseleave: t[21] || (t[21] = (u) => e.inputHovering = !1)
          }, zl({
            suffix: U(() => [
              e.iconComponent && !e.showClose ? (O(), W(i, {
                key: 0,
                class: _([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: U(() => [
                  (O(), W(Ze(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0),
              e.showClose && e.clearIcon ? (O(), W(i, {
                key: 1,
                class: _([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: U(() => [
                  (O(), W(Ze(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : j("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: U(() => [
                q("div", Gv, [
                  oe(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ])
      ]),
      content: U(() => [
        pe(f, null, {
          default: U(() => [
            be(pe(v, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: _([
                e.nsSelect.is("empty", !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0)
              ])
            }, {
              default: U(() => [
                e.showNewOption ? (O(), W(d, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : j("v-if", !0),
                oe(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [ht, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (O(), M(Ue, { key: 0 }, [
              e.$slots.empty ? oe(e.$slots, "empty", { key: 0 }) : (O(), M("p", {
                key: 1,
                class: _(e.nsSelect.be("dropdown", "empty"))
              }, ye(e.emptyText), 3))
            ], 64)) : j("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 2)), [
    [p, e.handleClose, e.popperPaneRef]
  ]);
}
var Qv = /* @__PURE__ */ le(Wv, [["render", Yv], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const Xv = ee({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = te("select"), n = P(!0), o = Ie(), r = P([]);
    Ee(bl, ft({
      ...Wt(e)
    }));
    const a = ae(no);
    Pe(() => {
      r.value = l(o.subTree);
    });
    const l = (i) => {
      const c = [];
      return Array.isArray(i.children) && i.children.forEach((d) => {
        var v;
        d.type && d.type.name === "ElOption" && d.component && d.component.proxy ? c.push(d.component.proxy) : (v = d.children) != null && v.length && c.push(...l(d));
      }), c;
    }, { groupQueryChange: s } = yn(a);
    return z(s, () => {
      n.value = r.value.some((i) => i.visible === !0);
    }), {
      visible: n,
      ns: t
    };
  }
});
function Jv(e, t, n, o, r, a) {
  return be((O(), M("ul", {
    class: _(e.ns.be("group", "wrap"))
  }, [
    q("li", {
      class: _(e.ns.be("group", "title"))
    }, ye(e.label), 3),
    q("li", null, [
      q("ul", {
        class: _(e.ns.b("group"))
      }, [
        oe(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [ht, e.visible]
  ]);
}
var wl = /* @__PURE__ */ le(Xv, [["render", Jv], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const $o = At(Qv, {
  Option: lr,
  OptionGroup: wl
}), va = Zn(lr);
Zn(wl);
const en = "$treeNodeId", ga = function(e, t) {
  !t || t[en] || Object.defineProperty(t, en, {
    value: e.id,
    enumerable: !1,
    configurable: !1,
    writable: !1
  });
}, ir = function(e, t) {
  return e ? t[e] : t[en];
}, Io = (e) => {
  let t = !0, n = !0, o = !0;
  for (let r = 0, a = e.length; r < a; r++) {
    const l = e[r];
    (l.checked !== !0 || l.indeterminate) && (t = !1, l.disabled || (o = !1)), (l.checked !== !1 || l.indeterminate) && (n = !1);
  }
  return { all: t, none: n, allWithoutDisable: o, half: !t && !n };
}, Mn = function(e) {
  if (e.childNodes.length === 0 || e.loading)
    return;
  const { all: t, none: n, half: o } = Io(e.childNodes);
  t ? (e.checked = !0, e.indeterminate = !1) : o ? (e.checked = !1, e.indeterminate = !0) : n && (e.checked = !1, e.indeterminate = !1);
  const r = e.parent;
  !r || r.level === 0 || e.store.checkStrictly || Mn(r);
}, Dn = function(e, t) {
  const n = e.store.props, o = e.data || {}, r = n[t];
  if (typeof r == "function")
    return r(o, e);
  if (typeof r == "string")
    return o[r];
  if (typeof r > "u") {
    const a = o[t];
    return a === void 0 ? "" : a;
  }
};
let Zv = 0;
class Ft {
  constructor(t) {
    this.id = Zv++, this.text = null, this.checked = !1, this.indeterminate = !1, this.data = null, this.expanded = !1, this.parent = null, this.visible = !0, this.isCurrent = !1, this.canFocus = !1;
    for (const n in t)
      Sn(t, n) && (this[n] = t[n]);
    this.level = 0, this.loaded = !1, this.childNodes = [], this.loading = !1, this.parent && (this.level = this.parent.level + 1);
  }
  initialize() {
    const t = this.store;
    if (!t)
      throw new Error("[Node]store is required!");
    t.registerNode(this);
    const n = t.props;
    if (n && typeof n.isLeaf < "u") {
      const a = Dn(this, "isLeaf");
      typeof a == "boolean" && (this.isLeafByUser = a);
    }
    if (t.lazy !== !0 && this.data ? (this.setData(this.data), t.defaultExpandAll && (this.expanded = !0, this.canFocus = !0)) : this.level > 0 && t.lazy && t.defaultExpandAll && this.expand(), Array.isArray(this.data) || ga(this, this.data), !this.data)
      return;
    const o = t.defaultExpandedKeys, r = t.key;
    r && o && o.includes(this.key) && this.expand(null, t.autoExpandParent), r && t.currentNodeKey !== void 0 && this.key === t.currentNodeKey && (t.currentNode = this, t.currentNode.isCurrent = !0), t.lazy && t._initDefaultCheckedNode(this), this.updateLeafState(), this.parent && (this.level === 1 || this.parent.expanded === !0) && (this.canFocus = !0);
  }
  setData(t) {
    Array.isArray(t) || ga(this, t), this.data = t, this.childNodes = [];
    let n;
    this.level === 0 && Array.isArray(this.data) ? n = this.data : n = Dn(this, "children") || [];
    for (let o = 0, r = n.length; o < r; o++)
      this.insertChild({ data: n[o] });
  }
  get label() {
    return Dn(this, "label");
  }
  get key() {
    const t = this.store.key;
    return this.data ? this.data[t] : null;
  }
  get disabled() {
    return Dn(this, "disabled");
  }
  get nextSibling() {
    const t = this.parent;
    if (t) {
      const n = t.childNodes.indexOf(this);
      if (n > -1)
        return t.childNodes[n + 1];
    }
    return null;
  }
  get previousSibling() {
    const t = this.parent;
    if (t) {
      const n = t.childNodes.indexOf(this);
      if (n > -1)
        return n > 0 ? t.childNodes[n - 1] : null;
    }
    return null;
  }
  contains(t, n = !0) {
    return (this.childNodes || []).some((o) => o === t || n && o.contains(t));
  }
  remove() {
    const t = this.parent;
    t && t.removeChild(this);
  }
  insertChild(t, n, o) {
    if (!t)
      throw new Error("InsertChild error: child is required.");
    if (!(t instanceof Ft)) {
      if (!o) {
        const r = this.getChildren(!0);
        r.includes(t.data) || (typeof n > "u" || n < 0 ? r.push(t.data) : r.splice(n, 0, t.data));
      }
      Object.assign(t, {
        parent: this,
        store: this.store
      }), t = ft(new Ft(t)), t instanceof Ft && t.initialize();
    }
    t.level = this.level + 1, typeof n > "u" || n < 0 ? this.childNodes.push(t) : this.childNodes.splice(n, 0, t), this.updateLeafState();
  }
  insertBefore(t, n) {
    let o;
    n && (o = this.childNodes.indexOf(n)), this.insertChild(t, o);
  }
  insertAfter(t, n) {
    let o;
    n && (o = this.childNodes.indexOf(n), o !== -1 && (o += 1)), this.insertChild(t, o);
  }
  removeChild(t) {
    const n = this.getChildren() || [], o = n.indexOf(t.data);
    o > -1 && n.splice(o, 1);
    const r = this.childNodes.indexOf(t);
    r > -1 && (this.store && this.store.deregisterNode(t), t.parent = null, this.childNodes.splice(r, 1)), this.updateLeafState();
  }
  removeChildByData(t) {
    let n = null;
    for (let o = 0; o < this.childNodes.length; o++)
      if (this.childNodes[o].data === t) {
        n = this.childNodes[o];
        break;
      }
    n && this.removeChild(n);
  }
  expand(t, n) {
    const o = () => {
      if (n) {
        let r = this.parent;
        for (; r.level > 0; )
          r.expanded = !0, r = r.parent;
      }
      this.expanded = !0, t && t(), this.childNodes.forEach((r) => {
        r.canFocus = !0;
      });
    };
    this.shouldLoadData() ? this.loadData((r) => {
      Array.isArray(r) && (this.checked ? this.setChecked(!0, !0) : this.store.checkStrictly || Mn(this), o());
    }) : o();
  }
  doCreateChildren(t, n = {}) {
    t.forEach((o) => {
      this.insertChild(Object.assign({ data: o }, n), void 0, !0);
    });
  }
  collapse() {
    this.expanded = !1, this.childNodes.forEach((t) => {
      t.canFocus = !1;
    });
  }
  shouldLoadData() {
    return this.store.lazy === !0 && this.store.load && !this.loaded;
  }
  updateLeafState() {
    if (this.store.lazy === !0 && this.loaded !== !0 && typeof this.isLeafByUser < "u") {
      this.isLeaf = this.isLeafByUser;
      return;
    }
    const t = this.childNodes;
    if (!this.store.lazy || this.store.lazy === !0 && this.loaded === !0) {
      this.isLeaf = !t || t.length === 0;
      return;
    }
    this.isLeaf = !1;
  }
  setChecked(t, n, o, r) {
    if (this.indeterminate = t === "half", this.checked = t === !0, this.store.checkStrictly)
      return;
    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      const { all: l, allWithoutDisable: s } = Io(this.childNodes);
      !this.isLeaf && !l && s && (this.checked = !1, t = !1);
      const i = () => {
        if (n) {
          const c = this.childNodes;
          for (let f = 0, p = c.length; f < p; f++) {
            const u = c[f];
            r = r || t !== !1;
            const h = u.disabled ? u.checked : r;
            u.setChecked(h, n, !0, r);
          }
          const { half: d, all: v } = Io(c);
          v || (this.checked = v, this.indeterminate = d);
        }
      };
      if (this.shouldLoadData()) {
        this.loadData(() => {
          i(), Mn(this);
        }, {
          checked: t !== !1
        });
        return;
      } else
        i();
    }
    const a = this.parent;
    !a || a.level === 0 || o || Mn(a);
  }
  getChildren(t = !1) {
    if (this.level === 0)
      return this.data;
    const n = this.data;
    if (!n)
      return null;
    const o = this.store.props;
    let r = "children";
    return o && (r = o.children || "children"), n[r] === void 0 && (n[r] = null), t && !n[r] && (n[r] = []), n[r];
  }
  updateChildren() {
    const t = this.getChildren() || [], n = this.childNodes.map((a) => a.data), o = {}, r = [];
    t.forEach((a, l) => {
      const s = a[en];
      !!s && n.findIndex((c) => c[en] === s) >= 0 ? o[s] = { index: l, data: a } : r.push({ index: l, data: a });
    }), this.store.lazy || n.forEach((a) => {
      o[a[en]] || this.removeChildByData(a);
    }), r.forEach(({ index: a, data: l }) => {
      this.insertChild({ data: l }, a);
    }), this.updateLeafState();
  }
  loadData(t, n = {}) {
    if (this.store.lazy === !0 && this.store.load && !this.loaded && (!this.loading || Object.keys(n).length)) {
      this.loading = !0;
      const o = (r) => {
        this.childNodes = [], this.doCreateChildren(r, n), this.loaded = !0, this.loading = !1, this.updateLeafState(), t && t.call(this, r);
      };
      this.store.load(this, o);
    } else
      t && t.call(this);
  }
}
class eg {
  constructor(t) {
    this.currentNode = null, this.currentNodeKey = null;
    for (const n in t)
      Sn(t, n) && (this[n] = t[n]);
    this.nodesMap = {};
  }
  initialize() {
    if (this.root = new Ft({
      data: this.data,
      store: this
    }), this.root.initialize(), this.lazy && this.load) {
      const t = this.load;
      t(this.root, (n) => {
        this.root.doCreateChildren(n), this._initDefaultCheckedNodes();
      });
    } else
      this._initDefaultCheckedNodes();
  }
  filter(t) {
    const n = this.filterNodeMethod, o = this.lazy, r = function(a) {
      const l = a.root ? a.root.childNodes : a.childNodes;
      if (l.forEach((s) => {
        s.visible = n.call(s, t, s.data, s), r(s);
      }), !a.visible && l.length) {
        let s = !0;
        s = !l.some((i) => i.visible), a.root ? a.root.visible = s === !1 : a.visible = s === !1;
      }
      !t || a.visible && !a.isLeaf && !o && a.expand();
    };
    r(this);
  }
  setData(t) {
    t !== this.root.data ? (this.root.setData(t), this._initDefaultCheckedNodes()) : this.root.updateChildren();
  }
  getNode(t) {
    if (t instanceof Ft)
      return t;
    const n = gt(t) ? ir(this.key, t) : t;
    return this.nodesMap[n] || null;
  }
  insertBefore(t, n) {
    const o = this.getNode(n);
    o.parent.insertBefore({ data: t }, o);
  }
  insertAfter(t, n) {
    const o = this.getNode(n);
    o.parent.insertAfter({ data: t }, o);
  }
  remove(t) {
    const n = this.getNode(t);
    n && n.parent && (n === this.currentNode && (this.currentNode = null), n.parent.removeChild(n));
  }
  append(t, n) {
    const o = n ? this.getNode(n) : this.root;
    o && o.insertChild({ data: t });
  }
  _initDefaultCheckedNodes() {
    const t = this.defaultCheckedKeys || [], n = this.nodesMap;
    t.forEach((o) => {
      const r = n[o];
      r && r.setChecked(!0, !this.checkStrictly);
    });
  }
  _initDefaultCheckedNode(t) {
    (this.defaultCheckedKeys || []).includes(t.key) && t.setChecked(!0, !this.checkStrictly);
  }
  setDefaultCheckedKey(t) {
    t !== this.defaultCheckedKeys && (this.defaultCheckedKeys = t, this._initDefaultCheckedNodes());
  }
  registerNode(t) {
    const n = this.key;
    !t || !t.data || (n ? t.key !== void 0 && (this.nodesMap[t.key] = t) : this.nodesMap[t.id] = t);
  }
  deregisterNode(t) {
    !this.key || !t || !t.data || (t.childNodes.forEach((o) => {
      this.deregisterNode(o);
    }), delete this.nodesMap[t.key]);
  }
  getCheckedNodes(t = !1, n = !1) {
    const o = [], r = function(a) {
      (a.root ? a.root.childNodes : a.childNodes).forEach((s) => {
        (s.checked || n && s.indeterminate) && (!t || t && s.isLeaf) && o.push(s.data), r(s);
      });
    };
    return r(this), o;
  }
  getCheckedKeys(t = !1) {
    return this.getCheckedNodes(t).map((n) => (n || {})[this.key]);
  }
  getHalfCheckedNodes() {
    const t = [], n = function(o) {
      (o.root ? o.root.childNodes : o.childNodes).forEach((a) => {
        a.indeterminate && t.push(a.data), n(a);
      });
    };
    return n(this), t;
  }
  getHalfCheckedKeys() {
    return this.getHalfCheckedNodes().map((t) => (t || {})[this.key]);
  }
  _getAllNodes() {
    const t = [], n = this.nodesMap;
    for (const o in n)
      Sn(n, o) && t.push(n[o]);
    return t;
  }
  updateChildren(t, n) {
    const o = this.nodesMap[t];
    if (!o)
      return;
    const r = o.childNodes;
    for (let a = r.length - 1; a >= 0; a--) {
      const l = r[a];
      this.remove(l.data);
    }
    for (let a = 0, l = n.length; a < l; a++) {
      const s = n[a];
      this.append(s, o.data);
    }
  }
  _setCheckedKeys(t, n = !1, o) {
    const r = this._getAllNodes().sort((s, i) => i.level - s.level), a = /* @__PURE__ */ Object.create(null), l = Object.keys(o);
    r.forEach((s) => s.setChecked(!1, !1));
    for (let s = 0, i = r.length; s < i; s++) {
      const c = r[s], d = c.data[t].toString();
      if (!l.includes(d)) {
        c.checked && !a[d] && c.setChecked(!1, !1);
        continue;
      }
      let f = c.parent;
      for (; f && f.level > 0; )
        a[f.data[t]] = !0, f = f.parent;
      if (c.isLeaf || this.checkStrictly) {
        c.setChecked(!0, !1);
        continue;
      }
      if (c.setChecked(!0, !0), n) {
        c.setChecked(!1, !1);
        const p = function(u) {
          u.childNodes.forEach((m) => {
            m.isLeaf || m.setChecked(!1, !1), p(m);
          });
        };
        p(c);
      }
    }
  }
  setCheckedNodes(t, n = !1) {
    const o = this.key, r = {};
    t.forEach((a) => {
      r[(a || {})[o]] = !0;
    }), this._setCheckedKeys(o, n, r);
  }
  setCheckedKeys(t, n = !1) {
    this.defaultCheckedKeys = t;
    const o = this.key, r = {};
    t.forEach((a) => {
      r[a] = !0;
    }), this._setCheckedKeys(o, n, r);
  }
  setDefaultExpandedKeys(t) {
    t = t || [], this.defaultExpandedKeys = t, t.forEach((n) => {
      const o = this.getNode(n);
      o && o.expand(null, this.autoExpandParent);
    });
  }
  setChecked(t, n, o) {
    const r = this.getNode(t);
    r && r.setChecked(!!n, o);
  }
  getCurrentNode() {
    return this.currentNode;
  }
  setCurrentNode(t) {
    const n = this.currentNode;
    n && (n.isCurrent = !1), this.currentNode = t, this.currentNode.isCurrent = !0;
  }
  setUserCurrentNode(t, n = !0) {
    const o = t[this.key], r = this.nodesMap[o];
    this.setCurrentNode(r), n && this.currentNode.level > 1 && this.currentNode.parent.expand(null, !0);
  }
  setCurrentNodeKey(t, n = !0) {
    if (t == null) {
      this.currentNode && (this.currentNode.isCurrent = !1), this.currentNode = null;
      return;
    }
    const o = this.getNode(t);
    o && (this.setCurrentNode(o), n && this.currentNode.level > 1 && this.currentNode.parent.expand(null, !0));
  }
}
const tg = ee({
  name: "ElTreeNodeContent",
  props: {
    node: {
      type: Object,
      required: !0
    },
    renderContent: Function
  },
  setup(e) {
    const t = te("tree"), n = ae("NodeInstance"), o = ae("RootTree");
    return () => {
      const r = e.node, { data: a, store: l } = r;
      return e.renderContent ? e.renderContent(jn, { _self: n, node: r, data: a, store: l }) : o.ctx.slots.default ? o.ctx.slots.default({ node: r, data: a }) : jn("span", { class: t.be("node", "label") }, [r.label]);
    };
  }
});
var ng = /* @__PURE__ */ le(tg, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);
function Cl(e) {
  const t = ae("TreeNodeMap", null), n = {
    treeNodeExpand: (o) => {
      e.node !== o && e.node.collapse();
    },
    children: []
  };
  return t && t.children.push(n), Ee("TreeNodeMap", n), {
    broadcastExpanded: (o) => {
      if (!!e.accordion)
        for (const r of n.children)
          r.treeNodeExpand(o);
    }
  };
}
const El = Symbol("dragEvents");
function og({ props: e, ctx: t, el$: n, dropIndicator$: o, store: r }) {
  const a = te("tree"), l = P({
    showDropIndicator: !1,
    draggingNode: null,
    dropNode: null,
    allowDrop: !0,
    dropType: null
  });
  return Ee(El, {
    treeNodeDragStart: ({ event: d, treeNode: v }) => {
      if (typeof e.allowDrag == "function" && !e.allowDrag(v.node))
        return d.preventDefault(), !1;
      d.dataTransfer.effectAllowed = "move";
      try {
        d.dataTransfer.setData("text/plain", "");
      } catch {
      }
      l.value.draggingNode = v, t.emit("node-drag-start", v.node, d);
    },
    treeNodeDragOver: ({ event: d, treeNode: v }) => {
      const f = v, p = l.value.dropNode;
      p && p !== f && uo(p.$el, a.is("drop-inner"));
      const u = l.value.draggingNode;
      if (!u || !f)
        return;
      let h = !0, m = !0, b = !0, S = !0;
      typeof e.allowDrop == "function" && (h = e.allowDrop(u.node, f.node, "prev"), S = m = e.allowDrop(u.node, f.node, "inner"), b = e.allowDrop(u.node, f.node, "next")), d.dataTransfer.dropEffect = m || h || b ? "move" : "none", (h || m || b) && p !== f && (p && t.emit("node-drag-leave", u.node, p.node, d), t.emit("node-drag-enter", u.node, f.node, d)), (h || m || b) && (l.value.dropNode = f), f.node.nextSibling === u.node && (b = !1), f.node.previousSibling === u.node && (h = !1), f.node.contains(u.node, !1) && (m = !1), (u.node === f.node || u.node.contains(f.node)) && (h = !1, m = !1, b = !1);
      const A = f.$el.getBoundingClientRect(), L = n.value.getBoundingClientRect();
      let $;
      const w = h ? m ? 0.25 : b ? 0.45 : 1 : -1, C = b ? m ? 0.75 : h ? 0.55 : 0 : 1;
      let D = -9999;
      const T = d.clientY - A.top;
      T < A.height * w ? $ = "before" : T > A.height * C ? $ = "after" : m ? $ = "inner" : $ = "none";
      const x = f.$el.querySelector(`.${a.be("node", "expand-icon")}`).getBoundingClientRect(), B = o.value;
      $ === "before" ? D = x.top - L.top : $ === "after" && (D = x.bottom - L.top), B.style.top = `${D}px`, B.style.left = `${x.right - L.left}px`, $ === "inner" ? lc(f.$el, a.is("drop-inner")) : uo(f.$el, a.is("drop-inner")), l.value.showDropIndicator = $ === "before" || $ === "after", l.value.allowDrop = l.value.showDropIndicator || S, l.value.dropType = $, t.emit("node-drag-over", u.node, f.node, d);
    },
    treeNodeDragEnd: (d) => {
      const { draggingNode: v, dropType: f, dropNode: p } = l.value;
      if (d.preventDefault(), d.dataTransfer.dropEffect = "move", v && p) {
        const u = { data: v.node.data };
        f !== "none" && v.node.remove(), f === "before" ? p.node.parent.insertBefore(u, p.node) : f === "after" ? p.node.parent.insertAfter(u, p.node) : f === "inner" && p.node.insertChild(u), f !== "none" && r.value.registerNode(u), uo(p.$el, a.is("drop-inner")), t.emit("node-drag-end", v.node, p.node, f, d), f !== "none" && t.emit("node-drop", v.node, p.node, f, d);
      }
      v && !p && t.emit("node-drag-end", v.node, null, f, d), l.value.showDropIndicator = !1, l.value.draggingNode = null, l.value.dropNode = null, l.value.allowDrop = !0;
    }
  }), {
    dragState: l
  };
}
const rg = ee({
  name: "ElTreeNode",
  components: {
    ElCollapseTransition: Bv,
    ElCheckbox: $v,
    NodeContent: ng,
    ElIcon: ct,
    Loading: Ma
  },
  props: {
    node: {
      type: Ft,
      default: () => ({})
    },
    props: {
      type: Object,
      default: () => ({})
    },
    accordion: Boolean,
    renderContent: Function,
    renderAfterExpand: Boolean,
    showCheckbox: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["node-expand"],
  setup(e, t) {
    const n = te("tree"), { broadcastExpanded: o } = Cl(e), r = ae("RootTree"), a = P(!1), l = P(!1), s = P(null), i = P(null), c = P(null), d = ae(El), v = Ie();
    Ee("NodeInstance", v), r || we("Tree", "Can not find node's tree."), e.node.expanded && (a.value = !0, l.value = !0);
    const f = r.props.children || "children";
    z(() => {
      const T = e.node.data[f];
      return T && [...T];
    }, () => {
      e.node.updateChildren();
    }), z(() => e.node.indeterminate, (T) => {
      h(e.node.checked, T);
    }), z(() => e.node.checked, (T) => {
      h(T, e.node.indeterminate);
    }), z(() => e.node.expanded, (T) => {
      J(() => a.value = T), T && (l.value = !0);
    });
    const p = (T) => ir(r.props.nodeKey, T.data), u = (T) => {
      const x = e.props.class;
      if (!x)
        return {};
      let B;
      if (Xt(x)) {
        const { data: ne } = T;
        B = x(ne, T);
      } else
        B = x;
      return pt(B) ? { [B]: !0 } : B;
    }, h = (T, x) => {
      (s.value !== T || i.value !== x) && r.ctx.emit("check-change", e.node.data, T, x), s.value = T, i.value = x;
    }, m = (T) => {
      const x = r.store.value;
      x.setCurrentNode(e.node), r.ctx.emit("current-change", x.currentNode ? x.currentNode.data : null, x.currentNode), r.currentNode.value = e.node, r.props.expandOnClickNode && S(), r.props.checkOnClickNode && !e.node.disabled && A(null, {
        target: { checked: !e.node.checked }
      }), r.ctx.emit("node-click", e.node.data, e.node, v, T);
    }, b = (T) => {
      r.instance.vnode.props.onNodeContextmenu && (T.stopPropagation(), T.preventDefault()), r.ctx.emit("node-contextmenu", T, e.node.data, e.node, v);
    }, S = () => {
      e.node.isLeaf || (a.value ? (r.ctx.emit("node-collapse", e.node.data, e.node, v), e.node.collapse()) : (e.node.expand(), t.emit("node-expand", e.node.data, e.node, v)));
    }, A = (T, x) => {
      e.node.setChecked(x.target.checked, !r.props.checkStrictly), J(() => {
        const B = r.store.value;
        r.ctx.emit("check", e.node.data, {
          checkedNodes: B.getCheckedNodes(),
          checkedKeys: B.getCheckedKeys(),
          halfCheckedNodes: B.getHalfCheckedNodes(),
          halfCheckedKeys: B.getHalfCheckedKeys()
        });
      });
    };
    return {
      ns: n,
      node$: c,
      tree: r,
      expanded: a,
      childNodeRendered: l,
      oldChecked: s,
      oldIndeterminate: i,
      getNodeKey: p,
      getNodeClass: u,
      handleSelectChange: h,
      handleClick: m,
      handleContextMenu: b,
      handleExpandIconClick: S,
      handleCheckChange: A,
      handleChildNodeExpand: (T, x, B) => {
        o(x), r.ctx.emit("node-expand", T, x, B);
      },
      handleDragStart: (T) => {
        !r.props.draggable || d.treeNodeDragStart({ event: T, treeNode: e });
      },
      handleDragOver: (T) => {
        T.preventDefault(), r.props.draggable && d.treeNodeDragOver({
          event: T,
          treeNode: { $el: c.value, node: e.node }
        });
      },
      handleDrop: (T) => {
        T.preventDefault();
      },
      handleDragEnd: (T) => {
        !r.props.draggable || d.treeNodeDragEnd(T);
      },
      CaretRight: bc
    };
  }
}), ag = ["aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-key"], lg = ["aria-expanded"];
function ig(e, t, n, o, r, a) {
  const l = ue("el-icon"), s = ue("el-checkbox"), i = ue("loading"), c = ue("node-content"), d = ue("el-tree-node"), v = ue("el-collapse-transition");
  return be((O(), M("div", {
    ref: "node$",
    class: _([
      e.ns.b("node"),
      e.ns.is("expanded", e.expanded),
      e.ns.is("current", e.node.isCurrent),
      e.ns.is("hidden", !e.node.visible),
      e.ns.is("focusable", !e.node.disabled),
      e.ns.is("checked", !e.node.disabled && e.node.checked),
      e.getNodeClass(e.node)
    ]),
    role: "treeitem",
    tabindex: "-1",
    "aria-expanded": e.expanded,
    "aria-disabled": e.node.disabled,
    "aria-checked": e.node.checked,
    draggable: e.tree.props.draggable,
    "data-key": e.getNodeKey(e.node),
    onClick: t[1] || (t[1] = fe((...f) => e.handleClick && e.handleClick(...f), ["stop"])),
    onContextmenu: t[2] || (t[2] = (...f) => e.handleContextMenu && e.handleContextMenu(...f)),
    onDragstart: t[3] || (t[3] = fe((...f) => e.handleDragStart && e.handleDragStart(...f), ["stop"])),
    onDragover: t[4] || (t[4] = fe((...f) => e.handleDragOver && e.handleDragOver(...f), ["stop"])),
    onDragend: t[5] || (t[5] = fe((...f) => e.handleDragEnd && e.handleDragEnd(...f), ["stop"])),
    onDrop: t[6] || (t[6] = fe((...f) => e.handleDrop && e.handleDrop(...f), ["stop"]))
  }, [
    q("div", {
      class: _(e.ns.be("node", "content")),
      style: Ce({ paddingLeft: (e.node.level - 1) * e.tree.props.indent + "px" })
    }, [
      e.tree.props.icon || e.CaretRight ? (O(), W(l, {
        key: 0,
        class: _([
          e.ns.be("node", "expand-icon"),
          e.ns.is("leaf", e.node.isLeaf),
          {
            expanded: !e.node.isLeaf && e.expanded
          }
        ]),
        onClick: fe(e.handleExpandIconClick, ["stop"])
      }, {
        default: U(() => [
          (O(), W(Ze(e.tree.props.icon || e.CaretRight)))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : j("v-if", !0),
      e.showCheckbox ? (O(), W(s, {
        key: 1,
        "model-value": e.node.checked,
        indeterminate: e.node.indeterminate,
        disabled: !!e.node.disabled,
        onClick: t[0] || (t[0] = fe(() => {
        }, ["stop"])),
        onChange: e.handleCheckChange
      }, null, 8, ["model-value", "indeterminate", "disabled", "onChange"])) : j("v-if", !0),
      e.node.loading ? (O(), W(l, {
        key: 2,
        class: _([e.ns.be("node", "loading-icon"), e.ns.is("loading")])
      }, {
        default: U(() => [
          pe(i)
        ]),
        _: 1
      }, 8, ["class"])) : j("v-if", !0),
      pe(c, {
        node: e.node,
        "render-content": e.renderContent
      }, null, 8, ["node", "render-content"])
    ], 6),
    pe(v, null, {
      default: U(() => [
        !e.renderAfterExpand || e.childNodeRendered ? be((O(), M("div", {
          key: 0,
          class: _(e.ns.be("node", "children")),
          role: "group",
          "aria-expanded": e.expanded
        }, [
          (O(!0), M(Ue, null, Fn(e.node.childNodes, (f) => (O(), W(d, {
            key: e.getNodeKey(f),
            "render-content": e.renderContent,
            "render-after-expand": e.renderAfterExpand,
            "show-checkbox": e.showCheckbox,
            node: f,
            accordion: e.accordion,
            props: e.props,
            onNodeExpand: e.handleChildNodeExpand
          }, null, 8, ["render-content", "render-after-expand", "show-checkbox", "node", "accordion", "props", "onNodeExpand"]))), 128))
        ], 10, lg)), [
          [ht, e.expanded]
        ]) : j("v-if", !0)
      ]),
      _: 1
    })
  ], 42, ag)), [
    [ht, e.node.visible]
  ]);
}
var sg = /* @__PURE__ */ le(rg, [["render", ig], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]]);
function ug({ el$: e }, t) {
  const n = te("tree"), o = zt([]), r = zt([]);
  Pe(() => {
    l();
  }), Lo(() => {
    o.value = Array.from(e.value.querySelectorAll("[role=treeitem]")), r.value = Array.from(e.value.querySelectorAll("input[type=checkbox]"));
  }), z(r, (s) => {
    s.forEach((i) => {
      i.setAttribute("tabindex", "-1");
    });
  }), Nt(e, "keydown", (s) => {
    const i = s.target;
    if (!i.className.includes(n.b("node")))
      return;
    const c = s.code;
    o.value = Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));
    const d = o.value.indexOf(i);
    let v;
    if ([ze.up, ze.down].includes(c)) {
      if (s.preventDefault(), c === ze.up) {
        v = d === -1 ? 0 : d !== 0 ? d - 1 : o.value.length - 1;
        const p = v;
        for (; !t.value.getNode(o.value[v].dataset.key).canFocus; ) {
          if (v--, v === p) {
            v = -1;
            break;
          }
          v < 0 && (v = o.value.length - 1);
        }
      } else {
        v = d === -1 ? 0 : d < o.value.length - 1 ? d + 1 : 0;
        const p = v;
        for (; !t.value.getNode(o.value[v].dataset.key).canFocus; ) {
          if (v++, v === p) {
            v = -1;
            break;
          }
          v >= o.value.length && (v = 0);
        }
      }
      v !== -1 && o.value[v].focus();
    }
    [ze.left, ze.right].includes(c) && (s.preventDefault(), i.click());
    const f = i.querySelector('[type="checkbox"]');
    [ze.enter, ze.space].includes(c) && f && (s.preventDefault(), f.click());
  });
  const l = () => {
    var s;
    o.value = Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)), r.value = Array.from(e.value.querySelectorAll("input[type=checkbox]"));
    const i = e.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);
    if (i.length) {
      i[0].setAttribute("tabindex", "0");
      return;
    }
    (s = o.value[0]) == null || s.setAttribute("tabindex", "0");
  };
}
const dg = ee({
  name: "ElTree",
  components: { ElTreeNode: sg },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    emptyText: {
      type: String
    },
    renderAfterExpand: {
      type: Boolean,
      default: !0
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: !0
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: !1
    },
    autoExpandParent: {
      type: Boolean,
      default: !0
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number],
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: !1
    },
    draggable: {
      type: Boolean,
      default: !1
    },
    allowDrag: Function,
    allowDrop: Function,
    props: {
      type: Object,
      default: () => ({
        children: "children",
        label: "label",
        disabled: "disabled"
      })
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18
    },
    icon: {
      type: To
    }
  },
  emits: [
    "check-change",
    "current-change",
    "node-click",
    "node-contextmenu",
    "node-collapse",
    "node-expand",
    "check",
    "node-drag-start",
    "node-drag-end",
    "node-drop",
    "node-drag-leave",
    "node-drag-enter",
    "node-drag-over"
  ],
  setup(e, t) {
    const { t: n } = eo(), o = te("tree"), r = P(new eg({
      key: e.nodeKey,
      data: e.data,
      lazy: e.lazy,
      props: e.props,
      load: e.load,
      currentNodeKey: e.currentNodeKey,
      checkStrictly: e.checkStrictly,
      checkDescendants: e.checkDescendants,
      defaultCheckedKeys: e.defaultCheckedKeys,
      defaultExpandedKeys: e.defaultExpandedKeys,
      autoExpandParent: e.autoExpandParent,
      defaultExpandAll: e.defaultExpandAll,
      filterNodeMethod: e.filterNodeMethod
    }));
    r.value.initialize();
    const a = P(r.value.root), l = P(null), s = P(null), i = P(null), { broadcastExpanded: c } = Cl(e), { dragState: d } = og({
      props: e,
      ctx: t,
      el$: s,
      dropIndicator$: i,
      store: r
    });
    ug({ el$: s }, r);
    const v = k(() => {
      const { childNodes: N } = a.value;
      return !N || N.length === 0 || N.every(({ visible: R }) => !R);
    });
    z(() => e.currentNodeKey, (N) => {
      r.value.setCurrentNodeKey(N);
    }), z(() => e.defaultCheckedKeys, (N) => {
      r.value.setDefaultCheckedKey(N);
    }), z(() => e.defaultExpandedKeys, (N) => {
      r.value.setDefaultExpandedKeys(N);
    }), z(() => e.data, (N) => {
      r.value.setData(N);
    }, { deep: !0 }), z(() => e.checkStrictly, (N) => {
      r.value.checkStrictly = N;
    });
    const f = (N) => {
      if (!e.filterNodeMethod)
        throw new Error("[Tree] filterNodeMethod is required when filter");
      r.value.filter(N);
    }, p = (N) => ir(e.nodeKey, N.data), u = (N) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in getNodePath");
      const R = r.value.getNode(N);
      if (!R)
        return [];
      const X = [R.data];
      let Z = R.parent;
      for (; Z && Z !== a.value; )
        X.push(Z.data), Z = Z.parent;
      return X.reverse();
    }, h = (N, R) => r.value.getCheckedNodes(N, R), m = (N) => r.value.getCheckedKeys(N), b = () => {
      const N = r.value.getCurrentNode();
      return N ? N.data : null;
    }, S = () => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in getCurrentKey");
      const N = b();
      return N ? N[e.nodeKey] : null;
    }, A = (N, R) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedNodes");
      r.value.setCheckedNodes(N, R);
    }, L = (N, R) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedKeys");
      r.value.setCheckedKeys(N, R);
    }, $ = (N, R, X) => {
      r.value.setChecked(N, R, X);
    }, w = () => r.value.getHalfCheckedNodes(), C = () => r.value.getHalfCheckedKeys(), D = (N, R = !0) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentNode");
      const X = r.value.currentNode;
      r.value.setUserCurrentNode(N, R);
      const Z = r.value.currentNode;
      X !== Z && t.emit("current-change", Z ? Z.data : null, Z);
    }, T = (N, R = !0) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentKey");
      const X = r.value.currentNode;
      r.value.setCurrentNodeKey(N, R);
      const Z = r.value.currentNode;
      X !== Z && t.emit("current-change", Z ? Z.data : null, Z);
    }, x = (N) => r.value.getNode(N), B = (N) => {
      r.value.remove(N);
    }, ne = (N, R) => {
      r.value.append(N, R);
    }, Q = (N, R) => {
      r.value.insertBefore(N, R);
    }, K = (N, R) => {
      r.value.insertAfter(N, R);
    }, V = (N, R, X) => {
      c(R), t.emit("node-expand", N, R, X);
    }, H = (N, R) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in updateKeyChild");
      r.value.updateChildren(N, R);
    };
    return Ee("RootTree", {
      ctx: t,
      props: e,
      store: r,
      root: a,
      currentNode: l,
      instance: Ie()
    }), Ee(On, void 0), {
      ns: o,
      store: r,
      root: a,
      currentNode: l,
      dragState: d,
      el$: s,
      dropIndicator$: i,
      isEmpty: v,
      filter: f,
      getNodeKey: p,
      getNodePath: u,
      getCheckedNodes: h,
      getCheckedKeys: m,
      getCurrentNode: b,
      getCurrentKey: S,
      setCheckedNodes: A,
      setCheckedKeys: L,
      setChecked: $,
      getHalfCheckedNodes: w,
      getHalfCheckedKeys: C,
      setCurrentNode: D,
      setCurrentKey: T,
      t: n,
      getNode: x,
      remove: B,
      append: ne,
      insertBefore: Q,
      insertAfter: K,
      handleNodeExpand: V,
      updateKeyChildren: H
    };
  }
});
function cg(e, t, n, o, r, a) {
  var l;
  const s = ue("el-tree-node");
  return O(), M("div", {
    ref: "el$",
    class: _([
      e.ns.b(),
      e.ns.is("dragging", !!e.dragState.draggingNode),
      e.ns.is("drop-not-allow", !e.dragState.allowDrop),
      e.ns.is("drop-inner", e.dragState.dropType === "inner"),
      { [e.ns.m("highlight-current")]: e.highlightCurrent }
    ]),
    role: "tree"
  }, [
    (O(!0), M(Ue, null, Fn(e.root.childNodes, (i) => (O(), W(s, {
      key: e.getNodeKey(i),
      node: i,
      props: e.props,
      accordion: e.accordion,
      "render-after-expand": e.renderAfterExpand,
      "show-checkbox": e.showCheckbox,
      "render-content": e.renderContent,
      onNodeExpand: e.handleNodeExpand
    }, null, 8, ["node", "props", "accordion", "render-after-expand", "show-checkbox", "render-content", "onNodeExpand"]))), 128)),
    e.isEmpty ? (O(), M("div", {
      key: 0,
      class: _(e.ns.e("empty-block"))
    }, [
      q("span", {
        class: _(e.ns.e("empty-text"))
      }, ye((l = e.emptyText) != null ? l : e.t("el.tree.emptyText")), 3)
    ], 2)) : j("v-if", !0),
    be(q("div", {
      ref: "dropIndicator$",
      class: _(e.ns.e("drop-indicator"))
    }, null, 2), [
      [ht, e.dragState.showDropIndicator]
    ])
  ], 2);
}
var Kn = /* @__PURE__ */ le(dg, [["render", cg], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);
Kn.install = (e) => {
  e.component(Kn.name, Kn);
};
const fg = Kn, Po = fg;
const pg = (e, { attrs: t }, {
  tree: n,
  key: o
}) => {
  const r = te("tree-select"), a = {
    ...Zt(Wt(e), Object.keys($o.props)),
    ...t,
    valueKey: o,
    popperClass: k(() => {
      const l = [r.e("popper")];
      return e.popperClass && l.push(e.popperClass), l.join(" ");
    }),
    filterMethod: (l = "") => {
      e.filterMethod && e.filterMethod(l), J(() => {
        var s;
        (s = n.value) == null || s.filter(l);
      });
    },
    onVisibleChange: (l) => {
      var s;
      (s = t.onVisibleChange) == null || s.call(t, l), e.filterable && l && a.filterMethod();
    }
  };
  return a;
}, hg = ee({
  extends: va,
  setup(e, t) {
    const n = va.setup(e, t);
    delete n.selectOptionClick;
    const o = Ie().proxy;
    return J(() => {
      n.select.cachedOptions.get(o.value) || n.select.onOptionCreate(o);
    }), n;
  },
  methods: {
    selectOptionClick() {
      this.$el.parentElement.click();
    }
  }
});
function Ao(e) {
  return e || e === 0;
}
function Sl(e) {
  return Array.isArray(e) && e.length;
}
function ho(e) {
  return Array.isArray(e) ? e : Ao(e) ? [e] : [];
}
function zn(e, t, n, o, r) {
  for (let a = 0; a < e.length; a++) {
    const l = e[a];
    if (t(l, a, e, r))
      return o ? o(l, a, e, r) : l;
    {
      const s = n(l);
      if (Sl(s)) {
        const i = zn(
          s,
          t,
          n,
          o,
          l
        );
        if (i)
          return i;
      }
    }
  }
}
const vg = (e, { attrs: t, slots: n, emit: o }, {
  select: r,
  tree: a,
  key: l
}) => {
  z(
    () => e.modelValue,
    () => {
      e.showCheckbox && J(() => {
        const d = a.value;
        d && !wo(
          d.getCheckedKeys(),
          ho(e.modelValue)
        ) && d.setCheckedKeys(ho(e.modelValue));
      });
    },
    {
      immediate: !0,
      deep: !0
    }
  );
  const s = k(() => ({
    value: l.value,
    ...e.props
  })), i = (d, v) => {
    var p;
    const f = s.value[d];
    return Xt(f) ? f(
      v,
      (p = a.value) == null ? void 0 : p.getNode(i("value", v))
    ) : v[f];
  }, c = ho(e.modelValue).map((d) => zn(
    e.data || [],
    (v) => i("value", v) === d,
    (v) => i("children", v),
    (v, f, p, u) => u && i("value", u)
  )).filter((d) => Ao(d));
  return {
    ...Zt(Wt(e), Object.keys(Po.props)),
    ...t,
    nodeKey: l,
    expandOnClickNode: k(() => !e.checkStrictly && e.expandOnClickNode),
    defaultExpandedKeys: k(() => e.defaultExpandedKeys ? e.defaultExpandedKeys.concat(c) : c),
    renderContent: (d, { node: v, data: f, store: p }) => d(
      hg,
      {
        value: i("value", f),
        label: i("label", f),
        disabled: i("disabled", f)
      },
      e.renderContent ? () => e.renderContent(d, { node: v, data: f, store: p }) : n.default ? () => n.default({ node: v, data: f, store: p }) : void 0
    ),
    filterNodeMethod: (d, v, f) => {
      var p;
      return e.filterNodeMethod ? e.filterNodeMethod(d, v, f) : d ? (p = i("label", v)) == null ? void 0 : p.includes(d) : !0;
    },
    onNodeClick: (d, v, f) => {
      var p, u, h;
      if (console.log("1. ", d, v, f), (p = t.onNodeClick) == null || p.call(t, d, v, f), !(e.showCheckbox && e.checkOnClickNode))
        if (!e.showCheckbox && (e.checkStrictly || v.isLeaf)) {
          if (!i("disabled", d)) {
            const m = (u = r.value) == null ? void 0 : u.options.get(
              i("value", d)
            );
            (h = r.value) == null || h.handleOptionSelect(m, !0);
          }
        } else
          e.expandOnClickNode && f.proxy.handleExpandIconClick();
    },
    onCheck: (d, v) => {
      var b;
      console.log("10. ", d, v);
      const f = a.value, p = Zt(
        f.store.nodesMap,
        v.checkedKeys
      );
      console.log("10.1, all check nodeInstance", p);
      const u = Zt(f.store.nodesMap, d.value)[d.value], h = u.isLeaf ? u.parent.key : u.key;
      console.log(
        "10.3, realCurCheckNodeParentValue - ",
        h
      ), console.log(
        "10.4 - check filter",
        xr(p).filter(
          (S) => S.key === h || S.parent.key === h
        ).map((S) => S.key)
      ), f.setCheckedKeys(
        xr(p).filter(
          (S) => S.key === h || S.parent.key === h
        ).map((S) => S.key)
      ), (b = t.onCheck) == null || b.call(t, d, v);
      const m = i("value", d);
      if (e.checkStrictly)
        o(
          he,
          e.multiple ? v.checkedKeys : v.checkedKeys.includes(m) ? m : void 0
        );
      else if (e.multiple)
        o(
          he,
          a.value.getCheckedKeys(!0)
        );
      else {
        const S = zn(
          [d],
          ($) => !Sl(i("children", $)) && !i("disabled", $),
          ($) => i("children", $)
        ), A = S ? i("value", S) : void 0, L = Ao(e.modelValue) && !!zn(
          [d],
          ($) => i("value", $) === e.modelValue,
          ($) => i("children", $)
        );
        o(
          he,
          A === e.modelValue || L ? void 0 : A
        );
      }
    }
  };
}, mg = ee({
  name: "EVTreeSelect",
  inheritAttrs: !1,
  props: {
    ...$o.props,
    ...Po.props
  },
  setup(e, t) {
    const { slots: n, expose: o } = t, r = P(), a = P(), l = k(() => e.nodeKey || e.valueKey || "value"), s = pg(e, t, { select: r, tree: a, key: l }), i = vg(e, t, { select: r, tree: a, key: l }), c = ft({});
    return o(c), Pe(() => {
      console.log("check tree ref,", a.value), Object.assign(c, {
        ...Zt(a.value, [
          "filter",
          "updateKeyChildren",
          "getCheckedNodes",
          "setCheckedNodes",
          "getCheckedKeys",
          "setCheckedKeys",
          "setChecked",
          "getHalfCheckedNodes",
          "getHalfCheckedKeys",
          "getCurrentKey",
          "getCurrentNode",
          "setCurrentKey",
          "setCurrentNode",
          "getNode",
          "remove",
          "append",
          "insertBefore",
          "insertAfter"
        ]),
        ...Zt(r.value, ["focus", "blur"])
      });
    }), () => jn(
      $o,
      ft({
        ...s,
        ref: (d) => r.value = d
      }),
      {
        ...n,
        default: () => jn(
          Po,
          ft({
            ...i,
            ref: (d) => a.value = d
          })
        )
      }
    );
  }
});
export {
  mg as EVTreeSelect
};
