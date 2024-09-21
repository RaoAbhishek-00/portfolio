import React from 'react'
import Info from './Info'
import Skill from './Skill'
import Project from './Project'
import Education from './Education'


const Body = () => {
  return (
    <div className='bg-gradient-to-b from-light-teal   via-brown to-cream'>
      <Info/>
      <Skill/>
      <Project/>
      <Education/>  
      
    </div>
  )
}

export default Body