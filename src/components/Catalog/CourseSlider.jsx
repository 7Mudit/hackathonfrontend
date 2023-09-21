import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import Course_Card from "./Course_Card";


const CourseSlider = ({ Courses, filter }) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          key={filter}
          slidesPerView={1}
          spaceBetween={25}
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-800">No Course Found</p>
      )}
    </>
  );
};

export default CourseSlider;
