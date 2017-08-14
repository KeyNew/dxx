$(function(){

      $('#zc').click(function(){
         $('.register').css('display','block');
         $('.login').css('display','none');
      });

      $('#dl').click(function(){
         $('.register').css('display','none');
         $('.login').css('display','block');
      });

        

     $("#login").click(function(){
        var pwd = $("#password").val();
        var name = $("#username").val();
        if(name == "admin" && pwd == "123" ){
            alert("登录成功!");
        }else if(name == " " || name == null ){
           $('#ts').innerHTML="用户名不能为空";
           return false;
        }else if(pwd == " " || pwd == null ){
           $('#ts').innerHTML="密码不能为空";
           return false;
        }else{ 
          $('#ts').innerHTML="密码输入错误！请重新输入";
          return true;
        } 
      });


     $("#create").click(function(){
           if(!checkname()){
                return false;
            }else if(!checkpass()) {
                return false;
            }else{
               return true;
            }

        });

         var ts= document.getElementById("ts");
           function checkname()    
            {
          var name = $("#rusername").value;    
          if(name.length<3|| name.length>11)    
            {   
            ts.innerHTML ="请输入正确的手机号码!";    
            }else if(name == " " || name==null){
            ts.innerHTML ="请输入手机号码!";
            }
          }

         function checkpass(){
             var userPass = $("#rpassword").val(); 
           if(userPass.length<6 || userPass.length >15)  
            {   
               ts.innerHTML ="密码长度须在6-15之间!";
             }else if(userPass == " " || userPass==null){
                  ts.innerHTML ="请输入密码!";
            }
    
          }

      /*   // 提交登录信息
     $("#login").click(function(){
        $.ajax({
          // 请求发送方式
              type: 'post',
          // 验证文件
              url: 'login.php',
          // 用户输入的帐号密码
              data: {'username': $("#username").val(), 'password': $("#password").val()},
          // 异步
              async: true,
          //请求成功后的回调
              success: function(data){
                  if (data){
                      alert('登录成功')
                  }else{
                      alert('帐号或密码错误');
                  }
              },
              error: function(){
                  alert('服务端异常');
              } 
        });*/


})