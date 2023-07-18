import { StoryObj, Meta } from '@storybook/react';
import { Breadcrumb } from '.';

const meta: Meta<typeof Breadcrumb> = {
    component: Breadcrumb
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const DoubleCrumb: Story = {
    args: {
        crumbs: [
            {
                crumb: 'Breadcrumb',
                href: ''
            },
            {
                crumb: 'Current',
                href: ''
            }
        ]
    }
};

export const TripleCrumb: Story = {
    args: {
        crumbs: [
            {
                crumb: 'Breadcrumb',
                href: ''
            },
            {
                crumb: 'Breadcrumb',
                href: ''
            },
            {
                crumb: 'Current',
                href: ''
            }
        ]
    }
};

export const QuadCrumb: Story = {
    args: {
        crumbs: [
            {
                crumb: 'Breadcrumb',
                href: ''
            },
            {
                crumb: 'Breadcrumb',
                href: ''
            },
            {
                crumb: 'Breadcrumb',
                href: ''
            },
            {
                crumb: 'Current',
                href: ''
            }
        ]
    }
};
