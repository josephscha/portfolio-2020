import React from 'react';
import {Link} from 'react-router-dom'
function Sidebar() {
    return (
        <div className="side-nav">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/aboutme'>About Me</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contactme'>Contact Me</Link>
                </li>
                <li>
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
            icons for email, linkedin, github, medium
        </div>
    )
}

export default Sidebar;