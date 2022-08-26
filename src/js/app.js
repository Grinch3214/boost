import * as flsFunctions from './modules/functions.js';
import { animationNavbar,  animationWindow, scrollOptions, footerAccordionOnMobile } from './modules/globalAnimation.js';
import brackpoints from './modules/brackpoints.js'
import { tabsOnSwiper } from './modules/tabs.js';
import burgerMenu from './modules/burger.js';
// import footerAccordionOnMobile from './modules/footer.js'

flsFunctions.isWebp();
// burger
burgerMenu();
// animation
animationNavbar();
animationWindow();
// brackpoints
brackpoints();
// tabs
tabsOnSwiper();

//footer
footerAccordionOnMobile();