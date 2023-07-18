import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from '.';

const meta: Meta<typeof Loading> = {
    component: Loading
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Small: Story = {
    args: {
        size: 'sm'
    }
};

export const Medium: Story = {
    args: {
        size: 'md'
    }
};

export const Large: Story = {
    args: {
        size: 'lg'
    }
};
