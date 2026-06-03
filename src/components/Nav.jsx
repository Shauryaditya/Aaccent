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
  
  const linkClass = "text-oxford hover:text-tan transition-colors duration-300 font-semibold";
  
  return (
    <nav className="relative mx-8 mb-4 flex justify-between items-center pt-10 pb-6 font-medium md:mx-16 lg:mx-32 z-50">
      <svg
        className="absolute bottom-0 left-[52%] md:left-[34%] -translate-x-1/2"
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          strokeWidth={2}
          stroke="#D2B48C"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <img className="w-10 h-10 md:w-12 md:h-12 p-1 rounded-full border border-tan" src="https://res.cloudinary.com/dvjbrjvgf/image/upload/v1703397008/Aaccent/ozsltpw9rdp9hprglhwv.jpg" alt="Logo" />
      </div>

      <h1 className="text-sm md:text-xl font-extrabold tracking-wide text-oxford">
        <a href="/" className="hover:text-tan transition-colors duration-300">ADVANTAGE ACADEMIC CENTER</a>
      </h1>
      {matches && (
        <div className="flex gap-12 text-sm uppercase tracking-wider">
          <a href="/" className={linkClass}>Home</a>
          <a href="/services" className={linkClass}>Services</a>
          <a href="/pricing" className={linkClass}>Pricing</a>
          <a href="/about" className={linkClass}>About Us</a>
          <a href="/results" className={linkClass}>Results</a>
          <a href="/contact" className={linkClass}>Contact Us</a>
        </div>
      )}

      {!matches && (
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className="space-y-1.5 cursor-pointer z-50 p-2"
        >
          <span className={`block h-0.5 w-8 transition-transform duration-300 bg-oxford ${toggled ? "rotate-45 translate-y-2 bg-oxford" : ""}`}></span>
          <span className={`block h-0.5 w-6 transition-opacity duration-300 bg-oxford ${toggled ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-4 transition-transform duration-300 bg-oxford ${toggled ? "-rotate-45 -translate-y-2 w-8 bg-oxford" : ""}`}></span>
        </div>
      )}
      {toggled && !matches &&
        (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 25 }}
            className="fixed flex bg-oxford bottom-0 left-0 w-full h-screen justify-center items-center z-40"
          >
            <div className="flex flex-col gap-8 text-center text-xl uppercase tracking-widest">
              <motion.a variants={itemMotion} href="/" className="text-white hover:text-tan font-bold block py-2" onClick={() => setToggled(false)}>Home</motion.a>
              <motion.a variants={itemMotion} href="/services" className="text-white hover:text-tan font-bold block py-2" onClick={() => setToggled(false)}>Services</motion.a>
              <motion.a variants={itemMotion} href="/pricing" className="text-white hover:text-tan font-bold block py-2" onClick={() => setToggled(false)}>Pricing</motion.a>
              <motion.a variants={itemMotion} href="/about" className="text-white hover:text-tan font-bold block py-2" onClick={() => setToggled(false)}>About Us</motion.a>
              <motion.a variants={itemMotion} href="/results" className="text-white hover:text-tan font-bold block py-2" onClick={() => setToggled(false)}>Results</motion.a>
              <motion.a variants={itemMotion} href="/contact" className="text-white hover:text-tan font-bold block py-2" onClick={() => setToggled(false)}>Contact Us</motion.a>
            </div>
          </motion.div>
        )}
    </nav>
  );
};

export default Nav;

