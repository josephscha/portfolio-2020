import React from 'react';
import projects from '../../database.json'
import ProjectCard from './projectcard'

function Projects() {
    return (
        <div className="projects">
            {projects.map(project => <ProjectCard key={project.id} {...project}/>)}
        </div>
    )
}

export default Projects;