import { HomeMessage } from '../../components/HomeMessage';
import { useStore } from '../../context/StoreProvider';
import { changeBgColor } from './homePageReducer';
import './HomePage.scss';

export const HomePage = () => {
    const [state, dispatch] = useStore();

    const handleClick = () => {
        switch (state.backgroundColor) {
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
        <div
            className="HomePage"
            style={{ backgroundColor: state.backgroundColor }}
        >
            <HomeMessage />
            <br />
            <button
                style={{ marginTop: '15px', fontSize: '18px' }}
                onClick={handleClick}
            >
                Change Color!
            </button>
        </div>
    );
};
