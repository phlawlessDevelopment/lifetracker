<script>
	import Counter from '../../components/widgets/counter.svelte';
	import Number from '../../components/widgets/number.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import Datestamp from '../../components/widgets/datestamp.svelte';
	import { SmokeCountStore } from '../../stores';

	let notes;
	let date = new Date();
	let weight;

	function handleSubmit() {
		MoodStore.update((m) => [
			...m,
			{
				weight,
				count: $SmokeCountStore,
				notes,
				date,
				values: values.map((v) => labels[v])
			}
		]);
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

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4">
		<Counter label="Daily count" />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<Number on:change={handleChangeNumber} label="Weight (g)" />
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
