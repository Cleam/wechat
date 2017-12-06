;(function(){
    /*
    var shareData = {
        title : '腾讯新闻盛夏送红包，只给内外兼修的你！',
        desc : '',
        img : 'http://mat1.gtimg.com/news/kuaibao/hongbao/img/share.jpg',
        link : window.location.href
    };
    */

    var userAgent = navigator.userAgent.toLowerCase();

    // 设置在微信中的分享信息
    function onBridgeReady() {
        WeixinJSBridge.on("menu:share:timeline", function(e) {
            var data = {
                img_width: "120",
                img_height: "120",
                img_url: shareData.img,
                link: shareData.link,
                desc: shareData.desc,
                title: shareData.title
            };
            WeixinJSBridge.invoke("shareTimeline", data, function(res) {
                WeixinJSBridge.log(res.err_msg);
            });
        });

        WeixinJSBridge.on("menu:share:weibo", function() {
            WeixinJSBridge.invoke("shareWeibo", {
                "content": shareData.desc,
                "url": shareData.link
            }, function(res) {
                WeixinJSBridge.log(res.err_msg);
            });
        });

        WeixinJSBridge.on('menu:share:appmessage', function(argv) {
            WeixinJSBridge.invoke("sendAppMessage", {
                img_width: "120",
                img_height: "120",
                img_url: shareData.img,
                link: shareData.link,
                desc: shareData.desc,
                title: shareData.title
            }, function(res) {
                WeixinJSBridge.log(res.err_msg);
            });
        });
    }

    //执行
    document.addEventListener('WeixinJSBridgeReady', function() {
        onBridgeReady();
    });

    // 腾讯视频中的h5分享
    function tenvideoBrideg(){
        var params = {
            "hasRefresh":true, 
            "hasShare":true, 
            "shareInfo":{
                "title":shareData.title, 
                // "subTitle":shareData.desc, 
                "singleTitle":shareData.title,
                "content":shareData.desc,
                'contentTail':shareData.title,
                "imageUrl":shareData.img, 
                "url":shareData.link 
            }
        };

        TenvideoJSBridge.invoke("setMoreInfo", params, function(res) {
            var ss = JSON.parse(res);
            
        });
    }
    if (typeof TenvideoJSBridge === 'object') {
        tenvideoBrideg()
    } else {
        document.addEventListener('onTenvideoJSBridgeReady', function() {
            tenvideoBrideg()
        }, false)
    }

    // 设置在QQ中的分享信息
    function setShareInQQ(){
        var share = function(){
            mqq.data.setShareInfo({
                share_url : shareData.link,
                title : shareData.title,
                desc : shareData.desc,
                image_url : shareData.img,
                source_name : 'qq'
            }, function(){
                // alert('分享成功');
            })
        }, getScript = function(url, callback) {
            var head = document.getElementsByTagName('head')[0],
                js = document.createElement('script');

            js.setAttribute('type', 'text/javascript'); 
            js.setAttribute('src', url); 

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
        if (window.mqq && mqq.data) {
            share();
        }else{
            getScript("//open.mobile.qq.com/sdk/qqapi.js?_bid=152", function(){
                share();
            })
        }
    }
    // QQ下才加载
    if( /qq\/([\d\.]+)/.test(userAgent) ){
        setShareInQQ();
    }
    

    // 在腾讯新闻和天天快报中的分享
    function newsappShare() {
        var timer = null;

        if (window.TencentReading) {
            if ( window.TencentReading.setShareArticleInfo) {
                window.TencentReading.setShareArticleInfo(shareData.title, shareData.title,
                    shareData.desc, shareData.link,
                    shareData.img);
            } else {
                window.TencentReading.shareFromWebView(shareData.title, shareData.title, shareData
                    .desc, shareData.link,
                    shareData.img);
            }

            if (window.TencentReading && window.TencentReading.setGestureQuit) {
                // window.TencentReading.setGestureQuit(true) || window.TencentReading.setGestureQuit(1);
            }
        }else if(window.TencentNews){
            if ( window.TencentNews.setShareArticleInfo) {
                window.TencentNews.setShareArticleInfo(shareData.title, shareData.title,
                    shareData.desc, shareData.link,
                    shareData.img);
            } else {
                window.TencentNews.shareFromWebView(shareData.title, shareData.title, shareData
                    .desc, shareData.link,
                    shareData.img);
            }
        }
    }

    if(window.TencentNews || window.TencentReading){
        newsappShare();
    }else{
        document.addEventListener('TencentNewsJSInjectionComplete', function(){
            newsappShare();
        })
        document.addEventListener('TencentNewsReady', function(){
            newsappShare();
        });
    }
})();/*  |xGv00|e043eebed1a8686a3afe16eea2b69265 */