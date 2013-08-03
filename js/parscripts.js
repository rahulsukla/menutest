jQuery(document).ready(function ($) {


    $(window).stellar();

    var slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
 

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }
});