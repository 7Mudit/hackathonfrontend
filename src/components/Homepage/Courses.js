import React from "react";
import { AiFillStar } from "react-icons/ai";
import clock from "../../assets/clock.svg";
import camera from "../../assets/camera.svg";
import people from "../../assets/people.jpg";
import linux from "../../assets/linux.jpeg";
import cyber from "../../assets/cyber.jpeg";
import python from "../../assets/python.jpeg";

const courseData = [
  {
    tag: "Beginner",
    courseImg: python,
    insImg: people,
    insName: "Mudit Kapoor",
    rating: "4.7",
    reviews: "95",
    name: "Learn Python Programming",
    time: "10 Week",
    lessons: "50 Lessons",
    prize: "$95",
  },
  {
    tag: "Beginner",
    courseImg: linux,
    insImg: people,
    insName: "Mudit Kapoor",
    rating: "4.7",
    reviews: "95",
    name: "Learn Linux",
    time: "10 Week",
    lessons: "50 Lessons",
    prize: "$95",
  },
  {
    tag: "Beginner",
    courseImg: python,
    insImg: people,
    insName: "Mudit Kapoor",
    rating: "4.7",
    reviews: "95",
    name: "Learn Python Programming",
    time: "10 Week",
    lessons: "50 Lessons",
    prize: "$95",
  },
  {
    tag: "Beginner",
    courseImg: linux,
    insImg: people,
    insName: "Mudit Kapoor",
    rating: "4.7",
    reviews: "95",
    name: "Learn Linux",
    time: "10 Week",
    lessons: "50 Lessons",
    prize: "$95",
  },
  {
    tag: "Beginner",
    courseImg: cyber,
    insImg: people,
    insName: "Mudit Kapoor",
    rating: "4.7",
    reviews: "95",
    name: "Learn Cyber Security",
    time: "10 Week",
    lessons: "50 Lessons",
    prize: "$95",
  },
  {
    tag: "Beginner",
    courseImg: linux,
    insImg: people,
    insName: "Mudit Kapoor",
    rating: "4.7",
    reviews: "95",
    name: "Learn Linux",
    time: "10 Week",
    lessons: "50 Lessons",
    prize: "$95",
  },
];

const Courses = () => {
  return (
    <div className="grid grid-cols-3 w-[80%] gap-10 mx-auto">
      {courseData.map((course, index) => (
        <div
          key={index}
          className="flex flex-col  py-4 w-[300px] h-auto gap-[15px] rounded-[10px] shadow-xl px-3 transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <div className="relative">
            <img
              src={course.courseImg}
              className="w-full rounded-[10px] h-[181px]"
              alt=""
            />
            <div className="absolute top-[10px] right-[20px] text-sm text-white rounded-[10px] p-2 bg-[#FE794F]">
              {course.tag}
            </div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 justify-center items-center">
              <img
                src={course.insImg}
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
              <p>{course.insName}</p>
            </div>

            <div className="flex flex-row items-center justify-center gap-2">
              <p className="font-bold">{course.rating}</p>
              <p className="flex flex-row">
                {" "}
                <AiFillStar color="#FFBF35" size={20} />{" "}
                <span className="text-sm">({course.reviews})</span>
              </p>
            </div>
          </div>
          <div className="flex font-semibold flex-row justify-between items-center">
            {course.name}
          </div>
          <div className="flex flex-row border-t-2 border-t-gray-600 pt-4 justify-between items-center">
            <div className="flex flex-row gap-2">
              <img src={clock} alt="" />
              <p className="text-sm">{course.time}</p>
            </div>
            <div className="flex flex-row gap-2">
              <img src={camera} alt="" />
              <p className="text-sm">{course.lessons}</p>
            </div>
            <p className="text-sm text-[#FE794F] font-extrabold">
              {course.prize}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
