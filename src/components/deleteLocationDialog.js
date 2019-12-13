import React from "react";
import { Button, Modal } from "react-bootstrap";

export function NewLocation(props) {
  const { show } = props;
  console.log(show);
  console.log("Hi there");
  return (
    <Modal
      {...props}
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
        <Button>Yes</Button>
        <Button>No</Button>
      </Modal.Footer>
    </Modal>
  );
}