import React from "react";
import { Button, Modal } from "react-bootstrap";

import { LocationInputForm } from "./locationInputForm";

export function NewLocation(props) {
  const newLocation = {
    id: "",
    description: "",
    timestamp: "",
    longitude: "",
    latitude: "",
    elevation: ""
  };

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
          New Location
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LocationInputForm location={newLocation} />
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            console.log(newLocation);
            props.saveLocationHandler(newLocation);
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
