export default function partnerPageAccordion() {
  const accordion = document.querySelectorAll('.readon__box-title');

	accordion.forEach((elem, id) => {
		elem.addEventListener("click", function (event) {
				let list = this.nextElementSibling;
				if (!list.style.maxHeight) {
					elem.classList.add('active');
					list.style.maxHeight = list.scrollHeight + "px";
				} else {
					elem.classList.remove('active');
					list.style.maxHeight = null;
				}
				removeActiveAccordion(id)
		});
	});

	function removeActiveAccordion(inx) {
		accordion.forEach((element, index) => {
			if(inx != index) {
				let lst = element.nextElementSibling;
				element.classList.remove('active');
				lst.style.maxHeight = null;
			}
		})
	}

};