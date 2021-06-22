// Preloader js    
$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

(function ($) {
	'use strict';

	// Sticky Menu
	$(window).scroll(function () {
		if ($('.navigation').offset().top > 100) {
			$('.navigation').addClass('nav-bg');
		} else {
			$('.navigation').removeClass('nav-bg');
		}
	});

	// Background-images
	$('[data-background]').each(function () {
		$(this).css({
			'background-image': 'url(' + $(this).data('background') + ')'
		});
	});

	// background color
	$('[data-color]').each(function () {
		$(this).css({
			'background-color': $(this).data('color')
		});
	});

	// progress bar
	$('[data-progress]').each(function () {
		$(this).css({
			'bottom': $(this).data('progress')
		});
	});

	jQuery(document).ready(function () {
	    // =========== Typing Carousel ================
    // get data from hidden ul and set as typing data
    if (document.getElementById('typing-carousel-data') != undefined) {
		var ul = document.getElementById('typing-carousel-data').children;
  
		if (ul.length != 0) {
		  var data = [];
		  Array.from(ul).forEach(el => {
			data.push(el.textContent);
		  })
  
		  ityped.init('#ityped', {
			strings: data,
			startDelay: 200,
			loop: true
		  });
		}
	  }

	  // ============== Fix Timelines Horizontal Lines =========
	  var hLines = document.getElementsByClassName("horizontal-line");
	  for (let i = 0; i < hLines.length; i++) {
		if (i % 2) {
		  hLines[i].children[0].children[0].classList.add("bottom-right");
		  hLines[i].children[2].children[0].classList.add("top-left");
		} else {
		  hLines[i].children[0].children[0].classList.add("top-right");
		  hLines[i].children[2].children[0].classList.add("bottom-left");
		}
	  }
  
	  // ============== Fix Timelines Vertical lines =========
	  var vLines = document.getElementsByClassName("vertical-line");
	  for (let i = 0; i < vLines.length; i++) {
		if (i % 2) {
		  vLines[i].classList.add("vertical-line-left-adjustment");
		}
	  }
	});

	/* ########################################### hero parallax ############################################## */
	window.onload = function () {

		var parallaxBox = document.getElementById('parallax');
		/*
		 Fix js error, occurred at pages other than the home page. 
		 When there're no parallax, just ignore the below
		 other operations, as below elements are bingding to the parallax.
		*/
		if (!parallaxBox) {
			return;
		}

		var
			/* c1left = document.getElementById('l1').offsetLeft,
			c1top = document.getElementById('l1').offsetTop, */
			c2left = document.getElementById('l2').offsetLeft,
			c2top = document.getElementById('l2').offsetTop,
			c3left = document.getElementById('l3').offsetLeft,
			c3top = document.getElementById('l3').offsetTop,
			c4left = document.getElementById('l4').offsetLeft,
			c4top = document.getElementById('l4').offsetTop,
			c5left = document.getElementById('l5').offsetLeft,
			c5top = document.getElementById('l5').offsetTop,
			c6left = document.getElementById('l6').offsetLeft,
			c6top = document.getElementById('l6').offsetTop,
			c7left = document.getElementById('l7').offsetLeft,
			c7top = document.getElementById('l7').offsetTop,
			c8left = document.getElementById('l8').offsetLeft,
			c8top = document.getElementById('l8').offsetTop,
			c9left = document.getElementById('l9').offsetLeft,
			c9top = document.getElementById('l9').offsetTop;

		parallaxBox.onmousemove = function (event) {
			event = event || window.event;
			var x = event.clientX - parallaxBox.offsetLeft,
				y = event.clientY - parallaxBox.offsetTop;

			/*  mouseParallax('l1', c1left, c1top, x, y, 5); */
			mouseParallax('l2', c2left, c2top, x, y, 25);
			mouseParallax('l3', c3left, c3top, x, y, 20);
			mouseParallax('l4', c4left, c4top, x, y, 35);
			mouseParallax('l5', c5left, c5top, x, y, 30);
			mouseParallax('l6', c6left, c6top, x, y, 45);
			mouseParallax('l7', c7left, c7top, x, y, 30);
			mouseParallax('l8', c8left, c8top, x, y, 25);
			mouseParallax('l9', c9left, c9top, x, y, 40);
		};

	};

	function mouseParallax(id, left, top, mouseX, mouseY, speed) {
		var obj = document.getElementById(id);
		var parentObj = obj.parentNode,
			containerWidth = parseInt(parentObj.offsetWidth),
			containerHeight = parseInt(parentObj.offsetHeight);
		obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
		obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
	}
	/* ########################################### /hero parallax ############################################## */

	// testimonial-slider
	$('.testimonial-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: false,
		adaptiveHeight: true
	});


	// clients logo slider
	$('.client-logo-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: false,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Shuffle js filter and masonry
	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}



})(jQuery);