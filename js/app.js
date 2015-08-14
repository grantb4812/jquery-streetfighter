//need to figure out off


$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		ryuReady();
	})
		
		//$("window").off("keydown", 'window', showCool);
	.mouseleave(function() {
			ryuStill();
		//$('window').on("keydown", 'window', showCool);
	});

	$('.ryu').mousedown(function(){
		playHadouken();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
	})
	.mouseup(function(){
		ryuReady();

	});

	
		$(window).on("keydown", function(event){
				ryuCool();	
		}).on('keyup', function(event){
				ryuStill();
				if($('.ryu').mouseenter()) {
					ryuReady();
				}
		});

});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};

function showCool (event) {
		if (event.keyCode == 88){
				$('.ryu-still').hide();
				$('.ryu-ready').hide();
				$('.ryu-throwing').hide();
				$('.ryu-cool').show();
			}
};

function showStill() {
			$('.ryu-cool').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-still').show();
};

function ryuReady() {
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide()
		$('.ryu-ready').show();
};

function ryuStill () {
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide()
		$('.ryu-still').show();
};

function ryuCool () {
	if (event.keyCode == 88){
				$('.ryu-still').hide();
				$('.ryu-ready').hide();
				$('.ryu-throwing').hide();
				$('.ryu-cool').show();
	}
};

