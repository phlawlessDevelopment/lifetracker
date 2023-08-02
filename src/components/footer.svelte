<script>
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">(my logo)</svelte:fragment>
	by phlawlessDevelopment
	<svelte:fragment slot="trail">(links)</svelte:fragment>
</AppBar>
