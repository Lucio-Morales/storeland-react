import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Category: React.FC<CategoryCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-[#ffffff] p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full">
      {/* Icono centrado */}
      <div className="bg-[#646464] py-4 rounded-xl text-[#ffffff] mb-2 flex justify-center text-4xl md:text-5xl">
        {icon}
      </div>

      {/* Título y descripción */}
      <div className="flex flex-col items-center text-center mb-4 px-2">
        <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">
          {title}
        </h2>
        <p className="text-sm md:text-base text-gray-800">{description}</p>
      </div>

      <div className="flex justify-center">
        <button className="group relative overflow-hidden bg-orange-600 text-white px-4 py-2 rounded-lg text-sm transition-all cursor-pointer">
          <span className="relative z-10 flex items-center gap-2">
            Ver productos
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 bg-[#f57940] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
        </button>
      </div>
    </div>
  );
};

export default Category;
