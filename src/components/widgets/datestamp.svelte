<script>
	let datestamp = new Date();
</script>

<label class="label">
	<input class="input" type="datetime-local" bind:value={datestamp} on:change />
</label>
