!(function(n) {
  var t = {};
  function e(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = {i: r, l: !1, exports: {}});
    return n[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
  }
  (e.m = n),
    (e.c = t),
    (e.d = function(n, t, r) {
      e.o(n, t) || Object.defineProperty(n, t, {enumerable: !0, get: r});
    }),
    (e.r = function(n) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, {value: 'Module'}),
        Object.defineProperty(n, '__esModule', {value: !0});
    }),
    (e.t = function(n, t) {
      if ((1 & t && (n = e(n)), 8 & t)) return n;
      if (4 & t && 'object' == typeof n && n && n.__esModule) return n;
      var r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, 'default', {enumerable: !0, value: n}),
        2 & t && 'string' != typeof n)
      )
        for (var i in n)
          e.d(
            r,
            i,
            function(t) {
              return n[t];
            }.bind(null, i)
          );
      return r;
    }),
    (e.n = function(n) {
      var t =
        n && n.__esModule
          ? function() {
              return n.default;
            }
          : function() {
              return n;
            };
      return e.d(t, 'a', t), t;
    }),
    (e.o = function(n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }),
    (e.p = ''),
    e((e.s = 7));
})([
  function(n, t, e) {
    'use strict';
    var r = function(n, t, e) {
      (n.prototype = t.prototype = e), (e.constructor = n);
    };
    function i(n, t) {
      var e = Object.create(n.prototype);
      for (var r in t) e[r] = t[r];
      return e;
    }
    function o() {}
    var u = '\\s*([+-]?\\d+)\\s*',
      a = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
      c = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
      f = /^#([0-9a-f]{3})$/,
      s = /^#([0-9a-f]{6})$/,
      l = new RegExp('^rgb\\(' + [u, u, u] + '\\)$'),
      h = new RegExp('^rgb\\(' + [c, c, c] + '\\)$'),
      d = new RegExp('^rgba\\(' + [u, u, u, a] + '\\)$'),
      p = new RegExp('^rgba\\(' + [c, c, c, a] + '\\)$'),
      v = new RegExp('^hsl\\(' + [a, c, c] + '\\)$'),
      m = new RegExp('^hsla\\(' + [a, c, c, a] + '\\)$'),
      y = {
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
    function g(n) {
      var t;
      return (
        (n = (n + '').trim().toLowerCase()),
        (t = f.exec(n))
          ? new M(
              (((t = parseInt(t[1], 16)) >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (240 & t),
              ((15 & t) << 4) | (15 & t),
              1
            )
          : (t = s.exec(n))
          ? _(parseInt(t[1], 16))
          : (t = l.exec(n))
          ? new M(t[1], t[2], t[3], 1)
          : (t = h.exec(n))
          ? new M((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, 1)
          : (t = d.exec(n))
          ? b(t[1], t[2], t[3], t[4])
          : (t = p.exec(n))
          ? b((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, t[4])
          : (t = v.exec(n))
          ? C(t[1], t[2] / 100, t[3] / 100, 1)
          : (t = m.exec(n))
          ? C(t[1], t[2] / 100, t[3] / 100, t[4])
          : y.hasOwnProperty(n)
          ? _(y[n])
          : 'transparent' === n
          ? new M(NaN, NaN, NaN, 0)
          : null
      );
    }
    function _(n) {
      return new M((n >> 16) & 255, (n >> 8) & 255, 255 & n, 1);
    }
    function b(n, t, e, r) {
      return r <= 0 && (n = t = e = NaN), new M(n, t, e, r);
    }
    function x(n) {
      return (
        n instanceof o || (n = g(n)),
        n ? new M((n = n.rgb()).r, n.g, n.b, n.opacity) : new M()
      );
    }
    function w(n, t, e, r) {
      return 1 === arguments.length ? x(n) : new M(n, t, e, null == r ? 1 : r);
    }
    function M(n, t, e, r) {
      (this.r = +n), (this.g = +t), (this.b = +e), (this.opacity = +r);
    }
    function E(n) {
      return (
        ((n = Math.max(0, Math.min(255, Math.round(n) || 0))) < 16 ? '0' : '') +
        n.toString(16)
      );
    }
    function C(n, t, e, r) {
      return (
        r <= 0
          ? (n = t = e = NaN)
          : e <= 0 || e >= 1
          ? (n = t = NaN)
          : t <= 0 && (n = NaN),
        new N(n, t, e, r)
      );
    }
    function R(n, t, e, r) {
      return 1 === arguments.length
        ? (function(n) {
            if (n instanceof N) return new N(n.h, n.s, n.l, n.opacity);
            if ((n instanceof o || (n = g(n)), !n)) return new N();
            if (n instanceof N) return n;
            var t = (n = n.rgb()).r / 255,
              e = n.g / 255,
              r = n.b / 255,
              i = Math.min(t, e, r),
              u = Math.max(t, e, r),
              a = NaN,
              c = u - i,
              f = (u + i) / 2;
            return (
              c
                ? ((a =
                    t === u
                      ? (e - r) / c + 6 * (e < r)
                      : e === u
                      ? (r - t) / c + 2
                      : (t - e) / c + 4),
                  (c /= f < 0.5 ? u + i : 2 - u - i),
                  (a *= 60))
                : (c = f > 0 && f < 1 ? 0 : a),
              new N(a, c, f, n.opacity)
            );
          })(n)
        : new N(n, t, e, null == r ? 1 : r);
    }
    function N(n, t, e, r) {
      (this.h = +n), (this.s = +t), (this.l = +e), (this.opacity = +r);
    }
    function A(n, t, e) {
      return (
        255 *
        (n < 60
          ? t + ((e - t) * n) / 60
          : n < 180
          ? e
          : n < 240
          ? t + ((e - t) * (240 - n)) / 60
          : t)
      );
    }
    r(o, g, {
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
      r(
        M,
        w,
        i(o, {
          brighter: function(n) {
            return (
              (n = null == n ? 1 / 0.7 : Math.pow(1 / 0.7, n)),
              new M(this.r * n, this.g * n, this.b * n, this.opacity)
            );
          },
          darker: function(n) {
            return (
              (n = null == n ? 0.7 : Math.pow(0.7, n)),
              new M(this.r * n, this.g * n, this.b * n, this.opacity)
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
            return '#' + E(this.r) + E(this.g) + E(this.b);
          },
          toString: function() {
            var n = this.opacity;
            return (
              (1 === (n = isNaN(n) ? 1 : Math.max(0, Math.min(1, n)))
                ? 'rgb('
                : 'rgba(') +
              Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
              ', ' +
              Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
              ', ' +
              Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
              (1 === n ? ')' : ', ' + n + ')')
            );
          },
        })
      ),
      r(
        N,
        R,
        i(o, {
          brighter: function(n) {
            return (
              (n = null == n ? 1 / 0.7 : Math.pow(1 / 0.7, n)),
              new N(this.h, this.s, this.l * n, this.opacity)
            );
          },
          darker: function(n) {
            return (
              (n = null == n ? 0.7 : Math.pow(0.7, n)),
              new N(this.h, this.s, this.l * n, this.opacity)
            );
          },
          rgb: function() {
            var n = (this.h % 360) + 360 * (this.h < 0),
              t = isNaN(n) || isNaN(this.s) ? 0 : this.s,
              e = this.l,
              r = e + (e < 0.5 ? e : 1 - e) * t,
              i = 2 * e - r;
            return new M(
              A(n >= 240 ? n - 240 : n + 120, i, r),
              A(n, i, r),
              A(n < 120 ? n + 240 : n - 120, i, r),
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
    var T = Math.PI / 180,
      S = 180 / Math.PI,
      k = 0.96422,
      U = 1,
      Y = 0.82521,
      O = 4 / 29,
      P = 6 / 29,
      D = 3 * P * P,
      I = P * P * P;
    function L(n) {
      if (n instanceof q) return new q(n.l, n.a, n.b, n.opacity);
      if (n instanceof W) {
        if (isNaN(n.h)) return new q(n.l, 0, 0, n.opacity);
        var t = n.h * T;
        return new q(n.l, Math.cos(t) * n.c, Math.sin(t) * n.c, n.opacity);
      }
      n instanceof M || (n = x(n));
      var e,
        r,
        i = H(n.r),
        o = H(n.g),
        u = H(n.b),
        a = F((0.2225045 * i + 0.7168786 * o + 0.0606169 * u) / U);
      return (
        i === o && o === u
          ? (e = r = a)
          : ((e = F((0.4360747 * i + 0.3850649 * o + 0.1430804 * u) / k)),
            (r = F((0.0139322 * i + 0.0971045 * o + 0.7141733 * u) / Y))),
        new q(116 * a - 16, 500 * (e - a), 200 * (a - r), n.opacity)
      );
    }
    function B(n, t) {
      return new q(n, 0, 0, null == t ? 1 : t);
    }
    function z(n, t, e, r) {
      return 1 === arguments.length ? L(n) : new q(n, t, e, null == r ? 1 : r);
    }
    function q(n, t, e, r) {
      (this.l = +n), (this.a = +t), (this.b = +e), (this.opacity = +r);
    }
    function F(n) {
      return n > I ? Math.pow(n, 1 / 3) : n / D + O;
    }
    function j(n) {
      return n > P ? n * n * n : D * (n - O);
    }
    function G(n) {
      return (
        255 *
        (n <= 0.0031308 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - 0.055)
      );
    }
    function H(n) {
      return (n /= 255) <= 0.04045
        ? n / 12.92
        : Math.pow((n + 0.055) / 1.055, 2.4);
    }
    function X(n) {
      if (n instanceof W) return new W(n.h, n.c, n.l, n.opacity);
      if ((n instanceof q || (n = L(n)), 0 === n.a && 0 === n.b))
        return new W(NaN, 0, n.l, n.opacity);
      var t = Math.atan2(n.b, n.a) * S;
      return new W(
        t < 0 ? t + 360 : t,
        Math.sqrt(n.a * n.a + n.b * n.b),
        n.l,
        n.opacity
      );
    }
    function V(n, t, e, r) {
      return 1 === arguments.length ? X(n) : new W(e, t, n, null == r ? 1 : r);
    }
    function K(n, t, e, r) {
      return 1 === arguments.length ? X(n) : new W(n, t, e, null == r ? 1 : r);
    }
    function W(n, t, e, r) {
      (this.h = +n), (this.c = +t), (this.l = +e), (this.opacity = +r);
    }
    r(
      q,
      z,
      i(o, {
        brighter: function(n) {
          return new q(
            this.l + 18 * (null == n ? 1 : n),
            this.a,
            this.b,
            this.opacity
          );
        },
        darker: function(n) {
          return new q(
            this.l - 18 * (null == n ? 1 : n),
            this.a,
            this.b,
            this.opacity
          );
        },
        rgb: function() {
          var n = (this.l + 16) / 116,
            t = isNaN(this.a) ? n : n + this.a / 500,
            e = isNaN(this.b) ? n : n - this.b / 200;
          return new M(
            G(
              3.1338561 * (t = k * j(t)) -
                1.6168667 * (n = U * j(n)) -
                0.4906146 * (e = Y * j(e))
            ),
            G(-0.9787684 * t + 1.9161415 * n + 0.033454 * e),
            G(0.0719453 * t - 0.2289914 * n + 1.4052427 * e),
            this.opacity
          );
        },
      })
    ),
      r(
        W,
        K,
        i(o, {
          brighter: function(n) {
            return new W(
              this.h,
              this.c,
              this.l + 18 * (null == n ? 1 : n),
              this.opacity
            );
          },
          darker: function(n) {
            return new W(
              this.h,
              this.c,
              this.l - 18 * (null == n ? 1 : n),
              this.opacity
            );
          },
          rgb: function() {
            return L(this).rgb();
          },
        })
      );
    var Z = -0.14861,
      $ = 1.78277,
      Q = -0.29227,
      J = -0.90649,
      nn = 1.97294,
      tn = nn * J,
      en = nn * $,
      rn = $ * Q - J * Z;
    function on(n, t, e, r) {
      return 1 === arguments.length
        ? (function(n) {
            if (n instanceof un) return new un(n.h, n.s, n.l, n.opacity);
            n instanceof M || (n = x(n));
            var t = n.r / 255,
              e = n.g / 255,
              r = n.b / 255,
              i = (rn * r + tn * t - en * e) / (rn + tn - en),
              o = r - i,
              u = (nn * (e - i) - Q * o) / J,
              a = Math.sqrt(u * u + o * o) / (nn * i * (1 - i)),
              c = a ? Math.atan2(u, o) * S - 120 : NaN;
            return new un(c < 0 ? c + 360 : c, a, i, n.opacity);
          })(n)
        : new un(n, t, e, null == r ? 1 : r);
    }
    function un(n, t, e, r) {
      (this.h = +n), (this.s = +t), (this.l = +e), (this.opacity = +r);
    }
    r(
      un,
      on,
      i(o, {
        brighter: function(n) {
          return (
            (n = null == n ? 1 / 0.7 : Math.pow(1 / 0.7, n)),
            new un(this.h, this.s, this.l * n, this.opacity)
          );
        },
        darker: function(n) {
          return (
            (n = null == n ? 0.7 : Math.pow(0.7, n)),
            new un(this.h, this.s, this.l * n, this.opacity)
          );
        },
        rgb: function() {
          var n = isNaN(this.h) ? 0 : (this.h + 120) * T,
            t = +this.l,
            e = isNaN(this.s) ? 0 : this.s * t * (1 - t),
            r = Math.cos(n),
            i = Math.sin(n);
          return new M(
            255 * (t + e * (Z * r + $ * i)),
            255 * (t + e * (Q * r + J * i)),
            255 * (t + e * (nn * r)),
            this.opacity
          );
        },
      })
    ),
      e.d(t, 'a', function() {
        return g;
      }),
      e.d(t, 'h', function() {
        return w;
      }),
      e.d(t, 'e', function() {
        return R;
      }),
      e.d(t, 'f', function() {
        return z;
      }),
      e.d(t, 'd', function() {
        return K;
      }),
      e.d(t, 'g', function() {
        return V;
      }),
      e.d(t, 'c', function() {
        return B;
      }),
      e.d(t, 'b', function() {
        return on;
      });
  },
  function(n, t, e) {
    'use strict';
    var r = e(0);
    function i(n, t, e, r, i) {
      var o = n * n,
        u = o * n;
      return (
        ((1 - 3 * n + 3 * o - u) * t +
          (4 - 6 * o + 3 * u) * e +
          (1 + 3 * n + 3 * o - 3 * u) * r +
          u * i) /
        6
      );
    }
    var o = function(n) {
        var t = n.length - 1;
        return function(e) {
          var r =
              e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), t - 1) : Math.floor(e * t),
            o = n[r],
            u = n[r + 1],
            a = r > 0 ? n[r - 1] : 2 * o - u,
            c = r < t - 1 ? n[r + 2] : 2 * u - o;
          return i((e - r / t) * t, a, o, u, c);
        };
      },
      u = function(n) {
        var t = n.length;
        return function(e) {
          var r = Math.floor(((e %= 1) < 0 ? ++e : e) * t),
            o = n[(r + t - 1) % t],
            u = n[r % t],
            a = n[(r + 1) % t],
            c = n[(r + 2) % t];
          return i((e - r / t) * t, o, u, a, c);
        };
      },
      a = function(n) {
        return function() {
          return n;
        };
      };
    function c(n, t) {
      return function(e) {
        return n + e * t;
      };
    }
    function f(n, t) {
      var e = t - n;
      return e
        ? c(n, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
        : a(isNaN(n) ? t : n);
    }
    function s(n) {
      return 1 == (n = +n)
        ? l
        : function(t, e) {
            return e - t
              ? (function(n, t, e) {
                  return (
                    (n = Math.pow(n, e)),
                    (t = Math.pow(t, e) - n),
                    (e = 1 / e),
                    function(r) {
                      return Math.pow(n + r * t, e);
                    }
                  );
                })(t, e, n)
              : a(isNaN(t) ? e : t);
          };
    }
    function l(n, t) {
      var e = t - n;
      return e ? c(n, e) : a(isNaN(n) ? t : n);
    }
    var h = (function n(t) {
      var e = s(t);
      function i(n, t) {
        var i = e((n = Object(r.h)(n)).r, (t = Object(r.h)(t)).r),
          o = e(n.g, t.g),
          u = e(n.b, t.b),
          a = l(n.opacity, t.opacity);
        return function(t) {
          return (
            (n.r = i(t)), (n.g = o(t)), (n.b = u(t)), (n.opacity = a(t)), n + ''
          );
        };
      }
      return (i.gamma = n), i;
    })(1);
    function d(n) {
      return function(t) {
        var e,
          i,
          o = t.length,
          u = new Array(o),
          a = new Array(o),
          c = new Array(o);
        for (e = 0; e < o; ++e)
          (i = Object(r.h)(t[e])),
            (u[e] = i.r || 0),
            (a[e] = i.g || 0),
            (c[e] = i.b || 0);
        return (
          (u = n(u)),
          (a = n(a)),
          (c = n(c)),
          (i.opacity = 1),
          function(n) {
            return (i.r = u(n)), (i.g = a(n)), (i.b = c(n)), i + '';
          }
        );
      };
    }
    var p = d(o),
      v = d(u),
      m = function(n, t) {
        var e,
          r = t ? t.length : 0,
          i = n ? Math.min(r, n.length) : 0,
          o = new Array(i),
          u = new Array(r);
        for (e = 0; e < i; ++e) o[e] = N(n[e], t[e]);
        for (; e < r; ++e) u[e] = t[e];
        return function(n) {
          for (e = 0; e < i; ++e) u[e] = o[e](n);
          return u;
        };
      },
      y = function(n, t) {
        var e = new Date();
        return (
          (t -= n = +n),
          function(r) {
            return e.setTime(n + t * r), e;
          }
        );
      },
      g = function(n, t) {
        return (
          (t -= n = +n),
          function(e) {
            return n + t * e;
          }
        );
      },
      _ = function(n, t) {
        var e,
          r = {},
          i = {};
        for (e in ((null !== n && 'object' == typeof n) || (n = {}),
        (null !== t && 'object' == typeof t) || (t = {}),
        t))
          e in n ? (r[e] = N(n[e], t[e])) : (i[e] = t[e]);
        return function(n) {
          for (e in r) i[e] = r[e](n);
          return i;
        };
      },
      b = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      x = new RegExp(b.source, 'g');
    var w,
      M,
      E,
      C,
      R = function(n, t) {
        var e,
          r,
          i,
          o = (b.lastIndex = x.lastIndex = 0),
          u = -1,
          a = [],
          c = [];
        for (n += '', t += ''; (e = b.exec(n)) && (r = x.exec(t)); )
          (i = r.index) > o &&
            ((i = t.slice(o, i)), a[u] ? (a[u] += i) : (a[++u] = i)),
            (e = e[0]) === (r = r[0])
              ? a[u]
                ? (a[u] += r)
                : (a[++u] = r)
              : ((a[++u] = null), c.push({i: u, x: g(e, r)})),
            (o = x.lastIndex);
        return (
          o < t.length && ((i = t.slice(o)), a[u] ? (a[u] += i) : (a[++u] = i)),
          a.length < 2
            ? c[0]
              ? (function(n) {
                  return function(t) {
                    return n(t) + '';
                  };
                })(c[0].x)
              : (function(n) {
                  return function() {
                    return n;
                  };
                })(t)
            : ((t = c.length),
              function(n) {
                for (var e, r = 0; r < t; ++r) a[(e = c[r]).i] = e.x(n);
                return a.join('');
              })
        );
      },
      N = function(n, t) {
        var e,
          i = typeof t;
        return null == t || 'boolean' === i
          ? a(t)
          : ('number' === i
              ? g
              : 'string' === i
              ? (e = Object(r.a)(t))
                ? ((t = e), h)
                : R
              : t instanceof r.a
              ? h
              : t instanceof Date
              ? y
              : Array.isArray(t)
              ? m
              : ('function' != typeof t.valueOf &&
                  'function' != typeof t.toString) ||
                isNaN(t)
              ? _
              : g)(n, t);
      },
      A = function(n) {
        var t = n.length;
        return function(e) {
          return n[Math.max(0, Math.min(t - 1, Math.floor(e * t)))];
        };
      },
      T = function(n, t) {
        var e = f(+n, +t);
        return function(n) {
          var t = e(n);
          return t - 360 * Math.floor(t / 360);
        };
      },
      S = function(n, t) {
        return (
          (t -= n = +n),
          function(e) {
            return Math.round(n + t * e);
          }
        );
      },
      k = 180 / Math.PI,
      U = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1,
      },
      Y = function(n, t, e, r, i, o) {
        var u, a, c;
        return (
          (u = Math.sqrt(n * n + t * t)) && ((n /= u), (t /= u)),
          (c = n * e + t * r) && ((e -= n * c), (r -= t * c)),
          (a = Math.sqrt(e * e + r * r)) && ((e /= a), (r /= a), (c /= a)),
          n * r < t * e && ((n = -n), (t = -t), (c = -c), (u = -u)),
          {
            translateX: i,
            translateY: o,
            rotate: Math.atan2(t, n) * k,
            skewX: Math.atan(c) * k,
            scaleX: u,
            scaleY: a,
          }
        );
      };
    function O(n, t, e, r) {
      function i(n) {
        return n.length ? n.pop() + ' ' : '';
      }
      return function(o, u) {
        var a = [],
          c = [];
        return (
          (o = n(o)),
          (u = n(u)),
          (function(n, r, i, o, u, a) {
            if (n !== i || r !== o) {
              var c = u.push('translate(', null, t, null, e);
              a.push({i: c - 4, x: g(n, i)}, {i: c - 2, x: g(r, o)});
            } else (i || o) && u.push('translate(' + i + t + o + e);
          })(o.translateX, o.translateY, u.translateX, u.translateY, a, c),
          (function(n, t, e, o) {
            n !== t
              ? (n - t > 180 ? (t += 360) : t - n > 180 && (n += 360),
                o.push({i: e.push(i(e) + 'rotate(', null, r) - 2, x: g(n, t)}))
              : t && e.push(i(e) + 'rotate(' + t + r);
          })(o.rotate, u.rotate, a, c),
          (function(n, t, e, o) {
            n !== t
              ? o.push({i: e.push(i(e) + 'skewX(', null, r) - 2, x: g(n, t)})
              : t && e.push(i(e) + 'skewX(' + t + r);
          })(o.skewX, u.skewX, a, c),
          (function(n, t, e, r, o, u) {
            if (n !== e || t !== r) {
              var a = o.push(i(o) + 'scale(', null, ',', null, ')');
              u.push({i: a - 4, x: g(n, e)}, {i: a - 2, x: g(t, r)});
            } else
              (1 === e && 1 === r) ||
                o.push(i(o) + 'scale(' + e + ',' + r + ')');
          })(o.scaleX, o.scaleY, u.scaleX, u.scaleY, a, c),
          (o = u = null),
          function(n) {
            for (var t, e = -1, r = c.length; ++e < r; )
              a[(t = c[e]).i] = t.x(n);
            return a.join('');
          }
        );
      };
    }
    var P = O(
        function(n) {
          return 'none' === n
            ? U
            : (w ||
                ((w = document.createElement('DIV')),
                (M = document.documentElement),
                (E = document.defaultView)),
              (w.style.transform = n),
              (n = E.getComputedStyle(M.appendChild(w), null).getPropertyValue(
                'transform'
              )),
              M.removeChild(w),
              (n = n.slice(7, -1).split(',')),
              Y(+n[0], +n[1], +n[2], +n[3], +n[4], +n[5]));
        },
        'px, ',
        'px)',
        'deg)'
      ),
      D = O(
        function(n) {
          return null == n
            ? U
            : (C ||
                (C = document.createElementNS(
                  'http://www.w3.org/2000/svg',
                  'g'
                )),
              C.setAttribute('transform', n),
              (n = C.transform.baseVal.consolidate())
                ? ((n = n.matrix), Y(n.a, n.b, n.c, n.d, n.e, n.f))
                : U);
        },
        ', ',
        ')',
        ')'
      ),
      I = Math.SQRT2;
    function L(n) {
      return ((n = Math.exp(n)) + 1 / n) / 2;
    }
    var B = function(n, t) {
      var e,
        r,
        i = n[0],
        o = n[1],
        u = n[2],
        a = t[0],
        c = t[1],
        f = t[2],
        s = a - i,
        l = c - o,
        h = s * s + l * l;
      if (h < 1e-12)
        (r = Math.log(f / u) / I),
          (e = function(n) {
            return [i + n * s, o + n * l, u * Math.exp(I * n * r)];
          });
      else {
        var d = Math.sqrt(h),
          p = (f * f - u * u + 4 * h) / (2 * u * 2 * d),
          v = (f * f - u * u - 4 * h) / (2 * f * 2 * d),
          m = Math.log(Math.sqrt(p * p + 1) - p),
          y = Math.log(Math.sqrt(v * v + 1) - v);
        (r = (y - m) / I),
          (e = function(n) {
            var t,
              e = n * r,
              a = L(m),
              c =
                (u / (2 * d)) *
                (a * ((t = I * e + m), ((t = Math.exp(2 * t)) - 1) / (t + 1)) -
                  (function(n) {
                    return ((n = Math.exp(n)) - 1 / n) / 2;
                  })(m));
            return [i + c * s, o + c * l, (u * a) / L(I * e + m)];
          });
      }
      return (e.duration = 1e3 * r), e;
    };
    function z(n) {
      return function(t, e) {
        var i = n((t = Object(r.e)(t)).h, (e = Object(r.e)(e)).h),
          o = l(t.s, e.s),
          u = l(t.l, e.l),
          a = l(t.opacity, e.opacity);
        return function(n) {
          return (
            (t.h = i(n)), (t.s = o(n)), (t.l = u(n)), (t.opacity = a(n)), t + ''
          );
        };
      };
    }
    var q = z(f),
      F = z(l);
    function j(n, t) {
      var e = l((n = Object(r.f)(n)).l, (t = Object(r.f)(t)).l),
        i = l(n.a, t.a),
        o = l(n.b, t.b),
        u = l(n.opacity, t.opacity);
      return function(t) {
        return (
          (n.l = e(t)), (n.a = i(t)), (n.b = o(t)), (n.opacity = u(t)), n + ''
        );
      };
    }
    function G(n) {
      return function(t, e) {
        var i = n((t = Object(r.d)(t)).h, (e = Object(r.d)(e)).h),
          o = l(t.c, e.c),
          u = l(t.l, e.l),
          a = l(t.opacity, e.opacity);
        return function(n) {
          return (
            (t.h = i(n)), (t.c = o(n)), (t.l = u(n)), (t.opacity = a(n)), t + ''
          );
        };
      };
    }
    var H = G(f),
      X = G(l);
    function V(n) {
      return (function t(e) {
        function i(t, i) {
          var o = n((t = Object(r.b)(t)).h, (i = Object(r.b)(i)).h),
            u = l(t.s, i.s),
            a = l(t.l, i.l),
            c = l(t.opacity, i.opacity);
          return function(n) {
            return (
              (t.h = o(n)),
              (t.s = u(n)),
              (t.l = a(Math.pow(n, e))),
              (t.opacity = c(n)),
              t + ''
            );
          };
        }
        return (e = +e), (i.gamma = t), i;
      })(1);
    }
    var K = V(f),
      W = V(l);
    function Z(n, t) {
      for (
        var e = 0, r = t.length - 1, i = t[0], o = new Array(r < 0 ? 0 : r);
        e < r;

      )
        o[e] = n(i, (i = t[++e]));
      return function(n) {
        var t = Math.max(0, Math.min(r - 1, Math.floor((n *= r))));
        return o[t](n - t);
      };
    }
    var $ = function(n, t) {
      for (var e = new Array(t), r = 0; r < t; ++r) e[r] = n(r / (t - 1));
      return e;
    };
    e.d(t, 'a', function() {
      return N;
    }),
      e.d(t, 'b', function() {
        return m;
      }),
      e.d(t, 'c', function() {
        return o;
      }),
      e.d(t, 'd', function() {
        return u;
      }),
      e.d(t, 'g', function() {
        return y;
      }),
      e.d(t, 'h', function() {
        return A;
      }),
      e.d(t, 'm', function() {
        return T;
      }),
      e.d(t, 'o', function() {
        return g;
      }),
      e.d(t, 'p', function() {
        return _;
      }),
      e.d(t, 't', function() {
        return S;
      }),
      e.d(t, 'u', function() {
        return R;
      }),
      e.d(t, 'v', function() {
        return P;
      }),
      e.d(t, 'w', function() {
        return D;
      }),
      e.d(t, 'x', function() {
        return B;
      }),
      e.d(t, 'q', function() {
        return h;
      }),
      e.d(t, 'r', function() {
        return p;
      }),
      e.d(t, 's', function() {
        return v;
      }),
      e.d(t, 'k', function() {
        return q;
      }),
      e.d(t, 'l', function() {
        return F;
      }),
      e.d(t, 'n', function() {
        return j;
      }),
      e.d(t, 'i', function() {
        return H;
      }),
      e.d(t, 'j', function() {
        return X;
      }),
      e.d(t, 'e', function() {
        return K;
      }),
      e.d(t, 'f', function() {
        return W;
      }),
      e.d(t, 'y', function() {
        return Z;
      }),
      e.d(t, 'z', function() {
        return $;
      });
  },
  function(n, t, e) {
    'use strict';
    e.r(t);
    var r = function(n) {
        for (var t = (n.length / 6) | 0, e = new Array(t), r = 0; r < t; )
          e[r] = '#' + n.slice(6 * r, 6 * ++r);
        return e;
      },
      i = r('1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf'),
      o = r('7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666'),
      u = r('1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666'),
      a = r(
        'a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928'
      ),
      c = r('fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2'),
      f = r('b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc'),
      s = r('e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999'),
      l = r('66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3'),
      h = r(
        '8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f'
      ),
      d = e(1),
      p = function(n) {
        return Object(d.r)(n[n.length - 1]);
      },
      v = new Array(3)
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
        .map(r),
      m = p(v),
      y = new Array(3)
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
        .map(r),
      g = p(y),
      _ = new Array(3)
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
        .map(r),
      b = p(_),
      x = new Array(3)
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
        .map(r),
      w = p(x),
      M = new Array(3)
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
        .map(r),
      E = p(M),
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
        .map(r),
      R = p(C),
      N = new Array(3)
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
        .map(r),
      A = p(N),
      T = new Array(3)
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
        .map(r),
      S = p(T),
      k = new Array(3)
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
        .map(r),
      U = p(k),
      Y = new Array(3)
        .concat(
          'e5f5f999d8c92ca25f',
          'edf8fbb2e2e266c2a4238b45',
          'edf8fbb2e2e266c2a42ca25f006d2c',
          'edf8fbccece699d8c966c2a42ca25f006d2c',
          'edf8fbccece699d8c966c2a441ae76238b45005824',
          'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824',
          'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b'
        )
        .map(r),
      O = p(Y),
      P = new Array(3)
        .concat(
          'e0ecf49ebcda8856a7',
          'edf8fbb3cde38c96c688419d',
          'edf8fbb3cde38c96c68856a7810f7c',
          'edf8fbbfd3e69ebcda8c96c68856a7810f7c',
          'edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b',
          'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b',
          'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b'
        )
        .map(r),
      D = p(P),
      I = new Array(3)
        .concat(
          'e0f3dba8ddb543a2ca',
          'f0f9e8bae4bc7bccc42b8cbe',
          'f0f9e8bae4bc7bccc443a2ca0868ac',
          'f0f9e8ccebc5a8ddb57bccc443a2ca0868ac',
          'f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e',
          'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e',
          'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081'
        )
        .map(r),
      L = p(I),
      B = new Array(3)
        .concat(
          'fee8c8fdbb84e34a33',
          'fef0d9fdcc8afc8d59d7301f',
          'fef0d9fdcc8afc8d59e34a33b30000',
          'fef0d9fdd49efdbb84fc8d59e34a33b30000',
          'fef0d9fdd49efdbb84fc8d59ef6548d7301f990000',
          'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000',
          'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000'
        )
        .map(r),
      z = p(B),
      q = new Array(3)
        .concat(
          'ece2f0a6bddb1c9099',
          'f6eff7bdc9e167a9cf02818a',
          'f6eff7bdc9e167a9cf1c9099016c59',
          'f6eff7d0d1e6a6bddb67a9cf1c9099016c59',
          'f6eff7d0d1e6a6bddb67a9cf3690c002818a016450',
          'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450',
          'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636'
        )
        .map(r),
      F = p(q),
      j = new Array(3)
        .concat(
          'ece7f2a6bddb2b8cbe',
          'f1eef6bdc9e174a9cf0570b0',
          'f1eef6bdc9e174a9cf2b8cbe045a8d',
          'f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d',
          'f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b',
          'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b',
          'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858'
        )
        .map(r),
      G = p(j),
      H = new Array(3)
        .concat(
          'e7e1efc994c7dd1c77',
          'f1eef6d7b5d8df65b0ce1256',
          'f1eef6d7b5d8df65b0dd1c77980043',
          'f1eef6d4b9dac994c7df65b0dd1c77980043',
          'f1eef6d4b9dac994c7df65b0e7298ace125691003f',
          'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f',
          'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f'
        )
        .map(r),
      X = p(H),
      V = new Array(3)
        .concat(
          'fde0ddfa9fb5c51b8a',
          'feebe2fbb4b9f768a1ae017e',
          'feebe2fbb4b9f768a1c51b8a7a0177',
          'feebe2fcc5c0fa9fb5f768a1c51b8a7a0177',
          'feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177',
          'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177',
          'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a'
        )
        .map(r),
      K = p(V),
      W = new Array(3)
        .concat(
          'edf8b17fcdbb2c7fb8',
          'ffffcca1dab441b6c4225ea8',
          'ffffcca1dab441b6c42c7fb8253494',
          'ffffccc7e9b47fcdbb41b6c42c7fb8253494',
          'ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84',
          'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84',
          'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58'
        )
        .map(r),
      Z = p(W),
      $ = new Array(3)
        .concat(
          'f7fcb9addd8e31a354',
          'ffffccc2e69978c679238443',
          'ffffccc2e69978c67931a354006837',
          'ffffccd9f0a3addd8e78c67931a354006837',
          'ffffccd9f0a3addd8e78c67941ab5d238443005a32',
          'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32',
          'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529'
        )
        .map(r),
      Q = p($),
      J = new Array(3)
        .concat(
          'fff7bcfec44fd95f0e',
          'ffffd4fed98efe9929cc4c02',
          'ffffd4fed98efe9929d95f0e993404',
          'ffffd4fee391fec44ffe9929d95f0e993404',
          'ffffd4fee391fec44ffe9929ec7014cc4c028c2d04',
          'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04',
          'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506'
        )
        .map(r),
      nn = p(J),
      tn = new Array(3)
        .concat(
          'ffeda0feb24cf03b20',
          'ffffb2fecc5cfd8d3ce31a1c',
          'ffffb2fecc5cfd8d3cf03b20bd0026',
          'ffffb2fed976feb24cfd8d3cf03b20bd0026',
          'ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026',
          'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026',
          'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026'
        )
        .map(r),
      en = p(tn),
      rn = new Array(3)
        .concat(
          'deebf79ecae13182bd',
          'eff3ffbdd7e76baed62171b5',
          'eff3ffbdd7e76baed63182bd08519c',
          'eff3ffc6dbef9ecae16baed63182bd08519c',
          'eff3ffc6dbef9ecae16baed64292c62171b5084594',
          'f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594',
          'f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b'
        )
        .map(r),
      on = p(rn),
      un = new Array(3)
        .concat(
          'e5f5e0a1d99b31a354',
          'edf8e9bae4b374c476238b45',
          'edf8e9bae4b374c47631a354006d2c',
          'edf8e9c7e9c0a1d99b74c47631a354006d2c',
          'edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32',
          'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32',
          'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b'
        )
        .map(r),
      an = p(un),
      cn = new Array(3)
        .concat(
          'f0f0f0bdbdbd636363',
          'f7f7f7cccccc969696525252',
          'f7f7f7cccccc969696636363252525',
          'f7f7f7d9d9d9bdbdbd969696636363252525',
          'f7f7f7d9d9d9bdbdbd969696737373525252252525',
          'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525',
          'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000'
        )
        .map(r),
      fn = p(cn),
      sn = new Array(3)
        .concat(
          'efedf5bcbddc756bb1',
          'f2f0f7cbc9e29e9ac86a51a3',
          'f2f0f7cbc9e29e9ac8756bb154278f',
          'f2f0f7dadaebbcbddc9e9ac8756bb154278f',
          'f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486',
          'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486',
          'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d'
        )
        .map(r),
      ln = p(sn),
      hn = new Array(3)
        .concat(
          'fee0d2fc9272de2d26',
          'fee5d9fcae91fb6a4acb181d',
          'fee5d9fcae91fb6a4ade2d26a50f15',
          'fee5d9fcbba1fc9272fb6a4ade2d26a50f15',
          'fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d',
          'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d',
          'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d'
        )
        .map(r),
      dn = p(hn),
      pn = new Array(3)
        .concat(
          'fee6cefdae6be6550d',
          'feeddefdbe85fd8d3cd94701',
          'feeddefdbe85fd8d3ce6550da63603',
          'feeddefdd0a2fdae6bfd8d3ce6550da63603',
          'feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04',
          'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04',
          'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704'
        )
        .map(r),
      vn = p(pn),
      mn = e(0),
      yn = Object(d.f)(Object(mn.b)(300, 0.5, 0), Object(mn.b)(-240, 0.5, 1)),
      gn = Object(d.f)(
        Object(mn.b)(-100, 0.75, 0.35),
        Object(mn.b)(80, 1.5, 0.8)
      ),
      _n = Object(d.f)(
        Object(mn.b)(260, 0.75, 0.35),
        Object(mn.b)(80, 1.5, 0.8)
      ),
      bn = Object(mn.b)(),
      xn = function(n) {
        (n < 0 || n > 1) && (n -= Math.floor(n));
        var t = Math.abs(n - 0.5);
        return (
          (bn.h = 360 * n - 100),
          (bn.s = 1.5 - 1.5 * t),
          (bn.l = 0.8 - 0.9 * t),
          bn + ''
        );
      },
      wn = Object(mn.h)(),
      Mn = Math.PI / 3,
      En = (2 * Math.PI) / 3,
      Cn = function(n) {
        var t;
        return (
          (n = (0.5 - n) * Math.PI),
          (wn.r = 255 * (t = Math.sin(n)) * t),
          (wn.g = 255 * (t = Math.sin(n + Mn)) * t),
          (wn.b = 255 * (t = Math.sin(n + En)) * t),
          wn + ''
        );
      };
    function Rn(n) {
      var t = n.length;
      return function(e) {
        return n[Math.max(0, Math.min(t - 1, Math.floor(e * t)))];
      };
    }
    var Nn = Rn(
        r(
          '44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725'
        )
      ),
      An = Rn(
        r(
          '00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf'
        )
      ),
      Tn = Rn(
        r(
          '00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4'
        )
      ),
      Sn = Rn(
        r(
          '0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921'
        )
      );
    e.d(t, 'schemeCategory10', function() {
      return i;
    }),
      e.d(t, 'schemeAccent', function() {
        return o;
      }),
      e.d(t, 'schemeDark2', function() {
        return u;
      }),
      e.d(t, 'schemePaired', function() {
        return a;
      }),
      e.d(t, 'schemePastel1', function() {
        return c;
      }),
      e.d(t, 'schemePastel2', function() {
        return f;
      }),
      e.d(t, 'schemeSet1', function() {
        return s;
      }),
      e.d(t, 'schemeSet2', function() {
        return l;
      }),
      e.d(t, 'schemeSet3', function() {
        return h;
      }),
      e.d(t, 'interpolateBrBG', function() {
        return m;
      }),
      e.d(t, 'schemeBrBG', function() {
        return v;
      }),
      e.d(t, 'interpolatePRGn', function() {
        return g;
      }),
      e.d(t, 'schemePRGn', function() {
        return y;
      }),
      e.d(t, 'interpolatePiYG', function() {
        return b;
      }),
      e.d(t, 'schemePiYG', function() {
        return _;
      }),
      e.d(t, 'interpolatePuOr', function() {
        return w;
      }),
      e.d(t, 'schemePuOr', function() {
        return x;
      }),
      e.d(t, 'interpolateRdBu', function() {
        return E;
      }),
      e.d(t, 'schemeRdBu', function() {
        return M;
      }),
      e.d(t, 'interpolateRdGy', function() {
        return R;
      }),
      e.d(t, 'schemeRdGy', function() {
        return C;
      }),
      e.d(t, 'interpolateRdYlBu', function() {
        return A;
      }),
      e.d(t, 'schemeRdYlBu', function() {
        return N;
      }),
      e.d(t, 'interpolateRdYlGn', function() {
        return S;
      }),
      e.d(t, 'schemeRdYlGn', function() {
        return T;
      }),
      e.d(t, 'interpolateSpectral', function() {
        return U;
      }),
      e.d(t, 'schemeSpectral', function() {
        return k;
      }),
      e.d(t, 'interpolateBuGn', function() {
        return O;
      }),
      e.d(t, 'schemeBuGn', function() {
        return Y;
      }),
      e.d(t, 'interpolateBuPu', function() {
        return D;
      }),
      e.d(t, 'schemeBuPu', function() {
        return P;
      }),
      e.d(t, 'interpolateGnBu', function() {
        return L;
      }),
      e.d(t, 'schemeGnBu', function() {
        return I;
      }),
      e.d(t, 'interpolateOrRd', function() {
        return z;
      }),
      e.d(t, 'schemeOrRd', function() {
        return B;
      }),
      e.d(t, 'interpolatePuBuGn', function() {
        return F;
      }),
      e.d(t, 'schemePuBuGn', function() {
        return q;
      }),
      e.d(t, 'interpolatePuBu', function() {
        return G;
      }),
      e.d(t, 'schemePuBu', function() {
        return j;
      }),
      e.d(t, 'interpolatePuRd', function() {
        return X;
      }),
      e.d(t, 'schemePuRd', function() {
        return H;
      }),
      e.d(t, 'interpolateRdPu', function() {
        return K;
      }),
      e.d(t, 'schemeRdPu', function() {
        return V;
      }),
      e.d(t, 'interpolateYlGnBu', function() {
        return Z;
      }),
      e.d(t, 'schemeYlGnBu', function() {
        return W;
      }),
      e.d(t, 'interpolateYlGn', function() {
        return Q;
      }),
      e.d(t, 'schemeYlGn', function() {
        return $;
      }),
      e.d(t, 'interpolateYlOrBr', function() {
        return nn;
      }),
      e.d(t, 'schemeYlOrBr', function() {
        return J;
      }),
      e.d(t, 'interpolateYlOrRd', function() {
        return en;
      }),
      e.d(t, 'schemeYlOrRd', function() {
        return tn;
      }),
      e.d(t, 'interpolateBlues', function() {
        return on;
      }),
      e.d(t, 'schemeBlues', function() {
        return rn;
      }),
      e.d(t, 'interpolateGreens', function() {
        return an;
      }),
      e.d(t, 'schemeGreens', function() {
        return un;
      }),
      e.d(t, 'interpolateGreys', function() {
        return fn;
      }),
      e.d(t, 'schemeGreys', function() {
        return cn;
      }),
      e.d(t, 'interpolatePurples', function() {
        return ln;
      }),
      e.d(t, 'schemePurples', function() {
        return sn;
      }),
      e.d(t, 'interpolateReds', function() {
        return dn;
      }),
      e.d(t, 'schemeReds', function() {
        return hn;
      }),
      e.d(t, 'interpolateOranges', function() {
        return vn;
      }),
      e.d(t, 'schemeOranges', function() {
        return pn;
      }),
      e.d(t, 'interpolateCubehelixDefault', function() {
        return yn;
      }),
      e.d(t, 'interpolateRainbow', function() {
        return xn;
      }),
      e.d(t, 'interpolateWarm', function() {
        return gn;
      }),
      e.d(t, 'interpolateCool', function() {
        return _n;
      }),
      e.d(t, 'interpolateSinebow', function() {
        return Cn;
      }),
      e.d(t, 'interpolateViridis', function() {
        return Nn;
      }),
      e.d(t, 'interpolateMagma', function() {
        return An;
      }),
      e.d(t, 'interpolateInferno', function() {
        return Tn;
      }),
      e.d(t, 'interpolatePlasma', function() {
        return Sn;
      });
  },
  function(n, t, e) {
    'use strict';
    function r(n, t) {
      return n.parent === t.parent ? 1 : 2;
    }
    function i(n, t) {
      return n + t.x;
    }
    function o(n, t) {
      return Math.max(n, t.y);
    }
    e.r(t);
    var u = function() {
      var n = r,
        t = 1,
        e = 1,
        u = !1;
      function a(r) {
        var a,
          c = 0;
        r.eachAfter(function(t) {
          var e = t.children;
          e
            ? ((t.x = (function(n) {
                return n.reduce(i, 0) / n.length;
              })(e)),
              (t.y = (function(n) {
                return 1 + n.reduce(o, 0);
              })(e)))
            : ((t.x = a ? (c += n(t, a)) : 0), (t.y = 0), (a = t));
        });
        var f = (function(n) {
            for (var t; (t = n.children); ) n = t[0];
            return n;
          })(r),
          s = (function(n) {
            for (var t; (t = n.children); ) n = t[t.length - 1];
            return n;
          })(r),
          l = f.x - n(f, s) / 2,
          h = s.x + n(s, f) / 2;
        return r.eachAfter(
          u
            ? function(n) {
                (n.x = (n.x - r.x) * t), (n.y = (r.y - n.y) * e);
              }
            : function(n) {
                (n.x = ((n.x - l) / (h - l)) * t),
                  (n.y = (1 - (r.y ? n.y / r.y : 1)) * e);
              }
        );
      }
      return (
        (a.separation = function(t) {
          return arguments.length ? ((n = t), a) : n;
        }),
        (a.size = function(n) {
          return arguments.length
            ? ((u = !1), (t = +n[0]), (e = +n[1]), a)
            : u
            ? null
            : [t, e];
        }),
        (a.nodeSize = function(n) {
          return arguments.length
            ? ((u = !0), (t = +n[0]), (e = +n[1]), a)
            : u
            ? [t, e]
            : null;
        }),
        a
      );
    };
    function a(n) {
      var t = 0,
        e = n.children,
        r = e && e.length;
      if (r) for (; --r >= 0; ) t += e[r].value;
      else t = 1;
      n.value = t;
    }
    function c(n, t) {
      var e,
        r,
        i,
        o,
        u,
        a = new h(n),
        c = +n.value && (a.value = n.value),
        s = [a];
      for (null == t && (t = f); (e = s.pop()); )
        if ((c && (e.value = +e.data.value), (i = t(e.data)) && (u = i.length)))
          for (e.children = new Array(u), o = u - 1; o >= 0; --o)
            s.push((r = e.children[o] = new h(i[o]))),
              (r.parent = e),
              (r.depth = e.depth + 1);
      return a.eachBefore(l);
    }
    function f(n) {
      return n.children;
    }
    function s(n) {
      n.data = n.data.data;
    }
    function l(n) {
      var t = 0;
      do {
        n.height = t;
      } while ((n = n.parent) && n.height < ++t);
    }
    function h(n) {
      (this.data = n), (this.depth = this.height = 0), (this.parent = null);
    }
    h.prototype = c.prototype = {
      constructor: h,
      count: function() {
        return this.eachAfter(a);
      },
      each: function(n) {
        var t,
          e,
          r,
          i,
          o = this,
          u = [o];
        do {
          for (t = u.reverse(), u = []; (o = t.pop()); )
            if ((n(o), (e = o.children)))
              for (r = 0, i = e.length; r < i; ++r) u.push(e[r]);
        } while (u.length);
        return this;
      },
      eachAfter: function(n) {
        for (var t, e, r, i = this, o = [i], u = []; (i = o.pop()); )
          if ((u.push(i), (t = i.children)))
            for (e = 0, r = t.length; e < r; ++e) o.push(t[e]);
        for (; (i = u.pop()); ) n(i);
        return this;
      },
      eachBefore: function(n) {
        for (var t, e, r = this, i = [r]; (r = i.pop()); )
          if ((n(r), (t = r.children)))
            for (e = t.length - 1; e >= 0; --e) i.push(t[e]);
        return this;
      },
      sum: function(n) {
        return this.eachAfter(function(t) {
          for (
            var e = +n(t.data) || 0, r = t.children, i = r && r.length;
            --i >= 0;

          )
            e += r[i].value;
          t.value = e;
        });
      },
      sort: function(n) {
        return this.eachBefore(function(t) {
          t.children && t.children.sort(n);
        });
      },
      path: function(n) {
        for (
          var t = this,
            e = (function(n, t) {
              if (n === t) return n;
              var e = n.ancestors(),
                r = t.ancestors(),
                i = null;
              for (n = e.pop(), t = r.pop(); n === t; )
                (i = n), (n = e.pop()), (t = r.pop());
              return i;
            })(t, n),
            r = [t];
          t !== e;

        )
          (t = t.parent), r.push(t);
        for (var i = r.length; n !== e; ) r.splice(i, 0, n), (n = n.parent);
        return r;
      },
      ancestors: function() {
        for (var n = this, t = [n]; (n = n.parent); ) t.push(n);
        return t;
      },
      descendants: function() {
        var n = [];
        return (
          this.each(function(t) {
            n.push(t);
          }),
          n
        );
      },
      leaves: function() {
        var n = [];
        return (
          this.eachBefore(function(t) {
            t.children || n.push(t);
          }),
          n
        );
      },
      links: function() {
        var n = this,
          t = [];
        return (
          n.each(function(e) {
            e !== n && t.push({source: e.parent, target: e});
          }),
          t
        );
      },
      copy: function() {
        return c(this).eachBefore(s);
      },
    };
    var d = Array.prototype.slice;
    var p = function(n) {
      for (
        var t,
          e,
          r = 0,
          i = (n = (function(n) {
            for (var t, e, r = n.length; r; )
              (e = (Math.random() * r--) | 0),
                (t = n[r]),
                (n[r] = n[e]),
                (n[e] = t);
            return n;
          })(d.call(n))).length,
          o = [];
        r < i;

      )
        (t = n[r]), e && y(e, t) ? ++r : ((e = _((o = v(o, t)))), (r = 0));
      return e;
    };
    function v(n, t) {
      var e, r;
      if (g(t, n)) return [t];
      for (e = 0; e < n.length; ++e)
        if (m(t, n[e]) && g(b(n[e], t), n)) return [n[e], t];
      for (e = 0; e < n.length - 1; ++e)
        for (r = e + 1; r < n.length; ++r)
          if (
            m(b(n[e], n[r]), t) &&
            m(b(n[e], t), n[r]) &&
            m(b(n[r], t), n[e]) &&
            g(x(n[e], n[r], t), n)
          )
            return [n[e], n[r], t];
      throw new Error();
    }
    function m(n, t) {
      var e = n.r - t.r,
        r = t.x - n.x,
        i = t.y - n.y;
      return e < 0 || e * e < r * r + i * i;
    }
    function y(n, t) {
      var e = n.r - t.r + 1e-6,
        r = t.x - n.x,
        i = t.y - n.y;
      return e > 0 && e * e > r * r + i * i;
    }
    function g(n, t) {
      for (var e = 0; e < t.length; ++e) if (!y(n, t[e])) return !1;
      return !0;
    }
    function _(n) {
      switch (n.length) {
        case 1:
          return {x: (t = n[0]).x, y: t.y, r: t.r};
        case 2:
          return b(n[0], n[1]);
        case 3:
          return x(n[0], n[1], n[2]);
      }
      var t;
    }
    function b(n, t) {
      var e = n.x,
        r = n.y,
        i = n.r,
        o = t.x,
        u = t.y,
        a = t.r,
        c = o - e,
        f = u - r,
        s = a - i,
        l = Math.sqrt(c * c + f * f);
      return {
        x: (e + o + (c / l) * s) / 2,
        y: (r + u + (f / l) * s) / 2,
        r: (l + i + a) / 2,
      };
    }
    function x(n, t, e) {
      var r = n.x,
        i = n.y,
        o = n.r,
        u = t.x,
        a = t.y,
        c = t.r,
        f = e.x,
        s = e.y,
        l = e.r,
        h = r - u,
        d = r - f,
        p = i - a,
        v = i - s,
        m = c - o,
        y = l - o,
        g = r * r + i * i - o * o,
        _ = g - u * u - a * a + c * c,
        b = g - f * f - s * s + l * l,
        x = d * p - h * v,
        w = (p * b - v * _) / (2 * x) - r,
        M = (v * m - p * y) / x,
        E = (d * _ - h * b) / (2 * x) - i,
        C = (h * y - d * m) / x,
        R = M * M + C * C - 1,
        N = 2 * (o + w * M + E * C),
        A = w * w + E * E - o * o,
        T = -(R ? (N + Math.sqrt(N * N - 4 * R * A)) / (2 * R) : A / N);
      return {x: r + w + M * T, y: i + E + C * T, r: T};
    }
    function w(n, t, e) {
      var r,
        i,
        o,
        u,
        a = n.x - t.x,
        c = n.y - t.y,
        f = a * a + c * c;
      f
        ? ((i = t.r + e.r),
          (i *= i),
          (u = n.r + e.r),
          i > (u *= u)
            ? ((r = (f + u - i) / (2 * f)),
              (o = Math.sqrt(Math.max(0, u / f - r * r))),
              (e.x = n.x - r * a - o * c),
              (e.y = n.y - r * c + o * a))
            : ((r = (f + i - u) / (2 * f)),
              (o = Math.sqrt(Math.max(0, i / f - r * r))),
              (e.x = t.x + r * a - o * c),
              (e.y = t.y + r * c + o * a)))
        : ((e.x = t.x + e.r), (e.y = t.y));
    }
    function M(n, t) {
      var e = n.r + t.r - 1e-6,
        r = t.x - n.x,
        i = t.y - n.y;
      return e > 0 && e * e > r * r + i * i;
    }
    function E(n) {
      var t = n._,
        e = n.next._,
        r = t.r + e.r,
        i = (t.x * e.r + e.x * t.r) / r,
        o = (t.y * e.r + e.y * t.r) / r;
      return i * i + o * o;
    }
    function C(n) {
      (this._ = n), (this.next = null), (this.previous = null);
    }
    function R(n) {
      if (!(i = n.length)) return 0;
      var t, e, r, i, o, u, a, c, f, s, l;
      if ((((t = n[0]).x = 0), (t.y = 0), !(i > 1))) return t.r;
      if (((e = n[1]), (t.x = -e.r), (e.x = t.r), (e.y = 0), !(i > 2)))
        return t.r + e.r;
      w(e, t, (r = n[2])),
        (t = new C(t)),
        (e = new C(e)),
        (r = new C(r)),
        (t.next = r.previous = e),
        (e.next = t.previous = r),
        (r.next = e.previous = t);
      n: for (a = 3; a < i; ++a) {
        w(t._, e._, (r = n[a])),
          (r = new C(r)),
          (c = e.next),
          (f = t.previous),
          (s = e._.r),
          (l = t._.r);
        do {
          if (s <= l) {
            if (M(c._, r._)) {
              (e = c), (t.next = e), (e.previous = t), --a;
              continue n;
            }
            (s += c._.r), (c = c.next);
          } else {
            if (M(f._, r._)) {
              ((t = f).next = e), (e.previous = t), --a;
              continue n;
            }
            (l += f._.r), (f = f.previous);
          }
        } while (c !== f.next);
        for (
          r.previous = t, r.next = e, t.next = e.previous = e = r, o = E(t);
          (r = r.next) !== e;

        )
          (u = E(r)) < o && ((t = r), (o = u));
        e = t.next;
      }
      for (t = [e._], r = e; (r = r.next) !== e; ) t.push(r._);
      for (r = p(t), a = 0; a < i; ++a) ((t = n[a]).x -= r.x), (t.y -= r.y);
      return r.r;
    }
    var N = function(n) {
      return R(n), n;
    };
    function A(n) {
      if ('function' != typeof n) throw new Error();
      return n;
    }
    function T() {
      return 0;
    }
    var S = function(n) {
      return function() {
        return n;
      };
    };
    function k(n) {
      return Math.sqrt(n.value);
    }
    var U = function() {
      var n = null,
        t = 1,
        e = 1,
        r = T;
      function i(i) {
        return (
          (i.x = t / 2),
          (i.y = e / 2),
          n
            ? i
                .eachBefore(Y(n))
                .eachAfter(O(r, 0.5))
                .eachBefore(P(1))
            : i
                .eachBefore(Y(k))
                .eachAfter(O(T, 1))
                .eachAfter(O(r, i.r / Math.min(t, e)))
                .eachBefore(P(Math.min(t, e) / (2 * i.r))),
          i
        );
      }
      return (
        (i.radius = function(t) {
          return arguments.length
            ? ((n = null == (e = t) ? null : A(e)), i)
            : n;
          var e;
        }),
        (i.size = function(n) {
          return arguments.length ? ((t = +n[0]), (e = +n[1]), i) : [t, e];
        }),
        (i.padding = function(n) {
          return arguments.length
            ? ((r = 'function' == typeof n ? n : S(+n)), i)
            : r;
        }),
        i
      );
    };
    function Y(n) {
      return function(t) {
        t.children || (t.r = Math.max(0, +n(t) || 0));
      };
    }
    function O(n, t) {
      return function(e) {
        if ((r = e.children)) {
          var r,
            i,
            o,
            u = r.length,
            a = n(e) * t || 0;
          if (a) for (i = 0; i < u; ++i) r[i].r += a;
          if (((o = R(r)), a)) for (i = 0; i < u; ++i) r[i].r -= a;
          e.r = o + a;
        }
      };
    }
    function P(n) {
      return function(t) {
        var e = t.parent;
        (t.r *= n), e && ((t.x = e.x + n * t.x), (t.y = e.y + n * t.y));
      };
    }
    var D = function(n) {
        (n.x0 = Math.round(n.x0)),
          (n.y0 = Math.round(n.y0)),
          (n.x1 = Math.round(n.x1)),
          (n.y1 = Math.round(n.y1));
      },
      I = function(n, t, e, r, i) {
        for (
          var o,
            u = n.children,
            a = -1,
            c = u.length,
            f = n.value && (r - t) / n.value;
          ++a < c;

        )
          ((o = u[a]).y0 = e),
            (o.y1 = i),
            (o.x0 = t),
            (o.x1 = t += o.value * f);
      },
      L = function() {
        var n = 1,
          t = 1,
          e = 0,
          r = !1;
        function i(i) {
          var o = i.height + 1;
          return (
            (i.x0 = i.y0 = e),
            (i.x1 = n),
            (i.y1 = t / o),
            i.eachBefore(
              (function(n, t) {
                return function(r) {
                  r.children &&
                    I(
                      r,
                      r.x0,
                      (n * (r.depth + 1)) / t,
                      r.x1,
                      (n * (r.depth + 2)) / t
                    );
                  var i = r.x0,
                    o = r.y0,
                    u = r.x1 - e,
                    a = r.y1 - e;
                  u < i && (i = u = (i + u) / 2),
                    a < o && (o = a = (o + a) / 2),
                    (r.x0 = i),
                    (r.y0 = o),
                    (r.x1 = u),
                    (r.y1 = a);
                };
              })(t, o)
            ),
            r && i.eachBefore(D),
            i
          );
        }
        return (
          (i.round = function(n) {
            return arguments.length ? ((r = !!n), i) : r;
          }),
          (i.size = function(e) {
            return arguments.length ? ((n = +e[0]), (t = +e[1]), i) : [n, t];
          }),
          (i.padding = function(n) {
            return arguments.length ? ((e = +n), i) : e;
          }),
          i
        );
      },
      B = '$',
      z = {depth: -1},
      q = {};
    function F(n) {
      return n.id;
    }
    function j(n) {
      return n.parentId;
    }
    var G = function() {
      var n = F,
        t = j;
      function e(e) {
        var r,
          i,
          o,
          u,
          a,
          c,
          f,
          s = e.length,
          d = new Array(s),
          p = {};
        for (i = 0; i < s; ++i)
          (r = e[i]),
            (a = d[i] = new h(r)),
            null != (c = n(r, i, e)) &&
              (c += '') &&
              (p[(f = B + (a.id = c))] = f in p ? q : a);
        for (i = 0; i < s; ++i)
          if (((a = d[i]), null != (c = t(e[i], i, e)) && (c += ''))) {
            if (!(u = p[B + c])) throw new Error('missing: ' + c);
            if (u === q) throw new Error('ambiguous: ' + c);
            u.children ? u.children.push(a) : (u.children = [a]),
              (a.parent = u);
          } else {
            if (o) throw new Error('multiple roots');
            o = a;
          }
        if (!o) throw new Error('no root');
        if (
          ((o.parent = z),
          o
            .eachBefore(function(n) {
              (n.depth = n.parent.depth + 1), --s;
            })
            .eachBefore(l),
          (o.parent = null),
          s > 0)
        )
          throw new Error('cycle');
        return o;
      }
      return (
        (e.id = function(t) {
          return arguments.length ? ((n = A(t)), e) : n;
        }),
        (e.parentId = function(n) {
          return arguments.length ? ((t = A(n)), e) : t;
        }),
        e
      );
    };
    function H(n, t) {
      return n.parent === t.parent ? 1 : 2;
    }
    function X(n) {
      var t = n.children;
      return t ? t[0] : n.t;
    }
    function V(n) {
      var t = n.children;
      return t ? t[t.length - 1] : n.t;
    }
    function K(n, t, e) {
      var r = e / (t.i - n.i);
      (t.c -= r), (t.s += e), (n.c += r), (t.z += e), (t.m += e);
    }
    function W(n, t, e) {
      return n.a.parent === t.parent ? n.a : e;
    }
    function Z(n, t) {
      (this._ = n),
        (this.parent = null),
        (this.children = null),
        (this.A = null),
        (this.a = this),
        (this.z = 0),
        (this.m = 0),
        (this.c = 0),
        (this.s = 0),
        (this.t = null),
        (this.i = t);
    }
    Z.prototype = Object.create(h.prototype);
    var $ = function() {
        var n = H,
          t = 1,
          e = 1,
          r = null;
        function i(i) {
          var c = (function(n) {
            for (var t, e, r, i, o, u = new Z(n, 0), a = [u]; (t = a.pop()); )
              if ((r = t._.children))
                for (
                  t.children = new Array((o = r.length)), i = o - 1;
                  i >= 0;
                  --i
                )
                  a.push((e = t.children[i] = new Z(r[i], i))), (e.parent = t);
            return ((u.parent = new Z(null, 0)).children = [u]), u;
          })(i);
          if ((c.eachAfter(o), (c.parent.m = -c.z), c.eachBefore(u), r))
            i.eachBefore(a);
          else {
            var f = i,
              s = i,
              l = i;
            i.eachBefore(function(n) {
              n.x < f.x && (f = n),
                n.x > s.x && (s = n),
                n.depth > l.depth && (l = n);
            });
            var h = f === s ? 1 : n(f, s) / 2,
              d = h - f.x,
              p = t / (s.x + h + d),
              v = e / (l.depth || 1);
            i.eachBefore(function(n) {
              (n.x = (n.x + d) * p), (n.y = n.depth * v);
            });
          }
          return i;
        }
        function o(t) {
          var e = t.children,
            r = t.parent.children,
            i = t.i ? r[t.i - 1] : null;
          if (e) {
            !(function(n) {
              for (
                var t, e = 0, r = 0, i = n.children, o = i.length;
                --o >= 0;

              )
                ((t = i[o]).z += e), (t.m += e), (e += t.s + (r += t.c));
            })(t);
            var o = (e[0].z + e[e.length - 1].z) / 2;
            i ? ((t.z = i.z + n(t._, i._)), (t.m = t.z - o)) : (t.z = o);
          } else i && (t.z = i.z + n(t._, i._));
          t.parent.A = (function(t, e, r) {
            if (e) {
              for (
                var i,
                  o = t,
                  u = t,
                  a = e,
                  c = o.parent.children[0],
                  f = o.m,
                  s = u.m,
                  l = a.m,
                  h = c.m;
                (a = V(a)), (o = X(o)), a && o;

              )
                (c = X(c)),
                  ((u = V(u)).a = t),
                  (i = a.z + l - o.z - f + n(a._, o._)) > 0 &&
                    (K(W(a, t, r), t, i), (f += i), (s += i)),
                  (l += a.m),
                  (f += o.m),
                  (h += c.m),
                  (s += u.m);
              a && !V(u) && ((u.t = a), (u.m += l - s)),
                o && !X(c) && ((c.t = o), (c.m += f - h), (r = t));
            }
            return r;
          })(t, i, t.parent.A || r[0]);
        }
        function u(n) {
          (n._.x = n.z + n.parent.m), (n.m += n.parent.m);
        }
        function a(n) {
          (n.x *= t), (n.y = n.depth * e);
        }
        return (
          (i.separation = function(t) {
            return arguments.length ? ((n = t), i) : n;
          }),
          (i.size = function(n) {
            return arguments.length
              ? ((r = !1), (t = +n[0]), (e = +n[1]), i)
              : r
              ? null
              : [t, e];
          }),
          (i.nodeSize = function(n) {
            return arguments.length
              ? ((r = !0), (t = +n[0]), (e = +n[1]), i)
              : r
              ? [t, e]
              : null;
          }),
          i
        );
      },
      Q = function(n, t, e, r, i) {
        for (
          var o,
            u = n.children,
            a = -1,
            c = u.length,
            f = n.value && (i - e) / n.value;
          ++a < c;

        )
          ((o = u[a]).x0 = t),
            (o.x1 = r),
            (o.y0 = e),
            (o.y1 = e += o.value * f);
      },
      J = (1 + Math.sqrt(5)) / 2;
    function nn(n, t, e, r, i, o) {
      for (
        var u,
          a,
          c,
          f,
          s,
          l,
          h,
          d,
          p,
          v,
          m,
          y = [],
          g = t.children,
          _ = 0,
          b = 0,
          x = g.length,
          w = t.value;
        _ < x;

      ) {
        (c = i - e), (f = o - r);
        do {
          s = g[b++].value;
        } while (!s && b < x);
        for (
          l = h = s,
            m = s * s * (v = Math.max(f / c, c / f) / (w * n)),
            p = Math.max(h / m, m / l);
          b < x;
          ++b
        ) {
          if (
            ((s += a = g[b].value),
            a < l && (l = a),
            a > h && (h = a),
            (m = s * s * v),
            (d = Math.max(h / m, m / l)) > p)
          ) {
            s -= a;
            break;
          }
          p = d;
        }
        y.push((u = {value: s, dice: c < f, children: g.slice(_, b)})),
          u.dice
            ? I(u, e, r, i, w ? (r += (f * s) / w) : o)
            : Q(u, e, r, w ? (e += (c * s) / w) : i, o),
          (w -= s),
          (_ = b);
      }
      return y;
    }
    var tn = (function n(t) {
        function e(n, e, r, i, o) {
          nn(t, n, e, r, i, o);
        }
        return (
          (e.ratio = function(t) {
            return n((t = +t) > 1 ? t : 1);
          }),
          e
        );
      })(J),
      en = function() {
        var n = tn,
          t = !1,
          e = 1,
          r = 1,
          i = [0],
          o = T,
          u = T,
          a = T,
          c = T,
          f = T;
        function s(n) {
          return (
            (n.x0 = n.y0 = 0),
            (n.x1 = e),
            (n.y1 = r),
            n.eachBefore(l),
            (i = [0]),
            t && n.eachBefore(D),
            n
          );
        }
        function l(t) {
          var e = i[t.depth],
            r = t.x0 + e,
            s = t.y0 + e,
            l = t.x1 - e,
            h = t.y1 - e;
          l < r && (r = l = (r + l) / 2),
            h < s && (s = h = (s + h) / 2),
            (t.x0 = r),
            (t.y0 = s),
            (t.x1 = l),
            (t.y1 = h),
            t.children &&
              ((e = i[t.depth + 1] = o(t) / 2),
              (r += f(t) - e),
              (s += u(t) - e),
              (l -= a(t) - e) < r && (r = l = (r + l) / 2),
              (h -= c(t) - e) < s && (s = h = (s + h) / 2),
              n(t, r, s, l, h));
        }
        return (
          (s.round = function(n) {
            return arguments.length ? ((t = !!n), s) : t;
          }),
          (s.size = function(n) {
            return arguments.length ? ((e = +n[0]), (r = +n[1]), s) : [e, r];
          }),
          (s.tile = function(t) {
            return arguments.length ? ((n = A(t)), s) : n;
          }),
          (s.padding = function(n) {
            return arguments.length
              ? s.paddingInner(n).paddingOuter(n)
              : s.paddingInner();
          }),
          (s.paddingInner = function(n) {
            return arguments.length
              ? ((o = 'function' == typeof n ? n : S(+n)), s)
              : o;
          }),
          (s.paddingOuter = function(n) {
            return arguments.length
              ? s
                  .paddingTop(n)
                  .paddingRight(n)
                  .paddingBottom(n)
                  .paddingLeft(n)
              : s.paddingTop();
          }),
          (s.paddingTop = function(n) {
            return arguments.length
              ? ((u = 'function' == typeof n ? n : S(+n)), s)
              : u;
          }),
          (s.paddingRight = function(n) {
            return arguments.length
              ? ((a = 'function' == typeof n ? n : S(+n)), s)
              : a;
          }),
          (s.paddingBottom = function(n) {
            return arguments.length
              ? ((c = 'function' == typeof n ? n : S(+n)), s)
              : c;
          }),
          (s.paddingLeft = function(n) {
            return arguments.length
              ? ((f = 'function' == typeof n ? n : S(+n)), s)
              : f;
          }),
          s
        );
      },
      rn = function(n, t, e, r, i) {
        var o,
          u,
          a = n.children,
          c = a.length,
          f = new Array(c + 1);
        for (f[0] = u = o = 0; o < c; ++o) f[o + 1] = u += a[o].value;
        !(function n(t, e, r, i, o, u, c) {
          if (t >= e - 1) {
            var s = a[t];
            return (s.x0 = i), (s.y0 = o), (s.x1 = u), void (s.y1 = c);
          }
          var l = f[t],
            h = r / 2 + l,
            d = t + 1,
            p = e - 1;
          for (; d < p; ) {
            var v = (d + p) >>> 1;
            f[v] < h ? (d = v + 1) : (p = v);
          }
          h - f[d - 1] < f[d] - h && t + 1 < d && --d;
          var m = f[d] - l,
            y = r - m;
          if (u - i > c - o) {
            var g = (i * y + u * m) / r;
            n(t, d, m, i, o, g, c), n(d, e, y, g, o, u, c);
          } else {
            var _ = (o * y + c * m) / r;
            n(t, d, m, i, o, u, _), n(d, e, y, i, _, u, c);
          }
        })(0, c, n.value, t, e, r, i);
      },
      on = function(n, t, e, r, i) {
        (1 & n.depth ? Q : I)(n, t, e, r, i);
      },
      un = (function n(t) {
        function e(n, e, r, i, o) {
          if ((u = n._squarify) && u.ratio === t)
            for (
              var u, a, c, f, s, l = -1, h = u.length, d = n.value;
              ++l < h;

            ) {
              for (
                c = (a = u[l]).children, f = a.value = 0, s = c.length;
                f < s;
                ++f
              )
                a.value += c[f].value;
              a.dice
                ? I(a, e, r, i, (r += ((o - r) * a.value) / d))
                : Q(a, e, r, (e += ((i - e) * a.value) / d), o),
                (d -= a.value);
            }
          else (n._squarify = u = nn(t, n, e, r, i, o)), (u.ratio = t);
        }
        return (
          (e.ratio = function(t) {
            return n((t = +t) > 1 ? t : 1);
          }),
          e
        );
      })(J);
    e.d(t, 'cluster', function() {
      return u;
    }),
      e.d(t, 'hierarchy', function() {
        return c;
      }),
      e.d(t, 'pack', function() {
        return U;
      }),
      e.d(t, 'packSiblings', function() {
        return N;
      }),
      e.d(t, 'packEnclose', function() {
        return p;
      }),
      e.d(t, 'partition', function() {
        return L;
      }),
      e.d(t, 'stratify', function() {
        return G;
      }),
      e.d(t, 'tree', function() {
        return $;
      }),
      e.d(t, 'treemap', function() {
        return en;
      }),
      e.d(t, 'treemapBinary', function() {
        return rn;
      }),
      e.d(t, 'treemapDice', function() {
        return I;
      }),
      e.d(t, 'treemapSlice', function() {
        return Q;
      }),
      e.d(t, 'treemapSliceDice', function() {
        return on;
      }),
      e.d(t, 'treemapSquarify', function() {
        return tn;
      }),
      e.d(t, 'treemapResquarify', function() {
        return un;
      });
  },
  function(n, t, e) {
    'use strict';
    Object.defineProperty(t, '__esModule', {value: !0}),
      (function(n) {
        (n.METRIC = 'METRIC'), (n.DIMENSION = 'DIMENSION');
      })(t.ConceptType || (t.ConceptType = {})),
      (function(n) {
        n.RENDER = 'RENDER';
      })(t.MessageType || (t.MessageType = {})),
      (function(n) {
        (n.YEAR = 'YEAR'),
          (n.YEAR_QUARTER = 'YEAR_QUARTER'),
          (n.YEAR_MONTH = 'YEAR_MONTH'),
          (n.YEAR_WEEK = 'YEAR_WEEK'),
          (n.YEAR_MONTH_DAY = 'YEAR_MONTH_DAY'),
          (n.YEAR_MONTH_DAY_HOUR = 'YEAR_MONTH_DAY_HOUR'),
          (n.QUARTER = 'QUARTER'),
          (n.MONTH = 'MONTH'),
          (n.WEEK = 'WEEK'),
          (n.MONTH_DAY = 'MONTH_DAY'),
          (n.DAY_OF_WEEK = 'DAY_OF_WEEK'),
          (n.DAY = 'DAY'),
          (n.HOUR = 'HOUR'),
          (n.MINUTE = 'MINUTE'),
          (n.DURATION = 'DURATION'),
          (n.COUNTRY = 'COUNTRY'),
          (n.COUNTRY_CODE = 'COUNTRY_CODE'),
          (n.CONTINENT = 'CONTINENT'),
          (n.CONTINENT_CODE = 'CONTINENT_CODE'),
          (n.SUB_CONTINENT = 'SUB_CONTINENT'),
          (n.SUB_CONTINENT_CODE = 'SUB_CONTINENT_CODE'),
          (n.REGION = 'REGION'),
          (n.REGION_CODE = 'REGION_CODE'),
          (n.CITY = 'CITY'),
          (n.CITY_CODE = 'CITY_CODE'),
          (n.METRO_CODE = 'METRO_CODE'),
          (n.LATITUDE_LONGITUDE = 'LATITUDE_LONGITUDE'),
          (n.NUMBER = 'NUMBER'),
          (n.PERCENT = 'PERCENT'),
          (n.TEXT = 'TEXT'),
          (n.BOOLEAN = 'BOOLEAN'),
          (n.URL = 'URL'),
          (n.IMAGE = 'IMAGE'),
          (n.CURRENCY_AED = 'CURRENCY_AED'),
          (n.CURRENCY_ALL = 'CURRENCY_ALL'),
          (n.CURRENCY_ARS = 'CURRENCY_ARS'),
          (n.CURRENCY_AUD = 'CURRENCY_AUD'),
          (n.CURRENCY_BDT = 'CURRENCY_BDT'),
          (n.CURRENCY_BGN = 'CURRENCY_BGN'),
          (n.CURRENCY_BOB = 'CURRENCY_BOB'),
          (n.CURRENCY_BRL = 'CURRENCY_BRL'),
          (n.CURRENCY_CAD = 'CURRENCY_CAD'),
          (n.CURRENCY_CDF = 'CURRENCY_CDF'),
          (n.CURRENCY_CHF = 'CURRENCY_CHF'),
          (n.CURRENCY_CLP = 'CURRENCY_CLP'),
          (n.CURRENCY_CNY = 'CURRENCY_CNY'),
          (n.CURRENCY_COP = 'CURRENCY_COP'),
          (n.CURRENCY_CRC = 'CURRENCY_CRC'),
          (n.CURRENCY_CZK = 'CURRENCY_CZK'),
          (n.CURRENCY_DKK = 'CURRENCY_DKK'),
          (n.CURRENCY_DOP = 'CURRENCY_DOP'),
          (n.CURRENCY_EGP = 'CURRENCY_EGP'),
          (n.CURRENCY_ETB = 'CURRENCY_ETB'),
          (n.CURRENCY_EUR = 'CURRENCY_EUR'),
          (n.CURRENCY_GBP = 'CURRENCY_GBP'),
          (n.CURRENCY_HKD = 'CURRENCY_HKD'),
          (n.CURRENCY_HRK = 'CURRENCY_HRK'),
          (n.CURRENCY_HUF = 'CURRENCY_HUF'),
          (n.CURRENCY_IDR = 'CURRENCY_IDR'),
          (n.CURRENCY_ILS = 'CURRENCY_ILS'),
          (n.CURRENCY_INR = 'CURRENCY_INR'),
          (n.CURRENCY_IRR = 'CURRENCY_IRR'),
          (n.CURRENCY_ISK = 'CURRENCY_ISK'),
          (n.CURRENCY_JMD = 'CURRENCY_JMD'),
          (n.CURRENCY_JPY = 'CURRENCY_JPY'),
          (n.CURRENCY_KRW = 'CURRENCY_KRW'),
          (n.CURRENCY_LKR = 'CURRENCY_LKR'),
          (n.CURRENCY_LTL = 'CURRENCY_LTL'),
          (n.CURRENCY_MNT = 'CURRENCY_MNT'),
          (n.CURRENCY_MVR = 'CURRENCY_MVR'),
          (n.CURRENCY_MXN = 'CURRENCY_MXN'),
          (n.CURRENCY_MYR = 'CURRENCY_MYR'),
          (n.CURRENCY_NOK = 'CURRENCY_NOK'),
          (n.CURRENCY_NZD = 'CURRENCY_NZD'),
          (n.CURRENCY_PAB = 'CURRENCY_PAB'),
          (n.CURRENCY_PEN = 'CURRENCY_PEN'),
          (n.CURRENCY_PHP = 'CURRENCY_PHP'),
          (n.CURRENCY_PKR = 'CURRENCY_PKR'),
          (n.CURRENCY_PLN = 'CURRENCY_PLN'),
          (n.CURRENCY_RON = 'CURRENCY_RON'),
          (n.CURRENCY_RSD = 'CURRENCY_RSD'),
          (n.CURRENCY_RUB = 'CURRENCY_RUB'),
          (n.CURRENCY_SAR = 'CURRENCY_SAR'),
          (n.CURRENCY_SEK = 'CURRENCY_SEK'),
          (n.CURRENCY_SGD = 'CURRENCY_SGD'),
          (n.CURRENCY_THB = 'CURRENCY_THB'),
          (n.CURRENCY_TRY = 'CURRENCY_TRY'),
          (n.CURRENCY_TWD = 'CURRENCY_TWD'),
          (n.CURRENCY_TZS = 'CURRENCY_TZS'),
          (n.CURRENCY_UAH = 'CURRENCY_UAH'),
          (n.CURRENCY_USD = 'CURRENCY_USD'),
          (n.CURRENCY_UYU = 'CURRENCY_UYU'),
          (n.CURRENCY_VEF = 'CURRENCY_VEF'),
          (n.CURRENCY_VND = 'CURRENCY_VND'),
          (n.CURRENCY_YER = 'CURRENCY_YER'),
          (n.CURRENCY_ZAR = 'CURRENCY_ZAR');
      })(t.FieldType || (t.FieldType = {})),
      (function(n) {
        (n.DEFAULT = 'DEFAULT'),
          (n.COMPARISON = 'COMPARISON'),
          (n.SUMMARY = 'SUMMARY');
      })(t.TableType || (t.TableType = {})),
      (function(n) {
        (n.METRIC = 'METRIC'),
          (n.DIMENSION = 'DIMENSION'),
          (n.SORT = 'SORT'),
          (n.MAX_RESULTS = 'MAX_RESULTS');
      })(t.ConfigDataElementType || (t.ConfigDataElementType = {})),
      (function(n) {
        (n.TEXTINPUT = 'TEXTINPUT'),
          (n.SELECT_SINGLE = 'SELECT_SINGLE'),
          (n.CHECKBOX = 'CHECKBOX'),
          (n.FONT_COLOR = 'FONT_COLOR'),
          (n.FONT_SIZE = 'FONT_SIZE'),
          (n.FONT_FAMILY = 'FONT_FAMILY'),
          (n.FILL_COLOR = 'FILL_COLOR'),
          (n.BORDER_COLOR = 'BORDER_COLOR'),
          (n.AXIS_COLOR = 'AXIS_COLOR'),
          (n.GRID_COLOR = 'GRID_COLOR'),
          (n.OPACITY = 'OPACITY'),
          (n.LINE_WEIGHT = 'LINE_WEIGHT'),
          (n.LINE_STYLE = 'LINE_STYLE'),
          (n.BORDER_RADIUS = 'BORDER_RADIUS'),
          (n.INTERVAL = 'INTERVAL'),
          (n.SELECT_RADIO = 'SELECT_RADIO');
      })(t.ConfigStyleElementType || (t.ConfigStyleElementType = {})),
      (function(n) {
        n.FILTER = 'FILTER';
      })(t.DSInteractionType || (t.DSInteractionType = {})),
      (function(n) {
        (n.VIZ_READY = 'vizReady'), (n.INTERACTION = 'vizAction');
      })(t.ToDSMessageType || (t.ToDSMessageType = {})),
      (function(n) {
        n.FILTER = 'FILTER';
      })(t.InteractionType || (t.InteractionType = {}));
  },
  function(n, t, e) {
    'use strict';
    e.r(t);
    var r = function(n, t) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
      },
      i = function(n) {
        var t;
        return (
          1 === n.length &&
            ((t = n),
            (n = function(n, e) {
              return r(t(n), e);
            })),
          {
            left: function(t, e, r, i) {
              for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
                var o = (r + i) >>> 1;
                n(t[o], e) < 0 ? (r = o + 1) : (i = o);
              }
              return r;
            },
            right: function(t, e, r, i) {
              for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
                var o = (r + i) >>> 1;
                n(t[o], e) > 0 ? (i = o) : (r = o + 1);
              }
              return r;
            },
          }
        );
      };
    var o = i(r),
      u = o.right,
      a = o.left,
      c = u,
      f = function(n, t) {
        null == t && (t = s);
        for (
          var e = 0, r = n.length - 1, i = n[0], o = new Array(r < 0 ? 0 : r);
          e < r;

        )
          o[e] = t(i, (i = n[++e]));
        return o;
      };
    function s(n, t) {
      return [n, t];
    }
    var l = function(n, t, e) {
        var r,
          i,
          o,
          u,
          a = n.length,
          c = t.length,
          f = new Array(a * c);
        for (null == e && (e = s), r = o = 0; r < a; ++r)
          for (u = n[r], i = 0; i < c; ++i, ++o) f[o] = e(u, t[i]);
        return f;
      },
      h = function(n, t) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      },
      d = function(n) {
        return null === n ? NaN : +n;
      },
      p = function(n, t) {
        var e,
          r,
          i = n.length,
          o = 0,
          u = -1,
          a = 0,
          c = 0;
        if (null == t)
          for (; ++u < i; )
            isNaN((e = d(n[u]))) || (c += (r = e - a) * (e - (a += r / ++o)));
        else
          for (; ++u < i; )
            isNaN((e = d(t(n[u], u, n)))) ||
              (c += (r = e - a) * (e - (a += r / ++o)));
        if (o > 1) return c / (o - 1);
      },
      v = function(n, t) {
        var e = p(n, t);
        return e ? Math.sqrt(e) : e;
      },
      m = function(n, t) {
        var e,
          r,
          i,
          o = n.length,
          u = -1;
        if (null == t) {
          for (; ++u < o; )
            if (null != (e = n[u]) && e >= e)
              for (r = i = e; ++u < o; )
                null != (e = n[u]) && (r > e && (r = e), i < e && (i = e));
        } else
          for (; ++u < o; )
            if (null != (e = t(n[u], u, n)) && e >= e)
              for (r = i = e; ++u < o; )
                null != (e = t(n[u], u, n)) &&
                  (r > e && (r = e), i < e && (i = e));
        return [r, i];
      },
      y = Array.prototype,
      g = y.slice,
      _ = y.map,
      b = function(n) {
        return function() {
          return n;
        };
      },
      x = function(n) {
        return n;
      },
      w = function(n, t, e) {
        (n = +n),
          (t = +t),
          (e =
            (i = arguments.length) < 2
              ? ((t = n), (n = 0), 1)
              : i < 3
              ? 1
              : +e);
        for (
          var r = -1,
            i = 0 | Math.max(0, Math.ceil((t - n) / e)),
            o = new Array(i);
          ++r < i;

        )
          o[r] = n + r * e;
        return o;
      },
      M = Math.sqrt(50),
      E = Math.sqrt(10),
      C = Math.sqrt(2),
      R = function(n, t, e) {
        var r,
          i,
          o,
          u,
          a = -1;
        if (((e = +e), (n = +n) === (t = +t) && e > 0)) return [n];
        if (
          ((r = t < n) && ((i = n), (n = t), (t = i)),
          0 === (u = N(n, t, e)) || !isFinite(u))
        )
          return [];
        if (u > 0)
          for (
            n = Math.ceil(n / u),
              t = Math.floor(t / u),
              o = new Array((i = Math.ceil(t - n + 1)));
            ++a < i;

          )
            o[a] = (n + a) * u;
        else
          for (
            n = Math.floor(n * u),
              t = Math.ceil(t * u),
              o = new Array((i = Math.ceil(n - t + 1)));
            ++a < i;

          )
            o[a] = (n - a) / u;
        return r && o.reverse(), o;
      };
    function N(n, t, e) {
      var r = (t - n) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        o = r / Math.pow(10, i);
      return i >= 0
        ? (o >= M ? 10 : o >= E ? 5 : o >= C ? 2 : 1) * Math.pow(10, i)
        : -Math.pow(10, -i) / (o >= M ? 10 : o >= E ? 5 : o >= C ? 2 : 1);
    }
    function A(n, t, e) {
      var r = Math.abs(t - n) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        o = r / i;
      return (
        o >= M ? (i *= 10) : o >= E ? (i *= 5) : o >= C && (i *= 2),
        t < n ? -i : i
      );
    }
    var T = function(n) {
        return Math.ceil(Math.log(n.length) / Math.LN2) + 1;
      },
      S = function() {
        var n = x,
          t = m,
          e = T;
        function r(r) {
          var i,
            o,
            u = r.length,
            a = new Array(u);
          for (i = 0; i < u; ++i) a[i] = n(r[i], i, r);
          var f = t(a),
            s = f[0],
            l = f[1],
            h = e(a, s, l);
          Array.isArray(h) ||
            ((h = A(s, l, h)), (h = w(Math.ceil(s / h) * h, l, h)));
          for (var d = h.length; h[0] <= s; ) h.shift(), --d;
          for (; h[d - 1] > l; ) h.pop(), --d;
          var p,
            v = new Array(d + 1);
          for (i = 0; i <= d; ++i)
            ((p = v[i] = []).x0 = i > 0 ? h[i - 1] : s),
              (p.x1 = i < d ? h[i] : l);
          for (i = 0; i < u; ++i)
            s <= (o = a[i]) && o <= l && v[c(h, o, 0, d)].push(r[i]);
          return v;
        }
        return (
          (r.value = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : b(t)), r)
              : n;
          }),
          (r.domain = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : b([n[0], n[1]])), r)
              : t;
          }),
          (r.thresholds = function(n) {
            return arguments.length
              ? ((e =
                  'function' == typeof n
                    ? n
                    : Array.isArray(n)
                    ? b(g.call(n))
                    : b(n)),
                r)
              : e;
          }),
          r
        );
      },
      k = function(n, t, e) {
        if ((null == e && (e = d), (r = n.length))) {
          if ((t = +t) <= 0 || r < 2) return +e(n[0], 0, n);
          if (t >= 1) return +e(n[r - 1], r - 1, n);
          var r,
            i = (r - 1) * t,
            o = Math.floor(i),
            u = +e(n[o], o, n);
          return u + (+e(n[o + 1], o + 1, n) - u) * (i - o);
        }
      },
      U = function(n, t, e) {
        return (
          (n = _.call(n, d).sort(r)),
          Math.ceil(
            (e - t) /
              (2 * (k(n, 0.75) - k(n, 0.25)) * Math.pow(n.length, -1 / 3))
          )
        );
      },
      Y = function(n, t, e) {
        return Math.ceil((e - t) / (3.5 * v(n) * Math.pow(n.length, -1 / 3)));
      },
      O = function(n, t) {
        var e,
          r,
          i = n.length,
          o = -1;
        if (null == t) {
          for (; ++o < i; )
            if (null != (e = n[o]) && e >= e)
              for (r = e; ++o < i; ) null != (e = n[o]) && e > r && (r = e);
        } else
          for (; ++o < i; )
            if (null != (e = t(n[o], o, n)) && e >= e)
              for (r = e; ++o < i; )
                null != (e = t(n[o], o, n)) && e > r && (r = e);
        return r;
      },
      P = function(n, t) {
        var e,
          r = n.length,
          i = r,
          o = -1,
          u = 0;
        if (null == t) for (; ++o < r; ) isNaN((e = d(n[o]))) ? --i : (u += e);
        else for (; ++o < r; ) isNaN((e = d(t(n[o], o, n)))) ? --i : (u += e);
        if (i) return u / i;
      },
      D = function(n, t) {
        var e,
          i = n.length,
          o = -1,
          u = [];
        if (null == t) for (; ++o < i; ) isNaN((e = d(n[o]))) || u.push(e);
        else for (; ++o < i; ) isNaN((e = d(t(n[o], o, n)))) || u.push(e);
        return k(u.sort(r), 0.5);
      },
      I = function(n) {
        for (var t, e, r, i = n.length, o = -1, u = 0; ++o < i; )
          u += n[o].length;
        for (e = new Array(u); --i >= 0; )
          for (t = (r = n[i]).length; --t >= 0; ) e[--u] = r[t];
        return e;
      },
      L = function(n, t) {
        var e,
          r,
          i = n.length,
          o = -1;
        if (null == t) {
          for (; ++o < i; )
            if (null != (e = n[o]) && e >= e)
              for (r = e; ++o < i; ) null != (e = n[o]) && r > e && (r = e);
        } else
          for (; ++o < i; )
            if (null != (e = t(n[o], o, n)) && e >= e)
              for (r = e; ++o < i; )
                null != (e = t(n[o], o, n)) && r > e && (r = e);
        return r;
      },
      B = function(n, t) {
        for (var e = t.length, r = new Array(e); e--; ) r[e] = n[t[e]];
        return r;
      },
      z = function(n, t) {
        if ((e = n.length)) {
          var e,
            i,
            o = 0,
            u = 0,
            a = n[u];
          for (null == t && (t = r); ++o < e; )
            (t((i = n[o]), a) < 0 || 0 !== t(a, a)) && ((a = i), (u = o));
          return 0 === t(a, a) ? u : void 0;
        }
      },
      q = function(n, t, e) {
        for (
          var r, i, o = (null == e ? n.length : e) - (t = null == t ? 0 : +t);
          o;

        )
          (i = (Math.random() * o--) | 0),
            (r = n[o + t]),
            (n[o + t] = n[i + t]),
            (n[i + t] = r);
        return n;
      },
      F = function(n, t) {
        var e,
          r = n.length,
          i = -1,
          o = 0;
        if (null == t) for (; ++i < r; ) (e = +n[i]) && (o += e);
        else for (; ++i < r; ) (e = +t(n[i], i, n)) && (o += e);
        return o;
      },
      j = function(n) {
        if (!(i = n.length)) return [];
        for (var t = -1, e = L(n, G), r = new Array(e); ++t < e; )
          for (var i, o = -1, u = (r[t] = new Array(i)); ++o < i; )
            u[o] = n[o][t];
        return r;
      };
    function G(n) {
      return n.length;
    }
    var H = function() {
        return j(arguments);
      },
      X = Array.prototype.slice,
      V = function(n) {
        return n;
      },
      K = 1,
      W = 2,
      Z = 3,
      $ = 4,
      Q = 1e-6;
    function J(n) {
      return 'translate(' + (n + 0.5) + ',0)';
    }
    function nn(n) {
      return 'translate(0,' + (n + 0.5) + ')';
    }
    function tn() {
      return !this.__axis;
    }
    function en(n, t) {
      var e = [],
        r = null,
        i = null,
        o = 6,
        u = 6,
        a = 3,
        c = n === K || n === $ ? -1 : 1,
        f = n === $ || n === W ? 'x' : 'y',
        s = n === K || n === Z ? J : nn;
      function l(l) {
        var h = null == r ? (t.ticks ? t.ticks.apply(t, e) : t.domain()) : r,
          d = null == i ? (t.tickFormat ? t.tickFormat.apply(t, e) : V) : i,
          p = Math.max(o, 0) + a,
          v = t.range(),
          m = +v[0] + 0.5,
          y = +v[v.length - 1] + 0.5,
          g = (t.bandwidth
            ? function(n) {
                var t = Math.max(0, n.bandwidth() - 1) / 2;
                return (
                  n.round() && (t = Math.round(t)),
                  function(e) {
                    return +n(e) + t;
                  }
                );
              }
            : function(n) {
                return function(t) {
                  return +n(t);
                };
              })(t.copy()),
          _ = l.selection ? l.selection() : l,
          b = _.selectAll('.domain').data([null]),
          x = _.selectAll('.tick')
            .data(h, t)
            .order(),
          w = x.exit(),
          M = x
            .enter()
            .append('g')
            .attr('class', 'tick'),
          E = x.select('line'),
          C = x.select('text');
        (b = b.merge(
          b
            .enter()
            .insert('path', '.tick')
            .attr('class', 'domain')
            .attr('stroke', 'currentColor')
        )),
          (x = x.merge(M)),
          (E = E.merge(
            M.append('line')
              .attr('stroke', 'currentColor')
              .attr(f + '2', c * o)
          )),
          (C = C.merge(
            M.append('text')
              .attr('fill', 'currentColor')
              .attr(f, c * p)
              .attr('dy', n === K ? '0em' : n === Z ? '0.71em' : '0.32em')
          )),
          l !== _ &&
            ((b = b.transition(l)),
            (x = x.transition(l)),
            (E = E.transition(l)),
            (C = C.transition(l)),
            (w = w
              .transition(l)
              .attr('opacity', Q)
              .attr('transform', function(n) {
                return isFinite((n = g(n)))
                  ? s(n)
                  : this.getAttribute('transform');
              })),
            M.attr('opacity', Q).attr('transform', function(n) {
              var t = this.parentNode.__axis;
              return s(t && isFinite((t = t(n))) ? t : g(n));
            })),
          w.remove(),
          b.attr(
            'd',
            n === $ || n == W
              ? u
                ? 'M' + c * u + ',' + m + 'H0.5V' + y + 'H' + c * u
                : 'M0.5,' + m + 'V' + y
              : u
              ? 'M' + m + ',' + c * u + 'V0.5H' + y + 'V' + c * u
              : 'M' + m + ',0.5H' + y
          ),
          x.attr('opacity', 1).attr('transform', function(n) {
            return s(g(n));
          }),
          E.attr(f + '2', c * o),
          C.attr(f, c * p).text(d),
          _.filter(tn)
            .attr('fill', 'none')
            .attr('font-size', 10)
            .attr('font-family', 'sans-serif')
            .attr(
              'text-anchor',
              n === W ? 'start' : n === $ ? 'end' : 'middle'
            ),
          _.each(function() {
            this.__axis = g;
          });
      }
      return (
        (l.scale = function(n) {
          return arguments.length ? ((t = n), l) : t;
        }),
        (l.ticks = function() {
          return (e = X.call(arguments)), l;
        }),
        (l.tickArguments = function(n) {
          return arguments.length
            ? ((e = null == n ? [] : X.call(n)), l)
            : e.slice();
        }),
        (l.tickValues = function(n) {
          return arguments.length
            ? ((r = null == n ? null : X.call(n)), l)
            : r && r.slice();
        }),
        (l.tickFormat = function(n) {
          return arguments.length ? ((i = n), l) : i;
        }),
        (l.tickSize = function(n) {
          return arguments.length ? ((o = u = +n), l) : o;
        }),
        (l.tickSizeInner = function(n) {
          return arguments.length ? ((o = +n), l) : o;
        }),
        (l.tickSizeOuter = function(n) {
          return arguments.length ? ((u = +n), l) : u;
        }),
        (l.tickPadding = function(n) {
          return arguments.length ? ((a = +n), l) : a;
        }),
        l
      );
    }
    function rn(n) {
      return en(K, n);
    }
    function on(n) {
      return en(W, n);
    }
    function un(n) {
      return en(Z, n);
    }
    function an(n) {
      return en($, n);
    }
    var cn = {value: function() {}};
    function fn() {
      for (var n, t = 0, e = arguments.length, r = {}; t < e; ++t) {
        if (!(n = arguments[t] + '') || n in r)
          throw new Error('illegal type: ' + n);
        r[n] = [];
      }
      return new sn(r);
    }
    function sn(n) {
      this._ = n;
    }
    function ln(n, t) {
      for (var e, r = 0, i = n.length; r < i; ++r)
        if ((e = n[r]).name === t) return e.value;
    }
    function hn(n, t, e) {
      for (var r = 0, i = n.length; r < i; ++r)
        if (n[r].name === t) {
          (n[r] = cn), (n = n.slice(0, r).concat(n.slice(r + 1)));
          break;
        }
      return null != e && n.push({name: t, value: e}), n;
    }
    sn.prototype = fn.prototype = {
      constructor: sn,
      on: function(n, t) {
        var e,
          r,
          i = this._,
          o =
            ((r = i),
            (n + '')
              .trim()
              .split(/^|\s+/)
              .map(function(n) {
                var t = '',
                  e = n.indexOf('.');
                if (
                  (e >= 0 && ((t = n.slice(e + 1)), (n = n.slice(0, e))),
                  n && !r.hasOwnProperty(n))
                )
                  throw new Error('unknown type: ' + n);
                return {type: n, name: t};
              })),
          u = -1,
          a = o.length;
        if (!(arguments.length < 2)) {
          if (null != t && 'function' != typeof t)
            throw new Error('invalid callback: ' + t);
          for (; ++u < a; )
            if ((e = (n = o[u]).type)) i[e] = hn(i[e], n.name, t);
            else if (null == t) for (e in i) i[e] = hn(i[e], n.name, null);
          return this;
        }
        for (; ++u < a; )
          if ((e = (n = o[u]).type) && (e = ln(i[e], n.name))) return e;
      },
      copy: function() {
        var n = {},
          t = this._;
        for (var e in t) n[e] = t[e].slice();
        return new sn(n);
      },
      call: function(n, t) {
        if ((e = arguments.length - 2) > 0)
          for (var e, r, i = new Array(e), o = 0; o < e; ++o)
            i[o] = arguments[o + 2];
        if (!this._.hasOwnProperty(n)) throw new Error('unknown type: ' + n);
        for (o = 0, e = (r = this._[n]).length; o < e; ++o)
          r[o].value.apply(t, i);
      },
      apply: function(n, t, e) {
        if (!this._.hasOwnProperty(n)) throw new Error('unknown type: ' + n);
        for (var r = this._[n], i = 0, o = r.length; i < o; ++i)
          r[i].value.apply(t, e);
      },
    };
    var dn = fn,
      pn = 'http://www.w3.org/1999/xhtml',
      vn = {
        svg: 'http://www.w3.org/2000/svg',
        xhtml: pn,
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xmlns: 'http://www.w3.org/2000/xmlns/',
      },
      mn = function(n) {
        var t = (n += ''),
          e = t.indexOf(':');
        return (
          e >= 0 && 'xmlns' !== (t = n.slice(0, e)) && (n = n.slice(e + 1)),
          vn.hasOwnProperty(t) ? {space: vn[t], local: n} : n
        );
      };
    var yn = function(n) {
      var t = mn(n);
      return (t.local
        ? function(n) {
            return function() {
              return this.ownerDocument.createElementNS(n.space, n.local);
            };
          }
        : function(n) {
            return function() {
              var t = this.ownerDocument,
                e = this.namespaceURI;
              return e === pn && t.documentElement.namespaceURI === pn
                ? t.createElement(n)
                : t.createElementNS(e, n);
            };
          })(t);
    };
    function gn() {}
    var _n = function(n) {
      return null == n
        ? gn
        : function() {
            return this.querySelector(n);
          };
    };
    function bn() {
      return [];
    }
    var xn = function(n) {
        return null == n
          ? bn
          : function() {
              return this.querySelectorAll(n);
            };
      },
      wn = function(n) {
        return function() {
          return this.matches(n);
        };
      },
      Mn = function(n) {
        return new Array(n.length);
      };
    function En(n, t) {
      (this.ownerDocument = n.ownerDocument),
        (this.namespaceURI = n.namespaceURI),
        (this._next = null),
        (this._parent = n),
        (this.__data__ = t);
    }
    En.prototype = {
      constructor: En,
      appendChild: function(n) {
        return this._parent.insertBefore(n, this._next);
      },
      insertBefore: function(n, t) {
        return this._parent.insertBefore(n, t);
      },
      querySelector: function(n) {
        return this._parent.querySelector(n);
      },
      querySelectorAll: function(n) {
        return this._parent.querySelectorAll(n);
      },
    };
    var Cn = '$';
    function Rn(n, t, e, r, i, o) {
      for (var u, a = 0, c = t.length, f = o.length; a < f; ++a)
        (u = t[a])
          ? ((u.__data__ = o[a]), (r[a] = u))
          : (e[a] = new En(n, o[a]));
      for (; a < c; ++a) (u = t[a]) && (i[a] = u);
    }
    function Nn(n, t, e, r, i, o, u) {
      var a,
        c,
        f,
        s = {},
        l = t.length,
        h = o.length,
        d = new Array(l);
      for (a = 0; a < l; ++a)
        (c = t[a]) &&
          ((d[a] = f = Cn + u.call(c, c.__data__, a, t)),
          f in s ? (i[a] = c) : (s[f] = c));
      for (a = 0; a < h; ++a)
        (c = s[(f = Cn + u.call(n, o[a], a, o))])
          ? ((r[a] = c), (c.__data__ = o[a]), (s[f] = null))
          : (e[a] = new En(n, o[a]));
      for (a = 0; a < l; ++a) (c = t[a]) && s[d[a]] === c && (i[a] = c);
    }
    function An(n, t) {
      return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
    }
    var Tn = function(n) {
      return (
        (n.ownerDocument && n.ownerDocument.defaultView) ||
        (n.document && n) ||
        n.defaultView
      );
    };
    function Sn(n, t) {
      return (
        n.style.getPropertyValue(t) ||
        Tn(n)
          .getComputedStyle(n, null)
          .getPropertyValue(t)
      );
    }
    function kn(n) {
      return n.trim().split(/^|\s+/);
    }
    function Un(n) {
      return n.classList || new Yn(n);
    }
    function Yn(n) {
      (this._node = n), (this._names = kn(n.getAttribute('class') || ''));
    }
    function On(n, t) {
      for (var e = Un(n), r = -1, i = t.length; ++r < i; ) e.add(t[r]);
    }
    function Pn(n, t) {
      for (var e = Un(n), r = -1, i = t.length; ++r < i; ) e.remove(t[r]);
    }
    Yn.prototype = {
      add: function(n) {
        this._names.indexOf(n) < 0 &&
          (this._names.push(n),
          this._node.setAttribute('class', this._names.join(' ')));
      },
      remove: function(n) {
        var t = this._names.indexOf(n);
        t >= 0 &&
          (this._names.splice(t, 1),
          this._node.setAttribute('class', this._names.join(' ')));
      },
      contains: function(n) {
        return this._names.indexOf(n) >= 0;
      },
    };
    function Dn() {
      this.textContent = '';
    }
    function In() {
      this.innerHTML = '';
    }
    function Ln() {
      this.nextSibling && this.parentNode.appendChild(this);
    }
    function Bn() {
      this.previousSibling &&
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function zn() {
      return null;
    }
    function qn() {
      var n = this.parentNode;
      n && n.removeChild(this);
    }
    function Fn() {
      return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
    }
    function jn() {
      return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
    }
    var Gn = {},
      Hn = null;
    'undefined' != typeof document &&
      ('onmouseenter' in document.documentElement ||
        (Gn = {mouseenter: 'mouseover', mouseleave: 'mouseout'}));
    function Xn(n, t, e) {
      return (
        (n = Vn(n, t, e)),
        function(t) {
          var e = t.relatedTarget;
          (e && (e === this || 8 & e.compareDocumentPosition(this))) ||
            n.call(this, t);
        }
      );
    }
    function Vn(n, t, e) {
      return function(r) {
        var i = Hn;
        Hn = r;
        try {
          n.call(this, this.__data__, t, e);
        } finally {
          Hn = i;
        }
      };
    }
    function Kn(n) {
      return function() {
        var t = this.__on;
        if (t) {
          for (var e, r = 0, i = -1, o = t.length; r < o; ++r)
            (e = t[r]),
              (n.type && e.type !== n.type) || e.name !== n.name
                ? (t[++i] = e)
                : this.removeEventListener(e.type, e.listener, e.capture);
          ++i ? (t.length = i) : delete this.__on;
        }
      };
    }
    function Wn(n, t, e) {
      var r = Gn.hasOwnProperty(n.type) ? Xn : Vn;
      return function(i, o, u) {
        var a,
          c = this.__on,
          f = r(t, o, u);
        if (c)
          for (var s = 0, l = c.length; s < l; ++s)
            if ((a = c[s]).type === n.type && a.name === n.name)
              return (
                this.removeEventListener(a.type, a.listener, a.capture),
                this.addEventListener(
                  a.type,
                  (a.listener = f),
                  (a.capture = e)
                ),
                void (a.value = t)
              );
        this.addEventListener(n.type, f, e),
          (a = {type: n.type, name: n.name, value: t, listener: f, capture: e}),
          c ? c.push(a) : (this.__on = [a]);
      };
    }
    function Zn(n, t, e, r) {
      var i = Hn;
      (n.sourceEvent = Hn), (Hn = n);
      try {
        return t.apply(e, r);
      } finally {
        Hn = i;
      }
    }
    function $n(n, t, e) {
      var r = Tn(n),
        i = r.CustomEvent;
      'function' == typeof i
        ? (i = new i(t, e))
        : ((i = r.document.createEvent('Event')),
          e
            ? (i.initEvent(t, e.bubbles, e.cancelable), (i.detail = e.detail))
            : i.initEvent(t, !1, !1)),
        n.dispatchEvent(i);
    }
    var Qn = [null];
    function Jn(n, t) {
      (this._groups = n), (this._parents = t);
    }
    function nt() {
      return new Jn([[document.documentElement]], Qn);
    }
    Jn.prototype = nt.prototype = {
      constructor: Jn,
      select: function(n) {
        'function' != typeof n && (n = _n(n));
        for (
          var t = this._groups, e = t.length, r = new Array(e), i = 0;
          i < e;
          ++i
        )
          for (
            var o, u, a = t[i], c = a.length, f = (r[i] = new Array(c)), s = 0;
            s < c;
            ++s
          )
            (o = a[s]) &&
              (u = n.call(o, o.__data__, s, a)) &&
              ('__data__' in o && (u.__data__ = o.__data__), (f[s] = u));
        return new Jn(r, this._parents);
      },
      selectAll: function(n) {
        'function' != typeof n && (n = xn(n));
        for (
          var t = this._groups, e = t.length, r = [], i = [], o = 0;
          o < e;
          ++o
        )
          for (var u, a = t[o], c = a.length, f = 0; f < c; ++f)
            (u = a[f]) && (r.push(n.call(u, u.__data__, f, a)), i.push(u));
        return new Jn(r, i);
      },
      filter: function(n) {
        'function' != typeof n && (n = wn(n));
        for (
          var t = this._groups, e = t.length, r = new Array(e), i = 0;
          i < e;
          ++i
        )
          for (
            var o, u = t[i], a = u.length, c = (r[i] = []), f = 0;
            f < a;
            ++f
          )
            (o = u[f]) && n.call(o, o.__data__, f, u) && c.push(o);
        return new Jn(r, this._parents);
      },
      data: function(n, t) {
        if (!n)
          return (
            (p = new Array(this.size())),
            (s = -1),
            this.each(function(n) {
              p[++s] = n;
            }),
            p
          );
        var e,
          r = t ? Nn : Rn,
          i = this._parents,
          o = this._groups;
        'function' != typeof n &&
          ((e = n),
          (n = function() {
            return e;
          }));
        for (
          var u = o.length,
            a = new Array(u),
            c = new Array(u),
            f = new Array(u),
            s = 0;
          s < u;
          ++s
        ) {
          var l = i[s],
            h = o[s],
            d = h.length,
            p = n.call(l, l && l.__data__, s, i),
            v = p.length,
            m = (c[s] = new Array(v)),
            y = (a[s] = new Array(v));
          r(l, h, m, y, (f[s] = new Array(d)), p, t);
          for (var g, _, b = 0, x = 0; b < v; ++b)
            if ((g = m[b])) {
              for (b >= x && (x = b + 1); !(_ = y[x]) && ++x < v; );
              g._next = _ || null;
            }
        }
        return ((a = new Jn(a, i))._enter = c), (a._exit = f), a;
      },
      enter: function() {
        return new Jn(this._enter || this._groups.map(Mn), this._parents);
      },
      exit: function() {
        return new Jn(this._exit || this._groups.map(Mn), this._parents);
      },
      join: function(n, t, e) {
        var r = this.enter(),
          i = this,
          o = this.exit();
        return (
          (r = 'function' == typeof n ? n(r) : r.append(n + '')),
          null != t && (i = t(i)),
          null == e ? o.remove() : e(o),
          r && i ? r.merge(i).order() : i
        );
      },
      merge: function(n) {
        for (
          var t = this._groups,
            e = n._groups,
            r = t.length,
            i = e.length,
            o = Math.min(r, i),
            u = new Array(r),
            a = 0;
          a < o;
          ++a
        )
          for (
            var c,
              f = t[a],
              s = e[a],
              l = f.length,
              h = (u[a] = new Array(l)),
              d = 0;
            d < l;
            ++d
          )
            (c = f[d] || s[d]) && (h[d] = c);
        for (; a < r; ++a) u[a] = t[a];
        return new Jn(u, this._parents);
      },
      order: function() {
        for (var n = this._groups, t = -1, e = n.length; ++t < e; )
          for (var r, i = n[t], o = i.length - 1, u = i[o]; --o >= 0; )
            (r = i[o]) &&
              (u &&
                4 ^ r.compareDocumentPosition(u) &&
                u.parentNode.insertBefore(r, u),
              (u = r));
        return this;
      },
      sort: function(n) {
        function t(t, e) {
          return t && e ? n(t.__data__, e.__data__) : !t - !e;
        }
        n || (n = An);
        for (
          var e = this._groups, r = e.length, i = new Array(r), o = 0;
          o < r;
          ++o
        ) {
          for (
            var u, a = e[o], c = a.length, f = (i[o] = new Array(c)), s = 0;
            s < c;
            ++s
          )
            (u = a[s]) && (f[s] = u);
          f.sort(t);
        }
        return new Jn(i, this._parents).order();
      },
      call: function() {
        var n = arguments[0];
        return (arguments[0] = this), n.apply(null, arguments), this;
      },
      nodes: function() {
        var n = new Array(this.size()),
          t = -1;
        return (
          this.each(function() {
            n[++t] = this;
          }),
          n
        );
      },
      node: function() {
        for (var n = this._groups, t = 0, e = n.length; t < e; ++t)
          for (var r = n[t], i = 0, o = r.length; i < o; ++i) {
            var u = r[i];
            if (u) return u;
          }
        return null;
      },
      size: function() {
        var n = 0;
        return (
          this.each(function() {
            ++n;
          }),
          n
        );
      },
      empty: function() {
        return !this.node();
      },
      each: function(n) {
        for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
          for (var i, o = t[e], u = 0, a = o.length; u < a; ++u)
            (i = o[u]) && n.call(i, i.__data__, u, o);
        return this;
      },
      attr: function(n, t) {
        var e = mn(n);
        if (arguments.length < 2) {
          var r = this.node();
          return e.local
            ? r.getAttributeNS(e.space, e.local)
            : r.getAttribute(e);
        }
        return this.each(
          (null == t
            ? e.local
              ? function(n) {
                  return function() {
                    this.removeAttributeNS(n.space, n.local);
                  };
                }
              : function(n) {
                  return function() {
                    this.removeAttribute(n);
                  };
                }
            : 'function' == typeof t
            ? e.local
              ? function(n, t) {
                  return function() {
                    var e = t.apply(this, arguments);
                    null == e
                      ? this.removeAttributeNS(n.space, n.local)
                      : this.setAttributeNS(n.space, n.local, e);
                  };
                }
              : function(n, t) {
                  return function() {
                    var e = t.apply(this, arguments);
                    null == e
                      ? this.removeAttribute(n)
                      : this.setAttribute(n, e);
                  };
                }
            : e.local
            ? function(n, t) {
                return function() {
                  this.setAttributeNS(n.space, n.local, t);
                };
              }
            : function(n, t) {
                return function() {
                  this.setAttribute(n, t);
                };
              })(e, t)
        );
      },
      style: function(n, t, e) {
        return arguments.length > 1
          ? this.each(
              (null == t
                ? function(n) {
                    return function() {
                      this.style.removeProperty(n);
                    };
                  }
                : 'function' == typeof t
                ? function(n, t, e) {
                    return function() {
                      var r = t.apply(this, arguments);
                      null == r
                        ? this.style.removeProperty(n)
                        : this.style.setProperty(n, r, e);
                    };
                  }
                : function(n, t, e) {
                    return function() {
                      this.style.setProperty(n, t, e);
                    };
                  })(n, t, null == e ? '' : e)
            )
          : Sn(this.node(), n);
      },
      property: function(n, t) {
        return arguments.length > 1
          ? this.each(
              (null == t
                ? function(n) {
                    return function() {
                      delete this[n];
                    };
                  }
                : 'function' == typeof t
                ? function(n, t) {
                    return function() {
                      var e = t.apply(this, arguments);
                      null == e ? delete this[n] : (this[n] = e);
                    };
                  }
                : function(n, t) {
                    return function() {
                      this[n] = t;
                    };
                  })(n, t)
            )
          : this.node()[n];
      },
      classed: function(n, t) {
        var e = kn(n + '');
        if (arguments.length < 2) {
          for (var r = Un(this.node()), i = -1, o = e.length; ++i < o; )
            if (!r.contains(e[i])) return !1;
          return !0;
        }
        return this.each(
          ('function' == typeof t
            ? function(n, t) {
                return function() {
                  (t.apply(this, arguments) ? On : Pn)(this, n);
                };
              }
            : t
            ? function(n) {
                return function() {
                  On(this, n);
                };
              }
            : function(n) {
                return function() {
                  Pn(this, n);
                };
              })(e, t)
        );
      },
      text: function(n) {
        return arguments.length
          ? this.each(
              null == n
                ? Dn
                : ('function' == typeof n
                    ? function(n) {
                        return function() {
                          var t = n.apply(this, arguments);
                          this.textContent = null == t ? '' : t;
                        };
                      }
                    : function(n) {
                        return function() {
                          this.textContent = n;
                        };
                      })(n)
            )
          : this.node().textContent;
      },
      html: function(n) {
        return arguments.length
          ? this.each(
              null == n
                ? In
                : ('function' == typeof n
                    ? function(n) {
                        return function() {
                          var t = n.apply(this, arguments);
                          this.innerHTML = null == t ? '' : t;
                        };
                      }
                    : function(n) {
                        return function() {
                          this.innerHTML = n;
                        };
                      })(n)
            )
          : this.node().innerHTML;
      },
      raise: function() {
        return this.each(Ln);
      },
      lower: function() {
        return this.each(Bn);
      },
      append: function(n) {
        var t = 'function' == typeof n ? n : yn(n);
        return this.select(function() {
          return this.appendChild(t.apply(this, arguments));
        });
      },
      insert: function(n, t) {
        var e = 'function' == typeof n ? n : yn(n),
          r = null == t ? zn : 'function' == typeof t ? t : _n(t);
        return this.select(function() {
          return this.insertBefore(
            e.apply(this, arguments),
            r.apply(this, arguments) || null
          );
        });
      },
      remove: function() {
        return this.each(qn);
      },
      clone: function(n) {
        return this.select(n ? jn : Fn);
      },
      datum: function(n) {
        return arguments.length
          ? this.property('__data__', n)
          : this.node().__data__;
      },
      on: function(n, t, e) {
        var r,
          i,
          o = (function(n) {
            return n
              .trim()
              .split(/^|\s+/)
              .map(function(n) {
                var t = '',
                  e = n.indexOf('.');
                return (
                  e >= 0 && ((t = n.slice(e + 1)), (n = n.slice(0, e))),
                  {type: n, name: t}
                );
              });
          })(n + ''),
          u = o.length;
        if (!(arguments.length < 2)) {
          for (a = t ? Wn : Kn, null == e && (e = !1), r = 0; r < u; ++r)
            this.each(a(o[r], t, e));
          return this;
        }
        var a = this.node().__on;
        if (a)
          for (var c, f = 0, s = a.length; f < s; ++f)
            for (r = 0, c = a[f]; r < u; ++r)
              if ((i = o[r]).type === c.type && i.name === c.name)
                return c.value;
      },
      dispatch: function(n, t) {
        return this.each(
          ('function' == typeof t
            ? function(n, t) {
                return function() {
                  return $n(this, n, t.apply(this, arguments));
                };
              }
            : function(n, t) {
                return function() {
                  return $n(this, n, t);
                };
              })(n, t)
        );
      },
    };
    var tt = nt,
      et = function(n) {
        return 'string' == typeof n
          ? new Jn([[document.querySelector(n)]], [document.documentElement])
          : new Jn([[n]], Qn);
      },
      rt = function(n) {
        return et(yn(n).call(document.documentElement));
      },
      it = 0;
    function ot() {
      return new ut();
    }
    function ut() {
      this._ = '@' + (++it).toString(36);
    }
    ut.prototype = ot.prototype = {
      constructor: ut,
      get: function(n) {
        for (var t = this._; !(t in n); ) if (!(n = n.parentNode)) return;
        return n[t];
      },
      set: function(n, t) {
        return (n[this._] = t);
      },
      remove: function(n) {
        return this._ in n && delete n[this._];
      },
      toString: function() {
        return this._;
      },
    };
    var at = function() {
        for (var n, t = Hn; (n = t.sourceEvent); ) t = n;
        return t;
      },
      ct = function(n, t) {
        var e = n.ownerSVGElement || n;
        if (e.createSVGPoint) {
          var r = e.createSVGPoint();
          return (
            (r.x = t.clientX),
            (r.y = t.clientY),
            [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
          );
        }
        var i = n.getBoundingClientRect();
        return [
          t.clientX - i.left - n.clientLeft,
          t.clientY - i.top - n.clientTop,
        ];
      },
      ft = function(n) {
        var t = at();
        return t.changedTouches && (t = t.changedTouches[0]), ct(n, t);
      },
      st = function(n) {
        return 'string' == typeof n
          ? new Jn([document.querySelectorAll(n)], [document.documentElement])
          : new Jn([null == n ? [] : n], Qn);
      },
      lt = function(n, t, e) {
        arguments.length < 3 && ((e = t), (t = at().changedTouches));
        for (var r, i = 0, o = t ? t.length : 0; i < o; ++i)
          if ((r = t[i]).identifier === e) return ct(n, r);
        return null;
      },
      ht = function(n, t) {
        null == t && (t = at().touches);
        for (var e = 0, r = t ? t.length : 0, i = new Array(r); e < r; ++e)
          i[e] = ct(n, t[e]);
        return i;
      };
    function dt() {
      Hn.stopImmediatePropagation();
    }
    var pt = function() {
        Hn.preventDefault(), Hn.stopImmediatePropagation();
      },
      vt = function(n) {
        var t = n.document.documentElement,
          e = et(n).on('dragstart.drag', pt, !0);
        'onselectstart' in t
          ? e.on('selectstart.drag', pt, !0)
          : ((t.__noselect = t.style.MozUserSelect),
            (t.style.MozUserSelect = 'none'));
      };
    function mt(n, t) {
      var e = n.document.documentElement,
        r = et(n).on('dragstart.drag', null);
      t &&
        (r.on('click.drag', pt, !0),
        setTimeout(function() {
          r.on('click.drag', null);
        }, 0)),
        'onselectstart' in e
          ? r.on('selectstart.drag', null)
          : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect);
    }
    var yt = function(n) {
      return function() {
        return n;
      };
    };
    function gt(n, t, e, r, i, o, u, a, c, f) {
      (this.target = n),
        (this.type = t),
        (this.subject = e),
        (this.identifier = r),
        (this.active = i),
        (this.x = o),
        (this.y = u),
        (this.dx = a),
        (this.dy = c),
        (this._ = f);
    }
    function _t() {
      return !Hn.button;
    }
    function bt() {
      return this.parentNode;
    }
    function xt(n) {
      return null == n ? {x: Hn.x, y: Hn.y} : n;
    }
    function wt() {
      return 'ontouchstart' in this;
    }
    gt.prototype.on = function() {
      var n = this._.on.apply(this._, arguments);
      return n === this._ ? this : n;
    };
    var Mt,
      Et,
      Ct = function() {
        var n,
          t,
          e,
          r,
          i = _t,
          o = bt,
          u = xt,
          a = wt,
          c = {},
          f = dn('start', 'drag', 'end'),
          s = 0,
          l = 0;
        function h(n) {
          n.on('mousedown.drag', d)
            .filter(a)
            .on('touchstart.drag', m)
            .on('touchmove.drag', y)
            .on('touchend.drag touchcancel.drag', g)
            .style('touch-action', 'none')
            .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
        }
        function d() {
          if (!r && i.apply(this, arguments)) {
            var u = _('mouse', o.apply(this, arguments), ft, this, arguments);
            u &&
              (et(Hn.view)
                .on('mousemove.drag', p, !0)
                .on('mouseup.drag', v, !0),
              vt(Hn.view),
              dt(),
              (e = !1),
              (n = Hn.clientX),
              (t = Hn.clientY),
              u('start'));
          }
        }
        function p() {
          if ((pt(), !e)) {
            var r = Hn.clientX - n,
              i = Hn.clientY - t;
            e = r * r + i * i > l;
          }
          c.mouse('drag');
        }
        function v() {
          et(Hn.view).on('mousemove.drag mouseup.drag', null),
            mt(Hn.view, e),
            pt(),
            c.mouse('end');
        }
        function m() {
          if (i.apply(this, arguments)) {
            var n,
              t,
              e = Hn.changedTouches,
              r = o.apply(this, arguments),
              u = e.length;
            for (n = 0; n < u; ++n)
              (t = _(e[n].identifier, r, lt, this, arguments)) &&
                (dt(), t('start'));
          }
        }
        function y() {
          var n,
            t,
            e = Hn.changedTouches,
            r = e.length;
          for (n = 0; n < r; ++n) (t = c[e[n].identifier]) && (pt(), t('drag'));
        }
        function g() {
          var n,
            t,
            e = Hn.changedTouches,
            i = e.length;
          for (
            r && clearTimeout(r),
              r = setTimeout(function() {
                r = null;
              }, 500),
              n = 0;
            n < i;
            ++n
          )
            (t = c[e[n].identifier]) && (dt(), t('end'));
        }
        function _(n, t, e, r, i) {
          var o,
            a,
            l,
            d = e(t, n),
            p = f.copy();
          if (
            Zn(
              new gt(h, 'beforestart', o, n, s, d[0], d[1], 0, 0, p),
              function() {
                return (
                  null != (Hn.subject = o = u.apply(r, i)) &&
                  ((a = o.x - d[0] || 0), (l = o.y - d[1] || 0), !0)
                );
              }
            )
          )
            return function u(f) {
              var v,
                m = d;
              switch (f) {
                case 'start':
                  (c[n] = u), (v = s++);
                  break;
                case 'end':
                  delete c[n], --s;
                case 'drag':
                  (d = e(t, n)), (v = s);
              }
              Zn(
                new gt(
                  h,
                  f,
                  o,
                  n,
                  v,
                  d[0] + a,
                  d[1] + l,
                  d[0] - m[0],
                  d[1] - m[1],
                  p
                ),
                p.apply,
                p,
                [f, r, i]
              );
            };
        }
        return (
          (h.filter = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : yt(!!n)), h)
              : i;
          }),
          (h.container = function(n) {
            return arguments.length
              ? ((o = 'function' == typeof n ? n : yt(n)), h)
              : o;
          }),
          (h.subject = function(n) {
            return arguments.length
              ? ((u = 'function' == typeof n ? n : yt(n)), h)
              : u;
          }),
          (h.touchable = function(n) {
            return arguments.length
              ? ((a = 'function' == typeof n ? n : yt(!!n)), h)
              : a;
          }),
          (h.on = function() {
            var n = f.on.apply(f, arguments);
            return n === f ? h : n;
          }),
          (h.clickDistance = function(n) {
            return arguments.length ? ((l = (n = +n) * n), h) : Math.sqrt(l);
          }),
          h
        );
      },
      Rt = e(1),
      Nt = 0,
      At = 0,
      Tt = 0,
      St = 1e3,
      kt = 0,
      Ut = 0,
      Yt = 0,
      Ot =
        'object' == typeof performance && performance.now ? performance : Date,
      Pt =
        'object' == typeof window && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function(n) {
              setTimeout(n, 17);
            };
    function Dt() {
      return Ut || (Pt(It), (Ut = Ot.now() + Yt));
    }
    function It() {
      Ut = 0;
    }
    function Lt() {
      this._call = this._time = this._next = null;
    }
    function Bt(n, t, e) {
      var r = new Lt();
      return r.restart(n, t, e), r;
    }
    function zt() {
      Dt(), ++Nt;
      for (var n, t = Mt; t; )
        (n = Ut - t._time) >= 0 && t._call.call(null, n), (t = t._next);
      --Nt;
    }
    function qt() {
      (Ut = (kt = Ot.now()) + Yt), (Nt = At = 0);
      try {
        zt();
      } finally {
        (Nt = 0),
          (function() {
            var n,
              t,
              e = Mt,
              r = 1 / 0;
            for (; e; )
              e._call
                ? (r > e._time && (r = e._time), (n = e), (e = e._next))
                : ((t = e._next),
                  (e._next = null),
                  (e = n ? (n._next = t) : (Mt = t)));
            (Et = n), jt(r);
          })(),
          (Ut = 0);
      }
    }
    function Ft() {
      var n = Ot.now(),
        t = n - kt;
      t > St && ((Yt -= t), (kt = n));
    }
    function jt(n) {
      Nt ||
        (At && (At = clearTimeout(At)),
        n - Ut > 24
          ? (n < 1 / 0 && (At = setTimeout(qt, n - Ot.now() - Yt)),
            Tt && (Tt = clearInterval(Tt)))
          : (Tt || ((kt = Ot.now()), (Tt = setInterval(Ft, St))),
            (Nt = 1),
            Pt(qt)));
    }
    Lt.prototype = Bt.prototype = {
      constructor: Lt,
      restart: function(n, t, e) {
        if ('function' != typeof n)
          throw new TypeError('callback is not a function');
        (e = (null == e ? Dt() : +e) + (null == t ? 0 : +t)),
          this._next ||
            Et === this ||
            (Et ? (Et._next = this) : (Mt = this), (Et = this)),
          (this._call = n),
          (this._time = e),
          jt();
      },
      stop: function() {
        this._call && ((this._call = null), (this._time = 1 / 0), jt());
      },
    };
    var Gt = function(n, t, e) {
        var r = new Lt();
        return (
          (t = null == t ? 0 : +t),
          r.restart(
            function(e) {
              r.stop(), n(e + t);
            },
            t,
            e
          ),
          r
        );
      },
      Ht = function(n, t, e) {
        var r = new Lt(),
          i = t;
        return null == t
          ? (r.restart(n, t, e), r)
          : ((t = +t),
            (e = null == e ? Dt() : +e),
            r.restart(
              function o(u) {
                (u += i), r.restart(o, (i += t), e), n(u);
              },
              t,
              e
            ),
            r);
      },
      Xt = dn('start', 'end', 'cancel', 'interrupt'),
      Vt = [],
      Kt = 0,
      Wt = 1,
      Zt = 2,
      $t = 3,
      Qt = 4,
      Jt = 5,
      ne = 6,
      te = function(n, t, e, r, i, o) {
        var u = n.__transition;
        if (u) {
          if (e in u) return;
        } else n.__transition = {};
        !(function(n, t, e) {
          var r,
            i = n.__transition;
          function o(c) {
            var f, s, l, h;
            if (e.state !== Wt) return a();
            for (f in i)
              if ((h = i[f]).name === e.name) {
                if (h.state === $t) return Gt(o);
                h.state === Qt
                  ? ((h.state = ne),
                    h.timer.stop(),
                    h.on.call('interrupt', n, n.__data__, h.index, h.group),
                    delete i[f])
                  : +f < t &&
                    ((h.state = ne),
                    h.timer.stop(),
                    h.on.call('cancel', n, n.__data__, h.index, h.group),
                    delete i[f]);
              }
            if (
              (Gt(function() {
                e.state === $t &&
                  ((e.state = Qt), e.timer.restart(u, e.delay, e.time), u(c));
              }),
              (e.state = Zt),
              e.on.call('start', n, n.__data__, e.index, e.group),
              e.state === Zt)
            ) {
              for (
                e.state = $t,
                  r = new Array((l = e.tween.length)),
                  f = 0,
                  s = -1;
                f < l;
                ++f
              )
                (h = e.tween[f].value.call(n, n.__data__, e.index, e.group)) &&
                  (r[++s] = h);
              r.length = s + 1;
            }
          }
          function u(t) {
            for (
              var i =
                  t < e.duration
                    ? e.ease.call(null, t / e.duration)
                    : (e.timer.restart(a), (e.state = Jt), 1),
                o = -1,
                u = r.length;
              ++o < u;

            )
              r[o].call(n, i);
            e.state === Jt &&
              (e.on.call('end', n, n.__data__, e.index, e.group), a());
          }
          function a() {
            for (var r in ((e.state = ne), e.timer.stop(), delete i[t], i))
              return;
            delete n.__transition;
          }
          (i[t] = e),
            (e.timer = Bt(
              function(n) {
                (e.state = Wt),
                  e.timer.restart(o, e.delay, e.time),
                  e.delay <= n && o(n - e.delay);
              },
              0,
              e.time
            ));
        })(n, e, {
          name: t,
          index: r,
          group: i,
          on: Xt,
          tween: Vt,
          time: o.time,
          delay: o.delay,
          duration: o.duration,
          ease: o.ease,
          timer: null,
          state: Kt,
        });
      };
    function ee(n, t) {
      var e = ie(n, t);
      if (e.state > Kt) throw new Error('too late; already scheduled');
      return e;
    }
    function re(n, t) {
      var e = ie(n, t);
      if (e.state > $t) throw new Error('too late; already running');
      return e;
    }
    function ie(n, t) {
      var e = n.__transition;
      if (!e || !(e = e[t])) throw new Error('transition not found');
      return e;
    }
    var oe = function(n, t) {
      var e,
        r,
        i,
        o = n.__transition,
        u = !0;
      if (o) {
        for (i in ((t = null == t ? null : t + ''), o))
          (e = o[i]).name === t
            ? ((r = e.state > Zt && e.state < Jt),
              (e.state = ne),
              e.timer.stop(),
              e.on.call(
                r ? 'interrupt' : 'cancel',
                n,
                n.__data__,
                e.index,
                e.group
              ),
              delete o[i])
            : (u = !1);
        u && delete n.__transition;
      }
    };
    function ue(n, t, e) {
      var r = n._id;
      return (
        n.each(function() {
          var n = re(this, r);
          (n.value || (n.value = {}))[t] = e.apply(this, arguments);
        }),
        function(n) {
          return ie(n, r).value[t];
        }
      );
    }
    var ae = e(0),
      ce = function(n, t) {
        var e;
        return ('number' == typeof t
          ? Rt.o
          : t instanceof ae.a
          ? Rt.q
          : (e = Object(ae.a)(t))
          ? ((t = e), Rt.q)
          : Rt.u)(n, t);
      };
    var fe = tt.prototype.constructor;
    function se(n) {
      return function() {
        this.style.removeProperty(n);
      };
    }
    var le = 0;
    function he(n, t, e, r) {
      (this._groups = n), (this._parents = t), (this._name = e), (this._id = r);
    }
    function de(n) {
      return tt().transition(n);
    }
    function pe() {
      return ++le;
    }
    var ve = tt.prototype;
    function me(n) {
      return +n;
    }
    function ye(n) {
      return n * n;
    }
    function ge(n) {
      return n * (2 - n);
    }
    function _e(n) {
      return ((n *= 2) <= 1 ? n * n : --n * (2 - n) + 1) / 2;
    }
    function be(n) {
      return n * n * n;
    }
    function xe(n) {
      return --n * n * n + 1;
    }
    function we(n) {
      return ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2;
    }
    he.prototype = de.prototype = {
      constructor: he,
      select: function(n) {
        var t = this._name,
          e = this._id;
        'function' != typeof n && (n = _n(n));
        for (
          var r = this._groups, i = r.length, o = new Array(i), u = 0;
          u < i;
          ++u
        )
          for (
            var a, c, f = r[u], s = f.length, l = (o[u] = new Array(s)), h = 0;
            h < s;
            ++h
          )
            (a = f[h]) &&
              (c = n.call(a, a.__data__, h, f)) &&
              ('__data__' in a && (c.__data__ = a.__data__),
              (l[h] = c),
              te(l[h], t, e, h, l, ie(a, e)));
        return new he(o, this._parents, t, e);
      },
      selectAll: function(n) {
        var t = this._name,
          e = this._id;
        'function' != typeof n && (n = xn(n));
        for (
          var r = this._groups, i = r.length, o = [], u = [], a = 0;
          a < i;
          ++a
        )
          for (var c, f = r[a], s = f.length, l = 0; l < s; ++l)
            if ((c = f[l])) {
              for (
                var h,
                  d = n.call(c, c.__data__, l, f),
                  p = ie(c, e),
                  v = 0,
                  m = d.length;
                v < m;
                ++v
              )
                (h = d[v]) && te(h, t, e, v, d, p);
              o.push(d), u.push(c);
            }
        return new he(o, u, t, e);
      },
      filter: function(n) {
        'function' != typeof n && (n = wn(n));
        for (
          var t = this._groups, e = t.length, r = new Array(e), i = 0;
          i < e;
          ++i
        )
          for (
            var o, u = t[i], a = u.length, c = (r[i] = []), f = 0;
            f < a;
            ++f
          )
            (o = u[f]) && n.call(o, o.__data__, f, u) && c.push(o);
        return new he(r, this._parents, this._name, this._id);
      },
      merge: function(n) {
        if (n._id !== this._id) throw new Error();
        for (
          var t = this._groups,
            e = n._groups,
            r = t.length,
            i = e.length,
            o = Math.min(r, i),
            u = new Array(r),
            a = 0;
          a < o;
          ++a
        )
          for (
            var c,
              f = t[a],
              s = e[a],
              l = f.length,
              h = (u[a] = new Array(l)),
              d = 0;
            d < l;
            ++d
          )
            (c = f[d] || s[d]) && (h[d] = c);
        for (; a < r; ++a) u[a] = t[a];
        return new he(u, this._parents, this._name, this._id);
      },
      selection: function() {
        return new fe(this._groups, this._parents);
      },
      transition: function() {
        for (
          var n = this._name,
            t = this._id,
            e = pe(),
            r = this._groups,
            i = r.length,
            o = 0;
          o < i;
          ++o
        )
          for (var u, a = r[o], c = a.length, f = 0; f < c; ++f)
            if ((u = a[f])) {
              var s = ie(u, t);
              te(u, n, e, f, a, {
                time: s.time + s.delay + s.duration,
                delay: 0,
                duration: s.duration,
                ease: s.ease,
              });
            }
        return new he(r, this._parents, n, e);
      },
      call: ve.call,
      nodes: ve.nodes,
      node: ve.node,
      size: ve.size,
      empty: ve.empty,
      each: ve.each,
      on: function(n, t) {
        var e = this._id;
        return arguments.length < 2
          ? ie(this.node(), e).on.on(n)
          : this.each(
              (function(n, t, e) {
                var r,
                  i,
                  o = (function(n) {
                    return (n + '')
                      .trim()
                      .split(/^|\s+/)
                      .every(function(n) {
                        var t = n.indexOf('.');
                        return (
                          t >= 0 && (n = n.slice(0, t)), !n || 'start' === n
                        );
                      });
                  })(t)
                    ? ee
                    : re;
                return function() {
                  var u = o(this, n),
                    a = u.on;
                  a !== r && (i = (r = a).copy()).on(t, e), (u.on = i);
                };
              })(e, n, t)
            );
      },
      attr: function(n, t) {
        var e = mn(n),
          r = 'transform' === e ? Rt.w : ce;
        return this.attrTween(
          n,
          'function' == typeof t
            ? (e.local
                ? function(n, t, e) {
                    var r, i, o;
                    return function() {
                      var u,
                        a,
                        c = e(this);
                      if (null != c)
                        return (u = this.getAttributeNS(n.space, n.local)) ===
                          (a = c + '')
                          ? null
                          : u === r && a === i
                          ? o
                          : ((i = a), (o = t((r = u), c)));
                      this.removeAttributeNS(n.space, n.local);
                    };
                  }
                : function(n, t, e) {
                    var r, i, o;
                    return function() {
                      var u,
                        a,
                        c = e(this);
                      if (null != c)
                        return (u = this.getAttribute(n)) === (a = c + '')
                          ? null
                          : u === r && a === i
                          ? o
                          : ((i = a), (o = t((r = u), c)));
                      this.removeAttribute(n);
                    };
                  })(e, r, ue(this, 'attr.' + n, t))
            : null == t
            ? (e.local
                ? function(n) {
                    return function() {
                      this.removeAttributeNS(n.space, n.local);
                    };
                  }
                : function(n) {
                    return function() {
                      this.removeAttribute(n);
                    };
                  })(e)
            : (e.local
                ? function(n, t, e) {
                    var r,
                      i,
                      o = e + '';
                    return function() {
                      var u = this.getAttributeNS(n.space, n.local);
                      return u === o ? null : u === r ? i : (i = t((r = u), e));
                    };
                  }
                : function(n, t, e) {
                    var r,
                      i,
                      o = e + '';
                    return function() {
                      var u = this.getAttribute(n);
                      return u === o ? null : u === r ? i : (i = t((r = u), e));
                    };
                  })(e, r, t)
        );
      },
      attrTween: function(n, t) {
        var e = 'attr.' + n;
        if (arguments.length < 2) return (e = this.tween(e)) && e._value;
        if (null == t) return this.tween(e, null);
        if ('function' != typeof t) throw new Error();
        var r = mn(n);
        return this.tween(
          e,
          (r.local
            ? function(n, t) {
                var e, r;
                function i() {
                  var i = t.apply(this, arguments);
                  return (
                    i !== r &&
                      (e =
                        (r = i) &&
                        (function(n, t) {
                          return function(e) {
                            this.setAttributeNS(n.space, n.local, t(e));
                          };
                        })(n, i)),
                    e
                  );
                }
                return (i._value = t), i;
              }
            : function(n, t) {
                var e, r;
                function i() {
                  var i = t.apply(this, arguments);
                  return (
                    i !== r &&
                      (e =
                        (r = i) &&
                        (function(n, t) {
                          return function(e) {
                            this.setAttribute(n, t(e));
                          };
                        })(n, i)),
                    e
                  );
                }
                return (i._value = t), i;
              })(r, t)
        );
      },
      style: function(n, t, e) {
        var r = 'transform' == (n += '') ? Rt.v : ce;
        return null == t
          ? this.styleTween(
              n,
              (function(n, t) {
                var e, r, i;
                return function() {
                  var o = Sn(this, n),
                    u = (this.style.removeProperty(n), Sn(this, n));
                  return o === u
                    ? null
                    : o === e && u === r
                    ? i
                    : (i = t((e = o), (r = u)));
                };
              })(n, r)
            ).on('end.style.' + n, se(n))
          : 'function' == typeof t
          ? this.styleTween(
              n,
              (function(n, t, e) {
                var r, i, o;
                return function() {
                  var u = Sn(this, n),
                    a = e(this),
                    c = a + '';
                  return (
                    null == a &&
                      (this.style.removeProperty(n), (c = a = Sn(this, n))),
                    u === c
                      ? null
                      : u === r && c === i
                      ? o
                      : ((i = c), (o = t((r = u), a)))
                  );
                };
              })(n, r, ue(this, 'style.' + n, t))
            ).each(
              (function(n, t) {
                var e,
                  r,
                  i,
                  o,
                  u = 'style.' + t,
                  a = 'end.' + u;
                return function() {
                  var c = re(this, n),
                    f = c.on,
                    s = null == c.value[u] ? o || (o = se(t)) : void 0;
                  (f === e && i === s) || (r = (e = f).copy()).on(a, (i = s)),
                    (c.on = r);
                };
              })(this._id, n)
            )
          : this.styleTween(
              n,
              (function(n, t, e) {
                var r,
                  i,
                  o = e + '';
                return function() {
                  var u = Sn(this, n);
                  return u === o ? null : u === r ? i : (i = t((r = u), e));
                };
              })(n, r, t),
              e
            ).on('end.style.' + n, null);
      },
      styleTween: function(n, t, e) {
        var r = 'style.' + (n += '');
        if (arguments.length < 2) return (r = this.tween(r)) && r._value;
        if (null == t) return this.tween(r, null);
        if ('function' != typeof t) throw new Error();
        return this.tween(
          r,
          (function(n, t, e) {
            var r, i;
            function o() {
              var o = t.apply(this, arguments);
              return (
                o !== i &&
                  (r =
                    (i = o) &&
                    (function(n, t, e) {
                      return function(r) {
                        this.style.setProperty(n, t(r), e);
                      };
                    })(n, o, e)),
                r
              );
            }
            return (o._value = t), o;
          })(n, t, null == e ? '' : e)
        );
      },
      text: function(n) {
        return this.tween(
          'text',
          'function' == typeof n
            ? (function(n) {
                return function() {
                  var t = n(this);
                  this.textContent = null == t ? '' : t;
                };
              })(ue(this, 'text', n))
            : (function(n) {
                return function() {
                  this.textContent = n;
                };
              })(null == n ? '' : n + '')
        );
      },
      remove: function() {
        return this.on(
          'end.remove',
          ((n = this._id),
          function() {
            var t = this.parentNode;
            for (var e in this.__transition) if (+e !== n) return;
            t && t.removeChild(this);
          })
        );
        var n;
      },
      tween: function(n, t) {
        var e = this._id;
        if (((n += ''), arguments.length < 2)) {
          for (
            var r, i = ie(this.node(), e).tween, o = 0, u = i.length;
            o < u;
            ++o
          )
            if ((r = i[o]).name === n) return r.value;
          return null;
        }
        return this.each(
          (null == t
            ? function(n, t) {
                var e, r;
                return function() {
                  var i = re(this, n),
                    o = i.tween;
                  if (o !== e)
                    for (var u = 0, a = (r = e = o).length; u < a; ++u)
                      if (r[u].name === t) {
                        (r = r.slice()).splice(u, 1);
                        break;
                      }
                  i.tween = r;
                };
              }
            : function(n, t, e) {
                var r, i;
                if ('function' != typeof e) throw new Error();
                return function() {
                  var o = re(this, n),
                    u = o.tween;
                  if (u !== r) {
                    i = (r = u).slice();
                    for (
                      var a = {name: t, value: e}, c = 0, f = i.length;
                      c < f;
                      ++c
                    )
                      if (i[c].name === t) {
                        i[c] = a;
                        break;
                      }
                    c === f && i.push(a);
                  }
                  o.tween = i;
                };
              })(e, n, t)
        );
      },
      delay: function(n) {
        var t = this._id;
        return arguments.length
          ? this.each(
              ('function' == typeof n
                ? function(n, t) {
                    return function() {
                      ee(this, n).delay = +t.apply(this, arguments);
                    };
                  }
                : function(n, t) {
                    return (
                      (t = +t),
                      function() {
                        ee(this, n).delay = t;
                      }
                    );
                  })(t, n)
            )
          : ie(this.node(), t).delay;
      },
      duration: function(n) {
        var t = this._id;
        return arguments.length
          ? this.each(
              ('function' == typeof n
                ? function(n, t) {
                    return function() {
                      re(this, n).duration = +t.apply(this, arguments);
                    };
                  }
                : function(n, t) {
                    return (
                      (t = +t),
                      function() {
                        re(this, n).duration = t;
                      }
                    );
                  })(t, n)
            )
          : ie(this.node(), t).duration;
      },
      ease: function(n) {
        var t = this._id;
        return arguments.length
          ? this.each(
              (function(n, t) {
                if ('function' != typeof t) throw new Error();
                return function() {
                  re(this, n).ease = t;
                };
              })(t, n)
            )
          : ie(this.node(), t).ease;
      },
      end: function() {
        var n,
          t,
          e = this,
          r = e._id,
          i = e.size();
        return new Promise(function(o, u) {
          var a = {value: u},
            c = {
              value: function() {
                0 == --i && o();
              },
            };
          e.each(function() {
            var e = re(this, r),
              i = e.on;
            i !== n &&
              ((t = (n = i).copy())._.cancel.push(a),
              t._.interrupt.push(a),
              t._.end.push(c)),
              (e.on = t);
          });
        });
      },
    };
    var Me = (function n(t) {
        function e(n) {
          return Math.pow(n, t);
        }
        return (t = +t), (e.exponent = n), e;
      })(3),
      Ee = (function n(t) {
        function e(n) {
          return 1 - Math.pow(1 - n, t);
        }
        return (t = +t), (e.exponent = n), e;
      })(3),
      Ce = (function n(t) {
        function e(n) {
          return ((n *= 2) <= 1 ? Math.pow(n, t) : 2 - Math.pow(2 - n, t)) / 2;
        }
        return (t = +t), (e.exponent = n), e;
      })(3),
      Re = Math.PI,
      Ne = Re / 2;
    function Ae(n) {
      return 1 - Math.cos(n * Ne);
    }
    function Te(n) {
      return Math.sin(n * Ne);
    }
    function Se(n) {
      return (1 - Math.cos(Re * n)) / 2;
    }
    function ke(n) {
      return Math.pow(2, 10 * n - 10);
    }
    function Ue(n) {
      return 1 - Math.pow(2, -10 * n);
    }
    function Ye(n) {
      return (
        ((n *= 2) <= 1
          ? Math.pow(2, 10 * n - 10)
          : 2 - Math.pow(2, 10 - 10 * n)) / 2
      );
    }
    function Oe(n) {
      return 1 - Math.sqrt(1 - n * n);
    }
    function Pe(n) {
      return Math.sqrt(1 - --n * n);
    }
    function De(n) {
      return (
        ((n *= 2) <= 1
          ? 1 - Math.sqrt(1 - n * n)
          : Math.sqrt(1 - (n -= 2) * n) + 1) / 2
      );
    }
    var Ie = 4 / 11,
      Le = 6 / 11,
      Be = 8 / 11,
      ze = 0.75,
      qe = 9 / 11,
      Fe = 10 / 11,
      je = 0.9375,
      Ge = 21 / 22,
      He = 63 / 64,
      Xe = 1 / Ie / Ie;
    function Ve(n) {
      return 1 - Ke(1 - n);
    }
    function Ke(n) {
      return (n = +n) < Ie
        ? Xe * n * n
        : n < Be
        ? Xe * (n -= Le) * n + ze
        : n < Fe
        ? Xe * (n -= qe) * n + je
        : Xe * (n -= Ge) * n + He;
    }
    function We(n) {
      return ((n *= 2) <= 1 ? 1 - Ke(1 - n) : Ke(n - 1) + 1) / 2;
    }
    var Ze = (function n(t) {
        function e(n) {
          return n * n * ((t + 1) * n - t);
        }
        return (t = +t), (e.overshoot = n), e;
      })(1.70158),
      $e = (function n(t) {
        function e(n) {
          return --n * n * ((t + 1) * n + t) + 1;
        }
        return (t = +t), (e.overshoot = n), e;
      })(1.70158),
      Qe = (function n(t) {
        function e(n) {
          return (
            ((n *= 2) < 1
              ? n * n * ((t + 1) * n - t)
              : (n -= 2) * n * ((t + 1) * n + t) + 2) / 2
          );
        }
        return (t = +t), (e.overshoot = n), e;
      })(1.70158),
      Je = 2 * Math.PI,
      nr = (function n(t, e) {
        var r = Math.asin(1 / (t = Math.max(1, t))) * (e /= Je);
        function i(n) {
          return t * Math.pow(2, 10 * --n) * Math.sin((r - n) / e);
        }
        return (
          (i.amplitude = function(t) {
            return n(t, e * Je);
          }),
          (i.period = function(e) {
            return n(t, e);
          }),
          i
        );
      })(1, 0.3),
      tr = (function n(t, e) {
        var r = Math.asin(1 / (t = Math.max(1, t))) * (e /= Je);
        function i(n) {
          return 1 - t * Math.pow(2, -10 * (n = +n)) * Math.sin((n + r) / e);
        }
        return (
          (i.amplitude = function(t) {
            return n(t, e * Je);
          }),
          (i.period = function(e) {
            return n(t, e);
          }),
          i
        );
      })(1, 0.3),
      er = (function n(t, e) {
        var r = Math.asin(1 / (t = Math.max(1, t))) * (e /= Je);
        function i(n) {
          return (
            ((n = 2 * n - 1) < 0
              ? t * Math.pow(2, 10 * n) * Math.sin((r - n) / e)
              : 2 - t * Math.pow(2, -10 * n) * Math.sin((r + n) / e)) / 2
          );
        }
        return (
          (i.amplitude = function(t) {
            return n(t, e * Je);
          }),
          (i.period = function(e) {
            return n(t, e);
          }),
          i
        );
      })(1, 0.3),
      rr = {time: null, delay: 0, duration: 250, ease: we};
    function ir(n, t) {
      for (var e; !(e = n.__transition) || !(e = e[t]); )
        if (!(n = n.parentNode)) return (rr.time = Dt()), rr;
      return e;
    }
    (tt.prototype.interrupt = function(n) {
      return this.each(function() {
        oe(this, n);
      });
    }),
      (tt.prototype.transition = function(n) {
        var t, e;
        n instanceof he
          ? ((t = n._id), (n = n._name))
          : ((t = pe()),
            ((e = rr).time = Dt()),
            (n = null == n ? null : n + ''));
        for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
          for (var u, a = r[o], c = a.length, f = 0; f < c; ++f)
            (u = a[f]) && te(u, n, t, f, a, e || ir(u, t));
        return new he(r, this._parents, n, t);
      });
    var or = [null],
      ur = function(n, t) {
        var e,
          r,
          i = n.__transition;
        if (i)
          for (r in ((t = null == t ? null : t + ''), i))
            if ((e = i[r]).state > Wt && e.name === t)
              return new he([[n]], or, t, +r);
        return null;
      },
      ar = function(n) {
        return function() {
          return n;
        };
      },
      cr = function(n, t, e) {
        (this.target = n), (this.type = t), (this.selection = e);
      };
    function fr() {
      Hn.stopImmediatePropagation();
    }
    var sr = function() {
        Hn.preventDefault(), Hn.stopImmediatePropagation();
      },
      lr = {name: 'drag'},
      hr = {name: 'space'},
      dr = {name: 'handle'},
      pr = {name: 'center'},
      vr = {
        name: 'x',
        handles: ['e', 'w'].map(Mr),
        input: function(n, t) {
          return n && [[n[0], t[0][1]], [n[1], t[1][1]]];
        },
        output: function(n) {
          return n && [n[0][0], n[1][0]];
        },
      },
      mr = {
        name: 'y',
        handles: ['n', 's'].map(Mr),
        input: function(n, t) {
          return n && [[t[0][0], n[0]], [t[1][0], n[1]]];
        },
        output: function(n) {
          return n && [n[0][1], n[1][1]];
        },
      },
      yr = {
        name: 'xy',
        handles: ['n', 'e', 's', 'w', 'nw', 'ne', 'se', 'sw'].map(Mr),
        input: function(n) {
          return n;
        },
        output: function(n) {
          return n;
        },
      },
      gr = {
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
      _r = {e: 'w', w: 'e', nw: 'ne', ne: 'nw', se: 'sw', sw: 'se'},
      br = {n: 's', s: 'n', nw: 'sw', ne: 'se', se: 'ne', sw: 'nw'},
      xr = {
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
      wr = {
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
    function Mr(n) {
      return {type: n};
    }
    function Er() {
      return !Hn.button;
    }
    function Cr() {
      var n = this.ownerSVGElement || this;
      return [[0, 0], [n.width.baseVal.value, n.height.baseVal.value]];
    }
    function Rr(n) {
      for (; !n.__brush; ) if (!(n = n.parentNode)) return;
      return n.__brush;
    }
    function Nr(n) {
      return n[0][0] === n[1][0] || n[0][1] === n[1][1];
    }
    function Ar(n) {
      var t = n.__brush;
      return t ? t.dim.output(t.selection) : null;
    }
    function Tr() {
      return Ur(vr);
    }
    function Sr() {
      return Ur(mr);
    }
    var kr = function() {
      return Ur(yr);
    };
    function Ur(n) {
      var t,
        e = Cr,
        r = Er,
        i = dn(u, 'start', 'brush', 'end'),
        o = 6;
      function u(t) {
        var e = t
          .property('__brush', l)
          .selectAll('.overlay')
          .data([Mr('overlay')]);
        e
          .enter()
          .append('rect')
          .attr('class', 'overlay')
          .attr('pointer-events', 'all')
          .attr('cursor', gr.overlay)
          .merge(e)
          .each(function() {
            var n = Rr(this).extent;
            et(this)
              .attr('x', n[0][0])
              .attr('y', n[0][1])
              .attr('width', n[1][0] - n[0][0])
              .attr('height', n[1][1] - n[0][1]);
          }),
          t
            .selectAll('.selection')
            .data([Mr('selection')])
            .enter()
            .append('rect')
            .attr('class', 'selection')
            .attr('cursor', gr.selection)
            .attr('fill', '#777')
            .attr('fill-opacity', 0.3)
            .attr('stroke', '#fff')
            .attr('shape-rendering', 'crispEdges');
        var r = t.selectAll('.handle').data(n.handles, function(n) {
          return n.type;
        });
        r.exit().remove(),
          r
            .enter()
            .append('rect')
            .attr('class', function(n) {
              return 'handle handle--' + n.type;
            })
            .attr('cursor', function(n) {
              return gr[n.type];
            }),
          t
            .each(a)
            .attr('fill', 'none')
            .attr('pointer-events', 'all')
            .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
            .on('mousedown.brush touchstart.brush', s);
      }
      function a() {
        var n = et(this),
          t = Rr(this).selection;
        t
          ? (n
              .selectAll('.selection')
              .style('display', null)
              .attr('x', t[0][0])
              .attr('y', t[0][1])
              .attr('width', t[1][0] - t[0][0])
              .attr('height', t[1][1] - t[0][1]),
            n
              .selectAll('.handle')
              .style('display', null)
              .attr('x', function(n) {
                return 'e' === n.type[n.type.length - 1]
                  ? t[1][0] - o / 2
                  : t[0][0] - o / 2;
              })
              .attr('y', function(n) {
                return 's' === n.type[0] ? t[1][1] - o / 2 : t[0][1] - o / 2;
              })
              .attr('width', function(n) {
                return 'n' === n.type || 's' === n.type
                  ? t[1][0] - t[0][0] + o
                  : o;
              })
              .attr('height', function(n) {
                return 'e' === n.type || 'w' === n.type
                  ? t[1][1] - t[0][1] + o
                  : o;
              }))
          : n
              .selectAll('.selection,.handle')
              .style('display', 'none')
              .attr('x', null)
              .attr('y', null)
              .attr('width', null)
              .attr('height', null);
      }
      function c(n, t) {
        return n.__brush.emitter || new f(n, t);
      }
      function f(n, t) {
        (this.that = n),
          (this.args = t),
          (this.state = n.__brush),
          (this.active = 0);
      }
      function s() {
        if (Hn.touches) {
          if (Hn.changedTouches.length < Hn.touches.length) return sr();
        } else if (t) return;
        if (r.apply(this, arguments)) {
          var e,
            i,
            o,
            u,
            f,
            s,
            l,
            h,
            d,
            p,
            v,
            m,
            y,
            g = this,
            _ = Hn.target.__data__.type,
            b =
              'selection' === (Hn.metaKey ? (_ = 'overlay') : _)
                ? lr
                : Hn.altKey
                ? pr
                : dr,
            x = n === mr ? null : xr[_],
            w = n === vr ? null : wr[_],
            M = Rr(g),
            E = M.extent,
            C = M.selection,
            R = E[0][0],
            N = E[0][1],
            A = E[1][0],
            T = E[1][1],
            S = x && w && Hn.shiftKey,
            k = ft(g),
            U = k,
            Y = c(g, arguments).beforestart();
          'overlay' === _
            ? (M.selection = C = [
                [(e = n === mr ? R : k[0]), (o = n === vr ? N : k[1])],
                [(f = n === mr ? A : e), (l = n === vr ? T : o)],
              ])
            : ((e = C[0][0]), (o = C[0][1]), (f = C[1][0]), (l = C[1][1])),
            (i = e),
            (u = o),
            (s = f),
            (h = l);
          var O = et(g).attr('pointer-events', 'none'),
            P = O.selectAll('.overlay').attr('cursor', gr[_]);
          if (Hn.touches)
            O.on('touchmove.brush', I, !0).on(
              'touchend.brush touchcancel.brush',
              B,
              !0
            );
          else {
            var D = et(Hn.view)
              .on(
                'keydown.brush',
                function() {
                  switch (Hn.keyCode) {
                    case 16:
                      S = x && w;
                      break;
                    case 18:
                      b === dr &&
                        (x && ((f = s - d * x), (e = i + d * x)),
                        w && ((l = h - p * w), (o = u + p * w)),
                        (b = pr),
                        L());
                      break;
                    case 32:
                      (b !== dr && b !== pr) ||
                        (x < 0 ? (f = s - d) : x > 0 && (e = i - d),
                        w < 0 ? (l = h - p) : w > 0 && (o = u - p),
                        (b = hr),
                        P.attr('cursor', gr.selection),
                        L());
                      break;
                    default:
                      return;
                  }
                  sr();
                },
                !0
              )
              .on(
                'keyup.brush',
                function() {
                  switch (Hn.keyCode) {
                    case 16:
                      S && ((m = y = S = !1), L());
                      break;
                    case 18:
                      b === pr &&
                        (x < 0 ? (f = s) : x > 0 && (e = i),
                        w < 0 ? (l = h) : w > 0 && (o = u),
                        (b = dr),
                        L());
                      break;
                    case 32:
                      b === hr &&
                        (Hn.altKey
                          ? (x && ((f = s - d * x), (e = i + d * x)),
                            w && ((l = h - p * w), (o = u + p * w)),
                            (b = pr))
                          : (x < 0 ? (f = s) : x > 0 && (e = i),
                            w < 0 ? (l = h) : w > 0 && (o = u),
                            (b = dr)),
                        P.attr('cursor', gr[_]),
                        L());
                      break;
                    default:
                      return;
                  }
                  sr();
                },
                !0
              )
              .on('mousemove.brush', I, !0)
              .on('mouseup.brush', B, !0);
            vt(Hn.view);
          }
          fr(), oe(g), a.call(g), Y.start();
        }
        function I() {
          var n = ft(g);
          !S ||
            m ||
            y ||
            (Math.abs(n[0] - U[0]) > Math.abs(n[1] - U[1])
              ? (y = !0)
              : (m = !0)),
            (U = n),
            (v = !0),
            sr(),
            L();
        }
        function L() {
          var n;
          switch (((d = U[0] - k[0]), (p = U[1] - k[1]), b)) {
            case hr:
            case lr:
              x &&
                ((d = Math.max(R - e, Math.min(A - f, d))),
                (i = e + d),
                (s = f + d)),
                w &&
                  ((p = Math.max(N - o, Math.min(T - l, p))),
                  (u = o + p),
                  (h = l + p));
              break;
            case dr:
              x < 0
                ? ((d = Math.max(R - e, Math.min(A - e, d))),
                  (i = e + d),
                  (s = f))
                : x > 0 &&
                  ((d = Math.max(R - f, Math.min(A - f, d))),
                  (i = e),
                  (s = f + d)),
                w < 0
                  ? ((p = Math.max(N - o, Math.min(T - o, p))),
                    (u = o + p),
                    (h = l))
                  : w > 0 &&
                    ((p = Math.max(N - l, Math.min(T - l, p))),
                    (u = o),
                    (h = l + p));
              break;
            case pr:
              x &&
                ((i = Math.max(R, Math.min(A, e - d * x))),
                (s = Math.max(R, Math.min(A, f + d * x)))),
                w &&
                  ((u = Math.max(N, Math.min(T, o - p * w))),
                  (h = Math.max(N, Math.min(T, l + p * w))));
          }
          s < i &&
            ((x *= -1),
            (n = e),
            (e = f),
            (f = n),
            (n = i),
            (i = s),
            (s = n),
            _ in _r && P.attr('cursor', gr[(_ = _r[_])])),
            h < u &&
              ((w *= -1),
              (n = o),
              (o = l),
              (l = n),
              (n = u),
              (u = h),
              (h = n),
              _ in br && P.attr('cursor', gr[(_ = br[_])])),
            M.selection && (C = M.selection),
            m && ((i = C[0][0]), (s = C[1][0])),
            y && ((u = C[0][1]), (h = C[1][1])),
            (C[0][0] === i &&
              C[0][1] === u &&
              C[1][0] === s &&
              C[1][1] === h) ||
              ((M.selection = [[i, u], [s, h]]), a.call(g), Y.brush());
        }
        function B() {
          if ((fr(), Hn.touches)) {
            if (Hn.touches.length) return;
            t && clearTimeout(t),
              (t = setTimeout(function() {
                t = null;
              }, 500)),
              O.on('touchmove.brush touchend.brush touchcancel.brush', null);
          } else
            mt(Hn.view, v),
              D.on(
                'keydown.brush keyup.brush mousemove.brush mouseup.brush',
                null
              );
          O.attr('pointer-events', 'all'),
            P.attr('cursor', gr.overlay),
            M.selection && (C = M.selection),
            Nr(C) && ((M.selection = null), a.call(g)),
            Y.end();
        }
      }
      function l() {
        var t = this.__brush || {selection: null};
        return (t.extent = e.apply(this, arguments)), (t.dim = n), t;
      }
      return (
        (u.move = function(t, e) {
          t.selection
            ? t
                .on('start.brush', function() {
                  c(this, arguments)
                    .beforestart()
                    .start();
                })
                .on('interrupt.brush end.brush', function() {
                  c(this, arguments).end();
                })
                .tween('brush', function() {
                  var t = this,
                    r = t.__brush,
                    i = c(t, arguments),
                    o = r.selection,
                    u = n.input(
                      'function' == typeof e ? e.apply(this, arguments) : e,
                      r.extent
                    ),
                    f = Object(Rt.a)(o, u);
                  function s(n) {
                    (r.selection = 1 === n && Nr(u) ? null : f(n)),
                      a.call(t),
                      i.brush();
                  }
                  return o && u ? s : s(1);
                })
            : t.each(function() {
                var t = arguments,
                  r = this.__brush,
                  i = n.input(
                    'function' == typeof e ? e.apply(this, t) : e,
                    r.extent
                  ),
                  o = c(this, t).beforestart();
                oe(this),
                  (r.selection = null == i || Nr(i) ? null : i),
                  a.call(this),
                  o
                    .start()
                    .brush()
                    .end();
              });
        }),
        (f.prototype = {
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
          emit: function(t) {
            Zn(new cr(u, t, n.output(this.state.selection)), i.apply, i, [
              t,
              this.that,
              this.args,
            ]);
          },
        }),
        (u.extent = function(n) {
          return arguments.length
            ? ((e =
                'function' == typeof n
                  ? n
                  : ar([[+n[0][0], +n[0][1]], [+n[1][0], +n[1][1]]])),
              u)
            : e;
        }),
        (u.filter = function(n) {
          return arguments.length
            ? ((r = 'function' == typeof n ? n : ar(!!n)), u)
            : r;
        }),
        (u.handleSize = function(n) {
          return arguments.length ? ((o = +n), u) : o;
        }),
        (u.on = function() {
          var n = i.on.apply(i, arguments);
          return n === i ? u : n;
        }),
        u
      );
    }
    var Yr = function(n, t) {
      return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
    };
    var Or, Pr;
    1 === (Or = Yr).length &&
      ((Pr = Or),
      (Or = function(n, t) {
        return Yr(Pr(n), t);
      }));
    var Dr = Array.prototype,
      Ir =
        (Dr.slice,
        Dr.map,
        function(n, t, e) {
          (n = +n),
            (t = +t),
            (e =
              (i = arguments.length) < 2
                ? ((t = n), (n = 0), 1)
                : i < 3
                ? 1
                : +e);
          for (
            var r = -1,
              i = 0 | Math.max(0, Math.ceil((t - n) / e)),
              o = new Array(i);
            ++r < i;

          )
            o[r] = n + r * e;
          return o;
        });
    Math.sqrt(50), Math.sqrt(10), Math.sqrt(2);
    var Lr = Math.cos,
      Br = Math.sin,
      zr = Math.PI,
      qr = zr / 2,
      Fr = 2 * zr,
      jr = Math.max;
    var Gr = function() {
        var n = 0,
          t = null,
          e = null,
          r = null;
        function i(i) {
          var o,
            u,
            a,
            c,
            f,
            s,
            l = i.length,
            h = [],
            d = Ir(l),
            p = [],
            v = [],
            m = (v.groups = new Array(l)),
            y = new Array(l * l);
          for (o = 0, f = -1; ++f < l; ) {
            for (u = 0, s = -1; ++s < l; ) u += i[f][s];
            h.push(u), p.push(Ir(l)), (o += u);
          }
          for (
            t &&
              d.sort(function(n, e) {
                return t(h[n], h[e]);
              }),
              e &&
                p.forEach(function(n, t) {
                  n.sort(function(n, r) {
                    return e(i[t][n], i[t][r]);
                  });
                }),
              c = (o = jr(0, Fr - n * l) / o) ? n : Fr / l,
              u = 0,
              f = -1;
            ++f < l;

          ) {
            for (a = u, s = -1; ++s < l; ) {
              var g = d[f],
                _ = p[g][s],
                b = i[g][_],
                x = u,
                w = (u += b * o);
              y[_ * l + g] = {
                index: g,
                subindex: _,
                startAngle: x,
                endAngle: w,
                value: b,
              };
            }
            (m[g] = {index: g, startAngle: a, endAngle: u, value: h[g]}),
              (u += c);
          }
          for (f = -1; ++f < l; )
            for (s = f - 1; ++s < l; ) {
              var M = y[s * l + f],
                E = y[f * l + s];
              (M.value || E.value) &&
                v.push(
                  M.value < E.value
                    ? {source: E, target: M}
                    : {source: M, target: E}
                );
            }
          return r ? v.sort(r) : v;
        }
        return (
          (i.padAngle = function(t) {
            return arguments.length ? ((n = jr(0, t)), i) : n;
          }),
          (i.sortGroups = function(n) {
            return arguments.length ? ((t = n), i) : t;
          }),
          (i.sortSubgroups = function(n) {
            return arguments.length ? ((e = n), i) : e;
          }),
          (i.sortChords = function(n) {
            return arguments.length
              ? (null == n
                  ? (r = null)
                  : ((r = (function(n) {
                      return function(t, e) {
                        return n(
                          t.source.value + t.target.value,
                          e.source.value + e.target.value
                        );
                      };
                    })(n))._ = n),
                i)
              : r && r._;
          }),
          i
        );
      },
      Hr = Array.prototype.slice,
      Xr = function(n) {
        return function() {
          return n;
        };
      },
      Vr = Math.PI,
      Kr = 2 * Vr,
      Wr = Kr - 1e-6;
    function Zr() {
      (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = '');
    }
    function $r() {
      return new Zr();
    }
    Zr.prototype = $r.prototype = {
      constructor: Zr,
      moveTo: function(n, t) {
        this._ +=
          'M' + (this._x0 = this._x1 = +n) + ',' + (this._y0 = this._y1 = +t);
      },
      closePath: function() {
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += 'Z'));
      },
      lineTo: function(n, t) {
        this._ += 'L' + (this._x1 = +n) + ',' + (this._y1 = +t);
      },
      quadraticCurveTo: function(n, t, e, r) {
        this._ +=
          'Q' + +n + ',' + +t + ',' + (this._x1 = +e) + ',' + (this._y1 = +r);
      },
      bezierCurveTo: function(n, t, e, r, i, o) {
        this._ +=
          'C' +
          +n +
          ',' +
          +t +
          ',' +
          +e +
          ',' +
          +r +
          ',' +
          (this._x1 = +i) +
          ',' +
          (this._y1 = +o);
      },
      arcTo: function(n, t, e, r, i) {
        (n = +n), (t = +t), (e = +e), (r = +r), (i = +i);
        var o = this._x1,
          u = this._y1,
          a = e - n,
          c = r - t,
          f = o - n,
          s = u - t,
          l = f * f + s * s;
        if (i < 0) throw new Error('negative radius: ' + i);
        if (null === this._x1)
          this._ += 'M' + (this._x1 = n) + ',' + (this._y1 = t);
        else if (l > 1e-6)
          if (Math.abs(s * a - c * f) > 1e-6 && i) {
            var h = e - o,
              d = r - u,
              p = a * a + c * c,
              v = h * h + d * d,
              m = Math.sqrt(p),
              y = Math.sqrt(l),
              g = i * Math.tan((Vr - Math.acos((p + l - v) / (2 * m * y))) / 2),
              _ = g / y,
              b = g / m;
            Math.abs(_ - 1) > 1e-6 &&
              (this._ += 'L' + (n + _ * f) + ',' + (t + _ * s)),
              (this._ +=
                'A' +
                i +
                ',' +
                i +
                ',0,0,' +
                +(s * h > f * d) +
                ',' +
                (this._x1 = n + b * a) +
                ',' +
                (this._y1 = t + b * c));
          } else this._ += 'L' + (this._x1 = n) + ',' + (this._y1 = t);
        else;
      },
      arc: function(n, t, e, r, i, o) {
        (n = +n), (t = +t);
        var u = (e = +e) * Math.cos(r),
          a = e * Math.sin(r),
          c = n + u,
          f = t + a,
          s = 1 ^ o,
          l = o ? r - i : i - r;
        if (e < 0) throw new Error('negative radius: ' + e);
        null === this._x1
          ? (this._ += 'M' + c + ',' + f)
          : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - f) > 1e-6) &&
            (this._ += 'L' + c + ',' + f),
          e &&
            (l < 0 && (l = (l % Kr) + Kr),
            l > Wr
              ? (this._ +=
                  'A' +
                  e +
                  ',' +
                  e +
                  ',0,1,' +
                  s +
                  ',' +
                  (n - u) +
                  ',' +
                  (t - a) +
                  'A' +
                  e +
                  ',' +
                  e +
                  ',0,1,' +
                  s +
                  ',' +
                  (this._x1 = c) +
                  ',' +
                  (this._y1 = f))
              : l > 1e-6 &&
                (this._ +=
                  'A' +
                  e +
                  ',' +
                  e +
                  ',0,' +
                  +(l >= Vr) +
                  ',' +
                  s +
                  ',' +
                  (this._x1 = n + e * Math.cos(i)) +
                  ',' +
                  (this._y1 = t + e * Math.sin(i))));
      },
      rect: function(n, t, e, r) {
        this._ +=
          'M' +
          (this._x0 = this._x1 = +n) +
          ',' +
          (this._y0 = this._y1 = +t) +
          'h' +
          +e +
          'v' +
          +r +
          'h' +
          -e +
          'Z';
      },
      toString: function() {
        return this._;
      },
    };
    var Qr = $r;
    function Jr(n) {
      return n.source;
    }
    function ni(n) {
      return n.target;
    }
    function ti(n) {
      return n.radius;
    }
    function ei(n) {
      return n.startAngle;
    }
    function ri(n) {
      return n.endAngle;
    }
    var ii = function() {
      var n = Jr,
        t = ni,
        e = ti,
        r = ei,
        i = ri,
        o = null;
      function u() {
        var u,
          a = Hr.call(arguments),
          c = n.apply(this, a),
          f = t.apply(this, a),
          s = +e.apply(this, ((a[0] = c), a)),
          l = r.apply(this, a) - qr,
          h = i.apply(this, a) - qr,
          d = s * Lr(l),
          p = s * Br(l),
          v = +e.apply(this, ((a[0] = f), a)),
          m = r.apply(this, a) - qr,
          y = i.apply(this, a) - qr;
        if (
          (o || (o = u = Qr()),
          o.moveTo(d, p),
          o.arc(0, 0, s, l, h),
          (l === m && h === y) ||
            (o.quadraticCurveTo(0, 0, v * Lr(m), v * Br(m)),
            o.arc(0, 0, v, m, y)),
          o.quadraticCurveTo(0, 0, d, p),
          o.closePath(),
          u)
        )
          return (o = null), u + '' || null;
      }
      return (
        (u.radius = function(n) {
          return arguments.length
            ? ((e = 'function' == typeof n ? n : Xr(+n)), u)
            : e;
        }),
        (u.startAngle = function(n) {
          return arguments.length
            ? ((r = 'function' == typeof n ? n : Xr(+n)), u)
            : r;
        }),
        (u.endAngle = function(n) {
          return arguments.length
            ? ((i = 'function' == typeof n ? n : Xr(+n)), u)
            : i;
        }),
        (u.source = function(t) {
          return arguments.length ? ((n = t), u) : n;
        }),
        (u.target = function(n) {
          return arguments.length ? ((t = n), u) : t;
        }),
        (u.context = function(n) {
          return arguments.length ? ((o = null == n ? null : n), u) : o;
        }),
        u
      );
    };
    function oi() {}
    function ui(n, t) {
      var e = new oi();
      if (n instanceof oi)
        n.each(function(n, t) {
          e.set(t, n);
        });
      else if (Array.isArray(n)) {
        var r,
          i = -1,
          o = n.length;
        if (null == t) for (; ++i < o; ) e.set(i, n[i]);
        else for (; ++i < o; ) e.set(t((r = n[i]), i, n), r);
      } else if (n) for (var u in n) e.set(u, n[u]);
      return e;
    }
    oi.prototype = ui.prototype = {
      constructor: oi,
      has: function(n) {
        return '$' + n in this;
      },
      get: function(n) {
        return this['$' + n];
      },
      set: function(n, t) {
        return (this['$' + n] = t), this;
      },
      remove: function(n) {
        var t = '$' + n;
        return t in this && delete this[t];
      },
      clear: function() {
        for (var n in this) '$' === n[0] && delete this[n];
      },
      keys: function() {
        var n = [];
        for (var t in this) '$' === t[0] && n.push(t.slice(1));
        return n;
      },
      values: function() {
        var n = [];
        for (var t in this) '$' === t[0] && n.push(this[t]);
        return n;
      },
      entries: function() {
        var n = [];
        for (var t in this)
          '$' === t[0] && n.push({key: t.slice(1), value: this[t]});
        return n;
      },
      size: function() {
        var n = 0;
        for (var t in this) '$' === t[0] && ++n;
        return n;
      },
      empty: function() {
        for (var n in this) if ('$' === n[0]) return !1;
        return !0;
      },
      each: function(n) {
        for (var t in this) '$' === t[0] && n(this[t], t.slice(1), this);
      },
    };
    var ai = ui,
      ci = function() {
        var n,
          t,
          e,
          r = [],
          i = [];
        function o(e, i, u, a) {
          if (i >= r.length)
            return null != n && e.sort(n), null != t ? t(e) : e;
          for (
            var c, f, s, l = -1, h = e.length, d = r[i++], p = ai(), v = u();
            ++l < h;

          )
            (s = p.get((c = d((f = e[l])) + ''))) ? s.push(f) : p.set(c, [f]);
          return (
            p.each(function(n, t) {
              a(v, t, o(n, i, u, a));
            }),
            v
          );
        }
        return (e = {
          object: function(n) {
            return o(n, 0, fi, si);
          },
          map: function(n) {
            return o(n, 0, li, hi);
          },
          entries: function(n) {
            return (function n(e, o) {
              if (++o > r.length) return e;
              var u,
                a = i[o - 1];
              return (
                null != t && o >= r.length
                  ? (u = e.entries())
                  : ((u = []),
                    e.each(function(t, e) {
                      u.push({key: e, values: n(t, o)});
                    })),
                null != a
                  ? u.sort(function(n, t) {
                      return a(n.key, t.key);
                    })
                  : u
              );
            })(o(n, 0, li, hi), 0);
          },
          key: function(n) {
            return r.push(n), e;
          },
          sortKeys: function(n) {
            return (i[r.length - 1] = n), e;
          },
          sortValues: function(t) {
            return (n = t), e;
          },
          rollup: function(n) {
            return (t = n), e;
          },
        });
      };
    function fi() {
      return {};
    }
    function si(n, t, e) {
      n[t] = e;
    }
    function li() {
      return ai();
    }
    function hi(n, t, e) {
      n.set(t, e);
    }
    function di() {}
    var pi = ai.prototype;
    function vi(n, t) {
      var e = new di();
      if (n instanceof di)
        n.each(function(n) {
          e.add(n);
        });
      else if (n) {
        var r = -1,
          i = n.length;
        if (null == t) for (; ++r < i; ) e.add(n[r]);
        else for (; ++r < i; ) e.add(t(n[r], r, n));
      }
      return e;
    }
    di.prototype = vi.prototype = {
      constructor: di,
      has: pi.has,
      add: function(n) {
        return (this['$' + (n += '')] = n), this;
      },
      remove: pi.remove,
      clear: pi.clear,
      values: pi.keys,
      size: pi.size,
      empty: pi.empty,
      each: pi.each,
    };
    var mi = vi,
      yi = function(n) {
        var t = [];
        for (var e in n) t.push(e);
        return t;
      },
      gi = function(n) {
        var t = [];
        for (var e in n) t.push(n[e]);
        return t;
      },
      _i = function(n) {
        var t = [];
        for (var e in n) t.push({key: e, value: n[e]});
        return t;
      },
      bi = function(n, t) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
      };
    var xi = (function(n) {
      return (
        1 === n.length &&
          (n = (function(n) {
            return function(t, e) {
              return bi(n(t), e);
            };
          })(n)),
        {
          left: function(t, e, r, i) {
            for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
              var o = (r + i) >>> 1;
              n(t[o], e) < 0 ? (r = o + 1) : (i = o);
            }
            return r;
          },
          right: function(t, e, r, i) {
            for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
              var o = (r + i) >>> 1;
              n(t[o], e) > 0 ? (i = o) : (r = o + 1);
            }
            return r;
          },
        }
      );
    })(bi);
    xi.right, xi.left;
    var wi = function(n, t) {
        var e,
          r,
          i,
          o = n.length,
          u = -1;
        if (null == t) {
          for (; ++u < o; )
            if (null != (e = n[u]) && e >= e)
              for (r = i = e; ++u < o; )
                null != (e = n[u]) && (r > e && (r = e), i < e && (i = e));
        } else
          for (; ++u < o; )
            if (null != (e = t(n[u], u, n)) && e >= e)
              for (r = i = e; ++u < o; )
                null != (e = t(n[u], u, n)) &&
                  (r > e && (r = e), i < e && (i = e));
        return [r, i];
      },
      Mi = Array.prototype,
      Ei =
        (Mi.slice,
        Mi.map,
        function(n, t, e) {
          (n = +n),
            (t = +t),
            (e =
              (i = arguments.length) < 2
                ? ((t = n), (n = 0), 1)
                : i < 3
                ? 1
                : +e);
          for (
            var r = -1,
              i = 0 | Math.max(0, Math.ceil((t - n) / e)),
              o = new Array(i);
            ++r < i;

          )
            o[r] = n + r * e;
          return o;
        }),
      Ci = Math.sqrt(50),
      Ri = Math.sqrt(10),
      Ni = Math.sqrt(2);
    function Ai(n, t, e) {
      var r = Math.abs(t - n) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        o = r / i;
      return (
        o >= Ci ? (i *= 10) : o >= Ri ? (i *= 5) : o >= Ni && (i *= 2),
        t < n ? -i : i
      );
    }
    var Ti = function(n) {
        return Math.ceil(Math.log(n.length) / Math.LN2) + 1;
      },
      Si = function(n, t) {
        var e,
          r,
          i = n.length,
          o = -1;
        if (null == t) {
          for (; ++o < i; )
            if (null != (e = n[o]) && e >= e)
              for (r = e; ++o < i; ) null != (e = n[o]) && e > r && (r = e);
        } else
          for (; ++o < i; )
            if (null != (e = t(n[o], o, n)) && e >= e)
              for (r = e; ++o < i; )
                null != (e = t(n[o], o, n)) && e > r && (r = e);
        return r;
      };
    var ki = Array.prototype.slice,
      Ui = function(n, t) {
        return n - t;
      },
      Yi = function(n) {
        for (
          var t = 0,
            e = n.length,
            r = n[e - 1][1] * n[0][0] - n[e - 1][0] * n[0][1];
          ++t < e;

        )
          r += n[t - 1][1] * n[t][0] - n[t - 1][0] * n[t][1];
        return r;
      },
      Oi = function(n) {
        return function() {
          return n;
        };
      },
      Pi = function(n, t) {
        for (var e, r = -1, i = t.length; ++r < i; )
          if ((e = Di(n, t[r]))) return e;
        return 0;
      };
    function Di(n, t) {
      for (
        var e = t[0], r = t[1], i = -1, o = 0, u = n.length, a = u - 1;
        o < u;
        a = o++
      ) {
        var c = n[o],
          f = c[0],
          s = c[1],
          l = n[a],
          h = l[0],
          d = l[1];
        if (Ii(c, l, t)) return 0;
        s > r != d > r && e < ((h - f) * (r - s)) / (d - s) + f && (i = -i);
      }
      return i;
    }
    function Ii(n, t, e) {
      var r, i, o, u;
      return (
        (function(n, t, e) {
          return (t[0] - n[0]) * (e[1] - n[1]) == (e[0] - n[0]) * (t[1] - n[1]);
        })(n, t, e) &&
        ((i = n[(r = +(n[0] === t[0]))]),
        (o = e[r]),
        (u = t[r]),
        (i <= o && o <= u) || (u <= o && o <= i))
      );
    }
    var Li = function() {},
      Bi = [
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
      zi = function() {
        var n = 1,
          t = 1,
          e = Ti,
          r = a;
        function i(n) {
          var t = e(n);
          if (Array.isArray(t)) t = t.slice().sort(Ui);
          else {
            var r = wi(n),
              i = r[0],
              u = r[1];
            (t = Ai(i, u, t)),
              (t = Ei(Math.floor(i / t) * t, Math.floor(u / t) * t, t));
          }
          return t.map(function(t) {
            return o(n, t);
          });
        }
        function o(e, i) {
          var o = [],
            a = [];
          return (
            (function(e, r, i) {
              var o,
                a,
                c,
                f,
                s,
                l,
                h = new Array(),
                d = new Array();
              (o = a = -1), (f = e[0] >= r), Bi[f << 1].forEach(p);
              for (; ++o < n - 1; )
                (c = f), (f = e[o + 1] >= r), Bi[c | (f << 1)].forEach(p);
              Bi[f << 0].forEach(p);
              for (; ++a < t - 1; ) {
                for (
                  o = -1,
                    f = e[a * n + n] >= r,
                    s = e[a * n] >= r,
                    Bi[(f << 1) | (s << 2)].forEach(p);
                  ++o < n - 1;

                )
                  (c = f),
                    (f = e[a * n + n + o + 1] >= r),
                    (l = s),
                    (s = e[a * n + o + 1] >= r),
                    Bi[c | (f << 1) | (s << 2) | (l << 3)].forEach(p);
                Bi[f | (s << 3)].forEach(p);
              }
              (o = -1), (s = e[a * n] >= r), Bi[s << 2].forEach(p);
              for (; ++o < n - 1; )
                (l = s),
                  (s = e[a * n + o + 1] >= r),
                  Bi[(s << 2) | (l << 3)].forEach(p);
              function p(n) {
                var t,
                  e,
                  r = [n[0][0] + o, n[0][1] + a],
                  c = [n[1][0] + o, n[1][1] + a],
                  f = u(r),
                  s = u(c);
                (t = d[f])
                  ? (e = h[s])
                    ? (delete d[t.end],
                      delete h[e.start],
                      t === e
                        ? (t.ring.push(c), i(t.ring))
                        : (h[t.start] = d[e.end] = {
                            start: t.start,
                            end: e.end,
                            ring: t.ring.concat(e.ring),
                          }))
                    : (delete d[t.end], t.ring.push(c), (d[(t.end = s)] = t))
                  : (t = h[s])
                  ? (e = d[f])
                    ? (delete h[t.start],
                      delete d[e.end],
                      t === e
                        ? (t.ring.push(c), i(t.ring))
                        : (h[e.start] = d[t.end] = {
                            start: e.start,
                            end: t.end,
                            ring: e.ring.concat(t.ring),
                          }))
                    : (delete h[t.start],
                      t.ring.unshift(r),
                      (h[(t.start = f)] = t))
                  : (h[f] = d[s] = {start: f, end: s, ring: [r, c]});
              }
              Bi[s << 3].forEach(p);
            })(e, i, function(n) {
              r(n, e, i), Yi(n) > 0 ? o.push([n]) : a.push(n);
            }),
            a.forEach(function(n) {
              for (var t, e = 0, r = o.length; e < r; ++e)
                if (-1 !== Pi((t = o[e])[0], n)) return void t.push(n);
            }),
            {type: 'MultiPolygon', value: i, coordinates: o}
          );
        }
        function u(t) {
          return 2 * t[0] + t[1] * (n + 1) * 4;
        }
        function a(e, r, i) {
          e.forEach(function(e) {
            var o,
              u = e[0],
              a = e[1],
              c = 0 | u,
              f = 0 | a,
              s = r[f * n + c];
            u > 0 &&
              u < n &&
              c === u &&
              ((o = r[f * n + c - 1]), (e[0] = u + (i - o) / (s - o) - 0.5)),
              a > 0 &&
                a < t &&
                f === a &&
                ((o = r[(f - 1) * n + c]),
                (e[1] = a + (i - o) / (s - o) - 0.5));
          });
        }
        return (
          (i.contour = o),
          (i.size = function(e) {
            if (!arguments.length) return [n, t];
            var r = Math.ceil(e[0]),
              o = Math.ceil(e[1]);
            if (!(r > 0 && o > 0)) throw new Error('invalid size');
            return (n = r), (t = o), i;
          }),
          (i.thresholds = function(n) {
            return arguments.length
              ? ((e =
                  'function' == typeof n
                    ? n
                    : Array.isArray(n)
                    ? Oi(ki.call(n))
                    : Oi(n)),
                i)
              : e;
          }),
          (i.smooth = function(n) {
            return arguments.length ? ((r = n ? a : Li), i) : r === a;
          }),
          i
        );
      };
    function qi(n, t, e) {
      for (var r = n.width, i = n.height, o = 1 + (e << 1), u = 0; u < i; ++u)
        for (var a = 0, c = 0; a < r + e; ++a)
          a < r && (c += n.data[a + u * r]),
            a >= e &&
              (a >= o && (c -= n.data[a - o + u * r]),
              (t.data[a - e + u * r] = c / Math.min(a + 1, r - 1 + o - a, o)));
    }
    function Fi(n, t, e) {
      for (var r = n.width, i = n.height, o = 1 + (e << 1), u = 0; u < r; ++u)
        for (var a = 0, c = 0; a < i + e; ++a)
          a < i && (c += n.data[u + a * r]),
            a >= e &&
              (a >= o && (c -= n.data[u + (a - o) * r]),
              (t.data[u + (a - e) * r] =
                c / Math.min(a + 1, i - 1 + o - a, o)));
    }
    function ji(n) {
      return n[0];
    }
    function Gi(n) {
      return n[1];
    }
    function Hi() {
      return 1;
    }
    var Xi = function() {
        var n = ji,
          t = Gi,
          e = Hi,
          r = 960,
          i = 500,
          o = 20,
          u = 2,
          a = 3 * o,
          c = (r + 2 * a) >> u,
          f = (i + 2 * a) >> u,
          s = Oi(20);
        function l(r) {
          var i = new Float32Array(c * f),
            l = new Float32Array(c * f);
          r.forEach(function(r, o, s) {
            var l = (+n(r, o, s) + a) >> u,
              h = (+t(r, o, s) + a) >> u,
              d = +e(r, o, s);
            l >= 0 && l < c && h >= 0 && h < f && (i[l + h * c] += d);
          }),
            qi(
              {width: c, height: f, data: i},
              {width: c, height: f, data: l},
              o >> u
            ),
            Fi(
              {width: c, height: f, data: l},
              {width: c, height: f, data: i},
              o >> u
            ),
            qi(
              {width: c, height: f, data: i},
              {width: c, height: f, data: l},
              o >> u
            ),
            Fi(
              {width: c, height: f, data: l},
              {width: c, height: f, data: i},
              o >> u
            ),
            qi(
              {width: c, height: f, data: i},
              {width: c, height: f, data: l},
              o >> u
            ),
            Fi(
              {width: c, height: f, data: l},
              {width: c, height: f, data: i},
              o >> u
            );
          var d = s(i);
          if (!Array.isArray(d)) {
            var p = Si(i);
            (d = Ai(0, p, d)), (d = Ei(0, Math.floor(p / d) * d, d)).shift();
          }
          return zi()
            .thresholds(d)
            .size([c, f])(i)
            .map(h);
        }
        function h(n) {
          return (n.value *= Math.pow(2, -2 * u)), n.coordinates.forEach(d), n;
        }
        function d(n) {
          n.forEach(p);
        }
        function p(n) {
          n.forEach(v);
        }
        function v(n) {
          (n[0] = n[0] * Math.pow(2, u) - a),
            (n[1] = n[1] * Math.pow(2, u) - a);
        }
        function m() {
          return (c = (r + 2 * (a = 3 * o)) >> u), (f = (i + 2 * a) >> u), l;
        }
        return (
          (l.x = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : Oi(+t)), l)
              : n;
          }),
          (l.y = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : Oi(+n)), l)
              : t;
          }),
          (l.weight = function(n) {
            return arguments.length
              ? ((e = 'function' == typeof n ? n : Oi(+n)), l)
              : e;
          }),
          (l.size = function(n) {
            if (!arguments.length) return [r, i];
            var t = Math.ceil(n[0]),
              e = Math.ceil(n[1]);
            if (!(t >= 0 || t >= 0)) throw new Error('invalid size');
            return (r = t), (i = e), m();
          }),
          (l.cellSize = function(n) {
            if (!arguments.length) return 1 << u;
            if (!((n = +n) >= 1)) throw new Error('invalid cell size');
            return (u = Math.floor(Math.log(n) / Math.LN2)), m();
          }),
          (l.thresholds = function(n) {
            return arguments.length
              ? ((s =
                  'function' == typeof n
                    ? n
                    : Array.isArray(n)
                    ? Oi(ki.call(n))
                    : Oi(n)),
                l)
              : s;
          }),
          (l.bandwidth = function(n) {
            if (!arguments.length) return Math.sqrt(o * (o + 1));
            if (!((n = +n) >= 0)) throw new Error('invalid bandwidth');
            return (o = Math.round((Math.sqrt(4 * n * n + 1) - 1) / 2)), m();
          }),
          l
        );
      },
      Vi = {},
      Ki = {},
      Wi = 34,
      Zi = 10,
      $i = 13;
    function Qi(n) {
      return new Function(
        'd',
        'return {' +
          n
            .map(function(n, t) {
              return JSON.stringify(n) + ': d[' + t + ']';
            })
            .join(',') +
          '}'
      );
    }
    function Ji(n) {
      var t = Object.create(null),
        e = [];
      return (
        n.forEach(function(n) {
          for (var r in n) r in t || e.push((t[r] = r));
        }),
        e
      );
    }
    function no(n, t) {
      var e = n + '',
        r = e.length;
      return r < t ? new Array(t - r + 1).join(0) + e : e;
    }
    function to(n) {
      var t,
        e = n.getUTCHours(),
        r = n.getUTCMinutes(),
        i = n.getUTCSeconds(),
        o = n.getUTCMilliseconds();
      return isNaN(n)
        ? 'Invalid Date'
        : ((t = n.getUTCFullYear()) < 0
            ? '-' + no(-t, 6)
            : t > 9999
            ? '+' + no(t, 6)
            : no(t, 4)) +
            '-' +
            no(n.getUTCMonth() + 1, 2) +
            '-' +
            no(n.getUTCDate(), 2) +
            (o
              ? 'T' +
                no(e, 2) +
                ':' +
                no(r, 2) +
                ':' +
                no(i, 2) +
                '.' +
                no(o, 3) +
                'Z'
              : i
              ? 'T' + no(e, 2) + ':' + no(r, 2) + ':' + no(i, 2) + 'Z'
              : r || e
              ? 'T' + no(e, 2) + ':' + no(r, 2) + 'Z'
              : '');
    }
    var eo = function(n) {
        var t = new RegExp('["' + n + '\n\r]'),
          e = n.charCodeAt(0);
        function r(n, t) {
          var r,
            i = [],
            o = n.length,
            u = 0,
            a = 0,
            c = o <= 0,
            f = !1;
          function s() {
            if (c) return Ki;
            if (f) return (f = !1), Vi;
            var t,
              r,
              i = u;
            if (n.charCodeAt(i) === Wi) {
              for (
                ;
                (u++ < o && n.charCodeAt(u) !== Wi) || n.charCodeAt(++u) === Wi;

              );
              return (
                (t = u) >= o
                  ? (c = !0)
                  : (r = n.charCodeAt(u++)) === Zi
                  ? (f = !0)
                  : r === $i && ((f = !0), n.charCodeAt(u) === Zi && ++u),
                n.slice(i + 1, t - 1).replace(/""/g, '"')
              );
            }
            for (; u < o; ) {
              if ((r = n.charCodeAt((t = u++))) === Zi) f = !0;
              else if (r === $i) (f = !0), n.charCodeAt(u) === Zi && ++u;
              else if (r !== e) continue;
              return n.slice(i, t);
            }
            return (c = !0), n.slice(i, o);
          }
          for (
            n.charCodeAt(o - 1) === Zi && --o,
              n.charCodeAt(o - 1) === $i && --o;
            (r = s()) !== Ki;

          ) {
            for (var l = []; r !== Vi && r !== Ki; ) l.push(r), (r = s());
            (t && null == (l = t(l, a++))) || i.push(l);
          }
          return i;
        }
        function i(t, e) {
          return t.map(function(t) {
            return e
              .map(function(n) {
                return u(t[n]);
              })
              .join(n);
          });
        }
        function o(t) {
          return t.map(u).join(n);
        }
        function u(n) {
          return null == n
            ? ''
            : n instanceof Date
            ? to(n)
            : t.test((n += ''))
            ? '"' + n.replace(/"/g, '""') + '"'
            : n;
        }
        return {
          parse: function(n, t) {
            var e,
              i,
              o = r(n, function(n, r) {
                if (e) return e(n, r - 1);
                (i = n),
                  (e = t
                    ? (function(n, t) {
                        var e = Qi(n);
                        return function(r, i) {
                          return t(e(r), i, n);
                        };
                      })(n, t)
                    : Qi(n));
              });
            return (o.columns = i || []), o;
          },
          parseRows: r,
          format: function(t, e) {
            return (
              null == e && (e = Ji(t)),
              [e.map(u).join(n)].concat(i(t, e)).join('\n')
            );
          },
          formatBody: function(n, t) {
            return null == t && (t = Ji(n)), i(n, t).join('\n');
          },
          formatRows: function(n) {
            return n.map(o).join('\n');
          },
        };
      },
      ro = eo(','),
      io = ro.parse,
      oo = ro.parseRows,
      uo = ro.format,
      ao = ro.formatBody,
      co = ro.formatRows,
      fo = eo('\t'),
      so = fo.parse,
      lo = fo.parseRows,
      ho = fo.format,
      po = fo.formatBody,
      vo = fo.formatRows;
    function mo(n) {
      for (var t in n) {
        var e,
          r = n[t].trim();
        if (r)
          if ('true' === r) r = !0;
          else if ('false' === r) r = !1;
          else if ('NaN' === r) r = NaN;
          else if (isNaN((e = +r))) {
            if (
              !/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/.test(
                r
              )
            )
              continue;
            r = new Date(r);
          } else r = e;
        else r = null;
        n[t] = r;
      }
      return n;
    }
    function yo(n) {
      if (!n.ok) throw new Error(n.status + ' ' + n.statusText);
      return n.blob();
    }
    var go = function(n, t) {
      return fetch(n, t).then(yo);
    };
    function _o(n) {
      if (!n.ok) throw new Error(n.status + ' ' + n.statusText);
      return n.arrayBuffer();
    }
    var bo = function(n, t) {
      return fetch(n, t).then(_o);
    };
    function xo(n) {
      if (!n.ok) throw new Error(n.status + ' ' + n.statusText);
      return n.text();
    }
    var wo = function(n, t) {
      return fetch(n, t).then(xo);
    };
    function Mo(n) {
      return function(t, e, r) {
        return (
          2 === arguments.length &&
            'function' == typeof e &&
            ((r = e), (e = void 0)),
          wo(t, e).then(function(t) {
            return n(t, r);
          })
        );
      };
    }
    function Eo(n, t, e, r) {
      3 === arguments.length &&
        'function' == typeof e &&
        ((r = e), (e = void 0));
      var i = eo(n);
      return wo(t, e).then(function(n) {
        return i.parse(n, r);
      });
    }
    var Co = Mo(io),
      Ro = Mo(so),
      No = function(n, t) {
        return new Promise(function(e, r) {
          var i = new Image();
          for (var o in t) i[o] = t[o];
          (i.onerror = r),
            (i.onload = function() {
              e(i);
            }),
            (i.src = n);
        });
      };
    function Ao(n) {
      if (!n.ok) throw new Error(n.status + ' ' + n.statusText);
      return n.json();
    }
    var To = function(n, t) {
      return fetch(n, t).then(Ao);
    };
    function So(n) {
      return function(t, e) {
        return wo(t, e).then(function(t) {
          return new DOMParser().parseFromString(t, n);
        });
      };
    }
    var ko = So('application/xml'),
      Uo = So('text/html'),
      Yo = So('image/svg+xml'),
      Oo = function(n, t) {
        var e;
        function r() {
          var r,
            i,
            o = e.length,
            u = 0,
            a = 0;
          for (r = 0; r < o; ++r) (u += (i = e[r]).x), (a += i.y);
          for (u = u / o - n, a = a / o - t, r = 0; r < o; ++r)
            ((i = e[r]).x -= u), (i.y -= a);
        }
        return (
          null == n && (n = 0),
          null == t && (t = 0),
          (r.initialize = function(n) {
            e = n;
          }),
          (r.x = function(t) {
            return arguments.length ? ((n = +t), r) : n;
          }),
          (r.y = function(n) {
            return arguments.length ? ((t = +n), r) : t;
          }),
          r
        );
      },
      Po = function(n) {
        return function() {
          return n;
        };
      },
      Do = function() {
        return 1e-6 * (Math.random() - 0.5);
      };
    function Io(n, t, e, r) {
      if (isNaN(t) || isNaN(e)) return n;
      var i,
        o,
        u,
        a,
        c,
        f,
        s,
        l,
        h,
        d = n._root,
        p = {data: r},
        v = n._x0,
        m = n._y0,
        y = n._x1,
        g = n._y1;
      if (!d) return (n._root = p), n;
      for (; d.length; )
        if (
          ((f = t >= (o = (v + y) / 2)) ? (v = o) : (y = o),
          (s = e >= (u = (m + g) / 2)) ? (m = u) : (g = u),
          (i = d),
          !(d = d[(l = (s << 1) | f)]))
        )
          return (i[l] = p), n;
      if (
        ((a = +n._x.call(null, d.data)),
        (c = +n._y.call(null, d.data)),
        t === a && e === c)
      )
        return (p.next = d), i ? (i[l] = p) : (n._root = p), n;
      do {
        (i = i ? (i[l] = new Array(4)) : (n._root = new Array(4))),
          (f = t >= (o = (v + y) / 2)) ? (v = o) : (y = o),
          (s = e >= (u = (m + g) / 2)) ? (m = u) : (g = u);
      } while ((l = (s << 1) | f) == (h = ((c >= u) << 1) | (a >= o)));
      return (i[h] = d), (i[l] = p), n;
    }
    var Lo = function(n, t, e, r, i) {
      (this.node = n),
        (this.x0 = t),
        (this.y0 = e),
        (this.x1 = r),
        (this.y1 = i);
    };
    function Bo(n) {
      return n[0];
    }
    function zo(n) {
      return n[1];
    }
    function qo(n, t, e) {
      var r = new Fo(
        null == t ? Bo : t,
        null == e ? zo : e,
        NaN,
        NaN,
        NaN,
        NaN
      );
      return null == n ? r : r.addAll(n);
    }
    function Fo(n, t, e, r, i, o) {
      (this._x = n),
        (this._y = t),
        (this._x0 = e),
        (this._y0 = r),
        (this._x1 = i),
        (this._y1 = o),
        (this._root = void 0);
    }
    function jo(n) {
      for (var t = {data: n.data}, e = t; (n = n.next); )
        e = e.next = {data: n.data};
      return t;
    }
    var Go = (qo.prototype = Fo.prototype);
    function Ho(n) {
      return n.x + n.vx;
    }
    function Xo(n) {
      return n.y + n.vy;
    }
    (Go.copy = function() {
      var n,
        t,
        e = new Fo(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;
      if (!r) return e;
      if (!r.length) return (e._root = jo(r)), e;
      for (n = [{source: r, target: (e._root = new Array(4))}]; (r = n.pop()); )
        for (var i = 0; i < 4; ++i)
          (t = r.source[i]) &&
            (t.length
              ? n.push({source: t, target: (r.target[i] = new Array(4))})
              : (r.target[i] = jo(t)));
      return e;
    }),
      (Go.add = function(n) {
        var t = +this._x.call(null, n),
          e = +this._y.call(null, n);
        return Io(this.cover(t, e), t, e, n);
      }),
      (Go.addAll = function(n) {
        var t,
          e,
          r,
          i,
          o = n.length,
          u = new Array(o),
          a = new Array(o),
          c = 1 / 0,
          f = 1 / 0,
          s = -1 / 0,
          l = -1 / 0;
        for (e = 0; e < o; ++e)
          isNaN((r = +this._x.call(null, (t = n[e])))) ||
            isNaN((i = +this._y.call(null, t))) ||
            ((u[e] = r),
            (a[e] = i),
            r < c && (c = r),
            r > s && (s = r),
            i < f && (f = i),
            i > l && (l = i));
        if (c > s || f > l) return this;
        for (this.cover(c, f).cover(s, l), e = 0; e < o; ++e)
          Io(this, u[e], a[e], n[e]);
        return this;
      }),
      (Go.cover = function(n, t) {
        if (isNaN((n = +n)) || isNaN((t = +t))) return this;
        var e = this._x0,
          r = this._y0,
          i = this._x1,
          o = this._y1;
        if (isNaN(e))
          (i = (e = Math.floor(n)) + 1), (o = (r = Math.floor(t)) + 1);
        else {
          for (
            var u, a, c = i - e, f = this._root;
            e > n || n >= i || r > t || t >= o;

          )
            switch (
              ((a = ((t < r) << 1) | (n < e)),
              ((u = new Array(4))[a] = f),
              (f = u),
              (c *= 2),
              a)
            ) {
              case 0:
                (i = e + c), (o = r + c);
                break;
              case 1:
                (e = i - c), (o = r + c);
                break;
              case 2:
                (i = e + c), (r = o - c);
                break;
              case 3:
                (e = i - c), (r = o - c);
            }
          this._root && this._root.length && (this._root = f);
        }
        return (
          (this._x0 = e), (this._y0 = r), (this._x1 = i), (this._y1 = o), this
        );
      }),
      (Go.data = function() {
        var n = [];
        return (
          this.visit(function(t) {
            if (!t.length)
              do {
                n.push(t.data);
              } while ((t = t.next));
          }),
          n
        );
      }),
      (Go.extent = function(n) {
        return arguments.length
          ? this.cover(+n[0][0], +n[0][1]).cover(+n[1][0], +n[1][1])
          : isNaN(this._x0)
          ? void 0
          : [[this._x0, this._y0], [this._x1, this._y1]];
      }),
      (Go.find = function(n, t, e) {
        var r,
          i,
          o,
          u,
          a,
          c,
          f,
          s = this._x0,
          l = this._y0,
          h = this._x1,
          d = this._y1,
          p = [],
          v = this._root;
        for (
          v && p.push(new Lo(v, s, l, h, d)),
            null == e
              ? (e = 1 / 0)
              : ((s = n - e), (l = t - e), (h = n + e), (d = t + e), (e *= e));
          (c = p.pop());

        )
          if (
            !(
              !(v = c.node) ||
              (i = c.x0) > h ||
              (o = c.y0) > d ||
              (u = c.x1) < s ||
              (a = c.y1) < l
            )
          )
            if (v.length) {
              var m = (i + u) / 2,
                y = (o + a) / 2;
              p.push(
                new Lo(v[3], m, y, u, a),
                new Lo(v[2], i, y, m, a),
                new Lo(v[1], m, o, u, y),
                new Lo(v[0], i, o, m, y)
              ),
                (f = ((t >= y) << 1) | (n >= m)) &&
                  ((c = p[p.length - 1]),
                  (p[p.length - 1] = p[p.length - 1 - f]),
                  (p[p.length - 1 - f] = c));
            } else {
              var g = n - +this._x.call(null, v.data),
                _ = t - +this._y.call(null, v.data),
                b = g * g + _ * _;
              if (b < e) {
                var x = Math.sqrt((e = b));
                (s = n - x),
                  (l = t - x),
                  (h = n + x),
                  (d = t + x),
                  (r = v.data);
              }
            }
        return r;
      }),
      (Go.remove = function(n) {
        if (
          isNaN((o = +this._x.call(null, n))) ||
          isNaN((u = +this._y.call(null, n)))
        )
          return this;
        var t,
          e,
          r,
          i,
          o,
          u,
          a,
          c,
          f,
          s,
          l,
          h,
          d = this._root,
          p = this._x0,
          v = this._y0,
          m = this._x1,
          y = this._y1;
        if (!d) return this;
        if (d.length)
          for (;;) {
            if (
              ((f = o >= (a = (p + m) / 2)) ? (p = a) : (m = a),
              (s = u >= (c = (v + y) / 2)) ? (v = c) : (y = c),
              (t = d),
              !(d = d[(l = (s << 1) | f)]))
            )
              return this;
            if (!d.length) break;
            (t[(l + 1) & 3] || t[(l + 2) & 3] || t[(l + 3) & 3]) &&
              ((e = t), (h = l));
          }
        for (; d.data !== n; ) if (((r = d), !(d = d.next))) return this;
        return (
          (i = d.next) && delete d.next,
          r
            ? (i ? (r.next = i) : delete r.next, this)
            : t
            ? (i ? (t[l] = i) : delete t[l],
              (d = t[0] || t[1] || t[2] || t[3]) &&
                d === (t[3] || t[2] || t[1] || t[0]) &&
                !d.length &&
                (e ? (e[h] = d) : (this._root = d)),
              this)
            : ((this._root = i), this)
        );
      }),
      (Go.removeAll = function(n) {
        for (var t = 0, e = n.length; t < e; ++t) this.remove(n[t]);
        return this;
      }),
      (Go.root = function() {
        return this._root;
      }),
      (Go.size = function() {
        var n = 0;
        return (
          this.visit(function(t) {
            if (!t.length)
              do {
                ++n;
              } while ((t = t.next));
          }),
          n
        );
      }),
      (Go.visit = function(n) {
        var t,
          e,
          r,
          i,
          o,
          u,
          a = [],
          c = this._root;
        for (
          c && a.push(new Lo(c, this._x0, this._y0, this._x1, this._y1));
          (t = a.pop());

        )
          if (
            !n((c = t.node), (r = t.x0), (i = t.y0), (o = t.x1), (u = t.y1)) &&
            c.length
          ) {
            var f = (r + o) / 2,
              s = (i + u) / 2;
            (e = c[3]) && a.push(new Lo(e, f, s, o, u)),
              (e = c[2]) && a.push(new Lo(e, r, s, f, u)),
              (e = c[1]) && a.push(new Lo(e, f, i, o, s)),
              (e = c[0]) && a.push(new Lo(e, r, i, f, s));
          }
        return this;
      }),
      (Go.visitAfter = function(n) {
        var t,
          e = [],
          r = [];
        for (
          this._root &&
          e.push(new Lo(this._root, this._x0, this._y0, this._x1, this._y1));
          (t = e.pop());

        ) {
          var i = t.node;
          if (i.length) {
            var o,
              u = t.x0,
              a = t.y0,
              c = t.x1,
              f = t.y1,
              s = (u + c) / 2,
              l = (a + f) / 2;
            (o = i[0]) && e.push(new Lo(o, u, a, s, l)),
              (o = i[1]) && e.push(new Lo(o, s, a, c, l)),
              (o = i[2]) && e.push(new Lo(o, u, l, s, f)),
              (o = i[3]) && e.push(new Lo(o, s, l, c, f));
          }
          r.push(t);
        }
        for (; (t = r.pop()); ) n(t.node, t.x0, t.y0, t.x1, t.y1);
        return this;
      }),
      (Go.x = function(n) {
        return arguments.length ? ((this._x = n), this) : this._x;
      }),
      (Go.y = function(n) {
        return arguments.length ? ((this._y = n), this) : this._y;
      });
    var Vo = function(n) {
      var t,
        e,
        r = 1,
        i = 1;
      function o() {
        for (var n, o, a, c, f, s, l, h = t.length, d = 0; d < i; ++d)
          for (o = qo(t, Ho, Xo).visitAfter(u), n = 0; n < h; ++n)
            (a = t[n]),
              (s = e[a.index]),
              (l = s * s),
              (c = a.x + a.vx),
              (f = a.y + a.vy),
              o.visit(p);
        function p(n, t, e, i, o) {
          var u = n.data,
            h = n.r,
            d = s + h;
          if (!u) return t > c + d || i < c - d || e > f + d || o < f - d;
          if (u.index > a.index) {
            var p = c - u.x - u.vx,
              v = f - u.y - u.vy,
              m = p * p + v * v;
            m < d * d &&
              (0 === p && (m += (p = Do()) * p),
              0 === v && (m += (v = Do()) * v),
              (m = ((d - (m = Math.sqrt(m))) / m) * r),
              (a.vx += (p *= m) * (d = (h *= h) / (l + h))),
              (a.vy += (v *= m) * d),
              (u.vx -= p * (d = 1 - d)),
              (u.vy -= v * d));
          }
        }
      }
      function u(n) {
        if (n.data) return (n.r = e[n.data.index]);
        for (var t = (n.r = 0); t < 4; ++t)
          n[t] && n[t].r > n.r && (n.r = n[t].r);
      }
      function a() {
        if (t) {
          var r,
            i,
            o = t.length;
          for (e = new Array(o), r = 0; r < o; ++r)
            (i = t[r]), (e[i.index] = +n(i, r, t));
        }
      }
      return (
        'function' != typeof n && (n = Po(null == n ? 1 : +n)),
        (o.initialize = function(n) {
          (t = n), a();
        }),
        (o.iterations = function(n) {
          return arguments.length ? ((i = +n), o) : i;
        }),
        (o.strength = function(n) {
          return arguments.length ? ((r = +n), o) : r;
        }),
        (o.radius = function(t) {
          return arguments.length
            ? ((n = 'function' == typeof t ? t : Po(+t)), a(), o)
            : n;
        }),
        o
      );
    };
    function Ko(n) {
      return n.index;
    }
    function Wo(n, t) {
      var e = n.get(t);
      if (!e) throw new Error('missing: ' + t);
      return e;
    }
    var Zo = function(n) {
      var t,
        e,
        r,
        i,
        o,
        u = Ko,
        a = function(n) {
          return 1 / Math.min(i[n.source.index], i[n.target.index]);
        },
        c = Po(30),
        f = 1;
      function s(r) {
        for (var i = 0, u = n.length; i < f; ++i)
          for (var a, c, s, l, h, d, p, v = 0; v < u; ++v)
            (c = (a = n[v]).source),
              (l = (s = a.target).x + s.vx - c.x - c.vx || Do()),
              (h = s.y + s.vy - c.y - c.vy || Do()),
              (l *= d =
                (((d = Math.sqrt(l * l + h * h)) - e[v]) / d) * r * t[v]),
              (h *= d),
              (s.vx -= l * (p = o[v])),
              (s.vy -= h * p),
              (c.vx += l * (p = 1 - p)),
              (c.vy += h * p);
      }
      function l() {
        if (r) {
          var a,
            c,
            f = r.length,
            s = n.length,
            l = ai(r, u);
          for (a = 0, i = new Array(f); a < s; ++a)
            ((c = n[a]).index = a),
              'object' != typeof c.source && (c.source = Wo(l, c.source)),
              'object' != typeof c.target && (c.target = Wo(l, c.target)),
              (i[c.source.index] = (i[c.source.index] || 0) + 1),
              (i[c.target.index] = (i[c.target.index] || 0) + 1);
          for (a = 0, o = new Array(s); a < s; ++a)
            (c = n[a]),
              (o[a] =
                i[c.source.index] / (i[c.source.index] + i[c.target.index]));
          (t = new Array(s)), h(), (e = new Array(s)), d();
        }
      }
      function h() {
        if (r) for (var e = 0, i = n.length; e < i; ++e) t[e] = +a(n[e], e, n);
      }
      function d() {
        if (r) for (var t = 0, i = n.length; t < i; ++t) e[t] = +c(n[t], t, n);
      }
      return (
        null == n && (n = []),
        (s.initialize = function(n) {
          (r = n), l();
        }),
        (s.links = function(t) {
          return arguments.length ? ((n = t), l(), s) : n;
        }),
        (s.id = function(n) {
          return arguments.length ? ((u = n), s) : u;
        }),
        (s.iterations = function(n) {
          return arguments.length ? ((f = +n), s) : f;
        }),
        (s.strength = function(n) {
          return arguments.length
            ? ((a = 'function' == typeof n ? n : Po(+n)), h(), s)
            : a;
        }),
        (s.distance = function(n) {
          return arguments.length
            ? ((c = 'function' == typeof n ? n : Po(+n)), d(), s)
            : c;
        }),
        s
      );
    };
    function $o(n) {
      return n.x;
    }
    function Qo(n) {
      return n.y;
    }
    var Jo = 10,
      nu = Math.PI * (3 - Math.sqrt(5)),
      tu = function(n) {
        var t,
          e = 1,
          r = 0.001,
          i = 1 - Math.pow(r, 1 / 300),
          o = 0,
          u = 0.6,
          a = ai(),
          c = Bt(s),
          f = dn('tick', 'end');
        function s() {
          l(), f.call('tick', t), e < r && (c.stop(), f.call('end', t));
        }
        function l(r) {
          var c,
            f,
            s = n.length;
          void 0 === r && (r = 1);
          for (var l = 0; l < r; ++l)
            for (
              e += (o - e) * i,
                a.each(function(n) {
                  n(e);
                }),
                c = 0;
              c < s;
              ++c
            )
              null == (f = n[c]).fx
                ? (f.x += f.vx *= u)
                : ((f.x = f.fx), (f.vx = 0)),
                null == f.fy ? (f.y += f.vy *= u) : ((f.y = f.fy), (f.vy = 0));
          return t;
        }
        function h() {
          for (var t, e = 0, r = n.length; e < r; ++e) {
            if (
              (((t = n[e]).index = e),
              null != t.fx && (t.x = t.fx),
              null != t.fy && (t.y = t.fy),
              isNaN(t.x) || isNaN(t.y))
            ) {
              var i = Jo * Math.sqrt(e),
                o = e * nu;
              (t.x = i * Math.cos(o)), (t.y = i * Math.sin(o));
            }
            (isNaN(t.vx) || isNaN(t.vy)) && (t.vx = t.vy = 0);
          }
        }
        function d(t) {
          return t.initialize && t.initialize(n), t;
        }
        return (
          null == n && (n = []),
          h(),
          (t = {
            tick: l,
            restart: function() {
              return c.restart(s), t;
            },
            stop: function() {
              return c.stop(), t;
            },
            nodes: function(e) {
              return arguments.length ? ((n = e), h(), a.each(d), t) : n;
            },
            alpha: function(n) {
              return arguments.length ? ((e = +n), t) : e;
            },
            alphaMin: function(n) {
              return arguments.length ? ((r = +n), t) : r;
            },
            alphaDecay: function(n) {
              return arguments.length ? ((i = +n), t) : +i;
            },
            alphaTarget: function(n) {
              return arguments.length ? ((o = +n), t) : o;
            },
            velocityDecay: function(n) {
              return arguments.length ? ((u = 1 - n), t) : 1 - u;
            },
            force: function(n, e) {
              return arguments.length > 1
                ? (null == e ? a.remove(n) : a.set(n, d(e)), t)
                : a.get(n);
            },
            find: function(t, e, r) {
              var i,
                o,
                u,
                a,
                c,
                f = 0,
                s = n.length;
              for (null == r ? (r = 1 / 0) : (r *= r), f = 0; f < s; ++f)
                (u = (i = t - (a = n[f]).x) * i + (o = e - a.y) * o) < r &&
                  ((c = a), (r = u));
              return c;
            },
            on: function(n, e) {
              return arguments.length > 1 ? (f.on(n, e), t) : f.on(n);
            },
          })
        );
      },
      eu = function() {
        var n,
          t,
          e,
          r,
          i = Po(-30),
          o = 1,
          u = 1 / 0,
          a = 0.81;
        function c(r) {
          var i,
            o = n.length,
            u = qo(n, $o, Qo).visitAfter(s);
          for (e = r, i = 0; i < o; ++i) (t = n[i]), u.visit(l);
        }
        function f() {
          if (n) {
            var t,
              e,
              o = n.length;
            for (r = new Array(o), t = 0; t < o; ++t)
              (e = n[t]), (r[e.index] = +i(e, t, n));
          }
        }
        function s(n) {
          var t,
            e,
            i,
            o,
            u,
            a = 0,
            c = 0;
          if (n.length) {
            for (i = o = u = 0; u < 4; ++u)
              (t = n[u]) &&
                (e = Math.abs(t.value)) &&
                ((a += t.value), (c += e), (i += e * t.x), (o += e * t.y));
            (n.x = i / c), (n.y = o / c);
          } else {
            ((t = n).x = t.data.x), (t.y = t.data.y);
            do {
              a += r[t.data.index];
            } while ((t = t.next));
          }
          n.value = a;
        }
        function l(n, i, c, f) {
          if (!n.value) return !0;
          var s = n.x - t.x,
            l = n.y - t.y,
            h = f - i,
            d = s * s + l * l;
          if ((h * h) / a < d)
            return (
              d < u &&
                (0 === s && (d += (s = Do()) * s),
                0 === l && (d += (l = Do()) * l),
                d < o && (d = Math.sqrt(o * d)),
                (t.vx += (s * n.value * e) / d),
                (t.vy += (l * n.value * e) / d)),
              !0
            );
          if (!(n.length || d >= u)) {
            (n.data !== t || n.next) &&
              (0 === s && (d += (s = Do()) * s),
              0 === l && (d += (l = Do()) * l),
              d < o && (d = Math.sqrt(o * d)));
            do {
              n.data !== t &&
                ((h = (r[n.data.index] * e) / d),
                (t.vx += s * h),
                (t.vy += l * h));
            } while ((n = n.next));
          }
        }
        return (
          (c.initialize = function(t) {
            (n = t), f();
          }),
          (c.strength = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : Po(+n)), f(), c)
              : i;
          }),
          (c.distanceMin = function(n) {
            return arguments.length ? ((o = n * n), c) : Math.sqrt(o);
          }),
          (c.distanceMax = function(n) {
            return arguments.length ? ((u = n * n), c) : Math.sqrt(u);
          }),
          (c.theta = function(n) {
            return arguments.length ? ((a = n * n), c) : Math.sqrt(a);
          }),
          c
        );
      },
      ru = function(n, t, e) {
        var r,
          i,
          o,
          u = Po(0.1);
        function a(n) {
          for (var u = 0, a = r.length; u < a; ++u) {
            var c = r[u],
              f = c.x - t || 1e-6,
              s = c.y - e || 1e-6,
              l = Math.sqrt(f * f + s * s),
              h = ((o[u] - l) * i[u] * n) / l;
            (c.vx += f * h), (c.vy += s * h);
          }
        }
        function c() {
          if (r) {
            var t,
              e = r.length;
            for (i = new Array(e), o = new Array(e), t = 0; t < e; ++t)
              (o[t] = +n(r[t], t, r)),
                (i[t] = isNaN(o[t]) ? 0 : +u(r[t], t, r));
          }
        }
        return (
          'function' != typeof n && (n = Po(+n)),
          null == t && (t = 0),
          null == e && (e = 0),
          (a.initialize = function(n) {
            (r = n), c();
          }),
          (a.strength = function(n) {
            return arguments.length
              ? ((u = 'function' == typeof n ? n : Po(+n)), c(), a)
              : u;
          }),
          (a.radius = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : Po(+t)), c(), a)
              : n;
          }),
          (a.x = function(n) {
            return arguments.length ? ((t = +n), a) : t;
          }),
          (a.y = function(n) {
            return arguments.length ? ((e = +n), a) : e;
          }),
          a
        );
      },
      iu = function(n) {
        var t,
          e,
          r,
          i = Po(0.1);
        function o(n) {
          for (var i, o = 0, u = t.length; o < u; ++o)
            (i = t[o]).vx += (r[o] - i.x) * e[o] * n;
        }
        function u() {
          if (t) {
            var o,
              u = t.length;
            for (e = new Array(u), r = new Array(u), o = 0; o < u; ++o)
              e[o] = isNaN((r[o] = +n(t[o], o, t))) ? 0 : +i(t[o], o, t);
          }
        }
        return (
          'function' != typeof n && (n = Po(null == n ? 0 : +n)),
          (o.initialize = function(n) {
            (t = n), u();
          }),
          (o.strength = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : Po(+n)), u(), o)
              : i;
          }),
          (o.x = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : Po(+t)), u(), o)
              : n;
          }),
          o
        );
      },
      ou = function(n) {
        var t,
          e,
          r,
          i = Po(0.1);
        function o(n) {
          for (var i, o = 0, u = t.length; o < u; ++o)
            (i = t[o]).vy += (r[o] - i.y) * e[o] * n;
        }
        function u() {
          if (t) {
            var o,
              u = t.length;
            for (e = new Array(u), r = new Array(u), o = 0; o < u; ++o)
              e[o] = isNaN((r[o] = +n(t[o], o, t))) ? 0 : +i(t[o], o, t);
          }
        }
        return (
          'function' != typeof n && (n = Po(null == n ? 0 : +n)),
          (o.initialize = function(n) {
            (t = n), u();
          }),
          (o.strength = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : Po(+n)), u(), o)
              : i;
          }),
          (o.y = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : Po(+t)), u(), o)
              : n;
          }),
          o
        );
      },
      uu = function(n, t) {
        if (
          (e = (n = t ? n.toExponential(t - 1) : n.toExponential()).indexOf(
            'e'
          )) < 0
        )
          return null;
        var e,
          r = n.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +n.slice(e + 1)];
      },
      au = function(n) {
        return (n = uu(Math.abs(n))) ? n[1] : NaN;
      },
      cu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function fu(n) {
      return new su(n);
    }
    function su(n) {
      if (!(t = cu.exec(n))) throw new Error('invalid format: ' + n);
      var t;
      (this.fill = t[1] || ' '),
        (this.align = t[2] || '>'),
        (this.sign = t[3] || '-'),
        (this.symbol = t[4] || ''),
        (this.zero = !!t[5]),
        (this.width = t[6] && +t[6]),
        (this.comma = !!t[7]),
        (this.precision = t[8] && +t[8].slice(1)),
        (this.trim = !!t[9]),
        (this.type = t[10] || '');
    }
    (fu.prototype = su.prototype),
      (su.prototype.toString = function() {
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
    var lu,
      hu,
      du,
      pu,
      vu = function(n) {
        n: for (var t, e = n.length, r = 1, i = -1; r < e; ++r)
          switch (n[r]) {
            case '.':
              i = t = r;
              break;
            case '0':
              0 === i && (i = r), (t = r);
              break;
            default:
              if (i > 0) {
                if (!+n[r]) break n;
                i = 0;
              }
          }
        return i > 0 ? n.slice(0, i) + n.slice(t + 1) : n;
      },
      mu = function(n, t) {
        var e = uu(n, t);
        if (!e) return n + '';
        var r = e[0],
          i = e[1];
        return i < 0
          ? '0.' + new Array(-i).join('0') + r
          : r.length > i + 1
          ? r.slice(0, i + 1) + '.' + r.slice(i + 1)
          : r + new Array(i - r.length + 2).join('0');
      },
      yu = {
        '%': function(n, t) {
          return (100 * n).toFixed(t);
        },
        b: function(n) {
          return Math.round(n).toString(2);
        },
        c: function(n) {
          return n + '';
        },
        d: function(n) {
          return Math.round(n).toString(10);
        },
        e: function(n, t) {
          return n.toExponential(t);
        },
        f: function(n, t) {
          return n.toFixed(t);
        },
        g: function(n, t) {
          return n.toPrecision(t);
        },
        o: function(n) {
          return Math.round(n).toString(8);
        },
        p: function(n, t) {
          return mu(100 * n, t);
        },
        r: mu,
        s: function(n, t) {
          var e = uu(n, t);
          if (!e) return n + '';
          var r = e[0],
            i = e[1],
            o = i - (lu = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
            u = r.length;
          return o === u
            ? r
            : o > u
            ? r + new Array(o - u + 1).join('0')
            : o > 0
            ? r.slice(0, o) + '.' + r.slice(o)
            : '0.' +
              new Array(1 - o).join('0') +
              uu(n, Math.max(0, t + o - 1))[0];
        },
        X: function(n) {
          return Math.round(n)
            .toString(16)
            .toUpperCase();
        },
        x: function(n) {
          return Math.round(n).toString(16);
        },
      },
      gu = function(n) {
        return n;
      },
      _u = [
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
      bu = function(n) {
        var t,
          e,
          r =
            n.grouping && n.thousands
              ? ((t = n.grouping),
                (e = n.thousands),
                function(n, r) {
                  for (
                    var i = n.length, o = [], u = 0, a = t[0], c = 0;
                    i > 0 &&
                    a > 0 &&
                    (c + a + 1 > r && (a = Math.max(1, r - c)),
                    o.push(n.substring((i -= a), i + a)),
                    !((c += a + 1) > r));

                  )
                    a = t[(u = (u + 1) % t.length)];
                  return o.reverse().join(e);
                })
              : gu,
          i = n.currency,
          o = n.decimal,
          u = n.numerals
            ? (function(n) {
                return function(t) {
                  return t.replace(/[0-9]/g, function(t) {
                    return n[+t];
                  });
                };
              })(n.numerals)
            : gu,
          a = n.percent || '%';
        function c(n) {
          var t = (n = fu(n)).fill,
            e = n.align,
            c = n.sign,
            f = n.symbol,
            s = n.zero,
            l = n.width,
            h = n.comma,
            d = n.precision,
            p = n.trim,
            v = n.type;
          'n' === v
            ? ((h = !0), (v = 'g'))
            : yu[v] || (null == d && (d = 12), (p = !0), (v = 'g')),
            (s || ('0' === t && '=' === e)) && ((s = !0), (t = '0'), (e = '='));
          var m =
              '$' === f
                ? i[0]
                : '#' === f && /[boxX]/.test(v)
                ? '0' + v.toLowerCase()
                : '',
            y = '$' === f ? i[1] : /[%p]/.test(v) ? a : '',
            g = yu[v],
            _ = /[defgprs%]/.test(v);
          function b(n) {
            var i,
              a,
              f,
              b = m,
              x = y;
            if ('c' === v) (x = g(n) + x), (n = '');
            else {
              var w = (n = +n) < 0;
              if (
                ((n = g(Math.abs(n), d)),
                p && (n = vu(n)),
                w && 0 == +n && (w = !1),
                (b =
                  (w
                    ? '(' === c
                      ? c
                      : '-'
                    : '-' === c || '(' === c
                    ? ''
                    : c) + b),
                (x =
                  ('s' === v ? _u[8 + lu / 3] : '') +
                  x +
                  (w && '(' === c ? ')' : '')),
                _)
              )
                for (i = -1, a = n.length; ++i < a; )
                  if (48 > (f = n.charCodeAt(i)) || f > 57) {
                    (x = (46 === f ? o + n.slice(i + 1) : n.slice(i)) + x),
                      (n = n.slice(0, i));
                    break;
                  }
            }
            h && !s && (n = r(n, 1 / 0));
            var M = b.length + n.length + x.length,
              E = M < l ? new Array(l - M + 1).join(t) : '';
            switch (
              (h &&
                s &&
                ((n = r(E + n, E.length ? l - x.length : 1 / 0)), (E = '')),
              e)
            ) {
              case '<':
                n = b + n + x + E;
                break;
              case '=':
                n = b + E + n + x;
                break;
              case '^':
                n = E.slice(0, (M = E.length >> 1)) + b + n + x + E.slice(M);
                break;
              default:
                n = E + b + n + x;
            }
            return u(n);
          }
          return (
            (d =
              null == d
                ? 6
                : /[gprs]/.test(v)
                ? Math.max(1, Math.min(21, d))
                : Math.max(0, Math.min(20, d))),
            (b.toString = function() {
              return n + '';
            }),
            b
          );
        }
        return {
          format: c,
          formatPrefix: function(n, t) {
            var e = c((((n = fu(n)).type = 'f'), n)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(au(t) / 3))),
              i = Math.pow(10, -r),
              o = _u[8 + r / 3];
            return function(n) {
              return e(i * n) + o;
            };
          },
        };
      };
    function xu(n) {
      return (hu = bu(n)), (du = hu.format), (pu = hu.formatPrefix), hu;
    }
    xu({decimal: '.', thousands: ',', grouping: [3], currency: ['$', '']});
    var wu = function(n) {
        return Math.max(0, -au(Math.abs(n)));
      },
      Mu = function(n, t) {
        return Math.max(
          0,
          3 * Math.max(-8, Math.min(8, Math.floor(au(t) / 3))) - au(Math.abs(n))
        );
      },
      Eu = function(n, t) {
        return (
          (n = Math.abs(n)),
          (t = Math.abs(t) - n),
          Math.max(0, au(t) - au(n)) + 1
        );
      },
      Cu = function() {
        return new Ru();
      };
    function Ru() {
      this.reset();
    }
    Ru.prototype = {
      constructor: Ru,
      reset: function() {
        this.s = this.t = 0;
      },
      add: function(n) {
        Au(Nu, n, this.t),
          Au(this, Nu.s, this.s),
          this.s ? (this.t += Nu.t) : (this.s = Nu.t);
      },
      valueOf: function() {
        return this.s;
      },
    };
    var Nu = new Ru();
    function Au(n, t, e) {
      var r = (n.s = t + e),
        i = r - t,
        o = r - i;
      n.t = t - o + (e - i);
    }
    var Tu = 1e-6,
      Su = Math.PI,
      ku = Su / 2,
      Uu = Su / 4,
      Yu = 2 * Su,
      Ou = 180 / Su,
      Pu = Su / 180,
      Du = Math.abs,
      Iu = Math.atan,
      Lu = Math.atan2,
      Bu = Math.cos,
      zu = Math.ceil,
      qu = Math.exp,
      Fu = (Math.floor, Math.log),
      ju = Math.pow,
      Gu = Math.sin,
      Hu =
        Math.sign ||
        function(n) {
          return n > 0 ? 1 : n < 0 ? -1 : 0;
        },
      Xu = Math.sqrt,
      Vu = Math.tan;
    function Ku(n) {
      return n > 1 ? 0 : n < -1 ? Su : Math.acos(n);
    }
    function Wu(n) {
      return n > 1 ? ku : n < -1 ? -ku : Math.asin(n);
    }
    function Zu(n) {
      return (n = Gu(n / 2)) * n;
    }
    function $u() {}
    function Qu(n, t) {
      n && na.hasOwnProperty(n.type) && na[n.type](n, t);
    }
    var Ju = {
        Feature: function(n, t) {
          Qu(n.geometry, t);
        },
        FeatureCollection: function(n, t) {
          for (var e = n.features, r = -1, i = e.length; ++r < i; )
            Qu(e[r].geometry, t);
        },
      },
      na = {
        Sphere: function(n, t) {
          t.sphere();
        },
        Point: function(n, t) {
          (n = n.coordinates), t.point(n[0], n[1], n[2]);
        },
        MultiPoint: function(n, t) {
          for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
            (n = e[r]), t.point(n[0], n[1], n[2]);
        },
        LineString: function(n, t) {
          ta(n.coordinates, t, 0);
        },
        MultiLineString: function(n, t) {
          for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
            ta(e[r], t, 0);
        },
        Polygon: function(n, t) {
          ea(n.coordinates, t);
        },
        MultiPolygon: function(n, t) {
          for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
            ea(e[r], t);
        },
        GeometryCollection: function(n, t) {
          for (var e = n.geometries, r = -1, i = e.length; ++r < i; )
            Qu(e[r], t);
        },
      };
    function ta(n, t, e) {
      var r,
        i = -1,
        o = n.length - e;
      for (t.lineStart(); ++i < o; ) (r = n[i]), t.point(r[0], r[1], r[2]);
      t.lineEnd();
    }
    function ea(n, t) {
      var e = -1,
        r = n.length;
      for (t.polygonStart(); ++e < r; ) ta(n[e], t, 1);
      t.polygonEnd();
    }
    var ra,
      ia,
      oa,
      ua,
      aa,
      ca = function(n, t) {
        n && Ju.hasOwnProperty(n.type) ? Ju[n.type](n, t) : Qu(n, t);
      },
      fa = Cu(),
      sa = Cu(),
      la = {
        point: $u,
        lineStart: $u,
        lineEnd: $u,
        polygonStart: function() {
          fa.reset(), (la.lineStart = ha), (la.lineEnd = da);
        },
        polygonEnd: function() {
          var n = +fa;
          sa.add(n < 0 ? Yu + n : n),
            (this.lineStart = this.lineEnd = this.point = $u);
        },
        sphere: function() {
          sa.add(Yu);
        },
      };
    function ha() {
      la.point = pa;
    }
    function da() {
      va(ra, ia);
    }
    function pa(n, t) {
      (la.point = va),
        (ra = n),
        (ia = t),
        (oa = n *= Pu),
        (ua = Bu((t = (t *= Pu) / 2 + Uu))),
        (aa = Gu(t));
    }
    function va(n, t) {
      var e = (n *= Pu) - oa,
        r = e >= 0 ? 1 : -1,
        i = r * e,
        o = Bu((t = (t *= Pu) / 2 + Uu)),
        u = Gu(t),
        a = aa * u,
        c = ua * o + a * Bu(i),
        f = a * r * Gu(i);
      fa.add(Lu(f, c)), (oa = n), (ua = o), (aa = u);
    }
    var ma = function(n) {
      return sa.reset(), ca(n, la), 2 * sa;
    };
    function ya(n) {
      return [Lu(n[1], n[0]), Wu(n[2])];
    }
    function ga(n) {
      var t = n[0],
        e = n[1],
        r = Bu(e);
      return [r * Bu(t), r * Gu(t), Gu(e)];
    }
    function _a(n, t) {
      return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
    }
    function ba(n, t) {
      return [
        n[1] * t[2] - n[2] * t[1],
        n[2] * t[0] - n[0] * t[2],
        n[0] * t[1] - n[1] * t[0],
      ];
    }
    function xa(n, t) {
      (n[0] += t[0]), (n[1] += t[1]), (n[2] += t[2]);
    }
    function wa(n, t) {
      return [n[0] * t, n[1] * t, n[2] * t];
    }
    function Ma(n) {
      var t = Xu(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
      (n[0] /= t), (n[1] /= t), (n[2] /= t);
    }
    var Ea,
      Ca,
      Ra,
      Na,
      Aa,
      Ta,
      Sa,
      ka,
      Ua,
      Ya,
      Oa = Cu(),
      Pa = {
        point: Da,
        lineStart: La,
        lineEnd: Ba,
        polygonStart: function() {
          (Pa.point = za),
            (Pa.lineStart = qa),
            (Pa.lineEnd = Fa),
            Oa.reset(),
            la.polygonStart();
        },
        polygonEnd: function() {
          la.polygonEnd(),
            (Pa.point = Da),
            (Pa.lineStart = La),
            (Pa.lineEnd = Ba),
            fa < 0
              ? ((Ea = -(Ra = 180)), (Ca = -(Na = 90)))
              : Oa > Tu
              ? (Na = 90)
              : Oa < -Tu && (Ca = -90),
            (Ya[0] = Ea),
            (Ya[1] = Ra);
        },
      };
    function Da(n, t) {
      Ua.push((Ya = [(Ea = n), (Ra = n)])),
        t < Ca && (Ca = t),
        t > Na && (Na = t);
    }
    function Ia(n, t) {
      var e = ga([n * Pu, t * Pu]);
      if (ka) {
        var r = ba(ka, e),
          i = ba([r[1], -r[0], 0], r);
        Ma(i), (i = ya(i));
        var o,
          u = n - Aa,
          a = u > 0 ? 1 : -1,
          c = i[0] * Ou * a,
          f = Du(u) > 180;
        f ^ (a * Aa < c && c < a * n)
          ? (o = i[1] * Ou) > Na && (Na = o)
          : f ^ (a * Aa < (c = ((c + 360) % 360) - 180) && c < a * n)
          ? (o = -i[1] * Ou) < Ca && (Ca = o)
          : (t < Ca && (Ca = t), t > Na && (Na = t)),
          f
            ? n < Aa
              ? ja(Ea, n) > ja(Ea, Ra) && (Ra = n)
              : ja(n, Ra) > ja(Ea, Ra) && (Ea = n)
            : Ra >= Ea
            ? (n < Ea && (Ea = n), n > Ra && (Ra = n))
            : n > Aa
            ? ja(Ea, n) > ja(Ea, Ra) && (Ra = n)
            : ja(n, Ra) > ja(Ea, Ra) && (Ea = n);
      } else Ua.push((Ya = [(Ea = n), (Ra = n)]));
      t < Ca && (Ca = t), t > Na && (Na = t), (ka = e), (Aa = n);
    }
    function La() {
      Pa.point = Ia;
    }
    function Ba() {
      (Ya[0] = Ea), (Ya[1] = Ra), (Pa.point = Da), (ka = null);
    }
    function za(n, t) {
      if (ka) {
        var e = n - Aa;
        Oa.add(Du(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
      } else (Ta = n), (Sa = t);
      la.point(n, t), Ia(n, t);
    }
    function qa() {
      la.lineStart();
    }
    function Fa() {
      za(Ta, Sa),
        la.lineEnd(),
        Du(Oa) > Tu && (Ea = -(Ra = 180)),
        (Ya[0] = Ea),
        (Ya[1] = Ra),
        (ka = null);
    }
    function ja(n, t) {
      return (t -= n) < 0 ? t + 360 : t;
    }
    function Ga(n, t) {
      return n[0] - t[0];
    }
    function Ha(n, t) {
      return n[0] <= n[1] ? n[0] <= t && t <= n[1] : t < n[0] || n[1] < t;
    }
    var Xa,
      Va,
      Ka,
      Wa,
      Za,
      $a,
      Qa,
      Ja,
      nc,
      tc,
      ec,
      rc,
      ic,
      oc,
      uc,
      ac,
      cc = function(n) {
        var t, e, r, i, o, u, a;
        if (
          ((Na = Ra = -(Ea = Ca = 1 / 0)),
          (Ua = []),
          ca(n, Pa),
          (e = Ua.length))
        ) {
          for (Ua.sort(Ga), t = 1, o = [(r = Ua[0])]; t < e; ++t)
            Ha(r, (i = Ua[t])[0]) || Ha(r, i[1])
              ? (ja(r[0], i[1]) > ja(r[0], r[1]) && (r[1] = i[1]),
                ja(i[0], r[1]) > ja(r[0], r[1]) && (r[0] = i[0]))
              : o.push((r = i));
          for (u = -1 / 0, t = 0, r = o[(e = o.length - 1)]; t <= e; r = i, ++t)
            (i = o[t]),
              (a = ja(r[1], i[0])) > u && ((u = a), (Ea = i[0]), (Ra = r[1]));
        }
        return (
          (Ua = Ya = null),
          Ea === 1 / 0 || Ca === 1 / 0
            ? [[NaN, NaN], [NaN, NaN]]
            : [[Ea, Ca], [Ra, Na]]
        );
      },
      fc = {
        sphere: $u,
        point: sc,
        lineStart: hc,
        lineEnd: vc,
        polygonStart: function() {
          (fc.lineStart = mc), (fc.lineEnd = yc);
        },
        polygonEnd: function() {
          (fc.lineStart = hc), (fc.lineEnd = vc);
        },
      };
    function sc(n, t) {
      n *= Pu;
      var e = Bu((t *= Pu));
      lc(e * Bu(n), e * Gu(n), Gu(t));
    }
    function lc(n, t, e) {
      (Ka += (n - Ka) / ++Xa), (Wa += (t - Wa) / Xa), (Za += (e - Za) / Xa);
    }
    function hc() {
      fc.point = dc;
    }
    function dc(n, t) {
      n *= Pu;
      var e = Bu((t *= Pu));
      (oc = e * Bu(n)),
        (uc = e * Gu(n)),
        (ac = Gu(t)),
        (fc.point = pc),
        lc(oc, uc, ac);
    }
    function pc(n, t) {
      n *= Pu;
      var e = Bu((t *= Pu)),
        r = e * Bu(n),
        i = e * Gu(n),
        o = Gu(t),
        u = Lu(
          Xu(
            (u = uc * o - ac * i) * u +
              (u = ac * r - oc * o) * u +
              (u = oc * i - uc * r) * u
          ),
          oc * r + uc * i + ac * o
        );
      (Va += u),
        ($a += u * (oc + (oc = r))),
        (Qa += u * (uc + (uc = i))),
        (Ja += u * (ac + (ac = o))),
        lc(oc, uc, ac);
    }
    function vc() {
      fc.point = sc;
    }
    function mc() {
      fc.point = gc;
    }
    function yc() {
      _c(rc, ic), (fc.point = sc);
    }
    function gc(n, t) {
      (rc = n), (ic = t), (n *= Pu), (t *= Pu), (fc.point = _c);
      var e = Bu(t);
      (oc = e * Bu(n)), (uc = e * Gu(n)), (ac = Gu(t)), lc(oc, uc, ac);
    }
    function _c(n, t) {
      n *= Pu;
      var e = Bu((t *= Pu)),
        r = e * Bu(n),
        i = e * Gu(n),
        o = Gu(t),
        u = uc * o - ac * i,
        a = ac * r - oc * o,
        c = oc * i - uc * r,
        f = Xu(u * u + a * a + c * c),
        s = Wu(f),
        l = f && -s / f;
      (nc += l * u),
        (tc += l * a),
        (ec += l * c),
        (Va += s),
        ($a += s * (oc + (oc = r))),
        (Qa += s * (uc + (uc = i))),
        (Ja += s * (ac + (ac = o))),
        lc(oc, uc, ac);
    }
    var bc = function(n) {
        (Xa = Va = Ka = Wa = Za = $a = Qa = Ja = nc = tc = ec = 0), ca(n, fc);
        var t = nc,
          e = tc,
          r = ec,
          i = t * t + e * e + r * r;
        return i < 1e-12 &&
          ((t = $a),
          (e = Qa),
          (r = Ja),
          Va < Tu && ((t = Ka), (e = Wa), (r = Za)),
          (i = t * t + e * e + r * r) < 1e-12)
          ? [NaN, NaN]
          : [Lu(e, t) * Ou, Wu(r / Xu(i)) * Ou];
      },
      xc = function(n) {
        return function() {
          return n;
        };
      },
      wc = function(n, t) {
        function e(e, r) {
          return (e = n(e, r)), t(e[0], e[1]);
        }
        return (
          n.invert &&
            t.invert &&
            (e.invert = function(e, r) {
              return (e = t.invert(e, r)) && n.invert(e[0], e[1]);
            }),
          e
        );
      };
    function Mc(n, t) {
      return [Du(n) > Su ? n + Math.round(-n / Yu) * Yu : n, t];
    }
    function Ec(n, t, e) {
      return (n %= Yu)
        ? t || e
          ? wc(Rc(n), Nc(t, e))
          : Rc(n)
        : t || e
        ? Nc(t, e)
        : Mc;
    }
    function Cc(n) {
      return function(t, e) {
        return [(t += n) > Su ? t - Yu : t < -Su ? t + Yu : t, e];
      };
    }
    function Rc(n) {
      var t = Cc(n);
      return (t.invert = Cc(-n)), t;
    }
    function Nc(n, t) {
      var e = Bu(n),
        r = Gu(n),
        i = Bu(t),
        o = Gu(t);
      function u(n, t) {
        var u = Bu(t),
          a = Bu(n) * u,
          c = Gu(n) * u,
          f = Gu(t),
          s = f * e + a * r;
        return [Lu(c * i - s * o, a * e - f * r), Wu(s * i + c * o)];
      }
      return (
        (u.invert = function(n, t) {
          var u = Bu(t),
            a = Bu(n) * u,
            c = Gu(n) * u,
            f = Gu(t),
            s = f * i - c * o;
          return [Lu(c * i + f * o, a * e + s * r), Wu(s * e - a * r)];
        }),
        u
      );
    }
    Mc.invert = Mc;
    var Ac = function(n) {
      function t(t) {
        return ((t = n(t[0] * Pu, t[1] * Pu))[0] *= Ou), (t[1] *= Ou), t;
      }
      return (
        (n = Ec(n[0] * Pu, n[1] * Pu, n.length > 2 ? n[2] * Pu : 0)),
        (t.invert = function(t) {
          return (
            ((t = n.invert(t[0] * Pu, t[1] * Pu))[0] *= Ou), (t[1] *= Ou), t
          );
        }),
        t
      );
    };
    function Tc(n, t, e, r, i, o) {
      if (e) {
        var u = Bu(t),
          a = Gu(t),
          c = r * e;
        null == i
          ? ((i = t + r * Yu), (o = t - c / 2))
          : ((i = Sc(u, i)),
            (o = Sc(u, o)),
            (r > 0 ? i < o : i > o) && (i += r * Yu));
        for (var f, s = i; r > 0 ? s > o : s < o; s -= c)
          (f = ya([u, -a * Bu(s), -a * Gu(s)])), n.point(f[0], f[1]);
      }
    }
    function Sc(n, t) {
      ((t = ga(t))[0] -= n), Ma(t);
      var e = Ku(-t[1]);
      return ((-t[2] < 0 ? -e : e) + Yu - Tu) % Yu;
    }
    var kc = function() {
        var n,
          t,
          e = xc([0, 0]),
          r = xc(90),
          i = xc(6),
          o = {
            point: function(e, r) {
              n.push((e = t(e, r))), (e[0] *= Ou), (e[1] *= Ou);
            },
          };
        function u() {
          var u = e.apply(this, arguments),
            a = r.apply(this, arguments) * Pu,
            c = i.apply(this, arguments) * Pu;
          return (
            (n = []),
            (t = Ec(-u[0] * Pu, -u[1] * Pu, 0).invert),
            Tc(o, a, c, 1),
            (u = {type: 'Polygon', coordinates: [n]}),
            (n = t = null),
            u
          );
        }
        return (
          (u.center = function(n) {
            return arguments.length
              ? ((e = 'function' == typeof n ? n : xc([+n[0], +n[1]])), u)
              : e;
          }),
          (u.radius = function(n) {
            return arguments.length
              ? ((r = 'function' == typeof n ? n : xc(+n)), u)
              : r;
          }),
          (u.precision = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : xc(+n)), u)
              : i;
          }),
          u
        );
      },
      Uc = function() {
        var n,
          t = [];
        return {
          point: function(t, e) {
            n.push([t, e]);
          },
          lineStart: function() {
            t.push((n = []));
          },
          lineEnd: $u,
          rejoin: function() {
            t.length > 1 && t.push(t.pop().concat(t.shift()));
          },
          result: function() {
            var e = t;
            return (t = []), (n = null), e;
          },
        };
      },
      Yc = function(n, t) {
        return Du(n[0] - t[0]) < Tu && Du(n[1] - t[1]) < Tu;
      };
    function Oc(n, t, e, r) {
      (this.x = n),
        (this.z = t),
        (this.o = e),
        (this.e = r),
        (this.v = !1),
        (this.n = this.p = null);
    }
    var Pc = function(n, t, e, r, i) {
      var o,
        u,
        a = [],
        c = [];
      if (
        (n.forEach(function(n) {
          if (!((t = n.length - 1) <= 0)) {
            var t,
              e,
              r = n[0],
              u = n[t];
            if (Yc(r, u)) {
              for (i.lineStart(), o = 0; o < t; ++o)
                i.point((r = n[o])[0], r[1]);
              i.lineEnd();
            } else
              a.push((e = new Oc(r, n, null, !0))),
                c.push((e.o = new Oc(r, null, e, !1))),
                a.push((e = new Oc(u, n, null, !1))),
                c.push((e.o = new Oc(u, null, e, !0)));
          }
        }),
        a.length)
      ) {
        for (c.sort(t), Dc(a), Dc(c), o = 0, u = c.length; o < u; ++o)
          c[o].e = e = !e;
        for (var f, s, l = a[0]; ; ) {
          for (var h = l, d = !0; h.v; ) if ((h = h.n) === l) return;
          (f = h.z), i.lineStart();
          do {
            if (((h.v = h.o.v = !0), h.e)) {
              if (d)
                for (o = 0, u = f.length; o < u; ++o)
                  i.point((s = f[o])[0], s[1]);
              else r(h.x, h.n.x, 1, i);
              h = h.n;
            } else {
              if (d)
                for (f = h.p.z, o = f.length - 1; o >= 0; --o)
                  i.point((s = f[o])[0], s[1]);
              else r(h.x, h.p.x, -1, i);
              h = h.p;
            }
            (f = (h = h.o).z), (d = !d);
          } while (!h.v);
          i.lineEnd();
        }
      }
    };
    function Dc(n) {
      if ((t = n.length)) {
        for (var t, e, r = 0, i = n[0]; ++r < t; )
          (i.n = e = n[r]), (e.p = i), (i = e);
        (i.n = e = n[0]), (e.p = i);
      }
    }
    var Ic = Cu(),
      Lc = function(n, t) {
        var e = t[0],
          r = t[1],
          i = Gu(r),
          o = [Gu(e), -Bu(e), 0],
          u = 0,
          a = 0;
        Ic.reset(), 1 === i ? (r = ku + Tu) : -1 === i && (r = -ku - Tu);
        for (var c = 0, f = n.length; c < f; ++c)
          if ((l = (s = n[c]).length))
            for (
              var s,
                l,
                h = s[l - 1],
                d = h[0],
                p = h[1] / 2 + Uu,
                v = Gu(p),
                m = Bu(p),
                y = 0;
              y < l;
              ++y, d = _, v = x, m = w, h = g
            ) {
              var g = s[y],
                _ = g[0],
                b = g[1] / 2 + Uu,
                x = Gu(b),
                w = Bu(b),
                M = _ - d,
                E = M >= 0 ? 1 : -1,
                C = E * M,
                R = C > Su,
                N = v * x;
              if (
                (Ic.add(Lu(N * E * Gu(C), m * w + N * Bu(C))),
                (u += R ? M + E * Yu : M),
                R ^ (d >= e) ^ (_ >= e))
              ) {
                var A = ba(ga(h), ga(g));
                Ma(A);
                var T = ba(o, A);
                Ma(T);
                var S = (R ^ (M >= 0) ? -1 : 1) * Wu(T[2]);
                (r > S || (r === S && (A[0] || A[1]))) &&
                  (a += R ^ (M >= 0) ? 1 : -1);
              }
            }
        return (u < -Tu || (u < Tu && Ic < -Tu)) ^ (1 & a);
      },
      Bc = function(n, t) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
      };
    var zc = (function(n) {
      return (
        1 === n.length &&
          (n = (function(n) {
            return function(t, e) {
              return Bc(n(t), e);
            };
          })(n)),
        {
          left: function(t, e, r, i) {
            for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
              var o = (r + i) >>> 1;
              n(t[o], e) < 0 ? (r = o + 1) : (i = o);
            }
            return r;
          },
          right: function(t, e, r, i) {
            for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
              var o = (r + i) >>> 1;
              n(t[o], e) > 0 ? (i = o) : (r = o + 1);
            }
            return r;
          },
        }
      );
    })(Bc);
    zc.right, zc.left;
    var qc = Array.prototype,
      Fc =
        (qc.slice,
        qc.map,
        function(n, t, e) {
          (n = +n),
            (t = +t),
            (e =
              (i = arguments.length) < 2
                ? ((t = n), (n = 0), 1)
                : i < 3
                ? 1
                : +e);
          for (
            var r = -1,
              i = 0 | Math.max(0, Math.ceil((t - n) / e)),
              o = new Array(i);
            ++r < i;

          )
            o[r] = n + r * e;
          return o;
        });
    Math.sqrt(50), Math.sqrt(10), Math.sqrt(2);
    var jc = function(n) {
      for (var t, e, r, i = n.length, o = -1, u = 0; ++o < i; )
        u += n[o].length;
      for (e = new Array(u); --i >= 0; )
        for (t = (r = n[i]).length; --t >= 0; ) e[--u] = r[t];
      return e;
    };
    var Gc = function(n, t, e, r) {
      return function(i) {
        var o,
          u,
          a,
          c = t(i),
          f = Uc(),
          s = t(f),
          l = !1,
          h = {
            point: d,
            lineStart: v,
            lineEnd: m,
            polygonStart: function() {
              (h.point = y),
                (h.lineStart = g),
                (h.lineEnd = _),
                (u = []),
                (o = []);
            },
            polygonEnd: function() {
              (h.point = d), (h.lineStart = v), (h.lineEnd = m), (u = jc(u));
              var n = Lc(o, r);
              u.length
                ? (l || (i.polygonStart(), (l = !0)), Pc(u, Xc, n, e, i))
                : n &&
                  (l || (i.polygonStart(), (l = !0)),
                  i.lineStart(),
                  e(null, null, 1, i),
                  i.lineEnd()),
                l && (i.polygonEnd(), (l = !1)),
                (u = o = null);
            },
            sphere: function() {
              i.polygonStart(),
                i.lineStart(),
                e(null, null, 1, i),
                i.lineEnd(),
                i.polygonEnd();
            },
          };
        function d(t, e) {
          n(t, e) && i.point(t, e);
        }
        function p(n, t) {
          c.point(n, t);
        }
        function v() {
          (h.point = p), c.lineStart();
        }
        function m() {
          (h.point = d), c.lineEnd();
        }
        function y(n, t) {
          a.push([n, t]), s.point(n, t);
        }
        function g() {
          s.lineStart(), (a = []);
        }
        function _() {
          y(a[0][0], a[0][1]), s.lineEnd();
          var n,
            t,
            e,
            r,
            c = s.clean(),
            h = f.result(),
            d = h.length;
          if ((a.pop(), o.push(a), (a = null), d))
            if (1 & c) {
              if ((t = (e = h[0]).length - 1) > 0) {
                for (
                  l || (i.polygonStart(), (l = !0)), i.lineStart(), n = 0;
                  n < t;
                  ++n
                )
                  i.point((r = e[n])[0], r[1]);
                i.lineEnd();
              }
            } else
              d > 1 && 2 & c && h.push(h.pop().concat(h.shift())),
                u.push(h.filter(Hc));
        }
        return h;
      };
    };
    function Hc(n) {
      return n.length > 1;
    }
    function Xc(n, t) {
      return (
        ((n = n.x)[0] < 0 ? n[1] - ku - Tu : ku - n[1]) -
        ((t = t.x)[0] < 0 ? t[1] - ku - Tu : ku - t[1])
      );
    }
    var Vc = Gc(
      function() {
        return !0;
      },
      function(n) {
        var t,
          e = NaN,
          r = NaN,
          i = NaN;
        return {
          lineStart: function() {
            n.lineStart(), (t = 1);
          },
          point: function(o, u) {
            var a = o > 0 ? Su : -Su,
              c = Du(o - e);
            Du(c - Su) < Tu
              ? (n.point(e, (r = (r + u) / 2 > 0 ? ku : -ku)),
                n.point(i, r),
                n.lineEnd(),
                n.lineStart(),
                n.point(a, r),
                n.point(o, r),
                (t = 0))
              : i !== a &&
                c >= Su &&
                (Du(e - i) < Tu && (e -= i * Tu),
                Du(o - a) < Tu && (o -= a * Tu),
                (r = (function(n, t, e, r) {
                  var i,
                    o,
                    u = Gu(n - e);
                  return Du(u) > Tu
                    ? Iu(
                        (Gu(t) * (o = Bu(r)) * Gu(e) -
                          Gu(r) * (i = Bu(t)) * Gu(n)) /
                          (i * o * u)
                      )
                    : (t + r) / 2;
                })(e, r, o, u)),
                n.point(i, r),
                n.lineEnd(),
                n.lineStart(),
                n.point(a, r),
                (t = 0)),
              n.point((e = o), (r = u)),
              (i = a);
          },
          lineEnd: function() {
            n.lineEnd(), (e = r = NaN);
          },
          clean: function() {
            return 2 - t;
          },
        };
      },
      function(n, t, e, r) {
        var i;
        if (null == n)
          (i = e * ku),
            r.point(-Su, i),
            r.point(0, i),
            r.point(Su, i),
            r.point(Su, 0),
            r.point(Su, -i),
            r.point(0, -i),
            r.point(-Su, -i),
            r.point(-Su, 0),
            r.point(-Su, i);
        else if (Du(n[0] - t[0]) > Tu) {
          var o = n[0] < t[0] ? Su : -Su;
          (i = (e * o) / 2), r.point(-o, i), r.point(0, i), r.point(o, i);
        } else r.point(t[0], t[1]);
      },
      [-Su, -ku]
    );
    var Kc = function(n) {
        var t = Bu(n),
          e = 6 * Pu,
          r = t > 0,
          i = Du(t) > Tu;
        function o(n, e) {
          return Bu(n) * Bu(e) > t;
        }
        function u(n, e, r) {
          var i = [1, 0, 0],
            o = ba(ga(n), ga(e)),
            u = _a(o, o),
            a = o[0],
            c = u - a * a;
          if (!c) return !r && n;
          var f = (t * u) / c,
            s = (-t * a) / c,
            l = ba(i, o),
            h = wa(i, f);
          xa(h, wa(o, s));
          var d = l,
            p = _a(h, d),
            v = _a(d, d),
            m = p * p - v * (_a(h, h) - 1);
          if (!(m < 0)) {
            var y = Xu(m),
              g = wa(d, (-p - y) / v);
            if ((xa(g, h), (g = ya(g)), !r)) return g;
            var _,
              b = n[0],
              x = e[0],
              w = n[1],
              M = e[1];
            x < b && ((_ = b), (b = x), (x = _));
            var E = x - b,
              C = Du(E - Su) < Tu;
            if (
              (!C && M < w && ((_ = w), (w = M), (M = _)),
              C || E < Tu
                ? C
                  ? (w + M > 0) ^ (g[1] < (Du(g[0] - b) < Tu ? w : M))
                  : w <= g[1] && g[1] <= M
                : (E > Su) ^ (b <= g[0] && g[0] <= x))
            ) {
              var R = wa(d, (-p + y) / v);
              return xa(R, h), [g, ya(R)];
            }
          }
        }
        function a(t, e) {
          var i = r ? n : Su - n,
            o = 0;
          return (
            t < -i ? (o |= 1) : t > i && (o |= 2),
            e < -i ? (o |= 4) : e > i && (o |= 8),
            o
          );
        }
        return Gc(
          o,
          function(n) {
            var t, e, c, f, s;
            return {
              lineStart: function() {
                (f = c = !1), (s = 1);
              },
              point: function(l, h) {
                var d,
                  p = [l, h],
                  v = o(l, h),
                  m = r
                    ? v
                      ? 0
                      : a(l, h)
                    : v
                    ? a(l + (l < 0 ? Su : -Su), h)
                    : 0;
                if (
                  (!t && (f = c = v) && n.lineStart(),
                  v !== c &&
                    (!(d = u(t, p)) || Yc(t, d) || Yc(p, d)) &&
                    ((p[0] += Tu), (p[1] += Tu), (v = o(p[0], p[1]))),
                  v !== c)
                )
                  (s = 0),
                    v
                      ? (n.lineStart(), (d = u(p, t)), n.point(d[0], d[1]))
                      : ((d = u(t, p)), n.point(d[0], d[1]), n.lineEnd()),
                    (t = d);
                else if (i && t && r ^ v) {
                  var y;
                  m & e ||
                    !(y = u(p, t, !0)) ||
                    ((s = 0),
                    r
                      ? (n.lineStart(),
                        n.point(y[0][0], y[0][1]),
                        n.point(y[1][0], y[1][1]),
                        n.lineEnd())
                      : (n.point(y[1][0], y[1][1]),
                        n.lineEnd(),
                        n.lineStart(),
                        n.point(y[0][0], y[0][1])));
                }
                !v || (t && Yc(t, p)) || n.point(p[0], p[1]),
                  (t = p),
                  (c = v),
                  (e = m);
              },
              lineEnd: function() {
                c && n.lineEnd(), (t = null);
              },
              clean: function() {
                return s | ((f && c) << 1);
              },
            };
          },
          function(t, r, i, o) {
            Tc(o, n, e, i, t, r);
          },
          r ? [0, -n] : [-Su, n - Su]
        );
      },
      Wc = function(n, t, e, r, i, o) {
        var u,
          a = n[0],
          c = n[1],
          f = 0,
          s = 1,
          l = t[0] - a,
          h = t[1] - c;
        if (((u = e - a), l || !(u > 0))) {
          if (((u /= l), l < 0)) {
            if (u < f) return;
            u < s && (s = u);
          } else if (l > 0) {
            if (u > s) return;
            u > f && (f = u);
          }
          if (((u = i - a), l || !(u < 0))) {
            if (((u /= l), l < 0)) {
              if (u > s) return;
              u > f && (f = u);
            } else if (l > 0) {
              if (u < f) return;
              u < s && (s = u);
            }
            if (((u = r - c), h || !(u > 0))) {
              if (((u /= h), h < 0)) {
                if (u < f) return;
                u < s && (s = u);
              } else if (h > 0) {
                if (u > s) return;
                u > f && (f = u);
              }
              if (((u = o - c), h || !(u < 0))) {
                if (((u /= h), h < 0)) {
                  if (u > s) return;
                  u > f && (f = u);
                } else if (h > 0) {
                  if (u < f) return;
                  u < s && (s = u);
                }
                return (
                  f > 0 && ((n[0] = a + f * l), (n[1] = c + f * h)),
                  s < 1 && ((t[0] = a + s * l), (t[1] = c + s * h)),
                  !0
                );
              }
            }
          }
        }
      },
      Zc = 1e9,
      $c = -Zc;
    function Qc(n, t, e, r) {
      function i(i, o) {
        return n <= i && i <= e && t <= o && o <= r;
      }
      function o(i, o, a, f) {
        var s = 0,
          l = 0;
        if (
          null == i ||
          (s = u(i, a)) !== (l = u(o, a)) ||
          (c(i, o) < 0) ^ (a > 0)
        )
          do {
            f.point(0 === s || 3 === s ? n : e, s > 1 ? r : t);
          } while ((s = (s + a + 4) % 4) !== l);
        else f.point(o[0], o[1]);
      }
      function u(r, i) {
        return Du(r[0] - n) < Tu
          ? i > 0
            ? 0
            : 3
          : Du(r[0] - e) < Tu
          ? i > 0
            ? 2
            : 1
          : Du(r[1] - t) < Tu
          ? i > 0
            ? 1
            : 0
          : i > 0
          ? 3
          : 2;
      }
      function a(n, t) {
        return c(n.x, t.x);
      }
      function c(n, t) {
        var e = u(n, 1),
          r = u(t, 1);
        return e !== r
          ? e - r
          : 0 === e
          ? t[1] - n[1]
          : 1 === e
          ? n[0] - t[0]
          : 2 === e
          ? n[1] - t[1]
          : t[0] - n[0];
      }
      return function(u) {
        var c,
          f,
          s,
          l,
          h,
          d,
          p,
          v,
          m,
          y,
          g,
          _ = u,
          b = Uc(),
          x = {
            point: w,
            lineStart: function() {
              (x.point = M), f && f.push((s = []));
              (y = !0), (m = !1), (p = v = NaN);
            },
            lineEnd: function() {
              c && (M(l, h), d && m && b.rejoin(), c.push(b.result()));
              (x.point = w), m && _.lineEnd();
            },
            polygonStart: function() {
              (_ = b), (c = []), (f = []), (g = !0);
            },
            polygonEnd: function() {
              var t = (function() {
                  for (var t = 0, e = 0, i = f.length; e < i; ++e)
                    for (
                      var o,
                        u,
                        a = f[e],
                        c = 1,
                        s = a.length,
                        l = a[0],
                        h = l[0],
                        d = l[1];
                      c < s;
                      ++c
                    )
                      (o = h),
                        (u = d),
                        (l = a[c]),
                        (h = l[0]),
                        (d = l[1]),
                        u <= r
                          ? d > r &&
                            (h - o) * (r - u) > (d - u) * (n - o) &&
                            ++t
                          : d <= r &&
                            (h - o) * (r - u) < (d - u) * (n - o) &&
                            --t;
                  return t;
                })(),
                e = g && t,
                i = (c = jc(c)).length;
              (e || i) &&
                (u.polygonStart(),
                e && (u.lineStart(), o(null, null, 1, u), u.lineEnd()),
                i && Pc(c, a, t, o, u),
                u.polygonEnd());
              (_ = u), (c = f = s = null);
            },
          };
        function w(n, t) {
          i(n, t) && _.point(n, t);
        }
        function M(o, u) {
          var a = i(o, u);
          if ((f && s.push([o, u]), y))
            (l = o),
              (h = u),
              (d = a),
              (y = !1),
              a && (_.lineStart(), _.point(o, u));
          else if (a && m) _.point(o, u);
          else {
            var c = [
                (p = Math.max($c, Math.min(Zc, p))),
                (v = Math.max($c, Math.min(Zc, v))),
              ],
              b = [
                (o = Math.max($c, Math.min(Zc, o))),
                (u = Math.max($c, Math.min(Zc, u))),
              ];
            Wc(c, b, n, t, e, r)
              ? (m || (_.lineStart(), _.point(c[0], c[1])),
                _.point(b[0], b[1]),
                a || _.lineEnd(),
                (g = !1))
              : a && (_.lineStart(), _.point(o, u), (g = !1));
          }
          (p = o), (v = u), (m = a);
        }
        return x;
      };
    }
    var Jc,
      nf,
      tf,
      ef = function() {
        var n,
          t,
          e,
          r = 0,
          i = 0,
          o = 960,
          u = 500;
        return (e = {
          stream: function(e) {
            return n && t === e ? n : (n = Qc(r, i, o, u)((t = e)));
          },
          extent: function(a) {
            return arguments.length
              ? ((r = +a[0][0]),
                (i = +a[0][1]),
                (o = +a[1][0]),
                (u = +a[1][1]),
                (n = t = null),
                e)
              : [[r, i], [o, u]];
          },
        });
      },
      rf = Cu(),
      of = {
        sphere: $u,
        point: $u,
        lineStart: function() {
          (of.point = af), (of.lineEnd = uf);
        },
        lineEnd: $u,
        polygonStart: $u,
        polygonEnd: $u,
      };
    function uf() {
      of.point = of.lineEnd = $u;
    }
    function af(n, t) {
      (Jc = n *= Pu), (nf = Gu((t *= Pu))), (tf = Bu(t)), (of.point = cf);
    }
    function cf(n, t) {
      n *= Pu;
      var e = Gu((t *= Pu)),
        r = Bu(t),
        i = Du(n - Jc),
        o = Bu(i),
        u = r * Gu(i),
        a = tf * e - nf * r * o,
        c = nf * e + tf * r * o;
      rf.add(Lu(Xu(u * u + a * a), c)), (Jc = n), (nf = e), (tf = r);
    }
    var ff = function(n) {
        return rf.reset(), ca(n, of), +rf;
      },
      sf = [null, null],
      lf = {type: 'LineString', coordinates: sf},
      hf = function(n, t) {
        return (sf[0] = n), (sf[1] = t), ff(lf);
      },
      df = {
        Feature: function(n, t) {
          return vf(n.geometry, t);
        },
        FeatureCollection: function(n, t) {
          for (var e = n.features, r = -1, i = e.length; ++r < i; )
            if (vf(e[r].geometry, t)) return !0;
          return !1;
        },
      },
      pf = {
        Sphere: function() {
          return !0;
        },
        Point: function(n, t) {
          return mf(n.coordinates, t);
        },
        MultiPoint: function(n, t) {
          for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
            if (mf(e[r], t)) return !0;
          return !1;
        },
        LineString: function(n, t) {
          return yf(n.coordinates, t);
        },
        MultiLineString: function(n, t) {
          for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
            if (yf(e[r], t)) return !0;
          return !1;
        },
        Polygon: function(n, t) {
          return gf(n.coordinates, t);
        },
        MultiPolygon: function(n, t) {
          for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
            if (gf(e[r], t)) return !0;
          return !1;
        },
        GeometryCollection: function(n, t) {
          for (var e = n.geometries, r = -1, i = e.length; ++r < i; )
            if (vf(e[r], t)) return !0;
          return !1;
        },
      };
    function vf(n, t) {
      return !(!n || !pf.hasOwnProperty(n.type)) && pf[n.type](n, t);
    }
    function mf(n, t) {
      return 0 === hf(n, t);
    }
    function yf(n, t) {
      var e = hf(n[0], n[1]);
      return hf(n[0], t) + hf(t, n[1]) <= e + Tu;
    }
    function gf(n, t) {
      return !!Lc(n.map(_f), bf(t));
    }
    function _f(n) {
      return (n = n.map(bf)).pop(), n;
    }
    function bf(n) {
      return [n[0] * Pu, n[1] * Pu];
    }
    var xf = function(n, t) {
      return (n && df.hasOwnProperty(n.type) ? df[n.type] : vf)(n, t);
    };
    function wf(n, t, e) {
      var r = Fc(n, t - Tu, e).concat(t);
      return function(n) {
        return r.map(function(t) {
          return [n, t];
        });
      };
    }
    function Mf(n, t, e) {
      var r = Fc(n, t - Tu, e).concat(t);
      return function(n) {
        return r.map(function(t) {
          return [t, n];
        });
      };
    }
    function Ef() {
      var n,
        t,
        e,
        r,
        i,
        o,
        u,
        a,
        c,
        f,
        s,
        l,
        h = 10,
        d = h,
        p = 90,
        v = 360,
        m = 2.5;
      function y() {
        return {type: 'MultiLineString', coordinates: g()};
      }
      function g() {
        return Fc(zu(r / p) * p, e, p)
          .map(s)
          .concat(Fc(zu(a / v) * v, u, v).map(l))
          .concat(
            Fc(zu(t / h) * h, n, h)
              .filter(function(n) {
                return Du(n % p) > Tu;
              })
              .map(c)
          )
          .concat(
            Fc(zu(o / d) * d, i, d)
              .filter(function(n) {
                return Du(n % v) > Tu;
              })
              .map(f)
          );
      }
      return (
        (y.lines = function() {
          return g().map(function(n) {
            return {type: 'LineString', coordinates: n};
          });
        }),
        (y.outline = function() {
          return {
            type: 'Polygon',
            coordinates: [
              s(r).concat(
                l(u).slice(1),
                s(e)
                  .reverse()
                  .slice(1),
                l(a)
                  .reverse()
                  .slice(1)
              ),
            ],
          };
        }),
        (y.extent = function(n) {
          return arguments.length
            ? y.extentMajor(n).extentMinor(n)
            : y.extentMinor();
        }),
        (y.extentMajor = function(n) {
          return arguments.length
            ? ((r = +n[0][0]),
              (e = +n[1][0]),
              (a = +n[0][1]),
              (u = +n[1][1]),
              r > e && ((n = r), (r = e), (e = n)),
              a > u && ((n = a), (a = u), (u = n)),
              y.precision(m))
            : [[r, a], [e, u]];
        }),
        (y.extentMinor = function(e) {
          return arguments.length
            ? ((t = +e[0][0]),
              (n = +e[1][0]),
              (o = +e[0][1]),
              (i = +e[1][1]),
              t > n && ((e = t), (t = n), (n = e)),
              o > i && ((e = o), (o = i), (i = e)),
              y.precision(m))
            : [[t, o], [n, i]];
        }),
        (y.step = function(n) {
          return arguments.length ? y.stepMajor(n).stepMinor(n) : y.stepMinor();
        }),
        (y.stepMajor = function(n) {
          return arguments.length ? ((p = +n[0]), (v = +n[1]), y) : [p, v];
        }),
        (y.stepMinor = function(n) {
          return arguments.length ? ((h = +n[0]), (d = +n[1]), y) : [h, d];
        }),
        (y.precision = function(h) {
          return arguments.length
            ? ((m = +h),
              (c = wf(o, i, 90)),
              (f = Mf(t, n, m)),
              (s = wf(a, u, 90)),
              (l = Mf(r, e, m)),
              y)
            : m;
        }),
        y
          .extentMajor([[-180, -90 + Tu], [180, 90 - Tu]])
          .extentMinor([[-180, -80 - Tu], [180, 80 + Tu]])
      );
    }
    function Cf() {
      return Ef()();
    }
    var Rf,
      Nf,
      Af,
      Tf,
      Sf = function(n, t) {
        var e = n[0] * Pu,
          r = n[1] * Pu,
          i = t[0] * Pu,
          o = t[1] * Pu,
          u = Bu(r),
          a = Gu(r),
          c = Bu(o),
          f = Gu(o),
          s = u * Bu(e),
          l = u * Gu(e),
          h = c * Bu(i),
          d = c * Gu(i),
          p = 2 * Wu(Xu(Zu(o - r) + u * c * Zu(i - e))),
          v = Gu(p),
          m = p
            ? function(n) {
                var t = Gu((n *= p)) / v,
                  e = Gu(p - n) / v,
                  r = e * s + t * h,
                  i = e * l + t * d,
                  o = e * a + t * f;
                return [Lu(i, r) * Ou, Lu(o, Xu(r * r + i * i)) * Ou];
              }
            : function() {
                return [e * Ou, r * Ou];
              };
        return (m.distance = p), m;
      },
      kf = function(n) {
        return n;
      },
      Uf = Cu(),
      Yf = Cu(),
      Of = {
        point: $u,
        lineStart: $u,
        lineEnd: $u,
        polygonStart: function() {
          (Of.lineStart = Pf), (Of.lineEnd = Lf);
        },
        polygonEnd: function() {
          (Of.lineStart = Of.lineEnd = Of.point = $u),
            Uf.add(Du(Yf)),
            Yf.reset();
        },
        result: function() {
          var n = Uf / 2;
          return Uf.reset(), n;
        },
      };
    function Pf() {
      Of.point = Df;
    }
    function Df(n, t) {
      (Of.point = If), (Rf = Af = n), (Nf = Tf = t);
    }
    function If(n, t) {
      Yf.add(Tf * n - Af * t), (Af = n), (Tf = t);
    }
    function Lf() {
      If(Rf, Nf);
    }
    var Bf = Of,
      zf = 1 / 0,
      qf = zf,
      Ff = -zf,
      jf = Ff;
    var Gf,
      Hf,
      Xf,
      Vf,
      Kf = {
        point: function(n, t) {
          n < zf && (zf = n);
          n > Ff && (Ff = n);
          t < qf && (qf = t);
          t > jf && (jf = t);
        },
        lineStart: $u,
        lineEnd: $u,
        polygonStart: $u,
        polygonEnd: $u,
        result: function() {
          var n = [[zf, qf], [Ff, jf]];
          return (Ff = jf = -(qf = zf = 1 / 0)), n;
        },
      },
      Wf = 0,
      Zf = 0,
      $f = 0,
      Qf = 0,
      Jf = 0,
      ns = 0,
      ts = 0,
      es = 0,
      rs = 0,
      is = {
        point: os,
        lineStart: us,
        lineEnd: fs,
        polygonStart: function() {
          (is.lineStart = ss), (is.lineEnd = ls);
        },
        polygonEnd: function() {
          (is.point = os), (is.lineStart = us), (is.lineEnd = fs);
        },
        result: function() {
          var n = rs
            ? [ts / rs, es / rs]
            : ns
            ? [Qf / ns, Jf / ns]
            : $f
            ? [Wf / $f, Zf / $f]
            : [NaN, NaN];
          return (Wf = Zf = $f = Qf = Jf = ns = ts = es = rs = 0), n;
        },
      };
    function os(n, t) {
      (Wf += n), (Zf += t), ++$f;
    }
    function us() {
      is.point = as;
    }
    function as(n, t) {
      (is.point = cs), os((Xf = n), (Vf = t));
    }
    function cs(n, t) {
      var e = n - Xf,
        r = t - Vf,
        i = Xu(e * e + r * r);
      (Qf += (i * (Xf + n)) / 2),
        (Jf += (i * (Vf + t)) / 2),
        (ns += i),
        os((Xf = n), (Vf = t));
    }
    function fs() {
      is.point = os;
    }
    function ss() {
      is.point = hs;
    }
    function ls() {
      ds(Gf, Hf);
    }
    function hs(n, t) {
      (is.point = ds), os((Gf = Xf = n), (Hf = Vf = t));
    }
    function ds(n, t) {
      var e = n - Xf,
        r = t - Vf,
        i = Xu(e * e + r * r);
      (Qf += (i * (Xf + n)) / 2),
        (Jf += (i * (Vf + t)) / 2),
        (ns += i),
        (ts += (i = Vf * n - Xf * t) * (Xf + n)),
        (es += i * (Vf + t)),
        (rs += 3 * i),
        os((Xf = n), (Vf = t));
    }
    var ps = is;
    function vs(n) {
      this._context = n;
    }
    vs.prototype = {
      _radius: 4.5,
      pointRadius: function(n) {
        return (this._radius = n), this;
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
      point: function(n, t) {
        switch (this._point) {
          case 0:
            this._context.moveTo(n, t), (this._point = 1);
            break;
          case 1:
            this._context.lineTo(n, t);
            break;
          default:
            this._context.moveTo(n + this._radius, t),
              this._context.arc(n, t, this._radius, 0, Yu);
        }
      },
      result: $u,
    };
    var ms,
      ys,
      gs,
      _s,
      bs,
      xs = Cu(),
      ws = {
        point: $u,
        lineStart: function() {
          ws.point = Ms;
        },
        lineEnd: function() {
          ms && Es(ys, gs), (ws.point = $u);
        },
        polygonStart: function() {
          ms = !0;
        },
        polygonEnd: function() {
          ms = null;
        },
        result: function() {
          var n = +xs;
          return xs.reset(), n;
        },
      };
    function Ms(n, t) {
      (ws.point = Es), (ys = _s = n), (gs = bs = t);
    }
    function Es(n, t) {
      (_s -= n), (bs -= t), xs.add(Xu(_s * _s + bs * bs)), (_s = n), (bs = t);
    }
    var Cs = ws;
    function Rs() {
      this._string = [];
    }
    function Ns(n) {
      return (
        'm0,' +
        n +
        'a' +
        n +
        ',' +
        n +
        ' 0 1,1 0,' +
        -2 * n +
        'a' +
        n +
        ',' +
        n +
        ' 0 1,1 0,' +
        2 * n +
        'z'
      );
    }
    Rs.prototype = {
      _radius: 4.5,
      _circle: Ns(4.5),
      pointRadius: function(n) {
        return (
          (n = +n) !== this._radius &&
            ((this._radius = n), (this._circle = null)),
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
      point: function(n, t) {
        switch (this._point) {
          case 0:
            this._string.push('M', n, ',', t), (this._point = 1);
            break;
          case 1:
            this._string.push('L', n, ',', t);
            break;
          default:
            null == this._circle && (this._circle = Ns(this._radius)),
              this._string.push('M', n, ',', t, this._circle);
        }
      },
      result: function() {
        if (this._string.length) {
          var n = this._string.join('');
          return (this._string = []), n;
        }
        return null;
      },
    };
    var As = function(n, t) {
        var e,
          r,
          i = 4.5;
        function o(n) {
          return (
            n &&
              ('function' == typeof i &&
                r.pointRadius(+i.apply(this, arguments)),
              ca(n, e(r))),
            r.result()
          );
        }
        return (
          (o.area = function(n) {
            return ca(n, e(Bf)), Bf.result();
          }),
          (o.measure = function(n) {
            return ca(n, e(Cs)), Cs.result();
          }),
          (o.bounds = function(n) {
            return ca(n, e(Kf)), Kf.result();
          }),
          (o.centroid = function(n) {
            return ca(n, e(ps)), ps.result();
          }),
          (o.projection = function(t) {
            return arguments.length
              ? ((e = null == t ? ((n = null), kf) : (n = t).stream), o)
              : n;
          }),
          (o.context = function(n) {
            return arguments.length
              ? ((r = null == n ? ((t = null), new Rs()) : new vs((t = n))),
                'function' != typeof i && r.pointRadius(i),
                o)
              : t;
          }),
          (o.pointRadius = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : (r.pointRadius(+n), +n)), o)
              : i;
          }),
          o.projection(n).context(t)
        );
      },
      Ts = function(n) {
        return {stream: Ss(n)};
      };
    function Ss(n) {
      return function(t) {
        var e = new ks();
        for (var r in n) e[r] = n[r];
        return (e.stream = t), e;
      };
    }
    function ks() {}
    function Us(n, t, e) {
      var r = n.clipExtent && n.clipExtent();
      return (
        n.scale(150).translate([0, 0]),
        null != r && n.clipExtent(null),
        ca(e, n.stream(Kf)),
        t(Kf.result()),
        null != r && n.clipExtent(r),
        n
      );
    }
    function Ys(n, t, e) {
      return Us(
        n,
        function(e) {
          var r = t[1][0] - t[0][0],
            i = t[1][1] - t[0][1],
            o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
            u = +t[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
            a = +t[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
          n.scale(150 * o).translate([u, a]);
        },
        e
      );
    }
    function Os(n, t, e) {
      return Ys(n, [[0, 0], t], e);
    }
    function Ps(n, t, e) {
      return Us(
        n,
        function(e) {
          var r = +t,
            i = r / (e[1][0] - e[0][0]),
            o = (r - i * (e[1][0] + e[0][0])) / 2,
            u = -i * e[0][1];
          n.scale(150 * i).translate([o, u]);
        },
        e
      );
    }
    function Ds(n, t, e) {
      return Us(
        n,
        function(e) {
          var r = +t,
            i = r / (e[1][1] - e[0][1]),
            o = -i * e[0][0],
            u = (r - i * (e[1][1] + e[0][1])) / 2;
          n.scale(150 * i).translate([o, u]);
        },
        e
      );
    }
    ks.prototype = {
      constructor: ks,
      point: function(n, t) {
        this.stream.point(n, t);
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
    var Is = 16,
      Ls = Bu(30 * Pu),
      Bs = function(n, t) {
        return +t
          ? (function(n, t) {
              function e(r, i, o, u, a, c, f, s, l, h, d, p, v, m) {
                var y = f - r,
                  g = s - i,
                  _ = y * y + g * g;
                if (_ > 4 * t && v--) {
                  var b = u + h,
                    x = a + d,
                    w = c + p,
                    M = Xu(b * b + x * x + w * w),
                    E = Wu((w /= M)),
                    C =
                      Du(Du(w) - 1) < Tu || Du(o - l) < Tu
                        ? (o + l) / 2
                        : Lu(x, b),
                    R = n(C, E),
                    N = R[0],
                    A = R[1],
                    T = N - r,
                    S = A - i,
                    k = g * T - y * S;
                  ((k * k) / _ > t ||
                    Du((y * T + g * S) / _ - 0.5) > 0.3 ||
                    u * h + a * d + c * p < Ls) &&
                    (e(r, i, o, u, a, c, N, A, C, (b /= M), (x /= M), w, v, m),
                    m.point(N, A),
                    e(N, A, C, b, x, w, f, s, l, h, d, p, v, m));
                }
              }
              return function(t) {
                var r,
                  i,
                  o,
                  u,
                  a,
                  c,
                  f,
                  s,
                  l,
                  h,
                  d,
                  p,
                  v = {
                    point: m,
                    lineStart: y,
                    lineEnd: _,
                    polygonStart: function() {
                      t.polygonStart(), (v.lineStart = b);
                    },
                    polygonEnd: function() {
                      t.polygonEnd(), (v.lineStart = y);
                    },
                  };
                function m(e, r) {
                  (e = n(e, r)), t.point(e[0], e[1]);
                }
                function y() {
                  (s = NaN), (v.point = g), t.lineStart();
                }
                function g(r, i) {
                  var o = ga([r, i]),
                    u = n(r, i);
                  e(
                    s,
                    l,
                    f,
                    h,
                    d,
                    p,
                    (s = u[0]),
                    (l = u[1]),
                    (f = r),
                    (h = o[0]),
                    (d = o[1]),
                    (p = o[2]),
                    Is,
                    t
                  ),
                    t.point(s, l);
                }
                function _() {
                  (v.point = m), t.lineEnd();
                }
                function b() {
                  y(), (v.point = x), (v.lineEnd = w);
                }
                function x(n, t) {
                  g((r = n), t),
                    (i = s),
                    (o = l),
                    (u = h),
                    (a = d),
                    (c = p),
                    (v.point = g);
                }
                function w() {
                  e(s, l, f, h, d, p, i, o, r, u, a, c, Is, t),
                    (v.lineEnd = _),
                    _();
                }
                return v;
              };
            })(n, t)
          : (function(n) {
              return Ss({
                point: function(t, e) {
                  (t = n(t, e)), this.stream.point(t[0], t[1]);
                },
              });
            })(n);
      };
    var zs = Ss({
      point: function(n, t) {
        this.stream.point(n * Pu, t * Pu);
      },
    });
    function qs(n, t, e, r) {
      var i = Bu(r),
        o = Gu(r),
        u = i * n,
        a = o * n,
        c = i / n,
        f = o / n,
        s = (o * e - i * t) / n,
        l = (o * t + i * e) / n;
      function h(n, r) {
        return [u * n - a * r + t, e - a * n - u * r];
      }
      return (
        (h.invert = function(n, t) {
          return [c * n - f * t + s, l - f * n - c * t];
        }),
        h
      );
    }
    function Fs(n) {
      return js(function() {
        return n;
      })();
    }
    function js(n) {
      var t,
        e,
        r,
        i,
        o,
        u,
        a,
        c,
        f,
        s,
        l = 150,
        h = 480,
        d = 250,
        p = 0,
        v = 0,
        m = 0,
        y = 0,
        g = 0,
        _ = 0,
        b = null,
        x = Vc,
        w = null,
        M = kf,
        E = 0.5;
      function C(n) {
        return c(n[0] * Pu, n[1] * Pu);
      }
      function R(n) {
        return (n = c.invert(n[0], n[1])) && [n[0] * Ou, n[1] * Ou];
      }
      function N() {
        var n = qs(l, 0, 0, _).apply(null, t(p, v)),
          r = (_
            ? qs
            : function(n, t, e) {
                function r(r, i) {
                  return [t + n * r, e - n * i];
                }
                return (
                  (r.invert = function(r, i) {
                    return [(r - t) / n, (e - i) / n];
                  }),
                  r
                );
              })(l, h - n[0], d - n[1], _);
        return (
          (e = Ec(m, y, g)), (a = wc(t, r)), (c = wc(e, a)), (u = Bs(a, E)), A()
        );
      }
      function A() {
        return (f = s = null), C;
      }
      return (
        (C.stream = function(n) {
          return f && s === n
            ? f
            : (f = zs(
                (function(n) {
                  return Ss({
                    point: function(t, e) {
                      var r = n(t, e);
                      return this.stream.point(r[0], r[1]);
                    },
                  });
                })(e)(x(u(M((s = n)))))
              ));
        }),
        (C.preclip = function(n) {
          return arguments.length ? ((x = n), (b = void 0), A()) : x;
        }),
        (C.postclip = function(n) {
          return arguments.length ? ((M = n), (w = r = i = o = null), A()) : M;
        }),
        (C.clipAngle = function(n) {
          return arguments.length
            ? ((x = +n ? Kc((b = n * Pu)) : ((b = null), Vc)), A())
            : b * Ou;
        }),
        (C.clipExtent = function(n) {
          return arguments.length
            ? ((M =
                null == n
                  ? ((w = r = i = o = null), kf)
                  : Qc(
                      (w = +n[0][0]),
                      (r = +n[0][1]),
                      (i = +n[1][0]),
                      (o = +n[1][1])
                    )),
              A())
            : null == w
            ? null
            : [[w, r], [i, o]];
        }),
        (C.scale = function(n) {
          return arguments.length ? ((l = +n), N()) : l;
        }),
        (C.translate = function(n) {
          return arguments.length ? ((h = +n[0]), (d = +n[1]), N()) : [h, d];
        }),
        (C.center = function(n) {
          return arguments.length
            ? ((p = (n[0] % 360) * Pu), (v = (n[1] % 360) * Pu), N())
            : [p * Ou, v * Ou];
        }),
        (C.rotate = function(n) {
          return arguments.length
            ? ((m = (n[0] % 360) * Pu),
              (y = (n[1] % 360) * Pu),
              (g = n.length > 2 ? (n[2] % 360) * Pu : 0),
              N())
            : [m * Ou, y * Ou, g * Ou];
        }),
        (C.angle = function(n) {
          return arguments.length ? ((_ = (n % 360) * Pu), N()) : _ * Ou;
        }),
        (C.precision = function(n) {
          return arguments.length ? ((u = Bs(a, (E = n * n))), A()) : Xu(E);
        }),
        (C.fitExtent = function(n, t) {
          return Ys(C, n, t);
        }),
        (C.fitSize = function(n, t) {
          return Os(C, n, t);
        }),
        (C.fitWidth = function(n, t) {
          return Ps(C, n, t);
        }),
        (C.fitHeight = function(n, t) {
          return Ds(C, n, t);
        }),
        function() {
          return (
            (t = n.apply(this, arguments)), (C.invert = t.invert && R), N()
          );
        }
      );
    }
    function Gs(n) {
      var t = 0,
        e = Su / 3,
        r = js(n),
        i = r(t, e);
      return (
        (i.parallels = function(n) {
          return arguments.length
            ? r((t = n[0] * Pu), (e = n[1] * Pu))
            : [t * Ou, e * Ou];
        }),
        i
      );
    }
    function Hs(n, t) {
      var e = Gu(n),
        r = (e + Gu(t)) / 2;
      if (Du(r) < Tu)
        return (function(n) {
          var t = Bu(n);
          function e(n, e) {
            return [n * t, Gu(e) / t];
          }
          return (
            (e.invert = function(n, e) {
              return [n / t, Wu(e * t)];
            }),
            e
          );
        })(n);
      var i = 1 + e * (2 * r - e),
        o = Xu(i) / r;
      function u(n, t) {
        var e = Xu(i - 2 * r * Gu(t)) / r;
        return [e * Gu((n *= r)), o - e * Bu(n)];
      }
      return (
        (u.invert = function(n, t) {
          var e = o - t;
          return [
            (Lu(n, Du(e)) / r) * Hu(e),
            Wu((i - (n * n + e * e) * r * r) / (2 * r)),
          ];
        }),
        u
      );
    }
    var Xs = function() {
        return Gs(Hs)
          .scale(155.424)
          .center([0, 33.6442]);
      },
      Vs = function() {
        return Xs()
          .parallels([29.5, 45.5])
          .scale(1070)
          .translate([480, 250])
          .rotate([96, 0])
          .center([-0.6, 38.7]);
      };
    var Ks = function() {
      var n,
        t,
        e,
        r,
        i,
        o,
        u = Vs(),
        a = Xs()
          .rotate([154, 0])
          .center([-2, 58.5])
          .parallels([55, 65]),
        c = Xs()
          .rotate([157, 0])
          .center([-3, 19.9])
          .parallels([8, 18]),
        f = {
          point: function(n, t) {
            o = [n, t];
          },
        };
      function s(n) {
        var t = n[0],
          u = n[1];
        return (
          (o = null),
          e.point(t, u),
          o || (r.point(t, u), o) || (i.point(t, u), o)
        );
      }
      function l() {
        return (n = t = null), s;
      }
      return (
        (s.invert = function(n) {
          var t = u.scale(),
            e = u.translate(),
            r = (n[0] - e[0]) / t,
            i = (n[1] - e[1]) / t;
          return (i >= 0.12 && i < 0.234 && r >= -0.425 && r < -0.214
            ? a
            : i >= 0.166 && i < 0.234 && r >= -0.214 && r < -0.115
            ? c
            : u
          ).invert(n);
        }),
        (s.stream = function(e) {
          return n && t === e
            ? n
            : ((r = [u.stream((t = e)), a.stream(e), c.stream(e)]),
              (i = r.length),
              (n = {
                point: function(n, t) {
                  for (var e = -1; ++e < i; ) r[e].point(n, t);
                },
                sphere: function() {
                  for (var n = -1; ++n < i; ) r[n].sphere();
                },
                lineStart: function() {
                  for (var n = -1; ++n < i; ) r[n].lineStart();
                },
                lineEnd: function() {
                  for (var n = -1; ++n < i; ) r[n].lineEnd();
                },
                polygonStart: function() {
                  for (var n = -1; ++n < i; ) r[n].polygonStart();
                },
                polygonEnd: function() {
                  for (var n = -1; ++n < i; ) r[n].polygonEnd();
                },
              }));
          var r, i;
        }),
        (s.precision = function(n) {
          return arguments.length
            ? (u.precision(n), a.precision(n), c.precision(n), l())
            : u.precision();
        }),
        (s.scale = function(n) {
          return arguments.length
            ? (u.scale(n),
              a.scale(0.35 * n),
              c.scale(n),
              s.translate(u.translate()))
            : u.scale();
        }),
        (s.translate = function(n) {
          if (!arguments.length) return u.translate();
          var t = u.scale(),
            o = +n[0],
            s = +n[1];
          return (
            (e = u
              .translate(n)
              .clipExtent([
                [o - 0.455 * t, s - 0.238 * t],
                [o + 0.455 * t, s + 0.238 * t],
              ])
              .stream(f)),
            (r = a
              .translate([o - 0.307 * t, s + 0.201 * t])
              .clipExtent([
                [o - 0.425 * t + Tu, s + 0.12 * t + Tu],
                [o - 0.214 * t - Tu, s + 0.234 * t - Tu],
              ])
              .stream(f)),
            (i = c
              .translate([o - 0.205 * t, s + 0.212 * t])
              .clipExtent([
                [o - 0.214 * t + Tu, s + 0.166 * t + Tu],
                [o - 0.115 * t - Tu, s + 0.234 * t - Tu],
              ])
              .stream(f)),
            l()
          );
        }),
        (s.fitExtent = function(n, t) {
          return Ys(s, n, t);
        }),
        (s.fitSize = function(n, t) {
          return Os(s, n, t);
        }),
        (s.fitWidth = function(n, t) {
          return Ps(s, n, t);
        }),
        (s.fitHeight = function(n, t) {
          return Ds(s, n, t);
        }),
        s.scale(1070)
      );
    };
    function Ws(n) {
      return function(t, e) {
        var r = Bu(t),
          i = Bu(e),
          o = n(r * i);
        return [o * i * Gu(t), o * Gu(e)];
      };
    }
    function Zs(n) {
      return function(t, e) {
        var r = Xu(t * t + e * e),
          i = n(r),
          o = Gu(i),
          u = Bu(i);
        return [Lu(t * o, r * u), Wu(r && (e * o) / r)];
      };
    }
    var $s = Ws(function(n) {
      return Xu(2 / (1 + n));
    });
    $s.invert = Zs(function(n) {
      return 2 * Wu(n / 2);
    });
    var Qs = function() {
        return Fs($s)
          .scale(124.75)
          .clipAngle(179.999);
      },
      Js = Ws(function(n) {
        return (n = Ku(n)) && n / Gu(n);
      });
    Js.invert = Zs(function(n) {
      return n;
    });
    var nl = function() {
      return Fs(Js)
        .scale(79.4188)
        .clipAngle(179.999);
    };
    function tl(n, t) {
      return [n, Fu(Vu((ku + t) / 2))];
    }
    tl.invert = function(n, t) {
      return [n, 2 * Iu(qu(t)) - ku];
    };
    var el = function() {
      return rl(tl).scale(961 / Yu);
    };
    function rl(n) {
      var t,
        e,
        r,
        i = Fs(n),
        o = i.center,
        u = i.scale,
        a = i.translate,
        c = i.clipExtent,
        f = null;
      function s() {
        var o = Su * u(),
          a = i(Ac(i.rotate()).invert([0, 0]));
        return c(
          null == f
            ? [[a[0] - o, a[1] - o], [a[0] + o, a[1] + o]]
            : n === tl
            ? [[Math.max(a[0] - o, f), t], [Math.min(a[0] + o, e), r]]
            : [[f, Math.max(a[1] - o, t)], [e, Math.min(a[1] + o, r)]]
        );
      }
      return (
        (i.scale = function(n) {
          return arguments.length ? (u(n), s()) : u();
        }),
        (i.translate = function(n) {
          return arguments.length ? (a(n), s()) : a();
        }),
        (i.center = function(n) {
          return arguments.length ? (o(n), s()) : o();
        }),
        (i.clipExtent = function(n) {
          return arguments.length
            ? (null == n
                ? (f = t = e = r = null)
                : ((f = +n[0][0]),
                  (t = +n[0][1]),
                  (e = +n[1][0]),
                  (r = +n[1][1])),
              s())
            : null == f
            ? null
            : [[f, t], [e, r]];
        }),
        s()
      );
    }
    function il(n) {
      return Vu((ku + n) / 2);
    }
    function ol(n, t) {
      var e = Bu(n),
        r = n === t ? Gu(n) : Fu(e / Bu(t)) / Fu(il(t) / il(n)),
        i = (e * ju(il(n), r)) / r;
      if (!r) return tl;
      function o(n, t) {
        i > 0 ? t < -ku + Tu && (t = -ku + Tu) : t > ku - Tu && (t = ku - Tu);
        var e = i / ju(il(t), r);
        return [e * Gu(r * n), i - e * Bu(r * n)];
      }
      return (
        (o.invert = function(n, t) {
          var e = i - t,
            o = Hu(r) * Xu(n * n + e * e);
          return [(Lu(n, Du(e)) / r) * Hu(e), 2 * Iu(ju(i / o, 1 / r)) - ku];
        }),
        o
      );
    }
    var ul = function() {
      return Gs(ol)
        .scale(109.5)
        .parallels([30, 30]);
    };
    function al(n, t) {
      return [n, t];
    }
    al.invert = al;
    var cl = function() {
      return Fs(al).scale(152.63);
    };
    function fl(n, t) {
      var e = Bu(n),
        r = n === t ? Gu(n) : (e - Bu(t)) / (t - n),
        i = e / r + n;
      if (Du(r) < Tu) return al;
      function o(n, t) {
        var e = i - t,
          o = r * n;
        return [e * Gu(o), i - e * Bu(o)];
      }
      return (
        (o.invert = function(n, t) {
          var e = i - t;
          return [(Lu(n, Du(e)) / r) * Hu(e), i - Hu(r) * Xu(n * n + e * e)];
        }),
        o
      );
    }
    var sl = function() {
        return Gs(fl)
          .scale(131.154)
          .center([0, 13.9389]);
      },
      ll = 1.340264,
      hl = -0.081106,
      dl = 893e-6,
      pl = 0.003796,
      vl = Xu(3) / 2;
    function ml(n, t) {
      var e = Wu(vl * Gu(t)),
        r = e * e,
        i = r * r * r;
      return [
        (n * Bu(e)) / (vl * (ll + 3 * hl * r + i * (7 * dl + 9 * pl * r))),
        e * (ll + hl * r + i * (dl + pl * r)),
      ];
    }
    ml.invert = function(n, t) {
      for (
        var e, r = t, i = r * r, o = i * i * i, u = 0;
        u < 12 &&
        ((o =
          (i =
            (r -= e =
              (r * (ll + hl * i + o * (dl + pl * i)) - t) /
              (ll + 3 * hl * i + o * (7 * dl + 9 * pl * i))) * r) *
          i *
          i),
        !(Du(e) < 1e-12));
        ++u
      );
      return [
        (vl * n * (ll + 3 * hl * i + o * (7 * dl + 9 * pl * i))) / Bu(r),
        Wu(Gu(r) / vl),
      ];
    };
    var yl = function() {
      return Fs(ml).scale(177.158);
    };
    function gl(n, t) {
      var e = Bu(t),
        r = Bu(n) * e;
      return [(e * Gu(n)) / r, Gu(t) / r];
    }
    gl.invert = Zs(Iu);
    var _l = function() {
      return Fs(gl)
        .scale(144.049)
        .clipAngle(60);
    };
    function bl(n, t, e, r) {
      return 1 === n && 1 === t && 0 === e && 0 === r
        ? kf
        : Ss({
            point: function(i, o) {
              this.stream.point(i * n + e, o * t + r);
            },
          });
    }
    var xl = function() {
      var n,
        t,
        e,
        r,
        i,
        o,
        u = 1,
        a = 0,
        c = 0,
        f = 1,
        s = 1,
        l = kf,
        h = null,
        d = kf;
      function p() {
        return (r = i = null), o;
      }
      return (o = {
        stream: function(n) {
          return r && i === n ? r : (r = l(d((i = n))));
        },
        postclip: function(r) {
          return arguments.length ? ((d = r), (h = n = t = e = null), p()) : d;
        },
        clipExtent: function(r) {
          return arguments.length
            ? ((d =
                null == r
                  ? ((h = n = t = e = null), kf)
                  : Qc(
                      (h = +r[0][0]),
                      (n = +r[0][1]),
                      (t = +r[1][0]),
                      (e = +r[1][1])
                    )),
              p())
            : null == h
            ? null
            : [[h, n], [t, e]];
        },
        scale: function(n) {
          return arguments.length
            ? ((l = bl((u = +n) * f, u * s, a, c)), p())
            : u;
        },
        translate: function(n) {
          return arguments.length
            ? ((l = bl(u * f, u * s, (a = +n[0]), (c = +n[1]))), p())
            : [a, c];
        },
        reflectX: function(n) {
          return arguments.length
            ? ((l = bl(u * (f = n ? -1 : 1), u * s, a, c)), p())
            : f < 0;
        },
        reflectY: function(n) {
          return arguments.length
            ? ((l = bl(u * f, u * (s = n ? -1 : 1), a, c)), p())
            : s < 0;
        },
        fitExtent: function(n, t) {
          return Ys(o, n, t);
        },
        fitSize: function(n, t) {
          return Os(o, n, t);
        },
        fitWidth: function(n, t) {
          return Ps(o, n, t);
        },
        fitHeight: function(n, t) {
          return Ds(o, n, t);
        },
      });
    };
    function wl(n, t) {
      var e = t * t,
        r = e * e;
      return [
        n *
          (0.8707 -
            0.131979 * e +
            r * (r * (0.003971 * e - 0.001529 * r) - 0.013791)),
        t *
          (1.007226 +
            e * (0.015085 + r * (0.028874 * e - 0.044475 - 0.005916 * r))),
      ];
    }
    wl.invert = function(n, t) {
      var e,
        r = t,
        i = 25;
      do {
        var o = r * r,
          u = o * o;
        r -= e =
          (r *
            (1.007226 +
              o * (0.015085 + u * (0.028874 * o - 0.044475 - 0.005916 * u))) -
            t) /
          (1.007226 +
            o * (0.045255 + u * (0.259866 * o - 0.311325 - 0.005916 * 11 * u)));
      } while (Du(e) > Tu && --i > 0);
      return [
        n /
          (0.8707 +
            (o = r * r) *
              (o * (o * o * o * (0.003971 - 0.001529 * o) - 0.013791) -
                0.131979)),
        r,
      ];
    };
    var Ml = function() {
      return Fs(wl).scale(175.295);
    };
    function El(n, t) {
      return [Bu(t) * Gu(n), Gu(t)];
    }
    El.invert = Zs(Wu);
    var Cl = function() {
      return Fs(El)
        .scale(249.5)
        .clipAngle(90 + Tu);
    };
    function Rl(n, t) {
      var e = Bu(t),
        r = 1 + Bu(n) * e;
      return [(e * Gu(n)) / r, Gu(t) / r];
    }
    Rl.invert = Zs(function(n) {
      return 2 * Iu(n);
    });
    var Nl = function() {
      return Fs(Rl)
        .scale(250)
        .clipAngle(142);
    };
    function Al(n, t) {
      return [Fu(Vu((ku + t) / 2)), -n];
    }
    Al.invert = function(n, t) {
      return [-t, 2 * Iu(qu(n)) - ku];
    };
    var Tl = function() {
        var n = rl(Al),
          t = n.center,
          e = n.rotate;
        return (
          (n.center = function(n) {
            return arguments.length ? t([-n[1], n[0]]) : [(n = t())[1], -n[0]];
          }),
          (n.rotate = function(n) {
            return arguments.length
              ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90])
              : [(n = e())[0], n[1], n[2] - 90];
          }),
          e([0, 0, 90]).scale(159.155)
        );
      },
      Sl = e(3),
      kl = function(n) {
        for (var t, e = -1, r = n.length, i = n[r - 1], o = 0; ++e < r; )
          (t = i), (i = n[e]), (o += t[1] * i[0] - t[0] * i[1]);
        return o / 2;
      },
      Ul = function(n) {
        for (
          var t, e, r = -1, i = n.length, o = 0, u = 0, a = n[i - 1], c = 0;
          ++r < i;

        )
          (t = a),
            (a = n[r]),
            (c += e = t[0] * a[1] - a[0] * t[1]),
            (o += (t[0] + a[0]) * e),
            (u += (t[1] + a[1]) * e);
        return [o / (c *= 3), u / c];
      },
      Yl = function(n, t, e) {
        return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0]);
      };
    function Ol(n, t) {
      return n[0] - t[0] || n[1] - t[1];
    }
    function Pl(n) {
      for (var t = n.length, e = [0, 1], r = 2, i = 2; i < t; ++i) {
        for (; r > 1 && Yl(n[e[r - 2]], n[e[r - 1]], n[i]) <= 0; ) --r;
        e[r++] = i;
      }
      return e.slice(0, r);
    }
    var Dl = function(n) {
        if ((e = n.length) < 3) return null;
        var t,
          e,
          r = new Array(e),
          i = new Array(e);
        for (t = 0; t < e; ++t) r[t] = [+n[t][0], +n[t][1], t];
        for (r.sort(Ol), t = 0; t < e; ++t) i[t] = [r[t][0], -r[t][1]];
        var o = Pl(r),
          u = Pl(i),
          a = u[0] === o[0],
          c = u[u.length - 1] === o[o.length - 1],
          f = [];
        for (t = o.length - 1; t >= 0; --t) f.push(n[r[o[t]][2]]);
        for (t = +a; t < u.length - c; ++t) f.push(n[r[u[t]][2]]);
        return f;
      },
      Il = function(n, t) {
        for (
          var e,
            r,
            i = n.length,
            o = n[i - 1],
            u = t[0],
            a = t[1],
            c = o[0],
            f = o[1],
            s = !1,
            l = 0;
          l < i;
          ++l
        )
          (e = (o = n[l])[0]),
            (r = o[1]) > a != f > a &&
              u < ((c - e) * (a - r)) / (f - r) + e &&
              (s = !s),
            (c = e),
            (f = r);
        return s;
      },
      Ll = function(n) {
        for (
          var t,
            e,
            r = -1,
            i = n.length,
            o = n[i - 1],
            u = o[0],
            a = o[1],
            c = 0;
          ++r < i;

        )
          (t = u),
            (e = a),
            (t -= u = (o = n[r])[0]),
            (e -= a = o[1]),
            (c += Math.sqrt(t * t + e * e));
        return c;
      },
      Bl = function() {
        return Math.random();
      },
      zl = (function n(t) {
        function e(n, e) {
          return (
            (n = null == n ? 0 : +n),
            (e = null == e ? 1 : +e),
            1 === arguments.length ? ((e = n), (n = 0)) : (e -= n),
            function() {
              return t() * e + n;
            }
          );
        }
        return (e.source = n), e;
      })(Bl),
      ql = (function n(t) {
        function e(n, e) {
          var r, i;
          return (
            (n = null == n ? 0 : +n),
            (e = null == e ? 1 : +e),
            function() {
              var o;
              if (null != r) (o = r), (r = null);
              else
                do {
                  (r = 2 * t() - 1), (o = 2 * t() - 1), (i = r * r + o * o);
                } while (!i || i > 1);
              return n + e * o * Math.sqrt((-2 * Math.log(i)) / i);
            }
          );
        }
        return (e.source = n), e;
      })(Bl),
      Fl = (function n(t) {
        function e() {
          var n = ql.source(t).apply(this, arguments);
          return function() {
            return Math.exp(n());
          };
        }
        return (e.source = n), e;
      })(Bl),
      jl = (function n(t) {
        function e(n) {
          return function() {
            for (var e = 0, r = 0; r < n; ++r) e += t();
            return e;
          };
        }
        return (e.source = n), e;
      })(Bl),
      Gl = (function n(t) {
        function e(n) {
          var e = jl.source(t)(n);
          return function() {
            return e() / n;
          };
        }
        return (e.source = n), e;
      })(Bl),
      Hl = (function n(t) {
        function e(n) {
          return function() {
            return -Math.log(1 - t()) / n;
          };
        }
        return (e.source = n), e;
      })(Bl),
      Xl = function(n, t) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
      },
      Vl = function(n) {
        return (
          1 === n.length &&
            (n = (function(n) {
              return function(t, e) {
                return Xl(n(t), e);
              };
            })(n)),
          {
            left: function(t, e, r, i) {
              for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
                var o = (r + i) >>> 1;
                n(t[o], e) < 0 ? (r = o + 1) : (i = o);
              }
              return r;
            },
            right: function(t, e, r, i) {
              for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
                var o = (r + i) >>> 1;
                n(t[o], e) > 0 ? (i = o) : (r = o + 1);
              }
              return r;
            },
          }
        );
      };
    var Kl = Vl(Xl),
      Wl = Kl.right,
      Zl = (Kl.left, Wl);
    var $l = function(n) {
        return null === n ? NaN : +n;
      },
      Ql = Array.prototype,
      Jl =
        (Ql.slice,
        Ql.map,
        function(n, t, e) {
          (n = +n),
            (t = +t),
            (e =
              (i = arguments.length) < 2
                ? ((t = n), (n = 0), 1)
                : i < 3
                ? 1
                : +e);
          for (
            var r = -1,
              i = 0 | Math.max(0, Math.ceil((t - n) / e)),
              o = new Array(i);
            ++r < i;

          )
            o[r] = n + r * e;
          return o;
        }),
      nh = Math.sqrt(50),
      th = Math.sqrt(10),
      eh = Math.sqrt(2),
      rh = function(n, t, e) {
        var r,
          i,
          o,
          u,
          a = -1;
        if (((e = +e), (n = +n) === (t = +t) && e > 0)) return [n];
        if (
          ((r = t < n) && ((i = n), (n = t), (t = i)),
          0 === (u = ih(n, t, e)) || !isFinite(u))
        )
          return [];
        if (u > 0)
          for (
            n = Math.ceil(n / u),
              t = Math.floor(t / u),
              o = new Array((i = Math.ceil(t - n + 1)));
            ++a < i;

          )
            o[a] = (n + a) * u;
        else
          for (
            n = Math.floor(n * u),
              t = Math.ceil(t * u),
              o = new Array((i = Math.ceil(n - t + 1)));
            ++a < i;

          )
            o[a] = (n - a) / u;
        return r && o.reverse(), o;
      };
    function ih(n, t, e) {
      var r = (t - n) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        o = r / Math.pow(10, i);
      return i >= 0
        ? (o >= nh ? 10 : o >= th ? 5 : o >= eh ? 2 : 1) * Math.pow(10, i)
        : -Math.pow(10, -i) / (o >= nh ? 10 : o >= th ? 5 : o >= eh ? 2 : 1);
    }
    function oh(n, t, e) {
      var r = Math.abs(t - n) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        o = r / i;
      return (
        o >= nh ? (i *= 10) : o >= th ? (i *= 5) : o >= eh && (i *= 2),
        t < n ? -i : i
      );
    }
    var uh = function(n, t, e) {
      if ((null == e && (e = $l), (r = n.length))) {
        if ((t = +t) <= 0 || r < 2) return +e(n[0], 0, n);
        if (t >= 1) return +e(n[r - 1], r - 1, n);
        var r,
          i = (r - 1) * t,
          o = Math.floor(i),
          u = +e(n[o], o, n);
        return u + (+e(n[o + 1], o + 1, n) - u) * (i - o);
      }
    };
    function ah(n, t) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(n);
          break;
        default:
          this.range(t).domain(n);
      }
      return this;
    }
    function ch(n, t) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.interpolator(n);
          break;
        default:
          this.interpolator(t).domain(n);
      }
      return this;
    }
    var fh = Array.prototype,
      sh = fh.map,
      lh = fh.slice,
      hh = {name: 'implicit'};
    function dh() {
      var n = ai(),
        t = [],
        e = [],
        r = hh;
      function i(i) {
        var o = i + '',
          u = n.get(o);
        if (!u) {
          if (r !== hh) return r;
          n.set(o, (u = t.push(i)));
        }
        return e[(u - 1) % e.length];
      }
      return (
        (i.domain = function(e) {
          if (!arguments.length) return t.slice();
          (t = []), (n = ai());
          for (var r, o, u = -1, a = e.length; ++u < a; )
            n.has((o = (r = e[u]) + '')) || n.set(o, t.push(r));
          return i;
        }),
        (i.range = function(n) {
          return arguments.length ? ((e = lh.call(n)), i) : e.slice();
        }),
        (i.unknown = function(n) {
          return arguments.length ? ((r = n), i) : r;
        }),
        (i.copy = function() {
          return dh(t, e).unknown(r);
        }),
        ah.apply(i, arguments),
        i
      );
    }
    function ph() {
      var n,
        t,
        e = dh().unknown(void 0),
        r = e.domain,
        i = e.range,
        o = [0, 1],
        u = !1,
        a = 0,
        c = 0,
        f = 0.5;
      function s() {
        var e = r().length,
          s = o[1] < o[0],
          l = o[s - 0],
          h = o[1 - s];
        (n = (h - l) / Math.max(1, e - a + 2 * c)),
          u && (n = Math.floor(n)),
          (l += (h - l - n * (e - a)) * f),
          (t = n * (1 - a)),
          u && ((l = Math.round(l)), (t = Math.round(t)));
        var d = Jl(e).map(function(t) {
          return l + n * t;
        });
        return i(s ? d.reverse() : d);
      }
      return (
        delete e.unknown,
        (e.domain = function(n) {
          return arguments.length ? (r(n), s()) : r();
        }),
        (e.range = function(n) {
          return arguments.length ? ((o = [+n[0], +n[1]]), s()) : o.slice();
        }),
        (e.rangeRound = function(n) {
          return (o = [+n[0], +n[1]]), (u = !0), s();
        }),
        (e.bandwidth = function() {
          return t;
        }),
        (e.step = function() {
          return n;
        }),
        (e.round = function(n) {
          return arguments.length ? ((u = !!n), s()) : u;
        }),
        (e.padding = function(n) {
          return arguments.length ? ((a = Math.min(1, (c = +n))), s()) : a;
        }),
        (e.paddingInner = function(n) {
          return arguments.length ? ((a = Math.min(1, n)), s()) : a;
        }),
        (e.paddingOuter = function(n) {
          return arguments.length ? ((c = +n), s()) : c;
        }),
        (e.align = function(n) {
          return arguments.length
            ? ((f = Math.max(0, Math.min(1, n))), s())
            : f;
        }),
        (e.copy = function() {
          return ph(r(), o)
            .round(u)
            .paddingInner(a)
            .paddingOuter(c)
            .align(f);
        }),
        ah.apply(s(), arguments)
      );
    }
    function vh() {
      return (function n(t) {
        var e = t.copy;
        return (
          (t.padding = t.paddingOuter),
          delete t.paddingInner,
          delete t.paddingOuter,
          (t.copy = function() {
            return n(e());
          }),
          t
        );
      })(ph.apply(null, arguments).paddingInner(1));
    }
    var mh = function(n) {
        return function() {
          return n;
        };
      },
      yh = function(n) {
        return +n;
      },
      gh = [0, 1];
    function _h(n) {
      return n;
    }
    function bh(n, t) {
      return (t -= n = +n)
        ? function(e) {
            return (e - n) / t;
          }
        : mh(isNaN(t) ? NaN : 0.5);
    }
    function xh(n) {
      var t,
        e = n[0],
        r = n[n.length - 1];
      return (
        e > r && ((t = e), (e = r), (r = t)),
        function(n) {
          return Math.max(e, Math.min(r, n));
        }
      );
    }
    function wh(n, t, e) {
      var r = n[0],
        i = n[1],
        o = t[0],
        u = t[1];
      return (
        i < r
          ? ((r = bh(i, r)), (o = e(u, o)))
          : ((r = bh(r, i)), (o = e(o, u))),
        function(n) {
          return o(r(n));
        }
      );
    }
    function Mh(n, t, e) {
      var r = Math.min(n.length, t.length) - 1,
        i = new Array(r),
        o = new Array(r),
        u = -1;
      for (
        n[r] < n[0] && ((n = n.slice().reverse()), (t = t.slice().reverse()));
        ++u < r;

      )
        (i[u] = bh(n[u], n[u + 1])), (o[u] = e(t[u], t[u + 1]));
      return function(t) {
        var e = Zl(n, t, 1, r) - 1;
        return o[e](i[e](t));
      };
    }
    function Eh(n, t) {
      return t
        .domain(n.domain())
        .range(n.range())
        .interpolate(n.interpolate())
        .clamp(n.clamp())
        .unknown(n.unknown());
    }
    function Ch() {
      var n,
        t,
        e,
        r,
        i,
        o,
        u = gh,
        a = gh,
        c = Rt.a,
        f = _h;
      function s() {
        return (
          (r = Math.min(u.length, a.length) > 2 ? Mh : wh), (i = o = null), l
        );
      }
      function l(t) {
        return isNaN((t = +t)) ? e : (i || (i = r(u.map(n), a, c)))(n(f(t)));
      }
      return (
        (l.invert = function(e) {
          return f(t((o || (o = r(a, u.map(n), Rt.o)))(e)));
        }),
        (l.domain = function(n) {
          return arguments.length
            ? ((u = sh.call(n, yh)), f === _h || (f = xh(u)), s())
            : u.slice();
        }),
        (l.range = function(n) {
          return arguments.length ? ((a = lh.call(n)), s()) : a.slice();
        }),
        (l.rangeRound = function(n) {
          return (a = lh.call(n)), (c = Rt.t), s();
        }),
        (l.clamp = function(n) {
          return arguments.length ? ((f = n ? xh(u) : _h), l) : f !== _h;
        }),
        (l.interpolate = function(n) {
          return arguments.length ? ((c = n), s()) : c;
        }),
        (l.unknown = function(n) {
          return arguments.length ? ((e = n), l) : e;
        }),
        function(e, r) {
          return (n = e), (t = r), s();
        }
      );
    }
    function Rh(n, t) {
      return Ch()(n, t);
    }
    var Nh = function(n, t, e, r) {
      var i,
        o = oh(n, t, e);
      switch ((r = fu(null == r ? ',f' : r)).type) {
        case 's':
          var u = Math.max(Math.abs(n), Math.abs(t));
          return (
            null != r.precision || isNaN((i = Mu(o, u))) || (r.precision = i),
            pu(r, u)
          );
        case '':
        case 'e':
        case 'g':
        case 'p':
        case 'r':
          null != r.precision ||
            isNaN((i = Eu(o, Math.max(Math.abs(n), Math.abs(t))))) ||
            (r.precision = i - ('e' === r.type));
          break;
        case 'f':
        case '%':
          null != r.precision ||
            isNaN((i = wu(o))) ||
            (r.precision = i - 2 * ('%' === r.type));
      }
      return du(r);
    };
    function Ah(n) {
      var t = n.domain;
      return (
        (n.ticks = function(n) {
          var e = t();
          return rh(e[0], e[e.length - 1], null == n ? 10 : n);
        }),
        (n.tickFormat = function(n, e) {
          var r = t();
          return Nh(r[0], r[r.length - 1], null == n ? 10 : n, e);
        }),
        (n.nice = function(e) {
          null == e && (e = 10);
          var r,
            i = t(),
            o = 0,
            u = i.length - 1,
            a = i[o],
            c = i[u];
          return (
            c < a && ((r = a), (a = c), (c = r), (r = o), (o = u), (u = r)),
            (r = ih(a, c, e)) > 0
              ? (r = ih(
                  (a = Math.floor(a / r) * r),
                  (c = Math.ceil(c / r) * r),
                  e
                ))
              : r < 0 &&
                (r = ih(
                  (a = Math.ceil(a * r) / r),
                  (c = Math.floor(c * r) / r),
                  e
                )),
            r > 0
              ? ((i[o] = Math.floor(a / r) * r),
                (i[u] = Math.ceil(c / r) * r),
                t(i))
              : r < 0 &&
                ((i[o] = Math.ceil(a * r) / r),
                (i[u] = Math.floor(c * r) / r),
                t(i)),
            n
          );
        }),
        n
      );
    }
    function Th() {
      var n = Rh(_h, _h);
      return (
        (n.copy = function() {
          return Eh(n, Th());
        }),
        ah.apply(n, arguments),
        Ah(n)
      );
    }
    function Sh(n) {
      var t;
      function e(n) {
        return isNaN((n = +n)) ? t : n;
      }
      return (
        (e.invert = e),
        (e.domain = e.range = function(t) {
          return arguments.length ? ((n = sh.call(t, yh)), e) : n.slice();
        }),
        (e.unknown = function(n) {
          return arguments.length ? ((t = n), e) : t;
        }),
        (e.copy = function() {
          return Sh(n).unknown(t);
        }),
        (n = arguments.length ? sh.call(n, yh) : [0, 1]),
        Ah(e)
      );
    }
    var kh = function(n, t) {
      var e,
        r = 0,
        i = (n = n.slice()).length - 1,
        o = n[r],
        u = n[i];
      return (
        u < o && ((e = r), (r = i), (i = e), (e = o), (o = u), (u = e)),
        (n[r] = t.floor(o)),
        (n[i] = t.ceil(u)),
        n
      );
    };
    function Uh(n) {
      return Math.log(n);
    }
    function Yh(n) {
      return Math.exp(n);
    }
    function Oh(n) {
      return -Math.log(-n);
    }
    function Ph(n) {
      return -Math.exp(-n);
    }
    function Dh(n) {
      return isFinite(n) ? +('1e' + n) : n < 0 ? 0 : n;
    }
    function Ih(n) {
      return function(t) {
        return -n(-t);
      };
    }
    function Lh(n) {
      var t,
        e,
        r = n(Uh, Yh),
        i = r.domain,
        o = 10;
      function u() {
        return (
          (t = (function(n) {
            return n === Math.E
              ? Math.log
              : (10 === n && Math.log10) ||
                  (2 === n && Math.log2) ||
                  ((n = Math.log(n)),
                  function(t) {
                    return Math.log(t) / n;
                  });
          })(o)),
          (e = (function(n) {
            return 10 === n
              ? Dh
              : n === Math.E
              ? Math.exp
              : function(t) {
                  return Math.pow(n, t);
                };
          })(o)),
          i()[0] < 0 ? ((t = Ih(t)), (e = Ih(e)), n(Oh, Ph)) : n(Uh, Yh),
          r
        );
      }
      return (
        (r.base = function(n) {
          return arguments.length ? ((o = +n), u()) : o;
        }),
        (r.domain = function(n) {
          return arguments.length ? (i(n), u()) : i();
        }),
        (r.ticks = function(n) {
          var r,
            u = i(),
            a = u[0],
            c = u[u.length - 1];
          (r = c < a) && ((h = a), (a = c), (c = h));
          var f,
            s,
            l,
            h = t(a),
            d = t(c),
            p = null == n ? 10 : +n,
            v = [];
          if (!(o % 1) && d - h < p) {
            if (((h = Math.round(h) - 1), (d = Math.round(d) + 1), a > 0)) {
              for (; h < d; ++h)
                for (s = 1, f = e(h); s < o; ++s)
                  if (!((l = f * s) < a)) {
                    if (l > c) break;
                    v.push(l);
                  }
            } else
              for (; h < d; ++h)
                for (s = o - 1, f = e(h); s >= 1; --s)
                  if (!((l = f * s) < a)) {
                    if (l > c) break;
                    v.push(l);
                  }
          } else v = rh(h, d, Math.min(d - h, p)).map(e);
          return r ? v.reverse() : v;
        }),
        (r.tickFormat = function(n, i) {
          if (
            (null == i && (i = 10 === o ? '.0e' : ','),
            'function' != typeof i && (i = du(i)),
            n === 1 / 0)
          )
            return i;
          null == n && (n = 10);
          var u = Math.max(1, (o * n) / r.ticks().length);
          return function(n) {
            var r = n / e(Math.round(t(n)));
            return r * o < o - 0.5 && (r *= o), r <= u ? i(n) : '';
          };
        }),
        (r.nice = function() {
          return i(
            kh(i(), {
              floor: function(n) {
                return e(Math.floor(t(n)));
              },
              ceil: function(n) {
                return e(Math.ceil(t(n)));
              },
            })
          );
        }),
        r
      );
    }
    function Bh() {
      var n = Lh(Ch()).domain([1, 10]);
      return (
        (n.copy = function() {
          return Eh(n, Bh()).base(n.base());
        }),
        ah.apply(n, arguments),
        n
      );
    }
    function zh(n) {
      return function(t) {
        return Math.sign(t) * Math.log1p(Math.abs(t / n));
      };
    }
    function qh(n) {
      return function(t) {
        return Math.sign(t) * Math.expm1(Math.abs(t)) * n;
      };
    }
    function Fh(n) {
      var t = 1,
        e = n(zh(t), qh(t));
      return (
        (e.constant = function(e) {
          return arguments.length ? n(zh((t = +e)), qh(t)) : t;
        }),
        Ah(e)
      );
    }
    function jh() {
      var n = Fh(Ch());
      return (
        (n.copy = function() {
          return Eh(n, jh()).constant(n.constant());
        }),
        ah.apply(n, arguments)
      );
    }
    function Gh(n) {
      return function(t) {
        return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n);
      };
    }
    function Hh(n) {
      return n < 0 ? -Math.sqrt(-n) : Math.sqrt(n);
    }
    function Xh(n) {
      return n < 0 ? -n * n : n * n;
    }
    function Vh(n) {
      var t = n(_h, _h),
        e = 1;
      return (
        (t.exponent = function(t) {
          return arguments.length
            ? 1 === (e = +t)
              ? n(_h, _h)
              : 0.5 === e
              ? n(Hh, Xh)
              : n(Gh(e), Gh(1 / e))
            : e;
        }),
        Ah(t)
      );
    }
    function Kh() {
      var n = Vh(Ch());
      return (
        (n.copy = function() {
          return Eh(n, Kh()).exponent(n.exponent());
        }),
        ah.apply(n, arguments),
        n
      );
    }
    function Wh() {
      return Kh.apply(null, arguments).exponent(0.5);
    }
    function Zh() {
      var n,
        t = [],
        e = [],
        r = [];
      function i() {
        var n = 0,
          i = Math.max(1, e.length);
        for (r = new Array(i - 1); ++n < i; ) r[n - 1] = uh(t, n / i);
        return o;
      }
      function o(t) {
        return isNaN((t = +t)) ? n : e[Zl(r, t)];
      }
      return (
        (o.invertExtent = function(n) {
          var i = e.indexOf(n);
          return i < 0
            ? [NaN, NaN]
            : [i > 0 ? r[i - 1] : t[0], i < r.length ? r[i] : t[t.length - 1]];
        }),
        (o.domain = function(n) {
          if (!arguments.length) return t.slice();
          t = [];
          for (var e, r = 0, o = n.length; r < o; ++r)
            null == (e = n[r]) || isNaN((e = +e)) || t.push(e);
          return t.sort(Xl), i();
        }),
        (o.range = function(n) {
          return arguments.length ? ((e = lh.call(n)), i()) : e.slice();
        }),
        (o.unknown = function(t) {
          return arguments.length ? ((n = t), o) : n;
        }),
        (o.quantiles = function() {
          return r.slice();
        }),
        (o.copy = function() {
          return Zh()
            .domain(t)
            .range(e)
            .unknown(n);
        }),
        ah.apply(o, arguments)
      );
    }
    function $h() {
      var n,
        t = 0,
        e = 1,
        r = 1,
        i = [0.5],
        o = [0, 1];
      function u(t) {
        return t <= t ? o[Zl(i, t, 0, r)] : n;
      }
      function a() {
        var n = -1;
        for (i = new Array(r); ++n < r; )
          i[n] = ((n + 1) * e - (n - r) * t) / (r + 1);
        return u;
      }
      return (
        (u.domain = function(n) {
          return arguments.length ? ((t = +n[0]), (e = +n[1]), a()) : [t, e];
        }),
        (u.range = function(n) {
          return arguments.length
            ? ((r = (o = lh.call(n)).length - 1), a())
            : o.slice();
        }),
        (u.invertExtent = function(n) {
          var u = o.indexOf(n);
          return u < 0
            ? [NaN, NaN]
            : u < 1
            ? [t, i[0]]
            : u >= r
            ? [i[r - 1], e]
            : [i[u - 1], i[u]];
        }),
        (u.unknown = function(t) {
          return arguments.length ? ((n = t), u) : u;
        }),
        (u.thresholds = function() {
          return i.slice();
        }),
        (u.copy = function() {
          return $h()
            .domain([t, e])
            .range(o)
            .unknown(n);
        }),
        ah.apply(Ah(u), arguments)
      );
    }
    function Qh() {
      var n,
        t = [0.5],
        e = [0, 1],
        r = 1;
      function i(i) {
        return i <= i ? e[Zl(t, i, 0, r)] : n;
      }
      return (
        (i.domain = function(n) {
          return arguments.length
            ? ((t = lh.call(n)), (r = Math.min(t.length, e.length - 1)), i)
            : t.slice();
        }),
        (i.range = function(n) {
          return arguments.length
            ? ((e = lh.call(n)), (r = Math.min(t.length, e.length - 1)), i)
            : e.slice();
        }),
        (i.invertExtent = function(n) {
          var r = e.indexOf(n);
          return [t[r - 1], t[r]];
        }),
        (i.unknown = function(t) {
          return arguments.length ? ((n = t), i) : n;
        }),
        (i.copy = function() {
          return Qh()
            .domain(t)
            .range(e)
            .unknown(n);
        }),
        ah.apply(i, arguments)
      );
    }
    var Jh = new Date(),
      nd = new Date();
    function td(n, t, e, r) {
      function i(t) {
        return n((t = new Date(+t))), t;
      }
      return (
        (i.floor = i),
        (i.ceil = function(e) {
          return n((e = new Date(e - 1))), t(e, 1), n(e), e;
        }),
        (i.round = function(n) {
          var t = i(n),
            e = i.ceil(n);
          return n - t < e - n ? t : e;
        }),
        (i.offset = function(n, e) {
          return t((n = new Date(+n)), null == e ? 1 : Math.floor(e)), n;
        }),
        (i.range = function(e, r, o) {
          var u,
            a = [];
          if (
            ((e = i.ceil(e)),
            (o = null == o ? 1 : Math.floor(o)),
            !(e < r && o > 0))
          )
            return a;
          do {
            a.push((u = new Date(+e))), t(e, o), n(e);
          } while (u < e && e < r);
          return a;
        }),
        (i.filter = function(e) {
          return td(
            function(t) {
              if (t >= t) for (; n(t), !e(t); ) t.setTime(t - 1);
            },
            function(n, r) {
              if (n >= n)
                if (r < 0) for (; ++r <= 0; ) for (; t(n, -1), !e(n); );
                else for (; --r >= 0; ) for (; t(n, 1), !e(n); );
            }
          );
        }),
        e &&
          ((i.count = function(t, r) {
            return (
              Jh.setTime(+t),
              nd.setTime(+r),
              n(Jh),
              n(nd),
              Math.floor(e(Jh, nd))
            );
          }),
          (i.every = function(n) {
            return (
              (n = Math.floor(n)),
              isFinite(n) && n > 0
                ? n > 1
                  ? i.filter(
                      r
                        ? function(t) {
                            return r(t) % n == 0;
                          }
                        : function(t) {
                            return i.count(0, t) % n == 0;
                          }
                    )
                  : i
                : null
            );
          })),
        i
      );
    }
    var ed = td(
      function() {},
      function(n, t) {
        n.setTime(+n + t);
      },
      function(n, t) {
        return t - n;
      }
    );
    ed.every = function(n) {
      return (
        (n = Math.floor(n)),
        isFinite(n) && n > 0
          ? n > 1
            ? td(
                function(t) {
                  t.setTime(Math.floor(t / n) * n);
                },
                function(t, e) {
                  t.setTime(+t + e * n);
                },
                function(t, e) {
                  return (e - t) / n;
                }
              )
            : ed
          : null
      );
    };
    var rd = ed,
      id = ed.range,
      od = 6e4,
      ud = 6048e5,
      ad = td(
        function(n) {
          n.setTime(n - n.getMilliseconds());
        },
        function(n, t) {
          n.setTime(+n + 1e3 * t);
        },
        function(n, t) {
          return (t - n) / 1e3;
        },
        function(n) {
          return n.getUTCSeconds();
        }
      ),
      cd = ad,
      fd = ad.range,
      sd = td(
        function(n) {
          n.setTime(n - n.getMilliseconds() - 1e3 * n.getSeconds());
        },
        function(n, t) {
          n.setTime(+n + t * od);
        },
        function(n, t) {
          return (t - n) / od;
        },
        function(n) {
          return n.getMinutes();
        }
      ),
      ld = sd,
      hd = sd.range,
      dd = td(
        function(n) {
          n.setTime(
            n - n.getMilliseconds() - 1e3 * n.getSeconds() - n.getMinutes() * od
          );
        },
        function(n, t) {
          n.setTime(+n + 36e5 * t);
        },
        function(n, t) {
          return (t - n) / 36e5;
        },
        function(n) {
          return n.getHours();
        }
      ),
      pd = dd,
      vd = dd.range,
      md = td(
        function(n) {
          n.setHours(0, 0, 0, 0);
        },
        function(n, t) {
          n.setDate(n.getDate() + t);
        },
        function(n, t) {
          return (
            (t - n - (t.getTimezoneOffset() - n.getTimezoneOffset()) * od) /
            864e5
          );
        },
        function(n) {
          return n.getDate() - 1;
        }
      ),
      yd = md,
      gd = md.range;
    function _d(n) {
      return td(
        function(t) {
          t.setDate(t.getDate() - ((t.getDay() + 7 - n) % 7)),
            t.setHours(0, 0, 0, 0);
        },
        function(n, t) {
          n.setDate(n.getDate() + 7 * t);
        },
        function(n, t) {
          return (
            (t - n - (t.getTimezoneOffset() - n.getTimezoneOffset()) * od) / ud
          );
        }
      );
    }
    var bd = _d(0),
      xd = _d(1),
      wd = _d(2),
      Md = _d(3),
      Ed = _d(4),
      Cd = _d(5),
      Rd = _d(6),
      Nd = bd.range,
      Ad = xd.range,
      Td = wd.range,
      Sd = Md.range,
      kd = Ed.range,
      Ud = Cd.range,
      Yd = Rd.range,
      Od = td(
        function(n) {
          n.setDate(1), n.setHours(0, 0, 0, 0);
        },
        function(n, t) {
          n.setMonth(n.getMonth() + t);
        },
        function(n, t) {
          return (
            t.getMonth() -
            n.getMonth() +
            12 * (t.getFullYear() - n.getFullYear())
          );
        },
        function(n) {
          return n.getMonth();
        }
      ),
      Pd = Od,
      Dd = Od.range,
      Id = td(
        function(n) {
          n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
        },
        function(n, t) {
          n.setFullYear(n.getFullYear() + t);
        },
        function(n, t) {
          return t.getFullYear() - n.getFullYear();
        },
        function(n) {
          return n.getFullYear();
        }
      );
    Id.every = function(n) {
      return isFinite((n = Math.floor(n))) && n > 0
        ? td(
            function(t) {
              t.setFullYear(Math.floor(t.getFullYear() / n) * n),
                t.setMonth(0, 1),
                t.setHours(0, 0, 0, 0);
            },
            function(t, e) {
              t.setFullYear(t.getFullYear() + e * n);
            }
          )
        : null;
    };
    var Ld = Id,
      Bd = Id.range,
      zd = td(
        function(n) {
          n.setUTCSeconds(0, 0);
        },
        function(n, t) {
          n.setTime(+n + t * od);
        },
        function(n, t) {
          return (t - n) / od;
        },
        function(n) {
          return n.getUTCMinutes();
        }
      ),
      qd = zd,
      Fd = zd.range,
      jd = td(
        function(n) {
          n.setUTCMinutes(0, 0, 0);
        },
        function(n, t) {
          n.setTime(+n + 36e5 * t);
        },
        function(n, t) {
          return (t - n) / 36e5;
        },
        function(n) {
          return n.getUTCHours();
        }
      ),
      Gd = jd,
      Hd = jd.range,
      Xd = td(
        function(n) {
          n.setUTCHours(0, 0, 0, 0);
        },
        function(n, t) {
          n.setUTCDate(n.getUTCDate() + t);
        },
        function(n, t) {
          return (t - n) / 864e5;
        },
        function(n) {
          return n.getUTCDate() - 1;
        }
      ),
      Vd = Xd,
      Kd = Xd.range;
    function Wd(n) {
      return td(
        function(t) {
          t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - n) % 7)),
            t.setUTCHours(0, 0, 0, 0);
        },
        function(n, t) {
          n.setUTCDate(n.getUTCDate() + 7 * t);
        },
        function(n, t) {
          return (t - n) / ud;
        }
      );
    }
    var Zd = Wd(0),
      $d = Wd(1),
      Qd = Wd(2),
      Jd = Wd(3),
      np = Wd(4),
      tp = Wd(5),
      ep = Wd(6),
      rp = Zd.range,
      ip = $d.range,
      op = Qd.range,
      up = Jd.range,
      ap = np.range,
      cp = tp.range,
      fp = ep.range,
      sp = td(
        function(n) {
          n.setUTCDate(1), n.setUTCHours(0, 0, 0, 0);
        },
        function(n, t) {
          n.setUTCMonth(n.getUTCMonth() + t);
        },
        function(n, t) {
          return (
            t.getUTCMonth() -
            n.getUTCMonth() +
            12 * (t.getUTCFullYear() - n.getUTCFullYear())
          );
        },
        function(n) {
          return n.getUTCMonth();
        }
      ),
      lp = sp,
      hp = sp.range,
      dp = td(
        function(n) {
          n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
        },
        function(n, t) {
          n.setUTCFullYear(n.getUTCFullYear() + t);
        },
        function(n, t) {
          return t.getUTCFullYear() - n.getUTCFullYear();
        },
        function(n) {
          return n.getUTCFullYear();
        }
      );
    dp.every = function(n) {
      return isFinite((n = Math.floor(n))) && n > 0
        ? td(
            function(t) {
              t.setUTCFullYear(Math.floor(t.getUTCFullYear() / n) * n),
                t.setUTCMonth(0, 1),
                t.setUTCHours(0, 0, 0, 0);
            },
            function(t, e) {
              t.setUTCFullYear(t.getUTCFullYear() + e * n);
            }
          )
        : null;
    };
    var pp = dp,
      vp = dp.range;
    function mp(n) {
      if (0 <= n.y && n.y < 100) {
        var t = new Date(-1, n.m, n.d, n.H, n.M, n.S, n.L);
        return t.setFullYear(n.y), t;
      }
      return new Date(n.y, n.m, n.d, n.H, n.M, n.S, n.L);
    }
    function yp(n) {
      if (0 <= n.y && n.y < 100) {
        var t = new Date(Date.UTC(-1, n.m, n.d, n.H, n.M, n.S, n.L));
        return t.setUTCFullYear(n.y), t;
      }
      return new Date(Date.UTC(n.y, n.m, n.d, n.H, n.M, n.S, n.L));
    }
    function gp(n) {
      return {y: n, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
    }
    function _p(n) {
      var t = n.dateTime,
        e = n.date,
        r = n.time,
        i = n.periods,
        o = n.days,
        u = n.shortDays,
        a = n.months,
        c = n.shortMonths,
        f = kp(i),
        s = Up(i),
        l = kp(o),
        h = Up(o),
        d = kp(u),
        p = Up(u),
        v = kp(a),
        m = Up(a),
        y = kp(c),
        g = Up(c),
        _ = {
          a: function(n) {
            return u[n.getDay()];
          },
          A: function(n) {
            return o[n.getDay()];
          },
          b: function(n) {
            return c[n.getMonth()];
          },
          B: function(n) {
            return a[n.getMonth()];
          },
          c: null,
          d: Qp,
          e: Qp,
          f: rv,
          H: Jp,
          I: nv,
          j: tv,
          L: ev,
          m: iv,
          M: ov,
          p: function(n) {
            return i[+(n.getHours() >= 12)];
          },
          Q: Yv,
          s: Ov,
          S: uv,
          u: av,
          U: cv,
          V: fv,
          w: sv,
          W: lv,
          x: null,
          X: null,
          y: hv,
          Y: dv,
          Z: pv,
          '%': Uv,
        },
        b = {
          a: function(n) {
            return u[n.getUTCDay()];
          },
          A: function(n) {
            return o[n.getUTCDay()];
          },
          b: function(n) {
            return c[n.getUTCMonth()];
          },
          B: function(n) {
            return a[n.getUTCMonth()];
          },
          c: null,
          d: vv,
          e: vv,
          f: bv,
          H: mv,
          I: yv,
          j: gv,
          L: _v,
          m: xv,
          M: wv,
          p: function(n) {
            return i[+(n.getUTCHours() >= 12)];
          },
          Q: Yv,
          s: Ov,
          S: Mv,
          u: Ev,
          U: Cv,
          V: Rv,
          w: Nv,
          W: Av,
          x: null,
          X: null,
          y: Tv,
          Y: Sv,
          Z: kv,
          '%': Uv,
        },
        x = {
          a: function(n, t, e) {
            var r = d.exec(t.slice(e));
            return r ? ((n.w = p[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          A: function(n, t, e) {
            var r = l.exec(t.slice(e));
            return r ? ((n.w = h[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          b: function(n, t, e) {
            var r = y.exec(t.slice(e));
            return r ? ((n.m = g[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          B: function(n, t, e) {
            var r = v.exec(t.slice(e));
            return r ? ((n.m = m[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          c: function(n, e, r) {
            return E(n, t, e, r);
          },
          d: Fp,
          e: Fp,
          f: Kp,
          H: Gp,
          I: Gp,
          j: jp,
          L: Vp,
          m: qp,
          M: Hp,
          p: function(n, t, e) {
            var r = f.exec(t.slice(e));
            return r ? ((n.p = s[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          Q: Zp,
          s: $p,
          S: Xp,
          u: Op,
          U: Pp,
          V: Dp,
          w: Yp,
          W: Ip,
          x: function(n, t, r) {
            return E(n, e, t, r);
          },
          X: function(n, t, e) {
            return E(n, r, t, e);
          },
          y: Bp,
          Y: Lp,
          Z: zp,
          '%': Wp,
        };
      function w(n, t) {
        return function(e) {
          var r,
            i,
            o,
            u = [],
            a = -1,
            c = 0,
            f = n.length;
          for (e instanceof Date || (e = new Date(+e)); ++a < f; )
            37 === n.charCodeAt(a) &&
              (u.push(n.slice(c, a)),
              null != (i = Cp[(r = n.charAt(++a))])
                ? (r = n.charAt(++a))
                : (i = 'e' === r ? ' ' : '0'),
              (o = t[r]) && (r = o(e, i)),
              u.push(r),
              (c = a + 1));
          return u.push(n.slice(c, a)), u.join('');
        };
      }
      function M(n, t) {
        return function(e) {
          var r,
            i,
            o = gp(1900);
          if (E(o, n, (e += ''), 0) != e.length) return null;
          if ('Q' in o) return new Date(o.Q);
          if (('p' in o && (o.H = (o.H % 12) + 12 * o.p), 'V' in o)) {
            if (o.V < 1 || o.V > 53) return null;
            'w' in o || (o.w = 1),
              'Z' in o
                ? ((i = (r = yp(gp(o.y))).getUTCDay()),
                  (r = i > 4 || 0 === i ? $d.ceil(r) : $d(r)),
                  (r = Vd.offset(r, 7 * (o.V - 1))),
                  (o.y = r.getUTCFullYear()),
                  (o.m = r.getUTCMonth()),
                  (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
                : ((i = (r = t(gp(o.y))).getDay()),
                  (r = i > 4 || 0 === i ? xd.ceil(r) : xd(r)),
                  (r = yd.offset(r, 7 * (o.V - 1))),
                  (o.y = r.getFullYear()),
                  (o.m = r.getMonth()),
                  (o.d = r.getDate() + ((o.w + 6) % 7)));
          } else
            ('W' in o || 'U' in o) &&
              ('w' in o || (o.w = 'u' in o ? o.u % 7 : 'W' in o ? 1 : 0),
              (i = 'Z' in o ? yp(gp(o.y)).getUTCDay() : t(gp(o.y)).getDay()),
              (o.m = 0),
              (o.d =
                'W' in o
                  ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                  : o.w + 7 * o.U - ((i + 6) % 7)));
          return 'Z' in o
            ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), yp(o))
            : t(o);
        };
      }
      function E(n, t, e, r) {
        for (var i, o, u = 0, a = t.length, c = e.length; u < a; ) {
          if (r >= c) return -1;
          if (37 === (i = t.charCodeAt(u++))) {
            if (
              ((i = t.charAt(u++)),
              !(o = x[i in Cp ? t.charAt(u++) : i]) || (r = o(n, e, r)) < 0)
            )
              return -1;
          } else if (i != e.charCodeAt(r++)) return -1;
        }
        return r;
      }
      return (
        (_.x = w(e, _)),
        (_.X = w(r, _)),
        (_.c = w(t, _)),
        (b.x = w(e, b)),
        (b.X = w(r, b)),
        (b.c = w(t, b)),
        {
          format: function(n) {
            var t = w((n += ''), _);
            return (
              (t.toString = function() {
                return n;
              }),
              t
            );
          },
          parse: function(n) {
            var t = M((n += ''), mp);
            return (
              (t.toString = function() {
                return n;
              }),
              t
            );
          },
          utcFormat: function(n) {
            var t = w((n += ''), b);
            return (
              (t.toString = function() {
                return n;
              }),
              t
            );
          },
          utcParse: function(n) {
            var t = M(n, yp);
            return (
              (t.toString = function() {
                return n;
              }),
              t
            );
          },
        }
      );
    }
    var bp,
      xp,
      wp,
      Mp,
      Ep,
      Cp = {'-': '', _: ' ', 0: '0'},
      Rp = /^\s*\d+/,
      Np = /^%/,
      Ap = /[\\^$*+?|[\]().{}]/g;
    function Tp(n, t, e) {
      var r = n < 0 ? '-' : '',
        i = (r ? -n : n) + '',
        o = i.length;
      return r + (o < e ? new Array(e - o + 1).join(t) + i : i);
    }
    function Sp(n) {
      return n.replace(Ap, '\\$&');
    }
    function kp(n) {
      return new RegExp('^(?:' + n.map(Sp).join('|') + ')', 'i');
    }
    function Up(n) {
      for (var t = {}, e = -1, r = n.length; ++e < r; )
        t[n[e].toLowerCase()] = e;
      return t;
    }
    function Yp(n, t, e) {
      var r = Rp.exec(t.slice(e, e + 1));
      return r ? ((n.w = +r[0]), e + r[0].length) : -1;
    }
    function Op(n, t, e) {
      var r = Rp.exec(t.slice(e, e + 1));
      return r ? ((n.u = +r[0]), e + r[0].length) : -1;
    }
    function Pp(n, t, e) {
      var r = Rp.exec(t.slice(e, e + 2));
      return r ? ((n.U = +r[0]), e + r[0].length) : -1;
    }
    function Dp(n, t, e) {
      var r = Rp.exec(t.slice(e, e + 2));
      return r ? ((n.V = +r[0]), e + r[0].length) : -1;
    }
    function Ip(n, t, e) {
      var r = Rp.exec(t.slice(e, e + 2));
      return r ? ((n.W = +r[0]), e + r[0].length) : -1;
    }
    function Lp(n, t, e) {
      var r = Rp.exec(t.slice(e, e + 4));
      return r ? ((n.y = +r[0]), e + r[0].length) : -1;
    }
    function Bp(n, t, e) {
      var r = Rp.exec(t.slice(e, e + 2));
      return r
        ? ((n.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
        : -1;
    }
    function zp(n, t, e) {
      var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(e, e + 6));
      return r
        ? ((n.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), e + r[0].length)
        : -1;
    }
    function qp(n, t, e) {
      var r = Rp.exec(t.slice(e, e + 2));
      return r ? ((n.m = r[0] - 1), e + r[0].length) : -1;
    }
    function Fp(n, t, e) {
      var r = Rp.exec(t.slice(e, e + 2));
      return r ? ((n.d = +r[0]), e + r[0].length) : -1;
    }
    function jp(n, t, e) {
      var r = Rp.exec(t.slice(e, e + 3));
      return r ? ((n.m = 0), (n.d = +r[0]), e + r[0].length) : -1;
    }
    function Gp(n, t, e) {
      var r = Rp.exec(t.slice(e, e + 2));
      return r ? ((n.H = +r[0]), e + r[0].length) : -1;
    }
    function Hp(n, t, e) {
      var r = Rp.exec(t.slice(e, e + 2));
      return r ? ((n.M = +r[0]), e + r[0].length) : -1;
    }
    function Xp(n, t, e) {
      var r = Rp.exec(t.slice(e, e + 2));
      return r ? ((n.S = +r[0]), e + r[0].length) : -1;
    }
    function Vp(n, t, e) {
      var r = Rp.exec(t.slice(e, e + 3));
      return r ? ((n.L = +r[0]), e + r[0].length) : -1;
    }
    function Kp(n, t, e) {
      var r = Rp.exec(t.slice(e, e + 6));
      return r ? ((n.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
    }
    function Wp(n, t, e) {
      var r = Np.exec(t.slice(e, e + 1));
      return r ? e + r[0].length : -1;
    }
    function Zp(n, t, e) {
      var r = Rp.exec(t.slice(e));
      return r ? ((n.Q = +r[0]), e + r[0].length) : -1;
    }
    function $p(n, t, e) {
      var r = Rp.exec(t.slice(e));
      return r ? ((n.Q = 1e3 * +r[0]), e + r[0].length) : -1;
    }
    function Qp(n, t) {
      return Tp(n.getDate(), t, 2);
    }
    function Jp(n, t) {
      return Tp(n.getHours(), t, 2);
    }
    function nv(n, t) {
      return Tp(n.getHours() % 12 || 12, t, 2);
    }
    function tv(n, t) {
      return Tp(1 + yd.count(Ld(n), n), t, 3);
    }
    function ev(n, t) {
      return Tp(n.getMilliseconds(), t, 3);
    }
    function rv(n, t) {
      return ev(n, t) + '000';
    }
    function iv(n, t) {
      return Tp(n.getMonth() + 1, t, 2);
    }
    function ov(n, t) {
      return Tp(n.getMinutes(), t, 2);
    }
    function uv(n, t) {
      return Tp(n.getSeconds(), t, 2);
    }
    function av(n) {
      var t = n.getDay();
      return 0 === t ? 7 : t;
    }
    function cv(n, t) {
      return Tp(bd.count(Ld(n), n), t, 2);
    }
    function fv(n, t) {
      var e = n.getDay();
      return (
        (n = e >= 4 || 0 === e ? Ed(n) : Ed.ceil(n)),
        Tp(Ed.count(Ld(n), n) + (4 === Ld(n).getDay()), t, 2)
      );
    }
    function sv(n) {
      return n.getDay();
    }
    function lv(n, t) {
      return Tp(xd.count(Ld(n), n), t, 2);
    }
    function hv(n, t) {
      return Tp(n.getFullYear() % 100, t, 2);
    }
    function dv(n, t) {
      return Tp(n.getFullYear() % 1e4, t, 4);
    }
    function pv(n) {
      var t = n.getTimezoneOffset();
      return (
        (t > 0 ? '-' : ((t *= -1), '+')) +
        Tp((t / 60) | 0, '0', 2) +
        Tp(t % 60, '0', 2)
      );
    }
    function vv(n, t) {
      return Tp(n.getUTCDate(), t, 2);
    }
    function mv(n, t) {
      return Tp(n.getUTCHours(), t, 2);
    }
    function yv(n, t) {
      return Tp(n.getUTCHours() % 12 || 12, t, 2);
    }
    function gv(n, t) {
      return Tp(1 + Vd.count(pp(n), n), t, 3);
    }
    function _v(n, t) {
      return Tp(n.getUTCMilliseconds(), t, 3);
    }
    function bv(n, t) {
      return _v(n, t) + '000';
    }
    function xv(n, t) {
      return Tp(n.getUTCMonth() + 1, t, 2);
    }
    function wv(n, t) {
      return Tp(n.getUTCMinutes(), t, 2);
    }
    function Mv(n, t) {
      return Tp(n.getUTCSeconds(), t, 2);
    }
    function Ev(n) {
      var t = n.getUTCDay();
      return 0 === t ? 7 : t;
    }
    function Cv(n, t) {
      return Tp(Zd.count(pp(n), n), t, 2);
    }
    function Rv(n, t) {
      var e = n.getUTCDay();
      return (
        (n = e >= 4 || 0 === e ? np(n) : np.ceil(n)),
        Tp(np.count(pp(n), n) + (4 === pp(n).getUTCDay()), t, 2)
      );
    }
    function Nv(n) {
      return n.getUTCDay();
    }
    function Av(n, t) {
      return Tp($d.count(pp(n), n), t, 2);
    }
    function Tv(n, t) {
      return Tp(n.getUTCFullYear() % 100, t, 2);
    }
    function Sv(n, t) {
      return Tp(n.getUTCFullYear() % 1e4, t, 4);
    }
    function kv() {
      return '+0000';
    }
    function Uv() {
      return '%';
    }
    function Yv(n) {
      return +n;
    }
    function Ov(n) {
      return Math.floor(+n / 1e3);
    }
    function Pv(n) {
      return (
        (bp = _p(n)),
        (xp = bp.format),
        (wp = bp.parse),
        (Mp = bp.utcFormat),
        (Ep = bp.utcParse),
        bp
      );
    }
    Pv({
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
    var Dv = Date.prototype.toISOString
      ? function(n) {
          return n.toISOString();
        }
      : Mp('%Y-%m-%dT%H:%M:%S.%LZ');
    var Iv = +new Date('2000-01-01T00:00:00.000Z')
        ? function(n) {
            var t = new Date(n);
            return isNaN(t) ? null : t;
          }
        : Ep('%Y-%m-%dT%H:%M:%S.%LZ'),
      Lv = 1e3,
      Bv = 60 * Lv,
      zv = 60 * Bv,
      qv = 24 * zv,
      Fv = 7 * qv,
      jv = 30 * qv,
      Gv = 365 * qv;
    function Hv(n) {
      return new Date(n);
    }
    function Xv(n) {
      return n instanceof Date ? +n : +new Date(+n);
    }
    function Vv(n, t, e, r, i, o, u, a, c) {
      var f = Rh(_h, _h),
        s = f.invert,
        l = f.domain,
        h = c('.%L'),
        d = c(':%S'),
        p = c('%I:%M'),
        v = c('%I %p'),
        m = c('%a %d'),
        y = c('%b %d'),
        g = c('%B'),
        _ = c('%Y'),
        b = [
          [u, 1, Lv],
          [u, 5, 5 * Lv],
          [u, 15, 15 * Lv],
          [u, 30, 30 * Lv],
          [o, 1, Bv],
          [o, 5, 5 * Bv],
          [o, 15, 15 * Bv],
          [o, 30, 30 * Bv],
          [i, 1, zv],
          [i, 3, 3 * zv],
          [i, 6, 6 * zv],
          [i, 12, 12 * zv],
          [r, 1, qv],
          [r, 2, 2 * qv],
          [e, 1, Fv],
          [t, 1, jv],
          [t, 3, 3 * jv],
          [n, 1, Gv],
        ];
      function x(a) {
        return (u(a) < a
          ? h
          : o(a) < a
          ? d
          : i(a) < a
          ? p
          : r(a) < a
          ? v
          : t(a) < a
          ? e(a) < a
            ? m
            : y
          : n(a) < a
          ? g
          : _)(a);
      }
      function w(t, e, r, i) {
        if ((null == t && (t = 10), 'number' == typeof t)) {
          var o = Math.abs(r - e) / t,
            u = Vl(function(n) {
              return n[2];
            }).right(b, o);
          u === b.length
            ? ((i = oh(e / Gv, r / Gv, t)), (t = n))
            : u
            ? ((i = (u = b[o / b[u - 1][2] < b[u][2] / o ? u - 1 : u])[1]),
              (t = u[0]))
            : ((i = Math.max(oh(e, r, t), 1)), (t = a));
        }
        return null == i ? t : t.every(i);
      }
      return (
        (f.invert = function(n) {
          return new Date(s(n));
        }),
        (f.domain = function(n) {
          return arguments.length ? l(sh.call(n, Xv)) : l().map(Hv);
        }),
        (f.ticks = function(n, t) {
          var e,
            r = l(),
            i = r[0],
            o = r[r.length - 1],
            u = o < i;
          return (
            u && ((e = i), (i = o), (o = e)),
            (e = (e = w(n, i, o, t)) ? e.range(i, o + 1) : []),
            u ? e.reverse() : e
          );
        }),
        (f.tickFormat = function(n, t) {
          return null == t ? x : c(t);
        }),
        (f.nice = function(n, t) {
          var e = l();
          return (n = w(n, e[0], e[e.length - 1], t)) ? l(kh(e, n)) : f;
        }),
        (f.copy = function() {
          return Eh(f, Vv(n, t, e, r, i, o, u, a, c));
        }),
        f
      );
    }
    var Kv = function() {
        return ah.apply(
          Vv(Ld, Pd, bd, yd, pd, ld, cd, rd, xp).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments
        );
      },
      Wv = function() {
        return ah.apply(
          Vv(pp, lp, Zd, Vd, Gd, qd, cd, rd, Mp).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments
        );
      };
    function Zv() {
      var n,
        t,
        e,
        r,
        i,
        o = 0,
        u = 1,
        a = _h,
        c = !1;
      function f(t) {
        return isNaN((t = +t))
          ? i
          : a(
              0 === e
                ? 0.5
                : ((t = (r(t) - n) * e), c ? Math.max(0, Math.min(1, t)) : t)
            );
      }
      return (
        (f.domain = function(i) {
          return arguments.length
            ? ((n = r((o = +i[0]))),
              (t = r((u = +i[1]))),
              (e = n === t ? 0 : 1 / (t - n)),
              f)
            : [o, u];
        }),
        (f.clamp = function(n) {
          return arguments.length ? ((c = !!n), f) : c;
        }),
        (f.interpolator = function(n) {
          return arguments.length ? ((a = n), f) : a;
        }),
        (f.unknown = function(n) {
          return arguments.length ? ((i = n), f) : i;
        }),
        function(i) {
          return (
            (r = i), (n = i(o)), (t = i(u)), (e = n === t ? 0 : 1 / (t - n)), f
          );
        }
      );
    }
    function $v(n, t) {
      return t
        .domain(n.domain())
        .interpolator(n.interpolator())
        .clamp(n.clamp())
        .unknown(n.unknown());
    }
    function Qv() {
      var n = Ah(Zv()(_h));
      return (
        (n.copy = function() {
          return $v(n, Qv());
        }),
        ch.apply(n, arguments)
      );
    }
    function Jv() {
      var n = Lh(Zv()).domain([1, 10]);
      return (
        (n.copy = function() {
          return $v(n, Jv()).base(n.base());
        }),
        ch.apply(n, arguments)
      );
    }
    function nm() {
      var n = Fh(Zv());
      return (
        (n.copy = function() {
          return $v(n, nm()).constant(n.constant());
        }),
        ch.apply(n, arguments)
      );
    }
    function tm() {
      var n = Vh(Zv());
      return (
        (n.copy = function() {
          return $v(n, tm()).exponent(n.exponent());
        }),
        ch.apply(n, arguments)
      );
    }
    function em() {
      return tm.apply(null, arguments).exponent(0.5);
    }
    function rm() {
      var n = [],
        t = _h;
      function e(e) {
        if (!isNaN((e = +e))) return t((Zl(n, e) - 1) / (n.length - 1));
      }
      return (
        (e.domain = function(t) {
          if (!arguments.length) return n.slice();
          n = [];
          for (var r, i = 0, o = t.length; i < o; ++i)
            null == (r = t[i]) || isNaN((r = +r)) || n.push(r);
          return n.sort(Xl), e;
        }),
        (e.interpolator = function(n) {
          return arguments.length ? ((t = n), e) : t;
        }),
        (e.copy = function() {
          return rm(t).domain(n);
        }),
        ch.apply(e, arguments)
      );
    }
    function im() {
      var n,
        t,
        e,
        r,
        i,
        o,
        u,
        a = 0,
        c = 0.5,
        f = 1,
        s = _h,
        l = !1;
      function h(n) {
        return isNaN((n = +n))
          ? u
          : ((n = 0.5 + ((n = +o(n)) - t) * (n < t ? r : i)),
            s(l ? Math.max(0, Math.min(1, n)) : n));
      }
      return (
        (h.domain = function(u) {
          return arguments.length
            ? ((n = o((a = +u[0]))),
              (t = o((c = +u[1]))),
              (e = o((f = +u[2]))),
              (r = n === t ? 0 : 0.5 / (t - n)),
              (i = t === e ? 0 : 0.5 / (e - t)),
              h)
            : [a, c, f];
        }),
        (h.clamp = function(n) {
          return arguments.length ? ((l = !!n), h) : l;
        }),
        (h.interpolator = function(n) {
          return arguments.length ? ((s = n), h) : s;
        }),
        (h.unknown = function(n) {
          return arguments.length ? ((u = n), h) : u;
        }),
        function(u) {
          return (
            (o = u),
            (n = u(a)),
            (t = u(c)),
            (e = u(f)),
            (r = n === t ? 0 : 0.5 / (t - n)),
            (i = t === e ? 0 : 0.5 / (e - t)),
            h
          );
        }
      );
    }
    function om() {
      var n = Ah(im()(_h));
      return (
        (n.copy = function() {
          return $v(n, om());
        }),
        ch.apply(n, arguments)
      );
    }
    function um() {
      var n = Lh(im()).domain([0.1, 1, 10]);
      return (
        (n.copy = function() {
          return $v(n, um()).base(n.base());
        }),
        ch.apply(n, arguments)
      );
    }
    function am() {
      var n = Fh(im());
      return (
        (n.copy = function() {
          return $v(n, am()).constant(n.constant());
        }),
        ch.apply(n, arguments)
      );
    }
    function cm() {
      var n = Vh(im());
      return (
        (n.copy = function() {
          return $v(n, cm()).exponent(n.exponent());
        }),
        ch.apply(n, arguments)
      );
    }
    function fm() {
      return cm.apply(null, arguments).exponent(0.5);
    }
    var sm = e(2),
      lm = function(n) {
        return function() {
          return n;
        };
      },
      hm = Math.abs,
      dm = Math.atan2,
      pm = Math.cos,
      vm = Math.max,
      mm = Math.min,
      ym = Math.sin,
      gm = Math.sqrt,
      _m = 1e-12,
      bm = Math.PI,
      xm = bm / 2,
      wm = 2 * bm;
    function Mm(n) {
      return n >= 1 ? xm : n <= -1 ? -xm : Math.asin(n);
    }
    function Em(n) {
      return n.innerRadius;
    }
    function Cm(n) {
      return n.outerRadius;
    }
    function Rm(n) {
      return n.startAngle;
    }
    function Nm(n) {
      return n.endAngle;
    }
    function Am(n) {
      return n && n.padAngle;
    }
    function Tm(n, t, e, r, i, o, u) {
      var a = n - e,
        c = t - r,
        f = (u ? o : -o) / gm(a * a + c * c),
        s = f * c,
        l = -f * a,
        h = n + s,
        d = t + l,
        p = e + s,
        v = r + l,
        m = (h + p) / 2,
        y = (d + v) / 2,
        g = p - h,
        _ = v - d,
        b = g * g + _ * _,
        x = i - o,
        w = h * v - p * d,
        M = (_ < 0 ? -1 : 1) * gm(vm(0, x * x * b - w * w)),
        E = (w * _ - g * M) / b,
        C = (-w * g - _ * M) / b,
        R = (w * _ + g * M) / b,
        N = (-w * g + _ * M) / b,
        A = E - m,
        T = C - y,
        S = R - m,
        k = N - y;
      return (
        A * A + T * T > S * S + k * k && ((E = R), (C = N)),
        {
          cx: E,
          cy: C,
          x01: -s,
          y01: -l,
          x11: E * (i / x - 1),
          y11: C * (i / x - 1),
        }
      );
    }
    var Sm = function() {
      var n = Em,
        t = Cm,
        e = lm(0),
        r = null,
        i = Rm,
        o = Nm,
        u = Am,
        a = null;
      function c() {
        var c,
          f,
          s,
          l = +n.apply(this, arguments),
          h = +t.apply(this, arguments),
          d = i.apply(this, arguments) - xm,
          p = o.apply(this, arguments) - xm,
          v = hm(p - d),
          m = p > d;
        if ((a || (a = c = Qr()), h < l && ((f = h), (h = l), (l = f)), h > _m))
          if (v > wm - _m)
            a.moveTo(h * pm(d), h * ym(d)),
              a.arc(0, 0, h, d, p, !m),
              l > _m &&
                (a.moveTo(l * pm(p), l * ym(p)), a.arc(0, 0, l, p, d, m));
          else {
            var y,
              g,
              _ = d,
              b = p,
              x = d,
              w = p,
              M = v,
              E = v,
              C = u.apply(this, arguments) / 2,
              R = C > _m && (r ? +r.apply(this, arguments) : gm(l * l + h * h)),
              N = mm(hm(h - l) / 2, +e.apply(this, arguments)),
              A = N,
              T = N;
            if (R > _m) {
              var S = Mm((R / l) * ym(C)),
                k = Mm((R / h) * ym(C));
              (M -= 2 * S) > _m
                ? ((x += S *= m ? 1 : -1), (w -= S))
                : ((M = 0), (x = w = (d + p) / 2)),
                (E -= 2 * k) > _m
                  ? ((_ += k *= m ? 1 : -1), (b -= k))
                  : ((E = 0), (_ = b = (d + p) / 2));
            }
            var U = h * pm(_),
              Y = h * ym(_),
              O = l * pm(w),
              P = l * ym(w);
            if (N > _m) {
              var D,
                I = h * pm(b),
                L = h * ym(b),
                B = l * pm(x),
                z = l * ym(x);
              if (
                v < bm &&
                (D = (function(n, t, e, r, i, o, u, a) {
                  var c = e - n,
                    f = r - t,
                    s = u - i,
                    l = a - o,
                    h = l * c - s * f;
                  if (!(h * h < _m))
                    return [
                      n + (h = (s * (t - o) - l * (n - i)) / h) * c,
                      t + h * f,
                    ];
                })(U, Y, B, z, I, L, O, P))
              ) {
                var q = U - D[0],
                  F = Y - D[1],
                  j = I - D[0],
                  G = L - D[1],
                  H =
                    1 /
                    ym(
                      ((s =
                        (q * j + F * G) /
                        (gm(q * q + F * F) * gm(j * j + G * G))) > 1
                        ? 0
                        : s < -1
                        ? bm
                        : Math.acos(s)) / 2
                    ),
                  X = gm(D[0] * D[0] + D[1] * D[1]);
                (A = mm(N, (l - X) / (H - 1))), (T = mm(N, (h - X) / (H + 1)));
              }
            }
            E > _m
              ? T > _m
                ? ((y = Tm(B, z, U, Y, h, T, m)),
                  (g = Tm(I, L, O, P, h, T, m)),
                  a.moveTo(y.cx + y.x01, y.cy + y.y01),
                  T < N
                    ? a.arc(
                        y.cx,
                        y.cy,
                        T,
                        dm(y.y01, y.x01),
                        dm(g.y01, g.x01),
                        !m
                      )
                    : (a.arc(
                        y.cx,
                        y.cy,
                        T,
                        dm(y.y01, y.x01),
                        dm(y.y11, y.x11),
                        !m
                      ),
                      a.arc(
                        0,
                        0,
                        h,
                        dm(y.cy + y.y11, y.cx + y.x11),
                        dm(g.cy + g.y11, g.cx + g.x11),
                        !m
                      ),
                      a.arc(
                        g.cx,
                        g.cy,
                        T,
                        dm(g.y11, g.x11),
                        dm(g.y01, g.x01),
                        !m
                      )))
                : (a.moveTo(U, Y), a.arc(0, 0, h, _, b, !m))
              : a.moveTo(U, Y),
              l > _m && M > _m
                ? A > _m
                  ? ((y = Tm(O, P, I, L, l, -A, m)),
                    (g = Tm(U, Y, B, z, l, -A, m)),
                    a.lineTo(y.cx + y.x01, y.cy + y.y01),
                    A < N
                      ? a.arc(
                          y.cx,
                          y.cy,
                          A,
                          dm(y.y01, y.x01),
                          dm(g.y01, g.x01),
                          !m
                        )
                      : (a.arc(
                          y.cx,
                          y.cy,
                          A,
                          dm(y.y01, y.x01),
                          dm(y.y11, y.x11),
                          !m
                        ),
                        a.arc(
                          0,
                          0,
                          l,
                          dm(y.cy + y.y11, y.cx + y.x11),
                          dm(g.cy + g.y11, g.cx + g.x11),
                          m
                        ),
                        a.arc(
                          g.cx,
                          g.cy,
                          A,
                          dm(g.y11, g.x11),
                          dm(g.y01, g.x01),
                          !m
                        )))
                  : a.arc(0, 0, l, w, x, m)
                : a.lineTo(O, P);
          }
        else a.moveTo(0, 0);
        if ((a.closePath(), c)) return (a = null), c + '' || null;
      }
      return (
        (c.centroid = function() {
          var e = (+n.apply(this, arguments) + +t.apply(this, arguments)) / 2,
            r =
              (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 -
              bm / 2;
          return [pm(r) * e, ym(r) * e];
        }),
        (c.innerRadius = function(t) {
          return arguments.length
            ? ((n = 'function' == typeof t ? t : lm(+t)), c)
            : n;
        }),
        (c.outerRadius = function(n) {
          return arguments.length
            ? ((t = 'function' == typeof n ? n : lm(+n)), c)
            : t;
        }),
        (c.cornerRadius = function(n) {
          return arguments.length
            ? ((e = 'function' == typeof n ? n : lm(+n)), c)
            : e;
        }),
        (c.padRadius = function(n) {
          return arguments.length
            ? ((r = null == n ? null : 'function' == typeof n ? n : lm(+n)), c)
            : r;
        }),
        (c.startAngle = function(n) {
          return arguments.length
            ? ((i = 'function' == typeof n ? n : lm(+n)), c)
            : i;
        }),
        (c.endAngle = function(n) {
          return arguments.length
            ? ((o = 'function' == typeof n ? n : lm(+n)), c)
            : o;
        }),
        (c.padAngle = function(n) {
          return arguments.length
            ? ((u = 'function' == typeof n ? n : lm(+n)), c)
            : u;
        }),
        (c.context = function(n) {
          return arguments.length ? ((a = null == n ? null : n), c) : a;
        }),
        c
      );
    };
    function km(n) {
      this._context = n;
    }
    km.prototype = {
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
      point: function(n, t) {
        switch (((n = +n), (t = +t), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(n, t)
                : this._context.moveTo(n, t);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(n, t);
        }
      },
    };
    var Um = function(n) {
      return new km(n);
    };
    function Ym(n) {
      return n[0];
    }
    function Om(n) {
      return n[1];
    }
    var Pm = function() {
        var n = Ym,
          t = Om,
          e = lm(!0),
          r = null,
          i = Um,
          o = null;
        function u(u) {
          var a,
            c,
            f,
            s = u.length,
            l = !1;
          for (null == r && (o = i((f = Qr()))), a = 0; a <= s; ++a)
            !(a < s && e((c = u[a]), a, u)) === l &&
              ((l = !l) ? o.lineStart() : o.lineEnd()),
              l && o.point(+n(c, a, u), +t(c, a, u));
          if (f) return (o = null), f + '' || null;
        }
        return (
          (u.x = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : lm(+t)), u)
              : n;
          }),
          (u.y = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : lm(+n)), u)
              : t;
          }),
          (u.defined = function(n) {
            return arguments.length
              ? ((e = 'function' == typeof n ? n : lm(!!n)), u)
              : e;
          }),
          (u.curve = function(n) {
            return arguments.length ? ((i = n), null != r && (o = i(r)), u) : i;
          }),
          (u.context = function(n) {
            return arguments.length
              ? (null == n ? (r = o = null) : (o = i((r = n))), u)
              : r;
          }),
          u
        );
      },
      Dm = function() {
        var n = Ym,
          t = null,
          e = lm(0),
          r = Om,
          i = lm(!0),
          o = null,
          u = Um,
          a = null;
        function c(c) {
          var f,
            s,
            l,
            h,
            d,
            p = c.length,
            v = !1,
            m = new Array(p),
            y = new Array(p);
          for (null == o && (a = u((d = Qr()))), f = 0; f <= p; ++f) {
            if (!(f < p && i((h = c[f]), f, c)) === v)
              if ((v = !v)) (s = f), a.areaStart(), a.lineStart();
              else {
                for (a.lineEnd(), a.lineStart(), l = f - 1; l >= s; --l)
                  a.point(m[l], y[l]);
                a.lineEnd(), a.areaEnd();
              }
            v &&
              ((m[f] = +n(h, f, c)),
              (y[f] = +e(h, f, c)),
              a.point(t ? +t(h, f, c) : m[f], r ? +r(h, f, c) : y[f]));
          }
          if (d) return (a = null), d + '' || null;
        }
        function f() {
          return Pm()
            .defined(i)
            .curve(u)
            .context(o);
        }
        return (
          (c.x = function(e) {
            return arguments.length
              ? ((n = 'function' == typeof e ? e : lm(+e)), (t = null), c)
              : n;
          }),
          (c.x0 = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : lm(+t)), c)
              : n;
          }),
          (c.x1 = function(n) {
            return arguments.length
              ? ((t = null == n ? null : 'function' == typeof n ? n : lm(+n)),
                c)
              : t;
          }),
          (c.y = function(n) {
            return arguments.length
              ? ((e = 'function' == typeof n ? n : lm(+n)), (r = null), c)
              : e;
          }),
          (c.y0 = function(n) {
            return arguments.length
              ? ((e = 'function' == typeof n ? n : lm(+n)), c)
              : e;
          }),
          (c.y1 = function(n) {
            return arguments.length
              ? ((r = null == n ? null : 'function' == typeof n ? n : lm(+n)),
                c)
              : r;
          }),
          (c.lineX0 = c.lineY0 = function() {
            return f()
              .x(n)
              .y(e);
          }),
          (c.lineY1 = function() {
            return f()
              .x(n)
              .y(r);
          }),
          (c.lineX1 = function() {
            return f()
              .x(t)
              .y(e);
          }),
          (c.defined = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : lm(!!n)), c)
              : i;
          }),
          (c.curve = function(n) {
            return arguments.length ? ((u = n), null != o && (a = u(o)), c) : u;
          }),
          (c.context = function(n) {
            return arguments.length
              ? (null == n ? (o = a = null) : (a = u((o = n))), c)
              : o;
          }),
          c
        );
      },
      Im = function(n, t) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      },
      Lm = function(n) {
        return n;
      },
      Bm = function() {
        var n = Lm,
          t = Im,
          e = null,
          r = lm(0),
          i = lm(wm),
          o = lm(0);
        function u(u) {
          var a,
            c,
            f,
            s,
            l,
            h = u.length,
            d = 0,
            p = new Array(h),
            v = new Array(h),
            m = +r.apply(this, arguments),
            y = Math.min(wm, Math.max(-wm, i.apply(this, arguments) - m)),
            g = Math.min(Math.abs(y) / h, o.apply(this, arguments)),
            _ = g * (y < 0 ? -1 : 1);
          for (a = 0; a < h; ++a)
            (l = v[(p[a] = a)] = +n(u[a], a, u)) > 0 && (d += l);
          for (
            null != t
              ? p.sort(function(n, e) {
                  return t(v[n], v[e]);
                })
              : null != e &&
                p.sort(function(n, t) {
                  return e(u[n], u[t]);
                }),
              a = 0,
              f = d ? (y - h * _) / d : 0;
            a < h;
            ++a, m = s
          )
            (c = p[a]),
              (s = m + ((l = v[c]) > 0 ? l * f : 0) + _),
              (v[c] = {
                data: u[c],
                index: a,
                value: l,
                startAngle: m,
                endAngle: s,
                padAngle: g,
              });
          return v;
        }
        return (
          (u.value = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : lm(+t)), u)
              : n;
          }),
          (u.sortValues = function(n) {
            return arguments.length ? ((t = n), (e = null), u) : t;
          }),
          (u.sort = function(n) {
            return arguments.length ? ((e = n), (t = null), u) : e;
          }),
          (u.startAngle = function(n) {
            return arguments.length
              ? ((r = 'function' == typeof n ? n : lm(+n)), u)
              : r;
          }),
          (u.endAngle = function(n) {
            return arguments.length
              ? ((i = 'function' == typeof n ? n : lm(+n)), u)
              : i;
          }),
          (u.padAngle = function(n) {
            return arguments.length
              ? ((o = 'function' == typeof n ? n : lm(+n)), u)
              : o;
          }),
          u
        );
      },
      zm = Fm(Um);
    function qm(n) {
      this._curve = n;
    }
    function Fm(n) {
      function t(t) {
        return new qm(n(t));
      }
      return (t._curve = n), t;
    }
    function jm(n) {
      var t = n.curve;
      return (
        (n.angle = n.x),
        delete n.x,
        (n.radius = n.y),
        delete n.y,
        (n.curve = function(n) {
          return arguments.length ? t(Fm(n)) : t()._curve;
        }),
        n
      );
    }
    qm.prototype = {
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
      point: function(n, t) {
        this._curve.point(t * Math.sin(n), t * -Math.cos(n));
      },
    };
    var Gm = function() {
        return jm(Pm().curve(zm));
      },
      Hm = function() {
        var n = Dm().curve(zm),
          t = n.curve,
          e = n.lineX0,
          r = n.lineX1,
          i = n.lineY0,
          o = n.lineY1;
        return (
          (n.angle = n.x),
          delete n.x,
          (n.startAngle = n.x0),
          delete n.x0,
          (n.endAngle = n.x1),
          delete n.x1,
          (n.radius = n.y),
          delete n.y,
          (n.innerRadius = n.y0),
          delete n.y0,
          (n.outerRadius = n.y1),
          delete n.y1,
          (n.lineStartAngle = function() {
            return jm(e());
          }),
          delete n.lineX0,
          (n.lineEndAngle = function() {
            return jm(r());
          }),
          delete n.lineX1,
          (n.lineInnerRadius = function() {
            return jm(i());
          }),
          delete n.lineY0,
          (n.lineOuterRadius = function() {
            return jm(o());
          }),
          delete n.lineY1,
          (n.curve = function(n) {
            return arguments.length ? t(Fm(n)) : t()._curve;
          }),
          n
        );
      },
      Xm = function(n, t) {
        return [(t = +t) * Math.cos((n -= Math.PI / 2)), t * Math.sin(n)];
      },
      Vm = Array.prototype.slice;
    function Km(n) {
      return n.source;
    }
    function Wm(n) {
      return n.target;
    }
    function Zm(n) {
      var t = Km,
        e = Wm,
        r = Ym,
        i = Om,
        o = null;
      function u() {
        var u,
          a = Vm.call(arguments),
          c = t.apply(this, a),
          f = e.apply(this, a);
        if (
          (o || (o = u = Qr()),
          n(
            o,
            +r.apply(this, ((a[0] = c), a)),
            +i.apply(this, a),
            +r.apply(this, ((a[0] = f), a)),
            +i.apply(this, a)
          ),
          u)
        )
          return (o = null), u + '' || null;
      }
      return (
        (u.source = function(n) {
          return arguments.length ? ((t = n), u) : t;
        }),
        (u.target = function(n) {
          return arguments.length ? ((e = n), u) : e;
        }),
        (u.x = function(n) {
          return arguments.length
            ? ((r = 'function' == typeof n ? n : lm(+n)), u)
            : r;
        }),
        (u.y = function(n) {
          return arguments.length
            ? ((i = 'function' == typeof n ? n : lm(+n)), u)
            : i;
        }),
        (u.context = function(n) {
          return arguments.length ? ((o = null == n ? null : n), u) : o;
        }),
        u
      );
    }
    function $m(n, t, e, r, i) {
      n.moveTo(t, e), n.bezierCurveTo((t = (t + r) / 2), e, t, i, r, i);
    }
    function Qm(n, t, e, r, i) {
      n.moveTo(t, e), n.bezierCurveTo(t, (e = (e + i) / 2), r, e, r, i);
    }
    function Jm(n, t, e, r, i) {
      var o = Xm(t, e),
        u = Xm(t, (e = (e + i) / 2)),
        a = Xm(r, e),
        c = Xm(r, i);
      n.moveTo(o[0], o[1]), n.bezierCurveTo(u[0], u[1], a[0], a[1], c[0], c[1]);
    }
    function ny() {
      return Zm($m);
    }
    function ty() {
      return Zm(Qm);
    }
    function ey() {
      var n = Zm(Jm);
      return (n.angle = n.x), delete n.x, (n.radius = n.y), delete n.y, n;
    }
    var ry = {
        draw: function(n, t) {
          var e = Math.sqrt(t / bm);
          n.moveTo(e, 0), n.arc(0, 0, e, 0, wm);
        },
      },
      iy = {
        draw: function(n, t) {
          var e = Math.sqrt(t / 5) / 2;
          n.moveTo(-3 * e, -e),
            n.lineTo(-e, -e),
            n.lineTo(-e, -3 * e),
            n.lineTo(e, -3 * e),
            n.lineTo(e, -e),
            n.lineTo(3 * e, -e),
            n.lineTo(3 * e, e),
            n.lineTo(e, e),
            n.lineTo(e, 3 * e),
            n.lineTo(-e, 3 * e),
            n.lineTo(-e, e),
            n.lineTo(-3 * e, e),
            n.closePath();
        },
      },
      oy = Math.sqrt(1 / 3),
      uy = 2 * oy,
      ay = {
        draw: function(n, t) {
          var e = Math.sqrt(t / uy),
            r = e * oy;
          n.moveTo(0, -e),
            n.lineTo(r, 0),
            n.lineTo(0, e),
            n.lineTo(-r, 0),
            n.closePath();
        },
      },
      cy = Math.sin(bm / 10) / Math.sin((7 * bm) / 10),
      fy = Math.sin(wm / 10) * cy,
      sy = -Math.cos(wm / 10) * cy,
      ly = {
        draw: function(n, t) {
          var e = Math.sqrt(0.8908130915292852 * t),
            r = fy * e,
            i = sy * e;
          n.moveTo(0, -e), n.lineTo(r, i);
          for (var o = 1; o < 5; ++o) {
            var u = (wm * o) / 5,
              a = Math.cos(u),
              c = Math.sin(u);
            n.lineTo(c * e, -a * e), n.lineTo(a * r - c * i, c * r + a * i);
          }
          n.closePath();
        },
      },
      hy = {
        draw: function(n, t) {
          var e = Math.sqrt(t),
            r = -e / 2;
          n.rect(r, r, e, e);
        },
      },
      dy = Math.sqrt(3),
      py = {
        draw: function(n, t) {
          var e = -Math.sqrt(t / (3 * dy));
          n.moveTo(0, 2 * e),
            n.lineTo(-dy * e, -e),
            n.lineTo(dy * e, -e),
            n.closePath();
        },
      },
      vy = Math.sqrt(3) / 2,
      my = 1 / Math.sqrt(12),
      yy = 3 * (my / 2 + 1),
      gy = {
        draw: function(n, t) {
          var e = Math.sqrt(t / yy),
            r = e / 2,
            i = e * my,
            o = r,
            u = e * my + e,
            a = -o,
            c = u;
          n.moveTo(r, i),
            n.lineTo(o, u),
            n.lineTo(a, c),
            n.lineTo(-0.5 * r - vy * i, vy * r + -0.5 * i),
            n.lineTo(-0.5 * o - vy * u, vy * o + -0.5 * u),
            n.lineTo(-0.5 * a - vy * c, vy * a + -0.5 * c),
            n.lineTo(-0.5 * r + vy * i, -0.5 * i - vy * r),
            n.lineTo(-0.5 * o + vy * u, -0.5 * u - vy * o),
            n.lineTo(-0.5 * a + vy * c, -0.5 * c - vy * a),
            n.closePath();
        },
      },
      _y = [ry, iy, ay, hy, ly, py, gy],
      by = function() {
        var n = lm(ry),
          t = lm(64),
          e = null;
        function r() {
          var r;
          if (
            (e || (e = r = Qr()),
            n.apply(this, arguments).draw(e, +t.apply(this, arguments)),
            r)
          )
            return (e = null), r + '' || null;
        }
        return (
          (r.type = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : lm(t)), r)
              : n;
          }),
          (r.size = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : lm(+n)), r)
              : t;
          }),
          (r.context = function(n) {
            return arguments.length ? ((e = null == n ? null : n), r) : e;
          }),
          r
        );
      },
      xy = function() {};
    function wy(n, t, e) {
      n._context.bezierCurveTo(
        (2 * n._x0 + n._x1) / 3,
        (2 * n._y0 + n._y1) / 3,
        (n._x0 + 2 * n._x1) / 3,
        (n._y0 + 2 * n._y1) / 3,
        (n._x0 + 4 * n._x1 + t) / 6,
        (n._y0 + 4 * n._y1 + e) / 6
      );
    }
    function My(n) {
      this._context = n;
    }
    My.prototype = {
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
            wy(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(n, t) {
        switch (((n = +n), (t = +t), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(n, t)
                : this._context.moveTo(n, t);
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
            wy(this, n, t);
        }
        (this._x0 = this._x1),
          (this._x1 = n),
          (this._y0 = this._y1),
          (this._y1 = t);
      },
    };
    var Ey = function(n) {
      return new My(n);
    };
    function Cy(n) {
      this._context = n;
    }
    Cy.prototype = {
      areaStart: xy,
      areaEnd: xy,
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
      point: function(n, t) {
        switch (((n = +n), (t = +t), this._point)) {
          case 0:
            (this._point = 1), (this._x2 = n), (this._y2 = t);
            break;
          case 1:
            (this._point = 2), (this._x3 = n), (this._y3 = t);
            break;
          case 2:
            (this._point = 3),
              (this._x4 = n),
              (this._y4 = t),
              this._context.moveTo(
                (this._x0 + 4 * this._x1 + n) / 6,
                (this._y0 + 4 * this._y1 + t) / 6
              );
            break;
          default:
            wy(this, n, t);
        }
        (this._x0 = this._x1),
          (this._x1 = n),
          (this._y0 = this._y1),
          (this._y1 = t);
      },
    };
    var Ry = function(n) {
      return new Cy(n);
    };
    function Ny(n) {
      this._context = n;
    }
    Ny.prototype = {
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
      point: function(n, t) {
        switch (((n = +n), (t = +t), this._point)) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var e = (this._x0 + 4 * this._x1 + n) / 6,
              r = (this._y0 + 4 * this._y1 + t) / 6;
            this._line
              ? this._context.lineTo(e, r)
              : this._context.moveTo(e, r);
            break;
          case 3:
            this._point = 4;
          default:
            wy(this, n, t);
        }
        (this._x0 = this._x1),
          (this._x1 = n),
          (this._y0 = this._y1),
          (this._y1 = t);
      },
    };
    var Ay = function(n) {
      return new Ny(n);
    };
    function Ty(n, t) {
      (this._basis = new My(n)), (this._beta = t);
    }
    Ty.prototype = {
      lineStart: function() {
        (this._x = []), (this._y = []), this._basis.lineStart();
      },
      lineEnd: function() {
        var n = this._x,
          t = this._y,
          e = n.length - 1;
        if (e > 0)
          for (
            var r, i = n[0], o = t[0], u = n[e] - i, a = t[e] - o, c = -1;
            ++c <= e;

          )
            (r = c / e),
              this._basis.point(
                this._beta * n[c] + (1 - this._beta) * (i + r * u),
                this._beta * t[c] + (1 - this._beta) * (o + r * a)
              );
        (this._x = this._y = null), this._basis.lineEnd();
      },
      point: function(n, t) {
        this._x.push(+n), this._y.push(+t);
      },
    };
    var Sy = (function n(t) {
      function e(n) {
        return 1 === t ? new My(n) : new Ty(n, t);
      }
      return (
        (e.beta = function(t) {
          return n(+t);
        }),
        e
      );
    })(0.85);
    function ky(n, t, e) {
      n._context.bezierCurveTo(
        n._x1 + n._k * (n._x2 - n._x0),
        n._y1 + n._k * (n._y2 - n._y0),
        n._x2 + n._k * (n._x1 - t),
        n._y2 + n._k * (n._y1 - e),
        n._x2,
        n._y2
      );
    }
    function Uy(n, t) {
      (this._context = n), (this._k = (1 - t) / 6);
    }
    Uy.prototype = {
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
            ky(this, this._x1, this._y1);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(n, t) {
        switch (((n = +n), (t = +t), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(n, t)
                : this._context.moveTo(n, t);
            break;
          case 1:
            (this._point = 2), (this._x1 = n), (this._y1 = t);
            break;
          case 2:
            this._point = 3;
          default:
            ky(this, n, t);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = n),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = t);
      },
    };
    var Yy = (function n(t) {
      function e(n) {
        return new Uy(n, t);
      }
      return (
        (e.tension = function(t) {
          return n(+t);
        }),
        e
      );
    })(0);
    function Oy(n, t) {
      (this._context = n), (this._k = (1 - t) / 6);
    }
    Oy.prototype = {
      areaStart: xy,
      areaEnd: xy,
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
      point: function(n, t) {
        switch (((n = +n), (t = +t), this._point)) {
          case 0:
            (this._point = 1), (this._x3 = n), (this._y3 = t);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = n), (this._y4 = t));
            break;
          case 2:
            (this._point = 3), (this._x5 = n), (this._y5 = t);
            break;
          default:
            ky(this, n, t);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = n),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = t);
      },
    };
    var Py = (function n(t) {
      function e(n) {
        return new Oy(n, t);
      }
      return (
        (e.tension = function(t) {
          return n(+t);
        }),
        e
      );
    })(0);
    function Dy(n, t) {
      (this._context = n), (this._k = (1 - t) / 6);
    }
    Dy.prototype = {
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
      point: function(n, t) {
        switch (((n = +n), (t = +t), this._point)) {
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
            ky(this, n, t);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = n),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = t);
      },
    };
    var Iy = (function n(t) {
      function e(n) {
        return new Dy(n, t);
      }
      return (
        (e.tension = function(t) {
          return n(+t);
        }),
        e
      );
    })(0);
    function Ly(n, t, e) {
      var r = n._x1,
        i = n._y1,
        o = n._x2,
        u = n._y2;
      if (n._l01_a > _m) {
        var a = 2 * n._l01_2a + 3 * n._l01_a * n._l12_a + n._l12_2a,
          c = 3 * n._l01_a * (n._l01_a + n._l12_a);
        (r = (r * a - n._x0 * n._l12_2a + n._x2 * n._l01_2a) / c),
          (i = (i * a - n._y0 * n._l12_2a + n._y2 * n._l01_2a) / c);
      }
      if (n._l23_a > _m) {
        var f = 2 * n._l23_2a + 3 * n._l23_a * n._l12_a + n._l12_2a,
          s = 3 * n._l23_a * (n._l23_a + n._l12_a);
        (o = (o * f + n._x1 * n._l23_2a - t * n._l12_2a) / s),
          (u = (u * f + n._y1 * n._l23_2a - e * n._l12_2a) / s);
      }
      n._context.bezierCurveTo(r, i, o, u, n._x2, n._y2);
    }
    function By(n, t) {
      (this._context = n), (this._alpha = t);
    }
    By.prototype = {
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
      point: function(n, t) {
        if (((n = +n), (t = +t), this._point)) {
          var e = this._x2 - n,
            r = this._y2 - t;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(n, t)
                : this._context.moveTo(n, t);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
          default:
            Ly(this, n, t);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = n),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = t);
      },
    };
    var zy = (function n(t) {
      function e(n) {
        return t ? new By(n, t) : new Uy(n, 0);
      }
      return (
        (e.alpha = function(t) {
          return n(+t);
        }),
        e
      );
    })(0.5);
    function qy(n, t) {
      (this._context = n), (this._alpha = t);
    }
    qy.prototype = {
      areaStart: xy,
      areaEnd: xy,
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
      point: function(n, t) {
        if (((n = +n), (t = +t), this._point)) {
          var e = this._x2 - n,
            r = this._y2 - t;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1), (this._x3 = n), (this._y3 = t);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = n), (this._y4 = t));
            break;
          case 2:
            (this._point = 3), (this._x5 = n), (this._y5 = t);
            break;
          default:
            Ly(this, n, t);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = n),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = t);
      },
    };
    var Fy = (function n(t) {
      function e(n) {
        return t ? new qy(n, t) : new Oy(n, 0);
      }
      return (
        (e.alpha = function(t) {
          return n(+t);
        }),
        e
      );
    })(0.5);
    function jy(n, t) {
      (this._context = n), (this._alpha = t);
    }
    jy.prototype = {
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
      point: function(n, t) {
        if (((n = +n), (t = +t), this._point)) {
          var e = this._x2 - n,
            r = this._y2 - t;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
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
            Ly(this, n, t);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = n),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = t);
      },
    };
    var Gy = (function n(t) {
      function e(n) {
        return t ? new jy(n, t) : new Dy(n, 0);
      }
      return (
        (e.alpha = function(t) {
          return n(+t);
        }),
        e
      );
    })(0.5);
    function Hy(n) {
      this._context = n;
    }
    Hy.prototype = {
      areaStart: xy,
      areaEnd: xy,
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        this._point && this._context.closePath();
      },
      point: function(n, t) {
        (n = +n),
          (t = +t),
          this._point
            ? this._context.lineTo(n, t)
            : ((this._point = 1), this._context.moveTo(n, t));
      },
    };
    var Xy = function(n) {
      return new Hy(n);
    };
    function Vy(n) {
      return n < 0 ? -1 : 1;
    }
    function Ky(n, t, e) {
      var r = n._x1 - n._x0,
        i = t - n._x1,
        o = (n._y1 - n._y0) / (r || (i < 0 && -0)),
        u = (e - n._y1) / (i || (r < 0 && -0)),
        a = (o * i + u * r) / (r + i);
      return (
        (Vy(o) + Vy(u)) *
          Math.min(Math.abs(o), Math.abs(u), 0.5 * Math.abs(a)) || 0
      );
    }
    function Wy(n, t) {
      var e = n._x1 - n._x0;
      return e ? ((3 * (n._y1 - n._y0)) / e - t) / 2 : t;
    }
    function Zy(n, t, e) {
      var r = n._x0,
        i = n._y0,
        o = n._x1,
        u = n._y1,
        a = (o - r) / 3;
      n._context.bezierCurveTo(r + a, i + a * t, o - a, u - a * e, o, u);
    }
    function $y(n) {
      this._context = n;
    }
    function Qy(n) {
      this._context = new Jy(n);
    }
    function Jy(n) {
      this._context = n;
    }
    function ng(n) {
      return new $y(n);
    }
    function tg(n) {
      return new Qy(n);
    }
    function eg(n) {
      this._context = n;
    }
    function rg(n) {
      var t,
        e,
        r = n.length - 1,
        i = new Array(r),
        o = new Array(r),
        u = new Array(r);
      for (i[0] = 0, o[0] = 2, u[0] = n[0] + 2 * n[1], t = 1; t < r - 1; ++t)
        (i[t] = 1), (o[t] = 4), (u[t] = 4 * n[t] + 2 * n[t + 1]);
      for (
        i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * n[r - 1] + n[r], t = 1;
        t < r;
        ++t
      )
        (e = i[t] / o[t - 1]), (o[t] -= e), (u[t] -= e * u[t - 1]);
      for (i[r - 1] = u[r - 1] / o[r - 1], t = r - 2; t >= 0; --t)
        i[t] = (u[t] - i[t + 1]) / o[t];
      for (o[r - 1] = (n[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t)
        o[t] = 2 * n[t + 1] - i[t + 1];
      return [i, o];
    }
    ($y.prototype = {
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
            Zy(this, this._t0, Wy(this, this._t0));
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(n, t) {
        var e = NaN;
        if (((t = +t), (n = +n) !== this._x1 || t !== this._y1)) {
          switch (this._point) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(n, t)
                  : this._context.moveTo(n, t);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3), Zy(this, Wy(this, (e = Ky(this, n, t))), e);
              break;
            default:
              Zy(this, this._t0, (e = Ky(this, n, t)));
          }
          (this._x0 = this._x1),
            (this._x1 = n),
            (this._y0 = this._y1),
            (this._y1 = t),
            (this._t0 = e);
        }
      },
    }),
      ((Qy.prototype = Object.create($y.prototype)).point = function(n, t) {
        $y.prototype.point.call(this, t, n);
      }),
      (Jy.prototype = {
        moveTo: function(n, t) {
          this._context.moveTo(t, n);
        },
        closePath: function() {
          this._context.closePath();
        },
        lineTo: function(n, t) {
          this._context.lineTo(t, n);
        },
        bezierCurveTo: function(n, t, e, r, i, o) {
          this._context.bezierCurveTo(t, n, r, e, o, i);
        },
      }),
      (eg.prototype = {
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
          var n = this._x,
            t = this._y,
            e = n.length;
          if (e)
            if (
              (this._line
                ? this._context.lineTo(n[0], t[0])
                : this._context.moveTo(n[0], t[0]),
              2 === e)
            )
              this._context.lineTo(n[1], t[1]);
            else
              for (var r = rg(n), i = rg(t), o = 0, u = 1; u < e; ++o, ++u)
                this._context.bezierCurveTo(
                  r[0][o],
                  i[0][o],
                  r[1][o],
                  i[1][o],
                  n[u],
                  t[u]
                );
          (this._line || (0 !== this._line && 1 === e)) &&
            this._context.closePath(),
            (this._line = 1 - this._line),
            (this._x = this._y = null);
        },
        point: function(n, t) {
          this._x.push(+n), this._y.push(+t);
        },
      });
    var ig = function(n) {
      return new eg(n);
    };
    function og(n, t) {
      (this._context = n), (this._t = t);
    }
    og.prototype = {
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
      point: function(n, t) {
        switch (((n = +n), (t = +t), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(n, t)
                : this._context.moveTo(n, t);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0)
              this._context.lineTo(this._x, t), this._context.lineTo(n, t);
            else {
              var e = this._x * (1 - this._t) + n * this._t;
              this._context.lineTo(e, this._y), this._context.lineTo(e, t);
            }
        }
        (this._x = n), (this._y = t);
      },
    };
    var ug = function(n) {
      return new og(n, 0.5);
    };
    function ag(n) {
      return new og(n, 0);
    }
    function cg(n) {
      return new og(n, 1);
    }
    var fg = function(n, t) {
        if ((i = n.length) > 1)
          for (var e, r, i, o = 1, u = n[t[0]], a = u.length; o < i; ++o)
            for (r = u, u = n[t[o]], e = 0; e < a; ++e)
              u[e][1] += u[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
      },
      sg = function(n) {
        for (var t = n.length, e = new Array(t); --t >= 0; ) e[t] = t;
        return e;
      };
    function lg(n, t) {
      return n[t];
    }
    var hg = function() {
        var n = lm([]),
          t = sg,
          e = fg,
          r = lg;
        function i(i) {
          var o,
            u,
            a = n.apply(this, arguments),
            c = i.length,
            f = a.length,
            s = new Array(f);
          for (o = 0; o < f; ++o) {
            for (var l, h = a[o], d = (s[o] = new Array(c)), p = 0; p < c; ++p)
              (d[p] = l = [0, +r(i[p], h, p, i)]), (l.data = i[p]);
            d.key = h;
          }
          for (o = 0, u = t(s); o < f; ++o) s[u[o]].index = o;
          return e(s, u), s;
        }
        return (
          (i.keys = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : lm(Vm.call(t))), i)
              : n;
          }),
          (i.value = function(n) {
            return arguments.length
              ? ((r = 'function' == typeof n ? n : lm(+n)), i)
              : r;
          }),
          (i.order = function(n) {
            return arguments.length
              ? ((t =
                  null == n ? sg : 'function' == typeof n ? n : lm(Vm.call(n))),
                i)
              : t;
          }),
          (i.offset = function(n) {
            return arguments.length ? ((e = null == n ? fg : n), i) : e;
          }),
          i
        );
      },
      dg = function(n, t) {
        if ((r = n.length) > 0) {
          for (var e, r, i, o = 0, u = n[0].length; o < u; ++o) {
            for (i = e = 0; e < r; ++e) i += n[e][o][1] || 0;
            if (i) for (e = 0; e < r; ++e) n[e][o][1] /= i;
          }
          fg(n, t);
        }
      },
      pg = function(n, t) {
        if ((a = n.length) > 0)
          for (var e, r, i, o, u, a, c = 0, f = n[t[0]].length; c < f; ++c)
            for (o = u = 0, e = 0; e < a; ++e)
              (i = (r = n[t[e]][c])[1] - r[0]) >= 0
                ? ((r[0] = o), (r[1] = o += i))
                : i < 0
                ? ((r[1] = u), (r[0] = u += i))
                : (r[0] = o);
      },
      vg = function(n, t) {
        if ((e = n.length) > 0) {
          for (var e, r = 0, i = n[t[0]], o = i.length; r < o; ++r) {
            for (var u = 0, a = 0; u < e; ++u) a += n[u][r][1] || 0;
            i[r][1] += i[r][0] = -a / 2;
          }
          fg(n, t);
        }
      },
      mg = function(n, t) {
        if ((i = n.length) > 0 && (r = (e = n[t[0]]).length) > 0) {
          for (var e, r, i, o = 0, u = 1; u < r; ++u) {
            for (var a = 0, c = 0, f = 0; a < i; ++a) {
              for (
                var s = n[t[a]],
                  l = s[u][1] || 0,
                  h = (l - (s[u - 1][1] || 0)) / 2,
                  d = 0;
                d < a;
                ++d
              ) {
                var p = n[t[d]];
                h += (p[u][1] || 0) - (p[u - 1][1] || 0);
              }
              (c += l), (f += h * l);
            }
            (e[u - 1][1] += e[u - 1][0] = o), c && (o -= f / c);
          }
          (e[u - 1][1] += e[u - 1][0] = o), fg(n, t);
        }
      },
      yg = function(n) {
        var t = n.map(gg);
        return sg(n).sort(function(n, e) {
          return t[n] - t[e];
        });
      };
    function gg(n) {
      for (var t, e = -1, r = 0, i = n.length, o = -1 / 0; ++e < i; )
        (t = +n[e][1]) > o && ((o = t), (r = e));
      return r;
    }
    var _g = function(n) {
      var t = n.map(bg);
      return sg(n).sort(function(n, e) {
        return t[n] - t[e];
      });
    };
    function bg(n) {
      for (var t, e = 0, r = -1, i = n.length; ++r < i; )
        (t = +n[r][1]) && (e += t);
      return e;
    }
    var xg = function(n) {
        return _g(n).reverse();
      },
      wg = function(n) {
        var t,
          e,
          r = n.length,
          i = n.map(bg),
          o = yg(n),
          u = 0,
          a = 0,
          c = [],
          f = [];
        for (t = 0; t < r; ++t)
          (e = o[t]),
            u < a ? ((u += i[e]), c.push(e)) : ((a += i[e]), f.push(e));
        return f.reverse().concat(c);
      },
      Mg = function(n) {
        return sg(n).reverse();
      },
      Eg = function(n) {
        return function() {
          return n;
        };
      };
    function Cg(n) {
      return n[0];
    }
    function Rg(n) {
      return n[1];
    }
    function Ng() {
      this._ = null;
    }
    function Ag(n) {
      n.U = n.C = n.L = n.R = n.P = n.N = null;
    }
    function Tg(n, t) {
      var e = t,
        r = t.R,
        i = e.U;
      i ? (i.L === e ? (i.L = r) : (i.R = r)) : (n._ = r),
        (r.U = i),
        (e.U = r),
        (e.R = r.L),
        e.R && (e.R.U = e),
        (r.L = e);
    }
    function Sg(n, t) {
      var e = t,
        r = t.L,
        i = e.U;
      i ? (i.L === e ? (i.L = r) : (i.R = r)) : (n._ = r),
        (r.U = i),
        (e.U = r),
        (e.L = r.R),
        e.L && (e.L.U = e),
        (r.R = e);
    }
    function kg(n) {
      for (; n.L; ) n = n.L;
      return n;
    }
    Ng.prototype = {
      constructor: Ng,
      insert: function(n, t) {
        var e, r, i;
        if (n) {
          if (((t.P = n), (t.N = n.N), n.N && (n.N.P = t), (n.N = t), n.R)) {
            for (n = n.R; n.L; ) n = n.L;
            n.L = t;
          } else n.R = t;
          e = n;
        } else
          this._
            ? ((n = kg(this._)),
              (t.P = null),
              (t.N = n),
              (n.P = n.L = t),
              (e = n))
            : ((t.P = t.N = null), (this._ = t), (e = null));
        for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C; )
          e === (r = e.U).L
            ? (i = r.R) && i.C
              ? ((e.C = i.C = !1), (r.C = !0), (n = r))
              : (n === e.R && (Tg(this, e), (e = (n = e).U)),
                (e.C = !1),
                (r.C = !0),
                Sg(this, r))
            : (i = r.L) && i.C
            ? ((e.C = i.C = !1), (r.C = !0), (n = r))
            : (n === e.L && (Sg(this, e), (e = (n = e).U)),
              (e.C = !1),
              (r.C = !0),
              Tg(this, r)),
            (e = n.U);
        this._.C = !1;
      },
      remove: function(n) {
        n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), (n.N = n.P = null);
        var t,
          e,
          r,
          i = n.U,
          o = n.L,
          u = n.R;
        if (
          ((e = o ? (u ? kg(u) : o) : u),
          i ? (i.L === n ? (i.L = e) : (i.R = e)) : (this._ = e),
          o && u
            ? ((r = e.C),
              (e.C = n.C),
              (e.L = o),
              (o.U = e),
              e !== u
                ? ((i = e.U),
                  (e.U = n.U),
                  (n = e.R),
                  (i.L = n),
                  (e.R = u),
                  (u.U = e))
                : ((e.U = i), (i = e), (n = e.R)))
            : ((r = n.C), (n = e)),
          n && (n.U = i),
          !r)
        )
          if (n && n.C) n.C = !1;
          else {
            do {
              if (n === this._) break;
              if (n === i.L) {
                if (
                  ((t = i.R).C &&
                    ((t.C = !1), (i.C = !0), Tg(this, i), (t = i.R)),
                  (t.L && t.L.C) || (t.R && t.R.C))
                ) {
                  (t.R && t.R.C) ||
                    ((t.L.C = !1), (t.C = !0), Sg(this, t), (t = i.R)),
                    (t.C = i.C),
                    (i.C = t.R.C = !1),
                    Tg(this, i),
                    (n = this._);
                  break;
                }
              } else if (
                ((t = i.L).C &&
                  ((t.C = !1), (i.C = !0), Sg(this, i), (t = i.L)),
                (t.L && t.L.C) || (t.R && t.R.C))
              ) {
                (t.L && t.L.C) ||
                  ((t.R.C = !1), (t.C = !0), Tg(this, t), (t = i.L)),
                  (t.C = i.C),
                  (i.C = t.L.C = !1),
                  Sg(this, i),
                  (n = this._);
                break;
              }
              (t.C = !0), (n = i), (i = i.U);
            } while (!n.C);
            n && (n.C = !1);
          }
      },
    };
    var Ug = Ng;
    function Yg(n, t, e, r) {
      var i = [null, null],
        o = r_.push(i) - 1;
      return (
        (i.left = n),
        (i.right = t),
        e && Pg(i, n, t, e),
        r && Pg(i, t, n, r),
        t_[n.index].halfedges.push(o),
        t_[t.index].halfedges.push(o),
        i
      );
    }
    function Og(n, t, e) {
      var r = [t, e];
      return (r.left = n), r;
    }
    function Pg(n, t, e, r) {
      n[0] || n[1]
        ? n.left === e
          ? (n[1] = r)
          : (n[0] = r)
        : ((n[0] = r), (n.left = t), (n.right = e));
    }
    function Dg(n, t, e, r, i) {
      var o,
        u = n[0],
        a = n[1],
        c = u[0],
        f = u[1],
        s = 0,
        l = 1,
        h = a[0] - c,
        d = a[1] - f;
      if (((o = t - c), h || !(o > 0))) {
        if (((o /= h), h < 0)) {
          if (o < s) return;
          o < l && (l = o);
        } else if (h > 0) {
          if (o > l) return;
          o > s && (s = o);
        }
        if (((o = r - c), h || !(o < 0))) {
          if (((o /= h), h < 0)) {
            if (o > l) return;
            o > s && (s = o);
          } else if (h > 0) {
            if (o < s) return;
            o < l && (l = o);
          }
          if (((o = e - f), d || !(o > 0))) {
            if (((o /= d), d < 0)) {
              if (o < s) return;
              o < l && (l = o);
            } else if (d > 0) {
              if (o > l) return;
              o > s && (s = o);
            }
            if (((o = i - f), d || !(o < 0))) {
              if (((o /= d), d < 0)) {
                if (o > l) return;
                o > s && (s = o);
              } else if (d > 0) {
                if (o < s) return;
                o < l && (l = o);
              }
              return (
                !(s > 0 || l < 1) ||
                (s > 0 && (n[0] = [c + s * h, f + s * d]),
                l < 1 && (n[1] = [c + l * h, f + l * d]),
                !0)
              );
            }
          }
        }
      }
    }
    function Ig(n, t, e, r, i) {
      var o = n[1];
      if (o) return !0;
      var u,
        a,
        c = n[0],
        f = n.left,
        s = n.right,
        l = f[0],
        h = f[1],
        d = s[0],
        p = s[1],
        v = (l + d) / 2,
        m = (h + p) / 2;
      if (p === h) {
        if (v < t || v >= r) return;
        if (l > d) {
          if (c) {
            if (c[1] >= i) return;
          } else c = [v, e];
          o = [v, i];
        } else {
          if (c) {
            if (c[1] < e) return;
          } else c = [v, i];
          o = [v, e];
        }
      } else if (((a = m - (u = (l - d) / (p - h)) * v), u < -1 || u > 1))
        if (l > d) {
          if (c) {
            if (c[1] >= i) return;
          } else c = [(e - a) / u, e];
          o = [(i - a) / u, i];
        } else {
          if (c) {
            if (c[1] < e) return;
          } else c = [(i - a) / u, i];
          o = [(e - a) / u, e];
        }
      else if (h < p) {
        if (c) {
          if (c[0] >= r) return;
        } else c = [t, u * t + a];
        o = [r, u * r + a];
      } else {
        if (c) {
          if (c[0] < t) return;
        } else c = [r, u * r + a];
        o = [t, u * t + a];
      }
      return (n[0] = c), (n[1] = o), !0;
    }
    function Lg(n, t) {
      var e = n.site,
        r = t.left,
        i = t.right;
      return (
        e === i && ((i = r), (r = e)),
        i
          ? Math.atan2(i[1] - r[1], i[0] - r[0])
          : (e === r ? ((r = t[1]), (i = t[0])) : ((r = t[0]), (i = t[1])),
            Math.atan2(r[0] - i[0], i[1] - r[1]))
      );
    }
    function Bg(n, t) {
      return t[+(t.left !== n.site)];
    }
    function zg(n, t) {
      return t[+(t.left === n.site)];
    }
    var qg,
      Fg = [];
    function jg() {
      Ag(this), (this.x = this.y = this.arc = this.site = this.cy = null);
    }
    function Gg(n) {
      var t = n.P,
        e = n.N;
      if (t && e) {
        var r = t.site,
          i = n.site,
          o = e.site;
        if (r !== o) {
          var u = i[0],
            a = i[1],
            c = r[0] - u,
            f = r[1] - a,
            s = o[0] - u,
            l = o[1] - a,
            h = 2 * (c * l - f * s);
          if (!(h >= -o_)) {
            var d = c * c + f * f,
              p = s * s + l * l,
              v = (l * d - f * p) / h,
              m = (c * p - s * d) / h,
              y = Fg.pop() || new jg();
            (y.arc = n),
              (y.site = i),
              (y.x = v + u),
              (y.y = (y.cy = m + a) + Math.sqrt(v * v + m * m)),
              (n.circle = y);
            for (var g = null, _ = e_._; _; )
              if (y.y < _.y || (y.y === _.y && y.x <= _.x)) {
                if (!_.L) {
                  g = _.P;
                  break;
                }
                _ = _.L;
              } else {
                if (!_.R) {
                  g = _;
                  break;
                }
                _ = _.R;
              }
            e_.insert(g, y), g || (qg = y);
          }
        }
      }
    }
    function Hg(n) {
      var t = n.circle;
      t &&
        (t.P || (qg = t.N), e_.remove(t), Fg.push(t), Ag(t), (n.circle = null));
    }
    var Xg = [];
    function Vg() {
      Ag(this), (this.edge = this.site = this.circle = null);
    }
    function Kg(n) {
      var t = Xg.pop() || new Vg();
      return (t.site = n), t;
    }
    function Wg(n) {
      Hg(n), n_.remove(n), Xg.push(n), Ag(n);
    }
    function Zg(n) {
      var t = n.circle,
        e = t.x,
        r = t.cy,
        i = [e, r],
        o = n.P,
        u = n.N,
        a = [n];
      Wg(n);
      for (
        var c = o;
        c.circle &&
        Math.abs(e - c.circle.x) < i_ &&
        Math.abs(r - c.circle.cy) < i_;

      )
        (o = c.P), a.unshift(c), Wg(c), (c = o);
      a.unshift(c), Hg(c);
      for (
        var f = u;
        f.circle &&
        Math.abs(e - f.circle.x) < i_ &&
        Math.abs(r - f.circle.cy) < i_;

      )
        (u = f.N), a.push(f), Wg(f), (f = u);
      a.push(f), Hg(f);
      var s,
        l = a.length;
      for (s = 1; s < l; ++s)
        (f = a[s]), (c = a[s - 1]), Pg(f.edge, c.site, f.site, i);
      (c = a[0]),
        ((f = a[l - 1]).edge = Yg(c.site, f.site, null, i)),
        Gg(c),
        Gg(f);
    }
    function $g(n) {
      for (var t, e, r, i, o = n[0], u = n[1], a = n_._; a; )
        if ((r = Qg(a, u) - o) > i_) a = a.L;
        else {
          if (!((i = o - Jg(a, u)) > i_)) {
            r > -i_
              ? ((t = a.P), (e = a))
              : i > -i_
              ? ((t = a), (e = a.N))
              : (t = e = a);
            break;
          }
          if (!a.R) {
            t = a;
            break;
          }
          a = a.R;
        }
      !(function(n) {
        t_[n.index] = {site: n, halfedges: []};
      })(n);
      var c = Kg(n);
      if ((n_.insert(t, c), t || e)) {
        if (t === e)
          return (
            Hg(t),
            (e = Kg(t.site)),
            n_.insert(c, e),
            (c.edge = e.edge = Yg(t.site, c.site)),
            Gg(t),
            void Gg(e)
          );
        if (e) {
          Hg(t), Hg(e);
          var f = t.site,
            s = f[0],
            l = f[1],
            h = n[0] - s,
            d = n[1] - l,
            p = e.site,
            v = p[0] - s,
            m = p[1] - l,
            y = 2 * (h * m - d * v),
            g = h * h + d * d,
            _ = v * v + m * m,
            b = [(m * g - d * _) / y + s, (h * _ - v * g) / y + l];
          Pg(e.edge, f, p, b),
            (c.edge = Yg(f, n, null, b)),
            (e.edge = Yg(n, p, null, b)),
            Gg(t),
            Gg(e);
        } else c.edge = Yg(t.site, c.site);
      }
    }
    function Qg(n, t) {
      var e = n.site,
        r = e[0],
        i = e[1],
        o = i - t;
      if (!o) return r;
      var u = n.P;
      if (!u) return -1 / 0;
      var a = (e = u.site)[0],
        c = e[1],
        f = c - t;
      if (!f) return a;
      var s = a - r,
        l = 1 / o - 1 / f,
        h = s / f;
      return l
        ? (-h +
            Math.sqrt(
              h * h - 2 * l * ((s * s) / (-2 * f) - c + f / 2 + i - o / 2)
            )) /
            l +
            r
        : (r + a) / 2;
    }
    function Jg(n, t) {
      var e = n.N;
      if (e) return Qg(e, t);
      var r = n.site;
      return r[1] === t ? r[0] : 1 / 0;
    }
    var n_,
      t_,
      e_,
      r_,
      i_ = 1e-6,
      o_ = 1e-12;
    function u_(n, t) {
      return t[1] - n[1] || t[0] - n[0];
    }
    function a_(n, t) {
      var e,
        r,
        i,
        o = n.sort(u_).pop();
      for (r_ = [], t_ = new Array(n.length), n_ = new Ug(), e_ = new Ug(); ; )
        if (((i = qg), o && (!i || o[1] < i.y || (o[1] === i.y && o[0] < i.x))))
          (o[0] === e && o[1] === r) || ($g(o), (e = o[0]), (r = o[1])),
            (o = n.pop());
        else {
          if (!i) break;
          Zg(i.arc);
        }
      if (
        ((function() {
          for (var n, t, e, r, i = 0, o = t_.length; i < o; ++i)
            if ((n = t_[i]) && (r = (t = n.halfedges).length)) {
              var u = new Array(r),
                a = new Array(r);
              for (e = 0; e < r; ++e) (u[e] = e), (a[e] = Lg(n, r_[t[e]]));
              for (
                u.sort(function(n, t) {
                  return a[t] - a[n];
                }),
                  e = 0;
                e < r;
                ++e
              )
                a[e] = t[u[e]];
              for (e = 0; e < r; ++e) t[e] = a[e];
            }
        })(),
        t)
      ) {
        var u = +t[0][0],
          a = +t[0][1],
          c = +t[1][0],
          f = +t[1][1];
        !(function(n, t, e, r) {
          for (var i, o = r_.length; o--; )
            (Ig((i = r_[o]), n, t, e, r) &&
              Dg(i, n, t, e, r) &&
              (Math.abs(i[0][0] - i[1][0]) > i_ ||
                Math.abs(i[0][1] - i[1][1]) > i_)) ||
              delete r_[o];
        })(u, a, c, f),
          (function(n, t, e, r) {
            var i,
              o,
              u,
              a,
              c,
              f,
              s,
              l,
              h,
              d,
              p,
              v,
              m = t_.length,
              y = !0;
            for (i = 0; i < m; ++i)
              if ((o = t_[i])) {
                for (u = o.site, a = (c = o.halfedges).length; a--; )
                  r_[c[a]] || c.splice(a, 1);
                for (a = 0, f = c.length; a < f; )
                  (p = (d = zg(o, r_[c[a]]))[0]),
                    (v = d[1]),
                    (l = (s = Bg(o, r_[c[++a % f]]))[0]),
                    (h = s[1]),
                    (Math.abs(p - l) > i_ || Math.abs(v - h) > i_) &&
                      (c.splice(
                        a,
                        0,
                        r_.push(
                          Og(
                            u,
                            d,
                            Math.abs(p - n) < i_ && r - v > i_
                              ? [n, Math.abs(l - n) < i_ ? h : r]
                              : Math.abs(v - r) < i_ && e - p > i_
                              ? [Math.abs(h - r) < i_ ? l : e, r]
                              : Math.abs(p - e) < i_ && v - t > i_
                              ? [e, Math.abs(l - e) < i_ ? h : t]
                              : Math.abs(v - t) < i_ && p - n > i_
                              ? [Math.abs(h - t) < i_ ? l : n, t]
                              : null
                          )
                        ) - 1
                      ),
                      ++f);
                f && (y = !1);
              }
            if (y) {
              var g,
                _,
                b,
                x = 1 / 0;
              for (i = 0, y = null; i < m; ++i)
                (o = t_[i]) &&
                  (b = (g = (u = o.site)[0] - n) * g + (_ = u[1] - t) * _) <
                    x &&
                  ((x = b), (y = o));
              if (y) {
                var w = [n, t],
                  M = [n, r],
                  E = [e, r],
                  C = [e, t];
                y.halfedges.push(
                  r_.push(Og((u = y.site), w, M)) - 1,
                  r_.push(Og(u, M, E)) - 1,
                  r_.push(Og(u, E, C)) - 1,
                  r_.push(Og(u, C, w)) - 1
                );
              }
            }
            for (i = 0; i < m; ++i)
              (o = t_[i]) && (o.halfedges.length || delete t_[i]);
          })(u, a, c, f);
      }
      (this.edges = r_), (this.cells = t_), (n_ = e_ = r_ = t_ = null);
    }
    a_.prototype = {
      constructor: a_,
      polygons: function() {
        var n = this.edges;
        return this.cells.map(function(t) {
          var e = t.halfedges.map(function(e) {
            return Bg(t, n[e]);
          });
          return (e.data = t.site.data), e;
        });
      },
      triangles: function() {
        var n = [],
          t = this.edges;
        return (
          this.cells.forEach(function(e, r) {
            if ((o = (i = e.halfedges).length))
              for (
                var i,
                  o,
                  u,
                  a,
                  c,
                  f,
                  s = e.site,
                  l = -1,
                  h = t[i[o - 1]],
                  d = h.left === s ? h.right : h.left;
                ++l < o;

              )
                (u = d),
                  (d = (h = t[i[l]]).left === s ? h.right : h.left),
                  u &&
                    d &&
                    r < u.index &&
                    r < d.index &&
                    ((c = u),
                    (f = d),
                    ((a = s)[0] - f[0]) * (c[1] - a[1]) -
                      (a[0] - c[0]) * (f[1] - a[1]) <
                      0) &&
                    n.push([s.data, u.data, d.data]);
          }),
          n
        );
      },
      links: function() {
        return this.edges
          .filter(function(n) {
            return n.right;
          })
          .map(function(n) {
            return {source: n.left.data, target: n.right.data};
          });
      },
      find: function(n, t, e) {
        for (
          var r, i, o = this, u = o._found || 0, a = o.cells.length;
          !(i = o.cells[u]);

        )
          if (++u >= a) return null;
        var c = n - i.site[0],
          f = t - i.site[1],
          s = c * c + f * f;
        do {
          (i = o.cells[(r = u)]),
            (u = null),
            i.halfedges.forEach(function(e) {
              var r = o.edges[e],
                a = r.left;
              if ((a !== i.site && a) || (a = r.right)) {
                var c = n - a[0],
                  f = t - a[1],
                  l = c * c + f * f;
                l < s && ((s = l), (u = a.index));
              }
            });
        } while (null !== u);
        return (o._found = r), null == e || s <= e * e ? i.site : null;
      },
    };
    var c_ = function() {
        var n = Cg,
          t = Rg,
          e = null;
        function r(r) {
          return new a_(
            r.map(function(e, i) {
              var o = [
                Math.round(n(e, i, r) / i_) * i_,
                Math.round(t(e, i, r) / i_) * i_,
              ];
              return (o.index = i), (o.data = e), o;
            }),
            e
          );
        }
        return (
          (r.polygons = function(n) {
            return r(n).polygons();
          }),
          (r.links = function(n) {
            return r(n).links();
          }),
          (r.triangles = function(n) {
            return r(n).triangles();
          }),
          (r.x = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : Eg(+t)), r)
              : n;
          }),
          (r.y = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : Eg(+n)), r)
              : t;
          }),
          (r.extent = function(n) {
            return arguments.length
              ? ((e =
                  null == n
                    ? null
                    : [[+n[0][0], +n[0][1]], [+n[1][0], +n[1][1]]]),
                r)
              : e && [[e[0][0], e[0][1]], [e[1][0], e[1][1]]];
          }),
          (r.size = function(n) {
            return arguments.length
              ? ((e = null == n ? null : [[0, 0], [+n[0], +n[1]]]), r)
              : e && [e[1][0] - e[0][0], e[1][1] - e[0][1]];
          }),
          r
        );
      },
      f_ = function(n) {
        return function() {
          return n;
        };
      };
    function s_(n, t, e) {
      (this.target = n), (this.type = t), (this.transform = e);
    }
    function l_(n, t, e) {
      (this.k = n), (this.x = t), (this.y = e);
    }
    l_.prototype = {
      constructor: l_,
      scale: function(n) {
        return 1 === n ? this : new l_(this.k * n, this.x, this.y);
      },
      translate: function(n, t) {
        return (0 === n) & (0 === t)
          ? this
          : new l_(this.k, this.x + this.k * n, this.y + this.k * t);
      },
      apply: function(n) {
        return [n[0] * this.k + this.x, n[1] * this.k + this.y];
      },
      applyX: function(n) {
        return n * this.k + this.x;
      },
      applyY: function(n) {
        return n * this.k + this.y;
      },
      invert: function(n) {
        return [(n[0] - this.x) / this.k, (n[1] - this.y) / this.k];
      },
      invertX: function(n) {
        return (n - this.x) / this.k;
      },
      invertY: function(n) {
        return (n - this.y) / this.k;
      },
      rescaleX: function(n) {
        return n.copy().domain(
          n
            .range()
            .map(this.invertX, this)
            .map(n.invert, n)
        );
      },
      rescaleY: function(n) {
        return n.copy().domain(
          n
            .range()
            .map(this.invertY, this)
            .map(n.invert, n)
        );
      },
      toString: function() {
        return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
      },
    };
    var h_ = new l_(1, 0, 0);
    function d_(n) {
      return n.__zoom || h_;
    }
    function p_() {
      Hn.stopImmediatePropagation();
    }
    d_.prototype = l_.prototype;
    var v_ = function() {
      Hn.preventDefault(), Hn.stopImmediatePropagation();
    };
    function m_() {
      return !Hn.button;
    }
    function y_() {
      var n,
        t,
        e = this;
      return (
        e instanceof SVGElement
          ? ((n = (e = e.ownerSVGElement || e).width.baseVal.value),
            (t = e.height.baseVal.value))
          : ((n = e.clientWidth), (t = e.clientHeight)),
        [[0, 0], [n, t]]
      );
    }
    function g_() {
      return this.__zoom || h_;
    }
    function __() {
      return (-Hn.deltaY * (Hn.deltaMode ? 120 : 1)) / 500;
    }
    function b_() {
      return 'ontouchstart' in this;
    }
    function x_(n, t, e) {
      var r = n.invertX(t[0][0]) - e[0][0],
        i = n.invertX(t[1][0]) - e[1][0],
        o = n.invertY(t[0][1]) - e[0][1],
        u = n.invertY(t[1][1]) - e[1][1];
      return n.translate(
        i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
        u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u)
      );
    }
    var w_ = function() {
      var n,
        t,
        e = m_,
        r = y_,
        i = x_,
        o = __,
        u = b_,
        a = [0, 1 / 0],
        c = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
        f = 250,
        s = Rt.x,
        l = [],
        h = dn('start', 'zoom', 'end'),
        d = 500,
        p = 150,
        v = 0;
      function m(n) {
        n.property('__zoom', g_)
          .on('wheel.zoom', M)
          .on('mousedown.zoom', E)
          .on('dblclick.zoom', C)
          .filter(u)
          .on('touchstart.zoom', R)
          .on('touchmove.zoom', N)
          .on('touchend.zoom touchcancel.zoom', A)
          .style('touch-action', 'none')
          .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
      }
      function y(n, t) {
        return (t = Math.max(a[0], Math.min(a[1], t))) === n.k
          ? n
          : new l_(t, n.x, n.y);
      }
      function g(n, t, e) {
        var r = t[0] - e[0] * n.k,
          i = t[1] - e[1] * n.k;
        return r === n.x && i === n.y ? n : new l_(n.k, r, i);
      }
      function _(n) {
        return [(+n[0][0] + +n[1][0]) / 2, (+n[0][1] + +n[1][1]) / 2];
      }
      function b(n, t, e) {
        n.on('start.zoom', function() {
          x(this, arguments).start();
        })
          .on('interrupt.zoom end.zoom', function() {
            x(this, arguments).end();
          })
          .tween('zoom', function() {
            var n = arguments,
              i = x(this, n),
              o = r.apply(this, n),
              u = e || _(o),
              a = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1]),
              c = this.__zoom,
              f = 'function' == typeof t ? t.apply(this, n) : t,
              l = s(c.invert(u).concat(a / c.k), f.invert(u).concat(a / f.k));
            return function(n) {
              if (1 === n) n = f;
              else {
                var t = l(n),
                  e = a / t[2];
                n = new l_(e, u[0] - t[0] * e, u[1] - t[1] * e);
              }
              i.zoom(null, n);
            };
          });
      }
      function x(n, t) {
        for (var e, r = 0, i = l.length; r < i; ++r)
          if ((e = l[r]).that === n) return e;
        return new w(n, t);
      }
      function w(n, t) {
        (this.that = n),
          (this.args = t),
          (this.index = -1),
          (this.active = 0),
          (this.extent = r.apply(n, t));
      }
      function M() {
        if (e.apply(this, arguments)) {
          var n = x(this, arguments),
            t = this.__zoom,
            r = Math.max(
              a[0],
              Math.min(a[1], t.k * Math.pow(2, o.apply(this, arguments)))
            ),
            u = ft(this);
          if (n.wheel)
            (n.mouse[0][0] === u[0] && n.mouse[0][1] === u[1]) ||
              (n.mouse[1] = t.invert((n.mouse[0] = u))),
              clearTimeout(n.wheel);
          else {
            if (t.k === r) return;
            (n.mouse = [u, t.invert(u)]), oe(this), n.start();
          }
          v_(),
            (n.wheel = setTimeout(function() {
              (n.wheel = null), n.end();
            }, p)),
            n.zoom('mouse', i(g(y(t, r), n.mouse[0], n.mouse[1]), n.extent, c));
        }
      }
      function E() {
        if (!t && e.apply(this, arguments)) {
          var n = x(this, arguments),
            r = et(Hn.view)
              .on(
                'mousemove.zoom',
                function() {
                  if ((v_(), !n.moved)) {
                    var t = Hn.clientX - u,
                      e = Hn.clientY - a;
                    n.moved = t * t + e * e > v;
                  }
                  n.zoom(
                    'mouse',
                    i(
                      g(n.that.__zoom, (n.mouse[0] = ft(n.that)), n.mouse[1]),
                      n.extent,
                      c
                    )
                  );
                },
                !0
              )
              .on(
                'mouseup.zoom',
                function() {
                  r.on('mousemove.zoom mouseup.zoom', null),
                    mt(Hn.view, n.moved),
                    v_(),
                    n.end();
                },
                !0
              ),
            o = ft(this),
            u = Hn.clientX,
            a = Hn.clientY;
          vt(Hn.view),
            p_(),
            (n.mouse = [o, this.__zoom.invert(o)]),
            oe(this),
            n.start();
        }
      }
      function C() {
        if (e.apply(this, arguments)) {
          var n = this.__zoom,
            t = ft(this),
            o = n.invert(t),
            u = n.k * (Hn.shiftKey ? 0.5 : 2),
            a = i(g(y(n, u), t, o), r.apply(this, arguments), c);
          v_(),
            f > 0
              ? et(this)
                  .transition()
                  .duration(f)
                  .call(b, a, t)
              : et(this).call(m.transform, a);
        }
      }
      function R() {
        if (e.apply(this, arguments)) {
          var t,
            r,
            i,
            o,
            u = x(this, arguments),
            a = Hn.changedTouches,
            c = a.length;
          for (p_(), r = 0; r < c; ++r)
            (i = a[r]),
              (o = [
                (o = lt(this, a, i.identifier)),
                this.__zoom.invert(o),
                i.identifier,
              ]),
              u.touch0
                ? u.touch1 || (u.touch1 = o)
                : ((u.touch0 = o), (t = !0));
          if (n && ((n = clearTimeout(n)), !u.touch1))
            return (
              u.end(),
              void (
                (o = et(this).on('dblclick.zoom')) && o.apply(this, arguments)
              )
            );
          t &&
            ((n = setTimeout(function() {
              n = null;
            }, d)),
            oe(this),
            u.start());
        }
      }
      function N() {
        var t,
          e,
          r,
          o,
          u = x(this, arguments),
          a = Hn.changedTouches,
          f = a.length;
        for (v_(), n && (n = clearTimeout(n)), t = 0; t < f; ++t)
          (e = a[t]),
            (r = lt(this, a, e.identifier)),
            u.touch0 && u.touch0[2] === e.identifier
              ? (u.touch0[0] = r)
              : u.touch1 && u.touch1[2] === e.identifier && (u.touch1[0] = r);
        if (((e = u.that.__zoom), u.touch1)) {
          var s = u.touch0[0],
            l = u.touch0[1],
            h = u.touch1[0],
            d = u.touch1[1],
            p = (p = h[0] - s[0]) * p + (p = h[1] - s[1]) * p,
            v = (v = d[0] - l[0]) * v + (v = d[1] - l[1]) * v;
          (e = y(e, Math.sqrt(p / v))),
            (r = [(s[0] + h[0]) / 2, (s[1] + h[1]) / 2]),
            (o = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2]);
        } else {
          if (!u.touch0) return;
          (r = u.touch0[0]), (o = u.touch0[1]);
        }
        u.zoom('touch', i(g(e, r, o), u.extent, c));
      }
      function A() {
        var n,
          e,
          r = x(this, arguments),
          i = Hn.changedTouches,
          o = i.length;
        for (
          p_(),
            t && clearTimeout(t),
            t = setTimeout(function() {
              t = null;
            }, d),
            n = 0;
          n < o;
          ++n
        )
          (e = i[n]),
            r.touch0 && r.touch0[2] === e.identifier
              ? delete r.touch0
              : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
        r.touch1 && !r.touch0 && ((r.touch0 = r.touch1), delete r.touch1),
          r.touch0 ? (r.touch0[1] = this.__zoom.invert(r.touch0[0])) : r.end();
      }
      return (
        (m.transform = function(n, t) {
          var e = n.selection ? n.selection() : n;
          e.property('__zoom', g_),
            n !== e
              ? b(n, t)
              : e.interrupt().each(function() {
                  x(this, arguments)
                    .start()
                    .zoom(
                      null,
                      'function' == typeof t ? t.apply(this, arguments) : t
                    )
                    .end();
                });
        }),
        (m.scaleBy = function(n, t) {
          m.scaleTo(n, function() {
            return (
              this.__zoom.k *
              ('function' == typeof t ? t.apply(this, arguments) : t)
            );
          });
        }),
        (m.scaleTo = function(n, t) {
          m.transform(n, function() {
            var n = r.apply(this, arguments),
              e = this.__zoom,
              o = _(n),
              u = e.invert(o),
              a = 'function' == typeof t ? t.apply(this, arguments) : t;
            return i(g(y(e, a), o, u), n, c);
          });
        }),
        (m.translateBy = function(n, t, e) {
          m.transform(n, function() {
            return i(
              this.__zoom.translate(
                'function' == typeof t ? t.apply(this, arguments) : t,
                'function' == typeof e ? e.apply(this, arguments) : e
              ),
              r.apply(this, arguments),
              c
            );
          });
        }),
        (m.translateTo = function(n, t, e) {
          m.transform(n, function() {
            var n = r.apply(this, arguments),
              o = this.__zoom,
              u = _(n);
            return i(
              h_
                .translate(u[0], u[1])
                .scale(o.k)
                .translate(
                  'function' == typeof t ? -t.apply(this, arguments) : -t,
                  'function' == typeof e ? -e.apply(this, arguments) : -e
                ),
              n,
              c
            );
          });
        }),
        (w.prototype = {
          start: function() {
            return (
              1 == ++this.active &&
                ((this.index = l.push(this) - 1), this.emit('start')),
              this
            );
          },
          zoom: function(n, t) {
            return (
              this.mouse &&
                'mouse' !== n &&
                (this.mouse[1] = t.invert(this.mouse[0])),
              this.touch0 &&
                'touch' !== n &&
                (this.touch0[1] = t.invert(this.touch0[0])),
              this.touch1 &&
                'touch' !== n &&
                (this.touch1[1] = t.invert(this.touch1[0])),
              (this.that.__zoom = t),
              this.emit('zoom'),
              this
            );
          },
          end: function() {
            return (
              0 == --this.active &&
                (l.splice(this.index, 1), (this.index = -1), this.emit('end')),
              this
            );
          },
          emit: function(n) {
            Zn(new s_(m, n, this.that.__zoom), h.apply, h, [
              n,
              this.that,
              this.args,
            ]);
          },
        }),
        (m.wheelDelta = function(n) {
          return arguments.length
            ? ((o = 'function' == typeof n ? n : f_(+n)), m)
            : o;
        }),
        (m.filter = function(n) {
          return arguments.length
            ? ((e = 'function' == typeof n ? n : f_(!!n)), m)
            : e;
        }),
        (m.touchable = function(n) {
          return arguments.length
            ? ((u = 'function' == typeof n ? n : f_(!!n)), m)
            : u;
        }),
        (m.extent = function(n) {
          return arguments.length
            ? ((r =
                'function' == typeof n
                  ? n
                  : f_([[+n[0][0], +n[0][1]], [+n[1][0], +n[1][1]]])),
              m)
            : r;
        }),
        (m.scaleExtent = function(n) {
          return arguments.length
            ? ((a[0] = +n[0]), (a[1] = +n[1]), m)
            : [a[0], a[1]];
        }),
        (m.translateExtent = function(n) {
          return arguments.length
            ? ((c[0][0] = +n[0][0]),
              (c[1][0] = +n[1][0]),
              (c[0][1] = +n[0][1]),
              (c[1][1] = +n[1][1]),
              m)
            : [[c[0][0], c[0][1]], [c[1][0], c[1][1]]];
        }),
        (m.constrain = function(n) {
          return arguments.length ? ((i = n), m) : i;
        }),
        (m.duration = function(n) {
          return arguments.length ? ((f = +n), m) : f;
        }),
        (m.interpolate = function(n) {
          return arguments.length ? ((s = n), m) : s;
        }),
        (m.on = function() {
          var n = h.on.apply(h, arguments);
          return n === h ? m : n;
        }),
        (m.clickDistance = function(n) {
          return arguments.length ? ((v = (n = +n) * n), m) : Math.sqrt(v);
        }),
        m
      );
    };
    e.d(t, 'version', function() {
      return '5.9.2';
    }),
      e.d(t, 'bisect', function() {
        return c;
      }),
      e.d(t, 'bisectRight', function() {
        return u;
      }),
      e.d(t, 'bisectLeft', function() {
        return a;
      }),
      e.d(t, 'ascending', function() {
        return r;
      }),
      e.d(t, 'bisector', function() {
        return i;
      }),
      e.d(t, 'cross', function() {
        return l;
      }),
      e.d(t, 'descending', function() {
        return h;
      }),
      e.d(t, 'deviation', function() {
        return v;
      }),
      e.d(t, 'extent', function() {
        return m;
      }),
      e.d(t, 'histogram', function() {
        return S;
      }),
      e.d(t, 'thresholdFreedmanDiaconis', function() {
        return U;
      }),
      e.d(t, 'thresholdScott', function() {
        return Y;
      }),
      e.d(t, 'thresholdSturges', function() {
        return T;
      }),
      e.d(t, 'max', function() {
        return O;
      }),
      e.d(t, 'mean', function() {
        return P;
      }),
      e.d(t, 'median', function() {
        return D;
      }),
      e.d(t, 'merge', function() {
        return I;
      }),
      e.d(t, 'min', function() {
        return L;
      }),
      e.d(t, 'pairs', function() {
        return f;
      }),
      e.d(t, 'permute', function() {
        return B;
      }),
      e.d(t, 'quantile', function() {
        return k;
      }),
      e.d(t, 'range', function() {
        return w;
      }),
      e.d(t, 'scan', function() {
        return z;
      }),
      e.d(t, 'shuffle', function() {
        return q;
      }),
      e.d(t, 'sum', function() {
        return F;
      }),
      e.d(t, 'ticks', function() {
        return R;
      }),
      e.d(t, 'tickIncrement', function() {
        return N;
      }),
      e.d(t, 'tickStep', function() {
        return A;
      }),
      e.d(t, 'transpose', function() {
        return j;
      }),
      e.d(t, 'variance', function() {
        return p;
      }),
      e.d(t, 'zip', function() {
        return H;
      }),
      e.d(t, 'axisTop', function() {
        return rn;
      }),
      e.d(t, 'axisRight', function() {
        return on;
      }),
      e.d(t, 'axisBottom', function() {
        return un;
      }),
      e.d(t, 'axisLeft', function() {
        return an;
      }),
      e.d(t, 'brush', function() {
        return kr;
      }),
      e.d(t, 'brushX', function() {
        return Tr;
      }),
      e.d(t, 'brushY', function() {
        return Sr;
      }),
      e.d(t, 'brushSelection', function() {
        return Ar;
      }),
      e.d(t, 'chord', function() {
        return Gr;
      }),
      e.d(t, 'ribbon', function() {
        return ii;
      }),
      e.d(t, 'nest', function() {
        return ci;
      }),
      e.d(t, 'set', function() {
        return mi;
      }),
      e.d(t, 'map', function() {
        return ai;
      }),
      e.d(t, 'keys', function() {
        return yi;
      }),
      e.d(t, 'values', function() {
        return gi;
      }),
      e.d(t, 'entries', function() {
        return _i;
      }),
      e.d(t, 'color', function() {
        return ae.a;
      }),
      e.d(t, 'rgb', function() {
        return ae.h;
      }),
      e.d(t, 'hsl', function() {
        return ae.e;
      }),
      e.d(t, 'lab', function() {
        return ae.f;
      }),
      e.d(t, 'hcl', function() {
        return ae.d;
      }),
      e.d(t, 'lch', function() {
        return ae.g;
      }),
      e.d(t, 'gray', function() {
        return ae.c;
      }),
      e.d(t, 'cubehelix', function() {
        return ae.b;
      }),
      e.d(t, 'contours', function() {
        return zi;
      }),
      e.d(t, 'contourDensity', function() {
        return Xi;
      }),
      e.d(t, 'dispatch', function() {
        return dn;
      }),
      e.d(t, 'drag', function() {
        return Ct;
      }),
      e.d(t, 'dragDisable', function() {
        return vt;
      }),
      e.d(t, 'dragEnable', function() {
        return mt;
      }),
      e.d(t, 'dsvFormat', function() {
        return eo;
      }),
      e.d(t, 'csvParse', function() {
        return io;
      }),
      e.d(t, 'csvParseRows', function() {
        return oo;
      }),
      e.d(t, 'csvFormat', function() {
        return uo;
      }),
      e.d(t, 'csvFormatBody', function() {
        return ao;
      }),
      e.d(t, 'csvFormatRows', function() {
        return co;
      }),
      e.d(t, 'tsvParse', function() {
        return so;
      }),
      e.d(t, 'tsvParseRows', function() {
        return lo;
      }),
      e.d(t, 'tsvFormat', function() {
        return ho;
      }),
      e.d(t, 'tsvFormatBody', function() {
        return po;
      }),
      e.d(t, 'tsvFormatRows', function() {
        return vo;
      }),
      e.d(t, 'autoType', function() {
        return mo;
      }),
      e.d(t, 'easeLinear', function() {
        return me;
      }),
      e.d(t, 'easeQuad', function() {
        return _e;
      }),
      e.d(t, 'easeQuadIn', function() {
        return ye;
      }),
      e.d(t, 'easeQuadOut', function() {
        return ge;
      }),
      e.d(t, 'easeQuadInOut', function() {
        return _e;
      }),
      e.d(t, 'easeCubic', function() {
        return we;
      }),
      e.d(t, 'easeCubicIn', function() {
        return be;
      }),
      e.d(t, 'easeCubicOut', function() {
        return xe;
      }),
      e.d(t, 'easeCubicInOut', function() {
        return we;
      }),
      e.d(t, 'easePoly', function() {
        return Ce;
      }),
      e.d(t, 'easePolyIn', function() {
        return Me;
      }),
      e.d(t, 'easePolyOut', function() {
        return Ee;
      }),
      e.d(t, 'easePolyInOut', function() {
        return Ce;
      }),
      e.d(t, 'easeSin', function() {
        return Se;
      }),
      e.d(t, 'easeSinIn', function() {
        return Ae;
      }),
      e.d(t, 'easeSinOut', function() {
        return Te;
      }),
      e.d(t, 'easeSinInOut', function() {
        return Se;
      }),
      e.d(t, 'easeExp', function() {
        return Ye;
      }),
      e.d(t, 'easeExpIn', function() {
        return ke;
      }),
      e.d(t, 'easeExpOut', function() {
        return Ue;
      }),
      e.d(t, 'easeExpInOut', function() {
        return Ye;
      }),
      e.d(t, 'easeCircle', function() {
        return De;
      }),
      e.d(t, 'easeCircleIn', function() {
        return Oe;
      }),
      e.d(t, 'easeCircleOut', function() {
        return Pe;
      }),
      e.d(t, 'easeCircleInOut', function() {
        return De;
      }),
      e.d(t, 'easeBounce', function() {
        return Ke;
      }),
      e.d(t, 'easeBounceIn', function() {
        return Ve;
      }),
      e.d(t, 'easeBounceOut', function() {
        return Ke;
      }),
      e.d(t, 'easeBounceInOut', function() {
        return We;
      }),
      e.d(t, 'easeBack', function() {
        return Qe;
      }),
      e.d(t, 'easeBackIn', function() {
        return Ze;
      }),
      e.d(t, 'easeBackOut', function() {
        return $e;
      }),
      e.d(t, 'easeBackInOut', function() {
        return Qe;
      }),
      e.d(t, 'easeElastic', function() {
        return tr;
      }),
      e.d(t, 'easeElasticIn', function() {
        return nr;
      }),
      e.d(t, 'easeElasticOut', function() {
        return tr;
      }),
      e.d(t, 'easeElasticInOut', function() {
        return er;
      }),
      e.d(t, 'blob', function() {
        return go;
      }),
      e.d(t, 'buffer', function() {
        return bo;
      }),
      e.d(t, 'dsv', function() {
        return Eo;
      }),
      e.d(t, 'csv', function() {
        return Co;
      }),
      e.d(t, 'tsv', function() {
        return Ro;
      }),
      e.d(t, 'image', function() {
        return No;
      }),
      e.d(t, 'json', function() {
        return To;
      }),
      e.d(t, 'text', function() {
        return wo;
      }),
      e.d(t, 'xml', function() {
        return ko;
      }),
      e.d(t, 'html', function() {
        return Uo;
      }),
      e.d(t, 'svg', function() {
        return Yo;
      }),
      e.d(t, 'forceCenter', function() {
        return Oo;
      }),
      e.d(t, 'forceCollide', function() {
        return Vo;
      }),
      e.d(t, 'forceLink', function() {
        return Zo;
      }),
      e.d(t, 'forceManyBody', function() {
        return eu;
      }),
      e.d(t, 'forceRadial', function() {
        return ru;
      }),
      e.d(t, 'forceSimulation', function() {
        return tu;
      }),
      e.d(t, 'forceX', function() {
        return iu;
      }),
      e.d(t, 'forceY', function() {
        return ou;
      }),
      e.d(t, 'formatDefaultLocale', function() {
        return xu;
      }),
      e.d(t, 'format', function() {
        return du;
      }),
      e.d(t, 'formatPrefix', function() {
        return pu;
      }),
      e.d(t, 'formatLocale', function() {
        return bu;
      }),
      e.d(t, 'formatSpecifier', function() {
        return fu;
      }),
      e.d(t, 'precisionFixed', function() {
        return wu;
      }),
      e.d(t, 'precisionPrefix', function() {
        return Mu;
      }),
      e.d(t, 'precisionRound', function() {
        return Eu;
      }),
      e.d(t, 'geoArea', function() {
        return ma;
      }),
      e.d(t, 'geoBounds', function() {
        return cc;
      }),
      e.d(t, 'geoCentroid', function() {
        return bc;
      }),
      e.d(t, 'geoCircle', function() {
        return kc;
      }),
      e.d(t, 'geoClipAntimeridian', function() {
        return Vc;
      }),
      e.d(t, 'geoClipCircle', function() {
        return Kc;
      }),
      e.d(t, 'geoClipExtent', function() {
        return ef;
      }),
      e.d(t, 'geoClipRectangle', function() {
        return Qc;
      }),
      e.d(t, 'geoContains', function() {
        return xf;
      }),
      e.d(t, 'geoDistance', function() {
        return hf;
      }),
      e.d(t, 'geoGraticule', function() {
        return Ef;
      }),
      e.d(t, 'geoGraticule10', function() {
        return Cf;
      }),
      e.d(t, 'geoInterpolate', function() {
        return Sf;
      }),
      e.d(t, 'geoLength', function() {
        return ff;
      }),
      e.d(t, 'geoPath', function() {
        return As;
      }),
      e.d(t, 'geoAlbers', function() {
        return Vs;
      }),
      e.d(t, 'geoAlbersUsa', function() {
        return Ks;
      }),
      e.d(t, 'geoAzimuthalEqualArea', function() {
        return Qs;
      }),
      e.d(t, 'geoAzimuthalEqualAreaRaw', function() {
        return $s;
      }),
      e.d(t, 'geoAzimuthalEquidistant', function() {
        return nl;
      }),
      e.d(t, 'geoAzimuthalEquidistantRaw', function() {
        return Js;
      }),
      e.d(t, 'geoConicConformal', function() {
        return ul;
      }),
      e.d(t, 'geoConicConformalRaw', function() {
        return ol;
      }),
      e.d(t, 'geoConicEqualArea', function() {
        return Xs;
      }),
      e.d(t, 'geoConicEqualAreaRaw', function() {
        return Hs;
      }),
      e.d(t, 'geoConicEquidistant', function() {
        return sl;
      }),
      e.d(t, 'geoConicEquidistantRaw', function() {
        return fl;
      }),
      e.d(t, 'geoEqualEarth', function() {
        return yl;
      }),
      e.d(t, 'geoEqualEarthRaw', function() {
        return ml;
      }),
      e.d(t, 'geoEquirectangular', function() {
        return cl;
      }),
      e.d(t, 'geoEquirectangularRaw', function() {
        return al;
      }),
      e.d(t, 'geoGnomonic', function() {
        return _l;
      }),
      e.d(t, 'geoGnomonicRaw', function() {
        return gl;
      }),
      e.d(t, 'geoIdentity', function() {
        return xl;
      }),
      e.d(t, 'geoProjection', function() {
        return Fs;
      }),
      e.d(t, 'geoProjectionMutator', function() {
        return js;
      }),
      e.d(t, 'geoMercator', function() {
        return el;
      }),
      e.d(t, 'geoMercatorRaw', function() {
        return tl;
      }),
      e.d(t, 'geoNaturalEarth1', function() {
        return Ml;
      }),
      e.d(t, 'geoNaturalEarth1Raw', function() {
        return wl;
      }),
      e.d(t, 'geoOrthographic', function() {
        return Cl;
      }),
      e.d(t, 'geoOrthographicRaw', function() {
        return El;
      }),
      e.d(t, 'geoStereographic', function() {
        return Nl;
      }),
      e.d(t, 'geoStereographicRaw', function() {
        return Rl;
      }),
      e.d(t, 'geoTransverseMercator', function() {
        return Tl;
      }),
      e.d(t, 'geoTransverseMercatorRaw', function() {
        return Al;
      }),
      e.d(t, 'geoRotation', function() {
        return Ac;
      }),
      e.d(t, 'geoStream', function() {
        return ca;
      }),
      e.d(t, 'geoTransform', function() {
        return Ts;
      }),
      e.d(t, 'cluster', function() {
        return Sl.cluster;
      }),
      e.d(t, 'hierarchy', function() {
        return Sl.hierarchy;
      }),
      e.d(t, 'pack', function() {
        return Sl.pack;
      }),
      e.d(t, 'packSiblings', function() {
        return Sl.packSiblings;
      }),
      e.d(t, 'packEnclose', function() {
        return Sl.packEnclose;
      }),
      e.d(t, 'partition', function() {
        return Sl.partition;
      }),
      e.d(t, 'stratify', function() {
        return Sl.stratify;
      }),
      e.d(t, 'tree', function() {
        return Sl.tree;
      }),
      e.d(t, 'treemap', function() {
        return Sl.treemap;
      }),
      e.d(t, 'treemapBinary', function() {
        return Sl.treemapBinary;
      }),
      e.d(t, 'treemapDice', function() {
        return Sl.treemapDice;
      }),
      e.d(t, 'treemapSlice', function() {
        return Sl.treemapSlice;
      }),
      e.d(t, 'treemapSliceDice', function() {
        return Sl.treemapSliceDice;
      }),
      e.d(t, 'treemapSquarify', function() {
        return Sl.treemapSquarify;
      }),
      e.d(t, 'treemapResquarify', function() {
        return Sl.treemapResquarify;
      }),
      e.d(t, 'interpolate', function() {
        return Rt.a;
      }),
      e.d(t, 'interpolateArray', function() {
        return Rt.b;
      }),
      e.d(t, 'interpolateBasis', function() {
        return Rt.c;
      }),
      e.d(t, 'interpolateBasisClosed', function() {
        return Rt.d;
      }),
      e.d(t, 'interpolateDate', function() {
        return Rt.g;
      }),
      e.d(t, 'interpolateDiscrete', function() {
        return Rt.h;
      }),
      e.d(t, 'interpolateHue', function() {
        return Rt.m;
      }),
      e.d(t, 'interpolateNumber', function() {
        return Rt.o;
      }),
      e.d(t, 'interpolateObject', function() {
        return Rt.p;
      }),
      e.d(t, 'interpolateRound', function() {
        return Rt.t;
      }),
      e.d(t, 'interpolateString', function() {
        return Rt.u;
      }),
      e.d(t, 'interpolateTransformCss', function() {
        return Rt.v;
      }),
      e.d(t, 'interpolateTransformSvg', function() {
        return Rt.w;
      }),
      e.d(t, 'interpolateZoom', function() {
        return Rt.x;
      }),
      e.d(t, 'interpolateRgb', function() {
        return Rt.q;
      }),
      e.d(t, 'interpolateRgbBasis', function() {
        return Rt.r;
      }),
      e.d(t, 'interpolateRgbBasisClosed', function() {
        return Rt.s;
      }),
      e.d(t, 'interpolateHsl', function() {
        return Rt.k;
      }),
      e.d(t, 'interpolateHslLong', function() {
        return Rt.l;
      }),
      e.d(t, 'interpolateLab', function() {
        return Rt.n;
      }),
      e.d(t, 'interpolateHcl', function() {
        return Rt.i;
      }),
      e.d(t, 'interpolateHclLong', function() {
        return Rt.j;
      }),
      e.d(t, 'interpolateCubehelix', function() {
        return Rt.e;
      }),
      e.d(t, 'interpolateCubehelixLong', function() {
        return Rt.f;
      }),
      e.d(t, 'piecewise', function() {
        return Rt.y;
      }),
      e.d(t, 'quantize', function() {
        return Rt.z;
      }),
      e.d(t, 'path', function() {
        return Qr;
      }),
      e.d(t, 'polygonArea', function() {
        return kl;
      }),
      e.d(t, 'polygonCentroid', function() {
        return Ul;
      }),
      e.d(t, 'polygonHull', function() {
        return Dl;
      }),
      e.d(t, 'polygonContains', function() {
        return Il;
      }),
      e.d(t, 'polygonLength', function() {
        return Ll;
      }),
      e.d(t, 'quadtree', function() {
        return qo;
      }),
      e.d(t, 'randomUniform', function() {
        return zl;
      }),
      e.d(t, 'randomNormal', function() {
        return ql;
      }),
      e.d(t, 'randomLogNormal', function() {
        return Fl;
      }),
      e.d(t, 'randomBates', function() {
        return Gl;
      }),
      e.d(t, 'randomIrwinHall', function() {
        return jl;
      }),
      e.d(t, 'randomExponential', function() {
        return Hl;
      }),
      e.d(t, 'scaleBand', function() {
        return ph;
      }),
      e.d(t, 'scalePoint', function() {
        return vh;
      }),
      e.d(t, 'scaleIdentity', function() {
        return Sh;
      }),
      e.d(t, 'scaleLinear', function() {
        return Th;
      }),
      e.d(t, 'scaleLog', function() {
        return Bh;
      }),
      e.d(t, 'scaleSymlog', function() {
        return jh;
      }),
      e.d(t, 'scaleOrdinal', function() {
        return dh;
      }),
      e.d(t, 'scaleImplicit', function() {
        return hh;
      }),
      e.d(t, 'scalePow', function() {
        return Kh;
      }),
      e.d(t, 'scaleSqrt', function() {
        return Wh;
      }),
      e.d(t, 'scaleQuantile', function() {
        return Zh;
      }),
      e.d(t, 'scaleQuantize', function() {
        return $h;
      }),
      e.d(t, 'scaleThreshold', function() {
        return Qh;
      }),
      e.d(t, 'scaleTime', function() {
        return Kv;
      }),
      e.d(t, 'scaleUtc', function() {
        return Wv;
      }),
      e.d(t, 'scaleSequential', function() {
        return Qv;
      }),
      e.d(t, 'scaleSequentialLog', function() {
        return Jv;
      }),
      e.d(t, 'scaleSequentialPow', function() {
        return tm;
      }),
      e.d(t, 'scaleSequentialSqrt', function() {
        return em;
      }),
      e.d(t, 'scaleSequentialSymlog', function() {
        return nm;
      }),
      e.d(t, 'scaleSequentialQuantile', function() {
        return rm;
      }),
      e.d(t, 'scaleDiverging', function() {
        return om;
      }),
      e.d(t, 'scaleDivergingLog', function() {
        return um;
      }),
      e.d(t, 'scaleDivergingPow', function() {
        return cm;
      }),
      e.d(t, 'scaleDivergingSqrt', function() {
        return fm;
      }),
      e.d(t, 'scaleDivergingSymlog', function() {
        return am;
      }),
      e.d(t, 'tickFormat', function() {
        return Nh;
      }),
      e.d(t, 'schemeCategory10', function() {
        return sm.schemeCategory10;
      }),
      e.d(t, 'schemeAccent', function() {
        return sm.schemeAccent;
      }),
      e.d(t, 'schemeDark2', function() {
        return sm.schemeDark2;
      }),
      e.d(t, 'schemePaired', function() {
        return sm.schemePaired;
      }),
      e.d(t, 'schemePastel1', function() {
        return sm.schemePastel1;
      }),
      e.d(t, 'schemePastel2', function() {
        return sm.schemePastel2;
      }),
      e.d(t, 'schemeSet1', function() {
        return sm.schemeSet1;
      }),
      e.d(t, 'schemeSet2', function() {
        return sm.schemeSet2;
      }),
      e.d(t, 'schemeSet3', function() {
        return sm.schemeSet3;
      }),
      e.d(t, 'interpolateBrBG', function() {
        return sm.interpolateBrBG;
      }),
      e.d(t, 'schemeBrBG', function() {
        return sm.schemeBrBG;
      }),
      e.d(t, 'interpolatePRGn', function() {
        return sm.interpolatePRGn;
      }),
      e.d(t, 'schemePRGn', function() {
        return sm.schemePRGn;
      }),
      e.d(t, 'interpolatePiYG', function() {
        return sm.interpolatePiYG;
      }),
      e.d(t, 'schemePiYG', function() {
        return sm.schemePiYG;
      }),
      e.d(t, 'interpolatePuOr', function() {
        return sm.interpolatePuOr;
      }),
      e.d(t, 'schemePuOr', function() {
        return sm.schemePuOr;
      }),
      e.d(t, 'interpolateRdBu', function() {
        return sm.interpolateRdBu;
      }),
      e.d(t, 'schemeRdBu', function() {
        return sm.schemeRdBu;
      }),
      e.d(t, 'interpolateRdGy', function() {
        return sm.interpolateRdGy;
      }),
      e.d(t, 'schemeRdGy', function() {
        return sm.schemeRdGy;
      }),
      e.d(t, 'interpolateRdYlBu', function() {
        return sm.interpolateRdYlBu;
      }),
      e.d(t, 'schemeRdYlBu', function() {
        return sm.schemeRdYlBu;
      }),
      e.d(t, 'interpolateRdYlGn', function() {
        return sm.interpolateRdYlGn;
      }),
      e.d(t, 'schemeRdYlGn', function() {
        return sm.schemeRdYlGn;
      }),
      e.d(t, 'interpolateSpectral', function() {
        return sm.interpolateSpectral;
      }),
      e.d(t, 'schemeSpectral', function() {
        return sm.schemeSpectral;
      }),
      e.d(t, 'interpolateBuGn', function() {
        return sm.interpolateBuGn;
      }),
      e.d(t, 'schemeBuGn', function() {
        return sm.schemeBuGn;
      }),
      e.d(t, 'interpolateBuPu', function() {
        return sm.interpolateBuPu;
      }),
      e.d(t, 'schemeBuPu', function() {
        return sm.schemeBuPu;
      }),
      e.d(t, 'interpolateGnBu', function() {
        return sm.interpolateGnBu;
      }),
      e.d(t, 'schemeGnBu', function() {
        return sm.schemeGnBu;
      }),
      e.d(t, 'interpolateOrRd', function() {
        return sm.interpolateOrRd;
      }),
      e.d(t, 'schemeOrRd', function() {
        return sm.schemeOrRd;
      }),
      e.d(t, 'interpolatePuBuGn', function() {
        return sm.interpolatePuBuGn;
      }),
      e.d(t, 'schemePuBuGn', function() {
        return sm.schemePuBuGn;
      }),
      e.d(t, 'interpolatePuBu', function() {
        return sm.interpolatePuBu;
      }),
      e.d(t, 'schemePuBu', function() {
        return sm.schemePuBu;
      }),
      e.d(t, 'interpolatePuRd', function() {
        return sm.interpolatePuRd;
      }),
      e.d(t, 'schemePuRd', function() {
        return sm.schemePuRd;
      }),
      e.d(t, 'interpolateRdPu', function() {
        return sm.interpolateRdPu;
      }),
      e.d(t, 'schemeRdPu', function() {
        return sm.schemeRdPu;
      }),
      e.d(t, 'interpolateYlGnBu', function() {
        return sm.interpolateYlGnBu;
      }),
      e.d(t, 'schemeYlGnBu', function() {
        return sm.schemeYlGnBu;
      }),
      e.d(t, 'interpolateYlGn', function() {
        return sm.interpolateYlGn;
      }),
      e.d(t, 'schemeYlGn', function() {
        return sm.schemeYlGn;
      }),
      e.d(t, 'interpolateYlOrBr', function() {
        return sm.interpolateYlOrBr;
      }),
      e.d(t, 'schemeYlOrBr', function() {
        return sm.schemeYlOrBr;
      }),
      e.d(t, 'interpolateYlOrRd', function() {
        return sm.interpolateYlOrRd;
      }),
      e.d(t, 'schemeYlOrRd', function() {
        return sm.schemeYlOrRd;
      }),
      e.d(t, 'interpolateBlues', function() {
        return sm.interpolateBlues;
      }),
      e.d(t, 'schemeBlues', function() {
        return sm.schemeBlues;
      }),
      e.d(t, 'interpolateGreens', function() {
        return sm.interpolateGreens;
      }),
      e.d(t, 'schemeGreens', function() {
        return sm.schemeGreens;
      }),
      e.d(t, 'interpolateGreys', function() {
        return sm.interpolateGreys;
      }),
      e.d(t, 'schemeGreys', function() {
        return sm.schemeGreys;
      }),
      e.d(t, 'interpolatePurples', function() {
        return sm.interpolatePurples;
      }),
      e.d(t, 'schemePurples', function() {
        return sm.schemePurples;
      }),
      e.d(t, 'interpolateReds', function() {
        return sm.interpolateReds;
      }),
      e.d(t, 'schemeReds', function() {
        return sm.schemeReds;
      }),
      e.d(t, 'interpolateOranges', function() {
        return sm.interpolateOranges;
      }),
      e.d(t, 'schemeOranges', function() {
        return sm.schemeOranges;
      }),
      e.d(t, 'interpolateCubehelixDefault', function() {
        return sm.interpolateCubehelixDefault;
      }),
      e.d(t, 'interpolateRainbow', function() {
        return sm.interpolateRainbow;
      }),
      e.d(t, 'interpolateWarm', function() {
        return sm.interpolateWarm;
      }),
      e.d(t, 'interpolateCool', function() {
        return sm.interpolateCool;
      }),
      e.d(t, 'interpolateSinebow', function() {
        return sm.interpolateSinebow;
      }),
      e.d(t, 'interpolateViridis', function() {
        return sm.interpolateViridis;
      }),
      e.d(t, 'interpolateMagma', function() {
        return sm.interpolateMagma;
      }),
      e.d(t, 'interpolateInferno', function() {
        return sm.interpolateInferno;
      }),
      e.d(t, 'interpolatePlasma', function() {
        return sm.interpolatePlasma;
      }),
      e.d(t, 'create', function() {
        return rt;
      }),
      e.d(t, 'creator', function() {
        return yn;
      }),
      e.d(t, 'local', function() {
        return ot;
      }),
      e.d(t, 'matcher', function() {
        return wn;
      }),
      e.d(t, 'mouse', function() {
        return ft;
      }),
      e.d(t, 'namespace', function() {
        return mn;
      }),
      e.d(t, 'namespaces', function() {
        return vn;
      }),
      e.d(t, 'clientPoint', function() {
        return ct;
      }),
      e.d(t, 'select', function() {
        return et;
      }),
      e.d(t, 'selectAll', function() {
        return st;
      }),
      e.d(t, 'selection', function() {
        return tt;
      }),
      e.d(t, 'selector', function() {
        return _n;
      }),
      e.d(t, 'selectorAll', function() {
        return xn;
      }),
      e.d(t, 'style', function() {
        return Sn;
      }),
      e.d(t, 'touch', function() {
        return lt;
      }),
      e.d(t, 'touches', function() {
        return ht;
      }),
      e.d(t, 'window', function() {
        return Tn;
      }),
      e.d(t, 'event', function() {
        return Hn;
      }),
      e.d(t, 'customEvent', function() {
        return Zn;
      }),
      e.d(t, 'arc', function() {
        return Sm;
      }),
      e.d(t, 'area', function() {
        return Dm;
      }),
      e.d(t, 'line', function() {
        return Pm;
      }),
      e.d(t, 'pie', function() {
        return Bm;
      }),
      e.d(t, 'areaRadial', function() {
        return Hm;
      }),
      e.d(t, 'radialArea', function() {
        return Hm;
      }),
      e.d(t, 'lineRadial', function() {
        return Gm;
      }),
      e.d(t, 'radialLine', function() {
        return Gm;
      }),
      e.d(t, 'pointRadial', function() {
        return Xm;
      }),
      e.d(t, 'linkHorizontal', function() {
        return ny;
      }),
      e.d(t, 'linkVertical', function() {
        return ty;
      }),
      e.d(t, 'linkRadial', function() {
        return ey;
      }),
      e.d(t, 'symbol', function() {
        return by;
      }),
      e.d(t, 'symbols', function() {
        return _y;
      }),
      e.d(t, 'symbolCircle', function() {
        return ry;
      }),
      e.d(t, 'symbolCross', function() {
        return iy;
      }),
      e.d(t, 'symbolDiamond', function() {
        return ay;
      }),
      e.d(t, 'symbolSquare', function() {
        return hy;
      }),
      e.d(t, 'symbolStar', function() {
        return ly;
      }),
      e.d(t, 'symbolTriangle', function() {
        return py;
      }),
      e.d(t, 'symbolWye', function() {
        return gy;
      }),
      e.d(t, 'curveBasisClosed', function() {
        return Ry;
      }),
      e.d(t, 'curveBasisOpen', function() {
        return Ay;
      }),
      e.d(t, 'curveBasis', function() {
        return Ey;
      }),
      e.d(t, 'curveBundle', function() {
        return Sy;
      }),
      e.d(t, 'curveCardinalClosed', function() {
        return Py;
      }),
      e.d(t, 'curveCardinalOpen', function() {
        return Iy;
      }),
      e.d(t, 'curveCardinal', function() {
        return Yy;
      }),
      e.d(t, 'curveCatmullRomClosed', function() {
        return Fy;
      }),
      e.d(t, 'curveCatmullRomOpen', function() {
        return Gy;
      }),
      e.d(t, 'curveCatmullRom', function() {
        return zy;
      }),
      e.d(t, 'curveLinearClosed', function() {
        return Xy;
      }),
      e.d(t, 'curveLinear', function() {
        return Um;
      }),
      e.d(t, 'curveMonotoneX', function() {
        return ng;
      }),
      e.d(t, 'curveMonotoneY', function() {
        return tg;
      }),
      e.d(t, 'curveNatural', function() {
        return ig;
      }),
      e.d(t, 'curveStep', function() {
        return ug;
      }),
      e.d(t, 'curveStepAfter', function() {
        return cg;
      }),
      e.d(t, 'curveStepBefore', function() {
        return ag;
      }),
      e.d(t, 'stack', function() {
        return hg;
      }),
      e.d(t, 'stackOffsetExpand', function() {
        return dg;
      }),
      e.d(t, 'stackOffsetDiverging', function() {
        return pg;
      }),
      e.d(t, 'stackOffsetNone', function() {
        return fg;
      }),
      e.d(t, 'stackOffsetSilhouette', function() {
        return vg;
      }),
      e.d(t, 'stackOffsetWiggle', function() {
        return mg;
      }),
      e.d(t, 'stackOrderAppearance', function() {
        return yg;
      }),
      e.d(t, 'stackOrderAscending', function() {
        return _g;
      }),
      e.d(t, 'stackOrderDescending', function() {
        return xg;
      }),
      e.d(t, 'stackOrderInsideOut', function() {
        return wg;
      }),
      e.d(t, 'stackOrderNone', function() {
        return sg;
      }),
      e.d(t, 'stackOrderReverse', function() {
        return Mg;
      }),
      e.d(t, 'timeInterval', function() {
        return td;
      }),
      e.d(t, 'timeMillisecond', function() {
        return rd;
      }),
      e.d(t, 'timeMilliseconds', function() {
        return id;
      }),
      e.d(t, 'utcMillisecond', function() {
        return rd;
      }),
      e.d(t, 'utcMilliseconds', function() {
        return id;
      }),
      e.d(t, 'timeSecond', function() {
        return cd;
      }),
      e.d(t, 'timeSeconds', function() {
        return fd;
      }),
      e.d(t, 'utcSecond', function() {
        return cd;
      }),
      e.d(t, 'utcSeconds', function() {
        return fd;
      }),
      e.d(t, 'timeMinute', function() {
        return ld;
      }),
      e.d(t, 'timeMinutes', function() {
        return hd;
      }),
      e.d(t, 'timeHour', function() {
        return pd;
      }),
      e.d(t, 'timeHours', function() {
        return vd;
      }),
      e.d(t, 'timeDay', function() {
        return yd;
      }),
      e.d(t, 'timeDays', function() {
        return gd;
      }),
      e.d(t, 'timeWeek', function() {
        return bd;
      }),
      e.d(t, 'timeWeeks', function() {
        return Nd;
      }),
      e.d(t, 'timeSunday', function() {
        return bd;
      }),
      e.d(t, 'timeSundays', function() {
        return Nd;
      }),
      e.d(t, 'timeMonday', function() {
        return xd;
      }),
      e.d(t, 'timeMondays', function() {
        return Ad;
      }),
      e.d(t, 'timeTuesday', function() {
        return wd;
      }),
      e.d(t, 'timeTuesdays', function() {
        return Td;
      }),
      e.d(t, 'timeWednesday', function() {
        return Md;
      }),
      e.d(t, 'timeWednesdays', function() {
        return Sd;
      }),
      e.d(t, 'timeThursday', function() {
        return Ed;
      }),
      e.d(t, 'timeThursdays', function() {
        return kd;
      }),
      e.d(t, 'timeFriday', function() {
        return Cd;
      }),
      e.d(t, 'timeFridays', function() {
        return Ud;
      }),
      e.d(t, 'timeSaturday', function() {
        return Rd;
      }),
      e.d(t, 'timeSaturdays', function() {
        return Yd;
      }),
      e.d(t, 'timeMonth', function() {
        return Pd;
      }),
      e.d(t, 'timeMonths', function() {
        return Dd;
      }),
      e.d(t, 'timeYear', function() {
        return Ld;
      }),
      e.d(t, 'timeYears', function() {
        return Bd;
      }),
      e.d(t, 'utcMinute', function() {
        return qd;
      }),
      e.d(t, 'utcMinutes', function() {
        return Fd;
      }),
      e.d(t, 'utcHour', function() {
        return Gd;
      }),
      e.d(t, 'utcHours', function() {
        return Hd;
      }),
      e.d(t, 'utcDay', function() {
        return Vd;
      }),
      e.d(t, 'utcDays', function() {
        return Kd;
      }),
      e.d(t, 'utcWeek', function() {
        return Zd;
      }),
      e.d(t, 'utcWeeks', function() {
        return rp;
      }),
      e.d(t, 'utcSunday', function() {
        return Zd;
      }),
      e.d(t, 'utcSundays', function() {
        return rp;
      }),
      e.d(t, 'utcMonday', function() {
        return $d;
      }),
      e.d(t, 'utcMondays', function() {
        return ip;
      }),
      e.d(t, 'utcTuesday', function() {
        return Qd;
      }),
      e.d(t, 'utcTuesdays', function() {
        return op;
      }),
      e.d(t, 'utcWednesday', function() {
        return Jd;
      }),
      e.d(t, 'utcWednesdays', function() {
        return up;
      }),
      e.d(t, 'utcThursday', function() {
        return np;
      }),
      e.d(t, 'utcThursdays', function() {
        return ap;
      }),
      e.d(t, 'utcFriday', function() {
        return tp;
      }),
      e.d(t, 'utcFridays', function() {
        return cp;
      }),
      e.d(t, 'utcSaturday', function() {
        return ep;
      }),
      e.d(t, 'utcSaturdays', function() {
        return fp;
      }),
      e.d(t, 'utcMonth', function() {
        return lp;
      }),
      e.d(t, 'utcMonths', function() {
        return hp;
      }),
      e.d(t, 'utcYear', function() {
        return pp;
      }),
      e.d(t, 'utcYears', function() {
        return vp;
      }),
      e.d(t, 'timeFormatDefaultLocale', function() {
        return Pv;
      }),
      e.d(t, 'timeFormat', function() {
        return xp;
      }),
      e.d(t, 'timeParse', function() {
        return wp;
      }),
      e.d(t, 'utcFormat', function() {
        return Mp;
      }),
      e.d(t, 'utcParse', function() {
        return Ep;
      }),
      e.d(t, 'timeFormatLocale', function() {
        return _p;
      }),
      e.d(t, 'isoFormat', function() {
        return Dv;
      }),
      e.d(t, 'isoParse', function() {
        return Iv;
      }),
      e.d(t, 'now', function() {
        return Dt;
      }),
      e.d(t, 'timer', function() {
        return Bt;
      }),
      e.d(t, 'timerFlush', function() {
        return zt;
      }),
      e.d(t, 'timeout', function() {
        return Gt;
      }),
      e.d(t, 'interval', function() {
        return Ht;
      }),
      e.d(t, 'transition', function() {
        return de;
      }),
      e.d(t, 'active', function() {
        return ur;
      }),
      e.d(t, 'interrupt', function() {
        return oe;
      }),
      e.d(t, 'voronoi', function() {
        return c_;
      }),
      e.d(t, 'zoom', function() {
        return w_;
      }),
      e.d(t, 'zoomTransform', function() {
        return d_;
      }),
      e.d(t, 'zoomIdentity', function() {
        return h_;
      });
  },
  function(n, t, e) {
    'use strict';
    e.r(t);
    var r = function(n, t) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
      },
      i = function(n) {
        var t;
        return (
          1 === n.length &&
            ((t = n),
            (n = function(n, e) {
              return r(t(n), e);
            })),
          {
            left: function(t, e, r, i) {
              for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
                var o = (r + i) >>> 1;
                n(t[o], e) < 0 ? (r = o + 1) : (i = o);
              }
              return r;
            },
            right: function(t, e, r, i) {
              for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
                var o = (r + i) >>> 1;
                n(t[o], e) > 0 ? (i = o) : (r = o + 1);
              }
              return r;
            },
          }
        );
      };
    var o = i(r),
      u = o.right,
      a = o.left,
      c = u;
    function f(n, t) {
      let e = 0;
      if (void 0 === t) for (const t of n) null != t && t >= t && ++e;
      else {
        let r = -1;
        for (let i of n) null != (i = t(i, ++r, n)) && i >= i && ++e;
      }
      return e;
    }
    function s(n) {
      return 0 | n.length;
    }
    function l(n) {
      return !(n > 0);
    }
    function h(n) {
      return 'object' != typeof n || 'length' in n ? n : Array.from(n);
    }
    function d(...n) {
      const t =
          'function' == typeof n[n.length - 1] &&
          (function(n) {
            return t => n(...t);
          })(n.pop()),
        e = (n = n.map(h)).map(s),
        r = n.length - 1,
        i = new Array(r + 1).fill(0),
        o = [];
      if (r < 0 || e.some(l)) return o;
      for (;;) {
        o.push(i.map((t, e) => n[e][t]));
        let u = r;
        for (; ++i[u] === e[u]; ) {
          if (0 === u) return t ? o.map(t) : o;
          i[u--] = 0;
        }
      }
    }
    var p = function(n, t) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
    };
    function v(n, t) {
      let e,
        r = 0,
        i = 0,
        o = 0;
      if (void 0 === t)
        for (let t of n)
          null != t &&
            (t = +t) >= t &&
            (o += (e = t - i) * (t - (i += e / ++r)));
      else {
        let u = -1;
        for (let a of n)
          null != (a = t(a, ++u, n)) &&
            (a = +a) >= a &&
            (o += (e = a - i) * (a - (i += e / ++r)));
      }
      if (r > 1) return o / (r - 1);
    }
    function m(n, t) {
      const e = v(n, t);
      return e ? Math.sqrt(e) : e;
    }
    var y = function(n, t) {
        let e, r;
        if (void 0 === t)
          for (const t of n)
            null != t &&
              (void 0 === e
                ? t >= t && (e = r = t)
                : (e > t && (e = t), r < t && (r = t)));
        else {
          let i = -1;
          for (let o of n)
            null != (o = t(o, ++i, n)) &&
              (void 0 === e
                ? o >= o && (e = r = o)
                : (e > o && (e = o), r < o && (r = o)));
        }
        return [e, r];
      },
      g = function(n) {
        return n;
      };
    function _(n, ...t) {
      return M(n, g, g, t);
    }
    function b(n, ...t) {
      return M(n, Array.from, g, t);
    }
    function x(n, t, ...e) {
      return M(n, g, t, e);
    }
    function w(n, t, ...e) {
      return M(n, Array.from, t, e);
    }
    function M(n, t, e, r) {
      return (function n(i, o) {
        if (o >= r.length) return e(i);
        const u = new Map(),
          a = r[o++];
        let c = -1;
        for (const n of i) {
          const t = a(n, ++c, i),
            e = u.get(t);
          e ? e.push(n) : u.set(t, [n]);
        }
        for (const [t, e] of u) u.set(t, n(e, o));
        return t(u);
      })(n, 0);
    }
    var E = Array.prototype,
      C = E.slice,
      R = E.map,
      N = function(n) {
        return function() {
          return n;
        };
      },
      A = function(n, t, e) {
        (n = +n),
          (t = +t),
          (e =
            (i = arguments.length) < 2
              ? ((t = n), (n = 0), 1)
              : i < 3
              ? 1
              : +e);
        for (
          var r = -1,
            i = 0 | Math.max(0, Math.ceil((t - n) / e)),
            o = new Array(i);
          ++r < i;

        )
          o[r] = n + r * e;
        return o;
      },
      T = Math.sqrt(50),
      S = Math.sqrt(10),
      k = Math.sqrt(2),
      U = function(n, t, e) {
        var r,
          i,
          o,
          u,
          a = -1;
        if (((e = +e), (n = +n) === (t = +t) && e > 0)) return [n];
        if (
          ((r = t < n) && ((i = n), (n = t), (t = i)),
          0 === (u = Y(n, t, e)) || !isFinite(u))
        )
          return [];
        if (u > 0)
          for (
            n = Math.ceil(n / u),
              t = Math.floor(t / u),
              o = new Array((i = Math.ceil(t - n + 1)));
            ++a < i;

          )
            o[a] = (n + a) * u;
        else
          for (
            n = Math.floor(n * u),
              t = Math.ceil(t * u),
              o = new Array((i = Math.ceil(n - t + 1)));
            ++a < i;

          )
            o[a] = (n - a) / u;
        return r && o.reverse(), o;
      };
    function Y(n, t, e) {
      var r = (t - n) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        o = r / Math.pow(10, i);
      return i >= 0
        ? (o >= T ? 10 : o >= S ? 5 : o >= k ? 2 : 1) * Math.pow(10, i)
        : -Math.pow(10, -i) / (o >= T ? 10 : o >= S ? 5 : o >= k ? 2 : 1);
    }
    function O(n, t, e) {
      var r = Math.abs(t - n) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        o = r / i;
      return (
        o >= T ? (i *= 10) : o >= S ? (i *= 5) : o >= k && (i *= 2),
        t < n ? -i : i
      );
    }
    var P = function(n) {
        return Math.ceil(Math.log(n.length) / Math.LN2) + 1;
      },
      D = function() {
        var n = g,
          t = y,
          e = P;
        function r(r) {
          Array.isArray(r) || (r = Array.from(r));
          var i,
            o,
            u = r.length,
            a = new Array(u);
          for (i = 0; i < u; ++i) a[i] = n(r[i], i, r);
          var f = t(a),
            s = f[0],
            l = f[1],
            h = e(a, s, l);
          Array.isArray(h) ||
            ((h = O(s, l, h)), (h = A(Math.ceil(s / h) * h, l, h)));
          for (var d = h.length; h[0] <= s; ) h.shift(), --d;
          for (; h[d - 1] > l; ) h.pop(), --d;
          var p,
            v = new Array(d + 1);
          for (i = 0; i <= d; ++i)
            ((p = v[i] = []).x0 = i > 0 ? h[i - 1] : s),
              (p.x1 = i < d ? h[i] : l);
          for (i = 0; i < u; ++i)
            s <= (o = a[i]) && o <= l && v[c(h, o, 0, d)].push(r[i]);
          return v;
        }
        return (
          (r.value = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : N(t)), r)
              : n;
          }),
          (r.domain = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : N([n[0], n[1]])), r)
              : t;
          }),
          (r.thresholds = function(n) {
            return arguments.length
              ? ((e =
                  'function' == typeof n
                    ? n
                    : Array.isArray(n)
                    ? N(C.call(n))
                    : N(n)),
                r)
              : e;
          }),
          r
        );
      },
      I = function(n) {
        return null === n ? NaN : +n;
      };
    function L(n, t, e = I) {
      if ((r = n.length)) {
        if ((t = +t) <= 0 || r < 2) return +e(n[0], 0, n);
        if (t >= 1) return +e(n[r - 1], r - 1, n);
        var r,
          i = (r - 1) * t,
          o = Math.floor(i),
          u = +e(n[o], o, n);
        return u + (+e(n[o + 1], o + 1, n) - u) * (i - o);
      }
    }
    var B = function(n, t, e) {
        return (
          (n = R.call(n, I).sort(r)),
          Math.ceil(
            (e - t) /
              (2 * (L(n, 0.75) - L(n, 0.25)) * Math.pow(n.length, -1 / 3))
          )
        );
      },
      z = function(n, t, e) {
        return Math.ceil((e - t) / (3.5 * m(n) * Math.pow(n.length, -1 / 3)));
      };
    function q(n, t) {
      let e;
      if (void 0 === t)
        for (const t of n)
          null != t && (e < t || (void 0 === e && t >= t)) && (e = t);
      else {
        let r = -1;
        for (let i of n)
          null != (i = t(i, ++r, n)) &&
            (e < i || (void 0 === e && i >= i)) &&
            (e = i);
      }
      return e;
    }
    function F(n, t) {
      let e,
        r = -1,
        i = -1;
      if (void 0 === t)
        for (const t of n)
          ++i,
            null != t &&
              (e < t || (void 0 === e && t >= t)) &&
              ((e = t), (r = i));
      else
        for (let o of n)
          null != (o = t(o, ++i, n)) &&
            (e < o || (void 0 === e && o >= o)) &&
            ((e = o), (r = i));
      return r;
    }
    function j(n, t) {
      let e = 0,
        r = 0;
      if (void 0 === t)
        for (let t of n) null != t && (t = +t) >= t && (++e, (r += t));
      else {
        let i = -1;
        for (let o of n)
          null != (o = t(o, ++i, n)) && (o = +o) >= o && (++e, (r += o));
      }
      if (e) return r / e;
    }
    function G(n, t, e = 0, i = n.length - 1, o = r) {
      for (; i > e; ) {
        if (i - e > 600) {
          const r = i - e + 1,
            u = t - e + 1,
            a = Math.log(r),
            c = 0.5 * Math.exp((2 * a) / 3),
            f =
              0.5 * Math.sqrt((a * c * (r - c)) / r) * (u - r / 2 < 0 ? -1 : 1);
          G(
            n,
            t,
            Math.max(e, Math.floor(t - (u * c) / r + f)),
            Math.min(i, Math.floor(t + ((r - u) * c) / r + f)),
            o
          );
        }
        const r = n[t];
        let u = e,
          a = i;
        for (H(n, e, t), o(n[i], r) > 0 && H(n, e, i); u < a; ) {
          for (H(n, u, a), ++u, --a; o(n[u], r) < 0; ) ++u;
          for (; o(n[a], r) > 0; ) --a;
        }
        0 === o(n[e], r) ? H(n, e, a) : H(n, ++a, i),
          a <= t && (e = a + 1),
          t <= a && (i = a - 1);
      }
      return n;
    }
    function H(n, t, e) {
      const r = n[t];
      (n[t] = n[e]), (n[e] = r);
    }
    var X = function(n, t) {
      if (
        !(n = Float64Array.from(
          (function*(n, t) {
            if (void 0 === t)
              for (let t of n) null != t && (t = +t) >= t && (yield t);
            else {
              let e = -1;
              for (let r of n)
                null != (r = t(r, ++e, n)) && (r = +r) >= r && (yield r);
            }
          })(n, t)
        )).length
      )
        return;
      const e = n.length,
        r = e >> 1;
      return G(n, r - 1, 0), 0 == (1 & e) && G(n, r, r), L(n, 0.5);
    };
    function V(n) {
      return Array.from(
        (function*(n) {
          for (const t of n) yield* t;
        })(n)
      );
    }
    function K(n, t) {
      let e;
      if (void 0 === t)
        for (const t of n)
          null != t && (e > t || (void 0 === e && t >= t)) && (e = t);
      else {
        let r = -1;
        for (let i of n)
          null != (i = t(i, ++r, n)) &&
            (e > i || (void 0 === e && i >= i)) &&
            (e = i);
      }
      return e;
    }
    function W(n, t) {
      let e,
        r = -1,
        i = -1;
      if (void 0 === t)
        for (const t of n)
          ++i,
            null != t &&
              (e > t || (void 0 === e && t >= t)) &&
              ((e = t), (r = i));
      else
        for (let o of n)
          null != (o = t(o, ++i, n)) &&
            (e > o || (void 0 === e && o >= o)) &&
            ((e = o), (r = i));
      return r;
    }
    function Z(
      n,
      t = function(n, t) {
        return [n, t];
      }
    ) {
      const e = [];
      let r,
        i = !1;
      for (const o of n) i && e.push(t(r, o)), (r = o), (i = !0);
      return e;
    }
    var $ = function(n, t) {
      return Array.from(t, t => n[t]);
    };
    function Q(n, t = r) {
      let e,
        i = !1;
      if (1 === t.length) {
        let o;
        for (const u of n) {
          const n = t(u);
          (i ? r(n, o) < 0 : 0 === r(n, n)) && ((e = u), (o = n), (i = !0));
        }
      } else
        for (const r of n)
          (i ? t(r, e) < 0 : 0 === t(r, r)) && ((e = r), (i = !0));
      return e;
    }
    function J(n, t = r) {
      let e,
        i = -1,
        o = -1;
      if (1 === t.length)
        for (const u of n) {
          ++o;
          const n = t(u);
          (i < 0 ? 0 === r(n, n) : r(n, e) < 0) && ((e = n), (i = o));
        }
      else
        for (const r of n)
          ++o, (i < 0 ? 0 === t(r, r) : t(r, e) < 0) && ((e = r), (i = o));
      return i;
    }
    function nn(n, t) {
      const e = J(n, t);
      return e < 0 ? void 0 : e;
    }
    function tn(n, t = 0, e = n.length) {
      for (var r, i, o = e - (t = +t); o; )
        (i = (Math.random() * o--) | 0),
          (r = n[o + t]),
          (n[o + t] = n[i + t]),
          (n[i + t] = r);
      return n;
    }
    function en(n, t) {
      let e = 0;
      if (void 0 === t) for (let t of n) (t = +t) && (e += t);
      else {
        let r = -1;
        for (let i of n) (i = +t(i, ++r, n)) && (e += i);
      }
      return e;
    }
    var rn = function(n) {
      if (!(i = n.length)) return [];
      for (var t = -1, e = K(n, on), r = new Array(e); ++t < e; )
        for (var i, o = -1, u = (r[t] = new Array(i)); ++o < i; )
          u[o] = n[o][t];
      return r;
    };
    function on(n) {
      return n.length;
    }
    var un = function() {
      return rn(arguments);
    };
    e.d(t, 'bisect', function() {
      return c;
    }),
      e.d(t, 'bisectRight', function() {
        return u;
      }),
      e.d(t, 'bisectLeft', function() {
        return a;
      }),
      e.d(t, 'ascending', function() {
        return r;
      }),
      e.d(t, 'bisector', function() {
        return i;
      }),
      e.d(t, 'count', function() {
        return f;
      }),
      e.d(t, 'cross', function() {
        return d;
      }),
      e.d(t, 'descending', function() {
        return p;
      }),
      e.d(t, 'deviation', function() {
        return m;
      }),
      e.d(t, 'extent', function() {
        return y;
      }),
      e.d(t, 'group', function() {
        return _;
      }),
      e.d(t, 'groups', function() {
        return b;
      }),
      e.d(t, 'rollup', function() {
        return x;
      }),
      e.d(t, 'rollups', function() {
        return w;
      }),
      e.d(t, 'bin', function() {
        return D;
      }),
      e.d(t, 'histogram', function() {
        return D;
      }),
      e.d(t, 'thresholdFreedmanDiaconis', function() {
        return B;
      }),
      e.d(t, 'thresholdScott', function() {
        return z;
      }),
      e.d(t, 'thresholdSturges', function() {
        return P;
      }),
      e.d(t, 'max', function() {
        return q;
      }),
      e.d(t, 'maxIndex', function() {
        return F;
      }),
      e.d(t, 'mean', function() {
        return j;
      }),
      e.d(t, 'median', function() {
        return X;
      }),
      e.d(t, 'merge', function() {
        return V;
      }),
      e.d(t, 'min', function() {
        return K;
      }),
      e.d(t, 'minIndex', function() {
        return W;
      }),
      e.d(t, 'pairs', function() {
        return Z;
      }),
      e.d(t, 'permute', function() {
        return $;
      }),
      e.d(t, 'quantile', function() {
        return L;
      }),
      e.d(t, 'quickselect', function() {
        return G;
      }),
      e.d(t, 'range', function() {
        return A;
      }),
      e.d(t, 'least', function() {
        return Q;
      }),
      e.d(t, 'leastIndex', function() {
        return J;
      }),
      e.d(t, 'scan', function() {
        return nn;
      }),
      e.d(t, 'shuffle', function() {
        return tn;
      }),
      e.d(t, 'sum', function() {
        return en;
      }),
      e.d(t, 'ticks', function() {
        return U;
      }),
      e.d(t, 'tickIncrement', function() {
        return Y;
      }),
      e.d(t, 'tickStep', function() {
        return O;
      }),
      e.d(t, 'transpose', function() {
        return rn;
      }),
      e.d(t, 'variance', function() {
        return v;
      }),
      e.d(t, 'zip', function() {
        return un;
      });
  },
  function(n, t, e) {
    'use strict';
    Object.defineProperty(t, '__esModule', {value: !0});
    const r = e(8),
      i = Object.assign({}, e(5), e(2), e(3), e(6)),
      o = e(13),
      u =
        (e(14),
        n => {
          const t = 20,
            e = 20,
            u = 20,
            a = 20,
            c = r.getHeight() - t - e,
            f = r.getWidth() - u - a;
          i.select('body')
            .selectAll('svg')
            .remove();
          var s = i
            .select('body')
            .append('svg')
            .attr('transform', `translate(${u}, ${t})`)
            .attr('width', f)
            .attr('height', c);
          const l = Math.min(f / 2, c / 2),
            h = i
              .scaleOrdinal(i.schemeCategory10)
              .domain(n.tables.DEFAULT.map(n => n.dimension[0])),
            d = i.hierarchy({
              children: o.buildHierarchy(n.tables.DEFAULT, n.fields),
            });
          d.sum(n => n.value), i.partition().size([2 * Math.PI, l])(d);
          const p = i.arc();
          s.append('g')
            .attr('transform', `translate(${f / 2}, ${c / 2})`)
            .selectAll('path')
            .data(d.descendants().slice(1))
            .enter()
            .append('path')
            .attr('d', n =>
              p({
                innerRadius: n.y0,
                outerRadius: n.y1,
                startAngle: n.x0,
                endAngle: n.x1,
              })
            )
            .attr('fill', n =>
              (n =>
                1 === n.depth
                  ? h(n.data.name)
                  : 2 === n.depth
                  ? h(n.parent.data.name)
                  : 3 === n.depth
                  ? h(n.parent.parent.data.name)
                  : 4 === n.depth
                  ? h(n.parent.parent.parent.data.name)
                  : void 0)(n)
            )
            .attr('stroke', 'white')
            .append('title')
            .text(n => n.data.name);
        });
    r.subscribeToData(u, {transform: r.objectTransform});
  },
  function(n, t, e) {
    'use strict';
    var r =
      (this && this.__assign) ||
      function() {
        return (r =
          Object.assign ||
          function(n) {
            for (var t, e = 1, r = arguments.length; e < r; e++)
              for (var i in (t = arguments[e]))
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
            return n;
          }).apply(this, arguments);
      };
    Object.defineProperty(t, '__esModule', {value: !0});
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
    var i = e(9),
      o = e(4);
    !(function(n) {
      for (var e in n) t.hasOwnProperty(e) || (t[e] = n[e]);
    })(e(4)),
      (t.getWidth = function() {
        return document.body.clientWidth;
      }),
      (t.getHeight = function() {
        return document.documentElement.clientHeight;
      }),
      (t.getComponentId = function() {
        var n = i(window.location.href, !0).query;
        if (n.dscId) return n.dscId;
        throw new Error(
          'dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new'
        );
      }),
      (t.parseImage = function(n) {
        var t = n.split('  '),
          e = t[0],
          r = t[1];
        return {altText: t[2], originalUrl: e, proxiedUrl: r};
      });
    var u = function(n) {
        return (
          n.type === o.ConfigDataElementType.DIMENSION ||
          n.type === o.ConfigDataElementType.METRIC
        );
      },
      a = function(n) {
        return n === o.ConfigDataElementType.DIMENSION ? -1 : 1;
      },
      c = function(n) {
        var t = [];
        n.config.data.forEach(function(n) {
          n.elements.forEach(function(n) {
            t.push(n);
          });
        });
        var e,
          r = t.filter(u),
          i =
            ((e = function(n, t) {
              return a(n.type) - a(t.type);
            }),
            r
              .map(function(n, t) {
                return {item: n, index: t};
              })
              .sort(function(n, t) {
                return e(n.item, t.item) || n.index - t.index;
              })
              .map(function(n) {
                return n.item;
              })),
          o = [];
        return (
          i.forEach(function(n) {
            n.value.forEach(function() {
              return o.push(n.id);
            });
          }),
          o
        );
      },
      f = function(n) {
        var t,
          e = c(n),
          r = (((t = {})[o.TableType.DEFAULT] = []), t);
        return (
          n.dataResponse.tables.forEach(function(n) {
            var t = n.rows.map(
              (function(n) {
                return function(t) {
                  var e,
                    r,
                    i = {};
                  return (
                    ((e = t),
                    (r = n),
                    e.length < r.length
                      ? e.map(function(n, t) {
                          return [n, r[t]];
                        })
                      : r.map(function(n, t) {
                          return [e[t], n];
                        })).forEach(function(n) {
                      var t = n[0],
                        e = n[1];
                      void 0 === i[e] && (i[e] = []), i[e].push(t);
                    }, {}),
                    i
                  );
                };
              })(e)
            );
            r[n.id] = t;
          }),
          r
        );
      },
      s = function(n) {
        var e,
          i = t.fieldsByConfigId(n),
          u = c(n),
          a = {},
          f = u.map(function(n) {
            void 0 === a[n] ? (a[n] = 0) : a[n]++;
            var t = a[n],
              e = i[n][t];
            return r({}, e, {configId: n});
          }),
          s = (((e = {})[o.TableType.DEFAULT] = {headers: [], rows: []}), e);
        return (
          n.dataResponse.tables.forEach(function(n) {
            s[n.id] = {headers: f, rows: n.rows};
          }),
          s
        );
      };
    t.fieldsByConfigId = function(n) {
      var t = (function(n) {
          return n.fields.reduce(function(n, t) {
            return (n[t.id] = t), n;
          }, {});
        })(n),
        e = {};
      return (
        n.config.data.forEach(function(n) {
          n.elements.forEach(function(n) {
            e[n.id] = n.value.map(function(n) {
              return t[n];
            });
          });
        }),
        e
      );
    };
    var l = function(n) {
        var t = {};
        return (
          (n.config.style || []).forEach(function(n) {
            n.elements.forEach(function(n) {
              if (void 0 !== t[n.id])
                throw new Error(
                  "styleIds must be unique. Your styleId: '" +
                    n.id +
                    "' is used more than once."
                );
              t[n.id] = {value: n.value, defaultValue: n.defaultValue};
            });
          }, {}),
          t
        );
      },
      h = function(n) {
        return n.config.themeStyle;
      },
      d = function(n) {
        switch (n) {
          case o.DSInteractionType.FILTER:
            return o.InteractionType.FILTER;
        }
      },
      p = function(n) {
        var t = n.config.interactions;
        return void 0 === t
          ? {}
          : t.reduce(function(n, t) {
              var e = t.supportedActions.map(d),
                r = {type: d(t.value.type), data: t.value.data};
              return (n[t.id] = {value: r, supportedActions: e}), n;
            }, {});
      };
    (t.tableTransform = function(n) {
      return {
        tables: s(n),
        fields: t.fieldsByConfigId(n),
        style: l(n),
        theme: h(n),
        interactions: p(n),
      };
    }),
      (t.objectTransform = function(n) {
        return {
          tables: f(n),
          fields: t.fieldsByConfigId(n),
          style: l(n),
          theme: h(n),
          interactions: p(n),
        };
      }),
      (t.subscribeToData = function(n, e) {
        if (
          e.transform === t.tableTransform ||
          e.transform === t.objectTransform
        ) {
          var r = function(t) {
            t.data.type === o.MessageType.RENDER
              ? n(e.transform(t.data))
              : console.error(
                  'MessageType: ' +
                    t.data.type +
                    ' is not supported by this version of the library.'
                );
          };
          window.addEventListener('message', r);
          var i = {
            componentId: t.getComponentId(),
            type: o.ToDSMessageType.VIZ_READY,
          };
          return (
            window.parent.postMessage(i, '*'),
            function() {
              return window.removeEventListener('message', r);
            }
          );
        }
        throw new Error('Only the built in transform functions are supported.');
      }),
      (t.sendInteraction = function(n, e, r) {
        var i = t.getComponentId(),
          u = {
            type: o.ToDSMessageType.INTERACTION,
            id: n,
            data: r,
            componentId: i,
          };
        window.parent.postMessage(u, '*');
      }),
      (t.clearInteraction = function(n, e) {
        t.sendInteraction(n, e, void 0);
      });
  },
  function(n, t, e) {
    'use strict';
    (function(t) {
      var r = e(11),
        i = e(12),
        o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        u = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
        a = new RegExp(
          '^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+'
        );
      function c(n) {
        return (n || '').toString().replace(a, '');
      }
      var f = [
          ['#', 'hash'],
          ['?', 'query'],
          function(n) {
            return n.replace('\\', '/');
          },
          ['/', 'pathname'],
          ['@', 'auth', 1],
          [NaN, 'host', void 0, 1, 1],
          [/:(\d+)$/, 'port', void 0, 1],
          [NaN, 'hostname', void 0, 1, 1],
        ],
        s = {hash: 1, query: 1};
      function l(n) {
        var e,
          r =
            ('undefined' != typeof window
              ? window
              : void 0 !== t
              ? t
              : 'undefined' != typeof self
              ? self
              : {}
            ).location || {},
          i = {},
          u = typeof (n = n || r);
        if ('blob:' === n.protocol) i = new d(unescape(n.pathname), {});
        else if ('string' === u) for (e in ((i = new d(n, {})), s)) delete i[e];
        else if ('object' === u) {
          for (e in n) e in s || (i[e] = n[e]);
          void 0 === i.slashes && (i.slashes = o.test(n.href));
        }
        return i;
      }
      function h(n) {
        n = c(n);
        var t = u.exec(n);
        return {
          protocol: t[1] ? t[1].toLowerCase() : '',
          slashes: !!t[2],
          rest: t[3],
        };
      }
      function d(n, t, e) {
        if (((n = c(n)), !(this instanceof d))) return new d(n, t, e);
        var o,
          u,
          a,
          s,
          p,
          v,
          m = f.slice(),
          y = typeof t,
          g = this,
          _ = 0;
        for (
          'object' !== y && 'string' !== y && ((e = t), (t = null)),
            e && 'function' != typeof e && (e = i.parse),
            t = l(t),
            o = !(u = h(n || '')).protocol && !u.slashes,
            g.slashes = u.slashes || (o && t.slashes),
            g.protocol = u.protocol || t.protocol || '',
            n = u.rest,
            u.slashes || (m[3] = [/(.*)/, 'pathname']);
          _ < m.length;
          _++
        )
          'function' != typeof (s = m[_])
            ? ((a = s[0]),
              (v = s[1]),
              a != a
                ? (g[v] = n)
                : 'string' == typeof a
                ? ~(p = n.indexOf(a)) &&
                  ('number' == typeof s[2]
                    ? ((g[v] = n.slice(0, p)), (n = n.slice(p + s[2])))
                    : ((g[v] = n.slice(p)), (n = n.slice(0, p))))
                : (p = a.exec(n)) && ((g[v] = p[1]), (n = n.slice(0, p.index))),
              (g[v] = g[v] || (o && s[3] && t[v]) || ''),
              s[4] && (g[v] = g[v].toLowerCase()))
            : (n = s(n));
        e && (g.query = e(g.query)),
          o &&
            t.slashes &&
            '/' !== g.pathname.charAt(0) &&
            ('' !== g.pathname || '' !== t.pathname) &&
            (g.pathname = (function(n, t) {
              if ('' === n) return t;
              for (
                var e = (t || '/')
                    .split('/')
                    .slice(0, -1)
                    .concat(n.split('/')),
                  r = e.length,
                  i = e[r - 1],
                  o = !1,
                  u = 0;
                r--;

              )
                '.' === e[r]
                  ? e.splice(r, 1)
                  : '..' === e[r]
                  ? (e.splice(r, 1), u++)
                  : u && (0 === r && (o = !0), e.splice(r, 1), u--);
              return (
                o && e.unshift(''),
                ('.' !== i && '..' !== i) || e.push(''),
                e.join('/')
              );
            })(g.pathname, t.pathname)),
          r(g.port, g.protocol) || ((g.host = g.hostname), (g.port = '')),
          (g.username = g.password = ''),
          g.auth &&
            ((s = g.auth.split(':')),
            (g.username = s[0] || ''),
            (g.password = s[1] || '')),
          (g.origin =
            g.protocol && g.host && 'file:' !== g.protocol
              ? g.protocol + '//' + g.host
              : 'null'),
          (g.href = g.toString());
      }
      (d.prototype = {
        set: function(n, t, e) {
          var o = this;
          switch (n) {
            case 'query':
              'string' == typeof t && t.length && (t = (e || i.parse)(t)),
                (o[n] = t);
              break;
            case 'port':
              (o[n] = t),
                r(t, o.protocol)
                  ? t && (o.host = o.hostname + ':' + t)
                  : ((o.host = o.hostname), (o[n] = ''));
              break;
            case 'hostname':
              (o[n] = t), o.port && (t += ':' + o.port), (o.host = t);
              break;
            case 'host':
              (o[n] = t),
                /:\d+$/.test(t)
                  ? ((t = t.split(':')),
                    (o.port = t.pop()),
                    (o.hostname = t.join(':')))
                  : ((o.hostname = t), (o.port = ''));
              break;
            case 'protocol':
              (o.protocol = t.toLowerCase()), (o.slashes = !e);
              break;
            case 'pathname':
            case 'hash':
              if (t) {
                var u = 'pathname' === n ? '/' : '#';
                o[n] = t.charAt(0) !== u ? u + t : t;
              } else o[n] = t;
              break;
            default:
              o[n] = t;
          }
          for (var a = 0; a < f.length; a++) {
            var c = f[a];
            c[4] && (o[c[1]] = o[c[1]].toLowerCase());
          }
          return (
            (o.origin =
              o.protocol && o.host && 'file:' !== o.protocol
                ? o.protocol + '//' + o.host
                : 'null'),
            (o.href = o.toString()),
            o
          );
        },
        toString: function(n) {
          (n && 'function' == typeof n) || (n = i.stringify);
          var t,
            e = this,
            r = e.protocol;
          r && ':' !== r.charAt(r.length - 1) && (r += ':');
          var o = r + (e.slashes ? '//' : '');
          return (
            e.username &&
              ((o += e.username),
              e.password && (o += ':' + e.password),
              (o += '@')),
            (o += e.host + e.pathname),
            (t = 'object' == typeof e.query ? n(e.query) : e.query) &&
              (o += '?' !== t.charAt(0) ? '?' + t : t),
            e.hash && (o += e.hash),
            o
          );
        },
      }),
        (d.extractProtocol = h),
        (d.location = l),
        (d.trimLeft = c),
        (d.qs = i),
        (n.exports = d);
    }.call(this, e(10)));
  },
  function(n, t) {
    var e;
    e = (function() {
      return this;
    })();
    try {
      e = e || new Function('return this')();
    } catch (n) {
      'object' == typeof window && (e = window);
    }
    n.exports = e;
  },
  function(n, t, e) {
    'use strict';
    n.exports = function(n, t) {
      if (((t = t.split(':')[0]), !(n = +n))) return !1;
      switch (t) {
        case 'http':
        case 'ws':
          return 80 !== n;
        case 'https':
        case 'wss':
          return 443 !== n;
        case 'ftp':
          return 21 !== n;
        case 'gopher':
          return 70 !== n;
        case 'file':
          return !1;
      }
      return 0 !== n;
    };
  },
  function(n, t, e) {
    'use strict';
    var r,
      i = Object.prototype.hasOwnProperty;
    function o(n) {
      try {
        return decodeURIComponent(n.replace(/\+/g, ' '));
      } catch (n) {
        return null;
      }
    }
    (t.stringify = function(n, t) {
      t = t || '';
      var e,
        o,
        u = [];
      for (o in ('string' != typeof t && (t = '?'), n))
        if (i.call(n, o)) {
          if (
            ((e = n[o]) || (null !== e && e !== r && !isNaN(e)) || (e = ''),
            (o = encodeURIComponent(o)),
            (e = encodeURIComponent(e)),
            null === o || null === e)
          )
            continue;
          u.push(o + '=' + e);
        }
      return u.length ? t + u.join('&') : '';
    }),
      (t.parse = function(n) {
        for (var t, e = /([^=?&]+)=?([^&]*)/g, r = {}; (t = e.exec(n)); ) {
          var i = o(t[1]),
            u = o(t[2]);
          null === i || null === u || i in r || (r[i] = u);
        }
        return r;
      });
  },
  function(n, t, e) {
    'use strict';
    Object.defineProperty(t, '__esModule', {value: !0});
    const r = Object.assign({}, e(5), e(2), e(3), e(6));
    t.buildHierarchy = (n, e, i = 0) => {
      const o = n[0].dimension.length;
      if (i < o - 1) {
        const o = r.group(n, n => n.dimension[i]);
        return Array.from(o.keys()).map(n => ({
          name: n,
          dimId: e.dimension[i].id,
          children: t.buildHierarchy(o.get(n), e, i + 1),
        }));
      }
      {
        const t = r.group(n, n => n.dimension[i]);
        return Array.from(t.keys()).map(n => ({
          name: n,
          dimId: e.dimension[i].id,
          value: t.get(n).reduce((n, t) => n + t.metric[0], 0),
        }));
      }
    };
  },
  function(n, t, e) {
    'use strict';
    Object.defineProperty(t, '__esModule', {value: !0}),
      (t.message = {
        tables: {
          DEFAULT: [
            {dimension: ['Americas', 'United States', 'male'], metric: [12688]},
            {
              dimension: ['Americas', 'United States', 'female'],
              metric: [5860],
            },
            {dimension: ['Asia', 'India', 'male'], metric: [1410]},
            {dimension: ['Asia', 'India', 'female'], metric: [793]},
            {dimension: ['Europe', 'United Kingdom', 'male'], metric: [682]},
            {dimension: ['Americas', 'Canada', 'male'], metric: [635]},
            {dimension: ['Europe', 'Germany', 'male'], metric: [594]},
            {dimension: ['Asia', 'Japan', 'male'], metric: [593]},
            {dimension: ['Asia', 'Taiwan', 'male'], metric: [570]},
            {dimension: ['Asia', 'Taiwan', 'female'], metric: [540]},
            {dimension: ['Americas', 'Brazil', 'male'], metric: [454]},
            {dimension: ['Europe', 'France', 'male'], metric: [443]},
            {dimension: ['Europe', 'Spain', 'male'], metric: [396]},
            {dimension: ['Europe', 'Spain', 'female'], metric: [363]},
            {dimension: ['Asia', 'Singapore', 'female'], metric: [348]},
            {dimension: ['Oceania', 'Australia', 'male'], metric: [346]},
            {dimension: ['Europe', 'Italy', 'male'], metric: [341]},
            {dimension: ['Europe', 'United Kingdom', 'female'], metric: [312]},
            {dimension: ['Americas', 'Canada', 'female'], metric: [302]},
            {dimension: ['Asia', 'Singapore', 'male'], metric: [291]},
            {dimension: ['Oceania', 'Australia', 'female'], metric: [265]},
            {dimension: ['Americas', 'Brazil', 'female'], metric: [246]},
            {dimension: ['Americas', 'Colombia', 'male'], metric: [236]},
            {dimension: ['Americas', 'Mexico', 'male'], metric: [233]},
            {dimension: ['Europe', 'Germany', 'female'], metric: [229]},
            {dimension: ['Europe', 'France', 'female'], metric: [220]},
            {dimension: ['Europe', 'Netherlands', 'male'], metric: [218]},
            {dimension: ['Europe', 'Poland', 'male'], metric: [216]},
            {dimension: ['Asia', 'Indonesia', 'male'], metric: [211]},
            {dimension: ['Asia', 'South Korea', 'male'], metric: [204]},
            {dimension: ['Asia', 'Japan', 'female'], metric: [202]},
            {dimension: ['Europe', 'Poland', 'female'], metric: [172]},
            {dimension: ['Europe', 'Italy', 'female'], metric: [171]},
            {dimension: ['Asia', 'China', 'male'], metric: [167]},
            {dimension: ['Asia', 'Turkey', 'male'], metric: [162]},
            {dimension: ['Europe', 'Ireland', 'female'], metric: [158]},
            {dimension: ['Asia', 'China', 'female'], metric: [155]},
            {dimension: ['Europe', 'Ireland', 'male'], metric: [153]},
            {dimension: ['Asia', 'South Korea', 'female'], metric: [151]},
            {dimension: ['Americas', 'Colombia', 'female'], metric: [141]},
            {dimension: ['Europe', 'Russia', 'male'], metric: [140]},
            {dimension: ['Europe', 'Netherlands', 'female'], metric: [137]},
            {dimension: ['Europe', 'Switzerland', 'male'], metric: [130]},
            {dimension: ['Asia', 'Hong Kong', 'male'], metric: [120]},
            {dimension: ['Asia', 'Thailand', 'male'], metric: [119]},
            {dimension: ['Asia', 'Israel', 'male'], metric: [117]},
            {dimension: ['Americas', 'Argentina', 'male'], metric: [114]},
            {dimension: ['Europe', 'Russia', 'female'], metric: [112]},
            {dimension: ['Americas', 'Mexico', 'female'], metric: [103]},
            {dimension: ['Europe', 'Belgium', 'male'], metric: [102]},
            {dimension: ['Americas', 'Peru', 'male'], metric: [101]},
            {dimension: ['Europe', 'Ukraine', 'male'], metric: [98]},
            {dimension: ['Europe', 'Sweden', 'male'], metric: [97]},
            {dimension: ['Asia', 'Vietnam', 'male'], metric: [97]},
            {dimension: ['Asia', 'Malaysia', 'male'], metric: [90]},
            {dimension: ['Americas', 'Argentina', 'female'], metric: [88]},
            {dimension: ['Asia', 'Philippines', 'male'], metric: [85]},
            {dimension: ['Europe', 'Portugal', 'female'], metric: [85]},
            {dimension: ['Europe', 'Portugal', 'male'], metric: [82]},
            {dimension: ['Asia', 'Sri Lanka', 'male'], metric: [81]},
            {dimension: ['Europe', 'Sweden', 'female'], metric: [73]},
            {dimension: ['Europe', 'Czechia', 'male'], metric: [72]},
            {dimension: ['Asia', 'Indonesia', 'female'], metric: [70]},
            {dimension: ['Asia', 'Hong Kong', 'female'], metric: [68]},
            {dimension: ['Americas', 'Chile', 'male'], metric: [68]},
            {dimension: ['Europe', 'Austria', 'male'], metric: [61]},
            {dimension: ['Europe', 'Belgium', 'female'], metric: [60]},
            {dimension: ['Europe', 'Greece', 'male'], metric: [59]},
            {dimension: ['Oceania', 'New Zealand', 'male'], metric: [59]},
            {dimension: ['Africa', 'South Africa', 'male'], metric: [58]},
            {dimension: ['Asia', 'Vietnam', 'female'], metric: [56]},
            {dimension: ['Europe', 'Ukraine', 'female'], metric: [56]},
            {dimension: ['Europe', 'Switzerland', 'female'], metric: [56]},
            {dimension: ['Europe', 'Denmark', 'male'], metric: [54]},
            {dimension: ['Asia', 'Malaysia', 'female'], metric: [53]},
            {dimension: ['Europe', 'Romania', 'male'], metric: [52]},
            {dimension: ['Americas', 'Peru', 'female'], metric: [52]},
            {dimension: ['Asia', 'Philippines', 'female'], metric: [49]},
            {dimension: ['Europe', 'Hungary', 'male'], metric: [49]},
            {dimension: ['Africa', 'Egypt', 'male'], metric: [48]},
            {dimension: ['Asia', 'Turkey', 'female'], metric: [47]},
            {dimension: ['Europe', 'Denmark', 'female'], metric: [46]},
            {dimension: ['Asia', 'Pakistan', 'male'], metric: [46]},
            {dimension: ['Africa', 'South Africa', 'female'], metric: [43]},
            {dimension: ['Africa', 'Nigeria', 'male'], metric: [42]},
            {dimension: ['Asia', 'Thailand', 'female'], metric: [41]},
            {dimension: ['Europe', 'Norway', 'male'], metric: [40]},
            {dimension: ['Asia', 'Bangladesh', 'male'], metric: [38]},
            {dimension: ['Africa', 'Morocco', 'male'], metric: [38]},
            {dimension: ['Asia', 'Israel', 'female'], metric: [38]},
            {dimension: ['Europe', 'Slovakia', 'male'], metric: [37]},
            {dimension: ['Asia', 'United Arab Emirates', 'male'], metric: [36]},
            {dimension: ['(not set)', '(not set)', 'male'], metric: [33]},
            {dimension: ['Europe', 'Bulgaria', 'male'], metric: [33]},
            {dimension: ['Europe', 'Bulgaria', 'female'], metric: [33]},
            {
              dimension: ['Asia', 'United Arab Emirates', 'female'],
              metric: [32],
            },
            {dimension: ['Europe', 'Austria', 'female'], metric: [31]},
            {dimension: ['Europe', 'Czechia', 'female'], metric: [27]},
            {dimension: ['Europe', 'Greece', 'female'], metric: [26]},
            {dimension: ['Europe', 'Norway', 'female'], metric: [26]},
            {dimension: ['Europe', 'Finland', 'female'], metric: [25]},
            {dimension: ['Oceania', 'New Zealand', 'female'], metric: [25]},
            {dimension: ['Europe', 'Belarus', 'male'], metric: [23]},
            {dimension: ['Americas', 'Guatemala', 'male'], metric: [23]},
            {dimension: ['Asia', 'Sri Lanka', 'female'], metric: [21]},
            {dimension: ['Europe', 'Hungary', 'female'], metric: [21]},
            {dimension: ['Asia', 'Saudi Arabia', 'male'], metric: [21]},
            {dimension: ['Europe', 'Belarus', 'female'], metric: [20]},
            {dimension: ['Africa', 'Kenya', 'male'], metric: [19]},
            {dimension: ['Europe', 'Finland', 'male'], metric: [19]},
            {dimension: ['Africa', 'Nigeria', 'female'], metric: [18]},
            {dimension: ['Asia', 'Pakistan', 'female'], metric: [18]},
            {dimension: ['Africa', 'Egypt', 'female'], metric: [17]},
            {dimension: ['Europe', 'Romania', 'female'], metric: [16]},
            {dimension: ['Europe', 'Serbia', 'male'], metric: [16]},
            {dimension: ['Americas', 'Ecuador', 'female'], metric: [15]},
            {dimension: ['Americas', 'Chile', 'female'], metric: [15]},
            {dimension: ['Americas', 'Bolivia', 'male'], metric: [14]},
            {dimension: ['Africa', 'Algeria', 'male'], metric: [14]},
            {dimension: ['Europe', 'Croatia', 'female'], metric: [14]},
            {dimension: ['(not set)', '(not set)', 'female'], metric: [13]},
            {dimension: ['Europe', 'Lithuania', 'female'], metric: [13]},
            {dimension: ['Europe', 'Croatia', 'male'], metric: [13]},
            {dimension: ['Europe', 'Slovakia', 'female'], metric: [11]},
            {dimension: ['Europe', 'Serbia', 'female'], metric: [11]},
            {
              dimension: ['Americas', 'Dominican Republic', 'male'],
              metric: [11],
            },
          ],
        },
        fields: {
          dimension: [
            {
              id: 'qt_t0gbpjnmxb',
              name: 'Continent',
              type: 'CONTINENT',
              concept: 'DIMENSION',
            },
            {
              id: 'qt_sh17jjnmxb',
              name: 'Country',
              type: 'COUNTRY',
              concept: 'DIMENSION',
            },
            {
              id: 'qt_cd6ktjnmxb',
              name: 'Gender',
              type: 'TEXT',
              concept: 'DIMENSION',
            },
          ],
          metric: [
            {
              id: 'qt_anz5djnmxb',
              name: 'Sessions',
              type: 'NUMBER',
              concept: 'METRIC',
            },
          ],
        },
        style: {},
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
        interactions: {},
      });
  },
]);
