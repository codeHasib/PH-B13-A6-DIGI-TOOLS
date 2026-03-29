import React, { use } from "react";
import Card from "../Card/Card";

const CardParent = ({ productData, setCart, cart }) => {
  const res = use(productData);
  const data = res.data;
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center px-5">
      {data.map((item) => (
        <Card key={item.id} cart={cart} setCart={setCart} product={item}></Card>
      ))}
    </div>
  );
};

export default CardParent;
