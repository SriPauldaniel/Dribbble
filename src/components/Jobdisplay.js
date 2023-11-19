import React from 'react';

const Jobdisplay = (props) => {
    const{img,company,role,location,time} = props.details;

    return(
        <div className='flex flex-1 mt-8 border-2 w-full rounded-xl'>
            <img src={img} alt="" className='rounded-xl h-[100px] w-[110px] px-2 py-1'></img>
            <div className=' flex px-8 justify-between flex-1 mt-4'>
            <div className='flex  space-y-2 flex-col w-full'>
                <h2 className='font-bold text-gray-800'>{company}</h2>              
                <h1 className='font-bold text-xl text-gray-800'>{role}</h1>  
            </div>
            <h2 className='text-lg text-gray-600 w-full text-end'>{location}</h2>
            </div>
        </div>
    )
}

export default Jobdisplay;