<script lang="ts">
	import Hamburger from './Hamburger.svelte';
	let active: boolean = false;
	import { page } from '$app/stores';
</script>

<nav class={`${active ? 'h-screen' : 'h-16'} w-screen`}>
	<div
		class={`mx-auto flex h-full w-11/12 max-w-4xl items-start justify-between font-poppins text-lg md:items-center`}
	>
		<div class="flex h-16 items-center"><a href="/">CTFalcon</a></div>
		<ul
			class={`mt-12 flex flex-col items-center gap-8 overflow-hidden transition-[height] md:mt-0 md:h-16 md:flex-row ${
				active ? 'h-screen' : 'h-0'
			}`}
		>
			<li><a href="/" class:font-bold={$page.url.pathname == '/'}>Home</a></li>
			<li>
				<a href="/challenges" class:font-bold={$page.url.pathname == '/challenges'}>Challenges</a>
			</li>
			<li><a href="/about" class:font-bold={$page.url.pathname == '/about'}>About</a></li>
			<li class="space-x-2 md:hidden">
				<a href="/signin">Sign In</a>
				<a class="rounded border p-1" href="/signup">Sign Up</a>
			</li>
		</ul>
		<div class="flex h-16 items-center justify-center gap-2">
			<a href="/signin" class="hidden md:block">Sign In</a>
			<a href="/signup" class="hidden rounded border p-1 md:block">Sign Up</a>
			<div class="md:hidden"><Hamburger bind:active /></div>
		</div>
	</div>
</nav>
