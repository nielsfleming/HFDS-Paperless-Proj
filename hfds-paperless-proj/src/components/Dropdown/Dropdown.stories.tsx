import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '.';
import { MenuItem } from '../MenuItem';
import { faStar, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Dropdown> = {
    component: Dropdown,
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        label: 'Category 1',
        leftIcon: faStar,
        disabled: false,
        children: (
            <>
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
            </>
        ),
        className: 'w-[280px]'
    }
};

export const Icons: Story = {
    args: {
        label: 'Category 2',
        leftIcon: faStar,
        iconClass: 'text-primary-purple-30',
        disabled: false,
        children: (
            <>
                <MenuItem
                    iconClass='text-neutral-30'
                    rightIcon={faArrowUpRightFromSquare}
                    onClick={() => console.log('clicked')}>
                    Link 1
                </MenuItem>
                <MenuItem iconClass='text-neutral-30' rightIcon={faArrowUpRightFromSquare}>
                    Link 2
                </MenuItem>
                <MenuItem iconClass='text-neutral-30' rightIcon={faArrowUpRightFromSquare}>
                    Link 3
                </MenuItem>
            </>
        ),
        className: 'w-[280px]'
    }
};

export const DisabledDropdown: Story = {
    args: {
        label: 'Disabled Dropdown',
        disabled: true,
        children: (
            <>
                <MenuItem>Menu Item #1</MenuItem>
                <MenuItem>Menu Item #2</MenuItem>
                <MenuItem>Menu Item #3</MenuItem>
            </>
        )
    }
};

export const DisabledDropdownReason: Story = {
    args: {
        label: 'Disabled Dropdown with Reason',
        disabled: true,
        leftIcon: faStar,
        disabledReason: 'Insert reason here!',
        children: (
            <>
                <MenuItem>Menu Item #1</MenuItem>
                <MenuItem>Menu Item #2</MenuItem>
                <MenuItem>Menu Item #3</MenuItem>
            </>
        )
    }
};
