$(document).ready(function(){


    $(".box-midrg li").click(function(){ 
            $(this).css("background-color","#50bbdb");
            $(this).siblings().css("background-color","");
    })

    $(".contain li").click(function(){ 
            $(this).css("background-color","#50bbdb");
            $(this).siblings().css("background-color","");
    })



    $(".li-2").click(function(){
        if(img2.src=="images/img-wangcanhui/sanjiao-down.jpg"){
        img2.src="images/img-wangcanhui/sanjiao-up.jpg";
        }
        else{
          img2.src="images/img-wangcanhui/sanjiao-up.jpg";
         }
        // $(".pic-li2").attr("src","images/img-wangcanhui/sanjiao-up.jpg")
    })
  //    $(".li-3").click(function(){
  //       $(".pic-li3").attr("src","images/img-wangcanhui/sanjiao-up.jpg")
  //   })
  //     $(".li-4").click(function(){
  //       $(".pic-li4").attr("src","images/img-wangcanhui/sanjiao-up.jpg")
  //   })



    $(".li-7 img").mouseenter(function(){
        $(this).css("cursor","pointer")
    })
    
    $(".add img").click(function(){
        var num1=$(".num1").text();
        var num= Number(num1);
        if(num<4){ 
            num=num+1;
               $(".num1").text(num);}
    })

    $(".reduce img").click(function(){
        var num1=$(".num1").text();
        var num= Number(num1);
          if(num>1){
            num=num-1;
            $(".num1").text(num);
          }
    })




// 城市切换
  $(".city li").mouseenter(function(){
    $(this).css({"cursor":"pointer","background-color":"#50b8d8","color":"#fff"}).siblings().css({"background-color":"","color":""});
  }).click(function(){
    var str =$(this).text();
    $(".nav-list-1 .list-2 #p1").text(str);
  })

  //点赞
  $(".glyphicon-thumbs-up").mouseenter(function(){
        $(this).css("cursor","pointer")
        }).click(function(){
          if($(this).text()==0){
            $(this).css("color","#f00") 
            $(this).text(1);
          }
          else{
            $(this).css("color","")
            $(this).text(0); 
          }
        
   })
})





























