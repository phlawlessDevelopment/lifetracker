<script>
	import { AppBar, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { UserStore } from '../stores';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead"><span class="h3">(app logo)</span></svelte:fragment>
	<span class="h2">LifeTrack</span>
	<svelte:fragment slot="trail" />
</AppBar>
