import React from "react";
import Offers from "../Offers/Offers";

const OfferParent = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center space-y-5 py-15">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-400">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <Offers></Offers>
    </div>
  );
};

export default OfferParent;
