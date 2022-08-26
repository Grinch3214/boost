// Animations
import LocomotiveScroll from 'locomotive-scroll';
const mediaQuery = window.matchMedia('(min-width: 1310px)');

let scrollOptions = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
  smooth: true,
	smartphone: {
		smooth: true
	},
	tablet: {
		smooth: true,
	},
	reloadOnContextChange: true,
});

setTimeout(locomotiveHeightBug, 3500);
function locomotiveHeightBug(){
  window.dispatchEvent(new Event('resize'));
}

new ResizeObserver(() => scrollOptions.update()).observe(document.querySelector("[data-scroll-container]"));

function animationNavbar() {
	const navbar = document.querySelector('.header__navbar');
	let anim = setTimeout(function() {
		navbar.classList.add('active');
		clearTimeout(anim);
	}, 150)
};
// в этой функции по скролу можем отслеживать активное окно и добавлять классы
// для каких-то css эффектов UPD: не актуальна при локомотиве :(

// function testOpt() {
// 	scrollOptions.on('scroll', (item) => {

// 		const amimItems = document.querySelectorAll('.fade');
// 		if (amimItems.length > 0) {
// 			function animOnScroll() {
// 				for (let index = 0; index < amimItems.length; index++) {
// 					const animItem = amimItems[index];
// 					console.log('animItem: ', animItem)
// 					const animItemHeight = animItem.offsetHeight;
// 					console.log('animItemHeight: ', animItemHeight)
// 					const animItemOffset = offset(animItem).top;
// 					const animStart = 1.2;

// 					let animItemPoint = window.innerHeight - animItemHeight / animStart;

// 					if(animItemHeight > window.innerHeight) {
// 						animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 					}

// 					if((item.delta.y > animItemOffset - animItemPoint) && item.delta.y < (animItemOffset + animItemHeight)) {
// 						animItem.classList.add('show')
// 					} else {
// 						animItem.classList.remove('show')
// 					}
// 				}
// 			}

// 			function offset(el) {
// 				const rect = el.getBoundingClientRect(),
// 				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 				return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// 			}
// 			animOnScroll();
// 		}

// 	})
// };

function animationWindow() {
	const circle = document.querySelector('.circle');

	scrollOptions.on('scroll', (obj) => {
		let anim = Math.floor(obj.delta.y / 14);
		// console.log(anim)
		circle.style = `
			transform: rotate(-${anim}deg);
			transition: all .3s ease;
		`;
	});

	const animateRoot = document.styleSheets[0];
	animateRoot.insertRule(`:root{
		--a-width:calc(105vw + ${window.innerWidth}px);
		--a-heigth:calc(180vh + ${window.innerHeight}px);
	}`);
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

// function brackpoints() {
// 	const stickyBlock = document.querySelector('.power__image-box');
// 	const cardsAnimation = document.querySelectorAll('.gaming__card');

// 	function removeDataScrollSpeed() {
// 		for (let i = 0; i < cardsAnimation.length; i++) {
// 			cardsAnimation[i].dataset.scrollSpeed = 0
// 		}
// 	}

// 	if (window.innerWidth <= 1310 && stickyBlock.getAttribute('data-scroll-target')) {
// 		stickyBlock.removeAttribute('data-scroll-target');
// 		stickyBlock.removeAttribute('data-scroll-sticky');
// 		removeDataScrollSpeed();
// 	}
// 	window.addEventListener('resize', function() {
// 		if (window.innerWidth <= 1310) {
// 			stickyBlock.removeAttribute('data-scroll-target');
// 			stickyBlock.removeAttribute('data-scroll-sticky');
			
// 			removeDataScrollSpeed();
// 		} else {
// 			stickyBlock.setAttribute('data-scroll-target', '#fixed-elements')
// 			stickyBlock.setAttribute('data-scroll-sticky', '');

// 			cardsAnimation[0].dataset.scrollSpeed = 3;
// 			cardsAnimation[1].dataset.scrollSpeed = 2;
// 			cardsAnimation[2].dataset.scrollSpeed = -3;
// 		}
// 	})
// }
export { scrollOptions, animationNavbar,  animationWindow, footerAccordionOnMobile };