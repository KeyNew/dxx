$(function(){
	
			$(".yt1 .container .row").animate({marginTop:0+"px"},1000);
			$(".business-details .row .business-details-top").animate({marginTop:0+"px"},1500);
			$(window).scroll(function(){
            var scrollTop = $(this).scrollTop();
            if(scrollTop>250){
                $(".container .row .a1").animate({top:0+"px"},1000);
                $(".container .row .a2").animate({top:0+"px"},1500);
                $(".container .row .a3").animate({top:0+"px"},1000);
            }
            if(scrollTop>350){
            	$(".container .row .a4").animate({top:0+"px"},1000);
            }
            if(scrollTop>750){
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