import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaMedium,
  FaYoutube,
} from "react-icons/fa";

function Navigation() {
  return (
    <Navbar sticky="top" bg="dark" expand="sm">
      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css?family=Amatic+SC"
      />
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
        <a href="https://drive.google.com/file/d/1vLOVUWlsAXlwu_T57nfOCgH1DMqfE6ya/view?usp=sharing"           target="_blank"
          rel="noopener noreferrer"
          className="d-inline p-2 text-white amatic">
          Resume
        </a>
      </Nav>
      <div className="rightside">
        <a
          href="https://www.linkedin.com/in/joseph-cha-316639174/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="navicon" />
        </a>
        <a
          href="https://github.com/josephscha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare className="navicon" />
        </a>
        <a
          href="https://www.facebook.com/JoeChaCha/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare className="navicon" />
        </a>
        <a
          href="https://medium.com/@cha_joseph"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium className="navicon" />
        </a>
        <a href="https://www.youtube.com/user/joebehustlin" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="navicon" />
        </a>
      </div>
    </Navbar>
  );
}

//add classnames to linkedin and github link to change sizing and move to right side
// add links to github and linkedin in navbar
export default Navigation;
