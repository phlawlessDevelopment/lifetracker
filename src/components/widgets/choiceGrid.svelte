<script>
	import { createEventDispatcher } from 'svelte';
	export let label;
	export let icons = [];
	export let labels = [];
	let values = [];

	let dispatch = createEventDispatcher();

	function toggleSelection(i) {
		if (values.includes(i)) values = values.filter((v) => v !== i);
		else {
			values = [...values, i];
		}
		dispatch('select', values);
	}
</script>

{label}
<div
	class="flex flex-wrap items-center justify-center gap-2 md:gap-4"
	background=""
	rounded="rounded-xl"
>
	{#each icons as icon, i}
		<button class:variant-ghost-secondary={values.includes(i)} on:click={() => toggleSelection(i)}>
			<div class="flex flex-col items-center gap-2 p-2">
				<iconify-icon class="h1" {icon} />
				<span>{labels[i]}</span>
			</div>
		</button>
	{/each}
</div>
