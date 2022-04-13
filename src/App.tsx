import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './routes/root/Routing';
import { rootRoutes } from './routes/root/rootRoutes';
import { homePageState, homePageReducer } from './pages/home/homePageReducer';
import { StoreProvider } from './context/StoreProvider';

export const App = () => {
    return (
        <div className="App">
            <StoreProvider
                initialState={homePageState}
                reducer={homePageReducer}
            >
                <BrowserRouter>
                    <Routing routes={rootRoutes} />
                </BrowserRouter>
            </StoreProvider>
        </div>
    );
};
