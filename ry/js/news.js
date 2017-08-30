$(function(){
     

    $(".business .container ul li").mouseenter(function(){
        $(this).css("marginTop","-20px");
    });
    $(".business .container ul li").mouseleave(function(){
        $(this).css("marginTop","0px");
    });
    
    
	var scrollTop = $(this).scrollTop();
    if(scrollTop>=0){
        $(".news-nav").animate({"marginTop":"60px","opacity":"1"},1000);
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
           if(scrollTop>=150){
           		$(".news-main>ul>.first-li>ul>li:eq(0)>.right").animate({"marginRight":"0px","opacity":"1"},1000);
		        $(".news-main>ul>.first-li>ul>li:eq(0)>.left").animate({"marginLeft":"0px","opacity":"1"},1000);
		    }
           if(scrollTop>=450){
           		$(".news-main>ul>.first-li>ul>li:eq(1)>.right").animate({"marginRight":"0px","opacity":"1"},1000);
		        $(".news-main>ul>.first-li>ul>li:eq(1)>.left").animate({"marginLeft":"0px","opacity":"1"},1000);
		    }
           if(scrollTop>=650){
           		$(".co-left").animate({"marginLeft":"0px","opacity":"1"},1000);
           		$(".co-left ul:eq(0)").animate({"margin":"0px","opacity":"1"},1000);
           		$(".co-left ul:gt(0)").animate({"marginLeft":"70px","marginRight":"0px","opacity":"1"},1000);
           		$(".co-right").animate({"marginRight":"0px","opacity":"1"},1000);
		    }
            if(scrollTop>820){
                $("footer .container .row").animate({"marginTop":"0px"},1000);
            }
        });

    $(".case_nav ul li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
    $(".swiper_store_pag .container span").click(function(){
        $(this).addClass("clickk").siblings().removeClass("clickk");
    });

	$(".news-main>ul>li>ul>li").animate({"marginRight":"0","opacity":"1"},1000);
	
    $(".news-nav li").click(function(){
        $(this).addClass("nav-current").siblings("li").removeClass("nav-current");
        console.log($(this).text())
        console.log($(this).index())
        console.log(-1200*$(this).index()+"px");
        $(".news-main>ul").animate({"marginLeft":-1200*$(this).index()+"px"},500);
    });
});