<!-- Import necessary dependencies -->
<script lang="ts">
	import '../app.postcss'; // Import CSS file
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
	} from 'flowbite-svelte'; // Import navbar components from Flowbite-Svelte
	import { writable } from 'svelte/store'; // Import writable store from Svelte
	import { page } from '$app/stores'; // Import page store from Svelte

	// Define a type for the currently active navigation item
	type ActiveNavLi =
		| ''
		| 'resume'
		| 'blog'
		| 'contact';

	// Create a writable store to hold the currently active navigation item
	const activeNavLi = writable('');

	// Set the activeNavLi store based on the current page route
	if ($page.route.id?.replace('/', '') != null) {
		activeNavLi.set(
			$page.route.id?.replace('/', '')
		);
	}

	// Define a function to update the activeNavLi store based on user click
	function handleClick(navLi: ActiveNavLi) {
		activeNavLi.set(navLi);
	}
</script>

<!-- Define the navbar component with various navigation links -->
<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<!-- Branding text -->
		<span
			class="whitespace-nowrap text-xl font-semibold dark:text-white"
		>
			Ben Drummond
		</span>
	</NavBrand>

	<!-- Hamburger icon for mobile screens -->
	<NavHamburger on:click={toggle} />

	<NavUl {hidden}>
		<!-- Define the navigation links with their corresponding href, active state, and click function -->
		<NavLi
			href="/"
			active={$activeNavLi === ''}
			on:click={() => handleClick('')}
		>
			Home
		</NavLi>
		<NavLi
			href="/resume"
			active={$activeNavLi === 'resume'}
			on:click={() => handleClick('resume')}
		>
			Resume
		</NavLi>
		<NavLi
			href="/blog"
			active={$activeNavLi === 'blog'}
			on:click={() => handleClick('blog')}
		>
			Blog
		</NavLi>
		<NavLi
			href="/contact"
			active={$activeNavLi === 'contact'}
			on:click={() => handleClick('contact')}
		>
			Contact
		</NavLi>
	</NavUl>
</Navbar>

<!-- Render the main content of the website -->
<slot />
