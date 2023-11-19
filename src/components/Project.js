import React, { useState } from 'react';
import { HeartIcon, UserCircleIcon, EyeIcon, UserIcon } from '@heroicons/react/solid';

const Project = (props) => {
    const { img, team, likes, views } = props.details;
    const [isLiked, setIsLiked] = useState(false);
    const [LikeCount,setLikeCount] = useState(likes);
    const heartIconColor = isLiked ? 'pink-500' : 'gray-400'; 
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
    };

    return (
        <div className='w-[325px] h-[300px] rounded-xl mb-2'>
            <img src={img} alt="" className='rounded-xl h-[250px] w-[325px]' />
            <div className='flex justify-between p-2'>
                <div className='flex items-center'>
                    <UserCircleIcon className='h-4 w-4 text-gray-500' />
                    <h3>{team}</h3>
                </div>
                <div className='flex justify-between p-2'>
                    <div className='flex items-center px-2' onClick={handleLikeClick}>
                        <HeartIcon className={`h-4 w-4 text-${heartIconColor}`} />
                        <h2>{LikeCount}</h2>
                    </div>
                    <div className=' flex items-center px-2'>
                        <EyeIcon className='h-4 w-4 text-gray-500' />
                        <h2>{views}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
