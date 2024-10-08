import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <div className=' bg-dark-teal text-white'>
      <div className='flex mx-auto pt-16 justify-between w-3/4 '>
        <Button name="About"/>
        <Button name="Skills"/>
        <Button name="Projects"/>
        <Button name="Education"/>
      </div>
    </div>
  )
}

export default Footer