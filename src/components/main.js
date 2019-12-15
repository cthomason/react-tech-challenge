import React from 'react';
import { connect } from "react-redux";
import { Accordion, Button, Card } from "react-bootstrap";

import HttpMock from "../lib/HttpMock";
import { loadData } from "../store/actions/product";
import { LocationTable } from "../components/LocationTable";
import { NewLocation } from "../components/newLocationDialog";
import { EditLocation } from "./editLocationDialog";
import { DeleteLocation } from "./deleteLocationDialog";
import { LocationTableFilter } from "./locationTableFilter";
import { TrackProduct } from "./trackProduct";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.http = new HttpMock();
    this.state = {
      showNewModal: false,
      showEditModal: false,
      showDeleteModal: false,
      locationToEdit: 0,
      locationToDelete: 0
    };
  }

  componentDidMount() {
    const data = this.http.get();
    this.props.dispatch(loadData(data));
  }

  render() {
    const { locationToEdit, locationToDelete } = this.state;
    const { location } = this.props.product;

    return (
      <div className="mainPage">
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} eventKey="0">
                Track A Product
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <TrackProduct />
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} eventKey="0">
                Filter Results
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <LocationTableFilter />
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <LocationTable
          locationData={location}
          showNewLocationHandler={this.showNewLocation}
          showEditLocationHandler={this.showEditLocation}
          showDeleteLocationHandler={this.showDeleteLocation}
          saveLocationHandler={this.saveLocation}
          deleteLocationHandler={this.deleteLocation}
        />
        <NewLocation
          show={this.state.showNewModal}
          saveLocationHandler={this.saveLocation}
          closeModalHandler={() => { this.closeNewLocation() }} />
        <EditLocation
          show={this.state.showEditModal}
          saveLocationHandler={this.saveLocation}
          closeModalHandler={() => { this.closeEditLocation() }}
        />
        <DeleteLocation
          show={this.state.showDeleteModal}
          deleteLocationHandler={this.deleteLocation}
          closeModalHandler={() => { this.closeDeleteLocation() }} />
      </div>
    );
  }

  saveLocation = (index = 0) => {
    console.log("saving", index);
  }

  deleteLocation = (index = 0) => {
    console.log("deleting", index);
  }

  showNewLocation = () => {
    this.toggleNewModal(true);
  }

  closeNewLocation = () => {
    this.toggleNewModal(false);
  }

  showEditLocation = (index = 0) => {
    this.setState({ locationToEdit: index });
    this.toggleEditModal(true);
  }

  closeEditLocation = () => {
    this.toggleEditModal(false);
    this.setState({ locationToEdit: 0 });
  }

  showDeleteLocation = (index = 0) => {
    this.setState({ locationToDelete: index });
    this.toggleDeleteModal(true);
  }

  closeDeleteLocation = () => {
    this.toggleDeleteModal(false);
    this.setState({ locationToDelete: 0 });
  }

  toggleNewModal = (val) => {
    this.setState({ showNewModal: val });
  }

  toggleEditModal = (val) => {
    this.setState({ showEditModal: val });
  }

  toggleDeleteModal = (val) => {
    this.setState({ showDeleteModal: val });
  }
}

function mapStateToProps(state) {
  const { product } = state;

  return { product };
}

export default connect(mapStateToProps)(Main);
