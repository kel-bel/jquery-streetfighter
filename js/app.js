$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show().animate(
			{'left': '1200px'},
			550,
			function() {
				$(this).hide();
				$(this).css('left', '625px');
			}
		);
		$('.hadouken').finish().show()
			.animate(
				{'left': '1200px'},
				550,
				function() {
					$(this).hide();
					$(this).css('left', '625px');
				}
		);	
	})
	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	$('.hulk-ryu').mouseenter(function() {
		$('.hulk-still').hide();
		$('.hulk-ready').show();
	})
	.mouseleave(function(){
		$('.hulk-still').show();
		$('.hulk-ready').hide();
	})
	.mousedown(function(){
		playHadouken();
		$('.hulk-ready').hide();
		$('.hulk-throwing').show();
		$('.hulk-hadouken').show().animate(
			{'left': '500px'},
			550,
			function() {
				$(this).hide();
				$(this).css('left', '1200px');
			}
		);
		$('.hulk-hadouken').finish().show()
			.animate(
				{'left': '500px'},
				550,
				function() {
					$(this).hide();
					$(this).css('left', '1200px');
				}
		);		
	})
	.mouseup(function(){
		$('.hulk-throwing').hide();
		$('.hulk-ready').show();
	});
	$(document).keydown(function(e) {
		if (e.keyCode == 88) { 
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		};
		if (e.keyCode == 89) { 
			$('.hulk-still').hide();
			$('.hulk-cool').show();
		};
	})
	.keyup(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-still').show();
			$('.ryu-cool').hide();
		};
		if (e.keyCode == 89) {
			$('.hulk-still').show();
			$('.hulk-cool').hide();x
		};
	});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};

});


