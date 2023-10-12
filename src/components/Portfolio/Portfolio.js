import React from 'react';
import projectData from './projectData'; // Importing project data
import githubIcon from '../assets/img/git-bt.jpg';  // Path to your GitHub icon
import liveIcon from '../assets/img/live-bt.jpg'; // Path to your live server icon

const Portfolio = () => {
  return (
    <div className="portfolio">
      {projectData.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.name} className="project-image" />
          <div className="project-info">
            <h3>{project.name}</h3>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub Link" className="link-icon" />
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <img src={liveIcon} alt="Live Server Link" className="link-icon" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
