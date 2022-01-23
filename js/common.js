document.addEventListener('DOMContentLoaded', function() {

	// carusel section
	const showSlider = new Swiper('.showcase-carousel', {
		loop: true,
		slidesPerView: 3,
		speed: 1800,
		centeredSlides: true,
		navigation: {
			nextEl: '.showcase-navigation__next',
			prevEl: '.showcase-navigation__prev'
		}
	}) 
	//video
	document.querySelector('video').playbackRate = 2

})
