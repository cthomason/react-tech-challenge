import React from "react";
import { Button, Col, Form } from "react-bootstrap";

export function LocationTableFilter(props) {
  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Label>Filter Results</Form.Label>
          <Form.Group controlId="formID">
            <Form.Control
              type="text"
              placeholder="ID"
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Control
              type="text"
              placeholder="Description"
            />
          </Form.Group>
          <Form.Group controlId="formTimestamp">
            <Form.Control
              type="text"
              placeholder="Date"
            />
          </Form.Group>
          <Form.Group controlId="formLatitude">
            <Form.Control
              type="text"
              placeholder="Latitude"
            />
          </Form.Group>
          <Form.Group controlId="formLongitude">
            <Form.Control
              type="text"
              placeholder="Longitude"
            />
          </Form.Group>
          <Form.Group controlId="formElevation">
            <Form.Control
              type="text"
              placeholder="Elevation"
            />
          </Form.Group>
          <Button>Filter</Button>
        </Form.Row>
      </Form>
    </div>
  )
}
