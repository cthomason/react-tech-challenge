import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export function LocationTableFilter(props) {
  const { filters } = props;

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
                  value={filters.id}
                  onChange={e => {
                    console.log(e.target.value);
                    filters.id += e.target.value;
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  value={props.filters.description}
                  onChange={e => {
                    filters.description = e.target.value;
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Date"
                  value={props.filters.timestamp}
                  onChange={e => {
                    filters.timestamp = e.target.value;
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Latitude"
                  value={props.filters.latitude}
                  onChange={e => {
                    filters.latitude = e.target.value;
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Longitude"
                  value={props.filters.longitude}
                  onChange={e => {
                    filters.longitude = e.target.value;
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Elevation"
                  value={props.filters.elevation}
                  onChange={e => {
                    filters.elevation = e.target.value;
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="centeredContainer verticalSpacer">
            <span className="myButton">
              <Button
                onClick={() => {
                  props.onFilterHandler(filters);
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
