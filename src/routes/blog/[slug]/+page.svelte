<script lang="ts">
	import { P } from 'flowbite-svelte';

	type Data = {
		title: string;
		text: string;
		slug: string;
	};

	export let data: Data;
</script>

<P size="lg">
	your choice is {data.title}
</P>

<h2>
	<a href="/blog"> go home you're drunk</a>
</h2>
