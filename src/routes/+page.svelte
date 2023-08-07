<script>
	import NotesInput from '../components/widgets/notesInput.svelte';
	import Datestamp from '../components/widgets/datestamp.svelte';
	import OptionWithAdd from '../components/widgets/optionWithAdd.svelte';
	import { FoodStore } from '../stores';

	let options = ['Meatballs + Cranberry', 'Cornflakes + Raisins'];
	let food = options[0];
	let notes;
	let date = new Date();

	function handleSubmit() {
		FoodStore.update((f) => [...f, { food, notes, date }]);
	}
	function handleChangeSelect(e) {
		food = e.target.value;
	}
	function handleChangeNotes(e) {
		console.log(e);
		notes = e.target.value;
	}

	function handleChangeDate(e) {
		date = e.target.value;
	}
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4">
		<OptionWithAdd {options} label="food" on:change={handleChangeSelect} />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<NotesInput label="Write notes" on:change={handleChangeNotes} />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<Datestamp on:change={handleChangeDate} />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<button class="btn variant-filled-warning w-full" on:click={handleSubmit}>Submit</button>
	</div>
</div>
