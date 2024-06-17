import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { ServiceCard } from "../components";
import { SectionWraper } from "../hoc";
import { Element } from "react-scroll";
const About = () => {
  return (
    <section id="about" className="mt-5">
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p variants={fadeIn("", "", 0.1, 1)}>
          I'm a creative and results-oriented Web and Android Developer
          passionate about using technology to solve real-world problems. I
          focus on building responsive and engaging websites and android
          applications that thrive in market.
        </motion.p>

        <div className="flex flex-wrap mt-20 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </>
    </section>
  );
};

export default SectionWraper(About, "about");
