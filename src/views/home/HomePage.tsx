import React, { useEffect, useState } from "react";
import Appbar from "../../components/Appbar";
import SideBar from "../../components/SideBar";
import ProductCard from "../../components/ProductCard";
import {
  getAllProducts,
  getCategories,
} from "../../controllers/productController";
import type { Product } from "../../models/ProductModel";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = sessionStorage.getItem("products");
    const storedCategories = sessionStorage.getItem("categories");

    if (storedProducts && storedCategories) {
      const prod = JSON.parse(storedProducts) as Product[];
      const cat = JSON.parse(storedCategories) as string[];
      setAllProducts(prod);
      setProducts(prod);
      setCategories(cat);
      setLoading(false);
      return;
    }

    Promise.all([getAllProducts(), getCategories()])
      .then(([p, c]) => {
        setAllProducts(p);
        setProducts(p);
        setCategories(c);
        sessionStorage.setItem("products", JSON.stringify(p));
        sessionStorage.setItem("categories", JSON.stringify(c));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setProducts(
      cat === "All"
        ? allProducts
        : allProducts.filter((p) => p.category === cat)
    );
  };

  const goToProductDetail = (id: number) => {
    navigate("/product", { state: { productId: id } });
  };

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 font-medium">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-gray-50">
      <Appbar title="Glamazon" />

      <div className="flex gap-6 flex-1 h-[calc(100vh-64px)]">
        <SideBar
          category={["All", ...categories]}
          selected={selectedCategory}
          onSelect={handleSelectCategory}
        />

        <div className="flex-1 flex flex-col h-full p-4 overflow-auto">
          <h1 className="text-xl font-semibold mb-4">
            {selectedCategory === "All"
              ? "All Products"
              : `Category: ${selectedCategory}`}
          </h1>

          <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
            {products.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onClick={goToProductDetail}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
