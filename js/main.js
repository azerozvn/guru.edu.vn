$(document).ready(function(){
	/* scroll animation */
	$(window).scroll(function()
	{
	    if($(window).scrollTop() >= 100)
	    {
	    	$('.topic-box:even').addClass('animate-even');
	    	$('.topic-box:odd').addClass('animate-odd');
          	$('.topic-box').addClass('animated bounceIn');
	    };
	    if($(window).scrollTop() >= 1450)
	    {
	    	$('.testimonial:even').addClass('animate-even animated fadeInUp show');
	    	$('.testimonial:odd').addClass('animate-odd animated fadeInDown show');  	
	    }
	});
	/* navbar active */
	$('.masthead-nav > li > a').on('click',function(){
		$(this).closest('.masthead-nav').find('.active').removeClass('active');
		$(this).closest('li').addClass('active');
	});
	/* main animation */
	$('.topic-box').hover(
		function(){
			$(this).removeClass('bounceIn');
			$(this).addClass('animated-pulse pulse');
		}, function(){
			$(this).removeClass('animated-pulse pulse');
	});
	$('.course-title').on('click',function(){
		$(this).closest('.course-box').find('.course-details').removeClass('hide flipOutY');
		$(this).closest('.course-box').find('.course-details').addClass('show animate-flip animated flipInY');
	});
	$('.course-details > i').on('click',function(){
		$(this).closest('.course-box').find('.course-details').addClass('hide flipOutY');
	});
});