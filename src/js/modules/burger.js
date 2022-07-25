export default function burgerMenu() {
	const burger = document.querySelector('.burger');
	const navigation = document.getElementById('navigation');
	const links = document.querySelectorAll('.header__item-link');

	burger.addEventListener('click', function(e) {
		burger.classList.toggle('active');
		navigation.classList.toggle('show');
	});

	links.forEach(item => {
		item.addEventListener('click', (event) => {
			if(burger.classList.contains('active') && navigation.classList.contains('show')) {
				burger.classList.remove('active');
				navigation.classList.remove('show');
			}
		})
	});

}