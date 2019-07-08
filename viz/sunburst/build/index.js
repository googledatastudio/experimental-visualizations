!(function(i) {
  var n = {};
  function e(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = {i: t, l: !1, exports: {}});
    return i[t].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
  }
  (e.m = i),
    (e.c = n),
    (e.d = function(i, n, t) {
      e.o(i, n) || Object.defineProperty(i, n, {enumerable: !0, get: t});
    }),
    (e.r = function(i) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(i, Symbol.toStringTag, {value: 'Module'}),
        Object.defineProperty(i, '__esModule', {value: !0});
    }),
    (e.t = function(i, n) {
      if ((1 & n && (i = e(i)), 8 & n)) return i;
      if (4 & n && 'object' == typeof i && i && i.__esModule) return i;
      var t = Object.create(null);
      if (
        (e.r(t),
        Object.defineProperty(t, 'default', {enumerable: !0, value: i}),
        2 & n && 'string' != typeof i)
      )
        for (var r in i)
          e.d(
            t,
            r,
            function(n) {
              return i[n];
            }.bind(null, r)
          );
      return t;
    }),
    (e.n = function(i) {
      var n =
        i && i.__esModule
          ? function() {
              return i.default;
            }
          : function() {
              return i;
            };
      return e.d(n, 'a', n), n;
    }),
    (e.o = function(i, n) {
      return Object.prototype.hasOwnProperty.call(i, n);
    }),
    (e.p = ''),
    e((e.s = 7));
})([
  function(i, n, e) {
    'use strict';
    var t = function(i, n, e) {
      (i.prototype = n.prototype = e), (e.constructor = i);
    };
    function r(i, n) {
      var e = Object.create(i.prototype);
      for (var t in n) e[t] = n[t];
      return e;
    }
    function m() {}
    var o = '\\s*([+-]?\\d+)\\s*',
      c = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
      s = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
      d = /^#([0-9a-f]{3})$/,
      u = /^#([0-9a-f]{6})$/,
      a = new RegExp('^rgb\\(' + [o, o, o] + '\\)$'),
      f = new RegExp('^rgb\\(' + [s, s, s] + '\\)$'),
      l = new RegExp('^rgba\\(' + [o, o, o, c] + '\\)$'),
      h = new RegExp('^rgba\\(' + [s, s, s, c] + '\\)$'),
      A = new RegExp('^hsl\\(' + [c, s, s] + '\\)$'),
      O = new RegExp('^hsla\\(' + [c, s, s, c] + '\\)$'),
      p = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      };
    function S(i) {
      var n;
      return (
        (i = (i + '').trim().toLowerCase()),
        (n = d.exec(i))
          ? new N(
              (((n = parseInt(n[1], 16)) >> 8) & 15) | ((n >> 4) & 240),
              ((n >> 4) & 15) | (240 & n),
              ((15 & n) << 4) | (15 & n),
              1
            )
          : (n = u.exec(i))
          ? M(parseInt(n[1], 16))
          : (n = a.exec(i))
          ? new N(n[1], n[2], n[3], 1)
          : (n = f.exec(i))
          ? new N((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
          : (n = l.exec(i))
          ? E(n[1], n[2], n[3], n[4])
          : (n = h.exec(i))
          ? E((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
          : (n = A.exec(i))
          ? C(n[1], n[2] / 100, n[3] / 100, 1)
          : (n = O.exec(i))
          ? C(n[1], n[2] / 100, n[3] / 100, n[4])
          : p.hasOwnProperty(i)
          ? M(p[i])
          : 'transparent' === i
          ? new N(NaN, NaN, NaN, 0)
          : null
      );
    }
    function M(i) {
      return new N((i >> 16) & 255, (i >> 8) & 255, 255 & i, 1);
    }
    function E(i, n, e, t) {
      return t <= 0 && (i = n = e = NaN), new N(i, n, e, t);
    }
    function L(i) {
      return (
        i instanceof m || (i = S(i)),
        i ? new N((i = i.rgb()).r, i.g, i.b, i.opacity) : new N()
      );
    }
    function D(i, n, e, t) {
      return 1 === arguments.length ? L(i) : new N(i, n, e, null == t ? 1 : t);
    }
    function N(i, n, e, t) {
      (this.r = +i), (this.g = +n), (this.b = +e), (this.opacity = +t);
    }
    function v(i) {
      return (
        ((i = Math.max(0, Math.min(255, Math.round(i) || 0))) < 16 ? '0' : '') +
        i.toString(16)
      );
    }
    function C(i, n, e, t) {
      return (
        t <= 0
          ? (i = n = e = NaN)
          : e <= 0 || e >= 1
          ? (i = n = NaN)
          : n <= 0 && (i = NaN),
        new g(i, n, e, t)
      );
    }
    function y(i, n, e, t) {
      return 1 === arguments.length
        ? (function(i) {
            if (i instanceof g) return new g(i.h, i.s, i.l, i.opacity);
            if ((i instanceof m || (i = S(i)), !i)) return new g();
            if (i instanceof g) return i;
            var n = (i = i.rgb()).r / 255,
              e = i.g / 255,
              t = i.b / 255,
              r = Math.min(n, e, t),
              o = Math.max(n, e, t),
              c = NaN,
              s = o - r,
              d = (o + r) / 2;
            return (
              s
                ? ((c =
                    n === o
                      ? (e - t) / s + 6 * (e < t)
                      : e === o
                      ? (t - n) / s + 2
                      : (n - e) / s + 4),
                  (s /= d < 0.5 ? o + r : 2 - o - r),
                  (c *= 60))
                : (s = d > 0 && d < 1 ? 0 : c),
              new g(c, s, d, i.opacity)
            );
          })(i)
        : new g(i, n, e, null == t ? 1 : t);
    }
    function g(i, n, e, t) {
      (this.h = +i), (this.s = +n), (this.l = +e), (this.opacity = +t);
    }
    function T(i, n, e) {
      return (
        255 *
        (i < 60
          ? n + ((e - n) * i) / 60
          : i < 180
          ? e
          : i < 240
          ? n + ((e - n) * (240 - i)) / 60
          : n)
      );
    }
    t(m, S, {
      displayable: function() {
        return this.rgb().displayable();
      },
      hex: function() {
        return this.rgb().hex();
      },
      toString: function() {
        return this.rgb() + '';
      },
    }),
      t(
        N,
        D,
        r(m, {
          brighter: function(i) {
            return (
              (i = null == i ? 1 / 0.7 : Math.pow(1 / 0.7, i)),
              new N(this.r * i, this.g * i, this.b * i, this.opacity)
            );
          },
          darker: function(i) {
            return (
              (i = null == i ? 0.7 : Math.pow(0.7, i)),
              new N(this.r * i, this.g * i, this.b * i, this.opacity)
            );
          },
          rgb: function() {
            return this;
          },
          displayable: function() {
            return (
              0 <= this.r &&
              this.r <= 255 &&
              0 <= this.g &&
              this.g <= 255 &&
              0 <= this.b &&
              this.b <= 255 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: function() {
            return '#' + v(this.r) + v(this.g) + v(this.b);
          },
          toString: function() {
            var i = this.opacity;
            return (
              (1 === (i = isNaN(i) ? 1 : Math.max(0, Math.min(1, i)))
                ? 'rgb('
                : 'rgba(') +
              Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
              ', ' +
              Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
              ', ' +
              Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
              (1 === i ? ')' : ', ' + i + ')')
            );
          },
        })
      ),
      t(
        g,
        y,
        r(m, {
          brighter: function(i) {
            return (
              (i = null == i ? 1 / 0.7 : Math.pow(1 / 0.7, i)),
              new g(this.h, this.s, this.l * i, this.opacity)
            );
          },
          darker: function(i) {
            return (
              (i = null == i ? 0.7 : Math.pow(0.7, i)),
              new g(this.h, this.s, this.l * i, this.opacity)
            );
          },
          rgb: function() {
            var i = (this.h % 360) + 360 * (this.h < 0),
              n = isNaN(i) || isNaN(this.s) ? 0 : this.s,
              e = this.l,
              t = e + (e < 0.5 ? e : 1 - e) * n,
              r = 2 * e - t;
            return new N(
              T(i >= 240 ? i - 240 : i + 120, r, t),
              T(i, r, t),
              T(i < 120 ? i + 240 : i - 120, r, t),
              this.opacity
            );
          },
          displayable: function() {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
        })
      );
    var R = Math.PI / 180,
      _ = 180 / Math.PI,
      V = 0.96422,
      B = 1,
      b = 0.82521,
      Y = 4 / 29,
      F = 6 / 29,
      P = 3 * F * F,
      G = F * F * F;
    function U(i) {
      if (i instanceof x) return new x(i.l, i.a, i.b, i.opacity);
      if (i instanceof z) return q(i);
      i instanceof N || (i = L(i));
      var n,
        e,
        t = Q(i.r),
        r = Q(i.g),
        m = Q(i.b),
        o = W((0.2225045 * t + 0.7168786 * r + 0.0606169 * m) / B);
      return (
        t === r && r === m
          ? (n = e = o)
          : ((n = W((0.4360747 * t + 0.3850649 * r + 0.1430804 * m) / V)),
            (e = W((0.0139322 * t + 0.0971045 * r + 0.7141733 * m) / b))),
        new x(116 * o - 16, 500 * (n - o), 200 * (o - e), i.opacity)
      );
    }
    function I(i, n) {
      return new x(i, 0, 0, null == n ? 1 : n);
    }
    function H(i, n, e, t) {
      return 1 === arguments.length ? U(i) : new x(i, n, e, null == t ? 1 : t);
    }
    function x(i, n, e, t) {
      (this.l = +i), (this.a = +n), (this.b = +e), (this.opacity = +t);
    }
    function W(i) {
      return i > G ? Math.pow(i, 1 / 3) : i / P + Y;
    }
    function w(i) {
      return i > F ? i * i * i : P * (i - Y);
    }
    function X(i) {
      return (
        255 *
        (i <= 0.0031308 ? 12.92 * i : 1.055 * Math.pow(i, 1 / 2.4) - 0.055)
      );
    }
    function Q(i) {
      return (i /= 255) <= 0.04045
        ? i / 12.92
        : Math.pow((i + 0.055) / 1.055, 2.4);
    }
    function K(i) {
      if (i instanceof z) return new z(i.h, i.c, i.l, i.opacity);
      if ((i instanceof x || (i = U(i)), 0 === i.a && 0 === i.b))
        return new z(NaN, 0 < i.l && i.l < 100 ? 0 : NaN, i.l, i.opacity);
      var n = Math.atan2(i.b, i.a) * _;
      return new z(
        n < 0 ? n + 360 : n,
        Math.sqrt(i.a * i.a + i.b * i.b),
        i.l,
        i.opacity
      );
    }
    function k(i, n, e, t) {
      return 1 === arguments.length ? K(i) : new z(e, n, i, null == t ? 1 : t);
    }
    function J(i, n, e, t) {
      return 1 === arguments.length ? K(i) : new z(i, n, e, null == t ? 1 : t);
    }
    function z(i, n, e, t) {
      (this.h = +i), (this.c = +n), (this.l = +e), (this.opacity = +t);
    }
    function q(i) {
      if (isNaN(i.h)) return new x(i.l, 0, 0, i.opacity);
      var n = i.h * R;
      return new x(i.l, Math.cos(n) * i.c, Math.sin(n) * i.c, i.opacity);
    }
    function j(i) {
      return q(i).rgb();
    }
    t(
      x,
      H,
      r(m, {
        brighter: function(i) {
          return new x(
            this.l + 18 * (null == i ? 1 : i),
            this.a,
            this.b,
            this.opacity
          );
        },
        darker: function(i) {
          return new x(
            this.l - 18 * (null == i ? 1 : i),
            this.a,
            this.b,
            this.opacity
          );
        },
        rgb: function() {
          var i = (this.l + 16) / 116,
            n = isNaN(this.a) ? i : i + this.a / 500,
            e = isNaN(this.b) ? i : i - this.b / 200;
          return new N(
            X(
              3.1338561 * (n = V * w(n)) -
                1.6168667 * (i = B * w(i)) -
                0.4906146 * (e = b * w(e))
            ),
            X(-0.9787684 * n + 1.9161415 * i + 0.033454 * e),
            X(0.0719453 * n - 0.2289914 * i + 1.4052427 * e),
            this.opacity
          );
        },
      })
    ),
      t(
        z,
        J,
        r(m, {
          brighter: function(i) {
            return new z(
              this.h,
              this.c,
              this.l + 18 * (null == i ? 1 : i),
              this.opacity
            );
          },
          darker: function(i) {
            return new z(
              this.h,
              this.c,
              this.l - 18 * (null == i ? 1 : i),
              this.opacity
            );
          },
          rgb: function() {
            return j(this);
          },
          toString: function() {
            if ((e = j(this)).displayable()) return e + '';
            var i,
              n,
              e,
              t = new z(this.h, 0, this.l, 1);
            if ((e = j(t)).displayable())
              for (i = 0, n = this.c; n - i > 0.1; )
                (t.c = 0.5 * (i + n)),
                  (e = j(t)).displayable() ? (i = t.c) : (n = t.c);
            return (e.opacity = this.opacity), e + '';
          },
        })
      );
    var Z = -0.14861,
      $ = 1.78277,
      ii = -0.29227,
      ni = -0.90649,
      ei = 1.97294,
      ti = ei * ni,
      ri = ei * $,
      mi = $ * ii - ni * Z;
    function oi(i, n, e, t) {
      return 1 === arguments.length
        ? (function(i) {
            if (i instanceof ci) return new ci(i.h, i.s, i.l, i.opacity);
            i instanceof N || (i = L(i));
            var n = i.r / 255,
              e = i.g / 255,
              t = i.b / 255,
              r = (mi * t + ti * n - ri * e) / (mi + ti - ri),
              m = t - r,
              o = (ei * (e - r) - ii * m) / ni,
              c = Math.sqrt(o * o + m * m) / (ei * r * (1 - r)),
              s = c ? Math.atan2(o, m) * _ - 120 : NaN;
            return new ci(s < 0 ? s + 360 : s, c, r, i.opacity);
          })(i)
        : new ci(i, n, e, null == t ? 1 : t);
    }
    function ci(i, n, e, t) {
      (this.h = +i), (this.s = +n), (this.l = +e), (this.opacity = +t);
    }
    t(
      ci,
      oi,
      r(m, {
        brighter: function(i) {
          return (
            (i = null == i ? 1 / 0.7 : Math.pow(1 / 0.7, i)),
            new ci(this.h, this.s, this.l * i, this.opacity)
          );
        },
        darker: function(i) {
          return (
            (i = null == i ? 0.7 : Math.pow(0.7, i)),
            new ci(this.h, this.s, this.l * i, this.opacity)
          );
        },
        rgb: function() {
          var i = isNaN(this.h) ? 0 : (this.h + 120) * R,
            n = +this.l,
            e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
            t = Math.cos(i),
            r = Math.sin(i);
          return new N(
            255 * (n + e * (Z * t + $ * r)),
            255 * (n + e * (ii * t + ni * r)),
            255 * (n + e * (ei * t)),
            this.opacity
          );
        },
      })
    ),
      e.d(n, 'a', function() {
        return S;
      }),
      e.d(n, 'h', function() {
        return D;
      }),
      e.d(n, 'e', function() {
        return y;
      }),
      e.d(n, 'f', function() {
        return H;
      }),
      e.d(n, 'd', function() {
        return J;
      }),
      e.d(n, 'g', function() {
        return k;
      }),
      e.d(n, 'c', function() {
        return I;
      }),
      e.d(n, 'b', function() {
        return oi;
      });
  },
  function(i, n, e) {
    'use strict';
    var t = e(0);
    function r(i, n, e, t, r) {
      var m = i * i,
        o = m * i;
      return (
        ((1 - 3 * i + 3 * m - o) * n +
          (4 - 6 * m + 3 * o) * e +
          (1 + 3 * i + 3 * m - 3 * o) * t +
          o * r) /
        6
      );
    }
    var m = function(i) {
        var n = i.length - 1;
        return function(e) {
          var t =
              e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
            m = i[t],
            o = i[t + 1],
            c = t > 0 ? i[t - 1] : 2 * m - o,
            s = t < n - 1 ? i[t + 2] : 2 * o - m;
          return r((e - t / n) * n, c, m, o, s);
        };
      },
      o = function(i) {
        var n = i.length;
        return function(e) {
          var t = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
            m = i[(t + n - 1) % n],
            o = i[t % n],
            c = i[(t + 1) % n],
            s = i[(t + 2) % n];
          return r((e - t / n) * n, m, o, c, s);
        };
      },
      c = function(i) {
        return function() {
          return i;
        };
      };
    function s(i, n) {
      return function(e) {
        return i + e * n;
      };
    }
    function d(i, n) {
      var e = n - i;
      return e
        ? s(i, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
        : c(isNaN(i) ? n : i);
    }
    function u(i) {
      return 1 == (i = +i)
        ? a
        : function(n, e) {
            return e - n
              ? (function(i, n, e) {
                  return (
                    (i = Math.pow(i, e)),
                    (n = Math.pow(n, e) - i),
                    (e = 1 / e),
                    function(t) {
                      return Math.pow(i + t * n, e);
                    }
                  );
                })(n, e, i)
              : c(isNaN(n) ? e : n);
          };
    }
    function a(i, n) {
      var e = n - i;
      return e ? s(i, e) : c(isNaN(i) ? n : i);
    }
    var f = (function i(n) {
      var e = u(n);
      function r(i, n) {
        var r = e((i = Object(t.h)(i)).r, (n = Object(t.h)(n)).r),
          m = e(i.g, n.g),
          o = e(i.b, n.b),
          c = a(i.opacity, n.opacity);
        return function(n) {
          return (
            (i.r = r(n)), (i.g = m(n)), (i.b = o(n)), (i.opacity = c(n)), i + ''
          );
        };
      }
      return (r.gamma = i), r;
    })(1);
    function l(i) {
      return function(n) {
        var e,
          r,
          m = n.length,
          o = new Array(m),
          c = new Array(m),
          s = new Array(m);
        for (e = 0; e < m; ++e)
          (r = Object(t.h)(n[e])),
            (o[e] = r.r || 0),
            (c[e] = r.g || 0),
            (s[e] = r.b || 0);
        return (
          (o = i(o)),
          (c = i(c)),
          (s = i(s)),
          (r.opacity = 1),
          function(i) {
            return (r.r = o(i)), (r.g = c(i)), (r.b = s(i)), r + '';
          }
        );
      };
    }
    var h = l(m),
      A = l(o),
      O = function(i, n) {
        var e,
          t = n ? n.length : 0,
          r = i ? Math.min(t, i.length) : 0,
          m = new Array(r),
          o = new Array(t);
        for (e = 0; e < r; ++e) m[e] = g(i[e], n[e]);
        for (; e < t; ++e) o[e] = n[e];
        return function(i) {
          for (e = 0; e < r; ++e) o[e] = m[e](i);
          return o;
        };
      },
      p = function(i, n) {
        var e = new Date();
        return (
          (n -= i = +i),
          function(t) {
            return e.setTime(i + n * t), e;
          }
        );
      },
      S = function(i, n) {
        return (
          (n -= i = +i),
          function(e) {
            return i + n * e;
          }
        );
      },
      M = function(i, n) {
        var e,
          t = {},
          r = {};
        for (e in ((null !== i && 'object' == typeof i) || (i = {}),
        (null !== n && 'object' == typeof n) || (n = {}),
        n))
          e in i ? (t[e] = g(i[e], n[e])) : (r[e] = n[e]);
        return function(i) {
          for (e in t) r[e] = t[e](i);
          return r;
        };
      },
      E = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      L = new RegExp(E.source, 'g');
    var D,
      N,
      v,
      C,
      y = function(i, n) {
        var e,
          t,
          r,
          m = (E.lastIndex = L.lastIndex = 0),
          o = -1,
          c = [],
          s = [];
        for (i += '', n += ''; (e = E.exec(i)) && (t = L.exec(n)); )
          (r = t.index) > m &&
            ((r = n.slice(m, r)), c[o] ? (c[o] += r) : (c[++o] = r)),
            (e = e[0]) === (t = t[0])
              ? c[o]
                ? (c[o] += t)
                : (c[++o] = t)
              : ((c[++o] = null), s.push({i: o, x: S(e, t)})),
            (m = L.lastIndex);
        return (
          m < n.length && ((r = n.slice(m)), c[o] ? (c[o] += r) : (c[++o] = r)),
          c.length < 2
            ? s[0]
              ? (function(i) {
                  return function(n) {
                    return i(n) + '';
                  };
                })(s[0].x)
              : (function(i) {
                  return function() {
                    return i;
                  };
                })(n)
            : ((n = s.length),
              function(i) {
                for (var e, t = 0; t < n; ++t) c[(e = s[t]).i] = e.x(i);
                return c.join('');
              })
        );
      },
      g = function(i, n) {
        var e,
          r = typeof n;
        return null == n || 'boolean' === r
          ? c(n)
          : ('number' === r
              ? S
              : 'string' === r
              ? (e = Object(t.a)(n))
                ? ((n = e), f)
                : y
              : n instanceof t.a
              ? f
              : n instanceof Date
              ? p
              : Array.isArray(n)
              ? O
              : ('function' != typeof n.valueOf &&
                  'function' != typeof n.toString) ||
                isNaN(n)
              ? M
              : S)(i, n);
      },
      T = function(i) {
        var n = i.length;
        return function(e) {
          return i[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
        };
      },
      R = function(i, n) {
        var e = d(+i, +n);
        return function(i) {
          var n = e(i);
          return n - 360 * Math.floor(n / 360);
        };
      },
      _ = function(i, n) {
        return (
          (n -= i = +i),
          function(e) {
            return Math.round(i + n * e);
          }
        );
      },
      V = 180 / Math.PI,
      B = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1,
      },
      b = function(i, n, e, t, r, m) {
        var o, c, s;
        return (
          (o = Math.sqrt(i * i + n * n)) && ((i /= o), (n /= o)),
          (s = i * e + n * t) && ((e -= i * s), (t -= n * s)),
          (c = Math.sqrt(e * e + t * t)) && ((e /= c), (t /= c), (s /= c)),
          i * t < n * e && ((i = -i), (n = -n), (s = -s), (o = -o)),
          {
            translateX: r,
            translateY: m,
            rotate: Math.atan2(n, i) * V,
            skewX: Math.atan(s) * V,
            scaleX: o,
            scaleY: c,
          }
        );
      };
    function Y(i, n, e, t) {
      function r(i) {
        return i.length ? i.pop() + ' ' : '';
      }
      return function(m, o) {
        var c = [],
          s = [];
        return (
          (m = i(m)),
          (o = i(o)),
          (function(i, t, r, m, o, c) {
            if (i !== r || t !== m) {
              var s = o.push('translate(', null, n, null, e);
              c.push({i: s - 4, x: S(i, r)}, {i: s - 2, x: S(t, m)});
            } else (r || m) && o.push('translate(' + r + n + m + e);
          })(m.translateX, m.translateY, o.translateX, o.translateY, c, s),
          (function(i, n, e, m) {
            i !== n
              ? (i - n > 180 ? (n += 360) : n - i > 180 && (i += 360),
                m.push({i: e.push(r(e) + 'rotate(', null, t) - 2, x: S(i, n)}))
              : n && e.push(r(e) + 'rotate(' + n + t);
          })(m.rotate, o.rotate, c, s),
          (function(i, n, e, m) {
            i !== n
              ? m.push({i: e.push(r(e) + 'skewX(', null, t) - 2, x: S(i, n)})
              : n && e.push(r(e) + 'skewX(' + n + t);
          })(m.skewX, o.skewX, c, s),
          (function(i, n, e, t, m, o) {
            if (i !== e || n !== t) {
              var c = m.push(r(m) + 'scale(', null, ',', null, ')');
              o.push({i: c - 4, x: S(i, e)}, {i: c - 2, x: S(n, t)});
            } else
              (1 === e && 1 === t) ||
                m.push(r(m) + 'scale(' + e + ',' + t + ')');
          })(m.scaleX, m.scaleY, o.scaleX, o.scaleY, c, s),
          (m = o = null),
          function(i) {
            for (var n, e = -1, t = s.length; ++e < t; )
              c[(n = s[e]).i] = n.x(i);
            return c.join('');
          }
        );
      };
    }
    var F = Y(
        function(i) {
          return 'none' === i
            ? B
            : (D ||
                ((D = document.createElement('DIV')),
                (N = document.documentElement),
                (v = document.defaultView)),
              (D.style.transform = i),
              (i = v
                .getComputedStyle(N.appendChild(D), null)
                .getPropertyValue('transform')),
              N.removeChild(D),
              (i = i.slice(7, -1).split(',')),
              b(+i[0], +i[1], +i[2], +i[3], +i[4], +i[5]));
        },
        'px, ',
        'px)',
        'deg)'
      ),
      P = Y(
        function(i) {
          return null == i
            ? B
            : (C ||
                (C = document.createElementNS(
                  'http://www.w3.org/2000/svg',
                  'g'
                )),
              C.setAttribute('transform', i),
              (i = C.transform.baseVal.consolidate())
                ? ((i = i.matrix), b(i.a, i.b, i.c, i.d, i.e, i.f))
                : B);
        },
        ', ',
        ')',
        ')'
      ),
      G = Math.SQRT2;
    function U(i) {
      return ((i = Math.exp(i)) + 1 / i) / 2;
    }
    var I = function(i, n) {
      var e,
        t,
        r = i[0],
        m = i[1],
        o = i[2],
        c = n[0],
        s = n[1],
        d = n[2],
        u = c - r,
        a = s - m,
        f = u * u + a * a;
      if (f < 1e-12)
        (t = Math.log(d / o) / G),
          (e = function(i) {
            return [r + i * u, m + i * a, o * Math.exp(G * i * t)];
          });
      else {
        var l = Math.sqrt(f),
          h = (d * d - o * o + 4 * f) / (2 * o * 2 * l),
          A = (d * d - o * o - 4 * f) / (2 * d * 2 * l),
          O = Math.log(Math.sqrt(h * h + 1) - h),
          p = Math.log(Math.sqrt(A * A + 1) - A);
        (t = (p - O) / G),
          (e = function(i) {
            var n,
              e = i * t,
              c = U(O),
              s =
                (o / (2 * l)) *
                (c * ((n = G * e + O), ((n = Math.exp(2 * n)) - 1) / (n + 1)) -
                  (function(i) {
                    return ((i = Math.exp(i)) - 1 / i) / 2;
                  })(O));
            return [r + s * u, m + s * a, (o * c) / U(G * e + O)];
          });
      }
      return (e.duration = 1e3 * t), e;
    };
    function H(i) {
      return function(n, e) {
        var r = i((n = Object(t.e)(n)).h, (e = Object(t.e)(e)).h),
          m = a(n.s, e.s),
          o = a(n.l, e.l),
          c = a(n.opacity, e.opacity);
        return function(i) {
          return (
            (n.h = r(i)), (n.s = m(i)), (n.l = o(i)), (n.opacity = c(i)), n + ''
          );
        };
      };
    }
    var x = H(d),
      W = H(a);
    function w(i, n) {
      var e = a((i = Object(t.f)(i)).l, (n = Object(t.f)(n)).l),
        r = a(i.a, n.a),
        m = a(i.b, n.b),
        o = a(i.opacity, n.opacity);
      return function(n) {
        return (
          (i.l = e(n)), (i.a = r(n)), (i.b = m(n)), (i.opacity = o(n)), i + ''
        );
      };
    }
    function X(i) {
      return function(n, e) {
        var r = i((n = Object(t.d)(n)).h, (e = Object(t.d)(e)).h),
          m = a(n.c, e.c),
          o = a(n.l, e.l),
          c = a(n.opacity, e.opacity);
        return function(i) {
          return (
            (n.h = r(i)), (n.c = m(i)), (n.l = o(i)), (n.opacity = c(i)), n + ''
          );
        };
      };
    }
    var Q = X(d),
      K = X(a);
    function k(i) {
      return (function n(e) {
        function r(n, r) {
          var m = i((n = Object(t.b)(n)).h, (r = Object(t.b)(r)).h),
            o = a(n.s, r.s),
            c = a(n.l, r.l),
            s = a(n.opacity, r.opacity);
          return function(i) {
            return (
              (n.h = m(i)),
              (n.s = o(i)),
              (n.l = c(Math.pow(i, e))),
              (n.opacity = s(i)),
              n + ''
            );
          };
        }
        return (e = +e), (r.gamma = n), r;
      })(1);
    }
    var J = k(d),
      z = k(a);
    function q(i, n) {
      for (
        var e = 0, t = n.length - 1, r = n[0], m = new Array(t < 0 ? 0 : t);
        e < t;

      )
        m[e] = i(r, (r = n[++e]));
      return function(i) {
        var n = Math.max(0, Math.min(t - 1, Math.floor((i *= t))));
        return m[n](i - n);
      };
    }
    var j = function(i, n) {
      for (var e = new Array(n), t = 0; t < n; ++t) e[t] = i(t / (n - 1));
      return e;
    };
    e.d(n, 'a', function() {
      return g;
    }),
      e.d(n, 'b', function() {
        return O;
      }),
      e.d(n, 'c', function() {
        return m;
      }),
      e.d(n, 'd', function() {
        return o;
      }),
      e.d(n, 'g', function() {
        return p;
      }),
      e.d(n, 'h', function() {
        return T;
      }),
      e.d(n, 'm', function() {
        return R;
      }),
      e.d(n, 'o', function() {
        return S;
      }),
      e.d(n, 'p', function() {
        return M;
      }),
      e.d(n, 't', function() {
        return _;
      }),
      e.d(n, 'u', function() {
        return y;
      }),
      e.d(n, 'v', function() {
        return F;
      }),
      e.d(n, 'w', function() {
        return P;
      }),
      e.d(n, 'x', function() {
        return I;
      }),
      e.d(n, 'q', function() {
        return f;
      }),
      e.d(n, 'r', function() {
        return h;
      }),
      e.d(n, 's', function() {
        return A;
      }),
      e.d(n, 'k', function() {
        return x;
      }),
      e.d(n, 'l', function() {
        return W;
      }),
      e.d(n, 'n', function() {
        return w;
      }),
      e.d(n, 'i', function() {
        return Q;
      }),
      e.d(n, 'j', function() {
        return K;
      }),
      e.d(n, 'e', function() {
        return J;
      }),
      e.d(n, 'f', function() {
        return z;
      }),
      e.d(n, 'y', function() {
        return q;
      }),
      e.d(n, 'z', function() {
        return j;
      });
  },
  function(i, n, e) {
    'use strict';
    e.r(n);
    var t = function(i) {
        for (var n = (i.length / 6) | 0, e = new Array(n), t = 0; t < n; )
          e[t] = '#' + i.slice(6 * t, 6 * ++t);
        return e;
      },
      r = t('1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf'),
      m = t('7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666'),
      o = t('1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666'),
      c = t(
        'a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928'
      ),
      s = t('fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2'),
      d = t('b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc'),
      u = t('e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999'),
      a = t('66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3'),
      f = t(
        '8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f'
      ),
      l = e(1),
      h = function(i) {
        return Object(l.r)(i[i.length - 1]);
      },
      A = new Array(3)
        .concat(
          'd8b365f5f5f55ab4ac',
          'a6611adfc27d80cdc1018571',
          'a6611adfc27df5f5f580cdc1018571',
          '8c510ad8b365f6e8c3c7eae55ab4ac01665e',
          '8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e',
          '8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e',
          '8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e',
          '5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30',
          '5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30'
        )
        .map(t),
      O = h(A),
      p = new Array(3)
        .concat(
          'af8dc3f7f7f77fbf7b',
          '7b3294c2a5cfa6dba0008837',
          '7b3294c2a5cff7f7f7a6dba0008837',
          '762a83af8dc3e7d4e8d9f0d37fbf7b1b7837',
          '762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837',
          '762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837',
          '762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837',
          '40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b',
          '40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b'
        )
        .map(t),
      S = h(p),
      M = new Array(3)
        .concat(
          'e9a3c9f7f7f7a1d76a',
          'd01c8bf1b6dab8e1864dac26',
          'd01c8bf1b6daf7f7f7b8e1864dac26',
          'c51b7de9a3c9fde0efe6f5d0a1d76a4d9221',
          'c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221',
          'c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221',
          'c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221',
          '8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419',
          '8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419'
        )
        .map(t),
      E = h(M),
      L = new Array(3)
        .concat(
          '998ec3f7f7f7f1a340',
          '5e3c99b2abd2fdb863e66101',
          '5e3c99b2abd2f7f7f7fdb863e66101',
          '542788998ec3d8daebfee0b6f1a340b35806',
          '542788998ec3d8daebf7f7f7fee0b6f1a340b35806',
          '5427888073acb2abd2d8daebfee0b6fdb863e08214b35806',
          '5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806',
          '2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08',
          '2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08'
        )
        .map(t),
      D = h(L),
      N = new Array(3)
        .concat(
          'ef8a62f7f7f767a9cf',
          'ca0020f4a58292c5de0571b0',
          'ca0020f4a582f7f7f792c5de0571b0',
          'b2182bef8a62fddbc7d1e5f067a9cf2166ac',
          'b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac',
          'b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac',
          'b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac',
          '67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061',
          '67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061'
        )
        .map(t),
      v = h(N),
      C = new Array(3)
        .concat(
          'ef8a62ffffff999999',
          'ca0020f4a582bababa404040',
          'ca0020f4a582ffffffbababa404040',
          'b2182bef8a62fddbc7e0e0e09999994d4d4d',
          'b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d',
          'b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d',
          'b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d',
          '67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a',
          '67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a'
        )
        .map(t),
      y = h(C),
      g = new Array(3)
        .concat(
          'fc8d59ffffbf91bfdb',
          'd7191cfdae61abd9e92c7bb6',
          'd7191cfdae61ffffbfabd9e92c7bb6',
          'd73027fc8d59fee090e0f3f891bfdb4575b4',
          'd73027fc8d59fee090ffffbfe0f3f891bfdb4575b4',
          'd73027f46d43fdae61fee090e0f3f8abd9e974add14575b4',
          'd73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4',
          'a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695',
          'a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695'
        )
        .map(t),
      T = h(g),
      R = new Array(3)
        .concat(
          'fc8d59ffffbf91cf60',
          'd7191cfdae61a6d96a1a9641',
          'd7191cfdae61ffffbfa6d96a1a9641',
          'd73027fc8d59fee08bd9ef8b91cf601a9850',
          'd73027fc8d59fee08bffffbfd9ef8b91cf601a9850',
          'd73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850',
          'd73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850',
          'a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837',
          'a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837'
        )
        .map(t),
      _ = h(R),
      V = new Array(3)
        .concat(
          'fc8d59ffffbf99d594',
          'd7191cfdae61abdda42b83ba',
          'd7191cfdae61ffffbfabdda42b83ba',
          'd53e4ffc8d59fee08be6f59899d5943288bd',
          'd53e4ffc8d59fee08bffffbfe6f59899d5943288bd',
          'd53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd',
          'd53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd',
          '9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2',
          '9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2'
        )
        .map(t),
      B = h(V),
      b = new Array(3)
        .concat(
          'e5f5f999d8c92ca25f',
          'edf8fbb2e2e266c2a4238b45',
          'edf8fbb2e2e266c2a42ca25f006d2c',
          'edf8fbccece699d8c966c2a42ca25f006d2c',
          'edf8fbccece699d8c966c2a441ae76238b45005824',
          'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824',
          'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b'
        )
        .map(t),
      Y = h(b),
      F = new Array(3)
        .concat(
          'e0ecf49ebcda8856a7',
          'edf8fbb3cde38c96c688419d',
          'edf8fbb3cde38c96c68856a7810f7c',
          'edf8fbbfd3e69ebcda8c96c68856a7810f7c',
          'edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b',
          'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b',
          'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b'
        )
        .map(t),
      P = h(F),
      G = new Array(3)
        .concat(
          'e0f3dba8ddb543a2ca',
          'f0f9e8bae4bc7bccc42b8cbe',
          'f0f9e8bae4bc7bccc443a2ca0868ac',
          'f0f9e8ccebc5a8ddb57bccc443a2ca0868ac',
          'f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e',
          'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e',
          'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081'
        )
        .map(t),
      U = h(G),
      I = new Array(3)
        .concat(
          'fee8c8fdbb84e34a33',
          'fef0d9fdcc8afc8d59d7301f',
          'fef0d9fdcc8afc8d59e34a33b30000',
          'fef0d9fdd49efdbb84fc8d59e34a33b30000',
          'fef0d9fdd49efdbb84fc8d59ef6548d7301f990000',
          'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000',
          'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000'
        )
        .map(t),
      H = h(I),
      x = new Array(3)
        .concat(
          'ece2f0a6bddb1c9099',
          'f6eff7bdc9e167a9cf02818a',
          'f6eff7bdc9e167a9cf1c9099016c59',
          'f6eff7d0d1e6a6bddb67a9cf1c9099016c59',
          'f6eff7d0d1e6a6bddb67a9cf3690c002818a016450',
          'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450',
          'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636'
        )
        .map(t),
      W = h(x),
      w = new Array(3)
        .concat(
          'ece7f2a6bddb2b8cbe',
          'f1eef6bdc9e174a9cf0570b0',
          'f1eef6bdc9e174a9cf2b8cbe045a8d',
          'f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d',
          'f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b',
          'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b',
          'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858'
        )
        .map(t),
      X = h(w),
      Q = new Array(3)
        .concat(
          'e7e1efc994c7dd1c77',
          'f1eef6d7b5d8df65b0ce1256',
          'f1eef6d7b5d8df65b0dd1c77980043',
          'f1eef6d4b9dac994c7df65b0dd1c77980043',
          'f1eef6d4b9dac994c7df65b0e7298ace125691003f',
          'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f',
          'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f'
        )
        .map(t),
      K = h(Q),
      k = new Array(3)
        .concat(
          'fde0ddfa9fb5c51b8a',
          'feebe2fbb4b9f768a1ae017e',
          'feebe2fbb4b9f768a1c51b8a7a0177',
          'feebe2fcc5c0fa9fb5f768a1c51b8a7a0177',
          'feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177',
          'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177',
          'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a'
        )
        .map(t),
      J = h(k),
      z = new Array(3)
        .concat(
          'edf8b17fcdbb2c7fb8',
          'ffffcca1dab441b6c4225ea8',
          'ffffcca1dab441b6c42c7fb8253494',
          'ffffccc7e9b47fcdbb41b6c42c7fb8253494',
          'ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84',
          'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84',
          'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58'
        )
        .map(t),
      q = h(z),
      j = new Array(3)
        .concat(
          'f7fcb9addd8e31a354',
          'ffffccc2e69978c679238443',
          'ffffccc2e69978c67931a354006837',
          'ffffccd9f0a3addd8e78c67931a354006837',
          'ffffccd9f0a3addd8e78c67941ab5d238443005a32',
          'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32',
          'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529'
        )
        .map(t),
      Z = h(j),
      $ = new Array(3)
        .concat(
          'fff7bcfec44fd95f0e',
          'ffffd4fed98efe9929cc4c02',
          'ffffd4fed98efe9929d95f0e993404',
          'ffffd4fee391fec44ffe9929d95f0e993404',
          'ffffd4fee391fec44ffe9929ec7014cc4c028c2d04',
          'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04',
          'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506'
        )
        .map(t),
      ii = h($),
      ni = new Array(3)
        .concat(
          'ffeda0feb24cf03b20',
          'ffffb2fecc5cfd8d3ce31a1c',
          'ffffb2fecc5cfd8d3cf03b20bd0026',
          'ffffb2fed976feb24cfd8d3cf03b20bd0026',
          'ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026',
          'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026',
          'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026'
        )
        .map(t),
      ei = h(ni),
      ti = new Array(3)
        .concat(
          'deebf79ecae13182bd',
          'eff3ffbdd7e76baed62171b5',
          'eff3ffbdd7e76baed63182bd08519c',
          'eff3ffc6dbef9ecae16baed63182bd08519c',
          'eff3ffc6dbef9ecae16baed64292c62171b5084594',
          'f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594',
          'f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b'
        )
        .map(t),
      ri = h(ti),
      mi = new Array(3)
        .concat(
          'e5f5e0a1d99b31a354',
          'edf8e9bae4b374c476238b45',
          'edf8e9bae4b374c47631a354006d2c',
          'edf8e9c7e9c0a1d99b74c47631a354006d2c',
          'edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32',
          'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32',
          'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b'
        )
        .map(t),
      oi = h(mi),
      ci = new Array(3)
        .concat(
          'f0f0f0bdbdbd636363',
          'f7f7f7cccccc969696525252',
          'f7f7f7cccccc969696636363252525',
          'f7f7f7d9d9d9bdbdbd969696636363252525',
          'f7f7f7d9d9d9bdbdbd969696737373525252252525',
          'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525',
          'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000'
        )
        .map(t),
      si = h(ci),
      di = new Array(3)
        .concat(
          'efedf5bcbddc756bb1',
          'f2f0f7cbc9e29e9ac86a51a3',
          'f2f0f7cbc9e29e9ac8756bb154278f',
          'f2f0f7dadaebbcbddc9e9ac8756bb154278f',
          'f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486',
          'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486',
          'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d'
        )
        .map(t),
      ui = h(di),
      ai = new Array(3)
        .concat(
          'fee0d2fc9272de2d26',
          'fee5d9fcae91fb6a4acb181d',
          'fee5d9fcae91fb6a4ade2d26a50f15',
          'fee5d9fcbba1fc9272fb6a4ade2d26a50f15',
          'fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d',
          'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d',
          'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d'
        )
        .map(t),
      fi = h(ai),
      li = new Array(3)
        .concat(
          'fee6cefdae6be6550d',
          'feeddefdbe85fd8d3cd94701',
          'feeddefdbe85fd8d3ce6550da63603',
          'feeddefdd0a2fdae6bfd8d3ce6550da63603',
          'feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04',
          'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04',
          'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704'
        )
        .map(t),
      hi = h(li),
      Ai = e(0),
      Oi = Object(l.f)(Object(Ai.b)(300, 0.5, 0), Object(Ai.b)(-240, 0.5, 1)),
      pi = Object(l.f)(
        Object(Ai.b)(-100, 0.75, 0.35),
        Object(Ai.b)(80, 1.5, 0.8)
      ),
      Si = Object(l.f)(
        Object(Ai.b)(260, 0.75, 0.35),
        Object(Ai.b)(80, 1.5, 0.8)
      ),
      Mi = Object(Ai.b)(),
      Ei = function(i) {
        (i < 0 || i > 1) && (i -= Math.floor(i));
        var n = Math.abs(i - 0.5);
        return (
          (Mi.h = 360 * i - 100),
          (Mi.s = 1.5 - 1.5 * n),
          (Mi.l = 0.8 - 0.9 * n),
          Mi + ''
        );
      },
      Li = Object(Ai.h)(),
      Di = Math.PI / 3,
      Ni = (2 * Math.PI) / 3,
      vi = function(i) {
        var n;
        return (
          (i = (0.5 - i) * Math.PI),
          (Li.r = 255 * (n = Math.sin(i)) * n),
          (Li.g = 255 * (n = Math.sin(i + Di)) * n),
          (Li.b = 255 * (n = Math.sin(i + Ni)) * n),
          Li + ''
        );
      };
    function Ci(i) {
      var n = i.length;
      return function(e) {
        return i[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
      };
    }
    var yi = Ci(
        t(
          '44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725'
        )
      ),
      gi = Ci(
        t(
          '00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf'
        )
      ),
      Ti = Ci(
        t(
          '00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4'
        )
      ),
      Ri = Ci(
        t(
          '0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921'
        )
      );
    e.d(n, 'schemeCategory10', function() {
      return r;
    }),
      e.d(n, 'schemeAccent', function() {
        return m;
      }),
      e.d(n, 'schemeDark2', function() {
        return o;
      }),
      e.d(n, 'schemePaired', function() {
        return c;
      }),
      e.d(n, 'schemePastel1', function() {
        return s;
      }),
      e.d(n, 'schemePastel2', function() {
        return d;
      }),
      e.d(n, 'schemeSet1', function() {
        return u;
      }),
      e.d(n, 'schemeSet2', function() {
        return a;
      }),
      e.d(n, 'schemeSet3', function() {
        return f;
      }),
      e.d(n, 'interpolateBrBG', function() {
        return O;
      }),
      e.d(n, 'schemeBrBG', function() {
        return A;
      }),
      e.d(n, 'interpolatePRGn', function() {
        return S;
      }),
      e.d(n, 'schemePRGn', function() {
        return p;
      }),
      e.d(n, 'interpolatePiYG', function() {
        return E;
      }),
      e.d(n, 'schemePiYG', function() {
        return M;
      }),
      e.d(n, 'interpolatePuOr', function() {
        return D;
      }),
      e.d(n, 'schemePuOr', function() {
        return L;
      }),
      e.d(n, 'interpolateRdBu', function() {
        return v;
      }),
      e.d(n, 'schemeRdBu', function() {
        return N;
      }),
      e.d(n, 'interpolateRdGy', function() {
        return y;
      }),
      e.d(n, 'schemeRdGy', function() {
        return C;
      }),
      e.d(n, 'interpolateRdYlBu', function() {
        return T;
      }),
      e.d(n, 'schemeRdYlBu', function() {
        return g;
      }),
      e.d(n, 'interpolateRdYlGn', function() {
        return _;
      }),
      e.d(n, 'schemeRdYlGn', function() {
        return R;
      }),
      e.d(n, 'interpolateSpectral', function() {
        return B;
      }),
      e.d(n, 'schemeSpectral', function() {
        return V;
      }),
      e.d(n, 'interpolateBuGn', function() {
        return Y;
      }),
      e.d(n, 'schemeBuGn', function() {
        return b;
      }),
      e.d(n, 'interpolateBuPu', function() {
        return P;
      }),
      e.d(n, 'schemeBuPu', function() {
        return F;
      }),
      e.d(n, 'interpolateGnBu', function() {
        return U;
      }),
      e.d(n, 'schemeGnBu', function() {
        return G;
      }),
      e.d(n, 'interpolateOrRd', function() {
        return H;
      }),
      e.d(n, 'schemeOrRd', function() {
        return I;
      }),
      e.d(n, 'interpolatePuBuGn', function() {
        return W;
      }),
      e.d(n, 'schemePuBuGn', function() {
        return x;
      }),
      e.d(n, 'interpolatePuBu', function() {
        return X;
      }),
      e.d(n, 'schemePuBu', function() {
        return w;
      }),
      e.d(n, 'interpolatePuRd', function() {
        return K;
      }),
      e.d(n, 'schemePuRd', function() {
        return Q;
      }),
      e.d(n, 'interpolateRdPu', function() {
        return J;
      }),
      e.d(n, 'schemeRdPu', function() {
        return k;
      }),
      e.d(n, 'interpolateYlGnBu', function() {
        return q;
      }),
      e.d(n, 'schemeYlGnBu', function() {
        return z;
      }),
      e.d(n, 'interpolateYlGn', function() {
        return Z;
      }),
      e.d(n, 'schemeYlGn', function() {
        return j;
      }),
      e.d(n, 'interpolateYlOrBr', function() {
        return ii;
      }),
      e.d(n, 'schemeYlOrBr', function() {
        return $;
      }),
      e.d(n, 'interpolateYlOrRd', function() {
        return ei;
      }),
      e.d(n, 'schemeYlOrRd', function() {
        return ni;
      }),
      e.d(n, 'interpolateBlues', function() {
        return ri;
      }),
      e.d(n, 'schemeBlues', function() {
        return ti;
      }),
      e.d(n, 'interpolateGreens', function() {
        return oi;
      }),
      e.d(n, 'schemeGreens', function() {
        return mi;
      }),
      e.d(n, 'interpolateGreys', function() {
        return si;
      }),
      e.d(n, 'schemeGreys', function() {
        return ci;
      }),
      e.d(n, 'interpolatePurples', function() {
        return ui;
      }),
      e.d(n, 'schemePurples', function() {
        return di;
      }),
      e.d(n, 'interpolateReds', function() {
        return fi;
      }),
      e.d(n, 'schemeReds', function() {
        return ai;
      }),
      e.d(n, 'interpolateOranges', function() {
        return hi;
      }),
      e.d(n, 'schemeOranges', function() {
        return li;
      }),
      e.d(n, 'interpolateCubehelixDefault', function() {
        return Oi;
      }),
      e.d(n, 'interpolateRainbow', function() {
        return Ei;
      }),
      e.d(n, 'interpolateWarm', function() {
        return pi;
      }),
      e.d(n, 'interpolateCool', function() {
        return Si;
      }),
      e.d(n, 'interpolateSinebow', function() {
        return vi;
      }),
      e.d(n, 'interpolateViridis', function() {
        return yi;
      }),
      e.d(n, 'interpolateMagma', function() {
        return gi;
      }),
      e.d(n, 'interpolateInferno', function() {
        return Ti;
      }),
      e.d(n, 'interpolatePlasma', function() {
        return Ri;
      });
  },
  function(i, n, e) {
    'use strict';
    function t(i, n) {
      return i.parent === n.parent ? 1 : 2;
    }
    function r(i, n) {
      return i + n.x;
    }
    function m(i, n) {
      return Math.max(i, n.y);
    }
    e.r(n);
    var o = function() {
      var i = t,
        n = 1,
        e = 1,
        o = !1;
      function c(t) {
        var c,
          s = 0;
        t.eachAfter(function(n) {
          var e = n.children;
          e
            ? ((n.x = (function(i) {
                return i.reduce(r, 0) / i.length;
              })(e)),
              (n.y = (function(i) {
                return 1 + i.reduce(m, 0);
              })(e)))
            : ((n.x = c ? (s += i(n, c)) : 0), (n.y = 0), (c = n));
        });
        var d = (function(i) {
            for (var n; (n = i.children); ) i = n[0];
            return i;
          })(t),
          u = (function(i) {
            for (var n; (n = i.children); ) i = n[n.length - 1];
            return i;
          })(t),
          a = d.x - i(d, u) / 2,
          f = u.x + i(u, d) / 2;
        return t.eachAfter(
          o
            ? function(i) {
                (i.x = (i.x - t.x) * n), (i.y = (t.y - i.y) * e);
              }
            : function(i) {
                (i.x = ((i.x - a) / (f - a)) * n),
                  (i.y = (1 - (t.y ? i.y / t.y : 1)) * e);
              }
        );
      }
      return (
        (c.separation = function(n) {
          return arguments.length ? ((i = n), c) : i;
        }),
        (c.size = function(i) {
          return arguments.length
            ? ((o = !1), (n = +i[0]), (e = +i[1]), c)
            : o
            ? null
            : [n, e];
        }),
        (c.nodeSize = function(i) {
          return arguments.length
            ? ((o = !0), (n = +i[0]), (e = +i[1]), c)
            : o
            ? [n, e]
            : null;
        }),
        c
      );
    };
    function c(i) {
      var n = 0,
        e = i.children,
        t = e && e.length;
      if (t) for (; --t >= 0; ) n += e[t].value;
      else n = 1;
      i.value = n;
    }
    function s(i, n) {
      var e,
        t,
        r,
        m,
        o,
        c = new f(i),
        s = +i.value && (c.value = i.value),
        u = [c];
      for (null == n && (n = d); (e = u.pop()); )
        if ((s && (e.value = +e.data.value), (r = n(e.data)) && (o = r.length)))
          for (e.children = new Array(o), m = o - 1; m >= 0; --m)
            u.push((t = e.children[m] = new f(r[m]))),
              (t.parent = e),
              (t.depth = e.depth + 1);
      return c.eachBefore(a);
    }
    function d(i) {
      return i.children;
    }
    function u(i) {
      i.data = i.data.data;
    }
    function a(i) {
      var n = 0;
      do {
        i.height = n;
      } while ((i = i.parent) && i.height < ++n);
    }
    function f(i) {
      (this.data = i), (this.depth = this.height = 0), (this.parent = null);
    }
    f.prototype = s.prototype = {
      constructor: f,
      count: function() {
        return this.eachAfter(c);
      },
      each: function(i) {
        var n,
          e,
          t,
          r,
          m = this,
          o = [m];
        do {
          for (n = o.reverse(), o = []; (m = n.pop()); )
            if ((i(m), (e = m.children)))
              for (t = 0, r = e.length; t < r; ++t) o.push(e[t]);
        } while (o.length);
        return this;
      },
      eachAfter: function(i) {
        for (var n, e, t, r = this, m = [r], o = []; (r = m.pop()); )
          if ((o.push(r), (n = r.children)))
            for (e = 0, t = n.length; e < t; ++e) m.push(n[e]);
        for (; (r = o.pop()); ) i(r);
        return this;
      },
      eachBefore: function(i) {
        for (var n, e, t = this, r = [t]; (t = r.pop()); )
          if ((i(t), (n = t.children)))
            for (e = n.length - 1; e >= 0; --e) r.push(n[e]);
        return this;
      },
      sum: function(i) {
        return this.eachAfter(function(n) {
          for (
            var e = +i(n.data) || 0, t = n.children, r = t && t.length;
            --r >= 0;

          )
            e += t[r].value;
          n.value = e;
        });
      },
      sort: function(i) {
        return this.eachBefore(function(n) {
          n.children && n.children.sort(i);
        });
      },
      path: function(i) {
        for (
          var n = this,
            e = (function(i, n) {
              if (i === n) return i;
              var e = i.ancestors(),
                t = n.ancestors(),
                r = null;
              for (i = e.pop(), n = t.pop(); i === n; )
                (r = i), (i = e.pop()), (n = t.pop());
              return r;
            })(n, i),
            t = [n];
          n !== e;

        )
          (n = n.parent), t.push(n);
        for (var r = t.length; i !== e; ) t.splice(r, 0, i), (i = i.parent);
        return t;
      },
      ancestors: function() {
        for (var i = this, n = [i]; (i = i.parent); ) n.push(i);
        return n;
      },
      descendants: function() {
        var i = [];
        return (
          this.each(function(n) {
            i.push(n);
          }),
          i
        );
      },
      leaves: function() {
        var i = [];
        return (
          this.eachBefore(function(n) {
            n.children || i.push(n);
          }),
          i
        );
      },
      links: function() {
        var i = this,
          n = [];
        return (
          i.each(function(e) {
            e !== i && n.push({source: e.parent, target: e});
          }),
          n
        );
      },
      copy: function() {
        return s(this).eachBefore(u);
      },
    };
    var l = Array.prototype.slice;
    var h = function(i) {
      for (
        var n,
          e,
          t = 0,
          r = (i = (function(i) {
            for (var n, e, t = i.length; t; )
              (e = (Math.random() * t--) | 0),
                (n = i[t]),
                (i[t] = i[e]),
                (i[e] = n);
            return i;
          })(l.call(i))).length,
          m = [];
        t < r;

      )
        (n = i[t]), e && p(e, n) ? ++t : ((e = M((m = A(m, n)))), (t = 0));
      return e;
    };
    function A(i, n) {
      var e, t;
      if (S(n, i)) return [n];
      for (e = 0; e < i.length; ++e)
        if (O(n, i[e]) && S(E(i[e], n), i)) return [i[e], n];
      for (e = 0; e < i.length - 1; ++e)
        for (t = e + 1; t < i.length; ++t)
          if (
            O(E(i[e], i[t]), n) &&
            O(E(i[e], n), i[t]) &&
            O(E(i[t], n), i[e]) &&
            S(L(i[e], i[t], n), i)
          )
            return [i[e], i[t], n];
      throw new Error();
    }
    function O(i, n) {
      var e = i.r - n.r,
        t = n.x - i.x,
        r = n.y - i.y;
      return e < 0 || e * e < t * t + r * r;
    }
    function p(i, n) {
      var e = i.r - n.r + 1e-6,
        t = n.x - i.x,
        r = n.y - i.y;
      return e > 0 && e * e > t * t + r * r;
    }
    function S(i, n) {
      for (var e = 0; e < n.length; ++e) if (!p(i, n[e])) return !1;
      return !0;
    }
    function M(i) {
      switch (i.length) {
        case 1:
          return {x: (n = i[0]).x, y: n.y, r: n.r};
        case 2:
          return E(i[0], i[1]);
        case 3:
          return L(i[0], i[1], i[2]);
      }
      var n;
    }
    function E(i, n) {
      var e = i.x,
        t = i.y,
        r = i.r,
        m = n.x,
        o = n.y,
        c = n.r,
        s = m - e,
        d = o - t,
        u = c - r,
        a = Math.sqrt(s * s + d * d);
      return {
        x: (e + m + (s / a) * u) / 2,
        y: (t + o + (d / a) * u) / 2,
        r: (a + r + c) / 2,
      };
    }
    function L(i, n, e) {
      var t = i.x,
        r = i.y,
        m = i.r,
        o = n.x,
        c = n.y,
        s = n.r,
        d = e.x,
        u = e.y,
        a = e.r,
        f = t - o,
        l = t - d,
        h = r - c,
        A = r - u,
        O = s - m,
        p = a - m,
        S = t * t + r * r - m * m,
        M = S - o * o - c * c + s * s,
        E = S - d * d - u * u + a * a,
        L = l * h - f * A,
        D = (h * E - A * M) / (2 * L) - t,
        N = (A * O - h * p) / L,
        v = (l * M - f * E) / (2 * L) - r,
        C = (f * p - l * O) / L,
        y = N * N + C * C - 1,
        g = 2 * (m + D * N + v * C),
        T = D * D + v * v - m * m,
        R = -(y ? (g + Math.sqrt(g * g - 4 * y * T)) / (2 * y) : T / g);
      return {x: t + D + N * R, y: r + v + C * R, r: R};
    }
    function D(i, n, e) {
      var t,
        r,
        m,
        o,
        c = i.x - n.x,
        s = i.y - n.y,
        d = c * c + s * s;
      d
        ? ((r = n.r + e.r),
          (r *= r),
          (o = i.r + e.r),
          r > (o *= o)
            ? ((t = (d + o - r) / (2 * d)),
              (m = Math.sqrt(Math.max(0, o / d - t * t))),
              (e.x = i.x - t * c - m * s),
              (e.y = i.y - t * s + m * c))
            : ((t = (d + r - o) / (2 * d)),
              (m = Math.sqrt(Math.max(0, r / d - t * t))),
              (e.x = n.x + t * c - m * s),
              (e.y = n.y + t * s + m * c)))
        : ((e.x = n.x + e.r), (e.y = n.y));
    }
    function N(i, n) {
      var e = i.r + n.r - 1e-6,
        t = n.x - i.x,
        r = n.y - i.y;
      return e > 0 && e * e > t * t + r * r;
    }
    function v(i) {
      var n = i._,
        e = i.next._,
        t = n.r + e.r,
        r = (n.x * e.r + e.x * n.r) / t,
        m = (n.y * e.r + e.y * n.r) / t;
      return r * r + m * m;
    }
    function C(i) {
      (this._ = i), (this.next = null), (this.previous = null);
    }
    function y(i) {
      if (!(r = i.length)) return 0;
      var n, e, t, r, m, o, c, s, d, u, a;
      if ((((n = i[0]).x = 0), (n.y = 0), !(r > 1))) return n.r;
      if (((e = i[1]), (n.x = -e.r), (e.x = n.r), (e.y = 0), !(r > 2)))
        return n.r + e.r;
      D(e, n, (t = i[2])),
        (n = new C(n)),
        (e = new C(e)),
        (t = new C(t)),
        (n.next = t.previous = e),
        (e.next = n.previous = t),
        (t.next = e.previous = n);
      i: for (c = 3; c < r; ++c) {
        D(n._, e._, (t = i[c])),
          (t = new C(t)),
          (s = e.next),
          (d = n.previous),
          (u = e._.r),
          (a = n._.r);
        do {
          if (u <= a) {
            if (N(s._, t._)) {
              (e = s), (n.next = e), (e.previous = n), --c;
              continue i;
            }
            (u += s._.r), (s = s.next);
          } else {
            if (N(d._, t._)) {
              ((n = d).next = e), (e.previous = n), --c;
              continue i;
            }
            (a += d._.r), (d = d.previous);
          }
        } while (s !== d.next);
        for (
          t.previous = n, t.next = e, n.next = e.previous = e = t, m = v(n);
          (t = t.next) !== e;

        )
          (o = v(t)) < m && ((n = t), (m = o));
        e = n.next;
      }
      for (n = [e._], t = e; (t = t.next) !== e; ) n.push(t._);
      for (t = h(n), c = 0; c < r; ++c) ((n = i[c]).x -= t.x), (n.y -= t.y);
      return t.r;
    }
    var g = function(i) {
      return y(i), i;
    };
    function T(i) {
      if ('function' != typeof i) throw new Error();
      return i;
    }
    function R() {
      return 0;
    }
    var _ = function(i) {
      return function() {
        return i;
      };
    };
    function V(i) {
      return Math.sqrt(i.value);
    }
    var B = function() {
      var i = null,
        n = 1,
        e = 1,
        t = R;
      function r(r) {
        return (
          (r.x = n / 2),
          (r.y = e / 2),
          i
            ? r
                .eachBefore(b(i))
                .eachAfter(Y(t, 0.5))
                .eachBefore(F(1))
            : r
                .eachBefore(b(V))
                .eachAfter(Y(R, 1))
                .eachAfter(Y(t, r.r / Math.min(n, e)))
                .eachBefore(F(Math.min(n, e) / (2 * r.r))),
          r
        );
      }
      return (
        (r.radius = function(n) {
          return arguments.length
            ? ((i = null == (e = n) ? null : T(e)), r)
            : i;
          var e;
        }),
        (r.size = function(i) {
          return arguments.length ? ((n = +i[0]), (e = +i[1]), r) : [n, e];
        }),
        (r.padding = function(i) {
          return arguments.length
            ? ((t = 'function' == typeof i ? i : _(+i)), r)
            : t;
        }),
        r
      );
    };
    function b(i) {
      return function(n) {
        n.children || (n.r = Math.max(0, +i(n) || 0));
      };
    }
    function Y(i, n) {
      return function(e) {
        if ((t = e.children)) {
          var t,
            r,
            m,
            o = t.length,
            c = i(e) * n || 0;
          if (c) for (r = 0; r < o; ++r) t[r].r += c;
          if (((m = y(t)), c)) for (r = 0; r < o; ++r) t[r].r -= c;
          e.r = m + c;
        }
      };
    }
    function F(i) {
      return function(n) {
        var e = n.parent;
        (n.r *= i), e && ((n.x = e.x + i * n.x), (n.y = e.y + i * n.y));
      };
    }
    var P = function(i) {
        (i.x0 = Math.round(i.x0)),
          (i.y0 = Math.round(i.y0)),
          (i.x1 = Math.round(i.x1)),
          (i.y1 = Math.round(i.y1));
      },
      G = function(i, n, e, t, r) {
        for (
          var m,
            o = i.children,
            c = -1,
            s = o.length,
            d = i.value && (t - n) / i.value;
          ++c < s;

        )
          ((m = o[c]).y0 = e),
            (m.y1 = r),
            (m.x0 = n),
            (m.x1 = n += m.value * d);
      },
      U = function() {
        var i = 1,
          n = 1,
          e = 0,
          t = !1;
        function r(r) {
          var m = r.height + 1;
          return (
            (r.x0 = r.y0 = e),
            (r.x1 = i),
            (r.y1 = n / m),
            r.eachBefore(
              (function(i, n) {
                return function(t) {
                  t.children &&
                    G(
                      t,
                      t.x0,
                      (i * (t.depth + 1)) / n,
                      t.x1,
                      (i * (t.depth + 2)) / n
                    );
                  var r = t.x0,
                    m = t.y0,
                    o = t.x1 - e,
                    c = t.y1 - e;
                  o < r && (r = o = (r + o) / 2),
                    c < m && (m = c = (m + c) / 2),
                    (t.x0 = r),
                    (t.y0 = m),
                    (t.x1 = o),
                    (t.y1 = c);
                };
              })(n, m)
            ),
            t && r.eachBefore(P),
            r
          );
        }
        return (
          (r.round = function(i) {
            return arguments.length ? ((t = !!i), r) : t;
          }),
          (r.size = function(e) {
            return arguments.length ? ((i = +e[0]), (n = +e[1]), r) : [i, n];
          }),
          (r.padding = function(i) {
            return arguments.length ? ((e = +i), r) : e;
          }),
          r
        );
      },
      I = '$',
      H = {depth: -1},
      x = {};
    function W(i) {
      return i.id;
    }
    function w(i) {
      return i.parentId;
    }
    var X = function() {
      var i = W,
        n = w;
      function e(e) {
        var t,
          r,
          m,
          o,
          c,
          s,
          d,
          u = e.length,
          l = new Array(u),
          h = {};
        for (r = 0; r < u; ++r)
          (t = e[r]),
            (c = l[r] = new f(t)),
            null != (s = i(t, r, e)) &&
              (s += '') &&
              (h[(d = I + (c.id = s))] = d in h ? x : c);
        for (r = 0; r < u; ++r)
          if (((c = l[r]), null != (s = n(e[r], r, e)) && (s += ''))) {
            if (!(o = h[I + s])) throw new Error('missing: ' + s);
            if (o === x) throw new Error('ambiguous: ' + s);
            o.children ? o.children.push(c) : (o.children = [c]),
              (c.parent = o);
          } else {
            if (m) throw new Error('multiple roots');
            m = c;
          }
        if (!m) throw new Error('no root');
        if (
          ((m.parent = H),
          m
            .eachBefore(function(i) {
              (i.depth = i.parent.depth + 1), --u;
            })
            .eachBefore(a),
          (m.parent = null),
          u > 0)
        )
          throw new Error('cycle');
        return m;
      }
      return (
        (e.id = function(n) {
          return arguments.length ? ((i = T(n)), e) : i;
        }),
        (e.parentId = function(i) {
          return arguments.length ? ((n = T(i)), e) : n;
        }),
        e
      );
    };
    function Q(i, n) {
      return i.parent === n.parent ? 1 : 2;
    }
    function K(i) {
      var n = i.children;
      return n ? n[0] : i.t;
    }
    function k(i) {
      var n = i.children;
      return n ? n[n.length - 1] : i.t;
    }
    function J(i, n, e) {
      var t = e / (n.i - i.i);
      (n.c -= t), (n.s += e), (i.c += t), (n.z += e), (n.m += e);
    }
    function z(i, n, e) {
      return i.a.parent === n.parent ? i.a : e;
    }
    function q(i, n) {
      (this._ = i),
        (this.parent = null),
        (this.children = null),
        (this.A = null),
        (this.a = this),
        (this.z = 0),
        (this.m = 0),
        (this.c = 0),
        (this.s = 0),
        (this.t = null),
        (this.i = n);
    }
    q.prototype = Object.create(f.prototype);
    var j = function() {
        var i = Q,
          n = 1,
          e = 1,
          t = null;
        function r(r) {
          var s = (function(i) {
            for (var n, e, t, r, m, o = new q(i, 0), c = [o]; (n = c.pop()); )
              if ((t = n._.children))
                for (
                  n.children = new Array((m = t.length)), r = m - 1;
                  r >= 0;
                  --r
                )
                  c.push((e = n.children[r] = new q(t[r], r))), (e.parent = n);
            return ((o.parent = new q(null, 0)).children = [o]), o;
          })(r);
          if ((s.eachAfter(m), (s.parent.m = -s.z), s.eachBefore(o), t))
            r.eachBefore(c);
          else {
            var d = r,
              u = r,
              a = r;
            r.eachBefore(function(i) {
              i.x < d.x && (d = i),
                i.x > u.x && (u = i),
                i.depth > a.depth && (a = i);
            });
            var f = d === u ? 1 : i(d, u) / 2,
              l = f - d.x,
              h = n / (u.x + f + l),
              A = e / (a.depth || 1);
            r.eachBefore(function(i) {
              (i.x = (i.x + l) * h), (i.y = i.depth * A);
            });
          }
          return r;
        }
        function m(n) {
          var e = n.children,
            t = n.parent.children,
            r = n.i ? t[n.i - 1] : null;
          if (e) {
            !(function(i) {
              for (
                var n, e = 0, t = 0, r = i.children, m = r.length;
                --m >= 0;

              )
                ((n = r[m]).z += e), (n.m += e), (e += n.s + (t += n.c));
            })(n);
            var m = (e[0].z + e[e.length - 1].z) / 2;
            r ? ((n.z = r.z + i(n._, r._)), (n.m = n.z - m)) : (n.z = m);
          } else r && (n.z = r.z + i(n._, r._));
          n.parent.A = (function(n, e, t) {
            if (e) {
              for (
                var r,
                  m = n,
                  o = n,
                  c = e,
                  s = m.parent.children[0],
                  d = m.m,
                  u = o.m,
                  a = c.m,
                  f = s.m;
                (c = k(c)), (m = K(m)), c && m;

              )
                (s = K(s)),
                  ((o = k(o)).a = n),
                  (r = c.z + a - m.z - d + i(c._, m._)) > 0 &&
                    (J(z(c, n, t), n, r), (d += r), (u += r)),
                  (a += c.m),
                  (d += m.m),
                  (f += s.m),
                  (u += o.m);
              c && !k(o) && ((o.t = c), (o.m += a - u)),
                m && !K(s) && ((s.t = m), (s.m += d - f), (t = n));
            }
            return t;
          })(n, r, n.parent.A || t[0]);
        }
        function o(i) {
          (i._.x = i.z + i.parent.m), (i.m += i.parent.m);
        }
        function c(i) {
          (i.x *= n), (i.y = i.depth * e);
        }
        return (
          (r.separation = function(n) {
            return arguments.length ? ((i = n), r) : i;
          }),
          (r.size = function(i) {
            return arguments.length
              ? ((t = !1), (n = +i[0]), (e = +i[1]), r)
              : t
              ? null
              : [n, e];
          }),
          (r.nodeSize = function(i) {
            return arguments.length
              ? ((t = !0), (n = +i[0]), (e = +i[1]), r)
              : t
              ? [n, e]
              : null;
          }),
          r
        );
      },
      Z = function(i, n, e, t, r) {
        for (
          var m,
            o = i.children,
            c = -1,
            s = o.length,
            d = i.value && (r - e) / i.value;
          ++c < s;

        )
          ((m = o[c]).x0 = n),
            (m.x1 = t),
            (m.y0 = e),
            (m.y1 = e += m.value * d);
      },
      $ = (1 + Math.sqrt(5)) / 2;
    function ii(i, n, e, t, r, m) {
      for (
        var o,
          c,
          s,
          d,
          u,
          a,
          f,
          l,
          h,
          A,
          O,
          p = [],
          S = n.children,
          M = 0,
          E = 0,
          L = S.length,
          D = n.value;
        M < L;

      ) {
        (s = r - e), (d = m - t);
        do {
          u = S[E++].value;
        } while (!u && E < L);
        for (
          a = f = u,
            O = u * u * (A = Math.max(d / s, s / d) / (D * i)),
            h = Math.max(f / O, O / a);
          E < L;
          ++E
        ) {
          if (
            ((u += c = S[E].value),
            c < a && (a = c),
            c > f && (f = c),
            (O = u * u * A),
            (l = Math.max(f / O, O / a)) > h)
          ) {
            u -= c;
            break;
          }
          h = l;
        }
        p.push((o = {value: u, dice: s < d, children: S.slice(M, E)})),
          o.dice
            ? G(o, e, t, r, D ? (t += (d * u) / D) : m)
            : Z(o, e, t, D ? (e += (s * u) / D) : r, m),
          (D -= u),
          (M = E);
      }
      return p;
    }
    var ni = (function i(n) {
        function e(i, e, t, r, m) {
          ii(n, i, e, t, r, m);
        }
        return (
          (e.ratio = function(n) {
            return i((n = +n) > 1 ? n : 1);
          }),
          e
        );
      })($),
      ei = function() {
        var i = ni,
          n = !1,
          e = 1,
          t = 1,
          r = [0],
          m = R,
          o = R,
          c = R,
          s = R,
          d = R;
        function u(i) {
          return (
            (i.x0 = i.y0 = 0),
            (i.x1 = e),
            (i.y1 = t),
            i.eachBefore(a),
            (r = [0]),
            n && i.eachBefore(P),
            i
          );
        }
        function a(n) {
          var e = r[n.depth],
            t = n.x0 + e,
            u = n.y0 + e,
            a = n.x1 - e,
            f = n.y1 - e;
          a < t && (t = a = (t + a) / 2),
            f < u && (u = f = (u + f) / 2),
            (n.x0 = t),
            (n.y0 = u),
            (n.x1 = a),
            (n.y1 = f),
            n.children &&
              ((e = r[n.depth + 1] = m(n) / 2),
              (t += d(n) - e),
              (u += o(n) - e),
              (a -= c(n) - e) < t && (t = a = (t + a) / 2),
              (f -= s(n) - e) < u && (u = f = (u + f) / 2),
              i(n, t, u, a, f));
        }
        return (
          (u.round = function(i) {
            return arguments.length ? ((n = !!i), u) : n;
          }),
          (u.size = function(i) {
            return arguments.length ? ((e = +i[0]), (t = +i[1]), u) : [e, t];
          }),
          (u.tile = function(n) {
            return arguments.length ? ((i = T(n)), u) : i;
          }),
          (u.padding = function(i) {
            return arguments.length
              ? u.paddingInner(i).paddingOuter(i)
              : u.paddingInner();
          }),
          (u.paddingInner = function(i) {
            return arguments.length
              ? ((m = 'function' == typeof i ? i : _(+i)), u)
              : m;
          }),
          (u.paddingOuter = function(i) {
            return arguments.length
              ? u
                  .paddingTop(i)
                  .paddingRight(i)
                  .paddingBottom(i)
                  .paddingLeft(i)
              : u.paddingTop();
          }),
          (u.paddingTop = function(i) {
            return arguments.length
              ? ((o = 'function' == typeof i ? i : _(+i)), u)
              : o;
          }),
          (u.paddingRight = function(i) {
            return arguments.length
              ? ((c = 'function' == typeof i ? i : _(+i)), u)
              : c;
          }),
          (u.paddingBottom = function(i) {
            return arguments.length
              ? ((s = 'function' == typeof i ? i : _(+i)), u)
              : s;
          }),
          (u.paddingLeft = function(i) {
            return arguments.length
              ? ((d = 'function' == typeof i ? i : _(+i)), u)
              : d;
          }),
          u
        );
      },
      ti = function(i, n, e, t, r) {
        var m,
          o,
          c = i.children,
          s = c.length,
          d = new Array(s + 1);
        for (d[0] = o = m = 0; m < s; ++m) d[m + 1] = o += c[m].value;
        !(function i(n, e, t, r, m, o, s) {
          if (n >= e - 1) {
            var u = c[n];
            return (u.x0 = r), (u.y0 = m), (u.x1 = o), void (u.y1 = s);
          }
          var a = d[n],
            f = t / 2 + a,
            l = n + 1,
            h = e - 1;
          for (; l < h; ) {
            var A = (l + h) >>> 1;
            d[A] < f ? (l = A + 1) : (h = A);
          }
          f - d[l - 1] < d[l] - f && n + 1 < l && --l;
          var O = d[l] - a,
            p = t - O;
          if (o - r > s - m) {
            var S = (r * p + o * O) / t;
            i(n, l, O, r, m, S, s), i(l, e, p, S, m, o, s);
          } else {
            var M = (m * p + s * O) / t;
            i(n, l, O, r, m, o, M), i(l, e, p, r, M, o, s);
          }
        })(0, s, i.value, n, e, t, r);
      },
      ri = function(i, n, e, t, r) {
        (1 & i.depth ? Z : G)(i, n, e, t, r);
      },
      mi = (function i(n) {
        function e(i, e, t, r, m) {
          if ((o = i._squarify) && o.ratio === n)
            for (
              var o, c, s, d, u, a = -1, f = o.length, l = i.value;
              ++a < f;

            ) {
              for (
                s = (c = o[a]).children, d = c.value = 0, u = s.length;
                d < u;
                ++d
              )
                c.value += s[d].value;
              c.dice
                ? G(c, e, t, r, (t += ((m - t) * c.value) / l))
                : Z(c, e, t, (e += ((r - e) * c.value) / l), m),
                (l -= c.value);
            }
          else (i._squarify = o = ii(n, i, e, t, r, m)), (o.ratio = n);
        }
        return (
          (e.ratio = function(n) {
            return i((n = +n) > 1 ? n : 1);
          }),
          e
        );
      })($);
    e.d(n, 'cluster', function() {
      return o;
    }),
      e.d(n, 'hierarchy', function() {
        return s;
      }),
      e.d(n, 'pack', function() {
        return B;
      }),
      e.d(n, 'packSiblings', function() {
        return g;
      }),
      e.d(n, 'packEnclose', function() {
        return h;
      }),
      e.d(n, 'partition', function() {
        return U;
      }),
      e.d(n, 'stratify', function() {
        return X;
      }),
      e.d(n, 'tree', function() {
        return j;
      }),
      e.d(n, 'treemap', function() {
        return ei;
      }),
      e.d(n, 'treemapBinary', function() {
        return ti;
      }),
      e.d(n, 'treemapDice', function() {
        return G;
      }),
      e.d(n, 'treemapSlice', function() {
        return Z;
      }),
      e.d(n, 'treemapSliceDice', function() {
        return ri;
      }),
      e.d(n, 'treemapSquarify', function() {
        return ni;
      }),
      e.d(n, 'treemapResquarify', function() {
        return mi;
      });
  },
  function(i, n, e) {
    'use strict';
    Object.defineProperty(n, '__esModule', {value: !0}),
      (function(i) {
        (i.METRIC = 'METRIC'), (i.DIMENSION = 'DIMENSION');
      })(n.ConceptType || (n.ConceptType = {})),
      (function(i) {
        i.RENDER = 'RENDER';
      })(n.MessageType || (n.MessageType = {})),
      (function(i) {
        (i.YEAR = 'YEAR'),
          (i.YEAR_QUARTER = 'YEAR_QUARTER'),
          (i.YEAR_MONTH = 'YEAR_MONTH'),
          (i.YEAR_WEEK = 'YEAR_WEEK'),
          (i.YEAR_MONTH_DAY = 'YEAR_MONTH_DAY'),
          (i.YEAR_MONTH_DAY_HOUR = 'YEAR_MONTH_DAY_HOUR'),
          (i.QUARTER = 'QUARTER'),
          (i.MONTH = 'MONTH'),
          (i.WEEK = 'WEEK'),
          (i.MONTH_DAY = 'MONTH_DAY'),
          (i.DAY_OF_WEEK = 'DAY_OF_WEEK'),
          (i.DAY = 'DAY'),
          (i.HOUR = 'HOUR'),
          (i.MINUTE = 'MINUTE'),
          (i.DURATION = 'DURATION'),
          (i.COUNTRY = 'COUNTRY'),
          (i.COUNTRY_CODE = 'COUNTRY_CODE'),
          (i.CONTINENT = 'CONTINENT'),
          (i.CONTINENT_CODE = 'CONTINENT_CODE'),
          (i.SUB_CONTINENT = 'SUB_CONTINENT'),
          (i.SUB_CONTINENT_CODE = 'SUB_CONTINENT_CODE'),
          (i.REGION = 'REGION'),
          (i.REGION_CODE = 'REGION_CODE'),
          (i.CITY = 'CITY'),
          (i.CITY_CODE = 'CITY_CODE'),
          (i.METRO_CODE = 'METRO_CODE'),
          (i.LATITUDE_LONGITUDE = 'LATITUDE_LONGITUDE'),
          (i.NUMBER = 'NUMBER'),
          (i.PERCENT = 'PERCENT'),
          (i.TEXT = 'TEXT'),
          (i.BOOLEAN = 'BOOLEAN'),
          (i.URL = 'URL'),
          (i.IMAGE = 'IMAGE'),
          (i.CURRENCY_AED = 'CURRENCY_AED'),
          (i.CURRENCY_ALL = 'CURRENCY_ALL'),
          (i.CURRENCY_ARS = 'CURRENCY_ARS'),
          (i.CURRENCY_AUD = 'CURRENCY_AUD'),
          (i.CURRENCY_BDT = 'CURRENCY_BDT'),
          (i.CURRENCY_BGN = 'CURRENCY_BGN'),
          (i.CURRENCY_BOB = 'CURRENCY_BOB'),
          (i.CURRENCY_BRL = 'CURRENCY_BRL'),
          (i.CURRENCY_CAD = 'CURRENCY_CAD'),
          (i.CURRENCY_CDF = 'CURRENCY_CDF'),
          (i.CURRENCY_CHF = 'CURRENCY_CHF'),
          (i.CURRENCY_CLP = 'CURRENCY_CLP'),
          (i.CURRENCY_CNY = 'CURRENCY_CNY'),
          (i.CURRENCY_COP = 'CURRENCY_COP'),
          (i.CURRENCY_CRC = 'CURRENCY_CRC'),
          (i.CURRENCY_CZK = 'CURRENCY_CZK'),
          (i.CURRENCY_DKK = 'CURRENCY_DKK'),
          (i.CURRENCY_DOP = 'CURRENCY_DOP'),
          (i.CURRENCY_EGP = 'CURRENCY_EGP'),
          (i.CURRENCY_ETB = 'CURRENCY_ETB'),
          (i.CURRENCY_EUR = 'CURRENCY_EUR'),
          (i.CURRENCY_GBP = 'CURRENCY_GBP'),
          (i.CURRENCY_HKD = 'CURRENCY_HKD'),
          (i.CURRENCY_HRK = 'CURRENCY_HRK'),
          (i.CURRENCY_HUF = 'CURRENCY_HUF'),
          (i.CURRENCY_IDR = 'CURRENCY_IDR'),
          (i.CURRENCY_ILS = 'CURRENCY_ILS'),
          (i.CURRENCY_INR = 'CURRENCY_INR'),
          (i.CURRENCY_IRR = 'CURRENCY_IRR'),
          (i.CURRENCY_ISK = 'CURRENCY_ISK'),
          (i.CURRENCY_JMD = 'CURRENCY_JMD'),
          (i.CURRENCY_JPY = 'CURRENCY_JPY'),
          (i.CURRENCY_KRW = 'CURRENCY_KRW'),
          (i.CURRENCY_LKR = 'CURRENCY_LKR'),
          (i.CURRENCY_LTL = 'CURRENCY_LTL'),
          (i.CURRENCY_MNT = 'CURRENCY_MNT'),
          (i.CURRENCY_MVR = 'CURRENCY_MVR'),
          (i.CURRENCY_MXN = 'CURRENCY_MXN'),
          (i.CURRENCY_MYR = 'CURRENCY_MYR'),
          (i.CURRENCY_NOK = 'CURRENCY_NOK'),
          (i.CURRENCY_NZD = 'CURRENCY_NZD'),
          (i.CURRENCY_PAB = 'CURRENCY_PAB'),
          (i.CURRENCY_PEN = 'CURRENCY_PEN'),
          (i.CURRENCY_PHP = 'CURRENCY_PHP'),
          (i.CURRENCY_PKR = 'CURRENCY_PKR'),
          (i.CURRENCY_PLN = 'CURRENCY_PLN'),
          (i.CURRENCY_RON = 'CURRENCY_RON'),
          (i.CURRENCY_RSD = 'CURRENCY_RSD'),
          (i.CURRENCY_RUB = 'CURRENCY_RUB'),
          (i.CURRENCY_SAR = 'CURRENCY_SAR'),
          (i.CURRENCY_SEK = 'CURRENCY_SEK'),
          (i.CURRENCY_SGD = 'CURRENCY_SGD'),
          (i.CURRENCY_THB = 'CURRENCY_THB'),
          (i.CURRENCY_TRY = 'CURRENCY_TRY'),
          (i.CURRENCY_TWD = 'CURRENCY_TWD'),
          (i.CURRENCY_TZS = 'CURRENCY_TZS'),
          (i.CURRENCY_UAH = 'CURRENCY_UAH'),
          (i.CURRENCY_USD = 'CURRENCY_USD'),
          (i.CURRENCY_UYU = 'CURRENCY_UYU'),
          (i.CURRENCY_VEF = 'CURRENCY_VEF'),
          (i.CURRENCY_VND = 'CURRENCY_VND'),
          (i.CURRENCY_YER = 'CURRENCY_YER'),
          (i.CURRENCY_ZAR = 'CURRENCY_ZAR');
      })(n.FieldType || (n.FieldType = {})),
      (function(i) {
        (i.DEFAULT = 'DEFAULT'),
          (i.COMPARISON = 'COMPARISON'),
          (i.SUMMARY = 'SUMMARY');
      })(n.TableType || (n.TableType = {})),
      (function(i) {
        (i.METRIC = 'METRIC'),
          (i.DIMENSION = 'DIMENSION'),
          (i.SORT = 'SORT'),
          (i.MAX_RESULTS = 'MAX_RESULTS');
      })(n.ConfigDataElementType || (n.ConfigDataElementType = {})),
      (function(i) {
        (i.TEXTINPUT = 'TEXTINPUT'),
          (i.SELECT_SINGLE = 'SELECT_SINGLE'),
          (i.CHECKBOX = 'CHECKBOX'),
          (i.FONT_COLOR = 'FONT_COLOR'),
          (i.FONT_SIZE = 'FONT_SIZE'),
          (i.FONT_FAMILY = 'FONT_FAMILY'),
          (i.FILL_COLOR = 'FILL_COLOR'),
          (i.BORDER_COLOR = 'BORDER_COLOR'),
          (i.AXIS_COLOR = 'AXIS_COLOR'),
          (i.GRID_COLOR = 'GRID_COLOR'),
          (i.OPACITY = 'OPACITY'),
          (i.LINE_WEIGHT = 'LINE_WEIGHT'),
          (i.LINE_STYLE = 'LINE_STYLE'),
          (i.BORDER_RADIUS = 'BORDER_RADIUS'),
          (i.INTERVAL = 'INTERVAL'),
          (i.SELECT_RADIO = 'SELECT_RADIO');
      })(n.ConfigStyleElementType || (n.ConfigStyleElementType = {})),
      (function(i) {
        i.FILTER = 'FILTER';
      })(n.DSInteractionType || (n.DSInteractionType = {})),
      (function(i) {
        (i.VIZ_READY = 'vizReady'), (i.INTERACTION = 'vizAction');
      })(n.ToDSMessageType || (n.ToDSMessageType = {})),
      (function(i) {
        i.FILTER = 'FILTER';
      })(n.InteractionType || (n.InteractionType = {}));
  },
  function(i, n, e) {
    'use strict';
    e.r(n);
    var t = function(i, n) {
        return i < n ? -1 : i > n ? 1 : i >= n ? 0 : NaN;
      },
      r = function(i) {
        var n;
        return (
          1 === i.length &&
            ((n = i),
            (i = function(i, e) {
              return t(n(i), e);
            })),
          {
            left: function(n, e, t, r) {
              for (null == t && (t = 0), null == r && (r = n.length); t < r; ) {
                var m = (t + r) >>> 1;
                i(n[m], e) < 0 ? (t = m + 1) : (r = m);
              }
              return t;
            },
            right: function(n, e, t, r) {
              for (null == t && (t = 0), null == r && (r = n.length); t < r; ) {
                var m = (t + r) >>> 1;
                i(n[m], e) > 0 ? (r = m) : (t = m + 1);
              }
              return t;
            },
          }
        );
      };
    var m = r(t),
      o = m.right,
      c = m.left,
      s = o,
      d = function(i, n) {
        null == n && (n = u);
        for (
          var e = 0, t = i.length - 1, r = i[0], m = new Array(t < 0 ? 0 : t);
          e < t;

        )
          m[e] = n(r, (r = i[++e]));
        return m;
      };
    function u(i, n) {
      return [i, n];
    }
    var a = function(i, n, e) {
        var t,
          r,
          m,
          o,
          c = i.length,
          s = n.length,
          d = new Array(c * s);
        for (null == e && (e = u), t = m = 0; t < c; ++t)
          for (o = i[t], r = 0; r < s; ++r, ++m) d[m] = e(o, n[r]);
        return d;
      },
      f = function(i, n) {
        return n < i ? -1 : n > i ? 1 : n >= i ? 0 : NaN;
      },
      l = function(i) {
        return null === i ? NaN : +i;
      },
      h = function(i, n) {
        var e,
          t,
          r = i.length,
          m = 0,
          o = -1,
          c = 0,
          s = 0;
        if (null == n)
          for (; ++o < r; )
            isNaN((e = l(i[o]))) || (s += (t = e - c) * (e - (c += t / ++m)));
        else
          for (; ++o < r; )
            isNaN((e = l(n(i[o], o, i)))) ||
              (s += (t = e - c) * (e - (c += t / ++m)));
        if (m > 1) return s / (m - 1);
      },
      A = function(i, n) {
        var e = h(i, n);
        return e ? Math.sqrt(e) : e;
      },
      O = function(i, n) {
        var e,
          t,
          r,
          m = i.length,
          o = -1;
        if (null == n) {
          for (; ++o < m; )
            if (null != (e = i[o]) && e >= e)
              for (t = r = e; ++o < m; )
                null != (e = i[o]) && (t > e && (t = e), r < e && (r = e));
        } else
          for (; ++o < m; )
            if (null != (e = n(i[o], o, i)) && e >= e)
              for (t = r = e; ++o < m; )
                null != (e = n(i[o], o, i)) &&
                  (t > e && (t = e), r < e && (r = e));
        return [t, r];
      },
      p = Array.prototype,
      S = p.slice,
      M = p.map,
      E = function(i) {
        return function() {
          return i;
        };
      },
      L = function(i) {
        return i;
      },
      D = function(i, n, e) {
        (i = +i),
          (n = +n),
          (e =
            (r = arguments.length) < 2
              ? ((n = i), (i = 0), 1)
              : r < 3
              ? 1
              : +e);
        for (
          var t = -1,
            r = 0 | Math.max(0, Math.ceil((n - i) / e)),
            m = new Array(r);
          ++t < r;

        )
          m[t] = i + t * e;
        return m;
      },
      N = Math.sqrt(50),
      v = Math.sqrt(10),
      C = Math.sqrt(2),
      y = function(i, n, e) {
        var t,
          r,
          m,
          o,
          c = -1;
        if (((e = +e), (i = +i) === (n = +n) && e > 0)) return [i];
        if (
          ((t = n < i) && ((r = i), (i = n), (n = r)),
          0 === (o = g(i, n, e)) || !isFinite(o))
        )
          return [];
        if (o > 0)
          for (
            i = Math.ceil(i / o),
              n = Math.floor(n / o),
              m = new Array((r = Math.ceil(n - i + 1)));
            ++c < r;

          )
            m[c] = (i + c) * o;
        else
          for (
            i = Math.floor(i * o),
              n = Math.ceil(n * o),
              m = new Array((r = Math.ceil(i - n + 1)));
            ++c < r;

          )
            m[c] = (i - c) / o;
        return t && m.reverse(), m;
      };
    function g(i, n, e) {
      var t = (n - i) / Math.max(0, e),
        r = Math.floor(Math.log(t) / Math.LN10),
        m = t / Math.pow(10, r);
      return r >= 0
        ? (m >= N ? 10 : m >= v ? 5 : m >= C ? 2 : 1) * Math.pow(10, r)
        : -Math.pow(10, -r) / (m >= N ? 10 : m >= v ? 5 : m >= C ? 2 : 1);
    }
    function T(i, n, e) {
      var t = Math.abs(n - i) / Math.max(0, e),
        r = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)),
        m = t / r;
      return (
        m >= N ? (r *= 10) : m >= v ? (r *= 5) : m >= C && (r *= 2),
        n < i ? -r : r
      );
    }
    var R = function(i) {
        return Math.ceil(Math.log(i.length) / Math.LN2) + 1;
      },
      _ = function() {
        var i = L,
          n = O,
          e = R;
        function t(t) {
          var r,
            m,
            o = t.length,
            c = new Array(o);
          for (r = 0; r < o; ++r) c[r] = i(t[r], r, t);
          var d = n(c),
            u = d[0],
            a = d[1],
            f = e(c, u, a);
          Array.isArray(f) ||
            ((f = T(u, a, f)), (f = D(Math.ceil(u / f) * f, a, f)));
          for (var l = f.length; f[0] <= u; ) f.shift(), --l;
          for (; f[l - 1] > a; ) f.pop(), --l;
          var h,
            A = new Array(l + 1);
          for (r = 0; r <= l; ++r)
            ((h = A[r] = []).x0 = r > 0 ? f[r - 1] : u),
              (h.x1 = r < l ? f[r] : a);
          for (r = 0; r < o; ++r)
            u <= (m = c[r]) && m <= a && A[s(f, m, 0, l)].push(t[r]);
          return A;
        }
        return (
          (t.value = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : E(n)), t)
              : i;
          }),
          (t.domain = function(i) {
            return arguments.length
              ? ((n = 'function' == typeof i ? i : E([i[0], i[1]])), t)
              : n;
          }),
          (t.thresholds = function(i) {
            return arguments.length
              ? ((e =
                  'function' == typeof i
                    ? i
                    : Array.isArray(i)
                    ? E(S.call(i))
                    : E(i)),
                t)
              : e;
          }),
          t
        );
      },
      V = function(i, n, e) {
        if ((null == e && (e = l), (t = i.length))) {
          if ((n = +n) <= 0 || t < 2) return +e(i[0], 0, i);
          if (n >= 1) return +e(i[t - 1], t - 1, i);
          var t,
            r = (t - 1) * n,
            m = Math.floor(r),
            o = +e(i[m], m, i);
          return o + (+e(i[m + 1], m + 1, i) - o) * (r - m);
        }
      },
      B = function(i, n, e) {
        return (
          (i = M.call(i, l).sort(t)),
          Math.ceil(
            (e - n) /
              (2 * (V(i, 0.75) - V(i, 0.25)) * Math.pow(i.length, -1 / 3))
          )
        );
      },
      b = function(i, n, e) {
        return Math.ceil((e - n) / (3.5 * A(i) * Math.pow(i.length, -1 / 3)));
      },
      Y = function(i, n) {
        var e,
          t,
          r = i.length,
          m = -1;
        if (null == n) {
          for (; ++m < r; )
            if (null != (e = i[m]) && e >= e)
              for (t = e; ++m < r; ) null != (e = i[m]) && e > t && (t = e);
        } else
          for (; ++m < r; )
            if (null != (e = n(i[m], m, i)) && e >= e)
              for (t = e; ++m < r; )
                null != (e = n(i[m], m, i)) && e > t && (t = e);
        return t;
      },
      F = function(i, n) {
        var e,
          t = i.length,
          r = t,
          m = -1,
          o = 0;
        if (null == n) for (; ++m < t; ) isNaN((e = l(i[m]))) ? --r : (o += e);
        else for (; ++m < t; ) isNaN((e = l(n(i[m], m, i)))) ? --r : (o += e);
        if (r) return o / r;
      },
      P = function(i, n) {
        var e,
          r = i.length,
          m = -1,
          o = [];
        if (null == n) for (; ++m < r; ) isNaN((e = l(i[m]))) || o.push(e);
        else for (; ++m < r; ) isNaN((e = l(n(i[m], m, i)))) || o.push(e);
        return V(o.sort(t), 0.5);
      },
      G = function(i) {
        for (var n, e, t, r = i.length, m = -1, o = 0; ++m < r; )
          o += i[m].length;
        for (e = new Array(o); --r >= 0; )
          for (n = (t = i[r]).length; --n >= 0; ) e[--o] = t[n];
        return e;
      },
      U = function(i, n) {
        var e,
          t,
          r = i.length,
          m = -1;
        if (null == n) {
          for (; ++m < r; )
            if (null != (e = i[m]) && e >= e)
              for (t = e; ++m < r; ) null != (e = i[m]) && t > e && (t = e);
        } else
          for (; ++m < r; )
            if (null != (e = n(i[m], m, i)) && e >= e)
              for (t = e; ++m < r; )
                null != (e = n(i[m], m, i)) && t > e && (t = e);
        return t;
      },
      I = function(i, n) {
        for (var e = n.length, t = new Array(e); e--; ) t[e] = i[n[e]];
        return t;
      },
      H = function(i, n) {
        if ((e = i.length)) {
          var e,
            r,
            m = 0,
            o = 0,
            c = i[o];
          for (null == n && (n = t); ++m < e; )
            (n((r = i[m]), c) < 0 || 0 !== n(c, c)) && ((c = r), (o = m));
          return 0 === n(c, c) ? o : void 0;
        }
      },
      x = function(i, n, e) {
        for (
          var t, r, m = (null == e ? i.length : e) - (n = null == n ? 0 : +n);
          m;

        )
          (r = (Math.random() * m--) | 0),
            (t = i[m + n]),
            (i[m + n] = i[r + n]),
            (i[r + n] = t);
        return i;
      },
      W = function(i, n) {
        var e,
          t = i.length,
          r = -1,
          m = 0;
        if (null == n) for (; ++r < t; ) (e = +i[r]) && (m += e);
        else for (; ++r < t; ) (e = +n(i[r], r, i)) && (m += e);
        return m;
      },
      w = function(i) {
        if (!(r = i.length)) return [];
        for (var n = -1, e = U(i, X), t = new Array(e); ++n < e; )
          for (var r, m = -1, o = (t[n] = new Array(r)); ++m < r; )
            o[m] = i[m][n];
        return t;
      };
    function X(i) {
      return i.length;
    }
    var Q = function() {
        return w(arguments);
      },
      K = Array.prototype.slice,
      k = function(i) {
        return i;
      },
      J = 1,
      z = 2,
      q = 3,
      j = 4,
      Z = 1e-6;
    function $(i) {
      return 'translate(' + (i + 0.5) + ',0)';
    }
    function ii(i) {
      return 'translate(0,' + (i + 0.5) + ')';
    }
    function ni() {
      return !this.__axis;
    }
    function ei(i, n) {
      var e = [],
        t = null,
        r = null,
        m = 6,
        o = 6,
        c = 3,
        s = i === J || i === j ? -1 : 1,
        d = i === j || i === z ? 'x' : 'y',
        u = i === J || i === q ? $ : ii;
      function a(a) {
        var f = null == t ? (n.ticks ? n.ticks.apply(n, e) : n.domain()) : t,
          l = null == r ? (n.tickFormat ? n.tickFormat.apply(n, e) : k) : r,
          h = Math.max(m, 0) + c,
          A = n.range(),
          O = +A[0] + 0.5,
          p = +A[A.length - 1] + 0.5,
          S = (n.bandwidth
            ? function(i) {
                var n = Math.max(0, i.bandwidth() - 1) / 2;
                return (
                  i.round() && (n = Math.round(n)),
                  function(e) {
                    return +i(e) + n;
                  }
                );
              }
            : function(i) {
                return function(n) {
                  return +i(n);
                };
              })(n.copy()),
          M = a.selection ? a.selection() : a,
          E = M.selectAll('.domain').data([null]),
          L = M.selectAll('.tick')
            .data(f, n)
            .order(),
          D = L.exit(),
          N = L.enter()
            .append('g')
            .attr('class', 'tick'),
          v = L.select('line'),
          C = L.select('text');
        (E = E.merge(
          E.enter()
            .insert('path', '.tick')
            .attr('class', 'domain')
            .attr('stroke', 'currentColor')
        )),
          (L = L.merge(N)),
          (v = v.merge(
            N.append('line')
              .attr('stroke', 'currentColor')
              .attr(d + '2', s * m)
          )),
          (C = C.merge(
            N.append('text')
              .attr('fill', 'currentColor')
              .attr(d, s * h)
              .attr('dy', i === J ? '0em' : i === q ? '0.71em' : '0.32em')
          )),
          a !== M &&
            ((E = E.transition(a)),
            (L = L.transition(a)),
            (v = v.transition(a)),
            (C = C.transition(a)),
            (D = D.transition(a)
              .attr('opacity', Z)
              .attr('transform', function(i) {
                return isFinite((i = S(i)))
                  ? u(i)
                  : this.getAttribute('transform');
              })),
            N.attr('opacity', Z).attr('transform', function(i) {
              var n = this.parentNode.__axis;
              return u(n && isFinite((n = n(i))) ? n : S(i));
            })),
          D.remove(),
          E.attr(
            'd',
            i === j || i == z
              ? o
                ? 'M' + s * o + ',' + O + 'H0.5V' + p + 'H' + s * o
                : 'M0.5,' + O + 'V' + p
              : o
              ? 'M' + O + ',' + s * o + 'V0.5H' + p + 'V' + s * o
              : 'M' + O + ',0.5H' + p
          ),
          L.attr('opacity', 1).attr('transform', function(i) {
            return u(S(i));
          }),
          v.attr(d + '2', s * m),
          C.attr(d, s * h).text(l),
          M.filter(ni)
            .attr('fill', 'none')
            .attr('font-size', 10)
            .attr('font-family', 'sans-serif')
            .attr(
              'text-anchor',
              i === z ? 'start' : i === j ? 'end' : 'middle'
            ),
          M.each(function() {
            this.__axis = S;
          });
      }
      return (
        (a.scale = function(i) {
          return arguments.length ? ((n = i), a) : n;
        }),
        (a.ticks = function() {
          return (e = K.call(arguments)), a;
        }),
        (a.tickArguments = function(i) {
          return arguments.length
            ? ((e = null == i ? [] : K.call(i)), a)
            : e.slice();
        }),
        (a.tickValues = function(i) {
          return arguments.length
            ? ((t = null == i ? null : K.call(i)), a)
            : t && t.slice();
        }),
        (a.tickFormat = function(i) {
          return arguments.length ? ((r = i), a) : r;
        }),
        (a.tickSize = function(i) {
          return arguments.length ? ((m = o = +i), a) : m;
        }),
        (a.tickSizeInner = function(i) {
          return arguments.length ? ((m = +i), a) : m;
        }),
        (a.tickSizeOuter = function(i) {
          return arguments.length ? ((o = +i), a) : o;
        }),
        (a.tickPadding = function(i) {
          return arguments.length ? ((c = +i), a) : c;
        }),
        a
      );
    }
    function ti(i) {
      return ei(J, i);
    }
    function ri(i) {
      return ei(z, i);
    }
    function mi(i) {
      return ei(q, i);
    }
    function oi(i) {
      return ei(j, i);
    }
    var ci = {value: function() {}};
    function si() {
      for (var i, n = 0, e = arguments.length, t = {}; n < e; ++n) {
        if (!(i = arguments[n] + '') || i in t)
          throw new Error('illegal type: ' + i);
        t[i] = [];
      }
      return new di(t);
    }
    function di(i) {
      this._ = i;
    }
    function ui(i, n) {
      for (var e, t = 0, r = i.length; t < r; ++t)
        if ((e = i[t]).name === n) return e.value;
    }
    function ai(i, n, e) {
      for (var t = 0, r = i.length; t < r; ++t)
        if (i[t].name === n) {
          (i[t] = ci), (i = i.slice(0, t).concat(i.slice(t + 1)));
          break;
        }
      return null != e && i.push({name: n, value: e}), i;
    }
    di.prototype = si.prototype = {
      constructor: di,
      on: function(i, n) {
        var e,
          t,
          r = this._,
          m =
            ((t = r),
            (i + '')
              .trim()
              .split(/^|\s+/)
              .map(function(i) {
                var n = '',
                  e = i.indexOf('.');
                if (
                  (e >= 0 && ((n = i.slice(e + 1)), (i = i.slice(0, e))),
                  i && !t.hasOwnProperty(i))
                )
                  throw new Error('unknown type: ' + i);
                return {type: i, name: n};
              })),
          o = -1,
          c = m.length;
        if (!(arguments.length < 2)) {
          if (null != n && 'function' != typeof n)
            throw new Error('invalid callback: ' + n);
          for (; ++o < c; )
            if ((e = (i = m[o]).type)) r[e] = ai(r[e], i.name, n);
            else if (null == n) for (e in r) r[e] = ai(r[e], i.name, null);
          return this;
        }
        for (; ++o < c; )
          if ((e = (i = m[o]).type) && (e = ui(r[e], i.name))) return e;
      },
      copy: function() {
        var i = {},
          n = this._;
        for (var e in n) i[e] = n[e].slice();
        return new di(i);
      },
      call: function(i, n) {
        if ((e = arguments.length - 2) > 0)
          for (var e, t, r = new Array(e), m = 0; m < e; ++m)
            r[m] = arguments[m + 2];
        if (!this._.hasOwnProperty(i)) throw new Error('unknown type: ' + i);
        for (m = 0, e = (t = this._[i]).length; m < e; ++m)
          t[m].value.apply(n, r);
      },
      apply: function(i, n, e) {
        if (!this._.hasOwnProperty(i)) throw new Error('unknown type: ' + i);
        for (var t = this._[i], r = 0, m = t.length; r < m; ++r)
          t[r].value.apply(n, e);
      },
    };
    var fi = si,
      li = 'http://www.w3.org/1999/xhtml',
      hi = {
        svg: 'http://www.w3.org/2000/svg',
        xhtml: li,
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xmlns: 'http://www.w3.org/2000/xmlns/',
      },
      Ai = function(i) {
        var n = (i += ''),
          e = n.indexOf(':');
        return (
          e >= 0 && 'xmlns' !== (n = i.slice(0, e)) && (i = i.slice(e + 1)),
          hi.hasOwnProperty(n) ? {space: hi[n], local: i} : i
        );
      };
    var Oi = function(i) {
      var n = Ai(i);
      return (n.local
        ? function(i) {
            return function() {
              return this.ownerDocument.createElementNS(i.space, i.local);
            };
          }
        : function(i) {
            return function() {
              var n = this.ownerDocument,
                e = this.namespaceURI;
              return e === li && n.documentElement.namespaceURI === li
                ? n.createElement(i)
                : n.createElementNS(e, i);
            };
          })(n);
    };
    function pi() {}
    var Si = function(i) {
      return null == i
        ? pi
        : function() {
            return this.querySelector(i);
          };
    };
    function Mi() {
      return [];
    }
    var Ei = function(i) {
        return null == i
          ? Mi
          : function() {
              return this.querySelectorAll(i);
            };
      },
      Li = function(i) {
        return function() {
          return this.matches(i);
        };
      },
      Di = function(i) {
        return new Array(i.length);
      };
    function Ni(i, n) {
      (this.ownerDocument = i.ownerDocument),
        (this.namespaceURI = i.namespaceURI),
        (this._next = null),
        (this._parent = i),
        (this.__data__ = n);
    }
    Ni.prototype = {
      constructor: Ni,
      appendChild: function(i) {
        return this._parent.insertBefore(i, this._next);
      },
      insertBefore: function(i, n) {
        return this._parent.insertBefore(i, n);
      },
      querySelector: function(i) {
        return this._parent.querySelector(i);
      },
      querySelectorAll: function(i) {
        return this._parent.querySelectorAll(i);
      },
    };
    var vi = '$';
    function Ci(i, n, e, t, r, m) {
      for (var o, c = 0, s = n.length, d = m.length; c < d; ++c)
        (o = n[c])
          ? ((o.__data__ = m[c]), (t[c] = o))
          : (e[c] = new Ni(i, m[c]));
      for (; c < s; ++c) (o = n[c]) && (r[c] = o);
    }
    function yi(i, n, e, t, r, m, o) {
      var c,
        s,
        d,
        u = {},
        a = n.length,
        f = m.length,
        l = new Array(a);
      for (c = 0; c < a; ++c)
        (s = n[c]) &&
          ((l[c] = d = vi + o.call(s, s.__data__, c, n)),
          d in u ? (r[c] = s) : (u[d] = s));
      for (c = 0; c < f; ++c)
        (s = u[(d = vi + o.call(i, m[c], c, m))])
          ? ((t[c] = s), (s.__data__ = m[c]), (u[d] = null))
          : (e[c] = new Ni(i, m[c]));
      for (c = 0; c < a; ++c) (s = n[c]) && u[l[c]] === s && (r[c] = s);
    }
    function gi(i, n) {
      return i < n ? -1 : i > n ? 1 : i >= n ? 0 : NaN;
    }
    var Ti = function(i) {
      return (
        (i.ownerDocument && i.ownerDocument.defaultView) ||
        (i.document && i) ||
        i.defaultView
      );
    };
    function Ri(i, n) {
      return (
        i.style.getPropertyValue(n) ||
        Ti(i)
          .getComputedStyle(i, null)
          .getPropertyValue(n)
      );
    }
    function _i(i) {
      return i.trim().split(/^|\s+/);
    }
    function Vi(i) {
      return i.classList || new Bi(i);
    }
    function Bi(i) {
      (this._node = i), (this._names = _i(i.getAttribute('class') || ''));
    }
    function bi(i, n) {
      for (var e = Vi(i), t = -1, r = n.length; ++t < r; ) e.add(n[t]);
    }
    function Yi(i, n) {
      for (var e = Vi(i), t = -1, r = n.length; ++t < r; ) e.remove(n[t]);
    }
    Bi.prototype = {
      add: function(i) {
        this._names.indexOf(i) < 0 &&
          (this._names.push(i),
          this._node.setAttribute('class', this._names.join(' ')));
      },
      remove: function(i) {
        var n = this._names.indexOf(i);
        n >= 0 &&
          (this._names.splice(n, 1),
          this._node.setAttribute('class', this._names.join(' ')));
      },
      contains: function(i) {
        return this._names.indexOf(i) >= 0;
      },
    };
    function Fi() {
      this.textContent = '';
    }
    function Pi() {
      this.innerHTML = '';
    }
    function Gi() {
      this.nextSibling && this.parentNode.appendChild(this);
    }
    function Ui() {
      this.previousSibling &&
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function Ii() {
      return null;
    }
    function Hi() {
      var i = this.parentNode;
      i && i.removeChild(this);
    }
    function xi() {
      return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
    }
    function Wi() {
      return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
    }
    var wi = {},
      Xi = null;
    'undefined' != typeof document &&
      ('onmouseenter' in document.documentElement ||
        (wi = {mouseenter: 'mouseover', mouseleave: 'mouseout'}));
    function Qi(i, n, e) {
      return (
        (i = Ki(i, n, e)),
        function(n) {
          var e = n.relatedTarget;
          (e && (e === this || 8 & e.compareDocumentPosition(this))) ||
            i.call(this, n);
        }
      );
    }
    function Ki(i, n, e) {
      return function(t) {
        var r = Xi;
        Xi = t;
        try {
          i.call(this, this.__data__, n, e);
        } finally {
          Xi = r;
        }
      };
    }
    function ki(i) {
      return function() {
        var n = this.__on;
        if (n) {
          for (var e, t = 0, r = -1, m = n.length; t < m; ++t)
            (e = n[t]),
              (i.type && e.type !== i.type) || e.name !== i.name
                ? (n[++r] = e)
                : this.removeEventListener(e.type, e.listener, e.capture);
          ++r ? (n.length = r) : delete this.__on;
        }
      };
    }
    function Ji(i, n, e) {
      var t = wi.hasOwnProperty(i.type) ? Qi : Ki;
      return function(r, m, o) {
        var c,
          s = this.__on,
          d = t(n, m, o);
        if (s)
          for (var u = 0, a = s.length; u < a; ++u)
            if ((c = s[u]).type === i.type && c.name === i.name)
              return (
                this.removeEventListener(c.type, c.listener, c.capture),
                this.addEventListener(
                  c.type,
                  (c.listener = d),
                  (c.capture = e)
                ),
                void (c.value = n)
              );
        this.addEventListener(i.type, d, e),
          (c = {type: i.type, name: i.name, value: n, listener: d, capture: e}),
          s ? s.push(c) : (this.__on = [c]);
      };
    }
    function zi(i, n, e, t) {
      var r = Xi;
      (i.sourceEvent = Xi), (Xi = i);
      try {
        return n.apply(e, t);
      } finally {
        Xi = r;
      }
    }
    function qi(i, n, e) {
      var t = Ti(i),
        r = t.CustomEvent;
      'function' == typeof r
        ? (r = new r(n, e))
        : ((r = t.document.createEvent('Event')),
          e
            ? (r.initEvent(n, e.bubbles, e.cancelable), (r.detail = e.detail))
            : r.initEvent(n, !1, !1)),
        i.dispatchEvent(r);
    }
    var ji = [null];
    function Zi(i, n) {
      (this._groups = i), (this._parents = n);
    }
    function $i() {
      return new Zi([[document.documentElement]], ji);
    }
    Zi.prototype = $i.prototype = {
      constructor: Zi,
      select: function(i) {
        'function' != typeof i && (i = Si(i));
        for (
          var n = this._groups, e = n.length, t = new Array(e), r = 0;
          r < e;
          ++r
        )
          for (
            var m, o, c = n[r], s = c.length, d = (t[r] = new Array(s)), u = 0;
            u < s;
            ++u
          )
            (m = c[u]) &&
              (o = i.call(m, m.__data__, u, c)) &&
              ('__data__' in m && (o.__data__ = m.__data__), (d[u] = o));
        return new Zi(t, this._parents);
      },
      selectAll: function(i) {
        'function' != typeof i && (i = Ei(i));
        for (
          var n = this._groups, e = n.length, t = [], r = [], m = 0;
          m < e;
          ++m
        )
          for (var o, c = n[m], s = c.length, d = 0; d < s; ++d)
            (o = c[d]) && (t.push(i.call(o, o.__data__, d, c)), r.push(o));
        return new Zi(t, r);
      },
      filter: function(i) {
        'function' != typeof i && (i = Li(i));
        for (
          var n = this._groups, e = n.length, t = new Array(e), r = 0;
          r < e;
          ++r
        )
          for (
            var m, o = n[r], c = o.length, s = (t[r] = []), d = 0;
            d < c;
            ++d
          )
            (m = o[d]) && i.call(m, m.__data__, d, o) && s.push(m);
        return new Zi(t, this._parents);
      },
      data: function(i, n) {
        if (!i)
          return (
            (h = new Array(this.size())),
            (u = -1),
            this.each(function(i) {
              h[++u] = i;
            }),
            h
          );
        var e,
          t = n ? yi : Ci,
          r = this._parents,
          m = this._groups;
        'function' != typeof i &&
          ((e = i),
          (i = function() {
            return e;
          }));
        for (
          var o = m.length,
            c = new Array(o),
            s = new Array(o),
            d = new Array(o),
            u = 0;
          u < o;
          ++u
        ) {
          var a = r[u],
            f = m[u],
            l = f.length,
            h = i.call(a, a && a.__data__, u, r),
            A = h.length,
            O = (s[u] = new Array(A)),
            p = (c[u] = new Array(A));
          t(a, f, O, p, (d[u] = new Array(l)), h, n);
          for (var S, M, E = 0, L = 0; E < A; ++E)
            if ((S = O[E])) {
              for (E >= L && (L = E + 1); !(M = p[L]) && ++L < A; );
              S._next = M || null;
            }
        }
        return ((c = new Zi(c, r))._enter = s), (c._exit = d), c;
      },
      enter: function() {
        return new Zi(this._enter || this._groups.map(Di), this._parents);
      },
      exit: function() {
        return new Zi(this._exit || this._groups.map(Di), this._parents);
      },
      join: function(i, n, e) {
        var t = this.enter(),
          r = this,
          m = this.exit();
        return (
          (t = 'function' == typeof i ? i(t) : t.append(i + '')),
          null != n && (r = n(r)),
          null == e ? m.remove() : e(m),
          t && r ? t.merge(r).order() : r
        );
      },
      merge: function(i) {
        for (
          var n = this._groups,
            e = i._groups,
            t = n.length,
            r = e.length,
            m = Math.min(t, r),
            o = new Array(t),
            c = 0;
          c < m;
          ++c
        )
          for (
            var s,
              d = n[c],
              u = e[c],
              a = d.length,
              f = (o[c] = new Array(a)),
              l = 0;
            l < a;
            ++l
          )
            (s = d[l] || u[l]) && (f[l] = s);
        for (; c < t; ++c) o[c] = n[c];
        return new Zi(o, this._parents);
      },
      order: function() {
        for (var i = this._groups, n = -1, e = i.length; ++n < e; )
          for (var t, r = i[n], m = r.length - 1, o = r[m]; --m >= 0; )
            (t = r[m]) &&
              (o &&
                4 ^ t.compareDocumentPosition(o) &&
                o.parentNode.insertBefore(t, o),
              (o = t));
        return this;
      },
      sort: function(i) {
        function n(n, e) {
          return n && e ? i(n.__data__, e.__data__) : !n - !e;
        }
        i || (i = gi);
        for (
          var e = this._groups, t = e.length, r = new Array(t), m = 0;
          m < t;
          ++m
        ) {
          for (
            var o, c = e[m], s = c.length, d = (r[m] = new Array(s)), u = 0;
            u < s;
            ++u
          )
            (o = c[u]) && (d[u] = o);
          d.sort(n);
        }
        return new Zi(r, this._parents).order();
      },
      call: function() {
        var i = arguments[0];
        return (arguments[0] = this), i.apply(null, arguments), this;
      },
      nodes: function() {
        var i = new Array(this.size()),
          n = -1;
        return (
          this.each(function() {
            i[++n] = this;
          }),
          i
        );
      },
      node: function() {
        for (var i = this._groups, n = 0, e = i.length; n < e; ++n)
          for (var t = i[n], r = 0, m = t.length; r < m; ++r) {
            var o = t[r];
            if (o) return o;
          }
        return null;
      },
      size: function() {
        var i = 0;
        return (
          this.each(function() {
            ++i;
          }),
          i
        );
      },
      empty: function() {
        return !this.node();
      },
      each: function(i) {
        for (var n = this._groups, e = 0, t = n.length; e < t; ++e)
          for (var r, m = n[e], o = 0, c = m.length; o < c; ++o)
            (r = m[o]) && i.call(r, r.__data__, o, m);
        return this;
      },
      attr: function(i, n) {
        var e = Ai(i);
        if (arguments.length < 2) {
          var t = this.node();
          return e.local
            ? t.getAttributeNS(e.space, e.local)
            : t.getAttribute(e);
        }
        return this.each(
          (null == n
            ? e.local
              ? function(i) {
                  return function() {
                    this.removeAttributeNS(i.space, i.local);
                  };
                }
              : function(i) {
                  return function() {
                    this.removeAttribute(i);
                  };
                }
            : 'function' == typeof n
            ? e.local
              ? function(i, n) {
                  return function() {
                    var e = n.apply(this, arguments);
                    null == e
                      ? this.removeAttributeNS(i.space, i.local)
                      : this.setAttributeNS(i.space, i.local, e);
                  };
                }
              : function(i, n) {
                  return function() {
                    var e = n.apply(this, arguments);
                    null == e
                      ? this.removeAttribute(i)
                      : this.setAttribute(i, e);
                  };
                }
            : e.local
            ? function(i, n) {
                return function() {
                  this.setAttributeNS(i.space, i.local, n);
                };
              }
            : function(i, n) {
                return function() {
                  this.setAttribute(i, n);
                };
              })(e, n)
        );
      },
      style: function(i, n, e) {
        return arguments.length > 1
          ? this.each(
              (null == n
                ? function(i) {
                    return function() {
                      this.style.removeProperty(i);
                    };
                  }
                : 'function' == typeof n
                ? function(i, n, e) {
                    return function() {
                      var t = n.apply(this, arguments);
                      null == t
                        ? this.style.removeProperty(i)
                        : this.style.setProperty(i, t, e);
                    };
                  }
                : function(i, n, e) {
                    return function() {
                      this.style.setProperty(i, n, e);
                    };
                  })(i, n, null == e ? '' : e)
            )
          : Ri(this.node(), i);
      },
      property: function(i, n) {
        return arguments.length > 1
          ? this.each(
              (null == n
                ? function(i) {
                    return function() {
                      delete this[i];
                    };
                  }
                : 'function' == typeof n
                ? function(i, n) {
                    return function() {
                      var e = n.apply(this, arguments);
                      null == e ? delete this[i] : (this[i] = e);
                    };
                  }
                : function(i, n) {
                    return function() {
                      this[i] = n;
                    };
                  })(i, n)
            )
          : this.node()[i];
      },
      classed: function(i, n) {
        var e = _i(i + '');
        if (arguments.length < 2) {
          for (var t = Vi(this.node()), r = -1, m = e.length; ++r < m; )
            if (!t.contains(e[r])) return !1;
          return !0;
        }
        return this.each(
          ('function' == typeof n
            ? function(i, n) {
                return function() {
                  (n.apply(this, arguments) ? bi : Yi)(this, i);
                };
              }
            : n
            ? function(i) {
                return function() {
                  bi(this, i);
                };
              }
            : function(i) {
                return function() {
                  Yi(this, i);
                };
              })(e, n)
        );
      },
      text: function(i) {
        return arguments.length
          ? this.each(
              null == i
                ? Fi
                : ('function' == typeof i
                    ? function(i) {
                        return function() {
                          var n = i.apply(this, arguments);
                          this.textContent = null == n ? '' : n;
                        };
                      }
                    : function(i) {
                        return function() {
                          this.textContent = i;
                        };
                      })(i)
            )
          : this.node().textContent;
      },
      html: function(i) {
        return arguments.length
          ? this.each(
              null == i
                ? Pi
                : ('function' == typeof i
                    ? function(i) {
                        return function() {
                          var n = i.apply(this, arguments);
                          this.innerHTML = null == n ? '' : n;
                        };
                      }
                    : function(i) {
                        return function() {
                          this.innerHTML = i;
                        };
                      })(i)
            )
          : this.node().innerHTML;
      },
      raise: function() {
        return this.each(Gi);
      },
      lower: function() {
        return this.each(Ui);
      },
      append: function(i) {
        var n = 'function' == typeof i ? i : Oi(i);
        return this.select(function() {
          return this.appendChild(n.apply(this, arguments));
        });
      },
      insert: function(i, n) {
        var e = 'function' == typeof i ? i : Oi(i),
          t = null == n ? Ii : 'function' == typeof n ? n : Si(n);
        return this.select(function() {
          return this.insertBefore(
            e.apply(this, arguments),
            t.apply(this, arguments) || null
          );
        });
      },
      remove: function() {
        return this.each(Hi);
      },
      clone: function(i) {
        return this.select(i ? Wi : xi);
      },
      datum: function(i) {
        return arguments.length
          ? this.property('__data__', i)
          : this.node().__data__;
      },
      on: function(i, n, e) {
        var t,
          r,
          m = (function(i) {
            return i
              .trim()
              .split(/^|\s+/)
              .map(function(i) {
                var n = '',
                  e = i.indexOf('.');
                return (
                  e >= 0 && ((n = i.slice(e + 1)), (i = i.slice(0, e))),
                  {type: i, name: n}
                );
              });
          })(i + ''),
          o = m.length;
        if (!(arguments.length < 2)) {
          for (c = n ? Ji : ki, null == e && (e = !1), t = 0; t < o; ++t)
            this.each(c(m[t], n, e));
          return this;
        }
        var c = this.node().__on;
        if (c)
          for (var s, d = 0, u = c.length; d < u; ++d)
            for (t = 0, s = c[d]; t < o; ++t)
              if ((r = m[t]).type === s.type && r.name === s.name)
                return s.value;
      },
      dispatch: function(i, n) {
        return this.each(
          ('function' == typeof n
            ? function(i, n) {
                return function() {
                  return qi(this, i, n.apply(this, arguments));
                };
              }
            : function(i, n) {
                return function() {
                  return qi(this, i, n);
                };
              })(i, n)
        );
      },
    };
    var nn = $i,
      en = function(i) {
        return 'string' == typeof i
          ? new Zi([[document.querySelector(i)]], [document.documentElement])
          : new Zi([[i]], ji);
      },
      tn = function(i) {
        return en(Oi(i).call(document.documentElement));
      },
      rn = 0;
    function mn() {
      return new on();
    }
    function on() {
      this._ = '@' + (++rn).toString(36);
    }
    on.prototype = mn.prototype = {
      constructor: on,
      get: function(i) {
        for (var n = this._; !(n in i); ) if (!(i = i.parentNode)) return;
        return i[n];
      },
      set: function(i, n) {
        return (i[this._] = n);
      },
      remove: function(i) {
        return this._ in i && delete i[this._];
      },
      toString: function() {
        return this._;
      },
    };
    var cn = function() {
        for (var i, n = Xi; (i = n.sourceEvent); ) n = i;
        return n;
      },
      sn = function(i, n) {
        var e = i.ownerSVGElement || i;
        if (e.createSVGPoint) {
          var t = e.createSVGPoint();
          return (
            (t.x = n.clientX),
            (t.y = n.clientY),
            [(t = t.matrixTransform(i.getScreenCTM().inverse())).x, t.y]
          );
        }
        var r = i.getBoundingClientRect();
        return [
          n.clientX - r.left - i.clientLeft,
          n.clientY - r.top - i.clientTop,
        ];
      },
      dn = function(i) {
        var n = cn();
        return n.changedTouches && (n = n.changedTouches[0]), sn(i, n);
      },
      un = function(i) {
        return 'string' == typeof i
          ? new Zi([document.querySelectorAll(i)], [document.documentElement])
          : new Zi([null == i ? [] : i], ji);
      },
      an = function(i, n, e) {
        arguments.length < 3 && ((e = n), (n = cn().changedTouches));
        for (var t, r = 0, m = n ? n.length : 0; r < m; ++r)
          if ((t = n[r]).identifier === e) return sn(i, t);
        return null;
      },
      fn = function(i, n) {
        null == n && (n = cn().touches);
        for (var e = 0, t = n ? n.length : 0, r = new Array(t); e < t; ++e)
          r[e] = sn(i, n[e]);
        return r;
      };
    function ln() {
      Xi.stopImmediatePropagation();
    }
    var hn = function() {
        Xi.preventDefault(), Xi.stopImmediatePropagation();
      },
      An = function(i) {
        var n = i.document.documentElement,
          e = en(i).on('dragstart.drag', hn, !0);
        'onselectstart' in n
          ? e.on('selectstart.drag', hn, !0)
          : ((n.__noselect = n.style.MozUserSelect),
            (n.style.MozUserSelect = 'none'));
      };
    function On(i, n) {
      var e = i.document.documentElement,
        t = en(i).on('dragstart.drag', null);
      n &&
        (t.on('click.drag', hn, !0),
        setTimeout(function() {
          t.on('click.drag', null);
        }, 0)),
        'onselectstart' in e
          ? t.on('selectstart.drag', null)
          : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect);
    }
    var pn = function(i) {
      return function() {
        return i;
      };
    };
    function Sn(i, n, e, t, r, m, o, c, s, d) {
      (this.target = i),
        (this.type = n),
        (this.subject = e),
        (this.identifier = t),
        (this.active = r),
        (this.x = m),
        (this.y = o),
        (this.dx = c),
        (this.dy = s),
        (this._ = d);
    }
    function Mn() {
      return !Xi.button;
    }
    function En() {
      return this.parentNode;
    }
    function Ln(i) {
      return null == i ? {x: Xi.x, y: Xi.y} : i;
    }
    function Dn() {
      return 'ontouchstart' in this;
    }
    Sn.prototype.on = function() {
      var i = this._.on.apply(this._, arguments);
      return i === this._ ? this : i;
    };
    var Nn,
      vn,
      Cn = function() {
        var i,
          n,
          e,
          t,
          r = Mn,
          m = En,
          o = Ln,
          c = Dn,
          s = {},
          d = fi('start', 'drag', 'end'),
          u = 0,
          a = 0;
        function f(i) {
          i.on('mousedown.drag', l)
            .filter(c)
            .on('touchstart.drag', O)
            .on('touchmove.drag', p)
            .on('touchend.drag touchcancel.drag', S)
            .style('touch-action', 'none')
            .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
        }
        function l() {
          if (!t && r.apply(this, arguments)) {
            var o = M('mouse', m.apply(this, arguments), dn, this, arguments);
            o &&
              (en(Xi.view)
                .on('mousemove.drag', h, !0)
                .on('mouseup.drag', A, !0),
              An(Xi.view),
              ln(),
              (e = !1),
              (i = Xi.clientX),
              (n = Xi.clientY),
              o('start'));
          }
        }
        function h() {
          if ((hn(), !e)) {
            var t = Xi.clientX - i,
              r = Xi.clientY - n;
            e = t * t + r * r > a;
          }
          s.mouse('drag');
        }
        function A() {
          en(Xi.view).on('mousemove.drag mouseup.drag', null),
            On(Xi.view, e),
            hn(),
            s.mouse('end');
        }
        function O() {
          if (r.apply(this, arguments)) {
            var i,
              n,
              e = Xi.changedTouches,
              t = m.apply(this, arguments),
              o = e.length;
            for (i = 0; i < o; ++i)
              (n = M(e[i].identifier, t, an, this, arguments)) &&
                (ln(), n('start'));
          }
        }
        function p() {
          var i,
            n,
            e = Xi.changedTouches,
            t = e.length;
          for (i = 0; i < t; ++i) (n = s[e[i].identifier]) && (hn(), n('drag'));
        }
        function S() {
          var i,
            n,
            e = Xi.changedTouches,
            r = e.length;
          for (
            t && clearTimeout(t),
              t = setTimeout(function() {
                t = null;
              }, 500),
              i = 0;
            i < r;
            ++i
          )
            (n = s[e[i].identifier]) && (ln(), n('end'));
        }
        function M(i, n, e, t, r) {
          var m,
            c,
            a,
            l = e(n, i),
            h = d.copy();
          if (
            zi(
              new Sn(f, 'beforestart', m, i, u, l[0], l[1], 0, 0, h),
              function() {
                return (
                  null != (Xi.subject = m = o.apply(t, r)) &&
                  ((c = m.x - l[0] || 0), (a = m.y - l[1] || 0), !0)
                );
              }
            )
          )
            return function o(d) {
              var A,
                O = l;
              switch (d) {
                case 'start':
                  (s[i] = o), (A = u++);
                  break;
                case 'end':
                  delete s[i], --u;
                case 'drag':
                  (l = e(n, i)), (A = u);
              }
              zi(
                new Sn(
                  f,
                  d,
                  m,
                  i,
                  A,
                  l[0] + c,
                  l[1] + a,
                  l[0] - O[0],
                  l[1] - O[1],
                  h
                ),
                h.apply,
                h,
                [d, t, r]
              );
            };
        }
        return (
          (f.filter = function(i) {
            return arguments.length
              ? ((r = 'function' == typeof i ? i : pn(!!i)), f)
              : r;
          }),
          (f.container = function(i) {
            return arguments.length
              ? ((m = 'function' == typeof i ? i : pn(i)), f)
              : m;
          }),
          (f.subject = function(i) {
            return arguments.length
              ? ((o = 'function' == typeof i ? i : pn(i)), f)
              : o;
          }),
          (f.touchable = function(i) {
            return arguments.length
              ? ((c = 'function' == typeof i ? i : pn(!!i)), f)
              : c;
          }),
          (f.on = function() {
            var i = d.on.apply(d, arguments);
            return i === d ? f : i;
          }),
          (f.clickDistance = function(i) {
            return arguments.length ? ((a = (i = +i) * i), f) : Math.sqrt(a);
          }),
          f
        );
      },
      yn = e(1),
      gn = 0,
      Tn = 0,
      Rn = 0,
      _n = 1e3,
      Vn = 0,
      Bn = 0,
      bn = 0,
      Yn =
        'object' == typeof performance && performance.now ? performance : Date,
      Fn =
        'object' == typeof window && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function(i) {
              setTimeout(i, 17);
            };
    function Pn() {
      return Bn || (Fn(Gn), (Bn = Yn.now() + bn));
    }
    function Gn() {
      Bn = 0;
    }
    function Un() {
      this._call = this._time = this._next = null;
    }
    function In(i, n, e) {
      var t = new Un();
      return t.restart(i, n, e), t;
    }
    function Hn() {
      Pn(), ++gn;
      for (var i, n = Nn; n; )
        (i = Bn - n._time) >= 0 && n._call.call(null, i), (n = n._next);
      --gn;
    }
    function xn() {
      (Bn = (Vn = Yn.now()) + bn), (gn = Tn = 0);
      try {
        Hn();
      } finally {
        (gn = 0),
          (function() {
            var i,
              n,
              e = Nn,
              t = 1 / 0;
            for (; e; )
              e._call
                ? (t > e._time && (t = e._time), (i = e), (e = e._next))
                : ((n = e._next),
                  (e._next = null),
                  (e = i ? (i._next = n) : (Nn = n)));
            (vn = i), wn(t);
          })(),
          (Bn = 0);
      }
    }
    function Wn() {
      var i = Yn.now(),
        n = i - Vn;
      n > _n && ((bn -= n), (Vn = i));
    }
    function wn(i) {
      gn ||
        (Tn && (Tn = clearTimeout(Tn)),
        i - Bn > 24
          ? (i < 1 / 0 && (Tn = setTimeout(xn, i - Yn.now() - bn)),
            Rn && (Rn = clearInterval(Rn)))
          : (Rn || ((Vn = Yn.now()), (Rn = setInterval(Wn, _n))),
            (gn = 1),
            Fn(xn)));
    }
    Un.prototype = In.prototype = {
      constructor: Un,
      restart: function(i, n, e) {
        if ('function' != typeof i)
          throw new TypeError('callback is not a function');
        (e = (null == e ? Pn() : +e) + (null == n ? 0 : +n)),
          this._next ||
            vn === this ||
            (vn ? (vn._next = this) : (Nn = this), (vn = this)),
          (this._call = i),
          (this._time = e),
          wn();
      },
      stop: function() {
        this._call && ((this._call = null), (this._time = 1 / 0), wn());
      },
    };
    var Xn = function(i, n, e) {
        var t = new Un();
        return (
          (n = null == n ? 0 : +n),
          t.restart(
            function(e) {
              t.stop(), i(e + n);
            },
            n,
            e
          ),
          t
        );
      },
      Qn = function(i, n, e) {
        var t = new Un(),
          r = n;
        return null == n
          ? (t.restart(i, n, e), t)
          : ((n = +n),
            (e = null == e ? Pn() : +e),
            t.restart(
              function m(o) {
                (o += r), t.restart(m, (r += n), e), i(o);
              },
              n,
              e
            ),
            t);
      },
      Kn = fi('start', 'end', 'cancel', 'interrupt'),
      kn = [],
      Jn = 0,
      zn = 1,
      qn = 2,
      jn = 3,
      Zn = 4,
      $n = 5,
      ie = 6,
      ne = function(i, n, e, t, r, m) {
        var o = i.__transition;
        if (o) {
          if (e in o) return;
        } else i.__transition = {};
        !(function(i, n, e) {
          var t,
            r = i.__transition;
          function m(s) {
            var d, u, a, f;
            if (e.state !== zn) return c();
            for (d in r)
              if ((f = r[d]).name === e.name) {
                if (f.state === jn) return Xn(m);
                f.state === Zn
                  ? ((f.state = ie),
                    f.timer.stop(),
                    f.on.call('interrupt', i, i.__data__, f.index, f.group),
                    delete r[d])
                  : +d < n &&
                    ((f.state = ie),
                    f.timer.stop(),
                    f.on.call('cancel', i, i.__data__, f.index, f.group),
                    delete r[d]);
              }
            if (
              (Xn(function() {
                e.state === jn &&
                  ((e.state = Zn), e.timer.restart(o, e.delay, e.time), o(s));
              }),
              (e.state = qn),
              e.on.call('start', i, i.__data__, e.index, e.group),
              e.state === qn)
            ) {
              for (
                e.state = jn,
                  t = new Array((a = e.tween.length)),
                  d = 0,
                  u = -1;
                d < a;
                ++d
              )
                (f = e.tween[d].value.call(i, i.__data__, e.index, e.group)) &&
                  (t[++u] = f);
              t.length = u + 1;
            }
          }
          function o(n) {
            for (
              var r =
                  n < e.duration
                    ? e.ease.call(null, n / e.duration)
                    : (e.timer.restart(c), (e.state = $n), 1),
                m = -1,
                o = t.length;
              ++m < o;

            )
              t[m].call(i, r);
            e.state === $n &&
              (e.on.call('end', i, i.__data__, e.index, e.group), c());
          }
          function c() {
            for (var t in ((e.state = ie), e.timer.stop(), delete r[n], r))
              return;
            delete i.__transition;
          }
          (r[n] = e),
            (e.timer = In(
              function(i) {
                (e.state = zn),
                  e.timer.restart(m, e.delay, e.time),
                  e.delay <= i && m(i - e.delay);
              },
              0,
              e.time
            ));
        })(i, e, {
          name: n,
          index: t,
          group: r,
          on: Kn,
          tween: kn,
          time: m.time,
          delay: m.delay,
          duration: m.duration,
          ease: m.ease,
          timer: null,
          state: Jn,
        });
      };
    function ee(i, n) {
      var e = re(i, n);
      if (e.state > Jn) throw new Error('too late; already scheduled');
      return e;
    }
    function te(i, n) {
      var e = re(i, n);
      if (e.state > jn) throw new Error('too late; already running');
      return e;
    }
    function re(i, n) {
      var e = i.__transition;
      if (!e || !(e = e[n])) throw new Error('transition not found');
      return e;
    }
    var me = function(i, n) {
      var e,
        t,
        r,
        m = i.__transition,
        o = !0;
      if (m) {
        for (r in ((n = null == n ? null : n + ''), m))
          (e = m[r]).name === n
            ? ((t = e.state > qn && e.state < $n),
              (e.state = ie),
              e.timer.stop(),
              e.on.call(
                t ? 'interrupt' : 'cancel',
                i,
                i.__data__,
                e.index,
                e.group
              ),
              delete m[r])
            : (o = !1);
        o && delete i.__transition;
      }
    };
    function oe(i, n, e) {
      var t = i._id;
      return (
        i.each(function() {
          var i = te(this, t);
          (i.value || (i.value = {}))[n] = e.apply(this, arguments);
        }),
        function(i) {
          return re(i, t).value[n];
        }
      );
    }
    var ce = e(0),
      se = function(i, n) {
        var e;
        return ('number' == typeof n
          ? yn.o
          : n instanceof ce.a
          ? yn.q
          : (e = Object(ce.a)(n))
          ? ((n = e), yn.q)
          : yn.u)(i, n);
      };
    var de = nn.prototype.constructor;
    function ue(i) {
      return function() {
        this.style.removeProperty(i);
      };
    }
    var ae = 0;
    function fe(i, n, e, t) {
      (this._groups = i), (this._parents = n), (this._name = e), (this._id = t);
    }
    function le(i) {
      return nn().transition(i);
    }
    function he() {
      return ++ae;
    }
    var Ae = nn.prototype;
    function Oe(i) {
      return +i;
    }
    function pe(i) {
      return i * i;
    }
    function Se(i) {
      return i * (2 - i);
    }
    function Me(i) {
      return ((i *= 2) <= 1 ? i * i : --i * (2 - i) + 1) / 2;
    }
    function Ee(i) {
      return i * i * i;
    }
    function Le(i) {
      return --i * i * i + 1;
    }
    function De(i) {
      return ((i *= 2) <= 1 ? i * i * i : (i -= 2) * i * i + 2) / 2;
    }
    fe.prototype = le.prototype = {
      constructor: fe,
      select: function(i) {
        var n = this._name,
          e = this._id;
        'function' != typeof i && (i = Si(i));
        for (
          var t = this._groups, r = t.length, m = new Array(r), o = 0;
          o < r;
          ++o
        )
          for (
            var c, s, d = t[o], u = d.length, a = (m[o] = new Array(u)), f = 0;
            f < u;
            ++f
          )
            (c = d[f]) &&
              (s = i.call(c, c.__data__, f, d)) &&
              ('__data__' in c && (s.__data__ = c.__data__),
              (a[f] = s),
              ne(a[f], n, e, f, a, re(c, e)));
        return new fe(m, this._parents, n, e);
      },
      selectAll: function(i) {
        var n = this._name,
          e = this._id;
        'function' != typeof i && (i = Ei(i));
        for (
          var t = this._groups, r = t.length, m = [], o = [], c = 0;
          c < r;
          ++c
        )
          for (var s, d = t[c], u = d.length, a = 0; a < u; ++a)
            if ((s = d[a])) {
              for (
                var f,
                  l = i.call(s, s.__data__, a, d),
                  h = re(s, e),
                  A = 0,
                  O = l.length;
                A < O;
                ++A
              )
                (f = l[A]) && ne(f, n, e, A, l, h);
              m.push(l), o.push(s);
            }
        return new fe(m, o, n, e);
      },
      filter: function(i) {
        'function' != typeof i && (i = Li(i));
        for (
          var n = this._groups, e = n.length, t = new Array(e), r = 0;
          r < e;
          ++r
        )
          for (
            var m, o = n[r], c = o.length, s = (t[r] = []), d = 0;
            d < c;
            ++d
          )
            (m = o[d]) && i.call(m, m.__data__, d, o) && s.push(m);
        return new fe(t, this._parents, this._name, this._id);
      },
      merge: function(i) {
        if (i._id !== this._id) throw new Error();
        for (
          var n = this._groups,
            e = i._groups,
            t = n.length,
            r = e.length,
            m = Math.min(t, r),
            o = new Array(t),
            c = 0;
          c < m;
          ++c
        )
          for (
            var s,
              d = n[c],
              u = e[c],
              a = d.length,
              f = (o[c] = new Array(a)),
              l = 0;
            l < a;
            ++l
          )
            (s = d[l] || u[l]) && (f[l] = s);
        for (; c < t; ++c) o[c] = n[c];
        return new fe(o, this._parents, this._name, this._id);
      },
      selection: function() {
        return new de(this._groups, this._parents);
      },
      transition: function() {
        for (
          var i = this._name,
            n = this._id,
            e = he(),
            t = this._groups,
            r = t.length,
            m = 0;
          m < r;
          ++m
        )
          for (var o, c = t[m], s = c.length, d = 0; d < s; ++d)
            if ((o = c[d])) {
              var u = re(o, n);
              ne(o, i, e, d, c, {
                time: u.time + u.delay + u.duration,
                delay: 0,
                duration: u.duration,
                ease: u.ease,
              });
            }
        return new fe(t, this._parents, i, e);
      },
      call: Ae.call,
      nodes: Ae.nodes,
      node: Ae.node,
      size: Ae.size,
      empty: Ae.empty,
      each: Ae.each,
      on: function(i, n) {
        var e = this._id;
        return arguments.length < 2
          ? re(this.node(), e).on.on(i)
          : this.each(
              (function(i, n, e) {
                var t,
                  r,
                  m = (function(i) {
                    return (i + '')
                      .trim()
                      .split(/^|\s+/)
                      .every(function(i) {
                        var n = i.indexOf('.');
                        return (
                          n >= 0 && (i = i.slice(0, n)), !i || 'start' === i
                        );
                      });
                  })(n)
                    ? ee
                    : te;
                return function() {
                  var o = m(this, i),
                    c = o.on;
                  c !== t && (r = (t = c).copy()).on(n, e), (o.on = r);
                };
              })(e, i, n)
            );
      },
      attr: function(i, n) {
        var e = Ai(i),
          t = 'transform' === e ? yn.w : se;
        return this.attrTween(
          i,
          'function' == typeof n
            ? (e.local
                ? function(i, n, e) {
                    var t, r, m;
                    return function() {
                      var o,
                        c,
                        s = e(this);
                      if (null != s)
                        return (o = this.getAttributeNS(i.space, i.local)) ===
                          (c = s + '')
                          ? null
                          : o === t && c === r
                          ? m
                          : ((r = c), (m = n((t = o), s)));
                      this.removeAttributeNS(i.space, i.local);
                    };
                  }
                : function(i, n, e) {
                    var t, r, m;
                    return function() {
                      var o,
                        c,
                        s = e(this);
                      if (null != s)
                        return (o = this.getAttribute(i)) === (c = s + '')
                          ? null
                          : o === t && c === r
                          ? m
                          : ((r = c), (m = n((t = o), s)));
                      this.removeAttribute(i);
                    };
                  })(e, t, oe(this, 'attr.' + i, n))
            : null == n
            ? (e.local
                ? function(i) {
                    return function() {
                      this.removeAttributeNS(i.space, i.local);
                    };
                  }
                : function(i) {
                    return function() {
                      this.removeAttribute(i);
                    };
                  })(e)
            : (e.local
                ? function(i, n, e) {
                    var t,
                      r,
                      m = e + '';
                    return function() {
                      var o = this.getAttributeNS(i.space, i.local);
                      return o === m ? null : o === t ? r : (r = n((t = o), e));
                    };
                  }
                : function(i, n, e) {
                    var t,
                      r,
                      m = e + '';
                    return function() {
                      var o = this.getAttribute(i);
                      return o === m ? null : o === t ? r : (r = n((t = o), e));
                    };
                  })(e, t, n)
        );
      },
      attrTween: function(i, n) {
        var e = 'attr.' + i;
        if (arguments.length < 2) return (e = this.tween(e)) && e._value;
        if (null == n) return this.tween(e, null);
        if ('function' != typeof n) throw new Error();
        var t = Ai(i);
        return this.tween(
          e,
          (t.local
            ? function(i, n) {
                var e, t;
                function r() {
                  var r = n.apply(this, arguments);
                  return (
                    r !== t &&
                      (e =
                        (t = r) &&
                        (function(i, n) {
                          return function(e) {
                            this.setAttributeNS(i.space, i.local, n(e));
                          };
                        })(i, r)),
                    e
                  );
                }
                return (r._value = n), r;
              }
            : function(i, n) {
                var e, t;
                function r() {
                  var r = n.apply(this, arguments);
                  return (
                    r !== t &&
                      (e =
                        (t = r) &&
                        (function(i, n) {
                          return function(e) {
                            this.setAttribute(i, n(e));
                          };
                        })(i, r)),
                    e
                  );
                }
                return (r._value = n), r;
              })(t, n)
        );
      },
      style: function(i, n, e) {
        var t = 'transform' == (i += '') ? yn.v : se;
        return null == n
          ? this.styleTween(
              i,
              (function(i, n) {
                var e, t, r;
                return function() {
                  var m = Ri(this, i),
                    o = (this.style.removeProperty(i), Ri(this, i));
                  return m === o
                    ? null
                    : m === e && o === t
                    ? r
                    : (r = n((e = m), (t = o)));
                };
              })(i, t)
            ).on('end.style.' + i, ue(i))
          : 'function' == typeof n
          ? this.styleTween(
              i,
              (function(i, n, e) {
                var t, r, m;
                return function() {
                  var o = Ri(this, i),
                    c = e(this),
                    s = c + '';
                  return (
                    null == c &&
                      (this.style.removeProperty(i), (s = c = Ri(this, i))),
                    o === s
                      ? null
                      : o === t && s === r
                      ? m
                      : ((r = s), (m = n((t = o), c)))
                  );
                };
              })(i, t, oe(this, 'style.' + i, n))
            ).each(
              (function(i, n) {
                var e,
                  t,
                  r,
                  m,
                  o = 'style.' + n,
                  c = 'end.' + o;
                return function() {
                  var s = te(this, i),
                    d = s.on,
                    u = null == s.value[o] ? m || (m = ue(n)) : void 0;
                  (d === e && r === u) || (t = (e = d).copy()).on(c, (r = u)),
                    (s.on = t);
                };
              })(this._id, i)
            )
          : this.styleTween(
              i,
              (function(i, n, e) {
                var t,
                  r,
                  m = e + '';
                return function() {
                  var o = Ri(this, i);
                  return o === m ? null : o === t ? r : (r = n((t = o), e));
                };
              })(i, t, n),
              e
            ).on('end.style.' + i, null);
      },
      styleTween: function(i, n, e) {
        var t = 'style.' + (i += '');
        if (arguments.length < 2) return (t = this.tween(t)) && t._value;
        if (null == n) return this.tween(t, null);
        if ('function' != typeof n) throw new Error();
        return this.tween(
          t,
          (function(i, n, e) {
            var t, r;
            function m() {
              var m = n.apply(this, arguments);
              return (
                m !== r &&
                  (t =
                    (r = m) &&
                    (function(i, n, e) {
                      return function(t) {
                        this.style.setProperty(i, n(t), e);
                      };
                    })(i, m, e)),
                t
              );
            }
            return (m._value = n), m;
          })(i, n, null == e ? '' : e)
        );
      },
      text: function(i) {
        return this.tween(
          'text',
          'function' == typeof i
            ? (function(i) {
                return function() {
                  var n = i(this);
                  this.textContent = null == n ? '' : n;
                };
              })(oe(this, 'text', i))
            : (function(i) {
                return function() {
                  this.textContent = i;
                };
              })(null == i ? '' : i + '')
        );
      },
      remove: function() {
        return this.on(
          'end.remove',
          ((i = this._id),
          function() {
            var n = this.parentNode;
            for (var e in this.__transition) if (+e !== i) return;
            n && n.removeChild(this);
          })
        );
        var i;
      },
      tween: function(i, n) {
        var e = this._id;
        if (((i += ''), arguments.length < 2)) {
          for (
            var t, r = re(this.node(), e).tween, m = 0, o = r.length;
            m < o;
            ++m
          )
            if ((t = r[m]).name === i) return t.value;
          return null;
        }
        return this.each(
          (null == n
            ? function(i, n) {
                var e, t;
                return function() {
                  var r = te(this, i),
                    m = r.tween;
                  if (m !== e)
                    for (var o = 0, c = (t = e = m).length; o < c; ++o)
                      if (t[o].name === n) {
                        (t = t.slice()).splice(o, 1);
                        break;
                      }
                  r.tween = t;
                };
              }
            : function(i, n, e) {
                var t, r;
                if ('function' != typeof e) throw new Error();
                return function() {
                  var m = te(this, i),
                    o = m.tween;
                  if (o !== t) {
                    r = (t = o).slice();
                    for (
                      var c = {name: n, value: e}, s = 0, d = r.length;
                      s < d;
                      ++s
                    )
                      if (r[s].name === n) {
                        r[s] = c;
                        break;
                      }
                    s === d && r.push(c);
                  }
                  m.tween = r;
                };
              })(e, i, n)
        );
      },
      delay: function(i) {
        var n = this._id;
        return arguments.length
          ? this.each(
              ('function' == typeof i
                ? function(i, n) {
                    return function() {
                      ee(this, i).delay = +n.apply(this, arguments);
                    };
                  }
                : function(i, n) {
                    return (
                      (n = +n),
                      function() {
                        ee(this, i).delay = n;
                      }
                    );
                  })(n, i)
            )
          : re(this.node(), n).delay;
      },
      duration: function(i) {
        var n = this._id;
        return arguments.length
          ? this.each(
              ('function' == typeof i
                ? function(i, n) {
                    return function() {
                      te(this, i).duration = +n.apply(this, arguments);
                    };
                  }
                : function(i, n) {
                    return (
                      (n = +n),
                      function() {
                        te(this, i).duration = n;
                      }
                    );
                  })(n, i)
            )
          : re(this.node(), n).duration;
      },
      ease: function(i) {
        var n = this._id;
        return arguments.length
          ? this.each(
              (function(i, n) {
                if ('function' != typeof n) throw new Error();
                return function() {
                  te(this, i).ease = n;
                };
              })(n, i)
            )
          : re(this.node(), n).ease;
      },
      end: function() {
        var i,
          n,
          e = this,
          t = e._id,
          r = e.size();
        return new Promise(function(m, o) {
          var c = {value: o},
            s = {
              value: function() {
                0 == --r && m();
              },
            };
          e.each(function() {
            var e = te(this, t),
              r = e.on;
            r !== i &&
              ((n = (i = r).copy())._.cancel.push(c),
              n._.interrupt.push(c),
              n._.end.push(s)),
              (e.on = n);
          });
        });
      },
    };
    var Ne = (function i(n) {
        function e(i) {
          return Math.pow(i, n);
        }
        return (n = +n), (e.exponent = i), e;
      })(3),
      ve = (function i(n) {
        function e(i) {
          return 1 - Math.pow(1 - i, n);
        }
        return (n = +n), (e.exponent = i), e;
      })(3),
      Ce = (function i(n) {
        function e(i) {
          return ((i *= 2) <= 1 ? Math.pow(i, n) : 2 - Math.pow(2 - i, n)) / 2;
        }
        return (n = +n), (e.exponent = i), e;
      })(3),
      ye = Math.PI,
      ge = ye / 2;
    function Te(i) {
      return 1 - Math.cos(i * ge);
    }
    function Re(i) {
      return Math.sin(i * ge);
    }
    function _e(i) {
      return (1 - Math.cos(ye * i)) / 2;
    }
    function Ve(i) {
      return Math.pow(2, 10 * i - 10);
    }
    function Be(i) {
      return 1 - Math.pow(2, -10 * i);
    }
    function be(i) {
      return (
        ((i *= 2) <= 1
          ? Math.pow(2, 10 * i - 10)
          : 2 - Math.pow(2, 10 - 10 * i)) / 2
      );
    }
    function Ye(i) {
      return 1 - Math.sqrt(1 - i * i);
    }
    function Fe(i) {
      return Math.sqrt(1 - --i * i);
    }
    function Pe(i) {
      return (
        ((i *= 2) <= 1
          ? 1 - Math.sqrt(1 - i * i)
          : Math.sqrt(1 - (i -= 2) * i) + 1) / 2
      );
    }
    var Ge = 4 / 11,
      Ue = 6 / 11,
      Ie = 8 / 11,
      He = 0.75,
      xe = 9 / 11,
      We = 10 / 11,
      we = 0.9375,
      Xe = 21 / 22,
      Qe = 63 / 64,
      Ke = 1 / Ge / Ge;
    function ke(i) {
      return 1 - Je(1 - i);
    }
    function Je(i) {
      return (i = +i) < Ge
        ? Ke * i * i
        : i < Ie
        ? Ke * (i -= Ue) * i + He
        : i < We
        ? Ke * (i -= xe) * i + we
        : Ke * (i -= Xe) * i + Qe;
    }
    function ze(i) {
      return ((i *= 2) <= 1 ? 1 - Je(1 - i) : Je(i - 1) + 1) / 2;
    }
    var qe = (function i(n) {
        function e(i) {
          return i * i * ((n + 1) * i - n);
        }
        return (n = +n), (e.overshoot = i), e;
      })(1.70158),
      je = (function i(n) {
        function e(i) {
          return --i * i * ((n + 1) * i + n) + 1;
        }
        return (n = +n), (e.overshoot = i), e;
      })(1.70158),
      Ze = (function i(n) {
        function e(i) {
          return (
            ((i *= 2) < 1
              ? i * i * ((n + 1) * i - n)
              : (i -= 2) * i * ((n + 1) * i + n) + 2) / 2
          );
        }
        return (n = +n), (e.overshoot = i), e;
      })(1.70158),
      $e = 2 * Math.PI,
      it = (function i(n, e) {
        var t = Math.asin(1 / (n = Math.max(1, n))) * (e /= $e);
        function r(i) {
          return n * Math.pow(2, 10 * --i) * Math.sin((t - i) / e);
        }
        return (
          (r.amplitude = function(n) {
            return i(n, e * $e);
          }),
          (r.period = function(e) {
            return i(n, e);
          }),
          r
        );
      })(1, 0.3),
      nt = (function i(n, e) {
        var t = Math.asin(1 / (n = Math.max(1, n))) * (e /= $e);
        function r(i) {
          return 1 - n * Math.pow(2, -10 * (i = +i)) * Math.sin((i + t) / e);
        }
        return (
          (r.amplitude = function(n) {
            return i(n, e * $e);
          }),
          (r.period = function(e) {
            return i(n, e);
          }),
          r
        );
      })(1, 0.3),
      et = (function i(n, e) {
        var t = Math.asin(1 / (n = Math.max(1, n))) * (e /= $e);
        function r(i) {
          return (
            ((i = 2 * i - 1) < 0
              ? n * Math.pow(2, 10 * i) * Math.sin((t - i) / e)
              : 2 - n * Math.pow(2, -10 * i) * Math.sin((t + i) / e)) / 2
          );
        }
        return (
          (r.amplitude = function(n) {
            return i(n, e * $e);
          }),
          (r.period = function(e) {
            return i(n, e);
          }),
          r
        );
      })(1, 0.3),
      tt = {time: null, delay: 0, duration: 250, ease: De};
    function rt(i, n) {
      for (var e; !(e = i.__transition) || !(e = e[n]); )
        if (!(i = i.parentNode)) return (tt.time = Pn()), tt;
      return e;
    }
    (nn.prototype.interrupt = function(i) {
      return this.each(function() {
        me(this, i);
      });
    }),
      (nn.prototype.transition = function(i) {
        var n, e;
        i instanceof fe
          ? ((n = i._id), (i = i._name))
          : ((n = he()),
            ((e = tt).time = Pn()),
            (i = null == i ? null : i + ''));
        for (var t = this._groups, r = t.length, m = 0; m < r; ++m)
          for (var o, c = t[m], s = c.length, d = 0; d < s; ++d)
            (o = c[d]) && ne(o, i, n, d, c, e || rt(o, n));
        return new fe(t, this._parents, i, n);
      });
    var mt = [null],
      ot = function(i, n) {
        var e,
          t,
          r = i.__transition;
        if (r)
          for (t in ((n = null == n ? null : n + ''), r))
            if ((e = r[t]).state > zn && e.name === n)
              return new fe([[i]], mt, n, +t);
        return null;
      },
      ct = function(i) {
        return function() {
          return i;
        };
      },
      st = function(i, n, e) {
        (this.target = i), (this.type = n), (this.selection = e);
      };
    function dt() {
      Xi.stopImmediatePropagation();
    }
    var ut = function() {
        Xi.preventDefault(), Xi.stopImmediatePropagation();
      },
      at = {name: 'drag'},
      ft = {name: 'space'},
      lt = {name: 'handle'},
      ht = {name: 'center'},
      At = {
        name: 'x',
        handles: ['e', 'w'].map(Nt),
        input: function(i, n) {
          return i && [[i[0], n[0][1]], [i[1], n[1][1]]];
        },
        output: function(i) {
          return i && [i[0][0], i[1][0]];
        },
      },
      Ot = {
        name: 'y',
        handles: ['n', 's'].map(Nt),
        input: function(i, n) {
          return i && [[n[0][0], i[0]], [n[1][0], i[1]]];
        },
        output: function(i) {
          return i && [i[0][1], i[1][1]];
        },
      },
      pt = {
        name: 'xy',
        handles: ['n', 'e', 's', 'w', 'nw', 'ne', 'se', 'sw'].map(Nt),
        input: function(i) {
          return i;
        },
        output: function(i) {
          return i;
        },
      },
      St = {
        overlay: 'crosshair',
        selection: 'move',
        n: 'ns-resize',
        e: 'ew-resize',
        s: 'ns-resize',
        w: 'ew-resize',
        nw: 'nwse-resize',
        ne: 'nesw-resize',
        se: 'nwse-resize',
        sw: 'nesw-resize',
      },
      Mt = {e: 'w', w: 'e', nw: 'ne', ne: 'nw', se: 'sw', sw: 'se'},
      Et = {n: 's', s: 'n', nw: 'sw', ne: 'se', se: 'ne', sw: 'nw'},
      Lt = {
        overlay: 1,
        selection: 1,
        n: null,
        e: 1,
        s: null,
        w: -1,
        nw: -1,
        ne: 1,
        se: 1,
        sw: -1,
      },
      Dt = {
        overlay: 1,
        selection: 1,
        n: -1,
        e: null,
        s: 1,
        w: null,
        nw: -1,
        ne: -1,
        se: 1,
        sw: 1,
      };
    function Nt(i) {
      return {type: i};
    }
    function vt() {
      return !Xi.button;
    }
    function Ct() {
      var i = this.ownerSVGElement || this;
      return [[0, 0], [i.width.baseVal.value, i.height.baseVal.value]];
    }
    function yt(i) {
      for (; !i.__brush; ) if (!(i = i.parentNode)) return;
      return i.__brush;
    }
    function gt(i) {
      return i[0][0] === i[1][0] || i[0][1] === i[1][1];
    }
    function Tt(i) {
      var n = i.__brush;
      return n ? n.dim.output(n.selection) : null;
    }
    function Rt() {
      return Bt(At);
    }
    function _t() {
      return Bt(Ot);
    }
    var Vt = function() {
      return Bt(pt);
    };
    function Bt(i) {
      var n,
        e = Ct,
        t = vt,
        r = fi(o, 'start', 'brush', 'end'),
        m = 6;
      function o(n) {
        var e = n
          .property('__brush', a)
          .selectAll('.overlay')
          .data([Nt('overlay')]);
        e
          .enter()
          .append('rect')
          .attr('class', 'overlay')
          .attr('pointer-events', 'all')
          .attr('cursor', St.overlay)
          .merge(e)
          .each(function() {
            var i = yt(this).extent;
            en(this)
              .attr('x', i[0][0])
              .attr('y', i[0][1])
              .attr('width', i[1][0] - i[0][0])
              .attr('height', i[1][1] - i[0][1]);
          }),
          n
            .selectAll('.selection')
            .data([Nt('selection')])
            .enter()
            .append('rect')
            .attr('class', 'selection')
            .attr('cursor', St.selection)
            .attr('fill', '#777')
            .attr('fill-opacity', 0.3)
            .attr('stroke', '#fff')
            .attr('shape-rendering', 'crispEdges');
        var t = n.selectAll('.handle').data(i.handles, function(i) {
          return i.type;
        });
        t.exit().remove(),
          t
            .enter()
            .append('rect')
            .attr('class', function(i) {
              return 'handle handle--' + i.type;
            })
            .attr('cursor', function(i) {
              return St[i.type];
            }),
          n
            .each(c)
            .attr('fill', 'none')
            .attr('pointer-events', 'all')
            .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
            .on('mousedown.brush touchstart.brush', u);
      }
      function c() {
        var i = en(this),
          n = yt(this).selection;
        n
          ? (i
              .selectAll('.selection')
              .style('display', null)
              .attr('x', n[0][0])
              .attr('y', n[0][1])
              .attr('width', n[1][0] - n[0][0])
              .attr('height', n[1][1] - n[0][1]),
            i
              .selectAll('.handle')
              .style('display', null)
              .attr('x', function(i) {
                return 'e' === i.type[i.type.length - 1]
                  ? n[1][0] - m / 2
                  : n[0][0] - m / 2;
              })
              .attr('y', function(i) {
                return 's' === i.type[0] ? n[1][1] - m / 2 : n[0][1] - m / 2;
              })
              .attr('width', function(i) {
                return 'n' === i.type || 's' === i.type
                  ? n[1][0] - n[0][0] + m
                  : m;
              })
              .attr('height', function(i) {
                return 'e' === i.type || 'w' === i.type
                  ? n[1][1] - n[0][1] + m
                  : m;
              }))
          : i
              .selectAll('.selection,.handle')
              .style('display', 'none')
              .attr('x', null)
              .attr('y', null)
              .attr('width', null)
              .attr('height', null);
      }
      function s(i, n) {
        return i.__brush.emitter || new d(i, n);
      }
      function d(i, n) {
        (this.that = i),
          (this.args = n),
          (this.state = i.__brush),
          (this.active = 0);
      }
      function u() {
        if (Xi.touches) {
          if (Xi.changedTouches.length < Xi.touches.length) return ut();
        } else if (n) return;
        if (t.apply(this, arguments)) {
          var e,
            r,
            m,
            o,
            d,
            u,
            a,
            f,
            l,
            h,
            A,
            O,
            p,
            S = this,
            M = Xi.target.__data__.type,
            E =
              'selection' === (Xi.metaKey ? (M = 'overlay') : M)
                ? at
                : Xi.altKey
                ? ht
                : lt,
            L = i === Ot ? null : Lt[M],
            D = i === At ? null : Dt[M],
            N = yt(S),
            v = N.extent,
            C = N.selection,
            y = v[0][0],
            g = v[0][1],
            T = v[1][0],
            R = v[1][1],
            _ = L && D && Xi.shiftKey,
            V = dn(S),
            B = V,
            b = s(S, arguments).beforestart();
          'overlay' === M
            ? (N.selection = C = [
                [(e = i === Ot ? y : V[0]), (m = i === At ? g : V[1])],
                [(d = i === Ot ? T : e), (a = i === At ? R : m)],
              ])
            : ((e = C[0][0]), (m = C[0][1]), (d = C[1][0]), (a = C[1][1])),
            (r = e),
            (o = m),
            (u = d),
            (f = a);
          var Y = en(S).attr('pointer-events', 'none'),
            F = Y.selectAll('.overlay').attr('cursor', St[M]);
          if (Xi.touches)
            Y.on('touchmove.brush', G, !0).on(
              'touchend.brush touchcancel.brush',
              I,
              !0
            );
          else {
            var P = en(Xi.view)
              .on(
                'keydown.brush',
                function() {
                  switch (Xi.keyCode) {
                    case 16:
                      _ = L && D;
                      break;
                    case 18:
                      E === lt &&
                        (L && ((d = u - l * L), (e = r + l * L)),
                        D && ((a = f - h * D), (m = o + h * D)),
                        (E = ht),
                        U());
                      break;
                    case 32:
                      (E !== lt && E !== ht) ||
                        (L < 0 ? (d = u - l) : L > 0 && (e = r - l),
                        D < 0 ? (a = f - h) : D > 0 && (m = o - h),
                        (E = ft),
                        F.attr('cursor', St.selection),
                        U());
                      break;
                    default:
                      return;
                  }
                  ut();
                },
                !0
              )
              .on(
                'keyup.brush',
                function() {
                  switch (Xi.keyCode) {
                    case 16:
                      _ && ((O = p = _ = !1), U());
                      break;
                    case 18:
                      E === ht &&
                        (L < 0 ? (d = u) : L > 0 && (e = r),
                        D < 0 ? (a = f) : D > 0 && (m = o),
                        (E = lt),
                        U());
                      break;
                    case 32:
                      E === ft &&
                        (Xi.altKey
                          ? (L && ((d = u - l * L), (e = r + l * L)),
                            D && ((a = f - h * D), (m = o + h * D)),
                            (E = ht))
                          : (L < 0 ? (d = u) : L > 0 && (e = r),
                            D < 0 ? (a = f) : D > 0 && (m = o),
                            (E = lt)),
                        F.attr('cursor', St[M]),
                        U());
                      break;
                    default:
                      return;
                  }
                  ut();
                },
                !0
              )
              .on('mousemove.brush', G, !0)
              .on('mouseup.brush', I, !0);
            An(Xi.view);
          }
          dt(), me(S), c.call(S), b.start();
        }
        function G() {
          var i = dn(S);
          !_ ||
            O ||
            p ||
            (Math.abs(i[0] - B[0]) > Math.abs(i[1] - B[1])
              ? (p = !0)
              : (O = !0)),
            (B = i),
            (A = !0),
            ut(),
            U();
        }
        function U() {
          var i;
          switch (((l = B[0] - V[0]), (h = B[1] - V[1]), E)) {
            case ft:
            case at:
              L &&
                ((l = Math.max(y - e, Math.min(T - d, l))),
                (r = e + l),
                (u = d + l)),
                D &&
                  ((h = Math.max(g - m, Math.min(R - a, h))),
                  (o = m + h),
                  (f = a + h));
              break;
            case lt:
              L < 0
                ? ((l = Math.max(y - e, Math.min(T - e, l))),
                  (r = e + l),
                  (u = d))
                : L > 0 &&
                  ((l = Math.max(y - d, Math.min(T - d, l))),
                  (r = e),
                  (u = d + l)),
                D < 0
                  ? ((h = Math.max(g - m, Math.min(R - m, h))),
                    (o = m + h),
                    (f = a))
                  : D > 0 &&
                    ((h = Math.max(g - a, Math.min(R - a, h))),
                    (o = m),
                    (f = a + h));
              break;
            case ht:
              L &&
                ((r = Math.max(y, Math.min(T, e - l * L))),
                (u = Math.max(y, Math.min(T, d + l * L)))),
                D &&
                  ((o = Math.max(g, Math.min(R, m - h * D))),
                  (f = Math.max(g, Math.min(R, a + h * D))));
          }
          u < r &&
            ((L *= -1),
            (i = e),
            (e = d),
            (d = i),
            (i = r),
            (r = u),
            (u = i),
            M in Mt && F.attr('cursor', St[(M = Mt[M])])),
            f < o &&
              ((D *= -1),
              (i = m),
              (m = a),
              (a = i),
              (i = o),
              (o = f),
              (f = i),
              M in Et && F.attr('cursor', St[(M = Et[M])])),
            N.selection && (C = N.selection),
            O && ((r = C[0][0]), (u = C[1][0])),
            p && ((o = C[0][1]), (f = C[1][1])),
            (C[0][0] === r &&
              C[0][1] === o &&
              C[1][0] === u &&
              C[1][1] === f) ||
              ((N.selection = [[r, o], [u, f]]), c.call(S), b.brush());
        }
        function I() {
          if ((dt(), Xi.touches)) {
            if (Xi.touches.length) return;
            n && clearTimeout(n),
              (n = setTimeout(function() {
                n = null;
              }, 500)),
              Y.on('touchmove.brush touchend.brush touchcancel.brush', null);
          } else
            On(Xi.view, A),
              P.on(
                'keydown.brush keyup.brush mousemove.brush mouseup.brush',
                null
              );
          Y.attr('pointer-events', 'all'),
            F.attr('cursor', St.overlay),
            N.selection && (C = N.selection),
            gt(C) && ((N.selection = null), c.call(S)),
            b.end();
        }
      }
      function a() {
        var n = this.__brush || {selection: null};
        return (n.extent = e.apply(this, arguments)), (n.dim = i), n;
      }
      return (
        (o.move = function(n, e) {
          n.selection
            ? n
                .on('start.brush', function() {
                  s(this, arguments)
                    .beforestart()
                    .start();
                })
                .on('interrupt.brush end.brush', function() {
                  s(this, arguments).end();
                })
                .tween('brush', function() {
                  var n = this,
                    t = n.__brush,
                    r = s(n, arguments),
                    m = t.selection,
                    o = i.input(
                      'function' == typeof e ? e.apply(this, arguments) : e,
                      t.extent
                    ),
                    d = Object(yn.a)(m, o);
                  function u(i) {
                    (t.selection = 1 === i && gt(o) ? null : d(i)),
                      c.call(n),
                      r.brush();
                  }
                  return m && o ? u : u(1);
                })
            : n.each(function() {
                var n = arguments,
                  t = this.__brush,
                  r = i.input(
                    'function' == typeof e ? e.apply(this, n) : e,
                    t.extent
                  ),
                  m = s(this, n).beforestart();
                me(this),
                  (t.selection = null == r || gt(r) ? null : r),
                  c.call(this),
                  m
                    .start()
                    .brush()
                    .end();
              });
        }),
        (d.prototype = {
          beforestart: function() {
            return (
              1 == ++this.active &&
                ((this.state.emitter = this), (this.starting = !0)),
              this
            );
          },
          start: function() {
            return (
              this.starting && ((this.starting = !1), this.emit('start')), this
            );
          },
          brush: function() {
            return this.emit('brush'), this;
          },
          end: function() {
            return (
              0 == --this.active &&
                (delete this.state.emitter, this.emit('end')),
              this
            );
          },
          emit: function(n) {
            zi(new st(o, n, i.output(this.state.selection)), r.apply, r, [
              n,
              this.that,
              this.args,
            ]);
          },
        }),
        (o.extent = function(i) {
          return arguments.length
            ? ((e =
                'function' == typeof i
                  ? i
                  : ct([[+i[0][0], +i[0][1]], [+i[1][0], +i[1][1]]])),
              o)
            : e;
        }),
        (o.filter = function(i) {
          return arguments.length
            ? ((t = 'function' == typeof i ? i : ct(!!i)), o)
            : t;
        }),
        (o.handleSize = function(i) {
          return arguments.length ? ((m = +i), o) : m;
        }),
        (o.on = function() {
          var i = r.on.apply(r, arguments);
          return i === r ? o : i;
        }),
        o
      );
    }
    var bt = function(i, n) {
      return i < n ? -1 : i > n ? 1 : i >= n ? 0 : NaN;
    };
    var Yt, Ft;
    1 === (Yt = bt).length &&
      ((Ft = Yt),
      (Yt = function(i, n) {
        return bt(Ft(i), n);
      }));
    var Pt = Array.prototype,
      Gt =
        (Pt.slice,
        Pt.map,
        function(i, n, e) {
          (i = +i),
            (n = +n),
            (e =
              (r = arguments.length) < 2
                ? ((n = i), (i = 0), 1)
                : r < 3
                ? 1
                : +e);
          for (
            var t = -1,
              r = 0 | Math.max(0, Math.ceil((n - i) / e)),
              m = new Array(r);
            ++t < r;

          )
            m[t] = i + t * e;
          return m;
        });
    Math.sqrt(50), Math.sqrt(10), Math.sqrt(2);
    var Ut = Math.cos,
      It = Math.sin,
      Ht = Math.PI,
      xt = Ht / 2,
      Wt = 2 * Ht,
      wt = Math.max;
    var Xt = function() {
        var i = 0,
          n = null,
          e = null,
          t = null;
        function r(r) {
          var m,
            o,
            c,
            s,
            d,
            u,
            a = r.length,
            f = [],
            l = Gt(a),
            h = [],
            A = [],
            O = (A.groups = new Array(a)),
            p = new Array(a * a);
          for (m = 0, d = -1; ++d < a; ) {
            for (o = 0, u = -1; ++u < a; ) o += r[d][u];
            f.push(o), h.push(Gt(a)), (m += o);
          }
          for (
            n &&
              l.sort(function(i, e) {
                return n(f[i], f[e]);
              }),
              e &&
                h.forEach(function(i, n) {
                  i.sort(function(i, t) {
                    return e(r[n][i], r[n][t]);
                  });
                }),
              s = (m = wt(0, Wt - i * a) / m) ? i : Wt / a,
              o = 0,
              d = -1;
            ++d < a;

          ) {
            for (c = o, u = -1; ++u < a; ) {
              var S = l[d],
                M = h[S][u],
                E = r[S][M],
                L = o,
                D = (o += E * m);
              p[M * a + S] = {
                index: S,
                subindex: M,
                startAngle: L,
                endAngle: D,
                value: E,
              };
            }
            (O[S] = {index: S, startAngle: c, endAngle: o, value: f[S]}),
              (o += s);
          }
          for (d = -1; ++d < a; )
            for (u = d - 1; ++u < a; ) {
              var N = p[u * a + d],
                v = p[d * a + u];
              (N.value || v.value) &&
                A.push(
                  N.value < v.value
                    ? {source: v, target: N}
                    : {source: N, target: v}
                );
            }
          return t ? A.sort(t) : A;
        }
        return (
          (r.padAngle = function(n) {
            return arguments.length ? ((i = wt(0, n)), r) : i;
          }),
          (r.sortGroups = function(i) {
            return arguments.length ? ((n = i), r) : n;
          }),
          (r.sortSubgroups = function(i) {
            return arguments.length ? ((e = i), r) : e;
          }),
          (r.sortChords = function(i) {
            return arguments.length
              ? (null == i
                  ? (t = null)
                  : ((t = (function(i) {
                      return function(n, e) {
                        return i(
                          n.source.value + n.target.value,
                          e.source.value + e.target.value
                        );
                      };
                    })(i))._ = i),
                r)
              : t && t._;
          }),
          r
        );
      },
      Qt = Array.prototype.slice,
      Kt = function(i) {
        return function() {
          return i;
        };
      },
      kt = Math.PI,
      Jt = 2 * kt,
      zt = Jt - 1e-6;
    function qt() {
      (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = '');
    }
    function jt() {
      return new qt();
    }
    qt.prototype = jt.prototype = {
      constructor: qt,
      moveTo: function(i, n) {
        this._ +=
          'M' + (this._x0 = this._x1 = +i) + ',' + (this._y0 = this._y1 = +n);
      },
      closePath: function() {
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += 'Z'));
      },
      lineTo: function(i, n) {
        this._ += 'L' + (this._x1 = +i) + ',' + (this._y1 = +n);
      },
      quadraticCurveTo: function(i, n, e, t) {
        this._ +=
          'Q' + +i + ',' + +n + ',' + (this._x1 = +e) + ',' + (this._y1 = +t);
      },
      bezierCurveTo: function(i, n, e, t, r, m) {
        this._ +=
          'C' +
          +i +
          ',' +
          +n +
          ',' +
          +e +
          ',' +
          +t +
          ',' +
          (this._x1 = +r) +
          ',' +
          (this._y1 = +m);
      },
      arcTo: function(i, n, e, t, r) {
        (i = +i), (n = +n), (e = +e), (t = +t), (r = +r);
        var m = this._x1,
          o = this._y1,
          c = e - i,
          s = t - n,
          d = m - i,
          u = o - n,
          a = d * d + u * u;
        if (r < 0) throw new Error('negative radius: ' + r);
        if (null === this._x1)
          this._ += 'M' + (this._x1 = i) + ',' + (this._y1 = n);
        else if (a > 1e-6)
          if (Math.abs(u * c - s * d) > 1e-6 && r) {
            var f = e - m,
              l = t - o,
              h = c * c + s * s,
              A = f * f + l * l,
              O = Math.sqrt(h),
              p = Math.sqrt(a),
              S = r * Math.tan((kt - Math.acos((h + a - A) / (2 * O * p))) / 2),
              M = S / p,
              E = S / O;
            Math.abs(M - 1) > 1e-6 &&
              (this._ += 'L' + (i + M * d) + ',' + (n + M * u)),
              (this._ +=
                'A' +
                r +
                ',' +
                r +
                ',0,0,' +
                +(u * f > d * l) +
                ',' +
                (this._x1 = i + E * c) +
                ',' +
                (this._y1 = n + E * s));
          } else this._ += 'L' + (this._x1 = i) + ',' + (this._y1 = n);
        else;
      },
      arc: function(i, n, e, t, r, m) {
        (i = +i), (n = +n);
        var o = (e = +e) * Math.cos(t),
          c = e * Math.sin(t),
          s = i + o,
          d = n + c,
          u = 1 ^ m,
          a = m ? t - r : r - t;
        if (e < 0) throw new Error('negative radius: ' + e);
        null === this._x1
          ? (this._ += 'M' + s + ',' + d)
          : (Math.abs(this._x1 - s) > 1e-6 || Math.abs(this._y1 - d) > 1e-6) &&
            (this._ += 'L' + s + ',' + d),
          e &&
            (a < 0 && (a = (a % Jt) + Jt),
            a > zt
              ? (this._ +=
                  'A' +
                  e +
                  ',' +
                  e +
                  ',0,1,' +
                  u +
                  ',' +
                  (i - o) +
                  ',' +
                  (n - c) +
                  'A' +
                  e +
                  ',' +
                  e +
                  ',0,1,' +
                  u +
                  ',' +
                  (this._x1 = s) +
                  ',' +
                  (this._y1 = d))
              : a > 1e-6 &&
                (this._ +=
                  'A' +
                  e +
                  ',' +
                  e +
                  ',0,' +
                  +(a >= kt) +
                  ',' +
                  u +
                  ',' +
                  (this._x1 = i + e * Math.cos(r)) +
                  ',' +
                  (this._y1 = n + e * Math.sin(r))));
      },
      rect: function(i, n, e, t) {
        this._ +=
          'M' +
          (this._x0 = this._x1 = +i) +
          ',' +
          (this._y0 = this._y1 = +n) +
          'h' +
          +e +
          'v' +
          +t +
          'h' +
          -e +
          'Z';
      },
      toString: function() {
        return this._;
      },
    };
    var Zt = jt;
    function $t(i) {
      return i.source;
    }
    function ir(i) {
      return i.target;
    }
    function nr(i) {
      return i.radius;
    }
    function er(i) {
      return i.startAngle;
    }
    function tr(i) {
      return i.endAngle;
    }
    var rr = function() {
      var i = $t,
        n = ir,
        e = nr,
        t = er,
        r = tr,
        m = null;
      function o() {
        var o,
          c = Qt.call(arguments),
          s = i.apply(this, c),
          d = n.apply(this, c),
          u = +e.apply(this, ((c[0] = s), c)),
          a = t.apply(this, c) - xt,
          f = r.apply(this, c) - xt,
          l = u * Ut(a),
          h = u * It(a),
          A = +e.apply(this, ((c[0] = d), c)),
          O = t.apply(this, c) - xt,
          p = r.apply(this, c) - xt;
        if (
          (m || (m = o = Zt()),
          m.moveTo(l, h),
          m.arc(0, 0, u, a, f),
          (a === O && f === p) ||
            (m.quadraticCurveTo(0, 0, A * Ut(O), A * It(O)),
            m.arc(0, 0, A, O, p)),
          m.quadraticCurveTo(0, 0, l, h),
          m.closePath(),
          o)
        )
          return (m = null), o + '' || null;
      }
      return (
        (o.radius = function(i) {
          return arguments.length
            ? ((e = 'function' == typeof i ? i : Kt(+i)), o)
            : e;
        }),
        (o.startAngle = function(i) {
          return arguments.length
            ? ((t = 'function' == typeof i ? i : Kt(+i)), o)
            : t;
        }),
        (o.endAngle = function(i) {
          return arguments.length
            ? ((r = 'function' == typeof i ? i : Kt(+i)), o)
            : r;
        }),
        (o.source = function(n) {
          return arguments.length ? ((i = n), o) : i;
        }),
        (o.target = function(i) {
          return arguments.length ? ((n = i), o) : n;
        }),
        (o.context = function(i) {
          return arguments.length ? ((m = null == i ? null : i), o) : m;
        }),
        o
      );
    };
    function mr() {}
    function or(i, n) {
      var e = new mr();
      if (i instanceof mr)
        i.each(function(i, n) {
          e.set(n, i);
        });
      else if (Array.isArray(i)) {
        var t,
          r = -1,
          m = i.length;
        if (null == n) for (; ++r < m; ) e.set(r, i[r]);
        else for (; ++r < m; ) e.set(n((t = i[r]), r, i), t);
      } else if (i) for (var o in i) e.set(o, i[o]);
      return e;
    }
    mr.prototype = or.prototype = {
      constructor: mr,
      has: function(i) {
        return '$' + i in this;
      },
      get: function(i) {
        return this['$' + i];
      },
      set: function(i, n) {
        return (this['$' + i] = n), this;
      },
      remove: function(i) {
        var n = '$' + i;
        return n in this && delete this[n];
      },
      clear: function() {
        for (var i in this) '$' === i[0] && delete this[i];
      },
      keys: function() {
        var i = [];
        for (var n in this) '$' === n[0] && i.push(n.slice(1));
        return i;
      },
      values: function() {
        var i = [];
        for (var n in this) '$' === n[0] && i.push(this[n]);
        return i;
      },
      entries: function() {
        var i = [];
        for (var n in this)
          '$' === n[0] && i.push({key: n.slice(1), value: this[n]});
        return i;
      },
      size: function() {
        var i = 0;
        for (var n in this) '$' === n[0] && ++i;
        return i;
      },
      empty: function() {
        for (var i in this) if ('$' === i[0]) return !1;
        return !0;
      },
      each: function(i) {
        for (var n in this) '$' === n[0] && i(this[n], n.slice(1), this);
      },
    };
    var cr = or,
      sr = function() {
        var i,
          n,
          e,
          t = [],
          r = [];
        function m(e, r, o, c) {
          if (r >= t.length)
            return null != i && e.sort(i), null != n ? n(e) : e;
          for (
            var s, d, u, a = -1, f = e.length, l = t[r++], h = cr(), A = o();
            ++a < f;

          )
            (u = h.get((s = l((d = e[a])) + ''))) ? u.push(d) : h.set(s, [d]);
          return (
            h.each(function(i, n) {
              c(A, n, m(i, r, o, c));
            }),
            A
          );
        }
        return (e = {
          object: function(i) {
            return m(i, 0, dr, ur);
          },
          map: function(i) {
            return m(i, 0, ar, fr);
          },
          entries: function(i) {
            return (function i(e, m) {
              if (++m > t.length) return e;
              var o,
                c = r[m - 1];
              return (
                null != n && m >= t.length
                  ? (o = e.entries())
                  : ((o = []),
                    e.each(function(n, e) {
                      o.push({key: e, values: i(n, m)});
                    })),
                null != c
                  ? o.sort(function(i, n) {
                      return c(i.key, n.key);
                    })
                  : o
              );
            })(m(i, 0, ar, fr), 0);
          },
          key: function(i) {
            return t.push(i), e;
          },
          sortKeys: function(i) {
            return (r[t.length - 1] = i), e;
          },
          sortValues: function(n) {
            return (i = n), e;
          },
          rollup: function(i) {
            return (n = i), e;
          },
        });
      };
    function dr() {
      return {};
    }
    function ur(i, n, e) {
      i[n] = e;
    }
    function ar() {
      return cr();
    }
    function fr(i, n, e) {
      i.set(n, e);
    }
    function lr() {}
    var hr = cr.prototype;
    function Ar(i, n) {
      var e = new lr();
      if (i instanceof lr)
        i.each(function(i) {
          e.add(i);
        });
      else if (i) {
        var t = -1,
          r = i.length;
        if (null == n) for (; ++t < r; ) e.add(i[t]);
        else for (; ++t < r; ) e.add(n(i[t], t, i));
      }
      return e;
    }
    lr.prototype = Ar.prototype = {
      constructor: lr,
      has: hr.has,
      add: function(i) {
        return (this['$' + (i += '')] = i), this;
      },
      remove: hr.remove,
      clear: hr.clear,
      values: hr.keys,
      size: hr.size,
      empty: hr.empty,
      each: hr.each,
    };
    var Or = Ar,
      pr = function(i) {
        var n = [];
        for (var e in i) n.push(e);
        return n;
      },
      Sr = function(i) {
        var n = [];
        for (var e in i) n.push(i[e]);
        return n;
      },
      Mr = function(i) {
        var n = [];
        for (var e in i) n.push({key: e, value: i[e]});
        return n;
      },
      Er = function(i, n) {
        return i < n ? -1 : i > n ? 1 : i >= n ? 0 : NaN;
      };
    var Lr = (function(i) {
      return (
        1 === i.length &&
          (i = (function(i) {
            return function(n, e) {
              return Er(i(n), e);
            };
          })(i)),
        {
          left: function(n, e, t, r) {
            for (null == t && (t = 0), null == r && (r = n.length); t < r; ) {
              var m = (t + r) >>> 1;
              i(n[m], e) < 0 ? (t = m + 1) : (r = m);
            }
            return t;
          },
          right: function(n, e, t, r) {
            for (null == t && (t = 0), null == r && (r = n.length); t < r; ) {
              var m = (t + r) >>> 1;
              i(n[m], e) > 0 ? (r = m) : (t = m + 1);
            }
            return t;
          },
        }
      );
    })(Er);
    Lr.right, Lr.left;
    var Dr = function(i, n) {
        var e,
          t,
          r,
          m = i.length,
          o = -1;
        if (null == n) {
          for (; ++o < m; )
            if (null != (e = i[o]) && e >= e)
              for (t = r = e; ++o < m; )
                null != (e = i[o]) && (t > e && (t = e), r < e && (r = e));
        } else
          for (; ++o < m; )
            if (null != (e = n(i[o], o, i)) && e >= e)
              for (t = r = e; ++o < m; )
                null != (e = n(i[o], o, i)) &&
                  (t > e && (t = e), r < e && (r = e));
        return [t, r];
      },
      Nr = Array.prototype,
      vr =
        (Nr.slice,
        Nr.map,
        function(i, n, e) {
          (i = +i),
            (n = +n),
            (e =
              (r = arguments.length) < 2
                ? ((n = i), (i = 0), 1)
                : r < 3
                ? 1
                : +e);
          for (
            var t = -1,
              r = 0 | Math.max(0, Math.ceil((n - i) / e)),
              m = new Array(r);
            ++t < r;

          )
            m[t] = i + t * e;
          return m;
        }),
      Cr = Math.sqrt(50),
      yr = Math.sqrt(10),
      gr = Math.sqrt(2);
    function Tr(i, n, e) {
      var t = Math.abs(n - i) / Math.max(0, e),
        r = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)),
        m = t / r;
      return (
        m >= Cr ? (r *= 10) : m >= yr ? (r *= 5) : m >= gr && (r *= 2),
        n < i ? -r : r
      );
    }
    var Rr = function(i) {
        return Math.ceil(Math.log(i.length) / Math.LN2) + 1;
      },
      _r = function(i, n) {
        var e,
          t,
          r = i.length,
          m = -1;
        if (null == n) {
          for (; ++m < r; )
            if (null != (e = i[m]) && e >= e)
              for (t = e; ++m < r; ) null != (e = i[m]) && e > t && (t = e);
        } else
          for (; ++m < r; )
            if (null != (e = n(i[m], m, i)) && e >= e)
              for (t = e; ++m < r; )
                null != (e = n(i[m], m, i)) && e > t && (t = e);
        return t;
      };
    var Vr = Array.prototype.slice,
      Br = function(i, n) {
        return i - n;
      },
      br = function(i) {
        for (
          var n = 0,
            e = i.length,
            t = i[e - 1][1] * i[0][0] - i[e - 1][0] * i[0][1];
          ++n < e;

        )
          t += i[n - 1][1] * i[n][0] - i[n - 1][0] * i[n][1];
        return t;
      },
      Yr = function(i) {
        return function() {
          return i;
        };
      },
      Fr = function(i, n) {
        for (var e, t = -1, r = n.length; ++t < r; )
          if ((e = Pr(i, n[t]))) return e;
        return 0;
      };
    function Pr(i, n) {
      for (
        var e = n[0], t = n[1], r = -1, m = 0, o = i.length, c = o - 1;
        m < o;
        c = m++
      ) {
        var s = i[m],
          d = s[0],
          u = s[1],
          a = i[c],
          f = a[0],
          l = a[1];
        if (Gr(s, a, n)) return 0;
        u > t != l > t && e < ((f - d) * (t - u)) / (l - u) + d && (r = -r);
      }
      return r;
    }
    function Gr(i, n, e) {
      var t, r, m, o;
      return (
        (function(i, n, e) {
          return (n[0] - i[0]) * (e[1] - i[1]) == (e[0] - i[0]) * (n[1] - i[1]);
        })(i, n, e) &&
        ((r = i[(t = +(i[0] === n[0]))]),
        (m = e[t]),
        (o = n[t]),
        (r <= m && m <= o) || (o <= m && m <= r))
      );
    }
    var Ur = function() {},
      Ir = [
        [],
        [[[1, 1.5], [0.5, 1]]],
        [[[1.5, 1], [1, 1.5]]],
        [[[1.5, 1], [0.5, 1]]],
        [[[1, 0.5], [1.5, 1]]],
        [[[1, 1.5], [0.5, 1]], [[1, 0.5], [1.5, 1]]],
        [[[1, 0.5], [1, 1.5]]],
        [[[1, 0.5], [0.5, 1]]],
        [[[0.5, 1], [1, 0.5]]],
        [[[1, 1.5], [1, 0.5]]],
        [[[0.5, 1], [1, 0.5]], [[1.5, 1], [1, 1.5]]],
        [[[1.5, 1], [1, 0.5]]],
        [[[0.5, 1], [1.5, 1]]],
        [[[1, 1.5], [1.5, 1]]],
        [[[0.5, 1], [1, 1.5]]],
        [],
      ],
      Hr = function() {
        var i = 1,
          n = 1,
          e = Rr,
          t = c;
        function r(i) {
          var n = e(i);
          if (Array.isArray(n)) n = n.slice().sort(Br);
          else {
            var t = Dr(i),
              r = t[0],
              o = t[1];
            (n = Tr(r, o, n)),
              (n = vr(Math.floor(r / n) * n, Math.floor(o / n) * n, n));
          }
          return n.map(function(n) {
            return m(i, n);
          });
        }
        function m(e, r) {
          var m = [],
            c = [];
          return (
            (function(e, t, r) {
              var m,
                c,
                s,
                d,
                u,
                a,
                f = new Array(),
                l = new Array();
              (m = c = -1), (d = e[0] >= t), Ir[d << 1].forEach(h);
              for (; ++m < i - 1; )
                (s = d), (d = e[m + 1] >= t), Ir[s | (d << 1)].forEach(h);
              Ir[d << 0].forEach(h);
              for (; ++c < n - 1; ) {
                for (
                  m = -1,
                    d = e[c * i + i] >= t,
                    u = e[c * i] >= t,
                    Ir[(d << 1) | (u << 2)].forEach(h);
                  ++m < i - 1;

                )
                  (s = d),
                    (d = e[c * i + i + m + 1] >= t),
                    (a = u),
                    (u = e[c * i + m + 1] >= t),
                    Ir[s | (d << 1) | (u << 2) | (a << 3)].forEach(h);
                Ir[d | (u << 3)].forEach(h);
              }
              (m = -1), (u = e[c * i] >= t), Ir[u << 2].forEach(h);
              for (; ++m < i - 1; )
                (a = u),
                  (u = e[c * i + m + 1] >= t),
                  Ir[(u << 2) | (a << 3)].forEach(h);
              function h(i) {
                var n,
                  e,
                  t = [i[0][0] + m, i[0][1] + c],
                  s = [i[1][0] + m, i[1][1] + c],
                  d = o(t),
                  u = o(s);
                (n = l[d])
                  ? (e = f[u])
                    ? (delete l[n.end],
                      delete f[e.start],
                      n === e
                        ? (n.ring.push(s), r(n.ring))
                        : (f[n.start] = l[e.end] = {
                            start: n.start,
                            end: e.end,
                            ring: n.ring.concat(e.ring),
                          }))
                    : (delete l[n.end], n.ring.push(s), (l[(n.end = u)] = n))
                  : (n = f[u])
                  ? (e = l[d])
                    ? (delete f[n.start],
                      delete l[e.end],
                      n === e
                        ? (n.ring.push(s), r(n.ring))
                        : (f[e.start] = l[n.end] = {
                            start: e.start,
                            end: n.end,
                            ring: e.ring.concat(n.ring),
                          }))
                    : (delete f[n.start],
                      n.ring.unshift(t),
                      (f[(n.start = d)] = n))
                  : (f[d] = l[u] = {start: d, end: u, ring: [t, s]});
              }
              Ir[u << 3].forEach(h);
            })(e, r, function(i) {
              t(i, e, r), br(i) > 0 ? m.push([i]) : c.push(i);
            }),
            c.forEach(function(i) {
              for (var n, e = 0, t = m.length; e < t; ++e)
                if (-1 !== Fr((n = m[e])[0], i)) return void n.push(i);
            }),
            {type: 'MultiPolygon', value: r, coordinates: m}
          );
        }
        function o(n) {
          return 2 * n[0] + n[1] * (i + 1) * 4;
        }
        function c(e, t, r) {
          e.forEach(function(e) {
            var m,
              o = e[0],
              c = e[1],
              s = 0 | o,
              d = 0 | c,
              u = t[d * i + s];
            o > 0 &&
              o < i &&
              s === o &&
              ((m = t[d * i + s - 1]), (e[0] = o + (r - m) / (u - m) - 0.5)),
              c > 0 &&
                c < n &&
                d === c &&
                ((m = t[(d - 1) * i + s]),
                (e[1] = c + (r - m) / (u - m) - 0.5));
          });
        }
        return (
          (r.contour = m),
          (r.size = function(e) {
            if (!arguments.length) return [i, n];
            var t = Math.ceil(e[0]),
              m = Math.ceil(e[1]);
            if (!(t > 0 && m > 0)) throw new Error('invalid size');
            return (i = t), (n = m), r;
          }),
          (r.thresholds = function(i) {
            return arguments.length
              ? ((e =
                  'function' == typeof i
                    ? i
                    : Array.isArray(i)
                    ? Yr(Vr.call(i))
                    : Yr(i)),
                r)
              : e;
          }),
          (r.smooth = function(i) {
            return arguments.length ? ((t = i ? c : Ur), r) : t === c;
          }),
          r
        );
      };
    function xr(i, n, e) {
      for (var t = i.width, r = i.height, m = 1 + (e << 1), o = 0; o < r; ++o)
        for (var c = 0, s = 0; c < t + e; ++c)
          c < t && (s += i.data[c + o * t]),
            c >= e &&
              (c >= m && (s -= i.data[c - m + o * t]),
              (n.data[c - e + o * t] = s / Math.min(c + 1, t - 1 + m - c, m)));
    }
    function Wr(i, n, e) {
      for (var t = i.width, r = i.height, m = 1 + (e << 1), o = 0; o < t; ++o)
        for (var c = 0, s = 0; c < r + e; ++c)
          c < r && (s += i.data[o + c * t]),
            c >= e &&
              (c >= m && (s -= i.data[o + (c - m) * t]),
              (n.data[o + (c - e) * t] =
                s / Math.min(c + 1, r - 1 + m - c, m)));
    }
    function wr(i) {
      return i[0];
    }
    function Xr(i) {
      return i[1];
    }
    function Qr() {
      return 1;
    }
    var Kr = function() {
        var i = wr,
          n = Xr,
          e = Qr,
          t = 960,
          r = 500,
          m = 20,
          o = 2,
          c = 3 * m,
          s = (t + 2 * c) >> o,
          d = (r + 2 * c) >> o,
          u = Yr(20);
        function a(t) {
          var r = new Float32Array(s * d),
            a = new Float32Array(s * d);
          t.forEach(function(t, m, u) {
            var a = (+i(t, m, u) + c) >> o,
              f = (+n(t, m, u) + c) >> o,
              l = +e(t, m, u);
            a >= 0 && a < s && f >= 0 && f < d && (r[a + f * s] += l);
          }),
            xr(
              {width: s, height: d, data: r},
              {width: s, height: d, data: a},
              m >> o
            ),
            Wr(
              {width: s, height: d, data: a},
              {width: s, height: d, data: r},
              m >> o
            ),
            xr(
              {width: s, height: d, data: r},
              {width: s, height: d, data: a},
              m >> o
            ),
            Wr(
              {width: s, height: d, data: a},
              {width: s, height: d, data: r},
              m >> o
            ),
            xr(
              {width: s, height: d, data: r},
              {width: s, height: d, data: a},
              m >> o
            ),
            Wr(
              {width: s, height: d, data: a},
              {width: s, height: d, data: r},
              m >> o
            );
          var l = u(r);
          if (!Array.isArray(l)) {
            var h = _r(r);
            (l = Tr(0, h, l)), (l = vr(0, Math.floor(h / l) * l, l)).shift();
          }
          return Hr()
            .thresholds(l)
            .size([s, d])(r)
            .map(f);
        }
        function f(i) {
          return (i.value *= Math.pow(2, -2 * o)), i.coordinates.forEach(l), i;
        }
        function l(i) {
          i.forEach(h);
        }
        function h(i) {
          i.forEach(A);
        }
        function A(i) {
          (i[0] = i[0] * Math.pow(2, o) - c),
            (i[1] = i[1] * Math.pow(2, o) - c);
        }
        function O() {
          return (s = (t + 2 * (c = 3 * m)) >> o), (d = (r + 2 * c) >> o), a;
        }
        return (
          (a.x = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : Yr(+n)), a)
              : i;
          }),
          (a.y = function(i) {
            return arguments.length
              ? ((n = 'function' == typeof i ? i : Yr(+i)), a)
              : n;
          }),
          (a.weight = function(i) {
            return arguments.length
              ? ((e = 'function' == typeof i ? i : Yr(+i)), a)
              : e;
          }),
          (a.size = function(i) {
            if (!arguments.length) return [t, r];
            var n = Math.ceil(i[0]),
              e = Math.ceil(i[1]);
            if (!(n >= 0 || n >= 0)) throw new Error('invalid size');
            return (t = n), (r = e), O();
          }),
          (a.cellSize = function(i) {
            if (!arguments.length) return 1 << o;
            if (!((i = +i) >= 1)) throw new Error('invalid cell size');
            return (o = Math.floor(Math.log(i) / Math.LN2)), O();
          }),
          (a.thresholds = function(i) {
            return arguments.length
              ? ((u =
                  'function' == typeof i
                    ? i
                    : Array.isArray(i)
                    ? Yr(Vr.call(i))
                    : Yr(i)),
                a)
              : u;
          }),
          (a.bandwidth = function(i) {
            if (!arguments.length) return Math.sqrt(m * (m + 1));
            if (!((i = +i) >= 0)) throw new Error('invalid bandwidth');
            return (m = Math.round((Math.sqrt(4 * i * i + 1) - 1) / 2)), O();
          }),
          a
        );
      },
      kr = {},
      Jr = {},
      zr = 34,
      qr = 10,
      jr = 13;
    function Zr(i) {
      return new Function(
        'd',
        'return {' +
          i
            .map(function(i, n) {
              return JSON.stringify(i) + ': d[' + n + ']';
            })
            .join(',') +
          '}'
      );
    }
    function $r(i) {
      var n = Object.create(null),
        e = [];
      return (
        i.forEach(function(i) {
          for (var t in i) t in n || e.push((n[t] = t));
        }),
        e
      );
    }
    function im(i, n) {
      var e = i + '',
        t = e.length;
      return t < n ? new Array(n - t + 1).join(0) + e : e;
    }
    function nm(i) {
      var n,
        e = i.getUTCHours(),
        t = i.getUTCMinutes(),
        r = i.getUTCSeconds(),
        m = i.getUTCMilliseconds();
      return isNaN(i)
        ? 'Invalid Date'
        : ((n = i.getUTCFullYear()) < 0
            ? '-' + im(-n, 6)
            : n > 9999
            ? '+' + im(n, 6)
            : im(n, 4)) +
            '-' +
            im(i.getUTCMonth() + 1, 2) +
            '-' +
            im(i.getUTCDate(), 2) +
            (m
              ? 'T' +
                im(e, 2) +
                ':' +
                im(t, 2) +
                ':' +
                im(r, 2) +
                '.' +
                im(m, 3) +
                'Z'
              : r
              ? 'T' + im(e, 2) + ':' + im(t, 2) + ':' + im(r, 2) + 'Z'
              : t || e
              ? 'T' + im(e, 2) + ':' + im(t, 2) + 'Z'
              : '');
    }
    var em = function(i) {
        var n = new RegExp('["' + i + '\n\r]'),
          e = i.charCodeAt(0);
        function t(i, n) {
          var t,
            r = [],
            m = i.length,
            o = 0,
            c = 0,
            s = m <= 0,
            d = !1;
          function u() {
            if (s) return Jr;
            if (d) return (d = !1), kr;
            var n,
              t,
              r = o;
            if (i.charCodeAt(r) === zr) {
              for (
                ;
                (o++ < m && i.charCodeAt(o) !== zr) || i.charCodeAt(++o) === zr;

              );
              return (
                (n = o) >= m
                  ? (s = !0)
                  : (t = i.charCodeAt(o++)) === qr
                  ? (d = !0)
                  : t === jr && ((d = !0), i.charCodeAt(o) === qr && ++o),
                i.slice(r + 1, n - 1).replace(/""/g, '"')
              );
            }
            for (; o < m; ) {
              if ((t = i.charCodeAt((n = o++))) === qr) d = !0;
              else if (t === jr) (d = !0), i.charCodeAt(o) === qr && ++o;
              else if (t !== e) continue;
              return i.slice(r, n);
            }
            return (s = !0), i.slice(r, m);
          }
          for (
            i.charCodeAt(m - 1) === qr && --m,
              i.charCodeAt(m - 1) === jr && --m;
            (t = u()) !== Jr;

          ) {
            for (var a = []; t !== kr && t !== Jr; ) a.push(t), (t = u());
            (n && null == (a = n(a, c++))) || r.push(a);
          }
          return r;
        }
        function r(n, e) {
          return n.map(function(n) {
            return e
              .map(function(i) {
                return o(n[i]);
              })
              .join(i);
          });
        }
        function m(n) {
          return n.map(o).join(i);
        }
        function o(i) {
          return null == i
            ? ''
            : i instanceof Date
            ? nm(i)
            : n.test((i += ''))
            ? '"' + i.replace(/"/g, '""') + '"'
            : i;
        }
        return {
          parse: function(i, n) {
            var e,
              r,
              m = t(i, function(i, t) {
                if (e) return e(i, t - 1);
                (r = i),
                  (e = n
                    ? (function(i, n) {
                        var e = Zr(i);
                        return function(t, r) {
                          return n(e(t), r, i);
                        };
                      })(i, n)
                    : Zr(i));
              });
            return (m.columns = r || []), m;
          },
          parseRows: t,
          format: function(n, e) {
            return (
              null == e && (e = $r(n)),
              [e.map(o).join(i)].concat(r(n, e)).join('\n')
            );
          },
          formatBody: function(i, n) {
            return null == n && (n = $r(i)), r(i, n).join('\n');
          },
          formatRows: function(i) {
            return i.map(m).join('\n');
          },
        };
      },
      tm = em(','),
      rm = tm.parse,
      mm = tm.parseRows,
      om = tm.format,
      cm = tm.formatBody,
      sm = tm.formatRows,
      dm = em('\t'),
      um = dm.parse,
      am = dm.parseRows,
      fm = dm.format,
      lm = dm.formatBody,
      hm = dm.formatRows;
    function Am(i) {
      for (var n in i) {
        var e,
          t = i[n].trim();
        if (t)
          if ('true' === t) t = !0;
          else if ('false' === t) t = !1;
          else if ('NaN' === t) t = NaN;
          else if (isNaN((e = +t))) {
            if (
              !/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/.test(
                t
              )
            )
              continue;
            t = new Date(t);
          } else t = e;
        else t = null;
        i[n] = t;
      }
      return i;
    }
    function Om(i) {
      if (!i.ok) throw new Error(i.status + ' ' + i.statusText);
      return i.blob();
    }
    var pm = function(i, n) {
      return fetch(i, n).then(Om);
    };
    function Sm(i) {
      if (!i.ok) throw new Error(i.status + ' ' + i.statusText);
      return i.arrayBuffer();
    }
    var Mm = function(i, n) {
      return fetch(i, n).then(Sm);
    };
    function Em(i) {
      if (!i.ok) throw new Error(i.status + ' ' + i.statusText);
      return i.text();
    }
    var Lm = function(i, n) {
      return fetch(i, n).then(Em);
    };
    function Dm(i) {
      return function(n, e, t) {
        return (
          2 === arguments.length &&
            'function' == typeof e &&
            ((t = e), (e = void 0)),
          Lm(n, e).then(function(n) {
            return i(n, t);
          })
        );
      };
    }
    function Nm(i, n, e, t) {
      3 === arguments.length &&
        'function' == typeof e &&
        ((t = e), (e = void 0));
      var r = em(i);
      return Lm(n, e).then(function(i) {
        return r.parse(i, t);
      });
    }
    var vm = Dm(rm),
      Cm = Dm(um),
      ym = function(i, n) {
        return new Promise(function(e, t) {
          var r = new Image();
          for (var m in n) r[m] = n[m];
          (r.onerror = t),
            (r.onload = function() {
              e(r);
            }),
            (r.src = i);
        });
      };
    function gm(i) {
      if (!i.ok) throw new Error(i.status + ' ' + i.statusText);
      return i.json();
    }
    var Tm = function(i, n) {
      return fetch(i, n).then(gm);
    };
    function Rm(i) {
      return function(n, e) {
        return Lm(n, e).then(function(n) {
          return new DOMParser().parseFromString(n, i);
        });
      };
    }
    var _m = Rm('application/xml'),
      Vm = Rm('text/html'),
      Bm = Rm('image/svg+xml'),
      bm = function(i, n) {
        var e;
        function t() {
          var t,
            r,
            m = e.length,
            o = 0,
            c = 0;
          for (t = 0; t < m; ++t) (o += (r = e[t]).x), (c += r.y);
          for (o = o / m - i, c = c / m - n, t = 0; t < m; ++t)
            ((r = e[t]).x -= o), (r.y -= c);
        }
        return (
          null == i && (i = 0),
          null == n && (n = 0),
          (t.initialize = function(i) {
            e = i;
          }),
          (t.x = function(n) {
            return arguments.length ? ((i = +n), t) : i;
          }),
          (t.y = function(i) {
            return arguments.length ? ((n = +i), t) : n;
          }),
          t
        );
      },
      Ym = function(i) {
        return function() {
          return i;
        };
      },
      Fm = function() {
        return 1e-6 * (Math.random() - 0.5);
      };
    function Pm(i, n, e, t) {
      if (isNaN(n) || isNaN(e)) return i;
      var r,
        m,
        o,
        c,
        s,
        d,
        u,
        a,
        f,
        l = i._root,
        h = {data: t},
        A = i._x0,
        O = i._y0,
        p = i._x1,
        S = i._y1;
      if (!l) return (i._root = h), i;
      for (; l.length; )
        if (
          ((d = n >= (m = (A + p) / 2)) ? (A = m) : (p = m),
          (u = e >= (o = (O + S) / 2)) ? (O = o) : (S = o),
          (r = l),
          !(l = l[(a = (u << 1) | d)]))
        )
          return (r[a] = h), i;
      if (
        ((c = +i._x.call(null, l.data)),
        (s = +i._y.call(null, l.data)),
        n === c && e === s)
      )
        return (h.next = l), r ? (r[a] = h) : (i._root = h), i;
      do {
        (r = r ? (r[a] = new Array(4)) : (i._root = new Array(4))),
          (d = n >= (m = (A + p) / 2)) ? (A = m) : (p = m),
          (u = e >= (o = (O + S) / 2)) ? (O = o) : (S = o);
      } while ((a = (u << 1) | d) == (f = ((s >= o) << 1) | (c >= m)));
      return (r[f] = l), (r[a] = h), i;
    }
    var Gm = function(i, n, e, t, r) {
      (this.node = i),
        (this.x0 = n),
        (this.y0 = e),
        (this.x1 = t),
        (this.y1 = r);
    };
    function Um(i) {
      return i[0];
    }
    function Im(i) {
      return i[1];
    }
    function Hm(i, n, e) {
      var t = new xm(
        null == n ? Um : n,
        null == e ? Im : e,
        NaN,
        NaN,
        NaN,
        NaN
      );
      return null == i ? t : t.addAll(i);
    }
    function xm(i, n, e, t, r, m) {
      (this._x = i),
        (this._y = n),
        (this._x0 = e),
        (this._y0 = t),
        (this._x1 = r),
        (this._y1 = m),
        (this._root = void 0);
    }
    function Wm(i) {
      for (var n = {data: i.data}, e = n; (i = i.next); )
        e = e.next = {data: i.data};
      return n;
    }
    var wm = (Hm.prototype = xm.prototype);
    function Xm(i) {
      return i.x + i.vx;
    }
    function Qm(i) {
      return i.y + i.vy;
    }
    (wm.copy = function() {
      var i,
        n,
        e = new xm(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        t = this._root;
      if (!t) return e;
      if (!t.length) return (e._root = Wm(t)), e;
      for (i = [{source: t, target: (e._root = new Array(4))}]; (t = i.pop()); )
        for (var r = 0; r < 4; ++r)
          (n = t.source[r]) &&
            (n.length
              ? i.push({source: n, target: (t.target[r] = new Array(4))})
              : (t.target[r] = Wm(n)));
      return e;
    }),
      (wm.add = function(i) {
        var n = +this._x.call(null, i),
          e = +this._y.call(null, i);
        return Pm(this.cover(n, e), n, e, i);
      }),
      (wm.addAll = function(i) {
        var n,
          e,
          t,
          r,
          m = i.length,
          o = new Array(m),
          c = new Array(m),
          s = 1 / 0,
          d = 1 / 0,
          u = -1 / 0,
          a = -1 / 0;
        for (e = 0; e < m; ++e)
          isNaN((t = +this._x.call(null, (n = i[e])))) ||
            isNaN((r = +this._y.call(null, n))) ||
            ((o[e] = t),
            (c[e] = r),
            t < s && (s = t),
            t > u && (u = t),
            r < d && (d = r),
            r > a && (a = r));
        if (s > u || d > a) return this;
        for (this.cover(s, d).cover(u, a), e = 0; e < m; ++e)
          Pm(this, o[e], c[e], i[e]);
        return this;
      }),
      (wm.cover = function(i, n) {
        if (isNaN((i = +i)) || isNaN((n = +n))) return this;
        var e = this._x0,
          t = this._y0,
          r = this._x1,
          m = this._y1;
        if (isNaN(e))
          (r = (e = Math.floor(i)) + 1), (m = (t = Math.floor(n)) + 1);
        else {
          for (
            var o, c, s = r - e, d = this._root;
            e > i || i >= r || t > n || n >= m;

          )
            switch (
              ((c = ((n < t) << 1) | (i < e)),
              ((o = new Array(4))[c] = d),
              (d = o),
              (s *= 2),
              c)
            ) {
              case 0:
                (r = e + s), (m = t + s);
                break;
              case 1:
                (e = r - s), (m = t + s);
                break;
              case 2:
                (r = e + s), (t = m - s);
                break;
              case 3:
                (e = r - s), (t = m - s);
            }
          this._root && this._root.length && (this._root = d);
        }
        return (
          (this._x0 = e), (this._y0 = t), (this._x1 = r), (this._y1 = m), this
        );
      }),
      (wm.data = function() {
        var i = [];
        return (
          this.visit(function(n) {
            if (!n.length)
              do {
                i.push(n.data);
              } while ((n = n.next));
          }),
          i
        );
      }),
      (wm.extent = function(i) {
        return arguments.length
          ? this.cover(+i[0][0], +i[0][1]).cover(+i[1][0], +i[1][1])
          : isNaN(this._x0)
          ? void 0
          : [[this._x0, this._y0], [this._x1, this._y1]];
      }),
      (wm.find = function(i, n, e) {
        var t,
          r,
          m,
          o,
          c,
          s,
          d,
          u = this._x0,
          a = this._y0,
          f = this._x1,
          l = this._y1,
          h = [],
          A = this._root;
        for (
          A && h.push(new Gm(A, u, a, f, l)),
            null == e
              ? (e = 1 / 0)
              : ((u = i - e), (a = n - e), (f = i + e), (l = n + e), (e *= e));
          (s = h.pop());

        )
          if (
            !(
              !(A = s.node) ||
              (r = s.x0) > f ||
              (m = s.y0) > l ||
              (o = s.x1) < u ||
              (c = s.y1) < a
            )
          )
            if (A.length) {
              var O = (r + o) / 2,
                p = (m + c) / 2;
              h.push(
                new Gm(A[3], O, p, o, c),
                new Gm(A[2], r, p, O, c),
                new Gm(A[1], O, m, o, p),
                new Gm(A[0], r, m, O, p)
              ),
                (d = ((n >= p) << 1) | (i >= O)) &&
                  ((s = h[h.length - 1]),
                  (h[h.length - 1] = h[h.length - 1 - d]),
                  (h[h.length - 1 - d] = s));
            } else {
              var S = i - +this._x.call(null, A.data),
                M = n - +this._y.call(null, A.data),
                E = S * S + M * M;
              if (E < e) {
                var L = Math.sqrt((e = E));
                (u = i - L),
                  (a = n - L),
                  (f = i + L),
                  (l = n + L),
                  (t = A.data);
              }
            }
        return t;
      }),
      (wm.remove = function(i) {
        if (
          isNaN((m = +this._x.call(null, i))) ||
          isNaN((o = +this._y.call(null, i)))
        )
          return this;
        var n,
          e,
          t,
          r,
          m,
          o,
          c,
          s,
          d,
          u,
          a,
          f,
          l = this._root,
          h = this._x0,
          A = this._y0,
          O = this._x1,
          p = this._y1;
        if (!l) return this;
        if (l.length)
          for (;;) {
            if (
              ((d = m >= (c = (h + O) / 2)) ? (h = c) : (O = c),
              (u = o >= (s = (A + p) / 2)) ? (A = s) : (p = s),
              (n = l),
              !(l = l[(a = (u << 1) | d)]))
            )
              return this;
            if (!l.length) break;
            (n[(a + 1) & 3] || n[(a + 2) & 3] || n[(a + 3) & 3]) &&
              ((e = n), (f = a));
          }
        for (; l.data !== i; ) if (((t = l), !(l = l.next))) return this;
        return (
          (r = l.next) && delete l.next,
          t
            ? (r ? (t.next = r) : delete t.next, this)
            : n
            ? (r ? (n[a] = r) : delete n[a],
              (l = n[0] || n[1] || n[2] || n[3]) &&
                l === (n[3] || n[2] || n[1] || n[0]) &&
                !l.length &&
                (e ? (e[f] = l) : (this._root = l)),
              this)
            : ((this._root = r), this)
        );
      }),
      (wm.removeAll = function(i) {
        for (var n = 0, e = i.length; n < e; ++n) this.remove(i[n]);
        return this;
      }),
      (wm.root = function() {
        return this._root;
      }),
      (wm.size = function() {
        var i = 0;
        return (
          this.visit(function(n) {
            if (!n.length)
              do {
                ++i;
              } while ((n = n.next));
          }),
          i
        );
      }),
      (wm.visit = function(i) {
        var n,
          e,
          t,
          r,
          m,
          o,
          c = [],
          s = this._root;
        for (
          s && c.push(new Gm(s, this._x0, this._y0, this._x1, this._y1));
          (n = c.pop());

        )
          if (
            !i((s = n.node), (t = n.x0), (r = n.y0), (m = n.x1), (o = n.y1)) &&
            s.length
          ) {
            var d = (t + m) / 2,
              u = (r + o) / 2;
            (e = s[3]) && c.push(new Gm(e, d, u, m, o)),
              (e = s[2]) && c.push(new Gm(e, t, u, d, o)),
              (e = s[1]) && c.push(new Gm(e, d, r, m, u)),
              (e = s[0]) && c.push(new Gm(e, t, r, d, u));
          }
        return this;
      }),
      (wm.visitAfter = function(i) {
        var n,
          e = [],
          t = [];
        for (
          this._root &&
          e.push(new Gm(this._root, this._x0, this._y0, this._x1, this._y1));
          (n = e.pop());

        ) {
          var r = n.node;
          if (r.length) {
            var m,
              o = n.x0,
              c = n.y0,
              s = n.x1,
              d = n.y1,
              u = (o + s) / 2,
              a = (c + d) / 2;
            (m = r[0]) && e.push(new Gm(m, o, c, u, a)),
              (m = r[1]) && e.push(new Gm(m, u, c, s, a)),
              (m = r[2]) && e.push(new Gm(m, o, a, u, d)),
              (m = r[3]) && e.push(new Gm(m, u, a, s, d));
          }
          t.push(n);
        }
        for (; (n = t.pop()); ) i(n.node, n.x0, n.y0, n.x1, n.y1);
        return this;
      }),
      (wm.x = function(i) {
        return arguments.length ? ((this._x = i), this) : this._x;
      }),
      (wm.y = function(i) {
        return arguments.length ? ((this._y = i), this) : this._y;
      });
    var Km = function(i) {
      var n,
        e,
        t = 1,
        r = 1;
      function m() {
        for (var i, m, c, s, d, u, a, f = n.length, l = 0; l < r; ++l)
          for (m = Hm(n, Xm, Qm).visitAfter(o), i = 0; i < f; ++i)
            (c = n[i]),
              (u = e[c.index]),
              (a = u * u),
              (s = c.x + c.vx),
              (d = c.y + c.vy),
              m.visit(h);
        function h(i, n, e, r, m) {
          var o = i.data,
            f = i.r,
            l = u + f;
          if (!o) return n > s + l || r < s - l || e > d + l || m < d - l;
          if (o.index > c.index) {
            var h = s - o.x - o.vx,
              A = d - o.y - o.vy,
              O = h * h + A * A;
            O < l * l &&
              (0 === h && (O += (h = Fm()) * h),
              0 === A && (O += (A = Fm()) * A),
              (O = ((l - (O = Math.sqrt(O))) / O) * t),
              (c.vx += (h *= O) * (l = (f *= f) / (a + f))),
              (c.vy += (A *= O) * l),
              (o.vx -= h * (l = 1 - l)),
              (o.vy -= A * l));
          }
        }
      }
      function o(i) {
        if (i.data) return (i.r = e[i.data.index]);
        for (var n = (i.r = 0); n < 4; ++n)
          i[n] && i[n].r > i.r && (i.r = i[n].r);
      }
      function c() {
        if (n) {
          var t,
            r,
            m = n.length;
          for (e = new Array(m), t = 0; t < m; ++t)
            (r = n[t]), (e[r.index] = +i(r, t, n));
        }
      }
      return (
        'function' != typeof i && (i = Ym(null == i ? 1 : +i)),
        (m.initialize = function(i) {
          (n = i), c();
        }),
        (m.iterations = function(i) {
          return arguments.length ? ((r = +i), m) : r;
        }),
        (m.strength = function(i) {
          return arguments.length ? ((t = +i), m) : t;
        }),
        (m.radius = function(n) {
          return arguments.length
            ? ((i = 'function' == typeof n ? n : Ym(+n)), c(), m)
            : i;
        }),
        m
      );
    };
    function km(i) {
      return i.index;
    }
    function Jm(i, n) {
      var e = i.get(n);
      if (!e) throw new Error('missing: ' + n);
      return e;
    }
    var zm = function(i) {
      var n,
        e,
        t,
        r,
        m,
        o = km,
        c = function(i) {
          return 1 / Math.min(r[i.source.index], r[i.target.index]);
        },
        s = Ym(30),
        d = 1;
      function u(t) {
        for (var r = 0, o = i.length; r < d; ++r)
          for (var c, s, u, a, f, l, h, A = 0; A < o; ++A)
            (s = (c = i[A]).source),
              (a = (u = c.target).x + u.vx - s.x - s.vx || Fm()),
              (f = u.y + u.vy - s.y - s.vy || Fm()),
              (a *= l =
                (((l = Math.sqrt(a * a + f * f)) - e[A]) / l) * t * n[A]),
              (f *= l),
              (u.vx -= a * (h = m[A])),
              (u.vy -= f * h),
              (s.vx += a * (h = 1 - h)),
              (s.vy += f * h);
      }
      function a() {
        if (t) {
          var c,
            s,
            d = t.length,
            u = i.length,
            a = cr(t, o);
          for (c = 0, r = new Array(d); c < u; ++c)
            ((s = i[c]).index = c),
              'object' != typeof s.source && (s.source = Jm(a, s.source)),
              'object' != typeof s.target && (s.target = Jm(a, s.target)),
              (r[s.source.index] = (r[s.source.index] || 0) + 1),
              (r[s.target.index] = (r[s.target.index] || 0) + 1);
          for (c = 0, m = new Array(u); c < u; ++c)
            (s = i[c]),
              (m[c] =
                r[s.source.index] / (r[s.source.index] + r[s.target.index]));
          (n = new Array(u)), f(), (e = new Array(u)), l();
        }
      }
      function f() {
        if (t) for (var e = 0, r = i.length; e < r; ++e) n[e] = +c(i[e], e, i);
      }
      function l() {
        if (t) for (var n = 0, r = i.length; n < r; ++n) e[n] = +s(i[n], n, i);
      }
      return (
        null == i && (i = []),
        (u.initialize = function(i) {
          (t = i), a();
        }),
        (u.links = function(n) {
          return arguments.length ? ((i = n), a(), u) : i;
        }),
        (u.id = function(i) {
          return arguments.length ? ((o = i), u) : o;
        }),
        (u.iterations = function(i) {
          return arguments.length ? ((d = +i), u) : d;
        }),
        (u.strength = function(i) {
          return arguments.length
            ? ((c = 'function' == typeof i ? i : Ym(+i)), f(), u)
            : c;
        }),
        (u.distance = function(i) {
          return arguments.length
            ? ((s = 'function' == typeof i ? i : Ym(+i)), l(), u)
            : s;
        }),
        u
      );
    };
    function qm(i) {
      return i.x;
    }
    function jm(i) {
      return i.y;
    }
    var Zm = 10,
      $m = Math.PI * (3 - Math.sqrt(5)),
      io = function(i) {
        var n,
          e = 1,
          t = 0.001,
          r = 1 - Math.pow(t, 1 / 300),
          m = 0,
          o = 0.6,
          c = cr(),
          s = In(u),
          d = fi('tick', 'end');
        function u() {
          a(), d.call('tick', n), e < t && (s.stop(), d.call('end', n));
        }
        function a(t) {
          var s,
            d,
            u = i.length;
          void 0 === t && (t = 1);
          for (var a = 0; a < t; ++a)
            for (
              e += (m - e) * r,
                c.each(function(i) {
                  i(e);
                }),
                s = 0;
              s < u;
              ++s
            )
              null == (d = i[s]).fx
                ? (d.x += d.vx *= o)
                : ((d.x = d.fx), (d.vx = 0)),
                null == d.fy ? (d.y += d.vy *= o) : ((d.y = d.fy), (d.vy = 0));
          return n;
        }
        function f() {
          for (var n, e = 0, t = i.length; e < t; ++e) {
            if (
              (((n = i[e]).index = e),
              null != n.fx && (n.x = n.fx),
              null != n.fy && (n.y = n.fy),
              isNaN(n.x) || isNaN(n.y))
            ) {
              var r = Zm * Math.sqrt(e),
                m = e * $m;
              (n.x = r * Math.cos(m)), (n.y = r * Math.sin(m));
            }
            (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
          }
        }
        function l(n) {
          return n.initialize && n.initialize(i), n;
        }
        return (
          null == i && (i = []),
          f(),
          (n = {
            tick: a,
            restart: function() {
              return s.restart(u), n;
            },
            stop: function() {
              return s.stop(), n;
            },
            nodes: function(e) {
              return arguments.length ? ((i = e), f(), c.each(l), n) : i;
            },
            alpha: function(i) {
              return arguments.length ? ((e = +i), n) : e;
            },
            alphaMin: function(i) {
              return arguments.length ? ((t = +i), n) : t;
            },
            alphaDecay: function(i) {
              return arguments.length ? ((r = +i), n) : +r;
            },
            alphaTarget: function(i) {
              return arguments.length ? ((m = +i), n) : m;
            },
            velocityDecay: function(i) {
              return arguments.length ? ((o = 1 - i), n) : 1 - o;
            },
            force: function(i, e) {
              return arguments.length > 1
                ? (null == e ? c.remove(i) : c.set(i, l(e)), n)
                : c.get(i);
            },
            find: function(n, e, t) {
              var r,
                m,
                o,
                c,
                s,
                d = 0,
                u = i.length;
              for (null == t ? (t = 1 / 0) : (t *= t), d = 0; d < u; ++d)
                (o = (r = n - (c = i[d]).x) * r + (m = e - c.y) * m) < t &&
                  ((s = c), (t = o));
              return s;
            },
            on: function(i, e) {
              return arguments.length > 1 ? (d.on(i, e), n) : d.on(i);
            },
          })
        );
      },
      no = function() {
        var i,
          n,
          e,
          t,
          r = Ym(-30),
          m = 1,
          o = 1 / 0,
          c = 0.81;
        function s(t) {
          var r,
            m = i.length,
            o = Hm(i, qm, jm).visitAfter(u);
          for (e = t, r = 0; r < m; ++r) (n = i[r]), o.visit(a);
        }
        function d() {
          if (i) {
            var n,
              e,
              m = i.length;
            for (t = new Array(m), n = 0; n < m; ++n)
              (e = i[n]), (t[e.index] = +r(e, n, i));
          }
        }
        function u(i) {
          var n,
            e,
            r,
            m,
            o,
            c = 0,
            s = 0;
          if (i.length) {
            for (r = m = o = 0; o < 4; ++o)
              (n = i[o]) &&
                (e = Math.abs(n.value)) &&
                ((c += n.value), (s += e), (r += e * n.x), (m += e * n.y));
            (i.x = r / s), (i.y = m / s);
          } else {
            ((n = i).x = n.data.x), (n.y = n.data.y);
            do {
              c += t[n.data.index];
            } while ((n = n.next));
          }
          i.value = c;
        }
        function a(i, r, s, d) {
          if (!i.value) return !0;
          var u = i.x - n.x,
            a = i.y - n.y,
            f = d - r,
            l = u * u + a * a;
          if ((f * f) / c < l)
            return (
              l < o &&
                (0 === u && (l += (u = Fm()) * u),
                0 === a && (l += (a = Fm()) * a),
                l < m && (l = Math.sqrt(m * l)),
                (n.vx += (u * i.value * e) / l),
                (n.vy += (a * i.value * e) / l)),
              !0
            );
          if (!(i.length || l >= o)) {
            (i.data !== n || i.next) &&
              (0 === u && (l += (u = Fm()) * u),
              0 === a && (l += (a = Fm()) * a),
              l < m && (l = Math.sqrt(m * l)));
            do {
              i.data !== n &&
                ((f = (t[i.data.index] * e) / l),
                (n.vx += u * f),
                (n.vy += a * f));
            } while ((i = i.next));
          }
        }
        return (
          (s.initialize = function(n) {
            (i = n), d();
          }),
          (s.strength = function(i) {
            return arguments.length
              ? ((r = 'function' == typeof i ? i : Ym(+i)), d(), s)
              : r;
          }),
          (s.distanceMin = function(i) {
            return arguments.length ? ((m = i * i), s) : Math.sqrt(m);
          }),
          (s.distanceMax = function(i) {
            return arguments.length ? ((o = i * i), s) : Math.sqrt(o);
          }),
          (s.theta = function(i) {
            return arguments.length ? ((c = i * i), s) : Math.sqrt(c);
          }),
          s
        );
      },
      eo = function(i, n, e) {
        var t,
          r,
          m,
          o = Ym(0.1);
        function c(i) {
          for (var o = 0, c = t.length; o < c; ++o) {
            var s = t[o],
              d = s.x - n || 1e-6,
              u = s.y - e || 1e-6,
              a = Math.sqrt(d * d + u * u),
              f = ((m[o] - a) * r[o] * i) / a;
            (s.vx += d * f), (s.vy += u * f);
          }
        }
        function s() {
          if (t) {
            var n,
              e = t.length;
            for (r = new Array(e), m = new Array(e), n = 0; n < e; ++n)
              (m[n] = +i(t[n], n, t)),
                (r[n] = isNaN(m[n]) ? 0 : +o(t[n], n, t));
          }
        }
        return (
          'function' != typeof i && (i = Ym(+i)),
          null == n && (n = 0),
          null == e && (e = 0),
          (c.initialize = function(i) {
            (t = i), s();
          }),
          (c.strength = function(i) {
            return arguments.length
              ? ((o = 'function' == typeof i ? i : Ym(+i)), s(), c)
              : o;
          }),
          (c.radius = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : Ym(+n)), s(), c)
              : i;
          }),
          (c.x = function(i) {
            return arguments.length ? ((n = +i), c) : n;
          }),
          (c.y = function(i) {
            return arguments.length ? ((e = +i), c) : e;
          }),
          c
        );
      },
      to = function(i) {
        var n,
          e,
          t,
          r = Ym(0.1);
        function m(i) {
          for (var r, m = 0, o = n.length; m < o; ++m)
            (r = n[m]).vx += (t[m] - r.x) * e[m] * i;
        }
        function o() {
          if (n) {
            var m,
              o = n.length;
            for (e = new Array(o), t = new Array(o), m = 0; m < o; ++m)
              e[m] = isNaN((t[m] = +i(n[m], m, n))) ? 0 : +r(n[m], m, n);
          }
        }
        return (
          'function' != typeof i && (i = Ym(null == i ? 0 : +i)),
          (m.initialize = function(i) {
            (n = i), o();
          }),
          (m.strength = function(i) {
            return arguments.length
              ? ((r = 'function' == typeof i ? i : Ym(+i)), o(), m)
              : r;
          }),
          (m.x = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : Ym(+n)), o(), m)
              : i;
          }),
          m
        );
      },
      ro = function(i) {
        var n,
          e,
          t,
          r = Ym(0.1);
        function m(i) {
          for (var r, m = 0, o = n.length; m < o; ++m)
            (r = n[m]).vy += (t[m] - r.y) * e[m] * i;
        }
        function o() {
          if (n) {
            var m,
              o = n.length;
            for (e = new Array(o), t = new Array(o), m = 0; m < o; ++m)
              e[m] = isNaN((t[m] = +i(n[m], m, n))) ? 0 : +r(n[m], m, n);
          }
        }
        return (
          'function' != typeof i && (i = Ym(null == i ? 0 : +i)),
          (m.initialize = function(i) {
            (n = i), o();
          }),
          (m.strength = function(i) {
            return arguments.length
              ? ((r = 'function' == typeof i ? i : Ym(+i)), o(), m)
              : r;
          }),
          (m.y = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : Ym(+n)), o(), m)
              : i;
          }),
          m
        );
      },
      mo = function(i, n) {
        if (
          (e = (i = n ? i.toExponential(n - 1) : i.toExponential()).indexOf(
            'e'
          )) < 0
        )
          return null;
        var e,
          t = i.slice(0, e);
        return [t.length > 1 ? t[0] + t.slice(2) : t, +i.slice(e + 1)];
      },
      oo = function(i) {
        return (i = mo(Math.abs(i))) ? i[1] : NaN;
      },
      co = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function so(i) {
      return new uo(i);
    }
    function uo(i) {
      if (!(n = co.exec(i))) throw new Error('invalid format: ' + i);
      var n;
      (this.fill = n[1] || ' '),
        (this.align = n[2] || '>'),
        (this.sign = n[3] || '-'),
        (this.symbol = n[4] || ''),
        (this.zero = !!n[5]),
        (this.width = n[6] && +n[6]),
        (this.comma = !!n[7]),
        (this.precision = n[8] && +n[8].slice(1)),
        (this.trim = !!n[9]),
        (this.type = n[10] || '');
    }
    (so.prototype = uo.prototype),
      (uo.prototype.toString = function() {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? '0' : '') +
          (null == this.width ? '' : Math.max(1, 0 | this.width)) +
          (this.comma ? ',' : '') +
          (null == this.precision
            ? ''
            : '.' + Math.max(0, 0 | this.precision)) +
          (this.trim ? '~' : '') +
          this.type
        );
      });
    var ao,
      fo,
      lo,
      ho,
      Ao = function(i) {
        i: for (var n, e = i.length, t = 1, r = -1; t < e; ++t)
          switch (i[t]) {
            case '.':
              r = n = t;
              break;
            case '0':
              0 === r && (r = t), (n = t);
              break;
            default:
              if (r > 0) {
                if (!+i[t]) break i;
                r = 0;
              }
          }
        return r > 0 ? i.slice(0, r) + i.slice(n + 1) : i;
      },
      Oo = function(i, n) {
        var e = mo(i, n);
        if (!e) return i + '';
        var t = e[0],
          r = e[1];
        return r < 0
          ? '0.' + new Array(-r).join('0') + t
          : t.length > r + 1
          ? t.slice(0, r + 1) + '.' + t.slice(r + 1)
          : t + new Array(r - t.length + 2).join('0');
      },
      po = {
        '%': function(i, n) {
          return (100 * i).toFixed(n);
        },
        b: function(i) {
          return Math.round(i).toString(2);
        },
        c: function(i) {
          return i + '';
        },
        d: function(i) {
          return Math.round(i).toString(10);
        },
        e: function(i, n) {
          return i.toExponential(n);
        },
        f: function(i, n) {
          return i.toFixed(n);
        },
        g: function(i, n) {
          return i.toPrecision(n);
        },
        o: function(i) {
          return Math.round(i).toString(8);
        },
        p: function(i, n) {
          return Oo(100 * i, n);
        },
        r: Oo,
        s: function(i, n) {
          var e = mo(i, n);
          if (!e) return i + '';
          var t = e[0],
            r = e[1],
            m = r - (ao = 3 * Math.max(-8, Math.min(8, Math.floor(r / 3)))) + 1,
            o = t.length;
          return m === o
            ? t
            : m > o
            ? t + new Array(m - o + 1).join('0')
            : m > 0
            ? t.slice(0, m) + '.' + t.slice(m)
            : '0.' +
              new Array(1 - m).join('0') +
              mo(i, Math.max(0, n + m - 1))[0];
        },
        X: function(i) {
          return Math.round(i)
            .toString(16)
            .toUpperCase();
        },
        x: function(i) {
          return Math.round(i).toString(16);
        },
      },
      So = function(i) {
        return i;
      },
      Mo = [
        'y',
        'z',
        'a',
        'f',
        'p',
        'n',
        'µ',
        'm',
        '',
        'k',
        'M',
        'G',
        'T',
        'P',
        'E',
        'Z',
        'Y',
      ],
      Eo = function(i) {
        var n,
          e,
          t =
            i.grouping && i.thousands
              ? ((n = i.grouping),
                (e = i.thousands),
                function(i, t) {
                  for (
                    var r = i.length, m = [], o = 0, c = n[0], s = 0;
                    r > 0 &&
                    c > 0 &&
                    (s + c + 1 > t && (c = Math.max(1, t - s)),
                    m.push(i.substring((r -= c), r + c)),
                    !((s += c + 1) > t));

                  )
                    c = n[(o = (o + 1) % n.length)];
                  return m.reverse().join(e);
                })
              : So,
          r = i.currency,
          m = i.decimal,
          o = i.numerals
            ? (function(i) {
                return function(n) {
                  return n.replace(/[0-9]/g, function(n) {
                    return i[+n];
                  });
                };
              })(i.numerals)
            : So,
          c = i.percent || '%';
        function s(i) {
          var n = (i = so(i)).fill,
            e = i.align,
            s = i.sign,
            d = i.symbol,
            u = i.zero,
            a = i.width,
            f = i.comma,
            l = i.precision,
            h = i.trim,
            A = i.type;
          'n' === A
            ? ((f = !0), (A = 'g'))
            : po[A] || (null == l && (l = 12), (h = !0), (A = 'g')),
            (u || ('0' === n && '=' === e)) && ((u = !0), (n = '0'), (e = '='));
          var O =
              '$' === d
                ? r[0]
                : '#' === d && /[boxX]/.test(A)
                ? '0' + A.toLowerCase()
                : '',
            p = '$' === d ? r[1] : /[%p]/.test(A) ? c : '',
            S = po[A],
            M = /[defgprs%]/.test(A);
          function E(i) {
            var r,
              c,
              d,
              E = O,
              L = p;
            if ('c' === A) (L = S(i) + L), (i = '');
            else {
              var D = (i = +i) < 0;
              if (
                ((i = S(Math.abs(i), l)),
                h && (i = Ao(i)),
                D && 0 == +i && (D = !1),
                (E =
                  (D
                    ? '(' === s
                      ? s
                      : '-'
                    : '-' === s || '(' === s
                    ? ''
                    : s) + E),
                (L =
                  ('s' === A ? Mo[8 + ao / 3] : '') +
                  L +
                  (D && '(' === s ? ')' : '')),
                M)
              )
                for (r = -1, c = i.length; ++r < c; )
                  if (48 > (d = i.charCodeAt(r)) || d > 57) {
                    (L = (46 === d ? m + i.slice(r + 1) : i.slice(r)) + L),
                      (i = i.slice(0, r));
                    break;
                  }
            }
            f && !u && (i = t(i, 1 / 0));
            var N = E.length + i.length + L.length,
              v = N < a ? new Array(a - N + 1).join(n) : '';
            switch (
              (f &&
                u &&
                ((i = t(v + i, v.length ? a - L.length : 1 / 0)), (v = '')),
              e)
            ) {
              case '<':
                i = E + i + L + v;
                break;
              case '=':
                i = E + v + i + L;
                break;
              case '^':
                i = v.slice(0, (N = v.length >> 1)) + E + i + L + v.slice(N);
                break;
              default:
                i = v + E + i + L;
            }
            return o(i);
          }
          return (
            (l =
              null == l
                ? 6
                : /[gprs]/.test(A)
                ? Math.max(1, Math.min(21, l))
                : Math.max(0, Math.min(20, l))),
            (E.toString = function() {
              return i + '';
            }),
            E
          );
        }
        return {
          format: s,
          formatPrefix: function(i, n) {
            var e = s((((i = so(i)).type = 'f'), i)),
              t = 3 * Math.max(-8, Math.min(8, Math.floor(oo(n) / 3))),
              r = Math.pow(10, -t),
              m = Mo[8 + t / 3];
            return function(i) {
              return e(r * i) + m;
            };
          },
        };
      };
    function Lo(i) {
      return (fo = Eo(i)), (lo = fo.format), (ho = fo.formatPrefix), fo;
    }
    Lo({decimal: '.', thousands: ',', grouping: [3], currency: ['$', '']});
    var Do = function(i) {
        return Math.max(0, -oo(Math.abs(i)));
      },
      No = function(i, n) {
        return Math.max(
          0,
          3 * Math.max(-8, Math.min(8, Math.floor(oo(n) / 3))) - oo(Math.abs(i))
        );
      },
      vo = function(i, n) {
        return (
          (i = Math.abs(i)),
          (n = Math.abs(n) - i),
          Math.max(0, oo(n) - oo(i)) + 1
        );
      },
      Co = function() {
        return new yo();
      };
    function yo() {
      this.reset();
    }
    yo.prototype = {
      constructor: yo,
      reset: function() {
        this.s = this.t = 0;
      },
      add: function(i) {
        To(go, i, this.t),
          To(this, go.s, this.s),
          this.s ? (this.t += go.t) : (this.s = go.t);
      },
      valueOf: function() {
        return this.s;
      },
    };
    var go = new yo();
    function To(i, n, e) {
      var t = (i.s = n + e),
        r = t - n,
        m = t - r;
      i.t = n - m + (e - r);
    }
    var Ro = 1e-6,
      _o = 1e-12,
      Vo = Math.PI,
      Bo = Vo / 2,
      bo = Vo / 4,
      Yo = 2 * Vo,
      Fo = 180 / Vo,
      Po = Vo / 180,
      Go = Math.abs,
      Uo = Math.atan,
      Io = Math.atan2,
      Ho = Math.cos,
      xo = Math.ceil,
      Wo = Math.exp,
      wo = (Math.floor, Math.log),
      Xo = Math.pow,
      Qo = Math.sin,
      Ko =
        Math.sign ||
        function(i) {
          return i > 0 ? 1 : i < 0 ? -1 : 0;
        },
      ko = Math.sqrt,
      Jo = Math.tan;
    function zo(i) {
      return i > 1 ? 0 : i < -1 ? Vo : Math.acos(i);
    }
    function qo(i) {
      return i > 1 ? Bo : i < -1 ? -Bo : Math.asin(i);
    }
    function jo(i) {
      return (i = Qo(i / 2)) * i;
    }
    function Zo() {}
    function $o(i, n) {
      i && nc.hasOwnProperty(i.type) && nc[i.type](i, n);
    }
    var ic = {
        Feature: function(i, n) {
          $o(i.geometry, n);
        },
        FeatureCollection: function(i, n) {
          for (var e = i.features, t = -1, r = e.length; ++t < r; )
            $o(e[t].geometry, n);
        },
      },
      nc = {
        Sphere: function(i, n) {
          n.sphere();
        },
        Point: function(i, n) {
          (i = i.coordinates), n.point(i[0], i[1], i[2]);
        },
        MultiPoint: function(i, n) {
          for (var e = i.coordinates, t = -1, r = e.length; ++t < r; )
            (i = e[t]), n.point(i[0], i[1], i[2]);
        },
        LineString: function(i, n) {
          ec(i.coordinates, n, 0);
        },
        MultiLineString: function(i, n) {
          for (var e = i.coordinates, t = -1, r = e.length; ++t < r; )
            ec(e[t], n, 0);
        },
        Polygon: function(i, n) {
          tc(i.coordinates, n);
        },
        MultiPolygon: function(i, n) {
          for (var e = i.coordinates, t = -1, r = e.length; ++t < r; )
            tc(e[t], n);
        },
        GeometryCollection: function(i, n) {
          for (var e = i.geometries, t = -1, r = e.length; ++t < r; )
            $o(e[t], n);
        },
      };
    function ec(i, n, e) {
      var t,
        r = -1,
        m = i.length - e;
      for (n.lineStart(); ++r < m; ) (t = i[r]), n.point(t[0], t[1], t[2]);
      n.lineEnd();
    }
    function tc(i, n) {
      var e = -1,
        t = i.length;
      for (n.polygonStart(); ++e < t; ) ec(i[e], n, 1);
      n.polygonEnd();
    }
    var rc,
      mc,
      oc,
      cc,
      sc,
      dc = function(i, n) {
        i && ic.hasOwnProperty(i.type) ? ic[i.type](i, n) : $o(i, n);
      },
      uc = Co(),
      ac = Co(),
      fc = {
        point: Zo,
        lineStart: Zo,
        lineEnd: Zo,
        polygonStart: function() {
          uc.reset(), (fc.lineStart = lc), (fc.lineEnd = hc);
        },
        polygonEnd: function() {
          var i = +uc;
          ac.add(i < 0 ? Yo + i : i),
            (this.lineStart = this.lineEnd = this.point = Zo);
        },
        sphere: function() {
          ac.add(Yo);
        },
      };
    function lc() {
      fc.point = Ac;
    }
    function hc() {
      Oc(rc, mc);
    }
    function Ac(i, n) {
      (fc.point = Oc),
        (rc = i),
        (mc = n),
        (oc = i *= Po),
        (cc = Ho((n = (n *= Po) / 2 + bo))),
        (sc = Qo(n));
    }
    function Oc(i, n) {
      var e = (i *= Po) - oc,
        t = e >= 0 ? 1 : -1,
        r = t * e,
        m = Ho((n = (n *= Po) / 2 + bo)),
        o = Qo(n),
        c = sc * o,
        s = cc * m + c * Ho(r),
        d = c * t * Qo(r);
      uc.add(Io(d, s)), (oc = i), (cc = m), (sc = o);
    }
    var pc = function(i) {
      return ac.reset(), dc(i, fc), 2 * ac;
    };
    function Sc(i) {
      return [Io(i[1], i[0]), qo(i[2])];
    }
    function Mc(i) {
      var n = i[0],
        e = i[1],
        t = Ho(e);
      return [t * Ho(n), t * Qo(n), Qo(e)];
    }
    function Ec(i, n) {
      return i[0] * n[0] + i[1] * n[1] + i[2] * n[2];
    }
    function Lc(i, n) {
      return [
        i[1] * n[2] - i[2] * n[1],
        i[2] * n[0] - i[0] * n[2],
        i[0] * n[1] - i[1] * n[0],
      ];
    }
    function Dc(i, n) {
      (i[0] += n[0]), (i[1] += n[1]), (i[2] += n[2]);
    }
    function Nc(i, n) {
      return [i[0] * n, i[1] * n, i[2] * n];
    }
    function vc(i) {
      var n = ko(i[0] * i[0] + i[1] * i[1] + i[2] * i[2]);
      (i[0] /= n), (i[1] /= n), (i[2] /= n);
    }
    var Cc,
      yc,
      gc,
      Tc,
      Rc,
      _c,
      Vc,
      Bc,
      bc,
      Yc,
      Fc = Co(),
      Pc = {
        point: Gc,
        lineStart: Ic,
        lineEnd: Hc,
        polygonStart: function() {
          (Pc.point = xc),
            (Pc.lineStart = Wc),
            (Pc.lineEnd = wc),
            Fc.reset(),
            fc.polygonStart();
        },
        polygonEnd: function() {
          fc.polygonEnd(),
            (Pc.point = Gc),
            (Pc.lineStart = Ic),
            (Pc.lineEnd = Hc),
            uc < 0
              ? ((Cc = -(gc = 180)), (yc = -(Tc = 90)))
              : Fc > Ro
              ? (Tc = 90)
              : Fc < -Ro && (yc = -90),
            (Yc[0] = Cc),
            (Yc[1] = gc);
        },
        sphere: function() {
          (Cc = -(gc = 180)), (yc = -(Tc = 90));
        },
      };
    function Gc(i, n) {
      bc.push((Yc = [(Cc = i), (gc = i)])),
        n < yc && (yc = n),
        n > Tc && (Tc = n);
    }
    function Uc(i, n) {
      var e = Mc([i * Po, n * Po]);
      if (Bc) {
        var t = Lc(Bc, e),
          r = Lc([t[1], -t[0], 0], t);
        vc(r), (r = Sc(r));
        var m,
          o = i - Rc,
          c = o > 0 ? 1 : -1,
          s = r[0] * Fo * c,
          d = Go(o) > 180;
        d ^ (c * Rc < s && s < c * i)
          ? (m = r[1] * Fo) > Tc && (Tc = m)
          : d ^ (c * Rc < (s = ((s + 360) % 360) - 180) && s < c * i)
          ? (m = -r[1] * Fo) < yc && (yc = m)
          : (n < yc && (yc = n), n > Tc && (Tc = n)),
          d
            ? i < Rc
              ? Xc(Cc, i) > Xc(Cc, gc) && (gc = i)
              : Xc(i, gc) > Xc(Cc, gc) && (Cc = i)
            : gc >= Cc
            ? (i < Cc && (Cc = i), i > gc && (gc = i))
            : i > Rc
            ? Xc(Cc, i) > Xc(Cc, gc) && (gc = i)
            : Xc(i, gc) > Xc(Cc, gc) && (Cc = i);
      } else bc.push((Yc = [(Cc = i), (gc = i)]));
      n < yc && (yc = n), n > Tc && (Tc = n), (Bc = e), (Rc = i);
    }
    function Ic() {
      Pc.point = Uc;
    }
    function Hc() {
      (Yc[0] = Cc), (Yc[1] = gc), (Pc.point = Gc), (Bc = null);
    }
    function xc(i, n) {
      if (Bc) {
        var e = i - Rc;
        Fc.add(Go(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
      } else (_c = i), (Vc = n);
      fc.point(i, n), Uc(i, n);
    }
    function Wc() {
      fc.lineStart();
    }
    function wc() {
      xc(_c, Vc),
        fc.lineEnd(),
        Go(Fc) > Ro && (Cc = -(gc = 180)),
        (Yc[0] = Cc),
        (Yc[1] = gc),
        (Bc = null);
    }
    function Xc(i, n) {
      return (n -= i) < 0 ? n + 360 : n;
    }
    function Qc(i, n) {
      return i[0] - n[0];
    }
    function Kc(i, n) {
      return i[0] <= i[1] ? i[0] <= n && n <= i[1] : n < i[0] || i[1] < n;
    }
    var kc,
      Jc,
      zc,
      qc,
      jc,
      Zc,
      $c,
      is,
      ns,
      es,
      ts,
      rs,
      ms,
      os,
      cs,
      ss,
      ds = function(i) {
        var n, e, t, r, m, o, c;
        if (
          ((Tc = gc = -(Cc = yc = 1 / 0)),
          (bc = []),
          dc(i, Pc),
          (e = bc.length))
        ) {
          for (bc.sort(Qc), n = 1, m = [(t = bc[0])]; n < e; ++n)
            Kc(t, (r = bc[n])[0]) || Kc(t, r[1])
              ? (Xc(t[0], r[1]) > Xc(t[0], t[1]) && (t[1] = r[1]),
                Xc(r[0], t[1]) > Xc(t[0], t[1]) && (t[0] = r[0]))
              : m.push((t = r));
          for (o = -1 / 0, n = 0, t = m[(e = m.length - 1)]; n <= e; t = r, ++n)
            (r = m[n]),
              (c = Xc(t[1], r[0])) > o && ((o = c), (Cc = r[0]), (gc = t[1]));
        }
        return (
          (bc = Yc = null),
          Cc === 1 / 0 || yc === 1 / 0
            ? [[NaN, NaN], [NaN, NaN]]
            : [[Cc, yc], [gc, Tc]]
        );
      },
      us = {
        sphere: Zo,
        point: as,
        lineStart: ls,
        lineEnd: Os,
        polygonStart: function() {
          (us.lineStart = ps), (us.lineEnd = Ss);
        },
        polygonEnd: function() {
          (us.lineStart = ls), (us.lineEnd = Os);
        },
      };
    function as(i, n) {
      i *= Po;
      var e = Ho((n *= Po));
      fs(e * Ho(i), e * Qo(i), Qo(n));
    }
    function fs(i, n, e) {
      (zc += (i - zc) / ++kc), (qc += (n - qc) / kc), (jc += (e - jc) / kc);
    }
    function ls() {
      us.point = hs;
    }
    function hs(i, n) {
      i *= Po;
      var e = Ho((n *= Po));
      (os = e * Ho(i)),
        (cs = e * Qo(i)),
        (ss = Qo(n)),
        (us.point = As),
        fs(os, cs, ss);
    }
    function As(i, n) {
      i *= Po;
      var e = Ho((n *= Po)),
        t = e * Ho(i),
        r = e * Qo(i),
        m = Qo(n),
        o = Io(
          ko(
            (o = cs * m - ss * r) * o +
              (o = ss * t - os * m) * o +
              (o = os * r - cs * t) * o
          ),
          os * t + cs * r + ss * m
        );
      (Jc += o),
        (Zc += o * (os + (os = t))),
        ($c += o * (cs + (cs = r))),
        (is += o * (ss + (ss = m))),
        fs(os, cs, ss);
    }
    function Os() {
      us.point = as;
    }
    function ps() {
      us.point = Ms;
    }
    function Ss() {
      Es(rs, ms), (us.point = as);
    }
    function Ms(i, n) {
      (rs = i), (ms = n), (i *= Po), (n *= Po), (us.point = Es);
      var e = Ho(n);
      (os = e * Ho(i)), (cs = e * Qo(i)), (ss = Qo(n)), fs(os, cs, ss);
    }
    function Es(i, n) {
      i *= Po;
      var e = Ho((n *= Po)),
        t = e * Ho(i),
        r = e * Qo(i),
        m = Qo(n),
        o = cs * m - ss * r,
        c = ss * t - os * m,
        s = os * r - cs * t,
        d = ko(o * o + c * c + s * s),
        u = qo(d),
        a = d && -u / d;
      (ns += a * o),
        (es += a * c),
        (ts += a * s),
        (Jc += u),
        (Zc += u * (os + (os = t))),
        ($c += u * (cs + (cs = r))),
        (is += u * (ss + (ss = m))),
        fs(os, cs, ss);
    }
    var Ls = function(i) {
        (kc = Jc = zc = qc = jc = Zc = $c = is = ns = es = ts = 0), dc(i, us);
        var n = ns,
          e = es,
          t = ts,
          r = n * n + e * e + t * t;
        return r < _o &&
          ((n = Zc),
          (e = $c),
          (t = is),
          Jc < Ro && ((n = zc), (e = qc), (t = jc)),
          (r = n * n + e * e + t * t) < _o)
          ? [NaN, NaN]
          : [Io(e, n) * Fo, qo(t / ko(r)) * Fo];
      },
      Ds = function(i) {
        return function() {
          return i;
        };
      },
      Ns = function(i, n) {
        function e(e, t) {
          return (e = i(e, t)), n(e[0], e[1]);
        }
        return (
          i.invert &&
            n.invert &&
            (e.invert = function(e, t) {
              return (e = n.invert(e, t)) && i.invert(e[0], e[1]);
            }),
          e
        );
      };
    function vs(i, n) {
      return [Go(i) > Vo ? i + Math.round(-i / Yo) * Yo : i, n];
    }
    function Cs(i, n, e) {
      return (i %= Yo)
        ? n || e
          ? Ns(gs(i), Ts(n, e))
          : gs(i)
        : n || e
        ? Ts(n, e)
        : vs;
    }
    function ys(i) {
      return function(n, e) {
        return [(n += i) > Vo ? n - Yo : n < -Vo ? n + Yo : n, e];
      };
    }
    function gs(i) {
      var n = ys(i);
      return (n.invert = ys(-i)), n;
    }
    function Ts(i, n) {
      var e = Ho(i),
        t = Qo(i),
        r = Ho(n),
        m = Qo(n);
      function o(i, n) {
        var o = Ho(n),
          c = Ho(i) * o,
          s = Qo(i) * o,
          d = Qo(n),
          u = d * e + c * t;
        return [Io(s * r - u * m, c * e - d * t), qo(u * r + s * m)];
      }
      return (
        (o.invert = function(i, n) {
          var o = Ho(n),
            c = Ho(i) * o,
            s = Qo(i) * o,
            d = Qo(n),
            u = d * r - s * m;
          return [Io(s * r + d * m, c * e + u * t), qo(u * e - c * t)];
        }),
        o
      );
    }
    vs.invert = vs;
    var Rs = function(i) {
      function n(n) {
        return ((n = i(n[0] * Po, n[1] * Po))[0] *= Fo), (n[1] *= Fo), n;
      }
      return (
        (i = Cs(i[0] * Po, i[1] * Po, i.length > 2 ? i[2] * Po : 0)),
        (n.invert = function(n) {
          return (
            ((n = i.invert(n[0] * Po, n[1] * Po))[0] *= Fo), (n[1] *= Fo), n
          );
        }),
        n
      );
    };
    function _s(i, n, e, t, r, m) {
      if (e) {
        var o = Ho(n),
          c = Qo(n),
          s = t * e;
        null == r
          ? ((r = n + t * Yo), (m = n - s / 2))
          : ((r = Vs(o, r)),
            (m = Vs(o, m)),
            (t > 0 ? r < m : r > m) && (r += t * Yo));
        for (var d, u = r; t > 0 ? u > m : u < m; u -= s)
          (d = Sc([o, -c * Ho(u), -c * Qo(u)])), i.point(d[0], d[1]);
      }
    }
    function Vs(i, n) {
      ((n = Mc(n))[0] -= i), vc(n);
      var e = zo(-n[1]);
      return ((-n[2] < 0 ? -e : e) + Yo - Ro) % Yo;
    }
    var Bs = function() {
        var i,
          n,
          e = Ds([0, 0]),
          t = Ds(90),
          r = Ds(6),
          m = {
            point: function(e, t) {
              i.push((e = n(e, t))), (e[0] *= Fo), (e[1] *= Fo);
            },
          };
        function o() {
          var o = e.apply(this, arguments),
            c = t.apply(this, arguments) * Po,
            s = r.apply(this, arguments) * Po;
          return (
            (i = []),
            (n = Cs(-o[0] * Po, -o[1] * Po, 0).invert),
            _s(m, c, s, 1),
            (o = {type: 'Polygon', coordinates: [i]}),
            (i = n = null),
            o
          );
        }
        return (
          (o.center = function(i) {
            return arguments.length
              ? ((e = 'function' == typeof i ? i : Ds([+i[0], +i[1]])), o)
              : e;
          }),
          (o.radius = function(i) {
            return arguments.length
              ? ((t = 'function' == typeof i ? i : Ds(+i)), o)
              : t;
          }),
          (o.precision = function(i) {
            return arguments.length
              ? ((r = 'function' == typeof i ? i : Ds(+i)), o)
              : r;
          }),
          o
        );
      },
      bs = function() {
        var i,
          n = [];
        return {
          point: function(n, e) {
            i.push([n, e]);
          },
          lineStart: function() {
            n.push((i = []));
          },
          lineEnd: Zo,
          rejoin: function() {
            n.length > 1 && n.push(n.pop().concat(n.shift()));
          },
          result: function() {
            var e = n;
            return (n = []), (i = null), e;
          },
        };
      },
      Ys = function(i, n) {
        return Go(i[0] - n[0]) < Ro && Go(i[1] - n[1]) < Ro;
      };
    function Fs(i, n, e, t) {
      (this.x = i),
        (this.z = n),
        (this.o = e),
        (this.e = t),
        (this.v = !1),
        (this.n = this.p = null);
    }
    var Ps = function(i, n, e, t, r) {
      var m,
        o,
        c = [],
        s = [];
      if (
        (i.forEach(function(i) {
          if (!((n = i.length - 1) <= 0)) {
            var n,
              e,
              t = i[0],
              o = i[n];
            if (Ys(t, o)) {
              for (r.lineStart(), m = 0; m < n; ++m)
                r.point((t = i[m])[0], t[1]);
              r.lineEnd();
            } else
              c.push((e = new Fs(t, i, null, !0))),
                s.push((e.o = new Fs(t, null, e, !1))),
                c.push((e = new Fs(o, i, null, !1))),
                s.push((e.o = new Fs(o, null, e, !0)));
          }
        }),
        c.length)
      ) {
        for (s.sort(n), Gs(c), Gs(s), m = 0, o = s.length; m < o; ++m)
          s[m].e = e = !e;
        for (var d, u, a = c[0]; ; ) {
          for (var f = a, l = !0; f.v; ) if ((f = f.n) === a) return;
          (d = f.z), r.lineStart();
          do {
            if (((f.v = f.o.v = !0), f.e)) {
              if (l)
                for (m = 0, o = d.length; m < o; ++m)
                  r.point((u = d[m])[0], u[1]);
              else t(f.x, f.n.x, 1, r);
              f = f.n;
            } else {
              if (l)
                for (d = f.p.z, m = d.length - 1; m >= 0; --m)
                  r.point((u = d[m])[0], u[1]);
              else t(f.x, f.p.x, -1, r);
              f = f.p;
            }
            (d = (f = f.o).z), (l = !l);
          } while (!f.v);
          r.lineEnd();
        }
      }
    };
    function Gs(i) {
      if ((n = i.length)) {
        for (var n, e, t = 0, r = i[0]; ++t < n; )
          (r.n = e = i[t]), (e.p = r), (r = e);
        (r.n = e = i[0]), (e.p = r);
      }
    }
    var Us = Co();
    function Is(i) {
      return Go(i[0]) <= Vo ? i[0] : Ko(i[0]) * (((Go(i[0]) + Vo) % Yo) - Vo);
    }
    var Hs = function(i, n) {
        var e = Is(n),
          t = n[1],
          r = Qo(t),
          m = [Qo(e), -Ho(e), 0],
          o = 0,
          c = 0;
        Us.reset(), 1 === r ? (t = Bo + Ro) : -1 === r && (t = -Bo - Ro);
        for (var s = 0, d = i.length; s < d; ++s)
          if ((a = (u = i[s]).length))
            for (
              var u,
                a,
                f = u[a - 1],
                l = Is(f),
                h = f[1] / 2 + bo,
                A = Qo(h),
                O = Ho(h),
                p = 0;
              p < a;
              ++p, l = M, A = L, O = D, f = S
            ) {
              var S = u[p],
                M = Is(S),
                E = S[1] / 2 + bo,
                L = Qo(E),
                D = Ho(E),
                N = M - l,
                v = N >= 0 ? 1 : -1,
                C = v * N,
                y = C > Vo,
                g = A * L;
              if (
                (Us.add(Io(g * v * Qo(C), O * D + g * Ho(C))),
                (o += y ? N + v * Yo : N),
                y ^ (l >= e) ^ (M >= e))
              ) {
                var T = Lc(Mc(f), Mc(S));
                vc(T);
                var R = Lc(m, T);
                vc(R);
                var _ = (y ^ (N >= 0) ? -1 : 1) * qo(R[2]);
                (t > _ || (t === _ && (T[0] || T[1]))) &&
                  (c += y ^ (N >= 0) ? 1 : -1);
              }
            }
        return (o < -Ro || (o < Ro && Us < -Ro)) ^ (1 & c);
      },
      xs = function(i, n) {
        return i < n ? -1 : i > n ? 1 : i >= n ? 0 : NaN;
      };
    var Ws = (function(i) {
      return (
        1 === i.length &&
          (i = (function(i) {
            return function(n, e) {
              return xs(i(n), e);
            };
          })(i)),
        {
          left: function(n, e, t, r) {
            for (null == t && (t = 0), null == r && (r = n.length); t < r; ) {
              var m = (t + r) >>> 1;
              i(n[m], e) < 0 ? (t = m + 1) : (r = m);
            }
            return t;
          },
          right: function(n, e, t, r) {
            for (null == t && (t = 0), null == r && (r = n.length); t < r; ) {
              var m = (t + r) >>> 1;
              i(n[m], e) > 0 ? (r = m) : (t = m + 1);
            }
            return t;
          },
        }
      );
    })(xs);
    Ws.right, Ws.left;
    var ws = Array.prototype,
      Xs =
        (ws.slice,
        ws.map,
        function(i, n, e) {
          (i = +i),
            (n = +n),
            (e =
              (r = arguments.length) < 2
                ? ((n = i), (i = 0), 1)
                : r < 3
                ? 1
                : +e);
          for (
            var t = -1,
              r = 0 | Math.max(0, Math.ceil((n - i) / e)),
              m = new Array(r);
            ++t < r;

          )
            m[t] = i + t * e;
          return m;
        });
    Math.sqrt(50), Math.sqrt(10), Math.sqrt(2);
    var Qs = function(i) {
      for (var n, e, t, r = i.length, m = -1, o = 0; ++m < r; )
        o += i[m].length;
      for (e = new Array(o); --r >= 0; )
        for (n = (t = i[r]).length; --n >= 0; ) e[--o] = t[n];
      return e;
    };
    var Ks = function(i, n, e, t) {
      return function(r) {
        var m,
          o,
          c,
          s = n(r),
          d = bs(),
          u = n(d),
          a = !1,
          f = {
            point: l,
            lineStart: A,
            lineEnd: O,
            polygonStart: function() {
              (f.point = p),
                (f.lineStart = S),
                (f.lineEnd = M),
                (o = []),
                (m = []);
            },
            polygonEnd: function() {
              (f.point = l), (f.lineStart = A), (f.lineEnd = O), (o = Qs(o));
              var i = Hs(m, t);
              o.length
                ? (a || (r.polygonStart(), (a = !0)), Ps(o, Js, i, e, r))
                : i &&
                  (a || (r.polygonStart(), (a = !0)),
                  r.lineStart(),
                  e(null, null, 1, r),
                  r.lineEnd()),
                a && (r.polygonEnd(), (a = !1)),
                (o = m = null);
            },
            sphere: function() {
              r.polygonStart(),
                r.lineStart(),
                e(null, null, 1, r),
                r.lineEnd(),
                r.polygonEnd();
            },
          };
        function l(n, e) {
          i(n, e) && r.point(n, e);
        }
        function h(i, n) {
          s.point(i, n);
        }
        function A() {
          (f.point = h), s.lineStart();
        }
        function O() {
          (f.point = l), s.lineEnd();
        }
        function p(i, n) {
          c.push([i, n]), u.point(i, n);
        }
        function S() {
          u.lineStart(), (c = []);
        }
        function M() {
          p(c[0][0], c[0][1]), u.lineEnd();
          var i,
            n,
            e,
            t,
            s = u.clean(),
            f = d.result(),
            l = f.length;
          if ((c.pop(), m.push(c), (c = null), l))
            if (1 & s) {
              if ((n = (e = f[0]).length - 1) > 0) {
                for (
                  a || (r.polygonStart(), (a = !0)), r.lineStart(), i = 0;
                  i < n;
                  ++i
                )
                  r.point((t = e[i])[0], t[1]);
                r.lineEnd();
              }
            } else
              l > 1 && 2 & s && f.push(f.pop().concat(f.shift())),
                o.push(f.filter(ks));
        }
        return f;
      };
    };
    function ks(i) {
      return i.length > 1;
    }
    function Js(i, n) {
      return (
        ((i = i.x)[0] < 0 ? i[1] - Bo - Ro : Bo - i[1]) -
        ((n = n.x)[0] < 0 ? n[1] - Bo - Ro : Bo - n[1])
      );
    }
    var zs = Ks(
      function() {
        return !0;
      },
      function(i) {
        var n,
          e = NaN,
          t = NaN,
          r = NaN;
        return {
          lineStart: function() {
            i.lineStart(), (n = 1);
          },
          point: function(m, o) {
            var c = m > 0 ? Vo : -Vo,
              s = Go(m - e);
            Go(s - Vo) < Ro
              ? (i.point(e, (t = (t + o) / 2 > 0 ? Bo : -Bo)),
                i.point(r, t),
                i.lineEnd(),
                i.lineStart(),
                i.point(c, t),
                i.point(m, t),
                (n = 0))
              : r !== c &&
                s >= Vo &&
                (Go(e - r) < Ro && (e -= r * Ro),
                Go(m - c) < Ro && (m -= c * Ro),
                (t = (function(i, n, e, t) {
                  var r,
                    m,
                    o = Qo(i - e);
                  return Go(o) > Ro
                    ? Uo(
                        (Qo(n) * (m = Ho(t)) * Qo(e) -
                          Qo(t) * (r = Ho(n)) * Qo(i)) /
                          (r * m * o)
                      )
                    : (n + t) / 2;
                })(e, t, m, o)),
                i.point(r, t),
                i.lineEnd(),
                i.lineStart(),
                i.point(c, t),
                (n = 0)),
              i.point((e = m), (t = o)),
              (r = c);
          },
          lineEnd: function() {
            i.lineEnd(), (e = t = NaN);
          },
          clean: function() {
            return 2 - n;
          },
        };
      },
      function(i, n, e, t) {
        var r;
        if (null == i)
          (r = e * Bo),
            t.point(-Vo, r),
            t.point(0, r),
            t.point(Vo, r),
            t.point(Vo, 0),
            t.point(Vo, -r),
            t.point(0, -r),
            t.point(-Vo, -r),
            t.point(-Vo, 0),
            t.point(-Vo, r);
        else if (Go(i[0] - n[0]) > Ro) {
          var m = i[0] < n[0] ? Vo : -Vo;
          (r = (e * m) / 2), t.point(-m, r), t.point(0, r), t.point(m, r);
        } else t.point(n[0], n[1]);
      },
      [-Vo, -Bo]
    );
    var qs = function(i) {
        var n = Ho(i),
          e = 6 * Po,
          t = n > 0,
          r = Go(n) > Ro;
        function m(i, e) {
          return Ho(i) * Ho(e) > n;
        }
        function o(i, e, t) {
          var r = [1, 0, 0],
            m = Lc(Mc(i), Mc(e)),
            o = Ec(m, m),
            c = m[0],
            s = o - c * c;
          if (!s) return !t && i;
          var d = (n * o) / s,
            u = (-n * c) / s,
            a = Lc(r, m),
            f = Nc(r, d);
          Dc(f, Nc(m, u));
          var l = a,
            h = Ec(f, l),
            A = Ec(l, l),
            O = h * h - A * (Ec(f, f) - 1);
          if (!(O < 0)) {
            var p = ko(O),
              S = Nc(l, (-h - p) / A);
            if ((Dc(S, f), (S = Sc(S)), !t)) return S;
            var M,
              E = i[0],
              L = e[0],
              D = i[1],
              N = e[1];
            L < E && ((M = E), (E = L), (L = M));
            var v = L - E,
              C = Go(v - Vo) < Ro;
            if (
              (!C && N < D && ((M = D), (D = N), (N = M)),
              C || v < Ro
                ? C
                  ? (D + N > 0) ^ (S[1] < (Go(S[0] - E) < Ro ? D : N))
                  : D <= S[1] && S[1] <= N
                : (v > Vo) ^ (E <= S[0] && S[0] <= L))
            ) {
              var y = Nc(l, (-h + p) / A);
              return Dc(y, f), [S, Sc(y)];
            }
          }
        }
        function c(n, e) {
          var r = t ? i : Vo - i,
            m = 0;
          return (
            n < -r ? (m |= 1) : n > r && (m |= 2),
            e < -r ? (m |= 4) : e > r && (m |= 8),
            m
          );
        }
        return Ks(
          m,
          function(i) {
            var n, e, s, d, u;
            return {
              lineStart: function() {
                (d = s = !1), (u = 1);
              },
              point: function(a, f) {
                var l,
                  h = [a, f],
                  A = m(a, f),
                  O = t
                    ? A
                      ? 0
                      : c(a, f)
                    : A
                    ? c(a + (a < 0 ? Vo : -Vo), f)
                    : 0;
                if (
                  (!n && (d = s = A) && i.lineStart(),
                  A !== s &&
                    (!(l = o(n, h)) || Ys(n, l) || Ys(h, l)) &&
                    ((h[0] += Ro), (h[1] += Ro), (A = m(h[0], h[1]))),
                  A !== s)
                )
                  (u = 0),
                    A
                      ? (i.lineStart(), (l = o(h, n)), i.point(l[0], l[1]))
                      : ((l = o(n, h)), i.point(l[0], l[1]), i.lineEnd()),
                    (n = l);
                else if (r && n && t ^ A) {
                  var p;
                  O & e ||
                    !(p = o(h, n, !0)) ||
                    ((u = 0),
                    t
                      ? (i.lineStart(),
                        i.point(p[0][0], p[0][1]),
                        i.point(p[1][0], p[1][1]),
                        i.lineEnd())
                      : (i.point(p[1][0], p[1][1]),
                        i.lineEnd(),
                        i.lineStart(),
                        i.point(p[0][0], p[0][1])));
                }
                !A || (n && Ys(n, h)) || i.point(h[0], h[1]),
                  (n = h),
                  (s = A),
                  (e = O);
              },
              lineEnd: function() {
                s && i.lineEnd(), (n = null);
              },
              clean: function() {
                return u | ((d && s) << 1);
              },
            };
          },
          function(n, t, r, m) {
            _s(m, i, e, r, n, t);
          },
          t ? [0, -i] : [-Vo, i - Vo]
        );
      },
      js = function(i, n, e, t, r, m) {
        var o,
          c = i[0],
          s = i[1],
          d = 0,
          u = 1,
          a = n[0] - c,
          f = n[1] - s;
        if (((o = e - c), a || !(o > 0))) {
          if (((o /= a), a < 0)) {
            if (o < d) return;
            o < u && (u = o);
          } else if (a > 0) {
            if (o > u) return;
            o > d && (d = o);
          }
          if (((o = r - c), a || !(o < 0))) {
            if (((o /= a), a < 0)) {
              if (o > u) return;
              o > d && (d = o);
            } else if (a > 0) {
              if (o < d) return;
              o < u && (u = o);
            }
            if (((o = t - s), f || !(o > 0))) {
              if (((o /= f), f < 0)) {
                if (o < d) return;
                o < u && (u = o);
              } else if (f > 0) {
                if (o > u) return;
                o > d && (d = o);
              }
              if (((o = m - s), f || !(o < 0))) {
                if (((o /= f), f < 0)) {
                  if (o > u) return;
                  o > d && (d = o);
                } else if (f > 0) {
                  if (o < d) return;
                  o < u && (u = o);
                }
                return (
                  d > 0 && ((i[0] = c + d * a), (i[1] = s + d * f)),
                  u < 1 && ((n[0] = c + u * a), (n[1] = s + u * f)),
                  !0
                );
              }
            }
          }
        }
      },
      Zs = 1e9,
      $s = -Zs;
    function id(i, n, e, t) {
      function r(r, m) {
        return i <= r && r <= e && n <= m && m <= t;
      }
      function m(r, m, c, d) {
        var u = 0,
          a = 0;
        if (
          null == r ||
          (u = o(r, c)) !== (a = o(m, c)) ||
          (s(r, m) < 0) ^ (c > 0)
        )
          do {
            d.point(0 === u || 3 === u ? i : e, u > 1 ? t : n);
          } while ((u = (u + c + 4) % 4) !== a);
        else d.point(m[0], m[1]);
      }
      function o(t, r) {
        return Go(t[0] - i) < Ro
          ? r > 0
            ? 0
            : 3
          : Go(t[0] - e) < Ro
          ? r > 0
            ? 2
            : 1
          : Go(t[1] - n) < Ro
          ? r > 0
            ? 1
            : 0
          : r > 0
          ? 3
          : 2;
      }
      function c(i, n) {
        return s(i.x, n.x);
      }
      function s(i, n) {
        var e = o(i, 1),
          t = o(n, 1);
        return e !== t
          ? e - t
          : 0 === e
          ? n[1] - i[1]
          : 1 === e
          ? i[0] - n[0]
          : 2 === e
          ? i[1] - n[1]
          : n[0] - i[0];
      }
      return function(o) {
        var s,
          d,
          u,
          a,
          f,
          l,
          h,
          A,
          O,
          p,
          S,
          M = o,
          E = bs(),
          L = {
            point: D,
            lineStart: function() {
              (L.point = N), d && d.push((u = []));
              (p = !0), (O = !1), (h = A = NaN);
            },
            lineEnd: function() {
              s && (N(a, f), l && O && E.rejoin(), s.push(E.result()));
              (L.point = D), O && M.lineEnd();
            },
            polygonStart: function() {
              (M = E), (s = []), (d = []), (S = !0);
            },
            polygonEnd: function() {
              var n = (function() {
                  for (var n = 0, e = 0, r = d.length; e < r; ++e)
                    for (
                      var m,
                        o,
                        c = d[e],
                        s = 1,
                        u = c.length,
                        a = c[0],
                        f = a[0],
                        l = a[1];
                      s < u;
                      ++s
                    )
                      (m = f),
                        (o = l),
                        (a = c[s]),
                        (f = a[0]),
                        (l = a[1]),
                        o <= t
                          ? l > t &&
                            (f - m) * (t - o) > (l - o) * (i - m) &&
                            ++n
                          : l <= t &&
                            (f - m) * (t - o) < (l - o) * (i - m) &&
                            --n;
                  return n;
                })(),
                e = S && n,
                r = (s = Qs(s)).length;
              (e || r) &&
                (o.polygonStart(),
                e && (o.lineStart(), m(null, null, 1, o), o.lineEnd()),
                r && Ps(s, c, n, m, o),
                o.polygonEnd());
              (M = o), (s = d = u = null);
            },
          };
        function D(i, n) {
          r(i, n) && M.point(i, n);
        }
        function N(m, o) {
          var c = r(m, o);
          if ((d && u.push([m, o]), p))
            (a = m),
              (f = o),
              (l = c),
              (p = !1),
              c && (M.lineStart(), M.point(m, o));
          else if (c && O) M.point(m, o);
          else {
            var s = [
                (h = Math.max($s, Math.min(Zs, h))),
                (A = Math.max($s, Math.min(Zs, A))),
              ],
              E = [
                (m = Math.max($s, Math.min(Zs, m))),
                (o = Math.max($s, Math.min(Zs, o))),
              ];
            js(s, E, i, n, e, t)
              ? (O || (M.lineStart(), M.point(s[0], s[1])),
                M.point(E[0], E[1]),
                c || M.lineEnd(),
                (S = !1))
              : c && (M.lineStart(), M.point(m, o), (S = !1));
          }
          (h = m), (A = o), (O = c);
        }
        return L;
      };
    }
    var nd,
      ed,
      td,
      rd = function() {
        var i,
          n,
          e,
          t = 0,
          r = 0,
          m = 960,
          o = 500;
        return (e = {
          stream: function(e) {
            return i && n === e ? i : (i = id(t, r, m, o)((n = e)));
          },
          extent: function(c) {
            return arguments.length
              ? ((t = +c[0][0]),
                (r = +c[0][1]),
                (m = +c[1][0]),
                (o = +c[1][1]),
                (i = n = null),
                e)
              : [[t, r], [m, o]];
          },
        });
      },
      md = Co(),
      od = {
        sphere: Zo,
        point: Zo,
        lineStart: function() {
          (od.point = sd), (od.lineEnd = cd);
        },
        lineEnd: Zo,
        polygonStart: Zo,
        polygonEnd: Zo,
      };
    function cd() {
      od.point = od.lineEnd = Zo;
    }
    function sd(i, n) {
      (nd = i *= Po), (ed = Qo((n *= Po))), (td = Ho(n)), (od.point = dd);
    }
    function dd(i, n) {
      i *= Po;
      var e = Qo((n *= Po)),
        t = Ho(n),
        r = Go(i - nd),
        m = Ho(r),
        o = t * Qo(r),
        c = td * e - ed * t * m,
        s = ed * e + td * t * m;
      md.add(Io(ko(o * o + c * c), s)), (nd = i), (ed = e), (td = t);
    }
    var ud = function(i) {
        return md.reset(), dc(i, od), +md;
      },
      ad = [null, null],
      fd = {type: 'LineString', coordinates: ad},
      ld = function(i, n) {
        return (ad[0] = i), (ad[1] = n), ud(fd);
      },
      hd = {
        Feature: function(i, n) {
          return Od(i.geometry, n);
        },
        FeatureCollection: function(i, n) {
          for (var e = i.features, t = -1, r = e.length; ++t < r; )
            if (Od(e[t].geometry, n)) return !0;
          return !1;
        },
      },
      Ad = {
        Sphere: function() {
          return !0;
        },
        Point: function(i, n) {
          return pd(i.coordinates, n);
        },
        MultiPoint: function(i, n) {
          for (var e = i.coordinates, t = -1, r = e.length; ++t < r; )
            if (pd(e[t], n)) return !0;
          return !1;
        },
        LineString: function(i, n) {
          return Sd(i.coordinates, n);
        },
        MultiLineString: function(i, n) {
          for (var e = i.coordinates, t = -1, r = e.length; ++t < r; )
            if (Sd(e[t], n)) return !0;
          return !1;
        },
        Polygon: function(i, n) {
          return Md(i.coordinates, n);
        },
        MultiPolygon: function(i, n) {
          for (var e = i.coordinates, t = -1, r = e.length; ++t < r; )
            if (Md(e[t], n)) return !0;
          return !1;
        },
        GeometryCollection: function(i, n) {
          for (var e = i.geometries, t = -1, r = e.length; ++t < r; )
            if (Od(e[t], n)) return !0;
          return !1;
        },
      };
    function Od(i, n) {
      return !(!i || !Ad.hasOwnProperty(i.type)) && Ad[i.type](i, n);
    }
    function pd(i, n) {
      return 0 === ld(i, n);
    }
    function Sd(i, n) {
      for (var e, t, r, m = 0, o = i.length; m < o; m++) {
        if (0 === (t = ld(i[m], n))) return !0;
        if (
          m > 0 &&
          (r = ld(i[m], i[m - 1])) > 0 &&
          e <= r &&
          t <= r &&
          (e + t - r) * (1 - Math.pow((e - t) / r, 2)) < _o * r
        )
          return !0;
        e = t;
      }
      return !1;
    }
    function Md(i, n) {
      return !!Hs(i.map(Ed), Ld(n));
    }
    function Ed(i) {
      return (i = i.map(Ld)).pop(), i;
    }
    function Ld(i) {
      return [i[0] * Po, i[1] * Po];
    }
    var Dd = function(i, n) {
      return (i && hd.hasOwnProperty(i.type) ? hd[i.type] : Od)(i, n);
    };
    function Nd(i, n, e) {
      var t = Xs(i, n - Ro, e).concat(n);
      return function(i) {
        return t.map(function(n) {
          return [i, n];
        });
      };
    }
    function vd(i, n, e) {
      var t = Xs(i, n - Ro, e).concat(n);
      return function(i) {
        return t.map(function(n) {
          return [n, i];
        });
      };
    }
    function Cd() {
      var i,
        n,
        e,
        t,
        r,
        m,
        o,
        c,
        s,
        d,
        u,
        a,
        f = 10,
        l = f,
        h = 90,
        A = 360,
        O = 2.5;
      function p() {
        return {type: 'MultiLineString', coordinates: S()};
      }
      function S() {
        return Xs(xo(t / h) * h, e, h)
          .map(u)
          .concat(Xs(xo(c / A) * A, o, A).map(a))
          .concat(
            Xs(xo(n / f) * f, i, f)
              .filter(function(i) {
                return Go(i % h) > Ro;
              })
              .map(s)
          )
          .concat(
            Xs(xo(m / l) * l, r, l)
              .filter(function(i) {
                return Go(i % A) > Ro;
              })
              .map(d)
          );
      }
      return (
        (p.lines = function() {
          return S().map(function(i) {
            return {type: 'LineString', coordinates: i};
          });
        }),
        (p.outline = function() {
          return {
            type: 'Polygon',
            coordinates: [
              u(t).concat(
                a(o).slice(1),
                u(e)
                  .reverse()
                  .slice(1),
                a(c)
                  .reverse()
                  .slice(1)
              ),
            ],
          };
        }),
        (p.extent = function(i) {
          return arguments.length
            ? p.extentMajor(i).extentMinor(i)
            : p.extentMinor();
        }),
        (p.extentMajor = function(i) {
          return arguments.length
            ? ((t = +i[0][0]),
              (e = +i[1][0]),
              (c = +i[0][1]),
              (o = +i[1][1]),
              t > e && ((i = t), (t = e), (e = i)),
              c > o && ((i = c), (c = o), (o = i)),
              p.precision(O))
            : [[t, c], [e, o]];
        }),
        (p.extentMinor = function(e) {
          return arguments.length
            ? ((n = +e[0][0]),
              (i = +e[1][0]),
              (m = +e[0][1]),
              (r = +e[1][1]),
              n > i && ((e = n), (n = i), (i = e)),
              m > r && ((e = m), (m = r), (r = e)),
              p.precision(O))
            : [[n, m], [i, r]];
        }),
        (p.step = function(i) {
          return arguments.length ? p.stepMajor(i).stepMinor(i) : p.stepMinor();
        }),
        (p.stepMajor = function(i) {
          return arguments.length ? ((h = +i[0]), (A = +i[1]), p) : [h, A];
        }),
        (p.stepMinor = function(i) {
          return arguments.length ? ((f = +i[0]), (l = +i[1]), p) : [f, l];
        }),
        (p.precision = function(f) {
          return arguments.length
            ? ((O = +f),
              (s = Nd(m, r, 90)),
              (d = vd(n, i, O)),
              (u = Nd(c, o, 90)),
              (a = vd(t, e, O)),
              p)
            : O;
        }),
        p
          .extentMajor([[-180, -90 + Ro], [180, 90 - Ro]])
          .extentMinor([[-180, -80 - Ro], [180, 80 + Ro]])
      );
    }
    function yd() {
      return Cd()();
    }
    var gd,
      Td,
      Rd,
      _d,
      Vd = function(i, n) {
        var e = i[0] * Po,
          t = i[1] * Po,
          r = n[0] * Po,
          m = n[1] * Po,
          o = Ho(t),
          c = Qo(t),
          s = Ho(m),
          d = Qo(m),
          u = o * Ho(e),
          a = o * Qo(e),
          f = s * Ho(r),
          l = s * Qo(r),
          h = 2 * qo(ko(jo(m - t) + o * s * jo(r - e))),
          A = Qo(h),
          O = h
            ? function(i) {
                var n = Qo((i *= h)) / A,
                  e = Qo(h - i) / A,
                  t = e * u + n * f,
                  r = e * a + n * l,
                  m = e * c + n * d;
                return [Io(r, t) * Fo, Io(m, ko(t * t + r * r)) * Fo];
              }
            : function() {
                return [e * Fo, t * Fo];
              };
        return (O.distance = h), O;
      },
      Bd = function(i) {
        return i;
      },
      bd = Co(),
      Yd = Co(),
      Fd = {
        point: Zo,
        lineStart: Zo,
        lineEnd: Zo,
        polygonStart: function() {
          (Fd.lineStart = Pd), (Fd.lineEnd = Id);
        },
        polygonEnd: function() {
          (Fd.lineStart = Fd.lineEnd = Fd.point = Zo),
            bd.add(Go(Yd)),
            Yd.reset();
        },
        result: function() {
          var i = bd / 2;
          return bd.reset(), i;
        },
      };
    function Pd() {
      Fd.point = Gd;
    }
    function Gd(i, n) {
      (Fd.point = Ud), (gd = Rd = i), (Td = _d = n);
    }
    function Ud(i, n) {
      Yd.add(_d * i - Rd * n), (Rd = i), (_d = n);
    }
    function Id() {
      Ud(gd, Td);
    }
    var Hd = Fd,
      xd = 1 / 0,
      Wd = xd,
      wd = -xd,
      Xd = wd;
    var Qd,
      Kd,
      kd,
      Jd,
      zd = {
        point: function(i, n) {
          i < xd && (xd = i);
          i > wd && (wd = i);
          n < Wd && (Wd = n);
          n > Xd && (Xd = n);
        },
        lineStart: Zo,
        lineEnd: Zo,
        polygonStart: Zo,
        polygonEnd: Zo,
        result: function() {
          var i = [[xd, Wd], [wd, Xd]];
          return (wd = Xd = -(Wd = xd = 1 / 0)), i;
        },
      },
      qd = 0,
      jd = 0,
      Zd = 0,
      $d = 0,
      iu = 0,
      nu = 0,
      eu = 0,
      tu = 0,
      ru = 0,
      mu = {
        point: ou,
        lineStart: cu,
        lineEnd: uu,
        polygonStart: function() {
          (mu.lineStart = au), (mu.lineEnd = fu);
        },
        polygonEnd: function() {
          (mu.point = ou), (mu.lineStart = cu), (mu.lineEnd = uu);
        },
        result: function() {
          var i = ru
            ? [eu / ru, tu / ru]
            : nu
            ? [$d / nu, iu / nu]
            : Zd
            ? [qd / Zd, jd / Zd]
            : [NaN, NaN];
          return (qd = jd = Zd = $d = iu = nu = eu = tu = ru = 0), i;
        },
      };
    function ou(i, n) {
      (qd += i), (jd += n), ++Zd;
    }
    function cu() {
      mu.point = su;
    }
    function su(i, n) {
      (mu.point = du), ou((kd = i), (Jd = n));
    }
    function du(i, n) {
      var e = i - kd,
        t = n - Jd,
        r = ko(e * e + t * t);
      ($d += (r * (kd + i)) / 2),
        (iu += (r * (Jd + n)) / 2),
        (nu += r),
        ou((kd = i), (Jd = n));
    }
    function uu() {
      mu.point = ou;
    }
    function au() {
      mu.point = lu;
    }
    function fu() {
      hu(Qd, Kd);
    }
    function lu(i, n) {
      (mu.point = hu), ou((Qd = kd = i), (Kd = Jd = n));
    }
    function hu(i, n) {
      var e = i - kd,
        t = n - Jd,
        r = ko(e * e + t * t);
      ($d += (r * (kd + i)) / 2),
        (iu += (r * (Jd + n)) / 2),
        (nu += r),
        (eu += (r = Jd * i - kd * n) * (kd + i)),
        (tu += r * (Jd + n)),
        (ru += 3 * r),
        ou((kd = i), (Jd = n));
    }
    var Au = mu;
    function Ou(i) {
      this._context = i;
    }
    Ou.prototype = {
      _radius: 4.5,
      pointRadius: function(i) {
        return (this._radius = i), this;
      },
      polygonStart: function() {
        this._line = 0;
      },
      polygonEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        0 === this._line && this._context.closePath(), (this._point = NaN);
      },
      point: function(i, n) {
        switch (this._point) {
          case 0:
            this._context.moveTo(i, n), (this._point = 1);
            break;
          case 1:
            this._context.lineTo(i, n);
            break;
          default:
            this._context.moveTo(i + this._radius, n),
              this._context.arc(i, n, this._radius, 0, Yo);
        }
      },
      result: Zo,
    };
    var pu,
      Su,
      Mu,
      Eu,
      Lu,
      Du = Co(),
      Nu = {
        point: Zo,
        lineStart: function() {
          Nu.point = vu;
        },
        lineEnd: function() {
          pu && Cu(Su, Mu), (Nu.point = Zo);
        },
        polygonStart: function() {
          pu = !0;
        },
        polygonEnd: function() {
          pu = null;
        },
        result: function() {
          var i = +Du;
          return Du.reset(), i;
        },
      };
    function vu(i, n) {
      (Nu.point = Cu), (Su = Eu = i), (Mu = Lu = n);
    }
    function Cu(i, n) {
      (Eu -= i), (Lu -= n), Du.add(ko(Eu * Eu + Lu * Lu)), (Eu = i), (Lu = n);
    }
    var yu = Nu;
    function gu() {
      this._string = [];
    }
    function Tu(i) {
      return (
        'm0,' +
        i +
        'a' +
        i +
        ',' +
        i +
        ' 0 1,1 0,' +
        -2 * i +
        'a' +
        i +
        ',' +
        i +
        ' 0 1,1 0,' +
        2 * i +
        'z'
      );
    }
    gu.prototype = {
      _radius: 4.5,
      _circle: Tu(4.5),
      pointRadius: function(i) {
        return (
          (i = +i) !== this._radius &&
            ((this._radius = i), (this._circle = null)),
          this
        );
      },
      polygonStart: function() {
        this._line = 0;
      },
      polygonEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        0 === this._line && this._string.push('Z'), (this._point = NaN);
      },
      point: function(i, n) {
        switch (this._point) {
          case 0:
            this._string.push('M', i, ',', n), (this._point = 1);
            break;
          case 1:
            this._string.push('L', i, ',', n);
            break;
          default:
            null == this._circle && (this._circle = Tu(this._radius)),
              this._string.push('M', i, ',', n, this._circle);
        }
      },
      result: function() {
        if (this._string.length) {
          var i = this._string.join('');
          return (this._string = []), i;
        }
        return null;
      },
    };
    var Ru = function(i, n) {
        var e,
          t,
          r = 4.5;
        function m(i) {
          return (
            i &&
              ('function' == typeof r &&
                t.pointRadius(+r.apply(this, arguments)),
              dc(i, e(t))),
            t.result()
          );
        }
        return (
          (m.area = function(i) {
            return dc(i, e(Hd)), Hd.result();
          }),
          (m.measure = function(i) {
            return dc(i, e(yu)), yu.result();
          }),
          (m.bounds = function(i) {
            return dc(i, e(zd)), zd.result();
          }),
          (m.centroid = function(i) {
            return dc(i, e(Au)), Au.result();
          }),
          (m.projection = function(n) {
            return arguments.length
              ? ((e = null == n ? ((i = null), Bd) : (i = n).stream), m)
              : i;
          }),
          (m.context = function(i) {
            return arguments.length
              ? ((t = null == i ? ((n = null), new gu()) : new Ou((n = i))),
                'function' != typeof r && t.pointRadius(r),
                m)
              : n;
          }),
          (m.pointRadius = function(i) {
            return arguments.length
              ? ((r = 'function' == typeof i ? i : (t.pointRadius(+i), +i)), m)
              : r;
          }),
          m.projection(i).context(n)
        );
      },
      _u = function(i) {
        return {stream: Vu(i)};
      };
    function Vu(i) {
      return function(n) {
        var e = new Bu();
        for (var t in i) e[t] = i[t];
        return (e.stream = n), e;
      };
    }
    function Bu() {}
    function bu(i, n, e) {
      var t = i.clipExtent && i.clipExtent();
      return (
        i.scale(150).translate([0, 0]),
        null != t && i.clipExtent(null),
        dc(e, i.stream(zd)),
        n(zd.result()),
        null != t && i.clipExtent(t),
        i
      );
    }
    function Yu(i, n, e) {
      return bu(
        i,
        function(e) {
          var t = n[1][0] - n[0][0],
            r = n[1][1] - n[0][1],
            m = Math.min(t / (e[1][0] - e[0][0]), r / (e[1][1] - e[0][1])),
            o = +n[0][0] + (t - m * (e[1][0] + e[0][0])) / 2,
            c = +n[0][1] + (r - m * (e[1][1] + e[0][1])) / 2;
          i.scale(150 * m).translate([o, c]);
        },
        e
      );
    }
    function Fu(i, n, e) {
      return Yu(i, [[0, 0], n], e);
    }
    function Pu(i, n, e) {
      return bu(
        i,
        function(e) {
          var t = +n,
            r = t / (e[1][0] - e[0][0]),
            m = (t - r * (e[1][0] + e[0][0])) / 2,
            o = -r * e[0][1];
          i.scale(150 * r).translate([m, o]);
        },
        e
      );
    }
    function Gu(i, n, e) {
      return bu(
        i,
        function(e) {
          var t = +n,
            r = t / (e[1][1] - e[0][1]),
            m = -r * e[0][0],
            o = (t - r * (e[1][1] + e[0][1])) / 2;
          i.scale(150 * r).translate([m, o]);
        },
        e
      );
    }
    Bu.prototype = {
      constructor: Bu,
      point: function(i, n) {
        this.stream.point(i, n);
      },
      sphere: function() {
        this.stream.sphere();
      },
      lineStart: function() {
        this.stream.lineStart();
      },
      lineEnd: function() {
        this.stream.lineEnd();
      },
      polygonStart: function() {
        this.stream.polygonStart();
      },
      polygonEnd: function() {
        this.stream.polygonEnd();
      },
    };
    var Uu = 16,
      Iu = Ho(30 * Po),
      Hu = function(i, n) {
        return +n
          ? (function(i, n) {
              function e(t, r, m, o, c, s, d, u, a, f, l, h, A, O) {
                var p = d - t,
                  S = u - r,
                  M = p * p + S * S;
                if (M > 4 * n && A--) {
                  var E = o + f,
                    L = c + l,
                    D = s + h,
                    N = ko(E * E + L * L + D * D),
                    v = qo((D /= N)),
                    C =
                      Go(Go(D) - 1) < Ro || Go(m - a) < Ro
                        ? (m + a) / 2
                        : Io(L, E),
                    y = i(C, v),
                    g = y[0],
                    T = y[1],
                    R = g - t,
                    _ = T - r,
                    V = S * R - p * _;
                  ((V * V) / M > n ||
                    Go((p * R + S * _) / M - 0.5) > 0.3 ||
                    o * f + c * l + s * h < Iu) &&
                    (e(t, r, m, o, c, s, g, T, C, (E /= N), (L /= N), D, A, O),
                    O.point(g, T),
                    e(g, T, C, E, L, D, d, u, a, f, l, h, A, O));
                }
              }
              return function(n) {
                var t,
                  r,
                  m,
                  o,
                  c,
                  s,
                  d,
                  u,
                  a,
                  f,
                  l,
                  h,
                  A = {
                    point: O,
                    lineStart: p,
                    lineEnd: M,
                    polygonStart: function() {
                      n.polygonStart(), (A.lineStart = E);
                    },
                    polygonEnd: function() {
                      n.polygonEnd(), (A.lineStart = p);
                    },
                  };
                function O(e, t) {
                  (e = i(e, t)), n.point(e[0], e[1]);
                }
                function p() {
                  (u = NaN), (A.point = S), n.lineStart();
                }
                function S(t, r) {
                  var m = Mc([t, r]),
                    o = i(t, r);
                  e(
                    u,
                    a,
                    d,
                    f,
                    l,
                    h,
                    (u = o[0]),
                    (a = o[1]),
                    (d = t),
                    (f = m[0]),
                    (l = m[1]),
                    (h = m[2]),
                    Uu,
                    n
                  ),
                    n.point(u, a);
                }
                function M() {
                  (A.point = O), n.lineEnd();
                }
                function E() {
                  p(), (A.point = L), (A.lineEnd = D);
                }
                function L(i, n) {
                  S((t = i), n),
                    (r = u),
                    (m = a),
                    (o = f),
                    (c = l),
                    (s = h),
                    (A.point = S);
                }
                function D() {
                  e(u, a, d, f, l, h, r, m, t, o, c, s, Uu, n),
                    (A.lineEnd = M),
                    M();
                }
                return A;
              };
            })(i, n)
          : (function(i) {
              return Vu({
                point: function(n, e) {
                  (n = i(n, e)), this.stream.point(n[0], n[1]);
                },
              });
            })(i);
      };
    var xu = Vu({
      point: function(i, n) {
        this.stream.point(i * Po, n * Po);
      },
    });
    function Wu(i, n, e, t) {
      var r = Ho(t),
        m = Qo(t),
        o = r * i,
        c = m * i,
        s = r / i,
        d = m / i,
        u = (m * e - r * n) / i,
        a = (m * n + r * e) / i;
      function f(i, t) {
        return [o * i - c * t + n, e - c * i - o * t];
      }
      return (
        (f.invert = function(i, n) {
          return [s * i - d * n + u, a - d * i - s * n];
        }),
        f
      );
    }
    function wu(i) {
      return Xu(function() {
        return i;
      })();
    }
    function Xu(i) {
      var n,
        e,
        t,
        r,
        m,
        o,
        c,
        s,
        d,
        u,
        a = 150,
        f = 480,
        l = 250,
        h = 0,
        A = 0,
        O = 0,
        p = 0,
        S = 0,
        M = 0,
        E = null,
        L = zs,
        D = null,
        N = Bd,
        v = 0.5;
      function C(i) {
        return s(i[0] * Po, i[1] * Po);
      }
      function y(i) {
        return (i = s.invert(i[0], i[1])) && [i[0] * Fo, i[1] * Fo];
      }
      function g() {
        var i = Wu(a, 0, 0, M).apply(null, n(h, A)),
          t = (M
            ? Wu
            : function(i, n, e) {
                function t(t, r) {
                  return [n + i * t, e - i * r];
                }
                return (
                  (t.invert = function(t, r) {
                    return [(t - n) / i, (e - r) / i];
                  }),
                  t
                );
              })(a, f - i[0], l - i[1], M);
        return (
          (e = Cs(O, p, S)), (c = Ns(n, t)), (s = Ns(e, c)), (o = Hu(c, v)), T()
        );
      }
      function T() {
        return (d = u = null), C;
      }
      return (
        (C.stream = function(i) {
          return d && u === i
            ? d
            : (d = xu(
                (function(i) {
                  return Vu({
                    point: function(n, e) {
                      var t = i(n, e);
                      return this.stream.point(t[0], t[1]);
                    },
                  });
                })(e)(L(o(N((u = i)))))
              ));
        }),
        (C.preclip = function(i) {
          return arguments.length ? ((L = i), (E = void 0), T()) : L;
        }),
        (C.postclip = function(i) {
          return arguments.length ? ((N = i), (D = t = r = m = null), T()) : N;
        }),
        (C.clipAngle = function(i) {
          return arguments.length
            ? ((L = +i ? qs((E = i * Po)) : ((E = null), zs)), T())
            : E * Fo;
        }),
        (C.clipExtent = function(i) {
          return arguments.length
            ? ((N =
                null == i
                  ? ((D = t = r = m = null), Bd)
                  : id(
                      (D = +i[0][0]),
                      (t = +i[0][1]),
                      (r = +i[1][0]),
                      (m = +i[1][1])
                    )),
              T())
            : null == D
            ? null
            : [[D, t], [r, m]];
        }),
        (C.scale = function(i) {
          return arguments.length ? ((a = +i), g()) : a;
        }),
        (C.translate = function(i) {
          return arguments.length ? ((f = +i[0]), (l = +i[1]), g()) : [f, l];
        }),
        (C.center = function(i) {
          return arguments.length
            ? ((h = (i[0] % 360) * Po), (A = (i[1] % 360) * Po), g())
            : [h * Fo, A * Fo];
        }),
        (C.rotate = function(i) {
          return arguments.length
            ? ((O = (i[0] % 360) * Po),
              (p = (i[1] % 360) * Po),
              (S = i.length > 2 ? (i[2] % 360) * Po : 0),
              g())
            : [O * Fo, p * Fo, S * Fo];
        }),
        (C.angle = function(i) {
          return arguments.length ? ((M = (i % 360) * Po), g()) : M * Fo;
        }),
        (C.precision = function(i) {
          return arguments.length ? ((o = Hu(c, (v = i * i))), T()) : ko(v);
        }),
        (C.fitExtent = function(i, n) {
          return Yu(C, i, n);
        }),
        (C.fitSize = function(i, n) {
          return Fu(C, i, n);
        }),
        (C.fitWidth = function(i, n) {
          return Pu(C, i, n);
        }),
        (C.fitHeight = function(i, n) {
          return Gu(C, i, n);
        }),
        function() {
          return (
            (n = i.apply(this, arguments)), (C.invert = n.invert && y), g()
          );
        }
      );
    }
    function Qu(i) {
      var n = 0,
        e = Vo / 3,
        t = Xu(i),
        r = t(n, e);
      return (
        (r.parallels = function(i) {
          return arguments.length
            ? t((n = i[0] * Po), (e = i[1] * Po))
            : [n * Fo, e * Fo];
        }),
        r
      );
    }
    function Ku(i, n) {
      var e = Qo(i),
        t = (e + Qo(n)) / 2;
      if (Go(t) < Ro)
        return (function(i) {
          var n = Ho(i);
          function e(i, e) {
            return [i * n, Qo(e) / n];
          }
          return (
            (e.invert = function(i, e) {
              return [i / n, qo(e * n)];
            }),
            e
          );
        })(i);
      var r = 1 + e * (2 * t - e),
        m = ko(r) / t;
      function o(i, n) {
        var e = ko(r - 2 * t * Qo(n)) / t;
        return [e * Qo((i *= t)), m - e * Ho(i)];
      }
      return (
        (o.invert = function(i, n) {
          var e = m - n;
          return [
            (Io(i, Go(e)) / t) * Ko(e),
            qo((r - (i * i + e * e) * t * t) / (2 * t)),
          ];
        }),
        o
      );
    }
    var ku = function() {
        return Qu(Ku)
          .scale(155.424)
          .center([0, 33.6442]);
      },
      Ju = function() {
        return ku()
          .parallels([29.5, 45.5])
          .scale(1070)
          .translate([480, 250])
          .rotate([96, 0])
          .center([-0.6, 38.7]);
      };
    var zu = function() {
      var i,
        n,
        e,
        t,
        r,
        m,
        o = Ju(),
        c = ku()
          .rotate([154, 0])
          .center([-2, 58.5])
          .parallels([55, 65]),
        s = ku()
          .rotate([157, 0])
          .center([-3, 19.9])
          .parallels([8, 18]),
        d = {
          point: function(i, n) {
            m = [i, n];
          },
        };
      function u(i) {
        var n = i[0],
          o = i[1];
        return (
          (m = null),
          e.point(n, o),
          m || (t.point(n, o), m) || (r.point(n, o), m)
        );
      }
      function a() {
        return (i = n = null), u;
      }
      return (
        (u.invert = function(i) {
          var n = o.scale(),
            e = o.translate(),
            t = (i[0] - e[0]) / n,
            r = (i[1] - e[1]) / n;
          return (r >= 0.12 && r < 0.234 && t >= -0.425 && t < -0.214
            ? c
            : r >= 0.166 && r < 0.234 && t >= -0.214 && t < -0.115
            ? s
            : o
          ).invert(i);
        }),
        (u.stream = function(e) {
          return i && n === e
            ? i
            : ((t = [o.stream((n = e)), c.stream(e), s.stream(e)]),
              (r = t.length),
              (i = {
                point: function(i, n) {
                  for (var e = -1; ++e < r; ) t[e].point(i, n);
                },
                sphere: function() {
                  for (var i = -1; ++i < r; ) t[i].sphere();
                },
                lineStart: function() {
                  for (var i = -1; ++i < r; ) t[i].lineStart();
                },
                lineEnd: function() {
                  for (var i = -1; ++i < r; ) t[i].lineEnd();
                },
                polygonStart: function() {
                  for (var i = -1; ++i < r; ) t[i].polygonStart();
                },
                polygonEnd: function() {
                  for (var i = -1; ++i < r; ) t[i].polygonEnd();
                },
              }));
          var t, r;
        }),
        (u.precision = function(i) {
          return arguments.length
            ? (o.precision(i), c.precision(i), s.precision(i), a())
            : o.precision();
        }),
        (u.scale = function(i) {
          return arguments.length
            ? (o.scale(i),
              c.scale(0.35 * i),
              s.scale(i),
              u.translate(o.translate()))
            : o.scale();
        }),
        (u.translate = function(i) {
          if (!arguments.length) return o.translate();
          var n = o.scale(),
            m = +i[0],
            u = +i[1];
          return (
            (e = o
              .translate(i)
              .clipExtent([
                [m - 0.455 * n, u - 0.238 * n],
                [m + 0.455 * n, u + 0.238 * n],
              ])
              .stream(d)),
            (t = c
              .translate([m - 0.307 * n, u + 0.201 * n])
              .clipExtent([
                [m - 0.425 * n + Ro, u + 0.12 * n + Ro],
                [m - 0.214 * n - Ro, u + 0.234 * n - Ro],
              ])
              .stream(d)),
            (r = s
              .translate([m - 0.205 * n, u + 0.212 * n])
              .clipExtent([
                [m - 0.214 * n + Ro, u + 0.166 * n + Ro],
                [m - 0.115 * n - Ro, u + 0.234 * n - Ro],
              ])
              .stream(d)),
            a()
          );
        }),
        (u.fitExtent = function(i, n) {
          return Yu(u, i, n);
        }),
        (u.fitSize = function(i, n) {
          return Fu(u, i, n);
        }),
        (u.fitWidth = function(i, n) {
          return Pu(u, i, n);
        }),
        (u.fitHeight = function(i, n) {
          return Gu(u, i, n);
        }),
        u.scale(1070)
      );
    };
    function qu(i) {
      return function(n, e) {
        var t = Ho(n),
          r = Ho(e),
          m = i(t * r);
        return [m * r * Qo(n), m * Qo(e)];
      };
    }
    function ju(i) {
      return function(n, e) {
        var t = ko(n * n + e * e),
          r = i(t),
          m = Qo(r),
          o = Ho(r);
        return [Io(n * m, t * o), qo(t && (e * m) / t)];
      };
    }
    var Zu = qu(function(i) {
      return ko(2 / (1 + i));
    });
    Zu.invert = ju(function(i) {
      return 2 * qo(i / 2);
    });
    var $u = function() {
        return wu(Zu)
          .scale(124.75)
          .clipAngle(179.999);
      },
      ia = qu(function(i) {
        return (i = zo(i)) && i / Qo(i);
      });
    ia.invert = ju(function(i) {
      return i;
    });
    var na = function() {
      return wu(ia)
        .scale(79.4188)
        .clipAngle(179.999);
    };
    function ea(i, n) {
      return [i, wo(Jo((Bo + n) / 2))];
    }
    ea.invert = function(i, n) {
      return [i, 2 * Uo(Wo(n)) - Bo];
    };
    var ta = function() {
      return ra(ea).scale(961 / Yo);
    };
    function ra(i) {
      var n,
        e,
        t,
        r = wu(i),
        m = r.center,
        o = r.scale,
        c = r.translate,
        s = r.clipExtent,
        d = null;
      function u() {
        var m = Vo * o(),
          c = r(Rs(r.rotate()).invert([0, 0]));
        return s(
          null == d
            ? [[c[0] - m, c[1] - m], [c[0] + m, c[1] + m]]
            : i === ea
            ? [[Math.max(c[0] - m, d), n], [Math.min(c[0] + m, e), t]]
            : [[d, Math.max(c[1] - m, n)], [e, Math.min(c[1] + m, t)]]
        );
      }
      return (
        (r.scale = function(i) {
          return arguments.length ? (o(i), u()) : o();
        }),
        (r.translate = function(i) {
          return arguments.length ? (c(i), u()) : c();
        }),
        (r.center = function(i) {
          return arguments.length ? (m(i), u()) : m();
        }),
        (r.clipExtent = function(i) {
          return arguments.length
            ? (null == i
                ? (d = n = e = t = null)
                : ((d = +i[0][0]),
                  (n = +i[0][1]),
                  (e = +i[1][0]),
                  (t = +i[1][1])),
              u())
            : null == d
            ? null
            : [[d, n], [e, t]];
        }),
        u()
      );
    }
    function ma(i) {
      return Jo((Bo + i) / 2);
    }
    function oa(i, n) {
      var e = Ho(i),
        t = i === n ? Qo(i) : wo(e / Ho(n)) / wo(ma(n) / ma(i)),
        r = (e * Xo(ma(i), t)) / t;
      if (!t) return ea;
      function m(i, n) {
        r > 0 ? n < -Bo + Ro && (n = -Bo + Ro) : n > Bo - Ro && (n = Bo - Ro);
        var e = r / Xo(ma(n), t);
        return [e * Qo(t * i), r - e * Ho(t * i)];
      }
      return (
        (m.invert = function(i, n) {
          var e = r - n,
            m = Ko(t) * ko(i * i + e * e);
          return [(Io(i, Go(e)) / t) * Ko(e), 2 * Uo(Xo(r / m, 1 / t)) - Bo];
        }),
        m
      );
    }
    var ca = function() {
      return Qu(oa)
        .scale(109.5)
        .parallels([30, 30]);
    };
    function sa(i, n) {
      return [i, n];
    }
    sa.invert = sa;
    var da = function() {
      return wu(sa).scale(152.63);
    };
    function ua(i, n) {
      var e = Ho(i),
        t = i === n ? Qo(i) : (e - Ho(n)) / (n - i),
        r = e / t + i;
      if (Go(t) < Ro) return sa;
      function m(i, n) {
        var e = r - n,
          m = t * i;
        return [e * Qo(m), r - e * Ho(m)];
      }
      return (
        (m.invert = function(i, n) {
          var e = r - n;
          return [(Io(i, Go(e)) / t) * Ko(e), r - Ko(t) * ko(i * i + e * e)];
        }),
        m
      );
    }
    var aa = function() {
        return Qu(ua)
          .scale(131.154)
          .center([0, 13.9389]);
      },
      fa = 1.340264,
      la = -0.081106,
      ha = 893e-6,
      Aa = 0.003796,
      Oa = ko(3) / 2;
    function pa(i, n) {
      var e = qo(Oa * Qo(n)),
        t = e * e,
        r = t * t * t;
      return [
        (i * Ho(e)) / (Oa * (fa + 3 * la * t + r * (7 * ha + 9 * Aa * t))),
        e * (fa + la * t + r * (ha + Aa * t)),
      ];
    }
    pa.invert = function(i, n) {
      for (
        var e, t = n, r = t * t, m = r * r * r, o = 0;
        o < 12 &&
        ((m =
          (r =
            (t -= e =
              (t * (fa + la * r + m * (ha + Aa * r)) - n) /
              (fa + 3 * la * r + m * (7 * ha + 9 * Aa * r))) * t) *
          r *
          r),
        !(Go(e) < _o));
        ++o
      );
      return [
        (Oa * i * (fa + 3 * la * r + m * (7 * ha + 9 * Aa * r))) / Ho(t),
        qo(Qo(t) / Oa),
      ];
    };
    var Sa = function() {
      return wu(pa).scale(177.158);
    };
    function Ma(i, n) {
      var e = Ho(n),
        t = Ho(i) * e;
      return [(e * Qo(i)) / t, Qo(n) / t];
    }
    Ma.invert = ju(Uo);
    var Ea = function() {
      return wu(Ma)
        .scale(144.049)
        .clipAngle(60);
    };
    function La(i, n, e, t) {
      return 1 === i && 1 === n && 0 === e && 0 === t
        ? Bd
        : Vu({
            point: function(r, m) {
              this.stream.point(r * i + e, m * n + t);
            },
          });
    }
    var Da = function() {
      var i,
        n,
        e,
        t,
        r,
        m,
        o = 1,
        c = 0,
        s = 0,
        d = 1,
        u = 1,
        a = Bd,
        f = null,
        l = Bd;
      function h() {
        return (t = r = null), m;
      }
      return (m = {
        stream: function(i) {
          return t && r === i ? t : (t = a(l((r = i))));
        },
        postclip: function(t) {
          return arguments.length ? ((l = t), (f = i = n = e = null), h()) : l;
        },
        clipExtent: function(t) {
          return arguments.length
            ? ((l =
                null == t
                  ? ((f = i = n = e = null), Bd)
                  : id(
                      (f = +t[0][0]),
                      (i = +t[0][1]),
                      (n = +t[1][0]),
                      (e = +t[1][1])
                    )),
              h())
            : null == f
            ? null
            : [[f, i], [n, e]];
        },
        scale: function(i) {
          return arguments.length
            ? ((a = La((o = +i) * d, o * u, c, s)), h())
            : o;
        },
        translate: function(i) {
          return arguments.length
            ? ((a = La(o * d, o * u, (c = +i[0]), (s = +i[1]))), h())
            : [c, s];
        },
        reflectX: function(i) {
          return arguments.length
            ? ((a = La(o * (d = i ? -1 : 1), o * u, c, s)), h())
            : d < 0;
        },
        reflectY: function(i) {
          return arguments.length
            ? ((a = La(o * d, o * (u = i ? -1 : 1), c, s)), h())
            : u < 0;
        },
        fitExtent: function(i, n) {
          return Yu(m, i, n);
        },
        fitSize: function(i, n) {
          return Fu(m, i, n);
        },
        fitWidth: function(i, n) {
          return Pu(m, i, n);
        },
        fitHeight: function(i, n) {
          return Gu(m, i, n);
        },
      });
    };
    function Na(i, n) {
      var e = n * n,
        t = e * e;
      return [
        i *
          (0.8707 -
            0.131979 * e +
            t * (t * (0.003971 * e - 0.001529 * t) - 0.013791)),
        n *
          (1.007226 +
            e * (0.015085 + t * (0.028874 * e - 0.044475 - 0.005916 * t))),
      ];
    }
    Na.invert = function(i, n) {
      var e,
        t = n,
        r = 25;
      do {
        var m = t * t,
          o = m * m;
        t -= e =
          (t *
            (1.007226 +
              m * (0.015085 + o * (0.028874 * m - 0.044475 - 0.005916 * o))) -
            n) /
          (1.007226 +
            m * (0.045255 + o * (0.259866 * m - 0.311325 - 0.005916 * 11 * o)));
      } while (Go(e) > Ro && --r > 0);
      return [
        i /
          (0.8707 +
            (m = t * t) *
              (m * (m * m * m * (0.003971 - 0.001529 * m) - 0.013791) -
                0.131979)),
        t,
      ];
    };
    var va = function() {
      return wu(Na).scale(175.295);
    };
    function Ca(i, n) {
      return [Ho(n) * Qo(i), Qo(n)];
    }
    Ca.invert = ju(qo);
    var ya = function() {
      return wu(Ca)
        .scale(249.5)
        .clipAngle(90 + Ro);
    };
    function ga(i, n) {
      var e = Ho(n),
        t = 1 + Ho(i) * e;
      return [(e * Qo(i)) / t, Qo(n) / t];
    }
    ga.invert = ju(function(i) {
      return 2 * Uo(i);
    });
    var Ta = function() {
      return wu(ga)
        .scale(250)
        .clipAngle(142);
    };
    function Ra(i, n) {
      return [wo(Jo((Bo + n) / 2)), -i];
    }
    Ra.invert = function(i, n) {
      return [-n, 2 * Uo(Wo(i)) - Bo];
    };
    var _a = function() {
        var i = ra(Ra),
          n = i.center,
          e = i.rotate;
        return (
          (i.center = function(i) {
            return arguments.length ? n([-i[1], i[0]]) : [(i = n())[1], -i[0]];
          }),
          (i.rotate = function(i) {
            return arguments.length
              ? e([i[0], i[1], i.length > 2 ? i[2] + 90 : 90])
              : [(i = e())[0], i[1], i[2] - 90];
          }),
          e([0, 0, 90]).scale(159.155)
        );
      },
      Va = e(3),
      Ba = function(i) {
        for (var n, e = -1, t = i.length, r = i[t - 1], m = 0; ++e < t; )
          (n = r), (r = i[e]), (m += n[1] * r[0] - n[0] * r[1]);
        return m / 2;
      },
      ba = function(i) {
        for (
          var n, e, t = -1, r = i.length, m = 0, o = 0, c = i[r - 1], s = 0;
          ++t < r;

        )
          (n = c),
            (c = i[t]),
            (s += e = n[0] * c[1] - c[0] * n[1]),
            (m += (n[0] + c[0]) * e),
            (o += (n[1] + c[1]) * e);
        return [m / (s *= 3), o / s];
      },
      Ya = function(i, n, e) {
        return (n[0] - i[0]) * (e[1] - i[1]) - (n[1] - i[1]) * (e[0] - i[0]);
      };
    function Fa(i, n) {
      return i[0] - n[0] || i[1] - n[1];
    }
    function Pa(i) {
      for (var n = i.length, e = [0, 1], t = 2, r = 2; r < n; ++r) {
        for (; t > 1 && Ya(i[e[t - 2]], i[e[t - 1]], i[r]) <= 0; ) --t;
        e[t++] = r;
      }
      return e.slice(0, t);
    }
    var Ga = function(i) {
        if ((e = i.length) < 3) return null;
        var n,
          e,
          t = new Array(e),
          r = new Array(e);
        for (n = 0; n < e; ++n) t[n] = [+i[n][0], +i[n][1], n];
        for (t.sort(Fa), n = 0; n < e; ++n) r[n] = [t[n][0], -t[n][1]];
        var m = Pa(t),
          o = Pa(r),
          c = o[0] === m[0],
          s = o[o.length - 1] === m[m.length - 1],
          d = [];
        for (n = m.length - 1; n >= 0; --n) d.push(i[t[m[n]][2]]);
        for (n = +c; n < o.length - s; ++n) d.push(i[t[o[n]][2]]);
        return d;
      },
      Ua = function(i, n) {
        for (
          var e,
            t,
            r = i.length,
            m = i[r - 1],
            o = n[0],
            c = n[1],
            s = m[0],
            d = m[1],
            u = !1,
            a = 0;
          a < r;
          ++a
        )
          (e = (m = i[a])[0]),
            (t = m[1]) > c != d > c &&
              o < ((s - e) * (c - t)) / (d - t) + e &&
              (u = !u),
            (s = e),
            (d = t);
        return u;
      },
      Ia = function(i) {
        for (
          var n,
            e,
            t = -1,
            r = i.length,
            m = i[r - 1],
            o = m[0],
            c = m[1],
            s = 0;
          ++t < r;

        )
          (n = o),
            (e = c),
            (n -= o = (m = i[t])[0]),
            (e -= c = m[1]),
            (s += Math.sqrt(n * n + e * e));
        return s;
      },
      Ha = function() {
        return Math.random();
      },
      xa = (function i(n) {
        function e(i, e) {
          return (
            (i = null == i ? 0 : +i),
            (e = null == e ? 1 : +e),
            1 === arguments.length ? ((e = i), (i = 0)) : (e -= i),
            function() {
              return n() * e + i;
            }
          );
        }
        return (e.source = i), e;
      })(Ha),
      Wa = (function i(n) {
        function e(i, e) {
          var t, r;
          return (
            (i = null == i ? 0 : +i),
            (e = null == e ? 1 : +e),
            function() {
              var m;
              if (null != t) (m = t), (t = null);
              else
                do {
                  (t = 2 * n() - 1), (m = 2 * n() - 1), (r = t * t + m * m);
                } while (!r || r > 1);
              return i + e * m * Math.sqrt((-2 * Math.log(r)) / r);
            }
          );
        }
        return (e.source = i), e;
      })(Ha),
      wa = (function i(n) {
        function e() {
          var i = Wa.source(n).apply(this, arguments);
          return function() {
            return Math.exp(i());
          };
        }
        return (e.source = i), e;
      })(Ha),
      Xa = (function i(n) {
        function e(i) {
          return function() {
            for (var e = 0, t = 0; t < i; ++t) e += n();
            return e;
          };
        }
        return (e.source = i), e;
      })(Ha),
      Qa = (function i(n) {
        function e(i) {
          var e = Xa.source(n)(i);
          return function() {
            return e() / i;
          };
        }
        return (e.source = i), e;
      })(Ha),
      Ka = (function i(n) {
        function e(i) {
          return function() {
            return -Math.log(1 - n()) / i;
          };
        }
        return (e.source = i), e;
      })(Ha),
      ka = function(i, n) {
        return i < n ? -1 : i > n ? 1 : i >= n ? 0 : NaN;
      },
      Ja = function(i) {
        return (
          1 === i.length &&
            (i = (function(i) {
              return function(n, e) {
                return ka(i(n), e);
              };
            })(i)),
          {
            left: function(n, e, t, r) {
              for (null == t && (t = 0), null == r && (r = n.length); t < r; ) {
                var m = (t + r) >>> 1;
                i(n[m], e) < 0 ? (t = m + 1) : (r = m);
              }
              return t;
            },
            right: function(n, e, t, r) {
              for (null == t && (t = 0), null == r && (r = n.length); t < r; ) {
                var m = (t + r) >>> 1;
                i(n[m], e) > 0 ? (r = m) : (t = m + 1);
              }
              return t;
            },
          }
        );
      };
    var za = Ja(ka),
      qa = za.right,
      ja = (za.left, qa);
    var Za = function(i) {
        return null === i ? NaN : +i;
      },
      $a = Array.prototype,
      nf =
        ($a.slice,
        $a.map,
        function(i, n, e) {
          (i = +i),
            (n = +n),
            (e =
              (r = arguments.length) < 2
                ? ((n = i), (i = 0), 1)
                : r < 3
                ? 1
                : +e);
          for (
            var t = -1,
              r = 0 | Math.max(0, Math.ceil((n - i) / e)),
              m = new Array(r);
            ++t < r;

          )
            m[t] = i + t * e;
          return m;
        }),
      ef = Math.sqrt(50),
      tf = Math.sqrt(10),
      rf = Math.sqrt(2),
      mf = function(i, n, e) {
        var t,
          r,
          m,
          o,
          c = -1;
        if (((e = +e), (i = +i) === (n = +n) && e > 0)) return [i];
        if (
          ((t = n < i) && ((r = i), (i = n), (n = r)),
          0 === (o = of(i, n, e)) || !isFinite(o))
        )
          return [];
        if (o > 0)
          for (
            i = Math.ceil(i / o),
              n = Math.floor(n / o),
              m = new Array((r = Math.ceil(n - i + 1)));
            ++c < r;

          )
            m[c] = (i + c) * o;
        else
          for (
            i = Math.floor(i * o),
              n = Math.ceil(n * o),
              m = new Array((r = Math.ceil(i - n + 1)));
            ++c < r;

          )
            m[c] = (i - c) / o;
        return t && m.reverse(), m;
      };
    function of(i, n, e) {
      var t = (n - i) / Math.max(0, e),
        r = Math.floor(Math.log(t) / Math.LN10),
        m = t / Math.pow(10, r);
      return r >= 0
        ? (m >= ef ? 10 : m >= tf ? 5 : m >= rf ? 2 : 1) * Math.pow(10, r)
        : -Math.pow(10, -r) / (m >= ef ? 10 : m >= tf ? 5 : m >= rf ? 2 : 1);
    }
    function cf(i, n, e) {
      var t = Math.abs(n - i) / Math.max(0, e),
        r = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)),
        m = t / r;
      return (
        m >= ef ? (r *= 10) : m >= tf ? (r *= 5) : m >= rf && (r *= 2),
        n < i ? -r : r
      );
    }
    var sf = function(i, n, e) {
      if ((null == e && (e = Za), (t = i.length))) {
        if ((n = +n) <= 0 || t < 2) return +e(i[0], 0, i);
        if (n >= 1) return +e(i[t - 1], t - 1, i);
        var t,
          r = (t - 1) * n,
          m = Math.floor(r),
          o = +e(i[m], m, i);
        return o + (+e(i[m + 1], m + 1, i) - o) * (r - m);
      }
    };
    function df(i, n) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(i);
          break;
        default:
          this.range(n).domain(i);
      }
      return this;
    }
    function uf(i, n) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.interpolator(i);
          break;
        default:
          this.interpolator(n).domain(i);
      }
      return this;
    }
    var af = Array.prototype,
      ff = af.map,
      lf = af.slice,
      hf = {name: 'implicit'};
    function Af() {
      var i = cr(),
        n = [],
        e = [],
        t = hf;
      function r(r) {
        var m = r + '',
          o = i.get(m);
        if (!o) {
          if (t !== hf) return t;
          i.set(m, (o = n.push(r)));
        }
        return e[(o - 1) % e.length];
      }
      return (
        (r.domain = function(e) {
          if (!arguments.length) return n.slice();
          (n = []), (i = cr());
          for (var t, m, o = -1, c = e.length; ++o < c; )
            i.has((m = (t = e[o]) + '')) || i.set(m, n.push(t));
          return r;
        }),
        (r.range = function(i) {
          return arguments.length ? ((e = lf.call(i)), r) : e.slice();
        }),
        (r.unknown = function(i) {
          return arguments.length ? ((t = i), r) : t;
        }),
        (r.copy = function() {
          return Af(n, e).unknown(t);
        }),
        df.apply(r, arguments),
        r
      );
    }
    function Of() {
      var i,
        n,
        e = Af().unknown(void 0),
        t = e.domain,
        r = e.range,
        m = [0, 1],
        o = !1,
        c = 0,
        s = 0,
        d = 0.5;
      function u() {
        var e = t().length,
          u = m[1] < m[0],
          a = m[u - 0],
          f = m[1 - u];
        (i = (f - a) / Math.max(1, e - c + 2 * s)),
          o && (i = Math.floor(i)),
          (a += (f - a - i * (e - c)) * d),
          (n = i * (1 - c)),
          o && ((a = Math.round(a)), (n = Math.round(n)));
        var l = nf(e).map(function(n) {
          return a + i * n;
        });
        return r(u ? l.reverse() : l);
      }
      return (
        delete e.unknown,
        (e.domain = function(i) {
          return arguments.length ? (t(i), u()) : t();
        }),
        (e.range = function(i) {
          return arguments.length ? ((m = [+i[0], +i[1]]), u()) : m.slice();
        }),
        (e.rangeRound = function(i) {
          return (m = [+i[0], +i[1]]), (o = !0), u();
        }),
        (e.bandwidth = function() {
          return n;
        }),
        (e.step = function() {
          return i;
        }),
        (e.round = function(i) {
          return arguments.length ? ((o = !!i), u()) : o;
        }),
        (e.padding = function(i) {
          return arguments.length ? ((c = Math.min(1, (s = +i))), u()) : c;
        }),
        (e.paddingInner = function(i) {
          return arguments.length ? ((c = Math.min(1, i)), u()) : c;
        }),
        (e.paddingOuter = function(i) {
          return arguments.length ? ((s = +i), u()) : s;
        }),
        (e.align = function(i) {
          return arguments.length
            ? ((d = Math.max(0, Math.min(1, i))), u())
            : d;
        }),
        (e.copy = function() {
          return Of(t(), m)
            .round(o)
            .paddingInner(c)
            .paddingOuter(s)
            .align(d);
        }),
        df.apply(u(), arguments)
      );
    }
    function pf() {
      return (function i(n) {
        var e = n.copy;
        return (
          (n.padding = n.paddingOuter),
          delete n.paddingInner,
          delete n.paddingOuter,
          (n.copy = function() {
            return i(e());
          }),
          n
        );
      })(Of.apply(null, arguments).paddingInner(1));
    }
    var Sf = function(i) {
        return function() {
          return i;
        };
      },
      Mf = function(i) {
        return +i;
      },
      Ef = [0, 1];
    function Lf(i) {
      return i;
    }
    function Df(i, n) {
      return (n -= i = +i)
        ? function(e) {
            return (e - i) / n;
          }
        : Sf(isNaN(n) ? NaN : 0.5);
    }
    function Nf(i) {
      var n,
        e = i[0],
        t = i[i.length - 1];
      return (
        e > t && ((n = e), (e = t), (t = n)),
        function(i) {
          return Math.max(e, Math.min(t, i));
        }
      );
    }
    function vf(i, n, e) {
      var t = i[0],
        r = i[1],
        m = n[0],
        o = n[1];
      return (
        r < t
          ? ((t = Df(r, t)), (m = e(o, m)))
          : ((t = Df(t, r)), (m = e(m, o))),
        function(i) {
          return m(t(i));
        }
      );
    }
    function Cf(i, n, e) {
      var t = Math.min(i.length, n.length) - 1,
        r = new Array(t),
        m = new Array(t),
        o = -1;
      for (
        i[t] < i[0] && ((i = i.slice().reverse()), (n = n.slice().reverse()));
        ++o < t;

      )
        (r[o] = Df(i[o], i[o + 1])), (m[o] = e(n[o], n[o + 1]));
      return function(n) {
        var e = ja(i, n, 1, t) - 1;
        return m[e](r[e](n));
      };
    }
    function yf(i, n) {
      return n
        .domain(i.domain())
        .range(i.range())
        .interpolate(i.interpolate())
        .clamp(i.clamp())
        .unknown(i.unknown());
    }
    function gf() {
      var i,
        n,
        e,
        t,
        r,
        m,
        o = Ef,
        c = Ef,
        s = yn.a,
        d = Lf;
      function u() {
        return (
          (t = Math.min(o.length, c.length) > 2 ? Cf : vf), (r = m = null), a
        );
      }
      function a(n) {
        return isNaN((n = +n)) ? e : (r || (r = t(o.map(i), c, s)))(i(d(n)));
      }
      return (
        (a.invert = function(e) {
          return d(n((m || (m = t(c, o.map(i), yn.o)))(e)));
        }),
        (a.domain = function(i) {
          return arguments.length
            ? ((o = ff.call(i, Mf)), d === Lf || (d = Nf(o)), u())
            : o.slice();
        }),
        (a.range = function(i) {
          return arguments.length ? ((c = lf.call(i)), u()) : c.slice();
        }),
        (a.rangeRound = function(i) {
          return (c = lf.call(i)), (s = yn.t), u();
        }),
        (a.clamp = function(i) {
          return arguments.length ? ((d = i ? Nf(o) : Lf), a) : d !== Lf;
        }),
        (a.interpolate = function(i) {
          return arguments.length ? ((s = i), u()) : s;
        }),
        (a.unknown = function(i) {
          return arguments.length ? ((e = i), a) : e;
        }),
        function(e, t) {
          return (i = e), (n = t), u();
        }
      );
    }
    function Tf(i, n) {
      return gf()(i, n);
    }
    var Rf = function(i, n, e, t) {
      var r,
        m = cf(i, n, e);
      switch ((t = so(null == t ? ',f' : t)).type) {
        case 's':
          var o = Math.max(Math.abs(i), Math.abs(n));
          return (
            null != t.precision || isNaN((r = No(m, o))) || (t.precision = r),
            ho(t, o)
          );
        case '':
        case 'e':
        case 'g':
        case 'p':
        case 'r':
          null != t.precision ||
            isNaN((r = vo(m, Math.max(Math.abs(i), Math.abs(n))))) ||
            (t.precision = r - ('e' === t.type));
          break;
        case 'f':
        case '%':
          null != t.precision ||
            isNaN((r = Do(m))) ||
            (t.precision = r - 2 * ('%' === t.type));
      }
      return lo(t);
    };
    function _f(i) {
      var n = i.domain;
      return (
        (i.ticks = function(i) {
          var e = n();
          return mf(e[0], e[e.length - 1], null == i ? 10 : i);
        }),
        (i.tickFormat = function(i, e) {
          var t = n();
          return Rf(t[0], t[t.length - 1], null == i ? 10 : i, e);
        }),
        (i.nice = function(e) {
          null == e && (e = 10);
          var t,
            r = n(),
            m = 0,
            o = r.length - 1,
            c = r[m],
            s = r[o];
          return (
            s < c && ((t = c), (c = s), (s = t), (t = m), (m = o), (o = t)),
            (t = of(c, s, e)) > 0
              ? (t = of(
                  (c = Math.floor(c / t) * t),
                  (s = Math.ceil(s / t) * t),
                  e
                ))
              : t < 0 &&
                (t = of(
                  (c = Math.ceil(c * t) / t),
                  (s = Math.floor(s * t) / t),
                  e
                )),
            t > 0
              ? ((r[m] = Math.floor(c / t) * t),
                (r[o] = Math.ceil(s / t) * t),
                n(r))
              : t < 0 &&
                ((r[m] = Math.ceil(c * t) / t),
                (r[o] = Math.floor(s * t) / t),
                n(r)),
            i
          );
        }),
        i
      );
    }
    function Vf() {
      var i = Tf(Lf, Lf);
      return (
        (i.copy = function() {
          return yf(i, Vf());
        }),
        df.apply(i, arguments),
        _f(i)
      );
    }
    function Bf(i) {
      var n;
      function e(i) {
        return isNaN((i = +i)) ? n : i;
      }
      return (
        (e.invert = e),
        (e.domain = e.range = function(n) {
          return arguments.length ? ((i = ff.call(n, Mf)), e) : i.slice();
        }),
        (e.unknown = function(i) {
          return arguments.length ? ((n = i), e) : n;
        }),
        (e.copy = function() {
          return Bf(i).unknown(n);
        }),
        (i = arguments.length ? ff.call(i, Mf) : [0, 1]),
        _f(e)
      );
    }
    var bf = function(i, n) {
      var e,
        t = 0,
        r = (i = i.slice()).length - 1,
        m = i[t],
        o = i[r];
      return (
        o < m && ((e = t), (t = r), (r = e), (e = m), (m = o), (o = e)),
        (i[t] = n.floor(m)),
        (i[r] = n.ceil(o)),
        i
      );
    };
    function Yf(i) {
      return Math.log(i);
    }
    function Ff(i) {
      return Math.exp(i);
    }
    function Pf(i) {
      return -Math.log(-i);
    }
    function Gf(i) {
      return -Math.exp(-i);
    }
    function Uf(i) {
      return isFinite(i) ? +('1e' + i) : i < 0 ? 0 : i;
    }
    function If(i) {
      return function(n) {
        return -i(-n);
      };
    }
    function Hf(i) {
      var n,
        e,
        t = i(Yf, Ff),
        r = t.domain,
        m = 10;
      function o() {
        return (
          (n = (function(i) {
            return i === Math.E
              ? Math.log
              : (10 === i && Math.log10) ||
                  (2 === i && Math.log2) ||
                  ((i = Math.log(i)),
                  function(n) {
                    return Math.log(n) / i;
                  });
          })(m)),
          (e = (function(i) {
            return 10 === i
              ? Uf
              : i === Math.E
              ? Math.exp
              : function(n) {
                  return Math.pow(i, n);
                };
          })(m)),
          r()[0] < 0 ? ((n = If(n)), (e = If(e)), i(Pf, Gf)) : i(Yf, Ff),
          t
        );
      }
      return (
        (t.base = function(i) {
          return arguments.length ? ((m = +i), o()) : m;
        }),
        (t.domain = function(i) {
          return arguments.length ? (r(i), o()) : r();
        }),
        (t.ticks = function(i) {
          var t,
            o = r(),
            c = o[0],
            s = o[o.length - 1];
          (t = s < c) && ((f = c), (c = s), (s = f));
          var d,
            u,
            a,
            f = n(c),
            l = n(s),
            h = null == i ? 10 : +i,
            A = [];
          if (!(m % 1) && l - f < h) {
            if (((f = Math.round(f) - 1), (l = Math.round(l) + 1), c > 0)) {
              for (; f < l; ++f)
                for (u = 1, d = e(f); u < m; ++u)
                  if (!((a = d * u) < c)) {
                    if (a > s) break;
                    A.push(a);
                  }
            } else
              for (; f < l; ++f)
                for (u = m - 1, d = e(f); u >= 1; --u)
                  if (!((a = d * u) < c)) {
                    if (a > s) break;
                    A.push(a);
                  }
          } else A = mf(f, l, Math.min(l - f, h)).map(e);
          return t ? A.reverse() : A;
        }),
        (t.tickFormat = function(i, r) {
          if (
            (null == r && (r = 10 === m ? '.0e' : ','),
            'function' != typeof r && (r = lo(r)),
            i === 1 / 0)
          )
            return r;
          null == i && (i = 10);
          var o = Math.max(1, (m * i) / t.ticks().length);
          return function(i) {
            var t = i / e(Math.round(n(i)));
            return t * m < m - 0.5 && (t *= m), t <= o ? r(i) : '';
          };
        }),
        (t.nice = function() {
          return r(
            bf(r(), {
              floor: function(i) {
                return e(Math.floor(n(i)));
              },
              ceil: function(i) {
                return e(Math.ceil(n(i)));
              },
            })
          );
        }),
        t
      );
    }
    function xf() {
      var i = Hf(gf()).domain([1, 10]);
      return (
        (i.copy = function() {
          return yf(i, xf()).base(i.base());
        }),
        df.apply(i, arguments),
        i
      );
    }
    function Wf(i) {
      return function(n) {
        return Math.sign(n) * Math.log1p(Math.abs(n / i));
      };
    }
    function wf(i) {
      return function(n) {
        return Math.sign(n) * Math.expm1(Math.abs(n)) * i;
      };
    }
    function Xf(i) {
      var n = 1,
        e = i(Wf(n), wf(n));
      return (
        (e.constant = function(e) {
          return arguments.length ? i(Wf((n = +e)), wf(n)) : n;
        }),
        _f(e)
      );
    }
    function Qf() {
      var i = Xf(gf());
      return (
        (i.copy = function() {
          return yf(i, Qf()).constant(i.constant());
        }),
        df.apply(i, arguments)
      );
    }
    function Kf(i) {
      return function(n) {
        return n < 0 ? -Math.pow(-n, i) : Math.pow(n, i);
      };
    }
    function kf(i) {
      return i < 0 ? -Math.sqrt(-i) : Math.sqrt(i);
    }
    function Jf(i) {
      return i < 0 ? -i * i : i * i;
    }
    function zf(i) {
      var n = i(Lf, Lf),
        e = 1;
      return (
        (n.exponent = function(n) {
          return arguments.length
            ? 1 === (e = +n)
              ? i(Lf, Lf)
              : 0.5 === e
              ? i(kf, Jf)
              : i(Kf(e), Kf(1 / e))
            : e;
        }),
        _f(n)
      );
    }
    function qf() {
      var i = zf(gf());
      return (
        (i.copy = function() {
          return yf(i, qf()).exponent(i.exponent());
        }),
        df.apply(i, arguments),
        i
      );
    }
    function jf() {
      return qf.apply(null, arguments).exponent(0.5);
    }
    function Zf() {
      var i,
        n = [],
        e = [],
        t = [];
      function r() {
        var i = 0,
          r = Math.max(1, e.length);
        for (t = new Array(r - 1); ++i < r; ) t[i - 1] = sf(n, i / r);
        return m;
      }
      function m(n) {
        return isNaN((n = +n)) ? i : e[ja(t, n)];
      }
      return (
        (m.invertExtent = function(i) {
          var r = e.indexOf(i);
          return r < 0
            ? [NaN, NaN]
            : [r > 0 ? t[r - 1] : n[0], r < t.length ? t[r] : n[n.length - 1]];
        }),
        (m.domain = function(i) {
          if (!arguments.length) return n.slice();
          n = [];
          for (var e, t = 0, m = i.length; t < m; ++t)
            null == (e = i[t]) || isNaN((e = +e)) || n.push(e);
          return n.sort(ka), r();
        }),
        (m.range = function(i) {
          return arguments.length ? ((e = lf.call(i)), r()) : e.slice();
        }),
        (m.unknown = function(n) {
          return arguments.length ? ((i = n), m) : i;
        }),
        (m.quantiles = function() {
          return t.slice();
        }),
        (m.copy = function() {
          return Zf()
            .domain(n)
            .range(e)
            .unknown(i);
        }),
        df.apply(m, arguments)
      );
    }
    function $f() {
      var i,
        n = 0,
        e = 1,
        t = 1,
        r = [0.5],
        m = [0, 1];
      function o(n) {
        return n <= n ? m[ja(r, n, 0, t)] : i;
      }
      function c() {
        var i = -1;
        for (r = new Array(t); ++i < t; )
          r[i] = ((i + 1) * e - (i - t) * n) / (t + 1);
        return o;
      }
      return (
        (o.domain = function(i) {
          return arguments.length ? ((n = +i[0]), (e = +i[1]), c()) : [n, e];
        }),
        (o.range = function(i) {
          return arguments.length
            ? ((t = (m = lf.call(i)).length - 1), c())
            : m.slice();
        }),
        (o.invertExtent = function(i) {
          var o = m.indexOf(i);
          return o < 0
            ? [NaN, NaN]
            : o < 1
            ? [n, r[0]]
            : o >= t
            ? [r[t - 1], e]
            : [r[o - 1], r[o]];
        }),
        (o.unknown = function(n) {
          return arguments.length ? ((i = n), o) : o;
        }),
        (o.thresholds = function() {
          return r.slice();
        }),
        (o.copy = function() {
          return $f()
            .domain([n, e])
            .range(m)
            .unknown(i);
        }),
        df.apply(_f(o), arguments)
      );
    }
    function il() {
      var i,
        n = [0.5],
        e = [0, 1],
        t = 1;
      function r(r) {
        return r <= r ? e[ja(n, r, 0, t)] : i;
      }
      return (
        (r.domain = function(i) {
          return arguments.length
            ? ((n = lf.call(i)), (t = Math.min(n.length, e.length - 1)), r)
            : n.slice();
        }),
        (r.range = function(i) {
          return arguments.length
            ? ((e = lf.call(i)), (t = Math.min(n.length, e.length - 1)), r)
            : e.slice();
        }),
        (r.invertExtent = function(i) {
          var t = e.indexOf(i);
          return [n[t - 1], n[t]];
        }),
        (r.unknown = function(n) {
          return arguments.length ? ((i = n), r) : i;
        }),
        (r.copy = function() {
          return il()
            .domain(n)
            .range(e)
            .unknown(i);
        }),
        df.apply(r, arguments)
      );
    }
    var nl = new Date(),
      el = new Date();
    function tl(i, n, e, t) {
      function r(n) {
        return i((n = new Date(+n))), n;
      }
      return (
        (r.floor = r),
        (r.ceil = function(e) {
          return i((e = new Date(e - 1))), n(e, 1), i(e), e;
        }),
        (r.round = function(i) {
          var n = r(i),
            e = r.ceil(i);
          return i - n < e - i ? n : e;
        }),
        (r.offset = function(i, e) {
          return n((i = new Date(+i)), null == e ? 1 : Math.floor(e)), i;
        }),
        (r.range = function(e, t, m) {
          var o,
            c = [];
          if (
            ((e = r.ceil(e)),
            (m = null == m ? 1 : Math.floor(m)),
            !(e < t && m > 0))
          )
            return c;
          do {
            c.push((o = new Date(+e))), n(e, m), i(e);
          } while (o < e && e < t);
          return c;
        }),
        (r.filter = function(e) {
          return tl(
            function(n) {
              if (n >= n) for (; i(n), !e(n); ) n.setTime(n - 1);
            },
            function(i, t) {
              if (i >= i)
                if (t < 0) for (; ++t <= 0; ) for (; n(i, -1), !e(i); );
                else for (; --t >= 0; ) for (; n(i, 1), !e(i); );
            }
          );
        }),
        e &&
          ((r.count = function(n, t) {
            return (
              nl.setTime(+n),
              el.setTime(+t),
              i(nl),
              i(el),
              Math.floor(e(nl, el))
            );
          }),
          (r.every = function(i) {
            return (
              (i = Math.floor(i)),
              isFinite(i) && i > 0
                ? i > 1
                  ? r.filter(
                      t
                        ? function(n) {
                            return t(n) % i == 0;
                          }
                        : function(n) {
                            return r.count(0, n) % i == 0;
                          }
                    )
                  : r
                : null
            );
          })),
        r
      );
    }
    var rl = tl(
      function() {},
      function(i, n) {
        i.setTime(+i + n);
      },
      function(i, n) {
        return n - i;
      }
    );
    rl.every = function(i) {
      return (
        (i = Math.floor(i)),
        isFinite(i) && i > 0
          ? i > 1
            ? tl(
                function(n) {
                  n.setTime(Math.floor(n / i) * i);
                },
                function(n, e) {
                  n.setTime(+n + e * i);
                },
                function(n, e) {
                  return (e - n) / i;
                }
              )
            : rl
          : null
      );
    };
    var ml = rl,
      ol = rl.range,
      cl = 6e4,
      sl = 6048e5,
      dl = tl(
        function(i) {
          i.setTime(i - i.getMilliseconds());
        },
        function(i, n) {
          i.setTime(+i + 1e3 * n);
        },
        function(i, n) {
          return (n - i) / 1e3;
        },
        function(i) {
          return i.getUTCSeconds();
        }
      ),
      ul = dl,
      al = dl.range,
      fl = tl(
        function(i) {
          i.setTime(i - i.getMilliseconds() - 1e3 * i.getSeconds());
        },
        function(i, n) {
          i.setTime(+i + n * cl);
        },
        function(i, n) {
          return (n - i) / cl;
        },
        function(i) {
          return i.getMinutes();
        }
      ),
      ll = fl,
      hl = fl.range,
      Al = tl(
        function(i) {
          i.setTime(
            i - i.getMilliseconds() - 1e3 * i.getSeconds() - i.getMinutes() * cl
          );
        },
        function(i, n) {
          i.setTime(+i + 36e5 * n);
        },
        function(i, n) {
          return (n - i) / 36e5;
        },
        function(i) {
          return i.getHours();
        }
      ),
      Ol = Al,
      pl = Al.range,
      Sl = tl(
        function(i) {
          i.setHours(0, 0, 0, 0);
        },
        function(i, n) {
          i.setDate(i.getDate() + n);
        },
        function(i, n) {
          return (
            (n - i - (n.getTimezoneOffset() - i.getTimezoneOffset()) * cl) /
            864e5
          );
        },
        function(i) {
          return i.getDate() - 1;
        }
      ),
      Ml = Sl,
      El = Sl.range;
    function Ll(i) {
      return tl(
        function(n) {
          n.setDate(n.getDate() - ((n.getDay() + 7 - i) % 7)),
            n.setHours(0, 0, 0, 0);
        },
        function(i, n) {
          i.setDate(i.getDate() + 7 * n);
        },
        function(i, n) {
          return (
            (n - i - (n.getTimezoneOffset() - i.getTimezoneOffset()) * cl) / sl
          );
        }
      );
    }
    var Dl = Ll(0),
      Nl = Ll(1),
      vl = Ll(2),
      Cl = Ll(3),
      yl = Ll(4),
      gl = Ll(5),
      Tl = Ll(6),
      Rl = Dl.range,
      _l = Nl.range,
      Vl = vl.range,
      Bl = Cl.range,
      bl = yl.range,
      Yl = gl.range,
      Fl = Tl.range,
      Pl = tl(
        function(i) {
          i.setDate(1), i.setHours(0, 0, 0, 0);
        },
        function(i, n) {
          i.setMonth(i.getMonth() + n);
        },
        function(i, n) {
          return (
            n.getMonth() -
            i.getMonth() +
            12 * (n.getFullYear() - i.getFullYear())
          );
        },
        function(i) {
          return i.getMonth();
        }
      ),
      Gl = Pl,
      Ul = Pl.range,
      Il = tl(
        function(i) {
          i.setMonth(0, 1), i.setHours(0, 0, 0, 0);
        },
        function(i, n) {
          i.setFullYear(i.getFullYear() + n);
        },
        function(i, n) {
          return n.getFullYear() - i.getFullYear();
        },
        function(i) {
          return i.getFullYear();
        }
      );
    Il.every = function(i) {
      return isFinite((i = Math.floor(i))) && i > 0
        ? tl(
            function(n) {
              n.setFullYear(Math.floor(n.getFullYear() / i) * i),
                n.setMonth(0, 1),
                n.setHours(0, 0, 0, 0);
            },
            function(n, e) {
              n.setFullYear(n.getFullYear() + e * i);
            }
          )
        : null;
    };
    var Hl = Il,
      xl = Il.range,
      Wl = tl(
        function(i) {
          i.setUTCSeconds(0, 0);
        },
        function(i, n) {
          i.setTime(+i + n * cl);
        },
        function(i, n) {
          return (n - i) / cl;
        },
        function(i) {
          return i.getUTCMinutes();
        }
      ),
      wl = Wl,
      Xl = Wl.range,
      Ql = tl(
        function(i) {
          i.setUTCMinutes(0, 0, 0);
        },
        function(i, n) {
          i.setTime(+i + 36e5 * n);
        },
        function(i, n) {
          return (n - i) / 36e5;
        },
        function(i) {
          return i.getUTCHours();
        }
      ),
      Kl = Ql,
      kl = Ql.range,
      Jl = tl(
        function(i) {
          i.setUTCHours(0, 0, 0, 0);
        },
        function(i, n) {
          i.setUTCDate(i.getUTCDate() + n);
        },
        function(i, n) {
          return (n - i) / 864e5;
        },
        function(i) {
          return i.getUTCDate() - 1;
        }
      ),
      zl = Jl,
      ql = Jl.range;
    function jl(i) {
      return tl(
        function(n) {
          n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - i) % 7)),
            n.setUTCHours(0, 0, 0, 0);
        },
        function(i, n) {
          i.setUTCDate(i.getUTCDate() + 7 * n);
        },
        function(i, n) {
          return (n - i) / sl;
        }
      );
    }
    var Zl = jl(0),
      $l = jl(1),
      ih = jl(2),
      nh = jl(3),
      eh = jl(4),
      th = jl(5),
      rh = jl(6),
      mh = Zl.range,
      oh = $l.range,
      ch = ih.range,
      sh = nh.range,
      dh = eh.range,
      uh = th.range,
      ah = rh.range,
      fh = tl(
        function(i) {
          i.setUTCDate(1), i.setUTCHours(0, 0, 0, 0);
        },
        function(i, n) {
          i.setUTCMonth(i.getUTCMonth() + n);
        },
        function(i, n) {
          return (
            n.getUTCMonth() -
            i.getUTCMonth() +
            12 * (n.getUTCFullYear() - i.getUTCFullYear())
          );
        },
        function(i) {
          return i.getUTCMonth();
        }
      ),
      lh = fh,
      hh = fh.range,
      Ah = tl(
        function(i) {
          i.setUTCMonth(0, 1), i.setUTCHours(0, 0, 0, 0);
        },
        function(i, n) {
          i.setUTCFullYear(i.getUTCFullYear() + n);
        },
        function(i, n) {
          return n.getUTCFullYear() - i.getUTCFullYear();
        },
        function(i) {
          return i.getUTCFullYear();
        }
      );
    Ah.every = function(i) {
      return isFinite((i = Math.floor(i))) && i > 0
        ? tl(
            function(n) {
              n.setUTCFullYear(Math.floor(n.getUTCFullYear() / i) * i),
                n.setUTCMonth(0, 1),
                n.setUTCHours(0, 0, 0, 0);
            },
            function(n, e) {
              n.setUTCFullYear(n.getUTCFullYear() + e * i);
            }
          )
        : null;
    };
    var Oh = Ah,
      ph = Ah.range;
    function Sh(i) {
      if (0 <= i.y && i.y < 100) {
        var n = new Date(-1, i.m, i.d, i.H, i.M, i.S, i.L);
        return n.setFullYear(i.y), n;
      }
      return new Date(i.y, i.m, i.d, i.H, i.M, i.S, i.L);
    }
    function Mh(i) {
      if (0 <= i.y && i.y < 100) {
        var n = new Date(Date.UTC(-1, i.m, i.d, i.H, i.M, i.S, i.L));
        return n.setUTCFullYear(i.y), n;
      }
      return new Date(Date.UTC(i.y, i.m, i.d, i.H, i.M, i.S, i.L));
    }
    function Eh(i) {
      return {y: i, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
    }
    function Lh(i) {
      var n = i.dateTime,
        e = i.date,
        t = i.time,
        r = i.periods,
        m = i.days,
        o = i.shortDays,
        c = i.months,
        s = i.shortMonths,
        d = bh(r),
        u = Yh(r),
        a = bh(m),
        f = Yh(m),
        l = bh(o),
        h = Yh(o),
        A = bh(c),
        O = Yh(c),
        p = bh(s),
        S = Yh(s),
        M = {
          a: function(i) {
            return o[i.getDay()];
          },
          A: function(i) {
            return m[i.getDay()];
          },
          b: function(i) {
            return s[i.getMonth()];
          },
          B: function(i) {
            return c[i.getMonth()];
          },
          c: null,
          d: iA,
          e: iA,
          f: mA,
          H: nA,
          I: eA,
          j: tA,
          L: rA,
          m: oA,
          M: cA,
          p: function(i) {
            return r[+(i.getHours() >= 12)];
          },
          Q: FA,
          s: PA,
          S: sA,
          u: dA,
          U: uA,
          V: aA,
          w: fA,
          W: lA,
          x: null,
          X: null,
          y: hA,
          Y: AA,
          Z: OA,
          '%': YA,
        },
        E = {
          a: function(i) {
            return o[i.getUTCDay()];
          },
          A: function(i) {
            return m[i.getUTCDay()];
          },
          b: function(i) {
            return s[i.getUTCMonth()];
          },
          B: function(i) {
            return c[i.getUTCMonth()];
          },
          c: null,
          d: pA,
          e: pA,
          f: DA,
          H: SA,
          I: MA,
          j: EA,
          L: LA,
          m: NA,
          M: vA,
          p: function(i) {
            return r[+(i.getUTCHours() >= 12)];
          },
          Q: FA,
          s: PA,
          S: CA,
          u: yA,
          U: gA,
          V: TA,
          w: RA,
          W: _A,
          x: null,
          X: null,
          y: VA,
          Y: BA,
          Z: bA,
          '%': YA,
        },
        L = {
          a: function(i, n, e) {
            var t = l.exec(n.slice(e));
            return t ? ((i.w = h[t[0].toLowerCase()]), e + t[0].length) : -1;
          },
          A: function(i, n, e) {
            var t = a.exec(n.slice(e));
            return t ? ((i.w = f[t[0].toLowerCase()]), e + t[0].length) : -1;
          },
          b: function(i, n, e) {
            var t = p.exec(n.slice(e));
            return t ? ((i.m = S[t[0].toLowerCase()]), e + t[0].length) : -1;
          },
          B: function(i, n, e) {
            var t = A.exec(n.slice(e));
            return t ? ((i.m = O[t[0].toLowerCase()]), e + t[0].length) : -1;
          },
          c: function(i, e, t) {
            return v(i, n, e, t);
          },
          d: Xh,
          e: Xh,
          f: qh,
          H: Kh,
          I: Kh,
          j: Qh,
          L: zh,
          m: wh,
          M: kh,
          p: function(i, n, e) {
            var t = d.exec(n.slice(e));
            return t ? ((i.p = u[t[0].toLowerCase()]), e + t[0].length) : -1;
          },
          Q: Zh,
          s: $h,
          S: Jh,
          u: Ph,
          U: Gh,
          V: Uh,
          w: Fh,
          W: Ih,
          x: function(i, n, t) {
            return v(i, e, n, t);
          },
          X: function(i, n, e) {
            return v(i, t, n, e);
          },
          y: xh,
          Y: Hh,
          Z: Wh,
          '%': jh,
        };
      function D(i, n) {
        return function(e) {
          var t,
            r,
            m,
            o = [],
            c = -1,
            s = 0,
            d = i.length;
          for (e instanceof Date || (e = new Date(+e)); ++c < d; )
            37 === i.charCodeAt(c) &&
              (o.push(i.slice(s, c)),
              null != (r = gh[(t = i.charAt(++c))])
                ? (t = i.charAt(++c))
                : (r = 'e' === t ? ' ' : '0'),
              (m = n[t]) && (t = m(e, r)),
              o.push(t),
              (s = c + 1));
          return o.push(i.slice(s, c)), o.join('');
        };
      }
      function N(i, n) {
        return function(e) {
          var t,
            r,
            m = Eh(1900);
          if (v(m, i, (e += ''), 0) != e.length) return null;
          if ('Q' in m) return new Date(m.Q);
          if (('p' in m && (m.H = (m.H % 12) + 12 * m.p), 'V' in m)) {
            if (m.V < 1 || m.V > 53) return null;
            'w' in m || (m.w = 1),
              'Z' in m
                ? ((r = (t = Mh(Eh(m.y))).getUTCDay()),
                  (t = r > 4 || 0 === r ? $l.ceil(t) : $l(t)),
                  (t = zl.offset(t, 7 * (m.V - 1))),
                  (m.y = t.getUTCFullYear()),
                  (m.m = t.getUTCMonth()),
                  (m.d = t.getUTCDate() + ((m.w + 6) % 7)))
                : ((r = (t = n(Eh(m.y))).getDay()),
                  (t = r > 4 || 0 === r ? Nl.ceil(t) : Nl(t)),
                  (t = Ml.offset(t, 7 * (m.V - 1))),
                  (m.y = t.getFullYear()),
                  (m.m = t.getMonth()),
                  (m.d = t.getDate() + ((m.w + 6) % 7)));
          } else
            ('W' in m || 'U' in m) &&
              ('w' in m || (m.w = 'u' in m ? m.u % 7 : 'W' in m ? 1 : 0),
              (r = 'Z' in m ? Mh(Eh(m.y)).getUTCDay() : n(Eh(m.y)).getDay()),
              (m.m = 0),
              (m.d =
                'W' in m
                  ? ((m.w + 6) % 7) + 7 * m.W - ((r + 5) % 7)
                  : m.w + 7 * m.U - ((r + 6) % 7)));
          return 'Z' in m
            ? ((m.H += (m.Z / 100) | 0), (m.M += m.Z % 100), Mh(m))
            : n(m);
        };
      }
      function v(i, n, e, t) {
        for (var r, m, o = 0, c = n.length, s = e.length; o < c; ) {
          if (t >= s) return -1;
          if (37 === (r = n.charCodeAt(o++))) {
            if (
              ((r = n.charAt(o++)),
              !(m = L[r in gh ? n.charAt(o++) : r]) || (t = m(i, e, t)) < 0)
            )
              return -1;
          } else if (r != e.charCodeAt(t++)) return -1;
        }
        return t;
      }
      return (
        (M.x = D(e, M)),
        (M.X = D(t, M)),
        (M.c = D(n, M)),
        (E.x = D(e, E)),
        (E.X = D(t, E)),
        (E.c = D(n, E)),
        {
          format: function(i) {
            var n = D((i += ''), M);
            return (
              (n.toString = function() {
                return i;
              }),
              n
            );
          },
          parse: function(i) {
            var n = N((i += ''), Sh);
            return (
              (n.toString = function() {
                return i;
              }),
              n
            );
          },
          utcFormat: function(i) {
            var n = D((i += ''), E);
            return (
              (n.toString = function() {
                return i;
              }),
              n
            );
          },
          utcParse: function(i) {
            var n = N(i, Mh);
            return (
              (n.toString = function() {
                return i;
              }),
              n
            );
          },
        }
      );
    }
    var Dh,
      Nh,
      vh,
      Ch,
      yh,
      gh = {'-': '', _: ' ', 0: '0'},
      Th = /^\s*\d+/,
      Rh = /^%/,
      _h = /[\\^$*+?|[\]().{}]/g;
    function Vh(i, n, e) {
      var t = i < 0 ? '-' : '',
        r = (t ? -i : i) + '',
        m = r.length;
      return t + (m < e ? new Array(e - m + 1).join(n) + r : r);
    }
    function Bh(i) {
      return i.replace(_h, '\\$&');
    }
    function bh(i) {
      return new RegExp('^(?:' + i.map(Bh).join('|') + ')', 'i');
    }
    function Yh(i) {
      for (var n = {}, e = -1, t = i.length; ++e < t; )
        n[i[e].toLowerCase()] = e;
      return n;
    }
    function Fh(i, n, e) {
      var t = Th.exec(n.slice(e, e + 1));
      return t ? ((i.w = +t[0]), e + t[0].length) : -1;
    }
    function Ph(i, n, e) {
      var t = Th.exec(n.slice(e, e + 1));
      return t ? ((i.u = +t[0]), e + t[0].length) : -1;
    }
    function Gh(i, n, e) {
      var t = Th.exec(n.slice(e, e + 2));
      return t ? ((i.U = +t[0]), e + t[0].length) : -1;
    }
    function Uh(i, n, e) {
      var t = Th.exec(n.slice(e, e + 2));
      return t ? ((i.V = +t[0]), e + t[0].length) : -1;
    }
    function Ih(i, n, e) {
      var t = Th.exec(n.slice(e, e + 2));
      return t ? ((i.W = +t[0]), e + t[0].length) : -1;
    }
    function Hh(i, n, e) {
      var t = Th.exec(n.slice(e, e + 4));
      return t ? ((i.y = +t[0]), e + t[0].length) : -1;
    }
    function xh(i, n, e) {
      var t = Th.exec(n.slice(e, e + 2));
      return t
        ? ((i.y = +t[0] + (+t[0] > 68 ? 1900 : 2e3)), e + t[0].length)
        : -1;
    }
    function Wh(i, n, e) {
      var t = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
      return t
        ? ((i.Z = t[1] ? 0 : -(t[2] + (t[3] || '00'))), e + t[0].length)
        : -1;
    }
    function wh(i, n, e) {
      var t = Th.exec(n.slice(e, e + 2));
      return t ? ((i.m = t[0] - 1), e + t[0].length) : -1;
    }
    function Xh(i, n, e) {
      var t = Th.exec(n.slice(e, e + 2));
      return t ? ((i.d = +t[0]), e + t[0].length) : -1;
    }
    function Qh(i, n, e) {
      var t = Th.exec(n.slice(e, e + 3));
      return t ? ((i.m = 0), (i.d = +t[0]), e + t[0].length) : -1;
    }
    function Kh(i, n, e) {
      var t = Th.exec(n.slice(e, e + 2));
      return t ? ((i.H = +t[0]), e + t[0].length) : -1;
    }
    function kh(i, n, e) {
      var t = Th.exec(n.slice(e, e + 2));
      return t ? ((i.M = +t[0]), e + t[0].length) : -1;
    }
    function Jh(i, n, e) {
      var t = Th.exec(n.slice(e, e + 2));
      return t ? ((i.S = +t[0]), e + t[0].length) : -1;
    }
    function zh(i, n, e) {
      var t = Th.exec(n.slice(e, e + 3));
      return t ? ((i.L = +t[0]), e + t[0].length) : -1;
    }
    function qh(i, n, e) {
      var t = Th.exec(n.slice(e, e + 6));
      return t ? ((i.L = Math.floor(t[0] / 1e3)), e + t[0].length) : -1;
    }
    function jh(i, n, e) {
      var t = Rh.exec(n.slice(e, e + 1));
      return t ? e + t[0].length : -1;
    }
    function Zh(i, n, e) {
      var t = Th.exec(n.slice(e));
      return t ? ((i.Q = +t[0]), e + t[0].length) : -1;
    }
    function $h(i, n, e) {
      var t = Th.exec(n.slice(e));
      return t ? ((i.Q = 1e3 * +t[0]), e + t[0].length) : -1;
    }
    function iA(i, n) {
      return Vh(i.getDate(), n, 2);
    }
    function nA(i, n) {
      return Vh(i.getHours(), n, 2);
    }
    function eA(i, n) {
      return Vh(i.getHours() % 12 || 12, n, 2);
    }
    function tA(i, n) {
      return Vh(1 + Ml.count(Hl(i), i), n, 3);
    }
    function rA(i, n) {
      return Vh(i.getMilliseconds(), n, 3);
    }
    function mA(i, n) {
      return rA(i, n) + '000';
    }
    function oA(i, n) {
      return Vh(i.getMonth() + 1, n, 2);
    }
    function cA(i, n) {
      return Vh(i.getMinutes(), n, 2);
    }
    function sA(i, n) {
      return Vh(i.getSeconds(), n, 2);
    }
    function dA(i) {
      var n = i.getDay();
      return 0 === n ? 7 : n;
    }
    function uA(i, n) {
      return Vh(Dl.count(Hl(i), i), n, 2);
    }
    function aA(i, n) {
      var e = i.getDay();
      return (
        (i = e >= 4 || 0 === e ? yl(i) : yl.ceil(i)),
        Vh(yl.count(Hl(i), i) + (4 === Hl(i).getDay()), n, 2)
      );
    }
    function fA(i) {
      return i.getDay();
    }
    function lA(i, n) {
      return Vh(Nl.count(Hl(i), i), n, 2);
    }
    function hA(i, n) {
      return Vh(i.getFullYear() % 100, n, 2);
    }
    function AA(i, n) {
      return Vh(i.getFullYear() % 1e4, n, 4);
    }
    function OA(i) {
      var n = i.getTimezoneOffset();
      return (
        (n > 0 ? '-' : ((n *= -1), '+')) +
        Vh((n / 60) | 0, '0', 2) +
        Vh(n % 60, '0', 2)
      );
    }
    function pA(i, n) {
      return Vh(i.getUTCDate(), n, 2);
    }
    function SA(i, n) {
      return Vh(i.getUTCHours(), n, 2);
    }
    function MA(i, n) {
      return Vh(i.getUTCHours() % 12 || 12, n, 2);
    }
    function EA(i, n) {
      return Vh(1 + zl.count(Oh(i), i), n, 3);
    }
    function LA(i, n) {
      return Vh(i.getUTCMilliseconds(), n, 3);
    }
    function DA(i, n) {
      return LA(i, n) + '000';
    }
    function NA(i, n) {
      return Vh(i.getUTCMonth() + 1, n, 2);
    }
    function vA(i, n) {
      return Vh(i.getUTCMinutes(), n, 2);
    }
    function CA(i, n) {
      return Vh(i.getUTCSeconds(), n, 2);
    }
    function yA(i) {
      var n = i.getUTCDay();
      return 0 === n ? 7 : n;
    }
    function gA(i, n) {
      return Vh(Zl.count(Oh(i), i), n, 2);
    }
    function TA(i, n) {
      var e = i.getUTCDay();
      return (
        (i = e >= 4 || 0 === e ? eh(i) : eh.ceil(i)),
        Vh(eh.count(Oh(i), i) + (4 === Oh(i).getUTCDay()), n, 2)
      );
    }
    function RA(i) {
      return i.getUTCDay();
    }
    function _A(i, n) {
      return Vh($l.count(Oh(i), i), n, 2);
    }
    function VA(i, n) {
      return Vh(i.getUTCFullYear() % 100, n, 2);
    }
    function BA(i, n) {
      return Vh(i.getUTCFullYear() % 1e4, n, 4);
    }
    function bA() {
      return '+0000';
    }
    function YA() {
      return '%';
    }
    function FA(i) {
      return +i;
    }
    function PA(i) {
      return Math.floor(+i / 1e3);
    }
    function GA(i) {
      return (
        (Dh = Lh(i)),
        (Nh = Dh.format),
        (vh = Dh.parse),
        (Ch = Dh.utcFormat),
        (yh = Dh.utcParse),
        Dh
      );
    }
    GA({
      dateTime: '%x, %X',
      date: '%-m/%-d/%Y',
      time: '%-I:%M:%S %p',
      periods: ['AM', 'PM'],
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      shortMonths: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    });
    var UA = Date.prototype.toISOString
      ? function(i) {
          return i.toISOString();
        }
      : Ch('%Y-%m-%dT%H:%M:%S.%LZ');
    var IA = +new Date('2000-01-01T00:00:00.000Z')
        ? function(i) {
            var n = new Date(i);
            return isNaN(n) ? null : n;
          }
        : yh('%Y-%m-%dT%H:%M:%S.%LZ'),
      HA = 1e3,
      xA = 60 * HA,
      WA = 60 * xA,
      wA = 24 * WA,
      XA = 7 * wA,
      QA = 30 * wA,
      KA = 365 * wA;
    function kA(i) {
      return new Date(i);
    }
    function JA(i) {
      return i instanceof Date ? +i : +new Date(+i);
    }
    function zA(i, n, e, t, r, m, o, c, s) {
      var d = Tf(Lf, Lf),
        u = d.invert,
        a = d.domain,
        f = s('.%L'),
        l = s(':%S'),
        h = s('%I:%M'),
        A = s('%I %p'),
        O = s('%a %d'),
        p = s('%b %d'),
        S = s('%B'),
        M = s('%Y'),
        E = [
          [o, 1, HA],
          [o, 5, 5 * HA],
          [o, 15, 15 * HA],
          [o, 30, 30 * HA],
          [m, 1, xA],
          [m, 5, 5 * xA],
          [m, 15, 15 * xA],
          [m, 30, 30 * xA],
          [r, 1, WA],
          [r, 3, 3 * WA],
          [r, 6, 6 * WA],
          [r, 12, 12 * WA],
          [t, 1, wA],
          [t, 2, 2 * wA],
          [e, 1, XA],
          [n, 1, QA],
          [n, 3, 3 * QA],
          [i, 1, KA],
        ];
      function L(c) {
        return (o(c) < c
          ? f
          : m(c) < c
          ? l
          : r(c) < c
          ? h
          : t(c) < c
          ? A
          : n(c) < c
          ? e(c) < c
            ? O
            : p
          : i(c) < c
          ? S
          : M)(c);
      }
      function D(n, e, t, r) {
        if ((null == n && (n = 10), 'number' == typeof n)) {
          var m = Math.abs(t - e) / n,
            o = Ja(function(i) {
              return i[2];
            }).right(E, m);
          o === E.length
            ? ((r = cf(e / KA, t / KA, n)), (n = i))
            : o
            ? ((r = (o = E[m / E[o - 1][2] < E[o][2] / m ? o - 1 : o])[1]),
              (n = o[0]))
            : ((r = Math.max(cf(e, t, n), 1)), (n = c));
        }
        return null == r ? n : n.every(r);
      }
      return (
        (d.invert = function(i) {
          return new Date(u(i));
        }),
        (d.domain = function(i) {
          return arguments.length ? a(ff.call(i, JA)) : a().map(kA);
        }),
        (d.ticks = function(i, n) {
          var e,
            t = a(),
            r = t[0],
            m = t[t.length - 1],
            o = m < r;
          return (
            o && ((e = r), (r = m), (m = e)),
            (e = (e = D(i, r, m, n)) ? e.range(r, m + 1) : []),
            o ? e.reverse() : e
          );
        }),
        (d.tickFormat = function(i, n) {
          return null == n ? L : s(n);
        }),
        (d.nice = function(i, n) {
          var e = a();
          return (i = D(i, e[0], e[e.length - 1], n)) ? a(bf(e, i)) : d;
        }),
        (d.copy = function() {
          return yf(d, zA(i, n, e, t, r, m, o, c, s));
        }),
        d
      );
    }
    var qA = function() {
        return df.apply(
          zA(Hl, Gl, Dl, Ml, Ol, ll, ul, ml, Nh).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments
        );
      },
      jA = function() {
        return df.apply(
          zA(Oh, lh, Zl, zl, Kl, wl, ul, ml, Ch).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments
        );
      };
    function ZA() {
      var i,
        n,
        e,
        t,
        r,
        m = 0,
        o = 1,
        c = Lf,
        s = !1;
      function d(n) {
        return isNaN((n = +n))
          ? r
          : c(
              0 === e
                ? 0.5
                : ((n = (t(n) - i) * e), s ? Math.max(0, Math.min(1, n)) : n)
            );
      }
      return (
        (d.domain = function(r) {
          return arguments.length
            ? ((i = t((m = +r[0]))),
              (n = t((o = +r[1]))),
              (e = i === n ? 0 : 1 / (n - i)),
              d)
            : [m, o];
        }),
        (d.clamp = function(i) {
          return arguments.length ? ((s = !!i), d) : s;
        }),
        (d.interpolator = function(i) {
          return arguments.length ? ((c = i), d) : c;
        }),
        (d.unknown = function(i) {
          return arguments.length ? ((r = i), d) : r;
        }),
        function(r) {
          return (
            (t = r), (i = r(m)), (n = r(o)), (e = i === n ? 0 : 1 / (n - i)), d
          );
        }
      );
    }
    function $A(i, n) {
      return n
        .domain(i.domain())
        .interpolator(i.interpolator())
        .clamp(i.clamp())
        .unknown(i.unknown());
    }
    function iO() {
      var i = _f(ZA()(Lf));
      return (
        (i.copy = function() {
          return $A(i, iO());
        }),
        uf.apply(i, arguments)
      );
    }
    function nO() {
      var i = Hf(ZA()).domain([1, 10]);
      return (
        (i.copy = function() {
          return $A(i, nO()).base(i.base());
        }),
        uf.apply(i, arguments)
      );
    }
    function eO() {
      var i = Xf(ZA());
      return (
        (i.copy = function() {
          return $A(i, eO()).constant(i.constant());
        }),
        uf.apply(i, arguments)
      );
    }
    function tO() {
      var i = zf(ZA());
      return (
        (i.copy = function() {
          return $A(i, tO()).exponent(i.exponent());
        }),
        uf.apply(i, arguments)
      );
    }
    function rO() {
      return tO.apply(null, arguments).exponent(0.5);
    }
    function mO() {
      var i = [],
        n = Lf;
      function e(e) {
        if (!isNaN((e = +e))) return n((ja(i, e) - 1) / (i.length - 1));
      }
      return (
        (e.domain = function(n) {
          if (!arguments.length) return i.slice();
          i = [];
          for (var t, r = 0, m = n.length; r < m; ++r)
            null == (t = n[r]) || isNaN((t = +t)) || i.push(t);
          return i.sort(ka), e;
        }),
        (e.interpolator = function(i) {
          return arguments.length ? ((n = i), e) : n;
        }),
        (e.copy = function() {
          return mO(n).domain(i);
        }),
        uf.apply(e, arguments)
      );
    }
    function oO() {
      var i,
        n,
        e,
        t,
        r,
        m,
        o,
        c = 0,
        s = 0.5,
        d = 1,
        u = Lf,
        a = !1;
      function f(i) {
        return isNaN((i = +i))
          ? o
          : ((i = 0.5 + ((i = +m(i)) - n) * (i < n ? t : r)),
            u(a ? Math.max(0, Math.min(1, i)) : i));
      }
      return (
        (f.domain = function(o) {
          return arguments.length
            ? ((i = m((c = +o[0]))),
              (n = m((s = +o[1]))),
              (e = m((d = +o[2]))),
              (t = i === n ? 0 : 0.5 / (n - i)),
              (r = n === e ? 0 : 0.5 / (e - n)),
              f)
            : [c, s, d];
        }),
        (f.clamp = function(i) {
          return arguments.length ? ((a = !!i), f) : a;
        }),
        (f.interpolator = function(i) {
          return arguments.length ? ((u = i), f) : u;
        }),
        (f.unknown = function(i) {
          return arguments.length ? ((o = i), f) : o;
        }),
        function(o) {
          return (
            (m = o),
            (i = o(c)),
            (n = o(s)),
            (e = o(d)),
            (t = i === n ? 0 : 0.5 / (n - i)),
            (r = n === e ? 0 : 0.5 / (e - n)),
            f
          );
        }
      );
    }
    function cO() {
      var i = _f(oO()(Lf));
      return (
        (i.copy = function() {
          return $A(i, cO());
        }),
        uf.apply(i, arguments)
      );
    }
    function sO() {
      var i = Hf(oO()).domain([0.1, 1, 10]);
      return (
        (i.copy = function() {
          return $A(i, sO()).base(i.base());
        }),
        uf.apply(i, arguments)
      );
    }
    function dO() {
      var i = Xf(oO());
      return (
        (i.copy = function() {
          return $A(i, dO()).constant(i.constant());
        }),
        uf.apply(i, arguments)
      );
    }
    function uO() {
      var i = zf(oO());
      return (
        (i.copy = function() {
          return $A(i, uO()).exponent(i.exponent());
        }),
        uf.apply(i, arguments)
      );
    }
    function aO() {
      return uO.apply(null, arguments).exponent(0.5);
    }
    var fO = e(2),
      lO = function(i) {
        return function() {
          return i;
        };
      },
      hO = Math.abs,
      AO = Math.atan2,
      OO = Math.cos,
      pO = Math.max,
      SO = Math.min,
      MO = Math.sin,
      EO = Math.sqrt,
      LO = 1e-12,
      DO = Math.PI,
      NO = DO / 2,
      vO = 2 * DO;
    function CO(i) {
      return i >= 1 ? NO : i <= -1 ? -NO : Math.asin(i);
    }
    function yO(i) {
      return i.innerRadius;
    }
    function gO(i) {
      return i.outerRadius;
    }
    function TO(i) {
      return i.startAngle;
    }
    function RO(i) {
      return i.endAngle;
    }
    function _O(i) {
      return i && i.padAngle;
    }
    function VO(i, n, e, t, r, m, o) {
      var c = i - e,
        s = n - t,
        d = (o ? m : -m) / EO(c * c + s * s),
        u = d * s,
        a = -d * c,
        f = i + u,
        l = n + a,
        h = e + u,
        A = t + a,
        O = (f + h) / 2,
        p = (l + A) / 2,
        S = h - f,
        M = A - l,
        E = S * S + M * M,
        L = r - m,
        D = f * A - h * l,
        N = (M < 0 ? -1 : 1) * EO(pO(0, L * L * E - D * D)),
        v = (D * M - S * N) / E,
        C = (-D * S - M * N) / E,
        y = (D * M + S * N) / E,
        g = (-D * S + M * N) / E,
        T = v - O,
        R = C - p,
        _ = y - O,
        V = g - p;
      return (
        T * T + R * R > _ * _ + V * V && ((v = y), (C = g)),
        {
          cx: v,
          cy: C,
          x01: -u,
          y01: -a,
          x11: v * (r / L - 1),
          y11: C * (r / L - 1),
        }
      );
    }
    var BO = function() {
      var i = yO,
        n = gO,
        e = lO(0),
        t = null,
        r = TO,
        m = RO,
        o = _O,
        c = null;
      function s() {
        var s,
          d,
          u,
          a = +i.apply(this, arguments),
          f = +n.apply(this, arguments),
          l = r.apply(this, arguments) - NO,
          h = m.apply(this, arguments) - NO,
          A = hO(h - l),
          O = h > l;
        if ((c || (c = s = Zt()), f < a && ((d = f), (f = a), (a = d)), f > LO))
          if (A > vO - LO)
            c.moveTo(f * OO(l), f * MO(l)),
              c.arc(0, 0, f, l, h, !O),
              a > LO &&
                (c.moveTo(a * OO(h), a * MO(h)), c.arc(0, 0, a, h, l, O));
          else {
            var p,
              S,
              M = l,
              E = h,
              L = l,
              D = h,
              N = A,
              v = A,
              C = o.apply(this, arguments) / 2,
              y = C > LO && (t ? +t.apply(this, arguments) : EO(a * a + f * f)),
              g = SO(hO(f - a) / 2, +e.apply(this, arguments)),
              T = g,
              R = g;
            if (y > LO) {
              var _ = CO((y / a) * MO(C)),
                V = CO((y / f) * MO(C));
              (N -= 2 * _) > LO
                ? ((L += _ *= O ? 1 : -1), (D -= _))
                : ((N = 0), (L = D = (l + h) / 2)),
                (v -= 2 * V) > LO
                  ? ((M += V *= O ? 1 : -1), (E -= V))
                  : ((v = 0), (M = E = (l + h) / 2));
            }
            var B = f * OO(M),
              b = f * MO(M),
              Y = a * OO(D),
              F = a * MO(D);
            if (g > LO) {
              var P,
                G = f * OO(E),
                U = f * MO(E),
                I = a * OO(L),
                H = a * MO(L);
              if (
                A < DO &&
                (P = (function(i, n, e, t, r, m, o, c) {
                  var s = e - i,
                    d = t - n,
                    u = o - r,
                    a = c - m,
                    f = a * s - u * d;
                  if (!(f * f < LO))
                    return [
                      i + (f = (u * (n - m) - a * (i - r)) / f) * s,
                      n + f * d,
                    ];
                })(B, b, I, H, G, U, Y, F))
              ) {
                var x = B - P[0],
                  W = b - P[1],
                  w = G - P[0],
                  X = U - P[1],
                  Q =
                    1 /
                    MO(
                      ((u =
                        (x * w + W * X) /
                        (EO(x * x + W * W) * EO(w * w + X * X))) > 1
                        ? 0
                        : u < -1
                        ? DO
                        : Math.acos(u)) / 2
                    ),
                  K = EO(P[0] * P[0] + P[1] * P[1]);
                (T = SO(g, (a - K) / (Q - 1))), (R = SO(g, (f - K) / (Q + 1)));
              }
            }
            v > LO
              ? R > LO
                ? ((p = VO(I, H, B, b, f, R, O)),
                  (S = VO(G, U, Y, F, f, R, O)),
                  c.moveTo(p.cx + p.x01, p.cy + p.y01),
                  R < g
                    ? c.arc(
                        p.cx,
                        p.cy,
                        R,
                        AO(p.y01, p.x01),
                        AO(S.y01, S.x01),
                        !O
                      )
                    : (c.arc(
                        p.cx,
                        p.cy,
                        R,
                        AO(p.y01, p.x01),
                        AO(p.y11, p.x11),
                        !O
                      ),
                      c.arc(
                        0,
                        0,
                        f,
                        AO(p.cy + p.y11, p.cx + p.x11),
                        AO(S.cy + S.y11, S.cx + S.x11),
                        !O
                      ),
                      c.arc(
                        S.cx,
                        S.cy,
                        R,
                        AO(S.y11, S.x11),
                        AO(S.y01, S.x01),
                        !O
                      )))
                : (c.moveTo(B, b), c.arc(0, 0, f, M, E, !O))
              : c.moveTo(B, b),
              a > LO && N > LO
                ? T > LO
                  ? ((p = VO(Y, F, G, U, a, -T, O)),
                    (S = VO(B, b, I, H, a, -T, O)),
                    c.lineTo(p.cx + p.x01, p.cy + p.y01),
                    T < g
                      ? c.arc(
                          p.cx,
                          p.cy,
                          T,
                          AO(p.y01, p.x01),
                          AO(S.y01, S.x01),
                          !O
                        )
                      : (c.arc(
                          p.cx,
                          p.cy,
                          T,
                          AO(p.y01, p.x01),
                          AO(p.y11, p.x11),
                          !O
                        ),
                        c.arc(
                          0,
                          0,
                          a,
                          AO(p.cy + p.y11, p.cx + p.x11),
                          AO(S.cy + S.y11, S.cx + S.x11),
                          O
                        ),
                        c.arc(
                          S.cx,
                          S.cy,
                          T,
                          AO(S.y11, S.x11),
                          AO(S.y01, S.x01),
                          !O
                        )))
                  : c.arc(0, 0, a, D, L, O)
                : c.lineTo(Y, F);
          }
        else c.moveTo(0, 0);
        if ((c.closePath(), s)) return (c = null), s + '' || null;
      }
      return (
        (s.centroid = function() {
          var e = (+i.apply(this, arguments) + +n.apply(this, arguments)) / 2,
            t =
              (+r.apply(this, arguments) + +m.apply(this, arguments)) / 2 -
              DO / 2;
          return [OO(t) * e, MO(t) * e];
        }),
        (s.innerRadius = function(n) {
          return arguments.length
            ? ((i = 'function' == typeof n ? n : lO(+n)), s)
            : i;
        }),
        (s.outerRadius = function(i) {
          return arguments.length
            ? ((n = 'function' == typeof i ? i : lO(+i)), s)
            : n;
        }),
        (s.cornerRadius = function(i) {
          return arguments.length
            ? ((e = 'function' == typeof i ? i : lO(+i)), s)
            : e;
        }),
        (s.padRadius = function(i) {
          return arguments.length
            ? ((t = null == i ? null : 'function' == typeof i ? i : lO(+i)), s)
            : t;
        }),
        (s.startAngle = function(i) {
          return arguments.length
            ? ((r = 'function' == typeof i ? i : lO(+i)), s)
            : r;
        }),
        (s.endAngle = function(i) {
          return arguments.length
            ? ((m = 'function' == typeof i ? i : lO(+i)), s)
            : m;
        }),
        (s.padAngle = function(i) {
          return arguments.length
            ? ((o = 'function' == typeof i ? i : lO(+i)), s)
            : o;
        }),
        (s.context = function(i) {
          return arguments.length ? ((c = null == i ? null : i), s) : c;
        }),
        s
      );
    };
    function bO(i) {
      this._context = i;
    }
    bO.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(i, n) {
        switch (((i = +i), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(i, n)
                : this._context.moveTo(i, n);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(i, n);
        }
      },
    };
    var YO = function(i) {
      return new bO(i);
    };
    function FO(i) {
      return i[0];
    }
    function PO(i) {
      return i[1];
    }
    var GO = function() {
        var i = FO,
          n = PO,
          e = lO(!0),
          t = null,
          r = YO,
          m = null;
        function o(o) {
          var c,
            s,
            d,
            u = o.length,
            a = !1;
          for (null == t && (m = r((d = Zt()))), c = 0; c <= u; ++c)
            !(c < u && e((s = o[c]), c, o)) === a &&
              ((a = !a) ? m.lineStart() : m.lineEnd()),
              a && m.point(+i(s, c, o), +n(s, c, o));
          if (d) return (m = null), d + '' || null;
        }
        return (
          (o.x = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : lO(+n)), o)
              : i;
          }),
          (o.y = function(i) {
            return arguments.length
              ? ((n = 'function' == typeof i ? i : lO(+i)), o)
              : n;
          }),
          (o.defined = function(i) {
            return arguments.length
              ? ((e = 'function' == typeof i ? i : lO(!!i)), o)
              : e;
          }),
          (o.curve = function(i) {
            return arguments.length ? ((r = i), null != t && (m = r(t)), o) : r;
          }),
          (o.context = function(i) {
            return arguments.length
              ? (null == i ? (t = m = null) : (m = r((t = i))), o)
              : t;
          }),
          o
        );
      },
      UO = function() {
        var i = FO,
          n = null,
          e = lO(0),
          t = PO,
          r = lO(!0),
          m = null,
          o = YO,
          c = null;
        function s(s) {
          var d,
            u,
            a,
            f,
            l,
            h = s.length,
            A = !1,
            O = new Array(h),
            p = new Array(h);
          for (null == m && (c = o((l = Zt()))), d = 0; d <= h; ++d) {
            if (!(d < h && r((f = s[d]), d, s)) === A)
              if ((A = !A)) (u = d), c.areaStart(), c.lineStart();
              else {
                for (c.lineEnd(), c.lineStart(), a = d - 1; a >= u; --a)
                  c.point(O[a], p[a]);
                c.lineEnd(), c.areaEnd();
              }
            A &&
              ((O[d] = +i(f, d, s)),
              (p[d] = +e(f, d, s)),
              c.point(n ? +n(f, d, s) : O[d], t ? +t(f, d, s) : p[d]));
          }
          if (l) return (c = null), l + '' || null;
        }
        function d() {
          return GO()
            .defined(r)
            .curve(o)
            .context(m);
        }
        return (
          (s.x = function(e) {
            return arguments.length
              ? ((i = 'function' == typeof e ? e : lO(+e)), (n = null), s)
              : i;
          }),
          (s.x0 = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : lO(+n)), s)
              : i;
          }),
          (s.x1 = function(i) {
            return arguments.length
              ? ((n = null == i ? null : 'function' == typeof i ? i : lO(+i)),
                s)
              : n;
          }),
          (s.y = function(i) {
            return arguments.length
              ? ((e = 'function' == typeof i ? i : lO(+i)), (t = null), s)
              : e;
          }),
          (s.y0 = function(i) {
            return arguments.length
              ? ((e = 'function' == typeof i ? i : lO(+i)), s)
              : e;
          }),
          (s.y1 = function(i) {
            return arguments.length
              ? ((t = null == i ? null : 'function' == typeof i ? i : lO(+i)),
                s)
              : t;
          }),
          (s.lineX0 = s.lineY0 = function() {
            return d()
              .x(i)
              .y(e);
          }),
          (s.lineY1 = function() {
            return d()
              .x(i)
              .y(t);
          }),
          (s.lineX1 = function() {
            return d()
              .x(n)
              .y(e);
          }),
          (s.defined = function(i) {
            return arguments.length
              ? ((r = 'function' == typeof i ? i : lO(!!i)), s)
              : r;
          }),
          (s.curve = function(i) {
            return arguments.length ? ((o = i), null != m && (c = o(m)), s) : o;
          }),
          (s.context = function(i) {
            return arguments.length
              ? (null == i ? (m = c = null) : (c = o((m = i))), s)
              : m;
          }),
          s
        );
      },
      IO = function(i, n) {
        return n < i ? -1 : n > i ? 1 : n >= i ? 0 : NaN;
      },
      HO = function(i) {
        return i;
      },
      xO = function() {
        var i = HO,
          n = IO,
          e = null,
          t = lO(0),
          r = lO(vO),
          m = lO(0);
        function o(o) {
          var c,
            s,
            d,
            u,
            a,
            f = o.length,
            l = 0,
            h = new Array(f),
            A = new Array(f),
            O = +t.apply(this, arguments),
            p = Math.min(vO, Math.max(-vO, r.apply(this, arguments) - O)),
            S = Math.min(Math.abs(p) / f, m.apply(this, arguments)),
            M = S * (p < 0 ? -1 : 1);
          for (c = 0; c < f; ++c)
            (a = A[(h[c] = c)] = +i(o[c], c, o)) > 0 && (l += a);
          for (
            null != n
              ? h.sort(function(i, e) {
                  return n(A[i], A[e]);
                })
              : null != e &&
                h.sort(function(i, n) {
                  return e(o[i], o[n]);
                }),
              c = 0,
              d = l ? (p - f * M) / l : 0;
            c < f;
            ++c, O = u
          )
            (s = h[c]),
              (u = O + ((a = A[s]) > 0 ? a * d : 0) + M),
              (A[s] = {
                data: o[s],
                index: c,
                value: a,
                startAngle: O,
                endAngle: u,
                padAngle: S,
              });
          return A;
        }
        return (
          (o.value = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : lO(+n)), o)
              : i;
          }),
          (o.sortValues = function(i) {
            return arguments.length ? ((n = i), (e = null), o) : n;
          }),
          (o.sort = function(i) {
            return arguments.length ? ((e = i), (n = null), o) : e;
          }),
          (o.startAngle = function(i) {
            return arguments.length
              ? ((t = 'function' == typeof i ? i : lO(+i)), o)
              : t;
          }),
          (o.endAngle = function(i) {
            return arguments.length
              ? ((r = 'function' == typeof i ? i : lO(+i)), o)
              : r;
          }),
          (o.padAngle = function(i) {
            return arguments.length
              ? ((m = 'function' == typeof i ? i : lO(+i)), o)
              : m;
          }),
          o
        );
      },
      WO = XO(YO);
    function wO(i) {
      this._curve = i;
    }
    function XO(i) {
      function n(n) {
        return new wO(i(n));
      }
      return (n._curve = i), n;
    }
    function QO(i) {
      var n = i.curve;
      return (
        (i.angle = i.x),
        delete i.x,
        (i.radius = i.y),
        delete i.y,
        (i.curve = function(i) {
          return arguments.length ? n(XO(i)) : n()._curve;
        }),
        i
      );
    }
    wO.prototype = {
      areaStart: function() {
        this._curve.areaStart();
      },
      areaEnd: function() {
        this._curve.areaEnd();
      },
      lineStart: function() {
        this._curve.lineStart();
      },
      lineEnd: function() {
        this._curve.lineEnd();
      },
      point: function(i, n) {
        this._curve.point(n * Math.sin(i), n * -Math.cos(i));
      },
    };
    var KO = function() {
        return QO(GO().curve(WO));
      },
      kO = function() {
        var i = UO().curve(WO),
          n = i.curve,
          e = i.lineX0,
          t = i.lineX1,
          r = i.lineY0,
          m = i.lineY1;
        return (
          (i.angle = i.x),
          delete i.x,
          (i.startAngle = i.x0),
          delete i.x0,
          (i.endAngle = i.x1),
          delete i.x1,
          (i.radius = i.y),
          delete i.y,
          (i.innerRadius = i.y0),
          delete i.y0,
          (i.outerRadius = i.y1),
          delete i.y1,
          (i.lineStartAngle = function() {
            return QO(e());
          }),
          delete i.lineX0,
          (i.lineEndAngle = function() {
            return QO(t());
          }),
          delete i.lineX1,
          (i.lineInnerRadius = function() {
            return QO(r());
          }),
          delete i.lineY0,
          (i.lineOuterRadius = function() {
            return QO(m());
          }),
          delete i.lineY1,
          (i.curve = function(i) {
            return arguments.length ? n(XO(i)) : n()._curve;
          }),
          i
        );
      },
      JO = function(i, n) {
        return [(n = +n) * Math.cos((i -= Math.PI / 2)), n * Math.sin(i)];
      },
      zO = Array.prototype.slice;
    function qO(i) {
      return i.source;
    }
    function jO(i) {
      return i.target;
    }
    function ZO(i) {
      var n = qO,
        e = jO,
        t = FO,
        r = PO,
        m = null;
      function o() {
        var o,
          c = zO.call(arguments),
          s = n.apply(this, c),
          d = e.apply(this, c);
        if (
          (m || (m = o = Zt()),
          i(
            m,
            +t.apply(this, ((c[0] = s), c)),
            +r.apply(this, c),
            +t.apply(this, ((c[0] = d), c)),
            +r.apply(this, c)
          ),
          o)
        )
          return (m = null), o + '' || null;
      }
      return (
        (o.source = function(i) {
          return arguments.length ? ((n = i), o) : n;
        }),
        (o.target = function(i) {
          return arguments.length ? ((e = i), o) : e;
        }),
        (o.x = function(i) {
          return arguments.length
            ? ((t = 'function' == typeof i ? i : lO(+i)), o)
            : t;
        }),
        (o.y = function(i) {
          return arguments.length
            ? ((r = 'function' == typeof i ? i : lO(+i)), o)
            : r;
        }),
        (o.context = function(i) {
          return arguments.length ? ((m = null == i ? null : i), o) : m;
        }),
        o
      );
    }
    function $O(i, n, e, t, r) {
      i.moveTo(n, e), i.bezierCurveTo((n = (n + t) / 2), e, n, r, t, r);
    }
    function ip(i, n, e, t, r) {
      i.moveTo(n, e), i.bezierCurveTo(n, (e = (e + r) / 2), t, e, t, r);
    }
    function np(i, n, e, t, r) {
      var m = JO(n, e),
        o = JO(n, (e = (e + r) / 2)),
        c = JO(t, e),
        s = JO(t, r);
      i.moveTo(m[0], m[1]), i.bezierCurveTo(o[0], o[1], c[0], c[1], s[0], s[1]);
    }
    function ep() {
      return ZO($O);
    }
    function tp() {
      return ZO(ip);
    }
    function rp() {
      var i = ZO(np);
      return (i.angle = i.x), delete i.x, (i.radius = i.y), delete i.y, i;
    }
    var mp = {
        draw: function(i, n) {
          var e = Math.sqrt(n / DO);
          i.moveTo(e, 0), i.arc(0, 0, e, 0, vO);
        },
      },
      op = {
        draw: function(i, n) {
          var e = Math.sqrt(n / 5) / 2;
          i.moveTo(-3 * e, -e),
            i.lineTo(-e, -e),
            i.lineTo(-e, -3 * e),
            i.lineTo(e, -3 * e),
            i.lineTo(e, -e),
            i.lineTo(3 * e, -e),
            i.lineTo(3 * e, e),
            i.lineTo(e, e),
            i.lineTo(e, 3 * e),
            i.lineTo(-e, 3 * e),
            i.lineTo(-e, e),
            i.lineTo(-3 * e, e),
            i.closePath();
        },
      },
      cp = Math.sqrt(1 / 3),
      sp = 2 * cp,
      dp = {
        draw: function(i, n) {
          var e = Math.sqrt(n / sp),
            t = e * cp;
          i.moveTo(0, -e),
            i.lineTo(t, 0),
            i.lineTo(0, e),
            i.lineTo(-t, 0),
            i.closePath();
        },
      },
      up = Math.sin(DO / 10) / Math.sin((7 * DO) / 10),
      ap = Math.sin(vO / 10) * up,
      fp = -Math.cos(vO / 10) * up,
      lp = {
        draw: function(i, n) {
          var e = Math.sqrt(0.8908130915292852 * n),
            t = ap * e,
            r = fp * e;
          i.moveTo(0, -e), i.lineTo(t, r);
          for (var m = 1; m < 5; ++m) {
            var o = (vO * m) / 5,
              c = Math.cos(o),
              s = Math.sin(o);
            i.lineTo(s * e, -c * e), i.lineTo(c * t - s * r, s * t + c * r);
          }
          i.closePath();
        },
      },
      hp = {
        draw: function(i, n) {
          var e = Math.sqrt(n),
            t = -e / 2;
          i.rect(t, t, e, e);
        },
      },
      Ap = Math.sqrt(3),
      Op = {
        draw: function(i, n) {
          var e = -Math.sqrt(n / (3 * Ap));
          i.moveTo(0, 2 * e),
            i.lineTo(-Ap * e, -e),
            i.lineTo(Ap * e, -e),
            i.closePath();
        },
      },
      pp = Math.sqrt(3) / 2,
      Sp = 1 / Math.sqrt(12),
      Mp = 3 * (Sp / 2 + 1),
      Ep = {
        draw: function(i, n) {
          var e = Math.sqrt(n / Mp),
            t = e / 2,
            r = e * Sp,
            m = t,
            o = e * Sp + e,
            c = -m,
            s = o;
          i.moveTo(t, r),
            i.lineTo(m, o),
            i.lineTo(c, s),
            i.lineTo(-0.5 * t - pp * r, pp * t + -0.5 * r),
            i.lineTo(-0.5 * m - pp * o, pp * m + -0.5 * o),
            i.lineTo(-0.5 * c - pp * s, pp * c + -0.5 * s),
            i.lineTo(-0.5 * t + pp * r, -0.5 * r - pp * t),
            i.lineTo(-0.5 * m + pp * o, -0.5 * o - pp * m),
            i.lineTo(-0.5 * c + pp * s, -0.5 * s - pp * c),
            i.closePath();
        },
      },
      Lp = [mp, op, dp, hp, lp, Op, Ep],
      Dp = function() {
        var i = lO(mp),
          n = lO(64),
          e = null;
        function t() {
          var t;
          if (
            (e || (e = t = Zt()),
            i.apply(this, arguments).draw(e, +n.apply(this, arguments)),
            t)
          )
            return (e = null), t + '' || null;
        }
        return (
          (t.type = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : lO(n)), t)
              : i;
          }),
          (t.size = function(i) {
            return arguments.length
              ? ((n = 'function' == typeof i ? i : lO(+i)), t)
              : n;
          }),
          (t.context = function(i) {
            return arguments.length ? ((e = null == i ? null : i), t) : e;
          }),
          t
        );
      },
      Np = function() {};
    function vp(i, n, e) {
      i._context.bezierCurveTo(
        (2 * i._x0 + i._x1) / 3,
        (2 * i._y0 + i._y1) / 3,
        (i._x0 + 2 * i._x1) / 3,
        (i._y0 + 2 * i._y1) / 3,
        (i._x0 + 4 * i._x1 + n) / 6,
        (i._y0 + 4 * i._y1 + e) / 6
      );
    }
    function Cp(i) {
      this._context = i;
    }
    Cp.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 3:
            vp(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(i, n) {
        switch (((i = +i), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(i, n)
                : this._context.moveTo(i, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._context.lineTo(
                (5 * this._x0 + this._x1) / 6,
                (5 * this._y0 + this._y1) / 6
              );
          default:
            vp(this, i, n);
        }
        (this._x0 = this._x1),
          (this._x1 = i),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    };
    var yp = function(i) {
      return new Cp(i);
    };
    function gp(i) {
      this._context = i;
    }
    gp.prototype = {
      areaStart: Np,
      areaEnd: Np,
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;
          case 2:
            this._context.moveTo(
              (this._x2 + 2 * this._x3) / 3,
              (this._y2 + 2 * this._y3) / 3
            ),
              this._context.lineTo(
                (this._x3 + 2 * this._x2) / 3,
                (this._y3 + 2 * this._y2) / 3
              ),
              this._context.closePath();
            break;
          case 3:
            this.point(this._x2, this._y2),
              this.point(this._x3, this._y3),
              this.point(this._x4, this._y4);
        }
      },
      point: function(i, n) {
        switch (((i = +i), (n = +n), this._point)) {
          case 0:
            (this._point = 1), (this._x2 = i), (this._y2 = n);
            break;
          case 1:
            (this._point = 2), (this._x3 = i), (this._y3 = n);
            break;
          case 2:
            (this._point = 3),
              (this._x4 = i),
              (this._y4 = n),
              this._context.moveTo(
                (this._x0 + 4 * this._x1 + i) / 6,
                (this._y0 + 4 * this._y1 + n) / 6
              );
            break;
          default:
            vp(this, i, n);
        }
        (this._x0 = this._x1),
          (this._x1 = i),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    };
    var Tp = function(i) {
      return new gp(i);
    };
    function Rp(i) {
      this._context = i;
    }
    Rp.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(i, n) {
        switch (((i = +i), (n = +n), this._point)) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var e = (this._x0 + 4 * this._x1 + i) / 6,
              t = (this._y0 + 4 * this._y1 + n) / 6;
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t);
            break;
          case 3:
            this._point = 4;
          default:
            vp(this, i, n);
        }
        (this._x0 = this._x1),
          (this._x1 = i),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    };
    var _p = function(i) {
      return new Rp(i);
    };
    function Vp(i, n) {
      (this._basis = new Cp(i)), (this._beta = n);
    }
    Vp.prototype = {
      lineStart: function() {
        (this._x = []), (this._y = []), this._basis.lineStart();
      },
      lineEnd: function() {
        var i = this._x,
          n = this._y,
          e = i.length - 1;
        if (e > 0)
          for (
            var t, r = i[0], m = n[0], o = i[e] - r, c = n[e] - m, s = -1;
            ++s <= e;

          )
            (t = s / e),
              this._basis.point(
                this._beta * i[s] + (1 - this._beta) * (r + t * o),
                this._beta * n[s] + (1 - this._beta) * (m + t * c)
              );
        (this._x = this._y = null), this._basis.lineEnd();
      },
      point: function(i, n) {
        this._x.push(+i), this._y.push(+n);
      },
    };
    var Bp = (function i(n) {
      function e(i) {
        return 1 === n ? new Cp(i) : new Vp(i, n);
      }
      return (
        (e.beta = function(n) {
          return i(+n);
        }),
        e
      );
    })(0.85);
    function bp(i, n, e) {
      i._context.bezierCurveTo(
        i._x1 + i._k * (i._x2 - i._x0),
        i._y1 + i._k * (i._y2 - i._y0),
        i._x2 + i._k * (i._x1 - n),
        i._y2 + i._k * (i._y1 - e),
        i._x2,
        i._y2
      );
    }
    function Yp(i, n) {
      (this._context = i), (this._k = (1 - n) / 6);
    }
    Yp.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            bp(this, this._x1, this._y1);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(i, n) {
        switch (((i = +i), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(i, n)
                : this._context.moveTo(i, n);
            break;
          case 1:
            (this._point = 2), (this._x1 = i), (this._y1 = n);
            break;
          case 2:
            this._point = 3;
          default:
            bp(this, i, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = i),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var Fp = (function i(n) {
      function e(i) {
        return new Yp(i, n);
      }
      return (
        (e.tension = function(n) {
          return i(+n);
        }),
        e
      );
    })(0);
    function Pp(i, n) {
      (this._context = i), (this._k = (1 - n) / 6);
    }
    Pp.prototype = {
      areaStart: Np,
      areaEnd: Np,
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5);
        }
      },
      point: function(i, n) {
        switch (((i = +i), (n = +n), this._point)) {
          case 0:
            (this._point = 1), (this._x3 = i), (this._y3 = n);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = i), (this._y4 = n));
            break;
          case 2:
            (this._point = 3), (this._x5 = i), (this._y5 = n);
            break;
          default:
            bp(this, i, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = i),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var Gp = (function i(n) {
      function e(i) {
        return new Pp(i, n);
      }
      return (
        (e.tension = function(n) {
          return i(+n);
        }),
        e
      );
    })(0);
    function Up(i, n) {
      (this._context = i), (this._k = (1 - n) / 6);
    }
    Up.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(i, n) {
        switch (((i = +i), (n = +n), this._point)) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._line
                ? this._context.lineTo(this._x2, this._y2)
                : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            bp(this, i, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = i),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var Ip = (function i(n) {
      function e(i) {
        return new Up(i, n);
      }
      return (
        (e.tension = function(n) {
          return i(+n);
        }),
        e
      );
    })(0);
    function Hp(i, n, e) {
      var t = i._x1,
        r = i._y1,
        m = i._x2,
        o = i._y2;
      if (i._l01_a > LO) {
        var c = 2 * i._l01_2a + 3 * i._l01_a * i._l12_a + i._l12_2a,
          s = 3 * i._l01_a * (i._l01_a + i._l12_a);
        (t = (t * c - i._x0 * i._l12_2a + i._x2 * i._l01_2a) / s),
          (r = (r * c - i._y0 * i._l12_2a + i._y2 * i._l01_2a) / s);
      }
      if (i._l23_a > LO) {
        var d = 2 * i._l23_2a + 3 * i._l23_a * i._l12_a + i._l12_2a,
          u = 3 * i._l23_a * (i._l23_a + i._l12_a);
        (m = (m * d + i._x1 * i._l23_2a - n * i._l12_2a) / u),
          (o = (o * d + i._y1 * i._l23_2a - e * i._l12_2a) / u);
      }
      i._context.bezierCurveTo(t, r, m, o, i._x2, i._y2);
    }
    function xp(i, n) {
      (this._context = i), (this._alpha = n);
    }
    xp.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            this.point(this._x2, this._y2);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(i, n) {
        if (((i = +i), (n = +n), this._point)) {
          var e = this._x2 - i,
            t = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + t * t, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(i, n)
                : this._context.moveTo(i, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
          default:
            Hp(this, i, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = i),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var Wp = (function i(n) {
      function e(i) {
        return n ? new xp(i, n) : new Yp(i, 0);
      }
      return (
        (e.alpha = function(n) {
          return i(+n);
        }),
        e
      );
    })(0.5);
    function wp(i, n) {
      (this._context = i), (this._alpha = n);
    }
    wp.prototype = {
      areaStart: Np,
      areaEnd: Np,
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5);
        }
      },
      point: function(i, n) {
        if (((i = +i), (n = +n), this._point)) {
          var e = this._x2 - i,
            t = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + t * t, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1), (this._x3 = i), (this._y3 = n);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = i), (this._y4 = n));
            break;
          case 2:
            (this._point = 3), (this._x5 = i), (this._y5 = n);
            break;
          default:
            Hp(this, i, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = i),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var Xp = (function i(n) {
      function e(i) {
        return n ? new wp(i, n) : new Pp(i, 0);
      }
      return (
        (e.alpha = function(n) {
          return i(+n);
        }),
        e
      );
    })(0.5);
    function Qp(i, n) {
      (this._context = i), (this._alpha = n);
    }
    Qp.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(i, n) {
        if (((i = +i), (n = +n), this._point)) {
          var e = this._x2 - i,
            t = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + t * t, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._line
                ? this._context.lineTo(this._x2, this._y2)
                : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            Hp(this, i, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = i),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var Kp = (function i(n) {
      function e(i) {
        return n ? new Qp(i, n) : new Up(i, 0);
      }
      return (
        (e.alpha = function(n) {
          return i(+n);
        }),
        e
      );
    })(0.5);
    function kp(i) {
      this._context = i;
    }
    kp.prototype = {
      areaStart: Np,
      areaEnd: Np,
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        this._point && this._context.closePath();
      },
      point: function(i, n) {
        (i = +i),
          (n = +n),
          this._point
            ? this._context.lineTo(i, n)
            : ((this._point = 1), this._context.moveTo(i, n));
      },
    };
    var Jp = function(i) {
      return new kp(i);
    };
    function zp(i) {
      return i < 0 ? -1 : 1;
    }
    function qp(i, n, e) {
      var t = i._x1 - i._x0,
        r = n - i._x1,
        m = (i._y1 - i._y0) / (t || (r < 0 && -0)),
        o = (e - i._y1) / (r || (t < 0 && -0)),
        c = (m * r + o * t) / (t + r);
      return (
        (zp(m) + zp(o)) *
          Math.min(Math.abs(m), Math.abs(o), 0.5 * Math.abs(c)) || 0
      );
    }
    function jp(i, n) {
      var e = i._x1 - i._x0;
      return e ? ((3 * (i._y1 - i._y0)) / e - n) / 2 : n;
    }
    function Zp(i, n, e) {
      var t = i._x0,
        r = i._y0,
        m = i._x1,
        o = i._y1,
        c = (m - t) / 3;
      i._context.bezierCurveTo(t + c, r + c * n, m - c, o - c * e, m, o);
    }
    function $p(i) {
      this._context = i;
    }
    function iS(i) {
      this._context = new nS(i);
    }
    function nS(i) {
      this._context = i;
    }
    function eS(i) {
      return new $p(i);
    }
    function tS(i) {
      return new iS(i);
    }
    function rS(i) {
      this._context = i;
    }
    function mS(i) {
      var n,
        e,
        t = i.length - 1,
        r = new Array(t),
        m = new Array(t),
        o = new Array(t);
      for (r[0] = 0, m[0] = 2, o[0] = i[0] + 2 * i[1], n = 1; n < t - 1; ++n)
        (r[n] = 1), (m[n] = 4), (o[n] = 4 * i[n] + 2 * i[n + 1]);
      for (
        r[t - 1] = 2, m[t - 1] = 7, o[t - 1] = 8 * i[t - 1] + i[t], n = 1;
        n < t;
        ++n
      )
        (e = r[n] / m[n - 1]), (m[n] -= e), (o[n] -= e * o[n - 1]);
      for (r[t - 1] = o[t - 1] / m[t - 1], n = t - 2; n >= 0; --n)
        r[n] = (o[n] - r[n + 1]) / m[n];
      for (m[t - 1] = (i[t] + r[t - 1]) / 2, n = 0; n < t - 1; ++n)
        m[n] = 2 * i[n + 1] - r[n + 1];
      return [r, m];
    }
    ($p.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            Zp(this, this._t0, jp(this, this._t0));
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(i, n) {
        var e = NaN;
        if (((n = +n), (i = +i) !== this._x1 || n !== this._y1)) {
          switch (this._point) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(i, n)
                  : this._context.moveTo(i, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3), Zp(this, jp(this, (e = qp(this, i, n))), e);
              break;
            default:
              Zp(this, this._t0, (e = qp(this, i, n)));
          }
          (this._x0 = this._x1),
            (this._x1 = i),
            (this._y0 = this._y1),
            (this._y1 = n),
            (this._t0 = e);
        }
      },
    }),
      ((iS.prototype = Object.create($p.prototype)).point = function(i, n) {
        $p.prototype.point.call(this, n, i);
      }),
      (nS.prototype = {
        moveTo: function(i, n) {
          this._context.moveTo(n, i);
        },
        closePath: function() {
          this._context.closePath();
        },
        lineTo: function(i, n) {
          this._context.lineTo(n, i);
        },
        bezierCurveTo: function(i, n, e, t, r, m) {
          this._context.bezierCurveTo(n, i, t, e, m, r);
        },
      }),
      (rS.prototype = {
        areaStart: function() {
          this._line = 0;
        },
        areaEnd: function() {
          this._line = NaN;
        },
        lineStart: function() {
          (this._x = []), (this._y = []);
        },
        lineEnd: function() {
          var i = this._x,
            n = this._y,
            e = i.length;
          if (e)
            if (
              (this._line
                ? this._context.lineTo(i[0], n[0])
                : this._context.moveTo(i[0], n[0]),
              2 === e)
            )
              this._context.lineTo(i[1], n[1]);
            else
              for (var t = mS(i), r = mS(n), m = 0, o = 1; o < e; ++m, ++o)
                this._context.bezierCurveTo(
                  t[0][m],
                  r[0][m],
                  t[1][m],
                  r[1][m],
                  i[o],
                  n[o]
                );
          (this._line || (0 !== this._line && 1 === e)) &&
            this._context.closePath(),
            (this._line = 1 - this._line),
            (this._x = this._y = null);
        },
        point: function(i, n) {
          this._x.push(+i), this._y.push(+n);
        },
      });
    var oS = function(i) {
      return new rS(i);
    };
    function cS(i, n) {
      (this._context = i), (this._t = n);
    }
    cS.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x = this._y = NaN), (this._point = 0);
      },
      lineEnd: function() {
        0 < this._t &&
          this._t < 1 &&
          2 === this._point &&
          this._context.lineTo(this._x, this._y),
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
          this._line >= 0 &&
            ((this._t = 1 - this._t), (this._line = 1 - this._line));
      },
      point: function(i, n) {
        switch (((i = +i), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(i, n)
                : this._context.moveTo(i, n);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0)
              this._context.lineTo(this._x, n), this._context.lineTo(i, n);
            else {
              var e = this._x * (1 - this._t) + i * this._t;
              this._context.lineTo(e, this._y), this._context.lineTo(e, n);
            }
        }
        (this._x = i), (this._y = n);
      },
    };
    var sS = function(i) {
      return new cS(i, 0.5);
    };
    function dS(i) {
      return new cS(i, 0);
    }
    function uS(i) {
      return new cS(i, 1);
    }
    var aS = function(i, n) {
        if ((r = i.length) > 1)
          for (var e, t, r, m = 1, o = i[n[0]], c = o.length; m < r; ++m)
            for (t = o, o = i[n[m]], e = 0; e < c; ++e)
              o[e][1] += o[e][0] = isNaN(t[e][1]) ? t[e][0] : t[e][1];
      },
      fS = function(i) {
        for (var n = i.length, e = new Array(n); --n >= 0; ) e[n] = n;
        return e;
      };
    function lS(i, n) {
      return i[n];
    }
    var hS = function() {
        var i = lO([]),
          n = fS,
          e = aS,
          t = lS;
        function r(r) {
          var m,
            o,
            c = i.apply(this, arguments),
            s = r.length,
            d = c.length,
            u = new Array(d);
          for (m = 0; m < d; ++m) {
            for (var a, f = c[m], l = (u[m] = new Array(s)), h = 0; h < s; ++h)
              (l[h] = a = [0, +t(r[h], f, h, r)]), (a.data = r[h]);
            l.key = f;
          }
          for (m = 0, o = n(u); m < d; ++m) u[o[m]].index = m;
          return e(u, o), u;
        }
        return (
          (r.keys = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : lO(zO.call(n))), r)
              : i;
          }),
          (r.value = function(i) {
            return arguments.length
              ? ((t = 'function' == typeof i ? i : lO(+i)), r)
              : t;
          }),
          (r.order = function(i) {
            return arguments.length
              ? ((n =
                  null == i ? fS : 'function' == typeof i ? i : lO(zO.call(i))),
                r)
              : n;
          }),
          (r.offset = function(i) {
            return arguments.length ? ((e = null == i ? aS : i), r) : e;
          }),
          r
        );
      },
      AS = function(i, n) {
        if ((t = i.length) > 0) {
          for (var e, t, r, m = 0, o = i[0].length; m < o; ++m) {
            for (r = e = 0; e < t; ++e) r += i[e][m][1] || 0;
            if (r) for (e = 0; e < t; ++e) i[e][m][1] /= r;
          }
          aS(i, n);
        }
      },
      OS = function(i, n) {
        if ((c = i.length) > 0)
          for (var e, t, r, m, o, c, s = 0, d = i[n[0]].length; s < d; ++s)
            for (m = o = 0, e = 0; e < c; ++e)
              (r = (t = i[n[e]][s])[1] - t[0]) >= 0
                ? ((t[0] = m), (t[1] = m += r))
                : r < 0
                ? ((t[1] = o), (t[0] = o += r))
                : (t[0] = m);
      },
      pS = function(i, n) {
        if ((e = i.length) > 0) {
          for (var e, t = 0, r = i[n[0]], m = r.length; t < m; ++t) {
            for (var o = 0, c = 0; o < e; ++o) c += i[o][t][1] || 0;
            r[t][1] += r[t][0] = -c / 2;
          }
          aS(i, n);
        }
      },
      SS = function(i, n) {
        if ((r = i.length) > 0 && (t = (e = i[n[0]]).length) > 0) {
          for (var e, t, r, m = 0, o = 1; o < t; ++o) {
            for (var c = 0, s = 0, d = 0; c < r; ++c) {
              for (
                var u = i[n[c]],
                  a = u[o][1] || 0,
                  f = (a - (u[o - 1][1] || 0)) / 2,
                  l = 0;
                l < c;
                ++l
              ) {
                var h = i[n[l]];
                f += (h[o][1] || 0) - (h[o - 1][1] || 0);
              }
              (s += a), (d += f * a);
            }
            (e[o - 1][1] += e[o - 1][0] = m), s && (m -= d / s);
          }
          (e[o - 1][1] += e[o - 1][0] = m), aS(i, n);
        }
      },
      MS = function(i) {
        var n = i.map(ES);
        return fS(i).sort(function(i, e) {
          return n[i] - n[e];
        });
      };
    function ES(i) {
      for (var n, e = -1, t = 0, r = i.length, m = -1 / 0; ++e < r; )
        (n = +i[e][1]) > m && ((m = n), (t = e));
      return t;
    }
    var LS = function(i) {
      var n = i.map(DS);
      return fS(i).sort(function(i, e) {
        return n[i] - n[e];
      });
    };
    function DS(i) {
      for (var n, e = 0, t = -1, r = i.length; ++t < r; )
        (n = +i[t][1]) && (e += n);
      return e;
    }
    var NS = function(i) {
        return LS(i).reverse();
      },
      vS = function(i) {
        var n,
          e,
          t = i.length,
          r = i.map(DS),
          m = MS(i),
          o = 0,
          c = 0,
          s = [],
          d = [];
        for (n = 0; n < t; ++n)
          (e = m[n]),
            o < c ? ((o += r[e]), s.push(e)) : ((c += r[e]), d.push(e));
        return d.reverse().concat(s);
      },
      CS = function(i) {
        return fS(i).reverse();
      },
      yS = function(i) {
        return function() {
          return i;
        };
      };
    function gS(i) {
      return i[0];
    }
    function TS(i) {
      return i[1];
    }
    function RS() {
      this._ = null;
    }
    function _S(i) {
      i.U = i.C = i.L = i.R = i.P = i.N = null;
    }
    function VS(i, n) {
      var e = n,
        t = n.R,
        r = e.U;
      r ? (r.L === e ? (r.L = t) : (r.R = t)) : (i._ = t),
        (t.U = r),
        (e.U = t),
        (e.R = t.L),
        e.R && (e.R.U = e),
        (t.L = e);
    }
    function BS(i, n) {
      var e = n,
        t = n.L,
        r = e.U;
      r ? (r.L === e ? (r.L = t) : (r.R = t)) : (i._ = t),
        (t.U = r),
        (e.U = t),
        (e.L = t.R),
        e.L && (e.L.U = e),
        (t.R = e);
    }
    function bS(i) {
      for (; i.L; ) i = i.L;
      return i;
    }
    RS.prototype = {
      constructor: RS,
      insert: function(i, n) {
        var e, t, r;
        if (i) {
          if (((n.P = i), (n.N = i.N), i.N && (i.N.P = n), (i.N = n), i.R)) {
            for (i = i.R; i.L; ) i = i.L;
            i.L = n;
          } else i.R = n;
          e = i;
        } else
          this._
            ? ((i = bS(this._)),
              (n.P = null),
              (n.N = i),
              (i.P = i.L = n),
              (e = i))
            : ((n.P = n.N = null), (this._ = n), (e = null));
        for (n.L = n.R = null, n.U = e, n.C = !0, i = n; e && e.C; )
          e === (t = e.U).L
            ? (r = t.R) && r.C
              ? ((e.C = r.C = !1), (t.C = !0), (i = t))
              : (i === e.R && (VS(this, e), (e = (i = e).U)),
                (e.C = !1),
                (t.C = !0),
                BS(this, t))
            : (r = t.L) && r.C
            ? ((e.C = r.C = !1), (t.C = !0), (i = t))
            : (i === e.L && (BS(this, e), (e = (i = e).U)),
              (e.C = !1),
              (t.C = !0),
              VS(this, t)),
            (e = i.U);
        this._.C = !1;
      },
      remove: function(i) {
        i.N && (i.N.P = i.P), i.P && (i.P.N = i.N), (i.N = i.P = null);
        var n,
          e,
          t,
          r = i.U,
          m = i.L,
          o = i.R;
        if (
          ((e = m ? (o ? bS(o) : m) : o),
          r ? (r.L === i ? (r.L = e) : (r.R = e)) : (this._ = e),
          m && o
            ? ((t = e.C),
              (e.C = i.C),
              (e.L = m),
              (m.U = e),
              e !== o
                ? ((r = e.U),
                  (e.U = i.U),
                  (i = e.R),
                  (r.L = i),
                  (e.R = o),
                  (o.U = e))
                : ((e.U = r), (r = e), (i = e.R)))
            : ((t = i.C), (i = e)),
          i && (i.U = r),
          !t)
        )
          if (i && i.C) i.C = !1;
          else {
            do {
              if (i === this._) break;
              if (i === r.L) {
                if (
                  ((n = r.R).C &&
                    ((n.C = !1), (r.C = !0), VS(this, r), (n = r.R)),
                  (n.L && n.L.C) || (n.R && n.R.C))
                ) {
                  (n.R && n.R.C) ||
                    ((n.L.C = !1), (n.C = !0), BS(this, n), (n = r.R)),
                    (n.C = r.C),
                    (r.C = n.R.C = !1),
                    VS(this, r),
                    (i = this._);
                  break;
                }
              } else if (
                ((n = r.L).C &&
                  ((n.C = !1), (r.C = !0), BS(this, r), (n = r.L)),
                (n.L && n.L.C) || (n.R && n.R.C))
              ) {
                (n.L && n.L.C) ||
                  ((n.R.C = !1), (n.C = !0), VS(this, n), (n = r.L)),
                  (n.C = r.C),
                  (r.C = n.L.C = !1),
                  BS(this, r),
                  (i = this._);
                break;
              }
              (n.C = !0), (i = r), (r = r.U);
            } while (!i.C);
            i && (i.C = !1);
          }
      },
    };
    var YS = RS;
    function FS(i, n, e, t) {
      var r = [null, null],
        m = mM.push(r) - 1;
      return (
        (r.left = i),
        (r.right = n),
        e && GS(r, i, n, e),
        t && GS(r, n, i, t),
        tM[i.index].halfedges.push(m),
        tM[n.index].halfedges.push(m),
        r
      );
    }
    function PS(i, n, e) {
      var t = [n, e];
      return (t.left = i), t;
    }
    function GS(i, n, e, t) {
      i[0] || i[1]
        ? i.left === e
          ? (i[1] = t)
          : (i[0] = t)
        : ((i[0] = t), (i.left = n), (i.right = e));
    }
    function US(i, n, e, t, r) {
      var m,
        o = i[0],
        c = i[1],
        s = o[0],
        d = o[1],
        u = 0,
        a = 1,
        f = c[0] - s,
        l = c[1] - d;
      if (((m = n - s), f || !(m > 0))) {
        if (((m /= f), f < 0)) {
          if (m < u) return;
          m < a && (a = m);
        } else if (f > 0) {
          if (m > a) return;
          m > u && (u = m);
        }
        if (((m = t - s), f || !(m < 0))) {
          if (((m /= f), f < 0)) {
            if (m > a) return;
            m > u && (u = m);
          } else if (f > 0) {
            if (m < u) return;
            m < a && (a = m);
          }
          if (((m = e - d), l || !(m > 0))) {
            if (((m /= l), l < 0)) {
              if (m < u) return;
              m < a && (a = m);
            } else if (l > 0) {
              if (m > a) return;
              m > u && (u = m);
            }
            if (((m = r - d), l || !(m < 0))) {
              if (((m /= l), l < 0)) {
                if (m > a) return;
                m > u && (u = m);
              } else if (l > 0) {
                if (m < u) return;
                m < a && (a = m);
              }
              return (
                !(u > 0 || a < 1) ||
                (u > 0 && (i[0] = [s + u * f, d + u * l]),
                a < 1 && (i[1] = [s + a * f, d + a * l]),
                !0)
              );
            }
          }
        }
      }
    }
    function IS(i, n, e, t, r) {
      var m = i[1];
      if (m) return !0;
      var o,
        c,
        s = i[0],
        d = i.left,
        u = i.right,
        a = d[0],
        f = d[1],
        l = u[0],
        h = u[1],
        A = (a + l) / 2,
        O = (f + h) / 2;
      if (h === f) {
        if (A < n || A >= t) return;
        if (a > l) {
          if (s) {
            if (s[1] >= r) return;
          } else s = [A, e];
          m = [A, r];
        } else {
          if (s) {
            if (s[1] < e) return;
          } else s = [A, r];
          m = [A, e];
        }
      } else if (((c = O - (o = (a - l) / (h - f)) * A), o < -1 || o > 1))
        if (a > l) {
          if (s) {
            if (s[1] >= r) return;
          } else s = [(e - c) / o, e];
          m = [(r - c) / o, r];
        } else {
          if (s) {
            if (s[1] < e) return;
          } else s = [(r - c) / o, r];
          m = [(e - c) / o, e];
        }
      else if (f < h) {
        if (s) {
          if (s[0] >= t) return;
        } else s = [n, o * n + c];
        m = [t, o * t + c];
      } else {
        if (s) {
          if (s[0] < n) return;
        } else s = [t, o * t + c];
        m = [n, o * n + c];
      }
      return (i[0] = s), (i[1] = m), !0;
    }
    function HS(i, n) {
      var e = i.site,
        t = n.left,
        r = n.right;
      return (
        e === r && ((r = t), (t = e)),
        r
          ? Math.atan2(r[1] - t[1], r[0] - t[0])
          : (e === t ? ((t = n[1]), (r = n[0])) : ((t = n[0]), (r = n[1])),
            Math.atan2(t[0] - r[0], r[1] - t[1]))
      );
    }
    function xS(i, n) {
      return n[+(n.left !== i.site)];
    }
    function WS(i, n) {
      return n[+(n.left === i.site)];
    }
    var wS,
      XS = [];
    function QS() {
      _S(this), (this.x = this.y = this.arc = this.site = this.cy = null);
    }
    function KS(i) {
      var n = i.P,
        e = i.N;
      if (n && e) {
        var t = n.site,
          r = i.site,
          m = e.site;
        if (t !== m) {
          var o = r[0],
            c = r[1],
            s = t[0] - o,
            d = t[1] - c,
            u = m[0] - o,
            a = m[1] - c,
            f = 2 * (s * a - d * u);
          if (!(f >= -cM)) {
            var l = s * s + d * d,
              h = u * u + a * a,
              A = (a * l - d * h) / f,
              O = (s * h - u * l) / f,
              p = XS.pop() || new QS();
            (p.arc = i),
              (p.site = r),
              (p.x = A + o),
              (p.y = (p.cy = O + c) + Math.sqrt(A * A + O * O)),
              (i.circle = p);
            for (var S = null, M = rM._; M; )
              if (p.y < M.y || (p.y === M.y && p.x <= M.x)) {
                if (!M.L) {
                  S = M.P;
                  break;
                }
                M = M.L;
              } else {
                if (!M.R) {
                  S = M;
                  break;
                }
                M = M.R;
              }
            rM.insert(S, p), S || (wS = p);
          }
        }
      }
    }
    function kS(i) {
      var n = i.circle;
      n &&
        (n.P || (wS = n.N), rM.remove(n), XS.push(n), _S(n), (i.circle = null));
    }
    var JS = [];
    function zS() {
      _S(this), (this.edge = this.site = this.circle = null);
    }
    function qS(i) {
      var n = JS.pop() || new zS();
      return (n.site = i), n;
    }
    function jS(i) {
      kS(i), eM.remove(i), JS.push(i), _S(i);
    }
    function ZS(i) {
      var n = i.circle,
        e = n.x,
        t = n.cy,
        r = [e, t],
        m = i.P,
        o = i.N,
        c = [i];
      jS(i);
      for (
        var s = m;
        s.circle &&
        Math.abs(e - s.circle.x) < oM &&
        Math.abs(t - s.circle.cy) < oM;

      )
        (m = s.P), c.unshift(s), jS(s), (s = m);
      c.unshift(s), kS(s);
      for (
        var d = o;
        d.circle &&
        Math.abs(e - d.circle.x) < oM &&
        Math.abs(t - d.circle.cy) < oM;

      )
        (o = d.N), c.push(d), jS(d), (d = o);
      c.push(d), kS(d);
      var u,
        a = c.length;
      for (u = 1; u < a; ++u)
        (d = c[u]), (s = c[u - 1]), GS(d.edge, s.site, d.site, r);
      (s = c[0]),
        ((d = c[a - 1]).edge = FS(s.site, d.site, null, r)),
        KS(s),
        KS(d);
    }
    function $S(i) {
      for (var n, e, t, r, m = i[0], o = i[1], c = eM._; c; )
        if ((t = iM(c, o) - m) > oM) c = c.L;
        else {
          if (!((r = m - nM(c, o)) > oM)) {
            t > -oM
              ? ((n = c.P), (e = c))
              : r > -oM
              ? ((n = c), (e = c.N))
              : (n = e = c);
            break;
          }
          if (!c.R) {
            n = c;
            break;
          }
          c = c.R;
        }
      !(function(i) {
        tM[i.index] = {site: i, halfedges: []};
      })(i);
      var s = qS(i);
      if ((eM.insert(n, s), n || e)) {
        if (n === e)
          return (
            kS(n),
            (e = qS(n.site)),
            eM.insert(s, e),
            (s.edge = e.edge = FS(n.site, s.site)),
            KS(n),
            void KS(e)
          );
        if (e) {
          kS(n), kS(e);
          var d = n.site,
            u = d[0],
            a = d[1],
            f = i[0] - u,
            l = i[1] - a,
            h = e.site,
            A = h[0] - u,
            O = h[1] - a,
            p = 2 * (f * O - l * A),
            S = f * f + l * l,
            M = A * A + O * O,
            E = [(O * S - l * M) / p + u, (f * M - A * S) / p + a];
          GS(e.edge, d, h, E),
            (s.edge = FS(d, i, null, E)),
            (e.edge = FS(i, h, null, E)),
            KS(n),
            KS(e);
        } else s.edge = FS(n.site, s.site);
      }
    }
    function iM(i, n) {
      var e = i.site,
        t = e[0],
        r = e[1],
        m = r - n;
      if (!m) return t;
      var o = i.P;
      if (!o) return -1 / 0;
      var c = (e = o.site)[0],
        s = e[1],
        d = s - n;
      if (!d) return c;
      var u = c - t,
        a = 1 / m - 1 / d,
        f = u / d;
      return a
        ? (-f +
            Math.sqrt(
              f * f - 2 * a * ((u * u) / (-2 * d) - s + d / 2 + r - m / 2)
            )) /
            a +
            t
        : (t + c) / 2;
    }
    function nM(i, n) {
      var e = i.N;
      if (e) return iM(e, n);
      var t = i.site;
      return t[1] === n ? t[0] : 1 / 0;
    }
    var eM,
      tM,
      rM,
      mM,
      oM = 1e-6,
      cM = 1e-12;
    function sM(i, n) {
      return n[1] - i[1] || n[0] - i[0];
    }
    function dM(i, n) {
      var e,
        t,
        r,
        m = i.sort(sM).pop();
      for (mM = [], tM = new Array(i.length), eM = new YS(), rM = new YS(); ; )
        if (((r = wS), m && (!r || m[1] < r.y || (m[1] === r.y && m[0] < r.x))))
          (m[0] === e && m[1] === t) || ($S(m), (e = m[0]), (t = m[1])),
            (m = i.pop());
        else {
          if (!r) break;
          ZS(r.arc);
        }
      if (
        ((function() {
          for (var i, n, e, t, r = 0, m = tM.length; r < m; ++r)
            if ((i = tM[r]) && (t = (n = i.halfedges).length)) {
              var o = new Array(t),
                c = new Array(t);
              for (e = 0; e < t; ++e) (o[e] = e), (c[e] = HS(i, mM[n[e]]));
              for (
                o.sort(function(i, n) {
                  return c[n] - c[i];
                }),
                  e = 0;
                e < t;
                ++e
              )
                c[e] = n[o[e]];
              for (e = 0; e < t; ++e) n[e] = c[e];
            }
        })(),
        n)
      ) {
        var o = +n[0][0],
          c = +n[0][1],
          s = +n[1][0],
          d = +n[1][1];
        !(function(i, n, e, t) {
          for (var r, m = mM.length; m--; )
            (IS((r = mM[m]), i, n, e, t) &&
              US(r, i, n, e, t) &&
              (Math.abs(r[0][0] - r[1][0]) > oM ||
                Math.abs(r[0][1] - r[1][1]) > oM)) ||
              delete mM[m];
        })(o, c, s, d),
          (function(i, n, e, t) {
            var r,
              m,
              o,
              c,
              s,
              d,
              u,
              a,
              f,
              l,
              h,
              A,
              O = tM.length,
              p = !0;
            for (r = 0; r < O; ++r)
              if ((m = tM[r])) {
                for (o = m.site, c = (s = m.halfedges).length; c--; )
                  mM[s[c]] || s.splice(c, 1);
                for (c = 0, d = s.length; c < d; )
                  (h = (l = WS(m, mM[s[c]]))[0]),
                    (A = l[1]),
                    (a = (u = xS(m, mM[s[++c % d]]))[0]),
                    (f = u[1]),
                    (Math.abs(h - a) > oM || Math.abs(A - f) > oM) &&
                      (s.splice(
                        c,
                        0,
                        mM.push(
                          PS(
                            o,
                            l,
                            Math.abs(h - i) < oM && t - A > oM
                              ? [i, Math.abs(a - i) < oM ? f : t]
                              : Math.abs(A - t) < oM && e - h > oM
                              ? [Math.abs(f - t) < oM ? a : e, t]
                              : Math.abs(h - e) < oM && A - n > oM
                              ? [e, Math.abs(a - e) < oM ? f : n]
                              : Math.abs(A - n) < oM && h - i > oM
                              ? [Math.abs(f - n) < oM ? a : i, n]
                              : null
                          )
                        ) - 1
                      ),
                      ++d);
                d && (p = !1);
              }
            if (p) {
              var S,
                M,
                E,
                L = 1 / 0;
              for (r = 0, p = null; r < O; ++r)
                (m = tM[r]) &&
                  (E = (S = (o = m.site)[0] - i) * S + (M = o[1] - n) * M) <
                    L &&
                  ((L = E), (p = m));
              if (p) {
                var D = [i, n],
                  N = [i, t],
                  v = [e, t],
                  C = [e, n];
                p.halfedges.push(
                  mM.push(PS((o = p.site), D, N)) - 1,
                  mM.push(PS(o, N, v)) - 1,
                  mM.push(PS(o, v, C)) - 1,
                  mM.push(PS(o, C, D)) - 1
                );
              }
            }
            for (r = 0; r < O; ++r)
              (m = tM[r]) && (m.halfedges.length || delete tM[r]);
          })(o, c, s, d);
      }
      (this.edges = mM), (this.cells = tM), (eM = rM = mM = tM = null);
    }
    dM.prototype = {
      constructor: dM,
      polygons: function() {
        var i = this.edges;
        return this.cells.map(function(n) {
          var e = n.halfedges.map(function(e) {
            return xS(n, i[e]);
          });
          return (e.data = n.site.data), e;
        });
      },
      triangles: function() {
        var i = [],
          n = this.edges;
        return (
          this.cells.forEach(function(e, t) {
            if ((m = (r = e.halfedges).length))
              for (
                var r,
                  m,
                  o,
                  c,
                  s,
                  d,
                  u = e.site,
                  a = -1,
                  f = n[r[m - 1]],
                  l = f.left === u ? f.right : f.left;
                ++a < m;

              )
                (o = l),
                  (l = (f = n[r[a]]).left === u ? f.right : f.left),
                  o &&
                    l &&
                    t < o.index &&
                    t < l.index &&
                    ((s = o),
                    (d = l),
                    ((c = u)[0] - d[0]) * (s[1] - c[1]) -
                      (c[0] - s[0]) * (d[1] - c[1]) <
                      0) &&
                    i.push([u.data, o.data, l.data]);
          }),
          i
        );
      },
      links: function() {
        return this.edges
          .filter(function(i) {
            return i.right;
          })
          .map(function(i) {
            return {source: i.left.data, target: i.right.data};
          });
      },
      find: function(i, n, e) {
        for (
          var t, r, m = this, o = m._found || 0, c = m.cells.length;
          !(r = m.cells[o]);

        )
          if (++o >= c) return null;
        var s = i - r.site[0],
          d = n - r.site[1],
          u = s * s + d * d;
        do {
          (r = m.cells[(t = o)]),
            (o = null),
            r.halfedges.forEach(function(e) {
              var t = m.edges[e],
                c = t.left;
              if ((c !== r.site && c) || (c = t.right)) {
                var s = i - c[0],
                  d = n - c[1],
                  a = s * s + d * d;
                a < u && ((u = a), (o = c.index));
              }
            });
        } while (null !== o);
        return (m._found = t), null == e || u <= e * e ? r.site : null;
      },
    };
    var uM = function() {
        var i = gS,
          n = TS,
          e = null;
        function t(t) {
          return new dM(
            t.map(function(e, r) {
              var m = [
                Math.round(i(e, r, t) / oM) * oM,
                Math.round(n(e, r, t) / oM) * oM,
              ];
              return (m.index = r), (m.data = e), m;
            }),
            e
          );
        }
        return (
          (t.polygons = function(i) {
            return t(i).polygons();
          }),
          (t.links = function(i) {
            return t(i).links();
          }),
          (t.triangles = function(i) {
            return t(i).triangles();
          }),
          (t.x = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : yS(+n)), t)
              : i;
          }),
          (t.y = function(i) {
            return arguments.length
              ? ((n = 'function' == typeof i ? i : yS(+i)), t)
              : n;
          }),
          (t.extent = function(i) {
            return arguments.length
              ? ((e =
                  null == i
                    ? null
                    : [[+i[0][0], +i[0][1]], [+i[1][0], +i[1][1]]]),
                t)
              : e && [[e[0][0], e[0][1]], [e[1][0], e[1][1]]];
          }),
          (t.size = function(i) {
            return arguments.length
              ? ((e = null == i ? null : [[0, 0], [+i[0], +i[1]]]), t)
              : e && [e[1][0] - e[0][0], e[1][1] - e[0][1]];
          }),
          t
        );
      },
      aM = function(i) {
        return function() {
          return i;
        };
      };
    function fM(i, n, e) {
      (this.target = i), (this.type = n), (this.transform = e);
    }
    function lM(i, n, e) {
      (this.k = i), (this.x = n), (this.y = e);
    }
    lM.prototype = {
      constructor: lM,
      scale: function(i) {
        return 1 === i ? this : new lM(this.k * i, this.x, this.y);
      },
      translate: function(i, n) {
        return (0 === i) & (0 === n)
          ? this
          : new lM(this.k, this.x + this.k * i, this.y + this.k * n);
      },
      apply: function(i) {
        return [i[0] * this.k + this.x, i[1] * this.k + this.y];
      },
      applyX: function(i) {
        return i * this.k + this.x;
      },
      applyY: function(i) {
        return i * this.k + this.y;
      },
      invert: function(i) {
        return [(i[0] - this.x) / this.k, (i[1] - this.y) / this.k];
      },
      invertX: function(i) {
        return (i - this.x) / this.k;
      },
      invertY: function(i) {
        return (i - this.y) / this.k;
      },
      rescaleX: function(i) {
        return i.copy().domain(
          i
            .range()
            .map(this.invertX, this)
            .map(i.invert, i)
        );
      },
      rescaleY: function(i) {
        return i.copy().domain(
          i
            .range()
            .map(this.invertY, this)
            .map(i.invert, i)
        );
      },
      toString: function() {
        return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
      },
    };
    var hM = new lM(1, 0, 0);
    function AM(i) {
      return i.__zoom || hM;
    }
    function OM() {
      Xi.stopImmediatePropagation();
    }
    AM.prototype = lM.prototype;
    var pM = function() {
      Xi.preventDefault(), Xi.stopImmediatePropagation();
    };
    function SM() {
      return !Xi.button;
    }
    function MM() {
      var i,
        n,
        e = this;
      return (
        e instanceof SVGElement
          ? ((i = (e = e.ownerSVGElement || e).width.baseVal.value),
            (n = e.height.baseVal.value))
          : ((i = e.clientWidth), (n = e.clientHeight)),
        [[0, 0], [i, n]]
      );
    }
    function EM() {
      return this.__zoom || hM;
    }
    function LM() {
      return (-Xi.deltaY * (Xi.deltaMode ? 120 : 1)) / 500;
    }
    function DM() {
      return 'ontouchstart' in this;
    }
    function NM(i, n, e) {
      var t = i.invertX(n[0][0]) - e[0][0],
        r = i.invertX(n[1][0]) - e[1][0],
        m = i.invertY(n[0][1]) - e[0][1],
        o = i.invertY(n[1][1]) - e[1][1];
      return i.translate(
        r > t ? (t + r) / 2 : Math.min(0, t) || Math.max(0, r),
        o > m ? (m + o) / 2 : Math.min(0, m) || Math.max(0, o)
      );
    }
    var vM = function() {
      var i,
        n,
        e = SM,
        t = MM,
        r = NM,
        m = LM,
        o = DM,
        c = [0, 1 / 0],
        s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
        d = 250,
        u = yn.x,
        a = [],
        f = fi('start', 'zoom', 'end'),
        l = 500,
        h = 150,
        A = 0;
      function O(i) {
        i.property('__zoom', EM)
          .on('wheel.zoom', N)
          .on('mousedown.zoom', v)
          .on('dblclick.zoom', C)
          .filter(o)
          .on('touchstart.zoom', y)
          .on('touchmove.zoom', g)
          .on('touchend.zoom touchcancel.zoom', T)
          .style('touch-action', 'none')
          .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
      }
      function p(i, n) {
        return (n = Math.max(c[0], Math.min(c[1], n))) === i.k
          ? i
          : new lM(n, i.x, i.y);
      }
      function S(i, n, e) {
        var t = n[0] - e[0] * i.k,
          r = n[1] - e[1] * i.k;
        return t === i.x && r === i.y ? i : new lM(i.k, t, r);
      }
      function M(i) {
        return [(+i[0][0] + +i[1][0]) / 2, (+i[0][1] + +i[1][1]) / 2];
      }
      function E(i, n, e) {
        i.on('start.zoom', function() {
          L(this, arguments).start();
        })
          .on('interrupt.zoom end.zoom', function() {
            L(this, arguments).end();
          })
          .tween('zoom', function() {
            var i = arguments,
              r = L(this, i),
              m = t.apply(this, i),
              o = e || M(m),
              c = Math.max(m[1][0] - m[0][0], m[1][1] - m[0][1]),
              s = this.__zoom,
              d = 'function' == typeof n ? n.apply(this, i) : n,
              a = u(s.invert(o).concat(c / s.k), d.invert(o).concat(c / d.k));
            return function(i) {
              if (1 === i) i = d;
              else {
                var n = a(i),
                  e = c / n[2];
                i = new lM(e, o[0] - n[0] * e, o[1] - n[1] * e);
              }
              r.zoom(null, i);
            };
          });
      }
      function L(i, n) {
        for (var e, t = 0, r = a.length; t < r; ++t)
          if ((e = a[t]).that === i) return e;
        return new D(i, n);
      }
      function D(i, n) {
        (this.that = i),
          (this.args = n),
          (this.index = -1),
          (this.active = 0),
          (this.extent = t.apply(i, n));
      }
      function N() {
        if (e.apply(this, arguments)) {
          var i = L(this, arguments),
            n = this.__zoom,
            t = Math.max(
              c[0],
              Math.min(c[1], n.k * Math.pow(2, m.apply(this, arguments)))
            ),
            o = dn(this);
          if (i.wheel)
            (i.mouse[0][0] === o[0] && i.mouse[0][1] === o[1]) ||
              (i.mouse[1] = n.invert((i.mouse[0] = o))),
              clearTimeout(i.wheel);
          else {
            if (n.k === t) return;
            (i.mouse = [o, n.invert(o)]), me(this), i.start();
          }
          pM(),
            (i.wheel = setTimeout(function() {
              (i.wheel = null), i.end();
            }, h)),
            i.zoom('mouse', r(S(p(n, t), i.mouse[0], i.mouse[1]), i.extent, s));
        }
      }
      function v() {
        if (!n && e.apply(this, arguments)) {
          var i = L(this, arguments),
            t = en(Xi.view)
              .on(
                'mousemove.zoom',
                function() {
                  if ((pM(), !i.moved)) {
                    var n = Xi.clientX - o,
                      e = Xi.clientY - c;
                    i.moved = n * n + e * e > A;
                  }
                  i.zoom(
                    'mouse',
                    r(
                      S(i.that.__zoom, (i.mouse[0] = dn(i.that)), i.mouse[1]),
                      i.extent,
                      s
                    )
                  );
                },
                !0
              )
              .on(
                'mouseup.zoom',
                function() {
                  t.on('mousemove.zoom mouseup.zoom', null),
                    On(Xi.view, i.moved),
                    pM(),
                    i.end();
                },
                !0
              ),
            m = dn(this),
            o = Xi.clientX,
            c = Xi.clientY;
          An(Xi.view),
            OM(),
            (i.mouse = [m, this.__zoom.invert(m)]),
            me(this),
            i.start();
        }
      }
      function C() {
        if (e.apply(this, arguments)) {
          var i = this.__zoom,
            n = dn(this),
            m = i.invert(n),
            o = i.k * (Xi.shiftKey ? 0.5 : 2),
            c = r(S(p(i, o), n, m), t.apply(this, arguments), s);
          pM(),
            d > 0
              ? en(this)
                  .transition()
                  .duration(d)
                  .call(E, c, n)
              : en(this).call(O.transform, c);
        }
      }
      function y() {
        if (e.apply(this, arguments)) {
          var n,
            t,
            r,
            m,
            o = L(this, arguments),
            c = Xi.changedTouches,
            s = c.length;
          for (OM(), t = 0; t < s; ++t)
            (r = c[t]),
              (m = [
                (m = an(this, c, r.identifier)),
                this.__zoom.invert(m),
                r.identifier,
              ]),
              o.touch0
                ? o.touch1 || (o.touch1 = m)
                : ((o.touch0 = m), (n = !0));
          if (i && ((i = clearTimeout(i)), !o.touch1))
            return (
              o.end(),
              void (
                (m = en(this).on('dblclick.zoom')) && m.apply(this, arguments)
              )
            );
          n &&
            ((i = setTimeout(function() {
              i = null;
            }, l)),
            me(this),
            o.start());
        }
      }
      function g() {
        var n,
          e,
          t,
          m,
          o = L(this, arguments),
          c = Xi.changedTouches,
          d = c.length;
        for (pM(), i && (i = clearTimeout(i)), n = 0; n < d; ++n)
          (e = c[n]),
            (t = an(this, c, e.identifier)),
            o.touch0 && o.touch0[2] === e.identifier
              ? (o.touch0[0] = t)
              : o.touch1 && o.touch1[2] === e.identifier && (o.touch1[0] = t);
        if (((e = o.that.__zoom), o.touch1)) {
          var u = o.touch0[0],
            a = o.touch0[1],
            f = o.touch1[0],
            l = o.touch1[1],
            h = (h = f[0] - u[0]) * h + (h = f[1] - u[1]) * h,
            A = (A = l[0] - a[0]) * A + (A = l[1] - a[1]) * A;
          (e = p(e, Math.sqrt(h / A))),
            (t = [(u[0] + f[0]) / 2, (u[1] + f[1]) / 2]),
            (m = [(a[0] + l[0]) / 2, (a[1] + l[1]) / 2]);
        } else {
          if (!o.touch0) return;
          (t = o.touch0[0]), (m = o.touch0[1]);
        }
        o.zoom('touch', r(S(e, t, m), o.extent, s));
      }
      function T() {
        var i,
          e,
          t = L(this, arguments),
          r = Xi.changedTouches,
          m = r.length;
        for (
          OM(),
            n && clearTimeout(n),
            n = setTimeout(function() {
              n = null;
            }, l),
            i = 0;
          i < m;
          ++i
        )
          (e = r[i]),
            t.touch0 && t.touch0[2] === e.identifier
              ? delete t.touch0
              : t.touch1 && t.touch1[2] === e.identifier && delete t.touch1;
        t.touch1 && !t.touch0 && ((t.touch0 = t.touch1), delete t.touch1),
          t.touch0 ? (t.touch0[1] = this.__zoom.invert(t.touch0[0])) : t.end();
      }
      return (
        (O.transform = function(i, n) {
          var e = i.selection ? i.selection() : i;
          e.property('__zoom', EM),
            i !== e
              ? E(i, n)
              : e.interrupt().each(function() {
                  L(this, arguments)
                    .start()
                    .zoom(
                      null,
                      'function' == typeof n ? n.apply(this, arguments) : n
                    )
                    .end();
                });
        }),
        (O.scaleBy = function(i, n) {
          O.scaleTo(i, function() {
            return (
              this.__zoom.k *
              ('function' == typeof n ? n.apply(this, arguments) : n)
            );
          });
        }),
        (O.scaleTo = function(i, n) {
          O.transform(i, function() {
            var i = t.apply(this, arguments),
              e = this.__zoom,
              m = M(i),
              o = e.invert(m),
              c = 'function' == typeof n ? n.apply(this, arguments) : n;
            return r(S(p(e, c), m, o), i, s);
          });
        }),
        (O.translateBy = function(i, n, e) {
          O.transform(i, function() {
            return r(
              this.__zoom.translate(
                'function' == typeof n ? n.apply(this, arguments) : n,
                'function' == typeof e ? e.apply(this, arguments) : e
              ),
              t.apply(this, arguments),
              s
            );
          });
        }),
        (O.translateTo = function(i, n, e) {
          O.transform(i, function() {
            var i = t.apply(this, arguments),
              m = this.__zoom,
              o = M(i);
            return r(
              hM
                .translate(o[0], o[1])
                .scale(m.k)
                .translate(
                  'function' == typeof n ? -n.apply(this, arguments) : -n,
                  'function' == typeof e ? -e.apply(this, arguments) : -e
                ),
              i,
              s
            );
          });
        }),
        (D.prototype = {
          start: function() {
            return (
              1 == ++this.active &&
                ((this.index = a.push(this) - 1), this.emit('start')),
              this
            );
          },
          zoom: function(i, n) {
            return (
              this.mouse &&
                'mouse' !== i &&
                (this.mouse[1] = n.invert(this.mouse[0])),
              this.touch0 &&
                'touch' !== i &&
                (this.touch0[1] = n.invert(this.touch0[0])),
              this.touch1 &&
                'touch' !== i &&
                (this.touch1[1] = n.invert(this.touch1[0])),
              (this.that.__zoom = n),
              this.emit('zoom'),
              this
            );
          },
          end: function() {
            return (
              0 == --this.active &&
                (a.splice(this.index, 1), (this.index = -1), this.emit('end')),
              this
            );
          },
          emit: function(i) {
            zi(new fM(O, i, this.that.__zoom), f.apply, f, [
              i,
              this.that,
              this.args,
            ]);
          },
        }),
        (O.wheelDelta = function(i) {
          return arguments.length
            ? ((m = 'function' == typeof i ? i : aM(+i)), O)
            : m;
        }),
        (O.filter = function(i) {
          return arguments.length
            ? ((e = 'function' == typeof i ? i : aM(!!i)), O)
            : e;
        }),
        (O.touchable = function(i) {
          return arguments.length
            ? ((o = 'function' == typeof i ? i : aM(!!i)), O)
            : o;
        }),
        (O.extent = function(i) {
          return arguments.length
            ? ((t =
                'function' == typeof i
                  ? i
                  : aM([[+i[0][0], +i[0][1]], [+i[1][0], +i[1][1]]])),
              O)
            : t;
        }),
        (O.scaleExtent = function(i) {
          return arguments.length
            ? ((c[0] = +i[0]), (c[1] = +i[1]), O)
            : [c[0], c[1]];
        }),
        (O.translateExtent = function(i) {
          return arguments.length
            ? ((s[0][0] = +i[0][0]),
              (s[1][0] = +i[1][0]),
              (s[0][1] = +i[0][1]),
              (s[1][1] = +i[1][1]),
              O)
            : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
        }),
        (O.constrain = function(i) {
          return arguments.length ? ((r = i), O) : r;
        }),
        (O.duration = function(i) {
          return arguments.length ? ((d = +i), O) : d;
        }),
        (O.interpolate = function(i) {
          return arguments.length ? ((u = i), O) : u;
        }),
        (O.on = function() {
          var i = f.on.apply(f, arguments);
          return i === f ? O : i;
        }),
        (O.clickDistance = function(i) {
          return arguments.length ? ((A = (i = +i) * i), O) : Math.sqrt(A);
        }),
        O
      );
    };
    e.d(n, 'version', function() {
      return '5.9.5';
    }),
      e.d(n, 'bisect', function() {
        return s;
      }),
      e.d(n, 'bisectRight', function() {
        return o;
      }),
      e.d(n, 'bisectLeft', function() {
        return c;
      }),
      e.d(n, 'ascending', function() {
        return t;
      }),
      e.d(n, 'bisector', function() {
        return r;
      }),
      e.d(n, 'cross', function() {
        return a;
      }),
      e.d(n, 'descending', function() {
        return f;
      }),
      e.d(n, 'deviation', function() {
        return A;
      }),
      e.d(n, 'extent', function() {
        return O;
      }),
      e.d(n, 'histogram', function() {
        return _;
      }),
      e.d(n, 'thresholdFreedmanDiaconis', function() {
        return B;
      }),
      e.d(n, 'thresholdScott', function() {
        return b;
      }),
      e.d(n, 'thresholdSturges', function() {
        return R;
      }),
      e.d(n, 'max', function() {
        return Y;
      }),
      e.d(n, 'mean', function() {
        return F;
      }),
      e.d(n, 'median', function() {
        return P;
      }),
      e.d(n, 'merge', function() {
        return G;
      }),
      e.d(n, 'min', function() {
        return U;
      }),
      e.d(n, 'pairs', function() {
        return d;
      }),
      e.d(n, 'permute', function() {
        return I;
      }),
      e.d(n, 'quantile', function() {
        return V;
      }),
      e.d(n, 'range', function() {
        return D;
      }),
      e.d(n, 'scan', function() {
        return H;
      }),
      e.d(n, 'shuffle', function() {
        return x;
      }),
      e.d(n, 'sum', function() {
        return W;
      }),
      e.d(n, 'ticks', function() {
        return y;
      }),
      e.d(n, 'tickIncrement', function() {
        return g;
      }),
      e.d(n, 'tickStep', function() {
        return T;
      }),
      e.d(n, 'transpose', function() {
        return w;
      }),
      e.d(n, 'variance', function() {
        return h;
      }),
      e.d(n, 'zip', function() {
        return Q;
      }),
      e.d(n, 'axisTop', function() {
        return ti;
      }),
      e.d(n, 'axisRight', function() {
        return ri;
      }),
      e.d(n, 'axisBottom', function() {
        return mi;
      }),
      e.d(n, 'axisLeft', function() {
        return oi;
      }),
      e.d(n, 'brush', function() {
        return Vt;
      }),
      e.d(n, 'brushX', function() {
        return Rt;
      }),
      e.d(n, 'brushY', function() {
        return _t;
      }),
      e.d(n, 'brushSelection', function() {
        return Tt;
      }),
      e.d(n, 'chord', function() {
        return Xt;
      }),
      e.d(n, 'ribbon', function() {
        return rr;
      }),
      e.d(n, 'nest', function() {
        return sr;
      }),
      e.d(n, 'set', function() {
        return Or;
      }),
      e.d(n, 'map', function() {
        return cr;
      }),
      e.d(n, 'keys', function() {
        return pr;
      }),
      e.d(n, 'values', function() {
        return Sr;
      }),
      e.d(n, 'entries', function() {
        return Mr;
      }),
      e.d(n, 'color', function() {
        return ce.a;
      }),
      e.d(n, 'rgb', function() {
        return ce.h;
      }),
      e.d(n, 'hsl', function() {
        return ce.e;
      }),
      e.d(n, 'lab', function() {
        return ce.f;
      }),
      e.d(n, 'hcl', function() {
        return ce.d;
      }),
      e.d(n, 'lch', function() {
        return ce.g;
      }),
      e.d(n, 'gray', function() {
        return ce.c;
      }),
      e.d(n, 'cubehelix', function() {
        return ce.b;
      }),
      e.d(n, 'contours', function() {
        return Hr;
      }),
      e.d(n, 'contourDensity', function() {
        return Kr;
      }),
      e.d(n, 'dispatch', function() {
        return fi;
      }),
      e.d(n, 'drag', function() {
        return Cn;
      }),
      e.d(n, 'dragDisable', function() {
        return An;
      }),
      e.d(n, 'dragEnable', function() {
        return On;
      }),
      e.d(n, 'dsvFormat', function() {
        return em;
      }),
      e.d(n, 'csvParse', function() {
        return rm;
      }),
      e.d(n, 'csvParseRows', function() {
        return mm;
      }),
      e.d(n, 'csvFormat', function() {
        return om;
      }),
      e.d(n, 'csvFormatBody', function() {
        return cm;
      }),
      e.d(n, 'csvFormatRows', function() {
        return sm;
      }),
      e.d(n, 'tsvParse', function() {
        return um;
      }),
      e.d(n, 'tsvParseRows', function() {
        return am;
      }),
      e.d(n, 'tsvFormat', function() {
        return fm;
      }),
      e.d(n, 'tsvFormatBody', function() {
        return lm;
      }),
      e.d(n, 'tsvFormatRows', function() {
        return hm;
      }),
      e.d(n, 'autoType', function() {
        return Am;
      }),
      e.d(n, 'easeLinear', function() {
        return Oe;
      }),
      e.d(n, 'easeQuad', function() {
        return Me;
      }),
      e.d(n, 'easeQuadIn', function() {
        return pe;
      }),
      e.d(n, 'easeQuadOut', function() {
        return Se;
      }),
      e.d(n, 'easeQuadInOut', function() {
        return Me;
      }),
      e.d(n, 'easeCubic', function() {
        return De;
      }),
      e.d(n, 'easeCubicIn', function() {
        return Ee;
      }),
      e.d(n, 'easeCubicOut', function() {
        return Le;
      }),
      e.d(n, 'easeCubicInOut', function() {
        return De;
      }),
      e.d(n, 'easePoly', function() {
        return Ce;
      }),
      e.d(n, 'easePolyIn', function() {
        return Ne;
      }),
      e.d(n, 'easePolyOut', function() {
        return ve;
      }),
      e.d(n, 'easePolyInOut', function() {
        return Ce;
      }),
      e.d(n, 'easeSin', function() {
        return _e;
      }),
      e.d(n, 'easeSinIn', function() {
        return Te;
      }),
      e.d(n, 'easeSinOut', function() {
        return Re;
      }),
      e.d(n, 'easeSinInOut', function() {
        return _e;
      }),
      e.d(n, 'easeExp', function() {
        return be;
      }),
      e.d(n, 'easeExpIn', function() {
        return Ve;
      }),
      e.d(n, 'easeExpOut', function() {
        return Be;
      }),
      e.d(n, 'easeExpInOut', function() {
        return be;
      }),
      e.d(n, 'easeCircle', function() {
        return Pe;
      }),
      e.d(n, 'easeCircleIn', function() {
        return Ye;
      }),
      e.d(n, 'easeCircleOut', function() {
        return Fe;
      }),
      e.d(n, 'easeCircleInOut', function() {
        return Pe;
      }),
      e.d(n, 'easeBounce', function() {
        return Je;
      }),
      e.d(n, 'easeBounceIn', function() {
        return ke;
      }),
      e.d(n, 'easeBounceOut', function() {
        return Je;
      }),
      e.d(n, 'easeBounceInOut', function() {
        return ze;
      }),
      e.d(n, 'easeBack', function() {
        return Ze;
      }),
      e.d(n, 'easeBackIn', function() {
        return qe;
      }),
      e.d(n, 'easeBackOut', function() {
        return je;
      }),
      e.d(n, 'easeBackInOut', function() {
        return Ze;
      }),
      e.d(n, 'easeElastic', function() {
        return nt;
      }),
      e.d(n, 'easeElasticIn', function() {
        return it;
      }),
      e.d(n, 'easeElasticOut', function() {
        return nt;
      }),
      e.d(n, 'easeElasticInOut', function() {
        return et;
      }),
      e.d(n, 'blob', function() {
        return pm;
      }),
      e.d(n, 'buffer', function() {
        return Mm;
      }),
      e.d(n, 'dsv', function() {
        return Nm;
      }),
      e.d(n, 'csv', function() {
        return vm;
      }),
      e.d(n, 'tsv', function() {
        return Cm;
      }),
      e.d(n, 'image', function() {
        return ym;
      }),
      e.d(n, 'json', function() {
        return Tm;
      }),
      e.d(n, 'text', function() {
        return Lm;
      }),
      e.d(n, 'xml', function() {
        return _m;
      }),
      e.d(n, 'html', function() {
        return Vm;
      }),
      e.d(n, 'svg', function() {
        return Bm;
      }),
      e.d(n, 'forceCenter', function() {
        return bm;
      }),
      e.d(n, 'forceCollide', function() {
        return Km;
      }),
      e.d(n, 'forceLink', function() {
        return zm;
      }),
      e.d(n, 'forceManyBody', function() {
        return no;
      }),
      e.d(n, 'forceRadial', function() {
        return eo;
      }),
      e.d(n, 'forceSimulation', function() {
        return io;
      }),
      e.d(n, 'forceX', function() {
        return to;
      }),
      e.d(n, 'forceY', function() {
        return ro;
      }),
      e.d(n, 'formatDefaultLocale', function() {
        return Lo;
      }),
      e.d(n, 'format', function() {
        return lo;
      }),
      e.d(n, 'formatPrefix', function() {
        return ho;
      }),
      e.d(n, 'formatLocale', function() {
        return Eo;
      }),
      e.d(n, 'formatSpecifier', function() {
        return so;
      }),
      e.d(n, 'precisionFixed', function() {
        return Do;
      }),
      e.d(n, 'precisionPrefix', function() {
        return No;
      }),
      e.d(n, 'precisionRound', function() {
        return vo;
      }),
      e.d(n, 'geoArea', function() {
        return pc;
      }),
      e.d(n, 'geoBounds', function() {
        return ds;
      }),
      e.d(n, 'geoCentroid', function() {
        return Ls;
      }),
      e.d(n, 'geoCircle', function() {
        return Bs;
      }),
      e.d(n, 'geoClipAntimeridian', function() {
        return zs;
      }),
      e.d(n, 'geoClipCircle', function() {
        return qs;
      }),
      e.d(n, 'geoClipExtent', function() {
        return rd;
      }),
      e.d(n, 'geoClipRectangle', function() {
        return id;
      }),
      e.d(n, 'geoContains', function() {
        return Dd;
      }),
      e.d(n, 'geoDistance', function() {
        return ld;
      }),
      e.d(n, 'geoGraticule', function() {
        return Cd;
      }),
      e.d(n, 'geoGraticule10', function() {
        return yd;
      }),
      e.d(n, 'geoInterpolate', function() {
        return Vd;
      }),
      e.d(n, 'geoLength', function() {
        return ud;
      }),
      e.d(n, 'geoPath', function() {
        return Ru;
      }),
      e.d(n, 'geoAlbers', function() {
        return Ju;
      }),
      e.d(n, 'geoAlbersUsa', function() {
        return zu;
      }),
      e.d(n, 'geoAzimuthalEqualArea', function() {
        return $u;
      }),
      e.d(n, 'geoAzimuthalEqualAreaRaw', function() {
        return Zu;
      }),
      e.d(n, 'geoAzimuthalEquidistant', function() {
        return na;
      }),
      e.d(n, 'geoAzimuthalEquidistantRaw', function() {
        return ia;
      }),
      e.d(n, 'geoConicConformal', function() {
        return ca;
      }),
      e.d(n, 'geoConicConformalRaw', function() {
        return oa;
      }),
      e.d(n, 'geoConicEqualArea', function() {
        return ku;
      }),
      e.d(n, 'geoConicEqualAreaRaw', function() {
        return Ku;
      }),
      e.d(n, 'geoConicEquidistant', function() {
        return aa;
      }),
      e.d(n, 'geoConicEquidistantRaw', function() {
        return ua;
      }),
      e.d(n, 'geoEqualEarth', function() {
        return Sa;
      }),
      e.d(n, 'geoEqualEarthRaw', function() {
        return pa;
      }),
      e.d(n, 'geoEquirectangular', function() {
        return da;
      }),
      e.d(n, 'geoEquirectangularRaw', function() {
        return sa;
      }),
      e.d(n, 'geoGnomonic', function() {
        return Ea;
      }),
      e.d(n, 'geoGnomonicRaw', function() {
        return Ma;
      }),
      e.d(n, 'geoIdentity', function() {
        return Da;
      }),
      e.d(n, 'geoProjection', function() {
        return wu;
      }),
      e.d(n, 'geoProjectionMutator', function() {
        return Xu;
      }),
      e.d(n, 'geoMercator', function() {
        return ta;
      }),
      e.d(n, 'geoMercatorRaw', function() {
        return ea;
      }),
      e.d(n, 'geoNaturalEarth1', function() {
        return va;
      }),
      e.d(n, 'geoNaturalEarth1Raw', function() {
        return Na;
      }),
      e.d(n, 'geoOrthographic', function() {
        return ya;
      }),
      e.d(n, 'geoOrthographicRaw', function() {
        return Ca;
      }),
      e.d(n, 'geoStereographic', function() {
        return Ta;
      }),
      e.d(n, 'geoStereographicRaw', function() {
        return ga;
      }),
      e.d(n, 'geoTransverseMercator', function() {
        return _a;
      }),
      e.d(n, 'geoTransverseMercatorRaw', function() {
        return Ra;
      }),
      e.d(n, 'geoRotation', function() {
        return Rs;
      }),
      e.d(n, 'geoStream', function() {
        return dc;
      }),
      e.d(n, 'geoTransform', function() {
        return _u;
      }),
      e.d(n, 'cluster', function() {
        return Va.cluster;
      }),
      e.d(n, 'hierarchy', function() {
        return Va.hierarchy;
      }),
      e.d(n, 'pack', function() {
        return Va.pack;
      }),
      e.d(n, 'packSiblings', function() {
        return Va.packSiblings;
      }),
      e.d(n, 'packEnclose', function() {
        return Va.packEnclose;
      }),
      e.d(n, 'partition', function() {
        return Va.partition;
      }),
      e.d(n, 'stratify', function() {
        return Va.stratify;
      }),
      e.d(n, 'tree', function() {
        return Va.tree;
      }),
      e.d(n, 'treemap', function() {
        return Va.treemap;
      }),
      e.d(n, 'treemapBinary', function() {
        return Va.treemapBinary;
      }),
      e.d(n, 'treemapDice', function() {
        return Va.treemapDice;
      }),
      e.d(n, 'treemapSlice', function() {
        return Va.treemapSlice;
      }),
      e.d(n, 'treemapSliceDice', function() {
        return Va.treemapSliceDice;
      }),
      e.d(n, 'treemapSquarify', function() {
        return Va.treemapSquarify;
      }),
      e.d(n, 'treemapResquarify', function() {
        return Va.treemapResquarify;
      }),
      e.d(n, 'interpolate', function() {
        return yn.a;
      }),
      e.d(n, 'interpolateArray', function() {
        return yn.b;
      }),
      e.d(n, 'interpolateBasis', function() {
        return yn.c;
      }),
      e.d(n, 'interpolateBasisClosed', function() {
        return yn.d;
      }),
      e.d(n, 'interpolateDate', function() {
        return yn.g;
      }),
      e.d(n, 'interpolateDiscrete', function() {
        return yn.h;
      }),
      e.d(n, 'interpolateHue', function() {
        return yn.m;
      }),
      e.d(n, 'interpolateNumber', function() {
        return yn.o;
      }),
      e.d(n, 'interpolateObject', function() {
        return yn.p;
      }),
      e.d(n, 'interpolateRound', function() {
        return yn.t;
      }),
      e.d(n, 'interpolateString', function() {
        return yn.u;
      }),
      e.d(n, 'interpolateTransformCss', function() {
        return yn.v;
      }),
      e.d(n, 'interpolateTransformSvg', function() {
        return yn.w;
      }),
      e.d(n, 'interpolateZoom', function() {
        return yn.x;
      }),
      e.d(n, 'interpolateRgb', function() {
        return yn.q;
      }),
      e.d(n, 'interpolateRgbBasis', function() {
        return yn.r;
      }),
      e.d(n, 'interpolateRgbBasisClosed', function() {
        return yn.s;
      }),
      e.d(n, 'interpolateHsl', function() {
        return yn.k;
      }),
      e.d(n, 'interpolateHslLong', function() {
        return yn.l;
      }),
      e.d(n, 'interpolateLab', function() {
        return yn.n;
      }),
      e.d(n, 'interpolateHcl', function() {
        return yn.i;
      }),
      e.d(n, 'interpolateHclLong', function() {
        return yn.j;
      }),
      e.d(n, 'interpolateCubehelix', function() {
        return yn.e;
      }),
      e.d(n, 'interpolateCubehelixLong', function() {
        return yn.f;
      }),
      e.d(n, 'piecewise', function() {
        return yn.y;
      }),
      e.d(n, 'quantize', function() {
        return yn.z;
      }),
      e.d(n, 'path', function() {
        return Zt;
      }),
      e.d(n, 'polygonArea', function() {
        return Ba;
      }),
      e.d(n, 'polygonCentroid', function() {
        return ba;
      }),
      e.d(n, 'polygonHull', function() {
        return Ga;
      }),
      e.d(n, 'polygonContains', function() {
        return Ua;
      }),
      e.d(n, 'polygonLength', function() {
        return Ia;
      }),
      e.d(n, 'quadtree', function() {
        return Hm;
      }),
      e.d(n, 'randomUniform', function() {
        return xa;
      }),
      e.d(n, 'randomNormal', function() {
        return Wa;
      }),
      e.d(n, 'randomLogNormal', function() {
        return wa;
      }),
      e.d(n, 'randomBates', function() {
        return Qa;
      }),
      e.d(n, 'randomIrwinHall', function() {
        return Xa;
      }),
      e.d(n, 'randomExponential', function() {
        return Ka;
      }),
      e.d(n, 'scaleBand', function() {
        return Of;
      }),
      e.d(n, 'scalePoint', function() {
        return pf;
      }),
      e.d(n, 'scaleIdentity', function() {
        return Bf;
      }),
      e.d(n, 'scaleLinear', function() {
        return Vf;
      }),
      e.d(n, 'scaleLog', function() {
        return xf;
      }),
      e.d(n, 'scaleSymlog', function() {
        return Qf;
      }),
      e.d(n, 'scaleOrdinal', function() {
        return Af;
      }),
      e.d(n, 'scaleImplicit', function() {
        return hf;
      }),
      e.d(n, 'scalePow', function() {
        return qf;
      }),
      e.d(n, 'scaleSqrt', function() {
        return jf;
      }),
      e.d(n, 'scaleQuantile', function() {
        return Zf;
      }),
      e.d(n, 'scaleQuantize', function() {
        return $f;
      }),
      e.d(n, 'scaleThreshold', function() {
        return il;
      }),
      e.d(n, 'scaleTime', function() {
        return qA;
      }),
      e.d(n, 'scaleUtc', function() {
        return jA;
      }),
      e.d(n, 'scaleSequential', function() {
        return iO;
      }),
      e.d(n, 'scaleSequentialLog', function() {
        return nO;
      }),
      e.d(n, 'scaleSequentialPow', function() {
        return tO;
      }),
      e.d(n, 'scaleSequentialSqrt', function() {
        return rO;
      }),
      e.d(n, 'scaleSequentialSymlog', function() {
        return eO;
      }),
      e.d(n, 'scaleSequentialQuantile', function() {
        return mO;
      }),
      e.d(n, 'scaleDiverging', function() {
        return cO;
      }),
      e.d(n, 'scaleDivergingLog', function() {
        return sO;
      }),
      e.d(n, 'scaleDivergingPow', function() {
        return uO;
      }),
      e.d(n, 'scaleDivergingSqrt', function() {
        return aO;
      }),
      e.d(n, 'scaleDivergingSymlog', function() {
        return dO;
      }),
      e.d(n, 'tickFormat', function() {
        return Rf;
      }),
      e.d(n, 'schemeCategory10', function() {
        return fO.schemeCategory10;
      }),
      e.d(n, 'schemeAccent', function() {
        return fO.schemeAccent;
      }),
      e.d(n, 'schemeDark2', function() {
        return fO.schemeDark2;
      }),
      e.d(n, 'schemePaired', function() {
        return fO.schemePaired;
      }),
      e.d(n, 'schemePastel1', function() {
        return fO.schemePastel1;
      }),
      e.d(n, 'schemePastel2', function() {
        return fO.schemePastel2;
      }),
      e.d(n, 'schemeSet1', function() {
        return fO.schemeSet1;
      }),
      e.d(n, 'schemeSet2', function() {
        return fO.schemeSet2;
      }),
      e.d(n, 'schemeSet3', function() {
        return fO.schemeSet3;
      }),
      e.d(n, 'interpolateBrBG', function() {
        return fO.interpolateBrBG;
      }),
      e.d(n, 'schemeBrBG', function() {
        return fO.schemeBrBG;
      }),
      e.d(n, 'interpolatePRGn', function() {
        return fO.interpolatePRGn;
      }),
      e.d(n, 'schemePRGn', function() {
        return fO.schemePRGn;
      }),
      e.d(n, 'interpolatePiYG', function() {
        return fO.interpolatePiYG;
      }),
      e.d(n, 'schemePiYG', function() {
        return fO.schemePiYG;
      }),
      e.d(n, 'interpolatePuOr', function() {
        return fO.interpolatePuOr;
      }),
      e.d(n, 'schemePuOr', function() {
        return fO.schemePuOr;
      }),
      e.d(n, 'interpolateRdBu', function() {
        return fO.interpolateRdBu;
      }),
      e.d(n, 'schemeRdBu', function() {
        return fO.schemeRdBu;
      }),
      e.d(n, 'interpolateRdGy', function() {
        return fO.interpolateRdGy;
      }),
      e.d(n, 'schemeRdGy', function() {
        return fO.schemeRdGy;
      }),
      e.d(n, 'interpolateRdYlBu', function() {
        return fO.interpolateRdYlBu;
      }),
      e.d(n, 'schemeRdYlBu', function() {
        return fO.schemeRdYlBu;
      }),
      e.d(n, 'interpolateRdYlGn', function() {
        return fO.interpolateRdYlGn;
      }),
      e.d(n, 'schemeRdYlGn', function() {
        return fO.schemeRdYlGn;
      }),
      e.d(n, 'interpolateSpectral', function() {
        return fO.interpolateSpectral;
      }),
      e.d(n, 'schemeSpectral', function() {
        return fO.schemeSpectral;
      }),
      e.d(n, 'interpolateBuGn', function() {
        return fO.interpolateBuGn;
      }),
      e.d(n, 'schemeBuGn', function() {
        return fO.schemeBuGn;
      }),
      e.d(n, 'interpolateBuPu', function() {
        return fO.interpolateBuPu;
      }),
      e.d(n, 'schemeBuPu', function() {
        return fO.schemeBuPu;
      }),
      e.d(n, 'interpolateGnBu', function() {
        return fO.interpolateGnBu;
      }),
      e.d(n, 'schemeGnBu', function() {
        return fO.schemeGnBu;
      }),
      e.d(n, 'interpolateOrRd', function() {
        return fO.interpolateOrRd;
      }),
      e.d(n, 'schemeOrRd', function() {
        return fO.schemeOrRd;
      }),
      e.d(n, 'interpolatePuBuGn', function() {
        return fO.interpolatePuBuGn;
      }),
      e.d(n, 'schemePuBuGn', function() {
        return fO.schemePuBuGn;
      }),
      e.d(n, 'interpolatePuBu', function() {
        return fO.interpolatePuBu;
      }),
      e.d(n, 'schemePuBu', function() {
        return fO.schemePuBu;
      }),
      e.d(n, 'interpolatePuRd', function() {
        return fO.interpolatePuRd;
      }),
      e.d(n, 'schemePuRd', function() {
        return fO.schemePuRd;
      }),
      e.d(n, 'interpolateRdPu', function() {
        return fO.interpolateRdPu;
      }),
      e.d(n, 'schemeRdPu', function() {
        return fO.schemeRdPu;
      }),
      e.d(n, 'interpolateYlGnBu', function() {
        return fO.interpolateYlGnBu;
      }),
      e.d(n, 'schemeYlGnBu', function() {
        return fO.schemeYlGnBu;
      }),
      e.d(n, 'interpolateYlGn', function() {
        return fO.interpolateYlGn;
      }),
      e.d(n, 'schemeYlGn', function() {
        return fO.schemeYlGn;
      }),
      e.d(n, 'interpolateYlOrBr', function() {
        return fO.interpolateYlOrBr;
      }),
      e.d(n, 'schemeYlOrBr', function() {
        return fO.schemeYlOrBr;
      }),
      e.d(n, 'interpolateYlOrRd', function() {
        return fO.interpolateYlOrRd;
      }),
      e.d(n, 'schemeYlOrRd', function() {
        return fO.schemeYlOrRd;
      }),
      e.d(n, 'interpolateBlues', function() {
        return fO.interpolateBlues;
      }),
      e.d(n, 'schemeBlues', function() {
        return fO.schemeBlues;
      }),
      e.d(n, 'interpolateGreens', function() {
        return fO.interpolateGreens;
      }),
      e.d(n, 'schemeGreens', function() {
        return fO.schemeGreens;
      }),
      e.d(n, 'interpolateGreys', function() {
        return fO.interpolateGreys;
      }),
      e.d(n, 'schemeGreys', function() {
        return fO.schemeGreys;
      }),
      e.d(n, 'interpolatePurples', function() {
        return fO.interpolatePurples;
      }),
      e.d(n, 'schemePurples', function() {
        return fO.schemePurples;
      }),
      e.d(n, 'interpolateReds', function() {
        return fO.interpolateReds;
      }),
      e.d(n, 'schemeReds', function() {
        return fO.schemeReds;
      }),
      e.d(n, 'interpolateOranges', function() {
        return fO.interpolateOranges;
      }),
      e.d(n, 'schemeOranges', function() {
        return fO.schemeOranges;
      }),
      e.d(n, 'interpolateCubehelixDefault', function() {
        return fO.interpolateCubehelixDefault;
      }),
      e.d(n, 'interpolateRainbow', function() {
        return fO.interpolateRainbow;
      }),
      e.d(n, 'interpolateWarm', function() {
        return fO.interpolateWarm;
      }),
      e.d(n, 'interpolateCool', function() {
        return fO.interpolateCool;
      }),
      e.d(n, 'interpolateSinebow', function() {
        return fO.interpolateSinebow;
      }),
      e.d(n, 'interpolateViridis', function() {
        return fO.interpolateViridis;
      }),
      e.d(n, 'interpolateMagma', function() {
        return fO.interpolateMagma;
      }),
      e.d(n, 'interpolateInferno', function() {
        return fO.interpolateInferno;
      }),
      e.d(n, 'interpolatePlasma', function() {
        return fO.interpolatePlasma;
      }),
      e.d(n, 'create', function() {
        return tn;
      }),
      e.d(n, 'creator', function() {
        return Oi;
      }),
      e.d(n, 'local', function() {
        return mn;
      }),
      e.d(n, 'matcher', function() {
        return Li;
      }),
      e.d(n, 'mouse', function() {
        return dn;
      }),
      e.d(n, 'namespace', function() {
        return Ai;
      }),
      e.d(n, 'namespaces', function() {
        return hi;
      }),
      e.d(n, 'clientPoint', function() {
        return sn;
      }),
      e.d(n, 'select', function() {
        return en;
      }),
      e.d(n, 'selectAll', function() {
        return un;
      }),
      e.d(n, 'selection', function() {
        return nn;
      }),
      e.d(n, 'selector', function() {
        return Si;
      }),
      e.d(n, 'selectorAll', function() {
        return Ei;
      }),
      e.d(n, 'style', function() {
        return Ri;
      }),
      e.d(n, 'touch', function() {
        return an;
      }),
      e.d(n, 'touches', function() {
        return fn;
      }),
      e.d(n, 'window', function() {
        return Ti;
      }),
      e.d(n, 'event', function() {
        return Xi;
      }),
      e.d(n, 'customEvent', function() {
        return zi;
      }),
      e.d(n, 'arc', function() {
        return BO;
      }),
      e.d(n, 'area', function() {
        return UO;
      }),
      e.d(n, 'line', function() {
        return GO;
      }),
      e.d(n, 'pie', function() {
        return xO;
      }),
      e.d(n, 'areaRadial', function() {
        return kO;
      }),
      e.d(n, 'radialArea', function() {
        return kO;
      }),
      e.d(n, 'lineRadial', function() {
        return KO;
      }),
      e.d(n, 'radialLine', function() {
        return KO;
      }),
      e.d(n, 'pointRadial', function() {
        return JO;
      }),
      e.d(n, 'linkHorizontal', function() {
        return ep;
      }),
      e.d(n, 'linkVertical', function() {
        return tp;
      }),
      e.d(n, 'linkRadial', function() {
        return rp;
      }),
      e.d(n, 'symbol', function() {
        return Dp;
      }),
      e.d(n, 'symbols', function() {
        return Lp;
      }),
      e.d(n, 'symbolCircle', function() {
        return mp;
      }),
      e.d(n, 'symbolCross', function() {
        return op;
      }),
      e.d(n, 'symbolDiamond', function() {
        return dp;
      }),
      e.d(n, 'symbolSquare', function() {
        return hp;
      }),
      e.d(n, 'symbolStar', function() {
        return lp;
      }),
      e.d(n, 'symbolTriangle', function() {
        return Op;
      }),
      e.d(n, 'symbolWye', function() {
        return Ep;
      }),
      e.d(n, 'curveBasisClosed', function() {
        return Tp;
      }),
      e.d(n, 'curveBasisOpen', function() {
        return _p;
      }),
      e.d(n, 'curveBasis', function() {
        return yp;
      }),
      e.d(n, 'curveBundle', function() {
        return Bp;
      }),
      e.d(n, 'curveCardinalClosed', function() {
        return Gp;
      }),
      e.d(n, 'curveCardinalOpen', function() {
        return Ip;
      }),
      e.d(n, 'curveCardinal', function() {
        return Fp;
      }),
      e.d(n, 'curveCatmullRomClosed', function() {
        return Xp;
      }),
      e.d(n, 'curveCatmullRomOpen', function() {
        return Kp;
      }),
      e.d(n, 'curveCatmullRom', function() {
        return Wp;
      }),
      e.d(n, 'curveLinearClosed', function() {
        return Jp;
      }),
      e.d(n, 'curveLinear', function() {
        return YO;
      }),
      e.d(n, 'curveMonotoneX', function() {
        return eS;
      }),
      e.d(n, 'curveMonotoneY', function() {
        return tS;
      }),
      e.d(n, 'curveNatural', function() {
        return oS;
      }),
      e.d(n, 'curveStep', function() {
        return sS;
      }),
      e.d(n, 'curveStepAfter', function() {
        return uS;
      }),
      e.d(n, 'curveStepBefore', function() {
        return dS;
      }),
      e.d(n, 'stack', function() {
        return hS;
      }),
      e.d(n, 'stackOffsetExpand', function() {
        return AS;
      }),
      e.d(n, 'stackOffsetDiverging', function() {
        return OS;
      }),
      e.d(n, 'stackOffsetNone', function() {
        return aS;
      }),
      e.d(n, 'stackOffsetSilhouette', function() {
        return pS;
      }),
      e.d(n, 'stackOffsetWiggle', function() {
        return SS;
      }),
      e.d(n, 'stackOrderAppearance', function() {
        return MS;
      }),
      e.d(n, 'stackOrderAscending', function() {
        return LS;
      }),
      e.d(n, 'stackOrderDescending', function() {
        return NS;
      }),
      e.d(n, 'stackOrderInsideOut', function() {
        return vS;
      }),
      e.d(n, 'stackOrderNone', function() {
        return fS;
      }),
      e.d(n, 'stackOrderReverse', function() {
        return CS;
      }),
      e.d(n, 'timeInterval', function() {
        return tl;
      }),
      e.d(n, 'timeMillisecond', function() {
        return ml;
      }),
      e.d(n, 'timeMilliseconds', function() {
        return ol;
      }),
      e.d(n, 'utcMillisecond', function() {
        return ml;
      }),
      e.d(n, 'utcMilliseconds', function() {
        return ol;
      }),
      e.d(n, 'timeSecond', function() {
        return ul;
      }),
      e.d(n, 'timeSeconds', function() {
        return al;
      }),
      e.d(n, 'utcSecond', function() {
        return ul;
      }),
      e.d(n, 'utcSeconds', function() {
        return al;
      }),
      e.d(n, 'timeMinute', function() {
        return ll;
      }),
      e.d(n, 'timeMinutes', function() {
        return hl;
      }),
      e.d(n, 'timeHour', function() {
        return Ol;
      }),
      e.d(n, 'timeHours', function() {
        return pl;
      }),
      e.d(n, 'timeDay', function() {
        return Ml;
      }),
      e.d(n, 'timeDays', function() {
        return El;
      }),
      e.d(n, 'timeWeek', function() {
        return Dl;
      }),
      e.d(n, 'timeWeeks', function() {
        return Rl;
      }),
      e.d(n, 'timeSunday', function() {
        return Dl;
      }),
      e.d(n, 'timeSundays', function() {
        return Rl;
      }),
      e.d(n, 'timeMonday', function() {
        return Nl;
      }),
      e.d(n, 'timeMondays', function() {
        return _l;
      }),
      e.d(n, 'timeTuesday', function() {
        return vl;
      }),
      e.d(n, 'timeTuesdays', function() {
        return Vl;
      }),
      e.d(n, 'timeWednesday', function() {
        return Cl;
      }),
      e.d(n, 'timeWednesdays', function() {
        return Bl;
      }),
      e.d(n, 'timeThursday', function() {
        return yl;
      }),
      e.d(n, 'timeThursdays', function() {
        return bl;
      }),
      e.d(n, 'timeFriday', function() {
        return gl;
      }),
      e.d(n, 'timeFridays', function() {
        return Yl;
      }),
      e.d(n, 'timeSaturday', function() {
        return Tl;
      }),
      e.d(n, 'timeSaturdays', function() {
        return Fl;
      }),
      e.d(n, 'timeMonth', function() {
        return Gl;
      }),
      e.d(n, 'timeMonths', function() {
        return Ul;
      }),
      e.d(n, 'timeYear', function() {
        return Hl;
      }),
      e.d(n, 'timeYears', function() {
        return xl;
      }),
      e.d(n, 'utcMinute', function() {
        return wl;
      }),
      e.d(n, 'utcMinutes', function() {
        return Xl;
      }),
      e.d(n, 'utcHour', function() {
        return Kl;
      }),
      e.d(n, 'utcHours', function() {
        return kl;
      }),
      e.d(n, 'utcDay', function() {
        return zl;
      }),
      e.d(n, 'utcDays', function() {
        return ql;
      }),
      e.d(n, 'utcWeek', function() {
        return Zl;
      }),
      e.d(n, 'utcWeeks', function() {
        return mh;
      }),
      e.d(n, 'utcSunday', function() {
        return Zl;
      }),
      e.d(n, 'utcSundays', function() {
        return mh;
      }),
      e.d(n, 'utcMonday', function() {
        return $l;
      }),
      e.d(n, 'utcMondays', function() {
        return oh;
      }),
      e.d(n, 'utcTuesday', function() {
        return ih;
      }),
      e.d(n, 'utcTuesdays', function() {
        return ch;
      }),
      e.d(n, 'utcWednesday', function() {
        return nh;
      }),
      e.d(n, 'utcWednesdays', function() {
        return sh;
      }),
      e.d(n, 'utcThursday', function() {
        return eh;
      }),
      e.d(n, 'utcThursdays', function() {
        return dh;
      }),
      e.d(n, 'utcFriday', function() {
        return th;
      }),
      e.d(n, 'utcFridays', function() {
        return uh;
      }),
      e.d(n, 'utcSaturday', function() {
        return rh;
      }),
      e.d(n, 'utcSaturdays', function() {
        return ah;
      }),
      e.d(n, 'utcMonth', function() {
        return lh;
      }),
      e.d(n, 'utcMonths', function() {
        return hh;
      }),
      e.d(n, 'utcYear', function() {
        return Oh;
      }),
      e.d(n, 'utcYears', function() {
        return ph;
      }),
      e.d(n, 'timeFormatDefaultLocale', function() {
        return GA;
      }),
      e.d(n, 'timeFormat', function() {
        return Nh;
      }),
      e.d(n, 'timeParse', function() {
        return vh;
      }),
      e.d(n, 'utcFormat', function() {
        return Ch;
      }),
      e.d(n, 'utcParse', function() {
        return yh;
      }),
      e.d(n, 'timeFormatLocale', function() {
        return Lh;
      }),
      e.d(n, 'isoFormat', function() {
        return UA;
      }),
      e.d(n, 'isoParse', function() {
        return IA;
      }),
      e.d(n, 'now', function() {
        return Pn;
      }),
      e.d(n, 'timer', function() {
        return In;
      }),
      e.d(n, 'timerFlush', function() {
        return Hn;
      }),
      e.d(n, 'timeout', function() {
        return Xn;
      }),
      e.d(n, 'interval', function() {
        return Qn;
      }),
      e.d(n, 'transition', function() {
        return le;
      }),
      e.d(n, 'active', function() {
        return ot;
      }),
      e.d(n, 'interrupt', function() {
        return me;
      }),
      e.d(n, 'voronoi', function() {
        return uM;
      }),
      e.d(n, 'zoom', function() {
        return vM;
      }),
      e.d(n, 'zoomTransform', function() {
        return AM;
      }),
      e.d(n, 'zoomIdentity', function() {
        return hM;
      });
  },
  function(i, n, e) {
    'use strict';
    e.r(n);
    var t = function(i, n) {
        return i < n ? -1 : i > n ? 1 : i >= n ? 0 : NaN;
      },
      r = function(i) {
        var n;
        return (
          1 === i.length &&
            ((n = i),
            (i = function(i, e) {
              return t(n(i), e);
            })),
          {
            left: function(n, e, t, r) {
              for (null == t && (t = 0), null == r && (r = n.length); t < r; ) {
                var m = (t + r) >>> 1;
                i(n[m], e) < 0 ? (t = m + 1) : (r = m);
              }
              return t;
            },
            right: function(n, e, t, r) {
              for (null == t && (t = 0), null == r && (r = n.length); t < r; ) {
                var m = (t + r) >>> 1;
                i(n[m], e) > 0 ? (r = m) : (t = m + 1);
              }
              return t;
            },
          }
        );
      };
    var m = r(t),
      o = m.right,
      c = m.left,
      s = o;
    function d(i, n) {
      let e = 0;
      if (void 0 === n) for (const n of i) null != n && n >= n && ++e;
      else {
        let t = -1;
        for (let r of i) null != (r = n(r, ++t, i)) && r >= r && ++e;
      }
      return e;
    }
    function u(i) {
      return 0 | i.length;
    }
    function a(i) {
      return !(i > 0);
    }
    function f(i) {
      return 'object' != typeof i || 'length' in i ? i : Array.from(i);
    }
    function l(...i) {
      const n =
          'function' == typeof i[i.length - 1] &&
          (function(i) {
            return n => i(...n);
          })(i.pop()),
        e = (i = i.map(f)).map(u),
        t = i.length - 1,
        r = new Array(t + 1).fill(0),
        m = [];
      if (t < 0 || e.some(a)) return m;
      for (;;) {
        m.push(r.map((n, e) => i[e][n]));
        let o = t;
        for (; ++r[o] === e[o]; ) {
          if (0 === o) return n ? m.map(n) : m;
          r[o--] = 0;
        }
      }
    }
    var h = function(i, n) {
      return n < i ? -1 : n > i ? 1 : n >= i ? 0 : NaN;
    };
    function A(i, n) {
      let e,
        t = 0,
        r = 0,
        m = 0;
      if (void 0 === n)
        for (let n of i)
          null != n &&
            (n = +n) >= n &&
            (m += (e = n - r) * (n - (r += e / ++t)));
      else {
        let o = -1;
        for (let c of i)
          null != (c = n(c, ++o, i)) &&
            (c = +c) >= c &&
            (m += (e = c - r) * (c - (r += e / ++t)));
      }
      if (t > 1) return m / (t - 1);
    }
    function O(i, n) {
      const e = A(i, n);
      return e ? Math.sqrt(e) : e;
    }
    var p = function(i, n) {
        let e, t;
        if (void 0 === n)
          for (const n of i)
            null != n &&
              (void 0 === e
                ? n >= n && (e = t = n)
                : (e > n && (e = n), t < n && (t = n)));
        else {
          let r = -1;
          for (let m of i)
            null != (m = n(m, ++r, i)) &&
              (void 0 === e
                ? m >= m && (e = t = m)
                : (e > m && (e = m), t < m && (t = m)));
        }
        return [e, t];
      },
      S = function(i) {
        return i;
      };
    function M(i, ...n) {
      return N(i, S, S, n);
    }
    function E(i, ...n) {
      return N(i, Array.from, S, n);
    }
    function L(i, n, ...e) {
      return N(i, S, n, e);
    }
    function D(i, n, ...e) {
      return N(i, Array.from, n, e);
    }
    function N(i, n, e, t) {
      return (function i(r, m) {
        if (m >= t.length) return e(r);
        const o = new Map(),
          c = t[m++];
        let s = -1;
        for (const i of r) {
          const n = c(i, ++s, r),
            e = o.get(n);
          e ? e.push(i) : o.set(n, [i]);
        }
        for (const [n, e] of o) o.set(n, i(e, m));
        return n(o);
      })(i, 0);
    }
    var v = Array.prototype,
      C = v.slice,
      y = v.map,
      g = function(i) {
        return function() {
          return i;
        };
      },
      T = function(i, n, e) {
        (i = +i),
          (n = +n),
          (e =
            (r = arguments.length) < 2
              ? ((n = i), (i = 0), 1)
              : r < 3
              ? 1
              : +e);
        for (
          var t = -1,
            r = 0 | Math.max(0, Math.ceil((n - i) / e)),
            m = new Array(r);
          ++t < r;

        )
          m[t] = i + t * e;
        return m;
      },
      R = Math.sqrt(50),
      _ = Math.sqrt(10),
      V = Math.sqrt(2),
      B = function(i, n, e) {
        var t,
          r,
          m,
          o,
          c = -1;
        if (((e = +e), (i = +i) === (n = +n) && e > 0)) return [i];
        if (
          ((t = n < i) && ((r = i), (i = n), (n = r)),
          0 === (o = b(i, n, e)) || !isFinite(o))
        )
          return [];
        if (o > 0)
          for (
            i = Math.ceil(i / o),
              n = Math.floor(n / o),
              m = new Array((r = Math.ceil(n - i + 1)));
            ++c < r;

          )
            m[c] = (i + c) * o;
        else
          for (
            i = Math.floor(i * o),
              n = Math.ceil(n * o),
              m = new Array((r = Math.ceil(i - n + 1)));
            ++c < r;

          )
            m[c] = (i - c) / o;
        return t && m.reverse(), m;
      };
    function b(i, n, e) {
      var t = (n - i) / Math.max(0, e),
        r = Math.floor(Math.log(t) / Math.LN10),
        m = t / Math.pow(10, r);
      return r >= 0
        ? (m >= R ? 10 : m >= _ ? 5 : m >= V ? 2 : 1) * Math.pow(10, r)
        : -Math.pow(10, -r) / (m >= R ? 10 : m >= _ ? 5 : m >= V ? 2 : 1);
    }
    function Y(i, n, e) {
      var t = Math.abs(n - i) / Math.max(0, e),
        r = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)),
        m = t / r;
      return (
        m >= R ? (r *= 10) : m >= _ ? (r *= 5) : m >= V && (r *= 2),
        n < i ? -r : r
      );
    }
    var F = function(i) {
        return Math.ceil(Math.log(i.length) / Math.LN2) + 1;
      },
      P = function() {
        var i = S,
          n = p,
          e = F;
        function t(t) {
          Array.isArray(t) || (t = Array.from(t));
          var r,
            m,
            o = t.length,
            c = new Array(o);
          for (r = 0; r < o; ++r) c[r] = i(t[r], r, t);
          var d = n(c),
            u = d[0],
            a = d[1],
            f = e(c, u, a);
          Array.isArray(f) ||
            ((f = Y(u, a, f)), (f = T(Math.ceil(u / f) * f, a, f)));
          for (var l = f.length; f[0] <= u; ) f.shift(), --l;
          for (; f[l - 1] > a; ) f.pop(), --l;
          var h,
            A = new Array(l + 1);
          for (r = 0; r <= l; ++r)
            ((h = A[r] = []).x0 = r > 0 ? f[r - 1] : u),
              (h.x1 = r < l ? f[r] : a);
          for (r = 0; r < o; ++r)
            u <= (m = c[r]) && m <= a && A[s(f, m, 0, l)].push(t[r]);
          return A;
        }
        return (
          (t.value = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : g(n)), t)
              : i;
          }),
          (t.domain = function(i) {
            return arguments.length
              ? ((n = 'function' == typeof i ? i : g([i[0], i[1]])), t)
              : n;
          }),
          (t.thresholds = function(i) {
            return arguments.length
              ? ((e =
                  'function' == typeof i
                    ? i
                    : Array.isArray(i)
                    ? g(C.call(i))
                    : g(i)),
                t)
              : e;
          }),
          t
        );
      },
      G = function(i) {
        return null === i ? NaN : +i;
      };
    function U(i, n, e = G) {
      if ((t = i.length)) {
        if ((n = +n) <= 0 || t < 2) return +e(i[0], 0, i);
        if (n >= 1) return +e(i[t - 1], t - 1, i);
        var t,
          r = (t - 1) * n,
          m = Math.floor(r),
          o = +e(i[m], m, i);
        return o + (+e(i[m + 1], m + 1, i) - o) * (r - m);
      }
    }
    var I = function(i, n, e) {
        return (
          (i = y.call(i, G).sort(t)),
          Math.ceil(
            (e - n) /
              (2 * (U(i, 0.75) - U(i, 0.25)) * Math.pow(i.length, -1 / 3))
          )
        );
      },
      H = function(i, n, e) {
        return Math.ceil((e - n) / (3.5 * O(i) * Math.pow(i.length, -1 / 3)));
      };
    function x(i, n) {
      let e;
      if (void 0 === n)
        for (const n of i)
          null != n && (e < n || (void 0 === e && n >= n)) && (e = n);
      else {
        let t = -1;
        for (let r of i)
          null != (r = n(r, ++t, i)) &&
            (e < r || (void 0 === e && r >= r)) &&
            (e = r);
      }
      return e;
    }
    function W(i, n) {
      let e,
        t = -1,
        r = -1;
      if (void 0 === n)
        for (const n of i)
          ++r,
            null != n &&
              (e < n || (void 0 === e && n >= n)) &&
              ((e = n), (t = r));
      else
        for (let m of i)
          null != (m = n(m, ++r, i)) &&
            (e < m || (void 0 === e && m >= m)) &&
            ((e = m), (t = r));
      return t;
    }
    function w(i, n) {
      let e = 0,
        t = 0;
      if (void 0 === n)
        for (let n of i) null != n && (n = +n) >= n && (++e, (t += n));
      else {
        let r = -1;
        for (let m of i)
          null != (m = n(m, ++r, i)) && (m = +m) >= m && (++e, (t += m));
      }
      if (e) return t / e;
    }
    function X(i, n, e = 0, r = i.length - 1, m = t) {
      for (; r > e; ) {
        if (r - e > 600) {
          const t = r - e + 1,
            o = n - e + 1,
            c = Math.log(t),
            s = 0.5 * Math.exp((2 * c) / 3),
            d =
              0.5 * Math.sqrt((c * s * (t - s)) / t) * (o - t / 2 < 0 ? -1 : 1);
          X(
            i,
            n,
            Math.max(e, Math.floor(n - (o * s) / t + d)),
            Math.min(r, Math.floor(n + ((t - o) * s) / t + d)),
            m
          );
        }
        const t = i[n];
        let o = e,
          c = r;
        for (Q(i, e, n), m(i[r], t) > 0 && Q(i, e, r); o < c; ) {
          for (Q(i, o, c), ++o, --c; m(i[o], t) < 0; ) ++o;
          for (; m(i[c], t) > 0; ) --c;
        }
        0 === m(i[e], t) ? Q(i, e, c) : Q(i, ++c, r),
          c <= n && (e = c + 1),
          n <= c && (r = c - 1);
      }
      return i;
    }
    function Q(i, n, e) {
      const t = i[n];
      (i[n] = i[e]), (i[e] = t);
    }
    var K = function(i, n) {
      if (
        !(i = Float64Array.from(
          (function*(i, n) {
            if (void 0 === n)
              for (let n of i) null != n && (n = +n) >= n && (yield n);
            else {
              let e = -1;
              for (let t of i)
                null != (t = n(t, ++e, i)) && (t = +t) >= t && (yield t);
            }
          })(i, n)
        )).length
      )
        return;
      const e = i.length,
        t = e >> 1;
      return X(i, t - 1, 0), 0 == (1 & e) && X(i, t, t), U(i, 0.5);
    };
    function k(i) {
      return Array.from(
        (function*(i) {
          for (const n of i) yield* n;
        })(i)
      );
    }
    function J(i, n) {
      let e;
      if (void 0 === n)
        for (const n of i)
          null != n && (e > n || (void 0 === e && n >= n)) && (e = n);
      else {
        let t = -1;
        for (let r of i)
          null != (r = n(r, ++t, i)) &&
            (e > r || (void 0 === e && r >= r)) &&
            (e = r);
      }
      return e;
    }
    function z(i, n) {
      let e,
        t = -1,
        r = -1;
      if (void 0 === n)
        for (const n of i)
          ++r,
            null != n &&
              (e > n || (void 0 === e && n >= n)) &&
              ((e = n), (t = r));
      else
        for (let m of i)
          null != (m = n(m, ++r, i)) &&
            (e > m || (void 0 === e && m >= m)) &&
            ((e = m), (t = r));
      return t;
    }
    function q(
      i,
      n = function(i, n) {
        return [i, n];
      }
    ) {
      const e = [];
      let t,
        r = !1;
      for (const m of i) r && e.push(n(t, m)), (t = m), (r = !0);
      return e;
    }
    var j = function(i, n) {
      return Array.from(n, n => i[n]);
    };
    function Z(i, n = t) {
      let e,
        r = !1;
      if (1 === n.length) {
        let m;
        for (const o of i) {
          const i = n(o);
          (r ? t(i, m) < 0 : 0 === t(i, i)) && ((e = o), (m = i), (r = !0));
        }
      } else
        for (const t of i)
          (r ? n(t, e) < 0 : 0 === n(t, t)) && ((e = t), (r = !0));
      return e;
    }
    function $(i, n = t) {
      let e,
        r = -1,
        m = -1;
      if (1 === n.length)
        for (const o of i) {
          ++m;
          const i = n(o);
          (r < 0 ? 0 === t(i, i) : t(i, e) < 0) && ((e = i), (r = m));
        }
      else
        for (const t of i)
          ++m, (r < 0 ? 0 === n(t, t) : n(t, e) < 0) && ((e = t), (r = m));
      return r;
    }
    function ii(i, n) {
      const e = $(i, n);
      return e < 0 ? void 0 : e;
    }
    function ni(i, n = 0, e = i.length) {
      for (var t, r, m = e - (n = +n); m; )
        (r = (Math.random() * m--) | 0),
          (t = i[m + n]),
          (i[m + n] = i[r + n]),
          (i[r + n] = t);
      return i;
    }
    function ei(i, n) {
      let e = 0;
      if (void 0 === n) for (let n of i) (n = +n) && (e += n);
      else {
        let t = -1;
        for (let r of i) (r = +n(r, ++t, i)) && (e += r);
      }
      return e;
    }
    var ti = function(i) {
      if (!(r = i.length)) return [];
      for (var n = -1, e = J(i, ri), t = new Array(e); ++n < e; )
        for (var r, m = -1, o = (t[n] = new Array(r)); ++m < r; )
          o[m] = i[m][n];
      return t;
    };
    function ri(i) {
      return i.length;
    }
    var mi = function() {
      return ti(arguments);
    };
    e.d(n, 'bisect', function() {
      return s;
    }),
      e.d(n, 'bisectRight', function() {
        return o;
      }),
      e.d(n, 'bisectLeft', function() {
        return c;
      }),
      e.d(n, 'ascending', function() {
        return t;
      }),
      e.d(n, 'bisector', function() {
        return r;
      }),
      e.d(n, 'count', function() {
        return d;
      }),
      e.d(n, 'cross', function() {
        return l;
      }),
      e.d(n, 'descending', function() {
        return h;
      }),
      e.d(n, 'deviation', function() {
        return O;
      }),
      e.d(n, 'extent', function() {
        return p;
      }),
      e.d(n, 'group', function() {
        return M;
      }),
      e.d(n, 'groups', function() {
        return E;
      }),
      e.d(n, 'rollup', function() {
        return L;
      }),
      e.d(n, 'rollups', function() {
        return D;
      }),
      e.d(n, 'bin', function() {
        return P;
      }),
      e.d(n, 'histogram', function() {
        return P;
      }),
      e.d(n, 'thresholdFreedmanDiaconis', function() {
        return I;
      }),
      e.d(n, 'thresholdScott', function() {
        return H;
      }),
      e.d(n, 'thresholdSturges', function() {
        return F;
      }),
      e.d(n, 'max', function() {
        return x;
      }),
      e.d(n, 'maxIndex', function() {
        return W;
      }),
      e.d(n, 'mean', function() {
        return w;
      }),
      e.d(n, 'median', function() {
        return K;
      }),
      e.d(n, 'merge', function() {
        return k;
      }),
      e.d(n, 'min', function() {
        return J;
      }),
      e.d(n, 'minIndex', function() {
        return z;
      }),
      e.d(n, 'pairs', function() {
        return q;
      }),
      e.d(n, 'permute', function() {
        return j;
      }),
      e.d(n, 'quantile', function() {
        return U;
      }),
      e.d(n, 'quickselect', function() {
        return X;
      }),
      e.d(n, 'range', function() {
        return T;
      }),
      e.d(n, 'least', function() {
        return Z;
      }),
      e.d(n, 'leastIndex', function() {
        return $;
      }),
      e.d(n, 'scan', function() {
        return ii;
      }),
      e.d(n, 'shuffle', function() {
        return ni;
      }),
      e.d(n, 'sum', function() {
        return ei;
      }),
      e.d(n, 'ticks', function() {
        return B;
      }),
      e.d(n, 'tickIncrement', function() {
        return b;
      }),
      e.d(n, 'tickStep', function() {
        return Y;
      }),
      e.d(n, 'transpose', function() {
        return ti;
      }),
      e.d(n, 'variance', function() {
        return A;
      }),
      e.d(n, 'zip', function() {
        return mi;
      });
  },
  function(i, n, e) {
    'use strict';
    Object.defineProperty(n, '__esModule', {value: !0});
    const t = e(8),
      r = Object.assign({}, e(5), e(2), e(3), e(6)),
      m = e(13),
      o =
        (e(14),
        (i, n) =>
          void 0 !== i.style[n].value && 'object' == typeof i.style[n].value
            ? i.style[n].value.color
            : void 0 !== i.style[n].value
            ? i.style[n].value
            : i.style[n].defaultValue),
      c = i => {
        const n = t.getHeight(),
          e = t.getWidth();
        if (n < 0 || e < 0)
          return void m.displayError(m.SVG_TOO_SMALL, m.C_SVG_TOO_SMALL);
        r.select('body')
          .selectAll('svg')
          .remove();
        var c = r
          .select('body')
          .append('svg')
          .attr('width', e)
          .attr('height', n);
        const s = Math.floor(Math.min(e / 2, n / 2)),
          d = r
            .scaleOrdinal(
              (i => {
                switch (i) {
                  case 'schemeCategory10':
                    return r.schemeCategory10;
                  case 'schemeAccent':
                    return r.schemeAccent;
                  case 'schemePaired':
                    return r.schemePaired;
                  case 'schemePastel1':
                    return r.schemePastel1;
                  case 'schemePastel2':
                    return r.schemePastel2;
                  case 'schemeSet1':
                    return r.schemeSet1;
                  case 'schemeSet2':
                    return r.schemeSet2;
                  case 'schemeSet3':
                    return r.schemeSet3;
                  default:
                    return r.schemeCategory10;
                }
              })(o(i, 'arcColors'))
            )
            .domain(i.tables.DEFAULT.map(i => i.dimension[0])),
          u = r.hierarchy({
            children: m.buildHierarchy(i.tables.DEFAULT, i.fields),
          });
        u.sum(i => i.value), r.partition().size([2 * Math.PI, s])(u);
        const a = r.arc();
        c.append('g')
          .attr('transform', `translate(${e / 2}, ${n / 2})`)
          .selectAll('path')
          .data(u.descendants().slice(1))
          .enter()
          .append('path')
          .attr('d', i =>
            a({
              innerRadius: i.y0,
              outerRadius: i.y1,
              startAngle: i.x0,
              endAngle: i.x1,
            })
          )
          .attr('fill', i =>
            (i =>
              1 === i.depth
                ? d(i.data.name)
                : 2 === i.depth
                ? d(i.parent.data.name)
                : 3 === i.depth
                ? d(i.parent.parent.data.name)
                : 4 === i.depth
                ? d(i.parent.parent.parent.data.name)
                : void 0)(i)
          )
          .attr('stroke', o(i, 'arcOutline'))
          .attr('stroke-opacity', o(i, 'arcOpacity'))
          .append('title')
          .text(n =>
            ((i, n) => {
              var e = n,
                t = [];
              for (
                void 0 !== e.value &&
                t.unshift(`value: ${e.value.toLocaleString('en-US')}`);
                null !== e.parent;

              ) {
                let n = i.dimension[e.depth - 1].name;
                t.unshift(`${n}: ${e.data.name}`), (e = e.parent);
              }
              return t.join('\n');
            })(i.fields, n)
          );
      },
      s = i => {
        r.select('#error').remove();
        try {
          c(i);
        } catch (i) {
          m.displayError(m.GENERAL_ERROR), console.log(i);
        }
      };
    t.subscribeToData(s, {transform: t.objectTransform});
  },
  function(i, n, e) {
    'use strict';
    var t =
      (this && this.__assign) ||
      function() {
        return (t =
          Object.assign ||
          function(i) {
            for (var n, e = 1, t = arguments.length; e < t; e++)
              for (var r in (n = arguments[e]))
                Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
            return i;
          }).apply(this, arguments);
      };
    Object.defineProperty(n, '__esModule', {value: !0});
    /*!
  Copyright 2018 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
    var r = e(9),
      m = e(4);
    !(function(i) {
      for (var e in i) n.hasOwnProperty(e) || (n[e] = i[e]);
    })(e(4)),
      (n.getWidth = function() {
        return document.body.clientWidth;
      }),
      (n.getHeight = function() {
        return document.documentElement.clientHeight;
      }),
      (n.getComponentId = function() {
        var i = r(window.location.href, !0).query;
        if (i.dscId) return i.dscId;
        throw new Error(
          'dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new'
        );
      }),
      (n.parseImage = function(i) {
        var n = i.split('  '),
          e = n[0],
          t = n[1];
        return {altText: n[2], originalUrl: e, proxiedUrl: t};
      });
    var o = function(i) {
        return (
          i.type === m.ConfigDataElementType.DIMENSION ||
          i.type === m.ConfigDataElementType.METRIC
        );
      },
      c = function(i) {
        return i === m.ConfigDataElementType.DIMENSION ? -1 : 1;
      },
      s = function(i) {
        var n = [];
        i.config.data.forEach(function(i) {
          i.elements.forEach(function(i) {
            n.push(i);
          });
        });
        var e,
          t = n.filter(o),
          r =
            ((e = function(i, n) {
              return c(i.type) - c(n.type);
            }),
            t
              .map(function(i, n) {
                return {item: i, index: n};
              })
              .sort(function(i, n) {
                return e(i.item, n.item) || i.index - n.index;
              })
              .map(function(i) {
                return i.item;
              })),
          m = [];
        return (
          r.forEach(function(i) {
            i.value.forEach(function() {
              return m.push(i.id);
            });
          }),
          m
        );
      },
      d = function(i) {
        var n,
          e = s(i),
          t = (((n = {})[m.TableType.DEFAULT] = []), n);
        return (
          i.dataResponse.tables.forEach(function(i) {
            var n = i.rows.map(
              (function(i) {
                return function(n) {
                  var e,
                    t,
                    r = {};
                  return (
                    ((e = n),
                    (t = i),
                    e.length < t.length
                      ? e.map(function(i, n) {
                          return [i, t[n]];
                        })
                      : t.map(function(i, n) {
                          return [e[n], i];
                        })).forEach(function(i) {
                      var n = i[0],
                        e = i[1];
                      void 0 === r[e] && (r[e] = []), r[e].push(n);
                    }, {}),
                    r
                  );
                };
              })(e)
            );
            t[i.id] = n;
          }),
          t
        );
      },
      u = function(i) {
        var e,
          r = n.fieldsByConfigId(i),
          o = s(i),
          c = {},
          d = o.map(function(i) {
            void 0 === c[i] ? (c[i] = 0) : c[i]++;
            var n = c[i],
              e = r[i][n];
            return t({}, e, {configId: i});
          }),
          u = (((e = {})[m.TableType.DEFAULT] = {headers: [], rows: []}), e);
        return (
          i.dataResponse.tables.forEach(function(i) {
            u[i.id] = {headers: d, rows: i.rows};
          }),
          u
        );
      };
    n.fieldsByConfigId = function(i) {
      var n = (function(i) {
          return i.fields.reduce(function(i, n) {
            return (i[n.id] = n), i;
          }, {});
        })(i),
        e = {};
      return (
        i.config.data.forEach(function(i) {
          i.elements.forEach(function(i) {
            e[i.id] = i.value.map(function(i) {
              return n[i];
            });
          });
        }),
        e
      );
    };
    var a = function(i) {
        var n = {};
        return (
          (i.config.style || []).forEach(function(i) {
            i.elements.forEach(function(i) {
              if (void 0 !== n[i.id])
                throw new Error(
                  "styleIds must be unique. Your styleId: '" +
                    i.id +
                    "' is used more than once."
                );
              n[i.id] = {value: i.value, defaultValue: i.defaultValue};
            });
          }, {}),
          n
        );
      },
      f = function(i) {
        return i.config.themeStyle;
      },
      l = function(i) {
        switch (i) {
          case m.DSInteractionType.FILTER:
            return m.InteractionType.FILTER;
        }
      },
      h = function(i) {
        var n = i.config.interactions;
        return void 0 === n
          ? {}
          : n.reduce(function(i, n) {
              var e = n.supportedActions.map(l),
                t = {type: l(n.value.type), data: n.value.data};
              return (i[n.id] = {value: t, supportedActions: e}), i;
            }, {});
      };
    (n.tableTransform = function(i) {
      return {
        tables: u(i),
        fields: n.fieldsByConfigId(i),
        style: a(i),
        theme: f(i),
        interactions: h(i),
      };
    }),
      (n.objectTransform = function(i) {
        return {
          tables: d(i),
          fields: n.fieldsByConfigId(i),
          style: a(i),
          theme: f(i),
          interactions: h(i),
        };
      }),
      (n.subscribeToData = function(i, e) {
        if (
          e.transform === n.tableTransform ||
          e.transform === n.objectTransform
        ) {
          var t = function(n) {
            n.data.type === m.MessageType.RENDER
              ? i(e.transform(n.data))
              : console.error(
                  'MessageType: ' +
                    n.data.type +
                    ' is not supported by this version of the library.'
                );
          };
          window.addEventListener('message', t);
          var r = {
            componentId: n.getComponentId(),
            type: m.ToDSMessageType.VIZ_READY,
          };
          return (
            window.parent.postMessage(r, '*'),
            function() {
              return window.removeEventListener('message', t);
            }
          );
        }
        throw new Error('Only the built in transform functions are supported.');
      }),
      (n.sendInteraction = function(i, e, t) {
        var r = n.getComponentId(),
          o = {
            type: m.ToDSMessageType.INTERACTION,
            id: i,
            data: t,
            componentId: r,
          };
        window.parent.postMessage(o, '*');
      }),
      (n.clearInteraction = function(i, e) {
        n.sendInteraction(i, e, void 0);
      });
  },
  function(i, n, e) {
    'use strict';
    (function(n) {
      var t = e(11),
        r = e(12),
        m = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        o = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
        c = new RegExp(
          '^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+'
        );
      function s(i) {
        return (i || '').toString().replace(c, '');
      }
      var d = [
          ['#', 'hash'],
          ['?', 'query'],
          function(i) {
            return i.replace('\\', '/');
          },
          ['/', 'pathname'],
          ['@', 'auth', 1],
          [NaN, 'host', void 0, 1, 1],
          [/:(\d+)$/, 'port', void 0, 1],
          [NaN, 'hostname', void 0, 1, 1],
        ],
        u = {hash: 1, query: 1};
      function a(i) {
        var e,
          t =
            ('undefined' != typeof window
              ? window
              : void 0 !== n
              ? n
              : 'undefined' != typeof self
              ? self
              : {}
            ).location || {},
          r = {},
          o = typeof (i = i || t);
        if ('blob:' === i.protocol) r = new l(unescape(i.pathname), {});
        else if ('string' === o) for (e in ((r = new l(i, {})), u)) delete r[e];
        else if ('object' === o) {
          for (e in i) e in u || (r[e] = i[e]);
          void 0 === r.slashes && (r.slashes = m.test(i.href));
        }
        return r;
      }
      function f(i) {
        i = s(i);
        var n = o.exec(i);
        return {
          protocol: n[1] ? n[1].toLowerCase() : '',
          slashes: !!n[2],
          rest: n[3],
        };
      }
      function l(i, n, e) {
        if (((i = s(i)), !(this instanceof l))) return new l(i, n, e);
        var m,
          o,
          c,
          u,
          h,
          A,
          O = d.slice(),
          p = typeof n,
          S = this,
          M = 0;
        for (
          'object' !== p && 'string' !== p && ((e = n), (n = null)),
            e && 'function' != typeof e && (e = r.parse),
            n = a(n),
            m = !(o = f(i || '')).protocol && !o.slashes,
            S.slashes = o.slashes || (m && n.slashes),
            S.protocol = o.protocol || n.protocol || '',
            i = o.rest,
            o.slashes || (O[3] = [/(.*)/, 'pathname']);
          M < O.length;
          M++
        )
          'function' != typeof (u = O[M])
            ? ((c = u[0]),
              (A = u[1]),
              c != c
                ? (S[A] = i)
                : 'string' == typeof c
                ? ~(h = i.indexOf(c)) &&
                  ('number' == typeof u[2]
                    ? ((S[A] = i.slice(0, h)), (i = i.slice(h + u[2])))
                    : ((S[A] = i.slice(h)), (i = i.slice(0, h))))
                : (h = c.exec(i)) && ((S[A] = h[1]), (i = i.slice(0, h.index))),
              (S[A] = S[A] || (m && u[3] && n[A]) || ''),
              u[4] && (S[A] = S[A].toLowerCase()))
            : (i = u(i));
        e && (S.query = e(S.query)),
          m &&
            n.slashes &&
            '/' !== S.pathname.charAt(0) &&
            ('' !== S.pathname || '' !== n.pathname) &&
            (S.pathname = (function(i, n) {
              if ('' === i) return n;
              for (
                var e = (n || '/')
                    .split('/')
                    .slice(0, -1)
                    .concat(i.split('/')),
                  t = e.length,
                  r = e[t - 1],
                  m = !1,
                  o = 0;
                t--;

              )
                '.' === e[t]
                  ? e.splice(t, 1)
                  : '..' === e[t]
                  ? (e.splice(t, 1), o++)
                  : o && (0 === t && (m = !0), e.splice(t, 1), o--);
              return (
                m && e.unshift(''),
                ('.' !== r && '..' !== r) || e.push(''),
                e.join('/')
              );
            })(S.pathname, n.pathname)),
          t(S.port, S.protocol) || ((S.host = S.hostname), (S.port = '')),
          (S.username = S.password = ''),
          S.auth &&
            ((u = S.auth.split(':')),
            (S.username = u[0] || ''),
            (S.password = u[1] || '')),
          (S.origin =
            S.protocol && S.host && 'file:' !== S.protocol
              ? S.protocol + '//' + S.host
              : 'null'),
          (S.href = S.toString());
      }
      (l.prototype = {
        set: function(i, n, e) {
          var m = this;
          switch (i) {
            case 'query':
              'string' == typeof n && n.length && (n = (e || r.parse)(n)),
                (m[i] = n);
              break;
            case 'port':
              (m[i] = n),
                t(n, m.protocol)
                  ? n && (m.host = m.hostname + ':' + n)
                  : ((m.host = m.hostname), (m[i] = ''));
              break;
            case 'hostname':
              (m[i] = n), m.port && (n += ':' + m.port), (m.host = n);
              break;
            case 'host':
              (m[i] = n),
                /:\d+$/.test(n)
                  ? ((n = n.split(':')),
                    (m.port = n.pop()),
                    (m.hostname = n.join(':')))
                  : ((m.hostname = n), (m.port = ''));
              break;
            case 'protocol':
              (m.protocol = n.toLowerCase()), (m.slashes = !e);
              break;
            case 'pathname':
            case 'hash':
              if (n) {
                var o = 'pathname' === i ? '/' : '#';
                m[i] = n.charAt(0) !== o ? o + n : n;
              } else m[i] = n;
              break;
            default:
              m[i] = n;
          }
          for (var c = 0; c < d.length; c++) {
            var s = d[c];
            s[4] && (m[s[1]] = m[s[1]].toLowerCase());
          }
          return (
            (m.origin =
              m.protocol && m.host && 'file:' !== m.protocol
                ? m.protocol + '//' + m.host
                : 'null'),
            (m.href = m.toString()),
            m
          );
        },
        toString: function(i) {
          (i && 'function' == typeof i) || (i = r.stringify);
          var n,
            e = this,
            t = e.protocol;
          t && ':' !== t.charAt(t.length - 1) && (t += ':');
          var m = t + (e.slashes ? '//' : '');
          return (
            e.username &&
              ((m += e.username),
              e.password && (m += ':' + e.password),
              (m += '@')),
            (m += e.host + e.pathname),
            (n = 'object' == typeof e.query ? i(e.query) : e.query) &&
              (m += '?' !== n.charAt(0) ? '?' + n : n),
            e.hash && (m += e.hash),
            m
          );
        },
      }),
        (l.extractProtocol = f),
        (l.location = a),
        (l.trimLeft = s),
        (l.qs = r),
        (i.exports = l);
    }.call(this, e(10)));
  },
  function(i, n) {
    var e;
    e = (function() {
      return this;
    })();
    try {
      e = e || new Function('return this')();
    } catch (i) {
      'object' == typeof window && (e = window);
    }
    i.exports = e;
  },
  function(i, n, e) {
    'use strict';
    i.exports = function(i, n) {
      if (((n = n.split(':')[0]), !(i = +i))) return !1;
      switch (n) {
        case 'http':
        case 'ws':
          return 80 !== i;
        case 'https':
        case 'wss':
          return 443 !== i;
        case 'ftp':
          return 21 !== i;
        case 'gopher':
          return 70 !== i;
        case 'file':
          return !1;
      }
      return 0 !== i;
    };
  },
  function(i, n, e) {
    'use strict';
    var t,
      r = Object.prototype.hasOwnProperty;
    function m(i) {
      try {
        return decodeURIComponent(i.replace(/\+/g, ' '));
      } catch (i) {
        return null;
      }
    }
    (n.stringify = function(i, n) {
      n = n || '';
      var e,
        m,
        o = [];
      for (m in ('string' != typeof n && (n = '?'), i))
        if (r.call(i, m)) {
          if (
            ((e = i[m]) || (null !== e && e !== t && !isNaN(e)) || (e = ''),
            (m = encodeURIComponent(m)),
            (e = encodeURIComponent(e)),
            null === m || null === e)
          )
            continue;
          o.push(m + '=' + e);
        }
      return o.length ? n + o.join('&') : '';
    }),
      (n.parse = function(i) {
        for (var n, e = /([^=?&]+)=?([^&]*)/g, t = {}; (n = e.exec(i)); ) {
          var r = m(n[1]),
            o = m(n[2]);
          null === r || null === o || r in t || (t[r] = o);
        }
        return t;
      });
  },
  function(i, n, e) {
    'use strict';
    Object.defineProperty(n, '__esModule', {value: !0});
    const t = Object.assign({}, e(5), e(2), e(3), e(6));
    (n.buildHierarchy = (i, e, r = 0) => {
      const m = i[0].dimension.length;
      if (r < m - 1) {
        const m = t.group(i, i => i.dimension[r]);
        return Array.from(m.keys()).map(i => ({
          name: i,
          dimId: e.dimension[r].id,
          children: n.buildHierarchy(m.get(i), e, r + 1),
        }));
      }
      {
        const n = t.group(i, i => i.dimension[r]);
        return Array.from(n.keys()).map(i => ({
          name: i,
          dimId: e.dimension[r].id,
          value: n.get(i).reduce((i, n) => i + n.metric[0], 0),
        }));
      }
    }),
      (n.GENERAL_ERROR =
        '\n<b>Error.</b> For more information, check out the source code or file an issue at:\n<code>\nhttps://github.com/googledatastudio/experimental-visualizations/viz/sunburst\n</code>\n'),
      (n.SVG_TOO_SMALL =
        '\n<b>Error.</b> The component is smaller than the visualization margins. Try making the component larger.\n'),
      (n.C_SVG_TOO_SMALL = 'Error. Try making the component larger.');
    n.displayError = (
      i,
      n = 'Error. For more information, check out the source code or file an issue at \n https://github.com/googledatastudio/experimental-visualizations/viz/sunburst'
    ) => {
      document.body.innerHTML = '';
      let e = document.createElement('div');
      (e.id = 'error'),
        (e.innerHTML = i),
        document.body.appendChild(e),
        console.log(n);
    };
  },
  function(i, n, e) {
    'use strict';
    Object.defineProperty(n, '__esModule', {value: !0}),
      (n.message = {
        tables: {
          DEFAULT: [
            {dimension: ['2', 'DL', 'ATL'], metric: ['125632']},
            {dimension: ['1', 'DL', 'ATL'], metric: ['115899']},
            {dimension: ['3', 'DL', 'ATL'], metric: ['106117']},
            {dimension: ['2', 'AA', 'DFW'], metric: ['71138']},
            {dimension: ['1', 'AA', 'DFW'], metric: ['67702']},
            {dimension: ['3', 'AA', 'DFW'], metric: ['61807']},
            {dimension: ['4', 'DL', 'ATL'], metric: ['59518']},
            {dimension: ['2', 'AA', 'CLT'], metric: ['49216']},
            {dimension: ['1', 'AA', 'CLT'], metric: ['47097']},
            {dimension: ['2', 'WN', 'MDW'], metric: ['42989']},
            {dimension: ['3', 'AA', 'CLT'], metric: ['40870']},
            {dimension: ['2', 'OO', 'ORD'], metric: ['40502']},
            {dimension: ['2', 'WN', 'BWI'], metric: ['37996']},
            {dimension: ['2', 'WN', 'LAS'], metric: ['37963']},
            {dimension: ['2', 'UA', 'ORD'], metric: ['37820']},
            {dimension: ['1', 'WN', 'MDW'], metric: ['37453']},
            {dimension: ['3', 'WN', 'MDW'], metric: ['37190']},
            {dimension: ['3', 'OO', 'ORD'], metric: ['35882']},
            {dimension: ['3', 'UA', 'ORD'], metric: ['35822']},
            {dimension: ['1', 'WN', 'LAS'], metric: ['35656']},
            {dimension: ['2', 'WN', 'DEN'], metric: ['34935']},
            {dimension: ['4', 'AA', 'DFW'], metric: ['34768']},
            {dimension: ['2', 'DL', 'MSP'], metric: ['34059']},
            {dimension: ['1', 'WN', 'BWI'], metric: ['33510']},
            {dimension: ['1', 'OO', 'ORD'], metric: ['32462']},
            {dimension: ['3', 'DL', 'MSP'], metric: ['32328']},
            {dimension: ['1', 'WN', 'DEN'], metric: ['32196']},
            {dimension: ['2', 'AA', 'ORD'], metric: ['31843']},
            {dimension: ['3', 'WN', 'BWI'], metric: ['31819']},
            {dimension: ['3', 'WN', 'LAS'], metric: ['31817']},
            {dimension: ['2', 'AS', 'SEA'], metric: ['31808']},
            {dimension: ['2', 'WN', 'DAL'], metric: ['31727']},
            {dimension: ['2', 'WN', 'PHX'], metric: ['31586']},
            {dimension: ['2', 'UA', 'DEN'], metric: ['31330']},
            {dimension: ['1', 'WN', 'DAL'], metric: ['31205']},
            {dimension: ['1', 'UA', 'ORD'], metric: ['31071']},
            {dimension: ['1', 'WN', 'PHX'], metric: ['30452']},
            {dimension: ['3', 'WN', 'DEN'], metric: ['30304']},
            {dimension: ['2', 'UA', 'IAH'], metric: ['30290']},
            {dimension: ['2', 'UA', 'SFO'], metric: ['29870']},
            {dimension: ['1', 'AA', 'ORD'], metric: ['29751']},
            {dimension: ['2', 'DL', 'DTW'], metric: ['29042']},
            {dimension: ['2', 'UA', 'EWR'], metric: ['28977']},
            {dimension: ['1', 'UA', 'IAH'], metric: ['28954']},
            {dimension: ['1', 'UA', 'DEN'], metric: ['28907']},
            {dimension: ['2', 'AA', 'PHX'], metric: ['28860']},
            {dimension: ['3', 'AA', 'ORD'], metric: ['28652']},
            {dimension: ['1', 'AA', 'PHX'], metric: ['28441']},
            {dimension: ['3', 'UA', 'SFO'], metric: ['28371']},
            {dimension: ['3', 'UA', 'DEN'], metric: ['28338']},
            {dimension: ['1', 'DL', 'MSP'], metric: ['28329']},
            {dimension: ['3', 'AS', 'SEA'], metric: ['27744']},
            {dimension: ['1', 'AS', 'SEA'], metric: ['27469']},
            {dimension: ['1', 'UA', 'EWR'], metric: ['26890']},
            {dimension: ['3', 'WN', 'DAL'], metric: ['26737']},
            {dimension: ['2', 'WN', 'HOU'], metric: ['26227']},
            {dimension: ['1', 'AA', 'MIA'], metric: ['26088']},
            {dimension: ['2', 'OH', 'CLT'], metric: ['25836']},
            {dimension: ['2', 'AA', 'MIA'], metric: ['25825']},
            {dimension: ['2', 'B6', 'BOS'], metric: ['25808']},
            {dimension: ['1', 'DL', 'DTW'], metric: ['25747']},
            {dimension: ['3', 'WN', 'PHX'], metric: ['25587']},
            {dimension: ['3', 'UA', 'IAH'], metric: ['25544']},
            {dimension: ['1', 'UA', 'SFO'], metric: ['25147']},
            {dimension: ['1', 'WN', 'HOU'], metric: ['25001']},
            {dimension: ['3', 'DL', 'DTW'], metric: ['24819']},
            {dimension: ['4', 'AA', 'CLT'], metric: ['23921']},
            {dimension: ['3', 'UA', 'EWR'], metric: ['23814']},
            {dimension: ['3', 'AA', 'PHX'], metric: ['23787']},
            {dimension: ['1', 'B6', 'BOS'], metric: ['23732']},
            {dimension: ['2', 'AA', 'PHL'], metric: ['23538']},
            {dimension: ['1', 'OH', 'CLT'], metric: ['23322']},
            {dimension: ['2', 'OO', 'DEN'], metric: ['22926']},
            {dimension: ['2', 'WN', 'MCO'], metric: ['22625']},
            {dimension: ['2', 'DL', 'SLC'], metric: ['22407']},
            {dimension: ['3', 'WN', 'HOU'], metric: ['22128']},
            {dimension: ['2', 'OO', 'MSP'], metric: ['22128']},
            {dimension: ['1', 'AA', 'PHL'], metric: ['21978']},
            {dimension: ['1', 'EV', 'IAH'], metric: ['21913']},
            {dimension: ['2', 'OO', 'SLC'], metric: ['21856']},
            {dimension: ['2', 'B6', 'JFK'], metric: ['21764']},
            {dimension: ['2', 'WN', 'LAX'], metric: ['21591']},
            {dimension: ['1', 'WN', 'MCO'], metric: ['21520']},
            {dimension: ['3', 'B6', 'BOS'], metric: ['21485']},
            {dimension: ['3', 'AA', 'MIA'], metric: ['21285']},
            {dimension: ['2', 'WN', 'ATL'], metric: ['21280']},
            {dimension: ['3', 'OO', 'DEN'], metric: ['21190']},
            {dimension: ['1', 'OO', 'SLC'], metric: ['21168']},
            {dimension: ['1', 'DL', 'SLC'], metric: ['20967']},
            {dimension: ['1', 'WN', 'ATL'], metric: ['20889']},
            {dimension: ['1', 'WN', 'LAX'], metric: ['20737']},
            {dimension: ['4', 'WN', 'MDW'], metric: ['20627']},
            {dimension: ['1', 'B6', 'JFK'], metric: ['20544']},
            {dimension: ['3', 'AA', 'PHL'], metric: ['20410']},
            {dimension: ['2', 'EV', 'IAH'], metric: ['20356']},
            {dimension: ['1', 'OO', 'DEN'], metric: ['20337']},
            {dimension: ['2', 'AA', 'LAX'], metric: ['20048']},
            {dimension: ['2', 'WN', 'OAK'], metric: ['20009']},
            {dimension: ['3', 'DL', 'SLC'], metric: ['19981']},
            {dimension: ['1', 'OO', 'SFO'], metric: ['19459']},
            {dimension: ['2', 'WN', 'STL'], metric: ['19453']},
            {dimension: ['4', 'OO', 'ORD'], metric: ['19348']},
            {dimension: ['2', 'OO', 'DTW'], metric: ['19238']},
            {dimension: ['3', 'OO', 'SLC'], metric: ['18939']},
            {dimension: ['3', 'B6', 'JFK'], metric: ['18901']},
            {dimension: ['2', 'WN', 'SAN'], metric: ['18857']},
            {dimension: ['1', 'WN', 'OAK'], metric: ['18712']},
            {dimension: ['1', 'OO', 'MSP'], metric: ['18601']},
            {dimension: ['1', 'AA', 'LAX'], metric: ['18428']},
            {dimension: ['4', 'UA', 'ORD'], metric: ['18423']},
            {dimension: ['4', 'WN', 'BWI'], metric: ['18226']},
            {dimension: ['3', 'WN', 'LAX'], metric: ['18218']},
            {dimension: ['3', 'OO', 'MSP'], metric: ['18211']},
            {dimension: ['3', 'OH', 'CLT'], metric: ['18200']},
            {dimension: ['4', 'WN', 'LAS'], metric: ['17828']},
            {dimension: ['2', 'DL', 'LAX'], metric: ['17683']},
            {dimension: ['3', 'WN', 'ATL'], metric: ['17662']},
            {dimension: ['1', 'WN', 'STL'], metric: ['17626']},
            {dimension: ['2', 'WN', 'BNA'], metric: ['17602']},
            {dimension: ['2', 'HA', 'HNL'], metric: ['17551']},
            {dimension: ['3', 'WN', 'OAK'], metric: ['17409']},
            {dimension: ['3', 'AA', 'LAX'], metric: ['17408']},
            {dimension: ['2', 'OO', 'SFO'], metric: ['17310']},
            {dimension: ['1', 'WN', 'SAN'], metric: ['17301']},
            {dimension: ['3', 'WN', 'MCO'], metric: ['16923']},
            {dimension: ['4', 'WN', 'DEN'], metric: ['16907']},
            {dimension: ['1', 'OO', 'LAX'], metric: ['16900']},
            {dimension: ['1', 'OO', 'DTW'], metric: ['16876']},
            {dimension: ['3', 'OO', 'DTW'], metric: ['16776']},
            {dimension: ['3', 'EV', 'IAH'], metric: ['16616']},
            {dimension: ['4', 'DL', 'MSP'], metric: ['16532']},
            {dimension: ['3', 'WN', 'STL'], metric: ['16361']},
            {dimension: ['1', 'HA', 'HNL'], metric: ['16257']},
            {dimension: ['3', 'WN', 'SAN'], metric: ['16243']},
            {dimension: ['4', 'AA', 'ORD'], metric: ['16034']},
            {dimension: ['4', 'WN', 'DAL'], metric: ['15818']},
            {dimension: ['1', 'WN', 'BNA'], metric: ['15721']},
            {dimension: ['4', 'UA', 'SFO'], metric: ['15613']},
            {dimension: ['2', 'DL', 'JFK'], metric: ['15608']},
            {dimension: ['3', 'OO', 'SFO'], metric: ['15437']},
            {dimension: ['2', 'OO', 'LAX'], metric: ['15362']},
            {dimension: ['3', 'DL', 'LAX'], metric: ['15359']},
            {dimension: ['2', 'WN', 'TPA'], metric: ['15239']},
            {dimension: ['1', 'EV', 'ATL'], metric: ['15217']},
            {dimension: ['3', 'HA', 'HNL'], metric: ['15204']},
            {dimension: ['4', 'UA', 'IAH'], metric: ['15153']},
            {dimension: ['1', 'WN', 'TPA'], metric: ['14915']},
            {dimension: ['4', 'UA', 'DEN'], metric: ['14846']},
            {dimension: ['4', 'WN', 'PHX'], metric: ['14824']},
            {dimension: ['3', 'WN', 'BNA'], metric: ['14751']},
            {dimension: ['2', 'UA', 'LAX'], metric: ['14707']},
            {dimension: ['1', 'DL', 'LAX'], metric: ['14606']},
            {dimension: ['1', 'DL', 'JFK'], metric: ['14194']},
            {dimension: ['2', 'MQ', 'ORD'], metric: ['14142']},
            {dimension: ['4', 'AS', 'SEA'], metric: ['14121']},
            {dimension: ['2', 'AA', 'BOS'], metric: ['14074']},
            {dimension: ['4', 'UA', 'EWR'], metric: ['14040']},
            {dimension: ['4', 'DL', 'DTW'], metric: ['13953']},
            {dimension: ['2', 'WN', 'SJC'], metric: ['13950']},
            {dimension: ['1', 'MQ', 'ORD'], metric: ['13739']},
            {dimension: ['2', 'MQ', 'DFW'], metric: ['13731']},
            {dimension: ['4', 'AA', 'PHX'], metric: ['13645']},
            {dimension: ['2', 'EV', 'ATL'], metric: ['13622']},
            {dimension: ['3', 'OO', 'LAX'], metric: ['13551']},
            {dimension: ['2', 'WN', 'MCI'], metric: ['13269']},
            {dimension: ['1', 'MQ', 'DFW'], metric: ['13157']},
            {dimension: ['2', 'WN', 'SMF'], metric: ['13133']},
            {dimension: ['4', 'WN', 'HOU'], metric: ['12949']},
            {dimension: ['3', 'DL', 'JFK'], metric: ['12946']},
            {dimension: ['1', 'B6', 'FLL'], metric: ['12797']},
            {dimension: ['2', 'UA', 'IAD'], metric: ['12704']},
            {dimension: ['2', 'AA', 'DCA'], metric: ['12701']},
            {dimension: ['3', 'UA', 'LAX'], metric: ['12696']},
            {dimension: ['4', 'AA', 'MIA'], metric: ['12520']},
            {dimension: ['3', 'DL', 'SEA'], metric: ['12516']},
            {dimension: ['1', 'WN', 'SJC'], metric: ['12513']},
            {dimension: ['1', 'WN', 'FLL'], metric: ['12471']},
            {dimension: ['2', 'DL', 'LGA'], metric: ['12457']},
            {dimension: ['1', 'UA', 'LAX'], metric: ['12438']},
            {dimension: ['1', 'AA', 'BOS'], metric: ['12404']},
            {dimension: ['2', 'B6', 'FLL'], metric: ['12404']},
            {dimension: ['1', 'AA', 'DCA'], metric: ['12377']},
            {dimension: ['4', 'B6', 'BOS'], metric: ['12148']},
            {dimension: ['1', 'WN', 'MCI'], metric: ['12130']},
            {dimension: ['2', 'WN', 'FLL'], metric: ['12054']},
            {dimension: ['1', 'WN', 'SMF'], metric: ['12050']},
            {dimension: ['3', 'WN', 'SJC'], metric: ['12001']},
            {dimension: ['2', 'DL', 'SEA'], metric: ['11960']},
            {dimension: ['1', 'DL', 'LGA'], metric: ['11872']},
            {dimension: ['3', 'AA', 'BOS'], metric: ['11822']},
            {dimension: ['3', 'WN', 'SMF'], metric: ['11638']},
            {dimension: ['2', 'WN', 'AUS'], metric: ['11600']},
            {dimension: ['2', 'F9', 'DEN'], metric: ['11367']},
            {dimension: ['3', 'UA', 'IAD'], metric: ['11350']},
            {dimension: ['4', 'OO', 'DEN'], metric: ['11279']},
            {dimension: ['3', 'WN', 'TPA'], metric: ['11273']},
            {dimension: ['3', 'WN', 'MCI'], metric: ['11183']},
            {dimension: ['2', 'AA', 'LGA'], metric: ['11159']},
            {dimension: ['2', 'EV', 'EWR'], metric: ['10989']},
            {dimension: ['1', 'EV', 'EWR'], metric: ['10886']},
            {dimension: ['3', 'EV', 'ATL'], metric: ['10859']},
            {dimension: ['4', 'OO', 'SLC'], metric: ['10826']},
            {dimension: ['1', 'AA', 'LGA'], metric: ['10773']},
            {dimension: ['1', 'VX', 'SFO'], metric: ['10701']},
            {dimension: ['4', 'WN', 'LAX'], metric: ['10572']},
            {dimension: ['4', 'DL', 'SLC'], metric: ['10510']},
            {dimension: ['4', 'AA', 'PHL'], metric: ['10477']},
            {dimension: ['3', 'MQ', 'ORD'], metric: ['10477']},
            {dimension: ['4', 'WN', 'ATL'], metric: ['10395']},
            {dimension: ['1', 'WN', 'AUS'], metric: ['10383']},
            {dimension: ['4', 'WN', 'OAK'], metric: ['10382']},
            {dimension: ['3', 'AA', 'DCA'], metric: ['10348']},
            {dimension: ['4', 'B6', 'JFK'], metric: ['10311']},
            {dimension: ['2', 'WN', 'MSY'], metric: ['10286']},
            {dimension: ['2', 'B6', 'MCO'], metric: ['10239']},
            {dimension: ['3', 'F9', 'DEN'], metric: ['10237']},
            {dimension: ['4', 'OO', 'MSP'], metric: ['10208']},
            {dimension: ['1', 'EV', 'ORD'], metric: ['9970']},
            {dimension: ['3', 'B6', 'FLL'], metric: ['9921']},
            {dimension: ['3', 'DL', 'LGA'], metric: ['9854']},
            {dimension: ['4', 'OO', 'DTW'], metric: ['9853']},
            {dimension: ['1', 'WN', 'MSY'], metric: ['9831']},
            {dimension: ['3', 'WN', 'AUS'], metric: ['9823']},
            {dimension: ['1', 'B6', 'MCO'], metric: ['9810']},
            {dimension: ['3', 'EV', 'EWR'], metric: ['9744']},
            {dimension: ['1', 'UA', 'IAD'], metric: ['9731']},
            {dimension: ['4', 'EV', 'IAH'], metric: ['9681']},
            {dimension: ['2', 'OO', 'ATL'], metric: ['9639']},
            {dimension: ['4', 'WN', 'MCO'], metric: ['9635']},
            {dimension: ['3', 'WN', 'FLL'], metric: ['9558']},
            {dimension: ['1', 'DL', 'MCO'], metric: ['9464']},
            {dimension: ['3', 'AA', 'LGA'], metric: ['9443']},
            {dimension: ['2', 'DL', 'MCO'], metric: ['9360']},
            {dimension: ['4', 'AA', 'LAX'], metric: ['9350']},
            {dimension: ['2', 'WN', 'BUR'], metric: ['9255']},
            {dimension: ['4', 'WN', 'STL'], metric: ['9250']},
            {dimension: ['1', 'AA', 'MCO'], metric: ['9250']},
            {dimension: ['1', 'F9', 'DEN'], metric: ['9221']},
            {dimension: ['1', 'DL', 'SEA'], metric: ['9194']},
            {dimension: ['2', 'AA', 'MCO'], metric: ['9193']},
            {dimension: ['4', 'WN', 'SAN'], metric: ['9163']},
            {dimension: ['4', 'OO', 'SFO'], metric: ['9055']},
            {dimension: ['2', 'EV', 'ORD'], metric: ['8894']},
            {dimension: ['2', 'DL', 'BOS'], metric: ['8888']},
            {dimension: ['2', 'AS', 'PDX'], metric: ['8851']},
            {dimension: ['2', 'YX', 'DCA'], metric: ['8814']},
            {dimension: ['2', 'WN', 'SFO'], metric: ['8738']},
            {dimension: ['1', 'WN', 'BUR'], metric: ['8722']},
            {dimension: ['2', 'YX', 'LGA'], metric: ['8669']},
            {dimension: ['1', 'OO', 'SEA'], metric: ['8656']},
            {dimension: ['2', 'AA', 'JFK'], metric: ['8647']},
            {dimension: ['2', 'YV', 'DFW'], metric: ['8630']},
            {dimension: ['3', 'B6', 'MCO'], metric: ['8572']},
            {dimension: ['2', 'AS', 'SFO'], metric: ['8546']},
            {dimension: ['4', 'HA', 'HNL'], metric: ['8518']},
            {dimension: ['2', 'WN', 'SAT'], metric: ['8493']},
            {dimension: ['1', 'NK', 'FLL'], metric: ['8450']},
            {dimension: ['2', 'WN', 'SNA'], metric: ['8431']},
            {dimension: ['3', 'MQ', 'DFW'], metric: ['8320']},
            {dimension: ['3', 'WN', 'MSY'], metric: ['8314']},
            {dimension: ['1', 'AA', 'JFK'], metric: ['8304']},
            {dimension: ['2', 'NK', 'FLL'], metric: ['8283']},
            {dimension: ['1', 'YX', 'LGA'], metric: ['8159']},
            {dimension: ['4', 'WN', 'BNA'], metric: ['8131']},
            {dimension: ['1', 'WN', 'SNA'], metric: ['8123']},
            {dimension: ['2', 'AS', 'LAX'], metric: ['8112']},
            {dimension: ['1', 'AS', 'PDX'], metric: ['8102']},
            {dimension: ['1', 'OO', 'ATL'], metric: ['8086']},
            {dimension: ['4', 'DL', 'LAX'], metric: ['8084']},
            {dimension: ['1', 'DL', 'BOS'], metric: ['8021']},
            {dimension: ['1', 'WN', 'SFO'], metric: ['8020']},
            {dimension: ['3', 'OO', 'ATL'], metric: ['8014']},
            {dimension: ['4', 'OO', 'LAX'], metric: ['8007']},
            {dimension: ['1', 'EV', 'DFW'], metric: ['7984']},
            {dimension: ['3', 'WN', 'BUR'], metric: ['7925']},
            {dimension: ['1', 'WN', 'SAT'], metric: ['7763']},
            {dimension: ['3', 'AA', 'JFK'], metric: ['7745']},
            {dimension: ['1', 'YV', 'DFW'], metric: ['7638']},
            {dimension: ['3', 'WN', 'SFO'], metric: ['7624']},
            {dimension: ['2', 'HA', 'OGG'], metric: ['7613']},
            {dimension: ['3', 'DL', 'MCO'], metric: ['7589']},
            {dimension: ['2', 'YV', 'IAH'], metric: ['7573']},
            {dimension: ['2', 'WN', 'DCA'], metric: ['7551']},
            {dimension: ['3', 'AA', 'MCO'], metric: ['7502']},
            {dimension: ['2', 'AS', 'ANC'], metric: ['7500']},
            {dimension: ['2', 'AA', 'LAS'], metric: ['7490']},
            {dimension: ['3', 'AS', 'PDX'], metric: ['7462']},
            {dimension: ['1', 'WN', 'DCA'], metric: ['7439']},
            {dimension: ['2', '9E', 'LGA'], metric: ['7394']},
            {dimension: ['1', 'OO', 'PHX'], metric: ['7381']},
            {dimension: ['1', 'HA', 'OGG'], metric: ['7343']},
            {dimension: ['2', 'WN', 'PDX'], metric: ['7327']},
            {dimension: ['2', 'OO', 'SEA'], metric: ['7314']},
            {dimension: ['2', '9E', 'ATL'], metric: ['7313']},
            {dimension: ['3', 'WN', 'SNA'], metric: ['7306']},
            {dimension: ['1', 'AA', 'LAS'], metric: ['7230']},
            {dimension: ['3', 'WN', 'SAT'], metric: ['7206']},
            {dimension: ['3', 'EV', 'ORD'], metric: ['7102']},
            {dimension: ['3', 'AS', 'ANC'], metric: ['7073']},
            {dimension: ['1', 'OH', 'DCA'], metric: ['7053']},
            {dimension: ['1', 'VX', 'LAX'], metric: ['7047']},
            {dimension: ['4', 'WN', 'SJC'], metric: ['7043']},
            {dimension: ['3', 'DL', 'BOS'], metric: ['7035']},
            {dimension: ['3', 'OO', 'SEA'], metric: ['6993']},
            {dimension: ['3', 'NK', 'FLL'], metric: ['6992']},
            {dimension: ['4', 'DL', 'JFK'], metric: ['6946']},
            {dimension: ['1', 'EV', 'LGA'], metric: ['6871']},
            {dimension: ['4', 'UA', 'LAX'], metric: ['6870']},
            {dimension: ['2', 'UA', 'BOS'], metric: ['6862']},
            {dimension: ['2', 'DL', 'SFO'], metric: ['6847']},
            {dimension: ['2', 'OO', 'PHX'], metric: ['6842']},
            {dimension: ['4', 'WN', 'SMF'], metric: ['6824']},
            {dimension: ['2', 'AA', 'SFO'], metric: ['6736']},
            {dimension: ['3', 'DL', 'SFO'], metric: ['6725']},
            {dimension: ['2', 'WN', 'IND'], metric: ['6712']},
            {dimension: ['2', 'UA', 'LAS'], metric: ['6703']},
            {dimension: ['4', 'WN', 'TPA'], metric: ['6695']},
            {dimension: ['2', 'DL', 'LAS'], metric: ['6691']},
            {dimension: ['1', 'WN', 'MKE'], metric: ['6689']},
            {dimension: ['3', 'WN', 'PDX'], metric: ['6668']},
            {dimension: ['1', 'DL', 'LAS'], metric: ['6589']},
            {dimension: ['3', 'HA', 'OGG'], metric: ['6536']},
            {dimension: ['1', 'YX', 'DCA'], metric: ['6512']},
            {dimension: ['3', 'YV', 'DFW'], metric: ['6509']},
            {dimension: ['3', 'YX', 'DCA'], metric: ['6503']},
            {dimension: ['2', 'WN', 'BOS'], metric: ['6502']},
            {dimension: ['2', 'WN', 'MKE'], metric: ['6459']},
            {dimension: ['2', '9E', 'JFK'], metric: ['6458']},
            {dimension: ['1', 'AA', 'SFO'], metric: ['6422']},
            {dimension: ['2', 'B6', 'LGB'], metric: ['6412']},
            {dimension: ['2', 'NK', 'LAS'], metric: ['6410']},
            {dimension: ['2', 'UA', 'MCO'], metric: ['6397']},
            {dimension: ['4', 'AA', 'BOS'], metric: ['6389']},
            {dimension: ['3', 'WN', 'DCA'], metric: ['6388']},
            {dimension: ['1', 'YV', 'IAH'], metric: ['6367']},
            {dimension: ['3', 'AA', 'LAS'], metric: ['6326']},
            {dimension: ['2', 'WN', 'CMH'], metric: ['6306']},
            {dimension: ['1', 'B6', 'LGB'], metric: ['6279']},
            {dimension: ['2', 'WN', 'SEA'], metric: ['6272']},
            {dimension: ['2', 'YX', 'EWR'], metric: ['6264']},
            {dimension: ['1', 'WN', 'PDX'], metric: ['6252']},
            {dimension: ['1', 'WN', 'IND'], metric: ['6248']},
            {dimension: ['1', 'UA', 'MCO'], metric: ['6245']},
            {dimension: ['1', '9E', 'JFK'], metric: ['6230']},
            {dimension: ['1', 'AS', 'ANC'], metric: ['6211']},
            {dimension: ['3', 'AS', 'LAX'], metric: ['6179']},
            {dimension: ['3', 'WN', 'SEA'], metric: ['6138']},
            {dimension: ['1', 'AA', 'ATL'], metric: ['6132']},
            {dimension: ['3', 'UA', 'BOS'], metric: ['6094']},
            {dimension: ['1', '9E', 'LGA'], metric: ['6082']},
            {dimension: ['2', 'DL', 'TPA'], metric: ['6068']},
            {dimension: ['4', 'WN', 'MCI'], metric: ['6065']},
            {dimension: ['4', 'B6', 'FLL'], metric: ['6038']},
            {dimension: ['1', 'WN', 'CMH'], metric: ['6027']},
            {dimension: ['2', 'AA', 'TPA'], metric: ['6025']},
            {dimension: ['3', 'AS', 'SFO'], metric: ['6021']},
            {dimension: ['4', 'VX', 'SFO'], metric: ['6018']},
            {dimension: ['1', '9E', 'ATL'], metric: ['6017']},
            {dimension: ['1', 'AA', 'TPA'], metric: ['6016']},
            {dimension: ['3', 'YV', 'IAH'], metric: ['6011']},
            {dimension: ['1', 'DL', 'FLL'], metric: ['5995']},
            {dimension: ['1', 'DL', 'TPA'], metric: ['5978']},
            {dimension: ['1', 'YX', 'EWR'], metric: ['5974']},
            {dimension: ['2', 'AA', 'ATL'], metric: ['5900']},
            {dimension: ['1', 'NK', 'LAS'], metric: ['5894']},
            {dimension: ['2', 'EV', 'DFW'], metric: ['5889']},
            {dimension: ['4', 'AA', 'DCA'], metric: ['5872']},
            {dimension: ['3', 'AA', 'SFO'], metric: ['5848']},
            {dimension: ['2', 'WN', 'ABQ'], metric: ['5847']},
            {dimension: ['4', 'WN', 'FLL'], metric: ['5839']},
            {dimension: ['2', 'WN', 'ONT'], metric: ['5819']},
            {dimension: ['2', 'YV', 'IAD'], metric: ['5799']},
            {dimension: ['2', 'DL', 'FLL'], metric: ['5798']},
            {dimension: ['4', 'UA', 'IAD'], metric: ['5778']},
            {dimension: ['1', 'F9', 'MCO'], metric: ['5778']},
            {dimension: ['4', 'DL', 'LGA'], metric: ['5749']},
            {dimension: ['2', 'NK', 'MCO'], metric: ['5739']},
            {dimension: ['3', 'OO', 'PHX'], metric: ['5735']},
            {dimension: ['3', 'WN', 'BOS'], metric: ['5734']},
            {dimension: ['3', 'DL', 'LAS'], metric: ['5718']},
            {dimension: ['4', 'WN', 'AUS'], metric: ['5679']},
            {dimension: ['3', 'VX', 'SFO'], metric: ['5653']},
            {dimension: ['1', 'NK', 'MCO'], metric: ['5650']},
            {dimension: ['1', 'UA', 'LAS'], metric: ['5641']},
            {dimension: ['3', 'YX', 'LGA'], metric: ['5630']},
            {dimension: ['3', 'NK', 'LAS'], metric: ['5614']},
            {dimension: ['1', 'YV', 'IAD'], metric: ['5599']},
            {dimension: ['2', 'WN', 'SLC'], metric: ['5574']},
            {dimension: ['2', 'AA', 'DEN'], metric: ['5572']},
            {dimension: ['1', 'UA', 'BOS'], metric: ['5571']},
            {dimension: ['1', 'WN', 'ONT'], metric: ['5562']},
            {dimension: ['2', 'DL', 'DEN'], metric: ['5559']},
            {dimension: ['2', 'YV', 'PHX'], metric: ['5551']},
            {dimension: ['2', 'WN', 'RDU'], metric: ['5531']},
            {dimension: ['4', 'AA', 'LGA'], metric: ['5530']},
            {dimension: ['3', 'UA', 'LAS'], metric: ['5524']},
            {dimension: ['2', 'WN', 'LGA'], metric: ['5517']},
            {dimension: ['4', 'EV', 'EWR'], metric: ['5517']},
            {dimension: ['3', 'EV', 'DFW'], metric: ['5517']},
            {dimension: ['3', '9E', 'LGA'], metric: ['5514']},
            {dimension: ['1', 'WN', 'RSW'], metric: ['5466']},
            {dimension: ['1', 'WN', 'SLC'], metric: ['5447']},
            {dimension: ['4', 'DL', 'SEA'], metric: ['5387']},
            {dimension: ['1', 'WN', 'LGA'], metric: ['5386']},
            {dimension: ['2', 'B6', 'DCA'], metric: ['5379']},
            {dimension: ['3', 'B6', 'LGB'], metric: ['5328']},
            {dimension: ['2', 'VX', 'SFO'], metric: ['5310']},
            {dimension: ['3', 'WN', 'IND'], metric: ['5272']},
            {dimension: ['2', 'EV', 'LGA'], metric: ['5262']},
            {dimension: ['2', 'WN', 'PIT'], metric: ['5259']},
            {dimension: ['1', 'WN', 'ABQ'], metric: ['5220']},
            {dimension: ['2', 'YX', 'PHL'], metric: ['5203']},
            {dimension: ['2', 'NK', 'ORD'], metric: ['5193']},
            {dimension: ['1', 'B6', 'DCA'], metric: ['5189']},
            {dimension: ['3', 'WN', 'ABQ'], metric: ['5177']},
            {dimension: ['2', '9E', 'DTW'], metric: ['5172']},
            {dimension: ['1', 'OO', 'ASE'], metric: ['5130']},
            {dimension: ['3', 'NK', 'MCO'], metric: ['5117']},
            {dimension: ['3', 'WN', 'CMH'], metric: ['5105']},
            {dimension: ['3', 'WN', 'MKE'], metric: ['5094']},
            {dimension: ['2', 'B6', 'SJU'], metric: ['5076']},
            {dimension: ['2', 'UA', 'SEA'], metric: ['5060']},
            {dimension: ['1', 'YX', 'PHL'], metric: ['5051']},
            {dimension: ['2', 'NK', 'DTW'], metric: ['5051']},
            {dimension: ['1', 'WN', 'BOS'], metric: ['5045']},
            {dimension: ['1', 'AA', 'DEN'], metric: ['5045']},
            {dimension: ['1', 'WN', 'SEA'], metric: ['5043']},
            {dimension: ['1', 'B6', 'EWR'], metric: ['5042']},
            {dimension: ['2', 'UA', 'SAN'], metric: ['5040']},
            {dimension: ['2', 'DL', 'MIA'], metric: ['5036']},
            {dimension: ['2', 'OH', 'DCA'], metric: ['5031']},
            {dimension: ['3', 'UA', 'MCO'], metric: ['5027']},
            {dimension: ['2', 'AA', 'AUS'], metric: ['5008']},
            {dimension: ['1', 'NK', 'DTW'], metric: ['5002']},
            {dimension: ['3', '9E', 'ATL'], metric: ['4998']},
            {dimension: ['3', 'UA', 'SEA'], metric: ['4996']},
            {dimension: ['3', 'DL', 'DEN'], metric: ['4989']},
            {dimension: ['1', 'YV', 'PHX'], metric: ['4941']},
            {dimension: ['3', 'WN', 'ONT'], metric: ['4941']},
            {dimension: ['3', 'AA', 'DEN'], metric: ['4935']},
            {dimension: ['2', 'YX', 'ORD'], metric: ['4933']},
            {dimension: ['4', 'WN', 'MSY'], metric: ['4930']},
            {dimension: ['1', 'WN', 'PIT'], metric: ['4923']},
            {dimension: ['1', 'EV', 'CLE'], metric: ['4908']},
            {dimension: ['4', 'OO', 'SEA'], metric: ['4893']},
            {dimension: ['4', 'F9', 'DEN'], metric: ['4886']},
            {dimension: ['3', 'AA', 'TPA'], metric: ['4885']},
            {dimension: ['4', 'B6', 'MCO'], metric: ['4851']},
            {dimension: ['2', 'AA', 'RDU'], metric: ['4833']},
            {dimension: ['2', 'EV', 'CLE'], metric: ['4815']},
            {dimension: ['2', 'NK', 'DFW'], metric: ['4814']},
            {dimension: ['3', 'AA', 'ATL'], metric: ['4813']},
            {dimension: ['3', 'WN', 'SLC'], metric: ['4810']},
            {dimension: ['3', 'DL', 'TPA'], metric: ['4777']},
            {dimension: ['1', 'DL', 'DEN'], metric: ['4762']},
            {dimension: ['1', 'DL', 'MIA'], metric: ['4758']},
            {dimension: ['4', 'WN', 'BUR'], metric: ['4758']},
            {dimension: ['2', 'DL', 'DCA'], metric: ['4751']},
            {dimension: ['3', 'WN', 'LGA'], metric: ['4727']},
            {dimension: ['1', 'WN', 'RDU'], metric: ['4659']},
            {dimension: ['3', 'DL', 'FLL'], metric: ['4623']},
            {dimension: ['2', 'AA', 'SAN'], metric: ['4620']},
            {dimension: ['1', 'YX', 'ORD'], metric: ['4613']},
            {dimension: ['4', 'OO', 'ATL'], metric: ['4610']},
            {dimension: ['2', 'B6', 'EWR'], metric: ['4604']},
            {dimension: ['1', 'AA', 'RDU'], metric: ['4582']},
            {dimension: ['1', 'NK', 'ORD'], metric: ['4574']},
            {dimension: ['3', 'UA', 'SAN'], metric: ['4562']},
            {dimension: ['2', 'NK', 'LAX'], metric: ['4560']},
            {dimension: ['3', 'B6', 'DCA'], metric: ['4557']},
            {dimension: ['1', 'B6', 'SJU'], metric: ['4551']},
            {dimension: ['2', 'HA', 'LIH'], metric: ['4545']},
            {dimension: ['4', 'WN', 'SNA'], metric: ['4545']},
            {dimension: ['3', 'AA', 'SEA'], metric: ['4543']},
            {dimension: ['2', 'F9', 'MCO'], metric: ['4514']},
            {dimension: ['1', 'OO', 'BOI'], metric: ['4514']},
            {dimension: ['2', 'HA', 'KOA'], metric: ['4511']},
            {dimension: ['1', 'AA', 'AUS'], metric: ['4500']},
            {dimension: ['1', '9E', 'DTW'], metric: ['4491']},
            {dimension: ['1', 'WN', 'PHL'], metric: ['4466']},
            {dimension: ['3', 'WN', 'RDU'], metric: ['4464']},
            {dimension: ['3', 'NK', 'ORD'], metric: ['4460']},
            {dimension: ['3', 'NK', 'DFW'], metric: ['4452']},
            {dimension: ['4', 'WN', 'SFO'], metric: ['4424']},
            {dimension: ['2', 'AA', 'SEA'], metric: ['4422']},
            {dimension: ['4', 'EV', 'ATL'], metric: ['4407']},
            {dimension: ['3', 'YX', 'EWR'], metric: ['4392']},
            {dimension: ['2', 'DL', 'ORD'], metric: ['4389']},
            {dimension: ['1', 'B6', 'PBI'], metric: ['4377']},
            {dimension: ['2', 'UA', 'LGA'], metric: ['4374']},
            {dimension: ['1', 'UA', 'SAN'], metric: ['4374']},
            {dimension: ['2', 'WN', 'MSP'], metric: ['4371']},
            {dimension: ['2', 'OO', 'BOI'], metric: ['4362']},
            {dimension: ['4', 'DL', 'MCO'], metric: ['4350']},
            {dimension: ['2', 'OO', 'SAN'], metric: ['4346']},
            {dimension: ['2', 'WN', 'PHL'], metric: ['4342']},
            {dimension: ['1', 'DL', 'SFO'], metric: ['4341']},
            {dimension: ['1', 'DL', 'DCA'], metric: ['4322']},
            {dimension: ['3', 'B6', 'SJU'], metric: ['4317']},
            {dimension: ['1', 'NK', 'LAX'], metric: ['4317']},
            {dimension: ['1', 'OO', 'PDX'], metric: ['4304']},
            {dimension: ['3', 'EV', 'LGA'], metric: ['4304']},
            {dimension: ['3', 'AA', 'AUS'], metric: ['4300']},
            {dimension: ['3', 'NK', 'DTW'], metric: ['4296']},
            {dimension: ['3', '9E', 'JFK'], metric: ['4289']},
            {dimension: ['1', 'AA', 'SAN'], metric: ['4246']},
            {dimension: ['1', 'OO', 'SAN'], metric: ['4231']},
            {dimension: ['4', 'AA', 'MCO'], metric: ['4220']},
            {dimension: ['4', 'AS', 'PDX'], metric: ['4189']},
            {dimension: ['3', 'DL', 'ORD'], metric: ['4179']},
            {dimension: ['1', 'WN', 'MSP'], metric: ['4172']},
            {dimension: ['3', 'AA', 'SAN'], metric: ['4150']},
            {dimension: ['3', 'WN', 'PIT'], metric: ['4144']},
            {dimension: ['1', 'HA', 'LIH'], metric: ['4123']},
            {dimension: ['3', 'HA', 'LIH'], metric: ['4117']},
            {dimension: ['3', 'OO', 'PDX'], metric: ['4098']},
            {dimension: ['2', 'WN', 'RNO'], metric: ['4076']},
            {dimension: ['2', 'DL', 'PHX'], metric: ['4070']},
            {dimension: ['2', 'AA', 'MSP'], metric: ['4070']},
            {dimension: ['3', 'DL', 'MIA'], metric: ['4065']},
            {dimension: ['2', 'DL', 'RDU'], metric: ['4063']},
            {dimension: ['3', 'OO', 'SAN'], metric: ['4044']},
            {dimension: ['3', 'AA', 'RDU'], metric: ['4034']},
            {dimension: ['3', 'NK', 'LAX'], metric: ['4032']},
            {dimension: ['3', 'YV', 'IAD'], metric: ['4032']},
            {dimension: ['1', 'AS', 'LAX'], metric: ['4025']},
            {dimension: ['4', 'EV', 'LGA'], metric: ['4021']},
            {dimension: ['2', 'DL', 'MSY'], metric: ['4014']},
            {dimension: ['3', 'HA', 'KOA'], metric: ['3995']},
            {dimension: ['4', 'WN', 'SAT'], metric: ['3993']},
            {dimension: ['2', 'OO', 'FAT'], metric: ['3991']},
            {dimension: ['2', 'OO', 'PDX'], metric: ['3983']},
            {dimension: ['2', 'YX', 'IAH'], metric: ['3973']},
            {dimension: ['1', 'YX', 'IAH'], metric: ['3970']},
            {dimension: ['3', 'F9', 'MCO'], metric: ['3964']},
            {dimension: ['1', 'AA', 'MSP'], metric: ['3964']},
            {dimension: ['2', 'AA', 'IAH'], metric: ['3960']},
            {dimension: ['4', 'NK', 'FLL'], metric: ['3959']},
            {dimension: ['3', 'UA', 'LGA'], metric: ['3947']},
            {dimension: ['2', 'OO', 'IAH'], metric: ['3940']},
            {dimension: ['2', 'NK', 'BWI'], metric: ['3940']},
            {dimension: ['1', 'AA', 'FLL'], metric: ['3925']},
            {dimension: ['2', 'NK', 'ATL'], metric: ['3907']},
            {dimension: ['2', 'DL', 'SAN'], metric: ['3906']},
            {dimension: ['1', 'DL', 'RSW'], metric: ['3901']},
            {dimension: ['1', 'UA', 'LGA'], metric: ['3900']},
            {dimension: ['4', 'DL', 'BOS'], metric: ['3899']},
            {dimension: ['4', 'AA', 'JFK'], metric: ['3889']},
            {dimension: ['1', 'OO', 'IAH'], metric: ['3888']},
            {dimension: ['1', 'DL', 'PHX'], metric: ['3888']},
            {dimension: ['1', 'UA', 'SEA'], metric: ['3882']},
            {dimension: ['2', 'DL', 'CVG'], metric: ['3881']},
            {dimension: ['2', 'AA', 'STL'], metric: ['3873']},
            {dimension: ['1', 'UA', 'FLL'], metric: ['3858']},
            {dimension: ['2', 'MQ', 'LGA'], metric: ['3857']},
            {dimension: ['2', 'DL', 'BWI'], metric: ['3843']},
            {dimension: ['4', 'HA', 'OGG'], metric: ['3838']},
            {dimension: ['3', 'YV', 'PHX'], metric: ['3834']},
            {dimension: ['4', 'VX', 'LAX'], metric: ['3829']},
            {dimension: ['2', 'UA', 'PHX'], metric: ['3827']},
            {dimension: ['2', 'B6', 'PBI'], metric: ['3813']},
            {dimension: ['1', 'WN', 'RNO'], metric: ['3811']},
            {dimension: ['3', 'DL', 'PDX'], metric: ['3810']},
            {dimension: ['3', 'DL', 'DCA'], metric: ['3809']},
            {dimension: ['1', 'UA', 'PHX'], metric: ['3804']},
            {dimension: ['2', 'AA', 'EWR'], metric: ['3795']},
            {dimension: ['2', 'WN', 'RSW'], metric: ['3793']},
            {dimension: ['3', 'WN', 'MSP'], metric: ['3787']},
            {dimension: ['2', 'AS', 'SAN'], metric: ['3787']},
            {dimension: ['2', 'AA', 'MSY'], metric: ['3782']},
            {dimension: ['1', 'DL', 'MSY'], metric: ['3780']},
            {dimension: ['4', 'WN', 'DCA'], metric: ['3778']},
            {dimension: ['4', 'EV', 'ORD'], metric: ['3773']},
            {dimension: ['3', 'OO', 'BOI'], metric: ['3763']},
            {dimension: ['1', 'AA', 'STL'], metric: ['3760']},
            {dimension: ['3', 'VX', 'LAX'], metric: ['3759']},
            {dimension: ['2', 'WN', 'PVD'], metric: ['3749']},
            {dimension: ['1', 'HA', 'KOA'], metric: ['3729']},
            {dimension: ['2', 'DL', 'AUS'], metric: ['3711']},
            {dimension: ['2', 'UA', 'AUS'], metric: ['3704']},
            {dimension: ['2', 'UA', 'TPA'], metric: ['3681']},
            {dimension: ['2', 'WN', 'DTW'], metric: ['3674']},
            {dimension: ['3', 'B6', 'EWR'], metric: ['3667']},
            {dimension: ['2', 'WN', 'OMA'], metric: ['3650']},
            {dimension: ['1', 'AA', 'EWR'], metric: ['3639']},
            {dimension: ['3', 'NK', 'BWI'], metric: ['3636']},
            {dimension: ['2', 'OH', 'PHL'], metric: ['3610']},
            {dimension: ['2', 'VX', 'LAX'], metric: ['3608']},
            {dimension: ['1', 'AA', 'SEA'], metric: ['3604']},
            {dimension: ['3', 'WN', 'PHL'], metric: ['3598']},
            {dimension: ['3', 'AA', 'MSP'], metric: ['3579']},
            {dimension: ['2', 'DL', 'PDX'], metric: ['3566']},
            {dimension: ['3', 'WN', 'RNO'], metric: ['3562']},
            {dimension: ['3', 'DL', 'SAN'], metric: ['3552']},
            {dimension: ['1', 'EV', 'DTW'], metric: ['3551']},
            {dimension: ['1', 'NK', 'ATL'], metric: ['3542']},
            {dimension: ['4', 'AA', 'LAS'], metric: ['3541']},
            {dimension: ['3', 'UA', 'PDX'], metric: ['3533']},
            {dimension: ['1', 'OO', 'FAT'], metric: ['3531']},
            {dimension: ['1', 'F9', 'LAS'], metric: ['3524']},
            {dimension: ['2', 'WN', 'ELP'], metric: ['3520']},
            {dimension: ['2', 'UA', 'FLL'], metric: ['3512']},
            {dimension: ['1', 'DL', 'RDU'], metric: ['3508']},
            {dimension: ['3', '9E', 'DTW'], metric: ['3506']},
            {dimension: ['2', 'DL', 'MCI'], metric: ['3504']},
            {dimension: ['2', 'AA', 'SAT'], metric: ['3490']},
            {dimension: ['2', 'WN', 'BDL'], metric: ['3485']},
            {dimension: ['1', 'DL', 'CVG'], metric: ['3470']},
            {dimension: ['1', 'UA', 'TPA'], metric: ['3462']},
            {dimension: ['2', 'UA', 'PDX'], metric: ['3459']},
            {dimension: ['1', 'DL', 'PBI'], metric: ['3436']},
            {dimension: ['4', 'WN', 'PDX'], metric: ['3420']},
            {dimension: ['2', 'AA', 'FLL'], metric: ['3420']},
            {dimension: ['3', 'NK', 'ATL'], metric: ['3413']},
            {dimension: ['1', 'WN', 'DTW'], metric: ['3400']},
            {dimension: ['3', 'OO', 'FAT'], metric: ['3398']},
            {dimension: ['4', 'OO', 'PHX'], metric: ['3393']},
            {dimension: ['2', 'DL', 'PHL'], metric: ['3390']},
            {dimension: ['1', 'AA', 'IAH'], metric: ['3385']},
            {dimension: ['2', 'WN', 'EWR'], metric: ['3379']},
            {dimension: ['3', 'AA', 'IAH'], metric: ['3378']},
            {dimension: ['3', 'DL', 'RDU'], metric: ['3371']},
            {dimension: ['2', 'WN', 'CLE'], metric: ['3371']},
            {dimension: ['1', 'OO', 'TUS'], metric: ['3365']},
            {dimension: ['2', 'WN', 'BUF'], metric: ['3364']},
            {dimension: ['4', 'AA', 'SFO'], metric: ['3364']},
            {dimension: ['3', 'DL', 'CVG'], metric: ['3361']},
            {dimension: ['1', 'NK', 'DFW'], metric: ['3348']},
            {dimension: ['2', 'UA', 'SNA'], metric: ['3345']},
            {dimension: ['1', 'WN', 'PVD'], metric: ['3341']},
            {dimension: ['1', 'NK', 'BWI'], metric: ['3332']},
            {dimension: ['2', 'NK', 'IAH'], metric: ['3331']},
            {dimension: ['2', 'AS', 'LAS'], metric: ['3317']},
            {dimension: ['3', 'YX', 'PHL'], metric: ['3303']},
            {dimension: ['3', 'EV', 'CLE'], metric: ['3285']},
            {dimension: ['3', 'DL', 'AUS'], metric: ['3276']},
            {dimension: ['3', 'AA', 'EWR'], metric: ['3275']},
            {dimension: ['2', 'UA', 'DFW'], metric: ['3269']},
            {dimension: ['1', 'WN', 'OMA'], metric: ['3267']},
            {dimension: ['1', 'DL', 'SAN'], metric: ['3263']},
            {dimension: ['2', 'AA', 'SNA'], metric: ['3262']},
            {dimension: ['1', 'DL', 'ORD'], metric: ['3258']},
            {dimension: ['2', 'OO', 'TUS'], metric: ['3248']},
            {dimension: ['2', 'WN', 'OKC'], metric: ['3241']},
            {dimension: ['1', 'WN', 'ELP'], metric: ['3237']},
            {dimension: ['1', 'YX', 'MIA'], metric: ['3234']},
            {dimension: ['2', 'DL', 'BNA'], metric: ['3234']},
            {dimension: ['2', 'F9', 'LAS'], metric: ['3233']},
            {dimension: ['1', 'B6', 'RSW'], metric: ['3216']},
            {dimension: ['1', 'AA', 'MSY'], metric: ['3210']},
            {dimension: ['4', 'UA', 'BOS'], metric: ['3209']},
            {dimension: ['4', 'B6', 'LGB'], metric: ['3207']},
            {dimension: ['1', 'WN', 'BDL'], metric: ['3201']},
            {dimension: ['1', 'WN', 'BUF'], metric: ['3193']},
            {dimension: ['1', 'DL', 'BWI'], metric: ['3190']},
            {dimension: ['4', 'F9', 'MCO'], metric: ['3186']},
            {dimension: ['2', 'HA', 'ITO'], metric: ['3178']},
            {dimension: ['3', 'UA', 'AUS'], metric: ['3175']},
            {dimension: ['1', 'NK', 'TPA'], metric: ['3171']},
            {dimension: ['3', 'DL', 'BWI'], metric: ['3170']},
            {dimension: ['3', 'AS', 'SAN'], metric: ['3168']},
            {dimension: ['4', 'AS', 'ANC'], metric: ['3168']},
            {dimension: ['4', 'DL', 'LAS'], metric: ['3168']},
            {dimension: ['1', '9E', 'MSP'], metric: ['3165']},
            {dimension: ['2', 'DL', 'DFW'], metric: ['3162']},
            {dimension: ['3', 'AA', 'STL'], metric: ['3146']},
            {dimension: ['4', 'WN', 'ONT'], metric: ['3141']},
            {dimension: ['3', 'UA', 'DFW'], metric: ['3140']},
            {dimension: ['2', 'DL', 'PBI'], metric: ['3138']},
            {dimension: ['2', 'B6', 'SFO'], metric: ['3132']},
            {dimension: ['3', 'NK', 'IAH'], metric: ['3130']},
            {dimension: ['3', 'F9', 'LAS'], metric: ['3128']},
            {dimension: ['3', 'MQ', 'LGA'], metric: ['3125']},
            {dimension: ['1', 'B6', 'SFO'], metric: ['3123']},
            {dimension: ['1', 'WN', 'OKC'], metric: ['3116']},
            {dimension: ['4', 'NK', 'LAS'], metric: ['3107']},
            {dimension: ['2', 'AA', 'DTW'], metric: ['3106']},
            {dimension: ['3', 'OH', 'DCA'], metric: ['3106']},
            {dimension: ['1', 'DL', 'MCI'], metric: ['3090']},
            {dimension: ['4', 'UA', 'LAS'], metric: ['3088']},
            {dimension: ['1', 'AA', 'PBI'], metric: ['3087']},
            {dimension: ['2', 'B6', 'LGA'], metric: ['3086']},
            {dimension: ['2', 'DL', 'RSW'], metric: ['3085']},
            {dimension: ['3', 'OO', 'IAH'], metric: ['3083']},
            {dimension: ['4', 'DL', 'SFO'], metric: ['3083']},
            {dimension: ['1', 'UA', 'SNA'], metric: ['3081']},
            {dimension: ['1', 'MQ', 'LGA'], metric: ['3078']},
            {dimension: ['1', 'DL', 'PHL'], metric: ['3076']},
            {dimension: ['1', 'YX', 'CMH'], metric: ['3074']},
            {dimension: ['2', 'YX', 'CMH'], metric: ['3071']},
            {dimension: ['1', 'DL', 'PDX'], metric: ['3070']},
            {dimension: ['2', 'OO', 'SMF'], metric: ['3068']},
            {dimension: ['3', 'WN', 'DTW'], metric: ['3066']},
            {dimension: ['3', 'AA', 'MSY'], metric: ['3059']},
            {dimension: ['3', 'DL', 'PHL'], metric: ['3058']},
            {dimension: ['1', 'B6', 'LGA'], metric: ['3057']},
            {dimension: ['3', 'YX', 'ORD'], metric: ['3048']},
            {dimension: ['4', 'AA', 'TPA'], metric: ['3043']},
            {dimension: ['1', 'AA', 'DTW'], metric: ['3035']},
            {dimension: ['2', 'DL', 'EWR'], metric: ['3034']},
            {dimension: ['3', 'DL', 'PHX'], metric: ['3033']},
            {dimension: ['1', 'AA', 'RSW'], metric: ['3032']},
            {dimension: ['2', 'B6', 'LAX'], metric: ['3018']},
            {dimension: ['3', 'WN', 'ELP'], metric: ['3012']},
            {dimension: ['4', 'WN', 'SEA'], metric: ['3000']},
            {dimension: ['4', 'WN', 'IND'], metric: ['2999']},
            {dimension: ['2', 'UA', 'MSY'], metric: ['2999']},
            {dimension: ['3', 'WN', 'OMA'], metric: ['2998']},
            {dimension: ['1', 'AA', 'SAT'], metric: ['2997']},
            {dimension: ['1', 'AA', 'SJU'], metric: ['2997']},
            {dimension: ['1', 'B6', 'LAX'], metric: ['2995']},
            {dimension: ['4', 'WN', 'CMH'], metric: ['2993']},
            {dimension: ['3', 'DL', 'MCI'], metric: ['2992']},
            {dimension: ['4', 'WN', 'BOS'], metric: ['2986']},
            {dimension: ['1', 'AS', 'SAN'], metric: ['2984']},
            {dimension: ['1', 'HA', 'ITO'], metric: ['2971']},
            {dimension: ['2', 'AA', 'SJU'], metric: ['2967']},
            {dimension: ['3', 'WN', 'CLE'], metric: ['2958']},
            {dimension: ['1', 'WN', 'CLE'], metric: ['2956']},
            {dimension: ['1', 'EV', 'RIC'], metric: ['2947']},
            {dimension: ['2', '9E', 'CVG'], metric: ['2946']},
            {dimension: ['2', 'AA', 'PIT'], metric: ['2941']},
            {dimension: ['1', 'YX', 'IND'], metric: ['2937']},
            {dimension: ['3', 'DL', 'MSY'], metric: ['2931']},
            {dimension: ['3', 'WN', 'EWR'], metric: ['2917']},
            {dimension: ['3', 'DL', 'BNA'], metric: ['2910']},
            {dimension: ['3', 'AA', 'SAT'], metric: ['2899']},
            {dimension: ['1', 'UA', 'DFW'], metric: ['2899']},
            {dimension: ['2', 'NK', 'MYR'], metric: ['2894']},
            {dimension: ['2', 'AA', 'BWI'], metric: ['2891']},
            {dimension: ['3', 'WN', 'PVD'], metric: ['2887']},
            {dimension: ['2', 'OO', 'BNA'], metric: ['2882']},
            {dimension: ['2', 'DL', 'CLT'], metric: ['2874']},
            {dimension: ['2', 'EV', 'BTR'], metric: ['2868']},
            {dimension: ['4', 'WN', 'ABQ'], metric: ['2866']},
            {dimension: ['4', 'WN', 'MKE'], metric: ['2860']},
            {dimension: ['3', 'DL', 'DFW'], metric: ['2851']},
            {dimension: ['4', 'UA', 'MCO'], metric: ['2845']},
            {dimension: ['1', 'OO', 'PSP'], metric: ['2840']},
            {dimension: ['3', 'UA', 'SNA'], metric: ['2839']},
            {dimension: ['1', 'UA', 'PDX'], metric: ['2835']},
            {dimension: ['2', 'DL', 'IND'], metric: ['2826']},
            {dimension: ['1', 'AA', 'PIT'], metric: ['2825']},
            {dimension: ['2', 'YX', 'MIA'], metric: ['2817']},
            {dimension: ['1', 'AA', 'SNA'], metric: ['2810']},
            {dimension: ['1', 'AA', 'BWI'], metric: ['2809']},
            {dimension: ['3', 'UA', 'TPA'], metric: ['2807']},
            {dimension: ['3', 'DL', 'CLT'], metric: ['2803']},
            {dimension: ['1', 'NK', 'RSW'], metric: ['2798']},
            {dimension: ['3', 'AA', 'FLL'], metric: ['2793']},
            {dimension: ['3', 'B6', 'SFO'], metric: ['2793']},
            {dimension: ['1', 'WN', 'EWR'], metric: ['2784']},
            {dimension: ['1', 'DL', 'AUS'], metric: ['2782']},
            {dimension: ['3', 'OO', 'BNA'], metric: ['2779']},
            {dimension: ['4', 'WN', 'RDU'], metric: ['2776']},
            {dimension: ['4', 'WN', 'LGA'], metric: ['2773']},
            {dimension: ['1', 'OO', 'SMF'], metric: ['2772']},
            {dimension: ['4', 'NK', 'MCO'], metric: ['2772']},
            {dimension: ['4', 'AA', 'ATL'], metric: ['2760']},
            {dimension: ['3', 'UA', 'PHX'], metric: ['2760']},
            {dimension: ['3', 'NK', 'MYR'], metric: ['2756']},
            {dimension: ['3', 'AA', 'SNA'], metric: ['2754']},
            {dimension: ['2', 'YX', 'IND'], metric: ['2748']},
            {dimension: ['3', 'WN', 'OKC'], metric: ['2744']},
            {dimension: ['1', 'OO', 'COS'], metric: ['2740']},
            {dimension: ['2', 'AA', 'BNA'], metric: ['2736']},
            {dimension: ['4', 'EV', 'DFW'], metric: ['2735']},
            {dimension: ['1', 'DL', 'BNA'], metric: ['2733']},
            {dimension: ['3', 'UA', 'CLE'], metric: ['2730']},
            {dimension: ['1', 'OO', 'BNA'], metric: ['2729']},
            {dimension: ['1', 'AA', 'BNA'], metric: ['2725']},
            {dimension: ['1', 'NK', 'IAH'], metric: ['2713']},
            {dimension: ['2', 'UA', 'HNL'], metric: ['2701']},
            {dimension: ['1', 'UA', 'AUS'], metric: ['2698']},
            {dimension: ['2', 'OO', 'SJC'], metric: ['2697']},
            {dimension: ['2', 'UA', 'CLE'], metric: ['2691']},
            {dimension: ['4', 'WN', 'SLC'], metric: ['2681']},
            {dimension: ['1', 'UA', 'MSY'], metric: ['2675']},
            {dimension: ['2', 'OO', 'COS'], metric: ['2668']},
            {dimension: ['4', 'B6', 'DCA'], metric: ['2664']},
            {dimension: ['4', 'DL', 'TPA'], metric: ['2662']},
            {dimension: ['1', 'UA', 'MIA'], metric: ['2662']},
            {dimension: ['4', 'DL', 'DEN'], metric: ['2653']},
            {dimension: ['2', 'UA', 'ATL'], metric: ['2653']},
            {dimension: ['1', 'DL', 'CLT'], metric: ['2650']},
            {dimension: ['3', 'B6', 'PBI'], metric: ['2649']},
            {dimension: ['2', 'OO', 'MKE'], metric: ['2647']},
            {dimension: ['2', 'WN', 'JAX'], metric: ['2645']},
            {dimension: ['3', 'WN', 'BDL'], metric: ['2643']},
            {dimension: ['1', 'AA', 'SLC'], metric: ['2639']},
            {dimension: ['2', 'DL', 'MKE'], metric: ['2636']},
            {dimension: ['4', 'OO', 'BOI'], metric: ['2636']},
            {dimension: ['4', 'AA', 'DEN'], metric: ['2630']},
            {dimension: ['3', 'AA', 'PIT'], metric: ['2626']},
            {dimension: ['3', 'B6', 'LGA'], metric: ['2623']},
            {dimension: ['3', 'OO', 'SMF'], metric: ['2622']},
            {dimension: ['2', 'OO', 'DFW'], metric: ['2621']},
            {dimension: ['1', 'DL', 'DFW'], metric: ['2621']},
            {dimension: ['3', 'HA', 'ITO'], metric: ['2620']},
            {dimension: ['1', 'AS', 'SFO'], metric: ['2618']},
            {dimension: ['2', 'NK', 'BOS'], metric: ['2617']},
            {dimension: ['1', 'YX', 'CLT'], metric: ['2615']},
            {dimension: ['3', 'B6', 'LAX'], metric: ['2603']},
            {dimension: ['4', 'UA', 'SAN'], metric: ['2598']},
            {dimension: ['2', 'AA', 'MCI'], metric: ['2594']},
            {dimension: ['1', 'OO', 'SJC'], metric: ['2593']},
            {dimension: ['2', 'B6', 'LAS'], metric: ['2588']},
            {dimension: ['4', 'DL', 'FLL'], metric: ['2581']},
            {dimension: ['2', 'G4', 'SFB'], metric: ['2575']},
            {dimension: ['1', 'EV', 'BTR'], metric: ['2570']},
            {dimension: ['3', 'AA', 'BWI'], metric: ['2564']},
            {dimension: ['3', 'AS', 'LAS'], metric: ['2560']},
            {dimension: ['2', 'OO', 'FWA'], metric: ['2557']},
            {dimension: ['3', 'WN', 'BUF'], metric: ['2555']},
            {dimension: ['4', 'UA', 'SEA'], metric: ['2553']},
            {dimension: ['1', 'B6', 'TPA'], metric: ['2545']},
            {dimension: ['3', 'DL', 'PBI'], metric: ['2530']},
            {dimension: ['4', 'WN', 'PIT'], metric: ['2526']},
            {dimension: ['2', 'B6', 'TPA'], metric: ['2522']},
            {dimension: ['2', 'AS', 'SJC'], metric: ['2519']},
            {dimension: ['3', 'DL', 'EWR'], metric: ['2517']},
            {dimension: ['3', 'UA', 'FLL'], metric: ['2511']},
            {dimension: ['3', 'DL', 'IND'], metric: ['2508']},
            {dimension: ['1', 'G4', 'SFB'], metric: ['2507']},
            {dimension: ['2', 'MQ', 'MIA'], metric: ['2506']},
            {dimension: ['2', 'UA', 'MIA'], metric: ['2496']},
            {dimension: ['1', 'B6', 'LAS'], metric: ['2495']},
            {dimension: ['1', 'OO', 'DFW'], metric: ['2494']},
            {dimension: ['2', 'DL', 'STL'], metric: ['2491']},
            {dimension: ['3', 'AA', 'DTW'], metric: ['2484']},
            {dimension: ['1', '9E', 'CVG'], metric: ['2481']},
            {dimension: ['1', 'OO', 'MKE'], metric: ['2481']},
            {dimension: ['2', 'EV', 'RIC'], metric: ['2481']},
            {dimension: ['2', 'F9', 'PHL'], metric: ['2463']},
            {dimension: ['1', 'AA', 'MCI'], metric: ['2463']},
            {dimension: ['3', 'OO', 'TUS'], metric: ['2462']},
            {dimension: ['1', 'OO', 'SBA'], metric: ['2456']},
            {dimension: ['2', 'B6', 'RSW'], metric: ['2456']},
            {dimension: ['1', 'NK', 'BOS'], metric: ['2451']},
            {dimension: ['2', 'AA', 'RSW'], metric: ['2439']},
            {dimension: ['3', 'AA', 'BNA'], metric: ['2436']},
            {dimension: ['4', 'AA', 'AUS'], metric: ['2434']},
            {dimension: ['1', 'DL', 'MKE'], metric: ['2430']},
            {dimension: ['3', 'OO', 'COS'], metric: ['2430']},
            {dimension: ['4', 'OO', 'PDX'], metric: ['2428']},
            {dimension: ['2', 'WN', 'ISP'], metric: ['2421']},
            {dimension: ['1', 'OO', 'FWA'], metric: ['2420']},
            {dimension: ['3', 'OO', 'ASE'], metric: ['2417']},
            {dimension: ['3', 'EV', 'BTR'], metric: ['2415']},
            {dimension: ['1', 'UA', 'HNL'], metric: ['2410']},
            {dimension: ['2', 'B6', 'BUF'], metric: ['2409']},
            {dimension: ['3', 'OO', 'SJC'], metric: ['2399']},
            {dimension: ['2', 'WN', 'MHT'], metric: ['2391']},
            {dimension: ['1', 'WN', 'ALB'], metric: ['2389']},
            {dimension: ['3', 'OO', 'CVG'], metric: ['2379']},
            {dimension: ['2', 'OO', 'SBN'], metric: ['2377']},
            {dimension: ['3', 'DL', 'MKE'], metric: ['2374']},
            {dimension: ['3', 'UA', 'HNL'], metric: ['2366']},
            {dimension: ['3', 'OH', 'PHL'], metric: ['2364']},
            {dimension: ['2', '9E', 'MSP'], metric: ['2362']},
            {dimension: ['2', 'OO', 'SBA'], metric: ['2360']},
            {dimension: ['2', 'DL', 'JAX'], metric: ['2350']},
            {dimension: ['4', 'UA', 'LGA'], metric: ['2345']},
            {dimension: ['1', 'DL', 'EWR'], metric: ['2341']},
            {dimension: ['2', 'WN', 'TUL'], metric: ['2340']},
            {dimension: ['2', 'WN', 'ALB'], metric: ['2337']},
            {dimension: ['1', 'WN', 'TUL'], metric: ['2336']},
            {dimension: ['4', 'AA', 'RDU'], metric: ['2335']},
            {dimension: ['1', 'NK', 'MSP'], metric: ['2325']},
            {dimension: ['1', 'UA', 'CLE'], metric: ['2322']},
            {dimension: ['2', 'DL', 'MEM'], metric: ['2320']},
            {dimension: ['2', 'AA', 'PBI'], metric: ['2315']},
            {dimension: ['3', 'OO', 'MKE'], metric: ['2311']},
            {dimension: ['4', 'NK', 'DTW'], metric: ['2310']},
            {dimension: ['2', 'WN', 'SDF'], metric: ['2307']},
            {dimension: ['2', 'AA', 'SLC'], metric: ['2304']},
            {dimension: ['4', 'NK', 'ORD'], metric: ['2304']},
            {dimension: ['2', 'DL', 'BDL'], metric: ['2297']},
            {dimension: ['2', 'AA', 'BDL'], metric: ['2296']},
            {dimension: ['3', 'OO', 'DFW'], metric: ['2292']},
            {dimension: ['2', 'NK', 'MSY'], metric: ['2283']},
            {dimension: ['3', 'B6', 'LAS'], metric: ['2283']},
            {dimension: ['4', 'B6', 'EWR'], metric: ['2280']},
            {dimension: ['2', 'EV', 'DTW'], metric: ['2271']},
            {dimension: ['1', 'UA', 'ATL'], metric: ['2271']},
            {dimension: ['1', 'AS', 'SJC'], metric: ['2261']},
            {dimension: ['2', 'NK', 'MSP'], metric: ['2254']},
            {dimension: ['1', 'AA', 'BDL'], metric: ['2251']},
            {dimension: ['2', 'AS', 'JNU'], metric: ['2248']},
            {dimension: ['2', 'G4', 'LAS'], metric: ['2248']},
            {dimension: ['1', 'WN', 'ISP'], metric: ['2247']},
            {dimension: ['2', 'YX', 'CLT'], metric: ['2247']},
            {dimension: ['3', 'OO', 'FWA'], metric: ['2243']},
            {dimension: ['3', 'AS', 'JNU'], metric: ['2234']},
            {dimension: ['4', 'AA', 'SAN'], metric: ['2233']},
            {dimension: ['4', 'DL', 'MIA'], metric: ['2232']},
            {dimension: ['3', 'UA', 'ATL'], metric: ['2232']},
            {dimension: ['2', 'OO', 'BUR'], metric: ['2228']},
            {dimension: ['2', 'WN', 'SJU'], metric: ['2225']},
            {dimension: ['3', 'YX', 'IAH'], metric: ['2224']},
            {dimension: ['2', 'OO', 'PSP'], metric: ['2213']},
            {dimension: ['3', 'UA', 'DCA'], metric: ['2211']},
            {dimension: ['2', 'OO', 'CVG'], metric: ['2211']},
            {dimension: ['1', 'VX', 'LAS'], metric: ['2202']},
            {dimension: ['3', 'AS', 'SJC'], metric: ['2195']},
            {dimension: ['3', 'AA', 'MCI'], metric: ['2185']},
            {dimension: ['4', 'DL', 'DCA'], metric: ['2182']},
            {dimension: ['3', 'NK', 'BOS'], metric: ['2180']},
            {dimension: ['4', 'EV', 'CLE'], metric: ['2175']},
            {dimension: ['4', 'WN', 'PHL'], metric: ['2173']},
            {dimension: ['2', 'YX', 'PIT'], metric: ['2171']},
            {dimension: ['1', 'VX', 'JFK'], metric: ['2171']},
            {dimension: ['3', 'B6', 'BUF'], metric: ['2163']},
            {dimension: ['1', 'DL', 'JAX'], metric: ['2159']},
            {dimension: ['2', 'UA', 'DCA'], metric: ['2157']},
            {dimension: ['3', 'AA', 'PDX'], metric: ['2145']},
            {dimension: ['3', 'UA', 'MSP'], metric: ['2143']},
            {dimension: ['1', 'DL', 'IND'], metric: ['2142']},
            {dimension: ['1', 'G4', 'LAS'], metric: ['2137']},
            {dimension: ['4', 'OO', 'SAN'], metric: ['2132']},
            {dimension: ['1', 'WN', 'TUS'], metric: ['2124']},
            {dimension: ['2', 'OO', 'OKC'], metric: ['2124']},
            {dimension: ['4', 'NK', 'LAX'], metric: ['2123']},
            {dimension: ['1', 'MQ', 'MIA'], metric: ['2122']},
            {dimension: ['1', 'OO', 'BUR'], metric: ['2121']},
            {dimension: ['1', 'OO', 'SBN'], metric: ['2117']},
            {dimension: ['2', 'AA', 'SMF'], metric: ['2116']},
            {dimension: ['3', 'YX', 'CMH'], metric: ['2113']},
            {dimension: ['2', 'AA', 'PDX'], metric: ['2102']},
            {dimension: ['1', 'AS', 'LAS'], metric: ['2097']},
            {dimension: ['4', 'OO', 'IAH'], metric: ['2097']},
            {dimension: ['2', 'UA', 'PHL'], metric: ['2091']},
            {dimension: ['3', 'OO', 'SBN'], metric: ['2091']},
            {dimension: ['2', 'F9', 'CVG'], metric: ['2089']},
            {dimension: ['2', 'YX', 'DTW'], metric: ['2086']},
            {dimension: ['4', 'HA', 'KOA'], metric: ['2085']},
            {dimension: ['4', 'HA', 'LIH'], metric: ['2085']},
            {dimension: ['3', 'NK', 'MSY'], metric: ['2085']},
            {dimension: ['4', 'F9', 'LAS'], metric: ['2084']},
            {dimension: ['2', 'WN', 'BHM'], metric: ['2083']},
            {dimension: ['3', 'UA', 'MSY'], metric: ['2082']},
            {dimension: ['3', 'WN', 'JAX'], metric: ['2077']},
            {dimension: ['2', 'AA', 'SJC'], metric: ['2076']},
            {dimension: ['3', 'AA', 'SJU'], metric: ['2070']},
            {dimension: ['1', 'B6', 'BUF'], metric: ['2069']},
            {dimension: ['2', 'DL', 'CHS'], metric: ['2068']},
            {dimension: ['4', 'AA', 'SEA'], metric: ['2067']},
            {dimension: ['2', 'UA', 'MSP'], metric: ['2067']},
            {dimension: ['3', 'DL', 'STL'], metric: ['2064']},
            {dimension: ['3', 'DL', 'JAX'], metric: ['2060']},
            {dimension: ['1', 'WN', 'BHM'], metric: ['2055']},
            {dimension: ['2', 'NK', 'DEN'], metric: ['2052']},
            {dimension: ['1', 'DL', 'MEM'], metric: ['2046']},
            {dimension: ['3', 'WN', 'SDF'], metric: ['2044']},
            {dimension: ['2', 'WN', 'BOI'], metric: ['2043']},
            {dimension: ['4', 'WN', 'MSP'], metric: ['2042']},
            {dimension: ['4', 'B6', 'PBI'], metric: ['2037']},
            {dimension: ['2', 'DL', 'SNA'], metric: ['2037']},
            {dimension: ['4', 'WN', 'RNO'], metric: ['2035']},
            {dimension: ['3', 'WN', 'TUL'], metric: ['2035']},
            {dimension: ['1', 'YX', 'PIT'], metric: ['2032']},
            {dimension: ['1', 'WN', 'JAX'], metric: ['2026']},
            {dimension: ['3', 'B6', 'TPA'], metric: ['2022']},
            {dimension: ['2', 'DL', 'PIT'], metric: ['2019']},
            {dimension: ['3', 'MQ', 'MIA'], metric: ['2017']},
            {dimension: ['3', 'AA', 'SLC'], metric: ['2017']},
            {dimension: ['2', 'G4', 'PIE'], metric: ['2014']},
            {dimension: ['1', 'NK', 'MSY'], metric: ['2011']},
            {dimension: ['2', 'WN', 'TUS'], metric: ['2009']},
            {dimension: ['2', 'NK', 'LGA'], metric: ['2000']},
            {dimension: ['4', 'DL', 'ORD'], metric: ['2000']},
            {dimension: ['3', '9E', 'MSP'], metric: ['1994']},
            {dimension: ['2', 'B6', 'HPN'], metric: ['1994']},
            {dimension: ['2', 'OO', 'ONT'], metric: ['1987']},
            {dimension: ['3', 'YX', 'IND'], metric: ['1987']},
            {dimension: ['1', 'DL', 'STL'], metric: ['1985']},
            {dimension: ['1', 'UA', 'RSW'], metric: ['1981']},
            {dimension: ['1', 'B6', 'HPN'], metric: ['1980']},
            {dimension: ['1', 'NK', 'LGA'], metric: ['1980']},
            {dimension: ['1', 'WN', 'MHT'], metric: ['1970']},
            {dimension: ['2', 'DL', 'SJC'], metric: ['1969']},
            {dimension: ['1', 'DL', 'BDL'], metric: ['1965']},
            {dimension: ['4', 'UA', 'AUS'], metric: ['1962']},
            {dimension: ['4', 'UA', 'PDX'], metric: ['1957']},
            {dimension: ['3', 'WN', 'MHT'], metric: ['1952']},
            {dimension: ['1', 'EV', 'DCA'], metric: ['1951']},
            {dimension: ['4', 'UA', 'PHX'], metric: ['1951']},
            {dimension: ['3', 'YX', 'CLT'], metric: ['1950']},
            {dimension: ['3', 'DL', 'MEM'], metric: ['1949']},
            {dimension: ['4', 'NK', 'DFW'], metric: ['1941']},
            {dimension: ['2', 'NK', 'TPA'], metric: ['1941']},
            {dimension: ['2', 'OO', 'SBP'], metric: ['1938']},
            {dimension: ['1', 'EV', 'SHV'], metric: ['1938']},
            {dimension: ['1', 'OH', 'PHL'], metric: ['1937']},
            {dimension: ['2', 'AA', 'IND'], metric: ['1937']},
            {dimension: ['2', 'DL', 'GRR'], metric: ['1936']},
            {dimension: ['1', 'UA', 'DCA'], metric: ['1934']},
            {dimension: ['1', 'WN', 'SJU'], metric: ['1934']},
            {dimension: ['3', 'DL', 'BDL'], metric: ['1930']},
            {dimension: ['2', 'F9', 'ATL'], metric: ['1929']},
            {dimension: ['1', 'WN', 'SDF'], metric: ['1929']},
            {dimension: ['3', 'NK', 'MSP'], metric: ['1921']},
            {dimension: ['2', 'OO', 'OMA'], metric: ['1921']},
            {dimension: ['2', 'OO', 'CID'], metric: ['1917']},
            {dimension: ['2', 'AS', 'SNA'], metric: ['1916']},
            {dimension: ['1', 'EV', 'TYS'], metric: ['1916']},
            {dimension: ['1', 'G4', 'PIE'], metric: ['1912']},
            {dimension: ['4', 'AA', 'EWR'], metric: ['1910']},
            {dimension: ['4', 'AS', 'LAX'], metric: ['1909']},
            {dimension: ['1', 'DL', 'SNA'], metric: ['1909']},
            {dimension: ['3', 'DL', 'RSW'], metric: ['1906']},
            {dimension: ['2', 'OO', 'MSN'], metric: ['1905']},
            {dimension: ['2', 'B6', 'JAX'], metric: ['1905']},
            {dimension: ['3', 'OO', 'SBA'], metric: ['1903']},
            {dimension: ['4', 'DL', 'AUS'], metric: ['1902']},
            {dimension: ['1', 'AS', 'JNU'], metric: ['1901']},
            {dimension: ['3', 'AA', 'SJC'], metric: ['1899']},
            {dimension: ['1', 'AA', 'JAX'], metric: ['1893']},
            {dimension: ['4', 'AA', 'MSP'], metric: ['1889']},
            {dimension: ['3', 'OO', 'BUR'], metric: ['1886']},
            {dimension: ['1', 'VX', 'DAL'], metric: ['1883']},
            {dimension: ['1', 'AA', 'SMF'], metric: ['1882']},
            {dimension: ['2', 'DL', 'CMH'], metric: ['1882']},
            {dimension: ['1', 'B6', 'BDL'], metric: ['1879']},
            {dimension: ['2', 'AA', 'JAX'], metric: ['1877']},
            {dimension: ['2', 'DL', 'SAT'], metric: ['1877']},
            {dimension: ['3', 'AA', 'BDL'], metric: ['1875']},
            {dimension: ['4', 'AA', 'MSY'], metric: ['1871']},
            {dimension: ['2', 'WN', 'GEG'], metric: ['1863']},
            {dimension: ['3', 'WN', 'BOI'], metric: ['1861']},
            {dimension: ['1', 'AS', 'SNA'], metric: ['1860']},
            {dimension: ['3', 'WN', 'ISP'], metric: ['1860']},
            {dimension: ['4', 'NK', 'BWI'], metric: ['1859']},
            {dimension: ['3', 'WN', 'RSW'], metric: ['1857']},
            {dimension: ['4', 'NK', 'ATL'], metric: ['1846']},
            {dimension: ['3', 'OO', 'LGA'], metric: ['1845']},
            {dimension: ['4', 'OO', 'FAT'], metric: ['1841']},
            {dimension: ['2', 'OO', 'ASE'], metric: ['1841']},
            {dimension: ['1', 'NK', 'ACY'], metric: ['1839']},
            {dimension: ['3', 'UA', 'PHL'], metric: ['1837']},
            {dimension: ['3', 'AA', 'SMF'], metric: ['1834']},
            {dimension: ['3', 'WN', 'SJU'], metric: ['1830']},
            {dimension: ['1', 'WN', 'BOI'], metric: ['1825']},
            {dimension: ['2', 'B6', 'BDL'], metric: ['1822']},
            {dimension: ['2', 'DL', 'SAV'], metric: ['1820']},
            {dimension: ['1', 'AA', 'IND'], metric: ['1818']},
            {dimension: ['3', 'YX', 'MIA'], metric: ['1818']},
            {dimension: ['3', 'F9', 'PHL'], metric: ['1816']},
            {dimension: ['4', 'DL', 'PDX'], metric: ['1814']},
            {dimension: ['2', 'EV', 'DCA'], metric: ['1814']},
            {dimension: ['2', 'UA', 'RDU'], metric: ['1811']},
            {dimension: ['1', 'DL', 'SAT'], metric: ['1804']},
            {dimension: ['4', 'DL', 'CVG'], metric: ['1803']},
            {dimension: ['3', 'F9', 'CVG'], metric: ['1802']},
            {dimension: ['3', 'DL', 'PIT'], metric: ['1798']},
            {dimension: ['3', '9E', 'CVG'], metric: ['1798']},
            {dimension: ['1', 'B6', 'JAX'], metric: ['1796']},
            {dimension: ['3', 'DL', 'SJC'], metric: ['1793']},
            {dimension: ['3', 'OO', 'OKC'], metric: ['1788']},
            {dimension: ['2', 'UA', 'SAT'], metric: ['1788']},
            {dimension: ['2', 'EV', 'SHV'], metric: ['1773']},
            {dimension: ['1', 'OO', 'CVG'], metric: ['1772']},
            {dimension: ['1', 'OO', 'ONT'], metric: ['1771']},
            {dimension: ['4', 'WN', 'PVD'], metric: ['1769']},
            {dimension: ['4', 'DL', 'MSY'], metric: ['1764']},
            {dimension: ['2', 'OO', 'RDM'], metric: ['1763']},
            {dimension: ['3', 'OO', 'SNA'], metric: ['1762']},
            {dimension: ['3', 'WN', 'ALB'], metric: ['1762']},
            {dimension: ['4', 'UA', 'DFW'], metric: ['1761']},
            {dimension: ['3', 'OO', 'RDM'], metric: ['1760']},
            {dimension: ['4', 'WN', 'ELP'], metric: ['1757']},
            {dimension: ['3', 'OO', 'RAP'], metric: ['1755']},
            {dimension: ['2', 'WN', 'MEM'], metric: ['1755']},
            {dimension: ['1', 'UA', 'PHL'], metric: ['1755']},
            {dimension: ['1', 'AA', 'SJC'], metric: ['1750']},
            {dimension: ['1', 'DL', 'CHS'], metric: ['1749']},
            {dimension: ['4', 'DL', 'BWI'], metric: ['1747']},
            {dimension: ['4', 'DL', 'PHL'], metric: ['1744']},
            {dimension: ['3', 'WN', 'BHM'], metric: ['1744']},
            {dimension: ['4', 'DL', 'PHX'], metric: ['1739']},
            {dimension: ['1', 'NK', 'DEN'], metric: ['1730']},
            {dimension: ['3', 'UA', 'RDU'], metric: ['1725']},
            {dimension: ['1', 'DL', 'SJC'], metric: ['1723']},
            {dimension: ['3', 'NK', 'DEN'], metric: ['1723']},
            {dimension: ['4', 'AA', 'STL'], metric: ['1723']},
            {dimension: ['1', 'DL', 'PIT'], metric: ['1720']},
            {dimension: ['3', 'DL', 'SNA'], metric: ['1720']},
            {dimension: ['4', 'WN', 'DTW'], metric: ['1719']},
            {dimension: ['3', 'OO', 'CID'], metric: ['1718']},
            {dimension: ['2', 'OO', 'LGA'], metric: ['1717']},
            {dimension: ['2', 'AS', 'EWR'], metric: ['1715']},
            {dimension: ['1', 'AA', 'PDX'], metric: ['1715']},
            {dimension: ['3', 'DL', 'CHS'], metric: ['1715']},
            {dimension: ['4', 'DL', 'MCI'], metric: ['1714']},
            {dimension: ['1', 'OO', 'PSC'], metric: ['1712']},
            {dimension: ['1', 'EV', 'MOB'], metric: ['1710']},
            {dimension: ['3', 'WN', 'GEG'], metric: ['1705']},
            {dimension: ['2', 'NK', 'ACY'], metric: ['1703']},
            {dimension: ['4', 'WN', 'CLE'], metric: ['1703']},
            {dimension: ['3', 'EV', 'RIC'], metric: ['1701']},
            {dimension: ['1', 'UA', 'SAT'], metric: ['1698']},
            {dimension: ['1', 'YX', 'DTW'], metric: ['1695']},
            {dimension: ['4', 'OO', 'SJC'], metric: ['1695']},
            {dimension: ['3', 'NK', 'LGA'], metric: ['1694']},
            {dimension: ['1', 'OO', 'SBP'], metric: ['1693']},
            {dimension: ['2', 'AS', 'FAI'], metric: ['1689']},
            {dimension: ['2', 'OO', 'SNA'], metric: ['1688']},
            {dimension: ['3', 'DL', 'SAT'], metric: ['1688']},
            {dimension: ['2', 'OH', 'DAY'], metric: ['1684']},
            {dimension: ['2', 'B6', 'RDU'], metric: ['1680']},
            {dimension: ['4', 'OO', 'BNA'], metric: ['1679']},
            {dimension: ['1', 'F9', 'TPA'], metric: ['1679']},
            {dimension: ['1', 'WN', 'GEG'], metric: ['1677']},
            {dimension: ['1', 'WN', 'PBI'], metric: ['1675']},
            {dimension: ['1', 'UA', 'MSP'], metric: ['1673']},
            {dimension: ['2', 'F9', 'AUS'], metric: ['1673']},
            {dimension: ['2', 'OO', 'MCI'], metric: ['1672']},
            {dimension: ['2', 'NK', 'OAK'], metric: ['1672']},
            {dimension: ['1', 'F9', 'PHX'], metric: ['1671']},
            {dimension: ['3', 'AA', 'IND'], metric: ['1671']},
            {dimension: ['3', 'AA', 'RSW'], metric: ['1671']},
            {dimension: ['3', 'G4', 'SFB'], metric: ['1667']},
            {dimension: ['4', 'WN', 'OKC'], metric: ['1666']},
            {dimension: ['2', 'EV', 'TYS'], metric: ['1665']},
            {dimension: ['3', 'DL', 'CMH'], metric: ['1663']},
            {dimension: ['3', 'B6', 'HPN'], metric: ['1663']},
            {dimension: ['1', 'AA', 'TUS'], metric: ['1658']},
            {dimension: ['3', 'UA', 'MIA'], metric: ['1655']},
            {dimension: ['3', 'OO', 'PSP'], metric: ['1654']},
            {dimension: ['1', 'WN', 'MEM'], metric: ['1654']},
            {dimension: ['4', 'DL', 'BNA'], metric: ['1652']},
            {dimension: ['2', 'OO', 'GRB'], metric: ['1652']},
            {dimension: ['4', 'UA', 'FLL'], metric: ['1648']},
            {dimension: ['2', 'AA', 'TUS'], metric: ['1645']},
            {dimension: ['2', 'WN', 'CHS'], metric: ['1645']},
            {dimension: ['2', 'DL', 'BHM'], metric: ['1641']},
            {dimension: ['2', 'UA', 'BWI'], metric: ['1640']},
            {dimension: ['2', 'DL', 'RIC'], metric: ['1638']},
            {dimension: ['1', 'YX', 'BOS'], metric: ['1633']},
            {dimension: ['3', 'OO', 'ONT'], metric: ['1633']},
            {dimension: ['1', 'F9', 'PHL'], metric: ['1631']},
            {dimension: ['2', '9E', 'RDU'], metric: ['1630']},
            {dimension: ['4', 'AA', 'IAH'], metric: ['1625']},
            {dimension: ['4', 'AA', 'SAT'], metric: ['1624']},
            {dimension: ['4', 'UA', 'TPA'], metric: ['1616']},
            {dimension: ['4', 'WN', 'EWR'], metric: ['1616']},
            {dimension: ['1', 'DL', 'HNL'], metric: ['1615']},
            {dimension: ['2', 'F9', 'CLE'], metric: ['1615']},
            {dimension: ['4', 'DL', 'SAN'], metric: ['1613']},
            {dimension: ['3', 'OO', 'MSN'], metric: ['1612']},
            {dimension: ['4', 'UA', 'SNA'], metric: ['1612']},
            {dimension: ['3', 'WN', 'TUS'], metric: ['1609']},
            {dimension: ['1', 'F9', 'RSW'], metric: ['1607']},
            {dimension: ['4', 'AA', 'PIT'], metric: ['1607']},
            {dimension: ['4', 'WN', 'OMA'], metric: ['1606']},
            {dimension: ['2', 'OO', 'MFR'], metric: ['1605']},
            {dimension: ['3', 'AS', 'SNA'], metric: ['1603']},
            {dimension: ['3', 'B6', 'JAX'], metric: ['1602']},
            {dimension: ['3', 'NK', 'OAK'], metric: ['1601']},
            {dimension: ['2', 'MQ', 'JFK'], metric: ['1601']},
            {dimension: ['4', 'NK', 'IAH'], metric: ['1600']},
            {dimension: ['2', 'NK', 'PHL'], metric: ['1595']},
            {dimension: ['2', 'AS', 'OGG'], metric: ['1591']},
            {dimension: ['2', 'DL', 'IAH'], metric: ['1590']},
            {dimension: ['3', 'F9', 'ATL'], metric: ['1587']},
            {dimension: ['2', 'DL', 'ORF'], metric: ['1587']},
            {dimension: ['2', 'DL', 'HNL'], metric: ['1581']},
            {dimension: ['3', 'DL', 'GRR'], metric: ['1577']},
            {dimension: ['4', 'DL', 'DFW'], metric: ['1577']},
            {dimension: ['4', 'WN', 'BDL'], metric: ['1576']},
            {dimension: ['2', 'OO', 'LAS'], metric: ['1568']},
            {dimension: ['2', 'OO', 'RAP'], metric: ['1567']},
            {dimension: ['2', 'NK', 'EWR'], metric: ['1567']},
            {dimension: ['3', 'DL', 'SAV'], metric: ['1564']},
            {dimension: ['3', 'UA', 'BWI'], metric: ['1562']},
            {dimension: ['1', 'DL', 'GRR'], metric: ['1559']},
            {dimension: ['4', 'B6', 'LAX'], metric: ['1558']},
            {dimension: ['4', 'B6', 'LGA'], metric: ['1556']},
            {dimension: ['3', 'B6', 'BDL'], metric: ['1556']},
            {dimension: ['4', 'HA', 'ITO'], metric: ['1554']},
            {dimension: ['2', '9E', 'BOS'], metric: ['1551']},
            {dimension: ['3', 'UA', 'SAT'], metric: ['1550']},
            {dimension: ['3', 'F9', 'CLE'], metric: ['1549']},
            {dimension: ['1', 'AS', 'OGG'], metric: ['1549']},
            {dimension: ['2', 'DL', 'CLE'], metric: ['1547']},
            {dimension: ['2', 'B6', 'CHS'], metric: ['1545']},
            {dimension: ['4', 'AA', 'BWI'], metric: ['1541']},
            {dimension: ['1', 'AS', 'PHX'], metric: ['1537']},
            {dimension: ['3', 'G4', 'LAS'], metric: ['1535']},
            {dimension: ['3', 'AA', 'PBI'], metric: ['1534']},
            {dimension: ['4', 'AA', 'FLL'], metric: ['1533']},
            {dimension: ['4', 'B6', 'SFO'], metric: ['1532']},
            {dimension: ['2', 'UA', 'SMF'], metric: ['1531']},
            {dimension: ['4', 'DL', 'CLT'], metric: ['1530']},
            {dimension: ['2', 'AA', 'IAD'], metric: ['1530']},
            {dimension: ['2', 'OO', 'DAY'], metric: ['1529']},
            {dimension: ['1', 'DL', 'CMH'], metric: ['1527']},
            {dimension: ['1', 'OO', 'OMA'], metric: ['1527']},
            {dimension: ['2', 'WN', 'MAF'], metric: ['1525']},
            {dimension: ['2', 'OO', 'ICT'], metric: ['1525']},
            {dimension: ['3', 'YX', 'DTW'], metric: ['1522']},
            {dimension: ['4', 'AS', 'SAN'], metric: ['1515']},
            {dimension: ['2', 'AA', 'TUL'], metric: ['1514']},
            {dimension: ['4', 'DL', 'RDU'], metric: ['1513']},
            {dimension: ['2', 'WN', 'ORF'], metric: ['1512']},
            {dimension: ['2', 'AA', 'HNL'], metric: ['1512']},
            {dimension: ['1', 'G4', 'AZA'], metric: ['1509']},
            {dimension: ['1', 'UA', 'PBI'], metric: ['1508']},
            {dimension: ['3', 'DL', 'CLE'], metric: ['1506']},
            {dimension: ['3', 'EV', 'TYS'], metric: ['1505']},
            {dimension: ['4', 'B6', 'SJU'], metric: ['1501']},
            {dimension: ['2', 'DL', 'MSN'], metric: ['1499']},
            {dimension: ['3', 'UA', 'SMF'], metric: ['1498']},
            {dimension: ['2', 'AA', 'CLE'], metric: ['1498']},
            {dimension: ['2', 'YX', 'BOS'], metric: ['1497']},
            {dimension: ['1', 'WN', 'MAF'], metric: ['1497']},
            {dimension: ['1', 'OO', 'RDM'], metric: ['1494']},
            {dimension: ['1', 'OO', 'OKC'], metric: ['1492']},
            {dimension: ['2', 'OO', 'SGU'], metric: ['1492']},
            {dimension: ['1', 'G4', 'PGD'], metric: ['1491']},
            {dimension: ['4', 'UA', 'MSY'], metric: ['1490']},
            {dimension: ['3', 'OO', 'MFR'], metric: ['1489']},
            {dimension: ['1', 'DL', 'BHM'], metric: ['1488']},
            {dimension: ['3', 'OO', 'ICT'], metric: ['1488']},
            {dimension: ['4', 'UA', 'ATL'], metric: ['1483']},
            {dimension: ['1', 'UA', 'RDU'], metric: ['1481']},
            {dimension: ['4', 'EV', 'RIC'], metric: ['1481']},
            {dimension: ['1', 'OO', 'RNO'], metric: ['1481']},
            {dimension: ['2', 'NK', 'CLE'], metric: ['1478']},
            {dimension: ['1', 'DL', 'RIC'], metric: ['1478']},
            {dimension: ['1', 'OO', 'CID'], metric: ['1477']},
            {dimension: ['4', 'DL', 'PBI'], metric: ['1476']},
            {dimension: ['4', 'OO', 'TUS'], metric: ['1476']},
            {dimension: ['2', 'B6', 'BWI'], metric: ['1471']},
            {dimension: ['1', 'EV', 'BHM'], metric: ['1471']},
            {dimension: ['4', 'AA', 'SNA'], metric: ['1470']},
            {dimension: ['2', 'OO', 'PSC'], metric: ['1467']},
            {dimension: ['3', 'OO', 'SBP'], metric: ['1466']},
            {dimension: ['2', 'OO', 'MRY'], metric: ['1462']},
            {dimension: ['1', 'EV', 'STL'], metric: ['1461']},
            {dimension: ['1', 'DL', 'SAV'], metric: ['1461']},
            {dimension: ['2', 'EV', 'CLT'], metric: ['1460']},
            {dimension: ['1', 'F9', 'ORD'], metric: ['1460']},
            {dimension: ['2', 'DL', 'SDF'], metric: ['1459']},
            {dimension: ['1', 'NK', 'MYR'], metric: ['1459']},
            {dimension: ['4', 'WN', 'RSW'], metric: ['1457']},
            {dimension: ['3', 'DL', 'ANC'], metric: ['1456']},
            {dimension: ['1', 'DL', 'IAH'], metric: ['1454']},
            {dimension: ['4', 'OO', 'SMF'], metric: ['1453']},
            {dimension: ['3', 'AS', 'FAI'], metric: ['1452']},
            {dimension: ['1', 'F9', 'MIA'], metric: ['1452']},
            {dimension: ['3', 'DL', 'BHM'], metric: ['1450']},
            {dimension: ['4', 'AA', 'BNA'], metric: ['1445']},
            {dimension: ['1', 'B6', 'BWI'], metric: ['1444']},
            {dimension: ['3', 'OO', 'OMA'], metric: ['1443']},
            {dimension: ['1', 'F9', 'ATL'], metric: ['1436']},
            {dimension: ['1', 'WN', 'GRR'], metric: ['1433']},
            {dimension: ['1', 'OH', 'DAY'], metric: ['1432']},
            {dimension: ['1', '9E', 'RDU'], metric: ['1427']},
            {dimension: ['4', 'AA', 'DTW'], metric: ['1426']},
            {dimension: ['2', 'EV', 'XNA'], metric: ['1425']},
            {dimension: ['2', 'AS', 'PHX'], metric: ['1423']},
            {dimension: ['3', 'WN', 'CHS'], metric: ['1417']},
            {dimension: ['1', 'AA', 'CLE'], metric: ['1417']},
            {dimension: ['4', 'WN', 'BUF'], metric: ['1417']},
            {dimension: ['1', 'OO', 'MFR'], metric: ['1413']},
            {dimension: ['2', 'F9', 'ORD'], metric: ['1413']},
            {dimension: ['2', 'OO', 'ABQ'], metric: ['1412']},
            {dimension: ['1', 'B6', 'RDU'], metric: ['1407']},
            {dimension: ['3', 'NK', 'PHL'], metric: ['1406']},
            {dimension: ['2', 'AA', 'MEM'], metric: ['1405']},
            {dimension: ['1', 'VX', 'SEA'], metric: ['1403']},
            {dimension: ['3', 'OO', 'LAS'], metric: ['1401']},
            {dimension: ['2', 'AS', 'ORD'], metric: ['1398']},
            {dimension: ['2', 'OO', 'EUG'], metric: ['1398']},
            {dimension: ['1', 'OO', 'SGU'], metric: ['1397']},
            {dimension: ['4', 'AS', 'SFO'], metric: ['1397']},
            {dimension: ['1', 'NK', 'PHL'], metric: ['1397']},
            {dimension: ['2', 'WN', 'CLT'], metric: ['1395']},
            {dimension: ['2', 'UA', 'RSW'], metric: ['1394']},
            {dimension: ['1', 'DL', 'ORF'], metric: ['1391']},
            {dimension: ['3', 'NK', 'ACY'], metric: ['1390']},
            {dimension: ['3', 'NK', 'EWR'], metric: ['1389']},
            {dimension: ['1', 'NK', 'EWR'], metric: ['1387']},
            {dimension: ['3', 'B6', 'RDU'], metric: ['1386']},
            {dimension: ['4', 'UA', 'DCA'], metric: ['1386']},
            {dimension: ['3', 'AS', 'EWR'], metric: ['1384']},
            {dimension: ['2', 'YX', 'RDU'], metric: ['1383']},
            {dimension: ['1', 'AA', 'ONT'], metric: ['1383']},
            {dimension: ['2', 'DL', 'IAD'], metric: ['1381']},
            {dimension: ['1', 'EV', 'MSP'], metric: ['1381']},
            {dimension: ['3', 'WN', 'MEM'], metric: ['1379']},
            {dimension: ['2', 'OO', 'RNO'], metric: ['1378']},
            {dimension: ['1', 'AA', 'TUL'], metric: ['1377']},
            {dimension: ['2', 'DL', 'GSP'], metric: ['1377']},
            {dimension: ['3', 'AA', 'MEM'], metric: ['1376']},
            {dimension: ['3', 'OO', 'MCI'], metric: ['1376']},
            {dimension: ['3', 'DL', 'IAD'], metric: ['1374']},
            {dimension: ['3', 'EV', 'DTW'], metric: ['1372']},
            {dimension: ['2', 'UA', 'OGG'], metric: ['1371']},
            {dimension: ['3', 'DL', 'IAH'], metric: ['1371']},
            {dimension: ['1', 'OO', 'AUS'], metric: ['1368']},
            {dimension: ['3', 'AA', 'HNL'], metric: ['1365']},
            {dimension: ['4', 'B6', 'RSW'], metric: ['1364']},
            {dimension: ['3', 'F9', 'AUS'], metric: ['1361']},
            {dimension: ['3', 'B6', 'RSW'], metric: ['1360']},
            {dimension: ['4', 'DL', 'STL'], metric: ['1360']},
            {dimension: ['1', '9E', 'BOS'], metric: ['1357']},
            {dimension: ['3', 'B6', 'CHS'], metric: ['1352']},
            {dimension: ['2', 'AS', 'BOS'], metric: ['1352']},
            {dimension: ['1', 'DL', 'SDF'], metric: ['1352']},
            {dimension: ['1', 'UA', 'SLC'], metric: ['1351']},
            {dimension: ['1', 'B6', 'SLC'], metric: ['1350']},
            {dimension: ['2', 'B6', 'RIC'], metric: ['1350']},
            {dimension: ['2', 'OO', 'GJT'], metric: ['1350']},
            {dimension: ['2', 'AA', 'ONT'], metric: ['1349']},
            {dimension: ['1', 'WN', 'ORF'], metric: ['1349']},
            {dimension: ['4', 'OO', 'FWA'], metric: ['1349']},
            {dimension: ['4', 'OO', 'COS'], metric: ['1347']},
            {dimension: ['1', 'DL', 'CLE'], metric: ['1347']},
            {dimension: ['1', 'UA', 'OGG'], metric: ['1346']},
            {dimension: ['2', 'AS', 'HNL'], metric: ['1345']},
            {dimension: ['2', 'AS', 'JFK'], metric: ['1344']},
            {dimension: ['3', 'G4', 'PIE'], metric: ['1341']},
            {dimension: ['2', 'OO', 'PIA'], metric: ['1338']},
            {dimension: ['3', 'OO', 'ABQ'], metric: ['1337']},
            {dimension: ['2', 'DL', 'PNS'], metric: ['1337']},
            {dimension: ['3', 'OO', 'TVC'], metric: ['1336']},
            {dimension: ['2', 'G4', 'PGD'], metric: ['1336']},
            {dimension: ['2', 'B6', 'SLC'], metric: ['1331']},
            {dimension: ['1', 'YX', 'ATL'], metric: ['1330']},
            {dimension: ['2', 'WN', 'PBI'], metric: ['1327']},
            {dimension: ['1', 'MQ', 'CMH'], metric: ['1326']},
            {dimension: ['3', 'AA', 'TUL'], metric: ['1322']},
            {dimension: ['3', 'DL', 'RIC'], metric: ['1322']},
            {dimension: ['3', 'NK', 'CLE'], metric: ['1322']},
            {dimension: ['1', 'OO', 'STL'], metric: ['1322']},
            {dimension: ['4', 'DL', 'EWR'], metric: ['1321']},
            {dimension: ['3', 'NK', 'TPA'], metric: ['1321']},
            {dimension: ['1', 'YX', 'BNA'], metric: ['1320']},
            {dimension: ['1', 'OO', 'ICT'], metric: ['1319']},
            {dimension: ['2', 'B6', 'ORD'], metric: ['1319']},
            {dimension: ['1', 'NK', 'CLE'], metric: ['1318']},
            {dimension: ['1', 'DL', 'OMA'], metric: ['1315']},
            {dimension: ['3', 'AA', 'TUS'], metric: ['1315']},
            {dimension: ['1', 'OO', 'SNA'], metric: ['1311']},
            {dimension: ['1', 'AA', 'HNL'], metric: ['1310']},
            {dimension: ['2', 'MQ', 'CMH'], metric: ['1309']},
            {dimension: ['2', 'DL', 'SRQ'], metric: ['1308']},
            {dimension: ['2', 'B6', 'ATL'], metric: ['1307']},
            {dimension: ['2', 'AA', 'CMH'], metric: ['1307']},
            {dimension: ['1', 'DL', 'SRQ'], metric: ['1306']},
            {dimension: ['2', 'DL', 'BUF'], metric: ['1306']},
            {dimension: ['3', 'EV', 'DCA'], metric: ['1305']},
            {dimension: ['3', 'AA', 'JAX'], metric: ['1301']},
            {dimension: ['3', 'AA', 'ONT'], metric: ['1301']},
            {dimension: ['1', 'WN', 'CLT'], metric: ['1300']},
            {dimension: ['1', 'OO', 'MRY'], metric: ['1300']},
            {dimension: ['2', 'DL', 'GSO'], metric: ['1300']},
            {dimension: ['3', 'F9', 'ORD'], metric: ['1296']},
            {dimension: ['2', 'G4', 'AZA'], metric: ['1290']},
            {dimension: ['3', 'WN', 'MAF'], metric: ['1289']},
            {dimension: ['3', 'DL', 'OMA'], metric: ['1289']},
            {dimension: ['1', 'AA', 'MEM'], metric: ['1286']},
            {dimension: ['3', 'DL', 'HNL'], metric: ['1286']},
            {dimension: ['2', 'DL', 'OMA'], metric: ['1282']},
            {dimension: ['1', 'OO', 'GEG'], metric: ['1279']},
            {dimension: ['1', 'AS', 'FAI'], metric: ['1279']},
            {dimension: ['2', 'OH', 'CVG'], metric: ['1278']},
            {dimension: ['3', 'AS', 'ORD'], metric: ['1275']},
            {dimension: ['3', 'DL', 'ORF'], metric: ['1274']},
            {dimension: ['2', 'OO', 'FSD'], metric: ['1273']},
            {dimension: ['3', 'OO', 'GEG'], metric: ['1273']},
            {dimension: ['4', 'B6', 'TPA'], metric: ['1272']},
            {dimension: ['3', 'B6', 'ORD'], metric: ['1272']},
            {dimension: ['2', 'DL', 'SMF'], metric: ['1268']},
            {dimension: ['3', 'WN', 'ORF'], metric: ['1266']},
            {dimension: ['3', 'YX', 'PIT'], metric: ['1265']},
            {dimension: ['1', 'DL', 'MSN'], metric: ['1265']},
            {dimension: ['1', 'OO', 'MCI'], metric: ['1264']},
            {dimension: ['1', 'OO', 'LAS'], metric: ['1264']},
            {dimension: ['2', 'WN', 'ECP'], metric: ['1261']},
            {dimension: ['3', 'WN', 'CLT'], metric: ['1261']},
            {dimension: ['2', 'OO', 'MBS'], metric: ['1260']},
            {dimension: ['4', 'B6', 'BUF'], metric: ['1259']},
            {dimension: ['1', 'F9', 'CVG'], metric: ['1257']},
            {dimension: ['4', 'B6', 'LAS'], metric: ['1256']},
            {dimension: ['2', 'F9', 'PHX'], metric: ['1255']},
            {dimension: ['1', 'YX', 'MSP'], metric: ['1254']},
            {dimension: ['2', 'NK', 'SEA'], metric: ['1252']},
            {dimension: ['1', 'UA', 'BWI'], metric: ['1252']},
            {dimension: ['4', 'OO', 'DFW'], metric: ['1249']},
            {dimension: ['2', 'YX', 'MSP'], metric: ['1249']},
            {dimension: ['1', 'B6', 'RIC'], metric: ['1246']},
            {dimension: ['2', 'DL', 'SJU'], metric: ['1246']},
            {dimension: ['1', 'EV', 'XNA'], metric: ['1245']},
            {dimension: ['4', 'UA', 'HNL'], metric: ['1245']},
            {dimension: ['3', 'OO', 'DLH'], metric: ['1245']},
            {dimension: ['2', 'F9', 'TTN'], metric: ['1245']},
            {dimension: ['4', 'DL', 'MKE'], metric: ['1242']},
            {dimension: ['4', 'DL', 'RSW'], metric: ['1242']},
            {dimension: ['1', 'OO', 'GRR'], metric: ['1240']},
            {dimension: ['2', 'UA', 'PBI'], metric: ['1239']},
            {dimension: ['1', 'EV', 'TUL'], metric: ['1238']},
            {dimension: ['3', 'OO', 'EUG'], metric: ['1238']},
            {dimension: ['4', 'NK', 'TPA'], metric: ['1236']},
            {dimension: ['2', 'OO', 'FAR'], metric: ['1236']},
            {dimension: ['1', 'DL', 'PNS'], metric: ['1236']},
            {dimension: ['2', 'B6', 'PHL'], metric: ['1235']},
            {dimension: ['3', 'UA', 'PIT'], metric: ['1230']},
            {dimension: ['1', 'DL', 'GSO'], metric: ['1229']},
            {dimension: ['2', 'WN', 'LBB'], metric: ['1228']},
            {dimension: ['1', 'OO', 'GRB'], metric: ['1227']},
            {dimension: ['3', 'OO', 'PIA'], metric: ['1226']},
            {dimension: ['3', 'OO', 'DAY'], metric: ['1226']},
            {dimension: ['1', 'DL', 'SJU'], metric: ['1226']},
            {dimension: ['1', 'OO', 'MSN'], metric: ['1225']},
            {dimension: ['4', 'AA', 'MCI'], metric: ['1225']},
            {dimension: ['3', 'UA', 'OGG'], metric: ['1222']},
            {dimension: ['1', 'AS', 'OAK'], metric: ['1222']},
            {dimension: ['2', 'OO', 'SDF'], metric: ['1220']},
            {dimension: ['3', 'EV', 'CLT'], metric: ['1218']},
            {dimension: ['3', 'OO', 'PSC'], metric: ['1218']},
            {dimension: ['2', 'WN', 'LIT'], metric: ['1218']},
            {dimension: ['2', 'AS', 'KTN'], metric: ['1216']},
            {dimension: ['3', 'WN', 'CVG'], metric: ['1216']},
            {dimension: ['3', 'AS', 'BOS'], metric: ['1216']},
            {dimension: ['2', 'AS', 'OAK'], metric: ['1213']},
            {dimension: ['2', 'EV', 'MSP'], metric: ['1213']},
            {dimension: ['3', 'OO', 'RNO'], metric: ['1213']},
            {dimension: ['1', 'OO', 'LAN'], metric: ['1213']},
            {dimension: ['3', 'DL', 'SMF'], metric: ['1212']},
            {dimension: ['1', 'DL', 'IAD'], metric: ['1212']},
            {dimension: ['3', 'EV', 'STL'], metric: ['1211']},
            {dimension: ['3', 'NK', 'SEA'], metric: ['1209']},
            {dimension: ['1', 'AS', 'SLC'], metric: ['1209']},
            {dimension: ['2', 'OO', 'DLH'], metric: ['1209']},
            {dimension: ['3', 'OO', 'RDU'], metric: ['1207']},
            {dimension: ['4', 'UA', 'CLE'], metric: ['1206']},
            {dimension: ['2', 'OO', 'CLT'], metric: ['1203']},
            {dimension: ['2', 'MQ', 'SGF'], metric: ['1202']},
            {dimension: ['1', 'WN', 'LBB'], metric: ['1202']},
            {dimension: ['1', 'AA', 'IAD'], metric: ['1200']},
            {dimension: ['4', 'AA', 'RSW'], metric: ['1199']},
            {dimension: ['1', 'AA', 'EGE'], metric: ['1195']},
            {dimension: ['3', 'AA', 'RIC'], metric: ['1194']},
            {dimension: ['2', 'DL', 'MDW'], metric: ['1194']},
            {dimension: ['3', 'OH', 'DAY'], metric: ['1194']},
            {dimension: ['1', 'B6', 'PHL'], metric: ['1193']},
            {dimension: ['1', 'DL', 'GSP'], metric: ['1192']},
            {dimension: ['3', 'AS', 'OGG'], metric: ['1191']},
            {dimension: ['2', 'EV', 'CHA'], metric: ['1189']},
            {dimension: ['4', 'WN', 'TUL'], metric: ['1187']},
            {dimension: ['3', 'AA', 'IAD'], metric: ['1185']},
            {dimension: ['2', 'OO', 'TUL'], metric: ['1185']},
            {dimension: ['4', 'UA', 'MIA'], metric: ['1184']},
            {dimension: ['4', 'NK', 'MSY'], metric: ['1184']},
            {dimension: ['1', 'B6', 'AUS'], metric: ['1183']},
            {dimension: ['2', 'NK', 'SAN'], metric: ['1180']},
            {dimension: ['3', 'OO', 'MBS'], metric: ['1180']},
            {dimension: ['4', 'DL', 'IND'], metric: ['1180']},
            {dimension: ['4', 'OO', 'MKE'], metric: ['1178']},
            {dimension: ['4', 'UA', 'PHL'], metric: ['1177']},
            {dimension: ['2', 'AA', 'PVD'], metric: ['1177']},
            {dimension: ['3', 'DL', 'SDF'], metric: ['1177']},
            {dimension: ['1', 'AA', 'CMH'], metric: ['1173']},
            {dimension: ['2', 'OO', 'IDA'], metric: ['1171']},
            {dimension: ['1', 'B6', 'CHS'], metric: ['1170']},
            {dimension: ['3', 'AS', 'HNL'], metric: ['1170']},
            {dimension: ['2', 'DL', 'LIT'], metric: ['1168']},
            {dimension: ['3', 'B6', 'RIC'], metric: ['1167']},
            {dimension: ['2', 'EV', 'STL'], metric: ['1166']},
            {dimension: ['2', 'VX', 'LAS'], metric: ['1166']},
            {dimension: ['4', 'AA', 'PBI'], metric: ['1166']},
            {dimension: ['4', 'AS', 'SJC'], metric: ['1163']},
            {dimension: ['2', 'EV', 'TUL'], metric: ['1161']},
            {dimension: ['3', 'EV', 'SHV'], metric: ['1158']},
            {dimension: ['1', 'OO', 'DLH'], metric: ['1158']},
            {dimension: ['1', 'UA', 'SMF'], metric: ['1157']},
            {dimension: ['2', 'OO', 'AUS'], metric: ['1157']},
            {dimension: ['2', 'OO', 'STL'], metric: ['1156']},
            {dimension: ['1', 'EV', 'CAE'], metric: ['1155']},
            {dimension: ['3', 'DL', 'BUF'], metric: ['1155']},
            {dimension: ['4', 'DL', 'MEM'], metric: ['1154']},
            {dimension: ['3', 'AA', 'CLE'], metric: ['1153']},
            {dimension: ['3', 'AA', 'CMH'], metric: ['1153']},
            {dimension: ['3', 'AS', 'KTN'], metric: ['1153']},
            {dimension: ['3', 'DL', 'MSN'], metric: ['1153']},
            {dimension: ['1', 'WN', 'CHS'], metric: ['1151']},
            {dimension: ['3', 'DL', 'PNS'], metric: ['1151']},
            {dimension: ['2', 'MQ', 'CVG'], metric: ['1151']},
            {dimension: ['3', 'OO', 'SGU'], metric: ['1150']},
            {dimension: ['1', 'EV', 'MKE'], metric: ['1150']},
            {dimension: ['1', 'WN', 'LIT'], metric: ['1150']},
            {dimension: ['4', 'EV', 'BTR'], metric: ['1148']},
            {dimension: ['1', 'OH', 'CVG'], metric: ['1148']},
            {dimension: ['1', 'OO', 'SAT'], metric: ['1146']},
            {dimension: ['1', 'AA', 'PVD'], metric: ['1146']},
            {dimension: ['2', 'WN', 'IAD'], metric: ['1145']},
            {dimension: ['1', 'MQ', 'XNA'], metric: ['1144']},
            {dimension: ['3', 'VX', 'LAS'], metric: ['1144']},
            {dimension: ['3', 'OO', 'MRY'], metric: ['1142']},
            {dimension: ['4', 'AA', 'SLC'], metric: ['1140']},
            {dimension: ['4', 'NK', 'BOS'], metric: ['1140']},
            {dimension: ['4', 'WN', 'BHM'], metric: ['1140']},
            {dimension: ['2', 'YX', 'MCI'], metric: ['1139']},
            {dimension: ['1', 'VX', 'EWR'], metric: ['1136']},
            {dimension: ['1', 'MQ', 'SGF'], metric: ['1136']},
            {dimension: ['2', 'EV', 'MOB'], metric: ['1136']},
            {dimension: ['3', 'OO', 'GJT'], metric: ['1136']},
            {dimension: ['4', 'VX', 'LAS'], metric: ['1130']},
            {dimension: ['2', 'UA', 'BNA'], metric: ['1129']},
            {dimension: ['2', 'AA', 'OGG'], metric: ['1128']},
            {dimension: ['4', 'OO', 'SBN'], metric: ['1128']},
            {dimension: ['1', 'OO', 'GJT'], metric: ['1128']},
            {dimension: ['2', 'YV', 'ELP'], metric: ['1126']},
            {dimension: ['2', 'B6', 'AUS'], metric: ['1126']},
            {dimension: ['2', 'MQ', 'XNA'], metric: ['1125']},
            {dimension: ['4', 'NK', 'MSP'], metric: ['1125']},
            {dimension: ['1', 'EV', 'LIT'], metric: ['1125']},
            {dimension: ['4', 'DL', 'BDL'], metric: ['1124']},
            {dimension: ['2', 'B6', 'PIT'], metric: ['1124']},
            {dimension: ['2', 'DL', 'ANC'], metric: ['1121']},
            {dimension: ['4', 'OO', 'SNA'], metric: ['1121']},
            {dimension: ['1', 'OO', 'MBS'], metric: ['1120']},
            {dimension: ['1', 'YX', 'RDU'], metric: ['1119']},
            {dimension: ['2', 'OH', 'GSP'], metric: ['1118']},
            {dimension: ['3', 'UA', 'BNA'], metric: ['1117']},
            {dimension: ['3', 'B6', 'SEA'], metric: ['1115']},
            {dimension: ['1', 'DL', 'HSV'], metric: ['1115']},
            {dimension: ['1', 'UA', 'SJU'], metric: ['1115']},
            {dimension: ['4', 'WN', 'MHT'], metric: ['1114']},
            {dimension: ['2', 'DL', 'VPS'], metric: ['1114']},
            {dimension: ['2', 'EV', 'BHM'], metric: ['1114']},
            {dimension: ['4', 'OO', 'PSP'], metric: ['1114']},
            {dimension: ['2', 'DL', 'JAN'], metric: ['1111']},
            {dimension: ['3', 'NK', 'SAN'], metric: ['1111']},
            {dimension: ['3', 'DL', 'SJU'], metric: ['1110']},
            {dimension: ['1', 'OO', 'BZN'], metric: ['1109']},
            {dimension: ['2', 'OO', 'SAT'], metric: ['1109']},
            {dimension: ['3', 'DL', 'MDW'], metric: ['1108']},
            {dimension: ['2', 'OO', 'GRR'], metric: ['1107']},
            {dimension: ['1', 'MQ', 'CVG'], metric: ['1105']},
            {dimension: ['3', 'OO', 'FSD'], metric: ['1103']},
            {dimension: ['3', 'DL', 'GSP'], metric: ['1103']},
            {dimension: ['3', 'B6', 'BWI'], metric: ['1103']},
            {dimension: ['2', 'OO', 'CHA'], metric: ['1101']},
            {dimension: ['1', 'EV', 'CMH'], metric: ['1099']},
            {dimension: ['2', 'EV', 'LEX'], metric: ['1099']},
            {dimension: ['4', 'WN', 'JAX'], metric: ['1098']},
            {dimension: ['2', 'MQ', 'PIT'], metric: ['1098']},
            {dimension: ['2', 'B6', 'SEA'], metric: ['1097']},
            {dimension: ['2', 'UA', 'BDL'], metric: ['1096']},
            {dimension: ['2', 'OO', 'BFL'], metric: ['1095']},
            {dimension: ['2', 'AS', 'SLC'], metric: ['1095']},
            {dimension: ['2', 'UA', 'PIT'], metric: ['1094']},
            {dimension: ['2', 'AA', 'RIC'], metric: ['1093']},
            {dimension: ['4', 'WN', 'ISP'], metric: ['1093']},
            {dimension: ['2', 'VX', 'JFK'], metric: ['1092']},
            {dimension: ['2', 'AA', 'OKC'], metric: ['1092']},
            {dimension: ['1', 'WN', 'IAD'], metric: ['1091']},
            {dimension: ['2', 'EV', 'MKE'], metric: ['1090']},
            {dimension: ['2', 'DL', 'ECP'], metric: ['1088']},
            {dimension: ['4', 'WN', 'SDF'], metric: ['1085']},
            {dimension: ['1', '9E', 'PIT'], metric: ['1085']},
            {dimension: ['2', 'YX', 'SDF'], metric: ['1083']},
            {dimension: ['1', 'OO', 'EUG'], metric: ['1083']},
            {dimension: ['4', 'DL', 'JAX'], metric: ['1083']},
            {dimension: ['2', 'WN', 'LGB'], metric: ['1083']},
            {dimension: ['2', 'MQ', 'CLE'], metric: ['1082']},
            {dimension: ['3', 'OO', 'GRB'], metric: ['1082']},
            {dimension: ['2', 'OO', 'GEG'], metric: ['1081']},
            {dimension: ['1', 'F9', 'CLE'], metric: ['1081']},
            {dimension: ['3', 'YX', 'RDU'], metric: ['1081']},
            {dimension: ['1', 'EV', 'MLU'], metric: ['1078']},
            {dimension: ['2', 'DL', 'HSV'], metric: ['1077']},
            {dimension: ['2', 'OO', 'BIS'], metric: ['1077']},
            {dimension: ['3', 'VX', 'JFK'], metric: ['1076']},
            {dimension: ['2', 'YX', 'ATL'], metric: ['1076']},
            {dimension: ['4', 'OO', 'CLE'], metric: ['1075']},
            {dimension: ['2', 'VX', 'DAL'], metric: ['1074']},
            {dimension: ['1', 'WN', 'LGB'], metric: ['1073']},
            {dimension: ['2', 'OO', 'RST'], metric: ['1073']},
            {dimension: ['1', 'OO', 'DCA'], metric: ['1072']},
            {dimension: ['2', 'F9', 'TPA'], metric: ['1070']},
            {dimension: ['1', 'AS', 'HNL'], metric: ['1070']},
            {dimension: ['4', 'VX', 'JFK'], metric: ['1070']},
            {dimension: ['3', 'AA', 'PVD'], metric: ['1069']},
            {dimension: ['2', 'B6', 'SJC'], metric: ['1069']},
            {dimension: ['2', 'AA', 'RNO'], metric: ['1069']},
            {dimension: ['2', 'OO', 'LAN'], metric: ['1064']},
            {dimension: ['1', 'YV', 'ELP'], metric: ['1064']},
            {dimension: ['2', 'OO', 'LSE'], metric: ['1063']},
            {dimension: ['2', 'OO', 'MOT'], metric: ['1063']},
            {dimension: ['4', 'OO', 'OKC'], metric: ['1063']},
            {dimension: ['4', 'OO', 'PSC'], metric: ['1060']},
            {dimension: ['2', 'AA', 'ABQ'], metric: ['1060']},
            {dimension: ['1', 'OO', 'IDA'], metric: ['1060']},
            {dimension: ['4', 'WN', 'TUS'], metric: ['1059']},
            {dimension: ['2', 'G4', 'CVG'], metric: ['1058']},
            {dimension: ['2', 'MQ', 'LIT'], metric: ['1056']},
            {dimension: ['4', 'AA', 'SMF'], metric: ['1055']},
            {dimension: ['2', 'AS', 'PSP'], metric: ['1055']},
            {dimension: ['1', 'AS', 'KTN'], metric: ['1055']},
            {dimension: ['2', 'UA', 'SJC'], metric: ['1054']},
            {dimension: ['2', 'DL', 'HOU'], metric: ['1054']},
            {dimension: ['2', 'AS', 'DEN'], metric: ['1053']},
            {dimension: ['4', 'OO', 'ASE'], metric: ['1053']},
            {dimension: ['3', 'EV', 'BHM'], metric: ['1052']},
            {dimension: ['4', 'AA', 'PDX'], metric: ['1050']},
            {dimension: ['3', 'MQ', 'JFK'], metric: ['1050']},
            {dimension: ['3', 'DL', 'GSO'], metric: ['1050']},
            {dimension: ['3', 'F9', 'TTN'], metric: ['1049']},
            {dimension: ['2', 'YX', 'DEN'], metric: ['1048']},
            {dimension: ['3', 'B6', 'AUS'], metric: ['1047']},
            {dimension: ['1', 'EV', 'LFT'], metric: ['1047']},
            {dimension: ['3', 'DL', 'GEG'], metric: ['1045']},
            {dimension: ['3', 'AS', 'OAK'], metric: ['1045']},
            {dimension: ['2', 'OO', 'CAK'], metric: ['1044']},
            {dimension: ['4', 'OO', 'RDM'], metric: ['1043']},
            {dimension: ['2', 'OH', 'TYS'], metric: ['1043']},
            {dimension: ['3', 'AA', 'OGG'], metric: ['1043']},
            {dimension: ['4', 'OO', 'CVG'], metric: ['1043']},
            {dimension: ['1', 'OO', 'FSD'], metric: ['1041']},
            {dimension: ['2', 'OO', 'DAL'], metric: ['1041']},
            {dimension: ['2', 'AS', 'SMF'], metric: ['1040']},
            {dimension: ['2', 'OO', 'DSM'], metric: ['1039']},
            {dimension: ['1', 'EV', 'AEX'], metric: ['1037']},
            {dimension: ['3', 'B6', 'ATL'], metric: ['1034']},
            {dimension: ['4', 'AA', 'BDL'], metric: ['1034']},
            {dimension: ['1', 'EV', 'JAN'], metric: ['1034']},
            {dimension: ['1', 'AA', 'ORF'], metric: ['1033']},
            {dimension: ['3', 'OO', 'ATW'], metric: ['1032']},
            {dimension: ['4', 'AA', 'SJC'], metric: ['1032']},
            {dimension: ['1', 'DL', 'BUF'], metric: ['1031']},
            {dimension: ['1', 'DL', 'SMF'], metric: ['1031']},
            {dimension: ['3', 'WN', 'LBB'], metric: ['1030']},
            {dimension: ['3', 'OO', 'MSO'], metric: ['1029']},
            {dimension: ['2', 'OO', 'LEX'], metric: ['1029']},
            {dimension: ['3', 'EV', 'TUL'], metric: ['1028']},
            {dimension: ['2', 'YX', 'BNA'], metric: ['1028']},
            {dimension: ['3', 'WN', 'IAD'], metric: ['1027']},
            {dimension: ['1', 'DL', 'MDW'], metric: ['1027']},
            {dimension: ['2', 'WN', 'HRL'], metric: ['1027']},
            {dimension: ['2', 'B6', 'IAD'], metric: ['1026']},
            {dimension: ['3', 'WN', 'LIT'], metric: ['1024']},
            {dimension: ['4', 'DL', 'GRR'], metric: ['1024']},
            {dimension: ['2', 'OO', 'DCA'], metric: ['1024']},
            {dimension: ['3', 'UA', 'BDL'], metric: ['1022']},
            {dimension: ['2', 'EV', 'JAN'], metric: ['1021']},
            {dimension: ['3', 'UA', 'SLC'], metric: ['1018']},
            {dimension: ['2', 'MQ', 'GSO'], metric: ['1018']},
            {dimension: ['4', 'WN', 'ALB'], metric: ['1018']},
            {dimension: ['1', 'AA', 'OMA'], metric: ['1016']},
            {dimension: ['3', 'EV', 'MOB'], metric: ['1016']},
            {dimension: ['2', 'OO', 'TVC'], metric: ['1015']},
            {dimension: ['3', 'OO', 'BZN'], metric: ['1015']},
            {dimension: ['2', 'NK', 'RSW'], metric: ['1013']},
            {dimension: ['4', 'NK', 'LGA'], metric: ['1012']},
            {dimension: ['4', 'DL', 'CHS'], metric: ['1010']},
            {dimension: ['1', 'AS', 'SMF'], metric: ['1009']},
            {dimension: ['1', 'F9', 'TTN'], metric: ['1009']},
            {dimension: ['1', 'WN', 'ROC'], metric: ['1007']},
            {dimension: ['3', 'AS', 'JFK'], metric: ['1004']},
            {dimension: ['1', 'EV', 'GSO'], metric: ['1004']},
            {dimension: ['1', 'B6', 'PIT'], metric: ['1002']},
            {dimension: ['3', 'UA', 'MCI'], metric: ['1002']},
            {dimension: ['3', 'VX', 'DAL'], metric: ['1001']},
            {dimension: ['3', 'OO', 'BFL'], metric: ['1000']},
            {dimension: ['3', 'B6', 'SLC'], metric: ['999']},
            {dimension: ['1', 'WN', 'HRL'], metric: ['998']},
            {dimension: ['4', 'OO', 'BUR'], metric: ['997']},
            {dimension: ['1', 'B6', 'SJC'], metric: ['997']},
            {dimension: ['4', 'B6', 'HPN'], metric: ['995']},
            {dimension: ['3', 'F9', 'COS'], metric: ['994']},
            {dimension: ['4', 'DL', 'SAT'], metric: ['993']},
            {dimension: ['1', 'OO', 'TVC'], metric: ['993']},
            {dimension: ['3', 'EV', 'LEX'], metric: ['992']},
            {dimension: ['4', 'UA', 'RDU'], metric: ['991']},
            {dimension: ['4', 'AS', 'LAS'], metric: ['991']},
            {dimension: ['1', 'B6', 'ORD'], metric: ['990']},
            {dimension: ['2', 'WN', 'GRR'], metric: ['990']},
            {dimension: ['2', 'OO', 'ATW'], metric: ['989']},
            {dimension: ['4', 'WN', 'BOI'], metric: ['989']},
            {dimension: ['2', 'OO', 'MLI'], metric: ['988']},
            {dimension: ['3', 'OO', 'SAT'], metric: ['987']},
            {dimension: ['1', 'EV', 'HPN'], metric: ['987']},
            {dimension: ['1', 'EV', 'CLT'], metric: ['985']},
            {dimension: ['4', 'OO', 'ONT'], metric: ['983']},
            {dimension: ['3', 'UA', 'OMA'], metric: ['983']},
            {dimension: ['1', 'OO', 'CLE'], metric: ['982']},
            {dimension: ['2', 'OO', 'MDW'], metric: ['981']},
            {dimension: ['1', 'B6', 'IAD'], metric: ['979']},
            {dimension: ['3', 'OO', 'BIS'], metric: ['978']},
            {dimension: ['2', 'UA', 'SJU'], metric: ['978']},
            {dimension: ['1', 'AS', 'PSP'], metric: ['978']},
            {dimension: ['1', 'DL', 'LIT'], metric: ['977']},
            {dimension: ['2', 'B6', 'SAN'], metric: ['977']},
            {dimension: ['1', 'OO', 'DAY'], metric: ['977']},
            {dimension: ['4', 'DL', 'SNA'], metric: ['974']},
            {dimension: ['4', 'F9', 'MIA'], metric: ['970']},
            {dimension: ['1', 'OO', 'CHA'], metric: ['969']},
            {dimension: ['4', 'OO', 'LAS'], metric: ['969']},
            {dimension: ['2', 'AA', 'MKE'], metric: ['969']},
            {dimension: ['3', 'WN', 'LGB'], metric: ['968']},
            {dimension: ['3', 'AA', 'RNO'], metric: ['968']},
            {dimension: ['2', 'EV', 'CAE'], metric: ['966']},
            {dimension: ['3', 'OO', 'GRR'], metric: ['965']},
            {dimension: ['2', 'MQ', 'CLT'], metric: ['965']},
            {dimension: ['2', 'B6', 'MSY'], metric: ['964']},
            {dimension: ['2', 'HA', 'LAX'], metric: ['964']},
            {dimension: ['1', 'DL', 'OKC'], metric: ['964']},
            {dimension: ['1', 'VX', 'SAN'], metric: ['964']},
            {dimension: ['2', '9E', 'TYS'], metric: ['964']},
            {dimension: ['1', 'DL', 'HOU'], metric: ['964']},
            {dimension: ['1', 'OH', 'CHS'], metric: ['963']},
            {dimension: ['2', 'OH', 'ORF'], metric: ['962']},
            {dimension: ['4', 'B6', 'JAX'], metric: ['962']},
            {dimension: ['3', 'OO', 'IDA'], metric: ['962']},
            {dimension: ['4', 'AS', 'JNU'], metric: ['962']},
            {dimension: ['1', 'YX', 'EYW'], metric: ['962']},
            {dimension: ['3', 'B6', 'PHL'], metric: ['960']},
            {dimension: ['4', 'OO', 'OMA'], metric: ['958']},
            {dimension: ['2', 'DL', 'OKC'], metric: ['957']},
            {dimension: ['1', 'OO', 'DSM'], metric: ['957']},
            {dimension: ['2', 'WN', 'ROC'], metric: ['957']},
            {dimension: ['3', 'AA', 'ABQ'], metric: ['955']},
            {dimension: ['2', 'B6', 'OAK'], metric: ['954']},
            {dimension: ['4', 'F9', 'TPA'], metric: ['953']},
            {dimension: ['3', 'B6', 'PIT'], metric: ['952']},
            {dimension: ['1', 'AS', 'KOA'], metric: ['952']},
            {dimension: ['3', 'EV', 'CHA'], metric: ['951']},
            {dimension: ['1', 'YX', 'MCI'], metric: ['951']},
            {dimension: ['1', 'AA', 'OKC'], metric: ['950']},
            {dimension: ['2', 'AA', 'OMA'], metric: ['949']},
            {dimension: ['1', 'EV', 'OMA'], metric: ['949']},
            {dimension: ['1', 'DL', 'JAN'], metric: ['949']},
            {dimension: ['3', 'EV', 'SGF'], metric: ['948']},
            {dimension: ['1', 'OO', 'LNK'], metric: ['948']},
            {dimension: ['3', 'OO', 'RST'], metric: ['947']},
            {dimension: ['4', 'DL', 'PIT'], metric: ['947']},
            {dimension: ['1', 'OO', 'ABQ'], metric: ['944']},
            {dimension: ['2', 'UA', 'CHS'], metric: ['943']},
            {dimension: ['1', 'B6', 'SYR'], metric: ['943']},
            {dimension: ['1', 'YX', 'DEN'], metric: ['942']},
            {dimension: ['3', 'YX', 'DEN'], metric: ['942']},
            {dimension: ['3', 'DL', 'LIT'], metric: ['941']},
            {dimension: ['1', '9E', 'BUF'], metric: ['941']},
            {dimension: ['3', 'OH', 'CVG'], metric: ['939']},
            {dimension: ['2', 'OH', 'SAV'], metric: ['939']},
            {dimension: ['3', 'NK', 'PIT'], metric: ['938']},
            {dimension: ['3', 'WN', 'ECP'], metric: ['938']},
            {dimension: ['1', 'OO', 'RAP'], metric: ['937']},
            {dimension: ['3', 'DL', 'SRQ'], metric: ['937']},
            {dimension: ['1', 'EV', 'BOS'], metric: ['937']},
            {dimension: ['3', 'AA', 'OKC'], metric: ['937']},
            {dimension: ['3', 'YX', 'MSP'], metric: ['936']},
            {dimension: ['2', 'UA', 'MCI'], metric: ['935']},
            {dimension: ['3', 'AS', 'SLC'], metric: ['934']},
            {dimension: ['4', 'OO', 'SBA'], metric: ['933']},
            {dimension: ['1', 'OO', 'AZO'], metric: ['933']},
            {dimension: ['2', 'F9', 'RDU'], metric: ['932']},
            {dimension: ['2', 'EV', 'LIT'], metric: ['930']},
            {dimension: ['3', 'EV', 'MKE'], metric: ['930']},
            {dimension: ['2', '9E', 'BUF'], metric: ['928']},
            {dimension: ['3', 'AS', 'PHX'], metric: ['927']},
            {dimension: ['1', 'B6', 'MSY'], metric: ['926']},
            {dimension: ['1', 'AA', 'MKE'], metric: ['926']},
            {dimension: ['2', 'UA', 'OMA'], metric: ['924']},
            {dimension: ['4', 'WN', 'SJU'], metric: ['924']},
            {dimension: ['3', 'YX', 'BOS'], metric: ['923']},
            {dimension: ['2', 'OO', 'AZO'], metric: ['923']},
            {dimension: ['4', 'B6', 'BDL'], metric: ['922']},
            {dimension: ['2', 'WN', 'CVG'], metric: ['922']},
            {dimension: ['2', 'YX', 'CVG'], metric: ['921']},
            {dimension: ['1', 'EV', 'LEX'], metric: ['921']},
            {dimension: ['3', 'DL', 'JAN'], metric: ['920']},
            {dimension: ['3', 'F9', 'RDU'], metric: ['919']},
            {dimension: ['4', 'DL', 'SJC'], metric: ['919']},
            {dimension: ['3', 'OO', 'SDF'], metric: ['918']},
            {dimension: ['4', 'UA', 'SAT'], metric: ['918']},
            {dimension: ['2', 'AS', 'KOA'], metric: ['917']},
            {dimension: ['2', 'YX', 'JAX'], metric: ['915']},
            {dimension: ['3', 'DL', 'ECP'], metric: ['914']},
            {dimension: ['3', 'UA', 'SJU'], metric: ['914']},
            {dimension: ['4', 'WN', 'GEG'], metric: ['913']},
            {dimension: ['1', 'F9', 'MKE'], metric: ['912']},
            {dimension: ['3', 'F9', 'PHX'], metric: ['911']},
            {dimension: ['3', 'DL', 'VPS'], metric: ['911']},
            {dimension: ['3', 'B6', 'SJC'], metric: ['911']},
            {dimension: ['3', 'DL', 'HSV'], metric: ['910']},
            {dimension: ['2', 'AA', 'ELP'], metric: ['910']},
            {dimension: ['4', 'EV', 'DCA'], metric: ['908']},
            {dimension: ['4', 'UA', 'SMF'], metric: ['908']},
            {dimension: ['2', 'DL', 'DAB'], metric: ['908']},
            {dimension: ['3', 'MQ', 'CVG'], metric: ['907']},
            {dimension: ['1', 'AA', 'RIC'], metric: ['906']},
            {dimension: ['4', 'OO', 'CID'], metric: ['905']},
            {dimension: ['3', 'OO', 'TUL'], metric: ['904']},
            {dimension: ['3', 'EV', 'JAN'], metric: ['903']},
            {dimension: ['3', 'HA', 'LAX'], metric: ['902']},
            {dimension: ['3', 'B6', 'OAK'], metric: ['901']},
            {dimension: ['1', 'DL', 'ECP'], metric: ['900']},
            {dimension: ['3', 'OO', 'LNK'], metric: ['900']},
            {dimension: ['3', 'OO', 'STL'], metric: ['899']},
            {dimension: ['1', 'OO', 'TUL'], metric: ['899']},
            {dimension: ['1', 'NK', 'OAK'], metric: ['898']},
            {dimension: ['2', 'EV', 'CMH'], metric: ['898']},
            {dimension: ['4', 'UA', 'BWI'], metric: ['896']},
            {dimension: ['1', 'EV', 'GRR'], metric: ['896']},
            {dimension: ['2', 'DL', 'GEG'], metric: ['895']},
            {dimension: ['1', 'AA', 'ABQ'], metric: ['895']},
            {dimension: ['2', 'OO', 'AVL'], metric: ['894']},
            {dimension: ['3', 'AA', 'ORF'], metric: ['893']},
            {dimension: ['4', 'UA', 'MSP'], metric: ['892']},
            {dimension: ['3', 'OO', 'BIL'], metric: ['891']},
            {dimension: ['1', 'OO', 'LGA'], metric: ['890']},
            {dimension: ['4', 'DL', 'CMH'], metric: ['889']},
            {dimension: ['1', 'OO', 'PIA'], metric: ['889']},
            {dimension: ['1', 'MQ', 'LIT'], metric: ['888']},
            {dimension: ['1', 'YX', 'DFW'], metric: ['886']},
            {dimension: ['4', 'AS', 'SNA'], metric: ['886']},
            {dimension: ['3', 'UA', 'BZN'], metric: ['886']},
            {dimension: ['2', 'OH', 'BHM'], metric: ['886']},
            {dimension: ['3', '9E', 'BOS'], metric: ['885']},
            {dimension: ['3', 'AS', 'SMF'], metric: ['885']},
            {dimension: ['4', 'AA', 'SJU'], metric: ['884']},
            {dimension: ['3', 'OO', 'FAR'], metric: ['884']},
            {dimension: ['2', 'UA', 'KOA'], metric: ['884']},
            {dimension: ['4', 'OO', 'MSN'], metric: ['883']},
            {dimension: ['1', 'EV', 'ICT'], metric: ['883']},
            {dimension: ['2', 'YX', 'STL'], metric: ['882']},
            {dimension: ['2', 'AA', 'ORF'], metric: ['882']},
            {dimension: ['2', 'F9', 'COS'], metric: ['881']},
            {dimension: ['3', 'OO', 'CLE'], metric: ['880']},
            {dimension: ['1', 'OO', 'XNA'], metric: ['880']},
            {dimension: ['3', 'OO', 'DAL'], metric: ['880']},
            {dimension: ['4', 'OO', 'GEG'], metric: ['878']},
            {dimension: ['1', 'UA', 'KOA'], metric: ['877']},
            {dimension: ['3', 'OO', 'MLI'], metric: ['876']},
            {dimension: ['2', 'YX', 'DFW'], metric: ['875']},
            {dimension: ['2', 'AA', 'DSM'], metric: ['873']},
            {dimension: ['3', 'AS', 'DEN'], metric: ['871']},
            {dimension: ['3', 'OO', 'LSE'], metric: ['871']},
            {dimension: ['4', 'OO', 'MFR'], metric: ['870']},
            {dimension: ['1', 'EV', 'CHA'], metric: ['870']},
            {dimension: ['2', 'WN', 'AMA'], metric: ['869']},
            {dimension: ['4', 'VX', 'DAL'], metric: ['869']},
            {dimension: ['1', 'AA', 'PSP'], metric: ['869']},
            {dimension: ['1', 'OO', 'RDU'], metric: ['868']},
            {dimension: ['2', 'OO', 'IND'], metric: ['868']},
            {dimension: ['3', 'OO', 'CHA'], metric: ['868']},
            {dimension: ['3', 'B6', 'ACK'], metric: ['867']},
            {dimension: ['1', 'AS', 'ORD'], metric: ['867']},
            {dimension: ['3', 'MQ', 'CMH'], metric: ['867']},
            {dimension: ['1', 'EV', 'MEM'], metric: ['867']},
            {dimension: ['1', 'YX', 'CVG'], metric: ['866']},
            {dimension: ['1', 'OO', 'FAR'], metric: ['866']},
            {dimension: ['3', 'UA', 'SJC'], metric: ['865']},
            {dimension: ['2', 'OO', 'GFK'], metric: ['865']},
            {dimension: ['3', 'OO', 'DSM'], metric: ['862']},
            {dimension: ['3', 'WN', 'HRL'], metric: ['861']},
            {dimension: ['1', 'YX', 'SDF'], metric: ['858']},
            {dimension: ['1', 'AA', 'OGG'], metric: ['858']},
            {dimension: ['1', 'WN', 'AMA'], metric: ['857']},
            {dimension: ['4', 'DL', 'SAV'], metric: ['857']},
            {dimension: ['3', 'YX', 'MCI'], metric: ['857']},
            {dimension: ['4', 'NK', 'MYR'], metric: ['857']},
            {dimension: ['3', 'EV', 'HPN'], metric: ['854']},
            {dimension: ['1', 'YV', 'TUS'], metric: ['853']},
            {dimension: ['2', '9E', 'PIT'], metric: ['851']},
            {dimension: ['3', 'OO', 'FCA'], metric: ['851']},
            {dimension: ['2', 'OO', 'LNK'], metric: ['851']},
            {dimension: ['1', 'HA', 'LAX'], metric: ['851']},
            {dimension: ['1', 'B6', 'SAN'], metric: ['850']},
            {dimension: ['1', 'B6', 'OAK'], metric: ['850']},
            {dimension: ['1', 'OO', 'BUF'], metric: ['850']},
            {dimension: ['2', 'DL', 'DAL'], metric: ['850']},
            {dimension: ['4', 'EV', 'DTW'], metric: ['849']},
            {dimension: ['2', 'EV', 'BOS'], metric: ['848']},
            {dimension: ['3', 'MQ', 'CLE'], metric: ['847']},
            {dimension: ['2', 'OO', 'CMH'], metric: ['844']},
            {dimension: ['1', 'AS', 'EWR'], metric: ['844']},
            {dimension: ['3', 'MQ', 'PIT'], metric: ['844']},
            {dimension: ['2', 'UA', 'SLC'], metric: ['842']},
            {dimension: ['3', 'DL', 'OKC'], metric: ['841']},
            {dimension: ['3', 'G4', 'PGD'], metric: ['839']},
            {dimension: ['2', 'AS', 'GEG'], metric: ['839']},
            {dimension: ['3', 'AA', 'MKE'], metric: ['838']},
            {dimension: ['2', 'UA', 'DTW'], metric: ['836']},
            {dimension: ['3', 'OO', 'LAN'], metric: ['836']},
            {dimension: ['3', 'OO', 'MDW'], metric: ['835']},
            {dimension: ['2', 'AS', 'MCO'], metric: ['835']},
            {dimension: ['4', 'AA', 'IND'], metric: ['834']},
            {dimension: ['3', 'MQ', 'SGF'], metric: ['834']},
            {dimension: ['1', 'EV', 'LRD'], metric: ['834']},
            {dimension: ['1', 'DL', 'VPS'], metric: ['833']},
            {dimension: ['1', 'G4', 'CVG'], metric: ['833']},
            {dimension: ['3', 'YX', 'SDF'], metric: ['832']},
            {dimension: ['2', '9E', 'CLT'], metric: ['831']},
            {dimension: ['1', 'YV', 'ABQ'], metric: ['830']},
            {dimension: ['2', 'EV', 'ICT'], metric: ['830']},
            {dimension: ['1', 'OO', 'CHO'], metric: ['829']},
            {dimension: ['3', 'DL', 'CAE'], metric: ['829']},
            {dimension: ['2', 'OO', 'HLN'], metric: ['829']},
            {dimension: ['1', 'B6', 'SEA'], metric: ['828']},
            {dimension: ['3', 'G4', 'AZA'], metric: ['828']},
            {dimension: ['4', 'OO', 'SGU'], metric: ['828']},
            {dimension: ['1', 'EV', 'GRK'], metric: ['828']},
            {dimension: ['1', 'OO', 'MLI'], metric: ['828']},
            {dimension: ['2', 'OH', 'CAK'], metric: ['828']},
            {dimension: ['2', 'YX', 'MSY'], metric: ['827']},
            {dimension: ['3', 'B6', 'PDX'], metric: ['827']},
            {dimension: ['2', 'EV', 'GSO'], metric: ['827']},
            {dimension: ['4', 'WN', 'MEM'], metric: ['827']},
            {dimension: ['3', 'UA', 'RNO'], metric: ['826']},
            {dimension: ['2', 'OH', 'SDF'], metric: ['824']},
            {dimension: ['2', 'EV', 'AEX'], metric: ['824']},
            {dimension: ['4', 'NK', 'EWR'], metric: ['824']},
            {dimension: ['3', 'AA', 'OMA'], metric: ['823']},
            {dimension: ['1', 'VX', 'FLL'], metric: ['823']},
            {dimension: ['3', 'OO', 'AUS'], metric: ['823']},
            {dimension: ['3', 'OO', 'EWR'], metric: ['823']},
            {dimension: ['2', 'EV', 'IND'], metric: ['822']},
            {dimension: ['1', 'YX', 'JAX'], metric: ['822']},
            {dimension: ['1', 'DL', 'DAL'], metric: ['822']},
            {dimension: ['1', 'OO', 'SUN'], metric: ['820']},
            {dimension: ['1', 'AA', 'RNO'], metric: ['819']},
            {dimension: ['2', 'OO', 'PIT'], metric: ['818']},
            {dimension: ['2', 'AS', 'DCA'], metric: ['816']},
            {dimension: ['2', 'EV', 'LRD'], metric: ['816']},
            {dimension: ['4', 'B6', 'RDU'], metric: ['815']},
            {dimension: ['4', 'NK', 'RSW'], metric: ['815']},
            {dimension: ['2', 'EV', 'PNS'], metric: ['815']},
            {dimension: ['4', 'OO', 'MCI'], metric: ['815']},
            {dimension: ['3', 'WN', 'PBI'], metric: ['814']},
            {dimension: ['3', 'B6', 'IAD'], metric: ['814']},
            {dimension: ['3', 'DL', 'HOU'], metric: ['814']},
            {dimension: ['1', 'OH', 'SAV'], metric: ['811']},
            {dimension: ['1', 'OH', 'TYS'], metric: ['810']},
            {dimension: ['1', 'NK', 'SAN'], metric: ['810']},
            {dimension: ['4', 'F9', 'PHL'], metric: ['810']},
            {dimension: ['2', 'OO', 'XNA'], metric: ['808']},
            {dimension: ['3', 'OO', 'CMH'], metric: ['808']},
            {dimension: ['2', 'DL', 'CAE'], metric: ['808']},
            {dimension: ['4', 'DL', 'OMA'], metric: ['807']},
            {dimension: ['3', 'OO', 'HLN'], metric: ['807']},
            {dimension: ['2', 'F9', 'LAX'], metric: ['806']},
            {dimension: ['3', 'F9', 'SAN'], metric: ['806']},
            {dimension: ['1', 'DL', 'DAB'], metric: ['805']},
            {dimension: ['2', '9E', 'CLE'], metric: ['805']},
            {dimension: ['4', 'OO', 'SBP'], metric: ['805']},
            {dimension: ['1', 'OH', 'GSO'], metric: ['804']},
            {dimension: ['1', '9E', 'TYS'], metric: ['804']},
            {dimension: ['1', 'UA', 'DTW'], metric: ['804']},
            {dimension: ['2', 'MQ', 'IND'], metric: ['804']},
            {dimension: ['2', 'EV', 'MLU'], metric: ['804']},
            {dimension: ['2', 'OO', 'RDU'], metric: ['803']},
            {dimension: ['4', 'NK', 'ACY'], metric: ['802']},
            {dimension: ['2', 'F9', 'SAN'], metric: ['801']},
            {dimension: ['3', 'EV', 'GSO'], metric: ['799']},
            {dimension: ['3', 'OO', 'MOT'], metric: ['798']},
            {dimension: ['3', 'F9', 'TPA'], metric: ['798']},
            {dimension: ['3', 'OO', 'AZO'], metric: ['797']},
            {dimension: ['2', 'OO', 'EWR'], metric: ['796']},
            {dimension: ['2', 'EV', 'HPN'], metric: ['796']},
            {dimension: ['3', 'OO', 'TYS'], metric: ['796']},
            {dimension: ['1', 'EV', 'MAF'], metric: ['795']},
            {dimension: ['2', 'OH', 'CAE'], metric: ['795']},
            {dimension: ['1', 'UA', 'BNA'], metric: ['793']},
            {dimension: ['3', 'EV', 'CMH'], metric: ['793']},
            {dimension: ['3', 'F9', 'LAX'], metric: ['792']},
            {dimension: ['2', 'B6', 'SYR'], metric: ['791']},
            {dimension: ['2', 'YX', 'EYW'], metric: ['791']},
            {dimension: ['2', 'OO', 'CLE'], metric: ['791']},
            {dimension: ['3', 'OO', 'AVL'], metric: ['785']},
            {dimension: ['1', 'OO', 'LGB'], metric: ['785']},
            {dimension: ['3', '9E', 'RDU'], metric: ['785']},
            {dimension: ['4', 'NK', 'DEN'], metric: ['784']},
            {dimension: ['2', 'AS', 'DFW'], metric: ['781']},
            {dimension: ['2', 'EV', 'MEM'], metric: ['781']},
            {dimension: ['2', 'EV', 'GSP'], metric: ['780']},
            {dimension: ['3', 'MQ', 'GSO'], metric: ['779']},
            {dimension: ['1', 'UA', 'SJC'], metric: ['779']},
            {dimension: ['4', 'DL', 'CLE'], metric: ['778']},
            {dimension: ['4', 'OO', 'SAT'], metric: ['777']},
            {dimension: ['3', 'MQ', 'XNA'], metric: ['776']},
            {dimension: ['2', 'DL', 'MLB'], metric: ['776']},
            {dimension: ['2', '9E', 'ORF'], metric: ['774']},
            {dimension: ['4', 'F9', 'RSW'], metric: ['773']},
            {dimension: ['2', 'DL', 'PVD'], metric: ['773']},
            {dimension: ['2', 'OO', 'MSO'], metric: ['771']},
            {dimension: ['2', 'YV', 'CRP'], metric: ['771']},
            {dimension: ['2', '9E', 'ROC'], metric: ['771']},
            {dimension: ['2', 'EV', 'LFT'], metric: ['769']},
            {dimension: ['1', 'AA', 'DSM'], metric: ['768']},
            {dimension: ['4', 'F9', 'ATL'], metric: ['768']},
            {dimension: ['1', 'F9', 'LAX'], metric: ['767']},
            {dimension: ['1', 'AS', 'GEG'], metric: ['766']},
            {dimension: ['2', 'DL', 'SYR'], metric: ['766']},
            {dimension: ['1', 'EV', 'IND'], metric: ['766']},
            {dimension: ['3', 'DL', 'ABQ'], metric: ['766']},
            {dimension: ['4', 'DL', 'BHM'], metric: ['765']},
            {dimension: ['3', 'EV', 'XNA'], metric: ['765']},
            {dimension: ['3', 'EV', 'PWM'], metric: ['765']},
            {dimension: ['1', 'G4', 'FLL'], metric: ['765']},
            {dimension: ['2', 'G4', 'FLL'], metric: ['765']},
            {dimension: ['2', 'B6', 'PDX'], metric: ['765']},
            {dimension: ['1', 'OO', 'BIL'], metric: ['765']},
            {dimension: ['2', 'OO', 'GTF'], metric: ['765']},
            {dimension: ['3', 'OO', 'LEX'], metric: ['764']},
            {dimension: ['1', 'OO', 'FCA'], metric: ['764']},
            {dimension: ['3', 'YX', 'DFW'], metric: ['763']},
            {dimension: ['2', 'YX', 'BUF'], metric: ['763']},
            {dimension: ['3', 'UA', 'JAC'], metric: ['762']},
            {dimension: ['2', 'UA', 'MSN'], metric: ['761']},
            {dimension: ['3', 'OH', 'GSP'], metric: ['760']},
            {dimension: ['1', 'UA', 'PIT'], metric: ['760']},
            {dimension: ['4', 'OO', 'ICT'], metric: ['760']},
            {dimension: ['2', 'UA', 'RNO'], metric: ['759']},
            {dimension: ['1', 'F9', 'SFO'], metric: ['758']},
            {dimension: ['4', 'WN', 'MAF'], metric: ['758']},
            {dimension: ['2', 'OO', 'MDT'], metric: ['757']},
            {dimension: ['4', 'DL', 'IAD'], metric: ['756']},
            {dimension: ['1', '9E', 'DFW'], metric: ['756']},
            {dimension: ['4', 'OO', 'RNO'], metric: ['754']},
            {dimension: ['1', 'DL', 'MLB'], metric: ['753']},
            {dimension: ['3', 'DL', 'PVD'], metric: ['753']},
            {dimension: ['4', 'F9', 'ORD'], metric: ['753']},
            {dimension: ['1', 'OO', 'HLN'], metric: ['752']},
            {dimension: ['2', 'OO', 'FCA'], metric: ['752']},
            {dimension: ['1', 'EV', 'PNS'], metric: ['751']},
            {dimension: ['2', 'YX', 'OMA'], metric: ['751']},
            {dimension: ['3', 'OO', 'MDT'], metric: ['750']},
            {dimension: ['3', 'DL', 'DAB'], metric: ['750']},
            {dimension: ['4', 'NK', 'PHL'], metric: ['749']},
            {dimension: ['1', 'OO', 'SYR'], metric: ['749']},
            {dimension: ['1', 'OH', 'CAK'], metric: ['748']},
            {dimension: ['4', 'EV', 'CLT'], metric: ['748']},
            {dimension: ['3', 'WN', 'GRR'], metric: ['747']},
            {dimension: ['3', 'OO', 'SUN'], metric: ['747']},
            {dimension: ['2', 'OO', 'LGB'], metric: ['747']},
            {dimension: ['3', 'UA', 'ANC'], metric: ['746']},
            {dimension: ['1', 'OO', 'BFL'], metric: ['743']},
            {dimension: ['3', 'UA', 'KOA'], metric: ['743']},
            {dimension: ['2', 'AS', 'LIH'], metric: ['743']},
            {dimension: ['3', 'B6', 'SAN'], metric: ['742']},
            {dimension: ['4', 'OO', 'DAY'], metric: ['742']},
            {dimension: ['2', 'OO', 'BZN'], metric: ['742']},
            {dimension: ['3', 'EV', 'HSV'], metric: ['741']},
            {dimension: ['1', 'AS', 'LIH'], metric: ['740']},
            {dimension: ['1', 'OO', 'FNT'], metric: ['740']},
            {dimension: ['1', 'F9', 'SLC'], metric: ['739']},
            {dimension: ['1', 'AA', 'STT'], metric: ['739']},
            {dimension: ['1', 'OO', 'CLT'], metric: ['737']},
            {dimension: ['1', 'AS', 'DEN'], metric: ['737']},
            {dimension: ['1', 'YX', 'JFK'], metric: ['737']},
            {dimension: ['3', 'WN', 'AMA'], metric: ['735']},
            {dimension: ['3', '9E', 'CLE'], metric: ['735']},
            {dimension: ['3', 'DL', 'BZN'], metric: ['735']},
            {dimension: ['1', 'AS', 'BUR'], metric: ['735']},
            {dimension: ['4', 'DL', 'RIC'], metric: ['733']},
            {dimension: ['2', 'OO', 'CHO'], metric: ['733']},
            {dimension: ['2', 'DL', 'ALB'], metric: ['732']},
            {dimension: ['1', 'MQ', 'IND'], metric: ['732']},
            {dimension: ['3', 'EV', 'GSP'], metric: ['732']},
            {dimension: ['3', 'OO', 'GTF'], metric: ['730']},
            {dimension: ['1', 'YX', 'STL'], metric: ['729']},
            {dimension: ['1', 'OO', 'MDW'], metric: ['729']},
            {dimension: ['2', 'F9', 'MSP'], metric: ['729']},
            {dimension: ['1', '9E', 'CLT'], metric: ['729']},
            {dimension: ['1', 'OO', 'BIS'], metric: ['729']},
            {dimension: ['4', 'AA', 'MEM'], metric: ['728']},
            {dimension: ['3', 'YX', 'BUF'], metric: ['728']},
            {dimension: ['1', 'UA', 'JAC'], metric: ['728']},
            {dimension: ['4', 'B6', 'BWI'], metric: ['727']},
            {dimension: ['3', 'UA', 'RSW'], metric: ['727']},
            {dimension: ['1', 'OO', 'DAL'], metric: ['725']},
            {dimension: ['1', 'DL', 'GEG'], metric: ['725']},
            {dimension: ['1', 'F9', 'STL'], metric: ['725']},
            {dimension: ['3', 'AS', 'GEG'], metric: ['725']},
            {dimension: ['3', 'OO', 'STS'], metric: ['724']},
            {dimension: ['2', 'OO', 'TYS'], metric: ['724']},
            {dimension: ['2', 'DL', 'MYR'], metric: ['723']},
            {dimension: ['2', 'YV', 'ABQ'], metric: ['722']},
            {dimension: ['2', '9E', 'SYR'], metric: ['722']},
            {dimension: ['2', 'EV', 'PWM'], metric: ['721']},
            {dimension: ['4', 'DL', 'HNL'], metric: ['721']},
            {dimension: ['1', 'AS', 'DCA'], metric: ['720']},
            {dimension: ['1', 'NK', 'MCI'], metric: ['720']},
            {dimension: ['4', 'DL', 'MSN'], metric: ['720']},
            {dimension: ['3', 'OH', 'TYS'], metric: ['719']},
            {dimension: ['4', 'DL', 'IAH'], metric: ['719']},
            {dimension: ['4', 'AS', 'OGG'], metric: ['719']},
            {dimension: ['4', 'OO', 'RAP'], metric: ['719']},
            {dimension: ['2', 'F9', 'SLC'], metric: ['718']},
            {dimension: ['1', 'OH', 'GSP'], metric: ['718']},
            {dimension: ['2', 'OO', 'YUM'], metric: ['718']},
            {dimension: ['1', 'WN', 'CVG'], metric: ['718']},
            {dimension: ['4', 'AA', 'TUL'], metric: ['717']},
            {dimension: ['2', '9E', 'ORD'], metric: ['717']},
            {dimension: ['2', 'AS', 'BUR'], metric: ['716']},
            {dimension: ['1', 'UA', 'BZN'], metric: ['715']},
            {dimension: ['3', 'AA', 'DSM'], metric: ['715']},
            {dimension: ['2', 'NK', 'MCI'], metric: ['715']},
            {dimension: ['3', 'AS', 'DFW'], metric: ['713']},
            {dimension: ['3', 'F9', 'SFO'], metric: ['712']},
            {dimension: ['1', 'F9', 'COS'], metric: ['712']},
            {dimension: ['2', 'F9', 'SFO'], metric: ['711']},
            {dimension: ['4', 'DL', 'ORF'], metric: ['711']},
            {dimension: ['4', 'WN', 'CVG'], metric: ['711']},
            {dimension: ['1', 'EV', 'LBB'], metric: ['710']},
            {dimension: ['3', 'DL', 'DAL'], metric: ['710']},
            {dimension: ['4', 'F9', 'CVG'], metric: ['709']},
            {dimension: ['2', 'B6', 'DTW'], metric: ['709']},
            {dimension: ['1', 'OO', 'YUM'], metric: ['709']},
            {dimension: ['3', 'UA', 'DTW'], metric: ['708']},
            {dimension: ['3', 'UA', 'ORF'], metric: ['708']},
            {dimension: ['3', 'VX', 'EWR'], metric: ['708']},
            {dimension: ['3', 'OO', 'XNA'], metric: ['708']},
            {dimension: ['2', 'B6', 'CLT'], metric: ['707']},
            {dimension: ['3', 'YV', 'ELP'], metric: ['706']},
            {dimension: ['3', 'OO', 'DCA'], metric: ['705']},
            {dimension: ['2', 'WN', 'ICT'], metric: ['705']},
            {dimension: ['4', 'OO', 'TUL'], metric: ['704']},
            {dimension: ['4', 'B6', 'RIC'], metric: ['703']},
            {dimension: ['4', 'VX', 'EWR'], metric: ['703']},
            {dimension: ['3', 'OH', 'SAV'], metric: ['703']},
            {dimension: ['2', 'YX', 'CHS'], metric: ['702']},
            {dimension: ['2', 'OH', 'CHS'], metric: ['702']},
            {dimension: ['3', 'G4', 'CVG'], metric: ['701']},
            {dimension: ['1', 'OO', 'LEX'], metric: ['701']},
            {dimension: ['4', 'WN', 'CLT'], metric: ['700']},
            {dimension: ['3', 'OO', 'IAD'], metric: ['700']},
            {dimension: ['2', 'WN', 'PNS'], metric: ['700']},
            {dimension: ['2', 'DL', 'DAY'], metric: ['700']},
            {dimension: ['2', 'DL', 'ABQ'], metric: ['699']},
            {dimension: ['1', 'OH', 'RIC'], metric: ['699']},
            {dimension: ['2', 'VX', 'EWR'], metric: ['699']},
            {dimension: ['1', 'MQ', 'GSO'], metric: ['699']},
            {dimension: ['3', 'UA', 'CLT'], metric: ['697']},
            {dimension: ['3', 'OO', 'CAK'], metric: ['697']},
            {dimension: ['2', 'B6', 'CLE'], metric: ['696']},
            {dimension: ['2', 'OO', 'BUF'], metric: ['696']},
            {dimension: ['4', 'DL', 'SMF'], metric: ['696']},
            {dimension: ['4', 'EV', 'BHM'], metric: ['696']},
            {dimension: ['2', 'AA', 'CHS'], metric: ['696']},
            {dimension: ['4', 'WN', 'CHS'], metric: ['696']},
            {dimension: ['3', 'WN', 'ROC'], metric: ['695']},
            {dimension: ['2', 'EV', 'HSV'], metric: ['695']},
            {dimension: ['2', 'AA', 'COS'], metric: ['694']},
            {dimension: ['2', 'YV', 'OKC'], metric: ['694']},
            {dimension: ['1', 'WN', 'ICT'], metric: ['694']},
            {dimension: ['2', 'EV', 'GRR'], metric: ['693']},
            {dimension: ['2', 'AA', 'STT'], metric: ['693']},
            {dimension: ['3', 'OO', 'GFK'], metric: ['693']},
            {dimension: ['4', 'OO', 'MBS'], metric: ['692']},
            {dimension: ['2', 'B6', 'SMF'], metric: ['692']},
            {dimension: ['1', 'AA', 'COS'], metric: ['691']},
            {dimension: ['3', 'YX', 'CVG'], metric: ['690']},
            {dimension: ['3', 'AS', 'SIT'], metric: ['690']},
            {dimension: ['1', 'UA', 'BDL'], metric: ['689']},
            {dimension: ['2', 'DL', 'TLH'], metric: ['689']},
            {dimension: ['1', 'VX', 'BOS'], metric: ['689']},
            {dimension: ['4', 'AA', 'TUS'], metric: ['688']},
            {dimension: ['1', 'AA', 'ELP'], metric: ['688']},
            {dimension: ['1', 'B6', 'CLT'], metric: ['688']},
            {dimension: ['3', 'EV', 'LRD'], metric: ['687']},
            {dimension: ['2', 'YV', 'MAF'], metric: ['687']},
            {dimension: ['1', 'B6', 'DTW'], metric: ['686']},
            {dimension: ['1', 'F9', 'AUS'], metric: ['686']},
            {dimension: ['1', 'WN', 'ECP'], metric: ['686']},
            {dimension: ['2', 'OH', 'GSO'], metric: ['685']},
            {dimension: ['2', 'MQ', 'RIC'], metric: ['685']},
            {dimension: ['2', 'MQ', 'ORF'], metric: ['685']},
            {dimension: ['4', 'AS', 'FAI'], metric: ['685']},
            {dimension: ['2', 'B6', 'BQN'], metric: ['684']},
            {dimension: ['4', 'AA', 'HNL'], metric: ['684']},
            {dimension: ['2', 'EV', 'CLL'], metric: ['683']},
            {dimension: ['2', 'F9', 'MKE'], metric: ['683']},
            {dimension: ['2', 'OO', 'MGM'], metric: ['683']},
            {dimension: ['1', 'EV', 'GSP'], metric: ['683']},
            {dimension: ['4', 'NK', 'CLE'], metric: ['682']},
            {dimension: ['1', 'UA', 'MCI'], metric: ['682']},
            {dimension: ['3', 'OO', 'IND'], metric: ['682']},
            {dimension: ['2', 'OO', 'FNT'], metric: ['682']},
            {dimension: ['1', 'DL', 'DAY'], metric: ['680']},
            {dimension: ['3', 'UA', 'PBI'], metric: ['680']},
            {dimension: ['3', '9E', 'TYS'], metric: ['680']},
            {dimension: ['4', 'AA', 'ONT'], metric: ['679']},
            {dimension: ['2', 'OH', 'IAD'], metric: ['679']},
            {dimension: ['3', 'YX', 'ATL'], metric: ['679']},
            {dimension: ['4', 'DL', 'SDF'], metric: ['678']},
            {dimension: ['2', 'WN', 'CRP'], metric: ['678']},
            {dimension: ['1', 'OO', 'RST'], metric: ['677']},
            {dimension: ['1', 'EV', 'PWM'], metric: ['677']},
            {dimension: ['4', 'EV', 'TYS'], metric: ['677']},
            {dimension: ['3', 'AS', 'DCA'], metric: ['677']},
            {dimension: ['2', '9E', 'JAX'], metric: ['677']},
            {dimension: ['3', 'OO', 'SCE'], metric: ['674']},
            {dimension: ['1', 'OO', 'AVL'], metric: ['673']},
            {dimension: ['2', 'OO', 'DRO'], metric: ['673']},
            {dimension: ['1', 'EV', 'CAK'], metric: ['673']},
            {dimension: ['3', 'DL', 'ALB'], metric: ['673']},
            {dimension: ['2', 'UA', 'LIH'], metric: ['672']},
            {dimension: ['3', 'MQ', 'CLT'], metric: ['672']},
            {dimension: ['4', 'OO', 'ABQ'], metric: ['672']},
            {dimension: ['2', 'EV', 'SGF'], metric: ['670']},
            {dimension: ['1', 'VX', 'IAD'], metric: ['670']},
            {dimension: ['1', 'WN', 'CRP'], metric: ['670']},
            {dimension: ['3', 'OO', 'FNT'], metric: ['670']},
            {dimension: ['2', 'EV', 'MLI'], metric: ['669']},
            {dimension: ['4', 'F9', 'PHX'], metric: ['669']},
            {dimension: ['4', 'AS', 'OAK'], metric: ['668']},
            {dimension: ['2', '9E', 'BTV'], metric: ['668']},
            {dimension: ['3', 'OH', 'ORF'], metric: ['667']},
            {dimension: ['4', 'OO', 'DLH'], metric: ['667']},
            {dimension: ['4', 'AA', 'JAX'], metric: ['667']},
            {dimension: ['2', 'EV', 'GPT'], metric: ['666']},
            {dimension: ['2', 'OO', 'FLG'], metric: ['666']},
            {dimension: ['4', 'B6', 'SLC'], metric: ['665']},
            {dimension: ['1', '9E', 'ROC'], metric: ['665']},
            {dimension: ['2', '9E', 'HPN'], metric: ['665']},
            {dimension: ['4', 'B6', 'PHL'], metric: ['665']},
            {dimension: ['2', 'AS', 'BWI'], metric: ['664']},
            {dimension: ['3', '9E', 'PIT'], metric: ['663']},
            {dimension: ['2', 'MQ', 'BNA'], metric: ['662']},
            {dimension: ['3', 'YV', 'MFE'], metric: ['661']},
            {dimension: ['2', 'OO', 'BIL'], metric: ['661']},
            {dimension: ['2', 'OH', 'ILM'], metric: ['661']},
            {dimension: ['1', 'OH', 'BHM'], metric: ['660']},
            {dimension: ['3', 'WN', 'PNS'], metric: ['659']},
            {dimension: ['1', 'AS', 'DFW'], metric: ['658']},
            {dimension: ['2', 'OO', 'IAD'], metric: ['658']},
            {dimension: ['1', 'EV', 'SGF'], metric: ['657']},
            {dimension: ['3', 'AA', 'CHS'], metric: ['656']},
            {dimension: ['4', 'WN', 'ORF'], metric: ['655']},
            {dimension: ['2', 'F9', 'SAT'], metric: ['655']},
            {dimension: ['3', 'DL', 'JAC'], metric: ['654']},
            {dimension: ['3', 'OO', 'CLT'], metric: ['654']},
            {dimension: ['3', 'EV', 'ICT'], metric: ['653']},
            {dimension: ['2', 'NK', 'PIT'], metric: ['652']},
            {dimension: ['2', '9E', 'DSM'], metric: ['652']},
            {dimension: ['3', 'EV', 'IND'], metric: ['652']},
            {dimension: ['2', '9E', 'PWM'], metric: ['652']},
            {dimension: ['2', 'AS', 'SIT'], metric: ['652']},
            {dimension: ['3', 'DL', 'ROC'], metric: ['651']},
            {dimension: ['1', 'EV', 'LCH'], metric: ['651']},
            {dimension: ['2', 'DL', 'BOI'], metric: ['651']},
            {dimension: ['3', 'B6', 'BQN'], metric: ['650']},
            {dimension: ['1', 'OH', 'SDF'], metric: ['650']},
            {dimension: ['2', 'AA', 'OAK'], metric: ['650']},
            {dimension: ['3', 'OH', 'BHM'], metric: ['650']},
            {dimension: ['4', 'AA', 'ORF'], metric: ['648']},
            {dimension: ['1', 'B6', 'CLE'], metric: ['646']},
            {dimension: ['4', 'NK', 'OAK'], metric: ['646']},
            {dimension: ['1', 'OO', 'DRO'], metric: ['645']},
            {dimension: ['1', 'DL', 'PVD'], metric: ['645']},
            {dimension: ['4', 'OO', 'FAR'], metric: ['644']},
            {dimension: ['2', 'DL', 'ROC'], metric: ['644']},
            {dimension: ['2', 'OO', 'ISN'], metric: ['644']},
            {dimension: ['4', 'EV', 'STL'], metric: ['643']},
            {dimension: ['3', 'EV', 'CAE'], metric: ['643']},
            {dimension: ['4', 'UA', 'RSW'], metric: ['642']},
            {dimension: ['1', 'AS', 'BOS'], metric: ['642']},
            {dimension: ['1', 'DL', 'TUL'], metric: ['641']},
            {dimension: ['1', 'EV', 'SDF'], metric: ['641']},
            {dimension: ['2', 'F9', 'CLT'], metric: ['641']},
            {dimension: ['3', 'B6', 'MSY'], metric: ['640']},
            {dimension: ['1', 'OH', 'MHT'], metric: ['640']},
            {dimension: ['3', 'EV', 'MLU'], metric: ['640']},
            {dimension: ['1', 'DL', 'LEX'], metric: ['640']},
            {dimension: ['3', 'AS', 'BWI'], metric: ['639']},
            {dimension: ['1', 'DL', 'CAE'], metric: ['639']},
            {dimension: ['2', 'F9', 'STL'], metric: ['639']},
            {dimension: ['1', 'MQ', 'JFK'], metric: ['638']},
            {dimension: ['3', 'UA', 'IND'], metric: ['637']},
            {dimension: ['3', 'UA', 'MSN'], metric: ['637']},
            {dimension: ['1', '9E', 'SYR'], metric: ['636']},
            {dimension: ['1', 'DL', 'ALB'], metric: ['636']},
            {dimension: ['2', 'B6', 'SAV'], metric: ['635']},
            {dimension: ['4', 'DL', 'GSO'], metric: ['634']},
            {dimension: ['1', 'UA', 'EGE'], metric: ['633']},
            {dimension: ['1', 'DL', 'JAC'], metric: ['633']},
            {dimension: ['1', 'OH', 'CRW'], metric: ['633']},
            {dimension: ['3', 'AS', 'KOA'], metric: ['632']},
            {dimension: ['2', 'DL', 'OAK'], metric: ['632']},
            {dimension: ['1', 'DL', 'TLH'], metric: ['632']},
            {dimension: ['4', 'AA', 'PVD'], metric: ['632']},
            {dimension: ['2', 'OH', 'MYR'], metric: ['631']},
            {dimension: ['1', 'NK', 'SEA'], metric: ['630']},
            {dimension: ['1', 'NK', 'PHX'], metric: ['630']},
            {dimension: ['3', 'AA', 'ELP'], metric: ['630']},
            {dimension: ['2', 'B6', 'PWM'], metric: ['630']},
            {dimension: ['1', 'OH', 'MYR'], metric: ['630']},
            {dimension: ['1', 'DL', 'ANC'], metric: ['630']},
            {dimension: ['3', 'F9', 'IAD'], metric: ['629']},
            {dimension: ['3', 'DL', 'SYR'], metric: ['629']},
            {dimension: ['4', 'WN', 'LBB'], metric: ['627']},
            {dimension: ['2', 'OH', 'CRW'], metric: ['627']},
            {dimension: ['2', 'OO', 'SYR'], metric: ['627']},
            {dimension: ['4', 'OO', 'GJT'], metric: ['627']},
            {dimension: ['1', 'OO', 'GTF'], metric: ['627']},
            {dimension: ['2', 'EV', 'OMA'], metric: ['626']},
            {dimension: ['1', 'EV', 'CHS'], metric: ['626']},
            {dimension: ['2', 'DL', 'BZN'], metric: ['626']},
            {dimension: ['2', '9E', 'IND'], metric: ['625']},
            {dimension: ['1', 'EV', 'CRW'], metric: ['625']},
            {dimension: ['4', 'EV', 'SHV'], metric: ['625']},
            {dimension: ['3', 'EV', 'GPT'], metric: ['624']},
            {dimension: ['3', 'EV', 'LIT'], metric: ['624']},
            {dimension: ['3', 'DL', 'BOI'], metric: ['624']},
            {dimension: ['2', 'F9', 'IAH'], metric: ['623']},
            {dimension: ['4', 'OO', 'BZN'], metric: ['623']},
            {dimension: ['4', 'F9', 'ISP'], metric: ['623']},
            {dimension: ['4', 'OO', 'MDW'], metric: ['622']},
            {dimension: ['3', 'DL', 'MLB'], metric: ['622']},
            {dimension: ['1', 'NK', 'LBE'], metric: ['621']},
            {dimension: ['3', 'F9', 'SAT'], metric: ['621']},
            {dimension: ['1', 'OO', 'TYS'], metric: ['621']},
            {dimension: ['4', 'B6', 'CHS'], metric: ['621']},
            {dimension: ['1', 'UA', 'LIH'], metric: ['621']},
            {dimension: ['2', 'UA', 'EUG'], metric: ['621']},
            {dimension: ['1', 'EV', 'MGM'], metric: ['620']},
            {dimension: ['1', 'OH', 'HSV'], metric: ['620']},
            {dimension: ['2', 'DL', 'EYW'], metric: ['620']},
            {dimension: ['1', 'UA', 'PSP'], metric: ['619']},
            {dimension: ['3', 'MQ', 'LIT'], metric: ['618']},
            {dimension: ['3', 'AA', 'COS'], metric: ['617']},
            {dimension: ['3', 'OO', 'ACV'], metric: ['617']},
            {dimension: ['2', 'DL', 'OGG'], metric: ['617']},
            {dimension: ['1', 'DL', 'OGG'], metric: ['617']},
            {dimension: ['2', 'VX', 'SEA'], metric: ['616']},
            {dimension: ['3', 'B6', 'SYR'], metric: ['616']},
            {dimension: ['4', 'WN', 'LIT'], metric: ['616']},
            {dimension: ['3', 'NK', 'MCI'], metric: ['616']},
            {dimension: ['2', 'YV', 'TUS'], metric: ['615']},
            {dimension: ['2', '9E', 'MCI'], metric: ['615']},
            {dimension: ['3', '9E', 'ORF'], metric: ['614']},
            {dimension: ['2', 'DL', 'BIL'], metric: ['614']},
            {dimension: ['2', 'UA', 'BZN'], metric: ['614']},
            {dimension: ['3', 'OO', 'JAC'], metric: ['613']},
            {dimension: ['2', 'MQ', 'GRR'], metric: ['613']},
            {dimension: ['2', 'EV', 'VPS'], metric: ['613']},
            {dimension: ['3', 'B6', 'CLE'], metric: ['612']},
            {dimension: ['3', 'B6', 'DTW'], metric: ['612']},
            {dimension: ['1', '9E', 'DSM'], metric: ['612']},
            {dimension: ['3', 'DL', 'MYR'], metric: ['612']},
            {dimension: ['4', 'AA', 'CMH'], metric: ['611']},
            {dimension: ['2', 'DL', 'CAK'], metric: ['611']},
            {dimension: ['4', 'DL', 'GSP'], metric: ['610']},
            {dimension: ['3', 'F9', 'SLC'], metric: ['609']},
            {dimension: ['3', 'YX', 'BNA'], metric: ['609']},
            {dimension: ['2', 'OO', 'ACV'], metric: ['609']},
            {dimension: ['3', '9E', 'RIC'], metric: ['609']},
            {dimension: ['1', 'EV', 'RDU'], metric: ['609']},
            {dimension: ['2', 'DL', 'TUL'], metric: ['608']},
            {dimension: ['1', 'DL', 'SYR'], metric: ['608']},
            {dimension: ['4', 'WN', 'PBI'], metric: ['608']},
            {dimension: ['3', 'OO', 'PIT'], metric: ['606']},
            {dimension: ['1', 'OH', 'ILM'], metric: ['606']},
            {dimension: ['1', 'EV', 'CRP'], metric: ['606']},
            {dimension: ['2', 'MQ', 'RDU'], metric: ['605']},
            {dimension: ['4', 'WN', 'IAD'], metric: ['605']},
            {dimension: ['1', '9E', 'IND'], metric: ['605']},
            {dimension: ['4', 'UA', 'OGG'], metric: ['605']},
            {dimension: ['4', 'EV', 'MKE'], metric: ['605']},
            {dimension: ['3', 'WN', 'PWM'], metric: ['604']},
            {dimension: ['4', 'OO', 'SYR'], metric: ['604']},
            {dimension: ['1', 'F9', 'MSP'], metric: ['604']},
            {dimension: ['4', 'AS', 'PHX'], metric: ['604']},
            {dimension: ['1', 'WN', 'FNT'], metric: ['604']},
            {dimension: ['1', 'B6', 'BTV'], metric: ['603']},
            {dimension: ['2', 'EV', 'LCH'], metric: ['602']},
            {dimension: ['2', 'WN', 'PWM'], metric: ['602']},
            {dimension: ['3', 'OO', 'LGB'], metric: ['602']},
            {dimension: ['3', 'B6', 'CLT'], metric: ['601']},
            {dimension: ['1', 'EV', 'VPS'], metric: ['601']},
            {dimension: ['3', 'B6', 'PWM'], metric: ['601']},
            {dimension: ['1', 'UA', 'OMA'], metric: ['601']},
            {dimension: ['4', 'WN', 'LGB'], metric: ['601']},
            {dimension: ['4', 'DL', 'PNS'], metric: ['601']},
            {dimension: ['2', 'YV', 'MFE'], metric: ['600']},
            {dimension: ['3', 'WN', 'ICT'], metric: ['600']},
            {dimension: ['1', 'OH', 'IAD'], metric: ['599']},
            {dimension: ['2', 'MQ', 'CMI'], metric: ['598']},
            {dimension: ['1', 'B6', 'SAV'], metric: ['598']},
            {dimension: ['3', 'YX', 'JAX'], metric: ['596']},
            {dimension: ['3', 'EV', 'SAV'], metric: ['596']},
            {dimension: ['2', 'OO', 'MEM'], metric: ['596']},
            {dimension: ['1', 'UA', 'MSN'], metric: ['596']},
            {dimension: ['4', 'OO', 'TYS'], metric: ['595']},
            {dimension: ['3', 'EV', 'BOS'], metric: ['594']},
            {dimension: ['1', 'UA', 'RNO'], metric: ['592']},
            {dimension: ['1', 'DL', 'GPT'], metric: ['592']},
            {dimension: ['3', 'F9', 'MSP'], metric: ['591']},
            {dimension: ['3', 'AS', 'MCO'], metric: ['591']},
            {dimension: ['4', 'EV', 'JAN'], metric: ['591']},
            {dimension: ['3', 'DL', 'OAK'], metric: ['590']},
            {dimension: ['2', 'OO', 'TWF'], metric: ['589']},
            {dimension: ['2', 'AS', 'AUS'], metric: ['589']},
            {dimension: ['3', 'VX', 'SEA'], metric: ['589']},
            {dimension: ['2', 'EV', 'SAV'], metric: ['589']},
            {dimension: ['2', 'YX', 'MEM'], metric: ['588']},
            {dimension: ['1', 'B6', 'ROC'], metric: ['587']},
            {dimension: ['4', 'UA', 'PBI'], metric: ['587']},
            {dimension: ['2', 'OO', 'PIH'], metric: ['587']},
            {dimension: ['4', 'AA', 'OKC'], metric: ['585']},
            {dimension: ['1', 'EV', 'HSV'], metric: ['585']},
            {dimension: ['2', 'DL', 'GPT'], metric: ['584']},
            {dimension: ['2', 'UA', 'CLT'], metric: ['584']},
            {dimension: ['3', 'OO', 'ISN'], metric: ['583']},
            {dimension: ['1', 'DL', 'CAK'], metric: ['583']},
            {dimension: ['2', 'OO', 'LIT'], metric: ['583']},
            {dimension: ['4', 'OO', 'IDA'], metric: ['583']},
            {dimension: ['3', 'DL', 'DAY'], metric: ['582']},
            {dimension: ['3', 'EV', 'ORF'], metric: ['582']},
            {dimension: ['1', 'OO', 'CAK'], metric: ['581']},
            {dimension: ['3', 'F9', 'STL'], metric: ['581']},
            {dimension: ['1', 'F9', 'SAN'], metric: ['581']},
            {dimension: ['2', 'YV', 'DTW'], metric: ['581']},
            {dimension: ['4', 'AA', 'CLE'], metric: ['581']},
            {dimension: ['1', 'YX', 'MEM'], metric: ['580']},
            {dimension: ['2', 'EV', 'CRP'], metric: ['580']},
            {dimension: ['2', 'YX', 'JFK'], metric: ['579']},
            {dimension: ['4', 'F9', 'CLE'], metric: ['579']},
            {dimension: ['1', '9E', 'MCI'], metric: ['578']},
            {dimension: ['1', 'F9', 'MSY'], metric: ['578']},
            {dimension: ['2', 'F9', 'DTW'], metric: ['578']},
            {dimension: ['3', 'EV', 'GRR'], metric: ['577']},
            {dimension: ['1', 'YV', 'CRP'], metric: ['577']},
            {dimension: ['1', 'OH', 'ORF'], metric: ['577']},
            {dimension: ['3', 'OO', 'PLN'], metric: ['575']},
            {dimension: ['3', 'OO', 'YUM'], metric: ['575']},
            {dimension: ['4', 'OO', 'AVL'], metric: ['574']},
            {dimension: ['3', 'F9', 'MKE'], metric: ['574']},
            {dimension: ['4', 'OO', 'EUG'], metric: ['574']},
            {dimension: ['2', 'AS', 'IAD'], metric: ['574']},
            {dimension: ['4', 'DL', 'BUF'], metric: ['573']},
            {dimension: ['3', 'EV', 'RST'], metric: ['573']},
            {dimension: ['2', 'MQ', 'BOS'], metric: ['573']},
            {dimension: ['2', 'MQ', 'PNS'], metric: ['572']},
            {dimension: ['1', 'EV', 'BRO'], metric: ['572']},
            {dimension: ['1', 'VX', 'DCA'], metric: ['572']},
            {dimension: ['3', 'EV', 'MAF'], metric: ['572']},
            {dimension: ['4', 'EV', 'TUL'], metric: ['571']},
            {dimension: ['4', 'OO', 'LNK'], metric: ['571']},
            {dimension: ['2', 'EV', 'GRK'], metric: ['570']},
            {dimension: ['2', 'YV', 'ATL'], metric: ['570']},
            {dimension: ['4', 'DL', 'MDW'], metric: ['570']},
            {dimension: ['3', 'B6', 'DEN'], metric: ['569']},
            {dimension: ['1', 'YV', 'MEM'], metric: ['569']},
            {dimension: ['3', 'AS', 'BUR'], metric: ['569']},
            {dimension: ['2', 'YV', 'AMA'], metric: ['568']},
            {dimension: ['1', 'EV', 'GPT'], metric: ['568']},
            {dimension: ['1', 'MQ', 'CMI'], metric: ['568']},
            {dimension: ['1', 'MQ', 'PIT'], metric: ['568']},
            {dimension: ['2', 'YX', 'MKE'], metric: ['568']},
            {dimension: ['2', 'OH', 'AGS'], metric: ['568']},
            {dimension: ['2', 'MQ', 'ROC'], metric: ['568']},
            {dimension: ['3', 'B6', 'SMF'], metric: ['567']},
            {dimension: ['2', '9E', 'STL'], metric: ['567']},
            {dimension: ['3', 'MQ', 'BNA'], metric: ['567']},
            {dimension: ['3', 'WN', 'CRP'], metric: ['566']},
            {dimension: ['1', '9E', 'CLE'], metric: ['566']},
            {dimension: ['2', 'DL', 'MDT'], metric: ['566']},
            {dimension: ['2', 'OO', 'RDD'], metric: ['566']},
            {dimension: ['4', 'OO', 'MRY'], metric: ['566']},
            {dimension: ['1', 'DL', 'BZN'], metric: ['564']},
            {dimension: ['3', 'UA', 'LIH'], metric: ['564']},
            {dimension: ['1', 'NK', 'PIT'], metric: ['564']},
            {dimension: ['4', 'AS', 'SMF'], metric: ['564']},
            {dimension: ['2', 'EV', 'MAF'], metric: ['564']},
            {dimension: ['1', 'UA', 'EUG'], metric: ['564']},
            {dimension: ['3', 'VX', 'BOS'], metric: ['564']},
            {dimension: ['1', 'EV', 'SAV'], metric: ['563']},
            {dimension: ['1', 'F9', 'ISP'], metric: ['563']},
            {dimension: ['3', 'YV', 'CRP'], metric: ['563']},
            {dimension: ['4', 'B6', 'PIT'], metric: ['562']},
            {dimension: ['2', 'F9', 'IAD'], metric: ['561']},
            {dimension: ['3', 'DL', 'EYW'], metric: ['561']},
            {dimension: ['3', 'OO', 'SHV'], metric: ['561']},
            {dimension: ['2', 'UA', 'ORF'], metric: ['560']},
            {dimension: ['1', 'EV', 'BTV'], metric: ['559']},
            {dimension: ['2', 'OH', 'PHF'], metric: ['559']},
            {dimension: ['2', 'F9', 'RSW'], metric: ['559']},
            {dimension: ['1', 'EV', 'CLL'], metric: ['559']},
            {dimension: ['1', 'YV', 'OKC'], metric: ['559']},
            {dimension: ['2', 'OO', 'ORF'], metric: ['558']},
            {dimension: ['1', 'EV', 'ORF'], metric: ['558']},
            {dimension: ['3', 'AA', 'LIH'], metric: ['557']},
            {dimension: ['1', 'AS', 'MCO'], metric: ['557']},
            {dimension: ['1', 'DL', 'EYW'], metric: ['557']},
            {dimension: ['1', 'MQ', 'ORF'], metric: ['556']},
            {dimension: ['2', 'UA', 'ANC'], metric: ['556']},
            {dimension: ['3', 'EV', 'CHS'], metric: ['556']},
            {dimension: ['2', 'NK', 'LBE'], metric: ['555']},
            {dimension: ['1', 'B6', 'ATL'], metric: ['554']},
            {dimension: ['1', 'OO', 'IND'], metric: ['554']},
            {dimension: ['3', 'EV', 'GRK'], metric: ['554']},
            {dimension: ['1', 'NK', 'BDL'], metric: ['554']},
            {dimension: ['4', 'EV', 'HPN'], metric: ['554']},
            {dimension: ['2', 'OO', 'SCE'], metric: ['554']},
            {dimension: ['1', 'OO', 'LSE'], metric: ['553']},
            {dimension: ['4', 'OO', 'CMH'], metric: ['553']},
            {dimension: ['2', 'B6', 'DEN'], metric: ['553']},
            {dimension: ['1', 'MQ', 'CLE'], metric: ['553']},
            {dimension: ['2', 'DL', 'LEX'], metric: ['553']},
            {dimension: ['2', 'OH', 'ORD'], metric: ['552']},
            {dimension: ['3', 'UA', 'CHS'], metric: ['552']},
            {dimension: ['1', 'VX', 'PDX'], metric: ['550']},
            {dimension: ['2', 'B6', 'ROC'], metric: ['550']},
            {dimension: ['1', 'YV', 'DTW'], metric: ['549']},
            {dimension: ['1', 'EV', 'ROC'], metric: ['549']},
            {dimension: ['3', 'EV', 'CAK'], metric: ['549']},
            {dimension: ['2', 'F9', 'MIA'], metric: ['548']},
            {dimension: ['3', 'OO', 'MOB'], metric: ['548']},
            {dimension: ['3', 'F9', 'DTW'], metric: ['548']},
            {dimension: ['4', 'OO', 'DSM'], metric: ['548']},
            {dimension: ['3', 'OH', 'CAK'], metric: ['547']},
            {dimension: ['2', 'YV', 'MCI'], metric: ['547']},
            {dimension: ['1', 'AA', 'KOA'], metric: ['547']},
            {dimension: ['2', 'AA', 'LIH'], metric: ['546']},
            {dimension: ['2', 'B6', 'PVD'], metric: ['546']},
            {dimension: ['2', 'F9', 'DCA'], metric: ['545']},
            {dimension: ['2', '9E', 'BWI'], metric: ['545']},
            {dimension: ['2', 'OO', 'MOB'], metric: ['545']},
            {dimension: ['2', 'B6', 'BNA'], metric: ['545']},
            {dimension: ['3', 'NK', 'BDL'], metric: ['545']},
            {dimension: ['1', 'OO', 'TWF'], metric: ['544']},
            {dimension: ['1', 'OO', 'MSO'], metric: ['544']},
            {dimension: ['2', 'B6', 'BTV'], metric: ['544']},
            {dimension: ['1', 'OH', 'DTW'], metric: ['544']},
            {dimension: ['1', 'OO', 'ACV'], metric: ['543']},
            {dimension: ['1', 'YV', 'ATL'], metric: ['543']},
            {dimension: ['1', 'YV', 'CLT'], metric: ['543']},
            {dimension: ['2', 'F9', 'SEA'], metric: ['543']},
            {dimension: ['1', 'WN', 'PWM'], metric: ['543']},
            {dimension: ['4', 'AA', 'RIC'], metric: ['543']},
            {dimension: ['3', 'UA', 'EUG'], metric: ['542']},
            {dimension: ['4', 'EV', 'ORF'], metric: ['542']},
            {dimension: ['2', 'G4', 'IND'], metric: ['542']},
            {dimension: ['1', 'DL', 'ROC'], metric: ['542']},
            {dimension: ['2', 'DL', 'ICT'], metric: ['542']},
            {dimension: ['1', 'UA', 'IND'], metric: ['542']},
            {dimension: ['1', 'WN', 'PNS'], metric: ['542']},
            {dimension: ['4', 'B6', 'AUS'], metric: ['541']},
            {dimension: ['1', 'MQ', 'CLT'], metric: ['541']},
            {dimension: ['2', 'EV', 'BTV'], metric: ['541']},
            {dimension: ['2', 'UA', 'DSM'], metric: ['541']},
            {dimension: ['1', '9E', 'BTV'], metric: ['541']},
            {dimension: ['1', 'B6', 'PVD'], metric: ['541']},
            {dimension: ['2', 'AA', 'BUF'], metric: ['541']},
            {dimension: ['1', 'WN', 'RIC'], metric: ['540']},
            {dimension: ['2', 'OO', 'ERI'], metric: ['540']},
            {dimension: ['4', 'UA', 'SJC'], metric: ['540']},
            {dimension: ['1', 'B6', 'PWM'], metric: ['540']},
            {dimension: ['4', 'UA', 'DTW'], metric: ['539']},
            {dimension: ['2', 'YV', 'HOU'], metric: ['539']},
            {dimension: ['2', 'EV', 'CHS'], metric: ['539']},
            {dimension: ['2', 'MQ', 'PHL'], metric: ['539']},
            {dimension: ['3', 'OO', 'BOS'], metric: ['539']},
            {dimension: ['4', 'OO', 'BFL'], metric: ['538']},
            {dimension: ['1', 'WN', 'DSM'], metric: ['538']},
            {dimension: ['3', 'F9', 'IAH'], metric: ['537']},
            {dimension: ['1', 'F9', 'DCA'], metric: ['537']},
            {dimension: ['4', 'AS', 'KTN'], metric: ['535']},
            {dimension: ['3', 'OO', 'FLG'], metric: ['534']},
            {dimension: ['2', 'AA', 'PWM'], metric: ['534']},
            {dimension: ['4', 'EV', 'GSO'], metric: ['534']},
            {dimension: ['3', 'OH', 'SDF'], metric: ['534']},
            {dimension: ['3', 'EV', 'CLL'], metric: ['534']},
            {dimension: ['3', 'DL', 'BIL'], metric: ['533']},
            {dimension: ['2', 'OH', 'LGA'], metric: ['533']},
            {dimension: ['3', '9E', 'DSM'], metric: ['533']},
            {dimension: ['2', 'DL', 'DSM'], metric: ['532']},
            {dimension: ['3', 'MQ', 'ORF'], metric: ['531']},
            {dimension: ['3', 'AA', 'KOA'], metric: ['531']},
            {dimension: ['4', 'EV', 'BOS'], metric: ['531']},
            {dimension: ['1', 'MQ', 'OKC'], metric: ['530']},
            {dimension: ['1', 'B6', 'BQN'], metric: ['530']},
            {dimension: ['3', 'EV', 'MEM'], metric: ['530']},
            {dimension: ['2', 'YX', 'SYR'], metric: ['530']},
            {dimension: ['2', 'OO', 'PLN'], metric: ['530']},
            {dimension: ['1', '9E', 'JAX'], metric: ['530']},
            {dimension: ['1', '9E', 'ORD'], metric: ['529']},
            {dimension: ['4', 'NK', 'PIT'], metric: ['529']},
            {dimension: ['4', 'VX', 'SAN'], metric: ['529']},
            {dimension: ['2', 'EV', 'LBB'], metric: ['529']},
            {dimension: ['2', 'MQ', 'JAX'], metric: ['528']},
            {dimension: ['3', 'DL', 'OGG'], metric: ['528']},
            {dimension: ['3', 'VX', 'SAN'], metric: ['528']},
            {dimension: ['1', 'MQ', 'PNS'], metric: ['528']},
            {dimension: ['2', 'WN', 'RIC'], metric: ['527']},
            {dimension: ['2', '9E', 'DFW'], metric: ['527']},
            {dimension: ['4', 'B6', 'ORD'], metric: ['527']},
            {dimension: ['2', 'NK', 'PDX'], metric: ['527']},
            {dimension: ['2', '9E', 'SAV'], metric: ['527']},
            {dimension: ['4', 'OO', 'LSE'], metric: ['527']},
            {dimension: ['1', 'OH', 'ORD'], metric: ['526']},
            {dimension: ['3', 'AS', 'LIH'], metric: ['526']},
            {dimension: ['4', 'OO', 'FCA'], metric: ['526']},
            {dimension: ['4', 'B6', 'IAD'], metric: ['526']},
            {dimension: ['4', 'OO', 'BUF'], metric: ['525']},
            {dimension: ['3', '9E', 'SYR'], metric: ['525']},
            {dimension: ['2', 'F9', 'LGA'], metric: ['525']},
            {dimension: ['4', 'WN', 'HRL'], metric: ['525']},
            {dimension: ['2', 'F9', 'ISP'], metric: ['524']},
            {dimension: ['3', 'AA', 'STT'], metric: ['524']},
            {dimension: ['2', 'MQ', 'MEM'], metric: ['524']},
            {dimension: ['4', 'OO', 'GRR'], metric: ['524']},
            {dimension: ['1', 'B6', 'BNA'], metric: ['523']},
            {dimension: ['1', 'UA', 'DSM'], metric: ['523']},
            {dimension: ['1', 'OH', 'LGA'], metric: ['523']},
            {dimension: ['1', 'OO', 'AGS'], metric: ['522']},
            {dimension: ['4', 'AS', 'HNL'], metric: ['522']},
            {dimension: ['3', 'YX', 'MSY'], metric: ['522']},
            {dimension: ['1', 'OO', 'RDD'], metric: ['522']},
            {dimension: ['1', 'MQ', 'MSN'], metric: ['522']},
            {dimension: ['1', 'MQ', 'GRR'], metric: ['522']},
            {dimension: ['4', 'EV', 'MOB'], metric: ['522']},
            {dimension: ['1', 'AS', 'SIT'], metric: ['522']},
            {dimension: ['4', 'AA', 'ABQ'], metric: ['522']},
            {dimension: ['3', 'YV', 'OKC'], metric: ['522']},
            {dimension: ['2', 'WN', 'DSM'], metric: ['522']},
            {dimension: ['1', 'OO', 'PIH'], metric: ['522']},
            {dimension: ['2', 'EV', 'SAF'], metric: ['521']},
            {dimension: ['2', 'AA', 'KOA'], metric: ['521']},
            {dimension: ['4', 'F9', 'COS'], metric: ['521']},
            {dimension: ['1', '9E', 'DCA'], metric: ['521']},
            {dimension: ['2', 'OO', 'EVV'], metric: ['520']},
            {dimension: ['2', 'MQ', 'ABI'], metric: ['520']},
            {dimension: ['3', 'AA', 'OAK'], metric: ['520']},
            {dimension: ['2', 'UA', 'SAV'], metric: ['520']},
            {dimension: ['1', 'OO', 'ISN'], metric: ['519']},
            {dimension: ['3', 'OO', 'MEM'], metric: ['519']},
            {dimension: ['3', 'EV', 'PNS'], metric: ['519']},
            {dimension: ['2', 'OO', 'SPI'], metric: ['519']},
            {dimension: ['3', 'OO', 'DRO'], metric: ['518']},
            {dimension: ['3', 'F9', 'CLT'], metric: ['517']},
            {dimension: ['4', 'UA', 'PIT'], metric: ['517']},
            {dimension: ['3', 'DL', 'TLH'], metric: ['517']},
            {dimension: ['4', 'AS', 'EWR'], metric: ['517']},
            {dimension: ['4', 'B6', 'SJC'], metric: ['516']},
            {dimension: ['1', 'YV', 'PHL'], metric: ['516']},
            {dimension: ['2', 'AS', 'DAL'], metric: ['516']},
            {dimension: ['2', 'WN', 'GSP'], metric: ['516']},
            {dimension: ['4', 'AS', 'SLC'], metric: ['516']},
            {dimension: ['2', 'EV', 'ORF'], metric: ['516']},
            {dimension: ['2', 'AA', 'ALB'], metric: ['516']},
            {dimension: ['2', 'OO', 'DHN'], metric: ['516']},
            {dimension: ['4', 'UA', 'BNA'], metric: ['515']},
            {dimension: ['1', 'AA', 'OAK'], metric: ['515']},
            {dimension: ['1', 'B6', 'DEN'], metric: ['515']},
            {dimension: ['1', 'F9', 'BNA'], metric: ['515']},
            {dimension: ['1', 'YX', 'BUF'], metric: ['515']},
            {dimension: ['1', 'EV', 'MSN'], metric: ['514']},
            {dimension: ['1', 'WN', 'GSP'], metric: ['514']},
            {dimension: ['4', 'AS', 'ORD'], metric: ['514']},
            {dimension: ['3', 'G4', 'FLL'], metric: ['514']},
            {dimension: ['3', 'AA', 'JAC'], metric: ['514']},
            {dimension: ['1', 'OO', 'SPI'], metric: ['514']},
            {dimension: ['2', '9E', 'EWR'], metric: ['513']},
            {dimension: ['2', '9E', 'DCA'], metric: ['513']},
            {dimension: ['3', 'EV', 'VPS'], metric: ['513']},
            {dimension: ['1', '9E', 'ORF'], metric: ['513']},
            {dimension: ['4', 'F9', 'TTN'], metric: ['513']},
            {dimension: ['3', 'YX', 'ROC'], metric: ['513']},
            {dimension: ['1', 'DL', 'ICT'], metric: ['512']},
            {dimension: ['1', 'YV', 'HOU'], metric: ['512']},
            {dimension: ['3', 'OH', 'CHS'], metric: ['512']},
            {dimension: ['2', 'VX', 'SAN'], metric: ['512']},
            {dimension: ['1', 'DL', 'OAK'], metric: ['512']},
            {dimension: ['4', 'OO', 'TVC'], metric: ['512']},
            {dimension: ['2', 'YV', 'CLT'], metric: ['511']},
            {dimension: ['1', 'DL', 'MDT'], metric: ['511']},
            {dimension: ['3', 'AS', 'AUS'], metric: ['511']},
            {dimension: ['4', 'DL', 'JAN'], metric: ['511']},
            {dimension: ['3', 'OO', 'BHM'], metric: ['511']},
            {dimension: ['2', 'EV', 'CRW'], metric: ['510']},
            {dimension: ['2', 'OO', 'ITH'], metric: ['510']},
            {dimension: ['2', 'OO', 'MQT'], metric: ['509']},
            {dimension: ['1', 'AA', 'BUF'], metric: ['509']},
            {dimension: ['1', 'AA', 'LIH'], metric: ['509']},
            {dimension: ['1', 'OO', 'JAC'], metric: ['508']},
            {dimension: ['1', 'EV', 'ELP'], metric: ['508']},
            {dimension: ['2', 'MQ', 'BHM'], metric: ['508']},
            {dimension: ['2', 'MQ', 'GRK'], metric: ['508']},
            {dimension: ['1', 'YV', 'MAF'], metric: ['508']},
            {dimension: ['3', 'OH', 'CAE'], metric: ['507']},
            {dimension: ['1', 'EV', 'AMA'], metric: ['507']},
            {dimension: ['3', 'EV', 'ECP'], metric: ['507']},
            {dimension: ['3', 'EV', 'SBN'], metric: ['506']},
            {dimension: ['3', 'OO', 'SYR'], metric: ['506']},
            {dimension: ['4', 'OO', 'PIA'], metric: ['506']},
            {dimension: ['1', 'YX', 'MKE'], metric: ['506']},
            {dimension: ['4', 'EV', 'XNA'], metric: ['506']},
            {dimension: ['2', 'DL', 'TYS'], metric: ['505']},
            {dimension: ['1', 'YV', 'PIT'], metric: ['504']},
            {dimension: ['3', 'G4', 'VPS'], metric: ['504']},
            {dimension: ['2', 'AS', 'ONT'], metric: ['504']},
            {dimension: ['4', 'EV', 'LIT'], metric: ['504']},
            {dimension: ['1', 'YX', 'MSY'], metric: ['503']},
            {dimension: ['1', 'MQ', 'TLH'], metric: ['503']},
            {dimension: ['1', 'OO', 'MOT'], metric: ['503']},
            {dimension: ['1', 'EV', 'PIT'], metric: ['502']},
            {dimension: ['1', 'OO', 'ALB'], metric: ['502']},
            {dimension: ['2', 'OH', 'AVL'], metric: ['501']},
            {dimension: ['2', 'OH', 'FAY'], metric: ['500']},
            {dimension: ['1', 'OO', 'GFK'], metric: ['500']},
            {dimension: ['1', '9E', 'BNA'], metric: ['499']},
            {dimension: ['3', 'UA', 'GEG'], metric: ['499']},
            {dimension: ['2', 'OH', 'HPN'], metric: ['499']},
            {dimension: ['1', '9E', 'BWI'], metric: ['497']},
            {dimension: ['4', 'OO', 'DAL'], metric: ['497']},
            {dimension: ['1', 'EV', 'EVV'], metric: ['497']},
            {dimension: ['2', 'EV', 'CAK'], metric: ['497']},
            {dimension: ['3', '9E', 'IND'], metric: ['497']},
            {dimension: ['3', 'OO', 'JFK'], metric: ['496']},
            {dimension: ['2', 'UA', 'ROC'], metric: ['496']},
            {dimension: ['3', 'YX', 'MEM'], metric: ['496']},
            {dimension: ['2', 'DL', 'PWM'], metric: ['495']},
            {dimension: ['1', 'B6', 'SMF'], metric: ['495']},
            {dimension: ['4', 'DL', 'HSV'], metric: ['495']},
            {dimension: ['1', 'OO', 'FLG'], metric: ['495']},
            {dimension: ['1', 'EV', 'SAF'], metric: ['494']},
            {dimension: ['1', 'OH', 'BNA'], metric: ['494']},
            {dimension: ['2', 'VX', 'BOS'], metric: ['493']},
            {dimension: ['4', 'DL', 'HOU'], metric: ['493']},
            {dimension: ['2', 'DL', 'TUS'], metric: ['493']},
            {dimension: ['3', 'YV', 'ABQ'], metric: ['493']},
            {dimension: ['1', 'B6', 'PDX'], metric: ['492']},
            {dimension: ['2', 'OO', 'JMS'], metric: ['492']},
            {dimension: ['3', 'OH', 'MYR'], metric: ['492']},
            {dimension: ['1', 'OO', 'GCC'], metric: ['491']},
            {dimension: ['3', 'YV', 'MAF'], metric: ['491']},
            {dimension: ['1', 'OO', 'CMH'], metric: ['491']},
            {dimension: ['2', 'OO', 'GCC'], metric: ['491']},
            {dimension: ['4', 'AA', 'RNO'], metric: ['491']},
            {dimension: ['2', 'YV', 'MSP'], metric: ['490']},
            {dimension: ['3', 'MQ', 'RIC'], metric: ['490']},
            {dimension: ['1', 'AA', 'CHS'], metric: ['489']},
            {dimension: ['3', 'UA', 'ALB'], metric: ['489']},
            {dimension: ['1', 'OH', 'SRQ'], metric: ['488']},
            {dimension: ['4', 'OO', 'GRB'], metric: ['488']},
            {dimension: ['3', 'AA', 'GEG'], metric: ['488']},
            {dimension: ['1', 'DL', 'TYS'], metric: ['487']},
            {dimension: ['2', 'OH', 'OAJ'], metric: ['487']},
            {dimension: ['1', 'OH', 'CHA'], metric: ['487']},
            {dimension: ['1', 'OO', 'JMS'], metric: ['487']},
            {dimension: ['1', 'NK', 'CAK'], metric: ['487']},
            {dimension: ['2', 'UA', 'PSP'], metric: ['487']},
            {dimension: ['1', 'OO', 'HDN'], metric: ['486']},
            {dimension: ['1', 'OO', 'ABE'], metric: ['486']},
            {dimension: ['4', 'NK', 'SAN'], metric: ['486']},
            {dimension: ['1', 'DL', 'TUS'], metric: ['486']},
            {dimension: ['2', 'NK', 'BDL'], metric: ['486']},
            {dimension: ['4', 'UA', 'MCI'], metric: ['486']},
            {dimension: ['4', 'DL', 'SRQ'], metric: ['485']},
            {dimension: ['3', 'MQ', 'RDU'], metric: ['485']},
            {dimension: ['1', 'DL', 'ABQ'], metric: ['485']},
            {dimension: ['2', '9E', 'GSO'], metric: ['485']},
            {dimension: ['1', 'MQ', 'SDF'], metric: ['484']},
            {dimension: ['3', 'DL', 'PWM'], metric: ['483']},
            {dimension: ['2', 'UA', 'IND'], metric: ['483']},
            {dimension: ['4', 'OO', 'XNA'], metric: ['482']},
            {dimension: ['2', 'EV', 'AMA'], metric: ['482']},
            {dimension: ['4', 'DL', 'OKC'], metric: ['481']},
            {dimension: ['3', 'F9', 'PDX'], metric: ['480']},
            {dimension: ['4', 'EV', 'SGF'], metric: ['480']},
            {dimension: ['3', 'B6', 'BTV'], metric: ['480']},
            {dimension: ['1', 'OO', 'MGM'], metric: ['479']},
            {dimension: ['3', 'OH', 'GSO'], metric: ['478']},
            {dimension: ['1', 'OO', 'MDT'], metric: ['476']},
            {dimension: ['2', 'NK', 'SJU'], metric: ['476']},
            {dimension: ['4', 'HA', 'LAX'], metric: ['476']},
            {dimension: ['4', 'OO', 'MOT'], metric: ['476']},
            {dimension: ['3', 'B6', 'ROC'], metric: ['476']},
            {dimension: ['2', 'OO', 'CWA'], metric: ['476']},
            {dimension: ['2', 'YX', 'ORF'], metric: ['475']},
            {dimension: ['3', '9E', 'PWM'], metric: ['474']},
            {dimension: ['1', 'VX', 'ORD'], metric: ['474']},
            {dimension: ['1', 'EV', 'GNV'], metric: ['474']},
            {dimension: ['2', 'YV', 'LBB'], metric: ['474']},
            {dimension: ['2', 'OO', 'STS'], metric: ['474']},
            {dimension: ['1', 'DL', 'DSM'], metric: ['474']},
            {dimension: ['2', 'WN', 'FNT'], metric: ['473']},
            {dimension: ['1', 'OO', 'BHM'], metric: ['473']},
            {dimension: ['1', 'EV', 'BNA'], metric: ['472']},
            {dimension: ['4', 'DL', 'SJU'], metric: ['472']},
            {dimension: ['4', 'DL', 'VPS'], metric: ['472']},
            {dimension: ['2', '9E', 'GNV'], metric: ['471']},
            {dimension: ['4', 'OO', 'SHV'], metric: ['471']},
            {dimension: ['2', 'AA', 'GEG'], metric: ['471']},
            {dimension: ['3', 'UA', 'CMH'], metric: ['470']},
            {dimension: ['1', 'MQ', 'RDU'], metric: ['470']},
            {dimension: ['3', 'EV', 'MLI'], metric: ['470']},
            {dimension: ['3', 'EV', 'OMA'], metric: ['470']},
            {dimension: ['3', 'B6', 'SAV'], metric: ['470']},
            {dimension: ['3', 'UA', 'ROC'], metric: ['469']},
            {dimension: ['2', 'MQ', 'CID'], metric: ['469']},
            {dimension: ['2', 'OH', 'BDL'], metric: ['469']},
            {dimension: ['2', 'DL', 'RNO'], metric: ['469']},
            {dimension: ['4', 'DL', 'LIT'], metric: ['468']},
            {dimension: ['2', 'HA', 'LAS'], metric: ['468']},
            {dimension: ['4', 'OO', 'AUS'], metric: ['468']},
            {dimension: ['4', 'AA', 'CHS'], metric: ['468']},
            {dimension: ['4', 'VX', 'SEA'], metric: ['468']},
            {dimension: ['2', 'OH', 'HSV'], metric: ['468']},
            {dimension: ['3', 'DL', 'FCA'], metric: ['467']},
            {dimension: ['3', 'OH', 'IAD'], metric: ['467']},
            {dimension: ['1', 'YX', 'CHS'], metric: ['467']},
            {dimension: ['1', 'DL', 'FSD'], metric: ['467']},
            {dimension: ['2', 'OO', 'SGF'], metric: ['466']},
            {dimension: ['2', 'EV', 'AGS'], metric: ['466']},
            {dimension: ['2', 'YV', 'CVG'], metric: ['466']},
            {dimension: ['2', 'OO', 'COD'], metric: ['466']},
            {dimension: ['3', 'F9', 'LGA'], metric: ['465']},
            {dimension: ['3', 'EV', 'BNA'], metric: ['465']},
            {dimension: ['2', 'AA', 'PSP'], metric: ['465']},
            {dimension: ['1', 'EV', 'EYW'], metric: ['464']},
            {dimension: ['4', 'AA', 'OGG'], metric: ['464']},
            {dimension: ['3', 'OH', 'ILM'], metric: ['463']},
            {dimension: ['2', 'UA', 'GEG'], metric: ['463']},
            {dimension: ['2', 'DL', 'ELP'], metric: ['463']},
            {dimension: ['3', 'F9', 'DCA'], metric: ['462']},
            {dimension: ['3', 'B6', 'BNA'], metric: ['462']},
            {dimension: ['2', 'EV', 'BRO'], metric: ['462']},
            {dimension: ['3', 'OO', 'MEI'], metric: ['462']},
            {dimension: ['1', 'F9', 'SAT'], metric: ['462']},
            {dimension: ['1', 'DL', 'BIL'], metric: ['461']},
            {dimension: ['3', '9E', 'IAH'], metric: ['461']},
            {dimension: ['4', 'WN', 'GRR'], metric: ['461']},
            {dimension: ['3', 'OO', 'TWF'], metric: ['461']},
            {dimension: ['3', 'EV', 'AVL'], metric: ['460']},
            {dimension: ['3', 'G4', 'MYR'], metric: ['460']},
            {dimension: ['4', 'AA', 'IAD'], metric: ['460']},
            {dimension: ['2', 'EV', 'ROA'], metric: ['460']},
            {dimension: ['2', 'EV', 'RST'], metric: ['460']},
            {dimension: ['3', '9E', 'BTV'], metric: ['460']},
            {dimension: ['3', 'YV', 'ATL'], metric: ['459']},
            {dimension: ['4', 'DL', 'TLH'], metric: ['458']},
            {dimension: ['1', 'AS', 'BET'], metric: ['458']},
            {dimension: ['1', 'NK', 'SJU'], metric: ['458']},
            {dimension: ['3', 'OO', 'PIH'], metric: ['457']},
            {dimension: ['1', 'AA', 'GEG'], metric: ['457']},
            {dimension: ['2', 'MQ', 'TLH'], metric: ['457']},
            {dimension: ['1', 'MQ', 'RIC'], metric: ['457']},
            {dimension: ['4', 'DL', 'ECP'], metric: ['457']},
            {dimension: ['2', 'OO', 'RIC'], metric: ['457']},
            {dimension: ['1', 'MQ', 'ABI'], metric: ['456']},
            {dimension: ['2', 'OH', 'LEX'], metric: ['456']},
            {dimension: ['1', 'DL', 'MYR'], metric: ['456']},
            {dimension: ['2', 'OH', 'IND'], metric: ['456']},
            {dimension: ['2', 'F9', 'SJU'], metric: ['456']},
            {dimension: ['3', 'NK', 'PDX'], metric: ['456']},
            {dimension: ['2', 'AS', 'BET'], metric: ['455']},
            {dimension: ['4', 'OO', 'MSO'], metric: ['455']},
            {dimension: ['3', 'MQ', 'BOS'], metric: ['454']},
            {dimension: ['4', 'OO', 'STS'], metric: ['454']},
            {dimension: ['2', 'F9', 'MSY'], metric: ['453']},
            {dimension: ['3', 'YV', 'DTW'], metric: ['453']},
            {dimension: ['1', 'DL', 'FNT'], metric: ['453']},
            {dimension: ['1', 'F9', 'LGA'], metric: ['453']},
            {dimension: ['2', 'F9', 'PDX'], metric: ['453']},
            {dimension: ['3', 'EV', 'SDF'], metric: ['453']},
            {dimension: ['3', 'YX', 'OMA'], metric: ['452']},
            {dimension: ['1', 'HA', 'LAS'], metric: ['452']},
            {dimension: ['3', '9E', 'BUF'], metric: ['452']},
            {dimension: ['2', 'UA', 'ABQ'], metric: ['452']},
            {dimension: ['3', 'OO', 'RDD'], metric: ['451']},
            {dimension: ['2', 'OO', 'HYS'], metric: ['451']},
            {dimension: ['2', 'OO', 'ALB'], metric: ['451']},
            {dimension: ['1', 'MQ', 'CID'], metric: ['451']},
            {dimension: ['1', 'YV', 'MCI'], metric: ['451']},
            {dimension: ['4', 'F9', 'AUS'], metric: ['451']},
            {dimension: ['3', 'OO', 'DHN'], metric: ['451']},
            {dimension: ['3', 'EV', 'ROC'], metric: ['450']},
            {dimension: ['2', 'EV', 'PIT'], metric: ['450']},
            {dimension: ['1', 'NK', 'PBI'], metric: ['450']},
            {dimension: ['3', 'OH', 'CRW'], metric: ['450']},
            {dimension: ['1', 'EV', 'FSM'], metric: ['450']},
            {dimension: ['3', 'EV', 'SAF'], metric: ['449']},
            {dimension: ['1', 'F9', 'IND'], metric: ['449']},
            {dimension: ['3', 'AS', 'IAD'], metric: ['449']},
            {dimension: ['2', 'AA', 'ILM'], metric: ['449']},
            {dimension: ['3', 'DL', 'MSO'], metric: ['449']},
            {dimension: ['1', 'DL', 'RNO'], metric: ['448']},
            {dimension: ['2', '9E', 'PHL'], metric: ['448']},
            {dimension: ['2', 'YV', 'PHL'], metric: ['448']},
            {dimension: ['2', 'EV', 'SDF'], metric: ['448']},
            {dimension: ['1', 'OH', 'OAJ'], metric: ['448']},
            {dimension: ['3', 'OO', 'COD'], metric: ['448']},
            {dimension: ['3', 'UA', 'GRR'], metric: ['448']},
            {dimension: ['4', 'DL', 'PVD'], metric: ['447']},
            {dimension: ['4', 'WN', 'AMA'], metric: ['446']},
            {dimension: ['2', 'OH', 'CMH'], metric: ['446']},
            {dimension: ['2', '9E', 'BNA'], metric: ['446']},
            {dimension: ['4', 'EV', 'CMH'], metric: ['445']},
            {dimension: ['1', 'OO', 'ITH'], metric: ['445']},
            {dimension: ['1', 'OH', 'FAY'], metric: ['445']},
            {dimension: ['4', 'OO', 'LGA'], metric: ['444']},
            {dimension: ['2', 'DL', 'FSD'], metric: ['444']},
            {dimension: ['2', 'DL', 'STT'], metric: ['444']},
            {dimension: ['3', 'OO', 'LIT'], metric: ['444']},
            {dimension: ['4', 'OO', 'LEX'], metric: ['444']},
            {dimension: ['1', 'OH', 'DSM'], metric: ['443']},
            {dimension: ['1', 'AS', 'BWI'], metric: ['443']},
            {dimension: ['3', 'AA', 'BUF'], metric: ['443']},
            {dimension: ['3', 'OO', 'ABE'], metric: ['443']},
            {dimension: ['1', 'UA', 'ONT'], metric: ['443']},
            {dimension: ['3', 'DL', 'MDT'], metric: ['443']},
            {dimension: ['2', 'OO', 'GSP'], metric: ['443']},
            {dimension: ['1', 'EV', 'BUF'], metric: ['443']},
            {dimension: ['3', 'NK', 'SJU'], metric: ['443']},
            {dimension: ['1', 'AA', 'ALB'], metric: ['442']},
            {dimension: ['1', 'G4', 'IND'], metric: ['442']},
            {dimension: ['3', 'OO', 'GSP'], metric: ['442']},
            {dimension: ['1', '9E', 'SAV'], metric: ['442']},
            {dimension: ['2', 'OO', 'BMI'], metric: ['442']},
            {dimension: ['2', 'YV', 'SDF'], metric: ['441']},
            {dimension: ['4', 'B6', 'MSY'], metric: ['441']},
            {dimension: ['3', 'EV', 'LBB'], metric: ['441']},
            {dimension: ['2', 'YV', 'BHM'], metric: ['441']},
            {dimension: ['1', 'YX', 'ORF'], metric: ['441']},
            {dimension: ['3', 'VX', 'ORD'], metric: ['440']},
            {dimension: ['1', 'OO', 'ERI'], metric: ['440']},
            {dimension: ['3', 'WN', 'DSM'], metric: ['439']},
            {dimension: ['2', 'EV', 'ECP'], metric: ['439']},
            {dimension: ['1', 'F9', 'DTW'], metric: ['439']},
            {dimension: ['3', 'DL', 'ICT'], metric: ['439']},
            {dimension: ['4', 'F9', 'MKE'], metric: ['438']},
            {dimension: ['1', 'OO', 'PLN'], metric: ['438']},
            {dimension: ['3', 'OO', 'RIC'], metric: ['438']},
            {dimension: ['1', 'YX', 'OMA'], metric: ['438']},
            {dimension: ['3', 'WN', 'RIC'], metric: ['438']},
            {dimension: ['1', 'EV', 'DSM'], metric: ['438']},
            {dimension: ['2', 'F9', 'BNA'], metric: ['437']},
            {dimension: ['3', 'AA', 'PWM'], metric: ['437']},
            {dimension: ['1', 'OO', 'PIT'], metric: ['437']},
            {dimension: ['3', 'EV', 'BUF'], metric: ['437']},
            {dimension: ['4', 'B6', 'ATL'], metric: ['437']},
            {dimension: ['1', 'OH', 'CHO'], metric: ['437']},
            {dimension: ['3', 'OO', 'ORF'], metric: ['437']},
            {dimension: ['3', 'EV', 'AEX'], metric: ['437']},
            {dimension: ['4', 'OO', 'MLI'], metric: ['436']},
            {dimension: ['3', 'WN', 'GSP'], metric: ['436']},
            {dimension: ['2', '9E', 'RIC'], metric: ['436']},
            {dimension: ['4', 'B6', 'OAK'], metric: ['436']},
            {dimension: ['2', 'OH', 'MKE'], metric: ['436']},
            {dimension: ['1', 'UA', 'JAX'], metric: ['436']},
            {dimension: ['4', 'OO', 'HLN'], metric: ['435']},
            {dimension: ['3', 'EV', 'MSN'], metric: ['435']},
            {dimension: ['4', 'OO', 'CAK'], metric: ['435']},
            {dimension: ['3', 'OO', 'MGM'], metric: ['435']},
            {dimension: ['3', '9E', 'JAX'], metric: ['434']},
            {dimension: ['3', 'F9', 'SEA'], metric: ['434']},
            {dimension: ['2', 'EV', 'BWI'], metric: ['434']},
            {dimension: ['1', 'OO', 'EWR'], metric: ['434']},
            {dimension: ['2', 'EV', 'PVD'], metric: ['434']},
            {dimension: ['1', 'YV', 'CVG'], metric: ['434']},
            {dimension: ['2', 'OO', 'SUN'], metric: ['434']},
            {dimension: ['2', 'EV', 'OAJ'], metric: ['433']},
            {dimension: ['3', 'OH', 'AVL'], metric: ['433']},
            {dimension: ['2', '9E', 'EVV'], metric: ['433']},
            {dimension: ['4', 'VX', 'ORD'], metric: ['433']},
            {dimension: ['2', 'AS', 'PHL'], metric: ['433']},
            {dimension: ['4', 'VX', 'BOS'], metric: ['433']},
            {dimension: ['2', 'OO', 'SHV'], metric: ['432']},
            {dimension: ['1', 'OH', 'AVL'], metric: ['432']},
            {dimension: ['3', 'AA', 'ALB'], metric: ['431']},
            {dimension: ['3', 'NK', 'LBE'], metric: ['430']},
            {dimension: ['3', 'YX', 'STL'], metric: ['430']},
            {dimension: ['2', 'AA', 'SAV'], metric: ['429']},
            {dimension: ['1', 'MQ', 'FAR'], metric: ['429']},
            {dimension: ['2', 'AS', 'SCC'], metric: ['428']},
            {dimension: ['2', 'YX', 'ALB'], metric: ['428']},
            {dimension: ['1', '9E', 'STL'], metric: ['428']},
            {dimension: ['3', 'DL', 'DSM'], metric: ['428']},
            {dimension: ['4', 'UA', 'BDL'], metric: ['428']},
            {dimension: ['4', 'B6', 'SEA'], metric: ['428']},
            {dimension: ['2', 'EV', 'BMI'], metric: ['428']},
            {dimension: ['4', 'OO', 'STL'], metric: ['428']},
            {dimension: ['2', 'DL', 'AGS'], metric: ['428']},
            {dimension: ['3', 'EV', 'BTV'], metric: ['427']},
            {dimension: ['1', 'B6', 'STT'], metric: ['427']},
            {dimension: ['4', 'EV', 'SAV'], metric: ['426']},
            {dimension: ['3', 'EV', 'LFT'], metric: ['426']},
            {dimension: ['2', 'EV', 'GNV'], metric: ['425']},
            {dimension: ['4', 'AS', 'BOS'], metric: ['425']},
            {dimension: ['3', '9E', 'BWI'], metric: ['425']},
            {dimension: ['2', 'UA', 'CMH'], metric: ['425']},
            {dimension: ['3', 'VX', 'IAD'], metric: ['425']},
            {dimension: ['2', 'MQ', 'ACT'], metric: ['425']},
            {dimension: ['1', 'AA', 'FAT'], metric: ['424']},
            {dimension: ['2', 'EV', 'RDU'], metric: ['424']},
            {dimension: ['2', 'B6', 'ORH'], metric: ['424']},
            {dimension: ['4', 'DL', 'DAL'], metric: ['423']},
            {dimension: ['1', 'EV', 'MLI'], metric: ['423']},
            {dimension: ['3', 'UA', 'DSM'], metric: ['423']},
            {dimension: ['4', 'EV', 'CAE'], metric: ['423']},
            {dimension: ['1', 'OO', 'MEM'], metric: ['423']},
            {dimension: ['2', 'AS', 'FLL'], metric: ['422']},
            {dimension: ['2', 'UA', 'ONT'], metric: ['422']},
            {dimension: ['1', 'EV', 'MHT'], metric: ['422']},
            {dimension: ['4', 'B6', 'SAN'], metric: ['421']},
            {dimension: ['3', '9E', 'CLT'], metric: ['421']},
            {dimension: ['1', 'AA', 'BOI'], metric: ['421']},
            {dimension: ['3', 'HA', 'OAK'], metric: ['421']},
            {dimension: ['1', 'OO', 'CPR'], metric: ['421']},
            {dimension: ['2', 'EV', 'BNA'], metric: ['421']},
            {dimension: ['3', 'EV', 'BRO'], metric: ['421']},
            {dimension: ['2', 'EV', 'AVL'], metric: ['421']},
            {dimension: ['4', 'WN', 'ROC'], metric: ['421']},
            {dimension: ['3', 'UA', 'MEM'], metric: ['421']},
            {dimension: ['4', 'OO', 'SCE'], metric: ['420']},
            {dimension: ['3', 'OO', 'ERI'], metric: ['420']},
            {dimension: ['1', 'OH', 'PHF'], metric: ['419']},
            {dimension: ['1', 'VX', 'DEN'], metric: ['419']},
            {dimension: ['2', 'G4', 'BLI'], metric: ['419']},
            {dimension: ['3', 'OO', 'BMI'], metric: ['418']},
            {dimension: ['2', 'MQ', 'SYR'], metric: ['418']},
            {dimension: ['1', 'VX', 'PSP'], metric: ['418']},
            {dimension: ['2', 'F9', 'CMH'], metric: ['418']},
            {dimension: ['2', 'YV', 'CHS'], metric: ['417']},
            {dimension: ['2', 'OO', 'JAC'], metric: ['417']},
            {dimension: ['2', 'YX', 'PVD'], metric: ['417']},
            {dimension: ['2', 'AS', 'ATL'], metric: ['417']},
            {dimension: ['1', 'AS', 'ONT'], metric: ['417']},
            {dimension: ['4', 'OO', 'CHO'], metric: ['416']},
            {dimension: ['3', 'OO', 'JMS'], metric: ['416']},
            {dimension: ['3', 'G4', 'LAX'], metric: ['416']},
            {dimension: ['1', 'OH', 'LEX'], metric: ['416']},
            {dimension: ['3', 'OO', 'SPI'], metric: ['416']},
            {dimension: ['3', 'MQ', 'IND'], metric: ['415']},
            {dimension: ['4', 'F9', 'STL'], metric: ['415']},
            {dimension: ['2', 'OO', 'BGM'], metric: ['415']},
            {dimension: ['1', 'OH', 'ALB'], metric: ['415']},
            {dimension: ['1', 'OH', 'CLE'], metric: ['414']},
            {dimension: ['3', 'F9', 'SJU'], metric: ['414']},
            {dimension: ['4', 'AA', 'DSM'], metric: ['414']},
            {dimension: ['3', 'OO', 'MQT'], metric: ['414']},
            {dimension: ['3', 'MQ', 'CMI'], metric: ['414']},
            {dimension: ['2', 'AS', 'BRW'], metric: ['414']},
            {dimension: ['3', '9E', 'ROC'], metric: ['413']},
            {dimension: ['3', 'OO', 'BGM'], metric: ['413']},
            {dimension: ['3', 'OO', 'ITH'], metric: ['413']},
            {dimension: ['2', 'YV', 'ICT'], metric: ['413']},
            {dimension: ['1', 'F9', 'CLT'], metric: ['413']},
            {dimension: ['1', 'MQ', 'MHK'], metric: ['413']},
            {dimension: ['2', 'F9', 'PVD'], metric: ['412']},
            {dimension: ['2', 'OO', 'BHM'], metric: ['412']},
            {dimension: ['2', 'EV', 'SBN'], metric: ['412']},
            {dimension: ['1', 'OH', 'HPN'], metric: ['412']},
            {dimension: ['3', 'UA', 'ABQ'], metric: ['412']},
            {dimension: ['4', 'AA', 'ELP'], metric: ['412']},
            {dimension: ['2', 'G4', 'LAX'], metric: ['412']},
            {dimension: ['2', 'OO', 'CPR'], metric: ['411']},
            {dimension: ['4', 'B6', 'SYR'], metric: ['411']},
            {dimension: ['1', 'AS', 'BRW'], metric: ['411']},
            {dimension: ['4', 'AA', 'MKE'], metric: ['410']},
            {dimension: ['2', 'OH', 'MEM'], metric: ['410']},
            {dimension: ['2', 'MQ', 'LEX'], metric: ['410']},
            {dimension: ['2', 'EV', 'GRB'], metric: ['410']},
            {dimension: ['2', 'AS', 'DTW'], metric: ['409']},
            {dimension: ['1', 'YX', 'CLE'], metric: ['409']},
            {dimension: ['1', 'EV', 'ROA'], metric: ['409']},
            {dimension: ['2', 'B6', 'STT'], metric: ['408']},
            {dimension: ['4', 'F9', 'MSY'], metric: ['408']},
            {dimension: ['1', '9E', 'MKE'], metric: ['408']},
            {dimension: ['1', '9E', 'IAD'], metric: ['408']},
            {dimension: ['2', 'F9', 'IND'], metric: ['408']},
            {dimension: ['3', 'AA', 'BOI'], metric: ['408']},
            {dimension: ['2', 'YV', 'SBA'], metric: ['408']},
            {dimension: ['4', 'AS', 'KOA'], metric: ['407']},
            {dimension: ['1', 'MQ', 'ICT'], metric: ['407']},
            {dimension: ['2', 'VX', 'IAD'], metric: ['407']},
            {dimension: ['1', 'EV', 'ATW'], metric: ['407']},
            {dimension: ['2', 'G4', 'VPS'], metric: ['407']},
            {dimension: ['3', 'EV', 'LCH'], metric: ['406']},
            {dimension: ['1', 'YX', 'BDL'], metric: ['406']},
            {dimension: ['4', 'F9', 'LAX'], metric: ['406']},
            {dimension: ['4', 'OO', 'BIS'], metric: ['405']},
            {dimension: ['2', 'YX', 'BTV'], metric: ['405']},
            {dimension: ['3', 'DL', 'ELP'], metric: ['404']},
            {dimension: ['1', 'DL', 'BOI'], metric: ['403']},
            {dimension: ['2', 'YX', 'MHT'], metric: ['403']},
            {dimension: ['4', 'AA', 'OMA'], metric: ['403']},
            {dimension: ['3', 'UA', 'BUF'], metric: ['403']},
            {dimension: ['4', 'DL', 'ALB'], metric: ['402']},
            {dimension: ['3', 'YX', 'JFK'], metric: ['402']},
            {dimension: ['3', 'OH', 'ORD'], metric: ['402']},
            {dimension: ['3', 'MQ', 'GRR'], metric: ['402']},
            {dimension: ['1', 'OO', 'RHI'], metric: ['401']},
            {dimension: ['3', '9E', 'DCA'], metric: ['401']},
            {dimension: ['4', 'UA', 'SLC'], metric: ['401']},
            {dimension: ['3', 'OO', 'CHO'], metric: ['401']},
            {dimension: ['3', 'OO', 'CPR'], metric: ['400']},
            {dimension: ['2', 'MQ', 'BWI'], metric: ['400']},
            {dimension: ['2', 'AS', 'MSP'], metric: ['400']},
            {dimension: ['3', 'UA', 'SAV'], metric: ['400']},
            {dimension: ['1', 'AS', 'AUS'], metric: ['399']},
            {dimension: ['2', 'HA', 'OAK'], metric: ['399']},
            {dimension: ['3', 'EV', 'LAW'], metric: ['398']},
            {dimension: ['4', 'EV', 'MLU'], metric: ['398']},
            {dimension: ['1', 'OO', 'SCE'], metric: ['398']},
            {dimension: ['1', 'OO', 'MQT'], metric: ['398']},
            {dimension: ['3', 'YV', 'LBB'], metric: ['398']},
            {dimension: ['2', 'B6', 'PSE'], metric: ['397']},
            {dimension: ['4', 'OO', 'FSD'], metric: ['397']},
            {dimension: ['1', 'OH', 'TLH'], metric: ['397']},
            {dimension: ['3', 'DL', 'FAI'], metric: ['397']},
            {dimension: ['4', 'OO', 'BIL'], metric: ['397']},
            {dimension: ['1', 'MQ', 'JAX'], metric: ['396']},
            {dimension: ['2', 'YV', 'BOI'], metric: ['396']},
            {dimension: ['2', 'UA', 'ALB'], metric: ['396']},
            {dimension: ['4', 'UA', 'PSP'], metric: ['396']},
            {dimension: ['3', 'NK', 'RSW'], metric: ['396']},
            {dimension: ['4', 'OO', 'LGB'], metric: ['396']},
            {dimension: ['2', '9E', 'CWA'], metric: ['396']},
            {dimension: ['1', 'VX', 'OGG'], metric: ['396']},
            {dimension: ['1', 'YV', 'BNA'], metric: ['396']},
            {dimension: ['4', 'DL', 'CAE'], metric: ['396']},
            {dimension: ['4', 'OO', 'DRO'], metric: ['395']},
            {dimension: ['1', 'F9', 'CMH'], metric: ['395']},
            {dimension: ['4', 'OO', 'ISN'], metric: ['395']},
            {dimension: ['2', 'DL', 'JAC'], metric: ['395']},
            {dimension: ['2', 'UA', 'MFE'], metric: ['393']},
            {dimension: ['4', 'EV', 'FSM'], metric: ['393']},
            {dimension: ['1', 'OO', 'ILM'], metric: ['392']},
            {dimension: ['3', 'HA', 'LAS'], metric: ['391']},
            {dimension: ['3', 'F9', 'BNA'], metric: ['391']},
            {dimension: ['1', 'YV', 'SDF'], metric: ['391']},
            {dimension: ['1', 'OH', 'PWM'], metric: ['391']},
            {dimension: ['4', 'UA', 'EUG'], metric: ['390']},
            {dimension: ['2', 'AA', 'STX'], metric: ['390']},
            {dimension: ['3', 'B6', 'PVD'], metric: ['390']},
            {dimension: ['1', 'YX', 'SYR'], metric: ['389']},
            {dimension: ['3', 'AS', 'PHL'], metric: ['389']},
            {dimension: ['2', 'OH', 'TLH'], metric: ['389']},
            {dimension: ['2', 'YV', 'DRO'], metric: ['389']},
            {dimension: ['2', 'AA', 'BOI'], metric: ['389']},
            {dimension: ['4', 'AS', 'BUR'], metric: ['389']},
            {dimension: ['1', '9E', 'PHL'], metric: ['389']},
            {dimension: ['2', 'OH', 'GNV'], metric: ['388']},
            {dimension: ['1', 'UA', 'CLT'], metric: ['388']},
            {dimension: ['1', 'OO', 'BGM'], metric: ['388']},
            {dimension: ['1', 'UA', 'MFE'], metric: ['388']},
            {dimension: ['1', 'DL', 'STT'], metric: ['388']},
            {dimension: ['3', 'UA', 'MFR'], metric: ['388']},
            {dimension: ['1', 'OO', 'COD'], metric: ['388']},
            {dimension: ['2', 'NK', 'CAK'], metric: ['387']},
            {dimension: ['3', 'AS', 'ONT'], metric: ['387']},
            {dimension: ['2', 'AA', 'FAT'], metric: ['387']},
            {dimension: ['3', 'B6', 'PSE'], metric: ['387']},
            {dimension: ['3', 'OO', 'SGF'], metric: ['386']},
            {dimension: ['2', 'YV', 'PIT'], metric: ['386']},
            {dimension: ['2', 'NK', 'CMH'], metric: ['386']},
            {dimension: ['1', 'G4', 'BLI'], metric: ['386']},
            {dimension: ['2', 'OO', 'ELP'], metric: ['385']},
            {dimension: ['2', 'MQ', 'FAR'], metric: ['385']},
            {dimension: ['1', 'OO', 'MTJ'], metric: ['385']},
            {dimension: ['3', 'OO', 'GCC'], metric: ['385']},
            {dimension: ['2', 'UA', 'JAX'], metric: ['385']},
            {dimension: ['2', 'YV', 'BRO'], metric: ['384']},
            {dimension: ['3', 'AS', 'BET'], metric: ['384']},
            {dimension: ['4', 'F9', 'PVD'], metric: ['384']},
            {dimension: ['3', 'MQ', 'CID'], metric: ['384']},
            {dimension: ['2', 'OH', 'PNS'], metric: ['384']},
            {dimension: ['4', 'UA', 'RNO'], metric: ['384']},
            {dimension: ['2', '9E', 'BGR'], metric: ['383']},
            {dimension: ['4', 'EV', 'MAF'], metric: ['383']},
            {dimension: ['4', 'OO', 'BHM'], metric: ['383']},
            {dimension: ['1', 'OH', 'MEM'], metric: ['383']},
            {dimension: ['4', 'DL', 'DAB'], metric: ['383']},
            {dimension: ['1', 'DL', 'KOA'], metric: ['383']},
            {dimension: ['4', 'DL', 'TYS'], metric: ['382']},
            {dimension: ['2', 'UA', 'BIL'], metric: ['382']},
            {dimension: ['2', 'YX', 'BGR'], metric: ['382']},
            {dimension: ['2', 'YX', 'DSM'], metric: ['382']},
            {dimension: ['2', 'MQ', 'OMA'], metric: ['382']},
            {dimension: ['3', 'DL', 'TYS'], metric: ['381']},
            {dimension: ['3', 'AS', 'ATL'], metric: ['381']},
            {dimension: ['2', 'EV', 'EVV'], metric: ['381']},
            {dimension: ['3', 'MQ', 'MSN'], metric: ['381']},
            {dimension: ['2', 'OH', 'AVP'], metric: ['381']},
            {dimension: ['2', 'MQ', 'MSN'], metric: ['380']},
            {dimension: ['2', 'G4', 'MYR'], metric: ['380']},
            {dimension: ['1', 'AA', 'STX'], metric: ['380']},
            {dimension: ['3', 'DL', 'CAK'], metric: ['380']},
            {dimension: ['3', 'DL', 'GPT'], metric: ['380']},
            {dimension: ['1', 'F9', 'PBI'], metric: ['380']},
            {dimension: ['2', '9E', 'IAH'], metric: ['380']},
            {dimension: ['1', 'F9', 'IAH'], metric: ['380']},
            {dimension: ['2', 'DL', 'KOA'], metric: ['379']},
            {dimension: ['1', 'EV', 'RST'], metric: ['379']},
            {dimension: ['2', 'EV', 'MSN'], metric: ['379']},
            {dimension: ['1', 'YV', 'CHS'], metric: ['379']},
            {dimension: ['3', 'OO', 'LWS'], metric: ['379']},
            {dimension: ['1', 'DL', 'ELP'], metric: ['379']},
            {dimension: ['1', 'EV', 'AGS'], metric: ['378']},
            {dimension: ['2', 'MQ', 'OKC'], metric: ['378']},
            {dimension: ['1', 'B6', 'PSE'], metric: ['378']},
            {dimension: ['2', 'YV', 'AUS'], metric: ['377']},
            {dimension: ['1', 'EV', 'ABE'], metric: ['377']},
            {dimension: ['4', 'OO', 'FNT'], metric: ['377']},
            {dimension: ['1', 'YV', 'MSP'], metric: ['376']},
            {dimension: ['2', 'OH', 'CHA'], metric: ['376']},
            {dimension: ['1', '9E', 'CMH'], metric: ['376']},
            {dimension: ['3', 'YX', 'CHS'], metric: ['376']},
            {dimension: ['3', 'OO', 'MHT'], metric: ['376']},
            {dimension: ['1', 'AS', 'SCC'], metric: ['375']},
            {dimension: ['3', 'EV', 'BMI'], metric: ['375']},
            {dimension: ['3', 'DL', 'STT'], metric: ['375']},
            {dimension: ['3', 'UA', 'CID'], metric: ['375']},
            {dimension: ['2', 'OO', 'ABE'], metric: ['374']},
            {dimension: ['3', 'OO', 'GSO'], metric: ['374']},
            {dimension: ['3', 'EV', 'EVV'], metric: ['374']},
            {dimension: ['2', 'OO', 'LFT'], metric: ['373']},
            {dimension: ['3', '9E', 'EWR'], metric: ['373']},
            {dimension: ['3', 'UA', 'CVG'], metric: ['373']},
            {dimension: ['2', 'DL', 'MSO'], metric: ['373']},
            {dimension: ['2', 'OO', 'CRW'], metric: ['373']},
            {dimension: ['3', 'EV', 'MHK'], metric: ['373']},
            {dimension: ['4', 'F9', 'SLC'], metric: ['373']},
            {dimension: ['4', 'EV', 'GRK'], metric: ['373']},
            {dimension: ['3', 'EV', 'AMA'], metric: ['373']},
            {dimension: ['2', 'UA', 'BOI'], metric: ['372']},
            {dimension: ['3', '9E', 'GRR'], metric: ['372']},
            {dimension: ['4', 'VX', 'IAD'], metric: ['371']},
            {dimension: ['2', 'EV', 'BUF'], metric: ['371']},
            {dimension: ['2', 'OH', 'JAN'], metric: ['371']},
            {dimension: ['3', 'OO', 'HYS'], metric: ['371']},
            {dimension: ['3', 'B6', 'MVY'], metric: ['371']},
            {dimension: ['3', 'B6', 'ORH'], metric: ['370']},
            {dimension: ['4', 'DL', 'SYR'], metric: ['370']},
            {dimension: ['1', 'B6', 'SRQ'], metric: ['370']},
            {dimension: ['2', 'OH', 'DSM'], metric: ['370']},
            {dimension: ['2', 'G4', 'LCK'], metric: ['370']},
            {dimension: ['4', 'AS', 'GEG'], metric: ['370']},
            {dimension: ['1', 'DL', 'CHA'], metric: ['369']},
            {dimension: ['1', 'OO', 'IAD'], metric: ['369']},
            {dimension: ['2', 'OH', 'LYH'], metric: ['369']},
            {dimension: ['4', 'DL', 'ROC'], metric: ['369']},
            {dimension: ['4', 'OO', 'GTF'], metric: ['368']},
            {dimension: ['3', 'F9', 'CMH'], metric: ['368']},
            {dimension: ['1', 'MQ', 'AMA'], metric: ['368']},
            {dimension: ['2', 'G4', 'PIT'], metric: ['368']},
            {dimension: ['3', 'UA', 'BIL'], metric: ['368']},
            {dimension: ['3', 'MQ', 'PNS'], metric: ['368']},
            {dimension: ['3', 'F9', 'MSY'], metric: ['368']},
            {dimension: ['4', 'OO', 'ABE'], metric: ['368']},
            {dimension: ['3', 'UA', 'BOI'], metric: ['368']},
            {dimension: ['3', 'AA', 'ILM'], metric: ['367']},
            {dimension: ['1', 'HA', 'SEA'], metric: ['367']},
            {dimension: ['4', 'OO', 'IND'], metric: ['367']},
            {dimension: ['1', 'OO', 'MAF'], metric: ['367']},
            {dimension: ['3', 'YV', 'CLT'], metric: ['366']},
            {dimension: ['1', 'YX', 'AUS'], metric: ['366']},
            {dimension: ['4', 'EV', 'LEX'], metric: ['366']},
            {dimension: ['4', 'AS', 'DCA'], metric: ['366']},
            {dimension: ['1', 'B6', 'HOU'], metric: ['366']},
            {dimension: ['2', 'OH', 'CHO'], metric: ['365']},
            {dimension: ['1', 'EV', 'AVL'], metric: ['365']},
            {dimension: ['3', 'AS', 'MSP'], metric: ['365']},
            {dimension: ['2', 'AS', 'OTZ'], metric: ['364']},
            {dimension: ['2', 'AS', 'CDV'], metric: ['364']},
            {dimension: ['1', 'YV', 'LGA'], metric: ['364']},
            {dimension: ['1', 'OH', 'DAB'], metric: ['364']},
            {dimension: ['2', 'B6', 'HOU'], metric: ['364']},
            {dimension: ['2', 'B6', 'ALB'], metric: ['364']},
            {dimension: ['2', 'AS', 'OME'], metric: ['364']},
            {dimension: ['2', 'AS', 'YAK'], metric: ['364']},
            {dimension: ['4', 'EV', 'GSP'], metric: ['364']},
            {dimension: ['2', 'B6', 'SWF'], metric: ['364']},
            {dimension: ['2', 'B6', 'PHX'], metric: ['364']},
            {dimension: ['3', 'UA', 'FCA'], metric: ['364']},
            {dimension: ['2', 'HA', 'SEA'], metric: ['364']},
            {dimension: ['2', 'AS', 'WRG'], metric: ['364']},
            {dimension: ['2', 'AS', 'PSG'], metric: ['364']},
            {dimension: ['3', 'YV', 'BHM'], metric: ['364']},
            {dimension: ['1', 'OO', 'ELP'], metric: ['364']},
            {dimension: ['2', 'UA', 'BUR'], metric: ['364']},
            {dimension: ['2', 'HA', 'SFO'], metric: ['364']},
            {dimension: ['1', 'UA', 'ABQ'], metric: ['363']},
            {dimension: ['2', 'OO', 'BJI'], metric: ['363']},
            {dimension: ['2', 'F9', 'SNA'], metric: ['363']},
            {dimension: ['2', 'OO', 'RHI'], metric: ['363']},
            {dimension: ['2', 'OO', 'ABR'], metric: ['363']},
            {dimension: ['2', '9E', 'MHT'], metric: ['363']},
            {dimension: ['1', '9E', 'PWM'], metric: ['363']},
            {dimension: ['2', 'MQ', 'SJT'], metric: ['363']},
            {dimension: ['1', 'AS', 'BLI'], metric: ['363']},
            {dimension: ['2', 'OO', 'CMX'], metric: ['363']},
            {dimension: ['4', 'OO', 'ALB'], metric: ['363']},
            {dimension: ['2', 'OH', 'MHT'], metric: ['362']},
            {dimension: ['1', 'EV', 'TRI'], metric: ['362']},
            {dimension: ['2', 'OH', 'RIC'], metric: ['362']},
            {dimension: ['1', 'AA', 'ILM'], metric: ['362']},
            {dimension: ['2', 'AA', 'MFE'], metric: ['361']},
            {dimension: ['4', 'DL', 'GEG'], metric: ['361']},
            {dimension: ['2', 'OH', 'VPS'], metric: ['361']},
            {dimension: ['1', 'HA', 'OAK'], metric: ['361']},
            {dimension: ['1', 'B6', 'ALB'], metric: ['360']},
            {dimension: ['3', 'AS', 'BRW'], metric: ['360']},
            {dimension: ['4', 'EV', 'HSV'], metric: ['360']},
            {dimension: ['1', 'AA', 'PWM'], metric: ['360']},
            {dimension: ['1', 'OO', 'BJI'], metric: ['360']},
            {dimension: ['2', 'OH', 'DAB'], metric: ['360']},
            {dimension: ['1', 'HA', 'SFO'], metric: ['360']},
            {dimension: ['1', 'OO', 'ABR'], metric: ['360']},
            {dimension: ['1', 'B6', 'SWF'], metric: ['360']},
            {dimension: ['1', 'AS', 'PSG'], metric: ['360']},
            {dimension: ['1', 'B6', 'ORH'], metric: ['360']},
            {dimension: ['1', 'B6', 'PHX'], metric: ['360']},
            {dimension: ['3', 'YV', 'SDF'], metric: ['360']},
            {dimension: ['1', 'OH', 'GNV'], metric: ['360']},
            {dimension: ['1', 'AS', 'WRG'], metric: ['360']},
            {dimension: ['1', 'OO', 'CMX'], metric: ['360']},
            {dimension: ['1', 'YV', 'BOI'], metric: ['359']},
            {dimension: ['1', 'YX', 'XNA'], metric: ['359']},
            {dimension: ['1', 'MQ', 'IAH'], metric: ['359']},
            {dimension: ['2', 'YV', 'LGA'], metric: ['359']},
            {dimension: ['3', 'OH', 'FAY'], metric: ['359']},
            {dimension: ['2', 'OO', 'MEI'], metric: ['359']},
            {dimension: ['1', 'OO', 'BMI'], metric: ['359']},
            {dimension: ['1', 'AS', 'OTZ'], metric: ['358']},
            {dimension: ['1', 'UA', 'BIL'], metric: ['358']},
            {dimension: ['4', 'AS', 'DEN'], metric: ['358']},
            {dimension: ['1', 'MQ', 'FSD'], metric: ['358']},
            {dimension: ['4', 'UA', 'IND'], metric: ['358']},
            {dimension: ['4', 'DL', 'ABQ'], metric: ['358']},
            {dimension: ['3', 'YX', 'EYW'], metric: ['358']},
            {dimension: ['1', 'OO', 'SGF'], metric: ['358']},
            {dimension: ['1', 'YX', 'BTV'], metric: ['358']},
            {dimension: ['1', 'OO', 'HIB'], metric: ['357']},
            {dimension: ['3', 'F9', 'RSW'], metric: ['357']},
            {dimension: ['1', 'AS', 'OME'], metric: ['357']},
            {dimension: ['2', 'MQ', 'LAW'], metric: ['357']},
            {dimension: ['2', 'VX', 'ORD'], metric: ['357']},
            {dimension: ['4', 'F9', 'SFO'], metric: ['357']},
            {dimension: ['3', 'EV', 'DAY'], metric: ['357']},
            {dimension: ['1', 'OH', 'PIT'], metric: ['356']},
            {dimension: ['1', 'AS', 'YAK'], metric: ['356']},
            {dimension: ['1', 'AS', 'CDV'], metric: ['356']},
            {dimension: ['2', 'OH', 'SRQ'], metric: ['356']},
            {dimension: ['4', 'OO', 'ATW'], metric: ['356']},
            {dimension: ['2', 'AA', 'CVG'], metric: ['356']},
            {dimension: ['2', 'UA', 'CVG'], metric: ['356']},
            {dimension: ['1', 'F9', 'SNA'], metric: ['355']},
            {dimension: ['2', 'UA', 'MKE'], metric: ['355']},
            {dimension: ['3', 'MQ', 'ABI'], metric: ['355']},
            {dimension: ['3', 'F9', 'IND'], metric: ['355']},
            {dimension: ['1', 'MQ', 'SJT'], metric: ['355']},
            {dimension: ['1', 'OO', 'ATW'], metric: ['355']},
            {dimension: ['4', 'B6', 'DTW'], metric: ['355']},
            {dimension: ['3', 'MQ', 'TLH'], metric: ['355']},
            {dimension: ['1', 'EV', 'GRB'], metric: ['355']},
            {dimension: ['3', '9E', 'SAV'], metric: ['354']},
            {dimension: ['4', 'WN', 'ICT'], metric: ['354']},
            {dimension: ['2', 'F9', 'MCI'], metric: ['354']},
            {dimension: ['1', 'OO', 'RIC'], metric: ['354']},
            {dimension: ['3', 'EV', 'PHF'], metric: ['353']},
            {dimension: ['2', 'YX', 'XNA'], metric: ['353']},
            {dimension: ['1', 'F9', 'IAD'], metric: ['353']},
            {dimension: ['3', 'AS', 'SCC'], metric: ['353']},
            {dimension: ['4', 'B6', 'CLE'], metric: ['353']},
            {dimension: ['4', 'DL', 'ANC'], metric: ['353']},
            {dimension: ['3', 'OH', 'OAJ'], metric: ['352']},
            {dimension: ['1', '9E', 'EWR'], metric: ['352']},
            {dimension: ['1', 'AA', 'MFE'], metric: ['352']},
            {dimension: ['4', 'EV', 'ROC'], metric: ['352']},
            {dimension: ['3', 'AS', 'DTW'], metric: ['352']},
            {dimension: ['1', 'DL', 'FAR'], metric: ['351']},
            {dimension: ['4', 'AA', 'COS'], metric: ['351']},
            {dimension: ['2', 'OO', 'PAH'], metric: ['351']},
            {dimension: ['2', 'EV', 'ROC'], metric: ['351']},
            {dimension: ['2', 'G4', 'TYS'], metric: ['351']},
            {dimension: ['1', 'MQ', 'BHM'], metric: ['350']},
            {dimension: ['1', 'OO', 'SHV'], metric: ['350']},
            {dimension: ['2', 'MQ', 'LRD'], metric: ['350']},
            {dimension: ['2', 'OO', 'AEX'], metric: ['350']},
            {dimension: ['2', 'OO', 'MKG'], metric: ['350']},
            {dimension: ['2', 'OO', 'EAU'], metric: ['350']},
            {dimension: ['3', 'NK', 'CAK'], metric: ['349']},
            {dimension: ['1', 'EV', 'PIA'], metric: ['349']},
            {dimension: ['1', 'MQ', 'BNA'], metric: ['349']},
            {dimension: ['2', 'DL', 'FNT'], metric: ['349']},
            {dimension: ['1', 'MQ', 'MCI'], metric: ['349']},
            {dimension: ['2', 'OH', 'RDU'], metric: ['349']},
            {dimension: ['2', 'OH', 'TRI'], metric: ['349']},
            {dimension: ['1', 'OH', 'STL'], metric: ['348']},
            {dimension: ['3', 'AS', 'DAL'], metric: ['348']},
            {dimension: ['2', 'MQ', 'TYR'], metric: ['348']},
            {dimension: ['4', 'NK', 'MCI'], metric: ['348']},
            {dimension: ['2', 'YV', 'BNA'], metric: ['348']},
            {dimension: ['1', 'MQ', 'ROC'], metric: ['348']},
            {dimension: ['2', 'OO', 'LWS'], metric: ['348']},
            {dimension: ['4', 'EV', 'CHS'], metric: ['347']},
            {dimension: ['4', 'AS', 'DFW'], metric: ['347']},
            {dimension: ['3', 'MQ', 'ROC'], metric: ['347']},
            {dimension: ['3', 'MQ', 'MEM'], metric: ['347']},
            {dimension: ['2', 'OO', 'TRI'], metric: ['347']},
            {dimension: ['2', '9E', 'TRI'], metric: ['347']},
            {dimension: ['2', 'OH', 'EWN'], metric: ['347']},
            {dimension: ['3', 'OO', 'AVP'], metric: ['346']},
            {dimension: ['1', 'UA', 'SRQ'], metric: ['346']},
            {dimension: ['4', 'F9', 'SAT'], metric: ['346']},
            {dimension: ['3', 'AA', 'ANC'], metric: ['346']},
            {dimension: ['2', 'YV', 'FAT'], metric: ['346']},
            {dimension: ['1', 'MQ', 'OMA'], metric: ['346']},
            {dimension: ['4', 'OO', 'FLG'], metric: ['345']},
            {dimension: ['4', 'F9', 'MSP'], metric: ['345']},
            {dimension: ['3', 'MQ', 'GRK'], metric: ['345']},
            {dimension: ['4', 'EV', 'IND'], metric: ['345']},
            {dimension: ['1', 'YV', 'STL'], metric: ['345']},
            {dimension: ['2', 'YV', 'HSV'], metric: ['344']},
            {dimension: ['4', 'VX', 'DCA'], metric: ['344']},
            {dimension: ['3', 'YV', 'AMA'], metric: ['344']},
            {dimension: ['4', 'OO', 'SDF'], metric: ['344']},
            {dimension: ['1', 'OH', 'ROC'], metric: ['344']},
            {dimension: ['1', 'EV', 'PVD'], metric: ['343']},
            {dimension: ['1', 'OO', 'PAH'], metric: ['343']},
            {dimension: ['1', 'OO', 'EAU'], metric: ['342']},
            {dimension: ['3', 'MQ', 'JAX'], metric: ['342']},
            {dimension: ['1', 'MQ', 'LFT'], metric: ['342']},
            {dimension: ['2', 'G4', 'AVL'], metric: ['342']},
            {dimension: ['4', 'OO', 'AVP'], metric: ['342']},
            {dimension: ['4', 'NK', 'SEA'], metric: ['342']},
            {dimension: ['2', 'AA', 'SYR'], metric: ['342']},
            {dimension: ['1', 'OO', 'MKG'], metric: ['342']},
            {dimension: ['1', 'YX', 'PVD'], metric: ['342']},
            {dimension: ['4', 'OO', 'ACV'], metric: ['341']},
            {dimension: ['3', 'VX', 'DCA'], metric: ['341']},
            {dimension: ['4', 'F9', 'SAN'], metric: ['341']},
            {dimension: ['2', 'DL', 'GRB'], metric: ['341']},
            {dimension: ['2', 'OO', 'SWF'], metric: ['341']},
            {dimension: ['2', 'MQ', 'CHO'], metric: ['340']},
            {dimension: ['1', 'UA', 'GEG'], metric: ['340']},
            {dimension: ['2', 'DL', 'CHA'], metric: ['340']},
            {dimension: ['3', 'F9', 'MIA'], metric: ['340']},
            {dimension: ['1', 'OH', 'VPS'], metric: ['340']},
            {dimension: ['2', 'DL', 'ATW'], metric: ['340']},
            {dimension: ['1', '9E', 'CWA'], metric: ['340']},
            {dimension: ['1', 'OO', 'LIT'], metric: ['340']},
            {dimension: ['4', 'DL', 'DAY'], metric: ['340']},
            {dimension: ['3', 'UA', 'STL'], metric: ['340']},
            {dimension: ['3', '9E', 'HPN'], metric: ['340']},
            {dimension: ['1', 'OH', 'JAN'], metric: ['340']},
            {dimension: ['2', 'UA', 'JAC'], metric: ['340']},
            {dimension: ['3', 'EV', 'PIT'], metric: ['339']},
            {dimension: ['4', 'NK', 'BDL'], metric: ['339']},
            {dimension: ['1', 'B6', 'RNO'], metric: ['339']},
            {dimension: ['2', '9E', 'FAY'], metric: ['339']},
            {dimension: ['1', 'MQ', 'DTW'], metric: ['339']},
            {dimension: ['2', 'HA', 'SJC'], metric: ['339']},
            {dimension: ['2', 'YV', 'MEM'], metric: ['339']},
            {dimension: ['3', 'OH', 'CMH'], metric: ['339']},
            {dimension: ['2', 'OO', 'MAF'], metric: ['338']},
            {dimension: ['2', 'MQ', 'DCA'], metric: ['338']},
            {dimension: ['2', 'VX', 'DCA'], metric: ['338']},
            {dimension: ['1', '9E', 'IAH'], metric: ['338']},
            {dimension: ['2', 'OO', 'BTM'], metric: ['338']},
            {dimension: ['4', 'EV', 'RST'], metric: ['338']},
            {dimension: ['3', 'UA', 'BUR'], metric: ['337']},
            {dimension: ['3', 'AA', 'FAT'], metric: ['337']},
            {dimension: ['2', 'OO', 'CIU'], metric: ['337']},
            {dimension: ['1', 'EV', 'PHF'], metric: ['337']},
            {dimension: ['4', 'WN', 'CRP'], metric: ['336']},
            {dimension: ['1', 'VX', 'AUS'], metric: ['336']},
            {dimension: ['3', '9E', 'PHL'], metric: ['336']},
            {dimension: ['2', 'OH', 'PIT'], metric: ['336']},
            {dimension: ['1', 'OO', 'IMT'], metric: ['336']},
            {dimension: ['1', 'OO', 'MOB'], metric: ['336']},
            {dimension: ['2', 'F9', 'DFW'], metric: ['336']},
            {dimension: ['1', 'YV', 'DRO'], metric: ['336']},
            {dimension: ['1', 'OH', 'AGS'], metric: ['336']},
            {dimension: ['2', 'VX', 'FLL'], metric: ['336']},
            {dimension: ['4', 'F9', 'IAD'], metric: ['335']},
            {dimension: ['1', 'MQ', 'BWI'], metric: ['335']},
            {dimension: ['1', 'OO', 'EVV'], metric: ['335']},
            {dimension: ['1', 'EV', 'DHN'], metric: ['335']},
            {dimension: ['1', 'OO', 'CIU'], metric: ['335']},
            {dimension: ['1', 'MQ', 'ACT'], metric: ['335']},
            {dimension: ['2', 'OO', 'RKS'], metric: ['335']},
            {dimension: ['1', 'OO', 'BTM'], metric: ['335']},
            {dimension: ['1', 'OO', 'RKS'], metric: ['334']},
            {dimension: ['3', 'OH', 'HPN'], metric: ['334']},
            {dimension: ['4', 'OO', 'CLT'], metric: ['334']},
            {dimension: ['1', 'MQ', 'TYR'], metric: ['334']},
            {dimension: ['2', 'MQ', 'COU'], metric: ['334']},
            {dimension: ['2', 'OH', 'PGV'], metric: ['334']},
            {dimension: ['1', 'OO', 'STS'], metric: ['333']},
            {dimension: ['4', 'OO', 'IAD'], metric: ['333']},
            {dimension: ['3', '9E', 'STL'], metric: ['333']},
            {dimension: ['2', 'AS', 'IAH'], metric: ['333']},
            {dimension: ['4', 'VX', 'FLL'], metric: ['333']},
            {dimension: ['1', 'UA', 'CVG'], metric: ['333']},
            {dimension: ['4', 'EV', 'GRR'], metric: ['332']},
            {dimension: ['2', 'OO', 'EKO'], metric: ['332']},
            {dimension: ['1', 'AA', 'DAY'], metric: ['332']},
            {dimension: ['2', 'AS', 'MCI'], metric: ['332']},
            {dimension: ['2', 'G4', 'SAV'], metric: ['332']},
            {dimension: ['4', 'EV', 'CLL'], metric: ['332']},
            {dimension: ['1', 'OH', 'GRR'], metric: ['332']},
            {dimension: ['3', 'G4', 'IND'], metric: ['332']},
            {dimension: ['2', 'MQ', 'DAY'], metric: ['332']},
            {dimension: ['4', 'OO', 'RST'], metric: ['331']},
            {dimension: ['2', 'AS', 'ADQ'], metric: ['331']},
            {dimension: ['2', 'UA', 'GRR'], metric: ['331']},
            {dimension: ['3', 'UA', 'ONT'], metric: ['331']},
            {dimension: ['4', 'UA', 'KOA'], metric: ['331']},
            {dimension: ['3', 'DL', 'FSD'], metric: ['331']},
            {dimension: ['2', 'B6', 'RNO'], metric: ['330']},
            {dimension: ['3', 'DL', 'ATW'], metric: ['330']},
            {dimension: ['1', 'MQ', 'LEX'], metric: ['330']},
            {dimension: ['1', 'YX', 'BWI'], metric: ['329']},
            {dimension: ['3', 'OH', 'AGS'], metric: ['329']},
            {dimension: ['1', 'OH', 'BDL'], metric: ['329']},
            {dimension: ['1', 'UA', 'BOI'], metric: ['329']},
            {dimension: ['3', 'DL', 'LEX'], metric: ['328']},
            {dimension: ['1', 'OO', 'ROC'], metric: ['328']},
            {dimension: ['2', 'OH', 'BNA'], metric: ['328']},
            {dimension: ['2', 'EV', 'HOB'], metric: ['328']},
            {dimension: ['1', 'OO', 'AVP'], metric: ['328']},
            {dimension: ['2', 'YV', 'BUR'], metric: ['328']},
            {dimension: ['2', 'B6', 'DFW'], metric: ['327']},
            {dimension: ['2', 'OO', 'MLU'], metric: ['327']},
            {dimension: ['2', 'YX', 'MAF'], metric: ['327']},
            {dimension: ['2', 'G4', 'AUS'], metric: ['327']},
            {dimension: ['1', 'F9', 'SEA'], metric: ['327']},
            {dimension: ['1', 'EV', 'ACT'], metric: ['327']},
            {dimension: ['1', 'MQ', 'LRD'], metric: ['327']},
            {dimension: ['3', 'AS', 'PSP'], metric: ['327']},
            {dimension: ['1', 'YV', 'RDU'], metric: ['327']},
            {dimension: ['4', 'AS', 'LIH'], metric: ['327']},
            {dimension: ['1', 'YV', 'HSV'], metric: ['327']},
            {dimension: ['2', 'DL', 'FAR'], metric: ['326']},
            {dimension: ['1', 'EV', 'OKC'], metric: ['326']},
            {dimension: ['3', 'YV', 'HOU'], metric: ['326']},
            {dimension: ['1', '9E', 'HPN'], metric: ['326']},
            {dimension: ['1', 'EV', 'LAN'], metric: ['326']},
            {dimension: ['1', 'G4', 'LAX'], metric: ['326']},
            {dimension: ['3', 'YX', 'SYR'], metric: ['325']},
            {dimension: ['1', '9E', 'GNV'], metric: ['325']},
            {dimension: ['4', 'OO', 'LAN'], metric: ['325']},
            {dimension: ['1', '9E', 'FAY'], metric: ['325']},
            {dimension: ['4', 'DL', 'MLB'], metric: ['325']},
            {dimension: ['3', 'MQ', 'OMA'], metric: ['325']},
            {dimension: ['1', 'AA', 'SYR'], metric: ['324']},
            {dimension: ['2', 'OH', 'ROC'], metric: ['324']},
            {dimension: ['2', 'EV', 'DSM'], metric: ['324']},
            {dimension: ['2', 'EV', 'CSG'], metric: ['324']},
            {dimension: ['3', 'OO', 'HSV'], metric: ['324']},
            {dimension: ['1', 'OO', 'SDF'], metric: ['324']},
            {dimension: ['2', 'EV', 'ABE'], metric: ['323']},
            {dimension: ['3', 'YV', 'CMH'], metric: ['323']},
            {dimension: ['3', 'YX', 'PVD'], metric: ['323']},
            {dimension: ['1', 'OO', 'MLU'], metric: ['322']},
            {dimension: ['3', 'DL', 'FNT'], metric: ['322']},
            {dimension: ['3', 'B6', 'STT'], metric: ['322']},
            {dimension: ['2', 'EV', 'PHF'], metric: ['322']},
            {dimension: ['3', 'F9', 'ISP'], metric: ['322']},
            {dimension: ['2', 'AA', 'MDT'], metric: ['322']},
            {dimension: ['3', 'F9', 'PVD'], metric: ['321']},
            {dimension: ['3', 'DL', 'FAR'], metric: ['321']},
            {dimension: ['1', 'G4', 'GRR'], metric: ['321']},
            {dimension: ['2', 'OH', 'STL'], metric: ['321']},
            {dimension: ['3', 'OO', 'HPN'], metric: ['321']},
            {dimension: ['2', 'OH', 'ATL'], metric: ['320']},
            {dimension: ['4', 'B6', 'CLT'], metric: ['320']},
            {dimension: ['4', 'EV', 'ICT'], metric: ['320']},
            {dimension: ['1', 'OH', 'SYR'], metric: ['320']},
            {dimension: ['1', 'MQ', 'DSM'], metric: ['320']},
            {dimension: ['3', 'OO', 'BJI'], metric: ['319']},
            {dimension: ['4', 'DL', 'LEX'], metric: ['319']},
            {dimension: ['2', 'YV', 'RDU'], metric: ['319']},
            {dimension: ['1', 'EV', 'HOB'], metric: ['319']},
            {dimension: ['3', 'OH', 'LGA'], metric: ['319']},
            {dimension: ['2', 'OH', 'SYR'], metric: ['319']},
            {dimension: ['2', 'MQ', 'DSM'], metric: ['319']},
            {dimension: ['1', 'OO', 'EKO'], metric: ['318']},
            {dimension: ['4', 'OO', 'YUM'], metric: ['318']},
            {dimension: ['2', 'EV', 'DAY'], metric: ['318']},
            {dimension: ['4', 'EV', 'CAK'], metric: ['318']},
            {dimension: ['1', 'AA', 'PNS'], metric: ['318']},
            {dimension: ['2', 'MQ', 'JAN'], metric: ['318']},
            {dimension: ['1', 'EV', 'FAR'], metric: ['317']},
            {dimension: ['2', 'OO', 'INL'], metric: ['317']},
            {dimension: ['1', 'AS', 'MSP'], metric: ['317']},
            {dimension: ['2', 'MQ', 'TXK'], metric: ['317']},
            {dimension: ['2', 'B6', 'ACK'], metric: ['317']},
            {dimension: ['1', 'YX', 'MAF'], metric: ['317']},
            {dimension: ['1', 'EV', 'SYR'], metric: ['316']},
            {dimension: ['2', 'DL', 'AVL'], metric: ['316']},
            {dimension: ['2', 'OH', 'MOB'], metric: ['316']},
            {dimension: ['4', 'DL', 'GPT'], metric: ['315']},
            {dimension: ['1', 'OO', 'ORF'], metric: ['315']},
            {dimension: ['2', 'OO', 'ILM'], metric: ['314']},
            {dimension: ['2', 'EV', 'EYW'], metric: ['314']},
            {dimension: ['1', 'YV', 'AUS'], metric: ['314']},
            {dimension: ['1', '9E', 'EVV'], metric: ['314']},
            {dimension: ['2', 'G4', 'BLV'], metric: ['314']},
            {dimension: ['3', 'OO', 'BUF'], metric: ['314']},
            {dimension: ['1', 'HA', 'SJC'], metric: ['313']},
            {dimension: ['1', 'EV', 'ECP'], metric: ['313']},
            {dimension: ['2', 'UA', 'STL'], metric: ['313']},
            {dimension: ['3', 'UA', 'PWM'], metric: ['313']},
            {dimension: ['2', 'OO', 'HIB'], metric: ['312']},
            {dimension: ['2', 'OO', 'BRD'], metric: ['312']},
            {dimension: ['2', 'OO', 'LAR'], metric: ['312']},
            {dimension: ['2', 'OO', 'ESC'], metric: ['312']},
            {dimension: ['3', 'UA', 'MKE'], metric: ['312']},
            {dimension: ['2', 'MQ', 'CHS'], metric: ['312']},
            {dimension: ['1', 'OO', 'HYS'], metric: ['312']},
            {dimension: ['1', '9E', 'BGR'], metric: ['312']},
            {dimension: ['2', 'YV', 'JAX'], metric: ['312']},
            {dimension: ['4', 'AS', 'PSP'], metric: ['312']},
            {dimension: ['2', 'OO', 'CDC'], metric: ['312']},
            {dimension: ['2', 'OO', 'APN'], metric: ['311']},
            {dimension: ['3', 'DL', 'AGS'], metric: ['311']},
            {dimension: ['2', 'OO', 'ROC'], metric: ['311']},
            {dimension: ['2', 'YX', 'ROC'], metric: ['311']},
            {dimension: ['4', 'OO', 'RDU'], metric: ['311']},
            {dimension: ['2', 'OO', 'DVL'], metric: ['311']},
            {dimension: ['1', 'NK', 'IAG'], metric: ['310']},
            {dimension: ['1', 'OO', 'LAR'], metric: ['310']},
            {dimension: ['1', 'OO', 'ESC'], metric: ['310']},
            {dimension: ['4', 'EV', 'CHA'], metric: ['310']},
            {dimension: ['1', 'OO', 'DVL'], metric: ['310']},
            {dimension: ['1', 'EV', 'SBN'], metric: ['310']},
            {dimension: ['4', 'VX', 'PDX'], metric: ['310']},
            {dimension: ['2', 'OO', 'IMT'], metric: ['310']},
            {dimension: ['1', 'OO', 'CDC'], metric: ['309']},
            {dimension: ['1', 'OO', 'APN'], metric: ['309']},
            {dimension: ['1', 'OO', 'DHN'], metric: ['309']},
            {dimension: ['2', 'F9', 'SJC'], metric: ['309']},
            {dimension: ['1', 'OO', 'BRD'], metric: ['309']},
            {dimension: ['1', 'OO', 'INL'], metric: ['309']},
            {dimension: ['3', 'EV', 'MSP'], metric: ['309']},
            {dimension: ['2', 'NK', 'PHX'], metric: ['309']},
            {dimension: ['1', 'F9', 'RDU'], metric: ['309']},
            {dimension: ['3', 'OH', 'PHF'], metric: ['309']},
            {dimension: ['2', 'OH', 'XNA'], metric: ['309']},
            {dimension: ['1', 'UA', 'GRR'], metric: ['309']},
            {dimension: ['3', 'DL', 'RNO'], metric: ['309']},
            {dimension: ['3', 'B6', 'SWF'], metric: ['308']},
            {dimension: ['3', 'HA', 'SJC'], metric: ['308']},
            {dimension: ['3', 'OO', 'PIB'], metric: ['308']},
            {dimension: ['3', 'AS', 'CDV'], metric: ['308']},
            {dimension: ['1', 'UA', 'CMH'], metric: ['308']},
            {dimension: ['3', 'HA', 'SEA'], metric: ['308']},
            {dimension: ['1', 'F9', 'MCI'], metric: ['308']},
            {dimension: ['3', 'B6', 'PHX'], metric: ['308']},
            {dimension: ['3', 'AS', 'PSG'], metric: ['308']},
            {dimension: ['3', 'HA', 'SFO'], metric: ['308']},
            {dimension: ['3', 'B6', 'HOU'], metric: ['308']},
            {dimension: ['3', 'B6', 'ALB'], metric: ['308']},
            {dimension: ['4', 'OO', 'AZO'], metric: ['308']},
            {dimension: ['3', 'AS', 'WRG'], metric: ['308']},
            {dimension: ['3', 'AS', 'YAK'], metric: ['308']},
            {dimension: ['3', 'DL', 'CHA'], metric: ['308']},
            {dimension: ['3', 'OO', 'RHI'], metric: ['307']},
            {dimension: ['3', 'OO', 'CMX'], metric: ['307']},
            {dimension: ['3', 'F9', 'SNA'], metric: ['307']},
            {dimension: ['3', 'OO', 'ABR'], metric: ['307']},
            {dimension: ['1', 'OH', 'EWN'], metric: ['307']},
            {dimension: ['1', 'OH', 'BTV'], metric: ['307']},
            {dimension: ['2', 'B6', 'SRQ'], metric: ['307']},
            {dimension: ['3', 'YV', 'SBA'], metric: ['306']},
            {dimension: ['3', 'AA', 'CVG'], metric: ['306']},
            {dimension: ['3', 'OO', 'CSG'], metric: ['306']},
            {dimension: ['3', '9E', 'TRI'], metric: ['306']},
            {dimension: ['4', 'DL', 'MYR'], metric: ['306']},
            {dimension: ['1', 'YV', 'MFE'], metric: ['306']},
            {dimension: ['2', 'UA', 'ICT'], metric: ['305']},
            {dimension: ['1', 'B6', 'DFW'], metric: ['305']},
            {dimension: ['3', 'DL', 'TUL'], metric: ['305']},
            {dimension: ['4', 'DL', 'FSD'], metric: ['305']},
            {dimension: ['4', 'OO', 'EWR'], metric: ['305']},
            {dimension: ['2', 'EV', 'JAX'], metric: ['305']},
            {dimension: ['1', 'YV', 'JAX'], metric: ['304']},
            {dimension: ['3', 'AS', 'OME'], metric: ['304']},
            {dimension: ['3', 'EV', 'ABE'], metric: ['304']},
            {dimension: ['3', 'AS', 'OTZ'], metric: ['304']},
            {dimension: ['3', 'B6', 'RNO'], metric: ['304']},
            {dimension: ['4', 'WN', 'PWM'], metric: ['304']},
            {dimension: ['1', 'DL', 'GRB'], metric: ['303']},
            {dimension: ['2', 'EV', 'MHK'], metric: ['303']},
            {dimension: ['2', 'YV', 'IND'], metric: ['303']},
            {dimension: ['3', 'YV', 'DRO'], metric: ['303']},
            {dimension: ['1', '9E', 'PIA'], metric: ['303']},
            {dimension: ['3', 'OH', 'STL'], metric: ['303']},
            {dimension: ['3', 'OH', 'MKE'], metric: ['303']},
            {dimension: ['3', 'UA', 'RIC'], metric: ['302']},
            {dimension: ['4', 'EV', 'LBB'], metric: ['302']},
            {dimension: ['1', 'YV', 'SBA'], metric: ['301']},
            {dimension: ['3', 'EV', 'ELP'], metric: ['301']},
            {dimension: ['1', 'OH', 'MOB'], metric: ['301']},
            {dimension: ['2', 'EV', 'FWA'], metric: ['301']},
            {dimension: ['4', 'EV', 'BNA'], metric: ['301']},
            {dimension: ['1', 'DL', 'AVL'], metric: ['300']},
            {dimension: ['3', 'OH', 'CLE'], metric: ['300']},
            {dimension: ['3', 'DL', 'KOA'], metric: ['300']},
            {dimension: ['2', 'EV', 'SYR'], metric: ['299']},
            {dimension: ['2', 'YX', 'OKC'], metric: ['299']},
            {dimension: ['1', 'F9', 'PVD'], metric: ['299']},
            {dimension: ['4', 'EV', 'MEM'], metric: ['299']},
            {dimension: ['4', 'DL', 'BZN'], metric: ['299']},
            {dimension: ['3', 'OH', 'TLH'], metric: ['299']},
            {dimension: ['1', 'AS', 'ATL'], metric: ['298']},
            {dimension: ['2', 'MQ', 'MHK'], metric: ['298']},
            {dimension: ['3', 'AS', 'MCI'], metric: ['298']},
            {dimension: ['2', 'OH', 'MSN'], metric: ['298']},
            {dimension: ['2', 'MQ', 'MLI'], metric: ['298']},
            {dimension: ['2', 'YX', 'ELP'], metric: ['298']},
            {dimension: ['2', 'EV', 'ELP'], metric: ['297']},
            {dimension: ['2', '9E', 'IAD'], metric: ['297']},
            {dimension: ['2', 'YV', 'SBP'], metric: ['297']},
            {dimension: ['3', 'MQ', 'BHM'], metric: ['296']},
            {dimension: ['4', 'EV', 'MHT'], metric: ['296']},
            {dimension: ['4', 'UA', 'OMA'], metric: ['295']},
            {dimension: ['3', 'YX', 'DSM'], metric: ['295']},
            {dimension: ['4', 'WN', 'ECP'], metric: ['294']},
            {dimension: ['3', 'OO', 'WYS'], metric: ['294']},
            {dimension: ['2', 'OO', 'HSV'], metric: ['294']},
            {dimension: ['1', 'MQ', 'STL'], metric: ['294']},
            {dimension: ['3', 'MQ', 'ACT'], metric: ['294']},
            {dimension: ['3', 'DL', 'TVC'], metric: ['294']},
            {dimension: ['3', 'YV', 'MCI'], metric: ['294']},
            {dimension: ['1', '9E', 'TRI'], metric: ['294']},
            {dimension: ['3', 'OO', 'PAH'], metric: ['294']},
            {dimension: ['3', 'OO', 'MKG'], metric: ['294']},
            {dimension: ['2', '9E', 'MKE'], metric: ['294']},
            {dimension: ['1', 'OO', 'LBB'], metric: ['294']},
            {dimension: ['2', 'OH', 'DTW'], metric: ['293']},
            {dimension: ['1', 'OO', 'LWS'], metric: ['293']},
            {dimension: ['3', 'OO', 'BDL'], metric: ['293']},
            {dimension: ['4', 'B6', 'BTV'], metric: ['293']},
            {dimension: ['3', 'OO', 'EAU'], metric: ['293']},
            {dimension: ['1', 'DL', 'AGS'], metric: ['292']},
            {dimension: ['3', 'YV', 'JAN'], metric: ['292']},
            {dimension: ['2', 'OO', 'ROA'], metric: ['292']},
            {dimension: ['3', '9E', 'EVV'], metric: ['292']},
            {dimension: ['4', 'OO', 'BMI'], metric: ['291']},
            {dimension: ['3', 'OH', 'JAN'], metric: ['291']},
            {dimension: ['3', 'OH', 'LEX'], metric: ['291']},
            {dimension: ['1', 'YX', 'PWM'], metric: ['291']},
            {dimension: ['4', 'AA', 'LIH'], metric: ['290']},
            {dimension: ['3', 'G4', 'BLI'], metric: ['290']},
            {dimension: ['3', 'OO', 'BRD'], metric: ['290']},
            {dimension: ['3', 'UA', 'JAX'], metric: ['290']},
            {dimension: ['1', 'EV', 'MFE'], metric: ['290']},
            {dimension: ['3', '9E', 'ILM'], metric: ['290']},
            {dimension: ['1', 'AA', 'MDT'], metric: ['290']},
            {dimension: ['2', 'OH', 'PVD'], metric: ['290']},
            {dimension: ['2', 'EV', 'LAN'], metric: ['290']},
            {dimension: ['1', 'G4', 'TYS'], metric: ['289']},
            {dimension: ['3', 'OO', 'MAF'], metric: ['289']},
            {dimension: ['2', 'YX', 'AUS'], metric: ['289']},
            {dimension: ['4', 'B6', 'ROC'], metric: ['289']},
            {dimension: ['3', 'OH', 'EWN'], metric: ['289']},
            {dimension: ['4', 'OO', 'BLI'], metric: ['288']},
            {dimension: ['4', 'AA', 'PSP'], metric: ['288']},
            {dimension: ['3', 'EV', 'AGS'], metric: ['288']},
            {dimension: ['3', 'MQ', 'BWI'], metric: ['288']},
            {dimension: ['4', 'B6', 'PWM'], metric: ['288']},
            {dimension: ['1', 'EV', 'AVP'], metric: ['288']},
            {dimension: ['3', 'EV', 'TLH'], metric: ['288']},
            {dimension: ['1', '9E', 'CSG'], metric: ['287']},
            {dimension: ['2', 'AS', 'BNA'], metric: ['287']},
            {dimension: ['3', 'F9', 'DFW'], metric: ['287']},
            {dimension: ['1', '9E', 'RIC'], metric: ['287']},
            {dimension: ['3', 'OH', 'PGV'], metric: ['287']},
            {dimension: ['3', 'EV', 'CRP'], metric: ['287']},
            {dimension: ['2', 'UA', 'MEM'], metric: ['287']},
            {dimension: ['2', '9E', 'XNA'], metric: ['286']},
            {dimension: ['3', 'OO', 'BTM'], metric: ['286']},
            {dimension: ['4', 'OO', 'GFK'], metric: ['286']},
            {dimension: ['2', 'F9', 'OMA'], metric: ['286']},
            {dimension: ['3', 'YV', 'TUS'], metric: ['286']},
            {dimension: ['3', 'OO', 'IMT'], metric: ['286']},
            {dimension: ['3', 'DL', 'TUS'], metric: ['285']},
            {dimension: ['1', 'EV', 'CID'], metric: ['285']},
            {dimension: ['3', 'OO', 'CIU'], metric: ['285']},
            {dimension: ['3', 'B6', 'DFW'], metric: ['285']},
            {dimension: ['1', 'VX', 'LGA'], metric: ['285']},
            {dimension: ['3', 'MQ', 'SYR'], metric: ['285']},
            {dimension: ['2', 'MQ', 'BUF'], metric: ['285']},
            {dimension: ['3', 'G4', 'AVL'], metric: ['285']},
            {dimension: ['3', '9E', 'CWA'], metric: ['284']},
            {dimension: ['2', 'YV', 'MOB'], metric: ['284']},
            {dimension: ['1', 'MQ', 'CHO'], metric: ['283']},
            {dimension: ['4', 'WN', 'PNS'], metric: ['283']},
            {dimension: ['2', 'AA', 'GSP'], metric: ['283']},
            {dimension: ['3', 'EV', 'CRW'], metric: ['283']},
            {dimension: ['3', 'YX', 'PWM'], metric: ['283']},
            {dimension: ['3', 'AS', 'ADQ'], metric: ['282']},
            {dimension: ['1', 'EV', 'BWI'], metric: ['282']},
            {dimension: ['4', 'EV', 'RDU'], metric: ['282']},
            {dimension: ['3', 'AS', 'IAH'], metric: ['282']},
            {dimension: ['2', 'MQ', 'MGM'], metric: ['282']},
            {dimension: ['2', 'OO', 'PHL'], metric: ['282']},
            {dimension: ['3', 'MQ', 'LEX'], metric: ['282']},
            {dimension: ['2', 'EV', 'AVP'], metric: ['282']},
            {dimension: ['2', 'OO', 'BDL'], metric: ['282']},
            {dimension: ['3', 'YV', 'PHL'], metric: ['281']},
            {dimension: ['1', 'MQ', 'CLL'], metric: ['281']},
            {dimension: ['1', 'EV', 'CSG'], metric: ['281']},
            {dimension: ['3', 'OO', 'INL'], metric: ['281']},
            {dimension: ['3', 'OO', 'MLU'], metric: ['281']},
            {dimension: ['3', '9E', 'ORD'], metric: ['281']},
            {dimension: ['3', '9E', 'CHO'], metric: ['281']},
            {dimension: ['2', 'OH', 'LIT'], metric: ['281']},
            {dimension: ['1', 'AS', 'ADQ'], metric: ['279']},
            {dimension: ['2', 'OO', 'BOS'], metric: ['279']},
            {dimension: ['1', 'MQ', 'SUX'], metric: ['279']},
            {dimension: ['3', 'OO', 'COU'], metric: ['279']},
            {dimension: ['1', 'VX', 'HNL'], metric: ['279']},
            {dimension: ['3', 'AA', 'SYR'], metric: ['279']},
            {dimension: ['3', 'AA', 'SAV'], metric: ['279']},
            {dimension: ['3', 'OO', 'RKS'], metric: ['278']},
            {dimension: ['4', 'UA', 'JAX'], metric: ['278']},
            {dimension: ['1', 'MQ', 'LAW'], metric: ['278']},
            {dimension: ['2', 'OO', 'COU'], metric: ['278']},
            {dimension: ['3', 'EV', 'HOU'], metric: ['277']},
            {dimension: ['3', 'F9', 'PIT'], metric: ['277']},
            {dimension: ['1', 'UA', 'MKE'], metric: ['277']},
            {dimension: ['4', 'OO', 'MGM'], metric: ['277']},
            {dimension: ['4', 'OO', 'MDT'], metric: ['277']},
            {dimension: ['1', 'MQ', 'MEM'], metric: ['277']},
            {dimension: ['2', 'MQ', 'ILM'], metric: ['277']},
            {dimension: ['4', 'OO', 'MEI'], metric: ['276']},
            {dimension: ['4', 'B6', 'SAV'], metric: ['276']},
            {dimension: ['3', 'YX', 'GRR'], metric: ['276']},
            {dimension: ['1', 'EV', 'MCI'], metric: ['276']},
            {dimension: ['4', 'F9', 'DCA'], metric: ['276']},
            {dimension: ['4', 'F9', 'LGA'], metric: ['276']},
            {dimension: ['4', 'EV', 'VPS'], metric: ['276']},
            {dimension: ['4', 'AS', 'MCO'], metric: ['276']},
            {dimension: ['3', 'OO', 'ALB'], metric: ['276']},
            {dimension: ['3', 'EV', 'SJT'], metric: ['275']},
            {dimension: ['4', 'OO', 'BTR'], metric: ['275']},
            {dimension: ['3', '9E', 'AGS'], metric: ['275']},
            {dimension: ['1', 'OH', 'AVP'], metric: ['275']},
            {dimension: ['4', 'UA', 'CLT'], metric: ['275']},
            {dimension: ['4', 'EV', 'SDF'], metric: ['275']},
            {dimension: ['3', '9E', 'IAD'], metric: ['275']},
            {dimension: ['2', 'YX', 'CLE'], metric: ['275']},
            {dimension: ['1', 'YV', 'BDL'], metric: ['274']},
            {dimension: ['4', 'EV', 'OMA'], metric: ['274']},
            {dimension: ['1', '9E', 'MHT'], metric: ['274']},
            {dimension: ['3', 'OO', 'CWA'], metric: ['274']},
            {dimension: ['3', 'EV', 'HOB'], metric: ['274']},
            {dimension: ['3', 'YV', 'MSP'], metric: ['273']},
            {dimension: ['4', 'UA', 'GEG'], metric: ['273']},
            {dimension: ['2', 'HA', 'PDX'], metric: ['273']},
            {dimension: ['2', 'AS', 'MSY'], metric: ['273']},
            {dimension: ['1', 'EV', 'FNT'], metric: ['273']},
            {dimension: ['1', 'OH', 'RDU'], metric: ['272']},
            {dimension: ['2', 'DL', 'XNA'], metric: ['272']},
            {dimension: ['3', 'AA', 'STX'], metric: ['272']},
            {dimension: ['2', 'G4', 'CLE'], metric: ['272']},
            {dimension: ['2', 'AS', 'RDU'], metric: ['272']},
            {dimension: ['3', 'YX', 'XNA'], metric: ['272']},
            {dimension: ['4', 'F9', 'CLT'], metric: ['272']},
            {dimension: ['2', 'AA', 'ICT'], metric: ['272']},
            {dimension: ['3', '9E', 'DFW'], metric: ['271']},
            {dimension: ['2', 'MQ', 'SPS'], metric: ['271']},
            {dimension: ['4', 'B6', 'PDX'], metric: ['271']},
            {dimension: ['3', 'OO', 'LFT'], metric: ['271']},
            {dimension: ['3', 'AS', 'BNA'], metric: ['271']},
            {dimension: ['4', 'EV', 'GPT'], metric: ['270']},
            {dimension: ['1', 'OO', 'MEI'], metric: ['270']},
            {dimension: ['1', 'VX', 'MCO'], metric: ['270']},
            {dimension: ['4', 'AA', 'BOI'], metric: ['270']},
            {dimension: ['3', 'UA', 'BTV'], metric: ['270']},
            {dimension: ['1', 'DL', 'XNA'], metric: ['270']},
            {dimension: ['4', 'DL', 'GRB'], metric: ['270']},
            {dimension: ['4', 'EV', 'LRD'], metric: ['270']},
            {dimension: ['1', 'AS', 'JFK'], metric: ['270']},
            {dimension: ['4', 'UA', 'MFE'], metric: ['270']},
            {dimension: ['1', 'NK', 'PDX'], metric: ['270']},
            {dimension: ['1', 'OH', 'IND'], metric: ['269']},
            {dimension: ['4', 'OO', 'DCA'], metric: ['269']},
            {dimension: ['4', 'EV', 'SAF'], metric: ['269']},
            {dimension: ['3', 'VX', 'FLL'], metric: ['269']},
            {dimension: ['4', 'DL', 'OGG'], metric: ['269']},
            {dimension: ['1', 'YV', 'BRO'], metric: ['269']},
            {dimension: ['1', 'NK', 'PBG'], metric: ['269']},
            {dimension: ['1', 'YV', 'BHM'], metric: ['269']},
            {dimension: ['4', 'OO', 'LIT'], metric: ['269']},
            {dimension: ['2', '9E', 'GRR'], metric: ['269']},
            {dimension: ['4', 'F9', 'DTW'], metric: ['268']},
            {dimension: ['1', 'WN', 'CAK'], metric: ['268']},
            {dimension: ['4', 'AA', 'GEG'], metric: ['268']},
            {dimension: ['4', 'B6', 'BNA'], metric: ['267']},
            {dimension: ['2', 'MQ', 'CLL'], metric: ['267']},
            {dimension: ['1', 'OH', 'PVD'], metric: ['267']},
            {dimension: ['4', 'AS', 'BWI'], metric: ['267']},
            {dimension: ['1', 'WN', 'DAY'], metric: ['267']},
            {dimension: ['4', 'DL', 'CAK'], metric: ['267']},
            {dimension: ['4', 'B6', 'PVD'], metric: ['267']},
            {dimension: ['4', 'EV', 'SYR'], metric: ['267']},
            {dimension: ['1', 'YX', 'MHT'], metric: ['267']},
            {dimension: ['3', 'G4', 'TYS'], metric: ['266']},
            {dimension: ['2', 'OO', 'JAX'], metric: ['266']},
            {dimension: ['3', 'DL', 'GRB'], metric: ['266']},
            {dimension: ['3', 'OO', 'SWF'], metric: ['266']},
            {dimension: ['2', 'G4', 'USA'], metric: ['266']},
            {dimension: ['3', 'OO', 'EKO'], metric: ['266']},
            {dimension: ['2', 'UA', 'MFR'], metric: ['265']},
            {dimension: ['3', 'EV', 'JLN'], metric: ['265']},
            {dimension: ['3', '9E', 'AVL'], metric: ['265']},
            {dimension: ['1', 'AS', 'IAH'], metric: ['265']},
            {dimension: ['4', 'EV', 'DAY'], metric: ['265']},
            {dimension: ['1', 'EV', 'SPS'], metric: ['265']},
            {dimension: ['1', 'MQ', 'SPS'], metric: ['265']},
            {dimension: ['2', 'YX', 'PWM'], metric: ['265']},
            {dimension: ['2', 'YV', 'FSD'], metric: ['265']},
            {dimension: ['4', 'WN', 'RIC'], metric: ['265']},
            {dimension: ['2', 'UA', 'BUF'], metric: ['265']},
            {dimension: ['1', 'YX', 'ALB'], metric: ['265']},
            {dimension: ['3', 'YV', 'BOI'], metric: ['264']},
            {dimension: ['2', 'MQ', 'AEX'], metric: ['264']},
            {dimension: ['3', 'OO', 'PWM'], metric: ['264']},
            {dimension: ['1', 'OH', 'MKE'], metric: ['264']},
            {dimension: ['3', 'OO', 'APN'], metric: ['264']},
            {dimension: ['2', 'UA', 'OKC'], metric: ['264']},
            {dimension: ['2', 'G4', 'LEX'], metric: ['264']},
            {dimension: ['4', 'UA', 'SJU'], metric: ['264']},
            {dimension: ['2', 'MQ', 'SUX'], metric: ['264']},
            {dimension: ['4', 'VX', 'DEN'], metric: ['264']},
            {dimension: ['2', '9E', 'MGM'], metric: ['264']},
            {dimension: ['4', 'WN', 'GSP'], metric: ['264']},
            {dimension: ['4', 'EV', 'AMA'], metric: ['264']},
            {dimension: ['4', 'AS', 'SIT'], metric: ['264']},
            {dimension: ['1', 'YV', 'BUR'], metric: ['264']},
            {dimension: ['1', 'YV', 'SBP'], metric: ['264']},
            {dimension: ['4', 'OO', 'RDD'], metric: ['264']},
            {dimension: ['3', 'F9', 'MCI'], metric: ['263']},
            {dimension: ['3', 'OO', 'BTR'], metric: ['263']},
            {dimension: ['3', 'OO', 'CDC'], metric: ['263']},
            {dimension: ['4', 'WN', 'DSM'], metric: ['263']},
            {dimension: ['2', 'OH', 'ABE'], metric: ['263']},
            {dimension: ['3', 'OO', 'ESC'], metric: ['263']},
            {dimension: ['3', 'OO', 'HIB'], metric: ['263']},
            {dimension: ['1', 'G4', 'AUS'], metric: ['263']},
            {dimension: ['2', 'OH', 'CLE'], metric: ['263']},
            {dimension: ['3', 'OO', 'DVL'], metric: ['263']},
            {dimension: ['3', 'OO', 'LAR'], metric: ['263']},
            {dimension: ['1', 'YV', 'LGB'], metric: ['263']},
            {dimension: ['2', '9E', 'BQK'], metric: ['262']},
            {dimension: ['2', 'MQ', 'GJT'], metric: ['262']},
            {dimension: ['3', 'MQ', 'STL'], metric: ['262']},
            {dimension: ['3', 'YV', 'VPS'], metric: ['262']},
            {dimension: ['4', 'OO', 'SPI'], metric: ['261']},
            {dimension: ['4', 'UA', 'BZN'], metric: ['261']},
            {dimension: ['1', 'F9', 'PDX'], metric: ['261']},
            {dimension: ['1', 'YV', 'JAN'], metric: ['261']},
            {dimension: ['2', '9E', 'CSG'], metric: ['261']},
            {dimension: ['3', 'YX', 'OKC'], metric: ['261']},
            {dimension: ['4', 'B6', 'DEN'], metric: ['261']},
            {dimension: ['3', 'VX', 'DEN'], metric: ['261']},
            {dimension: ['1', '9E', 'OAJ'], metric: ['261']},
            {dimension: ['3', 'YV', 'CHS'], metric: ['261']},
            {dimension: ['3', 'WN', 'FNT'], metric: ['261']},
            {dimension: ['2', 'VX', 'DEN'], metric: ['260']},
            {dimension: ['4', 'OO', 'ERI'], metric: ['260']},
            {dimension: ['2', 'OH', 'HVN'], metric: ['260']},
            {dimension: ['2', 'VX', 'PDX'], metric: ['260']},
            {dimension: ['3', 'EV', 'MHT'], metric: ['260']},
            {dimension: ['3', 'EV', 'MCI'], metric: ['259']},
            {dimension: ['3', 'EV', 'SYR'], metric: ['259']},
            {dimension: ['3', 'YV', 'JAX'], metric: ['259']},
            {dimension: ['1', 'EV', 'ILM'], metric: ['259']},
            {dimension: ['1', 'EV', 'AZO'], metric: ['259']},
            {dimension: ['2', 'YV', 'LGB'], metric: ['259']},
            {dimension: ['2', 'G4', 'SDF'], metric: ['259']},
            {dimension: ['4', 'DL', 'ICT'], metric: ['258']},
            {dimension: ['2', 'OH', 'MDT'], metric: ['258']},
            {dimension: ['3', 'VX', 'PDX'], metric: ['258']},
            {dimension: ['1', 'OH', 'HVN'], metric: ['258']},
            {dimension: ['4', 'AA', 'BUF'], metric: ['258']},
            {dimension: ['2', 'OO', 'PVD'], metric: ['257']},
            {dimension: ['4', 'B6', 'SMF'], metric: ['257']},
            {dimension: ['3', '9E', 'TVC'], metric: ['257']},
            {dimension: ['3', 'OO', 'ROC'], metric: ['257']},
            {dimension: ['2', 'EV', 'CID'], metric: ['257']},
            {dimension: ['2', 'G4', 'ABE'], metric: ['257']},
            {dimension: ['1', 'DL', 'LIH'], metric: ['257']},
            {dimension: ['2', 'MQ', 'BMI'], metric: ['257']},
            {dimension: ['1', 'MQ', 'DBQ'], metric: ['257']},
            {dimension: ['1', 'MQ', 'MDT'], metric: ['257']},
            {dimension: ['2', 'EV', 'FNT'], metric: ['257']},
            {dimension: ['4', 'OO', 'MLU'], metric: ['257']},
            {dimension: ['1', 'UA', 'MEM'], metric: ['257']},
            {dimension: ['3', 'OH', 'CHO'], metric: ['256']},
            {dimension: ['4', 'OO', 'TWF'], metric: ['256']},
            {dimension: ['1', 'MQ', 'AEX'], metric: ['256']},
            {dimension: ['3', 'G4', 'PIT'], metric: ['256']},
            {dimension: ['1', 'OO', 'SWF'], metric: ['256']},
            {dimension: ['2', 'OO', 'GTR'], metric: ['256']},
            {dimension: ['4', 'EV', 'BTV'], metric: ['256']},
            {dimension: ['4', 'OO', 'PIH'], metric: ['256']},
            {dimension: ['1', 'EV', 'TLH'], metric: ['255']},
            {dimension: ['2', 'EV', 'VLD'], metric: ['255']},
            {dimension: ['1', 'AS', 'MCI'], metric: ['255']},
            {dimension: ['3', 'EV', 'BGR'], metric: ['255']},
            {dimension: ['2', 'G4', 'GRR'], metric: ['255']},
            {dimension: ['3', '9E', 'GSO'], metric: ['255']},
            {dimension: ['3', 'B6', 'ANC'], metric: ['255']},
            {dimension: ['2', 'EV', 'BQK'], metric: ['254']},
            {dimension: ['4', 'UA', 'BUR'], metric: ['254']},
            {dimension: ['4', 'OO', 'BGM'], metric: ['254']},
            {dimension: ['4', 'OO', 'COU'], metric: ['254']},
            {dimension: ['4', 'UA', 'CID'], metric: ['253']},
            {dimension: ['2', 'F9', 'PIT'], metric: ['253']},
            {dimension: ['4', 'EV', 'MSN'], metric: ['253']},
            {dimension: ['1', 'HA', 'PDX'], metric: ['253']},
            {dimension: ['1', 'EV', 'BMI'], metric: ['253']},
            {dimension: ['1', 'EV', 'VLD'], metric: ['253']},
            {dimension: ['1', '9E', 'VLD'], metric: ['253']},
            {dimension: ['1', 'YV', 'LBB'], metric: ['253']},
            {dimension: ['4', 'WN', 'FNT'], metric: ['253']},
            {dimension: ['3', 'G4', 'SAV'], metric: ['253']},
            {dimension: ['4', 'F9', 'BNA'], metric: ['253']},
            {dimension: ['2', 'OH', 'BTV'], metric: ['252']},
            {dimension: ['1', 'UA', 'ANC'], metric: ['252']},
            {dimension: ['3', 'OH', 'PVD'], metric: ['252']},
            {dimension: ['4', 'AA', 'KOA'], metric: ['251']},
            {dimension: ['1', 'MQ', 'CWA'], metric: ['251']},
            {dimension: ['1', 'MQ', 'MLI'], metric: ['250']},
            {dimension: ['3', '9E', 'XNA'], metric: ['250']},
            {dimension: ['2', 'YV', 'CMH'], metric: ['250']},
            {dimension: ['3', '9E', 'MSY'], metric: ['249']},
            {dimension: ['1', 'EV', 'BQK'], metric: ['249']},
            {dimension: ['2', 'MQ', 'TUL'], metric: ['249']},
            {dimension: ['1', 'YV', 'CLE'], metric: ['249']},
            {dimension: ['1', '9E', 'BQK'], metric: ['249']},
            {dimension: ['3', 'F9', 'OMA'], metric: ['249']},
            {dimension: ['4', 'DL', 'FNT'], metric: ['249']},
            {dimension: ['1', 'YV', 'BFL'], metric: ['249']},
            {dimension: ['1', 'G4', 'DSM'], metric: ['248']},
            {dimension: ['1', '9E', 'ABY'], metric: ['248']},
            {dimension: ['1', 'EV', 'ABY'], metric: ['248']},
            {dimension: ['1', 'UA', 'HDN'], metric: ['248']},
            {dimension: ['3', 'NK', 'CMH'], metric: ['248']},
            {dimension: ['2', 'DL', 'FAI'], metric: ['248']},
            {dimension: ['4', 'EV', 'LCH'], metric: ['248']},
            {dimension: ['4', 'UA', 'LIH'], metric: ['248']},
            {dimension: ['1', 'EV', 'GTR'], metric: ['247']},
            {dimension: ['4', 'AS', 'ONT'], metric: ['247']},
            {dimension: ['4', 'OO', 'GTR'], metric: ['247']},
            {dimension: ['2', 'EV', 'ABY'], metric: ['247']},
            {dimension: ['4', 'DL', 'MDT'], metric: ['247']},
            {dimension: ['3', 'OH', 'MSN'], metric: ['247']},
            {dimension: ['3', '9E', 'BGR'], metric: ['247']},
            {dimension: ['1', 'OO', 'GTR'], metric: ['247']},
            {dimension: ['3', 'EV', 'GRB'], metric: ['247']},
            {dimension: ['1', 'AS', 'STL'], metric: ['247']},
            {dimension: ['4', 'OO', 'JMS'], metric: ['247']},
            {dimension: ['2', 'DL', 'LIH'], metric: ['247']},
            {dimension: ['1', 'OO', 'CWA'], metric: ['247']},
            {dimension: ['3', 'OH', 'SYR'], metric: ['246']},
            {dimension: ['3', 'OH', 'VPS'], metric: ['246']},
            {dimension: ['3', 'OH', 'PNS'], metric: ['246']},
            {dimension: ['3', 'MQ', 'DAY'], metric: ['246']},
            {dimension: ['1', 'AA', 'JAC'], metric: ['246']},
            {dimension: ['2', 'YX', 'GRR'], metric: ['246']},
            {dimension: ['2', 'YV', 'MSY'], metric: ['246']},
            {dimension: ['1', 'YV', 'SAT'], metric: ['246']},
            {dimension: ['1', 'OH', 'LIT'], metric: ['246']},
            {dimension: ['1', '9E', 'CHS'], metric: ['246']},
            {dimension: ['2', 'MQ', 'AZO'], metric: ['246']},
            {dimension: ['3', 'YV', 'LGA'], metric: ['245']},
            {dimension: ['1', 'OH', 'MDT'], metric: ['245']},
            {dimension: ['1', 'EV', 'MEI'], metric: ['245']},
            {dimension: ['2', 'OH', 'MGM'], metric: ['245']},
            {dimension: ['3', 'OH', 'GNV'], metric: ['245']},
            {dimension: ['1', '9E', 'ATW'], metric: ['245']},
            {dimension: ['3', '9E', 'MCI'], metric: ['244']},
            {dimension: ['3', 'MQ', 'PWM'], metric: ['244']},
            {dimension: ['3', 'YV', 'ICT'], metric: ['244']},
            {dimension: ['3', 'OO', 'AEX'], metric: ['244']},
            {dimension: ['4', 'UA', 'ORF'], metric: ['244']},
            {dimension: ['4', 'DL', 'BIL'], metric: ['243']},
            {dimension: ['2', 'OH', 'PWM'], metric: ['243']},
            {dimension: ['4', 'EV', 'MHK'], metric: ['243']},
            {dimension: ['4', 'AA', 'ALB'], metric: ['243']},
            {dimension: ['2', 'YV', 'PNS'], metric: ['243']},
            {dimension: ['3', '9E', 'LEX'], metric: ['243']},
            {dimension: ['2', 'YV', 'VPS'], metric: ['243']},
            {dimension: ['1', 'OO', 'PHL'], metric: ['243']},
            {dimension: ['2', 'F9', 'MEM'], metric: ['243']},
            {dimension: ['1', 'DL', 'HDN'], metric: ['242']},
            {dimension: ['3', 'YV', 'SBP'], metric: ['242']},
            {dimension: ['1', 'MQ', 'TXK'], metric: ['242']},
            {dimension: ['3', 'MQ', 'SJT'], metric: ['242']},
            {dimension: ['1', 'EV', 'FAY'], metric: ['242']},
            {dimension: ['4', 'DL', 'OAK'], metric: ['242']},
            {dimension: ['1', 'MQ', 'SHV'], metric: ['241']},
            {dimension: ['1', '9E', 'CHA'], metric: ['241']},
            {dimension: ['1', 'OH', 'XNA'], metric: ['241']},
            {dimension: ['2', 'OO', 'SHD'], metric: ['241']},
            {dimension: ['3', 'MQ', 'DCA'], metric: ['241']},
            {dimension: ['3', 'OH', 'DTW'], metric: ['241']},
            {dimension: ['3', 'UA', 'TUL'], metric: ['241']},
            {dimension: ['2', 'EV', 'AZO'], metric: ['240']},
            {dimension: ['3', 'YV', 'FAT'], metric: ['240']},
            {dimension: ['2', 'YV', 'LFT'], metric: ['240']},
            {dimension: ['2', 'UA', 'RIC'], metric: ['240']},
            {dimension: ['1', '9E', 'MSY'], metric: ['240']},
            {dimension: ['2', 'AS', 'STL'], metric: ['240']},
            {dimension: ['1', 'G4', 'AVL'], metric: ['240']},
            {dimension: ['3', 'YV', 'PIT'], metric: ['240']},
            {dimension: ['3', 'G4', 'LCK'], metric: ['240']},
            {dimension: ['2', 'OO', 'PIB'], metric: ['240']},
            {dimension: ['3', 'YX', 'BGR'], metric: ['240']},
            {dimension: ['1', 'DL', 'FAY'], metric: ['239']},
            {dimension: ['1', 'EV', 'LNK'], metric: ['239']},
            {dimension: ['2', 'MQ', 'IAH'], metric: ['239']},
            {dimension: ['3', 'EV', 'AZO'], metric: ['239']},
            {dimension: ['2', 'G4', 'OAK'], metric: ['238']},
            {dimension: ['4', 'EV', 'LFT'], metric: ['238']},
            {dimension: ['3', 'OH', 'DAB'], metric: ['238']},
            {dimension: ['4', 'OO', 'SUN'], metric: ['238']},
            {dimension: ['1', 'G4', 'PIT'], metric: ['238']},
            {dimension: ['4', 'OO', 'DHN'], metric: ['238']},
            {dimension: ['3', 'UA', 'PSP'], metric: ['238']},
            {dimension: ['3', 'OH', 'SRQ'], metric: ['238']},
            {dimension: ['3', 'OO', 'GNV'], metric: ['237']},
            {dimension: ['4', 'NK', 'LBE'], metric: ['237']},
            {dimension: ['2', 'NK', 'IAG'], metric: ['237']},
            {dimension: ['4', 'AS', 'AUS'], metric: ['237']},
            {dimension: ['4', 'VX', 'PSP'], metric: ['236']},
            {dimension: ['1', '9E', 'LEX'], metric: ['236']},
            {dimension: ['1', 'F9', 'OMA'], metric: ['236']},
            {dimension: ['1', 'DL', 'MOB'], metric: ['236']},
            {dimension: ['1', 'G4', 'BLV'], metric: ['236']},
            {dimension: ['4', 'OO', 'CHA'], metric: ['236']},
            {dimension: ['1', 'MQ', 'JAN'], metric: ['236']},
            {dimension: ['2', 'MQ', 'LCH'], metric: ['236']},
            {dimension: ['1', 'YX', 'ROC'], metric: ['236']},
            {dimension: ['2', '9E', 'OMA'], metric: ['235']},
            {dimension: ['4', 'UA', 'ABQ'], metric: ['235']},
            {dimension: ['1', 'NK', 'CMH'], metric: ['235']},
            {dimension: ['4', 'HA', 'LAS'], metric: ['235']},
            {dimension: ['3', 'MQ', 'TYR'], metric: ['235']},
            {dimension: ['3', 'OO', 'ROA'], metric: ['235']},
            {dimension: ['3', 'MQ', 'BUF'], metric: ['235']},
            {dimension: ['3', 'OH', 'MHT'], metric: ['235']},
            {dimension: ['1', 'DL', 'MSO'], metric: ['235']},
            {dimension: ['2', 'VX', 'LGA'], metric: ['234']},
            {dimension: ['2', 'EV', 'TLH'], metric: ['234']},
            {dimension: ['3', 'F9', 'JAX'], metric: ['234']},
            {dimension: ['2', 'OO', 'PUB'], metric: ['234']},
            {dimension: ['2', 'UA', 'TUS'], metric: ['234']},
            {dimension: ['4', 'EV', 'MSP'], metric: ['234']},
            {dimension: ['2', 'OO', 'UIN'], metric: ['234']},
            {dimension: ['3', 'DL', 'BTV'], metric: ['233']},
            {dimension: ['4', 'OO', 'GCC'], metric: ['233']},
            {dimension: ['2', '9E', 'MEM'], metric: ['233']},
            {dimension: ['3', 'MQ', 'FAR'], metric: ['233']},
            {dimension: ['3', 'YV', 'CVG'], metric: ['233']},
            {dimension: ['3', 'YV', 'MTJ'], metric: ['233']},
            {dimension: ['4', 'EV', 'DSM'], metric: ['232']},
            {dimension: ['3', 'MQ', 'TXK'], metric: ['232']},
            {dimension: ['2', 'EV', 'ELM'], metric: ['232']},
            {dimension: ['1', 'F9', 'MEM'], metric: ['232']},
            {dimension: ['2', 'G4', 'SGF'], metric: ['232']},
            {dimension: ['1', 'F9', 'DSM'], metric: ['232']},
            {dimension: ['3', 'EV', 'TVC'], metric: ['232']},
            {dimension: ['1', '9E', 'GFK'], metric: ['232']},
            {dimension: ['3', 'AA', 'MDT'], metric: ['232']},
            {dimension: ['4', 'OO', 'CPR'], metric: ['231']},
            {dimension: ['1', 'OO', 'UIN'], metric: ['231']},
            {dimension: ['2', 'YV', 'PSP'], metric: ['231']},
            {dimension: ['1', 'EV', 'HRL'], metric: ['231']},
            {dimension: ['1', 'OO', 'CHS'], metric: ['231']},
            {dimension: ['2', 'MQ', 'DBQ'], metric: ['231']},
            {dimension: ['3', '9E', 'FAY'], metric: ['230']},
            {dimension: ['2', 'MQ', 'CWA'], metric: ['230']},
            {dimension: ['4', 'OO', 'ITH'], metric: ['230']},
            {dimension: ['2', 'G4', 'MEM'], metric: ['230']},
            {dimension: ['1', 'UA', 'BUR'], metric: ['230']},
            {dimension: ['1', 'UA', 'ICT'], metric: ['230']},
            {dimension: ['4', 'DL', 'DSM'], metric: ['229']},
            {dimension: ['4', 'DL', 'JAC'], metric: ['229']},
            {dimension: ['3', 'MQ', 'CHO'], metric: ['229']},
            {dimension: ['3', 'YV', 'LIT'], metric: ['229']},
            {dimension: ['1', 'EV', 'BGR'], metric: ['229']},
            {dimension: ['1', 'EV', 'MYR'], metric: ['228']},
            {dimension: ['2', 'HA', 'SAN'], metric: ['228']},
            {dimension: ['3', 'OO', 'ELP'], metric: ['228']},
            {dimension: ['1', 'AS', 'FLL'], metric: ['228']},
            {dimension: ['4', 'DL', 'AGS'], metric: ['228']},
            {dimension: ['1', 'MQ', 'GJT'], metric: ['228']},
            {dimension: ['3', 'G4', 'OAK'], metric: ['228']},
            {dimension: ['4', 'OO', 'GSO'], metric: ['228']},
            {dimension: ['3', 'OH', 'LIT'], metric: ['228']},
            {dimension: ['1', '9E', 'SHV'], metric: ['228']},
            {dimension: ['2', 'AS', 'IND'], metric: ['227']},
            {dimension: ['3', 'OH', 'IND'], metric: ['227']},
            {dimension: ['1', 'UA', 'STT'], metric: ['227']},
            {dimension: ['1', 'G4', 'CID'], metric: ['227']},
            {dimension: ['2', 'UA', 'CID'], metric: ['227']},
            {dimension: ['3', 'OH', 'MOB'], metric: ['227']},
            {dimension: ['1', 'YX', 'BGR'], metric: ['227']},
            {dimension: ['1', 'YV', 'TUL'], metric: ['227']},
            {dimension: ['2', 'EV', 'ATW'], metric: ['227']},
            {dimension: ['1', 'DL', 'BTR'], metric: ['226']},
            {dimension: ['4', 'F9', 'IND'], metric: ['226']},
            {dimension: ['4', 'AS', 'BET'], metric: ['226']},
            {dimension: ['3', 'UA', 'GUM'], metric: ['225']},
            {dimension: ['3', '9E', 'BNA'], metric: ['225']},
            {dimension: ['3', 'OO', 'TRI'], metric: ['225']},
            {dimension: ['1', 'OO', 'SAF'], metric: ['225']},
            {dimension: ['2', 'YV', 'JAN'], metric: ['225']},
            {dimension: ['4', 'AA', 'PNS'], metric: ['225']},
            {dimension: ['3', 'OH', 'RIC'], metric: ['225']},
            {dimension: ['3', 'OH', 'AVP'], metric: ['225']},
            {dimension: ['3', 'OH', 'XNA'], metric: ['224']},
            {dimension: ['2', 'EV', 'FAY'], metric: ['224']},
            {dimension: ['2', 'F9', 'JAX'], metric: ['224']},
            {dimension: ['4', 'F9', 'SJU'], metric: ['224']},
            {dimension: ['2', 'EV', 'CVG'], metric: ['224']},
            {dimension: ['3', 'OH', 'ATL'], metric: ['224']},
            {dimension: ['3', 'OH', 'DSM'], metric: ['224']},
            {dimension: ['3', 'OO', 'EVV'], metric: ['224']},
            {dimension: ['2', '9E', 'AVL'], metric: ['223']},
            {dimension: ['1', 'UA', 'BTV'], metric: ['223']},
            {dimension: ['3', '9E', 'GRB'], metric: ['223']},
            {dimension: ['3', 'YV', 'ORF'], metric: ['223']},
            {dimension: ['2', 'YV', 'BTR'], metric: ['223']},
            {dimension: ['3', 'UA', 'MFE'], metric: ['223']},
            {dimension: ['4', 'OO', 'ILM'], metric: ['222']},
            {dimension: ['2', '9E', 'CHA'], metric: ['222']},
            {dimension: ['4', 'EV', 'AEX'], metric: ['222']},
            {dimension: ['4', 'NK', 'SJU'], metric: ['222']},
            {dimension: ['1', '9E', 'BMI'], metric: ['222']},
            {dimension: ['3', 'AA', 'ICT'], metric: ['221']},
            {dimension: ['3', 'F9', 'SJC'], metric: ['221']},
            {dimension: ['1', 'G4', 'LCK'], metric: ['221']},
            {dimension: ['3', 'G4', 'BLV'], metric: ['221']},
            {dimension: ['3', 'YV', 'RDU'], metric: ['221']},
            {dimension: ['2', 'EV', 'LNK'], metric: ['221']},
            {dimension: ['2', 'OO', 'HPN'], metric: ['221']},
            {dimension: ['1', 'AA', 'GUC'], metric: ['220']},
            {dimension: ['1', 'UA', 'CID'], metric: ['220']},
            {dimension: ['4', 'EV', 'BWI'], metric: ['220']},
            {dimension: ['4', 'F9', 'CMH'], metric: ['220']},
            {dimension: ['3', 'MQ', 'CHS'], metric: ['220']},
            {dimension: ['2', 'OO', 'HRL'], metric: ['220']},
            {dimension: ['1', 'AA', 'HDN'], metric: ['220']},
            {dimension: ['1', 'YV', 'MRY'], metric: ['219']},
            {dimension: ['1', 'YV', 'IND'], metric: ['219']},
            {dimension: ['3', 'YX', 'BTV'], metric: ['219']},
            {dimension: ['3', '9E', 'CRW'], metric: ['219']},
            {dimension: ['2', 'OO', 'AGS'], metric: ['219']},
            {dimension: ['2', '9E', 'MSN'], metric: ['219']},
            {dimension: ['3', 'UA', 'ICT'], metric: ['219']},
            {dimension: ['1', 'UA', 'OKC'], metric: ['219']},
            {dimension: ['4', 'EV', 'PWM'], metric: ['219']},
            {dimension: ['3', 'OO', 'TOL'], metric: ['219']},
            {dimension: ['2', 'UA', 'SRQ'], metric: ['219']},
            {dimension: ['3', 'MQ', 'ILM'], metric: ['218']},
            {dimension: ['1', 'F9', 'BUF'], metric: ['218']},
            {dimension: ['1', 'OO', 'ROW'], metric: ['218']},
            {dimension: ['4', 'DL', 'FAR'], metric: ['218']},
            {dimension: ['3', 'AA', 'BZN'], metric: ['218']},
            {dimension: ['1', 'OH', 'MSY'], metric: ['218']},
            {dimension: ['3', 'YV', 'MOB'], metric: ['218']},
            {dimension: ['3', 'OH', 'PIT'], metric: ['218']},
            {dimension: ['2', '9E', 'SGF'], metric: ['218']},
            {dimension: ['4', 'AA', 'EGE'], metric: ['218']},
            {dimension: ['1', 'F9', 'SJU'], metric: ['218']},
            {dimension: ['1', 'AA', 'MTJ'], metric: ['218']},
            {dimension: ['1', 'G4', 'ABE'], metric: ['218']},
            {dimension: ['3', 'UA', 'OKC'], metric: ['217']},
            {dimension: ['1', 'DL', 'PSP'], metric: ['217']},
            {dimension: ['1', 'YV', 'SLC'], metric: ['217']},
            {dimension: ['2', '9E', 'TLH'], metric: ['217']},
            {dimension: ['3', 'OH', 'CHA'], metric: ['217']},
            {dimension: ['1', 'EV', 'FSD'], metric: ['216']},
            {dimension: ['3', 'YV', 'BRO'], metric: ['216']},
            {dimension: ['3', 'AS', 'MSY'], metric: ['216']},
            {dimension: ['3', 'AS', 'FLL'], metric: ['216']},
            {dimension: ['3', 'HA', 'SAN'], metric: ['216']},
            {dimension: ['3', 'HA', 'PDX'], metric: ['216']},
            {dimension: ['3', 'AS', 'BOI'], metric: ['216']},
            {dimension: ['4', 'DL', 'CHA'], metric: ['215']},
            {dimension: ['2', 'YV', 'SAV'], metric: ['215']},
            {dimension: ['3', 'YV', 'AUS'], metric: ['215']},
            {dimension: ['4', 'DL', 'ELP'], metric: ['215']},
            {dimension: ['1', 'OH', 'ATL'], metric: ['215']},
            {dimension: ['2', 'OO', 'AVP'], metric: ['215']},
            {dimension: ['1', 'UA', 'ROC'], metric: ['215']},
            {dimension: ['1', 'OH', 'MLB'], metric: ['215']},
            {dimension: ['3', 'F9', 'MEM'], metric: ['215']},
            {dimension: ['1', 'OO', 'OAK'], metric: ['215']},
            {dimension: ['3', 'AS', 'RDU'], metric: ['215']},
            {dimension: ['2', 'EV', 'LAW'], metric: ['215']},
            {dimension: ['3', 'MQ', 'MHK'], metric: ['215']},
            {dimension: ['3', 'MQ', 'OKC'], metric: ['215']},
            {dimension: ['1', 'OH', 'CAE'], metric: ['214']},
            {dimension: ['1', 'UA', 'TUS'], metric: ['214']},
            {dimension: ['3', 'MQ', 'LRD'], metric: ['214']},
            {dimension: ['4', 'UA', 'MFR'], metric: ['214']},
            {dimension: ['2', 'EV', 'PIA'], metric: ['213']},
            {dimension: ['2', 'DL', 'BIS'], metric: ['213']},
            {dimension: ['2', 'YV', 'TUL'], metric: ['213']},
            {dimension: ['3', 'F9', 'DSM'], metric: ['213']},
            {dimension: ['4', 'DL', 'TUL'], metric: ['213']},
            {dimension: ['3', 'DL', 'LIH'], metric: ['213']},
            {dimension: ['2', 'G4', 'DSM'], metric: ['213']},
            {dimension: ['2', 'MQ', 'STL'], metric: ['212']},
            {dimension: ['1', 'G4', 'USA'], metric: ['212']},
            {dimension: ['2', 'OO', 'SLN'], metric: ['212']},
            {dimension: ['2', 'UA', 'GUM'], metric: ['212']},
            {dimension: ['2', 'MQ', 'DTW'], metric: ['212']},
            {dimension: ['2', 'YX', 'BDL'], metric: ['212']},
            {dimension: ['3', 'YV', 'MRY'], metric: ['211']},
            {dimension: ['4', 'NK', 'CAK'], metric: ['211']},
            {dimension: ['3', 'YV', 'BUF'], metric: ['211']},
            {dimension: ['4', 'AA', 'FAT'], metric: ['210']},
            {dimension: ['1', 'OO', 'GSO'], metric: ['210']},
            {dimension: ['3', 'EV', 'HRL'], metric: ['210']},
            {dimension: ['3', 'OO', 'ABY'], metric: ['210']},
            {dimension: ['4', 'AA', 'ILM'], metric: ['210']},
            {dimension: ['2', '9E', 'AGS'], metric: ['209']},
            {dimension: ['2', 'AS', 'BOI'], metric: ['209']},
            {dimension: ['4', 'AA', 'SAV'], metric: ['208']},
            {dimension: ['3', 'MQ', 'AMA'], metric: ['208']},
            {dimension: ['3', 'YX', 'BDL'], metric: ['208']},
            {dimension: ['3', 'AA', 'VPS'], metric: ['208']},
            {dimension: ['3', 'AS', 'IND'], metric: ['208']},
            {dimension: ['4', 'EV', 'BRO'], metric: ['208']},
            {dimension: ['2', 'EV', 'OKC'], metric: ['208']},
            {dimension: ['1', 'F9', 'DFW'], metric: ['208']},
            {dimension: ['1', 'EV', 'OAJ'], metric: ['208']},
            {dimension: ['2', 'MQ', 'FSM'], metric: ['208']},
            {dimension: ['1', 'MQ', 'GSP'], metric: ['208']},
            {dimension: ['2', 'OO', 'TOL'], metric: ['208']},
            {dimension: ['3', 'OO', 'LBB'], metric: ['207']},
            {dimension: ['3', 'UA', 'FSD'], metric: ['207']},
            {dimension: ['4', 'AA', 'MFE'], metric: ['207']},
            {dimension: ['4', 'OO', 'PLN'], metric: ['207']},
            {dimension: ['3', 'OH', 'JAX'], metric: ['207']},
            {dimension: ['3', 'EV', 'GNV'], metric: ['207']},
            {dimension: ['3', 'YX', 'MSN'], metric: ['207']},
            {dimension: ['1', 'OO', 'BDL'], metric: ['207']},
            {dimension: ['4', 'OO', 'SGF'], metric: ['206']},
            {dimension: ['2', 'OO', 'LBB'], metric: ['206']},
            {dimension: ['1', 'EV', 'DAY'], metric: ['206']},
            {dimension: ['4', 'AA', 'OAK'], metric: ['206']},
            {dimension: ['2', 'YV', 'MRY'], metric: ['206']},
            {dimension: ['4', 'UA', 'SBA'], metric: ['206']},
            {dimension: ['1', 'OO', 'LFT'], metric: ['206']},
            {dimension: ['1', 'OO', 'COU'], metric: ['206']},
            {dimension: ['2', '9E', 'GSP'], metric: ['205']},
            {dimension: ['4', 'UA', 'CHS'], metric: ['204']},
            {dimension: ['3', 'AA', 'GSP'], metric: ['204']},
            {dimension: ['2', 'MQ', 'SDF'], metric: ['203']},
            {dimension: ['1', 'UA', 'MTJ'], metric: ['203']},
            {dimension: ['3', 'EV', 'MFE'], metric: ['203']},
            {dimension: ['2', 'AA', 'VPS'], metric: ['203']},
            {dimension: ['3', 'G4', 'AUS'], metric: ['203']},
            {dimension: ['2', 'EV', 'MFE'], metric: ['203']},
            {dimension: ['3', 'OH', 'BDL'], metric: ['203']},
            {dimension: ['3', 'OH', 'MGM'], metric: ['203']},
            {dimension: ['1', '9E', 'RSW'], metric: ['203']},
            {dimension: ['1', 'AS', 'DTW'], metric: ['203']},
            {dimension: ['1', 'G4', 'SDF'], metric: ['203']},
            {dimension: ['3', 'EV', 'RDU'], metric: ['203']},
            {dimension: ['3', 'EV', 'ROA'], metric: ['202']},
            {dimension: ['2', 'OO', 'MHT'], metric: ['202']},
            {dimension: ['3', 'YX', 'MAF'], metric: ['202']},
            {dimension: ['4', 'EV', 'SBN'], metric: ['202']},
            {dimension: ['3', 'YV', 'LFT'], metric: ['202']},
            {dimension: ['4', 'AS', 'BRW'], metric: ['202']},
            {dimension: ['3', 'OH', 'HSV'], metric: ['201']},
            {dimension: ['1', 'OO', 'PUB'], metric: ['201']},
            {dimension: ['3', 'DL', 'BIS'], metric: ['201']},
            {dimension: ['3', 'EV', 'BWI'], metric: ['201']},
            {dimension: ['4', 'EV', 'BMI'], metric: ['201']},
            {dimension: ['1', 'OO', 'BWI'], metric: ['201']},
            {dimension: ['2', 'G4', 'SCK'], metric: ['201']},
            {dimension: ['4', 'UA', 'DSM'], metric: ['200']},
            {dimension: ['3', 'AS', 'STL'], metric: ['200']},
            {dimension: ['4', 'B6', 'BQN'], metric: ['200']},
            {dimension: ['3', 'G4', 'USA'], metric: ['200']},
            {dimension: ['2', 'F9', 'BUF'], metric: ['200']},
            {dimension: ['4', 'DL', 'TUS'], metric: ['200']},
            {dimension: ['1', 'DL', 'ATW'], metric: ['200']},
            {dimension: ['1', 'G4', 'MSY'], metric: ['200']},
            {dimension: ['2', '9E', 'ILM'], metric: ['199']},
            {dimension: ['4', 'DL', 'BOI'], metric: ['199']},
            {dimension: ['3', '9E', 'OMA'], metric: ['199']},
            {dimension: ['4', 'EV', 'PIT'], metric: ['199']},
            {dimension: ['2', 'YV', 'ONT'], metric: ['199']},
            {dimension: ['1', 'DL', 'TRI'], metric: ['199']},
            {dimension: ['4', 'DL', 'ATW'], metric: ['199']},
            {dimension: ['3', 'OH', 'LYH'], metric: ['198']},
            {dimension: ['3', 'OO', 'OTH'], metric: ['198']},
            {dimension: ['2', 'MQ', 'ROW'], metric: ['198']},
            {dimension: ['4', 'NK', 'PHX'], metric: ['198']},
            {dimension: ['3', 'EV', 'GRI'], metric: ['198']},
            {dimension: ['4', 'DL', 'EYW'], metric: ['198']},
            {dimension: ['2', 'OO', 'LWB'], metric: ['198']},
            {dimension: ['2', 'G4', 'PIA'], metric: ['198']},
            {dimension: ['3', 'OH', 'TRI'], metric: ['198']},
            {dimension: ['3', 'DL', 'AVL'], metric: ['197']},
            {dimension: ['1', 'EV', 'TUS'], metric: ['197']},
            {dimension: ['1', 'MQ', 'JLN'], metric: ['197']},
            {dimension: ['4', 'OO', 'ELP'], metric: ['197']},
            {dimension: ['1', 'G4', 'FSD'], metric: ['197']},
            {dimension: ['2', 'G4', 'JAX'], metric: ['197']},
            {dimension: ['2', 'MQ', 'TVC'], metric: ['197']},
            {dimension: ['1', 'UA', 'CHS'], metric: ['196']},
            {dimension: ['1', 'EV', 'MDW'], metric: ['196']},
            {dimension: ['2', 'MQ', 'BPT'], metric: ['196']},
            {dimension: ['1', 'G4', 'LEX'], metric: ['196']},
            {dimension: ['1', '9E', 'AEX'], metric: ['196']},
            {dimension: ['2', 'VX', 'OGG'], metric: ['195']},
            {dimension: ['2', 'UA', 'MYR'], metric: ['195']},
            {dimension: ['1', 'G4', 'CLE'], metric: ['195']},
            {dimension: ['2', 'YV', 'RNO'], metric: ['194']},
            {dimension: ['2', 'AA', 'JAC'], metric: ['194']},
            {dimension: ['1', 'OH', 'LYH'], metric: ['194']},
            {dimension: ['2', '9E', 'VLD'], metric: ['194']},
            {dimension: ['3', 'OO', 'TPA'], metric: ['194']},
            {dimension: ['2', 'EV', 'MHT'], metric: ['194']},
            {dimension: ['2', 'AA', 'BTV'], metric: ['194']},
            {dimension: ['2', 'YV', 'DCA'], metric: ['194']},
            {dimension: ['4', 'HA', 'SEA'], metric: ['194']},
            {dimension: ['1', 'YV', 'PSP'], metric: ['194']},
            {dimension: ['4', 'EV', 'CRW'], metric: ['193']},
            {dimension: ['1', 'G4', 'RFD'], metric: ['193']},
            {dimension: ['3', 'AA', 'MFE'], metric: ['193']},
            {dimension: ['4', 'F9', 'DFW'], metric: ['193']},
            {dimension: ['2', 'WN', 'DAY'], metric: ['193']},
            {dimension: ['2', '9E', 'ABY'], metric: ['193']},
            {dimension: ['3', 'VX', 'OGG'], metric: ['193']},
            {dimension: ['2', 'MQ', 'SWO'], metric: ['193']},
            {dimension: ['2', 'MQ', 'GGG'], metric: ['192']},
            {dimension: ['2', 'MQ', 'GRI'], metric: ['192']},
            {dimension: ['1', '9E', 'MOT'], metric: ['192']},
            {dimension: ['2', '9E', 'CMH'], metric: ['192']},
            {dimension: ['2', 'AS', 'TUS'], metric: ['192']},
            {dimension: ['4', 'F9', 'RDU'], metric: ['192']},
            {dimension: ['1', 'G4', 'SBN'], metric: ['192']},
            {dimension: ['2', 'NK', 'PBG'], metric: ['191']},
            {dimension: ['3', 'EV', 'JAX'], metric: ['191']},
            {dimension: ['3', 'YV', 'HSV'], metric: ['191']},
            {dimension: ['2', 'G4', 'MSY'], metric: ['191']},
            {dimension: ['3', 'MQ', 'MCI'], metric: ['191']},
            {dimension: ['4', 'OO', 'LFT'], metric: ['191']},
            {dimension: ['1', 'OO', 'ROA'], metric: ['191']},
            {dimension: ['2', '9E', 'BTR'], metric: ['191']},
            {dimension: ['3', 'OO', 'HDN'], metric: ['190']},
            {dimension: ['3', 'G4', 'ABE'], metric: ['190']},
            {dimension: ['3', 'YX', 'SRQ'], metric: ['190']},
            {dimension: ['1', 'F9', 'MSN'], metric: ['190']},
            {dimension: ['1', 'OO', 'TRI'], metric: ['190']},
            {dimension: ['1', 'MQ', 'CHS'], metric: ['190']},
            {dimension: ['1', 'MQ', 'EWR'], metric: ['190']},
            {dimension: ['3', 'OO', 'VLD'], metric: ['190']},
            {dimension: ['2', 'OO', 'BTR'], metric: ['190']},
            {dimension: ['3', '9E', 'MSN'], metric: ['190']},
            {dimension: ['2', 'MQ', 'GSP'], metric: ['189']},
            {dimension: ['4', 'EV', 'ECP'], metric: ['189']},
            {dimension: ['3', 'DL', 'XNA'], metric: ['189']},
            {dimension: ['4', 'UA', 'CVG'], metric: ['189']},
            {dimension: ['1', 'OH', 'TRI'], metric: ['188']},
            {dimension: ['3', 'YV', 'MEM'], metric: ['188']},
            {dimension: ['2', 'MQ', 'PWM'], metric: ['188']},
            {dimension: ['3', '9E', 'GSP'], metric: ['188']},
            {dimension: ['1', 'MQ', 'GRK'], metric: ['188']},
            {dimension: ['3', 'OO', 'BGR'], metric: ['188']},
            {dimension: ['1', 'DL', 'PWM'], metric: ['188']},
            {dimension: ['4', 'UA', 'CMH'], metric: ['187']},
            {dimension: ['1', 'MQ', 'ROW'], metric: ['187']},
            {dimension: ['3', 'MQ', 'SHV'], metric: ['187']},
            {dimension: ['4', 'B6', 'SRQ'], metric: ['187']},
            {dimension: ['1', 'DL', 'GNV'], metric: ['187']},
            {dimension: ['3', 'AA', 'MYR'], metric: ['187']},
            {dimension: ['2', 'UA', 'STT'], metric: ['187']},
            {dimension: ['4', 'EV', 'BUF'], metric: ['187']},
            {dimension: ['1', 'MQ', 'GRB'], metric: ['186']},
            {dimension: ['2', 'OH', 'OMA'], metric: ['186']},
            {dimension: ['1', 'MQ', 'COU'], metric: ['186']},
            {dimension: ['1', 'UA', 'FSD'], metric: ['186']},
            {dimension: ['3', 'B6', 'MSP'], metric: ['186']},
            {dimension: ['1', 'AS', 'TUS'], metric: ['185']},
            {dimension: ['2', 'YV', 'STL'], metric: ['185']},
            {dimension: ['3', 'MQ', 'DSM'], metric: ['185']},
            {dimension: ['2', 'OH', 'GRR'], metric: ['185']},
            {dimension: ['3', 'UA', 'SBA'], metric: ['185']},
            {dimension: ['2', 'AA', 'PNS'], metric: ['185']},
            {dimension: ['2', 'DL', 'ILM'], metric: ['185']},
            {dimension: ['2', 'MQ', 'MCI'], metric: ['185']},
            {dimension: ['3', 'YX', 'PNS'], metric: ['185']},
            {dimension: ['1', 'OO', 'PVD'], metric: ['185']},
            {dimension: ['4', 'VX', 'OGG'], metric: ['184']},
            {dimension: ['4', 'UA', 'MSN'], metric: ['184']},
            {dimension: ['2', 'WN', 'CAK'], metric: ['184']},
            {dimension: ['2', 'OO', 'SAF'], metric: ['184']},
            {dimension: ['3', 'YV', 'BTR'], metric: ['184']},
            {dimension: ['3', 'AA', 'PSP'], metric: ['184']},
            {dimension: ['4', 'EV', 'ABE'], metric: ['184']},
            {dimension: ['3', 'VX', 'HNL'], metric: ['184']},
            {dimension: ['4', 'VX', 'HNL'], metric: ['184']},
            {dimension: ['4', 'B6', 'ORH'], metric: ['184']},
            {dimension: ['3', 'VX', 'MCO'], metric: ['184']},
            {dimension: ['4', 'B6', 'HOU'], metric: ['184']},
            {dimension: ['4', 'B6', 'ALB'], metric: ['184']},
            {dimension: ['4', 'HA', 'SFO'], metric: ['184']},
            {dimension: ['4', 'AS', 'DTW'], metric: ['184']},
            {dimension: ['4', 'OO', 'PIB'], metric: ['184']},
            {dimension: ['4', 'B6', 'PHX'], metric: ['184']},
            {dimension: ['4', 'B6', 'SWF'], metric: ['184']},
            {dimension: ['3', 'YX', 'AUS'], metric: ['184']},
            {dimension: ['4', 'VX', 'MCO'], metric: ['184']},
            {dimension: ['4', 'HA', 'OAK'], metric: ['184']},
            {dimension: ['3', 'OH', 'MDT'], metric: ['184']},
            {dimension: ['2', '9E', 'CID'], metric: ['184']},
            {dimension: ['2', 'EV', 'CWA'], metric: ['184']},
            {dimension: ['3', 'YV', 'BUR'], metric: ['183']},
            {dimension: ['4', 'AA', 'DAY'], metric: ['183']},
            {dimension: ['1', 'YV', 'RNO'], metric: ['183']},
            {dimension: ['3', 'G4', 'LEX'], metric: ['183']},
            {dimension: ['4', 'AA', 'GSP'], metric: ['183']},
            {dimension: ['2', 'OO', 'FSM'], metric: ['183']},
            {dimension: ['2', 'DL', 'TVC'], metric: ['183']},
            {dimension: ['4', 'F9', 'IAH'], metric: ['183']},
            {dimension: ['3', '9E', 'BQK'], metric: ['183']},
            {dimension: ['3', 'G4', 'SGF'], metric: ['183']},
            {dimension: ['3', 'OH', 'BTV'], metric: ['183']},
            {dimension: ['2', 'YV', 'BUF'], metric: ['183']},
            {dimension: ['1', 'DL', 'ABE'], metric: ['183']},
            {dimension: ['3', 'EV', 'LAN'], metric: ['182']},
            {dimension: ['3', 'MQ', 'AEX'], metric: ['182']},
            {dimension: ['4', 'OO', 'CMX'], metric: ['182']},
            {dimension: ['2', 'NK', 'RIC'], metric: ['182']},
            {dimension: ['4', 'HA', 'SJC'], metric: ['182']},
            {dimension: ['3', 'MQ', 'TVC'], metric: ['182']},
            {dimension: ['2', 'MQ', 'LFT'], metric: ['182']},
            {dimension: ['2', 'DL', 'BTV'], metric: ['182']},
            {dimension: ['2', 'YV', 'PIA'], metric: ['182']},
            {dimension: ['2', 'OH', 'CID'], metric: ['182']},
            {dimension: ['2', 'HA', 'PHX'], metric: ['182']},
            {dimension: ['2', 'HA', 'SMF'], metric: ['182']},
            {dimension: ['2', 'MQ', 'PVD'], metric: ['182']},
            {dimension: ['4', 'OO', 'ABR'], metric: ['182']},
            {dimension: ['2', 'B6', 'STX'], metric: ['182']},
            {dimension: ['1', 'AS', 'IAD'], metric: ['182']},
            {dimension: ['2', 'AS', 'SAT'], metric: ['182']},
            {dimension: ['2', 'DL', 'EVV'], metric: ['182']},
            {dimension: ['2', 'DL', 'ROA'], metric: ['182']},
            {dimension: ['2', 'MQ', 'GCK'], metric: ['182']},
            {dimension: ['2', 'NK', 'STT'], metric: ['182']},
            {dimension: ['2', 'AS', 'TPA'], metric: ['182']},
            {dimension: ['1', '9E', 'SGF'], metric: ['182']},
            {dimension: ['2', 'UA', 'BQN'], metric: ['182']},
            {dimension: ['2', 'DL', 'CID'], metric: ['182']},
            {dimension: ['2', 'B6', 'BUR'], metric: ['182']},
            {dimension: ['1', 'F9', 'PIT'], metric: ['182']},
            {dimension: ['2', 'AS', 'ABQ'], metric: ['182']},
            {dimension: ['2', 'DL', 'LFT'], metric: ['182']},
            {dimension: ['2', 'YV', 'RAP'], metric: ['182']},
            {dimension: ['2', 'HA', 'JFK'], metric: ['182']},
            {dimension: ['4', 'AS', 'SCC'], metric: ['182']},
            {dimension: ['2', 'OH', 'SHV'], metric: ['182']},
            {dimension: ['3', 'DL', 'MHT'], metric: ['182']},
            {dimension: ['3', 'MQ', 'SPS'], metric: ['182']},
            {dimension: ['2', 'DL', 'MHT'], metric: ['182']},
            {dimension: ['2', 'DL', 'AVP'], metric: ['182']},
            {dimension: ['2', 'B6', 'DAB'], metric: ['182']},
            {dimension: ['2', 'OH', 'TOL'], metric: ['182']},
            {dimension: ['2', 'F9', 'ONT'], metric: ['182']},
            {dimension: ['2', 'DL', 'FAY'], metric: ['182']},
            {dimension: ['2', 'OH', 'FWA'], metric: ['182']},
            {dimension: ['2', 'OO', 'ROW'], metric: ['182']},
            {dimension: ['4', 'OO', 'COD'], metric: ['182']},
            {dimension: ['2', 'OH', 'GPT'], metric: ['182']},
            {dimension: ['2', 'OH', 'PIA'], metric: ['182']},
            {dimension: ['2', 'OH', 'EVV'], metric: ['182']},
            {dimension: ['2', 'MQ', 'ALB'], metric: ['182']},
            {dimension: ['3', 'EV', 'FSD'], metric: ['181']},
            {dimension: ['2', 'AS', 'OMA'], metric: ['181']},
            {dimension: ['3', 'MQ', 'GJT'], metric: ['181']},
            {dimension: ['1', 'OH', 'CID'], metric: ['181']},
            {dimension: ['4', 'OO', 'BJI'], metric: ['181']},
            {dimension: ['1', 'AA', 'VPS'], metric: ['181']},
            {dimension: ['2', 'AA', 'ROC'], metric: ['181']},
            {dimension: ['1', 'MQ', 'BPT'], metric: ['181']},
            {dimension: ['1', 'AS', 'PHL'], metric: ['181']},
            {dimension: ['4', 'VX', 'PHL'], metric: ['181']},
            {dimension: ['2', 'DL', 'MOB'], metric: ['181']},
            {dimension: ['2', 'DL', 'ABE'], metric: ['181']},
            {dimension: ['2', 'UA', 'TUL'], metric: ['181']},
            {dimension: ['3', 'YV', 'FSD'], metric: ['181']},
            {dimension: ['1', 'MQ', 'HPN'], metric: ['180']},
            {dimension: ['1', 'OO', 'MMH'], metric: ['180']},
            {dimension: ['1', 'OO', 'BLI'], metric: ['180']},
            {dimension: ['1', 'OH', 'ABE'], metric: ['180']},
            {dimension: ['1', 'DL', 'MHT'], metric: ['180']},
            {dimension: ['4', 'AS', 'WRG'], metric: ['180']},
            {dimension: ['4', 'OO', 'RHI'], metric: ['180']},
            {dimension: ['4', 'DL', 'RNO'], metric: ['180']},
            {dimension: ['1', 'AS', 'SAT'], metric: ['180']},
            {dimension: ['3', 'YV', 'BTV'], metric: ['180']},
            {dimension: ['1', 'B6', 'STX'], metric: ['180']},
            {dimension: ['4', 'AS', 'YAK'], metric: ['180']},
            {dimension: ['1', 'B6', 'BUR'], metric: ['180']},
            {dimension: ['4', 'AS', 'PSG'], metric: ['180']},
            {dimension: ['1', 'HA', 'SMF'], metric: ['180']},
            {dimension: ['1', 'YV', 'CHA'], metric: ['180']},
            {dimension: ['1', 'OO', 'PIB'], metric: ['180']},
            {dimension: ['1', 'AS', 'RDU'], metric: ['180']},
            {dimension: ['1', 'MQ', 'GCK'], metric: ['180']},
            {dimension: ['4', 'AA', 'PWM'], metric: ['180']},
            {dimension: ['1', 'AS', 'TPA'], metric: ['180']},
            {dimension: ['1', 'UA', 'GUM'], metric: ['180']},
            {dimension: ['1', 'HA', 'PHX'], metric: ['180']},
            {dimension: ['1', 'AS', 'MSY'], metric: ['180']},
            {dimension: ['1', 'AS', 'BNA'], metric: ['180']},
            {dimension: ['3', 'OH', 'ALB'], metric: ['180']},
            {dimension: ['1', 'HA', 'SAN'], metric: ['180']},
            {dimension: ['2', 'OO', 'BWI'], metric: ['180']},
            {dimension: ['1', 'OH', 'SHV'], metric: ['180']},
            {dimension: ['1', 'G4', 'OAK'], metric: ['180']},
            {dimension: ['2', 'YV', 'SLC'], metric: ['180']},
            {dimension: ['1', 'OH', 'TOL'], metric: ['180']},
            {dimension: ['2', '9E', 'SHV'], metric: ['180']},
            {dimension: ['1', 'EV', 'GCK'], metric: ['180']},
            {dimension: ['1', 'DL', 'ROA'], metric: ['180']},
            {dimension: ['1', 'OH', 'MSN'], metric: ['180']},
            {dimension: ['1', 'OH', 'FWA'], metric: ['180']},
            {dimension: ['1', 'B6', 'DAB'], metric: ['180']},
            {dimension: ['4', 'AS', 'CDV'], metric: ['180']},
            {dimension: ['4', 'AA', 'VPS'], metric: ['180']},
            {dimension: ['1', 'OH', 'MGM'], metric: ['180']},
            {dimension: ['1', 'OH', 'OMA'], metric: ['180']},
            {dimension: ['1', 'G4', 'PIA'], metric: ['180']},
            {dimension: ['1', 'MQ', 'TOL'], metric: ['180']},
            {dimension: ['1', 'MQ', 'TUL'], metric: ['180']},
            {dimension: ['2', 'OO', 'BTV'], metric: ['179']},
            {dimension: ['1', 'B6', 'PSP'], metric: ['179']},
            {dimension: ['1', 'AS', 'OMA'], metric: ['179']},
            {dimension: ['1', 'DL', 'LFT'], metric: ['179']},
            {dimension: ['2', 'F9', 'MSN'], metric: ['179']},
            {dimension: ['1', 'YX', 'RIC'], metric: ['179']},
            {dimension: ['1', 'OH', 'PIA'], metric: ['179']},
            {dimension: ['1', 'OH', 'EVV'], metric: ['179']},
            {dimension: ['1', 'OH', 'GPT'], metric: ['179']},
            {dimension: ['1', 'F9', 'ONT'], metric: ['179']},
            {dimension: ['1', 'VX', 'PHL'], metric: ['179']},
            {dimension: ['4', 'UA', 'BIL'], metric: ['179']},
            {dimension: ['2', 'DL', 'CHO'], metric: ['179']},
            {dimension: ['4', 'UA', 'RIC'], metric: ['179']},
            {dimension: ['2', 'G4', 'FSD'], metric: ['179']},
            {dimension: ['1', 'MQ', 'LAN'], metric: ['179']},
            {dimension: ['1', 'MQ', 'ALB'], metric: ['179']},
            {dimension: ['4', 'UA', 'ONT'], metric: ['178']},
            {dimension: ['3', 'MQ', 'DTW'], metric: ['178']},
            {dimension: ['1', 'DL', 'ONT'], metric: ['178']},
            {dimension: ['4', 'AS', 'OTZ'], metric: ['178']},
            {dimension: ['3', 'YV', 'BNA'], metric: ['178']},
            {dimension: ['3', '9E', 'GTR'], metric: ['178']},
            {dimension: ['1', 'YX', 'GRR'], metric: ['178']},
            {dimension: ['3', 'DL', 'ROA'], metric: ['178']},
            {dimension: ['3', 'YX', 'MHT'], metric: ['178']},
            {dimension: ['2', 'G4', 'RFD'], metric: ['178']},
            {dimension: ['1', 'MQ', 'LCH'], metric: ['178']},
            {dimension: ['3', 'MQ', 'SUX'], metric: ['178']},
            {dimension: ['2', 'F9', 'DSM'], metric: ['177']},
            {dimension: ['3', 'OO', 'SAV'], metric: ['177']},
            {dimension: ['3', 'NK', 'IAG'], metric: ['177']},
            {dimension: ['2', 'DL', 'TRI'], metric: ['177']},
            {dimension: ['1', 'UA', 'SAV'], metric: ['177']},
            {dimension: ['3', 'YV', 'PNS'], metric: ['177']},
            {dimension: ['1', 'DL', 'PHF'], metric: ['177']},
            {dimension: ['4', 'AA', 'CVG'], metric: ['177']},
            {dimension: ['2', 'B6', 'MSP'], metric: ['177']},
            {dimension: ['3', 'G4', 'SDF'], metric: ['177']},
            {dimension: ['2', 'AA', 'SBA'], metric: ['177']},
            {dimension: ['4', 'AS', 'OME'], metric: ['177']},
            {dimension: ['1', 'OO', 'EGE'], metric: ['177']},
            {dimension: ['4', 'OO', 'LWS'], metric: ['176']},
            {dimension: ['2', 'YV', 'ORF'], metric: ['176']},
            {dimension: ['2', '9E', 'CAE'], metric: ['176']},
            {dimension: ['3', 'YV', 'LGB'], metric: ['176']},
            {dimension: ['2', 'DL', 'CRW'], metric: ['176']},
            {dimension: ['1', 'DL', 'CHO'], metric: ['176']},
            {dimension: ['1', 'AA', 'ICT'], metric: ['176']},
            {dimension: ['2', 'YX', 'MSN'], metric: ['176']},
            {dimension: ['1', 'DL', 'EGE'], metric: ['176']},
            {dimension: ['3', 'OH', 'ABE'], metric: ['176']},
            {dimension: ['3', 'MQ', 'LCH'], metric: ['176']},
            {dimension: ['3', 'YV', 'PVD'], metric: ['176']},
            {dimension: ['2', 'AS', 'BLI'], metric: ['176']},
            {dimension: ['3', 'OO', 'FSM'], metric: ['176']},
            {dimension: ['3', 'MQ', 'MGM'], metric: ['176']},
            {dimension: ['3', 'MQ', 'DBQ'], metric: ['175']},
            {dimension: ['2', 'EV', 'CHO'], metric: ['175']},
            {dimension: ['1', 'HA', 'JFK'], metric: ['175']},
            {dimension: ['3', 'MQ', 'AZO'], metric: ['175']},
            {dimension: ['3', 'YX', 'MKE'], metric: ['174']},
            {dimension: ['1', 'YV', 'MLI'], metric: ['174']},
            {dimension: ['2', '9E', 'OAJ'], metric: ['174']},
            {dimension: ['3', 'YX', 'ELP'], metric: ['174']},
            {dimension: ['1', 'YV', 'PIA'], metric: ['174']},
            {dimension: ['1', 'AA', 'SAV'], metric: ['174']},
            {dimension: ['4', 'F9', 'SNA'], metric: ['174']},
            {dimension: ['3', 'YX', 'HHH'], metric: ['174']},
            {dimension: ['2', 'YV', 'GPT'], metric: ['174']},
            {dimension: ['1', 'AA', 'GSP'], metric: ['173']},
            {dimension: ['4', 'AA', 'STT'], metric: ['173']},
            {dimension: ['1', '9E', 'DAY'], metric: ['173']},
            {dimension: ['2', 'B6', 'ABQ'], metric: ['173']},
            {dimension: ['1', 'DL', 'ILM'], metric: ['173']},
            {dimension: ['3', 'AA', 'DAY'], metric: ['173']},
            {dimension: ['1', 'G4', 'MEM'], metric: ['173']},
            {dimension: ['1', 'MQ', 'CAE'], metric: ['173']},
            {dimension: ['4', 'EV', 'PVD'], metric: ['173']},
            {dimension: ['1', 'YV', 'GPT'], metric: ['173']},
            {dimension: ['3', 'MQ', 'MLI'], metric: ['172']},
            {dimension: ['4', 'DL', 'KOA'], metric: ['172']},
            {dimension: ['2', 'AA', 'DAY'], metric: ['172']},
            {dimension: ['3', '9E', 'AVP'], metric: ['172']},
            {dimension: ['3', 'G4', 'MEM'], metric: ['172']},
            {dimension: ['2', 'MQ', 'SPI'], metric: ['172']},
            {dimension: ['2', 'EV', 'SJT'], metric: ['171']},
            {dimension: ['1', 'DL', 'CRW'], metric: ['171']},
            {dimension: ['1', 'YX', 'TUL'], metric: ['171']},
            {dimension: ['4', 'OO', 'IMT'], metric: ['171']},
            {dimension: ['2', '9E', 'BDL'], metric: ['171']},
            {dimension: ['2', 'YX', 'ILM'], metric: ['171']},
            {dimension: ['1', 'DL', 'BIS'], metric: ['171']},
            {dimension: ['3', 'AA', 'ROC'], metric: ['171']},
            {dimension: ['2', 'DL', 'COS'], metric: ['171']},
            {dimension: ['4', 'OO', 'MQT'], metric: ['171']},
            {dimension: ['1', 'YX', 'LEX'], metric: ['171']},
            {dimension: ['1', 'EV', 'FWA'], metric: ['171']},
            {dimension: ['3', 'OH', 'HVN'], metric: ['171']},
            {dimension: ['2', 'OO', 'SAV'], metric: ['171']},
            {dimension: ['2', 'UA', 'MDT'], metric: ['171']},
            {dimension: ['3', 'EV', 'CID'], metric: ['171']},
            {dimension: ['2', 'YX', 'PNS'], metric: ['170']},
            {dimension: ['3', 'EV', 'LNK'], metric: ['170']},
            {dimension: ['1', 'OO', 'BTR'], metric: ['170']},
            {dimension: ['2', 'YX', 'GSO'], metric: ['170']},
            {dimension: ['2', 'EV', 'EWN'], metric: ['170']},
            {dimension: ['1', 'MQ', 'ATL'], metric: ['170']},
            {dimension: ['4', 'OO', 'SWF'], metric: ['170']},
            {dimension: ['3', 'MQ', 'SDF'], metric: ['170']},
            {dimension: ['3', 'VX', 'AUS'], metric: ['170']},
            {dimension: ['1', 'EV', 'COS'], metric: ['170']},
            {dimension: ['1', 'UA', 'ALB'], metric: ['170']},
            {dimension: ['3', 'MQ', 'CWA'], metric: ['170']},
            {dimension: ['3', 'OO', 'ALO'], metric: ['170']},
            {dimension: ['2', 'MQ', 'ALO'], metric: ['169']},
            {dimension: ['4', 'OO', 'EAU'], metric: ['169']},
            {dimension: ['4', 'UA', 'SAV'], metric: ['169']},
            {dimension: ['4', 'OO', 'PAH'], metric: ['169']},
            {dimension: ['2', 'EV', 'MEI'], metric: ['169']},
            {dimension: ['4', 'VX', 'AUS'], metric: ['169']},
            {dimension: ['2', 'VX', 'AUS'], metric: ['169']},
            {dimension: ['3', 'OH', 'BNA'], metric: ['169']},
            {dimension: ['3', 'OO', 'SHD'], metric: ['169']},
            {dimension: ['2', 'YV', 'BMI'], metric: ['169']},
            {dimension: ['4', 'OO', 'CIU'], metric: ['169']},
            {dimension: ['4', 'UA', 'BOI'], metric: ['169']},
            {dimension: ['2', 'OO', 'CKB'], metric: ['169']},
            {dimension: ['3', 'EV', 'COS'], metric: ['169']},
            {dimension: ['2', 'EV', 'ERI'], metric: ['169']},
            {dimension: ['2', 'MQ', 'LAN'], metric: ['169']},
            {dimension: ['2', 'MQ', 'SHV'], metric: ['168']},
            {dimension: ['1', 'AA', 'ROC'], metric: ['168']},
            {dimension: ['3', 'MQ', 'BMI'], metric: ['168']},
            {dimension: ['4', 'OO', 'RKS'], metric: ['168']},
            {dimension: ['2', '9E', 'CHO'], metric: ['168']},
            {dimension: ['1', 'YV', 'MGM'], metric: ['168']},
            {dimension: ['4', 'OO', 'BTM'], metric: ['168']},
            {dimension: ['2', 'UA', 'FSD'], metric: ['168']},
            {dimension: ['2', 'EV', 'FSM'], metric: ['168']},
            {dimension: ['3', 'YX', 'CLE'], metric: ['168']},
            {dimension: ['3', 'UA', 'MYR'], metric: ['168']},
            {dimension: ['1', '9E', 'EWN'], metric: ['168']},
            {dimension: ['3', 'G4', 'CLE'], metric: ['168']},
            {dimension: ['1', 'MQ', 'DCA'], metric: ['168']},
            {dimension: ['1', 'YV', 'RAP'], metric: ['168']},
            {dimension: ['3', 'YV', 'TUL'], metric: ['168']},
            {dimension: ['2', 'YX', 'BHM'], metric: ['168']},
            {dimension: ['4', 'OO', 'MKG'], metric: ['168']},
            {dimension: ['1', 'MQ', 'EVV'], metric: ['168']},
            {dimension: ['1', 'MQ', 'ATW'], metric: ['168']},
            {dimension: ['1', 'MQ', 'ALO'], metric: ['167']},
            {dimension: ['4', 'UA', 'ROC'], metric: ['167']},
            {dimension: ['1', 'MQ', 'ILM'], metric: ['167']},
            {dimension: ['1', 'MQ', 'SWO'], metric: ['167']},
            {dimension: ['1', 'OH', 'JAX'], metric: ['167']},
            {dimension: ['1', 'MQ', 'GGG'], metric: ['167']},
            {dimension: ['1', 'OO', 'CKB'], metric: ['167']},
            {dimension: ['3', 'OO', 'GTR'], metric: ['167']},
            {dimension: ['1', 'EV', 'ERI'], metric: ['167']},
            {dimension: ['1', 'MQ', 'SYR'], metric: ['167']},
            {dimension: ['3', 'EV', 'ERI'], metric: ['167']},
            {dimension: ['2', 'F9', 'CHS'], metric: ['167']},
            {dimension: ['3', 'AA', 'BTV'], metric: ['166']},
            {dimension: ['1', 'EV', 'CHO'], metric: ['166']},
            {dimension: ['4', 'DL', 'XNA'], metric: ['166']},
            {dimension: ['1', 'EV', 'EWN'], metric: ['166']},
            {dimension: ['1', 'F9', 'PGD'], metric: ['166']},
            {dimension: ['4', 'AS', 'MSP'], metric: ['166']},
            {dimension: ['4', 'EV', 'HOB'], metric: ['166']},
            {dimension: ['2', 'EV', 'BGR'], metric: ['166']},
            {dimension: ['1', 'MQ', 'PVD'], metric: ['166']},
            {dimension: ['1', 'MQ', 'LSE'], metric: ['166']},
            {dimension: ['2', '9E', 'FNT'], metric: ['166']},
            {dimension: ['4', 'OO', 'EKO'], metric: ['165']},
            {dimension: ['4', 'EV', 'TRI'], metric: ['164']},
            {dimension: ['1', '9E', 'TLH'], metric: ['164']},
            {dimension: ['1', '9E', 'CRW'], metric: ['164']},
            {dimension: ['2', 'G4', 'CID'], metric: ['164']},
            {dimension: ['2', 'OO', 'ALO'], metric: ['164']},
            {dimension: ['3', 'UA', 'STT'], metric: ['164']},
            {dimension: ['2', 'OO', 'OTH'], metric: ['164']},
            {dimension: ['2', 'OO', 'MHK'], metric: ['164']},
            {dimension: ['2', 'G4', 'SBN'], metric: ['163']},
            {dimension: ['1', 'DL', 'CID'], metric: ['163']},
            {dimension: ['2', 'DL', 'BTR'], metric: ['163']},
            {dimension: ['4', 'DL', 'BIS'], metric: ['163']},
            {dimension: ['1', 'YV', 'EVV'], metric: ['163']},
            {dimension: ['4', 'AA', 'SYR'], metric: ['163']},
            {dimension: ['1', 'G4', 'PBG'], metric: ['163']},
            {dimension: ['4', 'OO', 'GSP'], metric: ['163']},
            {dimension: ['3', 'OO', 'SAF'], metric: ['163']},
            {dimension: ['1', 'AA', 'CVG'], metric: ['163']},
            {dimension: ['3', 'DL', 'TRI'], metric: ['162']},
            {dimension: ['4', 'OO', 'CRW'], metric: ['162']},
            {dimension: ['4', 'F9', 'ONT'], metric: ['162']},
            {dimension: ['2', 'UA', 'ITO'], metric: ['162']},
            {dimension: ['1', 'DL', 'AVP'], metric: ['162']},
            {dimension: ['1', 'YV', 'FWA'], metric: ['162']},
            {dimension: ['2', 'UA', 'AVL'], metric: ['162']},
            {dimension: ['3', 'YV', 'DCA'], metric: ['162']},
            {dimension: ['3', 'YV', 'FSM'], metric: ['162']},
            {dimension: ['4', 'F9', 'PBI'], metric: ['162']},
            {dimension: ['1', 'G4', 'FAR'], metric: ['162']},
            {dimension: ['4', 'EV', 'EVV'], metric: ['161']},
            {dimension: ['3', 'OO', 'SLN'], metric: ['161']},
            {dimension: ['1', 'YV', 'VPS'], metric: ['161']},
            {dimension: ['4', 'EV', 'MLI'], metric: ['161']},
            {dimension: ['4', 'AS', 'ATL'], metric: ['161']},
            {dimension: ['3', 'F9', 'FSD'], metric: ['160']},
            {dimension: ['2', 'F9', 'TUL'], metric: ['160']},
            {dimension: ['3', 'MQ', 'GGG'], metric: ['160']},
            {dimension: ['3', 'YV', 'IND'], metric: ['160']},
            {dimension: ['1', 'YV', 'CMH'], metric: ['160']},
            {dimension: ['4', 'B6', 'DFW'], metric: ['160']},
            {dimension: ['4', 'AS', 'ADQ'], metric: ['159']},
            {dimension: ['3', 'DL', 'RAP'], metric: ['159']},
            {dimension: ['3', 'F9', 'MSN'], metric: ['159']},
            {dimension: ['3', 'OO', 'OAK'], metric: ['159']},
            {dimension: ['3', '9E', 'GNV'], metric: ['159']},
            {dimension: ['2', 'UA', 'PWM'], metric: ['159']},
            {dimension: ['4', 'NK', 'PBI'], metric: ['159']},
            {dimension: ['3', 'MQ', 'BPT'], metric: ['159']},
            {dimension: ['1', 'YX', 'DSM'], metric: ['159']},
            {dimension: ['3', 'OO', 'UIN'], metric: ['159']},
            {dimension: ['3', 'OO', 'PUB'], metric: ['158']},
            {dimension: ['2', 'F9', 'ABQ'], metric: ['158']},
            {dimension: ['3', 'MQ', 'COU'], metric: ['158']},
            {dimension: ['1', 'DL', 'EVV'], metric: ['158']},
            {dimension: ['2', 'DL', 'PHF'], metric: ['158']},
            {dimension: ['3', 'YX', 'HSV'], metric: ['158']},
            {dimension: ['4', 'EV', 'AVP'], metric: ['158']},
            {dimension: ['3', 'EV', 'OAJ'], metric: ['158']},
            {dimension: ['3', 'OO', 'JAX'], metric: ['158']},
            {dimension: ['4', 'NK', 'PDX'], metric: ['158']},
            {dimension: ['3', 'DL', 'ABE'], metric: ['157']},
            {dimension: ['4', 'OO', 'HYS'], metric: ['157']},
            {dimension: ['4', 'OO', 'MEM'], metric: ['157']},
            {dimension: ['3', '9E', 'MGM'], metric: ['157']},
            {dimension: ['3', 'B6', 'SRQ'], metric: ['157']},
            {dimension: ['4', 'OO', 'ORF'], metric: ['157']},
            {dimension: ['2', 'OO', 'BFF'], metric: ['157']},
            {dimension: ['2', 'YX', 'HSV'], metric: ['157']},
            {dimension: ['2', 'F9', 'PBI'], metric: ['157']},
            {dimension: ['1', 'G4', 'SCK'], metric: ['157']},
            {dimension: ['2', 'MQ', 'AMA'], metric: ['157']},
            {dimension: ['2', 'OO', 'LBF'], metric: ['157']},
            {dimension: ['3', 'OO', 'OAJ'], metric: ['157']},
            {dimension: ['3', 'YV', 'COS'], metric: ['157']},
            {dimension: ['2', 'UA', 'TYS'], metric: ['157']},
            {dimension: ['1', 'OO', 'GNV'], metric: ['157']},
            {dimension: ['2', 'OO', 'CGI'], metric: ['156']},
            {dimension: ['4', 'OO', 'INL'], metric: ['156']},
            {dimension: ['1', 'G4', 'FWA'], metric: ['156']},
            {dimension: ['3', '9E', 'BDL'], metric: ['156']},
            {dimension: ['4', 'OO', 'DVL'], metric: ['156']},
            {dimension: ['2', 'MQ', 'ATL'], metric: ['156']},
            {dimension: ['2', 'OO', 'LBL'], metric: ['156']},
            {dimension: ['3', 'OO', 'PVD'], metric: ['156']},
            {dimension: ['2', '9E', 'MOB'], metric: ['156']},
            {dimension: ['4', 'OO', 'ESC'], metric: ['156']},
            {dimension: ['1', 'G4', 'SGF'], metric: ['156']},
            {dimension: ['4', 'OO', 'CDC'], metric: ['155']},
            {dimension: ['2', 'NK', 'BQN'], metric: ['155']},
            {dimension: ['2', 'MQ', 'GNV'], metric: ['155']},
            {dimension: ['4', 'EV', 'CRP'], metric: ['155']},
            {dimension: ['2', 'OO', 'BLI'], metric: ['155']},
            {dimension: ['3', 'EV', 'ATW'], metric: ['155']},
            {dimension: ['4', 'AA', 'MDT'], metric: ['155']},
            {dimension: ['3', 'DL', 'FAY'], metric: ['155']},
            {dimension: ['1', 'MQ', 'SPI'], metric: ['155']},
            {dimension: ['4', 'OO', 'APN'], metric: ['155']},
            {dimension: ['4', 'EV', 'PNS'], metric: ['155']},
            {dimension: ['1', 'EV', 'SCE'], metric: ['155']},
            {dimension: ['1', 'EV', 'PIB'], metric: ['155']},
            {dimension: ['4', 'OO', 'LAR'], metric: ['155']},
            {dimension: ['3', 'DL', 'MOB'], metric: ['154']},
            {dimension: ['3', 'DL', 'AVP'], metric: ['154']},
            {dimension: ['3', 'DL', 'COS'], metric: ['154']},
            {dimension: ['3', 'OO', 'ROW'], metric: ['154']},
            {dimension: ['3', 'DL', 'PSC'], metric: ['154']},
            {dimension: ['3', 'G4', 'GRR'], metric: ['154']},
            {dimension: ['3', 'B6', 'STX'], metric: ['154']},
            {dimension: ['3', 'AA', 'EGE'], metric: ['154']},
            {dimension: ['4', 'OO', 'HSV'], metric: ['154']},
            {dimension: ['4', 'OO', 'HIB'], metric: ['154']},
            {dimension: ['3', 'HA', 'SMF'], metric: ['154']},
            {dimension: ['3', 'HA', 'PHX'], metric: ['154']},
            {dimension: ['1', 'MQ', 'GNV'], metric: ['154']},
            {dimension: ['4', 'OO', 'BRD'], metric: ['154']},
            {dimension: ['3', 'AS', 'OMA'], metric: ['154']},
            {dimension: ['3', 'DL', 'EVV'], metric: ['154']},
            {dimension: ['3', 'AS', 'SAT'], metric: ['154']},
            {dimension: ['3', 'AS', 'TPA'], metric: ['154']},
            {dimension: ['3', 'AS', 'TUS'], metric: ['154']},
            {dimension: ['3', 'B6', 'DAB'], metric: ['154']},
            {dimension: ['3', 'NK', 'STT'], metric: ['154']},
            {dimension: ['3', 'HA', 'JFK'], metric: ['154']},
            {dimension: ['3', 'B6', 'BUR'], metric: ['154']},
            {dimension: ['1', 'MQ', 'GRI'], metric: ['154']},
            {dimension: ['4', 'UA', 'MEM'], metric: ['154']},
            {dimension: ['3', 'UA', 'BQN'], metric: ['154']},
            {dimension: ['3', 'DL', 'CRW'], metric: ['154']},
            {dimension: ['2', 'AA', 'ANC'], metric: ['153']},
            {dimension: ['4', 'EV', 'SJT'], metric: ['153']},
            {dimension: ['1', 'OO', 'CGI'], metric: ['153']},
            {dimension: ['3', 'YX', 'SAV'], metric: ['153']},
            {dimension: ['3', 'AS', 'ABQ'], metric: ['153']},
            {dimension: ['4', 'UA', 'MDT'], metric: ['152']},
            {dimension: ['3', 'EV', 'DSM'], metric: ['152']},
            {dimension: ['3', 'DL', 'CID'], metric: ['152']},
            {dimension: ['2', 'EV', 'HRL'], metric: ['152']},
            {dimension: ['2', 'F9', 'OKC'], metric: ['152']},
            {dimension: ['3', 'NK', 'PHX'], metric: ['152']},
            {dimension: ['2', 'VX', 'HNL'], metric: ['152']},
            {dimension: ['3', 'DL', 'LFT'], metric: ['152']},
            {dimension: ['2', 'G4', 'EWR'], metric: ['152']},
            {dimension: ['3', 'DL', 'ILM'], metric: ['152']},
            {dimension: ['2', 'MQ', 'JLN'], metric: ['151']},
            {dimension: ['2', '9E', 'TVC'], metric: ['151']},
            {dimension: ['1', 'YX', 'PBI'], metric: ['151']},
            {dimension: ['4', 'EV', 'LAW'], metric: ['151']},
            {dimension: ['4', 'B6', 'RNO'], metric: ['151']},
            {dimension: ['1', 'MQ', 'DAY'], metric: ['150']},
            {dimension: ['1', '9E', 'MSN'], metric: ['150']},
            {dimension: ['3', 'OO', 'LWB'], metric: ['150']},
            {dimension: ['2', '9E', 'MSY'], metric: ['150']},
            {dimension: ['3', 'EV', 'CSG'], metric: ['150']},
            {dimension: ['3', 'B6', 'ABQ'], metric: ['150']},
            {dimension: ['2', 'G4', 'FWA'], metric: ['150']},
            {dimension: ['2', 'B6', 'ANC'], metric: ['150']},
            {dimension: ['2', '9E', 'BMI'], metric: ['150']},
            {dimension: ['3', 'MQ', 'SWO'], metric: ['149']},
            {dimension: ['2', 'OH', 'OKC'], metric: ['149']},
            {dimension: ['3', 'EV', 'FAY'], metric: ['149']},
            {dimension: ['2', 'OO', 'OAK'], metric: ['149']},
            {dimension: ['1', 'G4', 'IAG'], metric: ['148']},
            {dimension: ['4', 'UA', 'GRR'], metric: ['148']},
            {dimension: ['2', 'AA', 'MYR'], metric: ['148']},
            {dimension: ['4', 'UA', 'TUL'], metric: ['148']},
            {dimension: ['1', 'YX', 'BTR'], metric: ['148']},
            {dimension: ['2', 'G4', 'MDT'], metric: ['148']},
            {dimension: ['4', 'AS', 'JFK'], metric: ['148']},
            {dimension: ['3', 'OO', 'CHS'], metric: ['148']},
            {dimension: ['1', 'UA', 'ITO'], metric: ['148']},
            {dimension: ['4', 'OO', 'OAK'], metric: ['147']},
            {dimension: ['2', 'EV', 'GTR'], metric: ['147']},
            {dimension: ['3', 'DL', 'ONT'], metric: ['147']},
            {dimension: ['2', 'EV', 'MCI'], metric: ['146']},
            {dimension: ['1', 'MQ', 'MSY'], metric: ['146']},
            {dimension: ['3', 'YV', 'STL'], metric: ['146']},
            {dimension: ['1', 'YX', 'LFT'], metric: ['146']},
            {dimension: ['3', 'EV', 'PVD'], metric: ['146']},
            {dimension: ['4', 'OO', 'CHS'], metric: ['145']},
            {dimension: ['3', 'OH', 'MEM'], metric: ['145']},
            {dimension: ['4', 'OO', 'CRP'], metric: ['145']},
            {dimension: ['4', 'AS', 'MCI'], metric: ['145']},
            {dimension: ['4', 'EV', 'BGR'], metric: ['145']},
            {dimension: ['1', 'EV', 'TVC'], metric: ['145']},
            {dimension: ['2', 'G4', 'FNT'], metric: ['145']},
            {dimension: ['1', '9E', 'XNA'], metric: ['144']},
            {dimension: ['3', 'VX', 'LGA'], metric: ['144']},
            {dimension: ['3', 'F9', 'ONT'], metric: ['144']},
            {dimension: ['4', 'EV', 'CVG'], metric: ['144']},
            {dimension: ['4', 'DL', 'PWM'], metric: ['144']},
            {dimension: ['3', 'EV', 'VLD'], metric: ['144']},
            {dimension: ['3', 'UA', 'AVL'], metric: ['144']},
            {dimension: ['3', 'AA', 'SBA'], metric: ['143']},
            {dimension: ['2', 'YV', 'MTJ'], metric: ['143']},
            {dimension: ['1', 'DL', 'COS'], metric: ['143']},
            {dimension: ['1', 'YX', 'OKC'], metric: ['143']},
            {dimension: ['2', 'G4', 'RDU'], metric: ['143']},
            {dimension: ['1', 'G4', 'BIS'], metric: ['143']},
            {dimension: ['3', 'F9', 'CHS'], metric: ['143']},
            {dimension: ['3', 'OO', 'AGS'], metric: ['142']},
            {dimension: ['3', 'G4', 'EWR'], metric: ['142']},
            {dimension: ['2', 'YX', 'ICT'], metric: ['142']},
            {dimension: ['1', '9E', 'SAT'], metric: ['142']},
            {dimension: ['3', 'YV', 'RNO'], metric: ['142']},
            {dimension: ['1', 'MQ', 'FSM'], metric: ['141']},
            {dimension: ['3', 'DL', 'CHO'], metric: ['141']},
            {dimension: ['3', 'F9', 'BUF'], metric: ['141']},
            {dimension: ['4', 'OO', 'BDL'], metric: ['141']},
            {dimension: ['1', 'G4', 'JAX'], metric: ['140']},
            {dimension: ['2', 'YX', 'SRQ'], metric: ['140']},
            {dimension: ['3', 'B6', 'HYA'], metric: ['140']},
            {dimension: ['3', 'G4', 'SCK'], metric: ['140']},
            {dimension: ['4', 'DL', 'AVL'], metric: ['140']},
            {dimension: ['2', '9E', 'GRB'], metric: ['139']},
            {dimension: ['4', 'OO', 'ALO'], metric: ['139']},
            {dimension: ['2', 'G4', 'HTS'], metric: ['139']},
            {dimension: ['2', 'EV', 'TRI'], metric: ['139']},
            {dimension: ['2', 'YX', 'ABQ'], metric: ['139']},
            {dimension: ['3', 'G4', 'JAX'], metric: ['138']},
            {dimension: ['3', 'G4', 'DSM'], metric: ['138']},
            {dimension: ['1', 'NK', 'STT'], metric: ['138']},
            {dimension: ['4', 'B6', 'PSE'], metric: ['138']},
            {dimension: ['2', 'YX', 'MYR'], metric: ['138']},
            {dimension: ['3', 'UA', 'ITO'], metric: ['138']},
            {dimension: ['3', 'UA', 'TYS'], metric: ['137']},
            {dimension: ['3', 'YV', 'MSY'], metric: ['137']},
            {dimension: ['2', 'YV', 'FSM'], metric: ['137']},
            {dimension: ['2', 'DL', 'GNV'], metric: ['137']},
            {dimension: ['3', 'YV', 'SHV'], metric: ['137']},
            {dimension: ['3', 'YX', 'ORF'], metric: ['136']},
            {dimension: ['2', '9E', 'EWN'], metric: ['136']},
            {dimension: ['1', 'F9', 'OKC'], metric: ['135']},
            {dimension: ['4', 'AS', 'IAH'], metric: ['135']},
            {dimension: ['2', 'DL', 'FCA'], metric: ['135']},
            {dimension: ['1', 'YV', 'AMA'], metric: ['135']},
            {dimension: ['1', 'G4', 'RDU'], metric: ['135']},
            {dimension: ['1', 'EV', 'MTJ'], metric: ['135']},
            {dimension: ['2', 'YX', 'RIC'], metric: ['135']},
            {dimension: ['1', '9E', 'MEM'], metric: ['134']},
            {dimension: ['1', 'G4', 'MLI'], metric: ['134']},
            {dimension: ['2', '9E', 'SAT'], metric: ['134']},
            {dimension: ['2', 'MQ', 'MLU'], metric: ['134']},
            {dimension: ['2', 'YV', 'HRL'], metric: ['133']},
            {dimension: ['2', 'MQ', 'FNT'], metric: ['133']},
            {dimension: ['1', 'AS', 'BOI'], metric: ['133']},
            {dimension: ['1', 'F9', 'SJC'], metric: ['133']},
            {dimension: ['3', 'G4', 'BNA'], metric: ['133']},
            {dimension: ['1', 'EV', 'ABQ'], metric: ['133']},
            {dimension: ['3', 'G4', 'PIA'], metric: ['132']},
            {dimension: ['3', 'MQ', 'GRI'], metric: ['132']},
            {dimension: ['3', 'UA', 'MSO'], metric: ['132']},
            {dimension: ['2', 'YX', 'LEX'], metric: ['132']},
            {dimension: ['4', 'F9', 'MEM'], metric: ['132']},
            {dimension: ['3', 'YX', 'ACK'], metric: ['132']},
            {dimension: ['1', 'OH', 'BUF'], metric: ['132']},
            {dimension: ['1', 'EV', 'ALB'], metric: ['132']},
            {dimension: ['1', 'YX', 'MSN'], metric: ['132']},
            {dimension: ['2', 'YX', 'LFT'], metric: ['131']},
            {dimension: ['1', '9E', 'GSP'], metric: ['131']},
            {dimension: ['4', 'DL', 'MSO'], metric: ['131']},
            {dimension: ['2', 'G4', 'EUG'], metric: ['131']},
            {dimension: ['3', '9E', 'TLH'], metric: ['131']},
            {dimension: ['1', 'YV', 'MSY'], metric: ['131']},
            {dimension: ['2', 'MQ', 'TOL'], metric: ['130']},
            {dimension: ['2', 'EV', 'HOU'], metric: ['130']},
            {dimension: ['3', 'MQ', 'GSP'], metric: ['130']},
            {dimension: ['1', 'B6', 'ABQ'], metric: ['130']},
            {dimension: ['3', 'YV', 'DSM'], metric: ['130']},
            {dimension: ['2', 'G4', 'MLI'], metric: ['130']},
            {dimension: ['3', '9E', 'BHM'], metric: ['130']},
            {dimension: ['4', 'OO', 'MOB'], metric: ['130']},
            {dimension: ['1', 'YX', 'HRL'], metric: ['130']},
            {dimension: ['2', 'YV', 'BTV'], metric: ['130']},
            {dimension: ['2', 'G4', 'PVU'], metric: ['130']},
            {dimension: ['1', 'EV', 'JAX'], metric: ['129']},
            {dimension: ['1', 'G4', 'OMA'], metric: ['129']},
            {dimension: ['4', 'UA', 'TUS'], metric: ['129']},
            {dimension: ['1', 'G4', 'MKE'], metric: ['129']},
            {dimension: ['4', 'UA', 'ANC'], metric: ['129']},
            {dimension: ['3', 'OH', 'OMA'], metric: ['129']},
            {dimension: ['1', 'YV', 'DCA'], metric: ['129']},
            {dimension: ['2', 'MQ', 'ROA'], metric: ['129']},
            {dimension: ['3', 'NK', 'PBG'], metric: ['129']},
            {dimension: ['1', 'G4', 'PVU'], metric: ['129']},
            {dimension: ['1', 'UA', 'TUL'], metric: ['128']},
            {dimension: ['4', 'OO', 'MAF'], metric: ['128']},
            {dimension: ['3', 'NK', 'BQN'], metric: ['128']},
            {dimension: ['2', 'EV', 'IAD'], metric: ['128']},
            {dimension: ['1', 'YX', 'IAD'], metric: ['128']},
            {dimension: ['4', 'F9', 'PDX'], metric: ['128']},
            {dimension: ['3', 'MQ', 'JAN'], metric: ['127']},
            {dimension: ['3', 'DL', 'BGR'], metric: ['127']},
            {dimension: ['2', 'MQ', 'EWR'], metric: ['127']},
            {dimension: ['3', 'EV', 'OKC'], metric: ['127']},
            {dimension: ['3', 'EV', 'FAR'], metric: ['127']},
            {dimension: ['2', 'UA', 'BTV'], metric: ['126']},
            {dimension: ['2', '9E', 'LEX'], metric: ['126']},
            {dimension: ['1', 'F9', 'GRR'], metric: ['126']},
            {dimension: ['2', 'MQ', 'SAT'], metric: ['126']},
            {dimension: ['3', 'OH', 'RDU'], metric: ['126']},
            {dimension: ['2', 'OH', 'FLO'], metric: ['125']},
            {dimension: ['2', 'OO', 'WYS'], metric: ['125']},
            {dimension: ['2', 'MQ', 'CAE'], metric: ['125']},
            {dimension: ['1', 'UA', 'BQN'], metric: ['125']},
            {dimension: ['2', 'G4', 'TUL'], metric: ['125']},
            {dimension: ['1', 'G4', 'SAV'], metric: ['125']},
            {dimension: ['3', '9E', 'CHS'], metric: ['125']},
            {dimension: ['4', 'EV', 'PHF'], metric: ['125']},
            {dimension: ['3', 'EV', 'FSM'], metric: ['125']},
            {dimension: ['3', 'EV', 'TRI'], metric: ['125']},
            {dimension: ['3', 'DL', 'JNU'], metric: ['124']},
            {dimension: ['1', 'G4', 'FNT'], metric: ['124']},
            {dimension: ['3', 'OH', 'OKC'], metric: ['124']},
            {dimension: ['3', 'OO', 'EWN'], metric: ['124']},
            {dimension: ['3', 'OH', 'SHV'], metric: ['124']},
            {dimension: ['2', 'MQ', 'LBB'], metric: ['124']},
            {dimension: ['3', 'OH', 'FWA'], metric: ['124']},
            {dimension: ['3', 'OH', 'GPT'], metric: ['124']},
            {dimension: ['4', 'DL', 'MOB'], metric: ['124']},
            {dimension: ['3', 'OH', 'CID'], metric: ['124']},
            {dimension: ['3', 'OH', 'PIA'], metric: ['124']},
            {dimension: ['1', 'OH', 'CMH'], metric: ['124']},
            {dimension: ['2', 'MQ', 'MSP'], metric: ['124']},
            {dimension: ['3', 'OO', 'KTN'], metric: ['124']},
            {dimension: ['3', 'NK', 'RIC'], metric: ['124']},
            {dimension: ['3', 'MQ', 'GCK'], metric: ['124']},
            {dimension: ['1', 'DL', 'FCA'], metric: ['124']},
            {dimension: ['3', 'YV', 'RAP'], metric: ['124']},
            {dimension: ['3', 'EV', 'FNT'], metric: ['124']},
            {dimension: ['3', 'OO', 'SIT'], metric: ['124']},
            {dimension: ['3', 'MQ', 'FNT'], metric: ['124']},
            {dimension: ['3', 'MQ', 'BTV'], metric: ['123']},
            {dimension: ['1', 'YX', 'ELP'], metric: ['123']},
            {dimension: ['2', 'EV', 'DHN'], metric: ['123']},
            {dimension: ['3', 'YV', 'COU'], metric: ['123']},
            {dimension: ['3', 'MQ', 'PVD'], metric: ['123']},
            {dimension: ['3', 'MQ', 'SPI'], metric: ['123']},
            {dimension: ['4', 'F9', 'SJC'], metric: ['123']},
            {dimension: ['2', '9E', 'ABE'], metric: ['123']},
            {dimension: ['3', 'AA', 'GRR'], metric: ['123']},
            {dimension: ['1', 'YV', 'ORF'], metric: ['123']},
            {dimension: ['3', 'MQ', 'ALB'], metric: ['123']},
            {dimension: ['2', 'G4', 'FAT'], metric: ['123']},
            {dimension: ['3', 'OH', 'TOL'], metric: ['123']},
            {dimension: ['3', 'OH', 'EVV'], metric: ['122']},
            {dimension: ['3', 'OH', 'HTS'], metric: ['122']},
            {dimension: ['3', 'OH', 'GRR'], metric: ['122']},
            {dimension: ['4', 'F9', 'SEA'], metric: ['122']},
            {dimension: ['3', 'YV', 'PIA'], metric: ['122']},
            {dimension: ['3', 'YV', 'MLI'], metric: ['122']},
            {dimension: ['3', 'AA', 'MHT'], metric: ['122']},
            {dimension: ['1', 'G4', 'MDT'], metric: ['121']},
            {dimension: ['3', 'EV', 'DHN'], metric: ['121']},
            {dimension: ['3', 'EV', 'ROW'], metric: ['121']},
            {dimension: ['2', 'EV', 'JLN'], metric: ['121']},
            {dimension: ['1', 'NK', 'BQN'], metric: ['121']},
            {dimension: ['2', 'G4', 'BWI'], metric: ['121']},
            {dimension: ['2', 'YV', 'CLE'], metric: ['121']},
            {dimension: ['3', 'UA', 'SYR'], metric: ['120']},
            {dimension: ['2', 'MQ', 'MQT'], metric: ['120']},
            {dimension: ['3', 'AA', 'PNS'], metric: ['120']},
            {dimension: ['2', 'YX', 'TUL'], metric: ['120']},
            {dimension: ['1', '9E', 'MBS'], metric: ['120']},
            {dimension: ['3', 'MQ', 'LFT'], metric: ['120']},
            {dimension: ['3', 'MQ', 'IAH'], metric: ['120']},
            {dimension: ['4', 'EV', 'GRB'], metric: ['120']},
            {dimension: ['1', '9E', 'BDL'], metric: ['119']},
            {dimension: ['2', 'UA', 'FCA'], metric: ['119']},
            {dimension: ['3', 'G4', 'SYR'], metric: ['119']},
            {dimension: ['3', 'F9', 'BIS'], metric: ['119']},
            {dimension: ['3', 'YV', 'BMI'], metric: ['119']},
            {dimension: ['3', 'OO', 'MTJ'], metric: ['118']},
            {dimension: ['2', 'EV', 'SCE'], metric: ['118']},
            {dimension: ['3', 'MQ', 'SAV'], metric: ['118']},
            {dimension: ['3', 'YV', 'ONT'], metric: ['118']},
            {dimension: ['4', 'DL', 'ROA'], metric: ['118']},
            {dimension: ['4', 'AS', 'STL'], metric: ['118']},
            {dimension: ['4', 'OO', 'PIT'], metric: ['118']},
            {dimension: ['1', 'OO', 'HSV'], metric: ['118']},
            {dimension: ['3', 'DL', 'GTF'], metric: ['117']},
            {dimension: ['3', 'UA', 'MDT'], metric: ['117']},
            {dimension: ['2', 'AS', 'CHS'], metric: ['117']},
            {dimension: ['3', 'MQ', 'AVP'], metric: ['116']},
            {dimension: ['1', 'OO', 'OTH'], metric: ['116']},
            {dimension: ['3', 'F9', 'MYR'], metric: ['116']},
            {dimension: ['2', 'YV', 'SHV'], metric: ['116']},
            {dimension: ['2', 'G4', 'PBG'], metric: ['116']},
            {dimension: ['3', 'OO', 'CKB'], metric: ['116']},
            {dimension: ['3', 'YV', 'MKE'], metric: ['116']},
            {dimension: ['3', 'MQ', 'LAW'], metric: ['116']},
            {dimension: ['4', 'OO', 'HDN'], metric: ['116']},
            {dimension: ['3', 'AA', 'CAE'], metric: ['116']},
            {dimension: ['1', '9E', 'MOB'], metric: ['116']},
            {dimension: ['3', 'EV', 'AVP'], metric: ['115']},
            {dimension: ['2', 'G4', 'MFE'], metric: ['115']},
            {dimension: ['2', 'AA', 'BZN'], metric: ['115']},
            {dimension: ['1', 'YV', 'ICT'], metric: ['115']},
            {dimension: ['1', 'MQ', 'MAF'], metric: ['115']},
            {dimension: ['3', 'YV', 'GPT'], metric: ['115']},
            {dimension: ['4', 'UA', 'MKE'], metric: ['115']},
            {dimension: ['3', 'MQ', 'TUL'], metric: ['115']},
            {dimension: ['2', 'YV', 'BDL'], metric: ['114']},
            {dimension: ['3', 'YV', 'PSP'], metric: ['114']},
            {dimension: ['4', 'OO', 'SAF'], metric: ['114']},
            {dimension: ['3', 'YV', 'SAT'], metric: ['114']},
            {dimension: ['4', 'UA', 'JAC'], metric: ['114']},
            {dimension: ['2', 'YV', 'COU'], metric: ['114']},
            {dimension: ['2', 'EV', 'ABQ'], metric: ['114']},
            {dimension: ['1', 'OO', 'CRW'], metric: ['114']},
            {dimension: ['1', 'AS', 'ABQ'], metric: ['114']},
            {dimension: ['3', 'MQ', 'PHL'], metric: ['114']},
            {dimension: ['2', '9E', 'AVP'], metric: ['114']},
            {dimension: ['4', 'UA', 'BUF'], metric: ['114']},
            {dimension: ['1', 'DL', 'SGF'], metric: ['114']},
            {dimension: ['3', 'MQ', 'ALO'], metric: ['114']},
            {dimension: ['1', 'G4', 'ATW'], metric: ['113']},
            {dimension: ['3', 'AS', 'DLG'], metric: ['113']},
            {dimension: ['4', 'EV', 'ELP'], metric: ['113']},
            {dimension: ['3', 'AS', 'GST'], metric: ['113']},
            {dimension: ['4', 'OO', 'CKB'], metric: ['113']},
            {dimension: ['3', 'YX', 'LEX'], metric: ['113']},
            {dimension: ['4', 'EV', 'TUS'], metric: ['113']},
            {dimension: ['3', '9E', 'SHV'], metric: ['113']},
            {dimension: ['2', 'EV', 'COS'], metric: ['113']},
            {dimension: ['1', 'YX', 'SAV'], metric: ['113']},
            {dimension: ['4', 'EV', 'CHO'], metric: ['112']},
            {dimension: ['4', 'EV', 'PIA'], metric: ['112']},
            {dimension: ['1', 'G4', 'EUG'], metric: ['112']},
            {dimension: ['3', 'YX', 'ICT'], metric: ['112']},
            {dimension: ['1', 'UA', 'TYS'], metric: ['112']},
            {dimension: ['4', 'AA', 'STX'], metric: ['112']},
            {dimension: ['1', 'G4', 'TOL'], metric: ['112']},
            {dimension: ['1', 'DL', 'BTV'], metric: ['112']},
            {dimension: ['2', '9E', 'BHM'], metric: ['112']},
            {dimension: ['3', 'F9', 'TUL'], metric: ['112']},
            {dimension: ['3', 'MQ', 'LAN'], metric: ['112']},
            {dimension: ['3', 'YX', 'GSP'], metric: ['111']},
            {dimension: ['2', 'YX', 'SAV'], metric: ['111']},
            {dimension: ['4', 'OO', 'CWA'], metric: ['111']},
            {dimension: ['3', 'MQ', 'MSO'], metric: ['111']},
            {dimension: ['4', 'DL', 'FAY'], metric: ['111']},
            {dimension: ['3', 'G4', 'CID'], metric: ['111']},
            {dimension: ['1', 'YV', 'BMI'], metric: ['111']},
            {dimension: ['3', 'MQ', 'ATL'], metric: ['111']},
            {dimension: ['1', 'OO', 'AEX'], metric: ['111']},
            {dimension: ['2', 'OO', 'EGE'], metric: ['111']},
            {dimension: ['1', 'UA', 'AVL'], metric: ['111']},
            {dimension: ['2', 'YV', 'MLI'], metric: ['111']},
            {dimension: ['1', 'UA', 'BUF'], metric: ['110']},
            {dimension: ['1', 'G4', 'FAT'], metric: ['110']},
            {dimension: ['2', 'OH', 'JAX'], metric: ['110']},
            {dimension: ['3', 'G4', 'HTS'], metric: ['110']},
            {dimension: ['2', 'F9', 'FSD'], metric: ['110']},
            {dimension: ['3', 'EV', 'EWN'], metric: ['109']},
            {dimension: ['2', 'YX', 'COS'], metric: ['109']},
            {dimension: ['2', 'OO', 'FAY'], metric: ['109']},
            {dimension: ['3', 'YX', 'SLC'], metric: ['109']},
            {dimension: ['3', 'OO', 'BQK'], metric: ['109']},
            {dimension: ['3', 'UA', 'FAT'], metric: ['108']},
            {dimension: ['3', 'OO', 'EGE'], metric: ['108']},
            {dimension: ['2', 'VX', 'MCO'], metric: ['108']},
            {dimension: ['1', 'UA', 'MYR'], metric: ['108']},
            {dimension: ['4', 'F9', 'DSM'], metric: ['108']},
            {dimension: ['3', 'YV', 'XNA'], metric: ['108']},
            {dimension: ['3', 'MQ', 'MQT'], metric: ['108']},
            {dimension: ['3', 'OO', 'CGI'], metric: ['107']},
            {dimension: ['3', 'OO', 'LBL'], metric: ['107']},
            {dimension: ['1', 'MQ', 'ROA'], metric: ['107']},
            {dimension: ['2', 'G4', 'FAR'], metric: ['107']},
            {dimension: ['1', '9E', 'FSM'], metric: ['107']},
            {dimension: ['3', 'MQ', 'GNV'], metric: ['107']},
            {dimension: ['1', 'YX', 'GSO'], metric: ['107']},
            {dimension: ['3', '9E', 'GPT'], metric: ['107']},
            {dimension: ['2', 'UA', 'SBA'], metric: ['107']},
            {dimension: ['4', 'F9', 'MCI'], metric: ['107']},
            {dimension: ['2', 'DL', 'PSC'], metric: ['107']},
            {dimension: ['3', '9E', 'FNT'], metric: ['106']},
            {dimension: ['4', 'DL', 'BTR'], metric: ['106']},
            {dimension: ['3', 'OO', 'LBF'], metric: ['106']},
            {dimension: ['4', 'UA', 'FSD'], metric: ['106']},
            {dimension: ['3', 'OO', 'VEL'], metric: ['106']},
            {dimension: ['3', 'OO', 'BFF'], metric: ['106']},
            {dimension: ['2', 'EV', 'PIB'], metric: ['106']},
            {dimension: ['3', 'OO', 'CLL'], metric: ['106']},
            {dimension: ['1', 'AS', 'CHS'], metric: ['106']},
            {dimension: ['4', 'F9', 'MSN'], metric: ['106']},
            {dimension: ['1', 'EV', 'SPI'], metric: ['106']},
            {dimension: ['2', 'G4', 'MCI'], metric: ['106']},
            {dimension: ['1', 'G4', 'MCI'], metric: ['106']},
            {dimension: ['2', 'EV', 'ROW'], metric: ['106']},
            {dimension: ['3', 'OO', 'CNY'], metric: ['106']},
            {dimension: ['3', '9E', 'CID'], metric: ['106']},
            {dimension: ['3', '9E', 'MEM'], metric: ['106']},
            {dimension: ['2', '9E', 'HSV'], metric: ['105']},
            {dimension: ['2', 'G4', 'SYR'], metric: ['105']},
            {dimension: ['2', 'YV', 'SAT'], metric: ['105']},
            {dimension: ['3', 'G4', 'FSD'], metric: ['105']},
            {dimension: ['1', 'YV', 'OMA'], metric: ['105']},
            {dimension: ['2', 'G4', 'ATW'], metric: ['105']},
            {dimension: ['3', 'YX', 'MVY'], metric: ['105']},
            {dimension: ['4', 'EV', 'FSD'], metric: ['104']},
            {dimension: ['3', '9E', 'BTR'], metric: ['104']},
            {dimension: ['1', 'OO', 'BFF'], metric: ['104']},
            {dimension: ['2', 'G4', 'GSP'], metric: ['104']},
            {dimension: ['1', 'MQ', 'BZN'], metric: ['104']},
            {dimension: ['4', 'F9', 'OMA'], metric: ['104']},
            {dimension: ['1', 'G4', 'BGR'], metric: ['104']},
            {dimension: ['3', 'G4', 'MDT'], metric: ['103']},
            {dimension: ['2', 'G4', 'OKC'], metric: ['103']},
            {dimension: ['1', 'MQ', 'TVC'], metric: ['103']},
            {dimension: ['2', 'OO', 'CNY'], metric: ['103']},
            {dimension: ['3', 'F9', 'CID'], metric: ['103']},
            {dimension: ['4', 'DL', 'LIH'], metric: ['103']},
            {dimension: ['2', 'F9', 'GRR'], metric: ['103']},
            {dimension: ['3', 'YX', 'ALB'], metric: ['103']},
            {dimension: ['2', 'G4', 'IAG'], metric: ['102']},
            {dimension: ['1', 'YV', 'ONT'], metric: ['102']},
            {dimension: ['1', 'EV', 'LAW'], metric: ['102']},
            {dimension: ['2', 'OO', 'GSO'], metric: ['102']},
            {dimension: ['3', '9E', 'MKE'], metric: ['102']},
            {dimension: ['3', 'G4', 'FNT'], metric: ['101']},
            {dimension: ['1', 'OO', 'BTV'], metric: ['101']},
            {dimension: ['3', 'VX', 'PSP'], metric: ['101']},
            {dimension: ['1', 'EV', 'ELM'], metric: ['101']},
            {dimension: ['4', 'AS', 'FLL'], metric: ['101']},
            {dimension: ['3', '9E', 'CAK'], metric: ['101']},
            {dimension: ['3', 'G4', 'EUG'], metric: ['101']},
            {dimension: ['3', 'YX', 'MYR'], metric: ['101']},
            {dimension: ['3', 'G4', 'RFD'], metric: ['101']},
            {dimension: ['3', 'UA', 'ELP'], metric: ['101']},
            {dimension: ['1', 'MQ', 'MFE'], metric: ['100']},
            {dimension: ['1', 'YX', 'BHM'], metric: ['100']},
            {dimension: ['2', 'YX', 'GSP'], metric: ['100']},
            {dimension: ['2', '9E', 'MBS'], metric: ['100']},
            {dimension: ['3', 'EV', 'CVG'], metric: ['100']},
            {dimension: ['3', 'YX', 'DRO'], metric: ['100']},
            {dimension: ['1', 'OO', 'LBF'], metric: ['100']},
            {dimension: ['1', 'OH', 'MCI'], metric: ['99']},
            {dimension: ['2', 'YV', 'LIT'], metric: ['99']},
            {dimension: ['2', 'G4', 'BIS'], metric: ['99']},
            {dimension: ['4', 'DL', 'GNV'], metric: ['99']},
            {dimension: ['3', 'F9', 'OKC'], metric: ['99']},
            {dimension: ['3', 'G4', 'MFE'], metric: ['99']},
            {dimension: ['3', 'F9', 'ABQ'], metric: ['99']},
            {dimension: ['3', 'G4', 'SBN'], metric: ['98']},
            {dimension: ['2', 'YX', 'BTR'], metric: ['98']},
            {dimension: ['3', 'G4', 'PVU'], metric: ['98']},
            {dimension: ['3', 'G4', 'RDU'], metric: ['98']},
            {dimension: ['1', '9E', 'GRR'], metric: ['98']},
            {dimension: ['4', 'EV', 'MGM'], metric: ['98']},
            {dimension: ['3', 'UA', 'FAI'], metric: ['97']},
            {dimension: ['1', 'MQ', 'AZO'], metric: ['97']},
            {dimension: ['2', '9E', 'AUS'], metric: ['97']},
            {dimension: ['1', 'MQ', 'RST'], metric: ['97']},
            {dimension: ['3', 'G4', 'OKC'], metric: ['97']},
            {dimension: ['2', 'OH', 'ALB'], metric: ['97']},
            {dimension: ['3', 'OH', 'PWM'], metric: ['97']},
            {dimension: ['2', 'G4', 'OMA'], metric: ['97']},
            {dimension: ['3', 'AS', 'CHS'], metric: ['97']},
            {dimension: ['2', 'YV', 'SYR'], metric: ['97']},
            {dimension: ['3', 'AS', 'SBA'], metric: ['97']},
            {dimension: ['3', 'OO', 'MHK'], metric: ['97']},
            {dimension: ['3', 'EV', 'HDN'], metric: ['96']},
            {dimension: ['4', 'F9', 'OKC'], metric: ['96']},
            {dimension: ['1', 'UA', 'RIC'], metric: ['96']},
            {dimension: ['2', 'NK', 'PBI'], metric: ['95']},
            {dimension: ['2', 'OH', 'MLB'], metric: ['95']},
            {dimension: ['1', '9E', 'CAK'], metric: ['95']},
            {dimension: ['1', 'EV', 'HOU'], metric: ['95']},
            {dimension: ['3', '9E', 'CAE'], metric: ['95']},
            {dimension: ['1', 'YV', 'SAV'], metric: ['95']},
            {dimension: ['4', 'OO', 'LBB'], metric: ['94']},
            {dimension: ['3', 'G4', 'FAT'], metric: ['94']},
            {dimension: ['1', 'G4', 'EWR'], metric: ['94']},
            {dimension: ['3', 'EV', 'ABY'], metric: ['93']},
            {dimension: ['1', 'YV', 'BTV'], metric: ['93']},
            {dimension: ['3', 'G4', 'SWF'], metric: ['93']},
            {dimension: ['4', 'AA', 'LBB'], metric: ['93']},
            {dimension: ['2', 'G4', 'SWF'], metric: ['93']},
            {dimension: ['4', 'AS', 'SBA'], metric: ['92']},
            {dimension: ['4', 'OO', 'IFP'], metric: ['92']},
            {dimension: ['2', 'F9', 'TYS'], metric: ['92']},
            {dimension: ['4', 'HA', 'PHX'], metric: ['92']},
            {dimension: ['4', 'HA', 'SMF'], metric: ['92']},
            {dimension: ['4', 'OO', 'RIC'], metric: ['92']},
            {dimension: ['1', 'YV', 'BUF'], metric: ['92']},
            {dimension: ['4', 'B6', 'DAB'], metric: ['92']},
            {dimension: ['3', 'OO', 'IFP'], metric: ['92']},
            {dimension: ['4', 'UA', 'AVL'], metric: ['92']},
            {dimension: ['4', 'B6', 'BUR'], metric: ['92']},
            {dimension: ['4', 'AS', 'PHL'], metric: ['92']},
            {dimension: ['4', 'AS', 'IAD'], metric: ['92']},
            {dimension: ['4', 'AS', 'TPA'], metric: ['92']},
            {dimension: ['4', 'AS', 'RDU'], metric: ['92']},
            {dimension: ['4', 'AS', 'TUS'], metric: ['92']},
            {dimension: ['1', 'G4', 'DAY'], metric: ['92']},
            {dimension: ['4', 'AS', 'IND'], metric: ['92']},
            {dimension: ['4', 'HA', 'SAN'], metric: ['92']},
            {dimension: ['4', 'AS', 'SAT'], metric: ['92']},
            {dimension: ['4', 'DL', 'FAI'], metric: ['92']},
            {dimension: ['1', 'OH', 'MSP'], metric: ['92']},
            {dimension: ['4', 'AS', 'BNA'], metric: ['92']},
            {dimension: ['4', 'VX', 'BNA'], metric: ['92']},
            {dimension: ['4', 'AS', 'OMA'], metric: ['92']},
            {dimension: ['4', 'UA', 'GUM'], metric: ['92']},
            {dimension: ['1', 'YV', 'LIT'], metric: ['92']},
            {dimension: ['4', 'AS', 'MSY'], metric: ['92']},
            {dimension: ['4', 'VX', 'IND'], metric: ['92']},
            {dimension: ['1', 'VX', 'MSY'], metric: ['92']},
            {dimension: ['4', 'HA', 'PDX'], metric: ['92']},
            {dimension: ['4', 'VX', 'MSY'], metric: ['92']},
            {dimension: ['1', 'OO', 'LBL'], metric: ['92']},
            {dimension: ['1', '9E', 'CHO'], metric: ['92']},
            {dimension: ['2', 'G4', 'MKE'], metric: ['92']},
            {dimension: ['2', 'YX', 'LIT'], metric: ['92']},
            {dimension: ['1', '9E', 'SDF'], metric: ['92']},
            {dimension: ['1', 'MQ', 'BOI'], metric: ['91']},
            {dimension: ['2', 'AS', 'MKE'], metric: ['91']},
            {dimension: ['2', 'MQ', 'MDT'], metric: ['91']},
            {dimension: ['4', 'DL', 'MHT'], metric: ['91']},
            {dimension: ['2', 'OO', 'IFP'], metric: ['91']},
            {dimension: ['1', 'EV', 'CWA'], metric: ['91']},
            {dimension: ['4', 'AA', 'SBA'], metric: ['91']},
            {dimension: ['2', 'MQ', 'VPS'], metric: ['91']},
            {dimension: ['2', 'MQ', 'BIL'], metric: ['91']},
            {dimension: ['3', 'G4', 'TUL'], metric: ['91']},
            {dimension: ['4', 'DL', 'STT'], metric: ['91']},
            {dimension: ['4', 'AS', 'ABQ'], metric: ['91']},
            {dimension: ['3', 'G4', 'BWI'], metric: ['91']},
            {dimension: ['2', 'YV', 'OAK'], metric: ['91']},
            {dimension: ['2', 'G4', 'TOL'], metric: ['91']},
            {dimension: ['2', 'OH', 'TUL'], metric: ['91']},
            {dimension: ['2', 'YV', 'BIS'], metric: ['91']},
            {dimension: ['3', 'DL', 'PHF'], metric: ['91']},
            {dimension: ['2', 'AS', 'SBA'], metric: ['91']},
            {dimension: ['4', 'UA', 'MYR'], metric: ['91']},
            {dimension: ['4', 'AA', 'ICT'], metric: ['91']},
            {dimension: ['2', 'G4', 'DAY'], metric: ['91']},
            {dimension: ['3', 'EV', 'CHO'], metric: ['91']},
            {dimension: ['2', '9E', 'ATW'], metric: ['91']},
            {dimension: ['4', 'UA', 'ICT'], metric: ['90']},
            {dimension: ['2', 'EV', 'FAR'], metric: ['90']},
            {dimension: ['2', '9E', 'CHS'], metric: ['90']},
            {dimension: ['1', 'AS', 'SBA'], metric: ['90']},
            {dimension: ['1', 'F9', 'FLL'], metric: ['90']},
            {dimension: ['1', 'YV', 'FAT'], metric: ['90']},
            {dimension: ['2', 'DL', 'HPN'], metric: ['90']},
            {dimension: ['1', 'MQ', 'MQT'], metric: ['90']},
            {dimension: ['2', 'G4', 'BGR'], metric: ['90']},
            {dimension: ['2', 'G4', 'SAN'], metric: ['90']},
            {dimension: ['1', 'MQ', 'BIL'], metric: ['90']},
            {dimension: ['1', 'YX', 'PNS'], metric: ['90']},
            {dimension: ['1', 'YV', 'MOB'], metric: ['90']},
            {dimension: ['1', 'YV', 'FLG'], metric: ['90']},
            {dimension: ['1', 'DL', 'STX'], metric: ['90']},
            {dimension: ['1', 'YV', 'COU'], metric: ['90']},
            {dimension: ['4', 'B6', 'STT'], metric: ['90']},
            {dimension: ['1', 'YV', 'BIS'], metric: ['90']},
            {dimension: ['1', 'VX', 'KOA'], metric: ['90']},
            {dimension: ['1', 'VX', 'IND'], metric: ['90']},
            {dimension: ['1', 'DL', 'FAI'], metric: ['90']},
            {dimension: ['1', 'AS', 'IND'], metric: ['90']},
            {dimension: ['1', 'VX', 'BNA'], metric: ['90']},
            {dimension: ['1', 'VX', 'BWI'], metric: ['90']},
            {dimension: ['1', 'VX', 'RDU'], metric: ['90']},
            {dimension: ['1', 'EV', 'COU'], metric: ['90']},
            {dimension: ['1', 'OH', 'OKC'], metric: ['90']},
            {dimension: ['1', 'MQ', 'BUF'], metric: ['90']},
            {dimension: ['4', 'DL', 'ABE'], metric: ['89']},
            {dimension: ['1', 'OO', 'MHT'], metric: ['89']},
            {dimension: ['2', 'UA', 'FAT'], metric: ['89']},
            {dimension: ['3', 'YV', 'SAV'], metric: ['89']},
            {dimension: ['1', 'OO', 'IFP'], metric: ['89']},
            {dimension: ['2', 'AA', 'MLB'], metric: ['89']},
            {dimension: ['2', 'YV', 'STS'], metric: ['89']},
            {dimension: ['4', 'UA', 'FAT'], metric: ['89']},
            {dimension: ['1', 'EV', 'MDT'], metric: ['89']},
            {dimension: ['2', 'MQ', 'HTS'], metric: ['89']},
            {dimension: ['3', '9E', 'TUL'], metric: ['89']},
            {dimension: ['1', 'YX', 'COS'], metric: ['89']},
            {dimension: ['1', 'YV', 'PNS'], metric: ['89']},
            {dimension: ['3', '9E', 'SAT'], metric: ['89']},
            {dimension: ['4', 'EV', 'LNK'], metric: ['89']},
            {dimension: ['4', 'AS', 'BOI'], metric: ['89']},
            {dimension: ['2', 'F9', 'CID'], metric: ['88']},
            {dimension: ['4', 'DL', 'AVP'], metric: ['88']},
            {dimension: ['3', 'F9', 'TYS'], metric: ['88']},
            {dimension: ['4', 'OO', 'ROW'], metric: ['88']},
            {dimension: ['3', 'F9', 'MSO'], metric: ['88']},
            {dimension: ['3', 'EV', 'FWA'], metric: ['88']},
            {dimension: ['3', 'G4', 'FWA'], metric: ['88']},
            {dimension: ['2', 'G4', 'MSO'], metric: ['88']},
            {dimension: ['1', 'G4', 'MOT'], metric: ['88']},
            {dimension: ['4', 'UA', 'TYS'], metric: ['88']},
            {dimension: ['1', '9E', 'MGM'], metric: ['88']},
            {dimension: ['2', 'OO', 'CSG'], metric: ['88']},
            {dimension: ['4', 'AS', 'BLI'], metric: ['87']},
            {dimension: ['3', 'MQ', 'BGR'], metric: ['87']},
            {dimension: ['1', 'G4', 'ELM'], metric: ['87']},
            {dimension: ['4', 'DL', 'PHF'], metric: ['87']},
            {dimension: ['2', 'EV', 'MYR'], metric: ['87']},
            {dimension: ['4', 'EV', 'FWA'], metric: ['87']},
            {dimension: ['1', 'YX', 'GSP'], metric: ['87']},
            {dimension: ['2', 'AA', 'SDF'], metric: ['87']},
            {dimension: ['1', 'EV', 'GRI'], metric: ['86']},
            {dimension: ['3', '9E', 'MHT'], metric: ['86']},
            {dimension: ['4', 'EV', 'LAN'], metric: ['86']},
            {dimension: ['3', 'G4', 'MSO'], metric: ['86']},
            {dimension: ['1', 'OH', 'ROA'], metric: ['86']},
            {dimension: ['4', 'B6', 'STX'], metric: ['86']},
            {dimension: ['3', 'EV', 'GTR'], metric: ['86']},
            {dimension: ['1', 'F9', 'ABQ'], metric: ['86']},
            {dimension: ['3', 'F9', 'FLL'], metric: ['86']},
            {dimension: ['3', 'YV', 'OAK'], metric: ['86']},
            {dimension: ['1', 'UA', 'PWM'], metric: ['86']},
            {dimension: ['2', '9E', 'CRW'], metric: ['86']},
            {dimension: ['2', 'AA', 'EGE'], metric: ['86']},
            {dimension: ['2', 'B6', 'MVY'], metric: ['85']},
            {dimension: ['1', 'YV', 'MDT'], metric: ['85']},
            {dimension: ['4', 'EV', 'MFE'], metric: ['85']},
            {dimension: ['1', 'UA', 'MFR'], metric: ['85']},
            {dimension: ['1', 'OH', 'JFK'], metric: ['85']},
            {dimension: ['4', 'DL', 'COS'], metric: ['85']},
            {dimension: ['1', 'G4', 'GSP'], metric: ['85']},
            {dimension: ['4', 'HA', 'JFK'], metric: ['85']},
            {dimension: ['3', 'G4', 'MCI'], metric: ['85']},
            {dimension: ['2', 'YV', 'OMA'], metric: ['85']},
            {dimension: ['1', 'G4', 'TUL'], metric: ['85']},
            {dimension: ['2', 'MQ', 'FAY'], metric: ['85']},
            {dimension: ['2', 'G4', 'XNA'], metric: ['84']},
            {dimension: ['1', 'AA', 'SDF'], metric: ['84']},
            {dimension: ['3', 'G4', 'PBG'], metric: ['84']},
            {dimension: ['4', 'DL', 'CID'], metric: ['84']},
            {dimension: ['3', 'OO', 'FAY'], metric: ['84']},
            {dimension: ['3', 'G4', 'IDA'], metric: ['84']},
            {dimension: ['1', 'MQ', 'ABQ'], metric: ['84']},
            {dimension: ['2', 'G4', 'ORF'], metric: ['84']},
            {dimension: ['2', 'EV', 'MGM'], metric: ['84']},
            {dimension: ['1', 'YV', 'BTR'], metric: ['83']},
            {dimension: ['4', 'F9', 'ABQ'], metric: ['83']},
            {dimension: ['3', '9E', 'OAJ'], metric: ['83']},
            {dimension: ['2', 'F9', 'BIS'], metric: ['83']},
            {dimension: ['3', 'YV', 'HRL'], metric: ['83']},
            {dimension: ['2', 'F9', 'ELP'], metric: ['82']},
            {dimension: ['2', 'EV', 'ILM'], metric: ['82']},
            {dimension: ['2', 'OO', 'CHS'], metric: ['82']},
            {dimension: ['2', 'MQ', 'BOI'], metric: ['81']},
            {dimension: ['1', '9E', 'HRL'], metric: ['81']},
            {dimension: ['2', 'F9', 'BHM'], metric: ['81']},
            {dimension: ['3', 'DL', 'GNV'], metric: ['81']},
            {dimension: ['1', '9E', 'CAE'], metric: ['81']},
            {dimension: ['4', 'DL', 'TRI'], metric: ['81']},
            {dimension: ['2', 'DL', 'JNU'], metric: ['81']},
            {dimension: ['1', 'OO', 'GSP'], metric: ['80']},
            {dimension: ['4', 'UA', 'ITO'], metric: ['80']},
            {dimension: ['4', 'DL', 'CRW'], metric: ['80']},
            {dimension: ['4', 'DL', 'CHO'], metric: ['80']},
            {dimension: ['2', 'UA', 'DLH'], metric: ['80']},
            {dimension: ['1', 'EV', 'IAD'], metric: ['80']},
            {dimension: ['4', 'DL', 'ILM'], metric: ['80']},
            {dimension: ['4', 'AA', 'AMA'], metric: ['80']},
            {dimension: ['4', 'DL', 'ONT'], metric: ['80']},
            {dimension: ['2', 'AA', 'LBB'], metric: ['80']},
            {dimension: ['4', 'DL', 'RAP'], metric: ['80']},
            {dimension: ['2', 'G4', 'MFR'], metric: ['80']},
            {dimension: ['4', 'OO', 'AGS'], metric: ['80']},
            {dimension: ['2', 'F9', 'MYR'], metric: ['80']},
            {dimension: ['4', 'DL', 'EVV'], metric: ['80']},
            {dimension: ['2', 'G4', 'CHS'], metric: ['80']},
            {dimension: ['2', 'MQ', 'EVV'], metric: ['80']},
            {dimension: ['2', '9E', 'PHF'], metric: ['79']},
            {dimension: ['2', 'G4', 'BOI'], metric: ['79']},
            {dimension: ['4', 'DL', 'LFT'], metric: ['79']},
            {dimension: ['1', 'G4', 'SYR'], metric: ['79']},
            {dimension: ['1', 'EV', 'BDL'], metric: ['79']},
            {dimension: ['1', 'UA', 'FAT'], metric: ['79']},
            {dimension: ['1', 'YX', 'RSW'], metric: ['79']},
            {dimension: ['2', 'OO', 'FLL'], metric: ['79']},
            {dimension: ['1', 'AA', 'MHT'], metric: ['79']},
            {dimension: ['2', 'F9', 'FLL'], metric: ['79']},
            {dimension: ['4', 'DL', 'BTV'], metric: ['79']},
            {dimension: ['2', 'G4', 'PVD'], metric: ['79']},
            {dimension: ['2', 'G4', 'IDA'], metric: ['79']},
            {dimension: ['1', 'G4', 'PSM'], metric: ['79']},
            {dimension: ['3', 'EV', 'CWA'], metric: ['79']},
            {dimension: ['1', 'YV', 'SYR'], metric: ['78']},
            {dimension: ['1', 'OH', 'BTR'], metric: ['78']},
            {dimension: ['1', 'G4', 'ORF'], metric: ['78']},
            {dimension: ['2', 'EV', 'TUS'], metric: ['78']},
            {dimension: ['1', 'G4', 'PVD'], metric: ['78']},
            {dimension: ['2', '9E', 'PBI'], metric: ['78']},
            {dimension: ['1', 'G4', 'BOI'], metric: ['78']},
            {dimension: ['4', 'OO', 'TOL'], metric: ['78']},
            {dimension: ['1', 'OH', 'TUL'], metric: ['78']},
            {dimension: ['2', 'G4', 'RNO'], metric: ['77']},
            {dimension: ['2', 'G4', 'PSM'], metric: ['77']},
            {dimension: ['1', 'OO', 'TOL'], metric: ['77']},
            {dimension: ['2', 'G4', 'MOT'], metric: ['77']},
            {dimension: ['1', 'G4', 'SWF'], metric: ['77']},
            {dimension: ['2', 'YV', 'PVD'], metric: ['77']},
            {dimension: ['4', 'VX', 'BWI'], metric: ['77']},
            {dimension: ['1', 'MQ', 'SAT'], metric: ['77']},
            {dimension: ['3', 'G4', 'XNA'], metric: ['77']},
            {dimension: ['3', 'G4', 'GSP'], metric: ['77']},
            {dimension: ['4', 'OO', 'UIN'], metric: ['77']},
            {dimension: ['3', 'YV', 'BDL'], metric: ['76']},
            {dimension: ['2', 'OO', 'JFK'], metric: ['76']},
            {dimension: ['1', 'G4', 'HTS'], metric: ['76']},
            {dimension: ['4', 'B6', 'ABQ'], metric: ['76']},
            {dimension: ['4', 'EV', 'COS'], metric: ['76']},
            {dimension: ['2', 'OO', 'SIT'], metric: ['75']},
            {dimension: ['1', 'EV', 'TXK'], metric: ['75']},
            {dimension: ['1', 'EV', 'MSY'], metric: ['75']},
            {dimension: ['3', 'G4', 'MLI'], metric: ['75']},
            {dimension: ['2', 'VX', 'PSP'], metric: ['74']},
            {dimension: ['3', 'MQ', 'LSE'], metric: ['74']},
            {dimension: ['1', 'MQ', 'RAP'], metric: ['74']},
            {dimension: ['2', 'G4', 'ICT'], metric: ['74']},
            {dimension: ['2', 'OH', 'SAT'], metric: ['74']},
            {dimension: ['2', 'OO', 'PWM'], metric: ['74']},
            {dimension: ['3', 'YV', 'ECP'], metric: ['74']},
            {dimension: ['2', 'F9', 'RNO'], metric: ['74']},
            {dimension: ['4', 'VX', 'RDU'], metric: ['74']},
            {dimension: ['3', 'OH', 'BGR'], metric: ['73']},
            {dimension: ['3', 'OH', 'MLB'], metric: ['73']},
            {dimension: ['4', 'DL', 'TVC'], metric: ['73']},
            {dimension: ['1', 'MQ', 'LBB'], metric: ['73']},
            {dimension: ['3', 'YV', 'CLE'], metric: ['73']},
            {dimension: ['3', 'G4', 'MSY'], metric: ['73']},
            {dimension: ['3', '9E', 'RSW'], metric: ['73']},
            {dimension: ['3', 'EV', 'ABQ'], metric: ['73']},
            {dimension: ['2', 'F9', 'MSO'], metric: ['72']},
            {dimension: ['1', '9E', 'AVL'], metric: ['72']},
            {dimension: ['3', 'MQ', 'EVV'], metric: ['72']},
            {dimension: ['3', 'YX', 'ILM'], metric: ['72']},
            {dimension: ['2', 'DL', 'SGF'], metric: ['72']},
            {dimension: ['3', 'YX', 'SAT'], metric: ['72']},
            {dimension: ['3', 'YX', 'COS'], metric: ['72']},
            {dimension: ['3', 'EV', 'BDL'], metric: ['72']},
            {dimension: ['1', 'YX', 'DAY'], metric: ['72']},
            {dimension: ['2', 'EV', 'MLB'], metric: ['72']},
            {dimension: ['1', 'DL', 'SHV'], metric: ['72']},
            {dimension: ['3', 'G4', 'IAG'], metric: ['71']},
            {dimension: ['2', 'YV', 'BFL'], metric: ['71']},
            {dimension: ['3', 'OO', 'ILM'], metric: ['71']},
            {dimension: ['1', 'G4', 'GFK'], metric: ['71']},
            {dimension: ['4', 'UA', 'ALB'], metric: ['71']},
            {dimension: ['3', 'UA', 'SPN'], metric: ['71']},
            {dimension: ['4', 'AA', 'MYR'], metric: ['71']},
            {dimension: ['3', 'AS', 'AKN'], metric: ['71']},
            {dimension: ['4', 'F9', 'FSD'], metric: ['71']},
            {dimension: ['3', 'YX', 'BRO'], metric: ['71']},
            {dimension: ['3', 'G4', 'FAR'], metric: ['70']},
            {dimension: ['2', 'G4', 'SRQ'], metric: ['70']},
            {dimension: ['1', 'G4', 'RNO'], metric: ['70']},
            {dimension: ['1', 'YV', 'SMF'], metric: ['70']},
            {dimension: ['3', 'MQ', 'FSM'], metric: ['70']},
            {dimension: ['4', 'OO', 'EVV'], metric: ['70']},
            {dimension: ['2', 'G4', 'ELM'], metric: ['70']},
            {dimension: ['4', 'EV', 'OAJ'], metric: ['69']},
            {dimension: ['3', 'OO', 'BTV'], metric: ['69']},
            {dimension: ['1', '9E', 'ROA'], metric: ['69']},
            {dimension: ['3', 'YX', 'LIT'], metric: ['69']},
            {dimension: ['4', 'NK', 'IAG'], metric: ['69']},
            {dimension: ['3', '9E', 'ACK'], metric: ['69']},
            {dimension: ['1', 'OO', 'BOS'], metric: ['69']},
            {dimension: ['2', 'G4', 'BIL'], metric: ['69']},
            {dimension: ['1', '9E', 'BTR'], metric: ['68']},
            {dimension: ['3', 'G4', 'ATW'], metric: ['68']},
            {dimension: ['3', 'DL', 'HPN'], metric: ['68']},
            {dimension: ['2', '9E', 'LNK'], metric: ['68']},
            {dimension: ['2', 'G4', 'PSC'], metric: ['68']},
            {dimension: ['3', 'G4', 'BGR'], metric: ['68']},
            {dimension: ['2', '9E', 'MYR'], metric: ['68']},
            {dimension: ['1', 'YV', 'LFT'], metric: ['68']},
            {dimension: ['2', 'G4', 'RAP'], metric: ['68']},
            {dimension: ['2', 'G4', 'ROA'], metric: ['67']},
            {dimension: ['1', 'G4', 'BIL'], metric: ['67']},
            {dimension: ['3', 'EV', 'MTJ'], metric: ['67']},
            {dimension: ['3', 'F9', 'GRR'], metric: ['67']},
            {dimension: ['2', 'OO', 'ABY'], metric: ['67']},
            {dimension: ['3', 'G4', 'ORF'], metric: ['67']},
            {dimension: ['4', 'OO', 'OTH'], metric: ['67']},
            {dimension: ['1', 'DL', 'OAJ'], metric: ['67']},
            {dimension: ['3', 'G4', 'DAY'], metric: ['67']},
            {dimension: ['4', 'OO', 'JAC'], metric: ['67']},
            {dimension: ['1', 'G4', 'VPS'], metric: ['66']},
            {dimension: ['3', 'F9', 'BZN'], metric: ['66']},
            {dimension: ['2', '9E', 'GTR'], metric: ['66']},
            {dimension: ['4', 'OO', 'ROC'], metric: ['66']},
            {dimension: ['1', 'G4', 'RAP'], metric: ['66']},
            {dimension: ['4', 'UA', 'STL'], metric: ['66']},
            {dimension: ['1', 'OO', 'MSY'], metric: ['66']},
            {dimension: ['1', 'EV', 'CVG'], metric: ['66']},
            {dimension: ['2', 'OO', 'VLD'], metric: ['66']},
            {dimension: ['4', 'UA', 'EGE'], metric: ['65']},
            {dimension: ['3', 'MQ', 'CLL'], metric: ['65']},
            {dimension: ['1', 'G4', 'MFE'], metric: ['65']},
            {dimension: ['2', 'EV', 'JAC'], metric: ['65']},
            {dimension: ['2', 'YV', 'RIC'], metric: ['65']},
            {dimension: ['3', 'EV', 'ILM'], metric: ['65']},
            {dimension: ['4', 'AA', 'SDF'], metric: ['64']},
            {dimension: ['2', 'DL', 'PSP'], metric: ['64']},
            {dimension: ['4', 'OO', 'MTJ'], metric: ['64']},
            {dimension: ['2', 'EV', 'MSY'], metric: ['64']},
            {dimension: ['3', 'MQ', 'ATW'], metric: ['63']},
            {dimension: ['1', 'YX', 'TVC'], metric: ['63']},
            {dimension: ['2', 'OO', 'PNS'], metric: ['63']},
            {dimension: ['2', 'YV', 'DSM'], metric: ['63']},
            {dimension: ['2', 'OO', 'OAJ'], metric: ['63']},
            {dimension: ['3', '9E', 'MBS'], metric: ['63']},
            {dimension: ['2', 'YV', 'TLH'], metric: ['63']},
            {dimension: ['2', 'G4', 'ELP'], metric: ['63']},
            {dimension: ['2', 'F9', 'GSO'], metric: ['63']},
            {dimension: ['2', 'B6', 'PSP'], metric: ['63']},
            {dimension: ['4', 'AA', 'JAC'], metric: ['62']},
            {dimension: ['3', 'MQ', 'HTS'], metric: ['62']},
            {dimension: ['3', 'AS', 'MKE'], metric: ['62']},
            {dimension: ['3', 'MQ', 'BIL'], metric: ['62']},
            {dimension: ['3', 'AA', 'MLB'], metric: ['62']},
            {dimension: ['3', 'MQ', 'BZN'], metric: ['62']},
            {dimension: ['2', 'EV', 'TYR'], metric: ['62']},
            {dimension: ['1', 'MQ', 'CRP'], metric: ['62']},
            {dimension: ['2', 'YV', 'EVV'], metric: ['62']},
            {dimension: ['3', 'G4', 'SAN'], metric: ['62']},
            {dimension: ['4', 'AA', 'ROC'], metric: ['62']},
            {dimension: ['1', 'DL', 'BMI'], metric: ['62']},
            {dimension: ['2', 'YX', 'TLH'], metric: ['62']},
            {dimension: ['2', '9E', 'TPA'], metric: ['62']},
            {dimension: ['3', 'MQ', 'ROA'], metric: ['62']},
            {dimension: ['1', 'UA', 'STL'], metric: ['62']},
            {dimension: ['3', 'OO', 'MSY'], metric: ['62']},
            {dimension: ['3', 'OH', 'TUL'], metric: ['62']},
            {dimension: ['3', '9E', 'MVY'], metric: ['62']},
            {dimension: ['3', 'YV', 'STS'], metric: ['62']},
            {dimension: ['3', 'HA', 'LGB'], metric: ['62']},
            {dimension: ['3', 'YV', 'BIS'], metric: ['62']},
            {dimension: ['3', 'F9', 'SYR'], metric: ['62']},
            {dimension: ['3', 'F9', 'PWM'], metric: ['61']},
            {dimension: ['3', 'G4', 'CHS'], metric: ['61']},
            {dimension: ['2', 'MQ', 'GPT'], metric: ['61']},
            {dimension: ['1', 'G4', 'STC'], metric: ['61']},
            {dimension: ['3', 'G4', 'MFR'], metric: ['61']},
            {dimension: ['3', 'VX', 'PHL'], metric: ['61']},
            {dimension: ['1', 'EV', 'SAT'], metric: ['61']},
            {dimension: ['4', 'EV', 'DHN'], metric: ['60']},
            {dimension: ['3', 'HA', 'PPG'], metric: ['60']},
            {dimension: ['3', 'G4', 'OMA'], metric: ['60']},
            {dimension: ['3', 'G4', 'PSM'], metric: ['60']},
            {dimension: ['2', 'HA', 'PPG'], metric: ['60']},
            {dimension: ['1', 'MQ', 'HOU'], metric: ['60']},
            {dimension: ['3', 'OH', 'MSY'], metric: ['60']},
            {dimension: ['1', 'G4', 'MFR'], metric: ['60']},
            {dimension: ['3', 'G4', 'ICT'], metric: ['60']},
            {dimension: ['1', 'YV', 'DAY'], metric: ['59']},
            {dimension: ['4', 'DL', 'SGF'], metric: ['59']},
            {dimension: ['3', 'F9', 'ELP'], metric: ['59']},
            {dimension: ['1', 'G4', 'GTF'], metric: ['59']},
            {dimension: ['2', 'G4', 'RIC'], metric: ['59']},
            {dimension: ['3', 'MQ', 'ROW'], metric: ['59']},
            {dimension: ['3', 'YX', 'VPS'], metric: ['59']},
            {dimension: ['3', 'UA', 'CRP'], metric: ['59']},
            {dimension: ['2', 'AA', 'AMA'], metric: ['59']},
            {dimension: ['1', '9E', 'AGS'], metric: ['59']},
            {dimension: ['1', 'G4', 'BMI'], metric: ['59']},
            {dimension: ['1', 'F9', 'PSP'], metric: ['59']},
            {dimension: ['1', '9E', 'MDT'], metric: ['59']},
            {dimension: ['2', 'MQ', 'HOU'], metric: ['59']},
            {dimension: ['4', 'EV', 'FNT'], metric: ['58']},
            {dimension: ['3', 'EV', 'TUS'], metric: ['58']},
            {dimension: ['3', 'MQ', 'FSD'], metric: ['58']},
            {dimension: ['2', 'OO', 'MTJ'], metric: ['58']},
            {dimension: ['1', 'G4', 'IDA'], metric: ['58']},
            {dimension: ['3', 'F9', 'GSO'], metric: ['58']},
            {dimension: ['2', 'DL', 'ONT'], metric: ['58']},
            {dimension: ['1', 'EV', 'AUS'], metric: ['58']},
            {dimension: ['1', '9E', 'FLL'], metric: ['58']},
            {dimension: ['2', 'EV', 'SAT'], metric: ['58']},
            {dimension: ['2', 'YX', 'PBI'], metric: ['58']},
            {dimension: ['3', 'G4', 'PSC'], metric: ['58']},
            {dimension: ['4', 'DL', 'PSC'], metric: ['58']},
            {dimension: ['2', 'G4', 'BZN'], metric: ['58']},
            {dimension: ['4', 'F9', 'BUF'], metric: ['57']},
            {dimension: ['2', 'G4', 'ABQ'], metric: ['57']},
            {dimension: ['3', 'MQ', 'MDT'], metric: ['57']},
            {dimension: ['2', 'MQ', 'BZN'], metric: ['57']},
            {dimension: ['1', 'YX', 'ABQ'], metric: ['57']},
            {dimension: ['2', 'MQ', 'ATW'], metric: ['57']},
            {dimension: ['3', 'OO', 'FLL'], metric: ['57']},
            {dimension: ['2', 'YX', 'BOI'], metric: ['57']},
            {dimension: ['3', 'AS', 'RDM'], metric: ['57']},
            {dimension: ['1', 'DL', 'MTJ'], metric: ['57']},
            {dimension: ['3', 'EV', 'EYW'], metric: ['56']},
            {dimension: ['1', 'G4', 'MSO'], metric: ['56']},
            {dimension: ['1', '9E', 'CID'], metric: ['56']},
            {dimension: ['4', 'EV', 'CID'], metric: ['56']},
            {dimension: ['1', 'G4', 'ROA'], metric: ['56']},
            {dimension: ['1', 'G4', 'PSC'], metric: ['56']},
            {dimension: ['1', 'MQ', 'MGM'], metric: ['56']},
            {dimension: ['2', '9E', 'MDT'], metric: ['56']},
            {dimension: ['2', 'G4', 'CHA'], metric: ['56']},
            {dimension: ['1', 'G4', 'ICT'], metric: ['56']},
            {dimension: ['1', 'OO', 'FSM'], metric: ['56']},
            {dimension: ['2', 'YX', 'VPS'], metric: ['56']},
            {dimension: ['3', 'G4', 'DEN'], metric: ['56']},
            {dimension: ['2', 'G4', 'DEN'], metric: ['56']},
            {dimension: ['3', 'MQ', 'SAT'], metric: ['56']},
            {dimension: ['1', 'MQ', 'MSP'], metric: ['56']},
            {dimension: ['4', 'OO', 'BGR'], metric: ['55']},
            {dimension: ['3', '9E', 'CHA'], metric: ['55']},
            {dimension: ['2', 'AS', 'GST'], metric: ['55']},
            {dimension: ['3', 'G4', 'BIL'], metric: ['55']},
            {dimension: ['1', 'OH', 'PNS'], metric: ['55']},
            {dimension: ['3', 'MQ', 'MLU'], metric: ['55']},
            {dimension: ['2', 'AS', 'AKN'], metric: ['55']},
            {dimension: ['1', '9E', 'FNT'], metric: ['55']},
            {dimension: ['2', 'G4', 'BMI'], metric: ['55']},
            {dimension: ['1', 'AA', 'LBB'], metric: ['55']},
            {dimension: ['1', 'G4', 'CHA'], metric: ['55']},
            {dimension: ['1', 'G4', 'RIC'], metric: ['55']},
            {dimension: ['2', 'AS', 'DLG'], metric: ['55']},
            {dimension: ['1', 'YV', 'BZN'], metric: ['55']},
            {dimension: ['2', 'YX', 'SLC'], metric: ['55']},
            {dimension: ['3', 'OO', 'CRP'], metric: ['55']},
            {dimension: ['3', 'YV', 'RIC'], metric: ['55']},
            {dimension: ['3', 'OO', 'PNS'], metric: ['54']},
            {dimension: ['3', 'UA', 'DLH'], metric: ['54']},
            {dimension: ['1', 'G4', 'BZN'], metric: ['54']},
            {dimension: ['4', 'AA', 'GSO'], metric: ['54']},
            {dimension: ['1', 'G4', 'PSP'], metric: ['54']},
            {dimension: ['2', 'EV', 'GRI'], metric: ['54']},
            {dimension: ['3', 'G4', 'RIC'], metric: ['54']},
            {dimension: ['3', 'G4', 'BOI'], metric: ['54']},
            {dimension: ['4', 'OO', 'PVD'], metric: ['54']},
            {dimension: ['3', 'YV', 'GSP'], metric: ['54']},
            {dimension: ['1', 'F9', 'JAX'], metric: ['54']},
            {dimension: ['3', 'MQ', 'PBI'], metric: ['54']},
            {dimension: ['1', 'HA', 'PPG'], metric: ['54']},
            {dimension: ['3', 'G4', 'RNO'], metric: ['54']},
            {dimension: ['3', 'YX', 'MDT'], metric: ['54']},
            {dimension: ['1', 'G4', 'GRI'], metric: ['53']},
            {dimension: ['2', 'MQ', 'BGR'], metric: ['53']},
            {dimension: ['3', 'MQ', 'TYS'], metric: ['53']},
            {dimension: ['3', 'MQ', 'CHA'], metric: ['53']},
            {dimension: ['3', 'G4', 'TOL'], metric: ['53']},
            {dimension: ['2', 'MQ', 'SAV'], metric: ['53']},
            {dimension: ['2', 'G4', 'GTF'], metric: ['53']},
            {dimension: ['2', 'G4', 'ROC'], metric: ['53']},
            {dimension: ['1', '9E', 'MCO'], metric: ['53']},
            {dimension: ['4', 'AS', 'CHS'], metric: ['53']},
            {dimension: ['2', 'UA', 'MSO'], metric: ['53']},
            {dimension: ['4', 'NK', 'PBG'], metric: ['53']},
            {dimension: ['3', 'F9', 'RNO'], metric: ['53']},
            {dimension: ['3', 'MQ', 'FAY'], metric: ['52']},
            {dimension: ['3', 'MQ', 'BOI'], metric: ['52']},
            {dimension: ['3', 'MQ', 'CRP'], metric: ['52']},
            {dimension: ['4', 'EV', 'HRL'], metric: ['52']},
            {dimension: ['3', 'UA', 'MAF'], metric: ['52']},
            {dimension: ['2', 'G4', 'GSO'], metric: ['52']},
            {dimension: ['1', 'EV', 'TYR'], metric: ['52']},
            {dimension: ['3', 'YV', 'OMA'], metric: ['52']},
            {dimension: ['1', 'YV', 'FSD'], metric: ['52']},
            {dimension: ['2', 'G4', 'GRI'], metric: ['52']},
            {dimension: ['3', 'YX', 'LFT'], metric: ['52']},
            {dimension: ['1', 'G4', 'ABQ'], metric: ['52']},
            {dimension: ['4', 'OO', 'PUB'], metric: ['52']},
            {dimension: ['1', 'MQ', 'BMI'], metric: ['52']},
            {dimension: ['2', 'AS', 'ADK'], metric: ['52']},
            {dimension: ['3', 'G4', 'ELM'], metric: ['52']},
            {dimension: ['3', 'OH', 'ROC'], metric: ['52']},
            {dimension: ['2', 'G4', 'SAT'], metric: ['52']},
            {dimension: ['1', 'AS', 'ADK'], metric: ['52']},
            {dimension: ['3', 'OH', 'SAT'], metric: ['52']},
            {dimension: ['4', 'EV', 'AGS'], metric: ['52']},
            {dimension: ['3', '9E', 'PHF'], metric: ['52']},
            {dimension: ['1', 'G4', 'XNA'], metric: ['52']},
            {dimension: ['3', 'OH', 'BTR'], metric: ['52']},
            {dimension: ['1', 'OO', 'PBI'], metric: ['51']},
            {dimension: ['3', 'G4', 'FCA'], metric: ['51']},
            {dimension: ['1', 'OO', 'JAX'], metric: ['51']},
            {dimension: ['1', 'G4', 'OGS'], metric: ['51']},
            {dimension: ['3', 'MQ', 'BDL'], metric: ['51']},
            {dimension: ['1', 'G4', 'GSO'], metric: ['51']},
            {dimension: ['2', 'OO', 'BGR'], metric: ['51']},
            {dimension: ['3', 'OO', 'BRO'], metric: ['51']},
            {dimension: ['1', 'YX', 'ILM'], metric: ['51']},
            {dimension: ['3', 'AA', 'GSO'], metric: ['51']},
            {dimension: ['2', 'AA', 'MHT'], metric: ['51']},
            {dimension: ['2', 'F9', 'LIT'], metric: ['51']},
            {dimension: ['4', 'OO', 'CGI'], metric: ['51']},
            {dimension: ['3', 'OO', 'BWI'], metric: ['51']},
            {dimension: ['3', 'G4', 'RAP'], metric: ['51']},
            {dimension: ['4', 'OO', 'TRI'], metric: ['51']},
            {dimension: ['1', 'OO', 'SAV'], metric: ['50']},
            {dimension: ['4', 'EV', 'MCI'], metric: ['50']},
            {dimension: ['2', 'OO', 'HDN'], metric: ['50']},
            {dimension: ['1', 'G4', 'ROC'], metric: ['50']},
            {dimension: ['1', 'OO', 'PWM'], metric: ['50']},
            {dimension: ['4', 'NK', 'BQN'], metric: ['50']},
            {dimension: ['1', 'OH', 'RSW'], metric: ['50']},
            {dimension: ['3', 'OH', 'BWI'], metric: ['50']},
            {dimension: ['3', '9E', 'SBN'], metric: ['49']},
            {dimension: ['3', 'EV', 'BQK'], metric: ['49']},
            {dimension: ['2', 'AA', 'GRR'], metric: ['49']},
            {dimension: ['2', 'EV', 'ALB'], metric: ['49']},
            {dimension: ['3', '9E', 'LNK'], metric: ['49']},
            {dimension: ['4', 'F9', 'CID'], metric: ['49']},
            {dimension: ['1', '9E', 'AUS'], metric: ['49']},
            {dimension: ['2', 'MQ', 'PBI'], metric: ['49']},
            {dimension: ['4', 'EV', 'FAR'], metric: ['48']},
            {dimension: ['2', 'G4', 'GFK'], metric: ['48']},
            {dimension: ['2', 'MQ', 'BTV'], metric: ['48']},
            {dimension: ['2', 'OH', 'HTS'], metric: ['48']},
            {dimension: ['3', 'G4', 'SRQ'], metric: ['48']},
            {dimension: ['2', 'YX', 'DRO'], metric: ['48']},
            {dimension: ['4', 'UA', 'BTV'], metric: ['48']},
            {dimension: ['3', '9E', 'AUS'], metric: ['48']},
            {dimension: ['3', 'DL', 'BTR'], metric: ['48']},
            {dimension: ['2', 'MQ', 'MSO'], metric: ['48']},
            {dimension: ['2', 'YV', 'COS'], metric: ['47']},
            {dimension: ['2', 'EV', 'TVC'], metric: ['47']},
            {dimension: ['3', 'MQ', 'LBB'], metric: ['47']},
            {dimension: ['4', 'OO', 'MHT'], metric: ['47']},
            {dimension: ['3', 'G4', 'BIS'], metric: ['47']},
            {dimension: ['3', 'G4', 'PVD'], metric: ['47']},
            {dimension: ['2', 'G4', 'BNA'], metric: ['47']},
            {dimension: ['2', 'YX', 'HRL'], metric: ['47']},
            {dimension: ['2', 'UA', 'FAI'], metric: ['47']},
            {dimension: ['2', 'G4', 'SHV'], metric: ['46']},
            {dimension: ['1', 'G4', 'OGD'], metric: ['46']},
            {dimension: ['2', 'YX', 'DAY'], metric: ['46']},
            {dimension: ['3', 'OO', 'GRK'], metric: ['46']},
            {dimension: ['3', 'G4', 'ROA'], metric: ['46']},
            {dimension: ['2', 'OO', 'EWN'], metric: ['46']},
            {dimension: ['3', '9E', 'ATW'], metric: ['46']},
            {dimension: ['1', 'F9', 'CID'], metric: ['46']},
            {dimension: ['1', 'YV', 'MTJ'], metric: ['46']},
            {dimension: ['3', 'F9', 'PNS'], metric: ['46']},
            {dimension: ['3', 'F9', 'BHM'], metric: ['46']},
            {dimension: ['2', 'OO', 'KTN'], metric: ['46']},
            {dimension: ['2', 'F9', 'PNS'], metric: ['45']},
            {dimension: ['3', '9E', 'FAR'], metric: ['45']},
            {dimension: ['2', 'F9', 'BZN'], metric: ['45']},
            {dimension: ['1', '9E', 'TVC'], metric: ['45']},
            {dimension: ['2', '9E', 'DAY'], metric: ['45']},
            {dimension: ['4', 'F9', 'PIT'], metric: ['45']},
            {dimension: ['1', 'YV', 'PDX'], metric: ['45']},
            {dimension: ['2', '9E', 'SDF'], metric: ['45']},
            {dimension: ['2', 'YV', 'MKE'], metric: ['44']},
            {dimension: ['2', 'MQ', 'TYS'], metric: ['44']},
            {dimension: ['2', 'MQ', 'AVP'], metric: ['44']},
            {dimension: ['2', 'AA', 'CAE'], metric: ['44']},
            {dimension: ['2', 'G4', 'OGS'], metric: ['44']},
            {dimension: ['2', 'DL', 'RAP'], metric: ['44']},
            {dimension: ['3', 'YX', 'TPA'], metric: ['44']},
            {dimension: ['1', 'YV', 'OAK'], metric: ['44']},
            {dimension: ['4', 'EV', 'GNV'], metric: ['44']},
            {dimension: ['4', 'EV', 'ATW'], metric: ['44']},
            {dimension: ['4', 'EV', 'CWA'], metric: ['43']},
            {dimension: ['3', 'AS', 'ADK'], metric: ['43']},
            {dimension: ['3', 'EV', 'MYR'], metric: ['43']},
            {dimension: ['2', 'EV', 'FSD'], metric: ['43']},
            {dimension: ['3', 'YV', 'ALB'], metric: ['43']},
            {dimension: ['2', 'DL', 'GTF'], metric: ['43']},
            {dimension: ['1', 'UA', 'SBA'], metric: ['43']},
            {dimension: ['1', 'G4', 'BWI'], metric: ['43']},
            {dimension: ['1', 'YX', 'LIT'], metric: ['43']},
            {dimension: ['2', 'G4', 'TRI'], metric: ['42']},
            {dimension: ['3', 'G4', 'MOT'], metric: ['42']},
            {dimension: ['3', 'G4', 'EVV'], metric: ['42']},
            {dimension: ['2', 'YX', 'CID'], metric: ['42']},
            {dimension: ['3', 'AA', 'XNA'], metric: ['42']},
            {dimension: ['3', 'G4', 'MKE'], metric: ['42']},
            {dimension: ['2', 'OH', 'MSY'], metric: ['42']},
            {dimension: ['3', 'YV', 'DAY'], metric: ['42']},
            {dimension: ['3', 'G4', 'ELP'], metric: ['42']},
            {dimension: ['2', 'UA', 'ELP'], metric: ['41']},
            {dimension: ['2', 'G4', 'FCA'], metric: ['41']},
            {dimension: ['2', 'F9', 'UST'], metric: ['41']},
            {dimension: ['2', 'NK', 'CRW'], metric: ['41']},
            {dimension: ['2', '9E', 'JAN'], metric: ['41']},
            {dimension: ['1', 'EV', 'ABI'], metric: ['41']},
            {dimension: ['3', 'F9', 'GEG'], metric: ['41']},
            {dimension: ['1', 'AA', 'AMA'], metric: ['41']},
            {dimension: ['3', 'F9', 'SDF'], metric: ['41']},
            {dimension: ['4', 'EV', 'ROA'], metric: ['41']},
            {dimension: ['3', 'G4', 'BZN'], metric: ['41']},
            {dimension: ['2', 'G4', 'LIT'], metric: ['40']},
            {dimension: ['3', 'G4', 'CHA'], metric: ['40']},
            {dimension: ['3', '9E', 'SRQ'], metric: ['40']},
            {dimension: ['2', 'G4', 'EVV'], metric: ['40']},
            {dimension: ['4', 'F9', 'TYS'], metric: ['40']},
            {dimension: ['3', 'AA', 'SDF'], metric: ['40']},
            {dimension: ['2', 'G4', 'SJU'], metric: ['40']},
            {dimension: ['4', 'AA', 'MHT'], metric: ['40']},
            {dimension: ['2', 'OO', 'MSY'], metric: ['40']},
            {dimension: ['3', 'YX', 'RSW'], metric: ['40']},
            {dimension: ['3', 'AA', 'AMA'], metric: ['40']},
            {dimension: ['3', 'G4', 'ABQ'], metric: ['40']},
            {dimension: ['1', 'G4', 'SAT'], metric: ['40']},
            {dimension: ['2', 'B6', 'HYA'], metric: ['39']},
            {dimension: ['3', 'EV', 'ALB'], metric: ['39']},
            {dimension: ['4', 'EV', 'MYR'], metric: ['39']},
            {dimension: ['1', 'YX', 'SRQ'], metric: ['39']},
            {dimension: ['1', 'YV', 'RIC'], metric: ['39']},
            {dimension: ['4', 'B6', 'ACK'], metric: ['39']},
            {dimension: ['2', 'G4', 'SMX'], metric: ['39']},
            {dimension: ['1', 'F9', 'TYS'], metric: ['39']},
            {dimension: ['2', 'G4', 'HGR'], metric: ['39']},
            {dimension: ['2', 'F9', 'BOI'], metric: ['39']},
            {dimension: ['1', 'G4', 'SMX'], metric: ['39']},
            {dimension: ['1', 'G4', 'SPI'], metric: ['39']},
            {dimension: ['1', 'G4', 'OKC'], metric: ['39']},
            {dimension: ['1', 'AA', 'CRP'], metric: ['39']},
            {dimension: ['1', 'YV', 'STS'], metric: ['38']},
            {dimension: ['4', 'UA', 'PWM'], metric: ['38']},
            {dimension: ['2', 'OO', 'CRP'], metric: ['38']},
            {dimension: ['3', 'EV', 'PIA'], metric: ['38']},
            {dimension: ['1', 'EV', 'MLB'], metric: ['38']},
            {dimension: ['2', 'F9', 'PGD'], metric: ['38']},
            {dimension: ['2', '9E', 'GPT'], metric: ['38']},
            {dimension: ['2', 'MQ', 'MAF'], metric: ['38']},
            {dimension: ['1', 'F9', 'RNO'], metric: ['38']},
            {dimension: ['3', 'YV', 'ROC'], metric: ['38']},
            {dimension: ['3', '9E', 'CMH'], metric: ['38']},
            {dimension: ['4', 'B6', 'PSP'], metric: ['37']},
            {dimension: ['4', 'DL', 'HPN'], metric: ['37']},
            {dimension: ['2', 'OH', 'JFK'], metric: ['37']},
            {dimension: ['1', 'MQ', 'ELP'], metric: ['37']},
            {dimension: ['3', 'F9', 'PBI'], metric: ['37']},
            {dimension: ['3', 'NK', 'CRW'], metric: ['37']},
            {dimension: ['3', 'YX', 'HRL'], metric: ['37']},
            {dimension: ['2', 'AA', 'XNA'], metric: ['37']},
            {dimension: ['1', 'G4', 'SAN'], metric: ['37']},
            {dimension: ['4', 'AA', 'HDN'], metric: ['37']},
            {dimension: ['2', 'OO', 'BRO'], metric: ['37']},
            {dimension: ['2', 'YX', 'BWI'], metric: ['37']},
            {dimension: ['3', 'F9', 'SAV'], metric: ['37']},
            {dimension: ['3', 'G4', 'BMI'], metric: ['36']},
            {dimension: ['1', 'YV', 'TYS'], metric: ['36']},
            {dimension: ['2', 'F9', 'GEG'], metric: ['36']},
            {dimension: ['3', 'G4', 'TRI'], metric: ['36']},
            {dimension: ['3', 'G4', 'SHV'], metric: ['36']},
            {dimension: ['4', 'OO', 'FAY'], metric: ['36']},
            {dimension: ['4', 'DL', 'FCA'], metric: ['36']},
            {dimension: ['2', 'F9', 'PSP'], metric: ['36']},
            {dimension: ['3', 'G4', 'GTF'], metric: ['36']},
            {dimension: ['3', 'G4', 'GSO'], metric: ['36']},
            {dimension: ['3', 'G4', 'GRI'], metric: ['36']},
            {dimension: ['2', 'YX', 'RSW'], metric: ['36']},
            {dimension: ['4', 'OO', 'ROA'], metric: ['36']},
            {dimension: ['2', 'G4', 'PSP'], metric: ['36']},
            {dimension: ['2', 'DL', 'BGR'], metric: ['35']},
            {dimension: ['2', 'F9', 'SAV'], metric: ['35']},
            {dimension: ['3', 'F9', 'LIT'], metric: ['35']},
            {dimension: ['4', 'UA', 'OKC'], metric: ['35']},
            {dimension: ['2', 'EV', 'BDL'], metric: ['35']},
            {dimension: ['3', 'G4', 'ROC'], metric: ['35']},
            {dimension: ['2', 'OH', 'BWI'], metric: ['35']},
            {dimension: ['4', 'EV', 'HOU'], metric: ['35']},
            {dimension: ['2', 'MQ', 'COS'], metric: ['34']},
            {dimension: ['4', 'F9', 'BIS'], metric: ['34']},
            {dimension: ['1', 'NK', 'RIC'], metric: ['34']},
            {dimension: ['1', '9E', 'FAR'], metric: ['34']},
            {dimension: ['4', 'AA', 'GUC'], metric: ['34']},
            {dimension: ['4', 'EV', 'COU'], metric: ['34']},
            {dimension: ['1', 'F9', 'CHS'], metric: ['34']},
            {dimension: ['3', 'YV', 'SLC'], metric: ['34']},
            {dimension: ['4', 'EV', 'ROW'], metric: ['34']},
            {dimension: ['2', 'UA', 'EGE'], metric: ['33']},
            {dimension: ['4', 'OO', 'EGE'], metric: ['33']},
            {dimension: ['3', 'F9', 'MDT'], metric: ['33']},
            {dimension: ['2', 'G4', 'CKB'], metric: ['33']},
            {dimension: ['2', 'MQ', 'AUS'], metric: ['33']},
            {dimension: ['1', 'OH', 'EWR'], metric: ['33']},
            {dimension: ['2', 'MQ', 'MYR'], metric: ['33']},
            {dimension: ['2', 'OH', 'ROA'], metric: ['33']},
            {dimension: ['2', 'G4', 'GJT'], metric: ['33']},
            {dimension: ['1', '9E', 'MLI'], metric: ['33']},
            {dimension: ['2', 'F9', 'SDF'], metric: ['32']},
            {dimension: ['1', 'OO', 'BRO'], metric: ['32']},
            {dimension: ['4', 'OO', 'MSY'], metric: ['32']},
            {dimension: ['1', '9E', 'DHN'], metric: ['32']},
            {dimension: ['2', 'HA', 'LGB'], metric: ['31']},
            {dimension: ['3', 'MQ', 'MYR'], metric: ['31']},
            {dimension: ['3', 'G4', 'CKB'], metric: ['31']},
            {dimension: ['3', 'G4', 'GJT'], metric: ['31']},
            {dimension: ['3', 'YV', 'FLG'], metric: ['31']},
            {dimension: ['3', 'AA', 'LIT'], metric: ['31']},
            {dimension: ['3', 'F9', 'FAR'], metric: ['31']},
            {dimension: ['3', 'MQ', 'PIA'], metric: ['31']},
            {dimension: ['3', 'G4', 'HGR'], metric: ['31']},
            {dimension: ['2', '9E', 'RSW'], metric: ['31']},
            {dimension: ['3', 'MQ', 'MSY'], metric: ['31']},
            {dimension: ['3', 'MQ', 'AUS'], metric: ['31']},
            {dimension: ['3', 'G4', 'SAT'], metric: ['31']},
            {dimension: ['2', 'MQ', 'FSD'], metric: ['31']},
            {dimension: ['1', 'EV', 'SJT'], metric: ['30']},
            {dimension: ['4', 'OO', 'BQK'], metric: ['30']},
            {dimension: ['4', 'UA', 'SRQ'], metric: ['30']},
            {dimension: ['4', 'F9', 'PSP'], metric: ['30']},
            {dimension: ['2', 'UA', 'SPN'], metric: ['30']},
            {dimension: ['2', 'DL', 'STX'], metric: ['30']},
            {dimension: ['3', 'G4', 'SJU'], metric: ['30']},
            {dimension: ['1', 'G4', 'TRI'], metric: ['30']},
            {dimension: ['2', 'YX', 'SAT'], metric: ['30']},
            {dimension: ['3', 'MQ', 'HOU'], metric: ['30']},
            {dimension: ['1', 'OO', 'FLL'], metric: ['30']},
            {dimension: ['3', 'OO', 'PHL'], metric: ['30']},
            {dimension: ['3', 'YX', 'RIC'], metric: ['30']},
            {dimension: ['3', 'YV', 'PWM'], metric: ['29']},
            {dimension: ['2', 'AA', 'CRP'], metric: ['29']},
            {dimension: ['3', 'G4', 'LIT'], metric: ['29']},
            {dimension: ['1', 'EV', 'DRO'], metric: ['29']},
            {dimension: ['1', 'UA', 'GUC'], metric: ['29']},
            {dimension: ['2', '9E', 'ROA'], metric: ['29']},
            {dimension: ['1', 'OO', 'TPA'], metric: ['29']},
            {dimension: ['3', 'YX', 'TVC'], metric: ['29']},
            {dimension: ['4', 'UA', 'SYR'], metric: ['28']},
            {dimension: ['1', 'G4', 'CKB'], metric: ['28']},
            {dimension: ['1', 'G4', 'OWB'], metric: ['28']},
            {dimension: ['1', 'YV', 'PVD'], metric: ['28']},
            {dimension: ['1', 'G4', 'LIT'], metric: ['28']},
            {dimension: ['4', 'HA', 'PPG'], metric: ['28']},
            {dimension: ['1', 'YV', 'GSP'], metric: ['28']},
            {dimension: ['1', '9E', 'HSV'], metric: ['28']},
            {dimension: ['2', 'MQ', 'LSE'], metric: ['28']},
            {dimension: ['1', 'G4', 'SJU'], metric: ['28']},
            {dimension: ['2', 'MQ', 'MKE'], metric: ['28']},
            {dimension: ['1', 'OH', 'FLO'], metric: ['28']},
            {dimension: ['3', 'OO', 'CRW'], metric: ['28']},
            {dimension: ['1', 'EV', 'MCO'], metric: ['28']},
            {dimension: ['2', 'EV', 'SUX'], metric: ['28']},
            {dimension: ['3', 'F9', 'FAT'], metric: ['27']},
            {dimension: ['3', 'F9', 'ORF'], metric: ['27']},
            {dimension: ['1', 'G4', 'FCA'], metric: ['27']},
            {dimension: ['1', 'G4', 'TTN'], metric: ['27']},
            {dimension: ['2', 'G4', 'SPI'], metric: ['27']},
            {dimension: ['2', 'MQ', 'HSV'], metric: ['27']},
            {dimension: ['3', 'G4', 'SMX'], metric: ['27']},
            {dimension: ['2', '9E', 'SBN'], metric: ['27']},
            {dimension: ['1', '9E', 'ALB'], metric: ['27']},
            {dimension: ['2', 'MQ', 'MFE'], metric: ['27']},
            {dimension: ['3', 'F9', 'JAC'], metric: ['27']},
            {dimension: ['3', 'F9', 'BOI'], metric: ['27']},
            {dimension: ['1', 'MQ', 'MKE'], metric: ['27']},
            {dimension: ['4', 'OO', 'PHL'], metric: ['27']},
            {dimension: ['1', 'G4', 'ELP'], metric: ['27']},
            {dimension: ['1', 'G4', 'MTJ'], metric: ['26']},
            {dimension: ['4', 'AS', 'ADK'], metric: ['26']},
            {dimension: ['3', 'G4', 'GFK'], metric: ['26']},
            {dimension: ['1', 'G4', 'GJT'], metric: ['26']},
            {dimension: ['3', '9E', 'HSV'], metric: ['26']},
            {dimension: ['1', 'G4', 'MRY'], metric: ['26']},
            {dimension: ['2', 'YX', 'BRO'], metric: ['26']},
            {dimension: ['1', 'YV', 'HRL'], metric: ['26']},
            {dimension: ['2', 'G4', 'LRD'], metric: ['26']},
            {dimension: ['2', 'UA', 'SYR'], metric: ['26']},
            {dimension: ['1', 'G4', 'LRD'], metric: ['26']},
            {dimension: ['1', 'G4', 'COS'], metric: ['26']},
            {dimension: ['4', 'EV', 'BDL'], metric: ['26']},
            {dimension: ['4', 'NK', 'STT'], metric: ['26']},
            {dimension: ['3', 'EV', 'GUC'], metric: ['26']},
            {dimension: ['1', 'G4', 'EVV'], metric: ['26']},
            {dimension: ['1', 'G4', 'SHV'], metric: ['26']},
            {dimension: ['3', 'F9', 'BKG'], metric: ['26']},
            {dimension: ['2', 'G4', 'OWB'], metric: ['26']},
            {dimension: ['1', 'G4', 'HGR'], metric: ['26']},
            {dimension: ['1', 'G4', 'GPT'], metric: ['26']},
            {dimension: ['2', 'G4', 'OGD'], metric: ['26']},
            {dimension: ['2', 'G4', 'GPT'], metric: ['26']},
            {dimension: ['4', 'OO', 'JAX'], metric: ['26']},
            {dimension: ['2', 'G4', 'STC'], metric: ['26']},
            {dimension: ['1', 'YV', 'BOS'], metric: ['26']},
            {dimension: ['3', 'VX', 'BNA'], metric: ['26']},
            {dimension: ['2', 'G4', 'MRY'], metric: ['26']},
            {dimension: ['2', '9E', 'ACK'], metric: ['26']},
            {dimension: ['2', 'DL', 'OAJ'], metric: ['25']},
            {dimension: ['2', 'UA', 'CRP'], metric: ['25']},
            {dimension: ['4', 'AA', 'MTJ'], metric: ['25']},
            {dimension: ['2', 'YV', 'PWM'], metric: ['25']},
            {dimension: ['3', 'F9', 'UST'], metric: ['25']},
            {dimension: ['4', 'OO', 'AMA'], metric: ['25']},
            {dimension: ['1', 'G4', 'DEN'], metric: ['25']},
            {dimension: ['3', 'F9', 'SMF'], metric: ['25']},
            {dimension: ['3', 'EV', 'MSY'], metric: ['25']},
            {dimension: ['2', 'EV', 'MTJ'], metric: ['25']},
            {dimension: ['2', 'YX', 'MDT'], metric: ['24']},
            {dimension: ['2', 'YX', 'ACK'], metric: ['24']},
            {dimension: ['2', 'MQ', 'BDL'], metric: ['24']},
            {dimension: ['2', 'UA', 'SDF'], metric: ['24']},
            {dimension: ['1', 'YV', 'GRK'], metric: ['24']},
            {dimension: ['2', 'MQ', 'CHA'], metric: ['24']},
            {dimension: ['4', 'UA', 'BQN'], metric: ['24']},
            {dimension: ['2', 'YV', 'ALB'], metric: ['24']},
            {dimension: ['2', 'OH', 'BGR'], metric: ['24']},
            {dimension: ['2', 'MQ', 'CRP'], metric: ['24']},
            {dimension: ['3', 'YV', 'GUC'], metric: ['24']},
            {dimension: ['2', 'OO', 'CLL'], metric: ['24']},
            {dimension: ['1', 'UA', 'ORF'], metric: ['24']},
            {dimension: ['1', 'UA', 'DLH'], metric: ['23']},
            {dimension: ['4', 'OO', 'FSM'], metric: ['23']},
            {dimension: ['1', 'DL', 'PSC'], metric: ['23']},
            {dimension: ['1', 'YX', 'FSD'], metric: ['23']},
            {dimension: ['3', 'YV', 'CHA'], metric: ['23']},
            {dimension: ['2', 'OO', 'GNV'], metric: ['23']},
            {dimension: ['2', '9E', 'PVD'], metric: ['23']},
            {dimension: ['3', 'DL', 'STX'], metric: ['23']},
            {dimension: ['1', 'YX', 'CRP'], metric: ['23']},
            {dimension: ['2', '9E', 'MVY'], metric: ['23']},
            {dimension: ['4', 'OO', 'BOS'], metric: ['23']},
            {dimension: ['3', '9E', 'PBI'], metric: ['23']},
            {dimension: ['4', 'EV', 'TLH'], metric: ['23']},
            {dimension: ['2', 'YX', 'MLI'], metric: ['22']},
            {dimension: ['4', 'DL', 'HDN'], metric: ['22']},
            {dimension: ['2', 'OH', 'BTR'], metric: ['22']},
            {dimension: ['1', 'OO', 'SRQ'], metric: ['22']},
            {dimension: ['3', 'MQ', 'GRB'], metric: ['22']},
            {dimension: ['3', 'YV', 'BFL'], metric: ['22']},
            {dimension: ['3', 'MQ', 'RST'], metric: ['22']},
            {dimension: ['3', 'YV', 'SYR'], metric: ['22']},
            {dimension: ['1', 'MQ', 'SAV'], metric: ['22']},
            {dimension: ['4', 'EV', 'ERI'], metric: ['22']},
            {dimension: ['3', 'YV', 'EVV'], metric: ['21']},
            {dimension: ['3', 'MQ', 'TOL'], metric: ['21']},
            {dimension: ['3', 'MQ', 'HSV'], metric: ['21']},
            {dimension: ['3', 'YX', 'CAE'], metric: ['21']},
            {dimension: ['2', 'YV', 'ECP'], metric: ['21']},
            {dimension: ['1', 'AS', 'MKE'], metric: ['21']},
            {dimension: ['4', 'F9', 'GRR'], metric: ['21']},
            {dimension: ['2', 'YX', 'TPA'], metric: ['21']},
            {dimension: ['3', 'YX', 'ABQ'], metric: ['20']},
            {dimension: ['4', 'EV', 'ABQ'], metric: ['20']},
            {dimension: ['1', '9E', 'AVP'], metric: ['20']},
            {dimension: ['3', 'MQ', 'CAK'], metric: ['20']},
            {dimension: ['2', 'MQ', 'MTJ'], metric: ['20']},
            {dimension: ['2', 'F9', 'FAR'], metric: ['20']},
            {dimension: ['4', 'UA', 'MTJ'], metric: ['20']},
            {dimension: ['3', '9E', 'BMI'], metric: ['20']},
            {dimension: ['1', 'EV', 'ROW'], metric: ['20']},
            {dimension: ['2', 'UA', 'MAF'], metric: ['20']},
            {dimension: ['2', '9E', 'SRQ'], metric: ['20']},
            {dimension: ['3', '9E', 'MCO'], metric: ['20']},
            {dimension: ['2', 'EV', 'MDW'], metric: ['20']},
            {dimension: ['2', '9E', 'MCO'], metric: ['20']},
            {dimension: ['4', 'OO', 'BTV'], metric: ['19']},
            {dimension: ['3', 'EV', 'RAP'], metric: ['19']},
            {dimension: ['1', 'YX', 'CID'], metric: ['19']},
            {dimension: ['3', 'AA', 'LBB'], metric: ['19']},
            {dimension: ['2', '9E', 'FSD'], metric: ['19']},
            {dimension: ['3', 'UA', 'EGE'], metric: ['19']},
            {dimension: ['1', '9E', 'GRK'], metric: ['19']},
            {dimension: ['2', '9E', 'BIS'], metric: ['19']},
            {dimension: ['1', 'OH', 'BWI'], metric: ['19']},
            {dimension: ['1', 'YX', 'MCO'], metric: ['19']},
            {dimension: ['1', 'EV', 'PHL'], metric: ['19']},
            {dimension: ['2', 'OO', 'TPA'], metric: ['19']},
            {dimension: ['4', 'EV', 'AZO'], metric: ['18']},
            {dimension: ['3', 'G4', 'OGD'], metric: ['18']},
            {dimension: ['3', 'G4', 'MRY'], metric: ['18']},
            {dimension: ['4', 'F9', 'RNO'], metric: ['18']},
            {dimension: ['4', 'EV', 'AVL'], metric: ['18']},
            {dimension: ['4', 'UA', 'HDN'], metric: ['18']},
            {dimension: ['3', '9E', 'JAN'], metric: ['18']},
            {dimension: ['3', 'G4', 'PSP'], metric: ['18']},
            {dimension: ['4', 'VX', 'KOA'], metric: ['18']},
            {dimension: ['3', 'G4', 'OWB'], metric: ['18']},
            {dimension: ['3', 'YX', 'GSO'], metric: ['18']},
            {dimension: ['3', 'MQ', 'JLN'], metric: ['18']},
            {dimension: ['3', 'OO', 'PBG'], metric: ['18']},
            {dimension: ['3', 'YX', 'GJT'], metric: ['18']},
            {dimension: ['1', 'OH', 'AUS'], metric: ['18']},
            {dimension: ['3', 'G4', 'LRD'], metric: ['18']},
            {dimension: ['3', 'YV', 'BZN'], metric: ['17']},
            {dimension: ['1', '9E', 'ABE'], metric: ['17']},
            {dimension: ['2', 'YX', 'MVY'], metric: ['17']},
            {dimension: ['2', 'DL', 'SBN'], metric: ['17']},
            {dimension: ['1', 'OO', 'AMA'], metric: ['17']},
            {dimension: ['1', '9E', 'OMA'], metric: ['17']},
            {dimension: ['1', 'YV', 'DSM'], metric: ['17']},
            {dimension: ['3', 'MQ', 'EWR'], metric: ['17']},
            {dimension: ['1', '9E', 'GRB'], metric: ['17']},
            {dimension: ['2', 'F9', 'FAT'], metric: ['17']},
            {dimension: ['1', 'MQ', 'MLB'], metric: ['17']},
            {dimension: ['4', 'EV', 'OKC'], metric: ['17']},
            {dimension: ['3', 'OH', 'RAP'], metric: ['17']},
            {dimension: ['3', 'G4', 'SPI'], metric: ['17']},
            {dimension: ['3', 'G4', 'GPT'], metric: ['17']},
            {dimension: ['1', 'MQ', 'FLO'], metric: ['17']},
            {dimension: ['1', '9E', 'TPA'], metric: ['17']},
            {dimension: ['3', 'YX', 'PBI'], metric: ['16']},
            {dimension: ['1', 'EV', 'BIS'], metric: ['16']},
            {dimension: ['1', '9E', 'SRQ'], metric: ['16']},
            {dimension: ['4', 'B6', 'MVY'], metric: ['16']},
            {dimension: ['2', 'MQ', 'AGS'], metric: ['16']},
            {dimension: ['2', 'YV', 'BOS'], metric: ['16']},
            {dimension: ['3', 'EV', 'AUS'], metric: ['16']},
            {dimension: ['3', 'YX', 'CRP'], metric: ['16']},
            {dimension: ['3', 'YX', 'FAR'], metric: ['16']},
            {dimension: ['2', 'YX', 'AGS'], metric: ['16']},
            {dimension: ['4', 'DL', 'SBN'], metric: ['15']},
            {dimension: ['2', 'OH', 'BUF'], metric: ['15']},
            {dimension: ['3', '9E', 'ALB'], metric: ['15']},
            {dimension: ['1', 'YX', 'MYR'], metric: ['15']},
            {dimension: ['1', 'MQ', 'MLU'], metric: ['15']},
            {dimension: ['3', 'YV', 'BOS'], metric: ['15']},
            {dimension: ['2', 'OH', 'MCI'], metric: ['15']},
            {dimension: ['3', 'OO', 'MIA'], metric: ['15']},
            {dimension: ['1', 'F9', 'ELP'], metric: ['14']},
            {dimension: ['1', 'YV', 'GRI'], metric: ['14']},
            {dimension: ['3', 'G4', 'OGS'], metric: ['14']},
            {dimension: ['1', 'EV', 'PBI'], metric: ['14']},
            {dimension: ['3', 'OO', 'MCO'], metric: ['14']},
            {dimension: ['3', '9E', 'RAP'], metric: ['14']},
            {dimension: ['2', 'YV', 'TYS'], metric: ['13']},
            {dimension: ['1', 'F9', 'LIT'], metric: ['13']},
            {dimension: ['2', 'YX', 'CRP'], metric: ['13']},
            {dimension: ['1', 'YX', 'ICT'], metric: ['13']},
            {dimension: ['3', 'DL', 'SBN'], metric: ['13']},
            {dimension: ['2', 'YV', 'ROC'], metric: ['13']},
            {dimension: ['1', 'EV', 'MHK'], metric: ['13']},
            {dimension: ['2', '9E', 'DEN'], metric: ['13']},
            {dimension: ['1', 'YX', 'SAT'], metric: ['13']},
            {dimension: ['4', 'DL', 'EGE'], metric: ['13']},
            {dimension: ['4', 'UA', 'GUC'], metric: ['12']},
            {dimension: ['4', 'OO', 'PBI'], metric: ['12']},
            {dimension: ['4', 'EV', 'EYW'], metric: ['12']},
            {dimension: ['4', 'EV', 'ELM'], metric: ['12']},
            {dimension: ['4', 'OO', 'MMH'], metric: ['12']},
            {dimension: ['2', 'OH', 'RAP'], metric: ['12']},
            {dimension: ['3', 'G4', 'STC'], metric: ['12']},
            {dimension: ['3', 'YX', 'IAD'], metric: ['12']},
            {dimension: ['3', 'OO', 'RSW'], metric: ['12']},
            {dimension: ['3', 'EV', 'SAT'], metric: ['12']},
            {dimension: ['3', 'YV', 'MDT'], metric: ['12']},
            {dimension: ['1', 'MQ', 'MTJ'], metric: ['12']},
            {dimension: ['3', 'MQ', 'BIS'], metric: ['11']},
            {dimension: ['2', 'UA', 'MTJ'], metric: ['11']},
            {dimension: ['3', 'UA', 'SRQ'], metric: ['11']},
            {dimension: ['3', 'OH', 'ROA'], metric: ['11']},
            {dimension: ['1', 'YX', 'RAP'], metric: ['11']},
            {dimension: ['2', 'YV', 'GSP'], metric: ['11']},
            {dimension: ['3', 'MQ', 'FWA'], metric: ['11']},
            {dimension: ['4', 'DL', 'PSP'], metric: ['11']},
            {dimension: ['2', 'MQ', 'ABQ'], metric: ['11']},
            {dimension: ['2', 'EV', 'ACT'], metric: ['11']},
            {dimension: ['4', 'DL', 'STX'], metric: ['11']},
            {dimension: ['3', 'F9', 'PSP'], metric: ['11']},
            {dimension: ['1', '9E', 'LNK'], metric: ['11']},
            {dimension: ['1', 'EV', 'DAL'], metric: ['11']},
            {dimension: ['1', '9E', 'MIA'], metric: ['11']},
            {dimension: ['1', 'OO', 'MIA'], metric: ['11']},
            {dimension: ['1', '9E', 'PBI'], metric: ['11']},
            {dimension: ['4', 'DL', 'MTJ'], metric: ['10']},
            {dimension: ['1', 'YV', 'ROC'], metric: ['10']},
            {dimension: ['2', 'F9', 'JAC'], metric: ['10']},
            {dimension: ['1', 'OO', 'CRP'], metric: ['10']},
            {dimension: ['2', 'OH', 'AUS'], metric: ['10']},
            {dimension: ['2', 'OO', 'MCO'], metric: ['10']},
            {dimension: ['3', 'YX', 'TLH'], metric: ['10']},
            {dimension: ['4', 'EV', 'PHL'], metric: ['10']},
            {dimension: ['3', 'VX', 'MSY'], metric: ['10']},
            {dimension: ['2', 'G4', 'TTN'], metric: ['9']},
            {dimension: ['1', 'MQ', 'VPS'], metric: ['9']},
            {dimension: ['2', 'MQ', 'ICT'], metric: ['9']},
            {dimension: ['2', 'G4', 'COS'], metric: ['9']},
            {dimension: ['2', 'OO', 'VEL'], metric: ['9']},
            {dimension: ['4', 'OO', 'GNV'], metric: ['9']},
            {dimension: ['2', 'EV', 'SPS'], metric: ['9']},
            {dimension: ['1', 'OO', 'RSW'], metric: ['9']},
            {dimension: ['1', '9E', 'GSO'], metric: ['9']},
            {dimension: ['3', '9E', 'SGF'], metric: ['9']},
            {dimension: ['1', 'OO', 'MCO'], metric: ['9']},
            {dimension: ['2', 'YV', 'SJC'], metric: ['9']},
            {dimension: ['3', 'YX', 'RAP'], metric: ['8']},
            {dimension: ['4', 'EV', 'GRI'], metric: ['8']},
            {dimension: ['3', 'YX', 'MFE'], metric: ['8']},
            {dimension: ['3', 'MQ', 'ABQ'], metric: ['8']},
            {dimension: ['3', 'EV', 'MDT'], metric: ['8']},
            {dimension: ['1', 'YV', 'CAE'], metric: ['8']},
            {dimension: ['2', 'F9', 'BKG'], metric: ['8']},
            {dimension: ['3', 'UA', 'BGR'], metric: ['8']},
            {dimension: ['1', 'EV', 'GGG'], metric: ['8']},
            {dimension: ['3', 'MQ', 'MSP'], metric: ['8']},
            {dimension: ['3', '9E', 'DEN'], metric: ['8']},
            {dimension: ['3', '9E', 'TPA'], metric: ['8']},
            {dimension: ['2', 'EV', 'SLC'], metric: ['8']},
            {dimension: ['3', 'EV', 'IAD'], metric: ['8']},
            {dimension: ['4', 'EV', 'MCO'], metric: ['8']},
            {dimension: ['3', 'MQ', 'EYW'], metric: ['7']},
            {dimension: ['2', 'UA', 'HDN'], metric: ['7']},
            {dimension: ['2', 'YX', 'TVC'], metric: ['7']},
            {dimension: ['3', '9E', 'BIS'], metric: ['7']},
            {dimension: ['3', 'OO', 'MFE'], metric: ['7']},
            {dimension: ['1', 'F9', 'TUL'], metric: ['7']},
            {dimension: ['3', 'UA', 'PNS'], metric: ['7']},
            {dimension: ['3', 'YV', 'ILM'], metric: ['7']},
            {dimension: ['3', 'UA', 'TVC'], metric: ['7']},
            {dimension: ['2', 'OO', 'RSW'], metric: ['7']},
            {dimension: ['1', 'EV', 'BPT'], metric: ['7']},
            {dimension: ['3', 'EV', 'RSW'], metric: ['7']},
            {dimension: ['3', 'EV', 'FLG'], metric: ['7']},
            {dimension: ['1', 'MQ', 'HSV'], metric: ['7']},
            {dimension: ['2', '9E', 'MOT'], metric: ['7']},
            {dimension: ['3', 'OH', 'AUS'], metric: ['7']},
            {dimension: ['1', 'YV', 'ILM'], metric: ['7']},
            {dimension: ['1', '9E', 'DEN'], metric: ['7']},
            {dimension: ['3', 'YX', 'DAY'], metric: ['7']},
            {dimension: ['1', 'AA', 'SBA'], metric: ['7']},
            {dimension: ['2', 'EV', 'AUS'], metric: ['7']},
            {dimension: ['2', 'EV', 'RSW'], metric: ['7']},
            {dimension: ['3', 'OH', 'MCI'], metric: ['7']},
            {dimension: ['3', 'EV', 'MCO'], metric: ['7']},
            {dimension: ['2', 'EV', 'MCO'], metric: ['7']},
            {dimension: ['3', 'YV', 'SJC'], metric: ['7']},
            {dimension: ['4', 'OO', 'SAV'], metric: ['7']},
            {dimension: ['4', 'OO', 'AEX'], metric: ['6']},
            {dimension: ['2', 'AA', 'HDN'], metric: ['6']},
            {dimension: ['1', 'YV', 'MYR'], metric: ['6']},
            {dimension: ['2', 'EV', 'GCK'], metric: ['6']},
            {dimension: ['3', 'OO', 'PRC'], metric: ['6']},
            {dimension: ['1', '9E', 'ILM'], metric: ['6']},
            {dimension: ['2', 'AA', 'MTJ'], metric: ['6']},
            {dimension: ['4', 'EV', 'MLB'], metric: ['6']},
            {dimension: ['2', 'AA', 'GUC'], metric: ['6']},
            {dimension: ['3', 'OO', 'AMA'], metric: ['6']},
            {dimension: ['2', 'EV', 'RAP'], metric: ['6']},
            {dimension: ['3', '9E', 'PVD'], metric: ['6']},
            {dimension: ['3', '9E', 'FSD'], metric: ['6']},
            {dimension: ['2', 'YV', 'MIA'], metric: ['6']},
            {dimension: ['3', 'YV', 'SMF'], metric: ['6']},
            {dimension: ['4', 'EV', 'SCE'], metric: ['6']},
            {dimension: ['2', 'OO', 'PBI'], metric: ['5']},
            {dimension: ['3', '9E', 'MYR'], metric: ['5']},
            {dimension: ['4', 'OO', 'MHK'], metric: ['5']},
            {dimension: ['1', 'MQ', 'BIS'], metric: ['5']},
            {dimension: ['1', '9E', 'LAN'], metric: ['5']},
            {dimension: ['2', 'OO', 'MMH'], metric: ['5']},
            {dimension: ['1', 'YX', 'PHF'], metric: ['5']},
            {dimension: ['1', 'AA', 'DAB'], metric: ['5']},
            {dimension: ['2', 'YV', 'MDT'], metric: ['5']},
            {dimension: ['1', 'DL', 'TVC'], metric: ['5']},
            {dimension: ['2', 'YV', 'GUC'], metric: ['5']},
            {dimension: ['3', '9E', 'ROA'], metric: ['5']},
            {dimension: ['3', 'F9', 'SBA'], metric: ['5']},
            {dimension: ['1', 'YX', 'SLC'], metric: ['5']},
            {dimension: ['1', 'YV', 'MIA'], metric: ['5']},
            {dimension: ['4', 'EV', 'MDW'], metric: ['5']},
            {dimension: ['3', 'VX', 'IND'], metric: ['5']},
            {dimension: ['3', 'MQ', 'MAF'], metric: ['5']},
            {dimension: ['2', 'YV', 'BZN'], metric: ['4']},
            {dimension: ['2', 'UA', 'BGR'], metric: ['4']},
            {dimension: ['1', '9E', 'ELM'], metric: ['4']},
            {dimension: ['3', '9E', 'LIT'], metric: ['4']},
            {dimension: ['3', 'YX', 'BTR'], metric: ['4']},
            {dimension: ['2', 'YV', 'FWA'], metric: ['4']},
            {dimension: ['2', 'MQ', 'HPN'], metric: ['4']},
            {dimension: ['2', 'UA', 'PNS'], metric: ['4']},
            {dimension: ['4', 'EV', 'JAX'], metric: ['4']},
            {dimension: ['2', 'YV', 'ILM'], metric: ['4']},
            {dimension: ['2', 'MQ', 'GRB'], metric: ['4']},
            {dimension: ['2', 'YV', 'FLG'], metric: ['4']},
            {dimension: ['4', 'AA', 'ANC'], metric: ['4']},
            {dimension: ['2', 'YV', 'MGM'], metric: ['4']},
            {dimension: ['4', 'AA', 'BZN'], metric: ['4']},
            {dimension: ['1', 'YV', 'ECP'], metric: ['4']},
            {dimension: ['3', 'YX', 'TUL'], metric: ['4']},
            {dimension: ['1', 'YV', 'XNA'], metric: ['4']},
            {dimension: ['2', 'DL', 'HDN'], metric: ['4']},
            {dimension: ['2', 'MQ', 'EYW'], metric: ['4']},
            {dimension: ['2', 'UA', 'TVC'], metric: ['4']},
            {dimension: ['2', 'EV', 'FLG'], metric: ['4']},
            {dimension: ['3', 'MQ', 'MTJ'], metric: ['4']},
            {dimension: ['1', 'UA', 'BTR'], metric: ['4']},
            {dimension: ['4', 'F9', 'FLL'], metric: ['4']},
            {dimension: ['4', 'EV', 'ALB'], metric: ['4']},
            {dimension: ['2', 'MQ', 'MSY'], metric: ['4']},
            {dimension: ['2', 'YX', 'MCO'], metric: ['4']},
            {dimension: ['2', '9E', 'RAP'], metric: ['4']},
            {dimension: ['4', 'OO', 'HRL'], metric: ['3']},
            {dimension: ['4', 'OO', 'VPS'], metric: ['3']},
            {dimension: ['1', '9E', 'BIS'], metric: ['3']},
            {dimension: ['2', 'YX', 'RAP'], metric: ['3']},
            {dimension: ['3', 'OO', 'CAE'], metric: ['3']},
            {dimension: ['2', 'EV', 'TXK'], metric: ['3']},
            {dimension: ['1', 'YX', 'BZN'], metric: ['3']},
            {dimension: ['2', '9E', 'LIT'], metric: ['3']},
            {dimension: ['1', 'YV', 'ROW'], metric: ['3']},
            {dimension: ['2', 'EV', 'HDN'], metric: ['3']},
            {dimension: ['1', 'YV', 'GSO'], metric: ['3']},
            {dimension: ['2', 'YV', 'XNA'], metric: ['3']},
            {dimension: ['2', '9E', 'FAR'], metric: ['3']},
            {dimension: ['2', 'OO', 'AMA'], metric: ['3']},
            {dimension: ['1', '9E', 'JAN'], metric: ['3']},
            {dimension: ['2', 'YV', 'CHA'], metric: ['3']},
            {dimension: ['2', 'EV', 'PHL'], metric: ['3']},
            {dimension: ['3', 'EV', 'MGM'], metric: ['2']},
            {dimension: ['2', 'DL', 'EGE'], metric: ['2']},
            {dimension: ['1', 'YX', 'BRO'], metric: ['2']},
            {dimension: ['1', '9E', 'FSD'], metric: ['2']},
            {dimension: ['2', '9E', 'HRL'], metric: ['2']},
            {dimension: ['1', 'OO', 'FAY'], metric: ['2']},
            {dimension: ['1', 'MQ', 'GUC'], metric: ['2']},
            {dimension: ['4', 'F9', 'GSO'], metric: ['2']},
            {dimension: ['4', 'OO', 'JAN'], metric: ['2']},
            {dimension: ['2', 'MQ', 'RST'], metric: ['2']},
            {dimension: ['1', 'F9', 'BZN'], metric: ['2']},
            {dimension: ['1', 'F9', 'BOI'], metric: ['2']},
            {dimension: ['2', 'MQ', 'RAP'], metric: ['2']},
            {dimension: ['3', '9E', 'ABE'], metric: ['2']},
            {dimension: ['1', 'G4', 'AVP'], metric: ['2']},
            {dimension: ['1', 'F9', 'GSO'], metric: ['2']},
            {dimension: ['1', 'G4', 'YNG'], metric: ['2']},
            {dimension: ['4', 'OO', 'PWM'], metric: ['2']},
            {dimension: ['3', 'UA', 'MTJ'], metric: ['2']},
            {dimension: ['4', 'F9', 'BZN'], metric: ['2']},
            {dimension: ['1', 'UA', 'PVD'], metric: ['2']},
            {dimension: ['2', '9E', 'GFK'], metric: ['2']},
            {dimension: ['1', '9E', 'LFT'], metric: ['2']},
            {dimension: ['2', 'UA', 'GUC'], metric: ['2']},
            {dimension: ['3', 'YX', 'BWI'], metric: ['2']},
            {dimension: ['3', 'MQ', 'MFE'], metric: ['2']},
            {dimension: ['2', 'YV', 'DAY'], metric: ['2']},
            {dimension: ['2', 'YV', 'SMF'], metric: ['2']},
            {dimension: ['4', 'EV', 'SLC'], metric: ['2']},
            {dimension: ['1', 'F9', 'BIS'], metric: ['2']},
            {dimension: ['2', 'YV', 'PDX'], metric: ['2']},
            {dimension: ['3', 'YX', 'MCO'], metric: ['2']},
            {dimension: ['2', 'OH', 'MSP'], metric: ['2']},
            {dimension: ['4', 'F9', 'MSO'], metric: ['2']},
            {dimension: ['1', '9E', 'LIT'], metric: ['2']},
            {dimension: ['2', '9E', 'DHN'], metric: ['1']},
            {dimension: ['1', 'F9', 'MSO'], metric: ['1']},
            {dimension: ['1', 'G4', 'CPR'], metric: ['1']},
            {dimension: ['1', '9E', 'AZO'], metric: ['1']},
            {dimension: ['1', 'OO', 'MFE'], metric: ['1']},
            {dimension: ['1', '9E', 'MLB'], metric: ['1']},
            {dimension: ['2', 'UA', 'AGS'], metric: ['1']},
            {dimension: ['4', 'OO', 'SWO'], metric: ['1']},
            {dimension: ['3', '9E', 'MDT'], metric: ['1']},
            {dimension: ['1', '9E', 'TUL'], metric: ['1']},
            {dimension: ['1', '9E', 'HOU'], metric: ['1']},
            {dimension: ['2', 'EV', 'GUC'], metric: ['1']},
            {dimension: ['3', '9E', 'CSG'], metric: ['1']},
            {dimension: ['3', '9E', 'VLD'], metric: ['1']},
            {dimension: ['2', '9E', 'VPS'], metric: ['1']},
            {dimension: ['4', 'EV', 'CSG'], metric: ['1']},
            {dimension: ['2', 'VX', 'SLC'], metric: ['1']},
            {dimension: ['1', 'YX', 'TYS'], metric: ['1']},
            {dimension: ['3', '9E', 'MOT'], metric: ['1']},
            {dimension: ['2', '9E', 'CAK'], metric: ['1']},
            {dimension: ['2', 'EV', 'PBI'], metric: ['1']},
            {dimension: ['3', 'EV', 'SLC'], metric: ['1']},
            {dimension: ['2', 'EV', 'BIS'], metric: ['1']},
            {dimension: ['2', 'YV', 'AGS'], metric: ['1']},
            {dimension: ['4', 'OO', 'RSW'], metric: ['1']},
            {dimension: ['1', 'YX', 'BOI'], metric: ['1']},
            {dimension: ['3', 'F9', 'ICT'], metric: ['1']},
            {dimension: ['1', 'F9', 'FSD'], metric: ['1']},
            {dimension: ['2', '9E', 'MIA'], metric: ['1']},
            {dimension: ['4', 'EV', 'JFK'], metric: ['1']},
            {dimension: ['3', '9E', 'MIA'], metric: ['1']},
            {dimension: ['2', 'OO', 'MIA'], metric: ['1']},
            {dimension: ['3', '9E', 'SDF'], metric: ['1']},
            {dimension: ['2', '9E', 'ALB'], metric: ['1']},
            {dimension: ['2', 'EV', 'MDT'], metric: ['1']},
            {dimension: ['4', 'OO', 'FNL'], metric: ['1']},
            {dimension: ['4', 'EV', 'MDT'], metric: ['1']},
          ],
        },
        fields: {
          dimension: [
            {
              id: 'qt_cwxaa7uuyb',
              name: 'Quarter',
              type: 'NUMBER',
              concept: 'DIMENSION',
            },
            {
              id: 'qt_tvka9qvuyb',
              name: 'Carrier',
              type: 'TEXT',
              concept: 'DIMENSION',
            },
            {
              id: 'qt_yj6ubrvuyb',
              name: 'Dest',
              type: 'TEXT',
              concept: 'DIMENSION',
            },
          ],
          metric: [
            {
              id: 'qt_dwxaa7uuyb',
              name: 'Record Count',
              type: 'NUMBER',
              concept: 'METRIC',
            },
          ],
        },
        style: {
          arcOutline: {
            value: {color: '#B71C1C', opacity: 1},
            defaultValue: '#FFFFFF',
          },
          arcOpacity: {value: 0.3, defaultValue: 1},
          arcColors: {value: 'schemePastel1', defaultValue: 'schemeCategory10'},
        },
        theme: {
          themeFillColor: {color: '#fff', opacity: 1},
          themeFontColor: {color: '#616161', opacity: 1},
          themeFontFamily: 'Roboto',
          themeAccentFillColor: {color: '#4285F4', opacity: 1},
          themeAccentFontColor: {color: '#EFEFEF', opacity: 1},
          themeAccentFontFamily: 'Roboto',
          themeSeriesColor: [
            {color: '#4285F4', opacity: 1},
            {color: '#DB4437', opacity: 1},
            {color: '#F4B400', opacity: 1},
            {color: '#0F9D58', opacity: 1},
            {color: '#AB47BC', opacity: 1},
            {color: '#00ACC1', opacity: 1},
            {color: '#FF7043', opacity: 1},
            {color: '#9E9D24', opacity: 1},
            {color: '#5C6BC0', opacity: 1},
            {color: '#F06292', opacity: 1},
            {color: '#00796b', opacity: 1},
            {color: '#c2185b', opacity: 1},
            {color: '#7e57c2', opacity: 1},
            {color: '#03a9f4', opacity: 1},
            {color: '#8bc34a', opacity: 1},
            {color: '#fdd835', opacity: 1},
            {color: '#fb8c00', opacity: 1},
            {color: '#8d6e63', opacity: 1},
            {color: '#9e9e9e', opacity: 1},
            {color: '#607d8b', opacity: 1},
          ],
          themeIncreaseColor: {color: '#388e3c', opacity: 1},
          themeDecreaseColor: {color: '#f44336', opacity: 1},
          themeGridColor: {color: '#e9e9e9', opacity: 1},
        },
        interactions: {onClick: {value: {}, supportedActions: ['FILTER']}},
      });
  },
]);
