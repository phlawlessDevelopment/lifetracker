<script>
	import Counter from '../../components/widgets/counter.svelte';
	import Number from '../../components/widgets/number.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import Datestamp from '../../components/widgets/datestamp.svelte';
	/* 
  
Smoking
	joint count
	daily weigh-in
	notes
	date
	submit
   */
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4">
		<Counter />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<Number />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<NotesInput />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<Datestamp />
	</div>
</div>
