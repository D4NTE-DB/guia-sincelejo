import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import promo from "../assets/icons/promo.png"
import style from "../CSS/appNavBar.module.css"
import { useState } from 'react';

const AppNavBar = () => {

    const [imgClick, setImgeClick] = useState(true)

    const clickImgPromo = () => {
      setImgeClick(!imgClick)
      console.log(imgClick)
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
              <Container>
                {/* <img as={Link} to='/' style={{width: '30px', margin: 0}} src="images/icon.jpeg" alt="" /> */}
                <img onClick={()=>clickImgPromo()} src={promo} alt="Icono de promociones" className={imgClick ? style["img"] : style["img_click"]}/>
                <Navbar.Brand style={{right: '300px', margin: 'initial'}} as={Link} to='/'>
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
    );
};

export default AppNavBar;