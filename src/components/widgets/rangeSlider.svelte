<script>
	import { createEventDispatcher } from 'svelte';
	import { SleepRangeStore } from '../../stores';

	export let idx;
	export let lowerVal;
	export let upperVal;

	let dispatch = createEventDispatcher();
	let min = lowerVal - 12 * 60 * 60 * 1000;
	let max = upperVal + 12 * 60 * 60 * 1000;

	$: lowerDisplay = new Date(lowerVal).toLocaleTimeString();
	$: upperDisplay = new Date(upperVal).toLocaleTimeString();

	handleLower();
	handleUpper();

	function handleUpper() {
		if (upperVal < lowerVal + 1) {
			lowerVal = upperVal - 1;
		}

		dispatch('change', {
			idx,
			min,
			max,
			lowerVal,
			upperVal
		});
	}

	function handleLower() {
		if (lowerVal > upperVal - 1) {
			upperVal = lowerVal + 1;
		}
		dispatch('change', {
			idx,
			min,
			max,
			lowerVal,
			upperVal
		});
	}
	function handleRemove() {
		dispatch('remove', idx);
	}
</script>

<div class="flex flex-col gap-4">
	<div class="w-full flex justify-between">
		<div>From -> To</div>
		<button class="btn-icon" on:click={handleRemove}>
			<iconify-icon class="h3" icon="foundation:x" />
		</button>
	</div>
	<span class="multi-range">
		<input type="range" {min} {max} bind:value={lowerVal} on:input={handleLower} />
		<input type="range" {min} {max} bind:value={upperVal} on:input={handleUpper} />
	</span>
	<div>
		{lowerDisplay} -> {upperDisplay}
		({new Date(upperVal - lowerVal).toLocaleTimeString()})
	</div>
</div>

<style lang="less">
	input[type='range'] {
		box-sizing: border-box;
		appearance: none;
		width: 100%;
		margin: 0;
		padding: 0 2px;
		/* Add some L/R padding to ensure box shadow of handle is shown */
		overflow: hidden;
		border: 0;
		border-radius: 1px;
		outline: none;
		background: linear-gradient(grey, grey) no-repeat center;
		/* Use a linear gradient to generate only the 2px height background */
		background-size: 100% 2px;
		pointer-events: none;

		&:active,
		&:focus {
			outline: none;
		}

		&::-webkit-slider-thumb {
			height: 28px;
			width: 28px;
			border-radius: 28px;
			background-color: #fff;
			position: relative;
			margin: 5px 0;
			/* Add some margin to ensure box shadow is shown */
			cursor: pointer;
			appearance: none;
			pointer-events: all;
			box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.25);
			&::before {
				content: ' ';
				display: block;
				position: absolute;
				top: 13px;
				left: 100%;
				width: 2000px;
				height: 2px;
			}
		}
	}

	.multi-range {
		position: relative;
		height: 50px;

		input[type='range'] {
			position: absolute;

			&:nth-child(1) {
				&::-webkit-slider-thumb::before {
					background-color: red;
				}
			}

			&:nth-child(2) {
				background: none;

				&::-webkit-slider-thumb::before {
					background-color: grey;
				}
			}
		}
	}
</style>
