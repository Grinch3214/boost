import i18next from "i18next"

export default function changeLanguagei18n() {
	
	function updateContent() {
		const elements = document.getElementsByClassName('i18nelement');
		
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			const k = element.getAttribute('data-i18n');
			element.innerHTML = i18next.t(k);
		}
	}

	async function i18Loader() {
		const langs = ['en', 'es', 'ua', 'ro'];
		const jsons = await Promise.all(
			langs.map((item) => fetch('files/i18/' + item + '.json').then((r) => r.json()))
		);
		const res = langs.reduce((acc, ite, idx) => {
			acc[ite] = { translation: jsons[idx] };
			return acc
		}, {});
		

		if(localStorage.getItem('language') === null) {
			localStorage.setItem('language', 'en');
		};
		
		const getLang = localStorage.getItem('language');
		console.log(getLang)
		await i18next.init({
			lng: getLang,
			debug: true,
			resources: res
		});
		updateContent();
		i18next.on('languageChanged', () => {
			updateContent();
		});
		const langSelector = document.querySelectorAll('.header__languages-btn');
		langSelector.forEach(lang => {
			lang.addEventListener('click', event => {
				const currentLang = lang.getAttribute('data-lang');
				console.log(currentLang)
				i18next.changeLanguage(currentLang);
				localStorage.setItem('language', currentLang);
			})
		})
	}
	i18Loader();

}