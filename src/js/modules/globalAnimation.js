// Animations
import LocomotiveScroll from 'locomotive-scroll';

const scrollOptions = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
  smooth: true,
	multiplier: .3,
	resetNativeScroll: false,
	smartphone: {
		smooth: true
	}
});


function animationNavbar() {
	const navbar = document.querySelector('.header__navbar');
	let anim = setTimeout(function() {
		navbar.classList.add('active');
		clearTimeout(anim);
	}, 150)
};

function animationWindow() {
	const circle = document.querySelector('.circle');

	scrollOptions.on('scroll', (obj) => {
		let anim = Math.floor(obj.delta.y / 8);
		console.log(anim)
		circle.style = `
			transform: rotate(-${anim}deg);
			transition: all .3s ease;
		`;
	});
};

// export { scrollOptions, animationNavbar,  animationWindow };