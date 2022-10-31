export default function changePositionDiv() {
	const getTitleBlockOnPost = document.querySelector('.article-post__content');
	const getParentBlockOnPost = document.querySelector('.article-post__head');

	if (getParentBlockOnPost) {
		if (window.innerWidth <= 768) {
			getParentBlockOnPost.insertAdjacentElement('afterend', getTitleBlockOnPost);
		} else {
			getParentBlockOnPost.insertAdjacentElement('afterbegin', getTitleBlockOnPost);
		}
	}
}