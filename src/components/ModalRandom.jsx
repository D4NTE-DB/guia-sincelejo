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
        <Modal.Body style={{textAlign: "center"}}>
          <h4>{props.data[0].name}</h4>
          <Card.Img style={{
                        width: '160px',
                        height: '160px'
                    }}
                        variant="top"
                        src={props.data[0].images} />
          <p>
El recomedado del día          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
    
};

export default ModalRandom;