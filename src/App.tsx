import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './routes/root/Routing';
import { rootRoutes } from './routes/root/rootRoutes';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routing routes={rootRoutes} />
            </div>
        </BrowserRouter>
    );
};

export { App };
