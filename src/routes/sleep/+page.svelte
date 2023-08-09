<script>
	import RangeSlider from '../../components/widgets/rangeSlider.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import Datestamp from '../../components/widgets/datestamp.svelte';

	import { SleepRangeStore, SleepStore } from '../../stores';

	let times = [];
	let today = new Date();
	let date = new Date();
	let notes = '';

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
	async function handleSubmit() {
		SleepStore.update((f) => [...f, { times, notes, date }]);
		console.log(JSON.stringify({ notes, date_time: date }))
		const response = await fetch('https://phlawless.eu.pythonanywhere.com/api/sleep/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({ notes, date_time: date })
		});
		let data = await response.json();
		for (let i = 0; i < times.length; i++) {
			fetch('https://phlawless.eu.pythonanywhere.com/api/sleep_range/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},

				body: JSON.stringify({
					sleep: data.id,
					from_time: times[i].lowerVal,
					to_time: times[i].upperVal
				})
			});
		}
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
	<div class="col-span-2 flex flex-col gap-2">
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

	<NotesInput on:change={handleChangeNotes} />
	<Datestamp on:change={handleChangeDate} />

	<button class="btn variant-filled-warning w-full col-span-2" on:click={handleSubmit}
		>Submit</button
	>
</div>
