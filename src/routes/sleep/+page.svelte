<script>
	import RangeSlider from '../../components/widgets/rangeSlider.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import Datestamp from '../../components/widgets/datestamp.svelte';

	import { SleepRangeStore, SleepStore } from '../../stores';

	let times = [];
	let today = new Date();
	let date = new Date();
	let notes;

	SleepRangeStore.subscribe((s) => {
		times = [...s];
	});

	function addNewTime(e) {
		SleepRangeStore.update((s) => [
			...s,
			{
				lowerVal: today.getTime(),
				upperVal: today.getTime()
			}
		]);
	}

	function handleChangeRange(e) {
		const newData = e.detail;
		const idx = newData.idx;
		delete newData.idx;
		SleepRangeStore.set(times.toSpliced(idx, 1, newData));
	}
	function handleRemove(e) {
		const idx = e.detail;
		SleepRangeStore.set(times.toSpliced(idx, 1));
	}
	function handleSubmit() {
		SleepStore.update((f) => [...f, { times, notes, date }]);
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
	<div class="card variant-glass-tertiary p-4 flex flex-col gap-2">
		<button class="btn variant-filled-tertiary" on:click={addNewTime}>New</button>
		{#each times as time, i}
			<div class="card variant-glass-tertiary p-4 flex flex-col gap-2">
				<RangeSlider
					lowerVal={time.lowerVal}
					upperVal={time.upperVal}
					on:change={handleChangeRange}
					on:remove={handleRemove}
					idx={i}
				/>
			</div>
		{/each}
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
