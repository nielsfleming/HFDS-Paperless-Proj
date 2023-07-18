import type { Meta, StoryObj } from '@storybook/react';
import { default as Select, SelectProps } from '.';
import { MenuItem, MenuItemProps } from '../MenuItem';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
    component: Select
};

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        placeholder: 'Select',
        className: 'w-[200px]'
    },
    render: args => (
        <>
            <Select {...args}>
                <MenuItem value={1}>Menu Item #1</MenuItem>
                <MenuItem value={2}>Menu Item #2</MenuItem>
                <MenuItem value={3}>Menu Item #3</MenuItem>
            </Select>
        </>
    )
};

const Parent = (args: SelectProps) => {
    const [selectedValue, setSelectedValue] = useState<MenuItemProps['value']>();

    return (
        <>
            <Select
                {...args}
                selectedValue={selectedValue}
                onSelect={value => {
                    setSelectedValue(value);
                }}>
                <MenuItem
                    value='first'
                    leftIcon={faStar}
                    iconClass='text-primary-purple-30 group-hover:text-primary-purple-40'>
                    Menu Item #1
                </MenuItem>
                <MenuItem
                    value='second'
                    leftIcon={faStar}
                    iconClass='text-primary-purple-30 group-hover:text-primary-purple-40'>
                    Menu Item #2
                </MenuItem>
                <MenuItem
                    value='third'
                    leftIcon={faStar}
                    iconClass='text-primary-purple-30 group-hover:text-primary-purple-40'>
                    Menu Item #3
                </MenuItem>
            </Select>
            <div>
                The value of the current selected item is: {selectedValue || 'No value selected.'}
            </div>
        </>
    );
};

export const WithIcon: Story = {
    args: {
        placeholder: 'Select Item',
        className: 'w-[200px]'
    },
    render: args => <Parent {...args} />
};

export const Error: Story = {
    args: {
        ...Default.args,
        error: true,
        errorMessage: 'You did something wrong'
    },
    render: args => (
        <>
            <Select {...args}>
                <MenuItem value={1}>Menu Item #1</MenuItem>
                <MenuItem value={2}>Menu Item #2</MenuItem>
                <MenuItem value={3}>Menu Item #3</MenuItem>
            </Select>
        </>
    )
};

export default meta;
