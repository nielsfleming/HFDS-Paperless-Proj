import type { Meta, StoryObj } from '@storybook/react';
import TextArea from '.';

const meta: Meta<typeof TextArea> = {
    component: TextArea
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
    args: {
        label: 'Label',
        description: 'Description',
        placeholder: 'Enter text here',
        error: false,
        errorMessage: '',
        disabled: false
    }
};

export const Label: Story = {
    args: {
        label: 'Label',
        placeholder: 'Enter text here',
        error: false,
        errorMessage: '',
        disabled: false
    }
};

export const Error: Story = {
    args: {
        label: 'Label',
        description: 'Description',
        placeholder: 'Enter text here',
        error: true,
        errorMessage: 'This is a message to let you know that you messed up',
        disabled: false
    }
};

export const Disabled: Story = {
    args: {
        label: 'Label',
        description: 'Description',
        placeholder: 'Enter text here',
        error: false,
        disabled: true
    }
};

export const DefaultValue: Story = {
    args: {
        label: 'Label',
        description: 'Description',
        placeholder: 'Enter text here',
        error: false,
        disabled: false,
        defaultValue: 'This is the default value!',
        className: 'w-[50%]'
    }
};

export const ResizeNone: Story = {
    args: {
        label: 'Label',
        description: 'Description',
        placeholder: 'Enter text here',
        error: false,
        disabled: false,
        defaultValue: 'This is the default value!',
        className: 'resize-none',
        rows: 1
    },
    render: args => (
        <div className='w-1/6'>
            <TextArea {...args} />
        </div>
    )
};
