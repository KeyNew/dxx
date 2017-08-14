$(function(){

    var ha = ($('#v-paly').offset().top + $('#v-paly').height());
      $(window).scroll(function(){
       if($(window).scrollTop() > ha +500){
          $('#v').css({'bottom':'0','right':"0"});
       }else if($(window).scrollTop() < ha + 200){
         $('#v').removeClass('out').addClass('in');
       }else{
         $('#v').removeClass('in').addClass('out');
       }
      });
})