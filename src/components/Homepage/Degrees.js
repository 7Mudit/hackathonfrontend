import React from "react";
import small from "../../assets/Degrees/small.png";
import big from "../../assets/Degrees/big.png";
import iit from "../../assets/Degrees/iitricon.png";
import college from '../../assets/Degrees/college.png'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const mockData = [
  {
    smallimg: iit,
    bigImg: college,
    college: "IIT Roorkee",
    degree: "Executive MBA",
  },
  {
    smallimg: iit,
    bigImg: college,
    college: "IIT Roorkee",
    degree: "Executive MBA",
  },
  {
    smallimg: iit,
    bigImg: college,
    college: "IIT Roorkee",
    degree: "Executive MBA",
  },
  {
    smallimg: iit,
    bigImg: college,
    college: "IIT Roorkee",
    degree: "Executive MBA",
  },
  {
    smallimg: iit,
    bigImg: college,
    college: "IIT Roorkee",
    degree: "Executive MBA",
  },
  {
    smallimg: iit,
    bigImg: college,
    college: "IIT Roorkee",
    degree: "Executive MBA",
  },
];

const Degrees = () => {
  return (
    <div className="w-[80%] mx-auto h-[500px] flex items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={90}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        speed={500}
        autoplay
        className="w-[100%] h-[100%] cursor-pointer"
        // pagination={{ clickable: true }}
        // navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1084: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
      >
        {mockData.map((mock, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col duration-300 transition-all hover:shadow-lg border-pure-greys-300 py-6 px-3 w-[350px] hover:scale-110 h-[450px] items-start gap-5 ">
              <img
                className="object-cover rounded-md w-[300px] h-[150px]"
                src={mock.bigImg}
                alt=""
              />
              <div className="flex flex-col items-start gap-2">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <img
                    src={mock.smallimg}
                    className="w-[50px] h-[50px]"
                    alt=""
                  />
                  <p className="text-pure-greys-500">{mock.college}</p>
                </div>
                <div>
                  <p className="text-[42px]">{mock.degree}</p>
                </div>
              </div>

              <div className="text-blue-200">🎓 Earn a Degree</div>
              <div className="text-pure-greys-100">Degree</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Degrees;
