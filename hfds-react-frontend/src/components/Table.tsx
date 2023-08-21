import { Button, SearchBar, Select, MenuItem, Pagination } from 'fecomponents';
import { useState } from 'react';

interface TableItem {
    partNumber: number;
    warehouse: string;
    bins: number;
    quantity: number;
    fifoLocation: string;
}
export interface TableProps {
    item: TableItem[];
    setScrub: React.Dispatch<React.SetStateAction<{ label: string; description: string }>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Table(props: TableProps) {
    const [value, setValue] = useState('Warehouse 1');
    const [diep, setDiep] = useState(1);

    return (
        <div className='shadow-full-lg rounded-md mx-14'>
            <div className='flex items-center justify-between flex-row'>
                <SearchBar
                    size='sm'
                    placeholder='Search for part number'
                    className='w-1/3 m-5 border-b-2'
                />
                <Select
                    selectedValue={value}
                    onSelect={v => setValue(v as string)}
                    placeholder='Filter'
                    className='w-[280px] m-5'>
                    <MenuItem>Warehouse #1</MenuItem>
                </Select>
            </div>
            <table className='w-full'>
                <thead>
                    <tr className='text-left border-b border-neutral-10'>
                        <th className='pl-5 [&]:py-3'>Part Number</th>
                        <th>Warehouse</th>
                        <th>Number of Bins</th>
                        <th>Quantity</th>
                        <th className='pr-5'>Requests</th>
                    </tr>
                </thead>
                <tbody>
                    {props.item.map(row => (
                        <tr key={row.partNumber} className='even:bg-neutral-10 p-5'>
                            <td className='pl-5 [&]:py-4 w-fit'>{row.partNumber}</td>
                            <td className=''>{row.warehouse}</td>
                            <td className=''>{row.bins}</td>
                            <td className=''>{row.quantity}</td>
                            <td className='text-end pr-5'>
                                <Button
                                    onClick={() => {
                                        props.setScrub({
                                            label: 'Part Location',
                                            description: `Part #${row.partNumber} is in ${row.warehouse} in spot: ${row.fifoLocation}`
                                        });
                                        props.setOpen(true);
                                    }}>
                                    Locate part
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='py-3'>
                <Pagination page={diep} onPageChange={setDiep} max={5} count={3} />
            </div>
        </div>
    );
}
