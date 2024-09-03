import React, { useState } from 'react';
import Menu from '../components/Menu';
import Fingerprint from '@mui/icons-material/Fingerprint';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

// Projects array (as provided)
const projects = [
  // (Your project objects here...)
  {
    title: "Portfolio",
    description: "This is a simple and modern Portfolio design inspired by GitHub and Gitfolio",
    url: "https://github.com/swadhinbiswas/Portfolio",
    github: "https://github.com/swadhinbiswas/Portfolio",
    picture: "https://github.com/swadhinbiswas/Portfolio/raw/main/sesignconsept.png",
    tech: ["React", "Tailwind CSS", "Vercel"],
    Contribution: "",
  },
  {
    title: "Unoffical Streamtape API Wrapper",
    description: "Streamtape tries to give the user the best experience you can get on a video-sharing website",
    url: "https://github.com/swadhinbiswas/Streamtape",
    github: "https://github.com/swadhinbiswas/Streamtape",
    picture: "https://raw.githubusercontent.com/swadhinbiswas/Streamtape/main/Streamtape.png",
    tech: ["Python", "Streamtape API", "Requests"],
    Contribution: "",
  },
  {
    title: "liveattendence_with_anti_cheat",
    description: "Secure face login system using Python (face detection) and React (frontend). Prevents photo/video spoofing with anti-spoofing deep learning models. Open-source code.",
    url: "https://github.com/swadhinbiswas/liveattendence_with_anti_cheat",
    github: "https://github.com/swadhinbiswas/liveattendence_with_anti_cheat",
    picture: "https://raw.githubusercontent.com/swadhinbiswas/liveattendence_with_anti_cheat/main/photos/loginpage.gif",
    tech: ["ML", "Python", "React", "OpenCV"],
    Contribution: "",
  },
  {
    title: "AI-Powered Telegram Bot with Pyrogram",
    description: "An advanced, versatile chatbot enhancing user interactions and automation on Telegram.",
    url: "https://github.com/swadhinbiswas/AIBOT",
    github: "https://github.com/swadhinbiswas/AIBOT",
    picture: "https://repository-images.githubusercontent.com/804773655/bf342491-d66e-48f1-866f-c493050b484b",
    tech: ["Python", "CloudFlare AI MODEL", "Requests"],
    Contribution: "",
  },
  
  // (Other project objects...)
];

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-800 text-white mx-auto mb-8">
      {project.picture && (
        <img className="w-full h-48 object-cover" src={project.picture} alt={project.title} />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.title} < Fingerprint /></div>
        <p className="text-gray-300 text-base">{project.description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between">
        {project.url && (
          <a
            href={project.url}
            className="text-blue-400 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" endIcon={<OpenInNewIcon />}>
              Link
            </Button>
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            className="text-blue-400 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" endIcon={<GitHubIcon />}>
              Github
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Calculate the indexes for the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(projects.length / projectsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8 rounded-lg border space-x-1">
      <div className='flex gap-x-1  '>
        <div className=' space-x-9'>
        <Menu />

        </div>
       
      </div>
      <br />
      <h1 className="text-3xl text-center text-white mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button
          variant="contained"
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          className="ml-4"
          disabled={currentPage === Math.ceil(projects.length / projectsPerPage)}
          onClick={handleNextPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ProjectsPage;
