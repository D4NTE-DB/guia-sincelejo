import React from "react";
import { Button, Card, Modal } from "react-bootstrap";

const MyVerticallyCenteredModal = (props) => {
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
      <Modal.Body>
        <h4>¡Agrega tu Negocio o Recomiendanos el tuyo de preferencia!</h4>
        <p>
          Selecciona el icono de email📩 y llena el formulario para agregar a tu
          restaurante.
        </p>
        <Card>
        <Card.Link
          className="socials-items"
          href="https://forms.gle/sFyGSV3ieQqFUhUx8"
          style={{width: 'fit-content', padding: '5px'}}
        >
          <img src="images/formulario.png" alt="" />
        </Card.Link>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
