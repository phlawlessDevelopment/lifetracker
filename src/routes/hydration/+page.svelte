<script>
	import OptionWithAdd from '../../components/widgets/optionWithAdd.svelte';
	import Slider from '../../components/widgets/slider.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import DateStamp from '../../components/widgets/datestamp.svelte';
	import { DrinkOptionsStore, MesurementOptionsStore } from '../../stores';

	let selectedSize = $MesurementOptionsStore[0];
	let selectedDrink = $DrinkOptionsStore[0];
	let notes = '';
	let amount = 1;
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

	async function handleSubmit() {
		const response = await fetch('https://phlawless.eu.pythonanywhere.com/api/hydration/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${$UserStore}`
			},

			body: JSON.stringify({
				notes,
				date_time: date,
				drink: selectedDrink,
				mesurement: selectedSize,
				amount
			})
		});
	}
	function handleChangeNotes(e) {
		console.log(e);
		notes = e.target.value;
	}

	function handleChangeDate(e) {
		date = e.target.value;
	}
</script>

<div
	class="card variant-glass-tertiary flex flex-col gap-2 p-2 md:grid md:grid-cols-2 md:gap-4 md:p-4"
>
	<div class="col-span-2">
		<OptionWithAdd label="drink" on:change={handleChangeDrink} store={DrinkOptionsStore}>
			<OptionWithAdd label="mesurement" on:change={handleChangeSize} store={MesurementOptionsStore}>
				<Slider bind:label={selectedSize} on:change={handleChangeAmount} />
			</OptionWithAdd>
		</OptionWithAdd>
	</div>
	<NotesInput on:change={handleChangeNotes} />
	<DateStamp />
	<button class="btn variant-filled-warning w-full col-span-2" on:click={handleSubmit}
		>Submit</button
	>
</div>
