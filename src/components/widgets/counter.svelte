<script>
	import { createEventDispatcher } from 'svelte';
	import { SmokeCountStore } from '../../stores';
	export let label;

	let dispatch = createEventDispatcher();

	function changeCount(dir) {
		SmokeCountStore.update((n) => n + dir);
	}
</script>

<label class="label">
	<span>{label}</span>
	<div class="flex gap-6">
		<button class="btn-icon" on:click={() => changeCount(1)}>
			<iconify-icon class="h1" icon="mdi:arrow-up-bold-circle" />
		</button>
		<h1 class="h1">{$SmokeCountStore}</h1>
		<button class="btn-icon" on:click={() => changeCount(-1)}>
			<iconify-icon class="h1" icon="mdi:arrow-down-bold-circle" />
		</button>
	</div>
</label>
