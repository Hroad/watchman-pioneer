$(document).ready(function(){
	//返回顶部加导航栏变大居顶
	$(window).scroll(function(){
		var sc=$(window).scrollTop();
		var rwidth=$(window).width()+$(document).scrollLeft();
		var rheight=$(window).height()+$(document).scrollTop();
		var nav=$(".container header div.collapse");
		if(sc>0){
			nav.addClass("nav_add");
			$("#back-to-top").css("display","block");
			$("#back-to-top").css("left",(rwidth-76)+"px");
			$("#back-to-top").css("top",(rheight-120)+"px");
		}else{
			nav.removeClass("nav_add");
			$("#back-to-top").css("display","none");
		}
	});
	$("#back-to-top").hover(
		function(){$(this).css("background-position","0px -51px");},
		function(){$(this).css("background-position","0px 0px");}
	);
	$("#back-to-top").click(function(){
		$('body,html').animate({scrollTop:0},1000);
	});
	//登录弹框
	var toggle=true;
	var login_box=$(".container #login_box");
	var nav_btn=$(".container header nav ul:nth-child(3) li:nth-child(2)");
	var nav_bg=$(".container #login_box_bg");
	var nav_btn_icon=$(".container header nav ul:nth-child(3) li .nav-icon");
	nav_btn.click(function(){
		if(toggle){
			login_box.show(500);
			nav_bg.css("display","block");
			nav_btn_icon.css("background-position","-147px -145px");
			toggle=false;
		}else{
			login_box.hide(500);
			nav_bg.css("display","none");
			nav_btn_icon.css("background-position","-147px -131px");
			toggle=true;
		}
	});
	nav_bg.click(function(){
		login_box.hide(500);
		nav_bg.css("display","none");
		nav_btn_icon.css("background-position","-147px -131px");
		toggle=true;
	});
	//二级菜单
	var nav_game=$(".container header>div>ul>li:nth-child(1)");
	var nav_game_er=$(".container header>span:nth-child(3)");
	var nav_game_icon=$(".container header>div>ul>li:nth-child(1)>.icon");
	var nav_play=$(".container header>div>ul>li:nth-child(3)");
	var nav_play_er=$(".container header>span:nth-child(4)");
	var nav_play_icon=$(".container header>div>ul>li:nth-child(3)>.icon");
	var game_toggle=true;
	var play_toggle=true;
	nav_game.click(function(){
		if(game_toggle){
			nav_play_er.css("display","none");
			nav_play.css("background-color","rgba(36,47,71,0.2)");
			nav_play_icon.css("transform","rotate(0deg)");
			nav_game_er.css("display","inline-block");
			nav_game.css("background-color","rgba(64,82,117,0.5)");
			nav_game_icon.css("transform","rotate(180deg)");
			play_toggle=true;
			game_toggle=false;
		}else{
			nav_game_er.css("display","none");
			nav_game.css("background-color","rgba(36,47,71,0.2)");
			nav_game_icon.css("transform","rotate(0deg)");
			game_toggle=true;
		}
	});
	nav_play.click(function(){
		if(play_toggle){
			nav_game_er.css("display","none");
			nav_game.css("background-color","rgba(36,47,71,0.2)");
			nav_game_icon.css("transform","rotate(0deg)");
			nav_play_er.css("display","inline-block");
			nav_play.css("background-color","rgba(64,82,117,0.5)");
			nav_play_icon.css("transform","rotate(180deg)");
			game_toggle=true;
			play_toggle=false;
		}else{
			nav_play_er.css("display","none");
			nav_play.css("background-color","rgba(36,47,71,0.2)");
			nav_play_icon.css("transform","rotate(0deg)");
			play_toggle=true;
		}
	});
});
	