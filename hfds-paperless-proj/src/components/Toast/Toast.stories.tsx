import { Meta, StoryObj } from '@storybook/react';
import Toaster, { toast, ToastProps } from '.';
import { Button } from '../Button';

const meta: Meta<typeof Toaster> = {
    title: 'Toast',
    component: Toaster
};
export default meta;
type StoryType = StoryObj<ToastProps>;

export const Default: StoryType = {
    args: {
        msg: 'A child was born.',
        duration: 5000,
        placement: 'bottom-left'
    },
    render: args => (
        <div>
            <Button onClick={() => toast.default({ ...args })}>Default</Button>
            <Toaster />
        </div>
    )
};

export const Info: StoryType = {
    args: {
        msg: 'This is an info toast',
        duration: 5000,
        placement: 'bottom-left'
    },
    render: args => (
        <div>
            <Button type='info' onClick={() => toast.info({ ...args })}>
                Info
            </Button>
            <Toaster />
        </div>
    )
};

export const Success: StoryType = {
    args: {
        msg: 'This is a success toast',
        duration: 5000,
        placement: 'bottom-left'
    },
    render: args => (
        <div>
            <Button type='success' onClick={() => toast.success({ ...args })}>
                Success
            </Button>
            <Toaster />
        </div>
    )
};

export const Warning: StoryType = {
    args: {
        msg: 'This is a warning toast',
        duration: 5000,
        placement: 'bottom-left'
    },
    render: args => (
        <div>
            <Button type='warning' onClick={() => toast.warning({ ...args })}>
                Warning
            </Button>
            <Toaster />
        </div>
    )
};

export const Danger: StoryType = {
    args: {
        msg: 'This is a danger toast',
        duration: 5000,
        placement: 'bottom-left'
    },
    render: args => (
        <div>
            <Button type='danger' onClick={() => toast.danger({ ...args })}>
                Danger
            </Button>
            <Toaster />
        </div>
    )
};
