<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let option = '';

	function handleAddOption(e) {
		dispatch('add-option', option);
		option = '';
	}
</script>

<div class="flex items-end">
	<label class="label">
		<span>Add an option </span>
		<input class="input" type="text" bind:value={option} />
	</label>
	<button class="btn variant-ghost-secondary" on:click={handleAddOption}> Submit</button>
</div>
