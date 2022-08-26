export default function brackpoints() {
	const stickyBlock = document.querySelector('.power__image-box');
	const cardsAnimation = document.querySelectorAll('.gaming__card');

	function removeDataScrollSpeed() {
		for (let i = 0; i < cardsAnimation.length; i++) {
			cardsAnimation[i].dataset.scrollSpeed = 0
		}
	}

	if (window.innerWidth <= 1310 && stickyBlock.getAttribute('data-scroll-target')) {
		stickyBlock.removeAttribute('data-scroll-target');
		stickyBlock.removeAttribute('data-scroll-sticky');
		stickyBlock.removeAttribute('data-scroll');
		removeDataScrollSpeed();
	}
	window.addEventListener('resize', () => {
		if (window.innerWidth <= 1310) {
			stickyBlock.removeAttribute('data-scroll-target');
			stickyBlock.removeAttribute('data-scroll-sticky');
			stickyBlock.removeAttribute('data-scroll');
			removeDataScrollSpeed();
		} else {
			stickyBlock.setAttribute('data-scroll-target', '#fixed-elements')
			stickyBlock.setAttribute('data-scroll-sticky', '');
			stickyBlock.setAttribute('data-scroll', '');

			cardsAnimation[0].dataset.scrollSpeed = 3;
			cardsAnimation[1].dataset.scrollSpeed = 2;
			cardsAnimation[2].dataset.scrollSpeed = -3;
		}
	})
};