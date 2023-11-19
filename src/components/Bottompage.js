import React from 'react';

function Bottompages() {
    return(
            <div className='bg-slate-50 h-full'>
                <div className='flex justify-start mt-12 max-w-6xl mx-auto mb-8 py-12'>
                    <h1 className='font-bold text-xl pr-8'>Dribbble</h1>
                    <ul className='flex flex-1 justify-between pl-1'>
                        <li>For Designer</li>
                        <li>Hire Talents</li>
                        <li>Inspiration</li>
                        <li>Advertising</li>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className='flex pb-4'>
                    <div className='w-[48%]'>
                        <ul className='pl-[20%] flex'>
                            <li className='px-8'>Terms</li>
                            <li className='px-8'>Privacy</li>
                            <li className='px-8'>Cookies</li>
                        </ul>
                    </div>
                    <ul className=' w-[40%] flex justify-between items-end'>
                        <li>Jobs</li>
                        <li>Designers</li>
                        <li>Freelancers</li>
                        <li>Tags</li>
                        <li>Places</li>
                        <li>Resources</li>
                    </ul>
                </div>
            </div>
    )
}

export default Bottompages;