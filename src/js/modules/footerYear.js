export default function setYearOnFooter() {
	let footerReserved = document.querySelector('.footer__reserved--year');
	const currentYear = new Date().getFullYear();
	
	if(footerReserved) {
		footerReserved.innerHTML = `Boosteroid ${currentYear}.`;
	}
}