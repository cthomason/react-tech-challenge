import React from 'react';
import { connect } from "react-redux";

class Main extends React.Component {

  componentDidMount = () => {
    console.log(this.props);
  }

  render = () => {
    return (<p>This is my react app</p>);
  }

}

function mapStateToProps(state) {
  console.log(state);

  return state;
}

export default connect(mapStateToProps)(Main);
