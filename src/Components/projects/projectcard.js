import React from 'react';
// import ReactPlayer from "react-player"
import ProjectCardStyles from './projectcard.module.css'
import { FaGithubSquare, FaYoutube } from 'react-icons/fa';

function ProjectCard(props) {
    return (
        <div className={ProjectCardStyles.ProjectCard}>
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Calligraffitti" />
            <h1 className={ProjectCardStyles.Title}>{props.title}</h1>
            {/* <ReactPlayer className={ProjectCardStyles.ReactPlayer} url={props.youtube}/> */}
            // Project slides here
            <p>{props.description}</p>            
                {
                    props.github === false ? 
                    <>
                    Github:
                    <a 
                        href={props.git}
                        target="_blank" 
                        rel="noopener noreferrer"><FaGithubSquare className={ProjectCardStyles.Icon}/>
                    </a> 
                    </>
                    : 
                    <>
                    Frontend: <a 
                        href={props.gitfront}
                        target="_blank" 
                        rel="noopener noreferrer"><FaGithubSquare className={ProjectCardStyles.Icon}/>
                    </a> 
                    Backend: <a 
                        href={props.gitback}
                        target="_blank" 
                        rel="noopener noreferrer"><FaGithubSquare className={ProjectCardStyles.Icon}/>
                    </a> 
                </>
                }
            Demo:
            <a  
                href={props.youtube}
                target="_blank" 
                rel="noopener noreferrer"><FaYoutube className={ProjectCardStyles.Icon}/>
            </a>
        </div>
    )
}

// design decisions for project cards
// onhover, play the gif
// on click of the gif or link, take them to youtube demo video. 
export default ProjectCard;