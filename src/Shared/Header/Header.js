import { signOut } from 'firebase/auth';
import React from 'react';
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Electric Warehouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>

                        <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>

                        
                        {
                            user && <>
                                <Nav.Link as={Link} to="/manageItems">Manage Items</Nav.Link>
                                <Nav.Link as={Link} to="/addDevices">Add Devices</Nav.Link>
                            </>
                        }
                        <Nav.Link as={Link} to='/blogs' >Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <button className='btn btn-active btn-accent' onClick={handleSignOut}>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;