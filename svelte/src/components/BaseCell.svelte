<script lang="ts">
	interface Props {
		msg: number;
	}

	let { msg }: Props = $props();
</script>

<td>
	{msg}
</td>
