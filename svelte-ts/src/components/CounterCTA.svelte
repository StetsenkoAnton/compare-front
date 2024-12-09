<script lang="ts">
	import {doubleCount, decrement, increment} from '../store/counter'
</script>

<button type="button" onclick={decrement}>-</button>
<span>{ $doubleCount }</span>
<button type="button" onclick={increment}>+</button>
