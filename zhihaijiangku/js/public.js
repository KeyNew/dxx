$(function(){

    $('.nav ul li').each(function(){
        $(this).mouseover(function(){
            divs = $(this).children();
            divs.addClass('hover');
        });
        $(this).mouseout(function(){
            $(this).children().removeClass('hover'); 
             $(this).children()[0].addClass('hover');
        });
    });


})