import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const AppNavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
      <Container>
        <img style={{width: '30px', margin: 0}} src="images/icon.jpeg" alt="" />
        <Navbar.Brand style={{right: '300px', margin: 'initial'}} href="#home">Guía de Comidas Sincelejo</Navbar.Brand>
      </Container>
    </Navbar>
    
        </div>
    );
};

export default AppNavBar;