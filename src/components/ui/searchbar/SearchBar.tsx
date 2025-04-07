import { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Buscando:', search);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2 h-10">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-80 h-full px-4 py-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2"
        style={{ paddingLeft: '12px' }}
      />
      <button className="h-full">Buscar</button>
    </form>
  );
};

export default SearchBar;
