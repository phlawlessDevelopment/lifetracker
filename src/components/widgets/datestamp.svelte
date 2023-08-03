<script>
	export let label;
	let datestamp = new Date();
</script>

<label class="label">
	<span>{label}</span>
	<input class="input" type="datetime-local" bind:value={datestamp} />
</label>
