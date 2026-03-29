import { ShoppingCart } from "lucide-react";
import React from "react";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 space-y-3">
      <ShoppingCart height={"60px"} width={"60px"}></ShoppingCart>
      <h2>Nothing to show here in cart.</h2>
    </div>
  );
};

export default EmptyCart;
