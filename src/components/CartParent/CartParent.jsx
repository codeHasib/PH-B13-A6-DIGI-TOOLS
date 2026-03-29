import React from "react";
import Cart from "../Cart/Cart";
import EmptyCart from "../EmptyCart/EmptyCart";
import { toast } from "react-toastify";
import TotalCart from "../TotalCart/TotalCart";
import CheckOut from "../CheckOut/CheckOut";

const CartParent = ({ cart, setCart, total }) => {
  function removeItem(id) {
    const filtered = cart.filter((item) => id !== item.id);
    setCart(filtered);
    toast.error("Removed item from cart");
  }

  function checkOut() {
    setCart([]);
    toast.success("Product Checked-out Successfully!!");
  }

  return (
    <>
      <div className="container mx-auto shadow-md px-2 py-2 mb-2">
        <h2 className="font-bold text-2xl mb-4">Your Cart:</h2>
        {cart.length > 0 ? (
          <>
            <div>
              {cart.map((item) => (
                <Cart
                  key={item.id}
                  cart={item}
                  setCart={setCart}
                  removeItem={removeItem}
                ></Cart>
              ))}
            </div>
            <TotalCart total={total}></TotalCart>
            <CheckOut checkOut={checkOut}></CheckOut>
          </>
        ) : (
          <EmptyCart></EmptyCart>
        )}
      </div>
    </>
  );
};

export default CartParent;
