import React, { useState, useEffect } from 'react';
import styles from './styles/hero.module.css';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Desktop images (2:1 ratio)
  const desktopImages = [
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1776510941/Banner-home_nabvwc.webp",
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1776511951/ADVANTAGE_ACADEMIC_CENTER_1920_x_600_px_1000_x_500_px_sc40ut.png",
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1763218594/board_brilliance_1_enjr2u.webp",
  ];

  // Mobile images (5:6 ratio) - Add your mobile-specific images here
  const mobileImages = [
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1776510915/2030_500_x_600_mm_eyovki.webp",
    "https://res.cloudinary.com/dvjbrjvgf/image/upload/v1776511800/poster_dow9ab.jpg",
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
    <main className="relative pt-4 pb-8 px-4 md:px-6">
      {/* Container with rounded corners and max-width for modern compact look */}
      <div className={`relative w-full max-w-7xl mx-auto aspect-[5/6] md:aspect-[2/1] ${styles.heroContainer || ''} rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5`}>
        {/* Image Background Layer */}
        <div className="absolute inset-0 z-0 bg-stone-100">
          
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