<script lang="ts">
    import { Popper } from '$lib/internal/components';
    import { getRootContext } from "./root.svelte";

    const ctx = getRootContext();
</script>

<Popper.Anchor on:click={() => {
    $ctx.open = true;
}}>
    <slot />
</Popper.Anchor>

