$(document).ready(function(){
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
	//图片轮播
	var ul=$("#pic_wrap #banner");
	var index=1;//初始位置为1，8张图：0,1,2,3,4,5,6,7,
	var roundAll=$("#pic_wrap #round li");
	$("#pic_wrap #round li:nth-of-type(1)").css("background-color","orangered");//初始第一个变色
	function Left_marquee(){//向左滚动
		roundAll.css("background-color","rgba(230,230,230,0.5)");
		if(index==7){//如果到5，瞬间返回到0
			ul.animate({
   				left:"0px"
   			},0);
   			index=0;
		}
		ul.animate({//每次向左移动一张
			left:"-=1287px"
		},1000);
		index++;
		$("#pic_wrap #round li:nth-of-type("+index+")").css("background-color","orangered");
	};
	function Right_marquee(){//向右滚动
		roundAll.css("background-color","rgba(230,230,230,0.5)");
		if(index==0){
			ul.animate({
   				left:"-=9009px"
   			},0);
   			index=7;
		}
		ul.animate({
			left:"+=1287px"
		},1000);
		index--;
		if(index==0){
			$("#pic_wrap #round li:nth-of-type(7)").css("background-color","orangered");
		}else{
			$("#pic_wrap #round li:nth-of-type("+index+")").css("background-color","orangered");
		}
	};
	//载入后执行
	var timer_left,timer_right;
	timer_left = setInterval(Left_marquee,4000); 
	//按钮
	$("#pic_wrap").mouseover(function(){
		$("#pic_wrap button").css("display","block");
	});
	$("#pic_wrap").mouseout(function(){
		$("#pic_wrap button").css("display","none");
	});
	//左按钮控制向右滚动
	$("#left").stop().click(function(){
		clearInterval(timer_right);
		clearInterval(timer_left);
		Right_marquee();
		timer_right = setInterval(Right_marquee,4000);			
	});
	//右按钮控制向左滚动
	$("#right").stop().click(function(){
		clearInterval(timer_left);
		clearInterval(timer_right);
		Left_marquee();	
		timer_left = setInterval(Left_marquee,4000);	
	});
	//小圆点
	$("#pic_wrap #round li").stop().click(function(){
		var i=$(this).index()+1;
		index=i;
		roundAll.css("background-color","rgba(230,230,230,0.5)");
		ul.animate({
			left:-1287*i
		},500);
		$("#pic_wrap #round li:nth-of-type("+index+")").css("background-color","orangered");
		clearInterval(timer_left);
		clearInterval(timer_right);
		timer_left = setInterval(Left_marquee,4000);
	});
});
