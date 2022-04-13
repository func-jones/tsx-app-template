import { HomeMessage } from '../../components/HomeMessage';
import { StoreProvider, useStore } from '../../context/StoreProvider';
import {
    homePageState,
    homePageReducer,
    changeBgColor,
} from './homePageReducer';
import './HomePage.scss';

const HomePage = () => {
    const [{ backgroundColor }, dispatch] = useStore();

    const handleClick = () => {
        switch (backgroundColor) {
            case '#f0f0f0': {
                dispatch(changeBgColor('#34eb40'));
                break;
            }
            case '#34eb40': {
                dispatch(changeBgColor('#348ceb'));
                break;
            }
            case '#348ceb': {
                dispatch(changeBgColor('#eb3440'));
                break;
            }
            default: {
                dispatch(changeBgColor('#f0f0f0'));
            }
        }
    };

    return (
        <StoreProvider initialState={homePageState} reducer={homePageReducer}>
            <div className="HomePage" style={{ backgroundColor }}>
                <HomeMessage />
                <button onClick={handleClick}>Change Color!</button>
            </div>
        </StoreProvider>
    );
};

export { HomePage };
