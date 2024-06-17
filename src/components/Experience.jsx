import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWraper } from "../hoc";
import { textVariant } from "../utils/motion";
import { experiences } from "../constants";

import ExperienceCard2 from "./ExperienceCard2";

const Experience = () => {
  return (
    <section id="experience">
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Experience so far.</p>
          <h2 className={styles.sectionHeadText}>Work Experience</h2>
        </motion.div>

        <div className=" mt-15 flex flex-col justify-start md:flex-row gap-7 md:justify-center">
          {experiences.map((experience, index) => (
            <ExperienceCard2
              key={index}
              experience={experience}
              index={index}
            />
          ))}

          {/* <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline> */}
        </div>
      </>
    </section>
  );
};

export default SectionWraper(Experience, "experience");
