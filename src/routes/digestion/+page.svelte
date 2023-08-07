<script>
	import RangeSlider from '../../components/widgets/rangeSlider.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import Datestamp from '../../components/widgets/datestamp.svelte';
	import ChoiceGrid from '../../components/widgets/choiceGrid.svelte';
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4">
		<ChoiceGrid
			label="Mood"
			icons={['healthicons:intestine', 'healthicons:stomach', 'healthicons:vomiting']}
			labels={['excited', 'happier', 'happy']}
		/>
	</div>

	<div class="card variant-glass-tertiary p-4">
		<NotesInput />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<Datestamp />
	</div>
</div>
