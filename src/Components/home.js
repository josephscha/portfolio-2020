import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Home() {
    return (
        <div className="home">
            <img className="profile-picture" src="./profilepicture.jpg" alt="default"/>
            <div>Joseph S. Cha</div>
            <div>Software Engineer</div>
            <a 
                href="https://www.linkedin.com/in/joseph-cha-316639174/" 
                target="_blank" 
                rel="noopener noreferrer"><FaLinkedin/>
            </a>
            <a 
                href="https://github.com/josephscha" 
                target="_blank" 
                rel="noopener noreferrer"><FaGithub/>
            </a>
        </div>
    )
}

// add styling to icons
export default Home;