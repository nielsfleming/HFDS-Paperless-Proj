import type { Meta, StoryObj } from '@storybook/react';
import { StateCard } from '.';

const meta: Meta<typeof StateCard> = {
    component: StateCard
};

export default meta;
type Story = StoryObj<typeof StateCard>;

export const Neutral: Story = {
    args: {
        type: 'neutral',
        mode: 'light',
        children: (
            <div className='p-2 font-semibold text-lg'>
                Evaluation: <span className='font-bold text-3xl'>Who Knows?</span>
            </div>
        ),
        align: 'center'
    }
};

export const Accent: Story = {
    args: {
        type: 'accent',
        children: (
            <div className='p-2 font-semibold text-lg'>
                Evaluation: <span className='font-bold text-3xl'>Who Knows?</span>
            </div>
        ),
        align: 'center'
    }
};

export const Info: Story = {
    args: {
        type: 'info',
        mode: 'light',
        children: (
            <div className='p-2 font-semibold text-lg'>
                Evaluation: <span className='font-bold text-3xl'>Who Knows?</span>
            </div>
        ),
        align: 'center'
    }
};

export const Success: Story = {
    args: {
        type: 'success',
        children: (
            <div className='p-2 font-semibold text-lg'>
                Evaluation: <span className='font-bold text-3xl'>Success</span>
            </div>
        ),
        align: 'center'
    }
};

export const Warning: Story = {
    args: {
        type: 'warning',
        mode: 'light',
        children: (
            <div className='p-2 font-semibold text-lg'>
                Evaluation: <span className='font-bold text-3xl'>Something's Wrong</span>
            </div>
        ),
        align: 'center'
    }
};

export const Danger: Story = {
    args: {
        type: 'danger',
        children: (
            <div className='p-2 font-semibold text-lg'>
                Evaluation: <span className='font-bold text-3xl'>Fail</span>
            </div>
        ),
        align: 'center'
    }
};

export const LeftAlign: Story = {
    args: {
        type: 'accent',
        children: (
            <div className='px-6 py-3 font-semibold text-lg'>
                Evaluation: <span className='font-bold text-3xl'>Who Knows?</span>
            </div>
        ),
        align: 'left'
    }
};

export const RightAlign: Story = {
    args: {
        type: 'accent',
        children: (
            <div className='px-6 py-3 font-semibold text-lg'>
                Evaluation: <span className='font-bold text-3xl'>Who Knows?</span>
            </div>
        ),
        align: 'right'
    }
};
