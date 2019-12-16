import React from "react";
import { Button, Col, Form } from "react-bootstrap";

export function TrackProduct(props) {
  let trackingID = "";
  return (
    <div className="verticalSpacer">
      <Form>
        <Col>
          <Form.Control
            type="text"
            placeholder="Product ID"
            onChange={e => {
              trackingID = e.target.value;
            }}
          />
        </Col>
        <div className="centeredContainer verticalSpacer">
          <span className="myButton">
            <Button
              onClick={() => {
                props.showTrackProductHandler(trackingID);
              }}
            >
              Track
            </Button>
          </span>
          <span className="myButton">
            <Button variant="secondary" onClick={props.onClearHandler}>
              Clear
            </Button>
          </span>
        </div>
      </Form>
    </div>
  );
}
