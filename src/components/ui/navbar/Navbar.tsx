import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-white shadow-md">
      <div className="container mx-auto h-full flex justify-between items-center px-8">
        <h1 className="text-2xl font-bold">StoreLand</h1>
        <SearchBar />
        <ul className="flex gap-6 text-lg">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/categorias">Categorías</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
