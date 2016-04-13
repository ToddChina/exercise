
jQuery(document).ready(function(){
	$(window).scrollLeft(280);
	$(".content-nav-list li").mouseenter(function(){
		$(this).css("cursor","pointer");
	}).click(function(){
		var onshow=$(this).text();
		$("#content-show-input input").val(onshow);
	})
	$(".content-last-nav li").mouseenter(function(){
		$(this).css("cursor","pointer");
	}).click(function(){
		$(this).css({"background-color":"#50bbdb","color":"#fff"}).siblings().css({"background-color":"#d6d6d6","color":"#000"})
	})
	$(".glyphicon-thumbs-up").mouseenter(function(){
		$(this).css("cursor","pointer");
	}).click(function(){
			var num=$(this).parent().find(".zero").text();
			if(num==0){
				$(this).parent().find(".zero").text(1);
			}else{
				$(this).parent().find(".zero").text(0);
			}			
	})	
	$(".dropdown").mouseenter(function(){
		$(this).css("cursor","pointer");
		$(this).find("span").css("color","#000").parent().siblings().find("span").css("color","#c9c9c9");
	}).mouseleave(function(){
		$(this).find("span").css("color","#c9c9c9");
		$(".onlyspan").css("color","#000");
	}).click(function(){
		var str=$(this).find("span").eq(0).text();
		if(str=="价格"){
			console.log(1);
		}
	})

})