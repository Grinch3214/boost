	//? ------ COOKIE main page ------
export default function cookiePopUpBox() {
	const cookie = document.querySelector('.cookie');
	const cookieCloseBtn = document.querySelector('.cookie__close');
	const cookieAllowBtn = document.querySelector('.cookie__btn');
	function cookiePopUp() {
		cookieCloseBtn.addEventListener('click', (event) => {
			cookie.style.display = 'none';
		});
	}
	cookiePopUp();

	function createLocalStorage() {
    cookieAllowBtn.addEventListener('click', (event) => {
			localStorage.setItem('boosteroid', true);
			cookie.style.display = 'none';
		});
	}
	createLocalStorage();

	function checkLocalStorage() {
		let localStg = localStorage.getItem('boosteroid');
		if (localStg) {
			return cookie.style.display = 'none';
		}
	}
	checkLocalStorage();
}