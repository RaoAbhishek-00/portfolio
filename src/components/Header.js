import React from 'react'
import Icon from './Icon'
import Button from './Button'

const Header = () => {
  return (
    <div className='flex justify-between bg-violet-800 text-white'>
      <div className='flex ml-8'>
        <Icon />
        <h1 className='font-bold text-3xl mx-4 my-2'>Porfolio</h1>
        </div>
      
      <div className='flex mr-8'>
        <Button name="About"/>
        <Button name="Skills"/>
        <Button name="Projects"/>
        <Button name="Education"/>
      </div>
    </div>
  )
}

export default Header