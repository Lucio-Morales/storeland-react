import { Outlet } from 'react-router-dom';
import Header from '../../components/ui/header/Header';
import Footer from '../../components/ui/footer/Footer';

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 border-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
