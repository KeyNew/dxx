$(function(){
                   var i=0;
                   var timer=null;
                    $('.banner').children().mouseenter(function(){
                        clearInterval(timer);
                        var index=$(this).index();
                        i=index;
                        lbs(i);
                    });
                    function lbs(s){
                        $('.img').children().eq(s).fadeIn(400).siblings('li').fadeOut(400);
                       //$('.img').children().eq(s).show().siblings('li').hide();
                        $('.banner').children().eq(s).addClass('current').siblings('a').removeClass('current');
                    }
                   timer=setInterval(lb,2000);
                    function lb(){
                        i++;
                        if(i==10){
                            i=0;
                        }
                        lbs(i);
                    }
                    $('.img').mouseenter(function(){
                        clearInterval(timer);
                    });
                    $('.img').mouseleave(function(){
                        timer=setInterval(lb,2000);
                    });

    
     $('.turn_perx').click(function(){
        var l=parseInt($('.firstMvList').css('left'));
        if(l==-1470){
            $('.firstMvList').animate({left:0},400);
            $('.turn_perx').css('display','none');
            $('.turn_next').css('display','block');
        }
    });
    $('.turn_next').click(function(){
        var l=parseInt($('.firstMvList').css('left'));
        if(l==0){
            $('.firstMvList').animate({left:-1470},400);
            $('.turn_perx').css('display','block');
            $('.turn_next').css('display','none');
        }
    });

     var j=0;
     var timers=null;
     $('.mv-perv').click(function(){
                        if(j==0){
                           j=1;
                        }else{
                            j--;
                        }
                        lb(j)
                    });
        $('.mv-next').click(function(){
                        if(j==1){
                            j=0;
                        }else{
                            j++;
                        }
                      lb(j)
                    });
        function lb(s){
                       $('.slider').children().eq(s).show().siblings('li').hide();                  
                    }
         timers=setInterval(lbb,5000);
                    function lbb(){
                        j++;
                        if(j==2){
                            j=0;
                        }
                        lb(j);
                    }

    $('.tlties li').each(function(index){
        $(this).click(function(){
           var divs = $(this).children();
            $(this).siblings('li').children().removeClass('cur');
            divs.addClass('cur');
            $(".s"+(index+1)+"").css('display','block').siblings('.firstMvList').css('display','none');
        });

    });

     $('.titless li').each(function(index){
        $(this).click(function(){
           var divs = $(this).children();
            $(this).siblings('li').children().removeClass('cur');
            divs.addClass('cur');
            $(".h"+(index+1)+"").css('display','block').siblings('.entertainList').css('display','none');
        });
    });








  
     });
