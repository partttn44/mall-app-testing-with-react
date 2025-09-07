import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProductById } from "../../controllers/productController";
import type { Product } from "../../models/ProductModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCoffee } from "@fortawesome/free-solid-svg-icons";

const ProductDetailPage: React.FC = () => {
  const location = useLocation();
  const { productId } = location.state as { productId: number };

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;
    getProductById(productId)
      .then(setProduct)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading)
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 font-medium">Loading product...</p>
      </div>
    );

  if (!product)
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 font-medium">Product not found</p>
      </div>
    );

  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-50 p-4 md:p-6">
      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden">
        {/* Product Image */}
        <div className="w-full md:w-1/2 p-4 md:p-6 flex items-center justify-center bg-amber-50">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 md:h-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-start">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {product.title}
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-amber-700 mb-4">
            ${product.price}
          </p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="italic text-gray-500">Category: {product.category}</p>
          <div className="mt-4">
            <button className="px-6 py-2 bg-amber-500 text-white font-semibold rounded-md hover:bg-amber-600">
              <FontAwesomeIcon icon={faCartShopping} />
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
