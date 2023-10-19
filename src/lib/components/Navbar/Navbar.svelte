<script lang="ts">
	import Hamburger from './Hamburger.svelte';

	let active: boolean = false;
</script>

<nav class={`${active ? 'h-screen' : 'h-16'} w-screen`}>
	<div
		class={`mx-auto flex h-full w-11/12 max-w-4xl items-start justify-between text-lg font-poppins md:items-center`}
	>
		<div class="flex h-16 items-center"><a href="/">CTFalcon</a></div>
		<ul
			class={`mt-12 flex flex-col items-center gap-8 overflow-hidden transition-[height] md:mt-0 md:h-16 md:flex-row ${
				active ? 'h-screen' : 'h-0'
			}`}
		>
			<li><a href="/">Home</a></li>
			<li><a href="/rules">Challenges</a></li>
			<li><a href="/events">About</a></li>
			<li class="md:hidden"><a href="/login">Login</a></li>
		</ul>
		<div class="flex h-16 flex-col items-center justify-center">
			<a href="/login" class="hidden md:block">Login</a>
			<div class="md:hidden"><Hamburger bind:active /></div>
		</div>
	</div>
</nav>
