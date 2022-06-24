// Animations

function animationNavbar() {
	const navbar = document.querySelector('.navbar');
	let anim = setTimeout(function() {
		navbar.classList.add('active');
		clearTimeout(anim);
	}, 150)
};

function animationWindow() {
	const circle = document.querySelector('.circle');
	window.addEventListener("scroll", (event) => {
		let x = Math.floor(scrollY / 10);
		circle.style = `
		transform: rotate(-${x}deg);
	`;
	});
};

export { animationNavbar,  animationWindow };