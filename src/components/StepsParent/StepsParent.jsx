import React from "react";
import Steps from "../Steps/Steps";

const StepsParent = () => {
  return (
    <>
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl mt-20 mb-3 font-bold">Get Started in 3 Steps</h2>
      <p className="text-center text-gray-400 mb-5">Start us•ng premium digital tools in minutes. not hours.</p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center flex-wrap">
        <Steps
          no={"01"}
          img={"/public/assets/user.png"}
          name={"Create Account"}
          desc={
            "Sign for free in seconds. credit card required to get started."
          }
        ></Steps>
        <Steps
          no={"02"}
          img={"/public/assets/package.png"}
          name={"Choose Products"}
          desc={"Browse our catalog and select the tools that fit your needs."}
        ></Steps>
        <Steps
          no={"03"}
          img={"/public/assets/rocket.png"}
          name={"Start Creating"}
          desc={"Download and start using your premium tools immediately"}
        ></Steps>
      </div>
    </>
  );
};

export default StepsParent;
