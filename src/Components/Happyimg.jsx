import React from "react";
import Happy from "../assets/img/happyimg.png";
import chart from "../assets/img/Graphics.png";

const Happyimg = () => {
  return (
    <div id="happy" className="m-4 md:m-12 lg:m-24 drop-shadow-2xl">
      <div className="flex flex-col lg:flex-row justify-center w-full lg:w-fit">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img src={Happy} className="w-full h-auto" alt="Happy" />
        </div>
        <div className="bg-[#e6e6e6] p-6 md:p-8 lg:p-12 w-full lg:w-[50%] space-y-6 lg:space-y-2">
          <div className="component11 space-y-4">
            <div className="item11 font-bebas text-yellow-400 text-4xl md:text-5xl lg:text-7xl">
              % Happiness
            </div>
            <div className="item12 text-sm md:text-base w-full lg:w-3/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </div>
            <div className="item13">
              <button className="btn bg-black text-gray-100 hover:bg-gray-800 cursor-pointer py-2 md:py-3 px-6 md:px-10 rounded-sm font-sans font-bold text-sm md:text-base">
                Read more
              </button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img src={chart} className="w-full max-w-sm mx-auto lg:mx-0" alt="chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Happyimg;