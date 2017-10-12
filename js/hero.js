$(document).ready(function(){
	//英雄分类导航
	$(".container #classify ul li").hover(
		function(){
			var li_index=$(this).index();
			$(this).css("background-color","#fff");
			$(this).children("img").attr("src","img/hero/nav0"+li_index+".png");
		},
		function(){
			var li_index=$(this).index();
			$(this).css("background-color","rgba(220,211,225,0.8)");
			$(this).children("img").attr("src","img/hero/nav"+li_index+".png");
		}
	);
	//点击分类
	$(".container #classify ul li").click(function(){
		var index_li=$(this).index();
		var clone_li = $(".container #hero ul li.nav"+index_li);
		clone_li.insertBefore($(".container #hero ul li").eq(0));
		$(".container #hero ul li a").css("border","2px solid #E2DBE9");
		$(".container #hero ul li").css("box-shadow","none");
		clone_li.children("a").css("border","2px solid #00C1FC");
		clone_li.css("box-shadow","0px 0px 10px #00C1FC");
	});
});
