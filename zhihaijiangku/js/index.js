$(function(){
                   var i=0;
                   var timer=null;
                    $('#perv').click(function(){
                        if(i==0){
                            i=3;
                        }else{
                            i--;
                        }
                        lbs(i);
                    });
                    $('#next').click(function(){
                        if(i==3){
                            i=0;
                        }else{
                            i++;
                        }
                        lbs(i);
                    });
                    $('.dd').children().mouseenter(function(){
                        clearInterval(timer);
                        var index=$(this).index();
                        i=index;
                        lbs(i);
                    });
                    function lbs(s){
                        $('.lunbo .img').children().eq(s).fadeIn(400).siblings('li').fadeOut(400);
                        $('.lunbo .dd').children().eq(s).addClass('current').siblings('li').removeClass('current');
                    }
                   timer=setInterval(lb,2000);
                    function lb(){
                        i++;
                        if(i==3){
                            i=0;
                        }
                        lbs(i);
                    }
                    $('.lunbo .img').mouseenter(function(){
                        clearInterval(timer);
                    });
                    $('.lunbo .img').mouseleave(function(){
                        timer=setInterval(lb,2000);
                    });




                

            });