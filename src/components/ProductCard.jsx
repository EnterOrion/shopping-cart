import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {

    return (
        <div className="product-card">
            <img className="product-image" src={props.image} alt={props.alt}/>
            <div className="product-info">
            <Link to={`/shop/${props.id}`}><div className="product-title">{props.title}</div></Link>
                <div className="product-price">{props.price}</div>
            </div>
            <div className="product-bottom"></div>
        </div>
    )
}

export default ProductCard;