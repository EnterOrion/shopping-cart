import React from "react";
import {useParams} from "react-router-dom";
import productsArray from "../assets/productRecords";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import useItemStore from "../contexts/CartContext";

const ProductPage = () => {
    const [fade, setFade] = React.useState(0);

     const {productId} = useParams();
     const thisProduct = productsArray.find(prod => prod.id === productId);
     const items = useItemStore((state) => state.itemsArray);

     const addItem = useItemStore((state) => state.addItem)

     const addItemManager = () => {

        for (let i = 0; i < items.length; i++) {
            if (items[i].name === thisProduct.name) {
                items[i].quantity = items[i].quantity + 1
                 console.log(items); 
                return;
            }
        }
        addItem(
            {   id: productId,
                image: thisProduct.img,
                alt: thisProduct.alt,
                name: thisProduct.name, 
                price: thisProduct.price,
                quantity: 1
                
            });
          console.log(items); 
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
                    <img className="detail-image" src={thisProduct.img} alt={thisProduct.alt} />
                    <div className="detail-info">
                        <p className="detail-price"><strong>Price:</strong> ${thisProduct.price}</p>
                        <p className="detail-description"><strong>Description:</strong> {thisProduct.description}</p>
                        <div className="item-added" fade={fade}   onAnimationEnd={() => setFade(0)}>Item Added!</div>
                        <div className="button-container"><button className="checkout-button" onClick={() => {setFade(1)
                        addItemManager()}}
        
                     
                      
                        >Add to Cart</button></div>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default ProductPage;