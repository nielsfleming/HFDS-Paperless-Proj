import Table, { TableProps } from '../components/Table';
import JobAccept from '../components/JobAccept';
import { Navbar } from 'fecomponents';
import { useState, useEffect } from 'react';
import logo from '../img/martinreaLogo.png';
import type { Job } from '../App';

export default function ForkliftScreen({ jobQueue }: { jobQueue: Job[] }) {
    const [data, setData] = useState([{}]);
    const [open, setOpen] = useState(false);
    const [scrub, setScrub] = useState({ label: 'scrub', description: 'scrub-a-dub-dub' });

    // useEffect(() => {
    //     fetch('http://localhost:5000/members')
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data);
    //             console.log('in data print');
    //             console.log(data);
    //         });
    // }, []);

    const handleModalOpen = () => {
        setOpen(true);
    };

    console.log(jobQueue);

    // data will be pased in as table properties, received via http request
    const props: TableProps &
        React.Dispatch<React.SetStateAction<boolean>> & {
            setScrub: React.Dispatch<React.SetStateAction<{ label: string; description: string }>>;
        } = {
        item: [
            {
                partNumber: 123456,
                warehouse: 'Warehouse 1',
                bins: 12,
                quantity: 600,
                fifoLocation: 'G245'
            },
            {
                partNumber: 654321,
                warehouse: 'Warehouse 2',
                bins: 8,
                quantity: 400,
                fifoLocation: 'G420'
            }
        ],
        setScrub: setScrub,
        setOpen: setOpen
    };

    return (
        <div>
            <Navbar
                icon={<img src={logo} width={50} height={50} />}
                pageTitle='Supermarket FIFO Report'
                variant='display'
            />
            <Table {...props} setScrub={setScrub} setOpen={handleModalOpen} />
            <JobAccept open={open} setOpen={setOpen} scrub={scrub} />
        </div>
    );
}