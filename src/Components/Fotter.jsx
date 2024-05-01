import React from "react";
import logo from "../assets/img/logo2.png";
import insta from "../assets/img/Instagram.png";
import fb from "../assets/img/Facebook.png";
import twet from "../assets/img/Twitter.png";
import icon from "../assets/img/Icons.png";

const Fotter = () => {
  return (
    <div className="bg-black p-14 ">
      <div className="space-y-20 pb-24 ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-row space-x-8">
          <div className="l11 text-yellow-400">
            <ul>
              <li className="flex flex-col cursor-pointer">
                <a href="/Happyimg">Happiness</a>
                <a href=""> Books</a>
                <a href="">About Us</a>
                <a href="/Contact"> Contact</a>
              </li>
            </ul>
          </div>
          <div className="l2 text-yellow-400">
            <ul>
              <li className="flex flex-col cursor-pointer">
                <a href="/Happyimg">Policy Privacy</a>
                <a href=""> Cookies</a>
                <a href="">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between pt-5">
        <div className="left text-yellow-400">Copyright | YourName</div>
        <div className="rigt">
          <div className=" flex-row  space-x-8 hidden">
            <img src={insta} alt="insta" srcset="" className="icon bg-yellow-400" />
            <img src={fb} alt="fb" srcset="" className="icon bg-yellow-400" />
            <img src={twet} alt="twet" srcset="" className="icon bg-yellow-400" />
          </div>
          <div className="flex flex-row  space-x-8">
            <img src={icon} alt="insta" srcset="" className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
