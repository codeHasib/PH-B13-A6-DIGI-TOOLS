import React from "react";

const Stats = () => {
  return (
    <>
      <div className="bg-purple-700 text-white text-center">
        <div className="container mx-auto flex justify-center items-center">
          <div className="stats stats-vertical lg:stats-horizontal md:stats-horizontal">
            <div className="stat py-10 px-20 border-white">
              <div className="stat-value">50K+</div>
              <div className="stat-desc text-white">Active Users</div>
            </div>

            <div className="stat py-10 px-20 border-white">
              <div className="stat-value">200+</div>
              <div className="stat-desc text-white">Premium Tools</div>
            </div>

            <div className="stat py-10 px-20">
              <div className="stat-value">4.9</div>
              <div className="stat-desc text-white">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
