<script>
	import ChoiceGrid from '../../components/widgets/choiceGrid.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import Datestamp from '../../components/widgets/datestamp.svelte';
	import { MoodStore } from '../../stores';
	let labels = [
		'excited',
		'happier',
		'happy',
		'neutral',
		'confused',
		'frown',
		'sad',
		'angry',
		'sick',
		'cry',
		'dead',
		'poop'
	];
	let icons = [
		'mdi:emoticon-excited',
		'mdi:emoticon',
		'mdi:emoticon-happy',
		'mdi:emoticon-neutral',
		'mdi:emoticon-confused',
		'mdi:emoticon-frown',
		'mdi:emoticon-sad',
		'mdi:emoticon-angry',
		'mdi:emoticon-sick',
		'mdi:emoticon-cry',
		'mdi:emoticon-dead',
		'mdi:emoticon-poop'
	];
	let values = [];
	let notes;
	let date = new Date();

	function handleSelect(e) {
		values = e.detail;
		console.log(values);
	}

	function handleSubmit() {
		MoodStore.update((m) => [...m, { notes, date, values: values.map((v) => labels[v]) }]);
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
		<ChoiceGrid on:select={handleSelect} label="Mood" {icons} {labels} />
	</div>
	<NotesInput on:change={handleChangeNotes} />
	<Datestamp on:change={handleChangeDate} />
	<button class="col-span-2 btn variant-filled-warning w-full" on:click={handleSubmit}
		>Submit</button
	>
</div>
