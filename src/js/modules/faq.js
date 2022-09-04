function tabsOnLeftContent() {
  const allQuestions = document.querySelector(".faq__questions");
  const questionItems = document.querySelectorAll(".row-questions__item");
  const answerItems = document.querySelectorAll(".faq__answer");

	if(allQuestions) {
		function hideTabContent() {
			answerItems.forEach((item) => {
				item.style.display = "none";
			});
			questionItems.forEach((item) => {
				item.classList.remove("active");
			});
		}
	
		function showTabContent(i = 0) {
			answerItems[i].style.display = "block";
			questionItems[i].classList.add("active");
		}
	
		if (window.innerWidth >= 768) {
			hideTabContent();
			showTabContent();
		} else {
			answerItems.forEach((item) => {
				item.style = "";
			});
		}
	
		allQuestions.addEventListener("click", (e) => {
			if (window.innerWidth >= 768) {
				const target = e.target;
				if (target) {
					questionItems.forEach((item, i) => {
						if (target == item) {
							hideTabContent();
							showTabContent(i);
						}
					});
				}
			}
		});
	}
}

function accordionOnMobileForFaq() {

	const accordionTitle = document.querySelectorAll('.faq__answer-title');
	const accordionTxt = document.querySelectorAll('.faq__answer-text');
	const accordionFaq = document.querySelector('.faq__answers');

	if(accordionFaq) {
		function showAcordion(inx) {
			if (accordionTitle[inx].classList.contains("active")) {
				accordionTxt.forEach((item) => {
					item.style.maxHeight = null;
				});
				accordionTitle.forEach((item) => {
					item.classList.remove("active");
				});
			} else {
				accordionTxt.forEach((item) => {
					item.style.maxHeight = null;
				});
				accordionTitle.forEach((item) => {
					item.classList.remove("active");
				});
				accordionTxt[inx].style.maxHeight = accordionTxt[inx].scrollHeight + "px";
				accordionTitle[inx].classList.add("active");
			}
		}
	
	
		accordionFaq.addEventListener('click', (event) => {
			if (window.innerWidth <= 768) {
				let targ = event.target;
				if(targ) {
					accordionTitle.forEach((elem, inx) => {
						if (targ === elem) {
							showAcordion(inx);
						}
					})
				}
			}
		});
	};

}

export { tabsOnLeftContent, accordionOnMobileForFaq };
