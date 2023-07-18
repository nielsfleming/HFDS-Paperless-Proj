import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const meta: Meta<typeof Input> = {
    component: Input
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        disabled: false
    }
};
export const Inline: Story = {
    args: {
        ...Default.args,
        inline: true
    }
};

export const LeftIcon: Story = {
    args: {
        ...Inline.args,
        leftIcon: <FontAwesomeIcon icon={faEnvelope} />
    }
};

export const RightIcon: Story = {
    args: {
        ...Inline.args,
        rightIcon: <FontAwesomeIcon icon={faEnvelope} />
    }
};

export const Disabled: Story = {
    args: {
        ...LeftIcon.args,
        disabled: true
    }
};

export const DefaultError: Story = {
    args: {
        ...Inline.args,
        description: 'This is a description.',
        error: true,
        errorMessage: 'You did something wrong'
    }
};

export const LeftSection: Story = {
    args: {
        ...Inline.args,
        description: 'This input has a default value.',
        leftSection: <span>http://</span>,
        defaultValue: 'factoryengine.com'
    }
};

export const LeftError: Story = {
    args: {
        ...Inline.args,
        description: 'This input has a default value.',
        leftSection: <span>http://</span>,
        defaultValue: 'factoryengine.com',
        error: true,
        errorMessage: 'You did something wrong'
    }
};

export const TooltipInput: Story = {
    args: {
        ...Default.args,
        variant: 'tooltip',
        tooltipContent: <div>Hello</div>,
        tooltipId: 'input-tooltip',
        tooltipOffset: 30
    },
    render: args => (
        <div className='w-1/6'>
            <Input {...args} />
        </div>
    )
};
