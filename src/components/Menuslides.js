import React from 'react';
import Slider from './Slider';
import menu1 from './images/menu1.jpg';
import menu2 from './images/menu2.jpg';
import menu3 from './images/menu3.jpg';
import menu4 from './images/menu4.jpg';
import menu5 from './images/menu5.jpg';
import menu6 from './images/menu6.jpg';
import menu7 from './images/menu7.jpg'

const Slides = () => {
  const logos = [menu1,menu2,menu3,menu4,menu5,menu6,menu7,menu1,menu2,menu3,menu4,menu5,menu6,menu1,menu2,menu3,menu4,menu5,menu6,menu1,menu2,menu3,menu4,menu5,menu6]; 

  return (
    <div>
      <h1 className='font-bold text-xl mt-8 mb-8'>Menu Slide-Bar</h1>
      <Slider logos={logos} speed={50} className='mt-8 rounded-xl'/>
    </div>
  );
};

export default Slides;
