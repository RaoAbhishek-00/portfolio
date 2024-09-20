import React from 'react'
import SkillCard from './SkillCard'

const Skill = () => {
  return (
    <div>
        <h1 className='text-3xl px-8 text-center'>Skills</h1>
        <h2 className='px-8 text-center text-lg py-2'>Here are some of skills which I learn so far...</h2>
        <div className='px-8 py-2'> <SkillCard /> </div>
        {/* <div> React.js </div>
        <div> CSS </div>
        <div> Redux </div>
        <div> Next.js </div>
        <div> Tailwind </div>
         */}
    </div>
  )
}

export default Skill