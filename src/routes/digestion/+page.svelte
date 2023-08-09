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

	async function handleSubmit() {
		const response = await fetch('https://phlawless.eu.pythonanywhere.com/api/digestion/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({ notes, date_time: date })
		});
		const data = await response.json();

		for (let i = 0; i < values.length; i++) {
			const res = await fetch(`https://phlawless.eu.pythonanywhere.com/api/digestion_choice/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					text: values[i],
					digestion: data.id
				})
			});
		}
	}
	function handleChangeNotes(e) {
		notes = e.target.value;
	}

	function handleChangeDate(e) {
		date = e.target.value;
	}
</script>

<div class="card variant-glass-tertiary flex flex-col gap-2 p-4 md:grid md:grid-cols-2 md:gap-4">
	<div class="col-span-2 card variant-glass-tertiary p-4">
		<ChoiceGrid on:select={handleSelect} label="Digestion" {icons} {labels} />
	</div>

	<NotesInput on:change={handleChangeNotes} />
	<Datestamp on:change={handleChangeDate} />
	<button class="col-span-2 btn variant-filled-warning w-full" on:click={handleSubmit}
		>Submit</button
	>
</div>
