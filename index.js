/**
 * @date: 2025/11/17
 * @description: Frontend Mentor | FAQ accordion
 */

// Get all FAQ question buttons
const faqButtons = document.querySelectorAll(".faq__question");

faqButtons.forEach((button) => {
	button.addEventListener("click", () => {
		faqButtons.forEach((btn) => {
			// close open buttons w/n another is clicked
			btn.addEventListener("click", () => {
				faqButtons.forEach((otherBtn) => {
					if (otherBtn !== btn) {
						const otherAnswer = otherBtn.nextElementSibling;
						const otherPlusIcon = otherBtn.querySelector(".faq__icon--plus");
						const otherMinusIcon = otherBtn.querySelector(".faq__icon--minus");

						otherAnswer.style.display = "none";
						otherPlusIcon.style.display = "block";
						otherMinusIcon.style.display = "none";
					}
				});
			});
		});

		// display Selected button text
		const answer = button.nextElementSibling;
		const plusIcon = button.querySelector(".faq__icon--plus");
		const minusIcon = button.querySelector(".faq__icon--minus");

		// display button text on 1st click & close on second click
		if (answer.style.display === "block") {
			answer.style.display = "none";
			plusIcon.style.display = "block";
			minusIcon.style.display = "none";
		} else {
			answer.style.display = "block";
			plusIcon.style.display = "none";
			minusIcon.style.display = "block";
		}
	});
});
