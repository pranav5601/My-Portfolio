import React from "react";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Contact,
  StarsCanvas,
} from "./components";
const Home = () => {
  return (
    <div className=" z-0 bg-primary ">
      <div
        className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
        id="hero"
      >
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      {/* <Tech /> */}
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};
export default Home;
