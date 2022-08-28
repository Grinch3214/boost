import * as flsFunctions from './modules/functions.js';
import { locomotiveScrollAnimation, animationNavbar, footerAccordionOnMobile } from './modules/globalAnimation.js';
import { tabsOnSwiper } from './modules/tabs.js';
import burgerMenu from './modules/burger.js';

const isAnimate = document.querySelector('.isAnimate');


flsFunctions.isWebp();
// burger
burgerMenu();

// animation
if(isAnimate) {
	locomotiveScrollAnimation();
}

animationNavbar();

// tabs
tabsOnSwiper();

//footer
footerAccordionOnMobile();