import Category from '../../components/ui/card/Category';
import { Dumbbell, Shirt, FlaskConical, Thermometer } from 'lucide-react';
import Product from '../../components/ui/card/Product';
import creatina from '../../assets/image/creatina.jpg';

const Home = () => {
  return (
    <div className="w-full min-h-screen py-10 px-2">
      {/* CATEGORIES SECTION */}
      <h1 className="text-3xl text-left font-bold mb-6 text-gray-800">
        Explorá nuestras categorías
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full p-2">
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

      {/* PRODUCTS SECTION */}
      <h1 className="text-3xl text-left font-bold mt-22 mb-6 text-gray-800">
        Productos
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full p-2">
        <Product
          name="Product 1"
          price={2500}
          image={creatina}
          description="This is a product simulation"
        />
        <Product
          name="Product 1"
          price={2500}
          image={creatina}
          description="This is a product simulation"
        />
        <Product
          name="Product 1"
          price={2500}
          image={creatina}
          description="This is a product simulation"
        />
        <Product
          name="Product 1"
          price={2500}
          image={creatina}
          description="This is a product simulation"
        />
        <Product
          name="Product 1"
          price={2500}
          image={creatina}
          description="This is a product simulation"
        />
        <Product
          name="Product 1"
          price={2500}
          image={creatina}
          description="This is a product simulation"
        />
        <Product
          name="Product 1"
          price={2500}
          image={creatina}
          description="This is a product simulation"
        />
        <Product
          name="Product 1"
          price={2500}
          image={creatina}
          description="This is a product simulation"
        />
        <Product
          name="Product 1"
          price={2500}
          image={creatina}
          description="This is a product simulation"
        />
        <Product
          name="Product 1"
          price={2500}
          image={creatina}
          description="This is a product simulation"
        />
        <Product
          name="Product 1"
          price={2500}
          image={creatina}
          description="This is a product simulation"
        />
        <Product
          name="Product 1"
          price={2500}
          image={creatina}
          description="This is a product simulation"
        />
      </section>
    </div>
  );
};

export default Home;
