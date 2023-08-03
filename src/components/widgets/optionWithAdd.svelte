<script>
	import Select from '../select.svelte';
	import AddOptionInput from '../addOptionInput.svelte';

	export let label;
	export let options;

	function handleAddOption(e) {
		options = [...options, e.detail];
	}
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4">
		<Select label={'Select a ' + label} {options} />
		<AddOptionInput on:add-option={handleAddOption} on:change {label} />
	</div>
</div>
