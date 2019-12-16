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
            defaultValue={location.id || ""}
            onChange={e => {
              location.id = Number(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            defaultValue={location.description || ""}
            onChange={e => {
              location.description = e.target.value;
            }}
          />
        </Form.Group>
        <Form.Group controlId="formTimestamp">
          <Form.Label>Timestamp</Form.Label>
          <Form.Control
            type="text"
            defaultValue={location.timestamp || ""}
            onChange={e => {
              location.timestamp = e.target.value;
            }}
          />
        </Form.Group>
        <Form.Group controlId="formLatitude">
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            type="text"
            defaultValue={location.latitude || ""}
            onChange={e => {
              location.latitude = e.target.value;
            }}
          />
        </Form.Group>
        <Form.Group controlId="formLongitude">
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            type="text"
            defaultValue={location.longitude || ""}
            onChange={e => {
              location.longitude = e.target.value;
            }}
          />
        </Form.Group>
        <Form.Group controlId="formElevation">
          <Form.Label>Elevation</Form.Label>
          <Form.Control
            type="text"
            defaultValue={location.elevation || ""}
            onChange={e => {
              location.elevation = e.target.value;
            }}
          />
        </Form.Group>
      </Form>
    </>
  );
}
