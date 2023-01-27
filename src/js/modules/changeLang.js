import {languages} from '../lang.js';

export default function changeLang() {
	const currentLang = document.querySelector('.header__buttons-lang span');
	const currentLangSvg = document.querySelector('.header__buttons-lang svg use');

	const allLanguage = document.querySelectorAll('[data-lang]');
	const allLangArr = ['en', 'es', 'ua', 'ro'];

	const buttonLang = {
		"en": "English",
		"es": "Español",
		"ua": "Українська",
		"ro": "Română"
	};
	const buttonLangIcon = {
		"en": "img/sprites/sprite.svg#united_kingdom",
		"es": "img/sprites/sprite.svg#spain",
		"ua": "img/sprites/sprite.svg#ukraine",
		"ro": "img/sprites/sprite.svg#romania",
	};

	function translateAllButtonsWithIcons() {
		const buttonsArr = [
			{
				"en": "Download for",
				"es": "Descarga para",
				"ua": "Завантажити для",
				"ro": ""
			}
		];
		const allButtonsWithIcons = document.querySelectorAll('.download-for');
		let hash = window.location.hash.substring(1);
		if(allButtonsWithIcons) {
			allButtonsWithIcons.forEach((item, index) => {
				if(hash === 'en') {
					return item.innerText = buttonsArr[0].en
				}
				if(hash === 'es') {
					return item.innerText = buttonsArr[0].es
				}
				if(hash === 'ua') {
					return item.innerText = buttonsArr[0].ua
				}
				if(hash === 'ro') {
					return item.innerText = buttonsArr[0].ro
				}
			})
		};
	};
	translateAllButtonsWithIcons();

	function changeURLLanfuage(item) {
		let lang = item.dataset.lang
		location.href = window.location.pathname + '#' + lang.toLowerCase();
		location.reload();
	};

	function changeLanguage() {
		
		if(localStorage.getItem('language') === null) {
			localStorage.setItem('language', 'en');
			location.reload();
			return
		}
		let hash = window.location.hash;
		hash = hash.substr(1);
		if (!allLangArr.includes(hash)) {
			// location.href = window.location.pathname + '#en';
			location.href = window.location.pathname + `#${localStorage.getItem('language')}`;
			location.reload();
		};

		allLanguage.forEach(item => {
			item.addEventListener('click', (event) => {
				if( item.dataset.lang == 'es' ) {
					changeURLLanfuage(item);
					localStorage.setItem('language', item.dataset.lang);
					return
				}
				if( item.dataset.lang == 'en' ) {
					changeURLLanfuage(item);
					localStorage.setItem('language', item.dataset.lang);
					return
				}
				if( item.dataset.lang == 'ua' ) {
					changeURLLanfuage(item);
					localStorage.setItem('language', item.dataset.lang);
					return
				}
				if( item.dataset.lang == 'ro' ) {
					changeURLLanfuage(item);
					localStorage.setItem('language', item.dataset.lang);
					return
				}
			})
		});


		if (languages) {

			currentLang.innerHTML = buttonLang[hash];
			currentLangSvg.href.baseVal = buttonLangIcon[hash];

			if (window.location.pathname !== '/') {
				currentLangSvg.href.baseVal = '../'+buttonLangIcon[hash];
			}

			for(let key in languages){
				let elem = document.querySelector(`.${key}`)
				if (elem && languages[key][hash]) {
					elem.innerText = languages[key][hash];
				}
			};
		};
	};

	changeLanguage();
}