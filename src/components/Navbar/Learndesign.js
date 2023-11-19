import React from 'react';
import Bottompages from '../Bottompage';
import Menuslides from '../Menuslides';
function Learndesign() {
    return(
        <div>
            <div className='mt-8 flex flex-1 max-w-7xl mx-auto'>
                <div className='justify-start max-w-[60%] font-bold mt-8 '>
                    <h1 className='text-xl border-2 bg-pink-300 max-w-fit px-2 py-1 rounded-3xl mt-8'>Workshops</h1>
                    <h1 className='text-5xl mt-8'>Level up your design game with industry leaders</h1>
                    <p className='text-[18px] mt-8 '>Fuel your creative ambitions with our live interactive workshops.
                    Spend a day with design business pros and walk away with knowledge that lasts a lifetime.</p>
                </div>
                <div className='justify-centern max-w-[40%] mt-8'>
                    <h2 className=''>Upcoming events</h2>
                    <div>

                    </div>
                </div>
            </div>
            <div className='px-[5%]'>
                <Menuslides  className="px-[10%] max-w-7xl"/>
            </div>
            <Bottompages />
        </div>
    )
}

export default Learndesign;