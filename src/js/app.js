import * as flsFunctions from './modules/functions.js';
import { animationNavbar,  animationWindow, scrollOptions, footerAccordionOnMobile  } from './modules/globalAnimation.js';
import { tabsOnSwiper } from './modules/tabs.js';
import burgerMenu from './modules/burger.js';
// import footerAccordionOnMobile from './modules/footer.js'

flsFunctions.isWebp();
// animation
animationNavbar();
animationWindow();

// tabs
tabsOnSwiper();

// burger
burgerMenu();

//footer
footerAccordionOnMobile();