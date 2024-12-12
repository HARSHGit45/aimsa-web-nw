import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const slideInterval = 3000; // Time in milliseconds for each slide

  // Function to go to the next slide
  const nextSlide = () => {
    setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  // Timer to automatically move to the next slide
  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [slide]); // Dependency array ensures the timer resets with each slide change

  return (
    <div className="carousel-container">
    
    
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={slide === idx ? "slide" : "slide slide-hidden"}
        />
      ))}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={
              slide === idx ? "indicator" : "indicator indicator-inactive"
            }
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  
  
    </div>
  );
};
