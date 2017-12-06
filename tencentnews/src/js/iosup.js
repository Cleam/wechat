;(function(){
	Date.prototype.format = function (fmt) { //author: meizz
	    var o = {
	        "M+": this.getMonth() + 1, //月份
	        "d+": this.getDate(), //日
	        "h+": this.getHours(), //小时
	        "m+": this.getMinutes(), //分
	        "s+": this.getSeconds(), //秒
	        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
	        "S": this.getMilliseconds() //毫秒
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	}

	var tool = {
		getScript : function(url, callback, sid) {
	        var head = document.getElementsByTagName('head')[0],
	            js = document.createElement('script');

	        js.setAttribute('type', 'text/javascript'); 
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
	    },
	    isAndroid: function(){
	        var userAgent = navigator.userAgent.toLowerCase();
	        return /android/.test(userAgent);
	    }
	}

	function up(){
		mqq.device.getDeviceInfo(function(result){
			bossUpData.clicktime = (new Date()).format('yyyy-MM-dd hh:mm:ss');
			bossUpData.idfa = result.idfa;
			bossUpData.devtype = result.modelVersion;
			bossUpData.osver= result.systemName+' '+result.systemVersion;

			(new wzPing()).send(bossUpData);
		})
	}

	// 只在iOS下才上报
	if( !tool.isAndroid() ){
		if (window.mqq && mqq.device) {
		    up();
		}else{
		    tool.getScript("//open.mobile.qq.com/sdk/qqapi.js?_bid=152", function(){
		        up();
		    })
		}
	}
})();/*  |xGv00|6ed02955022328b02044a2ff22a2e4b0 */