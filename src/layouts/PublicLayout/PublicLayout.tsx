import { Link, Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/login">Login</Link> |
        <Link to="/register">Registro</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
