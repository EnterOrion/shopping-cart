import React from "react";
import Navigation from "./Navigation";

const CheckoutComplete = () =>  {
    return (
        <div>
            <Navigation />
            <div className="thank-you-page">
                <div className="thank-you-container">
                    <h1 className="page-title thank-you">Thank you for stopping by!</h1>
                </div>
            </div>
        </div>
    )
}

export default CheckoutComplete