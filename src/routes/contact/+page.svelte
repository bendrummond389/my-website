<script lang="ts">
  import { onMount } from 'svelte';
  import emailjs from 'emailjs-com';
  import { Alert, Input, Label } from 'flowbite-svelte';

  let name = '';
  let email = '';
  let message = '';
  let showAlert = false;

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE || 'defaultService';
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID || 'defaultTemplate';
    const userId = import.meta.env.VITE_EMAIL_USER;

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: name,
        from_email: email,
        message,
      }, userId);

      showAlert = true;
      name = '';
      email = '';
      message = '';
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  onMount(() => {
    emailjs.init(import.meta.env.VITE_EMAIL_USER || '');
  });
</script>

<div class="card mx-auto mt-8 p-8 w-96">
  <form on:submit={handleSubmit} class="w-full">
    <div class="mb-4">
      <Label for="name">Name:</Label>
      <Input type="text" id="name" bind:value={name} required />
    </div>

    <div class="mb-4">
      <Label for="email">Email:</Label>
      <Input type="email" id="email" bind:value={email} required>
        <svg slot="left" aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      </Input>
    </div>

    <div class="mb-4">
      <Label for="message">Message:</Label>
      <textarea id="message" bind:value={message} required />
    </div>

    <button type="submit">Send Message</button>

    {#if showAlert}
      <div class="mt-4">
        <Alert dismissible on:dismiss={() => (showAlert = false)}>
          Message sent successfully!
        </Alert>
      </div>
    {/if}
  </form>
</div>

<style>
	.card {
		background-color: #f8f9fa;
		border-radius: 0.5rem;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
		padding: 2rem;
	}

	textarea {
		border-radius: 0.25rem;
		border: 1px solid #ced4da;
		box-shadow: none;
		padding: 0.5rem;
		width: 100%;
	}

	button[type='submit'] {
		background-color: #007bff;
		border: none;
		border-radius: 0.25rem;
		color: #fff;
		font-size: 1rem;
		font-weight: bold;
		padding: 0.5rem 1rem;
		text-transform: uppercase;
	}

	button[type='submit']:hover {
		background-color: #0069d9;
		cursor: pointer;
	}
</style>
