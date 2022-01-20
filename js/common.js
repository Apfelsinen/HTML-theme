document.addEventListener('DOMContentLoaded', function() {

	// carusel section
	const showSlider = new Swiper('.showcase__carousel', {
		loop: true,
		slidesPerView: 3,
		speed: 1800
	})
	//video
	document.querySelector('video').playbackRate = 2

})
