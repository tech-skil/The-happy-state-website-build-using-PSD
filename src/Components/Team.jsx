import React from "react";
import chart from '../assets/img/Graphics.png';
import chart2 from '../assets/img/Graphic Two.png';

const Team = () => {
  return (
    <div className="  flex flex-row mx-40 bg-[#e6e6e6] py-16 mt-8   drop-shadow-xl shadow-2xl  items-center   justify-around">
      <div className="component11 space-y-4   w-2/5 ">
        <div className="item11 font-bebas  text-yellow-400 text-7xl w-4/6 ">Happiness in numbers</div>
        <div className="item12 text-base w-4/6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut <span className="hidden"> labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.</span>
        </div>
        <div className="item13">
          <button className=" cursor-pointer font-sans font-black ">
            Read more {">"}{" "}
          </button>
        </div>
      </div>
      <div className="component12 flex flex-row space-x-12">
        <div>
          <img src={chart} alt="chart" />
        </div>
        <div>
          <img src={chart2} alt="chart" />
        </div>
      </div>
    </div>
  );
};

export default Team;
