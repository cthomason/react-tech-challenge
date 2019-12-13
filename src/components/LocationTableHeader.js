import React from "react";
import { Button } from "react-bootstrap";

export function LocationTableHeader(props) {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Description</th>
        <th>Timestamp</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Elevation</th>
        <th><Button block onClick={props.newLocationHandler}>Add New</Button></th>
      </tr>
    </thead>
  )
}
