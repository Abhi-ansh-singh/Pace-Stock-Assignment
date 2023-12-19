import React from 'react'
import projectData from "../../Data/Data";
import "../RecentProjects/RecentProjects.css";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function RecentProjects() {
  return (
    <>
    <section className="projects-container" id="Projects">
      <div className="project-content">
        <h1>Recent Projects</h1>
        <div className="cards">
          {projectData.map((project) => (
              <div className='card'>
              <h3>{project.heading}</h3>
              <div className='card-links'>
                  <a href={project.demo} target='_blank'><GitHubIcon /><span>Clone Project</span></a>
                  <a href={project.code} target="_blank"><GitHubIcon /><span>Code</span></a>
              </div>
              <hr />
              <p className='techStack'>Tech Stack : <span>{project.techStack}</span></p>
              <p>{project.date}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
