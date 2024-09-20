import React from 'react'
import Info from './Info'
import Skill from './Skill'
import Project from './Project'
import Education from './Education'
import Footer from './Footer'

const Body = () => {
  return (
    <div>
      <Info/>
      <Skill/>
      <Project/>
      <Education/>  
      <Footer />
    </div>
  )
}

export default Body