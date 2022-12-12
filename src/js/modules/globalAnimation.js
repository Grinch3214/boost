// Animations
import LocomotiveScroll from 'locomotive-scroll';

function locomotiveScrollAnimation() {
	//? ----- init Locomotive scroll -----
	let scrollOptions = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
		touchMultiplier: 2.5,
		smartphone: {
			smooth: true
		},
		tablet: {
			smooth: true,
		},
		reloadOnContextChange: true,
	});

	//! This timeout and observe need for reset calculate height!!!
	setTimeout(locomotiveHeightBug, 600);
	setTimeout(locomotiveHeightBug, 3000);
	function locomotiveHeightBug(){
		window.dispatchEvent(new Event('resize'));
	};
	
	new ResizeObserver(() => scrollOptions.update()).observe(document.querySelector("[data-scroll-container]"));

	//? ----- animation on main page for circle background -----
	function animationWindow() {
		const circle = document.querySelector('.circle');
		const circleLinesRight = document.querySelector('.circle-lines');
		const powerSection = document.querySelector('.power');
		const offsetPower = powerSection.offsetTop;
	
		scrollOptions.on('scroll', (obj) => {
			let anim = Math.floor(obj.delta.y / 14);
			let animLines = Math.floor(obj.delta.y / 25);
			circle.style = `
				transform: rotate(-${anim}deg);
				transition: all .3s ease;
			`;
			circleLinesRight.style = `
				transform: rotate(${animLines+50}deg);
				transition: all 0.5s ease;
			`;
			if (offsetPower < obj.delta.y) {
				circleLinesRight.classList.add('active');
			} else {
				circleLinesRight.classList.remove('active');
			}
		});

		//? ----- calculate :before circle for resize -----

		// const css = `:root{
		// 	--a-width:calc(105vw + ${window.innerWidth}px);
		// 	--a-heigth:calc(180vh + ${window.innerHeight}px);
		// 	--b-width:calc(${window.innerWidth}px - 200px);
		// 	--c-width:calc(${window.innerWidth}px + 600px);
		// }`,
		// head = document.head || document.getElementsByTagName('head')[0],
		// style = document.createElement('style');

		// head.appendChild(style);

		// style.type = 'text/css';
		// if (style.styleSheet){
		// 	// This is required for IE8 and below.
		// 	style.styleSheet.cssText = css;
		// } else {
		// 	style.appendChild(document.createTextNode(css));
		// }

		//! Loaded Content if need
		
		let mask = document.querySelector('.mask');
		document.addEventListener("DOMContentLoaded", (event) => {
			mask.classList.add('hide');
			setTimeout(() => {
				mask.remove();
			}, 600)
		});

	};
	animationWindow();


	//? ------ BANNER open/close ------
	const banner = document.querySelector('.banner');
	const bannerButton = document.querySelector('.banner__button');
	const footer = document.querySelector('.footer');

	bannerButton.addEventListener('click', (event) => {
		bannerButton.classList.toggle('active');

		if (banner.style.maxHeight === '100%') {
			banner.style.maxHeight = '3%';
			footer.style.paddingBottom = `${(banner.scrollHeight / 100 * 3 + 25)}px`;
		} else {
			banner.style.maxHeight = '100%';
			footer.style.paddingBottom = `${banner.scrollHeight + 25}px`;
		}
	});

	function hidingAndVisibleTheBanner() {
		footer.style.paddingBottom = `${banner.scrollHeight + 25}px`;
	}
	hidingAndVisibleTheBanner();

	window.addEventListener('resize', hidingAndVisibleTheBanner);

	//? ------ change data atributes for main page -----
	function changeDataAtributesForMainPage() {
		const stickyBlock = document.querySelector('.power__image-box');
		const cardsAnimation = document.querySelectorAll('.gaming__card');
		const partnersAnimation = document.querySelectorAll('.partners__companies > li');
		const powerContainer = document.querySelector('.power__container');
		console.log(powerContainer.id)
	
		function removeDataScrollSpeed(removeDataAnim) {
			for (let i = 0; i < removeDataAnim.length; i++) {
				removeDataAnim[i].dataset.scrollSpeed = 0;
			}
		};
	
		function changingAttributes() {
			if (window.innerWidth <= 1310) {
				stickyBlock.removeAttribute('data-scroll-target');
				stickyBlock.removeAttribute('data-scroll-sticky');
				stickyBlock.removeAttribute('data-scroll');
				stickyBlock.style = '';
				removeDataScrollSpeed(cardsAnimation);
				removeDataScrollSpeed(partnersAnimation);
			} else {
				stickyBlock.setAttribute('data-scroll-target', '#fixed-elements')
				stickyBlock.setAttribute('data-scroll-sticky', '');
				stickyBlock.setAttribute('data-scroll', '');
	
				cardsAnimation[0].dataset.scrollSpeed = 3;
				cardsAnimation[1].dataset.scrollSpeed = 2;
				cardsAnimation[2].dataset.scrollSpeed = -3;
	
				partnersAnimation[0].dataset.scrollSpeed = 2;
				partnersAnimation[1].dataset.scrollSpeed = 1;
				partnersAnimation[2].dataset.scrollSpeed = -1;
				partnersAnimation[3].dataset.scrollSpeed = -2;
			}
		};
		changingAttributes();
	
		window.addEventListener('resize', () => {
			changingAttributes();
		});
	};
	changeDataAtributesForMainPage();
};

//? ----- for animation header -----
function animationNavbar() {
	const navbar = document.querySelector('.header__navbar');
	let anim = setTimeout(function() {
		navbar.classList.add('active');
		clearTimeout(anim);
	}, 150)
};

//? ----- footer tabs -----
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

export { locomotiveScrollAnimation, animationNavbar, footerAccordionOnMobile };

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