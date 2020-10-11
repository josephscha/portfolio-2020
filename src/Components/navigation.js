import React from 'react';
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Navigation() {
    return (
        <Navbar sticky="top" bg="dark" expand="sm">
            <Nav className="right">
                <NavLink className="d-inline p-2 bg-dark text-white" to='/'>Home</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to='/aboutme'>About Me</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to='/projects'>Projects</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to='/contactme'>Contact Me</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to='/resume'>Resume</NavLink>
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
            </Nav>
        </Navbar>
    )
}

// add links to github and linkedin in navbar
export default Navigation;