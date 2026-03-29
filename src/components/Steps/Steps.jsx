import React from "react";

const Steps = ({ no, img, name, desc }) => {
  return (
    <div className="py-15 px-4 border-[0.3px] border-gray-200 my-3 rounded-4xl shadow-2xl text-center">
      <div className="flex justify-end items-center my-4">
        <span className="flex justify-center items-center text-xl h-10 w-10 rounded-full bg-purple-700 text-white text-center font-bold">
          {no}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="p-5 rounded-full bg-purple-100">
          <img src={img} alt="" />
        </div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default Steps;
