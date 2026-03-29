import React from "react";

const CheckOut = ({ checkOut }) => {
  return (
    <div className="my-5">
      <button onClick={checkOut} className="btn btn-accent btn-block">
        Proceed to checkout
      </button>
    </div>
  );
};

export default CheckOut;
