import Swiper, { Navigation, Pagination } from 'swiper';

export function tabsOnSwiper() {
	// const tabs = ['Browser', 'Desktop App', ' TV App', 'Mobile App'];
	let tabs = [];

	const arrEn = ['Browser', 'Desktop App', ' TV App', 'Mobile App'];
	const arrEs = ['Navegador', 'Aplicación de escritorio', 'Aplicación de TV', 'Aplicación movil'];
	const arrUa = ['Браузер', 'Desktop App', ' TV App', 'Mobile App'];
	const arrRo = ['Browser', 'Desktop App', ' TV App', 'Mobile App'];

	let hash = window.location.hash;
	hash = hash.substring(1);

	if (hash == 'en') {
		tabs = arrEn
	} else if (hash == 'es') {
		tabs = arrEs
	} else if (hash == 'ua') {
		tabs = arrUa
	} else if (hash == 'ro') {
		tabs = arrRo
	}

	const swiper = new Swiper('.unlimited__swiper', {
		modules: [Navigation, Pagination],
	
		// If we need pagination
		breakpoints: {
			320: {
				pagination: {
					enabled: true,
					el: '.swiper__pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return '<span class="' + className + '">' + (tabs[index]) + "</span>";
					},
				},
				allowTouchMove: true,
			},
			768: {
				allowTouchMove: false,
				pagination: {
					enabled: true,
					el: '.swiper__pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return '<span class="' + className + '">' + (tabs[index]) + "</span>";
					},
				},
			}
		},
		// pagination: {
		// 	el: '.swiper__pagination',
		// 	clickable: true,
		// 	renderBullet: function (index, className) {
		// 		return '<span class="' + className + '">' + (tabs[index]) + "</span>";
		// 	},
		// },
		// allowTouchMove: false,
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
}