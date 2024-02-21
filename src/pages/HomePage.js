import React from "react";
import Navbar from "../components/common/Navbar";
import FindSection from "../components/Homepage/FindSection";
import line from "../assets/line.png";
import abstract from "../assets/Abstract.png";
import abstract2 from "../assets/abstract2.png";
import Categories from "../components/Homepage/Categories";
import Courses from "../components/Homepage/Courses";
import arrow from "../assets/arrow.svg";
import women from "../assets/women.png";
import Footer from "../components/common/Footer";
import Degrees from "../components/Homepage/Degrees";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      {/* first section starts */}
      <div className="flex flex-col gap-5 bg-[#F6F6EE] p-5 h-screen w-screen">
        <h5 className="text-center">
          Are you a university or school looking for an online tutoring
          partnership?{" "}
          <span className="underline underline-offset-4">Talk to us</span>{" "}
          &nbsp; &nbsp; <span>x</span>
        </h5>
        <Navbar />
        <div className="mt-[100px]">
          <FindSection />
        </div>
      </div>
      {/* second section starts */}
      <div className="flex flex-col items-center relative justify-center  gap-5  ">
        <div className="flex flex-col  items-center">
          <h4 className="font-semibold text-lg font-sans">#Categories</h4>
          <img
            src={line}
            alt="line"
            className="w-[150px] h-[10px] object-cover"
          />
        </div>
        <div className="relative">
          <h1 className="text-[40px]">
            Explore Top{" "}
            <span className="text-[#FF852C] font-bold">Categories</span>
          </h1>
          <img
            src={abstract}
            className="absolute left-[90%] object-cover bottom-12"
            alt=""
          />
        </div>

        <p className="w-[60%] text-center mx-auto">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
        </p>

        <Categories />
      </div>
      {/* degree section */}
      <div className="flex flex-col items-center relative justify-center  gap-5  ">
        <div className="flex flex-col  items-center">
          <h4 className="font-semibold text-lg font-sans">#Degrees</h4>
          <img
            src={line}
            alt="line"
            className="w-[150px] h-[10px] object-cover"
          />
        </div>
        <div className="relative">
          <h1 className="text-[40px]">
            Explore Top{" "}
            <span className="text-[#FF852C] font-bold">Degrees</span>
          </h1>
          <img
            src={abstract}
            className="absolute left-[90%] object-cover bottom-12"
            alt=""
          />
        </div>

        <p className="w-[60%] text-center mx-auto">
        Breakthrough pricing on 100% online degrees from top universities.
        </p>

        <Degrees/>
      </div>
      {/* third section starts */}
      <div className="flex flex-col items-center relative justify-center  gap-5  ">
        <div className="flex flex-col  items-center">
          <h4 className="font-semibold text-lg font-sans">#TOP COURSES</h4>
          <img
            src={line}
            alt="line"
            className="w-[150px] h-[10px] object-cover"
          />
        </div>
        <div className="relative">
          <h1 className="text-[40px]">
            Explore Featured{" "}
            <span className="text-[#FF852C] font-bold">Courses</span>
          </h1>
          <img
            src={abstract}
            className="absolute left-[90%] object-cover bottom-12"
            alt=""
          />
        </div>

        <p className="w-[60%] text-center mx-auto">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
        </p>
        <Courses />

        <div className="pt-[50px] relative">
          <button className="flex transition-all duration-300 hover:scale-110 border-dotted border border-black p-2 flex-row gap-2 items-center justify-center">
            See More <img src={arrow} alt="" />{" "}
          </button>
          <img src={abstract2} className="absolute -left-[100%]" alt="" />
        </div>
      </div>
      {/* fourth section starts */}
      <div className="bg-[#F6F6EECC] pt-[100px] px-[50px] flex flex-row justify-center items-center">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-[45px]">Become a Instructor</h1>
          <p className="w-[70%]">
            It was popularised in the 1960s with the release of sheets
            containing Lorem Ipsum passages, and more recently with desktop{" "}
          </p>
          <button className="p-3 self-start bg-[#FE794F] text-white rounded-[10px] transition-all duration-300 hover:scale-110">
            Start Teaching today
          </button>
        </div>
        <img src={women} alt="" />
      </div>

      <div className="bg-black w-full p-[50px]">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
