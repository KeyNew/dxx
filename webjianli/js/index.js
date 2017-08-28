$(function(){ 
	$(".a1 .box2 .box2_1").animate({left:800+'px'},600);
	$(".a1 p").animate({marginTop:0+'px'},1000);
    $(window).scroll(function(){
    	var scrollTop = $(this).scrollTop();
    	if(scrollTop>1970){
    		$(".a3 .a3_1 .d1").animate({top:0+'px'},2000);
    		$(".a3  .a3_1 .d2").animate({top:0+'px'},2000);
    		$(".a3  .a3_1 .d3").animate({top:0+'px'},2400);
    		$(".a3  .a3_1 .d4").animate({top:0+'px'},2400);
    	}
    });
    
   
});