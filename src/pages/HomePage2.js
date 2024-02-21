import React from "react";
import Navbar2 from "../components/common/Navbar2";

const HomePage2 = () => {
  return (
    <div className="flex flex-col">
      <Navbar2 />
      <div className="background-container relative">
        <div className="absolute flex flex-col bg-white top-10 w-[500px] h-[200px] left-[50%] translate-x-[-50%] p-5">
          <p>
            {" "}
            <span>store</span> , <span>share</span> , <span>discover</span> ,
            <span>research</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage2;
