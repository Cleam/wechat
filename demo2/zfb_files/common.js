;(function ($) {
	window.gyq = {
		ua: window.navigator.userAgent.toLowerCase(),

		// 获取url地址 scheme
		getScheme : function () {
			var arr = /^([^\/]+):\/\//i.exec(location.href);
			return arr[1];
		},

		// 获取域名地址
		getHost: function () {
			var host = window.location.host;
			return host;
		},

		// 判断客户端
		getClient : function () {
			if (this.ua.match(/gyq_iphone_/i) == 'gyq_iphone_') {
				return 'iphone';
			} else if (this.ua.match(/gyq_android_/i) == 'gyq_android_') {
				return 'android';
			} else {
				return 'wap';
			}
		},

		// 判断客户端及版本
		getClientInfo : function () {
			var client_info = this.ua.match(/gyq_iphone_(v\d+\.\d+\.\d+)/i);
			if (client_info !== null) {
				return {'client': 'iphone', 'version' : client_info[1]};
			}

			var client_info = this.ua.match(/gyq_android_(v\d+\.\d+\.\d+)/i);
			if (client_info !== null) {
				return {'client': 'android', 'version' : client_info[1]};
			}

			return null;
		},

		// 判断是ios系统
		isIOS : function () {
			if (/iphone|ipad|ipod/.test(this.ua)) {
				return true;
			} else {
				return false;
			}
		},

		// 判断是否微信浏览器
		isWeixin : function () {
			if (this.ua.match(/MicroMessenger/i) == 'micromessenger') {
				return true;
			} else {
				return false;
			}
		},

		// 判断是否QQ浏览器
		isQQ : function () {
			if (this.ua.indexOf('pa qq') > -1) { // QQ客户端内置浏览器[QQ软件]
				return 'MQQBrowser';
			} else if (this.ua.match(/QQ/i) == 'qq') { // QQ浏览器 [QQ浏览器]
				return 'QQBrowser';
			} else {
				return false;
			}
		},

		// 调用APP内的js函数唤起QQ群
		openQQ: function () {
			var client = this.getClient();
			if (client == 'iphone') {
				window.__gyqapp.www_gyq_com_webview_app_qq('564351789', '661ccc08356a8c586c62567eb1029d080f1a88dc935cff0d3e6c18bd89e9ff0e');
			} else if (client == 'android') {
				window.__gyqapp.www_gyq_com_webview_app_qq('564351789', 'WcVU1BTIAO77D6tCGJo9hixtWbDS1c86');
			} else {
				alert('请添加QQ群: 564351789');
			}
		},

		// 关闭webview
		closeWebView: function () {
			if (typeof(__gyqapp) == "object") {
				if (typeof (__gyqapp.www_gyq_com_webview_app_close) == 'function') {
					window.__gyqapp.www_gyq_com_webview_app_close();
				}
			}
		}
	};


	// 是否显示协议按钮
	var $open_app_scheme_btn = $(".open_app_scheme_btn");
	if ($open_app_scheme_btn.length > 0) {
		var client_info = gyq.getClientInfo();
		var content = $open_app_scheme_btn.html();
		if (client_info === null) {
			$(".open_app_scheme_btn").remove();
		} else {
			if (client_info.version == 'v1.0.0') {
				return false;
			}

			// 显示按钮
			$(".open_app_scheme_btn").show();

			// 绑定事件
			$open_app_scheme_btn.click(function () {
				if (content == '立即阅读') {
					window.location.href = 'guangyouqian://www.gyq.com/article/detail/?id=76501';
				} else if (content == '阅读文章并分享') {
					window.location.href = 'guangyouqian://www.gyq.com/index/home';
				} else if (content == '立即收徒') {
					window.location.href = 'guangyouqian://www.gyq.com/invite/show/';
				}
			});
		}
	}


})(jQuery);


var _hmt = _hmt || [];
(function() {

	var hostHash = {
		"m.gyq.v6h5.com" : "6eaba7c5fb0922709f4c3569e1849592",
		"m.bailufeng.cn" : "a6f56c12b79e7ed1c4c77c786f4a997a",
		"m.benmaya.cn" : "34390d8acc2aa8b7bc3b623fed81c1fd",
		"m.jinlemi.cn" : "7d131172eeb173a24847ddda545c4a10",
		"m.zhajiaren.cn" : "1e5581ac3d681959df2ef4fd10e96188",
		"m.gyq.v5h6.cn" : "d97beae39b492e04c862319c8c0004c8",
		"m.aixiangshuo.cn" : "f4e5087ee20b8166dc79b41a3255ac6a",
		"m.hongdaye.net" : "3f6af13807565ca0b8c16cce215728e8"
	}

	var domain = document.domain;
	var hash = hostHash[domain];

    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?" + hash;

    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();