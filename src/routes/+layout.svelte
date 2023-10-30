<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
<main>
	<slot />
</main>
<Footer />

<style lang="postcss">
	:global(html) {
		background: linear-gradient(
			162deg,
			rgba(53, 55, 70, 1) 0%,
			rgba(23, 25, 37, 1) 24.41%,
			rgba(26, 27, 32, 1) 30.37%,
			rgba(23, 25, 37, 1) 54.73%,
			rgba(1, 3, 10, 1) 70.17%,
			rgba(0, 0, 0, 1) 89.67%
		);
	}
	:global(body) {
		background-image: url('/bg.svg');
		background-size: 75px;
		@apply min-h-screen text-white;
	}
</style>
