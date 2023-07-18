import type { Meta, StoryObj } from '@storybook/react';
import { TimeInput } from '.';

const meta: Meta<typeof TimeInput> = {
    component: TimeInput
};

export default meta;
type Story = StoryObj<typeof TimeInput>;

export { Default, Inline } from '../Input/Input.stories';
