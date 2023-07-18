import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '.';

const meta: Meta<typeof Label> = {
    component: Label,
    argTypes: {
        type: {
            control: { type: 'radio' }
        }
    }
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Large: Story = {
    args: {
        label: 'Large',
        mode: 'light',
        variant: 'none',
        size: 'lg'
    }
};

export const Medium: Story = {
    args: {
        label: 'Medium',
        mode: 'light',
        variant: 'none',
        size: 'md',
        type: 'info'
    }
};

export const Small: Story = {
    args: {
        label: 'Small',
        mode: 'light',
        variant: 'none',
        size: 'sm',
        type: 'neutral'
    }
};

export const Close: Story = {
    args: {
        label: 'Label',
        mode: 'light',
        variant: 'close',
        type: 'success'
    }
};

export const Badge: Story = {
    args: {
        label: 'Label',
        mode: 'dark',
        variant: 'badge',
        badgeNumber: 100,
        type: 'danger'
    }
};
