/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-04-14 19:55:55
 * @version $Id$
 */

// 五星评论

(function ($) {
    "use strict";
    $.fn.BindStars = function () {
        var starElement = $(this);
        starElement.children("i").mouseleave(function () {
            starElement.find("i").each(function (index) {
                $(this).removeClass("inred");
            });
        });
        starElement.children("i").mouseenter(function () {
            var curIndex = starElement.find("i").index(this);
            starElement.find("i").each(function (index) {
                if (index <= curIndex) {
                    $(this).addClass("inred");
                }
                else {
                    $(this).removeClass("inred");
                }
            });
        });
        starElement.children("i").click(function () {
            var curIndex = starElement.find("i").index(this);
            starElement.find("i").each(function (index) {
                if (index <= curIndex) {
                    $(this).addClass("onred");
                }
                else {
                    $(this).removeClass("onred");
                }
            });
            starElement.attr("data-score", curIndex + 1);
        });
    };
    $.fn.SetStars = function (score) {
        var scoreStr = "";
        for (var i = 0; i < 5; i++) {
            if (i < score) {
                scoreStr += "<i class='onred'></i>";
            } else {
                scoreStr += "<i></i>";
            }
        }
        $(this).html(scoreStr);
    };
})(window.jQuery);