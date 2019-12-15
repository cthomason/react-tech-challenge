import React from "react";
import { Button, Modal } from "react-bootstrap";

import { LocationInputForm } from "./locationInputForm";

export function EditLocation(props) {
  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Location
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LocationInputForm location={props.location} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.saveLocationHandler}>Save</Button>
        <Button onClick={props.closeModalHandler}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}