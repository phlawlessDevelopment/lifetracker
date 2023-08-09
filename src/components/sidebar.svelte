<script>
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { UserStore } from '../stores';
</script>

<AppRail>
	<AppRailAnchor href="/" selected={$page.url.pathname === '/'} name="food" title="food">
		<div class="flex flex-col justify-center items-center p-0">
			<iconify-icon class="h1" icon="mdi:baguette" />
			<span>Food</span>
		</div>
	</AppRailAnchor>
	<AppRailAnchor
		href="/hydration"
		selected={$page.url.pathname === '/hydration'}
		name="hydration"
		title="hydration"
	>
		<div class="flex flex-col justify-center items-center p-0">
			<iconify-icon class="h1" icon="mdi:cup-water" />
			<span>Hydration</span>
		</div></AppRailAnchor
	>
	<AppRailAnchor
		href="/sleep"
		selected={$page.url.pathname === '/sleep'}
		name="sleep"
		title="sleep"
	>
		<div class="flex flex-col justify-center items-center p-0">
			<iconify-icon class="h1" icon="mdi:power-sleep" />
			<span>sleep</span>
		</div></AppRailAnchor
	>
	<AppRailAnchor href="/mood" selected={$page.url.pathname === '/mood'} name="mood" title="mood">
		<div class="flex flex-col justify-center items-center p-0">
			<iconify-icon class="h1" icon="mdi:emoticon" />
			<span>Mood</span>
		</div></AppRailAnchor
	>
	<AppRailAnchor
		href="/digestion"
		selected={$page.url.pathname === '/digestion'}
		name="digestion"
		title="digestion"
	>
		<div class="flex flex-col justify-center items-center p-0">
			<iconify-icon class="h1" icon="mdi:stomach" />
			<span>Digestion</span>
		</div></AppRailAnchor
	>

	<AppRailAnchor
		href="/smoking"
		selected={$page.url.pathname === '/smoking'}
		name="smoking"
		title="smoking"
	>
		<div class="flex flex-col justify-center items-center p-0">
			<iconify-icon class="h1" icon="mdi:smoke" />
			<span>Smoking</span>
		</div></AppRailAnchor
	>
	<!-- --- -->
	<svelte:fragment slot="trail">
		{#if $UserStore}
			<div class="flex flex-col justify-center items-center p-0">
				<iconify-icon class="h1" icon="mdi:user" />
				<span>{$UserStore.username}</span>
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
