(function (a) {
  function b(d) {
    if (c[d]) return c[d].exports;
    var e = c[d] = {
      i: d,
      l: !1,
      exports: {}
    };
    return a[d].call(e.exports, e, e.exports, b), e.l = !0, e.exports
  }
  var c = {};
  return b.m = a, b.c = c, b.i = function (a) {
    return a
  }, b.d = function (a, c, d) {
    b.o(a, c) || Object.defineProperty(a, c, {
      configurable: !1,
      enumerable: !0,
      get: d
    })
  }, b.n = function (a) {
    var c = a && a.__esModule ? function () {
      return a['default']
    } : function () {
      return a
    };
    return b.d(c, 'a', c), c
  }, b.o = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  }, b.p = '', b(b.s = 308)
})({
  2: function (a) {
    function b(a) {
      j = a ? a : j, h = new window.__global.WebSocket(i, j), h.onopen = function () {
        let a = [].concat(l);
        l = [], a.forEach((a) => {
          c(a)
        })
      }, h.onclose = function () {
        h = null, setTimeout(() => {
          b(a)
        })
      }, h.onmessage = function (a) {
        try {
          let b = JSON.parse(a.data);
          d(b)
        } catch (a) { }
      }
    }

    function c(a) {
      h && h.readyState === window.__global.WebSocket.OPEN ? h.send(JSON.stringify(a)) : l.push(a)
    }

    function d() {
      k.forEach((a) => {
        try {
          a.apply(this, arguments)
        } catch (a) {
          console.error(a)
        }
      })
    }
    var e = window.__global.navigator.userAgent,
      f = e.match(/port\/(\d*)/),
      g = f ? parseInt(f[1]) : 9974,
      h = null,
      i = `ws://127.0.0.1:${g}`,
      j = null,
      k = [],
      l = [];
    a.exports = {
      connect: b,
      send: c,
      registerCallback: (a) => {
        k.push(a)
      }
    }
  },
  249: function (a, b, c) {
    function d() {
      (function () {
        const a = ['ontouchstart', 'ontouchend', 'ontouchmove', 'ontouchcancel'];
        for (var b = [window.__proto__, document.__proto__], c = 0; c < a.length; ++c)
          for (var d = 0; d < b.length; ++d) a[c] in b[d] || Object.defineProperty(b[d], a[c], {
            value: null,
            writable: !0,
            configurable: !0,
            enumerable: !0
          })
      })(), window.WeixinJSBridge = e;
      let a = document.createEvent('UIEvent');
      a.initEvent('WeixinJSBridgeReady', !1, !1), document.dispatchEvent(a)
    }
    const e = c(309);
    a.exports = function () {
      'complete' == document.readyState ? d() : window.addEventListener('load', function () {
        d()
      })
    }
  },
  250: function (a) {
    a.exports = function (a) {
      if (a && ('geolocation' === a.module || 'locationPicker' === a.module)) {
        let b = a;
        return 'geolocation' == a.module && (b = {
          module: 'locationPicker',
          latlng: {
            lat: a.lat,
            lng: a.lng
          },
          poiaddress: `${a.province}${a.city}`,
          poiname: a.addr,
          cityname: a.city
        }), void alert(`map handle:${JSON.stringify(b)}`)
      }
    }
  },
  251: function (a) {
    a.exports = {
      windowRemain: {
        __global: !0,
        onload: !0,
        setTimeout: !0,
        setInterval: !0,
        clearTimeout: !0,
        clearInterval: !0,
        requestAnimationFrame: !0,
        cancelAnimationFrame: !0,
        WebGLRenderingContext: !0,
        innerWidth: !0,
        innerHeight: !0,
        process: !0,
        require: !0,
        navigator: !0,
        self: !0,
        performance: !0,
        webkitURL: !0
      },
      windowCanNotEnumerable: ['XMLHttpRequest', 'WebSocket', 'Audio', 'DOMParser', 'AudioContext', 'WebGLRenderingContext', 'WebAssembly'],
      documentRemain: {
        body: !0
      },
      nodeGlobal: ['Object', 'Function', 'Array', 'Number', 'parseFloat', 'parseInt', 'Boolean', 'String', 'Symbol', 'Date', 'Promise', 'RegExp', 'Error', 'EvalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError', 'JSON', 'Math', 'Intl', 'ArrayBuffer', 'Uint8Array', 'Int8Array', 'Uint16Array', 'Int16Array', 'Uint32Array', 'Int32Array', 'Float32Array', 'Float64Array', 'Uint8ClampedArray', 'DataView', 'Map', 'Set', 'WeakMap', 'WeakSet', 'Proxy', 'Reflect', 'Infinity', 'NaN', 'undefined', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape', 'eval', 'isFinite', 'isNaN', 'WebAssembly', 'console', 'DTRACE_NET_SERVER_CONNECTION', 'DTRACE_NET_STREAM_END', 'DTRACE_HTTP_SERVER_REQUEST', 'DTRACE_HTTP_SERVER_RESPONSE', 'DTRACE_HTTP_CLIENT_REQUEST', 'DTRACE_HTTP_CLIENT_RESPONSE', 'global', 'process', 'GLOBAL', 'root', 'Buffer', 'clearImmediate', 'clearInterval', 'clearTimeout', 'setImmediate', 'setInterval', 'setTimeout']
    }
  },
  252: function () {
    window.__global = {
      Worker: Worker,
      WebSocket: WebSocket,
      XMLHttpRequest: XMLHttpRequest,
      FileReader: FileReader,
      atob: window.atob.bind(window),
      btoa: window.btoa.bind(window),
      requestAnimationFrame: window.requestAnimationFrame,
      cancelAnimationFrame: window.cancelAnimationFrame,
      setTimeout: setTimeout,
      clearTimeout: clearTimeout,
      setInterval: setInterval,
      clearInterval: clearInterval,
      Image: Image,
      Audio: Audio,
      navigator: navigator,
      alert: alert.bind(window),
      prompt: prompt.bind(window),
      addEventListener: window.addEventListener.bind(window),
      removeEventListener: window.removeEventListener.bind(window),
      canvasProto: {},
      canvasWebGlContextProto: {},
      canvas2dContextProto: {}
    }, window.onerror = function (a, b, c, d, e) {
      try {
        window.WeixinJSBridge.__triggerOnEvent('onError', e)
      } catch (a) {
        console.error(e)
      }
    };
    var a = document.createElement('canvas'),
      b = document.createElement('canvas'),
      c = a.getContext('2d'),
      d = b.getContext('webgl');
    const e = (a, b) => {
      for (let c in Object.setPrototypeOf(a, b), b) try {
        a[c] = b[c]
      } catch (a) { }
    };
    for (var f in e(window.__global.canvasProto, Object.getPrototypeOf(a)), e(window.__global.canvas2dContextProto, Object.getPrototypeOf(c)), window.__global.document = {}, window.document) try {
      window.__global.document[f] = 'function' == typeof window.document[f] ? window.document[f].bind(document) : window.document[f]
    } catch (a) { }
  },
  308: function (a, b, c) {
    function d() {
      document.body.addEventListener('dragover', function (a) {
        a.preventDefault(), a.stopPropagation()
      }, !1), document.body.addEventListener('drop', function (a) {
        a.preventDefault(), a.stopPropagation()
      }, !1)
    }
    const e = navigator.userAgent,
      f = 0 < e.indexOf('webdebugger'),
      g = 0 < e.indexOf('miniprogram'),
      h = 0 < e.indexOf(' gameservice '),
      i = c(250),
      j = c(252),
      {
        windowRemain: l,
        windowCanNotEnumerable: k,
        documentRemain: m,
        nodeGlobal: n
      } = c(251);
    if (window.addEventListener('message', (a) => {
      let b = a.data;
      b && 'object' == typeof b && i(b)
    }), 'complete' == document.readyState ? d() : window.addEventListener('load', function () {
      d()
    }), g && (window.__wxjs_environment = 'miniprogram'), f) {
      const a = c(249);
      a()
    } else if (h) {
      const a = Object.getOwnPropertyNames(window).filter((a) => {
        return 0 > n.indexOf(a)
      });
      for (const b of a) {
        if (l[b]) continue;
        const a = Object.getOwnPropertyDescriptor(window, b);
        a && !0 !== a.configurable || delete window[b]
      }
      const b = Object.getOwnPropertyNames(document);
      for (const a of b) {
        if (m[a]) continue;
        const b = Object.getOwnPropertyDescriptor(document, a);
        b && !0 !== b.configurable || delete document[a]
      }
    }
  },
  309: function (a, b, c) {
    const d = c(310),
      e = c(311);
    var f = {};
    f.call = function () {
      console.error('WeixinJSBridge.call \u4E0D\u88AB\u652F\u6301\uFF0C\u8BF7\u53C2\u8003 http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html \u8FDB\u884C\u6B63\u786E\u8C03\u7528')
    }, f.log = function (a) {
      console.log(a)
    }, f.invoke = d, f.on = e, a.exports = f
  },
  310: function (a, b, c) {
    const d = c(91),
      e = c(313);
    let f = {},
      g = 1;
    d.registerCallback((a) => {
      let {
        command: b,
        data: c
      } = a;
      if ('WEBDEBUGGER_INVOKE_CALLBACK' === b) {
        let a = c.callbackID,
          b = f[a];
        if (b && 'function' == typeof b.cb) {
          let a = b.api,
            d = c.res,
            f = c.ext;
          if (console.group(`${new Date} wx.${e.getSdkDisplayName(a)} end`), console.info(e.getSdkArgs(a, d)), console.groupEnd(), 'preVerifyJSAPI' === a && /^config:ok/.test(d.errMsg)) {
            let a = f.args.verifyJsApiList || [],
              b = f.sdkResExt,
              c = [],
              d = [];
            a.forEach((a) => {
              (b.defaultPurview[a] || b.purviewFormGetA8key[a] || b.purviewFromPreVerify[a]) && (0 === d.length ? c.push(d) : 6 === d.length && (d = [], c.push(d)), d.push(e.getSdkDisplayName(a)))
            }), console.group(`${new Date} 当前页面通过 wx.config 获取到的 JSSDK 权限如下`), console.table(c), console.groupEnd()
          }
          b.cb(d)
        }
        delete f[a]
      } else 'WEBDEBUGGER_GET_TITLE' == b && self === top && d.send({
        command: 'WEBDEBUGGER_GET_TITLE_RES',
        data: {
          title: document.title
        }
      })
    }), a.exports = function (a, b, c) {
      if (!/^__sys/.test(a)) {
        console.group(`${new Date} wx.${e.getSdkDisplayName(a)} begin`), console.info(e.getSdkArgs(a, b)), console.groupEnd();
        let h = g++;
        f[h] = {
          api: a,
          cb: c
        }, d.send({
          command: 'WEBDEBUGGER_INVOKE',
          data: {
            api: a,
            args: b,
            callbackID: h
          }
        })
      }
    }
  },
  311: function (a, b, c) {
    const d = c(91);
    var e = {};
    d.registerCallback((a) => {
      let {
        command: b,
        data: c
      } = a;
      if ('WEBDEBUGGER_ON_EVENT' === b) {
        let a = e[c.eventName];
        'function' == typeof a && a(c.data)
      }
    }), a.exports = function (a, b) {
      e[a] = b
    }
  },
  312: function (a) {
    a.exports = {
      sdkDisplayName: {
        shareTimeline: 'onMenuShareTimeline',
        sendAppMessage: 'onMenuShareAppMessage',
        shareQQ: 'onMenuShareQQ',
        shareWeiboApp: 'onMenuShareWeibo',
        shareQZone: 'onMenuShareQZone',
        "menu:share:timeline": 'onMenuShareTimeline',
        "menu:share:appmessage": 'onMenuShareAppMessage',
        "menu:share:qq": 'onMenuShareQQ',
        "menu:share:weiboApp": 'onMenuShareWeibo',
        "menu:share:QZone": 'onMenuShareQZone',
        preVerifyJSAPI: 'config',
        imagePreview: 'previewImage',
        geoLocation: 'getLocation',
        openProductViewWithPid: 'openProductSpecificView',
        batchAddCard: 'addCard',
        batchViewCard: 'openCard',
        getBrandWCPayRequest: 'chooseWXPay',
        showPickerView: 'showPickerView',
        showDatePickerView: 'showDatePickerView'
      },
      doNotDisplayArgsConfig: {
        appId: !0,
        verifyAppId: !0,
        verifyNonceStr: !0,
        verifySignType: !0,
        verifySignature: !0,
        verifyTimestamp: !0,
        origin: !0,
        webviewId: !0,
        __isFromOn__: !0,
        __domain__: !0,
        __url__: !0
      }
    }
  },
  313: function (a, b, c) {
    function d(a) {
      return e.sdkDisplayName[a] || a
    }
    var e = c(312);
    a.exports = {
      getSdkArgs: function (a, b = {}) {
        let c = JSON.parse(JSON.stringify(b));
        if (delete c.verifyAppId, 'preVerifyJSAPI' === a) c.jsApiList = c.verifyJsApiList || [], c.jsApiList.forEach((a, b) => {
          c.jsApiList[b] = d(a)
        }), delete c.verifyJsApiList, c.verifyNonceStr && (c.nonceStr = c.verifyNonceStr), delete c.verifyNonceStr, c.verifySignature && (c.signature = c.verifySignature), delete c.verifySignature, c.verifyTimestamp && (c.timestamp = c.verifyTimestamp), delete c.verifyTimestamp, delete c.verifySignType;
        else
          for (let a in b) e.doNotDisplayArgsConfig[a] && delete c[a];
        return c
      },
      getSdkDisplayName: d
    }
  },
  91: function (a, b, c) {
    function d() {
      let a = `WEBDEBUGGER_${h}`;
      e.connect(a)
    }
    const e = c(2),
      f = navigator.userAgent,
      g = f.match(/webview\/([\w]*)/)[1],
      h = `${Date.now()}${parseInt(1e4 * Math.random())}`;
    'readyState' == document.readyState ? d() : window.addEventListener('load', () => {
      d()
    }), a.exports = {
      send: function (a) {
        a.webviewID = g, a.runtimeID = h, e.send(a)
      },
      registerCallback: e.registerCallback
    }
  }
});