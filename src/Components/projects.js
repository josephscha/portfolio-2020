import React from 'react';
import projects from '../database.json'
import ProjectCard from './projectcard'

function Projects() {
    return (
        <div>
            {projects.map(project => <ProjectCard key={project.id} {...project}/>)}
        </div>
    )
}

export default Projects;