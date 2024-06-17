import React, { useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { hero_image } from "../assets";
import { SectionWraper } from "../hoc";
import { Typewriter } from "react-simple-typewriter";
import { androidLogo, reactLogo, backendLogo } from "../assets";
import { heroImgList } from "../constants";

const Hero = () => {
  const [displayImage, setDisplayImage] = useState(androidLogo);

  const handleType = (count) => {
    let imgCount;
    if (count > 2) {
      imgCount = count % heroImgList.length;
    } else {
      imgCount = count;
    }
    setDisplayImage(heroImgList[imgCount]);
  };

  const handleDone = () => {
    console.log("Done");
  };

  return (
    <div id="hero">
      <section className="relative w-full h-screen mx-auto items">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start md:items-end gap-5`}
        >
          <div className="hidden md:flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#FF7F3E]" />
            <div className="w-1 h-40 sm:h-80 orange-gradient" />
          </div>
          <div className="flex flex-col place-items-center lg:place-items-end  ">
            <img
              src={hero_image}
              alt="hero image"
              className="w-auto h-auto md:w-[550px] md:h-[320px] object-contain md:mr-[-50px] border-2 border-[#FF7F3E]"
            />

            <div className="static mb-28 flex flex-col gap-1">
              <h1 className={`${styles.heroHeadText} `}>
                Hi, I'm <span className="text-[#FF7F3E]"> Pranav</span>
              </h1>

              <div className="flex flex-row gap-4 justify-start items-center mb-2">
                <img src={displayImage} alt="logo" className="h-6 w-6  " />
                <span
                  className={`${styles.heroTypeWriterText} tracking-widest`}
                >
                  <Typewriter
                    words={[
                      "Android Developer",
                      "Fullstack Developer",
                      "Backend Developer",
                    ]}
                    typeSpeed={50}
                    loop={true}
                    cursorBlinking
                    deleteSpeed={80}
                    cursor
                    cursorColor="orange"
                    onType={handleType}
                    onLoopDone={() => handleDone()}
                  />
                </span>
              </div>

              <p className={`${styles.heroSubText}`}>
                A Full-Stack Developer with expertise in Android and web
                development. Adept at applying UX principles to craft
                user-centric mobile and web experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className=" w-[30px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              ></motion.div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
