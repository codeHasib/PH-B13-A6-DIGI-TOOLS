import React from "react";
import Cart from "../Cart/Cart";

const CartParent = ({ cart }) => {
  return (
    <>
      <div className="container mx-auto shadow-md px-2 py-2 mb-2">
        <h2 className="font-bold text-2xl mb-4">Your Cart:</h2>
        {cart.length > 0 ? (
          cart.map((item) => <Cart key={item.id} cart={item}></Cart>)
        ) : (
          <div>
            {" "}
            <h2>Nothing Added</h2>{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default CartParent;
