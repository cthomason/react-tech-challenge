import React from "react";
import { Button, Modal } from "react-bootstrap";

import { ViewLocation } from "./viewLocation";

export function TrackProductDialog(props) {
  const trackingID = props.trackingID || 0;

  return (
    <div className="verticalSpacer">
      <Modal
        show={props.show}
        onHide={props.closeModalHandler}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Tracking Product {trackingID}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tracking info goes here
          <ViewLocation />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModalHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
