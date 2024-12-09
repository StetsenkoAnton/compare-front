<script lang="ts">
	import {Link} from "svelte-navigator";
	let { children } = $props();
</script>

<header class="header">
	<nav>
		<Link to="">Home</Link>
		<Link to="about">About</Link>
	</nav>
	<div class="header">
		{@render children?.()}
	</div>
</header>

<style lang="scss">
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
			&:hover {
				background-color: transparent;
			}
			.router-link-exact-active {
				color: var(--color-text);

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
