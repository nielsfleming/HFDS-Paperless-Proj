import type { Meta, StoryObj } from '@storybook/react';
import { CameraFeed } from '.';

const meta: Meta<typeof CameraFeed> = {
    component: CameraFeed
};
export default meta;
type Story = StoryObj<typeof CameraFeed>;

export const Default: Story = {
    args: {
        label: 'Gudetama',
        description: 'He is a lazy, laazzzzyyy egg.',
        type: 'warning',
        src: 'https://www.tokyoweekender.com/wp-content/uploads/2022/12/FIRST-LOOK_rev_Gudetama_Still_FINALIZED.jpg',
        modalClass: 'w-1/3'
    },
    render: args => (
        <div className='w-[600px] h-[400px]'>
            <CameraFeed {...args} />
        </div>
    )
};

export const FullLabel: Story = {
    args: {
        children: <div className='py-2 px-3 font-semibold text-2xl'>Gudetama</div>,
        src: 'https://i.ytimg.com/vi/Pi-AQeOXCO8/maxresdefault.jpg',
        fullLabel: true,
        variant: 'dashboard',
        modalClass: 'w-1/3'
    },
    render: args => (
        <div className='w-[1200px] h-[400px]'>
            <CameraFeed {...args} />
        </div>
    )
};

export const Loading: Story = {
    args: {
        label: 'Loading...',
        modalClass: 'w-1/3',
        loading: true
    },
    render: args => (
        <div className='w-[400px] h-[400px]'>
            <CameraFeed {...args} />
        </div>
    )
};
