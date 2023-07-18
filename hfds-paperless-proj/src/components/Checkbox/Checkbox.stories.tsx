import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '.';

const meta: Meta<typeof Checkbox> = {
    component: Checkbox
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        children: 'Label',
        name: 'label',
        value: 'label'
    }
};

export const Large: Story = {
    args: {
        children: 'Label',
        name: 'label',
        value: 'label',
        size: 'lg'
    }
};

export const Disabled: Story = {
    args: {
        children: 'Label',
        name: 'label',
        value: 'label',
        checked: true,
        disabled: true
    }
};
