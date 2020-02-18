import React from "react";
import { connect } from "react-redux";

class PromisePage extends React.Component {
  render() {
    return (
      <div>
        Promise Page
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { location } = state;

  return location;
}

export default connect(mapStateToProps)(PromisePage);