<script lang="ts">
	import { page } from '$app/stores';
	import toast, { Toaster } from 'svelte-french-toast';
	toast.success($page.status.toString());
</script>

<Toaster />
