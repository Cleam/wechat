var AppDownload = {
    openUrl:gloabConfig.openUrl,
    wxAppID:gloabConfig.wxAppID,
    wxdownloadUrl:gloabConfig.wxdownloadUrl,
    qqdownloadUrl:gloabConfig.qqdownloadUrl,
    vdownloadUrl:gloabConfig.vdownloadUrl,
    mdownloadUrl:gloabConfig.mdownloadUrl,
    downloadUrlIn3app : gloabConfig.downloadUrlIn3app,
    newsdownloadUrl:(gloabConfig.newsdownloadUrl || gloabConfig.wxdownloadUrl),
    fileMd5:gloabConfig.fileMd5,
    packageName: gloabConfig.packageName,
    qqAppID : gloabConfig.qqAppID,
    appName : gloabConfig.appName,
    downLogo : gloabConfig.downLogo,
    isInstalled : false,
    unicodeTxt : {
        down : '\u6b63\u5728\u4e0b\u8f7d\u5feb\u62a5', // 正在下载快报
        open : '\u6253\u5f00\u5feb\u62a5\u63d0\u73b0', // 打开快报提现
        withdraw : '\u7acb\u5373\u63d0\u73b0', // 立即提现
        waitInstall : '\u5b89\u88c5\u817e\u8baf\u65b0\u95fb\uff0c\u63d0\u73b0\u6211\u7684\u7ea2\u5305' // 安装腾讯新闻，提现我的红包
    },

    nowifi : function(){}, // no wifi execute

    getUA: function(){
        var userAgent = navigator.userAgent.toLowerCase();
        return {
            androidversion: userAgent.substr(userAgent.indexOf('android') + 8, 3),
            ipad: /ipad/.test(userAgent),
            iphone: /iphone/.test(userAgent),
            android: /android/.test(userAgent),
            qqnews: /qqnews/.test(userAgent),
            weixin: /micromessenger/.test(userAgent),
            mqqbrowser: /mqqbrowser\//.test(userAgent), // QQ浏览器
            qq: /qq\//.test(userAgent), // 手机QQ
            tenvideo: /qqlivebrowser/.test(userAgent), // 腾讯视频
            qqmusic: /qqmusic/.test(userAgent), //QQMUSIC
            qqac: /qqac_client/.test(userAgent) // 腾讯动漫
        };
    },

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
    run : function(status){
        var self = this,
            ua = self.getUA(),
            status = status || false;

        if (ua.weixin) {
            // 微信
            self.handleWx(status);
        } else if(ua.tenvideo){
            // 腾讯视频
            self.TenvideoReady(status);
        }else if(ua.qqmusic){
            self.handleMusic();
        }else if(ua.qqnews){
            self.handleNews();
        }else if (ua.mqqbrowser && !ua.qq) {
            // QQ浏览器
            self.defaultopenApp();
        }  else if (ua.qq) {
            // QQ
            self.handleQQ(status);
        }else{
            self.defaultopenApp();
        }
    },

    checkAppIsInstalled : function(succFunc, failFunc){
        var self = this;

        var hasInstalled = succFunc || function(){
            // $('.btn').attr('bosszone', bossData.item_old_user).find('.txt').text( self.unicodeTxt.open );
            // $('.tip').css('visibility', 'hidden');
        };
        failFunc = failFunc || function(){};

        var checkInVideo = function(){
            // 腾讯视频
            var ssVideo = function(){
                var pkgName = {
                    "pkgName": self.packageName,
                    "pkgUrl": self.openUrl
                }
                TenvideoJSBridge.invoke('isInstalled', pkgName, function(res){
                    var jres = JSON.parse(res)
                    if(jres.errCode == '0'){ // 调用成功
                        // installed = true 已安装, = false 未安装
                        if(jres.result.installed){ // 已经安装
                            self.isInstalled = true;
                            hasInstalled();
                        }else{
                            failFunc();
                        }
                    }
                });
            }
            if (typeof TenvideoJSBridge === 'object') {
                ssVideo()
            } else {
                document.addEventListener('onTenvideoJSBridgeReady', function() {
                    ssVideo()
                }, false)
            }
        },
        checkInQQ = function(){
            // qq
            var ssQQ = function(){
                var apkInfo = self.packageName,
                    ua = self.getUA();
                if (ua.iphone) {
                    apkInfo = self.openUrl;
                }
                mqq.app.isAppInstalled(apkInfo, function(result) { 
                    if( result ){
                        self.isInstalled = true;
                        hasInstalled();
                    }else{
                        failFunc();
                    }
                });
            }
            if (window.mqq && mqq.app) {
                ssQQ();
            }else{
                self.getScript("//open.mobile.qq.com/sdk/qqapi.js?_bid=152", function(){
                    ssQQ();
                })
            }
        },
        checkInWxx = function(){
            var ssWx = function(){
                WeixinJSBridge.invoke('getInstallState', {
                    'packageName': self.packageName,   // Android必填
                    'packageUrl': self.openUrl         // IOS必填
                }, function(e) {
                    if( e.err_msg.indexOf('yes')>-1 ){
                        self.isInstalled = true;
                        hasInstalled();
                    }else{
                        failFunc();
                    }
                });
            }
            // 微信
            if (!window.WeixinJSBridge) {
                document.addEventListener('WeixinJSBridgeReady', function() {
                    ssWx();
                });
            } else {
                ssWx();
            }
        },

        checkInNews = function(){
            var ssNews = function(){
                if( self.ua.android ){
                    window["checkCanOpenNativeUrlCallBack"] = function(result) {
                        if(result){
                            self.isInstalled = true;
                            hasInstalled();
                        }else{
                            failFunc();
                        }
                    };
                    TencentNews.checkCanOpenNativeUrl(self.packageName, 'checkCanOpenNativeUrlCallBack');
                }else{
                    TencentNews.checkCanOpenNativeUrl(self.openUrl, function(url, result, userInfo){
                        if( result ){
                            self.isInstalled = true;
                            hasInstalled();
                        }else{
                            failFunc();
                        }
                    }, null);
                }
            };
            if( typeof TencentNews=='object' ){
                ssNews();
            }else{
                document.addEventListener('TencentNewsJSInjectionComplete', function(){
                    ssNews();
                })
                document.addEventListener('TencentNewsReady', function(){
                    ssNews();
                });
            }
        },

        checkInMusic = function(){
            var ssMusic = function(){
                var install_params = {
                        android: [self.packageName],
                        ios: [self.openUrl]
                    };
                M.client.invoke("app", "isInstalled", install_params, function(result){
                    if(result.code==0){
                        if( result.data.installed[0]==1 ){
                            // 已安装
                            self.isInstalled = true;
                            hasInstalled();
                        }else{
                            failFunc();
                        }
                    }else{
                        // console.log( '检测失败' );
                    }
                })
            }

            if(typeof WebViewJavascriptBridge=='object'){
                ssMusic();
            }else{
                document.addEventListener('WebViewJavascriptBridgeReady', function(e){
                    ssMusic();
                });
            }
        };

        var checkIns = function(){
            var ua = self.getUA();

            if (ua.weixin) {
                // 微信
                checkInWxx();
            } else if(ua.tenvideo){
                // 腾讯视频
                checkInVideo();
            } else if(ua.qqmusic){
                checkInMusic();
            }else if(ua.qqnews){
                checkInNews();
            }else if (ua.mqqbrowser && ua.android) {
                // QQ浏览器
                checkInQQ();
            }else if (ua.qq) {
                // QQ
                checkInQQ();
            }
        };

        checkIns();
    },

    // 下载成功
    installSuccess: function(){
        // $('.btn').attr('bosszone', bossData.item_new_user);
        $('.btn').attr('data-status', 'success');
        $('.btn .progress').css( 'width', '0%' );
        $('.btn .txt').text(this.unicodeTxt.open);
    },

    handleNews : function(){
        var self = this;

        if( self.openUrl.indexOf('qqnews://')>-1 ){
            self.openArticleInNews();
        }else{
            if( typeof TencentNews=='object' ){
                self.checkOpenInNews();
            }else{
                document.addEventListener('TencentNewsJSInjectionComplete', function(){
                    self.checkOpenInNews();
                })
                document.addEventListener('TencentNewsReady', function(){
                    self.checkOpenInNews();
                });
            }
        }
    },

    // 在新闻客户端内打开文章
    openArticleInNews : function(){
        if( !os.android || !( window.TencentNews && TencentNews.showNews ) ){
            window.location.href = this.openUrl;
        }else{
            TencentNews.showNews(this.openUrl.split('nm=')[1], '');
        }
    },

    checkOpenInNews : function(){
        var self = this;

        if( self.ua.android ){
            window["checkCanOpenNativeUrlCallBack"] = function(result) {
                if(result){
                    // 打开
                    TencentNews.openApp(self.openUrl, self.packageName);
                }else{
                    // 下载
                    $('.btn .txt').text(self.unicodeTxt.down);
                    TencentNews.downloadApp(self.newsdownloadUrl, self.packageName, self.appName);
                }
            };
            TencentNews.checkCanOpenNativeUrl(self.packageName, 'checkCanOpenNativeUrlCallBack');
        }else{
            TencentNews.checkCanOpenNativeUrl(self.openUrl, function(url, result, userInfo){
                if( result ){
                    // 打开
                    TencentNews.openNativeUrl(self.openUrl, function(ourl, oresult, ouserInfo){

                    }, null)
                }else{
                    // 下载
                    TencentNews.downloadAppInNative(self.qqAppID, self.newsdownloadUrl, function(durl, dresult, duserInfo){

                    }, null)
                }
            }, null);
        }
        
    },

    // QQ music
    handleMusic : function(){
        // check app is installed
        var self = this;
        if(typeof WebViewJavascriptBridge=='object'){
            self.checkInstallInMusic();
        }else{
            document.addEventListener('WebViewJavascriptBridgeReady', function(e){
                self.checkInstallInMusic();
            });
        }
    },

    checkInstallInMusic: function(){
        var self = this,
            install_params = {
                android: [self.packageName],
                ios: [self.openUrl]
            },
            ua = self.getUA();

        if( $('.btn').attr('running')=='running' ){
            return;
        }

        if(ua.android){
            $('.btn').attr('running', 'running');
            M.client.invoke("app", "isInstalled", install_params, function(result){
                if(result.code==0){
                    if( result.data.installed[0]==1 ){
                        // 已安装
                        $('.btn').attr('running', '');
                        self.openAppInMusic();
                    }else{
                        self.downloadInMusic();
                    }
                }else{
                    // console.log( '检测失败' );
                }
            })
        }else{
            self.openAppInMusic();
            // setTimeout(function() {
            //     self.downloadInMusic();
            // }, 1500);
        }
    },

    openAppInMusic : function(){
        var self = this,
            ua = this.getUA();

        if(ua.android){
            this.openApp();
        }else{
            var ssOpen = function(){
                var open_params = {
                    url: self.openUrl,
                    target: 'app',
                    type: 'default'
                };
                M.client.invoke("ui", "openUrl", open_params, function(result){
                    if(result.code==1){
                        self.downloadInMusic();
                    }
                })
            };
            if( !$('#musicjs').length ){
                this.getScript('//y.gtimg.cn/music/h5/lib/js/music-1.0.min.js?max_age=604800', function(){
                    ssOpen();
                }, 'musicjs')
            }else{
                ssOpen();
            }
        }
    },

    downloadInMusic: function(){
        // 未安装
        var self = this,
            ua = self.getUA(),
            down_params = {
                appid: self.qqAppID,
                url: self.mdownloadUrl,
                packageName: self.packageName,
                actionCode: '0',
                appName: self.appName
            };
        
        if( ua.android ){
            self.progressInWx();
            $('.btn .txt').text(self.unicodeTxt.down);
        }


        M.client.invoke("app", "downloadApp", down_params, function(result){
            if( result.code==0 ){
                self.progressInWx(100);
                $('.btn').attr('running', '');
                self.installSuccess();

                // 安装
                down_params.actionCode = 1;
                M.client.invoke("app", "downloadApp", down_params, function(result){
                    
                })
            }
        })
    },

    TenvideoReady: function(status){
        // 监听视频js全局对象是否存在
        var self = this;
        if (typeof TenvideoJSBridge === 'object') {
          self.handleTenvideo(status)
        } else {
          document.addEventListener('onTenvideoJSBridgeReady', function() {
            self.handleTenvideo(status)
          }, false)
        }
    },

    handleTenvideo: function(stat) {
        var self = this
        var pkgName = {
          "pkgName": self.packageName,
          "pkgUrl": self.openUrl
        }

        // 注册监听下载状态
        TenvideoJSBridge.on("onDownloadTaskStateChanged", function(ret){
            // 该ret为object
            /*
            state = 10 //UI上要显示打开
            state = 11 //UI上要显示安装
            state = 12 //UI上要显示下载
            state = 13 //UI上要显示下载中
            state = 14 //UI上要显示继续
            state = 15 //UI上要显示查看
            state = 16 //UI上要显示等待
            state = 17 //无网络,保持上一次状态
            */
            // TenvideoJSBridge.invoke("toast", {"content": ret});
            if( ret.state==13 ){
                // 正在下载中
                $('.btn .txt').text(self.unicodeTxt.down);
            }else if( ret.state==11 ){
                $('.btn .txt').text( self.unicodeTxt.waitInstall );
            }else if( ret.state==10 ){
                self.installSuccess();
            }
        });
        // 监听下载进度
        TenvideoJSBridge.on("onDownloadTaskProgressChanged", function(ret){
            $('.btn .progress').css( 'width', ret.progress+'%' );
        });
        // 检测是否安装了app
        TenvideoJSBridge.invoke('isInstalled', pkgName, function(res){
          // 该res为json string
          var jres = JSON.parse(res)
          if(jres.errCode == '0'){ // 调用成功
            // installed = true 已安装, = false 未安装
            if(jres.result.installed){ // 已经安装
              // 打开app
                
                if( self.getUA().iphone ){
                    var params = {
                        "pkgName": self.packageName,
                        "pkgUrl": self.openUrl,
                        "appName": self.appName
                    }
                    TenvideoJSBridge.invoke('launch3rdApp', params, function(){})
                }else{
                    self.openApp();
                }
            }else{ // 未安装
                var down = function(){
                    // 下载app
                    TenvideoJSBridge.invoke('download3rdApp', {
                        // android
                        "downloadUrl": self.vdownloadUrl,
                        "packageName": self.packageName,
                        "iconUrl": self.downLogo,
                        "appName": self.appName,
                        // ios
                        "itunesUrl": 'http://itunes.apple.com/cn/app/id'+ self.qqAppID,
                        "packageUrl": self.openUrl,
                    }, function(){

                    })
                };

                if( stat ){
                    // 无视网络状态，直接下载
                    down();
                }else{
                    // 检测网络
                    TenvideoJSBridge.invoke('getNetworkState', null, function( res ){
                        var jret = JSON.parse( res );

                        if( jret.result && jret.result.state!=1 ){
                            self.nowifi();
                        }else{
                            down();
                        }
                    });
                }
            }
          }else{
            // 调用失败
          }
        })
    },

    handleQQ : function(stat){
        var self = this;
        var isBind = false;
        var ua = self.getUA();
        
        var check = function(){
            var apkInfo = self.packageName;
            if (ua.iphone) {
                apkInfo = self.openUrl;
            }
            mqq.app.isAppInstalled(apkInfo, function(result) {      
                if( result ){
                    // 已安装
                    if(ua.android){
                        self.openApp();
                    }else{
                        mqq.app.launchApp(apkInfo);
                    }
                }else{
                    if(ua.android){
                        $('.btn .txt').text(self.unicodeTxt.down);
                        $('.btn .progress').css( 'width', '3%' );
                    }
                    var down = function(){
                        mqq.app.downloadApp({
                            appid : self.qqAppID,
                            url : self.qqdownloadUrl,
                            packageName : self.packageName,
                            actionCode : 2,
                            via : "ANDROIDQQ.TXREADING",
                            appName : self.appName
                        }, function(data){
                            if(data.state==4) data.pro = 100;
                            if( data.pro>=3 ){
                                $('.btn .progress').css( 'width', data.pro+'%' );
                            }

                            if(data.pro>=100){
                                setTimeout(function(){
                                    self.installInQQ();
                                }, 200)
                            }
                        })
                    }
                    // 若stat为true,则直接进行下载
                    if(!stat && mqq && mqq.device && mqq.device.getNetworkType){
                        mqq.device.getNetworkType(function(status){
                            if(status==1){
                                // wifi
                                down();
                            }else{
                                self.nowifi();
                            }
                        });
                    }else{
                        down();
                    }
                }
            });
        }
        if (window.mqq && mqq.app) {
            check();
        }else{
            self.getScript("//open.mobile.qq.com/sdk/qqapi.js?_bid=152", function(){
                check();
            })
        }
        
    },
    installInQQ : function(){
        var self = this;
        self.installSuccess();
        mqq.app.downloadApp({
            appid : self.qqAppID,
            url : self.qqdownloadUrl,
            packageName : self.packageName,
            actionCode : 5,
            via : "ANDROIDQQ.TXREADING",
            appName : self.appName
        }, function(data){
            
        })
    },
    handleWx: function(status) {
        var self = this;
        if (!window.WeixinJSBridge) {
            document.addEventListener('WeixinJSBridgeReady', function() {
                self.checkInWx(status);
            });
        } else {
            self.checkInWx(status);
        }
    },
    wx_version: '',
    checkInWx: function(status) {
        var self = this;
        var num = 0;
        var ss = navigator.userAgent.toLowerCase().match(/micromessenger\/(\d+)\.(\d+)\.(\d+)/),
            n = 0;
        ss && ss.length>=4 && (n = 100 * parseInt(ss[1]) + parseInt(ss[2]) + parseInt(ss[3]) / 1000);
        
        self.wx_version = n;
        function checkInstallState() {
            WeixinJSBridge.invoke('getInstallState', {
                'packageName': self.packageName,   // Android必填
                'packageUrl': self.openUrl         // IOS必填
            }, function(e) {
                if( e.err_msg.indexOf('yes')>-1 ){
                    self.openAppInWx();
                }else{
                    if(status){
                        self.downloadAppInWx();
                    }else{
                        WeixinJSBridge.invoke("getNetworkType", {}, function(res) {
                            if(res.err_msg.indexOf('wifi')>-1){
                                // wifi
                                self.downloadAppInWx();
                            }else{
                                self.nowifi();// no wifi
                            }
                        });
                    }
                    // self.downloadAppInWx();
                }
            });
        }
        // if( self.wx_version<'6.5.7' ){
        //     if( $('.btn').attr('running')!='running' ){
        //         $('.btn').attr('running', 'running');
        //         checkInstallState();
        //     }
        // }else{
        //     checkInstallState();
        // }
        checkInstallState();
    },
    wx_download_id : '',
    // 使用微信提供的api下载
    downloadAppInWx : function(){
        var self = this;

        if(self.getUA().android){
            var wx_d_version = 605.007;
            WeixinJSBridge.on("wxdownload:state_change", function (res) {
                if( res.state=="download_succ" ){
                    self.progressInWx(100);
                    self.installSuccess();
                    $('.btn').attr('running', '');
                }else if(res.state=='downloading'){
                    if(!self.progress_timer){
                        self.progressInWx();
                    }
                }
            });

            if(self.wx_version<wx_d_version){
                $('.btn .txt').text(self.unicodeTxt.down);
                if( $('.btn').attr('running')!='running' ){
                    $('.btn').attr('running', 'running');
                }
            }
            WeixinJSBridge.invoke("addDownloadTask",{
                "task_name": self.appName,
                "task_url": self.wxdownloadUrl,
                "thumb_url": self.downLogo,
                "file_md5": self.fileMd5
            },function(res){
                if( self.wx_version>=wx_d_version ){
                    if( res.err_msg=='addDownloadTask:cancel' ){
                        $('.btn .txt').text(self.unicodeTxt.withdraw);
                    }else if( res.err_msg=='addDownloadTask:ok' ){
                        $('.btn .txt').text(self.unicodeTxt.down);
                    }else{

                    }
                }else{
                    self.wx_download_id = res.download_id;
                    self.installDownload();
                }
            });
        }else{
            location.href = 'http://itunes.apple.com/cn/app/id'+ self.qqAppID;
        }
    },

    // 低版本微信，设置假的进度条
    progress_timer : null,
    progressInWx : function(pro){
        var max = 95,
            progress = 0;

        if(pro){
            clearInterval(self.progress_timer);
            $('.btn .progress').css( 'width', '0%' ).removeClass('progress_end');
        }else{
            self.progress_timer = setInterval(function(){
            var s = parseInt( Math.random()*4 );
                progress += s;

                if( !$('.btn .progress').hasClass('progress_end') && progress>=96){
                    $('.btn .progress').addClass('progress_end');
                }
                if( progress<=max ){
                    $('.btn .progress').css( 'width', progress+'%' );
                }else{
                    clearInterval(self.progress_timer);
                }
                
            }, 390);
        }

        
    },
    // 取消下载任务
    cancelDownloadInWx : function(){
        var self = this;

        WeixinJSBridge.invoke("cancelDownloadTask",{
            "download_id": self.wx_download_id
        },function(res){
            
        });
    },
    // 安装下载的app
    installDownload : function(){
        var self = this;

        WeixinJSBridge.invoke("installDownloadTask",{
            "download_id": self.wx_download_id
        },function(res){
            // $('.down_tip').text(JSON.stringify(res));
        });
    },
    openAppInWx : function(){
        var self = this;
        var param = {
            schemeUrl : self.openUrl
        };
        var ss = navigator.userAgent.toLowerCase().match(/micromessenger\/(\d+)\.(\d+)\.(\d+)/),
            n = 0;
        ss && ss.length>=4 && (n = 100 * parseInt(ss[1]) + parseInt(ss[2]) + parseInt(ss[3]) / 1000);

        if( n>=605.006 ){
            WeixinJSBridge.invoke("launchApplication",param,function(res){
                
            });
        }else{
            self.openApp()
        }
    },
    defaultopenApp: function() {
        var self = this;
        var ua = self.getUA();
        var startTime = (new Date).valueOf();
        if (ua.android) {
            var e = document.createElement("iframe");
            e.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;";
            e.src = self.openUrl;
            document.body.appendChild(e);
            startTime = (new Date).valueOf();
        }else {
            location.href = self.openUrl;
        }
        setTimeout(function() {
            var endTime = (new Date).valueOf();
            if (1550 > endTime - startTime) {
                if(ua.android){
                    location.href = self.downloadUrlIn3app;
                }else{
                    location.href = 'http://itunes.apple.com/cn/app/id'+ self.qqAppID;
                }
            }
        }, 1500);
    },
    openApp: function() {
        location.href = this.openUrl;
    },
    downloadApp: function() {
        location.href = this.wxdownloadUrl;
    }
};/*  |xGv00|022d81593a34a8ea81a9b466a263fb78 */