// fixed navbar
$(document).ready(function() {
    var num = 0;
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > num) {
            $('.navbar').addClass('fixed-nav');
        } else {
            $('.navbar').removeClass('fixed-nav');
        }
    })
})