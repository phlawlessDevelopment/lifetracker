<script>
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	export let label;
	export let icons = [];
	export let labels = [];
	let value;
</script>

{label}
<RadioGroup class="flex flex-wrap gap-8" background="" rounded="rounded-xl">
	{#each icons as icon, i}
		<RadioItem bind:group={value} name={label} value={i} active="variant-soft-secondary">
			<div class="flex flex-col items-center gap-2">
				<iconify-icon class="h1" {icon} />
				<span>{labels[i]}</span>
			</div>
		</RadioItem>
	{/each}
</RadioGroup>
