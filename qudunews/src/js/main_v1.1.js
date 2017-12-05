this.AppDownload = this.AppDownload || {}; //this表示窗口页面对象
Array.prototype.contains = function(obj) {
  //扩充js的Array对象添加contains函数
  var i = this.length;
  while (i--) {
    if (this[i] === obj) {
      return true;
    }
  }
  return false;
};
(function(window, document) {
  var firstRun = true;
  var main = function(config) {
    this.config = config;
    this.tag = false;
    this.init();
  };
  var p = main.prototype; //prototype 属性使您有能力向对象添加属性和方法。
  p.init = function() {
    var _this = this; //this表示调用这个方法的对象
    $(document).ready(function() {
      _this.initDom(); //获取标签
      _this.addEvtListener(); //当点击标签就下载
      //替换下载URL
      if (typeof uid == "undefined") {
        setTimeout(function() {
          _this.replaceUrlPar();
        }, 1000); //100毫秒执行一次
      } else {
        _this.replaceUrlPar();
      }
    });
  };
  p.initDom = function() {
    this.$btnDownload = $(".btn-download");
  };
  p.addEvtListener = function() {
    var _this = this;
    this.$btnDownload.bind("click", function() {
      _this.tag = true;
      new Image().src =
        _this.config.serverDomain + "/statistics/out/" + _this.config.id + 
        "?uid=" + uid +
        "&keyword=" + keyword +
        "&dataSource=" + dataSource +
        "&site=" + site;
    });
  };
  /**
   * 下载不记录日志
   */
  p.download = function() {
    //下载文件
    if (this.isIOS()) {
      firstRun = false;
      if (this.config.iosUrl == "") {
        window.location.href = "http://www.haima.me/?c=000001342";
      } else {
        window.location.href = this.config.iosUrl;
      }
    } else {
      window.location.href = this.config.url;
    }
  };
  /**
   * GA事件
   */
  p.gaSendEvent = function() {
    if (typeof ga != "undefined" && ga instanceof Function) {
      ga("send", "event", "button", "click", "download-buttons");
    }
  };
  /**
   * 判断是否为IOS设置
   * @returns {boolean}
   */
  p.isIOS = function() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    return bIsIpad || bIsIphoneOs;
  };
  p.replaceUrlPar = function() {
    var _this = this;
    var url;
    var osystem = "";
    if (_this.isIOS()) {
      url = _this.config.iosUrl;
      osystem = "iOS";
    } else {
      url = _this.config.url;
      osystem = "Android";
    }
    if (url.indexOf("aosSt=true") > 0) {
      url = url.replace("{os}", osystem);
      url = url.replace("{uid}", uid);
      url = url.replace("{adId}", id);
      url = url.replace("{keyword}", keyword);
      url = url.replace("{creativeId}", "");
      url = url.replace("{ch}", tgch);
      url = url.replace("{system}", os);
      url = url.split("&aosSt=true")[0];
      if (_this.isIOS()) {
        _this.config.iosUrl = url;
      } else {
        _this.config.url = url;
      }
      this.$btnDownload.attr("href", url);
    }
  };
  AppDownload.main = main;
})(window, document);
