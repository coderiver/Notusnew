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
// search category
	var sw = $('.search__category-drop').width();
	if (($('.search__holder').width()<360) && (sw>122)) {sw = 122; $('.search__category-text').width(80);};
	$('.search__input').css('padding-left',sw+12+'px');
	$('.search__category-drop').change(function() {
		$('.search__category-text span').html($(this).val());
		var sw1 = $('.search__category-drop').width();
		if (($('.search__holder').width()<360) && (sw1>122)) {sw1 = 122; $('.search__category-text').width(80);}
		else {$('.search__category-text').css('width','auto')};
		$('.search__input').css('padding-left',sw1+12+'px');
	});
});