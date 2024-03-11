import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <div>
            <div className='header sticky-top shadow-lg'>
            <Navbar className='' collapseOnSelect expand='lg' variant='light'>
    <Container>
        <div className="navbar-container">
          
            <Navbar.Brand as={Link} to='/'>
                <img
                    className='logo'
                    src='https://i.ibb.co/DWbkNSq/jewelry2-1-removebg-preview.png'
                    alt=''
                />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='mx-auto nav-bar'>
                    <Nav.Link as={Link} to='/about'>
                        ABOUT US
                    </Nav.Link>
                    <Nav.Link as={Link} to='/contact'>
                        CONTACT US
                    </Nav.Link>
                    <Nav.Link as={Link} to='/products'>
                        EXPLORE SHOP
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to='/login'>
                        <Button className='btn btn-regular registration-btn'>Sign in</Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/registration'>
                        <Button className='btn btn-regular registration-btn'>Registration</Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
    </Container>
</Navbar>


            </div>
        </div>
    )
}

export default Header;
