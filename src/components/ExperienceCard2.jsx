import React from "react";
import { vectorPoint } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

const ExperienceCard2 = ({ experience, index }) => {
  return (
    <div className=" w-[100%] h-fit md:[w-1/2 h-4/6] flex flex-col sm:hover-zoom-transition">
      <motion.div
        variants={fadeIn("up", "spring", 0.25 * index, 1)}
        className="relative w-full h-full flex flex-col justify-center -space-y-[90px] "
      >
        <div className="mix-blend-normal inset-0 z-20 h-full flex flex-row m-5 ">
          <img
            src={experience.icon}
            alt="icon"
            className="w-[150px] h-[150px] rounded-[30px] "
          />
          <div className=" flex flex-row justify-start ">
            <div className="ml-5 flex flex-col justify-end ">
              <h1 className="text-[26px] font-bold line-clamp-1 text-ellipsis overflow-hidden">
                {experience.company_name}
              </h1>
              <p>{experience.date}</p>
            </div>
          </div>
        </div>

        <div className=" mix-blend-normal h-full z-0 object-contain green-pink-gradient rounded-[15px] pt-[55px]  inset-0 ">
          <div className=" p-5 ">
            <h3 className="text-primary text-[24px] font-bold">
              {experience.title}
            </h3>
            {experience.points.map((point, index) => (
              <div className="flex justify-start">
                <img
                  src={vectorPoint}
                  alt="point"
                  className="w-2.5 h-2.5 mt-1.5"
                />
                &nbsp;&nbsp;
                <p key={index} className="text-primary text-[16px]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceCard2;
