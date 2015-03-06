var mask = null,PublicDiog = null,kWidth=0,kHeight=0;
var DiogObj = {
    'init':function(){
        var _style = document.createElement('style');
        var ohead = document.getElementsByTagName("head")[0];
        var cssText = '#mask{position:absolute;top:0;left:0;background: #000;width:100%;height:1000px;\
        z-index: 1000;opacity: 0.75;filter:alpha(opacity=75);}\
        #Public-diog{position: fixed;top:30%;left:30%;z-index:1001;}\
        #Public-diog .content{width:400px;position: relative;}\
        #Public-diog .content #pop-title{background:#1c69c5;color:#fff;height:40px;}\
        #Public-diog .content #pop-title h3{font-size:16px;float:left;line-height: 40px;margin-left:10px;}\
        #Public-diog .content #pop-title a{text-decoration: none;float: right;padding:5px;margin-right:5px;color:#fff;}\
        #Public-diog .content #info{background: #fff;min-height:150px;}\
        #Public-diog .content #info p{padding: 10px;}\
        #Public-diog .content #info a{background:#74ABED;border:1px solid #74ABED;text-decoration:none;\
        margin-left:180px;text-align: center;color:#fff;}\
        #Public-diog .content #close{position: absolute;right: 5px;top:6px;cursor: pointer;width:40px;height:25px;}';
        _style.innerHTML=cssText;
        ohead.appendChild(_style);
        mask = document.createElement('div');
        mask.id="mask";
        //获取页面的宽度和高度
        var sHeight = document.documentElement.scrollHeight;
        var sWeight = document.documentElement.scrollWidth;
        //可视区域的宽度和高度
        kWidth = document.documentElement.clientWidth;
        kHeight = document.documentElement.clientHeight;
        mask.style.height = sHeight+"px";
        mask.style.width = sWeight+"px";
        document.body.appendChild(mask);
        PublicDiog = document.createElement("div");
        PublicDiog.id="Public-diog";
        PublicDiog.innerHTML = '<div class="content"><div id="pop-title"><h3>提示信息</h3><a href="javascript:DiogObj.closeDiog();"  >关闭</a>\
        </div><div id="info"><p id="DiogmsgChange">可以在这里设置提示信息哦！</p>\
            <a href="javascript:DiogObj.closeDiog();" >提交</a></div></div>';
        mask.onclick = function(){
            document.body.removeChild(mask);
            document.body.removeChild(PublicDiog);
        };
    },
    'showDiog':function(Msg){
        document.body.appendChild(PublicDiog);
        var msg = document.getElementById('DiogmsgChange');
        if(Msg==undefined){
        }else{
           msg.innerHTML=Msg;
        }
        PublicDiog.style.left=(kWidth-PublicDiog.offsetWidth)/2+"px";
        PublicDiog.style.top=(kHeight-PublicDiog.offsetHeight)/2+"px";
    },
    'closeDiog':function(){
        document.body.removeChild(mask);
        document.body.removeChild(PublicDiog);
    }
};