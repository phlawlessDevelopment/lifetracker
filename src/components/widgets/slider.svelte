<script>
	import { RangeSlider } from '@skeletonlabs/skeleton';
	export let label = '';
	let value = 1;
</script>

{label}
<RangeSlider name="range-slider" bind:value max={25} step={1} ticked />
