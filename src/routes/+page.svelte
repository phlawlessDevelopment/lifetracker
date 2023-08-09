<script>
	import NotesInput from '../components/widgets/notesInput.svelte';
	import Datestamp from '../components/widgets/datestamp.svelte';
	import OptionWithAdd from '../components/widgets/optionWithAdd.svelte';
	import { FoodOptionsStore } from '../stores';

	let meal = $FoodOptionsStore[0];
	let notes = '';
	let date = new Date();

	async function handleSubmit() {
		const response = await fetch('https://phlawless.eu.pythonanywhere.com/api/food/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({ notes, meal, date_time: date })
		});
	}
	function handleChangeSelect(e) {
		meal = e.target.value;
	}
	function handleChangeNotes(e) {
		console.log(e);
		notes = e.target.value;
	}

	function handleChangeDate(e) {
		date = e.target.value;
	}
</script>

<div class="card variant-glass-tertiary flex flex-col gap-2 p-4 md:grid md:grid-cols-2 md:gap-4">
	<div class="col-span-2">
		<OptionWithAdd
			options={$FoodOptionsStore}
			store={FoodOptionsStore}
			label="food"
			on:change={handleChangeSelect}
		/>
	</div>
	<NotesInput label="Write notes" on:change={handleChangeNotes} />
	<Datestamp on:change={handleChangeDate} />
	<button class="btn variant-filled-warning w-full col-span-2" on:click={handleSubmit}
		>Submit</button
	>
</div>
