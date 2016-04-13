   $(function () {
        var initDiv = function () {
            $(".box-midrg li").css("background", "");
            $(".box-midrg li").mouseover(function () {
                $(this).css("background", "#50bbdb");
            })
                .mouseout(function () {
                    $(this).css("background", "");
                })
        };
        initDiv();
        $(".box-midrg li")
            .click(function () {
                initDiv();
                $(this).css("background", "#50bbdb");
                $(this).unbind("mouseout");
                $(this).unbind("mouseover");
            });
    })



 //   	var zan = function(){
 //   		$(".zan img").click.function(
 //   			)
 //   	}
 //    <input type="submit" value="点我增加数字" 
 //    onclick="document.getElementById('count').innerHTML++">
	// <span id="count">1</span>

