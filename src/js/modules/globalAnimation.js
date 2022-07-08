// Animations

function animationNavbar() {
	const navbar = document.querySelector('.header__navbar');
	let anim = setTimeout(function() {
		navbar.classList.add('active');
		clearTimeout(anim);
	}, 150)
};

function animationWindow() {
	const circle = document.querySelector('.circle');
	const body = document.querySelector('body');
	let delta = 0;
	let heightBody = 0;
	let heightUp = 0;
	let scrollHeightBody = body.scrollHeight;
	body.addEventListener("wheel", function(e) {
		heightBody += Math.floor(e.deltaY * 0.45);
		heightUp += Math.floor(e.deltaY * 0.03);
		delta = Math.min(Math.max(0, heightBody), scrollHeightBody);
		if (delta <= 0) {
			return heightUp = 0
		}
		if (scrollHeightBody <= heightBody) {
			return heightUp
		};
		circle.style = `
			transform: rotate(-${heightUp}deg);
			transition: all .3s ease;
		`;
	});
};

export { animationNavbar,  animationWindow };