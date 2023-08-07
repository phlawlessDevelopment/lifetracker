<script>
	let datestamp = new Date();
</script>

<label class="label">
	<span>Change date</span>
	<input class="input" type="datetime-local" bind:value={datestamp} />
</label>
