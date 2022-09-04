// Animations
import LocomotiveScroll from 'locomotive-scroll';

function locomotiveScrollAnimation() {
	//? ----- init Locomotive scroll -----
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

	//! This timeout and observe need for reset calculate height!!!
	setTimeout(locomotiveHeightBug, 3500);
	function locomotiveHeightBug(){
		window.dispatchEvent(new Event('resize'));
	};
	
	new ResizeObserver(() => scrollOptions.update()).observe(document.querySelector("[data-scroll-container]"));

	//? ----- animation on main page for circle background -----
	function animationWindow() {
		const circle = document.querySelector('.circle');
	
		scrollOptions.on('scroll', (obj) => {
			let anim = Math.floor(obj.delta.y / 14);
			circle.style = `
				transform: rotate(-${anim}deg);
				transition: all .3s ease;
			`;
		});
	
		//? ----- calculate :before circle for resize -----
		document.onreadystatechange = function(){
			if(document.readyState === 'complete'){
				const animateRoot = document.styleSheets[0];
				console.log(animateRoot)
				animateRoot.insertRule(`:root{
					--a-width:calc(105vw + ${window.innerWidth}px);
					--a-heigth:calc(180vh + ${window.innerHeight}px);
				}`);
			}
		}
	};
	animationWindow();

	//? ------ change data atributes for main page -----
	function changeDataAtributesForMainPage() {
		const stickyBlock = document.querySelector('.power__image-box');
		const cardsAnimation = document.querySelectorAll('.gaming__card');
		const partnersAnimation = document.querySelectorAll('.partners__companies > li');
	
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