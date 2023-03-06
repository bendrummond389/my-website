<!-- Import necessary dependencies -->
<script lang="ts">
	import '../app.postcss';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
	} from 'flowbite-svelte';
	import { writable } from 'svelte/store';

	// Create a writable store to hold the currently active navigation item
	const activeNavLi = writable(null);

	// Define a function to update the activeNavLi store based on user click
	function handleClick(navLi) {
		activeNavLi.set(navLi);
	}
</script>

<!-- Define the navbar component with various navigation links -->
<Navbar let:hidden let:toggle>
	<NavBrand href="/">
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
			active={$activeNavLi === 'home'}
			on:click={() => handleClick('home')}
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
