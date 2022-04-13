import { Routes, Route } from 'react-router-dom';

interface RouteInfo {
    path: string;
    Element: () => JSX.Element;
    name: string;
}

type RoutingProps = {
    routes: RouteInfo[];
};

const Routing = ({ routes }: RoutingProps) => {
    return (
        <Routes>
            {routes.map(({ path, Element }, idx) => (
                <Route path={path} element={<Element />} key={idx} />
            ))}
        </Routes>
    );
};

export { Routing };
export type { RoutingProps, RouteInfo };
