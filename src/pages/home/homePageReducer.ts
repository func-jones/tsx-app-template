import { Action } from '../../context/Action';

interface HomePageState {
    backgroundColor: string;
}

export const homePageState: HomePageState = {
    backgroundColor: '#f0f0f0',
};

const CHANGE_BG_COLOR = 'APP/HOME/CHANGE_BG_COLOR';
export const changeBgColor = (color: string) => ({
    type: CHANGE_BG_COLOR,
    payload: color,
});

export const homePageReducer = (
    state: HomePageState,
    { type, payload }: Action
) => {
    switch (type) {
        case CHANGE_BG_COLOR: {
            return {
                ...state,
                backgroundColor: payload,
            };
        }
    }
};
