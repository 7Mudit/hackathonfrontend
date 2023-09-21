import React from "react";
import ui from "../../assets/Category/ui.png";
import ux from "../../assets/Category/ux.png";
import uxs from "../../assets/Category/uxs.png";
import web from "../../assets/Category/web.png";

const categoryData = [
  {
    image: ui,
    name: "Web Design",
    info: "4 Courses",
  },
  {
    image: ux,
    name: "UI Design",
    info: "5 Courses",
  },
  {
    image: uxs,
    name: "UX Design",
    info: "10 Courses",
  },
  {
    image: web,
    name: "UI Design",
    info: "5 Courses",
  },

  {
    image: uxs,
    name: "UX Design",
    info: "10 Courses",
  },
  {
    image: ui,
    name: "Web Design",
    info: "4 Courses",
  },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-[90%] mx-auto">
      {categoryData.map((category, index) => (
        <div
          className="flex flex-row gap-4 hover:bg-[#FE794F] cursor-pointer transition-all duration-300 hover:scale-110 group items-center justify-start bg-white p-8 rounded shadow-md 
            w-[370px] h-[111px]"
          key={index}
        >
          <div className="rounded-full flex items-center justify-center w-[66px] h-[66px] bg-[#FFE7DFB2] ">
            <img src={category.image} alt="" className=" object-contain" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold  group-hover:text-white">{category.name}</h1>
            <p className="text-sm text-gray-600 group-hover:text-gray-100">{category.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
