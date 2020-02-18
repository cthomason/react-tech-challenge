import React from "react";
import { connect } from "react-redux";

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        Profile Page
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { location } = state;

  return location;
}

export default connect(mapStateToProps)(ProfilePage);