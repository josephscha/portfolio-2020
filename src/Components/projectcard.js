import React from 'react';

function ProjectCard(props) {
    return (
        <div className="project-card">
            <div>{props.title}</div>
            <div>{props.description}</div>
            <div>{props.techstack}</div>
            <br></br>
        </div>
    )
}

// design decisions for project cards
export default ProjectCard;