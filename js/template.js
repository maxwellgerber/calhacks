$(document).ready(function(){
	$('li').hover(function(){
		$(this).css('opacity','1');
		console.log("cool");
	}, function(){
		$(this).css('opacity','.6');
	});
});
