import React from "react";
import { connect } from "react-redux";
import { Accordion, Button, Card } from "react-bootstrap";

import HttpMock from "../lib/HttpMock";
import {
  loadLocations,
  updateLocation,
  addLocation,
  deleteLocation
} from "../store/actions/location";
import { LocationTable } from "./locationTable";
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
      trackingID: "",
      trackingData: [],
      filteredData: {}
    };
  }

  componentDidMount() {
    const data = this.http.get();
    this.props.dispatch(loadLocations(data));
    this.setState({ filteredData: data });
  }

  render() {
    const { locationToEdit } = this.state;
    const { location } = this.props;

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
                  defaultValue={this.state.trackingID}
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
          locationData={this.state.filteredData}
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
          trackingData={this.state.trackingData}
        />
      </div>
    );
  }

  // Updates a specific location in the dataset
  saveLocation = (index, location) => {
    this.toggleEditModal(false);

    this.http.put(index, location);

    const data = this.http.get();
    this.props.dispatch(updateLocation(data));
  };

  // Adds a new location to the data set
  saveNewLocation = newLocation => {
    this.toggleNewModal(false);

    this.http.post(newLocation);

    const data = this.http.get();
    this.props.dispatch(addLocation(data));
  };

  // Deletes a location from the data set identified by index
  deleteLocation = (index = 0) => {
    // Hide the modal
    this.toggleDeleteModal(false);

    // Send the delete request to the API
    this.http.delete(index);

    const data = this.http.get();
    this.props.dispatch(deleteLocation(data));
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
  showTrackProduct = trackingID => {
    this.setState({ trackingID });
    this.toggleTrackingModal(true);
    let trackingData = this.props.location.filter(
      l => l.id === Number(trackingID)
    );
    trackingData.sort((a, b) => {
      return a.timestamp < b.timestamp;
    });
    this.setState({ trackingData });
  };

  // Hides the product tracking modal dialog
  closeTrackProduct = () => {
    this.toggleTrackingModal(false);
    this.setState({ trackingData: [] });
  };

  // Clears the trackingID value
  clearTrackProduct = () => {
    this.setState({ trackingID: "" });
  };

  // Shows or hides the add new location modal
  toggleNewModal = val => {
    this.setState({ showNewModal: val });
  };

  // Shows or hides the edit location modal
  toggleEditModal = val => {
    this.setState({ showEditModal: val });
  };

  // Shows or hides the delete location modal
  toggleDeleteModal = val => {
    this.setState({ showDeleteModal: val });
  };

  // Shows or hides the product tracking modal
  toggleTrackingModal = val => {
    this.setState({ showTrackingModal: val });
  };

  // Filters the location data according to the filters received
  // In this implementation it filters by exact match only
  filterTable = filters => {
    let filteredData = this.props.location;

    if (!!filters.id) {
      filteredData = filteredData.filter(d => {
        // ID data type is number so convert the filter accordingly
        return d.id === Number(filters.id);
      });
    }

    if (!!filters.description) {
      filteredData = filteredData.filter(d => {
        return d.description === filters.description;
      });
    }

    if (!!filters.timestamp) {
      filteredData = filteredData.filter(d => {
        return d.timestamp === filters.timestamp;
      });
    }

    if (!!filters.latitude) {
      filteredData = filteredData.filter(d => {
        // Latitude data type is also a number
        return d.latitude === Number(filters.latitude);
      });
    }

    if (!!filters.longitude) {
      filteredData = filteredData.filter(d => {
        // Longitude data type is also a number
        return d.longitude === Number(filters.longitude);
      });
    }

    if (!!filters.elevation) {
      filteredData = filteredData.filter(d => {
        // Elevation data type is also a number
        return d.elevation === Number(filters.elevation);
      });
    }

    // Update the filters and the data displayed
    this.setState({ filters, filteredData });
  };

  // Clears the filters used to filter the location data
  clearFilters = () => {
    const filteredData = this.props.location;
    this.setState({
      filters: {
        id: "",
        description: "",
        timestamp: "",
        latitude: "",
        longitude: "",
        elevation: ""
      },
      filteredData
    });
  };
}

function mapStateToProps(state) {
  const { location } = state;

  return location;
}

export default connect(mapStateToProps)(Main);
