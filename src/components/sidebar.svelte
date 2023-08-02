<script>
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	let currentTile = 0;
</script>

<AppRail>
	<AppRailAnchor href="/" selected={$page.url.pathname === '/'} name="food" title="food">
		<svelte:fragment slot="lead">
			<iconify-icon class="h1" icon="mdi:baguette" />
		</svelte:fragment>
		<span>Food</span>
	</AppRailAnchor>
	<AppRailAnchor
		href="/toilet"
		selected={$page.url.pathname === '/toilet'}
		name="toilet"
		title="toilet"
	>
		<svelte:fragment slot="lead">
			<iconify-icon class="h1" icon="mdi:toilet" />
		</svelte:fragment>
		<span>Toilet</span>
	</AppRailAnchor>
	<AppRailAnchor
		href="/smoking"
		selected={$page.url.pathname === '/smoking'}
		name="smoking"
		title="smoking"
	>
		<svelte:fragment slot="lead">
			<iconify-icon class="h1" icon="mdi:smoke" />
		</svelte:fragment>
		<span>Smoking</span>
	</AppRailAnchor>
	<!-- --- -->
</AppRail>
