import React, { useState, useEffect, useRef } from "react";

import "./carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchStartIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length, isDragging]);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    touchStartX.current = e.touches[0].clientX;
    touchStartIndex.current = currentIndex;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    const dx = touchEndX.current - touchStartX.current;
    setTranslateX(dx - startX);
  };

  const handleTouchEnd = () => {
    const dx = touchEndX.current - touchStartX.current;
    const threshold = 50;
    if (Math.abs(dx) > threshold) {
      if (dx < 0) {
       
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else {
        
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      }
    }
    setTranslateX(0);
    setIsDragging(false);
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ overflow: 'hidden' }} 
    >
      <div
        className="carousel-track"
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
          transition: isDragging ? 'none' : 'transform 0.5s ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-image"
          >
            <img
              src={image}
              alt={`Carousel ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
