import './App.css';
import Table, { TableProps } from './components/Table';
import JobAccept from './components/JobAccept';
import { Navbar } from 'fecomponents';
import { useState, useEffect } from 'react';
import logo from './img/martinreaLogo.png';

export default function App() {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        fetch('http://localhost:5000/members')
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log('in data print');
                console.log(data);
            });
    }, []);

    const props: TableProps = {
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
        ]
    };

    return (
        <div>
            <Navbar icon={<img src={logo} width={50} height={50}/>} pageTitle='Supermarket FIFO Report' variant='display' />
            <Table {...props} />
            <JobAccept />
        </div>
    );
}
