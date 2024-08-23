import React from "react";
import logo from "../assets/img/logo2.png";
import insta from "../assets/img/Instagram.png";
import fb from "../assets/img/Facebook.png";
import twet from "../assets/img/Twitter.png";
import icon from "../assets/img/Icons.png";

const Footer = () => {
  return (
    <div className="bg-black p-6 md:p-10 lg:p-14">
      <div className="space-y-10 md:space-y-16 lg:space-y-20 pb-12 md:pb-18 lg:pb-24">
        <div>
          <img src={logo} alt="Logo" className="w-32 md:w-40 lg:w-auto" />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
          <div className="l11 text-yellow-400">
            <ul className="space-y-2 md:space-y-3">
              <li className="cursor-pointer"><a href="/Happyimg">Happiness</a></li>
              <li className="cursor-pointer"><a href="">Books</a></li>
              <li className="cursor-pointer"><a href="">About Us</a></li>
              <li className="cursor-pointer"><a href="/Contact">Contact</a></li>
            </ul>
          </div>
          <div className="l2 text-yellow-400">
            <ul className="space-y-2 md:space-y-3">
              <li className="cursor-pointer"><a href="/Happyimg">Policy Privacy</a></li>
              <li className="cursor-pointer"><a href="">Cookies</a></li>
              <li className="cursor-pointer"><a href="">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-gray-700" />
      <div className="flex flex-col md:flex-row justify-between items-center pt-5 space-y-4 md:space-y-0">
        <div className="text-yellow-400 text-sm md:text-base">Copyright | YourName</div>
        <div className="flex flex-row space-x-4 md:space-x-8">
          <div className="hidden md:flex md:flex-row md:space-x-4 lg:space-x-8">
            <img src={insta} alt="Instagram" className="icon bg-yellow-400 w-6 h-6 md:w-8 md:h-8" />
            <img src={fb} alt="Facebook" className="icon bg-yellow-400 w-6 h-6 md:w-8 md:h-8" />
            <img src={twet} alt="Twitter" className="icon bg-yellow-400 w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div className="md:hidden">
            <img src={icon} alt="Social Icons" className="icon w-24 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;