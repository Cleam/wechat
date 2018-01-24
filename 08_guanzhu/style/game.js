//打乱数组 //rwqly.cn
var arr = [
  ['5年后你开什么车', 'http://www.8qvnzz.cn/hd/20car/index.php', 'http://i1.cfimg.com/579930/52bad03b0a00e43ft.jpg'],
  ['你的欲望分布图', 'http://www.8qvnzz.cn/hd/21yuwang/index.php', 'http://wx.y1y.me/uploads/7/7PnlQkrf21rsmKkKJ4mB/e/6/f/8/thumb_58eb15daad979.jpg'],
  // ['你单身的原因','http://www.8qvnzz.cn/hd/29danshen/index.php','http://wx.y1y.me/uploads/E/EKHrAqJ3eerCnfKdfSA5/f/1/f/e/599fdbb3ac666.jpg'],
  // ['测测你的致命弱点？','http://www.8qvnzz.cn/hd/32ruodian/index.php','http://wx.y1y.me/uploads/s/snhpft1505529697/1/0/c/8/5a097c6e383e0.jpg'],
  // ['星座性格人前人后','http://www.8qvnzz.cn/hd/33star/index.php','http://i1.cfimg.com/579930/a2e219325eec8de8s.png'],
  // ['测测你像王者荣耀里面的角色','http://www.8qvnzz.cn/hd/23wangzhe/index.php','http://wx.y1y.me/uploads/K/KCq9sFkamsmrGPty8hpG/6/e/a/4/59e0686c7d502.JPG'],
  // ['测测未来三年内，你会发生的三件事','http://www.8qvnzz.cn/hd/30sanniannei/index.php','http://wx.y1y.me/uploads/z/zdunEGqzirMgArAeD6wH/8/1/6/f/59f97f40a2773.png'],
  ['你的酒量成绩单', 'http://www.8qvnzz.cn/hd/25jiuliang/index.php', 'http://wx.y1y.me/uploads/s/snhpft1505529697/c/d/e/2/59eca9b628b3e.jpg'],
  // ['你的爱情成绩单','http://www.8qvnzz.cn/hd/34aiqingcj/index.php','http://wx.y1y.me/uploads/L/LcbhsrqkydES4iqdgSMT/2/8/b/b/5a0e8f9c2f24d.png'],
  ['神造你时加了什么魔法？', 'http://www.8qvnzz.cn/hd/35shangdi/index.php', 'http://wx.y1y.me/uploads/s/snhpft1505529697/f/8/4/6/5a12679205f0b.jpg'],
  // ['测测你的命运是什么？','http://www.8qvnzz.cn/hd/36minyun/index.php','http://wx.y1y.me/uploads/m/mvptst1487558085/2/e/b/7/5a13b6f6ea416.jpg'],
  // ['你身体隐藏的秘密...','http://www.8qvnzz.cn/hd/37tijian/index.php','http://wx.y1y.me/uploads/L/LcbhsrqkydES4iqdgSMT/e/f/3/2/5a16966cd6c24.png'],
  // ['你的星座长相图','http://www.8qvnzz.cn/hd/38star/index.php','http://i2.cfimg.com/579930/05d0f3cd0c29fadas.png'],
  // ['你的性格成分表','http://www.8qvnzz.cn/hd/43sex/index.php','http://wx.y1y.me/uploads/g/gpccsf1512136200/1/3/0/d/5a252147d1e17.png'],
  ['2018年你的人生大事件', 'http://www.8qvnzz.cn/hd/45dashi/index.php', 'http://wx.y1y.me/uploads/b/bzqtux1511241705/2/2/6/8/5a2f96869c8de.jpg'],
  // ['你的单身的原因','http://www.8qvnzz.cn/hd/46danshen/index.php','http://wx.y1y.me/uploads/b/bcDpesHK9wCEvrfD2ddx/4/8/d/f/5a30dee2e0b3c.png'],
  // ['你的人生经历','http://www.8qvnzz.cn/hd/39renshengjingli/index.php','http://wx.y1y.me/uploads/L/LcbhsrqkydES4iqdgSMT/4/5/3/0/5a1b894e9e9d3.png'],
  // ['你的星座形象单','http://www.8qvnzz.cn/hd/40xingzuo/index.php','http://wx.y1y.me/uploads/t/tjlctu1511849149/a/1/c/0/5a1f68b783f20.png'],
  // ['2018转运指南','http://www.8qvnzz.cn/hd/47yunshi/index.php','http://y1y-src.oss-cn-shanghai.aliyuncs.com//uploads/T/T3LoJbpu69orxrAakPLu/7/b/f/6/5a339291566a1.jpg'],
  // ['2018年你的三个关键词','http://www.8qvnzz.cn/hd/48word/index.php','http://y1y-src.oss-cn-shanghai.aliyuncs.com//uploads/c/c681vqQSS2DqgAfBqJBt/a/8/c/d/5a3780d03a293.png'],
  // ['你的个性大字报','http://www.8qvnzz.cn/hd/49dazi/index.php','http://i1.fuimg.com/579930/cd8419b618a80e0es.png'],
  ['你的2018狗年运势图', 'http://www.8qvnzz.cn/hd/52dog/index.php', 'http://wx.wpart.cn//uploads/b/bcDpesHK9wCEvrfD2ddx/1/3/b/1/5a3cda4b7a182.jpg'],
  ['2018年你会靠什么吃饭？', 'http://www.8qvnzz.cn/hd/54rice/index.php', 'http://y1y-src.oss-cn-shanghai.aliyuncs.com//uploads/s/snhpft1505529697/7/9/7/a/5a37c7121c94f.jpg'],
  ['看看你的2017·2018', 'http://www.8qvnzz.cn/hd/5420182017/index.php', 'http://wx.wpart.cn//uploads/L/LcbhsrqkydES4iqdgSMT/5/0/a/e/5a435a44d63a4.png'],
  ['预言2018，你会发生的三件事？', 'http://www.8qvnzz.cn/hd/55yuce/index.php', 'http://wx.wpart.cn//uploads/s/snhpft1505529697/9/5/0/8/5a44b6d276e24.jpg'],
  // ['从姓名测试你的2018运势','http://www.8qvnzz.cn/hd/56yunshi/index.php','http://wx.wpart.cn//uploads/e/ehxase1508745115/0/e/5/2/5a45ef5f0fd92.jpg'],
  ['测测你的身价', 'http://www.8qvnzz.cn/hd/57shenjia/index.php', 'http://wx.wpart.cn//uploads/t/taxqmg1504598108/7/2/0/6/5a4f37f3b15cc.jpg'],
  ['你的印象成绩单', 'http://wx.qv3dq.cn/hd/58yinxiang/index.php', 'http://wx.wpart.cn/uploads/u/uvfygh1507881687/d/c/8/a/5a549de21d83f.png_p2js'],
  // ['你的爱情账单！','http://www.8qvnzz.cn/hd/59zhangdan/index.php','http://wx.wpart.cn/uploads/e/eictde1515131053/1/4/7/2/5a57233e31cf9.png_p2js'],
  ['你被喜欢的5个理由...', 'http://www.8qvnzz.cn/hd/60beixihuan/index.php', 'http://wx.wpart.cn/uploads/s/snhpft1505529697/2/8/e/8/5a57304f935cf.jpg_p2js'],
  ['预测你的未来', 'http://www.8qvnzz.cn/hd/61weilai/index.php', 'http://wx.wpart.cn//uploads/b/bcDpesHK9wCEvrfD2ddx/0/f/e/9/5a44930952b03.jpg'],
  // ['你的性格标签是...','http://www.8qvnzz.cn/hd/62sex/index.php','http://wx.wpart.cn/uploads/w/wmnyn1510276976/5/7/6/a/5a5870f44fddc.jpg_p2js'],
  // ['2018年你的脱单概率','http://www.8qvnzz.cn/hd/63tuodan/index.php','http://wx.wpart.cn//uploads/b/bcDpesHK9wCEvrfD2ddx/e/5/a/7/5a41becaba2c9.jpg'],
  ['你的年终总结单', 'http://www.8qvnzz.cn/hd/64zj/index.php', 'http://wx.wpart.cn/uploads/s/snhpft1505529697/1/c/5/2/5a5c7c81d03d6.jpg_p2js'],
  ['2018你靠什么脱单', 'http://www.8qvnzz.cn/hd/65tuodan/index.php', 'http://wx.wpart.cn/uploads/k/khwqxl1511762950/d/e/c/3/5a5dc601b64d4.png_p2js'],
  ['2018新年签', 'http://www.8qvnzz.cn/hd/66newyear/index.php', 'http://wx.wpart.cn//uploads/b/bcDpesHK9wCEvrfD2ddx/c/f/0/2/5a4b2c1439cac.jpg'],
  ['测测2018你能完成的愿望清单', 'http://www.8qvnzz.cn/hd/67yuanwang/index.php', 'http://wx.wpart.cn/uploads/t/taxqmg1504598108/b/9/6/b/5a5edbc9df11e.jpg_p2js'],
  ['你的2018三大关键词', 'http://www.8qvnzz.cn/hd/68newword/index.php', 'http://wx.wpart.cn/uploads/b/bcDpesHK9wCEvrfD2ddx/6/c/5/d/5a2659ad6d7f0.jpg'],
  ['🔥春节期间你会发生的5件大事', 'http://wx2.lq8cu.cn/hd/5chunjie/index.php', 'http://wx.wpart.cn/uploads/t/taxqmg1504598108/9/4/3/d/5a5f087f46db7.jpg_p2js'],
];
arr.sort(function () {
  return (0.5 - Math.random());
});

arr = getRandomArrayElements(arr, 8);


//生成随机数
function MathRand() {
  var num = '';
  var cel = 1000000 - 100000;
  Math.random() * parseInt(cel);
  var num = Math.random() * parseInt(cel) + 100000;
  return num = parseInt(num, 10);
}

//数组中取出n条数据
function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

// var books = [
//       ['婚后的第一天，老公就飞去陪别的女人！','http://t181308.coolzhui.com/index.php/cms/document/detail/id/1324741.html?t=2905','http://img2.imgtn.bdimg.com/it/u=3739443032,2727488176&fm=26&gp=0.jpg','<div class="ui-btn" style="border-radius:5px;border:1px solid rgb(86, 187, 55);padding:0px 25px;color:rgb(86, 187, 55);">进入</div>'],
//       ['陪女老板出差，酒店说还剩一间房⋯⋯','https://m.baozoukanshu.com/content/2222/1/805/61707/0.html','http://img2.imgtn.bdimg.com/it/u=3739443032,2727488176&fm=26&gp=0.jpg','<div class="ui-btn" style="border-radius:5px;border:1px solid rgb(86, 187, 55);padding:0px 25px;color:rgb(86, 187, 55);">进入</div>'],
//       ['为什么好女孩总是被渣男骗上床？','http://t181308.coolzhui.com/index.php/cms/document/detail/id/1430740.html?t=2906','http://img2.imgtn.bdimg.com/it/u=3739443032,2727488176&fm=26&gp=0.jpg','<div class="ui-btn" style="border-radius:5px;border:1px solid rgb(86, 187, 55);padding:0px 25px;color:rgb(86, 187, 55);">进入</div>'],
//       ['女老板酒后吐真言，第二天给我升职加薪⋯⋯','https://c13275.818tu.com/referrals/index/789048','http://i4.cfimg.com/579930/857bfc8f2f880d91t.jpg','<div class="ui-btn" style="border-radius:5px;border:1px solid rgb(86, 187, 55);padding:0px 25px;color:rgb(86, 187, 55);">进入</div>'],
//       ['女领导坚持和下属同住，以便监督晚上工作','https://m.baozoukanshu.com/content/163/1/805/61717/0.html','http://i4.cfimg.com/579930/d543970b1016b5f2t.jpg','<div class="ui-btn" style="border-radius:5px;border:1px solid rgb(86, 187, 55);padding:0px 25px;color:rgb(86, 187, 55);">进入</div>'],
//       ['嫌弃丈夫没本事，老婆拒绝履行夫妻义务⋯⋯','https://m.baozoukanshu.com/content/1101/1/805/61721/0.html','http://i4.cfimg.com/579930/5c3a63efee49e74ct.jpg','<div class="ui-btn" style="border-radius:5px;border:1px solid rgb(86, 187, 55);padding:0px 25px;color:rgb(86, 187, 55);">进入</div>'],
//       ['男人在哪里最容易结识外遇，女人一定要注意啊！','https://m.baozoukanshu.com/content/843/1/805/61723/0.html','http://i4.cfimg.com/579930/4f405b07b859c9edt.jpg','<div class="ui-btn" style="border-radius:5px;border:1px solid rgb(86, 187, 55);padding:0px 25px;color:rgb(86, 187, 55);">进入</div>'],
//       ['男人也是得哄，女人不可不知的九件事！','http://t181308.coolzhui.com/index.php/cms/document/detail/id/514748.html?t=2907 ','http://i4.cfimg.com/579930/588a725f34113921t.jpg','<div class="ui-btn" style="border-radius:5px;border:1px solid rgb(86, 187, 55);padding:0px 25px;color:rgb(86, 187, 55);">进入</div>'],
//       ['继女带男友上门，对象竟是我前夫！','https://c22702.818tu.com/referrals/index/788965','http://i4.cfimg.com/579930/e1012ebd73a9d066t.jpg','<div class="ui-btn" style="border-radius:5px;border:1px solid rgb(86, 187, 55);padding:0px 25px;color:rgb(86, 187, 55);">进入</div>'],
// ];

// var book = getRandomArrayElements(books,1);

var html = '<ul class="ui-list ui-list-function ui-border-tb" style="margin-bottom:5px;display: inline-block;width:96%;margin-left:2%;vertical-align:middle;">';
// for(var k = 0; k < book.length; k++){
//     html += '<li class="ui-border-t" style="border:1px solid rgb(231, 231, 231);border-radius: 0px;box-shadow: rgb(0, 0, 0) 0.5px 0.866025px 3px;background-color: rgb(254, 255, 255);background-color: white;margin-bottom:5px;"><div class="ui-avatar-s" style="width:80px;height:80px"><span style="background-image:url('+book[k][2]+')"></span></div><div class="ui-list-info"><h4 class="" style="font-size:14px;color:#607fa6;width:150px;word-wrap:break-word">'+book[k][0]+'</h4></div><a href="'+book[k][1]+'">'+book[k][3]+'</a></li>';
// }

html += '</ul><ul class="ui-list ui-list-text ui-border-tb" style="margin-bottom:45px;">';

// var zm = [
//      ['香港玄学天后麦玲玲大师为大家带来最新的2018狗年运程分析','https://zxcs.linghit.com/mllyuncheng/index.html?channel=swwxkxsy','http://i1.fuimg.com/579930/b0978f4b0b75ffb9s.jpg'],
//      ['专业八字分析你命中八字强弱、五行喜忌、一生运程、感情钱财','https://zxcs.linghit.com/forecastbazijingpibundle/index.html?channel=swwxkxsy','http://i1.fuimg.com/579930/893927340e973afes.jpg'],
//      ['传统八字看姻缘，可以为命主解答何时会遇到爱情...','https://zxcs.linghit.com/forecastganqingyunshibundle/index.html?channel=swwxkxsy','http://i1.fuimg.com/579930/e10ac011303515acs.jpg'],
//      ['准确预测出你的命运情况，为你解决一切事业财运问题！','https://zxcs.linghit.com/shiyecaiyun/index.html?channel=swwxkxsy','http://i1.fuimg.com/579930/865752b828184369s.jpg'],
//      ['婚姻是人生大事，因此要慎重对待...','https://zxcs.linghit.com/forecasthehunbundle/index.html?channel=swwxkxsy','http://i1.fuimg.com/579930/3f8ce314340a0666s.jpg'],
//      ['测人一生富贵贫贱以及行运好坏，还可知晓前世姻缘','https://zxcs.linghit.com/forecastlunhuishubundle/index.html?channel=swwxkxsy','http://i1.fuimg.com/579930/476af38f7bab94f1s.jpg'],
//      ['八字详细分析你近十年运势','https://zxcs.linghit.com/baziyunshi?channel=swwxkxsy','http://i1.fuimg.com/579930/12f8f036c0d21ff7s.jpg'],
// ];
// var zm = getRandomArrayElements(zm,1);
// zm = '<div><li id="li"><a href="'+zm[0][1]+'" ><div id="li_div"><div>'+zm[0][0]+'</div><span>'+MathRand()+'人正在玩</span></div><img src="'+zm[0][2]+'" class="li_img" style="border:2px solid #008000;" /></a></li></div>';
// for(var g = 0; g < zm.length; g++){
//    html += '<div><li id="li"><a href="'+zm[g][1]+'" ><div id="li_div"><div>'+zm[g][0]+'</div><span>'+MathRand()+'人正在玩</span></div><img src="'+zm[g][2]+'" class="li_img" style="border:2px solid #008000;" /></a></li></div>';
// }
for (var i = 0; i < arr.length; i++) {
  html += '<div class="baidu"><li id="li"><a href="' + arr[i][1] + '" ><div id="li_div"><div>' + arr[i][0] + '</div><span>' + MathRand() + '人正在玩</span></div><img src="' + arr[i][2] + '" class="li_img" style="border:2px solid #008000;" /></a></li></div>';
}
html += '<div><li id="li"><a href="http://www.8qvnzz.cn/hd/list/index.php" ><div id="li_div"><div>👉获取更多有趣好玩</div><span>' + MathRand() + '人正在玩</span></div><img src="http://i1.fuimg.com/579930/ecefb67ded855c45s.png" class="li_img" style="border:2px solid #008000;" /></a></li></div></ul>';
$('#games').html(html);
$('#games').css('border-top', '0');
$('.com-tip').css('display', 'block'); //控制底部广告是否显示
$('.com-tip').attr('style', 'border-top:1px dashed red;text-align:center;background-color:white;');
$('.com-tip a').css('color', 'red');
$('.ui-btn').append("<style>.ui-btn:before{ border:none }</style>");
// var rand = parseInt(8*Math.random())
// $('.baidu').eq(rand).after(zm);

//广告插入å
// $('.baidu').eq(1).after('<div class="baidu" id="PAGE_AD_1"></div>');
// $('.baidu').eq(6).after('<div class="baidu" id="PAGE_AD_2"></div>');
// BAIDU_CLB_fillSlotAsync('u3181434', 'PAGE_AD_1');
// BAIDU_CLB_fillSlotAsync('u3181484', 'PAGE_AD_2');

//总榜代码
// var _hmt = _hmt || [];
// (function () {
//   var hm = document.createElement("script");
//   hm.src = "https://hm.baidu.com/hm.js?66aac108d49fb52e9e8a319cf8e57b79";
//   var s = document.getElementsByTagName("script")[0];
//   s.parentNode.insertBefore(hm, s);
// })();


