import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout/PublicLayout';
import RequireAuth from '../components/auth/RequireAuth';
import PrivateLayout from '../layouts/PrivateLayout/PrivateLayout';
import { publicRoutes } from './publicRoutes';
import { privateRoutes } from './privateRoutes';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: publicRoutes,
  },
  {
    path: '/app',
    element: (
      <RequireAuth>
        <PrivateLayout />
      </RequireAuth>
    ),
    children: privateRoutes,
  },
]);
