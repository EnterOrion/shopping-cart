import React, {useState} from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };


    return (
        <div className="product-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            {
            isHover ? <img className="product-image" src={props.closeup} alt={props.altCloseup} /> :
            <img className="product-image" src={props.image} alt={props.alt}/>
            }   
            <div className="product-info">
            <Link to={`/shop/${props.id}`}><div className="product-title">{props.title}</div></Link>
                <div className="product-price">{props.price}</div>
            </div>
            <div className="product-bottom"></div>
        </div>
    )
}

export default ProductCard;