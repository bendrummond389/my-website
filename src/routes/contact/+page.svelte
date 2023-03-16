<script lang="ts">
	import { onMount } from 'svelte';
	import emailjs from 'emailjs-com';

	let name = '';
	let email = '';
	let message = '';

	const handleSubmit = async (event: Event) => {
		event.preventDefault();

		const serviceId =
			import.meta.env.VITE_EMAIL_SERVICE ||
			'defaultService';
		const templateId =
			import.meta.env.VITE_EMAIL_TEMPLATE_ID ||
			'defaultTemplate';
		const userId = import.meta.env
			.VITE_EMAIL_USER;

		try {
			await emailjs.send(
				serviceId,
				templateId,
				{
					from_name: name,
					from_email: email,
					message,
				},
				userId
			);

			console.log('Email sent successfully!');
			// Optionally show a success message to the user
		} catch (error) {
			console.error(
				'Error sending email:',
				error
			);
			// Optionally show an error message to the user
		}
	};

	onMount(() => {
		emailjs.init(
			import.meta.env.VITE_EMAIL_USER || ''
		);
	});
</script>

<form on:submit={handleSubmit}>
	<label for="name">Name:</label>
	<input
		type="text"
		id="name"
		bind:value={name}
		required
	/>

	<label for="email">Email:</label>
	<input
		type="email"
		id="email"
		bind:value={email}
		required
	/>

	<label for="message">Message:</label>
	<textarea
		id="message"
		bind:value={message}
		required
	/>

	<button type="submit">Send Message</button>
</form>
