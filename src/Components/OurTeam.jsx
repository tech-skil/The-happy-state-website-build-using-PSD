import React from "react";
import Happy from "../assets/img/staff3.png";
import chart from "../assets/img/Graphics.png";

const OurTeam = () => {
  return (
    <div className="m-4 md:m-12 lg:m-24 drop-shadow-2xl">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch w-full lg:w-fit">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img src={Happy} className="w-full h-auto" alt="Our Team" />
        </div>
        <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-20 py-8 lg:py-40">
          <div className="component11 space-y-4 md:space-y-6 lg:space-y-7">
            <div className="item11 font-bebas text-black text-3xl md:text-4xl lg:text-5xl">
              our team
            </div>
            <div className="item12 text-sm md:text-base lg:text-lg w-full md:text-justify lg:w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
            </div>
            <div className="item13">
              <button className="btn bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer py-2 md:py-3 px-6 md:px-8 lg:px-10 rounded-sm font-sans font-bold text-sm md:text-base">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam