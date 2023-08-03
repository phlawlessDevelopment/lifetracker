<script>
	import { RangeSlider } from '@skeletonlabs/skeleton';
	let value = 1;
	let label = 'ltr';
</script>

<RangeSlider name="range-slider" bind:value max={25} step={1} ticked>Label</RangeSlider>
