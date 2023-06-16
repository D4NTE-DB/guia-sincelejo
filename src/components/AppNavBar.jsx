import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import promo from "../assets/icons/promo.png"
import style from "../CSS/appNavBar.module.css"
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import ModalFeature from './ModalFeature';

const AppNavBar = () => {

  const [imgClick, setImgeClick] = useState(true)
  const [show, setShow] = useState(false);

  const clickImgPromo = () => {
    setImgeClick(!imgClick)
  }

  return (
    <>
    

      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            {/* <img as={Link} to='/' style={{width: '30px', margin: 0}} src="images/icon.jpeg" alt="" /> */}
            <img onClick={() => { clickImgPromo(), setShow(true) }} src={promo} alt="Icono de promociones" className={imgClick ? style["img"] : style["img_click"]} />

            <Navbar.Brand style={{ right: '300px', margin: 'initial' }} as={Link} to='/'>
              Food Guía Sincelejo
            </Navbar.Brand>
            <Nav className='about-us-info'>
              <Nav.Link as={Link} to='/about-us'>
                <u>Mas Información</u>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>



      </div>

    </>
  );
};

export default AppNavBar;