// Animations
import LocomotiveScroll from 'locomotive-scroll';

const scrollOptions = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
  smooth: true,
	multiplier: .7,
	resetNativeScroll: false,
	smartphone: {
		smooth: true
	}
});
new ResizeObserver(() => scrollOptions.update()).observe(document.querySelector("[data-scroll-container]"));

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
		// console.log(anim)
		circle.style = `
			transform: rotate(-${anim}deg);
			transition: all .3s ease;
		`;
	});
};

//footer tabs
function footerAccordionOnMobile() {
  const accordion = document.querySelectorAll('.footer__title');

	function accordionOnMobile() {
    accordion.forEach((elem) => {
      elem.addEventListener("click", function (event) {
        if (window.innerWidth <= 768) {
					this.classList.toggle('active');
          let list = this.nextElementSibling;
          if (!list.style.maxHeight) {
						list.style.maxHeight = list.scrollHeight + "px";
          } else {
						list.style.maxHeight = null;
					}
        }
      });
    });
  }
  accordionOnMobile();
};

export { scrollOptions, animationNavbar,  animationWindow, footerAccordionOnMobile };