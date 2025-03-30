import { RouteObject } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Profile from '../pages/profile';

export const privateRoutes: RouteObject[] = [
  { path: 'dashboard', element: <Dashboard /> },
  { path: 'profile', element: <Profile /> },
];
