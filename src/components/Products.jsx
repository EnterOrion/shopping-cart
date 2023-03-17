import React from "react";
import Navigation from "./Navigation";
import ProductCard from "./ProductCard";
import Geogaddi from "../images/geogaddi.jpg";
import GeogaddiVinyl from "../images/geogaddi-vinyl.jpeg";
import BeautifulPlace from "../images/beautiful-place.jpg";
import BeautifulPlaceVinyl from "../images/beautiful-place-vinyl.jpg";
import TomorrowsHarvest from "../images/tomorrows-harvest.png";
import TomorrowsHarvestVinyl from "../images/tomorrows-harvest-vinyl.jpg";
import MusicHasTheRight from "../images/music-has-the-right.jpg";
import MusicHasTheRightVinyl from "../images/music-has-the-right-vinyl.jpg";
import CampfireHeadphase from "../images/the-campfire-headphase.jpg";
import CampfireHeadphaseVinyl from "../images/the-campfire-headphase-vinyl.jpg";
import TransCanadaHighway from "../images/trans-canada-highway.png";
import TransCanadaHighwayVinyl from "../images/trans-canada-highway-vinyl.jpg";



const Products = () => {

    return (
        
        <div>
            <Navigation />
                <div className="product-listing">
                  <div className="product-and-title">
                            <h1 className="page-title">Records</h1>
                            <div className="product-cards-container">
                            <ProductCard image={GeogaddiVinyl} title="Geogaddi Vinyl" alt="Geogaddi Vinyl" price="$19.99" />
                            <ProductCard image={CampfireHeadphaseVinyl} title="The Campfire Headphase Vinyl" alt="The Campfire Headphase Vinyl" price="$19.99" />
                            <ProductCard image={TomorrowsHarvestVinyl} title="Tomorrow's Harvest Vinyl" alt="Tomorrow's Harvest Vinyl" price="$19.99" />
                            <ProductCard image={MusicHasTheRightVinyl} title="Music Has the Right Vinyl" alt="Music Has the Right to Children Vinyl" price="$19.99" />
                            <ProductCard image={TransCanadaHighwayVinyl} title="Trans Canada Highway Vinyl" alt="Trans Canada Highway Vinyl" price="$19.99" />
                            <ProductCard image={BeautifulPlaceVinyl} title="In a Beautiful Place Vinyl" alt="A Beautiful Place Out in the Country Vinyl" price="$19.99" />
                  </div>
                    </div>
                </div>
           
        </div>
    )
}

export default Products;