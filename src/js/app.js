import * as flsFunctions from './modules/functions.js';
import { locomotiveScrollAnimation, animationNavbar, footerAccordionOnMobile } from './modules/globalAnimation.js';
import { tabsOnSwiper } from './modules/tabs.js';
import burgerMenu from './modules/burger.js';

flsFunctions.isWebp();
// burger
burgerMenu();

// animation
locomotiveScrollAnimation();
animationNavbar();

// tabs
tabsOnSwiper();

//footer
footerAccordionOnMobile();