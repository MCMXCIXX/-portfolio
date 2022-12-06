document.querySelectorAll('.slider').forEach((n, i) => {
	window[`slider${i+1}`] = new Swiper(n, {
		freeMode: true,
		centeredSlides: true,
		direction: 'vertical',
		mousewheel: true,
		slidesPerView: 1.75,
		slidesOffsetBefore: -125,
		breakpoints: {
			// when window width is >= 320px
			299: {
				height: 260,
			},
			// when window width is >= 480px
			480: {
				autoHeight: true,
			},
			// when window width is >= 640px
			640: {
				autoHeight: true,
			}
		  }
	})
})
bindSwipers(slider1, slider2, slider3, slider4)
