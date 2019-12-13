import React from 'react';
import { connect } from "react-redux";

import HttpMock from "../lib/HttpMock";
import { loadData } from "../store/actions/product";
import { LocationTable } from "../components/LocationTable";
import { NewLocation } from "../components/NewLocation";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.http = new HttpMock();
    this.show = false;
  }

  componentDidMount() {
    const data = this.http.get();
    this.props.dispatch(loadData(data));
  }

  componentDidUpdate() {
    console.log("updated product", this.props);
  }

  render() {
    console.log(this.show);
    return (
      <>
        <NewLocation show={this.show} onHide={() => { this.show = false }} />
        <LocationTable
          locationData={this.props.product.location}
          newLocationHandler={this.newLocationHandler}
          editLocationHandler={this.editLocationHandler}
          deleteLocationHandler={this.deleteLocationHandler}
        />
      </>
    );
  }

  newLocationHandler = () => {
    this.show = true;
  }

  editLocationHandler = () => {
    console.log("editing");
  }

  deleteLocationHandler = () => {
    console.log("deleting");
  }
}

function mapStateToProps(state) {
  const { product } = state;

  return { product };
}

export default connect(mapStateToProps)(Main);
