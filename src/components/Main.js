import React from 'react';
import img1 from "./images/bg_new.jpg"
function Main() {
    return(
        <div className="relative h-[480px]">
            
            <div className="absolute z-20 flex h-full w-full flex-col justify-center space-y-4 ml-12 font-bold text-white ">
                <button className= "bg-pink-500 rounded-3xl max-w-fit px-[2%] py-[0.3%] text-lg text-[20px] mx-auto text-white hover:cursor-text">Over 3 million ready-to-work creatives!</button>
                <h1 className='text-7xl flex max-w-max mx-auto pt-[25px] font-Century font-md'>Work with the world's top</h1>
                <h1 className ='text-7xl flex mx-auto'>creative talent.</h1>
                <h4 className='mx-auto text-lg py-[25px]'>Connect with millions of top-rated designers & agencies around the world.</h4>
                <button className='bg-pink-500 rounded-3xl max-w-fit mx-auto px-[2%] h-[50px] text-slate-100'>Start hiring today</button>
            </div>
            <div className='bg-black opacity-50 absolute w-full h-full'></div>
            <img src = {img1} alt = "" className='w-full h-full object-cover' ></img> 
        </div>
    )
}

export default Main;