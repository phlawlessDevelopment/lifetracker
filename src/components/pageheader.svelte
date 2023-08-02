<script>
	import { AppBar } from '@skeletonlabs/skeleton';
	import { PageStore } from '../stores';
</script>

<AppBar gridColumns="1" slotDefault="place-self-center" slotTrail="place-content-end">
	<h3 class="h3">{$PageStore}</h3>
</AppBar>
