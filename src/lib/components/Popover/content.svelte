<script lang="ts">
    import { Popper } from "$lib/internal/components";
    import { dismissable } from "$lib/internal/actions";
    import { getRootContext } from "./root.svelte";

    const ctx = getRootContext();

    function onDismiss(e: MouseEvent) {
        $ctx.open = false;
    }
</script>

<Popper.Content {...$$restProps} use={[
    [dismissable, { onDismiss }]
]}>
    <slot />
</Popper.Content>