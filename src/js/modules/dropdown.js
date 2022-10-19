export default function dropdownMenu() {
	const dropdownContainer = document.querySelector('.dropdown');
	const select = document.querySelector(".dropdown__select");
	const selectedName = document.getElementById("selected-name");
	const options = document.querySelectorAll('.dropdown__item');
	if (dropdownContainer) {
		selectedName.value = 'All'
		select.addEventListener('click', (event) => {
			dropdownContainer.classList.toggle('active');
		});

		options.forEach((event) => {
			event.addEventListener("click", () => {
				selectedName.value = event.innerText;
				dropdownContainer.classList.remove("active");
					// options.forEach((e) => {
					// 		e.classList.remove("selected");
					// });
					// event.classList.add("selected");
			});
	});

	}
}