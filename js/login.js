$(document).ready(function(){
	//随机0-9 a-z A-Z验证码和背景
	function Rand(){
		var code="";
		var data=["1","2","3","4","5","6","7","8","9","0","a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L","m","M","n","N","o","O","p","P","q","Q","r","R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z"];
		var code_bg=["0px 0px","0px -250px","-300px 0px","-300px -250px"];
		var bg_index=parseInt(Math.random()*4);//[0,4)
		for(var i=1;i<=4;i++){
			var index = parseInt(Math.random()*62);//[0,62)
			code+=data[index];
		}
		$(".container #form_box form div#code").text(code);
		$(".container #form_box form div#code").val(code);
		$(".container #form_box form div#code").css("background-position",code_bg[bg_index]);
	}
	Rand();
	$(".container #form_box form div#code").click(function(){
		Rand();
	});
	//登录判断
	$(".container #form_box form input:nth-child(5)").click(function(){
		var name=$(".container #form_box form input:nth-child(1)");
		var passwd=$(".container #form_box form input:nth-child(2)");
		var Code=$(".container #form_box form input:nth-child(3)");
		var XinXi=$(".container #form_box #Xinxi");
		var code_lower=$(".container #form_box form div#code").val().toLowerCase();
		var Xinxi_span=$(".container #form_box #Xinxi span");
		if(name.val()==""){
			XinXi.css("display","block");
			Xinxi_span.attr("class","glyphicon glyphicon-ban-circle");
			Xinxi_span.css("color","#F82B2B");
			XinXi.css("background-color","#360E10");
			XinXi.children("p").text("请输入账号。");
		}else if(passwd.val()==""){
			Xinxi_span.attr("class","glyphicon glyphicon-ban-circle");
			Xinxi_span.css("color","#F82B2B");
			XinXi.css("background-color","#360E10");
			XinXi.css("display","block");
			XinXi.children("p").text("请输入密码。");
		}else if(Code.val()==""){
			Xinxi_span.attr("class","glyphicon glyphicon-ban-circle");
			Xinxi_span.css("color","#F82B2B");
			XinXi.css("background-color","#360E10");
			XinXi.css("display","block");
			XinXi.children("p").text("请输入验证码。");
		}else if(Code.val()!=code_lower){
			Xinxi_span.attr("class","glyphicon glyphicon-ban-circle");
			Xinxi_span.css("color","#F82B2B");
			XinXi.css("background-color","#360E10");
			XinXi.css("display","block");
			XinXi.children("p").text("请输入正确的验证码。");
		}else if(name.val()!=""&&passwd.val()!=""&&Code.val()==code_lower){
			Xinxi_span.attr("class","glyphicon glyphicon-ok-circle");
			Xinxi_span.css("color","#51AB51");
			XinXi.css("background-color","#449D44");
			XinXi.css("display","block");
			XinXi.children("p").text("登录成功！");
		}
	});
});
