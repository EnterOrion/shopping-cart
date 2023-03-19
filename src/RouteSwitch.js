import React from "react";
import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import App from "./App";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import ProductPage from "./components/ProductPage";
import { CartContextProvider } from "./contexts/CartContext";


const RouteSwitch = () => {
  const [items, setItems] = React.useState(1);

  return (
    <div>
      <Outlet context={[items, setItems]} />
      <BrowserRouter>
          <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Products />} />
                <Route path="/cart" element={<Checkout />} />
                <Route path="/shop/:productId" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;