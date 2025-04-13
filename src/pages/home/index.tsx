import Category from '../../components/ui/card/Category';
import { Dumbbell, Shirt, FlaskConical, Thermometer } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full min-h-screen py-10 px-2">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Explorá nuestras categorías
      </h1>

      {/* GRID CONTAINER */}
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 w-full p-2">
        <Category
          title="Suplementos"
          description="Todo lo que necesitás para rendir al máximo"
          icon={<FlaskConical size={60} strokeWidth={1.5} />}
        />
        <Category
          title="Ropa deportiva"
          description="Prendas cómodas y resistentes para entrenar"
          icon={<Shirt size={60} strokeWidth={1.5} />}
        />
        <Category
          title="Accesorios"
          description="Elementos clave para cada rutina"
          icon={<Dumbbell size={60} strokeWidth={1.5} />}
        />
        <Category
          title="Térmicas y medias"
          description="Comodidad total antes y después de entrenar"
          icon={<Thermometer size={60} strokeWidth={1.5} />}
        />
      </div>
    </div>
  );
};

export default Home;
