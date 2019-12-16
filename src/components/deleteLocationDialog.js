import React from "react";
import { Button, Modal } from "react-bootstrap";

export function DeleteLocation(props) {
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
          Are you sure you want to delete this entry?
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => {
            props.deleteLocationHandler(props.locationToDelete);
          }}
        >
          Yes
        </Button>
        <Button variant="secondary" onClick={props.closeModalHandler}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
