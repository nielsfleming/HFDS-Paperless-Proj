import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '.';
import { Checkbox } from '../Checkbox';
import { MenuItem, MenuItemProps } from '../MenuItem';
import { useState } from 'react';
import { Button } from '../Button';

const meta: Meta<typeof Accordion> = {
    component: Accordion
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const SingleDropdown: Story = {
    args: {
        accordionPairs: [
            {
                heading: 'Title One',
                content: <div className='px-3 py-2'>This the the content.</div>,
                disabled: false
            }
        ]
    }
};

function CheckboxWrapper() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [selected, setSelected] = useState<MenuItemProps['value'][]>([]);
    const val1 = 1;
    const val2 = 2;
    const val3 = 3;

    const handleMenuClick = (check: boolean, value: MenuItemProps['value']) => {
        console.log(check);
        console.log(value);
        if (check) {
            setSelected([...selected, value]);
        } else {
            setSelected(selected.filter(val => val !== value));
        }
    };
    return (
        <div className='w-1/3'>
            <Accordion
                accordionPairs={[
                    {
                        heading: 'Dropdown',
                        content: (
                            <>
                                <MenuItem
                                    onClick={() => {
                                        setChecked1(!checked1);
                                        handleMenuClick(!checked1, val1);
                                    }}
                                    value={val1}>
                                    <Checkbox checked={checked1}>Option 1</Checkbox>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        setChecked2(!checked2);
                                        handleMenuClick(!checked2, val2);
                                    }}
                                    value={val2}>
                                    <Checkbox checked={checked2}>Option 2</Checkbox>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        setChecked3(!checked3);
                                        handleMenuClick(!checked3, val3);
                                    }}
                                    value={val3}
                                    className='last:rounded-b-lg'>
                                    <Checkbox checked={checked3}>Option 3</Checkbox>
                                </MenuItem>
                            </>
                        )
                    }
                ]}
            />
            <Button onClick={() => console.log(selected)}>Log the state in console</Button>
        </div>
    );
}

export const DropdownAccordion: Story = {
    args: {},
    render: () => <CheckboxWrapper />
};

export const DoubleDropdown: Story = {
    args: {
        accordionPairs: [
            {
                heading: 'Title One',
                content: <div className='px-3 py-2'>This is the content.</div>,
                disabled: false
            },
            {
                heading: 'Title Two',
                content: <div className='px-3 py-2'>This is the content.</div>,
                disabled: false
            }
        ]
    }
};

export const TripleDropdown: Story = {
    args: {
        accordionPairs: [
            {
                heading: 'Title One',
                content: <div className='px-3 py-2'>This is the content.</div>,
                disabled: false
            },
            {
                heading: 'Title Two',
                content: <div className='px-3 py-2'>This is the content.</div>,
                disabled: true
            },
            {
                heading: 'Title Three',
                content: <div className='px-3 py-2'>This is the content.</div>,
                disabled: false
            }
        ]
    }
};
