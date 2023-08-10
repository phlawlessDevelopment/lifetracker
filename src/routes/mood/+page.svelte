<script>
	import ChoiceGrid from '../../components/widgets/choiceGrid.svelte';
	import NotesInput from '../../components/widgets/notesInput.svelte';
	import Datestamp from '../../components/widgets/datestamp.svelte';
	import { UserStore } from '../../stores';


	let labels = [
		'joy',
		'sadness',
		'anger',
		'fear',
		'love',
		'guilt',
		'shame',
		'anxiety',
		'envy',
		'frustration',
		'irritation',
		'hope',
		'disgust',
		'affection',
		'longing',
		'empathy',
		'compassion',
		'relief',
		'regret',
		'remorse',
		'nervousness',
		'apprehension',
		'panic',
		'surprise',
		'curiosity',
		'excitement',
		'anticipation'
	];
	let icons = [
'twemoji:face-with-tears-of-joy',
'twemoji:frowning-face',
'twemoji:angry-face',
'twemoji:fearful-face',
'twemoji:smiling-face-with-hearts',
'twemoji:persevering-face',
'twemoji:flushed-face',
'twemoji:downcast-face-with-sweat',
'twemoji:face-with-rolling-eyes',
'twemoji:face-with-steam-from-nose',
'twemoji:enraged-face',
'twemoji:smiling-face-with-sunglasses',
'twemoji:face-vomiting',
'twemoji:smiling-face-with-heart-eyes',
'twemoji:face-with-peeking-eye',
'twemoji:face-holding-back-tears',
'twemoji:people-hugging',
'twemoji:face-exhaling',
'twemoji:tired-face',
'twemoji:face-with-open-eyes-and-hand-over-mouth',
'twemoji:grimacing-face',
'twemoji:pleading-face',
'twemoji:confounded-face',
'twemoji:astonished-face',
'twemoji:thinking-face',
'twemoji:partying-face',
'twemoji:shushing-face'
	
	];
	let values = [];
	let notes = '';
	let date = new Date();

	function handleSelect(e) {
		values = e.detail;
	}

	async function handleSubmit() {
		const response = await fetch('https://phlawless.eu.pythonanywhere.com/api/mood/', {
			method: 'POST',
			headers: {
				Authorization: `Token ${$UserStore.token}`,
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({ notes, date_time: date })
		});
		const data = await response.json();

		for (let i = 0; i < values.length; i++) {
			const res = await fetch(`https://phlawless.eu.pythonanywhere.com/api/mood_choice/`, {
				method: 'POST',
				headers: {
					Authorization: `Token ${$UserStore}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					text: labels[values[i]],
					mood: data.id
				})
			});
		}
	}
	function handleChangeNotes(e) {
		notes = e.target.value;
	}

	function handleChangeDate(e) {
		date = e.target.value;
	}
</script>

<div class="card variant-glass-tertiary flex flex-col gap-2 p-4 md:grid md:grid-cols-2 md:gap-4">
	<div class="col-span-2 card variant-glass-tertiary p-4">
		<ChoiceGrid on:select={handleSelect} label="Mood" {icons} {labels} />
	</div>
	<NotesInput on:change={handleChangeNotes} />
	<Datestamp on:change={handleChangeDate} />
	<button class="col-span-2 btn variant-filled-warning w-full" on:click={handleSubmit}
		>Submit</button
	>
</div>
