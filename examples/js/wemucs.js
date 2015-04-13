!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length, c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (hb.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a);
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c;
        });
    }
    function e(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    function f(a) {
        var b = ob[a] = {};
        return _.each(a.match(nb) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), 
        _.ready();
    }
    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = _.expando + Math.random();
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(ub, "-$1").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : tb.test(c) ? _.parseJSON(c) : c;
            } catch (e) {}
            sb.set(a, b, c);
        } else c = void 0;
        return c;
    }
    function j() {
        return !0;
    }
    function k() {
        return !1;
    }
    function l() {
        try {
            return Z.activeElement;
        } catch (a) {}
    }
    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function o(a) {
        var b = Kb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) rb.set(a[c], "globalEval", !b || rb.get(b[c], "globalEval"));
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (rb.hasData(a) && (f = rb.access(a), g = rb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c]);
            }
            sb.hasData(a) && (h = sb.access(a), i = _.extend({}, h), sb.set(b, i));
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([ a ], c) : c;
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && yb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f;
    }
    function u(a) {
        var b = Z, c = Ob[a];
        return c || (c = t(a, b), "none" !== c && c || (Nb = (Nb || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = Nb[0].contentDocument, b.write(), b.close(), c = t(a, b), Nb.detach()), Ob[a] = c), 
        c;
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Rb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), 
        Qb.test(g) && Pb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xb.length; e--; ) if (b = Xb[e] + c, 
        b in a) return b;
        return d;
    }
    function y(a, b, c) {
        var d = Tb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wb[f], !0, e)), 
        d ? ("content" === c && (g -= _.css(a, "padding" + wb[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wb[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wb[f], !0, e), 
        "padding" !== c && (g += _.css(a, "border" + wb[f] + "Width", !0, e)));
        return g;
    }
    function A(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Rb(a), g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qb.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = rb.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xb(d) && (f[g] = rb.access(d, "olddisplay", u(d.nodeName)))) : (e = xb(d), 
        "none" === c && e || rb.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e);
    }
    function D() {
        return setTimeout(function() {
            Yb = void 0;
        }), Yb = _.now();
    }
    function E(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wb[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function F(a, b, c) {
        for (var d, e = (cc[b] || []).concat(cc["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xb(a), p = rb.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ n.overflow, n.overflowX, n.overflowY ], 
        j = _.css(a, "display"), k = "none" === j ? rb.get(a, "olddisplay") || u(a.nodeName) : j, 
        "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), 
        c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], $b.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                if ("show" !== e || !p || void 0 === p[d]) continue;
                o = !0;
            }
            m[d] = p && p[d] || _.style(a, d);
        } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j); else {
            p ? "hidden" in p && (o = p.hidden) : p = rb.access(a, "fxshow", {}), f && (p.hidden = !o), 
            o ? _(a).show() : l.done(function() {
                _(a).hide();
            }), l.done(function() {
                var b;
                rb.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b]);
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function I(a, b, c) {
        var d, e, f = 0, g = bc.length, h = _.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Yb || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: _.extend({}, b),
            opts: _.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Yb || D(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++) if (d = bc[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(nb) || [];
            if (_.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                e(j), !1);
            }), i;
        }
        var f = {}, g = a === vc;
        return e(b.dataTypes[0]) || !f["*"] && e("*");
    }
    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a;
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || zc.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== _.type(b)) d(a, b); else for (e in b) O(a + "[" + e + "]", b[e], c, d);
    }
    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var Q = [], R = Q.slice, S = Q.concat, T = Q.push, U = Q.indexOf, V = {}, W = V.toString, X = V.hasOwnProperty, Y = {}, Z = a.document, $ = "2.1.1", _ = function(a, b) {
        return new _.fn.init(a, b);
    }, ab = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, bb = /^-ms-/, cb = /-([\da-z])/gi, db = function(a, b) {
        return b.toUpperCase();
    };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this);
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return _.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, 
        f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) >= 0;
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), 
            b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(bb, "ms-").replace(cb, db);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) for (;g > f && (e = b.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = b.apply(a[f], d), 
                e === !1) break;
            } else if (h) for (;g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = b.call(a[f], f, a[f]), 
            e === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(ab, "");
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [ a ] : a) : T.call(d, a)), 
            d;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) for (;g > f; f++) e = b(a[f], f, d), null != e && i.push(e); else for (f in a) e = b(a[f], f, d), 
            null != e && i.push(e);
            return S.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), 
            e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)));
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0;
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase();
    });
    var eb = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (I && !d) {
                if (e = sb.exec(a)) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c;
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), 
                    c;
                } else {
                    if (e[2]) return _.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && v.getElementsByClassName && b.getElementsByClassName) return _.apply(c, b.getElementsByClassName(g)), 
                    c;
                }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ub, "\\$&") : b.setAttribute("id", n), 
                        n = "[id='" + n + "'] ", i = j.length; i--; ) j[i] = n + m(j[i]);
                        o = tb.test(a) && k(b.parentNode) || b, p = j.join(",");
                    }
                    if (p) try {
                        return _.apply(c, o.querySelectorAll(p)), c;
                    } catch (q) {} finally {
                        l || b.removeAttribute("id");
                    }
                }
            }
            return B(a.replace(ib, "$1"), b, c, d);
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d;
            }
            var b = [];
            return a;
        }
        function d(a) {
            return a[N] = !0, a;
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; ) w.attrHandle[c[d]] = b;
        }
        function g(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function k(a) {
            return a && typeof a.getElementsByTagName !== V && a;
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ P, f ];
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) {
                    if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d;
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [ h ] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--; ) (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i);
                        }
                        for (k = t.length; k--; ) (l = t[k]) && (j = f ? bb.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l));
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : _.apply(g, t);
            });
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b;
            }, g, !0), j = n(function(a) {
                return bb.call(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
            } ]; e > h; h++) if (c = w.relative[a[h].type]) k = [ n(o(k), c) ]; else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !w.relative[a[d].type]; d++) ;
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a));
                }
                k.push(c);
            }
            return o(k);
        }
        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; ) if (m(k, g, h)) {
                            i.push(k);
                            break;
                        }
                        j && (P = u);
                    }
                    e && ((k = !m && k) && n--, d && p.push(k));
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++]; ) m(p, r, g, h);
                    if (d) {
                        if (n > 0) for (;o--; ) p[o] || r[o] || (r[o] = Z.call(i));
                        r = q(r);
                    }
                    _.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
                }
                return j && (P = u, C = s), p;
            };
            return e ? d(g) : g;
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date(), O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0), 0;
        }, V = "undefined", W = 1 << 31, X = {}.hasOwnProperty, Y = [], Z = Y.pop, $ = Y.push, _ = Y.push, ab = Y.slice, bb = Y.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
            return -1;
        }, cb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", db = "[\\x20\\t\\r\\n\\f]", eb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", fb = eb.replace("w", "w#"), gb = "\\[" + db + "*(" + eb + ")(?:" + db + "*([*^$|!~]?=)" + db + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + fb + "))|)" + db + "*\\]", hb = ":(" + eb + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + gb + ")*)|.*)\\)|)", ib = new RegExp("^" + db + "+|((?:^|[^\\\\])(?:\\\\.)*)" + db + "+$", "g"), jb = new RegExp("^" + db + "*," + db + "*"), kb = new RegExp("^" + db + "*([>+~]|" + db + ")" + db + "*"), lb = new RegExp("=" + db + "*([^\\]'\"]*?)" + db + "*\\]", "g"), mb = new RegExp(hb), nb = new RegExp("^" + fb + "$"), ob = {
            ID: new RegExp("^#(" + eb + ")"),
            CLASS: new RegExp("^\\.(" + eb + ")"),
            TAG: new RegExp("^(" + eb.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + gb),
            PSEUDO: new RegExp("^" + hb),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + db + "*(even|odd|(([+-]|)(\\d*)n|)" + db + "*(?:([+-]|)" + db + "*(\\d+)|))" + db + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + cb + ")$", "i"),
            needsContext: new RegExp("^" + db + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + db + "*((?:-\\d)?\\d*)" + db + "*\\)|)(?=[^-]|$)", "i")
        }, pb = /^(?:input|select|textarea|button)$/i, qb = /^h\d$/i, rb = /^[^{]+\{\s*\[native \w/, sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tb = /[+~]/, ub = /'|\\/g, vb = new RegExp("\\\\([\\da-f]{1,6}" + db + "?|(" + db + ")|.)", "ig"), wb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        };
        try {
            _.apply(Y = ab.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType;
        } catch (xb) {
            _ = {
                apply: Y.length ? function(a, b) {
                    $.apply(a, ab.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, F = b.setDocument = function(a) {
            var b, c = a ? a.ownerDocument || a : O, d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, 
            I = !y(c), d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
                F();
            }, !1) : d.attachEvent && d.attachEvent("onunload", function() {
                F();
            })), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length;
            }), v.getElementsByClassName = rb.test(c.getElementsByClassName) && e(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 
                2 === a.getElementsByClassName("i").length;
            }), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length;
            }), v.getById ? (w.find.ID = function(a, b) {
                if (typeof b.getElementById !== V && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0;
            }, K = [], J = [], (v.qsa = rb.test(c.querySelectorAll)) && (e(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && J.push("[*^$]=" + db + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || J.push("\\[" + db + "*(?:value|" + cb + ")"), 
                a.querySelectorAll(":checked").length || J.push(":checked");
            }), e(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + db + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                J.push(",.*:");
            })), (v.matchesSelector = rb.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", hb);
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), 
            b = rb.test(H.compareDocumentPosition), M = b || rb.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & d || !v.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var d, e = 0, f = a.parentNode, h = b.parentNode, i = [ a ], j = [ b ];
                if (!f || !h) return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0;
                if (f === h) return g(a, b);
                for (d = a; d = d.parentNode; ) i.unshift(d);
                for (d = b; d = d.parentNode; ) j.unshift(d);
                for (;i[e] === j[e]; ) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0;
            }, c) : G;
        }, b.matches = function(a, c) {
            return b(a, null, null, c);
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(lb, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return b(c, G, null, [ a ]).length > 0;
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()], d = c && X.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (;b = a[e++]; ) b === a[e] && (d = c.push(e));
                for (;d--; ) a.splice(c[d], 1);
            }
            return D = null, a;
        }, x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (;b = a[d++]; ) c += x(b);
            return c;
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: ob,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(vb, wb), a[3] = (a[3] || a[4] || a[5] || "").replace(vb, wb), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return ob.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && mb.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(vb, wb).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + db + ")" + a + "(" + db + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ P, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [ P, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [ a, a, "", c ], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; ) d = bb.call(a, e[g]), a[d] = !(b[d] = e[g]);
                    }) : function(a) {
                        return f(a, 0, e);
                    }) : f;
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [], c = [], e = A(a.replace(ib, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), !c.pop();
                    };
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0;
                    };
                }),
                contains: d(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1;
                    };
                }),
                lang: d(function(a) {
                    return nb.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(vb, wb).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === H;
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !w.pseudos.empty(a);
                },
                header: function(a) {
                    return qb.test(a.nodeName);
                },
                input: function(a) {
                    return pb.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: j(function() {
                    return [ 0 ];
                }),
                last: j(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: j(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l(), z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h; ) {
                (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                d = !1, (e = kb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ib, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
        }, A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--; ) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a;
            }
            return f;
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(vb, wb), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length);
                }
                for (e = ob.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]); ) if ((i = w.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && m(f), !a) return _.apply(c, d), c;
                    break;
                }
            }
            return (j || A(a, l))(d, b, !I, c, tb.test(a) && k(b.parentNode) || b), c;
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, 
        F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"));
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), e(function(a) {
            return null == a.getAttribute("disabled");
        }) || f(cb, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), b;
    }(a);
    _.find = eb, _.expr = eb.selectors, _.expr[":"] = _.expr.pseudos, _.unique = eb.uniqueSort, 
    _.text = eb.getText, _.isXMLDoc = eb.isXML, _.contains = eb.contains;
    var fb = _.expr.match.needsContext, gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, hb = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [ d ] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, _.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++) if (_.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0));
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fb.test(a) ? _(a) : a || [], !1).length;
        }
    });
    var ib, jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, kb = _.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : jb.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || ib).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), 
                gb.test(c[1]) && _.isPlainObject(b)) for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), 
            this.context = Z, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ib.ready ? ib.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), _.makeArray(a, this));
    };
    kb.prototype = _.fn, ib = _(Z);
    var lb = /^(?:parents|prev(?:Until|All))/, mb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
                if (e && _(a).is(c)) break;
                d.push(a);
            }
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), _.fn.extend({
        has: function(a) {
            var b = _(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (_.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fb.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? _.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return _.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c);
        },
        next: function(a) {
            return e(a, "nextSibling");
        },
        prev: function(a) {
            return e(a, "previousSibling");
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return _.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes);
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), 
            this.length > 1 && (mb[a] || _.unique(e), lb.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var nb = /\S+/g, ob = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++) if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break;
            }
            d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable());
        }, l = {
            add: function() {
                if (i) {
                    var c = i.length;
                    !function f(b) {
                        _.each(b, function(b, c) {
                            var d = _.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c);
                        });
                    }(arguments), d ? g = i.length : b && (e = c, k(b));
                }
                return this;
            },
            remove: function() {
                return i && _.each(arguments, function(a, b) {
                    for (var c; (c = _.inArray(b, i, c)) > -1; ) i.splice(c, 1), d && (g >= c && g--, 
                    h >= c && h--);
                }), this;
            },
            has: function(a) {
                return a ? _.inArray(a, i) > -1 : !(!i || !i.length);
            },
            empty: function() {
                return i = [], g = 0, this;
            },
            disable: function() {
                return i = j = b = void 0, this;
            },
            disabled: function() {
                return !i;
            },
            lock: function() {
                return j = void 0, b || l.disable(), this;
            },
            locked: function() {
                return !j;
            },
            fireWith: function(a, b) {
                return !i || c && !j || (b = b || [], b = [ a, b.slice ? b.slice() : b ], d ? j.push(b) : k(b)), 
                this;
            },
            fire: function() {
                return l.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!c;
            }
        };
        return l;
    }, _.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", _.Callbacks("once memory"), "resolved" ], [ "reject", "fail", _.Callbacks("once memory"), "rejected" ], [ "notify", "progress", _.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return _.Deferred(function(c) {
                        _.each(b, function(b, f) {
                            var g = _.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? _.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b, c, d, e = 0, f = R.call(arguments), g = f.length, h = 1 !== g || a && _.isFunction(a.promise) ? g : 0, i = 1 === h ? a : _.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                };
            };
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise();
        }
    });
    var pb;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this;
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pb.resolveWith(Z, [ _ ]), 
            _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))));
        }
    }), _.ready.promise = function(b) {
        return pb || (pb = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), 
        a.addEventListener("load", g, !1))), pb.promise(b);
    }, _.ready.promise();
    var qb = _.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(_(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (_.isEmptyObject(f)) _.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [ b, e ] : (d = e, 
                d = d in g ? [ d ] : d.match(nb) || [])), c = d.length;
                for (;c--; ) delete g[d[c]];
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    };
    var rb = new h(), sb = new h(), tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ub = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sb.hasData(a) || rb.hasData(a);
        },
        data: function(a, b, c) {
            return sb.access(a, b, c);
        },
        removeData: function(a, b) {
            sb.remove(a, b);
        },
        _data: function(a, b, c) {
            return rb.access(a, b, c);
        },
        _removeData: function(a, b) {
            rb.remove(a, b);
        }
    }), _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sb.get(f), 1 === f.nodeType && !rb.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; ) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), 
                    i(f, d, e[d])));
                    rb.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                sb.set(this, a);
            }) : qb(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sb.get(f, a), void 0 !== c) return c;
                    if (c = sb.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c;
                } else this.each(function() {
                    var c = sb.get(this, d);
                    sb.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sb.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                sb.remove(this, a);
            });
        }
    }), _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = rb.get(a, b), c && (!d || _.isArray(c) ? d = rb.access(a, b, _.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b), d = c.length, e = c.shift(), f = _._queueHooks(a, b), g = function() {
                _.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return rb.get(a, c) || rb.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    rb.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) c = rb.get(f[g], a + "queueHooks"), 
            c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, wb = [ "Top", "Right", "Bottom", "Left" ], xb = function(a, b) {
        return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a);
    }, yb = /^(?:checkbox|radio)$/i;
    !function() {
        var a = Z.createDocumentFragment(), b = a.appendChild(Z.createElement("div")), c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var zb = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Ab = /^key/, Bb = /^(?:mouse|pointer|contextmenu)|click/, Cb = /^(?:focusinfocus|focusoutblur)$/, Db = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.get(a);
            if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), 
            (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                return typeof _ !== zb && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0;
            }), b = (b || "").match(nb) || [ "" ], j = b.length; j--; ) h = Db.exec(b[j]) || [], 
            n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, 
            n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && _.expr.match.needsContext.test(e),
                namespace: o.join(".")
            }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), 
            l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
            _.event.global[n] = !0);
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.hasData(a) && rb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(nb) || [ "" ], j = b.length; j--; ) if (h = Db.exec(b[j]) || [], 
                n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; ) k = m[f], 
                    !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), 
                    delete i[n]);
                } else for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, rb.remove(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [ d || Z ], n = X.call(b, "type") ? b.type : b, o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Cb.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), 
            n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : _.makeArray(c, [ b ]), 
            l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Cb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), 
                    h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a);
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); ) b.type = f > 1 ? i : l.bindType || n, 
                k = (rb.get(g, "events") || {})[b.type] && rb.get(g, "handle"), k && k.apply(g, c), 
                k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], 
                h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), 
                b.result;
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [], h = R.call(arguments), i = (rb.get(this, "events") || {})[a.type] || [], j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); ) for (a.currentTarget = e.elem, 
                c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, 
                a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), 
                void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, 
                d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), 
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), 
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Bb.test(e) ? this.mouseHooks : Ab.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, 
        b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void (this[_.expando] = !0)) : new _.Event(a, b);
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0);
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = rb.access(d, b);
                e || d.addEventListener(a, c, !0), rb.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = rb.access(d, b) - 1;
                e ? rb.access(d, b, e) : (d.removeEventListener(a, c, !0), rb.remove(d, b));
            }
        };
    }), _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k; else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), 
            this.each(function() {
                _.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var Eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fb = /<([\w:]+)/, Gb = /<|&#?\w+;/, Hb = /<(?:script|style|link)/i, Ib = /checked\s*(?:[^=]|=\s*.checked.)/i, Jb = /^$|\/(?:java|ecma)script/i, Kb = /^true\/(.*)/, Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Mb = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Mb.optgroup = Mb.option, Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead, 
    Mb.th = Mb.td, _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a))) for (g = r(h), 
            f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b) if (c) for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]); else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++) if (e = a[m], 
            e || 0 === e) if ("object" === _.type(e)) _.merge(l, e.nodeType ? [ e ] : e); else if (Gb.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fb.exec(e) || [ "", "" ])[1].toLowerCase(), 
                h = Mb[g] || Mb._default, f.innerHTML = h[1] + e.replace(Eb, "<$1></$2>") + h[2], 
                j = h[0]; j--; ) f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++]; ) if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), 
            f = r(k.appendChild(e), "script"), i && p(f), c)) for (j = 0; e = f[j++]; ) Jb.test(e.type || "") && c.push(e);
            return k;
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[rb.expando], e && (b = rb.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    rb.cache[e] && delete rb.cache[e];
                }
                delete sb.cache[c[sb.expando]];
            }
        }
    }), _.fn.extend({
        text: function(a) {
            return qb(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), 
            c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b);
            });
        },
        html: function(a) {
            return qb(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Hb.test(a) && !Mb[(Fb.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(Eb, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ib.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b);
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 
            1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), 
                f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f) for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], 
                Jb.test(g.type || "") && !rb.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(Lb, "")));
            }
            return this;
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), 
            _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var Nb, Ob = {}, Pb = /^margin/, Qb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$", "i"), Rb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null);
    };
    !function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
            g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f);
        }
        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", 
        Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", 
        f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(), c;
            },
            boxSizingReliable: function() {
                return null == d && b(), d;
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), 
                b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), b;
            }
        }));
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var Sb = /^(none|table(?!-c[ea]).+)/, Tb = new RegExp("^(" + vb + ")(.*)$", "i"), Ub = new RegExp("^([+-])=(" + vb + ")", "i"), Vb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Wb = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Xb = [ "Webkit", "O", "Moz", "ms" ];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b), i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = Ub.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), 
                f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), 
                Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wb && (e = Wb[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e;
        }
    }), _.each([ "height", "width" ], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sb.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Vb, function() {
                    return A(a, b, d);
                }) : A(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && Rb(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [ a, "marginRight" ]) : void 0;
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + wb[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Pb.test(a) || (_.cssHooks[a + b].set = y);
    }), _.fn.extend({
        css: function(a, b) {
            return qb(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Rb(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return B(this, !0);
        },
        hide: function() {
            return B(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xb(this) ? _(this).show() : _(this).hide();
            });
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : C.propHooks._default.set(this), this;
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, _.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Yb, Zb, $b = /^(?:toggle|show|hide)$/, _b = new RegExp("^(?:([+-])=|)(" + vb + ")([a-z%]*)$", "i"), ac = /queueHooks$/, bc = [ G ], cc = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = _b.exec(b), f = e && e[3] || (_.cssNumber[a] ? "" : "px"), g = (_.cssNumber[a] || "px" !== f && +d) && _b.exec(_.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    _.Animation = _.extend(I, {
        tweener: function(a, b) {
            _.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cc[c] = cc[c] || [], cc[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? bc.unshift(a) : bc.push(a);
        }
    }), _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue);
        }, d;
    }, _.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(xb).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function() {
                var b = I(this, _.extend({}, a), f);
                (e || rb.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = _.timers, g = rb.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && ac.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && _.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = rb.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers, g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), _.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e);
        };
    }), _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), _.timers = [], _.fx.tick = function() {
        var a, b = 0, c = _.timers;
        for (Yb = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Yb = void 0;
    }, _.fx.timer = function(a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop();
    }, _.fx.interval = 13, _.fx.start = function() {
        Zb || (Zb = setInterval(_.fx.tick, _.fx.interval));
    }, _.fx.stop = function() {
        clearInterval(Zb), Zb = null;
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a = Z.createElement("input"), b = Z.createElement("select"), c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, 
        Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", 
        Y.radioValue = "t" === a.value;
    }();
    var dc, ec, fc = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qb(this, _.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a);
            });
        }
    }), _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === zb ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? ec : dc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void _.removeAttr(a, b));
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(nb);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), ec = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fc[b] || _.find.attr;
        fc[b] = function(a, b, d) {
            var e, f;
            return d || (f = fc[b], fc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            fc[b] = f), e;
        };
    });
    var gc = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qb(this, _.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a];
            });
        }
    }), _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, 
            e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gc.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), _.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        _.propFix[this.toLowerCase()] = this;
    });
    var hc = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(nb) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : " ")) {
                for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = _.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(nb) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                g = a ? _.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) for (var b, d = 0, e = _(this), f = a.match(nb) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === zb || "boolean" === c) && (this.className && rb.set(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : rb.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hc, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    });
    var ic = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = _.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                        return null == a ? "" : a + "";
                    })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });
                if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
                "string" == typeof c ? c.replace(ic, "") : null == c ? "" : c);
            }
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                        if (b = _(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), _.each([ "radio", "checkbox" ], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0;
            }
        }, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var jc = _.now(), kc = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "");
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser(), b = c.parseFromString(a, "text/xml");
        } catch (d) {
            b = void 0;
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), 
        b;
    };
    var lc, mc, nc = /#.*$/, oc = /([?&])_=[^&]*/, pc = /^(.*?):[ \t]*([^\r\n]*)$/gm, qc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rc = /^(?:GET|HEAD)$/, sc = /^\/\//, tc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, uc = {}, vc = {}, wc = "*/".concat("*");
    try {
        mc = location.href;
    } catch (xc) {
        mc = Z.createElement("a"), mc.href = "", mc = mc.href;
    }
    lc = tc.exec(mc.toLowerCase()) || [], _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mc,
            type: "GET",
            isLocal: qc.test(lc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a);
        },
        ajaxPrefilter: J(uc),
        ajaxTransport: J(vc),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, 
                i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), 
                i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), 
                u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, 
                k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [ k, w, v ]) : o.rejectWith(m, [ v, w, r ]), 
                v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [ v, l, i ? k : r ]), 
                p.fireWith(m, [ v, w ]), j && (n.trigger("ajaxComplete", [ v, l ]), --_.active || _.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(), p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!g) for (g = {}; b = pc.exec(f); ) g[b[1].toLowerCase()] = b[2];
                        b = g[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (l.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return d && d.abort(b), c(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || mc) + "").replace(nc, "").replace(sc, lc[1] + "//"), 
            l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(nb) || [ "" ], 
            null == l.crossDomain && (i = tc.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === lc[1] && i[2] === lc[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (lc[3] || ("http:" === lc[1] ? "80" : "443")))), 
            l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), 
            K(uc, l, b, v), 2 === t) return v;
            j = l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), 
            l.hasContent = !rc.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kc.test(e) ? "&" : "?") + l.data, 
            delete l.data), l.cache === !1 && (l.url = oc.test(e) ? e.replace(oc, "$1_=" + jc++) : e + (kc.test(e) ? "&" : "?") + "_=" + jc++)), 
            l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), 
            _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), 
            v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + wc + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                success: 1,
                error: 1,
                complete: 1
            }) v[k](l[k]);
            if (d = K(vc, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [ v, l ]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout");
                }, l.timeout));
                try {
                    t = 1, d.send(r, c);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w);
                }
            } else c(-1, "No Transport");
            return v;
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script");
        }
    }), _.each([ "get", "post" ], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), _.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b));
            } : function() {
                var b = _(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes);
            }).end();
        }
    }), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a);
    };
    var yc = /%20/g, zc = /\[\]$/, Ac = /\r?\n/g, Bc = /^(?:submit|button|image|reset|file)$/i, Cc = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(yc, "+");
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Cc.test(this.nodeName) && !Bc.test(a) && (this.checked || !yb.test(a));
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Ac, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Ac, "\r\n")
                };
            }).get();
        }
    }), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var Dc = 0, Ec = {}, Fc = {
        0: 200,
        1223: 204
    }, Gc = _.ajaxSettings.xhr();
    a.ActiveXObject && _(a).on("unload", function() {
        for (var a in Ec) Ec[a]();
    }), Y.cors = !!Gc && "withCredentials" in Gc, Y.ajax = Gc = !!Gc, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Gc && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Dc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Ec[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Fc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = b(), f.onerror = b("error"), b = Ec[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b) throw h;
                }
            },
            abort: function() {
                b && b();
            }
        } : void 0;
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a), a;
            }
        }
    }), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), Z.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Hc = [], Ic = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Hc.pop() || _.expando + "_" + jc++;
            return this[a] = !0, a;
        }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Ic.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ic.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Ic, "$1" + e) : b.jsonp !== !1 && (b.url += (kc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Hc.push(e)), g && _.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = gb.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = _.buildFragment([ a ], b, e), e && e.length && _(e).remove(), 
        _.merge([], d.childNodes));
    };
    var Jc = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Jc) return Jc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, f || [ a.responseText, b, a ]);
        }), this;
    }, _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var Kc = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), 
            i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== zb && (e = d.getBoundingClientRect()), 
            c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), 
                d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Kc; a && !_.nodeName(a, "html") && "static" === _.css(a, "position"); ) a = a.offsetParent;
                return a || Kc;
            });
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qb(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), _.each([ "top", "left" ], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qb.test(c) ? _(a).position()[b] + "px" : c) : void 0;
        });
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qb(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), _.fn.size = function() {
        return this.length;
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _;
    });
    var Lc = a.jQuery, Mc = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Mc), b && a.jQuery === _ && (a.jQuery = Lc), _;
    }, typeof b === zb && (a.jQuery = a.$ = _), _;
}), function(a, b, c, d) {
    "use strict";
    function e(a) {
        return ("string" == typeof a || a instanceof String) && (a = a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), 
        a;
    }
    var f = function(b) {
        for (var c = b.length, d = a("head"); c--; ) 0 === d.has("." + b[c]).length && d.append('<meta class="' + b[c] + '" />');
    };
    f([ "foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace" ]), 
    a(function() {
        "undefined" != typeof FastClick && "undefined" != typeof c.body && FastClick.attach(c.body);
    });
    var g = function(b, d) {
        if ("string" == typeof b) {
            if (d) {
                var e;
                if (d.jquery) {
                    if (e = d[0], !e) return d;
                } else e = d;
                return a(e.querySelectorAll(b));
            }
            return a(c.querySelectorAll(b));
        }
        return a(b, d);
    }, h = function(a) {
        var b = [];
        return a || b.push("data"), this.namespace.length > 0 && b.push(this.namespace), 
        b.push(this.name), b.join("-");
    }, i = function(a) {
        for (var b = a.split("-"), c = b.length, d = []; c--; ) 0 !== c ? d.push(b[c]) : this.namespace.length > 0 ? d.push(this.namespace, b[c]) : d.push(b[c]);
        return d.reverse().join("-");
    }, j = function(b, c) {
        var d = this, e = !g(this).data(this.attr_name(!0));
        return g(this.scope).is("[" + this.attr_name() + "]") ? (g(this.scope).data(this.attr_name(!0) + "-init", a.extend({}, this.settings, c || b, this.data_options(g(this.scope)))), 
        e && this.events(this.scope)) : g("[" + this.attr_name() + "]", this.scope).each(function() {
            var e = !g(this).data(d.attr_name(!0) + "-init");
            g(this).data(d.attr_name(!0) + "-init", a.extend({}, d.settings, c || b, d.data_options(g(this)))), 
            e && d.events(this);
        }), "string" == typeof b ? this[b].call(this, c) : void 0;
    }, k = function(a, b) {
        function c() {
            b(a[0]);
        }
        function d() {
            if (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                var a = this.attr("src"), b = a.match(/\?/) ? "&" : "?";
                b += "random=" + new Date().getTime(), this.attr("src", a + b);
            }
        }
        return a.attr("src") ? void (a[0].complete || 4 === a[0].readyState ? c() : d.call(a)) : void c();
    };
    b.matchMedia = b.matchMedia || function(a) {
        var b, c = a.documentElement, d = c.firstElementChild || c.firstChild, e = a.createElement("body"), f = a.createElement("div");
        return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", 
        e.appendChild(f), function(a) {
            return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', 
            c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                matches: b,
                media: a
            };
        };
    }(c), function() {
        function a() {
            c && (f(a), h && jQuery.fx.tick());
        }
        for (var c, d = 0, e = [ "webkit", "moz" ], f = b.requestAnimationFrame, g = b.cancelAnimationFrame, h = "undefined" != typeof jQuery.fx; d < e.length && !f; d++) f = b[e[d] + "RequestAnimationFrame"], 
        g = g || b[e[d] + "CancelAnimationFrame"] || b[e[d] + "CancelRequestAnimationFrame"];
        f ? (b.requestAnimationFrame = f, b.cancelAnimationFrame = g, h && (jQuery.fx.timer = function(b) {
            b() && jQuery.timers.push(b) && !c && (c = !0, a());
        }, jQuery.fx.stop = function() {
            c = !1;
        })) : (b.requestAnimationFrame = function(a) {
            var c = new Date().getTime(), e = Math.max(0, 16 - (c - d)), f = b.setTimeout(function() {
                a(c + e);
            }, e);
            return d = c + e, f;
        }, b.cancelAnimationFrame = function(a) {
            clearTimeout(a);
        });
    }(jQuery), b.Foundation = {
        name: "Foundation",
        version: "5.4.7",
        media_queries: {
            small: g(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            medium: g(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            large: g(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xlarge: g(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xxlarge: g(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
        },
        stylesheet: a("<style></style>").appendTo("head")[0].sheet,
        global: {
            namespace: d
        },
        init: function(a, c, d, e, f) {
            var h = [ a, d, e, f ], i = [];
            if (this.rtl = /rtl/i.test(g("html").attr("dir")), this.scope = a || this.scope, 
            this.set_namespace(), c && "string" == typeof c && !/reflow/i.test(c)) this.libs.hasOwnProperty(c) && i.push(this.init_lib(c, h)); else for (var j in this.libs) i.push(this.init_lib(j, c));
            return g(b).load(function() {
                g(b).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider");
            }), a;
        },
        init_lib: function(b, c) {
            return this.libs.hasOwnProperty(b) ? (this.patch(this.libs[b]), c && c.hasOwnProperty(b) ? ("undefined" != typeof this.libs[b].settings ? a.extend(!0, this.libs[b].settings, c[b]) : "undefined" != typeof this.libs[b].defaults && a.extend(!0, this.libs[b].defaults, c[b]), 
            this.libs[b].init.apply(this.libs[b], [ this.scope, c[b] ])) : (c = c instanceof Array ? c : new Array(c), 
            this.libs[b].init.apply(this.libs[b], c))) : function() {};
        },
        patch: function(a) {
            a.scope = this.scope, a.namespace = this.global.namespace, a.rtl = this.rtl, a.data_options = this.utils.data_options, 
            a.attr_name = h, a.add_namespace = i, a.bindings = j, a.S = this.utils.S;
        },
        inherit: function(a, b) {
            for (var c = b.split(" "), d = c.length; d--; ) this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]]);
        },
        set_namespace: function() {
            var b = this.global.namespace === d ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
            this.global.namespace = b === d || /false/i.test(b) ? "" : b;
        },
        libs: {},
        utils: {
            S: g,
            throttle: function(a, b) {
                var c = null;
                return function() {
                    var d = this, e = arguments;
                    null == c && (c = setTimeout(function() {
                        a.apply(d, e), c = null;
                    }, b));
                };
            },
            debounce: function(a, b, c) {
                var d, e;
                return function() {
                    var f = this, g = arguments, h = function() {
                        d = null, c || (e = a.apply(f, g));
                    }, i = c && !d;
                    return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e;
                };
            },
            data_options: function(b, c) {
                function d(a) {
                    return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0;
                }
                function e(b) {
                    return "string" == typeof b ? a.trim(b) : b;
                }
                c = c || "options";
                var f, g, h, i = {}, j = function(a) {
                    var b = Foundation.global.namespace;
                    return a.data(b.length > 0 ? b + "-" + c : c);
                }, k = j(b);
                if ("object" == typeof k) return k;
                for (h = (k || ":").split(";"), f = h.length; f--; ) g = h[f].split(":"), g = [ g[0], g.slice(1).join(":") ], 
                /true/i.test(g[1]) && (g[1] = !0), /false/i.test(g[1]) && (g[1] = !1), d(g[1]) && (g[1] = -1 === g[1].indexOf(".") ? parseInt(g[1], 10) : parseFloat(g[1])), 
                2 === g.length && g[0].length > 0 && (i[e(g[0])] = e(g[1]));
                return i;
            },
            register_media: function(b, c) {
                Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '"/>'), 
                Foundation.media_queries[b] = e(a("." + c).css("font-family")));
            },
            add_custom_rule: function(a, b) {
                if (b === d && Foundation.stylesheet) Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length); else {
                    var c = Foundation.media_queries[b];
                    c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }");
                }
            },
            image_loaded: function(a, b) {
                var c = this, d = a.length;
                0 === d && b(a), a.each(function() {
                    k(c.S(this), function() {
                        d -= 1, 0 === d && b(a);
                    });
                });
            },
            random_str: function() {
                return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [ this.name || "F", (+new Date()).toString(36) ].join("-"), 
                this.prefix + (this.fidx++).toString(36);
            }
        }
    }, a.fn.foundation = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            return Foundation.init.apply(Foundation, [ this ].concat(a)), this;
        });
    };
}(jQuery, window, window.document), function(a, b, c) {
    "use strict";
    Foundation.libs.abide = {
        name: "abide",
        version: "5.4.7",
        settings: {
            live_validate: !0,
            focus_on_invalid: !0,
            error_labels: !0,
            error_class: "error",
            timeout: 1e3,
            patterns: {
                alpha: /^[a-zA-Z]+$/,
                alpha_numeric: /^[a-zA-Z0-9]+$/,
                integer: /^[-+]?\d+$/,
                number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                cvv: /^([0-9]){3,4}$/,
                email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
                datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
                color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
            },
            validators: {
                equalTo: function(a) {
                    var b = c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value, d = a.value, e = b === d;
                    return e;
                }
            }
        },
        timer: null,
        init: function(a, b, c) {
            this.bindings(b, c);
        },
        events: function(b) {
            var c = this, d = c.S(b).attr("novalidate", "novalidate"), e = d.data(this.attr_name(!0) + "-init") || {};
            this.invalid_attr = this.add_namespace("data-invalid"), d.off(".abide").on("submit.fndtn.abide validate.fndtn.abide", function(a) {
                var b = /ajax/i.test(c.S(this).attr(c.attr_name()));
                return c.validate(c.S(this).find("input, textarea, select").get(), a, b);
            }).on("reset", function() {
                return c.reset(a(this));
            }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(a) {
                c.validate([ this ], a);
            }).on("keydown.fndtn.abide", function(a) {
                e.live_validate === !0 && (clearTimeout(c.timer), c.timer = setTimeout(function() {
                    c.validate([ this ], a);
                }.bind(this), e.timeout));
            });
        },
        reset: function(b) {
            b.removeAttr(this.invalid_attr), a(this.invalid_attr, b).removeAttr(this.invalid_attr), 
            a("." + this.settings.error_class, b).not("small").removeClass(this.settings.error_class);
        },
        validate: function(a, b, c) {
            for (var d = this.parse_patterns(a), e = d.length, f = this.S(a[0]).closest("form"), g = /submit/.test(b.type), h = 0; e > h; h++) if (!d[h] && (g || c)) return this.settings.focus_on_invalid && a[h].focus(), 
            f.trigger("invalid"), this.S(a[h]).closest("form").attr(this.invalid_attr, ""), 
            !1;
            return (g || c) && f.trigger("valid"), f.removeAttr(this.invalid_attr), c ? !1 : !0;
        },
        parse_patterns: function(a) {
            for (var b = a.length, c = []; b--; ) c.push(this.pattern(a[b]));
            return this.check_validation_and_apply_styles(c);
        },
        pattern: function(a) {
            var b = a.getAttribute("type"), c = "string" == typeof a.getAttribute("required"), d = a.getAttribute("pattern") || "";
            return this.settings.patterns.hasOwnProperty(d) && d.length > 0 ? [ a, this.settings.patterns[d], c ] : d.length > 0 ? [ a, new RegExp(d), c ] : this.settings.patterns.hasOwnProperty(b) ? [ a, this.settings.patterns[b], c ] : (d = /.*/, 
            [ a, d, c ]);
        },
        check_validation_and_apply_styles: function(b) {
            var c = b.length, d = [], e = this.S(b[0][0]).closest("[data-" + this.attr_name(!0) + "]");
            for (e.data(this.attr_name(!0) + "-init") || {}; c--; ) {
                var f, g, h = b[c][0], i = b[c][2], j = h.value.trim(), k = this.S(h).parent(), l = h.getAttribute(this.add_namespace("data-abide-validator")), m = "radio" === h.type, n = "checkbox" === h.type, o = this.S('label[for="' + h.getAttribute("id") + '"]'), p = i ? h.value.length > 0 : !0, q = [];
                if (h.getAttribute(this.add_namespace("data-equalto")) && (l = "equalTo"), f = k.is("label") ? k.parent() : k, 
                l && (g = this.settings.validators[l].apply(this, [ h, i, f ]), q.push(g)), m && i) q.push(this.valid_radio(h, i)); else if (n && i) q.push(this.valid_checkbox(h, i)); else if (q.push(b[c][1].test(j) && p || !i && h.value.length < 1 || a(h).attr("disabled") ? !0 : !1), 
                q = [ q.every(function(a) {
                    return a;
                }) ], q[0]) this.S(h).removeAttr(this.invalid_attr), h.setAttribute("aria-invalid", "false"), 
                h.removeAttribute("aria-describedby"), f.removeClass(this.settings.error_class), 
                o.length > 0 && this.settings.error_labels && o.removeClass(this.settings.error_class).removeAttr("role"), 
                a(h).triggerHandler("valid"); else {
                    this.S(h).attr(this.invalid_attr, ""), h.setAttribute("aria-invalid", "true");
                    var r = f.find("small." + this.settings.error_class, "span." + this.settings.error_class), s = r.length > 0 ? r[0].id : "";
                    s.length > 0 && h.setAttribute("aria-describedby", s), f.addClass(this.settings.error_class), 
                    o.length > 0 && this.settings.error_labels && o.addClass(this.settings.error_class).attr("role", "alert"), 
                    a(h).triggerHandler("invalid");
                }
                d.push(q[0]);
            }
            return d = [ d.every(function(a) {
                return a;
            }) ];
        },
        valid_checkbox: function(a, b) {
            var a = this.S(a), c = a.is(":checked") || !b;
            return c ? a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : a.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), 
            c;
        },
        valid_radio: function(a) {
            for (var b = a.getAttribute("name"), c = this.S(a).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + b + "']"), d = c.length, e = !1, f = 0; d > f; f++) c[f].checked && (e = !0);
            for (var f = 0; d > f; f++) e ? this.S(c[f]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : this.S(c[f]).attr(this.invalid_attr, "").parent().addClass(this.settings.error_class);
            return e;
        },
        valid_equal: function(a, b, d) {
            var e = c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value, f = a.value, g = e === f;
            return g ? (this.S(a).removeAttr(this.invalid_attr), d.removeClass(this.settings.error_class), 
            label.length > 0 && settings.error_labels && label.removeClass(this.settings.error_class)) : (this.S(a).attr(this.invalid_attr, ""), 
            d.addClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.addClass(this.settings.error_class)), 
            g;
        },
        valid_oneof: function(a, b, c, d) {
            var a = this.S(a), e = this.S("[" + this.add_namespace("data-oneof") + "]"), f = e.filter(":checked").length > 0;
            if (f ? a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : a.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), 
            !d) {
                var g = this;
                e.each(function() {
                    g.valid_oneof.call(g, this, null, null, !0);
                });
            }
            return f;
        }
    };
}(jQuery, window, window.document), function(a) {
    "use strict";
    Foundation.libs.accordion = {
        name: "accordion",
        version: "5.4.7",
        settings: {
            content_class: "content",
            active_class: "active",
            multi_expand: !1,
            toggleable: !0,
            callback: function() {}
        },
        init: function(a, b, c) {
            this.bindings(b, c);
        },
        events: function() {
            var b = this, c = this.S;
            c(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a", function(d) {
                var e = c(this).closest("[" + b.attr_name() + "]"), f = b.attr_name() + "=" + e.attr(b.attr_name()), g = e.data(b.attr_name(!0) + "-init"), h = c("#" + this.href.split("#")[1]), i = a("> dd", e), j = i.children("." + g.content_class), k = j.filter("." + g.active_class);
                return d.preventDefault(), e.attr(b.attr_name()) && (j = j.add("[" + f + "] dd > ." + g.content_class), 
                i = i.add("[" + f + "] dd")), g.toggleable && h.is(k) ? (h.parent("dd").toggleClass(g.active_class, !1), 
                h.toggleClass(g.active_class, !1), g.callback(h), h.triggerHandler("toggled", [ e ]), 
                void e.triggerHandler("toggled", [ h ])) : (g.multi_expand || (j.removeClass(g.active_class), 
                i.removeClass(g.active_class)), h.addClass(g.active_class).parent().addClass(g.active_class), 
                g.callback(h), h.triggerHandler("toggled", [ e ]), void e.triggerHandler("toggled", [ h ]));
            });
        },
        off: function() {},
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a) {
    "use strict";
    Foundation.libs.alert = {
        name: "alert",
        version: "5.4.7",
        settings: {
            callback: function() {}
        },
        init: function(a, b, c) {
            this.bindings(b, c);
        },
        events: function() {
            var b = this, c = this.S;
            a(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] .close", function(a) {
                var d = c(this).closest("[" + b.attr_name() + "]"), e = d.data(b.attr_name(!0) + "-init") || b.settings;
                a.preventDefault(), Modernizr.csstransitions ? (d.addClass("alert-close"), d.on("transitionend webkitTransitionEnd oTransitionEnd", function() {
                    c(this).trigger("close").trigger("close.fndtn.alert").remove(), e.callback();
                })) : d.fadeOut(300, function() {
                    c(this).trigger("close").trigger("close.fndtn.alert").remove(), e.callback();
                });
            });
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    "use strict";
    Foundation.libs.clearing = {
        name: "clearing",
        version: "5.4.7",
        settings: {
            templates: {
                viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'
            },
            close_selectors: ".clearing-close, div.clearing-blackout",
            open_selectors: "",
            skip_selector: "",
            touch_label: "",
            init: !1,
            locked: !1
        },
        init: function(a, b, c) {
            var d = this;
            Foundation.inherit(this, "throttle image_loaded"), this.bindings(b, c), d.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(d.S("li", this.scope)) : d.S("[" + this.attr_name() + "]", this.scope).each(function() {
                d.assemble(d.S("li", this));
            });
        },
        events: function(d) {
            var e = this, f = e.S, g = a(".scroll-container");
            g.length > 0 && (this.scope = g), f(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function(a, b, c) {
                var b = b || f(this), c = c || b, d = b.next("li"), g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init"), h = f(a.target);
                a.preventDefault(), g || (e.init(), g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init")), 
                c.hasClass("visible") && b[0] === c[0] && d.length > 0 && e.is_open(b) && (c = d, 
                h = f("img", c)), e.open(h, b, c), e.update_paddles(c);
            }).on("click.fndtn.clearing", ".clearing-main-next", function(a) {
                e.nav(a, "next");
            }).on("click.fndtn.clearing", ".clearing-main-prev", function(a) {
                e.nav(a, "prev");
            }).on("click.fndtn.clearing", this.settings.close_selectors, function(a) {
                Foundation.libs.clearing.close(a, this);
            }), a(c).on("keydown.fndtn.clearing", function(a) {
                e.keydown(a);
            }), f(b).off(".clearing").on("resize.fndtn.clearing", function() {
                e.resize();
            }), this.swipe_events(d);
        },
        swipe_events: function() {
            var a = this, b = a.S;
            b(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(a) {
                a.touches || (a = a.originalEvent);
                var c = {
                    start_page_x: a.touches[0].pageX,
                    start_page_y: a.touches[0].pageY,
                    start_time: new Date().getTime(),
                    delta_x: 0,
                    is_scrolling: d
                };
                b(this).data("swipe-transition", c), a.stopPropagation();
            }).on("touchmove.fndtn.clearing", ".visible-img", function(c) {
                if (c.touches || (c = c.originalEvent), !(c.touches.length > 1 || c.scale && 1 !== c.scale)) {
                    var d = b(this).data("swipe-transition");
                    if ("undefined" == typeof d && (d = {}), d.delta_x = c.touches[0].pageX - d.start_page_x, 
                    Foundation.rtl && (d.delta_x = -d.delta_x), "undefined" == typeof d.is_scrolling && (d.is_scrolling = !!(d.is_scrolling || Math.abs(d.delta_x) < Math.abs(c.touches[0].pageY - d.start_page_y))), 
                    !d.is_scrolling && !d.active) {
                        c.preventDefault();
                        var e = d.delta_x < 0 ? "next" : "prev";
                        d.active = !0, a.nav(c, e);
                    }
                }
            }).on("touchend.fndtn.clearing", ".visible-img", function(a) {
                b(this).data("swipe-transition", {}), a.stopPropagation();
            });
        },
        assemble: function(b) {
            var c = b.parent();
            if (!c.parent().hasClass("carousel")) {
                c.after('<div id="foundationClearingHolder"></div>');
                var d = c.detach(), e = "";
                if (null != d[0]) {
                    e = d[0].outerHTML;
                    var f = this.S("#foundationClearingHolder"), g = c.data(this.attr_name(!0) + "-init"), h = {
                        grid: '<div class="carousel">' + e + "</div>",
                        viewing: g.templates.viewing
                    }, i = '<div class="clearing-assembled"><div>' + h.viewing + h.grid + "</div></div>", j = this.settings.touch_label;
                    Modernizr.touch && (i = a(i).find(".clearing-touch-label").html(j).end()), f.after(i).remove();
                }
            }
        },
        open: function(b, d, e) {
            function f() {
                setTimeout(function() {
                    this.image_loaded(m, function() {
                        1 !== m.outerWidth() || o ? g.call(this, m) : f.call(this);
                    }.bind(this));
                }.bind(this), 100);
            }
            function g(b) {
                var c = a(b);
                c.css("visibility", "visible"), i.css("overflow", "hidden"), j.addClass("clearing-blackout"), 
                k.addClass("clearing-container"), l.show(), this.fix_height(e).caption(h.S(".clearing-caption", l), h.S("img", e)).center_and_label(b, n).shift(d, e, function() {
                    e.closest("li").siblings().removeClass("visible"), e.closest("li").addClass("visible");
                }), l.trigger("opened.fndtn.clearing");
            }
            var h = this, i = a(c.body), j = e.closest(".clearing-assembled"), k = h.S("div", j).first(), l = h.S(".visible-img", k), m = h.S("img", l).not(b), n = h.S(".clearing-touch-label", k), o = !1;
            a("body").on("touchmove", function(a) {
                a.preventDefault();
            }), m.error(function() {
                o = !0;
            }), this.locked() || (l.trigger("open.fndtn.clearing"), m.attr("src", this.load(b)).css("visibility", "hidden"), 
            f.call(this));
        },
        close: function(b, d) {
            b.preventDefault();
            var e, f, g = function(a) {
                return /blackout/.test(a.selector) ? a : a.closest(".clearing-blackout");
            }(a(d)), h = a(c.body);
            return d === b.target && g && (h.css("overflow", ""), e = a("div", g).first(), f = a(".visible-img", e), 
            f.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, a("ul[" + this.attr_name() + "]", g).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), 
            e.removeClass("clearing-container"), f.hide(), f.trigger("closed.fndtn.clearing")), 
            a("body").off("touchmove"), !1;
        },
        is_open: function(a) {
            return a.parent().prop("style").length > 0;
        },
        keydown: function(b) {
            var c = a(".clearing-blackout ul[" + this.attr_name() + "]"), d = this.rtl ? 37 : 39, e = this.rtl ? 39 : 37, f = 27;
            b.which === d && this.go(c, "next"), b.which === e && this.go(c, "prev"), b.which === f && this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing");
        },
        nav: function(b, c) {
            var d = a("ul[" + this.attr_name() + "]", ".clearing-blackout");
            b.preventDefault(), this.go(d, c);
        },
        resize: function() {
            var b = a("img", ".clearing-blackout .visible-img"), c = a(".clearing-touch-label", ".clearing-blackout");
            b.length && (this.center_and_label(b, c), b.trigger("resized.fndtn.clearing"));
        },
        fix_height: function(a) {
            var b = a.parent().children(), c = this;
            return b.each(function() {
                var a = c.S(this), b = a.find("img");
                a.height() > b.outerHeight() && a.addClass("fix-height");
            }).closest("ul").width(100 * b.length + "%"), this;
        },
        update_paddles: function(a) {
            a = a.closest("li");
            var b = a.closest(".carousel").siblings(".visible-img");
            a.next().length > 0 ? this.S(".clearing-main-next", b).removeClass("disabled") : this.S(".clearing-main-next", b).addClass("disabled"), 
            a.prev().length > 0 ? this.S(".clearing-main-prev", b).removeClass("disabled") : this.S(".clearing-main-prev", b).addClass("disabled");
        },
        center_and_label: function(a, b) {
            return this.rtl ? (a.css({
                marginRight: -(a.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2),
                left: "auto",
                right: "50%"
            }), b.length > 0 && b.css({
                marginRight: -(b.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10,
                left: "auto",
                right: "50%"
            })) : (a.css({
                marginLeft: -(a.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2)
            }), b.length > 0 && b.css({
                marginLeft: -(b.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10
            })), this;
        },
        load: function(a) {
            var b;
            return b = "A" === a[0].nodeName ? a.attr("href") : a.parent().attr("href"), this.preload(a), 
            b ? b : a.attr("src");
        },
        preload: function(a) {
            this.img(a.closest("li").next()).img(a.closest("li").prev());
        },
        img: function(a) {
            if (a.length) {
                var b = new Image(), c = this.S("a", a);
                b.src = c.length ? c.attr("href") : this.S("img", a).attr("src");
            }
            return this;
        },
        caption: function(a, b) {
            var c = b.attr("data-caption");
            return c ? a.html(c).show() : a.text("").hide(), this;
        },
        go: function(a, b) {
            var c = this.S(".visible", a), d = c[b]();
            this.settings.skip_selector && 0 != d.find(this.settings.skip_selector).length && (d = d[b]()), 
            d.length && this.S("img", d).trigger("click", [ c, d ]).trigger("click.fndtn.clearing", [ c, d ]).trigger("change.fndtn.clearing");
        },
        shift: function(a, b, c) {
            var d, e = b.parent(), f = this.settings.prev_index || b.index(), g = this.direction(e, a, b), h = this.rtl ? "right" : "left", i = parseInt(e.css("left"), 10), j = b.outerWidth(), k = {};
            b.index() === f || /skip/.test(g) ? /skip/.test(g) && (d = b.index() - this.settings.up_count, 
            this.lock(), d > 0 ? (k[h] = -(d * j), e.animate(k, 300, this.unlock())) : (k[h] = 0, 
            e.animate(k, 300, this.unlock()))) : /left/.test(g) ? (this.lock(), k[h] = i + j, 
            e.animate(k, 300, this.unlock())) : /right/.test(g) && (this.lock(), k[h] = i - j, 
            e.animate(k, 300, this.unlock())), c();
        },
        direction: function(a, b, c) {
            var d, e = this.S("li", a), f = e.outerWidth() + e.outerWidth() / 4, g = Math.floor(this.S(".clearing-container").outerWidth() / f) - 1, h = e.index(c);
            return this.settings.up_count = g, d = this.adjacent(this.settings.prev_index, h) ? h > g && h > this.settings.prev_index ? "right" : h > g - 1 && h <= this.settings.prev_index ? "left" : !1 : "skip", 
            this.settings.prev_index = h, d;
        },
        adjacent: function(a, b) {
            for (var c = b + 1; c >= b - 1; c--) if (c === a) return !0;
            return !1;
        },
        lock: function() {
            this.settings.locked = !0;
        },
        unlock: function() {
            this.settings.locked = !1;
        },
        locked: function() {
            return this.settings.locked;
        },
        off: function() {
            this.S(this.scope).off(".fndtn.clearing"), this.S(b).off(".fndtn.clearing");
        },
        reflow: function() {
            this.init();
        }
    };
}(jQuery, window, window.document), function(a, b) {
    "use strict";
    Foundation.libs.dropdown = {
        name: "dropdown",
        version: "5.4.7",
        settings: {
            active_class: "open",
            disabled_class: "disabled",
            mega_class: "mega",
            align: "bottom",
            is_hover: !1,
            opened: function() {},
            closed: function() {}
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle"), this.bindings(b, c);
        },
        events: function() {
            var c = this, d = c.S;
            d(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(b) {
                var e = d(this).data(c.attr_name(!0) + "-init") || c.settings;
                (!e.is_hover || Modernizr.touch) && (b.preventDefault(), c.toggle(a(this)));
            }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(a) {
                var b, e, f = d(this);
                clearTimeout(c.timeout), f.data(c.data_attr()) ? (b = d("#" + f.data(c.data_attr())), 
                e = f) : (b = f, e = d("[" + c.attr_name() + "='" + b.attr("id") + "']"));
                var g = e.data(c.attr_name(!0) + "-init") || c.settings;
                d(a.target).data(c.data_attr()) && g.is_hover && c.closeall.call(c), g.is_hover && c.open.apply(c, [ b, e ]);
            }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function() {
                var a = d(this);
                c.timeout = setTimeout(function() {
                    if (a.data(c.data_attr())) {
                        var b = a.data(c.data_attr(!0) + "-init") || c.settings;
                        b.is_hover && c.close.call(c, d("#" + a.data(c.data_attr())));
                    } else {
                        var e = d("[" + c.attr_name() + '="' + d(this).attr("id") + '"]'), b = e.data(c.attr_name(!0) + "-init") || c.settings;
                        b.is_hover && c.close.call(c, a);
                    }
                }.bind(this), 150);
            }).on("click.fndtn.dropdown", function(b) {
                var e = d(b.target).closest("[" + c.attr_name() + "-content]");
                if (!(d(b.target).closest("[" + c.attr_name() + "]").length > 0)) return !d(b.target).data("revealId") && e.length > 0 && (d(b.target).is("[" + c.attr_name() + "-content]") || a.contains(e.first()[0], b.target)) ? void b.stopPropagation() : void c.close.call(c, d("[" + c.attr_name() + "-content]"));
            }).on("opened.fndtn.dropdown", "[" + c.attr_name() + "-content]", function() {
                c.settings.opened.call(this);
            }).on("closed.fndtn.dropdown", "[" + c.attr_name() + "-content]", function() {
                c.settings.closed.call(this);
            }), d(b).off(".dropdown").on("resize.fndtn.dropdown", c.throttle(function() {
                c.resize.call(c);
            }, 50)), this.resize();
        },
        close: function(b) {
            var c = this;
            b.each(function() {
                var d = a("[" + c.attr_name() + "=" + b[0].id + "]") || a("aria-controls=" + b[0].id + "]");
                d.attr("aria-expanded", "false"), c.S(this).hasClass(c.settings.active_class) && (c.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(c.settings.active_class).prev("[" + c.attr_name() + "]").removeClass(c.settings.active_class).removeData("target"), 
                c.S(this).trigger("closed").trigger("closed.fndtn.dropdown", [ b ]));
            });
        },
        closeall: function() {
            var b = this;
            a.each(b.S("[" + this.attr_name() + "-content]"), function() {
                b.close.call(b, b.S(this));
            });
        },
        open: function(a, b) {
            this.css(a.addClass(this.settings.active_class), b), a.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), 
            a.data("target", b.get(0)).trigger("opened").trigger("opened.fndtn.dropdown", [ a, b ]), 
            a.attr("aria-hidden", "false"), b.attr("aria-expanded", "true"), a.focus();
        },
        data_attr: function() {
            return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name;
        },
        toggle: function(a) {
            if (!a.hasClass(this.settings.disabled_class)) {
                var b = this.S("#" + a.data(this.data_attr()));
                0 !== b.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(b)), 
                b.hasClass(this.settings.active_class) ? (this.close.call(this, b), b.data("target") !== a.get(0) && this.open.call(this, b, a)) : this.open.call(this, b, a));
            }
        },
        resize: function() {
            var a = this.S("[" + this.attr_name() + "-content].open"), b = this.S("[" + this.attr_name() + "='" + a.attr("id") + "']");
            a.length && b.length && this.css(a, b);
        },
        css: function(a, b) {
            var c = Math.max((b.width() - a.width()) / 2, 8), d = b.data(this.attr_name(!0) + "-init") || this.settings;
            if (this.clear_idx(), this.small()) {
                var e = this.dirs.bottom.call(a, b, d);
                a.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                    position: "absolute",
                    width: "95%",
                    "max-width": "none",
                    top: e.top
                }), a.css(Foundation.rtl ? "right" : "left", c);
            } else this.style(a, b, d);
            return a;
        },
        style: function(b, c, d) {
            var e = a.extend({
                position: "absolute"
            }, this.dirs[d.align].call(b, c, d));
            b.attr("style", "").css(e);
        },
        dirs: {
            _base: function(a) {
                var b = this.offsetParent(), c = b.offset(), d = a.offset();
                return d.top -= c.top, d.left -= c.left, d;
            },
            top: function(a, b) {
                var c = Foundation.libs.dropdown, d = c.dirs._base.call(this, a);
                return this.addClass("drop-top"), (a.outerWidth() < this.outerWidth() || c.small() || this.hasClass(b.mega_menu)) && c.adjust_pip(this, a, b, d), 
                Foundation.rtl ? {
                    left: d.left - this.outerWidth() + a.outerWidth(),
                    top: d.top - this.outerHeight()
                } : {
                    left: d.left,
                    top: d.top - this.outerHeight()
                };
            },
            bottom: function(a, b) {
                var c = Foundation.libs.dropdown, d = c.dirs._base.call(this, a);
                return (a.outerWidth() < this.outerWidth() || c.small() || this.hasClass(b.mega_menu)) && c.adjust_pip(this, a, b, d), 
                c.rtl ? {
                    left: d.left - this.outerWidth() + a.outerWidth(),
                    top: d.top + a.outerHeight()
                } : {
                    left: d.left,
                    top: d.top + a.outerHeight()
                };
            },
            left: function(a) {
                var b = Foundation.libs.dropdown.dirs._base.call(this, a);
                return this.addClass("drop-left"), {
                    left: b.left - this.outerWidth(),
                    top: b.top
                };
            },
            right: function(a) {
                var b = Foundation.libs.dropdown.dirs._base.call(this, a);
                return this.addClass("drop-right"), {
                    left: b.left + a.outerWidth(),
                    top: b.top
                };
            }
        },
        adjust_pip: function(a, b, c, d) {
            var e = Foundation.stylesheet, f = 8;
            a.hasClass(c.mega_class) ? f = d.left + b.outerWidth() / 2 - 8 : this.small() && (f += d.left - 8), 
            this.rule_idx = e.cssRules.length;
            var g = ".f-dropdown.open:before", h = ".f-dropdown.open:after", i = "left: " + f + "px;", j = "left: " + (f - 1) + "px;";
            e.insertRule ? (e.insertRule([ g, "{", i, "}" ].join(" "), this.rule_idx), e.insertRule([ h, "{", j, "}" ].join(" "), this.rule_idx + 1)) : (e.addRule(g, i, this.rule_idx), 
            e.addRule(h, j, this.rule_idx + 1));
        },
        clear_idx: function() {
            var a = Foundation.stylesheet;
            "undefined" != typeof this.rule_idx && (a.deleteRule(this.rule_idx), a.deleteRule(this.rule_idx), 
            delete this.rule_idx);
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches;
        },
        off: function() {
            this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), 
            this.S(b).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown");
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b) {
    "use strict";
    Foundation.libs.equalizer = {
        name: "equalizer",
        version: "5.4.7",
        settings: {
            use_tallest: !0,
            before_height_change: a.noop,
            after_height_change: a.noop,
            equalize_on_stack: !1
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "image_loaded"), this.bindings(b, c), this.reflow();
        },
        events: function() {
            this.S(b).off(".equalizer").on("resize.fndtn.equalizer", function() {
                this.reflow();
            }.bind(this));
        },
        equalize: function(b) {
            var c = !1, d = b.find("[" + this.attr_name() + "-watch]:visible"), e = b.data(this.attr_name(!0) + "-init");
            if (0 !== d.length) {
                var f = d.first().offset().top;
                if (e.before_height_change(), b.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"), 
                d.height("inherit"), d.each(function() {
                    var b = a(this);
                    b.offset().top !== f && (c = !0);
                }), e.equalize_on_stack !== !1 || !c) {
                    var g = d.map(function() {
                        return a(this).outerHeight(!1);
                    }).get();
                    if (e.use_tallest) {
                        var h = Math.max.apply(null, g);
                        d.css("height", h);
                    } else {
                        var i = Math.min.apply(null, g);
                        d.css("height", i);
                    }
                    e.after_height_change(), b.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer");
                }
            }
        },
        reflow: function() {
            var b = this;
            this.S("[" + this.attr_name() + "]", this.scope).each(function() {
                var c = a(this);
                b.image_loaded(b.S("img", this), function() {
                    b.equalize(c);
                });
            });
        }
    };
}(jQuery, window, window.document), function(a, b) {
    "use strict";
    Foundation.libs.interchange = {
        name: "interchange",
        version: "5.4.7",
        cache: {},
        images_loaded: !1,
        nodes_loaded: !1,
        settings: {
            load_attr: "interchange",
            named_queries: {
                "default": "only screen",
                small: Foundation.media_queries.small,
                medium: Foundation.media_queries.medium,
                large: Foundation.media_queries.large,
                xlarge: Foundation.media_queries.xlarge,
                xxlarge: Foundation.media_queries.xxlarge,
                landscape: "only screen and (orientation: landscape)",
                portrait: "only screen and (orientation: portrait)",
                retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
            },
            directives: {
                replace: function(b, c, d) {
                    if (/IMG/.test(b[0].nodeName)) {
                        var e = b[0].src;
                        if (new RegExp(c, "i").test(e)) return;
                        return b[0].src = c, d(b[0].src);
                    }
                    var f = b.data(this.data_attr + "-last-path"), g = this;
                    if (f != c) return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(c) ? (a(b).css("background-image", "url(" + c + ")"), 
                    b.data("interchange-last-path", c), d(c)) : a.get(c, function(a) {
                        b.html(a), b.data(g.data_attr + "-last-path", c), d();
                    });
                }
            }
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), 
            a.extend(!0, this.settings, c, d), this.bindings(c, d), this.load("images"), this.load("nodes");
        },
        get_media_hash: function() {
            var a = "";
            for (var b in this.settings.named_queries) a += matchMedia(this.settings.named_queries[b]).matches.toString();
            return a;
        },
        events: function() {
            var c, d = this;
            return a(b).off(".interchange").on("resize.fndtn.interchange", d.throttle(function() {
                var a = d.get_media_hash();
                a !== c && d.resize(), c = a;
            }, 50)), this;
        },
        resize: function() {
            var b = this.cache;
            if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(a.proxy(this.resize, this), 50);
            for (var c in b) if (b.hasOwnProperty(c)) {
                var d = this.results(c, b[c]);
                d && this.settings.directives[d.scenario[1]].call(this, d.el, d.scenario[0], function() {
                    if (arguments[0] instanceof Array) var a = arguments[0]; else var a = Array.prototype.slice.call(arguments, 0);
                    d.el.trigger(d.scenario[1], a);
                });
            }
        },
        results: function(a, b) {
            var c = b.length;
            if (c > 0) for (var d = this.S("[" + this.add_namespace("data-uuid") + '="' + a + '"]'); c--; ) {
                var e, f = b[c][2];
                if (e = matchMedia(this.settings.named_queries.hasOwnProperty(f) ? this.settings.named_queries[f] : f), 
                e.matches) return {
                    el: d,
                    scenario: b[c]
                };
            }
            return !1;
        },
        load: function(a, b) {
            return ("undefined" == typeof this["cached_" + a] || b) && this["update_" + a](), 
            this["cached_" + a];
        },
        update_images: function() {
            var a = this.S("img[" + this.data_attr + "]"), b = a.length, c = b, d = 0, e = this.data_attr;
            for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === b; c--; ) {
                if (d++, a[c]) {
                    var f = a[c].getAttribute(e) || "";
                    f.length > 0 && this.cached_images.push(a[c]);
                }
                d === b && (this.images_loaded = !0, this.enhance("images"));
            }
            return this;
        },
        update_nodes: function() {
            var a = this.S("[" + this.data_attr + "]").not("img"), b = a.length, c = b, d = 0, e = this.data_attr;
            for (this.cached_nodes = [], this.nodes_loaded = 0 === b; c--; ) {
                d++;
                var f = a[c].getAttribute(e) || "";
                f.length > 0 && this.cached_nodes.push(a[c]), d === b && (this.nodes_loaded = !0, 
                this.enhance("nodes"));
            }
            return this;
        },
        enhance: function(c) {
            for (var d = this["cached_" + c].length; d--; ) this.object(a(this["cached_" + c][d]));
            return a(b).trigger("resize").trigger("resize.fndtn.interchange");
        },
        convert_directive: function(a) {
            var b = this.trim(a);
            return b.length > 0 ? b : "replace";
        },
        parse_scenario: function(a) {
            var b = a[0].match(/(.+),\s*(\w+)\s*$/), c = a[1];
            if (b) var d = b[1], e = b[2]; else var f = a[0].split(/,\s*$/), d = f[0], e = "";
            return [ this.trim(d), this.convert_directive(e), this.trim(c) ];
        },
        object: function(a) {
            var b = this.parse_data_attr(a), c = [], d = b.length;
            if (d > 0) for (;d--; ) {
                var e = b[d].split(/\((.*?)(\))$/);
                if (e.length > 1) {
                    var f = this.parse_scenario(e);
                    c.push(f);
                }
            }
            return this.store(a, c);
        },
        store: function(a, b) {
            var c = this.random_str(), d = a.data(this.add_namespace("uuid", !0));
            return this.cache[d] ? this.cache[d] : (a.attr(this.add_namespace("data-uuid"), c), 
            this.cache[c] = b);
        },
        trim: function(b) {
            return "string" == typeof b ? a.trim(b) : b;
        },
        set_data_attr: function(a) {
            return a ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr;
        },
        parse_data_attr: function(a) {
            for (var b = a.attr(this.attr_name()).split(/\[(.*?)\]/), c = b.length, d = []; c--; ) b[c].replace(/[\W\d]+/, "").length > 4 && d.push(b[c]);
            return d;
        },
        reflow: function() {
            this.load("images", !0), this.load("nodes", !0);
        }
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    "use strict";
    Foundation.libs.joyride = {
        name: "joyride",
        version: "5.4.7",
        defaults: {
            expose: !1,
            modal: !0,
            keyboard: !0,
            tip_location: "bottom",
            nub_position: "auto",
            scroll_speed: 1500,
            scroll_animation: "linear",
            timer: 0,
            start_timer_on_click: !0,
            start_offset: 0,
            next_button: !0,
            prev_button: !0,
            tip_animation: "fade",
            pause_after: [],
            exposed: [],
            tip_animation_fade_speed: 300,
            cookie_monster: !1,
            cookie_name: "joyride",
            cookie_domain: !1,
            cookie_expires: 365,
            tip_container: "body",
            abort_on_close: !0,
            tip_location_patterns: {
                top: [ "bottom" ],
                bottom: [],
                left: [ "right", "top", "bottom" ],
                right: [ "left", "top", "bottom" ]
            },
            post_ride_callback: function() {},
            post_step_callback: function() {},
            pre_step_callback: function() {},
            pre_ride_callback: function() {},
            post_expose_callback: function() {},
            template: {
                link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                wrapper: '<div class="joyride-content-wrapper"></div>',
                button: '<a href="#" class="small button joyride-next-tip"></a>',
                prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
                modal: '<div class="joyride-modal-bg"></div>',
                expose: '<div class="joyride-expose-wrapper"></div>',
                expose_cover: '<div class="joyride-expose-cover"></div>'
            },
            expose_add_class: ""
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || a.extend({}, this.defaults, d || c), 
            this.bindings(c, d);
        },
        go_next: function() {
            this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), 
            this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show());
        },
        go_prev: function() {
            this.settings.$li.prev().length < 1 || (this.settings.timer > 0 ? (clearTimeout(this.settings.automate), 
            this.hide(), this.show(null, !0), this.startTimer()) : (this.hide(), this.show(null, !0)));
        },
        events: function() {
            var c = this;
            a(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function(a) {
                a.preventDefault(), this.go_next();
            }.bind(this)).on("click.fndtn.joyride", ".joyride-prev-tip", function(a) {
                a.preventDefault(), this.go_prev();
            }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function(a) {
                a.preventDefault(), this.end(this.settings.abort_on_close);
            }.bind(this)).on("keyup.fndtn.joyride", function(a) {
                if (this.settings.keyboard && this.settings.riding) switch (a.which) {
                  case 39:
                    a.preventDefault(), this.go_next();
                    break;

                  case 37:
                    a.preventDefault(), this.go_prev();
                    break;

                  case 27:
                    a.preventDefault(), this.end(this.settings.abort_on_close);
                }
            }.bind(this)), a(b).off(".joyride").on("resize.fndtn.joyride", c.throttle(function() {
                if (a("[" + c.attr_name() + "]").length > 0 && c.settings.$next_tip && c.settings.riding) {
                    if (c.settings.exposed.length > 0) {
                        var b = a(c.settings.exposed);
                        b.each(function() {
                            var b = a(this);
                            c.un_expose(b), c.expose(b);
                        });
                    }
                    c.is_phone() ? c.pos_phone() : c.pos_default(!1);
                }
            }, 100));
        },
        start: function() {
            var b = this, c = a("[" + this.attr_name() + "]", this.scope), d = [ "timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires" ], e = d.length;
            !c.length > 0 || (this.settings.init || this.events(), this.settings = c.data(this.attr_name(!0) + "-init"), 
            this.settings.$content_el = c, this.settings.$body = a(this.settings.tip_container), 
            this.settings.body_offset = a(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), 
            this.settings.paused = !1, this.settings.attempts = 0, this.settings.riding = !0, 
            "function" != typeof a.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !a.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function(c) {
                var f = a(this);
                this.settings = a.extend({}, b.defaults, b.data_options(f));
                for (var g = e; g--; ) b.settings[d[g]] = parseInt(b.settings[d[g]], 10);
                b.create({
                    $li: f,
                    index: c
                });
            }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), 
            this.startTimer()) : this.show("init")));
        },
        resume: function() {
            this.set_li(), this.show();
        },
        tip_template: function(b) {
            var c, d;
            return b.tip_class = b.tip_class || "", c = a(this.settings.template.tip).addClass(b.tip_class), 
            d = a.trim(a(b.li).html()) + this.prev_button_text(b.prev_button_text, b.index) + this.button_text(b.button_text) + this.settings.template.link + this.timer_instance(b.index), 
            c.append(a(this.settings.template.wrapper)), c.first().attr(this.add_namespace("data-index"), b.index), 
            a(".joyride-content-wrapper", c).append(d), c[0];
        },
        timer_instance: function(b) {
            var c;
            return c = 0 === b && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : a(this.settings.template.timer)[0].outerHTML;
        },
        button_text: function(b) {
            return this.settings.tip_settings.next_button ? (b = a.trim(b) || "Next", b = a(this.settings.template.button).append(b)[0].outerHTML) : b = "", 
            b;
        },
        prev_button_text: function(b, c) {
            return this.settings.tip_settings.prev_button ? (b = a.trim(b) || "Previous", b = 0 == c ? a(this.settings.template.prev_button).append(b).addClass("disabled")[0].outerHTML : a(this.settings.template.prev_button).append(b)[0].outerHTML) : b = "", 
            b;
        },
        create: function(b) {
            this.settings.tip_settings = a.extend({}, this.settings, this.data_options(b.$li));
            var c = b.$li.attr(this.add_namespace("data-button")) || b.$li.attr(this.add_namespace("data-text")), d = b.$li.attr(this.add_namespace("data-button-prev")) || b.$li.attr(this.add_namespace("data-prev-text")), e = b.$li.attr("class"), f = a(this.tip_template({
                tip_class: e,
                index: b.index,
                button_text: c,
                prev_button_text: d,
                li: b.$li
            }));
            a(this.settings.tip_container).append(f);
        },
        show: function(b, c) {
            var e = null;
            this.settings.$li === d || -1 === a.inArray(this.settings.$li.index(), this.settings.pause_after) ? (this.settings.paused ? this.settings.paused = !1 : this.set_li(b, c), 
            this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0 ? (b && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), 
            this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), 
            this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = a.extend({}, this.settings, this.data_options(this.settings.$li)), 
            this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], 
            /body/i.test(this.settings.$target.selector) || this.scroll_to(), this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), 
            e = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (e.width(0), 
            this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function() {
                e.animate({
                    width: e.parent().width()
                }, this.settings.timer, "linear");
            }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (e.width(0), 
            this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), 
            setTimeout(function() {
                e.animate({
                    width: e.parent().width()
                }, this.settings.timer, "linear");
            }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), 
            this.settings.$current_tip = this.settings.$next_tip) : this.settings.$li && this.settings.$target.length < 1 ? this.show(b, c) : this.end()) : this.settings.paused = !0;
        },
        is_phone: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches;
        },
        hide: function() {
            this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || a(".joyride-modal-bg").hide(), 
            this.settings.$current_tip.css("visibility", "hidden"), setTimeout(a.proxy(function() {
                this.hide(), this.css("visibility", "visible");
            }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip);
        },
        set_li: function(a, b) {
            a ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), 
            this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = b ? this.settings.$li.prev() : this.settings.$li.next(), 
            this.set_next_tip()), this.set_target();
        },
        set_next_tip: function() {
            this.settings.$next_tip = a(".joyride-tip-guide").eq(this.settings.$li.index()), 
            this.settings.$next_tip.data("closed", "");
        },
        set_target: function() {
            var b = this.settings.$li.attr(this.add_namespace("data-class")), d = this.settings.$li.attr(this.add_namespace("data-id")), e = function() {
                return d ? a(c.getElementById(d)) : b ? a("." + b).first() : a("body");
            };
            this.settings.$target = e();
        },
        scroll_to: function() {
            var c, d;
            c = a(b).height() / 2, d = Math.ceil(this.settings.$target.offset().top - c + this.settings.$next_tip.outerHeight()), 
            0 != d && a("html, body").stop().animate({
                scrollTop: d
            }, this.settings.scroll_speed, "swing");
        },
        paused: function() {
            return -1 === a.inArray(this.settings.$li.index() + 1, this.settings.pause_after);
        },
        restart: function() {
            this.hide(), this.settings.$li = d, this.show("init");
        },
        pos_default: function(a) {
            var b = this.settings.$next_tip.find(".joyride-nub"), c = Math.ceil(b.outerWidth() / 2), d = Math.ceil(b.outerHeight() / 2), e = a || !1;
            if (e && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), 
            /body/i.test(this.settings.$target.selector)) this.settings.$li.length && this.pos_modal(b); else {
                var f = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0, g = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                this.bottom() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top + d + this.settings.$target.outerHeight() + f,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + g
                } : {
                    top: this.settings.$target.offset().top + d + this.settings.$target.outerHeight() + f,
                    left: this.settings.$target.offset().left + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - d + f,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                } : {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - d + f,
                    left: this.settings.$target.offset().left + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + f,
                    left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + c + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + f,
                    left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - c + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (b.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), 
                this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], 
                this.settings.attempts++, this.pos_default());
            }
            e && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"));
        },
        pos_phone: function(b) {
            var c = this.settings.$next_tip.outerHeight(), d = (this.settings.$next_tip.offset(), 
            this.settings.$target.outerHeight()), e = a(".joyride-nub", this.settings.$next_tip), f = Math.ceil(e.outerHeight() / 2), g = b || !1;
            e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), 
            g && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), 
            /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(e) : this.top() ? (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top - c - f
            }), e.addClass("bottom")) : (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top + d + f
            }), e.addClass("top")), g && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"));
        },
        pos_modal: function(a) {
            this.center(), a.hide(), this.show_modal();
        },
        show_modal: function() {
            if (!this.settings.$next_tip.data("closed")) {
                var b = a(".joyride-modal-bg");
                b.length < 1 && a("body").append(this.settings.template.modal).show(), /pop/i.test(this.settings.tip_animation) ? b.show() : b.fadeIn(this.settings.tip_animation_fade_speed);
            }
        },
        expose: function() {
            var c, d, e, f, g, h = "expose-" + this.random_str(6);
            if (arguments.length > 0 && arguments[0] instanceof a) e = arguments[0]; else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                e = this.settings.$target;
            }
            return e.length < 1 ? (b.console && console.error("element not valid", e), !1) : (c = a(this.settings.template.expose), 
            this.settings.$body.append(c), c.css({
                top: e.offset().top,
                left: e.offset().left,
                width: e.outerWidth(!0),
                height: e.outerHeight(!0)
            }), d = a(this.settings.template.expose_cover), f = {
                zIndex: e.css("z-index"),
                position: e.css("position")
            }, g = null == e.attr("class") ? "" : e.attr("class"), e.css("z-index", parseInt(c.css("z-index")) + 1), 
            "static" == f.position && e.css("position", "relative"), e.data("expose-css", f), 
            e.data("orig-class", g), e.attr("class", g + " " + this.settings.expose_add_class), 
            d.css({
                top: e.offset().top,
                left: e.offset().left,
                width: e.outerWidth(!0),
                height: e.outerHeight(!0)
            }), this.settings.modal && this.show_modal(), this.settings.$body.append(d), c.addClass(h), 
            d.addClass(h), e.data("expose", h), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, e), 
            void this.add_exposed(e));
        },
        un_expose: function() {
            var c, d, e, f, g, h = !1;
            if (arguments.length > 0 && arguments[0] instanceof a) d = arguments[0]; else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                d = this.settings.$target;
            }
            return d.length < 1 ? (b.console && console.error("element not valid", d), !1) : (c = d.data("expose"), 
            e = a("." + c), arguments.length > 1 && (h = arguments[1]), h === !0 ? a(".joyride-expose-wrapper,.joyride-expose-cover").remove() : e.remove(), 
            f = d.data("expose-css"), "auto" == f.zIndex ? d.css("z-index", "") : d.css("z-index", f.zIndex), 
            f.position != d.css("position") && ("static" == f.position ? d.css("position", "") : d.css("position", f.position)), 
            g = d.data("orig-class"), d.attr("class", g), d.removeData("orig-classes"), d.removeData("expose"), 
            d.removeData("expose-z-index"), void this.remove_exposed(d));
        },
        add_exposed: function(b) {
            this.settings.exposed = this.settings.exposed || [], b instanceof a || "object" == typeof b ? this.settings.exposed.push(b[0]) : "string" == typeof b && this.settings.exposed.push(b);
        },
        remove_exposed: function(b) {
            var c, d;
            for (b instanceof a ? c = b[0] : "string" == typeof b && (c = b), this.settings.exposed = this.settings.exposed || [], 
            d = this.settings.exposed.length; d--; ) if (this.settings.exposed[d] == c) return void this.settings.exposed.splice(d, 1);
        },
        center: function() {
            var c = a(b);
            return this.settings.$next_tip.css({
                top: (c.height() - this.settings.$next_tip.outerHeight()) / 2 + c.scrollTop(),
                left: (c.width() - this.settings.$next_tip.outerWidth()) / 2 + c.scrollLeft()
            }), !0;
        },
        bottom: function() {
            return /bottom/i.test(this.settings.tip_settings.tip_location);
        },
        top: function() {
            return /top/i.test(this.settings.tip_settings.tip_location);
        },
        right: function() {
            return /right/i.test(this.settings.tip_settings.tip_location);
        },
        left: function() {
            return /left/i.test(this.settings.tip_settings.tip_location);
        },
        corners: function(c) {
            var d = a(b), e = d.height() / 2, f = Math.ceil(this.settings.$target.offset().top - e + this.settings.$next_tip.outerHeight()), g = d.width() + d.scrollLeft(), h = d.height() + f, i = d.height() + d.scrollTop(), j = d.scrollTop();
            return j > f && (j = 0 > f ? 0 : f), h > i && (i = h), [ c.offset().top < j, g < c.offset().left + c.outerWidth(), i < c.offset().top + c.outerHeight(), d.scrollLeft() > c.offset().left ];
        },
        visible: function(a) {
            for (var b = a.length; b--; ) if (a[b]) return !1;
            return !0;
        },
        nub_position: function(a, b, c) {
            a.addClass("auto" === b ? c : b);
        },
        startTimer: function() {
            this.settings.$li.length ? this.settings.automate = setTimeout(function() {
                this.hide(), this.show(), this.startTimer();
            }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate);
        },
        end: function(b) {
            this.settings.cookie_monster && a.cookie(this.settings.cookie_name, "ridden", {
                expires: this.settings.cookie_expires,
                domain: this.settings.cookie_domain
            }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), 
            a(this.scope).off("keyup.joyride"), this.settings.$next_tip.data("closed", !0), 
            this.settings.riding = !1, a(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), 
            ("undefined" == typeof b || b === !1) && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), 
            this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), 
            a(".joyride-tip-guide").remove();
        },
        off: function() {
            a(this.scope).off(".joyride"), a(b).off(".joyride"), a(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), 
            a(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), 
            this.settings = {};
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b) {
    "use strict";
    Foundation.libs["magellan-expedition"] = {
        name: "magellan-expedition",
        version: "5.4.7",
        settings: {
            active_class: "active",
            threshold: 0,
            destination_threshold: 20,
            throttle_delay: 30,
            fixed_top: 0
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle"), this.bindings(b, c);
        },
        events: function() {
            var c = this, d = c.S, e = c.settings;
            c.set_expedition_position(), d(c.scope).off(".magellan").on("click.fndtn.magellan", "[" + c.add_namespace("data-magellan-arrival") + '] a[href^="#"]', function(b) {
                b.preventDefault();
                var d = a(this).closest("[" + c.attr_name() + "]"), e = d.data("magellan-expedition-init"), f = this.hash.split("#").join(""), g = a("a[name='" + f + "']");
                0 === g.length && (g = a("#" + f));
                var h = g.offset().top - e.destination_threshold + 1;
                h -= d.outerHeight(), a("html, body").stop().animate({
                    scrollTop: h
                }, 700, "swing", function() {
                    history.pushState ? history.pushState(null, null, "#" + f) : location.hash = "#" + f;
                });
            }).on("scroll.fndtn.magellan", c.throttle(this.check_for_arrivals.bind(this), e.throttle_delay)), 
            a(b).on("resize.fndtn.magellan", c.throttle(this.set_expedition_position.bind(this), e.throttle_delay));
        },
        check_for_arrivals: function() {
            var a = this;
            a.update_arrivals(), a.update_expedition_positions();
        },
        set_expedition_position: function() {
            var b = this;
            a("[" + this.attr_name() + "=fixed]", b.scope).each(function() {
                var c, d, e = a(this), f = e.data("magellan-expedition-init"), g = e.attr("styles");
                e.attr("style", ""), c = e.offset().top + f.threshold, d = parseInt(e.data("magellan-fixed-top")), 
                isNaN(d) || (b.settings.fixed_top = d), e.data(b.data_attr("magellan-top-offset"), c), 
                e.attr("style", g);
            });
        },
        update_expedition_positions: function() {
            var c = this, d = a(b).scrollTop();
            a("[" + this.attr_name() + "=fixed]", c.scope).each(function() {
                var b = a(this), e = b.data("magellan-expedition-init"), f = b.attr("style"), g = b.data("magellan-top-offset");
                if (d + c.settings.fixed_top >= g) {
                    var h = b.prev("[" + c.add_namespace("data-magellan-expedition-clone") + "]");
                    0 === h.length && (h = b.clone(), h.removeAttr(c.attr_name()), h.attr(c.add_namespace("data-magellan-expedition-clone"), ""), 
                    b.before(h)), b.css({
                        position: "fixed",
                        top: e.fixed_top
                    }).addClass("fixed");
                } else b.prev("[" + c.add_namespace("data-magellan-expedition-clone") + "]").remove(), 
                b.attr("style", f).css("position", "").css("top", "").removeClass("fixed");
            });
        },
        update_arrivals: function() {
            var c = this, d = a(b).scrollTop();
            a("[" + this.attr_name() + "]", c.scope).each(function() {
                var b = a(this), e = b.data(c.attr_name(!0) + "-init"), f = c.offsets(b, d), g = b.find("[" + c.add_namespace("data-magellan-arrival") + "]"), h = !1;
                f.each(function(a, d) {
                    if (d.viewport_offset >= d.top_offset) {
                        var f = b.find("[" + c.add_namespace("data-magellan-arrival") + "]");
                        return f.not(d.arrival).removeClass(e.active_class), d.arrival.addClass(e.active_class), 
                        h = !0, !0;
                    }
                }), h || g.removeClass(e.active_class);
            });
        },
        offsets: function(b, c) {
            var d = this, e = b.data(d.attr_name(!0) + "-init"), f = c;
            return b.find("[" + d.add_namespace("data-magellan-arrival") + "]").map(function() {
                var c = a(this).data(d.data_attr("magellan-arrival")), g = a("[" + d.add_namespace("data-magellan-destination") + "=" + c + "]");
                if (g.length > 0) {
                    var h = Math.floor(g.offset().top - e.destination_threshold - b.outerHeight());
                    return {
                        destination: g,
                        arrival: a(this),
                        top_offset: h,
                        viewport_offset: f
                    };
                }
            }).sort(function(a, b) {
                return a.top_offset < b.top_offset ? -1 : a.top_offset > b.top_offset ? 1 : 0;
            });
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a;
        },
        off: function() {
            this.S(this.scope).off(".magellan"), this.S(b).off(".magellan");
        },
        reflow: function() {
            var b = this;
            a("[" + b.add_namespace("data-magellan-expedition-clone") + "]", b.scope).remove();
        }
    };
}(jQuery, window, window.document), function(a) {
    "use strict";
    Foundation.libs.offcanvas = {
        name: "offcanvas",
        version: "5.4.7",
        settings: {
            open_method: "move",
            close_on_click: !1
        },
        init: function(a, b, c) {
            this.bindings(b, c);
        },
        events: function() {
            var b = this, c = b.S, d = "", e = "", f = "";
            "move" === this.settings.open_method ? (d = "move-", e = "right", f = "left") : "overlap_single" === this.settings.open_method ? (d = "offcanvas-overlap-", 
            e = "right", f = "left") : "overlap" === this.settings.open_method && (d = "offcanvas-overlap"), 
            c(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(f) {
                b.click_toggle_class(f, d + e), "overlap" !== b.settings.open_method && c(".left-submenu").removeClass(d + e), 
                a(".left-off-canvas-toggle").attr("aria-expanded", "true");
            }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(f) {
                var g = b.get_settings(f), h = c(this).parent();
                !g.close_on_click || h.hasClass("has-submenu") || h.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (f.preventDefault(), 
                c(this).siblings(".left-submenu").toggleClass(d + e)) : h.hasClass("back") && (f.preventDefault(), 
                h.parent().removeClass(d + e)) : (b.hide.call(b, d + e, b.get_wrapper(f)), h.parent().removeClass(d + e)), 
                a(".left-off-canvas-toggle").attr("aria-expanded", "true");
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(e) {
                b.click_toggle_class(e, d + f), "overlap" !== b.settings.open_method && c(".right-submenu").removeClass(d + f), 
                a(".right-off-canvas-toggle").attr("aria-expanded", "true");
            }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(e) {
                var g = b.get_settings(e), h = c(this).parent();
                !g.close_on_click || h.hasClass("has-submenu") || h.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (e.preventDefault(), 
                c(this).siblings(".right-submenu").toggleClass(d + f)) : h.hasClass("back") && (e.preventDefault(), 
                h.parent().removeClass(d + f)) : (b.hide.call(b, d + f, b.get_wrapper(e)), h.parent().removeClass(d + f)), 
                a(".right-off-canvas-toggle").attr("aria-expanded", "true");
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(g) {
                b.click_remove_class(g, d + f), c(".right-submenu").removeClass(d + f), e && (b.click_remove_class(g, d + e), 
                c(".left-submenu").removeClass(d + f)), a(".right-off-canvas-toggle").attr("aria-expanded", "true");
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(c) {
                b.click_remove_class(c, d + f), a(".left-off-canvas-toggle").attr("aria-expanded", "false"), 
                e && (b.click_remove_class(c, d + e), a(".right-off-canvas-toggle").attr("aria-expanded", "false"));
            });
        },
        toggle: function(a, b) {
            b = b || this.get_wrapper(), b.is("." + a) ? this.hide(a, b) : this.show(a, b);
        },
        show: function(a, b) {
            b = b || this.get_wrapper(), b.trigger("open").trigger("open.fndtn.offcanvas"), 
            b.addClass(a);
        },
        hide: function(a, b) {
            b = b || this.get_wrapper(), b.trigger("close").trigger("close.fndtn.offcanvas"), 
            b.removeClass(a);
        },
        click_toggle_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.toggle(b, c);
        },
        click_remove_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.hide(b, c);
        },
        get_settings: function(a) {
            var b = this.S(a.target).closest("[" + this.attr_name() + "]");
            return b.data(this.attr_name(!0) + "-init") || this.settings;
        },
        get_wrapper: function(a) {
            var b = this.S(a ? a.target : this.scope).closest(".off-canvas-wrap");
            return 0 === b.length && (b = this.S(".off-canvas-wrap")), b;
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    "use strict";
    var e = function() {}, f = function(e, f) {
        if (e.hasClass(f.slides_container_class)) return this;
        var j, k, l, m, n, o, p = this, q = e, r = 0, s = !1;
        p.slides = function() {
            return q.children(f.slide_selector);
        }, p.slides().first().addClass(f.active_slide_class), p.update_slide_number = function(b) {
            f.slide_number && (k.find("span:first").text(parseInt(b) + 1), k.find("span:last").text(p.slides().length)), 
            f.bullets && (l.children().removeClass(f.bullets_active_class), a(l.children().get(b)).addClass(f.bullets_active_class));
        }, p.update_active_link = function(b) {
            var c = a('[data-orbit-link="' + p.slides().eq(b).attr("data-orbit-slide") + '"]');
            c.siblings().removeClass(f.bullets_active_class), c.addClass(f.bullets_active_class);
        }, p.build_markup = function() {
            q.wrap('<div class="' + f.container_class + '"></div>'), j = q.parent(), q.addClass(f.slides_container_class), 
            f.stack_on_small && j.addClass(f.stack_on_small_class), f.navigation_arrows && (j.append(a('<a href="#"><span></span></a>').addClass(f.prev_class)), 
            j.append(a('<a href="#"><span></span></a>').addClass(f.next_class))), f.timer && (m = a("<div>").addClass(f.timer_container_class), 
            m.append("<span>"), m.append(a("<div>").addClass(f.timer_progress_class)), m.addClass(f.timer_paused_class), 
            j.append(m)), f.slide_number && (k = a("<div>").addClass(f.slide_number_class), 
            k.append("<span></span> " + f.slide_number_text + " <span></span>"), j.append(k)), 
            f.bullets && (l = a("<ol>").addClass(f.bullets_container_class), j.append(l), l.wrap('<div class="orbit-bullets-container"></div>'), 
            p.slides().each(function(b) {
                var c = a("<li>").attr("data-orbit-slide", b).on("click", p.link_bullet);
                l.append(c);
            }));
        }, p._goto = function(b, c) {
            if (b === r) return !1;
            "object" == typeof o && o.restart();
            var d = p.slides(), e = "next";
            if (s = !0, r > b && (e = "prev"), b >= d.length) {
                if (!f.circular) return !1;
                b = 0;
            } else if (0 > b) {
                if (!f.circular) return !1;
                b = d.length - 1;
            }
            var g = a(d.get(r)), h = a(d.get(b));
            g.css("zIndex", 2), g.removeClass(f.active_slide_class), h.css("zIndex", 4).addClass(f.active_slide_class), 
            q.trigger("before-slide-change.fndtn.orbit"), f.before_slide_change(), p.update_active_link(b);
            var i = function() {
                var a = function() {
                    r = b, s = !1, c === !0 && (o = p.create_timer(), o.start()), p.update_slide_number(r), 
                    q.trigger("after-slide-change.fndtn.orbit", [ {
                        slide_number: r,
                        total_slides: d.length
                    } ]), f.after_slide_change(r, d.length);
                };
                q.height() != h.height() && f.variable_height ? q.animate({
                    height: h.height()
                }, 250, "linear", a) : a();
            };
            if (1 === d.length) return i(), !1;
            var j = function() {
                "next" === e && n.next(g, h, i), "prev" === e && n.prev(g, h, i);
            };
            h.height() > q.height() && f.variable_height ? q.animate({
                height: h.height()
            }, 250, "linear", j) : j();
        }, p.next = function(a) {
            a.stopImmediatePropagation(), a.preventDefault(), p._goto(r + 1);
        }, p.prev = function(a) {
            a.stopImmediatePropagation(), a.preventDefault(), p._goto(r - 1);
        }, p.link_custom = function(b) {
            b.preventDefault();
            var c = a(this).attr("data-orbit-link");
            if ("string" == typeof c && "" != (c = a.trim(c))) {
                var d = j.find("[data-orbit-slide=" + c + "]");
                -1 != d.index() && p._goto(d.index());
            }
        }, p.link_bullet = function() {
            var b = a(this).attr("data-orbit-slide");
            if ("string" == typeof b && "" != (b = a.trim(b))) if (isNaN(parseInt(b))) {
                var c = j.find("[data-orbit-slide=" + b + "]");
                -1 != c.index() && p._goto(c.index() + 1);
            } else p._goto(parseInt(b));
        }, p.timer_callback = function() {
            p._goto(r + 1, !0);
        }, p.compute_dimensions = function() {
            var b = a(p.slides().get(r)), c = b.height();
            f.variable_height || p.slides().each(function() {
                a(this).height() > c && (c = a(this).height());
            }), q.height(c);
        }, p.create_timer = function() {
            var a = new g(j.find("." + f.timer_container_class), f, p.timer_callback);
            return a;
        }, p.stop_timer = function() {
            "object" == typeof o && o.stop();
        }, p.toggle_timer = function() {
            var a = j.find("." + f.timer_container_class);
            a.hasClass(f.timer_paused_class) ? ("undefined" == typeof o && (o = p.create_timer()), 
            o.start()) : "object" == typeof o && o.stop();
        }, p.init = function() {
            p.build_markup(), f.timer && (o = p.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), o.start)), 
            n = new i(f, q), "slide" === f.animation && (n = new h(f, q)), j.on("click", "." + f.next_class, p.next), 
            j.on("click", "." + f.prev_class, p.prev), f.next_on_click && j.on("click", "." + f.slides_container_class + " [data-orbit-slide]", p.link_bullet), 
            j.on("click", p.toggle_timer), f.swipe && j.on("touchstart.fndtn.orbit", function(a) {
                a.touches || (a = a.originalEvent);
                var b = {
                    start_page_x: a.touches[0].pageX,
                    start_page_y: a.touches[0].pageY,
                    start_time: new Date().getTime(),
                    delta_x: 0,
                    is_scrolling: d
                };
                j.data("swipe-transition", b), a.stopPropagation();
            }).on("touchmove.fndtn.orbit", function(a) {
                if (a.touches || (a = a.originalEvent), !(a.touches.length > 1 || a.scale && 1 !== a.scale)) {
                    var b = j.data("swipe-transition");
                    if ("undefined" == typeof b && (b = {}), b.delta_x = a.touches[0].pageX - b.start_page_x, 
                    "undefined" == typeof b.is_scrolling && (b.is_scrolling = !!(b.is_scrolling || Math.abs(b.delta_x) < Math.abs(a.touches[0].pageY - b.start_page_y))), 
                    !b.is_scrolling && !b.active) {
                        a.preventDefault();
                        var c = b.delta_x < 0 ? r + 1 : r - 1;
                        b.active = !0, p._goto(c);
                    }
                }
            }).on("touchend.fndtn.orbit", function(a) {
                j.data("swipe-transition", {}), a.stopPropagation();
            }), j.on("mouseenter.fndtn.orbit", function() {
                f.timer && f.pause_on_hover && p.stop_timer();
            }).on("mouseleave.fndtn.orbit", function() {
                f.timer && f.resume_on_mouseout && o.start();
            }), a(c).on("click", "[data-orbit-link]", p.link_custom), a(b).on("load resize", p.compute_dimensions), 
            Foundation.utils.image_loaded(this.slides().children("img"), p.compute_dimensions), 
            Foundation.utils.image_loaded(this.slides().children("img"), function() {
                j.prev("." + f.preloader_class).css("display", "none"), p.update_slide_number(0), 
                p.update_active_link(0), q.trigger("ready.fndtn.orbit");
            });
        }, p.init();
    }, g = function(a, b, c) {
        var d, e, f = this, g = b.timer_speed, h = a.find("." + b.timer_progress_class), i = -1;
        this.update_progress = function(a) {
            var b = h.clone();
            b.attr("style", ""), b.css("width", a + "%"), h.replaceWith(b), h = b;
        }, this.restart = function() {
            clearTimeout(e), a.addClass(b.timer_paused_class), i = -1, f.update_progress(0);
        }, this.start = function() {
            return a.hasClass(b.timer_paused_class) ? (i = -1 === i ? g : i, a.removeClass(b.timer_paused_class), 
            d = new Date().getTime(), h.animate({
                width: "100%"
            }, i, "linear"), e = setTimeout(function() {
                f.restart(), c();
            }, i), void a.trigger("timer-started.fndtn.orbit")) : !0;
        }, this.stop = function() {
            if (a.hasClass(b.timer_paused_class)) return !0;
            clearTimeout(e), a.addClass(b.timer_paused_class);
            var c = new Date().getTime();
            i -= c - d;
            var h = 100 - i / g * 100;
            f.update_progress(h), a.trigger("timer-stopped.fndtn.orbit");
        };
    }, h = function(b) {
        var c = b.animation_speed, d = 1 === a("html[dir=rtl]").length, e = d ? "marginRight" : "marginLeft", f = {};
        f[e] = "0%", this.next = function(a, b, d) {
            a.animate({
                marginLeft: "-100%"
            }, c), b.animate(f, c, function() {
                a.css(e, "100%"), d();
            });
        }, this.prev = function(a, b, d) {
            a.animate({
                marginLeft: "100%"
            }, c), b.css(e, "-100%"), b.animate(f, c, function() {
                a.css(e, "100%"), d();
            });
        };
    }, i = function(b) {
        {
            var c = b.animation_speed;
            1 === a("html[dir=rtl]").length;
        }
        this.next = function(a, b, d) {
            b.css({
                margin: "0%",
                opacity: "0.01"
            }), b.animate({
                opacity: "1"
            }, c, "linear", function() {
                a.css("margin", "100%"), d();
            });
        }, this.prev = function(a, b, d) {
            b.css({
                margin: "0%",
                opacity: "0.01"
            }), b.animate({
                opacity: "1"
            }, c, "linear", function() {
                a.css("margin", "100%"), d();
            });
        };
    };
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
        name: "orbit",
        version: "5.4.7",
        settings: {
            animation: "slide",
            timer_speed: 1e4,
            pause_on_hover: !0,
            resume_on_mouseout: !1,
            next_on_click: !0,
            animation_speed: 500,
            stack_on_small: !1,
            navigation_arrows: !0,
            slide_number: !0,
            slide_number_text: "of",
            container_class: "orbit-container",
            stack_on_small_class: "orbit-stack-on-small",
            next_class: "orbit-next",
            prev_class: "orbit-prev",
            timer_container_class: "orbit-timer",
            timer_paused_class: "paused",
            timer_progress_class: "orbit-progress",
            slides_container_class: "orbit-slides-container",
            preloader_class: "preloader",
            slide_selector: "*",
            bullets_container_class: "orbit-bullets",
            bullets_active_class: "active",
            slide_number_class: "orbit-slide-number",
            caption_class: "orbit-caption",
            active_slide_class: "active",
            orbit_transition_class: "orbit-transitioning",
            bullets: !0,
            circular: !0,
            timer: !0,
            variable_height: !1,
            swipe: !0,
            before_slide_change: e,
            after_slide_change: e
        },
        init: function(a, b, c) {
            this.bindings(b, c);
        },
        events: function(a) {
            var b = new f(this.S(a), this.S(a).data("orbit-init"));
            this.S(a).data(this.name + "-instance", b);
        },
        reflow: function() {
            var a = this;
            if (a.S(a.scope).is("[data-orbit]")) {
                var b = a.S(a.scope), c = b.data(a.name + "-instance");
                c.compute_dimensions();
            } else a.S("[data-orbit]", a.scope).each(function(b, c) {
                var d = a.S(c), e = (a.data_options(d), d.data(a.name + "-instance"));
                e.compute_dimensions();
            });
        }
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    "use strict";
    function e(a) {
        var b = /fade/i.test(a), c = /pop/i.test(a);
        return {
            animate: b || c,
            pop: c,
            fade: b
        };
    }
    Foundation.libs.reveal = {
        name: "reveal",
        version: "5.4.7",
        locked: !1,
        settings: {
            animation: "fadeAndPop",
            animation_speed: 250,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: "close-reveal-modal",
            bg_class: "reveal-modal-bg",
            root_element: "body",
            open: function() {},
            opened: function() {},
            close: function() {},
            closed: function() {},
            bg: a(".reveal-modal-bg"),
            css: {
                open: {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                },
                close: {
                    opacity: 1,
                    visibility: "hidden",
                    display: "none"
                }
            }
        },
        init: function(b, c, d) {
            a.extend(!0, this.settings, c, d), this.bindings(c, d);
        },
        events: function() {
            var a = this, b = a.S;
            return b(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(c) {
                if (c.preventDefault(), !a.locked) {
                    var d = b(this), e = d.data(a.data_attr("reveal-ajax"));
                    if (a.locked = !0, "undefined" == typeof e) a.open.call(a, d); else {
                        var f = e === !0 ? d.attr("href") : e;
                        a.open.call(a, d, {
                            url: f
                        });
                    }
                }
            }), b(c).on("click.fndtn.reveal", this.close_targets(), function(c) {
                if (c.preventDefault(), !a.locked) {
                    var d = b("[" + a.attr_name() + "].open").data(a.attr_name(!0) + "-init") || a.settings, e = b(c.target)[0] === b("." + d.bg_class)[0];
                    if (e) {
                        if (!d.close_on_background_click) return;
                        c.stopPropagation();
                    }
                    a.locked = !0, a.close.call(a, e ? b("[" + a.attr_name() + "].open") : b(this).closest("[" + a.attr_name() + "]"));
                }
            }), b("[" + a.attr_name() + "]", this.scope).length > 0 ? b(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : b(this.scope).on("open.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + a.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + a.attr_name() + "]", this.close_video), 
            !0;
        },
        key_up_on: function() {
            var a = this;
            return a.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(b) {
                var c = a.S("[" + a.attr_name() + "].open"), d = c.data(a.attr_name(!0) + "-init") || a.settings;
                d && 27 === b.which && d.close_on_esc && !a.locked && a.close.call(a, c);
            }), !0;
        },
        key_up_off: function() {
            return this.S("body").off("keyup.fndtn.reveal"), !0;
        },
        open: function(c, d) {
            var e, f = this;
            c ? "undefined" != typeof c.selector ? e = f.S("#" + c.data(f.data_attr("reveal-id"))).first() : (e = f.S(this.scope), 
            d = c) : e = f.S(this.scope);
            var g = e.data(f.attr_name(!0) + "-init");
            if (g = g || this.settings, e.hasClass("open") && c.attr("data-reveal-id") == e.attr("id")) return f.close(e);
            if (!e.hasClass("open")) {
                var h = f.S("[" + f.attr_name() + "].open");
                if ("undefined" == typeof e.data("css-top") && e.data("css-top", parseInt(e.css("top"), 10)).data("offset", this.cache_offset(e)), 
                this.key_up_on(e), e.trigger("open").trigger("open.fndtn.reveal"), h.length < 1 && this.toggle_bg(e, !0), 
                "string" == typeof d && (d = {
                    url: d
                }), "undefined" != typeof d && d.url) {
                    var i = "undefined" != typeof d.success ? d.success : null;
                    a.extend(d, {
                        success: function(b, c, d) {
                            a.isFunction(i) && i(b, c, d), e.html(b), f.S(e).foundation("section", "reflow"), 
                            f.S(e).children().foundation(), h.length > 0 && f.hide(h, g.css.close), f.show(e, g.css.open);
                        }
                    }), a.ajax(d);
                } else h.length > 0 && this.hide(h, g.css.close), this.show(e, g.css.open);
            }
            f.S(b).trigger("resize");
        },
        close: function(a) {
            var a = a && a.length ? a : this.S(this.scope), b = this.S("[" + this.attr_name() + "].open"), c = a.data(this.attr_name(!0) + "-init") || this.settings;
            b.length > 0 && (this.locked = !0, this.key_up_off(a), a.trigger("close").trigger("close.fndtn.reveal"), 
            this.toggle_bg(a, !1), this.hide(b, c.css.close, c));
        },
        close_targets: function() {
            var a = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? a + ", ." + this.settings.bg_class : a;
        },
        toggle_bg: function(b, c) {
            0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = a("<div />", {
                "class": this.settings.bg_class
            }).appendTo("body").hide());
            var e = this.settings.bg.filter(":visible").length > 0;
            c != e && ((c == d ? e : !c) ? this.hide(this.settings.bg) : this.show(this.settings.bg));
        },
        show: function(c, d) {
            if (d) {
                var f = c.data(this.attr_name(!0) + "-init") || this.settings, g = f.root_element;
                if (0 === c.parent(g).length) {
                    var h = c.wrap('<div style="display: none;" />').parent();
                    c.on("closed.fndtn.reveal.wrapped", function() {
                        c.detach().appendTo(h), c.unwrap().unbind("closed.fndtn.reveal.wrapped");
                    }), c.detach().appendTo(g);
                }
                var i = e(f.animation);
                if (i.animate || (this.locked = !1), i.pop) {
                    d.top = a(b).scrollTop() - c.data("offset") + "px";
                    var j = {
                        top: a(b).scrollTop() + c.data("css-top") + "px",
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return c.css(d).animate(j, f.animation_speed, "linear", function() {
                            this.locked = !1, c.trigger("opened").trigger("opened.fndtn.reveal");
                        }.bind(this)).addClass("open");
                    }.bind(this), f.animation_speed / 2);
                }
                if (i.fade) {
                    d.top = a(b).scrollTop() + c.data("css-top") + "px";
                    var j = {
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return c.css(d).animate(j, f.animation_speed, "linear", function() {
                            this.locked = !1, c.trigger("opened").trigger("opened.fndtn.reveal");
                        }.bind(this)).addClass("open");
                    }.bind(this), f.animation_speed / 2);
                }
                return c.css(d).show().css({
                    opacity: 1
                }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal");
            }
            var f = this.settings;
            return e(f.animation).fade ? c.fadeIn(f.animation_speed / 2) : (this.locked = !1, 
            c.show());
        },
        hide: function(c, d) {
            if (d) {
                var f = c.data(this.attr_name(!0) + "-init");
                f = f || this.settings;
                var g = e(f.animation);
                if (g.animate || (this.locked = !1), g.pop) {
                    var h = {
                        top: -a(b).scrollTop() - c.data("offset") + "px",
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return c.animate(h, f.animation_speed, "linear", function() {
                            this.locked = !1, c.css(d).trigger("closed").trigger("closed.fndtn.reveal");
                        }.bind(this)).removeClass("open");
                    }.bind(this), f.animation_speed / 2);
                }
                if (g.fade) {
                    var h = {
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return c.animate(h, f.animation_speed, "linear", function() {
                            this.locked = !1, c.css(d).trigger("closed").trigger("closed.fndtn.reveal");
                        }.bind(this)).removeClass("open");
                    }.bind(this), f.animation_speed / 2);
                }
                return c.hide().css(d).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal");
            }
            var f = this.settings;
            return e(f.animation).fade ? c.fadeOut(f.animation_speed / 2) : c.hide();
        },
        close_video: function(b) {
            var c = a(".flex-video", b.target), d = a("iframe", c);
            d.length > 0 && (d.attr("data-src", d[0].src), d.attr("src", d.attr("src")), c.hide());
        },
        open_video: function(b) {
            var c = a(".flex-video", b.target), e = c.find("iframe");
            if (e.length > 0) {
                var f = e.attr("data-src");
                if ("string" == typeof f) e[0].src = e.attr("data-src"); else {
                    var g = e[0].src;
                    e[0].src = d, e[0].src = g;
                }
                c.show();
            }
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a;
        },
        cache_offset: function(a) {
            var b = a.show().height() + parseInt(a.css("top"), 10);
            return a.hide(), b;
        },
        off: function() {
            a(this.scope).off(".fndtn.reveal");
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b) {
    "use strict";
    Foundation.libs.slider = {
        name: "slider",
        version: "5.4.7",
        settings: {
            start: 0,
            end: 100,
            step: 1,
            initial: null,
            display_selector: "",
            vertical: !1,
            on_change: function() {}
        },
        cache: {},
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle"), this.bindings(b, c), this.reflow();
        },
        events: function() {
            var c = this;
            a(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + c.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function(b) {
                c.cache.active || (b.preventDefault(), c.set_active_slider(a(b.target)));
            }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function(d) {
                if (c.cache.active) if (d.preventDefault(), a.data(c.cache.active[0], "settings").vertical) {
                    var e = 0;
                    d.pageY || (e = b.scrollY), c.calculate_position(c.cache.active, (d.pageY || d.originalEvent.clientY || d.originalEvent.touches[0].clientY || d.currentPoint.y) + e);
                } else c.calculate_position(c.cache.active, d.pageX || d.originalEvent.clientX || d.originalEvent.touches[0].clientX || d.currentPoint.x);
            }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function() {
                c.remove_active_slider();
            }).on("change.fndtn.slider", function() {
                c.settings.on_change();
            }), c.S(b).on("resize.fndtn.slider", c.throttle(function() {
                c.reflow();
            }, 300));
        },
        set_active_slider: function(a) {
            this.cache.active = a;
        },
        remove_active_slider: function() {
            this.cache.active = null;
        },
        calculate_position: function(b, c) {
            var d = this, e = a.data(b[0], "settings"), f = (a.data(b[0], "handle_l"), a.data(b[0], "handle_o"), 
            a.data(b[0], "bar_l")), g = a.data(b[0], "bar_o");
            requestAnimationFrame(function() {
                var a;
                a = Foundation.rtl && !e.vertical ? d.limit_to((g + f - c) / f, 0, 1) : d.limit_to((c - g) / f, 0, 1), 
                a = e.vertical ? 1 - a : a;
                var h = d.normalized_value(a, e.start, e.end, e.step);
                d.set_ui(b, h);
            });
        },
        set_ui: function(b, c) {
            var d = a.data(b[0], "settings"), e = a.data(b[0], "handle_l"), f = a.data(b[0], "bar_l"), g = this.normalized_percentage(c, d.start, d.end), h = g * (f - e) - 1, i = 100 * g;
            Foundation.rtl && !d.vertical && (h = -h), h = d.vertical ? -h + f - e + 1 : h, 
            this.set_translate(b, h, d.vertical), d.vertical ? b.siblings(".range-slider-active-segment").css("height", i + "%") : b.siblings(".range-slider-active-segment").css("width", i + "%"), 
            b.parent().attr(this.attr_name(), c).trigger("change").trigger("change.fndtn.slider"), 
            b.parent().children("input[type=hidden]").val(c), b[0].hasAttribute("aria-valuemin") || b.attr({
                "aria-valuemin": d.start,
                "aria-valuemax": d.end
            }), b.attr("aria-valuenow", c), "" != d.display_selector && a(d.display_selector).each(function() {
                this.hasOwnProperty("value") ? a(this).val(c) : a(this).text(c);
            });
        },
        normalized_percentage: function(a, b, c) {
            return Math.min(1, (a - b) / (c - b));
        },
        normalized_value: function(a, b, c, d) {
            var e = c - b, f = a * e, g = (f - f % d) / d, h = f % d, i = h >= .5 * d ? d : 0;
            return g * d + i + b;
        },
        set_translate: function(b, c, d) {
            d ? a(b).css("-webkit-transform", "translateY(" + c + "px)").css("-moz-transform", "translateY(" + c + "px)").css("-ms-transform", "translateY(" + c + "px)").css("-o-transform", "translateY(" + c + "px)").css("transform", "translateY(" + c + "px)") : a(b).css("-webkit-transform", "translateX(" + c + "px)").css("-moz-transform", "translateX(" + c + "px)").css("-ms-transform", "translateX(" + c + "px)").css("-o-transform", "translateX(" + c + "px)").css("transform", "translateX(" + c + "px)");
        },
        limit_to: function(a, b, c) {
            return Math.min(Math.max(a, b), c);
        },
        initialize_settings: function(b) {
            var c = a.extend({}, this.settings, this.data_options(a(b).parent()));
            c.vertical ? (a.data(b, "bar_o", a(b).parent().offset().top), a.data(b, "bar_l", a(b).parent().outerHeight()), 
            a.data(b, "handle_o", a(b).offset().top), a.data(b, "handle_l", a(b).outerHeight())) : (a.data(b, "bar_o", a(b).parent().offset().left), 
            a.data(b, "bar_l", a(b).parent().outerWidth()), a.data(b, "handle_o", a(b).offset().left), 
            a.data(b, "handle_l", a(b).outerWidth())), a.data(b, "bar", a(b).parent()), a.data(b, "settings", c);
        },
        set_initial_position: function(b) {
            var c = a.data(b.children(".range-slider-handle")[0], "settings"), d = c.initial ? c.initial : Math.floor(.5 * (c.end - c.start) / c.step) * c.step + c.start, e = b.children(".range-slider-handle");
            this.set_ui(e, d);
        },
        set_value: function(b) {
            var c = this;
            a("[" + c.attr_name() + "]", this.scope).each(function() {
                a(this).attr(c.attr_name(), b);
            }), a(this.scope).attr(c.attr_name()) && a(this.scope).attr(c.attr_name(), b), c.reflow();
        },
        reflow: function() {
            var b = this;
            b.S("[" + this.attr_name() + "]").each(function() {
                var c = a(this).children(".range-slider-handle")[0], d = a(this).attr(b.attr_name());
                b.initialize_settings(c), d ? b.set_ui(a(c), parseFloat(d)) : b.set_initial_position(a(this));
            });
        }
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    "use strict";
    Foundation.libs.tab = {
        name: "tab",
        version: "5.4.7",
        settings: {
            active_class: "active",
            callback: function() {},
            deep_linking: !1,
            scroll_to_content: !0,
            is_hover: !1
        },
        default_tab_hashes: [],
        init: function(a, b, c) {
            var d = this, e = this.S;
            this.bindings(b, c), this.handle_location_hash_change(), e("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
                d.default_tab_hashes.push(this.hash);
            });
        },
        events: function() {
            var a = this, c = this.S, d = function(b) {
                var d = c(this).closest("[" + a.attr_name() + "]").data(a.attr_name(!0) + "-init");
                (!d.is_hover || Modernizr.touch) && (b.preventDefault(), b.stopPropagation(), a.toggle_active_tab(c(this).parent()));
            };
            c(this.scope).off(".tab").on("focus.fndtn.tab", "[" + this.attr_name() + "] > * > a", d).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", d).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function() {
                var b = c(this).closest("[" + a.attr_name() + "]").data(a.attr_name(!0) + "-init");
                b.is_hover && a.toggle_active_tab(c(this).parent());
            }), c(b).on("hashchange.fndtn.tab", function(b) {
                b.preventDefault(), a.handle_location_hash_change();
            });
        },
        handle_location_hash_change: function() {
            var b = this, c = this.S;
            c("[" + this.attr_name() + "]", this.scope).each(function() {
                var e = c(this).data(b.attr_name(!0) + "-init");
                if (e.deep_linking) {
                    var f;
                    if (f = e.scroll_to_content ? b.scope.location.hash : b.scope.location.hash.replace("fndtn-", ""), 
                    "" != f) {
                        var g = c(f);
                        if (g.hasClass("content") && g.parent().hasClass("tabs-content")) b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=" + f + "]").parent()); else {
                            var h = g.closest(".content").attr("id");
                            h != d && b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=#" + h + "]").parent(), f);
                        }
                    } else for (var i = 0; i < b.default_tab_hashes.length; i++) b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=" + b.default_tab_hashes[i] + "]").parent());
                }
            });
        },
        toggle_active_tab: function(e, f) {
            var g = this.S, h = e.closest("[" + this.attr_name() + "]"), i = e.find("a"), j = e.children("a").first(), k = "#" + j.attr("href").split("#")[1], l = g(k), m = e.siblings(), n = h.data(this.attr_name(!0) + "-init"), o = function(b) {
                var d, e = a(this), f = a(this).parents("li").prev().children('[role="tab"]'), g = a(this).parents("li").next().children('[role="tab"]');
                switch (b.keyCode) {
                  case 37:
                    d = f;
                    break;

                  case 39:
                    d = g;
                    break;

                  default:
                    d = !1;
                }
                d.length && (e.attr({
                    tabindex: "-1",
                    "aria-selected": null
                }), d.attr({
                    tabindex: "0",
                    "aria-selected": !0
                }).focus()), a('[role="tabpanel"]').attr("aria-hidden", "true"), a("#" + a(c.activeElement).attr("href").substring(1)).attr("aria-hidden", null);
            };
            g(this).data(this.data_attr("tab-content")) && (k = "#" + g(this).data(this.data_attr("tab-content")).split("#")[1], 
            l = g(k)), n.deep_linking && (n.scroll_to_content ? (b.location.hash = f || k, f == d || f == k ? e.parent()[0].scrollIntoView() : g(k)[0].scrollIntoView()) : b.location.hash = f != d ? "fndtn-" + f.replace("#", "") : "fndtn-" + k.replace("#", "")), 
            e.addClass(n.active_class).triggerHandler("opened"), i.attr({
                "aria-selected": "true",
                tabindex: 0
            }), m.removeClass(n.active_class), m.find("a").attr({
                "aria-selected": "false",
                tabindex: -1
            }), l.siblings().removeClass(n.active_class).attr({
                "aria-hidden": "true",
                tabindex: -1
            }), l.addClass(n.active_class).attr("aria-hidden", "false").removeAttr("tabindex"), 
            n.callback(e), l.triggerHandler("toggled", [ e ]), h.triggerHandler("toggled", [ l ]), 
            i.off("keydown").on("keydown", o);
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a;
        },
        off: function() {},
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b) {
    "use strict";
    Foundation.libs.tooltip = {
        name: "tooltip",
        version: "5.4.7",
        settings: {
            additional_inheritable_classes: [],
            tooltip_class: ".tooltip",
            append_to: "body",
            touch_close_text: "Tap To Close",
            disable_for_touch: !1,
            hover_delay: 200,
            show_on: "all",
            tip_template: function(a, b) {
                return '<span data-selector="' + a + '" id="' + a + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + b + '<span class="nub"></span></span>';
            }
        },
        cache: {},
        init: function(a, b, c) {
            Foundation.inherit(this, "random_str"), this.bindings(b, c);
        },
        should_show: function(b) {
            var c = a.extend({}, this.settings, this.data_options(b));
            return "all" === c.show_on ? !0 : this.small() && "small" === c.show_on ? !0 : this.medium() && "medium" === c.show_on ? !0 : this.large() && "large" === c.show_on ? !0 : !1;
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches;
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches;
        },
        events: function(b) {
            var c = this, d = c.S;
            c.create(this.S(b)), a(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(b) {
                var e = d(this), f = a.extend({}, c.settings, c.data_options(e)), g = !1;
                if (Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && d(b.target).is("a")) return !1;
                if (/mouse/i.test(b.type) && c.ie_touch(b)) return !1;
                if (e.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && b.preventDefault(), 
                c.hide(e); else {
                    if (f.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type)) return;
                    !f.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && (b.preventDefault(), 
                    d(f.tooltip_class + ".open").hide(), g = !0), /enter|over/i.test(b.type) ? this.timer = setTimeout(function() {
                        c.showTip(e);
                    }.bind(this), c.settings.hover_delay) : "mouseout" === b.type || "mouseleave" === b.type ? (clearTimeout(this.timer), 
                    c.hide(e)) : c.showTip(e);
                }
            }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(b) {
                return /mouse/i.test(b.type) && c.ie_touch(b) ? !1 : void (("touch" != a(this).data("tooltip-open-event-type") || "mouseleave" != b.type) && ("mouse" == a(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(b.type) ? c.convert_to_touch(a(this)) : c.hide(a(this))));
            }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function() {
                c.hide(d(this));
            });
        },
        ie_touch: function() {
            return !1;
        },
        showTip: function(a) {
            var b = this.getTip(a);
            return this.should_show(a, b) ? this.show(a) : void 0;
        },
        getTip: function(b) {
            var c = this.selector(b), d = a.extend({}, this.settings, this.data_options(b)), e = null;
            return c && (e = this.S('span[data-selector="' + c + '"]' + d.tooltip_class)), "object" == typeof e ? e : !1;
        },
        selector: function(a) {
            var b = a.attr("id"), c = a.attr(this.attr_name()) || a.attr("data-selector");
            return (b && b.length < 1 || !b) && "string" != typeof c && (c = this.random_str(6), 
            a.attr("data-selector", c).attr("aria-describedby", c)), b && b.length > 0 ? b : c;
        },
        create: function(c) {
            var d = this, e = a.extend({}, this.settings, this.data_options(c)), f = this.settings.tip_template;
            "string" == typeof e.tip_template && b.hasOwnProperty(e.tip_template) && (f = b[e.tip_template]);
            var g = a(f(this.selector(c), a("<div></div>").html(c.attr("title")).html())), h = this.inheritable_classes(c);
            g.addClass(h).appendTo(e.append_to), Modernizr.touch && (g.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"), 
            g.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function() {
                d.hide(c);
            })), c.removeAttr("title").attr("title", "");
        },
        reposition: function(b, c, d) {
            var e, f, g, h, i;
            if (c.css("visibility", "hidden").show(), e = b.data("width"), f = c.children(".nub"), 
            g = f.outerHeight(), h = f.outerHeight(), c.css(this.small() ? {
                width: "100%"
            } : {
                width: e ? e : "auto"
            }), i = function(a, b, c, d, e) {
                return a.css({
                    top: b ? b : "auto",
                    bottom: d ? d : "auto",
                    left: e ? e : "auto",
                    right: c ? c : "auto"
                }).end();
            }, i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", b.offset().left), 
            this.small()) i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", 12.5, a(this.scope).width()), 
            c.addClass("tip-override"), i(f, -g, "auto", "auto", b.offset().left); else {
                var j = b.offset().left;
                Foundation.rtl && (f.addClass("rtl"), j = b.offset().left + b.outerWidth() - c.outerWidth()), 
                i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", j), c.removeClass("tip-override"), 
                d && d.indexOf("tip-top") > -1 ? (Foundation.rtl && f.addClass("rtl"), i(c, b.offset().top - c.outerHeight(), "auto", "auto", j).removeClass("tip-override")) : d && d.indexOf("tip-left") > -1 ? (i(c, b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2, "auto", "auto", b.offset().left - c.outerWidth() - g).removeClass("tip-override"), 
                f.removeClass("rtl")) : d && d.indexOf("tip-right") > -1 && (i(c, b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2, "auto", "auto", b.offset().left + b.outerWidth() + g).removeClass("tip-override"), 
                f.removeClass("rtl"));
            }
            c.css("visibility", "visible").hide();
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches;
        },
        inheritable_classes: function(b) {
            var c = a.extend({}, this.settings, this.data_options(b)), d = [ "tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round" ].concat(c.additional_inheritable_classes), e = b.attr("class"), f = e ? a.map(e.split(" "), function(b) {
                return -1 !== a.inArray(b, d) ? b : void 0;
            }).join(" ") : "";
            return a.trim(f);
        },
        convert_to_touch: function(b) {
            var c = this, d = c.getTip(b), e = a.extend({}, c.settings, c.data_options(b));
            0 === d.find(".tap-to-close").length && (d.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"), 
            d.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function() {
                c.hide(b);
            })), b.data("tooltip-open-event-type", "touch");
        },
        show: function(a) {
            var b = this.getTip(a);
            "touch" == a.data("tooltip-open-event-type") && this.convert_to_touch(a), this.reposition(a, b, a.attr("class")), 
            a.addClass("open"), b.fadeIn(150);
        },
        hide: function(a) {
            var b = this.getTip(a);
            b.fadeOut(150, function() {
                b.find(".tap-to-close").remove(), b.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), 
                a.removeClass("open");
            });
        },
        off: function() {
            var b = this;
            this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function(c) {
                a("[" + b.attr_name() + "]").eq(c).attr("title", a(this).text());
            }).remove();
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b, c) {
    "use strict";
    Foundation.libs.topbar = {
        name: "topbar",
        version: "5.4.7",
        settings: {
            index: 0,
            sticky_class: "sticky",
            custom_back_text: !0,
            back_text: "Back",
            mobile_show_parent_link: !0,
            is_hover: !0,
            scrolltop: !0,
            sticky_on: "all"
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "add_custom_rule register_media throttle");
            var e = this;
            e.register_media("topbar", "foundation-mq-topbar"), this.bindings(c, d), e.S("[" + this.attr_name() + "]", this.scope).each(function() {
                {
                    var b = a(this), c = b.data(e.attr_name(!0) + "-init");
                    e.S("section, .top-bar-section", this);
                }
                b.data("index", 0);
                var d = b.parent();
                d.hasClass("fixed") || e.is_sticky(b, d, c) ? (e.settings.sticky_class = c.sticky_class, 
                e.settings.sticky_topbar = b, b.data("height", d.outerHeight()), b.data("stickyoffset", d.offset().top)) : b.data("height", b.outerHeight()), 
                c.assembled || e.assemble(b), c.is_hover ? e.S(".has-dropdown", b).addClass("not-click") : e.S(".has-dropdown", b).removeClass("not-click"), 
                e.add_custom_rule(".f-topbar-fixed { padding-top: " + b.data("height") + "px }"), 
                d.hasClass("fixed") && e.S("body").addClass("f-topbar-fixed");
            });
        },
        is_sticky: function(a, b, c) {
            var d = b.hasClass(c.sticky_class);
            return d && "all" === c.sticky_on ? !0 : d && this.small() && "small" === c.sticky_on ? matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : d && this.medium() && "medium" === c.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : d && this.large() && "large" === c.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && matchMedia(Foundation.media_queries.large).matches : !1;
        },
        toggle: function(c) {
            var d, e = this;
            d = c ? e.S(c).closest("[" + this.attr_name() + "]") : e.S("[" + this.attr_name() + "]");
            var f = d.data(this.attr_name(!0) + "-init"), g = e.S("section, .top-bar-section", d);
            e.breakpoint() && (e.rtl ? (g.css({
                right: "0%"
            }), a(">.name", g).css({
                right: "100%"
            })) : (g.css({
                left: "0%"
            }), a(">.name", g).css({
                left: "100%"
            })), e.S("li.moved", g).removeClass("moved"), d.data("index", 0), d.toggleClass("expanded").css("height", "")), 
            f.scrolltop ? d.hasClass("expanded") ? d.parent().hasClass("fixed") && (f.scrolltop ? (d.parent().removeClass("fixed"), 
            d.addClass("fixed"), e.S("body").removeClass("f-topbar-fixed"), b.scrollTo(0, 0)) : d.parent().removeClass("expanded")) : d.hasClass("fixed") && (d.parent().addClass("fixed"), 
            d.removeClass("fixed"), e.S("body").addClass("f-topbar-fixed")) : (e.is_sticky(d, d.parent(), f) && d.parent().addClass("fixed"), 
            d.parent().hasClass("fixed") && (d.hasClass("expanded") ? (d.addClass("fixed"), 
            d.parent().addClass("expanded"), e.S("body").addClass("f-topbar-fixed")) : (d.removeClass("fixed"), 
            d.parent().removeClass("expanded"), e.update_sticky_positioning())));
        },
        timer: null,
        events: function() {
            var c = this, d = this.S;
            d(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(a) {
                a.preventDefault(), c.toggle(this);
            }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function() {
                var b = a(this).closest("li");
                !c.breakpoint() || b.hasClass("back") || b.hasClass("has-dropdown") || c.toggle();
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(b) {
                var e = d(this), f = d(b.target), g = e.closest("[" + c.attr_name() + "]"), h = g.data(c.attr_name(!0) + "-init");
                return f.data("revealId") ? void c.toggle() : void (c.breakpoint() || (!h.is_hover || Modernizr.touch) && (b.stopImmediatePropagation(), 
                e.hasClass("hover") ? (e.removeClass("hover").find("li").removeClass("hover"), e.parents("li.hover").removeClass("hover")) : (e.addClass("hover"), 
                a(e).siblings().removeClass("hover"), "A" === f[0].nodeName && f.parent().hasClass("has-dropdown") && b.preventDefault())));
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(a) {
                if (c.breakpoint()) {
                    a.preventDefault();
                    var b = d(this), e = b.closest("[" + c.attr_name() + "]"), f = e.find("section, .top-bar-section"), g = (b.next(".dropdown").outerHeight(), 
                    b.closest("li"));
                    e.data("index", e.data("index") + 1), g.addClass("moved"), c.rtl ? (f.css({
                        right: -(100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        right: 100 * e.data("index") + "%"
                    })) : (f.css({
                        left: -(100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        left: 100 * e.data("index") + "%"
                    })), e.css("height", b.siblings("ul").outerHeight(!0) + e.data("height"));
                }
            }), d(b).off(".topbar").on("resize.fndtn.topbar", c.throttle(function() {
                c.resize.call(c);
            }, 50)).trigger("resize").trigger("resize.fndtn.topbar").load(function() {
                d(this).trigger("resize.fndtn.topbar");
            }), d("body").off(".topbar").on("click.fndtn.topbar", function(a) {
                var b = d(a.target).closest("li").closest("li.hover");
                b.length > 0 || d("[" + c.attr_name() + "] li.hover").removeClass("hover");
            }), d(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(a) {
                a.preventDefault();
                var b = d(this), e = b.closest("[" + c.attr_name() + "]"), f = e.find("section, .top-bar-section"), g = (e.data(c.attr_name(!0) + "-init"), 
                b.closest("li.moved")), h = g.parent();
                e.data("index", e.data("index") - 1), c.rtl ? (f.css({
                    right: -(100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    right: 100 * e.data("index") + "%"
                })) : (f.css({
                    left: -(100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    left: 100 * e.data("index") + "%"
                })), 0 === e.data("index") ? e.css("height", "") : e.css("height", h.outerHeight(!0) + e.data("height")), 
                setTimeout(function() {
                    g.removeClass("moved");
                }, 300);
            }), d(this.scope).find(".dropdown a").focus(function() {
                a(this).parents(".has-dropdown").addClass("hover");
            }).blur(function() {
                a(this).parents(".has-dropdown").removeClass("hover");
            });
        },
        resize: function() {
            var a = this;
            a.S("[" + this.attr_name() + "]").each(function() {
                var b, d = a.S(this), e = d.data(a.attr_name(!0) + "-init"), f = d.parent("." + a.settings.sticky_class);
                if (!a.breakpoint()) {
                    var g = d.hasClass("expanded");
                    d.css("height", "").removeClass("expanded").find("li").removeClass("hover"), g && a.toggle(d);
                }
                a.is_sticky(d, f, e) && (f.hasClass("fixed") ? (f.removeClass("fixed"), b = f.offset().top, 
                a.S(c.body).hasClass("f-topbar-fixed") && (b -= d.data("height")), d.data("stickyoffset", b), 
                f.addClass("fixed")) : (b = f.offset().top, d.data("stickyoffset", b)));
            });
        },
        breakpoint: function() {
            return !matchMedia(Foundation.media_queries.topbar).matches;
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches;
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches;
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches;
        },
        assemble: function(b) {
            var c = this, d = b.data(this.attr_name(!0) + "-init"), e = c.S("section, .top-bar-section", b);
            e.detach(), c.S(".has-dropdown>a", e).each(function() {
                var b, e = c.S(this), f = e.siblings(".dropdown"), g = e.attr("href");
                f.find(".title.back").length || (b = a(1 == d.mobile_show_parent_link && g ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="' + g + '">' + e.html() + "</a></li>" : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'), 
                a("h5>a", b).html(1 == d.custom_back_text ? d.back_text : "&laquo; " + e.html()), 
                f.prepend(b));
            }), e.appendTo(b), this.sticky(), this.assembled(b);
        },
        assembled: function(b) {
            b.data(this.attr_name(!0), a.extend({}, b.data(this.attr_name(!0)), {
                assembled: !0
            }));
        },
        height: function(b) {
            var c = 0, d = this;
            return a("> li", b).each(function() {
                c += d.S(this).outerHeight(!0);
            }), c;
        },
        sticky: function() {
            var a = this;
            this.S(b).on("scroll", function() {
                a.update_sticky_positioning();
            });
        },
        update_sticky_positioning: function() {
            var a = "." + this.settings.sticky_class, c = this.S(b), d = this;
            if (d.settings.sticky_topbar && d.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                var e = this.settings.sticky_topbar.data("stickyoffset");
                d.S(a).hasClass("expanded") || (c.scrollTop() > e ? d.S(a).hasClass("fixed") || (d.S(a).addClass("fixed"), 
                d.S("body").addClass("f-topbar-fixed")) : c.scrollTop() <= e && d.S(a).hasClass("fixed") && (d.S(a).removeClass("fixed"), 
                d.S("body").removeClass("f-topbar-fixed")));
            }
        },
        off: function() {
            this.S(this.scope).off(".fndtn.topbar"), this.S(b).off(".fndtn.topbar");
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b, c) {
    "use strict";
    Foundation.libs.topbar = {
        name: "topbar",
        version: "5.4.7",
        settings: {
            index: 0,
            sticky_class: "sticky",
            custom_back_text: !0,
            back_text: "Back",
            mobile_show_parent_link: !0,
            is_hover: !0,
            scrolltop: !0,
            sticky_on: "all"
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "add_custom_rule register_media throttle");
            var e = this;
            e.register_media("topbar", "foundation-mq-topbar"), this.bindings(c, d), e.S("[" + this.attr_name() + "]", this.scope).each(function() {
                {
                    var b = a(this), c = b.data(e.attr_name(!0) + "-init");
                    e.S("section, .top-bar-section", this);
                }
                b.data("index", 0);
                var d = b.parent();
                d.hasClass("fixed") || e.is_sticky(b, d, c) ? (e.settings.sticky_class = c.sticky_class, 
                e.settings.sticky_topbar = b, b.data("height", d.outerHeight()), b.data("stickyoffset", d.offset().top)) : b.data("height", b.outerHeight()), 
                c.assembled || e.assemble(b), c.is_hover ? e.S(".has-dropdown", b).addClass("not-click") : e.S(".has-dropdown", b).removeClass("not-click"), 
                e.add_custom_rule(".f-topbar-fixed { padding-top: " + b.data("height") + "px }"), 
                d.hasClass("fixed") && e.S("body").addClass("f-topbar-fixed");
            });
        },
        is_sticky: function(a, b, c) {
            var d = b.hasClass(c.sticky_class);
            return d && "all" === c.sticky_on ? !0 : d && this.small() && "small" === c.sticky_on ? matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : d && this.medium() && "medium" === c.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : d && this.large() && "large" === c.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && matchMedia(Foundation.media_queries.large).matches : !1;
        },
        toggle: function(c) {
            var d, e = this;
            d = c ? e.S(c).closest("[" + this.attr_name() + "]") : e.S("[" + this.attr_name() + "]");
            var f = d.data(this.attr_name(!0) + "-init"), g = e.S("section, .top-bar-section", d);
            e.breakpoint() && (e.rtl ? (g.css({
                right: "0%"
            }), a(">.name", g).css({
                right: "100%"
            })) : (g.css({
                left: "0%"
            }), a(">.name", g).css({
                left: "100%"
            })), e.S("li.moved", g).removeClass("moved"), d.data("index", 0), d.toggleClass("expanded").css("height", "")), 
            f.scrolltop ? d.hasClass("expanded") ? d.parent().hasClass("fixed") && (f.scrolltop ? (d.parent().removeClass("fixed"), 
            d.addClass("fixed"), e.S("body").removeClass("f-topbar-fixed"), b.scrollTo(0, 0)) : d.parent().removeClass("expanded")) : d.hasClass("fixed") && (d.parent().addClass("fixed"), 
            d.removeClass("fixed"), e.S("body").addClass("f-topbar-fixed")) : (e.is_sticky(d, d.parent(), f) && d.parent().addClass("fixed"), 
            d.parent().hasClass("fixed") && (d.hasClass("expanded") ? (d.addClass("fixed"), 
            d.parent().addClass("expanded"), e.S("body").addClass("f-topbar-fixed")) : (d.removeClass("fixed"), 
            d.parent().removeClass("expanded"), e.update_sticky_positioning())));
        },
        timer: null,
        events: function() {
            var c = this, d = this.S;
            d(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(a) {
                a.preventDefault(), c.toggle(this);
            }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function() {
                var b = a(this).closest("li");
                !c.breakpoint() || b.hasClass("back") || b.hasClass("has-dropdown") || c.toggle();
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(b) {
                var e = d(this), f = d(b.target), g = e.closest("[" + c.attr_name() + "]"), h = g.data(c.attr_name(!0) + "-init");
                return f.data("revealId") ? void c.toggle() : void (c.breakpoint() || (!h.is_hover || Modernizr.touch) && (b.stopImmediatePropagation(), 
                e.hasClass("hover") ? (e.removeClass("hover").find("li").removeClass("hover"), e.parents("li.hover").removeClass("hover")) : (e.addClass("hover"), 
                a(e).siblings().removeClass("hover"), "A" === f[0].nodeName && f.parent().hasClass("has-dropdown") && b.preventDefault())));
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(a) {
                if (c.breakpoint()) {
                    a.preventDefault();
                    var b = d(this), e = b.closest("[" + c.attr_name() + "]"), f = e.find("section, .top-bar-section"), g = (b.next(".dropdown").outerHeight(), 
                    b.closest("li"));
                    e.data("index", e.data("index") + 1), g.addClass("moved"), c.rtl ? (f.css({
                        right: -(100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        right: 100 * e.data("index") + "%"
                    })) : (f.css({
                        left: -(100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        left: 100 * e.data("index") + "%"
                    })), e.css("height", b.siblings("ul").outerHeight(!0) + e.data("height"));
                }
            }), d(b).off(".topbar").on("resize.fndtn.topbar", c.throttle(function() {
                c.resize.call(c);
            }, 50)).trigger("resize").trigger("resize.fndtn.topbar").load(function() {
                d(this).trigger("resize.fndtn.topbar");
            }), d("body").off(".topbar").on("click.fndtn.topbar", function(a) {
                var b = d(a.target).closest("li").closest("li.hover");
                b.length > 0 || d("[" + c.attr_name() + "] li.hover").removeClass("hover");
            }), d(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(a) {
                a.preventDefault();
                var b = d(this), e = b.closest("[" + c.attr_name() + "]"), f = e.find("section, .top-bar-section"), g = (e.data(c.attr_name(!0) + "-init"), 
                b.closest("li.moved")), h = g.parent();
                e.data("index", e.data("index") - 1), c.rtl ? (f.css({
                    right: -(100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    right: 100 * e.data("index") + "%"
                })) : (f.css({
                    left: -(100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    left: 100 * e.data("index") + "%"
                })), 0 === e.data("index") ? e.css("height", "") : e.css("height", h.outerHeight(!0) + e.data("height")), 
                setTimeout(function() {
                    g.removeClass("moved");
                }, 300);
            }), d(this.scope).find(".dropdown a").focus(function() {
                a(this).parents(".has-dropdown").addClass("hover");
            }).blur(function() {
                a(this).parents(".has-dropdown").removeClass("hover");
            });
        },
        resize: function() {
            var a = this;
            a.S("[" + this.attr_name() + "]").each(function() {
                var b, d = a.S(this), e = d.data(a.attr_name(!0) + "-init"), f = d.parent("." + a.settings.sticky_class);
                if (!a.breakpoint()) {
                    var g = d.hasClass("expanded");
                    d.css("height", "").removeClass("expanded").find("li").removeClass("hover"), g && a.toggle(d);
                }
                a.is_sticky(d, f, e) && (f.hasClass("fixed") ? (f.removeClass("fixed"), b = f.offset().top, 
                a.S(c.body).hasClass("f-topbar-fixed") && (b -= d.data("height")), d.data("stickyoffset", b), 
                f.addClass("fixed")) : (b = f.offset().top, d.data("stickyoffset", b)));
            });
        },
        breakpoint: function() {
            return !matchMedia(Foundation.media_queries.topbar).matches;
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches;
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches;
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches;
        },
        assemble: function(b) {
            var c = this, d = b.data(this.attr_name(!0) + "-init"), e = c.S("section, .top-bar-section", b);
            e.detach(), c.S(".has-dropdown>a", e).each(function() {
                var b, e = c.S(this), f = e.siblings(".dropdown"), g = e.attr("href");
                f.find(".title.back").length || (b = a(1 == d.mobile_show_parent_link && g ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="' + g + '">' + e.html() + "</a></li>" : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'), 
                a("h5>a", b).html(1 == d.custom_back_text ? d.back_text : "&laquo; " + e.html()), 
                f.prepend(b));
            }), e.appendTo(b), this.sticky(), this.assembled(b);
        },
        assembled: function(b) {
            b.data(this.attr_name(!0), a.extend({}, b.data(this.attr_name(!0)), {
                assembled: !0
            }));
        },
        height: function(b) {
            var c = 0, d = this;
            return a("> li", b).each(function() {
                c += d.S(this).outerHeight(!0);
            }), c;
        },
        sticky: function() {
            var a = this;
            this.S(b).on("scroll", function() {
                a.update_sticky_positioning();
            });
        },
        update_sticky_positioning: function() {
            var a = "." + this.settings.sticky_class, c = this.S(b), d = this;
            if (d.settings.sticky_topbar && d.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                var e = this.settings.sticky_topbar.data("stickyoffset");
                d.S(a).hasClass("expanded") || (c.scrollTop() > e ? d.S(a).hasClass("fixed") || (d.S(a).addClass("fixed"), 
                d.S("body").addClass("f-topbar-fixed")) : c.scrollTop() <= e && d.S(a).hasClass("fixed") && (d.S(a).removeClass("fixed"), 
                d.S("body").removeClass("f-topbar-fixed")));
            }
        },
        off: function() {
            this.S(this.scope).off(".fndtn.topbar"), this.S(b).off(".fndtn.topbar");
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), !function(a) {
    "undefined" != typeof exports ? a(exports) : (window.hljs = a({}), "function" == typeof define && define.amd && define([], function() {
        return window.hljs;
    }));
}(function(a) {
    function b(a) {
        return a.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;");
    }
    function c(a) {
        return a.nodeName.toLowerCase();
    }
    function d(a, b) {
        var c = a && a.exec(b);
        return c && 0 == c.index;
    }
    function e(a) {
        var b = (a.className + " " + (a.parentNode ? a.parentNode.className : "")).split(/\s+/);
        return b = b.map(function(a) {
            return a.replace(/^lang(uage)?-/, "");
        }), b.filter(function(a) {
            return t(a) || /no(-?)highlight/.test(a);
        })[0];
    }
    function f(a, b) {
        var c = {};
        for (var d in a) c[d] = a[d];
        if (b) for (var d in b) c[d] = b[d];
        return c;
    }
    function g(a) {
        var b = [];
        return function d(a, e) {
            for (var f = a.firstChild; f; f = f.nextSibling) 3 == f.nodeType ? e += f.nodeValue.length : 1 == f.nodeType && (b.push({
                event: "start",
                offset: e,
                node: f
            }), e = d(f, e), c(f).match(/br|hr|img|input/) || b.push({
                event: "stop",
                offset: e,
                node: f
            }));
            return e;
        }(a, 0), b;
    }
    function h(a, d, e) {
        function f() {
            return a.length && d.length ? a[0].offset != d[0].offset ? a[0].offset < d[0].offset ? a : d : "start" == d[0].event ? a : d : a.length ? a : d;
        }
        function g(a) {
            function d(a) {
                return " " + a.nodeName + '="' + b(a.value) + '"';
            }
            k += "<" + c(a) + Array.prototype.map.call(a.attributes, d).join("") + ">";
        }
        function h(a) {
            k += "</" + c(a) + ">";
        }
        function i(a) {
            ("start" == a.event ? g : h)(a.node);
        }
        for (var j = 0, k = "", l = []; a.length || d.length; ) {
            var m = f();
            if (k += b(e.substr(j, m[0].offset - j)), j = m[0].offset, m == a) {
                l.reverse().forEach(h);
                do i(m.splice(0, 1)[0]), m = f(); while (m == a && m.length && m[0].offset == j);
                l.reverse().forEach(g);
            } else "start" == m[0].event ? l.push(m[0].node) : l.pop(), i(m.splice(0, 1)[0]);
        }
        return k + b(e.substr(j));
    }
    function i(a) {
        function b(a) {
            return a && a.source || a;
        }
        function c(c, d) {
            return RegExp(b(c), "m" + (a.cI ? "i" : "") + (d ? "g" : ""));
        }
        function d(e, g) {
            if (!e.compiled) {
                if (e.compiled = !0, e.k = e.k || e.bK, e.k) {
                    var h = {}, i = function(b, c) {
                        a.cI && (c = c.toLowerCase()), c.split(" ").forEach(function(a) {
                            var c = a.split("|");
                            h[c[0]] = [ b, c[1] ? Number(c[1]) : 1 ];
                        });
                    };
                    "string" == typeof e.k ? i("keyword", e.k) : Object.keys(e.k).forEach(function(a) {
                        i(a, e.k[a]);
                    }), e.k = h;
                }
                e.lR = c(e.l || /\b[A-Za-z0-9_]+\b/, !0), g && (e.bK && (e.b = "\\b(" + e.bK.split(" ").join("|") + ")\\b"), 
                e.b || (e.b = /\B|\b/), e.bR = c(e.b), e.e || e.eW || (e.e = /\B|\b/), e.e && (e.eR = c(e.e)), 
                e.tE = b(e.e) || "", e.eW && g.tE && (e.tE += (e.e ? "|" : "") + g.tE)), e.i && (e.iR = c(e.i)), 
                void 0 === e.r && (e.r = 1), e.c || (e.c = []);
                var j = [];
                e.c.forEach(function(a) {
                    a.v ? a.v.forEach(function(b) {
                        j.push(f(a, b));
                    }) : j.push("self" == a ? e : a);
                }), e.c = j, e.c.forEach(function(a) {
                    d(a, e);
                }), e.starts && d(e.starts, g);
                var k = e.c.map(function(a) {
                    return a.bK ? "\\.?(" + a.b + ")\\.?" : a.b;
                }).concat([ e.tE, e.i ]).map(b).filter(Boolean);
                e.t = k.length ? c(k.join("|"), !0) : {
                    exec: function() {
                        return null;
                    }
                };
            }
        }
        d(a);
    }
    function j(a, c, e, f) {
        function g(a, b) {
            for (var c = 0; c < b.c.length; c++) if (d(b.c[c].bR, a)) return b.c[c];
        }
        function h(a, b) {
            return d(a.eR, b) ? a : a.eW ? h(a.parent, b) : void 0;
        }
        function l(a, b) {
            return !e && d(b.iR, a);
        }
        function m(a, b) {
            var c = w.cI ? b[0].toLowerCase() : b[0];
            return a.k.hasOwnProperty(c) && a.k[c];
        }
        function n(a, b, c, d) {
            var e = d ? "" : u.classPrefix, f = '<span class="' + e, g = c ? "" : "</span>";
            return f += a + '">', f + b + g;
        }
        function o() {
            if (!x.k) return b(B);
            var a = "", c = 0;
            x.lR.lastIndex = 0;
            for (var d = x.lR.exec(B); d; ) {
                a += b(B.substr(c, d.index - c));
                var e = m(x, d);
                e ? (C += e[1], a += n(e[0], b(d[0]))) : a += b(d[0]), c = x.lR.lastIndex, d = x.lR.exec(B);
            }
            return a + b(B.substr(c));
        }
        function p() {
            if (x.sL && !v[x.sL]) return b(B);
            var a = x.sL ? j(x.sL, B, !0, y[x.sL]) : k(B);
            return x.r > 0 && (C += a.r), "continuous" == x.subLanguageMode && (y[x.sL] = a.top), 
            n(a.language, a.value, !1, !0);
        }
        function q() {
            return void 0 !== x.sL ? p() : o();
        }
        function r(a, c) {
            var d = a.cN ? n(a.cN, "", !0) : "";
            a.rB ? (z += d, B = "") : a.eB ? (z += b(c) + d, B = "") : (z += d, B = c), x = Object.create(a, {
                parent: {
                    value: x
                }
            });
        }
        function s(a, c) {
            if (B += a, void 0 === c) return z += q(), 0;
            var d = g(c, x);
            if (d) return z += q(), r(d, c), d.rB ? 0 : c.length;
            var e = h(x, c);
            if (e) {
                var f = x;
                f.rE || f.eE || (B += c), z += q();
                do x.cN && (z += "</span>"), C += x.r, x = x.parent; while (x != e.parent);
                return f.eE && (z += b(c)), B = "", e.starts && r(e.starts, ""), f.rE ? 0 : c.length;
            }
            if (l(c, x)) throw new Error('Illegal lexeme "' + c + '" for mode "' + (x.cN || "<unnamed>") + '"');
            return B += c, c.length || 1;
        }
        var w = t(a);
        if (!w) throw new Error('Unknown language: "' + a + '"');
        i(w);
        for (var x = f || w, y = {}, z = "", A = x; A != w; A = A.parent) A.cN && (z = n(A.cN, "", !0) + z);
        var B = "", C = 0;
        try {
            for (var D, E, F = 0; x.t.lastIndex = F, D = x.t.exec(c), D; ) E = s(c.substr(F, D.index - F), D[0]), 
            F = D.index + E;
            s(c.substr(F));
            for (var A = x; A.parent; A = A.parent) A.cN && (z += "</span>");
            return {
                r: C,
                value: z,
                language: a,
                top: x
            };
        } catch (G) {
            if (-1 != G.message.indexOf("Illegal")) return {
                r: 0,
                value: b(c)
            };
            throw G;
        }
    }
    function k(a, c) {
        c = c || u.languages || Object.keys(v);
        var d = {
            r: 0,
            value: b(a)
        }, e = d;
        return c.forEach(function(b) {
            if (t(b)) {
                var c = j(b, a, !1);
                c.language = b, c.r > e.r && (e = c), c.r > d.r && (e = d, d = c);
            }
        }), e.language && (d.second_best = e), d;
    }
    function l(a) {
        return u.tabReplace && (a = a.replace(/^((<[^>]+>|\t)+)/gm, function(a, b) {
            return b.replace(/\t/g, u.tabReplace);
        })), u.useBR && (a = a.replace(/\n/g, "<br>")), a;
    }
    function m(a, b, c) {
        var d = b ? w[b] : c, e = [ a.trim() ];
        return a.match(/(\s|^)hljs(\s|$)/) || e.push("hljs"), d && e.push(d), e.join(" ").trim();
    }
    function n(a) {
        var b = e(a);
        if (!/no(-?)highlight/.test(b)) {
            var c;
            u.useBR ? (c = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), 
            c.innerHTML = a.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : c = a;
            var d = c.textContent, f = b ? j(b, d, !0) : k(d), i = g(c);
            if (i.length) {
                var n = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                n.innerHTML = f.value, f.value = h(i, g(n), d);
            }
            f.value = l(f.value), a.innerHTML = f.value, a.className = m(a.className, b, f.language), 
            a.result = {
                language: f.language,
                re: f.r
            }, f.second_best && (a.second_best = {
                language: f.second_best.language,
                re: f.second_best.r
            });
        }
    }
    function o(a) {
        u = f(u, a);
    }
    function p() {
        if (!p.called) {
            p.called = !0;
            var a = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(a, n);
        }
    }
    function q() {
        addEventListener("DOMContentLoaded", p, !1), addEventListener("load", p, !1);
    }
    function r(b, c) {
        var d = v[b] = c(a);
        d.aliases && d.aliases.forEach(function(a) {
            w[a] = b;
        });
    }
    function s() {
        return Object.keys(v);
    }
    function t(a) {
        return v[a] || v[w[a]];
    }
    var u = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: void 0
    }, v = {}, w = {};
    return a.highlight = j, a.highlightAuto = k, a.fixMarkup = l, a.highlightBlock = n, 
    a.configure = o, a.initHighlighting = p, a.initHighlightingOnLoad = q, a.registerLanguage = r, 
    a.listLanguages = s, a.getLanguage = t, a.inherit = f, a.IR = "[a-zA-Z][a-zA-Z0-9_]*", 
    a.UIR = "[a-zA-Z_][a-zA-Z0-9_]*", a.NR = "\\b\\d+(\\.\\d+)?", a.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", 
    a.BNR = "\\b(0b[01]+)", a.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", 
    a.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, a.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [ a.BE ]
    }, a.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [ a.BE ]
    }, a.PWM = {
        b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
    }, a.CLCM = {
        cN: "comment",
        b: "//",
        e: "$",
        c: [ a.PWM ]
    }, a.CBCM = {
        cN: "comment",
        b: "/\\*",
        e: "\\*/",
        c: [ a.PWM ]
    }, a.HCM = {
        cN: "comment",
        b: "#",
        e: "$",
        c: [ a.PWM ]
    }, a.NM = {
        cN: "number",
        b: a.NR,
        r: 0
    }, a.CNM = {
        cN: "number",
        b: a.CNR,
        r: 0
    }, a.BNM = {
        cN: "number",
        b: a.BNR,
        r: 0
    }, a.CSSNM = {
        cN: "number",
        b: a.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, a.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [ a.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [ a.BE ]
        } ]
    }, a.TM = {
        cN: "title",
        b: a.IR,
        r: 0
    }, a.UTM = {
        cN: "title",
        b: a.UIR,
        r: 0
    }, a;
}), hljs.registerLanguage("1c", function(a) {
    var b = "[a-zA-Zа-яА-Я][a-zA-Z0-9_а-яА-Я]*", c = "возврат дата для если и или иначе иначеесли исключение конецесли конецпопытки конецпроцедуры конецфункции конеццикла константа не перейти перем перечисление по пока попытка прервать продолжить процедура строка тогда фс функция цикл число экспорт", d = "ansitooem oemtoansi ввестивидсубконто ввестидату ввестизначение ввестиперечисление ввестипериод ввестиплансчетов ввестистроку ввестичисло вопрос восстановитьзначение врег выбранныйплансчетов вызватьисключение датагод датамесяц датачисло добавитьмесяц завершитьработусистемы заголовоксистемы записьжурналарегистрации запуститьприложение зафиксироватьтранзакцию значениевстроку значениевстрокувнутр значениевфайл значениеизстроки значениеизстрокивнутр значениеизфайла имякомпьютера имяпользователя каталогвременныхфайлов каталогиб каталогпользователя каталогпрограммы кодсимв командасистемы конгода конецпериодаби конецрассчитанногопериодаби конецстандартногоинтервала конквартала конмесяца коннедели лев лог лог10 макс максимальноеколичествосубконто мин монопольныйрежим названиеинтерфейса названиенабораправ назначитьвид назначитьсчет найти найтипомеченныенаудаление найтиссылки началопериодаби началостандартногоинтервала начатьтранзакцию начгода начквартала начмесяца начнедели номерднягода номерднянедели номернеделигода нрег обработкаожидания окр описаниеошибки основнойжурналрасчетов основнойплансчетов основнойязык открытьформу открытьформумодально отменитьтранзакцию очиститьокносообщений периодстр полноеимяпользователя получитьвремята получитьдатута получитьдокументта получитьзначенияотбора получитьпозициюта получитьпустоезначение получитьта прав праводоступа предупреждение префиксавтонумерации пустаястрока пустоезначение рабочаядаттьпустоезначение рабочаядата разделительстраниц разделительстрок разм разобратьпозициюдокумента рассчитатьрегистрына рассчитатьрегистрыпо сигнал симв символтабуляции создатьобъект сокрл сокрлп сокрп сообщить состояние сохранитьзначение сред статусвозврата стрдлина стрзаменить стрколичествострок стрполучитьстроку  стрчисловхождений сформироватьпозициюдокумента счетпокоду текущаядата текущеевремя типзначения типзначениястр удалитьобъекты установитьтана установитьтапо фиксшаблон формат цел шаблон", e = {
        cN: "dquote",
        b: '""'
    }, f = {
        cN: "string",
        b: '"',
        e: '"|$',
        c: [ e ]
    }, g = {
        cN: "string",
        b: "\\|",
        e: '"|$',
        c: [ e ]
    };
    return {
        cI: !0,
        l: b,
        k: {
            keyword: c,
            built_in: d
        },
        c: [ a.CLCM, a.NM, f, g, {
            cN: "function",
            b: "(процедура|функция)",
            e: "$",
            l: b,
            k: "процедура функция",
            c: [ a.inherit(a.TM, {
                b: b
            }), {
                cN: "tail",
                eW: !0,
                c: [ {
                    cN: "params",
                    b: "\\(",
                    e: "\\)",
                    l: b,
                    k: "знач",
                    c: [ f, g ]
                }, {
                    cN: "export",
                    b: "экспорт",
                    eW: !0,
                    l: b,
                    k: "экспорт",
                    c: [ a.CLCM ]
                } ]
            }, a.CLCM ]
        }, {
            cN: "preprocessor",
            b: "#",
            e: "$"
        }, {
            cN: "date",
            b: "'\\d{2}\\.\\d{2}\\.(\\d{2}|\\d{4})'"
        } ]
    };
}), hljs.registerLanguage("actionscript", function(a) {
    var b = "[a-zA-Z_$][a-zA-Z0-9_$]*", c = "([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)", d = {
        cN: "rest_arg",
        b: "[.]{3}",
        e: b,
        r: 10
    };
    return {
        aliases: [ "as" ],
        k: {
            keyword: "as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with",
            literal: "true false null undefined"
        },
        c: [ a.ASM, a.QSM, a.CLCM, a.CBCM, a.CNM, {
            cN: "package",
            bK: "package",
            e: "{",
            c: [ a.TM ]
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            c: [ {
                bK: "extends implements"
            }, a.TM ]
        }, {
            cN: "preprocessor",
            bK: "import include",
            e: ";"
        }, {
            cN: "function",
            bK: "function",
            e: "[{;]",
            eE: !0,
            i: "\\S",
            c: [ a.TM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: [ a.ASM, a.QSM, a.CLCM, a.CBCM, d ]
            }, {
                cN: "type",
                b: ":",
                e: c,
                r: 10
            } ]
        } ]
    };
}), hljs.registerLanguage("apache", function(a) {
    var b = {
        cN: "number",
        b: "[\\$%]\\d+"
    };
    return {
        aliases: [ "apacheconf" ],
        cI: !0,
        c: [ a.HCM, {
            cN: "tag",
            b: "</?",
            e: ">"
        }, {
            cN: "keyword",
            b: /\w+/,
            r: 0,
            k: {
                common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
            },
            starts: {
                e: /$/,
                r: 0,
                k: {
                    literal: "on off all"
                },
                c: [ {
                    cN: "sqbracket",
                    b: "\\s\\[",
                    e: "\\]$"
                }, {
                    cN: "cbracket",
                    b: "[\\$%]\\{",
                    e: "\\}",
                    c: [ "self", b ]
                }, b, a.QSM ]
            }
        } ],
        i: /\S/
    };
}), hljs.registerLanguage("applescript", function(a) {
    var b = a.inherit(a.QSM, {
        i: ""
    }), c = {
        cN: "params",
        b: "\\(",
        e: "\\)",
        c: [ "self", a.CNM, b ]
    }, d = [ {
        cN: "comment",
        b: "--",
        e: "$"
    }, {
        cN: "comment",
        b: "\\(\\*",
        e: "\\*\\)",
        c: [ "self", {
            b: "--",
            e: "$"
        } ]
    }, a.HCM ];
    return {
        aliases: [ "osascript" ],
        k: {
            keyword: "about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",
            constant: "AppleScript false linefeed return pi quote result space tab true",
            type: "alias application boolean class constant date file integer list number real record string text",
            command: "activate beep count delay launch log offset read round run say summarize write",
            property: "character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"
        },
        c: [ b, a.CNM, {
            cN: "type",
            b: "\\bPOSIX file\\b"
        }, {
            cN: "command",
            b: "\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b"
        }, {
            cN: "constant",
            b: "\\b(text item delimiters|current application|missing value)\\b"
        }, {
            cN: "keyword",
            b: "\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference))\\b"
        }, {
            cN: "property",
            b: "\\b(POSIX path|(date|time) string|quoted form)\\b"
        }, {
            cN: "function_start",
            bK: "on",
            i: "[${=;\\n]",
            c: [ a.UTM, c ]
        } ].concat(d),
        i: "//|->|=>"
    };
}), hljs.registerLanguage("xml", function() {
    var a = "[A-Za-z0-9\\._:-]+", b = {
        b: /<\?(php)?(?!\w)/,
        e: /\?>/,
        sL: "php",
        subLanguageMode: "continuous"
    }, c = {
        eW: !0,
        i: /</,
        r: 0,
        c: [ b, {
            cN: "attribute",
            b: a,
            r: 0
        }, {
            b: "=",
            r: 0,
            c: [ {
                cN: "value",
                c: [ b ],
                v: [ {
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }, {
                    b: /[^\s\/>]+/
                } ]
            } ]
        } ]
    };
    return {
        aliases: [ "html", "xhtml", "rss", "atom", "xsl", "plist" ],
        cI: !0,
        c: [ {
            cN: "doctype",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [ {
                b: "\\[",
                e: "\\]"
            } ]
        }, {
            cN: "comment",
            b: "<!--",
            e: "-->",
            r: 10
        }, {
            cN: "cdata",
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {
                title: "style"
            },
            c: [ c ],
            starts: {
                e: "</style>",
                rE: !0,
                sL: "css"
            }
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {
                title: "script"
            },
            c: [ c ],
            starts: {
                e: "</script>",
                rE: !0,
                sL: "javascript"
            }
        }, b, {
            cN: "pi",
            b: /<\?\w+/,
            e: /\?>/,
            r: 10
        }, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [ {
                cN: "title",
                b: /[^ \/><\n\t]+/,
                r: 0
            }, c ]
        } ]
    };
}), hljs.registerLanguage("asciidoc", function() {
    return {
        c: [ {
            cN: "comment",
            b: "^/{4,}\\n",
            e: "\\n/{4,}$",
            r: 10
        }, {
            cN: "comment",
            b: "^//",
            e: "$",
            r: 0
        }, {
            cN: "title",
            b: "^\\.\\w.*$"
        }, {
            b: "^[=\\*]{4,}\\n",
            e: "\\n^[=\\*]{4,}$",
            r: 10
        }, {
            cN: "header",
            b: "^(={1,5}) .+?( \\1)?$",
            r: 10
        }, {
            cN: "header",
            b: "^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$",
            r: 10
        }, {
            cN: "attribute",
            b: "^:.+?:",
            e: "\\s",
            eE: !0,
            r: 10
        }, {
            cN: "attribute",
            b: "^\\[.+?\\]$",
            r: 0
        }, {
            cN: "blockquote",
            b: "^_{4,}\\n",
            e: "\\n_{4,}$",
            r: 10
        }, {
            cN: "code",
            b: "^[\\-\\.]{4,}\\n",
            e: "\\n[\\-\\.]{4,}$",
            r: 10
        }, {
            b: "^\\+{4,}\\n",
            e: "\\n\\+{4,}$",
            c: [ {
                b: "<",
                e: ">",
                sL: "xml",
                r: 0
            } ],
            r: 10
        }, {
            cN: "bullet",
            b: "^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+"
        }, {
            cN: "label",
            b: "^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",
            r: 10
        }, {
            cN: "strong",
            b: "\\B\\*(?![\\*\\s])",
            e: "(\\n{2}|\\*)",
            c: [ {
                b: "\\\\*\\w",
                r: 0
            } ]
        }, {
            cN: "emphasis",
            b: "\\B'(?!['\\s])",
            e: "(\\n{2}|')",
            c: [ {
                b: "\\\\'\\w",
                r: 0
            } ],
            r: 0
        }, {
            cN: "emphasis",
            b: "_(?![_\\s])",
            e: "(\\n{2}|_)",
            r: 0
        }, {
            cN: "smartquote",
            v: [ {
                b: "``.+?''"
            }, {
                b: "`.+?'"
            } ]
        }, {
            cN: "code",
            b: "(`.+?`|\\+.+?\\+)",
            r: 0
        }, {
            cN: "code",
            b: "^[ \\t]",
            e: "$",
            r: 0
        }, {
            cN: "horizontal_rule",
            b: "^'{3,}[ \\t]*$",
            r: 10
        }, {
            b: "(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]",
            rB: !0,
            c: [ {
                b: "(link|image:?):",
                r: 0
            }, {
                cN: "link_url",
                b: "\\w",
                e: "[^\\[]+",
                r: 0
            }, {
                cN: "link_label",
                b: "\\[",
                e: "\\]",
                eB: !0,
                eE: !0,
                r: 0
            } ],
            r: 10
        } ]
    };
}), hljs.registerLanguage("aspectj", function(a) {
    var b = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else extends implements break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws privileged aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization staticinitialization withincode target within execution getWithinTypeName handler thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents warning error soft precedence", c = "get set args call";
    return {
        k: b,
        i: /<\//,
        c: [ {
            cN: "javadoc",
            b: "/\\*\\*",
            e: "\\*/",
            r: 0,
            c: [ {
                cN: "javadoctag",
                b: "(^|\\s)@[A-Za-z]+"
            } ]
        }, a.CLCM, a.CBCM, a.ASM, a.QSM, {
            cN: "aspect",
            bK: "aspect",
            e: /[{;=]/,
            eE: !0,
            i: /[:;"\[\]]/,
            c: [ {
                bK: "extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton"
            }, a.UTM, {
                b: /\([^\)]*/,
                e: /[)]+/,
                k: b + " " + c,
                eE: !1
            } ]
        }, {
            cN: "class",
            bK: "class interface",
            e: /[{;=]/,
            eE: !0,
            r: 0,
            k: "class interface",
            i: /[:"\[\]]/,
            c: [ {
                bK: "extends implements"
            }, a.UTM ]
        }, {
            bK: "pointcut after before around throwing returning",
            e: /[)]/,
            eE: !1,
            i: /["\[\]]/,
            c: [ {
                b: a.UIR + "\\s*\\(",
                rB: !0,
                c: [ a.UTM ]
            } ]
        }, {
            b: /[:]/,
            rB: !0,
            e: /[{;]/,
            r: 0,
            eE: !1,
            k: b,
            i: /["\[\]]/,
            c: [ {
                b: a.UIR + "\\s*\\(",
                k: b + " " + c
            }, a.QSM ]
        }, {
            bK: "new throw",
            r: 0
        }, {
            cN: "function",
            b: /\w+ +\w+(\.)?\w+\s*\([^\)]*\)\s*((throws)[\w\s\,]+)?[\{\;]/,
            rB: !0,
            e: /[{;=]/,
            k: b,
            eE: !0,
            c: [ {
                b: a.UIR + "\\s*\\(",
                rB: !0,
                r: 0,
                c: [ a.UTM ]
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                r: 0,
                k: b,
                c: [ a.ASM, a.QSM, a.CNM, a.CBCM ]
            }, a.CLCM, a.CBCM ]
        }, a.CNM, {
            cN: "annotation",
            b: "@[A-Za-z]+"
        } ]
    };
}), hljs.registerLanguage("autohotkey", function(a) {
    var b = {
        cN: "escape",
        b: "`[\\s\\S]"
    }, c = {
        cN: "comment",
        b: ";",
        e: "$",
        r: 0
    }, d = [ {
        cN: "built_in",
        b: "A_[a-zA-Z0-9]+"
    }, {
        cN: "built_in",
        bK: "ComSpec Clipboard ClipboardAll ErrorLevel"
    } ];
    return {
        cI: !0,
        k: {
            keyword: "Break Continue Else Gosub If Loop Return While",
            literal: "A true false NOT AND OR"
        },
        c: d.concat([ b, a.inherit(a.QSM, {
            c: [ b ]
        }), c, {
            cN: "number",
            b: a.NR,
            r: 0
        }, {
            cN: "var_expand",
            b: "%",
            e: "%",
            i: "\\n",
            c: [ b ]
        }, {
            cN: "label",
            c: [ b ],
            v: [ {
                b: '^[^\\n";]+::(?!=)'
            }, {
                b: '^[^\\n";]+:(?!=)',
                r: 0
            } ]
        }, {
            b: ",\\s*,",
            r: 10
        } ])
    };
}), hljs.registerLanguage("avrasm", function(a) {
    return {
        cI: !0,
        l: "\\.?" + a.IR,
        k: {
            keyword: "adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub subi swap tst wdr",
            built_in: "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf",
            preprocessor: ".byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list .listmac .macro .nolist .org .set"
        },
        c: [ a.CBCM, {
            cN: "comment",
            b: ";",
            e: "$",
            r: 0
        }, a.CNM, a.BNM, {
            cN: "number",
            b: "\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)"
        }, a.QSM, {
            cN: "string",
            b: "'",
            e: "[^\\\\]'",
            i: "[^\\\\][^']"
        }, {
            cN: "label",
            b: "^[A-Za-z0-9_.$]+:"
        }, {
            cN: "preprocessor",
            b: "#",
            e: "$"
        }, {
            cN: "localvars",
            b: "@[0-9]+"
        } ]
    };
}), hljs.registerLanguage("axapta", function(a) {
    return {
        k: "false int abstract private char boolean static null if for true while long throw finally protected final return void enum else break new catch byte super case short default double public try this switch continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count order group by asc desc index hint like dispaly edit client server ttsbegin ttscommit str real date container anytype common div mod",
        c: [ a.CLCM, a.CBCM, a.ASM, a.QSM, a.CNM, {
            cN: "preprocessor",
            b: "#",
            e: "$"
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            i: ":",
            c: [ {
                bK: "extends implements"
            }, a.UTM ]
        } ]
    };
}), hljs.registerLanguage("bash", function(a) {
    var b = {
        cN: "variable",
        v: [ {
            b: /\$[\w\d#@][\w\d_]*/
        }, {
            b: /\$\{(.*?)\}/
        } ]
    }, c = {
        cN: "string",
        b: /"/,
        e: /"/,
        c: [ a.BE, b, {
            cN: "variable",
            b: /\$\(/,
            e: /\)/,
            c: [ a.BE ]
        } ]
    }, d = {
        cN: "string",
        b: /'/,
        e: /'/
    };
    return {
        aliases: [ "sh", "zsh" ],
        l: /-?[a-z\.]+/,
        k: {
            keyword: "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
            operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [ {
            cN: "shebang",
            b: /^#![^\n]+sh\s*$/,
            r: 10
        }, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [ a.inherit(a.TM, {
                b: /\w[\w\d_]*/
            }) ],
            r: 0
        }, a.HCM, a.NM, c, d, b ]
    };
}), hljs.registerLanguage("brainfuck", function() {
    var a = {
        cN: "literal",
        b: "[\\+\\-]",
        r: 0
    };
    return {
        aliases: [ "bf" ],
        c: [ {
            cN: "comment",
            b: "[^\\[\\]\\.,\\+\\-<> \r\n]",
            rE: !0,
            e: "[\\[\\]\\.,\\+\\-<> \r\n]",
            r: 0
        }, {
            cN: "title",
            b: "[\\[\\]]",
            r: 0
        }, {
            cN: "string",
            b: "[\\.,]",
            r: 0
        }, {
            b: /\+\+|\-\-/,
            rB: !0,
            c: [ a ]
        }, a ]
    };
}), hljs.registerLanguage("capnproto", function(a) {
    return {
        aliases: [ "capnp" ],
        k: {
            keyword: "struct enum interface union group import using const annotation extends in of on as with from fixed",
            built_in: "Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 Text Data AnyPointer AnyStruct Capability List",
            literal: "true false"
        },
        c: [ a.QSM, a.NM, a.HCM, {
            cN: "shebang",
            b: /@0x[\w\d]{16};/,
            i: /\n/
        }, {
            cN: "number",
            b: /@\d+\b/
        }, {
            cN: "class",
            bK: "struct enum",
            e: /\{/,
            i: /\n/,
            c: [ a.inherit(a.TM, {
                starts: {
                    eW: !0,
                    eE: !0
                }
            }) ]
        }, {
            cN: "class",
            bK: "interface",
            e: /\{/,
            i: /\n/,
            c: [ a.inherit(a.TM, {
                starts: {
                    eW: !0,
                    eE: !0
                }
            }) ]
        } ]
    };
}), hljs.registerLanguage("clojure", function(a) {
    var b = {
        built_in: "def cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"
    }, c = "a-zA-Z_\\-!.?+*=<>&#'", d = "[" + c + "][" + c + "0-9/;:]*", e = "[-+]?\\d+(\\.\\d+)?", f = {
        b: d,
        r: 0
    }, g = {
        cN: "number",
        b: e,
        r: 0
    }, h = a.inherit(a.QSM, {
        i: null
    }), i = {
        cN: "comment",
        b: ";",
        e: "$",
        r: 0
    }, j = {
        cN: "literal",
        b: /\b(true|false|nil)\b/
    }, k = {
        cN: "collection",
        b: "[\\[\\{]",
        e: "[\\]\\}]"
    }, l = {
        cN: "comment",
        b: "\\^" + d
    }, m = {
        cN: "comment",
        b: "\\^\\{",
        e: "\\}"
    }, n = {
        cN: "attribute",
        b: "[:]" + d
    }, o = {
        cN: "list",
        b: "\\(",
        e: "\\)"
    }, p = {
        eW: !0,
        r: 0
    }, q = {
        k: b,
        l: d,
        cN: "keyword",
        b: d,
        starts: p
    }, r = [ o, h, l, m, i, n, k, g, j, f ];
    return o.c = [ {
        cN: "comment",
        b: "comment"
    }, q, p ], p.c = r, k.c = r, {
        aliases: [ "clj" ],
        i: /\S/,
        c: [ o, h, l, m, i, n, k, g, j ]
    };
}), hljs.registerLanguage("clojure-repl", function() {
    return {
        c: [ {
            cN: "prompt",
            b: /^([\w.-]+|\s*#_)=>/,
            starts: {
                e: /$/,
                sL: "clojure",
                subLanguageMode: "continuous"
            }
        } ]
    };
}), hljs.registerLanguage("cmake", function(a) {
    return {
        aliases: [ "cmake.in" ],
        cI: !0,
        k: {
            keyword: "add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_subdirectory add_test aux_source_directory break build_command cmake_minimum_required cmake_policy configure_file create_test_sourcelist define_property else elseif enable_language enable_testing endforeach endfunction endif endmacro endwhile execute_process export find_file find_library find_package find_path find_program fltk_wrap_ui foreach function get_cmake_property get_directory_property get_filename_component get_property get_source_file_property get_target_property get_test_property if include include_directories include_external_msproject include_regular_expression install link_directories load_cache load_command macro mark_as_advanced message option output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return separate_arguments set set_directory_properties set_property set_source_files_properties set_target_properties set_tests_properties site_name source_group string target_link_libraries try_compile try_run unset variable_watch while build_name exec_program export_library_dependencies install_files install_programs install_targets link_libraries make_directory remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or",
            operator: "equal less greater strless strgreater strequal matches"
        },
        c: [ {
            cN: "envvar",
            b: "\\${",
            e: "}"
        }, a.HCM, a.QSM, a.NM ]
    };
}), hljs.registerLanguage("coffeescript", function(a) {
    var b = {
        keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
        literal: "true false null undefined yes no on off",
        reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
        built_in: "npm require console print module global window document"
    }, c = "[A-Za-z$_][0-9A-Za-z$_]*", d = {
        cN: "subst",
        b: /#\{/,
        e: /}/,
        k: b
    }, e = [ a.BNM, a.inherit(a.CNM, {
        starts: {
            e: "(\\s*/)?",
            r: 0
        }
    }), {
        cN: "string",
        v: [ {
            b: /'''/,
            e: /'''/,
            c: [ a.BE ]
        }, {
            b: /'/,
            e: /'/,
            c: [ a.BE ]
        }, {
            b: /"""/,
            e: /"""/,
            c: [ a.BE, d ]
        }, {
            b: /"/,
            e: /"/,
            c: [ a.BE, d ]
        } ]
    }, {
        cN: "regexp",
        v: [ {
            b: "///",
            e: "///",
            c: [ d, a.HCM ]
        }, {
            b: "//[gim]*",
            r: 0
        }, {
            b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
        } ]
    }, {
        cN: "property",
        b: "@" + c
    }, {
        b: "`",
        e: "`",
        eB: !0,
        eE: !0,
        sL: "javascript"
    } ];
    d.c = e;
    var f = a.inherit(a.TM, {
        b: c
    }), g = "(\\(.*\\))?\\s*\\B[-=]>", h = {
        cN: "params",
        b: "\\([^\\(]",
        rB: !0,
        c: [ {
            b: /\(/,
            e: /\)/,
            k: b,
            c: [ "self" ].concat(e)
        } ]
    };
    return {
        aliases: [ "coffee", "cson", "iced" ],
        k: b,
        i: /\/\*/,
        c: e.concat([ {
            cN: "comment",
            b: "###",
            e: "###",
            c: [ a.PWM ]
        }, a.HCM, {
            cN: "function",
            b: "^\\s*" + c + "\\s*=\\s*" + g,
            e: "[-=]>",
            rB: !0,
            c: [ f, h ]
        }, {
            b: /[:\(,=]\s*/,
            r: 0,
            c: [ {
                cN: "function",
                b: g,
                e: "[-=]>",
                rB: !0,
                c: [ h ]
            } ]
        }, {
            cN: "class",
            bK: "class",
            e: "$",
            i: /[:="\[\]]/,
            c: [ {
                bK: "extends",
                eW: !0,
                i: /[:="\[\]]/,
                c: [ f ]
            }, f ]
        }, {
            cN: "attribute",
            b: c + ":",
            e: ":",
            rB: !0,
            rE: !0,
            r: 0
        } ])
    };
}), hljs.registerLanguage("cpp", function(a) {
    var b = {
        keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginaryintmax_t uintmax_t int8_t uint8_t int16_t uint16_t int32_t uint32_t  int64_t uint64_tint_least8_t uint_least8_t int_least16_t uint_least16_t int_least32_t uint_least32_tint_least64_t uint_least64_t int_fast8_t uint_fast8_t int_fast16_t uint_fast16_t int_fast32_tuint_fast32_t int_fast64_t uint_fast64_t intptr_t uintptr_t atomic_bool atomic_char atomic_scharatomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llongatomic_ullong atomic_wchar_t atomic_char16_t atomic_char32_t atomic_intmax_t atomic_uintmax_tatomic_intptr_t atomic_uintptr_t atomic_size_t atomic_ptrdiff_t atomic_int_least8_t atomic_int_least16_tatomic_int_least32_t atomic_int_least64_t atomic_uint_least8_t atomic_uint_least16_t atomic_uint_least32_tatomic_uint_least64_t atomic_int_fast8_t atomic_int_fast16_t atomic_int_fast32_t atomic_int_fast64_tatomic_uint_fast8_t atomic_uint_fast16_t atomic_uint_fast32_t atomic_uint_fast64_t",
        built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
    };
    return {
        aliases: [ "c", "h", "c++", "h++" ],
        k: b,
        i: "</",
        c: [ a.CLCM, a.CBCM, a.QSM, {
            cN: "string",
            b: "'\\\\?.",
            e: "'",
            i: "."
        }, {
            cN: "number",
            b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        }, a.CNM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line pragma",
            c: [ {
                b: 'include\\s*[<"]',
                e: '[>"]',
                k: "include",
                i: "\\n"
            }, a.CLCM ]
        }, {
            cN: "stl_container",
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: b,
            c: [ "self" ]
        }, {
            b: a.IR + "::"
        }, {
            bK: "new throw return",
            r: 0
        }, {
            cN: "function",
            b: "(" + a.IR + "\\s+)+" + a.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: b,
            c: [ {
                b: a.IR + "\\s*\\(",
                rB: !0,
                c: [ a.TM ],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: b,
                r: 0,
                c: [ a.CBCM ]
            }, a.CLCM, a.CBCM ]
        } ]
    };
}), hljs.registerLanguage("cs", function(a) {
    var b = "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield", c = a.IR + "(<" + a.IR + ">)?";
    return {
        aliases: [ "csharp" ],
        k: b,
        i: /::/,
        c: [ {
            cN: "comment",
            b: "///",
            e: "$",
            rB: !0,
            c: [ {
                cN: "xmlDocTag",
                v: [ {
                    b: "///",
                    r: 0
                }, {
                    b: "<!--|-->"
                }, {
                    b: "</?",
                    e: ">"
                } ]
            } ]
        }, a.CLCM, a.CBCM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line region endregion pragma checksum"
        }, {
            cN: "string",
            b: '@"',
            e: '"',
            c: [ {
                b: '""'
            } ]
        }, a.ASM, a.QSM, a.CNM, {
            bK: "class namespace interface",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [ a.TM, a.CLCM, a.CBCM ]
        }, {
            bK: "new return throw await",
            r: 0
        }, {
            cN: "function",
            b: "(" + c + "\\s+)+" + a.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: b,
            c: [ {
                b: a.IR + "\\s*\\(",
                rB: !0,
                c: [ a.TM ],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: b,
                r: 0,
                c: [ a.ASM, a.QSM, a.CNM, a.CBCM ]
            }, a.CLCM, a.CBCM ]
        } ]
    };
}), hljs.registerLanguage("css", function(a) {
    var b = "[a-zA-Z-][a-zA-Z0-9_-]*", c = {
        cN: "function",
        b: b + "\\(",
        rB: !0,
        eE: !0,
        e: "\\("
    };
    return {
        cI: !0,
        i: "[=/|']",
        c: [ a.CBCM, {
            cN: "id",
            b: "\\#[A-Za-z0-9_-]+"
        }, {
            cN: "class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "attr_selector",
            b: "\\[",
            e: "\\]",
            i: "$"
        }, {
            cN: "pseudo",
            b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
        }, {
            cN: "at_rule",
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            c: [ {
                cN: "keyword",
                b: /\S+/
            }, {
                b: /\s/,
                eW: !0,
                eE: !0,
                r: 0,
                c: [ c, a.ASM, a.QSM, a.CSSNM ]
            } ]
        }, {
            cN: "tag",
            b: b,
            r: 0
        }, {
            cN: "rules",
            b: "{",
            e: "}",
            i: "[^\\s]",
            r: 0,
            c: [ a.CBCM, {
                cN: "rule",
                b: "[^\\s]",
                rB: !0,
                e: ";",
                eW: !0,
                c: [ {
                    cN: "attribute",
                    b: "[A-Z\\_\\.\\-]+",
                    e: ":",
                    eE: !0,
                    i: "[^\\s]",
                    starts: {
                        cN: "value",
                        eW: !0,
                        eE: !0,
                        c: [ c, a.CSSNM, a.QSM, a.ASM, a.CBCM, {
                            cN: "hexcolor",
                            b: "#[0-9A-Fa-f]+"
                        }, {
                            cN: "important",
                            b: "!important"
                        } ]
                    }
                } ]
            } ]
        } ]
    };
}), hljs.registerLanguage("d", function(a) {
    var b = {
        keyword: "abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
        built_in: "bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
        literal: "false null true"
    }, c = "(0|[1-9][\\d_]*)", d = "(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)", e = "0[bB][01_]+", f = "([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)", g = "0[xX]" + f, h = "([eE][+-]?" + d + ")", i = "(" + d + "(\\.\\d*|" + h + ")|\\d+\\." + d + d + "|\\." + c + h + "?)", j = "(0[xX](" + f + "\\." + f + "|\\.?" + f + ")[pP][+-]?" + d + ")", k = "(" + c + "|" + e + "|" + g + ")", l = "(" + j + "|" + i + ")", m = "\\\\(['\"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};", n = {
        cN: "number",
        b: "\\b" + k + "(L|u|U|Lu|LU|uL|UL)?",
        r: 0
    }, o = {
        cN: "number",
        b: "\\b(" + l + "([fF]|L|i|[fF]i|Li)?|" + k + "(i|[fF]i|Li))",
        r: 0
    }, p = {
        cN: "string",
        b: "'(" + m + "|.)",
        e: "'",
        i: "."
    }, q = {
        b: m,
        r: 0
    }, r = {
        cN: "string",
        b: '"',
        c: [ q ],
        e: '"[cwd]?'
    }, s = {
        cN: "string",
        b: '[rq]"',
        e: '"[cwd]?',
        r: 5
    }, t = {
        cN: "string",
        b: "`",
        e: "`[cwd]?"
    }, u = {
        cN: "string",
        b: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
        r: 10
    }, v = {
        cN: "string",
        b: 'q"\\{',
        e: '\\}"'
    }, w = {
        cN: "shebang",
        b: "^#!",
        e: "$",
        r: 5
    }, x = {
        cN: "preprocessor",
        b: "#(line)",
        e: "$",
        r: 5
    }, y = {
        cN: "keyword",
        b: "@[a-zA-Z_][a-zA-Z_\\d]*"
    }, z = {
        cN: "comment",
        b: "\\/\\+",
        c: [ "self" ],
        e: "\\+\\/",
        r: 10
    };
    return {
        l: a.UIR,
        k: b,
        c: [ a.CLCM, a.CBCM, z, u, r, s, t, v, o, n, p, w, x, y ]
    };
}), hljs.registerLanguage("markdown", function() {
    return {
        aliases: [ "md", "mkdown", "mkd" ],
        c: [ {
            cN: "header",
            v: [ {
                b: "^#{1,6}",
                e: "$"
            }, {
                b: "^.+?\\n[=-]{2,}$"
            } ]
        }, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {
            cN: "bullet",
            b: "^([*+-]|(\\d+\\.))\\s+"
        }, {
            cN: "strong",
            b: "[*_]{2}.+?[*_]{2}"
        }, {
            cN: "emphasis",
            v: [ {
                b: "\\*.+?\\*"
            }, {
                b: "_.+?_",
                r: 0
            } ]
        }, {
            cN: "blockquote",
            b: "^>\\s+",
            e: "$"
        }, {
            cN: "code",
            v: [ {
                b: "`.+?`"
            }, {
                b: "^( {4}|	)",
                e: "$",
                r: 0
            } ]
        }, {
            cN: "horizontal_rule",
            b: "^[-\\*]{3,}",
            e: "$"
        }, {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [ {
                cN: "link_label",
                b: "\\[",
                e: "\\]",
                eB: !0,
                rE: !0,
                r: 0
            }, {
                cN: "link_url",
                b: "\\]\\(",
                e: "\\)",
                eB: !0,
                eE: !0
            }, {
                cN: "link_reference",
                b: "\\]\\[",
                e: "\\]",
                eB: !0,
                eE: !0
            } ],
            r: 10
        }, {
            b: "^\\[.+\\]:",
            rB: !0,
            c: [ {
                cN: "link_reference",
                b: "\\[",
                e: "\\]:",
                eB: !0,
                eE: !0,
                starts: {
                    cN: "link_url",
                    e: "$"
                }
            } ]
        } ]
    };
}), hljs.registerLanguage("dart", function(a) {
    var b = {
        cN: "subst",
        b: "\\$\\{",
        e: "}",
        k: "true false null this is new super"
    }, c = {
        cN: "string",
        v: [ {
            b: "r'''",
            e: "'''"
        }, {
            b: 'r"""',
            e: '"""'
        }, {
            b: "r'",
            e: "'",
            i: "\\n"
        }, {
            b: 'r"',
            e: '"',
            i: "\\n"
        }, {
            b: "'''",
            e: "'''",
            c: [ a.BE, b ]
        }, {
            b: '"""',
            e: '"""',
            c: [ a.BE, b ]
        }, {
            b: "'",
            e: "'",
            i: "\\n",
            c: [ a.BE, b ]
        }, {
            b: '"',
            e: '"',
            i: "\\n",
            c: [ a.BE, b ]
        } ]
    };
    b.c = [ a.CNM, c ];
    var d = {
        keyword: "assert break case catch class const continue default do else enum extends false final finally for if in is new null rethrow return super switch this throw true try var void while with",
        literal: "abstract as dynamic export external factory get implements import library operator part set static typedef",
        built_in: "print Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set Stopwatch String StringBuffer StringSink Symbol Type Uri bool double int num document window querySelector querySelectorAll Element ElementList"
    };
    return {
        k: d,
        c: [ c, {
            cN: "dartdoc",
            b: "/\\*\\*",
            e: "\\*/",
            sL: "markdown",
            subLanguageMode: "continuous"
        }, {
            cN: "dartdoc",
            b: "///",
            e: "$",
            sL: "markdown",
            subLanguageMode: "continuous"
        }, a.CLCM, a.CBCM, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            c: [ {
                bK: "extends implements"
            }, a.UTM ]
        }, a.CNM, {
            cN: "annotation",
            b: "@[A-Za-z]+"
        }, {
            b: "=>"
        } ]
    };
}), hljs.registerLanguage("delphi", function(a) {
    var b = "exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure", c = {
        cN: "comment",
        v: [ {
            b: /\{/,
            e: /\}/,
            r: 0
        }, {
            b: /\(\*/,
            e: /\*\)/,
            r: 10
        } ]
    }, d = {
        cN: "string",
        b: /'/,
        e: /'/,
        c: [ {
            b: /''/
        } ]
    }, e = {
        cN: "string",
        b: /(#\d+)+/
    }, f = {
        b: a.IR + "\\s*=\\s*class\\s*\\(",
        rB: !0,
        c: [ a.TM ]
    }, g = {
        cN: "function",
        bK: "function constructor destructor procedure",
        e: /[:;]/,
        k: "function constructor|10 destructor|10 procedure|10",
        c: [ a.TM, {
            cN: "params",
            b: /\(/,
            e: /\)/,
            k: b,
            c: [ d, e ]
        }, c ]
    };
    return {
        cI: !0,
        k: b,
        i: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
        c: [ c, a.CLCM, d, e, a.NM, f, g ]
    };
}), hljs.registerLanguage("diff", function() {
    return {
        aliases: [ "patch" ],
        c: [ {
            cN: "chunk",
            r: 10,
            v: [ {
                b: /^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/
            }, {
                b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
            }, {
                b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
            } ]
        }, {
            cN: "header",
            v: [ {
                b: /Index: /,
                e: /$/
            }, {
                b: /=====/,
                e: /=====$/
            }, {
                b: /^\-\-\-/,
                e: /$/
            }, {
                b: /^\*{3} /,
                e: /$/
            }, {
                b: /^\+\+\+/,
                e: /$/
            }, {
                b: /\*{5}/,
                e: /\*{5}$/
            } ]
        }, {
            cN: "addition",
            b: "^\\+",
            e: "$"
        }, {
            cN: "deletion",
            b: "^\\-",
            e: "$"
        }, {
            cN: "change",
            b: "^\\!",
            e: "$"
        } ]
    };
}), hljs.registerLanguage("django", function() {
    var a = {
        cN: "filter",
        b: /\|[A-Za-z]+\:?/,
        k: "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone",
        c: [ {
            cN: "argument",
            b: /"/,
            e: /"/
        }, {
            cN: "argument",
            b: /'/,
            e: /'/
        } ]
    };
    return {
        aliases: [ "jinja" ],
        cI: !0,
        sL: "xml",
        subLanguageMode: "continuous",
        c: [ {
            cN: "comment",
            b: /\{%\s*comment\s*%}/,
            e: /\{%\s*endcomment\s*%}/
        }, {
            cN: "comment",
            b: /\{#/,
            e: /#}/
        }, {
            cN: "template_tag",
            b: /\{%/,
            e: /%}/,
            k: "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor in ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup by as ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim",
            c: [ a ]
        }, {
            cN: "variable",
            b: /\{\{/,
            e: /}}/,
            c: [ a ]
        } ]
    };
}), hljs.registerLanguage("dos", function(a) {
    var b = {
        cN: "comment",
        b: /@?rem\b/,
        e: /$/,
        r: 10
    }, c = {
        cN: "label",
        b: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
        r: 0
    };
    return {
        aliases: [ "bat", "cmd" ],
        cI: !0,
        k: {
            flow: "if else goto for in do call exit not exist errorlevel defined",
            operator: "equ neq lss leq gtr geq",
            keyword: "shift cd dir echo setlocal endlocal set pause copy",
            stream: "prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux",
            winutils: "ping net ipconfig taskkill xcopy ren del",
            built_in: "append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shiftsort start subst time title tree type ver verify vol"
        },
        c: [ {
            cN: "envvar",
            b: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
        }, {
            cN: "function",
            b: c.b,
            e: "goto:eof",
            c: [ a.inherit(a.TM, {
                b: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
            }), b ]
        }, {
            cN: "number",
            b: "\\b\\d+",
            r: 0
        }, b ]
    };
}), hljs.registerLanguage("dust", function() {
    var a = "if eq ne lt lte gt gte select default math sep";
    return {
        aliases: [ "dst" ],
        cI: !0,
        sL: "xml",
        subLanguageMode: "continuous",
        c: [ {
            cN: "expression",
            b: "{",
            e: "}",
            r: 0,
            c: [ {
                cN: "begin-block",
                b: "#[a-zA-Z- .]+",
                k: a
            }, {
                cN: "string",
                b: '"',
                e: '"'
            }, {
                cN: "end-block",
                b: "\\/[a-zA-Z- .]+",
                k: a
            }, {
                cN: "variable",
                b: "[a-zA-Z-.]+",
                k: a,
                r: 0
            } ]
        } ]
    };
}), hljs.registerLanguage("elixir", function(a) {
    var b = "[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?", c = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?", d = "and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote", e = {
        cN: "subst",
        b: "#\\{",
        e: "}",
        l: b,
        k: d
    }, f = {
        cN: "string",
        c: [ a.BE, e ],
        v: [ {
            b: /'/,
            e: /'/
        }, {
            b: /"/,
            e: /"/
        } ]
    }, g = {
        eW: !0,
        rE: !0,
        l: b,
        k: d,
        r: 0
    }, h = {
        cN: "function",
        bK: "def defmacro",
        e: /\bdo\b/,
        c: [ a.inherit(a.TM, {
            b: c,
            starts: g
        }) ]
    }, i = a.inherit(h, {
        cN: "class",
        bK: "defmodule defrecord",
        e: /\bdo\b|$|;/
    }), j = [ f, a.HCM, i, h, {
        cN: "constant",
        b: "(\\b[A-Z_]\\w*(.)?)+",
        r: 0
    }, {
        cN: "symbol",
        b: ":",
        c: [ f, {
            b: c
        } ],
        r: 0
    }, {
        cN: "symbol",
        b: b + ":",
        r: 0
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        cN: "variable",
        b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    }, {
        b: "->"
    }, {
        b: "(" + a.RSR + ")\\s*",
        c: [ a.HCM, {
            cN: "regexp",
            i: "\\n",
            c: [ a.BE, e ],
            v: [ {
                b: "/",
                e: "/[a-z]*"
            }, {
                b: "%r\\[",
                e: "\\][a-z]*"
            } ]
        } ],
        r: 0
    } ];
    return e.c = j, g.c = j, {
        l: b,
        k: d,
        c: j
    };
}), hljs.registerLanguage("ruby", function(a) {
    var b = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?", c = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor", d = {
        cN: "yardoctag",
        b: "@[A-Za-z]+"
    }, e = {
        cN: "value",
        b: "#<",
        e: ">"
    }, f = {
        cN: "comment",
        v: [ {
            b: "#",
            e: "$",
            c: [ d ]
        }, {
            b: "^\\=begin",
            e: "^\\=end",
            c: [ d ],
            r: 10
        }, {
            b: "^__END__",
            e: "\\n$"
        } ]
    }, g = {
        cN: "subst",
        b: "#\\{",
        e: "}",
        k: c
    }, h = {
        cN: "string",
        c: [ a.BE, g ],
        v: [ {
            b: /'/,
            e: /'/
        }, {
            b: /"/,
            e: /"/
        }, {
            b: /`/,
            e: /`/
        }, {
            b: "%[qQwWx]?\\(",
            e: "\\)"
        }, {
            b: "%[qQwWx]?\\[",
            e: "\\]"
        }, {
            b: "%[qQwWx]?{",
            e: "}"
        }, {
            b: "%[qQwWx]?<",
            e: ">"
        }, {
            b: "%[qQwWx]?/",
            e: "/"
        }, {
            b: "%[qQwWx]?%",
            e: "%"
        }, {
            b: "%[qQwWx]?-",
            e: "-"
        }, {
            b: "%[qQwWx]?\\|",
            e: "\\|"
        }, {
            b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
        } ]
    }, i = {
        cN: "params",
        b: "\\(",
        e: "\\)",
        k: c
    }, j = [ h, e, f, {
        cN: "class",
        bK: "class module",
        e: "$|;",
        i: /=/,
        c: [ a.inherit(a.TM, {
            b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
        }), {
            cN: "inheritance",
            b: "<\\s*",
            c: [ {
                cN: "parent",
                b: "(" + a.IR + "::)?" + a.IR
            } ]
        }, f ]
    }, {
        cN: "function",
        bK: "def",
        e: " |$|;",
        r: 0,
        c: [ a.inherit(a.TM, {
            b: b
        }), i, f ]
    }, {
        cN: "constant",
        b: "(::)?(\\b[A-Z]\\w*(::)?)+",
        r: 0
    }, {
        cN: "symbol",
        b: a.UIR + "(\\!|\\?)?:",
        r: 0
    }, {
        cN: "symbol",
        b: ":",
        c: [ h, {
            b: b
        } ],
        r: 0
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        cN: "variable",
        b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    }, {
        b: "(" + a.RSR + ")\\s*",
        c: [ e, f, {
            cN: "regexp",
            c: [ a.BE, g ],
            i: /\n/,
            v: [ {
                b: "/",
                e: "/[a-z]*"
            }, {
                b: "%r{",
                e: "}[a-z]*"
            }, {
                b: "%r\\(",
                e: "\\)[a-z]*"
            }, {
                b: "%r!",
                e: "![a-z]*"
            }, {
                b: "%r\\[",
                e: "\\][a-z]*"
            } ]
        } ],
        r: 0
    } ];
    g.c = j, i.c = j;
    var k = "[>?]>", l = "[\\w#]+\\(\\w+\\):\\d+:\\d+>", m = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>", n = [ {
        b: /^\s*=>/,
        cN: "status",
        starts: {
            e: "$",
            c: j
        }
    }, {
        cN: "prompt",
        b: "^(" + k + "|" + l + "|" + m + ")",
        starts: {
            e: "$",
            c: j
        }
    } ];
    return {
        aliases: [ "rb", "gemspec", "podspec", "thor", "irb" ],
        k: c,
        c: [ f ].concat(n).concat(j)
    };
}), hljs.registerLanguage("erb", function() {
    return {
        sL: "xml",
        subLanguageMode: "continuous",
        c: [ {
            cN: "comment",
            b: "<%#",
            e: "%>"
        }, {
            b: "<%[%=-]?",
            e: "[%-]?%>",
            sL: "ruby",
            eB: !0,
            eE: !0
        } ]
    };
}), hljs.registerLanguage("erlang-repl", function(a) {
    return {
        k: {
            special_functions: "spawn spawn_link self",
            reserved: "after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"
        },
        c: [ {
            cN: "prompt",
            b: "^[0-9]+> ",
            r: 10
        }, {
            cN: "comment",
            b: "%",
            e: "$"
        }, {
            cN: "number",
            b: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
            r: 0
        }, a.ASM, a.QSM, {
            cN: "constant",
            b: "\\?(::)?([A-Z]\\w*(::)?)+"
        }, {
            cN: "arrow",
            b: "->"
        }, {
            cN: "ok",
            b: "ok"
        }, {
            cN: "exclamation_mark",
            b: "!"
        }, {
            cN: "function_or_atom",
            b: "(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
            r: 0
        }, {
            cN: "variable",
            b: "[A-Z][a-zA-Z0-9_']*",
            r: 0
        } ]
    };
}), hljs.registerLanguage("erlang", function(a) {
    var b = "[a-z'][a-zA-Z0-9_']*", c = "(" + b + ":" + b + "|" + b + ")", d = {
        keyword: "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
        literal: "false true"
    }, e = {
        cN: "comment",
        b: "%",
        e: "$"
    }, f = {
        cN: "number",
        b: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
        r: 0
    }, g = {
        b: "fun\\s+" + b + "/\\d+"
    }, h = {
        b: c + "\\(",
        e: "\\)",
        rB: !0,
        r: 0,
        c: [ {
            cN: "function_name",
            b: c,
            r: 0
        }, {
            b: "\\(",
            e: "\\)",
            eW: !0,
            rE: !0,
            r: 0
        } ]
    }, i = {
        cN: "tuple",
        b: "{",
        e: "}",
        r: 0
    }, j = {
        cN: "variable",
        b: "\\b_([A-Z][A-Za-z0-9_]*)?",
        r: 0
    }, k = {
        cN: "variable",
        b: "[A-Z][a-zA-Z0-9_]*",
        r: 0
    }, l = {
        b: "#" + a.UIR,
        r: 0,
        rB: !0,
        c: [ {
            cN: "record_name",
            b: "#" + a.UIR,
            r: 0
        }, {
            b: "{",
            e: "}",
            r: 0
        } ]
    }, m = {
        bK: "fun receive if try case",
        e: "end",
        k: d
    };
    m.c = [ e, g, a.inherit(a.ASM, {
        cN: ""
    }), m, h, a.QSM, f, i, j, k, l ];
    var n = [ e, g, m, h, a.QSM, f, i, j, k, l ];
    h.c[1].c = n, i.c = n, l.c[1].c = n;
    var o = {
        cN: "params",
        b: "\\(",
        e: "\\)",
        c: n
    };
    return {
        aliases: [ "erl" ],
        k: d,
        i: "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
        c: [ {
            cN: "function",
            b: "^" + b + "\\s*\\(",
            e: "->",
            rB: !0,
            i: "\\(|#|//|/\\*|\\\\|:|;",
            c: [ o, a.inherit(a.TM, {
                b: b
            }) ],
            starts: {
                e: ";|\\.",
                k: d,
                c: n
            }
        }, e, {
            cN: "pp",
            b: "^-",
            e: "\\.",
            r: 0,
            eE: !0,
            rB: !0,
            l: "-" + a.IR,
            k: "-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior -spec",
            c: [ o ]
        }, f, a.QSM, l, j, k, i, {
            b: /\.$/
        } ]
    };
}), hljs.registerLanguage("fix", function() {
    return {
        c: [ {
            b: /[^\u2401\u0001]+/,
            e: /[\u2401\u0001]/,
            eE: !0,
            rB: !0,
            rE: !1,
            c: [ {
                b: /([^\u2401\u0001=]+)/,
                e: /=([^\u2401\u0001=]+)/,
                rE: !0,
                rB: !1,
                cN: "attribute"
            }, {
                b: /=/,
                e: /([\u2401\u0001])/,
                eE: !0,
                eB: !0,
                cN: "string"
            } ]
        } ],
        cI: !0
    };
}), hljs.registerLanguage("fsharp", function(a) {
    var b = {
        b: "<",
        e: ">",
        c: [ a.inherit(a.TM, {
            b: /'[a-zA-Z0-9_]+/
        }) ]
    };
    return {
        aliases: [ "fs" ],
        k: "yield! return! let! do!abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield",
        c: [ {
            cN: "string",
            b: '@"',
            e: '"',
            c: [ {
                b: '""'
            } ]
        }, {
            cN: "string",
            b: '"""',
            e: '"""'
        }, {
            cN: "comment",
            b: "\\(\\*",
            e: "\\*\\)"
        }, {
            cN: "class",
            bK: "type",
            e: "\\(|=|$",
            eE: !0,
            c: [ a.UTM, b ]
        }, {
            cN: "annotation",
            b: "\\[<",
            e: ">\\]",
            r: 10
        }, {
            cN: "attribute",
            b: "\\B('[A-Za-z])\\b",
            c: [ a.BE ]
        }, a.CLCM, a.inherit(a.QSM, {
            i: null
        }), a.CNM ]
    };
}), hljs.registerLanguage("gcode", function(a) {
    var b = "[A-Z_][A-Z0-9_.]*", c = "\\%", d = {
        literal: "",
        built_in: "",
        keyword: "IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR"
    }, e = {
        cN: "preprocessor",
        b: "([O])([0-9]+)"
    }, f = [ a.CLCM, {
        cN: "comment",
        b: /\(/,
        e: /\)/,
        c: [ a.PWM ]
    }, a.CBCM, a.inherit(a.CNM, {
        b: "([-+]?([0-9]*\\.?[0-9]+\\.?))|" + a.CNR
    }), a.inherit(a.ASM, {
        i: null
    }), a.inherit(a.QSM, {
        i: null
    }), {
        cN: "keyword",
        b: "([G])([0-9]+\\.?[0-9]?)"
    }, {
        cN: "title",
        b: "([M])([0-9]+\\.?[0-9]?)"
    }, {
        cN: "title",
        b: "(VC|VS|#)",
        e: "(\\d+)"
    }, {
        cN: "title",
        b: "(VZOFX|VZOFY|VZOFZ)"
    }, {
        cN: "built_in",
        b: "(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",
        e: "([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])"
    }, {
        cN: "label",
        v: [ {
            b: "N",
            e: "\\d+",
            i: "\\W"
        } ]
    } ];
    return {
        aliases: [ "nc" ],
        cI: !0,
        l: b,
        k: d,
        c: [ {
            cN: "preprocessor",
            b: c
        }, e ].concat(f)
    };
}), hljs.registerLanguage("gherkin", function(a) {
    return {
        aliases: [ "feature" ],
        k: "Feature Background Ability Business Need Scenario Scenarios Scenario Outline Scenario Template Examples Given And Then But When",
        c: [ {
            cN: "keyword",
            b: "\\*"
        }, {
            cN: "comment",
            b: "@[^@\r\n	 ]+",
            e: "$"
        }, {
            cN: "string",
            b: "\\|",
            e: "\\$"
        }, {
            cN: "variable",
            b: "<",
            e: ">"
        }, a.HCM, {
            cN: "string",
            b: '"""',
            e: '"""'
        }, a.QSM ]
    };
}), hljs.registerLanguage("glsl", function(a) {
    return {
        k: {
            keyword: "atomic_uint attribute bool break bvec2 bvec3 bvec4 case centroid coherent const continue default discard dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 do double dvec2 dvec3 dvec4 else flat float for highp if iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBuffer iimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray in inout int invariant isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 layout lowp mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 mediump noperspective out patch precision readonly restrict return sample sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow smooth struct subroutine switch uimage1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint uniform usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D usamplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 varying vec2 vec3 vec4 void volatile while writeonly",
            built_in: "gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffsetgl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_PerVertex gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicCounter atomicCounterDecrement atomicCounterIncrement barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow gl_TextureMatrix gl_TextureMatrixInverse",
            literal: "true false"
        },
        i: '"',
        c: [ a.CLCM, a.CBCM, a.CNM, {
            cN: "preprocessor",
            b: "#",
            e: "$"
        } ]
    };
}), hljs.registerLanguage("go", function(a) {
    var b = {
        keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer",
        constant: "true false iota nil",
        typename: "bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
        built_in: "append cap close complex copy imag len make new panic print println real recover delete"
    };
    return {
        aliases: [ "golang" ],
        k: b,
        i: "</",
        c: [ a.CLCM, a.CBCM, a.QSM, {
            cN: "string",
            b: "'",
            e: "[^\\\\]'"
        }, {
            cN: "string",
            b: "`",
            e: "`"
        }, {
            cN: "number",
            b: a.CNR + "[dflsi]?",
            r: 0
        }, a.CNM ]
    };
}), hljs.registerLanguage("gradle", function(a) {
    return {
        cI: !0,
        k: {
            keyword: "task project allprojects subprojects artifacts buildscript configurations dependencies repositories sourceSets description delete from into include exclude source classpath destinationDir includes options sourceCompatibility targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant def abstract break case catch continue default do else extends final finally for if implements instanceof native new private protected public return static switch synchronized throw throws transient try volatile while strictfp package import false null super this true antlrtask checkstyle codenarc copy boolean byte char class double float int interface long short void compile runTime file fileTree abs any append asList asWritable call collect compareTo count div dump each eachByte eachFile eachLine every find findAll flatten getAt getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter newReader newWriter next plus pop power previous print println push putAt read readBytes readLines reverse reverseEach round size sort splitEachLine step subMap times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader withStream withWriter withWriterAppend write writeLine"
        },
        c: [ a.CLCM, a.CBCM, a.ASM, a.QSM, a.NM, a.RM ]
    };
}), hljs.registerLanguage("groovy", function(a) {
    return {
        k: {
            typename: "byte short char int long boolean float double void",
            literal: "true false null",
            keyword: "def as in assert trait super this abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"
        },
        c: [ a.CLCM, {
            cN: "javadoc",
            b: "/\\*\\*",
            e: "\\*//*",
            r: 0,
            c: [ {
                cN: "javadoctag",
                b: "(^|\\s)@[A-Za-z]+"
            } ]
        }, a.CBCM, {
            cN: "string",
            b: '"""',
            e: '"""'
        }, {
            cN: "string",
            b: "'''",
            e: "'''"
        }, {
            cN: "string",
            b: "\\$/",
            e: "/\\$",
            r: 10
        }, a.ASM, {
            cN: "regexp",
            b: /~?\/[^\/\n]+\//,
            c: [ a.BE ]
        }, a.QSM, {
            cN: "shebang",
            b: "^#!/usr/bin/env",
            e: "$",
            i: "\n"
        }, a.BNM, {
            cN: "class",
            bK: "class interface trait enum",
            e: "{",
            i: ":",
            c: [ {
                bK: "extends implements"
            }, a.UTM ]
        }, a.CNM, {
            cN: "annotation",
            b: "@[A-Za-z]+"
        }, {
            cN: "string",
            b: /[^\?]{0}[A-Za-z0-9_$]+ *:/
        }, {
            b: /\?/,
            e: /\:/
        }, {
            cN: "label",
            b: "^\\s*[A-Za-z0-9_$]+:",
            r: 0
        } ]
    };
}), hljs.registerLanguage("haml", function() {
    return {
        cI: !0,
        c: [ {
            cN: "doctype",
            b: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
            r: 10
        }, {
            cN: "comment",
            b: "^\\s*(!=#|=#|-#|/).*$",
            r: 0
        }, {
            b: "^\\s*(-|=|!=)(?!#)",
            starts: {
                e: "\\n",
                sL: "ruby"
            }
        }, {
            cN: "tag",
            b: "^\\s*%",
            c: [ {
                cN: "title",
                b: "\\w+"
            }, {
                cN: "value",
                b: "[#\\.]\\w+"
            }, {
                b: "{\\s*",
                e: "\\s*}",
                eE: !0,
                c: [ {
                    b: ":\\w+\\s*=>",
                    e: ",\\s+",
                    rB: !0,
                    eW: !0,
                    c: [ {
                        cN: "symbol",
                        b: ":\\w+"
                    }, {
                        cN: "string",
                        b: '"',
                        e: '"'
                    }, {
                        cN: "string",
                        b: "'",
                        e: "'"
                    }, {
                        b: "\\w+",
                        r: 0
                    } ]
                } ]
            }, {
                b: "\\(\\s*",
                e: "\\s*\\)",
                eE: !0,
                c: [ {
                    b: "\\w+\\s*=",
                    e: "\\s+",
                    rB: !0,
                    eW: !0,
                    c: [ {
                        cN: "attribute",
                        b: "\\w+",
                        r: 0
                    }, {
                        cN: "string",
                        b: '"',
                        e: '"'
                    }, {
                        cN: "string",
                        b: "'",
                        e: "'"
                    }, {
                        b: "\\w+",
                        r: 0
                    } ]
                } ]
            } ]
        }, {
            cN: "bullet",
            b: "^\\s*[=~]\\s*",
            r: 0
        }, {
            b: "#{",
            starts: {
                e: "}",
                sL: "ruby"
            }
        } ]
    };
}), hljs.registerLanguage("handlebars", function() {
    var a = "each in with if else unless bindattr action collection debugger log outlet template unbound view yield";
    return {
        aliases: [ "hbs", "html.hbs", "html.handlebars" ],
        cI: !0,
        sL: "xml",
        subLanguageMode: "continuous",
        c: [ {
            cN: "expression",
            b: "{{",
            e: "}}",
            c: [ {
                cN: "begin-block",
                b: "#[a-zA-Z- .]+",
                k: a
            }, {
                cN: "string",
                b: '"',
                e: '"'
            }, {
                cN: "end-block",
                b: "\\/[a-zA-Z- .]+",
                k: a
            }, {
                cN: "variable",
                b: "[a-zA-Z-.]+",
                k: a
            } ]
        } ]
    };
}), hljs.registerLanguage("haskell", function(a) {
    var b = {
        cN: "comment",
        v: [ {
            b: "--",
            e: "$"
        }, {
            b: "{-",
            e: "-}",
            c: [ "self" ]
        } ]
    }, c = {
        cN: "pragma",
        b: "{-#",
        e: "#-}"
    }, d = {
        cN: "preprocessor",
        b: "^#",
        e: "$"
    }, e = {
        cN: "type",
        b: "\\b[A-Z][\\w']*",
        r: 0
    }, f = {
        cN: "container",
        b: "\\(",
        e: "\\)",
        i: '"',
        c: [ c, b, d, {
            cN: "type",
            b: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
        }, a.inherit(a.TM, {
            b: "[_a-z][\\w']*"
        }) ]
    }, g = {
        cN: "container",
        b: "{",
        e: "}",
        c: f.c
    };
    return {
        aliases: [ "hs" ],
        k: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
        c: [ {
            cN: "module",
            b: "\\bmodule\\b",
            e: "where",
            k: "module where",
            c: [ f, b ],
            i: "\\W\\.|;"
        }, {
            cN: "import",
            b: "\\bimport\\b",
            e: "$",
            k: "import|0 qualified as hiding",
            c: [ f, b ],
            i: "\\W\\.|;"
        }, {
            cN: "class",
            b: "^(\\s*)?(class|instance)\\b",
            e: "where",
            k: "class family instance where",
            c: [ e, f, b ]
        }, {
            cN: "typedef",
            b: "\\b(data|(new)?type)\\b",
            e: "$",
            k: "data family type newtype deriving",
            c: [ c, b, e, f, g ]
        }, {
            cN: "default",
            bK: "default",
            e: "$",
            c: [ e, f, b ]
        }, {
            cN: "infix",
            bK: "infix infixl infixr",
            e: "$",
            c: [ a.CNM, b ]
        }, {
            cN: "foreign",
            b: "\\bforeign\\b",
            e: "$",
            k: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
            c: [ e, a.QSM, b ]
        }, {
            cN: "shebang",
            b: "#!\\/usr\\/bin\\/env runhaskell",
            e: "$"
        }, c, b, d, a.QSM, a.CNM, e, a.inherit(a.TM, {
            b: "^[_a-z][\\w']*"
        }), {
            b: "->|<-"
        } ]
    };
}), hljs.registerLanguage("haxe", function(a) {
    var b = "([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)";
    return {
        aliases: [ "hx" ],
        k: {
            keyword: "break callback case cast catch class continue default do dynamic else enum extends extern for function here if implements import in inline interface never new override package private public return static super switch this throw trace try typedef untyped using var while",
            literal: "true false null"
        },
        c: [ a.ASM, a.QSM, a.CLCM, a.CBCM, a.CNM, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            c: [ {
                bK: "extends implements"
            }, a.TM ]
        }, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elseif end error"
        }, {
            cN: "function",
            bK: "function",
            e: "[{;]",
            eE: !0,
            i: "\\S",
            c: [ a.TM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: [ a.ASM, a.QSM, a.CLCM, a.CBCM ]
            }, {
                cN: "type",
                b: ":",
                e: b,
                r: 10
            } ]
        } ]
    };
}), hljs.registerLanguage("http", function() {
    return {
        i: "\\S",
        c: [ {
            cN: "status",
            b: "^HTTP/[0-9\\.]+",
            e: "$",
            c: [ {
                cN: "number",
                b: "\\b\\d{3}\\b"
            } ]
        }, {
            cN: "request",
            b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
            rB: !0,
            e: "$",
            c: [ {
                cN: "string",
                b: " ",
                e: " ",
                eB: !0,
                eE: !0
            } ]
        }, {
            cN: "attribute",
            b: "^\\w",
            e: ": ",
            eE: !0,
            i: "\\n|\\s|=",
            starts: {
                cN: "string",
                e: "$"
            }
        }, {
            b: "\\n\\n",
            starts: {
                sL: "",
                eW: !0
            }
        } ]
    };
}), hljs.registerLanguage("ini", function(a) {
    return {
        cI: !0,
        i: /\S/,
        c: [ {
            cN: "comment",
            b: ";",
            e: "$"
        }, {
            cN: "title",
            b: "^\\[",
            e: "\\]"
        }, {
            cN: "setting",
            b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
            e: "$",
            c: [ {
                cN: "value",
                eW: !0,
                k: "on off true false yes no",
                c: [ a.QSM, a.NM ],
                r: 0
            } ]
        } ]
    };
}), hljs.registerLanguage("java", function(a) {
    var b = a.UIR + "(<" + a.UIR + ">)?", c = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private", d = "(\\b(0b[01_]+)|\\b0[xX][a-fA-F0-9_]+|(\\b[\\d_]+(\\.[\\d_]*)?|\\.[\\d_]+)([eE][-+]?\\d+)?)[lLfF]?", e = {
        cN: "number",
        b: d,
        r: 0
    };
    return {
        aliases: [ "jsp" ],
        k: c,
        i: /<\//,
        c: [ {
            cN: "javadoc",
            b: "/\\*\\*",
            e: "\\*/",
            r: 0,
            c: [ {
                cN: "javadoctag",
                b: "(^|\\s)@[A-Za-z]+"
            } ]
        }, a.CLCM, a.CBCM, a.ASM, a.QSM, {
            cN: "class",
            bK: "class interface",
            e: /[{;=]/,
            eE: !0,
            k: "class interface",
            i: /[:"\[\]]/,
            c: [ {
                bK: "extends implements"
            }, a.UTM ]
        }, {
            bK: "new throw return",
            r: 0
        }, {
            cN: "function",
            b: "(" + b + "\\s+)+" + a.UIR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: c,
            c: [ {
                b: a.UIR + "\\s*\\(",
                rB: !0,
                r: 0,
                c: [ a.UTM ]
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: c,
                r: 0,
                c: [ a.ASM, a.QSM, a.CNM, a.CBCM ]
            }, a.CLCM, a.CBCM ]
        }, e, {
            cN: "annotation",
            b: "@[A-Za-z]+"
        } ]
    };
}), hljs.registerLanguage("javascript", function(a) {
    return {
        aliases: [ "js" ],
        k: {
            keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"
        },
        c: [ {
            cN: "pi",
            r: 10,
            v: [ {
                b: /^\s*('|")use strict('|")/
            }, {
                b: /^\s*('|")use asm('|")/
            } ]
        }, a.ASM, a.QSM, a.CLCM, a.CBCM, a.CNM, {
            b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [ a.CLCM, a.CBCM, a.RM, {
                b: /</,
                e: />;/,
                r: 0,
                sL: "xml"
            } ],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [ a.inherit(a.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [ a.CLCM, a.CBCM ],
                i: /["'\(]/
            } ],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, {
            b: "\\." + a.IR,
            r: 0
        } ]
    };
}), hljs.registerLanguage("json", function(a) {
    var b = {
        literal: "true false null"
    }, c = [ a.QSM, a.CNM ], d = {
        cN: "value",
        e: ",",
        eW: !0,
        eE: !0,
        c: c,
        k: b
    }, e = {
        b: "{",
        e: "}",
        c: [ {
            cN: "attribute",
            b: '\\s*"',
            e: '"\\s*:\\s*',
            eB: !0,
            eE: !0,
            c: [ a.BE ],
            i: "\\n",
            starts: d
        } ],
        i: "\\S"
    }, f = {
        b: "\\[",
        e: "\\]",
        c: [ a.inherit(d, {
            cN: null
        }) ],
        i: "\\S"
    };
    return c.splice(c.length, 0, e, f), {
        c: c,
        k: b,
        i: "\\S"
    };
}), hljs.registerLanguage("lasso", function(a) {
    var b = "[a-zA-Z_][a-zA-Z0-9_.]*", c = "<\\?(lasso(script)?|=)", d = "\\]|\\?>", e = {
        literal: "true false none minimal full all void and or not bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft",
        built_in: "array date decimal duration integer map pair string tag xml null boolean bytes keyword list locale queue set stack staticarray local var variable global data self inherited",
        keyword: "error_code error_msg error_pop error_push error_reset cache database_names database_schemanames database_tablenames define_tag define_type email_batch encode_set html_comment handle handle_error header if inline iterate ljax_target link link_currentaction link_currentgroup link_currentrecord link_detail link_firstgroup link_firstrecord link_lastgroup link_lastrecord link_nextgroup link_nextrecord link_prevgroup link_prevrecord log loop namespace_using output_none portal private protect records referer referrer repeating resultset rows search_args search_arguments select sort_args sort_arguments thread_atomic value_list while abort case else if_empty if_false if_null if_true loop_abort loop_continue loop_count params params_up return return_value run_children soap_definetag soap_lastrequest soap_lastresponse tag_name ascending average by define descending do equals frozen group handle_failure import in into join let match max min on order parent protected provide public require returnhome skip split_thread sum take thread to trait type where with yield yieldhome"
    }, f = {
        cN: "comment",
        b: "<!--",
        e: "-->",
        r: 0
    }, g = {
        cN: "preprocessor",
        b: "\\[noprocess\\]",
        starts: {
            cN: "markup",
            e: "\\[/noprocess\\]",
            rE: !0,
            c: [ f ]
        }
    }, h = {
        cN: "preprocessor",
        b: "\\[/noprocess|" + c
    }, i = {
        cN: "variable",
        b: "'" + b + "'"
    }, j = [ a.CLCM, {
        cN: "javadoc",
        b: "/\\*\\*!",
        e: "\\*/",
        c: [ a.PWM ]
    }, a.CBCM, a.inherit(a.CNM, {
        b: a.CNR + "|(-?infinity|nan)\\b"
    }), a.inherit(a.ASM, {
        i: null
    }), a.inherit(a.QSM, {
        i: null
    }), {
        cN: "string",
        b: "`",
        e: "`"
    }, {
        cN: "variable",
        v: [ {
            b: "[#$]" + b
        }, {
            b: "#",
            e: "\\d+",
            i: "\\W"
        } ]
    }, {
        cN: "tag",
        b: "::\\s*",
        e: b,
        i: "\\W"
    }, {
        cN: "attribute",
        v: [ {
            b: "-" + a.UIR,
            r: 0
        }, {
            b: "(\\.\\.\\.)"
        } ]
    }, {
        cN: "subst",
        v: [ {
            b: "->\\s*",
            c: [ i ]
        }, {
            b: ":=|/(?!\\w)=?|[-+*%=<>&|!?\\\\]+",
            r: 0
        } ]
    }, {
        cN: "built_in",
        b: "\\.\\.?\\s*",
        r: 0,
        c: [ i ]
    }, {
        cN: "class",
        bK: "define",
        rE: !0,
        e: "\\(|=>",
        c: [ a.inherit(a.TM, {
            b: a.UIR + "(=(?!>))?"
        }) ]
    } ];
    return {
        aliases: [ "ls", "lassoscript" ],
        cI: !0,
        l: b + "|&[lg]t;",
        k: e,
        c: [ {
            cN: "preprocessor",
            b: d,
            r: 0,
            starts: {
                cN: "markup",
                e: "\\[|" + c,
                rE: !0,
                r: 0,
                c: [ f ]
            }
        }, g, h, {
            cN: "preprocessor",
            b: "\\[no_square_brackets",
            starts: {
                e: "\\[/no_square_brackets\\]",
                l: b + "|&[lg]t;",
                k: e,
                c: [ {
                    cN: "preprocessor",
                    b: d,
                    r: 0,
                    starts: {
                        cN: "markup",
                        e: "\\[noprocess\\]|" + c,
                        rE: !0,
                        c: [ f ]
                    }
                }, g, h ].concat(j)
            }
        }, {
            cN: "preprocessor",
            b: "\\[",
            r: 0
        }, {
            cN: "shebang",
            b: "^#!.+lasso9\\b",
            r: 10
        } ].concat(j)
    };
}), hljs.registerLanguage("less", function(a) {
    var b = "[\\w-]+", c = "(" + b + "|@{" + b + "})+", d = [], e = [], f = function(a) {
        return {
            cN: "string",
            b: "~?" + a + ".*?" + a
        };
    }, g = function(a, b, c) {
        return {
            cN: a,
            b: b,
            r: c
        };
    }, h = function(b, c, d) {
        return a.inherit({
            cN: b,
            b: c + "\\(",
            e: "\\(",
            rB: !0,
            eE: !0,
            r: 0
        }, d);
    }, i = {
        b: "\\(",
        e: "\\)",
        c: e,
        r: 0
    };
    e.push(a.CLCM, a.CBCM, f("'"), f('"'), a.CSSNM, g("hexcolor", "#[0-9A-Fa-f]+\\b"), h("function", "(url|data-uri)", {
        starts: {
            cN: "string",
            e: "[\\)\\n]",
            eE: !0
        }
    }), h("function", b), i, g("variable", "@@?" + b, 10), g("variable", "@{" + b + "}"), g("built_in", "~?`[^`]*?`"), {
        cN: "attribute",
        b: b + "\\s*:",
        e: ":",
        rB: !0,
        eE: !0
    });
    var j = e.concat({
        b: "{",
        e: "}",
        c: d
    }), k = {
        bK: "when",
        eW: !0,
        c: [ {
            bK: "and not"
        } ].concat(e)
    }, l = {
        cN: "attribute",
        b: c,
        e: ":",
        eE: !0,
        c: [ a.CLCM, a.CBCM ],
        i: /\S/,
        starts: {
            e: "[;}]",
            rE: !0,
            c: e,
            i: "[<=$]"
        }
    }, m = {
        cN: "at_rule",
        b: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
        starts: {
            e: "[;{}]",
            rE: !0,
            c: e,
            r: 0
        }
    }, n = {
        cN: "variable",
        v: [ {
            b: "@" + b + "\\s*:",
            r: 15
        }, {
            b: "@" + b
        } ],
        starts: {
            e: "[;}]",
            rE: !0,
            c: j
        }
    }, o = {
        v: [ {
            b: "[\\.#:&\\[]",
            e: "[;{}]"
        }, {
            b: c + "[^;]*{",
            e: "{"
        } ],
        rB: !0,
        rE: !0,
        i: "[<='$\"]",
        c: [ a.CLCM, a.CBCM, k, g("keyword", "all\\b"), g("variable", "@{" + b + "}"), g("tag", c + "%?", 0), g("id", "#" + c), g("class", "\\." + c, 0), g("keyword", "&", 0), h("pseudo", ":not"), h("keyword", ":extend"), g("pseudo", "::?" + c), {
            cN: "attr_selector",
            b: "\\[",
            e: "\\]"
        }, {
            b: "\\(",
            e: "\\)",
            c: j
        }, {
            b: "!important"
        } ]
    };
    return d.push(a.CLCM, a.CBCM, m, n, o, l), {
        cI: !0,
        i: "[=>'/<($\"]",
        c: d
    };
}), hljs.registerLanguage("lisp", function(a) {
    var b = "[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*", c = "\\|[^]*?\\|", d = "(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?", e = {
        cN: "shebang",
        b: "^#!",
        e: "$"
    }, f = {
        cN: "literal",
        b: "\\b(t{1}|nil)\\b"
    }, g = {
        cN: "number",
        v: [ {
            b: d,
            r: 0
        }, {
            b: "#b[0-1]+(/[0-1]+)?"
        }, {
            b: "#o[0-7]+(/[0-7]+)?"
        }, {
            b: "#x[0-9a-f]+(/[0-9a-f]+)?"
        }, {
            b: "#c\\(" + d + " +" + d,
            e: "\\)"
        } ]
    }, h = a.inherit(a.QSM, {
        i: null
    }), i = {
        cN: "comment",
        b: ";",
        e: "$",
        r: 0
    }, j = {
        cN: "variable",
        b: "\\*",
        e: "\\*"
    }, k = {
        cN: "keyword",
        b: "[:&]" + b
    }, l = {
        b: c
    }, m = {
        b: "\\(",
        e: "\\)",
        c: [ "self", f, h, g ]
    }, n = {
        cN: "quoted",
        c: [ g, h, j, k, m ],
        v: [ {
            b: "['`]\\(",
            e: "\\)"
        }, {
            b: "\\(quote ",
            e: "\\)",
            k: "quote"
        }, {
            b: "'" + c
        } ]
    }, o = {
        cN: "quoted",
        b: "'" + b
    }, p = {
        cN: "list",
        b: "\\(",
        e: "\\)"
    }, q = {
        eW: !0,
        r: 0
    };
    return p.c = [ {
        cN: "keyword",
        v: [ {
            b: b
        }, {
            b: c
        } ]
    }, q ], q.c = [ n, o, p, f, g, h, i, j, k, l ], {
        i: /\S/,
        c: [ g, e, f, h, i, n, o, p ]
    };
}), hljs.registerLanguage("livecodeserver", function(a) {
    var b = {
        cN: "variable",
        b: "\\b[gtps][A-Z]+[A-Za-z0-9_\\-]*\\b|\\$_[A-Z]+",
        r: 0
    }, c = {
        cN: "comment",
        e: "$",
        v: [ a.CBCM, a.HCM, {
            b: "--"
        }, {
            b: "[^:]//"
        } ]
    }, d = a.inherit(a.TM, {
        v: [ {
            b: "\\b_*rig[A-Z]+[A-Za-z0-9_\\-]*"
        }, {
            b: "\\b_[a-z0-9\\-]+"
        } ]
    }), e = a.inherit(a.TM, {
        b: "\\b([A-Za-z0-9_\\-]+)\\b"
    });
    return {
        cI: !1,
        k: {
            keyword: "after byte bytes english the until http forever descending using line real8 with seventh for stdout finally element word fourth before black ninth sixth characters chars stderr uInt1 uInt1s uInt2 uInt2s stdin string lines relative rel any fifth items from middle mid at else of catch then third it file milliseconds seconds second secs sec int1 int1s int4 int4s internet int2 int2s normal text item last long detailed effective uInt4 uInt4s repeat end repeat URL in try into switch to words https token binfile each tenth as ticks tick system real4 by dateItems without char character ascending eighth whole dateTime numeric short first ftp integer abbreviated abbr abbrev private case while if",
            constant: "SIX TEN FORMFEED NINE ZERO NONE SPACE FOUR FALSE COLON CRLF PI COMMA ENDOFFILE EOF EIGHT FIVE QUOTE EMPTY ONE TRUE RETURN CR LINEFEED RIGHT BACKSLASH NULL SEVEN TAB THREE TWO six ten formfeed nine zero none space four false colon crlf pi comma endoffile eof eight five quote empty one true return cr linefeed right backslash null seven tab three two RIVERSION RISTATE FILE_READ_MODE FILE_WRITE_MODE FILE_WRITE_MODE DIR_WRITE_MODE FILE_READ_UMASK FILE_WRITE_UMASK DIR_READ_UMASK DIR_WRITE_UMASK",
            operator: "div mod wrap and or bitAnd bitNot bitOr bitXor among not in a an within contains ends with begins the keys of keys",
            built_in: "put abs acos aliasReference annuity arrayDecode arrayEncode asin atan atan2 average avg base64Decode base64Encode baseConvert binaryDecode binaryEncode byteToNum cachedURL cachedURLs charToNum cipherNames commandNames compound compress constantNames cos date dateFormat decompress directories diskSpace DNSServers exp exp1 exp2 exp10 extents files flushEvents folders format functionNames global globals hasMemory hostAddress hostAddressToName hostName hostNameToAddress isNumber ISOToMac itemOffset keys len length libURLErrorData libUrlFormData libURLftpCommand libURLLastHTTPHeaders libURLLastRHHeaders libUrlMultipartFormAddPart libUrlMultipartFormData libURLVersion lineOffset ln ln1 localNames log log2 log10 longFilePath lower macToISO matchChunk matchText matrixMultiply max md5Digest median merge millisec millisecs millisecond milliseconds min monthNames num number numToByte numToChar offset open openfiles openProcesses openProcessIDs openSockets paramCount param params peerAddress pendingMessages platform processID random randomBytes replaceText result revCreateXMLTree revCreateXMLTreeFromFile revCurrentRecord revCurrentRecordIsFirst revCurrentRecordIsLast revDatabaseColumnCount revDatabaseColumnIsNull revDatabaseColumnLengths revDatabaseColumnNames revDatabaseColumnNamed revDatabaseColumnNumbered revDatabaseColumnTypes revDatabaseConnectResult revDatabaseCursors revDatabaseID revDatabaseTableNames revDatabaseType revDataFromQuery revdb_closeCursor revdb_columnbynumber revdb_columncount revdb_columnisnull revdb_columnlengths revdb_columnnames revdb_columntypes revdb_commit revdb_connect revdb_connections revdb_connectionerr revdb_currentrecord revdb_cursorconnection revdb_cursorerr revdb_cursors revdb_dbtype revdb_disconnect revdb_execute revdb_iseof revdb_isbof revdb_movefirst revdb_movelast revdb_movenext revdb_moveprev revdb_query revdb_querylist revdb_recordcount revdb_rollback revdb_tablenames revGetDatabaseDriverPath revNumberOfRecords revOpenDatabase revOpenDatabases revQueryDatabase revQueryDatabaseBlob revQueryResult revQueryIsAtStart revQueryIsAtEnd revUnixFromMacPath revXMLAttribute revXMLAttributes revXMLAttributeValues revXMLChildContents revXMLChildNames revXMLFirstChild revXMLMatchingNode revXMLNextSibling revXMLNodeContents revXMLNumberOfChildren revXMLParent revXMLPreviousSibling revXMLRootNode revXMLRPC_CreateRequest revXMLRPC_Documents revXMLRPC_Error revXMLRPC_Execute revXMLRPC_GetHost revXMLRPC_GetMethod revXMLRPC_GetParam revXMLText revXMLRPC_GetParamCount revXMLRPC_GetParamNode revXMLRPC_GetParamType revXMLRPC_GetPath revXMLRPC_GetPort revXMLRPC_GetProtocol revXMLRPC_GetRequest revXMLRPC_GetResponse revXMLRPC_GetSocket revXMLTree revXMLTrees revXMLValidateDTD revZipDescribeItem revZipEnumerateItems revZipOpenArchives round sec secs seconds sha1Digest shell shortFilePath sin specialFolderPath sqrt standardDeviation statRound stdDev sum sysError systemVersion tan tempName tick ticks time to toLower toUpper transpose trunc uniDecode uniEncode upper URLDecode URLEncode URLStatus value variableNames version waitDepth weekdayNames wordOffset add breakpoint cancel clear local variable file word line folder directory URL close socket process combine constant convert create new alias folder directory decrypt delete variable word line folder directory URL dispatch divide do encrypt filter get include intersect kill libURLDownloadToFile libURLFollowHttpRedirects libURLftpUpload libURLftpUploadFile libURLresetAll libUrlSetAuthCallback libURLSetCustomHTTPHeaders libUrlSetExpect100 libURLSetFTPListCommand libURLSetFTPMode libURLSetFTPStopTime libURLSetStatusCallback load multiply socket process post seek rel relative read from process rename replace require resetAll revAddXMLNode revAppendXML revCloseCursor revCloseDatabase revCommitDatabase revCopyFile revCopyFolder revCopyXMLNode revDeleteFolder revDeleteXMLNode revDeleteAllXMLTrees revDeleteXMLTree revExecuteSQL revGoURL revInsertXMLNode revMoveFolder revMoveToFirstRecord revMoveToLastRecord revMoveToNextRecord revMoveToPreviousRecord revMoveToRecord revMoveXMLNode revPutIntoXMLNode revRollBackDatabase revSetDatabaseDriverPath revSetXMLAttribute revXMLRPC_AddParam revXMLRPC_DeleteAllDocuments revXMLAddDTD revXMLRPC_Free revXMLRPC_FreeAll revXMLRPC_DeleteDocument revXMLRPC_DeleteParam revXMLRPC_SetHost revXMLRPC_SetMethod revXMLRPC_SetPort revXMLRPC_SetProtocol revXMLRPC_SetSocket revZipAddItemWithData revZipAddItemWithFile revZipAddUncompressedItemWithData revZipAddUncompressedItemWithFile revZipCancel revZipCloseArchive revZipDeleteItem revZipExtractItemToFile revZipExtractItemToVariable revZipSetProgressCallback revZipRenameItem revZipReplaceItemWithData revZipReplaceItemWithFile revZipOpenArchive send set sort split subtract union unload wait write"
        },
        c: [ b, {
            cN: "keyword",
            b: "\\bend\\sif\\b"
        }, {
            cN: "function",
            bK: "function",
            e: "$",
            c: [ b, e, a.ASM, a.QSM, a.BNM, a.CNM, d ]
        }, {
            cN: "function",
            bK: "end",
            e: "$",
            c: [ e, d ]
        }, {
            cN: "command",
            bK: "command on",
            e: "$",
            c: [ b, e, a.ASM, a.QSM, a.BNM, a.CNM, d ]
        }, {
            cN: "command",
            bK: "end",
            e: "$",
            c: [ e, d ]
        }, {
            cN: "preprocessor",
            b: "<\\?rev|<\\?lc|<\\?livecode",
            r: 10
        }, {
            cN: "preprocessor",
            b: "<\\?"
        }, {
            cN: "preprocessor",
            b: "\\?>"
        }, c, a.ASM, a.QSM, a.BNM, a.CNM, d ],
        i: ";$|^\\[|^="
    };
}), hljs.registerLanguage("livescript", function(a) {
    var b = {
        keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger case default function var with then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super case default function var void const let enum export import native __hasProp __extends __slice __bind __indexOf",
        literal: "true false null undefined yes no on off it that void",
        built_in: "npm require console print module global window document"
    }, c = "[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*", d = a.inherit(a.TM, {
        b: c
    }), e = {
        cN: "subst",
        b: /#\{/,
        e: /\}/,
        k: b
    }, f = {
        cN: "subst",
        b: /#[A-Za-z$_]/,
        e: /(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
        k: b
    }, g = [ a.BNM, {
        cN: "number",
        b: "(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",
        r: 0,
        starts: {
            e: "(\\s*/)?",
            r: 0
        }
    }, {
        cN: "string",
        v: [ {
            b: /'''/,
            e: /'''/,
            c: [ a.BE ]
        }, {
            b: /'/,
            e: /'/,
            c: [ a.BE ]
        }, {
            b: /"""/,
            e: /"""/,
            c: [ a.BE, e, f ]
        }, {
            b: /"/,
            e: /"/,
            c: [ a.BE, e, f ]
        }, {
            b: /\\/,
            e: /(\s|$)/,
            eE: !0
        } ]
    }, {
        cN: "pi",
        v: [ {
            b: "//",
            e: "//[gim]*",
            c: [ e, a.HCM ]
        }, {
            b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
        } ]
    }, {
        cN: "property",
        b: "@" + c
    }, {
        b: "``",
        e: "``",
        eB: !0,
        eE: !0,
        sL: "javascript"
    } ];
    e.c = g;
    var h = {
        cN: "params",
        b: "\\(",
        rB: !0,
        c: [ {
            b: /\(/,
            e: /\)/,
            k: b,
            c: [ "self" ].concat(g)
        } ]
    };
    return {
        aliases: [ "ls" ],
        k: b,
        i: /\/\*/,
        c: g.concat([ {
            cN: "comment",
            b: "\\/\\*",
            e: "\\*\\/"
        }, a.HCM, {
            cN: "function",
            c: [ d, h ],
            rB: !0,
            v: [ {
                b: "(" + c + "\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?",
                e: "\\->\\*?"
            }, {
                b: "(" + c + "\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?",
                e: "[-~]{1,2}>\\*?"
            }, {
                b: "(" + c + "\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?",
                e: "!?[-~]{1,2}>\\*?"
            } ]
        }, {
            cN: "class",
            bK: "class",
            e: "$",
            i: /[:="\[\]]/,
            c: [ {
                bK: "extends",
                eW: !0,
                i: /[:="\[\]]/,
                c: [ d ]
            }, d ]
        }, {
            cN: "attribute",
            b: c + ":",
            e: ":",
            rB: !0,
            rE: !0,
            r: 0
        } ])
    };
}), hljs.registerLanguage("lua", function(a) {
    var b = "\\[=*\\[", c = "\\]=*\\]", d = {
        b: b,
        e: c,
        c: [ "self" ]
    }, e = [ {
        cN: "comment",
        b: "--(?!" + b + ")",
        e: "$"
    }, {
        cN: "comment",
        b: "--" + b,
        e: c,
        c: [ d ],
        r: 10
    } ];
    return {
        l: a.UIR,
        k: {
            keyword: "and break do else elseif end false for if in local nil not or repeat return then true until while",
            built_in: "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"
        },
        c: e.concat([ {
            cN: "function",
            bK: "function",
            e: "\\)",
            c: [ a.inherit(a.TM, {
                b: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
            }), {
                cN: "params",
                b: "\\(",
                eW: !0,
                c: e
            } ].concat(e)
        }, a.CNM, a.ASM, a.QSM, {
            cN: "string",
            b: b,
            e: c,
            c: [ d ],
            r: 5
        } ])
    };
}), hljs.registerLanguage("makefile", function(a) {
    var b = {
        cN: "variable",
        b: /\$\(/,
        e: /\)/,
        c: [ a.BE ]
    };
    return {
        aliases: [ "mk", "mak" ],
        c: [ a.HCM, {
            b: /^\w+\s*\W*=/,
            rB: !0,
            r: 0,
            starts: {
                cN: "constant",
                e: /\s*\W*=/,
                eE: !0,
                starts: {
                    e: /$/,
                    r: 0,
                    c: [ b ]
                }
            }
        }, {
            cN: "title",
            b: /^[\w]+:\s*$/
        }, {
            cN: "phony",
            b: /^\.PHONY:/,
            e: /$/,
            k: ".PHONY",
            l: /[\.\w]+/
        }, {
            b: /^\t+/,
            e: /$/,
            r: 0,
            c: [ a.QSM, b ]
        } ]
    };
}), hljs.registerLanguage("mathematica", function(a) {
    return {
        aliases: [ "mma" ],
        l: "(\\$|\\b)" + a.IR + "\\b",
        k: "AbelianGroup Abort AbortKernels AbortProtect Above Abs Absolute AbsoluteCorrelation AbsoluteCorrelationFunction AbsoluteCurrentValue AbsoluteDashing AbsoluteFileName AbsoluteOptions AbsolutePointSize AbsoluteThickness AbsoluteTime AbsoluteTiming AccountingForm Accumulate Accuracy AccuracyGoal ActionDelay ActionMenu ActionMenuBox ActionMenuBoxOptions Active ActiveItem ActiveStyle AcyclicGraphQ AddOnHelpPath AddTo AdjacencyGraph AdjacencyList AdjacencyMatrix AdjustmentBox AdjustmentBoxOptions AdjustTimeSeriesForecast AffineTransform After AiryAi AiryAiPrime AiryAiZero AiryBi AiryBiPrime AiryBiZero AlgebraicIntegerQ AlgebraicNumber AlgebraicNumberDenominator AlgebraicNumberNorm AlgebraicNumberPolynomial AlgebraicNumberTrace AlgebraicRules AlgebraicRulesData Algebraics AlgebraicUnitQ Alignment AlignmentMarker AlignmentPoint All AllowedDimensions AllowGroupClose AllowInlineCells AllowKernelInitialization AllowReverseGroupClose AllowScriptLevelChange AlphaChannel AlternatingGroup AlternativeHypothesis Alternatives AmbientLight Analytic AnchoredSearch And AndersonDarlingTest AngerJ AngleBracket AngularGauge Animate AnimationCycleOffset AnimationCycleRepetitions AnimationDirection AnimationDisplayTime AnimationRate AnimationRepetitions AnimationRunning Animator AnimatorBox AnimatorBoxOptions AnimatorElements Annotation Annuity AnnuityDue Antialiasing Antisymmetric Apart ApartSquareFree Appearance AppearanceElements AppellF1 Append AppendTo Apply ArcCos ArcCosh ArcCot ArcCoth ArcCsc ArcCsch ArcSec ArcSech ArcSin ArcSinDistribution ArcSinh ArcTan ArcTanh Arg ArgMax ArgMin ArgumentCountQ ARIMAProcess ArithmeticGeometricMean ARMAProcess ARProcess Array ArrayComponents ArrayDepth ArrayFlatten ArrayPad ArrayPlot ArrayQ ArrayReshape ArrayRules Arrays Arrow Arrow3DBox ArrowBox Arrowheads AspectRatio AspectRatioFixed Assert Assuming Assumptions AstronomicalData Asynchronous AsynchronousTaskObject AsynchronousTasks AtomQ Attributes AugmentedSymmetricPolynomial AutoAction AutoDelete AutoEvaluateEvents AutoGeneratedPackage AutoIndent AutoIndentSpacings AutoItalicWords AutoloadPath AutoMatch Automatic AutomaticImageSize AutoMultiplicationSymbol AutoNumberFormatting AutoOpenNotebooks AutoOpenPalettes AutorunSequencing AutoScaling AutoScroll AutoSpacing AutoStyleOptions AutoStyleWords Axes AxesEdge AxesLabel AxesOrigin AxesStyle Axis BabyMonsterGroupB Back Background BackgroundTasksSettings Backslash Backsubstitution Backward Band BandpassFilter BandstopFilter BarabasiAlbertGraphDistribution BarChart BarChart3D BarLegend BarlowProschanImportance BarnesG BarOrigin BarSpacing BartlettHannWindow BartlettWindow BaseForm Baseline BaselinePosition BaseStyle BatesDistribution BattleLemarieWavelet Because BeckmannDistribution Beep Before Begin BeginDialogPacket BeginFrontEndInteractionPacket BeginPackage BellB BellY Below BenfordDistribution BeniniDistribution BenktanderGibratDistribution BenktanderWeibullDistribution BernoulliB BernoulliDistribution BernoulliGraphDistribution BernoulliProcess BernsteinBasis BesselFilterModel BesselI BesselJ BesselJZero BesselK BesselY BesselYZero Beta BetaBinomialDistribution BetaDistribution BetaNegativeBinomialDistribution BetaPrimeDistribution BetaRegularized BetweennessCentrality BezierCurve BezierCurve3DBox BezierCurve3DBoxOptions BezierCurveBox BezierCurveBoxOptions BezierFunction BilateralFilter Binarize BinaryFormat BinaryImageQ BinaryRead BinaryReadList BinaryWrite BinCounts BinLists Binomial BinomialDistribution BinomialProcess BinormalDistribution BiorthogonalSplineWavelet BipartiteGraphQ BirnbaumImportance BirnbaumSaundersDistribution BitAnd BitClear BitGet BitLength BitNot BitOr BitSet BitShiftLeft BitShiftRight BitXor Black BlackmanHarrisWindow BlackmanNuttallWindow BlackmanWindow Blank BlankForm BlankNullSequence BlankSequence Blend Block BlockRandom BlomqvistBeta BlomqvistBetaTest Blue Blur BodePlot BohmanWindow Bold Bookmarks Boole BooleanConsecutiveFunction BooleanConvert BooleanCountingFunction BooleanFunction BooleanGraph BooleanMaxterms BooleanMinimize BooleanMinterms Booleans BooleanTable BooleanVariables BorderDimensions BorelTannerDistribution Bottom BottomHatTransform BoundaryStyle Bounds Box BoxBaselineShift BoxData BoxDimensions Boxed Boxes BoxForm BoxFormFormatTypes BoxFrame BoxID BoxMargins BoxMatrix BoxRatios BoxRotation BoxRotationPoint BoxStyle BoxWhiskerChart Bra BracketingBar BraKet BrayCurtisDistance BreadthFirstScan Break Brown BrownForsytheTest BrownianBridgeProcess BrowserCategory BSplineBasis BSplineCurve BSplineCurve3DBox BSplineCurveBox BSplineCurveBoxOptions BSplineFunction BSplineSurface BSplineSurface3DBox BubbleChart BubbleChart3D BubbleScale BubbleSizes BulletGauge BusinessDayQ ButterflyGraph ButterworthFilterModel Button ButtonBar ButtonBox ButtonBoxOptions ButtonCell ButtonContents ButtonData ButtonEvaluator ButtonExpandable ButtonFrame ButtonFunction ButtonMargins ButtonMinHeight ButtonNote ButtonNotebook ButtonSource ButtonStyle ButtonStyleMenuListing Byte ByteCount ByteOrdering C CachedValue CacheGraphics CalendarData CalendarType CallPacket CanberraDistance Cancel CancelButton CandlestickChart Cap CapForm CapitalDifferentialD CardinalBSplineBasis CarmichaelLambda Cases Cashflow Casoratian Catalan CatalanNumber Catch CauchyDistribution CauchyWindow CayleyGraph CDF CDFDeploy CDFInformation CDFWavelet Ceiling Cell CellAutoOverwrite CellBaseline CellBoundingBox CellBracketOptions CellChangeTimes CellContents CellContext CellDingbat CellDynamicExpression CellEditDuplicate CellElementsBoundingBox CellElementSpacings CellEpilog CellEvaluationDuplicate CellEvaluationFunction CellEventActions CellFrame CellFrameColor CellFrameLabelMargins CellFrameLabels CellFrameMargins CellGroup CellGroupData CellGrouping CellGroupingRules CellHorizontalScrolling CellID CellLabel CellLabelAutoDelete CellLabelMargins CellLabelPositioning CellMargins CellObject CellOpen CellPrint CellProlog Cells CellSize CellStyle CellTags CellularAutomaton CensoredDistribution Censoring Center CenterDot CentralMoment CentralMomentGeneratingFunction CForm ChampernowneNumber ChanVeseBinarize Character CharacterEncoding CharacterEncodingsPath CharacteristicFunction CharacteristicPolynomial CharacterRange Characters ChartBaseStyle ChartElementData ChartElementDataFunction ChartElementFunction ChartElements ChartLabels ChartLayout ChartLegends ChartStyle Chebyshev1FilterModel Chebyshev2FilterModel ChebyshevDistance ChebyshevT ChebyshevU Check CheckAbort CheckAll Checkbox CheckboxBar CheckboxBox CheckboxBoxOptions ChemicalData ChessboardDistance ChiDistribution ChineseRemainder ChiSquareDistribution ChoiceButtons ChoiceDialog CholeskyDecomposition Chop Circle CircleBox CircleDot CircleMinus CirclePlus CircleTimes CirculantGraph CityData Clear ClearAll ClearAttributes ClearSystemCache ClebschGordan ClickPane Clip ClipboardNotebook ClipFill ClippingStyle ClipPlanes ClipRange Clock ClockGauge ClockwiseContourIntegral Close Closed CloseKernels ClosenessCentrality Closing ClosingAutoSave ClosingEvent ClusteringComponents CMYKColor Coarse Coefficient CoefficientArrays CoefficientDomain CoefficientList CoefficientRules CoifletWavelet Collect Colon ColonForm ColorCombine ColorConvert ColorData ColorDataFunction ColorFunction ColorFunctionScaling Colorize ColorNegate ColorOutput ColorProfileData ColorQuantize ColorReplace ColorRules ColorSelectorSettings ColorSeparate ColorSetter ColorSetterBox ColorSetterBoxOptions ColorSlider ColorSpace Column ColumnAlignments ColumnBackgrounds ColumnForm ColumnLines ColumnsEqual ColumnSpacings ColumnWidths CommonDefaultFormatTypes Commonest CommonestFilter CommonUnits CommunityBoundaryStyle CommunityGraphPlot CommunityLabels CommunityRegionStyle CompatibleUnitQ CompilationOptions CompilationTarget Compile Compiled CompiledFunction Complement CompleteGraph CompleteGraphQ CompleteKaryTree CompletionsListPacket Complex Complexes ComplexExpand ComplexInfinity ComplexityFunction ComponentMeasurements ComponentwiseContextMenu Compose ComposeList ComposeSeries Composition CompoundExpression CompoundPoissonDistribution CompoundPoissonProcess CompoundRenewalProcess Compress CompressedData Condition ConditionalExpression Conditioned Cone ConeBox ConfidenceLevel ConfidenceRange ConfidenceTransform ConfigurationPath Congruent Conjugate ConjugateTranspose Conjunction Connect ConnectedComponents ConnectedGraphQ ConnesWindow ConoverTest ConsoleMessage ConsoleMessagePacket ConsolePrint Constant ConstantArray Constants ConstrainedMax ConstrainedMin ContentPadding ContentsBoundingBox ContentSelectable ContentSize Context ContextMenu Contexts ContextToFilename ContextToFileName Continuation Continue ContinuedFraction ContinuedFractionK ContinuousAction ContinuousMarkovProcess ContinuousTimeModelQ ContinuousWaveletData ContinuousWaveletTransform ContourDetect ContourGraphics ContourIntegral ContourLabels ContourLines ContourPlot ContourPlot3D Contours ContourShading ContourSmoothing ContourStyle ContraharmonicMean Control ControlActive ControlAlignment ControllabilityGramian ControllabilityMatrix ControllableDecomposition ControllableModelQ ControllerDuration ControllerInformation ControllerInformationData ControllerLinking ControllerManipulate ControllerMethod ControllerPath ControllerState ControlPlacement ControlsRendering ControlType Convergents ConversionOptions ConversionRules ConvertToBitmapPacket ConvertToPostScript ConvertToPostScriptPacket Convolve ConwayGroupCo1 ConwayGroupCo2 ConwayGroupCo3 CoordinateChartData CoordinatesToolOptions CoordinateTransform CoordinateTransformData CoprimeQ Coproduct CopulaDistribution Copyable CopyDirectory CopyFile CopyTag CopyToClipboard CornerFilter CornerNeighbors Correlation CorrelationDistance CorrelationFunction CorrelationTest Cos Cosh CoshIntegral CosineDistance CosineWindow CosIntegral Cot Coth Count CounterAssignments CounterBox CounterBoxOptions CounterClockwiseContourIntegral CounterEvaluator CounterFunction CounterIncrements CounterStyle CounterStyleMenuListing CountRoots CountryData Covariance CovarianceEstimatorFunction CovarianceFunction CoxianDistribution CoxIngersollRossProcess CoxModel CoxModelFit CramerVonMisesTest CreateArchive CreateDialog CreateDirectory CreateDocument CreateIntermediateDirectories CreatePalette CreatePalettePacket CreateScheduledTask CreateTemporary CreateWindow CriticalityFailureImportance CriticalitySuccessImportance CriticalSection Cross CrossingDetect CrossMatrix Csc Csch CubeRoot Cubics Cuboid CuboidBox Cumulant CumulantGeneratingFunction Cup CupCap Curl CurlyDoubleQuote CurlyQuote CurrentImage CurrentlySpeakingPacket CurrentValue CurvatureFlowFilter CurveClosed Cyan CycleGraph CycleIndexPolynomial Cycles CyclicGroup Cyclotomic Cylinder CylinderBox CylindricalDecomposition D DagumDistribution DamerauLevenshteinDistance DampingFactor Darker Dashed Dashing DataCompression DataDistribution DataRange DataReversed Date DateDelimiters DateDifference DateFunction DateList DateListLogPlot DateListPlot DatePattern DatePlus DateRange DateString DateTicksFormat DaubechiesWavelet DavisDistribution DawsonF DayCount DayCountConvention DayMatchQ DayName DayPlus DayRange DayRound DeBruijnGraph Debug DebugTag Decimal DeclareKnownSymbols DeclarePackage Decompose Decrement DedekindEta Default DefaultAxesStyle DefaultBaseStyle DefaultBoxStyle DefaultButton DefaultColor DefaultControlPlacement DefaultDuplicateCellStyle DefaultDuration DefaultElement DefaultFaceGridsStyle DefaultFieldHintStyle DefaultFont DefaultFontProperties DefaultFormatType DefaultFormatTypeForStyle DefaultFrameStyle DefaultFrameTicksStyle DefaultGridLinesStyle DefaultInlineFormatType DefaultInputFormatType DefaultLabelStyle DefaultMenuStyle DefaultNaturalLanguage DefaultNewCellStyle DefaultNewInlineCellStyle DefaultNotebook DefaultOptions DefaultOutputFormatType DefaultStyle DefaultStyleDefinitions DefaultTextFormatType DefaultTextInlineFormatType DefaultTicksStyle DefaultTooltipStyle DefaultValues Defer DefineExternal DefineInputStreamMethod DefineOutputStreamMethod Definition Degree DegreeCentrality DegreeGraphDistribution DegreeLexicographic DegreeReverseLexicographic Deinitialization Del Deletable Delete DeleteBorderComponents DeleteCases DeleteContents DeleteDirectory DeleteDuplicates DeleteFile DeleteSmallComponents DeleteWithContents DeletionWarning Delimiter DelimiterFlashTime DelimiterMatching Delimiters Denominator DensityGraphics DensityHistogram DensityPlot DependentVariables Deploy Deployed Depth DepthFirstScan Derivative DerivativeFilter DescriptorStateSpace DesignMatrix Det DGaussianWavelet DiacriticalPositioning Diagonal DiagonalMatrix Dialog DialogIndent DialogInput DialogLevel DialogNotebook DialogProlog DialogReturn DialogSymbols Diamond DiamondMatrix DiceDissimilarity DictionaryLookup DifferenceDelta DifferenceOrder DifferenceRoot DifferenceRootReduce Differences DifferentialD DifferentialRoot DifferentialRootReduce DifferentiatorFilter DigitBlock DigitBlockMinimum DigitCharacter DigitCount DigitQ DihedralGroup Dilation Dimensions DiracComb DiracDelta DirectedEdge DirectedEdges DirectedGraph DirectedGraphQ DirectedInfinity Direction Directive Directory DirectoryName DirectoryQ DirectoryStack DirichletCharacter DirichletConvolve DirichletDistribution DirichletL DirichletTransform DirichletWindow DisableConsolePrintPacket DiscreteChirpZTransform DiscreteConvolve DiscreteDelta DiscreteHadamardTransform DiscreteIndicator DiscreteLQEstimatorGains DiscreteLQRegulatorGains DiscreteLyapunovSolve DiscreteMarkovProcess DiscretePlot DiscretePlot3D DiscreteRatio DiscreteRiccatiSolve DiscreteShift DiscreteTimeModelQ DiscreteUniformDistribution DiscreteVariables DiscreteWaveletData DiscreteWaveletPacketTransform DiscreteWaveletTransform Discriminant Disjunction Disk DiskBox DiskMatrix Dispatch DispersionEstimatorFunction Display DisplayAllSteps DisplayEndPacket DisplayFlushImagePacket DisplayForm DisplayFunction DisplayPacket DisplayRules DisplaySetSizePacket DisplayString DisplayTemporary DisplayWith DisplayWithRef DisplayWithVariable DistanceFunction DistanceTransform Distribute Distributed DistributedContexts DistributeDefinitions DistributionChart DistributionDomain DistributionFitTest DistributionParameterAssumptions DistributionParameterQ Dithering Div Divergence Divide DivideBy Dividers Divisible Divisors DivisorSigma DivisorSum DMSList DMSString Do DockedCells DocumentNotebook DominantColors DOSTextFormat Dot DotDashed DotEqual Dotted DoubleBracketingBar DoubleContourIntegral DoubleDownArrow DoubleLeftArrow DoubleLeftRightArrow DoubleLeftTee DoubleLongLeftArrow DoubleLongLeftRightArrow DoubleLongRightArrow DoubleRightArrow DoubleRightTee DoubleUpArrow DoubleUpDownArrow DoubleVerticalBar DoublyInfinite Down DownArrow DownArrowBar DownArrowUpArrow DownLeftRightVector DownLeftTeeVector DownLeftVector DownLeftVectorBar DownRightTeeVector DownRightVector DownRightVectorBar Downsample DownTee DownTeeArrow DownValues DragAndDrop DrawEdges DrawFrontFaces DrawHighlighted Drop DSolve Dt DualLinearProgramming DualSystemsModel DumpGet DumpSave DuplicateFreeQ Dynamic DynamicBox DynamicBoxOptions DynamicEvaluationTimeout DynamicLocation DynamicModule DynamicModuleBox DynamicModuleBoxOptions DynamicModuleParent DynamicModuleValues DynamicName DynamicNamespace DynamicReference DynamicSetting DynamicUpdating DynamicWrapper DynamicWrapperBox DynamicWrapperBoxOptions E EccentricityCentrality EdgeAdd EdgeBetweennessCentrality EdgeCapacity EdgeCapForm EdgeColor EdgeConnectivity EdgeCost EdgeCount EdgeCoverQ EdgeDashing EdgeDelete EdgeDetect EdgeForm EdgeIndex EdgeJoinForm EdgeLabeling EdgeLabels EdgeLabelStyle EdgeList EdgeOpacity EdgeQ EdgeRenderingFunction EdgeRules EdgeShapeFunction EdgeStyle EdgeThickness EdgeWeight Editable EditButtonSettings EditCellTagsSettings EditDistance EffectiveInterest Eigensystem Eigenvalues EigenvectorCentrality Eigenvectors Element ElementData Eliminate EliminationOrder EllipticE EllipticExp EllipticExpPrime EllipticF EllipticFilterModel EllipticK EllipticLog EllipticNomeQ EllipticPi EllipticReducedHalfPeriods EllipticTheta EllipticThetaPrime EmitSound EmphasizeSyntaxErrors EmpiricalDistribution Empty EmptyGraphQ EnableConsolePrintPacket Enabled Encode End EndAdd EndDialogPacket EndFrontEndInteractionPacket EndOfFile EndOfLine EndOfString EndPackage EngineeringForm Enter EnterExpressionPacket EnterTextPacket Entropy EntropyFilter Environment Epilog Equal EqualColumns EqualRows EqualTilde EquatedTo Equilibrium EquirippleFilterKernel Equivalent Erf Erfc Erfi ErlangB ErlangC ErlangDistribution Erosion ErrorBox ErrorBoxOptions ErrorNorm ErrorPacket ErrorsDialogSettings EstimatedDistribution EstimatedProcess EstimatorGains EstimatorRegulator EuclideanDistance EulerE EulerGamma EulerianGraphQ EulerPhi Evaluatable Evaluate Evaluated EvaluatePacket EvaluationCell EvaluationCompletionAction EvaluationElements EvaluationMode EvaluationMonitor EvaluationNotebook EvaluationObject EvaluationOrder Evaluator EvaluatorNames EvenQ EventData EventEvaluator EventHandler EventHandlerTag EventLabels ExactBlackmanWindow ExactNumberQ ExactRootIsolation ExampleData Except ExcludedForms ExcludePods Exclusions ExclusionsStyle Exists Exit ExitDialog Exp Expand ExpandAll ExpandDenominator ExpandFileName ExpandNumerator Expectation ExpectationE ExpectedValue ExpGammaDistribution ExpIntegralE ExpIntegralEi Exponent ExponentFunction ExponentialDistribution ExponentialFamily ExponentialGeneratingFunction ExponentialMovingAverage ExponentialPowerDistribution ExponentPosition ExponentStep Export ExportAutoReplacements ExportPacket ExportString Expression ExpressionCell ExpressionPacket ExpToTrig ExtendedGCD Extension ExtentElementFunction ExtentMarkers ExtentSize ExternalCall ExternalDataCharacterEncoding Extract ExtractArchive ExtremeValueDistribution FaceForm FaceGrids FaceGridsStyle Factor FactorComplete Factorial Factorial2 FactorialMoment FactorialMomentGeneratingFunction FactorialPower FactorInteger FactorList FactorSquareFree FactorSquareFreeList FactorTerms FactorTermsList Fail FailureDistribution False FARIMAProcess FEDisableConsolePrintPacket FeedbackSector FeedbackSectorStyle FeedbackType FEEnableConsolePrintPacket Fibonacci FieldHint FieldHintStyle FieldMasked FieldSize File FileBaseName FileByteCount FileDate FileExistsQ FileExtension FileFormat FileHash FileInformation FileName FileNameDepth FileNameDialogSettings FileNameDrop FileNameJoin FileNames FileNameSetter FileNameSplit FileNameTake FilePrint FileType FilledCurve FilledCurveBox Filling FillingStyle FillingTransform FilterRules FinancialBond FinancialData FinancialDerivative FinancialIndicator Find FindArgMax FindArgMin FindClique FindClusters FindCurvePath FindDistributionParameters FindDivisions FindEdgeCover FindEdgeCut FindEulerianCycle FindFaces FindFile FindFit FindGeneratingFunction FindGeoLocation FindGeometricTransform FindGraphCommunities FindGraphIsomorphism FindGraphPartition FindHamiltonianCycle FindIndependentEdgeSet FindIndependentVertexSet FindInstance FindIntegerNullVector FindKClan FindKClique FindKClub FindKPlex FindLibrary FindLinearRecurrence FindList FindMaximum FindMaximumFlow FindMaxValue FindMinimum FindMinimumCostFlow FindMinimumCut FindMinValue FindPermutation FindPostmanTour FindProcessParameters FindRoot FindSequenceFunction FindSettings FindShortestPath FindShortestTour FindThreshold FindVertexCover FindVertexCut Fine FinishDynamic FiniteAbelianGroupCount FiniteGroupCount FiniteGroupData First FirstPassageTimeDistribution FischerGroupFi22 FischerGroupFi23 FischerGroupFi24Prime FisherHypergeometricDistribution FisherRatioTest FisherZDistribution Fit FitAll FittedModel FixedPoint FixedPointList FlashSelection Flat Flatten FlattenAt FlatTopWindow FlipView Floor FlushPrintOutputPacket Fold FoldList Font FontColor FontFamily FontForm FontName FontOpacity FontPostScriptName FontProperties FontReencoding FontSize FontSlant FontSubstitutions FontTracking FontVariations FontWeight For ForAll Format FormatRules FormatType FormatTypeAutoConvert FormatValues FormBox FormBoxOptions FortranForm Forward ForwardBackward Fourier FourierCoefficient FourierCosCoefficient FourierCosSeries FourierCosTransform FourierDCT FourierDCTFilter FourierDCTMatrix FourierDST FourierDSTMatrix FourierMatrix FourierParameters FourierSequenceTransform FourierSeries FourierSinCoefficient FourierSinSeries FourierSinTransform FourierTransform FourierTrigSeries FractionalBrownianMotionProcess FractionalPart FractionBox FractionBoxOptions FractionLine Frame FrameBox FrameBoxOptions Framed FrameInset FrameLabel Frameless FrameMargins FrameStyle FrameTicks FrameTicksStyle FRatioDistribution FrechetDistribution FreeQ FrequencySamplingFilterKernel FresnelC FresnelS Friday FrobeniusNumber FrobeniusSolve FromCharacterCode FromCoefficientRules FromContinuedFraction FromDate FromDigits FromDMS Front FrontEndDynamicExpression FrontEndEventActions FrontEndExecute FrontEndObject FrontEndResource FrontEndResourceString FrontEndStackSize FrontEndToken FrontEndTokenExecute FrontEndValueCache FrontEndVersion FrontFaceColor FrontFaceOpacity Full FullAxes FullDefinition FullForm FullGraphics FullOptions FullSimplify Function FunctionExpand FunctionInterpolation FunctionSpace FussellVeselyImportance GaborFilter GaborMatrix GaborWavelet GainMargins GainPhaseMargins Gamma GammaDistribution GammaRegularized GapPenalty Gather GatherBy GaugeFaceElementFunction GaugeFaceStyle GaugeFrameElementFunction GaugeFrameSize GaugeFrameStyle GaugeLabels GaugeMarkers GaugeStyle GaussianFilter GaussianIntegers GaussianMatrix GaussianWindow GCD GegenbauerC General GeneralizedLinearModelFit GenerateConditions GeneratedCell GeneratedParameters GeneratingFunction Generic GenericCylindricalDecomposition GenomeData GenomeLookup GeodesicClosing GeodesicDilation GeodesicErosion GeodesicOpening GeoDestination GeodesyData GeoDirection GeoDistance GeoGridPosition GeometricBrownianMotionProcess GeometricDistribution GeometricMean GeometricMeanFilter GeometricTransformation GeometricTransformation3DBox GeometricTransformation3DBoxOptions GeometricTransformationBox GeometricTransformationBoxOptions GeoPosition GeoPositionENU GeoPositionXYZ GeoProjectionData GestureHandler GestureHandlerTag Get GetBoundingBoxSizePacket GetContext GetEnvironment GetFileName GetFrontEndOptionsDataPacket GetLinebreakInformationPacket GetMenusPacket GetPageBreakInformationPacket Glaisher GlobalClusteringCoefficient GlobalPreferences GlobalSession Glow GoldenRatio GompertzMakehamDistribution GoodmanKruskalGamma GoodmanKruskalGammaTest Goto Grad Gradient GradientFilter GradientOrientationFilter Graph GraphAssortativity GraphCenter GraphComplement GraphData GraphDensity GraphDiameter GraphDifference GraphDisjointUnion GraphDistance GraphDistanceMatrix GraphElementData GraphEmbedding GraphHighlight GraphHighlightStyle GraphHub Graphics Graphics3D Graphics3DBox Graphics3DBoxOptions GraphicsArray GraphicsBaseline GraphicsBox GraphicsBoxOptions GraphicsColor GraphicsColumn GraphicsComplex GraphicsComplex3DBox GraphicsComplex3DBoxOptions GraphicsComplexBox GraphicsComplexBoxOptions GraphicsContents GraphicsData GraphicsGrid GraphicsGridBox GraphicsGroup GraphicsGroup3DBox GraphicsGroup3DBoxOptions GraphicsGroupBox GraphicsGroupBoxOptions GraphicsGrouping GraphicsHighlightColor GraphicsRow GraphicsSpacing GraphicsStyle GraphIntersection GraphLayout GraphLinkEfficiency GraphPeriphery GraphPlot GraphPlot3D GraphPower GraphPropertyDistribution GraphQ GraphRadius GraphReciprocity GraphRoot GraphStyle GraphUnion Gray GrayLevel GreatCircleDistance Greater GreaterEqual GreaterEqualLess GreaterFullEqual GreaterGreater GreaterLess GreaterSlantEqual GreaterTilde Green Grid GridBaseline GridBox GridBoxAlignment GridBoxBackground GridBoxDividers GridBoxFrame GridBoxItemSize GridBoxItemStyle GridBoxOptions GridBoxSpacings GridCreationSettings GridDefaultElement GridElementStyleOptions GridFrame GridFrameMargins GridGraph GridLines GridLinesStyle GroebnerBasis GroupActionBase GroupCentralizer GroupElementFromWord GroupElementPosition GroupElementQ GroupElements GroupElementToWord GroupGenerators GroupMultiplicationTable GroupOrbits GroupOrder GroupPageBreakWithin GroupSetwiseStabilizer GroupStabilizer GroupStabilizerChain Gudermannian GumbelDistribution HaarWavelet HadamardMatrix HalfNormalDistribution HamiltonianGraphQ HammingDistance HammingWindow HankelH1 HankelH2 HankelMatrix HannPoissonWindow HannWindow HaradaNortonGroupHN HararyGraph HarmonicMean HarmonicMeanFilter HarmonicNumber Hash HashTable Haversine HazardFunction Head HeadCompose Heads HeavisideLambda HeavisidePi HeavisideTheta HeldGroupHe HeldPart HelpBrowserLookup HelpBrowserNotebook HelpBrowserSettings HermiteDecomposition HermiteH HermitianMatrixQ HessenbergDecomposition Hessian HexadecimalCharacter Hexahedron HexahedronBox HexahedronBoxOptions HiddenSurface HighlightGraph HighlightImage HighpassFilter HigmanSimsGroupHS HilbertFilter HilbertMatrix Histogram Histogram3D HistogramDistribution HistogramList HistogramTransform HistogramTransformInterpolation HitMissTransform HITSCentrality HodgeDual HoeffdingD HoeffdingDTest Hold HoldAll HoldAllComplete HoldComplete HoldFirst HoldForm HoldPattern HoldRest HolidayCalendar HomeDirectory HomePage Horizontal HorizontalForm HorizontalGauge HorizontalScrollPosition HornerForm HotellingTSquareDistribution HoytDistribution HTMLSave Hue HumpDownHump HumpEqual HurwitzLerchPhi HurwitzZeta HyperbolicDistribution HypercubeGraph HyperexponentialDistribution Hyperfactorial Hypergeometric0F1 Hypergeometric0F1Regularized Hypergeometric1F1 Hypergeometric1F1Regularized Hypergeometric2F1 Hypergeometric2F1Regularized HypergeometricDistribution HypergeometricPFQ HypergeometricPFQRegularized HypergeometricU Hyperlink HyperlinkCreationSettings Hyphenation HyphenationOptions HypoexponentialDistribution HypothesisTestData I Identity IdentityMatrix If IgnoreCase Im Image Image3D Image3DSlices ImageAccumulate ImageAdd ImageAdjust ImageAlign ImageApply ImageAspectRatio ImageAssemble ImageCache ImageCacheValid ImageCapture ImageChannels ImageClip ImageColorSpace ImageCompose ImageConvolve ImageCooccurrence ImageCorners ImageCorrelate ImageCorrespondingPoints ImageCrop ImageData ImageDataPacket ImageDeconvolve ImageDemosaic ImageDifference ImageDimensions ImageDistance ImageEffect ImageFeatureTrack ImageFileApply ImageFileFilter ImageFileScan ImageFilter ImageForestingComponents ImageForwardTransformation ImageHistogram ImageKeypoints ImageLevels ImageLines ImageMargins ImageMarkers ImageMeasurements ImageMultiply ImageOffset ImagePad ImagePadding ImagePartition ImagePeriodogram ImagePerspectiveTransformation ImageQ ImageRangeCache ImageReflect ImageRegion ImageResize ImageResolution ImageRotate ImageRotated ImageScaled ImageScan ImageSize ImageSizeAction ImageSizeCache ImageSizeMultipliers ImageSizeRaw ImageSubtract ImageTake ImageTransformation ImageTrim ImageType ImageValue ImageValuePositions Implies Import ImportAutoReplacements ImportString ImprovementImportance In IncidenceGraph IncidenceList IncidenceMatrix IncludeConstantBasis IncludeFileExtension IncludePods IncludeSingularTerm Increment Indent IndentingNewlineSpacings IndentMaxFraction IndependenceTest IndependentEdgeSetQ IndependentUnit IndependentVertexSetQ Indeterminate IndexCreationOptions Indexed IndexGraph IndexTag Inequality InexactNumberQ InexactNumbers Infinity Infix Information Inherited InheritScope Initialization InitializationCell InitializationCellEvaluation InitializationCellWarning InlineCounterAssignments InlineCounterIncrements InlineRules Inner Inpaint Input InputAliases InputAssumptions InputAutoReplacements InputField InputFieldBox InputFieldBoxOptions InputForm InputGrouping InputNamePacket InputNotebook InputPacket InputSettings InputStream InputString InputStringPacket InputToBoxFormPacket Insert InsertionPointObject InsertResults Inset Inset3DBox Inset3DBoxOptions InsetBox InsetBoxOptions Install InstallService InString Integer IntegerDigits IntegerExponent IntegerLength IntegerPart IntegerPartitions IntegerQ Integers IntegerString Integral Integrate Interactive InteractiveTradingChart Interlaced Interleaving InternallyBalancedDecomposition InterpolatingFunction InterpolatingPolynomial Interpolation InterpolationOrder InterpolationPoints InterpolationPrecision Interpretation InterpretationBox InterpretationBoxOptions InterpretationFunction InterpretTemplate InterquartileRange Interrupt InterruptSettings Intersection Interval IntervalIntersection IntervalMemberQ IntervalUnion Inverse InverseBetaRegularized InverseCDF InverseChiSquareDistribution InverseContinuousWaveletTransform InverseDistanceTransform InverseEllipticNomeQ InverseErf InverseErfc InverseFourier InverseFourierCosTransform InverseFourierSequenceTransform InverseFourierSinTransform InverseFourierTransform InverseFunction InverseFunctions InverseGammaDistribution InverseGammaRegularized InverseGaussianDistribution InverseGudermannian InverseHaversine InverseJacobiCD InverseJacobiCN InverseJacobiCS InverseJacobiDC InverseJacobiDN InverseJacobiDS InverseJacobiNC InverseJacobiND InverseJacobiNS InverseJacobiSC InverseJacobiSD InverseJacobiSN InverseLaplaceTransform InversePermutation InverseRadon InverseSeries InverseSurvivalFunction InverseWaveletTransform InverseWeierstrassP InverseZTransform Invisible InvisibleApplication InvisibleTimes IrreduciblePolynomialQ IsolatingInterval IsomorphicGraphQ IsotopeData Italic Item ItemBox ItemBoxOptions ItemSize ItemStyle ItoProcess JaccardDissimilarity JacobiAmplitude Jacobian JacobiCD JacobiCN JacobiCS JacobiDC JacobiDN JacobiDS JacobiNC JacobiND JacobiNS JacobiP JacobiSC JacobiSD JacobiSN JacobiSymbol JacobiZeta JankoGroupJ1 JankoGroupJ2 JankoGroupJ3 JankoGroupJ4 JarqueBeraALMTest JohnsonDistribution Join Joined JoinedCurve JoinedCurveBox JoinForm JordanDecomposition JordanModelDecomposition K KagiChart KaiserBesselWindow KaiserWindow KalmanEstimator KalmanFilter KarhunenLoeveDecomposition KaryTree KatzCentrality KCoreComponents KDistribution KelvinBei KelvinBer KelvinKei KelvinKer KendallTau KendallTauTest KernelExecute KernelMixtureDistribution KernelObject Kernels Ket Khinchin KirchhoffGraph KirchhoffMatrix KleinInvariantJ KnightTourGraph KnotData KnownUnitQ KolmogorovSmirnovTest KroneckerDelta KroneckerModelDecomposition KroneckerProduct KroneckerSymbol KuiperTest KumaraswamyDistribution Kurtosis KuwaharaFilter Label Labeled LabeledSlider LabelingFunction LabelStyle LaguerreL LambdaComponents LambertW LanczosWindow LandauDistribution Language LanguageCategory LaplaceDistribution LaplaceTransform Laplacian LaplacianFilter LaplacianGaussianFilter Large Larger Last Latitude LatitudeLongitude LatticeData LatticeReduce Launch LaunchKernels LayeredGraphPlot LayerSizeFunction LayoutInformation LCM LeafCount LeapYearQ LeastSquares LeastSquaresFilterKernel Left LeftArrow LeftArrowBar LeftArrowRightArrow LeftDownTeeVector LeftDownVector LeftDownVectorBar LeftRightArrow LeftRightVector LeftTee LeftTeeArrow LeftTeeVector LeftTriangle LeftTriangleBar LeftTriangleEqual LeftUpDownVector LeftUpTeeVector LeftUpVector LeftUpVectorBar LeftVector LeftVectorBar LegendAppearance Legended LegendFunction LegendLabel LegendLayout LegendMargins LegendMarkers LegendMarkerSize LegendreP LegendreQ LegendreType Length LengthWhile LerchPhi Less LessEqual LessEqualGreater LessFullEqual LessGreater LessLess LessSlantEqual LessTilde LetterCharacter LetterQ Level LeveneTest LeviCivitaTensor LevyDistribution Lexicographic LibraryFunction LibraryFunctionError LibraryFunctionInformation LibraryFunctionLoad LibraryFunctionUnload LibraryLoad LibraryUnload LicenseID LiftingFilterData LiftingWaveletTransform LightBlue LightBrown LightCyan Lighter LightGray LightGreen Lighting LightingAngle LightMagenta LightOrange LightPink LightPurple LightRed LightSources LightYellow Likelihood Limit LimitsPositioning LimitsPositioningTokens LindleyDistribution Line Line3DBox LinearFilter LinearFractionalTransform LinearModelFit LinearOffsetFunction LinearProgramming LinearRecurrence LinearSolve LinearSolveFunction LineBox LineBreak LinebreakAdjustments LineBreakChart LineBreakWithin LineColor LineForm LineGraph LineIndent LineIndentMaxFraction LineIntegralConvolutionPlot LineIntegralConvolutionScale LineLegend LineOpacity LineSpacing LineWrapParts LinkActivate LinkClose LinkConnect LinkConnectedQ LinkCreate LinkError LinkFlush LinkFunction LinkHost LinkInterrupt LinkLaunch LinkMode LinkObject LinkOpen LinkOptions LinkPatterns LinkProtocol LinkRead LinkReadHeld LinkReadyQ Links LinkWrite LinkWriteHeld LiouvilleLambda List Listable ListAnimate ListContourPlot ListContourPlot3D ListConvolve ListCorrelate ListCurvePathPlot ListDeconvolve ListDensityPlot Listen ListFourierSequenceTransform ListInterpolation ListLineIntegralConvolutionPlot ListLinePlot ListLogLinearPlot ListLogLogPlot ListLogPlot ListPicker ListPickerBox ListPickerBoxBackground ListPickerBoxOptions ListPlay ListPlot ListPlot3D ListPointPlot3D ListPolarPlot ListQ ListStreamDensityPlot ListStreamPlot ListSurfacePlot3D ListVectorDensityPlot ListVectorPlot ListVectorPlot3D ListZTransform Literal LiteralSearch LocalClusteringCoefficient LocalizeVariables LocationEquivalenceTest LocationTest Locator LocatorAutoCreate LocatorBox LocatorBoxOptions LocatorCentering LocatorPane LocatorPaneBox LocatorPaneBoxOptions LocatorRegion Locked Log Log10 Log2 LogBarnesG LogGamma LogGammaDistribution LogicalExpand LogIntegral LogisticDistribution LogitModelFit LogLikelihood LogLinearPlot LogLogisticDistribution LogLogPlot LogMultinormalDistribution LogNormalDistribution LogPlot LogRankTest LogSeriesDistribution LongEqual Longest LongestAscendingSequence LongestCommonSequence LongestCommonSequencePositions LongestCommonSubsequence LongestCommonSubsequencePositions LongestMatch LongForm Longitude LongLeftArrow LongLeftRightArrow LongRightArrow Loopback LoopFreeGraphQ LowerCaseQ LowerLeftArrow LowerRightArrow LowerTriangularize LowpassFilter LQEstimatorGains LQGRegulator LQOutputRegulatorGains LQRegulatorGains LUBackSubstitution LucasL LuccioSamiComponents LUDecomposition LyapunovSolve LyonsGroupLy MachineID MachineName MachineNumberQ MachinePrecision MacintoshSystemPageSetup Magenta Magnification Magnify MainSolve MaintainDynamicCaches Majority MakeBoxes MakeExpression MakeRules MangoldtLambda ManhattanDistance Manipulate Manipulator MannWhitneyTest MantissaExponent Manual Map MapAll MapAt MapIndexed MAProcess MapThread MarcumQ MardiaCombinedTest MardiaKurtosisTest MardiaSkewnessTest MarginalDistribution MarkovProcessProperties Masking MatchingDissimilarity MatchLocalNameQ MatchLocalNames MatchQ Material MathematicaNotation MathieuC MathieuCharacteristicA MathieuCharacteristicB MathieuCharacteristicExponent MathieuCPrime MathieuGroupM11 MathieuGroupM12 MathieuGroupM22 MathieuGroupM23 MathieuGroupM24 MathieuS MathieuSPrime MathMLForm MathMLText Matrices MatrixExp MatrixForm MatrixFunction MatrixLog MatrixPlot MatrixPower MatrixQ MatrixRank Max MaxBend MaxDetect MaxExtraBandwidths MaxExtraConditions MaxFeatures MaxFilter Maximize MaxIterations MaxMemoryUsed MaxMixtureKernels MaxPlotPoints MaxPoints MaxRecursion MaxStableDistribution MaxStepFraction MaxSteps MaxStepSize MaxValue MaxwellDistribution McLaughlinGroupMcL Mean MeanClusteringCoefficient MeanDegreeConnectivity MeanDeviation MeanFilter MeanGraphDistance MeanNeighborDegree MeanShift MeanShiftFilter Median MedianDeviation MedianFilter Medium MeijerG MeixnerDistribution MemberQ MemoryConstrained MemoryInUse Menu MenuAppearance MenuCommandKey MenuEvaluator MenuItem MenuPacket MenuSortingValue MenuStyle MenuView MergeDifferences Mesh MeshFunctions MeshRange MeshShading MeshStyle Message MessageDialog MessageList MessageName MessageOptions MessagePacket Messages MessagesNotebook MetaCharacters MetaInformation Method MethodOptions MexicanHatWavelet MeyerWavelet Min MinDetect MinFilter MinimalPolynomial MinimalStateSpaceModel Minimize Minors MinRecursion MinSize MinStableDistribution Minus MinusPlus MinValue Missing MissingDataMethod MittagLefflerE MixedRadix MixedRadixQuantity MixtureDistribution Mod Modal Mode Modular ModularLambda Module Modulus MoebiusMu Moment Momentary MomentConvert MomentEvaluate MomentGeneratingFunction Monday Monitor MonomialList MonomialOrder MonsterGroupM MorletWavelet MorphologicalBinarize MorphologicalBranchPoints MorphologicalComponents MorphologicalEulerNumber MorphologicalGraph MorphologicalPerimeter MorphologicalTransform Most MouseAnnotation MouseAppearance MouseAppearanceTag MouseButtons Mouseover MousePointerNote MousePosition MovingAverage MovingMedian MoyalDistribution MultiedgeStyle MultilaunchWarning MultiLetterItalics MultiLetterStyle MultilineFunction Multinomial MultinomialDistribution MultinormalDistribution MultiplicativeOrder Multiplicity Multiselection MultivariateHypergeometricDistribution MultivariatePoissonDistribution MultivariateTDistribution N NakagamiDistribution NameQ Names NamespaceBox Nand NArgMax NArgMin NBernoulliB NCache NDSolve NDSolveValue Nearest NearestFunction NeedCurrentFrontEndPackagePacket NeedCurrentFrontEndSymbolsPacket NeedlemanWunschSimilarity Needs Negative NegativeBinomialDistribution NegativeMultinomialDistribution NeighborhoodGraph Nest NestedGreaterGreater NestedLessLess NestedScriptRules NestList NestWhile NestWhileList NevilleThetaC NevilleThetaD NevilleThetaN NevilleThetaS NewPrimitiveStyle NExpectation Next NextPrime NHoldAll NHoldFirst NHoldRest NicholsGridLines NicholsPlot NIntegrate NMaximize NMaxValue NMinimize NMinValue NominalVariables NonAssociative NoncentralBetaDistribution NoncentralChiSquareDistribution NoncentralFRatioDistribution NoncentralStudentTDistribution NonCommutativeMultiply NonConstants None NonlinearModelFit NonlocalMeansFilter NonNegative NonPositive Nor NorlundB Norm Normal NormalDistribution NormalGrouping Normalize NormalizedSquaredEuclideanDistance NormalsFunction NormFunction Not NotCongruent NotCupCap NotDoubleVerticalBar Notebook NotebookApply NotebookAutoSave NotebookClose NotebookConvertSettings NotebookCreate NotebookCreateReturnObject NotebookDefault NotebookDelete NotebookDirectory NotebookDynamicExpression NotebookEvaluate NotebookEventActions NotebookFileName NotebookFind NotebookFindReturnObject NotebookGet NotebookGetLayoutInformationPacket NotebookGetMisspellingsPacket NotebookInformation NotebookInterfaceObject NotebookLocate NotebookObject NotebookOpen NotebookOpenReturnObject NotebookPath NotebookPrint NotebookPut NotebookPutReturnObject NotebookRead NotebookResetGeneratedCells Notebooks NotebookSave NotebookSaveAs NotebookSelection NotebookSetupLayoutInformationPacket NotebooksMenu NotebookWrite NotElement NotEqualTilde NotExists NotGreater NotGreaterEqual NotGreaterFullEqual NotGreaterGreater NotGreaterLess NotGreaterSlantEqual NotGreaterTilde NotHumpDownHump NotHumpEqual NotLeftTriangle NotLeftTriangleBar NotLeftTriangleEqual NotLess NotLessEqual NotLessFullEqual NotLessGreater NotLessLess NotLessSlantEqual NotLessTilde NotNestedGreaterGreater NotNestedLessLess NotPrecedes NotPrecedesEqual NotPrecedesSlantEqual NotPrecedesTilde NotReverseElement NotRightTriangle NotRightTriangleBar NotRightTriangleEqual NotSquareSubset NotSquareSubsetEqual NotSquareSuperset NotSquareSupersetEqual NotSubset NotSubsetEqual NotSucceeds NotSucceedsEqual NotSucceedsSlantEqual NotSucceedsTilde NotSuperset NotSupersetEqual NotTilde NotTildeEqual NotTildeFullEqual NotTildeTilde NotVerticalBar NProbability NProduct NProductFactors NRoots NSolve NSum NSumTerms Null NullRecords NullSpace NullWords Number NumberFieldClassNumber NumberFieldDiscriminant NumberFieldFundamentalUnits NumberFieldIntegralBasis NumberFieldNormRepresentatives NumberFieldRegulator NumberFieldRootsOfUnity NumberFieldSignature NumberForm NumberFormat NumberMarks NumberMultiplier NumberPadding NumberPoint NumberQ NumberSeparator NumberSigns NumberString Numerator NumericFunction NumericQ NuttallWindow NValues NyquistGridLines NyquistPlot O ObservabilityGramian ObservabilityMatrix ObservableDecomposition ObservableModelQ OddQ Off Offset OLEData On ONanGroupON OneIdentity Opacity Open OpenAppend Opener OpenerBox OpenerBoxOptions OpenerView OpenFunctionInspectorPacket Opening OpenRead OpenSpecialOptions OpenTemporary OpenWrite Operate OperatingSystem OptimumFlowData Optional OptionInspectorSettings OptionQ Options OptionsPacket OptionsPattern OptionValue OptionValueBox OptionValueBoxOptions Or Orange Order OrderDistribution OrderedQ Ordering Orderless OrnsteinUhlenbeckProcess Orthogonalize Out Outer OutputAutoOverwrite OutputControllabilityMatrix OutputControllableModelQ OutputForm OutputFormData OutputGrouping OutputMathEditExpression OutputNamePacket OutputResponse OutputSizeLimit OutputStream Over OverBar OverDot Overflow OverHat Overlaps Overlay OverlayBox OverlayBoxOptions Overscript OverscriptBox OverscriptBoxOptions OverTilde OverVector OwenT OwnValues PackingMethod PaddedForm Padding PadeApproximant PadLeft PadRight PageBreakAbove PageBreakBelow PageBreakWithin PageFooterLines PageFooters PageHeaderLines PageHeaders PageHeight PageRankCentrality PageWidth PairedBarChart PairedHistogram PairedSmoothHistogram PairedTTest PairedZTest PaletteNotebook PalettePath Pane PaneBox PaneBoxOptions Panel PanelBox PanelBoxOptions Paneled PaneSelector PaneSelectorBox PaneSelectorBoxOptions PaperWidth ParabolicCylinderD ParagraphIndent ParagraphSpacing ParallelArray ParallelCombine ParallelDo ParallelEvaluate Parallelization Parallelize ParallelMap ParallelNeeds ParallelProduct ParallelSubmit ParallelSum ParallelTable ParallelTry Parameter ParameterEstimator ParameterMixtureDistribution ParameterVariables ParametricFunction ParametricNDSolve ParametricNDSolveValue ParametricPlot ParametricPlot3D ParentConnect ParentDirectory ParentForm Parenthesize ParentList ParetoDistribution Part PartialCorrelationFunction PartialD ParticleData Partition PartitionsP PartitionsQ ParzenWindow PascalDistribution PassEventsDown PassEventsUp Paste PasteBoxFormInlineCells PasteButton Path PathGraph PathGraphQ Pattern PatternSequence PatternTest PauliMatrix PaulWavelet Pause PausedTime PDF PearsonChiSquareTest PearsonCorrelationTest PearsonDistribution PerformanceGoal PeriodicInterpolation Periodogram PeriodogramArray PermutationCycles PermutationCyclesQ PermutationGroup PermutationLength PermutationList PermutationListQ PermutationMax PermutationMin PermutationOrder PermutationPower PermutationProduct PermutationReplace Permutations PermutationSupport Permute PeronaMalikFilter Perpendicular PERTDistribution PetersenGraph PhaseMargins Pi Pick PIDData PIDDerivativeFilter PIDFeedforward PIDTune Piecewise PiecewiseExpand PieChart PieChart3D PillaiTrace PillaiTraceTest Pink Pivoting PixelConstrained PixelValue PixelValuePositions Placed Placeholder PlaceholderReplace Plain PlanarGraphQ Play PlayRange Plot Plot3D Plot3Matrix PlotDivision PlotJoined PlotLabel PlotLayout PlotLegends PlotMarkers PlotPoints PlotRange PlotRangeClipping PlotRangePadding PlotRegion PlotStyle Plus PlusMinus Pochhammer PodStates PodWidth Point Point3DBox PointBox PointFigureChart PointForm PointLegend PointSize PoissonConsulDistribution PoissonDistribution PoissonProcess PoissonWindow PolarAxes PolarAxesOrigin PolarGridLines PolarPlot PolarTicks PoleZeroMarkers PolyaAeppliDistribution PolyGamma Polygon Polygon3DBox Polygon3DBoxOptions PolygonBox PolygonBoxOptions PolygonHoleScale PolygonIntersections PolygonScale PolyhedronData PolyLog PolynomialExtendedGCD PolynomialForm PolynomialGCD PolynomialLCM PolynomialMod PolynomialQ PolynomialQuotient PolynomialQuotientRemainder PolynomialReduce PolynomialRemainder Polynomials PopupMenu PopupMenuBox PopupMenuBoxOptions PopupView PopupWindow Position Positive PositiveDefiniteMatrixQ PossibleZeroQ Postfix PostScript Power PowerDistribution PowerExpand PowerMod PowerModList PowerSpectralDensity PowersRepresentations PowerSymmetricPolynomial Precedence PrecedenceForm Precedes PrecedesEqual PrecedesSlantEqual PrecedesTilde Precision PrecisionGoal PreDecrement PredictionRoot PreemptProtect PreferencesPath Prefix PreIncrement Prepend PrependTo PreserveImageOptions Previous PriceGraphDistribution PrimaryPlaceholder Prime PrimeNu PrimeOmega PrimePi PrimePowerQ PrimeQ Primes PrimeZetaP PrimitiveRoot PrincipalComponents PrincipalValue Print PrintAction PrintForm PrintingCopies PrintingOptions PrintingPageRange PrintingStartingPageNumber PrintingStyleEnvironment PrintPrecision PrintTemporary Prism PrismBox PrismBoxOptions PrivateCellOptions PrivateEvaluationOptions PrivateFontOptions PrivateFrontEndOptions PrivateNotebookOptions PrivatePaths Probability ProbabilityDistribution ProbabilityPlot ProbabilityPr ProbabilityScalePlot ProbitModelFit ProcessEstimator ProcessParameterAssumptions ProcessParameterQ ProcessStateDomain ProcessTimeDomain Product ProductDistribution ProductLog ProgressIndicator ProgressIndicatorBox ProgressIndicatorBoxOptions Projection Prolog PromptForm Properties Property PropertyList PropertyValue Proportion Proportional Protect Protected ProteinData Pruning PseudoInverse Purple Put PutAppend Pyramid PyramidBox PyramidBoxOptions QBinomial QFactorial QGamma QHypergeometricPFQ QPochhammer QPolyGamma QRDecomposition QuadraticIrrationalQ Quantile QuantilePlot Quantity QuantityForm QuantityMagnitude QuantityQ QuantityUnit Quartics QuartileDeviation Quartiles QuartileSkewness QueueingNetworkProcess QueueingProcess QueueProperties Quiet Quit Quotient QuotientRemainder RadialityCentrality RadicalBox RadicalBoxOptions RadioButton RadioButtonBar RadioButtonBox RadioButtonBoxOptions Radon RamanujanTau RamanujanTauL RamanujanTauTheta RamanujanTauZ Random RandomChoice RandomComplex RandomFunction RandomGraph RandomImage RandomInteger RandomPermutation RandomPrime RandomReal RandomSample RandomSeed RandomVariate RandomWalkProcess Range RangeFilter RangeSpecification RankedMax RankedMin Raster Raster3D Raster3DBox Raster3DBoxOptions RasterArray RasterBox RasterBoxOptions Rasterize RasterSize Rational RationalFunctions Rationalize Rationals Ratios Raw RawArray RawBoxes RawData RawMedium RayleighDistribution Re Read ReadList ReadProtected Real RealBlockDiagonalForm RealDigits RealExponent Reals Reap Record RecordLists RecordSeparators Rectangle RectangleBox RectangleBoxOptions RectangleChart RectangleChart3D RecurrenceFilter RecurrenceTable RecurringDigitsForm Red Reduce RefBox ReferenceLineStyle ReferenceMarkers ReferenceMarkerStyle Refine ReflectionMatrix ReflectionTransform Refresh RefreshRate RegionBinarize RegionFunction RegionPlot RegionPlot3D RegularExpression Regularization Reinstall Release ReleaseHold ReliabilityDistribution ReliefImage ReliefPlot Remove RemoveAlphaChannel RemoveAsynchronousTask Removed RemoveInputStreamMethod RemoveOutputStreamMethod RemoveProperty RemoveScheduledTask RenameDirectory RenameFile RenderAll RenderingOptions RenewalProcess RenkoChart Repeated RepeatedNull RepeatedString Replace ReplaceAll ReplaceHeldPart ReplaceImageValue ReplaceList ReplacePart ReplacePixelValue ReplaceRepeated Resampling Rescale RescalingTransform ResetDirectory ResetMenusPacket ResetScheduledTask Residue Resolve Rest Resultant ResumePacket Return ReturnExpressionPacket ReturnInputFormPacket ReturnPacket ReturnTextPacket Reverse ReverseBiorthogonalSplineWavelet ReverseElement ReverseEquilibrium ReverseGraph ReverseUpEquilibrium RevolutionAxis RevolutionPlot3D RGBColor RiccatiSolve RiceDistribution RidgeFilter RiemannR RiemannSiegelTheta RiemannSiegelZ Riffle Right RightArrow RightArrowBar RightArrowLeftArrow RightCosetRepresentative RightDownTeeVector RightDownVector RightDownVectorBar RightTee RightTeeArrow RightTeeVector RightTriangle RightTriangleBar RightTriangleEqual RightUpDownVector RightUpTeeVector RightUpVector RightUpVectorBar RightVector RightVectorBar RiskAchievementImportance RiskReductionImportance RogersTanimotoDissimilarity Root RootApproximant RootIntervals RootLocusPlot RootMeanSquare RootOfUnityQ RootReduce Roots RootSum Rotate RotateLabel RotateLeft RotateRight RotationAction RotationBox RotationBoxOptions RotationMatrix RotationTransform Round RoundImplies RoundingRadius Row RowAlignments RowBackgrounds RowBox RowHeights RowLines RowMinHeight RowReduce RowsEqual RowSpacings RSolve RudvalisGroupRu Rule RuleCondition RuleDelayed RuleForm RulerUnits Run RunScheduledTask RunThrough RuntimeAttributes RuntimeOptions RussellRaoDissimilarity SameQ SameTest SampleDepth SampledSoundFunction SampledSoundList SampleRate SamplingPeriod SARIMAProcess SARMAProcess SatisfiabilityCount SatisfiabilityInstances SatisfiableQ Saturday Save Saveable SaveAutoDelete SaveDefinitions SawtoothWave Scale Scaled ScaleDivisions ScaledMousePosition ScaleOrigin ScalePadding ScaleRanges ScaleRangeStyle ScalingFunctions ScalingMatrix ScalingTransform Scan ScheduledTaskActiveQ ScheduledTaskData ScheduledTaskObject ScheduledTasks SchurDecomposition ScientificForm ScreenRectangle ScreenStyleEnvironment ScriptBaselineShifts ScriptLevel ScriptMinSize ScriptRules ScriptSizeMultipliers Scrollbars ScrollingOptions ScrollPosition Sec Sech SechDistribution SectionGrouping SectorChart SectorChart3D SectorOrigin SectorSpacing SeedRandom Select Selectable SelectComponents SelectedCells SelectedNotebook Selection SelectionAnimate SelectionCell SelectionCellCreateCell SelectionCellDefaultStyle SelectionCellParentStyle SelectionCreateCell SelectionDebuggerTag SelectionDuplicateCell SelectionEvaluate SelectionEvaluateCreateCell SelectionMove SelectionPlaceholder SelectionSetStyle SelectWithContents SelfLoops SelfLoopStyle SemialgebraicComponentInstances SendMail Sequence SequenceAlignment SequenceForm SequenceHold SequenceLimit Series SeriesCoefficient SeriesData SessionTime Set SetAccuracy SetAlphaChannel SetAttributes Setbacks SetBoxFormNamesPacket SetDelayed SetDirectory SetEnvironment SetEvaluationNotebook SetFileDate SetFileLoadingContext SetNotebookStatusLine SetOptions SetOptionsPacket SetPrecision SetProperty SetSelectedNotebook SetSharedFunction SetSharedVariable SetSpeechParametersPacket SetStreamPosition SetSystemOptions Setter SetterBar SetterBox SetterBoxOptions Setting SetValue Shading Shallow ShannonWavelet ShapiroWilkTest Share Sharpen ShearingMatrix ShearingTransform ShenCastanMatrix Short ShortDownArrow Shortest ShortestMatch ShortestPathFunction ShortLeftArrow ShortRightArrow ShortUpArrow Show ShowAutoStyles ShowCellBracket ShowCellLabel ShowCellTags ShowClosedCellArea ShowContents ShowControls ShowCursorTracker ShowGroupOpenCloseIcon ShowGroupOpener ShowInvisibleCharacters ShowPageBreaks ShowPredictiveInterface ShowSelection ShowShortBoxForm ShowSpecialCharacters ShowStringCharacters ShowSyntaxStyles ShrinkingDelay ShrinkWrapBoundingBox SiegelTheta SiegelTukeyTest Sign Signature SignedRankTest SignificanceLevel SignPadding SignTest SimilarityRules SimpleGraph SimpleGraphQ Simplify Sin Sinc SinghMaddalaDistribution SingleEvaluation SingleLetterItalics SingleLetterStyle SingularValueDecomposition SingularValueList SingularValuePlot SingularValues Sinh SinhIntegral SinIntegral SixJSymbol Skeleton SkeletonTransform SkellamDistribution Skewness SkewNormalDistribution Skip SliceDistribution Slider Slider2D Slider2DBox Slider2DBoxOptions SliderBox SliderBoxOptions SlideView Slot SlotSequence Small SmallCircle Smaller SmithDelayCompensator SmithWatermanSimilarity SmoothDensityHistogram SmoothHistogram SmoothHistogram3D SmoothKernelDistribution SocialMediaData Socket SokalSneathDissimilarity Solve SolveAlways SolveDelayed Sort SortBy Sound SoundAndGraphics SoundNote SoundVolume Sow Space SpaceForm Spacer Spacings Span SpanAdjustments SpanCharacterRounding SpanFromAbove SpanFromBoth SpanFromLeft SpanLineThickness SpanMaxSize SpanMinSize SpanningCharacters SpanSymmetric SparseArray SpatialGraphDistribution Speak SpeakTextPacket SpearmanRankTest SpearmanRho Spectrogram SpectrogramArray Specularity SpellingCorrection SpellingDictionaries SpellingDictionariesPath SpellingOptions SpellingSuggestionsPacket Sphere SphereBox SphericalBesselJ SphericalBesselY SphericalHankelH1 SphericalHankelH2 SphericalHarmonicY SphericalPlot3D SphericalRegion SpheroidalEigenvalue SpheroidalJoiningFactor SpheroidalPS SpheroidalPSPrime SpheroidalQS SpheroidalQSPrime SpheroidalRadialFactor SpheroidalS1 SpheroidalS1Prime SpheroidalS2 SpheroidalS2Prime Splice SplicedDistribution SplineClosed SplineDegree SplineKnots SplineWeights Split SplitBy SpokenString Sqrt SqrtBox SqrtBoxOptions Square SquaredEuclideanDistance SquareFreeQ SquareIntersection SquaresR SquareSubset SquareSubsetEqual SquareSuperset SquareSupersetEqual SquareUnion SquareWave StabilityMargins StabilityMarginsStyle StableDistribution Stack StackBegin StackComplete StackInhibit StandardDeviation StandardDeviationFilter StandardForm Standardize StandbyDistribution Star StarGraph StartAsynchronousTask StartingStepSize StartOfLine StartOfString StartScheduledTask StartupSound StateDimensions StateFeedbackGains StateOutputEstimator StateResponse StateSpaceModel StateSpaceRealization StateSpaceTransform StationaryDistribution StationaryWaveletPacketTransform StationaryWaveletTransform StatusArea StatusCentrality StepMonitor StieltjesGamma StirlingS1 StirlingS2 StopAsynchronousTask StopScheduledTask StrataVariables StratonovichProcess StreamColorFunction StreamColorFunctionScaling StreamDensityPlot StreamPlot StreamPoints StreamPosition Streams StreamScale StreamStyle String StringBreak StringByteCount StringCases StringCount StringDrop StringExpression StringForm StringFormat StringFreeQ StringInsert StringJoin StringLength StringMatchQ StringPosition StringQ StringReplace StringReplaceList StringReplacePart StringReverse StringRotateLeft StringRotateRight StringSkeleton StringSplit StringTake StringToStream StringTrim StripBoxes StripOnInput StripWrapperBoxes StrokeForm StructuralImportance StructuredArray StructuredSelection StruveH StruveL Stub StudentTDistribution Style StyleBox StyleBoxAutoDelete StyleBoxOptions StyleData StyleDefinitions StyleForm StyleKeyMapping StyleMenuListing StyleNameDialogSettings StyleNames StylePrint StyleSheetPath Subfactorial Subgraph SubMinus SubPlus SubresultantPolynomialRemainders SubresultantPolynomials Subresultants Subscript SubscriptBox SubscriptBoxOptions Subscripted Subset SubsetEqual Subsets SubStar Subsuperscript SubsuperscriptBox SubsuperscriptBoxOptions Subtract SubtractFrom SubValues Succeeds SucceedsEqual SucceedsSlantEqual SucceedsTilde SuchThat Sum SumConvergence Sunday SuperDagger SuperMinus SuperPlus Superscript SuperscriptBox SuperscriptBoxOptions Superset SupersetEqual SuperStar Surd SurdForm SurfaceColor SurfaceGraphics SurvivalDistribution SurvivalFunction SurvivalModel SurvivalModelFit SuspendPacket SuzukiDistribution SuzukiGroupSuz SwatchLegend Switch Symbol SymbolName SymletWavelet Symmetric SymmetricGroup SymmetricMatrixQ SymmetricPolynomial SymmetricReduction Symmetrize SymmetrizedArray SymmetrizedArrayRules SymmetrizedDependentComponents SymmetrizedIndependentComponents SymmetrizedReplacePart SynchronousInitialization SynchronousUpdating Syntax SyntaxForm SyntaxInformation SyntaxLength SyntaxPacket SyntaxQ SystemDialogInput SystemException SystemHelpPath SystemInformation SystemInformationData SystemOpen SystemOptions SystemsModelDelay SystemsModelDelayApproximate SystemsModelDelete SystemsModelDimensions SystemsModelExtract SystemsModelFeedbackConnect SystemsModelLabels SystemsModelOrder SystemsModelParallelConnect SystemsModelSeriesConnect SystemsModelStateFeedbackConnect SystemStub Tab TabFilling Table TableAlignments TableDepth TableDirections TableForm TableHeadings TableSpacing TableView TableViewBox TabSpacings TabView TabViewBox TabViewBoxOptions TagBox TagBoxNote TagBoxOptions TaggingRules TagSet TagSetDelayed TagStyle TagUnset Take TakeWhile Tally Tan Tanh TargetFunctions TargetUnits TautologyQ TelegraphProcess TemplateBox TemplateBoxOptions TemplateSlotSequence TemporalData Temporary TemporaryVariable TensorContract TensorDimensions TensorExpand TensorProduct TensorQ TensorRank TensorReduce TensorSymmetry TensorTranspose TensorWedge Tetrahedron TetrahedronBox TetrahedronBoxOptions TeXForm TeXSave Text Text3DBox Text3DBoxOptions TextAlignment TextBand TextBoundingBox TextBox TextCell TextClipboardType TextData TextForm TextJustification TextLine TextPacket TextParagraph TextRecognize TextRendering TextStyle Texture TextureCoordinateFunction TextureCoordinateScaling Therefore ThermometerGauge Thick Thickness Thin Thinning ThisLink ThompsonGroupTh Thread ThreeJSymbol Threshold Through Throw Thumbnail Thursday Ticks TicksStyle Tilde TildeEqual TildeFullEqual TildeTilde TimeConstrained TimeConstraint Times TimesBy TimeSeriesForecast TimeSeriesInvertibility TimeUsed TimeValue TimeZone Timing Tiny TitleGrouping TitsGroupT ToBoxes ToCharacterCode ToColor ToContinuousTimeModel ToDate ToDiscreteTimeModel ToeplitzMatrix ToExpression ToFileName Together Toggle ToggleFalse Toggler TogglerBar TogglerBox TogglerBoxOptions ToHeldExpression ToInvertibleTimeSeries TokenWords Tolerance ToLowerCase ToNumberField TooBig Tooltip TooltipBox TooltipBoxOptions TooltipDelay TooltipStyle Top TopHatTransform TopologicalSort ToRadicals ToRules ToString Total TotalHeight TotalVariationFilter TotalWidth TouchscreenAutoZoom TouchscreenControlPlacement ToUpperCase Tr Trace TraceAbove TraceAction TraceBackward TraceDepth TraceDialog TraceForward TraceInternal TraceLevel TraceOff TraceOn TraceOriginal TracePrint TraceScan TrackedSymbols TradingChart TraditionalForm TraditionalFunctionNotation TraditionalNotation TraditionalOrder TransferFunctionCancel TransferFunctionExpand TransferFunctionFactor TransferFunctionModel TransferFunctionPoles TransferFunctionTransform TransferFunctionZeros TransformationFunction TransformationFunctions TransformationMatrix TransformedDistribution TransformedField Translate TranslationTransform TransparentColor Transpose TreeForm TreeGraph TreeGraphQ TreePlot TrendStyle TriangleWave TriangularDistribution Trig TrigExpand TrigFactor TrigFactorList Trigger TrigReduce TrigToExp TrimmedMean True TrueQ TruncatedDistribution TsallisQExponentialDistribution TsallisQGaussianDistribution TTest Tube TubeBezierCurveBox TubeBezierCurveBoxOptions TubeBox TubeBSplineCurveBox TubeBSplineCurveBoxOptions Tuesday TukeyLambdaDistribution TukeyWindow Tuples TuranGraph TuringMachine Transparent UnateQ Uncompress Undefined UnderBar Underflow Underlined Underoverscript UnderoverscriptBox UnderoverscriptBoxOptions Underscript UnderscriptBox UnderscriptBoxOptions UndirectedEdge UndirectedGraph UndirectedGraphQ UndocumentedTestFEParserPacket UndocumentedTestGetSelectionPacket Unequal Unevaluated UniformDistribution UniformGraphDistribution UniformSumDistribution Uninstall Union UnionPlus Unique UnitBox UnitConvert UnitDimensions Unitize UnitRootTest UnitSimplify UnitStep UnitTriangle UnitVector Unprotect UnsameQ UnsavedVariables Unset UnsetShared UntrackedVariables Up UpArrow UpArrowBar UpArrowDownArrow Update UpdateDynamicObjects UpdateDynamicObjectsSynchronous UpdateInterval UpDownArrow UpEquilibrium UpperCaseQ UpperLeftArrow UpperRightArrow UpperTriangularize Upsample UpSet UpSetDelayed UpTee UpTeeArrow UpValues URL URLFetch URLFetchAsynchronous URLSave URLSaveAsynchronous UseGraphicsRange Using UsingFrontEnd V2Get ValidationLength Value ValueBox ValueBoxOptions ValueForm ValueQ ValuesData Variables Variance VarianceEquivalenceTest VarianceEstimatorFunction VarianceGammaDistribution VarianceTest VectorAngle VectorColorFunction VectorColorFunctionScaling VectorDensityPlot VectorGlyphData VectorPlot VectorPlot3D VectorPoints VectorQ Vectors VectorScale VectorStyle Vee Verbatim Verbose VerboseConvertToPostScriptPacket VerifyConvergence VerifySolutions VerifyTestAssumptions Version VersionNumber VertexAdd VertexCapacity VertexColors VertexComponent VertexConnectivity VertexCoordinateRules VertexCoordinates VertexCorrelationSimilarity VertexCosineSimilarity VertexCount VertexCoverQ VertexDataCoordinates VertexDegree VertexDelete VertexDiceSimilarity VertexEccentricity VertexInComponent VertexInDegree VertexIndex VertexJaccardSimilarity VertexLabeling VertexLabels VertexLabelStyle VertexList VertexNormals VertexOutComponent VertexOutDegree VertexQ VertexRenderingFunction VertexReplace VertexShape VertexShapeFunction VertexSize VertexStyle VertexTextureCoordinates VertexWeight Vertical VerticalBar VerticalForm VerticalGauge VerticalSeparator VerticalSlider VerticalTilde ViewAngle ViewCenter ViewMatrix ViewPoint ViewPointSelectorSettings ViewPort ViewRange ViewVector ViewVertical VirtualGroupData Visible VisibleCell VoigtDistribution VonMisesDistribution WaitAll WaitAsynchronousTask WaitNext WaitUntil WakebyDistribution WalleniusHypergeometricDistribution WaringYuleDistribution WatershedComponents WatsonUSquareTest WattsStrogatzGraphDistribution WaveletBestBasis WaveletFilterCoefficients WaveletImagePlot WaveletListPlot WaveletMapIndexed WaveletMatrixPlot WaveletPhi WaveletPsi WaveletScale WaveletScalogram WaveletThreshold WeaklyConnectedComponents WeaklyConnectedGraphQ WeakStationarity WeatherData WeberE Wedge Wednesday WeibullDistribution WeierstrassHalfPeriods WeierstrassInvariants WeierstrassP WeierstrassPPrime WeierstrassSigma WeierstrassZeta WeightedAdjacencyGraph WeightedAdjacencyMatrix WeightedData WeightedGraphQ Weights WelchWindow WheelGraph WhenEvent Which While White Whitespace WhitespaceCharacter WhittakerM WhittakerW WienerFilter WienerProcess WignerD WignerSemicircleDistribution WilksW WilksWTest WindowClickSelect WindowElements WindowFloating WindowFrame WindowFrameElements WindowMargins WindowMovable WindowOpacity WindowSelected WindowSize WindowStatusArea WindowTitle WindowToolbars WindowWidth With WolframAlpha WolframAlphaDate WolframAlphaQuantity WolframAlphaResult Word WordBoundary WordCharacter WordData WordSearch WordSeparators WorkingPrecision Write WriteString Wronskian XMLElement XMLObject Xnor Xor Yellow YuleDissimilarity ZernikeR ZeroSymmetric ZeroTest ZeroWidthTimes Zeta ZetaZero ZipfDistribution ZTest ZTransform $Aborted $ActivationGroupID $ActivationKey $ActivationUserRegistered $AddOnsDirectory $AssertFunction $Assumptions $AsynchronousTask $BaseDirectory $BatchInput $BatchOutput $BoxForms $ByteOrdering $Canceled $CharacterEncoding $CharacterEncodings $CommandLine $CompilationTarget $ConditionHold $ConfiguredKernels $Context $ContextPath $ControlActiveSetting $CreationDate $CurrentLink $DateStringFormat $DefaultFont $DefaultFrontEnd $DefaultImagingDevice $DefaultPath $Display $DisplayFunction $DistributedContexts $DynamicEvaluation $Echo $Epilog $ExportFormats $Failed $FinancialDataSource $FormatType $FrontEnd $FrontEndSession $GeoLocation $HistoryLength $HomeDirectory $HTTPCookies $IgnoreEOF $ImagingDevices $ImportFormats $InitialDirectory $Input $InputFileName $InputStreamMethods $Inspector $InstallationDate $InstallationDirectory $InterfaceEnvironment $IterationLimit $KernelCount $KernelID $Language $LaunchDirectory $LibraryPath $LicenseExpirationDate $LicenseID $LicenseProcesses $LicenseServer $LicenseSubprocesses $LicenseType $Line $Linked $LinkSupported $LoadedFiles $MachineAddresses $MachineDomain $MachineDomains $MachineEpsilon $MachineID $MachineName $MachinePrecision $MachineType $MaxExtraPrecision $MaxLicenseProcesses $MaxLicenseSubprocesses $MaxMachineNumber $MaxNumber $MaxPiecewiseCases $MaxPrecision $MaxRootDegree $MessageGroups $MessageList $MessagePrePrint $Messages $MinMachineNumber $MinNumber $MinorReleaseNumber $MinPrecision $ModuleNumber $NetworkLicense $NewMessage $NewSymbol $Notebooks $NumberMarks $Off $OperatingSystem $Output $OutputForms $OutputSizeLimit $OutputStreamMethods $Packages $ParentLink $ParentProcessID $PasswordFile $PatchLevelID $Path $PathnameSeparator $PerformanceGoal $PipeSupported $Post $Pre $PreferencesDirectory $PrePrint $PreRead $PrintForms $PrintLiteral $ProcessID $ProcessorCount $ProcessorType $ProductInformation $ProgramName $RandomState $RecursionLimit $ReleaseNumber $RootDirectory $ScheduledTask $ScriptCommandLine $SessionID $SetParentLink $SharedFunctions $SharedVariables $SoundDisplay $SoundDisplayFunction $SuppressInputFormHeads $SynchronousEvaluation $SyntaxHandler $System $SystemCharacterEncoding $SystemID $SystemWordLength $TemporaryDirectory $TemporaryPrefix $TextStyle $TimedOut $TimeUnit $TimeZone $TopDirectory $TraceOff $TraceOn $TracePattern $TracePostAction $TracePreAction $Urgent $UserAddOnsDirectory $UserBaseDirectory $UserDocumentsDirectory $UserName $Version $VersionNumber",
        c: [ {
            cN: "comment",
            b: /\(\*/,
            e: /\*\)/
        }, a.ASM, a.QSM, a.CNM, {
            cN: "list",
            b: /\{/,
            e: /\}/,
            i: /:/
        } ]
    };
}), hljs.registerLanguage("matlab", function(a) {
    var b = [ a.CNM, {
        cN: "string",
        b: "'",
        e: "'",
        c: [ a.BE, {
            b: "''"
        } ]
    } ], c = {
        r: 0,
        c: [ {
            cN: "operator",
            b: /'['\.]*/
        } ]
    };
    return {
        k: {
            keyword: "break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while",
            built_in: "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson"
        },
        i: '(//|"|#|/\\*|\\s+/\\w+)',
        c: [ {
            cN: "function",
            bK: "function",
            e: "$",
            c: [ a.UTM, {
                cN: "params",
                b: "\\(",
                e: "\\)"
            }, {
                cN: "params",
                b: "\\[",
                e: "\\]"
            } ]
        }, {
            b: /[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,
            rB: !0,
            r: 0,
            c: [ {
                b: /[a-zA-Z_][a-zA-Z_0-9]*/,
                r: 0
            }, c.c[0] ]
        }, {
            cN: "matrix",
            b: "\\[",
            e: "\\]",
            c: b,
            r: 0,
            starts: c
        }, {
            cN: "cell",
            b: "\\{",
            e: /\}/,
            c: b,
            r: 0,
            i: /:/,
            starts: c
        }, {
            b: /\)/,
            r: 0,
            starts: c
        }, {
            cN: "comment",
            b: "\\%",
            e: "$"
        } ].concat(b)
    };
}), hljs.registerLanguage("mel", function(a) {
    return {
        k: "int float string vector matrix if else switch case default while do for in break continue global proc return about abs addAttr addAttributeEditorNodeHelp addDynamic addNewShelfTab addPP addPanelCategory addPrefixToName advanceToNextDrivenKey affectedNet affects aimConstraint air alias aliasAttr align alignCtx alignCurve alignSurface allViewFit ambientLight angle angleBetween animCone animCurveEditor animDisplay animView annotate appendStringArray applicationName applyAttrPreset applyTake arcLenDimContext arcLengthDimension arclen arrayMapper art3dPaintCtx artAttrCtx artAttrPaintVertexCtx artAttrSkinPaintCtx artAttrTool artBuildPaintMenu artFluidAttrCtx artPuttyCtx artSelectCtx artSetPaintCtx artUserPaintCtx assignCommand assignInputDevice assignViewportFactories attachCurve attachDeviceAttr attachSurface attrColorSliderGrp attrCompatibility attrControlGrp attrEnumOptionMenu attrEnumOptionMenuGrp attrFieldGrp attrFieldSliderGrp attrNavigationControlGrp attrPresetEditWin attributeExists attributeInfo attributeMenu attributeQuery autoKeyframe autoPlace bakeClip bakeFluidShading bakePartialHistory bakeResults bakeSimulation basename basenameEx batchRender bessel bevel bevelPlus binMembership bindSkin blend2 blendShape blendShapeEditor blendShapePanel blendTwoAttr blindDataType boneLattice boundary boxDollyCtx boxZoomCtx bufferCurve buildBookmarkMenu buildKeyframeMenu button buttonManip CBG cacheFile cacheFileCombine cacheFileMerge cacheFileTrack camera cameraView canCreateManip canvas capitalizeString catch catchQuiet ceil changeSubdivComponentDisplayLevel changeSubdivRegion channelBox character characterMap characterOutlineEditor characterize chdir checkBox checkBoxGrp checkDefaultRenderGlobals choice circle circularFillet clamp clear clearCache clip clipEditor clipEditorCurrentTimeCtx clipSchedule clipSchedulerOutliner clipTrimBefore closeCurve closeSurface cluster cmdFileOutput cmdScrollFieldExecuter cmdScrollFieldReporter cmdShell coarsenSubdivSelectionList collision color colorAtPoint colorEditor colorIndex colorIndexSliderGrp colorSliderButtonGrp colorSliderGrp columnLayout commandEcho commandLine commandPort compactHairSystem componentEditor compositingInterop computePolysetVolume condition cone confirmDialog connectAttr connectControl connectDynamic connectJoint connectionInfo constrain constrainValue constructionHistory container containsMultibyte contextInfo control convertFromOldLayers convertIffToPsd convertLightmap convertSolidTx convertTessellation convertUnit copyArray copyFlexor copyKey copySkinWeights cos cpButton cpCache cpClothSet cpCollision cpConstraint cpConvClothToMesh cpForces cpGetSolverAttr cpPanel cpProperty cpRigidCollisionFilter cpSeam cpSetEdit cpSetSolverAttr cpSolver cpSolverTypes cpTool cpUpdateClothUVs createDisplayLayer createDrawCtx createEditor createLayeredPsdFile createMotionField createNewShelf createNode createRenderLayer createSubdivRegion cross crossProduct ctxAbort ctxCompletion ctxEditMode ctxTraverse currentCtx currentTime currentTimeCtx currentUnit curve curveAddPtCtx curveCVCtx curveEPCtx curveEditorCtx curveIntersect curveMoveEPCtx curveOnSurface curveSketchCtx cutKey cycleCheck cylinder dagPose date defaultLightListCheckBox defaultNavigation defineDataServer defineVirtualDevice deformer deg_to_rad delete deleteAttr deleteShadingGroupsAndMaterials deleteShelfTab deleteUI deleteUnusedBrushes delrandstr detachCurve detachDeviceAttr detachSurface deviceEditor devicePanel dgInfo dgdirty dgeval dgtimer dimWhen directKeyCtx directionalLight dirmap dirname disable disconnectAttr disconnectJoint diskCache displacementToPoly displayAffected displayColor displayCull displayLevelOfDetail displayPref displayRGBColor displaySmoothness displayStats displayString displaySurface distanceDimContext distanceDimension doBlur dolly dollyCtx dopeSheetEditor dot dotProduct doubleProfileBirailSurface drag dragAttrContext draggerContext dropoffLocator duplicate duplicateCurve duplicateSurface dynCache dynControl dynExport dynExpression dynGlobals dynPaintEditor dynParticleCtx dynPref dynRelEdPanel dynRelEditor dynamicLoad editAttrLimits editDisplayLayerGlobals editDisplayLayerMembers editRenderLayerAdjustment editRenderLayerGlobals editRenderLayerMembers editor editorTemplate effector emit emitter enableDevice encodeString endString endsWith env equivalent equivalentTol erf error eval evalDeferred evalEcho event exactWorldBoundingBox exclusiveLightCheckBox exec executeForEachObject exists exp expression expressionEditorListen extendCurve extendSurface extrude fcheck fclose feof fflush fgetline fgetword file fileBrowserDialog fileDialog fileExtension fileInfo filetest filletCurve filter filterCurve filterExpand filterStudioImport findAllIntersections findAnimCurves findKeyframe findMenuItem findRelatedSkinCluster finder firstParentOf fitBspline flexor floatEq floatField floatFieldGrp floatScrollBar floatSlider floatSlider2 floatSliderButtonGrp floatSliderGrp floor flow fluidCacheInfo fluidEmitter fluidVoxelInfo flushUndo fmod fontDialog fopen formLayout format fprint frameLayout fread freeFormFillet frewind fromNativePath fwrite gamma gauss geometryConstraint getApplicationVersionAsFloat getAttr getClassification getDefaultBrush getFileList getFluidAttr getInputDeviceRange getMayaPanelTypes getModifiers getPanel getParticleAttr getPluginResource getenv getpid glRender glRenderEditor globalStitch gmatch goal gotoBindPose grabColor gradientControl gradientControlNoAttr graphDollyCtx graphSelectContext graphTrackCtx gravity grid gridLayout group groupObjectsByName HfAddAttractorToAS HfAssignAS HfBuildEqualMap HfBuildFurFiles HfBuildFurImages HfCancelAFR HfConnectASToHF HfCreateAttractor HfDeleteAS HfEditAS HfPerformCreateAS HfRemoveAttractorFromAS HfSelectAttached HfSelectAttractors HfUnAssignAS hardenPointCurve hardware hardwareRenderPanel headsUpDisplay headsUpMessage help helpLine hermite hide hilite hitTest hotBox hotkey hotkeyCheck hsv_to_rgb hudButton hudSlider hudSliderButton hwReflectionMap hwRender hwRenderLoad hyperGraph hyperPanel hyperShade hypot iconTextButton iconTextCheckBox iconTextRadioButton iconTextRadioCollection iconTextScrollList iconTextStaticLabel ikHandle ikHandleCtx ikHandleDisplayScale ikSolver ikSplineHandleCtx ikSystem ikSystemInfo ikfkDisplayMethod illustratorCurves image imfPlugins inheritTransform insertJoint insertJointCtx insertKeyCtx insertKnotCurve insertKnotSurface instance instanceable instancer intField intFieldGrp intScrollBar intSlider intSliderGrp interToUI internalVar intersect iprEngine isAnimCurve isConnected isDirty isParentOf isSameObject isTrue isValidObjectName isValidString isValidUiName isolateSelect itemFilter itemFilterAttr itemFilterRender itemFilterType joint jointCluster jointCtx jointDisplayScale jointLattice keyTangent keyframe keyframeOutliner keyframeRegionCurrentTimeCtx keyframeRegionDirectKeyCtx keyframeRegionDollyCtx keyframeRegionInsertKeyCtx keyframeRegionMoveKeyCtx keyframeRegionScaleKeyCtx keyframeRegionSelectKeyCtx keyframeRegionSetKeyCtx keyframeRegionTrackCtx keyframeStats lassoContext lattice latticeDeformKeyCtx launch launchImageEditor layerButton layeredShaderPort layeredTexturePort layout layoutDialog lightList lightListEditor lightListPanel lightlink lineIntersection linearPrecision linstep listAnimatable listAttr listCameras listConnections listDeviceAttachments listHistory listInputDeviceAxes listInputDeviceButtons listInputDevices listMenuAnnotation listNodeTypes listPanelCategories listRelatives listSets listTransforms listUnselected listerEditor loadFluid loadNewShelf loadPlugin loadPluginLanguageResources loadPrefObjects localizedPanelLabel lockNode loft log longNameOf lookThru ls lsThroughFilter lsType lsUI Mayatomr mag makeIdentity makeLive makePaintable makeRoll makeSingleSurface makeTubeOn makebot manipMoveContext manipMoveLimitsCtx manipOptions manipRotateContext manipRotateLimitsCtx manipScaleContext manipScaleLimitsCtx marker match max memory menu menuBarLayout menuEditor menuItem menuItemToShelf menuSet menuSetPref messageLine min minimizeApp mirrorJoint modelCurrentTimeCtx modelEditor modelPanel mouse movIn movOut move moveIKtoFK moveKeyCtx moveVertexAlongDirection multiProfileBirailSurface mute nParticle nameCommand nameField namespace namespaceInfo newPanelItems newton nodeCast nodeIconButton nodeOutliner nodePreset nodeType noise nonLinear normalConstraint normalize nurbsBoolean nurbsCopyUVSet nurbsCube nurbsEditUV nurbsPlane nurbsSelect nurbsSquare nurbsToPoly nurbsToPolygonsPref nurbsToSubdiv nurbsToSubdivPref nurbsUVSet nurbsViewDirectionVector objExists objectCenter objectLayer objectType objectTypeUI obsoleteProc oceanNurbsPreviewPlane offsetCurve offsetCurveOnSurface offsetSurface openGLExtension openMayaPref optionMenu optionMenuGrp optionVar orbit orbitCtx orientConstraint outlinerEditor outlinerPanel overrideModifier paintEffectsDisplay pairBlend palettePort paneLayout panel panelConfiguration panelHistory paramDimContext paramDimension paramLocator parent parentConstraint particle particleExists particleInstancer particleRenderInfo partition pasteKey pathAnimation pause pclose percent performanceOptions pfxstrokes pickWalk picture pixelMove planarSrf plane play playbackOptions playblast plugAttr plugNode pluginInfo pluginResourceUtil pointConstraint pointCurveConstraint pointLight pointMatrixMult pointOnCurve pointOnSurface pointPosition poleVectorConstraint polyAppend polyAppendFacetCtx polyAppendVertex polyAutoProjection polyAverageNormal polyAverageVertex polyBevel polyBlendColor polyBlindData polyBoolOp polyBridgeEdge polyCacheMonitor polyCheck polyChipOff polyClipboard polyCloseBorder polyCollapseEdge polyCollapseFacet polyColorBlindData polyColorDel polyColorPerVertex polyColorSet polyCompare polyCone polyCopyUV polyCrease polyCreaseCtx polyCreateFacet polyCreateFacetCtx polyCube polyCut polyCutCtx polyCylinder polyCylindricalProjection polyDelEdge polyDelFacet polyDelVertex polyDuplicateAndConnect polyDuplicateEdge polyEditUV polyEditUVShell polyEvaluate polyExtrudeEdge polyExtrudeFacet polyExtrudeVertex polyFlipEdge polyFlipUV polyForceUV polyGeoSampler polyHelix polyInfo polyInstallAction polyLayoutUV polyListComponentConversion polyMapCut polyMapDel polyMapSew polyMapSewMove polyMergeEdge polyMergeEdgeCtx polyMergeFacet polyMergeFacetCtx polyMergeUV polyMergeVertex polyMirrorFace polyMoveEdge polyMoveFacet polyMoveFacetUV polyMoveUV polyMoveVertex polyNormal polyNormalPerVertex polyNormalizeUV polyOptUvs polyOptions polyOutput polyPipe polyPlanarProjection polyPlane polyPlatonicSolid polyPoke polyPrimitive polyPrism polyProjection polyPyramid polyQuad polyQueryBlindData polyReduce polySelect polySelectConstraint polySelectConstraintMonitor polySelectCtx polySelectEditCtx polySeparate polySetToFaceNormal polySewEdge polyShortestPathCtx polySmooth polySoftEdge polySphere polySphericalProjection polySplit polySplitCtx polySplitEdge polySplitRing polySplitVertex polyStraightenUVBorder polySubdivideEdge polySubdivideFacet polyToSubdiv polyTorus polyTransfer polyTriangulate polyUVSet polyUnite polyWedgeFace popen popupMenu pose pow preloadRefEd print progressBar progressWindow projFileViewer projectCurve projectTangent projectionContext projectionManip promptDialog propModCtx propMove psdChannelOutliner psdEditTextureFile psdExport psdTextureFile putenv pwd python querySubdiv quit rad_to_deg radial radioButton radioButtonGrp radioCollection radioMenuItemCollection rampColorPort rand randomizeFollicles randstate rangeControl readTake rebuildCurve rebuildSurface recordAttr recordDevice redo reference referenceEdit referenceQuery refineSubdivSelectionList refresh refreshAE registerPluginResource rehash reloadImage removeJoint removeMultiInstance removePanelCategory rename renameAttr renameSelectionList renameUI render renderGlobalsNode renderInfo renderLayerButton renderLayerParent renderLayerPostProcess renderLayerUnparent renderManip renderPartition renderQualityNode renderSettings renderThumbnailUpdate renderWindowEditor renderWindowSelectContext renderer reorder reorderDeformers requires reroot resampleFluid resetAE resetPfxToPolyCamera resetTool resolutionNode retarget reverseCurve reverseSurface revolve rgb_to_hsv rigidBody rigidSolver roll rollCtx rootOf rot rotate rotationInterpolation roundConstantRadius rowColumnLayout rowLayout runTimeCommand runup sampleImage saveAllShelves saveAttrPreset saveFluid saveImage saveInitialState saveMenu savePrefObjects savePrefs saveShelf saveToolSettings scale scaleBrushBrightness scaleComponents scaleConstraint scaleKey scaleKeyCtx sceneEditor sceneUIReplacement scmh scriptCtx scriptEditorInfo scriptJob scriptNode scriptTable scriptToShelf scriptedPanel scriptedPanelType scrollField scrollLayout sculpt searchPathArray seed selLoadSettings select selectContext selectCurveCV selectKey selectKeyCtx selectKeyframeRegionCtx selectMode selectPref selectPriority selectType selectedNodes selectionConnection separator setAttr setAttrEnumResource setAttrMapping setAttrNiceNameResource setConstraintRestPosition setDefaultShadingGroup setDrivenKeyframe setDynamic setEditCtx setEditor setFluidAttr setFocus setInfinity setInputDeviceMapping setKeyCtx setKeyPath setKeyframe setKeyframeBlendshapeTargetWts setMenuMode setNodeNiceNameResource setNodeTypeFlag setParent setParticleAttr setPfxToPolyCamera setPluginResource setProject setStampDensity setStartupMessage setState setToolTo setUITemplate setXformManip sets shadingConnection shadingGeometryRelCtx shadingLightRelCtx shadingNetworkCompare shadingNode shapeCompare shelfButton shelfLayout shelfTabLayout shellField shortNameOf showHelp showHidden showManipCtx showSelectionInTitle showShadingGroupAttrEditor showWindow sign simplify sin singleProfileBirailSurface size sizeBytes skinCluster skinPercent smoothCurve smoothTangentSurface smoothstep snap2to2 snapKey snapMode snapTogetherCtx snapshot soft softMod softModCtx sort sound soundControl source spaceLocator sphere sphrand spotLight spotLightPreviewPort spreadSheetEditor spring sqrt squareSurface srtContext stackTrace startString startsWith stitchAndExplodeShell stitchSurface stitchSurfacePoints strcmp stringArrayCatenate stringArrayContains stringArrayCount stringArrayInsertAtIndex stringArrayIntersector stringArrayRemove stringArrayRemoveAtIndex stringArrayRemoveDuplicates stringArrayRemoveExact stringArrayToString stringToStringArray strip stripPrefixFromName stroke subdAutoProjection subdCleanTopology subdCollapse subdDuplicateAndConnect subdEditUV subdListComponentConversion subdMapCut subdMapSewMove subdMatchTopology subdMirror subdToBlind subdToPoly subdTransferUVsToCache subdiv subdivCrease subdivDisplaySmoothness substitute substituteAllString substituteGeometry substring surface surfaceSampler surfaceShaderList swatchDisplayPort switchTable symbolButton symbolCheckBox sysFile system tabLayout tan tangentConstraint texLatticeDeformContext texManipContext texMoveContext texMoveUVShellContext texRotateContext texScaleContext texSelectContext texSelectShortestPathCtx texSmudgeUVContext texWinToolCtx text textCurves textField textFieldButtonGrp textFieldGrp textManip textScrollList textToShelf textureDisplacePlane textureHairColor texturePlacementContext textureWindow threadCount threePointArcCtx timeControl timePort timerX toNativePath toggle toggleAxis toggleWindowVisibility tokenize tokenizeList tolerance tolower toolButton toolCollection toolDropped toolHasOptions toolPropertyWindow torus toupper trace track trackCtx transferAttributes transformCompare transformLimits translator trim trunc truncateFluidCache truncateHairCache tumble tumbleCtx turbulence twoPointArcCtx uiRes uiTemplate unassignInputDevice undo undoInfo ungroup uniform unit unloadPlugin untangleUV untitledFileName untrim upAxis updateAE userCtx uvLink uvSnapshot validateShelfName vectorize view2dToolCtx viewCamera viewClipPlane viewFit viewHeadOn viewLookAt viewManip viewPlace viewSet visor volumeAxis vortex waitCursor warning webBrowser webBrowserPrefs whatIs window windowPref wire wireContext workspace wrinkle wrinkleContext writeTake xbmLangPathList xform",
        i: "</",
        c: [ a.CNM, a.ASM, a.QSM, {
            cN: "string",
            b: "`",
            e: "`",
            c: [ a.BE ]
        }, {
            cN: "variable",
            v: [ {
                b: "\\$\\d"
            }, {
                b: "[\\$\\%\\@](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)"
            }, {
                b: "\\*(\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)",
                r: 0
            } ]
        }, a.CLCM, a.CBCM ]
    };
}), hljs.registerLanguage("mercury", function(a) {
    var b = {
        keyword: "module use_module import_module include_module end_module initialise mutable initialize finalize finalise interface implementation pred mode func type inst solver any_pred any_func is semidet det nondet multi erroneous failure cc_nondet cc_multi typeclass instance where pragma promise external trace atomic or_else require_complete_switch require_det require_semidet require_multi require_nondet require_cc_multi require_cc_nondet require_erroneous require_failure",
        pragma: "inline no_inline type_spec source_file fact_table obsolete memo loop_check minimal_model terminates does_not_terminate check_termination promise_equivalent_clauses",
        preprocessor: "foreign_proc foreign_decl foreign_code foreign_type foreign_import_module foreign_export_enum foreign_export foreign_enum may_call_mercury will_not_call_mercury thread_safe not_thread_safe maybe_thread_safe promise_pure promise_semipure tabled_for_io local untrailed trailed attach_to_io_state can_pass_as_mercury_type stable will_not_throw_exception may_modify_trail will_not_modify_trail may_duplicate may_not_duplicate affects_liveness does_not_affect_liveness doesnt_affect_liveness no_sharing unknown_sharing sharing",
        built_in: "some all not if then else true fail false try catch catch_any semidet_true semidet_false semidet_fail impure_true impure semipure"
    }, c = {
        cN: "label",
        b: "XXX",
        e: "$",
        eW: !0,
        r: 0
    }, d = a.inherit(a.CLCM, {
        b: "%"
    }), e = a.inherit(a.CBCM, {
        r: 0
    });
    d.c.push(c), e.c.push(c);
    var f = {
        cN: "number",
        b: "0'.\\|0[box][0-9a-fA-F]*"
    }, g = a.inherit(a.ASM, {
        r: 0
    }), h = a.inherit(a.QSM, {
        r: 0
    }), i = {
        cN: "constant",
        b: "\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]",
        r: 0
    };
    h.c.push(i);
    var j = {
        cN: "built_in",
        v: [ {
            b: "<=>"
        }, {
            b: "<=",
            r: 0
        }, {
            b: "=>",
            r: 0
        }, {
            b: "/\\\\"
        }, {
            b: "\\\\/"
        } ]
    }, k = {
        cN: "built_in",
        v: [ {
            b: ":-\\|-->"
        }, {
            b: "=",
            r: 0
        } ]
    };
    return {
        aliases: [ "m", "moo" ],
        k: b,
        c: [ j, k, d, e, f, a.NM, g, h, {
            b: /:-/
        } ]
    };
}), hljs.registerLanguage("mizar", function() {
    return {
        k: "environ vocabularies notations constructors definitions registrations theorems schemes requirements begin end definition registration cluster existence pred func defpred deffunc theorem proof let take assume then thus hence ex for st holds consider reconsider such that and in provided of as from be being by means equals implies iff redefine define now not or attr is mode suppose per cases set thesis contradiction scheme reserve struct correctness compatibility coherence symmetry assymetry reflexivity irreflexivity connectedness uniqueness commutativity idempotence involutiveness projectivity",
        c: [ {
            cN: "comment",
            b: "::",
            e: "$"
        } ]
    };
}), hljs.registerLanguage("monkey", function(a) {
    var b = {
        cN: "number",
        r: 0,
        v: [ {
            b: "[$][a-fA-F0-9]+"
        }, a.NM ]
    };
    return {
        cI: !0,
        k: {
            keyword: "public private property continue exit extern new try catch eachin not abstract final select case default const local global field end if then else elseif endif while wend repeat until forever for to step next return module inline throw",
            built_in: "DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI",
            literal: "true false null and or shl shr mod"
        },
        c: [ {
            cN: "comment",
            b: "#rem",
            e: "#end"
        }, {
            cN: "comment",
            b: "'",
            e: "$",
            r: 0
        }, {
            cN: "function",
            bK: "function method",
            e: "[(=:]|$",
            i: /\n/,
            c: [ a.UTM ]
        }, {
            cN: "class",
            bK: "class interface",
            e: "$",
            c: [ {
                bK: "extends implements"
            }, a.UTM ]
        }, {
            cN: "variable",
            b: "\\b(self|super)\\b"
        }, {
            cN: "preprocessor",
            bK: "import",
            e: "$"
        }, {
            cN: "preprocessor",
            b: "\\s*#",
            e: "$",
            k: "if else elseif endif end then"
        }, {
            cN: "pi",
            b: "^\\s*strict\\b"
        }, {
            bK: "alias",
            e: "=",
            c: [ a.UTM ]
        }, a.QSM, b ]
    };
}), hljs.registerLanguage("nginx", function(a) {
    var b = {
        cN: "variable",
        v: [ {
            b: /\$\d+/
        }, {
            b: /\$\{/,
            e: /}/
        }, {
            b: "[\\$\\@]" + a.UIR
        } ]
    }, c = {
        eW: !0,
        l: "[a-z/_]+",
        k: {
            built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
        },
        r: 0,
        i: "=>",
        c: [ a.HCM, {
            cN: "string",
            c: [ a.BE, b ],
            v: [ {
                b: /"/,
                e: /"/
            }, {
                b: /'/,
                e: /'/
            } ]
        }, {
            cN: "url",
            b: "([a-z]+):/",
            e: "\\s",
            eW: !0,
            eE: !0,
            c: [ b ]
        }, {
            cN: "regexp",
            c: [ a.BE, b ],
            v: [ {
                b: "\\s\\^",
                e: "\\s|{|;",
                rE: !0
            }, {
                b: "~\\*?\\s+",
                e: "\\s|{|;",
                rE: !0
            }, {
                b: "\\*(\\.[a-z\\-]+)+"
            }, {
                b: "([a-z\\-]+\\.)+\\*"
            } ]
        }, {
            cN: "number",
            b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
        }, {
            cN: "number",
            b: "\\b\\d+[kKmMgGdshdwy]*\\b",
            r: 0
        }, b ]
    };
    return {
        aliases: [ "nginxconf" ],
        c: [ a.HCM, {
            b: a.UIR + "\\s",
            e: ";|{",
            rB: !0,
            c: [ {
                cN: "title",
                b: a.UIR,
                starts: c
            } ],
            r: 0
        } ],
        i: "[^\\s\\}]"
    };
}), hljs.registerLanguage("nimrod", function(a) {
    return {
        k: {
            keyword: "addr and as asm bind block break|0 case|0 cast const|0 continue|0 converter discard distinct|10 div do elif else|0 end|0 enum|0 except export finally for from generic if|0 import|0 in include|0 interface is isnot|10 iterator|10 let|0 macro method|10 mixin mod nil not notin|10 object|0 of or out proc|10 ptr raise ref|10 return shl shr static template|10 try|0 tuple type|0 using|0 var|0 when while|0 with without xor yield",
            literal: "shared guarded stdin stdout stderr result|10 true false"
        },
        c: [ {
            cN: "decorator",
            b: /{\./,
            e: /\.}/,
            r: 10
        }, {
            cN: "string",
            b: /[a-zA-Z]\w*"/,
            e: /"/,
            c: [ {
                b: /""/
            } ]
        }, {
            cN: "string",
            b: /([a-zA-Z]\w*)?"""/,
            e: /"""/
        }, {
            cN: "string",
            b: /"/,
            e: /"/,
            i: /\n/,
            c: [ {
                b: /\\./
            } ]
        }, {
            cN: "type",
            b: /\b[A-Z]\w+\b/,
            r: 0
        }, {
            cN: "type",
            b: /\b(int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|float|float32|float64|bool|char|string|cstring|pointer|expr|stmt|void|auto|any|range|array|openarray|varargs|seq|set|clong|culong|cchar|cschar|cshort|cint|csize|clonglong|cfloat|cdouble|clongdouble|cuchar|cushort|cuint|culonglong|cstringarray|semistatic)\b/
        }, {
            cN: "number",
            b: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/,
            r: 0
        }, {
            cN: "number",
            b: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/,
            r: 0
        }, {
            cN: "number",
            b: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/,
            r: 0
        }, {
            cN: "number",
            b: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/,
            r: 0
        }, a.HCM ]
    };
}), hljs.registerLanguage("nix", function(a) {
    var b = {
        keyword: "rec with let in inherit assert if else then",
        constant: "true false or and null",
        built_in: "import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation"
    }, c = {
        cN: "subst",
        b: /\$\{/,
        e: /\}/,
        k: b
    }, d = {
        cN: "variable",
        b: /[a-zA-Z0-9-_]+(\s*=)/
    }, e = {
        cN: "string",
        b: "''",
        e: "''",
        c: [ c ]
    }, f = {
        cN: "string",
        b: '"',
        e: '"',
        c: [ c ]
    }, g = [ a.NM, a.HCM, a.CBCM, e, f, d ];
    return c.c = g, {
        aliases: [ "nixos" ],
        k: b,
        c: g
    };
}), hljs.registerLanguage("nsis", function(a) {
    var b = {
        cN: "symbol",
        b: "\\$(ADMINTOOLS|APPDATA|CDBURN_AREA|CMDLINE|COMMONFILES32|COMMONFILES64|COMMONFILES|COOKIES|DESKTOP|DOCUMENTS|EXEDIR|EXEFILE|EXEPATH|FAVORITES|FONTS|HISTORY|HWNDPARENT|INSTDIR|INTERNET_CACHE|LANGUAGE|LOCALAPPDATA|MUSIC|NETHOOD|OUTDIR|PICTURES|PLUGINSDIR|PRINTHOOD|PROFILE|PROGRAMFILES32|PROGRAMFILES64|PROGRAMFILES|QUICKLAUNCH|RECENT|RESOURCES_LOCALIZED|RESOURCES|SENDTO|SMPROGRAMS|SMSTARTUP|STARTMENU|SYSDIR|TEMP|TEMPLATES|VIDEOS|WINDIR)"
    }, c = {
        cN: "constant",
        b: "\\$+{[a-zA-Z0-9_]+}"
    }, d = {
        cN: "variable",
        b: "\\$+[a-zA-Z0-9_]+",
        i: "\\(\\){}"
    }, e = {
        cN: "constant",
        b: "\\$+\\([a-zA-Z0-9_]+\\)"
    }, f = {
        cN: "params",
        b: "(ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HKCR|HKCU|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM|HKPD|HKU|IDABORT|IDCANCEL|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)"
    }, g = {
        cN: "constant",
        b: "\\!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversionsystem|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|searchparse|searchreplace|tempfile|undef|verbose|warning)"
    };
    return {
        cI: !1,
        k: {
            keyword: "Abort AddBrandingImage AddSize AllowRootDirInstall AllowSkipFiles AutoCloseWindow BGFont BGGradient BrandingText BringToFront Call CallInstDLL Caption ChangeUI CheckBitmap ClearErrors CompletedText ComponentText CopyFiles CRCCheck CreateDirectory CreateFont CreateShortCut Delete DeleteINISec DeleteINIStr DeleteRegKey DeleteRegValue DetailPrint DetailsButtonText DirText DirVar DirVerify EnableWindow EnumRegKey EnumRegValue Exch Exec ExecShell ExecWait ExpandEnvStrings File FileBufSize FileClose FileErrorText FileOpen FileRead FileReadByte FileReadUTF16LE FileReadWord FileSeek FileWrite FileWriteByte FileWriteUTF16LE FileWriteWord FindClose FindFirst FindNext FindWindow FlushINI FunctionEnd GetCurInstType GetCurrentAddress GetDlgItem GetDLLVersion GetDLLVersionLocal GetErrorLevel GetFileTime GetFileTimeLocal GetFullPathName GetFunctionAddress GetInstDirError GetLabelAddress GetTempFileName Goto HideWindow Icon IfAbort IfErrors IfFileExists IfRebootFlag IfSilent InitPluginsDir InstallButtonText InstallColors InstallDir InstallDirRegKey InstProgressFlags InstType InstTypeGetText InstTypeSetText IntCmp IntCmpU IntFmt IntOp IsWindow LangString LicenseBkColor LicenseData LicenseForceSelection LicenseLangString LicenseText LoadLanguageFile LockWindow LogSet LogText ManifestDPIAware ManifestSupportedOS MessageBox MiscButtonText Name Nop OutFile Page PageCallbacks PageExEnd Pop Push Quit ReadEnvStr ReadINIStr ReadRegDWORD ReadRegStr Reboot RegDLL Rename RequestExecutionLevel ReserveFile Return RMDir SearchPath SectionEnd SectionGetFlags SectionGetInstTypes SectionGetSize SectionGetText SectionGroupEnd SectionIn SectionSetFlags SectionSetInstTypes SectionSetSize SectionSetText SendMessage SetAutoClose SetBrandingImage SetCompress SetCompressor SetCompressorDictSize SetCtlColors SetCurInstType SetDatablockOptimize SetDateSave SetDetailsPrint SetDetailsView SetErrorLevel SetErrors SetFileAttributes SetFont SetOutPath SetOverwrite SetPluginUnload SetRebootFlag SetRegView SetShellVarContext SetSilent ShowInstDetails ShowUninstDetails ShowWindow SilentInstall SilentUnInstall Sleep SpaceTexts StrCmp StrCmpS StrCpy StrLen SubCaption SubSectionEnd Unicode UninstallButtonText UninstallCaption UninstallIcon UninstallSubCaption UninstallText UninstPage UnRegDLL Var VIAddVersionKey VIFileVersion VIProductVersion WindowIcon WriteINIStr WriteRegBin WriteRegDWORD WriteRegExpandStr WriteRegStr WriteUninstaller XPStyle",
            literal: "admin all auto both colored current false force hide highest lastused leave listonly none normal notset off on open print show silent silentlog smooth textonly true user "
        },
        c: [ a.HCM, a.CBCM, {
            cN: "string",
            b: '"',
            e: '"',
            i: "\\n",
            c: [ {
                cN: "symbol",
                b: "\\$(\\\\(n|r|t)|\\$)"
            }, b, c, d, e ]
        }, {
            cN: "comment",
            b: ";",
            e: "$",
            r: 0
        }, {
            cN: "function",
            bK: "Function PageEx Section SectionGroup SubSection",
            e: "$"
        }, g, c, d, e, f, a.NM, {
            cN: "literal",
            b: a.IR + "::" + a.IR
        } ]
    };
}), hljs.registerLanguage("objectivec", function(a) {
    var b = {
        keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
        literal: "false true FALSE TRUE nil YES NO NULL",
        built_in: "NSString NSData NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView NSView NSViewController NSWindow NSWindowController NSSet NSUUID NSIndexSet UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection NSURLSession NSURLSessionDataTask NSURLSessionDownloadTask NSURLSessionUploadTask NSURLResponseUIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
    }, c = /[a-zA-Z@][a-zA-Z0-9_]*/, d = "@interface @class @protocol @implementation";
    return {
        aliases: [ "m", "mm", "objc", "obj-c" ],
        k: b,
        l: c,
        i: "</",
        c: [ a.CLCM, a.CBCM, a.CNM, a.QSM, {
            cN: "string",
            v: [ {
                b: '@"',
                e: '"',
                i: "\\n",
                c: [ a.BE ]
            }, {
                b: "'",
                e: "[^\\\\]'",
                i: "[^\\\\][^']"
            } ]
        }, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            c: [ {
                cN: "title",
                v: [ {
                    b: '"',
                    e: '"'
                }, {
                    b: "<",
                    e: ">"
                } ]
            } ]
        }, {
            cN: "class",
            b: "(" + d.split(" ").join("|") + ")\\b",
            e: "({|$)",
            eE: !0,
            k: d,
            l: c,
            c: [ a.UTM ]
        }, {
            cN: "variable",
            b: "\\." + a.UIR,
            r: 0
        } ]
    };
}), hljs.registerLanguage("ocaml", function(a) {
    return {
        aliases: [ "ml" ],
        k: {
            keyword: "and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",
            built_in: "array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",
            literal: "true false"
        },
        i: /\/\/|>>/,
        l: "[a-z_]\\w*!?",
        c: [ {
            cN: "literal",
            b: "\\[(\\|\\|)?\\]|\\(\\)"
        }, {
            cN: "comment",
            b: "\\(\\*",
            e: "\\*\\)",
            c: [ "self" ]
        }, {
            cN: "symbol",
            b: "'[A-Za-z_](?!')[\\w']*"
        }, {
            cN: "tag",
            b: "`[A-Z][\\w']*"
        }, {
            cN: "type",
            b: "\\b[A-Z][\\w']*",
            r: 0
        }, {
            b: "[a-z_]\\w*'[\\w']*"
        }, a.inherit(a.ASM, {
            cN: "char",
            r: 0
        }), a.inherit(a.QSM, {
            i: null
        }), {
            cN: "number",
            b: "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
            r: 0
        }, {
            b: /[-=]>/
        } ]
    };
}), hljs.registerLanguage("oxygene", function(a) {
    var b = "abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained", c = {
        cN: "comment",
        b: "{",
        e: "}",
        r: 0
    }, d = {
        cN: "comment",
        b: "\\(\\*",
        e: "\\*\\)",
        r: 10
    }, e = {
        cN: "string",
        b: "'",
        e: "'",
        c: [ {
            b: "''"
        } ]
    }, f = {
        cN: "string",
        b: "(#\\d+)+"
    }, g = {
        cN: "function",
        bK: "function constructor destructor procedure method",
        e: "[:;]",
        k: "function constructor|10 destructor|10 procedure|10 method|10",
        c: [ a.TM, {
            cN: "params",
            b: "\\(",
            e: "\\)",
            k: b,
            c: [ e, f ]
        }, c, d ]
    };
    return {
        cI: !0,
        k: b,
        i: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
        c: [ c, d, a.CLCM, e, f, a.NM, g, {
            cN: "class",
            b: "=\\bclass\\b",
            e: "end;",
            k: b,
            c: [ e, f, c, d, a.CLCM, g ]
        } ]
    };
}), hljs.registerLanguage("parser3", function(a) {
    return {
        sL: "xml",
        r: 0,
        c: [ {
            cN: "comment",
            b: "^#",
            e: "$"
        }, {
            cN: "comment",
            b: "\\^rem{",
            e: "}",
            r: 10,
            c: [ {
                b: "{",
                e: "}",
                c: [ "self" ]
            } ]
        }, {
            cN: "preprocessor",
            b: "^@(?:BASE|USE|CLASS|OPTIONS)$",
            r: 10
        }, {
            cN: "title",
            b: "@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$"
        }, {
            cN: "variable",
            b: "\\$\\{?[\\w\\-\\.\\:]+\\}?"
        }, {
            cN: "keyword",
            b: "\\^[\\w\\-\\.\\:]+"
        }, {
            cN: "number",
            b: "\\^#[0-9a-fA-F]+"
        }, a.CNM ]
    };
}), hljs.registerLanguage("perl", function(a) {
    var b = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when", c = {
        cN: "subst",
        b: "[$@]\\{",
        e: "\\}",
        k: b
    }, d = {
        b: "->{",
        e: "}"
    }, e = {
        cN: "variable",
        v: [ {
            b: /\$\d/
        }, {
            b: /[\$\%\@](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/
        }, {
            b: /[\$\%\@][^\s\w{]/,
            r: 0
        } ]
    }, f = {
        cN: "comment",
        b: "^(__END__|__DATA__)",
        e: "\\n$",
        r: 5
    }, g = [ a.BE, c, e ], h = [ e, a.HCM, f, {
        cN: "comment",
        b: "^\\=\\w",
        e: "\\=cut",
        eW: !0
    }, d, {
        cN: "string",
        c: g,
        v: [ {
            b: "q[qwxr]?\\s*\\(",
            e: "\\)",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\[",
            e: "\\]",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\{",
            e: "\\}",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\|",
            e: "\\|",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\<",
            e: "\\>",
            r: 5
        }, {
            b: "qw\\s+q",
            e: "q",
            r: 5
        }, {
            b: "'",
            e: "'",
            c: [ a.BE ]
        }, {
            b: '"',
            e: '"'
        }, {
            b: "`",
            e: "`",
            c: [ a.BE ]
        }, {
            b: "{\\w+}",
            c: [],
            r: 0
        }, {
            b: "-?\\w+\\s*\\=\\>",
            c: [],
            r: 0
        } ]
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        b: "(\\/\\/|" + a.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        k: "split return print reverse grep",
        r: 0,
        c: [ a.HCM, f, {
            cN: "regexp",
            b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
            r: 10
        }, {
            cN: "regexp",
            b: "(m|qr)?/",
            e: "/[a-z]*",
            c: [ a.BE ],
            r: 0
        } ]
    }, {
        cN: "sub",
        bK: "sub",
        e: "(\\s*\\(.*?\\))?[;{]",
        r: 5
    }, {
        cN: "operator",
        b: "-\\w\\b",
        r: 0
    } ];
    return c.c = h, d.c = h, {
        aliases: [ "pl" ],
        k: b,
        c: h
    };
}), hljs.registerLanguage("php", function(a) {
    var b = {
        cN: "variable",
        b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
    }, c = {
        cN: "preprocessor",
        b: /<\?(php)?|\?>/
    }, d = {
        cN: "string",
        c: [ a.BE, c ],
        v: [ {
            b: 'b"',
            e: '"'
        }, {
            b: "b'",
            e: "'"
        }, a.inherit(a.ASM, {
            i: null
        }), a.inherit(a.QSM, {
            i: null
        }) ]
    }, e = {
        v: [ a.BNM, a.CNM ]
    };
    return {
        aliases: [ "php3", "php4", "php5", "php6" ],
        cI: !0,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [ a.CLCM, a.HCM, {
            cN: "comment",
            b: "/\\*",
            e: "\\*/",
            c: [ {
                cN: "phpdoc",
                b: "\\s@[A-Za-z]+"
            }, c ]
        }, {
            cN: "comment",
            b: "__halt_compiler.+?;",
            eW: !0,
            k: "__halt_compiler",
            l: a.UIR
        }, {
            cN: "string",
            b: "<<<['\"]?\\w+['\"]?$",
            e: "^\\w+;",
            c: [ a.BE ]
        }, c, b, {
            b: /->+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
        }, {
            cN: "function",
            bK: "function",
            e: /[;{]/,
            eE: !0,
            i: "\\$|\\[|%",
            c: [ a.UTM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: [ "self", b, a.CBCM, d, e ]
            } ]
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            i: /[:\(\$"]/,
            c: [ {
                bK: "extends implements"
            }, a.UTM ]
        }, {
            bK: "namespace",
            e: ";",
            i: /[\.']/,
            c: [ a.UTM ]
        }, {
            bK: "use",
            e: ";",
            c: [ a.UTM ]
        }, {
            b: "=>"
        }, d, e ]
    };
}), hljs.registerLanguage("powershell", function(a) {
    var b = {
        b: "`[\\s\\S]",
        r: 0
    }, c = {
        cN: "variable",
        v: [ {
            b: /\$[\w\d][\w\d_:]*/
        } ]
    }, d = {
        cN: "string",
        b: /"/,
        e: /"/,
        c: [ b, c, {
            cN: "variable",
            b: /\$[A-z]/,
            e: /[^A-z]/
        } ]
    }, e = {
        cN: "string",
        b: /'/,
        e: /'/
    };
    return {
        aliases: [ "ps" ],
        l: /-?[A-z\.\-]+/,
        cI: !0,
        k: {
            keyword: "if else foreach return function do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch",
            literal: "$null $true $false",
            built_in: "Add-Content Add-History Add-Member Add-PSSnapin Clear-Content Clear-Item Clear-Item Property Clear-Variable Compare-Object ConvertFrom-SecureString Convert-Path ConvertTo-Html ConvertTo-SecureString Copy-Item Copy-ItemProperty Export-Alias Export-Clixml Export-Console Export-Csv ForEach-Object Format-Custom Format-List Format-Table Format-Wide Get-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command Get-Content Get-Credential Get-Culture Get-Date Get-EventLog Get-ExecutionPolicy Get-Help Get-History Get-Host Get-Item Get-ItemProperty Get-Location Get-Member Get-PfxCertificate Get-Process Get-PSDrive Get-PSProvider Get-PSSnapin Get-Service Get-TraceSource Get-UICulture Get-Unique Get-Variable Get-WmiObject Group-Object Import-Alias Import-Clixml Import-Csv Invoke-Expression Invoke-History Invoke-Item Join-Path Measure-Command Measure-Object Move-Item Move-ItemProperty New-Alias New-Item New-ItemProperty New-Object New-PSDrive New-Service New-TimeSpan New-Variable Out-Default Out-File Out-Host Out-Null Out-Printer Out-String Pop-Location Push-Location Read-Host Remove-Item Remove-ItemProperty Remove-PSDrive Remove-PSSnapin Remove-Variable Rename-Item Rename-ItemProperty Resolve-Path Restart-Service Resume-Service Select-Object Select-String Set-Acl Set-Alias Set-AuthenticodeSignature Set-Content Set-Date Set-ExecutionPolicy Set-Item Set-ItemProperty Set-Location Set-PSDebug Set-Service Set-TraceSource Set-Variable Sort-Object Split-Path Start-Service Start-Sleep Start-Transcript Stop-Process Stop-Service Stop-Transcript Suspend-Service Tee-Object Test-Path Trace-Command Update-FormatData Update-TypeData Where-Object Write-Debug Write-Error Write-Host Write-Output Write-Progress Write-Verbose Write-Warning",
            operator: "-ne -eq -lt -gt -ge -le -not -like -notlike -match -notmatch -contains -notcontains -in -notin -replace"
        },
        c: [ a.HCM, a.NM, d, e, c ]
    };
}), hljs.registerLanguage("processing", function(a) {
    return {
        k: {
            keyword: "BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject Object StringDict StringList Table TableRow XML false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
            constant: "P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI",
            variable: "displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key keyCode pixels focused frameCount frameRate height width",
            title: "setup draw",
            built_in: "size createGraphics beginDraw createShape loadShape PShape arc ellipse line point quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour millis minute month second year background clear colorMode fill noFill noStroke stroke alpha blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed"
        },
        c: [ a.CLCM, a.CBCM, a.ASM, a.QSM, a.CNM ]
    };
}), hljs.registerLanguage("profile", function(a) {
    return {
        c: [ a.CNM, {
            cN: "built_in",
            b: "{",
            e: "}$",
            eB: !0,
            eE: !0,
            c: [ a.ASM, a.QSM ],
            r: 0
        }, {
            cN: "filename",
            b: "[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",
            e: ":",
            eE: !0
        }, {
            cN: "header",
            b: "(ncalls|tottime|cumtime)",
            e: "$",
            k: "ncalls tottime|10 cumtime|10 filename",
            r: 10
        }, {
            cN: "summary",
            b: "function calls",
            e: "$",
            c: [ a.CNM ],
            r: 10
        }, a.ASM, a.QSM, {
            cN: "function",
            b: "\\(",
            e: "\\)$",
            c: [ a.UTM ],
            r: 0
        } ]
    };
}), hljs.registerLanguage("protobuf", function(a) {
    return {
        k: {
            keyword: "package import option optional required repeated group",
            built_in: "double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes",
            literal: "true false"
        },
        c: [ a.QSM, a.NM, a.CLCM, {
            cN: "class",
            bK: "message enum service",
            e: /\{/,
            i: /\n/,
            c: [ a.inherit(a.TM, {
                starts: {
                    eW: !0,
                    eE: !0
                }
            }) ]
        }, {
            cN: "function",
            bK: "rpc",
            e: /;/,
            eE: !0,
            k: "rpc returns"
        }, {
            cN: "constant",
            b: /^\s*[A-Z_]+/,
            e: /\s*=/,
            eE: !0
        } ]
    };
}), hljs.registerLanguage("puppet", function(a) {
    var b = "augeas computer cron exec file filebucket host interface k5login macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service firewall nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod notify package resources router schedule scheduled_task selboolean selmodule service ssh_authorized_key sshkey stage tidy user vlan yumrepo zfs zone zpool", c = "alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted", d = {
        keyword: "and case class default define else elsif false if in import enherits node or true undef unless main settings $string " + b,
        literal: c,
        built_in: "architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version"
    }, e = {
        cN: "comment",
        b: "#",
        e: "$"
    }, f = {
        cN: "string",
        c: [ a.BE ],
        v: [ {
            b: /'/,
            e: /'/
        }, {
            b: /"/,
            e: /"/
        } ]
    }, g = [ f, e, {
        cN: "keyword",
        bK: "class",
        e: "$|;",
        i: /=/,
        c: [ a.inherit(a.TM, {
            b: "(::)?[A-Za-z_]\\w*(::\\w+)*"
        }), e, f ]
    }, {
        cN: "keyword",
        b: "([a-zA-Z_(::)]+ *\\{)",
        c: [ f, e ],
        r: 0
    }, {
        cN: "keyword",
        b: "(\\}|\\{)",
        r: 0
    }, {
        cN: "function",
        b: "[a-zA-Z_]+\\s*=>"
    }, {
        cN: "constant",
        b: "(::)?(\\b[A-Z][a-z_]*(::)?)+",
        r: 0
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    } ];
    return {
        aliases: [ "pp" ],
        k: d,
        c: g
    };
}), hljs.registerLanguage("python", function(a) {
    var b = {
        cN: "prompt",
        b: /^(>>>|\.\.\.) /
    }, c = {
        cN: "string",
        c: [ a.BE ],
        v: [ {
            b: /(u|b)?r?'''/,
            e: /'''/,
            c: [ b ],
            r: 10
        }, {
            b: /(u|b)?r?"""/,
            e: /"""/,
            c: [ b ],
            r: 10
        }, {
            b: /(u|r|ur)'/,
            e: /'/,
            r: 10
        }, {
            b: /(u|r|ur)"/,
            e: /"/,
            r: 10
        }, {
            b: /(b|br)'/,
            e: /'/
        }, {
            b: /(b|br)"/,
            e: /"/
        }, a.ASM, a.QSM ]
    }, d = {
        cN: "number",
        r: 0,
        v: [ {
            b: a.BNR + "[lLjJ]?"
        }, {
            b: "\\b(0o[0-7]+)[lLjJ]?"
        }, {
            b: a.CNR + "[lLjJ]?"
        } ]
    }, e = {
        cN: "params",
        b: /\(/,
        e: /\)/,
        c: [ "self", b, d, c ]
    };
    return {
        aliases: [ "py", "gyp" ],
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        },
        i: /(<\/|->|\?)/,
        c: [ b, d, c, a.HCM, {
            v: [ {
                cN: "function",
                bK: "def",
                r: 10
            }, {
                cN: "class",
                bK: "class"
            } ],
            e: /:/,
            i: /[${=;\n]/,
            c: [ a.UTM, e ]
        }, {
            cN: "decorator",
            b: /@/,
            e: /$/
        }, {
            b: /\b(print|exec)\(/
        } ]
    };
}), hljs.registerLanguage("q", function(a) {
    var b = {
        keyword: "do while select delete by update from",
        constant: "0b 1b",
        built_in: "neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum",
        typename: "`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid"
    };
    return {
        aliases: [ "k", "kdb" ],
        k: b,
        l: /\b(`?)[A-Za-z0-9_]+\b/,
        c: [ a.CLCM, a.QSM, a.CNM ]
    };
}), hljs.registerLanguage("r", function(a) {
    var b = "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
    return {
        c: [ a.HCM, {
            b: b,
            l: b,
            k: {
                keyword: "function if in break next repeat else for return switch while try tryCatch|10 stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...|10",
                literal: "NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"
            },
            r: 0
        }, {
            cN: "number",
            b: "0[xX][0-9a-fA-F]+[Li]?\\b",
            r: 0
        }, {
            cN: "number",
            b: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
            r: 0
        }, {
            cN: "number",
            b: "\\d+\\.(?!\\d)(?:i\\b)?",
            r: 0
        }, {
            cN: "number",
            b: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
            r: 0
        }, {
            cN: "number",
            b: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
            r: 0
        }, {
            b: "`",
            e: "`",
            r: 0
        }, {
            cN: "string",
            c: [ a.BE ],
            v: [ {
                b: '"',
                e: '"'
            }, {
                b: "'",
                e: "'"
            } ]
        } ]
    };
}), hljs.registerLanguage("rib", function(a) {
    return {
        k: "ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry Hider Hyperboloid Identity Illuminate Imager Interior LightSource MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd TransformPoints Translate TrimCurve WorldBegin WorldEnd",
        i: "</",
        c: [ a.HCM, a.CNM, a.ASM, a.QSM ]
    };
}), hljs.registerLanguage("roboconf", function(a) {
    var b = "[a-zA-Z-_][^\n{\r\n]+\\{";
    return {
        aliases: [ "graph", "instances" ],
        cI: !0,
        k: "import",
        c: [ {
            cN: "facet",
            b: "^facet " + b,
            e: "}",
            k: "facet installer exports children extends",
            c: [ a.HCM ]
        }, {
            cN: "instance-of",
            b: "^instance of " + b,
            e: "}",
            k: "name count channels instance-data instance-state instance of",
            c: [ {
                cN: "keyword",
                b: "[a-zA-Z-_]+( |	)*:"
            }, a.HCM ]
        }, {
            cN: "component",
            b: "^" + b,
            e: "}",
            l: "\\(?[a-zA-Z]+\\)?",
            k: "installer exports children extends imports facets alias (optional)",
            c: [ {
                cN: "string",
                b: "\\.[a-zA-Z-_]+",
                e: "\\s|,|;",
                eE: !0
            }, a.HCM ]
        }, a.HCM ]
    };
}), hljs.registerLanguage("rsl", function(a) {
    return {
        k: {
            keyword: "float color point normal vector matrix while for if do return else break extern continue",
            built_in: "abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp faceforward filterstep floor format fresnel incident length lightsource log match max min mod noise normalize ntransform opposite option phong pnoise pow printf ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan texture textureinfo trace transform vtransform xcomp ycomp zcomp"
        },
        i: "</",
        c: [ a.CLCM, a.CBCM, a.QSM, a.ASM, a.CNM, {
            cN: "preprocessor",
            b: "#",
            e: "$"
        }, {
            cN: "shader",
            bK: "surface displacement light volume imager",
            e: "\\("
        }, {
            cN: "shading",
            bK: "illuminate illuminance gather",
            e: "\\("
        } ]
    };
}), hljs.registerLanguage("ruleslanguage", function(a) {
    return {
        k: {
            keyword: "BILL_PERIOD BILL_START BILL_STOP RS_EFFECTIVE_START RS_EFFECTIVE_STOP RS_JURIS_CODE RS_OPCO_CODE INTDADDATTRIBUTE|5 INTDADDVMSG|5 INTDBLOCKOP|5 INTDBLOCKOPNA|5 INTDCLOSE|5 INTDCOUNT|5 INTDCOUNTSTATUSCODE|5 INTDCREATEMASK|5 INTDCREATEDAYMASK|5 INTDCREATEFACTORMASK|5 INTDCREATEHANDLE|5 INTDCREATEOVERRIDEDAYMASK|5 INTDCREATEOVERRIDEMASK|5 INTDCREATESTATUSCODEMASK|5 INTDCREATETOUPERIOD|5 INTDDELETE|5 INTDDIPTEST|5 INTDEXPORT|5 INTDGETERRORCODE|5 INTDGETERRORMESSAGE|5 INTDISEQUAL|5 INTDJOIN|5 INTDLOAD|5 INTDLOADACTUALCUT|5 INTDLOADDATES|5 INTDLOADHIST|5 INTDLOADLIST|5 INTDLOADLISTDATES|5 INTDLOADLISTENERGY|5 INTDLOADLISTHIST|5 INTDLOADRELATEDCHANNEL|5 INTDLOADSP|5 INTDLOADSTAGING|5 INTDLOADUOM|5 INTDLOADUOMDATES|5 INTDLOADUOMHIST|5 INTDLOADVERSION|5 INTDOPEN|5 INTDREADFIRST|5 INTDREADNEXT|5 INTDRECCOUNT|5 INTDRELEASE|5 INTDREPLACE|5 INTDROLLAVG|5 INTDROLLPEAK|5 INTDSCALAROP|5 INTDSCALE|5 INTDSETATTRIBUTE|5 INTDSETDSTPARTICIPANT|5 INTDSETSTRING|5 INTDSETVALUE|5 INTDSETVALUESTATUS|5 INTDSHIFTSTARTTIME|5 INTDSMOOTH|5 INTDSORT|5 INTDSPIKETEST|5 INTDSUBSET|5 INTDTOU|5 INTDTOURELEASE|5 INTDTOUVALUE|5 INTDUPDATESTATS|5 INTDVALUE|5 STDEV INTDDELETEEX|5 INTDLOADEXACTUAL|5 INTDLOADEXCUT|5 INTDLOADEXDATES|5 INTDLOADEX|5 INTDLOADEXRELATEDCHANNEL|5 INTDSAVEEX|5 MVLOAD|5 MVLOADACCT|5 MVLOADACCTDATES|5 MVLOADACCTHIST|5 MVLOADDATES|5 MVLOADHIST|5 MVLOADLIST|5 MVLOADLISTDATES|5 MVLOADLISTHIST|5 IF FOR NEXT DONE SELECT END CALL ABORT CLEAR CHANNEL FACTOR LIST NUMBER OVERRIDE SET WEEK DISTRIBUTIONNODE ELSE WHEN THEN OTHERWISE IENUM CSV INCLUDE LEAVE RIDER SAVE DELETE NOVALUE SECTION WARN SAVE_UPDATE DETERMINANT LABEL REPORT REVENUE EACH IN FROM TOTAL CHARGE BLOCK AND OR CSV_FILE RATE_CODE AUXILIARY_DEMAND UIDACCOUNT RS BILL_PERIOD_SELECT HOURS_PER_MONTH INTD_ERROR_STOP SEASON_SCHEDULE_NAME ACCOUNTFACTOR ARRAYUPPERBOUND CALLSTOREDPROC GETADOCONNECTION GETCONNECT GETDATASOURCE GETQUALIFIER GETUSERID HASVALUE LISTCOUNT LISTOP LISTUPDATE LISTVALUE PRORATEFACTOR RSPRORATE SETBINPATH SETDBMONITOR WQ_OPEN BILLINGHOURS DATE DATEFROMFLOAT DATETIMEFROMSTRING DATETIMETOSTRING DATETOFLOAT DAY DAYDIFF DAYNAME DBDATETIME HOUR MINUTE MONTH MONTHDIFF MONTHHOURS MONTHNAME ROUNDDATE SAMEWEEKDAYLASTYEAR SECOND WEEKDAY WEEKDIFF YEAR YEARDAY YEARSTR COMPSUM HISTCOUNT HISTMAX HISTMIN HISTMINNZ HISTVALUE MAXNRANGE MAXRANGE MINRANGE COMPIKVA COMPKVA COMPKVARFROMKQKW COMPLF IDATTR FLAG LF2KW LF2KWH MAXKW POWERFACTOR READING2USAGE AVGSEASON MAXSEASON MONTHLYMERGE SEASONVALUE SUMSEASON ACCTREADDATES ACCTTABLELOAD CONFIGADD CONFIGGET CREATEOBJECT CREATEREPORT EMAILCLIENT EXPBLKMDMUSAGE EXPMDMUSAGE EXPORT_USAGE FACTORINEFFECT GETUSERSPECIFIEDSTOP INEFFECT ISHOLIDAY RUNRATE SAVE_PROFILE SETREPORTTITLE USEREXIT WATFORRUNRATE TO TABLE ACOS ASIN ATAN ATAN2 BITAND CEIL COS COSECANT COSH COTANGENT DIVQUOT DIVREM EXP FABS FLOOR FMOD FREPM FREXPN LOG LOG10 MAX MAXN MIN MINNZ MODF POW ROUND ROUND2VALUE ROUNDINT SECANT SIN SINH SQROOT TAN TANH FLOAT2STRING FLOAT2STRINGNC INSTR LEFT LEN LTRIM MID RIGHT RTRIM STRING STRINGNC TOLOWER TOUPPER TRIM NUMDAYS READ_DATE STAGING",
            built_in: "IDENTIFIER OPTIONS XML_ELEMENT XML_OP XML_ELEMENT_OF DOMDOCCREATE DOMDOCLOADFILE DOMDOCLOADXML DOMDOCSAVEFILE DOMDOCGETROOT DOMDOCADDPI DOMNODEGETNAME DOMNODEGETTYPE DOMNODEGETVALUE DOMNODEGETCHILDCT DOMNODEGETFIRSTCHILD DOMNODEGETSIBLING DOMNODECREATECHILDELEMENT DOMNODESETATTRIBUTE DOMNODEGETCHILDELEMENTCT DOMNODEGETFIRSTCHILDELEMENT DOMNODEGETSIBLINGELEMENT DOMNODEGETATTRIBUTECT DOMNODEGETATTRIBUTEI DOMNODEGETATTRIBUTEBYNAME DOMNODEGETBYNAME"
        },
        c: [ a.CLCM, a.CBCM, a.ASM, a.QSM, a.CNM, {
            cN: "array",
            b: "#[a-zA-Z .]+"
        } ]
    };
}), hljs.registerLanguage("rust", function(a) {
    var b = a.inherit(a.CBCM);
    return b.c.push("self"), {
        aliases: [ "rs" ],
        k: {
            keyword: "alignof as be box break const continue crate do else enum extern false fn for if impl in let loop match mod mut offsetof once priv proc pub pure ref return self sizeof static struct super trait true type typeof unsafe unsized use virtual while yield int i8 i16 i32 i64 uint u8 u32 u64 float f32 f64 str char bool",
            built_in: "assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln!"
        },
        l: a.IR + "!?",
        i: "</",
        c: [ a.CLCM, b, a.inherit(a.QSM, {
            i: null
        }), {
            cN: "string",
            b: /r(#*)".*?"\1(?!#)/
        }, {
            cN: "string",
            b: /'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
        }, {
            b: /'[a-zA-Z_][a-zA-Z0-9_]*/
        }, {
            cN: "number",
            b: /\b(0[xb][A-Za-z0-9_]+|[0-9_]+(\.[0-9_]+)?([eE][+-]?[0-9_]+)?)([uif](8|16|32|64)?)?/,
            r: 0
        }, {
            cN: "function",
            bK: "fn",
            e: "(\\(|<)",
            eE: !0,
            c: [ a.UTM ]
        }, {
            cN: "preprocessor",
            b: "#\\[",
            e: "\\]"
        }, {
            bK: "type",
            e: "(=|<)",
            c: [ a.UTM ],
            i: "\\S"
        }, {
            bK: "trait enum",
            e: "({|<)",
            c: [ a.UTM ],
            i: "\\S"
        }, {
            b: a.IR + "::"
        }, {
            b: "->"
        } ]
    };
}), hljs.registerLanguage("scala", function(a) {
    var b = {
        cN: "annotation",
        b: "@[A-Za-z]+"
    }, c = {
        cN: "string",
        b: 'u?r?"""',
        e: '"""',
        r: 10
    }, d = {
        cN: "symbol",
        b: "'\\w[\\w\\d_]*(?!')"
    }, e = {
        cN: "type",
        b: "\\b[A-Z][A-Za-z0-9_]*",
        r: 0
    }, f = {
        cN: "title",
        b: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
        r: 0
    }, g = {
        cN: "class",
        bK: "class object trait type",
        e: /[:={\[(\n;]/,
        c: [ {
            cN: "keyword",
            bK: "extends with",
            r: 10
        }, f ]
    }, h = {
        cN: "function",
        bK: "def val",
        e: /[:={\[(\n;]/,
        c: [ f ]
    };
    return {
        k: {
            literal: "true false null",
            keyword: "type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"
        },
        c: [ a.CLCM, a.CBCM, c, a.QSM, d, e, h, g, a.CNM, b ]
    };
}), hljs.registerLanguage("scheme", function(a) {
    var b = "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+", c = "(\\-|\\+)?\\d+([./]\\d+)?", d = c + "[+\\-]" + c + "i", e = {
        built_in: "case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"
    }, f = {
        cN: "shebang",
        b: "^#!",
        e: "$"
    }, g = {
        cN: "literal",
        b: "(#t|#f|#\\\\" + b + "|#\\\\.)"
    }, h = {
        cN: "number",
        v: [ {
            b: c,
            r: 0
        }, {
            b: d,
            r: 0
        }, {
            b: "#b[0-1]+(/[0-1]+)?"
        }, {
            b: "#o[0-7]+(/[0-7]+)?"
        }, {
            b: "#x[0-9a-f]+(/[0-9a-f]+)?"
        } ]
    }, i = a.QSM, j = {
        cN: "comment",
        v: [ {
            b: ";",
            e: "$",
            r: 0
        }, {
            b: "#\\|",
            e: "\\|#"
        } ]
    }, k = {
        b: b,
        r: 0
    }, l = {
        cN: "variable",
        b: "'" + b
    }, m = {
        eW: !0,
        r: 0
    }, n = {
        cN: "list",
        v: [ {
            b: "\\(",
            e: "\\)"
        }, {
            b: "\\[",
            e: "\\]"
        } ],
        c: [ {
            cN: "keyword",
            b: b,
            l: b,
            k: e
        }, m ]
    };
    return m.c = [ g, h, i, j, k, l, n ], {
        i: /\S/,
        c: [ f, h, i, j, l, n ]
    };
}), hljs.registerLanguage("scilab", function(a) {
    var b = [ a.CNM, {
        cN: "string",
        b: "'|\"",
        e: "'|\"",
        c: [ a.BE, {
            b: "''"
        } ]
    } ];
    return {
        aliases: [ "sci" ],
        k: {
            keyword: "abort break case clear catch continue do elseif else endfunction end for functionglobal if pause return resume select try then while%f %F %t %T %pi %eps %inf %nan %e %i %z %s",
            built_in: "abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp errorexec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isemptyisinfisnan isvector lasterror length load linspace list listfiles log10 log2 logmax min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand realround sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tantype typename warning zeros matrix"
        },
        i: '("|#|/\\*|\\s+/\\w+)',
        c: [ {
            cN: "function",
            bK: "function endfunction",
            e: "$",
            k: "function endfunction|10",
            c: [ a.UTM, {
                cN: "params",
                b: "\\(",
                e: "\\)"
            } ]
        }, {
            cN: "transposed_variable",
            b: "[a-zA-Z_][a-zA-Z_0-9]*('+[\\.']*|[\\.']+)",
            e: "",
            r: 0
        }, {
            cN: "matrix",
            b: "\\[",
            e: "\\]'*[\\.']*",
            r: 0,
            c: b
        }, {
            cN: "comment",
            b: "//",
            e: "$"
        } ].concat(b)
    };
}), hljs.registerLanguage("scss", function(a) {
    var b = "[a-zA-Z-][a-zA-Z0-9_-]*", c = {
        cN: "variable",
        b: "(\\$" + b + ")\\b"
    }, d = {
        cN: "function",
        b: b + "\\(",
        rB: !0,
        eE: !0,
        e: "\\("
    }, e = {
        cN: "hexcolor",
        b: "#[0-9A-Fa-f]+"
    };
    return {
        cN: "attribute",
        b: "[A-Z\\_\\.\\-]+",
        e: ":",
        eE: !0,
        i: "[^\\s]",
        starts: {
            cN: "value",
            eW: !0,
            eE: !0,
            c: [ d, e, a.CSSNM, a.QSM, a.ASM, a.CBCM, {
                cN: "important",
                b: "!important"
            } ]
        }
    }, {
        cI: !0,
        i: "[=/|']",
        c: [ a.CLCM, a.CBCM, d, {
            cN: "id",
            b: "\\#[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "attr_selector",
            b: "\\[",
            e: "\\]",
            i: "$"
        }, {
            cN: "tag",
            b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
            r: 0
        }, {
            cN: "pseudo",
            b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
        }, {
            cN: "pseudo",
            b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
        }, c, {
            cN: "attribute",
            b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
            i: "[^\\s]"
        }, {
            cN: "value",
            b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
        }, {
            cN: "value",
            b: ":",
            e: ";",
            c: [ d, c, e, a.CSSNM, a.QSM, a.ASM, {
                cN: "important",
                b: "!important"
            } ]
        }, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
            c: [ d, c, a.QSM, a.ASM, e, a.CSSNM, {
                cN: "preprocessor",
                b: "\\s[A-Za-z0-9_.-]+",
                r: 0
            } ]
        } ]
    };
}), hljs.registerLanguage("smali", function() {
    var a = [ "add", "and", "cmp", "cmpg", "cmpl", "const", "div", "double", "float", "goto", "if", "int", "long", "move", "mul", "neg", "new", "nop", "not", "or", "rem", "return", "shl", "shr", "sput", "sub", "throw", "ushr", "xor" ], b = [ "aget", "aput", "array", "check", "execute", "fill", "filled", "goto/16", "goto/32", "iget", "instance", "invoke", "iput", "monitor", "packed", "sget", "sparse" ], c = [ "transient", "constructor", "abstract", "final", "synthetic", "public", "private", "protected", "static", "bridge", "system" ];
    return {
        aliases: [ "smali" ],
        c: [ {
            cN: "string",
            b: '"',
            e: '"',
            r: 0
        }, {
            cN: "comment",
            b: "#",
            e: "$",
            r: 0
        }, {
            cN: "keyword",
            b: "\\s*\\.end\\s[a-zA-Z0-9]*",
            r: 1
        }, {
            cN: "keyword",
            b: "^[ ]*\\.[a-zA-Z]*",
            r: 0
        }, {
            cN: "keyword",
            b: "\\s:[a-zA-Z_0-9]*",
            r: 0
        }, {
            cN: "keyword",
            b: "\\s(" + c.join("|") + ")",
            r: 1
        }, {
            cN: "keyword",
            b: "\\[",
            r: 0
        }, {
            cN: "instruction",
            b: "\\s(" + a.join("|") + ")\\s",
            r: 1
        }, {
            cN: "instruction",
            b: "\\s(" + a.join("|") + ")((\\-|/)[a-zA-Z0-9]+)+\\s",
            r: 10
        }, {
            cN: "instruction",
            b: "\\s(" + b.join("|") + ")((\\-|/)[a-zA-Z0-9]+)*\\s",
            r: 10
        }, {
            cN: "class",
            b: "L[^(;:\n]*;",
            r: 0
        }, {
            cN: "function",
            b: '( |->)[^(\n ;"]*\\(',
            r: 0
        }, {
            cN: "function",
            b: "\\)",
            r: 0
        }, {
            cN: "variable",
            b: "[vp][0-9]+",
            r: 0
        } ]
    };
}), hljs.registerLanguage("smalltalk", function(a) {
    var b = "[a-z][a-zA-Z0-9_]*", c = {
        cN: "char",
        b: "\\$.{1}"
    }, d = {
        cN: "symbol",
        b: "#" + a.UIR
    };
    return {
        aliases: [ "st" ],
        k: "self super nil true false thisContext",
        c: [ {
            cN: "comment",
            b: '"',
            e: '"'
        }, a.ASM, {
            cN: "class",
            b: "\\b[A-Z][A-Za-z0-9_]*",
            r: 0
        }, {
            cN: "method",
            b: b + ":",
            r: 0
        }, a.CNM, d, c, {
            cN: "localvars",
            b: "\\|[ ]*" + b + "([ ]+" + b + ")*[ ]*\\|",
            rB: !0,
            e: /\|/,
            i: /\S/,
            c: [ {
                b: "(\\|[ ]*)?" + b
            } ]
        }, {
            cN: "array",
            b: "\\#\\(",
            e: "\\)",
            c: [ a.ASM, c, a.CNM, d ]
        } ]
    };
}), hljs.registerLanguage("sml", function(a) {
    return {
        aliases: [ "ml" ],
        k: {
            keyword: "abstype and andalso as case datatype do else end eqtype exception fn fun functor handle if in include infix infixr let local nonfix of op open orelse raise rec sharing sig signature struct structure then type val with withtype where while",
            built_in: "array bool char exn int list option order real ref string substring vector unit word",
            literal: "true false NONE SOME LESS EQUAL GREATER nil"
        },
        i: /\/\/|>>/,
        l: "[a-z_]\\w*!?",
        c: [ {
            cN: "literal",
            b: "\\[(\\|\\|)?\\]|\\(\\)"
        }, {
            cN: "comment",
            b: "\\(\\*",
            e: "\\*\\)",
            c: [ "self", a.PWM ]
        }, {
            cN: "symbol",
            b: "'[A-Za-z_](?!')[\\w']*"
        }, {
            cN: "tag",
            b: "`[A-Z][\\w']*"
        }, {
            cN: "type",
            b: "\\b[A-Z][\\w']*",
            r: 0
        }, {
            b: "[a-z_]\\w*'[\\w']*"
        }, a.inherit(a.ASM, {
            cN: "char",
            r: 0
        }), a.inherit(a.QSM, {
            i: null
        }), {
            cN: "number",
            b: "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
            r: 0
        }, {
            b: /[-=]>/
        } ]
    };
}), hljs.registerLanguage("sql", function(a) {
    var b = {
        cN: "comment",
        b: "--",
        e: "$"
    };
    return {
        cI: !0,
        i: /[<>]/,
        c: [ {
            cN: "operator",
            bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",
            e: /;/,
            eW: !0,
            k: {
                keyword: "abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",
                literal: "true false null",
                built_in: "array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"
            },
            c: [ {
                cN: "string",
                b: "'",
                e: "'",
                c: [ a.BE, {
                    b: "''"
                } ]
            }, {
                cN: "string",
                b: '"',
                e: '"',
                c: [ a.BE, {
                    b: '""'
                } ]
            }, {
                cN: "string",
                b: "`",
                e: "`",
                c: [ a.BE ]
            }, a.CNM, a.CBCM, b ]
        }, a.CBCM, b ]
    };
}), hljs.registerLanguage("stata", function(a) {
    return {
        aliases: [ "do", "ado" ],
        cI: !0,
        k: "if else in foreach for forv forva forval forvalu forvalue forvalues by bys bysort xi quietly qui capture about ac ac_7 acprplot acprplot_7 adjust ado adopath adoupdate alpha ameans an ano anov anova anova_estat anova_terms anovadef aorder ap app appe appen append arch arch_dr arch_estat arch_p archlm areg areg_p args arima arima_dr arima_estat arima_p as asmprobit asmprobit_estat asmprobit_lf asmprobit_mfx__dlg asmprobit_p ass asse asser assert avplot avplot_7 avplots avplots_7 bcskew0 bgodfrey binreg bip0_lf biplot bipp_lf bipr_lf bipr_p biprobit bitest bitesti bitowt blogit bmemsize boot bootsamp bootstrap bootstrap_8 boxco_l boxco_p boxcox boxcox_6 boxcox_p bprobit br break brier bro brow brows browse brr brrstat bs bs_7 bsampl_w bsample bsample_7 bsqreg bstat bstat_7 bstat_8 bstrap bstrap_7 ca ca_estat ca_p cabiplot camat canon canon_8 canon_8_p canon_estat canon_p cap caprojection capt captu captur capture cat cc cchart cchart_7 cci cd censobs_table centile cf char chdir checkdlgfiles checkestimationsample checkhlpfiles checksum chelp ci cii cl class classutil clear cli clis clist clo clog clog_lf clog_p clogi clogi_sw clogit clogit_lf clogit_p clogitp clogl_sw cloglog clonevar clslistarray cluster cluster_measures cluster_stop cluster_tree cluster_tree_8 clustermat cmdlog cnr cnre cnreg cnreg_p cnreg_sw cnsreg codebook collaps4 collapse colormult_nb colormult_nw compare compress conf confi confir confirm conren cons const constr constra constrai constrain constraint continue contract copy copyright copysource cor corc corr corr2data corr_anti corr_kmo corr_smc corre correl correla correlat correlate corrgram cou coun count cox cox_p cox_sw coxbase coxhaz coxvar cprplot cprplot_7 crc cret cretu cretur creturn cross cs cscript cscript_log csi ct ct_is ctset ctst_5 ctst_st cttost cumsp cumsp_7 cumul cusum cusum_7 cutil d datasig datasign datasigna datasignat datasignatu datasignatur datasignature datetof db dbeta de dec deco decod decode deff des desc descr descri describ describe destring dfbeta dfgls dfuller di di_g dir dirstats dis discard disp disp_res disp_s displ displa display distinct do doe doed doedi doedit dotplot dotplot_7 dprobit drawnorm drop ds ds_util dstdize duplicates durbina dwstat dydx e ed edi edit egen eivreg emdef en enc enco encod encode eq erase ereg ereg_lf ereg_p ereg_sw ereghet ereghet_glf ereghet_glf_sh ereghet_gp ereghet_ilf ereghet_ilf_sh ereghet_ip eret eretu eretur ereturn err erro error est est_cfexist est_cfname est_clickable est_expand est_hold est_table est_unhold est_unholdok estat estat_default estat_summ estat_vce_only esti estimates etodow etof etomdy ex exi exit expand expandcl fac fact facto factor factor_estat factor_p factor_pca_rotated factor_rotate factormat fcast fcast_compute fcast_graph fdades fdadesc fdadescr fdadescri fdadescrib fdadescribe fdasav fdasave fdause fh_st file open file read file close file filefilter fillin find_hlp_file findfile findit findit_7 fit fl fli flis flist for5_0 form forma format fpredict frac_154 frac_adj frac_chk frac_cox frac_ddp frac_dis frac_dv frac_in frac_mun frac_pp frac_pq frac_pv frac_wgt frac_xo fracgen fracplot fracplot_7 fracpoly fracpred fron_ex fron_hn fron_p fron_tn fron_tn2 frontier ftodate ftoe ftomdy ftowdate g gamhet_glf gamhet_gp gamhet_ilf gamhet_ip gamma gamma_d2 gamma_p gamma_sw gammahet gdi_hexagon gdi_spokes ge gen gene gener genera generat generate genrank genstd genvmean gettoken gl gladder gladder_7 glim_l01 glim_l02 glim_l03 glim_l04 glim_l05 glim_l06 glim_l07 glim_l08 glim_l09 glim_l10 glim_l11 glim_l12 glim_lf glim_mu glim_nw1 glim_nw2 glim_nw3 glim_p glim_v1 glim_v2 glim_v3 glim_v4 glim_v5 glim_v6 glim_v7 glm glm_6 glm_p glm_sw glmpred glo glob globa global glogit glogit_8 glogit_p gmeans gnbre_lf gnbreg gnbreg_5 gnbreg_p gomp_lf gompe_sw gomper_p gompertz gompertzhet gomphet_glf gomphet_glf_sh gomphet_gp gomphet_ilf gomphet_ilf_sh gomphet_ip gphdot gphpen gphprint gprefs gprobi_p gprobit gprobit_8 gr gr7 gr_copy gr_current gr_db gr_describe gr_dir gr_draw gr_draw_replay gr_drop gr_edit gr_editviewopts gr_example gr_example2 gr_export gr_print gr_qscheme gr_query gr_read gr_rename gr_replay gr_save gr_set gr_setscheme gr_table gr_undo gr_use graph graph7 grebar greigen greigen_7 greigen_8 grmeanby grmeanby_7 gs_fileinfo gs_filetype gs_graphinfo gs_stat gsort gwood h hadimvo hareg hausman haver he heck_d2 heckma_p heckman heckp_lf heckpr_p heckprob hel help hereg hetpr_lf hetpr_p hetprob hettest hexdump hilite hist hist_7 histogram hlogit hlu hmeans hotel hotelling hprobit hreg hsearch icd9 icd9_ff icd9p iis impute imtest inbase include inf infi infil infile infix inp inpu input ins insheet insp inspe inspec inspect integ inten intreg intreg_7 intreg_p intrg2_ll intrg_ll intrg_ll2 ipolate iqreg ir irf irf_create irfm iri is_svy is_svysum isid istdize ivprob_1_lf ivprob_lf ivprobit ivprobit_p ivreg ivreg_footnote ivtob_1_lf ivtob_lf ivtobit ivtobit_p jackknife jacknife jknife jknife_6 jknife_8 jkstat joinby kalarma1 kap kap_3 kapmeier kappa kapwgt kdensity kdensity_7 keep ksm ksmirnov ktau kwallis l la lab labe label labelbook ladder levels levelsof leverage lfit lfit_p li lincom line linktest lis list lloghet_glf lloghet_glf_sh lloghet_gp lloghet_ilf lloghet_ilf_sh lloghet_ip llogi_sw llogis_p llogist llogistic llogistichet lnorm_lf lnorm_sw lnorma_p lnormal lnormalhet lnormhet_glf lnormhet_glf_sh lnormhet_gp lnormhet_ilf lnormhet_ilf_sh lnormhet_ip lnskew0 loadingplot loc loca local log logi logis_lf logistic logistic_p logit logit_estat logit_p loglogs logrank loneway lookfor lookup lowess lowess_7 lpredict lrecomp lroc lroc_7 lrtest ls lsens lsens_7 lsens_x lstat ltable ltable_7 ltriang lv lvr2plot lvr2plot_7 m ma mac macr macro makecns man manova manova_estat manova_p manovatest mantel mark markin markout marksample mat mat_capp mat_order mat_put_rr mat_rapp mata mata_clear mata_describe mata_drop mata_matdescribe mata_matsave mata_matuse mata_memory mata_mlib mata_mosave mata_rename mata_which matalabel matcproc matlist matname matr matri matrix matrix_input__dlg matstrik mcc mcci md0_ md1_ md1debug_ md2_ md2debug_ mds mds_estat mds_p mdsconfig mdslong mdsmat mdsshepard mdytoe mdytof me_derd mean means median memory memsize meqparse mer merg merge mfp mfx mhelp mhodds minbound mixed_ll mixed_ll_reparm mkassert mkdir mkmat mkspline ml ml_5 ml_adjs ml_bhhhs ml_c_d ml_check ml_clear ml_cnt ml_debug ml_defd ml_e0 ml_e0_bfgs ml_e0_cycle ml_e0_dfp ml_e0i ml_e1 ml_e1_bfgs ml_e1_bhhh ml_e1_cycle ml_e1_dfp ml_e2 ml_e2_cycle ml_ebfg0 ml_ebfr0 ml_ebfr1 ml_ebh0q ml_ebhh0 ml_ebhr0 ml_ebr0i ml_ecr0i ml_edfp0 ml_edfr0 ml_edfr1 ml_edr0i ml_eds ml_eer0i ml_egr0i ml_elf ml_elf_bfgs ml_elf_bhhh ml_elf_cycle ml_elf_dfp ml_elfi ml_elfs ml_enr0i ml_enrr0 ml_erdu0 ml_erdu0_bfgs ml_erdu0_bhhh ml_erdu0_bhhhq ml_erdu0_cycle ml_erdu0_dfp ml_erdu0_nrbfgs ml_exde ml_footnote ml_geqnr ml_grad0 ml_graph ml_hbhhh ml_hd0 ml_hold ml_init ml_inv ml_log ml_max ml_mlout ml_mlout_8 ml_model ml_nb0 ml_opt ml_p ml_plot ml_query ml_rdgrd ml_repor ml_s_e ml_score ml_searc ml_technique ml_unhold mleval mlf_ mlmatbysum mlmatsum mlog mlogi mlogit mlogit_footnote mlogit_p mlopts mlsum mlvecsum mnl0_ mor more mov move mprobit mprobit_lf mprobit_p mrdu0_ mrdu1_ mvdecode mvencode mvreg mvreg_estat n nbreg nbreg_al nbreg_lf nbreg_p nbreg_sw nestreg net newey newey_7 newey_p news nl nl_7 nl_9 nl_9_p nl_p nl_p_7 nlcom nlcom_p nlexp2 nlexp2_7 nlexp2a nlexp2a_7 nlexp3 nlexp3_7 nlgom3 nlgom3_7 nlgom4 nlgom4_7 nlinit nllog3 nllog3_7 nllog4 nllog4_7 nlog_rd nlogit nlogit_p nlogitgen nlogittree nlpred no nobreak noi nois noisi noisil noisily note notes notes_dlg nptrend numlabel numlist odbc old_ver olo olog ologi ologi_sw ologit ologit_p ologitp on one onew onewa oneway op_colnm op_comp op_diff op_inv op_str opr opro oprob oprob_sw oprobi oprobi_p oprobit oprobitp opts_exclusive order orthog orthpoly ou out outf outfi outfil outfile outs outsh outshe outshee outsheet ovtest pac pac_7 palette parse parse_dissim pause pca pca_8 pca_display pca_estat pca_p pca_rotate pcamat pchart pchart_7 pchi pchi_7 pcorr pctile pentium pergram pergram_7 permute permute_8 personal peto_st pkcollapse pkcross pkequiv pkexamine pkexamine_7 pkshape pksumm pksumm_7 pl plo plot plugin pnorm pnorm_7 poisgof poiss_lf poiss_sw poisso_p poisson poisson_estat post postclose postfile postutil pperron pr prais prais_e prais_e2 prais_p predict predictnl preserve print pro prob probi probit probit_estat probit_p proc_time procoverlay procrustes procrustes_estat procrustes_p profiler prog progr progra program prop proportion prtest prtesti pwcorr pwd q\\s qby qbys qchi qchi_7 qladder qladder_7 qnorm qnorm_7 qqplot qqplot_7 qreg qreg_c qreg_p qreg_sw qu quadchk quantile quantile_7 que quer query range ranksum ratio rchart rchart_7 rcof recast reclink recode reg reg3 reg3_p regdw regr regre regre_p2 regres regres_p regress regress_estat regriv_p remap ren rena renam rename renpfix repeat replace report reshape restore ret retu retur return rm rmdir robvar roccomp roccomp_7 roccomp_8 rocf_lf rocfit rocfit_8 rocgold rocplot rocplot_7 roctab roctab_7 rolling rologit rologit_p rot rota rotat rotate rotatemat rreg rreg_p ru run runtest rvfplot rvfplot_7 rvpplot rvpplot_7 sa safesum sample sampsi sav save savedresults saveold sc sca scal scala scalar scatter scm_mine sco scob_lf scob_p scobi_sw scobit scor score scoreplot scoreplot_help scree screeplot screeplot_help sdtest sdtesti se search separate seperate serrbar serrbar_7 serset set set_defaults sfrancia sh she shel shell shewhart shewhart_7 signestimationsample signrank signtest simul simul_7 simulate simulate_8 sktest sleep slogit slogit_d2 slogit_p smooth snapspan so sor sort spearman spikeplot spikeplot_7 spikeplt spline_x split sqreg sqreg_p sret sretu sretur sreturn ssc st st_ct st_hc st_hcd st_hcd_sh st_is st_issys st_note st_promo st_set st_show st_smpl st_subid stack statsby statsby_8 stbase stci stci_7 stcox stcox_estat stcox_fr stcox_fr_ll stcox_p stcox_sw stcoxkm stcoxkm_7 stcstat stcurv stcurve stcurve_7 stdes stem stepwise stereg stfill stgen stir stjoin stmc stmh stphplot stphplot_7 stphtest stphtest_7 stptime strate strate_7 streg streg_sw streset sts sts_7 stset stsplit stsum sttocc sttoct stvary stweib su suest suest_8 sum summ summa summar summari summariz summarize sunflower sureg survcurv survsum svar svar_p svmat svy svy_disp svy_dreg svy_est svy_est_7 svy_estat svy_get svy_gnbreg_p svy_head svy_header svy_heckman_p svy_heckprob_p svy_intreg_p svy_ivreg_p svy_logistic_p svy_logit_p svy_mlogit_p svy_nbreg_p svy_ologit_p svy_oprobit_p svy_poisson_p svy_probit_p svy_regress_p svy_sub svy_sub_7 svy_x svy_x_7 svy_x_p svydes svydes_8 svygen svygnbreg svyheckman svyheckprob svyintreg svyintreg_7 svyintrg svyivreg svylc svylog_p svylogit svymarkout svymarkout_8 svymean svymlog svymlogit svynbreg svyolog svyologit svyoprob svyoprobit svyopts svypois svypois_7 svypoisson svyprobit svyprobt svyprop svyprop_7 svyratio svyreg svyreg_p svyregress svyset svyset_7 svyset_8 svytab svytab_7 svytest svytotal sw sw_8 swcnreg swcox swereg swilk swlogis swlogit swologit swoprbt swpois swprobit swqreg swtobit swweib symmetry symmi symplot symplot_7 syntax sysdescribe sysdir sysuse szroeter ta tab tab1 tab2 tab_or tabd tabdi tabdis tabdisp tabi table tabodds tabodds_7 tabstat tabu tabul tabula tabulat tabulate te tempfile tempname tempvar tes test testnl testparm teststd tetrachoric time_it timer tis tob tobi tobit tobit_p tobit_sw token tokeni tokeniz tokenize tostring total translate translator transmap treat_ll treatr_p treatreg trim trnb_cons trnb_mean trpoiss_d2 trunc_ll truncr_p truncreg tsappend tset tsfill tsline tsline_ex tsreport tsrevar tsrline tsset tssmooth tsunab ttest ttesti tut_chk tut_wait tutorial tw tware_st two twoway twoway__fpfit_serset twoway__function_gen twoway__histogram_gen twoway__ipoint_serset twoway__ipoints_serset twoway__kdensity_gen twoway__lfit_serset twoway__normgen_gen twoway__pci_serset twoway__qfit_serset twoway__scatteri_serset twoway__sunflower_gen twoway_ksm_serset ty typ type typeof u unab unabbrev unabcmd update us use uselabel var var_mkcompanion var_p varbasic varfcast vargranger varirf varirf_add varirf_cgraph varirf_create varirf_ctable varirf_describe varirf_dir varirf_drop varirf_erase varirf_graph varirf_ograph varirf_rename varirf_set varirf_table varlist varlmar varnorm varsoc varstable varstable_w varstable_w2 varwle vce vec vec_fevd vec_mkphi vec_p vec_p_w vecirf_create veclmar veclmar_w vecnorm vecnorm_w vecrank vecstable verinst vers versi versio version view viewsource vif vwls wdatetof webdescribe webseek webuse weib1_lf weib2_lf weib_lf weib_lf0 weibhet_glf weibhet_glf_sh weibhet_glfa weibhet_glfa_sh weibhet_gp weibhet_ilf weibhet_ilf_sh weibhet_ilfa weibhet_ilfa_sh weibhet_ip weibu_sw weibul_p weibull weibull_c weibull_s weibullhet wh whelp whi which whil while wilc_st wilcoxon win wind windo window winexec wntestb wntestb_7 wntestq xchart xchart_7 xcorr xcorr_7 xi xi_6 xmlsav xmlsave xmluse xpose xsh xshe xshel xshell xt_iis xt_tis xtab_p xtabond xtbin_p xtclog xtcloglog xtcloglog_8 xtcloglog_d2 xtcloglog_pa_p xtcloglog_re_p xtcnt_p xtcorr xtdata xtdes xtfront_p xtfrontier xtgee xtgee_elink xtgee_estat xtgee_makeivar xtgee_p xtgee_plink xtgls xtgls_p xthaus xthausman xtht_p xthtaylor xtile xtint_p xtintreg xtintreg_8 xtintreg_d2 xtintreg_p xtivp_1 xtivp_2 xtivreg xtline xtline_ex xtlogit xtlogit_8 xtlogit_d2 xtlogit_fe_p xtlogit_pa_p xtlogit_re_p xtmixed xtmixed_estat xtmixed_p xtnb_fe xtnb_lf xtnbreg xtnbreg_pa_p xtnbreg_refe_p xtpcse xtpcse_p xtpois xtpoisson xtpoisson_d2 xtpoisson_pa_p xtpoisson_refe_p xtpred xtprobit xtprobit_8 xtprobit_d2 xtprobit_re_p xtps_fe xtps_lf xtps_ren xtps_ren_8 xtrar_p xtrc xtrc_p xtrchh xtrefe_p xtreg xtreg_be xtreg_fe xtreg_ml xtreg_pa_p xtreg_re xtregar xtrere_p xtset xtsf_ll xtsf_llti xtsum xttab xttest0 xttobit xttobit_8 xttobit_p xttrans yx yxview__barlike_draw yxview_area_draw yxview_bar_draw yxview_dot_draw yxview_dropline_draw yxview_function_draw yxview_iarrow_draw yxview_ilabels_draw yxview_normal_draw yxview_pcarrow_draw yxview_pcbarrow_draw yxview_pccapsym_draw yxview_pcscatter_draw yxview_pcspike_draw yxview_rarea_draw yxview_rbar_draw yxview_rbarm_draw yxview_rcap_draw yxview_rcapsym_draw yxview_rconnected_draw yxview_rline_draw yxview_rscatter_draw yxview_rspike_draw yxview_spike_draw yxview_sunflower_draw zap_s zinb zinb_llf zinb_plf zip zip_llf zip_p zip_plf zt_ct_5 zt_hc_5 zt_hcd_5 zt_is_5 zt_iss_5 zt_sho_5 zt_smp_5 ztbase_5 ztcox_5 ztdes_5 ztereg_5 ztfill_5 ztgen_5 ztir_5 ztjoin_5 ztnb ztnb_p ztp ztp_p zts_5 ztset_5 ztspli_5 ztsum_5 zttoct_5 ztvary_5 ztweib_5",
        c: [ {
            cN: "label",
            v: [ {
                b: "\\$\\{?[a-zA-Z_]+\\}?"
            }, {
                b: "`[a-zA-Z_]+'"
            } ]
        }, {
            cN: "string",
            v: [ {
                b: '`".*"\''
            }, {
                b: '".*"'
            } ]
        }, {
            cN: "literal",
            v: [ {
                b: "\\b(abs|acos|asin|atan|atan2|atanh|ceil|cloglog|comb|cos|digamma|exp|floor|invcloglog|invlogit|ln|lnfact|lnfactorial|lngamma|log|log10|max|min|mod|reldif|round|sign|sin|sqrt|sum|tan|tanh|trigamma|trunc|betaden|Binomial|binorm|binormal|chi2|chi2tail|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|F|Fden|Ftail|gammaden|gammap|ibeta|invbinomial|invchi2|invchi2tail|invF|invFtail|invgammap|invibeta|invnchi2|invnFtail|invnibeta|invnorm|invnormal|invttail|nbetaden|nchi2|nFden|nFtail|nibeta|norm|normal|normalden|normd|npnchi2|tden|ttail|uniform|abbrev|char|index|indexnot|length|lower|ltrim|match|plural|proper|real|regexm|regexr|regexs|reverse|rtrim|string|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrtrim|strtrim|strupper|subinstr|subinword|substr|trim|upper|word|wordcount|_caller|autocode|byteorder|chop|clip|cond|e|epsdouble|epsfloat|group|inlist|inrange|irecode|matrix|maxbyte|maxdouble|maxfloat|maxint|maxlong|mi|minbyte|mindouble|minfloat|minint|minlong|missing|r|recode|replay|return|s|scalar|d|date|day|dow|doy|halfyear|mdy|month|quarter|week|year|d|daily|dofd|dofh|dofm|dofq|dofw|dofy|h|halfyearly|hofd|m|mofd|monthly|q|qofd|quarterly|tin|twithin|w|weekly|wofd|y|yearly|yh|ym|yofd|yq|yw|cholesky|colnumb|colsof|corr|det|diag|diag0cnt|el|get|hadamard|I|inv|invsym|issym|issymmetric|J|matmissing|matuniform|mreldif|nullmat|rownumb|rowsof|sweep|syminv|trace|vec|vecdiag)(?=\\(|$)"
            } ]
        }, {
            cN: "comment",
            v: [ {
                b: "^\\*.*$"
            }, a.CLCM, a.CBCM ]
        } ]
    };
}), hljs.registerLanguage("step21", function(a) {
    var b = "[A-Z_][A-Z0-9_.]*", c = "END-ISO-10303-21;", d = {
        literal: "",
        built_in: "",
        keyword: "HEADER ENDSEC DATA"
    }, e = {
        cN: "preprocessor",
        b: "ISO-10303-21;",
        r: 10
    }, f = [ a.CLCM, {
        cN: "comment",
        b: "/\\*\\*!",
        e: "\\*/",
        c: [ a.PWM ]
    }, a.CBCM, a.CNM, a.inherit(a.ASM, {
        i: null
    }), a.inherit(a.QSM, {
        i: null
    }), {
        cN: "string",
        b: "'",
        e: "'"
    }, {
        cN: "label",
        v: [ {
            b: "#",
            e: "\\d+",
            i: "\\W"
        } ]
    } ];
    return {
        aliases: [ "p21", "step", "stp" ],
        cI: !0,
        l: b,
        k: d,
        c: [ {
            cN: "preprocessor",
            b: c,
            r: 10
        }, e ].concat(f)
    };
}), hljs.registerLanguage("stylus", function(a) {
    var b = {
        cN: "variable",
        b: "\\$" + a.IR
    }, c = {
        cN: "hexcolor",
        b: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})",
        r: 10
    }, d = [ "charset", "css", "debug", "extend", "font-face", "for", "import", "include", "media", "mixin", "page", "warn", "while" ], e = [ "after", "before", "first-letter", "first-line", "active", "first-child", "focus", "hover", "lang", "link", "visited" ], f = [ "a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video" ], g = "[\\.\\s\\n\\[\\:,]", h = [ "align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index" ], i = [ "\\{", "\\}", "\\?", "(\\bReturn\\b)", "(\\bEnd\\b)", "(\\bend\\b)", ";", "#\\s", "\\*\\s", "===\\s", "\\|" ];
    return {
        aliases: [ "styl" ],
        cI: !1,
        i: "(" + i.join("|") + ")",
        k: "if else for in",
        c: [ a.QSM, a.ASM, a.CLCM, a.CBCM, c, {
            b: "\\.[a-zA-Z][a-zA-Z0-9_-]*" + g,
            rB: !0,
            c: [ {
                cN: "class",
                b: "\\.[a-zA-Z][a-zA-Z0-9_-]*"
            } ]
        }, {
            b: "\\#[a-zA-Z][a-zA-Z0-9_-]*" + g,
            rB: !0,
            c: [ {
                cN: "id",
                b: "\\#[a-zA-Z][a-zA-Z0-9_-]*"
            } ]
        }, {
            b: "\\b(" + f.join("|") + ")" + g,
            rB: !0,
            c: [ {
                cN: "tag",
                b: "\\b[a-zA-Z][a-zA-Z0-9_-]*"
            } ]
        }, {
            cN: "pseudo",
            b: "&?:?:\\b(" + e.join("|") + ")" + g
        }, {
            cN: "at_rule",
            b: "@(" + d.join("|") + ")\\b"
        }, b, a.CSSNM, a.NM, {
            cN: "function",
            b: "\\b[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)",
            i: "[\\n]",
            rB: !0,
            c: [ {
                cN: "title",
                b: "\\b[a-zA-Z][a-zA-Z0-9_-]*"
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [ c, b, a.ASM, a.CSSNM, a.NM, a.QSM ]
            } ]
        }, {
            cN: "attribute",
            b: "\\b(" + h.reverse().join("|") + ")\\b"
        } ]
    };
}), hljs.registerLanguage("swift", function(a) {
    var b = {
        keyword: "class deinit enum extension func import init let protocol static struct subscript typealias var break case continue default do else fallthrough if in for return switch where while as dynamicType is new super self Self Type __COLUMN__ __FILE__ __FUNCTION__ __LINE__ associativity didSet get infix inout left mutating none nonmutating operator override postfix precedence prefix right set unowned unowned safe unsafe weak willSet",
        literal: "true false nil",
        built_in: "abs advance alignof alignofValue assert bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal false filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced join lexicographicalCompare map max maxElement min minElement nil numericCast partition posix print println quickSort reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith strideof strideofValue swap swift toString transcode true underestimateCount unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafePointers withVaList"
    }, c = {
        cN: "type",
        b: "\\b[A-Z][\\w']*",
        r: 0
    }, d = {
        cN: "comment",
        b: "/\\*",
        e: "\\*/",
        c: [ a.PWM, "self" ]
    }, e = {
        cN: "subst",
        b: /\\\(/,
        e: "\\)",
        k: b,
        c: []
    }, f = {
        cN: "number",
        b: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
        r: 0
    }, g = a.inherit(a.QSM, {
        c: [ e, a.BE ]
    });
    return e.c = [ f ], {
        k: b,
        c: [ g, a.CLCM, d, c, f, {
            cN: "func",
            bK: "func",
            e: "{",
            eE: !0,
            c: [ a.inherit(a.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/,
                i: /\(/
            }), {
                cN: "generics",
                b: /\</,
                e: /\>/,
                i: /\>/
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: b,
                c: [ "self", f, g, a.CBCM, {
                    b: ":"
                } ],
                i: /["']/
            } ],
            i: /\[|%/
        }, {
            cN: "class",
            k: "struct protocol class extension enum",
            b: "(struct|protocol|class(?! (func|var))|extension|enum)",
            e: "\\{",
            eE: !0,
            c: [ a.inherit(a.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }) ]
        }, {
            cN: "preprocessor",
            b: "(@assignment|@class_protocol|@exported|@final|@lazy|@noreturn|@NSCopying|@NSManaged|@objc|@optional|@required|@auto_closure|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix)"
        } ]
    };
}), hljs.registerLanguage("tcl", function(a) {
    return {
        aliases: [ "tk" ],
        k: "after append apply array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock close concat continue dde dict encoding eof error eval exec exit expr fblocked fconfigure fcopy file fileevent filename flush for foreach format gets glob global history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename return safe scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update uplevel upvar variable vwait while",
        c: [ {
            cN: "comment",
            v: [ {
                b: ";[ \\t]*#",
                e: "$"
            }, {
                b: "^[ \\t]*#",
                e: "$"
            } ]
        }, {
            bK: "proc",
            e: "[\\{]",
            eE: !0,
            c: [ {
                cN: "symbol",
                b: "[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
                e: "[ \\t\\n\\r]",
                eW: !0,
                eE: !0
            } ]
        }, {
            cN: "variable",
            eE: !0,
            v: [ {
                b: "\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*\\(([a-zA-Z0-9_])*\\)",
                e: "[^a-zA-Z0-9_\\}\\$]"
            }, {
                b: "\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
                e: "(\\))?[^a-zA-Z0-9_\\}\\$]"
            } ]
        }, {
            cN: "string",
            c: [ a.BE ],
            v: [ a.inherit(a.ASM, {
                i: null
            }), a.inherit(a.QSM, {
                i: null
            }) ]
        }, {
            cN: "number",
            v: [ a.BNM, a.CNM ]
        } ]
    };
}), hljs.registerLanguage("tex", function() {
    var a = {
        cN: "command",
        b: "\\\\[a-zA-Zа-яА-я]+[\\*]?"
    }, b = {
        cN: "command",
        b: "\\\\[^a-zA-Zа-яА-я0-9]"
    }, c = {
        cN: "special",
        b: "[{}\\[\\]\\&#~]",
        r: 0
    };
    return {
        c: [ {
            b: "\\\\[a-zA-Zа-яА-я]+[\\*]? *= *-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",
            rB: !0,
            c: [ a, b, {
                cN: "number",
                b: " *=",
                e: "-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",
                eB: !0
            } ],
            r: 10
        }, a, b, c, {
            cN: "formula",
            b: "\\$\\$",
            e: "\\$\\$",
            c: [ a, b, c ],
            r: 0
        }, {
            cN: "formula",
            b: "\\$",
            e: "\\$",
            c: [ a, b, c ],
            r: 0
        }, {
            cN: "comment",
            b: "%",
            e: "$",
            r: 0
        } ]
    };
}), hljs.registerLanguage("thrift", function(a) {
    var b = "bool byte i16 i32 i64 double string binary";
    return {
        k: {
            keyword: "namespace const typedef struct enum service exception void oneway set list map required optional",
            built_in: b,
            literal: "true false"
        },
        c: [ a.QSM, a.NM, a.CLCM, a.CBCM, {
            cN: "class",
            bK: "struct enum service exception",
            e: /\{/,
            i: /\n/,
            c: [ a.inherit(a.TM, {
                starts: {
                    eW: !0,
                    eE: !0
                }
            }) ]
        }, {
            cN: "stl_container",
            b: "\\b(set|list|map)\\s*<",
            e: ">",
            k: b,
            c: [ "self" ]
        } ]
    };
}), hljs.registerLanguage("twig", function() {
    var a = {
        cN: "params",
        b: "\\(",
        e: "\\)"
    }, b = "attribute block constant cycle date dump include max min parent random range source template_from_string", c = {
        cN: "function",
        bK: b,
        r: 0,
        c: [ a ]
    }, d = {
        cN: "filter",
        b: /\|[A-Za-z]+\:?/,
        k: "abs batch capitalize convert_encoding date date_modify default escape first format join json_encode keys last length lower merge nl2br number_format raw replace reverse round slice sort split striptags title trim upper url_encode",
        c: [ c ]
    }, e = "autoescape block do embed extends filter flush for if import include macro sandbox set spaceless use verbatim";
    return e = e + " " + e.split(" ").map(function(a) {
        return "end" + a;
    }).join(" "), {
        aliases: [ "craftcms" ],
        cI: !0,
        sL: "xml",
        subLanguageMode: "continuous",
        c: [ {
            cN: "comment",
            b: /\{#/,
            e: /#}/
        }, {
            cN: "template_tag",
            b: /\{%/,
            e: /%}/,
            k: e,
            c: [ d, c ]
        }, {
            cN: "variable",
            b: /\{\{/,
            e: /}}/,
            c: [ d, c ]
        } ]
    };
}), hljs.registerLanguage("typescript", function(a) {
    return {
        aliases: [ "ts" ],
        k: {
            keyword: "in if for while finally var new function|0 do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private get set super interface extendsstatic constructor implements enum export import declare",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void"
        },
        c: [ {
            cN: "pi",
            b: /^\s*('|")use strict('|")/,
            r: 0
        }, a.ASM, a.QSM, a.CLCM, a.CBCM, a.CNM, {
            b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [ a.CLCM, a.CBCM, a.RM, {
                b: /</,
                e: />;/,
                r: 0,
                sL: "xml"
            } ],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [ a.inherit(a.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [ a.CLCM, a.CBCM ],
                i: /["'\(]/
            } ],
            i: /\[|%/,
            r: 0
        }, {
            cN: "constructor",
            bK: "constructor",
            e: /\{/,
            eE: !0,
            r: 10
        }, {
            cN: "module",
            bK: "module",
            e: /\{/,
            eE: !0
        }, {
            cN: "interface",
            bK: "interface",
            e: /\{/,
            eE: !0
        }, {
            b: /\$[(.]/
        }, {
            b: "\\." + a.IR,
            r: 0
        } ]
    };
}), hljs.registerLanguage("vala", function(a) {
    return {
        k: {
            keyword: "char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var",
            built_in: "DBus GLib CCode Gee Object",
            literal: "false true null"
        },
        c: [ {
            cN: "class",
            bK: "class interface delegate namespace",
            e: "{",
            eE: !0,
            i: "[^,:\\n\\s\\.]",
            c: [ a.UTM ]
        }, a.CLCM, a.CBCM, {
            cN: "string",
            b: '"""',
            e: '"""',
            r: 5
        }, a.ASM, a.QSM, a.CNM, {
            cN: "preprocessor",
            b: "^#",
            e: "$",
            r: 2
        }, {
            cN: "constant",
            b: " [A-Z_]+ ",
            r: 0
        } ]
    };
}), hljs.registerLanguage("vbnet", function(a) {
    return {
        aliases: [ "vb" ],
        cI: !0,
        k: {
            keyword: "addhandler addressof alias and andalso aggregate ansi as assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into is isfalse isnot istrue join key let lib like loop me mid mod module mustinherit mustoverride mybase myclass namespace narrowing new next not notinheritable notoverridable of off on operator option optional or order orelse overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim rem removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly xor",
            built_in: "boolean byte cbool cbyte cchar cdate cdec cdbl char cint clng cobj csbyte cshort csng cstr ctype date decimal directcast double gettype getxmlnamespace iif integer long object sbyte short single string trycast typeof uinteger ulong ushort",
            literal: "true false nothing"
        },
        i: "//|{|}|endif|gosub|variant|wend",
        c: [ a.inherit(a.QSM, {
            c: [ {
                b: '""'
            } ]
        }), {
            cN: "comment",
            b: "'",
            e: "$",
            rB: !0,
            c: [ {
                cN: "xmlDocTag",
                b: "'''|<!--|-->"
            }, {
                cN: "xmlDocTag",
                b: "</?",
                e: ">"
            } ]
        }, a.CNM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elseif end region externalsource"
        } ]
    };
}), hljs.registerLanguage("vbscript", function(a) {
    return {
        aliases: [ "vbs" ],
        cI: !0,
        k: {
            keyword: "call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",
            built_in: "lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion scriptengine split scriptengineminorversion cint sin datepart ltrim sqr scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw chrw regexp server response request cstr err",
            literal: "true false null nothing empty"
        },
        i: "//",
        c: [ a.inherit(a.QSM, {
            c: [ {
                b: '""'
            } ]
        }), {
            cN: "comment",
            b: /'/,
            e: /$/,
            r: 0
        }, a.CNM ]
    };
}), hljs.registerLanguage("vbscript-html", function() {
    return {
        sL: "xml",
        subLanguageMode: "continuous",
        c: [ {
            b: "<%",
            e: "%>",
            sL: "vbscript"
        } ]
    };
}), hljs.registerLanguage("verilog", function(a) {
    return {
        aliases: [ "v" ],
        cI: !0,
        k: {
            keyword: "always and assign begin buf bufif0 bufif1 case casex casez cmos deassign default defparam disable edge else end endcase endfunction endmodule endprimitive endspecify endtable endtask event for force forever fork function if ifnone initial inout input join macromodule module nand negedge nmos nor not notif0 notif1 or output parameter pmos posedge primitive pulldown pullup rcmos release repeat rnmos rpmos rtran rtranif0 rtranif1 specify specparam table task timescale tran tranif0 tranif1 wait while xnor xor",
            typename: "highz0 highz1 integer large medium pull0 pull1 real realtime reg scalared signed small strong0 strong1 supply0 supply0 supply1 supply1 time tri tri0 tri1 triand trior trireg vectored wand weak0 weak1 wire wor"
        },
        c: [ a.CBCM, a.CLCM, a.QSM, {
            cN: "number",
            b: "\\b(\\d+'(b|h|o|d|B|H|O|D))?[0-9xzXZ]+",
            c: [ a.BE ],
            r: 0
        }, {
            cN: "typename",
            b: "\\.\\w+",
            r: 0
        }, {
            cN: "value",
            b: "#\\((?!parameter).+\\)"
        }, {
            cN: "keyword",
            b: "\\+|-|\\*|/|%|<|>|=|#|`|\\!|&|\\||@|:|\\^|~|\\{|\\}",
            r: 0
        } ]
    };
}), hljs.registerLanguage("vhdl", function(a) {
    return {
        cI: !0,
        k: {
            keyword: "abs access after alias all and architecture array assert attribute begin block body buffer bus case component configuration constant context cover disconnect downto default else elsif end entity exit fairness file for force function generate generic group guarded if impure in inertial inout is label library linkage literal loop map mod nand new next nor not null of on open or others out package port postponed procedure process property protected pure range record register reject release rem report restrict restrict_guarantee return rol ror select sequence severity shared signal sla sll sra srl strong subtype then to transport type unaffected units until use variable vmode vprop vunit wait when while with xnor xor",
            typename: "boolean bit character severity_level integer time delay_length natural positive string bit_vector file_open_kind file_open_status std_ulogic std_ulogic_vector std_logic std_logic_vector unsigned signed boolean_vector integer_vector real_vector time_vector"
        },
        i: "{",
        c: [ a.CBCM, {
            cN: "comment",
            b: "--",
            e: "$"
        }, a.QSM, a.CNM, {
            cN: "literal",
            b: "'(U|X|0|1|Z|W|L|H|-)'",
            c: [ a.BE ]
        }, {
            cN: "attribute",
            b: "'[A-Za-z](_?[A-Za-z0-9])*",
            c: [ a.BE ]
        } ]
    };
}), hljs.registerLanguage("vim", function(a) {
    return {
        l: /[!#@\w]+/,
        k: {
            keyword: "N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw d|0 delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu g|0 go gr grepa gu gv ha h|0 helpf helpg helpt hi hid his i|0 ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs n|0 new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf q|0 quita qa r|0 rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv s|0 sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync t|0 tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up v|0 ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",
            built_in: "abs acos add and append argc argidx argv asin atan atan2 browse browsedir bufexists buflisted bufloaded bufname bufnr bufwinnr byte2line byteidx call ceil changenr char2nr cindent clearmatches col complete complete_add complete_check confirm copy cos cosh count cscope_connection cursor deepcopy delete did_filetype diff_filler diff_hlID empty escape eval eventhandler executable exists exp expand extend feedkeys filereadable filewritable filter finddir findfile float2nr floor fmod fnameescape fnamemodify foldclosed foldclosedend foldlevel foldtext foldtextresult foreground function garbagecollect get getbufline getbufvar getchar getcharmod getcmdline getcmdpos getcmdtype getcwd getfontname getfperm getfsize getftime getftype getline getloclist getmatches getpid getpos getqflist getreg getregtype gettabvar gettabwinvar getwinposx getwinposy getwinvar glob globpath has has_key haslocaldir hasmapto histadd histdel histget histnr hlexists hlID hostname iconv indent index input inputdialog inputlist inputrestore inputsave inputsecret insert invert isdirectory islocked items join keys len libcall libcallnr line line2byte lispindent localtime log log10 luaeval map maparg mapcheck match matchadd matcharg matchdelete matchend matchlist matchstr max min mkdir mode mzeval nextnonblank nr2char or pathshorten pow prevnonblank printf pumvisible py3eval pyeval range readfile reltime reltimestr remote_expr remote_foreground remote_peek remote_read remote_send remove rename repeat resolve reverse round screenattr screenchar screencol screenrow search searchdecl searchpair searchpairpos searchpos server2client serverlist setbufvar setcmdpos setline setloclist setmatches setpos setqflist setreg settabvar settabwinvar setwinvar sha256 shellescape shiftwidth simplify sin sinh sort soundfold spellbadword spellsuggest split sqrt str2float str2nr strchars strdisplaywidth strftime stridx string strlen strpart strridx strtrans strwidth submatch substitute synconcealed synID synIDattr synIDtrans synstack system tabpagebuflist tabpagenr tabpagewinnr tagfiles taglist tan tanh tempname tolower toupper tr trunc type undofile undotree values virtcol visualmode wildmenumode winbufnr wincol winheight winline winnr winrestcmd winrestview winsaveview winwidth writefile xor"
        },
        i: /[{:]/,
        c: [ a.NM, a.ASM, {
            cN: "string",
            b: /"((\\")|[^"\n])*("|\n)/
        }, {
            cN: "variable",
            b: /[bwtglsav]:[\w\d_]*/
        }, {
            cN: "function",
            bK: "function function!",
            e: "$",
            r: 0,
            c: [ a.TM, {
                cN: "params",
                b: "\\(",
                e: "\\)"
            } ]
        } ]
    };
}), hljs.registerLanguage("x86asm", function(a) {
    return {
        cI: !0,
        l: "\\.?" + a.IR,
        k: {
            keyword: "lock rep repe repz repne repnz xaquire xrelease bnd nobnd aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63",
            literal: "ip eip rip al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 cs ds es fs gs ss st st0 st1 st2 st3 st4 st5 st6 st7 mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 k0 k1 k2 k3 k4 k5 k6 k7 bnd0 bnd1 bnd2 bnd3 cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d r0h r1h r2h r3h r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l",
            pseudo: "db dw dd dq dt ddq do dy dz resb resw resd resq rest resdq reso resy resz incbin equ times",
            preprocessor: "%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep %endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment .nolist byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr __FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ __UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend align alignb sectalign daz nodaz up down zero default option assume public ",
            built_in: "bits use16 use32 use64 default section segment absolute extern global common cpu float __utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ __float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ __Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__"
        },
        c: [ {
            cN: "comment",
            b: ";",
            e: "$",
            r: 0
        }, {
            cN: "number",
            b: "\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|(0[Xx])?[0-9][0-9_]*\\.?[0-9_]*(?:[pP](?:[+-]?[0-9_]+)?)?)\\b",
            r: 0
        }, {
            cN: "number",
            b: "\\$[0-9][0-9A-Fa-f]*",
            r: 0
        }, {
            cN: "number",
            b: "\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[HhXx]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b"
        }, {
            cN: "number",
            b: "\\b(?:0[HhXx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b"
        }, a.QSM, {
            cN: "string",
            b: "'",
            e: "[^\\\\]'",
            r: 0
        }, {
            cN: "string",
            b: "`",
            e: "[^\\\\]`",
            r: 0
        }, {
            cN: "string",
            b: "\\.[A-Za-z0-9]+",
            r: 0
        }, {
            cN: "label",
            b: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
            r: 0
        }, {
            cN: "label",
            b: "^\\s*%%[A-Za-z0-9_$#@~.?]*:",
            r: 0
        }, {
            cN: "argument",
            b: "%[0-9]+",
            r: 0
        }, {
            cN: "built_in",
            b: "%!S+",
            r: 0
        } ]
    };
}), hljs.registerLanguage("xl", function(a) {
    var b = "ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts", c = {
        keyword: "if then else do while until for loop import with is as where when by data constant",
        literal: "true false nil",
        type: "integer real text name boolean symbol infix prefix postfix block tree",
        built_in: "in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin acos atan exp expm1 log log2 log10 log1p pi at",
        module: b,
        id: "text_length text_range text_find text_replace contains page slide basic_slide title_slide title subtitle fade_in fade_out fade_at clear_color color line_color line_width texture_wrap texture_transform texture scale_?x scale_?y scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y rotate_?z? rectangle circle ellipse sphere path line_to move_to quad_to curve_to theme background contents locally time mouse_?x mouse_?y mouse_buttons"
    }, d = {
        cN: "constant",
        b: "[A-Z][A-Z_0-9]+",
        r: 0
    }, e = {
        cN: "variable",
        b: "([A-Z][a-z_0-9]+)+",
        r: 0
    }, f = {
        cN: "id",
        b: "[a-z][a-z_0-9]+",
        r: 0
    }, g = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n"
    }, h = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n"
    }, i = {
        cN: "string",
        b: "<<",
        e: ">>"
    }, j = {
        cN: "number",
        b: "[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?",
        r: 10
    }, k = {
        cN: "import",
        bK: "import",
        e: "$",
        k: {
            keyword: "import",
            module: b
        },
        r: 0,
        c: [ g ]
    }, l = {
        cN: "function",
        b: "[a-z].*->"
    };
    return {
        aliases: [ "tao" ],
        l: /[a-zA-Z][a-zA-Z0-9_?]*/,
        k: c,
        c: [ a.CLCM, a.CBCM, g, h, i, l, k, d, e, f, j, a.NM ]
    };
}), $(document).foundation();