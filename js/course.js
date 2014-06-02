$(document).ready(function(){
	/* Flexible player height */
	$player = $('.course-intro-player');
	$height = $player.width()*360/640;
	$player.css('height',$height);
	$(window).resize(function() {
		$player = $('.course-intro-player');
		$height = $player.width()*360/640;
		$player.css('height',$height);
	});
});