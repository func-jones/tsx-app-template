import { useReducer, useContext, createContext } from 'react';

/**
 * Boilerplate for creating and providing a store to components.
 */

type State = Record<any, any>;

// TODO: Find out why TS thinks initialState should return an action
interface StoreProviderProps {
    children: JSX.Element[] | JSX.Element;
    initialState: State | any;
    reducer: any;
}

/**
 * A context store template.
 */
const Store = createContext<any>(null);

/**
 * A custom hook that grants a component access to a store within the context the component lives in.
 *
 * @returns context object for the provided store
 */
const useStore = () => useContext(Store);

/**
 * A wrapper component to easily create and provide context/state to any components passed as children.
 *
 *
 * @param {JSX.Element} children - the children components passed within the provider.
 * @param {State} initialState - the initial state object provided to the store before the state is consumed.
 * @param {Reducer} reducer - the function that receives state and action and performs the necessary
 * state operations, then returns the new state.
 * @returns Store Provider wrapper
 */
const StoreProvider = ({
    children,
    initialState,
    reducer,
}: StoreProviderProps): JSX.Element => {
    const [globalState, dispatch] = useReducer(reducer, initialState);
    return (
        <Store.Provider value={[globalState, dispatch]}>
            {children}
        </Store.Provider>
    );
};

export { Store, useStore, StoreProvider };
