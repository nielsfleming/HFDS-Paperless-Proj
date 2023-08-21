import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ForkliftScreen from './pages/ForkliftScreen';
import SupermarketRowScreen from './pages/SupermarketRowScreen';
import { useEffect, useState } from 'react'

export interface Job {
    partNumber: string;
    binLocation: string;
    warehouseId: string;
    quantity: number;
}

//will be used to populate array that is then filtered
// useEffect(() => {
//     fetch('http://localhost:5000/members')
//         .then(res => res.json())
//         .then(data => {
//             setData(data);
//             console.log('in data print');
//             console.log(data);
//         });
// }, []);

const jobQueue: Job[] = [{partNumber: "84557234", binLocation: "W25", warehouseId: "Warehouse 2", quantity: 400}, {partNumber: "84557244", binLocation: "G28", warehouseId: "Warehouse 1", quantity: 950}, {partNumber: "12376588", binLocation: "E15", warehouseId: "Warehouse 2", quantity: 425}];



const filterJobs = (jobs: Job[]) => jobs.filter((s => o => !s.has(o.partNumber) && s.add(o.partNumber))(new Set));

const filteredJobs = filterJobs(jobQueue);

// TODO: Create an array filtering fucntion for the FIFO functionality
// could have an array that stores what parts have a given fifo location already, cross referencing
// if so ignore, if not append to two different arrays

function App() {
    return (
        <RouterProvider
            router={createBrowserRouter([{ path: '/', element: <ForkliftScreen {...{jobQueue}} /> }, { path: '/market', element: <SupermarketRowScreen jobQueue={filteredJobs} /> }])}
        />
    );
}

export default App;
