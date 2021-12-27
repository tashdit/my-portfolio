import React from 'react';
import "./Header.css"
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar sticky="top" className="header" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle style={{ background: "#fff" }} />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
                        <Nav.Link as={Link} to="/blogs" className="nav-link">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/services" className="nav-link">Services</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="nav-link">Contact Me</Nav.Link>     
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;