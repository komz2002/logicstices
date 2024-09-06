import React from "react";
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  NavDropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <>
      <div className="head">
        <div className="info d-none d-lg-flex justify-content-between">
          <div className="info-item">info@example.com</div>
          <div className="info-item">6391 Elgin St. Celina, 10299</div>
          <div className="info-item">(629) 555-0129</div>
        </div>
        <div className="main2 d-flex justify-content-end">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <BootstrapNavbar expand="lg" className="bg-body-tertiary">
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/">
            <img
              src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/resource/logo-1.png"
              alt="Logo"
              className="navbar-logo"
            />
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto gap-3 shell">
              <LinkContainer to="/">
                <Nav.Link className="navi">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="navi">About Us</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/services">
                <Nav.Link className="navi">Services</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Nav.Link className="navi">Projects</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="navi">Contact</Nav.Link>
              </LinkContainer>
              <NavDropdown
                title="Page"
                id="basic-nav-dropdown"
                className="navp"
              >
                <LinkContainer to="/testimonials">
                  <NavDropdown.Item className="navi">
                    testimonials
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Faq's">
                  <NavDropdown.Item className="navi">Faq's</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown
                title="Blog"
                id="basic-nav-dropdown"
                className="navp"
              >
                <LinkContainer to="/OurBlog">
                  <NavDropdown.Item className="navi">Our Blog</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Blogdetails">
                  <NavDropdown.Item className="navi">
                    Blog details
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export default CustomNavbar;
