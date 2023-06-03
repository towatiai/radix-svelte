<script lang="ts">
	import { Portal } from "$lib/internal/components";
    import { getRootContext } from "./root.svelte";

    const ctx = getRootContext();
</script>

{ #if $ctx.open }
<Portal>
    <slot />
</Portal>
{ /if }