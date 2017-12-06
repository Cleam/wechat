;(function(){
	// ostype is lower case, just use this in news-qqsports
	function wzPing(params){
		this.ua = this.tool.getUA();
		this.data = {
		    BossId: 0,
		    Pwd: 0,
		    channel: 0, // QQ运动
		    pageSource: 'Rpage',
		    act: 'Receive_B',
		    actPV: 'PV',
		    iQQ: '',
		    openid : '',
		    identity: '',
		    ostype: '',
		    moneyNum: '0'
		};

		var wzpuser = this.tool.cookie.getCookie('wzpuser');
		if( !wzpuser ){
			wzpuser = Date.now() + (Math.random()+'').substr(-6);
			this.tool.cookie.setCookie('wzpuser',  wzpuser);
		}

	    this.data = this.tool.extend(this.data, params, {
	    	iQQ : this.tool.cookie.getCookie('uin').substring(1),
	    	openid : this.tool.cookie.getCookie('uin').substring(1),
	    	identity : wzpuser,
	    	ostype : this.ua.android ? 'android' : 'ios'
	    });
	}

	wzPing.prototype.sendEvent = function(params){
		this.send(params);
	}

	wzPing.prototype.sendPV = function(){
		var data = {};
		data = this.tool.extend(data, this.data, {act: this.data.actPV});
		// data.act = data.actPV;
		this.send(data);
	}

	wzPing.prototype.send = function(params){
		var s = '';
		for(var key in params){
			s += '&'+key+'='+params[key];
		}

		var iurl = '//btrace.qq.com/kvcollect?v=1'+s+'&_dc='+ Math.random();
	    // console.log(iurl);
	    var gImage = new Image(1,1);
	    gImage.src = iurl;
	}

	wzPing.prototype.tool = {
		// 扩展
		extend : function(){
			var options, name,
				target = arguments[0] || {},
				i = 1,
				length = arguments.length;

			for(;i<length; i++){
				if( (options=arguments[i])!=null ){
					for(name in options){
						var src = target[ name ],   // 目标参数中name字段的值
							copy = options[ name ];

						if(src==copy) continue;
						if( copy!==undefined ){
							target[name] = copy;
						}
					}
				}
			}
			return target;
		},

		getUA: function(){
	        var userAgent = navigator.userAgent.toLowerCase();
	        return {
	            androidversion: userAgent.substr(userAgent.indexOf('android') + 8, 3),
	            ipad: /ipad/.test(userAgent),
	            iphone: /iphone/.test(userAgent),
	            android: /android/.test(userAgent),
	            qqnews: /qqnews/.test(userAgent),
	            weixin: /micromessenger/.test(userAgent),
	            mqqbrowser: /mqqbrowser/.test(userAgent), // QQ浏览器
	            qq: /qq/.test(userAgent), // 手机QQ
	            tenvideo: /qqlivebrowser/.test(userAgent), // 腾讯视频
	            qqmusic: /qqmusic/.test(userAgent), //QQMUSIC
	            qqac: /qqac_client/.test(userAgent) // 腾讯动漫
	        };
	    },

	    cookie : {
		    //写cookies
		    setCookie: function (name, value){
		        var Days = 365;
		        var exp =  new  Date();
		        exp.setTime(exp.getTime() + Days*24*60*60*1000);
		        document.cookie = name +  "=" + escape (value) +  ";expires="  + exp.toGMTString() +';path=/';
		    },
		     
		    //读取cookies
		    getCookie: function (name){
		        var arr,reg= new  RegExp( "(^| )" +name+ "=([^;]*)(;|$)" );
		        if (arr=document.cookie.match(reg)) 
		            return unescape(arr[2]);
		        else 
		            return '' ;
		    }
		}
	}

	if(!window.wzPing){
		window.wzPing = wzPing;
	}
})();/*  |xGv00|2708657421eace1f075f2ea01da3c34e */