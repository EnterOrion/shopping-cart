import React from "react";
import {useParams} from "react-router-dom";
import productRecords from "../assets/productRecords";

const ProductPage = () => {
     const {productId} = useParams();
     console.log(productId);
     const thisProduct = productRecords.find(prod => prod.id == productId);
     return (
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
        </div>
    )
}

export default ProductPage;