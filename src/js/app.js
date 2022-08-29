import * as flsFunctions from './modules/functions.js';
import { locomotiveScrollAnimation, animationNavbar, footerAccordionOnMobile } from './modules/globalAnimation.js';
import { tabsOnSwiper } from './modules/tabs.js';
import burgerMenu from './modules/burger.js';
import footerPulsationCircle from './modules/footerWidthCircle.js';

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

//footer
footerAccordionOnMobile();