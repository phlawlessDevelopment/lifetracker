<script>
	export let label;
	export let store;
	let option = '';

	function handleAddOption() {
		store.update((o) => [...o, option]);
		option = '';
	}
	function handleKeyUp(e) {
		if (e.key !== 'Enter' && e.key !== 'Return') return;
		handleAddOption();
	}
</script>

<div class="flex items-end gap-4">
	<label class="label">
		<span>Add a {label} </span>
		<input class="input" type="text" bind:value={option} on:keyup={handleKeyUp} />
	</label>
	<button class="btn variant-ghost-secondary" on:click={handleAddOption}> Add</button>
</div>
