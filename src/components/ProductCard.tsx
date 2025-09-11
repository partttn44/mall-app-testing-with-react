import React from "react";
import type { Product } from "../models/ProductModel";

type ProductCardProps = {
  product: Product;
  onClick: (id: number) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product.id)}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow aspect-[3/3.5] flex flex-col"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-7/12 object-cover border-b border-gray-300"
      />
      <div className="p-4">
        <h2 className="text-base font-bold text-gray-700">{product.title}</h2>
        <p className="text-gray-700">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
