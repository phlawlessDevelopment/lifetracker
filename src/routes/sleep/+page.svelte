<script>
	import RangeSlider from '../../components/widgets/rangeSlider.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import Datestamp from '../../components/widgets/datestamp.svelte';

	import { SleepStore } from '../../stores';

	let times = [...$SleepStore];

	function addNewTime(e) {
		SleepStore.update((s) => [
			...s,
			{
				min: new Date(),
				max: new Date(),
				lowerVal: new Date(),
				upperVal: new Date()
			}
		]);
		times = [...$SleepStore];
	}

	function handleChangeRange(e) {
		const newData = e.detail;
		const idx = newData.idx;
		delete newData.idx;
		times = times.toSpliced(idx, 0, newData);
	}
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4 flex flex-col gap-2">
		<button class="btn variant-filled-tertiary" on:click={addNewTime}>New</button>
		{#each times as time, i}
			<div class="card variant-glass-tertiary p-4 flex flex-col gap-2">
				<RangeSlider on:changed={handleChangeRange} idx={i} />
			</div>
		{/each}
	</div>

	<div class="card variant-glass-tertiary p-4">
		<NotesInput />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<Datestamp />
	</div>

	<div class="card variant-glass-tertiary p-4">
		<button class="btn variant-filled-warning w-full" on:click={handleSubmit}>Submit</button>
	</div>
</div>
