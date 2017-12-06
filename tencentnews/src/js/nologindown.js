var cookie = {
    //写cookies
    setCookie: function (name, value, day){
        var Days = day || 365;
        var exp =  new  Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name +  "=" + escape (value) +  ";expires="  + exp.toGMTString();
    },
     
    //读取cookies
    getCookie: function (name, type){
        var arr,reg= new  RegExp( "(^| )" +name+ "=([^;]*)(;|$)" );
        if (arr=document.cookie.match(reg)){
			if( type ){
				return arr[2];
			}else{
				return unescape(arr[2]);
			}
		} 
        else 
            return '';
    }
};

var wzp = new wzPing(bossData);

var getScript = function(url, callback, sid) {
    var head = document.getElementsByTagName('head')[0],
        js = document.createElement('script');

    js.setAttribute('type', 'text/javascript'); 
    js.setAttribute('charset', 'UTF-8');
    js.setAttribute('src', url);
    sid && js.setAttribute('id', sid);

    head.appendChild(js);

    //执行回调
    var callbackFn = function(){
            if(typeof callback === 'function'){
                callback();
            }
        };

    if (document.all) { //IE
        js.onreadystatechange = function() {
            if (js.readyState == 'loaded' || js.readyState == 'complete') {
                callbackFn();
            }
        }
    } else {
        js.onload = function() {
            callbackFn();
        }
    }
};
var os = (function(){
    var userAgent = navigator.userAgent.toLowerCase();
    return {
        androidversion: userAgent.substr(userAgent.indexOf('android') + 8, 3),
        ipad: /ipad/.test(userAgent),
        iphone: /iphone/.test(userAgent),
        android: /android/.test(userAgent),
        qqnews: /qqnews/.test(userAgent),
        weixin: /micromessenger/.test(userAgent),
        mqqbrowser: /mqqbrowser\//.test(userAgent), // QQ浏览器
        qq: /qq/.test(userAgent)&&!/mqqbrowser/.test(userAgent), // 手机QQ
        tenvideo: /qqlivebrowser/.test(userAgent), // 腾讯视频
        qqmusic: /qqmusic/.test(userAgent), //QQMUSIC
        qqac: /qqac_client/.test(userAgent) // 腾讯动漫
    };
})();

var tool = {
    loginSuccess : function(nickname, avatar){
        $('.user .avatar img').attr({'src':avatar, 'alt':nickname});
        $('.user .nickname').text( nickname );
        
        $('.nologin').hide();
        $('.haslogin').show();

        this.getNewsInfo();
    },
    qqLoginSuccess : function(){
        window['loginAll'] = function(res) {
            var _face = res.Face.replace('&s=40&', '&s=100&');
            tool.loginSuccess(res.nick, _face);
        }

        var uin = cookie.getCookie('uin').substring(1),
            skey = cookie.getCookie('skey');

        getScript("http://qfwd.qq.com/?uin=" + uin + "&skey=" + skey + "&func=loginAll&refresh=0&ran=" + Math.random(), function(){
            // loginAll();
        })
    },
    getUserInfo : function(type){
        if( os.tenvideo ){
			type = type || cookie.getCookie('video_login_type');
        	// 腾讯视频
        	var getVideoInfo = function(){
        		TenvideoJSBridge.invoke("getUserInfo", {"type":["wx", "qq"]}, function(res){
			        res = JSON.parse(res);
			        if( res.errCode==0 ){
						var user = res.result[type];
						if( !user.headImgUrl || user.headImgUrl=='/0' ){
							user.headImgUrl = '//mat1.gtimg.com/news/qqnews/newolduser/img/defaults_avatar.jpg';
						}
			            tool.loginSuccess(user.nickname, user.headImgUrl);
			        }
			    })
        	}
		    if (typeof TenvideoJSBridge === 'object') {
		        getVideoInfo()
		    } else {
		        document.addEventListener('onTenvideoJSBridgeReady', function() {
		            getVideoInfo()
		        }, false)
		    }
        }else if( os.weixin ){
        	// 微信
        	var userinfo = cookie.getCookie('prize_wx_user_info', 1);
            if( userinfo ){
                var user = JSON.parse(userinfo);
				// alert( document.cookie );
				// $('.fuli_more').css('fontSize', '0.2rem').html(document.cookie);
				if( !user.headimgurl || user.headimgurl=='/0' ){
					user.headimgurl = '//mat1.gtimg.com/news/qqnews/newolduser/img/defaults_avatar.jpg';
				}
                this.loginSuccess(decodeURIComponent(user.nickname), user.headimgurl);
            }
        }else{
        	// 获取QQ信息
        	if( cookie.getCookie('uin') && cookie.getCookie('skey') ){
                this.qqLoginSuccess();
            }
        }
    },

    // 获取新闻资讯
    getNewsInfo : function(){
        // 对资讯关键词进行随机排序
        var arr = [],
            index = 0,
            len = 0;
        if( window.newsKeyword && newsKeyword.length ){
			index = parseInt( Math.random()*newsKeyword.length );
            
            $.ajax({
                url : '//op.inews.qq.com/opsearch/api?refer=100000284&appkey=0f685c2ea8e2da29201e3bd498808a8c&jsonp=getNewsCallback',
                data : {wd:newsKeyword[index]},
                dataType : 'jsonp',
                success : function(){

                }
            })
        }
    },

    init : function(){
        this.getNewsInfo();
    }
}

tool.init();

var sstxt = '打开东方头条，提现我的红包'; // 已安装或下载安装完成后的文案
var haolitxt = '立即签到领壕礼';
AppDownload.unicodeTxt.down = '正在下载东方头条';
AppDownload.nowifi = function(){
    $('.showwifi').show();
}
var wzp = new wzPing(bossData);

// 已安装
AppDownload.checkAppIsInstalled(function(){
	$('.down_tip').hide();

	$('.haslogin .openapp').attr('data-status', 'success').find('.txt').text(sstxt);
	$('.haslogin .sign').attr('data-status', 'success').find('.txt').text(haolitxt);
});

// 下载成功
AppDownload.installSuccess = function(){
    // $('.haslogin .tixian_btn .progress').css( 'width', '0%' );
    $('.haslogin .openapp').attr('data-status', 'success').find('.txt').text(sstxt);
	$('.haslogin .sign').attr('data-status', 'success').find('.txt').text(haolitxt);
};

// 打开或下载
$('.haslogin .openapp').on('tap', function(){
	if( !$(this).hasClass('btn_disabled') ){
		AppDownload.openUrl = gloabConfig.openUrl;
		AppDownload.run();
	}

    if( $(this).data('status')=='success' ){
        wzp.data.act = wzp.data.item_new_user;
    }

    wzp.sendEvent(wzp.data);
});

$('.haslogin .sign').on('tap', function(){
    if( !$(this).hasClass('btn_disabled') ){
        var url = $(this).data('url');

        if( url ){
            AppDownload.openUrl = url;
            AppDownload.run();
        }
		
    }

    if( $(this).data('status')=='success' ){
        wzp.data.act = wzp.data.item_new_user;
    }

    wzp.sendEvent(wzp.data);
});

$('.news').on('tap', '.btn', function(){
	var $this = $(this);

	AppDownload.openUrl = $this.data('url');
    AppDownload.run();

    if( $(this).data('status')=='success' ){
        wzp.data.act = wzp.data.item_new_user;
    }

    wzp.sendEvent(wzp.data);
});

window['getNewsCallback'] = function(result){
	if( result.ret==0 && result.news && result.news.length ){
		var arr = result.news.sort(function(){
			return Math.random()>0.5;
		});

		// console.log(arr);
		var html = '',
			len = Math.min(arr.length, 5);
		for(var i=0; i<len; i++){
			var item = arr[i];

            html += '<li>\
                        <div class="sitem clearfix">\
                            <div class="pic">\
                                <img src="'+item.img[0]+'" alt="'+item.title+'">\
                            </div>\
                            <div class="text">\
                                <div class="t">'+item.title+'</div>\
                                <div class="btn" data-url="qqnews://article_9527?nm='+item.newsid+'">下载东方头条阅读</div>\
                            </div>\
                        </div>\
                    </li>';
		}

        var createDot = function(){
            var len = $('.news .con li').length;

            var html = '';
            for(var i=0; i<len; i++){
                html += '<em></em>';
            }
            $('.news .dot').html(html);
        }

        if( html ){
            $('.news').show().find('.con ul').html(html);
            createDot();
            $('.news .con').swipeSlide({
                continuousScroll:true,
                speed : 3000,
                transitionType : 'cubic-bezier(0.22, 0.69, 0.72, 0.88)',
                firstCallback : function(i,sum,me){
                    $('.news .dot').children().first().addClass('cur');
                },
                callback : function(i,sum,me){
                    $('.news .dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
                }
            });
            
            AppDownload.checkAppIsInstalled(function(){
                $('.news .btn').attr('data-status', 'success').text( '打开东方头条阅读' );
            });
        }
	}
}

// 登录，东方头条公众号授权
$('.nologin .btn').on('click', function(){
    if( os.weixin ){
		window.location.href = 'http://api.prize.qq.com/wxlogin/login/wx9bf1f2b2b6610eb0/newsapp';
	}else if(os.tenvideo){
        var ss = function(){
			TenvideoJSBridge.invoke("actionLogin", {"type":"tv"}, function(res){
				res = JSON.parse(res);
				
				if( res.errCode==0 ){
					cookie.setCookie('video_login_type', res.result.type);
					tool.getUserInfo(res.result.type);
				}
			});
		}

		if (typeof TenvideoJSBridge === 'object') {
			ss()
		} else {
			document.addEventListener('onTenvideoJSBridgeReady', function() {
				ss()
			}, false)
		}
    }else{
		window.location.href = 'https://ui.ptlogin2.qq.com/cgi-bin/login?style=9&appid=1006102&daid=0&s_url='+encodeURIComponent(window.location.href)+'&low_login=0&pt_no_onekey=1';
	}
});

// 弹窗
/* $('.haslogin .tixian_btn').on('tap', function(){
	// $('.uplayer').show();
	// $(document.body).css({
	// 	"overflow-y":"hidden"
	// });
	AppDownload.run();

    if( $(this).data('status')=='success' ){
    	wzp.data.act = wzp.data.item_new_user;
    }

    wzp.sendEvent(wzp.data);
}); */

// 无wifi情况的弹窗，取消|继续
$('.showwifi').on('tap', '.cancel', function(){
    $('.showwifi').hide();
}).on('tap', '.close', function(){
    $('.showwifi').hide();
}).on('tap', '.go', function(){
    $('.showwifi').hide();
    AppDownload.run(true);
});

//活动规则
$('.rule_btn').on('tap', function(){
	$('.rule').show();
});
$('.rule').on('tap', '.close', function(){
	$('.rule').hide();
});

wzp.sendPV();/*  |xGv00|c022f24150d2dc47ba0383168ff9a5e0 */