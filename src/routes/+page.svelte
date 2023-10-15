<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
    // https://github.com/prisma/prisma-examples/blob/latest/typescript/sveltekit/src/routes/%2Bpage.svelte
</script>
<h1>{data.message}</h1>
