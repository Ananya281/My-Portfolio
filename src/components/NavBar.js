import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import Resume from "../assets/Resume.pdf";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) 
      {
        setScrolled(true);
      } 
      else 
      {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#tech" className={activeLink === 'tech' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tech')}>Skills</Nav.Link>
            <Nav.Link href="#work" className={activeLink === 'work' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('work')}>Projects</Nav.Link>
            <Nav.Link href="#contacts" className={activeLink === 'contacts' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contacts')}>Contacts</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ananya-chauhan-b89378251/ " target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="icon"/></a>
              <a href="https://github.com/Ananya281" target="_blank" rel="noopener noreferrer"><SiGithub className="icon" /></a>
              <a href="https://leetcode.com/u/ananyachauhan2801/" target="_blank" rel="noopener noreferrer"><SiLeetcode className="icon" /></a>
            </div>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <button className="vvd"><span>Resume</span></button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};