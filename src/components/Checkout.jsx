import React, {useEffect, useState} from "react";
import Navigation from "./Navigation";
import useItemStore from "../contexts/CartContext";

const Checkout = () => {
  const items = useItemStore((state) => state.itemsArray);
  const [itemDisplay, setItemDisplay] = useState([]);


  useEffect(() => {
    for (let i = 0; i<items.length; i++) {
      setItemDisplay(prevThingsArray => {
        return [...prevThingsArray, items[i]]
    })
  }

  }, [])
 
  let costTotal = 0;
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j <items[i].quantity; j++)
    {
        costTotal += items[i].price;
    
    }
  }




  const listItems = itemDisplay.map((element) => {
    return (
      <div key={element.id} className="checkout-item">
        <img className="checkout-image" src={element.image} alt="" />
        <div className="checkout-info">
          <div className="checkout-description">
            <div className="checkout-title">
              <strong>{element.name}</strong>
            </div>
            <div>${element.price}</div>
            <div>Quantity: {element.quantity}</div>
            <div className="modify-quantity-buttons">
              <strong>
                <span
                  className="modify-quantity"
                  onClick={() => {
                    setItemDisplay(
                      itemDisplay.map((x) => {
                        if (x.id == element.id)
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

                    setItemDisplay(
                      itemDisplay.map((x) => {
                        if (x.id == element.id)
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
            onClick={() => {

              setItemDisplay(
                itemDisplay.filter(a =>
                a.id !== element.id
                )
            );


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
          <h1 className="page-title">Shopping Cart</h1>
          <div className="checkout-container">
            {listItems.length == 0 && <p>Your cart is empty!</p>}
            {listItems}
          </div>
        {listItems.length > 0  && <div className="checkout-total"><strong>Total:</strong> {`$ ${parseFloat(costTotal.toFixed(2))}`}</div>}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
