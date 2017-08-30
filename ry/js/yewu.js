$(function(){

    $(".yt1 .container .row").animate({marginTop:0+"px"},1000);
    $(".yn1 .container .row").animate({marginTop:0+"px"},1500);
    $(".business_inside .c1").animate({left:0+"px"},2000);
    $(".business_inside .c2").animate({right:0+"px"},2000);
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
       if(scrollTop>250){
            $(".business_inside .c3").animate({left:0+"px"},1000);
            $(".business_inside .c4").animate({right:0+"px"},1000);
        }
        if(scrollTop>350){
            $(".below .below_item").eq(4).animate({left:0+"px"},1000);
            $(".below .below_item").eq(3).animate({left:0+"px"},1100);
            $(".below .below_item").eq(2).animate({left:0+"px"},1200);
            $(".below .below_item").eq(1).animate({left:0+"px"},1300);
            $(".below .below_item").eq(0).animate({left:0+"px"},1000);
            $(".below .below_addr").animate({right:0+"px"},1000);
            $("footer .container .r1").animate({marginTop:0+"px"},1000);
        }
    });

});