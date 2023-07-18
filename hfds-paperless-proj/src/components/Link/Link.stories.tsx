import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '.';

const meta: Meta<typeof Link> = {
    component: Link
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Regular: Story = {
    args: {
        children: 'Click for a Surprise in a New Tab',
        href: 'https://wallpapercave.com/wp/wp11896804.jpg',
        inactive: false,
        openNewTab: true
    }
};

export const Small: Story = {
    args: {
        children: 'Click for a Surprise in this Tab',
        href: 'https://wallpapers.com/images/hd/gudetama-phone-b8x7xsi3k4v728ou.jpg',
        inactive: false,
        size: 'sm'
    }
};

export const Disabled: Story = {
    args: {
        children: "You can't click me lol",
        href: 'https://www.google.com',
        inactive: true
    }
};
