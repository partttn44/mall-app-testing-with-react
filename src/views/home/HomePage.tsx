import React, { useEffect, useState } from "react";
import Appbar from "../../components/Appbar";
import SideBar from "../../components/SideBar";
import {
  getAllProducts,
  getCategories,
} from "../../controllers/productController";
import type { Product } from "../../models/ProductModel";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const [products, setCart] = useState<Product[]>([]);
  const [categories, setCategory] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then(setCart)
      .catch((err) => console.error(err));

    getCategories()
      .then(setCategory)
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const navigate = useNavigate();

  const goToProductDetail = (id: number) => {
    navigate("/product", { state: { productId: id } });
  };

  if (loading)
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 font-medium">Loading products...</p>
      </div>
    );

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-gray-50">
      <Appbar title="Glamazon" />

      <div className="flex gap-6 flex-1 h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <SideBar category={categories} />

        <div className="flex-1 flex flex-col h-full p-4 overflow-auto">
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow aspect-[3/3.5] flex flex-col"
                onClick={() => goToProductDetail(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-7/12 object-cover border-b border-gray-300"
                />
                <div className="p-4">
                  <h2 className="text-base font-bold text-gray-700">
                    {item.title}
                  </h2>
                  <p className="text-gray-700">{item.price} THB</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
