import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import { Navigation, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import { useLocation } from "react-router-dom";
import { backArrow } from "../assets";
import { styles } from "../styles";

const ProjectDetails = () => {
  const location = useLocation();
  //   const projectName = location.state.name || "";
  //   const projectDescription = location.state.description || "";
  const { name, description, screen_shots } = location.state;

  return (
    <div className="pb-28 pt-10 bg-primary">
      <div className="container  mx-auto ">
        <div className="flex items-center gap-2 mb-4 ">
          <button
            onClick={() => window.history.back()}
            className="text-white rounded-lg"
          >
            <img src={backArrow} alt="back" className="w-16 h-16" />
          </button>
          <h1 className="text-3xl font-bold ">{name}</h1>
        </div>

        <Swiper
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          mousewheel={{
            vertical: false,
            forceToAxis: true,
          }}
          navigation={true}
          modules={[Keyboard, Navigation, Pagination, Mousewheel]}
          className="mySwiper w-[80%] h-[45%]  justify-center "
        >
          {screen_shots.map((image, index) => (
            <SwiperSlide
              key={index}
              delay={3000}
              className="flex justify-center items-center"
            >
              <img
                src={image}
                alt={`Project slide ${index}`}
                className="w-[100%] h-[650px] rounded-lg object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="md:mt-10 mt-16 ml-16">
          <h1
            className={`${styles.sectionHeadText} font-bold  orange-text-gradient`}
          >
            Description
          </h1>

          <div className="mt-4  md:mt-2 ">
            {description.map((desc, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
