<script lang="ts">
	import '../styles/main.scss';
	import TheHeader from '../components/TheHeader.svelte';
	import CounterCTA from '../components/CounterCTA.svelte';

	let { children } = $props();
	export const ssr = false;
</script>

<div class="app">
	<TheHeader>
		<CounterCTA />
	</TheHeader>
	<main>
		{@render children()}
	</main>
</div>

<style>
	.header {
		display: flex;
		line-height: 1.5;
	}

	nav {
		width: 100%;
		text-align: center;
	}

	nav a.router-link-exact-active {
		color: var(--color-text);
	}

	nav a.router-link-exact-active:hover {
		background-color: transparent;
	}

	nav a {
		display: inline-block;
		padding: 0 1rem;
		border-left: 1px solid var(--color-border);
	}

	nav a:first-of-type {
		border: 0;
	}

	@media (min-width: 1024px) {
		nav {
			font-size: 1rem;
			padding: 1rem;
		}
	}
</style>
