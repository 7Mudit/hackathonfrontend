import React from "react";
import logo from "../../assets/logo.png";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-10">
      <div className="flex flex-row justify-between items-center">
        <div className="flex gap-2 self-start">
          <img src={logo} alt="" />
          <h2 className="text-white text-[30px] tracking-wider font-bold">SkillJet</h2>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-white font-bold">LINKS</h2>
          <div className="flex text-richblack-50 flex-col gap-3">
            <p>Home</p>
            <p>Pricing</p>
            <p>About</p>
            <p>Features</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 self-start cursor-pointer">
          <h2 className="text-white font-bold">LEGAL</h2>
          <div className="flex  text-richblack-50 flex-col gap-3">
            <p>Terms of use</p>
            <p>Terms & conditions</p>
            <p>Private policy</p>
            <p>Cookie policy</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 self-start">
          <h2 className="text-white font-bold">NEWSLETTER</h2>
          <p className=" text-richblack-50">
            Join over 78.000 people getting our emails
          </p>
          <div className="relative">
            <input
              type="text"
              className="bg-[#0C131A] px-4 pr-[150px] py-2 outline-none w-[300px] text-gray-100 placeholder:text-gray-400"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="text-white absolute right-6 top-[7px]"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="flex border-t-2 pt-[20px]  border-richblack-300 flex-row justify-between items-center">
        <div className="flex flex-row  text-richblack-50 gap-3 text-gray-200">
          <h2>Privacy & Terms</h2>
          <h2>Contact Us</h2>
        </div>

        <div className=" text-richblack-50">
          <h2>© 2023. All rights reserved by Mudit Kapoor</h2>
        </div>
        <div className="flex flex-row gap-3  text-richblack-50 items-center justify-center">
          <FiFacebook
            size={20}
            color="white"
            className="transition-all hover:scale-110 duration-300 cursor-pointer"
          />
          <FiTwitter
            size={20}
            color="white"
            className="transition-all hover:scale-110 duration-300 cursor-pointer"
          />
          <BsInstagram
            size={20}
            color="white"
            className="transition-all hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
