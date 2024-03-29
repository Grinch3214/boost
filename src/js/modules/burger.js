export default function burgerMenu() {
	const burger = document.querySelector('.burger');
	const navigation = document.getElementById('navigation');
	const links = document.querySelectorAll('.header__item-link');
	// popup languages
	const headerLanguages = document.querySelector('.header__languages');
	const headerButtonLang = document.querySelector('.header__buttons-lang');
	const overlayLang = document.querySelector('.lang-overlay');
	const closePopUpLang = document.querySelector('.close-lang');
	const headerLangButtons = document.querySelectorAll('.header__languages-btn');

	burger.addEventListener('click', function(e) {
		burger.classList.toggle('active');
		navigation.classList.toggle('show');
		headerLanguages.classList.remove('active');
		if (window.innerWidth <= 768) {
			// headerButtonLang.querySelector('span').innerHTML = `${oldTxt[0]}`;
			removeHiddenClassForLanguages();
		}
	});

	links.forEach(item => {
		item.addEventListener('click', (event) => {
			if(burger.classList.contains('active') && navigation.classList.contains('show')) {
				burger.classList.remove('active');
				navigation.classList.remove('show');
			}
		})
	});

	// Save language text for button
	let oldTxt = [];
	let textStorage = headerButtonLang.querySelector('span');
	oldTxt.push(textStorage.innerText);

	// function for popup event
	function popUpLanguages() {
		headerButtonLang.addEventListener('click', (event) => {
			headerLanguages.classList.add('active');
			if (window.innerWidth <= 768) {
				// headerButtonLang.querySelector('span').innerHTML = 'SELECT YOUR LANGUAGE';
				headerButtonLang.classList.add('hidden')
			}
		});
	};
	popUpLanguages();

	// function for popup event 768+
	function removeClassForLanguages() {
		headerLanguages.classList.remove('active');
	};
	function removeHiddenClassForLanguages() {
		headerButtonLang.classList.remove('hidden');
	};
	
	overlayLang.addEventListener('click', () => {
		removeClassForLanguages();
		removeHiddenClassForLanguages();
	});
	closePopUpLang.addEventListener('click', () => {
		removeClassForLanguages();
		removeHiddenClassForLanguages();
	});
	headerLangButtons.forEach(btn => {
		btn.addEventListener('click', (event) => {
			event.preventDefault();
			removeClassForLanguages();
			removeHiddenClassForLanguages();
		});
	})
}