import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from '.';

const meta: Meta<typeof SearchBar> = {
    component: SearchBar
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
    args: {
        placeholder: 'Search',
        inline: false,
        disabled: false,
        size: 'md'
    }
};

export const NoOutline: Story = {
    args: {
        variant: 'no-border',
        placeholder: 'Search',
        inline: false,
        disabled: false,
        size: 'md'
    }
};

export const DefaultValue: Story = {
    args: {
        placeholder: 'Search',
        inline: false,
        disabled: false,
        size: 'md',
        defaultValue: 'You should search this'
    }
};

export const Inline: Story = {
    args: {
        variant: 'border',
        placeholder: 'Search',
        inline: true,
        disabled: false,
        size: 'md'
    }
};

export const Disabled: Story = {
    args: {
        variant: 'no-border',
        placeholder: 'Search',
        inline: false,
        disabled: true,
        size: 'md'
    }
};

export const Small: Story = {
    args: {
        variant: 'border',
        placeholder: 'Search',
        inline: true,
        disabled: false,
        size: 'sm'
    }
};
