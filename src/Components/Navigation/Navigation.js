import React from 'react';
import logo from '../../logo2.png';
import { Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
<>
  <Navbar  expand="lg">

    <Navbar.Brand><img src={logo} alt=""  style={{width:"150px"}} /></Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto p-3">
            <Nav.Link href="#" className="home-link">Home</Nav.Link>
            <Nav.Link href="#" className="btn signup-btn">Sign Up</Nav.Link>
        </Nav>
  </Navbar.Collapse>
  </Navbar>   
 </>
    );
};

export default Navigation;