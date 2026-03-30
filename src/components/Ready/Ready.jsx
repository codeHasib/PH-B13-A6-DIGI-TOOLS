import React from "react";

const Ready = () => {
  return (
    <div className="bg-linear-to-r from-purple-700 to-pink-400 text-center py-20 text-white space-y-5 my-10">
      <h2 className="text-2xl font-bold lg:text-4xl md:text-3xl">
        Ready To Transform Your Workflow?
      </h2>
      <p>
        Join thousands of professionals who are already Digitools to work
        smarter Start your free trial today.
      </p>
      <div>
        <button className="btn bg-white text-purple-400 rounded-4xl">
          Explore Products
        </button>
        <button className="btn btn-ghost border border-white text-white rounded-4xl">
          View Pricing
        </button>
      </div>
      <ul className="flex justify-center items-center gap-4">
        <li>14-day free trial</li>
        <li className="list-disc list-inside">No credit card required</li>
        <li className="list-disc list-inside">Cancel anytime</li>
      </ul>
    </div>
  );
};

export default Ready;
