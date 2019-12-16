import React from "react";
import { Button, Modal } from "react-bootstrap";

import { LocationInputForm } from "./locationInputForm";

export function EditLocation(props) {
  const location = props.location || {};
  const { index } = props;

  return (
    <Modal
      show={props.show}
      onHide={props.closeModalHandler}
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
        <LocationInputForm location={location} />
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.saveLocationHandler(index, location);
          }}
        >
          Save
        </Button>
        <Button variant="secondary" onClick={props.closeModalHandler}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
