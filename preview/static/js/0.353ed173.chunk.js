(window["webpackJsonppurple-react-free"] =
  window["webpackJsonppurple-react-free"] || []).push([
  [0],
  Array(130).concat([
    function (t, e, n) {
      var i = n(164),
        r = "object" == typeof self && self && self.Object === Object && self,
        a = i || r || Function("return this")();
      t.exports = a;
    },
    function (t, e) {
      var n = Array.isArray;
      t.exports = n;
    },
    function (t, e, n) {
      var i = n(207),
        r = n(212);
      t.exports = function (t, e) {
        var n = r(t, e);
        return i(n) ? n : void 0;
      };
    },
    function (t, e, n) {
      var i = n(138),
        r = n(208),
        a = n(209),
        o = "[object Null]",
        s = "[object Undefined]",
        l = i ? i.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? s
            : o
          : l && l in Object(t)
          ? r(t)
          : a(t);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    ,
    function (t, e, n) {
      var i = n(197),
        r = n(198),
        a = n(199),
        o = n(200),
        s = n(201);
      function l(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }
      (l.prototype.clear = i),
        (l.prototype.delete = r),
        (l.prototype.get = a),
        (l.prototype.has = o),
        (l.prototype.set = s),
        (t.exports = l);
    },
    function (t, e, n) {
      var i = n(162);
      t.exports = function (t, e) {
        for (var n = t.length; n--; ) if (i(t[n][0], e)) return n;
        return -1;
      };
    },
    function (t, e, n) {
      var i = n(130).Symbol;
      t.exports = i;
    },
    function (t, e, n) {
      var i = n(132)(Object, "create");
      t.exports = i;
    },
    function (t, e, n) {
      var i = n(221);
      t.exports = function (t, e) {
        var n = t.__data__;
        return i(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
      };
    },
    function (t, e, n) {
      var i = n(152),
        r = 1 / 0;
      t.exports = function (t) {
        if ("string" == typeof t || i(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -r ? "-0" : e;
      };
    },
    ,
    ,
    function (t, e) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    function (t, e, n) {
      var i = n(196),
        r = n(134);
      t.exports = function t(e, n, a, o, s) {
        return (
          e === n ||
          (null == e || null == n || (!r(e) && !r(n))
            ? e !== e && n !== n
            : i(e, n, a, o, t, s))
        );
      };
    },
    function (t, e, n) {
      var i = n(132)(n(130), "Map");
      t.exports = i;
    },
    function (t, e) {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    function (t, e, n) {
      var i = n(213),
        r = n(220),
        a = n(222),
        o = n(223),
        s = n(224);
      function l(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }
      (l.prototype.clear = i),
        (l.prototype.delete = r),
        (l.prototype.get = a),
        (l.prototype.has = o),
        (l.prototype.set = s),
        (t.exports = l);
    },
    function (t, e, n) {
      var i = n(241),
        r = n(248),
        a = n(171);
      t.exports = function (t) {
        return a(t) ? i(t) : r(t);
      };
    },
    function (t, e) {
      var n = 9007199254740991;
      t.exports = function (t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
      };
    },
    function (t, e, n) {
      var i = n(131),
        r = n(152),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        o = /^\w*$/;
      t.exports = function (t, e) {
        if (i(t)) return !1;
        var n = typeof t;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != t &&
            !r(t)
          ) ||
          o.test(t) ||
          !a.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    function (t, e, n) {
      var i = n(133),
        r = n(134),
        a = "[object Symbol]";
      t.exports = function (t) {
        return "symbol" == typeof t || (r(t) && i(t) == a);
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "b", function () {
          return x;
        }),
          n.d(e, "d", function () {
            return _;
          }),
          n.d(e, "c", function () {
            return w;
          }),
          n.d(e, "a", function () {
            return k;
          }),
          n.d(e, "e", function () {
            return M;
          });
        var i = n(0),
          r = n.n(i),
          a = n(20),
          o = n.n(a),
          s = n(160),
          l = n.n(s),
          u = n(195),
          c = n.n(u),
          d = n(257),
          h = n.n(d),
          f =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
              }
              return t;
            };
        function p(t, e) {
          var n = {};
          for (var i in t)
            e.indexOf(i) >= 0 ||
              (Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]));
          return n;
        }
        function g(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function m(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !e || ("object" !== typeof e && "function" !== typeof e)
            ? t
            : e;
        }
        function v(t, e) {
          if ("function" !== typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        }
        var y =
            "undefined" !== typeof t &&
            Object({
              NODE_ENV: "production",
              PUBLIC_URL: "/demo/purple-react-free/template/demo_1/preview",
            }) &&
            "production",
          b = (function (t) {
            function e() {
              g(this, e);
              var n = m(this, t.call(this));
              return (
                (n.handleOnClick = function (t) {
                  var e = n.chartInstance,
                    i = n.props,
                    r = i.getDatasetAtEvent,
                    a = i.getElementAtEvent,
                    o = i.getElementsAtEvent,
                    s = i.onElementsClick;
                  r && r(e.getDatasetAtEvent(t), t),
                    a && a(e.getElementAtEvent(t), t),
                    o && o(e.getElementsAtEvent(t), t),
                    s && s(e.getElementsAtEvent(t), t);
                }),
                (n.ref = function (t) {
                  n.element = t;
                }),
                (n.chartInstance = void 0),
                n
              );
            }
            return (
              v(e, t),
              (e.prototype.componentDidMount = function () {
                this.renderChart();
              }),
              (e.prototype.componentDidUpdate = function () {
                if (this.props.redraw)
                  return this.destroyChart(), void this.renderChart();
                this.updateChart();
              }),
              (e.prototype.shouldComponentUpdate = function (t) {
                var e = this.props,
                  n = (e.redraw, e.type),
                  i = e.options,
                  r = e.plugins,
                  a = e.legend,
                  o = e.height,
                  s = e.width;
                if (!0 === t.redraw) return !0;
                if (o !== t.height || s !== t.width) return !0;
                if (n !== t.type) return !0;
                if (!c()(a, t.legend)) return !0;
                if (!c()(i, t.options)) return !0;
                var l = this.transformDataProp(t);
                return !c()(this.shadowDataProp, l) || !c()(r, t.plugins);
              }),
              (e.prototype.componentWillUnmount = function () {
                this.destroyChart();
              }),
              (e.prototype.transformDataProp = function (t) {
                var e = t.data;
                return "function" == typeof e ? e(this.element) : e;
              }),
              (e.prototype.memoizeDataProps = function () {
                if (this.props.data) {
                  var t = this.transformDataProp(this.props);
                  return (
                    (this.shadowDataProp = f({}, t, {
                      datasets:
                        t.datasets &&
                        t.datasets.map(function (t) {
                          return f({}, t);
                        }),
                    })),
                    this.saveCurrentDatasets(),
                    t
                  );
                }
              }),
              (e.prototype.checkDatasets = function (t) {
                var n = "production" !== y && "prod" !== y,
                  i = this.props.datasetKeyProvider !== e.getLabelAsKey,
                  r = t.length > 1;
                if (n && r && !i) {
                  var a = !1;
                  t.forEach(function (t) {
                    t.label || (a = !0);
                  }),
                    a &&
                      console.error(
                        '[react-chartjs-2] Warning: Each dataset needs a unique key. By default, the "label" property on each dataset is used. Alternatively, you may provide a "datasetKeyProvider" as a prop that returns a unique key.'
                      );
                }
              }),
              (e.prototype.getCurrentDatasets = function () {
                return (
                  (this.chartInstance &&
                    this.chartInstance.config.data &&
                    this.chartInstance.config.data.datasets) ||
                  []
                );
              }),
              (e.prototype.saveCurrentDatasets = function () {
                var t = this;
                (this.datasets = this.datasets || {}),
                  this.getCurrentDatasets().forEach(function (e) {
                    t.datasets[t.props.datasetKeyProvider(e)] = e;
                  });
              }),
              (e.prototype.updateChart = function () {
                var t = this,
                  e = this.props.options,
                  n = this.memoizeDataProps(this.props);
                if (this.chartInstance) {
                  e &&
                    (this.chartInstance.options = l.a.helpers.configMerge(
                      this.chartInstance.options,
                      e
                    ));
                  var i = this.getCurrentDatasets(),
                    r = n.datasets || [];
                  this.checkDatasets(i);
                  var a = h()(i, this.props.datasetKeyProvider);
                  this.chartInstance.config.data.datasets = r.map(function (e) {
                    var n = a[t.props.datasetKeyProvider(e)];
                    if (n && n.type === e.type && e.data) {
                      n.data.splice(e.data.length),
                        e.data.forEach(function (t, i) {
                          n.data[i] = e.data[i];
                        });
                      e.data;
                      var i = p(e, ["data"]);
                      return f({}, n, i);
                    }
                    return e;
                  });
                  n.datasets;
                  var o = p(n, ["datasets"]);
                  (this.chartInstance.config.data = f(
                    {},
                    this.chartInstance.config.data,
                    o
                  )),
                    this.chartInstance.update();
                }
              }),
              (e.prototype.renderChart = function () {
                var t = this.props,
                  n = t.options,
                  i = t.legend,
                  r = t.type,
                  a = t.plugins,
                  o = this.element,
                  s = this.memoizeDataProps();
                "undefined" === typeof i ||
                  c()(e.defaultProps.legend, i) ||
                  (n.legend = i),
                  (this.chartInstance = new l.a(o, {
                    type: r,
                    data: s,
                    options: n,
                    plugins: a,
                  }));
              }),
              (e.prototype.destroyChart = function () {
                this.saveCurrentDatasets();
                var t = Object.values(this.datasets);
                (this.chartInstance.config.data.datasets = t),
                  this.chartInstance.destroy();
              }),
              (e.prototype.render = function () {
                var t = this.props,
                  e = t.height,
                  n = t.width,
                  i = t.id;
                return r.a.createElement("canvas", {
                  ref: this.ref,
                  height: e,
                  width: n,
                  id: i,
                  onClick: this.handleOnClick,
                });
              }),
              e
            );
          })(r.a.Component);
        (b.getLabelAsKey = function (t) {
          return t.label;
        }),
          (b.propTypes = {
            data: o.a.oneOfType([o.a.object, o.a.func]).isRequired,
            getDatasetAtEvent: o.a.func,
            getElementAtEvent: o.a.func,
            getElementsAtEvent: o.a.func,
            height: o.a.number,
            legend: o.a.object,
            onElementsClick: o.a.func,
            options: o.a.object,
            plugins: o.a.arrayOf(o.a.object),
            redraw: o.a.bool,
            type: function (t, e, n) {
              if (!l.a.controllers[t[e]])
                return new Error(
                  "Invalid chart type `" + t[e] + "` supplied to `" + n + "`."
                );
            },
            width: o.a.number,
            datasetKeyProvider: o.a.func,
          }),
          (b.defaultProps = {
            legend: { display: !0, position: "bottom" },
            type: "doughnut",
            height: 150,
            width: 300,
            redraw: !1,
            options: {},
            datasetKeyProvider: b.getLabelAsKey,
          });
        var x = (function (t) {
            function e() {
              return g(this, e), m(this, t.apply(this, arguments));
            }
            return (
              v(e, t),
              (e.prototype.render = function () {
                var t = this;
                return r.a.createElement(
                  b,
                  f({}, this.props, {
                    ref: function (e) {
                      return (t.chartInstance = e && e.chartInstance);
                    },
                    type: "doughnut",
                  })
                );
              }),
              e
            );
          })(r.a.Component),
          _ = (function (t) {
            function e() {
              return g(this, e), m(this, t.apply(this, arguments));
            }
            return (
              v(e, t),
              (e.prototype.render = function () {
                var t = this;
                return r.a.createElement(
                  b,
                  f({}, this.props, {
                    ref: function (e) {
                      return (t.chartInstance = e && e.chartInstance);
                    },
                    type: "pie",
                  })
                );
              }),
              e
            );
          })(r.a.Component),
          w = (function (t) {
            function e() {
              return g(this, e), m(this, t.apply(this, arguments));
            }
            return (
              v(e, t),
              (e.prototype.render = function () {
                var t = this;
                return r.a.createElement(
                  b,
                  f({}, this.props, {
                    ref: function (e) {
                      return (t.chartInstance = e && e.chartInstance);
                    },
                    type: "line",
                  })
                );
              }),
              e
            );
          })(r.a.Component),
          k = (function (t) {
            function e() {
              return g(this, e), m(this, t.apply(this, arguments));
            }
            return (
              v(e, t),
              (e.prototype.render = function () {
                var t = this;
                return r.a.createElement(
                  b,
                  f({}, this.props, {
                    ref: function (e) {
                      return (t.chartInstance = e && e.chartInstance);
                    },
                    type: "bar",
                  })
                );
              }),
              e
            );
          })(r.a.Component),
          M =
            ((function (t) {
              function e() {
                return g(this, e), m(this, t.apply(this, arguments));
              }
              v(e, t),
                (e.prototype.render = function () {
                  var t = this;
                  return r.a.createElement(
                    b,
                    f({}, this.props, {
                      ref: function (e) {
                        return (t.chartInstance = e && e.chartInstance);
                      },
                      type: "horizontalBar",
                    })
                  );
                });
            })(r.a.Component),
            (function (t) {
              function e() {
                return g(this, e), m(this, t.apply(this, arguments));
              }
              v(e, t),
                (e.prototype.render = function () {
                  var t = this;
                  return r.a.createElement(
                    b,
                    f({}, this.props, {
                      ref: function (e) {
                        return (t.chartInstance = e && e.chartInstance);
                      },
                      type: "radar",
                    })
                  );
                });
            })(r.a.Component),
            (function (t) {
              function e() {
                return g(this, e), m(this, t.apply(this, arguments));
              }
              v(e, t),
                (e.prototype.render = function () {
                  var t = this;
                  return r.a.createElement(
                    b,
                    f({}, this.props, {
                      ref: function (e) {
                        return (t.chartInstance = e && e.chartInstance);
                      },
                      type: "polarArea",
                    })
                  );
                });
            })(r.a.Component),
            (function (t) {
              function e() {
                return g(this, e), m(this, t.apply(this, arguments));
              }
              v(e, t),
                (e.prototype.render = function () {
                  var t = this;
                  return r.a.createElement(
                    b,
                    f({}, this.props, {
                      ref: function (e) {
                        return (t.chartInstance = e && e.chartInstance);
                      },
                      type: "bubble",
                    })
                  );
                });
            })(r.a.Component),
            (function (t) {
              function e() {
                return g(this, e), m(this, t.apply(this, arguments));
              }
              return (
                v(e, t),
                (e.prototype.render = function () {
                  var t = this;
                  return r.a.createElement(
                    b,
                    f({}, this.props, {
                      ref: function (e) {
                        return (t.chartInstance = e && e.chartInstance);
                      },
                      type: "scatter",
                    })
                  );
                }),
                e
              );
            })(r.a.Component));
        l.a.defaults;
      }.call(this, n(193)));
    },
    function (t, e, n) {
      t.exports = (function (t) {
        "use strict";
        t = t && t.hasOwnProperty("default") ? t.default : t;
        var e = {
          rgb2hsl: n,
          rgb2hsv: i,
          rgb2hwb: a,
          rgb2cmyk: o,
          rgb2keyword: s,
          rgb2xyz: l,
          rgb2lab: u,
          rgb2lch: function (t) {
            return y(u(t));
          },
          hsl2rgb: c,
          hsl2hsv: function (t) {
            var e = t[0],
              n = t[1] / 100,
              i = t[2] / 100;
            return 0 === i
              ? [0, 0, 0]
              : [
                  e,
                  ((2 * (n *= (i *= 2) <= 1 ? i : 2 - i)) / (i + n)) * 100,
                  ((i + n) / 2) * 100,
                ];
          },
          hsl2hwb: function (t) {
            return a(c(t));
          },
          hsl2cmyk: function (t) {
            return o(c(t));
          },
          hsl2keyword: function (t) {
            return s(c(t));
          },
          hsv2rgb: d,
          hsv2hsl: function (t) {
            var e,
              n,
              i = t[0],
              r = t[1] / 100,
              a = t[2] / 100;
            return (
              (e = r * a),
              [
                i,
                100 * (e = (e /= (n = (2 - r) * a) <= 1 ? n : 2 - n) || 0),
                100 * (n /= 2),
              ]
            );
          },
          hsv2hwb: function (t) {
            return a(d(t));
          },
          hsv2cmyk: function (t) {
            return o(d(t));
          },
          hsv2keyword: function (t) {
            return s(d(t));
          },
          hwb2rgb: h,
          hwb2hsl: function (t) {
            return n(h(t));
          },
          hwb2hsv: function (t) {
            return i(h(t));
          },
          hwb2cmyk: function (t) {
            return o(h(t));
          },
          hwb2keyword: function (t) {
            return s(h(t));
          },
          cmyk2rgb: f,
          cmyk2hsl: function (t) {
            return n(f(t));
          },
          cmyk2hsv: function (t) {
            return i(f(t));
          },
          cmyk2hwb: function (t) {
            return a(f(t));
          },
          cmyk2keyword: function (t) {
            return s(f(t));
          },
          keyword2rgb: w,
          keyword2hsl: function (t) {
            return n(w(t));
          },
          keyword2hsv: function (t) {
            return i(w(t));
          },
          keyword2hwb: function (t) {
            return a(w(t));
          },
          keyword2cmyk: function (t) {
            return o(w(t));
          },
          keyword2lab: function (t) {
            return u(w(t));
          },
          keyword2xyz: function (t) {
            return l(w(t));
          },
          xyz2rgb: p,
          xyz2lab: m,
          xyz2lch: function (t) {
            return y(m(t));
          },
          lab2xyz: v,
          lab2rgb: x,
          lab2lch: y,
          lch2lab: _,
          lch2xyz: function (t) {
            return v(_(t));
          },
          lch2rgb: function (t) {
            return x(_(t));
          },
        };
        function n(t) {
          var e,
            n,
            i = t[0] / 255,
            r = t[1] / 255,
            a = t[2] / 255,
            o = Math.min(i, r, a),
            s = Math.max(i, r, a),
            l = s - o;
          return (
            s == o
              ? (e = 0)
              : i == s
              ? (e = (r - a) / l)
              : r == s
              ? (e = 2 + (a - i) / l)
              : a == s && (e = 4 + (i - r) / l),
            (e = Math.min(60 * e, 360)) < 0 && (e += 360),
            (n = (o + s) / 2),
            [
              e,
              100 * (s == o ? 0 : n <= 0.5 ? l / (s + o) : l / (2 - s - o)),
              100 * n,
            ]
          );
        }
        function i(t) {
          var e,
            n,
            i = t[0],
            r = t[1],
            a = t[2],
            o = Math.min(i, r, a),
            s = Math.max(i, r, a),
            l = s - o;
          return (
            (n = 0 == s ? 0 : ((l / s) * 1e3) / 10),
            s == o
              ? (e = 0)
              : i == s
              ? (e = (r - a) / l)
              : r == s
              ? (e = 2 + (a - i) / l)
              : a == s && (e = 4 + (i - r) / l),
            (e = Math.min(60 * e, 360)) < 0 && (e += 360),
            [e, n, ((s / 255) * 1e3) / 10]
          );
        }
        function a(t) {
          var e = t[0],
            i = t[1],
            r = t[2];
          return [
            n(t)[0],
            (1 / 255) * Math.min(e, Math.min(i, r)) * 100,
            100 * (r = 1 - (1 / 255) * Math.max(e, Math.max(i, r))),
          ];
        }
        function o(t) {
          var e,
            n = t[0] / 255,
            i = t[1] / 255,
            r = t[2] / 255;
          return [
            100 *
              ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - r))) / (1 - e) || 0),
            100 * ((1 - i - e) / (1 - e) || 0),
            100 * ((1 - r - e) / (1 - e) || 0),
            100 * e,
          ];
        }
        function s(t) {
          return M[JSON.stringify(t)];
        }
        function l(t) {
          var e = t[0] / 255,
            n = t[1] / 255,
            i = t[2] / 255;
          return [
            100 *
              (0.4124 *
                (e =
                  e > 0.04045
                    ? Math.pow((e + 0.055) / 1.055, 2.4)
                    : e / 12.92) +
                0.3576 *
                  (n =
                    n > 0.04045
                      ? Math.pow((n + 0.055) / 1.055, 2.4)
                      : n / 12.92) +
                0.1805 *
                  (i =
                    i > 0.04045
                      ? Math.pow((i + 0.055) / 1.055, 2.4)
                      : i / 12.92)),
            100 * (0.2126 * e + 0.7152 * n + 0.0722 * i),
            100 * (0.0193 * e + 0.1192 * n + 0.9505 * i),
          ];
        }
        function u(t) {
          var e = l(t),
            n = e[0],
            i = e[1],
            r = e[2];
          return (
            (i /= 100),
            (r /= 108.883),
            (n =
              (n /= 95.047) > 0.008856
                ? Math.pow(n, 1 / 3)
                : 7.787 * n + 16 / 116),
            [
              116 *
                (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) -
                16,
              500 * (n - i),
              200 *
                (i -
                  (r =
                    r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116)),
            ]
          );
        }
        function c(t) {
          var e,
            n,
            i,
            r,
            a,
            o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100;
          if (0 == s) return [(a = 255 * l), a, a];
          (e = 2 * l - (n = l < 0.5 ? l * (1 + s) : l + s - l * s)),
            (r = [0, 0, 0]);
          for (var u = 0; u < 3; u++)
            (i = o + (1 / 3) * -(u - 1)) < 0 && i++,
              i > 1 && i--,
              (a =
                6 * i < 1
                  ? e + 6 * (n - e) * i
                  : 2 * i < 1
                  ? n
                  : 3 * i < 2
                  ? e + (n - e) * (2 / 3 - i) * 6
                  : e),
              (r[u] = 255 * a);
          return r;
        }
        function d(t) {
          var e = t[0] / 60,
            n = t[1] / 100,
            i = t[2] / 100,
            r = Math.floor(e) % 6,
            a = e - Math.floor(e),
            o = 255 * i * (1 - n),
            s = 255 * i * (1 - n * a),
            l = 255 * i * (1 - n * (1 - a));
          switch (((i *= 255), r)) {
            case 0:
              return [i, l, o];
            case 1:
              return [s, i, o];
            case 2:
              return [o, i, l];
            case 3:
              return [o, s, i];
            case 4:
              return [l, o, i];
            case 5:
              return [i, o, s];
          }
        }
        function h(t) {
          var e,
            n,
            i,
            a,
            o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100,
            u = s + l;
          switch (
            (u > 1 && ((s /= u), (l /= u)),
            (i = 6 * o - (e = Math.floor(6 * o))),
            0 != (1 & e) && (i = 1 - i),
            (a = s + i * ((n = 1 - l) - s)),
            e)
          ) {
            default:
            case 6:
            case 0:
              (r = n), (g = a), (b = s);
              break;
            case 1:
              (r = a), (g = n), (b = s);
              break;
            case 2:
              (r = s), (g = n), (b = a);
              break;
            case 3:
              (r = s), (g = a), (b = n);
              break;
            case 4:
              (r = a), (g = s), (b = n);
              break;
            case 5:
              (r = n), (g = s), (b = a);
          }
          return [255 * r, 255 * g, 255 * b];
        }
        function f(t) {
          var e = t[0] / 100,
            n = t[1] / 100,
            i = t[2] / 100,
            r = t[3] / 100;
          return [
            255 * (1 - Math.min(1, e * (1 - r) + r)),
            255 * (1 - Math.min(1, n * (1 - r) + r)),
            255 * (1 - Math.min(1, i * (1 - r) + r)),
          ];
        }
        function p(t) {
          var e,
            n,
            i,
            r = t[0] / 100,
            a = t[1] / 100,
            o = t[2] / 100;
          return (
            (n = -0.9689 * r + 1.8758 * a + 0.0415 * o),
            (i = 0.0557 * r + -0.204 * a + 1.057 * o),
            (e =
              (e = 3.2406 * r + -1.5372 * a + -0.4986 * o) > 0.0031308
                ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
                : (e *= 12.92)),
            (n =
              n > 0.0031308
                ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055
                : (n *= 12.92)),
            (i =
              i > 0.0031308
                ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055
                : (i *= 12.92)),
            [
              255 * (e = Math.min(Math.max(0, e), 1)),
              255 * (n = Math.min(Math.max(0, n), 1)),
              255 * (i = Math.min(Math.max(0, i), 1)),
            ]
          );
        }
        function m(t) {
          var e = t[0],
            n = t[1],
            i = t[2];
          return (
            (n /= 100),
            (i /= 108.883),
            (e =
              (e /= 95.047) > 0.008856
                ? Math.pow(e, 1 / 3)
                : 7.787 * e + 16 / 116),
            [
              116 *
                (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) -
                16,
              500 * (e - n),
              200 *
                (n -
                  (i =
                    i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116)),
            ]
          );
        }
        function v(t) {
          var e,
            n,
            i,
            r,
            a = t[0],
            o = t[1],
            s = t[2];
          return (
            a <= 8
              ? (r = ((n = (100 * a) / 903.3) / 100) * 7.787 + 16 / 116)
              : ((n = 100 * Math.pow((a + 16) / 116, 3)),
                (r = Math.pow(n / 100, 1 / 3))),
            [
              (e =
                e / 95.047 <= 0.008856
                  ? (e = (95.047 * (o / 500 + r - 16 / 116)) / 7.787)
                  : 95.047 * Math.pow(o / 500 + r, 3)),
              n,
              (i =
                i / 108.883 <= 0.008859
                  ? (i = (108.883 * (r - s / 200 - 16 / 116)) / 7.787)
                  : 108.883 * Math.pow(r - s / 200, 3)),
            ]
          );
        }
        function y(t) {
          var e,
            n = t[0],
            i = t[1],
            r = t[2];
          return (
            (e = (360 * Math.atan2(r, i)) / 2 / Math.PI) < 0 && (e += 360),
            [n, Math.sqrt(i * i + r * r), e]
          );
        }
        function x(t) {
          return p(v(t));
        }
        function _(t) {
          var e,
            n = t[0],
            i = t[1];
          return (
            (e = (t[2] / 360) * 2 * Math.PI),
            [n, i * Math.cos(e), i * Math.sin(e)]
          );
        }
        function w(t) {
          return k[t];
        }
        var k = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
          },
          M = {};
        for (var S in k) M[JSON.stringify(k[S])] = S;
        var D = function () {
          return new A();
        };
        for (var C in e) {
          D[C + "Raw"] = (function (t) {
            return function (n) {
              return (
                "number" == typeof n &&
                  (n = Array.prototype.slice.call(arguments)),
                e[t](n)
              );
            };
          })(C);
          var P = /(\w+)2(\w+)/.exec(C),
            T = P[1],
            O = P[2];
          (D[T] = D[T] || {})[O] = D[C] = (function (t) {
            return function (n) {
              "number" == typeof n &&
                (n = Array.prototype.slice.call(arguments));
              var i = e[t](n);
              if ("string" == typeof i || void 0 === i) return i;
              for (var r = 0; r < i.length; r++) i[r] = Math.round(i[r]);
              return i;
            };
          })(C);
        }
        var A = function () {
          this.convs = {};
        };
        (A.prototype.routeSpace = function (t, e) {
          var n = e[0];
          return void 0 === n
            ? this.getValues(t)
            : ("number" == typeof n && (n = Array.prototype.slice.call(e)),
              this.setValues(t, n));
        }),
          (A.prototype.setValues = function (t, e) {
            return (
              (this.space = t), (this.convs = {}), (this.convs[t] = e), this
            );
          }),
          (A.prototype.getValues = function (t) {
            var e = this.convs[t];
            if (!e) {
              var n = this.space,
                i = this.convs[n];
              (e = D[n][t](i)), (this.convs[t] = e);
            }
            return e;
          }),
          ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
            A.prototype[t] = function (e) {
              return this.routeSpace(t, arguments);
            };
          });
        var I = D,
          F = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
          },
          L = {
            getRgba: R,
            getHsla: W,
            getRgb: function (t) {
              var e = R(t);
              return e && e.slice(0, 3);
            },
            getHsl: function (t) {
              var e = W(t);
              return e && e.slice(0, 3);
            },
            getHwb: Y,
            getAlpha: function (t) {
              var e = R(t);
              return e ? e[3] : (e = W(t)) ? e[3] : (e = Y(t)) ? e[3] : void 0;
            },
            hexString: function (t, e) {
              return (
                (e = void 0 !== e && 3 === t.length ? e : t[3]),
                "#" +
                  V(t[0]) +
                  V(t[1]) +
                  V(t[2]) +
                  (e >= 0 && e < 1 ? V(Math.round(255 * e)) : "")
              );
            },
            rgbString: function (t, e) {
              return e < 1 || (t[3] && t[3] < 1)
                ? z(t, e)
                : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
            },
            rgbaString: z,
            percentString: function (t, e) {
              if (e < 1 || (t[3] && t[3] < 1)) return N(t, e);
              var n = Math.round((t[0] / 255) * 100),
                i = Math.round((t[1] / 255) * 100),
                r = Math.round((t[2] / 255) * 100);
              return "rgb(" + n + "%, " + i + "%, " + r + "%)";
            },
            percentaString: N,
            hslString: function (t, e) {
              return e < 1 || (t[3] && t[3] < 1)
                ? E(t, e)
                : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
            },
            hslaString: E,
            hwbString: function (t, e) {
              return (
                void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                "hwb(" +
                  t[0] +
                  ", " +
                  t[1] +
                  "%, " +
                  t[2] +
                  "%" +
                  (void 0 !== e && 1 !== e ? ", " + e : "") +
                  ")"
              );
            },
            keyword: function (t) {
              return H[t.slice(0, 3)];
            },
          };
        function R(t) {
          if (t) {
            var e = [0, 0, 0],
              n = 1,
              i = t.match(/^#([a-fA-F0-9]{3,4})$/i),
              r = "";
            if (i) {
              r = (i = i[1])[3];
              for (var a = 0; a < e.length; a++)
                e[a] = parseInt(i[a] + i[a], 16);
              r && (n = Math.round((parseInt(r + r, 16) / 255) * 100) / 100);
            } else if ((i = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i))) {
              for (r = i[2], i = i[1], a = 0; a < e.length; a++)
                e[a] = parseInt(i.slice(2 * a, 2 * a + 2), 16);
              r && (n = Math.round((parseInt(r, 16) / 255) * 100) / 100);
            } else if (
              (i = t.match(
                /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
              ))
            ) {
              for (a = 0; a < e.length; a++) e[a] = parseInt(i[a + 1]);
              n = parseFloat(i[4]);
            } else if (
              (i = t.match(
                /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
              ))
            ) {
              for (a = 0; a < e.length; a++)
                e[a] = Math.round(2.55 * parseFloat(i[a + 1]));
              n = parseFloat(i[4]);
            } else if ((i = t.match(/(\w+)/))) {
              if ("transparent" == i[1]) return [0, 0, 0, 0];
              if (!(e = F[i[1]])) return;
            }
            for (a = 0; a < e.length; a++) e[a] = j(e[a], 0, 255);
            return (n = n || 0 == n ? j(n, 0, 1) : 1), (e[3] = n), e;
          }
        }
        function W(t) {
          if (t) {
            var e = t.match(
              /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
            );
            if (e) {
              var n = parseFloat(e[4]);
              return [
                j(parseInt(e[1]), 0, 360),
                j(parseFloat(e[2]), 0, 100),
                j(parseFloat(e[3]), 0, 100),
                j(isNaN(n) ? 1 : n, 0, 1),
              ];
            }
          }
        }
        function Y(t) {
          if (t) {
            var e = t.match(
              /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
            );
            if (e) {
              var n = parseFloat(e[4]);
              return [
                j(parseInt(e[1]), 0, 360),
                j(parseFloat(e[2]), 0, 100),
                j(parseFloat(e[3]), 0, 100),
                j(isNaN(n) ? 1 : n, 0, 1),
              ];
            }
          }
        }
        function z(t, e) {
          return (
            void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
            "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
          );
        }
        function N(t, e) {
          return (
            "rgba(" +
            Math.round((t[0] / 255) * 100) +
            "%, " +
            Math.round((t[1] / 255) * 100) +
            "%, " +
            Math.round((t[2] / 255) * 100) +
            "%, " +
            (e || t[3] || 1) +
            ")"
          );
        }
        function E(t, e) {
          return (
            void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
            "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
          );
        }
        function j(t, e, n) {
          return Math.min(Math.max(e, t), n);
        }
        function V(t) {
          var e = t.toString(16).toUpperCase();
          return e.length < 2 ? "0" + e : e;
        }
        var H = {};
        for (var B in F) H[F[B]] = B;
        var U = function t(e) {
          return e instanceof t
            ? e
            : this instanceof t
            ? ((this.valid = !1),
              (this.values = {
                rgb: [0, 0, 0],
                hsl: [0, 0, 0],
                hsv: [0, 0, 0],
                hwb: [0, 0, 0],
                cmyk: [0, 0, 0, 0],
                alpha: 1,
              }),
              void ("string" === typeof e
                ? (n = L.getRgba(e))
                  ? this.setValues("rgb", n)
                  : (n = L.getHsla(e))
                  ? this.setValues("hsl", n)
                  : (n = L.getHwb(e)) && this.setValues("hwb", n)
                : "object" === typeof e &&
                  (void 0 !== (n = e).r || void 0 !== n.red
                    ? this.setValues("rgb", n)
                    : void 0 !== n.l || void 0 !== n.lightness
                    ? this.setValues("hsl", n)
                    : void 0 !== n.v || void 0 !== n.value
                    ? this.setValues("hsv", n)
                    : void 0 !== n.w || void 0 !== n.whiteness
                    ? this.setValues("hwb", n)
                    : (void 0 === n.c && void 0 === n.cyan) ||
                      this.setValues("cmyk", n))))
            : new t(e);
          var n;
        };
        ((U.prototype = {
          isValid: function () {
            return this.valid;
          },
          rgb: function () {
            return this.setSpace("rgb", arguments);
          },
          hsl: function () {
            return this.setSpace("hsl", arguments);
          },
          hsv: function () {
            return this.setSpace("hsv", arguments);
          },
          hwb: function () {
            return this.setSpace("hwb", arguments);
          },
          cmyk: function () {
            return this.setSpace("cmyk", arguments);
          },
          rgbArray: function () {
            return this.values.rgb;
          },
          hslArray: function () {
            return this.values.hsl;
          },
          hsvArray: function () {
            return this.values.hsv;
          },
          hwbArray: function () {
            var t = this.values;
            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
          },
          cmykArray: function () {
            return this.values.cmyk;
          },
          rgbaArray: function () {
            var t = this.values;
            return t.rgb.concat([t.alpha]);
          },
          hslaArray: function () {
            var t = this.values;
            return t.hsl.concat([t.alpha]);
          },
          alpha: function (t) {
            return void 0 === t
              ? this.values.alpha
              : (this.setValues("alpha", t), this);
          },
          red: function (t) {
            return this.setChannel("rgb", 0, t);
          },
          green: function (t) {
            return this.setChannel("rgb", 1, t);
          },
          blue: function (t) {
            return this.setChannel("rgb", 2, t);
          },
          hue: function (t) {
            return (
              t && (t = (t %= 360) < 0 ? 360 + t : t),
              this.setChannel("hsl", 0, t)
            );
          },
          saturation: function (t) {
            return this.setChannel("hsl", 1, t);
          },
          lightness: function (t) {
            return this.setChannel("hsl", 2, t);
          },
          saturationv: function (t) {
            return this.setChannel("hsv", 1, t);
          },
          whiteness: function (t) {
            return this.setChannel("hwb", 1, t);
          },
          blackness: function (t) {
            return this.setChannel("hwb", 2, t);
          },
          value: function (t) {
            return this.setChannel("hsv", 2, t);
          },
          cyan: function (t) {
            return this.setChannel("cmyk", 0, t);
          },
          magenta: function (t) {
            return this.setChannel("cmyk", 1, t);
          },
          yellow: function (t) {
            return this.setChannel("cmyk", 2, t);
          },
          black: function (t) {
            return this.setChannel("cmyk", 3, t);
          },
          hexString: function () {
            return L.hexString(this.values.rgb);
          },
          rgbString: function () {
            return L.rgbString(this.values.rgb, this.values.alpha);
          },
          rgbaString: function () {
            return L.rgbaString(this.values.rgb, this.values.alpha);
          },
          percentString: function () {
            return L.percentString(this.values.rgb, this.values.alpha);
          },
          hslString: function () {
            return L.hslString(this.values.hsl, this.values.alpha);
          },
          hslaString: function () {
            return L.hslaString(this.values.hsl, this.values.alpha);
          },
          hwbString: function () {
            return L.hwbString(this.values.hwb, this.values.alpha);
          },
          keyword: function () {
            return L.keyword(this.values.rgb, this.values.alpha);
          },
          rgbNumber: function () {
            var t = this.values.rgb;
            return (t[0] << 16) | (t[1] << 8) | t[2];
          },
          luminosity: function () {
            for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
              var i = t[n] / 255;
              e[n] =
                i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
          },
          contrast: function (t) {
            var e = this.luminosity(),
              n = t.luminosity();
            return e > n ? (e + 0.05) / (n + 0.05) : (n + 0.05) / (e + 0.05);
          },
          level: function (t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
          },
          dark: function () {
            var t = this.values.rgb;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
          },
          light: function () {
            return !this.dark();
          },
          negate: function () {
            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
            return this.setValues("rgb", t), this;
          },
          lighten: function (t) {
            var e = this.values.hsl;
            return (e[2] += e[2] * t), this.setValues("hsl", e), this;
          },
          darken: function (t) {
            var e = this.values.hsl;
            return (e[2] -= e[2] * t), this.setValues("hsl", e), this;
          },
          saturate: function (t) {
            var e = this.values.hsl;
            return (e[1] += e[1] * t), this.setValues("hsl", e), this;
          },
          desaturate: function (t) {
            var e = this.values.hsl;
            return (e[1] -= e[1] * t), this.setValues("hsl", e), this;
          },
          whiten: function (t) {
            var e = this.values.hwb;
            return (e[1] += e[1] * t), this.setValues("hwb", e), this;
          },
          blacken: function (t) {
            var e = this.values.hwb;
            return (e[2] += e[2] * t), this.setValues("hwb", e), this;
          },
          greyscale: function () {
            var t = this.values.rgb,
              e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2];
            return this.setValues("rgb", [e, e, e]), this;
          },
          clearer: function (t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e - e * t), this;
          },
          opaquer: function (t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e + e * t), this;
          },
          rotate: function (t) {
            var e = this.values.hsl,
              n = (e[0] + t) % 360;
            return (e[0] = n < 0 ? 360 + n : n), this.setValues("hsl", e), this;
          },
          mix: function (t, e) {
            var n = t,
              i = void 0 === e ? 0.5 : e,
              r = 2 * i - 1,
              a = this.alpha() - n.alpha(),
              o = ((r * a === -1 ? r : (r + a) / (1 + r * a)) + 1) / 2,
              s = 1 - o;
            return this.rgb(
              o * this.red() + s * n.red(),
              o * this.green() + s * n.green(),
              o * this.blue() + s * n.blue()
            ).alpha(this.alpha() * i + n.alpha() * (1 - i));
          },
          toJSON: function () {
            return this.rgb();
          },
          clone: function () {
            var t,
              e,
              n = new U(),
              i = this.values,
              r = n.values;
            for (var a in i)
              i.hasOwnProperty(a) &&
                ((t = i[a]),
                "[object Array]" === (e = {}.toString.call(t))
                  ? (r[a] = t.slice(0))
                  : "[object Number]" === e
                  ? (r[a] = t)
                  : console.error("unexpected color value:", t));
            return n;
          },
        }).spaces = {
          rgb: ["red", "green", "blue"],
          hsl: ["hue", "saturation", "lightness"],
          hsv: ["hue", "saturation", "value"],
          hwb: ["hue", "whiteness", "blackness"],
          cmyk: ["cyan", "magenta", "yellow", "black"],
        }),
          (U.prototype.maxes = {
            rgb: [255, 255, 255],
            hsl: [360, 100, 100],
            hsv: [360, 100, 100],
            hwb: [360, 100, 100],
            cmyk: [100, 100, 100, 100],
          }),
          (U.prototype.getValues = function (t) {
            for (var e = this.values, n = {}, i = 0; i < t.length; i++)
              n[t.charAt(i)] = e[t][i];
            return 1 !== e.alpha && (n.a = e.alpha), n;
          }),
          (U.prototype.setValues = function (t, e) {
            var n,
              i,
              r = this.values,
              a = this.spaces,
              o = this.maxes,
              s = 1;
            if (((this.valid = !0), "alpha" === t)) s = e;
            else if (e.length) (r[t] = e.slice(0, t.length)), (s = e[t.length]);
            else if (void 0 !== e[t.charAt(0)]) {
              for (n = 0; n < t.length; n++) r[t][n] = e[t.charAt(n)];
              s = e.a;
            } else if (void 0 !== e[a[t][0]]) {
              var l = a[t];
              for (n = 0; n < t.length; n++) r[t][n] = e[l[n]];
              s = e.alpha;
            }
            if (
              ((r.alpha = Math.max(0, Math.min(1, void 0 === s ? r.alpha : s))),
              "alpha" === t)
            )
              return !1;
            for (n = 0; n < t.length; n++)
              (i = Math.max(0, Math.min(o[t][n], r[t][n]))),
                (r[t][n] = Math.round(i));
            for (var u in a) u !== t && (r[u] = I[t][u](r[t]));
            return !0;
          }),
          (U.prototype.setSpace = function (t, e) {
            var n = e[0];
            return void 0 === n
              ? this.getValues(t)
              : ("number" === typeof n && (n = Array.prototype.slice.call(e)),
                this.setValues(t, n),
                this);
          }),
          (U.prototype.setChannel = function (t, e, n) {
            var i = this.values[t];
            return void 0 === n
              ? i[e]
              : n === i[e]
              ? this
              : ((i[e] = n), this.setValues(t, i), this);
          }),
          "undefined" !== typeof window && (window.Color = U);
        var G = U,
          q = {
            noop: function () {},
            uid: (function () {
              var t = 0;
              return function () {
                return t++;
              };
            })(),
            isNullOrUndef: function (t) {
              return null === t || "undefined" === typeof t;
            },
            isArray: function (t) {
              if (Array.isArray && Array.isArray(t)) return !0;
              var e = Object.prototype.toString.call(t);
              return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
            },
            isObject: function (t) {
              return (
                null !== t &&
                "[object Object]" === Object.prototype.toString.call(t)
              );
            },
            isFinite: (function (t) {
              function e(e) {
                return t.apply(this, arguments);
              }
              return (
                (e.toString = function () {
                  return t.toString();
                }),
                e
              );
            })(function (t) {
              return (
                ("number" === typeof t || t instanceof Number) && isFinite(t)
              );
            }),
            valueOrDefault: function (t, e) {
              return "undefined" === typeof t ? e : t;
            },
            valueAtIndexOrDefault: function (t, e, n) {
              return q.valueOrDefault(q.isArray(t) ? t[e] : t, n);
            },
            callback: function (t, e, n) {
              if (t && "function" === typeof t.call) return t.apply(n, e);
            },
            each: function (t, e, n, i) {
              var r, a, o;
              if (q.isArray(t))
                if (((a = t.length), i))
                  for (r = a - 1; r >= 0; r--) e.call(n, t[r], r);
                else for (r = 0; r < a; r++) e.call(n, t[r], r);
              else if (q.isObject(t))
                for (a = (o = Object.keys(t)).length, r = 0; r < a; r++)
                  e.call(n, t[o[r]], o[r]);
            },
            arrayEquals: function (t, e) {
              var n, i, r, a;
              if (!t || !e || t.length !== e.length) return !1;
              for (n = 0, i = t.length; n < i; ++n)
                if (
                  ((r = t[n]),
                  (a = e[n]),
                  r instanceof Array && a instanceof Array)
                ) {
                  if (!q.arrayEquals(r, a)) return !1;
                } else if (r !== a) return !1;
              return !0;
            },
            clone: function (t) {
              if (q.isArray(t)) return t.map(q.clone);
              if (q.isObject(t)) {
                for (
                  var e = {}, n = Object.keys(t), i = n.length, r = 0;
                  r < i;
                  ++r
                )
                  e[n[r]] = q.clone(t[n[r]]);
                return e;
              }
              return t;
            },
            _merger: function (t, e, n, i) {
              var r = e[t],
                a = n[t];
              q.isObject(r) && q.isObject(a)
                ? q.merge(r, a, i)
                : (e[t] = q.clone(a));
            },
            _mergerIf: function (t, e, n) {
              var i = e[t],
                r = n[t];
              q.isObject(i) && q.isObject(r)
                ? q.mergeIf(i, r)
                : e.hasOwnProperty(t) || (e[t] = q.clone(r));
            },
            merge: function (t, e, n) {
              var i,
                r,
                a,
                o,
                s,
                l = q.isArray(e) ? e : [e],
                u = l.length;
              if (!q.isObject(t)) return t;
              for (i = (n = n || {}).merger || q._merger, r = 0; r < u; ++r)
                if (((e = l[r]), q.isObject(e)))
                  for (s = 0, o = (a = Object.keys(e)).length; s < o; ++s)
                    i(a[s], t, e, n);
              return t;
            },
            mergeIf: function (t, e) {
              return q.merge(t, e, { merger: q._mergerIf });
            },
            extend: function (t) {
              for (
                var e = function (e, n) {
                    t[n] = e;
                  },
                  n = 1,
                  i = arguments.length;
                n < i;
                ++n
              )
                q.each(arguments[n], e);
              return t;
            },
            inherits: function (t) {
              var e = this,
                n =
                  t && t.hasOwnProperty("constructor")
                    ? t.constructor
                    : function () {
                        return e.apply(this, arguments);
                      },
                i = function () {
                  this.constructor = n;
                };
              return (
                (i.prototype = e.prototype),
                (n.prototype = new i()),
                (n.extend = q.inherits),
                t && q.extend(n.prototype, t),
                (n.__super__ = e.prototype),
                n
              );
            },
          },
          Z = q;
        (q.callCallback = q.callback),
          (q.indexOf = function (t, e, n) {
            return Array.prototype.indexOf.call(t, e, n);
          }),
          (q.getValueOrDefault = q.valueOrDefault),
          (q.getValueAtIndexOrDefault = q.valueAtIndexOrDefault);
        var $ = {
            linear: function (t) {
              return t;
            },
            easeInQuad: function (t) {
              return t * t;
            },
            easeOutQuad: function (t) {
              return -t * (t - 2);
            },
            easeInOutQuad: function (t) {
              return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
            },
            easeInCubic: function (t) {
              return t * t * t;
            },
            easeOutCubic: function (t) {
              return (t -= 1) * t * t + 1;
            },
            easeInOutCubic: function (t) {
              return (t /= 0.5) < 1
                ? 0.5 * t * t * t
                : 0.5 * ((t -= 2) * t * t + 2);
            },
            easeInQuart: function (t) {
              return t * t * t * t;
            },
            easeOutQuart: function (t) {
              return -((t -= 1) * t * t * t - 1);
            },
            easeInOutQuart: function (t) {
              return (t /= 0.5) < 1
                ? 0.5 * t * t * t * t
                : -0.5 * ((t -= 2) * t * t * t - 2);
            },
            easeInQuint: function (t) {
              return t * t * t * t * t;
            },
            easeOutQuint: function (t) {
              return (t -= 1) * t * t * t * t + 1;
            },
            easeInOutQuint: function (t) {
              return (t /= 0.5) < 1
                ? 0.5 * t * t * t * t * t
                : 0.5 * ((t -= 2) * t * t * t * t + 2);
            },
            easeInSine: function (t) {
              return 1 - Math.cos(t * (Math.PI / 2));
            },
            easeOutSine: function (t) {
              return Math.sin(t * (Math.PI / 2));
            },
            easeInOutSine: function (t) {
              return -0.5 * (Math.cos(Math.PI * t) - 1);
            },
            easeInExpo: function (t) {
              return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
            },
            easeOutExpo: function (t) {
              return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
            },
            easeInOutExpo: function (t) {
              return 0 === t
                ? 0
                : 1 === t
                ? 1
                : (t /= 0.5) < 1
                ? 0.5 * Math.pow(2, 10 * (t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * --t));
            },
            easeInCirc: function (t) {
              return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
            },
            easeOutCirc: function (t) {
              return Math.sqrt(1 - (t -= 1) * t);
            },
            easeInOutCirc: function (t) {
              return (t /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            },
            easeInElastic: function (t) {
              var e = 1.70158,
                n = 0,
                i = 1;
              return 0 === t
                ? 0
                : 1 === t
                ? 1
                : (n || (n = 0.3),
                  i < 1
                    ? ((i = 1), (e = n / 4))
                    : (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                  -i *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((t - e) * (2 * Math.PI)) / n));
            },
            easeOutElastic: function (t) {
              var e = 1.70158,
                n = 0,
                i = 1;
              return 0 === t
                ? 0
                : 1 === t
                ? 1
                : (n || (n = 0.3),
                  i < 1
                    ? ((i = 1), (e = n / 4))
                    : (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                  i *
                    Math.pow(2, -10 * t) *
                    Math.sin(((t - e) * (2 * Math.PI)) / n) +
                    1);
            },
            easeInOutElastic: function (t) {
              var e = 1.70158,
                n = 0,
                i = 1;
              return 0 === t
                ? 0
                : 2 === (t /= 0.5)
                ? 1
                : (n || (n = 0.45),
                  i < 1
                    ? ((i = 1), (e = n / 4))
                    : (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                  t < 1
                    ? i *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin(((t - e) * (2 * Math.PI)) / n) *
                      -0.5
                    : i *
                        Math.pow(2, -10 * (t -= 1)) *
                        Math.sin(((t - e) * (2 * Math.PI)) / n) *
                        0.5 +
                      1);
            },
            easeInBack: function (t) {
              var e = 1.70158;
              return t * t * ((e + 1) * t - e);
            },
            easeOutBack: function (t) {
              var e = 1.70158;
              return (t -= 1) * t * ((e + 1) * t + e) + 1;
            },
            easeInOutBack: function (t) {
              var e = 1.70158;
              return (t /= 0.5) < 1
                ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            },
            easeInBounce: function (t) {
              return 1 - $.easeOutBounce(1 - t);
            },
            easeOutBounce: function (t) {
              return t < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : t < 2.5 / 2.75
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            },
            easeInOutBounce: function (t) {
              return t < 0.5
                ? 0.5 * $.easeInBounce(2 * t)
                : 0.5 * $.easeOutBounce(2 * t - 1) + 0.5;
            },
          },
          K = { effects: $ };
        Z.easingEffects = $;
        var X = Math.PI,
          J = X / 180,
          Q = 2 * X,
          tt = X / 2,
          et = X / 4,
          nt = (2 * X) / 3,
          it = {
            clear: function (t) {
              t.ctx.clearRect(0, 0, t.width, t.height);
            },
            roundedRect: function (t, e, n, i, r, a) {
              if (a) {
                var o = Math.min(a, r / 2, i / 2),
                  s = e + o,
                  l = n + o,
                  u = e + i - o,
                  c = n + r - o;
                t.moveTo(e, l),
                  s < u && l < c
                    ? (t.arc(s, l, o, -X, -tt),
                      t.arc(u, l, o, -tt, 0),
                      t.arc(u, c, o, 0, tt),
                      t.arc(s, c, o, tt, X))
                    : s < u
                    ? (t.moveTo(s, n),
                      t.arc(u, l, o, -tt, tt),
                      t.arc(s, l, o, tt, X + tt))
                    : l < c
                    ? (t.arc(s, l, o, -X, 0), t.arc(s, c, o, 0, X))
                    : t.arc(s, l, o, -X, X),
                  t.closePath(),
                  t.moveTo(e, n);
              } else t.rect(e, n, i, r);
            },
            drawPoint: function (t, e, n, i, r, a) {
              var o,
                s,
                l,
                u,
                c,
                d = (a || 0) * J;
              if (
                !e ||
                "object" !== typeof e ||
                ("[object HTMLImageElement]" !== (o = e.toString()) &&
                  "[object HTMLCanvasElement]" !== o)
              ) {
                if (!(isNaN(n) || n <= 0)) {
                  switch ((t.beginPath(), e)) {
                    default:
                      t.arc(i, r, n, 0, Q), t.closePath();
                      break;
                    case "triangle":
                      t.moveTo(i + Math.sin(d) * n, r - Math.cos(d) * n),
                        (d += nt),
                        t.lineTo(i + Math.sin(d) * n, r - Math.cos(d) * n),
                        (d += nt),
                        t.lineTo(i + Math.sin(d) * n, r - Math.cos(d) * n),
                        t.closePath();
                      break;
                    case "rectRounded":
                      (u = n - (c = 0.516 * n)),
                        (s = Math.cos(d + et) * u),
                        (l = Math.sin(d + et) * u),
                        t.arc(i - s, r - l, c, d - X, d - tt),
                        t.arc(i + l, r - s, c, d - tt, d),
                        t.arc(i + s, r + l, c, d, d + tt),
                        t.arc(i - l, r + s, c, d + tt, d + X),
                        t.closePath();
                      break;
                    case "rect":
                      if (!a) {
                        (u = Math.SQRT1_2 * n),
                          t.rect(i - u, r - u, 2 * u, 2 * u);
                        break;
                      }
                      d += et;
                    case "rectRot":
                      (s = Math.cos(d) * n),
                        (l = Math.sin(d) * n),
                        t.moveTo(i - s, r - l),
                        t.lineTo(i + l, r - s),
                        t.lineTo(i + s, r + l),
                        t.lineTo(i - l, r + s),
                        t.closePath();
                      break;
                    case "crossRot":
                      d += et;
                    case "cross":
                      (s = Math.cos(d) * n),
                        (l = Math.sin(d) * n),
                        t.moveTo(i - s, r - l),
                        t.lineTo(i + s, r + l),
                        t.moveTo(i + l, r - s),
                        t.lineTo(i - l, r + s);
                      break;
                    case "star":
                      (s = Math.cos(d) * n),
                        (l = Math.sin(d) * n),
                        t.moveTo(i - s, r - l),
                        t.lineTo(i + s, r + l),
                        t.moveTo(i + l, r - s),
                        t.lineTo(i - l, r + s),
                        (d += et),
                        (s = Math.cos(d) * n),
                        (l = Math.sin(d) * n),
                        t.moveTo(i - s, r - l),
                        t.lineTo(i + s, r + l),
                        t.moveTo(i + l, r - s),
                        t.lineTo(i - l, r + s);
                      break;
                    case "line":
                      (s = Math.cos(d) * n),
                        (l = Math.sin(d) * n),
                        t.moveTo(i - s, r - l),
                        t.lineTo(i + s, r + l);
                      break;
                    case "dash":
                      t.moveTo(i, r),
                        t.lineTo(i + Math.cos(d) * n, r + Math.sin(d) * n);
                  }
                  t.fill(), t.stroke();
                }
              } else
                t.drawImage(
                  e,
                  i - e.width / 2,
                  r - e.height / 2,
                  e.width,
                  e.height
                );
            },
            _isPointInArea: function (t, e) {
              return (
                t.x > e.left - 1e-6 &&
                t.x < e.right + 1e-6 &&
                t.y > e.top - 1e-6 &&
                t.y < e.bottom + 1e-6
              );
            },
            clipArea: function (t, e) {
              t.save(),
                t.beginPath(),
                t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
                t.clip();
            },
            unclipArea: function (t) {
              t.restore();
            },
            lineTo: function (t, e, n, i) {
              var r = n.steppedLine;
              if (r) {
                if ("middle" === r) {
                  var a = (e.x + n.x) / 2;
                  t.lineTo(a, i ? n.y : e.y), t.lineTo(a, i ? e.y : n.y);
                } else
                  ("after" === r && !i) || ("after" !== r && i)
                    ? t.lineTo(e.x, n.y)
                    : t.lineTo(n.x, e.y);
                t.lineTo(n.x, n.y);
              } else
                n.tension
                  ? t.bezierCurveTo(
                      i ? e.controlPointPreviousX : e.controlPointNextX,
                      i ? e.controlPointPreviousY : e.controlPointNextY,
                      i ? n.controlPointNextX : n.controlPointPreviousX,
                      i ? n.controlPointNextY : n.controlPointPreviousY,
                      n.x,
                      n.y
                    )
                  : t.lineTo(n.x, n.y);
            },
          },
          rt = it;
        (Z.clear = it.clear),
          (Z.drawRoundedRectangle = function (t) {
            t.beginPath(), it.roundedRect.apply(it, arguments);
          });
        var at = {
          _set: function (t, e) {
            return Z.merge(this[t] || (this[t] = {}), e);
          },
        };
        at._set("global", {
          defaultColor: "rgba(0,0,0,0.1)",
          defaultFontColor: "#666",
          defaultFontFamily:
            "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          defaultFontSize: 12,
          defaultFontStyle: "normal",
          defaultLineHeight: 1.2,
          showLines: !0,
        });
        var ot = at,
          st = Z.valueOrDefault,
          lt = {
            toLineHeight: function (t, e) {
              var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
              if (!n || "normal" === n[1]) return 1.2 * e;
              switch (((t = +n[2]), n[3])) {
                case "px":
                  return t;
                case "%":
                  t /= 100;
              }
              return e * t;
            },
            toPadding: function (t) {
              var e, n, i, r;
              return (
                Z.isObject(t)
                  ? ((e = +t.top || 0),
                    (n = +t.right || 0),
                    (i = +t.bottom || 0),
                    (r = +t.left || 0))
                  : (e = n = i = r = +t || 0),
                {
                  top: e,
                  right: n,
                  bottom: i,
                  left: r,
                  height: e + i,
                  width: r + n,
                }
              );
            },
            _parseFont: function (t) {
              var e = ot.global,
                n = st(t.fontSize, e.defaultFontSize),
                i = {
                  family: st(t.fontFamily, e.defaultFontFamily),
                  lineHeight: Z.options.toLineHeight(
                    st(t.lineHeight, e.defaultLineHeight),
                    n
                  ),
                  size: n,
                  style: st(t.fontStyle, e.defaultFontStyle),
                  weight: null,
                  string: "",
                };
              return (
                (i.string = (function (t) {
                  return !t ||
                    Z.isNullOrUndef(t.size) ||
                    Z.isNullOrUndef(t.family)
                    ? null
                    : (t.style ? t.style + " " : "") +
                        (t.weight ? t.weight + " " : "") +
                        t.size +
                        "px " +
                        t.family;
                })(i)),
                i
              );
            },
            resolve: function (t, e, n) {
              var i, r, a;
              for (i = 0, r = t.length; i < r; ++i)
                if (
                  void 0 !== (a = t[i]) &&
                  (void 0 !== e && "function" === typeof a && (a = a(e)),
                  void 0 !== n && Z.isArray(a) && (a = a[n]),
                  void 0 !== a)
                )
                  return a;
            },
          },
          ut = Z,
          ct = K,
          dt = rt,
          ht = lt;
        (ut.easing = ct), (ut.canvas = dt), (ut.options = ht);
        var ft = function (t) {
          ut.extend(this, t), this.initialize.apply(this, arguments);
        };
        ut.extend(ft.prototype, {
          initialize: function () {
            this.hidden = !1;
          },
          pivot: function () {
            var t = this;
            return (
              t._view || (t._view = ut.clone(t._model)), (t._start = {}), t
            );
          },
          transition: function (t) {
            var e = this,
              n = e._model,
              i = e._start,
              r = e._view;
            return n && 1 !== t
              ? (r || (r = e._view = {}),
                i || (i = e._start = {}),
                (function (t, e, n, i) {
                  var r,
                    a,
                    o,
                    s,
                    l,
                    u,
                    c,
                    d,
                    h,
                    f = Object.keys(n);
                  for (r = 0, a = f.length; r < a; ++r)
                    if (
                      ((u = n[(o = f[r])]),
                      e.hasOwnProperty(o) || (e[o] = u),
                      (s = e[o]) !== u && "_" !== o[0])
                    ) {
                      if (
                        (t.hasOwnProperty(o) || (t[o] = s),
                        (c = typeof u) === typeof (l = t[o]))
                      )
                        if ("string" === c) {
                          if ((d = G(l)).valid && (h = G(u)).valid) {
                            e[o] = h.mix(d, i).rgbString();
                            continue;
                          }
                        } else if (ut.isFinite(l) && ut.isFinite(u)) {
                          e[o] = l + (u - l) * i;
                          continue;
                        }
                      e[o] = u;
                    }
                })(i, r, n, t),
                e)
              : ((e._view = n), (e._start = null), e);
          },
          tooltipPosition: function () {
            return { x: this._model.x, y: this._model.y };
          },
          hasValue: function () {
            return ut.isNumber(this._model.x) && ut.isNumber(this._model.y);
          },
        }),
          (ft.extend = ut.inherits);
        var pt = ft,
          gt = pt.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null,
          }),
          mt = gt;
        Object.defineProperty(gt.prototype, "animationObject", {
          get: function () {
            return this;
          },
        }),
          Object.defineProperty(gt.prototype, "chartInstance", {
            get: function () {
              return this.chart;
            },
            set: function (t) {
              this.chart = t;
            },
          }),
          ot._set("global", {
            animation: {
              duration: 1e3,
              easing: "easeOutQuart",
              onProgress: ut.noop,
              onComplete: ut.noop,
            },
          });
        var vt = {
            animations: [],
            request: null,
            addAnimation: function (t, e, n, i) {
              var r,
                a,
                o = this.animations;
              for (
                e.chart = t,
                  e.startTime = Date.now(),
                  e.duration = n,
                  i || (t.animating = !0),
                  r = 0,
                  a = o.length;
                r < a;
                ++r
              )
                if (o[r].chart === t) return void (o[r] = e);
              o.push(e), 1 === o.length && this.requestAnimationFrame();
            },
            cancelAnimation: function (t) {
              var e = ut.findIndex(this.animations, function (e) {
                return e.chart === t;
              });
              -1 !== e && (this.animations.splice(e, 1), (t.animating = !1));
            },
            requestAnimationFrame: function () {
              var t = this;
              null === t.request &&
                (t.request = ut.requestAnimFrame.call(window, function () {
                  (t.request = null), t.startDigest();
                }));
            },
            startDigest: function () {
              this.advance(),
                this.animations.length > 0 && this.requestAnimationFrame();
            },
            advance: function () {
              for (var t, e, n, i, r = this.animations, a = 0; a < r.length; )
                (e = (t = r[a]).chart),
                  (n = t.numSteps),
                  (i =
                    Math.floor(((Date.now() - t.startTime) / t.duration) * n) +
                    1),
                  (t.currentStep = Math.min(i, n)),
                  ut.callback(t.render, [e, t], e),
                  ut.callback(t.onAnimationProgress, [t], e),
                  t.currentStep >= n
                    ? (ut.callback(t.onAnimationComplete, [t], e),
                      (e.animating = !1),
                      r.splice(a, 1))
                    : ++a;
            },
          },
          yt = ut.options.resolve,
          bt = ["push", "pop", "shift", "splice", "unshift"];
        function xt(t, e) {
          var n = t._chartjs;
          if (n) {
            var i = n.listeners,
              r = i.indexOf(e);
            -1 !== r && i.splice(r, 1),
              i.length > 0 ||
                (bt.forEach(function (e) {
                  delete t[e];
                }),
                delete t._chartjs);
          }
        }
        var _t = function (t, e) {
          this.initialize(t, e);
        };
        ut.extend(_t.prototype, {
          datasetElementType: null,
          dataElementType: null,
          initialize: function (t, e) {
            (this.chart = t),
              (this.index = e),
              this.linkScales(),
              this.addElements();
          },
          updateIndex: function (t) {
            this.index = t;
          },
          linkScales: function () {
            var t = this,
              e = t.getMeta(),
              n = t.getDataset();
            (null !== e.xAxisID && e.xAxisID in t.chart.scales) ||
              (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id),
              (null !== e.yAxisID && e.yAxisID in t.chart.scales) ||
                (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id);
          },
          getDataset: function () {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function () {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function (t) {
            return this.chart.scales[t];
          },
          _getValueScaleId: function () {
            return this.getMeta().yAxisID;
          },
          _getIndexScaleId: function () {
            return this.getMeta().xAxisID;
          },
          _getValueScale: function () {
            return this.getScaleForId(this._getValueScaleId());
          },
          _getIndexScale: function () {
            return this.getScaleForId(this._getIndexScaleId());
          },
          reset: function () {
            this.update(!0);
          },
          destroy: function () {
            this._data && xt(this._data, this);
          },
          createMetaDataset: function () {
            var t = this.datasetElementType;
            return (
              t && new t({ _chart: this.chart, _datasetIndex: this.index })
            );
          },
          createMetaData: function (t) {
            var e = this.dataElementType;
            return (
              e &&
              new e({
                _chart: this.chart,
                _datasetIndex: this.index,
                _index: t,
              })
            );
          },
          addElements: function () {
            var t,
              e,
              n = this.getMeta(),
              i = this.getDataset().data || [],
              r = n.data;
            for (t = 0, e = i.length; t < e; ++t)
              r[t] = r[t] || this.createMetaData(t);
            n.dataset = n.dataset || this.createMetaDataset();
          },
          addElementAndReset: function (t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
          },
          buildOrUpdateElements: function () {
            var t,
              e,
              n = this,
              i = n.getDataset(),
              r = i.data || (i.data = []);
            n._data !== r &&
              (n._data && xt(n._data, n),
              r &&
                Object.isExtensible(r) &&
                ((e = n),
                (t = r)._chartjs
                  ? t._chartjs.listeners.push(e)
                  : (Object.defineProperty(t, "_chartjs", {
                      configurable: !0,
                      enumerable: !1,
                      value: { listeners: [e] },
                    }),
                    bt.forEach(function (e) {
                      var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                        i = t[e];
                      Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: function () {
                          var e = Array.prototype.slice.call(arguments),
                            r = i.apply(this, e);
                          return (
                            ut.each(t._chartjs.listeners, function (t) {
                              "function" === typeof t[n] && t[n].apply(t, e);
                            }),
                            r
                          );
                        },
                      });
                    }))),
              (n._data = r)),
              n.resyncElements();
          },
          update: ut.noop,
          transition: function (t) {
            for (
              var e = this.getMeta(), n = e.data || [], i = n.length, r = 0;
              r < i;
              ++r
            )
              n[r].transition(t);
            e.dataset && e.dataset.transition(t);
          },
          draw: function () {
            var t = this.getMeta(),
              e = t.data || [],
              n = e.length,
              i = 0;
            for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw();
          },
          removeHoverStyle: function (t) {
            ut.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
          },
          setHoverStyle: function (t) {
            var e = this.chart.data.datasets[t._datasetIndex],
              n = t._index,
              i = t.custom || {},
              r = t._model,
              a = ut.getHoverColor;
            (t.$previousStyle = {
              backgroundColor: r.backgroundColor,
              borderColor: r.borderColor,
              borderWidth: r.borderWidth,
            }),
              (r.backgroundColor = yt(
                [
                  i.hoverBackgroundColor,
                  e.hoverBackgroundColor,
                  a(r.backgroundColor),
                ],
                void 0,
                n
              )),
              (r.borderColor = yt(
                [i.hoverBorderColor, e.hoverBorderColor, a(r.borderColor)],
                void 0,
                n
              )),
              (r.borderWidth = yt(
                [i.hoverBorderWidth, e.hoverBorderWidth, r.borderWidth],
                void 0,
                n
              ));
          },
          resyncElements: function () {
            var t = this.getMeta(),
              e = this.getDataset().data,
              n = t.data.length,
              i = e.length;
            i < n
              ? t.data.splice(i, n - i)
              : i > n && this.insertElements(n, i - n);
          },
          insertElements: function (t, e) {
            for (var n = 0; n < e; ++n) this.addElementAndReset(t + n);
          },
          onDataPush: function () {
            var t = arguments.length;
            this.insertElements(this.getDataset().data.length - t, t);
          },
          onDataPop: function () {
            this.getMeta().data.pop();
          },
          onDataShift: function () {
            this.getMeta().data.shift();
          },
          onDataSplice: function (t, e) {
            this.getMeta().data.splice(t, e),
              this.insertElements(t, arguments.length - 2);
          },
          onDataUnshift: function () {
            this.insertElements(0, arguments.length);
          },
        }),
          (_t.extend = ut.inherits);
        var wt = _t;
        ot._set("global", {
          elements: {
            arc: {
              backgroundColor: ot.global.defaultColor,
              borderColor: "#fff",
              borderWidth: 2,
              borderAlign: "center",
            },
          },
        });
        var kt = pt.extend({
            inLabelRange: function (t) {
              var e = this._view;
              return (
                !!e &&
                Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
              );
            },
            inRange: function (t, e) {
              var n = this._view;
              if (n) {
                for (
                  var i = ut.getAngleFromPoint(n, { x: t, y: e }),
                    r = i.angle,
                    a = i.distance,
                    o = n.startAngle,
                    s = n.endAngle;
                  s < o;

                )
                  s += 2 * Math.PI;
                for (; r > s; ) r -= 2 * Math.PI;
                for (; r < o; ) r += 2 * Math.PI;
                var l = r >= o && r <= s,
                  u = a >= n.innerRadius && a <= n.outerRadius;
                return l && u;
              }
              return !1;
            },
            getCenterPoint: function () {
              var t = this._view,
                e = (t.startAngle + t.endAngle) / 2,
                n = (t.innerRadius + t.outerRadius) / 2;
              return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
            },
            getArea: function () {
              var t = this._view;
              return (
                Math.PI *
                ((t.endAngle - t.startAngle) / (2 * Math.PI)) *
                (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
              );
            },
            tooltipPosition: function () {
              var t = this._view,
                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
              return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
            },
            draw: function () {
              var t,
                e = this._chart.ctx,
                n = this._view,
                i = n.startAngle,
                r = n.endAngle,
                a = "inner" === n.borderAlign ? 0.33 : 0;
              e.save(),
                e.beginPath(),
                e.arc(n.x, n.y, Math.max(n.outerRadius - a, 0), i, r),
                e.arc(n.x, n.y, n.innerRadius, r, i, !0),
                e.closePath(),
                (e.fillStyle = n.backgroundColor),
                e.fill(),
                n.borderWidth &&
                  ("inner" === n.borderAlign
                    ? (e.beginPath(),
                      (t = a / n.outerRadius),
                      e.arc(n.x, n.y, n.outerRadius, i - t, r + t),
                      n.innerRadius > a
                        ? ((t = a / n.innerRadius),
                          e.arc(n.x, n.y, n.innerRadius - a, r + t, i - t, !0))
                        : e.arc(n.x, n.y, a, r + Math.PI / 2, i - Math.PI / 2),
                      e.closePath(),
                      e.clip(),
                      e.beginPath(),
                      e.arc(n.x, n.y, n.outerRadius, i, r),
                      e.arc(n.x, n.y, n.innerRadius, r, i, !0),
                      e.closePath(),
                      (e.lineWidth = 2 * n.borderWidth),
                      (e.lineJoin = "round"))
                    : ((e.lineWidth = n.borderWidth), (e.lineJoin = "bevel")),
                  (e.strokeStyle = n.borderColor),
                  e.stroke()),
                e.restore();
            },
          }),
          Mt = ut.valueOrDefault,
          St = ot.global.defaultColor;
        ot._set("global", {
          elements: {
            line: {
              tension: 0.4,
              backgroundColor: St,
              borderWidth: 3,
              borderColor: St,
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: "miter",
              capBezierPoints: !0,
              fill: !0,
            },
          },
        });
        var Dt = pt.extend({
            draw: function () {
              var t,
                e,
                n,
                i,
                r = this._view,
                a = this._chart.ctx,
                o = r.spanGaps,
                s = this._children.slice(),
                l = ot.global,
                u = l.elements.line,
                c = -1;
              for (
                this._loop && s.length && s.push(s[0]),
                  a.save(),
                  a.lineCap = r.borderCapStyle || u.borderCapStyle,
                  a.setLineDash && a.setLineDash(r.borderDash || u.borderDash),
                  a.lineDashOffset = Mt(r.borderDashOffset, u.borderDashOffset),
                  a.lineJoin = r.borderJoinStyle || u.borderJoinStyle,
                  a.lineWidth = Mt(r.borderWidth, u.borderWidth),
                  a.strokeStyle = r.borderColor || l.defaultColor,
                  a.beginPath(),
                  c = -1,
                  t = 0;
                t < s.length;
                ++t
              )
                (e = s[t]),
                  (n = ut.previousItem(s, t)),
                  (i = e._view),
                  0 === t
                    ? i.skip || (a.moveTo(i.x, i.y), (c = t))
                    : ((n = -1 === c ? n : s[c]),
                      i.skip ||
                        ((c !== t - 1 && !o) || -1 === c
                          ? a.moveTo(i.x, i.y)
                          : ut.canvas.lineTo(a, n._view, e._view),
                        (c = t)));
              a.stroke(), a.restore();
            },
          }),
          Ct = ut.valueOrDefault,
          Pt = ot.global.defaultColor;
        function Tt(t) {
          var e = this._view;
          return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
        }
        ot._set("global", {
          elements: {
            point: {
              radius: 3,
              pointStyle: "circle",
              backgroundColor: Pt,
              borderColor: Pt,
              borderWidth: 1,
              hitRadius: 1,
              hoverRadius: 4,
              hoverBorderWidth: 1,
            },
          },
        });
        var Ot = pt.extend({
            inRange: function (t, e) {
              var n = this._view;
              return (
                !!n &&
                Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) <
                  Math.pow(n.hitRadius + n.radius, 2)
              );
            },
            inLabelRange: Tt,
            inXRange: Tt,
            inYRange: function (t) {
              var e = this._view;
              return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
            },
            getCenterPoint: function () {
              var t = this._view;
              return { x: t.x, y: t.y };
            },
            getArea: function () {
              return Math.PI * Math.pow(this._view.radius, 2);
            },
            tooltipPosition: function () {
              var t = this._view;
              return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
            },
            draw: function (t) {
              var e = this._view,
                n = this._chart.ctx,
                i = e.pointStyle,
                r = e.rotation,
                a = e.radius,
                o = e.x,
                s = e.y,
                l = ot.global,
                u = l.defaultColor;
              e.skip ||
                ((void 0 === t || ut.canvas._isPointInArea(e, t)) &&
                  ((n.strokeStyle = e.borderColor || u),
                  (n.lineWidth = Ct(
                    e.borderWidth,
                    l.elements.point.borderWidth
                  )),
                  (n.fillStyle = e.backgroundColor || u),
                  ut.canvas.drawPoint(n, i, a, o, s, r)));
            },
          }),
          At = ot.global.defaultColor;
        function It(t) {
          return t && void 0 !== t.width;
        }
        function Ft(t) {
          var e, n, i, r, a;
          return (
            It(t)
              ? ((a = t.width / 2),
                (e = t.x - a),
                (n = t.x + a),
                (i = Math.min(t.y, t.base)),
                (r = Math.max(t.y, t.base)))
              : ((a = t.height / 2),
                (e = Math.min(t.x, t.base)),
                (n = Math.max(t.x, t.base)),
                (i = t.y - a),
                (r = t.y + a)),
            { left: e, top: i, right: n, bottom: r }
          );
        }
        function Lt(t, e, n) {
          return t === e ? n : t === n ? e : t;
        }
        function Rt(t, e, n) {
          var i,
            r,
            a,
            o,
            s = t.borderWidth,
            l = (function (t) {
              var e = t.borderSkipped,
                n = {};
              return e
                ? (t.horizontal
                    ? t.base > t.x && (e = Lt(e, "left", "right"))
                    : t.base < t.y && (e = Lt(e, "bottom", "top")),
                  (n[e] = !0),
                  n)
                : n;
            })(t);
          return (
            ut.isObject(s)
              ? ((i = +s.top || 0),
                (r = +s.right || 0),
                (a = +s.bottom || 0),
                (o = +s.left || 0))
              : (i = r = a = o = +s || 0),
            {
              t: l.top || i < 0 ? 0 : i > n ? n : i,
              r: l.right || r < 0 ? 0 : r > e ? e : r,
              b: l.bottom || a < 0 ? 0 : a > n ? n : a,
              l: l.left || o < 0 ? 0 : o > e ? e : o,
            }
          );
        }
        function Wt(t, e, n) {
          var i = null === e,
            r = null === n,
            a = !(!t || (i && r)) && Ft(t);
          return (
            a &&
            (i || (e >= a.left && e <= a.right)) &&
            (r || (n >= a.top && n <= a.bottom))
          );
        }
        ot._set("global", {
          elements: {
            rectangle: {
              backgroundColor: At,
              borderColor: At,
              borderSkipped: "bottom",
              borderWidth: 0,
            },
          },
        });
        var Yt = pt.extend({
            draw: function () {
              var t = this._chart.ctx,
                e = this._view,
                n = (function (t) {
                  var e = Ft(t),
                    n = e.right - e.left,
                    i = e.bottom - e.top,
                    r = Rt(t, n / 2, i / 2);
                  return {
                    outer: { x: e.left, y: e.top, w: n, h: i },
                    inner: {
                      x: e.left + r.l,
                      y: e.top + r.t,
                      w: n - r.l - r.r,
                      h: i - r.t - r.b,
                    },
                  };
                })(e),
                i = n.outer,
                r = n.inner;
              (t.fillStyle = e.backgroundColor),
                t.fillRect(i.x, i.y, i.w, i.h),
                (i.w === r.w && i.h === r.h) ||
                  (t.save(),
                  t.beginPath(),
                  t.rect(i.x, i.y, i.w, i.h),
                  t.clip(),
                  (t.fillStyle = e.borderColor),
                  t.rect(r.x, r.y, r.w, r.h),
                  t.fill("evenodd"),
                  t.restore());
            },
            height: function () {
              var t = this._view;
              return t.base - t.y;
            },
            inRange: function (t, e) {
              return Wt(this._view, t, e);
            },
            inLabelRange: function (t, e) {
              var n = this._view;
              return It(n) ? Wt(n, t, null) : Wt(n, null, e);
            },
            inXRange: function (t) {
              return Wt(this._view, t, null);
            },
            inYRange: function (t) {
              return Wt(this._view, null, t);
            },
            getCenterPoint: function () {
              var t,
                e,
                n = this._view;
              return (
                It(n)
                  ? ((t = n.x), (e = (n.y + n.base) / 2))
                  : ((t = (n.x + n.base) / 2), (e = n.y)),
                { x: t, y: e }
              );
            },
            getArea: function () {
              var t = this._view;
              return It(t)
                ? t.width * Math.abs(t.y - t.base)
                : t.height * Math.abs(t.x - t.base);
            },
            tooltipPosition: function () {
              var t = this._view;
              return { x: t.x, y: t.y };
            },
          }),
          zt = {},
          Nt = kt,
          Et = Dt,
          jt = Ot,
          Vt = Yt;
        (zt.Arc = Nt), (zt.Line = Et), (zt.Point = jt), (zt.Rectangle = Vt);
        var Ht = ut.options.resolve;
        ot._set("bar", {
          hover: { mode: "label" },
          scales: {
            xAxes: [
              {
                type: "category",
                categoryPercentage: 0.8,
                barPercentage: 0.9,
                offset: !0,
                gridLines: { offsetGridLines: !0 },
              },
            ],
            yAxes: [{ type: "linear" }],
          },
        });
        var Bt = wt.extend({
            dataElementType: zt.Rectangle,
            initialize: function () {
              var t,
                e = this;
              wt.prototype.initialize.apply(e, arguments),
                ((t = e.getMeta()).stack = e.getDataset().stack),
                (t.bar = !0);
            },
            update: function (t) {
              var e,
                n,
                i = this.getMeta().data;
              for (
                this._ruler = this.getRuler(), e = 0, n = i.length;
                e < n;
                ++e
              )
                this.updateElement(i[e], e, t);
            },
            updateElement: function (t, e, n) {
              var i = this,
                r = i.getMeta(),
                a = i.getDataset(),
                o = i._resolveElementOptions(t, e);
              (t._xScale = i.getScaleForId(r.xAxisID)),
                (t._yScale = i.getScaleForId(r.yAxisID)),
                (t._datasetIndex = i.index),
                (t._index = e),
                (t._model = {
                  backgroundColor: o.backgroundColor,
                  borderColor: o.borderColor,
                  borderSkipped: o.borderSkipped,
                  borderWidth: o.borderWidth,
                  datasetLabel: a.label,
                  label: i.chart.data.labels[e],
                }),
                i._updateElementGeometry(t, e, n),
                t.pivot();
            },
            _updateElementGeometry: function (t, e, n) {
              var i = this,
                r = t._model,
                a = i._getValueScale(),
                o = a.getBasePixel(),
                s = a.isHorizontal(),
                l = i._ruler || i.getRuler(),
                u = i.calculateBarValuePixels(i.index, e),
                c = i.calculateBarIndexPixels(i.index, e, l);
              (r.horizontal = s),
                (r.base = n ? o : u.base),
                (r.x = s ? (n ? o : u.head) : c.center),
                (r.y = s ? c.center : n ? o : u.head),
                (r.height = s ? c.size : void 0),
                (r.width = s ? void 0 : c.size);
            },
            _getStacks: function (t) {
              var e,
                n,
                i = this.chart,
                r = this._getIndexScale().options.stacked,
                a = void 0 === t ? i.data.datasets.length : t + 1,
                o = [];
              for (e = 0; e < a; ++e)
                (n = i.getDatasetMeta(e)).bar &&
                  i.isDatasetVisible(e) &&
                  (!1 === r ||
                    (!0 === r && -1 === o.indexOf(n.stack)) ||
                    (void 0 === r &&
                      (void 0 === n.stack || -1 === o.indexOf(n.stack)))) &&
                  o.push(n.stack);
              return o;
            },
            getStackCount: function () {
              return this._getStacks().length;
            },
            getStackIndex: function (t, e) {
              var n = this._getStacks(t),
                i = void 0 !== e ? n.indexOf(e) : -1;
              return -1 === i ? n.length - 1 : i;
            },
            getRuler: function () {
              var t,
                e,
                n = this._getIndexScale(),
                i = this.getStackCount(),
                r = this.index,
                a = n.isHorizontal(),
                o = a ? n.left : n.top,
                s = o + (a ? n.width : n.height),
                l = [];
              for (t = 0, e = this.getMeta().data.length; t < e; ++t)
                l.push(n.getPixelForValue(null, t, r));
              return {
                min: ut.isNullOrUndef(n.options.barThickness)
                  ? (function (t, e) {
                      var n,
                        i,
                        r,
                        a,
                        o = t.isHorizontal() ? t.width : t.height,
                        s = t.getTicks();
                      for (r = 1, a = e.length; r < a; ++r)
                        o = Math.min(o, Math.abs(e[r] - e[r - 1]));
                      for (r = 0, a = s.length; r < a; ++r)
                        (i = t.getPixelForTick(r)),
                          (o = r > 0 ? Math.min(o, i - n) : o),
                          (n = i);
                      return o;
                    })(n, l)
                  : -1,
                pixels: l,
                start: o,
                end: s,
                stackCount: i,
                scale: n,
              };
            },
            calculateBarValuePixels: function (t, e) {
              var n,
                i,
                r,
                a,
                o,
                s,
                l = this.chart,
                u = this.getMeta(),
                c = this._getValueScale(),
                d = c.isHorizontal(),
                h = l.data.datasets,
                f = +c.getRightValue(h[t].data[e]),
                p = c.options.minBarLength,
                g = c.options.stacked,
                m = u.stack,
                v = 0;
              if (g || (void 0 === g && void 0 !== m))
                for (n = 0; n < t; ++n)
                  (i = l.getDatasetMeta(n)).bar &&
                    i.stack === m &&
                    i.controller._getValueScaleId() === c.id &&
                    l.isDatasetVisible(n) &&
                    ((r = +c.getRightValue(h[n].data[e])),
                    ((f < 0 && r < 0) || (f >= 0 && r > 0)) && (v += r));
              return (
                (a = c.getPixelForValue(v)),
                (s = (o = c.getPixelForValue(v + f)) - a),
                void 0 !== p &&
                  Math.abs(s) < p &&
                  ((s = p),
                  (o = (f >= 0 && !d) || (f < 0 && d) ? a - p : a + p)),
                { size: s, base: a, head: o, center: o + s / 2 }
              );
            },
            calculateBarIndexPixels: function (t, e, n) {
              var i = n.scale.options,
                r =
                  "flex" === i.barThickness
                    ? (function (t, e, n) {
                        var i,
                          r = e.pixels,
                          a = r[t],
                          o = t > 0 ? r[t - 1] : null,
                          s = t < r.length - 1 ? r[t + 1] : null,
                          l = n.categoryPercentage;
                        return (
                          null === o &&
                            (o = a - (null === s ? e.end - e.start : s - a)),
                          null === s && (s = a + a - o),
                          (i = a - ((a - Math.min(o, s)) / 2) * l),
                          {
                            chunk: ((Math.abs(s - o) / 2) * l) / e.stackCount,
                            ratio: n.barPercentage,
                            start: i,
                          }
                        );
                      })(e, n, i)
                    : (function (t, e, n) {
                        var i,
                          r,
                          a = n.barThickness,
                          o = e.stackCount,
                          s = e.pixels[t];
                        return (
                          ut.isNullOrUndef(a)
                            ? ((i = e.min * n.categoryPercentage),
                              (r = n.barPercentage))
                            : ((i = a * o), (r = 1)),
                          { chunk: i / o, ratio: r, start: s - i / 2 }
                        );
                      })(e, n, i),
                a = this.getStackIndex(t, this.getMeta().stack),
                o = r.start + r.chunk * a + r.chunk / 2,
                s = Math.min(
                  ut.valueOrDefault(i.maxBarThickness, 1 / 0),
                  r.chunk * r.ratio
                );
              return { base: o - s / 2, head: o + s / 2, center: o, size: s };
            },
            draw: function () {
              var t = this.chart,
                e = this._getValueScale(),
                n = this.getMeta().data,
                i = this.getDataset(),
                r = n.length,
                a = 0;
              for (ut.canvas.clipArea(t.ctx, t.chartArea); a < r; ++a)
                isNaN(e.getRightValue(i.data[a])) || n[a].draw();
              ut.canvas.unclipArea(t.ctx);
            },
            _resolveElementOptions: function (t, e) {
              var n,
                i,
                r,
                a = this.chart,
                o = a.data.datasets[this.index],
                s = t.custom || {},
                l = a.options.elements.rectangle,
                u = {},
                c = {
                  chart: a,
                  dataIndex: e,
                  dataset: o,
                  datasetIndex: this.index,
                },
                d = [
                  "backgroundColor",
                  "borderColor",
                  "borderSkipped",
                  "borderWidth",
                ];
              for (n = 0, i = d.length; n < i; ++n)
                u[(r = d[n])] = Ht([s[r], o[r], l[r]], c, e);
              return u;
            },
          }),
          Ut = ut.valueOrDefault,
          Gt = ut.options.resolve;
        ot._set("bubble", {
          hover: { mode: "single" },
          scales: {
            xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }],
            yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }],
          },
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (t, e) {
                var n = e.datasets[t.datasetIndex].label || "",
                  i = e.datasets[t.datasetIndex].data[t.index];
                return (
                  n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")"
                );
              },
            },
          },
        });
        var qt = wt.extend({
            dataElementType: zt.Point,
            update: function (t) {
              var e = this,
                n = e.getMeta().data;
              ut.each(n, function (n, i) {
                e.updateElement(n, i, t);
              });
            },
            updateElement: function (t, e, n) {
              var i = this,
                r = i.getMeta(),
                a = t.custom || {},
                o = i.getScaleForId(r.xAxisID),
                s = i.getScaleForId(r.yAxisID),
                l = i._resolveElementOptions(t, e),
                u = i.getDataset().data[e],
                c = i.index,
                d = n
                  ? o.getPixelForDecimal(0.5)
                  : o.getPixelForValue("object" === typeof u ? u : NaN, e, c),
                h = n ? s.getBasePixel() : s.getPixelForValue(u, e, c);
              (t._xScale = o),
                (t._yScale = s),
                (t._options = l),
                (t._datasetIndex = c),
                (t._index = e),
                (t._model = {
                  backgroundColor: l.backgroundColor,
                  borderColor: l.borderColor,
                  borderWidth: l.borderWidth,
                  hitRadius: l.hitRadius,
                  pointStyle: l.pointStyle,
                  rotation: l.rotation,
                  radius: n ? 0 : l.radius,
                  skip: a.skip || isNaN(d) || isNaN(h),
                  x: d,
                  y: h,
                }),
                t.pivot();
            },
            setHoverStyle: function (t) {
              var e = t._model,
                n = t._options,
                i = ut.getHoverColor;
              (t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius,
              }),
                (e.backgroundColor = Ut(
                  n.hoverBackgroundColor,
                  i(n.backgroundColor)
                )),
                (e.borderColor = Ut(n.hoverBorderColor, i(n.borderColor))),
                (e.borderWidth = Ut(n.hoverBorderWidth, n.borderWidth)),
                (e.radius = n.radius + n.hoverRadius);
            },
            _resolveElementOptions: function (t, e) {
              var n,
                i,
                r,
                a = this.chart,
                o = a.data.datasets[this.index],
                s = t.custom || {},
                l = a.options.elements.point,
                u = o.data[e],
                c = {},
                d = {
                  chart: a,
                  dataIndex: e,
                  dataset: o,
                  datasetIndex: this.index,
                },
                h = [
                  "backgroundColor",
                  "borderColor",
                  "borderWidth",
                  "hoverBackgroundColor",
                  "hoverBorderColor",
                  "hoverBorderWidth",
                  "hoverRadius",
                  "hitRadius",
                  "pointStyle",
                  "rotation",
                ];
              for (n = 0, i = h.length; n < i; ++n)
                c[(r = h[n])] = Gt([s[r], o[r], l[r]], d, e);
              return (
                (c.radius = Gt(
                  [s.radius, u ? u.r : void 0, o.radius, l.radius],
                  d,
                  e
                )),
                c
              );
            },
          }),
          Zt = ut.options.resolve,
          $t = ut.valueOrDefault;
        ot._set("doughnut", {
          animation: { animateRotate: !0, animateScale: !1 },
          hover: { mode: "single" },
          legendCallback: function (t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var n = t.data,
              i = n.datasets,
              r = n.labels;
            if (i.length)
              for (var a = 0; a < i[0].data.length; ++a)
                e.push(
                  '<li><span style="background-color:' +
                    i[0].backgroundColor[a] +
                    '"></span>'
                ),
                  r[a] && e.push(r[a]),
                  e.push("</li>");
            return e.push("</ul>"), e.join("");
          },
          legend: {
            labels: {
              generateLabels: function (t) {
                var e = t.data;
                return e.labels.length && e.datasets.length
                  ? e.labels.map(function (n, i) {
                      var r = t.getDatasetMeta(0),
                        a = e.datasets[0],
                        o = r.data[i],
                        s = (o && o.custom) || {},
                        l = t.options.elements.arc;
                      return {
                        text: n,
                        fillStyle: Zt(
                          [
                            s.backgroundColor,
                            a.backgroundColor,
                            l.backgroundColor,
                          ],
                          void 0,
                          i
                        ),
                        strokeStyle: Zt(
                          [s.borderColor, a.borderColor, l.borderColor],
                          void 0,
                          i
                        ),
                        lineWidth: Zt(
                          [s.borderWidth, a.borderWidth, l.borderWidth],
                          void 0,
                          i
                        ),
                        hidden: isNaN(a.data[i]) || r.data[i].hidden,
                        index: i,
                      };
                    })
                  : [];
              },
            },
            onClick: function (t, e) {
              var n,
                i,
                r,
                a = e.index,
                o = this.chart;
              for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)
                (r = o.getDatasetMeta(n)).data[a] &&
                  (r.data[a].hidden = !r.data[a].hidden);
              o.update();
            },
          },
          cutoutPercentage: 50,
          rotation: -0.5 * Math.PI,
          circumference: 2 * Math.PI,
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (t, e) {
                var n = e.labels[t.index],
                  i = ": " + e.datasets[t.datasetIndex].data[t.index];
                return ut.isArray(n) ? ((n = n.slice())[0] += i) : (n += i), n;
              },
            },
          },
        });
        var Kt = wt.extend({
          dataElementType: zt.Arc,
          linkScales: ut.noop,
          getRingIndex: function (t) {
            for (var e = 0, n = 0; n < t; ++n)
              this.chart.isDatasetVisible(n) && ++e;
            return e;
          },
          update: function (t) {
            var e,
              n,
              i = this,
              r = i.chart,
              a = r.chartArea,
              o = r.options,
              s = a.right - a.left,
              l = a.bottom - a.top,
              u = Math.min(s, l),
              c = { x: 0, y: 0 },
              d = i.getMeta(),
              h = d.data,
              f = o.cutoutPercentage,
              p = o.circumference,
              g = i._getRingWeight(i.index);
            if (p < 2 * Math.PI) {
              var m = o.rotation % (2 * Math.PI),
                v =
                  (m +=
                    2 * Math.PI * (m >= Math.PI ? -1 : m < -Math.PI ? 1 : 0)) +
                  p,
                y = { x: Math.cos(m), y: Math.sin(m) },
                b = { x: Math.cos(v), y: Math.sin(v) },
                x =
                  (m <= 0 && v >= 0) || (m <= 2 * Math.PI && 2 * Math.PI <= v),
                _ =
                  (m <= 0.5 * Math.PI && 0.5 * Math.PI <= v) ||
                  (m <= 2.5 * Math.PI && 2.5 * Math.PI <= v),
                w =
                  (m <= -Math.PI && -Math.PI <= v) ||
                  (m <= Math.PI && Math.PI <= v),
                k =
                  (m <= 0.5 * -Math.PI && 0.5 * -Math.PI <= v) ||
                  (m <= 1.5 * Math.PI && 1.5 * Math.PI <= v),
                M = f / 100,
                S = {
                  x: w
                    ? -1
                    : Math.min(
                        y.x * (y.x < 0 ? 1 : M),
                        b.x * (b.x < 0 ? 1 : M)
                      ),
                  y: k
                    ? -1
                    : Math.min(
                        y.y * (y.y < 0 ? 1 : M),
                        b.y * (b.y < 0 ? 1 : M)
                      ),
                },
                D = {
                  x: x
                    ? 1
                    : Math.max(
                        y.x * (y.x > 0 ? 1 : M),
                        b.x * (b.x > 0 ? 1 : M)
                      ),
                  y: _
                    ? 1
                    : Math.max(
                        y.y * (y.y > 0 ? 1 : M),
                        b.y * (b.y > 0 ? 1 : M)
                      ),
                },
                C = { width: 0.5 * (D.x - S.x), height: 0.5 * (D.y - S.y) };
              (u = Math.min(s / C.width, l / C.height)),
                (c = { x: -0.5 * (D.x + S.x), y: -0.5 * (D.y + S.y) });
            }
            for (e = 0, n = h.length; e < n; ++e)
              h[e]._options = i._resolveElementOptions(h[e], e);
            for (
              r.borderWidth = i.getMaxBorderWidth(),
                r.outerRadius = Math.max((u - r.borderWidth) / 2, 0),
                r.innerRadius = Math.max(f ? (r.outerRadius / 100) * f : 0, 0),
                r.radiusLength =
                  (r.outerRadius - r.innerRadius) /
                  (i._getVisibleDatasetWeightTotal() || 1),
                r.offsetX = c.x * r.outerRadius,
                r.offsetY = c.y * r.outerRadius,
                d.total = i.calculateTotal(),
                i.outerRadius =
                  r.outerRadius -
                  r.radiusLength * i._getRingWeightOffset(i.index),
                i.innerRadius = Math.max(i.outerRadius - r.radiusLength * g, 0),
                e = 0,
                n = h.length;
              e < n;
              ++e
            )
              i.updateElement(h[e], e, t);
          },
          updateElement: function (t, e, n) {
            var i = this,
              r = i.chart,
              a = r.chartArea,
              o = r.options,
              s = o.animation,
              l = (a.left + a.right) / 2,
              u = (a.top + a.bottom) / 2,
              c = o.rotation,
              d = o.rotation,
              h = i.getDataset(),
              f =
                n && s.animateRotate
                  ? 0
                  : t.hidden
                  ? 0
                  : i.calculateCircumference(h.data[e]) *
                    (o.circumference / (2 * Math.PI)),
              p = n && s.animateScale ? 0 : i.innerRadius,
              g = n && s.animateScale ? 0 : i.outerRadius,
              m = t._options || {};
            ut.extend(t, {
              _datasetIndex: i.index,
              _index: e,
              _model: {
                backgroundColor: m.backgroundColor,
                borderColor: m.borderColor,
                borderWidth: m.borderWidth,
                borderAlign: m.borderAlign,
                x: l + r.offsetX,
                y: u + r.offsetY,
                startAngle: c,
                endAngle: d,
                circumference: f,
                outerRadius: g,
                innerRadius: p,
                label: ut.valueAtIndexOrDefault(h.label, e, r.data.labels[e]),
              },
            });
            var v = t._model;
            (n && s.animateRotate) ||
              ((v.startAngle =
                0 === e ? o.rotation : i.getMeta().data[e - 1]._model.endAngle),
              (v.endAngle = v.startAngle + v.circumference)),
              t.pivot();
          },
          calculateTotal: function () {
            var t,
              e = this.getDataset(),
              n = this.getMeta(),
              i = 0;
            return (
              ut.each(n.data, function (n, r) {
                (t = e.data[r]), isNaN(t) || n.hidden || (i += Math.abs(t));
              }),
              i
            );
          },
          calculateCircumference: function (t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0;
          },
          getMaxBorderWidth: function (t) {
            var e,
              n,
              i,
              r,
              a,
              o,
              s,
              l,
              u = 0,
              c = this.chart;
            if (!t)
              for (e = 0, n = c.data.datasets.length; e < n; ++e)
                if (c.isDatasetVisible(e)) {
                  (t = (i = c.getDatasetMeta(e)).data),
                    e !== this.index && (a = i.controller);
                  break;
                }
            if (!t) return 0;
            for (e = 0, n = t.length; e < n; ++e)
              (r = t[e]),
                "inner" !==
                  (o = a ? a._resolveElementOptions(r, e) : r._options)
                    .borderAlign &&
                  ((s = o.borderWidth),
                  (u = (l = o.hoverBorderWidth) > (u = s > u ? s : u) ? l : u));
            return u;
          },
          setHoverStyle: function (t) {
            var e = t._model,
              n = t._options,
              i = ut.getHoverColor;
            (t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
            }),
              (e.backgroundColor = $t(
                n.hoverBackgroundColor,
                i(n.backgroundColor)
              )),
              (e.borderColor = $t(n.hoverBorderColor, i(n.borderColor))),
              (e.borderWidth = $t(n.hoverBorderWidth, n.borderWidth));
          },
          _resolveElementOptions: function (t, e) {
            var n,
              i,
              r,
              a = this.chart,
              o = this.getDataset(),
              s = t.custom || {},
              l = a.options.elements.arc,
              u = {},
              c = {
                chart: a,
                dataIndex: e,
                dataset: o,
                datasetIndex: this.index,
              },
              d = [
                "backgroundColor",
                "borderColor",
                "borderWidth",
                "borderAlign",
                "hoverBackgroundColor",
                "hoverBorderColor",
                "hoverBorderWidth",
              ];
            for (n = 0, i = d.length; n < i; ++n)
              u[(r = d[n])] = Zt([s[r], o[r], l[r]], c, e);
            return u;
          },
          _getRingWeightOffset: function (t) {
            for (var e = 0, n = 0; n < t; ++n)
              this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
            return e;
          },
          _getRingWeight: function (t) {
            return Math.max($t(this.chart.data.datasets[t].weight, 1), 0);
          },
          _getVisibleDatasetWeightTotal: function () {
            return this._getRingWeightOffset(this.chart.data.datasets.length);
          },
        });
        ot._set("horizontalBar", {
          hover: { mode: "index", axis: "y" },
          scales: {
            xAxes: [{ type: "linear", position: "bottom" }],
            yAxes: [
              {
                type: "category",
                position: "left",
                categoryPercentage: 0.8,
                barPercentage: 0.9,
                offset: !0,
                gridLines: { offsetGridLines: !0 },
              },
            ],
          },
          elements: { rectangle: { borderSkipped: "left" } },
          tooltips: { mode: "index", axis: "y" },
        });
        var Xt = Bt.extend({
            _getValueScaleId: function () {
              return this.getMeta().xAxisID;
            },
            _getIndexScaleId: function () {
              return this.getMeta().yAxisID;
            },
          }),
          Jt = ut.valueOrDefault,
          Qt = ut.options.resolve,
          te = ut.canvas._isPointInArea;
        function ee(t, e) {
          return Jt(t.showLine, e.showLines);
        }
        ot._set("line", {
          showLines: !0,
          spanGaps: !1,
          hover: { mode: "label" },
          scales: {
            xAxes: [{ type: "category", id: "x-axis-0" }],
            yAxes: [{ type: "linear", id: "y-axis-0" }],
          },
        });
        var ne = wt.extend({
            datasetElementType: zt.Line,
            dataElementType: zt.Point,
            update: function (t) {
              var e,
                n,
                i = this,
                r = i.getMeta(),
                a = r.dataset,
                o = r.data || [],
                s = i.getScaleForId(r.yAxisID),
                l = i.getDataset(),
                u = ee(l, i.chart.options);
              for (
                u &&
                  (void 0 !== l.tension &&
                    void 0 === l.lineTension &&
                    (l.lineTension = l.tension),
                  (a._scale = s),
                  (a._datasetIndex = i.index),
                  (a._children = o),
                  (a._model = i._resolveLineOptions(a)),
                  a.pivot()),
                  e = 0,
                  n = o.length;
                e < n;
                ++e
              )
                i.updateElement(o[e], e, t);
              for (
                u && 0 !== a._model.tension && i.updateBezierControlPoints(),
                  e = 0,
                  n = o.length;
                e < n;
                ++e
              )
                o[e].pivot();
            },
            updateElement: function (t, e, n) {
              var i,
                r,
                a = this,
                o = a.getMeta(),
                s = t.custom || {},
                l = a.getDataset(),
                u = a.index,
                c = l.data[e],
                d = a.getScaleForId(o.yAxisID),
                h = a.getScaleForId(o.xAxisID),
                f = o.dataset._model,
                p = a._resolvePointOptions(t, e);
              (i = h.getPixelForValue("object" === typeof c ? c : NaN, e, u)),
                (r = n ? d.getBasePixel() : a.calculatePointY(c, e, u)),
                (t._xScale = h),
                (t._yScale = d),
                (t._options = p),
                (t._datasetIndex = u),
                (t._index = e),
                (t._model = {
                  x: i,
                  y: r,
                  skip: s.skip || isNaN(i) || isNaN(r),
                  radius: p.radius,
                  pointStyle: p.pointStyle,
                  rotation: p.rotation,
                  backgroundColor: p.backgroundColor,
                  borderColor: p.borderColor,
                  borderWidth: p.borderWidth,
                  tension: Jt(s.tension, f ? f.tension : 0),
                  steppedLine: !!f && f.steppedLine,
                  hitRadius: p.hitRadius,
                });
            },
            _resolvePointOptions: function (t, e) {
              var n,
                i,
                r,
                a = this.chart,
                o = a.data.datasets[this.index],
                s = t.custom || {},
                l = a.options.elements.point,
                u = {},
                c = {
                  chart: a,
                  dataIndex: e,
                  dataset: o,
                  datasetIndex: this.index,
                },
                d = {
                  backgroundColor: "pointBackgroundColor",
                  borderColor: "pointBorderColor",
                  borderWidth: "pointBorderWidth",
                  hitRadius: "pointHitRadius",
                  hoverBackgroundColor: "pointHoverBackgroundColor",
                  hoverBorderColor: "pointHoverBorderColor",
                  hoverBorderWidth: "pointHoverBorderWidth",
                  hoverRadius: "pointHoverRadius",
                  pointStyle: "pointStyle",
                  radius: "pointRadius",
                  rotation: "pointRotation",
                },
                h = Object.keys(d);
              for (n = 0, i = h.length; n < i; ++n)
                u[(r = h[n])] = Qt([s[r], o[d[r]], o[r], l[r]], c, e);
              return u;
            },
            _resolveLineOptions: function (t) {
              var e,
                n,
                i,
                r = this.chart,
                a = r.data.datasets[this.index],
                o = t.custom || {},
                s = r.options,
                l = s.elements.line,
                u = {},
                c = [
                  "backgroundColor",
                  "borderWidth",
                  "borderColor",
                  "borderCapStyle",
                  "borderDash",
                  "borderDashOffset",
                  "borderJoinStyle",
                  "fill",
                  "cubicInterpolationMode",
                ];
              for (e = 0, n = c.length; e < n; ++e)
                u[(i = c[e])] = Qt([o[i], a[i], l[i]]);
              return (
                (u.spanGaps = Jt(a.spanGaps, s.spanGaps)),
                (u.tension = Jt(a.lineTension, l.tension)),
                (u.steppedLine = Qt([o.steppedLine, a.steppedLine, l.stepped])),
                u
              );
            },
            calculatePointY: function (t, e, n) {
              var i,
                r,
                a,
                o = this.chart,
                s = this.getMeta(),
                l = this.getScaleForId(s.yAxisID),
                u = 0,
                c = 0;
              if (l.options.stacked) {
                for (i = 0; i < n; i++)
                  if (
                    ((r = o.data.datasets[i]),
                    "line" === (a = o.getDatasetMeta(i)).type &&
                      a.yAxisID === l.id &&
                      o.isDatasetVisible(i))
                  ) {
                    var d = Number(l.getRightValue(r.data[e]));
                    d < 0 ? (c += d || 0) : (u += d || 0);
                  }
                var h = Number(l.getRightValue(t));
                return h < 0
                  ? l.getPixelForValue(c + h)
                  : l.getPixelForValue(u + h);
              }
              return l.getPixelForValue(t);
            },
            updateBezierControlPoints: function () {
              var t,
                e,
                n,
                i,
                r = this.chart,
                a = this.getMeta(),
                o = a.dataset._model,
                s = r.chartArea,
                l = a.data || [];
              function u(t, e, n) {
                return Math.max(Math.min(t, n), e);
              }
              if (
                (o.spanGaps &&
                  (l = l.filter(function (t) {
                    return !t._model.skip;
                  })),
                "monotone" === o.cubicInterpolationMode)
              )
                ut.splineCurveMonotone(l);
              else
                for (t = 0, e = l.length; t < e; ++t)
                  (n = l[t]._model),
                    (i = ut.splineCurve(
                      ut.previousItem(l, t)._model,
                      n,
                      ut.nextItem(l, t)._model,
                      o.tension
                    )),
                    (n.controlPointPreviousX = i.previous.x),
                    (n.controlPointPreviousY = i.previous.y),
                    (n.controlPointNextX = i.next.x),
                    (n.controlPointNextY = i.next.y);
              if (r.options.elements.line.capBezierPoints)
                for (t = 0, e = l.length; t < e; ++t)
                  (n = l[t]._model),
                    te(n, s) &&
                      (t > 0 &&
                        te(l[t - 1]._model, s) &&
                        ((n.controlPointPreviousX = u(
                          n.controlPointPreviousX,
                          s.left,
                          s.right
                        )),
                        (n.controlPointPreviousY = u(
                          n.controlPointPreviousY,
                          s.top,
                          s.bottom
                        ))),
                      t < l.length - 1 &&
                        te(l[t + 1]._model, s) &&
                        ((n.controlPointNextX = u(
                          n.controlPointNextX,
                          s.left,
                          s.right
                        )),
                        (n.controlPointNextY = u(
                          n.controlPointNextY,
                          s.top,
                          s.bottom
                        ))));
            },
            draw: function () {
              var t,
                e = this.chart,
                n = this.getMeta(),
                i = n.data || [],
                r = e.chartArea,
                a = i.length,
                o = 0;
              for (
                ee(this.getDataset(), e.options) &&
                ((t = (n.dataset._model.borderWidth || 0) / 2),
                ut.canvas.clipArea(e.ctx, {
                  left: r.left,
                  right: r.right,
                  top: r.top - t,
                  bottom: r.bottom + t,
                }),
                n.dataset.draw(),
                ut.canvas.unclipArea(e.ctx));
                o < a;
                ++o
              )
                i[o].draw(r);
            },
            setHoverStyle: function (t) {
              var e = t._model,
                n = t._options,
                i = ut.getHoverColor;
              (t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius,
              }),
                (e.backgroundColor = Jt(
                  n.hoverBackgroundColor,
                  i(n.backgroundColor)
                )),
                (e.borderColor = Jt(n.hoverBorderColor, i(n.borderColor))),
                (e.borderWidth = Jt(n.hoverBorderWidth, n.borderWidth)),
                (e.radius = Jt(n.hoverRadius, n.radius));
            },
          }),
          ie = ut.options.resolve;
        ot._set("polarArea", {
          scale: {
            type: "radialLinear",
            angleLines: { display: !1 },
            gridLines: { circular: !0 },
            pointLabels: { display: !1 },
            ticks: { beginAtZero: !0 },
          },
          animation: { animateRotate: !0, animateScale: !0 },
          startAngle: -0.5 * Math.PI,
          legendCallback: function (t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var n = t.data,
              i = n.datasets,
              r = n.labels;
            if (i.length)
              for (var a = 0; a < i[0].data.length; ++a)
                e.push(
                  '<li><span style="background-color:' +
                    i[0].backgroundColor[a] +
                    '"></span>'
                ),
                  r[a] && e.push(r[a]),
                  e.push("</li>");
            return e.push("</ul>"), e.join("");
          },
          legend: {
            labels: {
              generateLabels: function (t) {
                var e = t.data;
                return e.labels.length && e.datasets.length
                  ? e.labels.map(function (n, i) {
                      var r = t.getDatasetMeta(0),
                        a = e.datasets[0],
                        o = r.data[i].custom || {},
                        s = t.options.elements.arc;
                      return {
                        text: n,
                        fillStyle: ie(
                          [
                            o.backgroundColor,
                            a.backgroundColor,
                            s.backgroundColor,
                          ],
                          void 0,
                          i
                        ),
                        strokeStyle: ie(
                          [o.borderColor, a.borderColor, s.borderColor],
                          void 0,
                          i
                        ),
                        lineWidth: ie(
                          [o.borderWidth, a.borderWidth, s.borderWidth],
                          void 0,
                          i
                        ),
                        hidden: isNaN(a.data[i]) || r.data[i].hidden,
                        index: i,
                      };
                    })
                  : [];
              },
            },
            onClick: function (t, e) {
              var n,
                i,
                r,
                a = e.index,
                o = this.chart;
              for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)
                (r = o.getDatasetMeta(n)).data[a].hidden = !r.data[a].hidden;
              o.update();
            },
          },
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (t, e) {
                return e.labels[t.index] + ": " + t.yLabel;
              },
            },
          },
        });
        var re = wt.extend({
          dataElementType: zt.Arc,
          linkScales: ut.noop,
          update: function (t) {
            var e,
              n,
              i,
              r = this,
              a = r.getDataset(),
              o = r.getMeta(),
              s = r.chart.options.startAngle || 0,
              l = (r._starts = []),
              u = (r._angles = []),
              c = o.data;
            for (
              r._updateRadius(),
                o.count = r.countVisibleElements(),
                e = 0,
                n = a.data.length;
              e < n;
              e++
            )
              (l[e] = s), (i = r._computeAngle(e)), (u[e] = i), (s += i);
            for (e = 0, n = c.length; e < n; ++e)
              (c[e]._options = r._resolveElementOptions(c[e], e)),
                r.updateElement(c[e], e, t);
          },
          _updateRadius: function () {
            var t = this,
              e = t.chart,
              n = e.chartArea,
              i = e.options,
              r = Math.min(n.right - n.left, n.bottom - n.top);
            (e.outerRadius = Math.max(r / 2, 0)),
              (e.innerRadius = Math.max(
                i.cutoutPercentage
                  ? (e.outerRadius / 100) * i.cutoutPercentage
                  : 1,
                0
              )),
              (e.radiusLength =
                (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount()),
              (t.outerRadius = e.outerRadius - e.radiusLength * t.index),
              (t.innerRadius = t.outerRadius - e.radiusLength);
          },
          updateElement: function (t, e, n) {
            var i = this,
              r = i.chart,
              a = i.getDataset(),
              o = r.options,
              s = o.animation,
              l = r.scale,
              u = r.data.labels,
              c = l.xCenter,
              d = l.yCenter,
              h = o.startAngle,
              f = t.hidden ? 0 : l.getDistanceFromCenterForValue(a.data[e]),
              p = i._starts[e],
              g = p + (t.hidden ? 0 : i._angles[e]),
              m = s.animateScale
                ? 0
                : l.getDistanceFromCenterForValue(a.data[e]),
              v = t._options || {};
            ut.extend(t, {
              _datasetIndex: i.index,
              _index: e,
              _scale: l,
              _model: {
                backgroundColor: v.backgroundColor,
                borderColor: v.borderColor,
                borderWidth: v.borderWidth,
                borderAlign: v.borderAlign,
                x: c,
                y: d,
                innerRadius: 0,
                outerRadius: n ? m : f,
                startAngle: n && s.animateRotate ? h : p,
                endAngle: n && s.animateRotate ? h : g,
                label: ut.valueAtIndexOrDefault(u, e, u[e]),
              },
            }),
              t.pivot();
          },
          countVisibleElements: function () {
            var t = this.getDataset(),
              e = this.getMeta(),
              n = 0;
            return (
              ut.each(e.data, function (e, i) {
                isNaN(t.data[i]) || e.hidden || n++;
              }),
              n
            );
          },
          setHoverStyle: function (t) {
            var e = t._model,
              n = t._options,
              i = ut.getHoverColor,
              r = ut.valueOrDefault;
            (t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
            }),
              (e.backgroundColor = r(
                n.hoverBackgroundColor,
                i(n.backgroundColor)
              )),
              (e.borderColor = r(n.hoverBorderColor, i(n.borderColor))),
              (e.borderWidth = r(n.hoverBorderWidth, n.borderWidth));
          },
          _resolveElementOptions: function (t, e) {
            var n,
              i,
              r,
              a = this.chart,
              o = this.getDataset(),
              s = t.custom || {},
              l = a.options.elements.arc,
              u = {},
              c = {
                chart: a,
                dataIndex: e,
                dataset: o,
                datasetIndex: this.index,
              },
              d = [
                "backgroundColor",
                "borderColor",
                "borderWidth",
                "borderAlign",
                "hoverBackgroundColor",
                "hoverBorderColor",
                "hoverBorderWidth",
              ];
            for (n = 0, i = d.length; n < i; ++n)
              u[(r = d[n])] = ie([s[r], o[r], l[r]], c, e);
            return u;
          },
          _computeAngle: function (t) {
            var e = this,
              n = this.getMeta().count,
              i = e.getDataset(),
              r = e.getMeta();
            if (isNaN(i.data[t]) || r.data[t].hidden) return 0;
            var a = {
              chart: e.chart,
              dataIndex: t,
              dataset: i,
              datasetIndex: e.index,
            };
            return ie(
              [e.chart.options.elements.arc.angle, (2 * Math.PI) / n],
              a,
              t
            );
          },
        });
        ot._set("pie", ut.clone(ot.doughnut)),
          ot._set("pie", { cutoutPercentage: 0 });
        var ae = Kt,
          oe = ut.valueOrDefault,
          se = ut.options.resolve;
        ot._set("radar", {
          scale: { type: "radialLinear" },
          elements: { line: { tension: 0 } },
        });
        var le = wt.extend({
          datasetElementType: zt.Line,
          dataElementType: zt.Point,
          linkScales: ut.noop,
          update: function (t) {
            var e,
              n,
              i = this,
              r = i.getMeta(),
              a = r.dataset,
              o = r.data || [],
              s = i.chart.scale,
              l = i.getDataset();
            for (
              void 0 !== l.tension &&
                void 0 === l.lineTension &&
                (l.lineTension = l.tension),
                a._scale = s,
                a._datasetIndex = i.index,
                a._children = o,
                a._loop = !0,
                a._model = i._resolveLineOptions(a),
                a.pivot(),
                e = 0,
                n = o.length;
              e < n;
              ++e
            )
              i.updateElement(o[e], e, t);
            for (i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e)
              o[e].pivot();
          },
          updateElement: function (t, e, n) {
            var i = this,
              r = t.custom || {},
              a = i.getDataset(),
              o = i.chart.scale,
              s = o.getPointPositionForValue(e, a.data[e]),
              l = i._resolvePointOptions(t, e),
              u = i.getMeta().dataset._model,
              c = n ? o.xCenter : s.x,
              d = n ? o.yCenter : s.y;
            (t._scale = o),
              (t._options = l),
              (t._datasetIndex = i.index),
              (t._index = e),
              (t._model = {
                x: c,
                y: d,
                skip: r.skip || isNaN(c) || isNaN(d),
                radius: l.radius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                tension: oe(r.tension, u ? u.tension : 0),
                hitRadius: l.hitRadius,
              });
          },
          _resolvePointOptions: function (t, e) {
            var n,
              i,
              r,
              a = this.chart,
              o = a.data.datasets[this.index],
              s = t.custom || {},
              l = a.options.elements.point,
              u = {},
              c = {
                chart: a,
                dataIndex: e,
                dataset: o,
                datasetIndex: this.index,
              },
              d = {
                backgroundColor: "pointBackgroundColor",
                borderColor: "pointBorderColor",
                borderWidth: "pointBorderWidth",
                hitRadius: "pointHitRadius",
                hoverBackgroundColor: "pointHoverBackgroundColor",
                hoverBorderColor: "pointHoverBorderColor",
                hoverBorderWidth: "pointHoverBorderWidth",
                hoverRadius: "pointHoverRadius",
                pointStyle: "pointStyle",
                radius: "pointRadius",
                rotation: "pointRotation",
              },
              h = Object.keys(d);
            for (n = 0, i = h.length; n < i; ++n)
              u[(r = h[n])] = se([s[r], o[d[r]], o[r], l[r]], c, e);
            return u;
          },
          _resolveLineOptions: function (t) {
            var e,
              n,
              i,
              r = this.chart,
              a = r.data.datasets[this.index],
              o = t.custom || {},
              s = r.options.elements.line,
              l = {},
              u = [
                "backgroundColor",
                "borderWidth",
                "borderColor",
                "borderCapStyle",
                "borderDash",
                "borderDashOffset",
                "borderJoinStyle",
                "fill",
              ];
            for (e = 0, n = u.length; e < n; ++e)
              l[(i = u[e])] = se([o[i], a[i], s[i]]);
            return (l.tension = oe(a.lineTension, s.tension)), l;
          },
          updateBezierControlPoints: function () {
            var t,
              e,
              n,
              i,
              r = this.getMeta(),
              a = this.chart.chartArea,
              o = r.data || [];
            function s(t, e, n) {
              return Math.max(Math.min(t, n), e);
            }
            for (t = 0, e = o.length; t < e; ++t)
              (n = o[t]._model),
                (i = ut.splineCurve(
                  ut.previousItem(o, t, !0)._model,
                  n,
                  ut.nextItem(o, t, !0)._model,
                  n.tension
                )),
                (n.controlPointPreviousX = s(i.previous.x, a.left, a.right)),
                (n.controlPointPreviousY = s(i.previous.y, a.top, a.bottom)),
                (n.controlPointNextX = s(i.next.x, a.left, a.right)),
                (n.controlPointNextY = s(i.next.y, a.top, a.bottom));
          },
          setHoverStyle: function (t) {
            var e = t._model,
              n = t._options,
              i = ut.getHoverColor;
            (t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
              radius: e.radius,
            }),
              (e.backgroundColor = oe(
                n.hoverBackgroundColor,
                i(n.backgroundColor)
              )),
              (e.borderColor = oe(n.hoverBorderColor, i(n.borderColor))),
              (e.borderWidth = oe(n.hoverBorderWidth, n.borderWidth)),
              (e.radius = oe(n.hoverRadius, n.radius));
          },
        });
        ot._set("scatter", {
          hover: { mode: "single" },
          scales: {
            xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }],
            yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }],
          },
          showLines: !1,
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (t) {
                return "(" + t.xLabel + ", " + t.yLabel + ")";
              },
            },
          },
        });
        var ue = {
          bar: Bt,
          bubble: qt,
          doughnut: Kt,
          horizontalBar: Xt,
          line: ne,
          polarArea: re,
          pie: ae,
          radar: le,
          scatter: ne,
        };
        function ce(t, e) {
          return t.native ? { x: t.x, y: t.y } : ut.getRelativePosition(t, e);
        }
        function de(t, e) {
          var n, i, r, a, o;
          for (i = 0, a = t.data.datasets.length; i < a; ++i)
            if (t.isDatasetVisible(i))
              for (
                r = 0, o = (n = t.getDatasetMeta(i)).data.length;
                r < o;
                ++r
              ) {
                var s = n.data[r];
                s._view.skip || e(s);
              }
        }
        function he(t, e) {
          var n = [];
          return (
            de(t, function (t) {
              t.inRange(e.x, e.y) && n.push(t);
            }),
            n
          );
        }
        function fe(t, e, n, i) {
          var r = Number.POSITIVE_INFINITY,
            a = [];
          return (
            de(t, function (t) {
              if (!n || t.inRange(e.x, e.y)) {
                var o = t.getCenterPoint(),
                  s = i(e, o);
                s < r ? ((a = [t]), (r = s)) : s === r && a.push(t);
              }
            }),
            a
          );
        }
        function pe(t) {
          var e = -1 !== t.indexOf("x"),
            n = -1 !== t.indexOf("y");
          return function (t, i) {
            var r = e ? Math.abs(t.x - i.x) : 0,
              a = n ? Math.abs(t.y - i.y) : 0;
            return Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2));
          };
        }
        function ge(t, e, n) {
          var i = ce(e, t);
          n.axis = n.axis || "x";
          var r = pe(n.axis),
            a = n.intersect ? he(t, i) : fe(t, i, !1, r),
            o = [];
          return a.length
            ? (t.data.datasets.forEach(function (e, n) {
                if (t.isDatasetVisible(n)) {
                  var i = t.getDatasetMeta(n).data[a[0]._index];
                  i && !i._view.skip && o.push(i);
                }
              }),
              o)
            : [];
        }
        var me = {
          modes: {
            single: function (t, e) {
              var n = ce(e, t),
                i = [];
              return (
                de(t, function (t) {
                  if (t.inRange(n.x, n.y)) return i.push(t), i;
                }),
                i.slice(0, 1)
              );
            },
            label: ge,
            index: ge,
            dataset: function (t, e, n) {
              var i = ce(e, t);
              n.axis = n.axis || "xy";
              var r = pe(n.axis),
                a = n.intersect ? he(t, i) : fe(t, i, !1, r);
              return (
                a.length > 0 && (a = t.getDatasetMeta(a[0]._datasetIndex).data),
                a
              );
            },
            "x-axis": function (t, e) {
              return ge(t, e, { intersect: !1 });
            },
            point: function (t, e) {
              return he(t, ce(e, t));
            },
            nearest: function (t, e, n) {
              var i = ce(e, t);
              n.axis = n.axis || "xy";
              var r = pe(n.axis);
              return fe(t, i, n.intersect, r);
            },
            x: function (t, e, n) {
              var i = ce(e, t),
                r = [],
                a = !1;
              return (
                de(t, function (t) {
                  t.inXRange(i.x) && r.push(t), t.inRange(i.x, i.y) && (a = !0);
                }),
                n.intersect && !a && (r = []),
                r
              );
            },
            y: function (t, e, n) {
              var i = ce(e, t),
                r = [],
                a = !1;
              return (
                de(t, function (t) {
                  t.inYRange(i.y) && r.push(t), t.inRange(i.x, i.y) && (a = !0);
                }),
                n.intersect && !a && (r = []),
                r
              );
            },
          },
        };
        function ve(t, e) {
          return ut.where(t, function (t) {
            return t.position === e;
          });
        }
        function ye(t, e) {
          t.forEach(function (t, e) {
            return (t._tmpIndex_ = e), t;
          }),
            t.sort(function (t, n) {
              var i = e ? n : t,
                r = e ? t : n;
              return i.weight === r.weight
                ? i._tmpIndex_ - r._tmpIndex_
                : i.weight - r.weight;
            }),
            t.forEach(function (t) {
              delete t._tmpIndex_;
            });
        }
        function be(t, e) {
          ut.each(t, function (t) {
            e[t.position] += t.isHorizontal() ? t.height : t.width;
          });
        }
        ot._set("global", {
          layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
        });
        var xe,
          _e = {
            defaults: {},
            addBox: function (t, e) {
              t.boxes || (t.boxes = []),
                (e.fullWidth = e.fullWidth || !1),
                (e.position = e.position || "top"),
                (e.weight = e.weight || 0),
                t.boxes.push(e);
            },
            removeBox: function (t, e) {
              var n = t.boxes ? t.boxes.indexOf(e) : -1;
              -1 !== n && t.boxes.splice(n, 1);
            },
            configure: function (t, e, n) {
              for (
                var i,
                  r = ["fullWidth", "position", "weight"],
                  a = r.length,
                  o = 0;
                o < a;
                ++o
              )
                (i = r[o]), n.hasOwnProperty(i) && (e[i] = n[i]);
            },
            update: function (t, e, n) {
              if (t) {
                var i = t.options.layout || {},
                  r = ut.options.toPadding(i.padding),
                  a = r.left,
                  o = r.right,
                  s = r.top,
                  l = r.bottom,
                  u = ve(t.boxes, "left"),
                  c = ve(t.boxes, "right"),
                  d = ve(t.boxes, "top"),
                  h = ve(t.boxes, "bottom"),
                  f = ve(t.boxes, "chartArea");
                ye(u, !0), ye(c, !1), ye(d, !0), ye(h, !1);
                var p,
                  g = u.concat(c),
                  m = d.concat(h),
                  v = g.concat(m),
                  y = e - a - o,
                  b = n - s - l,
                  x = (e - y / 2) / g.length,
                  _ = y,
                  w = b,
                  k = { top: s, left: a, bottom: l, right: o },
                  M = [];
                ut.each(v, function (t) {
                  var e,
                    n = t.isHorizontal();
                  n
                    ? ((e = t.update(t.fullWidth ? y : _, b / 2)),
                      (w -= e.height))
                    : ((e = t.update(x, w)), (_ -= e.width)),
                    M.push({ horizontal: n, width: e.width, box: t });
                }),
                  (p = (function (t) {
                    var e = 0,
                      n = 0,
                      i = 0,
                      r = 0;
                    return (
                      ut.each(t, function (t) {
                        if (t.getPadding) {
                          var a = t.getPadding();
                          (e = Math.max(e, a.top)),
                            (n = Math.max(n, a.left)),
                            (i = Math.max(i, a.bottom)),
                            (r = Math.max(r, a.right));
                        }
                      }),
                      { top: e, left: n, bottom: i, right: r }
                    );
                  })(v)),
                  ut.each(g, A),
                  be(g, k),
                  ut.each(m, A),
                  be(m, k),
                  ut.each(g, function (t) {
                    var e = ut.findNextWhere(M, function (e) {
                        return e.box === t;
                      }),
                      n = { left: 0, right: 0, top: k.top, bottom: k.bottom };
                    e && t.update(e.width, w, n);
                  }),
                  be(v, (k = { top: s, left: a, bottom: l, right: o }));
                var S = Math.max(p.left - k.left, 0);
                (k.left += S), (k.right += Math.max(p.right - k.right, 0));
                var D = Math.max(p.top - k.top, 0);
                (k.top += D), (k.bottom += Math.max(p.bottom - k.bottom, 0));
                var C = n - k.top - k.bottom,
                  P = e - k.left - k.right;
                (P === _ && C === w) ||
                  (ut.each(g, function (t) {
                    t.height = C;
                  }),
                  ut.each(m, function (t) {
                    t.fullWidth || (t.width = P);
                  }),
                  (w = C),
                  (_ = P));
                var T = a + S,
                  O = s + D;
                ut.each(u.concat(d), I),
                  (T += _),
                  (O += w),
                  ut.each(c, I),
                  ut.each(h, I),
                  (t.chartArea = {
                    left: k.left,
                    top: k.top,
                    right: k.left + _,
                    bottom: k.top + w,
                  }),
                  ut.each(f, function (e) {
                    (e.left = t.chartArea.left),
                      (e.top = t.chartArea.top),
                      (e.right = t.chartArea.right),
                      (e.bottom = t.chartArea.bottom),
                      e.update(_, w);
                  });
              }
              function A(t) {
                var e = ut.findNextWhere(M, function (e) {
                  return e.box === t;
                });
                if (e)
                  if (e.horizontal) {
                    var n = {
                      left: Math.max(k.left, p.left),
                      right: Math.max(k.right, p.right),
                      top: 0,
                      bottom: 0,
                    };
                    t.update(t.fullWidth ? y : _, b / 2, n);
                  } else t.update(e.width, w);
              }
              function I(t) {
                t.isHorizontal()
                  ? ((t.left = t.fullWidth ? a : k.left),
                    (t.right = t.fullWidth ? e - o : k.left + _),
                    (t.top = O),
                    (t.bottom = O + t.height),
                    (O = t.bottom))
                  : ((t.left = T),
                    (t.right = T + t.width),
                    (t.top = k.top),
                    (t.bottom = k.top + w),
                    (T = t.right));
              }
            },
          },
          we =
            ((xe = Object.freeze({
              default:
                "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n",
            })) &&
              xe.default) ||
            xe,
          ke = "$chartjs",
          Me = "chartjs-size-monitor",
          Se = "chartjs-render-monitor",
          De = "chartjs-render-animation",
          Ce = ["animationstart", "webkitAnimationStart"],
          Pe = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout",
          };
        function Te(t, e) {
          var n = ut.getStyle(t, e),
            i = n && n.match(/^(\d+)(\.\d+)?px$/);
          return i ? Number(i[1]) : void 0;
        }
        var Oe = !!(function () {
          var t = !1;
          try {
            var e = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              },
            });
            window.addEventListener("e", null, e);
          } catch (n) {}
          return t;
        })() && { passive: !0 };
        function Ae(t, e, n) {
          t.addEventListener(e, n, Oe);
        }
        function Ie(t, e, n) {
          t.removeEventListener(e, n, Oe);
        }
        function Fe(t, e, n, i, r) {
          return {
            type: t,
            chart: e,
            native: r || null,
            x: void 0 !== n ? n : null,
            y: void 0 !== i ? i : null,
          };
        }
        function Le(t) {
          var e = document.createElement("div");
          return (e.className = t || ""), e;
        }
        function Re(t, e, n) {
          var i = t[ke] || (t[ke] = {}),
            r = (i.resizer = (function (t) {
              var e = Le(Me),
                n = Le(Me + "-expand"),
                i = Le(Me + "-shrink");
              n.appendChild(Le()),
                i.appendChild(Le()),
                e.appendChild(n),
                e.appendChild(i),
                (e._reset = function () {
                  (n.scrollLeft = 1e6),
                    (n.scrollTop = 1e6),
                    (i.scrollLeft = 1e6),
                    (i.scrollTop = 1e6);
                });
              var r = function () {
                e._reset(), t();
              };
              return (
                Ae(n, "scroll", r.bind(n, "expand")),
                Ae(i, "scroll", r.bind(i, "shrink")),
                e
              );
            })(
              (function (t, e) {
                var n = !1,
                  i = [];
                return function () {
                  (i = Array.prototype.slice.call(arguments)),
                    (e = e || this),
                    n ||
                      ((n = !0),
                      ut.requestAnimFrame.call(window, function () {
                        (n = !1), t.apply(e, i);
                      }));
                };
              })(function () {
                if (i.resizer) {
                  var r = n.options.maintainAspectRatio && t.parentNode,
                    a = r ? r.clientWidth : 0;
                  e(Fe("resize", n)),
                    r && r.clientWidth < a && n.canvas && e(Fe("resize", n));
                }
              })
            ));
          !(function (t, e) {
            var n = t[ke] || (t[ke] = {}),
              i = (n.renderProxy = function (t) {
                t.animationName === De && e();
              });
            ut.each(Ce, function (e) {
              Ae(t, e, i);
            }),
              (n.reflow = !!t.offsetParent),
              t.classList.add(Se);
          })(t, function () {
            if (i.resizer) {
              var e = t.parentNode;
              e && e !== r.parentNode && e.insertBefore(r, e.firstChild),
                r._reset();
            }
          });
        }
        function We(t) {
          var e = t[ke] || {},
            n = e.resizer;
          delete e.resizer,
            (function (t) {
              var e = t[ke] || {},
                n = e.renderProxy;
              n &&
                (ut.each(Ce, function (e) {
                  Ie(t, e, n);
                }),
                delete e.renderProxy),
                t.classList.remove(Se);
            })(t),
            n && n.parentNode && n.parentNode.removeChild(n);
        }
        var Ye = {
          disableCSSInjection: !1,
          _enabled:
            "undefined" !== typeof window && "undefined" !== typeof document,
          _ensureLoaded: function () {
            this._loaded ||
              ((this._loaded = !0),
              this.disableCSSInjection ||
                (function (t, e) {
                  var n = t._style || document.createElement("style");
                  t._style ||
                    ((t._style = n),
                    (e = "/* Chart.js */\n" + e),
                    n.setAttribute("type", "text/css"),
                    document.getElementsByTagName("head")[0].appendChild(n)),
                    n.appendChild(document.createTextNode(e));
                })(this, we));
          },
          acquireContext: function (t, e) {
            "string" === typeof t
              ? (t = document.getElementById(t))
              : t.length && (t = t[0]),
              t && t.canvas && (t = t.canvas);
            var n = t && t.getContext && t.getContext("2d");
            return (
              this._ensureLoaded(),
              n && n.canvas === t
                ? ((function (t, e) {
                    var n = t.style,
                      i = t.getAttribute("height"),
                      r = t.getAttribute("width");
                    if (
                      ((t[ke] = {
                        initial: {
                          height: i,
                          width: r,
                          style: {
                            display: n.display,
                            height: n.height,
                            width: n.width,
                          },
                        },
                      }),
                      (n.display = n.display || "block"),
                      null === r || "" === r)
                    ) {
                      var a = Te(t, "width");
                      void 0 !== a && (t.width = a);
                    }
                    if (null === i || "" === i)
                      if ("" === t.style.height)
                        t.height = t.width / (e.options.aspectRatio || 2);
                      else {
                        var o = Te(t, "height");
                        void 0 !== a && (t.height = o);
                      }
                  })(t, e),
                  n)
                : null
            );
          },
          releaseContext: function (t) {
            var e = t.canvas;
            if (e[ke]) {
              var n = e[ke].initial;
              ["height", "width"].forEach(function (t) {
                var i = n[t];
                ut.isNullOrUndef(i)
                  ? e.removeAttribute(t)
                  : e.setAttribute(t, i);
              }),
                ut.each(n.style || {}, function (t, n) {
                  e.style[n] = t;
                }),
                (e.width = e.width),
                delete e[ke];
            }
          },
          addEventListener: function (t, e, n) {
            var i = t.canvas;
            if ("resize" !== e) {
              var r = n[ke] || (n[ke] = {});
              Ae(
                i,
                e,
                ((r.proxies || (r.proxies = {}))[t.id + "_" + e] = function (
                  e
                ) {
                  n(
                    (function (t, e) {
                      var n = Pe[t.type] || t.type,
                        i = ut.getRelativePosition(t, e);
                      return Fe(n, e, i.x, i.y, t);
                    })(e, t)
                  );
                })
              );
            } else Re(i, n, t);
          },
          removeEventListener: function (t, e, n) {
            var i = t.canvas;
            if ("resize" !== e) {
              var r = ((n[ke] || {}).proxies || {})[t.id + "_" + e];
              r && Ie(i, e, r);
            } else We(i);
          },
        };
        (ut.addEvent = Ae), (ut.removeEvent = Ie);
        var ze = Ye._enabled
            ? Ye
            : {
                acquireContext: function (t) {
                  return (
                    t && t.canvas && (t = t.canvas),
                    (t && t.getContext("2d")) || null
                  );
                },
              },
          Ne = ut.extend(
            {
              initialize: function () {},
              acquireContext: function () {},
              releaseContext: function () {},
              addEventListener: function () {},
              removeEventListener: function () {},
            },
            ze
          );
        ot._set("global", { plugins: {} });
        var Ee = {
            _plugins: [],
            _cacheId: 0,
            register: function (t) {
              var e = this._plugins;
              [].concat(t).forEach(function (t) {
                -1 === e.indexOf(t) && e.push(t);
              }),
                this._cacheId++;
            },
            unregister: function (t) {
              var e = this._plugins;
              [].concat(t).forEach(function (t) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1);
              }),
                this._cacheId++;
            },
            clear: function () {
              (this._plugins = []), this._cacheId++;
            },
            count: function () {
              return this._plugins.length;
            },
            getAll: function () {
              return this._plugins;
            },
            notify: function (t, e, n) {
              var i,
                r,
                a,
                o,
                s,
                l = this.descriptors(t),
                u = l.length;
              for (i = 0; i < u; ++i)
                if (
                  "function" === typeof (s = (a = (r = l[i]).plugin)[e]) &&
                  ((o = [t].concat(n || [])).push(r.options),
                  !1 === s.apply(a, o))
                )
                  return !1;
              return !0;
            },
            descriptors: function (t) {
              var e = t.$plugins || (t.$plugins = {});
              if (e.id === this._cacheId) return e.descriptors;
              var n = [],
                i = [],
                r = (t && t.config) || {},
                a = (r.options && r.options.plugins) || {};
              return (
                this._plugins.concat(r.plugins || []).forEach(function (t) {
                  if (-1 === n.indexOf(t)) {
                    var e = t.id,
                      r = a[e];
                    !1 !== r &&
                      (!0 === r && (r = ut.clone(ot.global.plugins[e])),
                      n.push(t),
                      i.push({ plugin: t, options: r || {} }));
                  }
                }),
                (e.descriptors = i),
                (e.id = this._cacheId),
                i
              );
            },
            _invalidate: function (t) {
              delete t.$plugins;
            },
          },
          je = {
            constructors: {},
            defaults: {},
            registerScaleType: function (t, e, n) {
              (this.constructors[t] = e), (this.defaults[t] = ut.clone(n));
            },
            getScaleConstructor: function (t) {
              return this.constructors.hasOwnProperty(t)
                ? this.constructors[t]
                : void 0;
            },
            getScaleDefaults: function (t) {
              return this.defaults.hasOwnProperty(t)
                ? ut.merge({}, [ot.scale, this.defaults[t]])
                : {};
            },
            updateScaleDefaults: function (t, e) {
              this.defaults.hasOwnProperty(t) &&
                (this.defaults[t] = ut.extend(this.defaults[t], e));
            },
            addScalesToLayout: function (t) {
              ut.each(t.scales, function (e) {
                (e.fullWidth = e.options.fullWidth),
                  (e.position = e.options.position),
                  (e.weight = e.options.weight),
                  _e.addBox(t, e);
              });
            },
          },
          Ve = ut.valueOrDefault;
        ot._set("global", {
          tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
              beforeTitle: ut.noop,
              title: function (t, e) {
                var n = "",
                  i = e.labels,
                  r = i ? i.length : 0;
                if (t.length > 0) {
                  var a = t[0];
                  a.label
                    ? (n = a.label)
                    : a.xLabel
                    ? (n = a.xLabel)
                    : r > 0 && a.index < r && (n = i[a.index]);
                }
                return n;
              },
              afterTitle: ut.noop,
              beforeBody: ut.noop,
              beforeLabel: ut.noop,
              label: function (t, e) {
                var n = e.datasets[t.datasetIndex].label || "";
                return (
                  n && (n += ": "),
                  ut.isNullOrUndef(t.value) ? (n += t.yLabel) : (n += t.value),
                  n
                );
              },
              labelColor: function (t, e) {
                var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                return {
                  borderColor: n.borderColor,
                  backgroundColor: n.backgroundColor,
                };
              },
              labelTextColor: function () {
                return this._options.bodyFontColor;
              },
              afterLabel: ut.noop,
              afterBody: ut.noop,
              beforeFooter: ut.noop,
              footer: ut.noop,
              afterFooter: ut.noop,
            },
          },
        });
        var He = {
          average: function (t) {
            if (!t.length) return !1;
            var e,
              n,
              i = 0,
              r = 0,
              a = 0;
            for (e = 0, n = t.length; e < n; ++e) {
              var o = t[e];
              if (o && o.hasValue()) {
                var s = o.tooltipPosition();
                (i += s.x), (r += s.y), ++a;
              }
            }
            return { x: i / a, y: r / a };
          },
          nearest: function (t, e) {
            var n,
              i,
              r,
              a = e.x,
              o = e.y,
              s = Number.POSITIVE_INFINITY;
            for (n = 0, i = t.length; n < i; ++n) {
              var l = t[n];
              if (l && l.hasValue()) {
                var u = l.getCenterPoint(),
                  c = ut.distanceBetweenPoints(e, u);
                c < s && ((s = c), (r = l));
              }
            }
            if (r) {
              var d = r.tooltipPosition();
              (a = d.x), (o = d.y);
            }
            return { x: a, y: o };
          },
        };
        function Be(t, e) {
          return (
            e && (ut.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)),
            t
          );
        }
        function Ue(t) {
          return ("string" === typeof t || t instanceof String) &&
            t.indexOf("\n") > -1
            ? t.split("\n")
            : t;
        }
        function Ge(t) {
          var e = t._xScale,
            n = t._yScale || t._scale,
            i = t._index,
            r = t._datasetIndex,
            a = t._chart.getDatasetMeta(r).controller,
            o = a._getIndexScale(),
            s = a._getValueScale();
          return {
            xLabel: e ? e.getLabelForIndex(i, r) : "",
            yLabel: n ? n.getLabelForIndex(i, r) : "",
            label: o ? "" + o.getLabelForIndex(i, r) : "",
            value: s ? "" + s.getLabelForIndex(i, r) : "",
            index: i,
            datasetIndex: r,
            x: t._model.x,
            y: t._model.y,
          };
        }
        function qe(t) {
          var e = ot.global;
          return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: Ve(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: Ve(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: Ve(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: Ve(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: Ve(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: Ve(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: Ve(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: Ve(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: Ve(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth,
          };
        }
        function Ze(t, e) {
          return "center" === e
            ? t.x + t.width / 2
            : "right" === e
            ? t.x + t.width - t.xPadding
            : t.x + t.xPadding;
        }
        function $e(t) {
          return Be([], Ue(t));
        }
        var Ke = pt.extend({
            initialize: function () {
              (this._model = qe(this._options)), (this._lastActive = []);
            },
            getTitle: function () {
              var t = this,
                e = t._options,
                n = e.callbacks,
                i = n.beforeTitle.apply(t, arguments),
                r = n.title.apply(t, arguments),
                a = n.afterTitle.apply(t, arguments),
                o = [];
              return (o = Be(o, Ue(i))), (o = Be(o, Ue(r))), (o = Be(o, Ue(a)));
            },
            getBeforeBody: function () {
              return $e(
                this._options.callbacks.beforeBody.apply(this, arguments)
              );
            },
            getBody: function (t, e) {
              var n = this,
                i = n._options.callbacks,
                r = [];
              return (
                ut.each(t, function (t) {
                  var a = { before: [], lines: [], after: [] };
                  Be(a.before, Ue(i.beforeLabel.call(n, t, e))),
                    Be(a.lines, i.label.call(n, t, e)),
                    Be(a.after, Ue(i.afterLabel.call(n, t, e))),
                    r.push(a);
                }),
                r
              );
            },
            getAfterBody: function () {
              return $e(
                this._options.callbacks.afterBody.apply(this, arguments)
              );
            },
            getFooter: function () {
              var t = this,
                e = t._options.callbacks,
                n = e.beforeFooter.apply(t, arguments),
                i = e.footer.apply(t, arguments),
                r = e.afterFooter.apply(t, arguments),
                a = [];
              return (a = Be(a, Ue(n))), (a = Be(a, Ue(i))), (a = Be(a, Ue(r)));
            },
            update: function (t) {
              var e,
                n,
                i = this,
                r = i._options,
                a = i._model,
                o = (i._model = qe(r)),
                s = i._active,
                l = i._data,
                u = { xAlign: a.xAlign, yAlign: a.yAlign },
                c = { x: a.x, y: a.y },
                d = { width: a.width, height: a.height },
                h = { x: a.caretX, y: a.caretY };
              if (s.length) {
                o.opacity = 1;
                var f = [],
                  p = [];
                h = He[r.position].call(i, s, i._eventPosition);
                var g = [];
                for (e = 0, n = s.length; e < n; ++e) g.push(Ge(s[e]));
                r.filter &&
                  (g = g.filter(function (t) {
                    return r.filter(t, l);
                  })),
                  r.itemSort &&
                    (g = g.sort(function (t, e) {
                      return r.itemSort(t, e, l);
                    })),
                  ut.each(g, function (t) {
                    f.push(r.callbacks.labelColor.call(i, t, i._chart)),
                      p.push(r.callbacks.labelTextColor.call(i, t, i._chart));
                  }),
                  (o.title = i.getTitle(g, l)),
                  (o.beforeBody = i.getBeforeBody(g, l)),
                  (o.body = i.getBody(g, l)),
                  (o.afterBody = i.getAfterBody(g, l)),
                  (o.footer = i.getFooter(g, l)),
                  (o.x = h.x),
                  (o.y = h.y),
                  (o.caretPadding = r.caretPadding),
                  (o.labelColors = f),
                  (o.labelTextColors = p),
                  (o.dataPoints = g),
                  (d = (function (t, e) {
                    var n = t._chart.ctx,
                      i = 2 * e.yPadding,
                      r = 0,
                      a = e.body,
                      o = a.reduce(function (t, e) {
                        return (
                          t + e.before.length + e.lines.length + e.after.length
                        );
                      }, 0);
                    o += e.beforeBody.length + e.afterBody.length;
                    var s = e.title.length,
                      l = e.footer.length,
                      u = e.titleFontSize,
                      c = e.bodyFontSize,
                      d = e.footerFontSize;
                    (i += s * u),
                      (i += s ? (s - 1) * e.titleSpacing : 0),
                      (i += s ? e.titleMarginBottom : 0),
                      (i += o * c),
                      (i += o ? (o - 1) * e.bodySpacing : 0),
                      (i += l ? e.footerMarginTop : 0),
                      (i += l * d),
                      (i += l ? (l - 1) * e.footerSpacing : 0);
                    var h = 0,
                      f = function (t) {
                        r = Math.max(r, n.measureText(t).width + h);
                      };
                    return (
                      (n.font = ut.fontString(
                        u,
                        e._titleFontStyle,
                        e._titleFontFamily
                      )),
                      ut.each(e.title, f),
                      (n.font = ut.fontString(
                        c,
                        e._bodyFontStyle,
                        e._bodyFontFamily
                      )),
                      ut.each(e.beforeBody.concat(e.afterBody), f),
                      (h = e.displayColors ? c + 2 : 0),
                      ut.each(a, function (t) {
                        ut.each(t.before, f),
                          ut.each(t.lines, f),
                          ut.each(t.after, f);
                      }),
                      (h = 0),
                      (n.font = ut.fontString(
                        d,
                        e._footerFontStyle,
                        e._footerFontFamily
                      )),
                      ut.each(e.footer, f),
                      { width: (r += 2 * e.xPadding), height: i }
                    );
                  })(this, o)),
                  (c = (function (t, e, n, i) {
                    var r = t.x,
                      a = t.y,
                      o = t.caretSize,
                      s = t.caretPadding,
                      l = t.cornerRadius,
                      u = n.xAlign,
                      c = n.yAlign,
                      d = o + s,
                      h = l + s;
                    return (
                      "right" === u
                        ? (r -= e.width)
                        : "center" === u &&
                          ((r -= e.width / 2) + e.width > i.width &&
                            (r = i.width - e.width),
                          r < 0 && (r = 0)),
                      "top" === c
                        ? (a += d)
                        : (a -= "bottom" === c ? e.height + d : e.height / 2),
                      "center" === c
                        ? "left" === u
                          ? (r += d)
                          : "right" === u && (r -= d)
                        : "left" === u
                        ? (r -= h)
                        : "right" === u && (r += h),
                      { x: r, y: a }
                    );
                  })(
                    o,
                    d,
                    (u = (function (t, e) {
                      var n,
                        i,
                        r,
                        a,
                        o,
                        s = t._model,
                        l = t._chart,
                        u = t._chart.chartArea,
                        c = "center",
                        d = "center";
                      s.y < e.height
                        ? (d = "top")
                        : s.y > l.height - e.height && (d = "bottom");
                      var h = (u.left + u.right) / 2,
                        f = (u.top + u.bottom) / 2;
                      "center" === d
                        ? ((n = function (t) {
                            return t <= h;
                          }),
                          (i = function (t) {
                            return t > h;
                          }))
                        : ((n = function (t) {
                            return t <= e.width / 2;
                          }),
                          (i = function (t) {
                            return t >= l.width - e.width / 2;
                          })),
                        (r = function (t) {
                          return (
                            t + e.width + s.caretSize + s.caretPadding > l.width
                          );
                        }),
                        (a = function (t) {
                          return t - e.width - s.caretSize - s.caretPadding < 0;
                        }),
                        (o = function (t) {
                          return t <= f ? "top" : "bottom";
                        }),
                        n(s.x)
                          ? ((c = "left"),
                            r(s.x) && ((c = "center"), (d = o(s.y))))
                          : i(s.x) &&
                            ((c = "right"),
                            a(s.x) && ((c = "center"), (d = o(s.y))));
                      var p = t._options;
                      return {
                        xAlign: p.xAlign ? p.xAlign : c,
                        yAlign: p.yAlign ? p.yAlign : d,
                      };
                    })(this, d)),
                    i._chart
                  ));
              } else o.opacity = 0;
              return (
                (o.xAlign = u.xAlign),
                (o.yAlign = u.yAlign),
                (o.x = c.x),
                (o.y = c.y),
                (o.width = d.width),
                (o.height = d.height),
                (o.caretX = h.x),
                (o.caretY = h.y),
                (i._model = o),
                t && r.custom && r.custom.call(i, o),
                i
              );
            },
            drawCaret: function (t, e) {
              var n = this._chart.ctx,
                i = this._view,
                r = this.getCaretPosition(t, e, i);
              n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3);
            },
            getCaretPosition: function (t, e, n) {
              var i,
                r,
                a,
                o,
                s,
                l,
                u = n.caretSize,
                c = n.cornerRadius,
                d = n.xAlign,
                h = n.yAlign,
                f = t.x,
                p = t.y,
                g = e.width,
                m = e.height;
              if ("center" === h)
                (s = p + m / 2),
                  "left" === d
                    ? ((r = (i = f) - u), (a = i), (o = s + u), (l = s - u))
                    : ((r = (i = f + g) + u),
                      (a = i),
                      (o = s - u),
                      (l = s + u));
              else if (
                ("left" === d
                  ? ((i = (r = f + c + u) - u), (a = r + u))
                  : "right" === d
                  ? ((i = (r = f + g - c - u) - u), (a = r + u))
                  : ((i = (r = n.caretX) - u), (a = r + u)),
                "top" === h)
              )
                (s = (o = p) - u), (l = o);
              else {
                (s = (o = p + m) + u), (l = o);
                var v = a;
                (a = i), (i = v);
              }
              return { x1: i, x2: r, x3: a, y1: o, y2: s, y3: l };
            },
            drawTitle: function (t, e, n) {
              var i = e.title;
              if (i.length) {
                (t.x = Ze(e, e._titleAlign)),
                  (n.textAlign = e._titleAlign),
                  (n.textBaseline = "top");
                var r,
                  a,
                  o = e.titleFontSize,
                  s = e.titleSpacing;
                for (
                  n.fillStyle = e.titleFontColor,
                    n.font = ut.fontString(
                      o,
                      e._titleFontStyle,
                      e._titleFontFamily
                    ),
                    r = 0,
                    a = i.length;
                  r < a;
                  ++r
                )
                  n.fillText(i[r], t.x, t.y),
                    (t.y += o + s),
                    r + 1 === i.length && (t.y += e.titleMarginBottom - s);
              }
            },
            drawBody: function (t, e, n) {
              var i,
                r = e.bodyFontSize,
                a = e.bodySpacing,
                o = e._bodyAlign,
                s = e.body,
                l = e.displayColors,
                u = e.labelColors,
                c = 0,
                d = l ? Ze(e, "left") : 0;
              (n.textAlign = o),
                (n.textBaseline = "top"),
                (n.font = ut.fontString(
                  r,
                  e._bodyFontStyle,
                  e._bodyFontFamily
                )),
                (t.x = Ze(e, o));
              var h = function (e) {
                n.fillText(e, t.x + c, t.y), (t.y += r + a);
              };
              (n.fillStyle = e.bodyFontColor),
                ut.each(e.beforeBody, h),
                (c =
                  l && "right" !== o
                    ? "center" === o
                      ? r / 2 + 1
                      : r + 2
                    : 0),
                ut.each(s, function (a, o) {
                  (i = e.labelTextColors[o]),
                    (n.fillStyle = i),
                    ut.each(a.before, h),
                    ut.each(a.lines, function (a) {
                      l &&
                        ((n.fillStyle = e.legendColorBackground),
                        n.fillRect(d, t.y, r, r),
                        (n.lineWidth = 1),
                        (n.strokeStyle = u[o].borderColor),
                        n.strokeRect(d, t.y, r, r),
                        (n.fillStyle = u[o].backgroundColor),
                        n.fillRect(d + 1, t.y + 1, r - 2, r - 2),
                        (n.fillStyle = i)),
                        h(a);
                    }),
                    ut.each(a.after, h);
                }),
                (c = 0),
                ut.each(e.afterBody, h),
                (t.y -= a);
            },
            drawFooter: function (t, e, n) {
              var i = e.footer;
              i.length &&
                ((t.x = Ze(e, e._footerAlign)),
                (t.y += e.footerMarginTop),
                (n.textAlign = e._footerAlign),
                (n.textBaseline = "top"),
                (n.fillStyle = e.footerFontColor),
                (n.font = ut.fontString(
                  e.footerFontSize,
                  e._footerFontStyle,
                  e._footerFontFamily
                )),
                ut.each(i, function (i) {
                  n.fillText(i, t.x, t.y),
                    (t.y += e.footerFontSize + e.footerSpacing);
                }));
            },
            drawBackground: function (t, e, n, i) {
              (n.fillStyle = e.backgroundColor),
                (n.strokeStyle = e.borderColor),
                (n.lineWidth = e.borderWidth);
              var r = e.xAlign,
                a = e.yAlign,
                o = t.x,
                s = t.y,
                l = i.width,
                u = i.height,
                c = e.cornerRadius;
              n.beginPath(),
                n.moveTo(o + c, s),
                "top" === a && this.drawCaret(t, i),
                n.lineTo(o + l - c, s),
                n.quadraticCurveTo(o + l, s, o + l, s + c),
                "center" === a && "right" === r && this.drawCaret(t, i),
                n.lineTo(o + l, s + u - c),
                n.quadraticCurveTo(o + l, s + u, o + l - c, s + u),
                "bottom" === a && this.drawCaret(t, i),
                n.lineTo(o + c, s + u),
                n.quadraticCurveTo(o, s + u, o, s + u - c),
                "center" === a && "left" === r && this.drawCaret(t, i),
                n.lineTo(o, s + c),
                n.quadraticCurveTo(o, s, o + c, s),
                n.closePath(),
                n.fill(),
                e.borderWidth > 0 && n.stroke();
            },
            draw: function () {
              var t = this._chart.ctx,
                e = this._view;
              if (0 !== e.opacity) {
                var n = { width: e.width, height: e.height },
                  i = { x: e.x, y: e.y },
                  r = Math.abs(e.opacity < 0.001) ? 0 : e.opacity,
                  a =
                    e.title.length ||
                    e.beforeBody.length ||
                    e.body.length ||
                    e.afterBody.length ||
                    e.footer.length;
                this._options.enabled &&
                  a &&
                  (t.save(),
                  (t.globalAlpha = r),
                  this.drawBackground(i, e, t, n),
                  (i.y += e.yPadding),
                  this.drawTitle(i, e, t),
                  this.drawBody(i, e, t),
                  this.drawFooter(i, e, t),
                  t.restore());
              }
            },
            handleEvent: function (t) {
              var e,
                n = this,
                i = n._options;
              return (
                (n._lastActive = n._lastActive || []),
                "mouseout" === t.type
                  ? (n._active = [])
                  : (n._active = n._chart.getElementsAtEventForMode(
                      t,
                      i.mode,
                      i
                    )),
                (e = !ut.arrayEquals(n._active, n._lastActive)) &&
                  ((n._lastActive = n._active),
                  (i.enabled || i.custom) &&
                    ((n._eventPosition = { x: t.x, y: t.y }),
                    n.update(!0),
                    n.pivot())),
                e
              );
            },
          }),
          Xe = He,
          Je = Ke;
        Je.positioners = Xe;
        var Qe = ut.valueOrDefault;
        function tn() {
          return ut.merge({}, [].slice.call(arguments), {
            merger: function (t, e, n, i) {
              if ("xAxes" === t || "yAxes" === t) {
                var r,
                  a,
                  o,
                  s = n[t].length;
                for (e[t] || (e[t] = []), r = 0; r < s; ++r)
                  (o = n[t][r]),
                    (a = Qe(o.type, "xAxes" === t ? "category" : "linear")),
                    r >= e[t].length && e[t].push({}),
                    !e[t][r].type || (o.type && o.type !== e[t][r].type)
                      ? ut.merge(e[t][r], [je.getScaleDefaults(a), o])
                      : ut.merge(e[t][r], o);
              } else ut._merger(t, e, n, i);
            },
          });
        }
        function en() {
          return ut.merge({}, [].slice.call(arguments), {
            merger: function (t, e, n, i) {
              var r = e[t] || {},
                a = n[t];
              "scales" === t
                ? (e[t] = tn(r, a))
                : "scale" === t
                ? (e[t] = ut.merge(r, [je.getScaleDefaults(a.type), a]))
                : ut._merger(t, e, n, i);
            },
          });
        }
        function nn(t) {
          var e = t.options;
          ut.each(t.scales, function (e) {
            _e.removeBox(t, e);
          }),
            (e = en(ot.global, ot[t.config.type], e)),
            (t.options = t.config.options = e),
            t.ensureScalesHaveIDs(),
            t.buildOrUpdateScales(),
            (t.tooltip._options = e.tooltips),
            t.tooltip.initialize();
        }
        function rn(t) {
          return "top" === t || "bottom" === t;
        }
        ot._set("global", {
          elements: {},
          events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
          hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400,
          },
          onClick: null,
          maintainAspectRatio: !0,
          responsive: !0,
          responsiveAnimationDuration: 0,
        });
        var an = function (t, e) {
          return this.construct(t, e), this;
        };
        ut.extend(an.prototype, {
          construct: function (t, e) {
            var n = this;
            e = (function (t) {
              var e = ((t = t || {}).data = t.data || {});
              return (
                (e.datasets = e.datasets || []),
                (e.labels = e.labels || []),
                (t.options = en(ot.global, ot[t.type], t.options || {})),
                t
              );
            })(e);
            var i = Ne.acquireContext(t, e),
              r = i && i.canvas,
              a = r && r.height,
              o = r && r.width;
            (n.id = ut.uid()),
              (n.ctx = i),
              (n.canvas = r),
              (n.config = e),
              (n.width = o),
              (n.height = a),
              (n.aspectRatio = a ? o / a : null),
              (n.options = e.options),
              (n._bufferedRender = !1),
              (n.chart = n),
              (n.controller = n),
              (an.instances[n.id] = n),
              Object.defineProperty(n, "data", {
                get: function () {
                  return n.config.data;
                },
                set: function (t) {
                  n.config.data = t;
                },
              }),
              i && r
                ? (n.initialize(), n.update())
                : console.error(
                    "Failed to create chart: can't acquire context from the given item"
                  );
          },
          initialize: function () {
            var t = this;
            return (
              Ee.notify(t, "beforeInit"),
              ut.retinaScale(t, t.options.devicePixelRatio),
              t.bindEvents(),
              t.options.responsive && t.resize(!0),
              t.ensureScalesHaveIDs(),
              t.buildOrUpdateScales(),
              t.initToolTip(),
              Ee.notify(t, "afterInit"),
              t
            );
          },
          clear: function () {
            return ut.canvas.clear(this), this;
          },
          stop: function () {
            return vt.cancelAnimation(this), this;
          },
          resize: function (t) {
            var e = this,
              n = e.options,
              i = e.canvas,
              r = (n.maintainAspectRatio && e.aspectRatio) || null,
              a = Math.max(0, Math.floor(ut.getMaximumWidth(i))),
              o = Math.max(0, Math.floor(r ? a / r : ut.getMaximumHeight(i)));
            if (
              (e.width !== a || e.height !== o) &&
              ((i.width = e.width = a),
              (i.height = e.height = o),
              (i.style.width = a + "px"),
              (i.style.height = o + "px"),
              ut.retinaScale(e, n.devicePixelRatio),
              !t)
            ) {
              var s = { width: a, height: o };
              Ee.notify(e, "resize", [s]),
                n.onResize && n.onResize(e, s),
                e.stop(),
                e.update({ duration: n.responsiveAnimationDuration });
            }
          },
          ensureScalesHaveIDs: function () {
            var t = this.options,
              e = t.scales || {},
              n = t.scale;
            ut.each(e.xAxes, function (t, e) {
              t.id = t.id || "x-axis-" + e;
            }),
              ut.each(e.yAxes, function (t, e) {
                t.id = t.id || "y-axis-" + e;
              }),
              n && (n.id = n.id || "scale");
          },
          buildOrUpdateScales: function () {
            var t = this,
              e = t.options,
              n = t.scales || {},
              i = [],
              r = Object.keys(n).reduce(function (t, e) {
                return (t[e] = !1), t;
              }, {});
            e.scales &&
              (i = i.concat(
                (e.scales.xAxes || []).map(function (t) {
                  return { options: t, dtype: "category", dposition: "bottom" };
                }),
                (e.scales.yAxes || []).map(function (t) {
                  return { options: t, dtype: "linear", dposition: "left" };
                })
              )),
              e.scale &&
                i.push({
                  options: e.scale,
                  dtype: "radialLinear",
                  isDefault: !0,
                  dposition: "chartArea",
                }),
              ut.each(i, function (e) {
                var i = e.options,
                  a = i.id,
                  o = Qe(i.type, e.dtype);
                rn(i.position) !== rn(e.dposition) &&
                  (i.position = e.dposition),
                  (r[a] = !0);
                var s = null;
                if (a in n && n[a].type === o)
                  ((s = n[a]).options = i), (s.ctx = t.ctx), (s.chart = t);
                else {
                  var l = je.getScaleConstructor(o);
                  if (!l) return;
                  (s = new l({
                    id: a,
                    type: o,
                    options: i,
                    ctx: t.ctx,
                    chart: t,
                  })),
                    (n[s.id] = s);
                }
                s.mergeTicksOptions(), e.isDefault && (t.scale = s);
              }),
              ut.each(r, function (t, e) {
                t || delete n[e];
              }),
              (t.scales = n),
              je.addScalesToLayout(this);
          },
          buildOrUpdateControllers: function () {
            var t = this,
              e = [];
            return (
              ut.each(
                t.data.datasets,
                function (n, i) {
                  var r = t.getDatasetMeta(i),
                    a = n.type || t.config.type;
                  if (
                    (r.type &&
                      r.type !== a &&
                      (t.destroyDatasetMeta(i), (r = t.getDatasetMeta(i))),
                    (r.type = a),
                    r.controller)
                  )
                    r.controller.updateIndex(i), r.controller.linkScales();
                  else {
                    var o = ue[r.type];
                    if (void 0 === o)
                      throw new Error('"' + r.type + '" is not a chart type.');
                    (r.controller = new o(t, i)), e.push(r.controller);
                  }
                },
                t
              ),
              e
            );
          },
          resetElements: function () {
            var t = this;
            ut.each(
              t.data.datasets,
              function (e, n) {
                t.getDatasetMeta(n).controller.reset();
              },
              t
            );
          },
          reset: function () {
            this.resetElements(), this.tooltip.initialize();
          },
          update: function (t) {
            var e = this;
            if (
              ((t && "object" === typeof t) ||
                (t = { duration: t, lazy: arguments[1] }),
              nn(e),
              Ee._invalidate(e),
              !1 !== Ee.notify(e, "beforeUpdate"))
            ) {
              e.tooltip._data = e.data;
              var n = e.buildOrUpdateControllers();
              ut.each(
                e.data.datasets,
                function (t, n) {
                  e.getDatasetMeta(n).controller.buildOrUpdateElements();
                },
                e
              ),
                e.updateLayout(),
                e.options.animation &&
                  e.options.animation.duration &&
                  ut.each(n, function (t) {
                    t.reset();
                  }),
                e.updateDatasets(),
                e.tooltip.initialize(),
                (e.lastActive = []),
                Ee.notify(e, "afterUpdate"),
                e._bufferedRender
                  ? (e._bufferedRequest = {
                      duration: t.duration,
                      easing: t.easing,
                      lazy: t.lazy,
                    })
                  : e.render(t);
            }
          },
          updateLayout: function () {
            !1 !== Ee.notify(this, "beforeLayout") &&
              (_e.update(this, this.width, this.height),
              Ee.notify(this, "afterScaleUpdate"),
              Ee.notify(this, "afterLayout"));
          },
          updateDatasets: function () {
            if (!1 !== Ee.notify(this, "beforeDatasetsUpdate")) {
              for (var t = 0, e = this.data.datasets.length; t < e; ++t)
                this.updateDataset(t);
              Ee.notify(this, "afterDatasetsUpdate");
            }
          },
          updateDataset: function (t) {
            var e = this.getDatasetMeta(t),
              n = { meta: e, index: t };
            !1 !== Ee.notify(this, "beforeDatasetUpdate", [n]) &&
              (e.controller.update(),
              Ee.notify(this, "afterDatasetUpdate", [n]));
          },
          render: function (t) {
            var e = this;
            (t && "object" === typeof t) ||
              (t = { duration: t, lazy: arguments[1] });
            var n = e.options.animation,
              i = Qe(t.duration, n && n.duration),
              r = t.lazy;
            if (!1 !== Ee.notify(e, "beforeRender")) {
              var a = function (t) {
                Ee.notify(e, "afterRender"),
                  ut.callback(n && n.onComplete, [t], e);
              };
              if (n && i) {
                var o = new mt({
                  numSteps: i / 16.66,
                  easing: t.easing || n.easing,
                  render: function (t, e) {
                    var n = ut.easing.effects[e.easing],
                      i = e.currentStep,
                      r = i / e.numSteps;
                    t.draw(n(r), r, i);
                  },
                  onAnimationProgress: n.onProgress,
                  onAnimationComplete: a,
                });
                vt.addAnimation(e, o, i, r);
              } else e.draw(), a(new mt({ numSteps: 0, chart: e }));
              return e;
            }
          },
          draw: function (t) {
            var e = this;
            e.clear(),
              ut.isNullOrUndef(t) && (t = 1),
              e.transition(t),
              e.width <= 0 ||
                e.height <= 0 ||
                (!1 !== Ee.notify(e, "beforeDraw", [t]) &&
                  (ut.each(
                    e.boxes,
                    function (t) {
                      t.draw(e.chartArea);
                    },
                    e
                  ),
                  e.drawDatasets(t),
                  e._drawTooltip(t),
                  Ee.notify(e, "afterDraw", [t])));
          },
          transition: function (t) {
            for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e)
              this.isDatasetVisible(e) &&
                this.getDatasetMeta(e).controller.transition(t);
            this.tooltip.transition(t);
          },
          drawDatasets: function (t) {
            var e = this;
            if (!1 !== Ee.notify(e, "beforeDatasetsDraw", [t])) {
              for (var n = (e.data.datasets || []).length - 1; n >= 0; --n)
                e.isDatasetVisible(n) && e.drawDataset(n, t);
              Ee.notify(e, "afterDatasetsDraw", [t]);
            }
          },
          drawDataset: function (t, e) {
            var n = this.getDatasetMeta(t),
              i = { meta: n, index: t, easingValue: e };
            !1 !== Ee.notify(this, "beforeDatasetDraw", [i]) &&
              (n.controller.draw(e), Ee.notify(this, "afterDatasetDraw", [i]));
          },
          _drawTooltip: function (t) {
            var e = this.tooltip,
              n = { tooltip: e, easingValue: t };
            !1 !== Ee.notify(this, "beforeTooltipDraw", [n]) &&
              (e.draw(), Ee.notify(this, "afterTooltipDraw", [n]));
          },
          getElementAtEvent: function (t) {
            return me.modes.single(this, t);
          },
          getElementsAtEvent: function (t) {
            return me.modes.label(this, t, { intersect: !0 });
          },
          getElementsAtXAxis: function (t) {
            return me.modes["x-axis"](this, t, { intersect: !0 });
          },
          getElementsAtEventForMode: function (t, e, n) {
            var i = me.modes[e];
            return "function" === typeof i ? i(this, t, n) : [];
          },
          getDatasetAtEvent: function (t) {
            return me.modes.dataset(this, t, { intersect: !0 });
          },
          getDatasetMeta: function (t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var n = e._meta[this.id];
            return (
              n ||
                (n = e._meta[this.id] =
                  {
                    type: null,
                    data: [],
                    dataset: null,
                    controller: null,
                    hidden: null,
                    xAxisID: null,
                    yAxisID: null,
                  }),
              n
            );
          },
          getVisibleDatasetCount: function () {
            for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e)
              this.isDatasetVisible(e) && t++;
            return t;
          },
          isDatasetVisible: function (t) {
            var e = this.getDatasetMeta(t);
            return "boolean" === typeof e.hidden
              ? !e.hidden
              : !this.data.datasets[t].hidden;
          },
          generateLegend: function () {
            return this.options.legendCallback(this);
          },
          destroyDatasetMeta: function (t) {
            var e = this.id,
              n = this.data.datasets[t],
              i = n._meta && n._meta[e];
            i && (i.controller.destroy(), delete n._meta[e]);
          },
          destroy: function () {
            var t,
              e,
              n = this,
              i = n.canvas;
            for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t)
              n.destroyDatasetMeta(t);
            i &&
              (n.unbindEvents(),
              ut.canvas.clear(n),
              Ne.releaseContext(n.ctx),
              (n.canvas = null),
              (n.ctx = null)),
              Ee.notify(n, "destroy"),
              delete an.instances[n.id];
          },
          toBase64Image: function () {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
          },
          initToolTip: function () {
            var t = this;
            t.tooltip = new Je(
              {
                _chart: t,
                _chartInstance: t,
                _data: t.data,
                _options: t.options.tooltips,
              },
              t
            );
          },
          bindEvents: function () {
            var t = this,
              e = (t._listeners = {}),
              n = function () {
                t.eventHandler.apply(t, arguments);
              };
            ut.each(t.options.events, function (i) {
              Ne.addEventListener(t, i, n), (e[i] = n);
            }),
              t.options.responsive &&
                ((n = function () {
                  t.resize();
                }),
                Ne.addEventListener(t, "resize", n),
                (e.resize = n));
          },
          unbindEvents: function () {
            var t = this,
              e = t._listeners;
            e &&
              (delete t._listeners,
              ut.each(e, function (e, n) {
                Ne.removeEventListener(t, n, e);
              }));
          },
          updateHoverStyle: function (t, e, n) {
            var i,
              r,
              a,
              o = n ? "setHoverStyle" : "removeHoverStyle";
            for (r = 0, a = t.length; r < a; ++r)
              (i = t[r]) &&
                this.getDatasetMeta(i._datasetIndex).controller[o](i);
          },
          eventHandler: function (t) {
            var e = this,
              n = e.tooltip;
            if (!1 !== Ee.notify(e, "beforeEvent", [t])) {
              (e._bufferedRender = !0), (e._bufferedRequest = null);
              var i = e.handleEvent(t);
              n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)),
                Ee.notify(e, "afterEvent", [t]);
              var r = e._bufferedRequest;
              return (
                r
                  ? e.render(r)
                  : i &&
                    !e.animating &&
                    (e.stop(),
                    e.render({
                      duration: e.options.hover.animationDuration,
                      lazy: !0,
                    })),
                (e._bufferedRender = !1),
                (e._bufferedRequest = null),
                e
              );
            }
          },
          handleEvent: function (t) {
            var e,
              n = this,
              i = n.options || {},
              r = i.hover;
            return (
              (n.lastActive = n.lastActive || []),
              "mouseout" === t.type
                ? (n.active = [])
                : (n.active = n.getElementsAtEventForMode(t, r.mode, r)),
              ut.callback(
                i.onHover || i.hover.onHover,
                [t.native, n.active],
                n
              ),
              ("mouseup" !== t.type && "click" !== t.type) ||
                (i.onClick && i.onClick.call(n, t.native, n.active)),
              n.lastActive.length &&
                n.updateHoverStyle(n.lastActive, r.mode, !1),
              n.active.length &&
                r.mode &&
                n.updateHoverStyle(n.active, r.mode, !0),
              (e = !ut.arrayEquals(n.active, n.lastActive)),
              (n.lastActive = n.active),
              e
            );
          },
        }),
          (an.instances = {});
        var on = an;
        function sn() {
          throw new Error(
            "This method is not implemented: either no adapter can be found or an incomplete integration was provided."
          );
        }
        function ln(t) {
          this.options = t || {};
        }
        (an.Controller = an),
          (an.types = {}),
          (ut.configMerge = en),
          (ut.scaleMerge = tn),
          ut.extend(ln.prototype, {
            formats: sn,
            parse: sn,
            format: sn,
            add: sn,
            diff: sn,
            startOf: sn,
            endOf: sn,
            _create: function (t) {
              return t;
            },
          }),
          (ln.override = function (t) {
            ut.extend(ln.prototype, t);
          });
        var un = { _date: ln },
          cn = {
            formatters: {
              values: function (t) {
                return ut.isArray(t) ? t : "" + t;
              },
              linear: function (t, e, n) {
                var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                Math.abs(i) > 1 &&
                  t !== Math.floor(t) &&
                  (i = t - Math.floor(t));
                var r = ut.log10(Math.abs(i)),
                  a = "";
                if (0 !== t)
                  if (
                    Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4
                  ) {
                    var o = ut.log10(Math.abs(t));
                    a = t.toExponential(Math.floor(o) - Math.floor(r));
                  } else {
                    var s = -1 * Math.floor(r);
                    (s = Math.max(Math.min(s, 20), 0)), (a = t.toFixed(s));
                  }
                else a = "0";
                return a;
              },
              logarithmic: function (t, e, n) {
                var i = t / Math.pow(10, Math.floor(ut.log10(t)));
                return 0 === t
                  ? "0"
                  : 1 === i ||
                    2 === i ||
                    5 === i ||
                    0 === e ||
                    e === n.length - 1
                  ? t.toExponential()
                  : "";
              },
            },
          },
          dn = ut.valueOrDefault,
          hn = ut.valueAtIndexOrDefault;
        function fn(t) {
          var e,
            n,
            i = [];
          for (e = 0, n = t.length; e < n; ++e) i.push(t[e].label);
          return i;
        }
        function pn(t, e, n) {
          return ut.isArray(e)
            ? ut.longestText(t, n, e)
            : t.measureText(e).width;
        }
        ot._set("scale", {
          display: !0,
          position: "left",
          offset: !1,
          gridLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0,
          },
          scaleLabel: {
            display: !1,
            labelString: "",
            padding: { top: 4, bottom: 4 },
          },
          ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: cn.formatters.values,
            minor: {},
            major: {},
          },
        });
        var gn = pt.extend({
            getPadding: function () {
              return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0,
              };
            },
            getTicks: function () {
              return this._ticks;
            },
            mergeTicksOptions: function () {
              var t = this.options.ticks;
              for (var e in (!1 === t.minor && (t.minor = { display: !1 }),
              !1 === t.major && (t.major = { display: !1 }),
              t))
                "major" !== e &&
                  "minor" !== e &&
                  ("undefined" === typeof t.minor[e] && (t.minor[e] = t[e]),
                  "undefined" === typeof t.major[e] && (t.major[e] = t[e]));
            },
            beforeUpdate: function () {
              ut.callback(this.options.beforeUpdate, [this]);
            },
            update: function (t, e, n) {
              var i,
                r,
                a,
                o,
                s,
                l,
                u = this;
              for (
                u.beforeUpdate(),
                  u.maxWidth = t,
                  u.maxHeight = e,
                  u.margins = ut.extend(
                    { left: 0, right: 0, top: 0, bottom: 0 },
                    n
                  ),
                  u._maxLabelLines = 0,
                  u.longestLabelWidth = 0,
                  u.longestTextCache = u.longestTextCache || {},
                  u.beforeSetDimensions(),
                  u.setDimensions(),
                  u.afterSetDimensions(),
                  u.beforeDataLimits(),
                  u.determineDataLimits(),
                  u.afterDataLimits(),
                  u.beforeBuildTicks(),
                  s = u.buildTicks() || [],
                  s = u.afterBuildTicks(s) || s,
                  u.beforeTickToLabelConversion(),
                  a = u.convertTicksToLabels(s) || u.ticks,
                  u.afterTickToLabelConversion(),
                  u.ticks = a,
                  i = 0,
                  r = a.length;
                i < r;
                ++i
              )
                (o = a[i]),
                  (l = s[i])
                    ? (l.label = o)
                    : s.push((l = { label: o, major: !1 }));
              return (
                (u._ticks = s),
                u.beforeCalculateTickRotation(),
                u.calculateTickRotation(),
                u.afterCalculateTickRotation(),
                u.beforeFit(),
                u.fit(),
                u.afterFit(),
                u.afterUpdate(),
                u.minSize
              );
            },
            afterUpdate: function () {
              ut.callback(this.options.afterUpdate, [this]);
            },
            beforeSetDimensions: function () {
              ut.callback(this.options.beforeSetDimensions, [this]);
            },
            setDimensions: function () {
              var t = this;
              t.isHorizontal()
                ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
                : ((t.height = t.maxHeight),
                  (t.top = 0),
                  (t.bottom = t.height)),
                (t.paddingLeft = 0),
                (t.paddingTop = 0),
                (t.paddingRight = 0),
                (t.paddingBottom = 0);
            },
            afterSetDimensions: function () {
              ut.callback(this.options.afterSetDimensions, [this]);
            },
            beforeDataLimits: function () {
              ut.callback(this.options.beforeDataLimits, [this]);
            },
            determineDataLimits: ut.noop,
            afterDataLimits: function () {
              ut.callback(this.options.afterDataLimits, [this]);
            },
            beforeBuildTicks: function () {
              ut.callback(this.options.beforeBuildTicks, [this]);
            },
            buildTicks: ut.noop,
            afterBuildTicks: function (t) {
              var e = this;
              return ut.isArray(t) && t.length
                ? ut.callback(e.options.afterBuildTicks, [e, t])
                : ((e.ticks =
                    ut.callback(e.options.afterBuildTicks, [e, e.ticks]) ||
                    e.ticks),
                  t);
            },
            beforeTickToLabelConversion: function () {
              ut.callback(this.options.beforeTickToLabelConversion, [this]);
            },
            convertTicksToLabels: function () {
              var t = this.options.ticks;
              this.ticks = this.ticks.map(t.userCallback || t.callback, this);
            },
            afterTickToLabelConversion: function () {
              ut.callback(this.options.afterTickToLabelConversion, [this]);
            },
            beforeCalculateTickRotation: function () {
              ut.callback(this.options.beforeCalculateTickRotation, [this]);
            },
            calculateTickRotation: function () {
              var t = this,
                e = t.ctx,
                n = t.options.ticks,
                i = fn(t._ticks),
                r = ut.options._parseFont(n);
              e.font = r.string;
              var a = n.minRotation || 0;
              if (i.length && t.options.display && t.isHorizontal())
                for (
                  var o,
                    s = ut.longestText(e, r.string, i, t.longestTextCache),
                    l = s,
                    u = t.getPixelForTick(1) - t.getPixelForTick(0) - 6;
                  l > u && a < n.maxRotation;

                ) {
                  var c = ut.toRadians(a);
                  if (((o = Math.cos(c)), Math.sin(c) * s > t.maxHeight)) {
                    a--;
                    break;
                  }
                  a++, (l = o * s);
                }
              t.labelRotation = a;
            },
            afterCalculateTickRotation: function () {
              ut.callback(this.options.afterCalculateTickRotation, [this]);
            },
            beforeFit: function () {
              ut.callback(this.options.beforeFit, [this]);
            },
            fit: function () {
              var t = this,
                e = (t.minSize = { width: 0, height: 0 }),
                n = fn(t._ticks),
                i = t.options,
                r = i.ticks,
                a = i.scaleLabel,
                o = i.gridLines,
                s = t._isVisible(),
                l = i.position,
                u = t.isHorizontal(),
                c = ut.options._parseFont,
                d = c(r),
                h = i.gridLines.tickMarkLength;
              if (
                ((e.width = u
                  ? t.isFullWidth()
                    ? t.maxWidth - t.margins.left - t.margins.right
                    : t.maxWidth
                  : s && o.drawTicks
                  ? h
                  : 0),
                (e.height = u ? (s && o.drawTicks ? h : 0) : t.maxHeight),
                a.display && s)
              ) {
                var f = c(a),
                  p = ut.options.toPadding(a.padding),
                  g = f.lineHeight + p.height;
                u ? (e.height += g) : (e.width += g);
              }
              if (r.display && s) {
                var m = ut.longestText(t.ctx, d.string, n, t.longestTextCache),
                  v = ut.numberOfLabelLines(n),
                  y = 0.5 * d.size,
                  b = t.options.ticks.padding;
                if (((t._maxLabelLines = v), (t.longestLabelWidth = m), u)) {
                  var x = ut.toRadians(t.labelRotation),
                    _ = Math.cos(x),
                    w = Math.sin(x) * m + d.lineHeight * v + y;
                  (e.height = Math.min(t.maxHeight, e.height + w + b)),
                    (t.ctx.font = d.string);
                  var k,
                    M,
                    S = pn(t.ctx, n[0], d.string),
                    D = pn(t.ctx, n[n.length - 1], d.string),
                    C = t.getPixelForTick(0) - t.left,
                    P = t.right - t.getPixelForTick(n.length - 1);
                  0 !== t.labelRotation
                    ? ((k = "bottom" === l ? _ * S : _ * y),
                      (M = "bottom" === l ? _ * y : _ * D))
                    : ((k = S / 2), (M = D / 2)),
                    (t.paddingLeft = Math.max(k - C, 0) + 3),
                    (t.paddingRight = Math.max(M - P, 0) + 3);
                } else
                  r.mirror ? (m = 0) : (m += b + y),
                    (e.width = Math.min(t.maxWidth, e.width + m)),
                    (t.paddingTop = d.size / 2),
                    (t.paddingBottom = d.size / 2);
              }
              t.handleMargins(), (t.width = e.width), (t.height = e.height);
            },
            handleMargins: function () {
              var t = this;
              t.margins &&
                ((t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0)),
                (t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0)),
                (t.paddingRight = Math.max(
                  t.paddingRight - t.margins.right,
                  0
                )),
                (t.paddingBottom = Math.max(
                  t.paddingBottom - t.margins.bottom,
                  0
                )));
            },
            afterFit: function () {
              ut.callback(this.options.afterFit, [this]);
            },
            isHorizontal: function () {
              return (
                "top" === this.options.position ||
                "bottom" === this.options.position
              );
            },
            isFullWidth: function () {
              return this.options.fullWidth;
            },
            getRightValue: function (t) {
              if (ut.isNullOrUndef(t)) return NaN;
              if (
                ("number" === typeof t || t instanceof Number) &&
                !isFinite(t)
              )
                return NaN;
              if (t)
                if (this.isHorizontal()) {
                  if (void 0 !== t.x) return this.getRightValue(t.x);
                } else if (void 0 !== t.y) return this.getRightValue(t.y);
              return t;
            },
            getLabelForIndex: ut.noop,
            getPixelForValue: ut.noop,
            getValueForPixel: ut.noop,
            getPixelForTick: function (t) {
              var e = this,
                n = e.options.offset;
              if (e.isHorizontal()) {
                var i =
                    (e.width - (e.paddingLeft + e.paddingRight)) /
                    Math.max(e._ticks.length - (n ? 0 : 1), 1),
                  r = i * t + e.paddingLeft;
                n && (r += i / 2);
                var a = e.left + r;
                return (a += e.isFullWidth() ? e.margins.left : 0);
              }
              var o = e.height - (e.paddingTop + e.paddingBottom);
              return e.top + t * (o / (e._ticks.length - 1));
            },
            getPixelForDecimal: function (t) {
              var e = this;
              if (e.isHorizontal()) {
                var n =
                    (e.width - (e.paddingLeft + e.paddingRight)) * t +
                    e.paddingLeft,
                  i = e.left + n;
                return (i += e.isFullWidth() ? e.margins.left : 0);
              }
              return e.top + t * e.height;
            },
            getBasePixel: function () {
              return this.getPixelForValue(this.getBaseValue());
            },
            getBaseValue: function () {
              var t = this.min,
                e = this.max;
              return this.beginAtZero
                ? 0
                : t < 0 && e < 0
                ? e
                : t > 0 && e > 0
                ? t
                : 0;
            },
            _autoSkip: function (t) {
              var e,
                n,
                i = this,
                r = i.isHorizontal(),
                a = i.options.ticks.minor,
                o = t.length,
                s = !1,
                l = a.maxTicksLimit,
                u = i._tickSize() * (o - 1),
                c = r
                  ? i.width - (i.paddingLeft + i.paddingRight)
                  : i.height - (i.paddingTop + i.PaddingBottom),
                d = [];
              for (
                u > c && (s = 1 + Math.floor(u / c)),
                  o > l && (s = Math.max(s, 1 + Math.floor(o / l))),
                  e = 0;
                e < o;
                e++
              )
                (n = t[e]), s > 1 && e % s > 0 && delete n.label, d.push(n);
              return d;
            },
            _tickSize: function () {
              var t = this,
                e = t.isHorizontal(),
                n = t.options.ticks.minor,
                i = ut.toRadians(t.labelRotation),
                r = Math.abs(Math.cos(i)),
                a = Math.abs(Math.sin(i)),
                o = n.autoSkipPadding || 0,
                s = t.longestLabelWidth + o || 0,
                l = ut.options._parseFont(n),
                u = t._maxLabelLines * l.lineHeight + o || 0;
              return e
                ? u * r > s * a
                  ? s / r
                  : u / a
                : u * a < s * r
                ? u / r
                : s / a;
            },
            _isVisible: function () {
              var t,
                e,
                n,
                i = this.chart,
                r = this.options.display;
              if ("auto" !== r) return !!r;
              for (t = 0, e = i.data.datasets.length; t < e; ++t)
                if (
                  i.isDatasetVisible(t) &&
                  ((n = i.getDatasetMeta(t)).xAxisID === this.id ||
                    n.yAxisID === this.id)
                )
                  return !0;
              return !1;
            },
            draw: function (t) {
              var e = this,
                n = e.options;
              if (e._isVisible()) {
                var i,
                  r,
                  a,
                  o = e.chart,
                  s = e.ctx,
                  l = ot.global.defaultFontColor,
                  u = n.ticks.minor,
                  c = n.ticks.major || u,
                  d = n.gridLines,
                  h = n.scaleLabel,
                  f = n.position,
                  p = 0 !== e.labelRotation,
                  g = u.mirror,
                  m = e.isHorizontal(),
                  v = ut.options._parseFont,
                  y =
                    u.display && u.autoSkip
                      ? e._autoSkip(e.getTicks())
                      : e.getTicks(),
                  b = dn(u.fontColor, l),
                  x = v(u),
                  _ = x.lineHeight,
                  w = dn(c.fontColor, l),
                  k = v(c),
                  M = u.padding,
                  S = u.labelOffset,
                  D = d.drawTicks ? d.tickMarkLength : 0,
                  C = dn(h.fontColor, l),
                  P = v(h),
                  T = ut.options.toPadding(h.padding),
                  O = ut.toRadians(e.labelRotation),
                  A = [],
                  I = d.drawBorder ? hn(d.lineWidth, 0, 0) : 0,
                  F = ut._alignPixel;
                if (
                  ("top" === f
                    ? ((i = F(o, e.bottom, I)),
                      (r = e.bottom - D),
                      (a = i - I / 2))
                    : "bottom" === f
                    ? ((i = F(o, e.top, I)), (r = i + I / 2), (a = e.top + D))
                    : "left" === f
                    ? ((i = F(o, e.right, I)),
                      (r = e.right - D),
                      (a = i - I / 2))
                    : ((i = F(o, e.left, I)),
                      (r = i + I / 2),
                      (a = e.left + D)),
                  ut.each(y, function (i, s) {
                    if (!ut.isNullOrUndef(i.label)) {
                      var l,
                        u,
                        c,
                        h,
                        v,
                        y,
                        b,
                        x,
                        w,
                        k,
                        C,
                        P,
                        T,
                        L,
                        R,
                        W,
                        Y = i.label;
                      s === e.zeroLineIndex && n.offset === d.offsetGridLines
                        ? ((l = d.zeroLineWidth),
                          (u = d.zeroLineColor),
                          (c = d.zeroLineBorderDash || []),
                          (h = d.zeroLineBorderDashOffset || 0))
                        : ((l = hn(d.lineWidth, s)),
                          (u = hn(d.color, s)),
                          (c = d.borderDash || []),
                          (h = d.borderDashOffset || 0));
                      var z = ut.isArray(Y) ? Y.length : 1,
                        N = (function (t, e, n) {
                          var i = t.getPixelForTick(e);
                          return (
                            n &&
                              (1 === t.getTicks().length
                                ? (i -= t.isHorizontal()
                                    ? Math.max(i - t.left, t.right - i)
                                    : Math.max(i - t.top, t.bottom - i))
                                : (i -=
                                    0 === e
                                      ? (t.getPixelForTick(1) - i) / 2
                                      : (i - t.getPixelForTick(e - 1)) / 2)),
                            i
                          );
                        })(e, s, d.offsetGridLines);
                      if (m) {
                        var E = D + M;
                        N < e.left - 1e-7 && (u = "rgba(0,0,0,0)"),
                          (v = b = w = C = F(o, N, l)),
                          (y = r),
                          (x = a),
                          (T = e.getPixelForTick(s) + S),
                          "top" === f
                            ? ((k = F(o, t.top, I) + I / 2),
                              (P = t.bottom),
                              (R = ((p ? 1 : 0.5) - z) * _),
                              (W = p ? "left" : "center"),
                              (L = e.bottom - E))
                            : ((k = t.top),
                              (P = F(o, t.bottom, I) - I / 2),
                              (R = (p ? 0 : 0.5) * _),
                              (W = p ? "right" : "center"),
                              (L = e.top + E));
                      } else {
                        var j = (g ? 0 : D) + M;
                        N < e.top - 1e-7 && (u = "rgba(0,0,0,0)"),
                          (v = r),
                          (b = a),
                          (y = x = k = P = F(o, N, l)),
                          (L = e.getPixelForTick(s) + S),
                          (R = ((1 - z) * _) / 2),
                          "left" === f
                            ? ((w = F(o, t.left, I) + I / 2),
                              (C = t.right),
                              (W = g ? "left" : "right"),
                              (T = e.right - j))
                            : ((w = t.left),
                              (C = F(o, t.right, I) - I / 2),
                              (W = g ? "right" : "left"),
                              (T = e.left + j));
                      }
                      A.push({
                        tx1: v,
                        ty1: y,
                        tx2: b,
                        ty2: x,
                        x1: w,
                        y1: k,
                        x2: C,
                        y2: P,
                        labelX: T,
                        labelY: L,
                        glWidth: l,
                        glColor: u,
                        glBorderDash: c,
                        glBorderDashOffset: h,
                        rotation: -1 * O,
                        label: Y,
                        major: i.major,
                        textOffset: R,
                        textAlign: W,
                      });
                    }
                  }),
                  ut.each(A, function (t) {
                    var e = t.glWidth,
                      n = t.glColor;
                    if (
                      (d.display &&
                        e &&
                        n &&
                        (s.save(),
                        (s.lineWidth = e),
                        (s.strokeStyle = n),
                        s.setLineDash &&
                          (s.setLineDash(t.glBorderDash),
                          (s.lineDashOffset = t.glBorderDashOffset)),
                        s.beginPath(),
                        d.drawTicks &&
                          (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)),
                        d.drawOnChartArea &&
                          (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)),
                        s.stroke(),
                        s.restore()),
                      u.display)
                    ) {
                      s.save(),
                        s.translate(t.labelX, t.labelY),
                        s.rotate(t.rotation),
                        (s.font = t.major ? k.string : x.string),
                        (s.fillStyle = t.major ? w : b),
                        (s.textBaseline = "middle"),
                        (s.textAlign = t.textAlign);
                      var i = t.label,
                        r = t.textOffset;
                      if (ut.isArray(i))
                        for (var a = 0; a < i.length; ++a)
                          s.fillText("" + i[a], 0, r), (r += _);
                      else s.fillText(i, 0, r);
                      s.restore();
                    }
                  }),
                  h.display)
                ) {
                  var L,
                    R,
                    W = 0,
                    Y = P.lineHeight / 2;
                  if (m)
                    (L = e.left + (e.right - e.left) / 2),
                      (R =
                        "bottom" === f
                          ? e.bottom - Y - T.bottom
                          : e.top + Y + T.top);
                  else {
                    var z = "left" === f;
                    (L = z ? e.left + Y + T.top : e.right - Y - T.top),
                      (R = e.top + (e.bottom - e.top) / 2),
                      (W = z ? -0.5 * Math.PI : 0.5 * Math.PI);
                  }
                  s.save(),
                    s.translate(L, R),
                    s.rotate(W),
                    (s.textAlign = "center"),
                    (s.textBaseline = "middle"),
                    (s.fillStyle = C),
                    (s.font = P.string),
                    s.fillText(h.labelString, 0, 0),
                    s.restore();
                }
                if (I) {
                  var N,
                    E,
                    j,
                    V,
                    H = I,
                    B = hn(d.lineWidth, y.length - 1, 0);
                  m
                    ? ((N = F(o, e.left, H) - H / 2),
                      (E = F(o, e.right, B) + B / 2),
                      (j = V = i))
                    : ((j = F(o, e.top, H) - H / 2),
                      (V = F(o, e.bottom, B) + B / 2),
                      (N = E = i)),
                    (s.lineWidth = I),
                    (s.strokeStyle = hn(d.color, 0)),
                    s.beginPath(),
                    s.moveTo(N, j),
                    s.lineTo(E, V),
                    s.stroke();
                }
              }
            },
          }),
          mn = gn.extend({
            getLabels: function () {
              var t = this.chart.data;
              return (
                this.options.labels ||
                (this.isHorizontal() ? t.xLabels : t.yLabels) ||
                t.labels
              );
            },
            determineDataLimits: function () {
              var t,
                e = this,
                n = e.getLabels();
              (e.minIndex = 0),
                (e.maxIndex = n.length - 1),
                void 0 !== e.options.ticks.min &&
                  ((t = n.indexOf(e.options.ticks.min)),
                  (e.minIndex = -1 !== t ? t : e.minIndex)),
                void 0 !== e.options.ticks.max &&
                  ((t = n.indexOf(e.options.ticks.max)),
                  (e.maxIndex = -1 !== t ? t : e.maxIndex)),
                (e.min = n[e.minIndex]),
                (e.max = n[e.maxIndex]);
            },
            buildTicks: function () {
              var t = this,
                e = t.getLabels();
              t.ticks =
                0 === t.minIndex && t.maxIndex === e.length - 1
                  ? e
                  : e.slice(t.minIndex, t.maxIndex + 1);
            },
            getLabelForIndex: function (t, e) {
              var n = this,
                i = n.chart;
              return i.getDatasetMeta(e).controller._getValueScaleId() === n.id
                ? n.getRightValue(i.data.datasets[e].data[t])
                : n.ticks[t - n.minIndex];
            },
            getPixelForValue: function (t, e) {
              var n,
                i = this,
                r = i.options.offset,
                a = Math.max(i.maxIndex + 1 - i.minIndex - (r ? 0 : 1), 1);
              if (
                (void 0 !== t &&
                  null !== t &&
                  (n = i.isHorizontal() ? t.x : t.y),
                void 0 !== n || (void 0 !== t && isNaN(e)))
              ) {
                t = n || t;
                var o = i.getLabels().indexOf(t);
                e = -1 !== o ? o : e;
              }
              if (i.isHorizontal()) {
                var s = i.width / a,
                  l = s * (e - i.minIndex);
                return r && (l += s / 2), i.left + l;
              }
              var u = i.height / a,
                c = u * (e - i.minIndex);
              return r && (c += u / 2), i.top + c;
            },
            getPixelForTick: function (t) {
              return this.getPixelForValue(
                this.ticks[t],
                t + this.minIndex,
                null
              );
            },
            getValueForPixel: function (t) {
              var e = this,
                n = e.options.offset,
                i = Math.max(e._ticks.length - (n ? 0 : 1), 1),
                r = e.isHorizontal(),
                a = (r ? e.width : e.height) / i;
              return (
                (t -= r ? e.left : e.top),
                n && (t -= a / 2),
                (t <= 0 ? 0 : Math.round(t / a)) + e.minIndex
              );
            },
            getBasePixel: function () {
              return this.bottom;
            },
          }),
          vn = { position: "bottom" };
        mn._defaults = vn;
        var yn = ut.noop,
          bn = ut.isNullOrUndef,
          xn = gn.extend({
            getRightValue: function (t) {
              return "string" === typeof t
                ? +t
                : gn.prototype.getRightValue.call(this, t);
            },
            handleTickRangeOptions: function () {
              var t = this,
                e = t.options.ticks;
              if (e.beginAtZero) {
                var n = ut.sign(t.min),
                  i = ut.sign(t.max);
                n < 0 && i < 0 ? (t.max = 0) : n > 0 && i > 0 && (t.min = 0);
              }
              var r = void 0 !== e.min || void 0 !== e.suggestedMin,
                a = void 0 !== e.max || void 0 !== e.suggestedMax;
              void 0 !== e.min
                ? (t.min = e.min)
                : void 0 !== e.suggestedMin &&
                  (null === t.min
                    ? (t.min = e.suggestedMin)
                    : (t.min = Math.min(t.min, e.suggestedMin))),
                void 0 !== e.max
                  ? (t.max = e.max)
                  : void 0 !== e.suggestedMax &&
                    (null === t.max
                      ? (t.max = e.suggestedMax)
                      : (t.max = Math.max(t.max, e.suggestedMax))),
                r !== a &&
                  t.min >= t.max &&
                  (r ? (t.max = t.min + 1) : (t.min = t.max - 1)),
                t.min === t.max && (t.max++, e.beginAtZero || t.min--);
            },
            getTickLimit: function () {
              var t,
                e = this.options.ticks,
                n = e.stepSize,
                i = e.maxTicksLimit;
              return (
                n
                  ? (t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1)
                  : ((t = this._computeTickLimit()), (i = i || 11)),
                i && (t = Math.min(i, t)),
                t
              );
            },
            _computeTickLimit: function () {
              return Number.POSITIVE_INFINITY;
            },
            handleDirectionalChanges: yn,
            buildTicks: function () {
              var t = this,
                e = t.options.ticks,
                n = t.getTickLimit(),
                i = {
                  maxTicks: (n = Math.max(2, n)),
                  min: e.min,
                  max: e.max,
                  precision: e.precision,
                  stepSize: ut.valueOrDefault(e.fixedStepSize, e.stepSize),
                },
                r = (t.ticks = (function (t, e) {
                  var n,
                    i,
                    r,
                    a,
                    o = [],
                    s = t.stepSize,
                    l = s || 1,
                    u = t.maxTicks - 1,
                    c = t.min,
                    d = t.max,
                    h = t.precision,
                    f = e.min,
                    p = e.max,
                    g = ut.niceNum((p - f) / u / l) * l;
                  if (g < 1e-14 && bn(c) && bn(d)) return [f, p];
                  (a = Math.ceil(p / g) - Math.floor(f / g)) > u &&
                    (g = ut.niceNum((a * g) / u / l) * l),
                    s || bn(h)
                      ? (n = Math.pow(10, ut._decimalPlaces(g)))
                      : ((n = Math.pow(10, h)), (g = Math.ceil(g * n) / n)),
                    (i = Math.floor(f / g) * g),
                    (r = Math.ceil(p / g) * g),
                    s &&
                      (!bn(c) && ut.almostWhole(c / g, g / 1e3) && (i = c),
                      !bn(d) && ut.almostWhole(d / g, g / 1e3) && (r = d)),
                    (a = (r - i) / g),
                    (a = ut.almostEquals(a, Math.round(a), g / 1e3)
                      ? Math.round(a)
                      : Math.ceil(a)),
                    (i = Math.round(i * n) / n),
                    (r = Math.round(r * n) / n),
                    o.push(bn(c) ? i : c);
                  for (var m = 1; m < a; ++m)
                    o.push(Math.round((i + m * g) * n) / n);
                  return o.push(bn(d) ? r : d), o;
                })(i, t));
              t.handleDirectionalChanges(),
                (t.max = ut.max(r)),
                (t.min = ut.min(r)),
                e.reverse
                  ? (r.reverse(), (t.start = t.max), (t.end = t.min))
                  : ((t.start = t.min), (t.end = t.max));
            },
            convertTicksToLabels: function () {
              var t = this;
              (t.ticksAsNumbers = t.ticks.slice()),
                (t.zeroLineIndex = t.ticks.indexOf(0)),
                gn.prototype.convertTicksToLabels.call(t);
            },
          }),
          _n = { position: "left", ticks: { callback: cn.formatters.linear } },
          wn = xn.extend({
            determineDataLimits: function () {
              var t = this,
                e = t.options,
                n = t.chart,
                i = n.data.datasets,
                r = t.isHorizontal();
              function a(e) {
                return r ? e.xAxisID === t.id : e.yAxisID === t.id;
              }
              (t.min = null), (t.max = null);
              var o = e.stacked;
              if (
                (void 0 === o &&
                  ut.each(i, function (t, e) {
                    if (!o) {
                      var i = n.getDatasetMeta(e);
                      n.isDatasetVisible(e) &&
                        a(i) &&
                        void 0 !== i.stack &&
                        (o = !0);
                    }
                  }),
                e.stacked || o)
              ) {
                var s = {};
                ut.each(i, function (i, r) {
                  var o = n.getDatasetMeta(r),
                    l = [
                      o.type,
                      void 0 === e.stacked && void 0 === o.stack ? r : "",
                      o.stack,
                    ].join(".");
                  void 0 === s[l] &&
                    (s[l] = { positiveValues: [], negativeValues: [] });
                  var u = s[l].positiveValues,
                    c = s[l].negativeValues;
                  n.isDatasetVisible(r) &&
                    a(o) &&
                    ut.each(i.data, function (n, i) {
                      var r = +t.getRightValue(n);
                      isNaN(r) ||
                        o.data[i].hidden ||
                        ((u[i] = u[i] || 0),
                        (c[i] = c[i] || 0),
                        e.relativePoints
                          ? (u[i] = 100)
                          : r < 0
                          ? (c[i] += r)
                          : (u[i] += r));
                    });
                }),
                  ut.each(s, function (e) {
                    var n = e.positiveValues.concat(e.negativeValues),
                      i = ut.min(n),
                      r = ut.max(n);
                    (t.min = null === t.min ? i : Math.min(t.min, i)),
                      (t.max = null === t.max ? r : Math.max(t.max, r));
                  });
              } else
                ut.each(i, function (e, i) {
                  var r = n.getDatasetMeta(i);
                  n.isDatasetVisible(i) &&
                    a(r) &&
                    ut.each(e.data, function (e, n) {
                      var i = +t.getRightValue(e);
                      isNaN(i) ||
                        r.data[n].hidden ||
                        (null === t.min
                          ? (t.min = i)
                          : i < t.min && (t.min = i),
                        null === t.max
                          ? (t.max = i)
                          : i > t.max && (t.max = i));
                    });
                });
              (t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0),
                (t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1),
                this.handleTickRangeOptions();
            },
            _computeTickLimit: function () {
              var t;
              return this.isHorizontal()
                ? Math.ceil(this.width / 40)
                : ((t = ut.options._parseFont(this.options.ticks)),
                  Math.ceil(this.height / t.lineHeight));
            },
            handleDirectionalChanges: function () {
              this.isHorizontal() || this.ticks.reverse();
            },
            getLabelForIndex: function (t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t]);
            },
            getPixelForValue: function (t) {
              var e = this,
                n = e.start,
                i = +e.getRightValue(t),
                r = e.end - n;
              return e.isHorizontal()
                ? e.left + (e.width / r) * (i - n)
                : e.bottom - (e.height / r) * (i - n);
            },
            getValueForPixel: function (t) {
              var e = this,
                n = e.isHorizontal(),
                i = n ? e.width : e.height,
                r = (n ? t - e.left : e.bottom - t) / i;
              return e.start + (e.end - e.start) * r;
            },
            getPixelForTick: function (t) {
              return this.getPixelForValue(this.ticksAsNumbers[t]);
            },
          }),
          kn = _n;
        wn._defaults = kn;
        var Mn = ut.valueOrDefault,
          Sn = {
            position: "left",
            ticks: { callback: cn.formatters.logarithmic },
          };
        function Dn(t, e) {
          return ut.isFinite(t) && t >= 0 ? t : e;
        }
        var Cn = gn.extend({
            determineDataLimits: function () {
              var t = this,
                e = t.options,
                n = t.chart,
                i = n.data.datasets,
                r = t.isHorizontal();
              function a(e) {
                return r ? e.xAxisID === t.id : e.yAxisID === t.id;
              }
              (t.min = null), (t.max = null), (t.minNotZero = null);
              var o = e.stacked;
              if (
                (void 0 === o &&
                  ut.each(i, function (t, e) {
                    if (!o) {
                      var i = n.getDatasetMeta(e);
                      n.isDatasetVisible(e) &&
                        a(i) &&
                        void 0 !== i.stack &&
                        (o = !0);
                    }
                  }),
                e.stacked || o)
              ) {
                var s = {};
                ut.each(i, function (i, r) {
                  var o = n.getDatasetMeta(r),
                    l = [
                      o.type,
                      void 0 === e.stacked && void 0 === o.stack ? r : "",
                      o.stack,
                    ].join(".");
                  n.isDatasetVisible(r) &&
                    a(o) &&
                    (void 0 === s[l] && (s[l] = []),
                    ut.each(i.data, function (e, n) {
                      var i = s[l],
                        r = +t.getRightValue(e);
                      isNaN(r) ||
                        o.data[n].hidden ||
                        r < 0 ||
                        ((i[n] = i[n] || 0), (i[n] += r));
                    }));
                }),
                  ut.each(s, function (e) {
                    if (e.length > 0) {
                      var n = ut.min(e),
                        i = ut.max(e);
                      (t.min = null === t.min ? n : Math.min(t.min, n)),
                        (t.max = null === t.max ? i : Math.max(t.max, i));
                    }
                  });
              } else
                ut.each(i, function (e, i) {
                  var r = n.getDatasetMeta(i);
                  n.isDatasetVisible(i) &&
                    a(r) &&
                    ut.each(e.data, function (e, n) {
                      var i = +t.getRightValue(e);
                      isNaN(i) ||
                        r.data[n].hidden ||
                        i < 0 ||
                        (null === t.min
                          ? (t.min = i)
                          : i < t.min && (t.min = i),
                        null === t.max ? (t.max = i) : i > t.max && (t.max = i),
                        0 !== i &&
                          (null === t.minNotZero || i < t.minNotZero) &&
                          (t.minNotZero = i));
                    });
                });
              this.handleTickRangeOptions();
            },
            handleTickRangeOptions: function () {
              var t = this,
                e = t.options.ticks;
              (t.min = Dn(e.min, t.min)),
                (t.max = Dn(e.max, t.max)),
                t.min === t.max &&
                  (0 !== t.min && null !== t.min
                    ? ((t.min = Math.pow(10, Math.floor(ut.log10(t.min)) - 1)),
                      (t.max = Math.pow(10, Math.floor(ut.log10(t.max)) + 1)))
                    : ((t.min = 1), (t.max = 10))),
                null === t.min &&
                  (t.min = Math.pow(10, Math.floor(ut.log10(t.max)) - 1)),
                null === t.max &&
                  (t.max =
                    0 !== t.min
                      ? Math.pow(10, Math.floor(ut.log10(t.min)) + 1)
                      : 10),
                null === t.minNotZero &&
                  (t.min > 0
                    ? (t.minNotZero = t.min)
                    : t.max < 1
                    ? (t.minNotZero = Math.pow(10, Math.floor(ut.log10(t.max))))
                    : (t.minNotZero = 1));
            },
            buildTicks: function () {
              var t = this,
                e = t.options.ticks,
                n = !t.isHorizontal(),
                i = { min: Dn(e.min), max: Dn(e.max) },
                r = (t.ticks = (function (t, e) {
                  var n,
                    i,
                    r = [],
                    a = Mn(t.min, Math.pow(10, Math.floor(ut.log10(e.min)))),
                    o = Math.floor(ut.log10(e.max)),
                    s = Math.ceil(e.max / Math.pow(10, o));
                  0 === a
                    ? ((n = Math.floor(ut.log10(e.minNotZero))),
                      (i = Math.floor(e.minNotZero / Math.pow(10, n))),
                      r.push(a),
                      (a = i * Math.pow(10, n)))
                    : ((n = Math.floor(ut.log10(a))),
                      (i = Math.floor(a / Math.pow(10, n))));
                  var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                  do {
                    r.push(a),
                      10 === ++i && ((i = 1), (l = ++n >= 0 ? 1 : l)),
                      (a = Math.round(i * Math.pow(10, n) * l) / l);
                  } while (n < o || (n === o && i < s));
                  var u = Mn(t.max, a);
                  return r.push(u), r;
                })(i, t));
              (t.max = ut.max(r)),
                (t.min = ut.min(r)),
                e.reverse
                  ? ((n = !n), (t.start = t.max), (t.end = t.min))
                  : ((t.start = t.min), (t.end = t.max)),
                n && r.reverse();
            },
            convertTicksToLabels: function () {
              (this.tickValues = this.ticks.slice()),
                gn.prototype.convertTicksToLabels.call(this);
            },
            getLabelForIndex: function (t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t]);
            },
            getPixelForTick: function (t) {
              return this.getPixelForValue(this.tickValues[t]);
            },
            _getFirstTickValue: function (t) {
              var e = Math.floor(ut.log10(t));
              return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
            },
            getPixelForValue: function (t) {
              var e,
                n,
                i,
                r,
                a,
                o = this,
                s = o.options.ticks,
                l = s.reverse,
                u = ut.log10,
                c = o._getFirstTickValue(o.minNotZero),
                d = 0;
              return (
                (t = +o.getRightValue(t)),
                l
                  ? ((i = o.end), (r = o.start), (a = -1))
                  : ((i = o.start), (r = o.end), (a = 1)),
                o.isHorizontal()
                  ? ((e = o.width), (n = l ? o.right : o.left))
                  : ((e = o.height), (a *= -1), (n = l ? o.top : o.bottom)),
                t !== i &&
                  (0 === i &&
                    ((e -= d = Mn(s.fontSize, ot.global.defaultFontSize)),
                    (i = c)),
                  0 !== t && (d += (e / (u(r) - u(i))) * (u(t) - u(i))),
                  (n += a * d)),
                n
              );
            },
            getValueForPixel: function (t) {
              var e,
                n,
                i,
                r,
                a = this,
                o = a.options.ticks,
                s = o.reverse,
                l = ut.log10,
                u = a._getFirstTickValue(a.minNotZero);
              if (
                (s
                  ? ((n = a.end), (i = a.start))
                  : ((n = a.start), (i = a.end)),
                a.isHorizontal()
                  ? ((e = a.width), (r = s ? a.right - t : t - a.left))
                  : ((e = a.height), (r = s ? t - a.top : a.bottom - t)),
                r !== n)
              ) {
                if (0 === n) {
                  var c = Mn(o.fontSize, ot.global.defaultFontSize);
                  (r -= c), (e -= c), (n = u);
                }
                (r *= l(i) - l(n)), (r /= e), (r = Math.pow(10, l(n) + r));
              }
              return r;
            },
          }),
          Pn = Sn;
        Cn._defaults = Pn;
        var Tn = ut.valueOrDefault,
          On = ut.valueAtIndexOrDefault,
          An = ut.options.resolve,
          In = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
              display: !0,
              color: "rgba(0, 0, 0, 0.1)",
              lineWidth: 1,
              borderDash: [],
              borderDashOffset: 0,
            },
            gridLines: { circular: !1 },
            ticks: {
              showLabelBackdrop: !0,
              backdropColor: "rgba(255,255,255,0.75)",
              backdropPaddingY: 2,
              backdropPaddingX: 2,
              callback: cn.formatters.linear,
            },
            pointLabels: {
              display: !0,
              fontSize: 10,
              callback: function (t) {
                return t;
              },
            },
          };
        function Fn(t) {
          var e = t.options;
          return e.angleLines.display || e.pointLabels.display
            ? t.chart.data.labels.length
            : 0;
        }
        function Ln(t) {
          var e = t.ticks;
          return e.display && t.display
            ? Tn(e.fontSize, ot.global.defaultFontSize) + 2 * e.backdropPaddingY
            : 0;
        }
        function Rn(t, e, n, i, r) {
          return t === i || t === r
            ? { start: e - n / 2, end: e + n / 2 }
            : t < i || t > r
            ? { start: e - n, end: e }
            : { start: e, end: e + n };
        }
        function Wn(t) {
          return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
        }
        function Yn(t, e, n, i) {
          var r,
            a,
            o = n.y + i / 2;
          if (ut.isArray(e))
            for (r = 0, a = e.length; r < a; ++r)
              t.fillText(e[r], n.x, o), (o += i);
          else t.fillText(e, n.x, o);
        }
        function zn(t, e, n) {
          90 === t || 270 === t
            ? (n.y -= e.h / 2)
            : (t > 270 || t < 90) && (n.y -= e.h);
        }
        function Nn(t) {
          return ut.isNumber(t) ? t : 0;
        }
        var En = xn.extend({
            setDimensions: function () {
              var t = this;
              (t.width = t.maxWidth),
                (t.height = t.maxHeight),
                (t.paddingTop = Ln(t.options) / 2),
                (t.xCenter = Math.floor(t.width / 2)),
                (t.yCenter = Math.floor((t.height - t.paddingTop) / 2)),
                (t.drawingArea =
                  Math.min(t.height - t.paddingTop, t.width) / 2);
            },
            determineDataLimits: function () {
              var t = this,
                e = t.chart,
                n = Number.POSITIVE_INFINITY,
                i = Number.NEGATIVE_INFINITY;
              ut.each(e.data.datasets, function (r, a) {
                if (e.isDatasetVisible(a)) {
                  var o = e.getDatasetMeta(a);
                  ut.each(r.data, function (e, r) {
                    var a = +t.getRightValue(e);
                    isNaN(a) ||
                      o.data[r].hidden ||
                      ((n = Math.min(a, n)), (i = Math.max(a, i)));
                  });
                }
              }),
                (t.min = n === Number.POSITIVE_INFINITY ? 0 : n),
                (t.max = i === Number.NEGATIVE_INFINITY ? 0 : i),
                t.handleTickRangeOptions();
            },
            _computeTickLimit: function () {
              return Math.ceil(this.drawingArea / Ln(this.options));
            },
            convertTicksToLabels: function () {
              var t = this;
              xn.prototype.convertTicksToLabels.call(t),
                (t.pointLabels = t.chart.data.labels.map(
                  t.options.pointLabels.callback,
                  t
                ));
            },
            getLabelForIndex: function (t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t]);
            },
            fit: function () {
              var t = this.options;
              t.display && t.pointLabels.display
                ? (function (t) {
                    var e,
                      n,
                      i,
                      r = ut.options._parseFont(t.options.pointLabels),
                      a = {
                        l: 0,
                        r: t.width,
                        t: 0,
                        b: t.height - t.paddingTop,
                      },
                      o = {};
                    (t.ctx.font = r.string), (t._pointLabelSizes = []);
                    var s,
                      l,
                      u,
                      c = Fn(t);
                    for (e = 0; e < c; e++) {
                      (i = t.getPointPosition(e, t.drawingArea + 5)),
                        (s = t.ctx),
                        (l = r.lineHeight),
                        (u = t.pointLabels[e] || ""),
                        (n = ut.isArray(u)
                          ? { w: ut.longestText(s, s.font, u), h: u.length * l }
                          : { w: s.measureText(u).width, h: l }),
                        (t._pointLabelSizes[e] = n);
                      var d = t.getIndexAngle(e),
                        h = ut.toDegrees(d) % 360,
                        f = Rn(h, i.x, n.w, 0, 180),
                        p = Rn(h, i.y, n.h, 90, 270);
                      f.start < a.l && ((a.l = f.start), (o.l = d)),
                        f.end > a.r && ((a.r = f.end), (o.r = d)),
                        p.start < a.t && ((a.t = p.start), (o.t = d)),
                        p.end > a.b && ((a.b = p.end), (o.b = d));
                    }
                    t.setReductions(t.drawingArea, a, o);
                  })(this)
                : this.setCenterPoint(0, 0, 0, 0);
            },
            setReductions: function (t, e, n) {
              var i = this,
                r = e.l / Math.sin(n.l),
                a = Math.max(e.r - i.width, 0) / Math.sin(n.r),
                o = -e.t / Math.cos(n.t),
                s =
                  -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);
              (r = Nn(r)),
                (a = Nn(a)),
                (o = Nn(o)),
                (s = Nn(s)),
                (i.drawingArea = Math.min(
                  Math.floor(t - (r + a) / 2),
                  Math.floor(t - (o + s) / 2)
                )),
                i.setCenterPoint(r, a, o, s);
            },
            setCenterPoint: function (t, e, n, i) {
              var r = this,
                a = r.width - e - r.drawingArea,
                o = t + r.drawingArea,
                s = n + r.drawingArea,
                l = r.height - r.paddingTop - i - r.drawingArea;
              (r.xCenter = Math.floor((o + a) / 2 + r.left)),
                (r.yCenter = Math.floor((s + l) / 2 + r.top + r.paddingTop));
            },
            getIndexAngle: function (t) {
              return (
                t * ((2 * Math.PI) / Fn(this)) +
                ((this.chart.options && this.chart.options.startAngle
                  ? this.chart.options.startAngle
                  : 0) *
                  Math.PI *
                  2) /
                  360
              );
            },
            getDistanceFromCenterForValue: function (t) {
              var e = this;
              if (null === t) return 0;
              var n = e.drawingArea / (e.max - e.min);
              return e.options.ticks.reverse
                ? (e.max - t) * n
                : (t - e.min) * n;
            },
            getPointPosition: function (t, e) {
              var n = this.getIndexAngle(t) - Math.PI / 2;
              return {
                x: Math.cos(n) * e + this.xCenter,
                y: Math.sin(n) * e + this.yCenter,
              };
            },
            getPointPositionForValue: function (t, e) {
              return this.getPointPosition(
                t,
                this.getDistanceFromCenterForValue(e)
              );
            },
            getBasePosition: function () {
              var t = this.min,
                e = this.max;
              return this.getPointPositionForValue(
                0,
                this.beginAtZero
                  ? 0
                  : t < 0 && e < 0
                  ? e
                  : t > 0 && e > 0
                  ? t
                  : 0
              );
            },
            draw: function () {
              var t = this,
                e = t.options,
                n = e.gridLines,
                i = e.ticks;
              if (e.display) {
                var r = t.ctx,
                  a = this.getIndexAngle(0),
                  o = ut.options._parseFont(i);
                (e.angleLines.display || e.pointLabels.display) &&
                  (function (t) {
                    var e = t.ctx,
                      n = t.options,
                      i = n.angleLines,
                      r = n.gridLines,
                      a = n.pointLabels,
                      o = Tn(i.lineWidth, r.lineWidth),
                      s = Tn(i.color, r.color),
                      l = Ln(n);
                    e.save(),
                      (e.lineWidth = o),
                      (e.strokeStyle = s),
                      e.setLineDash &&
                        (e.setLineDash(An([i.borderDash, r.borderDash, []])),
                        (e.lineDashOffset = An([
                          i.borderDashOffset,
                          r.borderDashOffset,
                          0,
                        ])));
                    var u = t.getDistanceFromCenterForValue(
                        n.ticks.reverse ? t.min : t.max
                      ),
                      c = ut.options._parseFont(a);
                    (e.font = c.string), (e.textBaseline = "middle");
                    for (var d = Fn(t) - 1; d >= 0; d--) {
                      if (i.display && o && s) {
                        var h = t.getPointPosition(d, u);
                        e.beginPath(),
                          e.moveTo(t.xCenter, t.yCenter),
                          e.lineTo(h.x, h.y),
                          e.stroke();
                      }
                      if (a.display) {
                        var f = 0 === d ? l / 2 : 0,
                          p = t.getPointPosition(d, u + f + 5),
                          g = On(a.fontColor, d, ot.global.defaultFontColor);
                        e.fillStyle = g;
                        var m = t.getIndexAngle(d),
                          v = ut.toDegrees(m);
                        (e.textAlign = Wn(v)),
                          zn(v, t._pointLabelSizes[d], p),
                          Yn(e, t.pointLabels[d] || "", p, c.lineHeight);
                      }
                    }
                    e.restore();
                  })(t),
                  ut.each(t.ticks, function (e, s) {
                    if (s > 0 || i.reverse) {
                      var l = t.getDistanceFromCenterForValue(
                        t.ticksAsNumbers[s]
                      );
                      if (
                        (n.display &&
                          0 !== s &&
                          (function (t, e, n, i) {
                            var r,
                              a = t.ctx,
                              o = e.circular,
                              s = Fn(t),
                              l = On(e.color, i - 1),
                              u = On(e.lineWidth, i - 1);
                            if ((o || s) && l && u) {
                              if (
                                (a.save(),
                                (a.strokeStyle = l),
                                (a.lineWidth = u),
                                a.setLineDash &&
                                  (a.setLineDash(e.borderDash || []),
                                  (a.lineDashOffset = e.borderDashOffset || 0)),
                                a.beginPath(),
                                o)
                              )
                                a.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
                              else {
                                (r = t.getPointPosition(0, n)),
                                  a.moveTo(r.x, r.y);
                                for (var c = 1; c < s; c++)
                                  (r = t.getPointPosition(c, n)),
                                    a.lineTo(r.x, r.y);
                              }
                              a.closePath(), a.stroke(), a.restore();
                            }
                          })(t, n, l, s),
                        i.display)
                      ) {
                        var u = Tn(i.fontColor, ot.global.defaultFontColor);
                        if (
                          ((r.font = o.string),
                          r.save(),
                          r.translate(t.xCenter, t.yCenter),
                          r.rotate(a),
                          i.showLabelBackdrop)
                        ) {
                          var c = r.measureText(e).width;
                          (r.fillStyle = i.backdropColor),
                            r.fillRect(
                              -c / 2 - i.backdropPaddingX,
                              -l - o.size / 2 - i.backdropPaddingY,
                              c + 2 * i.backdropPaddingX,
                              o.size + 2 * i.backdropPaddingY
                            );
                        }
                        (r.textAlign = "center"),
                          (r.textBaseline = "middle"),
                          (r.fillStyle = u),
                          r.fillText(e, 0, -l),
                          r.restore();
                      }
                    }
                  });
              }
            },
          }),
          jn = In;
        En._defaults = jn;
        var Vn = ut.valueOrDefault,
          Hn = Number.MIN_SAFE_INTEGER || -9007199254740991,
          Bn = Number.MAX_SAFE_INTEGER || 9007199254740991,
          Un = {
            millisecond: {
              common: !0,
              size: 1,
              steps: [1, 2, 5, 10, 20, 50, 100, 250, 500],
            },
            second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 15, 30] },
            minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 15, 30] },
            hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] },
            day: { common: !0, size: 864e5, steps: [1, 2, 5] },
            week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] },
            month: { common: !0, size: 2628e6, steps: [1, 2, 3] },
            quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] },
            year: { common: !0, size: 3154e7 },
          },
          Gn = Object.keys(Un);
        function qn(t, e) {
          return t - e;
        }
        function Zn(t) {
          var e,
            n,
            i,
            r = {},
            a = [];
          for (e = 0, n = t.length; e < n; ++e)
            r[(i = t[e])] || ((r[i] = !0), a.push(i));
          return a;
        }
        function $n(t, e, n, i) {
          var r = (function (t, e, n) {
              for (var i, r, a, o = 0, s = t.length - 1; o >= 0 && o <= s; ) {
                if (((r = t[(i = (o + s) >> 1) - 1] || null), (a = t[i]), !r))
                  return { lo: null, hi: a };
                if (a[e] < n) o = i + 1;
                else {
                  if (!(r[e] > n)) return { lo: r, hi: a };
                  s = i - 1;
                }
              }
              return { lo: a, hi: null };
            })(t, e, n),
            a = r.lo ? (r.hi ? r.lo : t[t.length - 2]) : t[0],
            o = r.lo ? (r.hi ? r.hi : t[t.length - 1]) : t[1],
            s = o[e] - a[e],
            l = s ? (n - a[e]) / s : 0,
            u = (o[i] - a[i]) * l;
          return a[i] + u;
        }
        function Kn(t, e) {
          var n = t._adapter,
            i = t.options.time,
            r = i.parser,
            a = r || i.format,
            o = e;
          return (
            "function" === typeof r && (o = r(o)),
            ut.isFinite(o) ||
              (o = "string" === typeof a ? n.parse(o, a) : n.parse(o)),
            null !== o
              ? +o
              : (r ||
                  "function" !== typeof a ||
                  ((o = a(e)), ut.isFinite(o) || (o = n.parse(o))),
                o)
          );
        }
        function Xn(t, e) {
          if (ut.isNullOrUndef(e)) return null;
          var n = t.options.time,
            i = Kn(t, t.getRightValue(e));
          return null === i
            ? i
            : (n.round && (i = +t._adapter.startOf(i, n.round)), i);
        }
        function Jn(t) {
          for (var e = Gn.indexOf(t) + 1, n = Gn.length; e < n; ++e)
            if (Un[Gn[e]].common) return Gn[e];
        }
        function Qn(t, e, n, i) {
          var r,
            a = t._adapter,
            o = t.options,
            s = o.time,
            l =
              s.unit ||
              (function (t, e, n, i) {
                var r,
                  a,
                  o,
                  s = Gn.length;
                for (r = Gn.indexOf(t); r < s - 1; ++r)
                  if (
                    ((o = (a = Un[Gn[r]]).steps
                      ? a.steps[a.steps.length - 1]
                      : Bn),
                    a.common && Math.ceil((n - e) / (o * a.size)) <= i)
                  )
                    return Gn[r];
                return Gn[s - 1];
              })(s.minUnit, e, n, i),
            u = Jn(l),
            c = Vn(s.stepSize, s.unitStepSize),
            d = "week" === l && s.isoWeekday,
            h = o.ticks.major.enabled,
            f = Un[l],
            p = e,
            g = n,
            m = [];
          for (
            c ||
              (c = (function (t, e, n, i) {
                var r,
                  a,
                  o,
                  s = e - t,
                  l = Un[n],
                  u = l.size,
                  c = l.steps;
                if (!c) return Math.ceil(s / (i * u));
                for (
                  r = 0, a = c.length;
                  r < a && ((o = c[r]), !(Math.ceil(s / (u * o)) <= i));
                  ++r
                );
                return o;
              })(e, n, l, i)),
              d &&
                ((p = +a.startOf(p, "isoWeek", d)),
                (g = +a.startOf(g, "isoWeek", d))),
              p = +a.startOf(p, d ? "day" : l),
              (g = +a.startOf(g, d ? "day" : l)) < n && (g = +a.add(g, 1, l)),
              r = p,
              h &&
                u &&
                !d &&
                !s.round &&
                ((r = +a.startOf(r, u)),
                (r = +a.add(r, ~~((p - r) / (f.size * c)) * c, l)));
            r < g;
            r = +a.add(r, c, l)
          )
            m.push(+r);
          return m.push(+r), m;
        }
        var ti = gn.extend({
            initialize: function () {
              this.mergeTicksOptions(), gn.prototype.initialize.call(this);
            },
            update: function () {
              var t = this,
                e = t.options,
                n = e.time || (e.time = {}),
                i = (t._adapter = new un._date(e.adapters.date));
              return (
                n.format &&
                  console.warn(
                    "options.time.format is deprecated and replaced by options.time.parser."
                  ),
                ut.mergeIf(n.displayFormats, i.formats()),
                gn.prototype.update.apply(t, arguments)
              );
            },
            getRightValue: function (t) {
              return (
                t && void 0 !== t.t && (t = t.t),
                gn.prototype.getRightValue.call(this, t)
              );
            },
            determineDataLimits: function () {
              var t,
                e,
                n,
                i,
                r,
                a,
                o = this,
                s = o.chart,
                l = o._adapter,
                u = o.options.time,
                c = u.unit || "day",
                d = Bn,
                h = Hn,
                f = [],
                p = [],
                g = [],
                m = s.data.labels || [];
              for (t = 0, n = m.length; t < n; ++t) g.push(Xn(o, m[t]));
              for (t = 0, n = (s.data.datasets || []).length; t < n; ++t)
                if (s.isDatasetVisible(t))
                  if (((r = s.data.datasets[t].data), ut.isObject(r[0])))
                    for (p[t] = [], e = 0, i = r.length; e < i; ++e)
                      (a = Xn(o, r[e])), f.push(a), (p[t][e] = a);
                  else {
                    for (e = 0, i = g.length; e < i; ++e) f.push(g[e]);
                    p[t] = g.slice(0);
                  }
                else p[t] = [];
              g.length &&
                ((g = Zn(g).sort(qn)),
                (d = Math.min(d, g[0])),
                (h = Math.max(h, g[g.length - 1]))),
                f.length &&
                  ((f = Zn(f).sort(qn)),
                  (d = Math.min(d, f[0])),
                  (h = Math.max(h, f[f.length - 1]))),
                (d = Xn(o, u.min) || d),
                (h = Xn(o, u.max) || h),
                (d = d === Bn ? +l.startOf(Date.now(), c) : d),
                (h = h === Hn ? +l.endOf(Date.now(), c) + 1 : h),
                (o.min = Math.min(d, h)),
                (o.max = Math.max(d + 1, h)),
                (o._horizontal = o.isHorizontal()),
                (o._table = []),
                (o._timestamps = { data: f, datasets: p, labels: g });
            },
            buildTicks: function () {
              var t,
                e,
                n,
                i = this,
                r = i.min,
                a = i.max,
                o = i.options,
                s = o.time,
                l = [],
                u = [];
              switch (o.ticks.source) {
                case "data":
                  l = i._timestamps.data;
                  break;
                case "labels":
                  l = i._timestamps.labels;
                  break;
                case "auto":
                default:
                  l = Qn(i, r, a, i.getLabelCapacity(r));
              }
              for (
                "ticks" === o.bounds &&
                  l.length &&
                  ((r = l[0]), (a = l[l.length - 1])),
                  r = Xn(i, s.min) || r,
                  a = Xn(i, s.max) || a,
                  t = 0,
                  e = l.length;
                t < e;
                ++t
              )
                (n = l[t]) >= r && n <= a && u.push(n);
              return (
                (i.min = r),
                (i.max = a),
                (i._unit =
                  s.unit ||
                  (function (t, e, n, i, r) {
                    var a, o;
                    for (a = Gn.length - 1; a >= Gn.indexOf(n); a--)
                      if (
                        ((o = Gn[a]),
                        Un[o].common && t._adapter.diff(r, i, o) >= e.length)
                      )
                        return o;
                    return Gn[n ? Gn.indexOf(n) : 0];
                  })(i, u, s.minUnit, i.min, i.max)),
                (i._majorUnit = Jn(i._unit)),
                (i._table = (function (t, e, n, i) {
                  if ("linear" === i || !t.length)
                    return [
                      { time: e, pos: 0 },
                      { time: n, pos: 1 },
                    ];
                  var r,
                    a,
                    o,
                    s,
                    l,
                    u = [],
                    c = [e];
                  for (r = 0, a = t.length; r < a; ++r)
                    (s = t[r]) > e && s < n && c.push(s);
                  for (c.push(n), r = 0, a = c.length; r < a; ++r)
                    (l = c[r + 1]),
                      (o = c[r - 1]),
                      (s = c[r]),
                      (void 0 !== o &&
                        void 0 !== l &&
                        Math.round((l + o) / 2) === s) ||
                        u.push({ time: s, pos: r / (a - 1) });
                  return u;
                })(i._timestamps.data, r, a, o.distribution)),
                (i._offsets = (function (t, e, n, i, r) {
                  var a,
                    o,
                    s = 0,
                    l = 0;
                  return (
                    r.offset &&
                      e.length &&
                      (r.time.min ||
                        ((a = $n(t, "time", e[0], "pos")),
                        (s =
                          1 === e.length
                            ? 1 - a
                            : ($n(t, "time", e[1], "pos") - a) / 2)),
                      r.time.max ||
                        ((o = $n(t, "time", e[e.length - 1], "pos")),
                        (l =
                          1 === e.length
                            ? o
                            : (o - $n(t, "time", e[e.length - 2], "pos")) /
                              2))),
                    { start: s, end: l }
                  );
                })(i._table, u, 0, 0, o)),
                o.ticks.reverse && u.reverse(),
                (function (t, e, n) {
                  var i,
                    r,
                    a,
                    o,
                    s = [];
                  for (i = 0, r = e.length; i < r; ++i)
                    (a = e[i]),
                      (o = !!n && a === +t._adapter.startOf(a, n)),
                      s.push({ value: a, major: o });
                  return s;
                })(i, u, i._majorUnit)
              );
            },
            getLabelForIndex: function (t, e) {
              var n = this,
                i = n._adapter,
                r = n.chart.data,
                a = n.options.time,
                o = r.labels && t < r.labels.length ? r.labels[t] : "",
                s = r.datasets[e].data[t];
              return (
                ut.isObject(s) && (o = n.getRightValue(s)),
                a.tooltipFormat
                  ? i.format(Kn(n, o), a.tooltipFormat)
                  : "string" === typeof o
                  ? o
                  : i.format(Kn(n, o), a.displayFormats.datetime)
              );
            },
            tickFormatFunction: function (t, e, n, i) {
              var r = this._adapter,
                a = this.options,
                o = a.time.displayFormats,
                s = o[this._unit],
                l = this._majorUnit,
                u = o[l],
                c = +r.startOf(t, l),
                d = a.ticks.major,
                h = d.enabled && l && u && t === c,
                f = r.format(t, i || (h ? u : s)),
                p = h ? d : a.ticks.minor,
                g = Vn(p.callback, p.userCallback);
              return g ? g(f, e, n) : f;
            },
            convertTicksToLabels: function (t) {
              var e,
                n,
                i = [];
              for (e = 0, n = t.length; e < n; ++e)
                i.push(this.tickFormatFunction(t[e].value, e, t));
              return i;
            },
            getPixelForOffset: function (t) {
              var e = this,
                n = e.options.ticks.reverse,
                i = e._horizontal ? e.width : e.height,
                r = e._horizontal
                  ? n
                    ? e.right
                    : e.left
                  : n
                  ? e.bottom
                  : e.top,
                a = $n(e._table, "time", t, "pos"),
                o =
                  (i * (e._offsets.start + a)) /
                  (e._offsets.start + 1 + e._offsets.end);
              return n ? r - o : r + o;
            },
            getPixelForValue: function (t, e, n) {
              var i = null;
              if (
                (void 0 !== e &&
                  void 0 !== n &&
                  (i = this._timestamps.datasets[n][e]),
                null === i && (i = Xn(this, t)),
                null !== i)
              )
                return this.getPixelForOffset(i);
            },
            getPixelForTick: function (t) {
              var e = this.getTicks();
              return t >= 0 && t < e.length
                ? this.getPixelForOffset(e[t].value)
                : null;
            },
            getValueForPixel: function (t) {
              var e = this,
                n = e._horizontal ? e.width : e.height,
                i = e._horizontal ? e.left : e.top,
                r =
                  (n ? (t - i) / n : 0) *
                    (e._offsets.start + 1 + e._offsets.start) -
                  e._offsets.end,
                a = $n(e._table, "pos", r, "time");
              return e._adapter._create(a);
            },
            getLabelWidth: function (t) {
              var e = this.options.ticks,
                n = this.ctx.measureText(t).width,
                i = ut.toRadians(e.maxRotation),
                r = Math.cos(i),
                a = Math.sin(i);
              return n * r + Vn(e.fontSize, ot.global.defaultFontSize) * a;
            },
            getLabelCapacity: function (t) {
              var e = this,
                n = e.options.time.displayFormats.millisecond,
                i = e.tickFormatFunction(t, 0, [], n),
                r = e.getLabelWidth(i),
                a = e.isHorizontal() ? e.width : e.height,
                o = Math.floor(a / r);
              return o > 0 ? o : 1;
            },
          }),
          ei = {
            position: "bottom",
            distribution: "linear",
            bounds: "data",
            adapters: {},
            time: {
              parser: !1,
              format: !1,
              unit: !1,
              round: !1,
              displayFormat: !1,
              isoWeekday: !1,
              minUnit: "millisecond",
              displayFormats: {},
            },
            ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } },
          };
        ti._defaults = ei;
        var ni = {
            category: mn,
            linear: wn,
            logarithmic: Cn,
            radialLinear: En,
            time: ti,
          },
          ii = {
            datetime: "MMM D, YYYY, h:mm:ss a",
            millisecond: "h:mm:ss.SSS a",
            second: "h:mm:ss a",
            minute: "h:mm a",
            hour: "hA",
            day: "MMM D",
            week: "ll",
            month: "MMM YYYY",
            quarter: "[Q]Q - YYYY",
            year: "YYYY",
          };
        un._date.override(
          "function" === typeof t
            ? {
                _id: "moment",
                formats: function () {
                  return ii;
                },
                parse: function (e, n) {
                  return (
                    "string" === typeof e && "string" === typeof n
                      ? (e = t(e, n))
                      : e instanceof t || (e = t(e)),
                    e.isValid() ? e.valueOf() : null
                  );
                },
                format: function (e, n) {
                  return t(e).format(n);
                },
                add: function (e, n, i) {
                  return t(e).add(n, i).valueOf();
                },
                diff: function (e, n, i) {
                  return t.duration(t(e).diff(t(n))).as(i);
                },
                startOf: function (e, n, i) {
                  return (
                    (e = t(e)),
                    "isoWeek" === n
                      ? e.isoWeekday(i).valueOf()
                      : e.startOf(n).valueOf()
                  );
                },
                endOf: function (e, n) {
                  return t(e).endOf(n).valueOf();
                },
                _create: function (e) {
                  return t(e);
                },
              }
            : {}
        ),
          ot._set("global", { plugins: { filler: { propagate: !0 } } });
        var ri = {
          dataset: function (t) {
            var e = t.fill,
              n = t.chart,
              i = n.getDatasetMeta(e),
              r = (i && n.isDatasetVisible(e) && i.dataset._children) || [],
              a = r.length || 0;
            return a
              ? function (t, e) {
                  return (e < a && r[e]._view) || null;
                }
              : null;
          },
          boundary: function (t) {
            var e = t.boundary,
              n = e ? e.x : null,
              i = e ? e.y : null;
            return function (t) {
              return { x: null === n ? t.x : n, y: null === i ? t.y : i };
            };
          },
        };
        function ai(t, e, n) {
          var i,
            r = t._model || {},
            a = r.fill;
          if (
            (void 0 === a && (a = !!r.backgroundColor), !1 === a || null === a)
          )
            return !1;
          if (!0 === a) return "origin";
          if (((i = parseFloat(a, 10)), isFinite(i) && Math.floor(i) === i))
            return (
              ("-" !== a[0] && "+" !== a[0]) || (i = e + i),
              !(i === e || i < 0 || i >= n) && i
            );
          switch (a) {
            case "bottom":
              return "start";
            case "top":
              return "end";
            case "zero":
              return "origin";
            case "origin":
            case "start":
            case "end":
              return a;
            default:
              return !1;
          }
        }
        function oi(t) {
          var e,
            n = t.el._model || {},
            i = t.el._scale || {},
            r = t.fill,
            a = null;
          if (isFinite(r)) return null;
          if (
            ("start" === r
              ? (a = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom)
              : "end" === r
              ? (a = void 0 === n.scaleTop ? i.top : n.scaleTop)
              : void 0 !== n.scaleZero
              ? (a = n.scaleZero)
              : i.getBasePosition
              ? (a = i.getBasePosition())
              : i.getBasePixel && (a = i.getBasePixel()),
            void 0 !== a && null !== a)
          ) {
            if (void 0 !== a.x && void 0 !== a.y) return a;
            if (ut.isFinite(a))
              return { x: (e = i.isHorizontal()) ? a : null, y: e ? null : a };
          }
          return null;
        }
        function si(t, e, n) {
          var i,
            r = t[e].fill,
            a = [e];
          if (!n) return r;
          for (; !1 !== r && -1 === a.indexOf(r); ) {
            if (!isFinite(r)) return r;
            if (!(i = t[r])) return !1;
            if (i.visible) return r;
            a.push(r), (r = i.fill);
          }
          return !1;
        }
        function li(t) {
          var e = t.fill,
            n = "dataset";
          return !1 === e ? null : (isFinite(e) || (n = "boundary"), ri[n](t));
        }
        function ui(t) {
          return t && !t.skip;
        }
        function ci(t, e, n, i, r) {
          var a;
          if (i && r) {
            for (t.moveTo(e[0].x, e[0].y), a = 1; a < i; ++a)
              ut.canvas.lineTo(t, e[a - 1], e[a]);
            for (t.lineTo(n[r - 1].x, n[r - 1].y), a = r - 1; a > 0; --a)
              ut.canvas.lineTo(t, n[a], n[a - 1], !0);
          }
        }
        var di = {
            id: "filler",
            afterDatasetsUpdate: function (t, e) {
              var n,
                i,
                r,
                a,
                o = (t.data.datasets || []).length,
                s = e.propagate,
                l = [];
              for (i = 0; i < o; ++i)
                (a = null),
                  (r = (n = t.getDatasetMeta(i)).dataset) &&
                    r._model &&
                    r instanceof zt.Line &&
                    (a = {
                      visible: t.isDatasetVisible(i),
                      fill: ai(r, i, o),
                      chart: t,
                      el: r,
                    }),
                  (n.$filler = a),
                  l.push(a);
              for (i = 0; i < o; ++i)
                (a = l[i]) &&
                  ((a.fill = si(l, i, s)),
                  (a.boundary = oi(a)),
                  (a.mapper = li(a)));
            },
            beforeDatasetDraw: function (t, e) {
              var n = e.meta.$filler;
              if (n) {
                var i = t.ctx,
                  r = n.el,
                  a = r._view,
                  o = r._children || [],
                  s = n.mapper,
                  l = a.backgroundColor || ot.global.defaultColor;
                s &&
                  l &&
                  o.length &&
                  (ut.canvas.clipArea(i, t.chartArea),
                  (function (t, e, n, i, r, a) {
                    var o,
                      s,
                      l,
                      u,
                      c,
                      d,
                      h,
                      f = e.length,
                      p = i.spanGaps,
                      g = [],
                      m = [],
                      v = 0,
                      y = 0;
                    for (t.beginPath(), o = 0, s = f + !!a; o < s; ++o)
                      (c = n((u = e[(l = o % f)]._view), l, i)),
                        (d = ui(u)),
                        (h = ui(c)),
                        d && h
                          ? ((v = g.push(u)), (y = m.push(c)))
                          : v &&
                            y &&
                            (p
                              ? (d && g.push(u), h && m.push(c))
                              : (ci(t, g, m, v, y),
                                (v = y = 0),
                                (g = []),
                                (m = [])));
                    ci(t, g, m, v, y),
                      t.closePath(),
                      (t.fillStyle = r),
                      t.fill();
                  })(i, o, s, a, l, r._loop),
                  ut.canvas.unclipArea(i));
              }
            },
          },
          hi = ut.noop,
          fi = ut.valueOrDefault;
        function pi(t, e) {
          return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
        }
        ot._set("global", {
          legend: {
            display: !0,
            position: "top",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function (t, e) {
              var n = e.datasetIndex,
                i = this.chart,
                r = i.getDatasetMeta(n);
              (r.hidden =
                null === r.hidden ? !i.data.datasets[n].hidden : null),
                i.update();
            },
            onHover: null,
            onLeave: null,
            labels: {
              boxWidth: 40,
              padding: 10,
              generateLabels: function (t) {
                var e = t.data;
                return ut.isArray(e.datasets)
                  ? e.datasets.map(function (e, n) {
                      return {
                        text: e.label,
                        fillStyle: ut.isArray(e.backgroundColor)
                          ? e.backgroundColor[0]
                          : e.backgroundColor,
                        hidden: !t.isDatasetVisible(n),
                        lineCap: e.borderCapStyle,
                        lineDash: e.borderDash,
                        lineDashOffset: e.borderDashOffset,
                        lineJoin: e.borderJoinStyle,
                        lineWidth: e.borderWidth,
                        strokeStyle: e.borderColor,
                        pointStyle: e.pointStyle,
                        datasetIndex: n,
                      };
                    }, this)
                  : [];
              },
            },
          },
          legendCallback: function (t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            for (var n = 0; n < t.data.datasets.length; n++)
              e.push(
                '<li><span style="background-color:' +
                  t.data.datasets[n].backgroundColor +
                  '"></span>'
              ),
                t.data.datasets[n].label && e.push(t.data.datasets[n].label),
                e.push("</li>");
            return e.push("</ul>"), e.join("");
          },
        });
        var gi = pt.extend({
          initialize: function (t) {
            ut.extend(this, t),
              (this.legendHitBoxes = []),
              (this._hoveredItem = null),
              (this.doughnutMode = !1);
          },
          beforeUpdate: hi,
          update: function (t, e, n) {
            var i = this;
            return (
              i.beforeUpdate(),
              (i.maxWidth = t),
              (i.maxHeight = e),
              (i.margins = n),
              i.beforeSetDimensions(),
              i.setDimensions(),
              i.afterSetDimensions(),
              i.beforeBuildLabels(),
              i.buildLabels(),
              i.afterBuildLabels(),
              i.beforeFit(),
              i.fit(),
              i.afterFit(),
              i.afterUpdate(),
              i.minSize
            );
          },
          afterUpdate: hi,
          beforeSetDimensions: hi,
          setDimensions: function () {
            var t = this;
            t.isHorizontal()
              ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
              : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
              (t.paddingLeft = 0),
              (t.paddingTop = 0),
              (t.paddingRight = 0),
              (t.paddingBottom = 0),
              (t.minSize = { width: 0, height: 0 });
          },
          afterSetDimensions: hi,
          beforeBuildLabels: hi,
          buildLabels: function () {
            var t = this,
              e = t.options.labels || {},
              n = ut.callback(e.generateLabels, [t.chart], t) || [];
            e.filter &&
              (n = n.filter(function (n) {
                return e.filter(n, t.chart.data);
              })),
              t.options.reverse && n.reverse(),
              (t.legendItems = n);
          },
          afterBuildLabels: hi,
          beforeFit: hi,
          fit: function () {
            var t = this,
              e = t.options,
              n = e.labels,
              i = e.display,
              r = t.ctx,
              a = ut.options._parseFont(n),
              o = a.size,
              s = (t.legendHitBoxes = []),
              l = t.minSize,
              u = t.isHorizontal();
            if (
              (u
                ? ((l.width = t.maxWidth), (l.height = i ? 10 : 0))
                : ((l.width = i ? 10 : 0), (l.height = t.maxHeight)),
              i)
            )
              if (((r.font = a.string), u)) {
                var c = (t.lineWidths = [0]),
                  d = 0;
                (r.textAlign = "left"),
                  (r.textBaseline = "top"),
                  ut.each(t.legendItems, function (t, e) {
                    var i = pi(n, o) + o / 2 + r.measureText(t.text).width;
                    (0 === e || c[c.length - 1] + i + n.padding > l.width) &&
                      ((d += o + n.padding),
                      (c[c.length - (e > 0 ? 0 : 1)] = n.padding)),
                      (s[e] = { left: 0, top: 0, width: i, height: o }),
                      (c[c.length - 1] += i + n.padding);
                  }),
                  (l.height += d);
              } else {
                var h = n.padding,
                  f = (t.columnWidths = []),
                  p = n.padding,
                  g = 0,
                  m = 0,
                  v = o + h;
                ut.each(t.legendItems, function (t, e) {
                  var i = pi(n, o) + o / 2 + r.measureText(t.text).width;
                  e > 0 &&
                    m + v > l.height - h &&
                    ((p += g + n.padding), f.push(g), (g = 0), (m = 0)),
                    (g = Math.max(g, i)),
                    (m += v),
                    (s[e] = { left: 0, top: 0, width: i, height: o });
                }),
                  (p += g),
                  f.push(g),
                  (l.width += p);
              }
            (t.width = l.width), (t.height = l.height);
          },
          afterFit: hi,
          isHorizontal: function () {
            return (
              "top" === this.options.position ||
              "bottom" === this.options.position
            );
          },
          draw: function () {
            var t = this,
              e = t.options,
              n = e.labels,
              i = ot.global,
              r = i.defaultColor,
              a = i.elements.line,
              o = t.width,
              s = t.lineWidths;
            if (e.display) {
              var l,
                u = t.ctx,
                c = fi(n.fontColor, i.defaultFontColor),
                d = ut.options._parseFont(n),
                h = d.size;
              (u.textAlign = "left"),
                (u.textBaseline = "middle"),
                (u.lineWidth = 0.5),
                (u.strokeStyle = c),
                (u.fillStyle = c),
                (u.font = d.string);
              var f = pi(n, h),
                p = t.legendHitBoxes,
                g = t.isHorizontal();
              l = g
                ? {
                    x: t.left + (o - s[0]) / 2 + n.padding,
                    y: t.top + n.padding,
                    line: 0,
                  }
                : { x: t.left + n.padding, y: t.top + n.padding, line: 0 };
              var m = h + n.padding;
              ut.each(t.legendItems, function (i, c) {
                var d = u.measureText(i.text).width,
                  v = f + h / 2 + d,
                  y = l.x,
                  b = l.y;
                g
                  ? c > 0 &&
                    y + v + n.padding > t.left + t.minSize.width &&
                    ((b = l.y += m),
                    l.line++,
                    (y = l.x = t.left + (o - s[l.line]) / 2 + n.padding))
                  : c > 0 &&
                    b + m > t.top + t.minSize.height &&
                    ((y = l.x = y + t.columnWidths[l.line] + n.padding),
                    (b = l.y = t.top + n.padding),
                    l.line++),
                  (function (t, n, i) {
                    if (!(isNaN(f) || f <= 0)) {
                      u.save();
                      var o = fi(i.lineWidth, a.borderWidth);
                      if (
                        ((u.fillStyle = fi(i.fillStyle, r)),
                        (u.lineCap = fi(i.lineCap, a.borderCapStyle)),
                        (u.lineDashOffset = fi(
                          i.lineDashOffset,
                          a.borderDashOffset
                        )),
                        (u.lineJoin = fi(i.lineJoin, a.borderJoinStyle)),
                        (u.lineWidth = o),
                        (u.strokeStyle = fi(i.strokeStyle, r)),
                        u.setLineDash &&
                          u.setLineDash(fi(i.lineDash, a.borderDash)),
                        e.labels && e.labels.usePointStyle)
                      ) {
                        var s = (f * Math.SQRT2) / 2,
                          l = t + f / 2,
                          c = n + h / 2;
                        ut.canvas.drawPoint(u, i.pointStyle, s, l, c);
                      } else
                        0 !== o && u.strokeRect(t, n, f, h),
                          u.fillRect(t, n, f, h);
                      u.restore();
                    }
                  })(y, b, i),
                  (p[c].left = y),
                  (p[c].top = b),
                  (function (t, e, n, i) {
                    var r = h / 2,
                      a = f + r + t,
                      o = e + r;
                    u.fillText(n.text, a, o),
                      n.hidden &&
                        (u.beginPath(),
                        (u.lineWidth = 2),
                        u.moveTo(a, o),
                        u.lineTo(a + i, o),
                        u.stroke());
                  })(y, b, i, d),
                  g ? (l.x += v + n.padding) : (l.y += m);
              });
            }
          },
          _getLegendItemAt: function (t, e) {
            var n,
              i,
              r,
              a = this;
            if (t >= a.left && t <= a.right && e >= a.top && e <= a.bottom)
              for (r = a.legendHitBoxes, n = 0; n < r.length; ++n)
                if (
                  t >= (i = r[n]).left &&
                  t <= i.left + i.width &&
                  e >= i.top &&
                  e <= i.top + i.height
                )
                  return a.legendItems[n];
            return null;
          },
          handleEvent: function (t) {
            var e,
              n = this,
              i = n.options,
              r = "mouseup" === t.type ? "click" : t.type;
            if ("mousemove" === r) {
              if (!i.onHover && !i.onLeave) return;
            } else {
              if ("click" !== r) return;
              if (!i.onClick) return;
            }
            (e = n._getLegendItemAt(t.x, t.y)),
              "click" === r
                ? e && i.onClick && i.onClick.call(n, t.native, e)
                : (i.onLeave &&
                    e !== n._hoveredItem &&
                    (n._hoveredItem &&
                      i.onLeave.call(n, t.native, n._hoveredItem),
                    (n._hoveredItem = e)),
                  i.onHover && e && i.onHover.call(n, t.native, e));
          },
        });
        function mi(t, e) {
          var n = new gi({ ctx: t.ctx, options: e, chart: t });
          _e.configure(t, n, e), _e.addBox(t, n), (t.legend = n);
        }
        var vi = {
            id: "legend",
            _element: gi,
            beforeInit: function (t) {
              var e = t.options.legend;
              e && mi(t, e);
            },
            beforeUpdate: function (t) {
              var e = t.options.legend,
                n = t.legend;
              e
                ? (ut.mergeIf(e, ot.global.legend),
                  n ? (_e.configure(t, n, e), (n.options = e)) : mi(t, e))
                : n && (_e.removeBox(t, n), delete t.legend);
            },
            afterEvent: function (t, e) {
              var n = t.legend;
              n && n.handleEvent(e);
            },
          },
          yi = ut.noop;
        ot._set("global", {
          title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3,
          },
        });
        var bi = pt.extend({
          initialize: function (t) {
            ut.extend(this, t), (this.legendHitBoxes = []);
          },
          beforeUpdate: yi,
          update: function (t, e, n) {
            var i = this;
            return (
              i.beforeUpdate(),
              (i.maxWidth = t),
              (i.maxHeight = e),
              (i.margins = n),
              i.beforeSetDimensions(),
              i.setDimensions(),
              i.afterSetDimensions(),
              i.beforeBuildLabels(),
              i.buildLabels(),
              i.afterBuildLabels(),
              i.beforeFit(),
              i.fit(),
              i.afterFit(),
              i.afterUpdate(),
              i.minSize
            );
          },
          afterUpdate: yi,
          beforeSetDimensions: yi,
          setDimensions: function () {
            var t = this;
            t.isHorizontal()
              ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
              : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
              (t.paddingLeft = 0),
              (t.paddingTop = 0),
              (t.paddingRight = 0),
              (t.paddingBottom = 0),
              (t.minSize = { width: 0, height: 0 });
          },
          afterSetDimensions: yi,
          beforeBuildLabels: yi,
          buildLabels: yi,
          afterBuildLabels: yi,
          beforeFit: yi,
          fit: function () {
            var t = this,
              e = t.options,
              n = e.display,
              i = t.minSize,
              r = ut.isArray(e.text) ? e.text.length : 1,
              a = ut.options._parseFont(e),
              o = n ? r * a.lineHeight + 2 * e.padding : 0;
            t.isHorizontal()
              ? ((i.width = t.maxWidth), (i.height = o))
              : ((i.width = o), (i.height = t.maxHeight)),
              (t.width = i.width),
              (t.height = i.height);
          },
          afterFit: yi,
          isHorizontal: function () {
            var t = this.options.position;
            return "top" === t || "bottom" === t;
          },
          draw: function () {
            var t = this,
              e = t.ctx,
              n = t.options;
            if (n.display) {
              var i,
                r,
                a,
                o = ut.options._parseFont(n),
                s = o.lineHeight,
                l = s / 2 + n.padding,
                u = 0,
                c = t.top,
                d = t.left,
                h = t.bottom,
                f = t.right;
              (e.fillStyle = ut.valueOrDefault(
                n.fontColor,
                ot.global.defaultFontColor
              )),
                (e.font = o.string),
                t.isHorizontal()
                  ? ((r = d + (f - d) / 2), (a = c + l), (i = f - d))
                  : ((r = "left" === n.position ? d + l : f - l),
                    (a = c + (h - c) / 2),
                    (i = h - c),
                    (u = Math.PI * ("left" === n.position ? -0.5 : 0.5))),
                e.save(),
                e.translate(r, a),
                e.rotate(u),
                (e.textAlign = "center"),
                (e.textBaseline = "middle");
              var p = n.text;
              if (ut.isArray(p))
                for (var g = 0, m = 0; m < p.length; ++m)
                  e.fillText(p[m], 0, g, i), (g += s);
              else e.fillText(p, 0, 0, i);
              e.restore();
            }
          },
        });
        function xi(t, e) {
          var n = new bi({ ctx: t.ctx, options: e, chart: t });
          _e.configure(t, n, e), _e.addBox(t, n), (t.titleBlock = n);
        }
        var _i = {},
          wi = di,
          ki = vi,
          Mi = {
            id: "title",
            _element: bi,
            beforeInit: function (t) {
              var e = t.options.title;
              e && xi(t, e);
            },
            beforeUpdate: function (t) {
              var e = t.options.title,
                n = t.titleBlock;
              e
                ? (ut.mergeIf(e, ot.global.title),
                  n ? (_e.configure(t, n, e), (n.options = e)) : xi(t, e))
                : n && (_e.removeBox(t, n), delete t.titleBlock);
            },
          };
        for (var Si in ((_i.filler = wi),
        (_i.legend = ki),
        (_i.title = Mi),
        (on.helpers = ut),
        (function () {
          function t(t, e, n) {
            var i;
            return (
              "string" === typeof t
                ? ((i = parseInt(t, 10)),
                  -1 !== t.indexOf("%") && (i = (i / 100) * e.parentNode[n]))
                : (i = t),
              i
            );
          }
          function e(t) {
            return void 0 !== t && null !== t && "none" !== t;
          }
          function n(n, i, r) {
            var a = document.defaultView,
              o = ut._getParentNode(n),
              s = a.getComputedStyle(n)[i],
              l = a.getComputedStyle(o)[i],
              u = e(s),
              c = e(l),
              d = Number.POSITIVE_INFINITY;
            return u || c
              ? Math.min(u ? t(s, n, r) : d, c ? t(l, o, r) : d)
              : "none";
          }
          (ut.where = function (t, e) {
            if (ut.isArray(t) && Array.prototype.filter) return t.filter(e);
            var n = [];
            return (
              ut.each(t, function (t) {
                e(t) && n.push(t);
              }),
              n
            );
          }),
            (ut.findIndex = Array.prototype.findIndex
              ? function (t, e, n) {
                  return t.findIndex(e, n);
                }
              : function (t, e, n) {
                  n = void 0 === n ? t : n;
                  for (var i = 0, r = t.length; i < r; ++i)
                    if (e.call(n, t[i], i, t)) return i;
                  return -1;
                }),
            (ut.findNextWhere = function (t, e, n) {
              ut.isNullOrUndef(n) && (n = -1);
              for (var i = n + 1; i < t.length; i++) {
                var r = t[i];
                if (e(r)) return r;
              }
            }),
            (ut.findPreviousWhere = function (t, e, n) {
              ut.isNullOrUndef(n) && (n = t.length);
              for (var i = n - 1; i >= 0; i--) {
                var r = t[i];
                if (e(r)) return r;
              }
            }),
            (ut.isNumber = function (t) {
              return !isNaN(parseFloat(t)) && isFinite(t);
            }),
            (ut.almostEquals = function (t, e, n) {
              return Math.abs(t - e) < n;
            }),
            (ut.almostWhole = function (t, e) {
              var n = Math.round(t);
              return n - e < t && n + e > t;
            }),
            (ut.max = function (t) {
              return t.reduce(function (t, e) {
                return isNaN(e) ? t : Math.max(t, e);
              }, Number.NEGATIVE_INFINITY);
            }),
            (ut.min = function (t) {
              return t.reduce(function (t, e) {
                return isNaN(e) ? t : Math.min(t, e);
              }, Number.POSITIVE_INFINITY);
            }),
            (ut.sign = Math.sign
              ? function (t) {
                  return Math.sign(t);
                }
              : function (t) {
                  return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
                }),
            (ut.log10 = Math.log10
              ? function (t) {
                  return Math.log10(t);
                }
              : function (t) {
                  var e = Math.log(t) * Math.LOG10E,
                    n = Math.round(e);
                  return t === Math.pow(10, n) ? n : e;
                }),
            (ut.toRadians = function (t) {
              return t * (Math.PI / 180);
            }),
            (ut.toDegrees = function (t) {
              return t * (180 / Math.PI);
            }),
            (ut._decimalPlaces = function (t) {
              if (ut.isFinite(t)) {
                for (var e = 1, n = 0; Math.round(t * e) / e !== t; )
                  (e *= 10), n++;
                return n;
              }
            }),
            (ut.getAngleFromPoint = function (t, e) {
              var n = e.x - t.x,
                i = e.y - t.y,
                r = Math.sqrt(n * n + i * i),
                a = Math.atan2(i, n);
              return (
                a < -0.5 * Math.PI && (a += 2 * Math.PI),
                { angle: a, distance: r }
              );
            }),
            (ut.distanceBetweenPoints = function (t, e) {
              return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
            }),
            (ut.aliasPixel = function (t) {
              return t % 2 === 0 ? 0 : 0.5;
            }),
            (ut._alignPixel = function (t, e, n) {
              var i = t.currentDevicePixelRatio,
                r = n / 2;
              return Math.round((e - r) * i) / i + r;
            }),
            (ut.splineCurve = function (t, e, n, i) {
              var r = t.skip ? e : t,
                a = e,
                o = n.skip ? e : n,
                s = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2)),
                l = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                u = s / (s + l),
                c = l / (s + l),
                d = i * (u = isNaN(u) ? 0 : u),
                h = i * (c = isNaN(c) ? 0 : c);
              return {
                previous: {
                  x: a.x - d * (o.x - r.x),
                  y: a.y - d * (o.y - r.y),
                },
                next: { x: a.x + h * (o.x - r.x), y: a.y + h * (o.y - r.y) },
              };
            }),
            (ut.EPSILON = Number.EPSILON || 1e-14),
            (ut.splineCurveMonotone = function (t) {
              var e,
                n,
                i,
                r,
                a,
                o,
                s,
                l,
                u,
                c = (t || []).map(function (t) {
                  return { model: t._model, deltaK: 0, mK: 0 };
                }),
                d = c.length;
              for (e = 0; e < d; ++e)
                if (!(i = c[e]).model.skip) {
                  if (
                    ((n = e > 0 ? c[e - 1] : null),
                    (r = e < d - 1 ? c[e + 1] : null) && !r.model.skip)
                  ) {
                    var h = r.model.x - i.model.x;
                    i.deltaK = 0 !== h ? (r.model.y - i.model.y) / h : 0;
                  }
                  !n || n.model.skip
                    ? (i.mK = i.deltaK)
                    : !r || r.model.skip
                    ? (i.mK = n.deltaK)
                    : this.sign(n.deltaK) !== this.sign(i.deltaK)
                    ? (i.mK = 0)
                    : (i.mK = (n.deltaK + i.deltaK) / 2);
                }
              for (e = 0; e < d - 1; ++e)
                (i = c[e]),
                  (r = c[e + 1]),
                  i.model.skip ||
                    r.model.skip ||
                    (ut.almostEquals(i.deltaK, 0, this.EPSILON)
                      ? (i.mK = r.mK = 0)
                      : ((a = i.mK / i.deltaK),
                        (o = r.mK / i.deltaK),
                        (l = Math.pow(a, 2) + Math.pow(o, 2)) <= 9 ||
                          ((s = 3 / Math.sqrt(l)),
                          (i.mK = a * s * i.deltaK),
                          (r.mK = o * s * i.deltaK))));
              for (e = 0; e < d; ++e)
                (i = c[e]).model.skip ||
                  ((n = e > 0 ? c[e - 1] : null),
                  (r = e < d - 1 ? c[e + 1] : null),
                  n &&
                    !n.model.skip &&
                    ((u = (i.model.x - n.model.x) / 3),
                    (i.model.controlPointPreviousX = i.model.x - u),
                    (i.model.controlPointPreviousY = i.model.y - u * i.mK)),
                  r &&
                    !r.model.skip &&
                    ((u = (r.model.x - i.model.x) / 3),
                    (i.model.controlPointNextX = i.model.x + u),
                    (i.model.controlPointNextY = i.model.y + u * i.mK)));
            }),
            (ut.nextItem = function (t, e, n) {
              return n
                ? e >= t.length - 1
                  ? t[0]
                  : t[e + 1]
                : e >= t.length - 1
                ? t[t.length - 1]
                : t[e + 1];
            }),
            (ut.previousItem = function (t, e, n) {
              return n
                ? e <= 0
                  ? t[t.length - 1]
                  : t[e - 1]
                : e <= 0
                ? t[0]
                : t[e - 1];
            }),
            (ut.niceNum = function (t, e) {
              var n = Math.floor(ut.log10(t)),
                i = t / Math.pow(10, n);
              return (
                (e
                  ? i < 1.5
                    ? 1
                    : i < 3
                    ? 2
                    : i < 7
                    ? 5
                    : 10
                  : i <= 1
                  ? 1
                  : i <= 2
                  ? 2
                  : i <= 5
                  ? 5
                  : 10) * Math.pow(10, n)
              );
            }),
            (ut.requestAnimFrame =
              "undefined" === typeof window
                ? function (t) {
                    t();
                  }
                : window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function (t) {
                    return window.setTimeout(t, 1e3 / 60);
                  }),
            (ut.getRelativePosition = function (t, e) {
              var n,
                i,
                r = t.originalEvent || t,
                a = t.target || t.srcElement,
                o = a.getBoundingClientRect(),
                s = r.touches;
              s && s.length > 0
                ? ((n = s[0].clientX), (i = s[0].clientY))
                : ((n = r.clientX), (i = r.clientY));
              var l = parseFloat(ut.getStyle(a, "padding-left")),
                u = parseFloat(ut.getStyle(a, "padding-top")),
                c = parseFloat(ut.getStyle(a, "padding-right")),
                d = parseFloat(ut.getStyle(a, "padding-bottom")),
                h = o.right - o.left - l - c,
                f = o.bottom - o.top - u - d;
              return {
                x: (n = Math.round(
                  (((n - o.left - l) / h) * a.width) / e.currentDevicePixelRatio
                )),
                y: (i = Math.round(
                  (((i - o.top - u) / f) * a.height) / e.currentDevicePixelRatio
                )),
              };
            }),
            (ut.getConstraintWidth = function (t) {
              return n(t, "max-width", "clientWidth");
            }),
            (ut.getConstraintHeight = function (t) {
              return n(t, "max-height", "clientHeight");
            }),
            (ut._calculatePadding = function (t, e, n) {
              return (e = ut.getStyle(t, e)).indexOf("%") > -1
                ? (n * parseInt(e, 10)) / 100
                : parseInt(e, 10);
            }),
            (ut._getParentNode = function (t) {
              var e = t.parentNode;
              return (
                e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
              );
            }),
            (ut.getMaximumWidth = function (t) {
              var e = ut._getParentNode(t);
              if (!e) return t.clientWidth;
              var n = e.clientWidth,
                i =
                  n -
                  ut._calculatePadding(e, "padding-left", n) -
                  ut._calculatePadding(e, "padding-right", n),
                r = ut.getConstraintWidth(t);
              return isNaN(r) ? i : Math.min(i, r);
            }),
            (ut.getMaximumHeight = function (t) {
              var e = ut._getParentNode(t);
              if (!e) return t.clientHeight;
              var n = e.clientHeight,
                i =
                  n -
                  ut._calculatePadding(e, "padding-top", n) -
                  ut._calculatePadding(e, "padding-bottom", n),
                r = ut.getConstraintHeight(t);
              return isNaN(r) ? i : Math.min(i, r);
            }),
            (ut.getStyle = function (t, e) {
              return t.currentStyle
                ? t.currentStyle[e]
                : document.defaultView
                    .getComputedStyle(t, null)
                    .getPropertyValue(e);
            }),
            (ut.retinaScale = function (t, e) {
              var n = (t.currentDevicePixelRatio =
                e ||
                ("undefined" !== typeof window && window.devicePixelRatio) ||
                1);
              if (1 !== n) {
                var i = t.canvas,
                  r = t.height,
                  a = t.width;
                (i.height = r * n),
                  (i.width = a * n),
                  t.ctx.scale(n, n),
                  i.style.height ||
                    i.style.width ||
                    ((i.style.height = r + "px"), (i.style.width = a + "px"));
              }
            }),
            (ut.fontString = function (t, e, n) {
              return e + " " + t + "px " + n;
            }),
            (ut.longestText = function (t, e, n, i) {
              var r = ((i = i || {}).data = i.data || {}),
                a = (i.garbageCollect = i.garbageCollect || []);
              i.font !== e &&
                ((r = i.data = {}), (a = i.garbageCollect = []), (i.font = e)),
                (t.font = e);
              var o = 0;
              ut.each(n, function (e) {
                void 0 !== e && null !== e && !0 !== ut.isArray(e)
                  ? (o = ut.measureText(t, r, a, o, e))
                  : ut.isArray(e) &&
                    ut.each(e, function (e) {
                      void 0 === e ||
                        null === e ||
                        ut.isArray(e) ||
                        (o = ut.measureText(t, r, a, o, e));
                    });
              });
              var s = a.length / 2;
              if (s > n.length) {
                for (var l = 0; l < s; l++) delete r[a[l]];
                a.splice(0, s);
              }
              return o;
            }),
            (ut.measureText = function (t, e, n, i, r) {
              var a = e[r];
              return (
                a || ((a = e[r] = t.measureText(r).width), n.push(r)),
                a > i && (i = a),
                i
              );
            }),
            (ut.numberOfLabelLines = function (t) {
              var e = 1;
              return (
                ut.each(t, function (t) {
                  ut.isArray(t) && t.length > e && (e = t.length);
                }),
                e
              );
            }),
            (ut.color = G
              ? function (t) {
                  return (
                    t instanceof CanvasGradient && (t = ot.global.defaultColor),
                    G(t)
                  );
                }
              : function (t) {
                  return console.error("Color.js not found!"), t;
                }),
            (ut.getHoverColor = function (t) {
              return t instanceof CanvasPattern || t instanceof CanvasGradient
                ? t
                : ut.color(t).saturate(0.5).darken(0.1).rgbString();
            });
        })(),
        (on._adapters = un),
        (on.Animation = mt),
        (on.animationService = vt),
        (on.controllers = ue),
        (on.DatasetController = wt),
        (on.defaults = ot),
        (on.Element = pt),
        (on.elements = zt),
        (on.Interaction = me),
        (on.layouts = _e),
        (on.platform = Ne),
        (on.plugins = Ee),
        (on.Scale = gn),
        (on.scaleService = je),
        (on.Ticks = cn),
        (on.Tooltip = Je),
        on.helpers.each(ni, function (t, e) {
          on.scaleService.registerScaleType(e, t, t._defaults);
        }),
        _i))
          _i.hasOwnProperty(Si) && on.plugins.register(_i[Si]);
        on.platform.initialize();
        var Di = on;
        return (
          "undefined" !== typeof window && (window.Chart = on),
          (on.Chart = on),
          (on.Legend = _i.legend._element),
          (on.Title = _i.title._element),
          (on.pluginService = on.plugins),
          (on.PluginBase = on.Element.extend({})),
          (on.canvasHelpers = on.helpers.canvas),
          (on.layoutService = on.layouts),
          (on.LinearScaleBase = xn),
          on.helpers.each(
            [
              "Bar",
              "Bubble",
              "Doughnut",
              "Line",
              "PolarArea",
              "Radar",
              "Scatter",
            ],
            function (t) {
              on[t] = function (e, n) {
                return new on(
                  e,
                  on.helpers.merge(n || {}, {
                    type: t.charAt(0).toLowerCase() + t.slice(1),
                  })
                );
              };
            }
          ),
          Di
        );
      })(
        (function () {
          try {
            return n(194);
          } catch (t) {}
        })()
      );
    },
    function (t, e, n) {
      var i = n(136),
        r = n(202),
        a = n(203),
        o = n(204),
        s = n(205),
        l = n(206);
      function u(t) {
        var e = (this.__data__ = new i(t));
        this.size = e.size;
      }
      (u.prototype.clear = r),
        (u.prototype.delete = a),
        (u.prototype.get = o),
        (u.prototype.has = s),
        (u.prototype.set = l),
        (t.exports = u);
    },
    function (t, e) {
      t.exports = function (t, e) {
        return t === e || (t !== t && e !== e);
      };
    },
    function (t, e, n) {
      var i = n(133),
        r = n(147),
        a = "[object AsyncFunction]",
        o = "[object Function]",
        s = "[object GeneratorFunction]",
        l = "[object Proxy]";
      t.exports = function (t) {
        if (!r(t)) return !1;
        var e = i(t);
        return e == o || e == s || e == a || e == l;
      };
    },
    function (t, e, n) {
      (function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n;
      }.call(this, n(65)));
    },
    function (t, e) {
      var n = Function.prototype.toString;
      t.exports = function (t) {
        if (null != t) {
          try {
            return n.call(t);
          } catch (e) {}
          try {
            return t + "";
          } catch (e) {}
        }
        return "";
      };
    },
    function (t, e, n) {
      var i = n(225),
        r = n(228),
        a = n(229),
        o = 1,
        s = 2;
      t.exports = function (t, e, n, l, u, c) {
        var d = n & o,
          h = t.length,
          f = e.length;
        if (h != f && !(d && f > h)) return !1;
        var p = c.get(t);
        if (p && c.get(e)) return p == e;
        var g = -1,
          m = !0,
          v = n & s ? new i() : void 0;
        for (c.set(t, e), c.set(e, t); ++g < h; ) {
          var y = t[g],
            b = e[g];
          if (l) var x = d ? l(b, y, g, e, t, c) : l(y, b, g, t, e, c);
          if (void 0 !== x) {
            if (x) continue;
            m = !1;
            break;
          }
          if (v) {
            if (
              !r(e, function (t, e) {
                if (!a(v, e) && (y === t || u(y, t, n, l, c))) return v.push(e);
              })
            ) {
              m = !1;
              break;
            }
          } else if (y !== b && !u(y, b, n, l, c)) {
            m = !1;
            break;
          }
        }
        return c.delete(t), c.delete(e), m;
      };
    },
    function (t, e, n) {
      var i = n(243),
        r = n(134),
        a = Object.prototype,
        o = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        l = i(
          (function () {
            return arguments;
          })()
        )
          ? i
          : function (t) {
              return r(t) && o.call(t, "callee") && !s.call(t, "callee");
            };
      t.exports = l;
    },
    function (t, e, n) {
      (function (t) {
        var i = n(130),
          r = n(244),
          a = e && !e.nodeType && e,
          o = a && "object" == typeof t && t && !t.nodeType && t,
          s = o && o.exports === a ? i.Buffer : void 0,
          l = (s ? s.isBuffer : void 0) || r;
        t.exports = l;
      }.call(this, n(144)(t)));
    },
    function (t, e) {
      var n = 9007199254740991,
        i = /^(?:0|[1-9]\d*)$/;
      t.exports = function (t, e) {
        var r = typeof t;
        return (
          !!(e = null == e ? n : e) &&
          ("number" == r || ("symbol" != r && i.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      };
    },
    function (t, e, n) {
      var i = n(245),
        r = n(246),
        a = n(247),
        o = a && a.isTypedArray,
        s = o ? r(o) : i;
      t.exports = s;
    },
    function (t, e, n) {
      var i = n(163),
        r = n(150);
      t.exports = function (t) {
        return null != t && r(t.length) && !i(t);
      };
    },
    function (t, e, n) {
      var i = n(147);
      t.exports = function (t) {
        return t === t && !i(t);
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        return function (n) {
          return null != n && n[t] === e && (void 0 !== e || t in Object(n));
        };
      };
    },
    function (t, e, n) {
      var i = n(175),
        r = n(141);
      t.exports = function (t, e) {
        for (var n = 0, a = (e = i(e, t)).length; null != t && n < a; )
          t = t[r(e[n++])];
        return n && n == a ? t : void 0;
      };
    },
    function (t, e, n) {
      var i = n(131),
        r = n(151),
        a = n(274),
        o = n(277);
      t.exports = function (t, e) {
        return i(t) ? t : r(t, e) ? [t] : a(o(t));
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e) {
      var n,
        i,
        r = (t.exports = {});
      function a() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === a || !n) && setTimeout)
          return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" === typeof setTimeout ? setTimeout : a;
        } catch (t) {
          n = a;
        }
        try {
          i = "function" === typeof clearTimeout ? clearTimeout : o;
        } catch (t) {
          i = o;
        }
      })();
      var l,
        u = [],
        c = !1,
        d = -1;
      function h() {
        c &&
          l &&
          ((c = !1), l.length ? (u = l.concat(u)) : (d = -1), u.length && f());
      }
      function f() {
        if (!c) {
          var t = s(h);
          c = !0;
          for (var e = u.length; e; ) {
            for (l = u, u = []; ++d < e; ) l && l[d].run();
            (d = -1), (e = u.length);
          }
          (l = null),
            (c = !1),
            (function (t) {
              if (i === clearTimeout) return clearTimeout(t);
              if ((i === o || !i) && clearTimeout)
                return (i = clearTimeout), clearTimeout(t);
              try {
                i(t);
              } catch (e) {
                try {
                  return i.call(null, t);
                } catch (e) {
                  return i.call(this, t);
                }
              }
            })(t);
        }
      }
      function p(t, e) {
        (this.fun = t), (this.array = e);
      }
      function g() {}
      (r.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        u.push(new p(t, e)), 1 !== u.length || c || s(f);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (r.title = "browser"),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ""),
        (r.versions = {}),
        (r.on = g),
        (r.addListener = g),
        (r.once = g),
        (r.off = g),
        (r.removeListener = g),
        (r.removeAllListeners = g),
        (r.emit = g),
        (r.prependListener = g),
        (r.prependOnceListener = g),
        (r.listeners = function (t) {
          return [];
        }),
        (r.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (r.cwd = function () {
          return "/";
        }),
        (r.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (r.umask = function () {
          return 0;
        });
    },
    function (t, e, n) {
      (function (t) {
        t.exports = (function () {
          "use strict";
          var e, n;
          function i() {
            return e.apply(null, arguments);
          }
          function r(t) {
            return (
              t instanceof Array ||
              "[object Array]" === Object.prototype.toString.call(t)
            );
          }
          function a(t) {
            return (
              null != t &&
              "[object Object]" === Object.prototype.toString.call(t)
            );
          }
          function o(t) {
            return void 0 === t;
          }
          function s(t) {
            return (
              "number" === typeof t ||
              "[object Number]" === Object.prototype.toString.call(t)
            );
          }
          function l(t) {
            return (
              t instanceof Date ||
              "[object Date]" === Object.prototype.toString.call(t)
            );
          }
          function u(t, e) {
            var n,
              i = [];
            for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
            return i;
          }
          function c(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }
          function d(t, e) {
            for (var n in e) c(e, n) && (t[n] = e[n]);
            return (
              c(e, "toString") && (t.toString = e.toString),
              c(e, "valueOf") && (t.valueOf = e.valueOf),
              t
            );
          }
          function h(t, e, n, i) {
            return Ie(t, e, n, i, !0).utc();
          }
          function f(t) {
            return (
              null == t._pf &&
                (t._pf = {
                  empty: !1,
                  unusedTokens: [],
                  unusedInput: [],
                  overflow: -2,
                  charsLeftOver: 0,
                  nullInput: !1,
                  invalidMonth: null,
                  invalidFormat: !1,
                  userInvalidated: !1,
                  iso: !1,
                  parsedDateParts: [],
                  meridiem: null,
                  rfc2822: !1,
                  weekdayMismatch: !1,
                }),
              t._pf
            );
          }
          function p(t) {
            if (null == t._isValid) {
              var e = f(t),
                i = n.call(e.parsedDateParts, function (t) {
                  return null != t;
                }),
                r =
                  !isNaN(t._d.getTime()) &&
                  e.overflow < 0 &&
                  !e.empty &&
                  !e.invalidMonth &&
                  !e.invalidWeekday &&
                  !e.weekdayMismatch &&
                  !e.nullInput &&
                  !e.invalidFormat &&
                  !e.userInvalidated &&
                  (!e.meridiem || (e.meridiem && i));
              if (
                (t._strict &&
                  (r =
                    r &&
                    0 === e.charsLeftOver &&
                    0 === e.unusedTokens.length &&
                    void 0 === e.bigHour),
                null != Object.isFrozen && Object.isFrozen(t))
              )
                return r;
              t._isValid = r;
            }
            return t._isValid;
          }
          function g(t) {
            var e = h(NaN);
            return null != t ? d(f(e), t) : (f(e).userInvalidated = !0), e;
          }
          n = Array.prototype.some
            ? Array.prototype.some
            : function (t) {
                for (
                  var e = Object(this), n = e.length >>> 0, i = 0;
                  i < n;
                  i++
                )
                  if (i in e && t.call(this, e[i], i, e)) return !0;
                return !1;
              };
          var m = (i.momentProperties = []);
          function v(t, e) {
            var n, i, r;
            if (
              (o(e._isAMomentObject) ||
                (t._isAMomentObject = e._isAMomentObject),
              o(e._i) || (t._i = e._i),
              o(e._f) || (t._f = e._f),
              o(e._l) || (t._l = e._l),
              o(e._strict) || (t._strict = e._strict),
              o(e._tzm) || (t._tzm = e._tzm),
              o(e._isUTC) || (t._isUTC = e._isUTC),
              o(e._offset) || (t._offset = e._offset),
              o(e._pf) || (t._pf = f(e)),
              o(e._locale) || (t._locale = e._locale),
              m.length > 0)
            )
              for (n = 0; n < m.length; n++)
                o((r = e[(i = m[n])])) || (t[i] = r);
            return t;
          }
          var y = !1;
          function b(t) {
            v(this, t),
              (this._d = new Date(null != t._d ? t._d.getTime() : NaN)),
              this.isValid() || (this._d = new Date(NaN)),
              !1 === y && ((y = !0), i.updateOffset(this), (y = !1));
          }
          function x(t) {
            return t instanceof b || (null != t && null != t._isAMomentObject);
          }
          function _(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
          }
          function w(t) {
            var e = +t,
              n = 0;
            return 0 !== e && isFinite(e) && (n = _(e)), n;
          }
          function k(t, e, n) {
            var i,
              r = Math.min(t.length, e.length),
              a = Math.abs(t.length - e.length),
              o = 0;
            for (i = 0; i < r; i++)
              ((n && t[i] !== e[i]) || (!n && w(t[i]) !== w(e[i]))) && o++;
            return o + a;
          }
          function M(t) {
            !1 === i.suppressDeprecationWarnings &&
              "undefined" !== typeof console &&
              console.warn &&
              console.warn("Deprecation warning: " + t);
          }
          function S(t, e) {
            var n = !0;
            return d(function () {
              if (
                (null != i.deprecationHandler && i.deprecationHandler(null, t),
                n)
              ) {
                for (var r, a = [], o = 0; o < arguments.length; o++) {
                  if (((r = ""), "object" === typeof arguments[o])) {
                    for (var s in ((r += "\n[" + o + "] "), arguments[0]))
                      r += s + ": " + arguments[0][s] + ", ";
                    r = r.slice(0, -2);
                  } else r = arguments[o];
                  a.push(r);
                }
                M(
                  t +
                    "\nArguments: " +
                    Array.prototype.slice.call(a).join("") +
                    "\n" +
                    new Error().stack
                ),
                  (n = !1);
              }
              return e.apply(this, arguments);
            }, e);
          }
          var D,
            C = {};
          function P(t, e) {
            null != i.deprecationHandler && i.deprecationHandler(t, e),
              C[t] || (M(e), (C[t] = !0));
          }
          function T(t) {
            return (
              t instanceof Function ||
              "[object Function]" === Object.prototype.toString.call(t)
            );
          }
          function O(t, e) {
            var n,
              i = d({}, t);
            for (n in e)
              c(e, n) &&
                (a(t[n]) && a(e[n])
                  ? ((i[n] = {}), d(i[n], t[n]), d(i[n], e[n]))
                  : null != e[n]
                  ? (i[n] = e[n])
                  : delete i[n]);
            for (n in t) c(t, n) && !c(e, n) && a(t[n]) && (i[n] = d({}, i[n]));
            return i;
          }
          function A(t) {
            null != t && this.set(t);
          }
          (i.suppressDeprecationWarnings = !1),
            (i.deprecationHandler = null),
            (D = Object.keys
              ? Object.keys
              : function (t) {
                  var e,
                    n = [];
                  for (e in t) c(t, e) && n.push(e);
                  return n;
                });
          var I = {};
          function F(t, e) {
            var n = t.toLowerCase();
            I[n] = I[n + "s"] = I[e] = t;
          }
          function L(t) {
            return "string" === typeof t ? I[t] || I[t.toLowerCase()] : void 0;
          }
          function R(t) {
            var e,
              n,
              i = {};
            for (n in t) c(t, n) && (e = L(n)) && (i[e] = t[n]);
            return i;
          }
          var W = {};
          function Y(t, e) {
            W[t] = e;
          }
          function z(t, e, n) {
            var i = "" + Math.abs(t),
              r = e - i.length;
            return (
              (t >= 0 ? (n ? "+" : "") : "-") +
              Math.pow(10, Math.max(0, r)).toString().substr(1) +
              i
            );
          }
          var N =
              /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            E = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            j = {},
            V = {};
          function H(t, e, n, i) {
            var r = i;
            "string" === typeof i &&
              (r = function () {
                return this[i]();
              }),
              t && (V[t] = r),
              e &&
                (V[e[0]] = function () {
                  return z(r.apply(this, arguments), e[1], e[2]);
                }),
              n &&
                (V[n] = function () {
                  return this.localeData().ordinal(r.apply(this, arguments), t);
                });
          }
          function B(t, e) {
            return t.isValid()
              ? ((e = U(e, t.localeData())),
                (j[e] =
                  j[e] ||
                  (function (t) {
                    var e,
                      n,
                      i,
                      r = t.match(N);
                    for (e = 0, n = r.length; e < n; e++)
                      V[r[e]]
                        ? (r[e] = V[r[e]])
                        : (r[e] = (i = r[e]).match(/\[[\s\S]/)
                            ? i.replace(/^\[|\]$/g, "")
                            : i.replace(/\\/g, ""));
                    return function (e) {
                      var i,
                        a = "";
                      for (i = 0; i < n; i++)
                        a += T(r[i]) ? r[i].call(e, t) : r[i];
                      return a;
                    };
                  })(e)),
                j[e](t))
              : t.localeData().invalidDate();
          }
          function U(t, e) {
            var n = 5;
            function i(t) {
              return e.longDateFormat(t) || t;
            }
            for (E.lastIndex = 0; n >= 0 && E.test(t); )
              (t = t.replace(E, i)), (E.lastIndex = 0), (n -= 1);
            return t;
          }
          var G = /\d/,
            q = /\d\d/,
            Z = /\d{3}/,
            $ = /\d{4}/,
            K = /[+-]?\d{6}/,
            X = /\d\d?/,
            J = /\d\d\d\d?/,
            Q = /\d\d\d\d\d\d?/,
            tt = /\d{1,3}/,
            et = /\d{1,4}/,
            nt = /[+-]?\d{1,6}/,
            it = /\d+/,
            rt = /[+-]?\d+/,
            at = /Z|[+-]\d\d:?\d\d/gi,
            ot = /Z|[+-]\d\d(?::?\d\d)?/gi,
            st =
              /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            lt = {};
          function ut(t, e, n) {
            lt[t] = T(e)
              ? e
              : function (t, i) {
                  return t && n ? n : e;
                };
          }
          function ct(t, e) {
            return c(lt, t)
              ? lt[t](e._strict, e._locale)
              : new RegExp(
                  dt(
                    t
                      .replace("\\", "")
                      .replace(
                        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                        function (t, e, n, i, r) {
                          return e || n || i || r;
                        }
                      )
                  )
                );
          }
          function dt(t) {
            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          }
          var ht = {};
          function ft(t, e) {
            var n,
              i = e;
            for (
              "string" === typeof t && (t = [t]),
                s(e) &&
                  (i = function (t, n) {
                    n[e] = w(t);
                  }),
                n = 0;
              n < t.length;
              n++
            )
              ht[t[n]] = i;
          }
          function pt(t, e) {
            ft(t, function (t, n, i, r) {
              (i._w = i._w || {}), e(t, i._w, i, r);
            });
          }
          function gt(t, e, n) {
            null != e && c(ht, t) && ht[t](e, n._a, n, t);
          }
          var mt = 0,
            vt = 1,
            yt = 2,
            bt = 3,
            xt = 4,
            _t = 5,
            wt = 6,
            kt = 7,
            Mt = 8;
          function St(t) {
            return Dt(t) ? 366 : 365;
          }
          function Dt(t) {
            return (t % 4 === 0 && t % 100 !== 0) || t % 400 === 0;
          }
          H("Y", 0, 0, function () {
            var t = this.year();
            return t <= 9999 ? "" + t : "+" + t;
          }),
            H(0, ["YY", 2], 0, function () {
              return this.year() % 100;
            }),
            H(0, ["YYYY", 4], 0, "year"),
            H(0, ["YYYYY", 5], 0, "year"),
            H(0, ["YYYYYY", 6, !0], 0, "year"),
            F("year", "y"),
            Y("year", 1),
            ut("Y", rt),
            ut("YY", X, q),
            ut("YYYY", et, $),
            ut("YYYYY", nt, K),
            ut("YYYYYY", nt, K),
            ft(["YYYYY", "YYYYYY"], mt),
            ft("YYYY", function (t, e) {
              e[mt] = 2 === t.length ? i.parseTwoDigitYear(t) : w(t);
            }),
            ft("YY", function (t, e) {
              e[mt] = i.parseTwoDigitYear(t);
            }),
            ft("Y", function (t, e) {
              e[mt] = parseInt(t, 10);
            }),
            (i.parseTwoDigitYear = function (t) {
              return w(t) + (w(t) > 68 ? 1900 : 2e3);
            });
          var Ct,
            Pt = Tt("FullYear", !0);
          function Tt(t, e) {
            return function (n) {
              return null != n
                ? (At(this, t, n), i.updateOffset(this, e), this)
                : Ot(this, t);
            };
          }
          function Ot(t, e) {
            return t.isValid()
              ? t._d["get" + (t._isUTC ? "UTC" : "") + e]()
              : NaN;
          }
          function At(t, e, n) {
            t.isValid() &&
              !isNaN(n) &&
              ("FullYear" === e &&
              Dt(t.year()) &&
              1 === t.month() &&
              29 === t.date()
                ? t._d["set" + (t._isUTC ? "UTC" : "") + e](
                    n,
                    t.month(),
                    It(n, t.month())
                  )
                : t._d["set" + (t._isUTC ? "UTC" : "") + e](n));
          }
          function It(t, e) {
            if (isNaN(t) || isNaN(e)) return NaN;
            var n,
              i = ((e % (n = 12)) + n) % n;
            return (
              (t += (e - i) / 12),
              1 === i ? (Dt(t) ? 29 : 28) : 31 - ((i % 7) % 2)
            );
          }
          (Ct = Array.prototype.indexOf
            ? Array.prototype.indexOf
            : function (t) {
                var e;
                for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
                return -1;
              }),
            H("M", ["MM", 2], "Mo", function () {
              return this.month() + 1;
            }),
            H("MMM", 0, 0, function (t) {
              return this.localeData().monthsShort(this, t);
            }),
            H("MMMM", 0, 0, function (t) {
              return this.localeData().months(this, t);
            }),
            F("month", "M"),
            Y("month", 8),
            ut("M", X),
            ut("MM", X, q),
            ut("MMM", function (t, e) {
              return e.monthsShortRegex(t);
            }),
            ut("MMMM", function (t, e) {
              return e.monthsRegex(t);
            }),
            ft(["M", "MM"], function (t, e) {
              e[vt] = w(t) - 1;
            }),
            ft(["MMM", "MMMM"], function (t, e, n, i) {
              var r = n._locale.monthsParse(t, i, n._strict);
              null != r ? (e[vt] = r) : (f(n).invalidMonth = t);
            });
          var Ft = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            Lt =
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            Rt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
          function Wt(t, e, n) {
            var i,
              r,
              a,
              o = t.toLocaleLowerCase();
            if (!this._monthsParse)
              for (
                this._monthsParse = [],
                  this._longMonthsParse = [],
                  this._shortMonthsParse = [],
                  i = 0;
                i < 12;
                ++i
              )
                (a = h([2e3, i])),
                  (this._shortMonthsParse[i] = this.monthsShort(
                    a,
                    ""
                  ).toLocaleLowerCase()),
                  (this._longMonthsParse[i] = this.months(
                    a,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "MMM" === e
                ? -1 !== (r = Ct.call(this._shortMonthsParse, o))
                  ? r
                  : null
                : -1 !== (r = Ct.call(this._longMonthsParse, o))
                ? r
                : null
              : "MMM" === e
              ? -1 !== (r = Ct.call(this._shortMonthsParse, o))
                ? r
                : -1 !== (r = Ct.call(this._longMonthsParse, o))
                ? r
                : null
              : -1 !== (r = Ct.call(this._longMonthsParse, o))
              ? r
              : -1 !== (r = Ct.call(this._shortMonthsParse, o))
              ? r
              : null;
          }
          function Yt(t, e) {
            var n;
            if (!t.isValid()) return t;
            if ("string" === typeof e)
              if (/^\d+$/.test(e)) e = w(e);
              else if (!s((e = t.localeData().monthsParse(e)))) return t;
            return (
              (n = Math.min(t.date(), It(t.year(), e))),
              t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n),
              t
            );
          }
          function zt(t) {
            return null != t
              ? (Yt(this, t), i.updateOffset(this, !0), this)
              : Ot(this, "Month");
          }
          var Nt = st,
            Et = st;
          function jt() {
            function t(t, e) {
              return e.length - t.length;
            }
            var e,
              n,
              i = [],
              r = [],
              a = [];
            for (e = 0; e < 12; e++)
              (n = h([2e3, e])),
                i.push(this.monthsShort(n, "")),
                r.push(this.months(n, "")),
                a.push(this.months(n, "")),
                a.push(this.monthsShort(n, ""));
            for (i.sort(t), r.sort(t), a.sort(t), e = 0; e < 12; e++)
              (i[e] = dt(i[e])), (r[e] = dt(r[e]));
            for (e = 0; e < 24; e++) a[e] = dt(a[e]);
            (this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i")),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = new RegExp(
                "^(" + r.join("|") + ")",
                "i"
              )),
              (this._monthsShortStrictRegex = new RegExp(
                "^(" + i.join("|") + ")",
                "i"
              ));
          }
          function Vt(t, e, n, i, r, a, o) {
            var s;
            return (
              t < 100 && t >= 0
                ? ((s = new Date(t + 400, e, n, i, r, a, o)),
                  isFinite(s.getFullYear()) && s.setFullYear(t))
                : (s = new Date(t, e, n, i, r, a, o)),
              s
            );
          }
          function Ht(t) {
            var e;
            if (t < 100 && t >= 0) {
              var n = Array.prototype.slice.call(arguments);
              (n[0] = t + 400),
                (e = new Date(Date.UTC.apply(null, n))),
                isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t);
            } else e = new Date(Date.UTC.apply(null, arguments));
            return e;
          }
          function Bt(t, e, n) {
            var i = 7 + e - n;
            return (-(7 + Ht(t, 0, i).getUTCDay() - e) % 7) + i - 1;
          }
          function Ut(t, e, n, i, r) {
            var a,
              o,
              s = 1 + 7 * (e - 1) + ((7 + n - i) % 7) + Bt(t, i, r);
            return (
              s <= 0
                ? (o = St((a = t - 1)) + s)
                : s > St(t)
                ? ((a = t + 1), (o = s - St(t)))
                : ((a = t), (o = s)),
              { year: a, dayOfYear: o }
            );
          }
          function Gt(t, e, n) {
            var i,
              r,
              a = Bt(t.year(), e, n),
              o = Math.floor((t.dayOfYear() - a - 1) / 7) + 1;
            return (
              o < 1
                ? (i = o + qt((r = t.year() - 1), e, n))
                : o > qt(t.year(), e, n)
                ? ((i = o - qt(t.year(), e, n)), (r = t.year() + 1))
                : ((r = t.year()), (i = o)),
              { week: i, year: r }
            );
          }
          function qt(t, e, n) {
            var i = Bt(t, e, n),
              r = Bt(t + 1, e, n);
            return (St(t) - i + r) / 7;
          }
          function Zt(t, e) {
            return t.slice(e, 7).concat(t.slice(0, e));
          }
          H("w", ["ww", 2], "wo", "week"),
            H("W", ["WW", 2], "Wo", "isoWeek"),
            F("week", "w"),
            F("isoWeek", "W"),
            Y("week", 5),
            Y("isoWeek", 5),
            ut("w", X),
            ut("ww", X, q),
            ut("W", X),
            ut("WW", X, q),
            pt(["w", "ww", "W", "WW"], function (t, e, n, i) {
              e[i.substr(0, 1)] = w(t);
            }),
            H("d", 0, "do", "day"),
            H("dd", 0, 0, function (t) {
              return this.localeData().weekdaysMin(this, t);
            }),
            H("ddd", 0, 0, function (t) {
              return this.localeData().weekdaysShort(this, t);
            }),
            H("dddd", 0, 0, function (t) {
              return this.localeData().weekdays(this, t);
            }),
            H("e", 0, 0, "weekday"),
            H("E", 0, 0, "isoWeekday"),
            F("day", "d"),
            F("weekday", "e"),
            F("isoWeekday", "E"),
            Y("day", 11),
            Y("weekday", 11),
            Y("isoWeekday", 11),
            ut("d", X),
            ut("e", X),
            ut("E", X),
            ut("dd", function (t, e) {
              return e.weekdaysMinRegex(t);
            }),
            ut("ddd", function (t, e) {
              return e.weekdaysShortRegex(t);
            }),
            ut("dddd", function (t, e) {
              return e.weekdaysRegex(t);
            }),
            pt(["dd", "ddd", "dddd"], function (t, e, n, i) {
              var r = n._locale.weekdaysParse(t, i, n._strict);
              null != r ? (e.d = r) : (f(n).invalidWeekday = t);
            }),
            pt(["d", "e", "E"], function (t, e, n, i) {
              e[i] = w(t);
            });
          var $t =
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            Kt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            Xt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
          function Jt(t, e, n) {
            var i,
              r,
              a,
              o = t.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (
                this._weekdaysParse = [],
                  this._shortWeekdaysParse = [],
                  this._minWeekdaysParse = [],
                  i = 0;
                i < 7;
                ++i
              )
                (a = h([2e3, 1]).day(i)),
                  (this._minWeekdaysParse[i] = this.weekdaysMin(
                    a,
                    ""
                  ).toLocaleLowerCase()),
                  (this._shortWeekdaysParse[i] = this.weekdaysShort(
                    a,
                    ""
                  ).toLocaleLowerCase()),
                  (this._weekdaysParse[i] = this.weekdays(
                    a,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "dddd" === e
                ? -1 !== (r = Ct.call(this._weekdaysParse, o))
                  ? r
                  : null
                : "ddd" === e
                ? -1 !== (r = Ct.call(this._shortWeekdaysParse, o))
                  ? r
                  : null
                : -1 !== (r = Ct.call(this._minWeekdaysParse, o))
                ? r
                : null
              : "dddd" === e
              ? -1 !== (r = Ct.call(this._weekdaysParse, o))
                ? r
                : -1 !== (r = Ct.call(this._shortWeekdaysParse, o))
                ? r
                : -1 !== (r = Ct.call(this._minWeekdaysParse, o))
                ? r
                : null
              : "ddd" === e
              ? -1 !== (r = Ct.call(this._shortWeekdaysParse, o))
                ? r
                : -1 !== (r = Ct.call(this._weekdaysParse, o))
                ? r
                : -1 !== (r = Ct.call(this._minWeekdaysParse, o))
                ? r
                : null
              : -1 !== (r = Ct.call(this._minWeekdaysParse, o))
              ? r
              : -1 !== (r = Ct.call(this._weekdaysParse, o))
              ? r
              : -1 !== (r = Ct.call(this._shortWeekdaysParse, o))
              ? r
              : null;
          }
          var Qt = st,
            te = st,
            ee = st;
          function ne() {
            function t(t, e) {
              return e.length - t.length;
            }
            var e,
              n,
              i,
              r,
              a,
              o = [],
              s = [],
              l = [],
              u = [];
            for (e = 0; e < 7; e++)
              (n = h([2e3, 1]).day(e)),
                (i = this.weekdaysMin(n, "")),
                (r = this.weekdaysShort(n, "")),
                (a = this.weekdays(n, "")),
                o.push(i),
                s.push(r),
                l.push(a),
                u.push(i),
                u.push(r),
                u.push(a);
            for (o.sort(t), s.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++)
              (s[e] = dt(s[e])), (l[e] = dt(l[e])), (u[e] = dt(u[e]));
            (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
              (this._weekdaysShortRegex = this._weekdaysRegex),
              (this._weekdaysMinRegex = this._weekdaysRegex),
              (this._weekdaysStrictRegex = new RegExp(
                "^(" + l.join("|") + ")",
                "i"
              )),
              (this._weekdaysShortStrictRegex = new RegExp(
                "^(" + s.join("|") + ")",
                "i"
              )),
              (this._weekdaysMinStrictRegex = new RegExp(
                "^(" + o.join("|") + ")",
                "i"
              ));
          }
          function ie() {
            return this.hours() % 12 || 12;
          }
          function re(t, e) {
            H(t, 0, 0, function () {
              return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                e
              );
            });
          }
          function ae(t, e) {
            return e._meridiemParse;
          }
          H("H", ["HH", 2], 0, "hour"),
            H("h", ["hh", 2], 0, ie),
            H("k", ["kk", 2], 0, function () {
              return this.hours() || 24;
            }),
            H("hmm", 0, 0, function () {
              return "" + ie.apply(this) + z(this.minutes(), 2);
            }),
            H("hmmss", 0, 0, function () {
              return (
                "" +
                ie.apply(this) +
                z(this.minutes(), 2) +
                z(this.seconds(), 2)
              );
            }),
            H("Hmm", 0, 0, function () {
              return "" + this.hours() + z(this.minutes(), 2);
            }),
            H("Hmmss", 0, 0, function () {
              return (
                "" + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2)
              );
            }),
            re("a", !0),
            re("A", !1),
            F("hour", "h"),
            Y("hour", 13),
            ut("a", ae),
            ut("A", ae),
            ut("H", X),
            ut("h", X),
            ut("k", X),
            ut("HH", X, q),
            ut("hh", X, q),
            ut("kk", X, q),
            ut("hmm", J),
            ut("hmmss", Q),
            ut("Hmm", J),
            ut("Hmmss", Q),
            ft(["H", "HH"], bt),
            ft(["k", "kk"], function (t, e, n) {
              var i = w(t);
              e[bt] = 24 === i ? 0 : i;
            }),
            ft(["a", "A"], function (t, e, n) {
              (n._isPm = n._locale.isPM(t)), (n._meridiem = t);
            }),
            ft(["h", "hh"], function (t, e, n) {
              (e[bt] = w(t)), (f(n).bigHour = !0);
            }),
            ft("hmm", function (t, e, n) {
              var i = t.length - 2;
              (e[bt] = w(t.substr(0, i))),
                (e[xt] = w(t.substr(i))),
                (f(n).bigHour = !0);
            }),
            ft("hmmss", function (t, e, n) {
              var i = t.length - 4,
                r = t.length - 2;
              (e[bt] = w(t.substr(0, i))),
                (e[xt] = w(t.substr(i, 2))),
                (e[_t] = w(t.substr(r))),
                (f(n).bigHour = !0);
            }),
            ft("Hmm", function (t, e, n) {
              var i = t.length - 2;
              (e[bt] = w(t.substr(0, i))), (e[xt] = w(t.substr(i)));
            }),
            ft("Hmmss", function (t, e, n) {
              var i = t.length - 4,
                r = t.length - 2;
              (e[bt] = w(t.substr(0, i))),
                (e[xt] = w(t.substr(i, 2))),
                (e[_t] = w(t.substr(r)));
            });
          var oe,
            se = Tt("Hours", !0),
            le = {
              calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L",
              },
              longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A",
              },
              invalidDate: "Invalid date",
              ordinal: "%d",
              dayOfMonthOrdinalParse: /\d{1,2}/,
              relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years",
              },
              months: Lt,
              monthsShort: Rt,
              week: { dow: 0, doy: 6 },
              weekdays: $t,
              weekdaysMin: Xt,
              weekdaysShort: Kt,
              meridiemParse: /[ap]\.?m?\.?/i,
            },
            ue = {},
            ce = {};
          function de(t) {
            return t ? t.toLowerCase().replace("_", "-") : t;
          }
          function he(e) {
            var n = null;
            if (!ue[e] && "undefined" !== typeof t && t && t.exports)
              try {
                (n = oe._abbr),
                  !(function () {
                    var t = new Error("Cannot find module 'undefined'");
                    throw ((t.code = "MODULE_NOT_FOUND"), t);
                  })(),
                  fe(n);
              } catch (i) {}
            return ue[e];
          }
          function fe(t, e) {
            var n;
            return (
              t &&
                ((n = o(e) ? ge(t) : pe(t, e))
                  ? (oe = n)
                  : "undefined" !== typeof console &&
                    console.warn &&
                    console.warn(
                      "Locale " + t + " not found. Did you forget to load it?"
                    )),
              oe._abbr
            );
          }
          function pe(t, e) {
            if (null !== e) {
              var n,
                i = le;
              if (((e.abbr = t), null != ue[t]))
                P(
                  "defineLocaleOverride",
                  "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
                ),
                  (i = ue[t]._config);
              else if (null != e.parentLocale)
                if (null != ue[e.parentLocale]) i = ue[e.parentLocale]._config;
                else {
                  if (null == (n = he(e.parentLocale)))
                    return (
                      ce[e.parentLocale] || (ce[e.parentLocale] = []),
                      ce[e.parentLocale].push({ name: t, config: e }),
                      null
                    );
                  i = n._config;
                }
              return (
                (ue[t] = new A(O(i, e))),
                ce[t] &&
                  ce[t].forEach(function (t) {
                    pe(t.name, t.config);
                  }),
                fe(t),
                ue[t]
              );
            }
            return delete ue[t], null;
          }
          function ge(t) {
            var e;
            if (
              (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)
            )
              return oe;
            if (!r(t)) {
              if ((e = he(t))) return e;
              t = [t];
            }
            return (function (t) {
              for (var e, n, i, r, a = 0; a < t.length; ) {
                for (
                  e = (r = de(t[a]).split("-")).length,
                    n = (n = de(t[a + 1])) ? n.split("-") : null;
                  e > 0;

                ) {
                  if ((i = he(r.slice(0, e).join("-")))) return i;
                  if (n && n.length >= e && k(r, n, !0) >= e - 1) break;
                  e--;
                }
                a++;
              }
              return oe;
            })(t);
          }
          function me(t) {
            var e,
              n = t._a;
            return (
              n &&
                -2 === f(t).overflow &&
                ((e =
                  n[vt] < 0 || n[vt] > 11
                    ? vt
                    : n[yt] < 1 || n[yt] > It(n[mt], n[vt])
                    ? yt
                    : n[bt] < 0 ||
                      n[bt] > 24 ||
                      (24 === n[bt] &&
                        (0 !== n[xt] || 0 !== n[_t] || 0 !== n[wt]))
                    ? bt
                    : n[xt] < 0 || n[xt] > 59
                    ? xt
                    : n[_t] < 0 || n[_t] > 59
                    ? _t
                    : n[wt] < 0 || n[wt] > 999
                    ? wt
                    : -1),
                f(t)._overflowDayOfYear && (e < mt || e > yt) && (e = yt),
                f(t)._overflowWeeks && -1 === e && (e = kt),
                f(t)._overflowWeekday && -1 === e && (e = Mt),
                (f(t).overflow = e)),
              t
            );
          }
          function ve(t, e, n) {
            return null != t ? t : null != e ? e : n;
          }
          function ye(t) {
            var e,
              n,
              r,
              a,
              o,
              s = [];
            if (!t._d) {
              for (
                r = (function (t) {
                  var e = new Date(i.now());
                  return t._useUTC
                    ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]
                    : [e.getFullYear(), e.getMonth(), e.getDate()];
                })(t),
                  t._w &&
                    null == t._a[yt] &&
                    null == t._a[vt] &&
                    (function (t) {
                      var e, n, i, r, a, o, s, l;
                      if (null != (e = t._w).GG || null != e.W || null != e.E)
                        (a = 1),
                          (o = 4),
                          (n = ve(e.GG, t._a[mt], Gt(Fe(), 1, 4).year)),
                          (i = ve(e.W, 1)),
                          ((r = ve(e.E, 1)) < 1 || r > 7) && (l = !0);
                      else {
                        (a = t._locale._week.dow), (o = t._locale._week.doy);
                        var u = Gt(Fe(), a, o);
                        (n = ve(e.gg, t._a[mt], u.year)),
                          (i = ve(e.w, u.week)),
                          null != e.d
                            ? ((r = e.d) < 0 || r > 6) && (l = !0)
                            : null != e.e
                            ? ((r = e.e + a), (e.e < 0 || e.e > 6) && (l = !0))
                            : (r = a);
                      }
                      i < 1 || i > qt(n, a, o)
                        ? (f(t)._overflowWeeks = !0)
                        : null != l
                        ? (f(t)._overflowWeekday = !0)
                        : ((s = Ut(n, i, r, a, o)),
                          (t._a[mt] = s.year),
                          (t._dayOfYear = s.dayOfYear));
                    })(t),
                  null != t._dayOfYear &&
                    ((o = ve(t._a[mt], r[mt])),
                    (t._dayOfYear > St(o) || 0 === t._dayOfYear) &&
                      (f(t)._overflowDayOfYear = !0),
                    (n = Ht(o, 0, t._dayOfYear)),
                    (t._a[vt] = n.getUTCMonth()),
                    (t._a[yt] = n.getUTCDate())),
                  e = 0;
                e < 3 && null == t._a[e];
                ++e
              )
                t._a[e] = s[e] = r[e];
              for (; e < 7; e++)
                t._a[e] = s[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
              24 === t._a[bt] &&
                0 === t._a[xt] &&
                0 === t._a[_t] &&
                0 === t._a[wt] &&
                ((t._nextDay = !0), (t._a[bt] = 0)),
                (t._d = (t._useUTC ? Ht : Vt).apply(null, s)),
                (a = t._useUTC ? t._d.getUTCDay() : t._d.getDay()),
                null != t._tzm &&
                  t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                t._nextDay && (t._a[bt] = 24),
                t._w &&
                  "undefined" !== typeof t._w.d &&
                  t._w.d !== a &&
                  (f(t).weekdayMismatch = !0);
            }
          }
          var be =
              /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            xe =
              /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            _e = /Z|[+-]\d\d(?::?\d\d)?/,
            we = [
              ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
              ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
              ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
              ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
              ["YYYY-DDD", /\d{4}-\d{3}/],
              ["YYYY-MM", /\d{4}-\d\d/, !1],
              ["YYYYYYMMDD", /[+-]\d{10}/],
              ["YYYYMMDD", /\d{8}/],
              ["GGGG[W]WWE", /\d{4}W\d{3}/],
              ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
              ["YYYYDDD", /\d{7}/],
            ],
            ke = [
              ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
              ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
              ["HH:mm:ss", /\d\d:\d\d:\d\d/],
              ["HH:mm", /\d\d:\d\d/],
              ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
              ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
              ["HHmmss", /\d\d\d\d\d\d/],
              ["HHmm", /\d\d\d\d/],
              ["HH", /\d\d/],
            ],
            Me = /^\/?Date\((\-?\d+)/i;
          function Se(t) {
            var e,
              n,
              i,
              r,
              a,
              o,
              s = t._i,
              l = be.exec(s) || xe.exec(s);
            if (l) {
              for (f(t).iso = !0, e = 0, n = we.length; e < n; e++)
                if (we[e][1].exec(l[1])) {
                  (r = we[e][0]), (i = !1 !== we[e][2]);
                  break;
                }
              if (null == r) return void (t._isValid = !1);
              if (l[3]) {
                for (e = 0, n = ke.length; e < n; e++)
                  if (ke[e][1].exec(l[3])) {
                    a = (l[2] || " ") + ke[e][0];
                    break;
                  }
                if (null == a) return void (t._isValid = !1);
              }
              if (!i && null != a) return void (t._isValid = !1);
              if (l[4]) {
                if (!_e.exec(l[4])) return void (t._isValid = !1);
                o = "Z";
              }
              (t._f = r + (a || "") + (o || "")), Oe(t);
            } else t._isValid = !1;
          }
          var De =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
          function Ce(t) {
            var e = parseInt(t, 10);
            return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
          }
          var Pe = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
          function Te(t) {
            var e = De.exec(
              t._i
                .replace(/\([^)]*\)|[\n\t]/g, " ")
                .replace(/(\s\s+)/g, " ")
                .replace(/^\s\s*/, "")
                .replace(/\s\s*$/, "")
            );
            if (e) {
              var n = (function (t, e, n, i, r, a) {
                var o = [
                  Ce(t),
                  Rt.indexOf(e),
                  parseInt(n, 10),
                  parseInt(i, 10),
                  parseInt(r, 10),
                ];
                return a && o.push(parseInt(a, 10)), o;
              })(e[4], e[3], e[2], e[5], e[6], e[7]);
              if (
                !(function (t, e, n) {
                  return (
                    !t ||
                    Kt.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() ||
                    ((f(n).weekdayMismatch = !0), (n._isValid = !1), !1)
                  );
                })(e[1], n, t)
              )
                return;
              (t._a = n),
                (t._tzm = (function (t, e, n) {
                  if (t) return Pe[t];
                  if (e) return 0;
                  var i = parseInt(n, 10),
                    r = i % 100;
                  return ((i - r) / 100) * 60 + r;
                })(e[8], e[9], e[10])),
                (t._d = Ht.apply(null, t._a)),
                t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                (f(t).rfc2822 = !0);
            } else t._isValid = !1;
          }
          function Oe(t) {
            if (t._f !== i.ISO_8601)
              if (t._f !== i.RFC_2822) {
                (t._a = []), (f(t).empty = !0);
                var e,
                  n,
                  r,
                  a,
                  o,
                  s = "" + t._i,
                  l = s.length,
                  u = 0;
                for (
                  r = U(t._f, t._locale).match(N) || [], e = 0;
                  e < r.length;
                  e++
                )
                  (a = r[e]),
                    (n = (s.match(ct(a, t)) || [])[0]) &&
                      ((o = s.substr(0, s.indexOf(n))).length > 0 &&
                        f(t).unusedInput.push(o),
                      (s = s.slice(s.indexOf(n) + n.length)),
                      (u += n.length)),
                    V[a]
                      ? (n ? (f(t).empty = !1) : f(t).unusedTokens.push(a),
                        gt(a, n, t))
                      : t._strict && !n && f(t).unusedTokens.push(a);
                (f(t).charsLeftOver = l - u),
                  s.length > 0 && f(t).unusedInput.push(s),
                  t._a[bt] <= 12 &&
                    !0 === f(t).bigHour &&
                    t._a[bt] > 0 &&
                    (f(t).bigHour = void 0),
                  (f(t).parsedDateParts = t._a.slice(0)),
                  (f(t).meridiem = t._meridiem),
                  (t._a[bt] = (function (t, e, n) {
                    var i;
                    return null == n
                      ? e
                      : null != t.meridiemHour
                      ? t.meridiemHour(e, n)
                      : null != t.isPM
                      ? ((i = t.isPM(n)) && e < 12 && (e += 12),
                        i || 12 !== e || (e = 0),
                        e)
                      : e;
                  })(t._locale, t._a[bt], t._meridiem)),
                  ye(t),
                  me(t);
              } else Te(t);
            else Se(t);
          }
          function Ae(t) {
            var e = t._i,
              n = t._f;
            return (
              (t._locale = t._locale || ge(t._l)),
              null === e || (void 0 === n && "" === e)
                ? g({ nullInput: !0 })
                : ("string" === typeof e && (t._i = e = t._locale.preparse(e)),
                  x(e)
                    ? new b(me(e))
                    : (l(e)
                        ? (t._d = e)
                        : r(n)
                        ? (function (t) {
                            var e, n, i, r, a;
                            if (0 === t._f.length)
                              return (
                                (f(t).invalidFormat = !0),
                                void (t._d = new Date(NaN))
                              );
                            for (r = 0; r < t._f.length; r++)
                              (a = 0),
                                (e = v({}, t)),
                                null != t._useUTC && (e._useUTC = t._useUTC),
                                (e._f = t._f[r]),
                                Oe(e),
                                p(e) &&
                                  ((a += f(e).charsLeftOver),
                                  (a += 10 * f(e).unusedTokens.length),
                                  (f(e).score = a),
                                  (null == i || a < i) && ((i = a), (n = e)));
                            d(t, n || e);
                          })(t)
                        : n
                        ? Oe(t)
                        : (function (t) {
                            var e = t._i;
                            o(e)
                              ? (t._d = new Date(i.now()))
                              : l(e)
                              ? (t._d = new Date(e.valueOf()))
                              : "string" === typeof e
                              ? (function (t) {
                                  var e = Me.exec(t._i);
                                  null === e
                                    ? (Se(t),
                                      !1 === t._isValid &&
                                        (delete t._isValid,
                                        Te(t),
                                        !1 === t._isValid &&
                                          (delete t._isValid,
                                          i.createFromInputFallback(t))))
                                    : (t._d = new Date(+e[1]));
                                })(t)
                              : r(e)
                              ? ((t._a = u(e.slice(0), function (t) {
                                  return parseInt(t, 10);
                                })),
                                ye(t))
                              : a(e)
                              ? (function (t) {
                                  if (!t._d) {
                                    var e = R(t._i);
                                    (t._a = u(
                                      [
                                        e.year,
                                        e.month,
                                        e.day || e.date,
                                        e.hour,
                                        e.minute,
                                        e.second,
                                        e.millisecond,
                                      ],
                                      function (t) {
                                        return t && parseInt(t, 10);
                                      }
                                    )),
                                      ye(t);
                                  }
                                })(t)
                              : s(e)
                              ? (t._d = new Date(e))
                              : i.createFromInputFallback(t);
                          })(t),
                      p(t) || (t._d = null),
                      t))
            );
          }
          function Ie(t, e, n, i, o) {
            var s = {};
            return (
              (!0 !== n && !1 !== n) || ((i = n), (n = void 0)),
              ((a(t) &&
                (function (t) {
                  if (Object.getOwnPropertyNames)
                    return 0 === Object.getOwnPropertyNames(t).length;
                  var e;
                  for (e in t) if (t.hasOwnProperty(e)) return !1;
                  return !0;
                })(t)) ||
                (r(t) && 0 === t.length)) &&
                (t = void 0),
              (s._isAMomentObject = !0),
              (s._useUTC = s._isUTC = o),
              (s._l = n),
              (s._i = t),
              (s._f = e),
              (s._strict = i),
              (function (t) {
                var e = new b(me(Ae(t)));
                return e._nextDay && (e.add(1, "d"), (e._nextDay = void 0)), e;
              })(s)
            );
          }
          function Fe(t, e, n, i) {
            return Ie(t, e, n, i, !1);
          }
          (i.createFromInputFallback = S(
            "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
            function (t) {
              t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
            }
          )),
            (i.ISO_8601 = function () {}),
            (i.RFC_2822 = function () {});
          var Le = S(
              "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var t = Fe.apply(null, arguments);
                return this.isValid() && t.isValid()
                  ? t < this
                    ? this
                    : t
                  : g();
              }
            ),
            Re = S(
              "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var t = Fe.apply(null, arguments);
                return this.isValid() && t.isValid()
                  ? t > this
                    ? this
                    : t
                  : g();
              }
            );
          function We(t, e) {
            var n, i;
            if ((1 === e.length && r(e[0]) && (e = e[0]), !e.length))
              return Fe();
            for (n = e[0], i = 1; i < e.length; ++i)
              (e[i].isValid() && !e[i][t](n)) || (n = e[i]);
            return n;
          }
          var Ye = [
            "year",
            "quarter",
            "month",
            "week",
            "day",
            "hour",
            "minute",
            "second",
            "millisecond",
          ];
          function ze(t) {
            var e = R(t),
              n = e.year || 0,
              i = e.quarter || 0,
              r = e.month || 0,
              a = e.week || e.isoWeek || 0,
              o = e.day || 0,
              s = e.hour || 0,
              l = e.minute || 0,
              u = e.second || 0,
              c = e.millisecond || 0;
            (this._isValid = (function (t) {
              for (var e in t)
                if (-1 === Ct.call(Ye, e) || (null != t[e] && isNaN(t[e])))
                  return !1;
              for (var n = !1, i = 0; i < Ye.length; ++i)
                if (t[Ye[i]]) {
                  if (n) return !1;
                  parseFloat(t[Ye[i]]) !== w(t[Ye[i]]) && (n = !0);
                }
              return !0;
            })(e)),
              (this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60),
              (this._days = +o + 7 * a),
              (this._months = +r + 3 * i + 12 * n),
              (this._data = {}),
              (this._locale = ge()),
              this._bubble();
          }
          function Ne(t) {
            return t instanceof ze;
          }
          function Ee(t) {
            return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
          }
          function je(t, e) {
            H(t, 0, 0, function () {
              var t = this.utcOffset(),
                n = "+";
              return (
                t < 0 && ((t = -t), (n = "-")),
                n + z(~~(t / 60), 2) + e + z(~~t % 60, 2)
              );
            });
          }
          je("Z", ":"),
            je("ZZ", ""),
            ut("Z", ot),
            ut("ZZ", ot),
            ft(["Z", "ZZ"], function (t, e, n) {
              (n._useUTC = !0), (n._tzm = He(ot, t));
            });
          var Ve = /([\+\-]|\d\d)/gi;
          function He(t, e) {
            var n = (e || "").match(t);
            if (null === n) return null;
            var i = ((n[n.length - 1] || []) + "").match(Ve) || ["-", 0, 0],
              r = 60 * i[1] + w(i[2]);
            return 0 === r ? 0 : "+" === i[0] ? r : -r;
          }
          function Be(t, e) {
            var n, r;
            return e._isUTC
              ? ((n = e.clone()),
                (r =
                  (x(t) || l(t) ? t.valueOf() : Fe(t).valueOf()) - n.valueOf()),
                n._d.setTime(n._d.valueOf() + r),
                i.updateOffset(n, !1),
                n)
              : Fe(t).local();
          }
          function Ue(t) {
            return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
          }
          function Ge() {
            return !!this.isValid() && this._isUTC && 0 === this._offset;
          }
          i.updateOffset = function () {};
          var qe = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Ze =
              /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
          function $e(t, e) {
            var n,
              i,
              r,
              a = t,
              o = null;
            return (
              Ne(t)
                ? (a = { ms: t._milliseconds, d: t._days, M: t._months })
                : s(t)
                ? ((a = {}), e ? (a[e] = t) : (a.milliseconds = t))
                : (o = qe.exec(t))
                ? ((n = "-" === o[1] ? -1 : 1),
                  (a = {
                    y: 0,
                    d: w(o[yt]) * n,
                    h: w(o[bt]) * n,
                    m: w(o[xt]) * n,
                    s: w(o[_t]) * n,
                    ms: w(Ee(1e3 * o[wt])) * n,
                  }))
                : (o = Ze.exec(t))
                ? ((n = "-" === o[1] ? -1 : 1),
                  (a = {
                    y: Ke(o[2], n),
                    M: Ke(o[3], n),
                    w: Ke(o[4], n),
                    d: Ke(o[5], n),
                    h: Ke(o[6], n),
                    m: Ke(o[7], n),
                    s: Ke(o[8], n),
                  }))
                : null == a
                ? (a = {})
                : "object" === typeof a &&
                  ("from" in a || "to" in a) &&
                  ((r = (function (t, e) {
                    var n;
                    return t.isValid() && e.isValid()
                      ? ((e = Be(e, t)),
                        t.isBefore(e)
                          ? (n = Xe(t, e))
                          : (((n = Xe(e, t)).milliseconds = -n.milliseconds),
                            (n.months = -n.months)),
                        n)
                      : { milliseconds: 0, months: 0 };
                  })(Fe(a.from), Fe(a.to))),
                  ((a = {}).ms = r.milliseconds),
                  (a.M = r.months)),
              (i = new ze(a)),
              Ne(t) && c(t, "_locale") && (i._locale = t._locale),
              i
            );
          }
          function Ke(t, e) {
            var n = t && parseFloat(t.replace(",", "."));
            return (isNaN(n) ? 0 : n) * e;
          }
          function Xe(t, e) {
            var n = {};
            return (
              (n.months = e.month() - t.month() + 12 * (e.year() - t.year())),
              t.clone().add(n.months, "M").isAfter(e) && --n.months,
              (n.milliseconds = +e - +t.clone().add(n.months, "M")),
              n
            );
          }
          function Je(t, e) {
            return function (n, i) {
              var r;
              return (
                null === i ||
                  isNaN(+i) ||
                  (P(
                    e,
                    "moment()." +
                      e +
                      "(period, number) is deprecated. Please use moment()." +
                      e +
                      "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                  ),
                  (r = n),
                  (n = i),
                  (i = r)),
                Qe(this, $e((n = "string" === typeof n ? +n : n), i), t),
                this
              );
            };
          }
          function Qe(t, e, n, r) {
            var a = e._milliseconds,
              o = Ee(e._days),
              s = Ee(e._months);
            t.isValid() &&
              ((r = null == r || r),
              s && Yt(t, Ot(t, "Month") + s * n),
              o && At(t, "Date", Ot(t, "Date") + o * n),
              a && t._d.setTime(t._d.valueOf() + a * n),
              r && i.updateOffset(t, o || s));
          }
          ($e.fn = ze.prototype),
            ($e.invalid = function () {
              return $e(NaN);
            });
          var tn = Je(1, "add"),
            en = Je(-1, "subtract");
          function nn(t, e) {
            var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
              i = t.clone().add(n, "months");
            return (
              -(
                n +
                (e - i < 0
                  ? (e - i) / (i - t.clone().add(n - 1, "months"))
                  : (e - i) / (t.clone().add(n + 1, "months") - i))
              ) || 0
            );
          }
          function rn(t) {
            var e;
            return void 0 === t
              ? this._locale._abbr
              : (null != (e = ge(t)) && (this._locale = e), this);
          }
          (i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
            (i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
          var an = S(
            "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
            function (t) {
              return void 0 === t ? this.localeData() : this.locale(t);
            }
          );
          function on() {
            return this._locale;
          }
          var sn = 1e3,
            ln = 60 * sn,
            un = 60 * ln,
            cn = 3506328 * un;
          function dn(t, e) {
            return ((t % e) + e) % e;
          }
          function hn(t, e, n) {
            return t < 100 && t >= 0
              ? new Date(t + 400, e, n) - cn
              : new Date(t, e, n).valueOf();
          }
          function fn(t, e, n) {
            return t < 100 && t >= 0
              ? Date.UTC(t + 400, e, n) - cn
              : Date.UTC(t, e, n);
          }
          function pn(t, e) {
            H(0, [t, t.length], 0, e);
          }
          function gn(t, e, n, i, r) {
            var a;
            return null == t
              ? Gt(this, i, r).year
              : (e > (a = qt(t, i, r)) && (e = a),
                mn.call(this, t, e, n, i, r));
          }
          function mn(t, e, n, i, r) {
            var a = Ut(t, e, n, i, r),
              o = Ht(a.year, 0, a.dayOfYear);
            return (
              this.year(o.getUTCFullYear()),
              this.month(o.getUTCMonth()),
              this.date(o.getUTCDate()),
              this
            );
          }
          H(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
          }),
            H(0, ["GG", 2], 0, function () {
              return this.isoWeekYear() % 100;
            }),
            pn("gggg", "weekYear"),
            pn("ggggg", "weekYear"),
            pn("GGGG", "isoWeekYear"),
            pn("GGGGG", "isoWeekYear"),
            F("weekYear", "gg"),
            F("isoWeekYear", "GG"),
            Y("weekYear", 1),
            Y("isoWeekYear", 1),
            ut("G", rt),
            ut("g", rt),
            ut("GG", X, q),
            ut("gg", X, q),
            ut("GGGG", et, $),
            ut("gggg", et, $),
            ut("GGGGG", nt, K),
            ut("ggggg", nt, K),
            pt(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
              e[i.substr(0, 2)] = w(t);
            }),
            pt(["gg", "GG"], function (t, e, n, r) {
              e[r] = i.parseTwoDigitYear(t);
            }),
            H("Q", 0, "Qo", "quarter"),
            F("quarter", "Q"),
            Y("quarter", 7),
            ut("Q", G),
            ft("Q", function (t, e) {
              e[vt] = 3 * (w(t) - 1);
            }),
            H("D", ["DD", 2], "Do", "date"),
            F("date", "D"),
            Y("date", 9),
            ut("D", X),
            ut("DD", X, q),
            ut("Do", function (t, e) {
              return t
                ? e._dayOfMonthOrdinalParse || e._ordinalParse
                : e._dayOfMonthOrdinalParseLenient;
            }),
            ft(["D", "DD"], yt),
            ft("Do", function (t, e) {
              e[yt] = w(t.match(X)[0]);
            });
          var vn = Tt("Date", !0);
          H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            F("dayOfYear", "DDD"),
            Y("dayOfYear", 4),
            ut("DDD", tt),
            ut("DDDD", Z),
            ft(["DDD", "DDDD"], function (t, e, n) {
              n._dayOfYear = w(t);
            }),
            H("m", ["mm", 2], 0, "minute"),
            F("minute", "m"),
            Y("minute", 14),
            ut("m", X),
            ut("mm", X, q),
            ft(["m", "mm"], xt);
          var yn = Tt("Minutes", !1);
          H("s", ["ss", 2], 0, "second"),
            F("second", "s"),
            Y("second", 15),
            ut("s", X),
            ut("ss", X, q),
            ft(["s", "ss"], _t);
          var bn,
            xn = Tt("Seconds", !1);
          for (
            H("S", 0, 0, function () {
              return ~~(this.millisecond() / 100);
            }),
              H(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10);
              }),
              H(0, ["SSS", 3], 0, "millisecond"),
              H(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond();
              }),
              H(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond();
              }),
              H(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond();
              }),
              H(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond();
              }),
              H(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond();
              }),
              H(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond();
              }),
              F("millisecond", "ms"),
              Y("millisecond", 16),
              ut("S", tt, G),
              ut("SS", tt, q),
              ut("SSS", tt, Z),
              bn = "SSSS";
            bn.length <= 9;
            bn += "S"
          )
            ut(bn, it);
          function _n(t, e) {
            e[wt] = w(1e3 * ("0." + t));
          }
          for (bn = "S"; bn.length <= 9; bn += "S") ft(bn, _n);
          var wn = Tt("Milliseconds", !1);
          H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
          var kn = b.prototype;
          function Mn(t) {
            return t;
          }
          (kn.add = tn),
            (kn.calendar = function (t, e) {
              var n = t || Fe(),
                r = Be(n, this).startOf("day"),
                a = i.calendarFormat(this, r) || "sameElse",
                o = e && (T(e[a]) ? e[a].call(this, n) : e[a]);
              return this.format(
                o || this.localeData().calendar(a, this, Fe(n))
              );
            }),
            (kn.clone = function () {
              return new b(this);
            }),
            (kn.diff = function (t, e, n) {
              var i, r, a;
              if (!this.isValid()) return NaN;
              if (!(i = Be(t, this)).isValid()) return NaN;
              switch (
                ((r = 6e4 * (i.utcOffset() - this.utcOffset())), (e = L(e)))
              ) {
                case "year":
                  a = nn(this, i) / 12;
                  break;
                case "month":
                  a = nn(this, i);
                  break;
                case "quarter":
                  a = nn(this, i) / 3;
                  break;
                case "second":
                  a = (this - i) / 1e3;
                  break;
                case "minute":
                  a = (this - i) / 6e4;
                  break;
                case "hour":
                  a = (this - i) / 36e5;
                  break;
                case "day":
                  a = (this - i - r) / 864e5;
                  break;
                case "week":
                  a = (this - i - r) / 6048e5;
                  break;
                default:
                  a = this - i;
              }
              return n ? a : _(a);
            }),
            (kn.endOf = function (t) {
              var e;
              if (
                void 0 === (t = L(t)) ||
                "millisecond" === t ||
                !this.isValid()
              )
                return this;
              var n = this._isUTC ? fn : hn;
              switch (t) {
                case "year":
                  e = n(this.year() + 1, 0, 1) - 1;
                  break;
                case "quarter":
                  e =
                    n(this.year(), this.month() - (this.month() % 3) + 3, 1) -
                    1;
                  break;
                case "month":
                  e = n(this.year(), this.month() + 1, 1) - 1;
                  break;
                case "week":
                  e =
                    n(
                      this.year(),
                      this.month(),
                      this.date() - this.weekday() + 7
                    ) - 1;
                  break;
                case "isoWeek":
                  e =
                    n(
                      this.year(),
                      this.month(),
                      this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                  break;
                case "day":
                case "date":
                  e = n(this.year(), this.month(), this.date() + 1) - 1;
                  break;
                case "hour":
                  (e = this._d.valueOf()),
                    (e +=
                      un -
                      dn(e + (this._isUTC ? 0 : this.utcOffset() * ln), un) -
                      1);
                  break;
                case "minute":
                  (e = this._d.valueOf()), (e += ln - dn(e, ln) - 1);
                  break;
                case "second":
                  (e = this._d.valueOf()), (e += sn - dn(e, sn) - 1);
              }
              return this._d.setTime(e), i.updateOffset(this, !0), this;
            }),
            (kn.format = function (t) {
              t || (t = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
              var e = B(this, t);
              return this.localeData().postformat(e);
            }),
            (kn.from = function (t, e) {
              return this.isValid() &&
                ((x(t) && t.isValid()) || Fe(t).isValid())
                ? $e({ to: this, from: t }).locale(this.locale()).humanize(!e)
                : this.localeData().invalidDate();
            }),
            (kn.fromNow = function (t) {
              return this.from(Fe(), t);
            }),
            (kn.to = function (t, e) {
              return this.isValid() &&
                ((x(t) && t.isValid()) || Fe(t).isValid())
                ? $e({ from: this, to: t }).locale(this.locale()).humanize(!e)
                : this.localeData().invalidDate();
            }),
            (kn.toNow = function (t) {
              return this.to(Fe(), t);
            }),
            (kn.get = function (t) {
              return T(this[(t = L(t))]) ? this[t]() : this;
            }),
            (kn.invalidAt = function () {
              return f(this).overflow;
            }),
            (kn.isAfter = function (t, e) {
              var n = x(t) ? t : Fe(t);
              return (
                !(!this.isValid() || !n.isValid()) &&
                ("millisecond" === (e = L(e) || "millisecond")
                  ? this.valueOf() > n.valueOf()
                  : n.valueOf() < this.clone().startOf(e).valueOf())
              );
            }),
            (kn.isBefore = function (t, e) {
              var n = x(t) ? t : Fe(t);
              return (
                !(!this.isValid() || !n.isValid()) &&
                ("millisecond" === (e = L(e) || "millisecond")
                  ? this.valueOf() < n.valueOf()
                  : this.clone().endOf(e).valueOf() < n.valueOf())
              );
            }),
            (kn.isBetween = function (t, e, n, i) {
              var r = x(t) ? t : Fe(t),
                a = x(e) ? e : Fe(e);
              return (
                !!(this.isValid() && r.isValid() && a.isValid()) &&
                ("(" === (i = i || "()")[0]
                  ? this.isAfter(r, n)
                  : !this.isBefore(r, n)) &&
                (")" === i[1] ? this.isBefore(a, n) : !this.isAfter(a, n))
              );
            }),
            (kn.isSame = function (t, e) {
              var n,
                i = x(t) ? t : Fe(t);
              return (
                !(!this.isValid() || !i.isValid()) &&
                ("millisecond" === (e = L(e) || "millisecond")
                  ? this.valueOf() === i.valueOf()
                  : ((n = i.valueOf()),
                    this.clone().startOf(e).valueOf() <= n &&
                      n <= this.clone().endOf(e).valueOf()))
              );
            }),
            (kn.isSameOrAfter = function (t, e) {
              return this.isSame(t, e) || this.isAfter(t, e);
            }),
            (kn.isSameOrBefore = function (t, e) {
              return this.isSame(t, e) || this.isBefore(t, e);
            }),
            (kn.isValid = function () {
              return p(this);
            }),
            (kn.lang = an),
            (kn.locale = rn),
            (kn.localeData = on),
            (kn.max = Re),
            (kn.min = Le),
            (kn.parsingFlags = function () {
              return d({}, f(this));
            }),
            (kn.set = function (t, e) {
              if ("object" === typeof t)
                for (
                  var n = (function (t) {
                      var e = [];
                      for (var n in t) e.push({ unit: n, priority: W[n] });
                      return (
                        e.sort(function (t, e) {
                          return t.priority - e.priority;
                        }),
                        e
                      );
                    })((t = R(t))),
                    i = 0;
                  i < n.length;
                  i++
                )
                  this[n[i].unit](t[n[i].unit]);
              else if (T(this[(t = L(t))])) return this[t](e);
              return this;
            }),
            (kn.startOf = function (t) {
              var e;
              if (
                void 0 === (t = L(t)) ||
                "millisecond" === t ||
                !this.isValid()
              )
                return this;
              var n = this._isUTC ? fn : hn;
              switch (t) {
                case "year":
                  e = n(this.year(), 0, 1);
                  break;
                case "quarter":
                  e = n(this.year(), this.month() - (this.month() % 3), 1);
                  break;
                case "month":
                  e = n(this.year(), this.month(), 1);
                  break;
                case "week":
                  e = n(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                  );
                  break;
                case "isoWeek":
                  e = n(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                  );
                  break;
                case "day":
                case "date":
                  e = n(this.year(), this.month(), this.date());
                  break;
                case "hour":
                  (e = this._d.valueOf()),
                    (e -= dn(
                      e + (this._isUTC ? 0 : this.utcOffset() * ln),
                      un
                    ));
                  break;
                case "minute":
                  (e = this._d.valueOf()), (e -= dn(e, ln));
                  break;
                case "second":
                  (e = this._d.valueOf()), (e -= dn(e, sn));
              }
              return this._d.setTime(e), i.updateOffset(this, !0), this;
            }),
            (kn.subtract = en),
            (kn.toArray = function () {
              var t = this;
              return [
                t.year(),
                t.month(),
                t.date(),
                t.hour(),
                t.minute(),
                t.second(),
                t.millisecond(),
              ];
            }),
            (kn.toObject = function () {
              var t = this;
              return {
                years: t.year(),
                months: t.month(),
                date: t.date(),
                hours: t.hours(),
                minutes: t.minutes(),
                seconds: t.seconds(),
                milliseconds: t.milliseconds(),
              };
            }),
            (kn.toDate = function () {
              return new Date(this.valueOf());
            }),
            (kn.toISOString = function (t) {
              if (!this.isValid()) return null;
              var e = !0 !== t,
                n = e ? this.clone().utc() : this;
              return n.year() < 0 || n.year() > 9999
                ? B(
                    n,
                    e
                      ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                      : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
                  )
                : T(Date.prototype.toISOString)
                ? e
                  ? this.toDate().toISOString()
                  : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                      .toISOString()
                      .replace("Z", B(n, "Z"))
                : B(
                    n,
                    e
                      ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                      : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
                  );
            }),
            (kn.inspect = function () {
              if (!this.isValid())
                return "moment.invalid(/* " + this._i + " */)";
              var t = "moment",
                e = "";
              this.isLocal() ||
                ((t =
                  0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
                (e = "Z"));
              var n = "[" + t + '("]',
                i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                r = e + '[")]';
              return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + r);
            }),
            (kn.toJSON = function () {
              return this.isValid() ? this.toISOString() : null;
            }),
            (kn.toString = function () {
              return this.clone()
                .locale("en")
                .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
            }),
            (kn.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (kn.valueOf = function () {
              return this._d.valueOf() - 6e4 * (this._offset || 0);
            }),
            (kn.creationData = function () {
              return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict,
              };
            }),
            (kn.year = Pt),
            (kn.isLeapYear = function () {
              return Dt(this.year());
            }),
            (kn.weekYear = function (t) {
              return gn.call(
                this,
                t,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy
              );
            }),
            (kn.isoWeekYear = function (t) {
              return gn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
            }),
            (kn.quarter = kn.quarters =
              function (t) {
                return null == t
                  ? Math.ceil((this.month() + 1) / 3)
                  : this.month(3 * (t - 1) + (this.month() % 3));
              }),
            (kn.month = zt),
            (kn.daysInMonth = function () {
              return It(this.year(), this.month());
            }),
            (kn.week = kn.weeks =
              function (t) {
                var e = this.localeData().week(this);
                return null == t ? e : this.add(7 * (t - e), "d");
              }),
            (kn.isoWeek = kn.isoWeeks =
              function (t) {
                var e = Gt(this, 1, 4).week;
                return null == t ? e : this.add(7 * (t - e), "d");
              }),
            (kn.weeksInYear = function () {
              var t = this.localeData()._week;
              return qt(this.year(), t.dow, t.doy);
            }),
            (kn.isoWeeksInYear = function () {
              return qt(this.year(), 1, 4);
            }),
            (kn.date = vn),
            (kn.day = kn.days =
              function (t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t
                  ? ((t = (function (t, e) {
                      return "string" !== typeof t
                        ? t
                        : isNaN(t)
                        ? "number" === typeof (t = e.weekdaysParse(t))
                          ? t
                          : null
                        : parseInt(t, 10);
                    })(t, this.localeData())),
                    this.add(t - e, "d"))
                  : e;
              }),
            (kn.weekday = function (t) {
              if (!this.isValid()) return null != t ? this : NaN;
              var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
              return null == t ? e : this.add(t - e, "d");
            }),
            (kn.isoWeekday = function (t) {
              if (!this.isValid()) return null != t ? this : NaN;
              if (null != t) {
                var e = (function (t, e) {
                  return "string" === typeof t
                    ? e.weekdaysParse(t) % 7 || 7
                    : isNaN(t)
                    ? null
                    : t;
                })(t, this.localeData());
                return this.day(this.day() % 7 ? e : e - 7);
              }
              return this.day() || 7;
            }),
            (kn.dayOfYear = function (t) {
              var e =
                Math.round(
                  (this.clone().startOf("day") - this.clone().startOf("year")) /
                    864e5
                ) + 1;
              return null == t ? e : this.add(t - e, "d");
            }),
            (kn.hour = kn.hours = se),
            (kn.minute = kn.minutes = yn),
            (kn.second = kn.seconds = xn),
            (kn.millisecond = kn.milliseconds = wn),
            (kn.utcOffset = function (t, e, n) {
              var r,
                a = this._offset || 0;
              if (!this.isValid()) return null != t ? this : NaN;
              if (null != t) {
                if ("string" === typeof t) {
                  if (null === (t = He(ot, t))) return this;
                } else Math.abs(t) < 16 && !n && (t *= 60);
                return (
                  !this._isUTC && e && (r = Ue(this)),
                  (this._offset = t),
                  (this._isUTC = !0),
                  null != r && this.add(r, "m"),
                  a !== t &&
                    (!e || this._changeInProgress
                      ? Qe(this, $e(t - a, "m"), 1, !1)
                      : this._changeInProgress ||
                        ((this._changeInProgress = !0),
                        i.updateOffset(this, !0),
                        (this._changeInProgress = null))),
                  this
                );
              }
              return this._isUTC ? a : Ue(this);
            }),
            (kn.utc = function (t) {
              return this.utcOffset(0, t);
            }),
            (kn.local = function (t) {
              return (
                this._isUTC &&
                  (this.utcOffset(0, t),
                  (this._isUTC = !1),
                  t && this.subtract(Ue(this), "m")),
                this
              );
            }),
            (kn.parseZone = function () {
              if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
              else if ("string" === typeof this._i) {
                var t = He(at, this._i);
                null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
              }
              return this;
            }),
            (kn.hasAlignedHourOffset = function (t) {
              return (
                !!this.isValid() &&
                ((t = t ? Fe(t).utcOffset() : 0),
                (this.utcOffset() - t) % 60 === 0)
              );
            }),
            (kn.isDST = function () {
              return (
                this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset()
              );
            }),
            (kn.isLocal = function () {
              return !!this.isValid() && !this._isUTC;
            }),
            (kn.isUtcOffset = function () {
              return !!this.isValid() && this._isUTC;
            }),
            (kn.isUtc = Ge),
            (kn.isUTC = Ge),
            (kn.zoneAbbr = function () {
              return this._isUTC ? "UTC" : "";
            }),
            (kn.zoneName = function () {
              return this._isUTC ? "Coordinated Universal Time" : "";
            }),
            (kn.dates = S(
              "dates accessor is deprecated. Use date instead.",
              vn
            )),
            (kn.months = S(
              "months accessor is deprecated. Use month instead",
              zt
            )),
            (kn.years = S(
              "years accessor is deprecated. Use year instead",
              Pt
            )),
            (kn.zone = S(
              "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
              function (t, e) {
                return null != t
                  ? ("string" !== typeof t && (t = -t),
                    this.utcOffset(t, e),
                    this)
                  : -this.utcOffset();
              }
            )),
            (kn.isDSTShifted = S(
              "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
              function () {
                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                var t = {};
                if ((v(t, this), (t = Ae(t))._a)) {
                  var e = t._isUTC ? h(t._a) : Fe(t._a);
                  this._isDSTShifted =
                    this.isValid() && k(t._a, e.toArray()) > 0;
                } else this._isDSTShifted = !1;
                return this._isDSTShifted;
              }
            ));
          var Sn = A.prototype;
          function Dn(t, e, n, i) {
            var r = ge(),
              a = h().set(i, e);
            return r[n](a, t);
          }
          function Cn(t, e, n) {
            if ((s(t) && ((e = t), (t = void 0)), (t = t || ""), null != e))
              return Dn(t, e, n, "month");
            var i,
              r = [];
            for (i = 0; i < 12; i++) r[i] = Dn(t, i, n, "month");
            return r;
          }
          function Pn(t, e, n, i) {
            "boolean" === typeof t
              ? (s(e) && ((n = e), (e = void 0)), (e = e || ""))
              : ((n = e = t),
                (t = !1),
                s(e) && ((n = e), (e = void 0)),
                (e = e || ""));
            var r,
              a = ge(),
              o = t ? a._week.dow : 0;
            if (null != n) return Dn(e, (n + o) % 7, i, "day");
            var l = [];
            for (r = 0; r < 7; r++) l[r] = Dn(e, (r + o) % 7, i, "day");
            return l;
          }
          (Sn.calendar = function (t, e, n) {
            var i = this._calendar[t] || this._calendar.sameElse;
            return T(i) ? i.call(e, n) : i;
          }),
            (Sn.longDateFormat = function (t) {
              var e = this._longDateFormat[t],
                n = this._longDateFormat[t.toUpperCase()];
              return e || !n
                ? e
                : ((this._longDateFormat[t] = n.replace(
                    /MMMM|MM|DD|dddd/g,
                    function (t) {
                      return t.slice(1);
                    }
                  )),
                  this._longDateFormat[t]);
            }),
            (Sn.invalidDate = function () {
              return this._invalidDate;
            }),
            (Sn.ordinal = function (t) {
              return this._ordinal.replace("%d", t);
            }),
            (Sn.preparse = Mn),
            (Sn.postformat = Mn),
            (Sn.relativeTime = function (t, e, n, i) {
              var r = this._relativeTime[n];
              return T(r) ? r(t, e, n, i) : r.replace(/%d/i, t);
            }),
            (Sn.pastFuture = function (t, e) {
              var n = this._relativeTime[t > 0 ? "future" : "past"];
              return T(n) ? n(e) : n.replace(/%s/i, e);
            }),
            (Sn.set = function (t) {
              var e, n;
              for (n in t) T((e = t[n])) ? (this[n] = e) : (this["_" + n] = e);
              (this._config = t),
                (this._dayOfMonthOrdinalParseLenient = new RegExp(
                  (this._dayOfMonthOrdinalParse.source ||
                    this._ordinalParse.source) +
                    "|" +
                    /\d{1,2}/.source
                ));
            }),
            (Sn.months = function (t, e) {
              return t
                ? r(this._months)
                  ? this._months[t.month()]
                  : this._months[
                      (this._months.isFormat || Ft).test(e)
                        ? "format"
                        : "standalone"
                    ][t.month()]
                : r(this._months)
                ? this._months
                : this._months.standalone;
            }),
            (Sn.monthsShort = function (t, e) {
              return t
                ? r(this._monthsShort)
                  ? this._monthsShort[t.month()]
                  : this._monthsShort[Ft.test(e) ? "format" : "standalone"][
                      t.month()
                    ]
                : r(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
            }),
            (Sn.monthsParse = function (t, e, n) {
              var i, r, a;
              if (this._monthsParseExact) return Wt.call(this, t, e, n);
              for (
                this._monthsParse ||
                  ((this._monthsParse = []),
                  (this._longMonthsParse = []),
                  (this._shortMonthsParse = [])),
                  i = 0;
                i < 12;
                i++
              ) {
                if (
                  ((r = h([2e3, i])),
                  n &&
                    !this._longMonthsParse[i] &&
                    ((this._longMonthsParse[i] = new RegExp(
                      "^" + this.months(r, "").replace(".", "") + "$",
                      "i"
                    )),
                    (this._shortMonthsParse[i] = new RegExp(
                      "^" + this.monthsShort(r, "").replace(".", "") + "$",
                      "i"
                    ))),
                  n ||
                    this._monthsParse[i] ||
                    ((a =
                      "^" +
                      this.months(r, "") +
                      "|^" +
                      this.monthsShort(r, "")),
                    (this._monthsParse[i] = new RegExp(
                      a.replace(".", ""),
                      "i"
                    ))),
                  n && "MMMM" === e && this._longMonthsParse[i].test(t))
                )
                  return i;
                if (n && "MMM" === e && this._shortMonthsParse[i].test(t))
                  return i;
                if (!n && this._monthsParse[i].test(t)) return i;
              }
            }),
            (Sn.monthsRegex = function (t) {
              return this._monthsParseExact
                ? (c(this, "_monthsRegex") || jt.call(this),
                  t ? this._monthsStrictRegex : this._monthsRegex)
                : (c(this, "_monthsRegex") || (this._monthsRegex = Et),
                  this._monthsStrictRegex && t
                    ? this._monthsStrictRegex
                    : this._monthsRegex);
            }),
            (Sn.monthsShortRegex = function (t) {
              return this._monthsParseExact
                ? (c(this, "_monthsRegex") || jt.call(this),
                  t ? this._monthsShortStrictRegex : this._monthsShortRegex)
                : (c(this, "_monthsShortRegex") ||
                    (this._monthsShortRegex = Nt),
                  this._monthsShortStrictRegex && t
                    ? this._monthsShortStrictRegex
                    : this._monthsShortRegex);
            }),
            (Sn.week = function (t) {
              return Gt(t, this._week.dow, this._week.doy).week;
            }),
            (Sn.firstDayOfYear = function () {
              return this._week.doy;
            }),
            (Sn.firstDayOfWeek = function () {
              return this._week.dow;
            }),
            (Sn.weekdays = function (t, e) {
              var n = r(this._weekdays)
                ? this._weekdays
                : this._weekdays[
                    t && !0 !== t && this._weekdays.isFormat.test(e)
                      ? "format"
                      : "standalone"
                  ];
              return !0 === t ? Zt(n, this._week.dow) : t ? n[t.day()] : n;
            }),
            (Sn.weekdaysMin = function (t) {
              return !0 === t
                ? Zt(this._weekdaysMin, this._week.dow)
                : t
                ? this._weekdaysMin[t.day()]
                : this._weekdaysMin;
            }),
            (Sn.weekdaysShort = function (t) {
              return !0 === t
                ? Zt(this._weekdaysShort, this._week.dow)
                : t
                ? this._weekdaysShort[t.day()]
                : this._weekdaysShort;
            }),
            (Sn.weekdaysParse = function (t, e, n) {
              var i, r, a;
              if (this._weekdaysParseExact) return Jt.call(this, t, e, n);
              for (
                this._weekdaysParse ||
                  ((this._weekdaysParse = []),
                  (this._minWeekdaysParse = []),
                  (this._shortWeekdaysParse = []),
                  (this._fullWeekdaysParse = [])),
                  i = 0;
                i < 7;
                i++
              ) {
                if (
                  ((r = h([2e3, 1]).day(i)),
                  n &&
                    !this._fullWeekdaysParse[i] &&
                    ((this._fullWeekdaysParse[i] = new RegExp(
                      "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
                      "i"
                    )),
                    (this._shortWeekdaysParse[i] = new RegExp(
                      "^" +
                        this.weekdaysShort(r, "").replace(".", "\\.?") +
                        "$",
                      "i"
                    )),
                    (this._minWeekdaysParse[i] = new RegExp(
                      "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
                      "i"
                    ))),
                  this._weekdaysParse[i] ||
                    ((a =
                      "^" +
                      this.weekdays(r, "") +
                      "|^" +
                      this.weekdaysShort(r, "") +
                      "|^" +
                      this.weekdaysMin(r, "")),
                    (this._weekdaysParse[i] = new RegExp(
                      a.replace(".", ""),
                      "i"
                    ))),
                  n && "dddd" === e && this._fullWeekdaysParse[i].test(t))
                )
                  return i;
                if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t))
                  return i;
                if (n && "dd" === e && this._minWeekdaysParse[i].test(t))
                  return i;
                if (!n && this._weekdaysParse[i].test(t)) return i;
              }
            }),
            (Sn.weekdaysRegex = function (t) {
              return this._weekdaysParseExact
                ? (c(this, "_weekdaysRegex") || ne.call(this),
                  t ? this._weekdaysStrictRegex : this._weekdaysRegex)
                : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Qt),
                  this._weekdaysStrictRegex && t
                    ? this._weekdaysStrictRegex
                    : this._weekdaysRegex);
            }),
            (Sn.weekdaysShortRegex = function (t) {
              return this._weekdaysParseExact
                ? (c(this, "_weekdaysRegex") || ne.call(this),
                  t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                : (c(this, "_weekdaysShortRegex") ||
                    (this._weekdaysShortRegex = te),
                  this._weekdaysShortStrictRegex && t
                    ? this._weekdaysShortStrictRegex
                    : this._weekdaysShortRegex);
            }),
            (Sn.weekdaysMinRegex = function (t) {
              return this._weekdaysParseExact
                ? (c(this, "_weekdaysRegex") || ne.call(this),
                  t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                : (c(this, "_weekdaysMinRegex") ||
                    (this._weekdaysMinRegex = ee),
                  this._weekdaysMinStrictRegex && t
                    ? this._weekdaysMinStrictRegex
                    : this._weekdaysMinRegex);
            }),
            (Sn.isPM = function (t) {
              return "p" === (t + "").toLowerCase().charAt(0);
            }),
            (Sn.meridiem = function (t, e, n) {
              return t > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
            }),
            fe("en", {
              dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function (t) {
                var e = t % 10;
                return (
                  t +
                  (1 === w((t % 100) / 10)
                    ? "th"
                    : 1 === e
                    ? "st"
                    : 2 === e
                    ? "nd"
                    : 3 === e
                    ? "rd"
                    : "th")
                );
              },
            }),
            (i.lang = S(
              "moment.lang is deprecated. Use moment.locale instead.",
              fe
            )),
            (i.langData = S(
              "moment.langData is deprecated. Use moment.localeData instead.",
              ge
            ));
          var Tn = Math.abs;
          function On(t, e, n, i) {
            var r = $e(e, n);
            return (
              (t._milliseconds += i * r._milliseconds),
              (t._days += i * r._days),
              (t._months += i * r._months),
              t._bubble()
            );
          }
          function An(t) {
            return t < 0 ? Math.floor(t) : Math.ceil(t);
          }
          function In(t) {
            return (4800 * t) / 146097;
          }
          function Fn(t) {
            return (146097 * t) / 4800;
          }
          function Ln(t) {
            return function () {
              return this.as(t);
            };
          }
          var Rn = Ln("ms"),
            Wn = Ln("s"),
            Yn = Ln("m"),
            zn = Ln("h"),
            Nn = Ln("d"),
            En = Ln("w"),
            jn = Ln("M"),
            Vn = Ln("Q"),
            Hn = Ln("y");
          function Bn(t) {
            return function () {
              return this.isValid() ? this._data[t] : NaN;
            };
          }
          var Un = Bn("milliseconds"),
            Gn = Bn("seconds"),
            qn = Bn("minutes"),
            Zn = Bn("hours"),
            $n = Bn("days"),
            Kn = Bn("months"),
            Xn = Bn("years"),
            Jn = Math.round,
            Qn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };
          function ti(t, e, n, i, r) {
            return r.relativeTime(e || 1, !!n, t, i);
          }
          var ei = Math.abs;
          function ni(t) {
            return (t > 0) - (t < 0) || +t;
          }
          function ii() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t,
              e,
              n = ei(this._milliseconds) / 1e3,
              i = ei(this._days),
              r = ei(this._months);
            (t = _(n / 60)), (e = _(t / 60)), (n %= 60), (t %= 60);
            var a = _(r / 12),
              o = (r %= 12),
              s = i,
              l = e,
              u = t,
              c = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
              d = this.asSeconds();
            if (!d) return "P0D";
            var h = d < 0 ? "-" : "",
              f = ni(this._months) !== ni(d) ? "-" : "",
              p = ni(this._days) !== ni(d) ? "-" : "",
              g = ni(this._milliseconds) !== ni(d) ? "-" : "";
            return (
              h +
              "P" +
              (a ? f + a + "Y" : "") +
              (o ? f + o + "M" : "") +
              (s ? p + s + "D" : "") +
              (l || u || c ? "T" : "") +
              (l ? g + l + "H" : "") +
              (u ? g + u + "M" : "") +
              (c ? g + c + "S" : "")
            );
          }
          var ri = ze.prototype;
          return (
            (ri.isValid = function () {
              return this._isValid;
            }),
            (ri.abs = function () {
              var t = this._data;
              return (
                (this._milliseconds = Tn(this._milliseconds)),
                (this._days = Tn(this._days)),
                (this._months = Tn(this._months)),
                (t.milliseconds = Tn(t.milliseconds)),
                (t.seconds = Tn(t.seconds)),
                (t.minutes = Tn(t.minutes)),
                (t.hours = Tn(t.hours)),
                (t.months = Tn(t.months)),
                (t.years = Tn(t.years)),
                this
              );
            }),
            (ri.add = function (t, e) {
              return On(this, t, e, 1);
            }),
            (ri.subtract = function (t, e) {
              return On(this, t, e, -1);
            }),
            (ri.as = function (t) {
              if (!this.isValid()) return NaN;
              var e,
                n,
                i = this._milliseconds;
              if ("month" === (t = L(t)) || "quarter" === t || "year" === t)
                switch (
                  ((e = this._days + i / 864e5), (n = this._months + In(e)), t)
                ) {
                  case "month":
                    return n;
                  case "quarter":
                    return n / 3;
                  case "year":
                    return n / 12;
                }
              else
                switch (((e = this._days + Math.round(Fn(this._months))), t)) {
                  case "week":
                    return e / 7 + i / 6048e5;
                  case "day":
                    return e + i / 864e5;
                  case "hour":
                    return 24 * e + i / 36e5;
                  case "minute":
                    return 1440 * e + i / 6e4;
                  case "second":
                    return 86400 * e + i / 1e3;
                  case "millisecond":
                    return Math.floor(864e5 * e) + i;
                  default:
                    throw new Error("Unknown unit " + t);
                }
            }),
            (ri.asMilliseconds = Rn),
            (ri.asSeconds = Wn),
            (ri.asMinutes = Yn),
            (ri.asHours = zn),
            (ri.asDays = Nn),
            (ri.asWeeks = En),
            (ri.asMonths = jn),
            (ri.asQuarters = Vn),
            (ri.asYears = Hn),
            (ri.valueOf = function () {
              return this.isValid()
                ? this._milliseconds +
                    864e5 * this._days +
                    (this._months % 12) * 2592e6 +
                    31536e6 * w(this._months / 12)
                : NaN;
            }),
            (ri._bubble = function () {
              var t,
                e,
                n,
                i,
                r,
                a = this._milliseconds,
                o = this._days,
                s = this._months,
                l = this._data;
              return (
                (a >= 0 && o >= 0 && s >= 0) ||
                  (a <= 0 && o <= 0 && s <= 0) ||
                  ((a += 864e5 * An(Fn(s) + o)), (o = 0), (s = 0)),
                (l.milliseconds = a % 1e3),
                (t = _(a / 1e3)),
                (l.seconds = t % 60),
                (e = _(t / 60)),
                (l.minutes = e % 60),
                (n = _(e / 60)),
                (l.hours = n % 24),
                (o += _(n / 24)),
                (r = _(In(o))),
                (s += r),
                (o -= An(Fn(r))),
                (i = _(s / 12)),
                (s %= 12),
                (l.days = o),
                (l.months = s),
                (l.years = i),
                this
              );
            }),
            (ri.clone = function () {
              return $e(this);
            }),
            (ri.get = function (t) {
              return (t = L(t)), this.isValid() ? this[t + "s"]() : NaN;
            }),
            (ri.milliseconds = Un),
            (ri.seconds = Gn),
            (ri.minutes = qn),
            (ri.hours = Zn),
            (ri.days = $n),
            (ri.weeks = function () {
              return _(this.days() / 7);
            }),
            (ri.months = Kn),
            (ri.years = Xn),
            (ri.humanize = function (t) {
              if (!this.isValid()) return this.localeData().invalidDate();
              var e = this.localeData(),
                n = (function (t, e, n) {
                  var i = $e(t).abs(),
                    r = Jn(i.as("s")),
                    a = Jn(i.as("m")),
                    o = Jn(i.as("h")),
                    s = Jn(i.as("d")),
                    l = Jn(i.as("M")),
                    u = Jn(i.as("y")),
                    c = (r <= Qn.ss && ["s", r]) ||
                      (r < Qn.s && ["ss", r]) ||
                      (a <= 1 && ["m"]) ||
                      (a < Qn.m && ["mm", a]) ||
                      (o <= 1 && ["h"]) ||
                      (o < Qn.h && ["hh", o]) ||
                      (s <= 1 && ["d"]) ||
                      (s < Qn.d && ["dd", s]) ||
                      (l <= 1 && ["M"]) ||
                      (l < Qn.M && ["MM", l]) ||
                      (u <= 1 && ["y"]) || ["yy", u];
                  return (
                    (c[2] = e), (c[3] = +t > 0), (c[4] = n), ti.apply(null, c)
                  );
                })(this, !t, e);
              return t && (n = e.pastFuture(+this, n)), e.postformat(n);
            }),
            (ri.toISOString = ii),
            (ri.toString = ii),
            (ri.toJSON = ii),
            (ri.locale = rn),
            (ri.localeData = on),
            (ri.toIsoString = S(
              "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
              ii
            )),
            (ri.lang = an),
            H("X", 0, 0, "unix"),
            H("x", 0, 0, "valueOf"),
            ut("x", rt),
            ut("X", /[+-]?\d+(\.\d{1,3})?/),
            ft("X", function (t, e, n) {
              n._d = new Date(1e3 * parseFloat(t, 10));
            }),
            ft("x", function (t, e, n) {
              n._d = new Date(w(t));
            }),
            (i.version = "2.24.0"),
            (e = Fe),
            (i.fn = kn),
            (i.min = function () {
              return We("isBefore", [].slice.call(arguments, 0));
            }),
            (i.max = function () {
              return We("isAfter", [].slice.call(arguments, 0));
            }),
            (i.now = function () {
              return Date.now ? Date.now() : +new Date();
            }),
            (i.utc = h),
            (i.unix = function (t) {
              return Fe(1e3 * t);
            }),
            (i.months = function (t, e) {
              return Cn(t, e, "months");
            }),
            (i.isDate = l),
            (i.locale = fe),
            (i.invalid = g),
            (i.duration = $e),
            (i.isMoment = x),
            (i.weekdays = function (t, e, n) {
              return Pn(t, e, n, "weekdays");
            }),
            (i.parseZone = function () {
              return Fe.apply(null, arguments).parseZone();
            }),
            (i.localeData = ge),
            (i.isDuration = Ne),
            (i.monthsShort = function (t, e) {
              return Cn(t, e, "monthsShort");
            }),
            (i.weekdaysMin = function (t, e, n) {
              return Pn(t, e, n, "weekdaysMin");
            }),
            (i.defineLocale = pe),
            (i.updateLocale = function (t, e) {
              if (null != e) {
                var n,
                  i,
                  r = le;
                null != (i = he(t)) && (r = i._config),
                  (e = O(r, e)),
                  ((n = new A(e)).parentLocale = ue[t]),
                  (ue[t] = n),
                  fe(t);
              } else
                null != ue[t] &&
                  (null != ue[t].parentLocale
                    ? (ue[t] = ue[t].parentLocale)
                    : null != ue[t] && delete ue[t]);
              return ue[t];
            }),
            (i.locales = function () {
              return D(ue);
            }),
            (i.weekdaysShort = function (t, e, n) {
              return Pn(t, e, n, "weekdaysShort");
            }),
            (i.normalizeUnits = L),
            (i.relativeTimeRounding = function (t) {
              return void 0 === t
                ? Jn
                : "function" === typeof t && ((Jn = t), !0);
            }),
            (i.relativeTimeThreshold = function (t, e) {
              return (
                void 0 !== Qn[t] &&
                (void 0 === e
                  ? Qn[t]
                  : ((Qn[t] = e), "s" === t && (Qn.ss = e - 1), !0))
              );
            }),
            (i.calendarFormat = function (t, e) {
              var n = t.diff(e, "days", !0);
              return n < -6
                ? "sameElse"
                : n < -1
                ? "lastWeek"
                : n < 0
                ? "lastDay"
                : n < 1
                ? "sameDay"
                : n < 2
                ? "nextDay"
                : n < 7
                ? "nextWeek"
                : "sameElse";
            }),
            (i.prototype = kn),
            (i.HTML5_FMT = {
              DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
              DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
              DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
              DATE: "YYYY-MM-DD",
              TIME: "HH:mm",
              TIME_SECONDS: "HH:mm:ss",
              TIME_MS: "HH:mm:ss.SSS",
              WEEK: "GGGG-[W]WW",
              MONTH: "YYYY-MM",
            }),
            i
          );
        })();
      }.call(this, n(144)(t)));
    },
    function (t, e, n) {
      var i = n(145);
      t.exports = function (t, e) {
        return i(t, e);
      };
    },
    function (t, e, n) {
      var i = n(161),
        r = n(166),
        a = n(230),
        o = n(234),
        s = n(252),
        l = n(131),
        u = n(168),
        c = n(170),
        d = 1,
        h = "[object Arguments]",
        f = "[object Array]",
        p = "[object Object]",
        g = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, n, m, v, y) {
        var b = l(t),
          x = l(e),
          _ = b ? f : s(t),
          w = x ? f : s(e),
          k = (_ = _ == h ? p : _) == p,
          M = (w = w == h ? p : w) == p,
          S = _ == w;
        if (S && u(t)) {
          if (!u(e)) return !1;
          (b = !0), (k = !1);
        }
        if (S && !k)
          return (
            y || (y = new i()),
            b || c(t) ? r(t, e, n, m, v, y) : a(t, e, _, n, m, v, y)
          );
        if (!(n & d)) {
          var D = k && g.call(t, "__wrapped__"),
            C = M && g.call(e, "__wrapped__");
          if (D || C) {
            var P = D ? t.value() : t,
              T = C ? e.value() : e;
            return y || (y = new i()), v(P, T, n, m, y);
          }
        }
        return !!S && (y || (y = new i()), o(t, e, n, m, v, y));
      };
    },
    function (t, e) {
      t.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    function (t, e, n) {
      var i = n(137),
        r = Array.prototype.splice;
      t.exports = function (t) {
        var e = this.__data__,
          n = i(e, t);
        return (
          !(n < 0) &&
          (n == e.length - 1 ? e.pop() : r.call(e, n, 1), --this.size, !0)
        );
      };
    },
    function (t, e, n) {
      var i = n(137);
      t.exports = function (t) {
        var e = this.__data__,
          n = i(e, t);
        return n < 0 ? void 0 : e[n][1];
      };
    },
    function (t, e, n) {
      var i = n(137);
      t.exports = function (t) {
        return i(this.__data__, t) > -1;
      };
    },
    function (t, e, n) {
      var i = n(137);
      t.exports = function (t, e) {
        var n = this.__data__,
          r = i(n, t);
        return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
      };
    },
    function (t, e, n) {
      var i = n(136);
      t.exports = function () {
        (this.__data__ = new i()), (this.size = 0);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = this.__data__,
          n = e.delete(t);
        return (this.size = e.size), n;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return this.__data__.get(t);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    function (t, e, n) {
      var i = n(136),
        r = n(146),
        a = n(148),
        o = 200;
      t.exports = function (t, e) {
        var n = this.__data__;
        if (n instanceof i) {
          var s = n.__data__;
          if (!r || s.length < o - 1)
            return s.push([t, e]), (this.size = ++n.size), this;
          n = this.__data__ = new a(s);
        }
        return n.set(t, e), (this.size = n.size), this;
      };
    },
    function (t, e, n) {
      var i = n(163),
        r = n(210),
        a = n(147),
        o = n(165),
        s = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        u = Object.prototype,
        c = l.toString,
        d = u.hasOwnProperty,
        h = RegExp(
          "^" +
            c
              .call(d)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      t.exports = function (t) {
        return !(!a(t) || r(t)) && (i(t) ? h : s).test(o(t));
      };
    },
    function (t, e, n) {
      var i = n(138),
        r = Object.prototype,
        a = r.hasOwnProperty,
        o = r.toString,
        s = i ? i.toStringTag : void 0;
      t.exports = function (t) {
        var e = a.call(t, s),
          n = t[s];
        try {
          t[s] = void 0;
          var i = !0;
        } catch (l) {}
        var r = o.call(t);
        return i && (e ? (t[s] = n) : delete t[s]), r;
      };
    },
    function (t, e) {
      var n = Object.prototype.toString;
      t.exports = function (t) {
        return n.call(t);
      };
    },
    function (t, e, n) {
      var i = n(211),
        r = (function () {
          var t = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || "");
          return t ? "Symbol(src)_1." + t : "";
        })();
      t.exports = function (t) {
        return !!r && r in t;
      };
    },
    function (t, e, n) {
      var i = n(130)["__core-js_shared__"];
      t.exports = i;
    },
    function (t, e) {
      t.exports = function (t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    function (t, e, n) {
      var i = n(214),
        r = n(136),
        a = n(146);
      t.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new i(),
            map: new (a || r)(),
            string: new i(),
          });
      };
    },
    function (t, e, n) {
      var i = n(215),
        r = n(216),
        a = n(217),
        o = n(218),
        s = n(219);
      function l(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }
      (l.prototype.clear = i),
        (l.prototype.delete = r),
        (l.prototype.get = a),
        (l.prototype.has = o),
        (l.prototype.set = s),
        (t.exports = l);
    },
    function (t, e, n) {
      var i = n(139);
      t.exports = function () {
        (this.__data__ = i ? i(null) : {}), (this.size = 0);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      };
    },
    function (t, e, n) {
      var i = n(139),
        r = "__lodash_hash_undefined__",
        a = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        if (i) {
          var n = e[t];
          return n === r ? void 0 : n;
        }
        return a.call(e, t) ? e[t] : void 0;
      };
    },
    function (t, e, n) {
      var i = n(139),
        r = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        return i ? void 0 !== e[t] : r.call(e, t);
      };
    },
    function (t, e, n) {
      var i = n(139),
        r = "__lodash_hash_undefined__";
      t.exports = function (t, e) {
        var n = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (n[t] = i && void 0 === e ? r : e),
          this
        );
      };
    },
    function (t, e, n) {
      var i = n(140);
      t.exports = function (t) {
        var e = i(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
    },
    function (t, e, n) {
      var i = n(140);
      t.exports = function (t) {
        return i(this, t).get(t);
      };
    },
    function (t, e, n) {
      var i = n(140);
      t.exports = function (t) {
        return i(this, t).has(t);
      };
    },
    function (t, e, n) {
      var i = n(140);
      t.exports = function (t, e) {
        var n = i(this, t),
          r = n.size;
        return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
      };
    },
    function (t, e, n) {
      var i = n(148),
        r = n(226),
        a = n(227);
      function o(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.__data__ = new i(); ++e < n; ) this.add(t[e]);
      }
      (o.prototype.add = o.prototype.push = r),
        (o.prototype.has = a),
        (t.exports = o);
    },
    function (t, e) {
      var n = "__lodash_hash_undefined__";
      t.exports = function (t) {
        return this.__data__.set(t, n), this;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, i = null == t ? 0 : t.length; ++n < i; )
          if (e(t[n], n, t)) return !0;
        return !1;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        return t.has(e);
      };
    },
    function (t, e, n) {
      var i = n(138),
        r = n(231),
        a = n(162),
        o = n(166),
        s = n(232),
        l = n(233),
        u = 1,
        c = 2,
        d = "[object Boolean]",
        h = "[object Date]",
        f = "[object Error]",
        p = "[object Map]",
        g = "[object Number]",
        m = "[object RegExp]",
        v = "[object Set]",
        y = "[object String]",
        b = "[object Symbol]",
        x = "[object ArrayBuffer]",
        _ = "[object DataView]",
        w = i ? i.prototype : void 0,
        k = w ? w.valueOf : void 0;
      t.exports = function (t, e, n, i, w, M, S) {
        switch (n) {
          case _:
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              return !1;
            (t = t.buffer), (e = e.buffer);
          case x:
            return !(t.byteLength != e.byteLength || !M(new r(t), new r(e)));
          case d:
          case h:
          case g:
            return a(+t, +e);
          case f:
            return t.name == e.name && t.message == e.message;
          case m:
          case y:
            return t == e + "";
          case p:
            var D = s;
          case v:
            var C = i & u;
            if ((D || (D = l), t.size != e.size && !C)) return !1;
            var P = S.get(t);
            if (P) return P == e;
            (i |= c), S.set(t, e);
            var T = o(D(t), D(e), i, w, M, S);
            return S.delete(t), T;
          case b:
            if (k) return k.call(t) == k.call(e);
        }
        return !1;
      };
    },
    function (t, e, n) {
      var i = n(130).Uint8Array;
      t.exports = i;
    },
    function (t, e) {
      t.exports = function (t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (t, i) {
            n[++e] = [i, t];
          }),
          n
        );
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (t) {
            n[++e] = t;
          }),
          n
        );
      };
    },
    function (t, e, n) {
      var i = n(235),
        r = 1,
        a = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, n, o, s, l) {
        var u = n & r,
          c = i(t),
          d = c.length;
        if (d != i(e).length && !u) return !1;
        for (var h = d; h--; ) {
          var f = c[h];
          if (!(u ? f in e : a.call(e, f))) return !1;
        }
        var p = l.get(t);
        if (p && l.get(e)) return p == e;
        var g = !0;
        l.set(t, e), l.set(e, t);
        for (var m = u; ++h < d; ) {
          var v = t[(f = c[h])],
            y = e[f];
          if (o) var b = u ? o(y, v, f, e, t, l) : o(v, y, f, t, e, l);
          if (!(void 0 === b ? v === y || s(v, y, n, o, l) : b)) {
            g = !1;
            break;
          }
          m || (m = "constructor" == f);
        }
        if (g && !m) {
          var x = t.constructor,
            _ = e.constructor;
          x != _ &&
            "constructor" in t &&
            "constructor" in e &&
            !(
              "function" == typeof x &&
              x instanceof x &&
              "function" == typeof _ &&
              _ instanceof _
            ) &&
            (g = !1);
        }
        return l.delete(t), l.delete(e), g;
      };
    },
    function (t, e, n) {
      var i = n(236),
        r = n(238),
        a = n(149);
      t.exports = function (t) {
        return i(t, a, r);
      };
    },
    function (t, e, n) {
      var i = n(237),
        r = n(131);
      t.exports = function (t, e, n) {
        var a = e(t);
        return r(t) ? a : i(a, n(t));
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, i = e.length, r = t.length; ++n < i; ) t[r + n] = e[n];
        return t;
      };
    },
    function (t, e, n) {
      var i = n(239),
        r = n(240),
        a = Object.prototype.propertyIsEnumerable,
        o = Object.getOwnPropertySymbols,
        s = o
          ? function (t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  i(o(t), function (e) {
                    return a.call(t, e);
                  }));
            }
          : r;
      t.exports = s;
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (
          var n = -1, i = null == t ? 0 : t.length, r = 0, a = [];
          ++n < i;

        ) {
          var o = t[n];
          e(o, n, t) && (a[r++] = o);
        }
        return a;
      };
    },
    function (t, e) {
      t.exports = function () {
        return [];
      };
    },
    function (t, e, n) {
      var i = n(242),
        r = n(167),
        a = n(131),
        o = n(168),
        s = n(169),
        l = n(170),
        u = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        var n = a(t),
          c = !n && r(t),
          d = !n && !c && o(t),
          h = !n && !c && !d && l(t),
          f = n || c || d || h,
          p = f ? i(t.length, String) : [],
          g = p.length;
        for (var m in t)
          (!e && !u.call(t, m)) ||
            (f &&
              ("length" == m ||
                (d && ("offset" == m || "parent" == m)) ||
                (h &&
                  ("buffer" == m || "byteLength" == m || "byteOffset" == m)) ||
                s(m, g))) ||
            p.push(m);
        return p;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, i = Array(t); ++n < t; ) i[n] = e(n);
        return i;
      };
    },
    function (t, e, n) {
      var i = n(133),
        r = n(134),
        a = "[object Arguments]";
      t.exports = function (t) {
        return r(t) && i(t) == a;
      };
    },
    function (t, e) {
      t.exports = function () {
        return !1;
      };
    },
    function (t, e, n) {
      var i = n(133),
        r = n(150),
        a = n(134),
        o = {};
      (o["[object Float32Array]"] =
        o["[object Float64Array]"] =
        o["[object Int8Array]"] =
        o["[object Int16Array]"] =
        o["[object Int32Array]"] =
        o["[object Uint8Array]"] =
        o["[object Uint8ClampedArray]"] =
        o["[object Uint16Array]"] =
        o["[object Uint32Array]"] =
          !0),
        (o["[object Arguments]"] =
          o["[object Array]"] =
          o["[object ArrayBuffer]"] =
          o["[object Boolean]"] =
          o["[object DataView]"] =
          o["[object Date]"] =
          o["[object Error]"] =
          o["[object Function]"] =
          o["[object Map]"] =
          o["[object Number]"] =
          o["[object Object]"] =
          o["[object RegExp]"] =
          o["[object Set]"] =
          o["[object String]"] =
          o["[object WeakMap]"] =
            !1),
        (t.exports = function (t) {
          return a(t) && r(t.length) && !!o[i(t)];
        });
    },
    function (t, e) {
      t.exports = function (t) {
        return function (e) {
          return t(e);
        };
      };
    },
    function (t, e, n) {
      (function (t) {
        var i = n(164),
          r = e && !e.nodeType && e,
          a = r && "object" == typeof t && t && !t.nodeType && t,
          o = a && a.exports === r && i.process,
          s = (function () {
            try {
              var t = a && a.require && a.require("util").types;
              return t || (o && o.binding && o.binding("util"));
            } catch (e) {}
          })();
        t.exports = s;
      }.call(this, n(144)(t)));
    },
    function (t, e, n) {
      var i = n(249),
        r = n(250),
        a = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!i(t)) return r(t);
        var e = [];
        for (var n in Object(t))
          a.call(t, n) && "constructor" != n && e.push(n);
        return e;
      };
    },
    function (t, e) {
      var n = Object.prototype;
      t.exports = function (t) {
        var e = t && t.constructor;
        return t === (("function" == typeof e && e.prototype) || n);
      };
    },
    function (t, e, n) {
      var i = n(251)(Object.keys, Object);
      t.exports = i;
    },
    function (t, e) {
      t.exports = function (t, e) {
        return function (n) {
          return t(e(n));
        };
      };
    },
    function (t, e, n) {
      var i = n(253),
        r = n(146),
        a = n(254),
        o = n(255),
        s = n(256),
        l = n(133),
        u = n(165),
        c = u(i),
        d = u(r),
        h = u(a),
        f = u(o),
        p = u(s),
        g = l;
      ((i && "[object DataView]" != g(new i(new ArrayBuffer(1)))) ||
        (r && "[object Map]" != g(new r())) ||
        (a && "[object Promise]" != g(a.resolve())) ||
        (o && "[object Set]" != g(new o())) ||
        (s && "[object WeakMap]" != g(new s()))) &&
        (g = function (t) {
          var e = l(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            i = n ? u(n) : "";
          if (i)
            switch (i) {
              case c:
                return "[object DataView]";
              case d:
                return "[object Map]";
              case h:
                return "[object Promise]";
              case f:
                return "[object Set]";
              case p:
                return "[object WeakMap]";
            }
          return e;
        }),
        (t.exports = g);
    },
    function (t, e, n) {
      var i = n(132)(n(130), "DataView");
      t.exports = i;
    },
    function (t, e, n) {
      var i = n(132)(n(130), "Promise");
      t.exports = i;
    },
    function (t, e, n) {
      var i = n(132)(n(130), "Set");
      t.exports = i;
    },
    function (t, e, n) {
      var i = n(132)(n(130), "WeakMap");
      t.exports = i;
    },
    function (t, e, n) {
      var i = n(258),
        r = n(260)(function (t, e, n) {
          i(t, n, e);
        });
      t.exports = r;
    },
    function (t, e, n) {
      var i = n(259);
      t.exports = function (t, e, n) {
        "__proto__" == e && i
          ? i(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (t[e] = n);
      };
    },
    function (t, e, n) {
      var i = n(132),
        r = (function () {
          try {
            var t = i(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (e) {}
        })();
      t.exports = r;
    },
    function (t, e, n) {
      var i = n(261),
        r = n(262),
        a = n(268),
        o = n(131);
      t.exports = function (t, e) {
        return function (n, s) {
          var l = o(n) ? i : r,
            u = e ? e() : {};
          return l(n, t, a(s, 2), u);
        };
      };
    },
    function (t, e) {
      t.exports = function (t, e, n, i) {
        for (var r = -1, a = null == t ? 0 : t.length; ++r < a; ) {
          var o = t[r];
          e(i, o, n(o), t);
        }
        return i;
      };
    },
    function (t, e, n) {
      var i = n(263);
      t.exports = function (t, e, n, r) {
        return (
          i(t, function (t, i, a) {
            e(r, t, n(t), a);
          }),
          r
        );
      };
    },
    function (t, e, n) {
      var i = n(264),
        r = n(267)(i);
      t.exports = r;
    },
    function (t, e, n) {
      var i = n(265),
        r = n(149);
      t.exports = function (t, e) {
        return t && i(t, e, r);
      };
    },
    function (t, e, n) {
      var i = n(266)();
      t.exports = i;
    },
    function (t, e) {
      t.exports = function (t) {
        return function (e, n, i) {
          for (var r = -1, a = Object(e), o = i(e), s = o.length; s--; ) {
            var l = o[t ? s : ++r];
            if (!1 === n(a[l], l, a)) break;
          }
          return e;
        };
      };
    },
    function (t, e, n) {
      var i = n(171);
      t.exports = function (t, e) {
        return function (n, r) {
          if (null == n) return n;
          if (!i(n)) return t(n, r);
          for (
            var a = n.length, o = e ? a : -1, s = Object(n);
            (e ? o-- : ++o < a) && !1 !== r(s[o], o, s);

          );
          return n;
        };
      };
    },
    function (t, e, n) {
      var i = n(269),
        r = n(272),
        a = n(283),
        o = n(131),
        s = n(284);
      t.exports = function (t) {
        return "function" == typeof t
          ? t
          : null == t
          ? a
          : "object" == typeof t
          ? o(t)
            ? r(t[0], t[1])
            : i(t)
          : s(t);
      };
    },
    function (t, e, n) {
      var i = n(270),
        r = n(271),
        a = n(173);
      t.exports = function (t) {
        var e = r(t);
        return 1 == e.length && e[0][2]
          ? a(e[0][0], e[0][1])
          : function (n) {
              return n === t || i(n, t, e);
            };
      };
    },
    function (t, e, n) {
      var i = n(161),
        r = n(145),
        a = 1,
        o = 2;
      t.exports = function (t, e, n, s) {
        var l = n.length,
          u = l,
          c = !s;
        if (null == t) return !u;
        for (t = Object(t); l--; ) {
          var d = n[l];
          if (c && d[2] ? d[1] !== t[d[0]] : !(d[0] in t)) return !1;
        }
        for (; ++l < u; ) {
          var h = (d = n[l])[0],
            f = t[h],
            p = d[1];
          if (c && d[2]) {
            if (void 0 === f && !(h in t)) return !1;
          } else {
            var g = new i();
            if (s) var m = s(f, p, h, t, e, g);
            if (!(void 0 === m ? r(p, f, a | o, s, g) : m)) return !1;
          }
        }
        return !0;
      };
    },
    function (t, e, n) {
      var i = n(172),
        r = n(149);
      t.exports = function (t) {
        for (var e = r(t), n = e.length; n--; ) {
          var a = e[n],
            o = t[a];
          e[n] = [a, o, i(o)];
        }
        return e;
      };
    },
    function (t, e, n) {
      var i = n(145),
        r = n(273),
        a = n(280),
        o = n(151),
        s = n(172),
        l = n(173),
        u = n(141),
        c = 1,
        d = 2;
      t.exports = function (t, e) {
        return o(t) && s(e)
          ? l(u(t), e)
          : function (n) {
              var o = r(n, t);
              return void 0 === o && o === e ? a(n, t) : i(e, o, c | d);
            };
      };
    },
    function (t, e, n) {
      var i = n(174);
      t.exports = function (t, e, n) {
        var r = null == t ? void 0 : i(t, e);
        return void 0 === r ? n : r;
      };
    },
    function (t, e, n) {
      var i = n(275),
        r =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        o = i(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(""),
            t.replace(r, function (t, n, i, r) {
              e.push(i ? r.replace(a, "$1") : n || t);
            }),
            e
          );
        });
      t.exports = o;
    },
    function (t, e, n) {
      var i = n(276),
        r = 500;
      t.exports = function (t) {
        var e = i(t, function (t) {
            return n.size === r && n.clear(), t;
          }),
          n = e.cache;
        return e;
      };
    },
    function (t, e, n) {
      var i = n(148),
        r = "Expected a function";
      function a(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw new TypeError(r);
        var n = function n() {
          var i = arguments,
            r = e ? e.apply(this, i) : i[0],
            a = n.cache;
          if (a.has(r)) return a.get(r);
          var o = t.apply(this, i);
          return (n.cache = a.set(r, o) || a), o;
        };
        return (n.cache = new (a.Cache || i)()), n;
      }
      (a.Cache = i), (t.exports = a);
    },
    function (t, e, n) {
      var i = n(278);
      t.exports = function (t) {
        return null == t ? "" : i(t);
      };
    },
    function (t, e, n) {
      var i = n(138),
        r = n(279),
        a = n(131),
        o = n(152),
        s = 1 / 0,
        l = i ? i.prototype : void 0,
        u = l ? l.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (a(e)) return r(e, t) + "";
        if (o(e)) return u ? u.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -s ? "-0" : n;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, i = null == t ? 0 : t.length, r = Array(i); ++n < i; )
          r[n] = e(t[n], n, t);
        return r;
      };
    },
    function (t, e, n) {
      var i = n(281),
        r = n(282);
      t.exports = function (t, e) {
        return null != t && r(t, e, i);
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    function (t, e, n) {
      var i = n(175),
        r = n(167),
        a = n(131),
        o = n(169),
        s = n(150),
        l = n(141);
      t.exports = function (t, e, n) {
        for (var u = -1, c = (e = i(e, t)).length, d = !1; ++u < c; ) {
          var h = l(e[u]);
          if (!(d = null != t && n(t, h))) break;
          t = t[h];
        }
        return d || ++u != c
          ? d
          : !!(c = null == t ? 0 : t.length) &&
              s(c) &&
              o(h, c) &&
              (a(t) || r(t));
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return t;
      };
    },
    function (t, e, n) {
      var i = n(285),
        r = n(286),
        a = n(151),
        o = n(141);
      t.exports = function (t) {
        return a(t) ? i(o(t)) : r(t);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return function (e) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    function (t, e, n) {
      var i = n(174);
      t.exports = function (t) {
        return function (e) {
          return i(e, t);
        };
      };
    },
  ]),
]);
//# sourceMappingURL=0.353ed173.chunk.js.map
