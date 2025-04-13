import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/login', label: 'Iniciar sesión' },
    { to: '/register', label: 'Crear cuenta' },
  ];

  return (
    <header className="w-full py-4 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-[#060215] transition">
          🏋️‍♂️ GymStore
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#aed0e9] text-[#060215]'
                    : 'hover:bg-[#94a8cf] hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* <Link
            to="/register"
            className="ml-2 bg-[#94B9FF] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#6882B4] transition duration-300"
          >
            Crear cuenta
          </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
