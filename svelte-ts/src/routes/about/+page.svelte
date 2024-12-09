<script lang="ts">
	import { doubleCount } from '../../store/counter'
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
	<h1>This is an about page</h1>
	<p>{ $doubleCount }</p>
</div>
