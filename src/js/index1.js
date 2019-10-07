(function () {
    $(function () {
        var index = 0;
        var len = $(".banner>ol>li").length;
        var timer = null;

        $(".banner>ol>li").mouseenter(function () {
            // 获取下标
            index = $(this).index();
            change(index);
        });
        // 点击下一张
        $(".next").click(function () {
            index++;
            index %= len;
            change(index);
        });
        // 点击上一张
        $(".prev").click(function () {
            index--;
            if (index == -1) {
                index = len - 1;
            }
            change(index);
        });
        // 定时器
        timer = setInterval(function () {
            index++;
            index %= len;
            change(index);
        }, 2000);
        $(".banner").hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(function () {
                index++;
                index %= len;
                change(index);
            }, 2000);
        });
    })

    function change(index) {
        $(".banner>ol>li").eq(index).addClass('active').siblings().removeClass('active');
        $(".banner>ul>li").eq(index).stop().fadeIn().siblings().stop().fadeOut();
    }
}())
    ; (function () {
        $(document).scroll(function () {
            if ($(document).scrollTop() > 170) {
                $(".beibei-top")[0].style.display = "block";
            } else {
                $(".beibei-top")[0].style.display = "none";
            }
        })
        $(document).trigger("scroll");
    }())
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
    ;(function(){
        var div1 = document.querySelectorAll(".main-r-list>div");
        var div2 = document.querySelectorAll(".main-r-con>div");
        for(var i=0;i<div1.length;i++){
            div1[i].index = i;
            div1[i].onmouseover = function(){
                for(var j =0;j<div1.length;j++){
                    div1[j].className="";
                    div2[j].style.display="none";
                }
                this.className="active-1";
                div2[this.index].style.display="block";
            }
        }
    }())