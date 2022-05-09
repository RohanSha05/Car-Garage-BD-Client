import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../Header/logo.png';
import '../Header/Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

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
                            {
                                user ?
                                    <Button onClick={handleSignOut}>Sign out</Button>
                                    :
                                    <Nav.Link href="/login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;