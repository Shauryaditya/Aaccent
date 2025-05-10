import React, { useState, useEffect } from 'react';
import styles from './styles/hero.module.css';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrls = [
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1703397010/Aaccent/lr2dcslw5irlkq16gxhf.jpg",
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1703397010/Aaccent/yndsoszvu67ilbqfhjhh.jpg",
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1705152077/Aaccent/c8xldeivaha5c4qns3hf.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 2000); // Rotate every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative">
      <div className={`relative w-full h-[35rem] ${styles.heroContainer}`}>
        {/* Image Background Layer */}
        <div className="absolute inset-0 z-0">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Optional dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4 md:items-start md:px-12 text-white mt-10 md:mt-0 gap-y-6 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold max-w-2xl leading-tight drop-shadow-lg">
            Personalized, effective, and affordable tutoring services for Advantage Academic Center students.
          </h1>
          <span className="text-lg font-medium drop-shadow-md">
            Excel in Science & Mathematics with Personalized Coaching
          </span>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
