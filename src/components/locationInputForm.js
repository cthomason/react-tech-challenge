import React from "react";
import { Form } from "react-bootstrap";

export function LocationInputForm(props) {
  const location = props.location || {};

  return (
    <>
      <Form>
        <Form.Group controlId="formID">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="ProducID"
            defaultValue={location.id || ""}
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product ID"
            defaultValue={location.description || ""}
          />
        </Form.Group>
        <Form.Group controlId="formTimestamp">
          <Form.Label>Timestamp</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product ID"
            defaultValue={location.timestamp || ""}
          />
        </Form.Group>
        <Form.Group controlId="formLatitude">
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product ID"
            defaultValue={location.latitude || ""}
          />
        </Form.Group>
        <Form.Group controlId="formLongitude">
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product ID"
            defaultValue={location.longitude || ""}
          />
        </Form.Group>
        <Form.Group controlId="formElevation">
          <Form.Label>Elevation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product ID"
            defaultValue={location.elevation || ""}
          />
        </Form.Group>
      </Form>
    </>
  )
}