import React from 'react';

const Projects = () => {
    return (
        <div className="projects-page my-5">
            <h2 className="text-center">Projects</h2>

            <div className="project-item my-4">
                <h3>Personal Webfolio</h3>
                <p>
                    A professional portfolio website built with React and a Flask backend, showcasing my development projects, skills, and experience.
                </p>
                <ul>
                    <li><strong>Technologies:</strong> React, Flask, Bootstrap, HTML, CSS, JavaScript</li>
                    <li><strong>Features:</strong> Multi-page navigation, responsive design, and integration with a Flask API for dynamic content delivery.</li>
                </ul>
                <div className="project-links">
                    <a href="https://github.com/Joshypan/Web-folio" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">GitHub Repo</a>
                </div>
            </div>
            
            <div className="project-item my-4">
                <h3>Form Creation Engine (FCE)</h3>
                <p>
                    A web application for creating surveys from CSV or text files, allowing users to manually create surveys and save them under user accounts.
                </p>
                <ul>
                    <li><strong>Technologies:</strong> JavaScript, PHP, SQL, HTML, CSS</li>
                    <li><strong>Features:</strong> Upload CSV files, take and save surveys, user authentication, and survey management with MySQL.</li>
                </ul>
                <div className="project-links">
                    <a href="https://github.com/Joshypan/FormCreationEngine" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">GitHub Repo</a>
                </div>
            </div>

            <div className="project-item my-4">
                <h3>LED Toggle Project (Raspberry Pi)</h3>
                <p>
                    A web-controlled system to toggle LEDs using a Raspberry Pi Pico W, programmed in MicroPython, enabling wireless control via a browser interface.
                </p>
                <ul>
                    <li><strong>Technologies:</strong> MicroPython, HTML, CSS, Raspberry Pi Pico W</li>
                    <li><strong>Features:</strong> Wireless control, real-time LED status updates, and a user-friendly interface.</li>
                </ul>
                <div className="project-links">
                    <a href="https://github.com/Joshypan/LED-Toggle-Project" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">GitHub Repo</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
