import React from "react";
import {useParams} from "react-router-dom";
import productRecords from "../assets/productRecords";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import useItemStore from "../contexts/CartContext";

const ProductPage = () => {
     const {productId} = useParams();
     const thisProduct = productRecords.find(prod => prod.id == productId);
     const items = useItemStore((state) => state.itemsArray);

     const addItem = useItemStore((state) => state.addItem)

     const addItemManager = () => {

        for (let i = 0; i < items.length; i++) {
            if (items[i].name === thisProduct.name) {
                console.log(true)
                items[i].quantity = items[i].quantity + 1
                return;
            }
        }
        addItem(
            {   id: items.length + 1,
                image: thisProduct.img,
                name: thisProduct.name, 
                price: thisProduct.price,
                quantity: 1
                
            });
     }

     return (
        <div className="div">
            <Navigation />
            <div className="product-detail-page">
                <div className="product-detail">
                    <div className="button-header">
                        <button className="back-button"><Link to="/shop">Go back</Link></button>
                        <h1 className="detail-title">{thisProduct.name}</h1>
                    </div>
                    <img className="detail-image" src={thisProduct.img} alt="" />
                    <div className="detail-info">
                        <p className="detail-price"><strong>Price:</strong> ${thisProduct.price}</p>
                        <p className="detail-description"><strong>Description:</strong> {thisProduct.description}</p>
                        <div className="button-container"><button className="checkout-button" onClick={addItemManager}>Add to Cart</button></div>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default ProductPage;