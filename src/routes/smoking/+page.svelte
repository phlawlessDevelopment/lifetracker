<script>
	import Counter from '../../components/widgets/counter.svelte';
	import Number from '../../components/widgets/number.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import Datestamp from '../../components/widgets/datestamp.svelte';
	import { SmokeCountStore, UserStore } from '../../stores';

	let notes = '';
	let date = new Date();
	let weight = 0;

	async function handleSubmit() {
		const response = await fetch('https://phlawless.eu.pythonanywhere.com/api/smoking/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${$UserStore.token}`
			},

			body: JSON.stringify({ notes, date_time: date, weight, count: $SmokeCountStore })
		});
	}

	function handleChangeNotes(e) {
		notes = e.target.value;
	}

	function handleChangeDate(e) {
		date = e.target.value;
	}

	function handleChangeNumber(e) {
		weight = e.target.value;
	}
</script>

<div class="card variant-glass-tertiary flex flex-col gap-2 p-4 md:grid md:grid-cols-2 md:gap-4">
	<Counter label="Daily count" />
	<Number on:change={handleChangeNumber} label="Weight (g)" />
	<NotesInput on:change={handleChangeNotes} />
	<Datestamp on:change={handleChangeDate} />
	<button class="col-span-2 btn variant-filled-warning w-full" on:click={handleSubmit}
		>Submit</button
	>
</div>
