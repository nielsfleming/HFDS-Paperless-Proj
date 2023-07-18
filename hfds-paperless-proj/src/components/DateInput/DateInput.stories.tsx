import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from '.';

const meta: Meta<typeof DateInput> = {
    component: DateInput
};

export default meta;
type Story = StoryObj<typeof DateInput>;

export { Default, Inline } from '../Input/Input.stories';
