import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/login', label: 'Iniciar sesion' },
  ];
  return (
    <header className="w-full py-4 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold">
          🏋️‍♂️ GymStore
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#6882B4]'
                    : 'text-gray-700 hover:text-[#6882B4]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/register"
            className="ml-4 bg-[#94B9FF] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#6882B4] transition"
          >
            Crear cuenta
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
