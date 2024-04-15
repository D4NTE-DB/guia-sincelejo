import React from 'react';
import { Button, Card } from 'react-bootstrap';

const AboutMe = () => {

    return (
        <div>
            <Card style={{
                position: 'relative', top: '100px', width: "80%",
                height: "90%", padding: '2rem'
            }}>
                <Card.Img style={{ width: '20%' }} variant="top" src="images/info.png" />
                <Card.Body>
                    <Card.Title>¡Hola! Soy el Creador de esta página web</Card.Title>
                    <Card.Text style={{ textAlign: 'left' }}>
                        ¡Hola a todos! 👋 Soy un programador Full Stack con experiencia en:
                        <ul>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>TypeScript</li>
                            <li>React Js</li>
                            <li>Redux</li>
                            <li>PostgreSQL</li>
                            <li>Node.js</li>
                        </ul>
                        He creado un directorio completo de restaurantes locales en la ciudad de Sincelejo con sus cuentas de Instagram y WhatsApp en un solo lugar 📱📲. Además, puedo ayudarte a crear una página web personalizada para tu negocio o proyecto. Me aseguraré de que tu sitio web sea 100% personalizado para satisfacer tus necesidades y requisitos. Si estás interesado en mi servicio de desarrollo web, contáctame para que podamos discutir más detalles. También estoy abierto a propuestas laborales en el área de desarrollo de software.
                        <h6>¡así que no dudes en contactarme si estás buscando un programador Full Stack con habilidades en las tecnologías mencionadas anteriormente!</h6>
                    </Card.Text>
                    <div>
                        <section className="contacts" id="contacts">
                            <h2 className="start center">Contáctame</h2>
                            <div className="all-info">
                                <div className="icons-contacts center">
                                    <svg width="40" height="40" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.9919 7.66663H33.0082C34.7968 7.66663 36.2602 9.22507 36.2602 11.1298V31.909C36.2602 33.8138 34.7968 35.3722 33.0082 35.3722H6.9919C5.20328 35.3722 3.73987 33.8138 3.73987 31.909V11.1298C3.73987 9.22507 5.20328 7.66663 6.9919 7.66663Z"
                                            stroke="#EDE5DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M36.2602 11.1299L20 23.2511L3.73987 11.1299" stroke="#EDE5DC" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h4 className="center"></h4>
                                    <p className="center" id="myInput">Email</p>
                                    <p className="center"><a href="mailto:dantealigheri.1998@gmail.com">dantealigheri.1998@gmail.com</a></p>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default AboutMe;