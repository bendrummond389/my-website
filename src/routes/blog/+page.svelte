<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import type { Data } from './+page';

	export let data: Data;
</script>

<main class="px-4 py-8">
	<h1 class="text-3xl font-bold mb-4">
		Welcome to My Blog
	</h1>
	<p class="mb-4">
		Lorem ipsum dolor sit amet, consectetur
		adipiscing elit. Sed ac lorem ullamcorper,
		lobortis nulla vitae, bibendum augue. Nulla
		vel risus eget tellus mollis efficitur.
		Phasellus scelerisque mi in lectus cursus, eu
		pulvinar ex molestie.
	</p>

	<h2 class="text-2xl font-bold mb-4">
		Latest Posts
	</h2>

	<ul class="grid grid-cols-3 gap-6">
		{#each data.posts as post}
			<Card>
				<div class="grid w-1/2">
					<a href={`/blog/${post.slug}`}>
						{post.title}
					</a>
				</div>
			</Card>
		{/each}
	</ul>
</main>
