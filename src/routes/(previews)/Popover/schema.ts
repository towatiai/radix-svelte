import type { Popover } from '$lib';
import type { PreviewSchema } from '$lib/internal/helpers';

import example from './example.svelte';
import code from './example.svelte?raw';

export const schema = {
	title: 'Popover',
	description: 'Displays rich content in a portal, triggered by a button.',
	example,
	code,
    meta: {
        Root: {

        },
        Trigger: {

        },
        Anchor: {

        },
        Portal: {

        },
        Content: {

        },
        Close: {

        },
        Arrow: {
            
        }
    }
} satisfies PreviewSchema<typeof Popover>;
