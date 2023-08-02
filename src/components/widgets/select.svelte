<script>
	export let options = [];
	export let label;
	let selected;
</script>

<label class="label">
	<span>{label}</span>
	<select class="select" bind:value={selected}>
		{#each options as option, i}
			<option value={i}>{option}</option>
		{/each}
	</select>
</label>
