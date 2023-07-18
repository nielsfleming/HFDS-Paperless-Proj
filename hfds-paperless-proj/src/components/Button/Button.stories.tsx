import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
    component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
        type: 'accent',
        size: 'lg',
        inactive: false
    }
};

export const Secondary: Story = {
    args: {
        children: 'Button',
        variant: 'secondary',
        type: 'accent',
        size: 'md',
        inactive: false
    }
};

export const Tertiary: Story = {
    args: {
        children: 'Button',
        variant: 'tertiary',
        type: 'accent',
        size: 'md',
        inactive: false
    }
};

export const Small: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
        type: 'accent',
        size: 'sm',
        inactive: false
    }
};

export const Disabled: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
        type: 'accent',
        size: 'md',
        inactive: true
    }
};
