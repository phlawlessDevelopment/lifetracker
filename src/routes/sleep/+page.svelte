<script>
	import RangeSlider from '../../components/widgets/rangeSlider.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import Datestamp from '../../components/widgets/datestamp.svelte';
	import { clipboard } from '@skeletonlabs/skeleton';

	/* Sleep double-slider start - end persist add new slider notes date submit */

	let times = [0];

	function addNewTime() {
		times = [...times, 0];
	}
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4 flex flex-col gap-2">
		<button class="btn variant-filled-tertiary" on:click={addNewTime}>New</button>
		{#each times as t}
			<div class="card variant-glass-tertiary p-4 flex flex-col gap-2">
				<RangeSlider />
			</div>
		{/each}
	</div>

	<div class="card variant-glass-tertiary p-4">
		<NotesInput />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<Datestamp />
	</div>
</div>
