import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from '.';

import { faStar } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof MenuItem> = {
    component: MenuItem
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
    args: {
        children: 'Default Menu Item'
    }
};

export const LeftIcon: Story = {
    args: {
        children: 'Menu Item with Left Icon',
        leftIcon: faStar,
        iconClass: 'text-primary-purple-30',
        disabled: true
    }
};

export const RightIcon: Story = {
    args: {
        children: 'Menu Item with Right Icon',
        rightIcon: faStar,
        iconClass: 'fa-2x text-primary-purple-30'
    }
};

export const Disabled: Story = {
    args: {
        children: 'Menu Item with Left Icon',
        leftIcon: faStar,
        iconClass: 'text-primary-purple-30',
        disabled: true
    }
};
