import React from 'react';
import '../App.css';
import '../styles/Projects.css'
import GitHubFeed from './GitHubFeed';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Webfolio (Framer)',
      description:
        "A visually engaging and fully responsive portfolio website built using Framer's no-code design platform to showcase my background, skills, and personal projects. This project emphasized modern web design principles and user experience, with a focus on clean layout, intuitive navigation, and interactive elements.",
      tech: 'Framer (no-code), CMS tools, responsive layout design',
      skills:
        'UI/UX design, layout hierarchy, typography, component-based structure, visual storytelling, and animation timing',
      features:
        'Smooth scroll effects, hover animations, responsive design for mobile/tablet, and a structured project showcase section',
      link: 'https://jpcodes.framer.website/'
    },
    {
      title: 'Form Creation Engine (FCE)',
      description:
        'A web application for creating surveys from CSV or text files, allowing users to manually create surveys and save them under user accounts.',
      tech: 'JavaScript, PHP, SQL, HTML, CSS',
      features:
        'Upload CSV files, take and save surveys, user authentication, and survey management with MySQL.',
      link: 'https://github.com/Joshypan/FormCreationEngine'
    },
    {
      title: 'LED Toggle Project (Raspberry Pi)',
      description:
        'A web-controlled system to toggle LEDs using a Raspberry Pi Pico W, programmed in MicroPython, enabling wireless control via a browser interface.',
      tech: 'MicroPython, HTML, CSS, Raspberry Pi Pico W',
      features:
        'Wireless control, real-time LED status updates, and a user-friendly interface.',
      link: 'https://github.com/Joshypan/LED-Toggle-Project'
    }
  ];

  return (
    <div className="projects-page">
      <h2 className="text-center fw-bold mb-4">Projects</h2>
      {projects.map((proj, idx) => (
        <div className="project-item my-4" key={idx}>
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <ul>
            {proj.tech && <li><strong>Technologies:</strong> {proj.tech}</li>}
            {proj.skills && <li><strong>Skills Gained:</strong> {proj.skills}</li>}
            {proj.features && <li><strong>Features:</strong> {proj.features}</li>}
          </ul>
          <div className="project-links">
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
              {proj.title.includes('Framer') ? 'Live Site' : 'GitHub Repo'}
            </a>
          </div>
        </div>
      ))}
      <section className="github-section text-center my-5">
        <h2 className="fw-bold">Latest GitHub Activity</h2>
        <p className="text-muted">Here are my 5 most recently updated public repos</p>
        <GitHubFeed username="Joshypan" />
      </section>
    </div>
  );
};

export default Projects;
