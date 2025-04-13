import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/ui/header/Header';
import Footer from '../../components/ui/footer/Footer';
import Hero from '../../components/ui/hero/Hero';

const PublicLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {isHome && <Hero />}
      <main className="flex-grow flex justify-center">
        <div className=" max-w-6xl mx-auto w-full p-2">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
