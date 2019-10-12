; $(function () {
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
        pageNav.find("a").each(function () {
            $(this).click(function () {
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
        pageNext.click(function () {
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
        pagePrev.click(function () {
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
    ; (function () {
        var div1 = document.querySelectorAll(".nav-option-l>div");
        var div2 = document.querySelectorAll(".nav-option-r>div");
        for (var i = 0; i < div1.length; i++) {
            div1[i].index = i;
            div1[i].onmouseover = function () {
                for (var j = 0; j < div1.length; j++) {
                    div1[j].className = "";
                    div2[j].style.display = "none";
                }
                this.className = "act";
                div2[this.index].style.display = "block";
            }
        }
    }())
    // 侧边栏
    ; $(function () {
        $(".sideBar li:first").hover(function () {
            $(".sideBar li:first").css({
                background: "#ee3753",
            });
            $(".sideBar li:first span").css({
                color: "#fff"
            });
        }, function () {
            $(".sideBar li:first").css({
                background: "#fefefe",
                color: "#fe899b"
            });
            $(".sideBar li:first span").css({
                color: "#fe899b"
            });
        }
        );
        $(".sideBar li:eq(1)").hover(function () {
            $(".sideBar li:eq(1) span").css({
                color: "#fff"
            });

        }, function () {
            $(".sideBar li:eq(1) span").css({
                color: "#fe899b"
            });
        }
        );
        $(function () {
            $(".goTop").click(function () {
                $('body,html').animate({ scrollTop: 0 }, 200);
                return false;
            });
        });
    })
    // 懒加载
    ; (function () {
        $(window).scroll(function () {//窗口滚动的时候（鼠标滚轮的时候。。）
            $('img').each(function () {//把以下的方法作用到每一个img标签，可自行加限定条件
                var $imgSrc = $(this).attr('data-src');//获取每张图片对应地址
                var $imgTop = $(this).offset().top;//获取每张图片对应距离document顶部的高度
                var scrollT = $(window).scrollTop();//获取滚轮滚动的距离
                var halfDoc = $(window).height();//获取浏览器窗口可视高度
                var ifElse = (scrollT + halfDoc) >= $imgTop;//如果滚动距离加上窗口可视高度大于该图片距离document顶部的高度
                var _this = this;//保存this的作用域以便于在其它作用域上使用这个作用域
                if (ifElse) {//如果条件成立
                    setTimeout(function () { $(_this).attr('src', $imgSrc); }, 200);//把图片的src地址改成data-src的值（前面已经获取了）
                }
            })//end object 'img'
        })//end object window
        $(document).trigger("scroll");
    }())
    // 点击显示/隐藏
    ; $(function () {
        $(".more").click(function () {
            if ($(".classify").height() == 156) {
                $(".classify").css({ height: 251 });
                $(".hiddenPart").css({ display: "block" });
                $(".moreUnfold").html("收起")
            } else if ($(".classify").height() == 251) {
                $(".classify").css({ height: 156 });
                $(".hiddenPart").css({ display: "none" });
                $(".moreUnfold").html("更多")
            }
        });
    })
    // 顶部滑动固定
    ; (function () {
        $(document).scroll(function () {
            if ($(document).scrollTop() > 170) {
                $(".beibei-top").show();
            } else {
                $(".beibei-top").hide();
            }
        })
        $(document).trigger("scroll");
    }())
    // 纸尿裤页面的显示与消失
    ; $(function () {
        $(".moree").click(function () {
            if ($(".menuBrand").height() == 130) {
                $(".menuBrand").css("height", "211px");
                $(".brandHidden").css({ display: "block" });
                $(".moreUnfold").html("收起")
            } else if ($(".menuBrand").height() == 211) {
                $(".menuBrand").css("height", "130px");
                $(".brandHidden").css({ display: "none" });
                $(".moreUnfold").html("更多")
            }
        });
    })
    //侧边固定定位
    ; $(function () {
        $(document).scroll(function () {
            if ($(document).scrollTop() >= 600) {
                $(".coder").show();
            } else {
                $(".coder").hide();
            }
        })
        $(document).trigger("scroll");
    }())
    // 精彩预告的顶部滑动固定
    ; $(function () {
        $(document).scroll(function () {
            if ($(document).scrollTop() >= 280) {
                $(".bannerTop").show();
            } else {
                $(".bannerTop").hide();
            }
        })
        $(document).trigger("scroll");
    }())

    ; (function () {
        $(".sidebar-back").click(function () {
            $('body,html').animate({
                scrollTop: 0
            },
                500);
            return false;
        });
    }())
    ;$(function() {
        // 滚动条事件
        $(window).scroll(function(){
            // 获取滚动距离
            var os = $(document).scrollTop();
            if(os >= $(".presell").offset().top){
                $(".bannerTops a").eq(2).addClass("current").siblings().removeClass("current");
            }else if(os >= $(".update").offset().top){
                $(".bannerTops a").eq(1).addClass("current").siblings().removeClass("current");
            }
        }).trigger("scroll");
        // 点击侧边导航页面位置滚动到对应的距离
        $(".bannerTops a").click(function(){
            var index = $(this).index();
            $("html,body").animate({
                scrollTop :$(".dian").eq(index).offset().top
            },200);
        });
      }())
      