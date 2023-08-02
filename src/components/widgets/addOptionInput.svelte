<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let option = '';

	function handleAddOption() {
		dispatch('add-option', option);
		option = '';
	}
	function handleKeyUp(e) {
		if (e.key !== 'Enter' && e.key !== 'Return') return;
		handleAddOption();
	}
</script>

<div class="flex items-end">
	<label class="label">
		<span>Add an option </span>
		<input class="input" type="text" bind:value={option} on:keyup={handleKeyUp} />
	</label>
	<button class="btn variant-ghost-secondary" on:click={handleAddOption}> Submit</button>
</div>
