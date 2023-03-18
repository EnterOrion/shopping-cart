import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import ProductPage from "./components/ProductPage";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/cart" element={<Checkout />} />
          <Route path="/shop/:productId" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
  );
};

export default RouteSwitch;