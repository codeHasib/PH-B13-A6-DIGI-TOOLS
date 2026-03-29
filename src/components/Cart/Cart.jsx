import React from "react";

const Cart = ({ cart, removeItem }) => {
  const { id, img, name, price } = cart;
  return (
    <div className="flex justify-between items-center py-4 px-6 rounded-2xl mb-4 bg-base-200">
      <div className="flex items-center justify-center gap-6">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="text-gray-500">${price}</p>
        </div>
      </div>
      <button
        onClick={() => removeItem(id)}
        className="btn btn-ghost text-red-500"
      >
        Remove
      </button>
    </div>
  );
};

export default Cart;
