var h_hght = 50; // высота шапки
var h_mrg = 0;    // отступ когда шапка уже не видна

$(function(){

    var elem = $('nav');
    var top = $(this).scrollTop();
    var navWrapSticky =  $('.nav_wrapper');


    if(top >= h_hght){
        elem.css('top', h_mrg);
    }

    $(window).scroll(function(){
        top = $(this).scrollTop();

        if (top <= h_hght) {

            elem.removeClass( 'nav_sticky');
            navWrapSticky.removeClass( 'nav_wrap_sticky');
            elem.css('top', (h_hght-top));

        } else {

            elem.addClass( 'nav_sticky');
            navWrapSticky.addClass( 'nav_wrap_sticky');
            elem.css('top', h_mrg);
        }
    });
});


