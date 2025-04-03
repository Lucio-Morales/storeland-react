import { RouteObject } from 'react-router-dom';
import Home from '../pages/home';
import RegisterPage from '../pages/register';
import LoginPage from '../pages/login';
import NotFoundPage from '../components/ui/NotFoundPage';

export const publicRoutes: RouteObject[] = [
  { index: true, element: <Home /> },
  { path: 'login', element: <LoginPage /> },
  { path: 'register', element: <RegisterPage /> },
  { path: '*', element: <NotFoundPage /> },
];
