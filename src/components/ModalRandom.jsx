import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

const ModalRandom = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Food Guía Sincelejo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <h4>{props.data[0].name}</h4>
        <Card.Img style={{
          width: '160px',
          height: '160px'
        }}
          variant="top"
          src={props.data[0].images} />
        <Card style={{
          width: '8rem',
          position: 'relative',
          height: '95px',
          top: '5px'
        }}>
          <Card.Body style={{
            margin: 'auto', position: 'relative',
            right: '10px',
            top: '-8px'
          }}>

            <Card.Title style={{ position: 'relative', top: '15px', fontSize: '14px', right: '-11px' }}>Contáctanos</Card.Title>
            <div style={{ position: 'relative', right: '14px', top: '-40px' }}>
              <Card.Link href={props.data[0].contact?.instgram}>
                <img style={{ width: '35px', position: 'absolute', top: '52px' }} src='images/instagram.png' alt="" />
              </Card.Link>
              <Card.Link href={props.data[0].contact?.phoneNum}>
                <img style={{ width: '35px', position: 'absolute', right: '-23px', top: '52px' }} src='images/whatsapp.png' alt="" />

              </Card.Link>
            </div>
          </Card.Body>
        </Card>
        <p>El recomedado del día</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );

};

export default ModalRandom;