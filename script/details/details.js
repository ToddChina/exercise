/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-04-14 09:23:44
 * @version $Id$
 */

$("#btn-cut-1").click(function(){
	var textNum = Number($("#text-num-1").val());
	if(textNum > 1){
		var num = textNum-1;
		$("#text-num-1").val(num);
	};
});
$("#btn-add-1").click(function(){
	var textNum = Number($("#text-num-1").val());
	if(textNum >= 1){
		var num = textNum+1;
		$("#text-num-1").val(num);
		console.log(num)
	};
});

$("#btn-cut-2").click(function(){
	var textNum = Number($("#text-num-2").val());
	if(textNum > 0){
		var num = textNum-1;
		$("#text-num-2").val(num);
	};
});
$("#btn-add-2").click(function(){
	var textNum = Number($("#text-num-2").val());
	if(textNum >= 0){
		var num = textNum+1;
		$("#text-num-2").val(num);
	};
});


// 头部热点地址切换

		var myBtn = document.getElementById("cityChoice");
		var myDiv = document.getElementById("city-add-box")

		document.body.onclick = function(e){
			e = e || window.event;
			var target = e.target || e.srcElement;
			if (target != myBtn) {
				myDiv.style.display = "none";
			};
		}

	$("#cityChoice").click(function(){
		$("#city-add-box").toggle();
	})

	$("#city-list-1").find("li").click(function(){
		var city = $(this).text();
		$("#top .nav-list-1 .list-2 a").text(city);
	});

// 头部QQ和SINA头像

$("#qq-png").mouseover(function(){
	var src = "images/qq-1.png"
	$("#qq-png").attr("src",src);
});
$("#qq-png").mouseout(function(){
	var src = "images/nav-qq.png"
	$("#qq-png").attr("src",src);
});

$("#sina-png").mouseover(function(){
	var src = "images/sina-1.png"
	$("#sina-png").attr("src",src);
});
$("#sina-png").mouseout(function(){
	var src = "images/nav-sina.png"
	$("#sina-png").attr("src",src);
});





// 轮播图中间位置
	var num = 0;
$("#history-btn-left").click(function(){
	var numLeft = num + -240;
	$("#history-view").animate({"margin-left": numLeft},500);
		num = num + -240;
		// num = num == 8 ? 0 : num;
		console.log(num)
});
	// var num = 0;
$("#history-btn-right").click(function(){
	var numRight = num + 240;
	$("#history-view").animate({"margin-left": numRight},500);
		num = num + 240;
		// num = num == 8 ? 0 : num;
});



// 五星评价
$("#comment-star .set-star").mouseenter(function(){
	var src = "images/details/star.png";
	var srck = "images/details/star-k.png";
	var starComment = $(this).index()+1;
	// var oStar = document.getElementsByClassName("set-star");
	// var oImg = oStar.children("img");
	// 	for(var i=0;i<oStar.length;i++){
	// 		var oStar1 = [i];
	// 	console.log(oImg)

	// 	}
		if(starComment==1){
			$("#comment-star .star1").find("img").attr("src",src);
			$("#comment-star .star2").find("img").attr("src",srck);
			$("#comment-star .star3").find("img").attr("src",srck);
			$("#comment-star .star4").find("img").attr("src",srck);
			$("#comment-star .star5").find("img").attr("src",srck);
		}else if(starComment==2){
			$("#comment-star .star1").find("img").attr("src",src);
			$("#comment-star .star2").find("img").attr("src",src);
			$("#comment-star .star3").find("img").attr("src",srck);
			$("#comment-star .star4").find("img").attr("src",srck);
			$("#comment-star .star5").find("img").attr("src",srck);
		}else if(starComment==3){
			$("#comment-star .star1").find("img").attr("src",src);
			$("#comment-star .star2").find("img").attr("src",src);
			$("#comment-star .star3").find("img").attr("src",src);
			$("#comment-star .star4").find("img").attr("src",srck);
			$("#comment-star .star5").find("img").attr("src",srck);
		}else if(starComment==4){
			// starComment=$("#comment-star .star1").find("img").attr("src",src);
			// console.log()
			$("#comment-star .star1").find("img").attr("src",src);
			$("#comment-star .star2").find("img").attr("src",src);
			$("#comment-star .star3").find("img").attr("src",src);
			$("#comment-star .star4").find("img").attr("src",src);
			$("#comment-star .star5").find("img").attr("src",srck);
		}else if(starComment==5){
			$("#comment-star .star1").find("img").attr("src",src);
			$("#comment-star .star2").find("img").attr("src",src);
			$("#comment-star .star3").find("img").attr("src",src);
			$("#comment-star .star4").find("img").attr("src",src);
			$("#comment-star .star5").find("img").attr("src",src);
		}
});


