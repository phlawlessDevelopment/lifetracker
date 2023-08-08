<script>
	import Select from '../select.svelte';
	import AddOptionInput from '../addOptionInput.svelte';
	export let label;
	export let store;
	let options;
	store.subscribe((s) => (options = [...s]));
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4">
		<Select label={'Select a ' + label} {options} on:change />
		<AddOptionInput {label} {store} />
		<slot />
	</div>
</div>
