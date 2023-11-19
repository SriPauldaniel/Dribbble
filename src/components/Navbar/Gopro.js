import React from 'react';
import Slides from '../Slides';
import Bottompages from '../Bottompage';

function Gopro() {
    return(
        <div className='mx-auto flex flex-col'>
            <div className='relative max-w-7xl px-[10%] mx-auto mt-24'>
                <h2 className='font-bold text-2xl text-center text-pink-700'>DRIBBBLE PRO</h2>
                <h1 className='font-bold text-6xl text-center mt-4 text-slate-600'>Grow your design business</h1>
                <p className='text-lg text-center mt-4'>Get more eyes on your work and stand out with attention grabbing profile features to attract more opportunities</p>
                <h1 className='rounded-3xl border-1 bg-pink-500  text-white mt-8 px-8 py-2 max-w-fit mx-auto'>Onsale</h1>
                <h1 className='font-bold text-6xl text-center mt-4 text-pink-600'><strike className ="text-gray-600">$16</strike>$5/month</h1>
                <p className='text-lg text-center mt-4 text-gray-400'>billed annually</p>
                <h1 className='rounded-3xl border-1 bg-gray-800 text-white mt-8 px-8 py-2 max-w-fit mx-auto'>getStarted</h1>
            </div>
            <Bottompages />
        </div>
    )
}

export default Gopro;