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
        <span className="myButton">
          <Button onClick={() => { props.showEditLocationHandler(props.index) }}>Edit</Button>
        </span>
        <span className="myButton">
          <Button variant="danger" onClick={() => { props.showDeleteLocationHandler(props.index) }}>Delete</Button>
        </span>
      </td>
    </tr>
  );
}
