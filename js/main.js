$(document).ready(function(){
	var playercount = 5;
	var players = new Array();
	for(var i = 0; i < playercount; i++){
		players[i] = $('<div class=\"player\">Player '+(i+1)+'</div>');
		$('.game').append(players[i]);
		console.log("added");
	}

});

function Player(div){
	this.div = div
	this.get
}