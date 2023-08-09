<script>
	import Select from '../select.svelte';
	import AddOptionInput from '../addOptionInput.svelte';
	export let label;
	export let store;
	let options;
	store.subscribe((s) => (options = [...s]));
</script>

<div class="flex flex-col gap-2 p-2">
	<div class="card variant-glass-tertiary p-2">
		<Select label={'Select a ' + label} {options} on:change />
		<AddOptionInput {label} {store} />
		<slot />
	</div>
</div>
