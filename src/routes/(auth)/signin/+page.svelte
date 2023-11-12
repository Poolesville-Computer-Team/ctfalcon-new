<script lang="ts">
	import { page } from '$app/stores';
	import Field from '$lib/components/Field.svelte';
	import type { ActionData } from './$types';
	import toast, { Toaster } from 'svelte-french-toast';
	export let form: ActionData;
	if (Math.floor($page.status / 100) != 2) toast.error('Error');
</script>

<Toaster />
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<img
			class="mx-auto h-10 w-auto"
			src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
			alt="Your Company"
		/>
		<h2 class="mt-10 text-center text-2xl font-medium">Sign in to your account</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form method="POST">
			<Field
				label="Email Address"
				name="email"
				type="email"
				placeholder="example@example.com"
				value={form?.email ?? ''}
				required
			/>
			<Field
				label="Password"
				name="password"
				type="password"
				placeholder="Password"
				required
				link="/forgot-password"
				linkText="Forgot your password?"
			/>
			<button
				type="submit"
				class="flex w-full justify-center rounded-md bg-orange-gradient px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
				>Sign in</button
			>
		</form>
		<div class="divider">OR</div>
		<button class="btn w-full font-semibold normal-case">Sign In with GitHub</button>
	</div>
</div>
