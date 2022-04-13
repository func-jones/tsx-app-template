import { Route, Routes } from 'react-router-dom';
export interface RouteInfo {
    path: string;
    Element: () => JSX.Element;
    name: string;
}

export type RoutingProps = {
    routes: RouteInfo[];
};

/**
 * Easy route mapping for routes/pages.
 *
 * @param {RoutingProps} props:
 *      {RouteInfo[]} routes -- the list of routes to map and populate within the Routing tree.
 * @returns {JSX.Element} a tree of Routes to render.
 */
export const Routing = ({ routes }: RoutingProps): JSX.Element => {
    return (
        <Routes>
            {routes.map(({ path, Element }, idx) => (
                <Route path={path} element={<Element />} key={idx} />
            ))}
        </Routes>
    );
};
