$(document).ready(function(){
	//复选框特效
	$(".container #select>div>input").wrap('<div class="check-box"><i></i></div>');
	$.fn.toggleCheckbox=function(){
	    this.attr("checked", !this.attr("checked"));
	}
	$(".check-box").on("click", function(){
	    $(this).find(":checkbox").toggleCheckbox();
	    $(this).toggleClass("checkedBox");
	});
	//返回顶部
	$(window).scroll(function(){
		var sc=$(window).scrollTop();
		var rwidth=$(window).width()+$(document).scrollLeft();
		var rheight=$(window).height()+$(document).scrollTop();
		if(sc>0){
			$("#back-to-top").css("display","block");
			$("#back-to-top").css("left",(rwidth-76)+"px");
			$("#back-to-top").css("top",(rheight-120)+"px");
		}else{
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
	//选中显示特效
	var checkbox1=$(".container #select>div#checkbox1>div.check-box");
	var checkbox2=$(".container #select>div#checkbox2>div.check-box");
	var game_content=$(".container #content #game-content");
	var key_content=$(".container #content #key-content");
	checkbox1.click(function(){
		var check1=$(this).children(0).children(0).attr("checked");
		var check2=checkbox2.children(0).children(0).attr("checked");
		if(check1=="checked"&&check2!="checked"){
			game_content.css("display","block");
			key_content.css("display","none");
		}else if(check1=="checked"&&check2=="checked"){
			game_content.css("display","block");
		}else if(check1!="checked"&&check2!="checked"){
			key_content.css("display","block");
		}else if(check1!="checked"&&check2=="checked"){
			game_content.css("display","none");
		}
	});
	checkbox2.click(function(){
		var check1=checkbox1.children(0).children(0).attr("checked");
		var check2=$(this).children(0).children(0).attr("checked");
		if(check2=="checked"&&check1!="checked"){
			key_content.css("display","block");
			game_content.css("display","none");
		}else if(check2=="checked"&&check1=="checked"){
			key_content.css("display","block");
		}else if(check2!="checked"&&check1!="checked"){
			game_content.css("display","block");
		}else if(check2!="checked"&&check1=="checked"){
			key_content.css("display","none");
		}
	});
});