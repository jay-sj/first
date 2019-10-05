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
        $(function () {
            // 获取window的引用:
            var $window = $(window);
            // 获取包含data-src属性的img，并以jQuery对象存入数组:
            var lazyImgs = $.map($('img[data-src]').get(), function (i) {
                return $(i);
            });
            // 定义事件函数:
            var onScroll = function () {
                // 获取页面滚动的高度:  scrollTop()获取匹配元素相对滚动条顶部的偏移。
                var wtop = $window.scrollTop();//页面滚动的高度就是窗口顶部与文档顶部之间的距离，也就是滚动条滚动的距离
                // 判断是否还有未加载的img:
                if (lazyImgs.length > 0) {
                    // 获取可视区域高度:
                    var wheight = $window.height();
                    // 存放待删除的索引:
                    var loadedIndex = [];
                    // 循环处理数组的每个img元素:
                    $.each(lazyImgs, function ($i, index) {
                        // 判断是否在可视范围内:
                        if ($i.offset().top - wtop < wheight) {  //$.offset().top获取匹配元素距离文本文档顶的距离。
                            // 设置src属性:
                            $i.attr('src', $i.attr('data-src'));
                            // 添加到待删除数组:
                            loadedIndex.unshift(index);//从大到小排序，保证下边删除操作能顺利进行
                        }
                    });
                    // 删除已处理的对象:
                    $.each(loadedIndex, function (index) {
                        lazyImgs.splice(index, 1);
                    });
                }
            };
            // 绑定事件:
            $window.scroll(onScroll);
            // 手动触发一次:
            onScroll();
        })
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