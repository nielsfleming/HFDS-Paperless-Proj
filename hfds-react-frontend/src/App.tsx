import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ForkliftScreen from './pages/ForkliftScreen';

function App() {
    return (
        <RouterProvider
            router={createBrowserRouter([{ path: '/', element: <ForkliftScreen /> }])}
        />
    );
}

export default App;
