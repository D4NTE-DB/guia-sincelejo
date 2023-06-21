import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import promo from "../assets/icons/promo.png"
import style from "../CSS/appNavBar.module.css"
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import ModalFeature from './ModalFeature';

const AppNavBar = () => {
    return (
        <div>
           
    <Card>
    <Navbar bg="" expand="lg">
      <Container>
        <img as={Link} to='/' style={{width: '30px', margin: 0}} src="images/icon.jpeg" alt="" />
        <Navbar.Brand style={{right: '300px', margin: 'initial'}} as={Link} to='/'>Food Guía Sincelejo</Navbar.Brand>
        <Nav className='about-us-info'>
          <Nav.Link as={Link} to='/about-us'>
            <u>Mas Información</u>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </Card>
        </div>
    );
};

export default AppNavBar;