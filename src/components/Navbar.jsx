import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, resume, download } from "../assets";
import DownloadPDF from "./DownloadPDF";

const Navbar = () => {
  const [active, setActives] = useState("");
  const [toggle, setToggle] = useState(false);
  const projectWindowOffset = -120;

  // const link = document.createElement("a");
  // link.href = { resume }; // Update this path
  // link.download = "Pranav_Resume.pdf";
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);

  return (
    <nav
      className={`${styles.paddingX} w-full xs:w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex flex-row justify-between items-center  max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActives("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-11 h-11 object-contain" />
          <p className="text-white flex text-[20px] font-bold cursor-pointer items-center">
            Pranav
            <span className="lg:block hidden text-[16px]">
              &nbsp;| Android + Fullstack
            </span>
          </p>
        </Link>

        <div className="hidden sm:flex items-center gap-0 ">
          <DownloadPDF />
          <ul className="list-none hidden sm:flex md:gap-10 gap-3">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-secondary" : "text-white"
                } hover:text-secondary text-[18px] font-medium cursor-pointer`}
                onClick={() => setActives(link.title)}
              >
                <Link
                  key={link.id}
                  smooth
                  spy
                  offset={link.id == "projects" ? projectWindowOffset : 0}
                  to={link.id}
                  onSetActive={(to) => {
                    to === "hero" ? setActives("") : setActives(link.title);
                  }}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:hidden flex  justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="burger menu"
            className={`${
              !toggle ? "p-0" : "p-[4px]"
            } w-[28px] h-[28px] object-contain cursor-pointer items-center`}
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex flex-col items-center"
          } sm:hidden p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[150px] z-10 rounded-xl`}
        >
          <ul className="flex-col gap-7 list-none justify-end items-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-secondary" : "text-white"
                }  text-[16 px] font-poppins font-medium cursor-pointer hover:text-secondary`}
                onClick={() => {
                  setActives(link.title);
                  setToggle();
                }}
              >
                <Link
                  key={link.id}
                  activeClass={active}
                  smooth
                  spy
                  offset={link.id == "projects" ? projectWindowOffset : 0}
                  to={link.id}
                  onSetActive={(to) => {
                    to === "hero" ? setActives("") : setActives(link.title);
                  }}
                >
                  {link.title}
                </Link>
                {/* <a href={`#${link.id}`}> {link.title} </a> */}
              </li>
            ))}
          </ul>
          <DownloadPDF />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
