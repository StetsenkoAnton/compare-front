<script lang="ts" module>
	const cols = [...Array(100)]
	const rows = [...Array(100)]
</script>

<script lang="ts">
import BaseCell from './BaseCell.svelte';
import { doubleCount } from '../store/counter'
</script>

<table>
	<thead>
	<tr>
		{#each cols as _, i (i)}
			<th>{ i }</th>
		{/each}
	</tr>
	</thead>
	<tbody>
		{#each rows as _, rowN (rowN)}
			<tr>
			{#each cols as _, cellN (cellN)}
				<BaseCell
					msg={rowN % 3 ? cellN : cellN * $doubleCount}
				/>
			{/each}
			</tr>
		{/each}
	</tbody>
</table>
