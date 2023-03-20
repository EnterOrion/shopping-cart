import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

    return (
        <div className="home">
            <div className="home-main">
                <h1 className="hero-title">The Shop at Redpoint</h1>
                <p className="hero-additional">Ready? Let's go.</p>
                <p className="hero-shop"> <Link to="/shop"><div
                style={{
                    fontSize: '2rem',
                    padding: '1rem 2.3rem',
                    color: 'white',
                    backgroundColor: 'rgb(0, 0, 0, .5)',
                    fontWeight: 700,
                    marginTop: '.5rem',
                    textDecoration: isHover ? 'underline' : 'none'
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >Shop</div></Link></p>
            </div>
        </div>
    )

}

export default Home