import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div className='w-3/5 mx-auto pt-28 pb-16'>
       <h1 className='text-4xl my-2 '>Hi, I am Abhishek Rao</h1>
        <h2 className='text-2xl my-4'>I am a Front End Developer</h2>
        <p className='my-2 '>I  am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
        <div className='my-8'>
        <Link to="" className=" bg-gray-500 text-white px-4 py-2 rounded ">Check Resume</Link>
        
       </div>
    </div>
  )
}

export default Info