import type { Meta, StoryObj } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Meatballs } from '.';
import { MenuItem } from '../MenuItem';
import { useState } from 'react';

const meta: Meta<typeof Meatballs> = {
    component: Meatballs
};

export default meta;
type Story = StoryObj<typeof Meatballs>;

export const TableExample: Story = {
    render: () => (
        <table>
            <tbody>
                <tr className='border-y'>
                    <th className='w-[200px] p-2'>Category 1</th>
                    <th className='w-[200px] p-2'>Category 2</th>
                </tr>
                <tr className='border-y'>
                    <td className='p-2'>Data 1</td>
                    <td className='p-2'>Data 2</td>
                    <td className='p-2'>
                        <Meatballs className='w-[150px]'>
                            <MenuItem>
                                <FontAwesomeIcon className='mr-3' icon={faPencil} />
                                Edit
                            </MenuItem>
                            <MenuItem>
                                <FontAwesomeIcon className='mr-3' icon={faTrash} />
                                Delete
                            </MenuItem>
                        </Meatballs>
                    </td>
                </tr>
                <tr className='border-y'>
                    <td className='p-2'>Data 1</td>
                    <td className='p-2'>Data 2</td>
                    <td className='p-2'>
                        <Meatballs className='w-[150px]'>
                            <MenuItem>
                                <FontAwesomeIcon className='mr-3' icon={faPencil} />
                                Edit
                            </MenuItem>
                            <MenuItem>
                                <FontAwesomeIcon className='mr-3' icon={faTrash} />
                                Delete
                            </MenuItem>
                        </Meatballs>
                    </td>
                </tr>
            </tbody>
        </table>
    )
};

export const CenterAlign: Story = {
    args: {
        align: 'center',
        size: 'lg'
    },
    render: args => (
        <div className='flex justify-center'>
            <Meatballs {...args} className='w-[150px]'>
                <MenuItem>
                    <FontAwesomeIcon className='mr-3' icon={faPencil} />
                    Edit
                </MenuItem>
                <MenuItem>
                    <FontAwesomeIcon className='mr-3' icon={faTrash} />
                    Delete
                </MenuItem>
            </Meatballs>
        </div>
    )
};

export const RightAlign: Story = {
    args: {
        align: 'right',
        size: 'sm'
    },
    render: args => (
        <div className='flex justify-center'>
            <Meatballs {...args} className='w-[150px]'>
                <MenuItem>
                    <FontAwesomeIcon className='mr-3' icon={faPencil} />
                    Edit
                </MenuItem>
                <MenuItem>
                    <FontAwesomeIcon className='mr-3' icon={faTrash} />
                    Delete
                </MenuItem>
            </Meatballs>
        </div>
    )
};

export const DifferentIconControlled: Story = {
    args: {
        align: 'left',
        size: 'sm',
        icon: faChevronDown
    },
    render: args => {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- Hooks do work in Storybook render function
        const [open, setOpen] = useState(false);
        return (
            <div
                className='flex justify-center rounded bg-neutral-10 w-full px-2 '
                onClick={() => setOpen(!open)}>
                <Meatballs {...args} controlled isOpen={open} className='w-[150px] mt-2'>
                    <MenuItem>
                        <FontAwesomeIcon className='mr-3' icon={faPencil} />
                        Edit
                    </MenuItem>
                    <MenuItem>
                        <FontAwesomeIcon className='mr-3' icon={faTrash} />
                        Delete
                    </MenuItem>
                </Meatballs>
            </div>
        );
    }
};
