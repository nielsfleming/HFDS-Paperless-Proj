import type { Meta, StoryObj } from '@storybook/react';
import { DateTimeInput } from '.';

const meta: Meta<typeof DateTimeInput> = {
    component: DateTimeInput
};

export default meta;
type Story = StoryObj<typeof DateTimeInput>;

export { Default, Inline } from '../Input/Input.stories';
