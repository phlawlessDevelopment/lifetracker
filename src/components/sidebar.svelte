<script>
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	import { UserStore } from '../stores';
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
	<AppRailAnchor
		href="/sleep"
		selected={$page.url.pathname === '/sleep'}
		name="sleep"
		title="sleep"
	>
		<svelte:fragment slot="lead">
			<iconify-icon class="h1" icon="mdi:power-sleep" />
		</svelte:fragment>
		<span>sleep</span>
	</AppRailAnchor>
	<AppRailAnchor href="/mood" selected={$page.url.pathname === '/mood'} name="mood" title="mood">
		<iconify-icon class="h1" icon="mdi:emoticon" />
		<span>Mood</span>
	</AppRailAnchor>
	<AppRailAnchor
		href="/digestion"
		selected={$page.url.pathname === '/digestion'}
		name="digestion"
		title="digestion"
	>
		<iconify-icon class="h1" icon="mdi:stomach" />
		<span>Digestion</span>
	</AppRailAnchor>

	<AppRailAnchor
		href="/smoking"
		selected={$page.url.pathname === '/smoking'}
		name="smoking"
		title="smoking"
	>
		<iconify-icon class="h1" icon="mdi:smoke" />
		<span>Smoking</span>
	</AppRailAnchor>
	<!-- --- -->
	<svelte:fragment slot="trail">
		{#if $UserStore}
			<div class="flex flex-col justify-center items-center p-0">
				<iconify-icon class="h1" icon="mdi:user" />
				<span></span>
			</div>
		{:else}
			<AppRailAnchor
				href="/login"
				selected={$page.url.pathname === '/login'}
				name="login"
				title="login"
			>
				<div class="flex flex-col justify-center items-center p-0">
					<iconify-icon class="h1" icon="mdi:user" />
					<span>Login</span>
				</div>
			</AppRailAnchor>
		{/if}
	</svelte:fragment>
</AppRail>
