import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default RequireAuth;
