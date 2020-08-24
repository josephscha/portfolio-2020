import React from 'react';

function ProjectCard(props) {
    return (
        <>
            <div>{props.title}</div>
            <div>{props.description}</div>
            <div>{props.techstack}</div>
            <br></br>
        </>
    )
}

export default ProjectCard;