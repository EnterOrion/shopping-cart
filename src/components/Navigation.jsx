import React from "react";
import { Link } from "react-router-dom";
import useItemStore from "../contexts/CartContext";

const Navigation = () => {
  const items = useItemStore((state) => state.itemsArray);
  const itemAmount = items.length;

  return (
    <nav>
      <ul>
        <div className="logo-column">
          <li className="logo">
            <Link to="/">The Shop at Redpoint </Link>
          </li>
        </div>
        <div className="navigation-column">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">{`Cart (${itemAmount})`}</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
