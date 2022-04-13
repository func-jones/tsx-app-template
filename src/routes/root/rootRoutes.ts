import { HomePage } from '../../pages/home/HomePage';

interface RootRoute {
    path: string;
    Element: () => JSX.Element;
    name: string;
}

const rootRoutes: RootRoute[] = [
    { path: '/', Element: HomePage, name: 'Home' },
];

export { rootRoutes };
