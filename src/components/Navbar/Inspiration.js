import React from 'react';
import Menu from '../Menu'
import Projects from '../Projects'
import Bottompages from '../Bottompage';
import Menuslides from '../Menuslides';
function Inspiration() {
    return(
        <div>
            <div className='max-w-3xl text-center mx-auto mt-16'>
                <h1 className='text-5xl font-bold text-gray-800'>Discover the world's top designers & creatives</h1>
                <p className='text-xl mt-14 px-[10%]'>Dribbble is the leading destination to find & showcase
                creative work and home to the world's best design professionals.</p>
                <div className='mt-10 flex px-[10%]'>
                    <p>Trending Searches</p>
                    <ul className='flex flex-1 justify-between pl-4'>
                        <button className='border-2 px-3 py-1 rounded-3xl'>landing page</button>
                        <button className='border-2 px-3 py-1 rounded-3xl'>ios</button>
                        <button className='border-2 px-3 py-1 rounded-3xl'>food</button>
                        <button className='border-2 px-3 py-1 rounded-3xl'>ux design</button>
                        <button className='border-2 px-3 py-1 rounded-3xl'>app design</button>
                    </ul>
                </div>
            </div>
            <Menu />
            <Projects />
            <div className='px-[5%]'>
                <Menuslides  className="px-[10%] max-w-7xl"/>
            </div>
            <Bottompages />
        </div>
    )
}

export default Inspiration;