import React from 'react'
import SkillsPage from "../components/SkillsPage"
import Menu from '../components/Menu'


const Skills = () => {
  return (
    <div className='rounded-xl'>
      <header className="text-white text-center text-4xl font-bold rounded-xl p-8 bg-gray-900">
        <Menu/>
      </header>
      
      <SkillsPage />
    </div>
  )
}

export default Skills