import React from "react";
import {Routes, Route, Outlet } from "react-router-dom";
import App from "./App";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import ProductPage from "./components/ProductPage";
import CheckoutComplete from "./components/CheckoutComplete";
import { HashRouter } from "react-router-dom";

const RouteSwitch = () => {
  const [items, setItems] = React.useState(1);

  return (
    <div>
      <Outlet context={[items, setItems]} />
      
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/shop" element={<Products />} />
            <Route path="/cart" element={<Checkout />} />
            <Route path="/shop/:productId" element={<ProductPage />} />
            <Route path="/checkout-complete" element={<CheckoutComplete />} />
          </Routes>
        </HashRouter>
    </div>
  );
};

export default RouteSwitch;
