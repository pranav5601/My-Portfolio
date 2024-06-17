import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="xs:w-[250px] w-full hover-zoom-transition">
      <motion.div
        variants={fadeIn("right", "spring", 0.25 * index, 0.5)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] px-2 min-h-[280px] flex  flex-col"
        >
          <div>
            <img
              src={icon}
              alt="icon"
              className="w-full h-[150px] object-cover mt-2 rounded-[15px]"
            />
          </div>
          <h3 className="w-full flex justify-center mt-5">{title}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
