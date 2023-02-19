export default function formSend() {
	const form = document.querySelector('.interested__form');
	const popup = document.querySelector('.interested__popup');

	if(form) {
		async function handleSubmit(event) {
			event.preventDefault();
			let data = new FormData(event.target)
			fetch(event.target.action, {
				method: form.method,
				body: data,
				headers: {
					'Accept': 'application/json'
				}
			}).then(response => {
				if(response.ok) {
					popup.innerHTML = "Thanks for your subb!";
					form.reset();
					setTimeout(() => {popup.innerHTML = ''}, 2000);
				} else {
					response.json().then(data => {
						if(Object.hasOwn(data, 'errors')) {
							popup.innerHTML = data['errors'].map(error => error['message']).join(', ')
						} else {
							popup.innerHTML = "Oops! There was a problem submitting your form"
						}
					})
				}
			}).catch(error => {
				popup.innerHTML = "Oops! There was a problem submitting your form"
				setTimeout(() => {popup.innerHTML = ''}, 2000)
			});
		}
		form.addEventListener('submit', handleSubmit)
	}
}