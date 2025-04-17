import React from 'react';

interface ProductProps {
  name: string;
  price: number;
  image: string;
  description: string;
}

const Product: React.FC<ProductProps> = ({
  name,
  price,
  image,
  description,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
          <p className="text-sm text-gray-500 mb-2 line-clamp-2">
            {description}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-orange-600 font-bold text-md">
            ${price.toFixed(2)}
          </span>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-xl text-sm font-medium transition-all">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
