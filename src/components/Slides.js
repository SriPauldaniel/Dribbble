import React from 'react';
import Slider from './Slider';
import logo1 from './images/slide1.jpg'; // Import your logo images
import logo2 from './images/slide2.jpg';
import logo3 from './images/slide3.jpg';
import logo4 from './images/slide4.jpg';
import logo5 from './images/slide5.jpg';
import logo6 from './images/slide6.jpg';
import logo7 from './images/slide7.jpg';
import logo8 from './images/slide8.jpg';
import logo9 from './images/slide9.jpg';
import logo10 from './images/slide10.jpg';
import logo11 from './images/slide11.jpg';
import logo12 from './images/slide12.jpg';
import logo13 from './images/slide13.jpg';
import logo14 from './images/slide14.jpg';

// Add more logo imports as needed

const Slides = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,logo9,logo10,logo11,logo12,logo13,logo14 ,logo1, logo2, logo3, logo4, logo5,logo6, logo7, logo8,logo9,logo10,logo11]; 

  return (
    <div>
      <h1>Company Logo Slider</h1>
      <Slider logos={logos} speed={50} />
    </div>
  );
};

export default Slides;
