import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div>
        <h1 className='text-3xl text-bold my-4 mx-8 text-center'>Projects</h1>
        <h2 className='text-center text-lg'>I have worked on front-end web developer project..</h2>
        <div className=''>
            <ProjectCard />
            {/* <Link>Visit Project Link</Link> */}
        </div>
        
        {/* <div>
            <h1> Food webApp</h1>
            <p>Info about project </p>
             <Link>Visit Project Link</Link> 
        </div> 
        */}
        

    </div>
  )
}

export default Project