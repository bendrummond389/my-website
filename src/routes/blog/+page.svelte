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

	{#each data.posts as post}
		<div class="card">
			<a
				href={`/blog/${post.slug}`}
				class="card__title"
			>
				{post.title}
			</a>
			<p class="card__text">{post.text}</p>
		</div>
	{/each}
</main>

<style>
	.card {
		max-width: 600px;
		padding: 1rem;
		background-color: white;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		border-radius: 0.5rem;
		margin: 0 auto 2rem;
	}

	.card__title {
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 1rem;
	}

	.card__text {
		font-size: 1rem;
		line-height: 1.5;
	}
</style>
