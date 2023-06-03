import { schema as Tooltip } from './Tooltip/schema';
import { schema as AlertDialog } from './AlertDialog/schema';
import { schema as RadioGroup } from './RadioGroup/schema';
import { schema as Select } from './Select/schema';
import { schema as ToggleGroup } from './ToggleGroup/schema';
import { schema as Accordion } from './Accordion/schema';
import { schema as AspectRatio } from './AspectRatio/schema';
import { schema as Checkbox } from './Checkbox/schema';
import { schema as Collapsible } from './Collapsible/schema';
import { schema as Dialog } from './Dialog/schema';
import { schema as Label } from './Label/schema';
import { schema as Popper } from './Popper/schema';
import { schema as Progress } from './Progress/schema';
import { schema as Slider } from './Slider/schema';
import { schema as Switch } from './Switch/schema';
import { schema as Tabs } from './Tabs/schema';
import { schema as Toggle } from './Toggle/schema';
import { schema as HoverCard } from './HoverCard/schema';

import { schema as Avatar } from './Avatar/schema';
import { schema as Separator } from './Separator/schema';
import { schema as Popover } from './Popover/schema';

export const schemas = {
	accordion: Accordion,
	'aspect-ratio': AspectRatio,
	avatar: Avatar,
	checkbox: Checkbox,
	collapsible: Collapsible,
	separator: Separator,
	slider: Slider,
	switch: Switch,
	toggle: Toggle,
	progress: Progress,
    popover: Popover,
	popper: Popper,
	dialog: Dialog,
	tabs: Tabs,
	togglegroup: ToggleGroup,
	label: Label,
	select: Select,
	radiogroup: RadioGroup,
	alertdialog: AlertDialog,
	hovercard: HoverCard,
	tooltip: Tooltip,
};
