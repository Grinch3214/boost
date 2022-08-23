export default function brackpoints() {
	const stickyBlock = document.querySelector('.power__image-box');
	window.addEventListener('resize', function() {
		if (window.innerWidth <= 1310) {
			stickyBlock.removeAttribute('data-scroll-target');
			if (stickyBlock.getAttribute('data-scroll-target')) {
				stickyBlock.removeAttribute('data-scroll-target')
			}
		} else {
			stickyBlock.setAttribute('data-scroll-target', '#fixed-elements')
		}
	})
}