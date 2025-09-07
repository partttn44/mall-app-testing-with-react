import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ import router
import "./index.css";
import HomePage from "./views/home/HomePage";
import ProductDetailPage from "./views/product/ProductDetail";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
