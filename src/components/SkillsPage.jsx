import React from 'react';
import Skill from '../functions/Skill';
import Expertise from '../functions/Expertise';

const skills = [
  'Python ', 'Javascript', 'C/C++', 'Java', 'Mojo'
];

const expertise = [
  'Backend (Python)', 
  'Desktop Application (Python)', 
  'Data Analysis', 
  'Network Programming(pyhton)',
  "Web Scraping (Python)",
  "BOT Development (Python)",
  'Web Application (Python & Javascript)', 
  'Machine Learning [loading..]', 
  'Deep Learning [loading..]', 
  'Artificial Intelligence [loading..]', 
  'Neural Network Science [Pending]'
];

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Skills & Expertise</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Expertise</h2>
          <div className="flex flex-wrap">
            {expertise.map((exp, index) => (
              <Expertise key={index} expertise={exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
