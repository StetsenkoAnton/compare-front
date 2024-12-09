<script lang="ts">
	import { page } from '$app/stores';
	let { children } = $props();
</script>

<header class="header">
	<nav>
		<a aria-current={$page.url.pathname === '/' ? 'page' : undefined} href="/">Home</a>
		<a aria-current={$page.url.pathname === '/about' ? 'page' : undefined} href="/about">About</a>
	</nav>
	<div class="header">
		{@render children?.()}
	</div>
</header>

<style>
	.header {
		display: flex;
		line-height: 1.5;
	}

	nav {
		width: 100%;
		text-align: center;
		a {
			display: inline-block;
			padding: 0 1rem;
			border-left: 1px solid var(--color-border);
			&:first-of-type {
				border: 0;
			}
			.router-link-exact-active {
				color: var(--color-text);
				&:hover {
					background-color: transparent;
				}
			}
		}
	}

	@media (min-width: 1024px) {
		nav {
			font-size: 1rem;
			padding: 1rem;
		}
	}
</style>
