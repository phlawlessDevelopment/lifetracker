<script>
	export let options = [];
	export let label;
</script>

<label class="label">
	<span>{label}</span>
	<select class="select" on:change>
		{#each options as option, i}
			<option value={i}>{option}</option>
		{/each}
	</select>
</label>
