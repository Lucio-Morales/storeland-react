import { RouteObject } from 'react-router-dom';
import Home from '../pages/home';
import RegisterPage from '../pages/register';
import LoginPage from '../pages/login';

export const publicRoutes: RouteObject[] = [
  { path: '', element: <Home /> },
  { path: 'login', element: <LoginPage /> },
  { path: 'register', element: <RegisterPage /> },
];
