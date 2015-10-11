
$(document).ready(function(){

	var myPlayer = new Player("Max");
	$('.center-block').append(myPlayer.div());
});

function Player(i){
	this.i=i;
	this.div =function(){
		return div; 
	}
	var div = $(generateString(i));
	var active = false;
}

function generateString(i){
	var shit = '<div class="player">\
    			<h4>Player '+(i)+'</h4>\
       			<form class="form-inline">\
       				<fieldset>\
       				<div class="form-group">\
          				<label for="num">Number</label>\
      					<input type="number" class="form-control" id="num" placeholder="#">\
					</div>\
					<div class="form-group">\
      					<label for="count">Count</label>\
      					<input type="number" class="form-control" id="count" placeholder="0">\
					</div>\
					<button type="submit" class="btn btn-default">Bet</button>\
					<button type="submit" class="btn btn-warning">Call</button>\
					</fieldset>\
				</form>\
			</div>'
	return shit;

}