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
                    props.handleFilterChange("id", e.target.value);
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  value={filters.description}
                  onChange={e => {
                    props.handleFilterChange("description", e.target.value);
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Date"
                  value={filters.timestamp}
                  onChange={e => {
                    props.handleFilterChange("timestamp", e.target.value);
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Latitude"
                  value={filters.latitude}
                  onChange={e => {
                    props.handleFilterChange("latitude", e.target.value);
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Longitude"
                  value={filters.longitude}
                  onChange={e => {
                    props.handleFilterChange("longitude", e.target.value);
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Elevation"
                  value={filters.elevation}
                  onChange={e => {
                    props.handleFilterChange("elevation", e.target.value);
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
