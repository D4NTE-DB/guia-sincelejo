import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
      <Container>
        <img style={{width: '30px', margin: 0}} src="images/icon.jpeg" alt="" />
        <Navbar.Brand style={{right: '300px', margin: 'initial'}} as={Link} to='/'>Guía de Comidas Sincelejo</Navbar.Brand>
        <Nav className='about-us-info'>
          <Nav.Link as={Link} to='/about-us'>
            <u>Mas Información</u>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    
        </div>
    );
};

export default AppNavBar;