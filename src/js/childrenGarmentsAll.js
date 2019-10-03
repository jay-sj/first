;$(function() {
    tabPage({
        pageMain: '#pageMain',
        pageNav: '#pageNav',
        pagePrev: '#prev',
        pageNext: '#next',
        curNum: 1,
        /*每页显示的条数*/
        activeClass: 'active',
        /*高亮显示的class*/
        ini: 0 /*初始化显示的页面*/
    });

    function tabPage(tabPage) {
        var pageMain = $(tabPage.pageMain);
        /*获取内容列表*/
        var pageNav = $(tabPage.pageNav);
        /*获取分页*/
        var pagePrev = $(tabPage.pagePrev);
        /*上一页*/
        var pageNext = $(tabPage.pageNext);
        /*下一页*/


        var curNum = tabPage.curNum;
        /*每页显示数*/
        var len = Math.ceil(pageMain.find("li").length / curNum);
        /*计算总页数*/
        console.log(len);
        var pageList = '';
        /*生成页码*/
        var iNum = 0;
        /*当前的索引值*/

        for (var i = 0; i < len; i++) {
            pageList += '<a href="javascript:;">' + (i + 1) + '</a>';
        }
        pageNav.html(pageList);
        /*头一页加高亮显示*/
        pageNav.find("a:first").addClass(tabPage.activeClass);

        /*******标签页的点击事件*******/
        pageNav.find("a").each(function() {
            $(this).click(function() {
                pageNav.find("a").removeClass(tabPage.activeClass);
                $(this).addClass(tabPage.activeClass);
                iNum = $(this).index();
                $(pageMain).find("li").hide();
                for (var i = ($(this).html() - 1) * curNum; i < ($(this).html()) * curNum; i++) {
                    $(pageMain).find("li").eq(i).show()
                }

            });
        })


        $(pageMain).find("li").hide();
        /************首页的显示*********/
        for (var i = 0; i < curNum; i++) {
            $(pageMain).find("li").eq(i).show()
        }


        /*下一页*/
        pageNext.click(function() {
            $(pageMain).find("li").hide();
            if (iNum == len - 1) {
                alert('已经是最后一页');
                for (var i = (len - 1) * curNum; i < len * curNum; i++) {
                    $(pageMain).find("li").eq(i).show()
                }
                return false;
            } else {
                pageNav.find("a").removeClass(tabPage.activeClass);
                iNum++;
                pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);
                //                    ini(iNum);
            }
            for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
                $(pageMain).find("li").eq(i).show()
            }
        });
        /*上一页*/
        pagePrev.click(function() {
            $(pageMain).find("li").hide();
            if (iNum == 0) {
                alert('当前是第一页');
                for (var i = 0; i < curNum; i++) {
                    $(pageMain).find("li").eq(i).show()
                }
                return false;
            } else {
                pageNav.find("a").removeClass(tabPage.activeClass);
                iNum--;
                pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);
            }
            for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
                $(pageMain).find("li").eq(i).show()
            }
        })

    }

})
;(function(){
    var div1 = document.querySelectorAll(".nav-option-l>div");
    var div2 = document.querySelectorAll(".nav-option-r>div");
    for(var i=0;i<div1.length;i++){
        div1[i].index = i;
        div1[i].onmouseover = function(){
            for(var j =0;j<div1.length;j++){
                div1[j].className="";
                div2[j].style.display="none";
            }
            this.className="act";
            div2[this.index].style.display="block";
        }
    }
}())
// 侧边栏
;$(function(){
    $(".sideBar li:first").hover(function () {
        $(".sideBar li:first").css({
            background:"#ee3753",
        });
        $(".sideBar li:first span").css({
            color:"#fff"
        });
    }, function () {
        $(".sideBar li:first").css({
            background:"#fefefe",
            color:"#fe899b"
        });
        $(".sideBar li:first span").css({
            color:"#fe899b"
        });
    }
    );
    $(".sideBar li:eq(1)").hover(function () {
        $(".sideBar li:eq(1) span").css({
            color:"#fff"
        });
        
    }, function () {
        $(".sideBar li:eq(1) span").css({
            color:"#fe899b"
        });
    }
    );
     $(function () {
        $(".goTop").click(function(){
            $('body,html').animate({scrollTop:0},200);
            return false;
        });
    });
})
// 懒加载
;(function($){
    var defaults = {
        coverColor:"#dfdfdf",
        coverDiv:"",
        showTime:300,
        offsetBottom:0,
        offsetTopm:50,
        onLoadBackEnd:function(index,dom){},
        onLoadBackStart:function(index,dom){}
    }
    //所有待load src
    var srcList = []
    var lazyLoadCoutn = 0;
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var lazyImgList = $("img[data-lazy-src]");
    var default_base64_src ="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    //获取img
    function getImgNaturalDimensions(src, callback,lazyLoadCoutn) {
        var nWidth, nHeight
        var image = new Image()
        image.src = src;
        image.onload = function() {
            callback(image.width, image.height);
            defaults.onLoadBackStart(lazyLoadCoutn,$("img[data-lazy-src]:eq("+lazyLoadCoutn+")"));
        }
        return [nWidth, nHeight];
    }
    function showImg(lazyLoadCoutn,callback){
        var src =  lazyImgList.eq(lazyLoadCoutn).attr("data-lazy-src")
        getImgNaturalDimensions(src, function () {
            try {
            meng($("img[data-lazy-src]:eq("+lazyLoadCoutn+")") ,lazyLoadCoutn,callback)
                }catch(error) {
                }
        },lazyLoadCoutn)
    }
    function meng(jDom,lazyLoadCoutn,callback){
        if(jDom.attr("data-comp")){
            return;
        }
        jDom.css("visibility","hidden");
        jDom.attr("src",jDom.attr("data-lazy-src"))
        var w = jDom.width();
        var h = jDom.height();
        var offsetTop = jDom.offset().top;
        var offsetLeft = jDom.offset().left;
        jDom.css("visibility","visible");
        $("body").append("<div class='meng-lazy-div"+lazyLoadCoutn+"' style='background-color: "+defaults.coverColor+";position:absolute;width:"+w+"px;height:"+h+"px;top:"+offsetTop+"px;left:"+offsetLeft+"px;z-index:500'>"+defaults.coverDiv+"</div>");
        noneM(lazyLoadCoutn,callback,jDom);
        jDom.attr("data-comp","true");
    }
    function noneM(lazyLoadCoutn,callback,jDom){
        if(true){
            $(".meng-lazy-div"+lazyLoadCoutn).animate({opacity:"0"},defaults.showTime,function(){
               $(this).remove();
                defaults.onLoadBackEnd(lazyLoadCoutn,jDom)
                callback();
            });
        }
    }
    function checkOffset(){
        var scrollTop = $(document).scrollTop();
        var onlazyList = [];
        lazyImgList.each(function(index){
            var dom = $(this);
            if(!dom.attr("data-comp")){
                if(dom.offset().top-scrollTop+defaults.offsetTopm>=0&&dom.offset().top-scrollTop<(windowHeight+defaults.offsetBottom)){
                    onlazyList.push(index);
                }
            }
        })
        if(onlazyList.length!=0){
            showImg(onlazyList[0],function(){
                checkOffset();
            });
        }
    }
    function range(){
        checkOffset();
    }
    function init(setting){
        defaults = $.extend(defaults,setting);
        lazyImgList.each(function(){
            var sr = $(this).attr("data-lazy-src");
            srcList.push(sr);

            $(this).attr("src",default_base64_src);
        });
        range();
        window.onscroll=function(){
            range()
        }
    }
    window.lazyLoadInit = init;
})($);
lazyLoadInit();