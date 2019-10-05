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
			$(".prev").click(function(){
				index--;
				if( index == -1 ){
					index = len-1;
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
