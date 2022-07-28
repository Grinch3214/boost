import Swiper, { Navigation, Pagination } from 'swiper';

export function tabsOnSwiper() {
	const tabs = ['Browser', 'Desktop App', ' TV App', 'Mobile App'];
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