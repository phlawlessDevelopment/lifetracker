<script>
	import { AppBar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<AppBar gridColumns="1" slotDefault="place-self-center" slotTrail="place-content-end">
	<h3 class="h3 capitalize">{$page.url.pathname.replace('/', '') || 'Food'}</h3>
</AppBar>
