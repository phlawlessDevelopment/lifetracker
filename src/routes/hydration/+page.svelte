<script>
	import { bind } from 'svelte/internal';
	import OptionWithAdd from '../../components/widgets/optionWithAdd.svelte';
	import RangeSlider from '../../components/widgets/rangeSlider.svelte';
	import Slider from '../../components/widgets/slider.svelte';
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
		<OptionWithAdd label="drink" {options} bind:value on:change={handleChange} />
	</div>
	<Slider label={value} />
</div>
