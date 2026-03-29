import React from "react";

const Card = ({ product }) => {
  const { name, description, price, period, tagType, features, img } = product;
  return (
    <div>
      <div className="card px-5 bg-base-100 shadow-sm duration-100 transition-all ease-in-out hover:shadow-xl">
        <div className="card-body">
          <div className="flex justify-end">
            <span
              className={
                tagType === "new"
                  ? "badge badge-xs badge-accent inline-block"
                  : tagType === "popular"
                    ? "badge badge-xs badge-primary"
                    : "badge badge-xs badge-warning"
              }
            >
              {" "}
              {tagType}{" "}
            </span>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
          <div className="flex justify-between flex-col gap-5">
            <h2 className="text-3xl font-bold"> {name} </h2>
            <p>{description}</p>
            <span className="text-xl">
              {" "}
              ${price}/{period}{" "}
            </span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {features.map((feature, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block"> Buy Now </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
