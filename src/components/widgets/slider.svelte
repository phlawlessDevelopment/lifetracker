<script>
	import { RangeSlider } from '@skeletonlabs/skeleton';
	export let label = '';
	let value = 1;
</script>

<div class="p-2">
	{`Number of ${label}s ${value}`}
	<RangeSlider name="range-slider" bind:value min={1} max={5} step={0.25} ticked />
</div>
