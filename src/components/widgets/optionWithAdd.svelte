<script>
	import Select from '../select.svelte';
	import AddOptionInput from '../addOptionInput.svelte';
	export let label;
	export let options;
		
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4">
		<Select label={'Select a ' + label} {options} on:change />
		<AddOptionInput on:add-option {label} />
		<slot />
	</div>
</div>
