
// 放大镜
; $(function () {
	var ione = $(".one"),
		ithe = $(".the"),
		itwo = $(".two img"),
		tthe = $(".the img");

	var arr = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
	var oarr = ["img/111.jpg", "img/222.jpg", "img/333.jpg"];
	itwo.each(function (i) {
		$(this).click(function () {
			$(".one img").attr("src", arr[i])
			tthe.attr("src", oarr[i])
			itwo.removeClass("active")
			$(this).addClass("active")
		})

		ione.mousemove(function (a) {
			var evt = a || window.event
			ithe.css('display', 'block')
			var ot = evt.clientY - ($(".one").offset().top - $(document).scrollTop()) - 87;
			var ol = evt.clientX - ($(".one").offset().left - $(document).scrollLeft()) - 87;
			if (ol <= 0) {
				ol = 0;
			}
			if (ot <= 0) {
				ot = 0;
			}
			if (ol >= 175) {
				ol = 175
			}
			if (ot >= 175) {
				ot = 175
			}
			$("span").css({ 'left': ol, 'top': ot })
			var ott = ot / 350 * 800
			var oll = ol / 350 * 800
			tthe.css({ 'left': -oll, 'top': -ott })
		})
		ione.mouseout(function () {
			ithe.css('display', 'none')
		})

	})

});


// 倒计时
;$(function countDown() {
	var myTime = new Date()
	var now = myTime.getTime()
	var end = new Date(Date.parse("2019-10-20 18:08:21".replace(/-/g, "/"))).getTime();
	var leftTime = end - now
	var day, hour, min, sec, ms;
	if (leftTime >= 0) {
		day = Math.floor(leftTime / 1000 / 60 / 60 / 24);
		hour = Math.floor(leftTime / 1000 / 60 / 60 % 24);
		hour = Math.floor(leftTime / 1000 / 60 / 60 % 24);
		min = Math.floor(leftTime / 1000 / 60 % 60);
		sec = Math.floor(leftTime / 1000 % 60);
		ms = Math.floor(leftTime % 1000);
		if (ms < 100) {
			ms = "0" + ms;
		}
		if (sec < 10) {
			sec = "0" + sec;
		}
		if (min < 10) {
			min = "0" + min;
		}
		if (hour < 10) {
			hour = "0" + hour;
		}
	} else {
		console.log('已截止')
	}
	document.getElementById('day').innerHTML = day;
	document.getElementById('hour').innerHTML = hour;
	document.getElementById('min').innerHTML = min;
	document.getElementById('sec').innerHTML = sec;
	document.getElementById('millisec').innerHTML = ms;
	setTimeout(countDown, 50);
});

//数量键
;$(function () {
	$(".jia").click(function(){
		var n=$(this).prev().html();
		var num=parseInt(n)+1;
		if(num==0){ return;}
		$(this).prev().html(num);
	});
	//减的效果
	$(".jian").click(function(){
		var n=$(this).next().html();
		var num=parseInt(n)-1;
		if(num==0){ return}
		$(this).next().html(num);
	});
});


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
				setTimeout(function () { $(_this).attr('src', $imgSrc); }, 1000);//把图片的src地址改成data-src的值（前面已经获取了）
			}
		})//end object 'img'
	})//end object window
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


//分页
;$(function() {
    tabPage({
        pageMain: '#pageMain',
        pageNav: '#pageNav',
        pagePrev: '#prev',
        pageNext: '#next',
        curNum: 4,
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
		console.log(pageMain.find("li").length);
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

// 滚动导航定位
;$(document).ready(function() {
    // Cache selectors for faster performance.
    var $window = $(window),
        $mainMenuBar = $('#mainMenuBar'),
        $mainMenuBarAnchor = $('#mainMenuBarAnchor');
    //alert($mainMenuBar.height());
    // Run this on scroll events.
    //scroll()
    //当用户滚动指定的元素时，会发生scroll事件。
    //scroll事件适用于所有可滚动的元素和window对象（浏览器窗口）
    //scroll()方法触发scroll事件，或规定当发生scroll事件时运行的函数
    $window.scroll(function() {
        //scrollTop()方法返回或设置匹配元素的滚动条的垂直位置
        var window_top = $window.scrollTop();
        //javascript用offsetTop();jquery用offset().top;
        var div_top = $mainMenuBarAnchor.offset().top;
        if (window_top > div_top) {
            // Make the div sticky.
            $mainMenuBar.addClass('stick');
            $mainMenuBarAnchor.height($mainMenuBar.height());
        } else {
            // Unstick the div.
            $mainMenuBar.removeClass('stick');
            $mainMenuBarAnchor.height(0);
        }
    });
});


;$(function () {
    // var len = 55;
    // $("#mainMenuBar li").each(function (i, el) {
    //     $(el).css({
    //         backgroundPosition: "0 " + (-len* i) + "px"
    //     });
    // });

    // $(window).scroll(function () {
    //     var os = $(document).scrollTop();
    //     if (os >= $(".jd-one").offset().top) {
    //         $("#mainMenuBar>ul>li").eq(0).addClass("active").siblings().removeClass("active");
    //     } else if (os >= $(".two").offset().top) {
    //         $("#mainMenuBar li").eq(1).addClass("active").siblings().removeClass("active");
    //     } else if (os >= $(".three").offset().top) {
    //         $("#mainMenuBar li").eq(2).addClass("active").siblings().removeClass("active");
    //     } else if (os >= $(".four").offset().top) {
    //         $("#mainMenuBar li").eq(3).addClass("active").siblings().removeClass("active");
    //     } else if (os > 0) {
    //         $("#mainMenuBar").fadeIn();
    //     } else {
    //         $("#mainMenuBar").fadeOut();
    //     }
    // }).trigger("scroll");

    $("#mainMenuBar li").click(function () {
        var index = $(this).index();
        $("html,body").animate({
            scrollTop: $(".jd").eq(index).offset().top
            
        }, 200);
         $(this).addClass("active").siblings().removeClass("active");
    });
   



}())

// 侧边栏
; (function () {
    $(".sidebar-back").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
         return false;
    });
}())