// components/HeroSection.jsx

import React, { useState, useEffect } from 'react';
import styles from './styles/hero.module.css'
import ResultModal from './ResultModal';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false)

  const imageUrls = [
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1703397010/Aaccent/lr2dcslw5irlkq16gxhf.jpg",
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1703397010/Aaccent/yndsoszvu67ilbqfhjhh.jpg",
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1705152077/Aaccent/c8xldeivaha5c4qns3hf.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); // Change image every 5 seconds
 // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <main>
      {/* <div className="" >
        <button onClick={() => setShowModal(true)}>
        <h1 className='text-xl text-red-500 text-center'>RESULTS</h1>
        </button>
      </div>
      {showModal && (
        <ResultModal />
      )} */}
      <div className={`relative w-full h-[35rem] ${styles.heroContainer}`}>
        {/* Background Image Container */}
        <div className={`absolute inset-0 z-0 ${styles.imageContainer}`}>
          <img
            className={`object-cover w-full h-full ${styles.fadeEffect}`}
            src={imageUrls[currentImageIndex]}
            alt=""
          />
        </div>

        {/* Text Overlay */}
        <div className="w-full md:w-[27rem] absolute inset-0 z-10 flex flex-col justify-left items-center text-white mt-24 md:ml-8 gap-y-8 overflow-hidden">
          <h1 className="text-xl md:text-4xl font-bold text-center">
            Personalized, effective, and affordable tutoring services for Advantage Academic Center students.
          </h1>
          <span className="text-lg font-semibold text-center">
            Excel in Science & Mathematics with Personalized Coaching
          </span>
          </div>
      </div>
    </main>
  );
};

export default HeroSection;
