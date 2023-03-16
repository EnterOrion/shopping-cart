import React from "react";

const ProductCard = (props) => {

    return (
        <div className="product-card">
            <div>{props.image}</div>
            <div>{props.title}</div>
            <div>{props.price}</div>
        </div>
    )
}

export default ProductCard;