import React from "react";
import { Button, Form } from "react-bootstrap";

export function TrackProduct(props) {
  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group>
            <Form.Control type="text" placeholder="Product ID" />
          </Form.Group>
          <Button>Track</Button>
        </Form.Row>
      </Form>
    </div>
  )
}
