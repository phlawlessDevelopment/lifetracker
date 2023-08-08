<script>
	import RangeSlider from '../../components/widgets/rangeSlider.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import Datestamp from '../../components/widgets/datestamp.svelte';
	import ChoiceGrid from '../../components/widgets/choiceGrid.svelte';
	import { DigestionStore } from '../../stores';

	let labels = ['excited', 'happier', 'happy'];
	let icons = ['healthicons:intestine', 'healthicons:stomach', 'healthicons:vomiting'];
	let values = [];
	let notes;
	let date = new Date();

	function handleSelect(e) {
		values = e.detail;
	}

	function handleSubmit() {
		DigestionStore.update((m) => [...m, { notes, date, values: values.map((v) => labels[v]) }]);
	}
	function handleChangeNotes(e) {
		notes = e.target.value;
	}

	function handleChangeDate(e) {
		date = e.target.value;
	}
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4">
		<ChoiceGrid on:select={handleSelect} label="Digestion" {icons} {labels} />
	</div>

	<div class="card variant-glass-tertiary p-4">
		<NotesInput on:change={handleChangeNotes} />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<Datestamp on:change={handleChangeDate} />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<button class="btn variant-filled-warning w-full" on:click={handleSubmit}>Submit</button>
	</div>
</div>
