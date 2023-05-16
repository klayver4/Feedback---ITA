const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const feedback = document.querySelector('#feedback').value;

	console.log(`Nome: ${name}`);
	console.log(`Email: ${email}`);
	console.log(`Feedback: ${feedback}`);

	form.reset();
});