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

	const activeNavLi = writable(null);

	function handleClick(navLi) {
		activeNavLi.set(navLi);
	}
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<span
			class="whitespace-nowrap text-xl font-semibold dark:text-white"
		>
			Ben Drummond
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
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

<slot />
