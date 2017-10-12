$(document).ready(function(){
	//背景图片切换
	var index=2;
	function marquee(){
		if(index==0){
			index=3;
		}
		var img_prv=$(".container #search_game .bg img:nth-child("+(index+1)+")");
		var img=$(".container #search_game .bg img:nth-child("+index+")");
		var img_next=$(".container #search_game .bg img:nth-child("+(index-1)+")");
		img_prv.animate({
			opacity:0
		},2000)
		img_next.css("opacity","0");
		img.animate({
			opacity:1
		},2000)
		index--;
	}
	setInterval(marquee,5000);
	//英雄展示切换
	$(".container #pic_tabs ul li").mouseover(function(){
		var people_name=$(this).children("a").children("span").text();
		var title=$(this).children("a").children("img").attr("alt");
		var index=$(this).index()+1;
		var name=$(".container #people .title p:nth-child(1)");
		var til=$(".container #people .title p:nth-child(2)");
		var img=$(".container #people .pic img");
		name.text(people_name);
		til.text(title);
		img.attr("src","img/header/p"+index+".png");
	});
});

