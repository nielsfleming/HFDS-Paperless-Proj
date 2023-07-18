import { Meta, StoryObj } from '@storybook/react';
import { Banner } from '.';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Banner> = {
    component: Banner
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
    args: {
        label: 'Title',
        description: 'Info banners display updates or advice to the user. This one has no buttons.',
        type: 'info',
        dismissible: true
    },
    render: args => (
        <div className='w-fit'>
            <Banner {...args} />
        </div>
    )
};

export const Info: Story = {
    args: {
        btn1: { text: 'Button 1', action: action('Button 1 Click') },
        type: 'info',
        dismissible: false
    },
    render: args => (
        <div className='w-fit'>
            <Banner {...args}>
                <img
                    className='rounded-lg'
                    src='https://occ-0-1123-1360.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ_rDQYxQA8NJ5Thke9QlVFy9uBkBUYsrbWHuqTlDFahUePUbV3HauoLcipjzkN_iCon042MhAkyo28111LVgGENDZWPni1fkOwXmZWqHxEa-6b7uRxc25TJ.jpg?r=9b6'
                />
            </Banner>
        </div>
    )
};

export const Success: Story = {
    args: {
        label: 'Title',
        description: 'Success banners display feedback on successful events.',
        btn1: { text: 'Button 1', action: action('Button 1 Click') },
        btn2: { text: 'Button 2', action: action('Button 2 Click') },
        type: 'success',
        dismissible: true
    },
    render: args => (
        <div className='w-fit'>
            <Banner {...args} />
        </div>
    )
};

export const Warning: Story = {
    args: {
        label: 'Title',
        description: 'Warning banners display information to be addressed.',
        btn1: { text: 'Button 1', action: action('Button 1 Click') },
        type: 'warning',
        dismissible: true
    },
    render: args => (
        <div className='w-fit'>
            <Banner {...args} />
        </div>
    )
};

export const Danger: Story = {
    args: {
        label: 'Title',
        description: 'Danger banners need immediate resolution.',
        btn1: { text: 'Button 1', action: action('Button 1 Click') },
        btn2: { text: 'Button 2', action: action('Button 2 Click') },
        type: 'danger',
        dismissible: false
    },
    render: args => (
        <div className='w-fit'>
            <Banner {...args} />
        </div>
    )
};
