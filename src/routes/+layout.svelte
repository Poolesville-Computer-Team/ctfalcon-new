<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
</script>

<Navbar />
<slot />

<style lang="postcss">
	:global(body) {
		background: linear-gradient(162deg, rgba(53, 55, 70, 1) 0%, rgba(23, 25, 37, 1) 24.41%, rgba(26, 27, 32, 1) 30.37%, rgba(23, 25, 37, 1) 54.73%, rgba(1, 3, 10, 1) 70.17%, rgba(0, 0, 0, 1) 89.67%);
        min-height: 100vh;
        @apply text-white;
	}
</style>
