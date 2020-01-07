import React from "react";
import { Col, Row } from "react-bootstrap";

export function ViewLocation(props) {
  const { location } = props;
  return (
    <>
      <hr />
      <Row>
        <Col>Date:</Col>
        <Col>{location.timestamp}</Col>
      </Row>
      <Row>
        <Col>Location:</Col>
        <Col>
          {location.latitude}, {location.longitude}
        </Col>
      </Row>
      <Row>
        <Col>Elevation:</Col>
        <Col>{location.elevation}</Col>
      </Row>
    </>
  );
}
