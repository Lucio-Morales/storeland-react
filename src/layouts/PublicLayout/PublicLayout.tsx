import { Outlet } from 'react-router-dom';
import Header from '../../components/ui/header/Header';
import Footer from '../../components/ui/footer/Footer';

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex justify-center px-4 py-8 border-2 ">
        <div className="border-2 max-w-6xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
