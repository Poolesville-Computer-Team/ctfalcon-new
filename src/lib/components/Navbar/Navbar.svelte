<script lang="ts">
	import Hamburger from './Hamburger.svelte';

	let active: boolean = false;
</script>

<nav class={`${active ? 'h-screen' : 'h-12'} w-screen`}>
	<div
		class={`mx-auto flex h-full w-11/12 max-w-4xl ${
			active ? 'items-start' : 'items-center'
		} justify-between text-xl`}
	>
		<div class="flex h-12 items-center"><a href="/">CTFalcon</a></div>
		<ul
			class={`mt-12 flex flex-col items-center gap-8 overflow-hidden md:mt-0 md:flex-row ${
				active ? 'h-full' : 'h-0 md:h-12'
			}`}
		>
			<li><a href="/">Home</a></li>
			<li><a href="/rules">Rules</a></li>
			<li><a href="/events">Events</a></li>
			<li><a href="/challenges">Leaderboard</a></li>
			<li class="md:hidden"><a href="/login">Login</a></li>
		</ul>
		<div class="flex h-12 items-center">
			<a href="/login" class="hidden md:block">Login</a>
			<div class="md:hidden"><Hamburger bind:active /></div>
		</div>
	</div>
</nav>
