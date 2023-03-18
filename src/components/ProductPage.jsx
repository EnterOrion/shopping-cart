import React from "react";
import {useParams} from "react-router-dom";
import productRecords from "../assets/productRecords";
import Navigation from "./Navigation";

const ProductPage = () => {
     const {productId} = useParams();
     console.log(productId);
     const thisProduct = productRecords.find(prod => prod.id == productId);
     return (
        <div className="div">
            <Navigation />
            <div className="product-detail-page">
                <div className="product-detail">
                    <h1 className="detail-title">{thisProduct.name}</h1>
                    <img className="detail-image" src={thisProduct.img} alt="" />
                    <div className="detail-info">
                        <p className="detail-price"><strong>Price:</strong> ${thisProduct.price}</p>
                        <p className="detail-description"><strong>Description:</strong> {thisProduct.description}</p>
                        <div className="button-container"><button className="checkout-button">Add to Cart</button></div>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default ProductPage;