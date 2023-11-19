import React from 'react';
import { pro1 } from '../pro1'
import Jobdisplay from '../Jobdisplay';
import { SearchIcon } from '@heroicons/react/outline';
import Bottompages from '../Bottompage';
function Jobs() {
    return(
        <div className='mx-auto'>
            <div className="z-20 flex h-[480px] w-full flex-col justify-center ml-12 font-bold">
                <h1 className='text-6xl mx-auto justify-start font-bold text-center'>The #1 job board for</h1>
                <h1 className='text-6xl mx-auto font-bold mt-2 justify-start text-center'>graphic design jobs</h1>
                <p className='text-lg mx-auto text-center mt-8'>Dribbble is the heart of the design community and the best resource to discover</p>
                <p className='text-lg mx-auto text-center '>and connect with designers and jobs worldwide.</p>
                <button className='text-center mt-12 text-white bg-pink-500 rounded-3xl px-3 py-2 mx-auto max-w-fit'>+ post jobs</button>
                <p className='text-lg mx-auto mt-10 text-center max-w-fit jus text-gray-500'>Just $25/week (billed monthly)</p>
            </div>
            <div className='max-w-7xl mx-auto ml-[10%]'>
                <ul className='flex max-w-[480px] justify-between mx-8'>
                    <li className='text-lg text-gray-600 px-2 py-1 hover:cursor-pointer hover:border-1 hover:bg-gray-100 hover:rounded-3xl '>Full-Time Board</li>
                    <li className='text-lg text-gray-600 px-2 py-1 hover:cursor-pointer hover:border-1 hover:bg-gray-100 hover:rounded-3xl'>Freelance Jobs</li>
                    <li className='text-lg text-gray-600 px-2 py-1 hover:cursor-pointer hover:border-1 hover:bg-gray-100 hover:rounded-3xl'>Designer Jobs</li>
                </ul>
            </div>

            <div className='flex max-w-full mx-10% pr-10'>
                <div className='w-[1200px] border-1'>
                    <h1 className='font-bold text-3xl ml-[15%] mr-4 mt-4'>Recent Posts</h1>
                    <p className='ml-[15%] mt-4 mr-4'>3 Oppertunities posted today!</p>
                    <div className='ml-[15%] mr-4'>
                        {pro1.map((key) =>{
                            return <Jobdisplay details = {key} key={key.id} />
                        })}
                    </div>
                </div>
                <div className='min-w-fit max-h-fit border-2 border-gray-300 rounded-xl px-12'>
                    <h1 className='text-xl text-gray-700 font-semibold mb-6 mt-6'>Specialities</h1>
                    <form className='flex flex-col space-y-2 '>
                        <div><input type='checkbox'  value=""/><label className='px-2'>Animation</label></div>
                        <div><input type='checkbox'  value=""/><label className='px-2'>Graphic Design / Brand</label></div>
                        <div><input type='checkbox'  value=""/><label className='px-2'>Illustration</label></div>
                        <div><input type='checkbox'  value=""/><label className='px-2'>Leadership</label></div>
                        <div><input type='checkbox'  value=""/><label className='px-2'>Mobile Design</label></div>
                        <div><input type='checkbox'  value=""/><label className='px-2'>UI/Visual Design</label></div>
                        <div><input type='checkbox'  value=""/><label className='px-2'>Product Design</label></div>
                        <div><input type='checkbox'  value=""/><label className='px-2'>UX Design / Research</label></div>
                        <div><input type='checkbox'  value=""/><label className='px-2'>Web Design</label></div>
                        <button className='bg-gray-500 text-white rounded-3xl px-2 py-1 hover:bg-gray-300'>Filter</button>
                        <labell>Location</labell>
                        <div className='flex border-gray-400 border-2 rounded-lg'>   
                        <SearchIcon className='h-7 w-5 pt-1 bg-slate-400 rounded-lg'/>
                        <input type='text' className='border-none'/>
                        </div>
                        
                    </form>

                </div>
            </div>
            <Bottompages />
        </div>
    )
}

export default Jobs;