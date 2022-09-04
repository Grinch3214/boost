import * as flsFunctions from './modules/functions.js';
import { locomotiveScrollAnimation, animationNavbar, footerAccordionOnMobile } from './modules/globalAnimation.js';
import { tabsOnSwiper } from './modules/tabs.js';
import burgerMenu from './modules/burger.js';
import footerPulsationCircle from './modules/footerWidthCircle.js';
import { tabsOnLeftContent, accordionOnMobileForFaq } from './modules/faq.js';

const isAnimate = document.querySelector('.isAnimate');


flsFunctions.isWebp();
// burger
burgerMenu();

// animation
if(isAnimate) {
	locomotiveScrollAnimation();
} else {
	footerPulsationCircle();
}

animationNavbar();

// tabs
tabsOnSwiper();

// tabs and accordion for faq page
tabsOnLeftContent();
window.addEventListener('resize', (event) => {
	tabsOnLeftContent();
});

accordionOnMobileForFaq();



//footer
footerAccordionOnMobile();