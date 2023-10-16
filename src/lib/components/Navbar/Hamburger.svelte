<script lang="ts">
	export let active: boolean;
</script>

<button on:click={() => (active = !active)} class="relative p-2">
	<div
		class={`absolute top-1/2 h-0.5 w-4 -translate-x-1/2 rounded-lg transition-all ease ${
			active ? 'rotate-45 bg-transparent' : 'bg-black'
		}
        before:absolute  before:h-0.5 before:-translate-x-1/2 before:rounded-lg before:bg-black before:transition-all before:ease ${
					active
						? 'before:top-1/2 before:w-5 before:-translate-y-1/2'
						: 'before:-top-1.5  before:w-4 '
				}
         after:absolute after:h-0.5 after:-translate-x-1/2 after:rounded-lg after:bg-black after:transition-all after:ease  ${
						active
							? 'after:top-1/2 after:w-5 after:-translate-y-1/2 after:-rotate-90'
							: 'after:top-1.5 after:w-4 '
					} `}
	></div>
</button>
