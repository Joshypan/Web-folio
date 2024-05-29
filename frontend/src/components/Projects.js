import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the projects!", error);
            });
    }, []);

    return (
        <div className="my-5">
            <h2 className="mb-4">Projects</h2>
            <ul className="list-group">
                {projects.map(project => (
                    <li key={project.id} className="list-group-item">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p>Tech Stack: {project.tech_stack.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
