import React from "react";
import logofig from "../../assets/logofig.png";
import { BiSearchAlt } from "react-icons/bi";
import ProfileDropDown from "../Auth/ProfileDropDown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar2 = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <div className="bg-white flex flex-row justify-between items-center py-5 px-[100px] w-full h-[70px]">
      <img src={logofig} width={150} height={120} className="object-cover" alt="" />
      <div className="flex flex-row items-center justify-center gap-5">
        <p className="text-[#cf7a94]">Browse</p>
        <div className="relative">
          <input
            type="text"
            className="text-black w-[300px] placeholder:text-pure-greys-500 border-pure-greys-100 px-3 py-1 border outline-none"
            placeholder="Seach on figshare.."
          />
          <BiSearchAlt
            color="black"
            size={20}
            className="absolute right-2 top-2"
          />
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center">
        {token === null && (
          <Link
            to="/login"
            className="transition-all text-[#cf7a94] duration-300 hover:scale-110"
          >
            Log In
          </Link>
        )}
        {token === null && (
          <Link
            to="/signup"
            className="text-white bg-[#FE794F] py-3 px-5 transition-all duration-300 hover:scale-110 rounded-[10px]"
          >
            Register
          </Link>
        )}
        {token !== null && <ProfileDropDown />}
      </div>
    </div>
  );
};

export default Navbar2;
