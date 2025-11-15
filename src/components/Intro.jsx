import React, { useState, useEffect } from 'react';
import styles from './styles/hero.module.css';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrls = [
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1763216949/Banner_1_fme9fs.jpg",
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1763217793/Banner-2_1_o0phsr.webp",
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1763218594/board_brilliance_1_enjr2u.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 2000); // Rotate every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative">
      <div className={`relative w-full aspect-[2/1] ${styles.heroContainer}`}>
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

      </div>
    </main>
  );
};

export default HeroSection;
