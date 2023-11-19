import React, { useState, useEffect, useRef } from 'react';
import './Navbar/Slider.css'; // Import the CSS file for styling

const Slider = ({ logos, speed }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const contentWidth = contentRef.current.offsetWidth;

    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => (prevPosition + 1) % contentWidth);
    }, speed);

    return () => clearInterval(scrollInterval);
  }, [speed]);
    
  return (
    <div className="slider-container">
      <div
        className="slider-content"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
        ref={contentRef}
      >
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={` ${index === 28 ? index = 1 : index +1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
