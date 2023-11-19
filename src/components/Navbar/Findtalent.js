import { CheckIcon, LinkIcon } from '@heroicons/react/solid';
import React from 'react';
import video1 from "./videos/Findvid1.mp4";
import video2 from "./videos/Findvid2.mp4";
import Slides from '../Slides';
import Menuslides from '../Menuslides';
import Bottompages from '../Bottompage';
function Findtalent() {
    return(
        <div className='mt-8'>
            <div className='max-w-7xl px-[10%] mx-auto'>
                <h2 className='font-bold text-2xl text-center text-pink-700'>Dribbble Hiring</h2>
                <h1 className='font-bold text-6xl text-center mt-4 text-slate-600'>Hire the world's top designers</h1>
                <p className='text-lg text-center mt-4'>Whether you prefer to actively seek out candidates using Designer Search or let designers come to you through our Job Board, Dribbble Hiring makes it easier than ever to source top-notch design talent.</p>
            </div>
            <div className=' max-w-7xl px-[5%] flex justify-evenly mx-auto mt-12 mb-6 flex-wrap'>
                <div className='border-2 mx-auto p-6 rounded-xl max-w-md mb-6'>
                    <h2 className='font-bold text-left text-4xl text-gray-600'>Job Board</h2>
                    <p className='text-left text-md mt-4'>Let top creative talent come to you by posting your listing on #1 design job board.</p>
                    <h2 className='font-bold text-left text-3xl mt-4 text-gray-600'>$33</h2>
                    <p className='text-gray-400 mt-2'>per month,billed quarterly</p>
                    
                    <div className='flex mt-4'>
                        <CheckIcon className='h-5 w-5 text-green-600 '/>
                        <p className='pl-2'>Average of 1.1k targeted clicks per month</p>
                    </div>
                    <div className='flex mt-4'>
                        <CheckIcon className='h-5 w-5 text-green-600'/>
                        <p className='pl-2'>Easily hire for full-time or freelance placements</p>
                    </div>
                    <div className='flex mt-4'>
                        <CheckIcon className='h-5 w-5 text-green-600'/>
                        <p className='pl-2'>Swap out listings as needed</p>
                    </div>
                    <button className='border-2 border-black font-bold text-gray-600 mx-auto min-w-full min-h-fit py-2 rounded-3xl mt-6'>Post a job</button>
                    <p className='text-gray-400 mt-2'>Cancel anytime. No strings attached</p>
                </div>
                <div className='border-2 mx-auto p-6 rounded-xl max-w-md mb-6'>
                    <h2 className='font-bold text-left text-4xl text-gray-600'>Hiring Suite</h2>
                    <p className='text-left text-md mt-4'>Tap into our ready-to-hire community of top designers with our seamless hiring solution.</p>
                    <h2 className='font-bold text-left text-3xl mt-4 text-gray-600'><strike className='text-gray-400'>$166</strike> $99</h2>
                    <p className='text-gray-400 mt-2'>per month,billed quarterly</p>

                    <div className='flex mt-4'>
                        <CheckIcon className='h-5 w-5 text-green-600 '/>
                        <p className='pl-2'>Search our entire database of available designers</p>
                    </div>
                    <div className='flex mt-4'>
                        <CheckIcon className='h-5 w-5 text-green-600'/>
                        <p className='pl-2'>Filter by work, location, budget, and more</p>
                    </div>
                    <div className='flex mt-4'>
                        <CheckIcon className='h-5 w-5 text-green-600'/>
                        <p className='pl-2'>Unlimited messages for designer outreach</p>
                    </div>
                    <div className='flex mt-4'>
                        <CheckIcon className='h-5 w-5 text-green-600'/>
                        <p className='pl-2'>Save and bookmark designers for future needs</p>
                    </div>
                    <button className='bg-slate-950 font-bold text-white mx-auto min-w-full min-h-fit py-2 rounded-3xl mt-6'>Subscribe Today</button>
                    <p className='text-gray-400 mt-2'>Cancel anytime. No strings attached</p>
                </div>
            </div>
            <h2 className='text-center text-lg'>We’ve helped some of the world’s best design-forward companies hire expert creatives</h2>
            <div className='px-[10%]'>
                <Slides />
            </div>
            <div className='flex max-w-max pl-24 mt-24 flex-wrap'>
                <div className='mt-6 max-w-lg px-[5%]'>
                    <h2 className='text-left bg-pink-500 text-white max-w-fit px-2 py-1 rounded-3xl'>Job Board</h2>
                    <h1 className='mt-4 text-3xl font-bold '>The #1 job board for top design talent</h1>
                    <p className='text-md mt-6 justify-left text-gray-700'>
                        Our job board postings receive an average of 1.1k targeted clicks per month and are viewed by over 1 million top designers globally. 
                        With a proven track record assisting over 60,000 companies, you’ll spend less time sorting through unqualified candidates and more 
                        time hiring amazing talent.
                    </p>
                    <button className='bg-slate-950  text-white mx-auto min-w-fit min-h-fit px-2 py-2 rounded-3xl mt-6'>Visit the job board</button>
                </div>
                <div className='border-8 border-l-rose-200  border-t-rose-200  border-r-fuchsia-100 border-b-fuchsia-100'>
                    <div className='max-w-full border-8  border-l-rose-200  border-t-rose-200 border-r-fuchsia-100 border-b-fuchsia-100'>
                        <video src={video1} className='w-[800px] box-border border-spacing-14 border-8  border-l-rose-200  border-t-rose-200 border-r-fuchsia-100 border-b-fuchsia-100'/>
                    </div>
                </div>
            </div>

            <div className='flex max-w-max pl-24 mt-24 flex-wrap'>   
                <div className='border-8 border-l-rose-200  border-t-rose-200  border-r-fuchsia-100 border-b-fuchsia-100'>
                    <div className=' bdrdr max-w-full   border-l-rose-200  border-t-rose-200 border-r-fuchsia-100 border-b-fuchsia-100'>
                        <video src={video2} className='w-[800px] box-border border-spacing-14 border-8  border-l-rose-200   border-t-rose-200 border-r-fuchsia-100 border-b-fuchsia-100'/>
                    </div>
                </div> 
                    
                <div className='mt-6 max-w-lg px-[5%]'>
                    <h2 className='text-left bg-pink-500 text-white max-w-fit px-2 py-1 rounded-3xl'>Hiring Suite</h2>
                    <h1 className='mt-4 text-3xl font-bold '>Hire faster & smarter with our designer search</h1>
                    <p className='text-md mt-6 justify-left text-gray-700'>
                    Our job board postings receive an average of 1.1k targeted clicks per month and are viewed by over 1 million top designers globally. With a proven track record assisting over 
                    60,000 companies, you’ll spend less time sorting through unqualified candidates and more time hiring amazing talent.
                    </p>
                    <button className='bg-slate-950  text-white mx-auto min-w-fit min-h-fit px-2 py-2 rounded-3xl mt-6'>Start your search</button>
                </div>
            </div>
            <div className='px-[5%]'>
                <Menuslides  className="px-[10%] max-w-7xl"/>
            </div>
            <Bottompages />
        </div>
    )
}

export default Findtalent;