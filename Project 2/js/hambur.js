$(document).ready(function () {
    $("#clickhambur").click(function () {
        $(".nav-responsive").animate({
            right: 0
        }, 300)
        $("body").append("<div class='click-back'></div>")
        $(".click-back").click(function () {
            $(".nav-responsive").animate({
                right: "-1000px"
            }, 200);
            $(this).remove();
        })
    })

})