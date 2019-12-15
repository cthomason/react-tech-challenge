import React from "react";
import { Spinner, Table } from "react-bootstrap";
import { LocationTableHeader } from "./LocationTableHeader";
import { LocationTableRow } from "./LocationTableRow";

export function LocationTable(props) {
  const { locationData } = props;

  if (!!locationData && locationData.length > 0) {
    return (
      <Table striped bordered hover>
        <LocationTableHeader showNewLocationHandler={props.showNewLocationHandler} />
        <tbody>
          {locationData.map((location, i) => {
            return (
              <LocationTableRow
                key={i}
                index={i}
                location={location}
                showEditLocationHandler={props.showEditLocationHandler}
                showDeleteLocationHandler={props.showDeleteLocationHandler} />
            );
          })}
        </tbody>
      </Table>
    )
  }

  return <Spinner animation="border" />;
}