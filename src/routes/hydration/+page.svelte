<script>
	import OptionWithAdd from '../../components/widgets/optionWithAdd.svelte';
	import Slider from '../../components/widgets/slider.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import DateStamp from '../../components/widgets/datestamp.svelte';
	import { DrinkOptionsStore, HydrationStore, MesurementOptionsStore } from '../../stores';

	let selectedSize = $MesurementOptionsStore[0];
	let selectedDrink = $DrinkOptionsStore[0];
	let notes;
	let amount;
	let date = new Date();

	function handleChangeSize(e) {
		selectedSize = $MesurementOptionsStore[e.target.value];
	}
	function handleChangeDrink(e) {
		selectedDrink = $DrinkOptionsStore[e.target.value];
	}
	function handleChangeAmount(e) {
		amount = e.target.value;
	}

	function handleSubmit() {
		HydrationStore.update((h) => [
			...h,
			{ drink: selectedDrink, mesurement: selectedSize, amount, notes, date }
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
		<OptionWithAdd label="drink" on:change={handleChangeDrink} store={DrinkOptionsStore}>
			<OptionWithAdd label="mesurement" on:change={handleChangeSize} store={MesurementOptionsStore}>
				<Slider bind:label={selectedSize} on:change={handleChangeAmount} />
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
