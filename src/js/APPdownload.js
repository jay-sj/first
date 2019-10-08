
(function () {
    $(document).scroll(function () {
        if ($(document).scrollTop() > 170) {
            $(".app-top").css({
                top: 0
            });
        }else {
           
            $(".app-top").css({
                top: -85
            });
        }

    })
    $(document).trigger("scroll");
}())