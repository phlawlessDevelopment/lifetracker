<script>
	import { bind } from 'svelte/internal';
	import OptionWithAdd from '../../components/widgets/optionWithAdd.svelte';
	import RangeSlider from '../../components/widgets/rangeSlider.svelte';
	import Slider from '../../components/widgets/slider.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import DateStamp from '../../components/widgets/datestamp.svelte';

	let options = ['Ribena', 'Ovaltine', 'Milk'];
	let value;

	function handleAddOption(e) {
		options = [...options, e.detail];
	}

	function handleChange(e) {
		value = e.detail;
	}
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4">
		<OptionWithAdd label="drink" {options} bind:value on:change={handleChange}>
			<OptionWithAdd label="mesurement" {options} bind:value>
				<Slider label="Amount" />
			</OptionWithAdd>
		</OptionWithAdd>
	</div>
	<div class="card variant-glass-tertiary p-4">
		<NotesInput />
		<DateStamp />
	</div>
</div>
