;
console.log(111)
$(".top .img span").click(function() {
	$(".top").hide()
});
$(document).ready(function() {
	var slideBox = $(".slideBox");
	var ul = slideBox.find("ul");
	var oneWidth = slideBox.find("ul li").eq(0).width();
	var number = slideBox.find(".spanBox span"); //注意分号 和逗号的用法
	var timer = null;
	var sw = 0;
	//每个span绑定click事件，完成切换颜色和动画，以及读取参数值
	number.on("click", function() {
		$(this).addClass("active").siblings("span").removeClass("active");
		sw = $(this).index();
		ul.animate({
			"right": oneWidth * sw, //ul标签的动画为向左移动；
		});
	});
	//左右按钮的控制效果
	$(".next").stop(true, true).click(function() {
		sw++;
		if(sw == number.length) {
			sw = 0
		};
		number.eq(sw).trigger("click");
	});
	$(".prev").stop(true, true).click(function() {
		sw--;
		if(sw == number.length) {
			sw = 0
		};
		number.eq(sw).trigger("click");
	});
	//定时器的使用，自动开始
	timer = setInterval(function() {
		sw++;
		if(sw == number.length) {
			sw = 0
		};
		number.eq(sw).trigger("click");
	}, 3000);
	//hover事件完成悬停和，左右图标的动画效果
	slideBox.hover(function() {
		$(".next,.prev").animate({
			"opacity": 1,
		}, 200);
		clearInterval(timer);
	}, function() {
		$(".next,.prev").animate({
			"opacity": 0.5,
		}, 500);
		timer = setInterval(function() {
			sw++;
			if(sw == number.length) {
				sw = 0
			};
			number.eq(sw).trigger("click");
		}, 3000);
	})

})
/*jdms轮播图的左右键*/
/*左*/
var s = 0
$(".left1").click(function () {
	s += 800
	$(".jdms-lbt-box").animate({"left":s+"px"},2000)
})
$(".right1").click(function () {
	s -= 800
	$(".jdms-lbt-box").animate({"left":s+"px"},2000)
})

/*苹果轮播图*/
$(".jdms-lbt-box figure").each(function () {
	$(this).hover(function () {
		$(this).css("color","red")
	},function () {
		$(this).css("color","black")
	})
})

/*商品切换*/


    $(".phb-sp-txt div").mouseenter(function(){
       var index = $(this).index();
       $(this).addClass("redd").siblings().removeClass("redd");
       $(".phb-sp-img div").eq(index).addClass("active1").siblings().removeClass("active1");
     });

