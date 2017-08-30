$(function(){

    $(".business .container ul li").mouseenter(function(){
        $(this).css("marginTop","-20px");
    });
    $(".business .container ul li").mouseleave(function(){
        $(this).css("marginTop","0px");
    });

	var scrollTop = $(this).scrollTop();
    if(scrollTop>=0){
        $(".main-left").animate({"marginLeft":"0px","opacity":"1"},1000);
        $(".main-right").animate({"marginRight":"0px","opacity":"1"},1000);
    }
	if(scrollTop>=0){
        $(".title").animate({"marginTop":"0px","opacity":"1"},1000);
    }
	
    $(".business .container ul li").eq(0).animate({marginTop:0+"px"},600);
                $(".business .container ul li").eq(1).animate({marginTop:0+"px"},700);
                $(".business .container ul li").eq(2).animate({marginTop:0+"px"},800);
                $(".business .container ul li").eq(3).animate({marginTop:0+"px"},900);
                
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop>180){
            $(".nav").addClass("xs");
        }else{
            $(".nav").removeClass("xs");
        }
         if(scrollTop>=300){
           		$(".agency>ul>li:eq(0)").animate({"marginTop":"0px","opacity":"1"},1000);
           		$(".agency >ul >li:eq(1)").animate({"marginTop":"0px","opacity":"1"},1500);
           		$(".agency >ul >li:eq(2)").animate({"marginTop":"0px","opacity":"1"},2000);
           		$(".agency >ul >li:eq(3)").animate({"marginTop":"0px","opacity":"1"},2500);
		}
         if(scrollTop>=840){
           		$(".co-left").animate({"marginLeft":"0px","opacity":"1"},1000);
           		$(".co-left ul:eq(0)").animate({"margin":"0px","opacity":"1"},1000);
           		$(".co-left ul:gt(0)").animate({"marginLeft":"70px","marginRight":"0px","opacity":"1"},1000);
           		$(".co-right").animate({"marginRight":"0px","opacity":"1"},1000);
		    }
        if(scrollTop>=890){
        	$("footer .container .row").animate({"marginTop":"0px"},1500);
        	
		}
        
    });

    $(".case_nav ul li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
    $(".swiper_store_pag .container span").click(function(){
        $(this).addClass("clickk").siblings().removeClass("clickk");
    });


});