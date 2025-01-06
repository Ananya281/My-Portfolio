import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import Resume from "../assets/AnanyaResume.pdf";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Detect if the user has scrolled more than half the screen height
      if (window.scrollY > window.innerHeight / 3) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="md"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="#home" className="brand">
          {/* Optional: Add a logo or brand name */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto text-end">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={activeLink === "about" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#tech"
              className={activeLink === "tech" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("tech")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#work"
              className={activeLink === "work" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("work")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contacts"
              className={activeLink === "contacts" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("contacts")}
            >
              Contacts
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ananya-chauhan-b89378251/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="icon" />
              </a>
              <a href="https://github.com/Ananya281" target="_blank" rel="noopener noreferrer">
                <SiGithub className="icon" />
              </a>
              <a href="https://leetcode.com/u/Ananya2801/" target="_blank" rel="noopener noreferrer">
                <SiLeetcode className="icon" />
              </a>
            </div>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <button className="vvd">
                <span>Resume</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
