import type { Meta, StoryObj } from '@storybook/react';
import { DataChip } from '.';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof DataChip> = {
    component: DataChip
};

export default meta;
type Story = StoryObj<typeof DataChip>;

export const Default: Story = {
    args: {
        label: 'Label',
        labelIcon: faStar,
        description: 'Description',
        align: 'center',
        number: 88,
        percentChange: 14,
        variant: 'default'
    }
};

export const Money: Story = {
    args: {
        label: 'Label',
        labelColor: 'text-info-blue-50',
        description: 'Description',
        align: 'center',
        number: 88,
        variant: 'money',
        type: 'info'
    }
};

export const Fraction: Story = {
    args: {
        label: 'Label',
        labelColor: 'text-error-red-50',
        description: 'Description',
        align: 'left',
        number: 88,
        totalNumber: 100,
        variant: 'fraction',
        type: 'danger'
    }
};

export const Percent: Story = {
    args: {
        label: 'Label',
        labelColor: 'text-primary-purple-50',
        description: 'Description',
        align: 'right',
        number: 88,
        variant: 'percent',
        type: 'accent'
    }
};
