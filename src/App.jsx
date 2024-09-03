import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import Activity from './pages/Activity';
import Skills from './pages/Skills';
import Education from './pages/Education';

import OpenSource from './pages/OpenSource';



export default function App() {
  return (
 
    <Router>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/education" element={<Education />} />
      
      <Route path="/opensource" element={<OpenSource />} />
    </Routes>
  </Router>

  );
}
