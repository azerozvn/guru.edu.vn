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
	$('.sidebar-toggle').tooltip();
	$('.sidebar-item > a').tooltip();
	$('.course-table tr').tooltip();
	/* Enable tabbing */
	$('.sidebar-item > a').click(function(e){
  		e.preventDefault();
  		$(this).tab('show');
	})
	/* Toggle sidebar */
	$('.sidebar-toggle-off').on('click',function(e){
		e.preventDefault();
		$('.player').removeClass('col-md-8').addClass('col-md-12');
		$('.sidebar').removeClass('col-md-4').css('margin-top','30px');
		$playerHeight = $player.width()*360/640;
		$player.css('transition','0.2s');
		$player.css('height',$playerHeight);
		$('.sidebar-toggle-off').css('display','none');
		$('.sidebar-toggle-on').css('display','block');
	});
	$('.sidebar-toggle-on').on('click',function(e){
		e.preventDefault();
		$('.player').removeClass('col-md-12').addClass('col-md-8');
		$('.sidebar').addClass('col-md-4').css('margin-top','0px');
		$playerHeight = $player.width()*360/640;
		$player.css('transition','0.2s');
		$player.css('height',$playerHeight);
		$('.sidebar-toggle-on').css('display','none');
		$('.sidebar-toggle-off').css('display','block');
	});
});