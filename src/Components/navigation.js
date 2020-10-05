import React from 'react';
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

function Navigation() {
    return (
        <Navbar sticky="top" bg="dark" expand="sm">
            <Nav className="right">
                <NavLink className="d-inline p-2 bg-dark text-white" to='/'>Home</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to='/aboutme'>About Me</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to='/projects'>Projects</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to='/contactme'>Contact Me</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to='/resume'>Resume</NavLink>
            </Nav>
        </Navbar>
    )
}

// add links to github and linkedin in navbar
export default Navigation;