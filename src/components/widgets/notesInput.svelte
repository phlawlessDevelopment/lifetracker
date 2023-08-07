<script>
	let show = false;
</script>

{#if show}
	<label class="label">
		<span>Notes</span>
		<textarea class="textarea" rows="4" placeholder="type some notes..." on:change />
	</label>
{:else}
	<button class="btn variant-filled-tertiary" on:click={() => (show = !show)}>Add Notes</button>
{/if}
