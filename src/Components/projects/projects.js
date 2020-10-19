import React from 'react';
import projects from '../../database.json'
import ProjectCard from './projectcard'
import ProjectStyles from './projects.module.css'

function Projects() {
    return (
            <div className={ProjectStyles.ProjectContainer}>
                {projects.map(project => <ProjectCard key={project.id} {...project}/>)}
            </div>
    )
}

export default Projects;