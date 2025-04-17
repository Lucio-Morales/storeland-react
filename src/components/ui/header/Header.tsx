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
                `w-32 text-center px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-300
       border-[#F97316] ${
         isActive
           ? 'bg-[#ffd8a9] text-[#D97706]'
           : 'text-[#F97316] hover:bg-[#ffd8a9] hover:text-[#D97706]'
       }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
