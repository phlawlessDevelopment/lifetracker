<script>
	export let label;
</script>

<label class="label">
	<span>{label}</span>
	<textarea class="textarea" rows="4" placeholder={`${label}...`} />
</label>
