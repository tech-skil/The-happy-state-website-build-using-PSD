import React from "react";
import Happy from "../assets/img/happyimg.png";
import chart from "../assets/img/Graphics.png";
const Happyimg = () => {
  return (
    <div id="happy" className="m-24 drop-shadow-2xl  ">
      <div className="flex flex-row justify-center w-fit  ">
        <div>
          <img src={Happy} className="size-full -pl-10" alt="" />
        </div>
        <div className="bg-[#e6e6e6] pl-12 w-[50%] pt-12 space-y-2 space-x-60">
          <div className="component11 space-y-4   ">
            <div className="item11 font-bebas  text-yellow-400 text-7xl  ">
              % Happiness
            </div>
            <div className="item12 text-base w-3/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </div>
            <div className="item13">
              <button className="btn bg-black text-gray-100 hover:bg-gray-800 cursor-pointer py-3 px-10 rounded-sm font-sans font-bold ">
                Read more
              </button>
            </div>
          </div>
          <div>
            <img src={chart} className="size-72" alt="chat" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Happyimg;
