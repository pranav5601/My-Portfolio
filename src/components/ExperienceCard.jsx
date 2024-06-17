import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { vectorPoint } from "../assets";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#2A629A", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex w-full h-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain items-center justify-center rounded-[20px]"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        {experience.points.map((point, index) => (
          <div className="mt-2 flex  ">
            <img src={vectorPoint} alt="point" className="w-2.5 h-2.5 mt-6" />
            &nbsp;&nbsp;
            <p key={index} className="text-white text-[16px]">
              {point}
            </p>
          </div>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
