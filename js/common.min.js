document.addEventListener("DOMContentLoaded", function () {

	// loader
	setTimeout(function () {
		document.querySelector('body').classList.remove('loaded');
	}, 400);
	document.querySelector('body').classList.add('is-loaded');

	/* components */
	$(".header__menu a").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 600);
	});

	//prevent drag img and a
	const imagesAndLinks = document.querySelectorAll('img, a');
	if (imagesAndLinks) {
    imagesAndLinks.forEach(function (item, i, arr) {
			item.addEventListener('dragstart', function (e) {
				e.preventDefault();
			})
		});
	}


	new WOW().init();

	$(window).scroll(function () {
		let $this = $(this),
			$head = $('.header');
		if ($this.scrollTop() > 40) {
			$head.addClass('fixed_header');
		} else {
			$head.removeClass('fixed_header');
		}
	});

	
	const handlerResize = function () {
		let viewport_wid = viewport().width;
		let viewport_height = viewport().height;

		// if (viewport_wid <= 991) {
			
		// }
	}

	window.addEventListener('load', handlerResize);
	window.addEventListener('resize', handlerResize);


});

/* viewport width */
function viewport() {
	let e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width: e[a + 'Width'], height: e[a + 'Height'] }
};
/* viewport width */

