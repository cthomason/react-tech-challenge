import React from "react";
import { Button, Modal } from "react-bootstrap";

export function DeleteLocation(props) {
  return (
    <Modal
      show={props.show}
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
        <Button onClick={() => { props.deleteLocationHandler() }}>Yes</Button>
        <Button onClick={props.closeModalHandler}>No</Button>
      </Modal.Footer>
    </Modal>
  );
}