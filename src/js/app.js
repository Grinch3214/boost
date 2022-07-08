import * as flsFunctions from './modules/functions.js';
flsFunctions.isWebp();

import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
  smooth: true,
	multiplier: .3,
	resetNativeScroll: false,
	smartphone: {
		smooth: true
	}
});

import { animationNavbar,  animationWindow  } from './modules/globalAnimation.js';
animationNavbar();
animationWindow();
import { tabsOnSwiper } from './modules/tabs.js';
tabsOnSwiper();