import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../Header/logo.png';
import '../Header/Header.css'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='nav-bar' variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="80"
                            height="60"
                            className="d-inline-block align-middle me-0"
                            alt="React Bootstrap logo"
                        />
                        <span className='fw-bolder'>Car Garage BD</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/item">Manage Inventories</Nav.Link>
                            <Nav.Link href="#pricing">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;