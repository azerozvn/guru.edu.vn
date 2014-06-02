$(document).ready(function(){
	/* Flexible player & tab-content height */
	$player = $('.unit-player');
	$sidebar = $('.sidebar-items');
	$playerHeight = $player.width()*360/640;
	$player.css('height',$playerHeight);
	$('.tab-content').css('height',$player.height()-$sidebar.height());
	$(window).resize(function() {
		$playerHeight = $player.width()*360/640;
		$player.css('height',$playerHeight);
		$('.tab-content').css('height',$player.height()-$sidebar.height());
	});
	/* Enable tooltips */
	$('.sidebar-item > a').tooltip();
	/* Enable tabbing */
	$('.sidebar-item > a').click(function(e){
  		e.preventDefault();
  		$(this).tab('show');
	})
});