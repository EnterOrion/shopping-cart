import React from "react";
import { Link } from "react-router-dom";


const Navigation = () => {
    return (
        <nav>
            <ul>
                <div className="logo-column">
                    <li className="logo">
                    <Link to="/">The Shop at Redpoint </Link>
                        </li>
                </div>
                <div className="navigation-column">
                    <li>
                    <Link to="/">Home</Link>
                        </li>
                    <li>
                    <Link to="/shop">Shop</Link>
                        </li>
                    <li>
                    <Link to="/cart">Cart</Link>
                        </li>
                </div>
            </ul>
        </nav>
    )

}

export default Navigation