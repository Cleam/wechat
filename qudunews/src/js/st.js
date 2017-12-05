/**
 * Created by zgli on 11/30/15.
 */

var keyword;
var dataSource;
var uid;
var site;
var os;
var id;
var tgch;
(function () {
    var params = getArgs(document.getElementById("stJs").getAttribute("data"));
    //console.logs(params.id + "   " + params.site + "  "+params.service);
    site = params.site;
    id = params.id;
    tgch = params.tgch;

    jsonp({
        url: params.service + "/statistics/clicked",              //请求地址
        callback: "callbackparam",
        type: "GET",
        data: {
            id: params.id,//应用id
            tgch: params.tgch,//糖果ch
            referer: document.referrer,
            //referer: "http://m.baidu.com/baidu.php?url=0f00000FOEU81vcjj7i_tbjhT0K39PahZRHTdOI1NVqCZk7Brw8MbRQRtweI-F-33He5quKIPHbFOhAnzPK9wHum5hXmWZ_OB8jxB8zVuAI5ZujAsBjAn7D-NZfm35Z2Yyy-OSf.7D_ipxQN6u3gC6EztJuClMmcpbsNn89JHKL9u4mvcYlXyqM76ls_t_HAH_LSPMuELUSrHoa1zEmu8yFWuvI-OQswojPakboerr4f.U1Yk0ZDqVEe2dord0ZfqVEe2dord0A-V5Hczn6KM5gI8nj00Iybq0ZKGujYk0APGujY1rjb0UgfqnW01P7tznj0kg1DsnHIxnW0knfKopHYs0ZFY5HTLn0K-pyfqnW03g1DkP1KxPj0kg1DsnjR4PNtknj01rjD0mhbqnW0vg1csnj0zg1csnjm10AdW5HmLnHD1rHmLn-tkPH6znjmYg1m3njmknjfdg100TgKGujYs0Z7Wpyfqn0KzuLw9u1Ys0AqvUjYkPH0sQH00mycqn7ts0ANzu1Ys0ZKs5H00UMus5H08nj0snj0snj00Ugws5H00uAwETjYk0ZFJ5H00uANv5gIGTvR0uMfqn6KspjYs0Aq15Hc0mMTqP0K8IjYk0ZPl5HD1nWKxnH0snfKYIgnqnHm1P10YPjcdPH0LPW0sn16snj60ThNkIjYkPjf1PjR3nWDsPWm40ZPGujYsuHn4mHNWnjFBPHn4Pvfz0AP1UHdDPRNDwH0vn17jrjwjf1mk0A7W5HD0mhsqn0KWThnqnHc3PWc&qid=0e39a5c02b5397d2&sourceid=160&placeid=1&rank=1&shh=m.baidu.com&word=%E4%BA%8C%E6%89%8B%E8%BD%A6&sht=844b",
            //referer:"http://cpro.baidu.com/cpro/ui/uijs.php?en=mywWUA71T1YsFh7sT7qGujYsFhPh5HfYFhPC5H0huAbqniuGTdq9TZ0qnauJp1YduWu9uWR1uHwbuycsnj63Fh_qFRn1FRn1FRn1FRn1FRPKFRf1FRnvFRcdFRfvFRckFRczFRDdFh_s5iNjnzNjnzNjnzNjnzNjfiNDnzNjPBNaPiNDPBNaniNanBNKPiuonHY-fWc-fHR-fWc-fHR-fWT-f1R-f1m-wWThp1cqFRnzFRDkFRfsFRf3FRc4FRR3FRFDFRFKFhkdpvbqnBuVmLKV5HD1P1m4FMDqrHfsrHbkPHKxPdqWTZchThcqnauzT1YkFMP-UAk-T-qGujYkFMPGujY3rj0suycYujP-uWRvmHNhFMPYpyfqPj0snBuY5gwsmvkGmvV-ujPxUyqBgv71T7tknzuYujYzPHb1rjbdFMwVT1YkPj6srj63PjDzFMwd5gRzPHb1rjbdFMRqpZwYTaR1fiRzwBRzwhY-nbNoIHm-nbNWUvYhIWYkFhbqn1NhPAn4mWb&c=news&fv=0&kdi0=1&kdi1=8&kdi2=8&mscf=0&n=10&nttp=2&p=baidu&ssp2=2&u=%2Fbd%2Faside%2Ehtml%3Fuid%3Du2593895%26type%3Dnative%26at%3D3%26hn%3D0%26wn%3D0%26imgRatio%3D1%2E7%26scale%3D20%2E6%26pat%3D6%26tn%3Dtemplate%5Finlay%5Fall%5Fmobile%5Flu%5Fnative%26rss1%3D%2523FFFFFF%26adp%3D1%26ptt%3D0%26titFF%&urlid=0",
            site: site == "undefined" || site == null ? '' : site,
            plan: params.plan,
            adGroup: params.adGroup,
            term: params.term,
            creativeId: ""
        },
        dataType: "json",
        success: function (response, xml) {
            // 此处放成功后执行的代码
            if (response.success) {
                keyword = response.keyword;
                dataSource = response.dataSource;
                uid = response.uid;
                site = response.site;
                os = response.os;
                console.log("st.js,uid:" + uid + ";os=" + os);
            }
            //console.logs("keyword:"+keyword+"   dataSource:"+dataSource+ "  udi: " + uid);
        },
        fail: function (status) {
            // 此处放失败后执行的代码
            //console.logs("fail:"+status);
        }
    });

    function jsonp(options) {
        options = options || {};
        if (!options.url || !options.callback) {
            throw new Error("参数不合法");
        }

        //创建 script 标签并加入到页面中
        var callbackName = ('jsonp_' + Math.random()).replace(".", "");
        var oHead = document.getElementsByTagName('head')[0];

        options.data[options.callback] = callbackName;
        var params = formatParams(options.data);
        var oS = document.createElement('script');
        oHead.appendChild(oS);

        //创建jsonp回调函数
        window[callbackName] = function (json) {
            oHead.removeChild(oS);
            clearTimeout(oS.timer);
            window[callbackName] = null;
            options.success && options.success(json);
        };

        //发送请求
        oS.src = options.url + '?' + params;

        //超时处理
        if (options.time) {
            oS.timer = setTimeout(function () {
                window[callbackName] = null;
                oHead.removeChild(oS);
                options.fail && options.fail({message: "超时"});
            }, time);
        }
    }

    //格式化参数
    function formatParams(data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        }
        return arr.join('&');
    }

    function getParams(_url) { //定义函数
        var pattern = /(\w+)=(\w+)/ig;//定义正则表达式
        var params = {};//定义数组
        _url.replace(pattern, function (a, b, c) {
            params[b] = c;
        });
        return params;
    }

    function getArgs(query) {
        var args = new Object();
        //var query = location.search.substring(1);     // Get query string
        var pairs = query.split("&");                 // Break at ampersand
        for (var i = 0; i < pairs.length; i++) {
            var pos = pairs[i].indexOf('=');          // Look for "name=value"
            if (pos == -1) continue;                  // If not found, skip
            var argname = pairs[i].substring(0, pos);  // Extract the name
            var value = pairs[i].substring(pos + 1);    // Extract the value
            value = decodeURIComponent(value);        // Decode it, if needed
            args[argname] = value;                    // Store as a property
        }
        return args;                                  // Return the object
    }
})();

