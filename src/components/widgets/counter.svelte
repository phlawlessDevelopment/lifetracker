<script>
	export let label;
	let count = 0;
</script>

<label class="label">
	<span>{label}</span>
	<div class="flex gap-6">
		<button class="btn-icon" on:click={() => count++}>
			<iconify-icon class="h1" icon="mdi:arrow-up-bold-circle" />
		</button>
		<h1 class="h1">{count}</h1>
		<button class="btn-icon" on:click={() => count--}>
			<iconify-icon class="h1" icon="mdi:arrow-down-bold-circle" />
		</button>
	</div>
</label>
