<?php
    header("Content-Type: text/html; charset=utf8");
    if(!isset($_POST["_submit"])){
        exit("错误执行");
    }//检测是否有submit操作 

    include('loginconnect.php');//链接数据库
    $username = $_POST['username'];//post获得用户名表单值
    $password = $_POST['password'];//post获得用户密码单值
    if ($username && $password){//如果用户名和密码都不为空
             $sql = "select * from logindata where username = '".$username."' and password = '".$password."'";//检测数据库是否有对应的username和password的sql
             
             $result = mysql_query($sql);//执行sql
             
             $test=mysql_fetch_array($result);
             $rows=mysql_num_rows($result);//返回一个数值
//           echo "<script>console.log(". $test.")</script>";
             if($test){          	
             		echo "<script>
             			     setTimeout(function(){window.location.href='index.html';},800);
                         </script>";//成功输出注册成功
             }else{
                echo '<script>alert("用户名或密码错误");</script>';
                echo "
                  <script>
                          setTimeout(function(){window.location.href='Login.html';},1000);
                  </script>";//如果错误使用js 1秒后跳转到登录页面重试;
               }
             

    }else{//如果用户名或密码有空
              echo '<script>alert("表单填写不完整");</script>';
              echo "
                    <script>
                          setTimeout(function(){window.location.href='Login.html';},1000);
                    </script>";

                      //如果错误使用js 1秒后跳转到登录页面重试;
    }
  
    mysql_close();//关闭数据库
?>