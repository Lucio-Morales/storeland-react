import { Link, Outlet } from 'react-router-dom';

const PrivateLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/app/dashboard">Dashboard</Link> |{' '}
        <Link to="/app/profile">Perfil</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
