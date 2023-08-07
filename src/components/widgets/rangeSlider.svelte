<script>
	import { SleepStore } from '../../stores';

	let min = new Date();
	let max = new Date();
	let lowerVal;
	let upperVal;

	$: lowerDisplay = new Date(lowerVal).toLocaleTimeString();
	$: upperDisplay = new Date(upperVal).toLocaleTimeString();

	SleepStore.subscribe((s) => {
		lowerVal = new Date(s[0]);
		upperVal = new Date(s[1]);
		const today = new Date();
		lowerVal.setDate(today.getDate());
		lowerVal.setMonth(today.getMonth());
		upperVal.setDate(today.getDate());
		upperVal.setMonth(today.getMonth());
		lowerVal = lowerVal.getTime();
		upperVal = upperVal.getTime();
		min = lowerVal - 12 * 60 * 60 * 1000;
		max = upperVal + 12 * 60 * 60 * 1000;
	});

	handleLower();
	handleUpper();

	function handleUpper() {
		if (upperVal < lowerVal + 1) {
			lowerVal = upperVal - 1;
		}
	}

	function handleLower() {
		if (lowerVal > upperVal - 1) {
			upperVal = lowerVal + 1;
		}
	}
</script>

<div class="flex flex-col gap-4">
	<div>From -> To</div>
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
		width: 400px;
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
