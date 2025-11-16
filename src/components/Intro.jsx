import React, { useState, useEffect } from 'react';
import styles from './styles/hero.module.css';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Desktop images (2:1 ratio)
  const desktopImages = [
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1763268020/Advantage_academic_Center_d2gubh.webp",
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1763217793/Banner-2_1_o0phsr.webp",
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1763218594/board_brilliance_1_enjr2u.webp",
  ];

  // Mobile images (5:6 ratio) - Add your mobile-specific images here
  const mobileImages = [
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1763310061/Advantage_academic_C..._imresizer_gvr79l.jpg",
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1763310163/Banner-2_imresizer_orqiah.jpg",
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1763310235/board_brilliance_1__imresizer_ox7w7i.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % desktopImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [desktopImages.length]);

  return (
    <main className="relative">
      {/* Mobile: 5:6 ratio, Desktop: 2:1 ratio */}
      <div className={`relative w-full aspect-[5/6] md:aspect-[2/1] ${styles.heroContainer}`}>
        {/* Image Background Layer */}
        <div className="absolute inset-0 z-0">
          
          {/* Desktop Images */}
          <div className="hidden md:block absolute inset-0">
            {desktopImages.map((url, index) => (
              <img
                key={`desktop-${index}`}
                src={url}
                alt={`Desktop Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Mobile Images */}
          <div className="block md:hidden absolute inset-0">
            {mobileImages.map((url, index) => (
              <img
                key={`mobile-${index}`}
                src={url}
                alt={`Mobile Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>


        </div>

        {/* Text Overlay */}

      </div>
    </main>
  );
};

export default HeroSection;