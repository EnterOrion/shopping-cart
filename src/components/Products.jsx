import React from "react";
import Navigation from "./Navigation";
import ProductCard from "./ProductCard";

const Products = () => {

    return (
        
        <div>
            <Navigation />
                <div className="product-listing">
                  <div className="product-and-title">
                            <h1 className="page-tile">Records</h1>
                            <div className="product-cards-container">
                            <ProductCard image="Hi" title="wow" price="$19.99" />
                  </div>
                    </div>
                </div>
           
        </div>
    )
}

export default Products;