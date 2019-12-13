import React from "react";
import { Spinner, Table } from "react-bootstrap";
import { LocationTableHeader } from "./LocationTableHeader";
import { LocationTableRow } from "./LocationTableRow";

export function LocationTable(props) {
  const { locationData } = props;

  if (!!locationData && locationData.length > 0) {
    return (
      <Table striped bordered hover>
        <LocationTableHeader newLocationHandler={props.newLocationHandler} />
        <tbody>
          {locationData.map(location => {
            return (
              <LocationTableRow
                location={location}
                editLocationHandler={props.editLocationHandler}
                deleteLocationHandler={props.deleteLocationHandler} />
            );
          })}
        </tbody>
      </Table>
    )
  }

  return <Spinner animation="border" />;
}