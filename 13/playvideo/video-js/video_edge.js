/*! Video.js v4.3.0 Copyright 2013 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */
(function() {
    var b = void 0,
        f = !0,
        h = null,
        l = !1;

    function m() {
        return function() {}
    }

    function p(a) {
        return function() {
            return this[a]
        }
    }

    function s(a) {
        return function() {
            return a
        }
    }
    var t;
    document.createElement("video");
    document.createElement("audio");
    document.createElement("track");

    function u(a, c, d) {
        if ("string" === typeof a) {
            0 === a.indexOf("#") && (a = a.slice(1));
            if (u.ta[a]) return u.ta[a];
            a = u.v(a)
        }
        if (!a || !a.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        return a.player || new u.Player(a, c, d)
    }
    var videojs = u;
    window.Wd = window.Xd = u;
    u.Qb = "4.3";
    u.Ec = "https:" == document.location.protocol ? "https://" : "http://";
    u.options = {
        techOrder: ["html5", "flash"],
        html5: {},
        flash: {},
        width: 300,
        height: 150,
        defaultVolume: 0,
        children: {
            mediaLoader: {},
            posterImage: {},
            textTrackDisplay: {},
            loadingSpinner: {},
            bigPlayButton: {},
            controlBar: {}
        },
        notSupportedMessage: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
    };
    "GENERATED_CDN_VSN" !== u.Qb && (videojs.options.flash.swf = u.Ec + "vjs.zencdn.net/" + u.Qb + "/video-js.swf");
    u.ta = {};
    u.ja = u.CoreObject = m();
    u.ja.extend = function(a) {
        var c, d;
        a = a || {};
        c = a.init || a.i || this.prototype.init || this.prototype.i || m();
        d = function() {
            c.apply(this, arguments)
        };
        d.prototype = u.k.create(this.prototype);
        d.prototype.constructor = d;
        d.extend = u.ja.extend;
        d.create = u.ja.create;
        for (var e in a) a.hasOwnProperty(e) && (d.prototype[e] = a[e]);
        return d
    };
    u.ja.create = function() {
        var a = u.k.create(this.prototype);
        this.apply(a, arguments);
        return a
    };
    u.d = function(a, c, d) {
        var e = u.getData(a);
        e.z || (e.z = {});
        e.z[c] || (e.z[c] = []);
        d.s || (d.s = u.s++);
        e.z[c].push(d);
        e.T || (e.disabled = l, e.T = function(c) {
            if (!e.disabled) {
                c = u.hc(c);
                var d = e.z[c.type];
                if (d)
                    for (var d = d.slice(0), k = 0, r = d.length; k < r && !c.oc(); k++) d[k].call(a, c)
            }
        });
        1 == e.z[c].length && (document.addEventListener ? a.addEventListener(c, e.T, l) : document.attachEvent && a.attachEvent("on" + c, e.T))
    };
    u.o = function(a, c, d) {
        if (u.lc(a)) {
            var e = u.getData(a);
            if (e.z)
                if (c) {
                    var g = e.z[c];
                    if (g) {
                        if (d) {
                            if (d.s)
                                for (e = 0; e < g.length; e++) g[e].s === d.s && g.splice(e--, 1)
                        } else e.z[c] = [];
                        u.dc(a, c)
                    }
                } else
                    for (g in e.z) c = g, e.z[c] = [], u.dc(a, c)
        }
    };
    u.dc = function(a, c) {
        var d = u.getData(a);
        0 === d.z[c].length && (delete d.z[c], document.removeEventListener ? a.removeEventListener(c, d.T, l) : document.detachEvent && a.detachEvent("on" + c, d.T));
        u.zb(d.z) && (delete d.z, delete d.T, delete d.disabled);
        u.zb(d) && u.tc(a)
    };
    u.hc = function(a) {
        function c() {
            return f
        }

        function d() {
            return l
        }
        if (!a || !a.Ab) {
            var e = a || window.event;
            a = {};
            for (var g in e) "layerX" !== g && ("layerY" !== g && "keyboardEvent.keyLocation" !== g) && ("returnValue" == g && e.preventDefault || (a[g] = e[g]));
            a.target || (a.target = a.srcElement || document);
            a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
            a.preventDefault = function() {
                e.preventDefault && e.preventDefault();
                a.returnValue = l;
                a.yb = c
            };
            a.yb = d;
            a.stopPropagation = function() {
                e.stopPropagation && e.stopPropagation();
                a.cancelBubble = f;
                a.Ab = c
            };
            a.Ab = d;
            a.stopImmediatePropagation = function() {
                e.stopImmediatePropagation && e.stopImmediatePropagation();
                a.oc = c;
                a.stopPropagation()
            };
            a.oc = d;
            if (a.clientX != h) {
                g = document.documentElement;
                var j = document.body;
                a.pageX = a.clientX + (g && g.scrollLeft || j && j.scrollLeft || 0) - (g && g.clientLeft || j && j.clientLeft || 0);
                a.pageY = a.clientY + (g && g.scrollTop || j && j.scrollTop || 0) - (g && g.clientTop || j && j.clientTop || 0)
            }
            a.which = a.charCode || a.keyCode;
            a.button != h && (a.button = a.button & 1 ? 0 : a.button & 4 ? 1 : a.button & 2 ? 2 :
                0)
        }
        return a
    };
    u.j = function(a, c) {
        var d = u.lc(a) ? u.getData(a) : {},
            e = a.parentNode || a.ownerDocument;
        "string" === typeof c && (c = {
            type: c,
            target: a
        });
        c = u.hc(c);
        d.T && d.T.call(a, c);
        if (e && !c.Ab() && c.bubbles !== l) u.j(e, c);
        else if (!e && !c.yb() && (d = u.getData(c.target), c.target[c.type])) {
            d.disabled = f;
            if ("function" === typeof c.target[c.type]) c.target[c.type]();
            d.disabled = l
        }
        return !c.yb()
    };
    u.S = function(a, c, d) {
        function e() {
            u.o(a, c, e);
            d.apply(this, arguments)
        }
        e.s = d.s = d.s || u.s++;
        u.d(a, c, e)
    };
    var v = Object.prototype.hasOwnProperty;
    u.e = function(a, c) {
        var d, e;
        d = document.createElement(a || "div");
        for (e in c) v.call(c, e) && (-1 !== e.indexOf("aria-") || "role" == e ? d.setAttribute(e, c[e]) : d[e] = c[e]);
        return d
    };
    u.W = function(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    };
    u.k = {};
    u.k.create = Object.create || function(a) {
        function c() {}
        c.prototype = a;
        return new c
    };
    u.k.qa = function(a, c, d) {
        for (var e in a) v.call(a, e) && c.call(d || this, e, a[e])
    };
    u.k.C = function(a, c) {
        if (!c) return a;
        for (var d in c) v.call(c, d) && (a[d] = c[d]);
        return a
    };
    u.k.Wc = function(a, c) {
        var d, e, g;
        a = u.k.copy(a);
        for (d in c) v.call(c, d) && (e = a[d], g = c[d], a[d] = u.k.Ka(e) && u.k.Ka(g) ? u.k.Wc(e, g) : c[d]);
        return a
    };
    u.k.copy = function(a) {
        return u.k.C({}, a)
    };
    u.k.Ka = function(a) {
        return !!a && "object" === typeof a && "[object Object]" === a.toString() && a.constructor === Object
    };
    u.bind = function(a, c, d) {
        function e() {
            return c.apply(a, arguments)
        }
        c.s || (c.s = u.s++);
        e.s = d ? d + "_" + c.s : c.s;
        return e
    };
    u.oa = {};
    u.s = 1;
    u.expando = "vdata" + (new Date).getTime();
    u.getData = function(a) {
        var c = a[u.expando];
        c || (c = a[u.expando] = u.s++, u.oa[c] = {});
        return u.oa[c]
    };
    u.lc = function(a) {
        a = a[u.expando];
        return !(!a || u.zb(u.oa[a]))
    };
    u.tc = function(a) {
        var c = a[u.expando];
        if (c) {
            delete u.oa[c];
            try {
                delete a[u.expando]
            } catch (d) {
                a.removeAttribute ? a.removeAttribute(u.expando) : a[u.expando] = h
            }
        }
    };
    u.zb = function(a) {
        for (var c in a)
            if (a[c] !== h) return l;
        return f
    };
    u.n = function(a, c) {
        -1 == (" " + a.className + " ").indexOf(" " + c + " ") && (a.className = "" === a.className ? c : a.className + " " + c)
    };
    u.t = function(a, c) {
        var d, e;
        if (-1 != a.className.indexOf(c)) {
            d = a.className.split(" ");
            for (e = d.length - 1; 0 <= e; e--) d[e] === c && d.splice(e, 1);
            a.className = d.join(" ")
        }
    };
    u.ca = u.e("video");
    u.H = navigator.userAgent;
    u.Kc = /iPhone/i.test(u.H);
    u.Jc = /iPad/i.test(u.H);
    u.Lc = /iPod/i.test(u.H);
    u.Ic = u.Kc || u.Jc || u.Lc;
    var aa = u,
        w;
    var x = u.H.match(/OS (\d+)_/i);
    w = x && x[1] ? x[1] : b;
    aa.Id = w;
    u.Hc = /Android/i.test(u.H);
    var ba = u,
        y;
    var z = u.H.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
        A, B;
    z ? (A = z[1] && parseFloat(z[1]), B = z[2] && parseFloat(z[2]), y = A && B ? parseFloat(z[1] + "." + z[2]) : A ? A : h) : y = h;
    ba.Fc = y;
    u.Mc = u.Hc && /webkit/i.test(u.H) && 2.3 > u.Fc;
    u.Tb = /Firefox/i.test(u.H);
    u.Jd = /Chrome/i.test(u.H);
    u.Zb = !!("ontouchstart" in window || window.Gc && document instanceof window.Gc);
    u.vb = function(a) {
        var c, d, e, g;
        c = {};
        if (a && a.attributes && 0 < a.attributes.length) {
            d = a.attributes;
            for (var j = d.length - 1; 0 <= j; j--) {
                e = d[j].name;
                g = d[j].value;
                if ("boolean" === typeof a[e] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + e + ",")) g = g !== h ? f : l;
                c[e] = g
            }
        }
        return c
    };
    u.Nd = function(a, c) {
        var d = "";
        document.defaultView && document.defaultView.getComputedStyle ? d = document.defaultView.getComputedStyle(a, "").getPropertyValue(c) : a.currentStyle && (d = a["client" + c.substr(0, 1).toUpperCase() + c.substr(1)] + "px");
        return d
    };
    u.xb = function(a, c) {
        c.firstChild ? c.insertBefore(a, c.firstChild) : c.appendChild(a)
    };
    u.Nb = {};
    u.v = function(a) {
        0 === a.indexOf("#") && (a = a.slice(1));
        return document.getElementById(a)
    };
    u.Ja = function(a, c) {
        c = c || a;
        var d = Math.floor(a % 60),
            e = Math.floor(a / 60 % 60),
            g = Math.floor(a / 3600),
            j = Math.floor(c / 60 % 60),
            k = Math.floor(c / 3600);
        if (isNaN(a) || Infinity === a) g = e = d = "-";
        g = 0 < g || 0 < k ? g + ":" : "";
        return g + (((g || 10 <= j) && 10 > e ? "0" + e : e) + ":") + (10 > d ? "0" + d : d)
    };
    u.Sc = function() {
        document.body.focus();
        document.onselectstart = s(l)
    };
    u.Dd = function() {
        document.onselectstart = s(f)
    };
    u.trim = function(a) {
        return (a + "").replace(/^\s+|\s+$/g, "")
    };
    u.round = function(a, c) {
        c || (c = 0);
        return Math.round(a * Math.pow(10, c)) / Math.pow(10, c)
    };
    u.rb = function(a, c) {
        return {
            length: 1,
            start: function() {
                return a
            },
            end: function() {
                return c
            }
        }
    };
    u.get = function(a, c, d) {
        var e, g;
        "undefined" === typeof XMLHttpRequest && (window.XMLHttpRequest = function() {
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (a) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (c) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP")
            } catch (d) {}
            throw Error("This browser does not support XMLHttpRequest.");
        });
        g = new XMLHttpRequest;
        try {
            g.open("GET", a)
        } catch (j) {
            d(j)
        }
        e = 0 === a.indexOf("file:") || 0 === window.location.href.indexOf("file:") && -1 === a.indexOf("http");
        g.onreadystatechange = function() {
            4 === g.readyState && (200 === g.status || e && 0 === g.status ? c(g.responseText) : d && d())
        };
        try {
            g.send()
        } catch (k) {
            d && d(k)
        }
    };
    u.vd = function(a) {
        try {
            var c = window.localStorage || l;
            c && (c.volume = a)
        } catch (d) {
            22 == d.code || 1014 == d.code ? u.log("LocalStorage Full (VideoJS)", d) : 18 == d.code ? u.log("LocalStorage not allowed (VideoJS)", d) : u.log("LocalStorage Error (VideoJS)", d)
        }
    };
    u.jc = function(a) {
        a.match(/^https?:\/\//) || (a = u.e("div", {
            innerHTML: '<a href="' + a + '">x</a>'
        }).firstChild.href);
        return a
    };
    u.log = function() {
        u.log.history = u.log.history || [];
        u.log.history.push(arguments);
        window.console && window.console.log(Array.prototype.slice.call(arguments))
    };
    u.cd = function(a) {
        var c, d;
        a.getBoundingClientRect && a.parentNode && (c = a.getBoundingClientRect());
        if (!c) return {
            left: 0,
            top: 0
        };
        a = document.documentElement;
        d = document.body;
        return {
            left: c.left + (window.pageXOffset || d.scrollLeft) - (a.clientLeft || d.clientLeft || 0),
            top: c.top + (window.pageYOffset || d.scrollTop) - (a.clientTop || d.clientTop || 0)
        }
    };
    u.ia = {};
    u.ia.Eb = function(a, c) {
        var d, e, g;
        a = u.k.copy(a);
        for (d in c) c.hasOwnProperty(d) && (e = a[d], g = c[d], a[d] = u.k.Ka(e) && u.k.Ka(g) ? u.ia.Eb(e, g) : c[d]);
        return a
    };
    u.b = u.ja.extend({
        i: function(a, c, d) {
            this.c = a;
            this.g = u.k.copy(this.g);
            c = this.options(c);
            this.P = c.id || (c.el && c.el.id ? c.el.id : a.id() + "_component_" + u.s++);
            this.kd = c.name || h;
            this.a = c.el || this.e();
            this.I = [];
            this.Fa = {};
            this.Ga = {};
            this.mc();
            this.G(d);
            if (c.uc !== l) {
                var e, g;
                e = u.bind(this.D(), this.D().reportUserActivity);
                this.d("touchstart", function() {
                    e();
                    clearInterval(g);
                    g = setInterval(e, 250)
                });
                a = function() {
                    e();
                    clearInterval(g)
                };
                this.d("touchmove", e);
                this.d("touchend", a);
                this.d("touchcancel", a)
            }
        }
    });
    t = u.b.prototype;
    t.dispose = function() {
        this.j({
            type: "dispose",
            bubbles: l
        });
        if (this.I)
            for (var a = this.I.length - 1; 0 <= a; a--) this.I[a].dispose && this.I[a].dispose();
        this.Ga = this.Fa = this.I = h;
        this.o();
        this.a.parentNode && this.a.parentNode.removeChild(this.a);
        u.tc(this.a);
        this.a = h
    };
    t.c = f;
    t.D = p("c");
    t.options = function(a) {
        return a === b ? this.g : this.g = u.ia.Eb(this.g, a)
    };
    t.e = function(a, c) {
        return u.e(a, c)
    };
    t.v = p("a");
    t.Ha = function() {
        return this.pb || this.a
    };
    t.id = p("P");
    t.name = p("kd");
    t.children = p("I");
    t.ed = function(a) {
        return this.Fa[a]
    };
    t.da = function(a) {
        return this.Ga[a]
    };
    t.V = function(a, c) {
        var d, e;
        "string" === typeof a ? (e = a, c = c || {}, d = c.componentClass || u.W(e), c.name = e, d = new window.videojs[d](this.c || this, c)) : d = a;
        this.I.push(d);
        "function" === typeof d.id && (this.Fa[d.id()] = d);
        (e = e || d.name && d.name()) && (this.Ga[e] = d);
        "function" === typeof d.el && d.el() && this.Ha().appendChild(d.el());
        return d
    };
    t.removeChild = function(a) {
        "string" === typeof a && (a = this.da(a));
        if (a && this.I) {
            for (var c = l, d = this.I.length - 1; 0 <= d; d--)
                if (this.I[d] === a) {
                    c = f;
                    this.I.splice(d, 1);
                    break
                }
            c && (this.Fa[a.id] = h, this.Ga[a.name] = h, (c = a.v()) && c.parentNode === this.Ha() && this.Ha().removeChild(a.v()))
        }
    };
    t.mc = function() {
        var a = this.g;
        if (a && a.children) {
            var c = this;
            u.k.qa(a.children, function(a, e) {
                e !== l && !e.loadEvent && (c[a] = c.V(a, e))
            })
        }
    };
    t.O = s("");
    t.d = function(a, c) {
        u.d(this.a, a, u.bind(this, c));
        return this
    };
    t.o = function(a, c) {
        u.o(this.a, a, c);
        return this
    };
    t.S = function(a, c) {
        u.S(this.a, a, u.bind(this, c));
        return this
    };
    t.j = function(a, c) {
        u.j(this.a, a, c);
        return this
    };
    t.G = function(a) {
        a && (this.Y ? a.call(this) : (this.Ra === b && (this.Ra = []), this.Ra.push(a)));
        return this
    };
    t.Ta = function() {
        this.Y = f;
        var a = this.Ra;
        if (a && 0 < a.length) {
            for (var c = 0, d = a.length; c < d; c++) a[c].call(this);
            this.Ra = [];
            this.j("ready")
        }
    };
    t.n = function(a) {
        u.n(this.a, a);
        return this
    };
    t.t = function(a) {
        u.t(this.a, a);
        return this
    };
    t.show = function() {
        this.a.style.display = "block";
        return this
    };
    t.A = function() {
        this.a.style.display = "none";
        return this
    };

    function C(a) {
        a.t("vjs-lock-showing")
    }
    t.disable = function() {
        this.A();
        this.show = m()
    };
    t.width = function(a, c) {
        return D(this, "width", a, c)
    };
    t.height = function(a, c) {
        return D(this, "height", a, c)
    };
    t.Yc = function(a, c) {
        return this.width(a, f).height(c)
    };

    function D(a, c, d, e) {
        if (d !== b) return a.a.style[c] = -1 !== ("" + d).indexOf("%") || -1 !== ("" + d).indexOf("px") ? d : "auto" === d ? "" : d + "px", e || a.j("resize"), a;
        if (!a.a) return 0;
        d = a.a.style[c];
        e = d.indexOf("px");
        return -1 !== e ? parseInt(d.slice(0, e), 10) : parseInt(a.a["offset" + u.W(c)], 10)
    }
    u.q = u.b.extend({
        i: function(a, c) {
            u.b.call(this, a, c);
            var d = l;
            this.d("touchstart", function(a) {
                a.preventDefault();
                d = f
            });
            this.d("touchmove", function() {
                d = l
            });
            var e = this;
            this.d("touchend", function(a) {
                d && e.p(a);
                a.preventDefault()
            });
            this.d("click", this.p);
            this.d("focus", this.Na);
            this.d("blur", this.Ma)
        }
    });
    t = u.q.prototype;
    t.e = function(a, c) {
        c = u.k.C({
            className: this.O(),
            innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.na || "Need Text") + "</span></div>",
            role: "button",
            "aria-live": "polite",
            tabIndex: 0
        }, c);
        return u.b.prototype.e.call(this, a, c)
    };
    t.O = function() {
        return "vjs-control " + u.b.prototype.O.call(this)
    };
    t.p = m();
    t.Na = function() {
        u.d(document, "keyup", u.bind(this, this.Z))
    };
    t.Z = function(a) {
        if (32 == a.which || 13 == a.which) a.preventDefault(), this.p()
    };
    t.Ma = function() {
        u.o(document, "keyup", u.bind(this, this.Z))
    };
    u.M = u.b.extend({
        i: function(a, c) {
            u.b.call(this, a, c);
            this.Rc = this.da(this.g.barName);
            this.handle = this.da(this.g.handleName);
            a.d(this.rc, u.bind(this, this.update));
            this.d("mousedown", this.Oa);
            this.d("touchstart", this.Oa);
            this.d("focus", this.Na);
            this.d("blur", this.Ma);
            this.d("click", this.p);
            this.c.d("controlsvisible", u.bind(this, this.update));
            a.G(u.bind(this, this.update));
            this.N = {}
        }
    });
    t = u.M.prototype;
    t.e = function(a, c) {
        c = c || {};
        c.className += " vjs-slider";
        c = u.k.C({
            role: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0
        }, c);
        return u.b.prototype.e.call(this, a, c)
    };
    t.Oa = function(a) {
        a.preventDefault();
        u.Sc();
        this.N.move = u.bind(this, this.Gb);
        this.N.end = u.bind(this, this.Hb);
        u.d(document, "mousemove", this.N.move);
        u.d(document, "mouseup", this.N.end);
		u.d(document.getElementById("container"), "mouseleave", this.N.end);
        u.d(document, "touchmove", this.N.move);
        u.d(document, "touchend", this.N.end);
        this.Gb(a)
    };
    t.Hb = function() {
        u.Dd();
        u.o(document, "mousemove", this.N.move, l);
        u.o(document, "mouseup", this.N.end, l);
		u.o(document.getElementById("container"), "mouseleave", this.N.end, l);
        u.o(document, "touchmove", this.N.move, l);
        u.o(document, "touchend", this.N.end, l);
        this.update()
    };
    t.update = function() {
        if (this.a) {
            var a, c = this.wb(),
                d = this.handle,
                e = this.Rc;
            isNaN(c) && (c = 0);
            a = c;
            if (d) {
                a = this.a.offsetWidth;
                var g = d.v().offsetWidth;
                a = g ? g / a : 0;
                c *= 1 - a;
                a = c + a / 2;
                d.v().style.left = u.round(100 * c, 2) + "%"
            }
            e.v().style.width = u.round(100 * a, 2) + "%"
        }
    };

    function E(a, c) {
        var d, e, g, j;
        d = a.a;
        e = u.cd(d);
        j = g = d.offsetWidth;
        d = a.handle;
        if (a.g.Ed) return j = e.top, e = c.changedTouches ? c.changedTouches[0].pageY : c.pageY, d && (d = d.v().offsetHeight, j += d / 2, g -= d), Math.max(0, Math.min(1, (j - e + g) / g));
        g = e.left;
        e = c.changedTouches ? c.changedTouches[0].pageX : c.pageX;
        d && (d = d.v().offsetWidth, g += d / 2, j -= d);
        return Math.max(0, Math.min(1, (e - g) / j))
    }
    t.Na = function() {
        u.d(document, "keyup", u.bind(this, this.Z))
    };
    t.Z = function(a) {
        37 == a.which ? (a.preventDefault(), this.xc()) : 39 == a.which && (a.preventDefault(), this.yc())
    };
    t.Ma = function() {
        u.o(document, "keyup", u.bind(this, this.Z))
    };
    t.p = function(a) {
        a.stopImmediatePropagation();
        a.preventDefault()
    };
    u.ba = u.b.extend();
    u.ba.prototype.defaultValue = 0;
    u.ba.prototype.e = function(a, c) {
        c = c || {};
        c.className += " vjs-slider-handle";
        c = u.k.C({
            innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
        }, c);
        return u.b.prototype.e.call(this, "div", c)
    };
    u.ka = u.b.extend();

    function ca(a, c) {
        a.V(c);
        c.d("click", u.bind(a, function() {
            C(this)
        }))
    }
    u.ka.prototype.e = function() {
        var a = this.options().Uc || "ul";
        this.pb = u.e(a, {
            className: "vjs-menu-content"
        });
        a = u.b.prototype.e.call(this, "div", {
            append: this.pb,
            className: "vjs-menu"
        });
        a.appendChild(this.pb);
        u.d(a, "click", function(a) {
            a.preventDefault();
            a.stopImmediatePropagation()
        });
        return a
    };
    u.L = u.q.extend({
        i: function(a, c) {
            u.q.call(this, a, c);
            this.selected(c.selected)
        }
    });
    u.L.prototype.e = function(a, c) {
        return u.q.prototype.e.call(this, "li", u.k.C({
            className: "vjs-menu-item",
            innerHTML: this.g.label
        }, c))
    };
    u.L.prototype.p = function() {
        this.selected(f)
    };
    u.L.prototype.selected = function(a) {
        a ? (this.n("vjs-selected"), this.a.setAttribute("aria-selected", f)) : (this.t("vjs-selected"), this.a.setAttribute("aria-selected", l))
    };
    u.Q = u.q.extend({
        i: function(a, c) {
            u.q.call(this, a, c);
            this.sa = this.Ia();
            this.V(this.sa);
            this.J && 0 === this.J.length && this.A();
            this.d("keyup", this.Z);
            this.a.setAttribute("aria-haspopup", f);
            this.a.setAttribute("role", "button")
        }
    });
    t = u.Q.prototype;
    t.ma = l;
    t.Ia = function() {
        var a = new u.ka(this.c);
        this.options().title && a.v().appendChild(u.e("li", {
            className: "vjs-menu-title",
            innerHTML: u.W(this.B),
            Bd: -1
        }));
        if (this.J = this.createItems())
            for (var c = 0; c < this.J.length; c++) ca(a, this.J[c]);
        return a
    };
    t.pa = m();
    t.O = function() {
        return this.className + " vjs-menu-button " + u.q.prototype.O.call(this)
    };
    t.Na = m();
    t.Ma = m();
    t.p = function() {
        this.S("mouseout", u.bind(this, function() {
            C(this.sa);
            this.a.blur()
        }));
        this.ma ? F(this) : G(this)
    };
    t.Z = function(a) {
        a.preventDefault();
        32 == a.which || 13 == a.which ? this.ma ? F(this) : G(this) : 27 == a.which && this.ma && F(this)
    };

    function G(a) {
        a.ma = f;
        a.sa.n("vjs-lock-showing");
        a.a.setAttribute("aria-pressed", f);
        a.J && 0 < a.J.length && a.J[0].v().focus()
    }

    function F(a) {
        a.ma = l;
        C(a.sa);
        a.a.setAttribute("aria-pressed", l)
    }
    u.Player = u.b.extend({
        i: function(a, c, d) {
            this.K = a;
            a.id = a.id || "vjs_video_" + u.s++;
            c = u.k.C(da(a), c);
            this.u = {};
            this.sc = c.poster;
            this.qb = c.controls;
            a.controls = l;
            c.uc = l;
            u.b.call(this, this, c, d);
            this.controls() ? this.n("vjs-controls-enabled") : this.n("vjs-controls-disabled");
            this.S("play", function(a) {
                u.j(this.a, {
                    type: "firstplay",
                    target: this.a
                }) || (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation())
            });
            this.d("ended", this.ld);
            this.d("play", this.Jb);
            this.d("firstplay", this.md);
            this.d("pause", this.Ib);
            this.d("progress", this.od);
            this.d("durationchange", this.qc);
            this.d("error", this.Fb);
            this.d("fullscreenchange", this.nd);
            u.ta[this.P] = this;
            c.plugins && u.k.qa(c.plugins, function(a, c) {
                this[a](c)
            }, this);
            var e, g, j, k;
            e = u.bind(this, this.reportUserActivity);
            this.d("mousedown", function() {
                e();
                clearInterval(g);
                g = setInterval(e, 250)
            });
            this.d("mousemove", e);
            this.d("mouseup", function() {
                e();
                clearInterval(g)
            });
            this.d("keydown", e);
            this.d("keyup", e);
            j = setInterval(u.bind(this, function() {
                this.ha && (this.ha = l, this.userActive(f),
                    clearTimeout(k), k = setTimeout(u.bind(this, function() {
                        this.ha || this.userActive(l)
                    }), 2E3))
            }), 250);
            this.d("dispose", function() {
                clearInterval(j);
                clearTimeout(k)
            })
        }
    });
    t = u.Player.prototype;
    t.g = u.options;
    t.dispose = function() {
        this.j("dispose");
        this.o("dispose");
        u.ta[this.P] = h;
        this.K && this.K.player && (this.K.player = h);
        this.a && this.a.player && (this.a.player = h);
        clearInterval(this.Qa);
        this.ua();
        this.h && this.h.dispose();
        u.b.prototype.dispose.call(this)
    };

    function da(a) {
        var c = {
            sources: [],
            tracks: []
        };
        u.k.C(c, u.vb(a));
        if (a.hasChildNodes()) {
            var d, e, g, j;
            a = a.childNodes;
            g = 0;
            for (j = a.length; g < j; g++) d = a[g], e = d.nodeName.toLowerCase(), "source" === e ? c.sources.push(u.vb(d)) : "track" === e && c.tracks.push(u.vb(d))
        }
        return c
    }
    t.e = function() {
        var a = this.a = u.b.prototype.e.call(this, "div"),
            c = this.K;
        c.removeAttribute("width");
        c.removeAttribute("height");
        if (c.hasChildNodes()) {
            var d, e, g, j, k;
            d = c.childNodes;
            e = d.length;
            for (k = []; e--;) g = d[e], j = g.nodeName.toLowerCase(), "track" === j && k.push(g);
            for (d = 0; d < k.length; d++) c.removeChild(k[d])
        }
        a.id = c.id;
        a.className = c.className;
        c.id += "_html5_api";
        c.className = "vjs-tech";
        c.player = a.player = this;
        this.n("vjs-paused");
        this.width(this.g.width, f);
        this.height(this.g.height, f);
        c.parentNode && c.parentNode.insertBefore(a,
            c);
        u.xb(c, a);
        return a
    };

    function H(a, c, d) {
        a.h && (a.Y = l, a.h.dispose(), a.Cb && (a.Cb = l, clearInterval(a.Qa)), a.Db && I(a), a.h = l);
        "Html5" !== c && a.K && (u.l.fc(a.K), a.K = h);
        a.ga = c;
        a.Y = l;
        var e = u.k.C({
            source: d,
            parentEl: a.a
        }, a.g[c.toLowerCase()]);
        d && (d.src == a.u.src && 0 < a.u.currentTime && (e.startTime = a.u.currentTime), a.u.src = d.src);
        a.h = new window.videojs[c](a, e);
        a.h.G(function() {
            this.c.Ta();
            if (!this.m.progressEvents) {
                var a = this.c;
                a.Cb = f;
                a.Qa = setInterval(u.bind(a, function() {
                    this.u.kb < this.buffered().end(0) ? this.j("progress") : 1 == this.bufferedPercent() &&
                        (clearInterval(this.Qa), this.j("progress"))
                }), 500);
                a.h.S("progress", function() {
                    this.m.progressEvents = f;
                    var a = this.c;
                    a.Cb = l;
                    clearInterval(a.Qa)
                })
            }
            this.m.timeupdateEvents || (a = this.c, a.Db = f, a.d("play", a.Bc), a.d("pause", a.ua), a.h.S("timeupdate", function() {
                this.m.timeupdateEvents = f;
                I(this.c)
            }))
        })
    }

    function I(a) {
        a.Db = l;
        a.ua();
        a.o("play", a.Bc);
        a.o("pause", a.ua)
    }
    t.Bc = function() {
        this.ec && this.ua();
        this.ec = setInterval(u.bind(this, function() {
            this.j("timeupdate")
        }), 250)
    };
    t.ua = function() {
        clearInterval(this.ec)
    };
    t.Jb = function() {
        u.t(this.a, "vjs-paused");
        u.n(this.a, "vjs-playing")
    };
    t.md = function() {
        this.g.starttime && this.currentTime(this.g.starttime);
        this.n("vjs-has-started")
    };
    t.Ib = function() {
        u.t(this.a, "vjs-playing");
        u.n(this.a, "vjs-paused")
    };
    t.od = function() {
        1 == this.bufferedPercent() && this.j("loadedalldata")
    };
    t.ld = function() {
        this.g.loop && (this.currentTime(0), this.play())
    };
    t.qc = function() {
        var a = J(this, "duration");
        a && this.duration(a)
    };
    t.nd = function() {
        this.isFullScreen() ? this.n("vjs-fullscreen") : this.t("vjs-fullscreen")
    };
    t.Fb = function(a) {
        u.log("Video Error", a)
    };

    function K(a, c, d) {
        if (a.h && !a.h.Y) a.h.G(function() {
            this[c](d)
        });
        else try {
            a.h[c](d)
        } catch (e) {
            throw u.log(e), e;
        }
    }

    function J(a, c) {
        if (a.h && a.h.Y) try {
            return a.h[c]()
        } catch (d) {
            throw a.h[c] === b ? u.log("Video.js: " + c + " method not defined for " + a.ga + " playback technology.", d) : "TypeError" == d.name ? (u.log("Video.js: " + c + " unavailable on " + a.ga + " playback technology element.", d), a.h.Y = l) : u.log(d), d;
        }
    }
    t.play = function() {
        K(this, "play");
        return this
    };
    t.pause = function() {
        K(this, "pause");
        return this
    };
    t.paused = function() {
        return J(this, "paused") === l ? l : f
    };
    t.currentTime = function(a) {
        return a !== b ? (this.u.pc = a, K(this, "setCurrentTime", a), this.Db && this.j("timeupdate"), this) : this.u.currentTime = J(this, "currentTime") || 0
    };
    t.duration = function(a) {
        if (a !== b) return this.u.duration = parseFloat(a), this;
        this.u.duration === b && this.qc();
        return this.u.duration || 0
    };

    function ea(a) {
        a = a.duration() - a.currentTime();
        0 > a && (a = 0);
        return a
    }
    t.buffered = function() {
        var a = J(this, "buffered"),
            c = a.length - 1,
            d = this.u.kb = this.u.kb || 0;
        a && (0 <= c && a.end(c) !== d) && (d = a.end(c), this.u.kb = d);
        return u.rb(0, d)
    };
    t.bufferedPercent = function() {
        return this.duration() ? this.buffered().end(0) / this.duration() : 0
    };
    t.volume = function(a) {
        if (a !== b) return a = Math.max(0, Math.min(1, parseFloat(a))), this.u.volume = a, K(this, "setVolume", a), u.vd(a), this;
        a = parseFloat(J(this, "volume"));
        return isNaN(a) ? 1 : a
    };
    t.muted = function(a) {
        return a !== b ? (K(this, "setMuted", a), this) : J(this, "muted") || l
    };
    t.Sa = function() {
        return J(this, "supportsFullScreen") || l
    };
    t.nc = l;
    t.isFullScreen = function(a) {
        return a !== b ? (this.nc = a, this) : this.nc
    };
    t.requestFullScreen = function() {
        var a = u.Nb.requestFullScreen;
        this.isFullScreen(f);
        a ? (u.d(document, a.tb, u.bind(this, function(c) {
            this.isFullScreen(document[a.isFullScreen]);
            this.isFullScreen() === l && u.o(document, a.tb, arguments.callee);
            this.j("fullscreenchange")
        })), this.a[a.vc]()) : this.h.Sa() ? K(this, "enterFullScreen") : (this.fd = f, this.Zc = document.documentElement.style.overflow, u.d(document, "keydown", u.bind(this, this.ic)), document.documentElement.style.overflow = "hidden", u.n(document.body, "vjs-full-window"),
            this.j("enterFullWindow"), this.j("fullscreenchange"));
        return this
    };
    t.cancelFullScreen = function() {
        var a = u.Nb.requestFullScreen;
        this.isFullScreen(l);
        if (a) document[a.mb]();
        else this.h.Sa() ? K(this, "exitFullScreen") : (L(this), this.j("fullscreenchange"));
        return this
    };
    t.ic = function(a) {
        27 === a.keyCode && (this.isFullScreen() === f ? this.cancelFullScreen() : L(this))
    };

    function L(a) {
        a.fd = l;
        u.o(document, "keydown", a.ic);
        document.documentElement.style.overflow = a.Zc;
        u.t(document.body, "vjs-full-window");
        a.j("exitFullWindow")
    }
    t.src = function(a) {
        if (a instanceof Array) {
            var c;
            a: {
                c = a;
                for (var d = 0, e = this.g.techOrder; d < e.length; d++) {
                    var g = u.W(e[d]),
                        j = window.videojs[g];
                    if (j.isSupported())
                        for (var k = 0, r = c; k < r.length; k++) {
                            var n = r[k];
                            if (j.canPlaySource(n)) {
                                c = {
                                    source: n,
                                    h: g
                                };
                                break a
                            }
                        }
                }
                c = l
            }
            c ? (a = c.source, c = c.h, c == this.ga ? this.src(a) : H(this, c, a)) : this.a.appendChild(u.e("p", {
                innerHTML: this.options().notSupportedMessage
            }))
        } else a instanceof Object ? window.videojs[this.ga].canPlaySource(a) ? this.src(a.src) : this.src([a]) : (this.u.src = a, this.Y ?
            (K(this, "src", a), "auto" == this.g.preload && this.load(), this.g.autoplay && this.play()) : this.G(function() {
                this.src(a)
            }));
        return this
    };
    t.load = function() {
        K(this, "load");
        return this
    };
    t.currentSrc = function() {
        return J(this, "currentSrc") || this.u.src || ""
    };
    t.Pa = function(a) {
        return a !== b ? (K(this, "setPreload", a), this.g.preload = a, this) : J(this, "preload")
    };
    t.autoplay = function(a) {
        return a !== b ? (K(this, "setAutoplay", a), this.g.autoplay = a, this) : J(this, "autoplay")
    };
    t.loop = function(a) {
        return a !== b ? (K(this, "setLoop", a), this.g.loop = a, this) : J(this, "loop")
    };
    t.poster = function(a) {
        if (a === b) return this.sc;
        this.sc = a;
        K(this, "setPoster", a);
        this.j("posterchange")
    };
    t.controls = function(a) {
        return a !== b ? (a = !!a, this.qb !== a && ((this.qb = a) ? (this.t("vjs-controls-disabled"), this.n("vjs-controls-enabled"), this.j("controlsenabled")) : (this.t("vjs-controls-enabled"), this.n("vjs-controls-disabled"), this.j("controlsdisabled"))), this) : this.qb
    };
    u.Player.prototype.Pb;
    t = u.Player.prototype;
    t.usingNativeControls = function(a) {
        return a !== b ? (a = !!a, this.Pb !== a && ((this.Pb = a) ? (this.n("vjs-using-native-controls"), this.j("usingnativecontrols")) : (this.t("vjs-using-native-controls"), this.j("usingcustomcontrols"))), this) : this.Pb
    };
    t.error = function() {
        return J(this, "error")
    };
    t.ended = function() {
        return J(this, "ended")
    };
    t.seeking = function() {
        return J(this, "seeking")
    };
    t.ha = f;
    t.reportUserActivity = function() {
        this.ha = f
    };
    t.Ob = f;
    t.userActive = function(a) {
        return a !== b ? (a = !!a, a !== this.Ob && ((this.Ob = a) ? (this.ha = f, this.t("vjs-user-inactive"), this.n("vjs-user-active"), this.j("useractive")) : (this.ha = l, this.h.S("mousemove", function(a) {
            a.stopPropagation();
            a.preventDefault()
        }), this.t("vjs-user-active"), this.n("vjs-user-inactive"), this.j("userinactive"))), this) : this.Ob
    };
    var M, N, O;
    O = document.createElement("div");
    N = {};
    O.Kd !== b ? (N.vc = "requestFullscreen", N.mb = "exitFullscreen", N.tb = "fullscreenchange", N.isFullScreen = "fullScreen") : (document.mozCancelFullScreen ? (M = "moz", N.isFullScreen = M + "FullScreen") : (M = "webkit", N.isFullScreen = M + "IsFullScreen"), O[M + "RequestFullScreen"] && (N.vc = M + "RequestFullScreen", N.mb = M + "CancelFullScreen"), N.tb = M + "fullscreenchange");
    document[N.mb] && (u.Nb.requestFullScreen = N);
    u.Aa = u.b.extend();
    u.Aa.prototype.g = {
        Pd: "play",
        children: {
            playToggle: {},
            currentTimeDisplay: {},
            timeDivider: {},
            durationDisplay: {},
            remainingTimeDisplay: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeControl: {},
            muteToggle: {}
        }
    };
    u.Aa.prototype.e = function() {
        return u.e("div", {
            className: "vjs-control-bar"
        })
    };
    u.Wb = u.q.extend({
        i: function(a, c) {
            u.q.call(this, a, c);
            a.d("play", u.bind(this, this.Jb));
            a.d("pause", u.bind(this, this.Ib))
        }
    });
    t = u.Wb.prototype;
    t.na = "Play";
    t.O = function() {
        return "vjs-play-control " + u.q.prototype.O.call(this)
    };
    t.p = function() {
        this.c.paused() ? this.c.play() : this.c.pause()
    };
    t.Jb = function() {
        u.t(this.a, "vjs-paused");
        u.n(this.a, "vjs-playing");
        this.a.children[0].children[0].innerHTML = "Pause"
    };
    t.Ib = function() {
        u.t(this.a, "vjs-playing");
        u.n(this.a, "vjs-paused");
        this.a.children[0].children[0].innerHTML = "Play"
    };
    u.Xa = u.b.extend({
        i: function(a, c) {
            u.b.call(this, a, c);
            a.d("timeupdate", u.bind(this, this.xa))
        }
    });
    u.Xa.prototype.e = function() {
        var a = u.b.prototype.e.call(this, "div", {
            className: "vjs-current-time vjs-time-controls vjs-control"
        });
        this.content = u.e("div", {
            className: "vjs-current-time-display",
            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
            "aria-live": "off"
        });
        a.appendChild(u.e("div").appendChild(this.content));
        return a
    };
    u.Xa.prototype.xa = function() {
        var a = this.c.Lb ? this.c.u.currentTime : this.c.currentTime();
        this.content.innerHTML = '<span class="vjs-control-text">Current Time </span>' + u.Ja(a, this.c.duration())
    };
    u.Ya = u.b.extend({
        i: function(a, c) {
            u.b.call(this, a, c);
            a.d("timeupdate", u.bind(this, this.xa))
        }
    });
    u.Ya.prototype.e = function() {
        var a = u.b.prototype.e.call(this, "div", {
            className: "vjs-duration vjs-time-controls vjs-control"
        });
        this.content = u.e("div", {
            className: "vjs-duration-display",
            innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
            "aria-live": "off"
        });
        a.appendChild(u.e("div").appendChild(this.content));
        return a
    };
    u.Ya.prototype.xa = function() {
        var a = this.c.duration();
        a && (this.content.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + u.Ja(a))
    };
    u.ac = u.b.extend({
        i: function(a, c) {
            u.b.call(this, a, c)
        }
    });
    u.ac.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-time-divider",
            innerHTML: "<div><span>/</span></div>"
        })
    };
    u.cb = u.b.extend({
        i: function(a, c) {
            u.b.call(this, a, c);
            a.d("timeupdate", u.bind(this, this.xa))
        }
    });
    u.cb.prototype.e = function() {
        var a = u.b.prototype.e.call(this, "div", {
            className: "vjs-remaining-time vjs-time-controls vjs-control"
        });
        this.content = u.e("div", {
            className: "vjs-remaining-time-display",
            innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
            "aria-live": "off"
        });
        a.appendChild(u.e("div").appendChild(this.content));
        return a
    };
    u.cb.prototype.xa = function() {
        this.c.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + u.Ja(ea(this.c)))
    };
    u.Ba = u.q.extend({
        i: function(a, c) {
            u.q.call(this, a, c)
        }
    });
    u.Ba.prototype.na = "Fullscreen";
    u.Ba.prototype.O = function() {
        return "vjs-fullscreen-control " + u.q.prototype.O.call(this)
    };
    u.Ba.prototype.p = function() {
        this.c.isFullScreen() ? (this.c.cancelFullScreen(), this.a.children[0].children[0].innerHTML = "Fullscreen") : (this.c.requestFullScreen(), this.a.children[0].children[0].innerHTML = "Non-Fullscreen")
    };
    u.bb = u.b.extend({
        i: function(a, c) {
            u.b.call(this, a, c)
        }
    });
    u.bb.prototype.g = {
        children: {
            seekBar: {}
        }
    };
    u.bb.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-progress-control vjs-control"
        })
    };
    u.Xb = u.M.extend({
        i: function(a, c) {
            u.M.call(this, a, c);
            a.d("timeupdate", u.bind(this, this.wa));
            a.G(u.bind(this, this.wa))
        }
    });
    t = u.Xb.prototype;
    t.g = {
        children: {
            loadProgressBar: {},
            playProgressBar: {},
            seekHandle: {}
        },
        barName: "playProgressBar",
        handleName: "seekHandle"
    };
    t.rc = "timeupdate";
    t.e = function() {
        return u.M.prototype.e.call(this, "div", {
            className: "vjs-progress-holder",
            "aria-label": "video progress bar"
        })
    };
    t.wa = function() {
        var a = this.c.Lb ? this.c.u.currentTime : this.c.currentTime();
        this.a.setAttribute("aria-valuenow", u.round(100 * this.wb(), 2));
        this.a.setAttribute("aria-valuetext", u.Ja(a, this.c.duration()))
    };
    t.wb = function() {
        var a;
        "Flash" === this.c.ga && this.c.seeking() ? (a = this.c.u, a = a.pc ? a.pc : this.c.currentTime()) : a = this.c.currentTime();
        return a / this.c.duration()
    };
    t.Oa = function(a) {
        u.M.prototype.Oa.call(this, a);
        this.c.Lb = f;
        this.Fd = !this.c.paused();
        this.c.pause()
    };
    t.Gb = function(a) {
        a = E(this, a) * this.c.duration();
        a == this.c.duration() && (a -= 0.1);
        this.c.currentTime(a)
    };
    t.Hb = function(a) {
        u.M.prototype.Hb.call(this, a);
        this.c.Lb = l;
        this.Fd && this.c.play()
    };
    t.yc = function() {
        this.c.currentTime(this.c.currentTime() + 5)
    };
    t.xc = function() {
        this.c.currentTime(this.c.currentTime() - 5)
    };
    u.$a = u.b.extend({
        i: function(a, c) {
            u.b.call(this, a, c);
            a.d("timeupdate", u.bind(this, this.update))
        }
    });
    u.$a.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-load-progress",
            innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
        })
    };
    u.$a.prototype.update = function() {
        if (this.a.style) {
            var a = this.c.bufferedPercent();
            1 < a && (a = 1);
            this.a.style.width = u.round(100 * a, 2) + "%"
        }
    };
    u.Vb = u.b.extend({
        i: function(a, c) {
            u.b.call(this, a, c)
        }
    });
    u.Vb.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-play-progress",
            innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
        })
    };
    u.eb = u.ba.extend();
    u.eb.prototype.defaultValue = "00:00";
    u.eb.prototype.e = function() {
        return u.ba.prototype.e.call(this, "div", {
            className: "vjs-seek-handle"
        })
    };
    u.gb = u.b.extend({
        i: function(a, c) {
            u.b.call(this, a, c);
            a.h && (a.h.m && a.h.m.volumeControl === l) && this.n("vjs-hidden");
            a.d("loadstart", u.bind(this, function() {
                a.h.m && a.h.m.volumeControl === l ? this.n("vjs-hidden") : this.t("vjs-hidden")
            }))
        }
    });
    u.gb.prototype.g = {
        children: {
            volumeBar: {}
        }
    };
    u.gb.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-volume-control vjs-control"
        })
    };
    u.fb = u.M.extend({
        i: function(a, c) {
            u.M.call(this, a, c);
            a.d("volumechange", u.bind(this, this.wa));
            a.G(u.bind(this, this.wa));
            setTimeout(u.bind(this, this.update), 0)
        }
    });
    t = u.fb.prototype;
    t.wa = function() {
        this.a.setAttribute("aria-valuenow", u.round(100 * this.c.volume(), 2));
        this.a.setAttribute("aria-valuetext", u.round(100 * this.c.volume(), 2) + "%")
    };
    t.g = {
        children: {
            volumeLevel: {},
            volumeHandle: {}
        },
        barName: "volumeLevel",
        handleName: "volumeHandle"
    };
    t.rc = "volumechange";
    t.e = function() {
        return u.M.prototype.e.call(this, "div", {
            className: "vjs-volume-bar",
            "aria-label": "volume level"
        })
    };
    t.Gb = function(a) {
        this.c.muted() && this.c.muted(l);
        this.c.volume(E(this, a))
    };
    t.wb = function() {
        return this.c.muted() ? 0 : this.c.volume()
    };
    t.yc = function() {
        this.c.volume(this.c.volume() + 0.1)
    };
    t.xc = function() {
        this.c.volume(this.c.volume() - 0.1)
    };
    u.bc = u.b.extend({
        i: function(a, c) {
            u.b.call(this, a, c)
        }
    });
    u.bc.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-volume-level",
            innerHTML: '<span class="vjs-control-text"></span>'
        })
    };
    u.hb = u.ba.extend();
    u.hb.prototype.defaultValue = "00:00";
    u.hb.prototype.e = function() {
        return u.ba.prototype.e.call(this, "div", {
            className: "vjs-volume-handle"
        })
    };
    u.aa = u.q.extend({
        i: function(a, c) {
            u.q.call(this, a, c);
            a.d("volumechange", u.bind(this, this.update));
            a.h && (a.h.m && a.h.m.volumeControl === l) && this.n("vjs-hidden");
            a.d("loadstart", u.bind(this, function() {
                a.h.m && a.h.m.volumeControl === l ? this.n("vjs-hidden") : this.t("vjs-hidden")
            }))
        }
    });
    u.aa.prototype.e = function() {
        return u.q.prototype.e.call(this, "div", {
            className: "vjs-mute-control vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    };
    u.aa.prototype.p = function() {
        this.c.muted(this.c.muted() ? l : f)
    };
    u.aa.prototype.update = function() {
        var a = this.c.volume(),
            c = 3;
        0 === a || this.c.muted() ? c = 0 : 0.33 > a ? c = 1 : 0.67 > a && (c = 2);
        this.c.muted() ? "Unmute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Unmute") : "Mute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Mute");
        for (a = 0; 4 > a; a++) u.t(this.a, "vjs-vol-" + a);
        u.n(this.a, "vjs-vol-" + c)
    };
    u.la = u.Q.extend({
        i: function(a, c) {
            u.Q.call(this, a, c);
            a.d("volumechange", u.bind(this, this.update));
            a.h && (a.h.m && a.h.m.Cc === l) && this.n("vjs-hidden");
            a.d("loadstart", u.bind(this, function() {
                a.h.m && a.h.m.Cc === l ? this.n("vjs-hidden") : this.t("vjs-hidden")
            }));
            this.n("vjs-menu-button")
        }
    });
    u.la.prototype.Ia = function() {
        var a = new u.ka(this.c, {
                Uc: "div"
            }),
            c = new u.fb(this.c, u.k.C({
                Ed: f
            }, this.g.Yd));
        a.V(c);
        return a
    };
    u.la.prototype.p = function() {
        u.aa.prototype.p.call(this);
        u.Q.prototype.p.call(this)
    };
    u.la.prototype.e = function() {
        return u.q.prototype.e.call(this, "div", {
            className: "vjs-volume-menu-button vjs-menu-button vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    };
    u.la.prototype.update = u.aa.prototype.update;
    u.Ca = u.q.extend({
        i: function(a, c) {
            u.q.call(this, a, c);
            a.poster() && this.src(a.poster());
            (!a.poster() || !a.controls()) && this.A();
            a.d("posterchange", u.bind(this, function() {
                this.src(a.poster())
            }));
            a.d("play", u.bind(this, this.A))
        }
    });
    var P = "backgroundSize" in u.ca.style;
    u.Ca.prototype.e = function() {
        var a = u.e("div", {
            className: "vjs-poster",
            tabIndex: -1
        });
        P || a.appendChild(u.e("img"));
        return a
    };
    u.Ca.prototype.src = function(a) {
        var c = this.v();
        a !== b && (P ? c.style.backgroundImage = 'url("' + a + '")' : c.firstChild.src = a)
    };
    u.Ca.prototype.p = function() {
        this.D().controls() && this.c.play()
    };
    u.Ub = u.b.extend({
        i: function(a, c) {
            u.b.call(this, a, c);
            a.d("canplay", u.bind(this, this.A));
            a.d("canplaythrough", u.bind(this, this.A));
            a.d("playing", u.bind(this, this.A));
            a.d("seeked", u.bind(this, this.A));
            a.d("buffering", u.bind(this, this.show));
            a.d("loadstart", u.bind(this, this.A));
            a.d("seeking", u.bind(this, this.show));
            a.d("seeked", u.bind(this, this.A));
            a.d("error", u.bind(this, this.show));
            a.d("waiting", u.bind(this, this.show))
        }
    });
    u.Ub.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-loading-spinner"
        })
    };
    u.Va = u.q.extend();
    u.Va.prototype.e = function() {
        return u.q.prototype.e.call(this, "div", {
            className: "vjs-big-play-button",
            innerHTML: '<span aria-hidden="true"></span>',
            "aria-label": "play video"
        })
    };
    u.Va.prototype.p = function() {
        this.c.play()
    };
    u.r = u.b.extend({
        i: function(a, c, d) {
            c = c || {};
            c.uc = l;
            u.b.call(this, a, c, d);
            var e, g;
            g = this;
            e = this.D();
            a = function() {
                if (e.controls() && !e.usingNativeControls()) {
                    var a;
                    g.d("mousedown", g.p);
                    g.d("touchstart", function(c) {
                        c.preventDefault();
                        a = this.c.userActive()
                    });
                    g.d("touchmove", function() {
                        a && this.D().reportUserActivity()
                    });
                    var c, d, n, q;
                    c = 0;
                    g.d("touchstart", function() {
                        c = (new Date).getTime();
                        n = f
                    });
                    q = function() {
                        n = l
                    };
                    g.d("touchmove", q);
                    g.d("touchleave", q);
                    g.d("touchcancel", q);
                    g.d("touchend", function() {
                        n === f && (d = (new Date).getTime() -
                            c, 250 > d && this.j("tap"))
                    });
                    g.d("tap", g.pd)
                }
            };
            c = u.bind(g, g.sd);
            this.G(a);
            e.d("controlsenabled", a);
            e.d("controlsdisabled", c)
        }
    });
    u.r.prototype.sd = function() {
        this.o("tap");
        this.o("touchstart");
        this.o("touchmove");
        this.o("touchleave");
        this.o("touchcancel");
        this.o("touchend");
        this.o("click");
        this.o("mousedown")
    };
    u.r.prototype.p = function(a) {
        0 === a.button && this.D().controls() && (this.D().paused() ? this.D().play() : this.D().pause())
    };
    u.r.prototype.pd = function() {
        this.D().userActive(!this.D().userActive())
    };
    u.r.prototype.m = {
        volumeControl: f,
        fullscreenResize: l,
        progressEvents: l,
        timeupdateEvents: l
    };
    u.media = {};
    u.media.Ua = "play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");

    function fa() {
        var a = u.media.Ua[i];
        return function() {
            throw Error('The "' + a + "\" method is not available on the playback technology's API");
        }
    }
    for (var i = u.media.Ua.length - 1; 0 <= i; i--) u.r.prototype[u.media.Ua[i]] = fa();
    u.l = u.r.extend({
        i: function(a, c, d) {
            this.m.volumeControl = u.l.Tc();
            this.m.movingMediaElementInDOM = !u.Ic;
            this.m.fullscreenResize = f;
            u.r.call(this, a, c, d);
            for (d = u.l.Za.length - 1; 0 <= d; d--) u.d(this.a, u.l.Za[d], u.bind(this.c, this.ad));
            (c = c.source) && this.a.currentSrc === c.src && 0 < this.a.networkState ? a.j("loadstart") : c && (this.a.src = c.src);
            if (u.Zb && a.options().nativeControlsForTouch !== l) {
                var e, g, j, k;
                e = this;
                g = this.D();
                c = g.controls();
                e.a.controls = !!c;
                j = function() {
                    e.a.controls = f
                };
                k = function() {
                    e.a.controls = l
                };
                g.d("controlsenabled",
                    j);
                g.d("controlsdisabled", k);
                c = function() {
                    g.o("controlsenabled", j);
                    g.o("controlsdisabled", k)
                };
                e.d("dispose", c);
                g.d("usingcustomcontrols", c);
                g.usingNativeControls(f)
            }
            a.G(function() {
                this.K && (this.g.autoplay && this.paused()) && (delete this.K.poster, this.play())
            });
            this.Ta()
        }
    });
    t = u.l.prototype;
    t.dispose = function() {
        u.r.prototype.dispose.call(this)
    };
    t.e = function() {
        var a = this.c,
            c = a.K,
            d;
        if (!c || this.m.movingMediaElementInDOM === l) c ? (d = c.cloneNode(l), u.l.fc(c), c = d, a.K = h) : c = u.e("video", {
            id: a.id() + "_html5_api",
            className: "vjs-tech"
        }), c.player = a, u.xb(c, a.v());
        d = ["autoplay", "preload", "loop", "muted"];
        for (var e = d.length - 1; 0 <= e; e--) {
            var g = d[e];
            a.g[g] !== h && (c[g] = a.g[g])
        }
        return c
    };
    t.ad = function(a) {
        this.j(a);
        a.stopPropagation()
    };
    t.play = function() {
        this.a.play()
    };
    t.pause = function() {
        this.a.pause()
    };
    t.paused = function() {
        return this.a.paused
    };
    t.currentTime = function() {
        return this.a.currentTime
    };
    t.ud = function(a) {
        try {
            this.a.currentTime = a
        } catch (c) {
            u.log(c, "Video is not ready. (Video.js)")
        }
    };
    t.duration = function() {
        return this.a.duration || 0
    };
    t.buffered = function() {
        return this.a.buffered
    };
    t.volume = function() {
        return this.a.volume
    };
    t.zd = function(a) {
        this.a.volume = a
    };
    t.muted = function() {
        return this.a.muted
    };
    t.xd = function(a) {
        this.a.muted = a
    };
    t.width = function() {
        return this.a.offsetWidth
    };
    t.height = function() {
        return this.a.offsetHeight
    };
    t.Sa = function() {
        return "function" == typeof this.a.webkitEnterFullScreen && (/Android/.test(u.H) || !/Chrome|Mac OS X 10.5/.test(u.H)) ? f : l
    };
    t.gc = function() {
        var a = this.a;
        a.paused && a.networkState <= a.Hd ? (this.a.play(), setTimeout(function() {
            a.pause();
            a.webkitEnterFullScreen()
        }, 0)) : a.webkitEnterFullScreen()
    };
    t.bd = function() {
        this.a.webkitExitFullScreen()
    };
    t.src = function(a) {
        this.a.src = a
    };
    t.load = function() {
        this.a.load()
    };
    t.currentSrc = function() {
        return this.a.currentSrc
    };
    t.poster = function() {
        return this.a.poster
    };
    t.Pa = function() {
        return this.a.Pa
    };
    t.yd = function(a) {
        this.a.Pa = a
    };
    t.autoplay = function() {
        return this.a.autoplay
    };
    t.td = function(a) {
        this.a.autoplay = a
    };
    t.controls = function() {
        return this.a.controls
    };
    t.loop = function() {
        return this.a.loop
    };
    t.wd = function(a) {
        this.a.loop = a
    };
    t.error = function() {
        return this.a.error
    };
    t.seeking = function() {
        return this.a.seeking
    };
    t.ended = function() {
        return this.a.ended
    };
    u.l.isSupported = function() {
        return !!u.ca.canPlayType
    };
    u.l.lb = function(a) {
        try {
            return !!u.ca.canPlayType(a.type)
        } catch (c) {
            return ""
        }
    };
    u.l.Tc = function() {
        var a = u.ca.volume;
        u.ca.volume = a / 2 + 0.1;
        return a !== u.ca.volume
    };
    u.l.Za = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
    u.l.fc = function(a) {
        if (a) {
            a.player = h;
            for (a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes();) a.removeChild(a.firstChild);
            a.removeAttribute("src");
            "function" === typeof a.load && a.load()
        }
    };
    u.Mc && (document.createElement("video").constructor.prototype.canPlayType = function(a) {
        return a && -1 != a.toLowerCase().indexOf("video/mp4") ? "maybe" : ""
    });
    u.f = u.r.extend({
        i: function(a, c, d) {
            u.r.call(this, a, c, d);
            var e = c.source;
            d = c.parentEl;
            var g = this.a = u.e("div", {
                    id: a.id() + "_temp_flash"
                }),
                j = a.id() + "_flash_api";
            a = a.g;
            var k = u.k.C({
                    readyFunction: "videojs.Flash.onReady",
                    eventProxyFunction: "videojs.Flash.onEvent",
                    errorEventProxyFunction: "videojs.Flash.onError",
                    autoplay: a.autoplay,
                    preload: a.Pa,
                    loop: a.loop,
                    muted: a.muted
                }, c.flashVars),
                r = u.k.C({
                    wmode: "opaque",
                    bgcolor: "#000000"
                }, c.params),
                n = u.k.C({
                    id: j,
                    name: j,
                    "class": "vjs-tech"
                }, c.attributes);
            e && (e.type && u.f.hd(e.type) ?
                (a = u.f.zc(e.src), k.rtmpConnection = encodeURIComponent(a.ob), k.rtmpStream = encodeURIComponent(a.Mb)) : k.src = encodeURIComponent(u.jc(e.src)));
            u.xb(g, d);
            c.startTime && this.G(function() {
                this.load();
                this.play();
                this.currentTime(c.startTime)
            });
            u.Tb && this.G(function() {
                u.d(this.v(), "mousemove", u.bind(this, function() {
                    this.D().j({
                        type: "mousemove",
                        bubbles: l
                    })
                }))
            });
            if (c.iFrameMode === f && !u.Tb) {
                var q = u.e("iframe", {
                    id: j + "_iframe",
                    name: j + "_iframe",
                    className: "vjs-tech",
                    scrolling: "no",
                    marginWidth: 0,
                    marginHeight: 0,
                    frameBorder: 0
                });
                k.readyFunction = "ready";
                k.eventProxyFunction = "events";
                k.errorEventProxyFunction = "errors";
                u.d(q, "load", u.bind(this, function() {
                    var a, d = q.contentWindow;
                    a = q.contentDocument ? q.contentDocument : q.contentWindow.document;
                    a.write(u.f.kc(c.swf, k, r, n));
                    d.player = this.c;
                    d.ready = u.bind(this.c, function(c) {
                        var d = this.h;
                        d.a = a.getElementById(c);
                        u.f.nb(d)
                    });
                    d.events = u.bind(this.c, function(a, c) {
                        this && "flash" === this.ga && this.j(c)
                    });
                    d.errors = u.bind(this.c, function(a, c) {
                        u.log("Flash Error", c)
                    })
                }));
                g.parentNode.replaceChild(q,
                    g)
            } else u.f.$c(c.swf, g, k, r, n)
        }
    });
    t = u.f.prototype;
    t.dispose = function() {
        u.r.prototype.dispose.call(this)
    };
    t.play = function() {
        this.a.vjs_play()
    };
    t.pause = function() {
        this.a.vjs_pause()
    };
    t.src = function(a) {
        u.f.gd(a) ? (a = u.f.zc(a), this.Td(a.ob), this.Ud(a.Mb)) : (a = u.jc(a), this.a.vjs_src(a));
        if (this.c.autoplay()) {
            var c = this;
            setTimeout(function() {
                c.play()
            }, 0)
        }
    };
    t.currentSrc = function() {
        var a = this.a.vjs_getProperty("currentSrc");
        if (a == h) {
            var c = this.Rd(),
                d = this.Sd();
            c && d && (a = u.f.Ad(c, d))
        }
        return a
    };
    t.load = function() {
        this.a.vjs_load()
    };
    t.poster = function() {
        this.a.vjs_getProperty("poster")
    };
    t.buffered = function() {
        return u.rb(0, this.a.vjs_getProperty("buffered"))
    };
    t.Sa = s(l);
    t.gc = s(l);
    var Q = u.f.prototype,
        R = "rtmpConnection rtmpStream preload currentTime defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
        S = "error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");

    function ga() {
        var a = R[T],
            c = a.charAt(0).toUpperCase() + a.slice(1);
        Q["set" + c] = function(c) {
            return this.a.vjs_setProperty(a, c)
        }
    }

    function U(a) {
        Q[a] = function() {
            return this.a.vjs_getProperty(a)
        }
    }
    var T;
    for (T = 0; T < R.length; T++) U(R[T]), ga();
    for (T = 0; T < S.length; T++) U(S[T]);
    u.f.isSupported = function() {
        return 10 <= u.f.version()[0]
    };
    u.f.lb = function(a) {
        if (!a.type) return "";
        a = a.type.replace(/;.*/, "").toLowerCase();
        if (a in u.f.dd || a in u.f.Ac) return "maybe"
    };
    u.f.dd = {
        "video/flv": "FLV",
        "video/x-flv": "FLV",
        "video/mp4": "MP4",
        "video/m4v": "MP4"
    };
    u.f.Ac = {
        "rtmp/mp4": "MP4",
        "rtmp/flv": "FLV"
    };
    u.f.onReady = function(a) {
        a = u.v(a);
        var c = a.player || a.parentNode.player,
            d = c.h;
        a.player = c;
        d.a = a;
        u.f.nb(d)
    };
    u.f.nb = function(a) {
        a.v().vjs_getProperty ? a.Ta() : setTimeout(function() {
            u.f.nb(a)
        }, 50)
    };
    u.f.onEvent = function(a, c) {
        u.v(a).player.j(c)
    };
    u.f.onError = function(a, c) {
        u.v(a).player.j("error");
        u.log("Flash Error", c, a)
    };
    u.f.version = function() {
        var a = "0,0,0";
        try {
            a = (new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (c) {
            try {
                navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (a = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch (d) {}
        }
        return a.split(",")
    };
    u.f.$c = function(a, c, d, e, g) {
        a = u.f.kc(a, d, e, g);
        a = u.e("div", {
            innerHTML: a
        }).childNodes[0];
        d = c.parentNode;
        c.parentNode.replaceChild(a, c);
        var j = d.childNodes[0];
        setTimeout(function() {
            j.style.display = "block"
        }, 1E3)
    };
    u.f.kc = function(a, c, d, e) {
        var g = "",
            j = "",
            k = "";
        c && u.k.qa(c, function(a, c) {
            g += a + "=" + c + "&amp;"
        });
        d = u.k.C({
            movie: a,
            flashvars: g,
            allowScriptAccess: "always",
            allowNetworking: "all"
        }, d);
        u.k.qa(d, function(a, c) {
            j += '<param name="' + a + '" value="' + c + '" />'
        });
        e = u.k.C({
            data: a,
            width: "100%",
            height: "100%"
        }, e);
        u.k.qa(e, function(a, c) {
            k += a + '="' + c + '" '
        });
        return '<object type="application/x-shockwave-flash"' + k + ">" + j + "</object>"
    };
    u.f.Ad = function(a, c) {
        return a + "&" + c
    };
    u.f.zc = function(a) {
        var c = {
            ob: "",
            Mb: ""
        };
        if (!a) return c;
        var d = a.indexOf("&"),
            e; - 1 !== d ? e = d + 1 : (d = e = a.lastIndexOf("/") + 1, 0 === d && (d = e = a.length));
        c.ob = a.substring(0, d);
        c.Mb = a.substring(e, a.length);
        return c
    };
    u.f.hd = function(a) {
        return a in u.f.Ac
    };
    u.f.Oc = /^rtmp[set]?:\/\//i;
    u.f.gd = function(a) {
        return u.f.Oc.test(a)
    };
    u.Nc = u.b.extend({
        i: function(a, c, d) {
            u.b.call(this, a, c, d);
            if (!a.g.sources || 0 === a.g.sources.length) {
                c = 0;
                for (d = a.g.techOrder; c < d.length; c++) {
                    var e = u.W(d[c]),
                        g = window.videojs[e];
                    if (g && g.isSupported()) {
                        H(a, e);
                        break
                    }
                }
            } else a.src(a.g.sources)
        }
    });
    u.Player.prototype.textTracks = function() {
        return this.va = this.va || []
    };

    function V(a, c, d) {
        for (var e = a.va, g = 0, j = e.length, k, r; g < j; g++) k = e[g], k.id() === c ? (k.show(), r = k) : d && (k.F() == d && 0 < k.mode()) && k.disable();
        (c = r ? r.F() : d ? d : l) && a.j(c + "trackchange")
    }
    u.w = u.b.extend({
        i: function(a, c) {
            u.b.call(this, a, c);
            this.P = c.id || "vjs_" + c.kind + "_" + c.language + "_" + u.s++;
            this.wc = c.src;
            this.Xc = c["default"] || c.dflt;
            this.Cd = c.title;
            this.Od = c.srclang;
            this.jd = c.label;
            this.X = [];
            this.ib = [];
            this.ea = this.fa = 0;
            this.c.d("fullscreenchange", u.bind(this, this.Qc))
        }
    });
    t = u.w.prototype;
    t.F = p("B");
    t.src = p("wc");
    t.sb = p("Xc");
    t.title = p("Cd");
    t.label = p("jd");
    t.Vc = p("X");
    t.Pc = p("ib");
    t.readyState = p("fa");
    t.mode = p("ea");
    t.Qc = function() {
        this.a.style.fontSize = this.c.isFullScreen() ? 140 * (screen.width / this.c.width()) + "%" : ""
    };
    t.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-" + this.B + " vjs-text-track"
        })
    };
    t.show = function() {
        W(this);
        this.ea = 2;
        u.b.prototype.show.call(this)
    };
    t.A = function() {
        W(this);
        this.ea = 1;
        u.b.prototype.A.call(this)
    };
    t.disable = function() {
        2 == this.ea && this.A();
        this.c.o("timeupdate", u.bind(this, this.update, this.P));
        this.c.o("ended", u.bind(this, this.reset, this.P));
        this.reset();
        this.c.da("textTrackDisplay").removeChild(this);
        this.ea = 0
    };

    function W(a) {
        0 === a.fa && a.load();
        0 === a.ea && (a.c.d("timeupdate", u.bind(a, a.update, a.P)), a.c.d("ended", u.bind(a, a.reset, a.P)), ("captions" === a.B || "subtitles" === a.B) && a.c.da("textTrackDisplay").V(a))
    }
    t.load = function() {
        0 === this.fa && (this.fa = 1, u.get(this.wc, u.bind(this, this.qd), u.bind(this, this.Fb)))
    };
    t.Fb = function(a) {
        this.error = a;
        this.fa = 3;
        this.j("error")
    };
    t.qd = function(a) {
        var c, d;
        a = a.split("\n");
        for (var e = "", g = 1, j = a.length; g < j; g++)
            if (e = u.trim(a[g])) {
                -1 == e.indexOf("--\x3e") ? (c = e, e = u.trim(a[++g])) : c = this.X.length;
                c = {
                    id: c,
                    index: this.X.length
                };
                d = e.split(" --\x3e ");
                c.startTime = X(d[0]);
                c.ra = X(d[1]);
                for (d = []; a[++g] && (e = u.trim(a[g]));) d.push(e);
                c.text = d.join("<br/>");
                this.X.push(c)
            }
        this.fa = 2;
        this.j("loaded")
    };

    function X(a) {
        var c = a.split(":");
        a = 0;
        var d, e, g;
        3 == c.length ? (d = c[0], e = c[1], c = c[2]) : (d = 0, e = c[0], c = c[1]);
        c = c.split(/\s+/);
        c = c.splice(0, 1)[0];
        c = c.split(/\.|,/);
        g = parseFloat(c[1]);
        c = c[0];
        a += 3600 * parseFloat(d);
        a += 60 * parseFloat(e);
        a += parseFloat(c);
        g && (a += g / 1E3);
        return a
    }
    t.update = function() {
        if (0 < this.X.length) {
            var a = this.c.currentTime();
            if (this.Kb === b || a < this.Kb || this.La <= a) {
                var c = this.X,
                    d = this.c.duration(),
                    e = 0,
                    g = l,
                    j = [],
                    k, r, n, q;
                a >= this.La || this.La === b ? q = this.ub !== b ? this.ub : 0 : (g = f, q = this.Bb !== b ? this.Bb : c.length - 1);
                for (;;) {
                    n = c[q];
                    if (n.ra <= a) e = Math.max(e, n.ra), n.Ea && (n.Ea = l);
                    else if (a < n.startTime) {
                        if (d = Math.min(d, n.startTime), n.Ea && (n.Ea = l), !g) break
                    } else g ? (j.splice(0, 0, n), r === b && (r = q), k = q) : (j.push(n), k === b && (k = q), r = q), d = Math.min(d, n.ra), e = Math.max(e, n.startTime), n.Ea =
                        f;
                    if (g)
                        if (0 === q) break;
                        else q--;
                    else if (q === c.length - 1) break;
                    else q++
                }
                this.ib = j;
                this.La = d;
                this.Kb = e;
                this.ub = k;
                this.Bb = r;
                a = this.ib;
                c = "";
                d = 0;
                for (e = a.length; d < e; d++) c += '<span class="vjs-tt-cue">' + a[d].text + "</span>";
                this.a.innerHTML = c;
                this.j("cuechange")
            }
        }
    };
    t.reset = function() {
        this.La = 0;
        this.Kb = this.c.duration();
        this.Bb = this.ub = 0
    };
    u.Rb = u.w.extend();
    u.Rb.prototype.B = "captions";
    u.Yb = u.w.extend();
    u.Yb.prototype.B = "subtitles";
    u.Sb = u.w.extend();
    u.Sb.prototype.B = "chapters";
    u.$b = u.b.extend({
        i: function(a, c, d) {
            u.b.call(this, a, c, d);
            if (a.g.tracks && 0 < a.g.tracks.length) {
                c = this.c;
                a = a.g.tracks;
                var e;
                for (d = 0; d < a.length; d++) {
                    e = a[d];
                    var g = c,
                        j = e.kind,
                        k = e.label,
                        r = e.language,
                        n = e;
                    e = g.va = g.va || [];
                    n = n || {};
                    n.kind = j;
                    n.label = k;
                    n.language = r;
                    j = u.W(j || "subtitles");
                    g = new window.videojs[j + "Track"](g, n);
                    e.push(g)
                }
            }
        }
    });
    u.$b.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-text-track-display"
        })
    };
    u.U = u.L.extend({
        i: function(a, c) {
            var d = this.$ = c.track;
            c.label = d.label();
            c.selected = d.sb();
            u.L.call(this, a, c);
            this.c.d(d.F() + "trackchange", u.bind(this, this.update))
        }
    });
    u.U.prototype.p = function() {
        u.L.prototype.p.call(this);
        V(this.c, this.$.P, this.$.F())
    };
    u.U.prototype.update = function() {
        this.selected(2 == this.$.mode())
    };
    u.ab = u.U.extend({
        i: function(a, c) {
            c.track = {
                F: function() {
                    return c.kind
                },
                D: a,
                label: function() {
                    return c.kind + " off"
                },
                sb: s(l),
                mode: s(l)
            };
            u.U.call(this, a, c);
            this.selected(f)
        }
    });
    u.ab.prototype.p = function() {
        u.U.prototype.p.call(this);
        V(this.c, this.$.P, this.$.F())
    };
    u.ab.prototype.update = function() {
        for (var a = this.c.textTracks(), c = 0, d = a.length, e, g = f; c < d; c++) e = a[c], e.F() == this.$.F() && 2 == e.mode() && (g = l);
        this.selected(g)
    };
    u.R = u.Q.extend({
        i: function(a, c) {
            u.Q.call(this, a, c);
            1 >= this.J.length && this.A()
        }
    });
    u.R.prototype.pa = function() {
        var a = [],
            c;
        a.push(new u.ab(this.c, {
            kind: this.B
        }));
        for (var d = 0; d < this.c.textTracks().length; d++) c = this.c.textTracks()[d], c.F() === this.B && a.push(new u.U(this.c, {
            track: c
        }));
        return a
    };
    u.ya = u.R.extend({
        i: function(a, c, d) {
            u.R.call(this, a, c, d);
            this.a.setAttribute("aria-label", "Captions Menu")
        }
    });
    u.ya.prototype.B = "captions";
    u.ya.prototype.na = "Captions";
    u.ya.prototype.className = "vjs-captions-button";
    u.Da = u.R.extend({
        i: function(a, c, d) {
            u.R.call(this, a, c, d);
            this.a.setAttribute("aria-label", "Subtitles Menu")
        }
    });
    u.Da.prototype.B = "subtitles";
    u.Da.prototype.na = "Subtitles";
    u.Da.prototype.className = "vjs-subtitles-button";
    u.za = u.R.extend({
        i: function(a, c, d) {
            u.R.call(this, a, c, d);
            this.a.setAttribute("aria-label", "Chapters Menu")
        }
    });
    t = u.za.prototype;
    t.B = "chapters";
    t.na = "Chapters";
    t.className = "vjs-chapters-button";
    t.pa = function() {
        for (var a = [], c, d = 0; d < this.c.textTracks().length; d++) c = this.c.textTracks()[d], c.F() === this.B && a.push(new u.U(this.c, {
            track: c
        }));
        return a
    };
    t.Ia = function() {
        for (var a = this.c.textTracks(), c = 0, d = a.length, e, g, j = this.J = []; c < d; c++)
            if (e = a[c], e.F() == this.B && e.sb()) {
                if (2 > e.readyState()) {
                    this.Ld = e;
                    e.d("loaded", u.bind(this, this.Ia));
                    return
                }
                g = e;
                break
            }
        a = this.sa = new u.ka(this.c);
        a.a.appendChild(u.e("li", {
            className: "vjs-menu-title",
            innerHTML: u.W(this.B),
            Bd: -1
        }));
        if (g) {
            e = g.X;
            for (var k, c = 0, d = e.length; c < d; c++) k = e[c], k = new u.Wa(this.c, {
                track: g,
                cue: k
            }), j.push(k), a.V(k)
        }
        0 < this.J.length && this.show();
        return a
    };
    u.Wa = u.L.extend({
        i: function(a, c) {
            var d = this.$ = c.track,
                e = this.cue = c.cue,
                g = a.currentTime();
            c.label = e.text;
            c.selected = e.startTime <= g && g < e.ra;
            u.L.call(this, a, c);
            d.d("cuechange", u.bind(this, this.update))
        }
    });
    u.Wa.prototype.p = function() {
        u.L.prototype.p.call(this);
        this.c.currentTime(this.cue.startTime);
        this.update(this.cue.startTime)
    };
    u.Wa.prototype.update = function() {
        var a = this.cue,
            c = this.c.currentTime();
        this.selected(a.startTime <= c && c < a.ra)
    };
    u.k.C(u.Aa.prototype.g.children, {
        subtitlesButton: {},
        captionsButton: {},
        chaptersButton: {}
    });
    if ("undefined" !== typeof window.JSON && "function" === window.JSON.parse) u.JSON = window.JSON;
    else {
        u.JSON = {};
        var Y = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        u.JSON.parse = function(a, c) {
            function d(a, e) {
                var k, r, n = a[e];
                if (n && "object" === typeof n)
                    for (k in n) Object.prototype.hasOwnProperty.call(n, k) && (r = d(n, k), r !== b ? n[k] = r : delete n[k]);
                return c.call(a, e, n)
            }
            var e;
            a = String(a);
            Y.lastIndex = 0;
            Y.test(a) && (a = a.replace(Y, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" === typeof c ? d({
                "": e
            }, "") : e;
            throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");
        }
    }
    u.cc = function() {
        var a, c, d = document.getElementsByTagName("video");
        if (d && 0 < d.length)
            for (var e = 0, g = d.length; e < g; e++)
                if ((c = d[e]) && c.getAttribute) c.player === b && (a = c.getAttribute("data-setup"), a !== h && (a = u.JSON.parse(a || "{}"), videojs(c, a)));
                else {
                    u.jb();
                    break
                }
        else u.Dc || u.jb()
    };
    u.jb = function() {
        setTimeout(u.cc, 1)
    };
    "complete" === document.readyState ? u.Dc = f : u.S(window, "load", function() {
        u.Dc = f
    });
    u.jb();
    u.rd = function(a, c) {
        u.Player.prototype[a] = c
    };
    var Z = this;
    Z.Gd = f;

    function $(a, c) {
        var d = a.split("."),
            e = Z;
        !(d[0] in e) && e.execScript && e.execScript("var " + d[0]);
        for (var g; d.length && (g = d.shift());) !d.length && c !== b ? e[g] = c : e = e[g] ? e[g] : e[g] = {}
    };
    $("videojs", u);
    $("_V_", u);
    $("videojs.options", u.options);
    $("videojs.players", u.ta);
    $("videojs.TOUCH_ENABLED", u.Zb);
    $("videojs.cache", u.oa);
    $("videojs.Component", u.b);
    u.b.prototype.player = u.b.prototype.D;
    u.b.prototype.options = u.b.prototype.options;
    u.b.prototype.init = u.b.prototype.i;
    u.b.prototype.dispose = u.b.prototype.dispose;
    u.b.prototype.createEl = u.b.prototype.e;
    u.b.prototype.contentEl = u.b.prototype.Ha;
    u.b.prototype.el = u.b.prototype.v;
    u.b.prototype.addChild = u.b.prototype.V;
    u.b.prototype.getChild = u.b.prototype.da;
    u.b.prototype.getChildById = u.b.prototype.ed;
    u.b.prototype.children = u.b.prototype.children;
    u.b.prototype.initChildren = u.b.prototype.mc;
    u.b.prototype.removeChild = u.b.prototype.removeChild;
    u.b.prototype.on = u.b.prototype.d;
    u.b.prototype.off = u.b.prototype.o;
    u.b.prototype.one = u.b.prototype.S;
    u.b.prototype.trigger = u.b.prototype.j;
    u.b.prototype.triggerReady = u.b.prototype.Ta;
    u.b.prototype.show = u.b.prototype.show;
    u.b.prototype.hide = u.b.prototype.A;
    u.b.prototype.width = u.b.prototype.width;
    u.b.prototype.height = u.b.prototype.height;
    u.b.prototype.dimensions = u.b.prototype.Yc;
    u.b.prototype.ready = u.b.prototype.G;
    u.b.prototype.addClass = u.b.prototype.n;
    u.b.prototype.removeClass = u.b.prototype.t;
    u.b.prototype.buildCSSClass = u.b.prototype.O;
    u.Player.prototype.ended = u.Player.prototype.ended;
    $("videojs.MediaLoader", u.Nc);
    $("videojs.TextTrackDisplay", u.$b);
    $("videojs.ControlBar", u.Aa);
    $("videojs.Button", u.q);
    $("videojs.PlayToggle", u.Wb);
    $("videojs.FullscreenToggle", u.Ba);
    $("videojs.BigPlayButton", u.Va);
    $("videojs.LoadingSpinner", u.Ub);
    $("videojs.CurrentTimeDisplay", u.Xa);
    $("videojs.DurationDisplay", u.Ya);
    $("videojs.TimeDivider", u.ac);
    $("videojs.RemainingTimeDisplay", u.cb);
    $("videojs.Slider", u.M);
    $("videojs.ProgressControl", u.bb);
    $("videojs.SeekBar", u.Xb);
    $("videojs.LoadProgressBar", u.$a);
    $("videojs.PlayProgressBar", u.Vb);
    $("videojs.SeekHandle", u.eb);
    $("videojs.VolumeControl", u.gb);
    $("videojs.VolumeBar", u.fb);
    $("videojs.VolumeLevel", u.bc);
    $("videojs.VolumeMenuButton", u.la);
    $("videojs.VolumeHandle", u.hb);
    $("videojs.MuteToggle", u.aa);
    $("videojs.PosterImage", u.Ca);
    $("videojs.Menu", u.ka);
    $("videojs.MenuItem", u.L);
    $("videojs.MenuButton", u.Q);
    u.Q.prototype.createItems = u.Q.prototype.pa;
    u.R.prototype.createItems = u.R.prototype.pa;
    u.za.prototype.createItems = u.za.prototype.pa;
    $("videojs.SubtitlesButton", u.Da);
    $("videojs.CaptionsButton", u.ya);
    $("videojs.ChaptersButton", u.za);
    $("videojs.MediaTechController", u.r);
    u.r.prototype.features = u.r.prototype.m;
    u.r.prototype.m.volumeControl = u.r.prototype.m.Cc;
    u.r.prototype.m.fullscreenResize = u.r.prototype.m.Md;
    u.r.prototype.m.progressEvents = u.r.prototype.m.Qd;
    u.r.prototype.m.timeupdateEvents = u.r.prototype.m.Vd;
    $("videojs.Html5", u.l);
    u.l.Events = u.l.Za;
    u.l.isSupported = u.l.isSupported;
    u.l.canPlaySource = u.l.lb;
    u.l.prototype.setCurrentTime = u.l.prototype.ud;
    u.l.prototype.setVolume = u.l.prototype.zd;
    u.l.prototype.setMuted = u.l.prototype.xd;
    u.l.prototype.setPreload = u.l.prototype.yd;
    u.l.prototype.setAutoplay = u.l.prototype.td;
    u.l.prototype.setLoop = u.l.prototype.wd;
    u.l.prototype.enterFullScreen = u.l.prototype.gc;
    u.l.prototype.exitFullScreen = u.l.prototype.bd;
    $("videojs.Flash", u.f);
    u.f.isSupported = u.f.isSupported;
    u.f.canPlaySource = u.f.lb;
    u.f.onReady = u.f.onReady;
    $("videojs.TextTrack", u.w);
    u.w.prototype.label = u.w.prototype.label;
    u.w.prototype.kind = u.w.prototype.F;
    u.w.prototype.mode = u.w.prototype.mode;
    u.w.prototype.cues = u.w.prototype.Vc;
    u.w.prototype.activeCues = u.w.prototype.Pc;
    $("videojs.CaptionsTrack", u.Rb);
    $("videojs.SubtitlesTrack", u.Yb);
    $("videojs.ChaptersTrack", u.Sb);
    $("videojs.autoSetup", u.cc);
    $("videojs.plugin", u.rd);
    $("videojs.createTimeRange", u.rb);
    $("videojs.util", u.ia);
    u.ia.mergeOptions = u.ia.Eb;
})();