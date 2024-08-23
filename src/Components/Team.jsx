import React from "react";
import chart from '../assets/img/Graphics.png';
import chart2 from '../assets/img/Graphic Two.png';

const Team = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-4 md:mx-8 lg:mx-40 bg-[#e6e6e6] py-8 md:py-12 lg:py-16 mt-4 md:mt-6 lg:mt-8 drop-shadow-xl shadow-2xl items-center justify-around">
      <div className="component11 space-y-4 md:space-y-6 w-full lg:w-2/5 px-4 md:px-6 lg:px-0 mb-8 lg:mb-0">
        <div className="item11 font-bebas text-yellow-400 text-4xl md:text-5xl lg:text-7xl w-full lg:w-4/6">
          Happiness in numbers
        </div>
        <div className="item12 text-sm md:text-base w-full lg:w-4/6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut 
          <span className="hidden md:inline"> labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.</span>
        </div>
        <div className="item13">
          <button className="cursor-pointer font-sans font-black text-sm md:text-base">
            Read more {">"}
          </button>
        </div>
      </div>
      <div className="component12 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 lg:space-x-12">
        <div>
          <img src={chart} alt="chart" className="w-full h-auto" />
        </div>
        <div>
          <img src={chart2} alt="chart" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Team;