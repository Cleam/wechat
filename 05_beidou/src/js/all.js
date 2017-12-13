!(function(a, b) {
  'function' == typeof define && (define.amd || define.cmd)
    ? define(function() {
        return b(a);
      })
    : b(a, !0);
})(this, function(a, b) {
  function c(b, c, d) {
    a.WeixinJSBridge
      ? WeixinJSBridge.invoke(b, e(c), function(a) {
          g(b, a, d);
        })
      : j(b, d);
  }
  function d(b, c, d) {
    a.WeixinJSBridge
      ? WeixinJSBridge.on(b, function(a) {
          d && d.trigger && d.trigger(a), g(b, a, c);
        })
      : d ? j(b, d) : j(b, c);
  }
  function e(a) {
    return (
      (a = a || {}),
      (a.appId = E.appId),
      (a.verifyAppId = E.appId),
      (a.verifySignType = 'sha1'),
      (a.verifyTimestamp = E.timestamp + ''),
      (a.verifyNonceStr = E.nonceStr),
      (a.verifySignature = E.signature),
      a
    );
  }
  function f(a) {
    return {
      timeStamp: a.timestamp + '',
      nonceStr: a.nonceStr,
      package: a.package,
      paySign: a.paySign,
      signType: a.signType || 'SHA1'
    };
  }
  function g(a, b, c) {
    var d, e, f;
    switch ((delete b.err_code,
    delete b.err_desc,
    delete b.err_detail,
    (d = b.errMsg),
    d || ((d = b.err_msg), delete b.err_msg, (d = h(a, d)), (b.errMsg = d)),
    (c = c || {}),
    c._complete && (c._complete(b), delete c._complete),
    (d = b.errMsg || ''),
    E.debug && !c.isInnerInvoke && alert(JSON.stringify(b)),
    (e = d.indexOf(':')),
    (f = d.substring(e + 1)))) {
      case 'ok':
        c.success && c.success(b);
        break;
      case 'cancel':
        c.cancel && c.cancel(b);
        break;
      default:
        c.fail && c.fail(b);
    }
    c.complete && c.complete(b);
  }
  function h(a, b) {
    var e,
      f,
      c = a,
      d = p[c];
    return (
      d && (c = d),
      (e = 'ok'),
      b &&
        ((f = b.indexOf(':')),
        (e = b.substring(f + 1)),
        'confirm' == e && (e = 'ok'),
        'failed' == e && (e = 'fail'),
        -1 != e.indexOf('failed_') && (e = e.substring(7)),
        -1 != e.indexOf('fail_') && (e = e.substring(5)),
        (e = e.replace(/_/g, ' ')),
        (e = e.toLowerCase()),
        ('access denied' == e || 'no permission to execute' == e) &&
          (e = 'permission denied'),
        'config' == c && 'function not exist' == e && (e = 'ok'),
        '' == e && (e = 'fail')),
      (b = c + ':' + e)
    );
  }
  function i(a) {
    var b, c, d, e;
    if (a) {
      for (b = 0, c = a.length; c > b; ++b)
        (d = a[b]), (e = o[d]), e && (a[b] = e);
      return a;
    }
  }
  function j(a, b) {
    if (!(!E.debug || (b && b.isInnerInvoke))) {
      var c = p[a];
      c && (a = c),
        b && b._complete && delete b._complete,
        console.log('"' + a + '",', b || '');
    }
  }
  function k() {
    0 != D.preVerifyState &&
      (u ||
        v ||
        E.debug ||
        '6.0.2' > z ||
        D.systemType < 0 ||
        A ||
        ((A = !0),
        (D.appId = E.appId),
        (D.initTime = C.initEndTime - C.initStartTime),
        (D.preVerifyTime = C.preVerifyEndTime - C.preVerifyStartTime),
        H.getNetworkType({
          isInnerInvoke: !0,
          success: function(a) {
            var b, c;
            (D.networkType = a.networkType),
              (b =
                'http://open.weixin.qq.com/sdk/report?v=' +
                D.version +
                '&o=' +
                D.preVerifyState +
                '&s=' +
                D.systemType +
                '&c=' +
                D.clientVersion +
                '&a=' +
                D.appId +
                '&n=' +
                D.networkType +
                '&i=' +
                D.initTime +
                '&p=' +
                D.preVerifyTime +
                '&u=' +
                D.url),
              (c = new Image()),
              (c.src = b);
          }
        })));
  }
  function l() {
    return new Date().getTime();
  }
  function m(b) {
    w &&
      (a.WeixinJSBridge
        ? b()
        : q.addEventListener &&
          q.addEventListener('WeixinJSBridgeReady', b, !1));
  }
  function n() {
    H.invoke ||
      ((H.invoke = function(b, c, d) {
        a.WeixinJSBridge && WeixinJSBridge.invoke(b, e(c), d);
      }),
      (H.on = function(b, c) {
        a.WeixinJSBridge && WeixinJSBridge.on(b, c);
      }));
  }
  var o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H;
  if (!a.jWeixin)
    return (
      (o = {
        config: 'preVerifyJSAPI',
        onMenuShareTimeline: 'menu:share:timeline',
        onMenuShareAppMessage: 'menu:share:appmessage',
        onMenuShareQQ: 'menu:share:qq',
        onMenuShareWeibo: 'menu:share:weiboApp',
        onMenuShareQZone: 'menu:share:QZone',
        previewImage: 'imagePreview',
        getLocation: 'geoLocation',
        openProductSpecificView: 'openProductViewWithPid',
        addCard: 'batchAddCard',
        openCard: 'batchViewCard',
        chooseWXPay: 'getBrandWCPayRequest'
      }),
      (p = (function() {
        var b,
          a = {};
        for (b in o) a[o[b]] = b;
        return a;
      })()),
      (q = a.document),
      (r = q.title),
      (s = navigator.userAgent.toLowerCase()),
      (t = navigator.platform.toLowerCase()),
      (u = !(!t.match('mac') && !t.match('win'))),
      (v = -1 != s.indexOf('wxdebugger')),
      (w = -1 != s.indexOf('micromessenger')),
      (x = -1 != s.indexOf('android')),
      (y = -1 != s.indexOf('iphone') || -1 != s.indexOf('ipad')),
      (z = (function() {
        var a =
          s.match(/micromessenger\/(\d+\.\d+\.\d+)/) ||
          s.match(/micromessenger\/(\d+\.\d+)/);
        return a ? a[1] : '';
      })()),
      (A = !1),
      (B = !1),
      (C = {
        initStartTime: l(),
        initEndTime: 0,
        preVerifyStartTime: 0,
        preVerifyEndTime: 0
      }),
      (D = {
        version: 1,
        appId: '',
        initTime: 0,
        preVerifyTime: 0,
        networkType: '',
        preVerifyState: 1,
        systemType: y ? 1 : x ? 2 : -1,
        clientVersion: z,
        url: encodeURIComponent(location.href)
      }),
      (E = {}),
      (F = { _completes: [] }),
      (G = { state: 0, data: {} }),
      m(function() {
        C.initEndTime = l();
      }),
      (H = {
        config: function(a) {
          (E = a), j('config', a);
          var b = E.check === !1 ? !1 : !0;
          m(function() {
            var a, d, e;
            if (b)
              c(
                o.config,
                { verifyJsApiList: i(E.jsApiList) },
                (function() {
                  (F._complete = function(a) {
                    (C.preVerifyEndTime = l()), (G.state = 1), (G.data = a);
                  }),
                    (F.success = function() {
                      D.preVerifyState = 0;
                    }),
                    (F.fail = function(a) {
                      F._fail ? F._fail(a) : (G.state = -1);
                    });
                  var a = F._completes;
                  return (
                    a.push(function() {
                      k();
                    }),
                    (F.complete = function() {
                      for (var c = 0, d = a.length; d > c; ++c) a[c]();
                      F._completes = [];
                    }),
                    F
                  );
                })()
              ),
                (C.preVerifyStartTime = l());
            else {
              for (
                G.state = 1, a = F._completes, d = 0, e = a.length;
                e > d;
                ++d
              )
                a[d]();
              F._completes = [];
            }
          }),
            E.beta && n();
        },
        ready: function(a) {
          0 != G.state ? a() : (F._completes.push(a), !w && E.debug && a());
        },
        error: function(a) {
          '6.0.2' > z ||
            B ||
            ((B = !0), -1 == G.state ? a(G.data) : (F._fail = a));
        },
        checkJsApi: function(a) {
          var b = function(a) {
            var c,
              d,
              b = a.checkResult;
            for (c in b) (d = p[c]), d && ((b[d] = b[c]), delete b[c]);
            return a;
          };
          c(
            'checkJsApi',
            { jsApiList: i(a.jsApiList) },
            (function() {
              return (
                (a._complete = function(a) {
                  if (x) {
                    var c = a.checkResult;
                    c && (a.checkResult = JSON.parse(c));
                  }
                  a = b(a);
                }),
                a
              );
            })()
          );
        },
        onMenuShareTimeline: function(a) {
          d(
            o.onMenuShareTimeline,
            {
              complete: function() {
                c(
                  'shareTimeline',
                  {
                    title: a.title || r,
                    desc: a.title || r,
                    img_url: a.imgUrl || '',
                    link: a.link || location.href,
                    type: a.type || 'link',
                    data_url: a.dataUrl || ''
                  },
                  a
                );
              }
            },
            a
          );
        },
        onMenuShareAppMessage: function(a) {
          d(
            o.onMenuShareAppMessage,
            {
              complete: function() {
                c(
                  'sendAppMessage',
                  {
                    title: a.title || r,
                    desc: a.desc || '',
                    link: a.link || location.href,
                    img_url: a.imgUrl || '',
                    type: a.type || 'link',
                    data_url: a.dataUrl || ''
                  },
                  a
                );
              }
            },
            a
          );
        },
        onMenuShareQQ: function(a) {
          d(
            o.onMenuShareQQ,
            {
              complete: function() {
                c(
                  'shareQQ',
                  {
                    title: a.title || r,
                    desc: a.desc || '',
                    img_url: a.imgUrl || '',
                    link: a.link || location.href
                  },
                  a
                );
              }
            },
            a
          );
        },
        onMenuShareWeibo: function(a) {
          d(
            o.onMenuShareWeibo,
            {
              complete: function() {
                c(
                  'shareWeiboApp',
                  {
                    title: a.title || r,
                    desc: a.desc || '',
                    img_url: a.imgUrl || '',
                    link: a.link || location.href
                  },
                  a
                );
              }
            },
            a
          );
        },
        onMenuShareQZone: function(a) {
          d(
            o.onMenuShareQZone,
            {
              complete: function() {
                c(
                  'shareQZone',
                  {
                    title: a.title || r,
                    desc: a.desc || '',
                    img_url: a.imgUrl || '',
                    link: a.link || location.href
                  },
                  a
                );
              }
            },
            a
          );
        },
        startRecord: function(a) {
          c('startRecord', {}, a);
        },
        stopRecord: function(a) {
          c('stopRecord', {}, a);
        },
        onVoiceRecordEnd: function(a) {
          d('onVoiceRecordEnd', a);
        },
        playVoice: function(a) {
          c('playVoice', { localId: a.localId }, a);
        },
        pauseVoice: function(a) {
          c('pauseVoice', { localId: a.localId }, a);
        },
        stopVoice: function(a) {
          c('stopVoice', { localId: a.localId }, a);
        },
        onVoicePlayEnd: function(a) {
          d('onVoicePlayEnd', a);
        },
        uploadVoice: function(a) {
          c(
            'uploadVoice',
            {
              localId: a.localId,
              isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
            },
            a
          );
        },
        downloadVoice: function(a) {
          c(
            'downloadVoice',
            {
              serverId: a.serverId,
              isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
            },
            a
          );
        },
        translateVoice: function(a) {
          c(
            'translateVoice',
            {
              localId: a.localId,
              isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
            },
            a
          );
        },
        chooseImage: function(a) {
          c(
            'chooseImage',
            {
              scene: '1|2',
              count: a.count || 9,
              sizeType: a.sizeType || ['original', 'compressed'],
              sourceType: a.sourceType || ['album', 'camera']
            },
            (function() {
              return (
                (a._complete = function(a) {
                  if (x) {
                    var b = a.localIds;
                    b && (a.localIds = JSON.parse(b));
                  }
                }),
                a
              );
            })()
          );
        },
        previewImage: function(a) {
          c(o.previewImage, { current: a.current, urls: a.urls }, a);
        },
        uploadImage: function(a) {
          c(
            'uploadImage',
            {
              localId: a.localId,
              isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
            },
            a
          );
        },
        downloadImage: function(a) {
          c(
            'downloadImage',
            {
              serverId: a.serverId,
              isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
            },
            a
          );
        },
        getNetworkType: function(a) {
          var b = function(a) {
            var c,
              d,
              e,
              b = a.errMsg;
            if (
              ((a.errMsg = 'getNetworkType:ok'),
              (c = a.subtype),
              delete a.subtype,
              c)
            )
              a.networkType = c;
            else
              switch (((d = b.indexOf(':')), (e = b.substring(d + 1)))) {
                case 'wifi':
                case 'edge':
                case 'wwan':
                  a.networkType = e;
                  break;
                default:
                  a.errMsg = 'getNetworkType:fail';
              }
            return a;
          };
          c(
            'getNetworkType',
            {},
            (function() {
              return (
                (a._complete = function(a) {
                  a = b(a);
                }),
                a
              );
            })()
          );
        },
        openLocation: function(a) {
          c(
            'openLocation',
            {
              latitude: a.latitude,
              longitude: a.longitude,
              name: a.name || '',
              address: a.address || '',
              scale: a.scale || 28,
              infoUrl: a.infoUrl || ''
            },
            a
          );
        },
        getLocation: function(a) {
          (a = a || {}),
            c(
              o.getLocation,
              { type: a.type || 'wgs84' },
              (function() {
                return (
                  (a._complete = function(a) {
                    delete a.type;
                  }),
                  a
                );
              })()
            );
        },
        hideOptionMenu: function(a) {
          c('hideOptionMenu', {}, a);
        },
        showOptionMenu: function(a) {
          c('showOptionMenu', {}, a);
        },
        closeWindow: function(a) {
          (a = a || {}), c('closeWindow', {}, a);
        },
        hideMenuItems: function(a) {
          c('hideMenuItems', { menuList: a.menuList }, a);
        },
        showMenuItems: function(a) {
          c('showMenuItems', { menuList: a.menuList }, a);
        },
        hideAllNonBaseMenuItem: function(a) {
          c('hideAllNonBaseMenuItem', {}, a);
        },
        showAllNonBaseMenuItem: function(a) {
          c('showAllNonBaseMenuItem', {}, a);
        },
        scanQRCode: function(a) {
          (a = a || {}),
            c(
              'scanQRCode',
              {
                needResult: a.needResult || 0,
                scanType: a.scanType || ['qrCode', 'barCode']
              },
              (function() {
                return (
                  (a._complete = function(a) {
                    var b, c;
                    y &&
                      ((b = a.resultStr),
                      b &&
                        ((c = JSON.parse(b)),
                        (a.resultStr =
                          c && c.scan_code && c.scan_code.scan_result)));
                  }),
                  a
                );
              })()
            );
        },
        openProductSpecificView: function(a) {
          c(
            o.openProductSpecificView,
            {
              pid: a.productId,
              view_type: a.viewType || 0,
              ext_info: a.extInfo
            },
            a
          );
        },
        addCard: function(a) {
          var e,
            f,
            g,
            h,
            b = a.cardList,
            d = [];
          for (e = 0, f = b.length; f > e; ++e)
            (g = b[e]),
              (h = { card_id: g.cardId, card_ext: g.cardExt }),
              d.push(h);
          c(
            o.addCard,
            { card_list: d },
            (function() {
              return (
                (a._complete = function(a) {
                  var c,
                    d,
                    e,
                    b = a.card_list;
                  if (b) {
                    for (b = JSON.parse(b), c = 0, d = b.length; d > c; ++c)
                      (e = b[c]),
                        (e.cardId = e.card_id),
                        (e.cardExt = e.card_ext),
                        (e.isSuccess = e.is_succ ? !0 : !1),
                        delete e.card_id,
                        delete e.card_ext,
                        delete e.is_succ;
                    (a.cardList = b), delete a.card_list;
                  }
                }),
                a
              );
            })()
          );
        },
        chooseCard: function(a) {
          c(
            'chooseCard',
            {
              app_id: E.appId,
              location_id: a.shopId || '',
              sign_type: a.signType || 'SHA1',
              card_id: a.cardId || '',
              card_type: a.cardType || '',
              card_sign: a.cardSign,
              time_stamp: a.timestamp + '',
              nonce_str: a.nonceStr
            },
            (function() {
              return (
                (a._complete = function(a) {
                  (a.cardList = a.choose_card_info), delete a.choose_card_info;
                }),
                a
              );
            })()
          );
        },
        openCard: function(a) {
          var e,
            f,
            g,
            h,
            b = a.cardList,
            d = [];
          for (e = 0, f = b.length; f > e; ++e)
            (g = b[e]), (h = { card_id: g.cardId, code: g.code }), d.push(h);
          c(o.openCard, { card_list: d }, a);
        },
        chooseWXPay: function(a) {
          c(o.chooseWXPay, f(a), a);
        }
      }),
      b && (a.wx = a.jWeixin = H),
      H
    );
});
localStorage.setItem('shareUrl', location.href);
function getCookie(name) {
  var arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');

  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return null;
}

function setCookie(name, value) {
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + '=' + escape(value) + ';expires=' + exp.toGMTString();
}
function share() {
  location.href = 'zf.html';
}
function di3() {
  if (!getCookie('name')) {
    setCookie('name', 1);
  } else {
    var nowcookie = getCookie('name');
    var newcookie = nowcookie + 1;
    setCookie('name', newcookie);
  }
}

di3();

function di2() {
  setCookie('ti', 'yes');
}

function GetRandomNum(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  return Min + Math.round(Rand * Range);
}
localStorage.setItem('shuqianPlayed', '1');
(function() {
  var G_SPEED = [];
  G_SPEED[0] = new Date().getTime();
  var SERVER_TIME_STR = '20150724231101';
  var SERVER_TIME = new Date(
    SERVER_TIME_STR.substring(0, 4),
    SERVER_TIME_STR.substring(4, 6) - 1,
    SERVER_TIME_STR.substring(6, 8),
    SERVER_TIME_STR.substring(8, 10),
    SERVER_TIME_STR.substring(10, 12),
    SERVER_TIME_STR.substring(12, 14)
  );
  window.G_SPEED = G_SPEED;
  window.SERVER_TIME_STR = SERVER_TIME_STR;
  window.SERVER_TIME = SERVER_TIME;
  /*开发模式DEV，线上值为ONLINE加载-min.js文件*/
  window.DEV_MODE = 'DEV';
  window.MOD_CACHE = '20150724';
})();
(function() {
  var _d,
    _l,
    _b,
    _n = '-',
    _params,
    _curDomain,
    _curUrl,
    _domainToSet,
    _refDomain,
    _refUrl,
    _image,
    _ext,
    _ver = 'tcss.3.1.0';
  if (typeof _rep == 'undefined') {
    var _rep = 1;
  }
  function tcss(params) {
    this.url = [];
    this.init(params);
  }
  tcss.prototype = {
    init: function(params) {
      params ? (_params = params) : (_params = {});
      _d = document;
      if (!_params.statIframe) {
        if (window != top) {
          try {
            _d = top.document;
          } catch (e) {}
        }
      }
      if (typeof _d == 'undefined') {
        _d = document;
      }
      _l = _d.location;
      _b = _d.body;
    },
    run: function() {
      var bt, et, ext;
      bt = new Date().getTime();
      _ext = [];
      _cookie.init();
      this.url.push(this.getDomainInfo());
      this.url.unshift('https://sdc.' + _domainToSet + '/cgi-bin/pingd?');
      this.url.push(this.getRefInfo(_params));
      try {
        if (navigator.cookieEnabled) {
          this.url.push('&pvid=' + _cookie.setCookie('pgv_pvid', true));
        } else {
          this.url.push('&pvid=NoCookie');
        }
      } catch (e) {
        this.url.push('&pvid=NoCookie');
      }
      this.url.push(this.getMainEnvInfo());
      this.url.push(this.getExtendEnvInfo());
      this.url.push('&vs=' + _ver);
      _cookie.setCookie('ssid');
      _cookie.save();
      _ext.push('ui=' + _cookie.setCookie('ts_uid', true));
      _ext.push('si=' + _cookie.setCookie('ts_sid', true));
      et = new Date().getTime();
      _ext.push('tm=' + (et - bt));
      _params.extParam ? (ext = _params.extParam + '|') : (ext = '');
      this.url.push('&ext=' + escape(ext + _ext.join(';')));
      this.url.push('&rand=' + Math.round(Math.random() * 100000));
      typeof _speedMark == 'undefined'
        ? this.url.push('&reserved1=-1')
        : this.url.push('&reserved1=' + (new Date() - _speedMark));
      if (_params.reserved2) {
        this.url.push(
          '&reserved2=' + escape(_params.reserved2.substring(0, 256))
        );
      }
      this.sendInfo(this.url.join(''));
      if (_params.hot) {
        if (document.attachEvent) {
          document.attachEvent('onclick', function(event) {
            pgvWatchClick(event);
          });
        } else {
          document.addEventListener(
            'click',
            function(event) {
              pgvWatchClick(event);
            },
            false
          );
        }
      }
      if (_params.repeatApplay && _params.repeatApplay == 'true') {
        if (typeof _rep != 'undefined') {
          _rep = 1;
        }
      }
    },
    getDomainInfo: function(hot) {
      var dm, url;
      _curDomain = dm = _params.virtualDomain || _l.host;
      dm = _curDomain.toLowerCase();
      if (!_domainToSet) {
        _domainToSet = this.getCookieSetDomain();
      }
      if (hot) {
        var pl = dm.indexOf(':');
        if (pl > -1) {
          dm = dm.substr(0, pl) + '.hot' + dm.substr(pl);
        } else {
          dm += '.hot';
        }
      }
      url = this.getCurrentUrl();
      return 'dm=' + dm + '&url=' + url;
    },
    getCurrentUrl: function() {
      var url = '';
      var arg = _n;
      if (_params.virtualURL) {
        url = _params.virtualURL;
      } else {
        url = _curUrl = escape(_l.pathname);
        if (_l.search != '') {
          arg = escape(_l.search.substr(1));
        }
        if (_params.senseParam) {
          var value = this.getParameter(_params.senseParam, _d.URL);
          if (value) {
            url += '_' + value;
          }
        }
      }
      return url + '&arg=' + arg;
    },
    getRefInfo: function(params) {
      var refdm = _n,
        refurl = _n,
        refarg = _n,
        refStr = _d.referrer,
        tagParamName,
        adtag,
        pos;
      tagParamName = params.tagParamName || 'ADTAG';
      adtag = this.getParameter(tagParamName, _d.URL);
      pos = refStr.indexOf('://');
      if (pos > -1 && refdm == _n) {
        var re = /(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i;
        var arr = refStr.match(re);
        if (arr) {
          refdm = arr[2];
          refurl = arr[4] + (arr[5] ? arr[5] : '');
        }
      }
      if (refStr.indexOf('?') != -1) {
        var pos = refStr.indexOf('?') + 1;
        refarg = refStr.substr(pos);
      }
      var or, temRefdm;
      if (adtag) {
        temRefdm = refdm;
        or = refdm + refurl;
        refdm = 'ADTAG';
        refurl = adtag;
      }
      _refDomain = refdm;
      _refUrl = escape(refurl);
      if (_refDomain == _n || (_refDomain == 'ADTAG' && temRefdm == _n)) {
        var url = _cookie.get('ts_last=', true);
        if (url != _n) {
          _ext.push('ls=' + url);
        }
      }
      _cookie.setCookie('ts_last', true, escape(_l.pathname.substring(0, 128)));
      if (!(_refDomain == _n || _refDomain == _l.hostname)) {
        var ts_refer = _cookie.get('ts_refer=', true);
        var curRef = escape((_refDomain + refurl).substring(0, 128));
        if (curRef != ts_refer) {
          _cookie.setCookie('ts_sid', true, true);
        }
        _cookie.setCookie('ts_refer', true, curRef);
      }
      if (or) {
        return (
          '&rdm=' +
          _refDomain +
          '&rurl=' +
          _refUrl +
          '&rarg=' +
          escape(refarg) +
          '&or=' +
          or
        );
      } else {
        return (
          '&rdm=' + _refDomain + '&rurl=' + _refUrl + '&rarg=' + escape(refarg)
        );
      }
    },
    getMainEnvInfo: function() {
      var ret = '';
      try {
        var scr = _n,
          scl = _n,
          lang = _n,
          cpuc = _n,
          pf = _n,
          tz = _n,
          java = 0,
          n = navigator;
        if (self.screen) {
          scr = screen.width + 'x' + screen.height;
          scl = screen.colorDepth + '-bit';
        }
        if (n.language) {
          lang = n.language.toLowerCase();
        } else {
          if (n.browserLanguage) {
            lang = n.browserLanguage.toLowerCase();
          }
        }
        java = n.javaEnabled() ? 1 : 0;
        cpuc = n.cpuClass;
        pf = n.platform;
        tz = new Date().getTimezoneOffset() / 60;
        ret =
          '&scr=' +
          scr +
          '&scl=' +
          scl +
          '&lang=' +
          lang +
          '&java=' +
          java +
          '&cc=' +
          cpuc +
          '&pf=' +
          pf +
          '&tz=' +
          tz;
      } catch (e) {
      } finally {
        return ret;
      }
    },
    getExtendEnvInfo: function() {
      var ret = '';
      try {
        var flash,
          currentUrl = _l.href,
          connectType = _n;
        ret += '&flash=' + this.getFlashInfo();
        if (_b.addBehavior) {
          _b.addBehavior('#default#homePage');
          if (_b.isHomePage(currentUrl)) {
            ret += '&hp=Y';
          }
        }
        if (_b.addBehavior) {
          _b.addBehavior('#default#clientCaps');
          connectType = _b.connectionType;
        }
        ret += '&ct=' + connectType;
      } catch (e) {
      } finally {
        return ret;
      }
    },
    getFlashInfo: function() {
      var f = _n,
        n = navigator;
      try {
        if (n.plugins && n.plugins.length) {
          for (var i = 0; i < n.plugins.length; i++) {
            if (n.plugins[i].name.indexOf('Shockwave Flash') > -1) {
              f = n.plugins[i].description.split('Shockwave Flash ')[1];
              break;
            }
          }
        } else {
          if (window.ActiveXObject) {
            for (var i = 12; i >= 5; i--) {
              try {
                var fl = eval(
                  "new ActiveXObject('ShockwaveFlash.ShockwaveFlash." +
                    i +
                    "');"
                );
                if (fl) {
                  f = i + '.0';
                  break;
                }
              } catch (e) {}
            }
          }
        }
      } catch (e) {}
      return f;
    },
    getParameter: function(name, src) {
      if (name && src) {
        var r = new RegExp('(\\?|#|&)' + name + '=([^&^#]*)(#|&|$)');
        var m = src.match(r);
        return m ? m[2] : '';
      }
      return '';
    },
    getCookieSetDomain: function() {
      var dotlen,
        pos,
        domainToSet,
        dot = [],
        j = 0;
      for (var i = 0; i < _curDomain.length; i++) {
        if (_curDomain.charAt(i) == '.') {
          dot[j] = i;
          j++;
        }
      }
      dotlen = dot.length;
      pos = _curDomain.indexOf('.cn');
      if (pos > -1) {
        dotlen--;
      }
      domainToSet = 'qq.com';
      if (dotlen == 1) {
        domainToSet = _curDomain;
      } else {
        if (dotlen > 1) {
          domainToSet = _curDomain.substring(dot[dotlen - 2] + 1);
        }
      }
      return domainToSet;
    },
    watchClick: function(e) {
      try {
        var istag = true,
          hottag = '',
          srcElement;
        srcElement = window.event ? window.event.srcElement : e.target;
        switch (srcElement.tagName) {
          case 'A':
            hottag =
              '<A href=' +
              srcElement.href +
              '>' +
              srcElement.innerHTML +
              '</a>';
            break;
          case 'IMG':
            hottag = '<IMG src=' + srcElement.src + '>';
            break;
          case 'INPUT':
            hottag =
              '<INPUT type=' +
              srcElement.type +
              ' value=' +
              srcElement.value +
              '>';
            break;
          case 'BUTTON':
            hottag = '<BUTTON>' + srcElement.innerText + '</BUTTON>';
            break;
          case 'SELECT':
            hottag = 'SELECT';
            break;
          default:
            istag = false;
            break;
        }
        if (istag) {
          var t = new tcss(_params);
          var pos = t.getElementPos(srcElement);
          if (_params.coordinateId) {
            var coordinatePos = t.getElementPos(
              document.getElementById(_params.coordinateId)
            );
            pos.x -= coordinatePos.x;
          }
          t.url.push(t.getDomainInfo(true));
          t.url.push('&hottag=' + escape(hottag));
          t.url.push('&hotx=' + pos.x);
          t.url.push('&hoty=' + pos.y);
          t.url.push('&rand=' + Math.round(Math.random() * 100000));
          t.url.unshift('https://sdc.' + _domainToSet + '/cgi-bin/pingd?');
          t.sendInfo(t.url.join(''));
        }
      } catch (ex) {}
    },
    getElementPos: function(el) {
      if (el.parentNode === null || el.style.display == 'none') {
        return false;
      }
      var ua = navigator.userAgent.toLowerCase(),
        parent = null,
        pos = [],
        box;
      if (el.getBoundingClientRect) {
        var scrollTop, scrollLeft, clientTop, clientLeft;
        box = el.getBoundingClientRect();
        scrollTop = Math.max(
          document.documentElement.scrollTop,
          document.body.scrollTop
        );
        scrollLeft = Math.max(
          document.documentElement.scrollLeft,
          document.body.scrollLeft
        );
        clientTop = document.body.clientTop;
        clientLeft = document.body.clientLeft;
        return {
          x: box.left + scrollLeft - clientLeft,
          y: box.top + scrollTop - clientTop
        };
      } else {
        if (document.getBoxObjectFor) {
          box = document.getBoxObjectFor(el);
          var borderLeft = el.style.borderLeftWidth
            ? Math.floor(el.style.borderLeftWidth)
            : 0;
          var borderTop = el.style.borderTopWidth
            ? Math.floor(el.style.borderTopWidth)
            : 0;
          pos = [box.x - borderLeft, box.y - borderTop];
        } else {
          pos = [el.offsetLeft, el.offsetTop];
          parent = el.offsetParent;
          if (parent != el) {
            while (parent) {
              pos[0] += parent.offsetLeft;
              pos[1] += parent.offsetTop;
              parent = parent.offsetParent;
            }
          }
          if (
            ua.indexOf('opera') > -1 ||
            (ua.indexOf('safari') > -1 && el.style.position == 'absolute')
          ) {
            pos[0] -= document.body.offsetLeft;
            pos[1] -= document.body.offsetTop;
          }
        }
      }
      if (el.parentNode) {
        parent = el.parentNode;
      } else {
        parent = null;
      }
      while (parent && parent.tagName != 'BODY' && parent.tagName != 'HTML') {
        pos[0] -= parent.scrollLeft;
        pos[1] -= parent.scrollTop;
        if (parent.parentNode) {
          parent = parent.parentNode;
        } else {
          parent = null;
        }
      }
      return {
        x: pos[0],
        y: pos[1]
      };
    },
    sendClick: function() {
      if (_params.hottag) {
        this.url.push(this.getDomainInfo(true));
        this.url.push('&hottag=' + escape(_params.hottag));
        this.url.push(
          '&ext=' + escape(_params.extParam ? _params.extParam : '')
        );
        this.url.push('&hotx=9999&hoty=9999');
        this.url.push('&rand=' + Math.round(Math.random() * 100000));
        this.url.unshift('https://sdc.' + _domainToSet + '/cgi-bin/pingd?');
        this.sendInfo(this.url.join(''));
      }
    },
    sendInfo: function(url) {
      _image = new Image(1, 1);
      _image.src = url;
    }
  };
  var _cookie = {
    sck: [],
    sco: {},
    init: function() {
      var value = this.get('pgv_info=', true);
      if (value != _n) {
        var arr = value.split('&');
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split('=');
          this.set(arr2[0], unescape(arr2[1]));
        }
      }
    },
    get: function(name, isend) {
      var cookies = isend ? _d.cookie : this.get('pgv_info=', true);
      var value = _n;
      var offset, end;
      offset = cookies.indexOf(name);
      if (offset > -1) {
        offset += name.length;
        end = cookies.indexOf(';', offset);
        if (end == -1) {
          end = cookies.length;
        }
        if (!isend) {
          var end2 = cookies.indexOf('&', offset);
          if (end2 > -1) {
            end = Math.min(end, end2);
          }
        }
        value = cookies.substring(offset, end);
      }
      return value;
    },
    set: function(key, value) {
      this.sco[key] = value;
      var isExist = false;
      var sckLen = this.sck.length;
      for (var i = 0; i < sckLen; i++) {
        if (key == this.sck[i]) {
          isExist = true;
          break;
        }
      }
      if (!isExist) {
        this.sck.push(key);
      }
    },
    setCookie: function(name, isend, value) {
      var domain = _l.hostname;
      var id = _cookie.get(name + '=', isend);
      if ((id == _n && !value) || (name == 'ts_sid' && value == true)) {
        switch (name) {
          case 'ts_uid':
            _ext.push('nw=1');
            break;
          case 'ts_sid':
            _ext.push('ch=1');
            if (!value && (_refDomain == _n || _refDomain == _l.hostname)) {
              var ts_refer = _cookie.get('ts_refer=', true);
              if (ts_refer != _n) {
                _ext.push('rf=' + ts_refer);
              }
            }
            break;
        }
        isend ? (id = '') : (id = 's');
        var curMs = new Date().getUTCMilliseconds();
        id +=
          (Math.round(Math.abs(Math.random() - 1) * 2147483647) * curMs) %
          10000000000;
      } else {
        id = value ? value : id;
      }
      if (isend) {
        switch (name) {
          case 'ts_uid':
            this.saveCookie(
              name + '=' + id,
              domain,
              this.getExpires(2 * 365 * 24 * 60)
            );
            break;
          case 'ts_sid':
            this.saveCookie(name + '=' + id, domain, this.getExpires(30));
            break;
          case 'ts_refer':
            this.saveCookie(
              name + '=' + id,
              domain,
              this.getExpires(6 * 30 * 24 * 60)
            );
            break;
          case 'ts_last':
            this.saveCookie(name + '=' + id, domain, this.getExpires(30));
            break;
          default:
            this.saveCookie(
              name + '=' + id,
              _domainToSet,
              'expires=Sun, 18 Jan 2038 00:00:00 GMT;'
            );
        }
      } else {
        this.set(name, id);
      }
      return id;
    },
    getExpires: function(minitus) {
      var expires = new Date();
      expires.setTime(expires.getTime() + minitus * 60 * 1000);
      return 'expires=' + expires.toGMTString();
    },
    save: function() {
      if (_params.sessionSpan) {
        var expires = new Date();
        expires.setTime(expires.getTime() + _params.sessionSpan * 60 * 1000);
      }
      var cookies = '';
      var sckLen = this.sck.length;
      for (var i = 0; i < sckLen; i++) {
        cookies += this.sck[i] + '=' + this.sco[this.sck[i]] + '&';
      }
      cookies = 'pgv_info=' + cookies.substr(0, cookies.length - 1);
      var expire = '';
      if (expires) {
        expire = 'expires=' + expires.toGMTString();
      }
      this.saveCookie(cookies, _domainToSet, expire);
    },
    saveCookie: function(cookie, domain, expires) {
      _d.cookie = cookie + ';path=/;domain=' + domain + ';' + expires;
    }
  };
  window.pgvMain = function(param1, param2) {
    var params = '';
    if (param2) {
      params = param2;
      _ver = 'tcsso.3.1.0';
    } else {
      params = param1;
      _ver = 'tcss.3.1.0';
    }
    try {
      if (_rep == 1) {
        _rep = 2;
      } else {
        return;
      }
      new tcss(params).run();
    } catch (e) {}
  };
  window.pgvSendClick = function(params) {
    new tcss(params).sendClick();
  };
  window.pgvWatchClick = function(params) {
    new tcss(params).watchClick(params);
  };
})();
/*! Sea.js 2.3.0 | seajs.org/LICENSE.md */
!(function(a, b) {
  function c(a) {
    return function(b) {
      return {}.toString.call(b) == '[object ' + a + ']';
    };
  }
  function d() {
    return z++;
  }
  function e(a) {
    return a.match(C)[0];
  }
  function f(a) {
    for (a = a.replace(D, '/'), a = a.replace(F, '$1/'); a.match(E); )
      a = a.replace(E, '/');
    return a;
  }
  function g(a) {
    var b = a.length - 1,
      c = a.charAt(b);
    return '#' === c
      ? a.substring(0, b)
      : '.js' === a.substring(b - 2) || a.indexOf('?') > 0 || '/' === c
        ? a
        : a + '.js';
  }
  function h(a) {
    var b = u.alias;
    return b && w(b[a]) ? b[a] : a;
  }
  function i(a) {
    var b = u.paths,
      c;
    return b && (c = a.match(G)) && w(b[c[1]]) && (a = b[c[1]] + c[2]), a;
  }
  function j(a) {
    var b = u.vars;
    return (
      b &&
        a.indexOf('{') > -1 &&
        (a = a.replace(H, function(a, c) {
          return w(b[c]) ? b[c] : a;
        })),
      a
    );
  }
  function k(a) {
    var b = u.map,
      c = a;
    if (b)
      for (var d = 0, e = b.length; e > d; d++) {
        var f = b[d];
        if (((c = y(f) ? f(a) || a : a.replace(f[0], f[1])), c !== a)) break;
      }
    return c;
  }
  function l(a, b) {
    var c,
      d = a.charAt(0);
    if (I.test(a)) c = a;
    else if ('.' === d) c = f((b ? e(b) : u.cwd) + a);
    else if ('/' === d) {
      var g = u.cwd.match(J);
      c = g ? g[0] + a.substring(1) : a;
    } else c = u.base + a;
    return 0 === c.indexOf('//') && (c = location.protocol + c), c;
  }
  function m(a, b) {
    if (!a) return '';
    (a = h(a)), (a = i(a)), (a = j(a)), (a = g(a));
    var c = l(a, b);
    return (c = k(c));
  }
  function n(a) {
    return a.hasAttribute ? a.src : a.getAttribute('src', 4);
  }
  function o(a, b, c) {
    var d = K.createElement('script');
    if (c) {
      var e = y(c) ? c(a) : c;
      e && (d.charset = e);
    }
    p(d, b, a),
      (d.async = !0),
      (d.src = a),
      (R = d),
      Q ? P.insertBefore(d, Q) : P.appendChild(d),
      (R = null);
  }
  function p(a, b, c) {
    function d() {
      (a.onload = a.onerror = a.onreadystatechange = null),
        u.debug || P.removeChild(a),
        (a = null),
        b();
    }
    var e = 'onload' in a;
    e
      ? ((a.onload = d),
        (a.onerror = function() {
          B('error', { uri: c, node: a }), d();
        }))
      : (a.onreadystatechange = function() {
          /loaded|complete/.test(a.readyState) && d();
        });
  }
  function q() {
    if (R) return R;
    if (S && 'interactive' === S.readyState) return S;
    for (
      var a = P.getElementsByTagName('script'), b = a.length - 1;
      b >= 0;
      b--
    ) {
      var c = a[b];
      if ('interactive' === c.readyState) return (S = c);
    }
  }
  function r(a) {
    var b = [];
    return (
      a.replace(U, '').replace(T, function(a, c, d) {
        d && b.push(d);
      }),
      b
    );
  }
  function s(a, b) {
    (this.uri = a),
      (this.dependencies = b || []),
      (this.exports = null),
      (this.status = 0),
      (this._waitings = {}),
      (this._remain = 0);
  }
  if (!a.seajs) {
    var t = (a.seajs = { version: '2.3.0' }),
      u = (t.data = {}),
      v = c('Object'),
      w = c('String'),
      x = Array.isArray || c('Array'),
      y = c('Function'),
      z = 0,
      A = (u.events = {});
    (t.on = function(a, b) {
      var c = A[a] || (A[a] = []);
      return c.push(b), t;
    }),
      (t.off = function(a, b) {
        if (!a && !b) return (A = u.events = {}), t;
        var c = A[a];
        if (c)
          if (b)
            for (var d = c.length - 1; d >= 0; d--)
              c[d] === b && c.splice(d, 1);
          else delete A[a];
        return t;
      });
    var B = (t.emit = function(a, b) {
        var c = A[a],
          d;
        if (c) {
          c = c.slice();
          for (var e = 0, f = c.length; f > e; e++) c[e](b);
        }
        return t;
      }),
      C = /[^?#]*\//,
      D = /\/\.\//g,
      E = /\/[^/]+\/\.\.\//,
      F = /([^:/])\/+\//g,
      G = /^([^/:]+)(\/.+)$/,
      H = /{([^{]+)}/g,
      I = /^\/\/.|:\//,
      J = /^.*?\/\/.*?\//,
      K = document,
      L =
        location.href && 0 !== location.href.indexOf('about:')
          ? e(location.href)
          : '',
      M = K.scripts,
      N = K.getElementById('seajsnode') || M[M.length - 1],
      O = e(n(N) || L);
    t.resolve = m;
    var P = K.head || K.getElementsByTagName('head')[0] || K.documentElement,
      Q = P.getElementsByTagName('base')[0],
      R,
      S;
    t.request = o;
    var T = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,
      U = /\\\\/g,
      V = (t.cache = {}),
      W,
      X = {},
      Y = {},
      Z = {},
      $ = (s.STATUS = {
        FETCHING: 1,
        SAVED: 2,
        LOADING: 3,
        LOADED: 4,
        EXECUTING: 5,
        EXECUTED: 6
      });
    (s.prototype.resolve = function() {
      for (
        var a = this, b = a.dependencies, c = [], d = 0, e = b.length;
        e > d;
        d++
      )
        c[d] = s.resolve(b[d], a.uri);
      return c;
    }),
      (s.prototype.load = function() {
        var a = this;
        if (!(a.status >= $.LOADING)) {
          a.status = $.LOADING;
          var c = a.resolve();
          B('load', c);
          for (var d = (a._remain = c.length), e, f = 0; d > f; f++)
            (e = s.get(c[f])),
              e.status < $.LOADED
                ? (e._waitings[a.uri] = (e._waitings[a.uri] || 0) + 1)
                : a._remain--;
          if (0 === a._remain) return a.onload(), b;
          var g = {};
          for (f = 0; d > f; f++)
            (e = V[c[f]]),
              e.status < $.FETCHING
                ? e.fetch(g)
                : e.status === $.SAVED && e.load();
          for (var h in g) g.hasOwnProperty(h) && g[h]();
        }
      }),
      (s.prototype.onload = function() {
        var a = this;
        (a.status = $.LOADED), a.callback && a.callback();
        var b = a._waitings,
          c,
          d;
        for (c in b)
          b.hasOwnProperty(c) &&
            ((d = V[c]), (d._remain -= b[c]), 0 === d._remain && d.onload());
        delete a._waitings, delete a._remain;
      }),
      (s.prototype.fetch = function(a) {
        function c() {
          t.request(g.requestUri, g.onRequest, g.charset);
        }
        function d() {
          delete X[h], (Y[h] = !0), W && (s.save(f, W), (W = null));
          var a,
            b = Z[h];
          for (delete Z[h]; (a = b.shift()); ) a.load();
        }
        var e = this,
          f = e.uri;
        e.status = $.FETCHING;
        var g = { uri: f };
        B('fetch', g);
        var h = g.requestUri || f;
        return !h || Y[h]
          ? (e.load(), b)
          : X[h]
            ? (Z[h].push(e), b)
            : ((X[h] = !0),
              (Z[h] = [e]),
              B(
                'request',
                (g = {
                  uri: f,
                  requestUri: h,
                  onRequest: d,
                  charset: u.charset
                })
              ),
              g.requested || (a ? (a[g.requestUri] = c) : c()),
              b);
      }),
      (s.prototype.exec = function() {
        function a(b) {
          return s.get(a.resolve(b)).exec();
        }
        var c = this;
        if (c.status >= $.EXECUTING) return c.exports;
        c.status = $.EXECUTING;
        var e = c.uri;
        (a.resolve = function(a) {
          return s.resolve(a, e);
        }),
          (a.async = function(b, c) {
            return s.use(b, c, e + '_async_' + d()), a;
          });
        var f = c.factory,
          g = y(f) ? f(a, (c.exports = {}), c) : f;
        return (
          g === b && (g = c.exports),
          delete c.factory,
          (c.exports = g),
          (c.status = $.EXECUTED),
          B('exec', c),
          g
        );
      }),
      (s.resolve = function(a, b) {
        var c = { id: a, refUri: b };
        return B('resolve', c), c.uri || t.resolve(c.id, b);
      }),
      (s.define = function(a, c, d) {
        var e = arguments.length;
        1 === e
          ? ((d = a), (a = b))
          : 2 === e && ((d = c), x(a) ? ((c = a), (a = b)) : (c = b)),
          !x(c) && y(d) && (c = r('' + d));
        var f = { id: a, uri: s.resolve(a), deps: c, factory: d };
        if (!f.uri && K.attachEvent) {
          var g = q();
          g && (f.uri = g.src);
        }
        B('define', f), f.uri ? s.save(f.uri, f) : (W = f);
      }),
      (s.save = function(a, b) {
        var c = s.get(a);
        c.status < $.SAVED &&
          ((c.id = b.id || a),
          (c.dependencies = b.deps || []),
          (c.factory = b.factory),
          (c.status = $.SAVED),
          B('save', c));
      }),
      (s.get = function(a, b) {
        return V[a] || (V[a] = new s(a, b));
      }),
      (s.use = function(b, c, d) {
        var e = s.get(d, x(b) ? b : [b]);
        (e.callback = function() {
          for (var b = [], d = e.resolve(), f = 0, g = d.length; g > f; f++)
            b[f] = V[d[f]].exec();
          c && c.apply(a, b), delete e.callback;
        }),
          e.load();
      }),
      (t.use = function(a, b) {
        return s.use(a, b, u.cwd + '_use_' + d()), t;
      }),
      (s.define.cmd = {}),
      (a.define = s.define),
      (t.Module = s),
      (u.fetchedList = Y),
      (u.cid = d),
      (t.require = function(a) {
        var b = s.get(s.resolve(a));
        return b.status < $.EXECUTING && (b.onload(), b.exec()), b.exports;
      }),
      (u.base = O),
      (u.dir = O),
      (u.cwd = L),
      (u.charset = 'utf-8'),
      (t.config = function(a) {
        for (var b in a) {
          var c = a[b],
            d = u[b];
          if (d && v(d)) for (var e in c) d[e] = c[e];
          else
            x(d)
              ? (c = d.concat(c))
              : 'base' === b && ('/' !== c.slice(-1) && (c += '/'), (c = l(c))),
              (u[b] = c);
        }
        return B('config', a), t;
      });
  }
})(this);
/* Zepto v1.1.4 - zepto event ajax form ie - zeptojs.com/license */
var Zepto = (function() {
  function L(t) {
    return null == t ? String(t) : j[S.call(t)] || 'object';
  }
  function Z(t) {
    return 'function' == L(t);
  }
  function $(t) {
    return null != t && t == t.window;
  }
  function _(t) {
    return null != t && t.nodeType == t.DOCUMENT_NODE;
  }
  function D(t) {
    return 'object' == L(t);
  }
  function R(t) {
    return D(t) && !$(t) && Object.getPrototypeOf(t) == Object.prototype;
  }
  function M(t) {
    return 'number' == typeof t.length;
  }
  function k(t) {
    return s.call(t, function(t) {
      return null != t;
    });
  }
  function z(t) {
    return t.length > 0 ? n.fn.concat.apply([], t) : t;
  }
  function F(t) {
    return t
      .replace(/::/g, '/')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
      .replace(/([a-z\d])([A-Z])/g, '$1_$2')
      .replace(/_/g, '-')
      .toLowerCase();
  }
  function q(t) {
    return t in f ? f[t] : (f[t] = new RegExp('(^|\\s)' + t + '(\\s|$)'));
  }
  function H(t, e) {
    return 'number' != typeof e || c[F(t)] ? e : e + 'px';
  }
  function I(t) {
    var e, n;
    return (
      u[t] ||
        ((e = a.createElement(t)),
        a.body.appendChild(e),
        (n = getComputedStyle(e, '').getPropertyValue('display')),
        e.parentNode.removeChild(e),
        'none' == n && (n = 'block'),
        (u[t] = n)),
      u[t]
    );
  }
  function V(t) {
    return 'children' in t
      ? o.call(t.children)
      : n.map(t.childNodes, function(t) {
          return 1 == t.nodeType ? t : void 0;
        });
  }
  function B(n, i, r) {
    for (e in i)
      r && (R(i[e]) || A(i[e]))
        ? (R(i[e]) && !R(n[e]) && (n[e] = {}),
          A(i[e]) && !A(n[e]) && (n[e] = []),
          B(n[e], i[e], r))
        : i[e] !== t && (n[e] = i[e]);
  }
  function U(t, e) {
    return null == e ? n(t) : n(t).filter(e);
  }
  function J(t, e, n, i) {
    return Z(e) ? e.call(t, n, i) : e;
  }
  function X(t, e, n) {
    null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
  }
  function W(e, n) {
    var i = e.className,
      r = i && i.baseVal !== t;
    return n === t
      ? r ? i.baseVal : i
      : void (r ? (i.baseVal = n) : (e.className = n));
  }
  function Y(t) {
    var e;
    try {
      return t
        ? 'true' == t ||
            ('false' == t
              ? !1
              : 'null' == t
                ? null
                : /^0/.test(t) || isNaN((e = Number(t)))
                  ? /^[\[\{]/.test(t) ? n.parseJSON(t) : t
                  : e)
        : t;
    } catch (i) {
      return t;
    }
  }
  function G(t, e) {
    e(t);
    for (var n = 0, i = t.childNodes.length; i > n; n++) G(t.childNodes[n], e);
  }
  var t,
    e,
    n,
    i,
    C,
    N,
    r = [],
    o = r.slice,
    s = r.filter,
    a = window.document,
    u = {},
    f = {},
    c = {
      'column-count': 1,
      columns: 1,
      'font-weight': 1,
      'line-height': 1,
      opacity: 1,
      'z-index': 1,
      zoom: 1
    },
    l = /^\s*<(\w+|!)[^>]*>/,
    h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    d = /^(?:body|html)$/i,
    m = /([A-Z])/g,
    g = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
    v = ['after', 'prepend', 'before', 'append'],
    y = a.createElement('table'),
    x = a.createElement('tr'),
    b = {
      tr: a.createElement('tbody'),
      tbody: y,
      thead: y,
      tfoot: y,
      td: x,
      th: x,
      '*': a.createElement('div')
    },
    w = /complete|loaded|interactive/,
    E = /^[\w-]*$/,
    j = {},
    S = j.toString,
    T = {},
    O = a.createElement('div'),
    P = {
      tabindex: 'tabIndex',
      readonly: 'readOnly',
      for: 'htmlFor',
      class: 'className',
      maxlength: 'maxLength',
      cellspacing: 'cellSpacing',
      cellpadding: 'cellPadding',
      rowspan: 'rowSpan',
      colspan: 'colSpan',
      usemap: 'useMap',
      frameborder: 'frameBorder',
      contenteditable: 'contentEditable'
    },
    A =
      Array.isArray ||
      function(t) {
        return t instanceof Array;
      };
  return (
    (T.matches = function(t, e) {
      if (!e || !t || 1 !== t.nodeType) return !1;
      var n =
        t.webkitMatchesSelector ||
        t.mozMatchesSelector ||
        t.oMatchesSelector ||
        t.matchesSelector;
      if (n) return n.call(t, e);
      var i,
        r = t.parentNode,
        o = !r;
      return (
        o && (r = O).appendChild(t),
        (i = ~T.qsa(r, e).indexOf(t)),
        o && O.removeChild(t),
        i
      );
    }),
    (C = function(t) {
      return t.replace(/-+(.)?/g, function(t, e) {
        return e ? e.toUpperCase() : '';
      });
    }),
    (N = function(t) {
      return s.call(t, function(e, n) {
        return t.indexOf(e) == n;
      });
    }),
    (T.fragment = function(e, i, r) {
      var s, u, f;
      return (
        h.test(e) && (s = n(a.createElement(RegExp.$1))),
        s ||
          (e.replace && (e = e.replace(p, '<$1></$2>')),
          i === t && (i = l.test(e) && RegExp.$1),
          i in b || (i = '*'),
          (f = b[i]),
          (f.innerHTML = '' + e),
          (s = n.each(o.call(f.childNodes), function() {
            f.removeChild(this);
          }))),
        R(r) &&
          ((u = n(s)),
          n.each(r, function(t, e) {
            g.indexOf(t) > -1 ? u[t](e) : u.attr(t, e);
          })),
        s
      );
    }),
    (T.Z = function(t, e) {
      return (t = t || []), (t.__proto__ = n.fn), (t.selector = e || ''), t;
    }),
    (T.isZ = function(t) {
      return t instanceof T.Z;
    }),
    (T.init = function(e, i) {
      var r;
      if (!e) return T.Z();
      if ('string' == typeof e)
        if (((e = e.trim()), '<' == e[0] && l.test(e)))
          (r = T.fragment(e, RegExp.$1, i)), (e = null);
        else {
          if (i !== t) return n(i).find(e);
          r = T.qsa(a, e);
        }
      else {
        if (Z(e)) return n(a).ready(e);
        if (T.isZ(e)) return e;
        if (A(e)) r = k(e);
        else if (D(e)) (r = [e]), (e = null);
        else if (l.test(e))
          (r = T.fragment(e.trim(), RegExp.$1, i)), (e = null);
        else {
          if (i !== t) return n(i).find(e);
          r = T.qsa(a, e);
        }
      }
      return T.Z(r, e);
    }),
    (n = function(t, e) {
      return T.init(t, e);
    }),
    (n.extend = function(t) {
      var e,
        n = o.call(arguments, 1);
      return (
        'boolean' == typeof t && ((e = t), (t = n.shift())),
        n.forEach(function(n) {
          B(t, n, e);
        }),
        t
      );
    }),
    (T.qsa = function(t, e) {
      var n,
        i = '#' == e[0],
        r = !i && '.' == e[0],
        s = i || r ? e.slice(1) : e,
        a = E.test(s);
      return _(t) && a && i
        ? (n = t.getElementById(s)) ? [n] : []
        : 1 !== t.nodeType && 9 !== t.nodeType
          ? []
          : o.call(
              a && !i
                ? r ? t.getElementsByClassName(s) : t.getElementsByTagName(e)
                : t.querySelectorAll(e)
            );
    }),
    (n.contains = a.documentElement.contains
      ? function(t, e) {
          return t !== e && t.contains(e);
        }
      : function(t, e) {
          for (; e && (e = e.parentNode); ) if (e === t) return !0;
          return !1;
        }),
    (n.type = L),
    (n.isFunction = Z),
    (n.isWindow = $),
    (n.isArray = A),
    (n.isPlainObject = R),
    (n.isEmptyObject = function(t) {
      var e;
      for (e in t) return !1;
      return !0;
    }),
    (n.inArray = function(t, e, n) {
      return r.indexOf.call(e, t, n);
    }),
    (n.camelCase = C),
    (n.trim = function(t) {
      return null == t ? '' : String.prototype.trim.call(t);
    }),
    (n.uuid = 0),
    (n.support = {}),
    (n.expr = {}),
    (n.map = function(t, e) {
      var n,
        r,
        o,
        i = [];
      if (M(t))
        for (r = 0; r < t.length; r++) (n = e(t[r], r)), null != n && i.push(n);
      else for (o in t) (n = e(t[o], o)), null != n && i.push(n);
      return z(i);
    }),
    (n.each = function(t, e) {
      var n, i;
      if (M(t)) {
        for (n = 0; n < t.length; n++)
          if (e.call(t[n], n, t[n]) === !1) return t;
      } else for (i in t) if (e.call(t[i], i, t[i]) === !1) return t;
      return t;
    }),
    (n.grep = function(t, e) {
      return s.call(t, e);
    }),
    window.JSON && (n.parseJSON = JSON.parse),
    n.each(
      'Boolean Number String Function Array Date RegExp Object Error'.split(
        ' '
      ),
      function(t, e) {
        j['[object ' + e + ']'] = e.toLowerCase();
      }
    ),
    (n.fn = {
      forEach: r.forEach,
      reduce: r.reduce,
      push: r.push,
      sort: r.sort,
      indexOf: r.indexOf,
      concat: r.concat,
      map: function(t) {
        return n(
          n.map(this, function(e, n) {
            return t.call(e, n, e);
          })
        );
      },
      slice: function() {
        return n(o.apply(this, arguments));
      },
      ready: function(t) {
        return (
          w.test(a.readyState) && a.body
            ? t(n)
            : a.addEventListener(
                'DOMContentLoaded',
                function() {
                  t(n);
                },
                !1
              ),
          this
        );
      },
      get: function(e) {
        return e === t ? o.call(this) : this[e >= 0 ? e : e + this.length];
      },
      toArray: function() {
        return this.get();
      },
      size: function() {
        return this.length;
      },
      remove: function() {
        return this.each(function() {
          null != this.parentNode && this.parentNode.removeChild(this);
        });
      },
      each: function(t) {
        return (
          r.every.call(this, function(e, n) {
            return t.call(e, n, e) !== !1;
          }),
          this
        );
      },
      filter: function(t) {
        return Z(t)
          ? this.not(this.not(t))
          : n(
              s.call(this, function(e) {
                return T.matches(e, t);
              })
            );
      },
      add: function(t, e) {
        return n(N(this.concat(n(t, e))));
      },
      is: function(t) {
        return this.length > 0 && T.matches(this[0], t);
      },
      not: function(e) {
        var i = [];
        if (Z(e) && e.call !== t)
          this.each(function(t) {
            e.call(this, t) || i.push(this);
          });
        else {
          var r =
            'string' == typeof e
              ? this.filter(e)
              : M(e) && Z(e.item) ? o.call(e) : n(e);
          this.forEach(function(t) {
            r.indexOf(t) < 0 && i.push(t);
          });
        }
        return n(i);
      },
      has: function(t) {
        return this.filter(function() {
          return D(t)
            ? n.contains(this, t)
            : n(this)
                .find(t)
                .size();
        });
      },
      eq: function(t) {
        return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
      },
      first: function() {
        var t = this[0];
        return t && !D(t) ? t : n(t);
      },
      last: function() {
        var t = this[this.length - 1];
        return t && !D(t) ? t : n(t);
      },
      find: function(t) {
        var e,
          i = this;
        return (e = t
          ? 'object' == typeof t
            ? n(t).filter(function() {
                var t = this;
                return r.some.call(i, function(e) {
                  return n.contains(e, t);
                });
              })
            : 1 == this.length
              ? n(T.qsa(this[0], t))
              : this.map(function() {
                  return T.qsa(this, t);
                })
          : []);
      },
      closest: function(t, e) {
        var i = this[0],
          r = !1;
        for (
          'object' == typeof t && (r = n(t));
          i && !(r ? r.indexOf(i) >= 0 : T.matches(i, t));

        )
          i = i !== e && !_(i) && i.parentNode;
        return n(i);
      },
      parents: function(t) {
        for (var e = [], i = this; i.length > 0; )
          i = n.map(i, function(t) {
            return (t = t.parentNode) && !_(t) && e.indexOf(t) < 0
              ? (e.push(t), t)
              : void 0;
          });
        return U(e, t);
      },
      parent: function(t) {
        return U(N(this.pluck('parentNode')), t);
      },
      children: function(t) {
        return U(
          this.map(function() {
            return V(this);
          }),
          t
        );
      },
      contents: function() {
        return this.map(function() {
          return o.call(this.childNodes);
        });
      },
      siblings: function(t) {
        return U(
          this.map(function(t, e) {
            return s.call(V(e.parentNode), function(t) {
              return t !== e;
            });
          }),
          t
        );
      },
      empty: function() {
        return this.each(function() {
          this.innerHTML = '';
        });
      },
      pluck: function(t) {
        return n.map(this, function(e) {
          return e[t];
        });
      },
      show: function() {
        return this.each(function() {
          'none' == this.style.display && (this.style.display = ''),
            'none' == getComputedStyle(this, '').getPropertyValue('display') &&
              (this.style.display = I(this.nodeName));
        });
      },
      replaceWith: function(t) {
        return this.before(t).remove();
      },
      wrap: function(t) {
        var e = Z(t);
        if (this[0] && !e)
          var i = n(t).get(0),
            r = i.parentNode || this.length > 1;
        return this.each(function(o) {
          n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i);
        });
      },
      wrapAll: function(t) {
        if (this[0]) {
          n(this[0]).before((t = n(t)));
          for (var e; (e = t.children()).length; ) t = e.first();
          n(t).append(this);
        }
        return this;
      },
      wrapInner: function(t) {
        var e = Z(t);
        return this.each(function(i) {
          var r = n(this),
            o = r.contents(),
            s = e ? t.call(this, i) : t;
          o.length ? o.wrapAll(s) : r.append(s);
        });
      },
      unwrap: function() {
        return (
          this.parent().each(function() {
            n(this).replaceWith(n(this).children());
          }),
          this
        );
      },
      clone: function() {
        return this.map(function() {
          return this.cloneNode(!0);
        });
      },
      hide: function() {
        return this.css('display', 'none');
      },
      toggle: function(e) {
        return this.each(function() {
          var i = n(this);
          (e === t ? 'none' == i.css('display') : e) ? i.show() : i.hide();
        });
      },
      prev: function(t) {
        return n(this.pluck('previousElementSibling')).filter(t || '*');
      },
      next: function(t) {
        return n(this.pluck('nextElementSibling')).filter(t || '*');
      },
      html: function(t) {
        return 0 in arguments
          ? this.each(function(e) {
              var i = this.innerHTML;
              n(this)
                .empty()
                .append(J(this, t, e, i));
            })
          : 0 in this ? this[0].innerHTML : null;
      },
      text: function(t) {
        return 0 in arguments
          ? this.each(function(e) {
              var n = J(this, t, e, this.textContent);
              this.textContent = null == n ? '' : '' + n;
            })
          : 0 in this ? this[0].textContent : null;
      },
      attr: function(n, i) {
        var r;
        return 'string' != typeof n || 1 in arguments
          ? this.each(function(t) {
              if (1 === this.nodeType)
                if (D(n)) for (e in n) X(this, e, n[e]);
                else X(this, n, J(this, i, t, this.getAttribute(n)));
            })
          : this.length && 1 === this[0].nodeType
            ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r
            : t;
      },
      removeAttr: function(t) {
        return this.each(function() {
          1 === this.nodeType && X(this, t);
        });
      },
      prop: function(t, e) {
        return (
          (t = P[t] || t),
          1 in arguments
            ? this.each(function(n) {
                this[t] = J(this, e, n, this[t]);
              })
            : this[0] && this[0][t]
        );
      },
      data: function(e, n) {
        var i = 'data-' + e.replace(m, '-$1').toLowerCase(),
          r = 1 in arguments ? this.attr(i, n) : this.attr(i);
        return null !== r ? Y(r) : t;
      },
      val: function(t) {
        return 0 in arguments
          ? this.each(function(e) {
              this.value = J(this, t, e, this.value);
            })
          : this[0] &&
              (this[0].multiple
                ? n(this[0])
                    .find('option')
                    .filter(function() {
                      return this.selected;
                    })
                    .pluck('value')
                : this[0].value);
      },
      offset: function(t) {
        if (t)
          return this.each(function(e) {
            var i = n(this),
              r = J(this, t, e, i.offset()),
              o = i.offsetParent().offset(),
              s = { top: r.top - o.top, left: r.left - o.left };
            'static' == i.css('position') && (s.position = 'relative'),
              i.css(s);
          });
        if (!this.length) return null;
        var e = this[0].getBoundingClientRect();
        return {
          left: e.left + window.pageXOffset,
          top: e.top + window.pageYOffset,
          width: Math.round(e.width),
          height: Math.round(e.height)
        };
      },
      css: function(t, i) {
        if (arguments.length < 2) {
          var r = this[0],
            o = getComputedStyle(r, '');
          if (!r) return;
          if ('string' == typeof t)
            return r.style[C(t)] || o.getPropertyValue(t);
          if (A(t)) {
            var s = {};
            return (
              n.each(A(t) ? t : [t], function(t, e) {
                s[e] = r.style[C(e)] || o.getPropertyValue(e);
              }),
              s
            );
          }
        }
        var a = '';
        if ('string' == L(t))
          i || 0 === i
            ? (a = F(t) + ':' + H(t, i))
            : this.each(function() {
                this.style.removeProperty(F(t));
              });
        else
          for (e in t)
            t[e] || 0 === t[e]
              ? (a += F(e) + ':' + H(e, t[e]) + ';')
              : this.each(function() {
                  this.style.removeProperty(F(e));
                });
        return this.each(function() {
          this.style.cssText += ';' + a;
        });
      },
      index: function(t) {
        return t
          ? this.indexOf(n(t)[0])
          : this.parent()
              .children()
              .indexOf(this[0]);
      },
      hasClass: function(t) {
        return t
          ? r.some.call(
              this,
              function(t) {
                return this.test(W(t));
              },
              q(t)
            )
          : !1;
      },
      addClass: function(t) {
        return t
          ? this.each(function(e) {
              i = [];
              var r = W(this),
                o = J(this, t, e, r);
              o.split(/\s+/g).forEach(function(t) {
                n(this).hasClass(t) || i.push(t);
              }, this),
                i.length && W(this, r + (r ? ' ' : '') + i.join(' '));
            })
          : this;
      },
      removeClass: function(e) {
        return this.each(function(n) {
          return e === t
            ? W(this, '')
            : ((i = W(this)),
              J(this, e, n, i)
                .split(/\s+/g)
                .forEach(function(t) {
                  i = i.replace(q(t), ' ');
                }),
              void W(this, i.trim()));
        });
      },
      toggleClass: function(e, i) {
        return e
          ? this.each(function(r) {
              var o = n(this),
                s = J(this, e, r, W(this));
              s.split(/\s+/g).forEach(function(e) {
                (i === t ? !o.hasClass(e) : i)
                  ? o.addClass(e)
                  : o.removeClass(e);
              });
            })
          : this;
      },
      scrollTop: function(e) {
        if (this.length) {
          var n = 'scrollTop' in this[0];
          return e === t
            ? n ? this[0].scrollTop : this[0].pageYOffset
            : this.each(
                n
                  ? function() {
                      this.scrollTop = e;
                    }
                  : function() {
                      this.scrollTo(this.scrollX, e);
                    }
              );
        }
      },
      scrollLeft: function(e) {
        if (this.length) {
          var n = 'scrollLeft' in this[0];
          return e === t
            ? n ? this[0].scrollLeft : this[0].pageXOffset
            : this.each(
                n
                  ? function() {
                      this.scrollLeft = e;
                    }
                  : function() {
                      this.scrollTo(e, this.scrollY);
                    }
              );
        }
      },
      position: function() {
        if (this.length) {
          var t = this[0],
            e = this.offsetParent(),
            i = this.offset(),
            r = d.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();
          return (
            (i.top -= parseFloat(n(t).css('margin-top')) || 0),
            (i.left -= parseFloat(n(t).css('margin-left')) || 0),
            (r.top += parseFloat(n(e[0]).css('border-top-width')) || 0),
            (r.left += parseFloat(n(e[0]).css('border-left-width')) || 0),
            { top: i.top - r.top, left: i.left - r.left }
          );
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (
            var t = this.offsetParent || a.body;
            t && !d.test(t.nodeName) && 'static' == n(t).css('position');

          )
            t = t.offsetParent;
          return t;
        });
      }
    }),
    (n.fn.detach = n.fn.remove),
    ['width', 'height'].forEach(function(e) {
      var i = e.replace(/./, function(t) {
        return t[0].toUpperCase();
      });
      n.fn[e] = function(r) {
        var o,
          s = this[0];
        return r === t
          ? $(s)
            ? s['inner' + i]
            : _(s)
              ? s.documentElement['scroll' + i]
              : (o = this.offset()) && o[e]
          : this.each(function(t) {
              (s = n(this)), s.css(e, J(this, r, t, s[e]()));
            });
      };
    }),
    v.forEach(function(t, e) {
      var i = e % 2;
      (n.fn[t] = function() {
        var t,
          o,
          r = n.map(arguments, function(e) {
            return (
              (t = L(e)),
              'object' == t || 'array' == t || null == e ? e : T.fragment(e)
            );
          }),
          s = this.length > 1;
        return r.length < 1
          ? this
          : this.each(function(t, u) {
              (o = i ? u : u.parentNode),
                (u =
                  0 == e
                    ? u.nextSibling
                    : 1 == e ? u.firstChild : 2 == e ? u : null);
              var f = n.contains(a.documentElement, o);
              r.forEach(function(t) {
                if (s) t = t.cloneNode(!0);
                else if (!o) return n(t).remove();
                o.insertBefore(t, u),
                  f &&
                    G(t, function(t) {
                      null == t.nodeName ||
                        'SCRIPT' !== t.nodeName.toUpperCase() ||
                        (t.type && 'text/javascript' !== t.type) ||
                        t.src ||
                        window.eval.call(window, t.innerHTML);
                    });
              });
            });
      }),
        (n.fn[i ? t + 'To' : 'insert' + (e ? 'Before' : 'After')] = function(
          e
        ) {
          return n(e)[t](this), this;
        });
    }),
    (T.Z.prototype = n.fn),
    (T.uniq = N),
    (T.deserializeValue = Y),
    (n.zepto = T),
    n
  );
})();
(window.Zepto = Zepto),
  void 0 === window.$ && (window.$ = Zepto),
  (function(t) {
    function l(t) {
      return t._zid || (t._zid = e++);
    }
    function h(t, e, n, i) {
      if (((e = p(e)), e.ns)) var r = d(e.ns);
      return (s[l(t)] || []).filter(function(t) {
        return !(
          !t ||
          (e.e && t.e != e.e) ||
          (e.ns && !r.test(t.ns)) ||
          (n && l(t.fn) !== l(n)) ||
          (i && t.sel != i)
        );
      });
    }
    function p(t) {
      var e = ('' + t).split('.');
      return {
        e: e[0],
        ns: e
          .slice(1)
          .sort()
          .join(' ')
      };
    }
    function d(t) {
      return new RegExp('(?:^| )' + t.replace(' ', ' .* ?') + '(?: |$)');
    }
    function m(t, e) {
      return (t.del && !u && t.e in f) || !!e;
    }
    function g(t) {
      return c[t] || (u && f[t]) || t;
    }
    function v(e, i, r, o, a, u, f) {
      var h = l(e),
        d = s[h] || (s[h] = []);
      i.split(/\s/).forEach(function(i) {
        if ('ready' == i) return t(document).ready(r);
        var s = p(i);
        (s.fn = r),
          (s.sel = a),
          s.e in c &&
            (r = function(e) {
              var n = e.relatedTarget;
              return !n || (n !== this && !t.contains(this, n))
                ? s.fn.apply(this, arguments)
                : void 0;
            }),
          (s.del = u);
        var l = u || r;
        (s.proxy = function(t) {
          if (((t = j(t)), !t.isImmediatePropagationStopped())) {
            t.data = o;
            var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
            return i === !1 && (t.preventDefault(), t.stopPropagation()), i;
          }
        }),
          (s.i = d.length),
          d.push(s),
          'addEventListener' in e &&
            e.addEventListener(g(s.e), s.proxy, m(s, f));
      });
    }
    function y(t, e, n, i, r) {
      var o = l(t);
      (e || '').split(/\s/).forEach(function(e) {
        h(t, e, n, i).forEach(function(e) {
          delete s[o][e.i],
            'removeEventListener' in t &&
              t.removeEventListener(g(e.e), e.proxy, m(e, r));
        });
      });
    }
    function j(e, i) {
      return (
        (i || !e.isDefaultPrevented) &&
          (i || (i = e),
          t.each(E, function(t, n) {
            var r = i[t];
            (e[t] = function() {
              return (this[n] = x), r && r.apply(i, arguments);
            }),
              (e[n] = b);
          }),
          (i.defaultPrevented !== n
            ? i.defaultPrevented
            : 'returnValue' in i
              ? i.returnValue === !1
              : i.getPreventDefault && i.getPreventDefault()) &&
            (e.isDefaultPrevented = x)),
        e
      );
    }
    function S(t) {
      var e,
        i = { originalEvent: t };
      for (e in t) w.test(e) || t[e] === n || (i[e] = t[e]);
      return j(i, t);
    }
    var n,
      e = 1,
      i = Array.prototype.slice,
      r = t.isFunction,
      o = function(t) {
        return 'string' == typeof t;
      },
      s = {},
      a = {},
      u = 'onfocusin' in window,
      f = { focus: 'focusin', blur: 'focusout' },
      c = { mouseenter: 'mouseover', mouseleave: 'mouseout' };
    (a.click = a.mousedown = a.mouseup = a.mousemove = 'MouseEvents'),
      (t.event = { add: v, remove: y }),
      (t.proxy = function(e, n) {
        var s = 2 in arguments && i.call(arguments, 2);
        if (r(e)) {
          var a = function() {
            return e.apply(n, s ? s.concat(i.call(arguments)) : arguments);
          };
          return (a._zid = l(e)), a;
        }
        if (o(n))
          return s
            ? (s.unshift(e[n], e), t.proxy.apply(null, s))
            : t.proxy(e[n], e);
        throw new TypeError('expected function');
      }),
      (t.fn.bind = function(t, e, n) {
        return this.on(t, e, n);
      }),
      (t.fn.unbind = function(t, e) {
        return this.off(t, e);
      }),
      (t.fn.one = function(t, e, n, i) {
        return this.on(t, e, n, i, 1);
      });
    var x = function() {
        return !0;
      },
      b = function() {
        return !1;
      },
      w = /^([A-Z]|returnValue$|layer[XY]$)/,
      E = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      };
    (t.fn.delegate = function(t, e, n) {
      return this.on(e, t, n);
    }),
      (t.fn.undelegate = function(t, e, n) {
        return this.off(e, t, n);
      }),
      (t.fn.live = function(e, n) {
        return t(document.body).delegate(this.selector, e, n), this;
      }),
      (t.fn.die = function(e, n) {
        return t(document.body).undelegate(this.selector, e, n), this;
      }),
      (t.fn.on = function(e, s, a, u, f) {
        var c,
          l,
          h = this;
        return e && !o(e)
          ? (t.each(e, function(t, e) {
              h.on(t, s, a, e, f);
            }),
            h)
          : (o(s) || r(u) || u === !1 || ((u = a), (a = s), (s = n)),
            (r(a) || a === !1) && ((u = a), (a = n)),
            u === !1 && (u = b),
            h.each(function(n, r) {
              f &&
                (c = function(t) {
                  return y(r, t.type, u), u.apply(this, arguments);
                }),
                s &&
                  (l = function(e) {
                    var n,
                      o = t(e.target)
                        .closest(s, r)
                        .get(0);
                    return o && o !== r
                      ? ((n = t.extend(S(e), {
                          currentTarget: o,
                          liveFired: r
                        })),
                        (c || u).apply(o, [n].concat(i.call(arguments, 1))))
                      : void 0;
                  }),
                v(r, e, u, a, s, l || c);
            }));
      }),
      (t.fn.off = function(e, i, s) {
        var a = this;
        return e && !o(e)
          ? (t.each(e, function(t, e) {
              a.off(t, i, e);
            }),
            a)
          : (o(i) || r(s) || s === !1 || ((s = i), (i = n)),
            s === !1 && (s = b),
            a.each(function() {
              y(this, e, s, i);
            }));
      }),
      (t.fn.trigger = function(e, n) {
        return (
          (e = o(e) || t.isPlainObject(e) ? t.Event(e) : j(e)),
          (e._args = n),
          this.each(function() {
            'dispatchEvent' in this
              ? this.dispatchEvent(e)
              : t(this).triggerHandler(e, n);
          })
        );
      }),
      (t.fn.triggerHandler = function(e, n) {
        var i, r;
        return (
          this.each(function(s, a) {
            (i = S(o(e) ? t.Event(e) : e)),
              (i._args = n),
              (i.target = a),
              t.each(h(a, e.type || e), function(t, e) {
                return (
                  (r = e.proxy(i)),
                  i.isImmediatePropagationStopped() ? !1 : void 0
                );
              });
          }),
          r
        );
      }),
      'focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error'
        .split(' ')
        .forEach(function(e) {
          t.fn[e] = function(t) {
            return t ? this.bind(e, t) : this.trigger(e);
          };
        }),
      ['focus', 'blur'].forEach(function(e) {
        t.fn[e] = function(t) {
          return (
            t
              ? this.bind(e, t)
              : this.each(function() {
                  try {
                    this[e]();
                  } catch (t) {}
                }),
            this
          );
        };
      }),
      (t.Event = function(t, e) {
        o(t) || ((e = t), (t = e.type));
        var n = document.createEvent(a[t] || 'Events'),
          i = !0;
        if (e) for (var r in e) 'bubbles' == r ? (i = !!e[r]) : (n[r] = e[r]);
        return n.initEvent(t, i, !0), j(n);
      });
  })(Zepto),
  (function(t) {
    function l(e, n, i) {
      var r = t.Event(n);
      return t(e).trigger(r, i), !r.isDefaultPrevented();
    }
    function h(t, e, i, r) {
      return t.global ? l(e || n, i, r) : void 0;
    }
    function p(e) {
      e.global && 0 === t.active++ && h(e, null, 'ajaxStart');
    }
    function d(e) {
      e.global && !--t.active && h(e, null, 'ajaxStop');
    }
    function m(t, e) {
      var n = e.context;
      return e.beforeSend.call(n, t, e) === !1 ||
        h(e, n, 'ajaxBeforeSend', [t, e]) === !1
        ? !1
        : void h(e, n, 'ajaxSend', [t, e]);
    }
    function g(t, e, n, i) {
      var r = n.context,
        o = 'success';
      n.success.call(r, t, o, e),
        i && i.resolveWith(r, [t, o, e]),
        h(n, r, 'ajaxSuccess', [e, n, t]),
        y(o, e, n);
    }
    function v(t, e, n, i, r) {
      var o = i.context;
      i.error.call(o, n, e, t),
        r && r.rejectWith(o, [n, e, t]),
        h(i, o, 'ajaxError', [n, i, t || e]),
        y(e, n, i);
    }
    function y(t, e, n) {
      var i = n.context;
      n.complete.call(i, e, t), h(n, i, 'ajaxComplete', [e, n]), d(n);
    }
    function x() {}
    function b(t) {
      return (
        t && (t = t.split(';', 2)[0]),
        (t &&
          (t == f
            ? 'html'
            : t == u ? 'json' : s.test(t) ? 'script' : a.test(t) && 'xml')) ||
          'text'
      );
    }
    function w(t, e) {
      return '' == e ? t : (t + '&' + e).replace(/[&?]{1,2}/, '?');
    }
    function E(e) {
      e.processData &&
        e.data &&
        'string' != t.type(e.data) &&
        (e.data = t.param(e.data, e.traditional)),
        !e.data ||
          (e.type && 'GET' != e.type.toUpperCase()) ||
          ((e.url = w(e.url, e.data)), (e.data = void 0));
    }
    function j(e, n, i, r) {
      return (
        t.isFunction(n) && ((r = i), (i = n), (n = void 0)),
        t.isFunction(i) || ((r = i), (i = void 0)),
        { url: e, data: n, success: i, dataType: r }
      );
    }
    function T(e, n, i, r) {
      var o,
        s = t.isArray(n),
        a = t.isPlainObject(n);
      t.each(n, function(n, u) {
        (o = t.type(u)),
          r &&
            (n = i
              ? r
              : r + '[' + (a || 'object' == o || 'array' == o ? n : '') + ']'),
          !r && s
            ? e.add(u.name, u.value)
            : 'array' == o || (!i && 'object' == o)
              ? T(e, u, i, n)
              : e.add(n, u);
      });
    }
    var i,
      r,
      e = 0,
      n = window.document,
      o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      s = /^(?:text|application)\/javascript/i,
      a = /^(?:text|application)\/xml/i,
      u = 'application/json',
      f = 'text/html',
      c = /^\s*$/;
    (t.active = 0),
      (t.ajaxJSONP = function(i, r) {
        if (!('type' in i)) return t.ajax(i);
        var f,
          h,
          o = i.jsonpCallback,
          s = (t.isFunction(o) ? o() : o) || 'jsonp' + ++e,
          a = n.createElement('script'),
          u = window[s],
          c = function(e) {
            t(a).triggerHandler('error', e || 'abort');
          },
          l = { abort: c };
        return (
          r && r.promise(l),
          t(a).on('load error', function(e, n) {
            clearTimeout(h),
              t(a)
                .off()
                .remove(),
              'error' != e.type && f
                ? g(f[0], l, i, r)
                : v(null, n || 'error', l, i, r),
              (window[s] = u),
              f && t.isFunction(u) && u(f[0]),
              (u = f = void 0);
          }),
          m(l, i) === !1
            ? (c('abort'), l)
            : ((window[s] = function() {
                f = arguments;
              }),
              (a.src = i.url.replace(/\?(.+)=\?/, '?$1=' + s)),
              n.head.appendChild(a),
              i.timeout > 0 &&
                (h = setTimeout(function() {
                  c('timeout');
                }, i.timeout)),
              l)
        );
      }),
      (t.ajaxSettings = {
        type: 'GET',
        beforeSend: x,
        success: x,
        error: x,
        complete: x,
        context: null,
        global: !0,
        xhr: function() {
          return new window.XMLHttpRequest();
        },
        accepts: {
          script:
            'text/javascript, application/javascript, application/x-javascript',
          json: u,
          xml: 'application/xml, text/xml',
          html: f,
          text: 'text/plain'
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
      }),
      (t.ajax = function(e) {
        var n = t.extend({}, e || {}),
          o = t.Deferred && t.Deferred();
        for (i in t.ajaxSettings) void 0 === n[i] && (n[i] = t.ajaxSettings[i]);
        p(n),
          n.crossDomain ||
            (n.crossDomain =
              /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) &&
              RegExp.$2 != window.location.host),
          n.url || (n.url = window.location.toString()),
          E(n);
        var s = n.dataType,
          a = /\?.+=\?/.test(n.url);
        if (
          (a && (s = 'jsonp'),
          (n.cache !== !1 &&
            ((e && e.cache === !0) || ('script' != s && 'jsonp' != s))) ||
            (n.url = w(n.url, '_=' + Date.now())),
          'jsonp' == s)
        )
          return (
            a ||
              (n.url = w(
                n.url,
                n.jsonp ? n.jsonp + '=?' : n.jsonp === !1 ? '' : 'callback=?'
              )),
            t.ajaxJSONP(n, o)
          );
        var j,
          u = n.accepts[s],
          f = {},
          l = function(t, e) {
            f[t.toLowerCase()] = [t, e];
          },
          h = /^([\w-]+:)\/\//.test(n.url)
            ? RegExp.$1
            : window.location.protocol,
          d = n.xhr(),
          y = d.setRequestHeader;
        if (
          (o && o.promise(d),
          n.crossDomain || l('X-Requested-With', 'XMLHttpRequest'),
          l('Accept', u || '*/*'),
          (u = n.mimeType || u) &&
            (u.indexOf(',') > -1 && (u = u.split(',', 2)[0]),
            d.overrideMimeType && d.overrideMimeType(u)),
          (n.contentType ||
            (n.contentType !== !1 &&
              n.data &&
              'GET' != n.type.toUpperCase())) &&
            l(
              'Content-Type',
              n.contentType || 'application/x-www-form-urlencoded'
            ),
          n.headers)
        )
          for (r in n.headers) l(r, n.headers[r]);
        if (
          ((d.setRequestHeader = l),
          (d.onreadystatechange = function() {
            if (4 == d.readyState) {
              (d.onreadystatechange = x), clearTimeout(j);
              var e,
                i = !1;
              if (
                (d.status >= 200 && d.status < 300) ||
                304 == d.status ||
                (0 == d.status && 'file:' == h)
              ) {
                (s = s || b(n.mimeType || d.getResponseHeader('content-type'))),
                  (e = d.responseText);
                try {
                  'script' == s
                    ? (1, eval)(e)
                    : 'xml' == s
                      ? (e = d.responseXML)
                      : 'json' == s && (e = c.test(e) ? null : t.parseJSON(e));
                } catch (r) {
                  i = r;
                }
                i ? v(i, 'parsererror', d, n, o) : g(e, d, n, o);
              } else
                v(d.statusText || null, d.status ? 'error' : 'abort', d, n, o);
            }
          }),
          m(d, n) === !1)
        )
          return d.abort(), v(null, 'abort', d, n, o), d;
        if (n.xhrFields) for (r in n.xhrFields) d[r] = n.xhrFields[r];
        var S = 'async' in n ? n.async : !0;
        d.open(n.type, n.url, S, n.username, n.password);
        for (r in f) y.apply(d, f[r]);
        return (
          n.timeout > 0 &&
            (j = setTimeout(function() {
              (d.onreadystatechange = x),
                d.abort(),
                v(null, 'timeout', d, n, o);
            }, n.timeout)),
          d.send(n.data ? n.data : null),
          d
        );
      }),
      (t.get = function() {
        return t.ajax(j.apply(null, arguments));
      }),
      (t.post = function() {
        var e = j.apply(null, arguments);
        return (e.type = 'POST'), t.ajax(e);
      }),
      (t.getJSON = function() {
        var e = j.apply(null, arguments);
        return (e.dataType = 'json'), t.ajax(e);
      }),
      (t.fn.load = function(e, n, i) {
        if (!this.length) return this;
        var a,
          r = this,
          s = e.split(/\s/),
          u = j(e, n, i),
          f = u.success;
        return (
          s.length > 1 && ((u.url = s[0]), (a = s[1])),
          (u.success = function(e) {
            r.html(
              a
                ? t('<div>')
                    .html(e.replace(o, ''))
                    .find(a)
                : e
            ),
              f && f.apply(r, arguments);
          }),
          t.ajax(u),
          this
        );
      });
    var S = encodeURIComponent;
    t.param = function(t, e) {
      var n = [];
      return (
        (n.add = function(t, e) {
          this.push(S(t) + '=' + S(e));
        }),
        T(n, t, e),
        n.join('&').replace(/%20/g, '+')
      );
    };
  })(Zepto),
  (function(t) {
    (t.fn.serializeArray = function() {
      var n,
        e = [];
      return (
        t([].slice.call(this.get(0).elements)).each(function() {
          n = t(this);
          var i = n.attr('type');
          'fieldset' != this.nodeName.toLowerCase() &&
            !this.disabled &&
            'submit' != i &&
            'reset' != i &&
            'button' != i &&
            (('radio' != i && 'checkbox' != i) || this.checked) &&
            e.push({ name: n.attr('name'), value: n.val() });
        }),
        e
      );
    }),
      (t.fn.serialize = function() {
        var t = [];
        return (
          this.serializeArray().forEach(function(e) {
            t.push(
              encodeURIComponent(e.name) + '=' + encodeURIComponent(e.value)
            );
          }),
          t.join('&')
        );
      }),
      (t.fn.submit = function(e) {
        if (e) this.bind('submit', e);
        else if (this.length) {
          var n = t.Event('submit');
          this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit();
        }
        return this;
      });
  })(Zepto),
  (function(t) {
    '__proto__' in {} ||
      t.extend(t.zepto, {
        Z: function(e, n) {
          return (
            (e = e || []),
            t.extend(e, t.fn),
            (e.selector = n || ''),
            (e.__Z = !0),
            e
          );
        },
        isZ: function(e) {
          return 'array' === t.type(e) && '__Z' in e;
        }
      });
    try {
      getComputedStyle(void 0);
    } catch (e) {
      var n = getComputedStyle;
      window.getComputedStyle = function(t) {
        try {
          return n(t);
        } catch (e) {
          return null;
        }
      };
    }
  })(Zepto);
//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
(function($) {
  function detect(ua) {
    var os = (this.os = {}),
      browser = (this.browser = {}),
      webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
      android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
      osx = !!ua.match(/\(Macintosh\; Intel /),
      ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
      ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
      iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
      webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
      wp = ua.match(/Windows Phone ([\d.]+)/),
      touchpad = webos && ua.match(/TouchPad/),
      kindle = ua.match(/Kindle\/([\d.]+)/),
      silk = ua.match(/Silk\/([\d._]+)/),
      blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
      bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
      rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
      playbook = ua.match(/PlayBook/),
      chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
      firefox = ua.match(/Firefox\/([\d.]+)/),
      ie =
        ua.match(/MSIE\s([\d.]+)/) ||
        ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
      webview =
        !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
      safari =
        webview ||
        ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
    // Todo: clean this up with a better OS/browser seperation:
    // - discern (more) between multiple browsers on android
    // - decide if kindle fire in silk mode is android or not
    // - Firefox on Android doesn't specify the Android version
    // - possibly devide in os, device and browser hashes
    if ((browser.webkit = !!webkit)) browser.version = webkit[1];
    if (android) (os.android = true), (os.version = android[2]);
    if (iphone && !ipod)
      (os.ios = os.iphone = true), (os.version = iphone[2].replace(/_/g, '.'));
    if (ipad)
      (os.ios = os.ipad = true), (os.version = ipad[2].replace(/_/g, '.'));
    if (ipod)
      (os.ios = os.ipod = true),
        (os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null);
    if (wp) (os.wp = true), (os.version = wp[1]);
    if (webos) (os.webos = true), (os.version = webos[2]);
    if (touchpad) os.touchpad = true;
    if (blackberry) (os.blackberry = true), (os.version = blackberry[2]);
    if (bb10) (os.bb10 = true), (os.version = bb10[2]);
    if (rimtabletos) (os.rimtabletos = true), (os.version = rimtabletos[2]);
    if (playbook) browser.playbook = true;
    if (kindle) (os.kindle = true), (os.version = kindle[1]);
    if (silk) (browser.silk = true), (browser.version = silk[1]);
    if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true;
    if (chrome) (browser.chrome = true), (browser.version = chrome[1]);
    if (firefox) (browser.firefox = true), (browser.version = firefox[1]);
    if (ie) (browser.ie = true), (browser.version = ie[1]);
    if (safari && (osx || os.ios)) {
      browser.safari = true;
      if (osx) browser.version = safari[1];
    }
    if (webview) browser.webview = true;
    os.tablet = !!(
      ipad ||
      playbook ||
      (android && !ua.match(/Mobile/)) ||
      (firefox && ua.match(/Tablet/)) ||
      (ie && !ua.match(/Phone/) && ua.match(/Touch/))
    );
    os.phone = !!(
      !os.tablet &&
      !os.ipod &&
      (android ||
        iphone ||
        webos ||
        blackberry ||
        bb10 ||
        (chrome && ua.match(/Android/)) ||
        (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
        (firefox && ua.match(/Mobile/)) ||
        (ie && ua.match(/Touch/)))
    );
  }
  detect.call($, navigator.userAgent);
  // make available to unit tests
  $.__detect = detect;
})(Zepto);
/**
 * 理财通移动端库文件扩展
 * 对基本方法进行扩展，包括sessionStorage、localStorage、cookie、url操作等
 * @author slarkzhang & taylenxu
 * @date 2014.7.22
 * @version 1.1
 */
(function() {
  /**
   * 本地存储的特性检测
   * @method checkStorage
   * @private
   * @param  {Object} o 检测的存储类型
   * @return {Boolean} 是否支持该种类型的缓存
   */
  var checkStorage = function(o) {
    var key = 'STOARGE_TEST',
      value;
    try {
      o.setItem(key, 1);
      value = o.getItem(key);
      o.removeItem(key);
      return value == 1;
    } catch (e) {
      return false;
    }
  };
  /**
   * 判断当前宿主是否支持sessionStorage、localStorage
   * @property $.isSessionAble
   * @property $.isLocalAble
   * @type Boolean
   */
  try {
    //兼容IOS7 中禁用cookie的情况：出现localStorage或者sessionStorage就会异常
    $.isSessionAble = checkStorage(window.sessionStorage);
    $.isLocalAble = checkStorage(window.localStorage);
  } catch (e) {
    $.isSessionAble = false;
    $.isLocalAble = false;
  }
  /**
   * 本地存储操作接口
   */
  var storage = (function() {
    var MAX_TRY = 20; //最大尝试写入次数 如果超过这个次数，依然发生异常则抛出错误提示
    var count = MAX_TRY;
    /**
     * 读取本地存储的数据
     * @param {String} key 存储的键值
     * @param {String} value 存储的值信息
     * @param {Boolean} [persistence:false] 是否持久化，也就是使用localStorage进行存储
     */
    var _setItem = function(key, value, persistence) {
      var cache = {
          v: value,
          t: +new Date()
        },
        o;
      //数据格式不正确转换可能导致发生异常
      try {
        o = JSON.stringify(cache);
      } catch (e) {
        throw new Error('JSON数据格式异常：' + e.message);
      }
      try {
        if (persistence) {
          $.isLocalAble && window.localStorage.setItem(key, o);
        } else {
          $.isSessionAble && window.sessionStorage.setItem(key, o);
        }
      } catch (e) {
        //如果发生写入缓存异常则去除旧的数据后重新尝试写入
        // count--;
        // if (count >= 0) {
        //     _shiftByTime(persistence);
        //     arguments.callee(key, value, persistence);
        // } else {
        throw new Error('写入缓存异常：' + e.message);
        // }
      }
    };
    /**
     * 获取本地存储的值信息
     * @param {String} key 获取缓存的键值
     * @param {Boolean} [persistence:false] 是否从localStorage中读取数据
     * @return {Object|String} 本地存储指定的键值的数据
     */
    var _getItem = function(key, persistence) {
      var o, v;
      if (persistence) {
        o = window.localStorage.getItem(key);
      } else {
        o = window.sessionStorage.getItem(key);
      }
      o = $.parseJSON(o);
      v = o && o.v;
      return $.isPlainObject(v)
        ? $.extend(true, {}, v)
        : $.isArray(v) ? $.extend(true, [], v) : v;
    };
    /**
     * 移除本地存储中指定键值的数据
     * @param {String} key 移除缓存的键值
     * @param {Boolean} [persistence:false] 是否从localStorage中移除缓存
     */
    var _removeItem = function(key, persistence) {
      count = MAX_TRY; //复位
      if (persistence) {
        window.localStorage.removeItem(key);
      } else {
        window.sessionStorage.removeItem(key);
      }
    };
    /**
     * 根据时间排除旧的数据
     * @method _shiftByTime
     * @private
     * @param {Boolean} [persistence:false] session 还是 local
     */
    var _shiftByTime = function(persistence) {
      var tar = persistence ? window.localStorage : window.sessionStorage;
      var old, key;
      for (var k in tar) {
        var temp = $.parseJSON(tar.k);
        if (key) {
          old = old.t > temp.t ? temp : old;
          key = old.t > temp.t ? k : key;
        } else {
          old = temp;
          key = k;
        }
      }
      if (key) {
        _removeItem(key, persistence);
      }
    };
    //外露接口
    return {
      setItem: _setItem,
      getItem: _getItem,
      removeItem: _removeItem
    };
  })();
  /**
   * 默认将缓存写入到sessionStorage，如果不支持该特性则写入window.name/兼容各个平台下可能出现的sessionStorage或者cookie不能写入的情况
   *   建议不要存储过大的数据，防止可能会超出window.name的长度限制，控制在65K以下
   *   页面JS中请不要对window.name进行赋值操作
   *   如果缓存的内容需要跨域读写，请添加force参数为true
   */
  var sessionStorage = {
    /**
     * 获取window.name中数据
     *
     * @method getWindow
     * @private
     * @return {Object} window.name转换后的对象
     */
    getWindow: function() {
      try {
        return $.parseJSON(window.name || '{}');
      } catch (e) {
        return {};
      }
    },
    /**
     * 设置window.name的数据
     * @private
     * @param {Object} data 需要写入到window.name中的缓存数据
     */
    setWindow: function(data) {
      data && (window.name = JSON.stringify(data));
    },
    /**
     * 根据key获取session级的缓存
     * @param  {String} key 获取的缓存键值名
     * @param  {Boolean} [force:false] 是否强制使用window.name
     */
    getItem: function(key, force) {
      if ($.isSessionAble && !force) {
        return storage.getItem(key, false);
      } else {
        var data = this.getWindow();
        if ($.isPlainObject(data)) {
          return data[key];
        }
      }
    },
    /**
     * 设置session级的缓存
     * @param {String} key   存储的键值
     * @param {String} value 存储的值
     * @param {Boolean} merge 是否进行合并
     * @param {Boolean} [force:false] 是否强制使用window.name
     */
    setItem: function(key, value, merge, force) {
      if (
        merge &&
        $.isPlainObject(value) &&
        $.isPlainObject(this.getItem(key))
      ) {
        value = $.extend(this.getItem(key), value);
      }
      if ($.isSessionAble && !force) {
        storage.setItem(key, value, false);
      } else {
        var data = this.getWindow();
        if (!$.isPlainObject(data)) {
          data = {};
        }
        data[key] = value;
        this.setWindow(data);
      }
    },
    /**
     * 删除指定的session缓存
     *
     * @method $.sessionStorage.removeItem
     * @param  {String} key 删除的键值
     * @param  {Boolean} [force:false] 是否强制使用window.name
     */
    removeItem: function(key, force) {
      if ($.isSessionAble && !force) {
        storage.removeItem(key, false);
      } else {
        var data = this.getWindow();
        if ($.isPlainObject(data)) {
          delete data[key];
          this.setWindow(data);
        }
      }
    }
  };
  //localStorage检测
  var localStorage = {
    getItem: function(key) {
      return storage.getItem(key, true);
    },
    setItem: function(key, value) {
      storage.setItem(key, value, true);
    },
    removeItem: function(key) {
      storage.removeItem(key, true);
    }
  };
  // 扩展到zepto上
  $.extend($, {
    /**
     * 模板替换
     * @param {String} tlp 格式化的模板字符创
     * @param {Object} metaData 变量替换的元数据对象
     * @param {RegExp} reg 查询正则 - 可选，默认：/^\$\{(\w+)\}$/g
     * @return {[type]}          [description]
     */
    format: function(tpl, metaData, reg) {
      var reg = reg || /\$\{(\w+)\}/g;
      if (!tpl || !metaData || !$.isPlainObject(metaData)) {
        return '';
      } else {
        return tpl.replace(reg, function(m, n, o) {
          return typeof metaData[n] === undefined ? '' : metaData[n];
        });
      }
    },
    /**
     * 将字符串转换为JSON格式，如果参数为对象则直接返回
     * @method $.parseJSON
     * @param {String|Object} data 需要进行格式转换的数据
     * @return {Object} 转换后的JSON数据
     */
    parseJSON: function(data) {
      if (!data || typeof data != 'string') {
        return data;
      }
      data = $.trim(data);
      try {
        data = JSON.parse(data);
      } catch (e) {
        data = new Function('return ' + data)();
      }
      return data;
    },
    /**
     * 获取cookie信息
     *
     * @method $.getCookie
     * @param {String} name 获取的cookie的键值
     * @return {String} 获取的cookie值
     */
    getCookie: function(name) {
      var re = new RegExp('(?:^|;+|\\s+)' + name + '=([^;]*)');
      var result = document.cookie.match(re);
      return !result ? '' : result[1];
    },
    /**
     * 设置cookie信息(基础方法，建议保持完整性)
     *
     * @method $.setCookie
     * @param {String} name 设置cookie的键值
     * @param {String} value 设置的cookie的值
     * @param {String} [domain:tenpay.com] 设置cookie的域名，默认在财付通的根域
     * @param {String} [path:/] cookie存放的路径
     * @param {Number} minuts 设置的cookie的有效期
     */
    setCookie: function(name, value, domain, path, minute) {
      if (minute) {
        var now = new Date(),
          expire = new Date();
        expire.setTime(parseFloat(+now) + 60 * 1000 * minute);
      }
      document.cookie =
        name +
        '=' +
        value +
        '; ' +
        (minute ? 'expires=' + expire.toUTCString() + '; ' : '') +
        ('path=' +
          (path || '/') +
          '; domain=' +
          (domain || 'tenpay.com') +
          ';');
    },
    /**
     * 删除cookie信息(基础方法，建议保持完整性)
     *
     * @method $.removeCookie
     * @param {String} name 被删除cookie的键值
     * @param {String} [domain:tenpay.com] 被删除cookie所在的域名
     * @param {String} [path:/] 被删除cookie存放的路径
     */
    removeCookie: function(name, domain, path) {
      document.cookie =
        name +
        '=; expires=Mon, 2 Mar 2009 19:00:00 UTC; path=' +
        (path || '/') +
        '; domain=' +
        (domain || 'tenpay.com') +
        ';';
    },
    /**
     * 获取url或者自定义的hash字符串中的参数信息
     *
     * @method $.getParameter
     * @param {String} name 不传name则直接返回整个参数对象
     * @param {String} param 转成对象的hash字符串
     * @return {String|Object} 获取到的参数值或者由所有参数组成完整对象
     */
    getParameter: function(name, param) {
      var obj = {},
        tmp,
        str = $.type(param) == 'string' ? param : location.search.substring(1);
      var arr = str.split('&');
      if (arr.length > 0) {
        for (var i = 0, l = arr.length; i < l; i++) {
          try {
            if (/(.*?)=(.*)/.test(arr[i])) {
              var k = RegExp.$1;
              var v = RegExp.$2;
              obj[k] = this.filterScript(v);
            }
          } catch (e) {}
        }
      }
      return name ? obj[name] : obj;
    },
    /**
     * 过滤XSS的非法字符
     *
     * @method $.filterScript
     * @param {String} str 需要进行过滤的字符串
     */
    filterScript: function(str) {
      var text = document.createTextNode(str),
        parser = document.createElement('div'),
        value = '';
      parser.appendChild(text);
      value = parser.innerHTML;
      text = null;
      parser = null;
      return value;
    },
    sessionStorage: sessionStorage,
    localStorage: localStorage
  });
  /**
   * 判断当前宿主是否支持cookie
   * @property $.isCookieAble
   * @type Boolean
   */
  $.isCookieAble = (function() {
    var key = 'cookie_test',
      v;
    $.setCookie(key, '1');
    v = $.getCookie(key);
    $.removeCookie(key);
    return v == '1' && navigator.cookieEnabled;
  })();
  /*模块加载控制*/
  seajs.config({
    base: 'js/'
  });
  // 模块加载控制
  if (window.DEV_MODE == 'ONLINE') {
    seajs.on('fetch', function(data) {
      var param = (window.MODS || []).join('&');
      var fileName = data.uri.replace(/(?:.*\/)(.*)\.js(\?.*)?/, '$1');
      if (param.indexOf(fileName + '-min.js') > 0) {
        data.requestUri = '/mergefile?' + param;
      } else {
        data.requestUri = data.uri;
      }
    });
  } else {
    seajs.on('fetch', function(data) {
      if (data.uri.indexOf('soundjs.js') >= 0) {
        data.requestUri =
          '//shipg.cdn.bcebos.com/sua/js/js/mod/soundjs.js?v=' + +new Date();
      }
      if (data.uri.indexOf('v=') >= 0) {
        return;
      }
      data.requestUri = data.uri + '?v=' + +new Date();
    });
  }
})();

(function() {
  var IS_ONLINE = window.DEV_MODE == 'ONLINE';
  var MOD_CACHE = '20150714a';
  var list = [],
    timestamp = +new Date();
  var versions = {
    '//shipg.cdn.bcebos.com/sua/js/app.js': '20150714d',
    '//shipg.cdn.bcebos.com/sua/js/index.js': '20150724',
    '//shipg.cdn.bcebos.com/sua/js/game.js': '20150715',
    '//shipg.cdn.bcebos.com/sua/js/soundjs.js': '20150714d'
  };
  for (var p in versions) {
    list.push([
      p,
      p.replace('.js', '') +
        (IS_ONLINE ? '-min' : '') +
        '.js?v=' +
        (!IS_ONLINE ? timestamp : versions[p])
    ]);
  }
  seajs.config({
    base: 'js/',
    map: list
  });
})();
function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = location.search.substr(1).match(reg);
  if (r != null) return unescape(decodeURI(r[2]));
  return null;
}

function addShareCount() {
  var shareUserId = localStorage.getItem('needAddShareCount');
  if (null != shareUserId && 0 != shareUserId) {
    localStorage.setItem('needAddShareCount', 0);
  }
}

function subShareCount(minusNum) {
  if (null != currentUser && 0 != currentUser) {
  }
}

var TUI_GUANG_NUM = 100;
var fromUser = getFromUser();
var currentUser = getCurrentUser();
var serverLuckNum = 0;
$(function() {
  getLuckyNum();
  addShareCount();

  if (0 == fromUser) {
  } else {
    $('#game_first').removeClass('hide');
  }

  seajs.use(['app.js', 'game.js', 'soundjs.js'], function(app, logic, sound) {
    app.init(function() {
      logic.init();
    });
  });
});

function getFromUser() {
  if (null == getTuiguangChannel()) {
    setTuiguangChannel(getQueryString('channel'));
  }
  var fromUser = localStorage.getItem('fromUser');
  if (1 == getQueryString('fromGZH') && 0 != fromUser) {
    localStorage.setItem('needAddShareCount', fromUser);
    fromUser = 0;
    localStorage.setItem('fromUser', fromUser);
  }
  if (null == fromUser) {
    fromUser = getQueryString('userId');
    if (null == fromUser) {
      fromUser = 0;
    }
    localStorage.setItem('fromUser', fromUser);
    localStorage.setItem('needAddShareCount', fromUser);
    fromUser = 0;
    localStorage.setItem('fromUser', fromUser);
  }
  return fromUser;
}

function getCurrentUser() {
  var currentUser = localStorage.getItem('curUser');
  if (null == currentUser || '' == currentUser) {
    currentUser = parseInt(Date.now() + Math.random() * 100000000000);
    localStorage.setItem('curUser', currentUser);
  }
  if (currentUser != getQueryString('userId')) {
    var randomInt = parseInt(Math.random() * TUI_GUANG_NUM);
    var channel = randomInt;
    //            window.location.href = 'index.html?userId='+currentUser+'&channel='+channel;
  }
  return currentUser;
}

function getLuckyNum() {
  var luckyNums = localStorage.getItem('luckyNums');
  if (null == luckyNums || '' == luckyNums) {
    luckyNums = 3;
    setLuckyNum(luckyNums);
  }
  if (null != serverLuckNum) {
    luckyNums = parseInt(luckyNums) + parseInt(serverLuckNum);
    setLuckyNum(luckyNums);
    subShareCount(serverLuckNum);
    serverLuckNum = null;
  }
  return parseInt(luckyNums);
}
function setLuckyNum(luckyNums) {
  if (null != luckyNums) {
    localStorage.setItem('luckyNums', luckyNums);
    $.localStorage.setItem('money0713_share_time', luckyNums);
  }
}
function getTotalMoney() {
  var totalMoneys = localStorage.getItem('totalMoneys');
  if (null == totalMoneys || '' == totalMoneys) {
    totalMoneys = 0;
    localStorage.setItem('totalMoneys', totalMoneys);
  }
  totalMoneys = parseFloat(totalMoneys).toFixed(2);
  return totalMoneys;
}
function setTotalMoney(totalMoneys) {
  if (null != totalMoneys) {
    localStorage.setItem('totalMoneys', totalMoneys);
  }
}
function setTuiguangChannel(tuiguangChannel) {
  if (null != tuiguangChannel) {
    localStorage.setItem('tuiguangChannel', tuiguangChannel);
  }
}
function getTuiguangChannel() {
  return localStorage.getItem('tuiguangChannel');
}

(function() {
  /**
   * 动态加载js文件
   * @param  {string}   url      js文件的url地址
   * @param  {Function} callback 加载完成后的回调函数
   */
  var _getScript = function(url, callback) {
    var head = document.getElementsByTagName('head')[0],
      js = document.createElement('script');

    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', url);

    head.appendChild(js);

    //执行回调
    var callbackFn = function() {
      if (typeof callback === 'function') {
        callback();
      }
    };

    if (document.all) {
      //IE
      js.onreadystatechange = function() {
        if (js.readyState == 'loaded' || js.readyState == 'complete') {
          callbackFn();
        }
      };
    } else {
      js.onload = function() {
        callbackFn();
      };
    }
  };

  //如果使用的是zepto，就添加扩展函数
  if (Zepto) {
    $.getScript = _getScript;
  }
})();
