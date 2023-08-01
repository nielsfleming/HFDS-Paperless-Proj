import { Button, SearchBar, Dropdown } from 'fecomponents';
import React from 'react';

interface TableItem {
    partNumber: number;
    warehouse: string;
    bins: number;
    quantity: number;
    fifoLocation: string;
}
export interface TableProps {
    item: TableItem[];
}

export default function Table(props: TableProps) {
    var ReactNode = React.createElement(
        'ul',
        {
            className: 'myList'
        },
        React.createElement('li', { id: 'li1' }, 'one'),
        React.createElement('li', { id: 'li2' }, 'two'),
        React.createElement('li', { id: 'li3' }, 'three')
    );

    return (
        <div className='mx-10 mt-5 border-2'>
            <div className='flex items-center justify-between flex-row '>
                <SearchBar
                    placeholder='Search for part number'
                    className="'w-[280px] m-5 border-b-2"
                />
                <Dropdown label='Filter' className='w-[280px] m-5' children={ReactNode} />
            </div>

            <table className='w-full'>
                <thead>
                    <tr className='text-left border-b border-neutral-10'>
                        <th className='py-4'>Part Number</th>
                        <th>Warehouse</th>
                        <th>Number of Bins</th>
                        <th>Quantity</th>
                        <th>Requests</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='even:bg-neutral-10'>
                        <td>123</td>
                        <td>Niels</td>
                        <td>123</td>
                        <td>123</td>
                        <td>
                            <Button>Request a thang</Button>
                        </td>
                    </tr>
                    {props.item.map(row => (
                        <tr key={row.partNumber} className='even:bg-neutral-10'>
                            <td>{row.partNumber}</td>
                            <td>{row.warehouse}</td>
                            <td>{row.bins}</td>
                            <td>{row.quantity}</td>
                            <td>
                                <Button>Request a thang</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
