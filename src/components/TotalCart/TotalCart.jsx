import React from "react";

const TotalCart = ({ total }) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold">Total:-</h2>
      <p className="text-gray-400">${total}</p>
    </div>
  );
};

export default TotalCart;
