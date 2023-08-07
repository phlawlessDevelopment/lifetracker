<script>
	import OptionWithAdd from '../../components/widgets/optionWithAdd.svelte';
	import Slider from '../../components/widgets/slider.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import DateStamp from '../../components/widgets/datestamp.svelte';
	import { HydrationStore } from '../../stores';

	let drinkOptions = ['Ribena', 'Ovaltine', 'Milk'];
	let sizeOptions = ['Pint', 'Mug'];
	let selectedSize = sizeOptions[0];
	let selectedDrink = drinkOptions[0];
	let notes;
	let date = new Date();

	function handleAddDrinkOption(e) {
		if (e.detail.length < 1) return;
		drinkOptions = [...drinkOptions, e.detail];
	}

	function handleAddSizeOption(e) {
		if (e.detail.length < 1) return;
		sizeOptions = [...sizeOptions, e.detail];
	}

	function handleChangeSize(e) {
		selectedSize = sizeOptions[e.target.value];
	}
	function handleChangeDrink(e) {
		selectedDrink = drinkOptions[e.target.value];
	}

	function handleSubmit() {
		HydrationStore.update((h) => [
			...h,
			{ drink: selectedDrink, mesurement: selectedSize, notes, date }
		]);
	}
	function handleChangeNotes(e) {
		console.log(e);
		notes = e.target.value;
	}

	function handleChangeDate(e) {
		date = e.target.value;
	}
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="card variant-glass-tertiary p-4">
		<OptionWithAdd
			label="drink"
			options={drinkOptions}
			on:add-option={handleAddDrinkOption}
			on:change={handleChangeDrink}
		>
			<OptionWithAdd
				label="mesurement"
				options={sizeOptions}
				on:add-option={handleAddSizeOption}
				on:change={handleChangeSize}
			>
				<Slider bind:label={selectedSize} />
			</OptionWithAdd>
		</OptionWithAdd>
	</div>
	<div class="card variant-glass-tertiary p-4">
		<NotesInput on:change={handleChangeNotes} />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<DateStamp />
	</div>
	<div class="card variant-glass-tertiary p-4">
		<button class="btn variant-filled-warning w-full" on:click={handleSubmit}>Submit</button>
	</div>
</div>
