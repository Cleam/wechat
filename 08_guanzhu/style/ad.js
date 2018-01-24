
var array = [
  // "https://c22702.818tu.com/referrals/index/788960,小三，谢谢你在床上疯狂的伺候他！",
  // "https://c13275.818tu.com/referrals/index/789051,一夜情过后，我还该不该和他继续联系？",
  // "https://c22702.818tu.com/referrals/index/788963,姨妈期间忍不住亲热了，后果竟然这么惊人！",
  // "https://c13275.818tu.com/referrals/index/789055,男人也是得哄，女人不可不知的九件事！",
  // "https://c22702.818tu.com/referrals/index/788965,继女带男友上门，对象竟是我前夫！",
  // "http://t.cn/RWaEHcb,带你装逼带你飞",
  // "http://wx.by949p.cn/hd/55yuce/index.php?,预言2018，你会发生的三件事",
  // "http://wx.by949p.cn/hd/56yunshi/index.php,从姓名测试你的2018运势",
  // "http://wx.by949p.cn/hd/57shenjia/index.php,测测你的身价",
  // "http://wx.by949p.cn/hd/62sex/index.php,你的性格标签是...",
  // "http://wx.by949p.cn/hd/54rice/index.php,2018年你会靠什么吃饭？",
  // "http://wx.by949p.cn/hd/52dog/index.php,快看你的狗年运势图",
  // "http://wx.by949p.cn/hd/5420182017/index.php,看看你的2017·2018",
  // "http://wx.by949p.cn/hd/61weilai/index.php,预测你的未来",
  // "http://wx.by949p.cn/hd/63tuodan/index.php,2018年你的脱单概率",
  // "http://wx.by949p.cn/hd/65tuodan/index.php,2018你靠什么脱单",
  // "http://wx.by949p.cn/hd/66newyear/index.php,2018新年签",
  // "http://wx.by949p.cn/hd/67yuanwang/index.php,测测2018你能完成的愿望清单",
  // "http://wx.by949p.cn/hd/68newword/index.php,你的2018三大关键词",
  // "http://wx.by949p.cn/hd/64zj/index.php,🔥你的年终总结单",
  // "http://wx.by949p.cn/hd/21yuwang/index.php,测测你的🔥欲望分布图",
  // "http://wx2.lq8cu.cn/hd/5chunjie/index.php,🔥春节期间你会发生的5件大事",
  // "http://wx2.lq8cu.cn/hd/1jiuliang/index.php,🔥春节酒量成绩单",
  // "http://wx3.lq8cu.cn/hd/6zi/index.php,🔥2018你的人生代表字",
  // "http://wx3.lq8cu.cn/hd/7qianshi/index.php,🔥测测你的前世身份是什么？",
  "http://wx3.lq8cu.cn/hd/9zj/index.php,🔥你的年终总结单",
];
var value = array[Math.round(Math.random() * (array.length - 1))];
var val = value.split(',');
$('.tip1').children().attr('href', val[0]);
$('.tip1').children().text('☞ ' + val[1]);
//悬浮广告
// $('.tip1').append('<script type="text/javascript">var cpro_id = "u3158658";</script><script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/cm.js"></script>');