import React from "react";
import { Button, Modal } from "react-bootstrap";

import { ViewLocation } from "./viewLocation";

export function TrackProductDialog(props) {
  const trackingID = props.trackingID || 0;
  const trackingData = props.trackingData || [];
  // Assuming all descriptions are the same
  let description = "";
  if (!!trackingData && trackingData.length > 0) {
    description = trackingData[0].description;
  }

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
            Tracking Product {description}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          History:
          {props.trackingData.map((l, i) => {
            return <ViewLocation key={i} location={l} />;
          })}
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
