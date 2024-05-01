import React from "react";
import Happy from "../assets/img/staff3.png";
import chart from "../assets/img/Graphics.png";
const OurTeam = () => {
  return (
    <div>
      <div className="m-24 drop-shadow-2xl  ">
      <div className="flex flex-row justify-center w-fit  ">
        <div>
          <img src={Happy} className="size-full -pl-10" alt="" />
        </div>
        <div className=" pl-20 w-[50%] pt-40 ">
          <div className="component11 space-y-7   ">
            <div className="item11 font-bebas  text-black text-5xl  ">
              our team
            </div>
            <div className="item12 text-base w-3/5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
            </div>
            <div className="item13  ">
              <button className="btn bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer py-3 px-10 rounded-sm font-sans font-bold ">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OurTeam

