$(function(){
     // 轮播图

    var key=0;
		var square=0;
		var timer=null;
		var timerout=null;
		var pm = innerWidth-17;
//		$(".carousel>ul>li").each(function(){
//			$("ol").append("<li></li>");
//		})
//		$("ol").children().eq(0).addClass("current");
////		$("ol").children().last().css("display","none");   这个和下一句都是删除方法
//		$("ol>li:last").remove();
//		$("ol>li").mouseover(function(){
//			$("ul").animate({left:-$(this).index()*1226+"px"},600);
//			$("ol>li").eq($(this).index()).addClass("current").siblings("ol>li").removeClass("current");
//			key=square=$(this).index();
//		})
		$(".banner_left").click(function(){
			key--;
			square--;
			if(square<0){
				square=$(".carousel ul>li").length-2;
				$(".carousel ul").css("left",-(square+1)*pm+"px");//这句是无缝，在点击的一瞬间完成换图，再由key和square的控制完成动画
//				key=$("ol>li").length-1;
			}
//			if(key<0){
//				key=$("ol>li").length-1;
//			}
			$(".carousel ul").animate({left:-square*pm+"px"},600);
//			$("ol>li").eq(key).addClass("current").siblings("ol>li").removeClass("current");
		})
		$(".banner_right").click(function(){
			key++;
			square++;
			if(square>$(".carousel ul>li").length-1){
				square=1;
				$(".carousel ul").css("left",-(square-1)*pm+"px");
				key=1;
			}
//			if(key>$("ol>li").length-1){
//				key=0;
//			}
			$(".carousel ul").animate({left:-square*pm+"px"},600);
//			$("ol>li").eq(key).addClass("current").siblings("ol>li").removeClass("current");
		})
		timer=setInterval(function(){
			$(".banner_right").click();
		},7000);
		$(".banner").mouseenter(function(){
			clearInterval(timer);
		})
		$(".banner").mouseleave(function(){
			timer=setInterval(function(){
				$(".banner_right").click();
			},7000);
		})
    



    $(".business .container ul li").mouseenter(function(){
        $(this).css("marginTop","-20px");
    });
    $(".business .container ul li").mouseleave(function(){
        $(this).css("marginTop","0px");
    });

    $(".business .container ul li").eq(0).animate({marginTop:0+"px"},600);
                $(".business .container ul li").eq(1).animate({marginTop:0+"px"},700);
                $(".business .container ul li").eq(2).animate({marginTop:0+"px"},800);
                $(".business .container ul li").eq(3).animate({marginTop:0+"px"},900);
    $(function(){
        $(window).scroll(function(){
            var scrollTop = $(this).scrollTop();
            if(scrollTop>180){
                $(".nav").addClass("xs");
            }else{
                $(".nav").removeClass("xs");
            }
            if(scrollTop>10){
                $(".business .container ul li").eq(0).animate({marginTop:0+"px"},600);
                $(".business .container ul li").eq(1).animate({marginTop:0+"px"},700);
                $(".business .container ul li").eq(2).animate({marginTop:0+"px"},800);
                $(".business .container ul li").eq(3).animate({marginTop:0+"px"},900);
            }
            if(scrollTop>300){
                $(".t .container .row").animate({marginTop:0+"px"},1000);
            }
            if(scrollTop>350){
                $(".n .container .row").animate({marginTop:0+"px"},2000);
            }
            if(scrollTop>550){
                $(".all_case .container .row").animate({marginTop:0+"px"},2000);
            }
            if(scrollTop>1050){
                $(".swiper_slide .store").animate({marginTop:0+"px"},2000);
                $(".swiper_slide .store .col_md1").animate({left:0+"px"},2000);
                $(".swiper_slide .store .col_md2").animate({right:60+"px"},2000);
            }
            if(scrollTop>1500){
                $(".swiper_store_pag .row").animate({marginTop:0+"px"},1000);
            }
            if(scrollTop>2000){
                $(".t1 .container .row").animate({marginTop:0+"px"},1000);
            }
            if(scrollTop>2300){
                $(".n1 .container .row").animate({marginTop:0+"px"},1000);
            }

            if(scrollTop>2300){
                $(".newsitem .col_md3").animate({left:0+"px"},1000);
                $(".newsitem .col_md4").animate({right:0+"px"},1000);
            }
            if(scrollTop>2500){
                $(".t2 .container .row").animate({marginTop:0+"px"},1000);
            }
            if(scrollTop>2800){
                $(".contact .col_md5").animate({left:0+"px"},1000);
                $(".contact .col_md6").animate({right:0+"px"},1000);
            }
            if(scrollTop>2800){
                $("footer .container .row").animate({marginTop:0+"px"},1000);
            }
        });
    });

    $(".case_nav ul li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
    $(".swiper_store_pag .container span").click(function(){
        $(this).addClass("clickk").siblings().removeClass("clickk");
    });


});