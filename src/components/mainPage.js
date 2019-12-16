import React from "react";
import { connect } from "react-redux";
import { Accordion, Button, Card } from "react-bootstrap";

import HttpMock from "../lib/HttpMock";
import { loadData } from "../store/actions/product";
import { LocationTable } from "./LocationTable";
import { NewLocation } from "./newLocationDialog";
import { EditLocation } from "./editLocationDialog";
import { DeleteLocation } from "./deleteLocationDialog";
import { LocationTableFilter } from "./locationTableFilterAccordion";
import { TrackProduct } from "./trackProductAccordion";
import { TrackProductDialog } from "./trackProductDialog";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.http = new HttpMock();
    this.state = {
      showNewModal: false,
      showEditModal: false,
      showDeleteModal: false,
      showTrackingModal: false,
      locationToEdit: 0,
      locationToDelete: 0,
      filters: {
        id: "",
        description: "",
        timestamp: "",
        latitude: "",
        longitude: "",
        elevation: ""
      },
      trackingID: ""
    };
  }

  componentDidMount() {
    const data = this.http.get();
    this.props.dispatch(loadData(data));
  }

  render() {
    const { locationToEdit } = this.state;
    const { location } = this.props.product;

    let editLocation = {};
    if (!!location && !!location[locationToEdit]) {
      editLocation = Object.assign({}, location[locationToEdit]);
    }

    return (
      <div className="mainPage">
        <div className="verticalSpacer">
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} eventKey="0">
                  Track A Product
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <TrackProduct
                  showTrackProductHandler={this.showTrackProduct}
                  onClearHandler={this.clearTrackProduct}
                />
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div className="verticalSpacer">
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} eventKey="0">
                  Filter Results
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <LocationTableFilter
                  filters={this.state.filters}
                  onFilterHandler={this.filterTable}
                  onClearHandler={this.clearFilters}
                />
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

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
          saveLocationHandler={this.saveNewLocation}
          closeModalHandler={() => {
            this.closeNewLocation();
          }}
        />

        <EditLocation
          show={this.state.showEditModal}
          saveLocationHandler={this.saveLocation}
          location={editLocation}
          index={this.state.locationToEdit}
          closeModalHandler={() => {
            this.closeEditLocation();
          }}
        />

        <DeleteLocation
          show={this.state.showDeleteModal}
          deleteLocationHandler={this.deleteLocation}
          locationToDelete={this.state.locationToDelete}
          closeModalHandler={() => {
            this.closeDeleteLocation();
          }}
        />

        <TrackProductDialog
          show={this.state.showTrackingModal}
          closeModalHandler={this.closeTrackProduct}
          trackingID={this.state.trackingID}
        />
      </div>
    );
  }

  // Updates a specific location in the dataset
  saveLocation = (index, location) => {
    this.toggleEditModal(false);

    this.http.put(index, location);

    const data = this.http.get();
    this.props.dispatch(loadData(data));
  };

  // Adds a new location to the data set
  saveNewLocation = newLocation => {
    this.toggleNewModal(false);

    this.http.post(newLocation);

    const data = this.http.get();
    this.props.dispatch(loadData(data));
  };

  // Deletes a location from the data set identified by index
  deleteLocation = (index = 0) => {
    // Hide the modal
    this.toggleDeleteModal(false);

    // Send the delete request to the API
    this.http.delete(index);

    const data = this.http.get();
    this.props.dispatch(loadData(data));
  };

  // Shows the new location modal dialog
  showNewLocation = () => {
    this.toggleNewModal(true);
  };

  // Hides the new location modal dialog
  closeNewLocation = () => {
    this.toggleNewModal(false);
  };

  // Shows the edit location modal dialog
  showEditLocation = (index = 0) => {
    this.setState({ locationToEdit: index });
    this.toggleEditModal(true);
  };

  // Hides the edit location modal dialog
  closeEditLocation = () => {
    this.toggleEditModal(false);
    this.setState({ locationToEdit: 0 });
  };

  // Shows the delete location modal dialog
  showDeleteLocation = (index = 0) => {
    this.setState({ locationToDelete: index });
    this.toggleDeleteModal(true);
  };

  // Hides the delete location modal dialog
  closeDeleteLocation = () => {
    this.toggleDeleteModal(false);
    this.setState({ locationToDelete: 0 });
  };

  // Shows the product tracking modal dialog
  showTrackProduct = () => {
    this.toggleTrackingModal(true);
  };

  // Hides the product tracking modal dialog
  closeTrackProduct = () => {
    this.toggleTrackingModal(false);
  };

  clearTrackProduct = () => {
    console.log("clearing product");
  };

  toggleNewModal = val => {
    this.setState({ showNewModal: val });
  };

  toggleEditModal = val => {
    this.setState({ showEditModal: val });
  };

  toggleDeleteModal = val => {
    this.setState({ showDeleteModal: val });
  };

  toggleTrackingModal = val => {
    this.setState({ showTrackingModal: val });
  };

  filterTable = () => {
    console.log("filtering");
    this.setState({ trackingID: "" });
  };

  clearFilters = () => {
    console.log("clearing filters");
    this.setState({
      filters: {
        id: "",
        description: "",
        timestamp: "",
        latitude: "",
        longitude: "",
        elevation: ""
      }
    });
  };
}

function mapStateToProps(state) {
  const { product } = state;

  return { product };
}

export default connect(mapStateToProps)(Main);
