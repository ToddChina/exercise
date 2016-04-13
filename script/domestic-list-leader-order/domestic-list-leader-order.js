
jQuery(document).ready(function(){
	$(window).scrollLeft(280);
	$(".content-nav-list li").mouseenter(function(){
		$(this).css("cursor","pointer");
	}).click(function(){
		var onshow=$(this).text();
		$("#content-show-input input").val(onshow);
	})
	$(".number").mouseenter(function(){
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
	})
	$("#next").mouseenter(function(){
		$(this).css("cursor","pointer");
	})
	$("#prev").mouseenter(function(){
		$(this).css("cursor","pointer");
	})
	$(".number").click(function(){
		var n=$(this).index();
		$("#next").click(function(){
			$(".content-last-nav li").eq(n).next().css({"background-color":"#50bbdb","color":"#fff"})
			.siblings().css({"background-color":"#d6d6d6","color":"#000"});
			if(n<8){
				n++;
			}	
			if(n==4){
				var distance=n*-49;	
				$(".content-last-nav").css("margin-left",distance);
			}else if(n==8){
				var distance=n*-49;
				$(".content-last-nav").css("margin-left",distance);
			}
		})
	})

	var i=0;
	$("#next").click(function(){
		$(".content-last-nav li").eq(i).next().css({"background-color":"#50bbdb","color":"#fff"})
		.siblings().css({"background-color":"#d6d6d6","color":"#000"});
		if(i<8){
			i++;
		}	
		if(i==4){
			var distance=i*-49;	
			$(".content-last-nav").css("margin-left",distance);
		}else if(i==8){
			var distance=i*-49;
			$(".content-last-nav").css("margin-left",distance);
		}	
		
	})


	// $(".number").click(function(){
	// 	var n=$(this).index();
	// 	$("#prev").click(function(){
	// 	// if(n>5){
	// 	// 	n++;
	// 	// }		
	// 	// var distance=n*49;	
	// 	$(".content-last-nav li").eq(n-1).css({"background-color":"#50bbdb","color":"#fff"}).siblings
	// 	().css({"background-color":"#d6d6d6","color":"#000"})
	// 	// $(".content-last-nav").css("margin-left",distance);
	// 	})
	// })
	// $("#prev").click(function(){
	// 	// if(i<8){
	// 	// 	i++;
	// 	// }		
	// 	// var distance=i*-49;	
	// 	$(".content-last-nav li").eq(i-1).css({"background-color":"#50bbdb","color":"#fff"})
	// 	// $(".content-last-nav").css("margin-left",distance);
	// })

})