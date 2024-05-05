import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../utils/useMediaQuery";



const Nav = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  const itemMotion ={
    visible: { opacity: 1, x: 0},
    hidden: {opacity: 0, x: -100},
  }
  return (
    <nav className="relative mx-8 mb-8 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <svg
        className="absolute bottom-0 left-[52%] md:left-[34%]  -translate-x-1/2 "
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          strokeWidth={2}
          stroke="#282828"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <img className="w-7 h-7 md:w-12 md:h-12 p-1" src="https://res.cloudinary.com/dvjbrjvgf/image/upload/v1703397008/Aaccent/ozsltpw9rdp9hprglhwv.jpg" alt="Logo" />
      </div>

      <h1 className="text-sm md:text-lg font-bold">
        <a href="#">ADVANTAGE ACADEMIC CENTER</a>
      </h1>
      {matches && (
        <div className="flex gap-12">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/pricing">Pricing</a>
          <a href="/about">About Us</a>
          <a href="/results">Results</a>
          <a href="/contact">Contact Us</a>
         
        </div>
      )}

      {!matches && (
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className="space-y-1 cursor-pointer z-50 "
        >
          <span className="block h-0.5 w-8 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="block h-0.5 w-4 bg-black"></span>
        </div>
      )}
      {toggled && !matches &&
        (
          <motion.div
          animate={{ opacity: 1, x: 0}}
          initial={{opacity: 0, x: 25}}
          className="fixed flex bg-white bottom-0 left-0 w-full h-screen justify-center items-center z-50">

            <div className="flex flex-col gap-7 md:gap-24 text-base md:text-lg">
              <motion.a variants={itemMotion} href="/">Home</motion.a>
              <motion.a variants={itemMotion} href="/services">Services</motion.a>
              <motion.a variants={itemMotion} href="/pricing">Pricing</motion.a>
              <motion.a variants={itemMotion} href="/about">About Us</motion.a>
              <motion.a variants={itemMotion} href="/results">Results</motion.a>
              <motion.a variants={itemMotion} href="/contact">Contact Us</motion.a>
            </div>
          </motion.div>
        )}
    </nav>
  );
};

export default Nav;
