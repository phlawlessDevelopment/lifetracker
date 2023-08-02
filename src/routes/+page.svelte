<script>
	import AddOptionInput from '../components/widgets/addOptionInput.svelte';
	import NotesInput from '../components/widgets/notesInput.svelte';
	import RangeSlider from '../components/widgets/rangeSlider.svelte';
	import Select from '../components/widgets/select.svelte';
	let options = ['Meatballs + Cranberry', 'Cornflakes + Raisans'];
	function handleAddOption(e) {
		options = [...options, e.detail];
	}
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4">
		<NotesInput label="Write notes" />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<Select label="Select food" {options} />
		<AddOptionInput on:add-option={handleAddOption} />
	</div>

	<div class="card variant-glass-tertiary p-4">
		<RangeSlider label="Range slider" />
	</div>
</div>
