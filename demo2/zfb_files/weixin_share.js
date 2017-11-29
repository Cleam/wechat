/**
 *
 * 微信分享 JS
 *
 * @author lixiaogang <lixiaogang1113@gmail.com>
 *
 */
;(function($, undefind){
	var wx_share = {
		debug: false, // 是否开启微信回调debug模式
		req_url: '',
		is_wx: navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1,
		init: function(){
			var req_url = location.href, _pos = req_url.indexOf('#');
			if(_pos !== -1) {
				req_url = req_url.substring(0, _pos);
			}
			this.req_url = req_url;
		},
		share: function(share_cfg, debug){
			if (!debug && !wx_share.is_wx) return true;
			wx_share.init();
			$.ajax({
				type: "GET",
				cache: false,
				url: "http://res.wx.qq.com/open/js/jweixin-1.2.0.js", // http://res.wx.qq.com/open/js/jweixin-1.0.0.js
				dataType: "script",
				success: function(){
					$.getJSON(gyq.getScheme() + "://" + gyq.getHost() + '/share.php?do=getCfg', {req_url: wx_share.req_url}, function(data){
						if (data.status == 200) {
							var wx_sign = data.config;
							if (!wx_sign || !share_cfg) {
								return false;
							}
							wx_sign['debug'] = debug || wx_share.debug;
							wx.config(wx_sign);
							wx.ready(function(){
								wx.hideOptionMenu();
								wx.showMenuItems({
									menuList: ['menuItem:share:timeline']
								});

								// 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
								wx.onMenuShareTimeline(share_cfg);

								// 获取“分享给朋友”按钮点击状态及自定义分享内容接口
								//wx.onMenuShareAppMessage(share_cfg);

								// 获取“分享到QQ”按钮点击状态及自定义分享内容接口
								// wx.onMenuShareQQ(share_cfg);

								// 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
								// wx.onMenuShareWeibo(share_cfg);
							});
						}
					});
				}
			});
		}
	};

	var nhd = {};
	nhd.wx_share = wx_share.share;

	if (typeof window.nhd == 'undefined') {
		window.nhd = nhd;
	}
})(jQuery);