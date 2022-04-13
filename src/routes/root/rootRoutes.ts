import { HomePage } from '../../pages/home/HomePage';
import { RouteInfo } from './Routing';

interface RootRoute extends RouteInfo {
    /**
     * example interface extension if later routes require more customization
     */
}

export const rootRoutes: RootRoute[] = [
    { path: '/', Element: HomePage, name: 'Home' },
];
