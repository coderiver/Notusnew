$(document).ready(function() {

// currency
	$('.choice_cy .choice__text, .choice .choice__text').click(function(){
		$(this).addClass('choice__text_open');
		$(this).next('ul').fadeIn('fast');
		return false;
	});
	$('.choice_cy ul a, .choice ul a').click(function(){
		$(this).parent().parent().prev().children('span').html($(this).html());
		$('.choice__text').removeClass('choice__text_open');
		$(this).parent().parent('ul').fadeOut('fast');
		return false;
	});

// suggest
	$('.search__input input').keyup(function(){
		sit = $(this).val().length;
		if (sit >= 3) {
			$('.search__holder .suggest').fadeIn(500);
		};
	});
	$('.search__input input').blur(function() {
		$('.search__holder .suggest').fadeOut(500);
	});

});