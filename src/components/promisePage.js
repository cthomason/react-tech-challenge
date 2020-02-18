import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { logClick } from "../lib/utils";
import * as Promise from "bluebird";

class PromisePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayText: ""
    };
  }
  render() {
    return (
      <div className="page">
        <div>
          <Button id="clickMe" onClick={this.clickHandler}>Click Me!</Button>
          {this.state.displayText}
        </div>
        <div>
          <Button id="badPromise" onClick={this.badClickHandler}>Reject!</Button>
        </div>
      </div>
    );
  }

  clickHandler = e => {
    let myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success");
      }, 1000);
    });

    myPromise.then(() => {
      this.setState({ displayText: "Promise fulfilled!" });
    });

    logClick("/promise", e.target.id);
  };

  badClickHandler = e => {
    let myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("failure"));
      }, 1000);
    });

    myPromise.then(() => {
      this.setState({ displayText: "Promise fulfilled!" });
    }).catch(error => {
      console.log(error);
    });

    logClick("/promise", e.target.id);
  };
}

function mapStateToProps(state) {
  const { location } = state;

  return location;
}

export default connect(mapStateToProps)(PromisePage);
