import React from 'react';
import Project from './Project'
import { pro } from './pro';
function Projects() {
    return( 
        <div className='flex flex-wrap justify-evenly max-w-full mt-10'>
            {pro.map((key) => {
                return <Project details = {key} key = {key.id} />
            })}
        </div>
    )
}

export default Projects;