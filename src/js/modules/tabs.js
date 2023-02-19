import Swiper, { Navigation, Pagination } from 'swiper';

export function tabsOnSwiper() {
	const translations = {
		en: ['Browser', 'Desktop App', ' TV App', 'Mobile App'],
		// es: ['Navegador', 'Aplicación de escritorio', 'Aplicación de TV', 'Aplicación movil'],
		// ua: ['Браузер', 'Десктопний додаток', 'TV додаток', 'Мобільний додаток'],
		// ro: ['Browser', 'Desktop App', ' TV App', 'Mobile App']
	};
	
	const language = localStorage.getItem('language') || 'en';
	const tabs = translations[language] || translations.en;

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
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
}