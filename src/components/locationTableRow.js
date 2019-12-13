import React from "react";
import { Button } from "react-bootstrap";

export function LocationTableRow(props) {
  const { location } = props;

  return (
    <tr>
      <td>{location.id}</td>
      <td>{location.description}</td>
      <td>{location.timestamp}</td>
      <td>{location.latitude}</td>
      <td>{location.longitude}</td>
      <td>{location.elevation}</td>
      <td>
        <span class="myButton">
          <Button onClick={props.editLocationHandler}>Edit</Button>
        </span>
        <span class="myButton">
          <Button variant="danger" onClick={props.deleteLocationHandler}>Delete</Button>
        </span>
      </td>
    </tr>
  );
}
