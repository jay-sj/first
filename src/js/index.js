(function(){
    $(function(){
		var zIndex = 1;
        $(".banner>ol>li").mouseenter(function(){
            zIndex++;
            var index = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(".banner>ul>li").eq(index).css({
                left:650,
                zIndex:zIndex
            }).stop().animate({
                left:0
            },500);
        });
        $(".banner>ul>li").eq(index).css({
            left:650,
            zIndex:zIndex
        }).stop().animate({
            left:0
        },500);
    });
    
}())