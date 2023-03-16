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
                    <ProductCard image="Hi" title="wow" price="$19.99" />
                    </div>
                    </div>
                </div>
            </div>
    )

}

export default Checkout;