<script>
	import NotesInput from '../components/widgets/notesInput.svelte';
	import Datestamp from '../components/widgets/datestamp.svelte';
	import OptionWithAdd from '../components/widgets/optionWithAdd.svelte';

	let options = ['Meatballs + Cranberry', 'Cornflakes + Raisins'];
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4">
		<OptionWithAdd {options} label="food" />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<NotesInput label="Write notes" />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<Datestamp label="date/time" />
	</div>
</div>
