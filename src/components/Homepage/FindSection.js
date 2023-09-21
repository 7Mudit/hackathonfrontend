import React from "react";
import blob from "../../assets/blob.png";
import arrow from "../../assets/arrow.png";
import aicte from "../../assets/NC/aicte.png";
import cec from "../../assets/NC/cec.png";
import ignou from "../../assets/NC/IGNOU.png";
import iimb from "../../assets/NC/iimb.png";
import ncert from "../../assets/NC/ncert.png";
import nios from "../../assets/NC/nios.png";
import nittr from "../../assets/NC/nitttr.png";
import nptel from "../../assets/NC/nptel.png";
import ugc from "../../assets/NC/ugc.png";
const FindSection = () => {
  return (
    <div className="flex flex-col w-[70%] gap-10 mx-auto">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-[50px] font-bold">
          Find The Most <br /> Exciting Online Courses
        </h1>
        <div className="relative group hover:cursor-pointer">
          <img src={blob} alt="arrow" className="z-10" />
          <img
            src={arrow}
            alt="arrow"
            className="absolute top-1/2 left-1/2 transition-transform duration-300 ease-in-out transform -translate-x-3/4 cursor-pointer -translate-y-1/2 group-hover:-translate-x-4"
          />
        </div>
      </div>
      <div className="border border-black"></div>
      <div className="flex flex-col gap-[20px] items-center justify-center mx-auto border-b-2 border-b-gray-100 p-10">
        <h2 className="tracking-widest">NATIONAL COORDINATORS</h2>
        <div className="flex flex-row gap-10">
          <img src={aicte} alt="acite" className="w-24 h-24" />
          <img src={cec} alt="acite" className="w-24 h-24" />
          <img src={ignou} alt="acite" className="w-24 h-24" />
          <img src={iimb} alt="acite" className="w-24 h-24" />
          <img src={ncert} alt="acite" className="w-24 h-24" />
          {/* <img src={nios} alt="acite" className="w-24 h-24" /> */}
          {/* <img src={nittr} alt="acite" className="w-24 h-24" /> */}
          <img src={nptel} alt="acite" className="w-24 h-24" />
          <img src={ugc} alt="acite" className="w-24 h-24" />
        </div>
      </div>
    </div>
  );
};

export default FindSection;
