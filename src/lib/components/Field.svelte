<script lang="ts">
	export let label: string;
	export let name: string;
	export let type: string;
	export let bottomLeftLabel = '';
    export let link = '';
    export let linkText = '';
	export let placeholder = '';
	export let required = false;
    export let value = '';
</script>

<div class="form-control w-full">
	<label for={name} class="label">
		<span class="label-text">{label}</span>
		{#if !required}
			<span class="label-text-alt">(Optional)</span>
		{/if}
	</label>
	<input {name} {type} {placeholder} {value} class="input input-bordered w-full" />
	<label for={name} class="label">
		{#if link || bottomLeftLabel}
			<span class="label-text-alt">{bottomLeftLabel}</span>
		{/if}
		{#if link}
			<a href={link} class="text-sm label-text-alt text-yellow-300">{linkText}</a>
		{/if}
	</label>
</div>
