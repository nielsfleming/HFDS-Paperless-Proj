import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ForkliftScreen from './pages/ForkliftScreen';

interface requestObject {
    partNumber: string;
    binLocation: string;
    warehouseId: string;
}

export const jobQueue: requestObject[] = [];

function App() {
    
    return (
        <RouterProvider
            router={createBrowserRouter([{ path: '/', element: <ForkliftScreen {...jobQueue} /> }])}
        />
    );
}

export default App;
