<script>
	import ChoiceGrid from '../../components/widgets/choiceGrid.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import Datestamp from '../../components/widgets/datestamp.svelte';
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4">
		<ChoiceGrid
			label="Mood"
			icons={[
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
			]}
			labels={[
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
			]}
		/>
	</div>
	<div class="card variant-glass-tertiary p-4">
		<NotesInput label="Write notes" />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<Datestamp />
	</div>
</div>
