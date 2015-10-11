$(document).ready(function(){
	$('li').hover(function(){
		$(this).css('opacity','1');
	}, function(){
		$(this).css('opacity','.6');
	});
	if($.cookie("username")) {
    	$('#signin').hide();
    	$('#signout').show();
    } else {
    	$('#signin').show();
    	$('#signout').hide();
    }
});