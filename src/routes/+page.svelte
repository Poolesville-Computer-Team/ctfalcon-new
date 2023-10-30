<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Home | CTFalcon</title>
</svelte:head>

<section class="w-screen">
	<div class="mx-auto w-11/12 max-w-4xl pt-24">
		<div class="space-y-8">
			<h1 class="w-full max-w-2xl text-5xl font-black sm:text-8xl">CTFalcon</h1>
			<p class="text-md w-full max-w-md font-light leading-loose">
				Nulla eiusmod nostrud tempor quis esse minim excepteur cupidatat aliquip sunt. Officia
				dolore officia aliqua sint Lorem tempor nulla esse nulla. Pariatur aliqua voluptate proident
				exercitation aute magna magna duis cupidatat sit. Id sint Lorem et ullamco sunt deserunt ad
				aliqua voluptate ut anim commodo mollit est.
			</p>
		</div>
		<div class="relative top-0 mt-4 flex flex-wrap items-end justify-between gap-4 md:-top-12">
			<a class="h-fit rounded-xl bg-orange-gradient px-8 py-2 text-xl font-medium" href="/start"
				>Join Now</a
			>
			<Card>
				<h2 class="text-xl">Time until <span class="font-bold">Spring Round</span></h2>
				<p class="text-4xl font-bold text-amber-300">10:23:04</p>
			</Card>
		</div>
		<hr class="mt-8" />
	</div>
</section>
<section class="w-screen">
	<div class="mx-auto w-11/12 max-w-4xl pt-24">
		<h1 class="text-center text-4xl font-bold">Topics</h1>
		<div class="mt-4 grid grid-cols-1 gap-8 md:grid-cols-6">
			<Card class="md:col-span-2">
				<h2 class="text-3xl">Crytography</h2>
				<p class="text-md text-center font-mono leading-loose">
					A cryptography challenge involves tasks that test participants' knowledge of cryptography.
					This can include decoding messages, breaking ciphertext, or finding flaws in cryptographic
					systems.
				</p>
			</Card>
			<Card class="md:col-span-2">
				<h2 class="text-3xl">Crytography</h2>
				<p class="text-md text-center font-mono leading-loose">
					A cryptography challenge involves tasks that test participants' knowledge of cryptography.
					This can include decoding messages, breaking ciphertext, or finding flaws in cryptographic
					systems.
				</p>
			</Card>
			<Card class="md:col-span-2">
				<h2 class="text-3xl">Crytography</h2>
				<p class="text-md text-center font-mono leading-loose">
					A cryptography challenge involves tasks that test participants' knowledge of cryptography.
					This can include decoding messages, breaking ciphertext, or finding flaws in cryptographic
					systems.
				</p>
			</Card>
			<Card class="md:col-span-2 md:col-start-2">
				<h2 class="text-3xl">Crytography</h2>
				<p class="text-md text-center font-mono leading-loose">
					A cryptography challenge involves tasks that test participants' knowledge of cryptography.
					This can include decoding messages, breaking ciphertext, or finding flaws in cryptographic
					systems.
				</p>
			</Card>
			<Card class="md:col-span-2">
				<h2 class="text-3xl">Crytography</h2>
				<p class="text-md text-center font-mono leading-loose">
					A cryptography challenge involves tasks that test participants' knowledge of cryptography.
					This can include decoding messages, breaking ciphertext, or finding flaws in cryptographic
					systems.
				</p>
			</Card>
		</div>
	</div>
</section>
<section class="w-screen">
	<div class="mx-auto w-11/12 max-w-4xl pt-24">
		<h1 class="text-center text-4xl font-bold">Sponsored By</h1>
	</div>
</section>
<section class="w-screen">
	<div class="mx-auto w-11/12 max-w-4xl pt-24">
		<h1 class="text-center text-4xl font-bold">Additional Information</h1>
		<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
			<div class="flex flex-col items-center gap-2">
				<icon class="text-4xl">🚀</icon>
				<h2 class="text-xl">What is CTFalcon?</h2>
				<p class="font-mono text-sm leading-loose">
					Laboris eiusmod labore et sint velit est dolore voluptate esse. Quis sint in in fugiat
					culpa consectetur tempor. Mollit occaecat reprehenderit fugiat id.
				</p>
			</div>
			<div class="flex flex-col items-center gap-2">
				<icon class="text-4xl">🚀</icon>
				<h2 class="text-xl">What is CTFalcon?</h2>
				<p class="font-mono text-sm leading-loose">
					Laboris eiusmod labore et sint velit est dolore voluptate esse. Quis sint in in fugiat
					culpa consectetur tempor. Mollit occaecat reprehenderit fugiat id.
				</p>
			</div>
			<div class="flex flex-col items-center gap-2">
				<icon class="text-4xl">🚀</icon>
				<h2 class="text-xl">What is CTFalcon?</h2>
				<p class="font-mono text-sm leading-loose">
					Laboris eiusmod labore et sint velit est dolore voluptate esse. Quis sint in in fugiat
					culpa consectetur tempor. Mollit occaecat reprehenderit fugiat id.
				</p>
			</div>
		</div>
	</div>
</section>
