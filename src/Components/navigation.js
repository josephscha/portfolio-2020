import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navigation() {
  return (
    <Navbar sticky="top" bg="dark" expand="sm">
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Amatic+SC" />
      <Nav className="right">
        <NavLink className="d-inline p-2 text-white amatic" to="/">
          Home
        </NavLink>
        <NavLink className="d-inline p-2  text-white amatic" to="/aboutme">
          About Me
        </NavLink>
        <NavLink className="d-inline p-2 text-white amatic" to="/projects">
          Projects
        </NavLink>
        <NavLink className="d-inline p-2 text-white amatic" to="/contactme">
          Contact Me
        </NavLink>
        <NavLink className="d-inline p-2 text-white amatic" to="/resume">
          Resume
        </NavLink>
      </Nav>
      <div className="rightside">
        <a
          href="https://www.linkedin.com/in/joseph-cha-316639174/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="navicon"/>
        </a>
        <a
          href="https://github.com/josephscha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="navicon"/>
        </a>
        </div>
    </Navbar>
  );
}

//add classnames to linkedin and github link to change sizing and move to right side
// add links to github and linkedin in navbar
export default Navigation;
