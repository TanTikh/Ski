$(document).ready(function () {


	let vh = $(window).height();
	let vw = $(window).width();

	$('.wrapper').addClass('loaded');
	new WOW().init();


	$(window).scroll(function () {
		if ($(this).width() > 767.99 && $(this).scrollTop() >= $(this).height() - 10) {
			$('.header').addClass("fixed");
		} else {
			$('.header').removeClass("fixed");
		}
	});
	// --------------------------------------scroll

	$('.nav__link').click(function (e) {
		e.preventDefault(); // prevent hard jump, the default behavior

		var target = $(this).attr("href"); // Set the target as variable


		// perform animated scrolling by getting top-position of target-element and set it as scroll target
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, 600, function () {
			location.hash = target; //attach the hash (#jumptarget) to the pageurl
		});

		return false;
	});


	$(window).scroll(function () {
		var scrollDistance = $(window).scrollTop();
		var headerHeight = $('.header').height();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}

		// Assign active class to nav links while scolling
		$('.page-section').each(function (i) {
			if ($(this).position().top <= scrollDistance + headerHeight) {
				$('.nav__link.active-link').removeClass('active-link');
				$('.nav__link').eq(i).addClass('active-link');

			}
		});
	}).scroll();

	$('.burger').click(function (event) {
		$('.burger, .nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.burger.active, .nav__link').click(function (event) {
		$('.nav, .burger').removeClass('active');
		$('body').removeClass('lock');
	});

	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();

	$('.testimonials__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		// zIndex: 1,
		centerMode: true,
		centerPadding: '10px'
	});

	(function replaceGallery() {
		let galleryItem = $('.gallery__item'),
			gallerySlider = $('.gallery__slider');

		if (vw < 768) {
			galleryItem.appendTo(gallerySlider);
		} else if (vw >= 768) {
			$('.g-item_1, .g-item_2').appendTo('.g-col_1');
			$('.g-item_3, .g-item_4, .g-item_5').appendTo('.g-col_2');
			$('.g-item_6, .g-item_7').appendTo('.g-col_3');

		}
	}());
	(function startSlider() {
		if (vw < 767.98) {
			$('.gallery__slider').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				zIndex: 1,
				centerMode: true,
				centerPadding: '10px'
			});

		} else if (vw >= 768) {
			$('.gallery__slider').slick('unslick');
		}
	}());








});



