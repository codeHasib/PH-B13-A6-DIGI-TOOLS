import { Play } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto flex py-10 items-center justify-center gap-5 lg:flex-nowrap md:flex-nowrap flex-wrap-reverse px-5">
      <div className="space-y-5">
        <div className="flex items-center justify-start gap-3 py-2 px-4 text-purple-600 bg-[#e1e7ff] max-w-75 rounded-3xl">
          <div className="inline-grid *:[grid-area:1/1]">
            <div className="status status-primary animate-ping"></div>
            <div className="status status-primary"></div>
          </div>
          <p>New: AI-Powered Tools Available</p>
        </div>
        <div className="space-y-5">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-gray-400">
            Access premium Al design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex items-center gap-3">
            <button className="btn btn-primary rounded-4xl">
              Explore Products
            </button>
            <button className="flex items-center justify-center gap-2 btn btn-outline btn-primary rounded-4xl">
              <Play></Play>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src="/assets/banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
