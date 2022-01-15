import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";
import { IoLogoWhatsapp } from "react-icons/io";

const Header = () => {
  return (
    <div className='header'>
      <Navbar collapseOnSelect expand='lg' variant='light' sticky='top'>
        <Container>
          <Nav>
            <Navbar.Brand className='Brand' href='#home'>
              DevFps
              <span className='com'>.com</span>
            </Navbar.Brand>
          </Nav>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link className='Brand' href='#home'>
                Home
              </Nav.Link>
              <Nav.Link href='#about'>About Me</Nav.Link>
              <Nav.Link href='#contact'>Contact Me</Nav.Link>
              <Nav.Link href='#projects'>projects</Nav.Link>
              <Nav.Link className='logo-collapse'>
                <IoLogoWhatsapp />
                <span className='call'>+98 933-647-6498</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link className='logo'>
              <IoLogoWhatsapp />
              <span className='call'>+98 933-647-6498</span>
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
