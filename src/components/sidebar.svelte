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
		href="/hydration"
		selected={$page.url.pathname === '/hydration'}
		name="hydration"
		title="hydration"
	>
		<svelte:fragment slot="lead">
			<iconify-icon class="h1" icon="mdi:cup-water" />
		</svelte:fragment>
		<span>Hydration</span>
	</AppRailAnchor>
	<AppRailAnchor href="/mood" selected={$page.url.pathname === '/mood'} name="mood" title="mood">
		<svelte:fragment slot="lead">
			<iconify-icon class="h1" icon="mdi:emoticon" />
		</svelte:fragment>
		<span>Mood</span>
	</AppRailAnchor>
	<AppRailAnchor
		href="/digestion"
		selected={$page.url.pathname === '/digestion'}
		name="digestion"
		title="digestion"
	>
		<svelte:fragment slot="lead">
			<iconify-icon class="h1" icon="mdi:stomach" />
		</svelte:fragment>
		<span>Digestion</span>
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
