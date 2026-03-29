import React from "react";

const ProductTab = ({ currentTab, setCurrentTab }) => {
  function toggle(e) {
    const value = e.target.value;
    setCurrentTab(value);
  }
  return (
    <div className="mx-auto flex justify-center items-center border-[0.2px] border-gray-300 max-w-max rounded-4xl mt-5 mb-10">
      <button
        value={"products"}
        onClick={toggle}
        className={
          currentTab === "products"
            ? "btn btn-primary rounded-4xl px-8"
            : "btn btn-ghost rounded-4xl"
        }
      >
        Products
      </button>
      <button
        value={"cart"}
        onClick={toggle}
        className={
          currentTab === "cart"
            ? "btn btn-primary rounded-4xl px-8"
            : "btn btn-ghost rounded-4xl"
        }
      >
        {" "}
        Cart{" "}
      </button>
    </div>
  );
};

export default ProductTab;
