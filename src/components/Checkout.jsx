/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import useItemStore from "../contexts/CartContext";
import CartIcon from "../images/carro.png";
import { Link } from "react-router-dom";

const Checkout = () => {
  const items = useItemStore((state) => state.itemsArray);
  const [itemDisplay, setItemDisplay] = useState([]);

  // Gets contents of itemStore on mount
  useEffect(() => {
    for (let i = 0; i < items.length; i++) {
      setItemDisplay((prevThingsArray) => {
        return [...prevThingsArray, items[i]];
      });
    }
  }, []);

  // Price total
  let costTotal = 0;
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items[i].quantity; j++) {
      costTotal += items[i].price;
    }
  }

  // Clear the cart's state after checkout
  const checkoutManager = () => {
    items.length = 0;
  };

  // Maps the cart's contents onto the page
  const listItems = itemDisplay.map((element) => {
    return (
      <div key={element.id} className="checkout-item">
        <img className="checkout-image" src={element.image} alt={element.alt} />
        <div className="checkout-info">
          <div className="checkout-description">
            <Link to={`/shop/${element.id}`}>
              <div className="checkout-title">
                <strong>{element.name}</strong>
              </div>
            </Link>
            <div>${element.price}</div>
            <div>Quantity: {element.quantity}</div>
            <div className="modify-quantity-buttons">
              <strong>
                <span
                  className="modify-quantity"
                  onClick={() => {
                    // If quantity is at one, user should press 'remove' instead
                    if (element.quantity === 1) {
                      return;
                    }

                    // Else decrease quantity by one
                    setItemDisplay(
                      itemDisplay.map((x) => {
                        if (x.id === element.id)
                          return {
                            ...x,
                            quantity: x.quantity - 1,
                          };
                        return x;
                      })
                    );

                    for (let i = 0; i < items.length; i++) {
                      if (items[i].name === element.name) {
                        items[i].quantity = items[i].quantity - 1;
                      }
                    }
                  }}
                >
                  -
                </span>
              </strong>
              <strong>
                <span
                  className="modify-quantity"
                  onClick={() => {
                    // Increase quantity by one
                    setItemDisplay(
                      itemDisplay.map((x) => {
                        if (x.id === element.id)
                          return {
                            ...x,
                            quantity: x.quantity + 1,
                          };
                        return x;
                      })
                    );

                    for (let i = 0; i < items.length; i++) {
                      if (items[i].name === element.name) {
                        items[i].quantity = items[i].quantity + 1;
                      }
                    }
                  }}
                >
                  +
                </span>
              </strong>
            </div>
          </div>
          <div
            className="remove-item"
            value={element.name}
            // Removes item completely from cart
            onClick={() => {
              setItemDisplay(itemDisplay.filter((a) => a.id !== element.id));

              for (let i = 0; i < items.length; i++) {
                if (items[i].name === element.name) {
                  items.splice(i, 1);
                }
              }
            }}
          >
            Delete
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Navigation />
      <div className="checkout-page">
        <div className="checkout-and-title">
          <div className="icon-header">
            <img className="cart-icon" src={CartIcon} alt="Cart icon" />
            <h1 className="page-title">Shopping Cart</h1>
          </div>
          <div className="checkout-container">
            {listItems.length === 0 && <p>Your cart is empty!</p>}
            {listItems}
          </div>
          {listItems.length > 0 && (
            <div className="checkout-total">
              <strong>Total:</strong> {`$ ${parseFloat(costTotal.toFixed(2))}`}{" "}
              <br />
              <Link to="/checkout-complete">
                <button className="checkout-button" onClick={checkoutManager}>
                  Checkout
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
