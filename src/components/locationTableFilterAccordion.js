import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export function LocationTableFilter(props) {
  return (
    <div>
      <Form>
        <Col>
          <div className="verticalSpacer">
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="ID"
                  defaultValue={props.filters.id}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  defaultValue={props.filters.description}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Date"
                  defaultValue={props.filters.timestamp}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Latitude"
                  defaultValue={props.filters.latitude}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Longitude"
                  defaultValue={props.filters.longitude}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Elevation"
                  defaultValue={props.filters.elevation}
                />
              </Col>
            </Row>
          </div>
          <div className="centeredContainer verticalSpacer">
            <span className="myButton">
              <Button
                onClick={() => {
                  props.onFilterHandler();
                }}
              >
                Filter
              </Button>
            </span>
            <span className="myButton">
              <Button
                variant="secondary"
                onClick={() => {
                  props.onClearHandler();
                }}
              >
                Clear
              </Button>
            </span>
          </div>
        </Col>
      </Form>
    </div>
  );
}
