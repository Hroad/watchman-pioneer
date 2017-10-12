$(document).ready(function(){
	//banner图片加载时滑向中间
	if( ( navigator.appName != "Microsoft Internet Explorer" || isChrome() ) && (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) == null ){
		$(".list").each(function(){
			var ifshow=$(this).attr("ifshow");
			var paraIn=$(this).attr("paraIn");
			var paraOut=$(this).attr("paraOut");
			$(this).attr("ifshow","1").removeClass(paraOut).addClass(paraIn);
			if( $(this).attr("iftimetree") == "true" ){
				$(this).next().removeClass("h1").addClass("s1");
			}
		});
		
	}
});