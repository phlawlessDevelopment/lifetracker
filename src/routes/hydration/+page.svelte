<script>
	import { bind } from 'svelte/internal';
	import OptionWithAdd from '../../components/widgets/optionWithAdd.svelte';
	import RangeSlider from '../../components/widgets/rangeSlider.svelte';
	import Slider from '../../components/widgets/slider.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import DateStamp from '../../components/widgets/datestamp.svelte';

	let drinkOptions = ['Ribena', 'Ovaltine', 'Milk'];
	let sizeOptions = ['Pint', 'Mug'];
	let selectedMesurement = sizeOptions[0].toLowerCase();

	function handleAddDrinkOption(e) {
		if (e.detail.length < 1) return;
		drinkOptions = [...drinkOptions, e.detail];
	}

	function handleAddSizeOption(e) {
		if (e.detail.length < 1) return;
		sizeOptions = [...sizeOptions, e.detail];
	}

	function handleChangeMesurnement(e) {
		selectedMesurement = sizeOptions[e.target.value].toLowerCase();
	}
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4">
		<OptionWithAdd label="drink" options={drinkOptions} on:add-option={handleAddDrinkOption}>
			<OptionWithAdd
				label="mesurement"
				options={sizeOptions}
				on:add-option={handleAddSizeOption}
				on:change={handleChangeMesurnement}
			>
				<Slider bind:label={selectedMesurement} />
			</OptionWithAdd>
		</OptionWithAdd>
	</div>
	<div class="card variant-glass-tertiary p-4">
		<NotesInput />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<DateStamp />
	</div>
</div>
