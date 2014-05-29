$('.modal').easyModal({
	overlay : 0.4,
	overlayOpacity: 0.75,
	overlayClose: true
});
$('.open-register-modal').click(function(e){
	$('.register-modal').trigger('openModal');
	e.preventDefault();
});
$('.open-login-modal').click(function(e){
	$('.login-modal').trigger('openModal');
	e.preventDefault();
});