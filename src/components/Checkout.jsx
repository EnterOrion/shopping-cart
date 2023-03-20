import React from "react";
import Navigation from "./Navigation";
import useItemStore from "../contexts/CartContext";

const Checkout = () => {

    const items = useItemStore((state) => state.itemsArray);
    const listItems = items.map(
        (element) => {
            return (
                <div className="checkout-item">
                    <img className="checkout-image" src={element.image} alt="" /> 
                    <div className="checkout-info">
                        <div className="checkout-description">
                            <div className="checkout-title"><strong>{element.name}</strong></div>
                            <div>${element.price}</div>
                            <div>Quantity: {element.quantity}</div>
                            <div className="modify-quantity-buttons">
                                <strong><span className="modify-quantity">-</span></strong>
                                <strong><span className="modify-quantity">+</span></strong>
                            </div>
                        </div>
                        <div className="remove-item">Delete</div>
                    </div>
                </div>
            )
        }

    )
    return (
        
        <div>
            <Navigation />
            <div className="checkout-page">
                    <div className="checkout-and-title">
                    <h1 className="page-title">Shopping Cart</h1>
                    <div className="checkout-container">
                    { listItems.length == 0 && <p>Your cart is empty!</p> }
                    {listItems}
                    </div>
                    </div>
                </div>
            </div>
    )

}

export default Checkout;