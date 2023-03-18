import React from "react";
import Navigation from "./Navigation";
import ProductCard from "./ProductCard";

const Checkout = () => {
    return (
        
        <div>
            <Navigation />
            <div className="checkout-page">
                    <div className="checkout-and-title">
                    <h1 className="page-title">Shopping Cart</h1>
                    <div className="checkout-container">
                    <p>Your cart is empty.</p>
                    </div>
                    </div>
                </div>
            </div>
    )

}

export default Checkout;