import React from "react";

const ProductCard = (props) => {

    return (
        <div className="product-card">
            <img className="product-image" src={props.image} alt={props.alt}/>
            <div className="product-info">
                <div className="product-title">{props.title}</div>
                <div className="product-price">{props.price}</div>
            </div>
            <div className="product-bottom"></div>
        </div>
    )
}

export default ProductCard;