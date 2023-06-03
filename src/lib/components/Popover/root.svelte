<script lang="ts" context="module">
    export type Context = {
		open: boolean;
	};

    const { getContext, setContext } = reactiveContext<Context>({
        open: false
    });
	export const getRootContext = getContext;
</script>

<script lang="ts">
    import { reactiveContext } from '$lib/internal/helpers/reactiveContext';
    import { Popper } from '$lib/internal/components';

    export let open = false;

    const contextStore = setContext({
		open: (v) => (open = v),
	});

    $: contextStore.set({ open });
</script>

<Popper.Root>
    <slot />
</Popper.Root>