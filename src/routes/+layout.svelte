<script>
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Sidebar from '../components/sidebar.svelte';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
