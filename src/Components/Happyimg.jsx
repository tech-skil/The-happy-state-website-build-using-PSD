import React from "react";
import Happy from "../assets/img/happyimg.png";
import chart from "../assets/img/Graphics.png";

const Happyimg = () => {
  return (
    <div id="happy" className="m-4 md:m-12 lg:m-24">
      <div className="flex flex-col lg:flex-row justify-center w-full lg:w-fit bg-white shadow-xl">
        <div className="w-full lg:w-1/2">
          <img src={Happy} className="w-full h-full object-cover" alt="Happy couple" />
        </div>
        <div className="bg-gray-100 p-6 md:p-8 lg:p-12 w-full lg:w-1/2 space-y-6">
          <div className="space-y-4">
            <h2 className="font-bebas text-yellow-400 text-4xl md:text-5xl lg:text-6xl">
              % HAPPINESS
            </h2>
            <p className="text-sm md:text-base text-gray-600 md:w-[58%] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <button className="bg-black text-white hover:bg-gray-800 py-2 md:py-3 px-6 md:px-10 text-sm md:text-base font-bold">
              Read more
            </button>
          </div>
          <div className="mt-8 md:ml-52">
            <img src={chart} className="w-full max-w-xs md:w-72 mx-auto lg:mx-0" alt="Happiness chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Happyimg;